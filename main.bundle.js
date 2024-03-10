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

module.exports = __webpack_require__.p + "0eb3f0d0984d11142021.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcnRpZXNjYWZlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWFydGllc2NhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9tYXJ0aWVzY2FmZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21hcnRpZXNjYWZlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3RhcnZpbmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlXG59XG5cbi8qICoge2JvcmRlcjogMXB4IHNvbGlkIHJlZH0gKi9cblxuLndlbGNvbWVib3gsIC5jb250YWN0Ym94LCAudGl0bGUsIC5tZW51X2l0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiBDaGFsa2R1c3RlciwgZmFudGFzeTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcbn1cblxuI2NvbnRlbnQuZmFkZS1pbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuI2hlYWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTB2dztcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBcbn1cblxuLnRhYi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gICAgZm9udC1zaXplOiAxMDUlO1xuICAgIGZvbnQ6IHJnYigxMDEsIDEwMSwgMTAxKTtcbn1cblxuLndlbGNvbWVib3gsIC5jb250YWN0Ym94IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICBkaXNwbGF5OiBmbGV4LWNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53ZWxjb21lYm94IHA6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogMTMwJTtcbn1cblxuLndlbGNvbWVib3ggcDpudGgtY2hpbGQoMikge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xufVxuXG4uY29udGFjdGJveCA+IDpmaXJzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbn1cblxuLm1lbnUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNjB2dztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG59XG5cbi5tZW51LW5hdmlnYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm1lbnUtbmF2aWdhdGlvbiBkaXYge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW51c2VjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoNTBweCwgYXV0byk7XG4gICAgY29sdW1uLWdhcDogMzBweDtcbiAgICByb3ctZ2FwOiA0MHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTA0LjVweDtcbiAgICBmb250LXNpemU6IDExMCU7XG4gICAgbGVmdDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dCwgb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xufVxuXG4ubWVudXNlY3Rpb24gPiA6bnRoLWNoaWxkKG4rNCkge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4ubWVudXNlY3Rpb24gPiA6Zmlyc3QtY2hpbGQge1xuICAgIHJvdy1nYXA6IDUwcHg7XG4gIH1cblxuLm1lbnVzZWN0aW9uLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4ubWVudV9pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ubWVudV90aXRsZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxNDAlO1xufVxuXG4udGl0bGVfbGVmdCB7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xufVxuXG4uY29udGFjdGluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWSxFQUFFO0FBQ2xCOztBQUVBLDhCQUE4Qjs7QUFFOUI7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSx5REFBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0VBQWdFO0lBQ2hFLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFFRjtJQUNJLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJVxcbn1cXG5cXG4vKiAqIHtib3JkZXI6IDFweCBzb2xpZCByZWR9ICovXFxuXFxuLndlbGNvbWVib3gsIC5jb250YWN0Ym94LCAudGl0bGUsIC5tZW51X2l0ZW0ge1xcbiAgICBmb250LWZhbWlseTogQ2hhbGtkdXN0ZXIsIGZhbnRhc3k7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vc3RhcnZpbmcuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2NvbnRlbnQuZmFkZS1pbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTB2dztcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMDAlO1xcbiAgICBcXG59XFxuXFxuLnRhYi1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC43KTtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gICAgZm9udC1zaXplOiAxMDUlO1xcbiAgICBmb250OiByZ2IoMTAxLCAxMDEsIDEwMSk7XFxufVxcblxcbi53ZWxjb21lYm94LCAuY29udGFjdGJveCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4LWNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud2VsY29tZWJveCBwOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAxMzAlO1xcbn1cXG5cXG4ud2VsY29tZWJveCBwOm50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbn1cXG5cXG4uY29udGFjdGJveCA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMTIwJTtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwcHg7XFxufVxcblxcbi5tZW51LW5hdmlnYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLm1lbnUtbmF2aWdhdGlvbiBkaXYge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDUwcHgsIGF1dG8pO1xcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgICByb3ctZ2FwOiA0MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDEwNC41cHg7XFxuICAgIGZvbnQtc2l6ZTogMTEwJTtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxufVxcblxcbi5tZW51c2VjdGlvbiA+IDpudGgtY2hpbGQobis0KSB7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4ubWVudXNlY3Rpb24gPiA6Zmlyc3QtY2hpbGQge1xcbiAgICByb3ctZ2FwOiA1MHB4O1xcbiAgfVxcblxcbi5tZW51c2VjdGlvbi5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4ubWVudV9pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4ubWVudV90aXRsZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZvbnQtc2l6ZTogMTQwJTtcXG59XFxuXFxuLnRpdGxlX2xlZnQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XFxufVxcblxcbi5jb250YWN0aW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhYm91dFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdFRpdGxlLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3QgY29udGFjdEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0QS5jbGFzc0xpc3QuYWRkKCdjb250YWN0aW5mbycpO1xuICAgIGNvbnN0IGNvbnRhY3RBMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0QTEuaW5uZXJIVE1MID0gXCJTdGFmZjpcIjtcbiAgICBjb25zdCBjb250YWN0QTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEEyLmlubmVySFRNTCA9IFwiKkJhcmshIEJhcmshIFdoaW5lISpcIjtcbiAgICBjb250YWN0QS5hcHBlbmRDaGlsZChjb250YWN0QTEpO1xuICAgIGNvbnRhY3RBLmFwcGVuZENoaWxkKGNvbnRhY3RBMik7XG5cbiAgICBjb25zdCBjb250YWN0QiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RCLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RpbmZvJyk7XG4gICAgY29uc3QgY29udGFjdEIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RCMS5pbm5lckhUTUwgPSBcIkJveWZyaWVuZCBTdGFmZjpcIjtcbiAgICBjb25zdCBjb250YWN0QjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdEIyLmlubmVySFRNTCA9IFwiKldoaW5lISBCYXJrISBXaGluZSEqXCI7XG4gICAgY29udGFjdEIuYXBwZW5kQ2hpbGQoY29udGFjdEIxKTtcbiAgICBjb250YWN0Qi5hcHBlbmRDaGlsZChjb250YWN0QjIpO1xuXG4gICAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3RBKTtcbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3RCKTtcbiAgICBjb250YWN0Qm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Rib3gnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNvbnRhY3RCb3gpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dFBhZ2U7IiwiY29uc3QgaG9tZVBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB3ZWxjb21lQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3ZWxjb21lQS5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gTWFydGllJ3MgQ2Fmw6khXCI7XG5cbiAgICBjb25zdCB3ZWxjb21lQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3ZWxjb21lQi5pbm5lckhUTUwgPSBcIlRoZSBjYWbDqSB3aGVyZSB5b3UgY2FuIGJ1eSBNYXJ0aWUgdHJlYXRzIHRvIGVhdFwiO1xuXG4gICAgY29uc3Qgd2VsY29tZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWVCb3guYXBwZW5kQ2hpbGQod2VsY29tZUEpO1xuICAgIHdlbGNvbWVCb3guYXBwZW5kQ2hpbGQod2VsY29tZUIpO1xuICAgIHdlbGNvbWVCb3guY2xhc3NMaXN0LmFkZCgnd2VsY29tZWJveCcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQod2VsY29tZUJveCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlOyIsImltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gJy4vYWJvdXQuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xudGl0bGUuaW5uZXJIVE1MID0gJ01hcnRpZVxcJ3MgQ2Fmw6knO1xudGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmhvbWVQYWdlKCk7XG5cbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWJ1dHRvbicpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuXG50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpO1xuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBjb25zdCB0YWJJZCA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCh0YWJJZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgICAgICBob21lUGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgICAgICAgICAgbWVudVBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWJvdXQnOlxuICAgICAgICAgICAgICAgICAgICBhYm91dFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgICAgICB9LCA0MDApO1xuICAgIH0pO1xufSk7IiwiY29uc3QgbWVudVBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICAvLyAgICBmYWN0b3J5IGZ1bmN0aW9uIHRvIG1ha2UgbWVudSBpdGVtcz9cbiAgICBjb25zdCBjcmVhdGVNZW51SXRlbSA9IGZ1bmN0aW9uKG5hbWUsIHByaWNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGFwcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBzLmNsYXNzTGlzdC5hZGQoJ21lbnVzZWN0aW9uJyk7XG5cbiAgICAvLyBhcHBldGl6ZXJzXG4gICAgY29uc3QgYXBwc19sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYXBwc19sZWZ0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFwcHNfbGVmdF9pbWcuc3JjID0gJ25vdW4tYmVycmllcy0yNDg0NTg1LnN2Zyc7XG4gICAgYXBwc19sZWZ0X2ltZy53aWR0aCA9IDUwO1xuICAgIGFwcHNfbGVmdC5hcHBlbmRDaGlsZChhcHBzX2xlZnRfaW1nKTtcbiAgICBhcHBzX2xlZnQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywgJ3RpdGxlX2xlZnQnKTtcbiAgICBhcHBzLmFwcGVuZENoaWxkKGFwcHNfbGVmdCk7XG5cbiAgICBjb25zdCBhcHBzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBwc190aXRsZS5pbm5lckhUTUwgPSAnQXBwZXRpemVycyc7XG4gICAgYXBwc190aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nLCdtZW51X3RpdGxlJyk7XG4gICAgYXBwcy5hcHBlbmRDaGlsZChhcHBzX3RpdGxlKTtcblxuICAgIGNvbnN0IGFwcHNfcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhcHBzX3JpZ2h0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFwcHNfcmlnaHRfaW1nLnNyYyA9ICdub3VuLWJlcnJpZXMtMjQ4NDU4NS5zdmcnO1xuICAgIGFwcHNfcmlnaHRfaW1nLndpZHRoID0gNTA7XG4gICAgYXBwc19yaWdodC5hcHBlbmRDaGlsZChhcHBzX3JpZ2h0X2ltZyk7XG4gICAgYXBwc19yaWdodC5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nKTtcbiAgICBhcHBzLmFwcGVuZENoaWxkKGFwcHNfcmlnaHQpO1xuXG4gICAgLy8gQ3JlYXRlIG1lbnUgaXRlbSBvYmplY3RzIHVzaW5nIHRoZSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgY29uc3QgYmx1ZWJlcnJpZXMgPSBjcmVhdGVNZW51SXRlbSgnQmx1ZWJlcnJpZXMnLCAnJDExJyk7XG4gICAgY29uc3QgY2Fycm90cyA9IGNyZWF0ZU1lbnVJdGVtKCdDYXJyb3RzJywgJyQ4Jyk7XG4gICAgY29uc3QgY3VjdW1iZXIgPSBjcmVhdGVNZW51SXRlbSgnQ3VjdW1iZXInLCAnJDYnKTtcbiAgICBjb25zdCBkaXJ0ID0gY3JlYXRlTWVudUl0ZW0oJ0RpcnQnLCAnJDUnKTtcbiAgICBjb25zdCB0d2lncyA9IGNyZWF0ZU1lbnVJdGVtKCdUd2lncycsICckOCcpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIG1lbnUgaXRlbSBvYmplY3RzXG4gICAgY29uc3QgYXBwSXRlbXMgPSBbYmx1ZWJlcnJpZXMsIGNhcnJvdHMsIGN1Y3VtYmVyLCBkaXJ0LCB0d2lnc107XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIG1lbnUgaXRlbSBvYmplY3RzIGFuZCBjcmVhdGUgdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudHNcbiAgICBhcHBJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuICAgICAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtQm94LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIGFwcHMuYXBwZW5kQ2hpbGQoaXRlbUJveCk7XG4gICAgfSk7XG5cbiAgICAvLyBtYWluc1xuICAgIGNvbnN0IG1haW5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbnMuY2xhc3NMaXN0LmFkZCgnbWVudXNlY3Rpb24nKTtcbiAgICAvLyAvLyBzdHJlZXQgY2hpY2tlbiwgYmlzb24gYnVyZ2Vycywga2liYmxlXG5cbiAgICBjb25zdCBtYWluc19sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbnNfbGVmdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluc19sZWZ0X2ltZy5zcmMgPSAnbm91bi1kb2ctYm93bC0zNjI1Njc2LnN2Zyc7XG4gICAgbWFpbnNfbGVmdF9pbWcud2lkdGggPSA1MDtcbiAgICBtYWluc19sZWZ0LmFwcGVuZENoaWxkKG1haW5zX2xlZnRfaW1nKTtcbiAgICBtYWluc19sZWZ0LmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbScsICd0aXRsZV9sZWZ0Jyk7XG4gICAgbWFpbnMuYXBwZW5kQ2hpbGQobWFpbnNfbGVmdCk7XG5cbiAgICBjb25zdCBtYWluc190aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5zX3RpdGxlLmlubmVySFRNTCA9ICdNYWlucyc7XG4gICAgbWFpbnNfdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywnbWVudV90aXRsZScpO1xuICAgIG1haW5zLmFwcGVuZENoaWxkKG1haW5zX3RpdGxlKTtcblxuICAgIGNvbnN0IG1haW5zX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbnNfcmlnaHRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbnNfcmlnaHRfaW1nLnNyYyA9ICdub3VuLWRvZy1ib3dsLTM2MjU2NzYuc3ZnJztcbiAgICBtYWluc19yaWdodF9pbWcud2lkdGggPSA1MDtcbiAgICBtYWluc19yaWdodC5hcHBlbmRDaGlsZChtYWluc19yaWdodF9pbWcpO1xuICAgIG1haW5zX3JpZ2h0LmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbScpO1xuICAgIG1haW5zLmFwcGVuZENoaWxkKG1haW5zX3JpZ2h0KTtcblxuICAgIGNvbnN0IHN0cmVldGNoaWNrZW4gPSBjcmVhdGVNZW51SXRlbSgnU3RyZWV0IENoaWNrZW4nLCAnJDIzJyk7XG4gICAgY29uc3QgYmlzb25idXJnZXIgPSBjcmVhdGVNZW51SXRlbSgnQmlzb24gQnVyZ2VyJywgJyQyOScpO1xuICAgIGNvbnN0IGtpYmJsZSA9IGNyZWF0ZU1lbnVJdGVtKCdLaWJibGUnLCAnJDIyJyk7XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgbWVudSBpdGVtIG9iamVjdHNcbiAgICBjb25zdCBtYWluc0l0ZW1zID0gW3N0cmVldGNoaWNrZW4sIGJpc29uYnVyZ2VyLCBraWJibGVdO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBtZW51IGl0ZW0gb2JqZWN0cyBhbmQgY3JlYXRlIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnRzXG4gICAgbWFpbnNJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuICAgICAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtQm94LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIG1haW5zLmFwcGVuZENoaWxkKGl0ZW1Cb3gpO1xuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGRyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyaW5rcy5jbGFzc0xpc3QuYWRkKCdtZW51c2VjdGlvbicpO1xuICAgIC8vIC8vIHN0cmVldCB3YXRlciwgcGFyayB3YXRlciwgYm93bCB3YXRlclxuXG4gICAgY29uc3QgZHJpbmtzX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkcmlua3NfbGVmdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkcmlua3NfbGVmdF9pbWcuc3JjID0gJ25vdW4tZG9nLWJvd2wtMzYyNTY3Ni5zdmcnO1xuICAgIGRyaW5rc19sZWZ0X2ltZy53aWR0aCA9IDUwO1xuICAgIGRyaW5rc19sZWZ0LmFwcGVuZENoaWxkKGRyaW5rc19sZWZ0X2ltZyk7XG4gICAgZHJpbmtzX2xlZnQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJywgJ3RpdGxlX2xlZnQnKTtcbiAgICBkcmlua3MuYXBwZW5kQ2hpbGQoZHJpbmtzX2xlZnQpO1xuXG4gICAgY29uc3QgZHJpbmtzX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzX3RpdGxlLmlubmVySFRNTCA9ICdEcmlua3MnO1xuICAgIGRyaW5rc190aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nLCdtZW51X3RpdGxlJyk7XG4gICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc190aXRsZSk7XG5cbiAgICBjb25zdCBkcmlua3NfcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkcmlua3NfcmlnaHRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZHJpbmtzX3JpZ2h0X2ltZy5zcmMgPSAnbm91bi1kb2ctYm93bC0zNjI1Njc2LnN2Zyc7XG4gICAgZHJpbmtzX3JpZ2h0X2ltZy53aWR0aCA9IDUwO1xuICAgIGRyaW5rc19yaWdodC5hcHBlbmRDaGlsZChkcmlua3NfcmlnaHRfaW1nKTtcbiAgICBkcmlua3NfcmlnaHQuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgZHJpbmtzLmFwcGVuZENoaWxkKGRyaW5rc19yaWdodCk7XG5cbiAgICBcblxuICAgIGNvbnN0IGRvZ2Jvd2x3YXRlciA9IGNyZWF0ZU1lbnVJdGVtKCdEb2cgQm93bCBXYXRlcicsICckOScpO1xuICAgIGNvbnN0IHBhcmtwdWRkbGUgPSBjcmVhdGVNZW51SXRlbSgnUGFyayBQdWRkbGUnLCAnJDExJyk7XG4gICAgY29uc3Qgc2lkZXdhbGtncmF2eSA9IGNyZWF0ZU1lbnVJdGVtKCdTdHJlZXQgR3JhdnknLCAnJDEyJyk7XG5cblxuICAgIGNvbnN0IGRyaW5rc0l0ZW1zID0gW2RvZ2Jvd2x3YXRlciwgcGFya3B1ZGRsZSwgc2lkZXdhbGtncmF2eV07XG5cbiAgICBkcmlua3NJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuICAgICAgICBjb25zdCBpdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgICAgICBpdGVtQm94LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICAgIGRyaW5rcy5hcHBlbmRDaGlsZChpdGVtQm94KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51bmF2LmNsYXNzTGlzdC5hZGQoJ21lbnUtbmF2aWdhdGlvbicpO1xuXG4gICAgY29uc3QgYXBwc19pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhcHBzX2ltZy5zcmMgPSAnbm91bi1iZXJyaWVzLTI0ODQ1ODUuc3ZnJztcbiAgICBhcHBzX2ltZy53aWR0aCA9IDUwO1xuXG4gICAgY29uc3QgYXBwc19uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBzX25hdi5hcHBlbmRDaGlsZChhcHBzX2ltZyk7XG4gICAgbWVudW5hdi5hcHBlbmRDaGlsZChhcHBzX25hdik7XG4gICAgXG4gICAgY29uc3QgbWFpbnNfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpbnNfaW1nLnNyYyA9ICdub3VuLWRvZy1ib3dsLTM2MjU2NzYuc3ZnJztcbiAgICBtYWluc19pbWcud2lkdGggPSA1MDtcblxuICAgIGNvbnN0IG1haW5zX25hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5zX25hdi5hcHBlbmRDaGlsZChtYWluc19pbWcpO1xuICAgIG1lbnVuYXYuYXBwZW5kQ2hpbGQobWFpbnNfbmF2KTtcblxuICAgIFxuICAgIGNvbnN0IGRyaW5rc19pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkcmlua3NfaW1nLnNyYyA9ICdub3VuLWRvZy1ib3dsLTExMTAxMDguc3ZnJztcbiAgICBkcmlua3NfaW1nLndpZHRoID0gNTA7XG5cbiAgICBjb25zdCBkcmlua3NfbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJpbmtzX25hdi5hcHBlbmRDaGlsZChkcmlua3NfaW1nKTtcbiAgICBtZW51bmF2LmFwcGVuZENoaWxkKGRyaW5rc19uYXYpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudW5hdik7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgLy8gQWRkIG1lbnUgc2VjdGlvbnMgdG8gYW4gYXJyYXlcbiAgICBjb25zdCBzZWN0aW9ucyA9IFthcHBzLCBtYWlucywgZHJpbmtzXTtcblxuICAgIC8vIEFkZCBjbGljayBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIG5hdmlnYXRpb24gaXRlbXNcbiAgICBhcHBzX25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dTZWN0aW9uKDApKTtcbiAgICBtYWluc19uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93U2VjdGlvbigxKSk7XG4gICAgZHJpbmtzX25hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dTZWN0aW9uKDIpKTtcblxuICAgIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcblxuICAgICAgICBpZiAoYWN0aXZlU2VjdGlvbiAmJiBhY3RpdmVTZWN0aW9uID09PSBzZWN0aW9uc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gRG8gbm90aGluZyBpZiB0aGUgYWN0aXZlIHNlY3Rpb24gaXMgY2xpY2tlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNlY3Rpb24pIHtcbiAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKGFjdGl2ZVNlY3Rpb24pO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBuZXdTZWN0aW9uID0gc2VjdGlvbnNbaW5kZXhdO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG5ld1NlY3Rpb24pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG5ld1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbiAgICAvLyBTaG93IHRoZSBmaXJzdCBzZWN0aW9uIGJ5IGRlZmF1bHRcbiAgICBzaG93U2VjdGlvbigwKTtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=