import { ChevronRightIcon, TrashIcon, Check } from "lucide-react";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => {
        return (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => {
                onTaskClick(task.id);
              }}
              className={`
  w-full text-white p-2
  ${task.isCompleted ? "bg-green-500 line-through" : "bg-orange-300"}
`}
            >
              <div className="flex items-center gap-2">
                {task.isCompleted && <Check size={18} />}
                <span>{task.title}</span>
              </div>
            </button>
            <button className="bg-slate-400 p-2 text-white rounded-xl">
              <ChevronRightIcon />
            </button>
            <button
              className="bg-red-400 p-2 text-white rounded-xl"
              onClick={() => {
                deleteTask(task.id);
              }}
            >
              <TrashIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Tasks;
