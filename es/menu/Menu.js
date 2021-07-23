function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Item from "./Item";
import SubMenu from "./SubMenu";
import { MenuContext } from "./Context";
import "./style";

var noop = function noop() {};

var prefix = "adui-menu";

var Menu = function Menu(_ref) {
  var className = _ref.className,
      minWidth = _ref.minWidth,
      onExpandChange = _ref.onExpandChange,
      onItemClick = _ref.onItemClick,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["className", "minWidth", "onExpandChange", "onItemClick", "style"]);

  var classSet = classNames(className, "".concat(prefix, "-base"));
  return React.createElement(MenuContext.Provider, {
    value: {
      minWidth: minWidth,
      onExpandChange: onExpandChange,
      onItemClick: onItemClick
    }
  }, React.createElement("div", _extends({
    className: classSet,
    style: _objectSpread({
      minWidth: minWidth
    }, style)
  }, otherProps)));
};

Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.propTypes = {
  className: PropTypes.string,
  minWidth: PropTypes.number,
  onExpandChange: PropTypes.func,
  onItemClick: PropTypes.func
};
Menu.defaultProps = {
  className: undefined,
  minWidth: 160,
  onExpandChange: noop,
  onItemClick: noop
};
export default Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9NZW51LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJdGVtIiwiU3ViTWVudSIsIk1lbnVDb250ZXh0Iiwibm9vcCIsInByZWZpeCIsIk1lbnUiLCJjbGFzc05hbWUiLCJtaW5XaWR0aCIsIm9uRXhwYW5kQ2hhbmdlIiwib25JdGVtQ2xpY2siLCJzdHlsZSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLFdBQTVCO0FBQ0EsT0FBTyxTQUFQOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsV0FBZjs7QUEwQkEsSUFBTUMsSUFHTCxHQUFHLFNBSEVBLElBR0YsT0FPYztBQUFBLE1BTmhCQyxTQU1nQixRQU5oQkEsU0FNZ0I7QUFBQSxNQUxoQkMsUUFLZ0IsUUFMaEJBLFFBS2dCO0FBQUEsTUFKaEJDLGNBSWdCLFFBSmhCQSxjQUlnQjtBQUFBLE1BSGhCQyxXQUdnQixRQUhoQkEsV0FHZ0I7QUFBQSxNQUZoQkMsS0FFZ0IsUUFGaEJBLEtBRWdCO0FBQUEsTUFEYkMsVUFDYTs7QUFDaEIsTUFBTUMsUUFBUSxHQUFHYixVQUFVLENBQUNPLFNBQUQsWUFBZUYsTUFBZixXQUEzQjtBQUVBLFNBQ0Usb0JBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsSUFBQSxLQUFLLEVBQUU7QUFBRUcsTUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlDLE1BQUFBLGNBQWMsRUFBZEEsY0FBWjtBQUE0QkMsTUFBQUEsV0FBVyxFQUFYQTtBQUE1QjtBQUE3QixLQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUVHLFFBRGI7QUFFRSxJQUFBLEtBQUs7QUFDSEwsTUFBQUEsUUFBUSxFQUFSQTtBQURHLE9BRUFHLEtBRkE7QUFGUCxLQU1NQyxVQU5OLEVBREYsQ0FERjtBQVlELENBekJEOztBQTJCQU4sSUFBSSxDQUFDTCxJQUFMLEdBQVlBLElBQVo7QUFDQUssSUFBSSxDQUFDSixPQUFMLEdBQWVBLE9BQWY7QUFFQUksSUFBSSxDQUFDUSxTQUFMLEdBQWlCO0FBSWZQLEVBQUFBLFNBQVMsRUFBRVIsU0FBUyxDQUFDZ0IsTUFKTjtBQVFmUCxFQUFBQSxRQUFRLEVBQUVULFNBQVMsQ0FBQ2lCLE1BUkw7QUFZZlAsRUFBQUEsY0FBYyxFQUFFVixTQUFTLENBQUNrQixJQVpYO0FBaUJmUCxFQUFBQSxXQUFXLEVBQUVYLFNBQVMsQ0FBQ2tCO0FBakJSLENBQWpCO0FBb0JBWCxJQUFJLENBQUNZLFlBQUwsR0FBb0I7QUFDbEJYLEVBQUFBLFNBQVMsRUFBRVksU0FETztBQUVsQlgsRUFBQUEsUUFBUSxFQUFFLEdBRlE7QUFHbEJDLEVBQUFBLGNBQWMsRUFBRUwsSUFIRTtBQUlsQk0sRUFBQUEsV0FBVyxFQUFFTjtBQUpLLENBQXBCO0FBT0EsZUFBZUUsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIlxuaW1wb3J0IFN1Yk1lbnUgZnJvbSBcIi4vU3ViTWVudVwiXG5pbXBvcnQgeyBNZW51Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLW1lbnVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElNZW51UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmnIDlsI/lrr3luqZcbiAgICovXG4gIG1pbldpZHRoPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlhbbkuIvnmoQgU3ViTWVudSDlsZXlvIDnirbmgIHlj5HnlJ/lj5jljJbnmoQgaGFuZGxlcu+8jOWPguaVsDEgaW5kZXjvvIzlj4LmlbAyIGJvb2xcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKGluZGV4OiBSZWFjdC5SZWFjdFRleHQsIG9wZW46IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWFtuS4i+eahCBJdGVtIOeCueWHu+eahCBoYW5kbGVy77yM5Y+C5pWwIGluZGV444CC5b2T54S25Lmf5Y+v5Lul5Zyo5q+P5LiqIEl0ZW0g5LiK5YqgIG9uQ2xpY2sgcHJvcOOAglxuICAgKiDov5nkuKogcHJvcCDkuZ/lj6rmmK/kvZzkuLrkuIDkuKogY29udGV4dO+8jOWFtuS4iyBJdGVtIOeahCBvbkNsaWNrIOmDveS8muinpuWPkeatpOaWueazleOAglxuICAgKi9cbiAgb25JdGVtQ2xpY2s/OiAoaW5kZXg6IFJlYWN0LlJlYWN0VGV4dCkgPT4gdm9pZFxufVxuXG4vKipcbiAqIOihjOWKqOiPnOWNleaYr+S7peKAnOihjOWKqOKAneOAgeKAnOaTjeS9nOKAneS4uuS4u+eahOmAieaLqeiPnOWNle+8jOS4jumAieaLqeWZqCBTZWxlY3Qg5LiN5ZCM77yM6KGM5Yqo6I+c5Y2V5LiN55So5LqO6YCJ5oup5p+Q6aG55YaF5a6577yM6ICM55So5LqO6L+b6KGM5p+Q56eN5pON5L2c44CCXG4gKi9cbmNvbnN0IE1lbnU6IFJlYWN0LkZDPElNZW51UHJvcHM+ICYge1xuICBJdGVtOiB0eXBlb2YgSXRlbVxuICBTdWJNZW51OiB0eXBlb2YgU3ViTWVudVxufSA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgbWluV2lkdGgsXG4gIG9uRXhwYW5kQ2hhbmdlLFxuICBvbkl0ZW1DbGljayxcbiAgc3R5bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElNZW51UHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1iYXNlYClcblxuICByZXR1cm4gKFxuICAgIDxNZW51Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtaW5XaWR0aCwgb25FeHBhbmRDaGFuZ2UsIG9uSXRlbUNsaWNrIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1pbldpZHRoLFxuICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB9fVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgIC8+XG4gICAgPC9NZW51Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5NZW51Lkl0ZW0gPSBJdGVtXG5NZW51LlN1Yk1lbnUgPSBTdWJNZW51XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmnIDlsI/lrr3luqZcbiAgICovXG4gIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5YW25LiL55qEIFN1Yk1lbnUg5bGV5byA54q25oCB5Y+R55Sf5Y+Y5YyW55qEIGhhbmRsZXLvvIzlj4LmlbAxIGluZGV477yM5Y+C5pWwMiBib29sXG4gICAqL1xuICBvbkV4cGFuZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlhbbkuIvnmoQgSXRlbSDngrnlh7vnmoQgaGFuZGxlcu+8jOWPguaVsCBpbmRleOOAguW9k+eEtuS5n+WPr+S7peWcqOavj+S4qiBJdGVtIOS4iuWKoCBvbkNsaWNrIHByb3DjgIJcbiAgICog6L+Z5LiqIHByb3Ag5Lmf5Y+q5piv5L2c5Li65LiA5LiqIGNvbnRleHTvvIzlhbbkuIsgSXRlbSDnmoQgb25DbGljayDpg73kvJrop6blj5HmraTmlrnms5XjgIJcbiAgICovXG4gIG9uSXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn1cblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBtaW5XaWR0aDogMTYwLFxuICBvbkV4cGFuZENoYW5nZTogbm9vcCxcbiAgb25JdGVtQ2xpY2s6IG5vb3AsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiJdfQ==