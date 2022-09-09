import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Сходить за покупками',
      day: 'Среда 31-ое августа',
      reminder: true
    },
    {
      id: 2,
      text: 'Поработать над проектом',
      day: 'Четверг 1-ое сентября',
      rimender: false
    }
])

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000);
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? {...task, reminder: 
      !task.reminder} : task
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 
      ? <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/> 
      : 'Нет дел'}
    </div>
  )
}

export default App;
