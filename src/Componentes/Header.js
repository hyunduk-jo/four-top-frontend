import { useMutation, useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components"
import useInput from "../Hooks/useInput";
import { Basket, Logout, Setting, User } from "./Icons";
import Helmet from 'react-helmet';

const Logo = styled.img`
  width: 120px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  padding: 30px 30px 30px 0px;
  border-bottom: 1px solid grey;
  margin-bottom: 20px;
`;

const HeaderColumn = styled.div`
  &:first-child{
    width: 20%;
    display: flex;
  }
  &:nth-child(2){
    width: 50%;
  }
  &:last-child{
    width: 30%;
    display: flex;
    align-items:center;
  }
`;

const HeaderColumnText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  h1{
    font-size: 20px;
    margin-bottom: 30px;
    color: grey;
  }
  h2{
    font-size:14px;
    color: grey;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MenuItem = styled.li`
  margin: 0px 20px;
`;

const MenuLink = styled(Link)`
  color:inherit;
  text-decoration: none;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 200px;
  border-radius: 15px;
  border: 1.5px solid ${props => props.theme.darkGreyColor};
  padding-left: 20px;
  margin-right:10px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  svg{
    margin-right: 10px;
  }
`;

const ME = gql`
  {
    me{
      userName
    }
  }
`;

const LOG_OUT = gql`
  mutation logUserOut{
    logUserOut @client
  }
`;

const Header = ({ history, isLoggedIn }) => {
  const { data, loading } = useQuery(ME);
  const [logOut] = useMutation(LOG_OUT);
  const search = useInput("");
  const onSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/"><Logo src={process.env.PUBLIC_URL + '/logo.jpg'} alt="four-top-logo" /></Link>
          <HeaderColumnText>
            <h1>4TOP</h1>
            <h2>ALL 4th TO PEOPLE</h2>
          </HeaderColumnText>
        </HeaderColumn>
        <HeaderColumn>
          <Menu>
            <MenuLink to="/company"><MenuItem>회사소개</MenuItem></MenuLink>
            <MenuLink to="/gallery"><MenuItem>3D갤러리</MenuItem></MenuLink>
            <MenuLink to="/community"><MenuItem>커뮤니티</MenuItem></MenuLink>
            <MenuLink to="/rental"><MenuItem>렌탈</MenuItem></MenuLink>
            <MenuLink to="/promotion"><MenuItem>프로모션</MenuItem></MenuLink>
            <MenuLink to="/magazine"><MenuItem>매거진</MenuItem></MenuLink>
            <MenuLink to="/servicecenter"><MenuItem>고객센터</MenuItem></MenuLink>
          </Menu>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSubmit}>
            <SearchInput value={search.value} onChange={search.onChange} />
          </form>
          <IconContainer>
            {
              isLoggedIn ? (
                <>
                  {loading && <User />}
                  {data?.me && <Link to={`/profile/${data.me.userName}`} ><User /></Link>}
                  <Link to="" ><Basket /></Link>
                  <Link to="" ><Setting /></Link>
                  <Link to="/" onClick={logOut} ><Logout /></Link>
                </>
              ) : (
                  <>
                    <Link to="/auth" ><User /></Link>
                    <Link to="/basket" ><Basket /></Link>
                  </>
                )
            }
          </IconContainer>
        </HeaderColumn>
      </HeaderWrapper>
    </>
  )
}

export default withRouter(Header);