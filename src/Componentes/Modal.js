import styled from "styled-components";
import User from "./User";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  height: 180px;
  overflow-y: auto;
`;

const HeaderContainer = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  padding-bottom: 10px;
`;

const Header = styled.div`
  text-align: center;
  width: 100%;
`;

const Close = styled.button`
  padding: 0px 5px;
  background-color: rgba(0,0,0,0.2);
  font-size: 15px;
  font-weight: 600;
  color: white;
  border:none;
`;

const Modal = ({ following, followers, state, setState }) => {
  return (
    <>
      {
        state === null ? (null) : (
          <>
            <HeaderContainer>
              <Header>{state === "follower" ? "팔로워" : "팔로우"}</Header>
              <Close onClick={() => setState(null)}>X</Close>
            </HeaderContainer>
            <Wrapper>
              <Container>
                {
                  state === "following" && (
                    following.map(user => <User key={user.id} avatar={user.avatar} userName={user.userName} />)
                  )
                }
                {
                  state === "follower" && (
                    followers.map(user => <User key={user.id} avatar={user.avatar} userName={user.userName} />)
                  )
                }
              </Container>
            </Wrapper>
          </>)
      }
    </>
  )
}

export default Modal;