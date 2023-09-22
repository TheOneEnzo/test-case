import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function NowPlayingCards(props){
    
    let [isShown, setIsShown] = useState(false);

    return (
        <div onMouseEnter={()=>{ setIsShown(true)}} onMouseLeave={()=>{setIsShown(false)}} className="verticalCards">
            <Image src={props.Poster} width={184} height={276}></Image>
            { isShown && <div className="hover">
                <h3 className="title">{props.Title}</h3>
                <h5 className="year"> {props.Year.split("-")[0]} </h5>
            </div>}
        </div>
    )
}