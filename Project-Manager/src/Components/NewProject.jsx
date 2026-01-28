import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancle }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSaveProject() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal btnCaption="Okay!" ref={modal}>
        <h2 className="font-bold text-xl text-stone-700 my-4">Invaild Input</h2>
        <p className="text-stone-400">Oops...Someting went wrong.</p>
        <p className="text-stone-400 mb-4">
          Please make sure you provided value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex gap-4 justify-end items-center my-4">
          <li>
            <button
              onClick={onCancle}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-4 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
