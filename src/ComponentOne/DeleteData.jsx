import axios from 'axios'
import React from 'react'

async function DeleteData({id}) {

 let resp=await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}/`);
  if(resp.status===200){
    alert('delete successfully');
  }
}

export default DeleteData
