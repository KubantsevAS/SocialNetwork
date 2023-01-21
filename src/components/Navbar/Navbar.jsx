import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsMenu from '../FriendsMenu/FrendsMenu';
import MyProfileBlockContainer from '../MyProfileBlock/MyProfileBlockContainer';

const Navbar = () => {

const navbarLink = (adress, linkName) => {
    return (
        <NavLink to={adress} className={navData => navData.isActive ? classes.active : classes.item}>
            <div className={classes.itemGlob}>{linkName}</div>
        </NavLink>
    )
}

    return (
        <nav className={classes.nav}>

            <MyProfileBlockContainer/>

            {navbarLink('/profile/:userId', 'Profile')}
            {navbarLink('/dialogs', 'Messages')}
            {navbarLink('/news', 'News')}
            {navbarLink('/music', 'Music')}
            {navbarLink('/settings', 'Settings')}
            {navbarLink('/users', 'Users')}

            <FriendsMenu
            />
        </nav>
    );
}

export default Navbar;