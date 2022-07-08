import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

export function MovieDetails({movieList}) {
  const { id } = useParams();
  const movieDetails = movieList[id];
  const navigate = useNavigate();

  const ratingStyle = {
    color: movieDetails.rating > 8 ? "green" : "red",
  };

  return (
    <div>
      <iframe width="100%" height="480" src={movieDetails.trailer} title="INTERSTELLAR 2 Teaser Trailer Concept - Matthew McConaughey, Christopher Nolan Sci-Fi Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-details-container">
        <div className="movie-specs">
          <h4>{movieDetails.name}</h4>
          <h4 style={ratingStyle} className="movie-rating">⭐{movieDetails.rating}</h4>
        </div>

        <p>{movieDetails.summary}</p>
        <button onClick={() => navigate(-1)}>⬅️Back</button>

      </div>
    </div>
  );
}
