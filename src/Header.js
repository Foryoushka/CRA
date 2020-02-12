import React from 'react';
import Menu from "./Menu";
import Logo from "./Logo";


function Header() {
    return (
        <header>
            <div className="container">
                <Logo/>
                <Menu/>
            </div>
        </header>
    );
}

export default Header;