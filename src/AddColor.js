import { useState } from "react";
import React from 'react';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("lightpink");

  const INITIAL_COLOR_LIST = ["PINK", "PLUM", "PURPLE"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);

  const styles = {
    background: color,
    fontSize: "15px",
  };

  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
        value={color} />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      <ColorBox />
      {colorList.map(clr => (
        <ColorBox color={clr} />
      ))}
    </div>
  );

}
