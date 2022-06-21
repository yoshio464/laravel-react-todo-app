const axios = require('axios').default

const getTasks = async () => {
    const { data } = await axios.get('api/tasks')
    return data
}

export { getTasks }
