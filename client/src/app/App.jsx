import React, { useState } from 'react'

import TodoForm from './tasks/TaskForm'
import TodoList from './tasks/TasksList'

import Footer from './Footer'

const App = () => {
    const [tasks, setTasks] = useState([])

    return (
        <div>
            <header className="header">
                <h1>Tasks</h1>
                <TodoForm />
            </header>
            <section className="main">
                <TodoList tasks={tasks} />
            </section>
            <Footer />
        </div>
    )
}

export default App
