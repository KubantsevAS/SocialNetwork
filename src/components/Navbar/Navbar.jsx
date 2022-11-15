import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsMenu from '../FriendsMenu/FrendsMenu';

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>

            <NavLink to='/profile' id='lin1' className={navData => navData.isActive ? classes.active : classes.item}>
                <div className={classes.itemGlob}>Profile</div>
            </NavLink>

            <NavLink to='/dialogs' className={navData => navData.isActive ? classes.active : classes.item}>
                <div className={classes.itemGlob}>
                    Messages
                </div>
            </NavLink>
            <NavLink to='/news' className={navData => navData.isActive ? classes.active : classes.item}>
                <div className={classes.itemGlob}>
                    News
                </div>
            </NavLink>
            <NavLink to='/music' className={navData => navData.isActive ? classes.active : classes.item}>
                <div className={classes.itemGlob}>
                    Music
                </div>
            </NavLink>
            <NavLink to='/settings' className={navData => navData.isActive ? classes.active : classes.item}>
                <div className={classes.itemGlob}>
                    Settings
                </div>
            </NavLink>

            <FriendsMenu friendsList={props.friendsPanel.friendsList}/>
        </nav>
    );
}

export default Navbar;