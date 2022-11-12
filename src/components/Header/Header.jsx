import React from 'react';
import pug from './images/PugLogoA.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={pug} alt="Logo" width="275px" height="200px" />
        </header>
    );
}

export default Header;