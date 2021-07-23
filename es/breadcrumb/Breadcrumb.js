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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkl0ZW0iLCJwcmVmaXgiLCJCcmVhZGNydW1iIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzaXplIiwib3RoZXJQcm9wcyIsInNpemVDb250ZXh0IiwiY29tcHV0ZWRTaXplIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFVBQWhCLFFBQWtDLE9BQWxDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxlQUF4QixRQUErQyxvQkFBL0M7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLGlCQUFmOztBQXVCQSxJQUFNQyxVQUVMLEdBQUcsU0FGRUEsVUFFRixPQUFvRTtBQUFBLE1BQWpFQyxRQUFpRSxRQUFqRUEsUUFBaUU7QUFBQSxNQUF2REMsU0FBdUQsUUFBdkRBLFNBQXVEO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQW5DQyxVQUFtQzs7QUFBQSxvQkFDeENYLFVBQVUsQ0FBQ0csYUFBRCxDQUQ4QjtBQUFBLE1BQ3hEUyxXQUR3RCxlQUM5REYsSUFEOEQ7O0FBRXRFLE1BQU1HLFlBQVksR0FBR1QsZUFBZSxDQUFDTSxJQUFELEVBQU9FLFdBQVAsQ0FBcEM7QUFFQSxNQUFNRSxRQUFRLEdBQUdaLFVBQVUsQ0FBQ08sU0FBRCxZQUFlSCxNQUFmLGNBQXlCTyxZQUF6QixFQUEzQjtBQUNBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUM7QUFBaEIsS0FBOEJILFVBQTlCLEdBQ0dILFFBREgsQ0FERjtBQUtELENBWkQ7O0FBY0FELFVBQVUsQ0FBQ1EsU0FBWCxHQUF1QjtBQUlyQlAsRUFBQUEsUUFBUSxFQUFFUCxTQUFTLENBQUNlLElBSkM7QUFRckJQLEVBQUFBLFNBQVMsRUFBRVIsU0FBUyxDQUFDZ0IsTUFSQTtBQVlyQlAsRUFBQUEsSUFBSSxFQUFFVCxTQUFTLENBQUNpQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEI7QUFaZSxDQUF2QjtBQWVBWCxVQUFVLENBQUNZLFlBQVgsR0FBMEI7QUFDeEJYLEVBQUFBLFFBQVEsRUFBRSxJQURjO0FBRXhCQyxFQUFBQSxTQUFTLEVBQUVXLFNBRmE7QUFHeEJWLEVBQUFBLElBQUksRUFBRTtBQUhrQixDQUExQjtBQU1BSCxVQUFVLENBQUNGLElBQVgsR0FBa0JBLElBQWxCO0FBRUEsZUFBZUUsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktYnJlYWRjcnVtYlwiXG5cbmV4cG9ydCB0eXBlIHsgSUl0ZW1Qcm9wcyB9IGZyb20gXCIuL0l0ZW1cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElCcmVhZGNydW1iUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlsLrlr7jlpKflsI9cbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbn1cblxuLyoqXG4gKiDpnaLljIXlsZHnlKjkuo7lsZXnpLrlvZPliY3lkozljoblj7LnmoTooYzkuLrot6/lvoTjgIHmiYDlnKjkvY3nva7vvIzlubbog73lpJ/kvp3mja7nur/mgKfpgLvovpHov5vooYzov5Tlm57jgIJcbiAqL1xuY29uc3QgQnJlYWRjcnVtYjogUmVhY3QuRkM8SUJyZWFkY3J1bWJQcm9wcz4gJiB7XG4gIEl0ZW06IHR5cGVvZiBJdGVtXG59ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc2l6ZSwgLi4ub3RoZXJQcm9wcyB9OiBJQnJlYWRjcnVtYlByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgY29uc3QgY29tcHV0ZWRTaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemUsIHNpemVDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tJHtjb21wdXRlZFNpemV9YClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5CcmVhZGNydW1iLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlsLrlr7jlpKflsI9cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG59XG5cbkJyZWFkY3J1bWIuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIHNpemU6IFwic21hbGxcIixcbn1cblxuQnJlYWRjcnVtYi5JdGVtID0gSXRlbVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iXG4iXX0=