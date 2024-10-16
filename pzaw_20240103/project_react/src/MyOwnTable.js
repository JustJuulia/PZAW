import { useRef } from "react";
import React from "react";
import { useState } from "react";
import MyOwnRow from "./MyOwnRow";
function MyOwnTable() {
  const data = ["tekst1", "tekst2", "tekst3", "tekst4", "tekst5"];
  const data2 = [
      {id:"8139916b-f25e-4698-9ae3-1fff28bf20c3",key1: "data2_t1", key2: "data2_t12"},
      {id:"173c828d-b9fd-4cf2-8440-97fd1a7d9210",key1: "data2_t22", key2: "data2_t123"},
  ];
  const[flag, setFlag] = useState(false)
  return (
    <>
    <div>
      {
        flag ? <div>tak </div> : null
      }
      </div>
      <input type="button" onClick={() => setFlag(!flag)} value={"zmien tearaz"}></input>
      <table>
        <thead>
          <tr>
            <th>lp</th>
            <th>data1</th>
            <th>data2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, ind, arr) => {
            ind++;
            return (
              <tr>
                <td>{ind}</td>
                <td>{el}</td>
                <td> innytekst</td>
              </tr>
            );
          })}
          {/* {data2.map((el, ind, arr) => {
            ind++;
            ind = ind + data.length;
            return (
              <tr key={el.id}>
                <td>{ind}</td>
                <td>{el.key1}</td> <td>{el.key2}</td>
              </tr>
            );
          })} */
          data2.map((el,id ,arr) => <MyOwnRow id = {id} el = {el.key1} key2 = {el.key2} onButtonClick = {() => setFlag(!flag)}/>)
          }
        </tbody>
      </table>
    </>
  );
}
export default MyOwnTable;
