import React, { useState, Context } from "react";
//import "./styles.css";

export default function Drilling() {
    
        const  [mode, setMode] = useState("light");
        const styles = {
        color:mode==="light" ? "light" : "dark",
        background: mode==="light" ? "black" : "white"
        };
        return (
        <div style={styles} className="App">
        <List setMode={setMode} mode={mode}/>
        </div>
        );
        }
        
        const List = ({setMode, mode}) => (
        <ul>
        <ListItem value="light"  setMode={setMode} mode={mode}/>
        <ListItem value="dark" setMode={setMode} mode={mode}/>
        </ul>
        );
        
        const ListItem = ({value, setMode, mode}) => (
        <li>
        <Button value={value} setMode={setMode} mode={mode}/>
        </li>
        );
        
        const Button = ({value, setMode, mode}) => {
        const styles = {
        color:mode==="light" ? "black" : "white",
        background: mode==="light" ? "white" : "black"
        }
        return (
        <button style={styles} onClick={() => 
        setMode(value==="light" ? "dark" : "light")} > {value} </button>
        )
        }
        

// Task (Don't delete or edit components)
// 1. Complete with props drilling - 15mins
// 2. Complete with useContext (avoiding props drilling)

// Reference - https://codesandbox.io/s/usecontext-reference-hw839?file=/src/index.js:165-178
// Expected output - https://csb-6qf0y.netlify.app/

// 1. Creating - createContext
// 2. Publisher - provider - context.Provider
        // 3. Subscriber - useContext - useContext(context) 