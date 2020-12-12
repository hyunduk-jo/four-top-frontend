import styled from "styled-components";
import Header from "../Componentes/Header";

const Container = styled.div`
  margin-top: 50px;
`;

const Community = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container>Community</Container>
    </>
  )
}
export default Community;