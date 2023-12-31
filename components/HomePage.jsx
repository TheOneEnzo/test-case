"use client"
import React from "react";
import Cards from "./Cards";
import NowPlayingCards from "./NowPlayingCards";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

export default function HomePage(props){
  

  let [trending, setTrending] = useState("")
  let [nowPlaying, SetNowPlaying] = useState("")
  let [topRated, SetTopRated] = useState("")

  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTg2ODEwNWIwNjIwM2NkNGUzNjU3NDI5NTRjMDAyZCIsInN1YiI6IjY0ZmRiZjU2ZmZjOWRlMGVlMTc1YTJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oD84cLkQ8gSnBQhHr73lY1GEJEOjEe9uJpx3zfrEmeg'
      }
    };
      //NOW PLAYING, TRENDING AND TOP RATED API 
    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => SetNowPlaying(response.results))
      .catch(err => console.error(err));
    }, [])

    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then((response) => response.json())
      .then((response) => setTrending(response.results))
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

        <SearchBar />

        {/* TRENDING */}

        <h3>Trending</h3>
        <div className="trending">
        {trending.length > 0 && (
            <>
              <Cards Poster={`https://image.tmdb.org/t/p/w500${trending[trending.length - 1].poster_path}`} Title={trending[trending.length-1].original_title} Year={trending[trending.length-1].release_date} />
              <Cards Poster={`https://image.tmdb.org/t/p/w500${trending[trending.length - 2].poster_path}`} Title={trending[trending.length-2].original_title} Year={trending[trending.length-2].release_date}/>
            </>
          )}
        </div>

        {/* NOWPLAYING */}

        <h3>Now Playing</h3>
        <div className="nowPlaying">
        {nowPlaying.length > 0 && (
            <>
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-1].poster_path}`} Title={nowPlaying[nowPlaying.length-1].original_title} Year={nowPlaying[nowPlaying.length-1].release_date} />
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-2].poster_path}`} Title={nowPlaying[nowPlaying.length-2].original_title} Year={nowPlaying[nowPlaying.length-2].release_date} />
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-3].poster_path}`} Title={nowPlaying[nowPlaying.length-3].original_title} Year={nowPlaying[nowPlaying.length-3].release_date} />
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-4].poster_path}`} Title={nowPlaying[nowPlaying.length-4].original_title} Year={nowPlaying[nowPlaying.length-4].release_date}/>
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${nowPlaying[nowPlaying.length-5].poster_path}`} Title={nowPlaying[nowPlaying.length-5].original_title} Year={nowPlaying[nowPlaying.length-5].release_date}/>
            </>
          )}
        </div>

        {/* TOPRATED */}

        <h3>Top Rated</h3>
        <div className="nowPlaying">
        {topRated.length > 0 && (
            <>
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-1].poster_path}`} Title={topRated[topRated.length-1].original_name} Year={topRated[topRated.length-1].first_air_date} />
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-2].poster_path}`} Title={topRated[topRated.length-2].original_name} Year={topRated[topRated.length-2].first_air_date} />
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-3].poster_path}`} Title={topRated[topRated.length-3].original_name} Year={topRated[topRated.length-3].first_air_date}/>
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-4].poster_path}`} Title={topRated[topRated.length-4].original_name} Year={topRated[topRated.length-4].first_air_date}/>
              <NowPlayingCards Poster={`https://image.tmdb.org/t/p/w500${topRated[topRated.length-5].poster_path}`} Title={topRated[topRated.length-5].original_name} Year={topRated[topRated.length-5].first_air_date}/>
            </>
          )}
        </div>
      </section>
    </>  

    )
}