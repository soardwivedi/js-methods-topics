import { getKey } from "@/services/constant";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET || "5zqKsil0i2nFSPnS4m3HWKeISHjA0U1e",
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        if (credentials?._id && credentials?.vendor_id) {
          // console.log("credentials in", credentials);
          const user = await getUserDetail(credentials);
          // console.log("user in", user);
          user["token"] = credentials.token;
          user["vendor_id"] = credentials.vendor_id;
          user["mobile_verified"] = 1;
          // console.log("usera", credentials);
          if(credentials?.webView){
            user["webView"] = true
          }
          return user;
        } else if (credentials?._id) {
          // console.log("credentials in", credentials);
          const user = await getUserDetail(credentials);
          // console.log("user in", user);
          user["token"] = credentials.token;
          user["vendor_id"] = credentials.vendor_id
            ? credentials.vendor_id
            : null;
          user["mobile_verified"] = 1;
          // console.log("userb", credentials);
          if(credentials?.webView){
            user["webView"] = true
          }
          return user;
        }
        const user = await verifyLogin(credentials);
        // console.log(user);
        if (user?.error == undefined) {
          return user;
        } else {
          // return user;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, trigger, user, session }) => {
      if (user) {
        token._id = user._id;
        token.firstName = user.first_name;
        token.lastName = user.last_name;
        token.mobile = user.mobile;
        token.mobileVerified = user.mobile_verified;
        token.email = user.email;
        token.age = user.age;
        token.gender = user.gender;
        token.profileImage = user.profile_image;
        token.coinBalance = user.coin_balance;
        token.hasPro = user.hasPro;
        token.bio = user.bio;
        token.kogoxsaving = user.kogoxsaving;
        token.orderSavingSummary = user.orderSavingSummary;
        token.subscription_details = user.subscription_details;
        token.vendor_id = user.vendor_id;
        token.token = user.token;
        if(user?.webView){
          token.webView = user.webView;
        }
      }
      if (trigger == "update" && session?.update) {
        // console.log("updating users session", token);
        const myDetails = await getUserDetail(token);
        // console.log("myDetails", myDetails);
        token.firstName = myDetails?.first_name;
        token.lastName = myDetails?.last_name;
        token.mobile = myDetails?.mobile;
        token.mobileVerified = myDetails.mobile_verified;
        token.email = myDetails?.email;
        token.age = myDetails?.age;
        token.gender = myDetails?.gender;
        token.profileImage = myDetails?.profile_image;
        token.coinBalance = myDetails.coin_balance;
        token.hasPro = myDetails?.hasPro;
        token.bio = myDetails?.bio;
        token.kogoxsaving = myDetails?.kogoxsaving;
        token.orderSavingSummary = myDetails?.orderSavingSummary;
        token.vendor_id = myDetails?.vendor_id;
        token.subscription_details = myDetails?.subscription_details;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user._id = token._id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.mobile = token.mobile;
      session.user.mobileVerified = token.mobileVerified;
      session.user.email = token.email;
      session.user.age = token.age;
      session.user.gender = token.gender;
      session.user.profileImage = token.profileImage;
      session.user.coinBalance = token.coinBalance;
      session.user.hasPro = token.hasPro;
      session.user.bio = token.bio;
      session.user.kogoxsaving = token.kogoxsaving;
      session.user.orderSavingSummary = token.orderSavingSummary;
      session.user.subscription_details = token.subscription_details;
      session.user.vendor_id = token.vendor_id;
      session.user.token = token.token;
      if(token?.webView){
        session.webView = token.webView;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      // console.log(url, baseUrl);
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});

// Verfiy OTP First
const verifyLogin = async (credentials) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const loginDetails = {
    dialing_code: credentials.dialing_code,
    mobile: credentials.mobile.toString(),
    otp: credentials.otp.toString(),
  };
  if (credentials.vendor_id) {
    loginDetails.vendor_id = credentials.vendor_id;
  }
  // console.log("loginDetails", loginDetails);

  const graphql = JSON.stringify({
    query: `mutation (
        $dialing_code: String
        $mobile: String!
        $otp: String!
        $vendor_id: String
    ) {
      verifyLoginOTP(
          dialing_code: $dialing_code
          mobile: $mobile
          otp: $otp
          vendor_id: $vendor_id
      ) {
          _id
          already_registered
          mobile
          mobile_verified
          token
      }
    }`,
    variables: loginDetails,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
    redirect: "follow",
  };

  const response = await fetch(getKey("apiPath"), requestOptions);
  // console.log(response.status);
  if (response.status == 200) {
    const data = await response.json();
    // console.log(data);
    if (data.data.verifyLoginOTP) {
      const userDetail = await getUserDetail(data.data.verifyLoginOTP);
      return { ...data.data.verifyLoginOTP, ...userDetail };
    } else {
      return { error: data.errors[0].message };
    }
  }
  return false;
};
// Verfiy OTP First

// After verification get user details
const getUserDetail = async (data) => {
  // console.log("data", data);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", data.token);
  myHeaders.append("Content-Type", "application/json");
  var graphql = JSON.stringify({
    query: `query (
        $_id: ID!
      ) {
      user(
        _id: $_id
      ) {
        _id
        vendor_id
        first_name
        last_name
        mobile
        email
        age
        gender
        address
        profile_image
        hasPro
        coin_balance
        bio
        kogoxsaving
        orderSavingSummary{
          kogoxsaving
          kogoxMaxSaving
          totalOrders
          totalOrderfordefaultKogox
        }
        subscription_details{
          start_date
          end_date
        }
      }
    }`,
    variables: { _id: data._id },
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: graphql,
    redirect: "follow",
  };

  const response = await fetch(getKey("apiPath"), requestOptions);
  if (response.status == 200) {
    let data = await response.json();
    // console.log("user", data);
    return data.data.user;
  } else {
    return false;
  }
};
// After verification get user details

export { handler as GET, handler as POST };
