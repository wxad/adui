"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

var _builtinPlacements = require("./builtinPlacements");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PopTrigger = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      popup = _ref.popup,
      popupVisible = _ref.popupVisible,
      otherProps = _objectWithoutProperties(_ref, ["children", "popup", "popupVisible"]);

  var visibleProp = {};

  if (popupVisible !== null) {
    visibleProp.popupVisible = popupVisible;
  }

  return _react["default"].createElement(_rcTrigger["default"], _extends({
    ref: ref,
    popup: typeof popup === "string" ? _react["default"].createElement("div", null, popup) : popup
  }, visibleProp, otherProps), typeof children === "string" ? _react["default"].createElement("span", null, children) : children);
});
PopTrigger.displayName = "PopTrigger";
PopTrigger.propTypes = {
  action: _propTypes["default"].any,
  builtinPlacements: _propTypes["default"].object,
  children: _propTypes["default"].node,
  defaultPopupVisible: _propTypes["default"].bool,
  destroyPopupOnHide: _propTypes["default"].bool,
  getPopupContainer: _propTypes["default"].func,
  mouseEnterDelay: _propTypes["default"].number,
  mouseLeaveDelay: _propTypes["default"].number,
  popup: _propTypes["default"].node.isRequired,
  popupAlign: _propTypes["default"].object,
  popupClassName: _propTypes["default"].string,
  popupPlacement: _propTypes["default"].oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  popupStyle: _propTypes["default"].object,
  popupTransitionName: _propTypes["default"].string,
  popupVisible: _propTypes["default"].oneOf([null, true, false])
};
PopTrigger.defaultProps = {
  action: ["hover"],
  builtinPlacements: _builtinPlacements.builtinPlacements,
  children: "",
  defaultPopupVisible: false,
  destroyPopupOnHide: false,
  getPopupContainer: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  popupAlign: null,
  popupClassName: "",
  popupPlacement: "bottom",
  popupStyle: null,
  popupTransitionName: undefined,
  popupVisible: null
};
var _default = PopTrigger;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wLXRyaWdnZXIvUG9wVHJpZ2dlci50c3giXSwibmFtZXMiOlsiUG9wVHJpZ2dlciIsInJlZiIsImNoaWxkcmVuIiwicG9wdXAiLCJwb3B1cFZpc2libGUiLCJvdGhlclByb3BzIiwidmlzaWJsZVByb3AiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImFjdGlvbiIsIlByb3BUeXBlcyIsImFueSIsImJ1aWx0aW5QbGFjZW1lbnRzIiwib2JqZWN0Iiwibm9kZSIsImRlZmF1bHRQb3B1cFZpc2libGUiLCJib29sIiwiZGVzdHJveVBvcHVwT25IaWRlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5IiwiaXNSZXF1aXJlZCIsInBvcHVwQWxpZ24iLCJwb3B1cENsYXNzTmFtZSIsInN0cmluZyIsInBvcHVwUGxhY2VtZW50Iiwib25lT2YiLCJwb3B1cFN0eWxlIiwicG9wdXBUcmFuc2l0aW9uTmFtZSIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBMkRBLElBQU1BLFVBRUwsR0FBRyx1QkFDRixnQkFBcUVDLEdBQXJFLEVBQTZFO0FBQUEsTUFBMUVDLFFBQTBFLFFBQTFFQSxRQUEwRTtBQUFBLE1BQWhFQyxLQUFnRSxRQUFoRUEsS0FBZ0U7QUFBQSxNQUF6REMsWUFBeUQsUUFBekRBLFlBQXlEO0FBQUEsTUFBeENDLFVBQXdDOztBQUMzRSxNQUFNQyxXQUFxQixHQUFHLEVBQTlCOztBQUVBLE1BQUlGLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QkUsSUFBQUEsV0FBVyxDQUFDRixZQUFaLEdBQTJCQSxZQUEzQjtBQUNEOztBQUVELFNBQ0UsZ0NBQUMscUJBQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRUgsR0FEUDtBQUVFLElBQUEsS0FBSyxFQUFFLE9BQU9FLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsNkNBQU1BLEtBQU4sQ0FBNUIsR0FBaURBO0FBRjFELEtBR01HLFdBSE4sRUFJTUQsVUFKTixHQU1HLE9BQU9ILFFBQVAsS0FBb0IsUUFBcEIsR0FBK0IsOENBQU9BLFFBQVAsQ0FBL0IsR0FBeURBLFFBTjVELENBREY7QUFVRCxDQWxCQyxDQUZKO0FBdUJBRixVQUFVLENBQUNPLFdBQVgsR0FBeUIsWUFBekI7QUFFQVAsVUFBVSxDQUFDUSxTQUFYLEdBQXVCO0FBSXJCQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxHQUpHO0FBUXJCQyxFQUFBQSxpQkFBaUIsRUFBRUYsc0JBQVVHLE1BUlI7QUFZckJYLEVBQUFBLFFBQVEsRUFBRVEsc0JBQVVJLElBWkM7QUFnQnJCQyxFQUFBQSxtQkFBbUIsRUFBRUwsc0JBQVVNLElBaEJWO0FBb0JyQkMsRUFBQUEsa0JBQWtCLEVBQUVQLHNCQUFVTSxJQXBCVDtBQXdCckJFLEVBQUFBLGlCQUFpQixFQUFFUixzQkFBVVMsSUF4QlI7QUE0QnJCQyxFQUFBQSxlQUFlLEVBQUVWLHNCQUFVVyxNQTVCTjtBQWdDckJDLEVBQUFBLGVBQWUsRUFBRVosc0JBQVVXLE1BaENOO0FBb0NyQmxCLEVBQUFBLEtBQUssRUFBRU8sc0JBQVVJLElBQVYsQ0FBZVMsVUFwQ0Q7QUF3Q3JCQyxFQUFBQSxVQUFVLEVBQUVkLHNCQUFVRyxNQXhDRDtBQTRDckJZLEVBQUFBLGNBQWMsRUFBRWYsc0JBQVVnQixNQTVDTDtBQW1EckJDLEVBQUFBLGNBQWMsRUFBRWpCLHNCQUFVa0IsS0FBVixDQUFnQixDQUM5QixLQUQ4QixFQUU5QixNQUY4QixFQUc5QixPQUg4QixFQUk5QixRQUo4QixFQUs5QixTQUw4QixFQU05QixVQU44QixFQU85QixZQVA4QixFQVE5QixhQVI4QixFQVM5QixTQVQ4QixFQVU5QixZQVY4QixFQVc5QixVQVg4QixFQVk5QixhQVo4QixDQUFoQixDQW5ESztBQW9FckJDLEVBQUFBLFVBQVUsRUFBRW5CLHNCQUFVRyxNQXBFRDtBQXdFckJpQixFQUFBQSxtQkFBbUIsRUFBRXBCLHNCQUFVZ0IsTUF4RVY7QUE0RXJCdEIsRUFBQUEsWUFBWSxFQUFFTSxzQkFBVWtCLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsQ0FBaEI7QUE1RU8sQ0FBdkI7QUErRUE1QixVQUFVLENBQUMrQixZQUFYLEdBQTBCO0FBQ3hCdEIsRUFBQUEsTUFBTSxFQUFFLENBQUMsT0FBRCxDQURnQjtBQUV4QkcsRUFBQUEsaUJBQWlCLEVBQWpCQSxvQ0FGd0I7QUFHeEJWLEVBQUFBLFFBQVEsRUFBRSxFQUhjO0FBSXhCYSxFQUFBQSxtQkFBbUIsRUFBRSxLQUpHO0FBS3hCRSxFQUFBQSxrQkFBa0IsRUFBRSxLQUxJO0FBTXhCQyxFQUFBQSxpQkFBaUIsRUFBRSxJQU5LO0FBT3hCRSxFQUFBQSxlQUFlLEVBQUUsQ0FQTztBQVF4QkUsRUFBQUEsZUFBZSxFQUFFLEdBUk87QUFTeEJFLEVBQUFBLFVBQVUsRUFBRSxJQVRZO0FBVXhCQyxFQUFBQSxjQUFjLEVBQUUsRUFWUTtBQVd4QkUsRUFBQUEsY0FBYyxFQUFFLFFBWFE7QUFZeEJFLEVBQUFBLFVBQVUsRUFBRSxJQVpZO0FBYXhCQyxFQUFBQSxtQkFBbUIsRUFBRUUsU0FiRztBQWN4QjVCLEVBQUFBLFlBQVksRUFBRTtBQWRVLENBQTFCO2VBaUJlSixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgVHJpZ2dlciBmcm9tIFwicmMtdHJpZ2dlclwiXG5pbXBvcnQgeyBidWlsdGluUGxhY2VtZW50cyB9IGZyb20gXCIuL2J1aWx0aW5QbGFjZW1lbnRzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5pbnRlcmZhY2UgSVZpc2libGUge1xuICBwb3B1cFZpc2libGU/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmlnZ2VyIHtcbiAgZm9yY2VQb3B1cEFsaWduPzogKCkgPT4gdm9pZFxuICBnZXRSb290RG9tTm9kZT86ICgpID0+IEhUTUxFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIFBsYWNlbWVudCA9XG4gIHwgXCJib3R0b21cIlxuICB8IFwiYm90dG9tTGVmdFwiXG4gIHwgXCJib3R0b21SaWdodFwiXG4gIHwgXCJsZWZ0XCJcbiAgfCBcImxlZnRCb3R0b21cIlxuICB8IFwibGVmdFRvcFwiXG4gIHwgXCJyaWdodFwiXG4gIHwgXCJyaWdodEJvdHRvbVwiXG4gIHwgXCJyaWdodFRvcFwiXG4gIHwgXCJ0b3BcIlxuICB8IFwidG9wTGVmdFwiXG4gIHwgXCJ0b3BSaWdodFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcFRyaWdnZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBhY3Rpb24/OiBzdHJpbmdbXVxuICBidWlsdGluUGxhY2VtZW50cz86IG9iamVjdFxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICBkZWZhdWx0UG9wdXBWaXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbiAgZGVzdHJveVBvcHVwT25IaWRlPzogYm9vbGVhblxuICBnZXRQb3B1cENvbnRhaW5lcj86IG51bGwgfCAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBIVE1MRWxlbWVudClcbiAgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyXG4gIG1vdXNlTGVhdmVEZWxheT86IG51bWJlclxuICBvblBvcHVwQWxpZ246IChub2RlOiBIVE1MRWxlbWVudCwgYWxpZ24/OiBJQmFzZU9iamVjdCkgPT4gdm9pZFxuICBvblBvcHVwVmlzaWJsZUNoYW5nZTogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgcG9wdXA6IFJlYWN0LlJlYWN0Tm9kZVxuICBwb3B1cEFsaWduPzogbnVsbCB8IG9iamVjdFxuICBwb3B1cENsYXNzTmFtZT86IHN0cmluZ1xuICBwb3B1cFBsYWNlbWVudD86IFBsYWNlbWVudFxuICBwb3B1cFN0eWxlPzogbnVsbCB8IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgcG9wdXBUcmFuc2l0aW9uTmFtZT86IHN0cmluZ1xuICBwb3B1cFZpc2libGU/OiBudWxsIHwgYm9vbGVhblxuICB6SW5kZXg/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDlvLnlh7rooYzkuLrjgIJcbiAqXG4gKiBQb3BUcmlnZ2VyIOaYr+WfuuS6jiByYy10cmlnZ2VyIChNSVQgTGljZW5zZSkg6L+b6KGM5bCB6KOF55qE44CCXG4gKiBQb3BUcmlnZ2VyIOeahOWumuS9jeaYr+aKveixoeeahOW8ueWHuuihjOS4uuOAglxuICogUG9wVHJpZ2dlciDlupTmj5DkvpvmiYDmnInlvLnlh7rnm7jlhbPnmoTog73lipvkuI7phY3nva7vvIzkvpsgVG9vbHRpcOOAgVNlbGVjdCDnrYnosIPnlKjjgIJcbiAqIFBvcFRyaWdnZXIg5Lmf5Y+v5Lul6KKr5L2/55So6ICF55u05o6l5L2/55So77yM5a6e546w6Ieq5a6a55qE5by55Ye65Yqf6IO944CCXG4gKi9cbmNvbnN0IFBvcFRyaWdnZXI6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElQb3BUcmlnZ2VyUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoeyBjaGlsZHJlbiwgcG9wdXAsIHBvcHVwVmlzaWJsZSwgLi4ub3RoZXJQcm9wcyB9OiBJUG9wVHJpZ2dlclByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB2aXNpYmxlUHJvcDogSVZpc2libGUgPSB7fVxuXG4gICAgaWYgKHBvcHVwVmlzaWJsZSAhPT0gbnVsbCkge1xuICAgICAgdmlzaWJsZVByb3AucG9wdXBWaXNpYmxlID0gcG9wdXBWaXNpYmxlXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmlnZ2VyXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBwb3B1cD17dHlwZW9mIHBvcHVwID09PSBcInN0cmluZ1wiID8gPGRpdj57cG9wdXB9PC9kaXY+IDogcG9wdXB9XG4gICAgICAgIHsuLi52aXNpYmxlUHJvcH1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgPyA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPiA6IGNoaWxkcmVufVxuICAgICAgPC9UcmlnZ2VyPlxuICAgIClcbiAgfVxuKVxuXG5Qb3BUcmlnZ2VyLmRpc3BsYXlOYW1lID0gXCJQb3BUcmlnZ2VyXCJcblxuUG9wVHJpZ2dlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDop6blj5HmlrnlvI9cbiAgICovXG4gIGFjdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmihOiuvuS9jee9ru+8jOmcgOimgeWMheWQqyBwb3B1cFBsYWNlbWVudCDnmoQgMTIg5Liq5L2N572uXG4gICAqL1xuICBidWlsdGluUGxhY2VtZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5by55Ye65qGG5piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOW8ueWHuuahhuaYr+WQpuWcqOa2iOWkseaXtuenu+WHuiBkb21cbiAgICovXG4gIGRlc3Ryb3lQb3B1cE9uSGlkZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmjIflrprlvLnlh7rmoYbnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnRcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIG1vdXNlRW50ZXIg5pi+56S655qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCBhY3Rpb249W1wiaG92ZXJcIl0g5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtb3VzZUxlYXZlIOa2iOWkseeahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggYWN0aW9uPVtcImhvdmVyXCJdIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VMZWF2ZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5by55Ye65YaF5a65XG4gICAqL1xuICBwb3B1cDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOW8ueWHuuWxgueahOS9jee9ruaOp+WItu+8jEFQSSDor7flj4LogIMgaHR0cHM6Ly9naXRodWIuY29tL3lpbWluZ2hlL2RvbS1hbGlnblxuICAgKi9cbiAgcG9wdXBBbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW8ueWHuuahhueahOmZhOWKoOexu+WQjVxuICAgKi9cbiAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva7vvIzkuZ/lj6/ku6XkuI3kvb/nlKjov5nkupvpooTorr7kvY3nva7vvIzkvb/nlKggcG9wdXBBbGlnbiDlsZ7mgKfjgIJcbiAgICog6aG16Z2i5Zyo5by55Ye65pa55ZCR5LiK5peg5rOV5rua5Yqo5pe25Lya5b6A5Y+m5aSW5LiA5Liq5pa55ZCR5by55Ye677yM5L+d6K+B5pyJ56m66Ze05Y675rua5Yqo55yL5Yiw44CCXG4gICAqIOWmguiuvue9ruS6hiBwb3B1cFBsYWNlbWVudD1cImJvdHRvbVwi77yM5L2G5YWD57Sg5bey57uP5L2N5LqO6aG16Z2i5bqV6YOo5pe277yMcG9wdXAg5YiZ5Lya5Y+Y5Li6IHRvcOOAglxuICAgKiDlm6DkuLrmnIkgVHJpZ2dlciDnmoTov5nkuKrigJ3kv53or4HmnInnqbrpl7Tljrvmu5rliqjnnIvliLDigJznmoTorr7orqHpgLvovpHvvIzmiYDku6XkuI3ogIPomZHlgZrpobXpnaLmu5rliqjml7bnmoToh6rliqjlj5jmjaIgcG9wdXBQbGFjZW1lbnTjgIJcbiAgICovXG4gIHBvcHVwUGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOW8ueWHuuahhueahOmZhOWKoOagt+W8j1xuICAgKi9cbiAgcG9wdXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW8ueWHuuahhueahOWKqOeUu+exu+WQje+8jOWKqOeUu+agvOW8j+mBteW+qiByYy1hbmltYXRlXG4gICAqL1xuICBwb3B1cFRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5by55Ye65qGG5piv5ZCm5pi+56S6XG4gICAqL1xuICBwb3B1cFZpc2libGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbn1cblxuUG9wVHJpZ2dlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGlvbjogW1wiaG92ZXJcIl0sXG4gIGJ1aWx0aW5QbGFjZW1lbnRzLFxuICBjaGlsZHJlbjogXCJcIixcbiAgZGVmYXVsdFBvcHVwVmlzaWJsZTogZmFsc2UsXG4gIGRlc3Ryb3lQb3B1cE9uSGlkZTogZmFsc2UsXG4gIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBwb3B1cEFsaWduOiBudWxsLFxuICBwb3B1cENsYXNzTmFtZTogXCJcIixcbiAgcG9wdXBQbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gIHBvcHVwU3R5bGU6IG51bGwsXG4gIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHVuZGVmaW5lZCxcbiAgcG9wdXBWaXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BUcmlnZ2VyXG4iXX0=