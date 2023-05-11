import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import MyProfileBlockContainer from '../MyProfileBlock/MyProfileBlockContainer';
import LogoutTab from './LogoutTab/LogoutTab';
import profilePic from '../../redux/images/icons/profile.png';
import usersPic from '../../redux/images/icons/users.png';
import aboutPic from '../../redux/images/icons/info.png';
import messagesPic from '../../redux/images/icons/messages.png';
import friendsPic from '../../redux/images/icons/friends.png';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <MyProfileBlockContainer />

      <div className={classes.mobileAdj}>
        <MenuLinks navbarLink={navbarLink} />
      </div>

      <LogoutTab />
    </nav>
  );
};

export default Navbar;

export const MenuLinks = ({ navbarLink }) => {
  return (
    <div className={classes.navLinks}>
      {navbarLink('/profile/:userId', 'Profile', profilePic)}
      {navbarLink('/dialogs', 'Messages', messagesPic)}
      {navbarLink('/friends', 'Friends', friendsPic)}
      {navbarLink('/users', 'All users', usersPic)}
      {navbarLink('about', 'About', aboutPic)}
    </div>
  );
};

export const navbarLink = (adress, linkName, pic) => {
  return (
    <NavLink
      to={adress}
      className={(navData) =>
        navData.isActive ? classes.active : classes.item
      }
    >
      <div className={classes.itemGlob}>
        <img src={pic} className={classes.imgIcon} alt="navIcon"></img>
        {linkName}
      </div>
    </NavLink>
  );
};
