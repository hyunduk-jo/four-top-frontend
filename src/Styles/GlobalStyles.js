import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    padding: 0px 40px;
  }
  input:focus, button:focus{
    outline: none;
  }
  button{
    cursor: pointer;
  }
`;