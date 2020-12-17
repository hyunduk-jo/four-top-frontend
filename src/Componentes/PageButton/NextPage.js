import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.button`
  width: 50px;
  height: 50px;
`;

const NextPage = () => {
  return <Wrapper>
    <Container></Container>
  </Wrapper>
}

export default NextPage;