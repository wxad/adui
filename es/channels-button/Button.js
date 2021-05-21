function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import Spinner from "../spinner";
import Group from "./Group";
import { ConfigContext, getComputedSize } from "../config-provider";
import { ButtonGroupContext } from "./Context";
import "./style";
var prefix = "adui-channels-button";
var Button = forwardRef(function (_ref, ref) {
  var _classNames;

  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      disabledProp = _ref.disabled,
      href = _ref.href,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      intentProp = _ref.intent,
      loading = _ref.loading,
      onClick = _ref.onClick,
      sizeProp = _ref.size,
      themeProp = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["active", "children", "className", "disabled", "href", "leftIcon", "rightIcon", "intent", "loading", "onClick", "size", "theme"]);

  var _useContext = useContext(ButtonGroupContext),
      disabledContext = _useContext.disabled,
      intentContext = _useContext.intent,
      sizeContext = _useContext.size,
      themeContext = _useContext.theme;

  var _useContext2 = useContext(ConfigContext),
      sizeConfigContext = _useContext2.size;

  var disabled = disabledProp === null ? disabledContext : disabledProp;
  var intent = intentProp === null ? intentContext : intentProp;
  var size = getComputedSize(sizeProp, sizeContext, sizeConfigContext);
  var theme = themeProp === null ? themeContext : themeProp;
  var classSet = classNames(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(intent), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _defineProperty(_classNames, "".concat(prefix, "-active"), active), _defineProperty(_classNames, "".concat(prefix, "-hasLeftIcon"), !!leftIcon || !children), _defineProperty(_classNames, "".concat(prefix, "-hasRightIcon"), !!rightIcon || !children), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled && !loading), _defineProperty(_classNames, "".concat(prefix, "-loading"), loading), _classNames));

  var handleClick = function handleClick(e) {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  var tagProps = _objectSpread({
    className: classSet,
    disabled: !!disabled,
    href: href,
    onClick: handleClick,
    ref: ref,
    target: href && "_blank"
  }, otherProps);

  var tagChildren = React.createElement(React.Fragment, null, !!leftIcon && React.createElement(Icon, {
    size: 18,
    className: "".concat(prefix, "-leftIcon"),
    icon: leftIcon
  }), !!children && React.createElement("span", {
    className: "".concat(prefix, "-content")
  }, children), !!rightIcon && React.createElement(Icon, {
    size: 18,
    className: "".concat(prefix, "-rightIcon"),
    icon: rightIcon
  }), loading && React.createElement("div", {
    className: "".concat(prefix, "-spinner")
  }, React.createElement(Spinner, {
    color: theme === "light" || intent === "normal" ? null : "#fff",
    intent: theme === "light" ? intent : "normal"
  })));

  if (href) {
    return React.createElement("a", tagProps, tagChildren);
  }

  return React.createElement("button", _extends({
    type: "button"
  }, tagProps), tagChildren);
});
Button.type = "Button";
Button.Group = Group;
Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"]),
  leftIcon: PropTypes.any,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  rightIcon: PropTypes.any,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  theme: PropTypes.oneOf([null, "light"])
};
Button.defaultProps = {
  active: false,
  children: "",
  className: undefined,
  disabled: null,
  href: undefined,
  intent: "primary",
  leftIcon: undefined,
  loading: false,
  onClick: null,
  rightIcon: undefined,
  size: "small",
  theme: null
};
export default Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtYnV0dG9uL0J1dHRvbi50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlQ29udGV4dCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJY29uIiwiU3Bpbm5lciIsIkdyb3VwIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsInByZWZpeCIsIkJ1dHRvbiIsInJlZiIsImFjdGl2ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWRQcm9wIiwiZGlzYWJsZWQiLCJocmVmIiwibGVmdEljb24iLCJyaWdodEljb24iLCJpbnRlbnRQcm9wIiwiaW50ZW50IiwibG9hZGluZyIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ0aGVtZVByb3AiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJkaXNhYmxlZENvbnRleHQiLCJpbnRlbnRDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJ0aGVtZUNvbnRleHQiLCJzaXplQ29uZmlnQ29udGV4dCIsImNsYXNzU2V0IiwiaGFuZGxlQ2xpY2siLCJlIiwidGFnUHJvcHMiLCJ0YXJnZXQiLCJ0YWdDaGlsZHJlbiIsInR5cGUiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiYW55IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLFVBQTVCLFFBQThDLE9BQTlDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxJQUFQLE1BQWdDLFNBQWhDO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixZQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7QUFDQSxTQUFTQyxhQUFULEVBQXdC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QUEsS0FBSyxFQUFFO0FBWmEsQ0FBdEI7QUFlQSxlQUFlakIsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL3NwaW5uZXJcIlxuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IHsgQnV0dG9uR3JvdXBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLWJ1dHRvblwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvblByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiBhY3RpdmUg54q25oCB77yM55So5LqOIEJ1dHRvbi5Hcm91cCDkuK1cbiAgICovXG4gIGFjdGl2ZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOS9v+eUqCBocmVm77yM5bCGIDxidXR0b24gLz4g6L2s5YyW5Li6IDxhIC8+IOagh+etvu+8jOi/meaXtuWAmeS5n+WPr+S7peS8oOWFpSB0YXJnZXQ9XCJfYmxhbmtcIiDnrYkgPGEgLz4g5qCH562+55qE5bGe5oCnXG4gICAqL1xuICBocmVmPzogc3RyaW5nXG4gIC8qKlxuICAgKiDnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDlt6blm77moIdcbiAgICovXG4gIGxlZnRJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDmmK/lkKbliqDovb1cbiAgICovXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljaz86XG4gICAgfCBudWxsXG4gICAgfCAoKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudD4pID0+IHZvaWQpXG4gIC8qKlxuICAgKiDlj7Plm77moIdcbiAgICovXG4gIHJpZ2h0SWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDkuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElCdXR0b25cbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElCdXR0b25Qcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuICA+IHtcbiAgR3JvdXA6IHR5cGVvZiBHcm91cFxuICB0eXBlOiBzdHJpbmdcbn1cblxuLyoqXG4gKiDmjInpkq7nlKjkuo7op6blj5HkuIDkuKrmlrDku7vliqHjgIHmlrDmtYHnqIvnrYnnmoTljbPml7booYzliqjjgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgQnV0dG9uOiBJQnV0dG9uID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkUHJvcCxcbiAgICAgIGhyZWYsXG4gICAgICBsZWZ0SWNvbixcbiAgICAgIHJpZ2h0SWNvbixcbiAgICAgIGludGVudDogaW50ZW50UHJvcCxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBvbkNsaWNrLFxuICAgICAgc2l6ZTogc2l6ZVByb3AsXG4gICAgICB0aGVtZTogdGhlbWVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElCdXR0b25Qcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkQ29udGV4dCxcbiAgICAgIGludGVudDogaW50ZW50Q29udGV4dCxcbiAgICAgIHNpemU6IHNpemVDb250ZXh0LFxuICAgICAgdGhlbWU6IHRoZW1lQ29udGV4dCxcbiAgICB9ID0gdXNlQ29udGV4dChCdXR0b25Hcm91cENvbnRleHQpXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29uZmlnQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgY29uc3QgZGlzYWJsZWQgPSBkaXNhYmxlZFByb3AgPT09IG51bGwgPyBkaXNhYmxlZENvbnRleHQgOiBkaXNhYmxlZFByb3BcbiAgICBjb25zdCBpbnRlbnQgPSBpbnRlbnRQcm9wID09PSBudWxsID8gaW50ZW50Q29udGV4dCA6IGludGVudFByb3BcbiAgICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dCwgc2l6ZUNvbmZpZ0NvbnRleHQpXG4gICAgY29uc3QgdGhlbWUgPSB0aGVtZVByb3AgPT09IG51bGwgPyB0aGVtZUNvbnRleHQgOiB0aGVtZVByb3BcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LSR7aW50ZW50fWAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS0ke3RoZW1lfWBdOiB0aGVtZSxcbiAgICAgICAgW2Ake3ByZWZpeH0tYWN0aXZlYF06IGFjdGl2ZSxcbiAgICAgICAgW2Ake3ByZWZpeH0taGFzTGVmdEljb25gXTogISFsZWZ0SWNvbiB8fCAhY2hpbGRyZW4sXG4gICAgICAgIFtgJHtwcmVmaXh9LWhhc1JpZ2h0SWNvbmBdOiAhIXJpZ2h0SWNvbiB8fCAhY2hpbGRyZW4sXG4gICAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkICYmICFsb2FkaW5nLFxuICAgICAgICBbYCR7cHJlZml4fS1sb2FkaW5nYF06IGxvYWRpbmcsXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoXG4gICAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50IHwgSFRNTEFuY2hvckVsZW1lbnQ+XG4gICAgKSA9PiB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmICFsb2FkaW5nICYmIG9uQ2xpY2spIHtcbiAgICAgICAgb25DbGljayhlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRhZ1Byb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc1NldCxcbiAgICAgIGRpc2FibGVkOiAhIWRpc2FibGVkLFxuICAgICAgaHJlZixcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmLFxuICAgICAgdGFyZ2V0OiBocmVmICYmIFwiX2JsYW5rXCIsXG4gICAgICAuLi5vdGhlclByb3BzLFxuICAgIH1cblxuICAgIGNvbnN0IHRhZ0NoaWxkcmVuID0gKFxuICAgICAgPD5cbiAgICAgICAgeyEhbGVmdEljb24gJiYgKFxuICAgICAgICAgIDxJY29uIHNpemU9ezE4fSBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbGVmdEljb25gfSBpY29uPXtsZWZ0SWNvbn0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyEhY2hpbGRyZW4gJiYgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbnRlbnRgfT57Y2hpbGRyZW59PC9zcGFuPn1cbiAgICAgICAgeyEhcmlnaHRJY29uICYmIChcbiAgICAgICAgICA8SWNvbiBzaXplPXsxOH0gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXJpZ2h0SWNvbmB9IGljb249e3JpZ2h0SWNvbn0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNwaW5uZXJgfT5cbiAgICAgICAgICAgIDxTcGlubmVyXG4gICAgICAgICAgICAgIGNvbG9yPXt0aGVtZSA9PT0gXCJsaWdodFwiIHx8IGludGVudCA9PT0gXCJub3JtYWxcIiA/IG51bGwgOiBcIiNmZmZcIn1cbiAgICAgICAgICAgICAgaW50ZW50PXt0aGVtZSA9PT0gXCJsaWdodFwiID8gaW50ZW50IDogXCJub3JtYWxcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApXG5cbiAgICBpZiAoaHJlZikge1xuICAgICAgcmV0dXJuIDxhIHsuLi50YWdQcm9wc30+e3RhZ0NoaWxkcmVufTwvYT5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHsuLi50YWdQcm9wc30+XG4gICAgICAgIHt0YWdDaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIClcbiAgfVxuKVxuXG5CdXR0b24udHlwZSA9IFwiQnV0dG9uXCJcblxuQnV0dG9uLkdyb3VwID0gR3JvdXBcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIGFjdGl2ZSDnirbmgIHvvIznlKjkuo4gQnV0dG9uLkdyb3VwIOS4rVxuICAgKi9cbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOS9v+eUqCBocmVm77yM5bCGIDxidXR0b24gLz4g6L2s5YyW5Li6IDxhIC8+IOagh+etvu+8jOi/meaXtuWAmeS5n+WPr+S7peS8oOWFpSB0YXJnZXQ9XCJfYmxhbmtcIiDnrYkgPGEgLz4g5qCH562+55qE5bGe5oCnXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOW3puWbvuagh1xuICAgKi9cbiAgbGVmdEljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmmK/lkKbliqDovb1cbiAgICovXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog54K55Ye75LqL5Lu255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y+z5Zu+5qCHXG4gICAqL1xuICByaWdodEljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDkuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxufVxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICBjaGlsZHJlbjogXCJcIixcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBudWxsLFxuICBocmVmOiB1bmRlZmluZWQsXG4gIGludGVudDogXCJwcmltYXJ5XCIsXG4gIGxlZnRJY29uOiB1bmRlZmluZWQsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBvbkNsaWNrOiBudWxsLFxuICByaWdodEljb246IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXX0=