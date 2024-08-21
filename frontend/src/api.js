import axios from 'axios';

const API_URL = 'https://kandban-app-1.onrender.com/';

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/user/register`, userData);
};

export const loginUser = async (userData) => {
    return await axios.post(`${API_URL}/user/login`, userData);
};

export const getTasks = async (token, pageNumber = 1) => {
    return await axios.get(`${API_URL}/tasks?pageNumber=${pageNumber}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const createTask = async (taskData, token) => {
    return await axios.post(`${API_URL}/tasks`, taskData, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const updateTaskStatus = async (taskId, status, token) => {
    return await axios.put(`${API_URL}/tasks/${taskId}`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const deleteTask = async (taskId, token) => {
    return await axios.delete(`${API_URL}/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
