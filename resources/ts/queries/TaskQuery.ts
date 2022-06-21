import { useQuery, useQueryClient, useMutation } from "react-query"
import { toast } from "react-toastify"
import * as api from "../api/TaskAPI"
import { AxiosError } from 'axios'

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

const useCreateTask = () => {
    const queryClient = useQueryClient()

    return useMutation(api.createTask, {
        onSuccess() {
            queryClient.invalidateQueries('tasks')
            toast.success('データの登録に成功しました')
        },
        onError(error: AxiosError) {
            if (error.response?.data.errors) {
                Object.values(error.response?.data.errors).map((messages: any) => {
                    messages.map((message: string) => {
                        toast.error(message)
                    })
                })
            } else {
                toast.error('データの作成に失敗しました');
            }
        }
    })
}

export { TaskQuery, useUpdateDoneTask, useCreateTask }
