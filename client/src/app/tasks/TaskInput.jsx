import React, { useState, useContext } from 'react'
import { AppContext } from '../App'

const TaskInput = () => {
    const { addTask } = useContext(AppContext)
    const [inputText, setInputText] = useState('')

    const _onTextChange = e => {
        setInputText(e.target.value)
    }

    const _handleSubmit = e => {
        e.preventDefault()

        const newTask = {
            name: inputText,
            isCompleted: false
        }

        addTask(newTask)
        setInputText('')
    }

    return (
        <form onSubmit={_handleSubmit}>
            <input
                autoFocus
                data-cy="task-input"
                type="text"
                className="new-todo"
                value={inputText}
                placeholder="What needs to be done?"
                onChange={_onTextChange}
            />
        </form>
    )
}

export default TaskInput
