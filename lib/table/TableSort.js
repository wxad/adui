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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGVTb3J0LnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUYWJsZVNvcnQiLCJvblNvcnQiLCJzb3J0T3JkZXJQcm9wIiwic29ydE9yZGVyIiwidGl0bGUiLCJzZXRTb3J0T3JkZXIiLCJoYW5kbGVDaGFuZ2UiLCJuZXdPcmRlciIsImhhbmRsZUtleVByZXNzIiwiZSIsImtleSIsInRvVXBwZXJDYXNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9uZU9mIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsWUFBZjs7QUFXQSxJQUFNQyxTQUFtRCxHQUFHLFNBQXREQSxTQUFzRCxPQUlyQztBQUFBLE1BSHJCQyxNQUdxQixRQUhyQkEsTUFHcUI7QUFBQSxNQUZWQyxhQUVVLFFBRnJCQyxTQUVxQjtBQUFBLE1BRHJCQyxLQUNxQixRQURyQkEsS0FDcUI7O0FBQUEsa0JBQ2EscUJBQVNGLGFBQVQsQ0FEYjtBQUFBO0FBQUEsTUFDZEMsU0FEYztBQUFBLE1BQ0hFLFlBREc7O0FBSXJCLE1BQUlILGFBQWEsS0FBSyxJQUFsQixJQUEwQkMsU0FBUyxLQUFLRCxhQUE1QyxFQUEyRDtBQUN6REcsSUFBQUEsWUFBWSxDQUFDSCxhQUFELENBQVo7QUFDRDs7QUFFRCxNQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUlDLFFBQUo7O0FBQ0EsUUFBSUosU0FBSixFQUFlO0FBQ2JJLE1BQUFBLFFBQVEsR0FBR0osU0FBUyxLQUFLLEtBQWQsR0FBc0IsTUFBdEIsR0FBK0IsRUFBMUM7QUFDRCxLQUZELE1BRU87QUFDTEksTUFBQUEsUUFBUSxHQUFHLEtBQVg7QUFDRDs7QUFDRCxRQUFJTCxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUJHLE1BQUFBLFlBQVksQ0FBQ0UsUUFBRCxDQUFaO0FBQ0Q7O0FBQ0QsUUFBSU4sTUFBSixFQUFZO0FBQ1ZBLE1BQUFBLE1BQU0sQ0FBQ00sUUFBRCxDQUFOO0FBQ0Q7QUFDRixHQWJEOztBQWVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsQ0FBRCxFQUE0QjtBQUNqRCxRQUFJQSxDQUFDLENBQUNDLEdBQUYsQ0FBTUMsV0FBTixPQUF3QixPQUE1QixFQUFxQztBQUNuQ0wsTUFBQUEsWUFBWTtBQUNiO0FBQ0YsR0FKRDs7QUFLQSxTQUNFO0FBQ0UsaUJBQVdILFNBRGI7QUFFRSxJQUFBLFNBQVMsRUFBRSxzQ0FBY0osTUFBZCxzQkFBZ0NBLE1BQWhDLG1CQUErQ0ksU0FBL0MsRUFGYjtBQUdFLElBQUEsT0FBTyxFQUFFRyxZQUhYO0FBSUUsSUFBQSxVQUFVLEVBQUVFLGNBSmQ7QUFLRSxJQUFBLElBQUksRUFBQyxjQUxQO0FBTUUsSUFBQSxRQUFRLEVBQUU7QUFOWixLQVFHSixLQVJILEVBU0UsNkNBQ0U7QUFBSyxJQUFBLFNBQVMsWUFBS0wsTUFBTCxTQUFkO0FBQWlDLElBQUEsS0FBSyxFQUFDLElBQXZDO0FBQTRDLElBQUEsTUFBTSxFQUFDO0FBQW5ELEtBQ0U7QUFBTSxJQUFBLENBQUMsRUFBQztBQUFSLElBREYsQ0FERixFQUlFO0FBQUssSUFBQSxTQUFTLFlBQUtBLE1BQUwsVUFBZDtBQUFrQyxJQUFBLEtBQUssRUFBQyxJQUF4QztBQUE2QyxJQUFBLE1BQU0sRUFBQztBQUFwRCxLQUNFO0FBQU0sSUFBQSxDQUFDLEVBQUM7QUFBUixJQURGLENBSkYsQ0FURixDQURGO0FBb0JELENBcEREOztBQXNEQUMsU0FBUyxDQUFDWSxTQUFWLEdBQXNCO0FBSXBCWCxFQUFBQSxNQUFNLEVBQUVZLHNCQUFVQyxJQUpFO0FBU3BCWCxFQUFBQSxTQUFTLEVBQUVVLHNCQUFVRSxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVyxLQUFYLEVBQWtCLE1BQWxCLENBQWhCLENBVFM7QUFhcEJYLEVBQUFBLEtBQUssRUFBRVMsc0JBQVVHO0FBYkcsQ0FBdEI7QUFnQkFoQixTQUFTLENBQUNpQixZQUFWLEdBQXlCO0FBQ3ZCaEIsRUFBQUEsTUFBTSxFQUFFLElBRGU7QUFFdkJFLEVBQUFBLFNBQVMsRUFBRSxJQUZZO0FBR3ZCQyxFQUFBQSxLQUFLLEVBQUU7QUFIZ0IsQ0FBekI7ZUFNZUosUyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFibGVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVNvcnRQcm9wcyB7XG4gIG9uU29ydD86ICgob3JkZXI6IFwiYXNjXCIgfCBcImRlc2NcIiB8IFwiXCIpID0+IHZvaWQpIHwgbnVsbFxuICBzb3J0T3JkZXI/OiBudWxsIHwgXCJcIiB8IFwiYXNjXCIgfCBcImRlc2NcIlxuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOihqOagvOaOkuW6j1xuICovXG5jb25zdCBUYWJsZVNvcnQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElUYWJsZVNvcnRQcm9wcz4gPSAoe1xuICBvblNvcnQsXG4gIHNvcnRPcmRlcjogc29ydE9yZGVyUHJvcCxcbiAgdGl0bGUsXG59OiBJVGFibGVTb3J0UHJvcHMpID0+IHtcbiAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlKHNvcnRPcmRlclByb3ApXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoc29ydE9yZGVyUHJvcCAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHNvcnRPcmRlclByb3ApIHtcbiAgICBzZXRTb3J0T3JkZXIoc29ydE9yZGVyUHJvcClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICBsZXQgbmV3T3JkZXI6IFwiXCIgfCBcImFzY1wiIHwgXCJkZXNjXCJcbiAgICBpZiAoc29ydE9yZGVyKSB7XG4gICAgICBuZXdPcmRlciA9IHNvcnRPcmRlciA9PT0gXCJhc2NcIiA/IFwiZGVzY1wiIDogXCJcIlxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdPcmRlciA9IFwiYXNjXCJcbiAgICB9XG4gICAgaWYgKHNvcnRPcmRlclByb3AgPT09IG51bGwpIHtcbiAgICAgIHNldFNvcnRPcmRlcihuZXdPcmRlcilcbiAgICB9XG4gICAgaWYgKG9uU29ydCkge1xuICAgICAgb25Tb3J0KG5ld09yZGVyKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkudG9VcHBlckNhc2UoKSA9PT0gXCJFTlRFUlwiKSB7XG4gICAgICBoYW5kbGVDaGFuZ2UoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc29ydD17c29ydE9yZGVyfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tc29ydGAsIGAke3ByZWZpeH0tc29ydF8ke3NvcnRPcmRlcn1gKX1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZX1cbiAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxuICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICB0YWJJbmRleD17MH1cbiAgICA+XG4gICAgICB7dGl0bGV9XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17YCR7cHJlZml4fS1hc2NgfSB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEyLjMxNSA1Ljc2NGMuMzcyLjQwNy4yMTguNzM2LS4zMi43MzZINC4wMWMtLjU0OCAwLS42OTYtLjMyNS0uMzItLjczNmwzLjY0LTMuOTgzYS44OTEuODkxIDAgMCAxIDEuMzQ1IDBsMy42NDEgMy45ODN6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWRlc2NgfSB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEyLjMxNSAxMC4yMzZjLjM3Mi0uNDA3LjIxOC0uNzM2LS4zMi0uNzM2SDQuMDFjLS41NDggMC0uNjk2LjMyNS0uMzIuNzM2bDMuNjQgMy45ODNjLjM3Mi40MDYuOTcuNDEgMS4zNDUgMGwzLjY0MS0zLjk4M3pcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblRhYmxlU29ydC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmjpLluo/ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWPr+S7peS7juWklumDqOaOp+WItuaOkuW6j+aWueW8j1xuICAgKiDmsqHmnIkgc29ydE9yZGVy77yM5YiZ55SoIFwiXCIg56m65a2X56ym5Liy77yM5LiN6KaB55SoIG51bGzvvIzlm6DkuLogbnVsbCDkvJrooqvnu4Tku7bop4bkuLrlhoXpg6jpqbHliqhcbiAgICovXG4gIHNvcnRPcmRlcjogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcIlwiLCBcImFzY1wiLCBcImRlc2NcIl0pLFxuICAvKipcbiAgICogdGl0bGVcbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuVGFibGVTb3J0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25Tb3J0OiBudWxsLFxuICBzb3J0T3JkZXI6IG51bGwsXG4gIHRpdGxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVNvcnRcbiJdfQ==