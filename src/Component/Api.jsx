import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Api() {

  let [data,setData]=useState([]);
  let [user,setUser]=useState({id:'',userId:'',title:''});

  useEffect(()=>{
   async function fetch(){
      let res=await axios.get("https://jsonplaceholder.typicode.com/todos/");
      setData(res.data);
    }
    fetch();
  },[]) 

  function change(e){
    setUser({...user,[e.target.name]:e.target.value})
  }

  async  function addData(e){
    e.preventDefault();
    if(user.id===' '){
      let res = await axios.post("https://jsonplaceholder.typicode.com/todos/", user);
      if (res.status === 201) {
        alert("added");
      }
    }
    else{
      let res = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${user.id}/`,
        user
      );
      if (res.status === 200) {
        alert("added");
        setUser({ id: "", userId: "", title: "" });
      }
    }
  
  }

  async function deleteData(id){
 let res = await axios.delete(
   `https://jsonplaceholder.typicode.com/todos/${id}/`
 );
 if(res.status===200){
  alert('deleted')
 }
  }

  function ascorder(){
    let data1=[...data];
    data1.sort((a,b)=>a.title>b.title? 1:-1)
    setData(data1)
  }

  return (
    <>
      <form onSubmit={addData}>
      userId  <input
          type="text"
          name="userId"
          value={user.userId}
          onChange={change}
        />
       Title <input
          type="text"
          name="title"
          value={user.title}
          onChange={change}
        />
        <button className='btn btn-primary'>
          {user.id===''?'add':'update'}
        </button>
      </form>

      <table className="table table-border">
        <thead>
          <tr>
            <th>ID</th>
            <th>userId</th>
            <th onClick={ascorder}>title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, id) => {
            return (
              <tr key={id}>
                <td>{val.id}</td>
                <td>{val.userId}</td>
                <td>{val.title}</td>
                <button onClick={() => setUser(val)} className="btn btn-info">
                  update
                </button>
                <button onClick={() => deleteData(id)} className="btn btn-info">
                  delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Api
