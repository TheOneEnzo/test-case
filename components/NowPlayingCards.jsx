import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NowPlayingCards(props){

    return (
        <div className="nowPlayingCards">
            <Image src={props.Poster} width={184} height={276}></Image>
        </div>
    )
}