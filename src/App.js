import React from 'react';
import './App.css';
import  {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState, useEffect} from 'react'
import AddTask  from './Components/AddTask'
import Footer from './Components/Footer'
import About from './About'

//this the function type component
const App = () => {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState ([])
  
   //load data from the mock server to the UI
   useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])


   //fetch tasks
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/Tasks')
      const data = await res.json()

      return data
  }
  
  
   //fetch task
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/Tasks/${id}`)
      const data = await res.json()

      return data
  }
  
   
   //onDelete
   const onDelete = async (id) => {
    //  console.log('delete',id)
    await fetch(`http://localhost:5000/Tasks/${id}`,{method : 'DELETE'})
    setTasks(tasks.filter((task) => task.id !==id))
   }

   //toggle task
   const toggleReminder = async (id) => {
    // console.log('toggled',id)
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/Tasks/${id}`,{
    method:'PUT',
    headers : {
      'Content-type':'application/json'
      },
    body : JSON.stringify(updTask),
   })
   const data = await res.json()
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task ))
   }

   //add task
   const addTask = async (task) => {
     const res = await fetch('http://localhost:5000/Tasks',
     {method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
        body: JSON.stringify(task) })
      
   
   const data = await res.json()
   setTasks([...tasks,data])
    }
  return (
   <Router> 
   <div className='container'>
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    
    <Route path='/' exact render={(props) => (
      <>
       {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder}/>: <h3>No task found.</h3>}
    </>
    )}
    />
    <Route path='/about' component={About}/>
    <Footer/>
 
   </div>
   </Router>
  );
}
// This is the class type component
// class App extends React.Component {
//   render() {
//      return <div>LOVE ONE ANOTHER</div>
//   }
// }

export default App;
