import { useMutation, useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import useInput from "../Hooks/useInput";
import { Basket, Logout, Setting, User } from "./Icons";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 350px;
  padding-top: 50px;
  margin-bottom: 25px;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  &:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      color: grey;
      margin-bottom: 15px;
    }
    h2{
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: grey;
    }
  }
  &:nth-child(3){
    display: flex;
    justify-content: space-between;
    margin-top: 170px;
    svg{
      
    }
  }
`;

const Logo = styled.img`
  width: 155px;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 200px;
  border-radius: 15px;
  border: 1.5px solid ${props => props.theme.darkGreyColor};
  padding-left: 20px;
`;

const MenuWrapper = styled.div`

`;

const Menu = styled.ul`
  display: flex;
  margin-top: 100px;
`;

const MenuItem = styled.li`
  font-size: 17px;
  font-weight: 600;
  margin: 0px 30px;
`;

const MenuLink = styled(Link)`
  text-decoration:none;
  color: inherit;
`;

/* const Button = styled.span`
  cursor: pointer;
`; */

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
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`)
  }
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderColumn></HeaderColumn>
        <HeaderColumn>
          <Link to="/"><Logo src={process.env.PUBLIC_URL + '/logo.jpg'} alt="four-top-logo" /></Link>
          <h1>4TOP</h1>
          <h2>ALL 4th TO PEOPLE</h2>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSubmit}>
            <SearchInput placeholder="Search.." value={search.value} onChange={search.onChange} />
          </form>
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
        </HeaderColumn>
      </HeaderWrapper>
      <MenuWrapper>
        <Menu>
          <MenuLink to="/company"><MenuItem>회사소개</MenuItem></MenuLink>
          <MenuLink to="/gallery"><MenuItem>3D갤러리</MenuItem></MenuLink>
          <MenuLink to="/community"><MenuItem>커뮤니티</MenuItem></MenuLink>
          <MenuLink to="/rental"><MenuItem>렌탈</MenuItem></MenuLink>
          <MenuLink to="/promotion"><MenuItem>프로모션</MenuItem></MenuLink>
          <MenuLink to="/magazine"><MenuItem>매거진</MenuItem></MenuLink>
          <MenuLink to="/servicecenter"><MenuItem>고객센터</MenuItem></MenuLink>
        </Menu>
      </MenuWrapper>
    </HeaderContainer>
  )
}

export default withRouter(Header);