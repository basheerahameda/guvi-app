import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import ToggleButton from "@mui/material/ToggleButton";

export function Movies({ movie, id }) {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const ratingStyle = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const [toggleShow, setToggleShow] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt="" />
      <div className="movie-specs">
        <h4>{movie.name}</h4>
        <p style={ratingStyle} className="movie-rating">
          ⭐{movie.rating}
        </p>
      </div>
      <div>
        <ToggleButton
          value="Movie summary"
          className="toggle-summary"
          onClick={() => setToggleShow(!toggleShow)}
        >
          Summary 🔽
        </ToggleButton>

        <ToggleButton value="Info" onClick={() => navigate(`/movies/${id}`)}>
          ℹ️
        </ToggleButton>
      </div>

      {toggleShow ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
