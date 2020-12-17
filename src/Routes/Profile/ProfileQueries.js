import { gql } from "apollo-boost";

export const SEE_USER = gql`
  query seeUser($userName: String!){
    seeUser(userName: $userName){
      id
      userName
      firstName
      lastName
      avatar
      postsCount
      isFollowing
      isSelf
      followers{
        id
        userName
        avatar
      }
      following{
        id
        userName
        avatar
      }
      followersCount
      followingCount
      bio
      posts{
        id
        title
        likesCount
        files{
          id
          url
        }
      }
      likes{
        id
        post{
          id
        }
      }
    }
  }
`;