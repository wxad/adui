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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    className: "".concat(prefix, "-dropdown")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9TdWJNZW51LnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJTdWJNZW51IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImluZGV4IiwidGl0bGUiLCJvdGhlclByb3BzIiwib3BlbiIsInNldE9wZW4iLCJNZW51Q29udGV4dCIsIm9uRXhwYW5kQ2hhbmdlIiwiY2xhc3NTZXQiLCJoYW5kbGVFeHBhbmRDaGFuZ2UiLCJib29sIiwibW91c2VFdmVudHMiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQTZCQSxJQUFNQyxPQUErQyxHQUFHLFNBQWxEQSxPQUFrRCxPQU9uQztBQUFBOztBQUFBLE1BTm5CQyxTQU1tQixRQU5uQkEsU0FNbUI7QUFBQSxNQUxuQkMsUUFLbUIsUUFMbkJBLFFBS21CO0FBQUEsTUFKbkJDLFFBSW1CLFFBSm5CQSxRQUltQjtBQUFBLE1BSG5CQyxLQUdtQixRQUhuQkEsS0FHbUI7QUFBQSxNQUZuQkMsS0FFbUIsUUFGbkJBLEtBRW1CO0FBQUEsTUFEaEJDLFVBQ2dCOztBQUFBLGtCQUNLLHFCQUFTLEtBQVQsQ0FETDtBQUFBO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBQUEsb0JBR1EsdUJBQVdDLG9CQUFYLENBSFI7QUFBQSxNQUdYQyxjQUhXLGVBR1hBLGNBSFc7O0FBS25CLE1BQU1DLFFBQVEsR0FBRyw0QkFBV1YsU0FBWCxZQUF5QkYsTUFBekIscUVBQ1hBLE1BRFcsZ0JBQ1NRLElBRFQsMENBRVhSLE1BRlcsb0JBRWFJLFFBRmIsZ0JBQWpCOztBQUtBLE1BQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsSUFBRCxFQUFtQjtBQUM1QyxRQUFJSCxjQUFKLEVBQW9CO0FBQ2xCQSxNQUFBQSxjQUFjLENBQUNOLEtBQUQsRUFBUVMsSUFBUixDQUFkO0FBQ0Q7O0FBQ0RMLElBQUFBLE9BQU8sQ0FBQ0ssSUFBRCxDQUFQO0FBQ0QsR0FMRDs7QUFPQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsTUFBSSxDQUFDWCxRQUFMLEVBQWU7QUFDYlcsSUFBQUEsV0FBVyxHQUFHO0FBQ1pDLE1BQUFBLFlBQVksRUFBRTtBQUFBLGVBQU1ILGtCQUFrQixDQUFDLElBQUQsQ0FBeEI7QUFBQSxPQURGO0FBRVpJLE1BQUFBLFlBQVksRUFBRTtBQUFBLGVBQU1KLGtCQUFrQixDQUFDLEtBQUQsQ0FBeEI7QUFBQTtBQUZGLEtBQWQ7QUFJRDs7QUFFRCxTQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUVELFFBRGI7QUFFRSxrQkFBWVA7QUFGZCxLQUdNVSxXQUhOLEVBSU1SLFVBSk4sR0FNRTtBQUFLLElBQUEsU0FBUyxZQUFLUCxNQUFMO0FBQWQsS0FDRSw4Q0FBT00sS0FBUCxDQURGLEVBRUUsZ0NBQUMsZ0JBQUQ7QUFBTSxJQUFBLElBQUksRUFBQyxnQkFBWDtBQUE0QixJQUFBLFNBQVMsWUFBS04sTUFBTDtBQUFyQyxJQUZGLENBTkYsRUFVRTtBQUFLLElBQUEsU0FBUyxZQUFLQSxNQUFMO0FBQWQsS0FBdUNHLFFBQXZDLENBVkYsQ0FERjtBQWNELENBL0NEOztBQWlEQUYsT0FBTyxDQUFDaUIsU0FBUixHQUFvQjtBQUlsQmYsRUFBQUEsUUFBUSxFQUFFZ0Isc0JBQVVDLElBSkY7QUFRbEJsQixFQUFBQSxTQUFTLEVBQUVpQixzQkFBVUUsTUFSSDtBQVlsQmpCLEVBQUFBLFFBQVEsRUFBRWUsc0JBQVVMLElBWkY7QUFnQmxCVCxFQUFBQSxLQUFLLEVBQUVjLHNCQUFVRyxTQUFWLENBQW9CLENBQUNILHNCQUFVRSxNQUFYLEVBQW1CRixzQkFBVUksTUFBN0IsQ0FBcEIsRUFBMERDLFVBaEIvQztBQW9CbEJsQixFQUFBQSxLQUFLLEVBQUVhLHNCQUFVQztBQXBCQyxDQUFwQjtBQXVCQW5CLE9BQU8sQ0FBQ3dCLFlBQVIsR0FBdUI7QUFDckJ0QixFQUFBQSxRQUFRLEVBQUUsSUFEVztBQUVyQkQsRUFBQUEsU0FBUyxFQUFFd0IsU0FGVTtBQUdyQnRCLEVBQUFBLFFBQVEsRUFBRSxLQUhXO0FBSXJCRSxFQUFBQSxLQUFLLEVBQUU7QUFKYyxDQUF2QjtlQU9lTCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IHsgTWVudUNvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktbWVudVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1Yk1lbnVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBCb29sZWFuXG4gIC8qKlxuICAgKiDni6znq4vnmoQgaW5kZXggcmVxdWlyZWRcbiAgICovXG4gIGluZGV4OiBSZWFjdC5SZWFjdFRleHRcbiAgLyoqXG4gICAqIHN1Ym5hdiDmoIfpophcbiAgICovXG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog6KGM5Yqo6I+c5Y2VIC0g5a2Q6I+c5Y2VXG4gKi9cbmNvbnN0IFN1Yk1lbnU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElTdWJNZW51UHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgZGlzYWJsZWQsXG4gIGluZGV4LFxuICB0aXRsZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSVN1Yk1lbnVQcm9wcykgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB7IG9uRXhwYW5kQ2hhbmdlIH0gPSB1c2VDb250ZXh0KE1lbnVDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tc3ViYCwge1xuICAgIFtgJHtwcmVmaXh9LXN1Yl9vcGVuYF06IG9wZW4sXG4gICAgW2Ake3ByZWZpeH0tc3ViX2Rpc2FibGVkYF06IGRpc2FibGVkLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUV4cGFuZENoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKG9uRXhwYW5kQ2hhbmdlKSB7XG4gICAgICBvbkV4cGFuZENoYW5nZShpbmRleCwgYm9vbClcbiAgICB9XG4gICAgc2V0T3Blbihib29sKVxuICB9XG5cbiAgbGV0IG1vdXNlRXZlbnRzID0ge31cblxuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgbW91c2VFdmVudHMgPSB7XG4gICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IGhhbmRsZUV4cGFuZENoYW5nZSh0cnVlKSxcbiAgICAgIG9uTW91c2VMZWF2ZTogKCkgPT4gaGFuZGxlRXhwYW5kQ2hhbmdlKGZhbHNlKSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBkYXRhLWluZGV4PXtpbmRleH1cbiAgICAgIHsuLi5tb3VzZUV2ZW50c31cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXN1YlRpdGxlYH0+XG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgIDxJY29uIGljb249XCJ0cmlhbmdsZS1yaWdodFwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZHJvcGRvd25gfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuU3ViTWVudS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDni6znq4vnmoQgaW5kZXggcmVxdWlyZWRcbiAgICovXG4gIGluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIHN1Ym5hdiDmoIfpophcbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuU3ViTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICB0aXRsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ViTWVudVxuIl19