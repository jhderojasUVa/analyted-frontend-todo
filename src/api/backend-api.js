import axios from 'axios';

// base data for API
const isTrue = 1;
const isFalse = 0;

// base configure
const axiosInstance = axios.create();

// get all todos
const getAllTodo = async () => {
    try {
        return (await axiosInstance({
            url: 'http://localhost:8080',
            method: 'get',
        }));
    } catch (err) {
        return {
            sucess: false,
            error: err,
        }
    }
};

const getOneTodo = async (id) => {
    try {
        return (await axiosInstance({
            url: `http://localhost:8080/${id}`,
            method: 'get',
        }));
    } catch (err) {
        return {
            sucess: false,
            error: err,
        };
    }
};

// adds a new todo
const addNewTodo = async (description) => {
    try {
        return (await axiosInstance({
            url: 'http://localhost:8080/',
            method: 'post',
            data: {
                description,
                completed: isFalse,
            }
        }));
    } catch (err) {
        return {
            sucess: false,
            error: err,
        };
    }
};

// remove a todo
const removeTodo = async (id) => {
    try {
        return (await axiosInstance({
            url: `http://localhost:8080/${id}`,
            method: 'delete',
        }));
    } catch (err) {
        return {
            sucess: false,
            error: err,
        };
    }
};

// change a todo
// always pass an object, neves pass properties to a function/method
// always deconstruct the object for easy use
const changeTodo = async ({ id = '', description = '', completed = isFalse } = {}) => {
    try {
        return (await axiosInstance({
            url: `http://localhost:8080/${id}`,
            method: 'put',
            data: {
                id,
                description,
                completed,
            }
        }))
    } catch (err) {
        return {
            sucess: false,
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
