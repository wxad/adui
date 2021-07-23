"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-menu";

var SubMenu = function SubMenu(_ref) {
  var _classNames;

  var className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      index = _ref.index,
      title = _ref.title,
      otherProps = _objectWithoutProperties(_ref, ["className", "children", "disabled", "index", "title"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useContext = (0, _react.useContext)(_Context.MenuContext),
      minWidth = _useContext.minWidth,
      onExpandChange = _useContext.onExpandChange;

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-sub"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-sub_open"), open), _defineProperty(_classNames, "".concat(prefix, "-sub_disabled"), disabled), _classNames));

  var handleExpandChange = function handleExpandChange(bool) {
    if (onExpandChange) {
      onExpandChange(index, bool);
    }

    setOpen(bool);
  };

  var mouseEvents = {};

  if (!disabled) {
    mouseEvents = {
      onMouseEnter: function onMouseEnter() {
        return handleExpandChange(true);
      },
      onMouseLeave: function onMouseLeave() {
        return handleExpandChange(false);
      }
    };
  }

  return _react["default"].createElement("div", _extends({
    className: classSet,
    "data-index": index
  }, mouseEvents, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-subTitle")
  }, _react["default"].createElement("span", null, title), _react["default"].createElement(_icon["default"], {
    icon: "triangle-right",
    className: "".concat(prefix, "-icon")
  })), _react["default"].createElement("div", {
    className: "".concat(prefix, "-dropdown"),
    style: {
      minWidth: minWidth
    }
  }, children));
};

SubMenu.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  index: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  title: _propTypes["default"].node
};
SubMenu.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  title: null
};
var _default = SubMenu;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9TdWJNZW51LnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJTdWJNZW51IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImluZGV4IiwidGl0bGUiLCJvdGhlclByb3BzIiwib3BlbiIsInNldE9wZW4iLCJNZW51Q29udGV4dCIsIm1pbldpZHRoIiwib25FeHBhbmRDaGFuZ2UiLCJjbGFzc1NldCIsImhhbmRsZUV4cGFuZENoYW5nZSIsImJvb2wiLCJtb3VzZUV2ZW50cyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQTZCQSxJQUFNQyxPQUFnQyxHQUFHLFNBQW5DQSxPQUFtQyxPQU9wQjtBQUFBOztBQUFBLE1BTm5CQyxTQU1tQixRQU5uQkEsU0FNbUI7QUFBQSxNQUxuQkMsUUFLbUIsUUFMbkJBLFFBS21CO0FBQUEsTUFKbkJDLFFBSW1CLFFBSm5CQSxRQUltQjtBQUFBLE1BSG5CQyxLQUdtQixRQUhuQkEsS0FHbUI7QUFBQSxNQUZuQkMsS0FFbUIsUUFGbkJBLEtBRW1CO0FBQUEsTUFEaEJDLFVBQ2dCOztBQUFBLGtCQUNLLHFCQUFTLEtBQVQsQ0FETDtBQUFBO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBQUEsb0JBR2tCLHVCQUFXQyxvQkFBWCxDQUhsQjtBQUFBLE1BR1hDLFFBSFcsZUFHWEEsUUFIVztBQUFBLE1BR0RDLGNBSEMsZUFHREEsY0FIQzs7QUFLbkIsTUFBTUMsUUFBUSxHQUFHLDRCQUFXWCxTQUFYLFlBQXlCRixNQUF6QixxRUFDWEEsTUFEVyxnQkFDU1EsSUFEVCwwQ0FFWFIsTUFGVyxvQkFFYUksUUFGYixnQkFBakI7O0FBS0EsTUFBTVUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQW1CO0FBQzVDLFFBQUlILGNBQUosRUFBb0I7QUFDbEJBLE1BQUFBLGNBQWMsQ0FBQ1AsS0FBRCxFQUFRVSxJQUFSLENBQWQ7QUFDRDs7QUFDRE4sSUFBQUEsT0FBTyxDQUFDTSxJQUFELENBQVA7QUFDRCxHQUxEOztBQU9BLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFFQSxNQUFJLENBQUNaLFFBQUwsRUFBZTtBQUNiWSxJQUFBQSxXQUFXLEdBQUc7QUFDWkMsTUFBQUEsWUFBWSxFQUFFO0FBQUEsZUFBTUgsa0JBQWtCLENBQUMsSUFBRCxDQUF4QjtBQUFBLE9BREY7QUFFWkksTUFBQUEsWUFBWSxFQUFFO0FBQUEsZUFBTUosa0JBQWtCLENBQUMsS0FBRCxDQUF4QjtBQUFBO0FBRkYsS0FBZDtBQUlEOztBQUVELFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRUQsUUFEYjtBQUVFLGtCQUFZUjtBQUZkLEtBR01XLFdBSE4sRUFJTVQsVUFKTixHQU1FO0FBQUssSUFBQSxTQUFTLFlBQUtQLE1BQUw7QUFBZCxLQUNFLDhDQUFPTSxLQUFQLENBREYsRUFFRSxnQ0FBQyxnQkFBRDtBQUFNLElBQUEsSUFBSSxFQUFDLGdCQUFYO0FBQTRCLElBQUEsU0FBUyxZQUFLTixNQUFMO0FBQXJDLElBRkYsQ0FORixFQVVFO0FBQUssSUFBQSxTQUFTLFlBQUtBLE1BQUwsY0FBZDtBQUFzQyxJQUFBLEtBQUssRUFBRTtBQUFFVyxNQUFBQSxRQUFRLEVBQVJBO0FBQUY7QUFBN0MsS0FDR1IsUUFESCxDQVZGLENBREY7QUFnQkQsQ0FqREQ7O0FBbURBRixPQUFPLENBQUNrQixTQUFSLEdBQW9CO0FBSWxCaEIsRUFBQUEsUUFBUSxFQUFFaUIsc0JBQVVDLElBSkY7QUFRbEJuQixFQUFBQSxTQUFTLEVBQUVrQixzQkFBVUUsTUFSSDtBQVlsQmxCLEVBQUFBLFFBQVEsRUFBRWdCLHNCQUFVTCxJQVpGO0FBZ0JsQlYsRUFBQUEsS0FBSyxFQUFFZSxzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVJLE1BQTdCLENBQXBCLEVBQTBEQyxVQWhCL0M7QUFvQmxCbkIsRUFBQUEsS0FBSyxFQUFFYyxzQkFBVUM7QUFwQkMsQ0FBcEI7QUF1QkFwQixPQUFPLENBQUN5QixZQUFSLEdBQXVCO0FBQ3JCdkIsRUFBQUEsUUFBUSxFQUFFLElBRFc7QUFFckJELEVBQUFBLFNBQVMsRUFBRXlCLFNBRlU7QUFHckJ2QixFQUFBQSxRQUFRLEVBQUUsS0FIVztBQUlyQkUsRUFBQUEsS0FBSyxFQUFFO0FBSmMsQ0FBdkI7ZUFPZUwsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCB7IE1lbnVDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLW1lbnVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWJNZW51UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogQm9vbGVhblxuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUmVhY3QuUmVhY3RUZXh0XG4gIC8qKlxuICAgKiBzdWJuYXYg5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOihjOWKqOiPnOWNlSAtIOWtkOiPnOWNlVxuICovXG5jb25zdCBTdWJNZW51OiBSZWFjdC5GQzxJU3ViTWVudVByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBpbmRleCxcbiAgdGl0bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElTdWJNZW51UHJvcHMpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgeyBtaW5XaWR0aCwgb25FeHBhbmRDaGFuZ2UgfSA9IHVzZUNvbnRleHQoTWVudUNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1zdWJgLCB7XG4gICAgW2Ake3ByZWZpeH0tc3ViX29wZW5gXTogb3BlbixcbiAgICBbYCR7cHJlZml4fS1zdWJfZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlRXhwYW5kQ2hhbmdlID0gKGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgIG9uRXhwYW5kQ2hhbmdlKGluZGV4LCBib29sKVxuICAgIH1cbiAgICBzZXRPcGVuKGJvb2wpXG4gIH1cblxuICBsZXQgbW91c2VFdmVudHMgPSB7fVxuXG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBtb3VzZUV2ZW50cyA9IHtcbiAgICAgIG9uTW91c2VFbnRlcjogKCkgPT4gaGFuZGxlRXhwYW5kQ2hhbmdlKHRydWUpLFxuICAgICAgb25Nb3VzZUxlYXZlOiAoKSA9PiBoYW5kbGVFeHBhbmRDaGFuZ2UoZmFsc2UpLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgIGRhdGEtaW5kZXg9e2luZGV4fVxuICAgICAgey4uLm1vdXNlRXZlbnRzfVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3ViVGl0bGVgfT5cbiAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPEljb24gaWNvbj1cInRyaWFuZ2xlLXJpZ2h0XCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1kcm9wZG93bmB9IHN0eWxlPXt7IG1pbldpZHRoIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TdWJNZW51LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOeLrOeri+eahCBpbmRleCByZXF1aXJlZFxuICAgKi9cbiAgaW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogc3VibmF2IOagh+mimFxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5TdWJNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIHRpdGxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJNZW51XG4iXX0=