webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/Pages.js":
/*!**********************!*\
  !*** ./lib/Pages.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./lib/Page.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
// Generated by Page Builder


/* harmony default export */ __webpack_exports__["default"] = ({
  $pages: function $pages() {
    return Object.values(this).filter(function (page) {
      return page instanceof _Page__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
  },
  $blogs: function $blogs() {
    return this.$pages().filter(function (page) {
      return page.blog;
    }).sort(_Page__WEBPACK_IMPORTED_MODULE_0__["default"].compareDates);
  },
  $search: function $search(searchText) {
    var regex = new RegExp(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escapeRegExp(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.escape(searchText)), 'i');
    var results = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.$pages()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var page = _step.value;

        if (page.$searchRegex(regex)) {
          results.push(page);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return results;
  },
  index: new _Page__WEBPACK_IMPORTED_MODULE_0__["default"]({
    name: 'index',
    content: '# Why use MyApp\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim. Massa sapien faucibus et molestie ac feugiat sed. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut aliquam purus sit amet luctus venenatis lectus magna. Sed arcu non odio euismod lacinia at quis risus. Mattis nunc sed blandit libero volutpat. Semper viverra nam libero justo laoreet sit amet cursus. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Pretium fusce id velit ut. In mollis nunc sed id. Eros in cursus turpis massa tincidunt dui ut. Neque convallis a cras semper auctor neque vitae tempus quam. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet est placerat in egestas erat imperdiet sed euismod.\n\n```readonly\n-----------------\nHere is some code\n-----------------\n```\n\nUllamcorper dignissim cras tincidunt lobortis feugiat vivamus. Urna porttitor rhoncus dolor purus non. Volutpat est velit egestas dui id. Augue interdum velit euismod in pellentesque. Eget nullam non nisi est sit amet facilisis magna. Sagittis nisl rhoncus mattis rhoncus. Vel risus commodo viverra maecenas accumsan. Duis at tellus at urna condimentum mattis. Sit amet nisl purus in mollis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Lacus vestibulum sed arcu non odio euismod lacinia at. Ornare lectus sit amet est placerat. Integer feugiat scelerisque varius morbi enim. Senectus et netus et malesuada fames ac turpis egestas. Mauris augue neque gravida in fermentum et sollicitudin ac. Tortor at auctor urna nunc id cursus. Sapien et ligula ullamcorper malesuada. Sit amet justo donec enim diam vulputate ut pharetra sit. Senectus et netus et malesuada fames ac turpis egestas.\n\n## A Less Important Heading\n\nNeque ornare aenean euismod elementum nisi quis. Tellus cras adipiscing enim eu turpis egestas. Tellus id interdum velit laoreet id donec. Pellentesque habitant morbi tristique senectus et netus et malesuada. Faucibus pulvinar elementum integer enim neque volutpat ac. Habitant morbi tristique senectus et. Felis bibendum ut tristique et. Id diam maecenas ultricies mi eget mauris pharetra. Auctor eu augue ut lectus arcu bibendum at varius vel. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ultricies tristique nulla aliquet enim tortor at. Faucibus vitae aliquet nec ullamcorper. Nibh sed pulvinar proin gravida hendrerit lectus. Hac habitasse platea dictumst quisque. Nunc vel risus commodo viverra maecenas accumsan.\n\n# A More Important Heading\n\nId ornare arcu odio ut. Enim nunc faucibus a pellentesque sit amet porttitor. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Tortor id aliquet lectus proin nibh nisl condimentum id. Facilisis magna etiam tempor orci eu. Lectus nulla at volutpat diam ut. Dictum non consectetur a erat nam. Aliquam faucibus purus in massa tempor nec feugiat. Enim neque volutpat ac tincidunt vitae semper quis lectus. Cras ornare arcu dui vivamus arcu felis bibendum. Vitae tortor condimentum lacinia quis. Leo duis ut diam quam. Gravida neque convallis a cras semper auctor neque. Tellus in metus vulputate eu. Fames ac turpis egestas sed tempus urna et. Ac placerat vestibulum lectus mauris. Ut sem nulla pharetra diam sit amet nisl suscipit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.\n\n```lang:echo-evaluator:echo-immediate\nHere is some code you can edit and run\n```\n\nCondimentum lacinia quis vel eros donec ac. Vitae elementum curabitur vitae nunc. Lectus sit amet est placerat in egestas erat. Morbi non arcu risus quis varius quam quisque. Sit amet purus gravida quis blandit. Accumsan sit amet nulla facilisi morbi. Arcu dictum varius duis at. Amet mauris commodo quis imperdiet massa tincidunt. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. At in tellus integer feugiat scelerisque. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nunc scelerisque viverra mauris in aliquam sem.',
    plainTxt: 'Why use MyApp\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim. Massa sapien faucibus et molestie ac feugiat sed. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Ut aliquam purus sit amet luctus venenatis lectus magna. Sed arcu non odio euismod lacinia at quis risus. Mattis nunc sed blandit libero volutpat. Semper viverra nam libero justo laoreet sit amet cursus. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Pretium fusce id velit ut. In mollis nunc sed id. Eros in cursus turpis massa tincidunt dui ut. Neque convallis a cras semper auctor neque vitae tempus quam. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet est placerat in egestas erat imperdiet sed euismod.\n-----------------\nHere is some code\n-----------------\nUllamcorper dignissim cras tincidunt lobortis feugiat vivamus. Urna porttitor rhoncus dolor purus non. Volutpat est velit egestas dui id. Augue interdum velit euismod in pellentesque. Eget nullam non nisi est sit amet facilisis magna. Sagittis nisl rhoncus mattis rhoncus. Vel risus commodo viverra maecenas accumsan. Duis at tellus at urna condimentum mattis. Sit amet nisl purus in mollis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Lacus vestibulum sed arcu non odio euismod lacinia at. Ornare lectus sit amet est placerat. Integer feugiat scelerisque varius morbi enim. Senectus et netus et malesuada fames ac turpis egestas. Mauris augue neque gravida in fermentum et sollicitudin ac. Tortor at auctor urna nunc id cursus. Sapien et ligula ullamcorper malesuada. Sit amet justo donec enim diam vulputate ut pharetra sit. Senectus et netus et malesuada fames ac turpis egestas.\nA Less Important Heading\nNeque ornare aenean euismod elementum nisi quis. Tellus cras adipiscing enim eu turpis egestas. Tellus id interdum velit laoreet id donec. Pellentesque habitant morbi tristique senectus et netus et malesuada. Faucibus pulvinar elementum integer enim neque volutpat ac. Habitant morbi tristique senectus et. Felis bibendum ut tristique et. Id diam maecenas ultricies mi eget mauris pharetra. Auctor eu augue ut lectus arcu bibendum at varius vel. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ultricies tristique nulla aliquet enim tortor at. Faucibus vitae aliquet nec ullamcorper. Nibh sed pulvinar proin gravida hendrerit lectus. Hac habitasse platea dictumst quisque. Nunc vel risus commodo viverra maecenas accumsan.\nA More Important Heading\nId ornare arcu odio ut. Enim nunc faucibus a pellentesque sit amet porttitor. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Tortor id aliquet lectus proin nibh nisl condimentum id. Facilisis magna etiam tempor orci eu. Lectus nulla at volutpat diam ut. Dictum non consectetur a erat nam. Aliquam faucibus purus in massa tempor nec feugiat. Enim neque volutpat ac tincidunt vitae semper quis lectus. Cras ornare arcu dui vivamus arcu felis bibendum. Vitae tortor condimentum lacinia quis. Leo duis ut diam quam. Gravida neque convallis a cras semper auctor neque. Tellus in metus vulputate eu. Fames ac turpis egestas sed tempus urna et. Ac placerat vestibulum lectus mauris. Ut sem nulla pharetra diam sit amet nisl suscipit. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque.\nHere is some code you can edit and run\nCondimentum lacinia quis vel eros donec ac. Vitae elementum curabitur vitae nunc. Lectus sit amet est placerat in egestas erat. Morbi non arcu risus quis varius quam quisque. Sit amet purus gravida quis blandit. Accumsan sit amet nulla facilisi morbi. Arcu dictum varius duis at. Amet mauris commodo quis imperdiet massa tincidunt. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. At in tellus integer feugiat scelerisque. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Nunc scelerisque viverra mauris in aliquam sem.\n',
    route: '/index',
    layout: '../layouts/Docs',
    title: 'MyApp',
    subtitle: 'an app you can use for *things*',
    version: 'v1.0.0',
    github: 'https://github.com/ejrbuss/docs-template'
  })
});

/***/ })

})
//# sourceMappingURL=index.js.6bd64899f71a2fe4de5b.hot-update.js.map