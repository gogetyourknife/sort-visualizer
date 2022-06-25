import React from 'react';

import header_logo from '../images/header_logo.png';

function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={header_logo} alt="Логотип" />
        </header>
    );

}
export default Header;