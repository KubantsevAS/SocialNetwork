import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Router, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.friendsPanel}/>

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs' element={<Dialogs state={props.state.messagesPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />


            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Music/>} />
            <Route path='/settings' element={<Settings/>} />
            
            
          </Routes>

        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
