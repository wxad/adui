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

import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ConfigContext, getComputedSize } from "../config-provider";
import Icon from "../icon";
import "./style";
var prefix = "adui-tag";

var Tag = function Tag(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      intent = _ref.intent,
      interactive = _ref.interactive,
      onRemove = _ref.onRemove,
      removableProp = _ref.removable,
      round = _ref.round,
      size = _ref.size,
      style = _ref.style,
      theme = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "color", "intent", "interactive", "onRemove", "removable", "round", "size", "style", "theme"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      removed = _useState2[0],
      setRemoved = _useState2[1];

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var handleRemove = function handleRemove(e) {
    setRemoved(true);

    if (onRemove) {
      onRemove(e);
    }
  };

  var removable = !!onRemove || removableProp;
  var classSet = classNames(className, "".concat(prefix, "-base"), color ? "" : "".concat(prefix, "-").concat(intent), "".concat(prefix, "-").concat(getComputedSize(size, sizeContext)), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-colored"), !!color), _defineProperty(_classNames, "".concat(prefix, "-interactive"), interactive), _defineProperty(_classNames, "".concat(prefix, "-removable"), removable), _defineProperty(_classNames, "".concat(prefix, "-round"), round), _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _classNames));

  if (removed) {
    return null;
  }

  var colorStyle = {};

  if (color) {
    colorStyle.color = color;
  }

  return React.createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, colorStyle), style)
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-content")
  }, children, removable && React.createElement(Icon, {
    icon: "cancel-circle",
    className: "".concat(prefix, "-remove"),
    onClick: handleRemove,
    size: 16
  })), React.createElement("div", {
    className: "".concat(prefix, "-background")
  }), !theme && React.createElement("div", {
    className: "".concat(prefix, "-shadow")
  }));
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"]),
  interactive: PropTypes.bool,
  onRemove: PropTypes.func,
  removable: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  style: PropTypes.object,
  theme: PropTypes.oneOf([null, "light"])
};
Tag.defaultProps = {
  className: undefined,
  color: null,
  intent: "normal",
  interactive: false,
  onRemove: null,
  removable: false,
  round: false,
  size: "small",
  style: {},
  theme: null
};
export default Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFnL1RhZy50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkljb24iLCJwcmVmaXgiLCJUYWciLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbG9yIiwiaW50ZW50IiwiaW50ZXJhY3RpdmUiLCJvblJlbW92ZSIsInJlbW92YWJsZVByb3AiLCJyZW1vdmFibGUiLCJyb3VuZCIsInNpemUiLCJzdHlsZSIsInRoZW1lIiwib3RoZXJQcm9wcyIsInJlbW92ZWQiLCJzZXRSZW1vdmVkIiwic2l6ZUNvbnRleHQiLCJoYW5kbGVSZW1vdmUiLCJlIiwiY2xhc3NTZXQiLCJjb2xvclN0eWxlIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsUUFBNUIsUUFBNEMsT0FBNUM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLGVBQXhCLFFBQStDLG9CQUEvQztBQUNBLE9BQU9DLElBQVAsTUFBaUIsU0FBakI7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsVUFBZjs7QUFxREEsSUFBTUMsR0FBd0IsR0FBRyxTQUEzQkEsR0FBMkIsT0FhaEI7QUFBQTs7QUFBQSxNQVpmQyxRQVllLFFBWmZBLFFBWWU7QUFBQSxNQVhmQyxTQVdlLFFBWGZBLFNBV2U7QUFBQSxNQVZmQyxLQVVlLFFBVmZBLEtBVWU7QUFBQSxNQVRmQyxNQVNlLFFB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QVMsRUFBRWQsU0FBUyxDQUFDZ0MsSUFsQ1A7QUFzQ2RqQixFQUFBQSxLQUFLLEVBQUVmLFNBQVMsQ0FBQ2dDLElBdENIO0FBMENkaEIsRUFBQUEsSUFBSSxFQUFFaEIsU0FBUyxDQUFDK0IsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBMUNRO0FBOENkZCxFQUFBQSxLQUFLLEVBQUVqQixTQUFTLENBQUNrQyxNQTlDSDtBQWtEZGhCLEVBQUFBLEtBQUssRUFBRWxCLFNBQVMsQ0FBQytCLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFoQjtBQWxETyxDQUFoQjtBQXFEQXpCLEdBQUcsQ0FBQzZCLFlBQUosR0FBbUI7QUFDakIzQixFQUFBQSxTQUFTLEVBQUU0QixTQURNO0FBRWpCM0IsRUFBQUEsS0FBSyxFQUFFLElBRlU7QUFHakJDLEVBQUFBLE1BQU0sRUFBRSxRQUhTO0FBSWpCQyxFQUFBQSxXQUFXLEVBQUUsS0FKSTtBQUtqQkMsRUFBQUEsUUFBUSxFQUFFLElBTE87QUFNakJFLEVBQUFBLFNBQVMsRUFBRSxLQU5NO0FBT2pCQyxFQUFBQSxLQUFLLEVBQUUsS0FQVTtBQVFqQkMsRUFBQUEsSUFBSSxFQUFFLE9BUlc7QUFTakJDLEVBQUFBLEtBQUssRUFBRSxFQVRVO0FBVWpCQyxFQUFBQSxLQUFLLEVBQUU7QUFWVSxDQUFuQjtBQWFBLGVBQWVaLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFnXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFnUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpopzoibJcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nIHwgbnVsbFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5oyH5a6aIFRhZyDmmK/lkKblj6/kuqTkupLvvIznu4Tku7blsIbkvJroh6rliqjliqDkuIogaG92ZXIgYWN0aXZlIOagt+W8j1xuICAgKi9cbiAgaW50ZXJhY3RpdmU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDnp7vpmaTml7bnmoQgaGFuZGxlcu+8jOiuvue9ruatpCBwcm9wIOaXtiBUYWcg5bCG5Lya5b+955WlIHJlbW92YWJsZSBwcm9wXG4gICAqL1xuICBvblJlbW92ZT86ICgoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKblj6/np7vpmaRcbiAgICovXG4gIHJlbW92YWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuWchuinklxuICAgKi9cbiAgcm91bmQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDkuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxufVxuXG4vKipcbiAqIOagh+etvuWxleeOsOebuOWFs+eahOeLrOeri+WFs+mUruivjeS/oeaBr++8jOaWueS+v+eUqOaIt+W/q+mAn+i+qOWIq+WGheWuueWxnuaAp++8jOS5n+WPr+i/m+ihjOaTjeS9nOOAglxuICovXG5jb25zdCBUYWc6IFJlYWN0LkZDPElUYWdQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBjb2xvcixcbiAgaW50ZW50LFxuICBpbnRlcmFjdGl2ZSxcbiAgb25SZW1vdmUsXG4gIHJlbW92YWJsZTogcmVtb3ZhYmxlUHJvcCxcbiAgcm91bmQsXG4gIHNpemUsXG4gIHN0eWxlLFxuICB0aGVtZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSVRhZ1Byb3BzKSA9PiB7XG4gIGNvbnN0IFtyZW1vdmVkLCBzZXRSZW1vdmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIHNldFJlbW92ZWQodHJ1ZSlcbiAgICBpZiAob25SZW1vdmUpIHtcbiAgICAgIG9uUmVtb3ZlKGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3ZhYmxlID0gISFvblJlbW92ZSB8fCByZW1vdmFibGVQcm9wXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgIGNvbG9yID8gXCJcIiA6IGAke3ByZWZpeH0tJHtpbnRlbnR9YCxcbiAgICBgJHtwcmVmaXh9LSR7Z2V0Q29tcHV0ZWRTaXplKHNpemUsIHNpemVDb250ZXh0KX1gLFxuICAgIHtcbiAgICAgIFtgJHtwcmVmaXh9LWNvbG9yZWRgXTogISFjb2xvcixcbiAgICAgIFtgJHtwcmVmaXh9LWludGVyYWN0aXZlYF06IGludGVyYWN0aXZlLFxuICAgICAgW2Ake3ByZWZpeH0tcmVtb3ZhYmxlYF06IHJlbW92YWJsZSxcbiAgICAgIFtgJHtwcmVmaXh9LXJvdW5kYF06IHJvdW5kLFxuICAgICAgW2Ake3ByZWZpeH0tJHt0aGVtZX1gXTogdGhlbWUsXG4gICAgfVxuICApXG5cbiAgaWYgKHJlbW92ZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgY29sb3JTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9XG5cbiAgaWYgKGNvbG9yKSB7XG4gICAgY29sb3JTdHlsZS5jb2xvciA9IGNvbG9yXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5jb2xvclN0eWxlLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250ZW50YH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3JlbW92YWJsZSAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJjYW5jZWwtY2lyY2xlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZW1vdmVgfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVtb3ZlfVxuICAgICAgICAgICAgc2l6ZT17MTZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYmFja2dyb3VuZGB9IC8+XG4gICAgICB7IXRoZW1lICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNoYWRvd2B9IC8+fVxuICAgIDwvZGl2PlxuICApXG59XG5cblRhZy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpopzoibJcbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOaMh+WumiBUYWcg5piv5ZCm5Y+v5Lqk5LqS77yM57uE5Lu25bCG5Lya6Ieq5Yqo5Yqg5LiKIGhvdmVyIGFjdGl2ZSDmoLflvI9cbiAgICovXG4gIGludGVyYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOenu+mZpOaXtueahCBoYW5kbGVy77yM6K6+572u5q2kIHByb3Ag5pe2IFRhZyDlsIbkvJrlv73nlaUgcmVtb3ZhYmxlIHByb3BcbiAgICovXG4gIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOaYr+WQpuWPr+enu+mZpFxuICAgKi9cbiAgcmVtb3ZhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuWchuinklxuICAgKi9cbiAgcm91bmQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG59XG5cblRhZy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjb2xvcjogbnVsbCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gIG9uUmVtb3ZlOiBudWxsLFxuICByZW1vdmFibGU6IGZhbHNlLFxuICByb3VuZDogZmFsc2UsXG4gIHNpemU6IFwic21hbGxcIixcbiAgc3R5bGU6IHt9LFxuICB0aGVtZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXX0=