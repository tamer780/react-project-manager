import { useRef } from "react";
import Input from "../UI/Input.jsx";
import Modal from "../UI/Modal.jsx";
export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef();
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
      enteredDueDate === ""
    ) {
      modalRef.current.openModal();
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
      <Modal ref={modalRef} buttonText="Okay!">
        <h1 className="mb-4 text-stone-800 font-bold text-xl">Invalid input</h1>
        <p className="text-stone-400">Oops...Something went wrong.</p>
        <p className="text-stone-400 mb-4">
          Please, make sure all fields are filled.
        </p>
      </Modal>
      <div className="mt-16 max-w-[35rem] w-full">
        <menu className="flex gap-4 justify-end items-center">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className="bg-stone-700 py-2 px-4 rounded-md text-stone-400 hover:text-stone-50 hover:bg-stone-800"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="mt-4">
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="DueDate" type="date" />
        </div>
      </div>
    </>
  );
}
