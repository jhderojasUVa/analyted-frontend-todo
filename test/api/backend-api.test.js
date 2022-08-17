import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';

import { BackendAPI } from '../../src/api';

const GOOD_RESPONSE = {
    success: true,
    data: {
        rows: [
            {
                id: '10768C80-1C66-11ED-99E9-75BC2CC6E170',
                description: 'Something to do',
                completed: false,
                date: 1660720449281
            },
            {
                id: '0572EE40-1D2F-11ED-9FCA-FD0EB0A775FA',
                description: 'Add something to this',
                completed: false,
                date: 1660664788220
            },
            {
                id: '14E690D0-1C66-11ED-99E9-75BC2CC6E170',
                description: 'Another thing to do',
                completed: true,
                date: 1660664744813
            }
        ],
        rowCount: 3,
    },
};

const GOOD_UNIQUE_RESPONSE = {
    success: true,
    data: {
        rows: [
            {
                id: '10768C80-1C66-11ED-99E9-75BC2CC6E170',
                description: 'Something to do',
                completed: false,
                date: 1660720449281
            },
        ],
        rowCount: 1,
    },
};

describe('Backend API', () => {
    it('api is not empty', () => {
        expect(BackendAPI).not.toBe(undefined);
    });
    it('getAllTodos ok', async () => {
        axios.get = vi.fn(() => {
            return new Promise((resolve) => {
                resolve(GOOD_RESPONSE);
            });
        });

        const response = await BackendAPI.getAllTodo();

        expect(response).toEqual(GOOD_RESPONSE);
    });
    it('getAllTodos ko', async () => {
        axios.get = vi.fn(() => {
            return Promise.reject('Error!')
        });

        const response = await BackendAPI.getAllTodo();

        expect(response).toEqual({
            success: false,
            error: 'Error!',
        });
    })
    it('getOneTodo ok and ko', async () => {
        axios.get = vi.fn((url) => {
            if (url.includes('10768C80-1C66-11ED-99E9-75BC2CC6E170')) {
                return Promise.resolve(GOOD_UNIQUE_RESPONSE);
            } else {
                return Promise.reject('Error!');
            }
        });

        //ok
        const response = await BackendAPI.getOneTodo('10768C80-1C66-11ED-99E9-75BC2CC6E170');

        expect(response).toEqual(GOOD_UNIQUE_RESPONSE);

        // ok
        const badResponse = await BackendAPI.getOneTodo('bad-id');

        expect(badResponse).toEqual({
            success: false,
            error: 'Error!'
        });
    });
    it('addNewTodo ok', async () => {
        const description = 'my description';

        axios.post = vi.fn(() => {
            return Promise.resolve(true);
        });

        // ok
        const response = await BackendAPI.addNewTodo(description);

        expect(response).toBe(true);
    });
    it('addNewTodo ko', async () => {
        axios.post = vi.fn(() => {
            return Promise.reject('Error!');
        });

        // ko
        const badResponse = await BackendAPI.addNewTodo('forcing bad response');

        expect(badResponse).toEqual({
            success: false,
            error: 'Error!'
        });
    });
    it('removeTodo ok and ko', async () => {
        const ID = '10768C80-1C66-11ED-99E9-75BC2CC6E170';

        axios.delete = vi.fn((url) => {
            if (url.includes(ID)) {
                return Promise.resolve(true)
            } else {
                return Promise.reject('Error!');
            }
        });

        // ok
        const response = await BackendAPI.removeTodo(ID);

        expect(response).toBe(true);

        // ko
        const badResponse = await BackendAPI.removeTodo('bad id');

        expect(badResponse).toEqual({
            success: false,
            error: 'Error!'
        });
    });
    it('changeTodo ok and ko', async () => {
        const ID = '10768C80-1C66-11ED-99E9-75BC2CC6E170';
        const newData = {
            description: 'something',
            completed: true,
        };

        axios.put = vi.fn((url) => {
            if (url.includes(ID)) {
                return Promise.resolve(true);
            } else {
                return Promise.reject('Error!');
            }
        });

        // ok
        const response = await BackendAPI.removeTodo(ID, newData);

        expect(response).toBe(true);

        // ko
        const badResponse = await BackendAPI.removeTodo('bad id');

        expect(badResponse).toEqual({
            success: false,
            error: 'Error!'
        });
    });
});
