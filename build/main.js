/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./source/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./source/styles.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".container {\\r\\n    max-width: 1200px;\\r\\n    width: 100%;\\r\\n    margin: 0 auto;\\r\\n    background: #eee;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\nform {\\r\\n    width: 500px;\\r\\n}\\r\\n\\r\\narticle {\\r\\n    width: calc(100% - 540px);\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\nform fieldset {\\r\\n    border: 0;\\r\\n    border-bottom: 2px solid #ccc;\\r\\n}\\r\\n\\r\\nform fieldset:last-child {\\r\\n    border-bottom: 0;\\r\\n}\\r\\n\\r\\nform fieldset input,\\r\\nform fieldset select,\\r\\nform fieldset textarea {\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    padding: 8px 16px;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nform fieldset select,\\r\\nform fieldset input[type=\\\"file\\\"] {\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\nform fieldset input[type=\\\"checkbox\\\"],\\r\\nform fieldset input[type=\\\"radio\\\"] {\\r\\n    display: inline-block;\\r\\n    width: auto;\\r\\n}\\r\\n\\r\\nform fieldset label {\\r\\n    display: block;\\r\\n    margin: 0 0 4px 0;\\r\\n}\\r\\n\\r\\nform fieldset button {\\r\\n    width: 100%;\\r\\n    padding: 8px 16px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./source/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./source/Task1/creatObjWithDataFromForm.js":
/*!**************************************************!*\
  !*** ./source/Task1/creatObjWithDataFromForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var DataObj = {};\n\n  function validateForm() {\n    if (Object.values(DataObj).some(function (item) {\n      return item === '';\n    }) || DataObj.Skills.length == 0 || DataObj.Department.length == 0) {\n      alert(\"Please, fill in all fields\");\n    }\n\n    ;\n  }\n\n  ;\n\n  function getCheckedCheckBoxes() {\n    var checkboxes = document.getElementsByClassName('checkbox');\n    var checkboxesChecked = [];\n\n    for (var index = 0; index < checkboxes.length; index++) {\n      if (checkboxes[index].checked) {\n        checkboxesChecked.push(checkboxes[index].value);\n      }\n    }\n\n    return checkboxesChecked;\n  }\n\n  ;\n\n  function getCheckedRadioValue() {\n    var elements = document.getElementsByName('Sex');\n\n    for (var i = 0, len = elements.length; i < len; ++i) {\n      if (elements[i].checked) return elements[i].value;\n    }\n  }\n\n  ;\n\n  function getSelectedOptionsDepartment() {\n    var result = [];\n    var options = document.getElementById('Department').options;\n\n    for (var i = 0; i < options.length; i++) {\n      if (options[i].selected) {\n        result.push(options[i].value);\n      }\n    }\n\n    console.log(result);\n    return result;\n  }\n\n  ;\n  DataObj.FName = document.getElementById('FName').value;\n  DataObj.LName = document.getElementById('LName').value;\n  DataObj.Email = document.getElementById('Email').value;\n  DataObj.Phone = document.getElementById('Phone').value;\n  DataObj.Sex = getCheckedRadioValue();\n  DataObj.Skills = getCheckedCheckBoxes();\n  DataObj.Department = getSelectedOptionsDepartment();\n  validateForm();\n  console.log(DataObj);\n  return DataObj;\n});\n;\n\n//# sourceURL=webpack:///./source/Task1/creatObjWithDataFromForm.js?");

/***/ }),

/***/ "./source/Task2/queryStrAndXMR.js":
/*!****************************************!*\
  !*** ./source/Task2/queryStrAndXMR.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (DataObj) {\n  //creat query string\n  //----------one of method creat query string:\n  var newUrl = \"?FName=\".concat(DataObj.FName, \"&LName=\").concat(DataObj.LName, \"&Email=\").concat(DataObj.Email, \"&Phone=\").concat(DataObj.Phone, \"&Sex=\").concat(DataObj.Sex, \"&Skills=\").concat(DataObj.Skills.join('|'), \"&Department=\").concat(DataObj.Department.join('|')); // let newUrl = currentUrl+'?FName='+DataObj.FName+'&LName='DataObj.LName+'&Email='DataObj.Email+'&Phone='DataObj.Phone+'&Sex='+DataObj.Sex+'&Skills='+DataObj.Skills.join('|')+'&Department='+DataObj.Department.join('|');\n\n  history.pushState('', '', newUrl); //---------------another method:\n  // requestURL.set('FName', DataObj.FName);\n  // requestURL.set('LName', DataObj.LName);\n  // requestURL.set('Email', DataObj.Email);\n  // requestURL.set('Phone', DataObj.Phone);\n  // requestURL.set('Sex', DataObj.Sex);\n  // requestURL.set('Skills', DataObj.Skills.join('|'));\n  // requestURL.set('Department', DataObj.Department.join('|'));\n  //----------creat XMLHttpRequest\n  // function sendRequest(method, url, body = null) {   //function request\n  //     return new Promise((resolve, reject) => {\n  //         const xhr = new XMLHttpRequest()\n  //         xhr.open(method, url)\n  //         xhr.responseType = ''\n  //         xhr.setRequestHeader('Content-Type', 'userForm/string')\n  //         xhr.onload = () => {\n  //             if (xhr.status >= 400) {\n  //                 reject(xhr.response)\n  //             } else {\n  //                 resolve(xhr.response)\n  //             }\n  //         }\n  //         xhr.onerror = () => {\n  //             reject(xhr.response)\n  //         }\n  //         xhr.send();\n  //     });\n  // };\n  // //---------send request\n  // sendRequest('POST', requestURL)\n  //     .then(data => console.log(data))\n  //     .catch(err => console.log(err))\n});\n;\n\n//# sourceURL=webpack:///./source/Task2/queryStrAndXMR.js?");

/***/ }),

/***/ "./source/Task3/fillFieldsFromAvailableData.js":
/*!*****************************************************!*\
  !*** ./source/Task3/fillFieldsFromAvailableData.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  //if we have a server, before loading page, we send XMLHttpRequest 'get' on current url:\n  //let requestURL = sendRequest('GET', URL).then(data => console.log(data)).catch(err => console.log(err));\n  //but now for example i created response from server:\n  var paramsString = document.location.search;\n  var searchParams = new URLSearchParams(paramsString); // let requestURL = new URL('https://smthExample.com/search?FName=Dzmitry&LName=Palyka&Sex=Male&Skills=HTML|CSS|JavaScript&Department=FrontEnd|SalesForce');  //enter your url here\n\n  document.getElementById('FName').value = searchParams.get(\"FName\");\n  console.log(searchParams.get(\"FName\"));\n  document.getElementById('LName').value = searchParams.get(\"LName\");\n  document.getElementById('Email').value = searchParams.get(\"Email\");\n  document.getElementById('Phone').value = searchParams.get(\"Phone\"); //for radio button\n\n  if (searchParams.get('Sex') === 'Male') {\n    document.getElementsByName('Sex')[0].checked = true;\n  } else if (searchParams.get('Sex') === 'Female') {\n    document.getElementsByName('Sex')[1].checked = true;\n  }\n\n  ; //for select Skills\n\n  if (searchParams.get('Skills') != null) {\n    var arrSkillsFromData = searchParams.get('Skills').split('|');\n\n    for (var i = 0; i < arrSkillsFromData.length; i++) {\n      document.getElementById(\"\".concat(arrSkillsFromData[i])).checked = true;\n    }\n\n    ;\n  }\n\n  ; //for Department select\n\n  if (searchParams.get('Department') != null) {\n    var arrDepartmentsFromData = searchParams.get('Department').split('|');\n\n    for (var _i = 0; _i < arrDepartmentsFromData.length; _i++) {\n      document.getElementById(\"\".concat(arrDepartmentsFromData[_i])).selected = true;\n    }\n\n    ;\n  }\n\n  ;\n});\n;\n\n//# sourceURL=webpack:///./source/Task3/fillFieldsFromAvailableData.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./source/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task3_fillFieldsFromAvailableData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task3/fillFieldsFromAvailableData.js */ \"./source/Task3/fillFieldsFromAvailableData.js\");\n/* harmony import */ var _Task1_creatObjWithDataFromForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task1/creatObjWithDataFromForm.js */ \"./source/Task1/creatObjWithDataFromForm.js\");\n/* harmony import */ var _Task2_queryStrAndXMR_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task2/queryStrAndXMR.js */ \"./source/Task2/queryStrAndXMR.js\");\n//------------We can add attribute \"action\" with our url and add \"method\" \"post\" in teg \"form\"  or:\n\n\n\n\nvar btn = document.getElementById('button'); //=========================================================Task №3=============================================\n//-------------------fill in the fields with the available data\n\nObject(_Task3_fillFieldsFromAvailableData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //==================================================Task №1==================\n//-----------------------------Click on the button 'submit'\n\nbtn.addEventListener('click', function () {\n  var dataObj = Object(_Task1_creatObjWithDataFromForm_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //=-=========================================================Task №2=============================================\n\n  Object(_Task2_queryStrAndXMR_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dataObj);\n});\n\n//# sourceURL=webpack:///./source/index.js?");

/***/ }),

/***/ "./source/styles.css":
/*!***************************!*\
  !*** ./source/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./source/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./source/styles.css?");

/***/ })

/******/ });