import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "./Avatar";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const CAvatar = styled(Avatar)`
  margin-right: 10px;
`;

const Name = styled.div``;

const FollowBtn = styled.button`
  padding: 4px;
  background-color: ${props => props.theme.blueColor};
  border: none;
  color: white;
  font-weight: 600;
`;

const User = ({ avatar, userName, isFollowing }) => {
  return <>
    <Container>
      <Box>
        <Link to={`/profile/${userName}`}><CAvatar size="sm" url={avatar} /></Link>
        <Name>{userName}</Name>
      </Box>
      <FollowBtn>팔로우</FollowBtn>
    </Container>
  </>
}

export default User;