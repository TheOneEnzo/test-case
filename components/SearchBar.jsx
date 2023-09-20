import React from "react";
import Image from "next/image";

export default function SearchBar(){
    return(
        <div className="searchBar">
            <Image id="magnifyingGlass" src="./magnifying-glass-svgrepo-com.svg" width={30} height={30}></Image>
            <input type="text" placeholder="Search movie titles" />
      </div>
    )
}