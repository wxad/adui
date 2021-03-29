"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FormContext = React.createContext({});
exports.FormContext = FormContext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZm9ybS9Db250ZXh0LnRzeCJdLCJuYW1lcyI6WyJGb3JtQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQXFCTyxJQUFNQSxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsYUFBTixDQUFrQyxFQUFsQyxDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbnR5cGUgQ29udGV4dFByb3BzID0ge1xuICAvKipcbiAgICogaXRlbSBzdHlsZVxuICAgKi9cbiAgaXRlbVN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICogbGFiZWwg5a2X56ym5a+56b2Q5pa55byPXG4gICAqL1xuICBsYWJlbEFsaWduPzogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiIHwgbnVsbFxuICAvKipcbiAgICogbGFiZWwg5a2X56ym5pWw77yMRm9ybSDkvJrku6UgZW0g5Y2V5L2N6K6+572uIGxhYmVsIOWuveW6plxuICAgKi9cbiAgbGFiZWxTaXplPzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICogbGFiZWwgc3R5bGVcbiAgICovXG4gIGxhYmVsU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG59XG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFByb3BzPih7fSlcbiJdfQ==