import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import { data,Link } from 'react-router-dom';
import "./read.css";
export default function Read() {
    const [state,setState]= useState([]);
    const [page,setPage] = useState([1]);
    const [total,setTotal]=useState([0]);


    const getTotal=(async()=>{
    try{

        let response = await axios.get("http://localhost:3000/user")
        setTotal(response.data.length/5);
        console.log(response.data.length);
        


      }

    catch(error){
        console.log(error);
        
    }
})

    getTotal();

    const getData=(async()=>{

        try{

            let response2 = await axios.get("http://localhost:3000/user?_page="+page+"&_limit=5")
            setState(response2.data)

        }
        catch(error){
            console.log(error);
            
        }

    })

    
    useEffect(()=>{

        getData();


    },[page])


    const deletere=(id)=>{
       

        axios.delete("http://localhost:3000/user/"+id)
        .then((res)=>{

            console.log(res);
            

        })

    }

    const handlePageClick=()=>{

        setPage(data.selected+1)
    
      }

  return (
   
   <>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>City</th>
          <th>About</th>
        </tr>
      </thead>

{state.map((item,index)=>

      <tbody>
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.mobile}</td>
          <td>{item.city}</td>
          <td><Link className='edit' to={`/edit/${item.id}`} >Edit</Link>&nbsp;
          <Link className='delete' onClick={()=>{deletere(item.id)}}>Delete</Link>
          </td>
         
        </tr>
      </tbody>
    )}

    </Table>


    <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={total} 
        marginPagesDisplayed={2} // Number of pages to show at the beginning and end
        pageRangeDisplayed={3} // Number of pages to show around the current page
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={"active"}
        />
    
    </>
  )
}
