function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import "./style";
var prefix = "adui-breadcrumb";

var Item = function Item(_ref) {
  var className = _ref.className,
      href = _ref.href,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["className", "href", "children"]);

  var classSet = classNames(className, "".concat(prefix, "-item"));
  var TagName = href ? "a" : "span";
  return React.createElement(TagName, _extends({
    className: classSet,
    href: href,
    target: href && "_blank"
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-content")
  }, children), React.createElement(Icon, {
    size: 18,
    icon: "arrow-right",
    className: "".concat(prefix, "-icon")
  }));
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
};
Item.defaultProps = {
  children: null,
  className: undefined,
  href: undefined
};
export default Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9JdGVtLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJY29uIiwicHJlZml4IiwiSXRlbSIsImNsYXNzTmFtZSIsImhyZWYiLCJjaGlsZHJlbiIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsIlRhZ05hbWUiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsU0FBakI7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsaUJBQWY7O0FBc0JBLElBQU1DLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLE9BS2pCO0FBQUEsTUFKaEJDLFNBSWdCLFFBSmhCQSxTQUlnQjtBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSxNQUZoQkMsUUFFZ0IsUUFGaEJBLFFBRWdCO0FBQUEsTUFEYkMsVUFDYTs7QUFDaEIsTUFBTUMsUUFBUSxHQUFHUixVQUFVLENBQUNJLFNBQUQsWUFBZUYsTUFBZixXQUEzQjtBQUNBLE1BQU1PLE9BQU8sR0FBR0osSUFBSSxHQUFHLEdBQUgsR0FBUyxNQUE3QjtBQUVBLFNBQ0Usb0JBQUMsT0FBRDtBQUNFLElBQUEsU0FBUyxFQUFFRyxRQURiO0FBRUUsSUFBQSxJQUFJLEVBQUVILElBRlI7QUFHRSxJQUFBLE1BQU0sRUFBRUEsSUFBSSxJQUFJO0FBSGxCLEtBSU1FLFVBSk4sR0FNRTtBQUFLLElBQUEsU0FBUyxZQUFLTCxNQUFMO0FBQWQsS0FBc0NJLFFBQXRDLENBTkYsRUFPRSxvQkFBQyxJQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUUsRUFBWjtBQUFnQixJQUFBLElBQUksRUFBQyxhQUFyQjtBQUFtQyxJQUFBLFNBQVMsWUFBS0osTUFBTDtBQUE1QyxJQVBGLENBREY7QUFXRCxDQXBCRDs7QUFzQkFDLElBQUksQ0FBQ08sU0FBTCxHQUFpQjtBQUlmSixFQUFBQSxRQUFRLEVBQUVQLFNBQVMsQ0FBQ1ksSUFKTDtBQVFmUCxFQUFBQSxTQUFTLEVBQUVMLFNBQVMsQ0FBQ2EsTUFSTjtBQVlmUCxFQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ2E7QUFaRCxDQUFqQjtBQWVBVCxJQUFJLENBQUNVLFlBQUwsR0FBb0I7QUFDbEJQLEVBQUFBLFFBQVEsRUFBRSxJQURRO0FBRWxCRixFQUFBQSxTQUFTLEVBQUVVLFNBRk87QUFHbEJULEVBQUFBLElBQUksRUFBRVM7QUFIWSxDQUFwQjtBQU1BLGVBQWVYLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWJyZWFkY3J1bWJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmjIflkJHpk77mjqVcbiAgICovXG4gIGhyZWY/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiDpnaLljIXlsZEgLSBpdGVtXG4gKi9cblxuY29uc3QgSXRlbTogUmVhY3QuRkM8SUl0ZW1Qcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIGhyZWYsXG4gIGNoaWxkcmVuLFxuICAuLi5vdGhlclByb3BzXG59OiBJSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0taXRlbWApXG4gIGNvbnN0IFRhZ05hbWUgPSBocmVmID8gXCJhXCIgOiBcInNwYW5cIlxuXG4gIHJldHVybiAoXG4gICAgPFRhZ05hbWVcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBocmVmPXtocmVmfVxuICAgICAgdGFyZ2V0PXtocmVmICYmIFwiX2JsYW5rXCJ9XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250ZW50YH0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPEljb24gc2l6ZT17MTh9IGljb249XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICA8L1RhZ05hbWU+XG4gIClcbn1cblxuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5oyH5ZCR6ZO+5o6lXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBocmVmOiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cbiJdfQ==