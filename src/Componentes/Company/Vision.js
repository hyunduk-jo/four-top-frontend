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
  &:last-child{
    border: 1px solid grey;
    padding: 10px;
    height: 300px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 10px;
  height: 100%;
  display: flex;
`;

const TextTitle = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const TextContent = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
`;

const Image = styled.img``;

const Vision = () => {
  return <Wrapper>
    <Title>비전 & 미션</Title>
    <Container>
      <Image src={process.env.PUBLIC_URL + '/logo.jpg'} />
    </Container>
    <Container>
      <TextWrapper>
        <TextContainer>
          <TextTitle>미션</TextTitle>
          <TextContent>모든 사람이 4차 산업혁명 기술에 쉽게 다가갈 수 있도록 함</TextContent>
        </TextContainer>
        <TextContainer>
          <TextTitle>비전</TextTitle>
          <TextContent>
            2020년 개인용 3D프린터 대표 사이트 정착<br />
            2021년 개인용 3D프린터 캐즘 극복<br />
            글글<br />
            글글
          </TextContent>
        </TextContainer>
        <TextContainer>
          <TextTitle>목표</TextTitle>
          <TextContent>
            국내 대표 하이테크 플랫폼<br />
            1가구 1 3D프린터
          </TextContent>
        </TextContainer>
      </TextWrapper>
    </Container>
  </Wrapper >
}

export default Vision;