import noImage from "../assets/no-projects.png";
import Button from "./Button.jsx";
export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        src={noImage}
        alt="no_image"
        className="w-16 h-16 mx-auto object-contain"
      />
      <h2 className="font-bold text-xl text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="my-4 text-stone-400">
        Selecte a Project or Create a new one.
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
