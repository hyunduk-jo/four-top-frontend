import styled from "styled-components";
import Helmet from "react-helmet";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Container = styled.div``;

const SearchPresenter = ({ term }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search | 4TOP</title>
      </Helmet>
      <Wrapper>
        <Container>Search for {term}</Container>
      </Wrapper>
    </>
  )
}

export default SearchPresenter;