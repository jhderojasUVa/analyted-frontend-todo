import axios from 'axios';

// base data for API
const isTrue = 1;
const isFalse = 0;

// base configure
const axiosInstance = axios.create();

axiosInstance.defaults = {
    ...axios.defaults,
    baseURL: 'http://localhost:8080',
    timeout: 5000,
}

// get all todos
const getAllTodo = async () => {
    console.log('CACACA')
    try {
        return (await axiosInstance.get({
            url: '/',
            method: 'GET'
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
        return (await axiosInstance.get({
            url: `/${id}`,
            method: 'GET'
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
        return (await axiosInstance.post({
            url: '/',
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
        return (await axiosInstance.delete({
            url: '/',
            data: {
                id,
            }
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
        return (await axiosInstance.put({
            url: `/${id}`,
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
