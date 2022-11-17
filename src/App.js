import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {



  return (

    <div className="app-wrapper">
      <Header />
      <Navbar friendsPanel={props.state.friendsPanel} />

      <div className='app-wrapper-content'>
        <Routes>


          <Route path='/dialogs' element={<Dialogs
            dispatch={props.dispatch}
            state={props.state} />} />

          <Route path='/profile' element={<Profile
            state={props.state}
            dispatch={props.dispatch}
          />} />


          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />


        </Routes>

      </div>

    </div>

  );
}

export default App;
