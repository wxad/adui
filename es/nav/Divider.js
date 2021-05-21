function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style";
var prefix = "adui-nav";

var Divider = function Divider(_ref) {
  var className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement("div", _extends({
    className: classNames(className, "".concat(prefix, "-divider"))
  }, otherProps));
};

Divider.propTypes = {
  className: PropTypes.string
};
Divider.defaultProps = {
  className: undefined
};
export default Divider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L0RpdmlkZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInByZWZpeCIsIkRpdmlkZXIiLCJjbGFzc05hbWUiLCJvdGhlclByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxVQUFmOztBQWFBLElBQU1DLE9BQWdDLEdBQUcsU0FBbkNBLE9BQW1DLE9BR3BCO0FBQUEsTUFGbkJDLFNBRW1CLFFBRm5CQSxTQUVtQjtBQUFBLE1BRGhCQyxVQUNnQjs7QUFDbkIsU0FDRTtBQUNFLElBQUEsU0FBUyxFQUFFSixVQUFVLENBQUNHLFNBQUQsWUFBZUYsTUFBZjtBQUR2QixLQUVNRyxVQUZOLEVBREY7QUFNRCxDQVZEOztBQVlBRixPQUFPLENBQUNHLFNBQVIsR0FBb0I7QUFJbEJGLEVBQUFBLFNBQVMsRUFBRUosU0FBUyxDQUFDTztBQUpILENBQXBCO0FBT0FKLE9BQU8sQ0FBQ0ssWUFBUixHQUF1QjtBQUNyQkosRUFBQUEsU0FBUyxFQUFFSztBQURVLENBQXZCO0FBSUEsZUFBZU4sT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktbmF2XCJcblxuZXhwb3J0IGludGVyZmFjZSBJRGl2aWRlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIOWvvOiIquagjyAtIOWIhuWJsue6v1xuICovXG5jb25zdCBEaXZpZGVyOiBSZWFjdC5GQzxJRGl2aWRlclByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSURpdmlkZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tZGl2aWRlcmApfVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5EaXZpZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5EaXZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJcbiJdfQ==