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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvQ2hlY2tib3gudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJHcm91cENvbnRleHQiLCJHcm91cCIsIkljb24iLCJQb3BvdmVyIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsInByZWZpeCIsIkNoZWNrYm94IiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsImluZGV0ZXJtaW5hdGUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJzZXRDaGVja2VkIiwiZGlzYWJsZWRDb250ZXh0IiwiaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSIsInNpemVDb250ZXh0IiwidmFsdWVDb250ZXh0Iiwic2l6ZUNvbmZpZyIsInZhbHVlQ29tcHV0ZWQiLCJ0b1N0cmluZyIsImNsYXNzU2V0IiwiaW5jbHVkZXMiLCJwb3BvdmVyIiwiaGFuZGxlQ2xpY2siLCJlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJwcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsVUFBNUIsRUFBd0NDLFFBQXhDLFFBQXdELE9BQXhEO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxTQUFTQyxZQUFU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RUFBQUEsS0FBSyxFQUFFeEIsU0FBUyxDQUFDaUQsU0FBVixDQUFvQixDQUFDakQsU0FBUyxDQUFDNEMsTUFBWCxFQUFtQjVDLFNBQVMsQ0FBQ2tELE1BQTdCLENBQXBCO0FBaERZLENBQXJCO0FBbURBekMsUUFBUSxDQUFDMEMsWUFBVCxHQUF3QjtBQUN0QnZDLEVBQUFBLE9BQU8sRUFBRSxJQURhO0FBRXRCQyxFQUFBQSxRQUFRLEVBQUUsRUFGWTtBQUd0QkMsRUFBQUEsU0FBUyxFQUFFc0MsU0FIVztBQUl0QnJDLEVBQUFBLFFBQVEsRUFBRSxLQUpZO0FBS3RCQyxFQUFBQSxNQUFNLEVBQUUsSUFMYztBQU10QkMsRUFBQUEsVUFBVSxFQUFFLGFBTlU7QUFPdEJDLEVBQUFBLFdBQVcsRUFBRSxFQVBTO0FBUXRCQyxFQUFBQSxhQUFhLEVBQUUsS0FSTztBQVN0QkMsRUFBQUEsUUFBUSxFQUFFLElBVFk7QUFVdEJDLEVBQUFBLE9BQU8sRUFBRSxJQVZhO0FBV3RCRSxFQUFBQSxJQUFJLEVBQUUsT0FYZ0I7QUFZdEJDLEVBQUFBLEtBQUssRUFBRTtBQVplLENBQXhCO0FBZUEsZUFBZWYsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtdG8taW50ZXJhY3RpdmUtcm9sZSAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgR3JvdXBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGVja2JveFwiXG5leHBvcnQgaW50ZXJmYWNlIElDaGVja2JveFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6Ieq5a6a5LmJ6Zeu5Y+35rCU5rOh55qEIEljb25cbiAgICovXG4gIGhlbHBlckljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDorr7nva4gaW5kZXRlcm1pbmF0ZSDnirbmgIHvvIzotJ/otKPkuJTku4Xku4XotJ/otKPmoLflvI/mjqfliLbvvIzor7flnKjlrp7njrDlhajpgInmlYjmnpzml7bkvb/nlKhcbiAgICovXG4gIGluZGV0ZXJtaW5hdGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpgInkuK3mgIHlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAoKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s/OlxuICAgIHwgKChcbiAgICAgICAgZTpcbiAgICAgICAgICB8IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICAgICB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICkgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5YC877yM5Y+q5Zyo5L2/55SoIENoZWNrYm94Lkdyb3VwIOaXtuS8muivu+WPluS9v+eUqFxuICAgKi9cbiAgdmFsdWU/OiBudWxsIHwgUmVhY3QuUmVhY3RUZXh0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoZWNrYm94XG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJQ2hlY2tib3hQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTExhYmVsRWxlbWVudD5cbiAgPiB7XG4gIEdyb3VwOiB0eXBlb2YgR3JvdXBcbn1cblxuLyoqXG4gKiDli77pgInmj5DkvpvnlKjmiLflnKjlpJrkuKrpgInpobnkuK3vvIzlr7npgInpobnnmoTlhoXlrrnov5vooYzljZXmiJblpJrkuKrpgInmi6njgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgQ2hlY2tib3g6IElDaGVja2JveCA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjaGVja2VkOiBjaGVja2VkUHJvcCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoZWxwZXIsXG4gICAgICBoZWxwZXJJY29uLFxuICAgICAgaGVscGVyUHJvcHMsXG4gICAgICBpbmRldGVybWluYXRlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkNsaWNrLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJQ2hlY2tib3hQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoISFjaGVja2VkUHJvcClcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSxcbiAgICAgIHNpemU6IHNpemVDb250ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlQ29udGV4dCxcbiAgICB9ID0gdXNlQ29udGV4dChHcm91cENvbnRleHQpXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29uZmlnIH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKGNoZWNrZWRQcm9wICE9PSBudWxsICYmIGNoZWNrZWQgIT09ICEhY2hlY2tlZFByb3ApIHtcbiAgICAgIHNldENoZWNrZWQoISFjaGVja2VkUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dCwgc2l6ZUNvbmZpZylcblxuICAgIGNvbnN0IHZhbHVlQ29tcHV0ZWQgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogY2hpbGRyZW4/LnRvU3RyaW5nKClcblxuICAgIC8qKlxuICAgICAqIOW9k+aciSBjb250ZXh0IGNvbnRleHQg5pe277yM5L2/55SoIHZhbHVl77yaXG4gICAgICog5aaC5p6c5a2Y5ZyoIHZhbHVlIHByb3DvvIzliJnnm7TmjqXkvb/nlKggdmFsdWXvvJtcbiAgICAgKiDlpoLmnpzkuI3lrZjlnKjvvIzlsLEgc3RyaW5nIOWMliBjaGlsZHJlbiDkvZzkuLogdmFsdWXjgIJcbiAgICAgKi9cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tY2hlY2tlZGBdOlxuICAgICAgICAgIGluZGV0ZXJtaW5hdGUgfHxcbiAgICAgICAgICAodmFsdWVDb250ZXh0XG4gICAgICAgICAgICA/IHZhbHVlQ29tcHV0ZWQgJiYgdmFsdWVDb250ZXh0LmluY2x1ZGVzKHZhbHVlQ29tcHV0ZWQpXG4gICAgICAgICAgICA6IGNoZWNrZWQpLFxuICAgICAgICBbYCR7cHJlZml4fS1ub0NoaWxkcmVuYF06ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWRDb250ZXh0IHx8IGRpc2FibGVkLFxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IHBvcG92ZXIgPSBoZWxwZXIgPyAoXG4gICAgICA8UG9wb3ZlciBhbGlnbkVkZ2U9e2ZhbHNlfSBwb3B1cD17aGVscGVyfSB7Li4uaGVscGVyUHJvcHN9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2hlbHBlckljb24gfHwgXCJoZWxwLWNpcmNsZVwifVxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tZ3JheS02MDApXCJcbiAgICAgICAgICBpbnRlcmFjdGl2ZVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWxwZXJgfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgICkgOiBudWxsXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChcbiAgICAgIGU6XG4gICAgICAgIHwgUmVhY3QuTW91c2VFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICAgICB8IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICApID0+IHtcbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmIChkaXNhYmxlZCB8fCBkaXNhYmxlZENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSAmJiB2YWx1ZUNvbXB1dGVkKSB7XG4gICAgICAgIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UodmFsdWVDb21wdXRlZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja2VkUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldENoZWNrZWQoIWNoZWNrZWQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoIWNoZWNrZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTExhYmVsRWxlbWVudD4pID0+IHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGhhbmRsZUNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBhcmlhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICByb2xlPVwiY2hlY2tib3hcIlxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWluZGljYXRvcmB9PlxuICAgICAgICAgIHtpbmRldGVybWluYXRlID8gKFxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTBcIj5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4PVwiMVwiXG4gICAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEwXCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHshIWNoaWxkcmVuICYmIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICB7cG9wb3Zlcn1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG4pXG5cbkNoZWNrYm94Lkdyb3VwID0gR3JvdXBcblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDliqDlhaXpl67lj7fmsJTms6Hmj5DnpLrlhoXlrrlcbiAgICovXG4gIGhlbHBlcjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpl67lj7fmsJTms6HnmoQgSWNvblxuICAgKi9cbiAgaGVscGVySWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmXruWPt+awlOazoeaPkOekuueahCBwcm9wc++8jOS8muWwhuatpOWvueixoemDveS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgaGVscGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDorr7nva4gaW5kZXRlcm1pbmF0ZSDnirbmgIHvvIzotJ/otKPkuJTku4Xku4XotJ/otKPmoLflvI/mjqfliLbvvIzor7flnKjlrp7njrDlhajpgInmlYjmnpzml7bkvb/nlKhcbiAgICovXG4gIGluZGV0ZXJtaW5hdGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBDaGVja2JveC5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hlY2tlZDogbnVsbCxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhlbHBlcjogbnVsbCxcbiAgaGVscGVySWNvbjogXCJoZWxwLWNpcmNsZVwiLFxuICBoZWxwZXJQcm9wczoge30sXG4gIGluZGV0ZXJtaW5hdGU6IGZhbHNlLFxuICBvbkNoYW5nZTogbnVsbCxcbiAgb25DbGljazogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hcbiJdfQ==