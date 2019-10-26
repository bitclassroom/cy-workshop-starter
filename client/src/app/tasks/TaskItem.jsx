import React from 'react'

const TaskItem = props => (
    <li>
        <div className="view">
            <input className="toggle" type="checkbox" />
            <label> </label>
            <button className="destroy" />
        </div>
    </li>
)

export default TaskItem
