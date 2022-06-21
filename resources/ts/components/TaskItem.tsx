import React from 'react'
import { Task } from '../types/Task'
import { useUpdateDoneTask } from '../queries/TaskQuery'

type Props = {
    task: Task
}

export const TaskItem: React.FC<Props> = ({task}) => {

    const updateDoneTask = useUpdateDoneTask()

    return (
        <li className={task.is_done ? 'done' : ''} key={task.id}>
            <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" onClick={() => updateDoneTask.mutate(task) } />
            </label>
            <div><span>{task.title}</span></div>
            <button className="btn is-delete">削除</button>
        </li>
    )
}
