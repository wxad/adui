function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import { NavContext } from "./Context";
import Motion from "../motion";
import "./style";
var prefix = "adui-nav";

var SubNav = function SubNav(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      index = _ref.index,
      title = _ref.title,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "icon", "index", "title"]);

  var _useContext = useContext(NavContext),
      openIndexes = _useContext.openIndexes,
      onOpenChange = _useContext.onOpenChange;

  var open = (openIndexes || []).includes(index);
  var classSet = classNames(className, "".concat(prefix, "-sub"), _defineProperty({}, "".concat(prefix, "-open"), open));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-subTitle"),
    onClick: function onClick() {
      if (onOpenChange) {
        onOpenChange(index);
      }
    },
    role: "none"
  }, icon && React.createElement(Icon, {
    icon: icon,
    className: "".concat(prefix, "-icon")
  }), React.createElement("div", {
    className: "".concat(prefix, "-subTitleContent")
  }, title), React.createElement(Icon, {
    icon: "arrow-up",
    className: "".concat(prefix, "-arrow")
  })), React.createElement(Motion, {
    transition: "slide",
    component: "div"
  }, open && React.createElement("div", null, children)));
};

SubNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.any,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.node
};
SubNav.defaultProps = {
  children: null,
  className: undefined,
  icon: undefined,
  title: null
};
export default SubNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1N1Yk5hdi50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkljb24iLCJOYXZDb250ZXh0IiwiTW90aW9uIiwicHJlZml4IiwiU3ViTmF2IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpY29uIiwiaW5kZXgiLCJ0aXRsZSIsIm90aGVyUHJvcHMiLCJvcGVuSW5kZXhlcyIsIm9uT3BlbkNoYW5nZSIsIm9wZW4iLCJpbmNsdWRlcyIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImFueSIsIm9uZU9mVHlwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsUUFBa0MsT0FBbEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLElBQVAsTUFBZ0MsU0FBaEM7QUFDQSxTQUFTQyxVQUFULFFBQTJCLFdBQTNCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxVQUFmOztBQTZCQSxJQUFNQyxNQUE4QixHQUFHLFNBQWpDQSxNQUFpQyxPQU9uQjtBQUFBLE1BTmxCQyxRQU1rQixRQU5sQkEsUUFNa0I7QUFBQSxNQUxsQkMsU0FLa0IsUUFMbEJBLFNBS2tCO0FBQUEsTUFKbEJDLElBSWtCLFFBSmxCQSxJQUlrQjtBQUFBLE1BSGxCQyxLQUdrQixRQUhsQkEsS0FHa0I7QUFBQSxNQUZsQkMsS0FFa0IsUUFGbEJBLEtBRWtCO0FBQUEsTUFEZkMsVUFDZTs7QUFBQSxvQkFDb0JiLFVBQVUsQ0FBQ0ksVUFBRCxDQUQ5QjtBQUFBLE1BQ1ZVLFdBRFUsZUFDVkEsV0FEVTtBQUFBLE1BQ0dDLFlBREgsZUFDR0EsWUFESDs7QUFHbEIsTUFBTUMsSUFBSSxHQUFHLENBQUNGLFdBQVcsSUFBSSxFQUFoQixFQUFvQkcsUUFBcEIsQ0FBNkJOLEtBQTdCLENBQWI7QUFFQSxNQUFNTyxRQUFRLEdBQUdoQixVQUFVLENBQUNPLFNBQUQsWUFBZUgsTUFBZix5Q0FDckJBLE1BRHFCLFlBQ0xVLElBREssRUFBM0I7QUFJQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVFO0FBQWhCLEtBQThCTCxVQUE5QixHQUNFO0FBQ0UsSUFBQSxTQUFTLFlBQUtQLE1BQUwsY0FEWDtBQUVFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSVMsWUFBSixFQUFrQjtBQUNoQkEsUUFBQUEsWUFBWSxDQUFDSixLQUFELENBQVo7QUFDRDtBQUNGLEtBTkg7QUFPRSxJQUFBLElBQUksRUFBQztBQVBQLEtBU0dELElBQUksSUFBSSxvQkFBQyxJQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUVBLElBQVo7QUFBa0IsSUFBQSxTQUFTLFlBQUtKLE1BQUw7QUFBM0IsSUFUWCxFQVVFO0FBQUssSUFBQSxTQUFTLFlBQUtBLE1BQUw7QUFBZCxLQUE4Q00sS0FBOUMsQ0FWRixFQVdFLG9CQUFDLElBQUQ7QUFBTSxJQUFBLElBQUksRUFBQyxVQUFYO0FBQXNCLElBQUEsU0FBUyxZQUFLTixNQUFMO0FBQS9CLElBWEYsQ0FERixFQWNFLG9CQUFDLE1BQUQ7QUFBUSxJQUFBLFVBQVUsRUFBQyxPQUFuQjtBQUEyQixJQUFBLFNBQVMsRUFBQztBQUFyQyxLQUNHVSxJQUFJLElBQUksaUNBQU1SLFFBQU4sQ0FEWCxDQWRGLENBREY7QUFvQkQsQ0FwQ0Q7O0FBc0NBRCxNQUFNLENBQUNZLFNBQVAsR0FBbUI7QUFJakJYLEVBQUFBLFFBQVEsRUFBRVAsU0FBUyxDQUFDbUIsSUFKSDtBQVFqQlgsRUFBQUEsU0FBUyxFQUFFUixTQUFTLENBQUNvQixNQVJKO0FBWWpCWCxFQUFBQSxJQUFJLEVBQUVULFNBQVMsQ0FBQ3FCLEdBWkM7QUFnQmpCWCxFQUFBQSxLQUFLLEVBQUVWLFNBQVMsQ0FBQ3NCLFNBQVYsQ0FBb0IsQ0FBQ3RCLFNBQVMsQ0FBQ29CLE1BQVgsRUFBbUJwQixTQUFTLENBQUN1QixNQUE3QixDQUFwQixFQUEwREMsVUFoQmhEO0FBb0JqQmIsRUFBQUEsS0FBSyxFQUFFWCxTQUFTLENBQUNtQjtBQXBCQSxDQUFuQjtBQXVCQWIsTUFBTSxDQUFDbUIsWUFBUCxHQUFzQjtBQUNwQmxCLEVBQUFBLFFBQVEsRUFBRSxJQURVO0FBRXBCQyxFQUFBQSxTQUFTLEVBQUVrQixTQUZTO0FBR3BCakIsRUFBQUEsSUFBSSxFQUFFaUIsU0FIYztBQUlwQmYsRUFBQUEsS0FBSyxFQUFFO0FBSmEsQ0FBdEI7QUFPQSxlQUFlTCxNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgTW90aW9uIGZyb20gXCIuLi9tb3Rpb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1uYXZcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWJOYXZQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruWbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUmVhY3QuUmVhY3RUZXh0XG4gIC8qKlxuICAgKiBzdWJuYXYg5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOWvvOiIquagjyAtIOWtkOWvvOiIqlxuICovXG5jb25zdCBTdWJOYXY6IFJlYWN0LkZDPElTdWJOYXZQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBpY29uLFxuICBpbmRleCxcbiAgdGl0bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElTdWJOYXZQcm9wcykgPT4ge1xuICBjb25zdCB7IG9wZW5JbmRleGVzLCBvbk9wZW5DaGFuZ2UgfSA9IHVzZUNvbnRleHQoTmF2Q29udGV4dClcblxuICBjb25zdCBvcGVuID0gKG9wZW5JbmRleGVzIHx8IFtdKS5pbmNsdWRlcyhpbmRleClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LXN1YmAsIHtcbiAgICBbYCR7cHJlZml4fS1vcGVuYF06IG9wZW4sXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXN1YlRpdGxlYH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChvbk9wZW5DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uT3BlbkNoYW5nZShpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgID5cbiAgICAgICAge2ljb24gJiYgPEljb24gaWNvbj17aWNvbn0gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfSAvPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3ViVGl0bGVDb250ZW50YH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8SWNvbiBpY29uPVwiYXJyb3ctdXBcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYXJyb3dgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TW90aW9uIHRyYW5zaXRpb249XCJzbGlkZVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICB7b3BlbiAmJiA8ZGl2PntjaGlsZHJlbn08L2Rpdj59XG4gICAgICA8L01vdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TdWJOYXYucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruWbvuagh1xuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOeLrOeri+eahCBpbmRleCByZXF1aXJlZFxuICAgKi9cbiAgaW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogc3VibmF2IOagh+mimFxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5TdWJOYXYuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgdGl0bGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Yk5hdlxuIl19