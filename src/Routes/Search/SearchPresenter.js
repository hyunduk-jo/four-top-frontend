import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Container = styled.div``;

const SearchPresenter = ({ term }) => {
  return <Wrapper>
    <Container>Search for {term}</Container>
  </Wrapper>
}

export default SearchPresenter;