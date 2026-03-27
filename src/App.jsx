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
      isCompleted: false,
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

  function deleteTask(taskId) {
    const updatedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTask);
  }

  function addTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125 space-y-4">
        <p className="text-amber-50 text-2xl text-center">
          Gerenciador de tarefas
        </p>

        <AddTask addTask={addTask} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
