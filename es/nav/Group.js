function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style";
var prefix = "adui-nav";

var Group = function Group(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "title"]);

  var classSet = classNames(className, "".concat(prefix, "-group"));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-groupTitle")
  }, title), children);
};

Group.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.node
};
Group.defaultProps = {
  children: null,
  className: undefined,
  title: null
};
export default Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L0dyb3VwLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJwcmVmaXgiLCJHcm91cCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxVQUFmOztBQXFCQSxJQUFNQyxLQUE0QixHQUFHLFNBQS9CQSxLQUErQixPQUtsQjtBQUFBLE1BSmpCQyxRQUlpQixRQUpqQkEsUUFJaUI7QUFBQSxNQUhqQkMsU0FHaUIsUUFIakJBLFNBR2lCO0FBQUEsTUFGakJDLEtBRWlCLFFBRmpCQSxLQUVpQjtBQUFBLE1BRGRDLFVBQ2M7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR1AsVUFBVSxDQUFDSSxTQUFELFlBQWVILE1BQWYsWUFBM0I7QUFFQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVNO0FBQWhCLEtBQThCRCxVQUE5QixHQUNFO0FBQUssSUFBQSxTQUFTLFlBQUtMLE1BQUw7QUFBZCxLQUF5Q0ksS0FBekMsQ0FERixFQUVHRixRQUZILENBREY7QUFNRCxDQWREOztBQWdCQUQsS0FBSyxDQUFDTSxTQUFOLEdBQWtCO0FBSWhCTCxFQUFBQSxRQUFRLEVBQUVKLFNBQVMsQ0FBQ1UsSUFKSjtBQVFoQkwsRUFBQUEsU0FBUyxFQUFFTCxTQUFTLENBQUNXLE1BUkw7QUFZaEJMLEVBQUFBLEtBQUssRUFBRU4sU0FBUyxDQUFDVTtBQVpELENBQWxCO0FBZUFQLEtBQUssQ0FBQ1MsWUFBTixHQUFxQjtBQUNuQlIsRUFBQUEsUUFBUSxFQUFFLElBRFM7QUFFbkJDLEVBQUFBLFNBQVMsRUFBRVEsU0FGUTtBQUduQlAsRUFBQUEsS0FBSyxFQUFFO0FBSFksQ0FBckI7QUFNQSxlQUFlSCxLQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1uYXZcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog57uE5ZCNXG4gICAqL1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOWvvOiIquagjyAtIOWIhue7hFxuICovXG5jb25zdCBHcm91cDogUmVhY3QuRkM8SUdyb3VwUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgdGl0bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElHcm91cFByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tZ3JvdXBgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1ncm91cFRpdGxlYH0+e3RpdGxlfTwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbkdyb3VwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDnu4TlkI1cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIHRpdGxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cFxuIl19