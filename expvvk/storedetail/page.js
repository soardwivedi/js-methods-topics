"use client";
import React, { useEffect, useState } from "react";
import SubHeader from "@/Components/Includes/SubHeader";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentCard from "@/Components/Includes/Global/ContentCard";
import ProgressBarRatting from "@/Components/Components/ProgressBarRatting";
import UserReview from "@/Components/Components/UserReview";
import StarRatting from "@/Components/Components/StarRatting";
import { useSession } from "next-auth/react";
import { marketplacecategory } from "@/services/apis/marketplaceagent";
import {
  faShare,
  faUserPlus,
  faEdit,
  faChevronRight,
  faSignOut,
  faHeart,
  faSquareUser,
  faLanguage,
} from "@fortawesome/pro-light-svg-icons";
import { faChevronDown, faIcons } from "@fortawesome/pro-regular-svg-icons";
import { faStar } from "@fortawesome/pro-solid-svg-icons";
function Card({ ratting, categories }) {
  const [agentCategories, setAgentCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState();
  const [profileicon, setprofileicon] = useState();
  const [descicon, setdescicon] = useState();

  useEffect(() => {
    fetchmarketplaceagent();
  }, []);
  const fetchmarketplaceagent = async () => {
    const categories = await marketplacecategory("65d2fc2bda03aaceec35a45e");
    if (categories.data) {
      console.log("categories", categories.data);
      setAgentCategories(categories.data.agent.description);
      setActiveCategory(categories.data.agent.category.name);
      setprofileicon(categories.data.agent.icon);
      setdescicon(categories.data.agent.category.icon);
    }
  };
  console.log("hiii", activeCategory);
  return (
    <div className="d-flex flex-column m-1">
      <SubHeader title={"Translate"}></SubHeader>
      <div className="Userinformation pt-10p pb-15p px-15p mb-20p rounded-20p border-secondary-accent">
        <div className="p-0 ">
          <div className="d-flex mb-0">
            <div className="Userinforimgsection">
              <Image
                src={profileicon}
                width={76}
                height={76}
                quality={100}
                alt="Picture of the author"
                className="rounded-circle point object-fit-cover"
              />
            </div>
            <div>
              <h3 className="profiletitle text-kogo-white mb-0 pb-2">
                Translate <span className="text-white-gray ui-label">V1.0</span>
              </h3>
              <div className="d-flex flex-row mb-0 flex-wrap">
                <div className="py-0 align-self-center">
                  <div className="profilebtn bg-invalid-15 rounded-circle">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="py-0 align-self-center">
                  <div className="profilebtn bg-active-15 rounded-circle">
                    <FontAwesomeIcon icon={faShare} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-1 py-2 border-bottom mb-1 border-secondary-accent border-opacity-25"></div>
        <div className="text-white-gray ui-label fw-bold w-100">
          Kogo Translate
          <span className="text-white-gray ui-label p-1">
            {agentCategories}
          </span>{" "}
          <span className="text-active fw-2"> Read More</span>
          <span className="text-active p-1">
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </span>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-start">
        <div className="col-auto"> </div>
        <div className="flex-column ">
          <h1 className="text-white-gray ui-label m-0 ">Category</h1>
          <div className="text-white-gray ui-label">
            <FontAwesomeIcon icon={faIcons}></FontAwesomeIcon>
          </div>
          <h1 className="text-active fw-bold ui-label">{activeCategory}</h1>
        </div>
        <div className="flex-column ms-5">
          <h1 className="text-white-gray ui-label m-0">Developer</h1>
          <div className="text-white-gray ui-label">
            <FontAwesomeIcon icon={faSquareUser}></FontAwesomeIcon>
          </div>
          <h1 className="text-white-grey fw-bold ui-label">ABC</h1>
        </div>
        <div className="flex-column ms-5">
          <h1 className="text-white-gray ui-label m-0">Languages</h1>
          <div className="text-white-gray ui-label">
            <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
          </div>
          <h1 className="text-white-grey fw-bold ui-label">EN, ES, AF, FR</h1>
        </div>
      </div>
      <div
        className="d-flex flex-row align-items-center mt-4 p-0 gap-2"
        style={{ overflow: "auto", width: "100%" }}
      >
        <div
          className="rounded-10p bg-secondary-accent"
          style={{
            height: "250px",
            minWidth: "115px",
          }}
        >
          {/* <Image
            src={descicon}
            width={115}
            height={250}
            quality={100}
            alt="Picture of the author"
            className=" "
          /> */}
        </div>
        <div
          className="rounded-10p bg-secondary-accent"
          style={{
            height: "250px",
            minWidth: "115px",
          }}
        >
          {/* <Image
            src={descicon}
            width={115}
            height={250}
            quality={100}
            alt="Picture of the author"
            className=" "
          /> */}
        </div>
        <div
          className="rounded-10p bg-secondary-accent"
          style={{
            height: "250px",
            minWidth: "115px",
          }}
        >
          {/* <Image
            src={descicon}
            width={115}
            height={250}
            quality={100}
            alt="Picture of the author"
            className=" "
          /> */}
        </div>
      </div>

      <div className="button-label mt-4">Agent Information</div>
      <div className="d-flex justify-content-between mt-4">
        <div className="text-white-gray">From</div>
        <div className="text-white-grey">Kogo tech labs</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="text-white-gray">Category</div>
        <div className="text-active fw-bold">{activeCategory}</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="text-white-gray">User type</div>
        <div className="text-white-grey">Individual</div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="text-white-gray">Langauges</div>
        <div className="text-white-grey">
          English, Spanish, Chinese, Italian
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div className="text-white-gray">Copyright</div>
        <div className="text-white-grey">
          Copyright Kogo tech labs Pvt. Ltd.
        </div>
      </div>
      <div className="text-active fw-2 mt-4">Privacy Policy</div>
      <div className="text-active fw-2 mt-4">Licence Agreement </div>
      <div className="text-active fw-2 mt-4">Terms & Conditions</div>
      <div className="text-active fw-2 mt-4">Usage Policy</div>
      <div className="text-white-gray fw-2 mt-4">User Ratings</div>
      <div className="text-white-grey fw-bold fs-2">
        4.9<span className="fs-2 fw-0">/5</span>
      </div>

      <div className=" mt-3 text-ehite-grey fw-4 fs-2 ">User Reviews</div>
      <div className="mt-3 row gx-0">
        <div className="col-auto">
          <img
            src="https://d15mcvsd48kerh.cloudfront.net/public/production/avatar/Avatar01.png"
            width={32}
            height={32}
            className="rounded-circle me-16p"
          />
        </div>
        <div className="col button-label align-self-center">Traveller 1</div>
        <div className="col-12 mt-2">
          <StarRatting ratting={ratting} />
          <div className="d-flex">
            {" "}
            <FontAwesomeIcon icon={faStar} className="text-special fa-xs" />
            <FontAwesomeIcon
              icon={faStar}
              className="text-special fa-xs ms-1"
            />{" "}
            <FontAwesomeIcon
              icon={faStar}
              className="text-special fa-xs ms-1"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-special fa-xs ms-1"
            />
          </div>
        </div>
        <p className="button-label mt-2 mb-0">Very helpful</p>
        <p className="ui-label mt-2 mb-0">
          I was travelling in Hong Kong and Kogo Translator has helped me at
          various occasions. I don’t know chinese but I never felt I missed out
          on anything there! Loved it!
        </p>
        <div className="row flex-nowrap gx-2 mt-3 mb-1 overflow-auto"></div>

        <p className="ui-label text-white-gray mt-2 mb-0">
          Posted on 09/10/23{" "}
        </p>
      </div>
      <div className="mt-3 row gx-0">
        <div className="col-auto">
          <img
            src="https://d15mcvsd48kerh.cloudfront.net/public/production/avatar/Avatar01.png"
            width={32}
            height={32}
            className="rounded-circle me-16p"
          />
        </div>
        <div className="col button-label align-self-center">Traveller 2</div>
        <div className="col-12 mt-2">
          <div className="d-flex">
            {" "}
            <FontAwesomeIcon icon={faStar} className="text-special fa-xs" />
            <FontAwesomeIcon
              icon={faStar}
              className="text-special fa-xs ms-1"
            />{" "}
            <FontAwesomeIcon
              icon={faStar}
              className="text-special fa-xs ms-1"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="text-special fa-xs ms-1"
            />
          </div>
        </div>
        <p className="button-label mt-2 mb-0">Very helpful</p>
        <p className="ui-label mt-2 mb-0">
          I was travelling in Hong Kong and Kogo Translator has helped me at
          various occasions. I don’t know chinese but I never felt I missed out
          on anything there! Loved it!
        </p>
        <div className="row flex-nowrap gx-2 mt-3 mb-1 overflow-auto"></div>
        <p className="ui-label text-white-gray mt-2 mb-0">
          Posted on 09/10/23{" "}
        </p>
      </div>
    </div>
  );
}

export default Card;
