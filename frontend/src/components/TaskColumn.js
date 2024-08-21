import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, onMoveTask, onDeleteTask }) => {
    return (
        <div className="task-column">
            <h2>{title}</h2>
            {tasks.map((task) => (
                <TaskCard key={task._id} task={task} onMoveTask={onMoveTask} onDeleteTask={onDeleteTask} />
            ))}
        </div>
    );
};

export default TaskColumn;
