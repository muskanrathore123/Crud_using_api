    import axios from 'axios'
    import React, { useEffect } from 'react'
    import DeleteData from './DeleteData';

    function GetData({data,setData,setUser}) {

        useEffect(()=>{
            async function show(){
                let resp = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/"
                );
                setData(resp.data)
            }
            show();
        },[])
        // console.log(data);
    return (
        <div>
        <table className="table table-border">
            <thead>
            <tr>
                <th>userID</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
            {data.map((val) => {
                return (
                <tr>
                    <td>{val.userId}</td>
                    <td>{val.title}</td>
                    <button onClick={()=>setUser(val)}>Edit</button>
                    <button onClick={()=>DeleteData(val.id)}>Delete</button>
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
    }

    export default GetData
