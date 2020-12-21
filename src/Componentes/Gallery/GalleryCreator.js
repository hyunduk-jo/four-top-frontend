import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Utils/Avatar";

const Container = styled.div`
  width: 210px;
  height: 300px;
  margin: 20px 25px 20px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Cavatar = styled(Avatar)`
  border-radius: 50%;
`;

const TextContainer = styled.div`
  p:first-child{
    cursor: pointer;
  }
`;

const Text = styled.p`
  margin: 7px 0px;
  text-align: center;
  &:first-child{
    font-weight: 600;
  }
  text-decoration: none;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const GalleryCreator = ({ followersCount, userName, bio, avatar }) => {
  return <Container>
    {/* <Cavatar size="lg" url={avatar} onClick={() => { window.location = `#/profile/${userName}` }} /> */}
    <Links to={`/profile/${userName}`}><Cavatar size="lg" url={avatar} /></Links>
    <TextContainer>
      <Text><Links to={`/profile/${userName}`}>{userName}</Links></Text>
      <Text>followers: {followersCount}명</Text>
    </TextContainer>
  </Container>
}

export default GalleryCreator;