import React from 'react';
import './../stylesheets/sidebar.css';

const SideBar = ({onPage=f=>f, o}) => 
    <aside className="sidebar">
        <ul>
            <li onClick={()=>onPage(!o.historyState, false, false, false)}>HISTORY</li>
            <li onClick={()=>onPage(false, !o.comicsState, false, false)}>COMICS</li>
            <li onClick={()=>onPage(false, false, !o.filmographyState, false)}>FILMOGRAPHY</li>
            <li onClick={()=>onPage(false, false, false, !o.artState)}>FAN ART</li>
        </ul>
    </aside>

export default SideBar;