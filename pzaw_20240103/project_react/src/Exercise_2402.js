import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Exercise_2402() {
  const [dane, setDane] = useState([])
  const [search, setSearch] = useState("")
  const [gr, setGr] = useState(5)
  const [types, setTypes] = useState([])
  const [picked, setPicked] = useState("")
  useEffect(() => {
    axios.get('http://localhost:8000/getdata')
    .then(response => response.data)
    .then(data => setDane(data))
  }, [])
  useEffect(() => {
    setTypes(Array.from(new Set(dane.map((em, idx) => {
      return em.filename.split('_')[0]
    }))))
  }, [dane])
  console.log(types)
  return (
    <>
      <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search...'></input>
      <input type='range' min={1} max={5} value={gr} onChange={(e) => setGr(e.target.value)}></input>
      {types.map((em, idx) => {
        return ( <div key={idx}><input
          type="checkbox"
          value={em}
          checked={picked.includes(em)}
      onChange={(e) => {
         const newValue = e.target.checked 
           ? picked + ',' + em 
           : picked.replace(em + ',', '').replace(',' + em, '').replace(em, '');
        setPicked(newValue);
      }}
    />
    { em }
  </div>)
})}
<div class={`row row-cols-${gr}`}>
  {dane.map((em, idx) => {
    if (em.filename.toLowerCase().includes(search.toLowerCase()) || em.text.toLowerCase().includes(search.toLowerCase()) || search === "") {
      if (picked === "" || picked.split(',').includes(em.filename.split('_')[0])) {
        const file = 'sci_images/' + em.filename + '.' + em.extension;
        return (
          <div key={idx} class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={file} class="card-img-top" alt={em.text} />
              <div class="card-body">
                <p class="card-text">{em.text}</p>
              </div>
            </div>
          </div>
        )
      }
    }
    else { return null }
  })}

</div>
   </>
  );
}

export default App;
