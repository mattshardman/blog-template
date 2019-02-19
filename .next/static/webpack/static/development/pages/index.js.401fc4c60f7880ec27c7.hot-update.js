webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/matthardman/Documents/Work/nick-blog/components/Header.js";




function Header(_ref) {
  var color = _ref.color,
      dark = _ref.dark,
      setDark = _ref.setDark;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isScrolled = _useState2[0],
      setIsScrolled = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        return setIsScrolled(true);
      }

      if (!window.scrollY) {
        return setIsScrolled(false);
      }
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3127224074", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3127224074", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Boring Business"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3127224074", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3127224074", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    style: {
      fontSize: 14,
      color: '#fff'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3127224074", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "fas fa-moon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3127224074", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    style: {
      fontSize: 14,
      color: '#fff'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3127224074", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "fas fa-sun",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setDark(!dark);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3127224074", [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%']]]) + " " + "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3127224074",
    dynamic: [dark ? '#30353d' : '#f9fbff', isScrolled ? '80px' : '120px', color, dark ? '0%' : '100%'],
    __self: this
  }, ".header.__jsx-style-dynamic-selector{position:fixed;background:".concat(dark ? '#30353d' : '#f9fbff', ";font-family:Roboto;box-sizing:border-box;width:100%;padding:0 25%;height:").concat(isScrolled ? '80px' : '120px', ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:").concat(color, ";}.switch.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:60px;height:30px;border-radius:15px;background:#000;}.slider.__jsx-style-dynamic-selector{position:absolute;height:30px;width:30px;border-radius:15px;background:#fff;outline:none;border:3px #000 solid;-webkit-transition:-webkit-transform 400ms;-webkit-transition:transform 400ms;transition:transform 400ms;-webkit-transform:translateX(").concat(dark ? '0%' : '100%', ");-ms-transform:translateX(").concat(dark ? '0%' : '100%', ");transform:translateX(").concat(dark ? '0%' : '100%', ");cursor:pointer;}.dark.__jsx-style-dynamic-selector{display:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30px;right:0;}.light.__jsx-style-dynamic-selector{display:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:30px;left:0;}h1.__jsx-style-dynamic-selector{font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGFyZG1hbi9Eb2N1bWVudHMvV29yay9uaWNrLWJsb2cvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNrQixBQUdnQyxBQWVGLEFBU0ssQUFhRCxBQVNBLEFBU0YsZUF0RHlCLEFBdUQ1QyxFQWxCaUIsQUFTQSxDQXRCRCxZQUNELFdBQ1EsY0F6QkEsS0EwQkgsY0F6Qk0sQUFhSixFQWFMLGFBQ1MsRUFTSCxBQVNBLENBL0JSLElBYkEsT0FjQyxJQWJFLElBMEJhLElBWlIsTUFiaUIsYUFjcEIsZ0JBQ3BCLE9BZGlCLDJCQWlDVSxBQVNBLGdDQWpCNEIsZUF4QmhDLG9EQWlDUixBQVNBLFdBUkgsQUFTRCxPQUNYLENBVEEsc0JBbENrQyx5REF3QmYsZUFDbkIsMkNBeEJ1QyxtQ0FFeEMsQUFBQyIsImZpbGUiOiIvVXNlcnMvbWF0dGhhcmRtYW4vRG9jdW1lbnRzL1dvcmsvbmljay1ibG9nL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IGNvbG9yLCBkYXJrLCBzZXREYXJrIH0pIHtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xuICAgICAgICByZXR1cm4gc2V0SXNTY3JvbGxlZCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF3aW5kb3cuc2Nyb2xsWSkge1xuICAgICAgICByZXR1cm4gc2V0SXNTY3JvbGxlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxoMT5Cb3JpbmcgQnVzaW5lc3M8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXJrXCI+XG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1tb29uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpZ2h0XCI+XG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1zdW5cIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJyNmZmYnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERhcmsoIWRhcmspfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHtkYXJrID8gJyMzMDM1M2QnIDogJyNmOWZiZmYnfTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAke2lzU2Nyb2xsZWQgPyAnODBweCcgOiAnMTIwcHgnfTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgICB0cmFpbnNpdGlvbjogXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zd2l0Y2gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggIzAwMCBzb2xpZDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7ZGFyayA/ICcwJScgOiAnMTAwJSd9KTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXJrIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saWdodCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBjb2xvcjogUFQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhcms6IFBULnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZXREYXJrOiBQVC5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/matthardman/Documents/Work/nick-blog/components/Header.js */")));
}

Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  setDark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.401fc4c60f7880ec27c7.hot-update.js.map