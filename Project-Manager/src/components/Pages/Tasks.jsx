import NewTask from "./NewTask.jsx";
export default function Tasks({ onAdd, tasks, onClear }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 pb-2">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center py-1 border-b border-stone-300 last:border-none"
            >
              <span className="text-stone-800 break-words pr-4">
                {task.text}
              </span>
              <span>
                <button
                  onClick={() => onClear(task.id)}
                  className="text-stone-600 hover:text-red-600 transition-colors duration-200"
                >
                  Clear
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project doesn&apos;t have any tasks.
        </p>
      )}
    </section>
  );
}
