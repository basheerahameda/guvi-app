import React from "react";
import { useEffect, useState } from "react";
import { Movies } from "./Movies";

export function MovieList() {

  const [movieList, setMovieList] = useState([]);
  // fetch("https://62ca71b41eaf3786ebab6f90.mockapi.io/movies")
  // .then((data) => data.json())
  // .then((movies) => setMovieList(movies));
  const getMovies = () =>{
    fetch("https://62ca71b41eaf3786ebab6f90.mockapi.io/movies")
    .then((data) => data.json())
    .then((movies) => setMovieList(movies));
  } 

  const deleteMovie = (id) => {
    console.log("Deleting movie....", id);
    fetch(`https://62ca71b41eaf3786ebab6f90.mockapi.io/movies/${id}`, {method:"delete"})
    .then(() => getMovies())
  };
  
  useEffect(() => { getMovies()}, []);
  return (
           <div className="movie-list-container">
          {movieList.map((movie,index) => (
            <Movies 
            movie={movie} 
            id={movie.id} 
            key={movie.id} 
            deleteBtn={
              <button onClick={()=>deleteMovie(movie.id)}>Delete</button>
            }
            
            />
          ))}
        </div>
  
   );
}
