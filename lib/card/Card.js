"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Header = _interopRequireDefault(require("./Header"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-card";
var Card = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      elevation = _ref.elevation,
      interactive = _ref.interactive,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "elevation", "interactive"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-elevation_").concat(elevation), _defineProperty({}, "".concat(prefix, "-interactive"), interactive));
  return _react["default"].createElement("div", _extends({
    ref: ref,
    className: classSet
  }, otherProps), children);
});
Card.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  elevation: _propTypes["default"].oneOf([0, 1, 2, 3, 4]),
  interactive: _propTypes["default"].bool
};
Card.defaultProps = {
  children: "",
  className: undefined,
  elevation: 1,
  interactive: false
};
Card.Header = _Header["default"];
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9DYXJkLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJDYXJkIiwicmVmIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJlbGV2YXRpb24iLCJpbnRlcmFjdGl2ZSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7QUFpQ0EsSUFBTUMsSUFBVyxHQUFHLHVCQUNsQixnQkFFRUMsR0FGRixFQUdLO0FBQUEsTUFGREMsUUFFQyxRQUZEQSxRQUVDO0FBQUEsTUFGU0MsU0FFVCxRQUZTQSxTQUVUO0FBQUEsTUFGb0JDLFNBRXBCLFFBRm9CQSxTQUVwQjtBQUFBLE1BRitCQyxXQUUvQixRQUYrQkEsV0FFL0I7QUFBQSxNQUYrQ0MsVUFFL0M7O0FBQ0gsTUFBTUMsUUFBUSxHQUFHLDRCQUNmSixTQURlLFlBRVpKLE1BRlksc0JBR1pBLE1BSFksd0JBR1FLLFNBSFIsaUNBS1RMLE1BTFMsbUJBS2NNLFdBTGQsRUFBakI7QUFRQSxTQUNFO0FBQUssSUFBQSxHQUFHLEVBQUVKLEdBQVY7QUFBZSxJQUFBLFNBQVMsRUFBRU07QUFBMUIsS0FBd0NELFVBQXhDLEdBQ0dKLFFBREgsQ0FERjtBQUtELENBbEJpQixDQUFwQjtBQW9CQUYsSUFBSSxDQUFDUSxTQUFMLEdBQWlCO0FBSWZOLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVDLElBSkw7QUFRZlAsRUFBQUEsU0FBUyxFQUFFTSxzQkFBVUUsTUFSTjtBQVlmUCxFQUFBQSxTQUFTLEVBQUVLLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBaEIsQ0FaSTtBQWdCZlAsRUFBQUEsV0FBVyxFQUFFSSxzQkFBVUk7QUFoQlIsQ0FBakI7QUFtQkFiLElBQUksQ0FBQ2MsWUFBTCxHQUFvQjtBQUNsQlosRUFBQUEsUUFBUSxFQUFFLEVBRFE7QUFFbEJDLEVBQUFBLFNBQVMsRUFBRVksU0FGTztBQUdsQlgsRUFBQUEsU0FBUyxFQUFFLENBSE87QUFJbEJDLEVBQUFBLFdBQVcsRUFBRTtBQUpLLENBQXBCO0FBT0FMLElBQUksQ0FBQ2dCLE1BQUwsR0FBY0Esa0JBQWQ7ZUFFZWhCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2FyZFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhcmRQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWxgue6p1xuICAgKi9cbiAgZWxldmF0aW9uPzogMCB8IDEgfCAyIHwgMyB8IDRcbiAgLyoqXG4gICAqIOWPr1xi5LqS5Yqo5oCnXG4gICAqL1xuICBpbnRlcmFjdGl2ZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2FyZFxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSUNhcmRQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4gID4ge1xuICBIZWFkZXI6IHR5cGVvZiBIZWFkZXJcbn1cblxuLyoqXG4gKiDljaHniYfmmK/ljIXlkKvkuIDnsbvnibnlrprmlbDmja7pm4bnmoTmnInlsYLnuqfnmoTmqKHlnZfvvIznlKjku6Xmib/ovb3nm7jlhbPogZTlhoXlrrnjgILpobXpnaLorr7orqHkuK3vvIzpgJrluLjku6XlhoXlrrnlhrPlrprljaHniYfnmoTluIPlsYDmlrnlvI/jgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgQ2FyZDogSUNhcmQgPSBmb3J3YXJkUmVmKFxuICAoXG4gICAgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBlbGV2YXRpb24sIGludGVyYWN0aXZlLCAuLi5vdGhlclByb3BzIH06IElDYXJkUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LWVsZXZhdGlvbl8ke2VsZXZhdGlvbn1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZWBdOiBpbnRlcmFjdGl2ZSxcbiAgICAgIH1cbiAgICApXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlsYLnuqdcbiAgICovXG4gIGVsZXZhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFswLCAxLCAyLCAzLCA0XSksXG4gIC8qKlxuICAgKiDlj69cYuS6kuWKqOaAp1xuICAgKi9cbiAgaW50ZXJhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxufVxuXG5DYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBlbGV2YXRpb246IDEsXG4gIGludGVyYWN0aXZlOiBmYWxzZSxcbn1cblxuQ2FyZC5IZWFkZXIgPSBIZWFkZXJcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19