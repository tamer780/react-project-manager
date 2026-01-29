import { createContext, useState } from "react";
export const ProjectContext = createContext({
  projectStateId: undefined,
  projects: [],
  tasks: [],
  handleStartAddProject: () => {},
  handleAddProject: () => {},
  handleDeleteProject: () => {},
  handleAddTask: () => {},
  handleDeleteTask: () => {},
  handleCancleBtn: () => {},
  handleSelectedProject: () => {},
});

export default function ProjectContextProvider({ children }) {
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
  function handleDeleteProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectStateId: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
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

  const value = {
    projectStateId: projectState.projectStateId,
    projects: projectState.projects,
    tasks: projectState.tasks,
    handleStartAddProject,
    handleAddProject,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
    handleCancleBtn,
    handleSelectedProject,
  };
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}
