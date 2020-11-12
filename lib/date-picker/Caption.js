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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvQ2FwdGlvbi50c3giXSwibmFtZXMiOlsicHJlZml4IiwiQ2FwdGlvbiIsImRhdGUiLCJtYXhEYXRlIiwibWluRGF0ZSIsIm9uRGF0ZUNoYW5nZSIsImhhbmRsZVllYXJDaGFuZ2UiLCJlIiwibmV3WWVhciIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwibmV3RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2V0RnVsbFllYXIiLCJoYW5kbGVNb250aENoYW5nZSIsIm5ld01vbnRoIiwic2V0TW9udGgiLCJtaW5ZZWFyIiwiZ2V0RnVsbFllYXIiLCJtYXhZZWFyIiwieWVhcnMiLCJ5ZWFyIiwicHVzaCIsImRpc3BsYXlNb250aCIsImdldE1vbnRoIiwiZGlzcGxheVllYXIiLCJzdGFydE1vbnRoIiwiZW5kTW9udGgiLCJtb250aHMiLCJtb250aCIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsV0FBZjs7QUFhQSxJQUFNQyxPQUErQyxHQUFHLFNBQWxEQSxPQUFrRCxPQUtuQztBQUFBLE1BSm5CQyxJQUltQixRQUpuQkEsSUFJbUI7QUFBQSxNQUhuQkMsT0FHbUIsUUFIbkJBLE9BR21CO0FBQUEsTUFGbkJDLE9BRW1CLFFBRm5CQSxPQUVtQjtBQUFBLE1BRG5CQyxZQUNtQixRQURuQkEsWUFDbUI7O0FBQ25CLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUEyQztBQUNsRSxRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxhQUFGLENBQWdCQyxLQUFqQixFQUF3QixFQUF4QixDQUF4QjtBQUNBLFFBQU1DLE9BQU8s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QUFoQixDQUxILENBREYsRUFZRSxvQkFBQyxnQkFBRDtBQUFNLElBQUEsSUFBSSxFQUFDO0FBQVgsSUFaRixDQVhGLENBREYsQ0FERjtBQThCRCxDQWxFRDs7QUFvRUE5QixPQUFPLENBQUNnQyxTQUFSLEdBQW9CO0FBSWxCL0IsRUFBQUEsSUFBSSxFQUFFZ0Msc0JBQVVDLEdBSkU7QUFRbEJoQyxFQUFBQSxPQUFPLEVBQUUrQixzQkFBVUMsR0FSRDtBQVlsQi9CLEVBQUFBLE9BQU8sRUFBRThCLHNCQUFVQyxHQVpEO0FBZ0JsQjlCLEVBQUFBLFlBQVksRUFBRTZCLHNCQUFVRSxJQUFWLENBQWVDO0FBaEJYLENBQXBCO0FBbUJBcEMsT0FBTyxDQUFDcUMsWUFBUixHQUF1QjtBQUNyQnBDLEVBQUFBLElBQUksRUFBRSxJQUFJVyxJQUFKLEVBRGU7QUFFckJWLEVBQUFBLE9BQU8sRUFBRSw4QkFGWTtBQUdyQkMsRUFBQUEsT0FBTyxFQUFFO0FBSFksQ0FBdkI7ZUFNZUgsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IHsgZ2V0RGVmYXVsdE1heERhdGUsIGdldERlZmF1bHRNaW5EYXRlIH0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kYXRlXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FwdGlvblByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGRhdGU6IERhdGVcbiAgbWF4RGF0ZTogRGF0ZVxuICBtaW5EYXRlOiBEYXRlXG4gIG9uRGF0ZUNoYW5nZTogKGRhdGU6IERhdGUsIGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHZvaWRcbn1cblxuLyoqXG4gKiDml6XmnJ/pgInmi6kgQ2FwdGlvblxuICovXG5jb25zdCBDYXB0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJQ2FwdGlvblByb3BzPiA9ICh7XG4gIGRhdGUsXG4gIG1heERhdGUsXG4gIG1pbkRhdGUsXG4gIG9uRGF0ZUNoYW5nZSxcbn06IElDYXB0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlWWVhckNoYW5nZSA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgbmV3WWVhciA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC52YWx1ZSwgMTApXG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKVxuICAgIG5ld0RhdGUuc2V0RnVsbFllYXIobmV3WWVhcilcbiAgICBvbkRhdGVDaGFuZ2UobmV3RGF0ZSwgZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU1vbnRoQ2hhbmdlID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBuZXdNb250aCA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC52YWx1ZSwgMTApXG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKVxuICAgIG5ld0RhdGUuc2V0TW9udGgobmV3TW9udGgpXG4gICAgb25EYXRlQ2hhbmdlKG5ld0RhdGUsIGUpXG4gIH1cblxuICBjb25zdCBtaW5ZZWFyID0gbWluRGF0ZS5nZXRGdWxsWWVhcigpXG4gIGNvbnN0IG1heFllYXIgPSBtYXhEYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgeWVhcnMgPSBbbWF4WWVhcl1cbiAgZm9yIChsZXQgeWVhciA9IG1heFllYXIgLSAxOyB5ZWFyID49IG1pblllYXI7IHllYXIgLT0gMSkge1xuICAgIHllYXJzLnB1c2goeWVhcilcbiAgfVxuXG4gIGNvbnN0IGRpc3BsYXlNb250aCA9IGRhdGUuZ2V0TW9udGgoKVxuICBjb25zdCBkaXNwbGF5WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBzdGFydE1vbnRoID0gZGlzcGxheVllYXIgPT09IG1pblllYXIgPyBtaW5EYXRlLmdldE1vbnRoKCkgOiAwXG4gIGNvbnN0IGVuZE1vbnRoID0gZGlzcGxheVllYXIgPT09IG1heFllYXIgPyBtYXhEYXRlLmdldE1vbnRoKCkgKyAxIDogMTJcbiAgY29uc3QgbW9udGhzID0gW3N0YXJ0TW9udGhdXG4gIGZvciAobGV0IG1vbnRoID0gc3RhcnRNb250aCArIDE7IG1vbnRoIDwgZW5kTW9udGg7IG1vbnRoICs9IDEpIHtcbiAgICBtb250aHMucHVzaChtb250aClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2FwdGlvbmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0c2B9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWxlY3RZZWFyYH0+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwieWVhclwiIG9uQ2hhbmdlPXtoYW5kbGVZZWFyQ2hhbmdlfSB2YWx1ZT17ZGlzcGxheVllYXJ9PlxuICAgICAgICAgICAge3llYXJzLm1hcCh5ZWFyID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfT5cbiAgICAgICAgICAgICAgICB7eWVhcn3lubRcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8SWNvbiBpY29uPVwidHJpYW5nbGUtZG93blwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWxlY3RNb250aGB9PlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJtb250aFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTW9udGhDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17ZGlzcGxheU1vbnRofVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttb250aHMubWFwKG1vbnRoID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21vbnRofSB2YWx1ZT17bW9udGh9PlxuICAgICAgICAgICAgICAgIHttb250aCArIDF95pyIXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPEljb24gaWNvbj1cInRyaWFuZ2xlLWRvd25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbkNhcHRpb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5pel5pyfXG4gICAqL1xuICBkYXRlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5pyA5aSn6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtYXhEYXRlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5pyA5bCP6ZmQ5Yi25pel5pyfXG4gICAqL1xuICBtaW5EYXRlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogaGFuZGxlclxuICAgKi9cbiAgb25EYXRlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5DYXB0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0ZTogbmV3IERhdGUoKSxcbiAgbWF4RGF0ZTogZ2V0RGVmYXVsdE1heERhdGUoKSxcbiAgbWluRGF0ZTogZ2V0RGVmYXVsdE1pbkRhdGUoKSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGlvblxuIl19