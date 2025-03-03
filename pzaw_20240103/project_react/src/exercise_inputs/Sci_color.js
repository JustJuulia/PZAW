import React from "react";
import { useRef, useState } from "react";
function Sci_color({force_upd}) {
  const colorRef = useRef();
  const [color, setColor] = useState('#000000');
  return (
    <>
      <input type="color" ref={colorRef} value={color}></input>
      <button onClick={(e) => setColor(colorRef.current.value)} disabled={force_upd}>
        UPDATE
      </button>
      <p style={{backgroundColor: color}}>
        Color: {color}
      </p>
    </>
  );
}
export default Sci_color;
