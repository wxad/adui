"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayPickerReact = require("day-picker-react");

require("./style");

var _button = _interopRequireDefault(require("../button"));

var _core = require("./core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var prefix = "adui-date";

var Navbar = function Navbar(_ref) {
  var maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      month = _ref.month,
      nextMonth = _ref.nextMonth,
      onNextClick = _ref.onNextClick,
      onPreviousClick = _ref.onPreviousClick,
      onManuallyChangeMonth = _ref.onManuallyChangeMonth;
  return React.createElement("div", {
    className: "".concat(prefix, "-navBar")
  }, React.createElement(_button["default"], {
    className: "".concat(prefix, "-navButtonPrev"),
    leftIcon: "arrow-down",
    theme: "light",
    size: "small",
    onClick: function onClick() {
      onPreviousClick();
    },
    disabled: (0, _core.areSameMonth)(minDate, month) || _dayPickerReact.DateUtils.isDayBefore(month, minDate)
  }), React.createElement(_button["default"], {
    className: "".concat(prefix, "-navButtonNext"),
    leftIcon: "arrow-down",
    theme: "light",
    size: "small",
    onClick: function onClick() {
      if (_dayPickerReact.DateUtils.isDayBefore(month, minDate) && onManuallyChangeMonth) {
        onManuallyChangeMonth();
      }

      onNextClick();
    },
    disabled: (0, _core.areSameMonth)(maxDate, month) || _dayPickerReact.DateUtils.isDayAfter(nextMonth, maxDate)
  }));
};

Navbar.propTypes = {
  maxDate: _propTypes["default"].any,
  minDate: _propTypes["default"].any,
  month: _propTypes["default"].instanceOf(Date),
  nextMonth: _propTypes["default"].instanceOf(Date),
  onNextClick: _propTypes["default"].any,
  onPreviousClick: _propTypes["default"].any,
  onManuallyChangeMonth: _propTypes["default"].any
};
Navbar.defaultProps = {
  maxDate: (0, _core.getDefaultMaxDate)(),
  minDate: (0, _core.getDefaultMinDate)(),
  month: null,
  nextMonth: null,
  onNextClick: function onNextClick() {},
  onPreviousClick: function onPreviousClick() {},
  onManuallyChangeMonth: function onManuallyChangeMonth() {}
};
var _default = Navbar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvTmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJOYXZiYXIiLCJtYXhEYXRlIiwibWluRGF0ZSIsIm1vbnRoIiwibmV4dE1vbnRoIiwib25OZXh0Q2xpY2siLCJvblByZXZpb3VzQ2xpY2siLCJvbk1hbnVhbGx5Q2hhbmdlTW9udGgiLCJEYXRlVXRpbHMiLCJpc0RheUJlZm9yZSIsImlzRGF5QWZ0ZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpbnN0YW5jZU9mIiwiRGF0ZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBZ0JBLElBQU1DLE1BQThCLEdBQUcsU0FBakNBLE1BQWlDO0FBQUEsTUFDckNDLE9BRHFDLFFBQ3JDQSxPQURxQztBQUFBLE1BRXJDQyxPQUZxQyxRQUVyQ0EsT0FGcUM7QUFBQSxNQUdyQ0MsS0FIcUMsUUFHckNBLEtBSHFDO0FBQUEsTUFJckNDLFNBSnFDLFFBSXJDQSxTQUpxQztBQUFBLE1BS3JDQyxXQUxxQyxRQUtyQ0EsV0FMcUM7QUFBQSxNQU1yQ0MsZUFOcUMsUUFNckNBLGVBTnFDO0FBQUEsTUFPckNDLHFCQVBxQyxRQU9yQ0EscUJBUHFDO0FBQUEsU0FTckM7QUFBSyxJQUFBLFNBQVMsWUFBS1IsTUFBTDtBQUFkLEtBQ0Usb0JBQUMsa0JBQUQ7QUFDRSxJQUFBLFNBQVMsWUFBS0EsTUFBTCxtQkFEWDtBQUVFLElBQUEsUUFBUSxFQUFDLFlBRlg7QUFHRSxJQUFBLEtBQUssRUFBQyxPQUhSO0FBSUUsSUFBQSxJQUFJLEVBQUMsT0FKUDtBQUtFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JPLE1BQUFBLGVBQWU7QUFDaEIsS0FQSDtBQVFFLElBQUEsUUFBUSxFQUNOLHdCQUFhSixPQUFiLEVBQXNCQyxLQUF0QixLQUFnQ0ssMEJBQVVDLFdBQVYsQ0FBc0JOLEtBQXRCLEVBQTZCRCxPQUE3QjtBQVRwQyxJQURGLEVBYUUsb0JBQUMsa0JBQUQ7QUFDRSxJQUFBLFNBQVMsWUFBS0gsTUFBTCxtQkFEWDtBQUVFLElBQUEsUUFBUSxFQUFDLFlBRlg7QUFHRSxJQUFBLEtBQUssRUFBQyxPQUhSO0FBSUUsSUFBQSxJQUFJLEVBQUMsT0FKUDtBQUtFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSVMsMEJBQVVDLFdBQVYsQ0FBc0JOLEtBQXRCLEVBQTZCRCxPQUE3QixLQUF5Q0sscUJBQTdDLEVBQW9FO0FBQ2xFQSxRQUFBQSxxQkFBcUI7QUFDdEI7O0FBQ0RGLE1BQUFBLFdBQVc7QUFDWixLQVZIO0FBV0UsSUFBQSxRQUFRLEVBQ04sd0JBQWFKLE9BQWIsRUFBc0JFLEtBQXRCLEtBQWdDSywwQkFBVUUsVUFBVixDQUFxQk4sU0FBckIsRUFBZ0NILE9BQWhDO0FBWnBDLElBYkYsQ0FUcUM7QUFBQSxDQUF2Qzs7QUF3Q0FELE1BQU0sQ0FBQ1csU0FBUCxHQUFtQjtBQUlqQlYsRUFBQUEsT0FBTyxFQUFFVyxzQkFBVUMsR0FKRjtBQVFqQlgsRUFBQUEsT0FBTyxFQUFFVSxzQkFBVUMsR0FSRjtBQVlqQlYsRUFBQUEsS0FBSyxFQUFFUyxzQkFBVUUsVUFBVixDQUFxQkMsSUFBckIsQ0FaVTtBQWdCakJYLEVBQUFBLFNBQVMsRUFBRVEsc0JBQVVFLFVBQVYsQ0FBcUJDLElBQXJCLENBaEJNO0FBb0JqQlYsRUFBQUEsV0FBVyxFQUFFTyxzQkFBVUMsR0FwQk47QUF3QmpCUCxFQUFBQSxlQUFlLEVBQUVNLHNCQUFVQyxHQXhCVjtBQTRCakJOLEVBQUFBLHFCQUFxQixFQUFFSyxzQkFBVUM7QUE1QmhCLENBQW5CO0FBK0JBYixNQUFNLENBQUNnQixZQUFQLEdBQXNCO0FBQ3BCZixFQUFBQSxPQUFPLEVBQUUsOEJBRFc7QUFFcEJDLEVBQUFBLE9BQU8sRUFBRSw4QkFGVztBQUdwQkMsRUFBQUEsS0FBSyxFQUFFLElBSGE7QUFJcEJDLEVBQUFBLFNBQVMsRUFBRSxJQUpTO0FBS3BCQyxFQUFBQSxXQUFXLEVBQUUsdUJBQU0sQ0FBRSxDQUxEO0FBTXBCQyxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRSxDQU5MO0FBT3BCQyxFQUFBQSxxQkFBcUIsRUFBRSxpQ0FBTSxDQUFFO0FBUFgsQ0FBdEI7ZUFVZVAsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCB7IERhdGVVdGlscyB9IGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCB7IGFyZVNhbWVNb250aCwgZ2V0RGVmYXVsdE1heERhdGUsIGdldERlZmF1bHRNaW5EYXRlIH0gZnJvbSBcIi4vY29yZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kYXRlXCJcblxuZXhwb3J0IGludGVyZmFjZSBJTmF2YmFyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgbWF4RGF0ZTogRGF0ZVxuICBtaW5EYXRlOiBEYXRlXG4gIG1vbnRoOiBEYXRlIHwgbnVsbFxuICBuZXh0TW9udGg6IERhdGUgfCBudWxsXG4gIG9uTmV4dENsaWNrOiAoKSA9PiB2b2lkXG4gIG9uUHJldmlvdXNDbGljazogKCkgPT4gdm9pZFxuICBvbk1hbnVhbGx5Q2hhbmdlTW9udGg/OiAoKSA9PiB2b2lkXG59XG5cbi8qKlxuICog5pel5pyf6YCJ5oupIE5hdmJhclxuICovXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDPElOYXZiYXJQcm9wcz4gPSAoe1xuICBtYXhEYXRlLFxuICBtaW5EYXRlLFxuICBtb250aCxcbiAgbmV4dE1vbnRoLFxuICBvbk5leHRDbGljayxcbiAgb25QcmV2aW91c0NsaWNrLFxuICBvbk1hbnVhbGx5Q2hhbmdlTW9udGgsXG59OiBJTmF2YmFyUHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbmF2QmFyYH0+XG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW5hdkJ1dHRvblByZXZgfVxuICAgICAgbGVmdEljb249XCJhcnJvdy1kb3duXCJcbiAgICAgIHRoZW1lPVwibGlnaHRcIlxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgb25QcmV2aW91c0NsaWNrKClcbiAgICAgIH19XG4gICAgICBkaXNhYmxlZD17XG4gICAgICAgIGFyZVNhbWVNb250aChtaW5EYXRlLCBtb250aCkgfHwgRGF0ZVV0aWxzLmlzRGF5QmVmb3JlKG1vbnRoLCBtaW5EYXRlKVxuICAgICAgfVxuICAgIC8+XG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW5hdkJ1dHRvbk5leHRgfVxuICAgICAgbGVmdEljb249XCJhcnJvdy1kb3duXCJcbiAgICAgIHRoZW1lPVwibGlnaHRcIlxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYgKERhdGVVdGlscy5pc0RheUJlZm9yZShtb250aCwgbWluRGF0ZSkgJiYgb25NYW51YWxseUNoYW5nZU1vbnRoKSB7XG4gICAgICAgICAgb25NYW51YWxseUNoYW5nZU1vbnRoKClcbiAgICAgICAgfVxuICAgICAgICBvbk5leHRDbGljaygpXG4gICAgICB9fVxuICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICBhcmVTYW1lTW9udGgobWF4RGF0ZSwgbW9udGgpIHx8IERhdGVVdGlscy5pc0RheUFmdGVyKG5leHRNb250aCwgbWF4RGF0ZSlcbiAgICAgIH1cbiAgICAvPlxuICA8L2Rpdj5cbilcblxuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOacgOWkp+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWF4RGF0ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOacgOWwj+mZkOWItuaXpeacn1xuICAgKi9cbiAgbWluRGF0ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOW9k+WJjeaciOeahOaXpeacn1xuICAgKi9cbiAgbW9udGg6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICog5LiL5Liq5pyI55qE5pel5pyfXG4gICAqL1xuICBuZXh0TW9udGg6IFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpLFxuICAvKipcbiAgICogbmV4dCBjbGljayBoYW5kbGVyXG4gICAqL1xuICBvbk5leHRDbGljazogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIHByZXZpb3VzIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIG9uUHJldmlvdXNDbGljazogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIHByZXZpb3VzIGNsaWNrIGhhbmRsZXJcbiAgICovXG4gIG9uTWFudWFsbHlDaGFuZ2VNb250aDogUHJvcFR5cGVzLmFueSxcbn1cblxuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbWF4RGF0ZTogZ2V0RGVmYXVsdE1heERhdGUoKSxcbiAgbWluRGF0ZTogZ2V0RGVmYXVsdE1pbkRhdGUoKSxcbiAgbW9udGg6IG51bGwsXG4gIG5leHRNb250aDogbnVsbCxcbiAgb25OZXh0Q2xpY2s6ICgpID0+IHt9LFxuICBvblByZXZpb3VzQ2xpY2s6ICgpID0+IHt9LFxuICBvbk1hbnVhbGx5Q2hhbmdlTW9udGg6ICgpID0+IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdfQ==