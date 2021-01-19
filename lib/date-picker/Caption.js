"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style");

var _icon = _interopRequireDefault(require("../icon"));

var _core = require("./core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var prefix = "adui-date";

var Caption = function Caption(_ref) {
  var date = _ref.date,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      onDateChange = _ref.onDateChange;

  var handleYearChange = function handleYearChange(e) {
    var newYear = parseInt(e.currentTarget.value, 10);
    var newDate = new Date(date.getTime());
    newDate.setFullYear(newYear);
    onDateChange(newDate, e);
  };

  var handleMonthChange = function handleMonthChange(e) {
    var newMonth = parseInt(e.currentTarget.value, 10);
    var newDate = new Date(date.getTime());
    newDate.setMonth(newMonth);
    onDateChange(newDate, e);
  };

  var minYear = minDate.getFullYear();
  var maxYear = maxDate.getFullYear();
  var years = [maxYear];

  for (var year = maxYear - 1; year >= minYear; year -= 1) {
    years.push(year);
  }

  var displayMonth = date.getMonth();
  var displayYear = date.getFullYear();
  var startMonth = displayYear === minYear ? minDate.getMonth() : 0;
  var endMonth = displayYear === maxYear ? maxDate.getMonth() + 1 : 12;
  var months = [startMonth];

  for (var month = startMonth + 1; month < endMonth; month += 1) {
    months.push(month);
  }

  return React.createElement("div", {
    className: "".concat(prefix, "-caption")
  }, React.createElement("div", {
    className: "".concat(prefix, "-selects")
  }, React.createElement("div", {
    className: "".concat(prefix, "-selectYear")
  }, React.createElement("select", {
    name: "year",
    onChange: handleYearChange,
    value: displayYear
  }, years.map(function (year) {
    return React.createElement("option", {
      key: year,
      value: year
    }, year, "\u5E74");
  })), React.createElement(_icon["default"], {
    icon: "triangle-down"
  })), React.createElement("div", {
    className: "".concat(prefix, "-selectMonth")
  }, React.createElement("select", {
    name: "month",
    onChange: handleMonthChange,
    value: displayMonth
  }, months.map(function (month) {
    return React.createElement("option", {
      key: month,
      value: month
    }, month + 1, "\u6708");
  })), React.createElement(_icon["default"], {
    icon: "triangle-down"
  }))));
};

Caption.propTypes = {
  date: _propTypes["default"].any,
  maxDate: _propTypes["default"].any,
  minDate: _propTypes["default"].any,
  onDateChange: _propTypes["default"].func.isRequired
};
Caption.defaultProps = {
  date: new Date(),
  maxDate: (0, _core.getDefaultMaxDate)(),
  minDate: (0, _core.getDefaultMinDate)()
};
var _default = Caption;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvQ2FwdGlvbi50c3giXSwibmFtZXMiOlsicHJlZml4IiwiQ2FwdGlvbiIsImRhdGUiLCJtYXhEYXRlIiwibWluRGF0ZSIsIm9uRGF0ZUNoYW5nZSIsImhhbmRsZVllYXJDaGFuZ2UiLCJlIiwibmV3WWVhciIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwibmV3RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2V0RnVsbFllYXIiLCJoYW5kbGVNb250aENoYW5nZSIsIm5ld01vbnRoIiwic2V0TW9udGgiLCJtaW5ZZWFyIiwiZ2V0RnVsbFllYXIiLCJtYXhZZWFyIiwieWVhcnMiLCJ5ZWFyIiwicHVzaCIsImRpc3BsYXlNb250aCIsImdldE1vbnRoIiwiZGlzcGxheVllYXIiLCJzdGFydE1vbnRoIiwiZW5kTW9udGgiLCJtb250aHMiLCJtb250aCIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsV0FBZjs7QUFhQSxJQUFNQyxPQUErQyxHQUFHLFNBQWxEQSxPQUFrRCxPQUtuQztBQUFBLE1BSm5CQyxJQUltQixRQUpuQkEsSUFJbUI7QUFBQSxNQUhuQkMsT0FHbUIsUUFIbkJBLE9BR21CO0FBQUEsTUFGbkJDLE9BRW1CLFFBRm5CQSxPQUVtQjtBQUFBLE1BRG5CQyxZQUNtQixRQURuQkEsWUFDbUI7O0FBQ25CLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUEyQztBQUNsRSxRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxhQUFGLENBQWdCQyxLQUFqQixFQUF3QixFQUF4QixDQUF4QjtBQUNBLFFBQU1DLE9BQU8s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QUFYLENBTEgsQ0FERixFQVlFLG9CQUFDLGdCQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUM7QUFBWCxJQVpGLENBWEYsQ0FERixDQURGO0FBOEJELENBbEVEOztBQW9FQTlCLE9BQU8sQ0FBQ2dDLFNBQVIsR0FBb0I7QUFJbEIvQixFQUFBQSxJQUFJLEVBQUVnQyxzQkFBVUMsR0FKRTtBQVFsQmhDLEVBQUFBLE9BQU8sRUFBRStCLHNCQUFVQyxHQVJEO0FBWWxCL0IsRUFBQUEsT0FBTyxFQUFFOEIsc0JBQVVDLEdBWkQ7QUFnQmxCOUIsRUFBQUEsWUFBWSxFQUFFNkIsc0JBQVVFLElBQVYsQ0FBZUM7QUFoQlgsQ0FBcEI7QUFtQkFwQyxPQUFPLENBQUNxQyxZQUFSLEdBQXVCO0FBQ3JCcEMsRUFBQUEsSUFBSSxFQUFFLElBQUlXLElBQUosRUFEZTtBQUVyQlYsRUFBQUEsT0FBTyxFQUFFLDhCQUZZO0FBR3JCQyxFQUFBQSxPQUFPLEVBQUU7QUFIWSxDQUF2QjtlQU1lSCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgeyBnZXREZWZhdWx0TWF4RGF0ZSwgZ2V0RGVmYXVsdE1pbkRhdGUgfSBmcm9tIFwiLi9jb3JlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWRhdGVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElDYXB0aW9uUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgZGF0ZTogRGF0ZVxuICBtYXhEYXRlOiBEYXRlXG4gIG1pbkRhdGU6IERhdGVcbiAgb25EYXRlQ2hhbmdlOiAoZGF0ZTogRGF0ZSwgZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4gdm9pZFxufVxuXG4vKipcbiAqIOaXpeacn+mAieaLqSBDYXB0aW9uXG4gKi9cbmNvbnN0IENhcHRpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElDYXB0aW9uUHJvcHM+ID0gKHtcbiAgZGF0ZSxcbiAgbWF4RGF0ZSxcbiAgbWluRGF0ZSxcbiAgb25EYXRlQ2hhbmdlLFxufTogSUNhcHRpb25Qcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVZZWFyQ2hhbmdlID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBuZXdZZWFyID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCAxMClcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpXG4gICAgbmV3RGF0ZS5zZXRGdWxsWWVhcihuZXdZZWFyKVxuICAgIG9uRGF0ZUNoYW5nZShuZXdEYXRlLCBlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTW9udGhDaGFuZ2UgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG5ld01vbnRoID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCAxMClcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpXG4gICAgbmV3RGF0ZS5zZXRNb250aChuZXdNb250aClcbiAgICBvbkRhdGVDaGFuZ2UobmV3RGF0ZSwgZSlcbiAgfVxuXG4gIGNvbnN0IG1pblllYXIgPSBtaW5EYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbWF4WWVhciA9IG1heERhdGUuZ2V0RnVsbFllYXIoKVxuICBjb25zdCB5ZWFycyA9IFttYXhZZWFyXVxuICBmb3IgKGxldCB5ZWFyID0gbWF4WWVhciAtIDE7IHllYXIgPj0gbWluWWVhcjsgeWVhciAtPSAxKSB7XG4gICAgeWVhcnMucHVzaCh5ZWFyKVxuICB9XG5cbiAgY29uc3QgZGlzcGxheU1vbnRoID0gZGF0ZS5nZXRNb250aCgpXG4gIGNvbnN0IGRpc3BsYXlZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IHN0YXJ0TW9udGggPSBkaXNwbGF5WWVhciA9PT0gbWluWWVhciA/IG1pbkRhdGUuZ2V0TW9udGgoKSA6IDBcbiAgY29uc3QgZW5kTW9udGggPSBkaXNwbGF5WWVhciA9PT0gbWF4WWVhciA/IG1heERhdGUuZ2V0TW9udGgoKSArIDEgOiAxMlxuICBjb25zdCBtb250aHMgPSBbc3RhcnRNb250aF1cbiAgZm9yIChsZXQgbW9udGggPSBzdGFydE1vbnRoICsgMTsgbW9udGggPCBlbmRNb250aDsgbW9udGggKz0gMSkge1xuICAgIG1vbnRocy5wdXNoKG1vbnRoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jYXB0aW9uYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWxlY3RzYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdFllYXJgfT5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ5ZWFyXCIgb25DaGFuZ2U9e2hhbmRsZVllYXJDaGFuZ2V9IHZhbHVlPXtkaXNwbGF5WWVhcn0+XG4gICAgICAgICAgICB7eWVhcnMubWFwKCh5ZWFyKSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt5ZWFyfSB2YWx1ZT17eWVhcn0+XG4gICAgICAgICAgICAgICAge3llYXJ95bm0XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPEljb24gaWNvbj1cInRyaWFuZ2xlLWRvd25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0TW9udGhgfT5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwibW9udGhcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1vbnRoQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2Rpc3BsYXlNb250aH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bW9udGhzLm1hcCgobW9udGgpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21vbnRofSB2YWx1ZT17bW9udGh9PlxuICAgICAgICAgICAgICAgIHttb250aCArIDF95pyIXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPEljb24gaWNvbj1cInRyaWFuZ2xlLWRvd25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNhcHRpb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5pel5pyfXG4gICAqL1xuICBkYXRlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogaGFuZGxlclxuICAgKi9cbiAgb25EYXRlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5DYXB0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0ZTogbmV3IERhdGUoKSxcbiAgbWF4RGF0ZTogZ2V0RGVmYXVsdE1heERhdGUoKSxcbiAgbWluRGF0ZTogZ2V0RGVmYXVsdE1pbkRhdGUoKSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvblxuIl19