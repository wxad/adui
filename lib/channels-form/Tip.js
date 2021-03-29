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

var prefix = "adui-channels-form";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZm9ybS9UaXAudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIlRpcCIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpbnRlbnQiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxvQkFBZjs7QUFxQkEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFzQjtBQUFBLE1BQ3hCQyxRQUR3QixHQUN1QkQsS0FEdkIsQ0FDeEJDLFFBRHdCO0FBQUEsTUFDZEMsU0FEYyxHQUN1QkYsS0FEdkIsQ0FDZEUsU0FEYztBQUFBLE1BQ0hDLE1BREcsR0FDdUJILEtBRHZCLENBQ0hHLE1BREc7QUFBQSxNQUNRQyxVQURSLDRCQUN1QkosS0FEdkI7O0FBR2hDLE1BQU1LLFFBQVEsR0FBRyw0QkFDZkgsU0FEZSxZQUVaSixNQUZZLHFCQUdaQSxNQUhZLGtCQUdFSyxNQUhGLEVBQWpCO0FBTUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRTtBQUFoQixLQUE4QkQsVUFBOUIsR0FDR0gsUUFESCxDQURGO0FBS0QsQ0FkRDs7QUFnQkFGLEdBQUcsQ0FBQ08sU0FBSixHQUFnQjtBQUlkTCxFQUFBQSxRQUFRLEVBQUVNLHNCQUFVQyxJQUpOO0FBUWROLEVBQUFBLFNBQVMsRUFBRUssc0JBQVVFLE1BUlA7QUFZZE4sRUFBQUEsTUFBTSxFQUFFSSxzQkFBVUcsS0FBVixDQUFnQixDQUN0QixRQURzQixFQUV0QixTQUZzQixFQUd0QixTQUhzQixFQUl0QixTQUpzQixFQUt0QixRQUxzQixDQUFoQjtBQVpNLENBQWhCO0FBcUJBWCxHQUFHLENBQUNZLFlBQUosR0FBbUI7QUFDakJWLEVBQUFBLFFBQVEsRUFBRSxJQURPO0FBRWpCQyxFQUFBQSxTQUFTLEVBQUUsSUFGTTtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFO0FBSFMsQ0FBbkI7ZUFNZUosRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtZm9ybVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRpcFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxufVxuXG4vKipcbiAqIOihqOWNlSB0aXBcbiAqL1xuY29uc3QgVGlwID0gKHByb3BzOiBJVGlwUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpbnRlbnQsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LXRpcGAsXG4gICAgYCR7cHJlZml4fS10aXBfJHtpbnRlbnR9YFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5UaXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG59XG5cblRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIGludGVudDogXCJub3JtYWxcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlwXG4iXX0=