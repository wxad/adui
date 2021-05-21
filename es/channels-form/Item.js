function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import Popover from "../popover";
import { FormContext } from "./Context";
import "./style";
var prefix = "adui-channels-form";

var Item = function Item(_ref) {
  var children = _ref.children,
      className = _ref.className,
      label = _ref.label,
      labelAlign = _ref.labelAlign,
      labelHelper = _ref.labelHelper,
      labelHelperIcon = _ref.labelHelperIcon,
      labelHelperProps = _ref.labelHelperProps,
      labelSize = _ref.labelSize,
      labelStyle = _ref.labelStyle,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "label", "labelAlign", "labelHelper", "labelHelperIcon", "labelHelperProps", "labelSize", "labelStyle", "style"]);

  var _useContext = useContext(FormContext),
      labelAlignContext = _useContext.labelAlign,
      itemStyle = _useContext.itemStyle,
      labelStyleContext = _useContext.labelStyle,
      labelSizeContext = _useContext.labelSize;

  var classSet = classNames(className, "".concat(prefix, "-item"));
  var align = labelAlign || labelAlignContext;

  switch (align) {
    case "left":
      align = "flex-start";
      break;

    case "right":
      align = "flex-end";
      break;

    case "center":
      align = "center";
      break;

    default:
  }

  var alignStyle = align ? {
    justifyContent: align
  } : {};
  var labelSizeFinal = labelSize || labelSizeContext;
  var labelFinal = useMemo(function () {
    var getFormatStrLeng = function getFormatStrLeng(str) {
      var len = str.length;
      var realLength = 0;
      var charCode = -1;

      for (var i = 0; i < len; i += 1) {
        charCode = str.charCodeAt(i);

        if (charCode >= 0 && charCode <= 128) {
          realLength += 0.5;
        } else {
          realLength += 1;
        }
      }

      return Math.ceil(realLength);
    };

    if (typeof label === "string" && labelSizeFinal && getFormatStrLeng(label) - labelSizeFinal === 1) {
      return "".concat(label.slice(0, 4), "\n").concat(label.slice(4));
    }

    return label;
  }, [label]);
  return React.createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, itemStyle), style)
  }, otherProps), !!label && React.createElement("div", {
    className: "".concat(prefix, "-label"),
    style: _objectSpread(_objectSpread(_objectSpread({
      width: "".concat(labelSizeFinal, "em")
    }, alignStyle), labelStyleContext), labelStyle)
  }, labelFinal, !!labelHelper && React.createElement(Popover, _extends({
    popup: labelHelper,
    alignEdge: false,
    placement: "bottom"
  }, labelHelperProps), React.createElement(Icon, {
    icon: labelHelperIcon || "help-circle",
    interactive: true,
    color: "var(--gray-600)",
    style: {
      marginLeft: "4px"
    }
  }))), React.createElement("div", {
    className: "".concat(prefix, "-control")
  }, children));
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.node,
  labelAlign: PropTypes.oneOf([null, "left", "center", "right"]),
  labelHelper: PropTypes.node,
  labelHelperIcon: PropTypes.any,
  labelHelperProps: PropTypes.object,
  labelSize: PropTypes.number,
  labelStyle: PropTypes.object,
  style: PropTypes.object
};
Item.defaultProps = {
  children: null,
  className: undefined,
  label: null,
  labelAlign: null,
  labelHelper: null,
  labelHelperIcon: "help-circle",
  labelHelperProps: {},
  labelSize: null,
  labelStyle: {},
  style: {}
};
export default Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZm9ybS9JdGVtLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkljb24iLCJQb3BvdmVyIiwiRm9ybUNvbnRleHQiLCJwcmVmaXgiLCJJdGVtIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsYWJlbCIsImxhYmVsQWxpZ24iLCJsYWJlbEhlbHBlciIsImxhYmVsSGVscGVySWNvbiIsImxhYmVsSGVscGVyUHJvcHMiLCJsYWJlbFNpemUiLCJsYWJlbFN0eWxlIiwic3R5bGUiLCJvdGhlclByb3BzIiwibGFiZWxBbGlnbkNvbnRleHQiLCJpdGVtU3R5bGUiLCJsYWJlbFN0eWxlQ29udGV4dCIsImxhYmVsU2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsImFsaWduIiwiYWxpZ25TdHlsZSIsImp1c3RpZnlDb250ZW50IiwibGFiZWxTaXplRmluYWwiLCJsYWJlbEZpbmFsIiwiZ2V0Rm9ybWF0U3RyTGVuZyIsInN0ciIsImxlbiIsImxlbmd0aCIsInJlYWxMZW5ndGgiLCJjaGFyQ29kZSIsImkiLCJjaGFyQ29kZUF0IiwiTWF0aCIsImNlaWwiLCJzbGljZSIsIndpZHRoIiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsImFueSIsIm9iamVjdCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLE9BQTVCLFFBQTJDLE9BQTNDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxJQUFQLE1BQWdDLFNBQWhDO0FBQ0EsT0FBT0MsT0FBUCxNQUF1QyxZQUF2QztBQUNBLFNBQVNDLFdBQVQsUUFBNEIsV0FBNUI7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O0FBNEJmaEMsRUFBQUEsZ0JBQWdCLEVBQUViLFNBQVMsQ0FBQzhDLE1BNUJiO0FBZ0NmaEMsRUFBQUEsU0FBUyxFQUFFZCxTQUFTLENBQUMrQyxNQWhDTjtBQW9DZmhDLEVBQUFBLFVBQVUsRUFBRWYsU0FBUyxDQUFDOEMsTUFwQ1A7QUF3Q2Y5QixFQUFBQSxLQUFLLEVBQUVoQixTQUFTLENBQUM4QztBQXhDRixDQUFqQjtBQTJDQXhDLElBQUksQ0FBQzBDLFlBQUwsR0FBb0I7QUFDbEJ6QyxFQUFBQSxRQUFRLEVBQUUsSUFEUTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFeUMsU0FGTztBQUdsQnhDLEVBQUFBLEtBQUssRUFBRSxJQUhXO0FBSWxCQyxFQUFBQSxVQUFVLEVBQUUsSUFKTTtBQUtsQkMsRUFBQUEsV0FBVyxFQUFFLElBTEs7QUFNbEJDLEVBQUFBLGVBQWUsRUFBRSxhQU5DO0FBT2xCQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQVBBO0FBUWxCQyxFQUFBQSxTQUFTLEVBQUUsSUFSTztBQVNsQkMsRUFBQUEsVUFBVSxFQUFFLEVBVE07QUFVbEJDLEVBQUFBLEtBQUssRUFBRTtBQVZXLENBQXBCO0FBYUEsZUFBZVYsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCB7IEZvcm1Db250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLWZvcm1cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBsYWJlbFxuICAgKi9cbiAgbGFiZWw/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuWvuem9kOaWueW8j1xuICAgKi9cbiAgbGFiZWxBbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIiB8IG51bGxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuuVxuICAgKi9cbiAgbGFiZWxIZWxwZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueeahCBJY29uXG4gICAqL1xuICBsYWJlbEhlbHBlckljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueaJgOS9v+eUqOeahCBQb3BvdmVyIOeahCBQcm9wc1xuICAgKi9cbiAgbGFiZWxIZWxwZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuaVsO+8jEZvcm0g5Lya5LulIGVtIOWNleS9jeiuvue9riBsYWJlbCDlrr3luqZcbiAgICovXG4gIGxhYmVsU2l6ZT86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIGxhYmVsIHN0eWxlXG4gICAqL1xuICBsYWJlbFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog6ZmE5YqgIHN0eWxlXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbn1cblxuLyoqXG4gKiDooajljZUgaXRlbVxuICovXG5jb25zdCBJdGVtOiBSZWFjdC5GQzxJSXRlbVByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGxhYmVsLFxuICBsYWJlbEFsaWduLFxuICBsYWJlbEhlbHBlcixcbiAgbGFiZWxIZWxwZXJJY29uLFxuICBsYWJlbEhlbHBlclByb3BzLFxuICBsYWJlbFNpemUsXG4gIGxhYmVsU3R5bGUsXG4gIHN0eWxlLFxuICAuLi5vdGhlclByb3BzXG59OiBJSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbEFsaWduOiBsYWJlbEFsaWduQ29udGV4dCxcbiAgICBpdGVtU3R5bGUsXG4gICAgbGFiZWxTdHlsZTogbGFiZWxTdHlsZUNvbnRleHQsXG4gICAgbGFiZWxTaXplOiBsYWJlbFNpemVDb250ZXh0LFxuICB9ID0gdXNlQ29udGV4dChGb3JtQ29udGV4dClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWl0ZW1gKVxuXG4gIGxldCBhbGlnbjogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9IGxhYmVsQWxpZ24gfHwgbGFiZWxBbGlnbkNvbnRleHRcbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBhbGlnbiA9IFwiZmxleC1zdGFydFwiXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgYWxpZ24gPSBcImZsZXgtZW5kXCJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICBjb25zdCBhbGlnblN0eWxlID0gYWxpZ24gPyB7IGp1c3RpZnlDb250ZW50OiBhbGlnbiB9IDoge31cbiAgY29uc3QgbGFiZWxTaXplRmluYWwgPSBsYWJlbFNpemUgfHwgbGFiZWxTaXplQ29udGV4dFxuXG4gIC8qKlxuICAgKiDlpoLmnpwgbGFiZWwg5Li6IHRleHTvvIzliJnpmLLmraLkuIDkuKrlrZfmjaLooYznmoTpl67pophcbiAgICovXG4gIGNvbnN0IGxhYmVsRmluYWwgPSB1c2VNZW1vKCgpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICAgIGNvbnN0IGdldEZvcm1hdFN0ckxlbmcgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGhcbiAgICAgIGxldCByZWFsTGVuZ3RoID0gMFxuICAgICAgbGV0IGNoYXJDb2RlID0gLTFcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgICBpZiAoY2hhckNvZGUgPj0gMCAmJiBjaGFyQ29kZSA8PSAxMjgpIHtcbiAgICAgICAgICByZWFsTGVuZ3RoICs9IDAuNVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlYWxMZW5ndGggKz0gMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKHJlYWxMZW5ndGgpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGxhYmVsID09PSBcInN0cmluZ1wiICYmXG4gICAgICBsYWJlbFNpemVGaW5hbCAmJlxuICAgICAgZ2V0Rm9ybWF0U3RyTGVuZyhsYWJlbCkgLSBsYWJlbFNpemVGaW5hbCA9PT0gMVxuICAgICkge1xuICAgICAgcmV0dXJuIGAke2xhYmVsLnNsaWNlKDAsIDQpfVxcbiR7bGFiZWwuc2xpY2UoNCl9YFxuICAgIH1cbiAgICByZXR1cm4gbGFiZWxcbiAgfSwgW2xhYmVsXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5pdGVtU3R5bGUsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHshIWxhYmVsICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1sYWJlbGB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtsYWJlbFNpemVGaW5hbH1lbWAsXG4gICAgICAgICAgICAuLi5hbGlnblN0eWxlLFxuICAgICAgICAgICAgLi4ubGFiZWxTdHlsZUNvbnRleHQsXG4gICAgICAgICAgICAuLi5sYWJlbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWxGaW5hbH1cbiAgICAgICAgICB7ISFsYWJlbEhlbHBlciAmJiAoXG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICBwb3B1cD17bGFiZWxIZWxwZXJ9XG4gICAgICAgICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgIHsuLi5sYWJlbEhlbHBlclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGljb249e2xhYmVsSGVscGVySWNvbiB8fCBcImhlbHAtY2lyY2xlXCJ9XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RpdmVcbiAgICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLWdyYXktNjAwKVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbnRyb2xgfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogbGFiZWxcbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuWvuem9kOaWueW8j1xuICAgKi9cbiAgbGFiZWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSksXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrlcbiAgICovXG4gIGxhYmVsSGVscGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueeahCBJY29uXG4gICAqL1xuICBsYWJlbEhlbHBlckljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrnmiYDkvb/nlKjnmoQgUG9wb3ZlciDnmoQgUHJvcHNcbiAgICovXG4gIGxhYmVsSGVscGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKbmlbDvvIxGb3JtIOS8muS7pSBlbSDljZXkvY3orr7nva4gbGFiZWwg5a695bqmXG4gICAqL1xuICBsYWJlbFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsYWJlbCBzdHlsZVxuICAgKi9cbiAgbGFiZWxTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOmZhOWKoCBzdHlsZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cbkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGxhYmVsOiBudWxsLFxuICBsYWJlbEFsaWduOiBudWxsLFxuICBsYWJlbEhlbHBlcjogbnVsbCxcbiAgbGFiZWxIZWxwZXJJY29uOiBcImhlbHAtY2lyY2xlXCIsXG4gIGxhYmVsSGVscGVyUHJvcHM6IHt9LFxuICBsYWJlbFNpemU6IG51bGwsXG4gIGxhYmVsU3R5bGU6IHt9LFxuICBzdHlsZToge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cbiJdfQ==