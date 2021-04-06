const express = require('express')
const cors = require('cors')
const {v4 : uuid} = require('uuid'); 
const app = express()
app.use(cors({}))
// Body Parser
app.use(express.json())

let todos = ([
    {
        id: uuid(),
        task: 'task 1',
        completed : false,
    },
    {
        id: uuid(),
        task: 'task 2',
        completed : false,
    },
    {
        id: uuid(),
        task: 'task 3',
        completed : false,
    },
])

app.get('/',(request,response)=>{
    response.json(todos)
})

app.post('/', (req, res) => {
  const task = req.body.task
    todos.push({ id: uuid(),task, completed : false})
})
        //change                                                                                                                                
app.post('/delete',(req,res) =>{

    const id =req.body.itemId
    console.log(id)
    todos = todos.filter(todo => id !== todo.id)
    res.json(todos)
})

app.post('/toggle',(req,res)=>{
    const id =req.body.id
   todos = todos.map((item)=>{
        if(item.id === id){
            return {...item , completed : !item.completed}
        }else return item
    })
    res.send('sucess..')
    });

    
app.listen(8080,(err)=>{
    if(err){ 
        console.log(err)
    }
    console.log("running on port : 8080")
})