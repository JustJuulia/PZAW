import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const [imie, setImie] = useState('')
    const [nazwisko, setNazwisko] = useState('')
    const [haslo, setHaslo] = useState('')
    const [check1, setCheck1] = useState('')
    const [check2, setCheck2] = useState('')
    const [gender, setGender] = useState(false)

    const senddata = () => {
        const json = JSON.parse('{"imie":"'+imie+'", "nazwisko":"'+nazwisko+'", "haslo":"'+haslo+'", "check1":"'+check1+'", "check2":"'+check2+'","gender":"'+gender+'"}')
        axios.post("http://localhost:8000/newjson", {
            json
        }
    )
    }

return(<>

{val}
<h1>adadsa</h1>
<input type="button" onClick={funct_click} value={"asdad"}/>
<div>
    <br></br>
<input type="text" class="form-control" placeholder="imie" value={imie} onChange={(e) => setImie(e.target.value)}></input> <br></br>
<input type="text"  class="form-control" placeholder="nazwisko" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)}></input> <br></br>
<input type="password"  class="form-control" placeholder="haslo" value={haslo} onChange={(e) => setHaslo(e.target.value)}></input> <br></br>
<input type="checkbox"  class="form-check-input" className="checkboxy" value={check1} checked={check1 === 'wybrany'} onChange={() => setCheck1('wybrany')}/> jakis check <br></br>
<input type="checkbox"  class="form-check-input" className="checkboxy" value={check2}  checked={check2 === 'wybrany'} onChange={() => setCheck2('wybrany')}/> jakis drygi check <br></br>
<input type="radio"  class="form-check-input" name="radiobuttony" value={gender}  checked={gender === 'mail'} onChange={() => setGender('mail')}/> mail <br></br>
<input type="radio" class="form-check-input" name="radiobuttony" value={gender}  checked={gender === 'gmail'} onChange={() => setGender('gmail')}/> gmail <br></br>
<input type="button" class="btn btn-primary" onClick={senddata} value="wyslij dane"></input>
</div>
</>)
}
export default AxiosExample;