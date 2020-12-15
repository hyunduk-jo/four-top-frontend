import { Link } from "react-router-dom";
import styled from "styled-components";
//import Loader from "../../Componentes/Loader";

const Container = styled.div`
  margin-top: 50px;
`;

//<Loader />

const Gallery = () => {
  return <Container>
    <button><Link to="/gallery/new">New Post</Link></button>
  </Container>
}
export default Gallery;