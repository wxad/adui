"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-form";

var Tip = function Tip(props) {
  var children = props.children,
      className = props.className,
      intent = props.intent,
      otherProps = _objectWithoutProperties(props, ["children", "className", "intent"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-tip"), "".concat(prefix, "-tip_").concat(intent));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), children);
};

Tip.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"])
};
Tip.defaultProps = {
  children: null,
  className: null,
  intent: "normal"
};
var _default = Tip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9UaXAudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIlRpcCIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpbnRlbnQiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQXFCQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQXNCO0FBQUEsTUFDeEJDLFFBRHdCLEdBQ3VCRCxLQUR2QixDQUN4QkMsUUFEd0I7QUFBQSxNQUNkQyxTQURjLEdBQ3VCRixLQUR2QixDQUNkRSxTQURjO0FBQUEsTUFDSEMsTUFERyxHQUN1QkgsS0FEdkIsQ0FDSEcsTUFERztBQUFBLE1BQ1FDLFVBRFIsNEJBQ3VCSixLQUR2Qjs7QUFHaEMsTUFBTUssUUFBUSxHQUFHLDRCQUNmSCxTQURlLFlBRVpKLE1BRlkscUJBR1pBLE1BSFksa0JBR0VLLE1BSEYsRUFBakI7QUFNQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVFO0FBQWhCLEtBQThCRCxVQUE5QixHQUNHSCxRQURILENBREY7QUFLRCxDQWREOztBQWdCQUYsR0FBRyxDQUFDTyxTQUFKLEdBQWdCO0FBSWRMLEVBQUFBLFFBQVEsRUFBRU0sc0JBQVVDLElBSk47QUFRZE4sRUFBQUEsU0FBUyxFQUFFSyxzQkFBVUUsTUFSUDtBQVlkTixFQUFBQSxNQUFNLEVBQUVJLHNCQUFVRyxLQUFWLENBQWdCLENBQ3RCLFFBRHNCLEVBRXRCLFNBRnNCLEVBR3RCLFNBSHNCLEVBSXRCLFNBSnNCLEVBS3RCLFFBTHNCLENBQWhCO0FBWk0sQ0FBaEI7QUFxQkFYLEdBQUcsQ0FBQ1ksWUFBSixHQUFtQjtBQUNqQlYsRUFBQUEsUUFBUSxFQUFFLElBRE87QUFFakJDLEVBQUFBLFNBQVMsRUFBRSxJQUZNO0FBR2pCQyxFQUFBQSxNQUFNLEVBQUU7QUFIUyxDQUFuQjtlQU1lSixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1mb3JtXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGlwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7nsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG59XG5cbi8qKlxuICog6KGo5Y2VIHRpcFxuICovXG5jb25zdCBUaXAgPSAocHJvcHM6IElUaXBQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGludGVudCwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgIGAke3ByZWZpeH0tdGlwYCxcbiAgICBgJHtwcmVmaXh9LXRpcF8ke2ludGVudH1gXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cblRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbn1cblxuVGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogbnVsbCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXBcbiJdfQ==