import Sci_checkbox from "./Sci_checkbox";
import Sci_text from "./Sci_text";
import Sci_range from "./Sci_range";
import {useRef, useState} from "react";
function All_inputs(){
const [force_upd, setForce] = useState(false);
console.log('force w main: ',force_upd)
return(<>
<input type="checkbox" defaultValue={force_upd} onChange={(e) => setForce(!force_upd)}></input> Force update
<br></br>
<Sci_checkbox force_upd={force_upd}/>
<Sci_text force_upd={force_upd}/>
<Sci_range force_upd={force_upd}/>
</>)
}
export default All_inputs;