import './index.css';
import emptyImage from './empty.jpg';
import { saveLocal, getLocal } from './webstorage.js';
import { startOfDay, isToday, isBefore, isThisWeek, isThisMonth } from "date-fns";

const task = (function() {
    let tasks = [];

    // Checks if there is tasks saved on the local storage
    if (getLocal('tasks') !== null) {
        tasks = getLocal('tasks');
    }
    const create = (taskData) => {
        const id = generateId('task');
        const title = taskData.title;
        const description = taskData.description;
        console.log(taskData.dueDate);
        const dueDate = startOfDay(new Date(taskData.dueDate + ' EDT'));
        const priority = taskData.priority;
        const isDone = taskData.isDone;
        const projects = [];
        if (taskData.project !== '') {
            const relatedProject = project.all().find((entry) => entry.id === taskData.project);
            projects.push(relatedProject);
        }
        const newTask = {id, title, description, dueDate, priority, isDone, projects}
        tasks.push(newTask);

        // Backup the tasks to the local storage
        saveLocal('tasks', task.all());
        console.log(task.all());
        console.log(`Task ${id} was added to the list`);
        return newTask
    };
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
        const index = tasks.all().findIndex((item) => item.id = id);
        console.log(index);
        tasks.slice(index,1);
    }
    const filter = (keyword, status = 'all') => {
        let filteredList;
        const today = startOfDay(new Date());
        switch (keyword) {
            case 'all':
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
    return {create, all, remove, filter, toggleDone}
})();

const project =(function () {
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
        newTaskForm.loadProjects();

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
        const index = projects.all().findIndex((item) => item.id = id);
        console.log(index);
        projects.slice(index,1);
    }
    return {create, all, count, remove, names}
})();

const newTaskForm = (function () {
    // Get data from the new task form
    const getData = () => {
        const title = capitalize(document.querySelector('#title').value);
        const dueDate = document.querySelector('#dueDate').value;
        const priority = document.querySelector('#priority').value;
        const project = document.querySelector('#project').value;
        const description = capitalize(document.querySelector('#description').value);
        const isDone = document.querySelector('#isDone').checked;
        return {title, dueDate, priority, project, description, isDone}
    }
    // Add show and hide functionality to a button
    const showHide = function(button) {
        button.addEventListener('click', () => {
            document.querySelector('.newTaskForm').classList.toggle('hide');
        });
    }
    // Add create functionality to a button
    const addTask = function(button) {
        button.addEventListener('click', () => {
            const taskData = newTaskForm.getData();
            task.create(taskData);
        });
    }
    const loadProjects = () => {
        const projectSelection = document.querySelector('#project');
        project.all().forEach(project => {
            const option = document.createElement('option');
            option.value = project.id;
            option.innerHTML = project.title;
            projectSelection.appendChild(option);     
        });
    }
    return {showHide, getData, addTask, loadProjects};
})();

function capitalize (string) {
    const formatedString = string.slice(0,1).toUpperCase().concat(string.slice(1));
    return formatedString
}

function hashtag (string) {
    return string.split(' ').join('').toLowerCase();
}
// Generates IDs for tasks and projects
function generateId (type) {
    let id = undefined;
    if (type === 'task') {
        id = 'T' + (task.all().length + 1).toString().padStart(4,'0');
    } else if (type === 'project'){
        id = 'P' + (project.all().length + 1).toString().padStart(4,'0');
    }
    return id
}

const screen = (function () {
    const loadTasks = (keyword = 'all') => {
        screen.cleanTasks();

        const tasksSection = document.querySelector('#tasks');
        const tasksList = (keyword === 'all') ? task.all() : task.filter(keyword);
        const today = new Date().toDateString();
        const format = {weekday: 'long', month: 'short', day: 'numeric'};
        if (task.filter(keyword, 'notdone').length === 0) {
            screen.emptyMessage();
        }
        for (let i = 0; i < tasksList.length; i++) {
            if (i === 0 || tasksList[i].dueDate.toDateString() !== tasksList[i-1].dueDate.toDateString()) {
                const date = document.createElement('h1');
                if (tasksList[i].dueDate.toDateString() === today) {
                    date.textContent = 'Today';
                } else {
                    date.textContent = tasksList[i].dueDate.toLocaleDateString('en-us',format)
                };
            tasksSection.appendChild(date);
            }
            const container = document.createElement('div');
            const taskTitle = document.createElement('p');
            const priority = document.createElement('span');
            const checkDone = document.createElement('input');
            const details = document.createElement('div');
            const description = document.createElement('p');
            container.classList.add('task');
            container.setAttribute('id', tasksList[i].id);
            checkDone.setAttribute('type', 'checkbox');
            checkDone.addEventListener('change', (event) => {
                container.classList.toggle('done');
                task.toggleDone(event.target.parentNode.id);
                saveLocal('tasks', task.all());
            });
            taskTitle.textContent = tasksList[i].title;
            taskTitle.addEventListener('click', () => {
                details.classList.toggle('hide');
            });
            if (tasksList[i].isDone) {
                checkDone.checked = true;
                container.classList.toggle('done');
            }
            details.classList.add('details', 'hide');
            if (tasksList[i].description !== '') {
                description.textContent = tasksList[i].description;
            } else {
                description.textContent = 'There is no description for this task';
            }
            details.append(description);
            tasksList[i].projects.forEach(item => {
                const relatedProject = document.createElement('span');
                relatedProject.textContent = `#${hashtag(item.title)}`;
                details.appendChild(relatedProject);
            });
            priority.classList.add('priority', tasksList[i].priority);
            priority.textContent = `#${tasksList[i].priority}`;
            const editIcon = document.createElement('span');
            editIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"/></svg>';
            editIcon.classList.add('hide');
            container.append(checkDone, taskTitle, priority, editIcon, details);
            tasksSection.append(container);
        }

    }
    const loadMenu = () => {
        const projectItens = document.querySelector('.sub.list');
        const newProjectBtn = document.querySelector('#newProjectBtn');
        const addProjectBtn = document.querySelector('#addProjectBtn');
        const newProjectForm = document.querySelector('.newProjectForm');
        project.all().forEach(entry => {
            projectItens.innerHTML += `<li id="${entry.id}">${entry.title} <span></span></li>`
        });
        const menuItens = document.querySelectorAll('.list li');
        menuItens.forEach(item => {
            if (item.firstElementChild.matches('span')) {
                item.addEventListener('click', () => {
                    document.querySelector('h1.title').textContent = item.innerText;
                    screen.loadTasks(item.id);
                });
                item.firstElementChild.textContent = `(${task.filter(item.id, 'notdone').length})`;
            };
        });
        newProjectBtn.addEventListener('click', () => {
            newProjectForm.classList.toggle('hide');
            document.querySelector('#name').focus();
        })
        addProjectBtn.addEventListener('click', () => {
            const name = document.querySelector('#name').value;
            project.create(name);
        });
    }
    const cleanTasks = () => {
        document.querySelector('#tasks').replaceChildren();
    }
    const emptyMessage = (keyword) => {
        const taskSection = document.querySelector('section#tasks');
        const msg = document.createElement('p');
        msg.textContent = 'Congratulations! You woofed all your tasks!';
        msg.classList.add('message');
        const img = new Image();
        img.src = emptyImage;
        taskSection.append(msg, img);
    }
    return {loadTasks, loadMenu, cleanTasks, emptyMessage}
})();

// Attribute the functionalities to the forms buttons
newTaskForm.showHide(document.querySelector('#addTaskBtn'));
newTaskForm.showHide(document.querySelector('#cancelBtn'));
newTaskForm.addTask(document.querySelector('#addBtn'));

// Load existing projects to the list option
newTaskForm.loadProjects();
screen.loadTasks();
screen.loadMenu();



