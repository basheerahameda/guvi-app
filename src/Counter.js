import { useState } from "react";
import React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// function Welcome(props){
//   const name = "Basheer";
//   return (
//     <div>
//     <img className="pic" src={props.pic} alt={props.name}/>
//     <Counter />
//     <h5>Hello, {props.name}.</h5>
//     <p>{props.description}</p>
//     </div>
//   )
// }


export function Counter() {
  //let like = 10;
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  return (
    <div className="like-dislike">
      <span>
      <ToggleButton value="Like" onClick={() => setlike(like + 1)}>👍{like}</ToggleButton>
      <ToggleButton value="Like" onClick={() => setdislike(dislike + 1)}>👎 {dislike}</ToggleButton>
      </span>
     </div> 
    //   <div><span>  <button onClick={() => setlike(like + 1)}>👍{like}</button></span>
    //   <span><button onClick={() => setdislike(dislike + 1)}>👎 {dislike}</button></span>
    // </div>
  );
}
