import React from 'react';

import header_logo from '../images/header_logo.png';

function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={header_logo} alt="Логотип" />
            <a href='https://github.com/gogetyourknife' target='_blank' className="header__link"></a>
        </header>
    );

}
export default Header;