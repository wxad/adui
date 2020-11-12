"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Row = _interopRequireDefault(require("./Row"));

var _Col = _interopRequireDefault(require("./Col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Grid = function Grid() {
  return React.createElement("div", null);
};

Grid.Row = _Row["default"];
Grid.Col = _Col["default"];
var _default = Grid;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZ3JpZC9HcmlkLnRzeCJdLCJuYW1lcyI6WyJHcmlkIiwiUm93IiwiQ29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFTQSxJQUFNQSxJQUFXLEdBQUcsU0FBZEEsSUFBYztBQUFBLFNBQU0sZ0NBQU47QUFBQSxDQUFwQjs7QUFFQUEsSUFBSSxDQUFDQyxHQUFMLEdBQVdBLGVBQVg7QUFDQUQsSUFBSSxDQUFDRSxHQUFMLEdBQVdBLGVBQVg7ZUFFZUYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiXG5pbXBvcnQgQ29sIGZyb20gXCIuL0NvbFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWQge1xuICBSb3c6IHR5cGVvZiBSb3dcbiAgQ29sOiB0eXBlb2YgQ29sXG59XG4vKipcbiAqIOagheagvOeUqOS6juS+v+aNt+aQreW7uue7k+aehOWMlueahOmhtemdouW4g+WxgO+8jOW4uOeUqOS6juacieaYjuehruWKn+iDveWIhuWMuueahOmhtemdou+8jOWmgiBEYXNoYm9hcmTjgIHpobnnm67ljaHniYfnrYnjgIJcbiAqL1xuY29uc3QgR3JpZDogSUdyaWQgPSAoKSA9PiA8ZGl2IC8+XG5cbkdyaWQuUm93ID0gUm93XG5HcmlkLkNvbCA9IENvbFxuXG5leHBvcnQgZGVmYXVsdCBHcmlkXG4iXX0=