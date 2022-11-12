import React from 'react';
import pug from './../images/PugLogoA.png';

const Header = () => {
    return (
        <header className='header'>
            <img src={pug} alt="Logo" width="275px" height="200px" />
        </header>
    );
}

export default Header;