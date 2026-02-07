import Button from "../UI/Button.jsx";
export default function Sidebar({
  onClickAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="px-8 py-16 bg-stone-900 w-1/3 text-stone-50 rounded-r-md  md:w-72">
      <h2 className="mb-4 uppercase text-xl text-stone-200 font-bold">
        Your Projects
      </h2>
      <div className="mt-4">
        <Button onClick={onClickAddProject}>+Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          const cssClass = `w-full text-left px-2 py-1 rounded-sm hover:text-stone-200 hover:bg-stone-800 ${
            project.id === selectedProjectId
              ? " bg-stone-800 text-stone-200"
              : " text-stone-400"
          }`;
          return (
            <li key={project.id} className="mb-1">
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)}
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
