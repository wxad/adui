"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Memo = function Memo(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_react["default"].Fragment, null, children);
};

Memo.propTypes = {
  children: _propTypes["default"].any.isRequired
};

var _default = (0, _react.memo)(Memo);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNpdGlvbi9NZW1vLnRzeCJdLCJuYW1lcyI6WyJNZW1vIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUE2QyxHQUFHLFNBQWhEQSxJQUFnRDtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ3BELGtFQUFHQSxRQUFILENBRG9EO0FBQUEsQ0FBdEQ7O0FBSUFELElBQUksQ0FBQ0UsU0FBTCxHQUFpQjtBQUNmRCxFQUFBQSxRQUFRLEVBQUVFLHNCQUFVQyxHQUFWLENBQWNDO0FBRFQsQ0FBakI7O2VBSWUsaUJBQUtMLElBQUwsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuXG5jb25zdCBNZW1vOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDw+e2NoaWxkcmVufTwvPlxuKVxuXG5NZW1vLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhNZW1vKVxuIl19