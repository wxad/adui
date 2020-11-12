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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvR3JvdXAudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkdyb3VwIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImNoZWNrZWRWYWx1ZSIsInNldFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFuZGxlQ2hhbmdlIiwidmFsIiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsImNoZWNrYm94VmFsdWUiLCJ2YWx1ZUR1cGxpY2F0ZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJhbnkiLCJib29sIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsZUFBZjs7QUFzQ0EsU0FBU0MsS0FBVCxPQVMyQjtBQUFBLE1BUnpCQyxRQVF5QixRQVJ6QkEsUUFReUI7QUFBQSxNQVB6QkMsU0FPeUIsUUFQekJBLFNBT3lCO0FBQUEsTUFOekJDLFlBTXlCLFFBTnpCQSxZQU15QjtBQUFBLE1BTHpCQyxRQUt5QixRQUx6QkEsUUFLeUI7QUFBQSxNQUp6QkMsUUFJeUIsUUFKekJBLFFBSXlCO0FBQUEsTUFIekJDLElBR3lCLFFBSHpCQSxJQUd5QjtBQUFBLE1BRmxCQyxTQUVrQixRQUZ6QkMsS0FFeUI7QUFBQSxNQUR0QkMsVUFDc0I7O0FBQUEsa0JBU0MscUJBQVMsWUFBTTtBQUN2QyxRQUFJQyxZQUFKOztBQUNBLFFBQUlILFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0Qkcs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OUIsRUFBQUEsWUFBWSxFQUFFLElBSEs7QUFJbkJDLEVBQUFBLFFBQVEsRUFBRSxLQUpTO0FBS25CQyxFQUFBQSxRQUFRLEVBQUUsSUFMUztBQU1uQkMsRUFBQUEsSUFBSSxFQUFFLE9BTmE7QUFPbkJFLEVBQUFBLEtBQUssRUFBRTtBQVBZLENBQXJCO2VBVWVSLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBHcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hlY2tib3hcIlxuXG50eXBlIFZhbHVlVHlwZSA9IFJlYWN0LlJlYWN0VGV4dFxuXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveEdyb3VwUHJvcHM8VCBleHRlbmRzIFZhbHVlVHlwZT4ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogbnVsbCB8IEFycmF5PFQ+XG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogbnVsbCB8ICgodmFsdWU6IEFycmF5PFQ+KSA9PiB2b2lkKVxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IEFycmF5PFQ+XG59XG5cbi8qKlxuICog5Yu+6YCJ57uEXG4gKi9cbmZ1bmN0aW9uIEdyb3VwPFQgZXh0ZW5kcyBWYWx1ZVR5cGU+KHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZGVmYXVsdFZhbHVlLFxuICBkaXNhYmxlZCxcbiAgb25DaGFuZ2UsXG4gIHNpemUsXG4gIHZhbHVlOiB2YWx1ZVByb3AsXG4gIC4uLm90aGVyUHJvcHNcbn06IElDaGVja2JveEdyb3VwUHJvcHM8VD4pIHtcbiAgLyoqXG4gICAqIOWIneWni+WMliB2YWx1ZSBzdGF0ZVxuICAgKiAxLiDkvJjlhYjliKTmlq0gUHJvcCB2YWx1Ze+8jOWmguaenOWtmOWcqCBQcm9wIHZhbHVl77yM5YiZIEdyb3VwIOWujOWFqOS6pOeUseWklumDqOaOp+WItu+8jOWGhemDqOeKtuaAgeaXoOaViO+8m1xuICAgKiAyLiDlho3liKTmlq0gUHJvcCBkZWZhdWx0VmFsdWXvvIzlpoLmnpzlrZjlnKjpu5jorqTlgLzvvIzliJkgR3JvdXAg54q25oCB5Li65q2k6buY6K6k5YC877ybXG4gICAqIDMuIOacgOWQjuWIpOaWrSBDaGVja2JveCBjaGlsZHJlbiDmmK/lkKboh6rouqvlrZjlnKggUHJvcCBjaGVja2Vk44CCXG4gICAqXG4gICAqIOS7peS4iuS4ieS4quWIpOaWreWPr+iDveWtmOWcqOWGsueqge+8jOaJgOS7peWcqOatpOivtOaYjuadoeS7tuWIpOaWreeahOS8mOWFiOe6p+OAglxuICAgKi9cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgbGV0IGNoZWNrZWRWYWx1ZVxuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwpIHtcbiAgICAgIGNoZWNrZWRWYWx1ZSA9IHZhbHVlUHJvcFxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjaGVja2VkVmFsdWUgPSBkZWZhdWx0VmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrZWRWYWx1ZVxuICB9KVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVQcm9wKSAmJiB2YWx1ZSAhPT0gdmFsdWVQcm9wKSB7XG4gICAgc2V0VmFsdWUodmFsdWVQcm9wKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbDogQXJyYXk8VD4pID0+IHtcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKHZhbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlID0gKGNoZWNrYm94VmFsdWU6IFQpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8qKlxuICAgICAgICog5LiN6KaB55u05o6l5ZyoIHZhbHVlIOS4iui/m+ihjOaVsOe7hOaTjeS9nO+8jOi/meagt+S8muWcqCBzZXRTdGF0ZSDkuYvliY3lsLHmlLnlj5jkuoYgdmFsdWUg55qE5YC844CCXG4gICAgICAgKiBzaG91bGRDb21wb25lbnRVcGRhdGUg5bCG5LyaIHJldHVybiBmYWxzZVxuICAgICAgICovXG4gICAgICBjb25zdCB2YWx1ZUR1cGxpY2F0ZSA9IFsuLi52YWx1ZV1cbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsdWVEdXBsaWNhdGUuaW5kZXhPZihjaGVja2JveFZhbHVlKVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB2YWx1ZUR1cGxpY2F0ZS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZUR1cGxpY2F0ZS5wdXNoKGNoZWNrYm94VmFsdWUpXG4gICAgICB9XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZhbHVlKHZhbHVlRHVwbGljYXRlKVxuICAgICAgfVxuICAgICAgaGFuZGxlQ2hhbmdlKHZhbHVlRHVwbGljYXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZhbHVlKFtjaGVja2JveFZhbHVlXSlcbiAgICAgIH1cbiAgICAgIGhhbmRsZUNoYW5nZShbY2hlY2tib3hWYWx1ZV0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1ncm91cGAsIHtcbiAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxHcm91cENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGRpc2FibGVkLCBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlLCBzaXplLCB2YWx1ZSB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gZGF0YS12YWx1ZT17dmFsdWV9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9Hcm91cENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuR3JvdXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOm7mOiupOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbn1cblxuR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogXCJcIixcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvbkNoYW5nZTogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBcbiJdfQ==