import React from "react";
import { useRef, useState } from "react";
function NumberShowdown() {
  const [tablica, setTablica] = useState([]);
  const myNumberRef = useRef();
  return (
    <>
    <div className="d-flex">
    <span class="input-group-text" id="basic-addon1">number: </span>
    <input class="form-control" type="number" ref={myNumberRef}></input>
    </div>
    <button className="btn btn-primary" onClick={() => setTablica([...tablica, myNumberRef.current.value])}>Add</button>
    <table class="table">
      <thead>
        <tr>
            <th scope="col">lp</th>
            <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {tablica.map((val, idx) => 
          (<tr key={idx}><td>{idx}</td><td>{val}</td></tr>)
        )}
      </tbody>
    </table>
    </>
  );
}
export default NumberShowdown;
