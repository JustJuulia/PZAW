import axios from 'axios'
import React from 'react';
import { useEffect, useState } from 'react';
export default function Exercise_tablejson() {
    const[dane, setDane] =  useState([]);
    const[search, setSearch] = useState("");
    const[salary, setSalary] = useState(0);
    const[salaryType, setSalaryType] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/task_json')
        .then(response => response.data.employees)
        .then(data => setDane(data))
    }, [])
    return(<>
    <div>
        <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <div className='flex'><input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} placeholder="salary" /> <select onChange={(e) => setSalaryType(e.target.value)}> <option value={'mniej'}> mniej </option> <option value={'wiecej'}>więcej</option></select></div>
    </div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>department</th>
                <th>position</th>
                <th>salary</th>
                <th>hire date</th>
            </tr>
        </thead>
        <tbody>
                {dane.map((em, idx) => {
                    if(em.first_name.toLowerCase().includes(search.toLowerCase()) || em.last_name.toLowerCase().includes(search.toLowerCase())){
                        if (
                            salary === 0 || 
                            (salaryType === 'mniej' && Number(em.salary) <= salary) ||
                            (salaryType === 'wiecej' && Number(em.salary) >= salary)
                        ){
                            return(
                                <tr key={idx}>
                                    <td>{em.id}</td>
                                    <td>{em.first_name}</td>
                                    <td>{em.last_name}</td>
                                    <td>{em.department}</td>
                                    <td>{em.position}</td>
                                    <td>{em.salary}</td>
                                    <td>{em.hire_date}</td>
                                </tr>
                            )
                        }
                    } else {
                        return null;
                    }
                })}
                </tbody>
    </table>
    </>)
}