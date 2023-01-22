import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';

import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { withRouter } from './components/Profile/ProfileContainer'
import Preloader from './components/Common/Preloader/Preloader';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Suspense } from 'react';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return (<Preloader />)
    }

    return (

      <div className="app-wrapper">
        {/* <HeaderContainer /> */}
        <Navbar />

        <div className='app-wrapper-content'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>


              <Route path='/dialogs' element={<DialogsContainer />} />

              <Route path={`/profile/:userId`} element={<ProfileContainer />} />


              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />

              <Route path='/users' element={<UsersContainer />} />

              <Route path='/login' element={<Login />} />


            </Routes>
          </Suspense>
        </div>

      </div>

    )
  }
}

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStatetoProps, { initializeApp }))(App);

let MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp;