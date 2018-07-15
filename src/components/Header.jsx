import React from 'react';
import '../stylesheets/header.css';


const Header = () => 
    <header>
        <div className="header__logo"></div>
        <nav>
            <ul className="header__nav__menu">
                <li>ABOUT ME</li>
                <li>EMAIL</li>
                <li><a href="https://vk.com/id239609752" target="_blank">VK.COM</a></li>
            </ul>
        </nav> 
    </header>

export default Header;