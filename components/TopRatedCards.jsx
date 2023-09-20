import React from "react";
import Image from "next/image"

export default function TopRatedCards(props){
    return (
        <div className="verticalCards">
            <Image src={props.Poster} width={184} height={276}></Image>
        </div>
   )
}