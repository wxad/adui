"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-switch";

var Switch = function Switch(_ref) {
  var _classNames;

  var checkedProps = _ref.checked,
      checkedText = _ref.checkedText,
      className = _ref.className,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      size = _ref.size,
      unCheckedText = _ref.unCheckedText,
      otherProps = _objectWithoutProperties(_ref, ["checked", "checkedText", "className", "defaultChecked", "disabled", "onChange", "onClick", "size", "unCheckedText"]);

  var _useState = (0, _react.useState)(checkedProps !== null ? !!checkedProps : !!defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  if (checkedProps !== null && checked !== checkedProps) {
    setChecked(!!checkedProps);
  }

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var handleChange = function handleChange() {
    if (onClick) {
      onClick();
    }

    if (!disabled) {
      if (checkedProps === null) {
        setChecked(!checked);
      }

      if (onChange) {
        onChange(!checked);
      }
    }
  };

  var handleKeyPress = function handleKeyPress(_ref2) {
    var key = _ref2.key;

    if (key.toUpperCase() === "ENTER") {
      handleChange();
    }
  };

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat((0, _configProvider.getComputedSize)(size, sizeContext)), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-checked"), checked), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _classNames));
  return _react["default"].createElement("span", _extends({
    "aria-checked": checked,
    className: classSet,
    onClick: handleChange,
    onKeyPress: handleKeyPress,
    role: "switch",
    tabIndex: 0
  }, otherProps), _react["default"].createElement("span", {
    className: "".concat(prefix, "-base")
  }, _react["default"].createElement("i", {
    className: "".concat(prefix, "-indicator")
  })), !!checked && checkedText && _react["default"].createElement("span", {
    className: "".concat(prefix, "-text")
  }, checkedText), !checked && unCheckedText && _react["default"].createElement("span", {
    className: "".concat(prefix, "-text")
  }, unCheckedText));
};

Switch.propTypes = {
  checked: _propTypes["default"].oneOf([null, true, false]),
  checkedText: _propTypes["default"].node,
  className: _propTypes["default"].string,
  defaultChecked: _propTypes["default"].oneOf([null, true, false]),
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  unCheckedText: _propTypes["default"].node
};
Switch.defaultProps = {
  checked: null,
  checkedText: null,
  className: undefined,
  defaultChecked: null,
  disabled: false,
  onChange: null,
  onClick: null,
  size: "small",
  unCheckedText: null
};
var _default = Switch;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3dpdGNoL1N3aXRjaC50c3giXSwibmFtZXMiOlsicHJlZml4IiwiU3dpdGNoIiwiY2hlY2tlZFByb3BzIiwiY2hlY2tlZCIsImNoZWNrZWRUZXh0IiwiY2xhc3NOYW1lIiwiZGVmYXVsdENoZWNrZWQiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwib25DbGljayIsInNpemUiLCJ1bkNoZWNrZWRUZXh0Iiwib3RoZXJQcm9wcyIsInNldENoZWNrZWQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsInRvVXBwZXJDYXNlIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsYUFBZjs7QUE2Q0EsSUFBTUMsTUFBOEIsR0FBRyxTQUFqQ0EsTUFBaUMsT0FXbkI7QUFBQTs7QUFBQSxNQVZUQyxZQVVTLFFBVmxCQyxPQVVrQjtBQUFBLE1BVGxCQyxXQVNrQixRQVRsQkEsV0FTa0I7QUFBQSxNQVJsQkMsU0FRa0IsUUFSbEJBLFNBUWtCO0FBQUEsTUFQbEJDLGNBT2tCLFFBUGxCQSxjQU9rQjtBQUFBLE1BTmxCQyxRQU1rQixRQU5sQkEsUUFNa0I7QUFBQSxNQUxsQkMsUUFLa0IsUUFMbEJBLFFBS2tCO0FBQUEsTUFKbEJDLE9BSWtCLFFBSmxCQSxPQUlrQjtBQUFBLE1BSGxCQyxJQUdrQixRQUhsQkEsSUFHa0I7QUFBQSxNQUZsQkMsYUFFa0IsUUFGbEJBLGFBRWtCO0FBQUEsTUFEZkMsVUFDZTs7QUFBQSxrQkFDWSxxQkFDNUJWLFlBQVksS0FBSyxJQUFq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Q0F2QixNQUFNLENBQUMyQixZQUFQLEdBQXNCO0FBQ3BCekIsRUFBQUEsT0FBTyxFQUFFLElBRFc7QUFFcEJDLEVBQUFBLFdBQVcsRUFBRSxJQUZPO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUV3QixTQUhTO0FBSXBCdkIsRUFBQUEsY0FBYyxFQUFFLElBSkk7QUFLcEJDLEVBQUFBLFFBQVEsRUFBRSxLQUxVO0FBTXBCQyxFQUFBQSxRQUFRLEVBQUUsSUFOVTtBQU9wQkMsRUFBQUEsT0FBTyxFQUFFLElBUFc7QUFRcEJDLEVBQUFBLElBQUksRUFBRSxPQVJjO0FBU3BCQyxFQUFBQSxhQUFhLEVBQUU7QUFUSyxDQUF0QjtlQVllVixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXN3aXRjaFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN3aXRjaFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlvIDlhbPnirbmgIEgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIGNoZWNrZWQ/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5byA54q25oCB5pe255qE6ZmE5Yqg5paH5a2XXG4gICAqL1xuICBjaGVja2VkVGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOW8gOWFs+eKtuaAgSAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdENoZWNrZWQ/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOW8gOWFs+eKtuaAgeaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICgoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljaz86ICgoKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5YWz54q25oCB5pe255qE6ZmE5Yqg5paH5a2XXG4gICAqL1xuICB1bkNoZWNrZWRUZXh0PzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5byA5YWz55So5LqO6KGo56S65YaF5a6555qE5byA5ZCv5LiO5YWz6Zet77yM5bi455So5LqO5byA5ZCv5oiW5YWz6Zet5p+Q5LiA5Yqf6IO944CB5qih5byP77yM5Lmf5Y+v5Lul6KGo56S65Lia5Yqh5Lit55qE5LiA5Lqb54m55q6K6YC76L6R77yM5aaC5bm/5ZGK55qE4oCc5oqV5pS+L+aaguWBnOKAneOAglxuICovXG5jb25zdCBTd2l0Y2g6IFJlYWN0LkZDPElTd2l0Y2hQcm9wcz4gPSAoe1xuICBjaGVja2VkOiBjaGVja2VkUHJvcHMsXG4gIGNoZWNrZWRUZXh0LFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRDaGVja2VkLFxuICBkaXNhYmxlZCxcbiAgb25DaGFuZ2UsXG4gIG9uQ2xpY2ssXG4gIHNpemUsXG4gIHVuQ2hlY2tlZFRleHQsXG4gIC4uLm90aGVyUHJvcHNcbn06IElTd2l0Y2hQcm9wcykgPT4ge1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShcbiAgICBjaGVja2VkUHJvcHMgIT09IG51bGwgPyAhIWNoZWNrZWRQcm9wcyA6ICEhZGVmYXVsdENoZWNrZWRcbiAgKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKGNoZWNrZWRQcm9wcyAhPT0gbnVsbCAmJiBjaGVja2VkICE9PSBjaGVja2VkUHJvcHMpIHtcbiAgICBzZXRDaGVja2VkKCEhY2hlY2tlZFByb3BzKVxuICB9XG5cbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljaygpXG4gICAgfVxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGlmIChjaGVja2VkUHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgc2V0Q2hlY2tlZCghY2hlY2tlZClcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSghY2hlY2tlZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9ICh7IGtleSB9OiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGtleS50b1VwcGVyQ2FzZSgpID09PSBcIkVOVEVSXCIpIHtcbiAgICAgIGhhbmRsZUNoYW5nZSgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LXdyYXBwZXJgLFxuICAgIGAke3ByZWZpeH0tJHtnZXRDb21wdXRlZFNpemUoc2l6ZSwgc2l6ZUNvbnRleHQpfWAsXG4gICAge1xuICAgICAgW2Ake3ByZWZpeH0tY2hlY2tlZGBdOiBjaGVja2VkLFxuICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgfVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgYXJpYS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZX1cbiAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxuICAgICAgcm9sZT1cInN3aXRjaFwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1iYXNlYH0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbmRpY2F0b3JgfSAvPlxuICAgICAgPC9zcGFuPlxuICAgICAgeyEhY2hlY2tlZCAmJiBjaGVja2VkVGV4dCAmJiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS10ZXh0YH0+e2NoZWNrZWRUZXh0fTwvc3Bhbj5cbiAgICAgICl9XG4gICAgICB7IWNoZWNrZWQgJiYgdW5DaGVja2VkVGV4dCAmJiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS10ZXh0YH0+e3VuQ2hlY2tlZFRleHR9PC9zcGFuPlxuICAgICAgKX1cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOW8gOWFs+eKtuaAgSAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxuICAvKipcbiAgICog5byA54q25oCB5pe255qE6ZmE5Yqg5paH5a2XXG4gICAqL1xuICBjaGVja2VkVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOm7mOiupOW8gOWFs+eKtuaAgSAtIOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5byA5YWz54q25oCB5pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWFs+eKtuaAgeaXtueahOmZhOWKoOaWh+Wtl1xuICAgKi9cbiAgdW5DaGVja2VkVGV4dDogUHJvcFR5cGVzLm5vZGUsXG59XG5cblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoZWNrZWQ6IG51bGwsXG4gIGNoZWNrZWRUZXh0OiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdENoZWNrZWQ6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25DaGFuZ2U6IG51bGwsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdW5DaGVja2VkVGV4dDogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoXG4iXX0=