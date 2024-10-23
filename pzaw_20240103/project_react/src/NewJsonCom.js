import Details_com from './Details_com';
import React, { useState } from 'react';
import Slider from 'react-slider';
import myfile from './posts.json';
import './NewJsonCom.css';
function NewJsonCom(){
const json_file = myfile;

const arr = json_file.map((post) => {
    let id = post.id % 40;
    if((id >= 0) && (9 >= id)){
        id = '0' + id;
    }

    return(
        
        <div key={post.id} class="thingie"> 
        <div id="title"><h1> {post.title} </h1></div>
        <img src={`./icons/Icon14_${id}.png`} alt={ `mojeid_${id}`}/>
        <div id="descr"> {post.body} </div> 
        </div>
    )
})
const [value, setValue] = useState(0);
const handleChange = (e) => {
    setValue(e.target.value);
  };
return( 
    <>
     <input type="range" min="0" max="100" onChange={handleChange} value={value}></input>
        {value}
    <div >
    <div class="allarr"> {arr.slice(0,value)} </div>
    </div>
    </>
)
}
export default NewJsonCom;