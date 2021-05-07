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
      popupTransitionName = _ref.popupTransitionName,
      trigger = _ref.trigger,
      visibleProp = _ref.visible,
      otherProps = _objectWithoutProperties(_ref, ["alignEdge", "autoAdjustPlacement", "children", "defaultVisible", "getPopupContainer", "onVisibleChange", "placement", "popup", "popupClassName", "popupStyle", "popupTransitionName", "trigger", "visible"]);

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
          extraStyle.paddingBottom = "12px";
        }
      } else if (placement.indexOf("bottom") === 0) {
        transformOrigin.y = "-6px";

        if (typeof popupStyle.paddingTop === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingTop = "12px";
        }
      } else if (placement.indexOf("right") === 0) {
        transformOrigin.x = "0%";

        if (typeof popupStyle.paddingLeft === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingLeft = "12px";
        }
      } else if (placement.indexOf("left") === 0) {
        transformOrigin.x = "100%";

        if (typeof popupStyle.paddingRight === "undefined" && typeof popupStyle.padding === "undefined") {
          extraStyle.paddingRight = "12px";
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

          if (Y > rect.height + wrapperRect.height + 12 && placement.indexOf("bottom") === 0) {
            newPlacement = "top".concat(placement.slice(6));
          }
        }

        if (placementProp.indexOf("bottom") === 0) {
          if (Y + height > window.innerHeight && placement.indexOf("bottom") === 0) {
            newPlacement = "top".concat(placement.slice(6));
          }

          if (wrapperRect.top + wrapperRect.height + height + 12 < window.innerHeight && placement.indexOf("top") === 0) {
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

          if (X > rect.width + wrapperRect.width + 12 && placement.indexOf("right") === 0) {
            newPlacement = "left".concat(placement.slice(5));
          }
        }

        if (placementProp.indexOf("right") === 0) {
          if (X + width > window.innerWidth && placement.indexOf("right") === 0) {
            newPlacement = "left".concat(placement.slice(5));
          }

          if (wrapperRect.left + wrapperRect.width + width + 12 < window.innerWidth && placement.indexOf("left") === 0) {
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
    popupMotion: {
      motionName: popupTransitionName,
      motionDeadline: 1000
    },
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
  visible: null,
  zIndex: "var(--z-index-tooltip)"
};
var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUb29sdGlwIiwicmVmIiwiYWxpZ25FZGdlIiwiYXV0b0FkanVzdFBsYWNlbWVudCIsImNoaWxkcmVuIiwiZGVmYXVsdFZpc2libGUiLCJnZXRQb3B1cENvbnRhaW5lciIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudFByb3AiLCJwbGFjZW1lbnQiLCJwb3B1cCIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBTdHlsZSIsInBvcHVwVHJhbnNpdGlvbk5hbWUiLCJ0cmlnZ2VyIiwidmlzaWJsZVByb3AiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsInRyaWdnZXJSZWYiLCJzZXRQbGFjZW1lbnQiLCJzZXRWaXNpYmxlIiwiY3VycmVudCIsIkNvbmZpZ0NvbnRleHQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJnZXRQb3B1cFN0eWxlIiwidHJhbnNmb3JtT3JpZ2luIiwieCIsInkiLCJleHRyYVN0eWxlIiwiaW5kZXhPZiIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiaW5jbHVkZXMiLCJoYW5kbGVQb3B1cEFsaWduIiwibm9kZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIlkiLCJ0b3AiLCJYIiwibGVmdCIsIm5ld1BsYWNlbWVudCIsInNldFRpbWVvdXQiLCJnZXRSb290RG9tTm9kZSIsIndyYXBwZXJSZWN0IiwiY29uY2F0Iiwic2xpY2UiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwibm9kZVRvcCIsInN0eWxlIiwiYm90dG9tIiwicGFyc2VJbnQiLCJmb3JjZVBvcHVwQWxpZ24iLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiYm9vbCIsIm1vdGlvbk5hbWUiLCJtb3Rpb25EZWFkbGluZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5Iiwic3RyaW5nIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiekluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsY0FBZjtBQXdFQSxJQUFNQyxPQUVMLEdBQUcsdUJBQ0YsZ0JBaUJFQyxHQWpCRixFQWtCSztBQUFBLE1BaEJEQyxTQWdCQyxRQWhCREEsU0FnQkM7QUFBQSxNQWZEQyxtQkFlQyxRQWZEQSxtQkFlQztBQUFBLE1BZERDLFFBY0MsUUFkREEsUUFjQztBQUFBLE1BYkRDLGNBYUMsUUFiREEsY0FhQztBQUFBLE1BWkRDLGlCQVlDLFFBWkRBLGlCQVlDO0FBQUEsTUFYREMsZUFXQyxRQVhEQSxlQVdDO0FBQUEsTUFWVUMsYUFVVixRQVZEQyxTQVVDO0FBQUEsTUFUREMsS0FTQyxRQVREQSxLQVNDO0FBQUEsTUFSREMsY0FRQyxRQVJEQSxjQVFDO0FBQUEsTUFQREMsVUFPQyxRQVBEQSxVQU9DO0FBQUEsTUFOREMsbUJBTUMsUUFOREEsbUJBTUM7QUFBQSxNQUxEQyxPQUtDLFFBTERBLE9BS0M7QUFBQSxNQUpRQyxXQUlSLFFBSkRDLE9BSUM7QUFBQSxNQUhFQyxVQUdGOztBQUNILE1BQU1DLFVBQVUsR0FBRyxvQkFBbkI7O0FBREcsa0JBRStCLHFCQUFTVixhQUFhLElBQUksUUFBMUIsQ0FGL0I7QUFBQTtBQUFBLE1BRUlDLFNBRko7QUFBQSxNQUVlVSxZQUZmOztBQUFBLG1CQUcyQixxQkFBU0osV0FBVCxDQUgzQjtBQUFBO0FBQUEsTUFHSUMsT0FISjtBQUFBLE1BR2FJLFVBSGI7O0FBS0gsa0NBQW9CbkIsR0FBcEIsRUFBeUI7QUFBQSxXQUFPO0FBQzlCb0IsTUFBQUEsT0FBTyxFQUFFSCxVQUFVLENBQUNHO0FBRFUsS0FBUDtBQUFBLEdBQXpCOztBQUtBLE1BQUlOLFdBQVcsS0FBSyxJQUFoQixJQUF3QkMsT0FBTyxLQUFLRCxXQUF4QyxFQUFxRDtBQUNuREssSUFBQUEsVUFBVSxDQUFDLENBQUMsQ0FBQ0wsV0FBSCxDQUFWO0FBQ0Q7O0FBWkUsb0JBY3FELHVCQUN0RE8sNkJBRHNELENBZHJEO0FBQUEsTUFjd0JDLHdCQWR4QixlQWNLakIsaUJBZEw7O0FBcUJILE1BQU1rQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsUUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxNQUFBQSxDQUFDLEVBQUUsS0FEbUI7QUFFdEJDLE1BQUFBLENBQUMsRUFBRTtBQUZtQixLQUF4QjtBQUlBLFFBQU1DLFVBQStCLEdBQUcsRUFBeEM7O0FBQ0EsUUFBSWhCLFVBQUosRUFBZ0I7QUFDZCxVQUFJSCxTQUFTLENBQUNvQixPQUFWLENBQWtCLEtBQWxCLE1BQTZCLENBQWpDLEVBQW9DO0FBQ2xDSixRQUFBQSxlQUFlLENBQUNFLENBQWhCLEdBQW9CLE1BQXBCOztBQUNBLFlBQ0UsT0FBT2YsVUFBVSxDQUFDa0IsYUFBbEIsS0FBb0MsV0FBcEMsSUFDQSxPQUFPbEIsVUFBVSxDQUFDbUIsT0FBbEIsS0FBOEIsV0FGaEMsRUFHRTtBQUNBSCxVQUFBQSxVQUFVLENBQUNFLGFBQVgsR0FBMkIsTUFBM0I7QUFDRDtBQUNGLE9BUkQsTUFRTyxJQUFJckIsU0FBUyxDQUFDb0IsT0FBVixDQUFrQixRQUFsQixNQUFnQyxDQUFwQyxFQUF1QztBQUM1Q0osUUFBQUEsZUFBZSxDQUFDRSxDQUFoQixHQUFvQixNQUFwQjs7QUFDQSxZQUNFLE9BQU9mLFVBQVUsQ0FBQ29CLFVBQWxCLEtBQWlDLFdBQWpDLElBQ0EsT0FBT3BCLFVBQVUsQ0FBQ21CLE9BQWxCLEtBQThCLFdBRmhDLEVBR0U7QUFDQUgsVUFBQUEsVUFBVSxDQUFDSSxVQUFYLEdBQXdCLE1BQXhCO0FBQ0Q7QUFDRixPQVJNLE1BUUEsSUFBSXZCLFNBQVMsQ0FBQ29CLE9BQVYsQ0FBa0IsT0FBbEIsTUFBK0IsQ0FBbkMsRUFBc0M7QUFDM0NKLFFBQUFBLGVBQWUsQ0FBQ0MsQ0FBaEIsR0FBb0IsSUFBcEI7O0FBQ0EsWUFDRSxPQUFPZCxVQUFVLENBQUNxQixXQUFsQixLQUFrQyxXQUFsQyxJQUNBLE9BQU9yQixVQUFVLENBQUNtQixPQUFsQixLQUE4QixXQUZoQyxFQUdFO0FBQ0FILFVBQUFBLFVBQVUsQ0FBQ0ssV0FBWCxHQUF5QixNQUF6QjtBQUNEO0FBQ0YsT0FSTSxNQVFBLElBQUl4QixTQUFTLENBQUNvQixPQUFWLENBQWtCLE1BQWxCLE1BQThCLENBQWxDLEVBQXFDO0FBQzFDSixRQUFBQSxlQUFlLENBQUNDLENBQWhCLEdBQW9CLE1BQXBCOztBQUNBLFlBQ0UsT0FBT2QsVUFBVSxDQUFDc0IsWUFBbEIsS0FBbUMsV0FBbkMsSUFDQSxPQUFPdEIsVUFBVSxDQUFDbUIsT0FBbEIsS0FBOEIsV0FGaEMsRUFHRTtBQUNBSCxVQUFBQSxVQUFVLENBQUNNLFlBQVgsR0FBMEIsTUFBMUI7QUFDRDtBQUNGOztBQUVELFVBQUl6QixTQUFTLENBQUMwQixRQUFWLENBQW1CLE1BQW5CLENBQUosRUFBZ0M7QUFDOUJWLFFBQUFBLGVBQWUsQ0FBQ0MsQ0FBaEIsR0FBb0IsTUFBcEI7QUFDRCxPQUZELE1BRU8sSUFBSWpCLFNBQVMsQ0FBQzBCLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBSixFQUFpQztBQUN0Q1YsUUFBQUEsZUFBZSxDQUFDQyxDQUFoQixHQUFvQixtQkFBcEI7QUFDRCxPQUZNLE1BRUEsSUFBSWpCLFNBQVMsQ0FBQzBCLFFBQVYsQ0FBbUIsS0FBbkIsQ0FBSixFQUErQjtBQUNwQ1YsUUFBQUEsZUFBZSxDQUFDRSxDQUFoQixHQUFvQixNQUFwQjtBQUNELE9BRk0sTUFFQSxJQUFJbEIsU0FBUyxDQUFDMEIsUUFBVixDQUFtQixRQUFuQixDQUFKLEVBQWtDO0FBQ3ZDVixRQUFBQSxlQUFlLENBQUNFLENBQWhCLEdBQW9CLG1CQUFwQjtBQUNEOztBQUNEQyxNQUFBQSxVQUFVLENBQUNILGVBQVgsYUFBZ0NBLGVBQWUsQ0FBQ0MsQ0FBaEQsY0FBcURELGVBQWUsQ0FBQ0UsQ0FBckU7QUFDRDs7QUFFRCwyQ0FDS0MsVUFETCxHQUVLaEIsVUFGTDtBQUlELEdBekREOztBQW1FQSxNQUFNd0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQXVCO0FBQzlDLFFBQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxxQkFBTCxFQUFiO0FBRDhDLFFBRXRDQyxLQUZzQyxHQUVIRixJQUZHLENBRXRDRSxLQUZzQztBQUFBLFFBRS9CQyxNQUYrQixHQUVISCxJQUZHLENBRS9CRyxNQUYrQjtBQUFBLFFBRWxCQyxDQUZrQixHQUVISixJQUZHLENBRXZCSyxHQUZ1QjtBQUFBLFFBRVRDLENBRlMsR0FFSE4sSUFGRyxDQUVmTyxJQUZlO0FBSTlDLFFBQUlDLFlBQWlCLEdBQUdyQyxTQUF4QjtBQUVBc0MsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixVQUNFN0IsVUFBVSxDQUFDRyxPQUFYLElBQ0FILFVBQVUsQ0FBQ0csT0FBWCxDQUFtQjJCLGNBRG5CLElBRUF4QyxhQUhGLEVBSUU7QUFDQSxZQUFNeUMsV0FBVyxHQUFHL0IsVUFBVSxDQUFDRyxPQUFYLENBQ2pCMkIsY0FEaUIsR0FFakJULHFCQUZpQixFQUFwQjs7QUFPQSxZQUFJL0IsYUFBYSxDQUFDcUIsT0FBZCxDQUFzQixLQUF0QixNQUFpQyxDQUFyQyxFQUF3QztBQUN0QyxjQUFJYSxDQUFDLEdBQUcsQ0FBSixJQUFTakMsU0FBUyxDQUFDb0IsT0FBVixDQUFrQixLQUFsQixNQUE2QixDQUExQyxFQUE2QztBQUMzQ2lCLFlBQUFBLFlBQVksR0FBRyxTQUFTSSxNQUFULENBQWdCekMsU0FBUyxDQUFDMEMsS0FBVixDQUFnQixDQUFoQixDQUFoQixDQUFmO0FBQ0Q7O0FBQ0QsY0FDRVQsQ0FBQyxHQUFHSixJQUFJLENBQUNHLE1BQUwsR0FBY1EsV0FBVyxDQUFDUixNQUExQixHQUFtQyxFQUF2QyxJQUNBaEMsU0FBUyxDQUFDb0IsT0FBVixDQUFrQixRQUFsQixNQUFnQyxDQUZsQyxFQUdFO0FBQ0FpQixZQUFBQSxZQUFZLEdBQUcsTUFBTUksTUFBTixDQUFhekMsU0FBUyxDQUFDMEMsS0FBVixDQUFnQixDQUFoQixDQUFiLENBQWY7QUFDRDtBQUNGOztBQUNELFlBQUkzQyxhQUFhLENBQUNxQixPQUFkLENBQXNCLFFBQXRCLE1BQW9DLENBQXhDLEVBQTJDO0FBQ3pDLGNBQ0VhLENBQUMsR0FBR0QsTUFBSixHQUFhVyxNQUFNLENBQUNDLFdBQXBCLElBQ0E1QyxTQUFTLENBQUNvQixPQUFWLENBQWtCLFFBQWxCLE1BQWdDLENBRmxDLEVBR0U7QUFDQWlCLFlBQUFBLFlBQVksR0FBRyxNQUFNSSxNQUFOLENBQWF6QyxTQUFTLENBQUMwQyxLQUFWLENBQWdCLENBQWhCLENBQWIsQ0FBZjtBQUNEOztBQUNELGNBQ0VGLFdBQVcsQ0FBQ04sR0FBWixHQUFrQk0sV0FBVyxDQUFDUixNQUE5QixHQUF1Q0EsTUFBdkMsR0FBZ0QsRUFBaEQsR0FDRVcsTUFBTSxDQUFDQyxXQURULElBRUE1QyxTQUFTLENBQUNvQixPQUFWLENBQWtCLEtBQWxCLE1BQTZCLENBSC9CLEVBSUU7QUFDQWlCLFlBQUFBLFlBQVksR0FBRyxTQUFTSSxNQUFULENBQWdCekMsU0FBUyxDQUFDMEMsS0FBVixDQUFnQixDQUFoQixDQUFoQixDQUFmO0FBQ0Q7QUFDRjs7QUFJRCxZQUFJWCxLQUFLLEdBQUdJLENBQVIsR0FBWVEsTUFBTSxDQUFDRSxVQUF2QixFQUFtQztBQUNqQyxjQUNFLENBQUMsU0FBRCxFQUFZLEtBQVosRUFBbUIsWUFBbkIsRUFBaUMsUUFBakMsRUFBMkNuQixRQUEzQyxDQUFvRFcsWUFBcEQsQ0FERixFQUVFO0FBQ0FBLFlBQUFBLFlBQVksYUFBTUEsWUFBWSxDQUFDUyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLEVBQTdCLENBQU4sVUFBWjtBQUNEO0FBQ0YsU0FORCxNQU1PLElBQUlYLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDaEIsY0FDRSxDQUFDLFVBQUQsRUFBYSxLQUFiLEVBQW9CLGFBQXBCLEVBQW1DLFFBQW5DLEVBQTZDVCxRQUE3QyxDQUNFVyxZQURGLENBREYsRUFJRTtBQUNBQSxZQUFBQSxZQUFZLGFBQU1BLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixPQUFyQixFQUE4QixFQUE5QixDQUFOLFNBQVo7QUFDRDtBQUNGOztBQUdELFlBQUlsQixJQUFJLENBQUNtQixTQUFMLENBQWVyQixRQUFmLENBQXdCLE1BQXhCLENBQUosRUFBcUM7QUFDbkMsY0FBTXNCLE9BQU8sR0FBR3BCLElBQUksQ0FBQ3FCLEtBQUwsQ0FBV2YsR0FBWCxJQUFrQixHQUFsQztBQUNBTixVQUFBQSxJQUFJLENBQUNxQixLQUFMLENBQVdmLEdBQVgsR0FBaUIsT0FBakI7QUFDQU4sVUFBQUEsSUFBSSxDQUFDcUIsS0FBTCxDQUFXQyxNQUFYLGNBQXdCQyxRQUFRLENBQUNILE9BQUQsRUFBVSxFQUFWLENBQVIsR0FBd0JoQixNQUFoRDtBQUNEOztBQUtELFlBQUlqQyxhQUFhLENBQUNxQixPQUFkLENBQXNCLE1BQXRCLE1BQWtDLENBQXRDLEVBQXlDO0FBQ3ZDLGNBQUllLENBQUMsR0FBRyxDQUFKLElBQVNuQyxTQUFTLENBQUNvQixPQUFWLENBQWtCLE1BQWxCLE1BQThCLENBQTNDLEVBQThDO0FBQzVDaUIsWUFBQUEsWUFBWSxHQUFHLFFBQVFJLE1BQVIsQ0FBZXpDLFNBQVMsQ0FBQzBDLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBZixDQUFmO0FBQ0Q7O0FBQ0QsY0FDRVAsQ0FBQyxHQUFHTixJQUFJLENBQUNFLEtBQUwsR0FBYVMsV0FBVyxDQUFDVCxLQUF6QixHQUFpQyxFQUFyQyxJQUNBL0IsU0FBUyxDQUFDb0IsT0FBVixDQUFrQixPQUFsQixNQUErQixDQUZqQyxFQUdFO0FBQ0FpQixZQUFBQSxZQUFZLEdBQUcsT0FBT0ksTUFBUCxDQUFjekMsU0FBUyxDQUFDMEMsS0FBVixDQUFnQixDQUFoQixDQUFkLENBQWY7QUFDRDtBQUNGOztBQUNELFlBQUkzQyxhQUFhLENBQUNxQixPQUFkLENBQXNCLE9BQXRCLE1BQW1DLENBQXZDLEVBQTBDO0FBQ3hDLGNBQ0VlLENBQUMsR0FBR0osS0FBSixHQUFZWSxNQUFNLENBQUNFLFVBQW5CLElBQ0E3QyxTQUFTLENBQUNvQixPQUFWLENBQWtCLE9BQWxCLE1BQStCLENBRmpDLEVBR0U7QUFDQWlCLFlBQUFBLFlBQVksR0FBRyxPQUFPSSxNQUFQLENBQWN6QyxTQUFTLENBQUMwQyxLQUFWLENBQWdCLENBQWhCLENBQWQsQ0FBZjtBQUNEOztBQUNELGNBQ0VGLFdBQVcsQ0FBQ0osSUFBWixHQUFtQkksV0FBVyxDQUFDVCxLQUEvQixHQUF1Q0EsS0FBdkMsR0FBK0MsRUFBL0MsR0FDRVksTUFBTSxDQUFDRSxVQURULElBRUE3QyxTQUFTLENBQUNvQixPQUFWLENBQWtCLE1BQWxCLE1BQThCLENBSGhDLEVBSUU7QUFDQWlCLFlBQUFBLFlBQVksR0FBRyxRQUFRSSxNQUFSLENBQWV6QyxTQUFTLENBQUMwQyxLQUFWLENBQWdCLENBQWhCLENBQWYsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsWUFBSUwsWUFBWSxLQUFLckMsU0FBckIsRUFBZ0M7QUFDOUJVLFVBQUFBLFlBQVksQ0FBQzJCLFlBQUQsQ0FBWjs7QUFDQSxjQUFJNUIsVUFBVSxDQUFDRyxPQUFYLENBQW1Cd0MsZUFBdkIsRUFBd0M7QUFDdEMzQyxZQUFBQSxVQUFVLENBQUNHLE9BQVgsQ0FBbUJ3QyxlQUFuQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBdEdTLEVBc0dQLENBdEdPLENBQVY7QUF1R0QsR0E3R0Q7O0FBK0dBLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsSUFBRCxFQUFtQjtBQUM3QyxRQUFJaEQsV0FBVyxLQUFLLElBQXBCLEVBQTBCO0FBQ3hCSyxNQUFBQSxVQUFVLENBQUMyQyxJQUFELENBQVY7QUFDRDs7QUFDRCxRQUFJeEQsZUFBSixFQUFxQjtBQUNuQkEsTUFBQUEsZUFBZSxDQUFDd0QsSUFBRCxDQUFmO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFNBQ0UsZ0NBQUMsc0JBQUQ7QUFDRSxJQUFBLGNBQWMsRUFBRSw0QkFDZHBELGNBRGMsWUFFWFosTUFGVyxzQkFHWEEsTUFIVyxtQkFHSVUsU0FISixFQURsQjtBQU1FLElBQUEsR0FBRyxFQUFFUyxVQU5QO0FBT0UsSUFBQSxNQUFNLEVBQUVKLE9BQU8sR0FBRyxDQUFDQSxPQUFELENBQUgsR0FBZSxDQUFDLE9BQUQsQ0FQaEM7QUFRRSxJQUFBLGlCQUFpQixFQUFFLDRCQUFjO0FBQUVaLE1BQUFBLFNBQVMsRUFBVEEsU0FBRjtBQUFhQyxNQUFBQSxtQkFBbUIsRUFBbkJBO0FBQWIsS0FBZCxDQVJyQjtBQVNFLElBQUEsbUJBQW1CLEVBQUVFLGNBVHZCO0FBVUUsSUFBQSxpQkFBaUIsRUFBRUMsaUJBQWlCLElBQUlpQix3QkFWMUM7QUFXRSxJQUFBLG9CQUFvQixFQUFFdUMsbUJBWHhCO0FBWUUsSUFBQSxZQUFZLEVBQUUxQixnQkFaaEI7QUFhRSxJQUFBLEtBQUssRUFBRSxnQ0FBQyxpQkFBRDtBQUFPLE1BQUEsT0FBTyxFQUFFMUIsS0FBaEI7QUFBdUIsTUFBQSxPQUFPLEVBQUVRLFVBQVUsQ0FBQ0c7QUFBM0MsTUFiVDtBQWNFLElBQUEsY0FBYyxFQUFFWixTQWRsQjtBQWVFLElBQUEsV0FBVyxFQUFFO0FBQ1h1RCxNQUFBQSxVQUFVLEVBQUVuRCxtQkFERDtBQUVYb0QsTUFBQUEsY0FBYyxFQUFFO0FBRkwsS0FmZjtBQW1CRSxJQUFBLFVBQVUsRUFBRXpDLGFBQWEsRUFuQjNCO0FBb0JFLElBQUEsWUFBWSxFQUFFUjtBQXBCaEIsS0FxQk1DLFVBckJOLEdBdUJHYixRQXZCSCxDQURGO0FBMkJELENBOVBDLENBRko7QUFtUUFKLE9BQU8sQ0FBQ2tFLFdBQVIsR0FBc0IsU0FBdEI7QUFFQWxFLE9BQU8sQ0FBQ21FLFNBQVIsR0FBb0I7QUFJbEJqRSxFQUFBQSxTQUFTLEVBQUVrRSxzQkFBVUwsSUFKSDtBQVFsQjVELEVBQUFBLG1CQUFtQixFQUFFaUUsc0JBQVVMLElBUmI7QUFZbEIzRCxFQUFBQSxRQUFRLEVBQUVnRSxzQkFBVS9CLElBWkY7QUFnQmxCaEMsRUFBQUEsY0FBYyxFQUFFK0Qsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsQ0FBaEIsQ0FoQkU7QUFvQmxCL0QsRUFBQUEsaUJBQWlCLEVBQUU4RCxzQkFBVUUsSUFwQlg7QUF3QmxCQyxFQUFBQSxlQUFlLEVBQUVILHNCQUFVSSxNQXhCVDtBQTRCbEJDLEVBQUFBLGVBQWUsRUFBRUwsc0JBQVVJLE1BNUJUO0FBZ0NsQmpFLEVBQUFBLGVBQWUsRUFBRTZELHNCQUFVRSxJQWhDVDtBQW9DbEI3RCxFQUFBQSxTQUFTLEVBQUUyRCxzQkFBVUMsS0FBVixDQUFnQixDQUN6QixLQUR5QixFQUV6QixNQUZ5QixFQUd6QixPQUh5QixFQUl6QixRQUp5QixFQUt6QixTQUx5QixFQU16QixVQU55QixFQU96QixZQVB5QixFQVF6QixhQVJ5QixFQVN6QixTQVR5QixFQVV6QixZQVZ5QixFQVd6QixVQVh5QixFQVl6QixhQVp5QixDQUFoQixDQXBDTztBQXFEbEIzRCxFQUFBQSxLQUFLLEVBQUUwRCxzQkFBVS9CLElBckRDO0FBeURsQjFCLEVBQUFBLGNBQWMsRUFBRXlELHNCQUFVTSxNQXpEUjtBQTZEbEI5RCxFQUFBQSxVQUFVLEVBQUV3RCxzQkFBVU8sTUE3REo7QUFpRWxCOUQsRUFBQUEsbUJBQW1CLEVBQUV1RCxzQkFBVU0sTUFqRWI7QUFxRWxCNUQsRUFBQUEsT0FBTyxFQUFFc0Qsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixDQUFoQixDQXJFUztBQXlFbEJyRCxFQUFBQSxPQUFPLEVBQUVvRCxzQkFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsS0FBYixDQUFoQjtBQXpFUyxDQUFwQjtBQTRFQXJFLE9BQU8sQ0FBQzRFLFlBQVIsR0FBdUI7QUFDckIxRSxFQUFBQSxTQUFTLEVBQUUsS0FEVTtBQUVyQkMsRUFBQUEsbUJBQW1CLEVBQUUsSUFGQTtBQUdyQkMsRUFBQUEsUUFBUSxFQUFFLEVBSFc7QUFJckJDLEVBQUFBLGNBQWMsRUFBRSxJQUpLO0FBS3JCQyxFQUFBQSxpQkFBaUIsRUFBRSxJQUxFO0FBTXJCaUUsRUFBQUEsZUFBZSxFQUFFLENBTkk7QUFPckJFLEVBQUFBLGVBQWUsRUFBRSxHQVBJO0FBUXJCbEUsRUFBQUEsZUFBZSxFQUFFLDJCQUFNLENBQUUsQ0FSSjtBQVNyQkUsRUFBQUEsU0FBUyxFQUFFLFFBVFU7QUFVckJDLEVBQUFBLEtBQUssRUFBRSxJQVZjO0FBV3JCQyxFQUFBQSxjQUFjLEVBQUUsRUFYSztBQVlyQkMsRUFBQUEsVUFBVSxFQUFFLEVBWlM7QUFhckJDLEVBQUFBLG1CQUFtQixFQUFFLGVBYkE7QUFjckJDLEVBQUFBLE9BQU8sRUFBRSxPQWRZO0FBZXJCRSxFQUFBQSxPQUFPLEVBQUUsSUFmWTtBQWdCckI2RCxFQUFBQSxNQUFNLEVBQUU7QUFoQmEsQ0FBdkI7ZUFtQmU3RSxPIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFBvcFRyaWdnZXIsIHsgSVRyaWdnZXIsIFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgZ2V0UGxhY2VtZW50cyBmcm9tIFwiLi9wbGFjZW1lbnRzXCJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRvb2x0aXBcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUb29sdGlwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpui+uee8mOWvuem9kFxuICAgKi9cbiAgYWxpZ25FZGdlPzogYm9vbGVhblxuICAvKipcbiAgICog6Ieq5Yqo6LCD5pW05L2N572uXG4gICAqL1xuICBhdXRvQWRqdXN0UGxhY2VtZW50PzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5rCU5rOh5o+Q56S65piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZT86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprmsJTms6Hmj5DnpLrnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIC8qKlxuICAgKiBtb3VzZUVudGVyIOaYvuekuueahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXJcbiAgLyoqXG4gICAqIG1vdXNlTGVhdmUg5raI5aSx55qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlTGVhdmVEZWxheT86IG51bWJlclxuICAvKipcbiAgICog5pi+56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBvcHVwPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDlvLnlh7rlhoXlrrlcbiAgICovXG4gIHBvcHVwQ2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDnsbvlkI1cbiAgICovXG4gIHBvcHVwVHJhbnNpdGlvbk5hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuueahOmZhOWKoOagt+W8j1xuICAgKi9cbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIC8qKlxuICAgKiDlvLnlh7rmoYbnmoTliqjnlLvnsbvlkI3vvIzliqjnlLvmoLzlvI/pgbXlvqogcmMtYW5pbWF0ZVxuICAgKi9cbiAgcG9wdXBTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCBudWxsXG4gIC8qKlxuICAgKiDop6blj5HmlrnlvI9cbiAgICovXG4gIHRyaWdnZXI/OiBcImhvdmVyXCIgfCBcImZvY3VzXCIgfCBcImNsaWNrXCJcbiAgLyoqXG4gICAqIOaJi+WKqOaOp+WItuawlOazoeaPkOekuuaYr+WQpuaYvuekulxuICAgKi9cbiAgdmlzaWJsZT86IG51bGwgfCBib29sZWFuXG59XG5cbi8qKlxuICog5bel5YW35o+Q56S655So5LqO6ZKI5a+55p+Q5Liq5YWD57Sg55qE44CB6L276YeP55qE5pON5L2c6K+05piO44CCXG4gKiDkuI7msJTms6Hmj5DnpLogUG9wb3ZlciDkuI3lkIzvvIzlt6Xlhbfmj5DnpLogVG9vbHRpcCDkuI3mib/ovb3lpI3mnYLlhoXlrrnkv6Hmga/vvIzogIzkuLvopoHnlKjkuo7op6Pph4rlt6XlhbfnmoTmk43kvZzlkKvkuYnvvIzlpoLigJzlpI3liLbigJ3jgIHigJznvJbovpHigJ3jgIHigJzliKDpmaTigJ3nrYnjgIJcbiAqIFRvb2x0aXAg5piv5Z+65LqOIFBvcFRyaWdnZXIg6L+b6KGM5bCB6KOF55qE44CCXG4gKiBUb29sdGlwIOi0n+i0o+WumuS5ieeureWktOS4juWGheWuueeahOebuOWFs+agt+W8j+OAglxuICovXG5jb25zdCBUb29sdGlwOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICBJVG9vbHRpcFByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+XG4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGFsaWduRWRnZSxcbiAgICAgIGF1dG9BZGp1c3RQbGFjZW1lbnQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRlZmF1bHRWaXNpYmxlLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBvblZpc2libGVDaGFuZ2UsXG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFByb3AsXG4gICAgICBwb3B1cCxcbiAgICAgIHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgcG9wdXBTdHlsZSxcbiAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICB0cmlnZ2VyLFxuICAgICAgdmlzaWJsZTogdmlzaWJsZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVRvb2x0aXBQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgdHJpZ2dlclJlZiA9IHVzZVJlZjxJVHJpZ2dlcj4oKVxuICAgIGNvbnN0IFtwbGFjZW1lbnQsIHNldFBsYWNlbWVudF0gPSB1c2VTdGF0ZShwbGFjZW1lbnRQcm9wIHx8IFwiYm90dG9tXCIpXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodmlzaWJsZVByb3ApXG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIGN1cnJlbnQ6IHRyaWdnZXJSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gdmlzaWJsZVByb3ApIHtcbiAgICAgIHNldFZpc2libGUoISF2aXNpYmxlUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCB7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSA9IHVzZUNvbnRleHQoXG4gICAgICBDb25maWdDb250ZXh0XG4gICAgKVxuXG4gICAgLyoqXG4gICAgICog5qC55o2uIHBsYWNlbWVudCDorr7nva7nm7jlhbPmoLflvI9cbiAgICAgKi9cbiAgICBjb25zdCBnZXRQb3B1cFN0eWxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgICB4OiBcIjUwJVwiLFxuICAgICAgICB5OiBcIjUwJVwiLFxuICAgICAgfVxuICAgICAgY29uc3QgZXh0cmFTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9XG4gICAgICBpZiAocG9wdXBTdHlsZSkge1xuICAgICAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoXCJ0b3BcIikgPT09IDApIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueSA9IFwiMTAwJVwiXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZ0JvdHRvbSA9PT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZyA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXh0cmFTdHlsZS5wYWRkaW5nQm90dG9tID0gXCIxMnB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoXCJib3R0b21cIikgPT09IDApIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueSA9IFwiLTZweFwiXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZ1RvcCA9PT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZyA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXh0cmFTdHlsZS5wYWRkaW5nVG9wID0gXCIxMnB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMCkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi54ID0gXCIwJVwiXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZ0xlZnQgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ0xlZnQgPSBcIjEycHhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5kZXhPZihcImxlZnRcIikgPT09IDApIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueCA9IFwiMTAwJVwiXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZ1JpZ2h0ID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBleHRyYVN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMTJweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYWNlbWVudC5pbmNsdWRlcyhcIkxlZnRcIikpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueCA9IFwiMThweFwiXG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluY2x1ZGVzKFwiUmlnaHRcIikpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueCA9IFwiY2FsYygxMDAlIC0gMThweClcIlxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmNsdWRlcyhcIlRvcFwiKSkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi55ID0gXCIxMHB4XCJcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoXCJCb3R0b21cIikpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueSA9IFwiY2FsYygxMDAlIC0gMTBweClcIlxuICAgICAgICB9XG4gICAgICAgIGV4dHJhU3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYCR7dHJhbnNmb3JtT3JpZ2luLnh9ICR7dHJhbnNmb3JtT3JpZ2luLnl9YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5leHRyYVN0eWxlLFxuICAgICAgICAuLi5wb3B1cFN0eWxlLFxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOatpOaWueazleeahOebrueahOaYr+WcqCB3aW5kb3cg5peg5rOV5pi+56S65a6M5pW0IHBvcHVwIOaXtu+8jOiwg+aVtCBwbGFjZW1lbnTvvJtcbiAgICAgKiDlj6/og73lrZjlnKggeCwgeSDovbTpg73pnIDopoHosIPmlbTnmoTmg4XlhrXvvIxcbiAgICAgKiDmr5TlpoLlnKjlsY/luZXlj7PkuIvop5LnmoQgXCJib3R0b21MZWZ0XCIgfHwgXCJib3R0b21cIu+8jOmCo+S5iOebruagh+aYr+WwhuWFtuiwg+aVtOS4uiBcInRvcFJpZ2h0XCLjgIJcbiAgICAgKlxuICAgICAqIDIwMTkwODI4OiBcYuWwneivleWwhiDigJx0b3Aq4oCdIOeahCBDU1Mg5a6a5L2N5LuOIHRvcDogeHh4OyDmlLnkuLogYm90dG9tOiB4eHg7XG4gICAgICog5Zug5Li66L+Z5pe25YCZ5aaC5p6c5by55Ye65qGG6auY5bqm5Y+Y5YyW55qE6K+d77yM5LuO5LiL5a6a5L2N5bCx5LiN5Lya5pyJ5qC35byP6Zeu6aKY44CCXG4gICAgICovXG4gICAgY29uc3QgaGFuZGxlUG9wdXBBbGlnbiA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdG9wOiBZLCBsZWZ0OiBYIH0gPSByZWN0XG5cbiAgICAgIGxldCBuZXdQbGFjZW1lbnQ6IGFueSA9IHBsYWNlbWVudFxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRyaWdnZXJSZWYuY3VycmVudCAmJlxuICAgICAgICAgIHRyaWdnZXJSZWYuY3VycmVudC5nZXRSb290RG9tTm9kZSAmJlxuICAgICAgICAgIHBsYWNlbWVudFByb3BcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlclJlY3QgPSB0cmlnZ2VyUmVmLmN1cnJlbnRcbiAgICAgICAgICAgIC5nZXRSb290RG9tTm9kZSgpXG4gICAgICAgICAgICAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiB0b3AgKyBib3R0b20g55qE5a6a5L2N5LyY5YyWXG4gICAgICAgICAgICog5a+5IFkg6L206L+b6KGM5Yik5patXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHBsYWNlbWVudFByb3AuaW5kZXhPZihcInRvcFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKFkgPCAwICYmIHBsYWNlbWVudC5pbmRleE9mKFwidG9wXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwiYm90dG9tXCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSgzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWSA+IHJlY3QuaGVpZ2h0ICsgd3JhcHBlclJlY3QuaGVpZ2h0ICsgMTIgJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJib3R0b21cIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcInRvcFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJib3R0b21cIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWSArIGhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCAmJlxuICAgICAgICAgICAgICBwbGFjZW1lbnQuaW5kZXhPZihcImJvdHRvbVwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwidG9wXCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSg2KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgd3JhcHBlclJlY3QudG9wICsgd3JhcHBlclJlY3QuaGVpZ2h0ICsgaGVpZ2h0ICsgMTIgPFxuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAmJlxuICAgICAgICAgICAgICBwbGFjZW1lbnQuaW5kZXhPZihcInRvcFwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwiYm90dG9tXCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSgzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICog5a+5IFgg6L206L+b6KGM5Yik5patXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHdpZHRoICsgWCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFtcInRvcExlZnRcIiwgXCJ0b3BcIiwgXCJib3R0b21MZWZ0XCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKG5ld1BsYWNlbWVudClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBgJHtuZXdQbGFjZW1lbnQucmVwbGFjZShcIkxlZnRcIiwgXCJcIil9UmlnaHRgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChYIDwgMCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBbXCJ0b3BSaWdodFwiLCBcInRvcFwiLCBcImJvdHRvbVJpZ2h0XCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIG5ld1BsYWNlbWVudFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gYCR7bmV3UGxhY2VtZW50LnJlcGxhY2UoXCJSaWdodFwiLCBcIlwiKX1MZWZ0YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOWIpOaWreaYr+WQpuaYryBcInRvcCpcIiDlrprkvY1cbiAgICAgICAgICBpZiAobm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoXCItdG9wXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlVG9wID0gbm9kZS5zdHlsZS50b3AgfHwgXCIwXCJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUudG9wID0gXCJ1bnNldFwiXG4gICAgICAgICAgICBub2RlLnN0eWxlLmJvdHRvbSA9IGAtJHtwYXJzZUludChub2RlVG9wLCAxMCkgKyBoZWlnaHR9cHhgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogbGVmdCArIHJpZ2h0IOeahOWumuS9jeS8mOWMllxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJsZWZ0XCIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoWCA8IDAgJiYgcGxhY2VtZW50LmluZGV4T2YoXCJsZWZ0XCIpID09PSAwKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwicmlnaHRcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBYID4gcmVjdC53aWR0aCArIHdyYXBwZXJSZWN0LndpZHRoICsgMTIgJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwibGVmdFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBYICsgd2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCAmJlxuICAgICAgICAgICAgICBwbGFjZW1lbnQuaW5kZXhPZihcInJpZ2h0XCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJsZWZ0XCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSg1KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgd3JhcHBlclJlY3QubGVmdCArIHdyYXBwZXJSZWN0LndpZHRoICsgd2lkdGggKyAxMiA8XG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJsZWZ0XCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJyaWdodFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5ld1BsYWNlbWVudCAhPT0gcGxhY2VtZW50KSB7XG4gICAgICAgICAgICBzZXRQbGFjZW1lbnQobmV3UGxhY2VtZW50KVxuICAgICAgICAgICAgaWYgKHRyaWdnZXJSZWYuY3VycmVudC5mb3JjZVBvcHVwQWxpZ24pIHtcbiAgICAgICAgICAgICAgdHJpZ2dlclJlZi5jdXJyZW50LmZvcmNlUG9wdXBBbGlnbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgIH1cbiAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGJvb2wpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BUcmlnZ2VyXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICAgICAgYCR7cHJlZml4fS1iYXNlLSR7cGxhY2VtZW50fWBcbiAgICAgICAgKX1cbiAgICAgICAgcmVmPXt0cmlnZ2VyUmVmfVxuICAgICAgICBhY3Rpb249e3RyaWdnZXIgPyBbdHJpZ2dlcl0gOiBbXCJob3ZlclwiXX1cbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM9e2dldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2UsIGF1dG9BZGp1c3RQbGFjZW1lbnQgfSl9XG4gICAgICAgIGRlZmF1bHRQb3B1cFZpc2libGU9e2RlZmF1bHRWaXNpYmxlfVxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICBvblBvcHVwVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgb25Qb3B1cEFsaWduPXtoYW5kbGVQb3B1cEFsaWdufVxuICAgICAgICBwb3B1cD17PFBvcHVwIGNvbnRlbnQ9e3BvcHVwfSB0cmlnZ2VyPXt0cmlnZ2VyUmVmLmN1cnJlbnR9IC8+fVxuICAgICAgICBwb3B1cFBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBwb3B1cE1vdGlvbj17e1xuICAgICAgICAgIG1vdGlvbk5hbWU6IHBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgbW90aW9uRGVhZGxpbmU6IDEwMDAsXG4gICAgICAgIH19XG4gICAgICAgIHBvcHVwU3R5bGU9e2dldFBvcHVwU3R5bGUoKX1cbiAgICAgICAgcG9wdXBWaXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Qb3BUcmlnZ2VyPlxuICAgIClcbiAgfVxuKVxuXG5Ub29sdGlwLmRpc3BsYXlOYW1lID0gXCJUb29sdGlwXCJcblxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbovrnnvJjlr7npvZBcbiAgICovXG4gIGFsaWduRWRnZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDoh6rliqjosIPmlbTkvY3nva5cbiAgICovXG4gIGF1dG9BZGp1c3RQbGFjZW1lbnQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrmmK/lkKbpu5jorqTmmL7npLpcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDmjIflrprmsJTms6Hmj5DnpLrnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogbW91c2VFbnRlciDmmL7npLrnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbW91c2VMZWF2ZSDmtojlpLHnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VMZWF2ZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5pi+56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInRvcFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwicmlnaHRcIixcbiAgICBcImJvdHRvbVwiLFxuICAgIFwidG9wTGVmdFwiLFxuICAgIFwidG9wUmlnaHRcIixcbiAgICBcImJvdHRvbUxlZnRcIixcbiAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgXCJsZWZ0VG9wXCIsXG4gICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgXCJyaWdodFRvcFwiLFxuICAgIFwicmlnaHRCb3R0b21cIixcbiAgXSksXG4gIC8qKlxuICAgKiDlvLnlh7rlhoXlrrlcbiAgICovXG4gIHBvcHVwOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuueahOmZhOWKoOexu+WQjVxuICAgKi9cbiAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDmoLflvI9cbiAgICovXG4gIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbnmoTliqjnlLvnsbvlkI3vvIzliqjnlLvmoLzlvI/pgbXlvqogcmMtYW5pbWF0ZVxuICAgKi9cbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOinpuWPkeaWueW8j1xuICAgKi9cbiAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mKFtcImhvdmVyXCIsIFwiZm9jdXNcIiwgXCJjbGlja1wiXSksXG4gIC8qKlxuICAgKiDmiYvliqjmjqfliLbmsJTms6Hmj5DnpLrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbn1cblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduRWRnZTogZmFsc2UsXG4gIGF1dG9BZGp1c3RQbGFjZW1lbnQ6IHRydWUsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBkZWZhdWx0VmlzaWJsZTogbnVsbCxcbiAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIG9uVmlzaWJsZUNoYW5nZTogKCkgPT4ge30sXG4gIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgcG9wdXA6IFwi5aSN5Yi2XCIsXG4gIHBvcHVwQ2xhc3NOYW1lOiBcIlwiLFxuICBwb3B1cFN0eWxlOiB7fSxcbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogXCJ6b29tLWJpZy1mYXN0XCIsXG4gIHRyaWdnZXI6IFwiaG92ZXJcIixcbiAgdmlzaWJsZTogbnVsbCxcbiAgekluZGV4OiBcInZhcigtLXotaW5kZXgtdG9vbHRpcClcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIl19