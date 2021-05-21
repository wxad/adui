function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      onExpandChange = _ref.onExpandChange,
      onItemClick = _ref.onItemClick,
      otherProps = _objectWithoutProperties(_ref, ["className", "onExpandChange", "onItemClick"]);

  var classSet = classNames(className, "".concat(prefix, "-base"));
  return React.createElement(MenuContext.Provider, {
    value: {
      onExpandChange: onExpandChange,
      onItemClick: onItemClick
    }
  }, React.createElement("div", _extends({
    className: classSet
  }, otherProps)));
};

Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.propTypes = {
  className: PropTypes.string,
  onExpandChange: PropTypes.func,
  onItemClick: PropTypes.func
};
Menu.defaultProps = {
  className: undefined,
  onExpandChange: noop,
  onItemClick: noop
};
export default Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9NZW51LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJdGVtIiwiU3ViTWVudSIsIk1lbnVDb250ZXh0Iiwibm9vcCIsInByZWZpeCIsIk1lbnUiLCJjbGFzc05hbWUiLCJvbkV4cGFuZENoYW5nZSIsIm9uSXRlbUNsaWNrIiwib3RoZXJQcm9wcyIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixXQUFwQjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsV0FBNUI7QUFDQSxPQUFPLFNBQVA7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQXNCQSxJQUFNQyxJQUdMLEdBQUcsU0FIRUEsSUFHRixPQUEyRTtBQUFBLE1BQXhFQyxTQUF3RSxRQUF4RUEsU0FBd0U7QUFBQSxNQUE3REMsY0FBNkQsUUFBN0RBLGNBQTZEO0FBQUEsTUFBN0NDLFdBQTZDLFFBQTdDQSxXQUE2QztBQUFBLE1BQTdCQyxVQUE2Qjs7QUFDN0UsTUFBTUMsUUFBUSxHQUFHWCxVQUFVLENBQUNPLFNBQUQsWUFBZUYsTUFBZixXQUEzQjtBQUVBLFNBQ0Usb0JBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsSUFBQSxLQUFLLEVBQUU7QUFBRUcsTUFBQUEsY0FBYyxFQUFkQSxjQUFGO0FBQWtCQyxNQUFBQSxXQUFXLEVBQVhBO0FBQWxCO0FBQTdCLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUU7QUFBaEIsS0FBOEJELFVBQTlCLEVBREYsQ0FERjtBQUtELENBWEQ7O0FBYUFKLElBQUksQ0FBQ0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0FLLElBQUksQ0FBQ0osT0FBTCxHQUFlQSxPQUFmO0FBRUFJLElBQUksQ0FBQ00sU0FBTCxHQUFpQjtBQUlmTCxFQUFBQSxTQUFTLEVBQUVSLFNBQVMsQ0FBQ2MsTUFKTjtBQVFmTCxFQUFBQSxjQUFjLEVBQUVULFNBQVMsQ0FBQ2UsSUFSWDtBQWFmTCxFQUFBQSxXQUFXLEVBQUVWLFNBQVMsQ0FBQ2U7QUFiUixDQUFqQjtBQWdCQVIsSUFBSSxDQUFDUyxZQUFMLEdBQW9CO0FBQ2xCUixFQUFBQSxTQUFTLEVBQUVTLFNBRE87QUFFbEJSLEVBQUFBLGNBQWMsRUFBRUosSUFGRTtBQUdsQkssRUFBQUEsV0FBVyxFQUFFTDtBQUhLLENBQXBCO0FBTUEsZUFBZUUsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIlxuaW1wb3J0IFN1Yk1lbnUgZnJvbSBcIi4vU3ViTWVudVwiXG5pbXBvcnQgeyBNZW51Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLW1lbnVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElNZW51UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlhbbkuIvnmoQgU3ViTWVudSDlsZXlvIDnirbmgIHlj5HnlJ/lj5jljJbnmoQgaGFuZGxlcu+8jOWPguaVsDEgaW5kZXjvvIzlj4LmlbAyIGJvb2xcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKGluZGV4OiBSZWFjdC5SZWFjdFRleHQsIG9wZW46IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWFtuS4i+eahCBJdGVtIOeCueWHu+eahCBoYW5kbGVy77yM5Y+C5pWwIGluZGV444CC5b2T54S25Lmf5Y+v5Lul5Zyo5q+P5LiqIEl0ZW0g5LiK5YqgIG9uQ2xpY2sgcHJvcOOAglxuICAgKiDov5nkuKogcHJvcCDkuZ/lj6rmmK/kvZzkuLrkuIDkuKogY29udGV4dO+8jOWFtuS4iyBJdGVtIOeahCBvbkNsaWNrIOmDveS8muinpuWPkeatpOaWueazleOAglxuICAgKi9cbiAgb25JdGVtQ2xpY2s/OiAoaW5kZXg6IFJlYWN0LlJlYWN0VGV4dCkgPT4gdm9pZFxufVxuXG4vKipcbiAqIOihjOWKqOiPnOWNleaYr+S7peKAnOihjOWKqOKAneOAgeKAnOaTjeS9nOKAneS4uuS4u+eahOmAieaLqeiPnOWNle+8jOS4jumAieaLqeWZqCBTZWxlY3Qg5LiN5ZCM77yM6KGM5Yqo6I+c5Y2V5LiN55So5LqO6YCJ5oup5p+Q6aG55YaF5a6577yM6ICM55So5LqO6L+b6KGM5p+Q56eN5pON5L2c44CCXG4gKi9cbmNvbnN0IE1lbnU6IFJlYWN0LkZDPElNZW51UHJvcHM+ICYge1xuICBJdGVtOiB0eXBlb2YgSXRlbVxuICBTdWJNZW51OiB0eXBlb2YgU3ViTWVudVxufSA9ICh7IGNsYXNzTmFtZSwgb25FeHBhbmRDaGFuZ2UsIG9uSXRlbUNsaWNrLCAuLi5vdGhlclByb3BzIH06IElNZW51UHJvcHMpID0+IHtcbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1iYXNlYClcblxuICByZXR1cm4gKFxuICAgIDxNZW51Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBvbkV4cGFuZENoYW5nZSwgb25JdGVtQ2xpY2sgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfSAvPlxuICAgIDwvTWVudUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuTWVudS5JdGVtID0gSXRlbVxuTWVudS5TdWJNZW51ID0gU3ViTWVudVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5YW25LiL55qEIFN1Yk1lbnUg5bGV5byA54q25oCB5Y+R55Sf5Y+Y5YyW55qEIGhhbmRsZXLvvIzlj4LmlbAxIGluZGV477yM5Y+C5pWwMiBib29sXG4gICAqL1xuICBvbkV4cGFuZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlhbbkuIvnmoQgSXRlbSDngrnlh7vnmoQgaGFuZGxlcu+8jOWPguaVsCBpbmRleOOAguW9k+eEtuS5n+WPr+S7peWcqOavj+S4qiBJdGVtIOS4iuWKoCBvbkNsaWNrIHByb3DjgIJcbiAgICog6L+Z5LiqIHByb3Ag5Lmf5Y+q5piv5L2c5Li65LiA5LiqIGNvbnRleHTvvIzlhbbkuIsgSXRlbSDnmoQgb25DbGljayDpg73kvJrop6blj5HmraTmlrnms5XjgIJcbiAgICovXG4gIG9uSXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn1cblxuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBvbkV4cGFuZENoYW5nZTogbm9vcCxcbiAgb25JdGVtQ2xpY2s6IG5vb3AsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiJdfQ==