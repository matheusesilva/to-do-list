import {task, project, taskForm} from './objects.js';
import emptyImage from './empty.jpg';
import { saveLocal} from './webstorage.js';
import { isToday, isTomorrow } from "date-fns";
import { capitalize, hashtag } from './tools.js';

export const screen = (function() {
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
    return {loadTasks, loadMenu, cleanTasks, emptyMessage}
})();