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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL0NvbG9yUGlja2VyQ29sbGFwc2UudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNvbG9yUGlja2VyQ29sbGFwc2UiLCJjbGFzc05hbWUiLCJjb2xsYXBzZWRQcm9wIiwiY29sbGFwc2VkIiwiY29udGVudCIsImRlZmF1bHRDb2xsYXBzZWQiLCJoZWFkZXIiLCJvbkNvbGxhcHNlQ2hhbmdlIiwiY29sbGFwc2VkU3RhdGUiLCJ1bmRlZmluZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVDb2xsYXBzZUNoYW5nZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBZjs7QUFjQSxJQUFNQyxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELE9BT2hDO0FBQUEsTUFOcEJDLFNBTW9CLFFBTnBCQSxTQU1vQjtBQUFBLE1BTFRDLGFBS1MsUUFMcEJDLFNBS29CO0FBQUEsTUFKcEJDLE9BSW9CLFFBSnBCQSxPQUlvQjtBQUFBLE1BSHBCQyxnQkFHb0IsUUFIcEJBLGdCQUdvQjtBQUFBLE1BRnBCQyxNQUVvQixRQUZwQkEsTUFFb0I7QUFBQSxNQURwQkMsZ0JBQ29CLFFBRHBCQSxnQkFDb0I7O0FBQUEsa0JBQ2MscUJBQVMsWUFBTTtBQUMvQyxRQUFJQyxjQUFjLEdBQUcsS0FBckI7O0FBRUEsUUFBSU4sYUFBYSxLQUFLTyxTQUF0QixFQUFpQztBQUMvQkQsTUFBQUEsY0FBYyxHQUFHTixhQUFqQjtBQUNELEtBRkQsTUFFTyxJQUFJRyxnQkFBZ0IsS0FBS0ksU0FBekIsRUFBb0M7QUFDekNELE1BQUFBLGNBQWMsR0FBR0gsZ0JBQWpCO0FBQ0Q7O0FBQ0QsV0FBT0csY0FBUDtBQUNELEdBVGlDLENBRGQ7QUFBQTtBQUFBLE1BQ2JMLFNBRGE7QUFBQSxNQUNGTyxZQURFOztBQWFwQixNQUFJUixhQUFhLEtBQUtPLFNBQWxCLElBQStCTixTQUFTLEtBQUtELGFBQWpELEVBQWdFO0FBQzlEUSxJQUFBQSxZQUFZLENBQUMsQ0FBQyxDQUFDUixhQUFILENBQVo7QUFDRDs7QUFFRCxNQUFNUyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsUUFBSVQsYUFBYSxLQUFLTyxTQUF0QixFQUFpQztBQUMvQkMsTUFBQUEsWUFBWSxDQUFDLENBQUNQLFNBQUYsQ0FBWjtBQUNEOztBQUNELFFBQUlJLGdCQUFKLEVBQXNCO0FBQ3BCQSxNQUFBQSxnQkFBZ0IsQ0FBQyxDQUFDSixTQUFGLENBQWhCO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRSw0QkFBV0YsU0FBWCxZQUF5QkYsTUFBekIsOENBQ0xBLE1BREssMEJBQ3lCSSxTQUR6QjtBQURiLEtBS0U7QUFDRSxJQUFBLFNBQVMsWUFBS0osTUFBTCxxQkFEWDtBQUVFLElBQUEsT0FBTyxFQUFFWSxvQkFGWDtBQUdFLElBQUEsSUFBSSxFQUFDO0FBSFAsS0FLR0wsTUFMSCxFQU1FLGdDQUFDLGdCQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUMsWUFBWDtBQUF3QixJQUFBLFNBQVMsWUFBS1AsTUFBTDtBQUFqQyxJQU5GLENBTEYsRUFhRSxnQ0FBQyxrQkFBRDtBQUFRLElBQUEsVUFBVSxFQUFDO0FBQW5CLEtBQ0csQ0FBQ0ksU0FBRCxJQUNDO0FBQUssSUFBQSxTQUFTLFlBQUtKLE1BQUw7QUFBZCxLQUErQ0ssT0FBL0MsQ0FGSixDQWJGLENBREY7QUFxQkQsQ0F0REQ7O0FBd0RBSixtQkFBbUIsQ0FBQ1ksU0FBcEIsR0FBZ0M7QUFDOUJYLEVBQUFBLFNBQVMsRUFBRVksc0JBQVVDLE1BRFM7QUFFOUJYLEVBQUFBLFNBQVMsRUFBRVUsc0JBQVVFLElBRlM7QUFHOUJYLEVBQUFBLE9BQU8sRUFBRVMsc0JBQVVHLElBSFc7QUFJOUJYLEVBQUFBLGdCQUFnQixFQUFFUSxzQkFBVUUsSUFKRTtBQUs5QlQsRUFBQUEsTUFBTSxFQUFFTyxzQkFBVUcsSUFMWTtBQU05QlQsRUFBQUEsZ0JBQWdCLEVBQUVNLHNCQUFVSTtBQU5FLENBQWhDO0FBU0FqQixtQkFBbUIsQ0FBQ2tCLFlBQXBCLEdBQW1DO0FBQ2pDakIsRUFBQUEsU0FBUyxFQUFFUSxTQURzQjtBQUVqQ04sRUFBQUEsU0FBUyxFQUFFTSxTQUZzQjtBQUdqQ0osRUFBQUEsZ0JBQWdCLEVBQUVJLFNBSGU7QUFJakNILEVBQUFBLE1BQU0sRUFBRSxJQUp5QjtBQUtqQ0YsRUFBQUEsT0FBTyxFQUFFLElBTHdCO0FBTWpDRyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFO0FBTk8sQ0FBbkM7ZUFTZVAsbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgTW90aW9uIGZyb20gXCIuLi9tb3Rpb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jcFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbGxhcHNlUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY29sbGFwc2VkPzogYm9vbGVhblxuICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGVcbiAgZGVmYXVsdENvbGxhcHNlZD86IGJvb2xlYW5cbiAgaGVhZGVyOiBSZWFjdC5SZWFjdE5vZGVcbiAgb25Db2xsYXBzZUNoYW5nZT86IChjb2xsYXBzZWQ6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuLyoqXG4gKiDpopzoibLpgInmi6nlmahcbiAqL1xuY29uc3QgQ29sb3JQaWNrZXJDb2xsYXBzZTogUmVhY3QuRkM8SUNvbGxhcHNlUHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjb2xsYXBzZWQ6IGNvbGxhcHNlZFByb3AsXG4gIGNvbnRlbnQsXG4gIGRlZmF1bHRDb2xsYXBzZWQsXG4gIGhlYWRlcixcbiAgb25Db2xsYXBzZUNoYW5nZSxcbn06IElDb2xsYXBzZVByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgbGV0IGNvbGxhcHNlZFN0YXRlID0gZmFsc2VcblxuICAgIGlmIChjb2xsYXBzZWRQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbGxhcHNlZFN0YXRlID0gY29sbGFwc2VkUHJvcFxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdENvbGxhcHNlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb2xsYXBzZWRTdGF0ZSA9IGRlZmF1bHRDb2xsYXBzZWRcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxhcHNlZFN0YXRlXG4gIH0pXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoY29sbGFwc2VkUHJvcCAhPT0gdW5kZWZpbmVkICYmIGNvbGxhcHNlZCAhPT0gY29sbGFwc2VkUHJvcCkge1xuICAgIHNldENvbGxhcHNlZCghIWNvbGxhcHNlZFByb3ApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDb2xsYXBzZUNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoY29sbGFwc2VkUHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZClcbiAgICB9XG4gICAgaWYgKG9uQ29sbGFwc2VDaGFuZ2UpIHtcbiAgICAgIG9uQ29sbGFwc2VDaGFuZ2UoIWNvbGxhcHNlZClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tY29sbGFwc2VgLCB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWNvbGxhcHNlX2NvbGxhcHNlZGBdOiBjb2xsYXBzZWQsXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb2xsYXBzZS1oZWFkZXJgfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb2xsYXBzZUNoYW5nZX1cbiAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgPlxuICAgICAgICB7aGVhZGVyfVxuICAgICAgICA8SWNvbiBpY29uPVwiYXJyb3ctZG93blwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb2xsYXBzZS1oZWFkZXItaWNvbmB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb3Rpb24gdHJhbnNpdGlvbj1cInNsaWRlXCI+XG4gICAgICAgIHshY29sbGFwc2VkICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb2xsYXBzZS1jb250ZW50YH0+e2NvbnRlbnR9PC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L01vdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Db2xvclBpY2tlckNvbGxhcHNlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xsYXBzZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgZGVmYXVsdENvbGxhcHNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uQ29sbGFwc2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5Db2xvclBpY2tlckNvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGNvbGxhcHNlZDogdW5kZWZpbmVkLFxuICBkZWZhdWx0Q29sbGFwc2VkOiB1bmRlZmluZWQsXG4gIGhlYWRlcjogbnVsbCxcbiAgY29udGVudDogbnVsbCxcbiAgb25Db2xsYXBzZUNoYW5nZTogKCkgPT4ge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yUGlja2VyQ29sbGFwc2VcbiJdfQ==