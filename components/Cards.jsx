import React from "react";
import Image from "next/image"

export default function Cards(props){
    return (
        <div className="cards">
            <Image src={props.Poster} width={200} height={200}></Image>
            <div className="banner">
                <h4>{props.Title}</h4>
                <h6>{props.Year.split("-")[0]}</h6>
            </div>
        </div>
   )
}