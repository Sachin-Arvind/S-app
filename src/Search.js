import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export default function Search() {
    
    const[state,setState]= useState({

        name:"",
        age:"",
        mobile:"",
        city:""



    })

    const [store,setStore]= useState([]);

    useEffect(()=>{


        axios.get("http://localhost:3000/user")
        .then((res)=>{
            setStore(res.data)
        })





    },[])


    const searchdata=(e)=>{

        axios.get("http://localhost:3000/user/"+e.target.value)
        .then((res)=>{

            setState(res.data)

        })




    }

  return (
  <>
  
  <select name='value' onChange={searchdata}>
<option>==== Select Id ====</option>
    {store.map((item,index)=>

<option value={item.id} key={index} >{index}</option>

)}


  </select>
  

  <Table striped bordered hover>
      <thead>
        <tr>
          
         
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Mobile</th>

        </tr>
      </thead>

      <tbody>
    
    
    <tr>
   


<td>{state.name}</td>
<td>{state.age}</td>
<td>{state.city}</td>
<td>{state.mobile}</td>


    </tr>
    
   
      </tbody>
    </Table>
  
  </>
  )
}
