import ApolloClient from "apollo-boost";
import { getKey } from "../constant";
import { getSession, useSession } from "next-auth/react";
const API_PATH = getKey("apiPath");
import { deserializeAndDecryptData } from "@/services/helper/SessionManager";
import Cookies from "js-cookie";
export const clientNew = new ApolloClient({
  uri: API_PATH,
  fetchOptions: {
    credentials: "include",
  },
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        cache.writeData({ data: { isConnected } });
        return null;
      },
    },
  },
  request: async (operation) => {
    let loginUser = "";
    let decreLicenceToken = "";
    const licenceToken = Cookies.get("licence_authorization_token");
    if (licenceToken && licenceToken !== "") {
      decreLicenceToken = deserializeAndDecryptData(licenceToken);
    }
    if (typeof window !== "undefined") {
      const userDetails = await getSession();
      loginUser = userDetails?.user?.token ?? null;
    }
    let token = "";
    if (loginUser && loginUser != "") {
      token = loginUser;
    } else {
      token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWFmZmJiOWIyZTY4YzAwMjg5MjkwOWIiLCJlbWFpbCI6ImRlZXBha0RlZmF1bHRVc2VyQGtvZ28uYWkiLCJ2ZW5kb3JfaWQiOm51bGwsImlhdCI6MTY5NjkzMDA2MCwiZXhwIjoxNzI4NDg3NjYwfQ.EuwrKSR6jdfhHWEHQSwzHw4jAV5wbtDL69aFiDk1KBg";
    }
    // for login time
    if (operation.variables.token && operation.variables.token != "") {
      token = operation.variables.token;
    }
    //let result = JSON.parse(token);
    let result = token;
    operation.setContext({
      headers: {
        authorization: result,
        licence_authorization: decreLicenceToken,
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ4NjhjOGY5OWQzZjg2YTE5ZTgwZTAiLCJlbWFpbCI6ImRlZXBha0Brb2dvLmFpIiwidG9rZW5fc291cmNlIjoiY2xpZW50IiwiaWF0IjoxNzEwMTM1NjQ1LCJleHAiOjE3MTI3Mjc2NDV9.fPFKtwSxAgMTueJKXsW94vUDZAvGc121HouZD3NHzpM",
      },
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    console.log("graph error:-" + JSON.stringify(graphQLErrors));
  },
});

export const clientNewTemp = new ApolloClient({
  uri: "https://api.kogotrips.com/graphql",
  fetchOptions: {
    credentials: "include",
  },
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        cache.writeData({ data: { isConnected } });
        return null;
      },
    },
  },
  request: async (operation) => {
    let loginUser = localStorage.getItem("KogoWebsite_userToken");
    let token = "";
    if (loginUser && loginUser != "") {
      token = loginUser;
    } else {
      token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMTNkMWMzMzY3NTAwMjUyOTI3MDAiLCJlbWFpbCI6ImRlZXBhazFAa29nby5haSIsImlhdCI6MTYyNzI3OTk5NSwiZXhwIjoxNjU4ODM3NTk1fQ.KvMT_ER_o2RoMTRmxiue0BKjZ7L4D2_0CwLAc_hxhWs";
    }
    // for login time
    if (operation.variables.token && operation.variables.token != "") {
      token = operation.variables.token;
    }
    //let result = JSON.parse(token);
    let result = token;
    operation.setContext({
      headers: {
        authorization: result,
      },
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    console.log("graph error:-" + JSON.stringify(graphQLErrors));
  },
});
