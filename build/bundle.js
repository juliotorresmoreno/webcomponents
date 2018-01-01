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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__h__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__h___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__h__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__h___default.a; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_insensitive__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);



const handleTabChange = that => e => {
    e.preventDefault();
    that.salida = e.target.name === 'salida';
    that.entrada = e.target.name === 'entrada';
    that.update();
};

class Menu extends __WEBPACK_IMPORTED_MODULE_0_insensitive__["a" /* Component */] {
    constructor(props) {
        super(props);
        this.entrada = true;
        this.salida = false;
        this.renderForm = this.renderForm.bind(this);
        this.handleTabChange = handleTabChange(this);
    }
    renderForm() {
        if (this.entrada) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                "form",
                { "class": "px-4 py-3" },
                [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "div",
                    { "class": "form-group" },
                    [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "label",
                        null,
                        ["Ruta"]
                    ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "input",
                        { type: "text", "class": "form-control" },
                        []
                    )]
                ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "div",
                    { "class": "form-group" },
                    [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "label",
                        null,
                        ["Learning rate"]
                    ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "input",
                        { type: "decimal", "class": "form-control" },
                        []
                    )]
                ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "button",
                    { click: () => alert("Hello world"), type: "button", "class": "btn btn-primary" },
                    ["Actualizar"]
                )]
            );
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
            "form",
            { "class": "px-4 py-3" },
            [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                "div",
                { "class": "form-group" },
                [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "label",
                    null,
                    ["No. neuronas"]
                ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "input",
                    {
                        type: "decimal", "class": "form-control" },
                    []
                )]
            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                "div",
                { "class": "form-group" },
                [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "label",
                    null,
                    ["Tipo de problema"]
                ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "select",
                    { "class": "form-control" },
                    [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "option",
                        { value: "clasificacion" },
                        ["Clasificacion"]
                    ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "option",
                        { value: "regresion" },
                        ["Regresion"]
                    )]
                )]
            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                "button",
                { click: () => alert("Hola mundo"), type: "button", "class": "btn btn-primary" },
                ["Actualizar"]
            )]
        );
    }
    render() {
        const salida = this.salida,
              entrada = this.entrada;
        return Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
            "div",
            { "class": "menu" },
            [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                "div",
                { "class": "card item" },
                [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "ul",
                    { "class": "nav nav-tabs" },
                    [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "li",
                        { "class": "nav-item" },
                        [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                            "a",
                            {
                                href: "", click: this.handleTabChange, name: "entrada",
                                "class": "nav-link " + __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ active: entrada }) },
                            ["Entrada"]
                        )]
                    ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "li",
                        { "class": "nav-item" },
                        [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                            "a",
                            {
                                href: "", click: this.handleTabChange, name: "salida",
                                "class": "nav-link " + __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ active: salida }) },
                            ["Salida"]
                        )]
                    )]
                ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    this.renderForm,
                    null,
                    []
                )]
            )]
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    neuronas: {
        change: "@neuronas/change"
    }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App__ = __webpack_require__(4);


const app = new __WEBPACK_IMPORTED_MODULE_0__components_App__["a" /* default */]();
app.apply(document.querySelector('#root'));

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_insensitive__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Toolbar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Body__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Services__ = __webpack_require__(18);





class App extends __WEBPACK_IMPORTED_MODULE_0_insensitive__["a" /* Component */] {
    render() {
        return Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
            'div',
            { 'class': '' },
            [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                __WEBPACK_IMPORTED_MODULE_3_components_Services__["a" /* default */],
                null,
                []
            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                __WEBPACK_IMPORTED_MODULE_1_components_Toolbar__["a" /* default */],
                null,
                []
            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                __WEBPACK_IMPORTED_MODULE_2_components_Body__["a" /* default */],
                null,
                []
            )]
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;
;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patch__ = __webpack_require__(6);


let waiting = [];
let elements = [];
const ready = () => {
    const rest = [];
    while (waiting.length > 0) {
        const element = waiting.shift();
        if (document.body === element.DOM || document.body.contains(element.DOM)) {
            element.ready();
            elements.push(element);
        } else {
            rest.push(element);
        }
    }
    waiting = rest;
};

const dispatchEvent = action => {
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.dispatch(action);
        element.compareAndRefresc(action);
    }
};

const services = {};
const state = {};

class Component {
    constructor(props = {}, newState = {}) {
        for (const key in newState) {
            if (newState.hasOwnProperty(key)) {
                state[key] = newState[key];
            }
        }
        this.vDOM = true;
        this.state = state;
        this.props = props;
        this.services = services;
        this.subscribe = {};
        waiting.push(this);
    }
    ready() {}
    componentWillMount() {}
    compareAndRefresc(action) {
        if (Object.keys(this.subscribe) === 0) return;
        for (let index = 0; index < action.types.length; index++) {
            if (this.subscribe[action.types[index]]) {
                this.update();
                return;
            }
        }
    }
    apply(element) {
        Object(__WEBPACK_IMPORTED_MODULE_0__patch__["a" /* default */])(element, this.renderComponent());
        ready();
    }
    dispatch() {}
    dispatchEvent(action) {
        dispatchEvent(action);
    }
    update() {
        if (document.body === this.DOM || document.body.contains(this.DOM)) {
            const newElement = this.render();
            if (this.vDOM) this.DOM = Object(__WEBPACK_IMPORTED_MODULE_0__patch__["a" /* default */])(this.DOM, newElement);else {
                this.DOM.parentNode.replaceChild(newElement, this.DOM);
                this.DOM = newElement;
            }
            this.ready();
        }
    }
    updateElement(oldElement, newElement) {
        if (document.body === this.DOM || document.body.contains(this.DOM)) {
            if (this.vDOM) this.DOM = Object(__WEBPACK_IMPORTED_MODULE_0__patch__["a" /* default */])(oldElement, newElement);else oldElement.parentNode.replaceChild(newElement, this.DOM);
            this.ready();
        }
    }
    renderComponent() {
        this.componentWillMount();
        if (this.vDOM) return this.DOM = Object(__WEBPACK_IMPORTED_MODULE_0__patch__["a" /* default */])(this.DOM, this.render());
        return this.DOM = this.render();
    }
    render() {
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = patch;


function patch(oldElement, newElement) {
    if (oldElement === false || oldElement === null || oldElement === undefined) {
        return newElement;
    }
    if (newElement === false || newElement === null || newElement === undefined) {
        return oldElement;
    }
    if (oldElement.tagName !== newElement.tagName) {
        oldElement.parentNode.replaceChild(newElement, oldElement);
        return newElement;
    }
    if (oldElement !== undefined) {
        for (let index = 0; index < newElement.attributes.length; index++) {
            const element = newElement.attributes[index];
            if (newElement.getAttribute(element.name) !== oldElement.getAttribute(element.name)) {
                oldElement.setAttribute(element.name, element.value);
            }
        }
        if (oldElement.tagName === "INPUT" && oldElement.value !== newElement.value) {
            oldElement.value = newElement.value;
        }
        if (oldElement.childNodes.length > newElement.childNodes.length) {
            for (let index = oldElement.childNodes.length - 1; index >= newElement.childNodes.length; index--) {
                oldElement.removeChild(oldElement.childNodes[index]);
            }
        }
        oldElement.listeners = newElement.listeners;
        for (let index = newElement.childNodes.length - 1; index >= 0; index--) {
            const newE = newElement.childNodes[index];
            const oldE = oldElement.childNodes[index];
            if (oldE === undefined) {
                oldElement.appendChild(newE);
            } else if (newE === undefined) {
                oldElement.removeChild(oldE);
            } else if (newE.nodeType === 3) {
                if (oldE.data !== newE.data) {
                    oldE.data = newE.data;
                }
            } else {
                patch(oldE, newE);
            }
        }
        return oldElement;
    }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

;(function () {

  function h() {
    var args = [].slice.call(arguments),
        e = null;
    function item(l) {

      function parseClass(string) {
        var m = string.split(/([\.#]?[a-zA-Z0-9_-]+)/);
        m.forEach(function (v) {
          var s = v.substring(1, v.length);
          if (!v) return;
          if (!e) e = document.createElement(v);else if (v[0] === '.') e.classList.add(s);else if (v[0] === '#') e.setAttribute('id', s);
        });
      }

      if (l == null) ;else if ('string' === typeof l) {
        if (!e) parseClass(l);else e.appendChild(document.createTextNode(l));
      } else if ('number' === typeof l || 'boolean' === typeof l || l instanceof Date || l instanceof RegExp) {
        e.appendChild(document.createTextNode(l.toString()));
      } else if (Array.isArray(l)) l.forEach(item);else if (l instanceof HTMLElement) e.appendChild(l);else if ('function' === typeof l) {
        if (l.toString().indexOf('class') === 0) {
          e = new l(args[0]).renderComponent();
        } else {
          e = l(args[0]);
        }
      } else if ('object' === typeof l) {
        for (var k in l) {
          if ('function' === typeof l[k]) {
            if (!e.listeners) e.listeners = {};
            let event = k;
            let obj = e;
            e.listeners[k] = l[event];
            e.addEventListener(k, (...args) => {
              if (typeof obj.listeners[event] === 'function') obj.listeners[event](...args);
            });
          } else if (k === 'style') {
            for (var s in l[k]) e.style.setProperty(s, l[k][s]);
          } else e.setAttribute(k, l[k]);
        }
      }
    }
    while (args.length) {
      item(args.shift());
    }
    return e;
  }

  if (true) module.exports = h;else this.h = h;
})();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_insensitive__ = __webpack_require__(0);


class Toolbar extends __WEBPACK_IMPORTED_MODULE_0_insensitive__["a" /* Component */] {
    render() {
        return Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
            "nav",
            { "class": "navbar navbar-expand-lg navbar-dark bg-primary" },
            [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                "a",
                { "class": "navbar-brand", href: "#" },
                [this.state.title]
            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                "button",
                {
                    "class": "navbar-toggler",
                    type: "button", "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation" },
                [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "span",
                    { "class": "navbar-toggler-icon" },
                    []
                )]
            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                "div",
                { "class": "collapse navbar-collapse", id: "navbarSupportedContent" },
                [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                    "ul",
                    { "class": "navbar-nav ml-auto" },
                    [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                        "li",
                        { "class": "nav-item dropdown" },
                        [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                            "a",
                            {
                                "class": "nav-link dropdown-toggle",
                                href: "#", id: "navbarDropdown",
                                role: "button", style: { color: 'white' },
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false" },
                            ["Archivo"]
                        ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                            "div",
                            { "class": "dropdown-menu dropdown-menu-right", "aria-labelledby": "navbarDropdown" },
                            [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                                "a",
                                {
                                    "class": "dropdown-item", href: "#",
                                    click: () => console.log('sd') },
                                ["Nuevo"]
                            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                                "a",
                                {
                                    "class": "dropdown-item", href: "#",
                                    click: () => console.log('sd') },
                                ["Guardar"]
                            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                                "a",
                                {
                                    "class": "dropdown-item", href: "#",
                                    click: () => console.log('sd') },
                                ["Ejecutar"]
                            )]
                        )]
                    )]
                )]
            )]
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Toolbar;
;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_insensitive__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Menu__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_Grid__ = __webpack_require__(11);




class Body extends __WEBPACK_IMPORTED_MODULE_0_insensitive__["a" /* Component */] {
    render() {
        return Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
            "div",
            { "class": "document" },
            [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                __WEBPACK_IMPORTED_MODULE_2_components_Grid__["a" /* default */],
                null,
                []
            ), Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
                __WEBPACK_IMPORTED_MODULE_1_components_Menu__["a" /* default */],
                null,
                []
            )]
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Body);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Menu__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_insensitive__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__neuronas__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__neuronas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__neuronas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_actions__ = __webpack_require__(2);






let that;

class Grid extends __WEBPACK_IMPORTED_MODULE_1_insensitive__["a" /* Component */] {
    constructor(props) {
        super(props);
        this.subscribe = {
            [__WEBPACK_IMPORTED_MODULE_4_actions__["a" /* default */].neuronas.change]: true
        };
        that = this;
        that.vDOM = false;
    }
    handleAdd() {
        that.services.neuronal.add();
    }
    handleRemove(e) {
        e.preventDefault();
        const index = e.target.dataset.tag;
        that.services.neuronal.remove(index);
    }
    handleNeuronasChange(capa) {
        return ({ target: { value } }) => {
            this.services.neuronal.neuronasUpdate(capa, value);
        };
    }
    handleAlgoritmoChange(capa) {
        return ({ target: { value } }) => {
            this.services.neuronal.algoritmoUpdate(capa, value);
        };
    }
    ready() {
        console.log(this.state.capas);
        const capas = this.state.capas.map((v, i) => Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
            "div",
            { "class": "card item", style: { display: 'inline-block' } },
            [Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                "div",
                { "class": "card-body" },
                [Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                    "a",
                    {
                        style: { float: 'right' }, href: "", "data-tag": i,
                        click: that.handleRemove },
                    ["\xD7"]
                ), Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                    "form",
                    null,
                    [Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                        "div",
                        { "class": "form-group" },
                        [Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                            "label",
                            { style: { display: 'block' } },
                            ["No. neuronas"]
                        ), Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                            "input",
                            {
                                "class": "form-control", min: 1,
                                value: v.neuronas, type: "number",
                                change: that.handleNeuronasChange(i) },
                            []
                        )]
                    ), Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                        "div",
                        { "class": "form-group" },
                        [Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                            "label",
                            { style: { display: 'block' } },
                            ["Algoritmo"]
                        ), Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                            "select",
                            {
                                "class": "form-control", value: v.algoritmo,
                                change: that.handleAlgoritmoChange(i) },
                            [__WEBPACK_IMPORTED_MODULE_3__neuronas___default.a.map(value => v.algoritmo === value ? Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                                "option",
                                { selected: true, value: value },
                                [value]
                            ) : Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                                "option",
                                { value: value },
                                [value]
                            ))]
                        )]
                    )]
                )]
            )]
        ));
        capas.push(Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
            "div",
            { "class": "card item", style: {
                    display: 'inline-block',
                    height: '202px',
                    width: '202px'
                } },
            [Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                "div",
                { "class": "card-body",
                    style: {
                        'vertical-align': 'middle',
                        'text-align': 'center'
                    } },
                [Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                    "button",
                    {
                        "class": "btn btn-primary",
                        click: that.handleAdd,
                        style: {
                            'margin-top': '55px'
                        } },
                    ["Agregar"]
                )]
            )]
        ));
        const grid = new Muuri(that.grid, {
            dragEnabled: false,
            items: capas
        });
    }
    render() {
        return Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
            "div",
            { "class": "content" },
            [this.grid = Object(__WEBPACK_IMPORTED_MODULE_1_insensitive__["b" /* h */])(
                "div",
                { "class": "grid" },
                []
            )]
        );
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(15)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, ".grid {\n  position: relative; }\n\n.item {\n  display: block;\n  position: absolute;\n  margin: 5px;\n  z-index: 1; }\n\n.item.muuri-item-dragging {\n  z-index: 3; }\n\n.item.muuri-item-releasing {\n  z-index: 2; }\n\n.item.muuri-item-hidden {\n  z-index: 0; }\n\n.item-content {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.menu {\n  display: inline-block;\n  margin-right: 10px;\n  width: 300px; }\n  .menu .card {\n    width: 300px; }\n\n.content {\n  display: 'inline-block';\n  flex: 1; }\n\n.document {\n  display: flex;\n  margin: 10px; }\n\n@media (max-width: 700px) {\n  .document {\n    display: block; }\n  .menu {\n    display: block;\n    width: auto;\n    flex: 1; }\n    .menu .card {\n      width: calc(100% - 20px); }\n  .content {\n    display: block;\n    flex: initial; }\n    .content .card {\n      width: calc(100% - 30px); } }\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = ["all_candidate_sampler","atrous_conv2d","atrous_conv2d_transpose","avg_pool","avg_pool3d","batch_norm_with_global_normalization","batch_normalization","bias_add","bidirectional_dynamic_rnn","compute_accidental_hits","conv1d","conv2d","conv2d_backprop_filter","conv2d_backprop_input","conv2d_transpose","conv3d","conv3d_backprop_filter_v2","conv3d_transpose","convolution","crelu","ctc_beam_search_decoder","ctc_greedy_decoder","ctc_loss","depthwise_conv2d","depthwise_conv2d_native","depthwise_conv2d_native_backprop_filter","depthwise_conv2d_native_backprop_input","dilation2d","dropout","dynamic_rnn","elu","embedding_lookup","embedding_lookup_sparse","erosion2d","fixed_unigram_candidate_sampler","fractional_avg_pool","fractional_max_pool","fused_batch_norm","in_top_k","l2_loss","l2_normalize","leaky_relu","learned_unigram_candidate_sampler","local_response_normalization","log_poisson_loss","log_softmax","log_uniform_candidate_sampler","lrn","max_pool","max_pool3d","max_pool_with_argmax","moments","nce_loss","normalize_moments","pool","quantized_avg_pool","quantized_conv2d","quantized_max_pool","quantized_relu_x","raw_rnn","relu","relu6","relu_layer","sampled_softmax_loss","selu","separable_conv2d","sigmoid","softmax","softplus","softsign","static_bidirectional_rnn","static_rnn","static_state_saving_rnn","sufficient_statistics","tanh","top_k","uniform_candidate_sampler","weighted_moments","with_space_to_batch","xw_plus_b","zero_fraction"]

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Services;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_insensitive__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_neuronal__ = __webpack_require__(19);



function Services() {
    return [Object(__WEBPACK_IMPORTED_MODULE_0_insensitive__["b" /* h */])(
        __WEBPACK_IMPORTED_MODULE_1_services_neuronal__["a" /* default */],
        null,
        []
    )];
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_insensitive__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(20);




class Neuronal extends __WEBPACK_IMPORTED_MODULE_0_insensitive__["a" /* Component */] {
    constructor(props) {
        super(props, __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]);
        this.services.neuronal = this;
    }

    add() {
        this.state.capas.push({
            neuronas: 3,
            algoritmo: ''
        });
        this.dispatchEvent({
            types: [__WEBPACK_IMPORTED_MODULE_1__actions__["a" /* default */].neuronas.change]
        });
    }

    remove(index) {
        if (this.state.capas.length === 1) return;
        this.state.capas.splice(index, 1);
        this.dispatchEvent({
            types: [__WEBPACK_IMPORTED_MODULE_1__actions__["a" /* default */].neuronas.change]
        });
    }

    neuronasUpdate(index, value) {
        this.state.capas[index].neuronas = value;
    }

    algoritmoUpdate(index, value) {
        this.state.capas[index].algoritmo = value;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Neuronal);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
    title: 'Neuronal',
    capas: [{
        neuronas: 4,
        algoritmo: ''
    }]
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map