"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TabsContext = React.createContext({});
exports.TabsContext = TabsContext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtdGFicy9Db250ZXh0LnRzeCJdLCJuYW1lcyI6WyJUYWJzQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQXFCTyxJQUFNQSxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsYUFBTixDQUFrQyxFQUFsQyxDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbnR5cGUgQ29udGV4dFByb3BzID0ge1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIHRhYiDnmoTpl7Tot50gbWFyZ2luXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWAvOaUueWPmOeahCBoYW5kbGVy77yM5Lyg6YCS5LiL5Y6755Sx5a2Q57uE5Lu26Kem5Y+RXG4gICAqL1xuICBoYW5kbGVUYWJzVmFsdWVDaGFuZ2U/OiAodmFsdWU6IFJlYWN0LlJlYWN0VGV4dCkgPT4gdm9pZFxuICAvKipcbiAgICog5bey6YCJ5Lit6aG5XG4gICAqL1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IFRhYnNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0UHJvcHM+KHt9KVxuIl19