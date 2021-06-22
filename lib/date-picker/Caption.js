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

  if (!months.includes(displayMonth)) {
    months.unshift(displayMonth);
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
    value: displayMonth,
    "data-value": displayMonth
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvQ2FwdGlvbi50c3giXSwibmFtZXMiOlsicHJlZml4IiwiQ2FwdGlvbiIsImRhdGUiLCJtYXhEYXRlIiwibWluRGF0ZSIsIm9uRGF0ZUNoYW5nZSIsImhhbmRsZVllYXJDaGFuZ2UiLCJlIiwibmV3WWVhciIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwibmV3RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2V0RnVsbFllYXIiLCJoYW5kbGVNb250aENoYW5nZSIsIm5ld01vbnRoIiwic2V0TW9udGgiLCJtaW5ZZWFyIiwiZ2V0RnVsbFllYXIiLCJtYXhZZWFyIiwieWVhcnMiLCJ5ZWFyIiwicHVzaCIsImRpc3BsYXlNb250aCIsImdldE1vbnRoIiwiZGlzcGxheVllYXIiLCJzdGFydE1vbnRoIiwiZW5kTW9udGgiLCJtb250aHMiLCJtb250aCIsImluY2x1ZGVzIiwidW5zaGlmdCIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsV0FBZjs7QUFhQSxJQUFNQyxPQUFnQyxHQUFHLFNBQW5DQSxPQUFtQyxPQUtwQjtBQUFBLE1BSm5CQyxJQUltQixRQUpuQkEsSUFJbUI7QUFBQSxNQUhuQkMsT0FHbUIsUUFIbkJBLE9BR21CO0FBQUEsTUFGbkJDLE9BRW1CLFFBRm5CQSxPQUVtQjtBQUFBLE1BRG5CQyxZQUNtQixRQURuQkEsWUFDbUI7O0FBQ25CLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUEyQztBQUNsRSxRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxhQUFGLENBQWdCQyxLQUFqQixFQUF3QixFQUF4QixD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O0FBSmQsS0FNR0ssTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBQ0gsS0FBRDtBQUFBLFdBQ1Y7QUFBUSxNQUFBLEdBQUcsRUFBRUEsS0FBYjtBQUFvQixNQUFBLEtBQUssRUFBRUE7QUFBM0IsT0FDR0EsS0FBSyxHQUFHLENBRFgsV0FEVTtBQUFBLEdBQVgsQ0FOSCxDQURGLEVBYUUsb0JBQUMsZ0JBQUQ7QUFBTSxJQUFBLElBQUksRUFBQztBQUFYLElBYkYsQ0FYRixDQURGLENBREY7QUErQkQsQ0F4RUQ7O0FBMEVBOUIsT0FBTyxDQUFDa0MsU0FBUixHQUFvQjtBQUlsQmpDLEVBQUFBLElBQUksRUFBRWtDLHNCQUFVQyxHQUpFO0FBUWxCbEMsRUFBQUEsT0FBTyxFQUFFaUMsc0JBQVVDLEdBUkQ7QUFZbEJqQyxFQUFBQSxPQUFPLEVBQUVnQyxzQkFBVUMsR0FaRDtBQWdCbEJoQyxFQUFBQSxZQUFZLEVBQUUrQixzQkFBVUUsSUFBVixDQUFlQztBQWhCWCxDQUFwQjtBQW1CQXRDLE9BQU8sQ0FBQ3VDLFlBQVIsR0FBdUI7QUFDckJ0QyxFQUFBQSxJQUFJLEVBQUUsSUFBSVcsSUFBSixFQURlO0FBRXJCVixFQUFBQSxPQUFPLEVBQUUsOEJBRlk7QUFHckJDLEVBQUFBLE9BQU8sRUFBRTtBQUhZLENBQXZCO2VBTWVILE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCB7IGdldERlZmF1bHRNYXhEYXRlLCBnZXREZWZhdWx0TWluRGF0ZSB9IGZyb20gXCIuL2NvcmVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhcHRpb25Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBkYXRlOiBEYXRlXG4gIG1heERhdGU6IERhdGVcbiAgbWluRGF0ZTogRGF0ZVxuICBvbkRhdGVDaGFuZ2U6IChkYXRlOiBEYXRlLCBlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB2b2lkXG59XG5cbi8qKlxuICog5pel5pyf6YCJ5oupIENhcHRpb25cbiAqL1xuY29uc3QgQ2FwdGlvbjogUmVhY3QuRkM8SUNhcHRpb25Qcm9wcz4gPSAoe1xuICBkYXRlLFxuICBtYXhEYXRlLFxuICBtaW5EYXRlLFxuICBvbkRhdGVDaGFuZ2UsXG59OiBJQ2FwdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZVllYXJDaGFuZ2UgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IG5ld1llYXIgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQudmFsdWUsIDEwKVxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSlcbiAgICBuZXdEYXRlLnNldEZ1bGxZZWFyKG5ld1llYXIpXG4gICAgb25EYXRlQ2hhbmdlKG5ld0RhdGUsIGUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVNb250aENoYW5nZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgbmV3TW9udGggPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQudmFsdWUsIDEwKVxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSlcbiAgICBuZXdEYXRlLnNldE1vbnRoKG5ld01vbnRoKVxuICAgIG9uRGF0ZUNoYW5nZShuZXdEYXRlLCBlKVxuICB9XG5cbiAgY29uc3QgbWluWWVhciA9IG1pbkRhdGUuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtYXhZZWFyID0gbWF4RGF0ZS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IHllYXJzID0gW21heFllYXJdXG4gIGZvciAobGV0IHllYXIgPSBtYXhZZWFyIC0gMTsgeWVhciA+PSBtaW5ZZWFyOyB5ZWFyIC09IDEpIHtcbiAgICB5ZWFycy5wdXNoKHllYXIpXG4gIH1cblxuICBjb25zdCBkaXNwbGF5TW9udGggPSBkYXRlLmdldE1vbnRoKClcbiAgY29uc3QgZGlzcGxheVllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcblxuICBjb25zdCBzdGFydE1vbnRoID0gZGlzcGxheVllYXIgPT09IG1pblllYXIgPyBtaW5EYXRlLmdldE1vbnRoKCkgOiAwXG4gIGNvbnN0IGVuZE1vbnRoID0gZGlzcGxheVllYXIgPT09IG1heFllYXIgPyBtYXhEYXRlLmdldE1vbnRoKCkgKyAxIDogMTJcbiAgY29uc3QgbW9udGhzID0gW3N0YXJ0TW9udGhdXG4gIGZvciAobGV0IG1vbnRoID0gc3RhcnRNb250aCArIDE7IG1vbnRoIDwgZW5kTW9udGg7IG1vbnRoICs9IDEpIHtcbiAgICBtb250aHMucHVzaChtb250aClcbiAgfVxuXG4gIGlmICghbW9udGhzLmluY2x1ZGVzKGRpc3BsYXlNb250aCkpIHtcbiAgICBtb250aHMudW5zaGlmdChkaXNwbGF5TW9udGgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNhcHRpb25gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdHNgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0WWVhcmB9PlxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInllYXJcIiBvbkNoYW5nZT17aGFuZGxlWWVhckNoYW5nZX0gdmFsdWU9e2Rpc3BsYXlZZWFyfT5cbiAgICAgICAgICAgIHt5ZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfT5cbiAgICAgICAgICAgICAgICB7eWVhcn3lubRcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8SWNvbiBpY29uPVwidHJpYW5nbGUtZG93blwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWxlY3RNb250aGB9PlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJtb250aFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTW9udGhDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17ZGlzcGxheU1vbnRofVxuICAgICAgICAgICAgZGF0YS12YWx1ZT17ZGlzcGxheU1vbnRofVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttb250aHMubWFwKChtb250aCkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bW9udGh9IHZhbHVlPXttb250aH0+XG4gICAgICAgICAgICAgICAge21vbnRoICsgMX3mnIhcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8SWNvbiBpY29uPVwidHJpYW5nbGUtZG93blwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuQ2FwdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDml6XmnJ9cbiAgICovXG4gIGRhdGU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmnIDlpKfpmZDliLbml6XmnJ9cbiAgICovXG4gIG1heERhdGU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmnIDlsI/pmZDliLbml6XmnJ9cbiAgICovXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBoYW5kbGVyXG4gICAqL1xuICBvbkRhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbkNhcHRpb24uZGVmYXVsdFByb3BzID0ge1xuICBkYXRlOiBuZXcgRGF0ZSgpLFxuICBtYXhEYXRlOiBnZXREZWZhdWx0TWF4RGF0ZSgpLFxuICBtaW5EYXRlOiBnZXREZWZhdWx0TWluRGF0ZSgpLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0aW9uXG4iXX0=