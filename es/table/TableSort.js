function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style";
var prefix = "adui-table";

var TableSort = function TableSort(_ref) {
  var onSort = _ref.onSort,
      sortOrderProp = _ref.sortOrder,
      title = _ref.title;

  var _useState = useState(sortOrderProp),
      _useState2 = _slicedToArray(_useState, 2),
      sortOrder = _useState2[0],
      setSortOrder = _useState2[1];

  if (sortOrderProp !== null && sortOrder !== sortOrderProp) {
    setSortOrder(sortOrderProp);
  }

  var handleChange = function handleChange() {
    var newOrder;

    if (sortOrder) {
      newOrder = sortOrder === "desc" ? "asc" : "";
    } else {
      newOrder = "desc";
    }

    if (sortOrderProp === null) {
      setSortOrder(newOrder);
    }

    if (onSort) {
      onSort(newOrder);
    }
  };

  var handleKeyPress = function handleKeyPress(e) {
    if (e.key.toUpperCase() === "ENTER") {
      handleChange();
    }
  };

  return React.createElement("div", {
    "data-sort": sortOrder,
    className: classNames("".concat(prefix, "-sort"), "".concat(prefix, "-sort_").concat(sortOrder)),
    onClick: handleChange,
    onKeyPress: handleKeyPress,
    role: "columnheader",
    tabIndex: 0
  }, title, React.createElement("div", null, React.createElement("svg", {
    className: "".concat(prefix, "-asc"),
    width: "16",
    height: "16"
  }, React.createElement("path", {
    d: "M12.315 5.764c.372.407.218.736-.32.736H4.01c-.548 0-.696-.325-.32-.736l3.64-3.983a.891.891 0 0 1 1.345 0l3.641 3.983z"
  })), React.createElement("svg", {
    className: "".concat(prefix, "-desc"),
    width: "16",
    height: "16"
  }, React.createElement("path", {
    d: "M12.315 10.236c.372-.407.218-.736-.32-.736H4.01c-.548 0-.696.325-.32.736l3.64 3.983c.372.406.97.41 1.345 0l3.641-3.983z"
  }))));
};

TableSort.propTypes = {
  onSort: PropTypes.func,
  sortOrder: PropTypes.oneOf([null, "", "asc", "desc"]),
  title: PropTypes.node
};
TableSort.defaultProps = {
  onSort: null,
  sortOrder: null,
  title: null
};
export default TableSort;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGVTb3J0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInByZWZpeCIsIlRhYmxlU29ydCIsIm9uU29ydCIsInNvcnRPcmRlclByb3AiLCJzb3J0T3JkZXIiLCJ0aXRsZSIsInNldFNvcnRPcmRlciIsImhhbmRsZUNoYW5nZSIsIm5ld09yZGVyIiwiaGFuZGxlS2V5UHJlc3MiLCJlIiwia2V5IiwidG9VcHBlckNhc2UiLCJwcm9wVHlwZXMiLCJmdW5jIiwib25lT2YiLCJub2RlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLFlBQWY7O0FBV0EsSUFBTUMsU0FBb0MsR0FBRyxTQUF2Q0EsU0FBdUMsT0FJdEI7QUFBQSxNQUhyQkMsTUFHcUIsUUFIckJBLE1BR3FCO0FBQUEsTUFGVkMsYUFFVSxRQUZyQkMsU0FFcUI7QUFBQSxNQURyQkMsS0FDcUIsUUFEckJBLEtBQ3FCOztBQUFBLGtCQUNhUixRQUFRLENBQUNNLGFBQUQsQ0FEckI7QUFBQTtBQUFBLE1BQ2RDLFNBRGM7QUFBQSxNQUNIRSxZQURHOztBQUlyQixNQUFJSCxhQUFhLEtBQUssSUFBbEIsSUFBMEJDLFNBQVMsS0FBS0QsYUFBNUMsRUFBMkQ7QUFDekRHLElBQUFBLFlBQVksQ0FBQ0gsYUFBRCxDQUFaO0FBQ0Q7O0FBRUQsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJQyxRQUFKOztBQUNBLFFBQUlKLFNBQUosRUFBZTtBQUNiSSxNQUFBQSxRQUFRLEdBQUdKLFNBQVMsS0FBSyxNQUFkLEdBQXVCLEtBQXZCLEdBQStCLEVBQTFDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xJLE1BQUFBLFFBQVEsR0FBRyxNQUFYO0FBQ0Q7O0FBQ0QsUUFBSUwsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCRyxNQUFBQSxZQUFZLENBQUNFLFFBQUQsQ0FBWjtBQUNEOztBQUNELFFBQUlOLE1BQUosRUFBWTtBQUNWQSxNQUFBQSxNQUFNLENBQUNNLFFBQUQsQ0FBTjtBQUNEO0FBQ0YsR0FiRDs7QUFlQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBNEI7QUFDakQsUUFBSUEsQ0FBQyxDQUFDQyxHQUFGLENBQU1DLFdBQU4sT0FBd0IsT0FBNUIsRUFBcUM7QUFDbkNMLE1BQUFBLFlBQVk7QUFDYjtBQUNGLEdBSkQ7O0FBS0EsU0FDRTtBQUNFLGlCQUFXSCxTQURiO0FBRUUsSUFBQSxTQUFTLEVBQUVMLFVBQVUsV0FBSUMsTUFBSixzQkFBc0JBLE1BQXRCLG1CQUFxQ0ksU0FBckMsRUFGdkI7QUFHRSxJQUFBLE9BQU8sRUFBRUcsWUFIWDtBQUlFLElBQUEsVUFBVSxFQUFFRSxjQUpkO0FBS0UsSUFBQSxJQUFJLEVBQUMsY0FMUDtBQU1FLElBQUEsUUFBUSxFQUFFO0FBTlosS0FRR0osS0FSSCxFQVNFLGlDQUNFO0FBQUssSUFBQSxTQUFTLFlBQUtMLE1BQUwsU0FBZDtBQUFpQyxJQUFBLEtBQUssRUFBQyxJQUF2QztBQUE0QyxJQUFBLE1BQU0sRUFBQztBQUFuRCxLQUNFO0FBQU0sSUFBQSxDQUFDLEVBQUM7QUFBUixJQURGLENBREYsRUFJRTtBQUFLLElBQUEsU0FBUyxZQUFLQSxNQUFMLFVBQWQ7QUFBa0MsSUFBQSxLQUFLLEVBQUMsSUFBeEM7QUFBNkMsSUFBQSxNQUFNLEVBQUM7QUFBcEQsS0FDRTtBQUFNLElBQUEsQ0FBQyxFQUFDO0FBQVIsSUFERixDQUpGLENBVEYsQ0FERjtBQW9CRCxDQXBERDs7QUFzREFDLFNBQVMsQ0FBQ1ksU0FBVixHQUFzQjtBQUlwQlgsRUFBQUEsTUFBTSxFQUFFSixTQUFTLENBQUNnQixJQUpFO0FBU3BCVixFQUFBQSxTQUFTLEVBQUVOLFNBQVMsQ0FBQ2lCLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sRUFBUCxFQUFXLEtBQVgsRUFBa0IsTUFBbEIsQ0FBaEIsQ0FUUztBQWFwQlYsRUFBQUEsS0FBSyxFQUFFUCxTQUFTLENBQUNrQjtBQWJHLENBQXRCO0FBZ0JBZixTQUFTLENBQUNnQixZQUFWLEdBQXlCO0FBQ3ZCZixFQUFBQSxNQUFNLEVBQUUsSUFEZTtBQUV2QkUsRUFBQUEsU0FBUyxFQUFFLElBRlk7QUFHdkJDLEVBQUFBLEtBQUssRUFBRTtBQUhnQixDQUF6QjtBQU1BLGVBQWVKLFNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRhYmxlXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTb3J0UHJvcHMge1xuICBvblNvcnQ/OiAoKG9yZGVyOiBcImFzY1wiIHwgXCJkZXNjXCIgfCBcIlwiKSA9PiB2b2lkKSB8IG51bGxcbiAgc29ydE9yZGVyPzogbnVsbCB8IFwiXCIgfCBcImFzY1wiIHwgXCJkZXNjXCJcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDooajmoLzmjpLluo9cbiAqL1xuY29uc3QgVGFibGVTb3J0OiBSZWFjdC5GQzxJVGFibGVTb3J0UHJvcHM+ID0gKHtcbiAgb25Tb3J0LFxuICBzb3J0T3JkZXI6IHNvcnRPcmRlclByb3AsXG4gIHRpdGxlLFxufTogSVRhYmxlU29ydFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZShzb3J0T3JkZXJQcm9wKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKHNvcnRPcmRlclByb3AgIT09IG51bGwgJiYgc29ydE9yZGVyICE9PSBzb3J0T3JkZXJQcm9wKSB7XG4gICAgc2V0U29ydE9yZGVyKHNvcnRPcmRlclByb3ApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IG5ld09yZGVyOiBcIlwiIHwgXCJhc2NcIiB8IFwiZGVzY1wiXG4gICAgaWYgKHNvcnRPcmRlcikge1xuICAgICAgbmV3T3JkZXIgPSBzb3J0T3JkZXIgPT09IFwiZGVzY1wiID8gXCJhc2NcIiA6IFwiXCJcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3T3JkZXIgPSBcImRlc2NcIlxuICAgIH1cbiAgICBpZiAoc29ydE9yZGVyUHJvcCA9PT0gbnVsbCkge1xuICAgICAgc2V0U29ydE9yZGVyKG5ld09yZGVyKVxuICAgIH1cbiAgICBpZiAob25Tb3J0KSB7XG4gICAgICBvblNvcnQobmV3T3JkZXIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleS50b1VwcGVyQ2FzZSgpID09PSBcIkVOVEVSXCIpIHtcbiAgICAgIGhhbmRsZUNoYW5nZSgpXG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zb3J0PXtzb3J0T3JkZXJ9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1zb3J0YCwgYCR7cHJlZml4fS1zb3J0XyR7c29ydE9yZGVyfWApfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2hhbmdlfVxuICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XG4gICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcbiAgICAgIHRhYkluZGV4PXswfVxuICAgID5cbiAgICAgIHt0aXRsZX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWFzY2B9IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuMzE1IDUuNzY0Yy4zNzIuNDA3LjIxOC43MzYtLjMyLjczNkg0LjAxYy0uNTQ4IDAtLjY5Ni0uMzI1LS4zMi0uNzM2bDMuNjQtMy45ODNhLjg5MS44OTEgMCAwIDEgMS4zNDUgMGwzLjY0MSAzLjk4M3pcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZGVzY2B9IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuMzE1IDEwLjIzNmMuMzcyLS40MDcuMjE4LS43MzYtLjMyLS43MzZINC4wMWMtLjU0OCAwLS42OTYuMzI1LS4zMi43MzZsMy42NCAzLjk4M2MuMzcyLjQwNi45Ny40MSAxLjM0NSAwbDMuNjQxLTMuOTgzelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuVGFibGVTb3J0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaOkuW6j+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y+v5Lul5LuO5aSW6YOo5o6n5Yi25o6S5bqP5pa55byPXG4gICAqIOayoeaciSBzb3J0T3JkZXLvvIzliJnnlKggXCJcIiDnqbrlrZfnrKbkuLLvvIzkuI3opoHnlKggbnVsbO+8jOWboOS4uiBudWxsIOS8muiiq+e7hOS7tuinhuS4uuWGhemDqOmpseWKqFxuICAgKi9cbiAgc29ydE9yZGVyOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwiXCIsIFwiYXNjXCIsIFwiZGVzY1wiXSksXG4gIC8qKlxuICAgKiB0aXRsZVxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5UYWJsZVNvcnQuZGVmYXVsdFByb3BzID0ge1xuICBvblNvcnQ6IG51bGwsXG4gIHNvcnRPcmRlcjogbnVsbCxcbiAgdGl0bGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlU29ydFxuIl19