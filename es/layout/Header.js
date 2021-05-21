function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Affix from "../affix";
import { detectStickySupport } from "../_util/detectStickySupport";
import { LayoutContext } from "./Context";
import "./style";
var prefix = "adui-layout";

var Header = function Header(_ref) {
  var affixed = _ref.affixed,
      children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["affixed", "children", "className"]);

  var _useContext = useContext(LayoutContext),
      setHeaderAffixed = _useContext.setHeaderAffixed;

  useEffect(function () {
    if (setHeaderAffixed) {
      setHeaderAffixed(affixed || false);
    }
  }, [affixed]);
  var header = React.createElement("header", _extends({
    className: classNames(className, "".concat(prefix, "-header"), _defineProperty({}, "".concat(prefix, "-header_affixed"), affixed))
  }, otherProps), children);

  if (affixed && !Header.stickable) {
    return React.createElement(Affix, null, header);
  }

  return header;
};

Header.stickable = detectStickySupport();
Header.propTypes = {
  affixed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};
Header.defaultProps = {
  affixed: false,
  children: "",
  className: undefined
};
export default Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkFmZml4IiwiZGV0ZWN0U3RpY2t5U3VwcG9ydCIsIkxheW91dENvbnRleHQiLCJwcmVmaXgiLCJIZWFkZXIiLCJhZmZpeGVkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJvdGhlclByb3BzIiwic2V0SGVhZGVyQWZmaXhlZCIsImhlYWRlciIsInN0aWNrYWJsZSIsInByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFVBQWhCLEVBQTRCQyxTQUE1QixRQUE2QyxPQUE3QztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixVQUFsQjtBQUNBLFNBQVNDLG1CQUFULFFBQW9DLDhCQUFwQztBQUNBLFNBQVNDLGFBQVQsUUFBOEIsV0FBOUI7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsYUFBZjs7QUFxQkEsSUFBTUMsTUFFTCxHQUFHLFNBRkVBLE1BRUYsT0FBbUU7QUFBQSxNQUFoRUMsT0FBZ0UsUUFBaEVBLE9BQWdFO0FBQUEsTUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLE1BQTdDQyxTQUE2QyxRQUE3Q0EsU0FBNkM7QUFBQSxNQUEvQkMsVUFBK0I7O0FBQUEsb0JBQ3hDWixVQUFVLENBQUNNLGFBQUQsQ0FEOEI7QUFBQSxNQUM3RE8sZ0JBRDZELGVBQzdEQSxnQkFENkQ7O0FBR3JFWixFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlZLGdCQUFKLEVBQXNCO0FBQ3BCQSxNQUFBQSxnQkFBZ0IsQ0FBQ0osT0FBTyxJQUFJLEtBQVosQ0FBaEI7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDQSxPQUFELENBSk0sQ0FBVDtBQU1BLE1BQU1LLE1BQU0sR0FDVjtBQUNFLElBQUEsU0FBUyxFQUFFWCxVQUFVLENBQUNRLFNBQUQsWUFBZUosTUFBZiw0Q0FDZkEsTUFEZSxzQkFDV0UsT0FEWDtBQUR2QixLQUlNRyxVQUpOLEdBTUdGLFFBTkgsQ0FERjs7QUFVQSxNQUFJRCxPQUFPLElBQUksQ0FBQ0QsTUFBTSxDQUFDTyxTQUF2QixFQUFrQztBQUNoQyxXQUFPLG9CQUFDLEtBQUQsUUFBUUQsTUFBUixDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0EsTUFBUDtBQUNELENBekJEOztBQTJCQU4sTUFBTSxDQUFDTyxTQUFQLEdBQW1CVixtQkFBbUIsRUFBdEM7QUFFQUcsTUFBTSxDQUFDUSxTQUFQLEdBQW1CO0FBSWpCUCxFQUFBQSxPQUFPLEVBQUVQLFNBQVMsQ0FBQ2UsSUFKRjtBQVFqQlAsRUFBQUEsUUFBUSxFQUFFUixTQUFTLENBQUNnQixJQVJIO0FBWWpCUCxFQUFBQSxTQUFTLEVBQUVULFNBQVMsQ0FBQ2lCO0FBWkosQ0FBbkI7QUFlQVgsTUFBTSxDQUFDWSxZQUFQLEdBQXNCO0FBQ3BCWCxFQUFBQSxPQUFPLEVBQUUsS0FEVztBQUVwQkMsRUFBQUEsUUFBUSxFQUFFLEVBRlU7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRVU7QUFIUyxDQUF0QjtBQU1BLGVBQWViLE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEFmZml4IGZyb20gXCIuLi9hZmZpeFwiXG5pbXBvcnQgeyBkZXRlY3RTdGlja3lTdXBwb3J0IH0gZnJvbSBcIi4uL191dGlsL2RldGVjdFN0aWNreVN1cHBvcnRcIlxuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1sYXlvdXRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm5Zu65a6aXG4gICAqL1xuICBhZmZpeGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiDluIPlsYAgLSDlpLTpg6ggYDxoZWFkZXIgLz5gXG4gKi9cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8SUhlYWRlclByb3BzPiAmIHtcbiAgc3RpY2thYmxlOiBib29sZWFuXG59ID0gKHsgYWZmaXhlZCwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ub3RoZXJQcm9wcyB9OiBJSGVhZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZXRIZWFkZXJBZmZpeGVkIH0gPSB1c2VDb250ZXh0KExheW91dENvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2V0SGVhZGVyQWZmaXhlZCkge1xuICAgICAgc2V0SGVhZGVyQWZmaXhlZChhZmZpeGVkIHx8IGZhbHNlKVxuICAgIH1cbiAgfSwgW2FmZml4ZWRdKVxuXG4gIGNvbnN0IGhlYWRlciA9IChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWhlYWRlcmAsIHtcbiAgICAgICAgW2Ake3ByZWZpeH0taGVhZGVyX2FmZml4ZWRgXTogYWZmaXhlZCxcbiAgICAgIH0pfVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG4gIGlmIChhZmZpeGVkICYmICFIZWFkZXIuc3RpY2thYmxlKSB7XG4gICAgcmV0dXJuIDxBZmZpeD57aGVhZGVyfTwvQWZmaXg+XG4gIH1cbiAgcmV0dXJuIGhlYWRlclxufVxuXG5IZWFkZXIuc3RpY2thYmxlID0gZGV0ZWN0U3RpY2t5U3VwcG9ydCgpXG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKblm7rlrppcbiAgICovXG4gIGFmZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWZmaXhlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0=