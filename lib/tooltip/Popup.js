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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9Qb3B1cC50c3giXSwibmFtZXMiOlsicHJlZml4IiwiUG9wdXAiLCJjb250ZW50IiwidHJpZ2dlciIsImZvcmNlUG9wdXBBbGlnbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxjQUFmOztBQVFBLElBQU1DLEtBQTRCLEdBQUcsU0FBL0JBLEtBQStCLE9BQXVDO0FBQUEsTUFBcENDLE9BQW9DLFFBQXBDQSxPQUFvQztBQUFBLE1BQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFDMUUsd0JBQVUsWUFBTTtBQUtkLFFBQUlBLE9BQUosYUFBSUEsT0FBSixlQUFJQSxPQUFPLENBQUVDLGVBQWIsRUFBOEI7QUFDNUJELE1BQUFBLE9BQU8sQ0FBQ0MsZUFBUjtBQUNEO0FBQ0YsR0FSRDtBQVNBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsWUFBS0osTUFBTDtBQUFkLEtBQ0U7QUFBRyxJQUFBLFNBQVMsWUFBS0EsTUFBTDtBQUFaLElBREYsRUFFRSw2Q0FBTUUsT0FBTixDQUZGLENBREY7QUFNRCxDQWhCRDs7QUFrQkFELEtBQUssQ0FBQ0ksU0FBTixHQUFrQjtBQUloQkgsRUFBQUEsT0FBTyxFQUFFSSxzQkFBVUMsSUFKSDtBQVFoQkosRUFBQUEsT0FBTyxFQUFFRyxzQkFBVUU7QUFSSCxDQUFsQjtBQVdBUCxLQUFLLENBQUNRLFlBQU4sR0FBcUI7QUFDbkJQLEVBQUFBLE9BQU8sRUFBRSxJQURVO0FBRW5CQyxFQUFBQSxPQUFPLEVBQUVPO0FBRlUsQ0FBckI7ZUFLZVQsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBJVHJpZ2dlciB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRvb2x0aXBcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElQb3B1cFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdHJpZ2dlcj86IElUcmlnZ2VyXG59XG5cbmNvbnN0IFBvcHVwOiBSZWFjdC5GQzxJUG9wdXBQcm9wcz4gPSAoeyBjb250ZW50LCB0cmlnZ2VyIH06IElQb3B1cFByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLyoqXG4gICAgICog5ZyoIFNsaWRlciDkuK3nlKggVG9vbHRpcCDml7blj5HnjrAgUG9wVHJpZ2dlciDkuI3kvJrlnKjmr4/kuIDmrKHnp7vliqjml7bop6blj5Egb25Qb3B1cEFsaWduXG4gICAgICog5omA5Lul5Zyo6L+Z6YeM5Yip55SoIHRyaWdnZXIg55qE5o6l5Y+j5by65Yi25a6a5L2NXG4gICAgICovXG4gICAgaWYgKHRyaWdnZXI/LmZvcmNlUG9wdXBBbGlnbikge1xuICAgICAgdHJpZ2dlci5mb3JjZVBvcHVwQWxpZ24oKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250ZW50YH0+XG4gICAgICA8aSBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYXJyb3dgfSAvPlxuICAgICAgPGRpdj57Y29udGVudH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Qb3B1cC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlvLnlh7rlhoXlrrlcbiAgICovXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogdHJpZ2dlciDlr7nosaFcbiAgICovXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cblBvcHVwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudDogbnVsbCxcbiAgdHJpZ2dlcjogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cFxuIl19