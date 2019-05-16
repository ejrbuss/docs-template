webpackHotUpdate("static/development/pages/api.js",{

/***/ "./layouts/API.js":
/*!************************!*\
  !*** ./layouts/API.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Boot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Boot */ "./components/Boot.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideNav */ "./components/SideNav.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_EjrbussMarkdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EjrbussMarkdown */ "./components/EjrbussMarkdown.js");
/* harmony import */ var _components_Places__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Places */ "./components/Places.js");
/* harmony import */ var _lib_Pages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/Pages */ "./lib/Pages.js");
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/hooks */ "./lib/hooks.js");
var _jsxFileName = "/Users/ejrbuss/GitHub/docs-template/layouts/API.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Components






 // Libraries



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var pageName = _ref.pageName;
  var page = _lib_Pages__WEBPACK_IMPORTED_MODULE_8__["default"][pageName];
  var searchCtx = Object(_lib_hooks__WEBPACK_IMPORTED_MODULE_9__["useSearch"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Boot__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    searchCtx: searchCtx,
    showScrollMarker: true,
    showSearch: true,
    leftLinks: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Places__WEBPACK_IMPORTED_MODULE_7__["default"], {
      blog: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }),
    rightLinks: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: page.github,
      className: "p-md subtle-accent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fab fa-github fa-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchResults__WEBPACK_IMPORTED_MODULE_5__["default"], {
    searchCtx: searchCtx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content container grid-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EjrbussMarkdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    source: page.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=api.js.8371fa713121a060b007.hot-update.js.map