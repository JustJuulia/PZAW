import React from "react";
import { useState, useRef } from "react";
function UsersTable(){
const [users, setUsers] = useState([]);
const nameRef = useRef();
const surnameRef = useRef();
const ageRef = useRef();
console.log(users);
return(<>
<div className="d-flex">
<span class="input-group-text" id="basic-addon1">name: </span>
<input class="form-control" type="text" ref={nameRef}></input>
</div>
<div className="d-flex">
<span class="input-group-text" id="basic-addon1">surname: </span>
<input class="form-control" type="text" ref={surnameRef}></input>
</div>
<div className="d-flex">
    <span class="input-group-text" id="basic-addon1">age: </span>
    <input class="form-control" type="number" ref={ageRef}></input>
</div>
<div className="d-flex">
<button className="btn btn-primary" onClick={() => setUsers([...users, {Name: nameRef.current.value, Surname: surnameRef.current.value, Age: ageRef.current.value}])}>Add</button>
<button className="btn btn-primary" onClick={() => setUsers([{}])}>Clear</button>
    </div>
    <table class="table">
      <thead>
        <tr>
            <th scope="col">lp</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) =>(
            <tr key={idx}>
                <td>{user.Name}</td>
                <td>{user.Surname}</td>
                <td>{user.Age}</td>
            </tr>
        ))}
      </tbody>
      </table>
</>)
}
export default UsersTable;