import { React, useState, useEffect } from "react";
import axios from "axios";
function Exam_prep() {
  const [data, setData] = useState([]);
  const [grupy, setGrupy] = useState([]);
  const [wyfiltrowane, setWyfiltrowane] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/getdataprep").then((res) => {
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    setGrupy(Object.keys(data));
  }, [data]);
  useEffect(() => {
    setWyfiltrowane(grupy.filter(kl => kl.includes('a')));
  }, [wyfiltrowane]);
  return (<> {
    wyfiltrowane.map((klucz) => {
        if(klucz != null){
        const grupazdjec = data[klucz];
        return grupazdjec.map((g) =>
        {
            return(<>{klucz} : {g} </>)
        })
    }
    })
  }
  </>);
}
export default Exam_prep;
