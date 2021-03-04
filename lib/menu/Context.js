"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MenuContext = React.createContext({});
exports.MenuContext = MenuContext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9Db250ZXh0LnRzeCJdLCJuYW1lcyI6WyJNZW51Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQWNPLElBQU1BLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxhQUFOLENBQWtDLEVBQWxDLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxudHlwZSBDb250ZXh0UHJvcHMgPSB7XG4gIC8qKlxuICAgKiDlhbbkuIvnmoQgU3ViTWVudSDlsZXlvIDnirbmgIHlj5HnlJ/lj5jljJbnmoQgaGFuZGxlcu+8jOWPguaVsDEgaW5kZXjvvIzlj4LmlbAyIGJvb2xcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKGluZGV4OiBSZWFjdC5SZWFjdFRleHQsIG9wZW46IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWFtuS4i+eahCBJdGVtIOeCueWHu+eahCBoYW5kbGVy77yM5Y+C5pWwIGluZGV444CC5b2T54S25Lmf5Y+v5Lul5Zyo5q+P5LiqIEl0ZW0g5LiK5YqgIG9uQ2xpY2sgcHJvcOOAglxuICAgKiDov5nkuKogcHJvcCDkuZ/lj6rmmK/kvZzkuLrkuIDkuKogY29udGV4dO+8jOWFtuS4iyBJdGVtIOeahCBvbkNsaWNrIOmDveS8muinpuWPkeatpOaWueazleOAglxuICAgKi9cbiAgb25JdGVtQ2xpY2s/OiAoaW5kZXg6IFJlYWN0LlJlYWN0VGV4dCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgTWVudUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENvbnRleHRQcm9wcz4oe30pXG4iXX0=