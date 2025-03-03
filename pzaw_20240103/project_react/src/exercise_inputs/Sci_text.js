import React from "react";
import {useState, useRef} from "react";
function Sci_text({force_upd}){
const [mytext, setText] = useState(' ');
const myRef_text = useRef();
return(
    <>
    <input type='text' defaultValue={mytext} ref={myRef_text} onChange={force_upd?() => setText(myRef_text.current.value):null}></input>
    <button onClick={() => setText(myRef_text.current.value)} disabled={force_upd}> UPDATE </button>
    <p>Tekst : {mytext}</p>
    </>
)
}
export default Sci_text;