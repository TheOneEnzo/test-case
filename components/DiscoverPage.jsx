import React from "react";
import SearchBar from "./SearchBar";
import Menu from "./Menu";

export default function DiscoverPage(props){
    return(
        <section className="discoveryContainer">
            <SearchBar />
            <h3>Discover</h3>
            <div className="buttonSelection">
                <button className="genre">Action</button>
                <button className="genre">Science fiction</button>
                <button className="genre">Adventure</button>
                <button className="genre">Fantasy</button>
                <button className="genre">War</button>
                <button className="genre">Animation</button>
                <button className="genre">Drama</button>
                <button className="genre">Horror</button>
            </div>
        </section>
    )
}