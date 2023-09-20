import React from "react"
import Image from "next/image"

export default function Menu(props){
    return(
    <section className="menu" id="hidden">
        <Image id="closeMenu" src="" height={50} width={50}></Image>
        <div className="options">
        <span className="topSpan"><Image src="" width={30} height={30}></Image> Home</span>
        <span onClick={props.handleDiscovery}><Image src="" width={30} height={30}></Image> Discover</span>
        </div>
    </section>
  )
}