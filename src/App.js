import { useState } from 'react'
import Header from './components/Header'
import IncompleteTasks from './components/IncompleteTasks'
import AddTask from './components/AddTask'
import CompletedTasks from './components/CompletedTasks'



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        completed: true
    },
    {
        id:2,
        text: 'Haircut',
        day: 'Feb 6th at 1:30pm',
        completed: true
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        completed: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 ) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleCompleted = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } 
      : task
      )
    )
  }
  return (
    <div className='container grid'>
      <div className='grid-item'>
        <h3>Add Task </h3>
        <AddTask onAdd={addTask}/>
      </div>

      <div className='grid-item'>
        <IncompleteTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleCompleted}/>
      </div>

      <div className='grid-item'>
        <CompletedTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleCompleted}/>
      </div>

    </div>
  );
}

export default App;
