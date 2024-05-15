import './index.css';
import emptyImage from './empty.jpg';
import { saveLocal, getLocal } from './webstorage.js';
import { startOfDay, isToday, isTomorrow, isBefore, isThisWeek, isThisMonth } from "date-fns";

const task = (function() {
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

const taskForm = (function () {
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

function capitalize (words) {
    let formatedString;
    if (typeof words === 'string') {
        formatedString = words.slice(0,1).toUpperCase().concat(words.slice(1));
    }  else if (typeof words === 'object') {
        formatedString = [];
        words.forEach(word => {
            formatedString.push(capitalize(word));
        })
    }
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
    const loadTasks = (keyword = 'all-tasks') => {
        screen.cleanTasks();

        const tasksSection = document.querySelector('#tasks');
        const pageTitle = document.querySelector('h1.title');
        pageTitle.setAttribute('data-keyword', keyword);
        const deleteProj = document.querySelector('#delete-project');
        if (keyword.match(/P\d\d\d\d/i)) {
            deleteProj.className = '';
            deleteProj.onclick = () => {
                project.remove(keyword);
                screen.loadMenu();
                screen.loadTasks();
            };
            const [{ title: titleName}] = project.find(keyword);
            pageTitle.textContent = titleName + ' (' + task.filter(keyword, 'notdone').length + ')';
        } else {
            deleteProj.className = 'hide';
            pageTitle.textContent = capitalize(keyword.split('-')).join(' ') + ' (' + task.filter(keyword, 'notdone').length + ')';
        }
        

        const tasksList = (keyword === 'all-tasks') ? task.all() : task.filter(keyword);
        const format = {weekday: 'long', month: 'short', day: 'numeric'};
        if (task.filter(keyword, 'notdone').length === 0) {
            screen.emptyMessage();
        }
        for (let i = 0; i < tasksList.length; i++) {
            if (i === 0 || tasksList[i].dueDate.toDateString() !== tasksList[i-1].dueDate.toDateString()) {
                const date = document.createElement('h2');
                if (isToday(tasksList[i].dueDate)) {
                    date.textContent = 'Today';
                } else if (isTomorrow(tasksList[i].dueDate)) {
                    date.textContent = 'Tomorrow';
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
                screen.loadTasks(pageTitle.dataset.keyword);
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
                description.textContent = 'You can add a description here';
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
            editIcon.addEventListener('click', (event) => {
                const taskId = event.target.closest('.task').id;
                taskForm.open('edit',task.filter(taskId));
            });
            container.append(checkDone, taskTitle, priority, editIcon, details);
            tasksSection.append(container);
        }

    }
    const loadMenu = () => {
        const projectItens = document.querySelector('.sub.list');
        const newProjectBtn = document.querySelector('#newProjectBtn');
        const addProjectBtn = document.querySelector('#addProjectBtn');
        const newProjectForm = document.querySelector('.newProjectForm');
        
        projectItens.textContent = '';
        project.all().forEach(entry => {
            projectItens.innerHTML += `<li id="${entry.id}">${entry.title} <span></span></li>`
        });
        const menuItens = document.querySelectorAll('.list li');
        menuItens.forEach(item => {
            if (item.firstElementChild.matches('span')) {
                item.addEventListener('click', () => {
                    screen.loadTasks(item.id);
                    toggleFilters();
                });
                item.firstElementChild.textContent = `(${task.filter(item.id, 'notdone').length})`;
            };
        });
        newProjectBtn.onclick = () => {
            newProjectForm.classList.toggle('hide');
            document.querySelector('#name').focus();
        }
        addProjectBtn.onclick = () => {
            const name = document.querySelector('#name').value;
            if (name !== '') {
                project.create(name);
                document.querySelector('form.newProjectForm').reset();
                screen.loadMenu();
            }
        }

        function toggleFilters () {
            if (window.innerWidth < 570) {
                document.querySelectorAll('.filters ul').forEach(item => {
                    if (item.style.display === 'none' || item.style.display === '') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                })
            }
        }
        const filterBtn = document.querySelector('aside h3');
        filterBtn.onclick = () => toggleFilters();

    }
    const cleanTasks = () => {
        document.querySelector('#tasks').replaceChildren();
    }
    const emptyMessage = (keyword) => {
        const taskSection = document.querySelector('section#tasks');
        const msg = document.createElement('p');
        msg.textContent = 'Congratulations! You woofed all your tasks from this list!';
        msg.classList.add('message');
        const img = new Image();
        img.src = emptyImage;
        taskSection.append(msg, img);
    }
    const editTask = () => {
    }
    return {loadTasks, loadMenu, cleanTasks, emptyMessage}
})();

// Load existing projects to the list option
taskForm.loadProjects();
screen.loadTasks();
screen.loadMenu();



