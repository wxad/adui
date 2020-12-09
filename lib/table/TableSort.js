"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var prefix = "adui-table";

var TableSort = function TableSort(_ref) {
  var onSort = _ref.onSort,
      sortOrderProp = _ref.sortOrder,
      title = _ref.title;

  var _useState = (0, _react.useState)(sortOrderProp),
      _useState2 = _slicedToArray(_useState, 2),
      sortOrder = _useState2[0],
      setSortOrder = _useState2[1];

  if (sortOrderProp !== null && sortOrder !== sortOrderProp) {
    setSortOrder(sortOrderProp);
  }

  var handleChange = function handleChange() {
    var newOrder;

    if (sortOrder) {
      newOrder = sortOrder === "asc" ? "desc" : "";
    } else {
      newOrder = "asc";
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

  return _react["default"].createElement("div", {
    "data-sort": sortOrder,
    className: (0, _classnames["default"])("".concat(prefix, "-sort"), "".concat(prefix, "-sort_").concat(sortOrder)),
    onClick: handleChange,
    onKeyPress: handleKeyPress,
    role: "columnheader",
    tabIndex: 0
  }, title, _react["default"].createElement("div", null, _react["default"].createElement("svg", {
    className: "".concat(prefix, "-asc"),
    width: "16",
    height: "16"
  }, _react["default"].createElement("path", {
    d: "M12.315 5.764c.372.407.218.736-.32.736H4.01c-.548 0-.696-.325-.32-.736l3.64-3.983a.891.891 0 0 1 1.345 0l3.641 3.983z"
  })), _react["default"].createElement("svg", {
    className: "".concat(prefix, "-desc"),
    width: "16",
    height: "16"
  }, _react["default"].createElement("path", {
    d: "M12.315 10.236c.372-.407.218-.736-.32-.736H4.01c-.548 0-.696.325-.32.736l3.64 3.983c.372.406.97.41 1.345 0l3.641-3.983z"
  }))));
};

TableSort.propTypes = {
  onSort: _propTypes["default"].func,
  sortOrder: _propTypes["default"].oneOf([null, "", "asc", "desc"]),
  title: _propTypes["default"].node
};
TableSort.defaultProps = {
  onSort: null,
  sortOrder: null,
  title: null
};
var _default = TableSort;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGVTb3J0LnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUYWJsZVNvcnQiLCJvblNvcnQiLCJzb3J0T3JkZXJQcm9wIiwic29ydE9yZGVyIiwidGl0bGUiLCJzZXRTb3J0T3JkZXIiLCJoYW5kbGVDaGFuZ2UiLCJuZXdPcmRlciIsImhhbmRsZUtleVByZXNzIiwiZSIsImtleSIsInRvVXBwZXJDYXNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9uZU9mIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFlBQWY7O0FBV0EsSUFBTUMsU0FBbUQsR0FBRyxTQUF0REEsU0FBc0QsT0FJckM7QUFBQSxNQUhyQkMsTUFHcUIsUUFIckJBLE1BR3FCO0FBQUEsTUFGVkMsYUFFVSxRQUZyQkMsU0FFcUI7QUFBQSxNQURyQkMsS0FDcUIsUUFEckJBLEtBQ3FCOztBQUFBLGtCQUNhLHFCQUFTRixhQUFULENBRGI7QUFBQTtBQUFBLE1BQ2RDLFNBRGM7QUFBQSxNQUNIRSxZQURHOztBQUlyQixNQUFJSCxhQUFhLEtBQUssSUFBbEIsSUFBMEJDLFNBQVMsS0FBS0QsYUFBNUMsRUFBMkQ7QUFDekRHLElBQUFBLFlBQVksQ0FBQ0gsYUFBRCxDQUFaO0FBQ0Q7O0FBRUQsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJQyxRQUFKOztBQUNBLFFBQUlKLFNBQUosRUFBZTtBQUNiSSxNQUFBQSxRQUFRLEdBQUdKLFNBQVMsS0FBSyxLQUFkLEdBQXNCLE1BQXRCLEdBQStCLEVBQTFDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xJLE1BQUFBLFFBQVEsR0FBRyxLQUFYO0FBQ0Q7O0FBQ0QsUUFBSUwsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCRyxNQUFBQSxZQUFZLENBQUNFLFFBQUQsQ0FBWjtBQUNEOztBQUNELFFBQUlOLE1BQUosRUFBWTtBQUNWQSxNQUFBQSxNQUFNLENBQUNNLFFBQUQsQ0FBTjtBQUNEO0FBQ0YsR0FiRDs7QUFlQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBNEI7QUFDakQsUUFBSUEsQ0FBQyxDQUFDQyxHQUFGLENBQU1DLFdBQU4sT0FBd0IsT0FBNUIsRUFBcUM7QUFDbkNMLE1BQUFBLFlBQVk7QUFDYjtBQUNGLEdBSkQ7O0FBS0EsU0FDRTtBQUNFLGlCQUFXSCxTQURiO0FBRUUsSUFBQSxTQUFTLEVBQUUsc0NBQWNKLE1BQWQsc0JBQWdDQSxNQUFoQyxtQkFBK0NJLFNBQS9DLEVBRmI7QUFHRSxJQUFBLE9BQU8sRUFBRUcsWUFIWDtBQUlFLElBQUEsVUFBVSxFQUFFRSxjQUpkO0FBS0UsSUFBQSxJQUFJLEVBQUMsY0FMUDtBQU1FLElBQUEsUUFBUSxFQUFFO0FBTlosS0FRR0osS0FSSCxFQVNFLDZDQUNFO0FBQUssSUFBQSxTQUFTLFlBQUtMLE1BQUwsU0FBZDtBQUFpQyxJQUFBLEtBQUssRUFBQyxJQUF2QztBQUE0QyxJQUFBLE1BQU0sRUFBQztBQUFuRCxLQUNFO0FBQU0sSUFBQSxDQUFDLEVBQUM7QUFBUixJQURGLENBREYsRUFJRTtBQUFLLElBQUEsU0FBUyxZQUFLQSxNQUFMLFVBQWQ7QUFBa0MsSUFBQSxLQUFLLEVBQUMsSUFBeEM7QUFBNkMsSUFBQSxNQUFNLEVBQUM7QUFBcEQsS0FDRTtBQUFNLElBQUEsQ0FBQyxFQUFDO0FBQVIsSUFERixDQUpGLENBVEYsQ0FERjtBQW9CRCxDQXBERDs7QUFzREFDLFNBQVMsQ0FBQ1ksU0FBVixHQUFzQjtBQUlwQlgsRUFBQUEsTUFBTSxFQUFFWSxzQkFBVUMsSUFKRTtBQVNwQlgsRUFBQUEsU0FBUyxFQUFFVSxzQkFBVUUsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxFQUFQLEVBQVcsS0FBWCxFQUFrQixNQUFsQixDQUFoQixDQVRTO0FBYXBCWCxFQUFBQSxLQUFLLEVBQUVTLHNCQUFVRztBQWJHLENBQXRCO0FBZ0JBaEIsU0FBUyxDQUFDaUIsWUFBVixHQUF5QjtBQUN2QmhCLEVBQUFBLE1BQU0sRUFBRSxJQURlO0FBRXZCRSxFQUFBQSxTQUFTLEVBQUUsSUFGWTtBQUd2QkMsRUFBQUEsS0FBSyxFQUFFO0FBSGdCLENBQXpCO2VBTWVKLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRhYmxlXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTb3J0UHJvcHMge1xuICBvblNvcnQ/OiAoKG9yZGVyOiBcImFzY1wiIHwgXCJkZXNjXCIgfCBcIlwiKSA9PiB2b2lkKSB8IG51bGxcbiAgc29ydE9yZGVyPzogbnVsbCB8IFwiXCIgfCBcImFzY1wiIHwgXCJkZXNjXCJcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDooajmoLzmjpLluo9cbiAqL1xuY29uc3QgVGFibGVTb3J0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJVGFibGVTb3J0UHJvcHM+ID0gKHtcbiAgb25Tb3J0LFxuICBzb3J0T3JkZXI6IHNvcnRPcmRlclByb3AsXG4gIHRpdGxlLFxufTogSVRhYmxlU29ydFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZShzb3J0T3JkZXJQcm9wKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKHNvcnRPcmRlclByb3AgIT09IG51bGwgJiYgc29ydE9yZGVyICE9PSBzb3J0T3JkZXJQcm9wKSB7XG4gICAgc2V0U29ydE9yZGVyKHNvcnRPcmRlclByb3ApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgbGV0IG5ld09yZGVyOiBcIlwiIHwgXCJhc2NcIiB8IFwiZGVzY1wiXG4gICAgaWYgKHNvcnRPcmRlcikge1xuICAgICAgbmV3T3JkZXIgPSBzb3J0T3JkZXIgPT09IFwiYXNjXCIgPyBcImRlc2NcIiA6IFwiXCJcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3T3JkZXIgPSBcImFzY1wiXG4gICAgfVxuICAgIGlmIChzb3J0T3JkZXJQcm9wID09PSBudWxsKSB7XG4gICAgICBzZXRTb3J0T3JkZXIobmV3T3JkZXIpXG4gICAgfVxuICAgIGlmIChvblNvcnQpIHtcbiAgICAgIG9uU29ydChuZXdPcmRlcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5LnRvVXBwZXJDYXNlKCkgPT09IFwiRU5URVJcIikge1xuICAgICAgaGFuZGxlQ2hhbmdlKClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNvcnQ9e3NvcnRPcmRlcn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXNvcnRgLCBgJHtwcmVmaXh9LXNvcnRfJHtzb3J0T3JkZXJ9YCl9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9XG4gICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgIHJvbGU9XCJjb2x1bW5oZWFkZXJcIlxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgPlxuICAgICAge3RpdGxlfVxuICAgICAgPGRpdj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYXNjYH0gd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMi4zMTUgNS43NjRjLjM3Mi40MDcuMjE4LjczNi0uMzIuNzM2SDQuMDFjLS41NDggMC0uNjk2LS4zMjUtLjMyLS43MzZsMy42NC0zLjk4M2EuODkxLjg5MSAwIDAgMSAxLjM0NSAwbDMuNjQxIDMuOTgzelwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17YCR7cHJlZml4fS1kZXNjYH0gd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMi4zMTUgMTAuMjM2Yy4zNzItLjQwNy4yMTgtLjczNi0uMzItLjczNkg0LjAxYy0uNTQ4IDAtLjY5Ni4zMjUtLjMyLjczNmwzLjY0IDMuOTgzYy4zNzIuNDA2Ljk3LjQxIDEuMzQ1IDBsMy42NDEtMy45ODN6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5UYWJsZVNvcnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5o6S5bqP5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uU29ydDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlj6/ku6Xku47lpJbpg6jmjqfliLbmjpLluo/mlrnlvI9cbiAgICog5rKh5pyJIHNvcnRPcmRlcu+8jOWImeeUqCBcIlwiIOepuuWtl+espuS4su+8jOS4jeimgeeUqCBudWxs77yM5Zug5Li6IG51bGwg5Lya6KKr57uE5Lu26KeG5Li65YaF6YOo6amx5YqoXG4gICAqL1xuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJcIiwgXCJhc2NcIiwgXCJkZXNjXCJdKSxcbiAgLyoqXG4gICAqIHRpdGxlXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG59XG5cblRhYmxlU29ydC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uU29ydDogbnVsbCxcbiAgc29ydE9yZGVyOiBudWxsLFxuICB0aXRsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVTb3J0XG4iXX0=