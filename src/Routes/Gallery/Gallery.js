import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GalleryCreator from "../../Componentes/Gallery/GalleryCreator";
import GalleryPost from "../../Componentes/Gallery/GalleryPost";
import NextPage from "../../Componentes/PageButton/NextPage";
import Loader from "../../Componentes/Utils/Loader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  font-weight: 600;
  background-color: ${props => props.theme.blueColor};
`;

const FreeContainer = styled.div`
  margin-top: 50px;
  width: 80%;
  display: flex;
  margin: 20px;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  min-height: 300px;
`;

const PaymentContainer = styled(FreeContainer)`
  min-height: 300px;
`;

const CreatorContainer = styled(FreeContainer)`
  min-height: 300px;
`;

const Text = styled.div`
  width: 80%;
  font-weight: 600;
  font-size: 20px;
`;

const ALL_POST = gql`
  {
    allPost{
      id
      title
      files{
        id
        url
      }
      user{
        id
        userName
        avatar
      }
      likesCount
    }
  }
`;

const ALL_USER = gql`
  query allUser($skip: Int , $first: Int ){
    allUser(skip: $skip, first: $first){
      id
      avatar
      followersCount
      userName
      bio
    }
  }
`;

const Gallery = () => {
  const [skip, setSkip] = useState(0);
  const [first, setFirst] = useState(2);
  const { data: postData, loading: postLoading } = useQuery(ALL_POST);
  const { data: userData, loading: userLoading } = useQuery(ALL_USER, {
    variables: { skip, first }
  });
  return (
    <>
      <BtnWrapper><BtnContainer><Link to="/gallery/new"><Button>New Post</Button></Link></BtnContainer></BtnWrapper>
      <Wrapper>
        <Text>Best Free</Text>
        <FreeContainer>
          {
            postLoading && <Loader />
          }
          {
            !postLoading && postData?.allPost && (
              postData.allPost.map(post => {
                return <GalleryPost key={post.id} postId={post.id} title={post.title} likesCount={post.likesCount} user={post.user} files={post.files} />
              })
            )
          }
        </FreeContainer>
      </Wrapper>
      <Wrapper>
        <Text>Best Pay</Text>
        <PaymentContainer></PaymentContainer>
      </Wrapper>
      <Wrapper>
        <Text>Best Creator</Text>
        <CreatorContainer>
          {
            userLoading && <Loader />
          }
          {
            !userLoading && userData?.allUser && (
              userData.allUser.map(user => {
                return <GalleryCreator key={user.id} followersCount={user.followersCount} userName={user.userName} bio={user.bio} avatar={user.avatar} />
              })
            )
          }
          <NextPage onClick={() => { setFirst(first + 2); setSkip(skip + 2) }} />
        </CreatorContainer>
      </Wrapper>
    </>
  )
}
export default Gallery;