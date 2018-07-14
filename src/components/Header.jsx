import React from 'react';
import Button from '@material-ui/core/Button';
import '../stylesheets/header.css';


const Header = () => {
    return(
        <header>
            <div className="header__logo">
            </div>
            <nav>
              <ul className="header__nav__menu">
                <li><Button size = "small" variant="flat" className="button">about me</Button></li>
                <li><Button size="small" variant="flat">email</Button></li>
                <li><Button size="small" variant="flat"><a href="https://vk.com/id239609752" target="_blank">vk.com</a></Button></li>
              </ul>
            </nav>
            
        </header>
    )
};

export default Header;