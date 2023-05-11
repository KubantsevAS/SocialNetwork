import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer.ts';
import Preloader from './components/Common/Preloader/Preloader';
import './App.css';
import Navbar, { MenuLinks, navbarLink } from './components/Navbar/Navbar';
import About from './components/About/About';
import { Suspense } from 'react';

const DialogsContainer = React.lazy(
  () => import('./components/Dialogs/DialogsContainer')
);

const ProfileContainer = React.lazy(
  () => import('./components/Profile/ProfileContainer')
);
const FriendsContainer = React.lazy(
  () => import('./components/Friends/FriendsContainer')
);
const UsersContainer = React.lazy(
  () => import('./components//Users/UsersContainer')
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        {/* <HeaderContainer /> */}
        <Navbar />
        <div className={'mobileAdj'}>
          <MenuLinks navbarLink={navbarLink} />
        </div>

        <div className="app-wrapper-content">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />

              <Route path="/profile/:userId" element={<ProfileContainer />} />

              <Route path="/dialogs" element={<DialogsContainer />} />

              <Route path="/users" element={<UsersContainer />} />

              <Route path="/login" element={<Login />} />

              <Route path="/friends" element={<FriendsContainer />} />

              <Route path="/about" element={<About />} />

              <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  // withRouter,
  connect(mapStatetoProps, { initializeApp })
)(App);

const MainApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
