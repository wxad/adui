"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _motion = _interopRequireDefault(require("../motion"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var prefix = "adui-cp";

var ColorPickerCollapse = function ColorPickerCollapse(_ref) {
  var className = _ref.className,
      collapsedProp = _ref.collapsed,
      content = _ref.content,
      defaultCollapsed = _ref.defaultCollapsed,
      header = _ref.header,
      onCollapseChange = _ref.onCollapseChange;

  var _useState = (0, _react.useState)(function () {
    var collapsedState = false;

    if (collapsedProp !== undefined) {
      collapsedState = collapsedProp;
    } else if (defaultCollapsed !== undefined) {
      collapsedState = defaultCollapsed;
    }

    return collapsedState;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  if (collapsedProp !== undefined && collapsed !== collapsedProp) {
    setCollapsed(!!collapsedProp);
  }

  var handleCollapseChange = function handleCollapseChange() {
    if (collapsedProp === undefined) {
      setCollapsed(!collapsed);
    }

    if (onCollapseChange) {
      onCollapseChange(!collapsed);
    }
  };

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, "".concat(prefix, "-collapse"), _defineProperty({}, "".concat(prefix, "-collapse_collapsed"), collapsed))
  }, _react["default"].createElement("div", {
    className: "".concat(prefix, "-collapse-header"),
    onClick: handleCollapseChange,
    role: "none"
  }, header, _react["default"].createElement(_icon["default"], {
    icon: "arrow-down",
    className: "".concat(prefix, "-collapse-header-icon")
  })), _react["default"].createElement(_motion["default"], {
    transition: "slide"
  }, !collapsed && _react["default"].createElement("div", {
    className: "".concat(prefix, "-collapse-content")
  }, content)));
};

ColorPickerCollapse.propTypes = {
  className: _propTypes["default"].string,
  collapsed: _propTypes["default"].bool,
  content: _propTypes["default"].node,
  defaultCollapsed: _propTypes["default"].bool,
  header: _propTypes["default"].node,
  onCollapseChange: _propTypes["default"].func
};
ColorPickerCollapse.defaultProps = {
  className: undefined,
  collapsed: undefined,
  defaultCollapsed: undefined,
  header: null,
  content: null,
  onCollapseChange: function onCollapseChange() {}
};
var _default = ColorPickerCollapse;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL0NvbG9yUGlja2VyQ29sbGFwc2UudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNvbG9yUGlja2VyQ29sbGFwc2UiLCJjbGFzc05hbWUiLCJjb2xsYXBzZWRQcm9wIiwiY29sbGFwc2VkIiwiY29udGVudCIsImRlZmF1bHRDb2xsYXBzZWQiLCJoZWFkZXIiLCJvbkNvbGxhcHNlQ2hhbmdlIiwiY29sbGFwc2VkU3RhdGUiLCJ1bmRlZmluZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVDb2xsYXBzZUNoYW5nZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFmOztBQWNBLElBQU1DLG1CQUE0RCxHQUFHLFNBQS9EQSxtQkFBK0QsT0FPL0M7QUFBQSxNQU5wQkMsU0FNb0IsUUFOcEJBLFNBTW9CO0FBQUEsTUFMVEMsYUFLUyxRQUxwQkMsU0FLb0I7QUFBQSxNQUpwQkMsT0FJb0IsUUFKcEJBLE9BSW9CO0FBQUEsTUFIcEJDLGdCQUdvQixRQUhwQkEsZ0JBR29CO0FBQUEsTUFGcEJDLE1BRW9CLFFBRnBCQSxNQUVvQjtBQUFBLE1BRHBCQyxnQkFDb0IsUUFEcEJBLGdCQUNvQjs7QUFBQSxrQkFDYyxxQkFBUyxZQUFNO0FBQy9DLFFBQUlDLGNBQWMsR0FBRyxLQUFyQjs7QUFFQSxRQUFJTixhQUFhLEtBQUtPLFNBQXRCLEVBQWlDO0FBQy9CRCxNQUFBQSxjQUFjLEdBQUdOLGFBQWpCO0FBQ0QsS0FGRCxNQUVPLElBQUlHLGdCQUFnQixLQUFLSSxTQUF6QixFQUFvQztBQUN6Q0QsTUFBQUEsY0FBYyxHQUFHSCxnQkFBakI7QUFDRDs7QUFDRCxXQUFPRyxjQUFQO0FBQ0QsR0FUaUMsQ0FEZDtBQUFBO0FBQUEsTUFDYkwsU0FEYTtBQUFBLE1BQ0ZPLFlBREU7O0FBYXBCLE1BQUlSLGFBQWEsS0FBS08sU0FBbEIsSUFBK0JOLFNBQVMsS0FBS0QsYUFBakQsRUFBZ0U7QUFDOURRLElBQUFBLFlBQVksQ0FBQyxDQUFDLENBQUNSLGFBQUgsQ0FBWjtBQUNEOztBQUVELE1BQU1TLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQyxRQUFJVCxhQUFhLEtBQUtPLFNBQXRCLEVBQWlDO0FBQy9CQyxNQUFBQSxZQUFZLENBQUMsQ0FBQ1AsU0FBRixDQUFaO0FBQ0Q7O0FBQ0QsUUFBSUksZ0JBQUosRUFBc0I7QUFDcEJBLE1BQUFBLGdCQUFnQixDQUFDLENBQUNKLFNBQUYsQ0FBaEI7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsU0FDRTtBQUNFLElBQUEsU0FBUyxFQUFFLDRCQUFXRixTQUFYLFlBQXlCRixNQUF6Qiw4Q0FDTEEsTUFESywwQkFDeUJJLFNBRHpCO0FBRGIsS0FLRTtBQUNFLElBQUEsU0FBUyxZQUFLSixNQUFMLHFCQURYO0FBRUUsSUFBQSxPQUFPLEVBQUVZLG9CQUZYO0FBR0UsSUFBQSxJQUFJLEVBQUM7QUFIUCxLQUtHTCxNQUxILEVBTUUsZ0NBQUMsZ0JBQUQ7QUFBTSxJQUFBLElBQUksRUFBQyxZQUFYO0FBQXdCLElBQUEsU0FBUyxZQUFLUCxNQUFMO0FBQWpDLElBTkYsQ0FMRixFQWFFLGdDQUFDLGtCQUFEO0FBQVEsSUFBQSxVQUFVLEVBQUM7QUFBbkIsS0FDRyxDQUFDSSxTQUFELElBQ0M7QUFBSyxJQUFBLFNBQVMsWUFBS0osTUFBTDtBQUFkLEtBQStDSyxPQUEvQyxDQUZKLENBYkYsQ0FERjtBQXFCRCxDQXRERDs7QUF3REFKLG1CQUFtQixDQUFDWSxTQUFwQixHQUFnQztBQUM5QlgsRUFBQUEsU0FBUyxFQUFFWSxzQkFBVUMsTUFEUztBQUU5QlgsRUFBQUEsU0FBUyxFQUFFVSxzQkFBVUUsSUFGUztBQUc5QlgsRUFBQUEsT0FBTyxFQUFFUyxzQkFBVUcsSUFIVztBQUk5QlgsRUFBQUEsZ0JBQWdCLEVBQUVRLHNCQUFVRSxJQUpFO0FBSzlCVCxFQUFBQSxNQUFNLEVBQUVPLHNCQUFVRyxJQUxZO0FBTTlCVCxFQUFBQSxnQkFBZ0IsRUFBRU0sc0JBQVVJO0FBTkUsQ0FBaEM7QUFTQWpCLG1CQUFtQixDQUFDa0IsWUFBcEIsR0FBbUM7QUFDakNqQixFQUFBQSxTQUFTLEVBQUVRLFNBRHNCO0FBRWpDTixFQUFBQSxTQUFTLEVBQUVNLFNBRnNCO0FBR2pDSixFQUFBQSxnQkFBZ0IsRUFBRUksU0FIZTtBQUlqQ0gsRUFBQUEsTUFBTSxFQUFFLElBSnlCO0FBS2pDRixFQUFBQSxPQUFPLEVBQUUsSUFMd0I7QUFNakNHLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUU7QUFOTyxDQUFuQztlQVNlUCxtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBNb3Rpb24gZnJvbSBcIi4uL21vdGlvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNwXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGFwc2VQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjb2xsYXBzZWQ/OiBib29sZWFuXG4gIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZVxuICBkZWZhdWx0Q29sbGFwc2VkPzogYm9vbGVhblxuICBoZWFkZXI6IFJlYWN0LlJlYWN0Tm9kZVxuICBvbkNvbGxhcHNlQ2hhbmdlPzogKGNvbGxhcHNlZDogYm9vbGVhbikgPT4gdm9pZFxufVxuXG4vKipcbiAqIOminOiJsumAieaLqeWZqFxuICovXG5jb25zdCBDb2xvclBpY2tlckNvbGxhcHNlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJQ29sbGFwc2VQcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIGNvbGxhcHNlZDogY29sbGFwc2VkUHJvcCxcbiAgY29udGVudCxcbiAgZGVmYXVsdENvbGxhcHNlZCxcbiAgaGVhZGVyLFxuICBvbkNvbGxhcHNlQ2hhbmdlLFxufTogSUNvbGxhcHNlUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBsZXQgY29sbGFwc2VkU3RhdGUgPSBmYWxzZVxuXG4gICAgaWYgKGNvbGxhcHNlZFByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29sbGFwc2VkU3RhdGUgPSBjb2xsYXBzZWRQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0Q29sbGFwc2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbGxhcHNlZFN0YXRlID0gZGVmYXVsdENvbGxhcHNlZFxuICAgIH1cbiAgICByZXR1cm4gY29sbGFwc2VkU3RhdGVcbiAgfSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChjb2xsYXBzZWRQcm9wICE9PSB1bmRlZmluZWQgJiYgY29sbGFwc2VkICE9PSBjb2xsYXBzZWRQcm9wKSB7XG4gICAgc2V0Q29sbGFwc2VkKCEhY29sbGFwc2VkUHJvcClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbGxhcHNlQ2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChjb2xsYXBzZWRQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKVxuICAgIH1cbiAgICBpZiAob25Db2xsYXBzZUNoYW5nZSkge1xuICAgICAgb25Db2xsYXBzZUNoYW5nZSghY29sbGFwc2VkKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1jb2xsYXBzZWAsIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tY29sbGFwc2VfY29sbGFwc2VkYF06IGNvbGxhcHNlZCxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbGxhcHNlLWhlYWRlcmB9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbGxhcHNlQ2hhbmdlfVxuICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICA+XG4gICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDxJY29uIGljb249XCJhcnJvdy1kb3duXCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbGxhcHNlLWhlYWRlci1pY29uYH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vdGlvbiB0cmFuc2l0aW9uPVwic2xpZGVcIj5cbiAgICAgICAgeyFjb2xsYXBzZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbGxhcHNlLWNvbnRlbnRgfT57Y29udGVudH08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTW90aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNvbG9yUGlja2VyQ29sbGFwc2UucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbGxhcHNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICBkZWZhdWx0Q29sbGFwc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgb25Db2xsYXBzZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbkNvbG9yUGlja2VyQ29sbGFwc2UuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY29sbGFwc2VkOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRDb2xsYXBzZWQ6IHVuZGVmaW5lZCxcbiAgaGVhZGVyOiBudWxsLFxuICBjb250ZW50OiBudWxsLFxuICBvbkNvbGxhcHNlQ2hhbmdlOiAoKSA9PiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXJDb2xsYXBzZVxuIl19