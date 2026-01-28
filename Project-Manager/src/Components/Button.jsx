export default function Button({ children, ...props }) {
  const cssBtn =
    "px-4 py-2 text-stone-300 bg-stone-700 hover:text-stone-100 hover:bg-stone-600 text-xs md:text-base rounded-md";
  return (
    <>
      <button className={cssBtn} {...props}>
        {children}
      </button>
    </>
  );
}
