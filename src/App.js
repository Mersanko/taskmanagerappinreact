import React from 'react';
import './App.css';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState } from 'react'
import AddTask  from './Components/AddTask'

//this the function type component
const App = () => {
   const [tasks,setTasks] = useState ([
                {id:1,
                text:'Programming1',
                reminder:true,
                day:'Feb 5, 2021'},
                {id:2,
                text:'Programming2',
                reminder:true,
                day:'Feb 5, 2021'},
                {id:3,
                text:'Programming3',
                reminder:true,
                day:'Feb 5, 2021'}
                ])
  
   //onDelete
   const onDelete = (id) => {
    //  console.log('delete',id)
    setTasks(tasks.filter((task) => task.id !==id))
   }

   //toggle task
   const toggleReminder = (id) => {
    // console.log('toggled',id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
   }

   //add task
   const addTask = (task) => {
     const id = Math.floor(Math.random() * 10000) + 1
     const newTask = {id, ...task}
     setTasks([...tasks,newTask])
     
   }
  return (
   <div className='container'>
     <Header/>
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder}/>: <h3>No task found.</h3>}


   </div>
  );
}
// This is the class type component
// class App extends React.Component {
//   render() {
//      return <div>LOVE ONE ANOTHER</div>
//   }
// }

export default App;
