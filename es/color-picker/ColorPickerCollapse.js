function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import Motion from "../motion";
import "./style";
var prefix = "adui-cp";

var ColorPickerCollapse = function ColorPickerCollapse(_ref) {
  var className = _ref.className,
      collapsedProp = _ref.collapsed,
      content = _ref.content,
      defaultCollapsed = _ref.defaultCollapsed,
      header = _ref.header,
      onCollapseChange = _ref.onCollapseChange;

  var _useState = useState(function () {
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

  return React.createElement("div", {
    className: classNames(className, "".concat(prefix, "-collapse"), _defineProperty({}, "".concat(prefix, "-collapse_collapsed"), collapsed))
  }, React.createElement("div", {
    className: "".concat(prefix, "-collapse-header"),
    onClick: handleCollapseChange,
    role: "none"
  }, header, React.createElement(Icon, {
    icon: "arrow-down",
    className: "".concat(prefix, "-collapse-header-icon")
  })), React.createElement(Motion, {
    transition: "slide"
  }, !collapsed && React.createElement("div", {
    className: "".concat(prefix, "-collapse-content")
  }, content)));
};

ColorPickerCollapse.propTypes = {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  content: PropTypes.node,
  defaultCollapsed: PropTypes.bool,
  header: PropTypes.node,
  onCollapseChange: PropTypes.func
};
ColorPickerCollapse.defaultProps = {
  className: undefined,
  collapsed: undefined,
  defaultCollapsed: undefined,
  header: null,
  content: null,
  onCollapseChange: function onCollapseChange() {}
};
export default ColorPickerCollapse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL0NvbG9yUGlja2VyQ29sbGFwc2UudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiSWNvbiIsIk1vdGlvbiIsInByZWZpeCIsIkNvbG9yUGlja2VyQ29sbGFwc2UiLCJjbGFzc05hbWUiLCJjb2xsYXBzZWRQcm9wIiwiY29sbGFwc2VkIiwiY29udGVudCIsImRlZmF1bHRDb2xsYXBzZWQiLCJoZWFkZXIiLCJvbkNvbGxhcHNlQ2hhbmdlIiwiY29sbGFwc2VkU3RhdGUiLCJ1bmRlZmluZWQiLCJzZXRDb2xsYXBzZWQiLCJoYW5kbGVDb2xsYXBzZUNoYW5nZSIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixTQUFqQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBZjs7QUFjQSxJQUFNQyxtQkFBNkMsR0FBRyxTQUFoREEsbUJBQWdELE9BT2hDO0FBQUEsTUFOcEJDLFNBTW9CLFFBTnBCQSxTQU1vQjtBQUFBLE1BTFRDLGFBS1MsUUFMcEJDLFNBS29CO0FBQUEsTUFKcEJDLE9BSW9CLFFBSnBCQSxPQUlvQjtBQUFBLE1BSHBCQyxnQkFHb0IsUUFIcEJBLGdCQUdvQjtBQUFBLE1BRnBCQyxNQUVvQixRQUZwQkEsTUFFb0I7QUFBQSxNQURwQkMsZ0JBQ29CLFFBRHBCQSxnQkFDb0I7O0FBQUEsa0JBQ2NiLFFBQVEsQ0FBQyxZQUFNO0FBQy9DLFFBQUljLGNBQWMsR0FBRyxLQUFyQjs7QUFFQSxRQUFJTixhQUFhLEtBQUtPLFNBQXRCLEVBQWlDO0FBQy9CRCxNQUFBQSxjQUFjLEdBQUdOLGFBQWpCO0FBQ0QsS0FGRCxNQUVPLElBQUlHLGdCQUFnQixLQUFLSSxTQUF6QixFQUFvQztBQUN6Q0QsTUFBQUEsY0FBYyxHQUFHSCxnQkFBakI7QUFDRDs7QUFDRCxXQUFPRyxjQUFQO0FBQ0QsR0FUeUMsQ0FEdEI7QUFBQTtBQUFBLE1BQ2JMLFNBRGE7QUFBQSxNQUNGTyxZQURFOztBQWFwQixNQUFJUixhQUFhLEtBQUtPLFNBQWxCLElBQStCTixTQUFTLEtBQUtELGFBQWpELEVBQWdFO0FBQzlEUSxJQUFBQSxZQUFZLENBQUMsQ0FBQyxDQUFDUixhQUFILENBQVo7QUFDRDs7QUFFRCxNQUFNUyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsUUFBSVQsYUFBYSxLQUFLTyxTQUF0QixFQUFpQztBQUMvQkMsTUFBQUEsWUFBWSxDQUFDLENBQUNQLFNBQUYsQ0FBWjtBQUNEOztBQUNELFFBQUlJLGdCQUFKLEVBQXNCO0FBQ3BCQSxNQUFBQSxnQkFBZ0IsQ0FBQyxDQUFDSixTQUFGLENBQWhCO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRVAsVUFBVSxDQUFDSyxTQUFELFlBQWVGLE1BQWYsOENBQ2ZBLE1BRGUsMEJBQ2VJLFNBRGY7QUFEdkIsS0FLRTtBQUNFLElBQUEsU0FBUyxZQUFLSixNQUFMLHFCQURYO0FBRUUsSUFBQSxPQUFPLEVBQUVZLG9CQUZYO0FBR0UsSUFBQSxJQUFJLEVBQUM7QUFIUCxLQUtHTCxNQUxILEVBTUUsb0JBQUMsSUFBRDtBQUFNLElBQUEsSUFBSSxFQUFDLFlBQVg7QUFBd0IsSUFBQSxTQUFTLFlBQUtQLE1BQUw7QUFBakMsSUFORixDQUxGLEVBYUUsb0JBQUMsTUFBRDtBQUFRLElBQUEsVUFBVSxFQUFDO0FBQW5CLEtBQ0csQ0FBQ0ksU0FBRCxJQUNDO0FBQUssSUFBQSxTQUFTLFlBQUtKLE1BQUw7QUFBZCxLQUErQ0ssT0FBL0MsQ0FGSixDQWJGLENBREY7QUFxQkQsQ0F0REQ7O0FBd0RBSixtQkFBbUIsQ0FBQ1ksU0FBcEIsR0FBZ0M7QUFDOUJYLEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDa0IsTUFEUztBQUU5QlYsRUFBQUEsU0FBUyxFQUFFUixTQUFTLENBQUNtQixJQUZTO0FBRzlCVixFQUFBQSxPQUFPLEVBQUVULFNBQVMsQ0FBQ29CLElBSFc7QUFJOUJWLEVBQUFBLGdCQUFnQixFQUFFVixTQUFTLENBQUNtQixJQUpFO0FBSzlCUixFQUFBQSxNQUFNLEVBQUVYLFNBQVMsQ0FBQ29CLElBTFk7QUFNOUJSLEVBQUFBLGdCQUFnQixFQUFFWixTQUFTLENBQUNxQjtBQU5FLENBQWhDO0FBU0FoQixtQkFBbUIsQ0FBQ2lCLFlBQXBCLEdBQW1DO0FBQ2pDaEIsRUFBQUEsU0FBUyxFQUFFUSxTQURzQjtBQUVqQ04sRUFBQUEsU0FBUyxFQUFFTSxTQUZzQjtBQUdqQ0osRUFBQUEsZ0JBQWdCLEVBQUVJLFNBSGU7QUFJakNILEVBQUFBLE1BQU0sRUFBRSxJQUp5QjtBQUtqQ0YsRUFBQUEsT0FBTyxFQUFFLElBTHdCO0FBTWpDRyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFO0FBTk8sQ0FBbkM7QUFTQSxlQUFlUCxtQkFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBNb3Rpb24gZnJvbSBcIi4uL21vdGlvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNwXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGFwc2VQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjb2xsYXBzZWQ/OiBib29sZWFuXG4gIGNvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZVxuICBkZWZhdWx0Q29sbGFwc2VkPzogYm9vbGVhblxuICBoZWFkZXI6IFJlYWN0LlJlYWN0Tm9kZVxuICBvbkNvbGxhcHNlQ2hhbmdlPzogKGNvbGxhcHNlZDogYm9vbGVhbikgPT4gdm9pZFxufVxuXG4vKipcbiAqIOminOiJsumAieaLqeWZqFxuICovXG5jb25zdCBDb2xvclBpY2tlckNvbGxhcHNlOiBSZWFjdC5GQzxJQ29sbGFwc2VQcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIGNvbGxhcHNlZDogY29sbGFwc2VkUHJvcCxcbiAgY29udGVudCxcbiAgZGVmYXVsdENvbGxhcHNlZCxcbiAgaGVhZGVyLFxuICBvbkNvbGxhcHNlQ2hhbmdlLFxufTogSUNvbGxhcHNlUHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBsZXQgY29sbGFwc2VkU3RhdGUgPSBmYWxzZVxuXG4gICAgaWYgKGNvbGxhcHNlZFByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29sbGFwc2VkU3RhdGUgPSBjb2xsYXBzZWRQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0Q29sbGFwc2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbGxhcHNlZFN0YXRlID0gZGVmYXVsdENvbGxhcHNlZFxuICAgIH1cbiAgICByZXR1cm4gY29sbGFwc2VkU3RhdGVcbiAgfSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChjb2xsYXBzZWRQcm9wICE9PSB1bmRlZmluZWQgJiYgY29sbGFwc2VkICE9PSBjb2xsYXBzZWRQcm9wKSB7XG4gICAgc2V0Q29sbGFwc2VkKCEhY29sbGFwc2VkUHJvcClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbGxhcHNlQ2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChjb2xsYXBzZWRQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKVxuICAgIH1cbiAgICBpZiAob25Db2xsYXBzZUNoYW5nZSkge1xuICAgICAgb25Db2xsYXBzZUNoYW5nZSghY29sbGFwc2VkKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1jb2xsYXBzZWAsIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tY29sbGFwc2VfY29sbGFwc2VkYF06IGNvbGxhcHNlZCxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbGxhcHNlLWhlYWRlcmB9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbGxhcHNlQ2hhbmdlfVxuICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICA+XG4gICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDxJY29uIGljb249XCJhcnJvdy1kb3duXCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbGxhcHNlLWhlYWRlci1pY29uYH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vdGlvbiB0cmFuc2l0aW9uPVwic2xpZGVcIj5cbiAgICAgICAgeyFjb2xsYXBzZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbGxhcHNlLWNvbnRlbnRgfT57Y29udGVudH08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTW90aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNvbG9yUGlja2VyQ29sbGFwc2UucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbGxhcHNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICBkZWZhdWx0Q29sbGFwc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgb25Db2xsYXBzZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbkNvbG9yUGlja2VyQ29sbGFwc2UuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY29sbGFwc2VkOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRDb2xsYXBzZWQ6IHVuZGVmaW5lZCxcbiAgaGVhZGVyOiBudWxsLFxuICBjb250ZW50OiBudWxsLFxuICBvbkNvbGxhcHNlQ2hhbmdlOiAoKSA9PiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXJDb2xsYXBzZVxuIl19