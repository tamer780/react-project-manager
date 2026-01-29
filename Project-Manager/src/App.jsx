import SidePar from "./Components/SidePar.jsx";
import Content from "./Components/Content.jsx";
import ProjectContextProvider from "./store/ProjectContext.jsx";

function App() {
  return (
    <ProjectContextProvider>
      <main className="h-screen my-8 flex gap-4">
        <SidePar />
        <Content />
      </main>
    </ProjectContextProvider>
  );
}

export default App;
