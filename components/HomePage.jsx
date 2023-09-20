"use client"
import React from "react";
import Image from "next/image"
import Cards from "./Cards";
import NowPlayingCards from "./NowPlayingCards";
import TopRatedCards from "./TopRatedCards";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

export default function HomePage(props){
  

  let [data, setData] = useState("")
  let [nowPlaying, SetNowPlaying] = useState("")
  let [topRated, SetTopRated] = useState("")

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
    }, [])

    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
    }, [])
  
    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => SetTopRated(response.results))
      .catch(err => console.error(err));
    }, [])


    return (
    <>
      <section className="home">
        {/*Searchbar*/}
        <SearchBar />
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
        <h3>Top Rated</h3>
        <div className="nowPlaying">{/*måste ändra till ett mer logiskt namn */ }
        {topRated.length > 0 && (
            <>
              <TopRatedCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-1].poster_path}`} />
              <TopRatedCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-2].poster_path}`} />
              <TopRatedCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-3].poster_path}`} />
              <TopRatedCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-4].poster_path}`} />
              <TopRatedCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-5].poster_path}`} />
            </>
          )}
        </div>
      </section>
    </>  

    )
}