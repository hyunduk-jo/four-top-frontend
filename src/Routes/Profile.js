import styled from "styled-components";
import Header from "../Componentes/Header";

const Container = styled.div`
  margin-top: 50px;
`;

const Profile = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container>Profile</Container>
    </>
  )
}
export default Profile;