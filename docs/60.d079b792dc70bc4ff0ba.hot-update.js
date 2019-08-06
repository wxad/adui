webpackHotUpdate(60,{

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(952);
__webpack_require__(1151);

/* eslint-disable no-unused-vars */
var React = __webpack_require__(0);
/* eslint-enable no-unused-vars */
var ReactDOM = __webpack_require__(22);
var ReactRouter = __webpack_require__(415);
var history = __webpack_require__(1195);
var data = __webpack_require__(1197);
var createElement = __webpack_require__(1199);
var routes = __webpack_require__(1200)(data);

var _window$location = window.location,
    pathname = _window$location.pathname,
    search = _window$location.search,
    hash = _window$location.hash;

var location = '' + pathname + search + hash;
var basename = './';
ReactRouter.match({ routes: routes, location: location, basename: basename }, function () {
  var router = React.createElement(ReactRouter.Router, {
    history: ReactRouter.useRouterHistory(history.createHashHistory)({ basename: basename }),
    routes: routes,
    createElement: createElement
  });
  ReactDOM.render(router, document.getElementById('react-content'));
});

/***/ })

})