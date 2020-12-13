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
  align-items: center;
  width: 600px;
`;

const ContainerColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img``;

const Intro = () => {
  return <Wrapper>
    <Title>소개</Title>
    <Container>
      <ContainerColumn>
        <Image src={process.env.PUBLIC_URL + '/logo.jpg'} />
      </ContainerColumn>
      <ContainerColumn>우리는 어떻고</ContainerColumn>
    </Container>
    <Container>
      <ContainerColumn>고객을 생각하고</ContainerColumn>
      <ContainerColumn>
        <Image src={process.env.PUBLIC_URL + '/logo.jpg'} />
      </ContainerColumn>
    </Container>
    <Container>
      <ContainerColumn>
        <Image src={process.env.PUBLIC_URL + '/logo.jpg'} />
      </ContainerColumn>
      <ContainerColumn>돈을벌고싶다</ContainerColumn>
    </Container>
  </Wrapper>
}

export default Intro;