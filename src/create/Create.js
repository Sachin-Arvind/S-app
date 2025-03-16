import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Create() {

    const [state , setState] = useState({

        name:"",
        age:"",
        mobile:"",
        city:""
})

const change=(e)=>{

    const {name ,value } = e.target;

    setState({...state,[name]:value})


}

const send=(e)=>{
    e.preventDefault();


    axios.post("http://localhost:3000/user",state)
    .then((res)=>{

        setState(res.data)

    })



}



  return (
   <>
   
   <Form onSubmit={send}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' onChange={change} />

        <Form.Label>Age</Form.Label>
        <Form.Control type="text" name='age' onChange={change} />

        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" name='mobile' onChange={change} />

        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' onChange={change} />

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   
   </>
  )
}

