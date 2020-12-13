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
  display: flex;
  height: 200px;
  width: 600px;
  margin-bottom: 20px;
`;

const Image = styled.img``;

const Greetings = () => {
  return <Wrapper>
    <Title>인사말</Title>
    <Container>
      포탑을 이용하고 사랑해주시는 여러분께 감사드립니다
    </Container>
    <Container>
      <Image src={process.env.PUBLIC_URL + '/logo.jpg'} />
    </Container>
  </Wrapper>
}

export default Greetings;