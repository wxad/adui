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
var prefix = "adui-radio";
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

  if (checkedProp !== null && checked !== !!checkedProp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcmFkaW8vUmFkaW8udHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJHcm91cENvbnRleHQiLCJDb25maWdDb250ZXh0IiwiZ2V0Q29tcHV0ZWRTaXplIiwiR3JvdXAiLCJJY29uIiwiUG9wb3ZlciIsInByZWZpeCIsIlJhZGlvIiwicmVmIiwiY2hlY2tlZFByb3AiLCJjaGVja2VkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImhlbHBlciIsImhlbHBlckljb24iLCJoZWxwZXJQcm9wcyIsIm9uQ2hhbmdlIiwib25DbGljayIsInNpemVQcm9wIiwic2l6ZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsInNldENoZWNrZWQiLCJkaXNhYmxlZENvbnRleHQiLCJoYW5kbGVHcm91cFZhbHVlQ2hhbmdlIiwic2l6ZUNvbnRleHQiLCJ2YWx1ZUNvbnRleHQiLCJzaXplQ29uZmlnIiwicG9wb3ZlciIsImNsYXNzU2V0IiwidW5kZWZpbmVkIiwidG9TdHJpbmciLCJoYW5kbGVDbGljayIsImUiLCJjb21wdXRlZFZhbHVlIiwiaGFuZGxlS2V5RG93biIsImtleUNvZGUiLCJwcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiYW55Iiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsVUFBNUIsRUFBd0NDLFFBQXhDLFFBQXdELE9BQXhEO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLFdBQTdCO0FBQ0EsU0FBU0MsYUFBVCxFQUF3QkMs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RUFBQUEsUUFBUSxFQUFFLElBUlM7QUFTbkJDLEVBQUFBLE9BQU8sRUFBRSxJQVRVO0FBVW5CRSxFQUFBQSxJQUFJLEVBQUUsT0FWYTtBQVduQkMsRUFBQUEsS0FBSyxFQUFFO0FBWFksQ0FBckI7QUFjQSxlQUFlZCxLQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC10by1pbnRlcmFjdGl2ZS1yb2xlICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBHcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXJhZGlvXCJcblxuZXhwb3J0IGludGVyZmFjZSBJUmFkaW9Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCJ5LitXG4gICAqL1xuICBjaGVja2VkPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5Yqg5YWl6Zeu5Y+35rCU5rOh5o+Q56S65YaF5a65XG4gICAqL1xuICBoZWxwZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiHquWumuS5iemXruWPt+awlOazoeeahCBJY29uXG4gICAqL1xuICBoZWxwZXJJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDpl67lj7fmsJTms6Hmj5DnpLrnmoQgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpg73kvKDpgJLnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGhlbHBlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzpcbiAgICB8ICgoXG4gICAgICAgIGU6XG4gICAgICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgICApID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBSYWRpby5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlPzogbnVsbCB8IFJlYWN0LlJlYWN0VGV4dFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSYWRpb1xuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSVJhZGlvUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxMYWJlbEVsZW1lbnQ+XG4gID4ge1xuICBHcm91cDogdHlwZW9mIEdyb3VwXG59XG5cbi8qKlxuICog5Y2V6YCJ5o+Q5L6b57uZ55So5oi35Zyo5LqS5pal55qE5aSa5Liq6YCJ6aG55Lit77yM5a+56YCJ6aG55YaF5a656L+b6KGM5Y2V5Liq6YCJ5oup44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFJhZGlvOiBJUmFkaW8gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2hlY2tlZDogY2hlY2tlZFByb3AsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVscGVyLFxuICAgICAgaGVscGVySWNvbixcbiAgICAgIGhlbHBlclByb3BzLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbkNsaWNrLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJUmFkaW9Qcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoISFjaGVja2VkUHJvcClcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZSxcbiAgICAgIHNpemU6IHNpemVDb250ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlQ29udGV4dCxcbiAgICB9ID0gdXNlQ29udGV4dChHcm91cENvbnRleHQpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKGNoZWNrZWRQcm9wICE9PSBudWxsICYmIGNoZWNrZWQgIT09ICEhY2hlY2tlZFByb3ApIHtcbiAgICAgIHNldENoZWNrZWQoISFjaGVja2VkUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb25maWcgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0LCBzaXplQ29uZmlnKVxuXG4gICAgY29uc3QgcG9wb3ZlciA9IGhlbHBlciA/IChcbiAgICAgIDxQb3BvdmVyIGFsaWduRWRnZT17ZmFsc2V9IHBvcHVwPXtoZWxwZXJ9IHsuLi5oZWxwZXJQcm9wc30+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aGVscGVySWNvbiB8fCBcImhlbHAtY2lyY2xlXCJ9XG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS1ncmF5LTYwMClcIlxuICAgICAgICAgIGludGVyYWN0aXZlXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWhlbHBlcmB9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKSA6IG51bGxcblxuICAgIC8qKlxuICAgICAqIOW9k+aciSByYWRpb0dyb3VwIGNvbnRleHQg5pe277yM5L2/55SoIHZhbHVl77yaXG4gICAgICog5aaC5p6c5a2Y5ZyoIHZhbHVlIHByb3DvvIzliJnnm7TmjqXkvb/nlKggdmFsdWXvvJtcbiAgICAgKiDlpoLmnpzkuI3lrZjlnKjvvIzlsLEgc3RyaW5nIOWMliBjaGlsZHJlbiDkvZzkuLogdmFsdWXjgIJcbiAgICAgKi9cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tY2hlY2tlZGBdOlxuICAgICAgICAgIHZhbHVlQ29udGV4dCAhPT0gbnVsbCAmJiB2YWx1ZUNvbnRleHQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB2YWx1ZUNvbnRleHQgPT09ICh2YWx1ZSA9PT0gbnVsbCA/IGNoaWxkcmVuPy50b1N0cmluZygpIDogdmFsdWUpXG4gICAgICAgICAgICA6IGNoZWNrZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LW5vQ2hpbGRyZW5gXTogIWNoaWxkcmVuLFxuICAgICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZENvbnRleHQgfHwgZGlzYWJsZWQsXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoXG4gICAgICBlOlxuICAgICAgICB8IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExhYmVsRWxlbWVudD5cbiAgICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+XG4gICAgKSA9PiB7XG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBjb25zdCBjb21wdXRlZFZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBjaGlsZHJlbj8udG9TdHJpbmcoKSA6IHZhbHVlXG4gICAgICAvKipcbiAgICAgICAqIOWNlemAieS4juWkmumAieWkhOeQhueCueWHu+eahOS4jeWQjOWcqOS6ju+8mlxuICAgICAgICog5Y2V6YCJ6YCJ5Lit54q25oCB5piv5Y2V6aG555qE77yM5LiA5pem6YCJ5Lit5LiN5YaN6Kem5Y+R5LqL5Lu244CCXG4gICAgICAgKi9cbiAgICAgIGlmIChcbiAgICAgICAgKHZhbHVlQ29udGV4dCAhPT0gbnVsbCA/IHZhbHVlQ29udGV4dCA9PT0gY29tcHV0ZWRWYWx1ZSA6IGNoZWNrZWQpIHx8XG4gICAgICAgIGRpc2FibGVkIHx8XG4gICAgICAgIGRpc2FibGVkQ29udGV4dFxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGhhbmRsZUdyb3VwVmFsdWVDaGFuZ2UpIHtcbiAgICAgICAgaGFuZGxlR3JvdXBWYWx1ZUNoYW5nZShjb21wdXRlZFZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogY29tcHV0ZWRWYWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja2VkUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldENoZWNrZWQodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICBvbkNoYW5nZSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxMYWJlbEVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBoYW5kbGVDbGljayhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWxcbiAgICAgICAgYXJpYS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgcm9sZT1cInJhZGlvXCJcbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbmRpY2F0b3JgfSAvPlxuICAgICAgICB7ISFjaGlsZHJlbiAmJiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgICAge3BvcG92ZXJ9XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxuKVxuXG5SYWRpby5Hcm91cCA9IEdyb3VwXG5cblJhZGlvLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpumAieS4rVxuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5Yqg5YWl6Zeu5Y+35rCU5rOh5o+Q56S65YaF5a65XG4gICAqL1xuICBoZWxwZXI6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6Ieq5a6a5LmJ6Zeu5Y+35rCU5rOh55qEIEljb25cbiAgICovXG4gIGhlbHBlckljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDpl67lj7fmsJTms6Hmj5DnpLrnmoQgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpg73kvKDpgJLnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGhlbHBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog6YCJ5Lit5oCB5Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOeCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWAvO+8jOWPquWcqOS9v+eUqCBSYWRpby5Hcm91cCDml7bkvJror7vlj5bkvb/nlKhcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cblJhZGlvLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hlY2tlZDogbnVsbCxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhlbHBlcjogbnVsbCxcbiAgaGVscGVySWNvbjogXCJoZWxwLWNpcmNsZVwiLFxuICBoZWxwZXJQcm9wczoge30sXG4gIG9uQ2hhbmdlOiBudWxsLFxuICBvbkNsaWNrOiBudWxsLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpb1xuIl19