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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9Db250ZXh0LnRzeCJdLCJuYW1lcyI6WyJNZW51Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQWtCTyxJQUFNQSxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsYUFBTixDQUFrQyxFQUFsQyxDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbnR5cGUgQ29udGV4dFByb3BzID0ge1xuICAvKipcbiAgICog5pyA5bCP5a695bqmXG4gICAqL1xuICBtaW5XaWR0aD86IG51bWJlclxuICAvKipcbiAgICog5YW25LiL55qEIFN1Yk1lbnUg5bGV5byA54q25oCB5Y+R55Sf5Y+Y5YyW55qEIGhhbmRsZXLvvIzlj4LmlbAxIGluZGV477yM5Y+C5pWwMiBib29sXG4gICAqL1xuICBvbkV4cGFuZENoYW5nZT86IChpbmRleDogUmVhY3QuUmVhY3RUZXh0LCBvcGVuOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlhbbkuIvnmoQgSXRlbSDngrnlh7vnmoQgaGFuZGxlcu+8jOWPguaVsCBpbmRleOOAguW9k+eEtuS5n+WPr+S7peWcqOavj+S4qiBJdGVtIOS4iuWKoCBvbkNsaWNrIHByb3DjgIJcbiAgICog6L+Z5LiqIHByb3Ag5Lmf5Y+q5piv5L2c5Li65LiA5LiqIGNvbnRleHTvvIzlhbbkuIsgSXRlbSDnmoQgb25DbGljayDpg73kvJrop6blj5HmraTmlrnms5XjgIJcbiAgICovXG4gIG9uSXRlbUNsaWNrPzogKGluZGV4OiBSZWFjdC5SZWFjdFRleHQpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IE1lbnVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0UHJvcHM+KHt9KVxuIl19