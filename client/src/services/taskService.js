import axios from 'axios'

export const fetchTasks = () => axios.get(`/tasks`).then(res => res.data)

export const createTask = payload => axios.post(`/tasks`, payload).then(res => res.data)
