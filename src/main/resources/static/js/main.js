!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1);var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.on=function(e,o,n){return(t.events[e]||(t.events[e]=[])).push(o),t},this.off=function(e,o,n){void 0!==t.events[e]&&(t.events[e]=t.events[e].filter(function(e){return e.toString()!==o.toString()}))},this.dispatch=function(e,o){void 0!==t.events[e]&&t.events[e].forEach(function(e){e(o)})},this.events={}},r="__selected",i="__editing",l="__completed",a={UPDATE_LIST_TODO:"UPDATE_LIST_TODO",NEW_TODO:"NEW_TODO",EDIT_TODO:"EDIT_TODO",REMOVE_TODO:"REMOVE_TODO",MARK_ALL_TODO:"MARK_ALL_TODO",STOP_EDITING_ALL_TODO:"STOP_EDITING_ALL_TODO",CLEAR_COMPLETED:"CLEAR_COMPLETED",COUNT_ACTIVE_TODO:"COUNT_ACTIVE_TODO"},c="http://localhost:8080",d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};function s(e){return e.ok?e.text():e.json().then(function(e){throw Error(e.message)})}function u(e){return e?JSON.parse(e):{}}function f(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json; charset=utf-8",n={};return null!==o&&(n["Content-Type"]=o,n.Accept=o),fetch(e,d({headers:n},t)).then(s).then(u).catch(function(e){return console.log(e)})}var m={getTodos:function(){return f(c+"/todo",{method:"GET"})},addTodo:function(e){return f(c+"/todo/add",{method:"POST",body:e})},editTodo:function(e){return f(c+"/todo/update",{method:"PUT",body:JSON.stringify(e)})},removeTodo:function(e){return f(c+"/todo/delete/"+e.id,{method:"DELETE"})},markAllAs:function(e){return f(c+"/todo/mark?ready="+e,{method:"PUT"})},clearCompleted:function(){return f(c+"/todo/delete-completed",{method:"DELETE"})},countActive:function(){return f(c+"/todo/active",{method:"GET"})}};var h=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.getList=function(){return o.todos},o.getActiveTodos=function(){return o.activeTodos},o.updateListTodos=function(){return m.getTodos().then(function(e){o.todos=e,o.dispatch(a.UPDATE_LIST_TODO,e)})},o.addTodo=function(e){m.addTodo(e).then(function(e){o.updateListTodos().then(function(){o.dispatch(a.NEW_TODO,e)})})},o.editTodo=function(e){m.editTodo(e).then(function(e){o.updateListTodos().then(function(){o.dispatch(a.EDIT_TODO,e)})})},o.removeTodo=function(e){m.removeTodo(e).then(function(){o.updateListTodos().then(function(){o.dispatch(a.REMOVE_TODO,e)})})},o.markAllAs=function(e){m.markAllAs(e).then(function(){o.updateListTodos().then(function(){o.dispatch(a.MARK_ALL_TODO,e)})})},o.stopEditingAllTodos=function(e){o.dispatch(a.STOP_EDITING_ALL_TODO)},o.clearCompleted=function(){m.clearCompleted().then(function(){o.updateListTodos().then(function(){o.dispatch(a.CLEAR_COMPLETED)})})},o.countActive=function(){m.countActive().then(function(e){o.activeTodos=e,o.dispatch(a.COUNT_ACTIVE_TODO,e)})},o.todos=[],o.activeTodos=0,o.updateListTodos(),o.countActive(),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(n);var p=function e(t){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getList=function(){return o.model.getList()},this.getActiveTodos=function(){return o.model.getActiveTodos()},this.addTodo=function(e){o.model.addTodo(e)},this.removeTodo=function(e){o.model.removeTodo(e)},this.editTodo=function(e){o.model.editTodo(e)},this.clearCompleted=function(){o.model.clearCompleted()},this.markAllAs=function(e){o.model.markAllAs(e)},this.stopEditingAllTodos=function(){o.model.stopEditingAllTodos()},this.countActive=function(){return o.model.countActive()},this.model=t};var v=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.todoCreator=function(){var e=document.getElementsByClassName("todo-board")[0],t=document.createElement("form");t.className="todo-creator",e.appendChild(t);var o=document.createElement("button");o.className="todo-creator_check-all",o.setAttribute("aria-label","Check all items as done"),t.appendChild(o);var n=document.createElement("div");n.className="todo-creator_text-input-w";var r=document.createElement("input");return r.className="todo-creator_text-input",r.type="text",r.placeholder="What needs to be done?",r.setAttribute("aria-label","Input new todo text"),n.appendChild(r),t.appendChild(n),{root:t,checkAllBtn:o,textInput:r}},this.listOf=function(e){var o=document.createElement("div");o.className="todos-list",e.forEach(function(e){return o.appendChild(e.getRoot())});var n=t.toolBar(e.length);return{root:o,toolBar:n}},this.toolBar=function(e){var o=document.createElement("div");o.className="todos-toolbar";var n=document.createElement("div");n.className="todos-toolbar_unready-counter",n.appendChild(document.createTextNode(e+" items left")),o.appendChild(n);var r=document.createElement("button");r.className="todos-toolbar_clear-completed",r.setAttribute("aria-label","Clear completed"),r.appendChild(document.createTextNode("Clear completed")),o.appendChild(r);var i=t.filters();return o.appendChild(i),o},this.filters=function(){var e=document.createElement("div");e.className="filters todos-toolbar_filters";var t=document.createElement("button");t.className="filters_all todos-toolbar_filter __selected",t.setAttribute("aria-label","Filter: All, is selected"),t.appendChild(document.createTextNode("All")),e.appendChild(t);var o=document.createElement("button");o.className="filters_active todos-toolbar_filter",o.setAttribute("aria-label","Filter: Active"),o.appendChild(document.createTextNode("Active")),e.appendChild(o);var n=document.createElement("button");return n.className="filters_completed todos-toolbar_filter",n.setAttribute("aria-label","Filter: Completed"),n.appendChild(document.createTextNode("Completed")),e.appendChild(n),e},this.listItem=function(e){var o=document.createElement("div");o.className="todos-list_item "+(e.ready?l:"");var n=document.createElement("div");n.className="todos-list_item_view";var r=t.readyMarker(e.ready);n.appendChild(r);var i=t.removeBtn();n.appendChild(i);var a=t.viewText(e.text);n.appendChild(a),o.appendChild(n);var c=t.textInput(e.text);return o.appendChild(c),{root:o,readyMarker:r,removeBtn:i,viewText:a,textInput:c}},this.readyMarker=function(e){var t=document.createElement("div");t.className="custom-checkbox todos-list_item_view_ready-marker";var o=document.createElement("input");o.className="custom-checkbox_target",o.type="checkbox",o.checked=e,o.setAttribute("aria-label","Mark todo as ready"),t.appendChild(o);var n=document.createElement("div");n.className="custom-checkbox_visual";var r=document.createElement("div");return r.className="custom-checkbox_visual_icon",n.appendChild(r),t.appendChild(n),t},this.removeBtn=function(){var e=document.createElement("div");e.className="remove-btn todos-list_item_view_remove";var t=document.createElement("button");t.className="remove-btn_target",t.setAttribute("aria-label","Delete todo"),e.appendChild(t);var o=document.createElement("div");o.className="remove-btn_visual";var n=document.createElement("div");return n.className="remove-btn_visual_icon",o.appendChild(n),e.appendChild(o),e},this.viewText=function(e){var t=document.createElement("div");t.className="todos-list_item_view_text-w";var o=document.createElement("label");return o.className="todos-list_item_view_text",o.appendChild(document.createTextNode(e||"")),t.appendChild(o),o},this.textInput=function(e){var t=document.createElement("input");return t.className="todos-list_item_todo-edit",t.type="text",t.value=e,t.setAttribute("aria-label","Edit todo"),t}};var T=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=t.id,n=t.text,r=t.ready;this.id=o,this.text=n,this.ready=r};var E=function e(t,o){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.markAsReady=function(e){n.model.ready=e,n.elements.readyMarker.querySelector(".custom-checkbox_target").checked=e,e?n.getRoot().classList.add(l):n.getRoot().classList.remove(l)},this.updateText=function(e){n.elements.viewText.textContent="",n.elements.viewText.appendChild(document.createTextNode(e||"")),n.elements.textInput.value=e,n.getRoot().classList.remove(i)},this.startEditingTodo=function(){n.controller.stopEditingAllTodos(),n.getRoot().classList.add(i),n.elements.textInput.focus()},this.removeFromList=function(){n.getRoot().parentNode.removeChild(n.getRoot())},this.getRoot=function(){return n.elements.root},this.model=new T(t),this.controller=o,this.elements=v.listItem(t),this.elements.readyMarker.addEventListener("click",function(){n.model.ready=!n.model.ready,n.model.ready?n.getRoot().classList.add(l):n.getRoot().classList.remove(l),n.controller.stopEditingAllTodos(),n.controller.editTodo(n.model)}),this.elements.removeBtn.addEventListener("click",function(){return n.controller.removeTodo(n.model)}),this.elements.viewText.addEventListener("dblclick",function(){return n.startEditingTodo()}),this.elements.textInput.addEventListener("keydown",function(e){if(13===e.keyCode){var t=n.elements.textInput.value.trim();""!==t&&(n.model.text=t,n.updateText(t),n.controller.editTodo(n.model))}})};var _=function e(t,o){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.filterAll=function(){n.elements.toolBar.querySelectorAll(".todos-toolbar_filter").forEach(function(e){return e.classList.remove(r)}),n.elements.toolBar.querySelector(".filters_all").classList.add(r),n.children.forEach(function(e){return e.getRoot().style.display="block"})},this.filterActive=function(){n.elements.toolBar.querySelectorAll(".todos-toolbar_filter").forEach(function(e){return e.classList.remove(r)}),n.elements.toolBar.querySelector(".filters_active").classList.add(r),n.children.forEach(function(e){e.getRoot().style.display="block",e.model.ready&&(e.getRoot().style.display="none")})},this.filterCompleted=function(){n.elements.toolBar.querySelectorAll(".todos-toolbar_filter").forEach(function(e){return e.classList.remove(r)}),n.elements.toolBar.querySelector(".filters_completed").classList.add(r),n.children.forEach(function(e){e.getRoot().style.display="block",e.model.ready||(e.getRoot().style.display="none")})},this.addTodo=function(e){var t=new E(e,n.controller);if(0===n.children.length)n.getRoot().appendChild(t.getRoot());else{var o=n.children[n.children.length-1];o.getRoot().parentNode.insertBefore(t.getRoot(),o.getRoot().nextSibling)}n.children.push(t),n.filter(),n.controller.countActive(),n.stopEditingAllTodos()},this.editTodo=function(e){n.filter(),n.controller.countActive()},this.removeTodo=function(e){var t=n.children.map(function(e){return e.model.id}).indexOf(e.id);n.children[t].removeFromList(),n.children.splice(t,1),n.controller.countActive(),n.stopEditingAllTodos()},this.markAllAs=function(e){n.children.forEach(function(t){return t.markAsReady(e)}),n.filter(),n.controller.countActive(),n.stopEditingAllTodos()},this.clearCompleted=function(){n.children.forEach(function(e){e.model.ready&&e.removeFromList()}),n.children=n.children.filter(function(e){return!e.model.ready})},this.updateUnreadyCounter=function(e){var t=n.elements.toolBar.querySelector(".todos-toolbar_unready-counter");t.textContent="",t.appendChild(document.createTextNode(e+" items left"))},this.stopEditingAllTodos=function(){n.children.forEach(function(e){return e.getRoot().classList.remove(i)})},this.getRoot=function(){return n.elements.root},this.getToolBar=function(){return n.elements.toolBar},this.model=t,this.filter=this.filterAll,this.controller=o,this.children=o.getList().map(function(e){return new E(e,o)}),this.elements=v.listOf(this.children),this.updateUnreadyCounter(o.getActiveTodos()),t.on(a.NEW_TODO,function(e){return n.addTodo(e)}).on(a.EDIT_TODO,function(e){return n.editTodo(e)}).on(a.REMOVE_TODO,function(e){return n.removeTodo(e)}).on(a.CLEAR_COMPLETED,function(){return n.clearCompleted()}).on(a.MARK_ALL_TODO,function(e){return n.markAllAs(e)}).on(a.STOP_EDITING_ALL_TODO,function(){return n.stopEditingAllTodos()}).on(a.COUNT_ACTIVE_TODO,function(e){return n.updateUnreadyCounter(e)}),this.elements.toolBar.querySelector(".filters_all").addEventListener("click",function(){n.filter=n.filterAll,n.filterAll(),n.stopEditingAllTodos()}),this.elements.toolBar.querySelector(".filters_active").addEventListener("click",function(){n.filter=n.filterActive,n.filterActive(),n.stopEditingAllTodos()}),this.elements.toolBar.querySelector(".filters_completed").addEventListener("click",function(){n.filter=n.filterCompleted,n.filterCompleted(),n.stopEditingAllTodos()}),this.elements.toolBar.querySelector(".todos-toolbar_clear-completed").addEventListener("click",function(){n.controller.clearCompleted(),n.stopEditingAllTodos()})};var A=function e(t,o){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.showFullInterface=function(){var e=new _(n.model,n.controller);n.elements.root.parentNode.appendChild(e.getRoot()),n.elements.root.parentNode.appendChild(e.getToolBar())},this.hideFullInterface=function(){var e=n.elements.root.parentNode.querySelector(".todos-list"),t=n.elements.root.parentNode.querySelector(".todos-toolbar");n.elements.root.parentNode.removeChild(e),n.elements.root.parentNode.removeChild(t)},this.model=t,this.controller=o,this.elements=v.todoCreator(),t.on(a.REMOVE_TODO,function(){0===n.controller.getList().length&&n.hideFullInterface()}).on(a.CLEAR_COMPLETED,function(){0===n.controller.getList().length&&n.hideFullInterface()}).on(a.COUNT_ACTIVE_TODO,function(e){n.allMarkedAs=0===e}),0!==o.getList().length&&this.showFullInterface(),this.elements.checkAllBtn.addEventListener("click",function(e){e.preventDefault(),n.controller.markAllAs(!n.allMarkedAs),n.allMarkedAs=!n.allMarkedAs}),this.elements.textInput.addEventListener("keydown",function(e){if(13===e.keyCode){e.preventDefault();var t=n.elements.textInput.value.trim();n.elements.textInput.value="";var r=0===o.getList().length;""!==t&&(n.controller.addTodo(t),r&&n.showFullInterface())}})},O=new h,y=new p(O);window.addEventListener("load",function(e){new A(O,y)})},function(e,t){}]);