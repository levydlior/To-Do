import { taskType } from "../types/Task.type"

export type AddATaskProps = {
    handleTaskCreate: (taskObject: taskType) => void
}