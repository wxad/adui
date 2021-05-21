function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ConfigContext, getComputedSize } from "../config-provider";
import Item from "./Item";
import "./style";
var prefix = "adui-breadcrumb";

var Breadcrumb = function Breadcrumb(_ref) {
  var children = _ref.children,
      className = _ref.className,
      size = _ref.size,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "size"]);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var computedSize = getComputedSize(size, sizeContext);
  var classSet = classNames(className, "".concat(prefix, "-").concat(computedSize));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), children);
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"])
};
Breadcrumb.defaultProps = {
  children: null,
  className: undefined,
  size: "small"
};
Breadcrumb.Item = Item;
export default Breadcrumb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkl0ZW0iLCJwcmVmaXgiLCJCcmVhZGNydW1iIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzaXplIiwib3RoZXJQcm9wcyIsInNpemVDb250ZXh0IiwiY29tcHV0ZWRTaXplIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFVBQWhCLFFBQWtDLE9BQWxDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxlQUF4QixRQUErQyxvQkFBL0M7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLGlCQUFmOztBQXFCQSxJQUFNQyxVQUVMLEdBQUcsU0FGRUEsVUFFRixPQUFvRTtBQUFBLE1BQWpFQyxRQUFpRSxRQUFqRUEsUUFBaUU7QUFBQSxNQUF2REMsU0FBdUQsUUFBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQW5DQyxVQUFtQzs7QUFBQSxvQkFDeENYLFVBQVUsQ0FBQ0csYUFBRCxDQUQ4QjtBQUFBLE1BQ3hEUyxXQUR3RCxlQUM5REYsSUFEOEQ7O0FBRXRFLE1BQU1HLFlBQVksR0FBR1QsZUFBZSxDQUFDTSxJQUFELEVBQU9FLFdBQVAsQ0FBcEM7QUFFQSxNQUFNRSxRQUFRLEdBQUdaLFVBQVUsQ0FBQ08sU0FBRCxZQUFlSCxNQUFmLGNBQXlCTyxZQUF6QixFQUEzQjtBQUNBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUM7QUFBaEIsS0FBOEJILFVBQTlCLEdBQ0dILFFBREgsQ0FERjtBQUtELENBWkQ7O0FBY0FELFVBQVUsQ0FBQ1EsU0FBWCxHQUF1QjtBQUlyQlAsRUFBQUEsUUFBUSxFQUFFUCxTQUFTLENBQUNlLElBSkM7QUFRckJQLEVBQUFBLFNBQVMsRUFBRVIsU0FBUyxDQUFDZ0IsTUFSQTtBQVlyQlAsRUFBQUEsSUFBSSxFQUFFVCxTQUFTLENBQUNpQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEI7QUFaZSxDQUF2QjtBQWVBWCxVQUFVLENBQUNZLFlBQVgsR0FBMEI7QUFDeEJYLEVBQUFBLFFBQVEsRUFBRSxJQURjO0FBRXhCQyxFQUFBQSxTQUFTLEVBQUVXLFNBRmE7QUFHeEJWLEVBQUFBLElBQUksRUFBRTtBQUhrQixDQUExQjtBQU1BSCxVQUFVLENBQUNGLElBQVgsR0FBa0JBLElBQWxCO0FBRUEsZUFBZUUsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktYnJlYWRjcnVtYlwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJyZWFkY3J1bWJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxufVxuXG4vKipcbiAqIOmdouWMheWxkeeUqOS6juWxleekuuW9k+WJjeWSjOWOhuWPsueahOihjOS4uui3r+W+hOOAgeaJgOWcqOS9jee9ru+8jOW5tuiDveWkn+S+neaNrue6v+aAp+mAu+i+kei/m+ihjOi/lOWbnuOAglxuICovXG5jb25zdCBCcmVhZGNydW1iOiBSZWFjdC5GQzxJQnJlYWRjcnVtYlByb3BzPiAmIHtcbiAgSXRlbTogdHlwZW9mIEl0ZW1cbn0gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzaXplLCAuLi5vdGhlclByb3BzIH06IElCcmVhZGNydW1iUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICBjb25zdCBjb21wdXRlZFNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZSwgc2l6ZUNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS0ke2NvbXB1dGVkU2l6ZX1gKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbkJyZWFkY3J1bWIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbn1cblxuQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxufVxuXG5CcmVhZGNydW1iLkl0ZW0gPSBJdGVtXG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWJcbiJdfQ==