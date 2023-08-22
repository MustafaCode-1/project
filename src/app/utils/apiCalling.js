import axios from "axios";

export const addRequestData = async (payload) => {
    await axios.post('/api/users/students', payload);
}

export const getRequestData = async () => {
    const result = await axios.get('/api/users/students');
    return result;
}

    