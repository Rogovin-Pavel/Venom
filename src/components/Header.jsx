import React from 'react';
import Button from '@material-ui/core/Button';
import '../stylesheets/header.css';
import './../img/venom__logo.png';


const Header = () => {
    return(
        <header>
            <div className="header__logo">
            </div>
            <nav>
              <ul className="header__nav__menu">
                <li><Button variant="flat" className="button">about me</Button></li>
                <li><Button variant="flat">email</Button></li>
                <li><Button variant="flat"><a href="https://vk.com/id239609752" target="_blank">vk</a></Button></li>
              </ul>
            </nav>
        </header>
    )
};

export default Header;