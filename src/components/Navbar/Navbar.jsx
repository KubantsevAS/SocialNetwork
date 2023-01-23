import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsTab from './FriendsTab/FrendsTab';
import MyProfileBlockContainer from '../MyProfileBlock/MyProfileBlockContainer';
import LogoutTab from './LogoutTab/LogoutTab';
import profilePic from '../../redux/images/icons/profile.png'
import usersPic from '../../redux/images/icons/users.png'
import newsPic from '../../redux/images/icons/news.png'
import messagesPic from '../../redux/images/icons/messages.png'
import friendsPic from '../../redux/images/icons/friends.png'

const Navbar = () => {

const navbarLink = (adress, linkName, pic) => {
    return (
        <NavLink to={adress} className={navData => navData.isActive ? classes.active : classes.item}>
            <div className={classes.itemGlob}><img src={pic} className={classes.imgIcon}></img>{linkName}</div>
        </NavLink>
    )
}

    return (
        <nav className={classes.nav}>

            <MyProfileBlockContainer/>

            {navbarLink('/profile/:userId', 'Profile', profilePic)}
            {navbarLink('/dialogs', 'Messages', messagesPic)}
            {navbarLink('/news', 'News', newsPic)}
            {navbarLink('/friends', 'Friends', friendsPic)}
            {navbarLink('/users', 'All users', usersPic)}
            
            
                {/* <FriendsTab/> */}
            
            

            <LogoutTab/>
        </nav>
    );
}

export default Navbar;