import { ThemeProvider } from 'styled-components';
import Theme from '../Styles/Theme';
import { HashRouter as Router } from 'react-router-dom';
import GlobalStyles from '../Styles/GlobalStyles';
import AppRouter from './Router';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

function App() {
  const { data: { isLoggedIn } } = useQuery(QUERY);
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <GlobalStyles />
          <AppRouter isLoggedIn={isLoggedIn} />
          <Footer />
        </Router>
        <ToastContainer position={toast.POSITION.TOP_LEFT} />
      </ThemeProvider>
    </div>
  );
}

export default App;
