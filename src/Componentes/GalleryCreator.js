import styled from "styled-components";
import Avatar from "./Avatar";

const Container = styled.div`
  width: 210px;
  height: 300px;
  margin: 20px 50px 20px 0px;
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
`;

const GalleryCreator = ({ followersCount, userName, bio, avatar }) => {
  return <Container>
    <Cavatar size="lg" url={avatar} onClick={() => { window.location = `#/profile/${userName}` }} />
    <TextContainer>
      <Text onClick={() => { window.location = `#/profile/${userName}` }}>{userName}</Text>
      <Text>followers: {followersCount}명</Text>
      <Text>{bio}</Text>
    </TextContainer>
  </Container>
}

export default GalleryCreator;