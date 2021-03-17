"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var prefix = "adui-tooltip";

var Popup = function Popup(_ref) {
  var content = _ref.content,
      trigger = _ref.trigger;
  (0, _react.useEffect)(function () {
    if (trigger !== null && trigger !== void 0 && trigger.forcePopupAlign) {
      trigger.forcePopupAlign();
    }
  });
  return _react["default"].createElement("div", {
    className: "".concat(prefix, "-content")
  }, _react["default"].createElement("i", {
    className: "".concat(prefix, "-arrow")
  }), _react["default"].createElement("div", null, content));
};

Popup.propTypes = {
  content: _propTypes["default"].node,
  trigger: _propTypes["default"].object
};
Popup.defaultProps = {
  content: null,
  trigger: undefined
};
var _default = Popup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9Qb3B1cC50c3giXSwibmFtZXMiOlsicHJlZml4IiwiUG9wdXAiLCJjb250ZW50IiwidHJpZ2dlciIsImZvcmNlUG9wdXBBbGlnbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxjQUFmOztBQVFBLElBQU1DLEtBQTJDLEdBQUcsU0FBOUNBLEtBQThDLE9BR2pDO0FBQUEsTUFGakJDLE9BRWlCLFFBRmpCQSxPQUVpQjtBQUFBLE1BRGpCQyxPQUNpQixRQURqQkEsT0FDaUI7QUFDakIsd0JBQVUsWUFBTTtBQUtkLFFBQUlBLE9BQUosYUFBSUEsT0FBSixlQUFJQSxPQUFPLENBQUVDLGVBQWIsRUFBOEI7QUFDNUJELE1BQUFBLE9BQU8sQ0FBQ0MsZUFBUjtBQUNEO0FBQ0YsR0FSRDtBQVNBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsWUFBS0osTUFBTDtBQUFkLEtBQ0U7QUFBRyxJQUFBLFNBQVMsWUFBS0EsTUFBTDtBQUFaLElBREYsRUFFRSw2Q0FBTUUsT0FBTixDQUZGLENBREY7QUFNRCxDQW5CRDs7QUFxQkFELEtBQUssQ0FBQ0ksU0FBTixHQUFrQjtBQUloQkgsRUFBQUEsT0FBTyxFQUFFSSxzQkFBVUMsSUFKSDtBQVFoQkosRUFBQUEsT0FBTyxFQUFFRyxzQkFBVUU7QUFSSCxDQUFsQjtBQVdBUCxLQUFLLENBQUNRLFlBQU4sR0FBcUI7QUFDbkJQLEVBQUFBLE9BQU8sRUFBRSxJQURVO0FBRW5CQyxFQUFBQSxPQUFPLEVBQUVPO0FBRlUsQ0FBckI7ZUFLZVQsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBJVHJpZ2dlciB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRvb2x0aXBcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdHJpZ2dlcj86IElUcmlnZ2VyXG59XG5cbmNvbnN0IFBvcHVwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJUG9wdXBQcm9wcz4gPSAoe1xuICBjb250ZW50LFxuICB0cmlnZ2VyLFxufTogSVBvcHVwUHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvKipcbiAgICAgKiDlnKggU2xpZGVyIOS4reeUqCBUb29sdGlwIOaXtuWPkeeOsCBQb3BUcmlnZ2VyIOS4jeS8muWcqOavj+S4gOasoeenu+WKqOaXtuinpuWPkSBvblBvcHVwQWxpZ25cbiAgICAgKiDmiYDku6XlnKjov5nph4zliKnnlKggdHJpZ2dlciDnmoTmjqXlj6PlvLrliLblrprkvY1cbiAgICAgKi9cbiAgICBpZiAodHJpZ2dlcj8uZm9yY2VQb3B1cEFsaWduKSB7XG4gICAgICB0cmlnZ2VyLmZvcmNlUG9wdXBBbGlnbigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbnRlbnRgfT5cbiAgICAgIDxpIGNsYXNzTmFtZT17YCR7cHJlZml4fS1hcnJvd2B9IC8+XG4gICAgICA8ZGl2Pntjb250ZW50fTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblBvcHVwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOW8ueWHuuWGheWuuVxuICAgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiB0cmlnZ2VyIOWvueixoVxuICAgKi9cbiAgdHJpZ2dlcjogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuUG9wdXAuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50OiBudWxsLFxuICB0cmlnZ2VyOiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwXG4iXX0=