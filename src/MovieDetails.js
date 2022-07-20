import React from 'react';
import {useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();
  // const movieDetails = movieList[id];
   const navigate = useNavigate();

  // const ratingStyle = {
  //   color: movieDetails.rating > 8 ? "green" : "red",
    
  // };
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://62ca71b41eaf3786ebab6f90.mockapi.io/movies/${id}`)
  .then((data) => data.json())
  .then((movies) => setMovie(movies));
  }, []);
  const ratingStyle = {
    color: movie.rating > 8 ? "green" : "red",
    
  };
  
  return (
    <div>
      <iframe width="100%" height="480" src={movie.trailer} title="INTERSTELLAR 2 Teaser Trailer Concept - Matthew McConaughey, Christopher Nolan Sci-Fi Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-details-container">
        <div className="movie-specs">
          <h4>{movie.name}</h4>
          <h4 style={ratingStyle} className="movie-rating">⭐{movie.rating}</h4>
        </div>

        <p>{movie.summary}</p>
        <button onClick={() => navigate(-1)}>⬅️Back</button>

      </div>
    </div>
  );
}
