import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTaskStatus, deleteTask } from '../api';
import TaskColumn from './TaskColumn';

const KanbanBoard = ({ token }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await getTasks(token);
            setTasks(data.tasks);
        };
        fetchTasks();
    }, [token]);

    const handleCreateTask = async () => {
        const { data } = await createTask(newTask, token);
        setTasks([...tasks, data]);
    };

    const handleMoveTask = async (task, status) => {
        const { data } = await updateTaskStatus(task._id, status, token);
        setTasks(tasks.map(t => t._id === task._id ? data : t));
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId, token);
        setTasks(tasks.filter(task => task._id !== taskId));
    };

    return (
        <div className="kanban-board">
            <div>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Task Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <button onClick={handleCreateTask}>Create Task</button>
            </div>

            <div className="kanban-columns">
                <TaskColumn title="To-Do" tasks={tasks.filter(task => task.status === 'to-do')} onMoveTask={handleMoveTask} onDeleteTask={handleDeleteTask} />
                <TaskColumn title="In Progress" tasks={tasks.filter(task => task.status === 'in progress')} onMoveTask={handleMoveTask} onDeleteTask={handleDeleteTask} />
                <TaskColumn title="Done" tasks={tasks.filter(task => task.status === 'done')} onMoveTask={handleMoveTask} onDeleteTask={handleDeleteTask} />
            </div>
        </div>
    );
};

export default KanbanBoard;
