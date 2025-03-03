import Sci_checkbox from "./Sci_checkbox";
import Sci_text from "./Sci_text";
import Sci_range from "./Sci_range";
import Sci_radio from "./Sci_radio";
import Sci_color from "./Sci_color";
import {useRef, useState} from "react";
function All_inputs(){
const [force_upd, setForce] = useState(false);
return(<>
<input type="checkbox" defaultValue={force_upd} onChange={(e) => setForce(!force_upd)}></input> Force update
<br></br>
<Sci_checkbox force_upd={force_upd}/>
<Sci_text force_upd={force_upd}/>
<Sci_range force_upd={force_upd}/>
<br></br>
<Sci_radio force_upd={force_upd}/>
<Sci_color force_upd={force_upd}/>
</>)
}
export default All_inputs;