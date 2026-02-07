import image from "../../assets/no-projects.png";
import Button from "../UI/Button.jsx";
export default function EmptyState({ onClickAddProject }) {
  return (
    <div className="w-2/3  text-center mt-24">
      <img
        src={image}
        alt="no_Image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl my-4 font-bold text-stone-700">
        No Project Selected
      </h2>
      <p className="text-stone-600 mb-4">
        Selected Project or Create a new one
      </p>
      <p className="mt-8">
        <Button onClick={onClickAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
