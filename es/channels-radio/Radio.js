function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { ConfigContext, getComputedSize } from "../config-provider";
import Group from "./Group";
import Icon from "../icon";
import Popover from "../popover";
import "./style";
var prefix = "adui-channels-radio";
var Radio = forwardRef(function (_ref, ref) {
  var _classNames;

  var checkedProp = _ref.checked,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      helper = _ref.helper,
      helperIcon = _ref.helperIcon,
      helperProps = _ref.helperProps,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      sizeProp = _ref.size,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["checked", "children", "className", "disabled", "helper", "helperIcon", "helperProps", "onChange", "onClick", "size", "value"]);

  var _useState = useState(!!checkedProp),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useContext = useContext(GroupContext),
      disabledContext = _useContext.disabled,
      handleGroupValueChange = _useContext.handleGroupValueChange,
      sizeContext = _useContext.size,
      valueContext = _useContext.value;

  if (checkedProp !== null && checked !== checkedProp) {
    setChecked(!!checkedProp);
  }

  var _useContext2 = useContext(ConfigContext),
      sizeConfig = _useContext2.size;

  var size = getComputedSize(sizeProp, sizeContext, sizeConfig);
  var popover = helper ? React.createElement(Popover, _extends({
    alignEdge: false,
    popup: helper
  }, helperProps), React.createElement(Icon, {
    icon: helperIcon || "help-circle",
    color: "var(--gray-600)",
    interactive: true,
    className: "".concat(prefix, "-helper")
  })) : null;
  var classSet = classNames(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-checked"), valueContext !== null && valueContext !== undefined ? valueContext === (value === null ? children === null || children === void 0 ? void 0 : children.toString() : value) : checked), _defineProperty(_classNames, "".concat(prefix, "-noChildren"), !children), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabledContext || disabled), _classNames));

  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick(e);
    }

    var computedValue = value === null ? children === null || children === void 0 ? void 0 : children.toString() : value;

    if ((valueContext !== null ? valueContext === computedValue : checked) || disabled || disabledContext) {
      return;
    }

    if (handleGroupValueChange) {
      handleGroupValueChange(computedValue === undefined ? "" : computedValue);
    } else {
      if (checkedProp === null) {
        setChecked(true);
      }

      if (onChange) {
        onChange(true);
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
    role: "radio"
  }, otherProps), React.createElement("span", {
    className: "".concat(prefix, "-indicator")
  }), !!children && React.createElement("span", null, children), popover);
});
Radio.Group = Group;
Radio.propTypes = {
  checked: PropTypes.oneOf([null, true, false]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  helper: PropTypes.node,
  helperIcon: PropTypes.any,
  helperProps: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Radio.defaultProps = {
  checked: null,
  children: "",
  className: undefined,
  disabled: false,
  helper: null,
  helperIcon: "help-circle",
  helperProps: {},
  onChange: null,
  onClick: null,
  size: "small",
  value: null
};
export default Radio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtcmFkaW8vUmFkaW8udHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJHcm91cENvbnRleHQiLCJDb25maWdDb250ZXh0IiwiZ2V0Q29tcHV0ZWRTaXplIiwiR3JvdXAiLCJJY29uIiwiUG9wb3ZlciIsInByZWZpeCIsIlJhZGlvIiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsIm9uQ2hhbmdlIiwib25DbGljayIsInNpemVQcm9wIiwic2l6ZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsInNldENoZWNrZWQiLCJkaXNhYmxlZENvbnRleHQiLCJoYW5kbGVHcm91cFZhbHVlQ2hhbmdlIiwic2l6ZUNvbnRleHQiLCJ2YWx1ZUNvbnRleHQiLCJzaXplQ29uZmlnIiwicG9wb3ZlciIsImNsYXNzU2V0IiwidW5kZWZpbmVkIiwidG9TdHJpbmciLCJoYW5kbGVDbGljayIsImUiLCJjb21wdXRlZFZhbHVlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJwcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsVUFBNUIsRUFBd0NDLFFBQXhDLFFBQXdELE9BQXhEO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLFdBQTdCO0FBQ0EsU0FBU0MsYUFB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RUFBQUEsUUFBUSxFQUFFLElBUlM7QUFTbkJDLEVBQUFBLE9BQU8sRUFBRSxJQVRVO0FBVW5CRSxFQUFBQSxJQUFJLEVBQUUsT0FWYTtBQVduQkMsRUFBQUEsS0FBSyxFQUFFO0FBWFksQ0FBckI7QUFjQSxlQUFlZCxLQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC10by1pbnRlcmFjdGl2ZS1yb2xlICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBHcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLXJhZGlvXCJcblxuZXhwb3J0IGludGVyZmFjZSBJUmFkaW9Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5Yqg5YWl6Zeu5Y+35rCU5rOh5o+Q56S65YaF5a65XG4gICAqL1xuICBoZWxwZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDpl67lj7fmsJTms6Hmj5DnpLrnmoQgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpg73kvKDpgJLnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGhlbHBlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzpcbiAgICB8ICgoXG4gICAgICAgIGU6XG4gICAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICApID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBSYWRpby5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IFJlYWN0LlJlYWN0VGV4dFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb1xuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSVJhZGlvUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxMYWJlbEVsZW1lbnQ+XG4gID4ge1xuICBHcm91cDogdHlwZW9mIEdyb3VwXG59XG5cbi8qKlxuICog5Y2V6YCJ5o+Q5L6b57uZ55So5oi35Zyo5LqS5pal55qE5aSa5Liq6YCJ6aG55Lit77yM5a+56YCJ6aG55YaF5a656L+b6KGM5Y2V5Liq6YCJ5oup44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFJhZGlvOiBJUmFkaW8gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2hlY2tlZDogY2hlY2tlZFByb3AsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVscGVyLFxuICAgICAgaGVscGVySWNvbixcbiAgICAgIGhlbHBlclByb3BzLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkNsaWNrLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJUmFkaW9Qcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoISFjaGVja2VkUHJvcClcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSxcbiAgICAgIHNpemU6IHNpemVDb250ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlQ29udGV4dCxcbiAgICB9ID0gdXNlQ29udGV4dChHcm91cENvbnRleHQpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKGNoZWNrZWRQcm9wICE9PSBudWxsICYmIGNoZWNrZWQgIT09IGNoZWNrZWRQcm9wKSB7XG4gICAgICBzZXRDaGVja2VkKCEhY2hlY2tlZFByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29uZmlnIH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dCwgc2l6ZUNvbmZpZylcblxuICAgIGNvbnN0IHBvcG92ZXIgPSBoZWxwZXIgPyAoXG4gICAgICA8UG9wb3ZlciBhbGlnbkVkZ2U9e2ZhbHNlfSBwb3B1cD17aGVscGVyfSB7Li4uaGVscGVyUHJvcHN9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2hlbHBlckljb24gfHwgXCJoZWxwLWNpcmNsZVwifVxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tZ3JheS02MDApXCJcbiAgICAgICAgICBpbnRlcmFjdGl2ZVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWxwZXJgfVxuICAgICAgICAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgICkgOiBudWxsXG5cbiAgICAvKipcbiAgICAgKiDlvZPmnIkgcmFkaW9Hcm91cCBjb250ZXh0IOaXtu+8jOS9v+eUqCB2YWx1Ze+8mlxuICAgICAqIOWmguaenOWtmOWcqCB2YWx1ZSBwcm9w77yM5YiZ55u05o6l5L2/55SoIHZhbHVl77ybXG4gICAgICog5aaC5p6c5LiN5a2Y5Zyo77yM5bCxIHN0cmluZyDljJYgY2hpbGRyZW4g5L2c5Li6IHZhbHVl44CCXG4gICAgICovXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWNoZWNrZWRgXTpcbiAgICAgICAgICB2YWx1ZUNvbnRleHQgIT09IG51bGwgJiYgdmFsdWVDb250ZXh0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdmFsdWVDb250ZXh0ID09PSAodmFsdWUgPT09IG51bGwgPyBjaGlsZHJlbj8udG9TdHJpbmcoKSA6IHZhbHVlKVxuICAgICAgICAgICAgOiBjaGVja2VkLFxuICAgICAgICBbYCR7cHJlZml4fS1ub0NoaWxkcmVuYF06ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWRDb250ZXh0IHx8IGRpc2FibGVkLFxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKFxuICAgICAgZTpcbiAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgIHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PlxuICAgICkgPT4ge1xuICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgb25DbGljayhlKVxuICAgICAgfVxuICAgICAgY29uc3QgY29tcHV0ZWRWYWx1ZSA9IHZhbHVlID09PSBudWxsID8gY2hpbGRyZW4/LnRvU3RyaW5nKCkgOiB2YWx1ZVxuICAgICAgLyoqXG4gICAgICAgKiDljZXpgInkuI7lpJrpgInlpITnkIbngrnlh7vnmoTkuI3lkIzlnKjkuo7vvJpcbiAgICAgICAqIOWNlemAiemAieS4reeKtuaAgeaYr+WNlemhueeahO+8jOS4gOaXpumAieS4reS4jeWGjeinpuWPkeS6i+S7tuOAglxuICAgICAgICovXG4gICAgICBpZiAoXG4gICAgICAgICh2YWx1ZUNvbnRleHQgIT09IG51bGwgPyB2YWx1ZUNvbnRleHQgPT09IGNvbXB1dGVkVmFsdWUgOiBjaGVja2VkKSB8fFxuICAgICAgICBkaXNhYmxlZCB8fFxuICAgICAgICBkaXNhYmxlZENvbnRleHRcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChoYW5kbGVHcm91cFZhbHVlQ2hhbmdlKSB7XG4gICAgICAgIGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UoY29tcHV0ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGNvbXB1dGVkVmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tlZFByb3AgPT09IG51bGwpIHtcbiAgICAgICAgICBzZXRDaGVja2VkKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MTGFiZWxFbGVtZW50PikgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgaGFuZGxlQ2xpY2soZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIGFyaWEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHJvbGU9XCJyYWRpb1wiXG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5kaWNhdG9yYH0gLz5cbiAgICAgICAgeyEhY2hpbGRyZW4gJiYgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj59XG4gICAgICAgIHtwb3BvdmVyfVxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbilcblxuUmFkaW8uR3JvdXAgPSBHcm91cFxuXG5SYWRpby5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbpgInkuK1cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWKoOWFpemXruWPt+awlOazoeaPkOekuuWGheWuuVxuICAgKi9cbiAgaGVscGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6Zeu5Y+35rCU5rOh5o+Q56S655qEIHByb3Bz77yM5Lya5bCG5q2k5a+56LGh6YO95Lyg6YCS57uZIDxQb3BvdmVyIC8+XG4gICAqL1xuICBoZWxwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOmAieS4reaAgeWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlgLzvvIzlj6rlnKjkvb/nlKggUmFkaW8uR3JvdXAg5pe25Lya6K+75Y+W5L2/55SoXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufVxuXG5SYWRpby5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoZWNrZWQ6IG51bGwsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBoZWxwZXI6IG51bGwsXG4gIGhlbHBlckljb246IFwiaGVscC1jaXJjbGVcIixcbiAgaGVscGVyUHJvcHM6IHt9LFxuICBvbkNoYW5nZTogbnVsbCxcbiAgb25DbGljazogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9cbiJdfQ==