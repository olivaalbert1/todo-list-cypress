import React from "react";
import '../style/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, completed, completTask, deleteTask }) {
    return (
        <div className={ completed ? 'container-task completed' : 'container-task'}>
            <div className="task-text" onClick={() => completTask(id)}>
                {text}
            </div>
            <div className="icon-task-container" onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className="icon-task" />
            </div>
        </div>
    );
}

export default Task;