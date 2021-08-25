/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addToStorage.js":
/*!*****************************!*\
  !*** ./src/addToStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addToStorage = (tasks) => localStorage.setItem('items', JSON.stringify(tasks));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToStorage);\r\n\n\n//# sourceURL=webpack://TODO-LIST/./src/addToStorage.js?");

/***/ }),

/***/ "./src/addTodo.js":
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addToStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToStorage */ \"./src/addToStorage.js\");\n\r\n\r\n/* eslint-disable no-unused-vars, no-restricted-globals */\r\nconst addTodoTextToBox = (tasks, createList) => {\r\n  const inputText = document.getElementById('input-text');\r\n  inputText.addEventListener('keyup', (e) => {\r\n    if (e.keyCode === 13) {\r\n      const newItem = {\r\n        index: Number(`${tasks.length}`),\r\n        description: `${inputText.value}`,\r\n        completed: false,\r\n      };\r\n\r\n      tasks.push(newItem);\r\n      (0,_addToStorage__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);\r\n      inputText.value = '';\r\n      location.reload();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodoTextToBox);\r\n/* eslint-enable no-unused-vars, no-restricted-globals */\n\n//# sourceURL=webpack://TODO-LIST/./src/addTodo.js?");

/***/ }),

/***/ "./src/deleteTodo.js":
/*!***************************!*\
  !*** ./src/deleteTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteCompletedTodoItem\": () => (/* binding */ deleteCompletedTodoItem),\n/* harmony export */   \"deleteOnlyOne\": () => (/* binding */ deleteOnlyOne)\n/* harmony export */ });\n/* harmony import */ var _addToStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToStorage.js */ \"./src/addToStorage.js\");\n/* eslint-disable no-restricted-globals */\r\n\r\n\r\nconst deleteCompletedTodoItem = (tasks) => {\r\n  const clearAllBtn = document.querySelector('.clearAllBtn');\r\n  clearAllBtn.addEventListener('click', () => {\r\n    function finished(todo) {\r\n      return todo.completed === false;\r\n    }\r\n\r\n    tasks = tasks.filter(finished);\r\n    tasks.forEach((task, index) => { task.index = index; });\r\n    (0,_addToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);\r\n    location.reload();\r\n  });\r\n};\r\n\r\nconst deleteOnlyOne = (tasks) => {\r\n  const trashIcon = document.querySelectorAll('.fa-trash-alt');\r\n\r\n  trashIcon.forEach((icon) => icon.addEventListener('click', () => {\r\n    const todoItem = icon.parentNode;\r\n    tasks.splice(todoItem.id, 1);\r\n    tasks.forEach((task, index) => { task.index = index; });\r\n\r\n    (0,_addToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);\r\n    location.reload();\r\n  }));\r\n};\r\n\r\n\r\n/* eslint-enable no-restricted-globals */\n\n//# sourceURL=webpack://TODO-LIST/./src/deleteTodo.js?");

/***/ }),

/***/ "./src/dragDrop.js":
/*!*************************!*\
  !*** ./src/dragDrop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addToStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToStorage.js */ \"./src/addToStorage.js\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\nfunction getDragAfterElement(container, y) {\r\n  const draggableElements = [\r\n    ...container.querySelectorAll('.item:not(.dragging)'),\r\n  ];\r\n  return draggableElements.reduce(\r\n    (closest, child) => {\r\n      const box = child.getBoundingClientRect();\r\n      const offset = y - box.top - box.height / 2;\r\n      if (offset < 0 && offset > closest.offset) {\r\n        return { offset, element: child };\r\n      }\r\n      return closest;\r\n    },\r\n    {\r\n      offset: Number.NEGATIVE_INFINITY,\r\n    },\r\n  ).element;\r\n}\r\n\r\nfunction dragDrop(tasks) {\r\n  const todoAppContainer = document.getElementById('todoAppContainer');\r\n  const items = document.querySelectorAll('.item');\r\n\r\n  items.forEach((draggable) => {\r\n    draggable.addEventListener('dragstart', () => {\r\n      draggable.classList.add('dragging');\r\n    });\r\n\r\n    draggable.addEventListener('dragend', () => {\r\n      draggable.classList.remove('dragging');\r\n\r\n      const todoItemsDiv = document.querySelectorAll('.item');\r\n      for (let i = 0; i < todoItemsDiv.length; i += 1) {\r\n        tasks[(todoItemsDiv[i].id)].index = i;\r\n        todoItemsDiv[i].id = i;\r\n      }\r\n\r\n      tasks = tasks.sort((a, b) => (a.index - b.index));\r\n      (0,_addToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);\r\n    });\r\n  });\r\n\r\n  todoAppContainer.addEventListener('dragover', (e) => {\r\n    e.preventDefault();\r\n    const currentDraggable = document.querySelector('.dragging');\r\n    const afterElement = getDragAfterElement(todoAppContainer, e.clientY);\r\n    if (afterElement == null) {\r\n      todoAppContainer.appendChild(currentDraggable);\r\n    } else {\r\n      todoAppContainer.insertBefore(currentDraggable, afterElement);\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragDrop);\r\n/* eslint-enable no-unused-vars, no-use-before-define */\n\n//# sourceURL=webpack://TODO-LIST/./src/dragDrop.js?");

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addToStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToStorage.js */ \"./src/addToStorage.js\");\n\r\n\r\nconst editTodo = (tasks) => {\r\n  const todoTextSpan = document.querySelectorAll('.text');\r\n\r\n  todoTextSpan.forEach((span) => {\r\n    span.contentEditable = true;\r\n  });\r\n\r\n  todoTextSpan.forEach((span, index) => {\r\n    span.addEventListener('keydown', (event) => {\r\n      if (event.key === 'Enter') {\r\n        tasks[index].description = span.textContent;\r\n        (0,_addToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTodo);\n\n//# sourceURL=webpack://TODO-LIST/./src/editTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoStatusUpdate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoStatusUpdate.js */ \"./src/todoStatusUpdate.js\");\n/* harmony import */ var _dragDrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragDrop.js */ \"./src/dragDrop.js\");\n/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTodo.js */ \"./src/deleteTodo.js\");\n/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTodo.js */ \"./src/addTodo.js\");\n/* harmony import */ var _addToStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addToStorage.js */ \"./src/addToStorage.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editTask.js */ \"./src/editTask.js\");\n// import './style.css';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tasks = localStorage.getItem('items')\r\n  ? JSON.parse(localStorage.getItem('items'))\r\n  : [];\r\n\r\n(0,_addToStorage_js__WEBPACK_IMPORTED_MODULE_4__.default)(tasks);\r\nconst data = JSON.parse(localStorage.getItem('items'));\r\n\r\nconst createList = (todoItem) => {\r\n  if (!todoItem) return;\r\n\r\n  const todoAppContainer = document.getElementById('todoAppContainer');\r\n  const todoItemElement = document.createElement('div');\r\n  todoItemElement.classList.add('item', 'borderBottom');\r\n  todoItemElement.id = todoItem.index;\r\n  todoItemElement.setAttribute('draggable', true);\r\n\r\n  const checkbox = document.createElement('input');\r\n  checkbox.setAttribute('type', 'checkbox');\r\n  checkbox.classList.add('pointer');\r\n  checkbox.checked = todoItem.completed;\r\n\r\n  const descriptionSpan = document.createElement('span');\r\n  descriptionSpan.classList.add('text');\r\n\r\n  if (todoItem.completed) descriptionSpan.classList.add('check');\r\n\r\n  const icon = document.createElement('i');\r\n  icon.classList.add('fas', 'fa-trash-alt', 'pointer');\r\n\r\n  todoAppContainer.appendChild(todoItemElement);\r\n  descriptionSpan.innerHTML = todoItem.description;\r\n  todoItemElement.append(checkbox, descriptionSpan, icon);\r\n};\r\n\r\ndata.forEach((todoObject) => {\r\n  createList(todoObject);\r\n});\r\n\r\n(0,_todoStatusUpdate_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);\r\n(0,_deleteTodo_js__WEBPACK_IMPORTED_MODULE_2__.deleteCompletedTodoItem)(tasks);\r\n(0,_deleteTodo_js__WEBPACK_IMPORTED_MODULE_2__.deleteOnlyOne)(tasks);\r\n(0,_addTodo_js__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);\r\n(0,_dragDrop_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);\r\n(0,_editTask_js__WEBPACK_IMPORTED_MODULE_5__.default)(tasks);\r\n\n\n//# sourceURL=webpack://TODO-LIST/./src/index.js?");

/***/ }),

/***/ "./src/todoStatusUpdate.js":
/*!*********************************!*\
  !*** ./src/todoStatusUpdate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoStatusUpdate)\n/* harmony export */ });\n/* harmony import */ var _addToStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToStorage.js */ \"./src/addToStorage.js\");\n\r\n\r\nfunction todoStatusUpdate(tasks) {\r\n  const checkboxes = document.querySelectorAll('input[type=checkbox]');\r\n  const descriptionSpans = document.getElementsByClassName('text');\r\n\r\n  checkboxes.forEach((checkbox, index) => {\r\n    checkbox.addEventListener('click', () => {\r\n      if (checkbox.checked) {\r\n        tasks[index].completed = true;\r\n        descriptionSpans[index].classList.add('check');\r\n        (0,_addToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);\r\n      } else {\r\n        tasks[index].completed = false;\r\n        descriptionSpans[index].classList.remove('check');\r\n        (0,_addToStorage_js__WEBPACK_IMPORTED_MODULE_0__.default)(tasks);\r\n      }\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://TODO-LIST/./src/todoStatusUpdate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;