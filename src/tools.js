import {task, project} from './objects.js';

export function capitalize (words) {
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

export function hashtag (string) {
    return string.split(' ').join('').toLowerCase();
}
// Generates IDs for tasks and projects
export function generateId (type) {
    let id = undefined;
    if (type === 'task') {
        id = 'T' + (task.all().length + 1).toString().padStart(4,'0');
    } else if (type === 'project'){
        id = 'P' + (project.all().length + 1).toString().padStart(4,'0');
    }
    return id
}