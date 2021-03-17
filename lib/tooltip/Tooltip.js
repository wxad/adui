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
  visible: null
};
var _default = Tooltip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUb29sdGlwIiwicmVmIiwiYWxpZ25FZGdlIiwiYXV0b0FkanVzdFBsYWNlbWVudCIsImNoaWxkcmVuIiwiZGVmYXVsdFZpc2libGUiLCJnZXRQb3B1cENvbnRhaW5lciIsIm9uVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudFByb3AiLCJwbGFjZW1lbnQiLCJwb3B1cCIsInBvcHVwQ2xhc3NOYW1lIiwicG9wdXBTdHlsZSIsInBvcHVwVHJhbnNpdGlvbk5hbWUiLCJ0cmlnZ2VyIiwidmlzaWJsZVByb3AiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsInRyaWdnZXJSZWYiLCJzZXRQbGFjZW1lbnQiLCJzZXRWaXNpYmxlIiwiY3VycmVudCIsIkNvbmZpZ0NvbnRleHQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJnZXRQb3B1cFN0eWxlIiwidHJhbnNmb3JtT3JpZ2luIiwieCIsInkiLCJleHRyYVN0eWxlIiwiaW5kZXhPZiIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiaW5jbHVkZXMiLCJoYW5kbGVQb3B1cEFsaWduIiwibm9kZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIlkiLCJ0b3AiLCJYIiwibGVmdCIsIm5ld1BsYWNlbWVudCIsInNldFRpbWVvdXQiLCJnZXRSb290RG9tTm9kZSIsIndyYXBwZXJSZWN0IiwiY29uY2F0Iiwic2xpY2UiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwibm9kZVRvcCIsInN0eWxlIiwiYm90dG9tIiwicGFyc2VJbnQiLCJmb3JjZVBvcHVwQWxpZ24iLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiYm9vbCIsIm1vdGlvbk5hbWUiLCJtb3Rpb25EZWFkbGluZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5Iiwic3RyaW5nIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsY0FBZjtBQXdFQSxJQUFNQyxPQUVMLEdBQUcsdUJBQ0YsZ0JBaUJFQyxHQWpCRixFQWtCSztBQUFBLE1BaEJEQyxTQWdCQyxRQWhCREEsU0FnQkM7QUFBQSxNQWZEQyxtQkFlQyxRQWZEQSxtQkFlQztBQUFBLE1BZERDLFFBY0MsUUFkREEsUUFjQztBQUFBLE1BYkRDLGNBYUMsUUFiREEsY0FhQztBQUFBLE1BWkRDLGlCQVlDLFFBWkRBLGlCQVlDO0FBQUEsTUFYREMsZUFXQyxRQVhEQSxlQVdDO0FBQUEsTUFWVUMsYUFVVixRQVZEQyxTQVVDO0FBQUEsTUFUREMsS0FTQyxRQVREQSxLQVNDO0FBQUEsTUFSREMsY0FRQyxRQVJEQSxjQVFDO0FBQUEsTUFQREMsVUFPQyxRQVBEQSxVQU9DO0FBQUEsTUFOREMsbUJBTUMsUUFOREEsbUJBTUM7QUFBQSxNQUxEQyxPQUtDLFFBTERBLE9BS0M7QUFBQSxNQUpRQyxXQUlSLFFBSkRDLE9BSUM7QUFBQSxNQUhFQyxVQUdGOztBQUNILE1BQU1DLFVBQVUsR0FBRyxvQkFBbkI7O0FBREcsa0JBRStCLHFCQUFTVixhQUFhLElBQUksUUFBMUIsQ0FGL0I7QUFBQTtBQUFBLE1BRUlDLFNBRko7QUFBQSxNQUVlVSxZQUZmOztBQUFBLG1CQUcyQixxQkFBU0osV0FBVCxDQUgzQjtBQUFBO0FBQUEsTUFHSUMsT0FISjtBQUFBLE1BR2FJLFVBSGI7O0FBS0gsa0NBQW9CbkIsR0FBcEIsRUFBeUI7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dUI7QUFDckIxRSxFQUFBQSxTQUFTLEVBQUUsS0FEVTtBQUVyQkMsRUFBQUEsbUJBQW1CLEVBQUUsSUFGQTtBQUdyQkMsRUFBQUEsUUFBUSxFQUFFLEVBSFc7QUFJckJDLEVBQUFBLGNBQWMsRUFBRSxJQUpLO0FBS3JCQyxFQUFBQSxpQkFBaUIsRUFBRSxJQUxFO0FBTXJCaUUsRUFBQUEsZUFBZSxFQUFFLENBTkk7QUFPckJFLEVBQUFBLGVBQWUsRUFBRSxHQVBJO0FBUXJCbEUsRUFBQUEsZUFBZSxFQUFFLDJCQUFNLENBQUUsQ0FSSjtBQVNyQkUsRUFBQUEsU0FBUyxFQUFFLFFBVFU7QUFVckJDLEVBQUFBLEtBQUssRUFBRSxJQVZjO0FBV3JCQyxFQUFBQSxjQUFjLEVBQUUsRUFYSztBQVlyQkMsRUFBQUEsVUFBVSxFQUFFLEVBWlM7QUFhckJDLEVBQUFBLG1CQUFtQixFQUFFLGVBYkE7QUFjckJDLEVBQUFBLE9BQU8sRUFBRSxPQWRZO0FBZXJCRSxFQUFBQSxPQUFPLEVBQUU7QUFmWSxDQUF2QjtlQWtCZWhCLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgUG9wVHJpZ2dlciwgeyBJVHJpZ2dlciwgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuL3BsYWNlbWVudHNcIlxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdG9vbHRpcFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRvb2x0aXBQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6L6557yY5a+56b2QXG4gICAqL1xuICBhbGlnbkVkZ2U/OiBib29sZWFuXG4gIC8qKlxuICAgKiDoh6rliqjosIPmlbTkvY3nva5cbiAgICovXG4gIGF1dG9BZGp1c3RQbGFjZW1lbnQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrmmK/lkKbpu5jorqTmmL7npLpcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaMh+WumuawlOazoeaPkOekuueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBnZXRQb3B1cENvbnRhaW5lcj86IG51bGwgfCAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBIVE1MRWxlbWVudClcbiAgLyoqXG4gICAqIG1vdXNlRW50ZXIg5pi+56S655qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlRW50ZXJEZWxheT86IG51bWJlclxuICAvKipcbiAgICogbW91c2VMZWF2ZSDmtojlpLHnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VMZWF2ZURlbGF5PzogbnVtYmVyXG4gIC8qKlxuICAgKiDmmL7npLrlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9rlxuICAgKi9cbiAgcG9wdXA/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOW8ueWHuuWGheWuuVxuICAgKi9cbiAgcG9wdXBDbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuueahOmZhOWKoOexu+WQjVxuICAgKi9cbiAgcG9wdXBUcmFuc2l0aW9uTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5rCU5rOh5o+Q56S655qE6ZmE5Yqg5qC35byPXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgLyoqXG4gICAqIOW8ueWHuuahhueahOWKqOeUu+exu+WQje+8jOWKqOeUu+agvOW8j+mBteW+qiByYy1hbmltYXRlXG4gICAqL1xuICBwb3B1cFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcyB8IG51bGxcbiAgLyoqXG4gICAqIOinpuWPkeaWueW8j1xuICAgKi9cbiAgdHJpZ2dlcj86IFwiaG92ZXJcIiB8IFwiZm9jdXNcIiB8IFwiY2xpY2tcIlxuICAvKipcbiAgICog5omL5Yqo5o6n5Yi25rCU5rOh5o+Q56S65piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbn1cblxuLyoqXG4gKiDlt6Xlhbfmj5DnpLrnlKjkuo7pkojlr7nmn5DkuKrlhYPntKDnmoTjgIHovbvph4/nmoTmk43kvZzor7TmmI7jgIJcbiAqIOS4juawlOazoeaPkOekuiBQb3BvdmVyIOS4jeWQjO+8jOW3peWFt+aPkOekuiBUb29sdGlwIOS4jeaJv+i9veWkjeadguWGheWuueS/oeaBr++8jOiAjOS4u+imgeeUqOS6juino+mHiuW3peWFt+eahOaTjeS9nOWQq+S5ie+8jOWmguKAnOWkjeWItuKAneOAgeKAnOe8lui+keKAneOAgeKAnOWIoOmZpOKAneetieOAglxuICogVG9vbHRpcCDmmK/ln7rkuo4gUG9wVHJpZ2dlciDov5vooYzlsIHoo4XnmoTjgIJcbiAqIFRvb2x0aXAg6LSf6LSj5a6a5LmJ566t5aS05LiO5YaF5a6555qE55u45YWz5qC35byP44CCXG4gKi9cbmNvbnN0IFRvb2x0aXA6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElUb29sdGlwUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYWxpZ25FZGdlLFxuICAgICAgYXV0b0FkanVzdFBsYWNlbWVudCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGVmYXVsdFZpc2libGUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50UHJvcCxcbiAgICAgIHBvcHVwLFxuICAgICAgcG9wdXBDbGFzc05hbWUsXG4gICAgICBwb3B1cFN0eWxlLFxuICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSxcbiAgICAgIHRyaWdnZXIsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJVG9vbHRpcFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCB0cmlnZ2VyUmVmID0gdXNlUmVmPElUcmlnZ2VyPigpXG4gICAgY29uc3QgW3BsYWNlbWVudCwgc2V0UGxhY2VtZW50XSA9IHVzZVN0YXRlKHBsYWNlbWVudFByb3AgfHwgXCJib3R0b21cIilcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh2aXNpYmxlUHJvcClcblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgY3VycmVudDogdHJpZ2dlclJlZi5jdXJyZW50LFxuICAgIH0pKVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlICE9PSB2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9ID0gdXNlQ29udGV4dChcbiAgICAgIENvbmZpZ0NvbnRleHRcbiAgICApXG5cbiAgICAvKipcbiAgICAgKiDmoLnmja4gcGxhY2VtZW50IOiuvue9ruebuOWFs+agt+W8j1xuICAgICAqL1xuICAgIGNvbnN0IGdldFBvcHVwU3R5bGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICAgIHg6IFwiNTAlXCIsXG4gICAgICAgIHk6IFwiNTAlXCIsXG4gICAgICB9XG4gICAgICBjb25zdCBleHRyYVN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge31cbiAgICAgIGlmIChwb3B1cFN0eWxlKSB7XG4gICAgICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZihcInRvcFwiKSA9PT0gMCkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi55ID0gXCIxMDAlXCJcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nQm90dG9tID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBleHRyYVN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjhweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKFwiYm90dG9tXCIpID09PSAwKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnkgPSBcIi00cHhcIlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmdUb3AgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ1RvcCA9IFwiOHB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMCkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi54ID0gXCIwJVwiXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZ0xlZnQgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKFwibGVmdFwiKSA9PT0gMCkge1xuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi54ID0gXCIxMDAlXCJcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nUmlnaHQgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI4cHhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoXCJMZWZ0XCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnggPSBcIjE4cHhcIlxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmNsdWRlcyhcIlJpZ2h0XCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnggPSBcImNhbGMoMTAwJSAtIDE4cHgpXCJcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoXCJUb3BcIikpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueSA9IFwiMTBweFwiXG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluY2x1ZGVzKFwiQm90dG9tXCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnkgPSBcImNhbGMoMTAwJSAtIDEwcHgpXCJcbiAgICAgICAgfVxuICAgICAgICBleHRyYVN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGAke3RyYW5zZm9ybU9yaWdpbi54fSAke3RyYW5zZm9ybU9yaWdpbi55fWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZXh0cmFTdHlsZSxcbiAgICAgICAgLi4ucG9wdXBTdHlsZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmraTmlrnms5XnmoTnm67nmoTmmK/lnKggd2luZG93IOaXoOazleaYvuekuuWujOaVtCBwb3B1cCDml7bvvIzosIPmlbQgcGxhY2VtZW5077ybXG4gICAgICog5Y+v6IO95a2Y5ZyoIHgsIHkg6L206YO96ZyA6KaB6LCD5pW055qE5oOF5Ya177yMXG4gICAgICog5q+U5aaC5Zyo5bGP5bmV5Y+z5LiL6KeS55qEIFwiYm90dG9tTGVmdFwiIHx8IFwiYm90dG9tXCLvvIzpgqPkuYjnm67moIfmmK/lsIblhbbosIPmlbTkuLogXCJ0b3BSaWdodFwi44CCXG4gICAgICpcbiAgICAgKiAyMDE5MDgyODogXGLlsJ3or5XlsIYg4oCcdG9wKuKAnSDnmoQgQ1NTIOWumuS9jeS7jiB0b3A6IHh4eDsg5pS55Li6IGJvdHRvbTogeHh4O1xuICAgICAqIOWboOS4uui/meaXtuWAmeWmguaenOW8ueWHuuahhumrmOW6puWPmOWMlueahOivne+8jOS7juS4i+WumuS9jeWwseS4jeS8muacieagt+W8j+mXrumimOOAglxuICAgICAqL1xuICAgIGNvbnN0IGhhbmRsZVBvcHVwQWxpZ24gPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRvcDogWSwgbGVmdDogWCB9ID0gcmVjdFxuXG4gICAgICBsZXQgbmV3UGxhY2VtZW50OiBhbnkgPSBwbGFjZW1lbnRcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0cmlnZ2VyUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICB0cmlnZ2VyUmVmLmN1cnJlbnQuZ2V0Um9vdERvbU5vZGUgJiZcbiAgICAgICAgICBwbGFjZW1lbnRQcm9wXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZXJSZWN0ID0gdHJpZ2dlclJlZi5jdXJyZW50XG4gICAgICAgICAgICAuZ2V0Um9vdERvbU5vZGUoKVxuICAgICAgICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogdG9wICsgYm90dG9tIOeahOWumuS9jeS8mOWMllxuICAgICAgICAgICAqIOWvuSBZIOi9tOi/m+ihjOWIpOaWrVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJ0b3BcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChZIDwgMCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcInRvcFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcImJvdHRvbVwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoMykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFkgPiByZWN0LmhlaWdodCArIHdyYXBwZXJSZWN0LmhlaWdodCArIDggJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJib3R0b21cIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcInRvcFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJib3R0b21cIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWSArIGhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCAmJlxuICAgICAgICAgICAgICBwbGFjZW1lbnQuaW5kZXhPZihcImJvdHRvbVwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwidG9wXCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSg2KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgd3JhcHBlclJlY3QudG9wICsgd3JhcHBlclJlY3QuaGVpZ2h0ICsgaGVpZ2h0ICsgOCA8XG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwidG9wXCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJib3R0b21cIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDMpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiDlr7kgWCDovbTov5vooYzliKTmlq1cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAod2lkdGggKyBYID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgW1widG9wTGVmdFwiLCBcInRvcFwiLCBcImJvdHRvbUxlZnRcIiwgXCJib3R0b21cIl0uaW5jbHVkZXMobmV3UGxhY2VtZW50KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IGAke25ld1BsYWNlbWVudC5yZXBsYWNlKFwiTGVmdFwiLCBcIlwiKX1SaWdodGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKFggPCAwKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFtcInRvcFJpZ2h0XCIsIFwidG9wXCIsIFwiYm90dG9tUmlnaHRcIiwgXCJib3R0b21cIl0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgbmV3UGxhY2VtZW50XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBgJHtuZXdQbGFjZW1lbnQucmVwbGFjZShcIlJpZ2h0XCIsIFwiXCIpfUxlZnRgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8g5Yik5pat5piv5ZCm5pivIFwidG9wKlwiIOWumuS9jVxuICAgICAgICAgIGlmIChub2RlLmNsYXNzTmFtZS5pbmNsdWRlcyhcIi10b3BcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVUb3AgPSBub2RlLnN0eWxlLnRvcCB8fCBcIjBcIlxuICAgICAgICAgICAgbm9kZS5zdHlsZS50b3AgPSBcInVuc2V0XCJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuYm90dG9tID0gYC0ke3BhcnNlSW50KG5vZGVUb3AsIDEwKSArIGhlaWdodH1weGBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBsZWZ0ICsgcmlnaHQg55qE5a6a5L2N5LyY5YyWXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHBsYWNlbWVudFByb3AuaW5kZXhPZihcImxlZnRcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChYIDwgMCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcImxlZnRcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJyaWdodFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFggPiByZWN0LndpZHRoICsgd3JhcHBlclJlY3Qud2lkdGggKyA4ICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwicmlnaHRcIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcImxlZnRcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGxhY2VtZW50UHJvcC5pbmRleE9mKFwicmlnaHRcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWCArIHdpZHRoID4gd2luZG93LmlubmVyV2lkdGggJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwibGVmdFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHdyYXBwZXJSZWN0LmxlZnQgKyB3cmFwcGVyUmVjdC53aWR0aCArIHdpZHRoICsgOCA8XG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJsZWZ0XCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJyaWdodFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5ld1BsYWNlbWVudCAhPT0gcGxhY2VtZW50KSB7XG4gICAgICAgICAgICBzZXRQbGFjZW1lbnQobmV3UGxhY2VtZW50KVxuICAgICAgICAgICAgaWYgKHRyaWdnZXJSZWYuY3VycmVudC5mb3JjZVBvcHVwQWxpZ24pIHtcbiAgICAgICAgICAgICAgdHJpZ2dlclJlZi5jdXJyZW50LmZvcmNlUG9wdXBBbGlnbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgIH1cbiAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGJvb2wpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BUcmlnZ2VyXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICAgICAgYCR7cHJlZml4fS1iYXNlLSR7cGxhY2VtZW50fWBcbiAgICAgICAgKX1cbiAgICAgICAgcmVmPXt0cmlnZ2VyUmVmfVxuICAgICAgICBhY3Rpb249e3RyaWdnZXIgPyBbdHJpZ2dlcl0gOiBbXCJob3ZlclwiXX1cbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM9e2dldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2UsIGF1dG9BZGp1c3RQbGFjZW1lbnQgfSl9XG4gICAgICAgIGRlZmF1bHRQb3B1cFZpc2libGU9e2RlZmF1bHRWaXNpYmxlfVxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICBvblBvcHVwVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgb25Qb3B1cEFsaWduPXtoYW5kbGVQb3B1cEFsaWdufVxuICAgICAgICBwb3B1cD17PFBvcHVwIGNvbnRlbnQ9e3BvcHVwfSB0cmlnZ2VyPXt0cmlnZ2VyUmVmLmN1cnJlbnR9IC8+fVxuICAgICAgICBwb3B1cFBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBwb3B1cE1vdGlvbj17e1xuICAgICAgICAgIG1vdGlvbk5hbWU6IHBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgbW90aW9uRGVhZGxpbmU6IDEwMDAsXG4gICAgICAgIH19XG4gICAgICAgIHBvcHVwU3R5bGU9e2dldFBvcHVwU3R5bGUoKX1cbiAgICAgICAgcG9wdXBWaXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Qb3BUcmlnZ2VyPlxuICAgIClcbiAgfVxuKVxuXG5Ub29sdGlwLmRpc3BsYXlOYW1lID0gXCJUb29sdGlwXCJcblxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbovrnnvJjlr7npvZBcbiAgICovXG4gIGFsaWduRWRnZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDoh6rliqjosIPmlbTkvY3nva5cbiAgICovXG4gIGF1dG9BZGp1c3RQbGFjZW1lbnQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrmmK/lkKbpu5jorqTmmL7npLpcbiAgICovXG4gIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDmjIflrprmsJTms6Hmj5DnpLrnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogbW91c2VFbnRlciDmmL7npLrnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbW91c2VMZWF2ZSDmtojlpLHnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VMZWF2ZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5pi+56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlvLnlh7rlsYLkvY3nva5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInRvcFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwicmlnaHRcIixcbiAgICBcImJvdHRvbVwiLFxuICAgIFwidG9wTGVmdFwiLFxuICAgIFwidG9wUmlnaHRcIixcbiAgICBcImJvdHRvbUxlZnRcIixcbiAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgXCJsZWZ0VG9wXCIsXG4gICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgXCJyaWdodFRvcFwiLFxuICAgIFwicmlnaHRCb3R0b21cIixcbiAgXSksXG4gIC8qKlxuICAgKiDlvLnlh7rlhoXlrrlcbiAgICovXG4gIHBvcHVwOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuueahOmZhOWKoOexu+WQjVxuICAgKi9cbiAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDmoLflvI9cbiAgICovXG4gIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbnmoTliqjnlLvnsbvlkI3vvIzliqjnlLvmoLzlvI/pgbXlvqogcmMtYW5pbWF0ZVxuICAgKi9cbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOinpuWPkeaWueW8j1xuICAgKi9cbiAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mKFtcImhvdmVyXCIsIFwiZm9jdXNcIiwgXCJjbGlja1wiXSksXG4gIC8qKlxuICAgKiDmiYvliqjmjqfliLbmsJTms6Hmj5DnpLrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbn1cblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduRWRnZTogZmFsc2UsXG4gIGF1dG9BZGp1c3RQbGFjZW1lbnQ6IHRydWUsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBkZWZhdWx0VmlzaWJsZTogbnVsbCxcbiAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIG9uVmlzaWJsZUNoYW5nZTogKCkgPT4ge30sXG4gIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgcG9wdXA6IFwi5aSN5Yi2XCIsXG4gIHBvcHVwQ2xhc3NOYW1lOiBcIlwiLFxuICBwb3B1cFN0eWxlOiB7fSxcbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogXCJ6b29tLWJpZy1mYXN0XCIsXG4gIHRyaWdnZXI6IFwiaG92ZXJcIixcbiAgdmlzaWJsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIl19