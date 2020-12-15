import styled from "styled-components";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 300px;
  padding: 15px;
  margin: 20px 50px 20px 0px;
`;

const MainPhoto = styled.img`
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const UserContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div``;

const Username = styled.div`
  font-weight: 600;
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
`;

const Like = styled.div``;

const GalleryPost = ({ title, likesCount, user, files }) => {
  return <Wrapper>
    <MainPhoto src={files[0].url} />
    <UserContainer>
      <Avatar url={user.avatar} size="sm" onClick={() => { window.location = `#/profile/${user.userName}` }} />
      <TextContainer>
        <Username>{user.userName}</Username>
        <Title>{title}</Title>
      </TextContainer>
      <Like>{likesCount === 1 ? `1 like` : `${likesCount} likes`}</Like>
    </UserContainer>
  </Wrapper>
}

export default GalleryPost;