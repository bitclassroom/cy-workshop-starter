import React from 'react'

import TaskItem from './TaskItem'

const TasksList = props => {
    const { tasks = [] } = props
    return (
        <ul className="todo-list">
            {tasks.map(todo => (
                <TaskItem />
            ))}
        </ul>
    )
}

export default TasksList
