import { Task } from "../types/Task"

const axios = require('axios').default

const getTasks = async () => {
    const { data } = await axios.get('api/tasks')
    return data
}

const updateDoneTask = async ({id, is_done}: Task) => {
    const { data } = await axios.patch(`api/tasks/update-done/${id}`, { is_done: !is_done})
    return data
}

const createTask = async (title: string) => {
    const { data } = await axios.post('api/tasks', {title: title})
    return data
}

export { getTasks, updateDoneTask, createTask }
