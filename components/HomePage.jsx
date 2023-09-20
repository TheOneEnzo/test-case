"use client"
import React from "react";
import Image from "next/image"
import Cards from "./Cards";
import NowPlayingCards from "./NowPlayingCards";
import { useEffect, useState } from "react";

export default function HomePage(){
  

  let [data, setData] = useState("")
  let [nowPlaying, SetNowPlaying] = useState("")

  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTg2ODEwNWIwNjIwM2NkNGUzNjU3NDI5NTRjMDAyZCIsInN1YiI6IjY0ZmRiZjU2ZmZjOWRlMGVlMTc1YTJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oD84cLkQ8gSnBQhHr73lY1GEJEOjEe9uJpx3zfrEmeg'
      }
    };

    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => SetNowPlaying(response.results))
      .catch(err => console.error(err));
      console.log(nowPlaying)
    }, [])

    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
      console.log(data)

    }, [])

  

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
      {data.length > 0 && (
          <>
            <Cards Poster={`https://image.tmdb.org/t/p/w500${data[data.length - 1].poster_path}`} />
            <Cards Poster={`https://image.tmdb.org/t/p/w500${data[data.length - 2].poster_path}`} />
          </>
        )}
      </div>
      {/*Now Playing*/}
      <h3>Now Playing</h3>
      <div className="nowPlaying">
      {nowPlaying.length > 0 && (
          <>
            <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-1].poster_path}`} />
            <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-2].poster_path}`} />
            <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-3].poster_path}`} />
            <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-4].poster_path}`} />
            <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-5].poster_path}`} />
          </>
        )}
      </div>
    </section>

    )
}