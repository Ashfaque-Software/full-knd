import React from 'react';

const TaskCard = ({ task, onMoveTask, onDeleteTask }) => {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onMoveTask(task, 'to-do')}>To-Do</button>
            <button onClick={() => onMoveTask(task, 'in progress')}>In Progress</button>
            <button onClick={() => onMoveTask(task, 'done')}>Done</button>
            <button onClick={() => onDeleteTask(task._id)}>Delete</button>
        </div>
    );
};

export default TaskCard;
