import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
  text-align:center;
  margin-bottom: 40px;
`;

const Container = styled.div`
  width: 600px;
`;

const YearContainer = styled.div`
  display: flex;
`;

const Year = styled.div`
  margin-right: 30px;
`;

const Month = styled.div`
  margin: 0px 10px 0px 20px;
`;

const Text = styled.div``;

const History = () => {
  return <Wrapper>
    <Title>연혁</Title>
    <Container>
      <YearContainer>
        <Year>2020</Year>|<Month>12</Month><Text>뭘 했을까??</Text>
      </YearContainer>
    </Container>
  </Wrapper>
}

export default History;