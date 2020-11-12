"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

var _tooltip = _interopRequireDefault(require("../tooltip"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-popover";
var Popover = (0, _react.forwardRef)(function (_ref, ref) {
  var _classNames;

  var arrowed = _ref.arrowed,
      children = _ref.children,
      getPopupContainer = _ref.getPopupContainer,
      placement = _ref.placement,
      popup = _ref.popup,
      popupClassName = _ref.popupClassName,
      popupStyle = _ref.popupStyle,
      otherProps = _objectWithoutProperties(_ref, ["arrowed", "children", "getPopupContainer", "placement", "popup", "popupClassName", "popupStyle"]);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      getPopupContainerContext = _useContext.getPopupContainer;

  var popupTransitionName;

  if (arrowed) {
    popupTransitionName = "zoom-big-fast";
  } else if (placement && placement.indexOf("top") === 0) {
    popupTransitionName = "slide-down";
  } else if (placement && placement.indexOf("right") === 0) {
    popupTransitionName = "slide-left";
  } else if (placement && placement.indexOf("bottom") === 0) {
    popupTransitionName = "slide-up";
  } else if (placement && placement.indexOf("left") === 0) {
    popupTransitionName = "slide-right";
  }

  return _react["default"].createElement(_tooltip["default"], _extends({
    getPopupContainer: getPopupContainer || getPopupContainerContext,
    placement: placement,
    popup: popup,
    popupClassName: (0, _classnames["default"])("".concat(prefix, "-popover"), popupClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-popover_noArrow"), !arrowed), _defineProperty(_classNames, "".concat(prefix, "-removeContentPadding"), !arrowed || typeof popup !== "string"), _classNames)),
    popupStyle: arrowed ? popupStyle : _objectSpread({
      padding: 0
    }, popupStyle),
    popupTransitionName: popupTransitionName,
    ref: ref
  }, otherProps), children);
});
Popover.displayName = "Popover";
Popover.propTypes = {
  alignEdge: _propTypes["default"].bool,
  arrowed: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  defaultVisible: _propTypes["default"].oneOf([null, true, false]),
  getPopupContainer: _propTypes["default"].func,
  mouseEnterDelay: _propTypes["default"].number,
  mouseLeaveDelay: _propTypes["default"].number,
  onVisibleChange: _propTypes["default"].func,
  placement: _propTypes["default"].oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  popup: _propTypes["default"].node,
  popupClassName: _propTypes["default"].string,
  popupStyle: _propTypes["default"].object,
  trigger: _propTypes["default"].oneOf(["hover", "focus", "click"]),
  visible: _propTypes["default"].oneOf([null, true, false])
};
Popover.defaultProps = {
  alignEdge: true,
  arrowed: true,
  children: "",
  defaultVisible: null,
  getPopupContainer: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  onVisibleChange: function onVisibleChange() {},
  placement: "bottomLeft",
  popup: "文字提示",
  popupClassName: "",
  popupStyle: {},
  trigger: "hover",
  visible: null
};
var _default = Popover;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9Qb3BvdmVyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJQb3BvdmVyIiwicmVmIiwiYXJyb3dlZCIsImNoaWxkcmVuIiwiZ2V0UG9wdXBDb250YWluZXIiLCJwbGFjZW1lbnQiLCJwb3B1cCIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBTdHlsZSIsIm90aGVyUHJvcHMiLCJDb25maWdDb250ZXh0IiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwicG9wdXBUcmFuc2l0aW9uTmFtZSIsImluZGV4T2YiLCJwYWRkaW5nIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJhbGlnbkVkZ2UiLCJQcm9wVHlwZXMiLCJib29sIiwibm9kZSIsImRlZmF1bHRWaXNpYmxlIiwib25lT2YiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5Iiwib25WaXNpYmxlQ2hhbmdlIiwic3RyaW5nIiwib2JqZWN0IiwidHJpZ2dlciIsInZpc2libGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxjQUFmO0FBb0JBLElBQU1DLE9BQ3FCLEdBQUcsdUJBQzVCLGdCQVdFQyxHQVhGLEVBWUs7QUFBQTs7QUFBQSxNQVZEQyxPQVVDLFFBVkRBLE9BVUM7QUFBQSxNQVREQyxRQVNDLFFBVERBLFFBU0M7QUFBQSxNQVJEQyxpQkFRQyxRQVJEQSxpQkFRQztBQUFBLE1BUERDLFNBT0MsUUFQREEsU0FPQztBQUFBLE1BTkRDLEtBTUMsUUFOREEsS0FNQztBQUFBLE1BTERDLGNBS0MsUUFMREEsY0FLQztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSEVDLFVBR0Y7O0FBQUEsb0JBQ3FELHVCQUN0REMsNkJBRHNELENBRHJEO0FBQUEs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QUFxRWxCUyxFQUFBQSxPQUFPLEVBQUViLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBQWhCO0FBckVTLENBQXBCO0FBd0VBdEIsT0FBTyxDQUFDZ0MsWUFBUixHQUF1QjtBQUNyQmYsRUFBQUEsU0FBUyxFQUFFLElBRFU7QUFFckJmLEVBQUFBLE9BQU8sRUFBRSxJQUZZO0FBR3JCQyxFQUFBQSxRQUFRLEVBQUUsRUFIVztBQUlyQmtCLEVBQUFBLGNBQWMsRUFBRSxJQUpLO0FBS3JCakIsRUFBQUEsaUJBQWlCLEVBQUUsSUFMRTtBQU1yQm9CLEVBQUFBLGVBQWUsRUFBRSxDQU5JO0FBT3JCRSxFQUFBQSxlQUFlLEVBQUUsR0FQSTtBQVFyQkMsRUFBQUEsZUFBZSxFQUFFLDJCQUFNLENBQUUsQ0FSSjtBQVNyQnRCLEVBQUFBLFNBQVMsRUFBRSxZQVRVO0FBVXJCQyxFQUFBQSxLQUFLLEVBQUUsTUFWYztBQVdyQkMsRUFBQUEsY0FBYyxFQUFFLEVBWEs7QUFZckJDLEVBQUFBLFVBQVUsRUFBRSxFQVpTO0FBYXJCc0IsRUFBQUEsT0FBTyxFQUFFLE9BYlk7QUFjckJDLEVBQUFBLE9BQU8sRUFBRTtBQWRZLENBQXZCO2VBaUJlL0IsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFRvb2x0aXAsIHsgSVRvb2x0aXBQcm9wcyB9IGZyb20gXCIuLi90b29sdGlwXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktcG9wb3ZlclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcG92ZXJQcm9wcyBleHRlbmRzIElUb29sdGlwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpui+uee8mOWvuem9kFxuICAgKi9cbiAgYWxpZ25FZGdlPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5bim5pyJ566t5aS0XG4gICAqL1xuICBhcnJvd2VkPzogYm9vbGVhblxufVxuXG4vKipcbiAqIOawlOazoeaPkOekuueUqOS6juinpuWPkeOAgeaTjeS9nOafkOmhueS/oeaBr+S4tOaXtuaAp+W8ueWHuueahOWGheWuue+8jOmrmOS6juW9k+WJjemhtemdouWxgue6p++8jOS4uuWGheWuueeahOi9u+mHj+W7tuS8uOOAglxuICogUG9wb3ZlciDmmK/ln7rkuo4gVG9vbHRpcCDov5vooYzlsIHoo4XnmoTjgIJcbiAqIOWPr+iDveaYr+aWh+Wtl+ino+mHiu+8jOS5n+WPr+iDveWGhea2teaTjeS9nO+8jOWPr+iuvue9ruW4pueureWktOOAgeaIluS4jeW4pueureWktOOAglxuICogUG9wb3ZlciDpu5jorqTovrnnvJjlr7npvZDjgIJcbiAqL1xuY29uc3QgUG9wb3ZlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxJUG9wb3ZlclByb3BzICZcbiAgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+PiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhcnJvd2VkLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBvcHVwLFxuICAgICAgcG9wdXBDbGFzc05hbWUsXG4gICAgICBwb3B1cFN0eWxlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElQb3BvdmVyUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9ID0gdXNlQ29udGV4dChcbiAgICAgIENvbmZpZ0NvbnRleHRcbiAgICApXG5cbiAgICBsZXQgcG9wdXBUcmFuc2l0aW9uTmFtZVxuXG4gICAgaWYgKGFycm93ZWQpIHtcbiAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWUgPSBcInpvb20tYmlnLWZhc3RcIlxuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ICYmIHBsYWNlbWVudC5pbmRleE9mKFwidG9wXCIpID09PSAwKSB7XG4gICAgICBwb3B1cFRyYW5zaXRpb25OYW1lID0gXCJzbGlkZS1kb3duXCJcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcInJpZ2h0XCIpID09PSAwKSB7XG4gICAgICBwb3B1cFRyYW5zaXRpb25OYW1lID0gXCJzbGlkZS1sZWZ0XCJcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcImJvdHRvbVwiKSA9PT0gMCkge1xuICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IFwic2xpZGUtdXBcIlxuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ICYmIHBsYWNlbWVudC5pbmRleE9mKFwibGVmdFwiKSA9PT0gMCkge1xuICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IFwic2xpZGUtcmlnaHRcIlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgcG9wdXA9e3BvcHVwfVxuICAgICAgICBwb3B1cENsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXBvcG92ZXJgLCBwb3B1cENsYXNzTmFtZSwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LXBvcG92ZXJfbm9BcnJvd2BdOiAhYXJyb3dlZCxcbiAgICAgICAgICBbYCR7cHJlZml4fS1yZW1vdmVDb250ZW50UGFkZGluZ2BdOlxuICAgICAgICAgICAgIWFycm93ZWQgfHwgdHlwZW9mIHBvcHVwICE9PSBcInN0cmluZ1wiLFxuICAgICAgICB9KX1cbiAgICAgICAgcG9wdXBTdHlsZT17YXJyb3dlZCA/IHBvcHVwU3R5bGUgOiB7IHBhZGRpbmc6IDAsIC4uLnBvcHVwU3R5bGUgfX1cbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZT17cG9wdXBUcmFuc2l0aW9uTmFtZX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKVxuICB9XG4pXG5cblBvcG92ZXIuZGlzcGxheU5hbWUgPSBcIlBvcG92ZXJcIlxuXG5Qb3BvdmVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpui+uee8mOWvuem9kFxuICAgKi9cbiAgYWxpZ25FZGdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuW4puacieeureWktFxuICAgKi9cbiAgYXJyb3dlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuuaYr+WQpum7mOiupOaYvuekulxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbiAgLyoqXG4gICAqIOaMh+WumuawlOazoeaPkOekuueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudFxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogbW91c2VFbnRlciDmmL7npLrnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbW91c2VMZWF2ZSDmtojlpLHnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VMZWF2ZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5pi+56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInRvcFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwicmlnaHRcIixcbiAgICBcImJvdHRvbVwiLFxuICAgIFwidG9wTGVmdFwiLFxuICAgIFwidG9wUmlnaHRcIixcbiAgICBcImJvdHRvbUxlZnRcIixcbiAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgXCJsZWZ0VG9wXCIsXG4gICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgXCJyaWdodFRvcFwiLFxuICAgIFwicmlnaHRCb3R0b21cIixcbiAgXSksXG4gIC8qKlxuICAgKiDlvLnlh7rlhoXlrrlcbiAgICovXG4gIHBvcHVwOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOW8ueWHuuahhueahOmZhOWKoOexu+WQjVxuICAgKi9cbiAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDmoLflvI9cbiAgICovXG4gIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDop6blj5HmlrnlvI9cbiAgICovXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZihbXCJob3ZlclwiLCBcImZvY3VzXCIsIFwiY2xpY2tcIl0pLFxuICAvKipcbiAgICog5omL5Yqo5o6n5Yi25rCU5rOh5o+Q56S65piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG59XG5cblBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbkVkZ2U6IHRydWUsXG4gIGFycm93ZWQ6IHRydWUsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBkZWZhdWx0VmlzaWJsZTogbnVsbCxcbiAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIG9uVmlzaWJsZUNoYW5nZTogKCkgPT4ge30sXG4gIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gIHBvcHVwOiBcIuaWh+Wtl+aPkOekulwiLFxuICBwb3B1cENsYXNzTmFtZTogXCJcIixcbiAgcG9wdXBTdHlsZToge30sXG4gIHRyaWdnZXI6IFwiaG92ZXJcIixcbiAgdmlzaWJsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIl19