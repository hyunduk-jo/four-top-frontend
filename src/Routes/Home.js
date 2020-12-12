import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "../Componentes/HomeHeader";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div`
  width: 85%;
  min-height: 80vh;
`;

const ThisMonthContainer = styled.div`
  height: 300px;
  display: flex;
  margin-top: 20px;
`;

const ThisMonthContainerColumn = styled(Link)`
  width: 33.3%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-size: 12px;
  &:first-child{
    background-color: black;
  }
  &:nth-child(2){
    background-color: red;
  }
  &:last-child{
    background-color: green;
  }
  text-decoration: none;
`;

const Banner = styled.div`
  margin: 30px 0px;
  border: 1px solid grey;
  height: 150px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 12px;
`;

const Home = ({ isLoggedIn }) => {
  return (
    <>
      <HomeHeader isLoggedIn={isLoggedIn} />
      <Wrapper>
        <Container>
          <ThisMonthContainer>
            <ThisMonthContainerColumn to="">이달의 무료 작품</ThisMonthContainerColumn>
            <ThisMonthContainerColumn to="">이달의 유료 작품</ThisMonthContainerColumn>
            <ThisMonthContainerColumn to="">이달의 크리에이터</ThisMonthContainerColumn>
          </ThisMonthContainer>
          <Banner>Banner</Banner>
          <Title>프로모션 / 매거진</Title>
          <Banner>Banner</Banner>
          <Title>렌탈</Title>
          <Banner>Banner</Banner>
          <Title>회사소개</Title>
          <Banner>Banner</Banner>
        </Container>
      </Wrapper >
    </>
  )
}

export default Home;