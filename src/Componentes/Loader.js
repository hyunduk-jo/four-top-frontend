import styled, { keyframes } from "styled-components";
import { Loading } from "./Icons";

const Animation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    fill: grey;
  }
  animation: ${Animation} 1.4s linear infinite;
`;


const Loader = () => {
  return <Container><Loading /></Container>
}

export default Loader;