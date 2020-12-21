import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Utils/Avatar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 300px;
  padding: 10px;
  margin: 20px 25px 20px 25px;
  a{
    overflow: hidden;
  }
`;

const MainPhoto = styled.img`
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  min-height: 236px;
`;

const UserContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div``;

const Username = styled.div`
  font-weight: 600;
  text-align: center;
`;

const Title = styled.div`
  height: 100%;
  text-align: center;
  width: 80px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
  display: inline-block;
`;

const Like = styled.div`
  margin-top: 10px;
`;

const GalleryPost = ({ title, likesCount, user, files, postId }) => {
  return <Wrapper>
    <Link to={`/gallery/p/${postId}`}>
      <MainPhoto src={files[0].url} />
    </Link>
    <UserContainer>
      {/* <Avatar url={user.avatar} size="sm" onClick={() => { window.location = `#/profile/${user.userName}` }} /> */}
      <Link to={`/profile/${user.userName}`}><Avatar url={user.avatar} size="sm" /></Link>
      <TextContainer>
        <Username>{user.userName}</Username>
        <Title>{title}</Title>
      </TextContainer>
      <Like>{likesCount === 1 ? `1 like` : `${likesCount} likes`}</Like>
    </UserContainer>
  </Wrapper>
}

export default GalleryPost;