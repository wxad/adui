function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import Popover from "../popover";
import { FormContext } from "./Context";
import "./style";
var prefix = "adui-form";

var Item = function Item(_ref) {
  var children = _ref.children,
      className = _ref.className,
      label = _ref.label,
      labelAlign = _ref.labelAlign,
      labelHelper = _ref.labelHelper,
      labelHelperIcon = _ref.labelHelperIcon,
      labelHelperProps = _ref.labelHelperProps,
      labelSize = _ref.labelSize,
      labelClassName = _ref.labelClassName,
      labelStyle = _ref.labelStyle,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "label", "labelAlign", "labelHelper", "labelHelperIcon", "labelHelperProps", "labelSize", "labelClassName", "labelStyle", "style"]);

  var _useContext = useContext(FormContext),
      itemClassNameContext = _useContext.itemClassName,
      itemStyle = _useContext.itemStyle,
      labelAlignContext = _useContext.labelAlign,
      labelStyleContext = _useContext.labelStyle,
      labelSizeContext = _useContext.labelSize,
      labelClassNameContext = _useContext.labelClassName;

  var classSet = classNames(className || itemClassNameContext, "".concat(prefix, "-item"));
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
  return React.createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, itemStyle), style)
  }, otherProps), !!label && React.createElement("div", {
    className: classNames("".concat(prefix, "-label"), labelClassName || labelClassNameContext),
    style: _objectSpread(_objectSpread(_objectSpread({
      width: "".concat(labelSize || labelSizeContext, "em")
    }, alignStyle), labelStyleContext), labelStyle)
  }, label, !!labelHelper && React.createElement(Popover, _extends({
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
  labelClassName: PropTypes.string,
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
  labelClassName: undefined,
  labelStyle: {},
  style: {}
};
export default Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9JdGVtLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiSWNvbiIsIlBvcG92ZXIiLCJGb3JtQ29udGV4dCIsInByZWZpeCIsIkl0ZW0iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImxhYmVsIiwibGFiZWxBbGlnbiIsImxhYmVsSGVscGVyIiwibGFiZWxIZWxwZXJJY29uIiwibGFiZWxIZWxwZXJQcm9wcyIsImxhYmVsU2l6ZSIsImxhYmVsQ2xhc3NOYW1lIiwibGFiZWxTdHlsZSIsInN0eWxlIiwib3RoZXJQcm9wcyIsIml0ZW1DbGFzc05hbWVDb250ZXh0IiwiaXRlbUNsYXNzTmFtZSIsIml0ZW1TdHlsZSIsImxhYmVsQWxpZ25Db250ZXh0IiwibGFiZWxTdHlsZUNvbnRleHQiLCJsYWJlbFNpemVDb250ZXh0IiwibGFiZWxDbGFzc05hbWVDb250ZXh0IiwiY2xhc3NTZXQiLCJhbGlnbiIsImFsaWduU3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsImFueSIsIm9iamVjdCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsUUFBa0MsT0FBbEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLElBQVAsTUFBZ0MsU0FBaEM7QUFDQSxPQUFPQyxPQUFQLE1BQXVDLFlBQXZDO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixXQUE1QjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQXFEQSxJQUFNQyxJQUEwQixHQUFHLFNBQTdCQSxJQUE2QixPQWFqQjtB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LEVBQU8sTUFBUCxFQUFlLFFBQWYsRUFBeUIsT0FBekIsQ0FBaEIsQ0FoQkc7QUFvQmZwQixFQUFBQSxjQUFjLEVBQUVmLFNBQVMsQ0FBQ2tDLE1BcEJYO0FBd0JmdkIsRUFBQUEsV0FBVyxFQUFFWCxTQUFTLENBQUNpQyxJQXhCUjtBQTRCZnJCLEVBQUFBLGVBQWUsRUFBRVosU0FBUyxDQUFDb0MsR0E1Qlo7QUFnQ2Z2QixFQUFBQSxnQkFBZ0IsRUFBRWIsU0FBUyxDQUFDcUMsTUFoQ2I7QUFvQ2Z2QixFQUFBQSxTQUFTLEVBQUVkLFNBQVMsQ0FBQ3NDLE1BcENOO0FBd0NmdEIsRUFBQUEsVUFBVSxFQUFFaEIsU0FBUyxDQUFDcUMsTUF4Q1A7QUE0Q2ZwQixFQUFBQSxLQUFLLEVBQUVqQixTQUFTLENBQUNxQztBQTVDRixDQUFqQjtBQStDQS9CLElBQUksQ0FBQ2lDLFlBQUwsR0FBb0I7QUFDbEJoQyxFQUFBQSxRQUFRLEVBQUUsSUFEUTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFZ0MsU0FGTztBQUdsQi9CLEVBQUFBLEtBQUssRUFBRSxJQUhXO0FBSWxCQyxFQUFBQSxVQUFVLEVBQUUsSUFKTTtBQUtsQkMsRUFBQUEsV0FBVyxFQUFFLElBTEs7QUFNbEJDLEVBQUFBLGVBQWUsRUFBRSxhQU5DO0FBT2xCQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQVBBO0FBUWxCQyxFQUFBQSxTQUFTLEVBQUUsSUFSTztBQVNsQkMsRUFBQUEsY0FBYyxFQUFFeUIsU0FURTtBQVVsQnhCLEVBQUFBLFVBQVUsRUFBRSxFQVZNO0FBV2xCQyxFQUFBQSxLQUFLLEVBQUU7QUFYVyxDQUFwQjtBQWNBLGVBQWVYLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgeyBGb3JtQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1mb3JtXCJcblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogbGFiZWxcbiAgICovXG4gIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKblr7npvZDmlrnlvI9cbiAgICovXG4gIGxhYmVsQWxpZ24/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCIgfCBudWxsXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrlcbiAgICovXG4gIGxhYmVsSGVscGVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrnnmoQgSWNvblxuICAgKi9cbiAgbGFiZWxIZWxwZXJJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiBsYWJlbCDop6Pph4rlhoXlrrnmiYDkvb/nlKjnmoQgUG9wb3ZlciDnmoQgUHJvcHNcbiAgICovXG4gIGxhYmVsSGVscGVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKbmlbDvvIxGb3JtIOS8muS7pSBlbSDljZXkvY3orr7nva4gbGFiZWwg5a695bqmXG4gICAqL1xuICBsYWJlbFNpemU/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiBsYWJlbCBjbGFzc05hbWVcbiAgICovXG4gIGxhYmVsQ2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBsYWJlbCBzdHlsZVxuICAgKi9cbiAgbGFiZWxTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOmZhOWKoCBzdHlsZVxuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG59XG5cbi8qKlxuICog6KGo5Y2VIGl0ZW1cbiAqL1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SUl0ZW1Qcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBsYWJlbCxcbiAgbGFiZWxBbGlnbixcbiAgbGFiZWxIZWxwZXIsXG4gIGxhYmVsSGVscGVySWNvbixcbiAgbGFiZWxIZWxwZXJQcm9wcyxcbiAgbGFiZWxTaXplLFxuICBsYWJlbENsYXNzTmFtZSxcbiAgbGFiZWxTdHlsZSxcbiAgc3R5bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElJdGVtUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGl0ZW1DbGFzc05hbWU6IGl0ZW1DbGFzc05hbWVDb250ZXh0LFxuICAgIGl0ZW1TdHlsZSxcbiAgICBsYWJlbEFsaWduOiBsYWJlbEFsaWduQ29udGV4dCxcbiAgICBsYWJlbFN0eWxlOiBsYWJlbFN0eWxlQ29udGV4dCxcbiAgICBsYWJlbFNpemU6IGxhYmVsU2l6ZUNvbnRleHQsXG4gICAgbGFiZWxDbGFzc05hbWU6IGxhYmVsQ2xhc3NOYW1lQ29udGV4dCxcbiAgfSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSB8fCBpdGVtQ2xhc3NOYW1lQ29udGV4dCxcbiAgICBgJHtwcmVmaXh9LWl0ZW1gXG4gIClcblxuICBsZXQgYWxpZ246IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwgPSBsYWJlbEFsaWduIHx8IGxhYmVsQWxpZ25Db250ZXh0XG4gIHN3aXRjaCAoYWxpZ24pIHtcbiAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgYWxpZ24gPSBcImZsZXgtc3RhcnRcIlxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgIGFsaWduID0gXCJmbGV4LWVuZFwiXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgIGFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICB9XG5cbiAgY29uc3QgYWxpZ25TdHlsZSA9IGFsaWduID8geyBqdXN0aWZ5Q29udGVudDogYWxpZ24gfSA6IHt9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uaXRlbVN0eWxlLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICB7ISFsYWJlbCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICBgJHtwcmVmaXh9LWxhYmVsYCxcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lIHx8IGxhYmVsQ2xhc3NOYW1lQ29udGV4dFxuICAgICAgICAgICl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHtsYWJlbFNpemUgfHwgbGFiZWxTaXplQ29udGV4dH1lbWAsXG4gICAgICAgICAgICAuLi5hbGlnblN0eWxlLFxuICAgICAgICAgICAgLi4ubGFiZWxTdHlsZUNvbnRleHQsXG4gICAgICAgICAgICAuLi5sYWJlbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgeyEhbGFiZWxIZWxwZXIgJiYgKFxuICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgcG9wdXA9e2xhYmVsSGVscGVyfVxuICAgICAgICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICB7Li4ubGFiZWxIZWxwZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBpY29uPXtsYWJlbEhlbHBlckljb24gfHwgXCJoZWxwLWNpcmNsZVwifVxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZlXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1ncmF5LTYwMClcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250cm9sYH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkl0ZW0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGxhYmVsXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKblr7npvZDmlrnlvI9cbiAgICovXG4gIGxhYmVsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAvKipcbiAgICogbGFiZWwgY2xhc3NOYW1lXG4gICAqL1xuICBsYWJlbENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuuVxuICAgKi9cbiAgbGFiZWxIZWxwZXI6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogbGFiZWwg6Kej6YeK5YaF5a6555qEIEljb25cbiAgICovXG4gIGxhYmVsSGVscGVySWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGxhYmVsIOino+mHiuWGheWuueaJgOS9v+eUqOeahCBQb3BvdmVyIOeahCBQcm9wc1xuICAgKi9cbiAgbGFiZWxIZWxwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIGxhYmVsIOWtl+espuaVsO+8jEZvcm0g5Lya5LulIGVtIOWNleS9jeiuvue9riBsYWJlbCDlrr3luqZcbiAgICovXG4gIGxhYmVsU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxhYmVsIHN0eWxlXG4gICAqL1xuICBsYWJlbFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog6ZmE5YqgIHN0eWxlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgbGFiZWw6IG51bGwsXG4gIGxhYmVsQWxpZ246IG51bGwsXG4gIGxhYmVsSGVscGVyOiBudWxsLFxuICBsYWJlbEhlbHBlckljb246IFwiaGVscC1jaXJjbGVcIixcbiAgbGFiZWxIZWxwZXJQcm9wczoge30sXG4gIGxhYmVsU2l6ZTogbnVsbCxcbiAgbGFiZWxDbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgbGFiZWxTdHlsZToge30sXG4gIHN0eWxlOiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbVxuIl19