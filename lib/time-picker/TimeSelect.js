"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _raf = require("../_util/raf");

require("./style");

var _core = require("./core");

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-time";

var noop = function noop() {};

var scrollTo = function scrollTo(element, to, duration) {
  var reqAnimFrame = (0, _raf.getRequestAnimationFrame)();

  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;
  reqAnimFrame(function () {
    element.scrollTop += perTick;

    if (element.scrollTop === to) {
      return;
    }

    scrollTo(element, to, duration - 10);
  });
};

var TimeSelect = (0, _react.forwardRef)(function (_ref, ref) {
  var currentHour = _ref.currentHour,
      disabledHours = _ref.disabledHours,
      disabledMinutes = _ref.disabledMinutes,
      maxTime = _ref.maxTime,
      minTime = _ref.minTime,
      onChange = _ref.onChange,
      onlyHour = _ref.onlyHour,
      size = _ref.size,
      selectedValue = _ref.selectedValue,
      type = _ref.type,
      otherProps = _objectWithoutProperties(_ref, ["currentHour", "disabledHours", "disabledMinutes", "maxTime", "minTime", "onChange", "onlyHour", "size", "selectedValue", "type"]);

  var selectRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      select: selectRef
    };
  });

  var handleClick = function handleClick(item) {
    onChange(item, type);
  };

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var isDisabled = function isDisabled(value, minHour, minMinute, maxHour, maxMinute, isOnlyHour) {
    if (type === "hour") {
      return value < minHour || value > (isOnlyHour && !maxTime ? "24:00" : maxHour);
    }

    if (minHour === maxHour) {
      return value < minMinute || value > maxMinute;
    }

    if (minHour === currentHour) {
      return value < minMinute;
    }

    if (maxHour === currentHour) {
      return value > maxMinute;
    }

    return false;
  };

  var updateScrollTop = function updateScrollTop(duration) {
    if (selectRef !== null && selectRef !== void 0 && selectRef.current) {
      var activeItem = selectRef.current.getElementsByClassName("".concat(prefix, "-active"))[0];

      if (activeItem) {
        var offsetTop = activeItem.offsetTop;

        if (offsetTop !== undefined) {
          if (duration) {
            scrollTo(selectRef.current, offsetTop, duration);
          } else {
            selectRef.current.scrollTop = offsetTop;
          }
        }
      }
    }
  };

  (0, _react.useEffect)(function () {
    updateScrollTop(0);
  }, []);
  (0, _react.useEffect)(function () {
    updateScrollTop(120);
  }, [selectedValue]);
  var classSet = (0, _classnames["default"])("".concat(prefix, "-timeSelect"), "".concat(prefix, "-").concat((0, _configProvider.getComputedSize)(size, sizeContext)), _defineProperty({}, "".concat(prefix, "-integerTimeSelect"), onlyHour));

  var _extractHourAndMinute = (0, _core.extractHourAndMinuteFromTime)(minTime),
      minHour = _extractHourAndMinute.hour,
      minMinute = _extractHourAndMinute.minute;

  var _extractHourAndMinute2 = (0, _core.extractHourAndMinuteFromTime)(maxTime),
      maxHour = _extractHourAndMinute2.hour,
      maxMinute = _extractHourAndMinute2.minute;

  var items = [];

  if (type === "minute") {
    items = _core.minutes;
  } else if (onlyHour) {
    items = _core.hours24;
  } else {
    items = _core.hours;
  }

  return _react["default"].createElement("div", _extends({
    className: classSet,
    ref: selectRef
  }, otherProps), items.map(function (value) {
    var _classNames2;

    var disabled = isDisabled(parseInt(value, 10), parseInt(minHour || "00", 10), parseInt(minMinute || "00", 10), parseInt(maxHour || "23", 10), parseInt(maxMinute || "59", 10), onlyHour);

    if ((disabled || disabledHours && disabledHours(value)) && type === "hour" || disabledMinutes && disabledMinutes(value) && type === "minute") {
      return null;
    }

    var itemClassSet = (0, _classnames["default"])("".concat(prefix, "-item"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-active"), selectedValue === value), _defineProperty(_classNames2, "".concat(prefix, "-disabled"), disabled), _classNames2));
    return _react["default"].createElement("div", {
      role: "none",
      className: itemClassSet,
      key: value,
      onClick: function onClick() {
        if (!disabled) {
          handleClick(value);
        }
      }
    }, onlyHour ? "".concat(value, ":00") : value);
  }));
});
TimeSelect.propTypes = {
  currentHour: _propTypes["default"].number,
  disabledHours: _propTypes["default"].func,
  disabledMinutes: _propTypes["default"].func,
  maxTime: _propTypes["default"].string,
  minTime: _propTypes["default"].string,
  onChange: _propTypes["default"].any,
  onlyHour: _propTypes["default"].bool,
  selectedValue: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  type: _propTypes["default"].any
};
TimeSelect.defaultProps = {
  currentHour: null,
  disabledHours: noop,
  disabledMinutes: noop,
  maxTime: "23:59",
  minTime: "00:00",
  onChange: noop,
  onlyHour: false,
  selectedValue: null,
  size: "small",
  type: "hour"
};

var _default = (0, _react.memo)(TimeSelect);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvVGltZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInNjcm9sbFRvIiwiZWxlbWVudCIsInRvIiwiZHVyYXRpb24iLCJyZXFBbmltRnJhbWUiLCJzY3JvbGxUb3AiLCJkaWZmZXJlbmNlIiwicGVyVGljayIsIlRpbWVTZWxlY3QiLCJyZWYiLCJjdXJyZW50SG91ciIsImRpc2FibGVkSG91cnMiLCJkaXNhYmxlZE1pbnV0ZXMiLCJtYXhUaW1lIiwibWluVGltZSIsIm9uQ2hhbmdlIiwib25seUhvdXIiLCJzaXplIiwic2VsZWN0ZWRWYWx1ZSIsInR5cGUiLCJvdGhlclByb3BzIiwic2VsZWN0UmVmIiwic2VsZWN0IiwiaGFuZGxlQ2xpY2siLCJpdGVtIiwiQ29uZmlnQ29udGV4dCIsInNpemVDb250ZXh0IiwiaXNEaXNhYmxlZCIsInZhbHVlIiwibWluSG91ciIsIm1pbk1pbnV0ZSIsIm1heEhvdXIiLCJtYXhNaW51dGUiLCJpc09ubHlIb3VyIiwidXBkYXRlU2Nyb2xsVG9wIiwiY3VycmVudCIsImFjdGl2ZUl0ZW0iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0VG9wIiwidW5kZWZpbmVkIiwiY2xhc3NTZXQiLCJob3VyIiwibWludXRlIiwiaXRlbXMiLCJtaW51dGVzIiwiaG91cnMyNCIsImhvdXJzIiwibWFwIiwiZGlzYWJsZWQiLCJwYXJzZUludCIsIml0ZW1DbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImZ1bmMiLCJzdHJpbmciLCJhbnkiLCJib29sIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElB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QUFFaEIsSUFOYztBQU94QmlCLEVBQUFBLFFBQVEsRUFBRSxLQVBjO0FBUXhCRSxFQUFBQSxhQUFhLEVBQUUsSUFSUztBQVN4QkQsRUFBQUEsSUFBSSxFQUFFLE9BVGtCO0FBVXhCRSxFQUFBQSxJQUFJLEVBQUU7QUFWa0IsQ0FBMUI7O2VBYWUsaUJBQUtYLFVBQUwsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZUVmZmVjdCxcbiAgbWVtbyxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIH0gZnJvbSBcIi4uL191dGlsL3JhZlwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcbmltcG9ydCB7IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUsIGhvdXJzLCBob3VyczI0LCBtaW51dGVzIH0gZnJvbSBcIi4vY29yZVwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRpbWVcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRpbWVTZWxlY3RQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjdXJyZW50SG91cj86IG51bWJlciB8IG51bGxcbiAgZGlzYWJsZWRIb3Vycz86IChob3VyPzogc3RyaW5nIHwgbnVsbCkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgZGlzYWJsZWRNaW51dGVzPzogKG1pbnV0ZT86IHN0cmluZyB8IG51bGwpID0+IGJvb2xlYW4gfCB2b2lkXG4gIG1heFRpbWU/OiBzdHJpbmcgfCBudWxsXG4gIG1pblRpbWU/OiBzdHJpbmcgfCBudWxsXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZywgdHlwZTogXCJob3VyXCIgfCBcIm1pbnV0ZVwiKSA9PiB2b2lkXG4gIG9ubHlIb3VyPzogYm9vbGVhblxuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIHNlbGVjdGVkVmFsdWU/OiBudWxsIHwgc3RyaW5nXG4gIHR5cGU6IFwiaG91clwiIHwgXCJtaW51dGVcIlxufVxuXG5jb25zdCBzY3JvbGxUbyA9IChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCwgdG86IG51bWJlciwgZHVyYXRpb246IG51bWJlcikgPT4ge1xuICBjb25zdCByZXFBbmltRnJhbWUgPSBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKVxuXG4gIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB0b1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wXG4gIGNvbnN0IHBlclRpY2sgPSAoZGlmZmVyZW5jZSAvIGR1cmF0aW9uKSAqIDEwXG5cbiAgcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCArPSBwZXJUaWNrXG4gICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09PSB0bykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKVxuICB9KVxufVxuXG5jb25zdCBUaW1lU2VsZWN0OiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PElUaW1lU2VsZWN0UHJvcHMgJlxuICBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGN1cnJlbnRIb3VyLFxuICAgICAgZGlzYWJsZWRIb3VycyxcbiAgICAgIGRpc2FibGVkTWludXRlcyxcbiAgICAgIG1heFRpbWUsXG4gICAgICBtaW5UaW1lLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbmx5SG91cixcbiAgICAgIHNpemUsXG4gICAgICBzZWxlY3RlZFZhbHVlLFxuICAgICAgdHlwZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJVGltZVNlbGVjdFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBzZWxlY3RSZWYgPSB1c2VSZWY8YW55PihudWxsKVxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgc2VsZWN0OiBzZWxlY3RSZWYsXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgIG9uQ2hhbmdlKGl0ZW0sIHR5cGUpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IChcbiAgICAgIHZhbHVlOiBudW1iZXIsXG4gICAgICBtaW5Ib3VyOiBudW1iZXIsXG4gICAgICBtaW5NaW51dGU6IG51bWJlcixcbiAgICAgIG1heEhvdXI6IG51bWJlcixcbiAgICAgIG1heE1pbnV0ZTogbnVtYmVyLFxuICAgICAgaXNPbmx5SG91cj86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIGlmICh0eXBlID09PSBcImhvdXJcIikge1xuICAgICAgICAvLyBcYui/memHjOimgeazqOaEj+aKiuaVtOeCuemAieaLqSAyNDowMCDnmoTmg4XlhrXnibnmrorlpITnkIZcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB2YWx1ZSA8IG1pbkhvdXIgfHxcbiAgICAgICAgICB2YWx1ZSA+IChpc09ubHlIb3VyICYmICFtYXhUaW1lID8gXCIyNDowMFwiIDogbWF4SG91cilcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgLy8g5Zyo5ZCM5LiA5Liq5bCP5pe25YaFXG4gICAgICBpZiAobWluSG91ciA9PT0gbWF4SG91cikge1xuICAgICAgICByZXR1cm4gdmFsdWUgPCBtaW5NaW51dGUgfHwgdmFsdWUgPiBtYXhNaW51dGVcbiAgICAgIH1cbiAgICAgIC8vIOWcqOacgOWwj+eahOWwj+aXtuWGheaXtu+8jOi/meaXtuWAmeimgeaKiiBtaW5NaW51dGUg5Lul5LiL55qEIGRpc2FibGVkXG4gICAgICBpZiAobWluSG91ciA9PT0gY3VycmVudEhvdXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDwgbWluTWludXRlXG4gICAgICB9XG4gICAgICAvLyDlnKjmnIDlpKfnmoTlsI/ml7blhoXml7bvvIzov5nml7blgJnopoHmioogbWF4TWludXRlIOS7peS4iueahCBkaXNhYmxlZFxuICAgICAgaWYgKG1heEhvdXIgPT09IGN1cnJlbnRIb3VyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+IG1heE1pbnV0ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVTY3JvbGxUb3AgPSAoZHVyYXRpb246IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHNlbGVjdFJlZj8uY3VycmVudCkge1xuICAgICAgICBjb25zdCBhY3RpdmVJdGVtOiBQYXJ0aWFsPEhUTUxEaXZFbGVtZW50PiA9IHNlbGVjdFJlZi5jdXJyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgYCR7cHJlZml4fS1hY3RpdmVgXG4gICAgICAgIClbMF1cbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICBjb25zdCB7IG9mZnNldFRvcCB9ID0gYWN0aXZlSXRlbVxuICAgICAgICAgIGlmIChvZmZzZXRUb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgIHNjcm9sbFRvKHNlbGVjdFJlZi5jdXJyZW50LCBvZmZzZXRUb3AsIGR1cmF0aW9uKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZWN0UmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gb2Zmc2V0VG9wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHVwZGF0ZVNjcm9sbFRvcCgwKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHVwZGF0ZVNjcm9sbFRvcCgxMjApXG4gICAgfSwgW3NlbGVjdGVkVmFsdWVdKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgYCR7cHJlZml4fS10aW1lU2VsZWN0YCxcbiAgICAgIGAke3ByZWZpeH0tJHtnZXRDb21wdXRlZFNpemUoc2l6ZSwgc2l6ZUNvbnRleHQpfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWludGVnZXJUaW1lU2VsZWN0YF06IG9ubHlIb3VyLFxuICAgICAgfVxuICAgIClcblxuICAgIGNvbnN0IHsgaG91cjogbWluSG91ciwgbWludXRlOiBtaW5NaW51dGUgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUoXG4gICAgICBtaW5UaW1lXG4gICAgKVxuICAgIGNvbnN0IHsgaG91cjogbWF4SG91ciwgbWludXRlOiBtYXhNaW51dGUgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUoXG4gICAgICBtYXhUaW1lXG4gICAgKVxuXG4gICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdXG4gICAgaWYgKHR5cGUgPT09IFwibWludXRlXCIpIHtcbiAgICAgIGl0ZW1zID0gbWludXRlc1xuICAgIH0gZWxzZSBpZiAob25seUhvdXIpIHtcbiAgICAgIGl0ZW1zID0gaG91cnMyNFxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtcyA9IGhvdXJzXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gcmVmPXtzZWxlY3RSZWZ9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2l0ZW1zLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBpc0Rpc2FibGVkKFxuICAgICAgICAgICAgcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1pbkhvdXIgfHwgXCIwMFwiLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtaW5NaW51dGUgfHwgXCIwMFwiLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtYXhIb3VyIHx8IFwiMjNcIiwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWF4TWludXRlIHx8IFwiNTlcIiwgMTApLFxuICAgICAgICAgICAgb25seUhvdXJcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKChkaXNhYmxlZCB8fCAoZGlzYWJsZWRIb3VycyAmJiBkaXNhYmxlZEhvdXJzKHZhbHVlKSkpICYmXG4gICAgICAgICAgICAgIHR5cGUgPT09IFwiaG91clwiKSB8fFxuICAgICAgICAgICAgKGRpc2FibGVkTWludXRlcyAmJiBkaXNhYmxlZE1pbnV0ZXModmFsdWUpICYmIHR5cGUgPT09IFwibWludXRlXCIpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyDlsI/ml7bnmoQgZGlzYWJsZWQg55u05o6l5LiN5pi+56S677yM6ICM5LiN5piv5YGaIGRpc2FibGVkIOWkhOeQhlxuICAgICAgICAgICAgLy8g5YiG6ZKf55qEIGRpc2FibGVkIOaYvuekuu+8jOWmguaenOS8oOWFpeS6hiBkaXNhYmxlZE1pbnV0ZXMg5YiZ5LiN5pi+56S6XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGl0ZW1DbGFzc1NldCA9IGNsYXNzTmFtZXMoYCR7cHJlZml4fS1pdGVtYCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0tYWN0aXZlYF06IHNlbGVjdGVkVmFsdWUgPT09IHZhbHVlLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzU2V0fVxuICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sodmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7b25seUhvdXIgPyBgJHt2YWx1ZX06MDBgIDogdmFsdWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cblRpbWVTZWxlY3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5b2T5YmN5bCP5pe25YC8XG4gICAqL1xuICBjdXJyZW50SG91cjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOS4jeWPr+mAieeahOWwj+aXtlxuICAgKi9cbiAgZGlzYWJsZWRIb3VyczogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDkuI3lj6/pgInnmoTliIbpkp9cbiAgICovXG4gIGRpc2FibGVkTWludXRlczogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TmrrXnmoTmnIDlpKflgLxcbiAgICovXG4gIG1heFRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlj6/pgInml7bpl7TmrrXnmoTmnIDlsI/lgLxcbiAgICovXG4gIG1pblRpbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmlLnlj5jpgInmi6nnmoTlgLxcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5piv5pW054K5XG4gICAqL1xuICBvbmx5SG91cjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlt7Lnu4/pgInmi6nnmoTlgLxcbiAgICovXG4gIHNlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDliKTmlq3pgInmi6nmoYbnmoTnsbvlnotcbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5hbnksXG59XG5cblRpbWVTZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICBjdXJyZW50SG91cjogbnVsbCxcbiAgZGlzYWJsZWRIb3Vyczogbm9vcCxcbiAgZGlzYWJsZWRNaW51dGVzOiBub29wLFxuICBtYXhUaW1lOiBcIjIzOjU5XCIsXG4gIG1pblRpbWU6IFwiMDA6MDBcIixcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9ubHlIb3VyOiBmYWxzZSxcbiAgc2VsZWN0ZWRWYWx1ZTogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0eXBlOiBcImhvdXJcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhUaW1lU2VsZWN0KVxuIl19