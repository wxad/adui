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

var prefix = "adui-channels-radio";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtcmFkaW8vR3JvdXAudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkdyb3VwIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImNoZWNrZWRWYWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInJhZGlvVmFsdWUiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJib29sIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxxQkFBZjs7QUF1Q0EsU0FBU0MsS0FBVCxPQVN3QjtBQUFBLE1BUnRCQyxRQVFzQixRQVJ0QkEsUUFRc0I7QUFBQSxNQVB0QkMsU0FPc0IsUUFQdEJBLFNBT3NCO0FBQUEsTUFOdEJDLFlBTXNCLFFBTnRCQSxZQU1zQjtBQUFBLE1BTHRCQyxRQUtzQixRQUx0QkEsUUFLc0I7QUFBQSxNQUp0QkMsUUFJc0IsUUFKdEJBLFFBSXNCO0FBQUEsTUFIdEJDLElBR3NCLFFBSHRCQSxJQUdzQjtBQUFBLE1BRmZDLFNBRWUsUUFGdEJDLEtBRXNCO0FBQUEsTUFEbkJDLFVBQ21COztBQUFBLGtCQVNJLHFCQUFTLFlBQU07QUFDdkMsUUFBSUMsWUFBSjs7QUFDQSxRQUFJSCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJHLE1BQUFBLFlBQVksR0FBR0gsU0FBZjtBQUNELEtBRkQsTUFFTyxJQUFJSixZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDaENPLE1BQUFBLFlBQVksR0FBR1AsWUFBZjtBQUNEOztBQUNELFdBQU9PLFlBQVA7QUFDRCxHQVJ5QixDQVRKO0FBQUE7QUFBQSxNQVNmRixLQVRlO0FBQUEsTUFTUkcsUUFUUTs7QUFvQnRCLE1BQUlKLFNBQVMsS0FBSyxJQUFkLElBQXNCQyxLQUFLLEtBQUtELFNBQXBDLEVBQStDO0FBQzdDSSxJQUFBQSxRQUFRLENBQUNKLFNBQUQsQ0FBUjtBQUNEOztBQUVELE1BQU1LLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsVUFBRCxFQUFtQjtBQUNoRCxRQUFJTixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJJLE1BQUFBLFFBQVEsQ0FBQ0UsVUFBRCxDQUFSO0FBQ0Q7O0FBQ0QsUUFBSVIsUUFBSixFQUFjO0FBQ1pBLE1BQUFBLFFBQVEsQ0FBQ1EsVUFBRCxDQUFSO0FBQ0Q7QUFDRixHQVBEOztBQVNBLE1BQU1DLFFBQVEsR0FBRyw0QkFBV1osU0FBWCxZQUF5QkgsTUFBekIsMkNBQ1hBLE1BRFcsZ0JBQ1NLLFFBRFQsRUFBakI7QUFJQSxTQUNFLGdDQUFDLHFCQUFELENBQWMsUUFBZDtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQUVBLE1BQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZUSxNQUFBQSxzQkFBc0IsRUFBdEJBLHNCQUFaO0FBQW9DTixNQUFBQSxJQUFJLEVBQUpBLElBQXBDO0FBQTBDRSxNQUFBQSxLQUFLLEVBQUxBO0FBQTFDO0FBRFQsS0FHRTtBQUFLLElBQUEsU0FBUyxFQUFFTSxRQUFoQjtBQUEwQixrQkFBWU47QUFBdEMsS0FBaURDLFVBQWpELEdBQ0dSLFFBREgsQ0FIRixDQURGO0FBU0Q7O0FBRURELEtBQUssQ0FBQ2UsU0FBTixHQUFrQjtBQUloQmQsRUFBQUEsUUFBUSxFQUFFZSxzQkFBVUMsSUFKSjtBQVFoQmYsRUFBQUEsU0FBUyxFQUFFYyxzQkFBVUUsTUFSTDtBQVloQmYsRUFBQUEsWUFBWSxFQUFFYSxzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVJLE1BQTdCLENBQXBCLENBWkU7QUFnQmhCaEIsRUFBQUEsUUFBUSxFQUFFWSxzQkFBVUssSUFoQko7QUFvQmhCaEIsRUFBQUEsUUFBUSxFQUFFVyxzQkFBVU0sSUFwQko7QUF3QmhCaEIsRUFBQUEsSUFBSSxFQUFFVSxzQkFBVU8sS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBeEJVO0FBNEJoQmYsRUFBQUEsS0FBSyxFQUFFUSxzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVJLE1BQTdCLENBQXBCO0FBNUJTLENBQWxCO0FBK0JBcEIsS0FBSyxDQUFDd0IsWUFBTixHQUFxQjtBQUNuQnZCLEVBQUFBLFFBQVEsRUFBRSxJQURTO0FBRW5CQyxFQUFBQSxTQUFTLEVBQUV1QixTQUZRO0FBR25CdEIsRUFBQUEsWUFBWSxFQUFFLElBSEs7QUFJbkJDLEVBQUFBLFFBQVEsRUFBRSxLQUpTO0FBS25CQyxFQUFBQSxRQUFRLEVBQUUsSUFMUztBQU1uQkMsRUFBQUEsSUFBSSxFQUFFLE9BTmE7QUFPbkJFLEVBQUFBLEtBQUssRUFBRTtBQVBZLENBQXJCO2VBVWVSLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBHcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtcmFkaW9cIlxuXG50eXBlIFZhbHVlVHlwZSA9IFJlYWN0LlJlYWN0VGV4dFxuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb0dyb3VwUHJvcHM8VCBleHRlbmRzIFZhbHVlVHlwZSA9IFZhbHVlVHlwZT4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpu5jorqTlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IG51bGwgfCBUXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogbnVsbCB8ICgodmFsdWU6IFQpID0+IHZvaWQpXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgVFxufVxuXG4vKipcbiAqIOWNlemAiee7hO+8jOeUqOS7pee7n+S4gOWcsOeuoeeQhuWGhemDqOWNlemAieeKtuaAgeOAglxuICovXG5mdW5jdGlvbiBHcm91cDxUIGV4dGVuZHMgVmFsdWVUeXBlID0gVmFsdWVUeXBlPih7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIG9uQ2hhbmdlLFxuICBzaXplLFxuICB2YWx1ZTogdmFsdWVQcm9wLFxuICAuLi5vdGhlclByb3BzXG59OiBJUmFkaW9Hcm91cFByb3BzPFQ+KSB7XG4gIC8qKlxuICAgKiDliJ3lp4vljJYgdmFsdWUgc3RhdGVcbiAgICogMS4g5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBHcm91cCDlrozlhajkuqTnlLHlpJbpg6jmjqfliLbvvIzlhoXpg6jnirbmgIHml6DmlYjvvJtcbiAgICogMi4g5YaN5Yik5patIFByb3AgZGVmYXVsdFZhbHVl77yM5aaC5p6c5a2Y5Zyo6buY6K6k5YC877yM5YiZIEdyb3VwIOeKtuaAgeS4uuatpOm7mOiupOWAvO+8m1xuICAgKiAzLiDmnIDlkI7liKTmlq0gUmFkaW8gY2hpbGRyZW4g5piv5ZCm6Ieq6Lqr5a2Y5ZyoIFByb3AgY2hlY2tlZOOAglxuICAgKlxuICAgKiDku6XkuIrkuInkuKrliKTmlq3lj6/og73lrZjlnKjlhrLnqoHvvIzmiYDku6XlnKjmraTor7TmmI7mnaHku7bliKTmlq3nmoTkvJjlhYjnuqfjgIJcbiAgICovXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGxldCBjaGVja2VkVmFsdWVcbiAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICBjaGVja2VkVmFsdWUgPSB2YWx1ZVByb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgY2hlY2tlZFZhbHVlID0gZGVmYXVsdFZhbHVlXG4gICAgfVxuICAgIHJldHVybiBjaGVja2VkVmFsdWVcbiAgfSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWUgIT09IHZhbHVlUHJvcCkge1xuICAgIHNldFZhbHVlKHZhbHVlUHJvcClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UgPSAocmFkaW9WYWx1ZTogVCkgPT4ge1xuICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgIHNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UocmFkaW9WYWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWdyb3VwYCwge1xuICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEdyb3VwQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgZGlzYWJsZWQsIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UsIHNpemUsIHZhbHVlIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSBkYXRhLXZhbHVlPXt2YWx1ZX0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L0dyb3VwQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn1cblxuR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvbkNoYW5nZTogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBcbiJdfQ==