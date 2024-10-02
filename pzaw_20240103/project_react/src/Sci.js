import { useRef } from "react";

function Sci(){
    var value = 0;
    const inputRef = useRef()
    const handleButoon = () => { 
        console.log(value++)
        const json = JSON.parse('{"tekst":"'+inputRef.current.value+'"}')
        console.log(json.tekst)
    }
    const handleInputText = (event) => {
        //console.log(event.target.value);
        //to powoduje ze po ksazdej zmianie w tekscie wyswietla tekst
    }
return(
<>
<div class="mojdiv">
    <input type="button" value={"clickers"} onClick={handleButoon}></input>
    <input ref={inputRef} type="text" id="tekscior" onChange={handleInputText}></input>
</div>
</>
)
}
export default Sci;