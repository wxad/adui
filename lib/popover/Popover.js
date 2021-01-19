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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9Qb3BvdmVyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJQb3BvdmVyIiwicmVmIiwiYXJyb3dlZCIsImNoaWxkcmVuIiwiZ2V0UG9wdXBDb250YWluZXIiLCJwbGFjZW1lbnQiLCJwb3B1cCIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBTdHlsZSIsIm90aGVyUHJvcHMiLCJDb25maWdDb250ZXh0IiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwicG9wdXBUcmFuc2l0aW9uTmFtZSIsImluZGV4T2YiLCJwYWRkaW5nIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJhbGlnbkVkZ2UiLCJQcm9wVHlwZXMiLCJib29sIiwibm9kZSIsImRlZmF1bHRWaXNpYmxlIiwib25lT2YiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5Iiwib25WaXNpYmxlQ2hhbmdlIiwic3RyaW5nIiwib2JqZWN0IiwidHJpZ2dlciIsInZpc2libGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxjQUFmO0FBb0JBLElBQU1DLE9BRUwsR0FBRyx1QkFDRixnQkFXRUMsR0FYRixFQVlLO0FBQUE7O0FBQUEsTUFWREMsT0FVQyxRQVZEQSxPQVVDO0FBQUEsTUFUREMsUUFTQyxRQVREQSxRQVNDO0FBQUEsTUFSREMsaUJBUUMsUUFSREEsaUJBUUM7QUFBQSxNQVBEQyxTQU9DLFFBUERBLFNBT0M7QUFBQSxNQU5EQyxLQU1DLFFBTkRBLEtBTUM7QUFBQSxNQUxEQyxjQUtDLFFBTERBLGNBS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhFQyxVQUdGOztBQUFBLG9CQUNxRCx1QkFDdERDLDZCQURzRCxDQURyRDtBQUFBLE1B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bEJTLEVBQUFBLE9BQU8sRUFBRWIsc0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsQ0FBaEI7QUFyRVMsQ0FBcEI7QUF3RUF0QixPQUFPLENBQUNnQyxZQUFSLEdBQXVCO0FBQ3JCZixFQUFBQSxTQUFTLEVBQUUsSUFEVTtBQUVyQmYsRUFBQUEsT0FBTyxFQUFFLElBRlk7QUFHckJDLEVBQUFBLFFBQVEsRUFBRSxFQUhXO0FBSXJCa0IsRUFBQUEsY0FBYyxFQUFFLElBSks7QUFLckJqQixFQUFBQSxpQkFBaUIsRUFBRSxJQUxFO0FBTXJCb0IsRUFBQUEsZUFBZSxFQUFFLENBTkk7QUFPckJFLEVBQUFBLGVBQWUsRUFBRSxHQVBJO0FBUXJCQyxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRSxDQVJKO0FBU3JCdEIsRUFBQUEsU0FBUyxFQUFFLFlBVFU7QUFVckJDLEVBQUFBLEtBQUssRUFBRSxNQVZjO0FBV3JCQyxFQUFBQSxjQUFjLEVBQUUsRUFYSztBQVlyQkMsRUFBQUEsVUFBVSxFQUFFLEVBWlM7QUFhckJzQixFQUFBQSxPQUFPLEVBQUUsT0FiWTtBQWNyQkMsRUFBQUEsT0FBTyxFQUFFO0FBZFksQ0FBdkI7ZUFpQmUvQixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgVG9vbHRpcCwgeyBJVG9vbHRpcFByb3BzIH0gZnJvbSBcIi4uL3Rvb2x0aXBcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1wb3BvdmVyXCJcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wb3ZlclByb3BzIGV4dGVuZHMgSVRvb2x0aXBQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6L6557yY5a+56b2QXG4gICAqL1xuICBhbGlnbkVkZ2U/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbluKbmnInnrq3lpLRcbiAgICovXG4gIGFycm93ZWQ/OiBib29sZWFuXG59XG5cbi8qKlxuICog5rCU5rOh5o+Q56S655So5LqO6Kem5Y+R44CB5pON5L2c5p+Q6aG55L+h5oGv5Li05pe25oCn5by55Ye655qE5YaF5a6577yM6auY5LqO5b2T5YmN6aG16Z2i5bGC57qn77yM5Li65YaF5a6555qE6L276YeP5bu25Ly444CCXG4gKiBQb3BvdmVyIOaYr+WfuuS6jiBUb29sdGlwIOi/m+ihjOWwgeijheeahOOAglxuICog5Y+v6IO95piv5paH5a2X6Kej6YeK77yM5Lmf5Y+v6IO95YaF5ra15pON5L2c77yM5Y+v6K6+572u5bim566t5aS044CB5oiW5LiN5bim566t5aS044CCXG4gKiBQb3BvdmVyIOm7mOiupOi+uee8mOWvuem9kOOAglxuICovXG5jb25zdCBQb3BvdmVyOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJUG9wb3ZlclByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGFycm93ZWQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcG9wdXAsXG4gICAgICBwb3B1cENsYXNzTmFtZSxcbiAgICAgIHBvcHVwU3R5bGUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVBvcG92ZXJQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0gPSB1c2VDb250ZXh0KFxuICAgICAgQ29uZmlnQ29udGV4dFxuICAgIClcblxuICAgIGxldCBwb3B1cFRyYW5zaXRpb25OYW1lXG5cbiAgICBpZiAoYXJyb3dlZCkge1xuICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IFwiem9vbS1iaWctZmFzdFwiXG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgJiYgcGxhY2VtZW50LmluZGV4T2YoXCJ0b3BcIikgPT09IDApIHtcbiAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWUgPSBcInNsaWRlLWRvd25cIlxuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ICYmIHBsYWNlbWVudC5pbmRleE9mKFwicmlnaHRcIikgPT09IDApIHtcbiAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWUgPSBcInNsaWRlLWxlZnRcIlxuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ICYmIHBsYWNlbWVudC5pbmRleE9mKFwiYm90dG9tXCIpID09PSAwKSB7XG4gICAgICBwb3B1cFRyYW5zaXRpb25OYW1lID0gXCJzbGlkZS11cFwiXG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgJiYgcGxhY2VtZW50LmluZGV4T2YoXCJsZWZ0XCIpID09PSAwKSB7XG4gICAgICBwb3B1cFRyYW5zaXRpb25OYW1lID0gXCJzbGlkZS1yaWdodFwiXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBwb3B1cD17cG9wdXB9XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tcG9wb3ZlcmAsIHBvcHVwQ2xhc3NOYW1lLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tcG9wb3Zlcl9ub0Fycm93YF06ICFhcnJvd2VkLFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXJlbW92ZUNvbnRlbnRQYWRkaW5nYF06XG4gICAgICAgICAgICAhYXJyb3dlZCB8fCB0eXBlb2YgcG9wdXAgIT09IFwic3RyaW5nXCIsXG4gICAgICAgIH0pfVxuICAgICAgICBwb3B1cFN0eWxlPXthcnJvd2VkID8gcG9wdXBTdHlsZSA6IHsgcGFkZGluZzogMCwgLi4ucG9wdXBTdHlsZSB9fVxuICAgICAgICBwb3B1cFRyYW5zaXRpb25OYW1lPXtwb3B1cFRyYW5zaXRpb25OYW1lfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gIH1cbilcblxuUG9wb3Zlci5kaXNwbGF5TmFtZSA9IFwiUG9wb3ZlclwiXG5cblBvcG92ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6L6557yY5a+56b2QXG4gICAqL1xuICBhbGlnbkVkZ2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm5bim5pyJ566t5aS0XG4gICAqL1xuICBhcnJvd2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5rCU5rOh5o+Q56S65piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxuICAvKipcbiAgICog5oyH5a6a5rCU5rOh5o+Q56S655qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50XG4gICAqL1xuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBtb3VzZUVudGVyIOaYvuekuueahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtb3VzZUxlYXZlIOa2iOWkseeahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDmmL7npLrlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOW8ueWHuuWGheWuuVxuICAgKi9cbiAgcG9wdXA6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5by55Ye65qGG55qE6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuueahOmZhOWKoOagt+W8j1xuICAgKi9cbiAgcG9wdXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOinpuWPkeaWueW8j1xuICAgKi9cbiAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mKFtcImhvdmVyXCIsIFwiZm9jdXNcIiwgXCJjbGlja1wiXSksXG4gIC8qKlxuICAgKiDmiYvliqjmjqfliLbmsJTms6Hmj5DnpLrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbn1cblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduRWRnZTogdHJ1ZSxcbiAgYXJyb3dlZDogdHJ1ZSxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgbW91c2VFbnRlckRlbGF5OiAwLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgb25WaXNpYmxlQ2hhbmdlOiAoKSA9PiB7fSxcbiAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgcG9wdXA6IFwi5paH5a2X5o+Q56S6XCIsXG4gIHBvcHVwQ2xhc3NOYW1lOiBcIlwiLFxuICBwb3B1cFN0eWxlOiB7fSxcbiAgdHJpZ2dlcjogXCJob3ZlclwiLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iXX0=