import { useState } from "react";
import EmptyState from "./components/Pages/EmptyState.jsx";
import NewProject from "./components/Pages/NewProject.jsx";
import Sidebar from "./components/Pages/Sidebar.jsx";
import ProjectDetails from "./components/Pages/ProjectDetails.jsx";

export default function App() {
  const [projectState, setProjectState] = useState({
    // undefined → idle
    // null → creating new project
    // number → selected project

    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleSaveNewProject(projectData) {
    setProjectState((prevProject) => {
      const id = Date.now();
      const newProject = { id, ...projectData };
      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: [...prevProject.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
        tasks: prevState.tasks.filter(
          (task) => task.projectId !== prevState.selectedProjectId,
        ),
      };
    });
  }
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Date.now();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId, //the relation between project and its tasks with id
        text: text,
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

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId,
  );

  let content = <EmptyState onClickAddProject={handleStartAddProject} />;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleSaveNewProject} onCancel={handleCancelProject} />
    );
  } else if (selectedProject) {
    content = (
      <ProjectDetails
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        tasks={projectState.tasks.filter(
          (task) => task.projectId === projectState.selectedProjectId,
        )}
        onClearTask={handleDeleteTask}
      />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-4">
      <Sidebar
        onClickAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}
