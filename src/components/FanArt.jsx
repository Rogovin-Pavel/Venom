import React from 'react';
import './../stylesheets/art.css';

const FanArt = ({art, o}) =>
    <div className={o.artState ? "art" : "art hidden"}>
        {art.map((imgUrl, i) => 
        <a href={imgUrl} target="_blank">
            <div key={i} style={{background: `url( ${imgUrl})`,
                                 backgroundSize: "120%",
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "top center"
                                 }}>
            </div>
        </a>
        )}
    </div>

export default FanArt;