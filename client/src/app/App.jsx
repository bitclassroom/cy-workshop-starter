import React, { useState, useEffect } from 'react'

import TaskInput from './tasks/TaskInput'
import TodoList from './tasks/TasksList'

import Footer from './Footer'
import { fetchTasks, createTask } from '../services/taskService'

export const AppContext = React.createContext({})

const App = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetchTasks().then(tasks => {
            setTasks(tasks)
        })
    }, [])

    const addTask = task => {
        createTask(task).then(newTask => {
            setTasks(prevTask => [newTask, ...prevTask])
        })
    }

    return (
        <AppContext.Provider value={{ addTask }}>
            <header className="header">
                <h1>Tasks</h1>
                <h3>All you need to do</h3>
                <TaskInput />
            </header>
            <section className="main">
                <TodoList tasks={tasks} />
            </section>
            <Footer tasksCount={tasks.length} />
        </AppContext.Provider>
    )
}

export default App
