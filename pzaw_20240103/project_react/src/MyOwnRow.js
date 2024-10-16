import { useRef, useState } from "react";
import React from "react";
function MyOwnRow(props) {
  return (
    <>
      <tr>
          <td>{props.id}</td>
          <td>{props.key2}</td>
          <td><input type="button" onClick={props.onButtonClick} value={props.el}></input></td>
          
        </tr>
    </>
  );
}
export default MyOwnRow;
