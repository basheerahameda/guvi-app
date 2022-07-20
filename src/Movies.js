import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import ToggleButton from "@mui/material/ToggleButton";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Movies({ movie, id, deleteBtn }) {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const ratingStyle = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const [toggleShow, setToggleShow] = useState(true);
  const navigate = useNavigate();

  return (
    <Card className="movie-container" style={{borderRadius:"0px"}}>
      <img className="movie-poster" src={movie.poster} alt="" />

      <CardContent>
        <div className="movie-specs">
          <Typography>
            <h4>
              {movie.name}

              <IconButton
                color="primary"
                onClick={() => navigate(`/movies/${id}`)}
                aria-label="Movie info"
              >
                <InfoIcon />
              </IconButton>
              <IconButton
                color="primary"
                value="Movie summary"
                className="toggle-summary"
                onClick={() => setToggleShow(!toggleShow)}
              >
                {toggleShow ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </h4>
          </Typography>

          <p style={ratingStyle} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>
        <div>
         
        </div>
        <Typography>
          {toggleShow ? <p className="movie-summary">{movie.summary}</p> : null}
        </Typography>
      </CardContent>
      <CardActions>
        <Counter />
        {deleteBtn}
      </CardActions>
    </Card>
  );
}
