import { useQuery } from "react-query"
import * as api from "../api/TaskAPI"

export const TaskQuery = () => {
    return useQuery('tasks', api.getTasks)
}
