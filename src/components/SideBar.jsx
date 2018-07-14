import React from 'react';
import './../stylesheets/sidebar.css';

const SideBar = () => {
    return(
        <aside className="sidebar">
            <ul>
                <li>HISTORY</li>
                <li>COMICS</li>
                <li>FILMOGRAPHY</li>
                <li>ALBUM</li>
            </ul>
        </aside>
    )
}

export default SideBar;