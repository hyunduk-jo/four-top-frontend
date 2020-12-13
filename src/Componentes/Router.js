import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Auth from '../Routes/Auth';
import Basket from '../Routes/Basket';
import Profile from '../Routes/Profile';
import Company from '../Routes/Company';
import Gallery from '../Routes/Gallery';
import Community from '../Routes/Community';
import Rental from '../Routes/Rental';
import Promotion from '../Routes/Promotion';
import Magazine from '../Routes/Magazine';
import ServiceCenter from '../Routes/ServiceCenter';
import Header from './Header';
import Search from '../Routes/Search/index';


const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home isLoggedIn={isLoggedIn} />} />
      <Route path="/auth" component={Auth} />

      <Route path="/search" render={() => <><Header isLoggedIn={isLoggedIn} /><Search /></>} />
      <Route path="/basket" render={() => <Basket isLoggedIn={isLoggedIn} />} />
      <Route path="/company" render={() => <Company isLoggedIn={isLoggedIn} />} />
      <Route path="/gallery" render={() => <Gallery isLoggedIn={isLoggedIn} />} />
      <Route path="/community" render={() => <Community isLoggedIn={isLoggedIn} />} />
      <Route path="/rental" render={() => <Rental isLoggedIn={isLoggedIn} />} />
      <Route path="/promotion" render={() => <Promotion isLoggedIn={isLoggedIn} />} />
      <Route path="/magazine" render={() => <Magazine isLoggedIn={isLoggedIn} />} />
      <Route path="/servicecenter" render={() => <ServiceCenter isLoggedIn={isLoggedIn} />} />
      <Route path="/profile/:username" render={() => <Profile isLoggedIn={isLoggedIn} />} />
    </Switch>
  )
}

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default AppRouter;