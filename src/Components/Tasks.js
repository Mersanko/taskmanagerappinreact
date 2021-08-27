import React from 'react'
import Task from './Task'
// const tasks = [{id:1,
//                 text:'Programming1',
//                 reminder:true},
//                 {id:2,
//                 text:'Programming2',
//                 reminder:true},
//                 {id:3,
//                 text:'Programming3',
//                 reminder:true}]
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
        {tasks.map((task,index) => (
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}
 
export default Tasks

