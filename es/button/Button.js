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
      iconStyle = _ref.iconStyle,
      intentProp = _ref.intent,
      loading = _ref.loading,
      onClick = _ref.onClick,
      sizeProp = _ref.size,
      themeProp = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["active", "children", "className", "disabled", "href", "leftIcon", "rightIcon", "iconStyle", "intent", "loading", "onClick", "size", "theme"]);

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
    icon: leftIcon,
    style: _objectSpread({}, iconStyle || {})
  }), !!children && React.createElement("span", {
    className: "".concat(prefix, "-content")
  }, children), !!rightIcon && React.createElement(Icon, {
    size: 18,
    className: "".concat(prefix, "-rightIcon"),
    icon: rightIcon,
    style: _objectSpread({}, iconStyle || {})
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
  iconStyle: PropTypes.any,
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
  iconStyle: {},
  intent: "normal",
  leftIcon: undefined,
  loading: false,
  onClick: null,
  rightIcon: undefined,
  size: "small",
  theme: null
};
export default Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlQ29udGV4dCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJY29uIiwiU3Bpbm5lciIsIkdyb3VwIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkJ1dHRvbkdyb3VwQ29udGV4dCIsInByZWZpeCIsIkJ1dHRvbiIsInJlZiIsImFjdGl2ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWRQcm9wIiwiZGlzYWJsZWQiLCJocmVmIiwibGVmdEljb24iLCJyaWdodEljb24iLCJpY29uU3R5bGUiLCJpbnRlbnRQcm9wIiwiaW50ZW50IiwibG9hZGluZyIsIm9uQ2xpY2siLCJzaXplUHJvcCIsInNpemUiLCJ0aGVtZVByb3AiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJkaXNhYmxlZENvbnRleHQiLCJpbnRlbnRDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJ0aGVtZUNvbnRleHQiLCJzaXplQ29uZmlnQ29udGV4dCIsImNsYXNzU2V0IiwiaGFuZGxlQ2xpY2siLCJlIiwidGFnUHJvcHMiLCJ0YXJnZXQiLCJ0YWdDaGlsZHJlbiIsInR5cGUiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsInN0cmluZyIsImFueSIsIm9uZU9mIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLFVBQTVCLFFBQThDLE9BQTlDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxJQUFQLE1BQWdDLFNBQWhDO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixZQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7QUFDQSxTQUFTQyxhQUFULEVB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UztBQU9wQkUsRUFBQUEsTUFBTSxFQUFFLFFBUFk7QUFRcEJKLEVBQUFBLFFBQVEsRUFBRWdDLFNBUlU7QUFTcEIzQixFQUFBQSxPQUFPLEVBQUUsS0FUVztBQVVwQkMsRUFBQUEsT0FBTyxFQUFFLElBVlc7QUFXcEJMLEVBQUFBLFNBQVMsRUFBRStCLFNBWFM7QUFZcEJ4QixFQUFBQSxJQUFJLEVBQUUsT0FaYztBQWFwQkUsRUFBQUEsS0FBSyxFQUFFO0FBYmEsQ0FBdEI7QUFnQkEsZUFBZWxCLE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1idXR0b25cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElCdXR0b25Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICogYWN0aXZlIOeKtuaAge+8jOeUqOS6jiBCdXR0b24uR3JvdXAg5LitXG4gICAqL1xuICBhY3RpdmU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDkvb/nlKggaHJlZu+8jOWwhiA8YnV0dG9uIC8+IOi9rOWMluS4uiA8YSAvPiDmoIfnrb7vvIzov5nml7blgJnkuZ/lj6/ku6XkvKDlhaUgdGFyZ2V0PVwiX2JsYW5rXCIg562JIDxhIC8+IOagh+etvueahOWxnuaAp1xuICAgKi9cbiAgaHJlZj86IHN0cmluZ1xuICAvKipcbiAgICogaWNvbiDpmYTliqDmoLflvI9cbiAgICovXG4gIGljb25TdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOW3puWbvuagh1xuICAgKi9cbiAgbGVmdEljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOaYr+WQpuWKoOi9vVxuICAgKi9cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzpcbiAgICB8IG51bGxcbiAgICB8ICgoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCB8IEhUTUxBbmNob3JFbGVtZW50PikgPT4gdm9pZClcbiAgLyoqXG4gICAqIOWPs+Wbvuagh1xuICAgKi9cbiAgcmlnaHRJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvblxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSUJ1dHRvblByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4gID4ge1xuICBHcm91cDogdHlwZW9mIEdyb3VwXG4gIHR5cGU6IHN0cmluZ1xufVxuXG4vKipcbiAqIOaMiemSrueUqOS6juinpuWPkeS4gOS4quaWsOS7u+WKoeOAgeaWsOa1geeoi+etieeahOWNs+aXtuihjOWKqOOAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBCdXR0b246IElCdXR0b24gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYWN0aXZlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRQcm9wLFxuICAgICAgaHJlZixcbiAgICAgIGxlZnRJY29uLFxuICAgICAgcmlnaHRJY29uLFxuICAgICAgaWNvblN0eWxlLFxuICAgICAgaW50ZW50OiBpbnRlbnRQcm9wLFxuICAgICAgbG9hZGluZyxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzaXplOiBzaXplUHJvcCxcbiAgICAgIHRoZW1lOiB0aGVtZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUJ1dHRvblByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgICAgaW50ZW50OiBpbnRlbnRDb250ZXh0LFxuICAgICAgc2l6ZTogc2l6ZUNvbnRleHQsXG4gICAgICB0aGVtZTogdGhlbWVDb250ZXh0LFxuICAgIH0gPSB1c2VDb250ZXh0KEJ1dHRvbkdyb3VwQ29udGV4dClcbiAgICBjb25zdCB7IHNpemU6IHNpemVDb25maWdDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCBkaXNhYmxlZCA9IGRpc2FibGVkUHJvcCA9PT0gbnVsbCA/IGRpc2FibGVkQ29udGV4dCA6IGRpc2FibGVkUHJvcFxuICAgIGNvbnN0IGludGVudCA9IGludGVudFByb3AgPT09IG51bGwgPyBpbnRlbnRDb250ZXh0IDogaW50ZW50UHJvcFxuICAgIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0LCBzaXplQ29uZmlnQ29udGV4dClcbiAgICBjb25zdCB0aGVtZSA9IHRoZW1lUHJvcCA9PT0gbnVsbCA/IHRoZW1lQ29udGV4dCA6IHRoZW1lUHJvcFxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtpbnRlbnR9YCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LSR7dGhlbWV9YF06IHRoZW1lLFxuICAgICAgICBbYCR7cHJlZml4fS1hY3RpdmVgXTogYWN0aXZlLFxuICAgICAgICBbYCR7cHJlZml4fS1oYXNMZWZ0SWNvbmBdOiAhIWxlZnRJY29uIHx8ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0taGFzUmlnaHRJY29uYF06ICEhcmlnaHRJY29uIHx8ICFjaGlsZHJlbixcbiAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQgJiYgIWxvYWRpbmcsXG4gICAgICAgIFtgJHtwcmVmaXh9LWxvYWRpbmdgXTogbG9hZGluZyxcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChcbiAgICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudD5cbiAgICApID0+IHtcbiAgICAgIGlmICghZGlzYWJsZWQgJiYgIWxvYWRpbmcgJiYgb25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGFnUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzU2V0LFxuICAgICAgZGlzYWJsZWQ6ICEhZGlzYWJsZWQsXG4gICAgICBocmVmLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICByZWYsXG4gICAgICB0YXJnZXQ6IGhyZWYgJiYgXCJfYmxhbmtcIixcbiAgICAgIC4uLm90aGVyUHJvcHMsXG4gICAgfVxuXG4gICAgY29uc3QgdGFnQ2hpbGRyZW4gPSAoXG4gICAgICA8PlxuICAgICAgICB7ISFsZWZ0SWNvbiAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIHNpemU9ezE4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWxlZnRJY29uYH1cbiAgICAgICAgICAgIGljb249e2xlZnRJY29ufVxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uKGljb25TdHlsZSB8fCB7fSkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7ISFjaGlsZHJlbiAmJiA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY29udGVudGB9PntjaGlsZHJlbn08L3NwYW4+fVxuICAgICAgICB7ISFyaWdodEljb24gJiYgKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBzaXplPXsxOH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1yaWdodEljb25gfVxuICAgICAgICAgICAgaWNvbj17cmlnaHRJY29ufVxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uKGljb25TdHlsZSB8fCB7fSkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3Bpbm5lcmB9PlxuICAgICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgICAgY29sb3I9e3RoZW1lID09PSBcImxpZ2h0XCIgfHwgaW50ZW50ID09PSBcIm5vcm1hbFwiID8gbnVsbCA6IFwiI2ZmZlwifVxuICAgICAgICAgICAgICBpbnRlbnQ9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBpbnRlbnQgOiBcIm5vcm1hbFwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgIClcblxuICAgIGlmIChocmVmKSB7XG4gICAgICByZXR1cm4gPGEgey4uLnRhZ1Byb3BzfT57dGFnQ2hpbGRyZW59PC9hPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgey4uLnRhZ1Byb3BzfT5cbiAgICAgICAge3RhZ0NoaWxkcmVufVxuICAgICAgPC9idXR0b24+XG4gICAgKVxuICB9XG4pXG5cbkJ1dHRvbi50eXBlID0gXCJCdXR0b25cIlxuXG5CdXR0b24uR3JvdXAgPSBHcm91cFxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogYWN0aXZlIOeKtuaAge+8jOeUqOS6jiBCdXR0b24uR3JvdXAg5LitXG4gICAqL1xuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5L2/55SoIGhyZWbvvIzlsIYgPGJ1dHRvbiAvPiDovazljJbkuLogPGEgLz4g5qCH562+77yM6L+Z5pe25YCZ5Lmf5Y+v5Lul5Lyg5YWlIHRhcmdldD1cIl9ibGFua1wiIOetiSA8YSAvPiDmoIfnrb7nmoTlsZ7mgKdcbiAgICovXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBpY29uIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgaWNvblN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOW3puWbvuagh1xuICAgKi9cbiAgbGVmdEljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmmK/lkKbliqDovb1cbiAgICovXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog54K55Ye75LqL5Lu255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y+z5Zu+5qCHXG4gICAqL1xuICByaWdodEljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDkuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxufVxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICBjaGlsZHJlbjogXCJcIixcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBudWxsLFxuICBocmVmOiB1bmRlZmluZWQsXG4gIGljb25TdHlsZToge30sXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgbGVmdEljb246IHVuZGVmaW5lZCxcbiAgbG9hZGluZzogZmFsc2UsXG4gIG9uQ2xpY2s6IG51bGwsXG4gIHJpZ2h0SWNvbjogdW5kZWZpbmVkLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRoZW1lOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ==