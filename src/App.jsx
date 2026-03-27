import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React Hooks",
      description: "Aprender useState, useEffect e useContext",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Criar API Node.js",
      description: "Criar uma API REST simples com Express",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Praticar TypeScript",
      description: "Converter um projeto JavaScript para TypeScript",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Estudar CSS Grid",
      description: "Aprender a organizar layouts responsivos",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Criar projeto Fullstack",
      description: "Criar app com React + Node + Banco de dados",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    // Atualizar tarefas
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // Não atualizar tarefa
      return task;
    });

    setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125">
        <h1 className="text-red-500">Gerenciador de tarefas</h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
