"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resetWarned", {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned;
  }
});
exports["default"] = void 0;

var _warning = _interopRequireWildcard(require("rc-util/lib/warning"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(valid, component, message) {
  (0, _warning["default"])(valid, "[adui: ".concat(component, "] ").concat(message));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvX3V0aWwvd2FybmluZy50cyJdLCJuYW1lcyI6WyJ2YWxpZCIsImNvbXBvbmVudCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7ZUFJZSxrQkFBQ0EsS0FBRCxFQUFpQkMsU0FBakIsRUFBb0NDLE9BQXBDLEVBQThEO0FBQzNFLDJCQUFRRixLQUFSLG1CQUF5QkMsU0FBekIsZUFBdUNDLE9BQXZDO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3YXJuaW5nLCB7IHJlc2V0V2FybmVkIH0gZnJvbSBcInJjLXV0aWwvbGliL3dhcm5pbmdcIlxuXG5leHBvcnQgeyByZXNldFdhcm5lZCB9XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWxpZDogYm9vbGVhbiwgY29tcG9uZW50OiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuICB3YXJuaW5nKHZhbGlkLCBgW2FkdWk6ICR7Y29tcG9uZW50fV0gJHttZXNzYWdlfWApXG59XG4iXX0=