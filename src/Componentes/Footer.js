import styled from "styled-components";
import { Facebook, Instagram, Twitter, Youtube } from "./Icons";

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const Container = styled.div`
  width: 85%;
  height: 100px;
  border-top: 2px solid ${props => props.theme.lightGreyColor};
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin: 0px 30px;
  svg{
    fill: ${props => props.theme.darkGreyColor};
  }
`;

const Copyright = styled.div`
  color: ${props => props.theme.darkGreyColor};
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <List>
          <ListItem><a href="https://www.instagram.com/"><Instagram size="36" /></a></ListItem>
          <ListItem><a href="https://ko-kr.facebook.com/"><Facebook size="36" /></a></ListItem>
          <ListItem><a href="https://twitter.com/?lang=ko"><Twitter size="36" /></a></ListItem>
          <ListItem><a href="https://www.youtube.com/"><Youtube size="36" /></a></ListItem>
        </List>
        <Copyright>&copy;Four Top {new Date().getFullYear()}</Copyright>
      </Container>
    </FooterContainer>
  )
}

export default Footer;