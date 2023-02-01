import React,{useEffect, useState} from 'react'
import './App.css'

export default function App() {
  const [backendData, setBackendData]=useState([{}]);

  useEffect(() => {
    fetch('/api').then(
      response =>response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);

  const handleDelete = (id) => {
    setBackendData(backendData.filter((users) => users.id !== id));
  };

  return (
    <div style={{marginTop: "150px"}}>

    <table className='styled-table'>
    <thead>
      <tr>
        <th style={{textAlign: "center"}}>Name</th>
        <th style={{textAlign: "center"}}>Email</th>
        <th style={{textAlign: "center"}}>Phone</th>
        <th style={{textAlign: "center"}}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {backendData.map((user) => (
        <tr key={user.id}>
          <th scope='row'>{user.id+1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
);
};