import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 155px;
  margin-top: 50px;
`;

const Text = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: grey;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  width: 450px;
  padding: 20px;
  margin-top: 50px;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 20px;
  border: 2px solid grey;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: ${props => props.theme.blueColor};
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const StateChanger = styled.div`
  margin-top: 20px;
  text-align:center;
  font-size: 15px;
  font-weight: 600;
`;

const State = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const AuthPresenter = ({ action, setAction, email, userName, firstName, lastName, secret, onSubmit }) => {
  return <Container>
    <LogoContainer>
      <Link to="/"><Logo src={process.env.PUBLIC_URL + '/logo.jpg'} alt="four-top-logo" /></Link>
      <Text>4TOP</Text>
    </LogoContainer>
    <FormContainer>
      {
        action === "login" && (
          <Form onSubmit={onSubmit}>
            <Input placeholder="Email" value={email.value} onChange={email.onChange} />
            <Button>Log In</Button>
          </Form>
        )
      }
      {
        action === "signup" && (
          <Form onSubmit={onSubmit}>
            <Input placeholder="Email" value={email.value} onChange={email.onChange} />
            <Input placeholder="Username" value={userName.value} onChange={userName.onChange} />
            <Input placeholder="Firstname" value={firstName.value} onChange={firstName.onChange} />
            <Input placeholder="Lastname" value={lastName.value} onChange={lastName.onChange} />
            <Button>Sign Up</Button>
          </Form>
        )
      }
      {
        action === "confirm" && (
          <Form onSubmit={onSubmit}>
            <Input placeholder="Paste your secret" value={secret.value} onChange={secret.onChange} />
            <Button>Confirm</Button>
          </Form>
        )
      }
      {
        action !== "confirm" && (
          <StateChanger>
            {
              action === "login" ? (
                <>Don't have an account? <State onClick={() => setAction("signup")}>Sign Up</State></>
              ) : (
                <>You have an account? <State onClick={() => setAction("login")}>Log In</State></>
              )
            }
          </StateChanger>
        )
      }
    </FormContainer>
  </Container>
}

export default AuthPresenter;