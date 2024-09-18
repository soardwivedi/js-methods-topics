// Import the clientNew function
import { clientNew } from './path/to/clientNew';

// Import gql from apollo-boost or graphql-tag
import { gql } from 'apollo-boost';

// API for fetching store details
export const myStoreDetail = async (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Make sure to create an instance of ApolloClient using clientNew
      const client = clientNew();

      // Use the ApolloClient instance to execute the GraphQL query
      let storeDetail = await client.query({
        fetchPolicy: "no-cache",
        query: gql`
          query ($first: Int, $offset: Int) {
            toolMarketPlace(first: $first, offset: $offset) {
              _id
              access_url
              description
              device_type
              icon
              is_public
              is_published
              name
              permissions
            }
          }
        `,
        variables: {
          first: inputData.first,
          offset: inputData.offset,
        },
      });

      resolve(storeDetail);
    } catch (error) {
      reject(error);
    }
  });
};


export const myStoreDetail1 = async (inputData) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await clientNew.query({
          fetchPolicy: "no-cache",
          query: gql`
            query ($first: Int, $offset: Int) {
              toolMarketPlace(first: $first, offset: $offset) {
                _id
                access_url
                description
                device_type
                icon
                is_public
                is_published
                name
                permissions
              }
            }
          `,
          variables: {
            first: inputData.first,
            offset: inputData.offset,
          },
        });
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  };
  

  import { myStoreDetail } from './path/to/myStoreDetail';
import { lisanceAuthorization } from './path/to/lisanceAuthorization';

// Get the token from where it's stored (e.g., cookies or local storage)
const token = "YOUR_TOKEN_HERE";

// Call the GraphQL function with headers containing the token
const storeDetailResult = await myStoreDetail({
  first: 10,
  offset: 0,
}, token);

// Call the lisanceAuthorization function with headers containing the token
const authorizationResult = await lisanceAuthorization({
  auth_key: "YOUR_AUTH_KEY_HERE",
}, token);

// Define the GraphQL function with headers
const myStoreDetail = async (inputData, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = clientNew(token); // Pass token to clientNew function
      const storeDetail = await client.query({
        fetchPolicy: "no-cache",
        query: gql`
          query ($first: Int, $offset: Int) {
            toolMarketPlace(first: $first, offset: $offset) {
              _id
              access_url
              description
              device_type
              icon
              is_public
              is_published
              name
              permissions
            }
          }
        `,
        variables: {
          first: inputData.first,
          offset: inputData.offset,
        },
      });
      resolve(storeDetail);
    } catch (error) {
      reject(error);
    }
  });
};

const lisanceAuthorization = async (inputData, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = clientNew(token); // Pass token to clientNew function
      const user = await client.query({
        fetchPolicy: "no-cache",
        query: gql`
          query ($auth_key: String!) {
            authKogoOSClient(auth_key: $auth_key) {
              token
            }
          }
        `,
        variables: {
          auth_key: inputData.auth_key,
        },
      });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};
