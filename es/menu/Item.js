function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MenuContext } from "./Context";
import "./style";

var noop = function noop() {};

var prefix = "adui-menu";

var Item = function Item(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      index = _ref.index,
      _onClick = _ref.onClick,
      otherProps = _objectWithoutProperties(_ref, ["className", "disabled", "index", "onClick"]);

  var _useContext = useContext(MenuContext),
      onItemClick = _useContext.onItemClick;

  var classSet = classNames(className, "".concat(prefix, "-item"), _defineProperty({}, "".concat(prefix, "-item_disabled"), disabled));
  return React.createElement("div", _extends({
    role: "none",
    onClick: function onClick() {
      if (!disabled) {
        if (_onClick) {
          _onClick();
        }

        if (onItemClick) {
          onItemClick(index);
        }
      }
    },
    className: classSet
  }, otherProps));
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func
};
Item.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  onClick: noop
};
export default Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9JdGVtLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiTWVudUNvbnRleHQiLCJub29wIiwicHJlZml4IiwiSXRlbSIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiaW5kZXgiLCJvbkNsaWNrIiwib3RoZXJQcm9wcyIsIm9uSXRlbUNsaWNrIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsUUFBa0MsT0FBbEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsV0FBNUI7QUFDQSxPQUFPLFNBQVA7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQTZCQSxJQUFNQyxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QixPQU1qQjtBQUFBLE1BTGhCQyxTQUtnQixRQUxoQkEsU0FLZ0I7QUFBQSxNQUpoQkMsUUFJZ0IsUUFKaEJBLFFBSWdCO0FBQUEsTUFIaEJDLEtBR2dCLFFBSGhCQSxLQUdnQjtBQUFBLE1BRmhCQyxRQUVnQixRQUZoQkEsT0FFZ0I7QUFBQSxNQURiQyxVQUNhOztBQUFBLG9CQUNRWCxVQUFVLENBQUNHLFdBQUQsQ0FEbEI7QUFBQSxNQUNSUyxXQURRLGVBQ1JBLFdBRFE7O0FBR2hCLE1BQU1DLFFBQVEsR0FBR1gsVUFBVSxDQUFDSyxTQUFELFlBQWVGLE1BQWYsMENBQ3JCQSxNQURxQixxQkFDSUcsUUFESixFQUEzQjtBQUdBLFNBQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxNQURQO0FBRUUsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixVQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiLFlBQUlFLFFBQUosRUFBYTtBQUNYQSxVQUFBQSxRQUFPO0FBQ1I7O0FBQ0QsWUFBSUUsV0FBSixFQUFpQjtBQUNmQSxVQUFBQSxXQUFXLENBQUNILEtBQUQsQ0FBWDtBQUNEO0FBQ0Y7QUFDRixLQVhIO0FBWUUsSUFBQSxTQUFTLEVBQUVJO0FBWmIsS0FhTUYsVUFiTixFQURGO0FBaUJELENBN0JEOztBQThCQUwsSUFBSSxDQUFDUSxTQUFMLEdBQWlCO0FBSWZDLEVBQUFBLFFBQVEsRUFBRWQsU0FBUyxDQUFDZSxJQUpMO0FBUWZULEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDZ0IsTUFSTjtBQVlmVCxFQUFBQSxRQUFRLEVBQUVQLFNBQVMsQ0FBQ2lCLElBWkw7QUFnQmZULEVBQUFBLEtBQUssRUFBRVIsU0FBUyxDQUFDa0IsU0FBVixDQUFvQixDQUFDbEIsU0FBUyxDQUFDZ0IsTUFBWCxFQUFtQmhCLFNBQVMsQ0FBQ21CLE1BQTdCLENBQXBCLEVBQTBEQyxVQWhCbEQ7QUFvQmZYLEVBQUFBLE9BQU8sRUFBRVQsU0FBUyxDQUFDcUI7QUFwQkosQ0FBakI7QUF1QkFoQixJQUFJLENBQUNpQixZQUFMLEdBQW9CO0FBQ2xCUixFQUFBQSxRQUFRLEVBQUUsSUFEUTtBQUVsQlIsRUFBQUEsU0FBUyxFQUFFaUIsU0FGTztBQUdsQmhCLEVBQUFBLFFBQVEsRUFBRSxLQUhRO0FBSWxCRSxFQUFBQSxPQUFPLEVBQUVOO0FBSlMsQ0FBcEI7QUFPQSxlQUFlRSxJQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBNZW51Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLW1lbnVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogQm9vbGVhblxuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUmVhY3QuUmVhY3RUZXh0XG4gIC8qKlxuICAgKiDngrnlh7vkuovku7ZcbiAgICovXG4gIG9uQ2xpY2s/OiAoZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkXG59XG5cbi8qKlxuICog6KGM5Yqo6I+c5Y2VIC0g6I+c5Y2V6aG5XG4gKi9cbmNvbnN0IEl0ZW06IFJlYWN0LkZDPElJdGVtUHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBkaXNhYmxlZCxcbiAgaW5kZXgsXG4gIG9uQ2xpY2ssXG4gIC4uLm90aGVyUHJvcHNcbn06IElJdGVtUHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkl0ZW1DbGljayB9ID0gdXNlQ29udGV4dChNZW51Q29udGV4dClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWl0ZW1gLCB7XG4gICAgW2Ake3ByZWZpeH0taXRlbV9kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwibm9uZVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgb25DbGljaygpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvbkl0ZW1DbGljaykge1xuICAgICAgICAgICAgb25JdGVtQ2xpY2soaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgIC8+XG4gIClcbn1cbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7ZcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2xpY2s6IG5vb3AsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cbiJdfQ==