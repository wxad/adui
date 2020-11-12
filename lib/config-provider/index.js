"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _ConfigProvider.ConfigContext;
  }
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function get() {
    return _ConfigProvider.ConfigConsumer;
  }
});
Object.defineProperty(exports, "getComputedSize", {
  enumerable: true,
  get: function get() {
    return _ConfigProvider.getComputedSize;
  }
});
exports["default"] = void 0;

var _ConfigProvider = _interopRequireWildcard(require("./ConfigProvider"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _ConfigProvider["default"];
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29uZmlnLXByb3ZpZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJDb25maWdQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztlQVFlQSwwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdQcm92aWRlciwge1xuICBDb25maWdDb250ZXh0LFxuICBDb25maWdDb25zdW1lcixcbiAgZ2V0Q29tcHV0ZWRTaXplLFxufSBmcm9tIFwiLi9Db25maWdQcm92aWRlclwiXG5cbmV4cG9ydCB7IENvbmZpZ0NvbnRleHQsIENvbmZpZ0NvbnN1bWVyLCBnZXRDb21wdXRlZFNpemUgfVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlclxuIl19