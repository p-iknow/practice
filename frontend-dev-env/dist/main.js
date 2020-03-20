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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController.js */ \"./src/controllers/MainController.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  new _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/MainController.js":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainController; });\n/* harmony import */ var _views_FormView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/FormView.js */ \"./src/views/FormView.js\");\n/* harmony import */ var _views_ResultView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/ResultView.js */ \"./src/views/ResultView.js\");\n/* harmony import */ var _views_TabView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/TabView.js */ \"./src/views/TabView.js\");\n/* harmony import */ var _views_KeywordView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/KeywordView.js */ \"./src/views/KeywordView.js\");\n/* harmony import */ var _views_HistoryView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/HistoryView.js */ \"./src/views/HistoryView.js\");\n/* harmony import */ var _models_SearchModel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/SearchModel.js */ \"./src/models/SearchModel.js\");\n/* harmony import */ var _models_KeywordModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/KeywordModel.js */ \"./src/models/KeywordModel.js\");\n/* harmony import */ var _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/HistoryModel.js */ \"./src/models/HistoryModel.js\");\n\n\n\n\n\n\n\n\n\n\nclass MainController {\n  constructor() {\n    const formViewEl = document.querySelector(\"form\");\n    const tabViewEl = document.querySelector(\"#tabs\");\n    const keywordViewEl = document.querySelector(\"#search-keyword\");\n    const historyViewEl = document.querySelector(\"#search-history\");\n    const resultViewEl = document.querySelector(\"#search-result\");\n\n    this.formView = new _views_FormView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](formViewEl)\n      .on(\"@submit\", e => this.search(e.detail.input))\n      .on(\"@reset\", () => this.renderView());\n\n    this.tabView = new _views_TabView_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](tabViewEl).on(\"@change\", e =>\n      this.onChangeTab(e.detail.tabName)\n    );\n\n    this.keywordView = new _views_KeywordView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](keywordViewEl).on(\"@click\", e =>\n      this.search(e.detail.keyword)\n    );\n\n    this.historyView = new _views_HistoryView_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](historyViewEl)\n      .on(\"@click\", e => this.search(e.detail.keyword))\n      .on(\"@remove\", e => this.onRemoveHistory(e.detail.keyword));\n\n    this.resultView = new _views_ResultView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](resultViewEl);\n\n    this.selectedTab = \"추천 검색어\";\n    this.renderView();\n  }\n\n  async search(query) {\n    this.formView.setValue(query);\n    const data = await _models_SearchModel_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].list(query);\n    this.onSearchResult(data);\n  }\n\n  onSearchResult(data) {\n    this.tabView.hide();\n    this.keywordView.hide();\n    this.historyView.hide();\n    this.resultView.mount(data);\n  }\n\n  onChangeTab(tabName) {\n    this.selectedTab = tabName;\n    this.renderView();\n  }\n\n  async renderView() {\n    this.tabView.setActiveTab(this.selectedTab);\n\n    if (this.selectedTab === \"추천 검색어\") {\n      const data = await _models_KeywordModel_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].list();\n      this.keywordView.mount(data);\n      this.historyView.hide();\n    } else {\n      const data = await _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].list();\n      this.historyView.mount(data).bindRemoveBtn();\n      this.keywordView.hide();\n    }\n\n    this.resultView.hide();\n  }\n\n  onRemoveHistory(keyword) {\n    _models_HistoryModel_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].remove(keyword);\n    this.renderView();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/controllers/MainController.js?");

/***/ }),

/***/ "./src/models/HistoryModel.js":
/*!************************************!*\
  !*** ./src/models/HistoryModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: [\n    { keyword: \"검색기록2\", date: \"12.03\" },\n    { keyword: \"검색기록1\", date: \"12.02\" },\n    { keyword: \"검색기록0\", date: \"12.01\" }\n  ],\n\n  list() {\n    return Promise.resolve(this.data);\n  },\n\n  add(keyword = \"\") {\n    keyword = keyword.trim();\n    if (!keyword) return;\n    if (this.data.some(item => item.keyword === keyword)) {\n      this.remove(keyword);\n    }\n\n    const date = \"12.31\";\n    this.data = [\n      {\n        keyword,\n        date\n      },\n      ...this.data\n    ];\n  },\n\n  remove(keyword) {\n    this.data = this.data.filter(item => item.keyword !== keyword);\n  }\n});\n\n\n//# sourceURL=webpack:///./src/models/HistoryModel.js?");

/***/ }),

/***/ "./src/models/KeywordModel.js":
/*!************************************!*\
  !*** ./src/models/KeywordModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: [\n    { keyword: \"이탈리아\" },\n    { keyword: \"세프의요리\" },\n    { keyword: \"제철\" },\n    { keyword: \"홈파티\" }\n  ],\n  list() {\n    return new Promise(res => {\n      setTimeout(() => {\n        res(this.data);\n      }, 200);\n    });\n  }\n});\n\n\n//# sourceURL=webpack:///./src/models/KeywordModel.js?");

/***/ }),

/***/ "./src/models/SearchModel.js":
/*!***********************************!*\
  !*** ./src/models/SearchModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [\n  {\n    id: 1,\n    name: \"[버거] 치즈버거처럼 생긴 새우버거\",\n    image:\n      \"https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\"\n  },\n  {\n    id: 2,\n    name: \"[피자] 썸네일 주소가 잘못된 상품\",\n    image: \"http://foo.bar/image.jpg\"\n  }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  list() {\n    return new Promise(res => {\n      setTimeout(() => {\n        res(data);\n      }, 200);\n    });\n  }\n});\n\n\n//# sourceURL=webpack:///./src/models/SearchModel.js?");

/***/ }),

/***/ "./src/views/FormView.js":
/*!*******************************!*\
  !*** ./src/views/FormView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\n\nclass FormView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    this._inputEl = el.querySelector(\"[type=text]\");\n    this._resetEl = el.querySelector(\"[type=reset]\");\n    this.showResetBtn(false);\n    this.bindEvents();\n    return this;\n  }\n\n  showResetBtn(show = true) {\n    this._resetEl.style.display = show ? \"block\" : \"none\";\n  }\n\n  bindEvents() {\n    this.on(\"submit\", e => e.preventDefault());\n    this._inputEl.addEventListener(\"keyup\", e => this.onKeyup(e));\n    this._resetEl.addEventListener(\"click\", () => this.onClickReset());\n  }\n\n  onKeyup(e) {\n    const enter = 13;\n    this.showResetBtn(this._inputEl.value.length);\n    if (!this._inputEl.value.length) this.emit(\"@reset\");\n    if (e.keyCode !== enter) return;\n    this.emit(\"@submit\", { input: this._inputEl.value });\n  }\n\n  onClickReset() {\n    this.emit(\"@reset\");\n    this.showResetBtn(false);\n  }\n\n  setValue(value = \"\") {\n    this._inputEl.value = value;\n    this.showResetBtn(this._inputEl.value.length);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/FormView.js?");

/***/ }),

/***/ "./src/views/HistoryView.js":
/*!**********************************!*\
  !*** ./src/views/HistoryView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HistoryView; });\n/* harmony import */ var _KeywordView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeywordView.js */ \"./src/views/KeywordView.js\");\n\n\nclass HistoryView extends _KeywordView_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n    this._messages.NO_KEYWORDS = \"검색 이력이 없습니다\";\n\n    return this;\n  }\n\n  getKeywordsHtml(data) {\n    return (\n      data.reduce((html, item) => {\n        html += `<li data-keyword=\"${item.keyword}\">\n        ${item.keyword} \n        <span class=\"date\">${item.date}</span>\n        <button class=\"btn-remove\"></button>\n        </li>`;\n        return html;\n      }, '<ul class=\"HistoryView\">') + \"</ul>\"\n    );\n  }\n\n  bindRemoveBtn() {\n    Array.from(this.el.querySelectorAll(\"button.btn-remove\")).forEach(btn => {\n      btn.addEventListener(\"click\", e => {\n        e.stopPropagation();\n        this.onRemove(btn.parentElement.dataset.keyword);\n      });\n    });\n  }\n\n  onRemove(keyword) {\n    this.emit(\"@remove\", { keyword });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/HistoryView.js?");

/***/ }),

/***/ "./src/views/KeywordView.js":
/*!**********************************!*\
  !*** ./src/views/KeywordView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeywordView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\n\nclass KeywordView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n\n    this._messages = {\n      NO_KEYWORDS: \"추천 검색어가 없습니다\"\n    };\n\n    return this;\n  }\n\n  mount(data = []) {\n    this.el.innerHTML = data.length\n      ? this.getKeywordsHtml(data)\n      : this._messages.NO_KEYWORDS;\n    this.show();\n    this._bindClickEvent();\n    return this;\n  }\n\n  getKeywordsHtml(data) {\n    return (\n      data.reduce((html, item, index) => {\n        html += `<li data-keyword=\"${\n          item.keyword\n        }\"><span class=\"number\">${index + 1}</span>${item.keyword}</li>`;\n        return html;\n      }, '<ul class=\"KeywordView\">') + \"</ul>\"\n    );\n  }\n\n  _bindClickEvent() {\n    Array.from(this.el.querySelectorAll(\"li\")).forEach(li => {\n      li.addEventListener(\"click\", e => this._onClickKeyword(e));\n    });\n  }\n\n  _onClickKeyword(e) {\n    const { keyword } = e.currentTarget.dataset;\n    this.emit(\"@click\", { keyword });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/KeywordView.js?");

/***/ }),

/***/ "./src/views/ResultView.js":
/*!*********************************!*\
  !*** ./src/views/ResultView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResultView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\n\nclass ResultView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n\n    this.messages = {\n      NO_RESULT: \"검색 결과가 없습니다\"\n    };\n  }\n\n  mount(data = []) {\n    this.el.innerHTML = `<div class=\"ResultView\">\n      ${data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT}\n    </div>`;\n    this.show();\n  }\n\n  getSearchResultsHtml(data) {\n    return (\n      data.reduce((html, item) => {\n        html += this.getSearchItemHtml(item);\n        return html;\n      }, \"<ul>\") + \"</ul>\"\n    );\n  }\n\n  getSearchItemHtml(item) {\n    return `<li>\n      <img src=\"${item.image}\" onerror=\"this.src='src/images/default-image.jpg'\"/>\n      <p>${item.name}</p>\n    </li>`;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/ResultView.js?");

/***/ }),

/***/ "./src/views/TabView.js":
/*!******************************!*\
  !*** ./src/views/TabView.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TabView; });\n/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ \"./src/views/View.js\");\n\n\n\nclass TabView extends _View_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(el) {\n    super(el);\n\n    this.mount();\n    this.bindEvents();\n  }\n\n  mount() {\n    this.el.innerHTML = `<ul class=\"TabView\">\n      <li>추천 검색어</li>\n      <li>최근 검색어</li>\n    </ul>`;\n  }\n\n  get tabItems() {\n    return Array.from(this.el.children[0].children);\n  }\n\n  bindEvents() {\n    this.tabItems.forEach(li => {\n      li.addEventListener(\"click\", () => this.onClick(li.innerHTML));\n    });\n  }\n\n  onClick(tabName) {\n    this.setActiveTab(tabName);\n    this.emit(\"@change\", { tabName });\n  }\n\n  setActiveTab(tabName) {\n    this.tabItems.forEach(li => {\n      li.className = li.innerHTML === tabName ? \"active\" : \"\";\n    });\n    this.show();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/TabView.js?");

/***/ }),

/***/ "./src/views/View.js":
/*!***************************!*\
  !*** ./src/views/View.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\n  constructor(el) {\n    if (!el) throw el;\n\n    this.el = el;\n    return this;\n  }\n\n  on(event, handler) {\n    this.el.addEventListener(event, handler);\n    return this;\n  }\n\n  emit(event, data) {\n    const evt = new CustomEvent(event, {\n      detail: data\n    });\n    this.el.dispatchEvent(evt);\n    return this;\n  }\n\n  hide() {\n    this.el.style.display = \"none\";\n    return this;\n  }\n\n  show() {\n    this.el.style.display = \"\";\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/views/View.js?");

/***/ })

/******/ });