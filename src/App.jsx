import { useState } from 'react'
import TaskItem from './TaskItem'

function App() {
  const [count, setCount] = useState(0)
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'Learn React',
      done: false
    },
    {
      id: 2,
      text: 'Learn Redux',
      done: false
    },
    {
      id: 3,
      text: 'Learn React Router',
      done: false
    }
  ])

  const [input, setInput] = useState('');
  function addTask() {
    if (input.trim() === '') return;
    const newTask = {id: Date.now(), text: input, done: false};
    setTasks([...tasks, newTask]);
    setInput('');
  }
  function toggleTask(id){
    setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t));
  }
  function deleteTask(id){
    setTasks(tasks.filter(t => t.id !== id));
  }
  //Add a "Clear Completed" button to App.jsx (try writing the function yourself — filter out tasks where done is true), then:
  function clearCompleted() {
    setTasks(tasks.filter(t => !t.done));
  }

  return (
    <div className="app">
      <h1>Task List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default App
