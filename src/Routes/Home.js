import { Link } from "react-router-dom";
import styled from "styled-components";

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
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
  }
  &:nth-child(2){
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
  }
  &:last-child{
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
  }
  text-decoration: none;
`;

const Text = styled.div`
  padding: 7px;
  background-color: black;
  opacity: 0.5;
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

const Home = () => {
  return <Wrapper>
    <Container>
      <ThisMonthContainer>
        <ThisMonthContainerColumn to="" src={process.env.PUBLIC_URL + 'logo.jpg'}><Text>이달의 무료 작품</Text></ThisMonthContainerColumn>
        <ThisMonthContainerColumn to="" src={process.env.PUBLIC_URL + 'logo.jpg'}><Text>이달의 유료 작품</Text></ThisMonthContainerColumn>
        <ThisMonthContainerColumn to="" src={process.env.PUBLIC_URL + 'logo.jpg'}><Text>이달의 크리에이터</Text></ThisMonthContainerColumn>
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
}

export default Home;