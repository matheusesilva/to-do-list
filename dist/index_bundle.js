(()=>{"use strict";var n={523:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap);"]),i.push([n.id,":root {\n    --strong-orange: #f76e11;\n    --mid-orange: #ff9f45;\n    --light-orange: #ffbc80;\n    --red: #fc4f4f;\n    --heading-font: \"Nunito Sans\", sans-serif;\n    --text-font: \"Nunito\", sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    font-family: var(--text-font);\n    color: #222222;\n    >div {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        align-items: center;\n    }\n}\n\ninput, label, textarea, select {\n    height: 28px;\n    vertical-align: center;\n    appearance: none;\n    font-family: var(--text-font);\n    margin:0;\n    background-color: white;\n    vertical-align: middle;\n\tborder: 1px solid var(--mid-orange);\n\tpadding:0.25em 0.5em;\n\tline-height:1;\n\tfont-size:17px;\n    border-radius: 4px;\n    &:focus {\n        outline: 2px solid var(--light-orange);\n    }\n}\n\nbutton {\n    font-family: var(--text-font);\n    &:active {\n        transform: translateY(3px);\n    }\n    &:hover {\n        outline: 2px solid var(--light-orange);\n    }\n}\n\n.newTaskForm {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    padding: 30px;\n    border-radius: 10px;\n    gap: 0.5em;\n    background-color: var(--light-orange);\n    background: linear-gradient(135deg, var(--strong-orange) 0%, var(--mid-orange) 70%);\n    border: solid 2px var(--mid-orange); \n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n    &:hover {\n        border: solid 2px var(--red); \n    }\n    button {\n        border: solid 1px var(--mid-orange);\n        border-radius: 5px;\n        height: 30px;\n        font-weight: bold;\n        font-size: 18px;\n    }\n    #addBtn {\n        color: white;\n        background-color: var(--red);\n        height: 40px;\n    }\n    #cancelBtn {\n        margin-top: 20px;\n        color: var(--strong-orange);\n        background-color: white;\n    }\n    label:has(input[type=checkbox]) {\n        display: flex;\n        align-items: center;\n        background-color: transparent;\n    }\n    input[type=checkbox] {\n        margin: 0 5px;\n        width: 1em;\n        height: 1em;\n        position: relative;\n        &:checked::before {\n            content: '✓';\n            font-weight: bold;\n            position: absolute;\n            color: var(--strong-orange);\n            left: 2px;\n            top: -9px;\n            font-size: 1.5em;\n        }\n    }\n    textarea {\n        padding: 0.4em 0.5em;\n        line-height: 1.4em;\n        height: 84px;\n    }\n    label {\n        border: none;\n        background-color: var(--light-orange);\n    }\n}\n\n\n.hide {\n    display: none;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    margin: 10px;\n    input[type=checkbox] {\n        width: 20px;\n        height: 20px;\n        position: relative;\n        &:checked::before {\n            content: '✓';\n            position: absolute;\n            color: var(--strong-orange);\n            left: 2px;\n            top: -12px;\n            font-size: 2em;\n        }\n    }\n    p {\n        font-size: 20px;\n        cursor: pointer;\n        flex: 1;\n        margin: 0 10px;\n        word-wrap: break-word;\n        width: 200px;\n    }\n    &.done p {\n        text-decoration: line-through;\n    }\n    .priority {\n        padding: 0 5px;\n        font-size: 17px;\n        font-weight: bold;\n        border-radius: 4px;\n        &.normal {\n            color: var(--mid-orange);\n            border: solid 1px var(--mid-orange);\n            box-shadow: 2px 2px 0px var(--mid-orange);\n        }\n        &.low {\n            color: var(--light-orange);\n            border: solid 1px var(--light-orange);\n            box-shadow: 2px 2px 0px var(--light-orange);\n        }\n        &.high {\n            color: var(--strong-orange);\n            border: solid 1px var(--strong-orange);\n            box-shadow: 2px 2px 0px var(--strong-orange);\n        }\n        &.urgent {\n            color: var(--red);\n            border: solid 1px var(--red);\n            box-shadow: 2px 2px 0px var(--red);\n        }\n\n    }\n    &:hover span {\n        display: inline;\n        svg {\n            width: 20px;\n            height: 20px;\n        }\n        path {\n            fill: var(--strong-orange);\n        }\n        margin: 0 5px;\n    }\n}\n\n\n.details {\n    flex: none;\n    width: 100%;\n    padding: 0 20px;\n    p {\n        font-size: 18px;\n        width: calc(100% - 60px);\n        margin: 15px 10px;\n    }\n    span {\n        margin: 0 10px;\n        padding: 0.1em 0.5em;\n        font-size: 15px;\n        font-weight: bold;\n        border-radius: 4px;\n        border: solid 1px var(--mid-orange);\n        color: var(--mid-orange);\n    }\n}\n\nnav {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);\n    transform: translateZ(0);\n    h1 {\n        font-family: var(--heading-font);\n        font-size: 1.6em;\n        font-weight: 700;\n        margin: 0;\n    }\n    #addTaskBtn {\n        width: fit-content;\n        height: 34px;\n        vertical-align: center;\n        font-size: 20px;\n        font-weight: bold;\n        background-color: var(--red);\n        color: white;\n        border-radius: 5px;\n        border: none;\n        padding: 0 15px;\n        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);\n    }\n}\n\naside {\n    min-width: max-content;\n    background-color: var(--strong-orange);\n    background: linear-gradient(45deg, var(--red) 0%, var(--strong-orange) 45%);\n    color: white;\n    padding: 25px;\n    .app-name {\n        color: white;\n        font-family: var(--heading-font);\n        font-size: 2em;\n        font-weight: bold;\n        height: 54px;\n        margin: 0;\n        text-align: center;\n        span {\n            text-shadow: 1px 1px var(--light-orange);\n            font-weight: 900;\n        }\n    }\n    .list {\n        font-size: 22px;\n    }\n    .filters>.list {\n        list-style: none;\n        margin-top: 35px;\n        margin-bottom: 35px;\n        padding: 0;\n        font-weight: bold;\n        li {\n            margin: 3px 0;\n            &:has(span){\n                cursor: pointer;\n                &:hover {\n                    text-decoration: var(--light-orange) wavy underline;\n                }\n            }\n        }\n        span {\n            font-weight: 400;\n        }\n    }\n    .sub.list {\n        list-style: none;\n        font-weight: 400;\n        padding-left: 20px;\n    }\n    #newProjectBtn {\n        border: none;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        background-color: white;\n        color: var(--strong-orange);\n        font-weight: bolder;\n        font-size: 22px;\n        padding: 0;\n        margin: 0 5px;\n        line-height: 22px;\n        vertical-align: middle;\n    }\n    form {\n        margin: 10px 0;\n        input {\n           width: 90px;\n           height: 30px;\n        }\n        button {\n            background-color: var(--strong-orange);\n            color: white;\n            border: solid 1px white;\n            font-weight: bold;\n            height: 30px;\n            border-radius: 3px;\n        }\n    }\n}\n\nmain {\n    padding: 15px;\n    background-color: white;\n    width: clamp(350px, 60vw, 700px);\n    justify-self: center;\n    h2 {\n        font-family: var(--heading-font);\n        color: var(--strong-orange);\n        font-size: 1.4em;\n    }\n}\n\nfooter {\n}\n\nsection:has(img) {\n    .message {\n        text-align: center;\n        font-weight: 600;\n        font-size: clamp(20px, 1.5vw, 30px);\n    }\n    img {\n        width: 80%;\n        min-width: 200px;\n        max-width: 350px;\n        align-self: center;\n    }\n    display: flex;\n    flex-direction: column;\n    height: 70vh;\n}\nsection:not(:has(.task)) {\n    margin-top: 15vh;\n}\n\n@media screen and (max-width: 570px) {\n    body {\n        position: relative;\n        display: block;\n    }\n    aside {\n        padding: 15px 25px;\n        .app-name {\n            text-align: left;\n        }\n        .filters {\n            margin: 0 30px;\n            h3 {\n                margin: 0;\n                line-height: 84px;\n                position: absolute;\n                right: 25px;\n                top: 0px;\n            }\n            ul {\n                display: none;\n                margin: 20px;\n            }\n        } \n    }\n    main {\n        width: 100%;\n    }\n    section h2:nth-child(1) {\n        margin-top: 0px;\n    }\n    .newTaskForm {\n        margin: 20px;\n    }\n}\n\n",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=t(p),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var f=r(g,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=o(n,r),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),s=t(56),l=t.n(s),c=t(540),d=t.n(c),p=t(113),u=t.n(p),g=t(523),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(g.A,f),g.A&&g.A.locals&&g.A.locals;const h=t.p+"bcb146f12388f181d5c9.jpg";function m(n){let e;try{e=window[n];const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(n){return n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&e&&0!==e.length}}function x(n,e){m("localStorage")&&localStorage.setItem(n,JSON.stringify(e))}function v(n){if(m("localStorage")){let e=JSON.parse(localStorage.getItem(n));return"tasks"===n&&null!==e&&(e=e.map((n=>({...n,dueDate:new Date(n.dueDate)})))),e}}function b(n){const e=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===e?new n.constructor(+n):"number"==typeof n||"[object Number]"===e||"string"==typeof n||"[object String]"===e?new Date(n):new Date(NaN)}function w(n){const e=b(n);return e.setHours(0,0,0,0),e}function y(n){return function(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}(n,Date.now())}function k(n){return e=n,t=y(n),+w(e)==+w(t);var e,t}let D={};function S(){return D}function E(n,e){const t=S(),o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,r=b(n),a=r.getDay(),i=(a<o?7:0)+a-o;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function j(n,e){return function(n,e,t){return+E(n,t)==+E(e,t)}(n,y(n),e)}function T(n){return function(n,e){const t=b(n),o=b(e);return t.getFullYear()===o.getFullYear()&&t.getMonth()===o.getMonth()}(n,y(n))}const C=function(){let n=[];return null!==v("tasks")&&(n=v("tasks")),{create:e=>{const t=M("task"),o=e.title,r=e.description;console.log(e.dueDate);const a=w(new Date(e.dueDate+" EDT")),i=e.priority,s=e.isDone,l=[];if(""!==e.project){const n=L.all().find((n=>n.id===e.project));l.push(n)}const c={id:t,title:o,description:r,dueDate:a,priority:i,isDone:s,projects:l};return n.push(c),x("tasks",C.all()),console.log(C.all()),console.log(`Task ${t} was added to the list`),c},all:e=>{let t;return"done"===e?(t=n.filter((n=>n.isDone)),t.sort(((n,e)=>n.dueDate-e.dueDate))):"notdone"===e?(t=n.filter((n=>!n.isDone)),t.sort(((n,e)=>n.dueDate-e.dueDate))):t=n.sort(((n,e)=>n.dueDate-e.dueDate)),t},remove:e=>{const t=n.all().findIndex((n=>n.id=e));console.log(t),n.slice(t,1)},filter:(n,e="all")=>{let t;const o=w(new Date);switch(n){case"all":t=C.all(e);break;case"overdue":t=C.all(e).filter((n=>{return e=n.dueDate,t=o,+b(e)<+b(t);var e,t}));break;case"today":t=C.all(e).filter((n=>k(n.dueDate)));break;case"this-week":t=C.all(e).filter((n=>j(n.dueDate)));break;case"this-month":t=C.all(e).filter((n=>T(n.dueDate)));break;default:const r=/T\d\d\d\d/i;/P\d\d\d\d/i.test(n)?t=C.all(e).filter((e=>{for(let t of e.projects)if(t.id===n)return!0;return!1})):r.test(n)&&(t=C.all().find((e=>e.id===n)))}return t},toggleDone:e=>{n.forEach((n=>{n.id===e&&(n.isDone=!0!==n.isDone)}))}}}(),L=function(){let n=[];return null!==v("projects")&&(n=v("projects")),{create:e=>{const t=M("project"),o=[],r={id:t,title:e,getTasks:()=>o,toggleTask:function(n){o.includes(n)?o.splice(o.indexOf(n),1):o.push(n)}};return n.push(r),q.loadProjects(),x("projects",L.all()),console.log(`Project ${t} was added`),r},all:()=>n,count:()=>n.length,remove:e=>{const t=n.all().findIndex((n=>n.id=e));console.log(t),n.slice(t,1)},names:()=>{let n=[];return Object.values(L.all()).map((e=>{n.push(e.title)})),n}}}(),q={showHide:function(n){n.addEventListener("click",(()=>{document.querySelector(".newTaskForm").classList.toggle("hide")}))},getData:()=>({title:z(document.querySelector("#title").value),dueDate:document.querySelector("#dueDate").value,priority:document.querySelector("#priority").value,project:document.querySelector("#project").value,description:z(document.querySelector("#description").value),isDone:document.querySelector("#isDone").checked}),addTask:function(n){n.addEventListener("click",(()=>{const n=q.getData();C.create(n)}))},loadProjects:()=>{const n=document.querySelector("#project");L.all().forEach((e=>{const t=document.createElement("option");t.value=e.id,t.innerHTML=e.title,n.appendChild(t)}))}};function z(n){return n.slice(0,1).toUpperCase().concat(n.slice(1))}function M(n){let e;return"task"===n?e="T"+(C.all().length+1).toString().padStart(4,"0"):"project"===n&&(e="P"+(L.all().length+1).toString().padStart(4,"0")),e}const A={loadTasks:(n="all")=>{A.cleanTasks();const e=document.querySelector("#tasks"),t="all"===n?C.all():C.filter(n),o=(new Date).toDateString(),r={weekday:"long",month:"short",day:"numeric"};0===C.filter(n,"notdone").length&&A.emptyMessage();for(let n=0;n<t.length;n++){if(0===n||t[n].dueDate.toDateString()!==t[n-1].dueDate.toDateString()){const a=document.createElement("h2");t[n].dueDate.toDateString()===o?a.textContent="Today":a.textContent=t[n].dueDate.toLocaleDateString("en-us",r),e.appendChild(a)}const a=document.createElement("div"),i=document.createElement("p"),s=document.createElement("span"),l=document.createElement("input"),c=document.createElement("div"),d=document.createElement("p");a.classList.add("task"),a.setAttribute("id",t[n].id),l.setAttribute("type","checkbox"),l.addEventListener("change",(n=>{a.classList.toggle("done"),C.toggleDone(n.target.parentNode.id),x("tasks",C.all())})),i.textContent=t[n].title,i.addEventListener("click",(()=>{c.classList.toggle("hide")})),t[n].isDone&&(l.checked=!0,a.classList.toggle("done")),c.classList.add("details","hide"),""!==t[n].description?d.textContent=t[n].description:d.textContent="There is no description for this task",c.append(d),t[n].projects.forEach((n=>{const e=document.createElement("span");var t;e.textContent=`#${t=n.title,t.split(" ").join("").toLowerCase()}`,c.appendChild(e)})),s.classList.add("priority",t[n].priority),s.textContent=`#${t[n].priority}`;const p=document.createElement("span");p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"/></svg>',p.classList.add("hide"),a.append(l,i,s,p,c),e.append(a)}},loadMenu:()=>{const n=document.querySelector(".sub.list"),e=document.querySelector("#newProjectBtn"),t=document.querySelector("#addProjectBtn"),o=document.querySelector(".newProjectForm");L.all().forEach((e=>{n.innerHTML+=`<li id="${e.id}">${e.title} <span></span></li>`})),document.querySelectorAll(".list li").forEach((n=>{n.firstElementChild.matches("span")&&(n.addEventListener("click",(()=>{document.querySelector("h1.title").textContent=n.innerText,A.loadTasks(n.id)})),n.firstElementChild.textContent=`(${C.filter(n.id,"notdone").length})`)})),e.addEventListener("click",(()=>{o.classList.toggle("hide"),document.querySelector("#name").focus()})),t.addEventListener("click",(()=>{const n=document.querySelector("#name").value;L.create(n)})),document.querySelector("aside h3").addEventListener("click",(()=>{document.querySelectorAll(".filters>ul").forEach((n=>{"none"===n.style.display||""===n.style.display?n.style.display="initial":n.style.display="none"}))}))},cleanTasks:()=>{document.querySelector("#tasks").replaceChildren()},emptyMessage:n=>{const e=document.querySelector("section#tasks"),t=document.createElement("p");t.textContent="Congratulations! You woofed all your tasks from this list!",t.classList.add("message");const o=new Image;o.src=h,e.append(t,o)}};q.showHide(document.querySelector("#addTaskBtn")),q.showHide(document.querySelector("#cancelBtn")),q.addTask(document.querySelector("#addBtn")),q.loadProjects(),A.loadTasks(),A.loadMenu()})()})();