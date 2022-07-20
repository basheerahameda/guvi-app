import React, { useState, createContext, useContext } from "react";
//import "./styles.css";


const themectx = createContext();
export default function Theme() {
    
        const  [mode, setMode] = useState("light");
        const styles = {
        color:mode==="light" ? "light" : "dark",
        background: mode==="light" ? "black" : "white"
        };
        return (
            <themectx.Provider value={[mode, setMode]}>
        <div style={styles} className="App">
        <List />
        </div></themectx.Provider>
        );
        }
        
        const List = ({setMode, mode}) => (
        <ul>
        <ListItem value="light"  />
        <ListItem value="dark" />
        </ul>
        );
        
        const ListItem = ({value}) => (
        <li>
        <Button value={value} />
        </li>
        );
        
        const Button = ({value}) => {
         const [mode, setMode] =  useContext(themectx)
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