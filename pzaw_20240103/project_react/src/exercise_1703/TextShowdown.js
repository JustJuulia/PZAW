import React from "react";
import { useRef, useState } from "react";
function TextShowdown(){
    const [text, setText] = useState("");
    const myTextRef = useRef("");
return(
    <>
    <div className="d-flex">
        <span class="input-group-text" id="basic-addon1">text: </span>
        <input class="form-control" type="text" ref={myTextRef}></input>
        <button className="btn btn-primary" onClick={() => setText(text +  myTextRef.current.value)}>Add</button>
        <button className="btn btn-primary" onClick={() => setText(" ")}>Clear</button>
    </div>
    <div style={{width:"250px", border:"solid black", height:"100px", overflowY: "auto"}}>
            {text}
        </div>
    </>
)
}
export default TextShowdown;