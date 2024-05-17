import { saveLocal, getLocal } from './webstorage.js';
import { startOfDay, isToday, isBefore, isThisWeek, isThisMonth } from "date-fns";
import { screen } from './screen.js';
import { capitalize, generateId } from './tools.js';

export const task = (function() {
    let tasks = [];

    // Checks if there is tasks saved on the local storage
    if (getLocal('tasks') !== null) {
        tasks = getLocal('tasks');
    }
    const create = (taskObj) => {
        const id = generateId('task');
        const title = taskObj.title;
        const description = taskObj.description;
        const dueDate = startOfDay(new Date(taskObj.dueDate + ' EDT'));
        const priority = taskObj.priority;
        const isDone = taskObj.isDone;
        const projects = project.find(taskObj.projects);
        const newTask = {id, title, description, dueDate, priority, isDone, projects}
        tasks.push(newTask);

        // Backup the tasks to the local storage
        saveLocal('tasks', task.all());
        taskForm.close();
        screen.loadMenu();
        screen.loadTasks();
        return newTask
    };
    const edit = (taskObj) => {
        tasks.forEach(item => {
            if (item.id === taskObj.id) {
                const date = startOfDay(new Date(taskObj.dueDate + ' EDT'));
                const projectList = project.find(taskObj.projects);
                Object.assign(item, taskObj, { dueDate: date }, { projects: projectList});
                saveLocal('tasks', task.all());
                taskForm.close();
                screen.loadTasks();
            }
        })
    }
    const all = (status) => {
        let result;
        if (status === 'done') {
            result = tasks.filter((item) => item.isDone);
            result.sort((a, b) => a.dueDate - b.dueDate);
        } else if (status === 'notdone'){
            result = tasks.filter((item) => !item.isDone);
            result.sort((a, b) => a.dueDate - b.dueDate);
        } else {
           result = tasks.sort((a, b) => a.dueDate - b.dueDate);
        }
        return result
    }
    const toggleDone = (id) => {
        tasks.forEach(item => {
            if (item.id === id) {
                item.isDone = item.isDone === true ? false : true;
            }
        });
    }
    const remove = (id) => {
        const index = task.all().findIndex(item => item.id === id);
        tasks.splice(index,1);
        saveLocal('tasks', task.all());
        taskForm.close();
        screen.loadTasks();
    }
    const removeProject = (id) => {
        tasks.forEach(entry => {
            for (let i = 0; i < entry.projects.length; i++) {
                if (entry.projects[i].id === id) {
                    entry.projects.splice(i, 1);
                    i--;
                }
            }
        })
        saveLocal('tasks', task.all());
    }
    const filter = (keyword, status = 'all') => {
        let filteredList;
        const today = startOfDay(new Date());
        switch (keyword) {
            case 'all-tasks':
                filteredList = task.all(status);
                break;
            case 'overdue':
                filteredList = task.all(status).filter((entry) => isBefore(entry.dueDate, today));
                break;
            case 'today':
                filteredList = task.all(status).filter((entry) => isToday(entry.dueDate));
                break;
            case 'this-week':
                filteredList = task.all(status).filter((entry) => isThisWeek(entry.dueDate));
                break;
            case 'this-month':
                filteredList = task.all(status).filter((entry) => isThisMonth(entry.dueDate));
                break;
            default:
                const regexProject = /P\d\d\d\d/i;
                const regexTask = /T\d\d\d\d/i;
                if (regexProject.test(keyword)) {
                    filteredList = task.all(status).filter((entry) => {
                        for (let project of entry.projects) {
                            if (project.id === keyword) {
                                return true
                            }
                        }
                        return false
                    });
                } else if (regexTask.test(keyword)) {
                    filteredList = task.all().find((entry) => entry.id === keyword);
                }
        }
        return filteredList
    }
    return {create, all, remove, filter, toggleDone, edit, removeProject}
})();

export const project = (function() {
    let projects = [];

    // Checks if there is projects saved on the local storage
    if (getLocal('projects') !== null) {
        projects = getLocal('projects');
    }
    const create = (projectTitle) => {
        const id = generateId('project');
        const title = projectTitle;
        const tasksRelated = [];
        const getTasks = () => tasksRelated;
        const toggleTask = function (task) {
            if (tasksRelated.includes(task)) {
                tasksRelated.splice(tasksRelated.indexOf(task),1);
            } else {
                tasksRelated.push(task);
            }
        }
        const newProject = {id, title, getTasks, toggleTask};
        projects.push(newProject);
        taskForm.loadProjects();

        // Backup the projects to the local storage
        saveLocal('projects', project.all());
        console.log(`Project ${id} was added`);
        return newProject
    }
    const count = () => projects.length;
    const all = () => projects;
    const names = () => {
        let list = [];
        Object.values(project.all()).map(item => {
            list.push(item.title);
        });
        return list
    };
    const remove = (id) => {
        console.log(id);
        const index = project.all().findIndex((item) => item.id = id);
        console.log(index);
        projects.splice(index,1);
        task.removeProject(id);
        saveLocal('projects', project.all());
    }
    const find = (projectId) => {
        let list = [];
        function getObj (id) {
            return project.all().find((item) => item.id === id)
        }
        switch (typeof projectId) {
            case 'string':
                list.push(getObj(projectId));
                break;
            case 'object':
                projectId.forEach(id => list.push(getObj(id)))
                break;
        }
        return list
    }
    return {create, all, count, remove, names, find}
})();

export const taskForm = (function() {
    const form = document.querySelector('form.task-form');
    const dialog = document.querySelector('dialog');   
    const newBtn = document.querySelector('#new-btn');
    const cancelBtn = document.querySelector('#cancel-btn');
    const deleteBtn = document.querySelector('#delete-btn');
    const addProjBtn = document.querySelector('label[for=project] button');

    // Add functionality to the buttons
    const open = (mode, taskObj) => {
        taskForm.loadProjects();
        const submitBtn = document.querySelector('#submit');
        switch (mode) {
            case 'add':
                submitBtn.textContent = 'Add';
                deleteBtn.className = 'hide';
                submitBtn.onclick = () => task.create(taskForm.getData());
                break;
            case 'edit':
                taskForm.loadData(taskObj);
                submitBtn.textContent = 'Save';
                deleteBtn.className = '';
                submitBtn.onclick = () => task.edit(taskForm.getData());
                break;
        }
        //form.onsubmit = () => false;
        dialog.showModal();
    }
    const close = () => {
        form.reset();
        dialog.close();
    }
    newBtn.addEventListener('click', () => open('add'));
    cancelBtn.addEventListener('click', close);
    deleteBtn.addEventListener('click', () => {
        const taskId = document.querySelector('#task-id').value;
        task.remove(taskId); 
    });
    addProjBtn.onclick = () => {
        const projName = document.querySelector('label[for=project] input');
        if (projName !== '') {
            const projObj = project.create(projName.value);
            const selectList = document.querySelectorAll('#project option');
            selectList.forEach(proj => {
                if (proj.value === projObj.id) {
                    proj.selected = true;
                    proj.scrollIntoView();
                }
            })
            projName.value = '';
        }
    }
    
    // Get data from the task form
    const getData = () => {
        const id = document.querySelector('#task-id').value;
        const title = capitalize(document.querySelector('#title').value);
        const dueDate = document.querySelector('#dueDate').value;
        const priority = document.querySelector('#priority').value;
        const description = capitalize(document.querySelector('#description').value);
        const isDone = document.querySelector('#isDone').checked;
        const projects = [];
        document.querySelectorAll('#project option').forEach(entry => {
            if (entry.selected === true) {
                projects.push(entry.value);
            }
        });
        return {id, title, dueDate, priority, projects, description, isDone}
    }

    const loadData = (taskObj) => {
        document.querySelector('#task-id').value = taskObj.id;
        document.querySelector('#title').value = taskObj.title;
        document.querySelector('#dueDate').value = taskObj.dueDate.toLocaleDateString();
        document.querySelector('#priority').value = taskObj.priority;
        document.querySelector('#description').value = taskObj.description;
        document.querySelector('#isDone').checked = taskObj.isDone;

        document.querySelectorAll('#project option').forEach(item => {
            item.selected = false;
        });
        taskObj.projects.forEach(item => {
            const option = `option[value=${item.id}]`;
            document.querySelector(option).selected = true;
        });
    }

    const loadProjects = () => {
        const projectSelection = document.querySelector('#project');
        projectSelection.innerHTML = '';
        project.all().forEach(project => {
            const option = document.createElement('option');
            option.value = project.id;
            option.innerHTML = project.title;
            projectSelection.appendChild(option);     
        });
    }

    return {getData, loadProjects, loadData, open, close};
})();