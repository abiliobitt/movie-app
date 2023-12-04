import { Task } from '../models'


export interface AddTask {
    add: (params: Task) => Promise<Task>
}

