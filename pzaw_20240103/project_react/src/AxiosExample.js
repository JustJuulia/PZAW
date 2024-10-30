import axios from "axios";
import { useState } from "react";
function AxiosExample(){
    const [val, setVal] = useState();
    const funct_click = () => {
        axios.get('https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/refs/heads/master/tests/relaxed.json')
        .then((response) => {
            setVal(Object.keys(response.data));
        })
        .catch((er) => {
            console.log('error', er)
        })
        .finally(() => {
            console.log('finally')
        })
    }
return(<>
// TODO:add checkboxes and all
{val}
<h1>adadsa</h1>
<input type="button" onClick={funct_click} value={"asdad"}/>
</>)
}
export default AxiosExample;