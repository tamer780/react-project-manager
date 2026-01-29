import NoProjectSelected from "./NoProjectSelected.jsx";
import SelectedProject from "./SelectedProject.jsx";
import NewProject from "./NewProject.jsx";
import { ProjectContext } from "../store/ProjectContext.jsx";
import { useContext } from "react";
export default function Content() {
  const { projectStateId } = useContext(ProjectContext);

  if (projectStateId === null) {
    return <NewProject />;
  }
  if (projectStateId === undefined) {
    return <NoProjectSelected />;
  }
  return <SelectedProject />;
}
