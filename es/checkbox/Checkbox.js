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

import React, { forwardRef, useContext, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { GroupContext } from "./Context";
import Group from "./Group";
import Icon from "../icon";
import Popover from "../popover";
import { ConfigContext, getComputedSize } from "../config-provider";
import "./style";
var prefix = "adui-checkbox";
var Checkbox = forwardRef(function (_ref, ref) {
  var _classNames;

  var checkedProp = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      helper = _ref.helper,
      helperIcon = _ref.helperIcon,
      helperProps = _ref.helperProps,
      indeterminate = _ref.indeterminate,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      sizeProp = _ref.size,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["checked", "children", "className", "disabled", "helper", "helperIcon", "helperProps", "indeterminate", "onChange", "onClick", "size", "value"]);

  var _useState = useState(!!checkedProp),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useContext = useContext(GroupContext),
      disabledContext = _useContext.disabled,
      handleGroupValueChange = _useContext.handleGroupValueChange,
      sizeContext = _useContext.size,
      valueContext = _useContext.value;

  var _useContext2 = useContext(ConfigContext),
      sizeConfig = _useContext2.size;

  if (checkedProp !== null && checked !== !!checkedProp) {
    setChecked(!!checkedProp);
  }

  var size = getComputedSize(sizeProp, sizeContext, sizeConfig);
  var valueComputed = value !== null ? value : children === null || children === void 0 ? void 0 : children.toString();
  var classSet = classNames(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-checked"), indeterminate || (valueContext ? valueComputed && valueContext.includes(valueComputed) : checked)), _defineProperty(_classNames, "".concat(prefix, "-noChildren"), !children), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabledContext || disabled), _classNames));
  var popover = helper ? React.createElement(Popover, _extends({
    alignEdge: false,
    popup: helper
  }, helperProps), React.createElement(Icon, {
    icon: helperIcon || "help-circle",
    color: "var(--gray-600)",
    interactive: true,
    className: "".concat(prefix, "-helper")
  })) : null;

  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick(e);
    }

    if (disabled || disabledContext) {
      return;
    }

    if (handleGroupValueChange && valueComputed) {
      handleGroupValueChange(valueComputed);
    } else {
      if (checkedProp === null) {
        setChecked(!checked);
      }

      if (onChange) {
        onChange(!checked);
      }
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleClick(e);
    }
  };

  return React.createElement("label", _extends({
    "aria-checked": checked,
    className: classSet,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    ref: ref,
    role: "checkbox"
  }, otherProps), React.createElement("span", {
    className: "".concat(prefix, "-indicator")
  }, indeterminate ? React.createElement("svg", {
    width: "12",
    height: "10"
  }, React.createElement("rect", {
    x: "1",
    y: "4",
    width: "10",
    height: "2",
    rx: ".5",
    fill: "#fff",
    fillRule: "evenodd"
  })) : React.createElement("svg", {
    width: "12",
    height: "10"
  }, React.createElement("path", {
    d: "M.618 5.827a.463.463 0 0 1-.02-.675l.804-.804a.52.52 0 0 1 .716-.01L4.75 6.75l4.922-5.625a.513.513 0 0 1 .707-.06l.742.62a.478.478 0 0 1 .044.687l-6.08 6.756a.506.506 0 0 1-.703.045L.618 5.827z",
    fillRule: "evenodd"
  }))), !!children && React.createElement("span", null, children), popover);
});
Checkbox.Group = Group;
Checkbox.propTypes = {
  checked: PropTypes.oneOf([null, true, false]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  helper: PropTypes.node,
  helperIcon: PropTypes.any,
  helperProps: PropTypes.object,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Checkbox.defaultProps = {
  checked: null,
  children: "",
  className: undefined,
  disabled: false,
  helper: null,
  helperIcon: "help-circle",
  helperProps: {},
  indeterminate: false,
  onChange: null,
  onClick: null,
  size: "small",
  value: null
};
export default Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvQ2hlY2tib3gudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJHcm91cENvbnRleHQiLCJHcm91cCIsIkljb24iLCJQb3BvdmVyIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsInByZWZpeCIsIkNoZWNrYm94IiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsImluZGV0ZXJtaW5hdGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJzZXRDaGVja2VkIiwiZGlzYWJsZWRDb250ZXh0IiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInNpemVDb250ZXh0IiwidmFsdWVDb250ZXh0Iiwic2l6ZUNvbmZpZyIsInZhbHVlQ29tcHV0ZWQiLCJ0b1N0cmluZyIsImNsYXNzU2V0IiwiaW5jbHVkZXMiLCJwb3BvdmVyIiwiaGFuZGxlQ2xpY2siLCJlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJwcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsVUFBNUIsRUFBd0NDLFFBQXhDLFFBQXdELE9BQXhEO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxTQUFTQyxZQUFU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RUFBQUEsS0FBSyxFQUFFeEIsU0FBUyxDQUFDaUQsU0FBVixDQUFvQixDQUFDakQsU0FBUyxDQUFDNEMsTUFBWCxFQUFtQjVDLFNBQVMsQ0FBQ2tELE1BQTdCLENBQXBCO0FBaERZLENBQXJCO0FBbURBekMsUUFBUSxDQUFDMEMsWUFBVCxHQUF3QjtBQUN0QnZDLEVBQUFBLE9BQU8sRUFBRSxJQURhO0FBRXRCQyxFQUFBQSxRQUFRLEVBQUUsRUFGWTtBQUd0QkMsRUFBQUEsU0FBUyxFQUFFc0MsU0FIVztBQUl0QnJDLEVBQUFBLFFBQVEsRUFBRSxLQUpZO0FBS3RCQyxFQUFBQSxNQUFNLEVBQUUsSUFMYztBQU10QkMsRUFBQUEsVUFBVSxFQUFFLGFBTlU7QUFPdEJDLEVBQUFBLFdBQVcsRUFBRSxFQVBTO0FBUXRCQyxFQUFBQSxhQUFhLEVBQUUsS0FSTztBQVN0QkMsRUFBQUEsUUFBUSxFQUFFLElBVFk7QUFVdEJDLEVBQUFBLE9BQU8sRUFBRSxJQVZhO0FBV3RCRSxFQUFBQSxJQUFJLEVBQUUsT0FYZ0I7QUFZdEJDLEVBQUFBLEtBQUssRUFBRTtBQVplLENBQXhCO0FBZUEsZUFBZWYsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtdG8taW50ZXJhY3RpdmUtcm9sZSAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgR3JvdXBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGVja2JveFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZD86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWKoOWFpemXruWPt+awlOazoeaPkOekuuWGheWuuVxuICAgKi9cbiAgaGVscGVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpl67lj7fmsJTms6HnmoQgSWNvblxuICAgKi9cbiAgaGVscGVySWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog6Zeu5Y+35rCU5rOh5o+Q56S655qEIHByb3Bz77yM5Lya5bCG5q2k5a+56LGh6YO95Lyg6YCS57uZIDxQb3BvdmVyIC8+XG4gICAqL1xuICBoZWxwZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOiuvue9riBpbmRldGVybWluYXRlIOeKtuaAge+8jOi0n+i0o+S4lOS7heS7hei0n+i0o+agt+W8j+aOp+WItu+8jOivt+WcqOWunueOsOWFqOmAieaViOaenOaXtuS9v+eUqFxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmAieS4reaAgeWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICgoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljaz86XG4gICAgfCAoKFxuICAgICAgICBlOlxuICAgICAgICAgIHwgUmVhY3QuTW91c2VFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICAgICAgIHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICAgKSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlgLzvvIzlj6rlnKjkvb/nlKggQ2hlY2tib3guR3JvdXAg5pe25Lya6K+75Y+W5L2/55SoXG4gICAqL1xuICB2YWx1ZT86IG51bGwgfCBSZWFjdC5SZWFjdFRleHRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tib3hcbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElDaGVja2JveFByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxIVE1MTGFiZWxFbGVtZW50PlxuICA+IHtcbiAgR3JvdXA6IHR5cGVvZiBHcm91cFxufVxuXG4vKipcbiAqIOWLvumAieaPkOS+m+eUqOaIt+WcqOWkmuS4qumAiemhueS4re+8jOWvuemAiemhueeahOWGheWuuei/m+ihjOWNleaIluWkmuS4qumAieaLqeOAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBDaGVja2JveDogSUNoZWNrYm94ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWRQcm9wLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhlbHBlcixcbiAgICAgIGhlbHBlckljb24sXG4gICAgICBoZWxwZXJQcm9wcyxcbiAgICAgIGluZGV0ZXJtaW5hdGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElDaGVja2JveFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZSghIWNoZWNrZWRQcm9wKVxuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZENvbnRleHQsXG4gICAgICBoYW5kbGVHcm91cFZhbHVlQ2hhbmdlLFxuICAgICAgc2l6ZTogc2l6ZUNvbnRleHQsXG4gICAgICB2YWx1ZTogdmFsdWVDb250ZXh0LFxuICAgIH0gPSB1c2VDb250ZXh0KEdyb3VwQ29udGV4dClcbiAgICBjb25zdCB7IHNpemU6IHNpemVDb25maWcgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAoY2hlY2tlZFByb3AgIT09IG51bGwgJiYgY2hlY2tlZCAhPT0gISFjaGVja2VkUHJvcCkge1xuICAgICAgc2V0Q2hlY2tlZCghIWNoZWNrZWRQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0LCBzaXplQ29uZmlnKVxuXG4gICAgY29uc3QgdmFsdWVDb21wdXRlZCA9IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBjaGlsZHJlbj8udG9TdHJpbmcoKVxuXG4gICAgLyoqXG4gICAgICog5b2T5pyJIGNvbnRleHQgY29udGV4dCDml7bvvIzkvb/nlKggdmFsdWXvvJpcbiAgICAgKiDlpoLmnpzlrZjlnKggdmFsdWUgcHJvcO+8jOWImeebtOaOpeS9v+eUqCB2YWx1Ze+8m1xuICAgICAqIOWmguaenOS4jeWtmOWcqO+8jOWwsSBzdHJpbmcg5YyWIGNoaWxkcmVuIOS9nOS4uiB2YWx1ZeOAglxuICAgICAqL1xuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1jaGVja2VkYF06XG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZSB8fFxuICAgICAgICAgICh2YWx1ZUNvbnRleHRcbiAgICAgICAgICAgID8gdmFsdWVDb21wdXRlZCAmJiB2YWx1ZUNvbnRleHQuaW5jbHVkZXModmFsdWVDb21wdXRlZClcbiAgICAgICAgICAgIDogY2hlY2tlZCksXG4gICAgICAgIFtgJHtwcmVmaXh9LW5vQ2hpbGRyZW5gXTogIWNoaWxkcmVuLFxuICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZENvbnRleHQgfHwgZGlzYWJsZWQsXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgcG9wb3ZlciA9IGhlbHBlciA/IChcbiAgICAgIDxQb3BvdmVyIGFsaWduRWRnZT17ZmFsc2V9IHBvcHVwPXtoZWxwZXJ9IHsuLi5oZWxwZXJQcm9wc30+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aGVscGVySWNvbiB8fCBcImhlbHAtY2lyY2xlXCJ9XG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS1ncmF5LTYwMClcIlxuICAgICAgICAgIGludGVyYWN0aXZlXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlbHBlcmB9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKSA6IG51bGxcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKFxuICAgICAgZTpcbiAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgIHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgb25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKGRpc2FibGVkIHx8IGRpc2FibGVkQ29udGV4dCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChoYW5kbGVHcm91cFZhbHVlQ2hhbmdlICYmIHZhbHVlQ29tcHV0ZWQpIHtcbiAgICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSh2YWx1ZUNvbXB1dGVkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrZWRQcm9wID09PSBudWxsKSB7XG4gICAgICAgICAgc2V0Q2hlY2tlZCghY2hlY2tlZClcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSghY2hlY2tlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgaGFuZGxlQ2xpY2soZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGFyaWEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHJvbGU9XCJjaGVja2JveFwiXG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5kaWNhdG9yYH0+XG4gICAgICAgICAge2luZGV0ZXJtaW5hdGUgPyAoXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMFwiPlxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIHg9XCIxXCJcbiAgICAgICAgICAgICAgICB5PVwiNFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgICAgcng9XCIuNVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTBcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTS42MTggNS44MjdhLjQ2My40NjMgMCAwIDEtLjAyLS42NzVsLjgwNC0uODA0YS41Mi41MiAwIDAgMSAuNzE2LS4wMUw0Ljc1IDYuNzVsNC45MjItNS42MjVhLjUxMy41MTMgMCAwIDEgLjcwNy0uMDZsLjc0Mi42MmEuNDc4LjQ3OCAwIDAgMSAuMDQ0LjY4N2wtNi4wOCA2Ljc1NmEuNTA2LjUwNiAwIDAgMS0uNzAzLjA0NUwuNjE4IDUuODI3elwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgeyEhY2hpbGRyZW4gJiYgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj59XG4gICAgICAgIHtwb3BvdmVyfVxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbilcblxuQ2hlY2tib3guR3JvdXAgPSBHcm91cFxuXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWKoOWFpemXruWPt+awlOazoeaPkOekuuWGheWuuVxuICAgKi9cbiAgaGVscGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6Zeu5Y+35rCU5rOh5o+Q56S655qEIHByb3Bz77yM5Lya5bCG5q2k5a+56LGh6YO95Lyg6YCS57uZIDxQb3BvdmVyIC8+XG4gICAqL1xuICBoZWxwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOiuvue9riBpbmRldGVybWluYXRlIOeKtuaAge+8jOi0n+i0o+S4lOS7heS7hei0n+i0o+agt+W8j+aOp+WItu+8jOivt+WcqOWunueOsOWFqOmAieaViOaenOaXtuS9v+eUqFxuICAgKi9cbiAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5YC877yM5Y+q5Zyo5L2/55SoIENoZWNrYm94Lkdyb3VwIOaXtuS8muivu+WPluS9v+eUqFxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn1cblxuQ2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICBjaGVja2VkOiBudWxsLFxuICBjaGlsZHJlbjogXCJcIixcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaGVscGVyOiBudWxsLFxuICBoZWxwZXJJY29uOiBcImhlbHAtY2lyY2xlXCIsXG4gIGhlbHBlclByb3BzOiB7fSxcbiAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gIG9uQ2hhbmdlOiBudWxsLFxuICBvbkNsaWNrOiBudWxsLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuIl19