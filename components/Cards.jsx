import React from "react";
import Image from "next/image"

export default function Cards(props){
    console.log(props)
    return (
        <div className="cards">
            <Image src={"https://image.tmdb.org/t/p/w500/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg"} width={200} height={200}></Image>
        </div>
   )
}