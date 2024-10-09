import { useEffect, useRef, useState } from "react";
import './MyStatic.css';
function Exercise1(){
    let inputRef1 = useRef();
    let  inputRef2 = useRef();
    let  selectRef = useRef();
    const [mystyle, setMystyle] = useState({});
    const [val1,setVal1] = useState("");
    const [val2,setVal2] = useState("");
    const [val3,setVal3] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const submitthis = () => {
        setVal1(inputRef1.current.value);
        setVal2(inputRef2.current.value);
        setVal3(selectRef.current.value);
        setMystyle({backgroundColor: selectedValue});
    }
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    }
    const clearthis = () =>{
        window.location.reload()
    }
return(
<>
<div>
    <input type="text" className="tekst1" ref={inputRef1}></input>
    <input type="text" className="tekst2" ref={inputRef2}></input>
    <select ref={selectRef}> pick one
        <option value="CPU">CPU</option>
        <option value="GPU">GPU</option>
        <option value="RAM">RAM</option>
    </select>
    <div className="buttons_radio">
        <input type="radio" name="kolory" value={"red"} checked={selectedValue === 'red'} onChange={handleRadioChange}></input> red
        <input type="radio" name="kolory" value={"blue"} checked={selectedValue === 'blue'} onChange={handleRadioChange}></input> blue
        <input type="radio" name="kolory" value={"green"} checked={selectedValue === 'green'} onChange={handleRadioChange}></input> green
        <input type="radio" name="kolory" value={"pink"} checked={selectedValue === 'pink'} onChange={handleRadioChange}></input> pink
    </div>
    <input type="button" onClick={submitthis} value={"potwierdz"}></input>
    <input type="button" onClick={clearthis} value={"clear"}></input>
</div>
<hr></hr>
<div style={mystyle}>
    {val1} <br></br>
    {val2} <br></br>
    {val3}
</div>
</>
)
}
export default Exercise1;