import React from "react";
import Image from "next/image";
import Hamburgur from "../public/hamburgurPNG.png"

export default function NavigationBar(props){

    return(
        <nav className="navBar">
            <h3>Movies</h3>
            <Image src={Hamburgur} width={30} height={30} onClick={props.click} />
        </nav>
    )
}