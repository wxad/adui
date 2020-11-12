"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _confirm = _interopRequireDefault(require("./confirm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INTENTS = ["info", "success", "warning", "danger"];

_Dialog["default"].confirm = function (props) {
  var config = _objectSpread({}, props, {
    type: "confirm"
  });

  return (0, _confirm["default"])(config);
};

_Dialog["default"].inform = function (props) {
  var config = _objectSpread({}, props, {
    type: "inform"
  });

  return (0, _confirm["default"])(config);
};

INTENTS.forEach(function (intent) {
  _Dialog["default"][intent] = function (props) {
    var style = props.style,
        otherProps = _objectWithoutProperties(props, ["style"]);

    var config = _objectSpread({}, otherProps, {
      intent: intent,
      style: _objectSpread({
        maxWidth: "560px"
      }, style)
    });

    return (0, _confirm["default"])(config);
  };
});
var _default = _Dialog["default"];
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJTlRFTlRTIiwiRGlhbG9nIiwiY29uZmlybSIsInByb3BzIiwiY29uZmlnIiwidHlwZSIsImluZm9ybSIsImZvckVhY2giLCJpbnRlbnQiLCJzdHlsZSIsIm90aGVyUHJvcHMiLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNkLE1BRGMsRUFFZCxTQUZjLEVBR2QsU0FIYyxFQUlkLFFBSmMsQ0FBaEI7O0FBT0FDLG1CQUFPQyxPQUFQLEdBQWlCLFVBQUNDLEtBQUQsRUFBeUI7QUFDeEMsTUFBTUMsTUFBTSxxQkFDUEQsS0FETztBQUVWRSxJQUFBQSxJQUFJLEVBQUU7QUFGSSxJQUFaOztBQUlBLFNBQU8seUJBQVFELE1BQVIsQ0FBUDtBQUNELENBTkQ7O0FBUUFILG1CQUFPSyxNQUFQLEdBQWdCLFVBQUNILEtBQUQsRUFBeUI7QUFDdkMsTUFBTUMsTUFBTSxxQkFDUEQsS0FETztBQUVWRSxJQUFBQSxJQUFJLEVBQUU7QUFGSSxJQUFaOztBQUlBLFNBQU8seUJBQVFELE1BQVIsQ0FBUDtBQUNELENBTkQ7O0FBUUFKLE9BQU8sQ0FBQ08sT0FBUixDQUFnQixVQUFBQyxNQUFNLEVBQUk7QUFDeEJQLHFCQUFPTyxNQUFQLElBQWlCLFVBQUNMLEtBQUQsRUFBeUI7QUFBQSxRQUNoQ00sS0FEZ0MsR0FDUE4sS0FETyxDQUNoQ00sS0FEZ0M7QUFBQSxRQUN0QkMsVUFEc0IsNEJBQ1BQLEtBRE87O0FBR3hDLFFBQU1DLE1BQU0scUJBQ1BNLFVBRE87QUFFVkYsTUFBQUEsTUFBTSxFQUFOQSxNQUZVO0FBR1ZDLE1BQUFBLEtBQUs7QUFDSEUsUUFBQUEsUUFBUSxFQUFFO0FBRFAsU0FFQUYsS0FGQTtBQUhLLE1BQVo7O0FBUUEsV0FBTyx5QkFBUUwsTUFBUixDQUFQO0FBQ0QsR0FaRDtBQWFELENBZEQ7ZUFnQmVILGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZywgeyBJRGlhbG9nUHJvcHMgfSBmcm9tIFwiLi9EaWFsb2dcIlxuaW1wb3J0IGNvbmZpcm0gZnJvbSBcIi4vY29uZmlybVwiXG5cbmNvbnN0IElOVEVOVFMgPSBbXG4gIFwiaW5mb1wiIGFzIFwiaW5mb1wiLFxuICBcInN1Y2Nlc3NcIiBhcyBcInN1Y2Nlc3NcIixcbiAgXCJ3YXJuaW5nXCIgYXMgXCJ3YXJuaW5nXCIsXG4gIFwiZGFuZ2VyXCIgYXMgXCJkYW5nZXJcIixcbl1cblxuRGlhbG9nLmNvbmZpcm0gPSAocHJvcHM6IElEaWFsb2dQcm9wcykgPT4ge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4ucHJvcHMsXG4gICAgdHlwZTogXCJjb25maXJtXCIgYXMgXCJjb25maXJtXCIsXG4gIH1cbiAgcmV0dXJuIGNvbmZpcm0oY29uZmlnKVxufVxuXG5EaWFsb2cuaW5mb3JtID0gKHByb3BzOiBJRGlhbG9nUHJvcHMpID0+IHtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIC4uLnByb3BzLFxuICAgIHR5cGU6IFwiaW5mb3JtXCIgYXMgXCJpbmZvcm1cIixcbiAgfVxuICByZXR1cm4gY29uZmlybShjb25maWcpXG59XG5cbklOVEVOVFMuZm9yRWFjaChpbnRlbnQgPT4ge1xuICBEaWFsb2dbaW50ZW50XSA9IChwcm9wczogSURpYWxvZ1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzdHlsZSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLm90aGVyUHJvcHMsXG4gICAgICBpbnRlbnQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBtYXhXaWR0aDogXCI1NjBweFwiLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH0sXG4gICAgfVxuICAgIHJldHVybiBjb25maXJtKGNvbmZpZylcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nXG4iXX0=