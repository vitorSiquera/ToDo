import { useState } from "react";

function AddTask({onAddTaskClick}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <input type="text" 
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        placeholder="digite o titulo "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" 
        className="border border-slate-300 outline-slate-400 px-4 py-2" placeholder="digite a descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button 
        onClick={() => onAddTaskClick(title, description)}
        className="bg-slate-400 p-2 text-white px-4 py-2 rounded-md font-medium">
            Adicionar Tarefa
        </button>
    </div>
    )
}

export default AddTask;