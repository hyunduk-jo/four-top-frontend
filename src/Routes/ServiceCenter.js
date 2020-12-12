import styled from "styled-components";
import Header from "../Componentes/Header";

const Container = styled.div`
  margin-top: 50px;
`;

const ServiceCenter = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container>ServiceCenter</Container>
    </>
  )
}
export default ServiceCenter;