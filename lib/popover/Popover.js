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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9Qb3BvdmVyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJQb3BvdmVyIiwicmVmIiwiYXJyb3dlZCIsImNoaWxkcmVuIiwiZ2V0UG9wdXBDb250YWluZXIiLCJwbGFjZW1lbnQiLCJwb3B1cCIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBTdHlsZSIsIm90aGVyUHJvcHMiLCJDb25maWdDb250ZXh0IiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwicG9wdXBUcmFuc2l0aW9uTmFtZSIsImluZGV4T2YiLCJwYWRkaW5nIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJhbGlnbkVkZ2UiLCJQcm9wVHlwZXMiLCJib29sIiwibm9kZSIsImRlZmF1bHRWaXNpYmxlIiwib25lT2YiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5Iiwib25WaXNpYmxlQ2hhbmdlIiwic3RyaW5nIiwib2JqZWN0IiwidHJpZ2dlciIsInZpc2libGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxjQUFmO0FBb0JBLElBQU1DLE9BRUwsR0FBRyx1QkFDRixnQkFXRUMsR0FYRixFQVlLO0FBQUE7O0FBQUEsTUFWREMsT0FVQyxRQVZEQSxPQVVDO0FBQUEsTUFUREMsUUFTQyxRQVREQSxRQVNDO0FBQUEsTUFSREMsaUJBUUMsUUFSREEsaUJBUUM7QUFBQSxNQVBEQyxTQU9DLFFBUERBLFNBT0M7QUFBQSxNQU5EQyxLQU1DLFFBTkRBLEtBTUM7QUFBQSxNQUxEQyxjQUtDLFFBTERBLGNBS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhFQyxVQUdGOztBQUFBLG9CQUNxRCx1QkFDdERDLDZCQURzRCxDQURyRDtBQUFBLE1B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QU8sQ0FBQ2dDLFlBQVIsR0FBdUI7QUFDckJmLEVBQUFBLFNBQVMsRUFBRSxJQURVO0FBRXJCZixFQUFBQSxPQUFPLEVBQUUsSUFGWTtBQUdyQkMsRUFBQUEsUUFBUSxFQUFFLEVBSFc7QUFJckJrQixFQUFBQSxjQUFjLEVBQUUsSUFKSztBQUtyQmpCLEVBQUFBLGlCQUFpQixFQUFFLElBTEU7QUFNckJvQixFQUFBQSxlQUFlLEVBQUUsQ0FOSTtBQU9yQkUsRUFBQUEsZUFBZSxFQUFFLEdBUEk7QUFRckJDLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFLENBUko7QUFTckJ0QixFQUFBQSxTQUFTLEVBQUUsWUFUVTtBQVVyQkMsRUFBQUEsS0FBSyxFQUFFLE1BVmM7QUFXckJDLEVBQUFBLGNBQWMsRUFBRSxFQVhLO0FBWXJCQyxFQUFBQSxVQUFVLEVBQUUsRUFaUztBQWFyQnNCLEVBQUFBLE9BQU8sRUFBRSxPQWJZO0FBY3JCQyxFQUFBQSxPQUFPLEVBQUU7QUFkWSxDQUF2QjtlQWlCZS9CLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBUb29sdGlwLCB7IElUb29sdGlwUHJvcHMgfSBmcm9tIFwiLi4vdG9vbHRpcFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXBvcG92ZXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElQb3BvdmVyUHJvcHMgZXh0ZW5kcyBJVG9vbHRpcFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbovrnnvJjlr7npvZBcbiAgICovXG4gIGFsaWduRWRnZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuW4puacieeureWktFxuICAgKi9cbiAgYXJyb3dlZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDmsJTms6Hmj5DnpLrnlKjkuo7op6blj5HjgIHmk43kvZzmn5Dpobnkv6Hmga/kuLTml7bmgKflvLnlh7rnmoTlhoXlrrnvvIzpq5jkuo7lvZPliY3pobXpnaLlsYLnuqfvvIzkuLrlhoXlrrnnmoTovbvph4/lu7bkvLjjgIJcbiAqIFBvcG92ZXIg5piv5Z+65LqOIFRvb2x0aXAg6L+b6KGM5bCB6KOF55qE44CCXG4gKiDlj6/og73mmK/mloflrZfop6Pph4rvvIzkuZ/lj6/og73lhoXmtrXmk43kvZzvvIzlj6/orr7nva7luKbnrq3lpLTjgIHmiJbkuI3luKbnrq3lpLTjgIJcbiAqIFBvcG92ZXIg6buY6K6k6L6557yY5a+56b2Q44CCXG4gKi9cbmNvbnN0IFBvcG92ZXI6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElQb3BvdmVyUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYXJyb3dlZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBwb3B1cCxcbiAgICAgIHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgcG9wdXBTdHlsZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJUG9wb3ZlclByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCB7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSA9IHVzZUNvbnRleHQoXG4gICAgICBDb25maWdDb250ZXh0XG4gICAgKVxuXG4gICAgY29uc3QgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgaWYgKGFycm93ZWQpIHtcbiAgICAgICAgcmV0dXJuIFwiem9vbS1iaWctZmFzdFwiXG4gICAgICB9XG4gICAgICBpZiAocGxhY2VtZW50ICYmIHBsYWNlbWVudC5pbmRleE9mKFwidG9wXCIpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBcInNsaWRlLWRvd25cIlxuICAgICAgfVxuICAgICAgaWYgKHBsYWNlbWVudCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcInJpZ2h0XCIpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBcInNsaWRlLWxlZnRcIlxuICAgICAgfVxuICAgICAgaWYgKHBsYWNlbWVudCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcImxlZnRcIikgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFwic2xpZGUtcmlnaHRcIlxuICAgICAgfVxuICAgICAgcmV0dXJuIFwic2xpZGUtdXBcIlxuICAgIH0sIFthcnJvd2VkLCBwbGFjZW1lbnRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBwb3B1cD17cG9wdXB9XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tcG9wb3ZlcmAsIHBvcHVwQ2xhc3NOYW1lLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tcG9wb3Zlcl9ub0Fycm93YF06ICFhcnJvd2VkLFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXJlbW92ZUNvbnRlbnRQYWRkaW5nYF06XG4gICAgICAgICAgICAhYXJyb3dlZCB8fCB0eXBlb2YgcG9wdXAgIT09IFwic3RyaW5nXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBwb3B1cFN0eWxlPXthcnJvd2VkID8gcG9wdXBTdHlsZSA6IHsgcGFkZGluZzogMCwgLi4ucG9wdXBTdHlsZSB9fVxuICAgICAgICBwb3B1cFRyYW5zaXRpb25OYW1lPXtwb3B1cFRyYW5zaXRpb25OYW1lfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cbilcblxuUG9wb3Zlci5kaXNwbGF5TmFtZSA9IFwiUG9wb3ZlclwiXG5cblBvcG92ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6L6557yY5a+56b2QXG4gICAqL1xuICBhbGlnbkVkZ2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm5bim5pyJ566t5aS0XG4gICAqL1xuICBhcnJvd2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5rCU5rOh5o+Q56S65piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxuICAvKipcbiAgICog5oyH5a6a5rCU5rOh5o+Q56S655qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50XG4gICAqL1xuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBtb3VzZUVudGVyIOaYvuekuueahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtb3VzZUxlYXZlIOa2iOWkseeahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDmmL7npLrlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOW8ueWHuuWGheWuuVxuICAgKi9cbiAgcG9wdXA6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5by55Ye65qGG55qE6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuueahOmZhOWKoOagt+W8j1xuICAgKi9cbiAgcG9wdXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOinpuWPkeaWueW8j1xuICAgKi9cbiAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mKFtcImhvdmVyXCIsIFwiZm9jdXNcIiwgXCJjbGlja1wiXSksXG4gIC8qKlxuICAgKiDmiYvliqjmjqfliLbmsJTms6Hmj5DnpLrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbn1cblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduRWRnZTogdHJ1ZSxcbiAgYXJyb3dlZDogdHJ1ZSxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgbW91c2VFbnRlckRlbGF5OiAwLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgb25WaXNpYmxlQ2hhbmdlOiAoKSA9PiB7fSxcbiAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgcG9wdXA6IFwi5paH5a2X5o+Q56S6XCIsXG4gIHBvcHVwQ2xhc3NOYW1lOiBcIlwiLFxuICBwb3B1cFN0eWxlOiB7fSxcbiAgdHJpZ2dlcjogXCJob3ZlclwiLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iXX0=