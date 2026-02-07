import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ buttonText, children, ref }) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      openModal: () => dialogRef.current.showModal(),
      hideModal: () => dialogRef.current.close(),
    };
  });
  return createPortal(
    <dialog
      ref={dialogRef}
      className="px-4 py-2 rounded-md backdrop:bg-stone-900/90 shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="bg-stone-700 py-2 px-4 rounded-md text-stone-400 hover:text-stone-50 hover:bg-stone-800">
          {buttonText}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
