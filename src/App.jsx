import AddTask
 from "./components/AddTask"
import Task from "./components/Tasks"


function App() {
  return (
    <div><h1>
      Gerenciado de Tarefas</h1>
      <AddTask />
      <Task />
    </div>
  )
}
