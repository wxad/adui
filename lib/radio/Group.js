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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmFkaW8vR3JvdXAudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkdyb3VwIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImNoZWNrZWRWYWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInJhZGlvVmFsdWUiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJib29sIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFlBQWY7O0FBdUNBLFNBQVNDLEtBQVQsT0FTd0I7QUFBQSxNQVJ0QkMsUUFRc0IsUUFSdEJBLFFBUXNCO0FBQUEsTUFQdEJDLFNBT3NCLFFBUHRCQSxTQU9zQjtBQUFBLE1BTnRCQyxZQU1zQixRQU50QkEsWUFNc0I7QUFBQSxNQUx0QkMsUUFLc0IsUUFMdEJBLFFBS3NCO0FBQUEsTUFKdEJDLFFBSXNCLFFBSnRCQSxRQUlzQjtBQUFBLE1BSHRCQyxJQUdzQixRQUh0QkEsSUFHc0I7QUFBQSxNQUZmQyxTQUVlLFFBRnRCQyxLQUVzQjtBQUFBLE1BRG5CQyxVQUNtQjs7QUFBQSxrQkFTSSxxQkFBUyxZQUFNO0FBQ3ZDLFFBQUlDLFlBQUo7O0FBQ0EsUUFBSUgsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCRyxNQUFBQSxZQUFZLEdBQUdILFNBQWY7QUFDRCxLQUZELE1BRU8sSUFBSUosWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ2hDTyxNQUFBQSxZQUFZLEdBQUdQLFlBQWY7QUFDRDs7QUFDRCxXQUFPTyxZQUFQO0FBQ0QsR0FSeUIsQ0FUSjtBQUFBO0FBQUEsTUFTZkYsS0FUZTtBQUFBLE1BU1JHLFFBVFE7O0FBb0J0QixNQUFJSixTQUFTLEtBQUssSUFBZCxJQUFzQkMsS0FBSyxLQUFLRCxTQUFwQyxFQUErQztBQUM3Q0ksSUFBQUEsUUFBUSxDQUFDSixTQUFELENBQVI7QUFDRDs7QUFFRCxNQUFNSyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLFVBQUQsRUFBbUI7QUFDaEQsUUFBSU4sU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCSSxNQUFBQSxRQUFRLENBQUNFLFVBQUQsQ0FBUjtBQUNEOztBQUNELFFBQUlSLFFBQUosRUFBYztBQUNaQSxNQUFBQSxRQUFRLENBQUNRLFVBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNQyxRQUFRLEdBQUcsNEJBQVdaLFNBQVgsWUFBeUJILE1BQXpCLDJDQUNYQSxNQURXLGdCQUNTSyxRQURULEVBQWpCO0FBSUEsU0FDRSxnQ0FBQyxxQkFBRCxDQUFjLFFBQWQ7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUFFQSxNQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWVEsTUFBQUEsc0JBQXNCLEVBQXRCQSxzQkFBWjtBQUFvQ04sTUFBQUEsSUFBSSxFQUFKQSxJQUFwQztBQUEwQ0UsTUFBQUEsS0FBSyxFQUFMQTtBQUExQztBQURULEtBR0U7QUFBSyxJQUFBLFNBQVMsRUFBRU0sUUFBaEI7QUFBMEIsa0JBQVlOO0FBQXRDLEtBQWlEQyxVQUFqRCxHQUNHUixRQURILENBSEYsQ0FERjtBQVNEOztBQUVERCxLQUFLLENBQUNlLFNBQU4sR0FBa0I7QUFJaEJkLEVBQUFBLFFBQVEsRUFBRWUsc0JBQVVDLElBSko7QUFRaEJmLEVBQUFBLFNBQVMsRUFBRWMsc0JBQVVFLE1BUkw7QUFZaEJmLEVBQUFBLFlBQVksRUFBRWEsc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSSxNQUE3QixDQUFwQixDQVpFO0FBZ0JoQmhCLEVBQUFBLFFBQVEsRUFBRVksc0JBQVVLLElBaEJKO0FBb0JoQmhCLEVBQUFBLFFBQVEsRUFBRVcsc0JBQVVNLElBcEJKO0FBd0JoQmhCLEVBQUFBLElBQUksRUFBRVUsc0JBQVVPLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQXhCVTtBQTRCaEJmLEVBQUFBLEtBQUssRUFBRVEsc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSSxNQUE3QixDQUFwQjtBQTVCUyxDQUFsQjtBQStCQXBCLEtBQUssQ0FBQ3dCLFlBQU4sR0FBcUI7QUFDbkJ2QixFQUFBQSxRQUFRLEVBQUUsSUFEUztBQUVuQkMsRUFBQUEsU0FBUyxFQUFFdUIsU0FGUTtBQUduQnRCLEVBQUFBLFlBQVksRUFBRSxJQUhLO0FBSW5CQyxFQUFBQSxRQUFRLEVBQUUsS0FKUztBQUtuQkMsRUFBQUEsUUFBUSxFQUFFLElBTFM7QUFNbkJDLEVBQUFBLElBQUksRUFBRSxPQU5hO0FBT25CRSxFQUFBQSxLQUFLLEVBQUU7QUFQWSxDQUFyQjtlQVVlUixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgR3JvdXBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXJhZGlvXCJcblxudHlwZSBWYWx1ZVR5cGUgPSBSZWFjdC5SZWFjdFRleHRcblxuZXhwb3J0IGludGVyZmFjZSBJUmFkaW9Hcm91cFByb3BzPFQgZXh0ZW5kcyBWYWx1ZVR5cGU+IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBudWxsIHwgVFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmAieS4reaAgeWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IG51bGwgfCAoKHZhbHVlOiBUKSA9PiB2b2lkKVxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IFRcbn1cblxuLyoqXG4gKiDljZXpgInnu4TvvIznlKjku6Xnu5/kuIDlnLDnrqHnkIblhoXpg6jljZXpgInnirbmgIHjgIJcbiAqL1xuZnVuY3Rpb24gR3JvdXA8VCBleHRlbmRzIFZhbHVlVHlwZT4oe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkZWZhdWx0VmFsdWUsXG4gIGRpc2FibGVkLFxuICBvbkNoYW5nZSxcbiAgc2l6ZSxcbiAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgLi4ub3RoZXJQcm9wc1xufTogSVJhZGlvR3JvdXBQcm9wczxUPikge1xuICAvKipcbiAgICog5Yid5aeL5YyWIHZhbHVlIHN0YXRlXG4gICAqIDEuIOS8mOWFiOWIpOaWrSBQcm9wIHZhbHVl77yM5aaC5p6c5a2Y5ZyoIFByb3AgdmFsdWXvvIzliJkgR3JvdXAg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI77ybXG4gICAqIDIuIOWGjeWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBHcm91cCDnirbmgIHkuLrmraTpu5jorqTlgLzvvJtcbiAgICogMy4g5pyA5ZCO5Yik5patIFJhZGlvIGNoaWxkcmVuIOaYr+WQpuiHqui6q+WtmOWcqCBQcm9wIGNoZWNrZWTjgIJcbiAgICpcbiAgICog5Lul5LiK5LiJ5Liq5Yik5pat5Y+v6IO95a2Y5Zyo5Yay56qB77yM5omA5Lul5Zyo5q2k6K+05piO5p2h5Lu25Yik5pat55qE5LyY5YWI57qn44CCXG4gICAqL1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBsZXQgY2hlY2tlZFZhbHVlXG4gICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgY2hlY2tlZFZhbHVlID0gdmFsdWVQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGNoZWNrZWRWYWx1ZSA9IGRlZmF1bHRWYWx1ZVxuICAgIH1cbiAgICByZXR1cm4gY2hlY2tlZFZhbHVlXG4gIH0pXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHZhbHVlICE9PSB2YWx1ZVByb3ApIHtcbiAgICBzZXRWYWx1ZSh2YWx1ZVByb3ApXG4gIH1cblxuICBjb25zdCBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlID0gKHJhZGlvVmFsdWU6IFQpID0+IHtcbiAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICBzZXRWYWx1ZShyYWRpb1ZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKHJhZGlvVmFsdWUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1ncm91cGAsIHtcbiAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxHcm91cENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGRpc2FibGVkLCBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlLCBzaXplLCB2YWx1ZSB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gZGF0YS12YWx1ZT17dmFsdWV9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9Hcm91cENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuR3JvdXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOm7mOiupOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOmAieS4reaAgeWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cbkdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25DaGFuZ2U6IG51bGwsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwXG4iXX0=