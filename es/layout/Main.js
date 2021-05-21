function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style";
var prefix = "adui-layout";

var Main = function Main(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("main", _extends({
    className: classNames(className, "".concat(prefix, "-main"))
  }, otherProps), children);
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
Main.defaultProps = {
  children: "",
  className: undefined
};
export default Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L01haW4udHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInByZWZpeCIsIk1haW4iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm90aGVyUHJvcHMiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxhQUFmOztBQWlCQSxJQUFNQyxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QjtBQUFBLE1BQ2pDQyxRQURpQyxRQUNqQ0EsUUFEaUM7QUFBQSxNQUVqQ0MsU0FGaUMsUUFFakNBLFNBRmlDO0FBQUEsTUFHOUJDLFVBSDhCOztBQUFBLFNBS2pDO0FBQU0sSUFBQSxTQUFTLEVBQUVMLFVBQVUsQ0FBQ0ksU0FBRCxZQUFlSCxNQUFmO0FBQTNCLEtBQThESSxVQUE5RCxHQUNHRixRQURILENBTGlDO0FBQUEsQ0FBbkM7O0FBVUFELElBQUksQ0FBQ0ksU0FBTCxHQUFpQjtBQUlmSCxFQUFBQSxRQUFRLEVBQUVKLFNBQVMsQ0FBQ1EsSUFKTDtBQVFmSCxFQUFBQSxTQUFTLEVBQUVMLFNBQVMsQ0FBQ1M7QUFSTixDQUFqQjtBQVdBTixJQUFJLENBQUNPLFlBQUwsR0FBb0I7QUFDbEJOLEVBQUFBLFFBQVEsRUFBRSxFQURRO0FBRWxCQyxFQUFBQSxTQUFTLEVBQUVNO0FBRk8sQ0FBcEI7QUFLQSxlQUFlUixJQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1sYXlvdXRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElNYWluUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbi8qKlxuICog5biD5bGAIC0g5Li75L2T5YaF5a65IGA8bWFpbiAvPmBcbiAqL1xuY29uc3QgTWFpbjogUmVhY3QuRkM8SU1haW5Qcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICAuLi5vdGhlclByb3BzXG59OiBJTWFpblByb3BzKSA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tbWFpbmApfSB7Li4ub3RoZXJQcm9wc30+XG4gICAge2NoaWxkcmVufVxuICA8L21haW4+XG4pXG5cbk1haW4ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuTWFpbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl19