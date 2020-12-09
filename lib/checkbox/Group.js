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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-checkbox";

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

  if (Array.isArray(valueProp) && value !== valueProp) {
    setValue(valueProp);
  }

  var handleChange = function handleChange(val) {
    if (onChange) {
      onChange(val);
    }
  };

  var handleGroupValueChange = function handleGroupValueChange(checkboxValue) {
    if (value) {
      var valueDuplicate = _toConsumableArray(value);

      var index = valueDuplicate.indexOf(checkboxValue);

      if (index !== -1) {
        valueDuplicate.splice(index, 1);
      } else {
        valueDuplicate.push(checkboxValue);
      }

      if (valueProp === null) {
        setValue(valueDuplicate);
      }

      handleChange(valueDuplicate);
    } else {
      if (valueProp === null) {
        setValue([checkboxValue]);
      }

      handleChange([checkboxValue]);
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
  defaultValue: _propTypes["default"].any,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  value: _propTypes["default"].any
};
Group.defaultProps = {
  children: "",
  className: undefined,
  defaultValue: null,
  disabled: false,
  onChange: null,
  size: "small",
  value: null
};
var _default = Group;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvR3JvdXAudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkdyb3VwIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImNoZWNrZWRWYWx1ZSIsInNldFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsImNoZWNrYm94VmFsdWUiLCJ2YWx1ZUR1cGxpY2F0ZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJhbnkiLCJib29sIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGVBQWY7O0FBc0NBLFNBQVNDLEtBQVQsT0FTMkI7QUFBQSxNQVJ6QkMsUUFReUIsUUFSekJBLFFBUXlCO0FBQUEsTUFQekJDLFNBT3lCLFFBUHpCQSxTQU95QjtBQUFBLE1BTnpCQyxZQU15QixRQU56QkEsWUFNeUI7QUFBQSxNQUx6QkMsUUFLeUIsUUFMekJBLFFBS3lCO0FBQUEsTUFKekJDLFFBSXlCLFFBSnpCQSxRQUl5QjtBQUFBLE1BSHpCQyxJQUd5QixRQUh6QkEsSUFHeUI7QUFBQSxNQUZsQkMsU0FFa0IsUUFGekJDLEtBRXlCO0FBQUEsTUFEdEJDLFVBQ3NCOztBQUFBLGtCQVNDLHFCQUFTLFlBQU07QUFDdkMsUUFBSUMsWUFBSjs7QUFDQSxRQUFJSCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFD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QUduQjlCLEVBQUFBLFlBQVksRUFBRSxJQUhLO0FBSW5CQyxFQUFBQSxRQUFRLEVBQUUsS0FKUztBQUtuQkMsRUFBQUEsUUFBUSxFQUFFLElBTFM7QUFNbkJDLEVBQUFBLElBQUksRUFBRSxPQU5hO0FBT25CRSxFQUFBQSxLQUFLLEVBQUU7QUFQWSxDQUFyQjtlQVVlUixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgR3JvdXBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoZWNrYm94XCJcblxudHlwZSBWYWx1ZVR5cGUgPSBSZWFjdC5SZWFjdFRleHRcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hHcm91cFByb3BzPFQgZXh0ZW5kcyBWYWx1ZVR5cGU+IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpu5jorqTlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IG51bGwgfCBBcnJheTxUPlxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmAieS4reaAgeWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IG51bGwgfCAoKHZhbHVlOiBBcnJheTxUPikgPT4gdm9pZClcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICB2YWx1ZT86IG51bGwgfCBBcnJheTxUPlxufVxuXG4vKipcbiAqIOWLvumAiee7hFxuICovXG5mdW5jdGlvbiBHcm91cDxUIGV4dGVuZHMgVmFsdWVUeXBlPih7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIG9uQ2hhbmdlLFxuICBzaXplLFxuICB2YWx1ZTogdmFsdWVQcm9wLFxuICAuLi5vdGhlclByb3BzXG59OiBJQ2hlY2tib3hHcm91cFByb3BzPFQ+KSB7XG4gIC8qKlxuICAgKiDliJ3lp4vljJYgdmFsdWUgc3RhdGVcbiAgICogMS4g5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBHcm91cCDlrozlhajkuqTnlLHlpJbpg6jmjqfliLbvvIzlhoXpg6jnirbmgIHml6DmlYjvvJtcbiAgICogMi4g5YaN5Yik5patIFByb3AgZGVmYXVsdFZhbHVl77yM5aaC5p6c5a2Y5Zyo6buY6K6k5YC877yM5YiZIEdyb3VwIOeKtuaAgeS4uuatpOm7mOiupOWAvO+8m1xuICAgKiAzLiDmnIDlkI7liKTmlq0gQ2hlY2tib3ggY2hpbGRyZW4g5piv5ZCm6Ieq6Lqr5a2Y5ZyoIFByb3AgY2hlY2tlZOOAglxuICAgKlxuICAgKiDku6XkuIrkuInkuKrliKTmlq3lj6/og73lrZjlnKjlhrLnqoHvvIzmiYDku6XlnKjmraTor7TmmI7mnaHku7bliKTmlq3nmoTkvJjlhYjnuqfjgIJcbiAgICovXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGxldCBjaGVja2VkVmFsdWVcbiAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICBjaGVja2VkVmFsdWUgPSB2YWx1ZVByb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgY2hlY2tlZFZhbHVlID0gZGVmYXVsdFZhbHVlXG4gICAgfVxuICAgIHJldHVybiBjaGVja2VkVmFsdWVcbiAgfSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlUHJvcCkgJiYgdmFsdWUgIT09IHZhbHVlUHJvcCkge1xuICAgIHNldFZhbHVlKHZhbHVlUHJvcClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWw6IEFycmF5PFQ+KSA9PiB7XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZSh2YWwpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSA9IChjaGVja2JveFZhbHVlOiBUKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvKipcbiAgICAgICAqIOS4jeimgeebtOaOpeWcqCB2YWx1ZSDkuIrov5vooYzmlbDnu4Tmk43kvZzvvIzov5nmoLfkvJrlnKggc2V0U3RhdGUg5LmL5YmN5bCx5pS55Y+Y5LqGIHZhbHVlIOeahOWAvOOAglxuICAgICAgICogc2hvdWxkQ29tcG9uZW50VXBkYXRlIOWwhuS8miByZXR1cm4gZmFsc2VcbiAgICAgICAqL1xuICAgICAgY29uc3QgdmFsdWVEdXBsaWNhdGUgPSBbLi4udmFsdWVdXG4gICAgICBjb25zdCBpbmRleCA9IHZhbHVlRHVwbGljYXRlLmluZGV4T2YoY2hlY2tib3hWYWx1ZSlcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWVEdXBsaWNhdGUuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVEdXBsaWNhdGUucHVzaChjaGVja2JveFZhbHVlKVxuICAgICAgfVxuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWYWx1ZSh2YWx1ZUR1cGxpY2F0ZSlcbiAgICAgIH1cbiAgICAgIGhhbmRsZUNoYW5nZSh2YWx1ZUR1cGxpY2F0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWYWx1ZShbY2hlY2tib3hWYWx1ZV0pXG4gICAgICB9XG4gICAgICBoYW5kbGVDaGFuZ2UoW2NoZWNrYm94VmFsdWVdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tZ3JvdXBgLCB7XG4gICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8R3JvdXBDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyBkaXNhYmxlZCwgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSwgc2l6ZSwgdmFsdWUgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IGRhdGEtdmFsdWU9e3ZhbHVlfSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvR3JvdXBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbkdyb3VwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG59XG5cbkdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25DaGFuZ2U6IG51bGwsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwXG4iXX0=