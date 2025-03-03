import React from "react";
import { useRef, useState } from "react";
function Sci_checkbox({force_upd}) {
  const checkboxRef = useRef();
  const [checkbox_state, setCheckboxState] = useState(false);
  console.log('force w scicheckbox: ',force_upd);
  return (
    <>
      <input type="checkbox" ref={checkboxRef} value={checkbox_state}></input>
      <button onClick={(e) => setCheckboxState(checkboxRef.current.checked)} disabled={force_upd}>
        UPDATE
      </button>
      <p>
        Checkbox:
        {checkbox_state === false ? 'False': 'True'}
      </p>
    </>
  );
}
export default Sci_checkbox;
