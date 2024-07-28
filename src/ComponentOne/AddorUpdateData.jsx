import axios from 'axios'
import React from 'react'

function AddorUpdateData({user,setUser}) {

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(user.id===''){
            let resp = await axios.post(
              "https://jsonplaceholder.typicode.com/todos/",user
            );
            if(resp.status===201){
                alert('added successfully')
            }
        }else{
                let resp = await axios.put(
                  `https://jsonplaceholder.typicode.com/todos/${user.id}/`,user
                );
                if(resp.status===200){
                    alert('update successfully');
                }
        }
        setUser({userId:'',title:''})

    }

    let change=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='hidden' name='id' value={user.id} onChange={change}/>
      userID  <input type='number' name='userId' value={user.userId} onChange={change}/>
      Title  <input type='text' name='title' value={user.title} onChange={change}/>
       <button>{user.id===''?'add':'update'}</button>
    </form>
  )
}

export default AddorUpdateData
