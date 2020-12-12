import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $userName: String!, $firstName: String, $lastName: String!){
    createAccount(email: $email, userName: $userName, firstName: $firstName, lastName: $lastName)
  }
`;

export const REQUEST_SECRET = gql`
  mutation requestSecret($email: String!){
    requestSecret(email: $email)
  }
`;

export const CONFIRM_SECRET = gql`
  mutation confirmSecret($email: String!, $secret: String!){
    confirmSecret(email: $email, secret: $secret)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!){
    logUserIn(token: $token) @client
  }
`;