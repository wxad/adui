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

import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { GroupContext } from "./Context";
import "./style";
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

  var _useState = useState(function () {
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

  var classSet = classNames(className, "".concat(prefix, "-group"), _defineProperty({}, "".concat(prefix, "-disabled"), disabled));
  return React.createElement(GroupContext.Provider, {
    value: {
      disabled: disabled,
      handleGroupValueChange: handleGroupValueChange,
      size: size,
      value: value
    }
  }, React.createElement("div", _extends({
    className: classSet,
    "data-value": value
  }, otherProps), children));
}

Group.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  value: PropTypes.any
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
export default Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvR3JvdXAudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiR3JvdXBDb250ZXh0IiwicHJlZml4IiwiR3JvdXAiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJzaXplIiwidmFsdWVQcm9wIiwidmFsdWUiLCJvdGhlclByb3BzIiwiY2hlY2tlZFZhbHVlIiwic2V0VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJoYW5kbGVDaGFuZ2UiLCJ2YWwiLCJoYW5kbGVHcm91cFZhbHVlQ2hhbmdlIiwiY2hlY2tib3hWYWx1ZSIsInZhbHVlRHVwbGljYXRlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImFueSIsImJvb2wiLCJmdW5jIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixXQUE3QjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxlQUFmOztBQXNDQSxTQUFTQyxLQUFULE9BUzJCO0FBQUEsTUFSekJDLFFBUXlCLFFBUnpCQSxRQVF5QjtBQUFBLE1BUHpCQyxTQU95QixRQVB6QkEsU0FPeUI7QUFBQSxNQU56QkMsWUFNeUIsUUFOekJBLFlBTXlCO0FBQUEsTUFMekJDLFFBS3lCLFFBTHpCQSxRQUt5QjtBQUFBLE1BSnpCQyxRQUl5QixRQUp6QkEsUUFJeUI7QUFBQSxNQUh6QkMsSUFH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VCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQXhCVTtBQTRCaEJ0QixFQUFBQSxLQUFLLEVBQUVaLFNBQVMsQ0FBQytCO0FBNUJELENBQWxCO0FBK0JBM0IsS0FBSyxDQUFDK0IsWUFBTixHQUFxQjtBQUNuQjlCLEVBQUFBLFFBQVEsRUFBRSxFQURTO0FBRW5CQyxFQUFBQSxTQUFTLEVBQUU4QixTQUZRO0FBR25CN0IsRUFBQUEsWUFBWSxFQUFFLElBSEs7QUFJbkJDLEVBQUFBLFFBQVEsRUFBRSxLQUpTO0FBS25CQyxFQUFBQSxRQUFRLEVBQUUsSUFMUztBQU1uQkMsRUFBQUEsSUFBSSxFQUFFLE9BTmE7QUFPbkJFLEVBQUFBLEtBQUssRUFBRTtBQVBZLENBQXJCO0FBVUEsZUFBZVIsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IEdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGVja2JveFwiXG5cbnR5cGUgVmFsdWVUeXBlID0gUmVhY3QuUmVhY3RUZXh0XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94R3JvdXBQcm9wczxUIGV4dGVuZHMgVmFsdWVUeXBlID0gVmFsdWVUeXBlPiB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBudWxsIHwgQXJyYXk8VD5cbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiBudWxsIHwgKCh2YWx1ZTogQXJyYXk8VD4pID0+IHZvaWQpXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgQXJyYXk8VD5cbn1cblxuLyoqXG4gKiDli77pgInnu4RcbiAqL1xuZnVuY3Rpb24gR3JvdXA8VCBleHRlbmRzIFZhbHVlVHlwZSA9IFZhbHVlVHlwZT4oe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkZWZhdWx0VmFsdWUsXG4gIGRpc2FibGVkLFxuICBvbkNoYW5nZSxcbiAgc2l6ZSxcbiAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgLi4ub3RoZXJQcm9wc1xufTogSUNoZWNrYm94R3JvdXBQcm9wczxUPikge1xuICAvKipcbiAgICog5Yid5aeL5YyWIHZhbHVlIHN0YXRlXG4gICAqIDEuIOS8mOWFiOWIpOaWrSBQcm9wIHZhbHVl77yM5aaC5p6c5a2Y5ZyoIFByb3AgdmFsdWXvvIzliJkgR3JvdXAg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI77ybXG4gICAqIDIuIOWGjeWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBHcm91cCDnirbmgIHkuLrmraTpu5jorqTlgLzvvJtcbiAgICogMy4g5pyA5ZCO5Yik5patIENoZWNrYm94IGNoaWxkcmVuIOaYr+WQpuiHqui6q+WtmOWcqCBQcm9wIGNoZWNrZWTjgIJcbiAgICpcbiAgICog5Lul5LiK5LiJ5Liq5Yik5pat5Y+v6IO95a2Y5Zyo5Yay56qB77yM5omA5Lul5Zyo5q2k6K+05piO5p2h5Lu25Yik5pat55qE5LyY5YWI57qn44CCXG4gICAqL1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBsZXQgY2hlY2tlZFZhbHVlXG4gICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCkge1xuICAgICAgY2hlY2tlZFZhbHVlID0gdmFsdWVQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGNoZWNrZWRWYWx1ZSA9IGRlZmF1bHRWYWx1ZVxuICAgIH1cbiAgICByZXR1cm4gY2hlY2tlZFZhbHVlXG4gIH0pXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVByb3ApICYmIHZhbHVlICE9PSB2YWx1ZVByb3ApIHtcbiAgICBzZXRWYWx1ZSh2YWx1ZVByb3ApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsOiBBcnJheTxUPikgPT4ge1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UodmFsKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UgPSAoY2hlY2tib3hWYWx1ZTogVCkgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLyoqXG4gICAgICAgKiDkuI3opoHnm7TmjqXlnKggdmFsdWUg5LiK6L+b6KGM5pWw57uE5pON5L2c77yM6L+Z5qC35Lya5ZyoIHNldFN0YXRlIOS5i+WJjeWwseaUueWPmOS6hiB2YWx1ZSDnmoTlgLzjgIJcbiAgICAgICAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSDlsIbkvJogcmV0dXJuIGZhbHNlXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHZhbHVlRHVwbGljYXRlID0gWy4uLnZhbHVlXVxuICAgICAgY29uc3QgaW5kZXggPSB2YWx1ZUR1cGxpY2F0ZS5pbmRleE9mKGNoZWNrYm94VmFsdWUpXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHZhbHVlRHVwbGljYXRlLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlRHVwbGljYXRlLnB1c2goY2hlY2tib3hWYWx1ZSlcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmFsdWUodmFsdWVEdXBsaWNhdGUpXG4gICAgICB9XG4gICAgICBoYW5kbGVDaGFuZ2UodmFsdWVEdXBsaWNhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmFsdWUoW2NoZWNrYm94VmFsdWVdKVxuICAgICAgfVxuICAgICAgaGFuZGxlQ2hhbmdlKFtjaGVja2JveFZhbHVlXSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWdyb3VwYCwge1xuICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEdyb3VwQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgZGlzYWJsZWQsIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UsIHNpemUsIHZhbHVlIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSBkYXRhLXZhbHVlPXt2YWx1ZX0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L0dyb3VwQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOmAieS4reaAgeWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxufVxuXG5Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2hhbmdlOiBudWxsLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cFxuIl19