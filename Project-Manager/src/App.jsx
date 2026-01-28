import { useState } from "react";
import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import SidePar from "./Components/SidePar.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    projectStateId: undefined,
    projects: [],
    tasks: [],
  }); // null / undefined / id

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectState((prevPrject) => {
      const ID = Date.now();
      const newProject = { id: ID, ...projectData };
      return {
        ...prevPrject,
        projects: [...prevPrject.projects, newProject],
        projectStateId: undefined,
      };
    });
  }
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.projectStateId,
        ),
      };
    });
  }
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Date.now();
      const newTask = {
        text: text,
        projectId: prevState.projectStateId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  function handleCancleBtn() {
    setProjectState((prvState) => {
      return {
        ...prvState,
        projectStateId: undefined,
      };
    });
  }
  function handleSelectedProject(id) {
    setProjectState((prvState) => {
      return {
        ...prvState,
        projectStateId: id,
      };
    });
  }
  console.log(projectState);
  const selectedProj = projectState.projects.find(
    (project) => project.id === projectState.projectStateId,
  );
  let content = (
    <SelectedProject
      project={selectedProj}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks.filter(
        (task) => task.projectId === projectState.projectStateId,
      )}
    />
  );
  if (projectState.projectStateId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancle={handleCancleBtn} />
    );
  } else if (projectState.projectStateId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-4">
      <SidePar
        onAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
        selectedProjectId={projectState.projectStateId}
      />
      {content}
    </main>
  );
}

export default App;
