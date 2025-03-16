import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {

    const Params = useParams();
    const _useNavigate = useNavigate();


    const [state,setState]= useState({

        name:"",
        age:"",
        mobile:"",
        city:""
})

useEffect(()=>{


    axios.get("http://localhost:3000/user/"+Params.id)
    .then((res)=>{

        setState(res.data)

    })


},[])

const change=(e)=>{

    const{name,value}= e.target;

    setState({...state,[name]:value})



}

const send=(e)=>
   {

    e.preventDefault();

    axios.put("http://localhost:3000/user/"+Params.id,state)
    .then((res)=>{

        _useNavigate("/read")
    })

    


}

  return (
    <>

    
   <Form onSubmit={send}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' value={state.name} onChange={change} />

        <Form.Label>Age</Form.Label>
        <Form.Control type="text" name='age' value={state.age} onChange={change} />

        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" name='mobile' value={state.mobile} onChange={change} />

        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' value={state.city} onChange={change} />

      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    
    </>
  )
}
