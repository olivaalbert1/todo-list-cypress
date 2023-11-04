import React, { useState } from "react";
import FormTask from "./FormTask";
import '../style/TaskList.css'
import Task from "./Task";

function TaskList() {

    const [tasks, setTasks] = useState([])

    const addTask = task => {
        if(task.text.trim()) {
            task.text = task.text.trim()

            const updatedTasks = [task, ...tasks]
            setTasks(updatedTasks)
        }
    }

    const delTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
    }

    const completTask = id => {
        const updatedTasks = tasks.map(task=>{
            if (task.id === id) {
                task.completed = !task.completed           
            }
            return task
        })
        setTasks(updatedTasks);
    }

    return (
        <>
            <FormTask onSubmit={addTask}/>
            <div className='task-list-container'>
                {
                    tasks.map((task) => 
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            completTask={completTask}
                            deleteTask={delTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;