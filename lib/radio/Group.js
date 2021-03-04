"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Context = require("./Context");

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

var prefix = "adui-radio";

function Group(_ref) {
  var children = _ref.children,
      className = _ref.className,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      size = _ref.size,
      valueProp = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "defaultValue", "disabled", "onChange", "size", "value"]);

  var _useState = (0, _react.useState)(function () {
    var checkedValue;

    if (valueProp !== null) {
      checkedValue = valueProp;
    } else if (defaultValue !== null) {
      checkedValue = defaultValue;
    }

    return checkedValue;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  if (valueProp !== null && value !== valueProp) {
    setValue(valueProp);
  }

  var handleGroupValueChange = function handleGroupValueChange(radioValue) {
    if (valueProp === null) {
      setValue(radioValue);
    }

    if (onChange) {
      onChange(radioValue);
    }
  };

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-group"), _defineProperty({}, "".concat(prefix, "-disabled"), disabled));
  return _react["default"].createElement(_Context.GroupContext.Provider, {
    value: {
      disabled: disabled,
      handleGroupValueChange: handleGroupValueChange,
      size: size,
      value: value
    }
  }, _react["default"].createElement("div", _extends({
    className: classSet,
    "data-value": value
  }, otherProps), children));
}

Group.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Group.defaultProps = {
  children: null,
  className: undefined,
  defaultValue: null,
  disabled: false,
  onChange: null,
  size: "small",
  value: null
};
var _default = Group;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmFkaW8vR3JvdXAudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkdyb3VwIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImNoZWNrZWRWYWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInJhZGlvVmFsdWUiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJib29sIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxZQUFmOztBQXVDQSxTQUFTQyxLQUFULE9BU3dCO0FBQUEsTUFSdEJDLFFBUXNCLFFBUnRCQSxRQVFzQjtBQUFBLE1BUHRCQyxTQU9zQixRQVB0QkEsU0FPc0I7QUFBQSxNQU50QkMsWUFNc0IsUUFOdEJBLFlBTXNCO0FBQUEsTUFMdEJDLFFBS3NCLFFBTHRCQSxRQUtzQjtBQUFBLE1BSnRCQyxRQUlzQixRQUp0QkEsUUFJc0I7QUFBQSxNQUh0QkMsSUFHc0IsUUFIdEJBLElBR3NCO0FBQUEsTUFGZkMsU0FFZSxRQUZ0QkMsS0FFc0I7QUFBQSxNQURuQkMsVUFDbUI7O0FBQUEsa0JBU0kscUJBQVMsWUFBTTtBQUN2QyxRQUFJQyxZQUFKOztBQUNBLFFBQUlILFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QkcsTUFBQUEsWUFBWSxHQUFHSCxTQUFmO0FBQ0QsS0FGRCxNQUVPLElBQUlKLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUNoQ08sTUFBQUEsWUFBWSxHQUFHUCxZQUFmO0FBQ0Q7O0FBQ0QsV0FBT08sWUFBUDtBQUNELEdBUnlCLENBVEo7QUFBQTtBQUFBLE1BU2ZGLEtBVGU7QUFBQSxNQVNSRyxRQVRROztBQW9CdEIsTUFBSUosU0FBUyxLQUFLLElBQWQsSUFBc0JDLEtBQUssS0FBS0QsU0FBcEMsRUFBK0M7QUFDN0NJLElBQUFBLFFBQVEsQ0FBQ0osU0FBRCxDQUFSO0FBQ0Q7O0FBRUQsTUFBTUssc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxVQUFELEVBQW1CO0FBQ2hELFFBQUlOLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QkksTUFBQUEsUUFBUSxDQUFDRSxVQUFELENBQVI7QUFDRDs7QUFDRCxRQUFJUixRQUFKLEVBQWM7QUFDWkEsTUFBQUEsUUFBUSxDQUFDUSxVQUFELENBQVI7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTUMsUUFBUSxHQUFHLDRCQUFXWixTQUFYLFlBQXlCSCxNQUF6QiwyQ0FDWEEsTUFEVyxnQkFDU0ssUUFEVCxFQUFqQjtBQUlBLFNBQ0UsZ0NBQUMscUJBQUQsQ0FBYyxRQUFkO0FBQ0UsSUFBQSxLQUFLLEVBQUU7QUFBRUEsTUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlRLE1BQUFBLHNCQUFzQixFQUF0QkEsc0JBQVo7QUFBb0NOLE1BQUFBLElBQUksRUFBSkEsSUFBcEM7QUFBMENFLE1BQUFBLEtBQUssRUFBTEE7QUFBMUM7QUFEVCxLQUdFO0FBQUssSUFBQSxTQUFTLEVBQUVNLFFBQWhCO0FBQTBCLGtCQUFZTjtBQUF0QyxLQUFpREMsVUFBakQsR0FDR1IsUUFESCxDQUhGLENBREY7QUFTRDs7QUFFREQsS0FBSyxDQUFDZSxTQUFOLEdBQWtCO0FBSWhCZCxFQUFBQSxRQUFRLEVBQUVlLHNCQUFVQyxJQUpKO0FBUWhCZixFQUFBQSxTQUFTLEVBQUVjLHNCQUFVRSxNQVJMO0FBWWhCZixFQUFBQSxZQUFZLEVBQUVhLHNCQUFVRyxTQUFWLENBQW9CLENBQUNILHNCQUFVRSxNQUFYLEVBQW1CRixzQkFBVUksTUFBN0IsQ0FBcEIsQ0FaRTtBQWdCaEJoQixFQUFBQSxRQUFRLEVBQUVZLHNCQUFVSyxJQWhCSjtBQW9CaEJoQixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVTSxJQXBCSjtBQXdCaEJoQixFQUFBQSxJQUFJLEVBQUVVLHNCQUFVTyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0F4QlU7QUE0QmhCZixFQUFBQSxLQUFLLEVBQUVRLHNCQUFVRyxTQUFWLENBQW9CLENBQUNILHNCQUFVRSxNQUFYLEVBQW1CRixzQkFBVUksTUFBN0IsQ0FBcEI7QUE1QlMsQ0FBbEI7QUErQkFwQixLQUFLLENBQUN3QixZQUFOLEdBQXFCO0FBQ25CdkIsRUFBQUEsUUFBUSxFQUFFLElBRFM7QUFFbkJDLEVBQUFBLFNBQVMsRUFBRXVCLFNBRlE7QUFHbkJ0QixFQUFBQSxZQUFZLEVBQUUsSUFISztBQUluQkMsRUFBQUEsUUFBUSxFQUFFLEtBSlM7QUFLbkJDLEVBQUFBLFFBQVEsRUFBRSxJQUxTO0FBTW5CQyxFQUFBQSxJQUFJLEVBQUUsT0FOYTtBQU9uQkUsRUFBQUEsS0FBSyxFQUFFO0FBUFksQ0FBckI7ZUFVZVIsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IEdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1yYWRpb1wiXG5cbnR5cGUgVmFsdWVUeXBlID0gUmVhY3QuUmVhY3RUZXh0XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlvR3JvdXBQcm9wczxUIGV4dGVuZHMgVmFsdWVUeXBlPiB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogbnVsbCB8IFRcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiBudWxsIHwgKCh2YWx1ZTogVCkgPT4gdm9pZClcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICB2YWx1ZT86IG51bGwgfCBUXG59XG5cbi8qKlxuICog5Y2V6YCJ57uE77yM55So5Lul57uf5LiA5Zyw566h55CG5YaF6YOo5Y2V6YCJ54q25oCB44CCXG4gKi9cbmZ1bmN0aW9uIEdyb3VwPFQgZXh0ZW5kcyBWYWx1ZVR5cGU+KHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZGVmYXVsdFZhbHVlLFxuICBkaXNhYmxlZCxcbiAgb25DaGFuZ2UsXG4gIHNpemUsXG4gIHZhbHVlOiB2YWx1ZVByb3AsXG4gIC4uLm90aGVyUHJvcHNcbn06IElSYWRpb0dyb3VwUHJvcHM8VD4pIHtcbiAgLyoqXG4gICAqIOWIneWni+WMliB2YWx1ZSBzdGF0ZVxuICAgKiAxLiDkvJjlhYjliKTmlq0gUHJvcCB2YWx1Ze+8jOWmguaenOWtmOWcqCBQcm9wIHZhbHVl77yM5YiZIEdyb3VwIOWujOWFqOS6pOeUseWklumDqOaOp+WItu+8jOWGhemDqOeKtuaAgeaXoOaViO+8m1xuICAgKiAyLiDlho3liKTmlq0gUHJvcCBkZWZhdWx0VmFsdWXvvIzlpoLmnpzlrZjlnKjpu5jorqTlgLzvvIzliJkgR3JvdXAg54q25oCB5Li65q2k6buY6K6k5YC877ybXG4gICAqIDMuIOacgOWQjuWIpOaWrSBSYWRpbyBjaGlsZHJlbiDmmK/lkKboh6rouqvlrZjlnKggUHJvcCBjaGVja2Vk44CCXG4gICAqXG4gICAqIOS7peS4iuS4ieS4quWIpOaWreWPr+iDveWtmOWcqOWGsueqge+8jOaJgOS7peWcqOatpOivtOaYjuadoeS7tuWIpOaWreeahOS8mOWFiOe6p+OAglxuICAgKi9cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgbGV0IGNoZWNrZWRWYWx1ZVxuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwpIHtcbiAgICAgIGNoZWNrZWRWYWx1ZSA9IHZhbHVlUHJvcFxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjaGVja2VkVmFsdWUgPSBkZWZhdWx0VmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrZWRWYWx1ZVxuICB9KVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdmFsdWVQcm9wKSB7XG4gICAgc2V0VmFsdWUodmFsdWVQcm9wKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSA9IChyYWRpb1ZhbHVlOiBUKSA9PiB7XG4gICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgc2V0VmFsdWUocmFkaW9WYWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShyYWRpb1ZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tZ3JvdXBgLCB7XG4gICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8R3JvdXBDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyBkaXNhYmxlZCwgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSwgc2l6ZSwgdmFsdWUgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IGRhdGEtdmFsdWU9e3ZhbHVlfSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvR3JvdXBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbkdyb3VwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufVxuXG5Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2hhbmdlOiBudWxsLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cFxuIl19