import React from "react";
function Table_Exercise() {
  const data = [
    {
      name: "John Doe",
      age: 25,
      sex: "Male",
    },
    {
      name: "Skyler White",
      age: 12,
      sex: "Female",
    },
    {
      name: "Bartus Pdf",
      age: 18,
      sex: "Male",
    },
    {
      name: "Francisław Chrobry",
      age: 18,
      sex: "Male",
    },
    {
      name: "Julia Superancka",
      age: 17,
      sex: "Female",
    },
    {
      name: "Mieszko Piętnasty",
      age: 966,
      sex: "Male",
    },
  ];
  return (
    <>
    <table class="table">
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>    
                <td>Sex</td>
            </tr>
        </thead>
        <tbody>
      {data.map((p, id) => {
        return (
          <>
            <tr key={id}>
                <td>{id +1}</td>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.sex}</td>
            </tr>
          </>
        );
      })}
      </tbody>
      </table>
    </>
  );
}

export default Table_Exercise;
