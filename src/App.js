import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Welcome name= "Benyl" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU" description="lorem1dsklfhdsjkfnd."/>
      <Welcome name = "Udhaya kumar" pic="https://wallpaperaccess.com/full/2213415.jpg" title="Movie title"/>
      <Welcome name = "Ravi" pic="https://wallpaperaccess.com/full/2213444.jpg" title="Movie title"/>
    
    </div>
  );
}

function Welcome(props){
  const name = "Vijay";
  return (
    <div>
    <img className="pic" src={props.pic} alt={props.name}/>
    <Counter />
    <h5>Hello, {props.name}.</h5>
    <p>{props.description}</p>
    
    </div>
  )
}

function Counter(){
//let like = 10;
const [like, setlike] = useState(0);
const [dislike, setdislike] = useState(0);

  return(
    <div>
      <span><button onClick={()=>setlike(like+1)}>Like {like}</button></span>
      <span><button onClick={()=>setdislike(dislike+1)}>DisLike {dislike}</button></span>

    </div>
  )
}

export default App;
