"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-layout";

var Main = function Main(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("main", _extends({
    className: (0, _classnames["default"])(className, "".concat(prefix, "-main"))
  }, otherProps), children);
};

Main.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string
};
Main.defaultProps = {
  children: "",
  className: undefined
};
var _default = Main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L01haW4udHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIk1haW4iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm90aGVyUHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsYUFBZjs7QUFpQkEsSUFBTUMsSUFBMEIsR0FBRyxTQUE3QkEsSUFBNkI7QUFBQSxNQUNqQ0MsUUFEaUMsUUFDakNBLFFBRGlDO0FBQUEsTUFFakNDLFNBRmlDLFFBRWpDQSxTQUZpQztBQUFBLE1BRzlCQyxVQUg4Qjs7QUFBQSxTQUtqQztBQUFNLElBQUEsU0FBUyxFQUFFLDRCQUFXRCxTQUFYLFlBQXlCSCxNQUF6QjtBQUFqQixLQUE4REksVUFBOUQsR0FDR0YsUUFESCxDQUxpQztBQUFBLENBQW5DOztBQVVBRCxJQUFJLENBQUNJLFNBQUwsR0FBaUI7QUFJZkgsRUFBQUEsUUFBUSxFQUFFSSxzQkFBVUMsSUFKTDtBQVFmSixFQUFBQSxTQUFTLEVBQUVHLHNCQUFVRTtBQVJOLENBQWpCO0FBV0FQLElBQUksQ0FBQ1EsWUFBTCxHQUFvQjtBQUNsQlAsRUFBQUEsUUFBUSxFQUFFLEVBRFE7QUFFbEJDLEVBQUFBLFNBQVMsRUFBRU87QUFGTyxDQUFwQjtlQUtlVCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1sYXlvdXRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElNYWluUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbi8qKlxuICog5biD5bGAIC0g5Li75L2T5YaF5a65IGA8bWFpbiAvPmBcbiAqL1xuY29uc3QgTWFpbjogUmVhY3QuRkM8SU1haW5Qcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICAuLi5vdGhlclByb3BzXG59OiBJTWFpblByb3BzKSA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tbWFpbmApfSB7Li4ub3RoZXJQcm9wc30+XG4gICAge2NoaWxkcmVufVxuICA8L21haW4+XG4pXG5cbk1haW4ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuTWFpbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl19