import React from 'react';
import './../stylesheets/sidebar.css';

const SideBar = ({onPage=f=>f, historyState, comicsState, filmographyState, albumState}) => 
    <aside className="sidebar">
        <ul>
            <li onClick={()=>onPage(!historyState, comicsState=false, filmographyState=false, albumState=false)}>HISTORY</li>
            <li onClick={()=>onPage(historyState=false, !comicsState, filmographyState=false, albumState=false)}>COMICS</li>
            <li onClick={()=>onPage(historyState=false, comicsState=false, !filmographyState, albumState=false)}>FILMOGRAPHY</li>
            <li onClick={()=>onPage(historyState=false, comicsState=false, filmographyState=false, !albumState)}>ALBUM</li>
        </ul>
    </aside>

export default SideBar;