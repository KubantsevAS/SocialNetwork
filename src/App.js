import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {initializeApp} from './redux/appReducer';
import { withRouter } from './components/Profile/ProfileContainer'
import Preloader from './components/Common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
}

  render() {

    if (!this.props.initialized) {
      return (<Preloader/>)
    }

    return (

      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>


            <Route path='/dialogs' element={<DialogsContainer />} />

            <Route path='/profile/:userId' element={<ProfileContainer />} />


            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />

            <Route path='/users' element={<UsersContainer />} />

            <Route path='/login' element={<Login />} />


          </Routes>

        </div>

      </div>

    )
  }
}

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStatetoProps, {initializeApp}))(App);
