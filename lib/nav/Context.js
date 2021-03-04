"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var NavContext = React.createContext({});
exports.NavContext = NavContext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L0NvbnRleHQudHN4Il0sIm5hbWVzIjpbIk5hdkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFxQk8sSUFBTUEsVUFBVSxHQUFHQyxLQUFLLENBQUNDLGFBQU4sQ0FBa0MsRUFBbEMsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG50eXBlIENvbnRleHRQcm9wcyA9IHtcbiAgLyoqXG4gICAqIOeCueWHuyBOYXYuSXRlbSDml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mmluZGV4XG4gICAqL1xuICBvbkNoYW5nZT86IChpbmRleDogUmVhY3QuUmVhY3RUZXh0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBTdWIg5pS26LW3IC8g5bGV5byAIOaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaaW5kZXhcbiAgICovXG4gIG9uT3BlbkNoYW5nZT86IChpbmRleDogUmVhY3QuUmVhY3RUZXh0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlsZXlvIDnmoQgU3ViTmF2IGluZGV4ZXPvvIzor7fnoa7kv53mlbDnu4TpobnlkIjms5XvvIxOYXYg5LiN5Lya5YGa6L+H5aSa6aqM6K+BXG4gICAqL1xuICBvcGVuSW5kZXhlcz86IFJlYWN0LlJlYWN0VGV4dFtdIHwgbnVsbFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIE5hdi5JdGVtIGluZGV4XG4gICAqL1xuICBzZWxlY3RlZEluZGV4PzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxufVxuXG5leHBvcnQgY29uc3QgTmF2Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q29udGV4dFByb3BzPih7fSlcbiJdfQ==