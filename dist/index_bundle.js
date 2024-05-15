(()=>{"use strict";var n={523:(n,e,t)=>{t.d(e,{A:()=>l});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);"]),i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap);"]),i.push([n.id,":root {\n    --strong-orange: #f76e11;\n    --mid-orange: #ff9f45;\n    --light-orange: #ffbc80;\n    --red: #fc4f4f;\n    --heading-font: \"Nunito Sans\", sans-serif;\n    --text-font: \"Nunito\", sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100%;\n    min-height: 100dvh;\n    display: flex;\n    margin: 0;\n    padding: 0;\n    font-family: var(--text-font);\n    color: #222222;\n    >div {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        align-items: center;\n    }\n}\n\ninput, label, textarea, select {\n    height: 40px;\n    vertical-align: center;\n    appearance: none;\n    font-family: var(--text-font);\n    margin:0;\n    background-color: white;\n    vertical-align: middle;\n\tborder: 1px solid var(--mid-orange);\n\tpadding:0.25em 0.5em;\n\tline-height:1;\n\tfont-size:17px;\n    border-radius: 7px;\n    &:focus {\n        outline: 2px solid var(--light-orange);\n    }\n}\n\nbutton {\n    font-family: var(--text-font);\n    &:active {\n        transform: translateY(3px);\n    }\n    &:hover {\n        outline: 2px solid var(--light-orange);\n    }\n}\n\ndialog {\n    border: none;\n    background: transparent;\n    max-width: 100%;\n    padding: 0;\n    &::backdrop {\n        background: hsla(0, 0%, 0%, 0.2);\n    }\n}\n\n.task-form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    padding: 30px;\n    border-radius: 10px;\n    gap: 0.5em;\n    background-color: var(--light-orange);\n    background: linear-gradient(135deg, var(--strong-orange) 0%, var(--mid-orange) 70%);\n    border: solid 2px var(--mid-orange); \n    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n    &:hover {\n        border: solid 2px var(--red); \n    }\n    button {\n        border: solid 1px var(--mid-orange);\n        border-radius: 5px;\n        height: 40px;\n        font-weight: bold;\n        font-size: 18px;\n        color: white;\n        background-color: var(--red);\n    }\n    #submit, #delete-btn {\n    }\n    #cancel-btn {\n        height: 25px;\n        width: 25px;\n        padding: 0;\n        line-height: 1px;\n        align-self: end;\n    }\n    label:has(input[type=checkbox]) {\n        display: flex;\n        align-items: center;\n        background-color: transparent;\n    }\n    label[for=project] {\n        height: max-content;\n        display: flex;\n        flex-direction: column;\n        padding: 10px;\n        background-color: white;\n        line-height: 1.3em;\n        button {\n            background-color: var(--mid-orange);\n        }\n        div {\n            display: flex;\n            margin-top: 10px;\n            gap: 10px;\n            input {\n                width: 100%;\n            }\n        }\n    }\n    input[type=checkbox] {\n        margin: 0 5px;\n        width: 1em;\n        height: 1em;\n        position: relative;\n        &:checked::before {\n            content: '✓';\n            font-weight: bold;\n            position: absolute;\n            color: var(--strong-orange);\n            left: 2px;\n            top: -9px;\n            font-size: 1.5em;\n        }\n    }\n    select {\n        &#project {\n            height: 80px;\n            margin: 10px 0;\n            overflow-y: scroll;\n        }\n        &#priority {\n            appearance: auto;\n            padding-left: 5px;\n        }\n        &:focus option:checked, option:checked {\n            background-color: var(--light-orange);\n        }\n    }\n    textarea {\n        padding: 0.4em 0.5em;\n        line-height: 1.4em;\n        height: 100px;\n    }\n    label {\n        border: none;\n        background-color: var(--light-orange);\n    }\n}\n\n.hide {\n    display: none;\n}\n\n.task {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    margin: 20px 10px;\n    padding: 8px;\n    gap: 10px;\n    border: 1px dotted var(--light-orange);\n    input[type=checkbox] {\n        width: 20px;\n        height: 20px;\n        position: relative;\n        &:checked::before {\n            content: '✓';\n            position: absolute;\n            color: var(--strong-orange);\n            left: 2px;\n            top: -12px;\n            font-size: 2em;\n        }\n        &:hover {\n            border: solid 2px var(--red);\n        }\n    }\n    p {\n        margin: 0;\n        font-size: 20px;\n        cursor: pointer;\n        flex: 1;\n        word-wrap: break-word;\n        width: 100px;\n        line-height: 35px;\n    }\n    &.done p {\n        text-decoration: line-through;\n    }\n    .priority {\n        padding: 0 5px;\n        font-size: 17px;\n        font-weight: bold;\n        border-radius: 4px;\n        &.normal {\n            color: var(--mid-orange);\n            border: solid 1px var(--mid-orange);\n            box-shadow: 2px 2px 0px var(--mid-orange);\n        }\n        &.low {\n            color: var(--light-orange);\n            border: solid 1px var(--light-orange);\n            box-shadow: 2px 2px 0px var(--light-orange);\n        }\n        &.high {\n            color: var(--strong-orange);\n            border: solid 1px var(--strong-orange);\n            box-shadow: 2px 2px 0px var(--strong-orange);\n        }\n        &.urgent {\n            color: var(--red);\n            border: solid 1px var(--red);\n            box-shadow: 2px 2px 0px var(--red);\n        }\n\n    }\n    span:not(.priority) {\n        svg {\n            width: 20px;\n            height: 20px;\n            display: block;\n            pointer-events: none;\n        }\n        path {\n            fill: lightgray;\n            pointer-events: none;\n        }\n    }\n    &.done {\n        background-color: hsla(0, 0%, 75%, 0.1);\n    }\n    &:hover {\n        box-shadow: 1px 1px 5px #9191912e;\n    }\n}\n\ndiv.task span:hover path {\n    fill: var(--strong-orange);\n}\n\n\n.details {\n    border-top: 1px dotted var(--light-orange);\n    flex: none;\n    width: 100%;\n    padding: 0 20px 10px 20px;\n    p {\n        font-size: 18px;\n        width: calc(100% - 60px);\n        margin: 10px 10px;\n    }\n    span {\n        margin: 0 10px;\n        padding: 0.1em 0.5em;\n        font-size: 15px;\n        font-weight: bold;\n        border-radius: 4px;\n        border: solid 1px var(--mid-orange);\n        color: var(--mid-orange);\n    }\n}\n\nnav {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 25px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);\n    transform: translateZ(0);\n    h1 {\n        font-family: var(--heading-font);\n        font-size: 1.6em;\n        font-weight: 700;\n        margin: 0;\n    }\n    button {\n        width: fit-content;\n        vertical-align: center;\n        font-size: 20px;\n        font-weight: bold;\n        background-color: var(--red);\n        color: white;\n        border-radius: 5px;\n        border: none;\n        padding: 4px 15px;\n        margin: 0 5px;\n        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);\n    }\n}\n\naside {\n    min-width: max-content;\n    background-color: var(--strong-orange);\n    background: linear-gradient(45deg, var(--red) 0%, var(--strong-orange) 45%);\n    color: white;\n    padding: 25px;\n    .app-name {\n        color: white;\n        font-family: var(--heading-font);\n        font-size: 2em;\n        font-weight: bold;\n        height: 54px;\n        margin: 0;\n        text-align: center;\n        span {\n            text-shadow: 1px 1px var(--light-orange);\n            font-weight: 900;\n        }\n    }\n    .list {\n        font-size: 20px;\n    }\n    .filters>.list {\n        list-style: none;\n        margin-top: 35px;\n        margin-bottom: 35px;\n        padding: 0;\n        font-weight: bold;\n        li {\n            margin: 3px 0;\n            &:has(span){\n                cursor: pointer;\n                &:hover {\n                    text-decoration: var(--light-orange) wavy underline;\n                }\n            }\n        }\n        span {\n            font-weight: 400;\n        }\n    }\n    .sub.list {\n        list-style: none;\n        font-weight: 400;\n        padding: 0 20px;\n        height: 40vh;\n        overflow-y: scroll;\n        &::-webkit-scrollbar {\n            width: 5px;\n            background-color: transparent;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-color: var(--light-orange);\n            border-radius: 2px;\n        }\n    }\n    #newProjectBtn {\n        border: none;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        background-color: white;\n        color: var(--strong-orange);\n        font-weight: bolder;\n        font-size: 22px;\n        padding: 0;\n        margin: 0 5px;\n        line-height: 20px;\n        vertical-align: middle;\n    }\n    form {\n        margin: 10px 0;\n        input {\n           width: 90px;\n           height: 30px;\n        }\n        button {\n            background-color: var(--strong-orange);\n            color: white;\n            border: solid 1px white;\n            font-weight: bold;\n            height: 30px;\n            border-radius: 7px;\n        }\n    }\n}\n\nmain {\n    padding: 15px;\n    background-color: white;\n    padding: 15px clamp(10vw, 100px, 20vw);\n    background-color: white;\n    width: 100%;\n    max-height: calc(100dvh - 84px);\n    overflow-y: scroll;\n    h2 {\n        font-family: var(--heading-font);\n        color: var(--strong-orange);\n        font-size: 1.4em;\n    }\n}\n\nfooter {\n}\n\nsection:has(img) {\n    .message {\n        text-align: center;\n        font-weight: 600;\n        font-size: clamp(20px, 1.5vw, 30px);\n    }\n    img {\n        width: 80%;\n        min-width: 200px;\n        max-width: 350px;\n        align-self: center;\n    }\n    display: flex;\n    flex-direction: column;\n}\nsection:not(:has(.task)) {\n    margin-top: 15vh;\n}\n\n@media screen and (max-width: 570px) {\n    body {\n        position: relative;\n        display: block;\n    }\n    aside {\n        padding: 15px 25px;\n        .app-name {\n            text-align: left;\n        }\n        .filters {\n            margin: 0 30px;\n            h3 {\n                margin: 0;\n                line-height: 84px;\n                position: absolute;\n                right: 25px;\n                top: 0px;\n            }\n            ul {\n                display: none;\n                margin: 20px;\n            }\n        } \n        form input {\n            width: 60%;\n        }\n    }\n    main {\n        width: 100%;\n        max-height: calc(100dvh - 200px);\n        overflow-y: scroll;\n        padding: 15px;\n    }\n    section h2:nth-child(1) {\n        margin-top: 0px;\n    }\n    .task-form {\n        margin: 20px;\n    }\n    nav h1 {\n        font-size: 1.2em;\n    }\n}\n\n",""]);const l=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],l=0;l<n.length;l++){var c=n[l],s=o.base?c[0]+o.base:c[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=t(p),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var h=r(g,o);o.byIndex=l,e.splice(l,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var l=t(a[i]);e[l].references--}for(var c=o(n,r),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),l=t(56),c=t.n(l),s=t(540),d=t.n(s),p=t(113),u=t.n(p),g=t(523),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(g.A,h),g.A&&g.A.locals&&g.A.locals;const f=t.p+"bcb146f12388f181d5c9.jpg";function m(n){let e;try{e=window[n];const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(n){return n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&e&&0!==e.length}}function x(n,e){m("localStorage")&&localStorage.setItem(n,JSON.stringify(e))}function v(n){if(m("localStorage")){let e=JSON.parse(localStorage.getItem(n));return"tasks"===n&&null!==e&&(e=e.map((n=>({...n,dueDate:new Date(n.dueDate)})))),e}}function b(n){const e=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===e?new n.constructor(+n):"number"==typeof n||"[object Number]"===e||"string"==typeof n||"[object String]"===e?new Date(n):new Date(NaN)}function y(n){const e=b(n);return e.setHours(0,0,0,0),e}function w(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}function k(n){return w(n,Date.now())}function S(n,e){return+y(n)==+y(e)}function D(n){return S(n,k(n))}let j={};function E(){return j}function q(n,e){const t=E(),o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,r=b(n),a=r.getDay(),i=(a<o?7:0)+a-o;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function T(n,e){return function(n,e,t){return+q(n,t)==+q(e,t)}(n,k(n),e)}function C(n){return function(n,e){const t=b(n),o=b(e);return t.getFullYear()===o.getFullYear()&&t.getMonth()===o.getMonth()}(n,k(n))}function L(n){return S(n,function(n,e){const t=b(n);return isNaN(e)?w(n,NaN):e?(t.setDate(t.getDate()+e),t):t}(k(n),1))}const M=function(){let n=[];return null!==v("tasks")&&(n=v("tasks")),{create:e=>{const t={id:P("task"),title:e.title,description:e.description,dueDate:y(new Date(e.dueDate+" EDT")),priority:e.priority,isDone:e.isDone,projects:N.find(e.projects)};return n.push(t),x("tasks",M.all()),A.close(),O.loadMenu(),O.loadTasks(),t},all:e=>{let t;return"done"===e?(t=n.filter((n=>n.isDone)),t.sort(((n,e)=>n.dueDate-e.dueDate))):"notdone"===e?(t=n.filter((n=>!n.isDone)),t.sort(((n,e)=>n.dueDate-e.dueDate))):t=n.sort(((n,e)=>n.dueDate-e.dueDate)),t},remove:e=>{const t=M.all().findIndex((n=>n.id===e));n.splice(t,1),x("tasks",M.all()),A.close(),O.loadTasks()},filter:(n,e="all")=>{let t;const o=y(new Date);switch(n){case"all-tasks":t=M.all(e);break;case"overdue":t=M.all(e).filter((n=>{return e=n.dueDate,t=o,+b(e)<+b(t);var e,t}));break;case"today":t=M.all(e).filter((n=>D(n.dueDate)));break;case"this-week":t=M.all(e).filter((n=>T(n.dueDate)));break;case"this-month":t=M.all(e).filter((n=>C(n.dueDate)));break;default:const r=/T\d\d\d\d/i;/P\d\d\d\d/i.test(n)?t=M.all(e).filter((e=>{for(let t of e.projects)if(t.id===n)return!0;return!1})):r.test(n)&&(t=M.all().find((e=>e.id===n)))}return t},toggleDone:e=>{n.forEach((n=>{n.id===e&&(n.isDone=!0!==n.isDone)}))},edit:e=>{n.forEach((n=>{if(n.id===e.id){const t=y(new Date(e.dueDate+" EDT")),o=N.find(e.projects);Object.assign(n,e,{dueDate:t},{projects:o}),x("tasks",M.all()),A.close(),O.loadTasks()}}))},removeProject:e=>{n.forEach((n=>{for(let t=0;t<n.projects.length;t++)n.projects[t].id===e&&(n.projects.splice(t,1),t--)})),x("tasks",M.all())}}}(),N=function(){let n=[];return null!==v("projects")&&(n=v("projects")),{create:e=>{const t=P("project"),o=[],r={id:t,title:e,getTasks:()=>o,toggleTask:function(n){o.includes(n)?o.splice(o.indexOf(n),1):o.push(n)}};return n.push(r),A.loadProjects(),x("projects",N.all()),console.log(`Project ${t} was added`),r},all:()=>n,count:()=>n.length,remove:e=>{console.log(e);const t=N.all().findIndex((n=>n.id=e));console.log(t),n.splice(t,1),M.removeProject(e),x("projects",N.all())},names:()=>{let n=[];return Object.values(N.all()).map((e=>{n.push(e.title)})),n},find:n=>{let e=[];function t(n){return N.all().find((e=>e.id===n))}switch(typeof n){case"string":e.push(t(n));break;case"object":n.forEach((n=>e.push(t(n))))}return e}}}(),A=function(){const n=document.querySelector("form.task-form"),e=document.querySelector("dialog"),t=document.querySelector("#new-btn"),o=document.querySelector("#cancel-btn"),r=document.querySelector("#delete-btn"),a=document.querySelector("label[for=project] button"),i=(n,t)=>{A.loadProjects();const o=document.querySelector("#submit");switch(n){case"add":o.textContent="Add",r.className="hide",o.onclick=()=>M.create(A.getData());break;case"edit":A.loadData(t),o.textContent="Save",r.className="",o.onclick=()=>M.edit(A.getData())}e.showModal()},l=()=>{n.reset(),e.close()};return t.addEventListener("click",(()=>i("add"))),o.addEventListener("click",l),r.addEventListener("click",(()=>{const n=document.querySelector("#task-id").value;M.remove(n)})),a.onclick=()=>{const n=document.querySelector("label[for=project] input");if(""!==n){const e=N.create(n.value);document.querySelectorAll("#project option").forEach((n=>{n.value===e.id&&(n.selected=!0,n.scrollIntoView())})),n.value=""}},{getData:()=>{const n=document.querySelector("#task-id").value,e=z(document.querySelector("#title").value),t=document.querySelector("#dueDate").value,o=document.querySelector("#priority").value,r=z(document.querySelector("#description").value),a=document.querySelector("#isDone").checked,i=[];return document.querySelectorAll("#project option").forEach((n=>{!0===n.selected&&i.push(n.value)})),{id:n,title:e,dueDate:t,priority:o,projects:i,description:r,isDone:a}},loadProjects:()=>{const n=document.querySelector("#project");n.innerHTML="",N.all().forEach((e=>{const t=document.createElement("option");t.value=e.id,t.innerHTML=e.title,n.appendChild(t)}))},loadData:n=>{document.querySelector("#task-id").value=n.id,document.querySelector("#title").value=n.title,document.querySelector("#dueDate").value=n.dueDate.toLocaleDateString(),document.querySelector("#priority").value=n.priority,document.querySelector("#description").value=n.description,document.querySelector("#isDone").checked=n.isDone,document.querySelectorAll("#project option").forEach((n=>{n.selected=!1})),n.projects.forEach((n=>{const e=`option[value=${n.id}]`;document.querySelector(e).selected=!0}))},open:i,close:l}}();function z(n){let e;return"string"==typeof n?e=n.slice(0,1).toUpperCase().concat(n.slice(1)):"object"==typeof n&&(e=[],n.forEach((n=>{e.push(z(n))}))),e}function P(n){let e;return"task"===n?e="T"+(M.all().length+1).toString().padStart(4,"0"):"project"===n&&(e="P"+(N.all().length+1).toString().padStart(4,"0")),e}const O={loadTasks:(n="all-tasks")=>{O.cleanTasks();const e=document.querySelector("#tasks"),t=document.querySelector("h1.title");t.setAttribute("data-keyword",n);const o=document.querySelector("#delete-project");if(n.match(/P\d\d\d\d/i)){o.className="",o.onclick=()=>{N.remove(n),O.loadMenu(),O.loadTasks()};const[{title:e}]=N.find(n);t.textContent=e+" ("+M.filter(n,"notdone").length+")"}else o.className="hide",t.textContent=z(n.split("-")).join(" ")+" ("+M.filter(n,"notdone").length+")";const r="all-tasks"===n?M.all():M.filter(n),a={weekday:"long",month:"short",day:"numeric"};0===M.filter(n,"notdone").length&&O.emptyMessage();for(let n=0;n<r.length;n++){if(0===n||r[n].dueDate.toDateString()!==r[n-1].dueDate.toDateString()){const t=document.createElement("h2");D(r[n].dueDate)?t.textContent="Today":L(r[n].dueDate)?t.textContent="Tomorrow":t.textContent=r[n].dueDate.toLocaleDateString("en-us",a),e.appendChild(t)}const o=document.createElement("div"),i=document.createElement("p"),l=document.createElement("span"),c=document.createElement("input"),s=document.createElement("div"),d=document.createElement("p");o.classList.add("task"),o.setAttribute("id",r[n].id),c.setAttribute("type","checkbox"),c.addEventListener("change",(n=>{o.classList.toggle("done"),M.toggleDone(n.target.parentNode.id),x("tasks",M.all()),O.loadTasks(t.dataset.keyword)})),i.textContent=r[n].title,i.addEventListener("click",(()=>{s.classList.toggle("hide")})),r[n].isDone&&(c.checked=!0,o.classList.toggle("done")),s.classList.add("details","hide"),""!==r[n].description?d.textContent=r[n].description:d.textContent="You can add a description here",s.append(d),r[n].projects.forEach((n=>{const e=document.createElement("span");var t;e.textContent=`#${t=n.title,t.split(" ").join("").toLowerCase()}`,s.appendChild(e)})),l.classList.add("priority",r[n].priority),l.textContent=`#${r[n].priority}`;const p=document.createElement("span");p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"/></svg>',p.addEventListener("click",(n=>{const e=n.target.closest(".task").id;A.open("edit",M.filter(e))})),o.append(c,i,l,p,s),e.append(o)}},loadMenu:()=>{const n=document.querySelector(".sub.list"),e=document.querySelector("#newProjectBtn"),t=document.querySelector("#addProjectBtn"),o=document.querySelector(".newProjectForm");function r(){window.innerWidth<570&&document.querySelectorAll(".filters ul").forEach((n=>{"none"===n.style.display||""===n.style.display?n.style.display="block":n.style.display="none"}))}n.textContent="",N.all().forEach((e=>{n.innerHTML+=`<li id="${e.id}">${e.title} <span></span></li>`})),document.querySelectorAll(".list li").forEach((n=>{n.firstElementChild.matches("span")&&(n.addEventListener("click",(()=>{O.loadTasks(n.id),r()})),n.firstElementChild.textContent=`(${M.filter(n.id,"notdone").length})`)})),e.onclick=()=>{o.classList.toggle("hide"),document.querySelector("#name").focus()},t.onclick=()=>{const n=document.querySelector("#name").value;""!==n&&(N.create(n),document.querySelector("form.newProjectForm").reset(),O.loadMenu())},document.querySelector("aside h3").onclick=()=>r()},cleanTasks:()=>{document.querySelector("#tasks").replaceChildren()},emptyMessage:n=>{const e=document.querySelector("section#tasks"),t=document.createElement("p");t.textContent="Congratulations! You woofed all your tasks from this list!",t.classList.add("message");const o=new Image;o.src=f,e.append(t,o)}};A.loadProjects(),O.loadTasks(),O.loadMenu()})()})();