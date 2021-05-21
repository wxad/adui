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
var prefix = "adui-button";
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
  intent: "normal",
  leftIcon: undefined,
  loading: false,
  onClick: null,
  rightIcon: undefined,
  size: "small",
  theme: null
};
export default Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlQ29udGV4dCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJY29uIiwiU3Bpbm5lciIsIkdyb3VwIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsInByZWZpeCIsIkJ1dHRvbiIsInJlZiIsImFjdGl2ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWRQcm9wIiwiZGlzYWJsZWQiLCJocmVmIiwibGVmdEljb24iLCJyaWdodEljb24iLCJpbnRlbnRQcm9wIiwiaW50ZW50IiwibG9hZGluZyIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ0aGVtZVByb3AiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJkaXNhYmxlZENvbnRleHQiLCJpbnRlbnRDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJ0aGVtZUNvbnRleHQiLCJzaXplQ29uZmlnQ29udGV4dCIsImNsYXNzU2V0IiwiaGFuZGxlQ2xpY2siLCJlIiwidGFnUHJvcHMiLCJ0YXJnZXQiLCJ0YWdDaGlsZHJlbiIsInR5cGUiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiYW55IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLFVBQTVCLFFBQThDLE9BQTlDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxJQUFQLE1BQWdDLFNBQWhDO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixZQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxlQUF4QixR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QUU7QUFaYSxDQUF0QjtBQWVBLGVBQWVqQixNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vc3Bpbm5lclwiXG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgeyBCdXR0b25Hcm91cENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktYnV0dG9uXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIGFjdGl2ZSDnirbmgIHvvIznlKjkuo4gQnV0dG9uLkdyb3VwIOS4rVxuICAgKi9cbiAgYWN0aXZlPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5L2/55SoIGhyZWbvvIzlsIYgPGJ1dHRvbiAvPiDovazljJbkuLogPGEgLz4g5qCH562+77yM6L+Z5pe25YCZ5Lmf5Y+v5Lul5Lyg5YWlIHRhcmdldD1cIl9ibGFua1wiIOetiSA8YSAvPiDmoIfnrb7nmoTlsZ7mgKdcbiAgICovXG4gIGhyZWY/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOW3puWbvuagh1xuICAgKi9cbiAgbGVmdEljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOaYr+WQpuWKoOi9vVxuICAgKi9cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzpcbiAgICB8IG51bGxcbiAgICB8ICgoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCB8IEhUTUxBbmNob3JFbGVtZW50PikgPT4gdm9pZClcbiAgLyoqXG4gICAqIOWPs+Wbvuagh1xuICAgKi9cbiAgcmlnaHRJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvblxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSUJ1dHRvblByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4gID4ge1xuICBHcm91cDogdHlwZW9mIEdyb3VwXG4gIHR5cGU6IHN0cmluZ1xufVxuXG4vKipcbiAqIOaMiemSrueUqOS6juinpuWPkeS4gOS4quaWsOS7u+WKoeOAgeaWsOa1geeoi+etieeahOWNs+aXtuihjOWKqOOAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBCdXR0b246IElCdXR0b24gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYWN0aXZlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRQcm9wLFxuICAgICAgaHJlZixcbiAgICAgIGxlZnRJY29uLFxuICAgICAgcmlnaHRJY29uLFxuICAgICAgaW50ZW50OiBpbnRlbnRQcm9wLFxuICAgICAgbG9hZGluZyxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHRoZW1lOiB0aGVtZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUJ1dHRvblByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgICAgaW50ZW50OiBpbnRlbnRDb250ZXh0LFxuICAgICAgc2l6ZTogc2l6ZUNvbnRleHQsXG4gICAgICB0aGVtZTogdGhlbWVDb250ZXh0LFxuICAgIH0gPSB1c2VDb250ZXh0KEJ1dHRvbkdyb3VwQ29udGV4dClcbiAgICBjb25zdCB7IHNpemU6IHNpemVDb25maWdDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCBkaXNhYmxlZCA9IGRpc2FibGVkUHJvcCA9PT0gbnVsbCA/IGRpc2FibGVkQ29udGV4dCA6IGRpc2FibGVkUHJvcFxuICAgIGNvbnN0IGludGVudCA9IGludGVudFByb3AgPT09IG51bGwgPyBpbnRlbnRDb250ZXh0IDogaW50ZW50UHJvcFxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0LCBzaXplQ29uZmlnQ29udGV4dClcbiAgICBjb25zdCB0aGVtZSA9IHRoZW1lUHJvcCA9PT0gbnVsbCA/IHRoZW1lQ29udGV4dCA6IHRoZW1lUHJvcFxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtpbnRlbnR9YCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LSR7dGhlbWV9YF06IHRoZW1lLFxuICAgICAgICBbYCR7cHJlZml4fS1hY3RpdmVgXTogYWN0aXZlLFxuICAgICAgICBbYCR7cHJlZml4fS1oYXNMZWZ0SWNvbmBdOiAhIWxlZnRJY29uIHx8ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0taGFzUmlnaHRJY29uYF06ICEhcmlnaHRJY29uIHx8ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQgJiYgIWxvYWRpbmcsXG4gICAgICAgIFtgJHtwcmVmaXh9LWxvYWRpbmdgXTogbG9hZGluZyxcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChcbiAgICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudD5cbiAgICApID0+IHtcbiAgICAgIGlmICghZGlzYWJsZWQgJiYgIWxvYWRpbmcgJiYgb25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGFnUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzU2V0LFxuICAgICAgZGlzYWJsZWQ6ICEhZGlzYWJsZWQsXG4gICAgICBocmVmLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICByZWYsXG4gICAgICB0YXJnZXQ6IGhyZWYgJiYgXCJfYmxhbmtcIixcbiAgICAgIC4uLm90aGVyUHJvcHMsXG4gICAgfVxuXG4gICAgY29uc3QgdGFnQ2hpbGRyZW4gPSAoXG4gICAgICA8PlxuICAgICAgICB7ISFsZWZ0SWNvbiAmJiAoXG4gICAgICAgICAgPEljb24gc2l6ZT17MTh9IGNsYXNzTmFtZT17YCR7cHJlZml4fS1sZWZ0SWNvbmB9IGljb249e2xlZnRJY29ufSAvPlxuICAgICAgICApfVxuICAgICAgICB7ISFjaGlsZHJlbiAmJiA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY29udGVudGB9PntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICB7ISFyaWdodEljb24gJiYgKFxuICAgICAgICAgIDxJY29uIHNpemU9ezE4fSBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcmlnaHRJY29uYH0gaWNvbj17cmlnaHRJY29ufSAvPlxuICAgICAgICApfVxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3Bpbm5lcmB9PlxuICAgICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgICAgY29sb3I9e3RoZW1lID09PSBcImxpZ2h0XCIgfHwgaW50ZW50ID09PSBcIm5vcm1hbFwiID8gbnVsbCA6IFwiI2ZmZlwifVxuICAgICAgICAgICAgICBpbnRlbnQ9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBpbnRlbnQgOiBcIm5vcm1hbFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgIClcblxuICAgIGlmIChocmVmKSB7XG4gICAgICByZXR1cm4gPGEgey4uLnRhZ1Byb3BzfT57dGFnQ2hpbGRyZW59PC9hPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgey4uLnRhZ1Byb3BzfT5cbiAgICAgICAge3RhZ0NoaWxkcmVufVxuICAgICAgPC9idXR0b24+XG4gICAgKVxuICB9XG4pXG5cbkJ1dHRvbi50eXBlID0gXCJCdXR0b25cIlxuXG5CdXR0b24uR3JvdXAgPSBHcm91cFxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogYWN0aXZlIOeKtuaAge+8jOeUqOS6jiBCdXR0b24uR3JvdXAg5LitXG4gICAqL1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5L2/55SoIGhyZWbvvIzlsIYgPGJ1dHRvbiAvPiDovazljJbkuLogPGEgLz4g5qCH562+77yM6L+Z5pe25YCZ5Lmf5Y+v5Lul5Lyg5YWlIHRhcmdldD1cIl9ibGFua1wiIOetiSA8YSAvPiDmoIfnrb7nmoTlsZ7mgKdcbiAgICovXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDnsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog5bem5Zu+5qCHXG4gICAqL1xuICBsZWZ0SWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaYr+WQpuWKoOi9vVxuICAgKi9cbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlj7Plm77moIdcbiAgICovXG4gIHJpZ2h0SWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IG51bGwsXG4gIGhyZWY6IHVuZGVmaW5lZCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBsZWZ0SWNvbjogdW5kZWZpbmVkLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgb25DbGljazogbnVsbCxcbiAgcmlnaHRJY29uOiB1bmRlZmluZWQsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl19