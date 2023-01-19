import { priorityType } from "../TaskItem/Taskitem.types"

export type TasksType = {
    id: number,
    priority: priorityType,
    title: string,
    due_date: string,
    completed: boolean
}