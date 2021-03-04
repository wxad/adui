"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var GroupContext = React.createContext({});
exports.GroupContext = GroupContext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvQ29udGV4dC50c3giXSwibmFtZXMiOlsiR3JvdXBDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7O0FBcUJPLElBQU1BLFlBQVksR0FBR0MsS0FBSyxDQUFDQyxhQUFOLENBQWtDLEVBQWxDLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxudHlwZSBDb250ZXh0UHJvcHMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5YC85pS55Y+Y55qEIGhhbmRsZXLvvIzkvKDpgJLkuIvljrvnlLHlrZDnu4Tku7bop6blj5FcbiAgICovXG4gIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2U/OiAoY2hlY2tib3hWYWx1ZTogUmVhY3QuUmVhY3RUZXh0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgQXJyYXk8UmVhY3QuUmVhY3RUZXh0PlxufVxuXG5leHBvcnQgY29uc3QgR3JvdXBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb250ZXh0UHJvcHM+KHt9KVxuIl19