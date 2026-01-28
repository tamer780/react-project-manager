import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";
const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => dialog.current.showModal(),
      close: () => dialog.current.close(),
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="px-4 py-2 rounded-md backdrop:bg-stone-900/90 shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{btnCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
export default Modal;
