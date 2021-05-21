function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { RowContext } from "./Context";
import "./style";
var prefix = "adui-grid";

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gutter = _ref.gutter,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "gutter", "style"]);

  var classSet = classNames(className, "".concat(prefix, "-row"));
  var margin = gutter ? "-".concat(gutter / 2, "px") : 0;
  var additionStyle = margin ? {
    marginLeft: margin,
    marginRight: margin
  } : {};
  return React.createElement(RowContext.Provider, {
    value: {
      gutter: gutter
    }
  }, React.createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, additionStyle), style)
  }, otherProps), children));
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gutter: PropTypes.number,
  style: PropTypes.object
};
Row.defaultProps = {
  children: "",
  className: undefined,
  gutter: 0,
  style: {}
};
export default Row;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZ3JpZC9Sb3cudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIlJvd0NvbnRleHQiLCJwcmVmaXgiLCJSb3ciLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImd1dHRlciIsInN0eWxlIiwib3RoZXJQcm9wcyIsImNsYXNzU2V0IiwibWFyZ2luIiwiYWRkaXRpb25TdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixXQUEzQjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQXlCQSxJQUFNQyxHQUF3QixHQUFHLFNBQTNCQSxHQUEyQixPQU1oQjtBQUFBLE1BTGZDLFFBS2UsUUFMZkEsUUFLZTtBQUFBLE1BSmZDLFNBSWUsUUFKZkEsU0FJZTtBQUFBLE1BSGZDLE1BR2UsUUFIZkEsTUFHZTtBQUFBLE1BRmZDLEtBRWUsUUFGZkEsS0FFZTtBQUFBLE1BRFpDLFVBQ1k7O0FBQ2YsTUFBTUMsUUFBUSxHQUFHVCxVQUFVLENBQUNLLFNBQUQsWUFBZUgsTUFBZixVQUEzQjtBQUNBLE1BQU1RLE1BQU0sR0FBR0osTUFBTSxjQUFPQSxNQUFNLEdBQUcsQ0FBaEIsVUFBd0IsQ0FBN0M7QUFDQSxNQUFNSyxhQUFhLEdBQUdELE1BQU0sR0FDeEI7QUFDRUUsSUFBQUEsVUFBVSxFQUFFRixNQURkO0FBRUVHLElBQUFBLFdBQVcsRUFBRUg7QUFGZixHQUR3QixHQUt4QixFQUxKO0FBT0EsU0FDRSxvQkFBQyxVQUFELENBQVksUUFBWjtBQUFxQixJQUFBLEtBQUssRUFBRTtBQUFFSixNQUFBQSxNQUFNLEVBQU5BO0FBQUY7QUFBNUIsS0FDRTtBQUNFLElBQUEsU0FBUyxFQUFFRyxRQURiO0FBRUUsSUFBQSxLQUFLLGtDQUNBRSxhQURBLEdBRUFKLEtBRkE7QUFGUCxLQU1NQyxVQU5OLEdBUUdKLFFBUkgsQ0FERixDQURGO0FBY0QsQ0E5QkQ7O0FBZ0NBRCxHQUFHLENBQUNXLFNBQUosR0FBZ0I7QUFJZFYsRUFBQUEsUUFBUSxFQUFFTCxTQUFTLENBQUNnQixJQUpOO0FBUWRWLEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDaUIsTUFSUDtBQVlkVixFQUFBQSxNQUFNLEVBQUVQLFNBQVMsQ0FBQ2tCLE1BWko7QUFnQmRWLEVBQUFBLEtBQUssRUFBRVIsU0FBUyxDQUFDbUI7QUFoQkgsQ0FBaEI7QUFtQkFmLEdBQUcsQ0FBQ2dCLFlBQUosR0FBbUI7QUFDakJmLEVBQUFBLFFBQVEsRUFBRSxFQURPO0FBRWpCQyxFQUFBQSxTQUFTLEVBQUVlLFNBRk07QUFHakJkLEVBQUFBLE1BQU0sRUFBRSxDQUhTO0FBSWpCQyxFQUFBQSxLQUFLLEVBQUU7QUFKVSxDQUFuQjtBQU9BLGVBQWVKLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBSb3dDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWdyaWRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElSb3dQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOavj+WIl+S5i+mXtOeahOmXtOi3nVxuICAgKi9cbiAgZ3V0dGVyPzogbnVtYmVyXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI/vvIzlj6/ku6XlnKjov5nph4zorr7nva4gZmxleCDnm7jlhbPmoLflvI/vvIzlpoIgYWxpZ24taXRlbXNcbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xufVxuXG4vKipcbiAqIOagheagvFxi6KGMXG4gKi9cbmNvbnN0IFJvdzogUmVhY3QuRkM8SVJvd1Byb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGd1dHRlcixcbiAgc3R5bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElSb3dQcm9wcykgPT4ge1xuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LXJvd2ApXG4gIGNvbnN0IG1hcmdpbiA9IGd1dHRlciA/IGAtJHtndXR0ZXIgLyAyfXB4YCA6IDBcbiAgY29uc3QgYWRkaXRpb25TdHlsZSA9IG1hcmdpblxuICAgID8ge1xuICAgICAgICBtYXJnaW5MZWZ0OiBtYXJnaW4sXG4gICAgICAgIG1hcmdpblJpZ2h0OiBtYXJnaW4sXG4gICAgICB9XG4gICAgOiB7fVxuXG4gIHJldHVybiAoXG4gICAgPFJvd0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZ3V0dGVyIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC4uLmFkZGl0aW9uU3R5bGUsXG4gICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIH19XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L1Jvd0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuUm93LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmr4/liJfkuYvpl7TnmoTpl7Tot51cbiAgICovXG4gIGd1dHRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j++8jOWPr+S7peWcqOi/memHjOiuvue9riBmbGV4IOebuOWFs+agt+W8j++8jOWmgiBhbGlnbi1pdGVtc1xuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cblJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZ3V0dGVyOiAwLFxuICBzdHlsZToge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvd1xuIl19