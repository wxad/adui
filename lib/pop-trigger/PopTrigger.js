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
  popupTransitionName: "",
  popupVisible: null
};
var _default = PopTrigger;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wLXRyaWdnZXIvUG9wVHJpZ2dlci50c3giXSwibmFtZXMiOlsiUG9wVHJpZ2dlciIsInJlZiIsImNoaWxkcmVuIiwicG9wdXAiLCJwb3B1cFZpc2libGUiLCJvdGhlclByb3BzIiwidmlzaWJsZVByb3AiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImFjdGlvbiIsIlByb3BUeXBlcyIsImFueSIsImJ1aWx0aW5QbGFjZW1lbnRzIiwib2JqZWN0Iiwibm9kZSIsImRlZmF1bHRQb3B1cFZpc2libGUiLCJib29sIiwiZGVzdHJveVBvcHVwT25IaWRlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5IiwiaXNSZXF1aXJlZCIsInBvcHVwQWxpZ24iLCJwb3B1cENsYXNzTmFtZSIsInN0cmluZyIsInBvcHVwUGxhY2VtZW50Iiwib25lT2YiLCJwb3B1cFN0eWxlIiwicG9wdXBUcmFuc2l0aW9uTmFtZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLFVBRUwsR0FBRyx1QkFDRixnQkFBcUVDLEdBQXJFLEVBQTZFO0FBQUEsTUFBMUVDLFFBQTBFLFFBQTFFQSxRQUEwRTtBQUFBLE1BQWhFQyxLQUFnRSxRQUFoRUEsS0FBZ0U7QUFBQSxNQUF6REMsWUFBeUQsUUFBekRBLFlBQXlEO0FBQUEsTUFBeENDLFVBQXdDOztBQUMzRSxNQUFNQyxXQUFxQixHQUFHLEVBQTlCOztBQUVBLE1BQUlGLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QkUsSUFBQUEsV0FBVyxDQUFDRixZQUFaLEdBQTJCQSxZQUEzQjtBQUNEOztBQUVELFNBQ0UsZ0NBQUMscUJBQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRUgsR0FEUDtBQUVFLElBQUEsS0FBSyxFQUFFLE9BQU9FLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsNkNBQU1BLEtBQU4sQ0FBNUIsR0FBaURBO0FBRjFELEtBR01HLFdBSE4sRUFJTUQsVUFKTixHQU1HLE9BQU9ILFFBQVAsS0FBb0IsUUFBcEIsR0FBK0IsOENBQU9BLFFBQVAsQ0FBL0IsR0FBeURBLFFBTjVELENBREY7QUFVRCxDQWxCQyxDQUZKO0FBdUJBRixVQUFVLENBQUNPLFdBQVgsR0FBeUIsWUFBekI7QUFFQVAsVUFBVSxDQUFDUSxTQUFYLEdBQXVCO0FBSXJCQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxHQUpHO0FBUXJCQyxFQUFBQSxpQkFBaUIsRUFBRUYsc0JBQVVHLE1BUlI7QUFZckJYLEVBQUFBLFFBQVEsRUFBRVEsc0JBQVVJLElBWkM7QUFnQnJCQyxFQUFBQSxtQkFBbUIsRUFBRUwsc0JBQVVNLElBaEJWO0FBb0JyQkMsRUFBQUEsa0JBQWtCLEVBQUVQLHNCQUFVTSxJQXBCVDtBQXdCckJFLEVBQUFBLGlCQUFpQixFQUFFUixzQkFBVVMsSUF4QlI7QUE0QnJCQyxFQUFBQSxlQUFlLEVBQUVWLHNCQUFVVyxNQTVCTjtBQWdDckJDLEVBQUFBLGVBQWUsRUFBRVosc0JBQVVXLE1BaENOO0FBb0NyQmxCLEVBQUFBLEtBQUssRUFBRU8sc0JBQVVJLElBQVYsQ0FBZVMsVUFwQ0Q7QUF3Q3JCQyxFQUFBQSxVQUFVLEVBQUVkLHNCQUFVRyxNQXhDRDtBQTRDckJZLEVBQUFBLGNBQWMsRUFBRWYsc0JBQVVnQixNQTVDTDtBQW1EckJDLEVBQUFBLGNBQWMsRUFBRWpCLHNCQUFVa0IsS0FBVixDQUFnQixDQUM5QixLQUQ4QixFQUU5QixNQUY4QixFQUc5QixPQUg4QixFQUk5QixRQUo4QixFQUs5QixTQUw4QixFQU05QixVQU44QixFQU85QixZQVA4QixFQVE5QixhQVI4QixFQVM5QixTQVQ4QixFQVU5QixZQVY4QixFQVc5QixVQVg4QixFQVk5QixhQVo4QixDQUFoQixDQW5ESztBQW9FckJDLEVBQUFBLFVBQVUsRUFBRW5CLHNCQUFVRyxNQXBFRDtBQXdFckJpQixFQUFBQSxtQkFBbUIsRUFBRXBCLHNCQUFVZ0IsTUF4RVY7QUE0RXJCdEIsRUFBQUEsWUFBWSxFQUFFTSxzQkFBVWtCLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsQ0FBaEI7QUE1RU8sQ0FBdkI7QUErRUE1QixVQUFVLENBQUMrQixZQUFYLEdBQTBCO0FBQ3hCdEIsRUFBQUEsTUFBTSxFQUFFLENBQUMsT0FBRCxDQURnQjtBQUV4QkcsRUFBQUEsaUJBQWlCLEVBQWpCQSxvQ0FGd0I7QUFHeEJWLEVBQUFBLFFBQVEsRUFBRSxFQUhjO0FBSXhCYSxFQUFBQSxtQkFBbUIsRUFBRSxLQUpHO0FBS3hCRSxFQUFBQSxrQkFBa0IsRUFBRSxLQUxJO0FBTXhCQyxFQUFBQSxpQkFBaUIsRUFBRSxJQU5LO0FBT3hCRSxFQUFBQSxlQUFlLEVBQUUsQ0FQTztBQVF4QkUsRUFBQUEsZUFBZSxFQUFFLEdBUk87QUFTeEJFLEVBQUFBLFVBQVUsRUFBRSxJQVRZO0FBVXhCQyxFQUFBQSxjQUFjLEVBQUUsRUFWUTtBQVd4QkUsRUFBQUEsY0FBYyxFQUFFLFFBWFE7QUFZeEJFLEVBQUFBLFVBQVUsRUFBRSxJQVpZO0FBYXhCQyxFQUFBQSxtQkFBbUIsRUFBRSxFQWJHO0FBY3hCMUIsRUFBQUEsWUFBWSxFQUFFO0FBZFUsQ0FBMUI7ZUFpQmVKLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBUcmlnZ2VyIGZyb20gXCJyYy10cmlnZ2VyXCJcbmltcG9ydCB7IGJ1aWx0aW5QbGFjZW1lbnRzIH0gZnJvbSBcIi4vYnVpbHRpblBsYWNlbWVudHNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmludGVyZmFjZSBJVmlzaWJsZSB7XG4gIHBvcHVwVmlzaWJsZT86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElCYXNlT2JqZWN0IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyaWdnZXIge1xuICBmb3JjZVBvcHVwQWxpZ24/OiAoKSA9PiB2b2lkXG4gIGdldFJvb3REb21Ob2RlPzogKCkgPT4gSFRNTEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50ID1cbiAgfCBcImJvdHRvbVwiXG4gIHwgXCJib3R0b21MZWZ0XCJcbiAgfCBcImJvdHRvbVJpZ2h0XCJcbiAgfCBcImxlZnRcIlxuICB8IFwibGVmdEJvdHRvbVwiXG4gIHwgXCJsZWZ0VG9wXCJcbiAgfCBcInJpZ2h0XCJcbiAgfCBcInJpZ2h0Qm90dG9tXCJcbiAgfCBcInJpZ2h0VG9wXCJcbiAgfCBcInRvcFwiXG4gIHwgXCJ0b3BMZWZ0XCJcbiAgfCBcInRvcFJpZ2h0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wVHJpZ2dlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGFjdGlvbj86IHN0cmluZ1tdXG4gIGJ1aWx0aW5QbGFjZW1lbnRzPzogb2JqZWN0XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIGRlZmF1bHRQb3B1cFZpc2libGU/OiBudWxsIHwgYm9vbGVhblxuICBkZXN0cm95UG9wdXBPbkhpZGU/OiBib29sZWFuXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXJcbiAgbW91c2VMZWF2ZURlbGF5PzogbnVtYmVyXG4gIG9uUG9wdXBBbGlnbjogKG5vZGU6IEhUTUxFbGVtZW50LCBhbGlnbj86IElCYXNlT2JqZWN0KSA9PiB2b2lkXG4gIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICBwb3B1cDogUmVhY3QuUmVhY3ROb2RlXG4gIHBvcHVwQWxpZ24/OiBudWxsIHwgb2JqZWN0XG4gIHBvcHVwQ2xhc3NOYW1lPzogc3RyaW5nXG4gIHBvcHVwUGxhY2VtZW50PzogUGxhY2VtZW50XG4gIHBvcHVwU3R5bGU/OiBudWxsIHwgUmVhY3QuQ1NTUHJvcGVydGllc1xuICBwb3B1cFRyYW5zaXRpb25OYW1lPzogc3RyaW5nXG4gIHBvcHVwVmlzaWJsZT86IG51bGwgfCBib29sZWFuXG59XG5cbi8qKlxuICog5by55Ye66KGM5Li644CCXG4gKlxuICogUG9wVHJpZ2dlciDmmK/ln7rkuo4gcmMtdHJpZ2dlciAoTUlUIExpY2Vuc2UpIOi/m+ihjOWwgeijheeahOOAglxuICogUG9wVHJpZ2dlciDnmoTlrprkvY3mmK/mir3osaHnmoTlvLnlh7rooYzkuLrjgIJcbiAqIFBvcFRyaWdnZXIg5bqU5o+Q5L6b5omA5pyJ5by55Ye655u45YWz55qE6IO95Yqb5LiO6YWN572u77yM5L6bIFRvb2x0aXDjgIFTZWxlY3Qg562J6LCD55So44CCXG4gKiBQb3BUcmlnZ2VyIOS5n+WPr+S7peiiq+S9v+eUqOiAheebtOaOpeS9v+eUqO+8jOWunueOsOiHquWumueahOW8ueWHuuWKn+iDveOAglxuICovXG5jb25zdCBQb3BUcmlnZ2VyOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJUG9wVHJpZ2dlclByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKHsgY2hpbGRyZW4sIHBvcHVwLCBwb3B1cFZpc2libGUsIC4uLm90aGVyUHJvcHMgfTogSVBvcFRyaWdnZXJQcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgdmlzaWJsZVByb3A6IElWaXNpYmxlID0ge31cblxuICAgIGlmIChwb3B1cFZpc2libGUgIT09IG51bGwpIHtcbiAgICAgIHZpc2libGVQcm9wLnBvcHVwVmlzaWJsZSA9IHBvcHVwVmlzaWJsZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VHJpZ2dlclxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgcG9wdXA9e3R5cGVvZiBwb3B1cCA9PT0gXCJzdHJpbmdcIiA/IDxkaXY+e3BvcHVwfTwvZGl2PiA6IHBvcHVwfVxuICAgICAgICB7Li4udmlzaWJsZVByb3B9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiID8gPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj4gOiBjaGlsZHJlbn1cbiAgICAgIDwvVHJpZ2dlcj5cbiAgICApXG4gIH1cbilcblxuUG9wVHJpZ2dlci5kaXNwbGF5TmFtZSA9IFwiUG9wVHJpZ2dlclwiXG5cblBvcFRyaWdnZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6Kem5Y+R5pa55byPXG4gICAqL1xuICBhY3Rpb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDpooTorr7kvY3nva7vvIzpnIDopoHljIXlkKsgcG9wdXBQbGFjZW1lbnQg55qEIDEyIOS4quS9jee9rlxuICAgKi9cbiAgYnVpbHRpblBsYWNlbWVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOW8ueWHuuahhuaYr+WQpum7mOiupOaYvuekulxuICAgKi9cbiAgZGVmYXVsdFBvcHVwVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbmmK/lkKblnKjmtojlpLHml7bnp7vlh7ogZG9tXG4gICAqL1xuICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5oyH5a6a5by55Ye65qGG55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50XG4gICAqL1xuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBtb3VzZUVudGVyIOaYvuekuueahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggYWN0aW9uPVtcImhvdmVyXCJdIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbW91c2VMZWF2ZSDmtojlpLHnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIGFjdGlvbj1bXCJob3ZlclwiXSDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOW8ueWHuuWGheWuuVxuICAgKi9cbiAgcG9wdXA6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLnmoTkvY3nva7mjqfliLbvvIxBUEkg6K+35Y+C6ICDIGh0dHBzOi8vZ2l0aHViLmNvbS95aW1pbmdoZS9kb20tYWxpZ25cbiAgICovXG4gIHBvcHVwQWxpZ246IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbnmoTpmYTliqDnsbvlkI1cbiAgICovXG4gIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572u77yM5Lmf5Y+v5Lul5LiN5L2/55So6L+Z5Lqb6aKE6K6+5L2N572u77yM5L2/55SoIHBvcHVwQWxpZ24g5bGe5oCn44CCXG4gICAqIOmhtemdouWcqOW8ueWHuuaWueWQkeS4iuaXoOazlea7muWKqOaXtuS8muW+gOWPpuWkluS4gOS4quaWueWQkeW8ueWHuu+8jOS/neivgeacieepuumXtOWOu+a7muWKqOeci+WIsOOAglxuICAgKiDlpoLorr7nva7kuoYgcG9wdXBQbGFjZW1lbnQ9XCJib3R0b21cIu+8jOS9huWFg+e0oOW3sue7j+S9jeS6jumhtemdouW6lemDqOaXtu+8jHBvcHVwIOWImeS8muWPmOS4uiB0b3DjgIJcbiAgICog5Zug5Li65pyJIFRyaWdnZXIg55qE6L+Z5Liq4oCd5L+d6K+B5pyJ56m66Ze05Y675rua5Yqo55yL5Yiw4oCc55qE6K6+6K6h6YC76L6R77yM5omA5Lul5LiN6ICD6JmR5YGa6aG16Z2i5rua5Yqo5pe255qE6Ieq5Yqo5Y+Y5o2iIHBvcHVwUGxhY2VtZW5044CCXG4gICAqL1xuICBwb3B1cFBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInRvcFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwicmlnaHRcIixcbiAgICBcImJvdHRvbVwiLFxuICAgIFwidG9wTGVmdFwiLFxuICAgIFwidG9wUmlnaHRcIixcbiAgICBcImJvdHRvbUxlZnRcIixcbiAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgXCJsZWZ0VG9wXCIsXG4gICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgXCJyaWdodFRvcFwiLFxuICAgIFwicmlnaHRCb3R0b21cIixcbiAgXSksXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbnmoTpmYTliqDmoLflvI9cbiAgICovXG4gIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbnmoTliqjnlLvnsbvlkI3vvIzliqjnlLvmoLzlvI/pgbXlvqogcmMtYW5pbWF0ZVxuICAgKi9cbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW8ueWHuuahhuaYr+WQpuaYvuekulxuICAgKi9cbiAgcG9wdXBWaXNpYmxlOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG59XG5cblBvcFRyaWdnZXIuZGVmYXVsdFByb3BzID0ge1xuICBhY3Rpb246IFtcImhvdmVyXCJdLFxuICBidWlsdGluUGxhY2VtZW50cyxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGRlZmF1bHRQb3B1cFZpc2libGU6IGZhbHNlLFxuICBkZXN0cm95UG9wdXBPbkhpZGU6IGZhbHNlLFxuICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgbW91c2VFbnRlckRlbGF5OiAwLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgcG9wdXBBbGlnbjogbnVsbCxcbiAgcG9wdXBDbGFzc05hbWU6IFwiXCIsXG4gIHBvcHVwUGxhY2VtZW50OiBcImJvdHRvbVwiLFxuICBwb3B1cFN0eWxlOiBudWxsLFxuICBwb3B1cFRyYW5zaXRpb25OYW1lOiBcIlwiLFxuICBwb3B1cFZpc2libGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcFRyaWdnZXJcbiJdfQ==