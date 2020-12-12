import styled from "styled-components";
import Header from "../Componentes/Header";

const Container = styled.div`
  margin-top: 50px;
`;

const Company = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container>Company</Container>
    </>
  )
}
export default Company;