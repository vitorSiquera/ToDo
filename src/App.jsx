import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import Task from "./components/Tasks"


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

function onTaskClick(taskId) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  setTasks(newTasks);
}

function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(newTasks);
}

function onAddTaskClick(title, description) {
  const newTask = {
    id: tasks.length + 2,
    title,
    description,
    isCompleted: false,
  }
  setTasks([...tasks, newTask]);
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciado de Tarefas
        </h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Task tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App;
