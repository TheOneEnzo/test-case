"use client"
import React from "react";
import Image from "next/image"
import Cards from "./Cards";
import NowPlayingCards from "./NowPlayingCards";
import { useEffect, useState } from "react";

export default function HomePage(){

  let [data, setData] = useState("")

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTg2ODEwNWIwNjIwM2NkNGUzNjU3NDI5NTRjMDAyZCIsInN1YiI6IjY0ZmRiZjU2ZmZjOWRlMGVlMTc1YTJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oD84cLkQ8gSnBQhHr73lY1GEJEOjEe9uJpx3zfrEmeg'
    }
  };
  
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => setData(response.results[0].poster_path))
    .catch(err => console.error(err));

  }, [])

  console.log(data)
    return (
    <section className="home">
        <nav className="navBar">
            <h3>Movies</h3>
            <Image src="" width={30} height={30} />
        </nav>
      {/*Searchbar*/}
        <input type="text" placeholder="Search movie titles" />
      {/*Trending*/}
      <h3>Trending</h3>
      <div className="trending">
        <Cards Poster={`https://image.tmdb.org/t/p/w500${data}`}/>
        <Cards Poster={`https://image.tmdb.org/t/p/w500${data}`}/>
      </div>
      {/*Now Playing*/}
      <h3>Now Playing</h3>
      <div className="nowPlaying">
        <NowPlayingCards />
      </div>
    </section>

    )
}