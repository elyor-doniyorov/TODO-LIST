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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/** @format */\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ndiv,\\r\\nspan,\\r\\napplet,\\r\\nobject,\\r\\niframe,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nblockquote,\\r\\npre,\\r\\na,\\r\\nabbr,\\r\\nacronym,\\r\\naddress,\\r\\nbig,\\r\\ncite,\\r\\ncode,\\r\\ndel,\\r\\ndfn,\\r\\nem,\\r\\nimg,\\r\\nins,\\r\\nkbd,\\r\\nq,\\r\\ns,\\r\\nsamp,\\r\\nsmall,\\r\\nstrike,\\r\\nstrong,\\r\\nsub,\\r\\nsup,\\r\\ntt,\\r\\nvar,\\r\\nb,\\r\\nu,\\r\\ni,\\r\\ncenter,\\r\\ndl,\\r\\ndt,\\r\\ndd,\\r\\nol,\\r\\nul,\\r\\nli,\\r\\nfieldset,\\r\\nform,\\r\\nlabel,\\r\\nlegend,\\r\\ntable,\\r\\ncaption,\\r\\ntbody,\\r\\ntfoot,\\r\\nthead,\\r\\ntr,\\r\\nth,\\r\\ntd,\\r\\narticle,\\r\\naside,\\r\\ncanvas,\\r\\ndetails,\\r\\nembed,\\r\\nfigure,\\r\\nfigcaption,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\noutput,\\r\\nruby,\\r\\nsection,\\r\\nsummary,\\r\\ntime,\\r\\nmark,\\r\\naudio,\\r\\nvideo {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font: inherit;\\r\\n  font-size: 100%;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  line-height: 1;\\r\\n}\\r\\n\\r\\nol,\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nblockquote,\\r\\nq {\\r\\n  quotes: none;\\r\\n}\\r\\n\\r\\nblockquote::before,\\r\\nblockquote::after,\\r\\nq::before,\\r\\nq::after {\\r\\n  content: '';\\r\\n  content: none;\\r\\n}\\r\\n\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\\r\\n/*! PAGE STYLING START HERE  */\\r\\n.page {\\r\\n  font-size: 20px;\\r\\n  color: #3b3b3b;\\r\\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n.centerToPage {\\r\\n  margin: auto;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style-type: none;\\r\\n  cursor: move;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n.box {\\r\\n  box-sizing: border-box;\\r\\n  box-shadow: 0 2px 8px rgb(0 0 0 / 50%);\\r\\n  margin-top: 10rem;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.borderBottom {\\r\\n  border-bottom: 1px solid #b8b6b6;\\r\\n  padding: 1.2rem 1rem;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: 0;\\r\\n  outline: none;\\r\\n  color: rgb(80, 79, 79);\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n#input-text {\\r\\n  width: 94%;\\r\\n}\\r\\n\\r\\ninput[type='checkbox'] {\\r\\n  cursor: pointer;\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.check {\\r\\n  text-decoration: line-through;\\r\\n  text-decoration-thickness: 0.1rem;\\r\\n  color: #838282;\\r\\n}\\r\\n\\r\\n.dragging {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n\\r\\n.clearAll {\\r\\n  text-align: center;\\r\\n  background-color: #dfdbdb;\\r\\n}\\r\\n\\r\\n.clearAll:hover {\\r\\n  text-decoration-line: underline;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://TODO-LIST/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://TODO-LIST/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://TODO-LIST/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://TODO-LIST/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://TODO-LIST/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://TODO-LIST/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://TODO-LIST/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://TODO-LIST/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://TODO-LIST/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTodo.js":
/*!************************!*\
  !*** ./src/addTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-unused-vars, no-restricted-globals */\r\nconst addTodoTextToBox = (tasks, createList) => {\r\n  const inputText = document.getElementById('input-text');\r\n  inputText.addEventListener('keyup', (e) => {\r\n    if (e.keyCode === 13) {\r\n      const newItem = {\r\n        index: Number(`${tasks.length}`),\r\n        description: `${inputText.value}`,\r\n        completed: false,\r\n      };\r\n\r\n      tasks.push(newItem);\r\n      localStorage.setItem('items', JSON.stringify(tasks));\r\n      location.reload();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodoTextToBox);\r\n/* eslint-enable no-unused-vars, no-restricted-globals */\n\n//# sourceURL=webpack://TODO-LIST/./src/addTodo.js?");

/***/ }),

/***/ "./src/deleteAll.js":
/*!**************************!*\
  !*** ./src/deleteAll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-restricted-globals */\r\nconst deleteCompletedTodoItem = (tasks) => {\r\n  const clearAll = document.getElementsByClassName('clearAll');\r\n  clearAll[0].addEventListener('click', () => {\r\n    function finish(el) {\r\n      return !el.completed === true;\r\n    }\r\n    tasks = tasks.filter(finish);\r\n    for (let i = 0; i < tasks.length; i += 1) {\r\n      tasks[i].index = i;\r\n    }\r\n    localStorage.setItem('items', JSON.stringify(tasks));\r\n    location.reload();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteCompletedTodoItem);\r\n/* eslint-enable no-restricted-globals */\n\n//# sourceURL=webpack://TODO-LIST/./src/deleteAll.js?");

/***/ }),

/***/ "./src/deleteOneTask.js":
/*!******************************!*\
  !*** ./src/deleteOneTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable prefer-destructuring, no-restricted-globals */\r\nconst deleteOne = (tasks) => {\r\n  const trashIcon = document.querySelectorAll('.fa-trash-alt');\r\n\r\n  trashIcon.forEach((icon) => icon.addEventListener('click', () => {\r\n    const id = icon.parentNode.id;\r\n\r\n    tasks.splice(id, 1);\r\n    for (let i = 0; i < tasks.length; i += 1) {\r\n      tasks[i].index = i;\r\n    }\r\n\r\n    localStorage.setItem('items', JSON.stringify(tasks));\r\n    location.reload();\r\n  }));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteOne);\r\n/* eslint-enable prefer-destructuring, no-restricted-globals */\n\n//# sourceURL=webpack://TODO-LIST/./src/deleteOneTask.js?");

/***/ }),

/***/ "./src/dragDrop.js":
/*!*************************!*\
  !*** ./src/dragDrop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dragDrop)\n/* harmony export */ });\n/* eslint-disable no-unused-vars, no-use-before-define */\r\nfunction dragDrop(tasks) {\r\n  const todoAppContainer = document.getElementById('todoAppContainer');\r\n  const draggables = document.querySelectorAll('.draggable');\r\n  draggables.forEach((draggable) => {\r\n    draggable.addEventListener('dragstart', () => {\r\n      draggable.classList.add('dragging');\r\n    });\r\n    draggable.addEventListener('dragend', () => {\r\n      draggable.classList.remove('dragging');\r\n      const todoItemsDiv = document.querySelectorAll('.item');\r\n      for (let i = 0; i < draggables.length; i += 1) {\r\n        tasks[(todoItemsDiv[i].id)].index = i;\r\n        todoItemsDiv[i].id = i;\r\n      }\r\n      tasks = tasks.sort((a, b) => (a.index - b.index));\r\n      localStorage.setItem('items', JSON.stringify(tasks));\r\n    });\r\n  });\r\n\r\n  todoAppContainer.addEventListener('dragover', (e) => {\r\n    e.preventDefault();\r\n    const currentDraggable = document.querySelector('.dragging');\r\n    const afterElement = getDragAfterElement(todoAppContainer, e.clientY);\r\n    if (afterElement == null) {\r\n      todoAppContainer.appendChild(currentDraggable);\r\n    } else {\r\n      todoAppContainer.insertBefore(currentDraggable, afterElement);\r\n    }\r\n  });\r\n}\r\n\r\nfunction getDragAfterElement(container, y) {\r\n  const draggableElements = [\r\n    ...container.querySelectorAll('.item:not(.dragging)'),\r\n  ];\r\n  return draggableElements.reduce(\r\n    (closest, child) => {\r\n      const box = child.getBoundingClientRect();\r\n      const offset = y - box.top - box.height / 2;\r\n      if (offset < 0 && offset > closest.offset) {\r\n        return { offset, element: child };\r\n      }\r\n      return closest;\r\n    },\r\n    {\r\n      offset: Number.NEGATIVE_INFINITY,\r\n    },\r\n  ).element;\r\n}\r\n/* eslint-enable no-unused-vars, no-use-before-define */\n\n//# sourceURL=webpack://TODO-LIST/./src/dragDrop.js?");

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst edit = (tasks) => {\r\n  const todoTextSpan = document.querySelectorAll('.text');\r\n\r\n  todoTextSpan.forEach((span) => {\r\n    span.contentEditable = true;\r\n  });\r\n\r\n  for (let i = 0; i < todoTextSpan.length; i += 1) {\r\n    todoTextSpan[i].addEventListener('keydown', (event) => {\r\n      if (event.key === 'Enter') {\r\n        tasks[i].description = todoTextSpan[i].textContent;\r\n        localStorage.setItem('items', JSON.stringify(tasks));\r\n      }\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);\n\n//# sourceURL=webpack://TODO-LIST/./src/editTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todoStatusUpdate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoStatusUpdate.js */ \"./src/todoStatusUpdate.js\");\n/* harmony import */ var _dragDrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragDrop.js */ \"./src/dragDrop.js\");\n/* harmony import */ var _deleteAll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteAll.js */ \"./src/deleteAll.js\");\n/* harmony import */ var _addTodo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTodo.js */ \"./src/addTodo.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editTask.js */ \"./src/editTask.js\");\n/* harmony import */ var _deleteOneTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deleteOneTask.js */ \"./src/deleteOneTask.js\");\n/* eslint-disable no-restricted-globals, prefer-destructuring, import/no-unresolved */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tasks = localStorage.getItem('items')\r\n  ? JSON.parse(localStorage.getItem('items'))\r\n  : [];\r\n\r\nlocalStorage.setItem('items', JSON.stringify(tasks));\r\nconst data = JSON.parse(localStorage.getItem('items'));\r\n\r\nconst createList = (todoItem) => {\r\n  if (!todoItem) {\r\n    return;\r\n  }\r\n\r\n  const todoAppContainer = document.getElementById('todoAppContainer');\r\n\r\n  const todoItemElement = document.createElement('div');\r\n  todoItemElement.classList.add('item', 'borderBottom', 'draggable');\r\n  todoItemElement.id = todoItem.index;\r\n  todoItemElement.setAttribute('draggable', true);\r\n\r\n  const checkbox = document.createElement('input');\r\n  checkbox.setAttribute('type', 'checkbox');\r\n  checkbox.checked = todoItem.completed;\r\n\r\n  const descriptionSpan = document.createElement('span');\r\n  descriptionSpan.classList.add('text');\r\n\r\n  if (todoItem.completed) {\r\n    descriptionSpan.classList.add('check');\r\n  }\r\n\r\n  const icon = document.createElement('i');\r\n  icon.classList.add('fas', 'fa-trash-alt');\r\n  todoAppContainer.appendChild(todoItemElement);\r\n  descriptionSpan.innerHTML = todoItem.description;\r\n  todoItemElement.append(checkbox, descriptionSpan, icon);\r\n  (0,_dragDrop_js__WEBPACK_IMPORTED_MODULE_2__.default)(tasks);\r\n  (0,_todoStatusUpdate_js__WEBPACK_IMPORTED_MODULE_1__.default)(tasks);\r\n};\r\n\r\n(0,_addTodo_js__WEBPACK_IMPORTED_MODULE_4__.default)(tasks);\r\n(0,_deleteAll_js__WEBPACK_IMPORTED_MODULE_3__.default)(tasks);\r\n\r\ndata.forEach((object) => {\r\n  createList(object);\r\n});\r\n\r\n(0,_deleteOneTask_js__WEBPACK_IMPORTED_MODULE_6__.default)(tasks);\r\n(0,_editTask_js__WEBPACK_IMPORTED_MODULE_5__.default)(tasks);\r\n/* eslint-enable no-restricted-globals, prefer-destructuring, import/no-unresolved */\r\n\n\n//# sourceURL=webpack://TODO-LIST/./src/index.js?");

/***/ }),

/***/ "./src/todoStatusUpdate.js":
/*!*********************************!*\
  !*** ./src/todoStatusUpdate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoStatusUpdate)\n/* harmony export */ });\nfunction todoStatusUpdate(tasks) {\r\n  const checkbox = document.querySelectorAll('input[type=checkbox]');\r\n  const descriptionSpans = document.getElementsByClassName('text');\r\n\r\n  for (let i = 0; i < checkbox.length; i += 1) {\r\n    checkbox[i].addEventListener('click', () => {\r\n      if (checkbox[i].checked) {\r\n        tasks[i].completed = true;\r\n        descriptionSpans[i].classList.add('check');\r\n        localStorage.setItem('items', JSON.stringify(tasks));\r\n      } else {\r\n        tasks[i].completed = false;\r\n        descriptionSpans[i].classList.remove('check');\r\n        localStorage.setItem('items', JSON.stringify(tasks));\r\n      }\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://TODO-LIST/./src/todoStatusUpdate.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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