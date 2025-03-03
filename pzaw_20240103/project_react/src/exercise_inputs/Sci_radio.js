import {React, useState, useRef} from "react";
function Sci_radio({force_upd}){
    const [radio_picked, setRadio] = useState('');
    const firstRadioRef = useRef();
    const secondRadioRef = useRef();
    const thirdRadioRef = useRef();
    return(<>
    <input type="radio" name="radio" value={'firstradio'} ref={firstRadioRef}></input>
    <input type="radio" name="radio" value={'secondradio'} ref={secondRadioRef}></input>
    <input type="radio" name="radio" value={'thirdradio'} ref={thirdRadioRef}></input>
    <button onClick={() => {
        if (firstRadioRef.current.checked) setRadio('firstradio');
        else if (secondRadioRef.current.checked) setRadio('secondradio');
        else if (thirdRadioRef.current.checked) setRadio('thirdradio');
    }} disabled={force_upd}>UPDATE</button>
    <p>Radio: {radio_picked}</p>
    </>)
}
export default Sci_radio;