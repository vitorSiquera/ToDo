import { useState } from "react"
import AddTask from "./components/AddTask"
import Task from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([{
    id:1,
    title: "Estudar React",
    description: "Estudar os conceitos básicos de React",
    isCompleted: false,
  },
    {
      id:2,
      title: "Estudar Tailwind",
      description: "Estudar os conceitos básicos de Tailwind",
      isCompleted: false,
    },
    {
      id:3,
      title: "Estudar JavaScript",
      description: "Estudar os conceitos básicos de JavaScript",
      isCompleted: false,
    }
  ]);

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
    id: tasks.length + 1,
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
