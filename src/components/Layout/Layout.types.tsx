import { priorityType } from "../TaskItem/Taskitem.types"

export type TaskArray = {
    id: number,
    priority: priorityType,
    title: string,
    due_date: string,
    completed: boolean
}