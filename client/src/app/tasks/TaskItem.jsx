import React from 'react'

const TaskItem = props => (
    <li data-cy="task-item">
        <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{props.task.name}</label>
            <button className="destroy" />
        </div>
    </li>
)

export default TaskItem
