"use client";
import Badges from "@/Components/Components/Badges";
import Keyboard from "@/Components/Kogo/Keyboard";
import { getAgentCategories } from "@/services/apis/Kogonaut";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { _gTabSession, _setTabSession } from "@/services/helper/SessionManager";
import { _createUpdateChatRoom } from "@/services/helper/KogoAgent";
import { getGuestUserID } from "@/services/helper/SessionManager";
import { getKey } from "@/services/constant";
import Store from "./store/page";
import { myStoreDetail, lisanceAuthorization } from "@/services/apis/store";
import { encryptAndSerializeData } from "@/services/helper/SessionManager";
import Cookies from "js-cookie";

export default function NewKogoAgent() {
  const { data: session, status } = useSession();
  const [agentCategories, setAgentCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState();
  const [activeAgent, setActiveAgent] = useState();
  const [socket, setSocket] = useState(null);
  const [login_user_id, setlogin_user_id] = useState("");
  const [userData, setuserData] = useState(null);
  const [guest_sender, setguest_sender] = useState("");
  const { push } = useRouter();
  const [roomDetail, setroomDetail] = useState(null);
  const [connectionEstablished, setconnectionEstablished] = useState(false);
  const [new_text_msg, setnew_text_msg] = useState("");
  const [showAllStoresPage, setShowAllStoresPage] = useState(true);
  const [myStoreDetailData, setMyStoreDetailData] = useState([]);
  const [licenceAuthToken, setLicenceAuthToken] = useState("");
  // const[licenceAuthToken, setLicenceAuthToken] = useState("");

  useEffect(() => {
    fetchAgentCategories();
  }, []);

  useEffect(() => {
    if (activeAgent) {
      console.log("activeAgent", activeAgent);
      const pathToRedirect =
        "/kogonaut_v2/chat?agent=" +
        activeAgent +
        "&category=" +
        activeCategory;
      push(pathToRedirect);
    }
  }, [activeAgent]);

  useEffect(() => {
    let guestUserID = "";
    if (status == "unauthenticated") {
      // push("/signin");
      guestUserID = getGuestUserID();
    }
    if (status == "authenticated") {
      if (session && session.user) {
        setlogin_user_id(session.user._id);
        setuserData(session.user);
        guestUserID = getGuestUserID();
      }
    }
    if (guestUserID !== "") {
      setguest_sender(guestUserID);
    }
  }, [status]);

  useEffect(() => {
    if (
      (login_user_id && login_user_id !== "") ||
      (guest_sender && guest_sender !== "")
    ) {
      _createUpdateRoom();
      const socketInstance = io(getKey("chat_socket_url"));

      setSocket(socketInstance);
      return () => {
        if (socketInstance) {
          socketInstance.disconnect();
        }
      };
    }
  }, [login_user_id, guest_sender]);

  // myStoreDetail input data obj.
  const inputDataMyStore = {
    first: 10,
    offset: 0,
  };

  // lisanceAuthorization input data
  const configLicenceAuthKey = getKey("kogo_os_auth_key");
  const lisanceAuthorizationInputData = {
    auth_key: configLicenceAuthKey,
  };

  // api call
  useEffect(() => {
    _myStoreDetail();
    _lisanceAuthorization();
    isTokenAvailable();
  }, []);

  //
  const _myStoreDetail = async () => {
    const myStoreData = await myStoreDetail(inputDataMyStore);
    if (myStoreData) {
      setMyStoreDetailData(myStoreData.data.toolMarketPlace);
    }
  };
  ///getting lisance authorization token from api

  const _lisanceAuthorization = async () => {
    const lisanceAuthorizationToken = await lisanceAuthorization(
      lisanceAuthorizationInputData
    );
    if (lisanceAuthorizationToken) {
      setLicenceAuthToken(
        lisanceAuthorizationToken.data.authKogoOSClient.token
      );
    }
  };

  //function to check token is available in cookies or not
  const isTokenAvailable = () => {
    // Calculate expiration time (10 hours from now)
    const currentTimeInMs = new Date().getTime();
    const expirationTime = currentTimeInMs + 10 * 60 * 60 * 1000; // 10 hours in milliseconds
    console.log("cookies should expire in ::", expirationTime);
    const storedData = Cookies.get("licence_authorization_token");
    if (storedData && storedData == "") {
      Cookies.set(
        "licence_authorization_token",
        encryptAndSerializeData(licenceAuthToken),
        {
          expires: expirationTime,
        }
      );
    }
  };

  /////
  const _createUpdateRoom = async () => {
    try {
      const KogoNautThreadChatRoom = _gTabSession({
        session_name: "KogoNautThreadChatRoom_kogoos",
      });
      if (KogoNautThreadChatRoom && KogoNautThreadChatRoom !== "") {
        console.log("My room is ", KogoNautThreadChatRoom);
        selectRoom(KogoNautThreadChatRoom, "yes");
      } else {
        const getRoomDetail = await _createUpdateChatRoom({
          sender: login_user_id && login_user_id !== "" ? login_user_id : null,
          guest_sender: guest_sender,
          reciever: getKey("kogonautID"),
        });
        if (getRoomDetail) {
          _setTabSession({
            session_name: "KogoNautThreadChatRoom_kogoos",
            session_value: getRoomDetail,
          });
          console.log("getRoomDetail", getRoomDetail);
          selectRoom(getRoomDetail, "yes");
        }
      }
    } catch (err) {
      alert(err);
    }
  };

  const selectRoom = async (item) => {
    setroomDetail(item);
  };

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        _onConnectionEstablished();
      });
      socket.on("message", (data) => _pushMessageLocally(data));
      _joinUserToChatRoom(getKey("kogonautID"), login_user_id);
    }
  }, [socket]);

  const _onConnectionEstablished = () => {
    setconnectionEstablished(true);
  };

  const _joinUserToChatRoom = async (recieverId, senderId) => {
    let senderUserID = senderId && senderId !== "" ? senderId : null;
    socket.emit(
      "join_kogoos",
      {
        sender: senderUserID,
        reciever: recieverId,
        guest_sender: guest_sender,
      },
      (error) => {
        if (error) {
          console.log("Error in connection. Please try again.");
        } else {
          console.log("join");
          agentInitiated();
        }
      }
    );
  };

  const agentInitiated = () => {
    try {
      let thread_id = null;
      let agent_id = null;
      const agent = searchParams.get("agent");
      if (agent && agent !== "") {
        agent_id = agent;
      }
      const id = searchParams.get("id");
      if (id) {
        thread_id = id;
      }
      if (agent_id && !thread_id) {
        // send default msg initiatiate
        sendMsg({
          textMessage: "",
          is_goodMorningMsg: "no",
          isImagePathSet: "no",
          agent_id: agent_id,
        });
      }

      const threadstartmsg = _gTabSession({
        session_name: "kogoNaut_V2_threadstartmsg",
      });
      if (threadstartmsg && threadstartmsg !== "") {
        sendMsg({
          textMessage: threadstartmsg,
          is_goodMorningMsg: "no",
          isImagePathSet: "no",
        });
      }
    } catch (err) {}
  };

  const sendMsg = async ({ textMessage = "" }) => {
    try {
      if (textMessage !== "") {
        if (connectionEstablished) {
          const sendChat = {
            message: textMessage,
            image: "",
            callback: function () {},
            thread_id: null,
            agent_id: null,
            agent_category_id: activeCategory, // agent category mongo id
            is_agent_initialization: 0, // if agent initialise without sending msg then send 1
            agent_title: "",
          };
          console.log("sendChat", sendChat);
          socket.emit("chat_kogoos", sendChat);
          _setTabSession({
            session_name: "kogoNaut_V2_threadstartmsg",
            session_value: "",
          });
        } else {
          console.log("Connection is not established. Please try again.");
        }
      }
      // cancelPromptFlow();
    } catch (err) {
      console(err);
    }
  };

  const _pushMessageLocally = async (data) => {
    try {
      // set thread id
      console.log("data", data);
      if (data.thread_id) {
        console.log(data.thread_id);
        push(
          "/kogonaut_v2/chat?category=" +
            activeCategory +
            "&id=" +
            data.thread_id
        );
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const newObjToPush = {
    agents: [
      {
        icon: "https://d15mcvsd48kerh.cloudfront.net/public/chatEmoji/agent/17095545742980.png",
        name: "KTM Test Drive",
        __typename: "AgentData",
        _id: "65d72240bfa0cde6b0c8f15c",
      },
    ],
    description: "Hi! I am Travel Kogo. What are you looking for today?",
    icon: "https://d15mcvsd48kerh.cloudfront.net/public/chatEmoji/agentCategory/travel.png",
    name: "My Store",
    __typename: "AgentCategoryData",
    //20 added at end of _id
    _id: "65cf48998171e01489a62920",
  };
  const fetchAgentCategories = async () => {
    const categories = await getAgentCategories();
    if (categories.data) {
      const agent_category_list_array = categories.data.agent_category_list;
      setAgentCategories(agent_category_list_array);
      if (agent_category_list_array.length < 5) {
        agent_category_list_array.push(newObjToPush);
      }
      setActiveCategory(agent_category_list_array[0]?._id);
    }
  };

  //
  const sendChatMessage = () => {
    try {
      if (new_text_msg !== "") {
        sendMsg({
          textMessage: new_text_msg,
          is_goodMorningMsg: "no",
          isImagePathSet: "no",
        });
        setnew_text_msg("");
      }
    } catch (err) {}
  };

  // return (
  //   <>
  //     <div className="d-flex flex-column h-100">
  //       <div className="d-flex h-100"></div>
  //     </div>
  //   </>
  // );

  // manageing store page
  const manageStorePage = (category_id) => {
    if (category_id == "65cf48998171e01489a62920") {
      setShowAllStoresPage(false);
    } else {
      setShowAllStoresPage(true);
    }
  };

  const SubHeaderOnBack = () => {
    setShowAllStoresPage(true);
  };
  return (
    <>
      <div className="flex-grow-1 d-flex h-100 flex-column">
        {/* Agent Categories */}
        <div className="px-sm-2 col-lg-7 col-md-9 col-12">
          {showAllStoresPage && (
            <div className="row gx-3 flex-nowrap overflow-auto border-sm-0 border-top border-secondary-accent pt-sm-0 pt-3">
              {agentCategories.map((category, index) => {
                return (
                  // {showAllStoresPage

                  // }
                  <div
                    key={index}
                    className="col-auto text-center "
                    // className={`col-auto text-center ${
                    //   category.name == "My Store" ? "d-block" : "d-none"
                    // }`}
                    style={{ width: 74 }}
                    onClick={() => {
                      setActiveCategory(category._id);
                      setActiveAgent();
                      manageStorePage(category._id);
                    }}
                  >
                    <div
                      className={`bg-secondary-accent d-flex rounded-circle cursor-pointer border ${
                        category._id == activeCategory
                          ? "border-active"
                          : "border-secondary-accent"
                      }`}
                      style={{
                        width: 60,
                        height: 60,
                        transition: "ease-in-out .25s",
                      }}
                    >
                      <Image
                        className="m-auto"
                        src={category.icon}
                        height={28}
                        width={28}
                      />
                    </div>
                    <p
                      className={`mb-0 caption-subtitle mt-1 cursor-pointer ${
                        category._id == activeCategory
                          ? "text-active"
                          : "text-kogo-white"
                      }`}
                      style={{
                        transition: "ease-in-out .25s",
                      }}
                    >
                      {category.name}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* Agent Categories */}
        {/* Agent */}
        {showAllStoresPage ? (
          <>
            <div className="px-2 col-lg-7 col-md-9 col-12 d-flex flex-grow-1">
              {agentCategories.map((category, index) => (
                <div
                  key={index}
                  className={`my-auto text-center px-4 ${
                    category._id == activeCategory ? "d-block" : "d-none"
                  }`}
                >
                  <p className="title text-disabled">{category.description}</p>
                  <div className="row g-2 justify-content-center">
                    {category.agents.map((agent, agentIndex) => (
                      <div key={agentIndex} className="col-auto">
                        <Badges
                          image_icon={agent.icon}
                          title={agent.name}
                          onClick={() => setActiveAgent(agent._id)}
                          active={activeAgent == agent._id}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Agent */}
            <div className="px-sm-2 col-lg-7 col-md-9 col-12">
              <Keyboard
                setTextMessage={setnew_text_msg}
                sendTextMessage={sendChatMessage}
              />
            </div>
          </>
        ) : !showAllStoresPage ? (
          <>
            <Store
              SubHeaderOnBack={SubHeaderOnBack}
              myStoreData={myStoreDetailData}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
