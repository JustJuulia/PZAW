import { useEffect, useRef, useState } from "react";
import './MyStatic.css';
function NewComponent(){
    /*var value = 0;
    const inputRef = useRef()
    const handleButoon = () => { 
        console.log(value++)
        const json = JSON.parse('{"tekst":"'+inputRef.current.value+'"}')
        console.log(json.tekst)
    }
    const handleInputText = (event) => {
        //console.log(event.target.value);
        //to powoduje ze po ksazdej zmianie w tekscie wyswietla tekst
    }*/
   
   const Button1 = () => {
    console.log(name)
    setName("Bajlando")
   }
   const Button2 = () => {
    console.log(num)
    setNum(num+1)
   }
    const [name,setName] = useState("Julcia");
    const [num,setNum] = useState(2137);
    useEffect (() => {}, [name], [num],
    console.log('useeffect worked')
    )
    const mystyle = {color:'red', backgroundColor:'blue', 'font-size':'100px'} //tablica assocjacyjna czyli klucz+ watość, jezeli klucz ma znak specjalny to w cudzysłowiu
return(
<>
<div class="mojdiv">
    <h1 className="byleco" style={mystyle}>sda</h1>
    <p>{name} {num}</p>
    <input type="button" value={"click it bruv"} onClick={Button1}></input>
    <input type="button" value={"click it bruv"} onClick={Button2}></input>
</div>
</>
)
}
export default NewComponent;