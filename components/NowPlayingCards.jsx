import React from "react";
import Image from "next/image";

export default function NowPlayingCards(){
    return (
        <div className="nowPlayingCards">
            <Image src="/Hamburger_icon.svg" width={20} height={20}></Image>
        </div>
    )
}