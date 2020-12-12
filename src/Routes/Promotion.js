import styled from "styled-components";
import Header from "../Componentes/Header";

const Container = styled.div`
  margin-top: 50px;
`;

const Promotion = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container>Promotion</Container>
    </>
  )
}
export default Promotion;