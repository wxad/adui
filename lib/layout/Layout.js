"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Aside = _interopRequireDefault(require("./Aside"));

var _Header = _interopRequireDefault(require("./Header"));

var _Main = _interopRequireDefault(require("./Main"));

var _Context = require("./Context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Layout = function Layout(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      headerAffixed = _useState2[0],
      setHeaderAffixed = _useState2[1];

  return _react["default"].createElement(_Context.LayoutContext.Provider, {
    value: {
      headerAffixed: headerAffixed,
      setHeaderAffixed: setHeaderAffixed
    }
  }, _react["default"].createElement("div", props));
};

Layout.Aside = _Aside["default"];
Layout.Header = _Header["default"];
Layout.Main = _Main["default"];
Layout.propTypes = {
  children: _propTypes["default"].node
};
Layout.defaultProps = {
  children: null
};
var _default = Layout;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJoZWFkZXJBZmZpeGVkIiwic2V0SGVhZGVyQWZmaXhlZCIsIkFzaWRlIiwiSGVhZGVyIiwiTWFpbiIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUHJvcFR5cGVzIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxJQUFNQSxNQUlMLEdBQUcsU0FKRUEsTUFJRixDQUFDQyxLQUFELEVBQXlCO0FBQUEsa0JBQ2UscUJBQVMsS0FBVCxDQURmO0FBQUE7QUFBQSxNQUNwQkMsYUFEb0I7QUFBQSxNQUNMQyxnQkFESzs7QUFHM0IsU0FDRSxnQ0FBQyxzQkFBRCxDQUFlLFFBQWY7QUFBd0IsSUFBQSxLQUFLLEVBQUU7QUFBRUQsTUFBQUEsYUFBYSxFQUFiQSxhQUFGO0FBQWlCQyxNQUFBQSxnQkFBZ0IsRUFBaEJBO0FBQWpCO0FBQS9CLEtBQ0UsdUNBQVNGLEtBQVQsQ0FERixDQURGO0FBS0QsQ0FaRDs7QUFhQUQsTUFBTSxDQUFDSSxLQUFQLEdBQWVBLGlCQUFmO0FBQ0FKLE1BQU0sQ0FBQ0ssTUFBUCxHQUFnQkEsa0JBQWhCO0FBQ0FMLE1BQU0sQ0FBQ00sSUFBUCxHQUFjQSxnQkFBZDtBQUVBTixNQUFNLENBQUNPLFNBQVAsR0FBbUI7QUFJakJDLEVBQUFBLFFBQVEsRUFBRUMsc0JBQVVDO0FBSkgsQ0FBbkI7QUFPQVYsTUFBTSxDQUFDVyxZQUFQLEdBQXNCO0FBQ3BCSCxFQUFBQSxRQUFRLEVBQUU7QUFEVSxDQUF0QjtlQUllUixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IEFzaWRlIGZyb20gXCIuL0FzaWRlXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCJcbmltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIlxuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElMYXlvdXRQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOW4g+WxgOe7hOS7tueUqOS6juaQreW7uuS4gOS4que9keermeeahOWfuuacrOahhuaetuOAguWMheWQq+WtkOe7hOS7tiBgQXNpZGVgIGBIZWFkZXJgIGBNYWluYFxuICovXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElMYXlvdXRQcm9wcz4gJiB7XG4gIEFzaWRlOiB0eXBlb2YgQXNpZGVcbiAgSGVhZGVyOiB0eXBlb2YgSGVhZGVyXG4gIE1haW46IHR5cGVvZiBNYWluXG59ID0gKHByb3BzOiBJTGF5b3V0UHJvcHMpID0+IHtcbiAgY29uc3QgW2hlYWRlckFmZml4ZWQsIHNldEhlYWRlckFmZml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBoZWFkZXJBZmZpeGVkLCBzZXRIZWFkZXJBZmZpeGVkIH19PlxuICAgICAgPGRpdiB7Li4ucHJvcHN9IC8+XG4gICAgPC9MYXlvdXRDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5MYXlvdXQuQXNpZGUgPSBBc2lkZVxuTGF5b3V0LkhlYWRlciA9IEhlYWRlclxuTGF5b3V0Lk1haW4gPSBNYWluXG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19