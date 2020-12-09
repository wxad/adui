"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popTrigger = _interopRequireDefault(require("../pop-trigger"));

var _configProvider = require("../config-provider");

var _placements = _interopRequireDefault(require("./placements"));

var _Popup = _interopRequireDefault(require("./Popup"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-tooltip";
var Tooltip = (0, _react.forwardRef)(function (_ref, ref) {
  var alignEdge = _ref.alignEdge,
      autoAdjustPlacement = _ref.autoAdjustPlacement,
      children = _ref.children,
      defaultVisible = _ref.defaultVisible,
      getPopupContainer = _ref.getPopupContainer,
      onVisibleChange = _ref.onVisibleChange,
      placementProp = _ref.placement,
      popup = _ref.popup,
      popupClassName = _ref.popupClassName,
      popupStyle = _ref.popupStyle,
      trigger = _ref.trigger,
      visibleProp = _ref.visible,
      otherProps = _objectWithoutProperties(_ref, ["alignEdge", "autoAdjustPlacement", "children", "defaultVisible", "getPopupContainer", "onVisibleChange", "placement", "popup", "popupClassName", "popupStyle", "trigger", "visible"]);

  var triggerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(placementProp || "bottom"),
      _useState2 = _slicedToArray(_useState, 2),
      placement = _useState2[0],
      setPlacement = _useState2[1];

  var _useState3 = (0, _react.useState)(visibleProp),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      current: triggerRef.current
    };
  });

  if (visibleProp !== null && visible !== visibleProp) {
    setVisible(!!visibleProp);
  }

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      getPopupContainerContext = _useContext.getPopupContainer;

  var getPopupStyle = function getPopupStyle() {
    var transformOrigin = {
      x: "50%",
      y: "50%"
    };
    var extraStyle = {};

    if (popupStyle) {
      if (placement.indexOf("top") === 0) {
        transformOrigin.y = "100%";

        if (typeof popupStyle.paddingBottom === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingBottom = "8px";
        }
      } else if (placement.indexOf("bottom") === 0) {
        transformOrigin.y = "-4px";

        if (typeof popupStyle.paddingTop === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingTop = "8px";
        }
      } else if (placement.indexOf("right") === 0) {
        transformOrigin.x = "0%";

        if (typeof popupStyle.paddingLeft === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingLeft = "8px";
        }
      } else if (placement.indexOf("left") === 0) {
        transformOrigin.x = "100%";

        if (typeof popupStyle.paddingRight === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingRight = "8px";
        }
      }

      if (placement.includes("Left")) {
        transformOrigin.x = "18px";
      } else if (placement.includes("Right")) {
        transformOrigin.x = "calc(100% - 18px)";
      } else if (placement.includes("Top")) {
        transformOrigin.y = "10px";
      } else if (placement.includes("Bottom")) {
        transformOrigin.y = "calc(100% - 10px)";
      }

      extraStyle.transformOrigin = "".concat(transformOrigin.x, " ").concat(transformOrigin.y);
    }

    return _objectSpread(_objectSpread({}, extraStyle), popupStyle);
  };

  var handlePopupAlign = function handlePopupAlign(node) {
    var rect = node.getBoundingClientRect();
    var width = rect.width,
        height = rect.height,
        Y = rect.top,
        X = rect.left;
    var newPlacement = placement;
    setTimeout(function () {
      if (triggerRef.current && triggerRef.current.getRootDomNode && placementProp) {
        var wrapperRect = triggerRef.current.getRootDomNode().getBoundingClientRect();

        if (placementProp.indexOf("top") === 0) {
          if (Y < 0 && placement.indexOf("top") === 0) {
            newPlacement = "bottom".concat(placement.slice(3));
          }

          if (Y > rect.height + wrapperRect.height + 8 && placement.indexOf("bottom") === 0) {
            newPlacement = "top".concat(placement.slice(6));
          }
        }

        if (placementProp.indexOf("bottom") === 0) {
          if (Y + height > window.innerHeight && placement.indexOf("bottom") === 0) {
            newPlacement = "top".concat(placement.slice(6));
          }

          if (wrapperRect.top + wrapperRect.height + height + 8 < window.innerHeight && placement.indexOf("top") === 0) {
            newPlacement = "bottom".concat(placement.slice(3));
          }
        }

        if (width + X > window.innerWidth) {
          if (["topLeft", "top", "bottomLeft", "bottom"].includes(newPlacement)) {
            newPlacement = "".concat(newPlacement.replace("Left", ""), "Right");
          }
        } else if (X < 0) {
          if (["topRight", "top", "bottomRight", "bottom"].includes(newPlacement)) {
            newPlacement = "".concat(newPlacement.replace("Right", ""), "Left");
          }
        }

        if (node.className.includes("-top")) {
          var nodeTop = node.style.top || "0";
          node.style.top = "unset";
          node.style.bottom = "-".concat(parseInt(nodeTop, 10) + height, "px");
        }

        if (placementProp.indexOf("left") === 0) {
          if (X < 0 && placement.indexOf("left") === 0) {
            newPlacement = "right".concat(placement.slice(4));
          }

          if (X > rect.width + wrapperRect.width + 8 && placement.indexOf("right") === 0) {
            newPlacement = "left".concat(placement.slice(5));
          }
        }

        if (placementProp.indexOf("right") === 0) {
          if (X + width > window.innerWidth && placement.indexOf("right") === 0) {
            newPlacement = "left".concat(placement.slice(5));
          }

          if (wrapperRect.left + wrapperRect.width + width + 8 < window.innerWidth && placement.indexOf("left") === 0) {
            newPlacement = "right".concat(placement.slice(4));
          }
        }

        if (newPlacement !== placement) {
          setPlacement(newPlacement);

          if (triggerRef.current.forcePopupAlign) {
            triggerRef.current.forcePopupAlign();
          }
        }
      }
    }, 0);
  };

  var handleVisibleChange = function handleVisibleChange(bool) {
    if (visibleProp === null) {
      setVisible(bool);
    }

    if (onVisibleChange) {
      onVisibleChange(bool);
    }
  };

  return _react["default"].createElement(_popTrigger["default"], _extends({
    popupClassName: (0, _classnames["default"])(popupClassName, "".concat(prefix, "-base"), "".concat(prefix, "-base-").concat(placement)),
    ref: triggerRef,
    action: trigger ? [trigger] : ["hover"],
    builtinPlacements: (0, _placements["default"])({
      alignEdge: alignEdge,
      autoAdjustPlacement: autoAdjustPlacement
    }),
    defaultPopupVisible: defaultVisible,
    getPopupContainer: getPopupContainer || getPopupContainerContext,
    onPopupVisibleChange: handleVisibleChange,
    onPopupAlign: handlePopupAlign,
    popup: _react["default"].createElement(_Popup["default"], {
      content: popup,
      trigger: triggerRef.current
    }),
    popupPlacement: placement,
    popupStyle: getPopupStyle(),
    popupVisible: visible
  }, otherProps), children);
});
Tooltip.displayName = "Tooltip";
Tooltip.propTypes = {
  alignEdge: _propTypes["default"].bool,
  autoAdjustPlacement: _propTypes["default"].bool,
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
  popupTransitionName: _propTypes["default"].string,
  trigger: _propTypes["default"].oneOf(["hover", "focus", "click"]),
  visible: _propTypes["default"].oneOf([null, true, false])
};
Tooltip.defaultProps = {
  alignEdge: false,
  autoAdjustPlacement: true,
  children: "",
  defaultVisible: null,
  getPopupContainer: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  onVisibleChange: function onVisibleChange() {},
  placement: "bottom",
  popup: "复制",
  popupClassName: "",
  popupStyle: {},
  popupTransitionName: "zoom-big-fast",
  trigger: "hover",
  visible: null
};
var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUb29sdGlwIiwicmVmIiwiYWxpZ25FZGdlIiwiYXV0b0FkanVzdFBsYWNlbWVudCIsImNoaWxkcmVuIiwiZGVmYXVsdFZpc2libGUiLCJnZXRQb3B1cENvbnRhaW5lciIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudFByb3AiLCJwbGFjZW1lbnQiLCJwb3B1cCIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBTdHlsZSIsInRyaWdnZXIiLCJ2aXNpYmxlUHJvcCIsInZpc2libGUiLCJvdGhlclByb3BzIiwidHJpZ2dlclJlZiIsInNldFBsYWNlbWVudCIsInNldFZpc2libGUiLCJjdXJyZW50IiwiQ29uZmlnQ29udGV4dCIsImdldFBvcHVwQ29udGFpbmVyQ29udGV4dCIsImdldFBvcHVwU3R5bGUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ4IiwieSIsImV4dHJhU3R5bGUiLCJpbmRleE9mIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJpbmNsdWRlcyIsImhhbmRsZVBvcHVwQWxpZ24iLCJub2RlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiWSIsInRvcCIsIlgiLCJsZWZ0IiwibmV3UGxhY2VtZW50Iiwic2V0VGltZW91dCIsImdldFJvb3REb21Ob2RlIiwid3JhcHBlclJlY3QiLCJjb25jYXQiLCJzbGljZSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJub2RlVG9wIiwic3R5bGUiLCJib3R0b20iLCJwYXJzZUludCIsImZvcmNlUG9wdXBBbGlnbiIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImZ1bmMiLCJtb3VzZUVudGVyRGVsYXkiLCJudW1iZXIiLCJtb3VzZUxlYXZlRGVsYXkiLCJzdHJpbmciLCJvYmplY3QiLCJwb3B1cFRyYW5zaXRpb25OYW1lIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsY0FBZjtBQXdFQSxJQUFNQyxPQUNxQixHQUFHLHVCQUM1QixnQkFnQkVDLEdBaEJGLEVBaUJLO0FBQUEsTUFmREMsU0FlQyxRQWZEQSxTQWVDO0FBQUEsTUFkREMsbUJBY0MsUUFkREEsbUJBY0M7QUFBQSxNQWJEQyxRQWFDLFFBYkRBLFFBYUM7QUFBQSxNQVpEQyxjQVlDLFFBWkRBLGNBWUM7QUFBQSxNQVhEQyxpQkFXQyxRQVhEQSxpQkFXQztBQUFBLE1BVkRDLGVBVUMsUUFWREEsZUFVQztBQUFBLE1BVFVDLGFBU1YsUUFUREMsU0FTQztBQUFBLE1BUkRDLEtBUUMsUUFSREEsS0FRQztBQUFBLE1BUERDLGNBT0MsUUFQREEsY0FPQztBQUFBLE1BTkRDLFVBTUMsUUFOREEsVUFNQztBQUFBLE1BTERDLE9BS0MsUUFMREEsT0FLQztBQUFBLE1BSlFDLFdBSVIsUUFKREMsT0FJQztBQUFBLE1BSEVDLFVBR0Y7O0FBQ0gsTUFBTUMsVUFBVSxHQUFHLG9CQUFuQjs7QUFERyxrQkFFK0IscUJBQVNULGFBQWEsSUFBSSxRQUExQixDQUYvQjtBQUFBO0FBQUEsTUFFSUMsU0FGSjtBQUFBLE1BRWVTLFlBRmY7O0FBQUEsbUJBRzJCLHFCQUFTSixXQUFULENBSDNCO0FBQUE7QUFBQSxNQUdJQyxPQUhKO0FBQUEsTUFHYUksVUFIYjs7QUFLSCxrQ0FBb0JsQixHQUFwQixFQUF5QjtBQUFBLFdBQU87QUFDOUJtQixNQUFBQSxPQUFPLEVBQUVILFVBQVUsQ0FBQ0c7QUFEVSxLQUFQO0FBQUEs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TXJCOEQsRUFBQUEsZUFBZSxFQUFFLENBTkk7QUFPckJFLEVBQUFBLGVBQWUsRUFBRSxHQVBJO0FBUXJCL0QsRUFBQUEsZUFBZSxFQUFFLDJCQUFNLENBQUUsQ0FSSjtBQVNyQkUsRUFBQUEsU0FBUyxFQUFFLFFBVFU7QUFVckJDLEVBQUFBLEtBQUssRUFBRSxJQVZjO0FBV3JCQyxFQUFBQSxjQUFjLEVBQUUsRUFYSztBQVlyQkMsRUFBQUEsVUFBVSxFQUFFLEVBWlM7QUFhckI2RCxFQUFBQSxtQkFBbUIsRUFBRSxlQWJBO0FBY3JCNUQsRUFBQUEsT0FBTyxFQUFFLE9BZFk7QUFlckJFLEVBQUFBLE9BQU8sRUFBRTtBQWZZLENBQXZCO2VBa0JlZixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBQb3BUcmlnZ2VyLCB7IElUcmlnZ2VyLCBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IGdldFBsYWNlbWVudHMgZnJvbSBcIi4vcGxhY2VtZW50c1wiXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10b29sdGlwXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVG9vbHRpcFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbovrnnvJjlr7npvZBcbiAgICovXG4gIGFsaWduRWRnZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOiHquWKqOiwg+aVtOS9jee9rlxuICAgKi9cbiAgYXV0b0FkanVzdFBsYWNlbWVudD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuuaYr+WQpum7mOiupOaYvuekulxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a5rCU5rOh5o+Q56S655qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICAvKipcbiAgICogbW91c2VFbnRlciDmmL7npLrnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyXG4gIC8qKlxuICAgKiBtb3VzZUxlYXZlIOa2iOWkseeahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXJcbiAgLyoqXG4gICAqIOaYvuekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwb3B1cD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5by55Ye65YaF5a65XG4gICAqL1xuICBwb3B1cENsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5rCU5rOh5o+Q56S655qE6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBwb3B1cFRyYW5zaXRpb25OYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDmoLflvI9cbiAgICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICAvKipcbiAgICog5by55Ye65qGG55qE5Yqo55S757G75ZCN77yM5Yqo55S75qC85byP6YG15b6qIHJjLWFuaW1hdGVcbiAgICovXG4gIHBvcHVwU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgbnVsbFxuICAvKipcbiAgICog6Kem5Y+R5pa55byPXG4gICAqL1xuICB0cmlnZ2VyPzogXCJob3ZlclwiIHwgXCJmb2N1c1wiIHwgXCJjbGlja1wiXG4gIC8qKlxuICAgKiDmiYvliqjmjqfliLbmsJTms6Hmj5DnpLrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU/OiBudWxsIHwgYm9vbGVhblxufVxuXG4vKipcbiAqIOW3peWFt+aPkOekuueUqOS6jumSiOWvueafkOS4quWFg+e0oOeahOOAgei9u+mHj+eahOaTjeS9nOivtOaYjuOAglxuICog5LiO5rCU5rOh5o+Q56S6IFBvcG92ZXIg5LiN5ZCM77yM5bel5YW35o+Q56S6IFRvb2x0aXAg5LiN5om/6L295aSN5p2C5YaF5a655L+h5oGv77yM6ICM5Li76KaB55So5LqO6Kej6YeK5bel5YW355qE5pON5L2c5ZCr5LmJ77yM5aaC4oCc5aSN5Yi24oCd44CB4oCc57yW6L6R4oCd44CB4oCc5Yig6Zmk4oCd562J44CCXG4gKiBUb29sdGlwIOaYr+WfuuS6jiBQb3BUcmlnZ2VyIOi/m+ihjOWwgeijheeahOOAglxuICogVG9vbHRpcCDotJ/otKPlrprkuYnnrq3lpLTkuI7lhoXlrrnnmoTnm7jlhbPmoLflvI/jgIJcbiAqL1xuY29uc3QgVG9vbHRpcDogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxJVG9vbHRpcFByb3BzICZcbiAgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+PiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhbGlnbkVkZ2UsXG4gICAgICBhdXRvQWRqdXN0UGxhY2VtZW50LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkZWZhdWx0VmlzaWJsZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgb25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRQcm9wLFxuICAgICAgcG9wdXAsXG4gICAgICBwb3B1cENsYXNzTmFtZSxcbiAgICAgIHBvcHVwU3R5bGUsXG4gICAgICB0cmlnZ2VyLFxuICAgICAgdmlzaWJsZTogdmlzaWJsZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVRvb2x0aXBQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgdHJpZ2dlclJlZiA9IHVzZVJlZjxJVHJpZ2dlcj4oKVxuICAgIGNvbnN0IFtwbGFjZW1lbnQsIHNldFBsYWNlbWVudF0gPSB1c2VTdGF0ZShwbGFjZW1lbnRQcm9wIHx8IFwiYm90dG9tXCIpXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodmlzaWJsZVByb3ApXG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGN1cnJlbnQ6IHRyaWdnZXJSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gdmlzaWJsZVByb3ApIHtcbiAgICAgIHNldFZpc2libGUoISF2aXNpYmxlUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCB7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSA9IHVzZUNvbnRleHQoXG4gICAgICBDb25maWdDb250ZXh0XG4gICAgKVxuXG4gICAgLyoqXG4gICAgICog5qC55o2uIHBsYWNlbWVudCDorr7nva7nm7jlhbPmoLflvI9cbiAgICAgKi9cbiAgICBjb25zdCBnZXRQb3B1cFN0eWxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgICB4OiBcIjUwJVwiLFxuICAgICAgICB5OiBcIjUwJVwiLFxuICAgICAgfVxuICAgICAgY29uc3QgZXh0cmFTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9XG4gICAgICBpZiAocG9wdXBTdHlsZSkge1xuICAgICAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoXCJ0b3BcIikgPT09IDApIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueSA9IFwiMTAwJVwiXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZ0JvdHRvbSA9PT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZyA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXh0cmFTdHlsZS5wYWRkaW5nQm90dG9tID0gXCI4cHhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5kZXhPZihcImJvdHRvbVwiKSA9PT0gMCkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi55ID0gXCItNHB4XCJcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nVG9wID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBleHRyYVN0eWxlLnBhZGRpbmdUb3AgPSBcIjhweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKFwicmlnaHRcIikgPT09IDApIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueCA9IFwiMCVcIlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmdMZWZ0ID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBleHRyYVN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI4cHhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5kZXhPZihcImxlZnRcIikgPT09IDApIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueCA9IFwiMTAwJVwiXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZ1JpZ2h0ID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBleHRyYVN0eWxlLnBhZGRpbmdSaWdodCA9IFwiOHB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxhY2VtZW50LmluY2x1ZGVzKFwiTGVmdFwiKSkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi54ID0gXCIxOHB4XCJcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoXCJSaWdodFwiKSkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi54ID0gXCJjYWxjKDEwMCUgLSAxOHB4KVwiXG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluY2x1ZGVzKFwiVG9wXCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnkgPSBcIjEwcHhcIlxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmNsdWRlcyhcIkJvdHRvbVwiKSkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi55ID0gXCJjYWxjKDEwMCUgLSAxMHB4KVwiXG4gICAgICAgIH1cbiAgICAgICAgZXh0cmFTdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBgJHt0cmFuc2Zvcm1PcmlnaW4ueH0gJHt0cmFuc2Zvcm1PcmlnaW4ueX1gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmV4dHJhU3R5bGUsXG4gICAgICAgIC4uLnBvcHVwU3R5bGUsXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5q2k5pa55rOV55qE55uu55qE5piv5ZyoIHdpbmRvdyDml6Dms5XmmL7npLrlrozmlbQgcG9wdXAg5pe277yM6LCD5pW0IHBsYWNlbWVudO+8m1xuICAgICAqIOWPr+iDveWtmOWcqCB4LCB5IOi9tOmDvemcgOimgeiwg+aVtOeahOaDheWGte+8jFxuICAgICAqIOavlOWmguWcqOWxj+W5leWPs+S4i+inkueahCBcImJvdHRvbUxlZnRcIiB8fCBcImJvdHRvbVwi77yM6YKj5LmI55uu5qCH5piv5bCG5YW26LCD5pW05Li6IFwidG9wUmlnaHRcIuOAglxuICAgICAqXG4gICAgICogMjAxOTA4Mjg6IFxi5bCd6K+V5bCGIOKAnHRvcCrigJ0g55qEIENTUyDlrprkvY3ku44gdG9wOiB4eHg7IOaUueS4uiBib3R0b206IHh4eDtcbiAgICAgKiDlm6DkuLrov5nml7blgJnlpoLmnpzlvLnlh7rmoYbpq5jluqblj5jljJbnmoTor53vvIzku47kuIvlrprkvY3lsLHkuI3kvJrmnInmoLflvI/pl67popjjgIJcbiAgICAgKi9cbiAgICBjb25zdCBoYW5kbGVQb3B1cEFsaWduID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCB0b3A6IFksIGxlZnQ6IFggfSA9IHJlY3RcblxuICAgICAgbGV0IG5ld1BsYWNlbWVudDogYW55ID0gcGxhY2VtZW50XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHJpZ2dlclJlZi5jdXJyZW50ICYmXG4gICAgICAgICAgdHJpZ2dlclJlZi5jdXJyZW50LmdldFJvb3REb21Ob2RlICYmXG4gICAgICAgICAgcGxhY2VtZW50UHJvcFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVyUmVjdCA9IHRyaWdnZXJSZWYuY3VycmVudFxuICAgICAgICAgICAgLmdldFJvb3REb21Ob2RlKClcbiAgICAgICAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIHRvcCArIGJvdHRvbSDnmoTlrprkvY3kvJjljJZcbiAgICAgICAgICAgKiDlr7kgWSDovbTov5vooYzliKTmlq1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAocGxhY2VtZW50UHJvcC5pbmRleE9mKFwidG9wXCIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoWSA8IDAgJiYgcGxhY2VtZW50LmluZGV4T2YoXCJ0b3BcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJib3R0b21cIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDMpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBZID4gcmVjdC5oZWlnaHQgKyB3cmFwcGVyUmVjdC5oZWlnaHQgKyA4ICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwiYm90dG9tXCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJ0b3BcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDYpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGxhY2VtZW50UHJvcC5pbmRleE9mKFwiYm90dG9tXCIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFkgKyBoZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJib3R0b21cIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcInRvcFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHdyYXBwZXJSZWN0LnRvcCArIHdyYXBwZXJSZWN0LmhlaWdodCArIGhlaWdodCArIDggPFxuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAmJlxuICAgICAgICAgICAgICBwbGFjZW1lbnQuaW5kZXhPZihcInRvcFwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwiYm90dG9tXCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSgzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICog5a+5IFgg6L206L+b6KGM5Yik5patXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHdpZHRoICsgWCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFtcInRvcExlZnRcIiwgXCJ0b3BcIiwgXCJib3R0b21MZWZ0XCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKG5ld1BsYWNlbWVudClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBgJHtuZXdQbGFjZW1lbnQucmVwbGFjZShcIkxlZnRcIiwgXCJcIil9UmlnaHRgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChYIDwgMCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBbXCJ0b3BSaWdodFwiLCBcInRvcFwiLCBcImJvdHRvbVJpZ2h0XCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIG5ld1BsYWNlbWVudFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gYCR7bmV3UGxhY2VtZW50LnJlcGxhY2UoXCJSaWdodFwiLCBcIlwiKX1MZWZ0YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOWIpOaWreaYr+WQpuaYryBcInRvcCpcIiDlrprkvY1cbiAgICAgICAgICBpZiAobm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoXCItdG9wXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlVG9wID0gbm9kZS5zdHlsZS50b3AgfHwgXCIwXCJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUudG9wID0gXCJ1bnNldFwiXG4gICAgICAgICAgICBub2RlLnN0eWxlLmJvdHRvbSA9IGAtJHtwYXJzZUludChub2RlVG9wLCAxMCkgKyBoZWlnaHR9cHhgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogbGVmdCArIHJpZ2h0IOeahOWumuS9jeS8mOWMllxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJsZWZ0XCIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoWCA8IDAgJiYgcGxhY2VtZW50LmluZGV4T2YoXCJsZWZ0XCIpID09PSAwKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwicmlnaHRcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBYID4gcmVjdC53aWR0aCArIHdyYXBwZXJSZWN0LndpZHRoICsgOCAmJlxuICAgICAgICAgICAgICBwbGFjZW1lbnQuaW5kZXhPZihcInJpZ2h0XCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJsZWZ0XCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSg1KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBsYWNlbWVudFByb3AuaW5kZXhPZihcInJpZ2h0XCIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFggKyB3aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwicmlnaHRcIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcImxlZnRcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB3cmFwcGVyUmVjdC5sZWZ0ICsgd3JhcHBlclJlY3Qud2lkdGggKyB3aWR0aCArIDggPFxuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwibGVmdFwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwicmlnaHRcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXdQbGFjZW1lbnQgIT09IHBsYWNlbWVudCkge1xuICAgICAgICAgICAgc2V0UGxhY2VtZW50KG5ld1BsYWNlbWVudClcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyUmVmLmN1cnJlbnQuZm9yY2VQb3B1cEFsaWduKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJSZWYuY3VycmVudC5mb3JjZVBvcHVwQWxpZ24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICB9XG4gICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZShib29sKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wVHJpZ2dlclxuICAgICAgICBwb3B1cENsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZSxcbiAgICAgICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgICAgIGAke3ByZWZpeH0tYmFzZS0ke3BsYWNlbWVudH1gXG4gICAgICAgICl9XG4gICAgICAgIHJlZj17dHJpZ2dlclJlZn1cbiAgICAgICAgYWN0aW9uPXt0cmlnZ2VyID8gW3RyaWdnZXJdIDogW1wiaG92ZXJcIl19XG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzPXtnZXRQbGFjZW1lbnRzKHsgYWxpZ25FZGdlLCBhdXRvQWRqdXN0UGxhY2VtZW50IH0pfVxuICAgICAgICBkZWZhdWx0UG9wdXBWaXNpYmxlPXtkZWZhdWx0VmlzaWJsZX1cbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgIG9uUG9wdXBBbGlnbj17aGFuZGxlUG9wdXBBbGlnbn1cbiAgICAgICAgcG9wdXA9ezxQb3B1cCBjb250ZW50PXtwb3B1cH0gdHJpZ2dlcj17dHJpZ2dlclJlZi5jdXJyZW50fSAvPn1cbiAgICAgICAgcG9wdXBQbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgcG9wdXBTdHlsZT17Z2V0UG9wdXBTdHlsZSgpfVxuICAgICAgICBwb3B1cFZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1BvcFRyaWdnZXI+XG4gICAgKVxuICB9XG4pXG5cblRvb2x0aXAuZGlzcGxheU5hbWUgPSBcIlRvb2x0aXBcIlxuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpui+uee8mOWvuem9kFxuICAgKi9cbiAgYWxpZ25FZGdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOiHquWKqOiwg+aVtOS9jee9rlxuICAgKi9cbiAgYXV0b0FkanVzdFBsYWNlbWVudDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuuaYr+WQpum7mOiupOaYvuekulxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbiAgLyoqXG4gICAqIOaMh+WumuawlOazoeaPkOekuueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBtb3VzZUVudGVyIOaYvuekuueahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBtb3VzZUxlYXZlIOa2iOWkseeahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDmmL7npLrlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ0b3BMZWZ0XCIsXG4gICAgXCJ0b3BSaWdodFwiLFxuICAgIFwiYm90dG9tTGVmdFwiLFxuICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICBcImxlZnRUb3BcIixcbiAgICBcImxlZnRCb3R0b21cIixcbiAgICBcInJpZ2h0VG9wXCIsXG4gICAgXCJyaWdodEJvdHRvbVwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOW8ueWHuuWGheWuuVxuICAgKi9cbiAgcG9wdXA6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5rCU5rOh5o+Q56S655qE6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuueahOmZhOWKoOagt+W8j1xuICAgKi9cbiAgcG9wdXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOW8ueWHuuahhueahOWKqOeUu+exu+WQje+8jOWKqOeUu+agvOW8j+mBteW+qiByYy1hbmltYXRlXG4gICAqL1xuICBwb3B1cFRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6Kem5Y+R5pa55byPXG4gICAqL1xuICB0cmlnZ2VyOiBQcm9wVHlwZXMub25lT2YoW1wiaG92ZXJcIiwgXCJmb2N1c1wiLCBcImNsaWNrXCJdKSxcbiAgLyoqXG4gICAqIOaJi+WKqOaOp+WItuawlOazoeaPkOekuuaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxufVxuXG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxpZ25FZGdlOiBmYWxzZSxcbiAgYXV0b0FkanVzdFBsYWNlbWVudDogdHJ1ZSxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGRlZmF1bHRWaXNpYmxlOiBudWxsLFxuICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgbW91c2VFbnRlckRlbGF5OiAwLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgb25WaXNpYmxlQ2hhbmdlOiAoKSA9PiB7fSxcbiAgcGxhY2VtZW50OiBcImJvdHRvbVwiLFxuICBwb3B1cDogXCLlpI3liLZcIixcbiAgcG9wdXBDbGFzc05hbWU6IFwiXCIsXG4gIHBvcHVwU3R5bGU6IHt9LFxuICBwb3B1cFRyYW5zaXRpb25OYW1lOiBcInpvb20tYmlnLWZhc3RcIixcbiAgdHJpZ2dlcjogXCJob3ZlclwiLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iXX0=