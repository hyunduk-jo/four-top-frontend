import { useState } from "react";
import styled from "styled-components";
import Greetings from "../Componentes/Company/Greetings";
import History from "../Componentes/Company/History";
import Intro from "../Componentes/Company/Intro";
import Vision from "../Componentes/Company/Vision";
import Header from "../Componentes/Header";

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShortInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:20px 0px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  width: 100%;
`;

const ShortInfoText = styled.div`
  text-align: center;
  h1{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const TabContainer = styled.div`
  margin-top: 20px;
  width: 600px;
  display: flex;
  justify-content: center;
`;

const Tab = styled.div`
  width: 25%;
  text-align: center;
  padding: 10px 0px;
  border: 1px solid grey;
  cursor: pointer;
`;

const TabComponent = styled.div`
  margin-top: 30px;
`;

const Company = ({ isLoggedIn }) => {
  const [action, setAction] = useState("intro");
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Container>
        <ShortInfo>
          <ShortInfoText>
            <h1>4TOP</h1>
            <h2>회사 한줄 소개</h2>
          </ShortInfoText>
        </ShortInfo>
        <TabContainer>
          <Tab onClick={() => setAction("intro")}>소개</Tab>
          <Tab onClick={() => setAction("greetings")}>인사말</Tab>
          <Tab onClick={() => setAction("vision")}>비전 & 미션</Tab>
          <Tab onClick={() => setAction("history")}>연혁</Tab>
        </TabContainer>
        {
          action === "intro" && (
            <TabComponent>
              <Intro />
            </TabComponent>
          )
        }
        {
          action === "greetings" && (
            <TabComponent>
              <Greetings />
            </TabComponent>
          )
        }
        {
          action === "vision" && (
            <TabComponent>
              <Vision />
            </TabComponent>
          )
        }
        {
          action === "history" && (
            <TabComponent>
              <History />
            </TabComponent>
          )
        }
      </Container>
    </>
  )
}
export default Company;