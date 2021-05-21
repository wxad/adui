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

import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { GroupContext } from "./Context";
import "./style";
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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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
export default Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtcmFkaW8vR3JvdXAudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiR3JvdXBDb250ZXh0IiwicHJlZml4IiwiR3JvdXAiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJzaXplIiwidmFsdWVQcm9wIiwidmFsdWUiLCJvdGhlclByb3BzIiwiY2hlY2tlZFZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVHcm91cFZhbHVlQ2hhbmdlIiwicmFkaW9WYWx1ZSIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImJvb2wiLCJmdW5jIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsUUFBZ0MsT0FBaEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsV0FBN0I7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcscUJBQWY7O0FBdUNBLFNBQVNDLEtBQVQsT0FTd0I7QUFBQSxNQVJ0QkMsUUFRc0IsUUFSdEJBLFFBUXNCO0FBQUEsTUFQdEJDLFNBT3NCLFFBUHRCQSxTQU9zQjtBQUFBLE1BTnRCQyxZQU1zQixRQU50QkEsWUFNc0I7QUFBQSxNQUx0QkMsUUFLc0IsUUFMdEJBLFFBS3NCO0FBQUEsTUFKdEJDLFFBSXNCLFFBSnRCQSxRQUlzQjtBQUFBLE1BSHRCQyxJQUdzQixRQUh0QkEsSUFHc0I7QUFBQSxNQUZmQyxTQUVlLFFBRnRCQyxLQUVzQjtBQUFBLE1BRG5CQyxVQUNtQjs7QUFBQSxrQkFTSWQsUUFBUSxDQUFDLFlBQU07QUFDdkMsUUFBSWUsWUFBSjs7QUFDQSxRQUFJSCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJHLE1BQUFBLFlBQVksR0FBR0gsU0FBZjtBQUNELEtBRkQsTUFFTyxJQUFJSixZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDaENPLE1BQUFBLFlBQVksR0FBR1AsWUFBZjtBQUNEOztBQUNELFdBQU9PLFlBQVA7QUFDRCxHQVJpQyxDQVRaO0FBQUE7QUFBQSxNQVNmRixLQVRlO0FBQUEsTUFTUkcsUUFUUTs7QUFvQnRCLE1BQUlKLFNBQVMsS0FBSyxJQUFkLElBQXNCQyxLQUFLLEtBQUtELFNBQXBDLEVBQStDO0FBQzdDSSxJQUFBQSxRQUFRLENBQUNKLFNBQUQsQ0FBUjtBQUNEOztBQUVELE1BQU1LLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsVUFBRCxFQUFtQjtBQUNoRCxRQUFJTixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJJLE1BQUFBLFFBQVEsQ0FBQ0UsVUFBRCxDQUFSO0FBQ0Q7O0FBQ0QsUUFBSVIsUUFBSixFQUFjO0FBQ1pBLE1BQUFBLFFBQVEsQ0FBQ1EsVUFBRCxDQUFSO0FBQ0Q7QUFDRixHQVBEOztBQVNBLE1BQU1DLFFBQVEsR0FBR2pCLFVBQVUsQ0FBQ0ssU0FBRCxZQUFlSCxNQUFmLDJDQUNyQkEsTUFEcUIsZ0JBQ0RLLFFBREMsRUFBM0I7QUFJQSxTQUNFLG9CQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQ0UsSUFBQSxLQUFLLEVBQUU7QUFBRUEsTUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlRLE1BQUFBLHNCQUFzQixFQUF0QkEsc0JBQVo7QUFBb0NOLE1BQUFBLElBQUksRUFBSkEsSUFBcEM7QUFBMENFLE1BQUFBLEtBQUssRUFBTEE7QUFBMUM7QUFEVCxLQUdFO0FBQUssSUFBQSxTQUFTLEVBQUVNLFFBQWhCO0FBQTBCLGtCQUFZTjtBQUF0QyxLQUFpREMsVUFBakQsR0FDR1IsUUFESCxDQUhGLENBREY7QUFTRDs7QUFFREQsS0FBSyxDQUFDZSxTQUFOLEdBQWtCO0FBSWhCZCxFQUFBQSxRQUFRLEVBQUVMLFNBQVMsQ0FBQ29CLElBSko7QUFRaEJkLEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDcUIsTUFSTDtBQVloQmQsRUFBQUEsWUFBWSxFQUFFUCxTQUFTLENBQUNzQixTQUFWLENBQW9CLENBQUN0QixTQUFTLENBQUNxQixNQUFYLEVBQW1CckIsU0FBUyxDQUFDdUIsTUFBN0IsQ0FBcEIsQ0FaRTtBQWdCaEJmLEVBQUFBLFFBQVEsRUFBRVIsU0FBUyxDQUFDd0IsSUFoQko7QUFvQmhCZixFQUFBQSxRQUFRLEVBQUVULFNBQVMsQ0FBQ3lCLElBcEJKO0FBd0JoQmYsRUFBQUEsSUFBSSxFQUFFVixTQUFTLENBQUMwQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0F4QlU7QUE0QmhCZCxFQUFBQSxLQUFLLEVBQUVaLFNBQVMsQ0FBQ3NCLFNBQVYsQ0FBb0IsQ0FBQ3RCLFNBQVMsQ0FBQ3FCLE1BQVgsRUFBbUJyQixTQUFTLENBQUN1QixNQUE3QixDQUFwQjtBQTVCUyxDQUFsQjtBQStCQW5CLEtBQUssQ0FBQ3VCLFlBQU4sR0FBcUI7QUFDbkJ0QixFQUFBQSxRQUFRLEVBQUUsSUFEUztBQUVuQkMsRUFBQUEsU0FBUyxFQUFFc0IsU0FGUTtBQUduQnJCLEVBQUFBLFlBQVksRUFBRSxJQUhLO0FBSW5CQyxFQUFBQSxRQUFRLEVBQUUsS0FKUztBQUtuQkMsRUFBQUEsUUFBUSxFQUFFLElBTFM7QUFNbkJDLEVBQUFBLElBQUksRUFBRSxPQU5hO0FBT25CRSxFQUFBQSxLQUFLLEVBQUU7QUFQWSxDQUFyQjtBQVVBLGVBQWVSLEtBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBHcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtcmFkaW9cIlxuXG50eXBlIFZhbHVlVHlwZSA9IFJlYWN0LlJlYWN0VGV4dFxuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb0dyb3VwUHJvcHM8VCBleHRlbmRzIFZhbHVlVHlwZSA9IFZhbHVlVHlwZT4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpu5jorqTlt7LpgInkuK3nmoTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IG51bGwgfCBUXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogbnVsbCB8ICgodmFsdWU6IFQpID0+IHZvaWQpXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgVFxufVxuXG4vKipcbiAqIOWNlemAiee7hO+8jOeUqOS7pee7n+S4gOWcsOeuoeeQhuWGhemDqOWNlemAieeKtuaAgeOAglxuICovXG5mdW5jdGlvbiBHcm91cDxUIGV4dGVuZHMgVmFsdWVUeXBlID0gVmFsdWVUeXBlPih7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIG9uQ2hhbmdlLFxuICBzaXplLFxuICB2YWx1ZTogdmFsdWVQcm9wLFxuICAuLi5vdGhlclByb3BzXG59OiBJUmFkaW9Hcm91cFByb3BzPFQ+KSB7XG4gIC8qKlxuICAgKiDliJ3lp4vljJYgdmFsdWUgc3RhdGVcbiAgICogMS4g5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBHcm91cCDlrozlhajkuqTnlLHlpJbpg6jmjqfliLbvvIzlhoXpg6jnirbmgIHml6DmlYjvvJtcbiAgICogMi4g5YaN5Yik5patIFByb3AgZGVmYXVsdFZhbHVl77yM5aaC5p6c5a2Y5Zyo6buY6K6k5YC877yM5YiZIEdyb3VwIOeKtuaAgeS4uuatpOm7mOiupOWAvO+8m1xuICAgKiAzLiDmnIDlkI7liKTmlq0gUmFkaW8gY2hpbGRyZW4g5piv5ZCm6Ieq6Lqr5a2Y5ZyoIFByb3AgY2hlY2tlZOOAglxuICAgKlxuICAgKiDku6XkuIrkuInkuKrliKTmlq3lj6/og73lrZjlnKjlhrLnqoHvvIzmiYDku6XlnKjmraTor7TmmI7mnaHku7bliKTmlq3nmoTkvJjlhYjnuqfjgIJcbiAgICovXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGxldCBjaGVja2VkVmFsdWVcbiAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsKSB7XG4gICAgICBjaGVja2VkVmFsdWUgPSB2YWx1ZVByb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgY2hlY2tlZFZhbHVlID0gZGVmYXVsdFZhbHVlXG4gICAgfVxuICAgIHJldHVybiBjaGVja2VkVmFsdWVcbiAgfSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWUgIT09IHZhbHVlUHJvcCkge1xuICAgIHNldFZhbHVlKHZhbHVlUHJvcClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UgPSAocmFkaW9WYWx1ZTogVCkgPT4ge1xuICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgIHNldFZhbHVlKHJhZGlvVmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UocmFkaW9WYWx1ZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWdyb3VwYCwge1xuICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEdyb3VwQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgZGlzYWJsZWQsIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UsIHNpemUsIHZhbHVlIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSBkYXRhLXZhbHVlPXt2YWx1ZX0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L0dyb3VwQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k5bey6YCJ5Lit55qE5YC8XG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOW3sumAieS4reeahOWAvFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn1cblxuR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvbkNoYW5nZTogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBcbiJdfQ==