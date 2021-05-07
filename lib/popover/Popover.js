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

var _placements = _interopRequireDefault(require("./placements"));

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

  var alignEdge = _ref.alignEdge,
      arrowed = _ref.arrowed,
      _ref$autoAdjustPlacem = _ref.autoAdjustPlacement,
      autoAdjustPlacement = _ref$autoAdjustPlacem === void 0 ? true : _ref$autoAdjustPlacem,
      children = _ref.children,
      getPopupContainer = _ref.getPopupContainer,
      placement = _ref.placement,
      popup = _ref.popup,
      popupClassName = _ref.popupClassName,
      popupStyle = _ref.popupStyle,
      otherProps = _objectWithoutProperties(_ref, ["alignEdge", "arrowed", "autoAdjustPlacement", "children", "getPopupContainer", "placement", "popup", "popupClassName", "popupStyle"]);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      getPopupContainerContext = _useContext.getPopupContainer;

  var popupTransitionName = (0, _react.useMemo)(function () {
    if (arrowed) {
      return "zoom-big-fast";
    }

    if (placement && placement.indexOf("top") === 0) {
      return "slide-down";
    }

    if (placement && placement.indexOf("right") === 0) {
      return "slide-left";
    }

    if (placement && placement.indexOf("left") === 0) {
      return "slide-right";
    }

    return "slide-up";
  }, [arrowed, placement]);
  return _react["default"].createElement(_tooltip["default"], _extends({
    getPopupContainer: getPopupContainer || getPopupContainerContext,
    placement: placement,
    popup: popup,
    popupClassName: (0, _classnames["default"])("".concat(prefix, "-popover"), popupClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-popover_noArrow"), !arrowed), _defineProperty(_classNames, "".concat(prefix, "-removeContentPadding"), !arrowed || typeof popup !== "string"), _classNames)),
    popupStyle: arrowed ? popupStyle : _objectSpread({
      padding: 0
    }, popupStyle),
    popupTransitionName: popupTransitionName,
    builtinPlacements: (0, _placements["default"])({
      alignEdge: alignEdge,
      autoAdjustPlacement: autoAdjustPlacement
    }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9Qb3BvdmVyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJQb3BvdmVyIiwicmVmIiwiYWxpZ25FZGdlIiwiYXJyb3dlZCIsImF1dG9BZGp1c3RQbGFjZW1lbnQiLCJjaGlsZHJlbiIsImdldFBvcHVwQ29udGFpbmVyIiwicGxhY2VtZW50IiwicG9wdXAiLCJwb3B1cENsYXNzTmFtZSIsInBvcHVwU3R5bGUiLCJvdGhlclByb3BzIiwiQ29uZmlnQ29udGV4dCIsImdldFBvcHVwQ29udGFpbmVyQ29udGV4dCIsInBvcHVwVHJhbnNpdGlvbk5hbWUiLCJpbmRleE9mIiwicGFkZGluZyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm5vZGUiLCJkZWZhdWx0VmlzaWJsZSIsIm9uZU9mIiwiZnVuYyIsIm1vdXNlRW50ZXJEZWxheSIsIm51bWJlciIsIm1vdXNlTGVhdmVEZWxheSIsIm9uVmlzaWJsZUNoYW5nZSIsInN0cmluZyIsIm9iamVjdCIsInRyaWdnZXIiLCJ2aXNpYmxlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsY0FBZjtBQW9CQSxJQUFNQyxPQUVMLEdBQUcsdUJBQ0YsZ0JBYUVDLEdBYkYsRUFjSztBQUFBOztBQUFBLE1BWkRDLFNBWUMsUUFaREEsU0FZQztBQUFBLE1BWERDLE9BV0MsUUFYREEsT0FXQztBQUFBLG1DQVZEQyxtQkFVQztBQUFBLE1BVkRBLG1CQVVDLHNDQVZxQixJQVVyQjtBQUFBLE1BVERDLFFBU0MsUUFUREEsUUFTQztBQUFBLE1BUkRDLGlCQVFDLFFBUkRBLGlCQVFDO0FBQUEsTUFQREMsU0FPQyxRQVBEQSxTQU9DO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFM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UyxzQkFBVVcsTUE3REo7QUFpRWxCQyxFQUFBQSxPQUFPLEVBQUVaLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsQ0FBaEIsQ0FqRVM7QUFxRWxCUyxFQUFBQSxPQUFPLEVBQUViLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBQWhCO0FBckVTLENBQXBCO0FBd0VBdkIsT0FBTyxDQUFDaUMsWUFBUixHQUF1QjtBQUNyQi9CLEVBQUFBLFNBQVMsRUFBRSxJQURVO0FBRXJCQyxFQUFBQSxPQUFPLEVBQUUsSUFGWTtBQUdyQkUsRUFBQUEsUUFBUSxFQUFFLEVBSFc7QUFJckJpQixFQUFBQSxjQUFjLEVBQUUsSUFKSztBQUtyQmhCLEVBQUFBLGlCQUFpQixFQUFFLElBTEU7QUFNckJtQixFQUFBQSxlQUFlLEVBQUUsQ0FOSTtBQU9yQkUsRUFBQUEsZUFBZSxFQUFFLEdBUEk7QUFRckJDLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFLENBUko7QUFTckJyQixFQUFBQSxTQUFTLEVBQUUsWUFUVTtBQVVyQkMsRUFBQUEsS0FBSyxFQUFFLE1BVmM7QUFXckJDLEVBQUFBLGNBQWMsRUFBRSxFQVhLO0FBWXJCQyxFQUFBQSxVQUFVLEVBQUUsRUFaUztBQWFyQnFCLEVBQUFBLE9BQU8sRUFBRSxPQWJZO0FBY3JCQyxFQUFBQSxPQUFPLEVBQUU7QUFkWSxDQUF2QjtlQWlCZWhDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBUb29sdGlwLCB7IElUb29sdGlwUHJvcHMgfSBmcm9tIFwiLi4vdG9vbHRpcFwiXG5pbXBvcnQgZ2V0UGxhY2VtZW50cyBmcm9tIFwiLi9wbGFjZW1lbnRzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktcG9wb3ZlclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcG92ZXJQcm9wcyBleHRlbmRzIElUb29sdGlwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpui+uee8mOWvuem9kFxuICAgKi9cbiAgYWxpZ25FZGdlPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5bim5pyJ566t5aS0XG4gICAqL1xuICBhcnJvd2VkPzogYm9vbGVhblxufVxuXG4vKipcbiAqIOawlOazoeaPkOekuueUqOS6juinpuWPkeOAgeaTjeS9nOafkOmhueS/oeaBr+S4tOaXtuaAp+W8ueWHuueahOWGheWuue+8jOmrmOS6juW9k+WJjemhtemdouWxgue6p++8jOS4uuWGheWuueeahOi9u+mHj+W7tuS8uOOAglxuICogUG9wb3ZlciDmmK/ln7rkuo4gVG9vbHRpcCDov5vooYzlsIHoo4XnmoTjgIJcbiAqIOWPr+iDveaYr+aWh+Wtl+ino+mHiu+8jOS5n+WPr+iDveWGhea2teaTjeS9nO+8jOWPr+iuvue9ruW4pueureWktOOAgeaIluS4jeW4pueureWktOOAglxuICogUG9wb3ZlciDpu5jorqTovrnnvJjlr7npvZDjgIJcbiAqL1xuY29uc3QgUG9wb3ZlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSVBvcG92ZXJQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhbGlnbkVkZ2UsXG4gICAgICBhcnJvd2VkLFxuICAgICAgYXV0b0FkanVzdFBsYWNlbWVudCA9IHRydWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcG9wdXAsXG4gICAgICBwb3B1cENsYXNzTmFtZSxcbiAgICAgIHBvcHVwU3R5bGUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVBvcG92ZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0gPSB1c2VDb250ZXh0KFxuICAgICAgQ29uZmlnQ29udGV4dFxuICAgIClcblxuICAgIGNvbnN0IHBvcHVwVHJhbnNpdGlvbk5hbWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGlmIChhcnJvd2VkKSB7XG4gICAgICAgIHJldHVybiBcInpvb20tYmlnLWZhc3RcIlxuICAgICAgfVxuICAgICAgaWYgKHBsYWNlbWVudCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcInRvcFwiKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gXCJzbGlkZS1kb3duXCJcbiAgICAgIH1cbiAgICAgIGlmIChwbGFjZW1lbnQgJiYgcGxhY2VtZW50LmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gXCJzbGlkZS1sZWZ0XCJcbiAgICAgIH1cbiAgICAgIGlmIChwbGFjZW1lbnQgJiYgcGxhY2VtZW50LmluZGV4T2YoXCJsZWZ0XCIpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBcInNsaWRlLXJpZ2h0XCJcbiAgICAgIH1cbiAgICAgIHJldHVybiBcInNsaWRlLXVwXCJcbiAgICB9LCBbYXJyb3dlZCwgcGxhY2VtZW50XSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgcG9wdXA9e3BvcHVwfVxuICAgICAgICBwb3B1cENsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXBvcG92ZXJgLCBwb3B1cENsYXNzTmFtZSwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LXBvcG92ZXJfbm9BcnJvd2BdOiAhYXJyb3dlZCxcbiAgICAgICAgICBbYCR7cHJlZml4fS1yZW1vdmVDb250ZW50UGFkZGluZ2BdOlxuICAgICAgICAgICAgIWFycm93ZWQgfHwgdHlwZW9mIHBvcHVwICE9PSBcInN0cmluZ1wiLFxuICAgICAgICB9KX1cbiAgICAgICAgcG9wdXBTdHlsZT17YXJyb3dlZCA/IHBvcHVwU3R5bGUgOiB7IHBhZGRpbmc6IDAsIC4uLnBvcHVwU3R5bGUgfX1cbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZT17cG9wdXBUcmFuc2l0aW9uTmFtZX1cbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM9e2dldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2UsIGF1dG9BZGp1c3RQbGFjZW1lbnQgfSl9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ub29sdGlwPlxuICAgIClcbiAgfVxuKVxuXG5Qb3BvdmVyLmRpc3BsYXlOYW1lID0gXCJQb3BvdmVyXCJcblxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbovrnnvJjlr7npvZBcbiAgICovXG4gIGFsaWduRWRnZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbluKbmnInnrq3lpLRcbiAgICovXG4gIGFycm93ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrmmK/lkKbpu5jorqTmmL7npLpcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDmjIflrprmsJTms6Hmj5DnpLrnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnRcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIG1vdXNlRW50ZXIg5pi+56S655qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlRW50ZXJEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1vdXNlTGVhdmUg5raI5aSx55qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOaYvuekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJ0b3BcIixcbiAgICBcImxlZnRcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcInRvcExlZnRcIixcbiAgICBcInRvcFJpZ2h0XCIsXG4gICAgXCJib3R0b21MZWZ0XCIsXG4gICAgXCJib3R0b21SaWdodFwiLFxuICAgIFwibGVmdFRvcFwiLFxuICAgIFwibGVmdEJvdHRvbVwiLFxuICAgIFwicmlnaHRUb3BcIixcbiAgICBcInJpZ2h0Qm90dG9tXCIsXG4gIF0pLFxuICAvKipcbiAgICog5by55Ye65YaF5a65XG4gICAqL1xuICBwb3B1cDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbnmoTpmYTliqDnsbvlkI1cbiAgICovXG4gIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5rCU5rOh5o+Q56S655qE6ZmE5Yqg5qC35byPXG4gICAqL1xuICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog6Kem5Y+R5pa55byPXG4gICAqL1xuICB0cmlnZ2VyOiBQcm9wVHlwZXMub25lT2YoW1wiaG92ZXJcIiwgXCJmb2N1c1wiLCBcImNsaWNrXCJdKSxcbiAgLyoqXG4gICAqIOaJi+WKqOaOp+WItuawlOazoeaPkOekuuaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxufVxuXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxpZ25FZGdlOiB0cnVlLFxuICBhcnJvd2VkOiB0cnVlLFxuICBjaGlsZHJlbjogXCJcIixcbiAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBvblZpc2libGVDaGFuZ2U6ICgpID0+IHt9LFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICBwb3B1cDogXCLmloflrZfmj5DnpLpcIixcbiAgcG9wdXBDbGFzc05hbWU6IFwiXCIsXG4gIHBvcHVwU3R5bGU6IHt9LFxuICB0cmlnZ2VyOiBcImhvdmVyXCIsXG4gIHZpc2libGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiJdfQ==