import axios from 'axios';

// get all todos
const getAllTodo = async () => {
    try {
        return (await axios.get('http://localhost:8080'));
    } catch (err) {
        return {
            success: false,
            error: err,
        }
    }
};

const getOneTodo = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/${id}`));
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};

// adds a new todo
const addNewTodo = async (description) => {
    try {
        return (await axios.post('http://localhost:8080/', {
                description,
                completed: false,
            }));
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};

// remove a todo
const removeTodo = async (id) => {
    try {
        return (await axios.delete(`http://localhost:8080/${id}`));
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};

// change a todo
// always pass an object, neves pass properties to a function/method
// always deconstruct the object for easy use
const changeTodo = async ({ id = '', description = '', completed = false } = {}) => {
    try {
        return (await axios.put(`http://localhost:8080/${id}`, {
                description,
                completed,
            }));
    } catch (err) {
        return {
            success: false,
            error: err,
        };
    }
};

// Avoid export default as much as possible
export const BackendAPI = {
    getAllTodo,
    getOneTodo,
    addNewTodo,
    removeTodo,
    changeTodo,
};
