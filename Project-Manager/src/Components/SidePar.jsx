import Button from "./Button.jsx";
import { ProjectContext } from "../store/ProjectContext.jsx";
import { useContext } from "react";

export default function SidePar() {
  const {
    handleStartAddProject,
    projects,
    handleSelectedProject,
    projectStateId,
  } = useContext(ProjectContext);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="font-bold md:text-xl mb-8 uppercase text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={handleStartAddProject}>+AddProject</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left  px-2 rounded-sm hover:bg-stone-800 hover:text-stone-100";
          if (project.id === projectStateId) {
            cssClasses += " text-stone-100 bg-stone-800";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id} className="my-1">
              <button
                onClick={() => handleSelectedProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
