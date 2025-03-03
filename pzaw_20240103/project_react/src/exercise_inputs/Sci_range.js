import {React, useState, useRef} from "react";
function Sci_range({force_upd}){
const [val, setVal] = useState(0);
const myRangeRef = useRef();
return(<>
<input type="range" min={0} max={50} defaultValue={val} ref={myRangeRef}></input>
<button onClick={(e) => setVal(myRangeRef.current.value)} disabled={force_upd}>UPDATE</button>
Value: {val.toString()}
</>)
}
export default Sci_range;