function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style";
var prefix = "adui-form";

var Tip = function Tip(props) {
  var children = props.children,
      className = props.className,
      intent = props.intent,
      otherProps = _objectWithoutProperties(props, ["children", "className", "intent"]);

  var classSet = classNames(className, "".concat(prefix, "-tip"), "".concat(prefix, "-tip_").concat(intent));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), children);
};

Tip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"])
};
Tip.defaultProps = {
  children: null,
  className: null,
  intent: "normal"
};
export default Tip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9UaXAudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInByZWZpeCIsIlRpcCIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpbnRlbnQiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLFdBQWY7O0FBcUJBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBc0I7QUFBQSxNQUN4QkMsUUFEd0IsR0FDdUJELEtBRHZCLENBQ3hCQyxRQUR3QjtBQUFBLE1BQ2RDLFNBRGMsR0FDdUJGLEtBRHZCLENBQ2RFLFNBRGM7QUFBQSxNQUNIQyxNQURHLEdBQ3VCSCxLQUR2QixDQUNIRyxNQURHO0FBQUEsTUFDUUMsVUFEUiw0QkFDdUJKLEtBRHZCOztBQUdoQyxNQUFNSyxRQUFRLEdBQUdSLFVBQVUsQ0FDekJLLFNBRHlCLFlBRXRCSixNQUZzQixxQkFHdEJBLE1BSHNCLGtCQUdSSyxNQUhRLEVBQTNCO0FBTUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRTtBQUFoQixLQUE4QkQsVUFBOUIsR0FDR0gsUUFESCxDQURGO0FBS0QsQ0FkRDs7QUFnQkFGLEdBQUcsQ0FBQ08sU0FBSixHQUFnQjtBQUlkTCxFQUFBQSxRQUFRLEVBQUVMLFNBQVMsQ0FBQ1csSUFKTjtBQVFkTCxFQUFBQSxTQUFTLEVBQUVOLFNBQVMsQ0FBQ1ksTUFSUDtBQVlkTCxFQUFBQSxNQUFNLEVBQUVQLFNBQVMsQ0FBQ2EsS0FBVixDQUFnQixDQUN0QixRQURzQixFQUV0QixTQUZzQixFQUd0QixTQUhzQixFQUl0QixTQUpzQixFQUt0QixRQUxzQixDQUFoQjtBQVpNLENBQWhCO0FBcUJBVixHQUFHLENBQUNXLFlBQUosR0FBbUI7QUFDakJULEVBQUFBLFFBQVEsRUFBRSxJQURPO0FBRWpCQyxFQUFBQSxTQUFTLEVBQUUsSUFGTTtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFO0FBSFMsQ0FBbkI7QUFNQSxlQUFlSixHQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1mb3JtXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGlwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7nsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG59XG5cbi8qKlxuICog6KGo5Y2VIHRpcFxuICovXG5jb25zdCBUaXAgPSAocHJvcHM6IElUaXBQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGludGVudCwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgIGAke3ByZWZpeH0tdGlwYCxcbiAgICBgJHtwcmVmaXh9LXRpcF8ke2ludGVudH1gXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cblRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbn1cblxuVGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXBcbiJdfQ==