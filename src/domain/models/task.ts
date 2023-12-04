type Task = {
    id: string
    name: string
    status: 'active' | 'done'
    description?: string
}

export default Task