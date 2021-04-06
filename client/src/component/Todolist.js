import React, { useState } from "react";
import '../App.css'

const styles ={
  completed :{
    color:'red',
    textDecoration :'line-through'
  },
  Notcompleted :{
    color:'green',
  },
  btnstyles :{
    height:'25px',
    width:'80px',
    marginBottom:'10px',
  }
}

const Todolist = () => {
  const [input, setInput] = useState("");
  const [addlist, setAddlist] = useState([]);
  const [api,setApi]=useState([])


 
  
  // const[tog,setTog]=useState()

  const Add = () => {
    setAddlist([
      ...addlist,
      {
        id: Date.now(),
        task: input,
        completed: false,
      },
    ]);
  };

const del = (e,id) =>{
    // console.log(id)  
    setAddlist(addlist.filter((item,i)=> item.id !== id
          
    ))
}

const toggle = (e,id) =>{
      setAddlist(addlist.map(item=>{
        if(item.id === id){
          return{...item , completed : !item.completed }
        }
        else return item
      }))
}





  return (  
    <div >
      <center>
        <h3>Todo List</h3>
        <button >data</button>
            {api && api.length > 0 ?
            api.map((i)=>{
                return(
                    <h3>
                {i.taks}
                {i.completed}
                </h3>)
            }):null}
        <input
          type="text"
          name="task"
          placeholder="enter item ...."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button
          type="button"
          style={{ height: "30px", width: "60px", marginLeft: "5px" }}
          onClick={Add}
          
         
          
        >
          Add
        </button>
      </center>
      {/* {addlist} */}
     
            <ol>
              {" "}
        {
          addlist && addlist.length>0?
        addlist.map((item) => {
          return (<>
                  {item.taks}
                  {item.completed}
                <div style={{display:'flex' , fontFamily:'fantasy'}} >
          <li style={item.completed ? styles.completed : styles.Notcompleted}>
                {item.id} - {item.task} &emsp;
              </li>
              {/* className={item.completed ? 'completed' : 'incompleted'}   */}
                <button  style={styles.btnstyles}  onClick={e=>toggle(e,item.id)}>Toggle</button>&emsp;
                <button style={styles.btnstyles} onClick={e=>del(e,item.id)}>Delete</button><br />
              </div>
               </> );
              }):null}
            </ol>
      
    
    
    </div>
  );
};

export default Todolist;
