import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Navigate, useNavigate } from "react-router-dom";


export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div className="add-movie-form">
          <TextField id="filled-basic" label="Enter a movie Title" variant="filled"   onChange={(event) => setName(event.target.value)}
          value={name}/>
          <TextField id="filled-basic" label="Enter a movie Poster" variant="filled"   onChange={(event) => setPoster(event.target.value)}
          value={poster}/>
          <TextField id="filled-basic" label="Enter a movie Rating" variant="filled"   onChange={(event) => setRating(event.target.value)}
          value={rating}/>
          <TextField id="filled-basic" label="Enter a movie Summary" variant="filled"   onChange={(event) => setSummary(event.target.value)}
          value={summary}/>
          <TextField id="filled-basic" label="Enter a movie Trailer" variant="filled"   onChange={(event) => setTrailer(event.target.value)}
          value={trailer}/>

        
<Button variant="contained" 
 onClick={() => {
  const newMovie = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
    trailer: trailer,
  };

  fetch("https://62ca71b41eaf3786ebab6f90.mockapi.io/movies", {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      "Content-Type": "application/json"
    },
  }).then(() => navigate("/movies"));

 // setMovieList([...movieList, newMovie]);
}}
// variant="contained"
>Add movie</Button>

</div>
    </div>
  );
}
