import React from 'react'

import TaskItem from './TaskItem'

const TasksList = props => {
    const { tasks = [] } = props

    return (
        <ul className="todo-list" data-cy="tasks-list">
            {tasks.map(task => (
                <TaskItem task={task} />
            ))}
        </ul>
    )
}

export default TasksList
