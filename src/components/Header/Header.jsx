import React from 'react';
import pug from './images/PugLogoA.png';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    debugger
    return (
        <header className={classes.header}>
            <img src={pug} alt="Logo" width="275px" height="200px" />

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;