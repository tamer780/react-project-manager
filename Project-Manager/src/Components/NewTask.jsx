import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const modal = useRef();
  const [inputTask, setInputTask] = useState("");
  function handleOnChange(event) {
    setInputTask(event.target.value);
  }

  function handleClick() {
    if (inputTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(inputTask);
    setInputTask("");
    console.log(inputTask);
  }
  return (
    <>
      <Modal ref={modal} btnCaption="Back">
        <p className="my-4 text-stone-400">Please Enter Something!</p>
      </Modal>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={inputTask}
          onChange={handleOnChange}
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          AddTask
        </button>
      </div>
    </>
  );
}
