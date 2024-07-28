import React, { useState } from 'react'
import AddorUpdateData from './AddorUpdateData';
import GetData from './GetData';

function Main() {
    let[data,setData]=useState([]);
    let[user,setUser]=useState({id:'',userId:'',title:''});
  return (
    <>
      <AddorUpdateData user={user} setUser={setUser}/>
      <GetData data={data} setData={setData} setUser={setUser}/>
    </>
  )
}

export default Main
