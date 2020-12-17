import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../../Componentes/Utils/Avatar";
import Modal from "../../Componentes/Modal";

const Wrapper = styled.div`
  margin-top: 50px;
  min-height: 70vh;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 350px;
  padding: 40px;
  border-bottom: 1px solid grey;
`;

const ProfileColumn = styled.div`
  display: flex;
  margin: 10px;
  &:first-child{
    width: 30%;
    justify-content: flex-end;
    align-items: center;
  }
  &:nth-child(2){
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width: 40%;
  }
  &:last-child{
    width: 30%;
    flex-direction: column;
  }
`;

const CAvatar = styled(Avatar)`
  border-radius: 30px;
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  &:first-child{
    font-weight: 600;
  }
  &:last-child{
    margin:0px;
  }
  color: grey;
`;

const CLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 5px;
  border: 2px solid grey;
  border-radius: 5px;
`;

const Text = styled.div`
  color: grey;
`;

const ProfilePresenter = ({
  userName,
  avatar,
  bio,
  followingCount,
  followersCount,
  id,
  likes,
  posts,
  followers,
  following,
  state,
  setState,
  postsCount,
  isFollowing,
  isSelf,
  firstName,
  lastName
}) => {

  return <Wrapper>
    <ProfileContainer>
      <ProfileColumn>
        <CAvatar size="lg" url={avatar} />
      </ProfileColumn>
      <ProfileColumn>
        <TextContainer>
          {userName}
          <CLink to={`/edit/${userName}`}>Edit Profile</CLink>
        </TextContainer>
        <TextContainer>
          <Text>게시물 {postsCount}</Text>
          <Text style={{ cursor: "pointer" }} onClick={() => setState("follower")}>팔로워 {followersCount}</Text>
          <Text style={{ cursor: "pointer" }} onClick={() => setState("following")}>팔로우 {followingCount}</Text>
        </TextContainer>
        <TextContainer>소개</TextContainer>
        <TextContainer>{bio}</TextContainer>
      </ProfileColumn>
      <ProfileColumn><Modal following={following} followers={followers} state={state} setState={setState} isFollowing={isFollowing} /></ProfileColumn>
    </ProfileContainer>
  </Wrapper>
}
export default ProfilePresenter;