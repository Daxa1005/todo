import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Todos  =()=>{

    const [api,setApi]=useState([])
    const[input,setInput]=useState('')

    const myApi=() =>{
        fetch('http://localhost:8080/')
        .then(response=>response.json())
        .then(json=>setApi(json))
    }
    
    useEffect(()=>{
        fetch('http://localhost:8080/')
        .then(response=>response.json())
        .then(json=>setApi(json))
    },[api])

    const add =() =>{
       axios.post('http://localhost:8080', {
           task : input
       }).then(res => {
        // myApi()
        console.log(res)
       } )
    }

    const del = (e,itemId) =>{
        e.preventDefault()
        axios.post('http://localhost:8080/delete' , {itemId
    })
    .then(res =>{
        console.log(res)
        // myApi();
    })
    .catch(err => console.log(err))
    }

    const toggle = (e,id)=>{
        axios.post('http://localhost:8080/toggle' ,{id
    })
    .then(res=>{console.log(res)})
    .catch(err => console.log(err))
    }

    return(
        <div>
            <center>
                <h1>ToDo list </h1>
                    <div className='main-content'>
                
                <input type='text' name='task' placeholder='enter task' style={{height:'30px',width:'250px'}}  value={input} onChange={(e)=>{
                    setInput(e.target.value)
                }} ></input>
                <button  type='button' onClick={e => add()} >Add</button>
                
                {/* <button onClick={myApi}>data</button> */}
                </div>
                <table>
                <tr>
                   
                        <th>TASK</th>
                        <th>DELETE</th>
                        <th>COMPLETED TASK</th>
                    
                </tr>

                {api && api.length > 0 ?
                api.map((i)=>{
                    return(
                <tr>
                    {/* <td>{i.id}</td><br/> */}
                    <td>{i.task}</td>
                   <td> <button onClick={e=>del(e,i.id)}>Delete</button></td>
                    <td><button  className={i.completed ? 'completed' : 'incompleted'} onClick={e=>toggle(e,i.id)}>toggle</button></td>
                    {i.completed }
                    </tr> )
                }):null}
                
                </table>
            </center>
            
        </div>
    )
}
export default Todos