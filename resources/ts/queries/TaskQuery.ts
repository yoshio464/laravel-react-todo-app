import { useQuery, useQueryClient, useMutation } from "react-query"
import { toast } from "react-toastify"
import * as api from "../api/TaskAPI"

const TaskQuery = () => {
    return useQuery('tasks', api.getTasks)
}

const useUpdateDoneTask = () => {
    const queryClient = useQueryClient()

    return useMutation(api.updateDoneTask, {
        onSuccess() {
            queryClient.invalidateQueries('tasks')
        },
        onError() {
            toast.error('データの更新に失敗しました');
        }
    })
}

export { TaskQuery, useUpdateDoneTask}
