import React from "react";
import { Movies } from "./Movies";

export function MovieList({ movieList}) {
  return (
           <div className="movie-list-container">
          {movieList.map((movie,index) => (
            <Movies movie={movie} id={index} />
          ))}
        </div>
  
   );
}
