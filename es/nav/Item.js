function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import { NavContext } from "./Context";
import "./style";
var prefix = "adui-nav";

var Item = function Item(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      icon = _ref.icon,
      index = _ref.index,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "disabled", "icon", "index"]);

  var _useContext = useContext(NavContext),
      selectedIndex = _useContext.selectedIndex,
      onChange = _useContext.onChange;

  var classSet = classNames(className, "".concat(prefix, "-item"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-item_selected"), index === selectedIndex), _defineProperty(_classNames, "".concat(prefix, "-item_disabled"), disabled), _classNames));
  return React.createElement("div", _extends({
    className: classSet,
    onClick: function onClick() {
      if (!disabled && onChange) {
        onChange(index);
      }
    },
    role: "none"
  }, otherProps), icon && React.createElement(Icon, {
    icon: icon,
    className: "".concat(prefix, "-icon")
  }), children);
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.any,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
Item.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  icon: undefined
};
export default Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L0l0ZW0udHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJY29uIiwiTmF2Q29udGV4dCIsInByZWZpeCIsIkl0ZW0iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiaWNvbiIsImluZGV4Iiwib3RoZXJQcm9wcyIsInNlbGVjdGVkSW5kZXgiLCJvbkNoYW5nZSIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImJvb2wiLCJhbnkiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFVBQWhCLFFBQWtDLE9BQWxDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxJQUFQLE1BQWdDLFNBQWhDO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixXQUEzQjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxVQUFmOztBQTZCQSxJQUFNQyxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QixPQU9qQjtBQUFBOztBQUFBLE1BTmhCQyxRQU1nQixRQU5oQkEsUUFNZ0I7QUFBQSxNQUxoQkMsU0FLZ0IsUUFMaEJBLFNBS2dCO0FBQUEsTUFKaEJDLFFBSWdCLFFBSmhCQSxRQUlnQjtBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSxNQUZoQkMsS0FFZ0IsUUFGaEJBLEtBRWdCO0FBQUEsTUFEYkMsVUFDYTs7QUFBQSxvQkFDb0JaLFVBQVUsQ0FBQ0ksVUFBRCxDQUQ5QjtBQUFBLE1BQ1JTLGFBRFEsZUFDUkEsYUFEUTtBQUFBLE1BQ09DLFFBRFAsZUFDT0EsUUFEUDs7QUFHaEIsTUFBTUMsUUFBUSxHQUFHYixVQUFVLENBQUNNLFNBQUQsWUFBZUgsTUFBZixzRUFDckJBLE1BRHFCLHFCQUNJTSxLQUFLLEtBQUtFLGFBRGQsMENBRXJCUixNQUZxQixxQkFFSUksUUFGSixnQkFBM0I7QUFLQSxTQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUVNLFFBRGI7QUFFRSxJQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLFVBQUksQ0FBQ04sUUFBRCxJQUFhSyxRQUFqQixFQUEyQjtBQUN6QkEsUUFBQUEsUUFBUSxDQUFDSCxLQUFELENBQVI7QUFDRDtBQUNGLEtBTkg7QUFPRSxJQUFBLElBQUksRUFBQztBQVBQLEtBUU1DLFVBUk4sR0FVR0YsSUFBSSxJQUFJLG9CQUFDLElBQUQ7QUFBTSxJQUFBLElBQUksRUFBRUEsSUFBWjtBQUFrQixJQUFBLFNBQVMsWUFBS0wsTUFBTDtBQUEzQixJQVZYLEVBV0dFLFFBWEgsQ0FERjtBQWVELENBOUJEOztBQWdDQUQsSUFBSSxDQUFDVSxTQUFMLEdBQWlCO0FBSWZULEVBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDZ0IsSUFKTDtBQVFmVCxFQUFBQSxTQUFTLEVBQUVQLFNBQVMsQ0FBQ2lCLE1BUk47QUFZZlQsRUFBQUEsUUFBUSxFQUFFUixTQUFTLENBQUNrQixJQVpMO0FBZ0JmVCxFQUFBQSxJQUFJLEVBQUVULFNBQVMsQ0FBQ21CLEdBaEJEO0FBb0JmVCxFQUFBQSxLQUFLLEVBQUVWLFNBQVMsQ0FBQ29CLFNBQVYsQ0FBb0IsQ0FBQ3BCLFNBQVMsQ0FBQ2lCLE1BQVgsRUFBbUJqQixTQUFTLENBQUNxQixNQUE3QixDQUFwQixFQUEwREM7QUFwQmxELENBQWpCO0FBdUJBakIsSUFBSSxDQUFDa0IsWUFBTCxHQUFvQjtBQUNsQmpCLEVBQUFBLFFBQVEsRUFBRSxJQURRO0FBRWxCQyxFQUFBQSxTQUFTLEVBQUVpQixTQUZPO0FBR2xCaEIsRUFBQUEsUUFBUSxFQUFFLEtBSFE7QUFJbEJDLEVBQUFBLElBQUksRUFBRWU7QUFKWSxDQUFwQjtBQU9BLGVBQWVuQixJQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLW5hdlwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDorr7nva7lm77moIdcbiAgICovXG4gIGljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOeLrOeri+eahCBpbmRleCByZXF1aXJlZFxuICAgKi9cbiAgaW5kZXg6IFJlYWN0LlJlYWN0VGV4dFxufVxuXG4vKipcbiAqIOWvvOiIquagjyAtIGl0ZW1cbiAqL1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SUl0ZW1Qcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkaXNhYmxlZCxcbiAgaWNvbixcbiAgaW5kZXgsXG4gIC4uLm90aGVyUHJvcHNcbn06IElJdGVtUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RlZEluZGV4LCBvbkNoYW5nZSB9ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0taXRlbWAsIHtcbiAgICBbYCR7cHJlZml4fS1pdGVtX3NlbGVjdGVkYF06IGluZGV4ID09PSBzZWxlY3RlZEluZGV4LFxuICAgIFtgJHtwcmVmaXh9LWl0ZW1fZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBpZiAoIWRpc2FibGVkICYmIG9uQ2hhbmdlKSB7XG4gICAgICAgICAgb25DaGFuZ2UoaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICByb2xlPVwibm9uZVwiXG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICB7aWNvbiAmJiA8SWNvbiBpY29uPXtpY29ufSBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+fVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6K6+572u5Zu+5qCHXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG59XG5cbkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaWNvbjogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtXG4iXX0=