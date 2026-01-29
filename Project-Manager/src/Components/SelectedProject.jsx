import Tasks from "./Tasks.jsx";
import { ProjectContext } from "../store/ProjectContext.jsx";
import { useContext } from "react";
export default function SelectedProject() {
  const { handleDeleteProject, projects, projectStateId } =
    useContext(ProjectContext);
  const selectedProj = projects.find(
    (project) => project.id === projectStateId,
  );

  const formateDate = new Date(selectedProj.dueDate).toLocaleDateString(
    "ar-EG",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex justify-between gap-1 items-center">
          <h1 className="text-3xl font-bold mb-4 text-stone-600">
            {selectedProj.title}
          </h1>
          <button
            onClick={() => handleDeleteProject(selectedProj.id)}
            className="text-stone-700 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formateDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProj.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
