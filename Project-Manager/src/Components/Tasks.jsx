import NewTask from "./NewTask.jsx";
import { ProjectContext } from "../store/ProjectContext.jsx";
import { useContext } from "react";

export default function Tasks() {
  const { handleDeleteTask, tasks, projectStateId } =
    useContext(ProjectContext);
  const taskId = tasks.filter((task) => task.projectId === projectStateId);

  return (
    <section>
      <h2 className="font-bold text-2xl text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {taskId.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-200 space-y-3 divide-y divide-stone-300">
          {taskId.map((task) => (
            <li key={task.id} className="flex justify-between items-center">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => handleDeleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project don&apos;t have ant tasks
        </p>
      )}
    </section>
  );
}
