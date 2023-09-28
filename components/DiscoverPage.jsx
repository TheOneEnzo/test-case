import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import TopRatedCards from "./TopRatedCards";
import NowPlayingCards from "./NowPlayingCards";

export default function DiscoverPage(props) {
  let [movies, setMovies] = useState([]);
  let [selectedGenreId, setSelectedGenreId] = useState(28);

  /*SORTING API*/
  let options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTg2ODEwNWIwNjIwM2NkNGUzNjU3NDI5NTRjMDAyZCIsInN1YiI6IjY0ZmRiZjU2ZmZjOWRlMGVlMTc1YTJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oD84cLkQ8gSnBQhHr73lY1GEJEOjEe9uJpx3zfrEmeg'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(response => response.json())
      .then(response => {
        setMovies(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  //GETS BUTTON ID AND SET STATE AS BUTTON ID

  function selectedButton(event) {
    let button = event.target;
    let newGenreId = Number(button.id);
    setSelectedGenreId(newGenreId);
  }

  // FILTER MOVIES BASED ON ID
  let filteredMovies = movies.filter(movie => movie.genre_ids.includes(selectedGenreId));

  return (
    <section className="discoveryContainer">
      <SearchBar />
      <h3>Discover</h3>
      <div className="buttonSelection">
        <button className={`genre ${selectedGenreId === 28 ? 'selected' : ''}`} id="28" onClick={selectedButton}>Action</button>
        <button className={`genre ${selectedGenreId === 878 ? 'selected' : ''}`} id="878" onClick={selectedButton}>Science fiction</button>
        <button className={`genre ${selectedGenreId === 12 ? 'selected' : ''}`} id="12" onClick={selectedButton}>Adventure</button>
        <button className={`genre ${selectedGenreId === 16 ? 'selected' : ''}`} id="16" onClick={selectedButton}>Animation</button>
        <button className={`genre ${selectedGenreId === 18 ? 'selected' : ''}`} id="18" onClick={selectedButton}>Drama</button>
        <button className={`genre ${selectedGenreId === 14 ? 'selected' : ''}`} id="14" onClick={selectedButton}>Fantasy</button>
        <button className={`genre ${selectedGenreId === 27 ? 'selected' : ''}`} id="27" onClick={selectedButton}>Horror</button>
        <button className={`genre ${selectedGenreId === 10752 ? 'selected' : ''}`} id="10752" onClick={selectedButton}>War</button>
        {/* Add more genre buttons here */}
      </div>
        {/* CREATES NowPlayingCards FOR EACH MOVIE IN THE FILTERED LISTS OF MOVIES */}
      {filteredMovies.length > 0 ? (
        <div className="nowPlaying">
          {filteredMovies.map(movie => (
            <NowPlayingCards key={movie.id} Poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} Title={movie.title}  Year={movie.release_date} />
          ))}
        </div>
      ) : (
        <p>No movies found for the selected genre.</p>
      )}
    </section>
  );
}