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
/* harmony import */ var _noun_berries_2484585_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noun-berries-2484585.svg */ "./src/noun-berries-2484585.svg");
/* harmony import */ var _noun_dog_bowl_3625676_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noun-dog-bowl-3625676.svg */ "./src/noun-dog-bowl-3625676.svg");
/* harmony import */ var _noun_dog_bowl_1110108_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noun-dog-bowl-1110108.svg */ "./src/noun-dog-bowl-1110108.svg");




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
    // apps_left_img.src = 'noun-berries-2484585.svg';
    apps_left_img.src = _noun_berries_2484585_svg__WEBPACK_IMPORTED_MODULE_0__;
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
    // apps_right_img.src = 'noun-berries-2484585.svg';
    apps_right_img.src = _noun_berries_2484585_svg__WEBPACK_IMPORTED_MODULE_0__;
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
    mains_left_img.src = _noun_dog_bowl_3625676_svg__WEBPACK_IMPORTED_MODULE_1__;
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
    mains_right_img.src = _noun_dog_bowl_3625676_svg__WEBPACK_IMPORTED_MODULE_1__;
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
    drinks_left_img.src = _noun_dog_bowl_1110108_svg__WEBPACK_IMPORTED_MODULE_2__;
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
    drinks_right_img.src = _noun_dog_bowl_1110108_svg__WEBPACK_IMPORTED_MODULE_2__;
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
    apps_img.src = _noun_berries_2484585_svg__WEBPACK_IMPORTED_MODULE_0__;
    apps_img.width = 50;

    const apps_nav = document.createElement('div');
    apps_nav.appendChild(apps_img);
    menunav.appendChild(apps_nav);
    
    const mains_img = document.createElement('img');
    mains_img.src = _noun_dog_bowl_3625676_svg__WEBPACK_IMPORTED_MODULE_1__;
    mains_img.width = 50;

    const mains_nav = document.createElement('div');
    mains_nav.appendChild(mains_img);
    menunav.appendChild(mains_nav);

    
    const drinks_img = document.createElement('img');
    drinks_img.src = _noun_dog_bowl_1110108_svg__WEBPACK_IMPORTED_MODULE_2__;
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

/***/ "./src/noun-berries-2484585.svg":
/*!**************************************!*\
  !*** ./src/noun-berries-2484585.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2ed26d2e3af19b897843.svg";

/***/ }),

/***/ "./src/noun-dog-bowl-1110108.svg":
/*!***************************************!*\
  !*** ./src/noun-dog-bowl-1110108.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e0c8f55a67416440bce1.svg";

/***/ }),

/***/ "./src/noun-dog-bowl-3625676.svg":
/*!***************************************!*\
  !*** ./src/noun-dog-bowl-3625676.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/655df14d7ad546f7b98e.svg";

/***/ }),

/***/ "./src/starving.jpg":
/*!**************************!*\
  !*** ./src/starving.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0eb3f0d0984d11142021.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3N0YXJ2aW5nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJVxufVxuXG4vKiAqIHtib3JkZXI6IDFweCBzb2xpZCByZWR9ICovXG5cbi53ZWxjb21lYm94LCAuY29udGFjdGJveCwgLnRpdGxlLCAubWVudV9pdGVtIHtcbiAgICBmb250LWZhbWlseTogQ2hhbGtkdXN0ZXIsIGZhbnRhc3k7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbiNjb250ZW50LmZhZGUtaW4ge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbiNoZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwdnc7XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDMwMCU7XG4gICAgXG59XG5cbi50YWItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC43KTtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xuICAgIGZvbnQtc2l6ZTogMTA1JTtcbiAgICBmb250OiByZ2IoMTAxLCAxMDEsIDEwMSk7XG59XG5cbi53ZWxjb21lYm94LCAuY29udGFjdGJveCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgZGlzcGxheTogZmxleC1jb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VsY29tZWJveCBwOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDEzMCU7XG59XG5cbi53ZWxjb21lYm94IHA6bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXNpemU6IDkwJTtcbn1cblxuLmNvbnRhY3Rib3ggPiA6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG59XG5cbi5tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xufVxuXG4ubWVudS1uYXZpZ2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5tZW51LW5hdmlnYXRpb24gZGl2IHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDUwcHgsIGF1dG8pO1xuICAgIGNvbHVtbi1nYXA6IDMwcHg7XG4gICAgcm93LWdhcDogNDBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDEwNC41cHg7XG4gICAgZm9udC1zaXplOiAxMTAlO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbn1cblxuLm1lbnVzZWN0aW9uID4gOm50aC1jaGlsZChuKzQpIHtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLm1lbnVzZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcbiAgICByb3ctZ2FwOiA1MHB4O1xuICB9XG5cbi5tZW51c2VjdGlvbi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLm1lbnVfaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjVweDtcbn1cblxuLm1lbnVfdGl0bGUge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMTQwJTtcbn1cblxuLnRpdGxlX2xlZnQge1xuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbn1cblxuLmNvbnRhY3RpbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVksRUFBRTtBQUNsQjs7QUFFQSw4QkFBOEI7O0FBRTlCO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseURBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdFQUFnRTtJQUNoRSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcXG59XFxuXFxuLyogKiB7Ym9yZGVyOiAxcHggc29saWQgcmVkfSAqL1xcblxcbi53ZWxjb21lYm94LCAuY29udGFjdGJveCwgLnRpdGxlLCAubWVudV9pdGVtIHtcXG4gICAgZm9udC1mYW1pbHk6IENoYWxrZHVzdGVyLCBmYW50YXN5O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3N0YXJ2aW5nLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNjb250ZW50LmZhZGUtaW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwdnc7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzAwJTtcXG4gICAgXFxufVxcblxcbi50YWItYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICAgIGZvbnQtc2l6ZTogMTA1JTtcXG4gICAgZm9udDogcmdiKDEwMSwgMTAxLCAxMDEpO1xcbn1cXG5cXG4ud2VsY29tZWJveCwgLmNvbnRhY3Rib3gge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXG4gICAgZGlzcGxheTogZmxleC1jb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndlbGNvbWVib3ggcDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMTMwJTtcXG59XFxuXFxuLndlbGNvbWVib3ggcDpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXNpemU6IDkwJTtcXG59XFxuXFxuLmNvbnRhY3Rib3ggPiA6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDEyMCU7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MHB4O1xcbn1cXG5cXG4ubWVudS1uYXZpZ2F0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tZW51LW5hdmlnYXRpb24gZGl2IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVzZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCg1MHB4LCBhdXRvKTtcXG4gICAgY29sdW1uLWdhcDogMzBweDtcXG4gICAgcm93LWdhcDogNDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAxMDQuNXB4O1xcbiAgICBmb250LXNpemU6IDExMCU7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcbn1cXG5cXG4ubWVudXNlY3Rpb24gPiA6bnRoLWNoaWxkKG4rNCkge1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLm1lbnVzZWN0aW9uID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgcm93LWdhcDogNTBweDtcXG4gIH1cXG5cXG4ubWVudXNlY3Rpb24uYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuLm1lbnVfaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuLm1lbnVfdGl0bGUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBmb250LXNpemU6IDE0MCU7XFxufVxcblxcbi50aXRsZV9sZWZ0IHtcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbn1cXG5cXG4uY29udGFjdGluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYWJvdXRQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RUaXRsZS5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEEuY2xhc3NMaXN0LmFkZCgnY29udGFjdGluZm8nKTtcbiAgICBjb25zdCBjb250YWN0QTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEExLmlubmVySFRNTCA9IFwiU3RhZmY6XCI7XG4gICAgY29uc3QgY29udGFjdEEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RBMi5pbm5lckhUTUwgPSBcIipCYXJrISBCYXJrISBXaGluZSEqXCI7XG4gICAgY29udGFjdEEuYXBwZW5kQ2hpbGQoY29udGFjdEExKTtcbiAgICBjb250YWN0QS5hcHBlbmRDaGlsZChjb250YWN0QTIpO1xuXG4gICAgY29uc3QgY29udGFjdEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Qi5jbGFzc0xpc3QuYWRkKCdjb250YWN0aW5mbycpO1xuICAgIGNvbnN0IGNvbnRhY3RCMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0QjEuaW5uZXJIVE1MID0gXCJCb3lmcmllbmQgU3RhZmY6XCI7XG4gICAgY29uc3QgY29udGFjdEIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RCMi5pbm5lckhUTUwgPSBcIipXaGluZSEgQmFyayEgV2hpbmUhKlwiO1xuICAgIGNvbnRhY3RCLmFwcGVuZENoaWxkKGNvbnRhY3RCMSk7XG4gICAgY29udGFjdEIuYXBwZW5kQ2hpbGQoY29udGFjdEIyKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjb250YWN0QSk7XG4gICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjb250YWN0Qik7XG4gICAgY29udGFjdEJveC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Ym94Jyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWN0Qm94KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRQYWdlOyIsImNvbnN0IGhvbWVQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgY29uc3Qgd2VsY29tZUEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VsY29tZUEuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIE1hcnRpZSdzIENhZsOpIVwiO1xuXG4gICAgY29uc3Qgd2VsY29tZUIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2VsY29tZUIuaW5uZXJIVE1MID0gXCJUaGUgY2Fmw6kgd2hlcmUgeW91IGNhbiBidXkgTWFydGllIHRyZWF0cyB0byBlYXRcIjtcblxuICAgIGNvbnN0IHdlbGNvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lQm94LmFwcGVuZENoaWxkKHdlbGNvbWVBKTtcbiAgICB3ZWxjb21lQm94LmFwcGVuZENoaWxkKHdlbGNvbWVCKTtcbiAgICB3ZWxjb21lQm94LmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWVib3gnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKHdlbGNvbWVCb3gpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGFib3V0UGFnZSBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnRpdGxlLmlubmVySFRNTCA9ICdNYXJ0aWVcXCdzIENhZsOpJztcbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5ob21lUGFnZSgpO1xuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1idXR0b24nKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcblxudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgY29uc3QgdGFiSWQgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhYicpO1xuXG4gICAgICAgICAgICBzd2l0Y2godGFiSWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgICAgICAgICAgaG9tZVBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgICAgICAgIG1lbnVQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Fib3V0JzpcbiAgICAgICAgICAgICAgICAgICAgYWJvdXRQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9KTtcbn0pOyIsImltcG9ydCBiZXJyaWVzSW1hZ2UgZnJvbSAnLi9ub3VuLWJlcnJpZXMtMjQ4NDU4NS5zdmcnO1xuaW1wb3J0IGRvZ0Jvd2xJbWFnZSBmcm9tICcuL25vdW4tZG9nLWJvd2wtMzYyNTY3Ni5zdmcnO1xuaW1wb3J0IGRyaW5rQm93bEltYWdlIGZyb20gJy4vbm91bi1kb2ctYm93bC0xMTEwMTA4LnN2Zyc7XG5cbmNvbnN0IG1lbnVQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgLy8gICAgZmFjdG9yeSBmdW5jdGlvbiB0byBtYWtlIG1lbnUgaXRlbXM/XG4gICAgY29uc3QgY3JlYXRlTWVudUl0ZW0gPSBmdW5jdGlvbihuYW1lLCBwcmljZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHByaWNlOiBwcmljZVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBhcHBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwcy5jbGFzc0xpc3QuYWRkKCdtZW51c2VjdGlvbicpO1xuXG4gICAgLy8gYXBwZXRpemVyc1xuICAgIGNvbnN0IGFwcHNfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFwcHNfbGVmdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyBhcHBzX2xlZnRfaW1nLnNyYyA9ICdub3VuLWJlcnJpZXMtMjQ4NDU4NS5zdmcnO1xuICAgIGFwcHNfbGVmdF9pbWcuc3JjID0gYmVycmllc0ltYWdlO1xuICAgIGFwcHNfbGVmdF9pbWcud2lkdGggPSA1MDtcbiAgICBhcHBzX2xlZnQuYXBwZW5kQ2hpbGQoYXBwc19sZWZ0X2ltZyk7XG4gICAgYXBwc19sZWZ0LmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbScsICd0aXRsZV9sZWZ0Jyk7XG4gICAgYXBwcy5hcHBlbmRDaGlsZChhcHBzX2xlZnQpO1xuXG4gICAgY29uc3QgYXBwc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFwcHNfdGl0bGUuaW5uZXJIVE1MID0gJ0FwcGV0aXplcnMnO1xuICAgIGFwcHNfdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywnbWVudV90aXRsZScpO1xuICAgIGFwcHMuYXBwZW5kQ2hpbGQoYXBwc190aXRsZSk7XG5cbiAgICBjb25zdCBhcHBzX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYXBwc19yaWdodF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyBhcHBzX3JpZ2h0X2ltZy5zcmMgPSAnbm91bi1iZXJyaWVzLTI0ODQ1ODUuc3ZnJztcbiAgICBhcHBzX3JpZ2h0X2ltZy5zcmMgPSBiZXJyaWVzSW1hZ2U7XG4gICAgYXBwc19yaWdodF9pbWcud2lkdGggPSA1MDtcbiAgICBhcHBzX3JpZ2h0LmFwcGVuZENoaWxkKGFwcHNfcmlnaHRfaW1nKTtcbiAgICBhcHBzX3JpZ2h0LmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbScpO1xuICAgIGFwcHMuYXBwZW5kQ2hpbGQoYXBwc19yaWdodCk7XG5cbiAgICAvLyBDcmVhdGUgbWVudSBpdGVtIG9iamVjdHMgdXNpbmcgdGhlIGZhY3RvcnkgZnVuY3Rpb25cbiAgICBjb25zdCBibHVlYmVycmllcyA9IGNyZWF0ZU1lbnVJdGVtKCdCbHVlYmVycmllcycsICckMTEnKTtcbiAgICBjb25zdCBjYXJyb3RzID0gY3JlYXRlTWVudUl0ZW0oJ0NhcnJvdHMnLCAnJDgnKTtcbiAgICBjb25zdCBjdWN1bWJlciA9IGNyZWF0ZU1lbnVJdGVtKCdDdWN1bWJlcicsICckNicpO1xuICAgIGNvbnN0IGRpcnQgPSBjcmVhdGVNZW51SXRlbSgnRGlydCcsICckNScpO1xuICAgIGNvbnN0IHR3aWdzID0gY3JlYXRlTWVudUl0ZW0oJ1R3aWdzJywgJyQ4Jyk7XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgbWVudSBpdGVtIG9iamVjdHNcbiAgICBjb25zdCBhcHBJdGVtcyA9IFtibHVlYmVycmllcywgY2Fycm90cywgY3VjdW1iZXIsIGRpcnQsIHR3aWdzXTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgbWVudSBpdGVtIG9iamVjdHMgYW5kIGNyZWF0ZSB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50c1xuICAgIGFwcEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSBpdGVtLm5hbWU7XG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbVByaWNlLmlubmVySFRNTCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIGNvbnN0IGl0ZW1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUJveC5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nKTtcbiAgICAgICAgaXRlbUJveC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICAgICAgYXBwcy5hcHBlbmRDaGlsZChpdGVtQm94KTtcbiAgICB9KTtcblxuICAgIC8vIG1haW5zXG4gICAgY29uc3QgbWFpbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWlucy5jbGFzc0xpc3QuYWRkKCdtZW51c2VjdGlvbicpO1xuICAgIC8vIC8vIHN0cmVldCBjaGlja2VuLCBiaXNvbiBidXJnZXJzLCBraWJibGVcblxuICAgIGNvbnN0IG1haW5zX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluc19sZWZ0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5zX2xlZnRfaW1nLnNyYyA9IGRvZ0Jvd2xJbWFnZTtcbiAgICBtYWluc19sZWZ0X2ltZy53aWR0aCA9IDUwO1xuICAgIG1haW5zX2xlZnQuYXBwZW5kQ2hpbGQobWFpbnNfbGVmdF9pbWcpO1xuICAgIG1haW5zX2xlZnQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywgJ3RpdGxlX2xlZnQnKTtcbiAgICBtYWlucy5hcHBlbmRDaGlsZChtYWluc19sZWZ0KTtcblxuICAgIGNvbnN0IG1haW5zX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbnNfdGl0bGUuaW5uZXJIVE1MID0gJ01haW5zJztcbiAgICBtYWluc190aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nLCdtZW51X3RpdGxlJyk7XG4gICAgbWFpbnMuYXBwZW5kQ2hpbGQobWFpbnNfdGl0bGUpO1xuXG4gICAgY29uc3QgbWFpbnNfcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluc19yaWdodF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluc19yaWdodF9pbWcuc3JjID0gZG9nQm93bEltYWdlO1xuICAgIG1haW5zX3JpZ2h0X2ltZy53aWR0aCA9IDUwO1xuICAgIG1haW5zX3JpZ2h0LmFwcGVuZENoaWxkKG1haW5zX3JpZ2h0X2ltZyk7XG4gICAgbWFpbnNfcmlnaHQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgbWFpbnMuYXBwZW5kQ2hpbGQobWFpbnNfcmlnaHQpO1xuXG4gICAgY29uc3Qgc3RyZWV0Y2hpY2tlbiA9IGNyZWF0ZU1lbnVJdGVtKCdTdHJlZXQgQ2hpY2tlbicsICckMjMnKTtcbiAgICBjb25zdCBiaXNvbmJ1cmdlciA9IGNyZWF0ZU1lbnVJdGVtKCdCaXNvbiBCdXJnZXInLCAnJDI5Jyk7XG4gICAgY29uc3Qga2liYmxlID0gY3JlYXRlTWVudUl0ZW0oJ0tpYmJsZScsICckMjInKTtcblxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBtZW51IGl0ZW0gb2JqZWN0c1xuICAgIGNvbnN0IG1haW5zSXRlbXMgPSBbc3RyZWV0Y2hpY2tlbiwgYmlzb25idXJnZXIsIGtpYmJsZV07XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIG1lbnUgaXRlbSBvYmplY3RzIGFuZCBjcmVhdGUgdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudHNcbiAgICBtYWluc0l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSBpdGVtLm5hbWU7XG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbVByaWNlLmlubmVySFRNTCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIGNvbnN0IGl0ZW1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUJveC5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nKTtcbiAgICAgICAgaXRlbUJveC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICAgICAgbWFpbnMuYXBwZW5kQ2hpbGQoaXRlbUJveCk7XG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgZHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzLmNsYXNzTGlzdC5hZGQoJ21lbnVzZWN0aW9uJyk7XG4gICAgLy8gLy8gc3RyZWV0IHdhdGVyLCBwYXJrIHdhdGVyLCBib3dsIHdhdGVyXG5cbiAgICBjb25zdCBkcmlua3NfbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRyaW5rc19sZWZ0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRyaW5rc19sZWZ0X2ltZy5zcmMgPSBkcmlua0Jvd2xJbWFnZTtcbiAgICBkcmlua3NfbGVmdF9pbWcud2lkdGggPSA1MDtcbiAgICBkcmlua3NfbGVmdC5hcHBlbmRDaGlsZChkcmlua3NfbGVmdF9pbWcpO1xuICAgIGRyaW5rc19sZWZ0LmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbScsICd0aXRsZV9sZWZ0Jyk7XG4gICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc19sZWZ0KTtcblxuICAgIGNvbnN0IGRyaW5rc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rc190aXRsZS5pbm5lckhUTUwgPSAnRHJpbmtzJztcbiAgICBkcmlua3NfdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywnbWVudV90aXRsZScpO1xuICAgIGRyaW5rcy5hcHBlbmRDaGlsZChkcmlua3NfdGl0bGUpO1xuXG4gICAgY29uc3QgZHJpbmtzX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZHJpbmtzX3JpZ2h0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRyaW5rc19yaWdodF9pbWcuc3JjID0gZHJpbmtCb3dsSW1hZ2U7XG4gICAgZHJpbmtzX3JpZ2h0X2ltZy53aWR0aCA9IDUwO1xuICAgIGRyaW5rc19yaWdodC5hcHBlbmRDaGlsZChkcmlua3NfcmlnaHRfaW1nKTtcbiAgICBkcmlua3NfcmlnaHQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc19yaWdodCk7XG5cbiAgICBcblxuICAgIGNvbnN0IGRvZ2Jvd2x3YXRlciA9IGNyZWF0ZU1lbnVJdGVtKCdEb2cgQm93bCBXYXRlcicsICckOScpO1xuICAgIGNvbnN0IHBhcmtwdWRkbGUgPSBjcmVhdGVNZW51SXRlbSgnUGFyayBQdWRkbGUnLCAnJDExJyk7XG4gICAgY29uc3Qgc2lkZXdhbGtncmF2eSA9IGNyZWF0ZU1lbnVJdGVtKCdTdHJlZXQgR3JhdnknLCAnJDEyJyk7XG5cblxuICAgIGNvbnN0IGRyaW5rc0l0ZW1zID0gW2RvZ2Jvd2x3YXRlciwgcGFya3B1ZGRsZSwgc2lkZXdhbGtncmF2eV07XG5cbiAgICBkcmlua3NJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuICAgICAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtQm94LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIGRyaW5rcy5hcHBlbmRDaGlsZChpdGVtQm94KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51bmF2LmNsYXNzTGlzdC5hZGQoJ21lbnUtbmF2aWdhdGlvbicpO1xuXG4gICAgY29uc3QgYXBwc19pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhcHBzX2ltZy5zcmMgPSBiZXJyaWVzSW1hZ2U7XG4gICAgYXBwc19pbWcud2lkdGggPSA1MDtcblxuICAgIGNvbnN0IGFwcHNfbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwc19uYXYuYXBwZW5kQ2hpbGQoYXBwc19pbWcpO1xuICAgIG1lbnVuYXYuYXBwZW5kQ2hpbGQoYXBwc19uYXYpO1xuICAgIFxuICAgIGNvbnN0IG1haW5zX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1haW5zX2ltZy5zcmMgPSBkb2dCb3dsSW1hZ2U7XG4gICAgbWFpbnNfaW1nLndpZHRoID0gNTA7XG5cbiAgICBjb25zdCBtYWluc19uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluc19uYXYuYXBwZW5kQ2hpbGQobWFpbnNfaW1nKTtcbiAgICBtZW51bmF2LmFwcGVuZENoaWxkKG1haW5zX25hdik7XG5cbiAgICBcbiAgICBjb25zdCBkcmlua3NfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZHJpbmtzX2ltZy5zcmMgPSBkcmlua0Jvd2xJbWFnZTtcbiAgICBkcmlua3NfaW1nLndpZHRoID0gNTA7XG5cbiAgICBjb25zdCBkcmlua3NfbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzX25hdi5hcHBlbmRDaGlsZChkcmlua3NfaW1nKTtcbiAgICBtZW51bmF2LmFwcGVuZENoaWxkKGRyaW5rc19uYXYpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudW5hdik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgLy8gQWRkIG1lbnUgc2VjdGlvbnMgdG8gYW4gYXJyYXlcbiAgICBjb25zdCBzZWN0aW9ucyA9IFthcHBzLCBtYWlucywgZHJpbmtzXTtcblxuICAgIC8vIEFkZCBjbGljayBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIG5hdmlnYXRpb24gaXRlbXNcbiAgICBhcHBzX25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dTZWN0aW9uKDApKTtcbiAgICBtYWluc19uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93U2VjdGlvbigxKSk7XG4gICAgZHJpbmtzX25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dTZWN0aW9uKDIpKTtcblxuICAgIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcblxuICAgICAgICBpZiAoYWN0aXZlU2VjdGlvbiAmJiBhY3RpdmVTZWN0aW9uID09PSBzZWN0aW9uc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gRG8gbm90aGluZyBpZiB0aGUgYWN0aXZlIHNlY3Rpb24gaXMgY2xpY2tlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKGFjdGl2ZVNlY3Rpb24pO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBuZXdTZWN0aW9uID0gc2VjdGlvbnNbaW5kZXhdO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG5ld1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICAvLyBTaG93IHRoZSBmaXJzdCBzZWN0aW9uIGJ5IGRlZmF1bHRcbiAgICBzaG93U2VjdGlvbigwKTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=