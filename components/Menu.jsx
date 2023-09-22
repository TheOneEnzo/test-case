import React from "react"
import Image from "next/image"

export default function Menu(props){
    return(
    <section className="menu" id="hidden">
        {props.width>=800 && <h1 id="title">Movies</h1>}
        <div className="options">
          <span onClick={props.handleHomePage} className="topSpan"><Image src="" width={30} height={30}></Image> Home</span>
          <span onClick={props.handleDiscovery}><Image onClick={props.handleDiscovery} src="" width={30} height={30}></Image> Discover</span>
        </div>
    </section>
  )
}