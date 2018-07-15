import React from 'react';
import './../stylesheets/content.css';


const Content = ({history, o}) => 
    <div className={o.historyState ? "history content" : "history content hidden"} overflow="scroll">
        {history.map((p, i) => <p key={i}>{p}</p>)}
    </div>
    
export default Content;