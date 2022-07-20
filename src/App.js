import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { MovieList } from "./MovieList";
import { Home } from "./Home";
import { About } from "./About";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { AddMovie } from "./AddMovie";
import { NotFound } from "./NotFound";
import { MovieDetails } from "./MovieDetails";
// import Drilling from "./propsDrilling";
import Theme from "./theme";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import {Movies} from './Movies';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export function App() {
  // const INITIAL_MOVIE_LIST1 = [
  //   {
  //     id: "100",
  //     name: "RRR",
  //     poster:
  //       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  //     rating: 8.8,
  //     summary:
  //       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  //     trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
  //   },
  //   {
  //     id: "101",
  //     name: "Iron man 2",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //     rating: 7,
  //     summary:
  //       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  //     trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  //   },
  //   {
  //     id: "102",
  //     name: "No Country for Old Men",
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  //     rating: 8.1,
  //     summary:
  //       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //     trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  //   },
  //   {
  //     id: "103",
  //     name: "Jai Bhim",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //     summary:
  //       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  //     rating: 8.8,
  //     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
  //   },
  //   {
  //     id: "104",
  //     name: "The Avengers",
  //     rating: 8,
  //     summary:
  //       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //     poster:
  //       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
  //   },
  //   {
  //     id: "105",
  //     name: "Interstellar",
  //     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  //     rating: 8.6,
  //     summary:
  //       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  //     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  //   },
  //   {
  //     id: "106",
  //     name: "Baahubali",
  //     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  //     rating: 8,
  //     summary:
  //       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  //     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  //   },
  //   {
  //     id: "107",
  //     name: "Ratatouille",
  //     poster:
  //       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  //     rating: 8,
  //     summary:
  //       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  //     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
  //   },
  // ];

  // const INITIAL_MOVIE_LIST = [
  //   { name: "RRR", poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG", rating: 8.8, summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.", }, { name: "Iron man 2", poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg", rating: 7, summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.", }, { name: "No Country for Old Men", poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg", rating: 8.1, summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.", }, { name: "Jai Bhim", poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg", summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case", rating: 8.8, }, { name: "The Avengers", rating: 8, summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.", poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg", }, { name: "Interstellar", poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg", rating: 8.6, summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.", }, { name: "Baahubali", poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg", rating: 8, summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.", }, { name: "Ratatouille", poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=", rating: 8, summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.", }, {name: "Slum dog millionaire", poster: "https://www.bing.com/th?id=OIP.ugRL-uMTVgzAVimADU25kwHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2", rating: 9.8, summary:"Slumdog Millionaire is a 2008 British drama film that is a loose adaptation of the novel Q & A (2005) by Indian author Vikas Swarup, telling the story of 18-year-old Jamal Malik from the Juhu slums of Mumbai. Starring Dev Patel as Jamal, and filmed in India, the film was directed by Danny Boyle, written by Simon Beaufoy, and produced by Christian Colson, with Loveleen Tandan credited as co-director. As a contestant on Kaun Banega Crorepati, an Indian-Hindi version of Who Wants to Be a Millionaire?, Jamal surprises everyone by being able to answer every question correctly, winning ₹20 million."}
  // ];
  // const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // fetch("https://62ca71b41eaf3786ebab6f90.mockapi.io/movies")
  // .then((data) => data.json())
  // .then((movies) => setMovieList(movies));

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style = {{borderRadius: "0px", minHeight: "100vh"}} elevation={5} >
    <div className="App">
      <div className="header-bar">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
              Aboutus
            </Button>
            <Button color="inherit" onClick={() => navigate("/movies")}>
              Movies
            </Button>
            <Button color="inherit" onClick={() => navigate("/addMovie")}>
              Add movie
            </Button>
             
            <Button color="inherit" 
            startIcon={mode=== "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            onClick={() => setMode(mode=== "light" ? "dark" : "light")}>
              {mode==="light" ?"Dark": "Light"} mode
            </Button> 
          </Toolbar>
        </AppBar>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home movies={movieList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MovieList />} />
        <Route
          path="/addMovie"
          element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route
          path="/movies/:id"
          element={<MovieDetails movieList={movieList} />}
        />
        <Route path="/films" element={<Navigate replace to="/Movies" />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/theme" element={<Theme />} />
      </Routes> */}

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MovieList />} />
        <Route
          path="/addMovie"
          element={
            <AddMovie/>
          }
        />
        <Route
          path="/movies/:id"
          element={<MovieDetails/>}
        />
        <Route path="/films" element={<Navigate replace to="/Movies" />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/theme" element={<Theme />} />
      </Routes>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
