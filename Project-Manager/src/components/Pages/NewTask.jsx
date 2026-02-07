import { useState } from "react";
export default function NewTask({ onAdd }) {
  const [taskText, setTaskText] = useState("");
  function handleOnchangeInput(event) {
    setTaskText(event.target.value);
  }
  function handleAddTask() {
    if (taskText.trim() === "") {
      return;
    }
    onAdd(taskText);
    setTaskText("");
    console.log(taskText);
  }
  return (
    <>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          value={taskText}
          onChange={handleOnchangeInput}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200 outline-none border-b-2 border-stone-300 focus:border-stone-400"
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </>
  );
}
