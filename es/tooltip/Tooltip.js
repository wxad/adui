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

import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import PopTrigger from "../pop-trigger";
import { ConfigContext } from "../config-provider";
import getPlacements from "./placements";
import Popup from "./Popup";
import "./style";
var prefix = "adui-tooltip";
var Tooltip = forwardRef(function (_ref, ref) {
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

  var triggerRef = useRef();

  var _useState = useState(placementProp || "bottom"),
      _useState2 = _slicedToArray(_useState, 2),
      placement = _useState2[0],
      setPlacement = _useState2[1];

  var _useState3 = useState(visibleProp),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  useImperativeHandle(ref, function () {
    return {
      current: triggerRef.current
    };
  });

  if (visibleProp !== null && visible !== visibleProp) {
    setVisible(!!visibleProp);
  }

  var _useContext = useContext(ConfigContext),
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

  return React.createElement(PopTrigger, _extends({
    popupClassName: classNames(popupClassName, "".concat(prefix, "-base"), "".concat(prefix, "-base-").concat(placement)),
    ref: triggerRef,
    action: trigger ? [trigger] : ["hover"],
    builtinPlacements: getPlacements({
      alignEdge: alignEdge,
      autoAdjustPlacement: autoAdjustPlacement
    }),
    defaultPopupVisible: defaultVisible,
    getPopupContainer: getPopupContainer || getPopupContainerContext,
    onPopupVisibleChange: handleVisibleChange,
    onPopupAlign: handlePopupAlign,
    popup: React.createElement(Popup, {
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
  alignEdge: PropTypes.bool,
  autoAdjustPlacement: PropTypes.bool,
  children: PropTypes.node,
  defaultVisible: PropTypes.oneOf([null, true, false]),
  getPopupContainer: PropTypes.func,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  onVisibleChange: PropTypes.func,
  placement: PropTypes.oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  popup: PropTypes.node,
  popupClassName: PropTypes.string,
  popupStyle: PropTypes.object,
  popupTransitionName: PropTypes.string,
  trigger: PropTypes.oneOf(["hover", "focus", "click"]),
  visible: PropTypes.oneOf([null, true, false])
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
export default Tooltip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9Ub29sdGlwLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VDb250ZXh0IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZVJlZiIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIlBvcFRyaWdnZXIiLCJDb25maWdDb250ZXh0IiwiZ2V0UGxhY2VtZW50cyIsIlBvcHVwIiwicHJlZml4IiwiVG9vbHRpcCIsInJlZiIsImFsaWduRWRnZSIsImF1dG9BZGp1c3RQbGFjZW1lbnQiLCJjaGlsZHJlbiIsImRlZmF1bHRWaXNpYmxlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJvblZpc2libGVDaGFuZ2UiLCJwbGFjZW1lbnRQcm9wIiwicGxhY2VtZW50IiwicG9wdXAiLCJwb3B1cENsYXNzTmFtZSIsInBvcHVwU3R5bGUiLCJwb3B1cFRyYW5zaXRpb25OYW1lIiwidHJpZ2dlciIsInZpc2libGVQcm9wIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJ0cmlnZ2VyUmVmIiwic2V0UGxhY2VtZW50Iiwic2V0VmlzaWJsZSIsImN1cnJlbnQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJnZXRQb3B1cFN0eWxlIiwidHJhbnNmb3JtT3JpZ2luIiwieCIsInkiLCJleHRyYVN0eWxlIiwiaW5kZXhPZiIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiaW5jbHVkZXMiLCJoYW5kbGVQb3B1cEFsaWduIiwibm9kZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIlkiLCJ0b3AiLCJYIiwibGVmdCIsIm5ld1BsYWNlbWVudCIsInNldFRpbWVvdXQiLCJnZXRSb290RG9tTm9kZSIsIndyYXBwZXJSZWN0IiwiY29uY2F0Iiwic2xpY2UiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwibm9kZVRvcCIsInN0eWxlIiwiYm90dG9tIiwicGFyc2VJbnQiLCJmb3JjZVBvcHVwQWxpZ24iLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiYm9vbCIsIm1vdGlvbk5hbWUiLCJtb3Rpb25EZWFkbGluZSIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwib25lT2YiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5Iiwic3RyaW5nIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiekluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPQSxLQUFQLElBQ0VDLFVBREYsRUFFRUMsVUFGRixFQUdFQyxtQkFIRixFQUlFQyxNQUpGLEVBS0VDLFFBTEYsUUFNTyxPQU5QO0FBT0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxVQUFQLE1BQWdELGdCQUFoRDtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsb0JBQTlCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixjQUExQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsY0FBZjtBQXdFQSxJQUFNQyxPQUVMLEdBQUdaLFVBQVUsQ0FDWixnQkFpQkVhLEdBakJGLEVBa0JLO0FBQUEsTUFoQkRDLFNBZ0JDLFFBaEJEQSxTQWdCQztBQUFBLE1BZkRDLG1CQWVDLFFBZkRBLG1CQWVDO0FBQUEsTUFkREMsUUFjQyxRQWREQSxRQWNDO0FBQUEsTUFiREMsY0FhQyxRQWJEQSxjQWFDO0FBQUEsTUFaREMsaUJBWUMsUUFaREEsaUJBWUM7QUFBQSxNQVhEQyxlQVdDLFFBWERBLGVBV0M7QUFBQSxNQVZVQyxhQVVWLFFBVkRDLFNBVUM7QUFBQSxNQVREQyxLQVNDLFFBVERBLEtBU0M7QUFBQSxNQVJEQyxj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RUFBRSxJQWZZO0FBZ0JyQjJELEVBQUFBLE1BQU0sRUFBRTtBQWhCYSxDQUF2QjtBQW1CQSxlQUFlM0UsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBQb3BUcmlnZ2VyLCB7IElUcmlnZ2VyLCBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IGdldFBsYWNlbWVudHMgZnJvbSBcIi4vcGxhY2VtZW50c1wiXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10b29sdGlwXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVG9vbHRpcFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbovrnnvJjlr7npvZBcbiAgICovXG4gIGFsaWduRWRnZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOiHquWKqOiwg+aVtOS9jee9rlxuICAgKi9cbiAgYXV0b0FkanVzdFBsYWNlbWVudD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOawlOazoeaPkOekuuaYr+WQpum7mOiupOaYvuekulxuICAgKi9cbiAgZGVmYXVsdFZpc2libGU/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a5rCU5rOh5o+Q56S655qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICAvKipcbiAgICogbW91c2VFbnRlciDmmL7npLrnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIHRyaWdnZXI9XCJob3ZlclwiIOaXtuacieaViFxuICAgKi9cbiAgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyXG4gIC8qKlxuICAgKiBtb3VzZUxlYXZlIOa2iOWkseeahOW7tuaXtu+8jOWNleS9je+8mnPvvIzlj6rlnKggdHJpZ2dlcj1cImhvdmVyXCIg5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXJcbiAgLyoqXG4gICAqIOaYvuekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwb3B1cD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5by55Ye65YaF5a65XG4gICAqL1xuICBwb3B1cENsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5rCU5rOh5o+Q56S655qE6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBwb3B1cFRyYW5zaXRpb25OYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDmoLflvI9cbiAgICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICAvKipcbiAgICog5by55Ye65qGG55qE5Yqo55S757G75ZCN77yM5Yqo55S75qC85byP6YG15b6qIHJjLWFuaW1hdGVcbiAgICovXG4gIHBvcHVwU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgbnVsbFxuICAvKipcbiAgICog6Kem5Y+R5pa55byPXG4gICAqL1xuICB0cmlnZ2VyPzogXCJob3ZlclwiIHwgXCJmb2N1c1wiIHwgXCJjbGlja1wiXG4gIC8qKlxuICAgKiDmiYvliqjmjqfliLbmsJTms6Hmj5DnpLrmmK/lkKbmmL7npLpcbiAgICovXG4gIHZpc2libGU/OiBudWxsIHwgYm9vbGVhblxufVxuXG4vKipcbiAqIOW3peWFt+aPkOekuueUqOS6jumSiOWvueafkOS4quWFg+e0oOeahOOAgei9u+mHj+eahOaTjeS9nOivtOaYjuOAglxuICog5LiO5rCU5rOh5o+Q56S6IFBvcG92ZXIg5LiN5ZCM77yM5bel5YW35o+Q56S6IFRvb2x0aXAg5LiN5om/6L295aSN5p2C5YaF5a655L+h5oGv77yM6ICM5Li76KaB55So5LqO6Kej6YeK5bel5YW355qE5pON5L2c5ZCr5LmJ77yM5aaC4oCc5aSN5Yi24oCd44CB4oCc57yW6L6R4oCd44CB4oCc5Yig6Zmk4oCd562J44CCXG4gKiBUb29sdGlwIOaYr+WfuuS6jiBQb3BUcmlnZ2VyIOi/m+ihjOWwgeijheeahOOAglxuICogVG9vbHRpcCDotJ/otKPlrprkuYnnrq3lpLTkuI7lhoXlrrnnmoTnm7jlhbPmoLflvI/jgIJcbiAqL1xuY29uc3QgVG9vbHRpcDogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSVRvb2x0aXBQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhbGlnbkVkZ2UsXG4gICAgICBhdXRvQWRqdXN0UGxhY2VtZW50LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkZWZhdWx0VmlzaWJsZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgb25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRQcm9wLFxuICAgICAgcG9wdXAsXG4gICAgICBwb3B1cENsYXNzTmFtZSxcbiAgICAgIHBvcHVwU3R5bGUsXG4gICAgICBwb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgdHJpZ2dlcixcbiAgICAgIHZpc2libGU6IHZpc2libGVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElUb29sdGlwUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IHRyaWdnZXJSZWYgPSB1c2VSZWY8SVRyaWdnZXI+KClcbiAgICBjb25zdCBbcGxhY2VtZW50LCBzZXRQbGFjZW1lbnRdID0gdXNlU3RhdGUocGxhY2VtZW50UHJvcCB8fCBcImJvdHRvbVwiKVxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHZpc2libGVQcm9wKVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBjdXJyZW50OiB0cmlnZ2VyUmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKHZpc2libGVQcm9wICE9PSBudWxsICYmIHZpc2libGUgIT09IHZpc2libGVQcm9wKSB7XG4gICAgICBzZXRWaXNpYmxlKCEhdmlzaWJsZVByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0gPSB1c2VDb250ZXh0KFxuICAgICAgQ29uZmlnQ29udGV4dFxuICAgIClcblxuICAgIC8qKlxuICAgICAqIOagueaNriBwbGFjZW1lbnQg6K6+572u55u45YWz5qC35byPXG4gICAgICovXG4gICAgY29uc3QgZ2V0UG9wdXBTdHlsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICAgICAgeDogXCI1MCVcIixcbiAgICAgICAgeTogXCI1MCVcIixcbiAgICAgIH1cbiAgICAgIGNvbnN0IGV4dHJhU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fVxuICAgICAgaWYgKHBvcHVwU3R5bGUpIHtcbiAgICAgICAgaWYgKHBsYWNlbWVudC5pbmRleE9mKFwidG9wXCIpID09PSAwKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnkgPSBcIjEwMCVcIlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmdCb3R0b20gPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMTJweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKFwiYm90dG9tXCIpID09PSAwKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnkgPSBcIi02cHhcIlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmdUb3AgPT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmcgPT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV4dHJhU3R5bGUucGFkZGluZ1RvcCA9IFwiMTJweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKFwicmlnaHRcIikgPT09IDApIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueCA9IFwiMCVcIlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmdMZWZ0ID09PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcG9wdXBTdHlsZS5wYWRkaW5nID09PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBleHRyYVN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIxMnB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoXCJsZWZ0XCIpID09PSAwKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnggPSBcIjEwMCVcIlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBwb3B1cFN0eWxlLnBhZGRpbmdSaWdodCA9PT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHBvcHVwU3R5bGUucGFkZGluZyA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXh0cmFTdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjEycHhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoXCJMZWZ0XCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnggPSBcIjE4cHhcIlxuICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmNsdWRlcyhcIlJpZ2h0XCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnggPSBcImNhbGMoMTAwJSAtIDE4cHgpXCJcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5jbHVkZXMoXCJUb3BcIikpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ueSA9IFwiMTBweFwiXG4gICAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluY2x1ZGVzKFwiQm90dG9tXCIpKSB7XG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnkgPSBcImNhbGMoMTAwJSAtIDEwcHgpXCJcbiAgICAgICAgfVxuICAgICAgICBleHRyYVN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGAke3RyYW5zZm9ybU9yaWdpbi54fSAke3RyYW5zZm9ybU9yaWdpbi55fWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZXh0cmFTdHlsZSxcbiAgICAgICAgLi4ucG9wdXBTdHlsZSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmraTmlrnms5XnmoTnm67nmoTmmK/lnKggd2luZG93IOaXoOazleaYvuekuuWujOaVtCBwb3B1cCDml7bvvIzosIPmlbQgcGxhY2VtZW5077ybXG4gICAgICog5Y+v6IO95a2Y5ZyoIHgsIHkg6L206YO96ZyA6KaB6LCD5pW055qE5oOF5Ya177yMXG4gICAgICog5q+U5aaC5Zyo5bGP5bmV5Y+z5LiL6KeS55qEIFwiYm90dG9tTGVmdFwiIHx8IFwiYm90dG9tXCLvvIzpgqPkuYjnm67moIfmmK/lsIblhbbosIPmlbTkuLogXCJ0b3BSaWdodFwi44CCXG4gICAgICpcbiAgICAgKiAyMDE5MDgyODogXGLlsJ3or5XlsIYg4oCcdG9wKuKAnSDnmoQgQ1NTIOWumuS9jeS7jiB0b3A6IHh4eDsg5pS55Li6IGJvdHRvbTogeHh4O1xuICAgICAqIOWboOS4uui/meaXtuWAmeWmguaenOW8ueWHuuahhumrmOW6puWPmOWMlueahOivne+8jOS7juS4i+WumuS9jeWwseS4jeS8muacieagt+W8j+mXrumimOOAglxuICAgICAqL1xuICAgIGNvbnN0IGhhbmRsZVBvcHVwQWxpZ24gPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHRvcDogWSwgbGVmdDogWCB9ID0gcmVjdFxuXG4gICAgICBsZXQgbmV3UGxhY2VtZW50OiBhbnkgPSBwbGFjZW1lbnRcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0cmlnZ2VyUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICB0cmlnZ2VyUmVmLmN1cnJlbnQuZ2V0Um9vdERvbU5vZGUgJiZcbiAgICAgICAgICBwbGFjZW1lbnRQcm9wXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZXJSZWN0ID0gdHJpZ2dlclJlZi5jdXJyZW50XG4gICAgICAgICAgICAuZ2V0Um9vdERvbU5vZGUoKVxuICAgICAgICAgICAgLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogdG9wICsgYm90dG9tIOeahOWumuS9jeS8mOWMllxuICAgICAgICAgICAqIOWvuSBZIOi9tOi/m+ihjOWIpOaWrVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChwbGFjZW1lbnRQcm9wLmluZGV4T2YoXCJ0b3BcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChZIDwgMCAmJiBwbGFjZW1lbnQuaW5kZXhPZihcInRvcFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcImJvdHRvbVwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoMykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFkgPiByZWN0LmhlaWdodCArIHdyYXBwZXJSZWN0LmhlaWdodCArIDEyICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwiYm90dG9tXCIpID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gXCJ0b3BcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDYpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGxhY2VtZW50UHJvcC5pbmRleE9mKFwiYm90dG9tXCIpID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIFkgKyBoZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJib3R0b21cIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcInRvcFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHdyYXBwZXJSZWN0LnRvcCArIHdyYXBwZXJSZWN0LmhlaWdodCArIGhlaWdodCArIDEyIDxcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJ0b3BcIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcImJvdHRvbVwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoMykpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIOWvuSBYIOi9tOi/m+ihjOWIpOaWrVxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh3aWR0aCArIFggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBbXCJ0b3BMZWZ0XCIsIFwidG9wXCIsIFwiYm90dG9tTGVmdFwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhuZXdQbGFjZW1lbnQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgbmV3UGxhY2VtZW50ID0gYCR7bmV3UGxhY2VtZW50LnJlcGxhY2UoXCJMZWZ0XCIsIFwiXCIpfVJpZ2h0YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoWCA8IDApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgW1widG9wUmlnaHRcIiwgXCJ0b3BcIiwgXCJib3R0b21SaWdodFwiLCBcImJvdHRvbVwiXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICBuZXdQbGFjZW1lbnRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IGAke25ld1BsYWNlbWVudC5yZXBsYWNlKFwiUmlnaHRcIiwgXCJcIil9TGVmdGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyDliKTmlq3mmK/lkKbmmK8gXCJ0b3AqXCIg5a6a5L2NXG4gICAgICAgICAgaWYgKG5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiLXRvcFwiKSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZVRvcCA9IG5vZGUuc3R5bGUudG9wIHx8IFwiMFwiXG4gICAgICAgICAgICBub2RlLnN0eWxlLnRvcCA9IFwidW5zZXRcIlxuICAgICAgICAgICAgbm9kZS5zdHlsZS5ib3R0b20gPSBgLSR7cGFyc2VJbnQobm9kZVRvcCwgMTApICsgaGVpZ2h0fXB4YFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIGxlZnQgKyByaWdodCDnmoTlrprkvY3kvJjljJZcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAocGxhY2VtZW50UHJvcC5pbmRleE9mKFwibGVmdFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKFggPCAwICYmIHBsYWNlbWVudC5pbmRleE9mKFwibGVmdFwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcInJpZ2h0XCIuY29uY2F0KHBsYWNlbWVudC5zbGljZSg0KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWCA+IHJlY3Qud2lkdGggKyB3cmFwcGVyUmVjdC53aWR0aCArIDEyICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwicmlnaHRcIikgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBuZXdQbGFjZW1lbnQgPSBcImxlZnRcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDUpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGxhY2VtZW50UHJvcC5pbmRleE9mKFwicmlnaHRcIikgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgWCArIHdpZHRoID4gd2luZG93LmlubmVyV2lkdGggJiZcbiAgICAgICAgICAgICAgcGxhY2VtZW50LmluZGV4T2YoXCJyaWdodFwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwibGVmdFwiLmNvbmNhdChwbGFjZW1lbnQuc2xpY2UoNSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHdyYXBwZXJSZWN0LmxlZnQgKyB3cmFwcGVyUmVjdC53aWR0aCArIHdpZHRoICsgMTIgPFxuICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoICYmXG4gICAgICAgICAgICAgIHBsYWNlbWVudC5pbmRleE9mKFwibGVmdFwiKSA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG5ld1BsYWNlbWVudCA9IFwicmlnaHRcIi5jb25jYXQocGxhY2VtZW50LnNsaWNlKDQpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXdQbGFjZW1lbnQgIT09IHBsYWNlbWVudCkge1xuICAgICAgICAgICAgc2V0UGxhY2VtZW50KG5ld1BsYWNlbWVudClcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyUmVmLmN1cnJlbnQuZm9yY2VQb3B1cEFsaWduKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJSZWYuY3VycmVudC5mb3JjZVBvcHVwQWxpZ24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICB9XG4gICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZShib29sKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wVHJpZ2dlclxuICAgICAgICBwb3B1cENsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZSxcbiAgICAgICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgICAgIGAke3ByZWZpeH0tYmFzZS0ke3BsYWNlbWVudH1gXG4gICAgICAgICl9XG4gICAgICAgIHJlZj17dHJpZ2dlclJlZn1cbiAgICAgICAgYWN0aW9uPXt0cmlnZ2VyID8gW3RyaWdnZXJdIDogW1wiaG92ZXJcIl19XG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzPXtnZXRQbGFjZW1lbnRzKHsgYWxpZ25FZGdlLCBhdXRvQWRqdXN0UGxhY2VtZW50IH0pfVxuICAgICAgICBkZWZhdWx0UG9wdXBWaXNpYmxlPXtkZWZhdWx0VmlzaWJsZX1cbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgIG9uUG9wdXBBbGlnbj17aGFuZGxlUG9wdXBBbGlnbn1cbiAgICAgICAgcG9wdXA9ezxQb3B1cCBjb250ZW50PXtwb3B1cH0gdHJpZ2dlcj17dHJpZ2dlclJlZi5jdXJyZW50fSAvPn1cbiAgICAgICAgcG9wdXBQbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgcG9wdXBNb3Rpb249e3tcbiAgICAgICAgICBtb3Rpb25OYW1lOiBwb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgIG1vdGlvbkRlYWRsaW5lOiAxMDAwLFxuICAgICAgICB9fVxuICAgICAgICBwb3B1cFN0eWxlPXtnZXRQb3B1cFN0eWxlKCl9XG4gICAgICAgIHBvcHVwVmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUG9wVHJpZ2dlcj5cbiAgICApXG4gIH1cbilcblxuVG9vbHRpcC5kaXNwbGF5TmFtZSA9IFwiVG9vbHRpcFwiXG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6L6557yY5a+56b2QXG4gICAqL1xuICBhbGlnbkVkZ2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6Ieq5Yqo6LCD5pW05L2N572uXG4gICAqL1xuICBhdXRvQWRqdXN0UGxhY2VtZW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5rCU5rOh5o+Q56S65piv5ZCm6buY6K6k5pi+56S6XG4gICAqL1xuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxuICAvKipcbiAgICog5oyH5a6a5rCU5rOh5o+Q56S655qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIG1vdXNlRW50ZXIg5pi+56S655qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlRW50ZXJEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1vdXNlTGVhdmUg5raI5aSx55qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCB0cmlnZ2VyPVwiaG92ZXJcIiDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOaYvuekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5by55Ye65bGC5L2N572uXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJ0b3BcIixcbiAgICBcImxlZnRcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcInRvcExlZnRcIixcbiAgICBcInRvcFJpZ2h0XCIsXG4gICAgXCJib3R0b21MZWZ0XCIsXG4gICAgXCJib3R0b21SaWdodFwiLFxuICAgIFwibGVmdFRvcFwiLFxuICAgIFwibGVmdEJvdHRvbVwiLFxuICAgIFwicmlnaHRUb3BcIixcbiAgICBcInJpZ2h0Qm90dG9tXCIsXG4gIF0pLFxuICAvKipcbiAgICog5by55Ye65YaF5a65XG4gICAqL1xuICBwb3B1cDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDmsJTms6Hmj5DnpLrnmoTpmYTliqDnsbvlkI1cbiAgICovXG4gIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5rCU5rOh5o+Q56S655qE6ZmE5Yqg5qC35byPXG4gICAqL1xuICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5by55Ye65qGG55qE5Yqo55S757G75ZCN77yM5Yqo55S75qC85byP6YG15b6qIHJjLWFuaW1hdGVcbiAgICovXG4gIHBvcHVwVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDop6blj5HmlrnlvI9cbiAgICovXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZihbXCJob3ZlclwiLCBcImZvY3VzXCIsIFwiY2xpY2tcIl0pLFxuICAvKipcbiAgICog5omL5Yqo5o6n5Yi25rCU5rOh5o+Q56S65piv5ZCm5pi+56S6XG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG59XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbkVkZ2U6IGZhbHNlLFxuICBhdXRvQWRqdXN0UGxhY2VtZW50OiB0cnVlLFxuICBjaGlsZHJlbjogXCJcIixcbiAgZGVmYXVsdFZpc2libGU6IG51bGwsXG4gIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBvblZpc2libGVDaGFuZ2U6ICgpID0+IHt9LFxuICBwbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gIHBvcHVwOiBcIuWkjeWItlwiLFxuICBwb3B1cENsYXNzTmFtZTogXCJcIixcbiAgcG9wdXBTdHlsZToge30sXG4gIHBvcHVwVHJhbnNpdGlvbk5hbWU6IFwiem9vbS1iaWctZmFzdFwiLFxuICB0cmlnZ2VyOiBcImhvdmVyXCIsXG4gIHZpc2libGU6IG51bGwsXG4gIHpJbmRleDogXCJ2YXIoLS16LWluZGV4LXRvb2x0aXApXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiJdfQ==