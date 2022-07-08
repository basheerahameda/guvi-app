import React from 'react';
import { Counter } from './App';

function Msg(props) {
  /* const name = "Basheer"; */
  return (
    <div>
      <img className="pic" src={props.pic} alt={props.name} />
      <Counter />
      <h1>Hello, {props.name}</h1>
    </div>
  );
}
