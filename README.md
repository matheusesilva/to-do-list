# Todo App — Project Overview

This repository contains a modular JavaScript Todo application built using factories/classes, Web Storage persistence, and a clean separation between application logic and DOM manipulation.  
The app supports multiple projects, dynamic todo creation, detail editing, and full persistence via `localStorage`.

## Live Demo
https://matheusesilva.github.io/to-do-list/

## Features

### Todo Objects
- Todos are dynamically created through constructors or factory functions.
- Each todo includes:
  - **title**
  - **description**
  - **dueDate**
  - **priority**
  - Optional fields such as **notes** or a **checklist**.
- Methods (editing, completion state, etc.) are restored after loading from `localStorage`.

### Projects
- Todos are organized into projects.
- A **default project** is created when the app loads.
- Users can:
  - Create new projects
  - Remove existing projects
  - Assign todos to any project
- All project/todo data is fully synchronized with `localStorage`.

### User Interface
- Displays a sidebar with all projects.
- Shows todos for the selected project, including:
  - Title
  - Due date
  - Priority-based styling (e.g., color coding)
- Supports:
  - Creating new todos
  - Expanding todos for full detail view and editing
  - Marking todos as completed
  - Deleting todos
- UI logic is kept separate from application logic according to module design best practices.

### Persistence (localStorage)
- All projects and todos are automatically saved to `localStorage`.
- On startup, data is restored and methods reattached as needed.
- Handles:
  - Missing or empty `localStorage`
  - Parsing errors
  - Converting JSON objects back into working todo/project instances
- Data can be inspected in DevTools → Application → Local Storage.

### Optional Libraries
- Supports integration with `date-fns` for date formatting and manipulation.

## Notes
- All application logic (creation, modification, persistence) lives in dedicated modules.
- DOM operations (rendering and event handling) live in separate UI-focused modules.
- The project follows a clean modular architecture for scalability and maintainability.

## License
This project is released under the MIT license.
