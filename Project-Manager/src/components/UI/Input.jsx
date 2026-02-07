export default function Input({ label, textarea, ref, ...props }) {
  const cssClass =
    "bg-stone-200 outline-none border-b-2 border-stone-300 w-full p-1 text-stone-600 hover:border-stone-600 focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1">
      <label className="text-xs font-bold uppercase text-stone-500 mt-4">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={cssClass} ref={ref} />
      ) : (
        <input {...props} className={cssClass} ref={ref} />
      )}
    </p>
  );
}
