export default function Button({ children, ...props }) {
  const cssClass =
    "px-2 py-1 bg-stone-600 rounded-md text-stone-400 hover:bg-stone-700 hover:text-stone-200 md:text-base";

  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
}
