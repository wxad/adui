"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _affix = _interopRequireDefault(require("../affix"));

var _detectStickySupport = require("../_util/detectStickySupport");

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-layout";

var Header = function Header(_ref) {
  var affixed = _ref.affixed,
      children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["affixed", "children", "className"]);

  var _useContext = (0, _react.useContext)(_Context.LayoutContext),
      setHeaderAffixed = _useContext.setHeaderAffixed;

  (0, _react.useEffect)(function () {
    if (setHeaderAffixed) {
      setHeaderAffixed(affixed || false);
    }
  }, [affixed]);

  var header = _react["default"].createElement("header", _extends({
    className: (0, _classnames["default"])(className, "".concat(prefix, "-header"), _defineProperty({}, "".concat(prefix, "-header_affixed"), affixed))
  }, otherProps), children);

  if (affixed && !Header.stickable) {
    return _react["default"].createElement(_affix["default"], null, header);
  }

  return header;
};

Header.stickable = (0, _detectStickySupport.detectStickySupport)();
Header.propTypes = {
  affixed: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string
};
Header.defaultProps = {
  affixed: false,
  children: "",
  className: undefined
};
var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci50c3giXSwibmFtZXMiOlsicHJlZml4IiwiSGVhZGVyIiwiYWZmaXhlZCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwib3RoZXJQcm9wcyIsIkxheW91dENvbnRleHQiLCJzZXRIZWFkZXJBZmZpeGVkIiwiaGVhZGVyIiwic3RpY2thYmxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm5vZGUiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGFBQWY7O0FBcUJBLElBQU1DLE1BRUwsR0FBRyxTQUZFQSxNQUVGLE9BQW1FO0FBQUEsTUFBaEVDLE9BQWdFLFFBQWhFQSxPQUFnRTtBQUFBLE1BQXZEQyxRQUF1RCxRQUF2REEsUUFBdUQ7QUFBQSxNQUE3Q0MsU0FBNkMsUUFBN0NBLFNBQTZDO0FBQUEsTUFBL0JDLFVBQStCOztBQUFBLG9CQUN4Qyx1QkFBV0Msc0JBQVgsQ0FEd0M7QUFBQSxNQUM3REMsZ0JBRDZELGVBQzdEQSxnQkFENkQ7O0FBR3JFLHdCQUFVLFlBQU07QUFDZCxRQUFJQSxnQkFBSixFQUFzQjtBQUNwQkEsTUFBQUEsZ0JBQWdCLENBQUNMLE9BQU8sSUFBSSxLQUFaLENBQWhCO0FBQ0Q7QUFDRixHQUpELEVBSUcsQ0FBQ0EsT0FBRCxDQUpIOztBQU1BLE1BQU1NLE1BQU0sR0FDVjtBQUNFLElBQUEsU0FBUyxFQUFFLDRCQUFXSixTQUFYLFlBQXlCSixNQUF6Qiw0Q0FDTEEsTUFESyxzQkFDcUJFLE9BRHJCO0FBRGIsS0FJTUcsVUFKTixHQU1HRixRQU5ILENBREY7O0FBVUEsTUFBSUQsT0FBTyxJQUFJLENBQUNELE1BQU0sQ0FBQ1EsU0FBdkIsRUFBa0M7QUFDaEMsV0FBTyxnQ0FBQyxpQkFBRCxRQUFRRCxNQUFSLENBQVA7QUFDRDs7QUFDRCxTQUFPQSxNQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJBUCxNQUFNLENBQUNRLFNBQVAsR0FBbUIsK0NBQW5CO0FBRUFSLE1BQU0sQ0FBQ1MsU0FBUCxHQUFtQjtBQUlqQlIsRUFBQUEsT0FBTyxFQUFFUyxzQkFBVUMsSUFKRjtBQVFqQlQsRUFBQUEsUUFBUSxFQUFFUSxzQkFBVUUsSUFSSDtBQVlqQlQsRUFBQUEsU0FBUyxFQUFFTyxzQkFBVUc7QUFaSixDQUFuQjtBQWVBYixNQUFNLENBQUNjLFlBQVAsR0FBc0I7QUFDcEJiLEVBQUFBLE9BQU8sRUFBRSxLQURXO0FBRXBCQyxFQUFBQSxRQUFRLEVBQUUsRUFGVTtBQUdwQkMsRUFBQUEsU0FBUyxFQUFFWTtBQUhTLENBQXRCO2VBTWVmLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEFmZml4IGZyb20gXCIuLi9hZmZpeFwiXG5pbXBvcnQgeyBkZXRlY3RTdGlja3lTdXBwb3J0IH0gZnJvbSBcIi4uL191dGlsL2RldGVjdFN0aWNreVN1cHBvcnRcIlxuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1sYXlvdXRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm5Zu65a6aXG4gICAqL1xuICBhZmZpeGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiDluIPlsYAgLSDlpLTpg6ggYDxoZWFkZXIgLz5gXG4gKi9cbmNvbnN0IEhlYWRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUhlYWRlclByb3BzPiAmIHtcbiAgc3RpY2thYmxlOiBib29sZWFuXG59ID0gKHsgYWZmaXhlZCwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ub3RoZXJQcm9wcyB9OiBJSGVhZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZXRIZWFkZXJBZmZpeGVkIH0gPSB1c2VDb250ZXh0KExheW91dENvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2V0SGVhZGVyQWZmaXhlZCkge1xuICAgICAgc2V0SGVhZGVyQWZmaXhlZChhZmZpeGVkIHx8IGZhbHNlKVxuICAgIH1cbiAgfSwgW2FmZml4ZWRdKVxuXG4gIGNvbnN0IGhlYWRlciA9IChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWhlYWRlcmAsIHtcbiAgICAgICAgW2Ake3ByZWZpeH0taGVhZGVyX2FmZml4ZWRgXTogYWZmaXhlZCxcbiAgICAgIH0pfVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG4gIGlmIChhZmZpeGVkICYmICFIZWFkZXIuc3RpY2thYmxlKSB7XG4gICAgcmV0dXJuIDxBZmZpeD57aGVhZGVyfTwvQWZmaXg+XG4gIH1cbiAgcmV0dXJuIGhlYWRlclxufVxuXG5IZWFkZXIuc3RpY2thYmxlID0gZGV0ZWN0U3RpY2t5U3VwcG9ydCgpXG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKblm7rlrppcbiAgICovXG4gIGFmZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWZmaXhlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0=