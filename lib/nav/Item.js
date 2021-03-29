"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-nav";

var Item = function Item(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      icon = _ref.icon,
      index = _ref.index,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "disabled", "icon", "index"]);

  var _useContext = (0, _react.useContext)(_Context.NavContext),
      selectedIndex = _useContext.selectedIndex,
      onChange = _useContext.onChange;

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-item"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-item_selected"), index === selectedIndex), _defineProperty(_classNames, "".concat(prefix, "-item_disabled"), disabled), _classNames));
  return _react["default"].createElement("div", _extends({
    className: classSet,
    onClick: function onClick() {
      if (!disabled && onChange) {
        onChange(index);
      }
    },
    role: "none"
  }, otherProps), icon && _react["default"].createElement(_icon["default"], {
    icon: icon,
    className: "".concat(prefix, "-icon")
  }), children);
};

Item.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].any,
  index: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired
};
Item.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  icon: undefined
};
var _default = Item;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L0l0ZW0udHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkl0ZW0iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiaWNvbiIsImluZGV4Iiwib3RoZXJQcm9wcyIsIk5hdkNvbnRleHQiLCJzZWxlY3RlZEluZGV4Iiwib25DaGFuZ2UiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib25lT2ZUeXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsVUFBZjs7QUE2QkEsSUFBTUMsSUFBMEIsR0FBRyxTQUE3QkEsSUFBNkIsT0FPakI7QUFBQTs7QUFBQSxNQU5oQkMsUUFNZ0IsUUFOaEJBLFFBTWdCO0FBQUEsTUFMaEJDLFNBS2dCLFFBTGhCQSxTQUtnQjtBQUFBLE1BSmhCQyxRQUlnQixRQUpoQkEsUUFJZ0I7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsTUFGaEJDLEtBRWdCLFFBRmhCQSxLQUVnQjtBQUFBLE1BRGJDLFVBQ2E7O0FBQUEsb0JBQ29CLHVCQUFXQyxtQkFBWCxDQURwQjtBQUFBLE1BQ1JDLGFBRFEsZUFDUkEsYUFEUTtBQUFBLE1BQ09DLFFBRFAsZUFDT0EsUUFEUDs7QUFHaEIsTUFBTUMsUUFBUSxHQUFHLDRCQUFXUixTQUFYLFlBQXlCSCxNQUF6QixzRUFDWEEsTUFEVyxxQkFDY00sS0FBSyxLQUFLRyxhQUR4QiwwQ0FFWFQsTUFGVyxxQkFFY0ksUUFGZCxnQkFBakI7QUFLQSxTQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUVPLFFBRGI7QUFFRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLFVBQUksQ0FBQ1AsUUFBRCxJQUFhTSxRQUFqQixFQUEyQjtBQUN6QkEsUUFBQUEsUUFBUSxDQUFDSixLQUFELENBQVI7QUFDRDtBQUNGLEtBTkg7QUFPRSxJQUFBLElBQUksRUFBQztBQVBQLEtBUU1DLFVBUk4sR0FVR0YsSUFBSSxJQUFJLGdDQUFDLGdCQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUVBLElBQVo7QUFBa0IsSUFBQSxTQUFTLFlBQUtMLE1BQUw7QUFBM0IsSUFWWCxFQVdHRSxRQVhILENBREY7QUFlRCxDQTlCRDs7QUFnQ0FELElBQUksQ0FBQ1csU0FBTCxHQUFpQjtBQUlmVixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVQyxJQUpMO0FBUWZYLEVBQUFBLFNBQVMsRUFBRVUsc0JBQVVFLE1BUk47QUFZZlgsRUFBQUEsUUFBUSxFQUFFUyxzQkFBVUcsSUFaTDtBQWdCZlgsRUFBQUEsSUFBSSxFQUFFUSxzQkFBVUksR0FoQkQ7QUFvQmZYLEVBQUFBLEtBQUssRUFBRU8sc0JBQVVLLFNBQVYsQ0FBb0IsQ0FBQ0wsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVTSxNQUE3QixDQUFwQixFQUEwREM7QUFwQmxELENBQWpCO0FBdUJBbkIsSUFBSSxDQUFDb0IsWUFBTCxHQUFvQjtBQUNsQm5CLEVBQUFBLFFBQVEsRUFBRSxJQURRO0FBRWxCQyxFQUFBQSxTQUFTLEVBQUVtQixTQUZPO0FBR2xCbEIsRUFBQUEsUUFBUSxFQUFFLEtBSFE7QUFJbEJDLEVBQUFBLElBQUksRUFBRWlCO0FBSlksQ0FBcEI7ZUFPZXJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktbmF2XCJcblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOiuvue9ruWbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUmVhY3QuUmVhY3RUZXh0XG59XG5cbi8qKlxuICog5a+86Iiq5qCPIC0gaXRlbVxuICovXG5jb25zdCBJdGVtOiBSZWFjdC5GQzxJSXRlbVByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRpc2FibGVkLFxuICBpY29uLFxuICBpbmRleCxcbiAgLi4ub3RoZXJQcm9wc1xufTogSUl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB7IHNlbGVjdGVkSW5kZXgsIG9uQ2hhbmdlIH0gPSB1c2VDb250ZXh0KE5hdkNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1pdGVtYCwge1xuICAgIFtgJHtwcmVmaXh9LWl0ZW1fc2VsZWN0ZWRgXTogaW5kZXggPT09IHNlbGVjdGVkSW5kZXgsXG4gICAgW2Ake3ByZWZpeH0taXRlbV9kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmICghZGlzYWJsZWQgJiYgb25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZShpbmRleClcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHtpY29uICYmIDxJY29uIGljb249e2ljb259IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz59XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDorr7nva7lm77moIdcbiAgICovXG4gIGljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDni6znq4vnmoQgaW5kZXggcmVxdWlyZWRcbiAgICovXG4gIGluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbn1cblxuSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpY29uOiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cbiJdfQ==