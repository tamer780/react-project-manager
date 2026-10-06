# React Project Manager

A project and task management practice app focused on React state ownership, immutable updates, and component data flow.

## Features

- Create projects and select them from a sidebar.
- Add and remove tasks for the selected project.
- Delete a project together with its associated tasks.
- Switch between empty, creation, and project-detail views.

## Stack

React 19 · JavaScript · Tailwind CSS 3 · Vite.

## Run locally

```bash
git clone https://github.com/tamer780/react-project-manager.git
cd react-project-manager/Project-Manager
npm install
npm run dev
```

The application lives inside **`Project-Manager/`**, rather than at the repository root. Open the URL printed by Vite.

## React concepts demonstrated

- Lifted state in [App.jsx](Project-Manager/src/App.jsx).
- Functional state updates that create new arrays and objects.
- Project/task relationships using `projectId`.
- Derived selection and filtered task lists.
- Conditional rendering and callbacks passed to focused components.
- Shared buttons, inputs, and modal components.

## Code organization

| Location | Responsibility |
| --- | --- |
| `Project-Manager/src/App.jsx` | State ownership and workflow handlers |
| `Project-Manager/src/components/Pages/` | Project and task screens |
| `Project-Manager/src/components/UI/` | Shared interface elements |

## Current scope

Projects and tasks are kept in React memory and reset when the page reloads. The app does not include authentication, a backend, or persistent storage. No automated test suite is included.

## Production build

Run inside `Project-Manager/`:

```bash
npm run build
npm run preview
```
