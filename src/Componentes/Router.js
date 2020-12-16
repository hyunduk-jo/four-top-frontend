import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Auth from '../Routes/Auth';
import Basket from '../Routes/Basket';
import Profile from '../Routes/Profile/index';
import Company from '../Routes/Company';
import Gallery from '../Routes/Gallery/Gallery';
import Community from '../Routes/Community';
import Rental from '../Routes/Rental';
import Promotion from '../Routes/Promotion';
import Magazine from '../Routes/Magazine';
import ServiceCenter from '../Routes/ServiceCenter';
import Header from './Header';
import Search from '../Routes/Search/index';
import HomeHeader from './HomeHeader';
import GalleryNew from '../Routes/Gallery/GalleryNew';
import EditProfile from '../Routes/EditProfile';


const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <><HomeHeader isLoggedIn={isLoggedIn} /><Home /></>} />
      <Route path="/auth" component={Auth} />

      <Route path="/search" render={() => <><Header isLoggedIn={isLoggedIn} /><Search /></>} />
      <Route path="/basket" render={() => <><Header isLoggedIn={isLoggedIn} /><Basket /></>} />
      <Route path="/company" render={() => <><Header isLoggedIn={isLoggedIn} /><Company /></>} />

      <Route exact path="/gallery" render={() => <><Header isLoggedIn={isLoggedIn} /><Gallery /></>} />
      <Route path="/gallery/new" render={() => <><Header isLoggedIn={isLoggedIn} /><GalleryNew isLoggedIn={isLoggedIn} /></>} />

      <Route path="/community" render={() => <><Header isLoggedIn={isLoggedIn} /><Community /></>} />
      <Route path="/rental" render={() => <><Header isLoggedIn={isLoggedIn} /><Rental /></>} />
      <Route path="/promotion" render={() => <><Header isLoggedIn={isLoggedIn} /><Promotion /></>} />
      <Route path="/magazine" render={() => <><Header isLoggedIn={isLoggedIn} /><Magazine /></>} />
      <Route path="/servicecenter" render={() => <><Header isLoggedIn={isLoggedIn} /><ServiceCenter /></>} />

      <Route path="/profile/:username" render={() => <><Header isLoggedIn={isLoggedIn} /><Profile /></>} />

      <Route path="/edit/:username" render={() => <><Header isLoggedIn={isLoggedIn} /><EditProfile /></>} />
    </Switch>
  )
}

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default AppRouter;