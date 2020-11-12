"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

var _builtinPlacements = require("./builtinPlacements");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PopTrigger = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      popup = _ref.popup,
      popupVisible = _ref.popupVisible,
      otherProps = _objectWithoutProperties(_ref, ["children", "popup", "popupVisible"]);

  var visibleProp = {};

  if (popupVisible !== null) {
    visibleProp.popupVisible = popupVisible;
  }

  return _react["default"].createElement(_rcTrigger["default"], _extends({
    ref: ref,
    popup: typeof popup === "string" ? _react["default"].createElement("div", null, popup) : popup
  }, visibleProp, otherProps), typeof children === "string" ? _react["default"].createElement("span", null, children) : children);
});
PopTrigger.displayName = "PopTrigger";
PopTrigger.propTypes = {
  action: _propTypes["default"].any,
  builtinPlacements: _propTypes["default"].object,
  children: _propTypes["default"].node,
  defaultPopupVisible: _propTypes["default"].bool,
  destroyPopupOnHide: _propTypes["default"].bool,
  getPopupContainer: _propTypes["default"].func,
  mouseEnterDelay: _propTypes["default"].number,
  mouseLeaveDelay: _propTypes["default"].number,
  popup: _propTypes["default"].node.isRequired,
  popupAlign: _propTypes["default"].object,
  popupClassName: _propTypes["default"].string,
  popupPlacement: _propTypes["default"].oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  popupStyle: _propTypes["default"].object,
  popupTransitionName: _propTypes["default"].string,
  popupVisible: _propTypes["default"].oneOf([null, true, false])
};
PopTrigger.defaultProps = {
  action: ["hover"],
  builtinPlacements: _builtinPlacements.builtinPlacements,
  children: "",
  defaultPopupVisible: false,
  destroyPopupOnHide: false,
  getPopupContainer: null,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  popupAlign: null,
  popupClassName: "",
  popupPlacement: "bottom",
  popupStyle: null,
  popupTransitionName: "",
  popupVisible: null
};
var _default = PopTrigger;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wLXRyaWdnZXIvUG9wVHJpZ2dlci50c3giXSwibmFtZXMiOlsiUG9wVHJpZ2dlciIsInJlZiIsImNoaWxkcmVuIiwicG9wdXAiLCJwb3B1cFZpc2libGUiLCJvdGhlclByb3BzIiwidmlzaWJsZVByb3AiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImFjdGlvbiIsIlByb3BUeXBlcyIsImFueSIsImJ1aWx0aW5QbGFjZW1lbnRzIiwib2JqZWN0Iiwibm9kZSIsImRlZmF1bHRQb3B1cFZpc2libGUiLCJib29sIiwiZGVzdHJveVBvcHVwT25IaWRlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJmdW5jIiwibW91c2VFbnRlckRlbGF5IiwibnVtYmVyIiwibW91c2VMZWF2ZURlbGF5IiwiaXNSZXF1aXJlZCIsInBvcHVwQWxpZ24iLCJwb3B1cENsYXNzTmFtZSIsInN0cmluZyIsInBvcHVwUGxhY2VtZW50Iiwib25lT2YiLCJwb3B1cFN0eWxlIiwicG9wdXBUcmFuc2l0aW9uTmFtZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLFVBQ3FCLEdBQUcsdUJBQzVCLGdCQUFxRUMsR0FBckUsRUFBNkU7QUFBQSxNQUExRUMsUUFBMEUsUUFBMUVBLFFBQTBFO0FBQUEsTUFBaEVDLEtBQWdFLFFBQWhFQSxLQUFnRTtBQUFBLE1BQXpEQyxZQUF5RCxRQUF6REEsWUFBeUQ7QUFBQSxNQUF4Q0MsVUFBd0M7O0FBQzNFLE1BQU1DLFdBQXFCLEdBQUcsRUFBOUI7O0FBRUEsTUFBSUYsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ3pCRSxJQUFBQSxXQUFXLENBQUNGLFlBQVosR0FBMkJBLFlBQTNCO0FBQ0Q7O0FBRUQsU0FDRSxnQ0FBQyxxQkFBRDtBQUNFLElBQUEsR0FBRyxFQUFFSCxHQURQO0FBRUUsSUFBQSxLQUFLLEVBQUUsT0FBT0UsS0FBUCxLQUFpQixRQUFqQixHQUE0Qiw2Q0FBTUEsS0FBTixDQUE1QixHQUFpREE7QUFGMUQsS0FHTUcsV0FITixFQUlNRCxVQUpOLEdBTUcsT0FBT0gsUUFBUCxLQUFvQixRQUFwQixHQUErQiw4Q0FBT0EsUUFBUCxDQUEvQixHQUF5REEsUUFONUQsQ0FERjtBQVVELENBbEIyQixDQUQ5QjtBQXNCQUYsVUFBVSxDQUFDTyxXQUFYLEdBQXlCLFlBQXpCO0FBRUFQLFVBQVUsQ0FBQ1EsU0FBWCxHQUF1QjtBQUlyQkMsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsR0FKRztBQVFyQkMsRUFBQUEsaUJBQWlCLEVBQUVGLHNCQUFVRyxNQVJSO0FBWXJCWCxFQUFBQSxRQUFRLEVBQUVRLHNCQUFVSSxJQVpDO0FBZ0JyQkMsRUFBQUEsbUJBQW1CLEVBQUVMLHNCQUFVTSxJQWhCVjtBQW9CckJDLEVBQUFBLGtCQUFrQixFQUFFUCxzQkFBVU0sSUFwQlQ7QUF3QnJCRSxFQUFBQSxpQkFBaUIsRUFBRVIsc0JBQVVTLElBeEJSO0FBNEJyQkMsRUFBQUEsZUFBZSxFQUFFVixzQkFBVVcsTUE1Qk47QUFnQ3JCQyxFQUFBQSxlQUFlLEVBQUVaLHNCQUFVVyxNQWhDTjtBQW9DckJsQixFQUFBQSxLQUFLLEVBQUVPLHNCQUFVSSxJQUFWLENBQWVTLFVBcENEO0FBd0NyQkMsRUFBQUEsVUFBVSxFQUFFZCxzQkFBVUcsTUF4Q0Q7QUE0Q3JCWSxFQUFBQSxjQUFjLEVBQUVmLHNCQUFVZ0IsTUE1Q0w7QUFtRHJCQyxFQUFBQSxjQUFjLEVBQUVqQixzQkFBVWtCLEtBQVYsQ0FBZ0IsQ0FDOUIsS0FEOEIsRUFFOUIsTUFGOEIsRUFHOUIsT0FIOEIsRUFJOUIsUUFKOEIsRUFLOUIsU0FMOEIsRUFNOUIsVUFOOEIsRUFPOUIsWUFQOEIsRUFROUIsYUFSOEIsRUFTOUIsU0FUOEIsRUFVOUIsWUFWOEIsRUFXOUIsVUFYOEIsRUFZOUIsYUFaOEIsQ0FBaEIsQ0FuREs7QUFvRXJCQyxFQUFBQSxVQUFVLEVBQUVuQixzQkFBVUcsTUFwRUQ7QUF3RXJCaUIsRUFBQUEsbUJBQW1CLEVBQUVwQixzQkFBVWdCLE1BeEVWO0FBNEVyQnRCLEVBQUFBLFlBQVksRUFBRU0sc0JBQVVrQixLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBQWhCO0FBNUVPLENBQXZCO0FBK0VBNUIsVUFBVSxDQUFDK0IsWUFBWCxHQUEwQjtBQUN4QnRCLEVBQUFBLE1BQU0sRUFBRSxDQUFDLE9BQUQsQ0FEZ0I7QUFFeEJHLEVBQUFBLGlCQUFpQixFQUFqQkEsb0NBRndCO0FBR3hCVixFQUFBQSxRQUFRLEVBQUUsRUFIYztBQUl4QmEsRUFBQUEsbUJBQW1CLEVBQUUsS0FKRztBQUt4QkUsRUFBQUEsa0JBQWtCLEVBQUUsS0FMSTtBQU14QkMsRUFBQUEsaUJBQWlCLEVBQUUsSUFOSztBQU94QkUsRUFBQUEsZUFBZSxFQUFFLENBUE87QUFReEJFLEVBQUFBLGVBQWUsRUFBRSxHQVJPO0FBU3hCRSxFQUFBQSxVQUFVLEVBQUUsSUFUWTtBQVV4QkMsRUFBQUEsY0FBYyxFQUFFLEVBVlE7QUFXeEJFLEVBQUFBLGNBQWMsRUFBRSxRQVhRO0FBWXhCRSxFQUFBQSxVQUFVLEVBQUUsSUFaWTtBQWF4QkMsRUFBQUEsbUJBQW1CLEVBQUUsRUFiRztBQWN4QjFCLEVBQUFBLFlBQVksRUFBRTtBQWRVLENBQTFCO2VBaUJlSixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgVHJpZ2dlciBmcm9tIFwicmMtdHJpZ2dlclwiXG5pbXBvcnQgeyBidWlsdGluUGxhY2VtZW50cyB9IGZyb20gXCIuL2J1aWx0aW5QbGFjZW1lbnRzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5pbnRlcmZhY2UgSVZpc2libGUge1xuICBwb3B1cFZpc2libGU/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmlnZ2VyIHtcbiAgZm9yY2VQb3B1cEFsaWduPzogKCkgPT4gdm9pZFxuICBnZXRSb290RG9tTm9kZT86ICgpID0+IEhUTUxFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIFBsYWNlbWVudCA9XG4gIHwgXCJib3R0b21cIlxuICB8IFwiYm90dG9tTGVmdFwiXG4gIHwgXCJib3R0b21SaWdodFwiXG4gIHwgXCJsZWZ0XCJcbiAgfCBcImxlZnRCb3R0b21cIlxuICB8IFwibGVmdFRvcFwiXG4gIHwgXCJyaWdodFwiXG4gIHwgXCJyaWdodEJvdHRvbVwiXG4gIHwgXCJyaWdodFRvcFwiXG4gIHwgXCJ0b3BcIlxuICB8IFwidG9wTGVmdFwiXG4gIHwgXCJ0b3BSaWdodFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcFRyaWdnZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBhY3Rpb24/OiBzdHJpbmdbXVxuICBidWlsdGluUGxhY2VtZW50cz86IG9iamVjdFxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICBkZWZhdWx0UG9wdXBWaXNpYmxlPzogbnVsbCB8IGJvb2xlYW5cbiAgZGVzdHJveVBvcHVwT25IaWRlPzogYm9vbGVhblxuICBnZXRQb3B1cENvbnRhaW5lcj86IG51bGwgfCAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBIVE1MRWxlbWVudClcbiAgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyXG4gIG1vdXNlTGVhdmVEZWxheT86IG51bWJlclxuICBvblBvcHVwQWxpZ246IChub2RlOiBIVE1MRWxlbWVudCwgYWxpZ24/OiBJQmFzZU9iamVjdCkgPT4gdm9pZFxuICBvblBvcHVwVmlzaWJsZUNoYW5nZTogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgcG9wdXA6IFJlYWN0LlJlYWN0Tm9kZVxuICBwb3B1cEFsaWduPzogbnVsbCB8IG9iamVjdFxuICBwb3B1cENsYXNzTmFtZT86IHN0cmluZ1xuICBwb3B1cFBsYWNlbWVudD86IFBsYWNlbWVudFxuICBwb3B1cFN0eWxlPzogbnVsbCB8IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgcG9wdXBUcmFuc2l0aW9uTmFtZT86IHN0cmluZ1xuICBwb3B1cFZpc2libGU/OiBudWxsIHwgYm9vbGVhblxufVxuXG4vKipcbiAqIOW8ueWHuuihjOS4uuOAglxuICpcbiAqIFBvcFRyaWdnZXIg5piv5Z+65LqOIHJjLXRyaWdnZXIgKE1JVCBMaWNlbnNlKSDov5vooYzlsIHoo4XnmoTjgIJcbiAqIFBvcFRyaWdnZXIg55qE5a6a5L2N5piv5oq96LGh55qE5by55Ye66KGM5Li644CCXG4gKiBQb3BUcmlnZ2VyIOW6lOaPkOS+m+aJgOacieW8ueWHuuebuOWFs+eahOiDveWKm+S4jumFjee9ru+8jOS+myBUb29sdGlw44CBU2VsZWN0IOetieiwg+eUqOOAglxuICogUG9wVHJpZ2dlciDkuZ/lj6/ku6Xooqvkvb/nlKjogIXnm7TmjqXkvb/nlKjvvIzlrp7njrDoh6rlrprnmoTlvLnlh7rlip/og73jgIJcbiAqL1xuY29uc3QgUG9wVHJpZ2dlcjogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxJUG9wVHJpZ2dlclByb3BzICZcbiAgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+PiA9IGZvcndhcmRSZWYoXG4gICh7IGNoaWxkcmVuLCBwb3B1cCwgcG9wdXBWaXNpYmxlLCAuLi5vdGhlclByb3BzIH06IElQb3BUcmlnZ2VyUHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHZpc2libGVQcm9wOiBJVmlzaWJsZSA9IHt9XG5cbiAgICBpZiAocG9wdXBWaXNpYmxlICE9PSBudWxsKSB7XG4gICAgICB2aXNpYmxlUHJvcC5wb3B1cFZpc2libGUgPSBwb3B1cFZpc2libGVcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRyaWdnZXJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHBvcHVwPXt0eXBlb2YgcG9wdXAgPT09IFwic3RyaW5nXCIgPyA8ZGl2Pntwb3B1cH08L2Rpdj4gOiBwb3B1cH1cbiAgICAgICAgey4uLnZpc2libGVQcm9wfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge3R5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiA/IDxzcGFuPntjaGlsZHJlbn08L3NwYW4+IDogY2hpbGRyZW59XG4gICAgICA8L1RyaWdnZXI+XG4gICAgKVxuICB9XG4pXG5cblBvcFRyaWdnZXIuZGlzcGxheU5hbWUgPSBcIlBvcFRyaWdnZXJcIlxuXG5Qb3BUcmlnZ2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOinpuWPkeaWueW8j1xuICAgKi9cbiAgYWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6aKE6K6+5L2N572u77yM6ZyA6KaB5YyF5ZCrIHBvcHVwUGxhY2VtZW50IOeahCAxMiDkuKrkvY3nva5cbiAgICovXG4gIGJ1aWx0aW5QbGFjZW1lbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbmmK/lkKbpu5jorqTmmL7npLpcbiAgICovXG4gIGRlZmF1bHRQb3B1cFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5by55Ye65qGG5piv5ZCm5Zyo5raI5aSx5pe256e75Ye6IGRvbVxuICAgKi9cbiAgZGVzdHJveVBvcHVwT25IaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaMh+WumuW8ueWHuuahhueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudFxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogbW91c2VFbnRlciDmmL7npLrnmoTlu7bml7bvvIzljZXkvY3vvJpz77yM5Y+q5ZyoIGFjdGlvbj1bXCJob3ZlclwiXSDml7bmnInmlYhcbiAgICovXG4gIG1vdXNlRW50ZXJEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1vdXNlTGVhdmUg5raI5aSx55qE5bu25pe277yM5Y2V5L2N77yac++8jOWPquWcqCBhY3Rpb249W1wiaG92ZXJcIl0g5pe25pyJ5pWIXG4gICAqL1xuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDlvLnlh7rlhoXlrrlcbiAgICovXG4gIHBvcHVwOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICog5by55Ye65bGC55qE5L2N572u5o6n5Yi277yMQVBJIOivt+WPguiAgyBodHRwczovL2dpdGh1Yi5jb20veWltaW5naGUvZG9tLWFsaWduXG4gICAqL1xuICBwb3B1cEFsaWduOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5by55Ye65qGG55qE6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW8ueWHuuWxguS9jee9ru+8jOS5n+WPr+S7peS4jeS9v+eUqOi/meS6m+mihOiuvuS9jee9ru+8jOS9v+eUqCBwb3B1cEFsaWduIOWxnuaAp+OAglxuICAgKiDpobXpnaLlnKjlvLnlh7rmlrnlkJHkuIrml6Dms5Xmu5rliqjml7bkvJrlvoDlj6blpJbkuIDkuKrmlrnlkJHlvLnlh7rvvIzkv53or4HmnInnqbrpl7Tljrvmu5rliqjnnIvliLDjgIJcbiAgICog5aaC6K6+572u5LqGIHBvcHVwUGxhY2VtZW50PVwiYm90dG9tXCLvvIzkvYblhYPntKDlt7Lnu4/kvY3kuo7pobXpnaLlupXpg6jml7bvvIxwb3B1cCDliJnkvJrlj5jkuLogdG9w44CCXG4gICAqIOWboOS4uuaciSBUcmlnZ2VyIOeahOi/meS4quKAneS/neivgeacieepuumXtOWOu+a7muWKqOeci+WIsOKAnOeahOiuvuiuoemAu+i+ke+8jOaJgOS7peS4jeiAg+iZkeWBmumhtemdoua7muWKqOaXtueahOiHquWKqOWPmOaNoiBwb3B1cFBsYWNlbWVudOOAglxuICAgKi9cbiAgcG9wdXBQbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJ0b3BcIixcbiAgICBcImxlZnRcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcInRvcExlZnRcIixcbiAgICBcInRvcFJpZ2h0XCIsXG4gICAgXCJib3R0b21MZWZ0XCIsXG4gICAgXCJib3R0b21SaWdodFwiLFxuICAgIFwibGVmdFRvcFwiLFxuICAgIFwibGVmdEJvdHRvbVwiLFxuICAgIFwicmlnaHRUb3BcIixcbiAgICBcInJpZ2h0Qm90dG9tXCIsXG4gIF0pLFxuICAvKipcbiAgICog5by55Ye65qGG55qE6ZmE5Yqg5qC35byPXG4gICAqL1xuICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5by55Ye65qGG55qE5Yqo55S757G75ZCN77yM5Yqo55S75qC85byP6YG15b6qIHJjLWFuaW1hdGVcbiAgICovXG4gIHBvcHVwVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlvLnlh7rmoYbmmK/lkKbmmL7npLpcbiAgICovXG4gIHBvcHVwVmlzaWJsZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxufVxuXG5Qb3BUcmlnZ2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aW9uOiBbXCJob3ZlclwiXSxcbiAgYnVpbHRpblBsYWNlbWVudHMsXG4gIGNoaWxkcmVuOiBcIlwiLFxuICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBmYWxzZSxcbiAgZGVzdHJveVBvcHVwT25IaWRlOiBmYWxzZSxcbiAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIHBvcHVwQWxpZ246IG51bGwsXG4gIHBvcHVwQ2xhc3NOYW1lOiBcIlwiLFxuICBwb3B1cFBsYWNlbWVudDogXCJib3R0b21cIixcbiAgcG9wdXBTdHlsZTogbnVsbCxcbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogXCJcIixcbiAgcG9wdXBWaXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BUcmlnZ2VyXG4iXX0=