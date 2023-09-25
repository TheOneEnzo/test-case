import React from "react";
import Image from "next/image";
import {useState, useEffect} from "react"


export default function SearchBar(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTg2ODEwNWIwNjIwM2NkNGUzNjU3NDI5NTRjMDAyZCIsInN1YiI6IjY0ZmRiZjU2ZmZjOWRlMGVlMTc1YTJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oD84cLkQ8gSnBQhHr73lY1GEJEOjEe9uJpx3zfrEmeg'
        }
      };
  

    const [searchInput, setSearchInput] = useState("");

    fetch('https://api.themoviedb.org/3/search/keyword?page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));



    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    

    /*måste anpassa denna if 
    if (searchInput.length > 0) { 
        countries.filter((country) => {
        return country.name.match(searchInput);
    });
    }

*/
    return(
        <div className="searchBar">
            <Image id="magnifyingGlass" src="./magnifying-glass-svgrepo-com.svg" width={30} height={30}></Image>
            <form action="GET">
                <input type="text" placeholder="Search movie titles" onChange={handleChange} value={searchInput} />
            </form>
      </div>
    )
}