"use strict";
(self["webpackChunkmartiescafe"] = self["webpackChunkmartiescafe"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./starving.jpg */ "./src/starving.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body {
    height: 100%; width: 100%
}

/* * {border: 1px solid red} */

.welcomebox, .contactbox, .title, .menu_item {
    font-family: Chalkduster, fantasy;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: contain;
    background-repeat: repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    position: relative;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

#content.fade-in {
    opacity: 1;
}

#header {
    background: rgba(255,255,255,.5);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 90vw;
}

.title {
    margin-bottom: 20px;
    font-size: 300%;
    
}

.tab-button {
    background: rgba(255,255,255,.7);
    width: 75px;
    height: 35px;
    border: none;
    border-radius: 8px 8px 0 0;
    font-size: 105%;
    font: rgb(101, 101, 101);
}

.welcomebox, .contactbox {
    padding: 20px;
    width: 50%;
    margin: 100px;
    background: rgba(255,255,255,.5);
    display: flex-column;
    text-align: center;
}

.welcomebox p:first-child {
    font-size: 130%;
}

.welcomebox p:nth-child(2) {
    font-size: 90%;
}

.contactbox > :first-child {
    font-size: 120%;
    /* text-align: center; */
}

.menu {
    background: rgba(255,255,255,.5);
    display: flex;
    flex-direction: column;
    width: 60vw;
    padding: 20px;
    position: absolute;
    top: 60px;
}

.menu-navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.menu-navigation div {
    border-bottom: 2px solid black;
    width: 30%;
    display: flex;
    justify-content: center;
}

.menusection {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(50px, auto);
    column-gap: 30px;
    row-gap: 40px;
    opacity: 0;
    position: absolute;
    width: 100%;
    top: 104.5px;
    font-size: 110%;
    left: 100%;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    background: rgba(255,255,255,.5);
}

.menusection > :nth-child(n+4) {
    margin-top: -20px;
}

.menusection > :first-child {
    row-gap: 50px;
  }

.menusection.active {
    opacity: 1;
    transform: translateX(-100%);
}

.menu_item {
    display: flex;
    justify-content: space-between;
    padding: 25px;
}

.menu_title {
    justify-content: center;
    align-self: center;
    margin-bottom: 0;
    font-size: 140%;
}

.title_left {
    justify-content:flex-end;
}

.contactinfo {
    display: flex;
    justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY,EAAE;AAClB;;AAEA,8BAA8B;;AAE9B;IACI,iCAAiC;AACrC;;AAEA;IACI,yDAAuC;IACvC,wBAAwB;IACxB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,kBAAkB;IAClB,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,eAAe;;AAEnB;;AAEA;IACI,gCAAgC;IAChC,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,0BAA0B;IAC1B,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,UAAU;IACV,aAAa;IACb,gCAAgC;IAChC,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,UAAU;IACV,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,gBAAgB;IAChB,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,UAAU;IACV,gEAAgE;IAChE,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;EACf;;AAEF;IACI,UAAU;IACV,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["html, body {\n    height: 100%; width: 100%\n}\n\n/* * {border: 1px solid red} */\n\n.welcomebox, .contactbox, .title, .menu_item {\n    font-family: Chalkduster, fantasy;\n}\n\nbody {\n    background-image: url('./starving.jpg');\n    background-size: contain;\n    background-repeat: repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#content {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 70%;\n    position: relative;\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n}\n\n#content.fade-in {\n    opacity: 1;\n}\n\n#header {\n    background: rgba(255,255,255,.5);\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    width: 90vw;\n}\n\n.title {\n    margin-bottom: 20px;\n    font-size: 300%;\n    \n}\n\n.tab-button {\n    background: rgba(255,255,255,.7);\n    width: 75px;\n    height: 35px;\n    border: none;\n    border-radius: 8px 8px 0 0;\n    font-size: 105%;\n    font: rgb(101, 101, 101);\n}\n\n.welcomebox, .contactbox {\n    padding: 20px;\n    width: 50%;\n    margin: 100px;\n    background: rgba(255,255,255,.5);\n    display: flex-column;\n    text-align: center;\n}\n\n.welcomebox p:first-child {\n    font-size: 130%;\n}\n\n.welcomebox p:nth-child(2) {\n    font-size: 90%;\n}\n\n.contactbox > :first-child {\n    font-size: 120%;\n    /* text-align: center; */\n}\n\n.menu {\n    background: rgba(255,255,255,.5);\n    display: flex;\n    flex-direction: column;\n    width: 60vw;\n    padding: 20px;\n    position: absolute;\n    top: 60px;\n}\n\n.menu-navigation {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.menu-navigation div {\n    border-bottom: 2px solid black;\n    width: 30%;\n    display: flex;\n    justify-content: center;\n}\n\n.menusection {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: minmax(50px, auto);\n    column-gap: 30px;\n    row-gap: 40px;\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    top: 104.5px;\n    font-size: 110%;\n    left: 100%;\n    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;\n    background: rgba(255,255,255,.5);\n}\n\n.menusection > :nth-child(n+4) {\n    margin-top: -20px;\n}\n\n.menusection > :first-child {\n    row-gap: 50px;\n  }\n\n.menusection.active {\n    opacity: 1;\n    transform: translateX(-100%);\n}\n\n.menu_item {\n    display: flex;\n    justify-content: space-between;\n    padding: 25px;\n}\n\n.menu_title {\n    justify-content: center;\n    align-self: center;\n    margin-bottom: 0;\n    font-size: 140%;\n}\n\n.title_left {\n    justify-content:flex-end;\n}\n\n.contactinfo {\n    display: flex;\n    justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const aboutPage = function() {
    
    const contactTitle = document.createElement('p');
    contactTitle.innerHTML = "Contact";

    const contactA = document.createElement('div');
    contactA.classList.add('contactinfo');
    const contactA1 = document.createElement('p');
    contactA1.innerHTML = "Staff:";
    const contactA2 = document.createElement('p');
    contactA2.innerHTML = "*Bark! Bark! Whine!*";
    contactA.appendChild(contactA1);
    contactA.appendChild(contactA2);

    const contactB = document.createElement('div');
    contactB.classList.add('contactinfo');
    const contactB1 = document.createElement('p');
    contactB1.innerHTML = "Boyfriend Staff:";
    const contactB2 = document.createElement('p');
    contactB2.innerHTML = "*Whine! Bark! Whine!*";
    contactB.appendChild(contactB1);
    contactB.appendChild(contactB2);

    const contactBox = document.createElement('div');
    contactBox.appendChild(contactTitle);
    contactBox.appendChild(contactA);
    contactBox.appendChild(contactB);
    contactBox.classList.add('contactbox');
    document.getElementById('content').appendChild(contactBox);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homePage = function() {
    
    const welcomeA = document.createElement('p');
    welcomeA.innerHTML = "Welcome to Martie's Café!";

    const welcomeB = document.createElement('p');
    welcomeB.innerHTML = "The café where you can buy Martie treats to eat";

    const welcomeBox = document.createElement('div');
    welcomeBox.appendChild(welcomeA);
    welcomeBox.appendChild(welcomeB);
    welcomeBox.classList.add('welcomebox');
    document.getElementById('content').appendChild(welcomeBox);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const title = document.createElement('p');
title.innerHTML = 'Martie\'s Café';
title.classList.add('title');
document.getElementById('header').appendChild(title);

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

const tabs = document.querySelectorAll('.tab-button');

const content = document.querySelector('#content');
content.classList.add('fade-in');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        content.classList.remove('fade-in');
        
        setTimeout(() => {
            content.innerHTML = '';

            const tabId = tab.getAttribute('data-tab');

            switch(tabId) {
                case 'home':
                    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
                    break;
                case 'menu':
                    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    break;
                case 'about':
                    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                    break;
            }

            content.classList.add('fade-in');
        }, 400);
    });
});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import berriesImage from './noun-berries-2484585.svg';

const menuPage = function() {
    
    //    factory function to make menu items?
    const createMenuItem = function(name, price) {
        return {
            name: name,
            price: price
        };
    };

    const apps = document.createElement('div');
    apps.classList.add('menusection');

    // appetizers
    const apps_left = document.createElement('div');
    const apps_left_img = document.createElement('img');
    apps_left_img.src = 'noun-berries-2484585.svg';
    // apps_left_img.src = berriesImage;
    apps_left_img.width = 50;
    apps_left.appendChild(apps_left_img);
    apps_left.classList.add('menu_item', 'title_left');
    apps.appendChild(apps_left);

    const apps_title = document.createElement('div');
    apps_title.innerHTML = 'Appetizers';
    apps_title.classList.add('menu_item','menu_title');
    apps.appendChild(apps_title);

    const apps_right = document.createElement('div');
    const apps_right_img = document.createElement('img');
    apps_right_img.src = 'noun-berries-2484585.svg';
    apps_right_img.width = 50;
    apps_right.appendChild(apps_right_img);
    apps_right.classList.add('menu_item');
    apps.appendChild(apps_right);

    // Create menu item objects using the factory function
    const blueberries = createMenuItem('Blueberries', '$11');
    const carrots = createMenuItem('Carrots', '$8');
    const cucumber = createMenuItem('Cucumber', '$6');
    const dirt = createMenuItem('Dirt', '$5');
    const twigs = createMenuItem('Twigs', '$8');

    // Create an array of menu item objects
    const appItems = [blueberries, carrots, cucumber, dirt, twigs];

    // Loop through the menu item objects and create the corresponding elements
    appItems.forEach(item => {
        const itemName = document.createElement('p');
        itemName.innerHTML = item.name;
        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = item.price;
        const itemBox = document.createElement('div');
        itemBox.classList.add('menu_item');
        itemBox.appendChild(itemName);
        itemBox.appendChild(itemPrice);
        apps.appendChild(itemBox);
    });

    // mains
    const mains = document.createElement('div');
    mains.classList.add('menusection');
    // // street chicken, bison burgers, kibble

    const mains_left = document.createElement('div');
    const mains_left_img = document.createElement('img');
    mains_left_img.src = 'noun-dog-bowl-3625676.svg';
    mains_left_img.width = 50;
    mains_left.appendChild(mains_left_img);
    mains_left.classList.add('menu_item', 'title_left');
    mains.appendChild(mains_left);

    const mains_title = document.createElement('div');
    mains_title.innerHTML = 'Mains';
    mains_title.classList.add('menu_item','menu_title');
    mains.appendChild(mains_title);

    const mains_right = document.createElement('div');
    const mains_right_img = document.createElement('img');
    mains_right_img.src = 'noun-dog-bowl-3625676.svg';
    mains_right_img.width = 50;
    mains_right.appendChild(mains_right_img);
    mains_right.classList.add('menu_item');
    mains.appendChild(mains_right);

    const streetchicken = createMenuItem('Street Chicken', '$23');
    const bisonburger = createMenuItem('Bison Burger', '$29');
    const kibble = createMenuItem('Kibble', '$22');

    // Create an array of menu item objects
    const mainsItems = [streetchicken, bisonburger, kibble];

    // Loop through the menu item objects and create the corresponding elements
    mainsItems.forEach(item => {
        const itemName = document.createElement('p');
        itemName.innerHTML = item.name;
        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = item.price;
        const itemBox = document.createElement('div');
        itemBox.classList.add('menu_item');
        itemBox.appendChild(itemName);
        itemBox.appendChild(itemPrice);
        mains.appendChild(itemBox);
    });



    const drinks = document.createElement('div');
    drinks.classList.add('menusection');
    // // street water, park water, bowl water

    const drinks_left = document.createElement('div');
    const drinks_left_img = document.createElement('img');
    drinks_left_img.src = 'noun-dog-bowl-3625676.svg';
    drinks_left_img.width = 50;
    drinks_left.appendChild(drinks_left_img);
    drinks_left.classList.add('menu_item', 'title_left');
    drinks.appendChild(drinks_left);

    const drinks_title = document.createElement('div');
    drinks_title.innerHTML = 'Drinks';
    drinks_title.classList.add('menu_item','menu_title');
    drinks.appendChild(drinks_title);

    const drinks_right = document.createElement('div');
    const drinks_right_img = document.createElement('img');
    drinks_right_img.src = 'noun-dog-bowl-3625676.svg';
    drinks_right_img.width = 50;
    drinks_right.appendChild(drinks_right_img);
    drinks_right.classList.add('menu_item');
    drinks.appendChild(drinks_right);

    

    const dogbowlwater = createMenuItem('Dog Bowl Water', '$9');
    const parkpuddle = createMenuItem('Park Puddle', '$11');
    const sidewalkgravy = createMenuItem('Street Gravy', '$12');


    const drinksItems = [dogbowlwater, parkpuddle, sidewalkgravy];

    drinksItems.forEach(item => {
        const itemName = document.createElement('p');
        itemName.innerHTML = item.name;
        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = item.price;
        const itemBox = document.createElement('div');
        itemBox.classList.add('menu_item');
        itemBox.appendChild(itemName);
        itemBox.appendChild(itemPrice);
        drinks.appendChild(itemBox);
    });

    const menunav = document.createElement('div');
    menunav.classList.add('menu-navigation');

    const apps_img = document.createElement('img');
    apps_img.src = 'noun-berries-2484585.svg';
    apps_img.width = 50;

    const apps_nav = document.createElement('div');
    apps_nav.appendChild(apps_img);
    menunav.appendChild(apps_nav);
    
    const mains_img = document.createElement('img');
    mains_img.src = 'noun-dog-bowl-3625676.svg';
    mains_img.width = 50;

    const mains_nav = document.createElement('div');
    mains_nav.appendChild(mains_img);
    menunav.appendChild(mains_nav);

    
    const drinks_img = document.createElement('img');
    drinks_img.src = 'noun-dog-bowl-1110108.svg';
    drinks_img.width = 50;

    const drinks_nav = document.createElement('div');
    drinks_nav.appendChild(drinks_img);
    menunav.appendChild(drinks_nav);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(menunav);

    document.getElementById('content').appendChild(menu);

    // Add menu sections to an array
    const sections = [apps, mains, drinks];

    // Add click event listeners to the navigation items
    apps_nav.addEventListener('click', () => showSection(0));
    mains_nav.addEventListener('click', () => showSection(1));
    drinks_nav.addEventListener('click', () => showSection(2));

    function showSection(index) {
        const activeSection = menu.querySelector('.active');

        if (activeSection && activeSection === sections[index]) {
            return; // Do nothing if the active section is clicked
        }

        if (activeSection) {
            activeSection.classList.remove('active');
            setTimeout(() => {
                menu.removeChild(activeSection);
            }, 500);
        }
    
        const newSection = sections[index];
        menu.appendChild(newSection);
        setTimeout(() => {
            newSection.classList.add('active');
        }, 0);
    }
    // Show the first section by default
    showSection(0);

};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./src/starving.jpg":
/*!**************************!*\
  !*** ./src/starving.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47f474f7791af4ed7db4.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7O0FBSUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zdGFydmluZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcbn1cblxuLyogKiB7Ym9yZGVyOiAxcHggc29saWQgcmVkfSAqL1xuXG4ud2VsY29tZWJveCwgLmNvbnRhY3Rib3gsIC50aXRsZSwgLm1lbnVfaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6IENoYWxrZHVzdGVyLCBmYW50YXN5O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4jY29udGVudC5mYWRlLWluIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4jaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MHZ3O1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMDAlO1xuICAgIFxufVxuXG4udGFiLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgICBmb250LXNpemU6IDEwNSU7XG4gICAgZm9udDogcmdiKDEwMSwgMTAxLCAxMDEpO1xufVxuXG4ud2VsY29tZWJveCwgLmNvbnRhY3Rib3gge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIGRpc3BsYXk6IGZsZXgtY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlbGNvbWVib3ggcDpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAxMzAlO1xufVxuXG4ud2VsY29tZWJveCBwOm50aC1jaGlsZCgyKSB7XG4gICAgZm9udC1zaXplOiA5MCU7XG59XG5cbi5jb250YWN0Ym94ID4gOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDEyMCU7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuXG4ubWVudSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjBweDtcbn1cblxuLm1lbnUtbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubWVudS1uYXZpZ2F0aW9uIGRpdiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnVzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xuICAgIHJvdy1nYXA6IDQwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAxMDQuNXB4O1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG59XG5cbi5tZW51c2VjdGlvbiA+IDpudGgtY2hpbGQobis0KSB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5tZW51c2VjdGlvbiA+IDpmaXJzdC1jaGlsZCB7XG4gICAgcm93LWdhcDogNTBweDtcbiAgfVxuXG4ubWVudXNlY3Rpb24uYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5tZW51X2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5tZW51X3RpdGxlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDE0MCU7XG59XG5cbi50aXRsZV9sZWZ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG59XG5cbi5jb250YWN0aW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZLEVBQUU7QUFDbEI7O0FBRUEsOEJBQThCOztBQUU5QjtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlEQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixnRUFBZ0U7SUFDaEUsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUVGO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlXFxufVxcblxcbi8qICoge2JvcmRlcjogMXB4IHNvbGlkIHJlZH0gKi9cXG5cXG4ud2VsY29tZWJveCwgLmNvbnRhY3Rib3gsIC50aXRsZSwgLm1lbnVfaXRlbSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaGFsa2R1c3RlciwgZmFudGFzeTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9zdGFydmluZy5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jY29udGVudC5mYWRlLWluIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDMwMCU7XFxuICAgIFxcbn1cXG5cXG4udGFiLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgICBmb250LXNpemU6IDEwNSU7XFxuICAgIGZvbnQ6IHJnYigxMDEsIDEwMSwgMTAxKTtcXG59XFxuXFxuLndlbGNvbWVib3gsIC5jb250YWN0Ym94IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXgtY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53ZWxjb21lYm94IHA6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDEzMCU7XFxufVxcblxcbi53ZWxjb21lYm94IHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxufVxcblxcbi5jb250YWN0Ym94ID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAxMjAlO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcblxcbi5tZW51IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjBweDtcXG59XFxuXFxuLm1lbnUtbmF2aWdhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudS1uYXZpZ2F0aW9uIGRpdiB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51c2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNTBweCwgYXV0byk7XFxuICAgIGNvbHVtbi1nYXA6IDMwcHg7XFxuICAgIHJvdy1nYXA6IDQwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMTA0LjVweDtcXG4gICAgZm9udC1zaXplOiAxMTAlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCwgb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXG59XFxuXFxuLm1lbnVzZWN0aW9uID4gOm50aC1jaGlsZChuKzQpIHtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5tZW51c2VjdGlvbiA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIHJvdy1nYXA6IDUwcHg7XFxuICB9XFxuXFxuLm1lbnVzZWN0aW9uLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbi5tZW51X2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbi5tZW51X3RpdGxlIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgZm9udC1zaXplOiAxNDAlO1xcbn1cXG5cXG4udGl0bGVfbGVmdCB7XFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG59XFxuXFxuLmNvbnRhY3RpbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFib3V0UGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0VGl0bGUuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XG5cbiAgICBjb25zdCBjb250YWN0QSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RBLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RpbmZvJyk7XG4gICAgY29uc3QgY29udGFjdEExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RBMS5pbm5lckhUTUwgPSBcIlN0YWZmOlwiO1xuICAgIGNvbnN0IGNvbnRhY3RBMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0QTIuaW5uZXJIVE1MID0gXCIqQmFyayEgQmFyayEgV2hpbmUhKlwiO1xuICAgIGNvbnRhY3RBLmFwcGVuZENoaWxkKGNvbnRhY3RBMSk7XG4gICAgY29udGFjdEEuYXBwZW5kQ2hpbGQoY29udGFjdEEyKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEIuY2xhc3NMaXN0LmFkZCgnY29udGFjdGluZm8nKTtcbiAgICBjb25zdCBjb250YWN0QjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEIxLmlubmVySFRNTCA9IFwiQm95ZnJpZW5kIFN0YWZmOlwiO1xuICAgIGNvbnN0IGNvbnRhY3RCMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0QjIuaW5uZXJIVE1MID0gXCIqV2hpbmUhIEJhcmshIFdoaW5lISpcIjtcbiAgICBjb250YWN0Qi5hcHBlbmRDaGlsZChjb250YWN0QjEpO1xuICAgIGNvbnRhY3RCLmFwcGVuZENoaWxkKGNvbnRhY3RCMik7XG5cbiAgICBjb25zdCBjb250YWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQoY29udGFjdEEpO1xuICAgIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQoY29udGFjdEIpO1xuICAgIGNvbnRhY3RCb3guY2xhc3NMaXN0LmFkZCgnY29udGFjdGJveCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFjdEJveCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0UGFnZTsiLCJjb25zdCBob21lUGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IHdlbGNvbWVBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlbGNvbWVBLmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBNYXJ0aWUncyBDYWbDqSFcIjtcblxuICAgIGNvbnN0IHdlbGNvbWVCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlbGNvbWVCLmlubmVySFRNTCA9IFwiVGhlIGNhZsOpIHdoZXJlIHlvdSBjYW4gYnV5IE1hcnRpZSB0cmVhdHMgdG8gZWF0XCI7XG5cbiAgICBjb25zdCB3ZWxjb21lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VsY29tZUJveC5hcHBlbmRDaGlsZCh3ZWxjb21lQSk7XG4gICAgd2VsY29tZUJveC5hcHBlbmRDaGlsZCh3ZWxjb21lQik7XG4gICAgd2VsY29tZUJveC5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lYm94Jyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh3ZWxjb21lQm94KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2U7IiwiaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG50aXRsZS5pbm5lckhUTUwgPSAnTWFydGllXFwncyBDYWbDqSc7XG50aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuaG9tZVBhZ2UoKTtcblxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWItYnV0dG9uJyk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG5cbnRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJyk7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhYklkID0gdGFiLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKTtcblxuICAgICAgICAgICAgc3dpdGNoKHRhYklkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgICAgIGhvbWVQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgICAgICAgICBtZW51UGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhYm91dCc6XG4gICAgICAgICAgICAgICAgICAgIGFib3V0UGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfSk7XG59KTsiLCIvLyBpbXBvcnQgYmVycmllc0ltYWdlIGZyb20gJy4vbm91bi1iZXJyaWVzLTI0ODQ1ODUuc3ZnJztcblxuY29uc3QgbWVudVBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvLyAgICBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgbWVudSBpdGVtcz9cbiAgICBjb25zdCBjcmVhdGVNZW51SXRlbSA9IGZ1bmN0aW9uKG5hbWUsIHByaWNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGFwcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBzLmNsYXNzTGlzdC5hZGQoJ21lbnVzZWN0aW9uJyk7XG5cbiAgICAvLyBhcHBldGl6ZXJzXG4gICAgY29uc3QgYXBwc19sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYXBwc19sZWZ0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFwcHNfbGVmdF9pbWcuc3JjID0gJ25vdW4tYmVycmllcy0yNDg0NTg1LnN2Zyc7XG4gICAgLy8gYXBwc19sZWZ0X2ltZy5zcmMgPSBiZXJyaWVzSW1hZ2U7XG4gICAgYXBwc19sZWZ0X2ltZy53aWR0aCA9IDUwO1xuICAgIGFwcHNfbGVmdC5hcHBlbmRDaGlsZChhcHBzX2xlZnRfaW1nKTtcbiAgICBhcHBzX2xlZnQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywgJ3RpdGxlX2xlZnQnKTtcbiAgICBhcHBzLmFwcGVuZENoaWxkKGFwcHNfbGVmdCk7XG5cbiAgICBjb25zdCBhcHBzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwc190aXRsZS5pbm5lckhUTUwgPSAnQXBwZXRpemVycyc7XG4gICAgYXBwc190aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nLCdtZW51X3RpdGxlJyk7XG4gICAgYXBwcy5hcHBlbmRDaGlsZChhcHBzX3RpdGxlKTtcblxuICAgIGNvbnN0IGFwcHNfcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhcHBzX3JpZ2h0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFwcHNfcmlnaHRfaW1nLnNyYyA9ICdub3VuLWJlcnJpZXMtMjQ4NDU4NS5zdmcnO1xuICAgIGFwcHNfcmlnaHRfaW1nLndpZHRoID0gNTA7XG4gICAgYXBwc19yaWdodC5hcHBlbmRDaGlsZChhcHBzX3JpZ2h0X2ltZyk7XG4gICAgYXBwc19yaWdodC5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nKTtcbiAgICBhcHBzLmFwcGVuZENoaWxkKGFwcHNfcmlnaHQpO1xuXG4gICAgLy8gQ3JlYXRlIG1lbnUgaXRlbSBvYmplY3RzIHVzaW5nIHRoZSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgY29uc3QgYmx1ZWJlcnJpZXMgPSBjcmVhdGVNZW51SXRlbSgnQmx1ZWJlcnJpZXMnLCAnJDExJyk7XG4gICAgY29uc3QgY2Fycm90cyA9IGNyZWF0ZU1lbnVJdGVtKCdDYXJyb3RzJywgJyQ4Jyk7XG4gICAgY29uc3QgY3VjdW1iZXIgPSBjcmVhdGVNZW51SXRlbSgnQ3VjdW1iZXInLCAnJDYnKTtcbiAgICBjb25zdCBkaXJ0ID0gY3JlYXRlTWVudUl0ZW0oJ0RpcnQnLCAnJDUnKTtcbiAgICBjb25zdCB0d2lncyA9IGNyZWF0ZU1lbnVJdGVtKCdUd2lncycsICckOCcpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIG1lbnUgaXRlbSBvYmplY3RzXG4gICAgY29uc3QgYXBwSXRlbXMgPSBbYmx1ZWJlcnJpZXMsIGNhcnJvdHMsIGN1Y3VtYmVyLCBkaXJ0LCB0d2lnc107XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIG1lbnUgaXRlbSBvYmplY3RzIGFuZCBjcmVhdGUgdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudHNcbiAgICBhcHBJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuICAgICAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtQm94LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIGFwcHMuYXBwZW5kQ2hpbGQoaXRlbUJveCk7XG4gICAgfSk7XG5cbiAgICAvLyBtYWluc1xuICAgIGNvbnN0IG1haW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbnMuY2xhc3NMaXN0LmFkZCgnbWVudXNlY3Rpb24nKTtcbiAgICAvLyAvLyBzdHJlZXQgY2hpY2tlbiwgYmlzb24gYnVyZ2Vycywga2liYmxlXG5cbiAgICBjb25zdCBtYWluc19sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbnNfbGVmdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluc19sZWZ0X2ltZy5zcmMgPSAnbm91bi1kb2ctYm93bC0zNjI1Njc2LnN2Zyc7XG4gICAgbWFpbnNfbGVmdF9pbWcud2lkdGggPSA1MDtcbiAgICBtYWluc19sZWZ0LmFwcGVuZENoaWxkKG1haW5zX2xlZnRfaW1nKTtcbiAgICBtYWluc19sZWZ0LmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbScsICd0aXRsZV9sZWZ0Jyk7XG4gICAgbWFpbnMuYXBwZW5kQ2hpbGQobWFpbnNfbGVmdCk7XG5cbiAgICBjb25zdCBtYWluc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5zX3RpdGxlLmlubmVySFRNTCA9ICdNYWlucyc7XG4gICAgbWFpbnNfdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywnbWVudV90aXRsZScpO1xuICAgIG1haW5zLmFwcGVuZENoaWxkKG1haW5zX3RpdGxlKTtcblxuICAgIGNvbnN0IG1haW5zX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbnNfcmlnaHRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbnNfcmlnaHRfaW1nLnNyYyA9ICdub3VuLWRvZy1ib3dsLTM2MjU2NzYuc3ZnJztcbiAgICBtYWluc19yaWdodF9pbWcud2lkdGggPSA1MDtcbiAgICBtYWluc19yaWdodC5hcHBlbmRDaGlsZChtYWluc19yaWdodF9pbWcpO1xuICAgIG1haW5zX3JpZ2h0LmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbScpO1xuICAgIG1haW5zLmFwcGVuZENoaWxkKG1haW5zX3JpZ2h0KTtcblxuICAgIGNvbnN0IHN0cmVldGNoaWNrZW4gPSBjcmVhdGVNZW51SXRlbSgnU3RyZWV0IENoaWNrZW4nLCAnJDIzJyk7XG4gICAgY29uc3QgYmlzb25idXJnZXIgPSBjcmVhdGVNZW51SXRlbSgnQmlzb24gQnVyZ2VyJywgJyQyOScpO1xuICAgIGNvbnN0IGtpYmJsZSA9IGNyZWF0ZU1lbnVJdGVtKCdLaWJibGUnLCAnJDIyJyk7XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgbWVudSBpdGVtIG9iamVjdHNcbiAgICBjb25zdCBtYWluc0l0ZW1zID0gW3N0cmVldGNoaWNrZW4sIGJpc29uYnVyZ2VyLCBraWJibGVdO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBtZW51IGl0ZW0gb2JqZWN0cyBhbmQgY3JlYXRlIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnRzXG4gICAgbWFpbnNJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuICAgICAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtQm94LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIG1haW5zLmFwcGVuZENoaWxkKGl0ZW1Cb3gpO1xuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rcy5jbGFzc0xpc3QuYWRkKCdtZW51c2VjdGlvbicpO1xuICAgIC8vIC8vIHN0cmVldCB3YXRlciwgcGFyayB3YXRlciwgYm93bCB3YXRlclxuXG4gICAgY29uc3QgZHJpbmtzX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkcmlua3NfbGVmdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkcmlua3NfbGVmdF9pbWcuc3JjID0gJ25vdW4tZG9nLWJvd2wtMzYyNTY3Ni5zdmcnO1xuICAgIGRyaW5rc19sZWZ0X2ltZy53aWR0aCA9IDUwO1xuICAgIGRyaW5rc19sZWZ0LmFwcGVuZENoaWxkKGRyaW5rc19sZWZ0X2ltZyk7XG4gICAgZHJpbmtzX2xlZnQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywgJ3RpdGxlX2xlZnQnKTtcbiAgICBkcmlua3MuYXBwZW5kQ2hpbGQoZHJpbmtzX2xlZnQpO1xuXG4gICAgY29uc3QgZHJpbmtzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzX3RpdGxlLmlubmVySFRNTCA9ICdEcmlua3MnO1xuICAgIGRyaW5rc190aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nLCdtZW51X3RpdGxlJyk7XG4gICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc190aXRsZSk7XG5cbiAgICBjb25zdCBkcmlua3NfcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkcmlua3NfcmlnaHRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZHJpbmtzX3JpZ2h0X2ltZy5zcmMgPSAnbm91bi1kb2ctYm93bC0zNjI1Njc2LnN2Zyc7XG4gICAgZHJpbmtzX3JpZ2h0X2ltZy53aWR0aCA9IDUwO1xuICAgIGRyaW5rc19yaWdodC5hcHBlbmRDaGlsZChkcmlua3NfcmlnaHRfaW1nKTtcbiAgICBkcmlua3NfcmlnaHQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc19yaWdodCk7XG5cbiAgICBcblxuICAgIGNvbnN0IGRvZ2Jvd2x3YXRlciA9IGNyZWF0ZU1lbnVJdGVtKCdEb2cgQm93bCBXYXRlcicsICckOScpO1xuICAgIGNvbnN0IHBhcmtwdWRkbGUgPSBjcmVhdGVNZW51SXRlbSgnUGFyayBQdWRkbGUnLCAnJDExJyk7XG4gICAgY29uc3Qgc2lkZXdhbGtncmF2eSA9IGNyZWF0ZU1lbnVJdGVtKCdTdHJlZXQgR3JhdnknLCAnJDEyJyk7XG5cblxuICAgIGNvbnN0IGRyaW5rc0l0ZW1zID0gW2RvZ2Jvd2x3YXRlciwgcGFya3B1ZGRsZSwgc2lkZXdhbGtncmF2eV07XG5cbiAgICBkcmlua3NJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuICAgICAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtQm94LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIGRyaW5rcy5hcHBlbmRDaGlsZChpdGVtQm94KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51bmF2LmNsYXNzTGlzdC5hZGQoJ21lbnUtbmF2aWdhdGlvbicpO1xuXG4gICAgY29uc3QgYXBwc19pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhcHBzX2ltZy5zcmMgPSAnbm91bi1iZXJyaWVzLTI0ODQ1ODUuc3ZnJztcbiAgICBhcHBzX2ltZy53aWR0aCA9IDUwO1xuXG4gICAgY29uc3QgYXBwc19uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBzX25hdi5hcHBlbmRDaGlsZChhcHBzX2ltZyk7XG4gICAgbWVudW5hdi5hcHBlbmRDaGlsZChhcHBzX25hdik7XG4gICAgXG4gICAgY29uc3QgbWFpbnNfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbnNfaW1nLnNyYyA9ICdub3VuLWRvZy1ib3dsLTM2MjU2NzYuc3ZnJztcbiAgICBtYWluc19pbWcud2lkdGggPSA1MDtcblxuICAgIGNvbnN0IG1haW5zX25hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5zX25hdi5hcHBlbmRDaGlsZChtYWluc19pbWcpO1xuICAgIG1lbnVuYXYuYXBwZW5kQ2hpbGQobWFpbnNfbmF2KTtcblxuICAgIFxuICAgIGNvbnN0IGRyaW5rc19pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkcmlua3NfaW1nLnNyYyA9ICdub3VuLWRvZy1ib3dsLTExMTAxMDguc3ZnJztcbiAgICBkcmlua3NfaW1nLndpZHRoID0gNTA7XG5cbiAgICBjb25zdCBkcmlua3NfbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzX25hdi5hcHBlbmRDaGlsZChkcmlua3NfaW1nKTtcbiAgICBtZW51bmF2LmFwcGVuZENoaWxkKGRyaW5rc19uYXYpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudW5hdik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgLy8gQWRkIG1lbnUgc2VjdGlvbnMgdG8gYW4gYXJyYXlcbiAgICBjb25zdCBzZWN0aW9ucyA9IFthcHBzLCBtYWlucywgZHJpbmtzXTtcblxuICAgIC8vIEFkZCBjbGljayBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIG5hdmlnYXRpb24gaXRlbXNcbiAgICBhcHBzX25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dTZWN0aW9uKDApKTtcbiAgICBtYWluc19uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93U2VjdGlvbigxKSk7XG4gICAgZHJpbmtzX25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dTZWN0aW9uKDIpKTtcblxuICAgIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcblxuICAgICAgICBpZiAoYWN0aXZlU2VjdGlvbiAmJiBhY3RpdmVTZWN0aW9uID09PSBzZWN0aW9uc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gRG8gbm90aGluZyBpZiB0aGUgYWN0aXZlIHNlY3Rpb24gaXMgY2xpY2tlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKGFjdGl2ZVNlY3Rpb24pO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBuZXdTZWN0aW9uID0gc2VjdGlvbnNbaW5kZXhdO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG5ld1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICAvLyBTaG93IHRoZSBmaXJzdCBzZWN0aW9uIGJ5IGRlZmF1bHRcbiAgICBzaG93U2VjdGlvbigwKTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=