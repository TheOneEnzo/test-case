import React from "react"
import Image from "next/image"
import HomePicture from "../public/icons8-country-house-50.png"
import CompassIcon from "../public/CompassPNG.png"

export default function Menu(props){
    return(
    <section className="menu" id="hidden">
        {props.width>=800 && <h1 id="title">Movies</h1>}
        <div className="options">
          <div className="menuContainer top">
            <Image id="test" src={HomePicture} width={30} height={30}></Image>
            <span onClick={props.handleHomePage} className="topSpan">Home</span>
          </div>
          <div className="menuContainer">
            <Image id="test" src={CompassIcon} width={30} height={30}></Image>
            <span onClick={props.handleDiscovery} className="bottomSpan"> Discover</span>
          </div>

        </div>
    </section>
  )
}