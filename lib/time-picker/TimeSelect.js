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
    if (selectRef === null || selectRef === void 0 ? void 0 : selectRef.current) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvVGltZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInNjcm9sbFRvIiwiZWxlbWVudCIsInRvIiwiZHVyYXRpb24iLCJyZXFBbmltRnJhbWUiLCJzY3JvbGxUb3AiLCJkaWZmZXJlbmNlIiwicGVyVGljayIsIlRpbWVTZWxlY3QiLCJyZWYiLCJjdXJyZW50SG91ciIsImRpc2FibGVkSG91cnMiLCJkaXNhYmxlZE1pbnV0ZXMiLCJtYXhUaW1lIiwibWluVGltZSIsIm9uQ2hhbmdlIiwib25seUhvdXIiLCJzaXplIiwic2VsZWN0ZWRWYWx1ZSIsInR5cGUiLCJvdGhlclByb3BzIiwic2VsZWN0UmVmIiwic2VsZWN0IiwiaGFuZGxlQ2xpY2siLCJpdGVtIiwiQ29uZmlnQ29udGV4dCIsInNpemVDb250ZXh0IiwiaXNEaXNhYmxlZCIsInZhbHVlIiwibWluSG91ciIsIm1pbk1pbnV0ZSIsIm1heEhvdXIiLCJtYXhNaW51dGUiLCJpc09ubHlIb3VyIiwidXBkYXRlU2Nyb2xsVG9wIiwiY3VycmVudCIsImFjdGl2ZUl0ZW0iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0VG9wIiwidW5kZWZpbmVkIiwiY2xhc3NTZXQiLCJob3VyIiwibWludXRlIiwiaXRlbXMiLCJtaW51dGVzIiwiaG91cnMyNCIsImhvdXJzIiwibWFwIiwiZGlzYWJsZWQiLCJwYXJzZUludCIsIml0ZW1DbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImZ1bmMiLCJzdHJpbmciLCJhbnkiLCJib29sIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFdBQWY7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElB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RUFBRWhCLElBTmM7QUFPeEJpQixFQUFBQSxRQUFRLEVBQUUsS0FQYztBQVF4QkUsRUFBQUEsYUFBYSxFQUFFLElBUlM7QUFTeEJELEVBQUFBLElBQUksRUFBRSxPQVRrQjtBQVV4QkUsRUFBQUEsSUFBSSxFQUFFO0FBVmtCLENBQTFCOztlQWFlLGlCQUFLWCxVQUFMLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlUmVmLFxuICB1c2VFZmZlY3QsXG4gIG1lbW8sXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSB9IGZyb20gXCIuLi9fdXRpbC9yYWZcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5pbXBvcnQgeyBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lLCBob3VycywgaG91cnMyNCwgbWludXRlcyB9IGZyb20gXCIuL2NvcmVcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10aW1lXCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lU2VsZWN0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY3VycmVudEhvdXI/OiBudW1iZXIgfCBudWxsXG4gIGRpc2FibGVkSG91cnM/OiAoaG91cj86IHN0cmluZyB8IG51bGwpID0+IGJvb2xlYW4gfCB2b2lkXG4gIGRpc2FibGVkTWludXRlcz86IChtaW51dGU/OiBzdHJpbmcgfCBudWxsKSA9PiBib29sZWFuIHwgdm9pZFxuICBtYXhUaW1lPzogc3RyaW5nIHwgbnVsbFxuICBtaW5UaW1lPzogc3RyaW5nIHwgbnVsbFxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcsIHR5cGU6IFwiaG91clwiIHwgXCJtaW51dGVcIikgPT4gdm9pZFxuICBvbmx5SG91cj86IGJvb2xlYW5cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICBzZWxlY3RlZFZhbHVlPzogbnVsbCB8IHN0cmluZ1xuICB0eXBlOiBcImhvdXJcIiB8IFwibWludXRlXCJcbn1cblxuY29uc3Qgc2Nyb2xsVG8gPSAoZWxlbWVudDogSFRNTERpdkVsZW1lbnQsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcmVxQW5pbUZyYW1lID0gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKClcblxuICBpZiAoZHVyYXRpb24gPD0gMCkge1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG9cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcFxuICBjb25zdCBwZXJUaWNrID0gKGRpZmZlcmVuY2UgLyBkdXJhdGlvbikgKiAxMFxuXG4gIHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgKz0gcGVyVGlja1xuICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMClcbiAgfSlcbn1cblxuY29uc3QgVGltZVNlbGVjdDogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxJVGltZVNlbGVjdFByb3BzICZcbiAgUmVhY3QuUmVmQXR0cmlidXRlczxhbnk+PiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjdXJyZW50SG91cixcbiAgICAgIGRpc2FibGVkSG91cnMsXG4gICAgICBkaXNhYmxlZE1pbnV0ZXMsXG4gICAgICBtYXhUaW1lLFxuICAgICAgbWluVGltZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25seUhvdXIsXG4gICAgICBzaXplLFxuICAgICAgc2VsZWN0ZWRWYWx1ZSxcbiAgICAgIHR5cGUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVRpbWVTZWxlY3RQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0UmVmID0gdXNlUmVmPGFueT4obnVsbClcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIHNlbGVjdDogc2VsZWN0UmVmLFxuICAgIH0pKVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaXRlbTogc3RyaW5nKSA9PiB7XG4gICAgICBvbkNoYW5nZShpdGVtLCB0eXBlKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAoXG4gICAgICB2YWx1ZTogbnVtYmVyLFxuICAgICAgbWluSG91cjogbnVtYmVyLFxuICAgICAgbWluTWludXRlOiBudW1iZXIsXG4gICAgICBtYXhIb3VyOiBudW1iZXIsXG4gICAgICBtYXhNaW51dGU6IG51bWJlcixcbiAgICAgIGlzT25seUhvdXI/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJob3VyXCIpIHtcbiAgICAgICAgLy8gXGLov5nph4zopoHms6jmhI/miormlbTngrnpgInmi6kgMjQ6MDAg55qE5oOF5Ya154m55q6K5aSE55CGXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdmFsdWUgPCBtaW5Ib3VyIHx8XG4gICAgICAgICAgdmFsdWUgPiAoaXNPbmx5SG91ciAmJiAhbWF4VGltZSA/IFwiMjQ6MDBcIiA6IG1heEhvdXIpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIC8vIOWcqOWQjOS4gOS4quWwj+aXtuWGhVxuICAgICAgaWYgKG1pbkhvdXIgPT09IG1heEhvdXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDwgbWluTWludXRlIHx8IHZhbHVlID4gbWF4TWludXRlXG4gICAgICB9XG4gICAgICAvLyDlnKjmnIDlsI/nmoTlsI/ml7blhoXml7bvvIzov5nml7blgJnopoHmioogbWluTWludXRlIOS7peS4i+eahCBkaXNhYmxlZFxuICAgICAgaWYgKG1pbkhvdXIgPT09IGN1cnJlbnRIb3VyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IG1pbk1pbnV0ZVxuICAgICAgfVxuICAgICAgLy8g5Zyo5pyA5aSn55qE5bCP5pe25YaF5pe277yM6L+Z5pe25YCZ6KaB5oqKIG1heE1pbnV0ZSDku6XkuIrnmoQgZGlzYWJsZWRcbiAgICAgIGlmIChtYXhIb3VyID09PSBjdXJyZW50SG91cikge1xuICAgICAgICByZXR1cm4gdmFsdWUgPiBtYXhNaW51dGVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlU2Nyb2xsVG9wID0gKGR1cmF0aW9uOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChzZWxlY3RSZWY/LmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlSXRlbTogUGFydGlhbDxIVE1MRGl2RWxlbWVudD4gPSBzZWxlY3RSZWYuY3VycmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgIGAke3ByZWZpeH0tYWN0aXZlYFxuICAgICAgICApWzBdXG4gICAgICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICAgICAgY29uc3QgeyBvZmZzZXRUb3AgfSA9IGFjdGl2ZUl0ZW1cbiAgICAgICAgICBpZiAob2Zmc2V0VG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICBzY3JvbGxUbyhzZWxlY3RSZWYuY3VycmVudCwgb2Zmc2V0VG9wLCBkdXJhdGlvbilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGVjdFJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IG9mZnNldFRvcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB1cGRhdGVTY3JvbGxUb3AoMClcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB1cGRhdGVTY3JvbGxUb3AoMTIwKVxuICAgIH0sIFtzZWxlY3RlZFZhbHVlXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGAke3ByZWZpeH0tdGltZVNlbGVjdGAsXG4gICAgICBgJHtwcmVmaXh9LSR7Z2V0Q29tcHV0ZWRTaXplKHNpemUsIHNpemVDb250ZXh0KX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1pbnRlZ2VyVGltZVNlbGVjdGBdOiBvbmx5SG91cixcbiAgICAgIH1cbiAgICApXG5cbiAgICBjb25zdCB7IGhvdXI6IG1pbkhvdXIsIG1pbnV0ZTogbWluTWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKFxuICAgICAgbWluVGltZVxuICAgIClcbiAgICBjb25zdCB7IGhvdXI6IG1heEhvdXIsIG1pbnV0ZTogbWF4TWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKFxuICAgICAgbWF4VGltZVxuICAgIClcblxuICAgIGxldCBpdGVtczogc3RyaW5nW10gPSBbXVxuICAgIGlmICh0eXBlID09PSBcIm1pbnV0ZVwiKSB7XG4gICAgICBpdGVtcyA9IG1pbnV0ZXNcbiAgICB9IGVsc2UgaWYgKG9ubHlIb3VyKSB7XG4gICAgICBpdGVtcyA9IGhvdXJzMjRcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbXMgPSBob3Vyc1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHJlZj17c2VsZWN0UmVmfSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtpdGVtcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gaXNEaXNhYmxlZChcbiAgICAgICAgICAgIHBhcnNlSW50KHZhbHVlLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtaW5Ib3VyIHx8IFwiMDBcIiwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWluTWludXRlIHx8IFwiMDBcIiwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWF4SG91ciB8fCBcIjIzXCIsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1heE1pbnV0ZSB8fCBcIjU5XCIsIDEwKSxcbiAgICAgICAgICAgIG9ubHlIb3VyXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICgoZGlzYWJsZWQgfHwgKGRpc2FibGVkSG91cnMgJiYgZGlzYWJsZWRIb3Vycyh2YWx1ZSkpKSAmJlxuICAgICAgICAgICAgICB0eXBlID09PSBcImhvdXJcIikgfHxcbiAgICAgICAgICAgIChkaXNhYmxlZE1pbnV0ZXMgJiYgZGlzYWJsZWRNaW51dGVzKHZhbHVlKSAmJiB0eXBlID09PSBcIm1pbnV0ZVwiKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8g5bCP5pe255qEIGRpc2FibGVkIOebtOaOpeS4jeaYvuekuu+8jOiAjOS4jeaYr+WBmiBkaXNhYmxlZCDlpITnkIZcbiAgICAgICAgICAgIC8vIOWIhumSn+eahCBkaXNhYmxlZCDmmL7npLrvvIzlpoLmnpzkvKDlhaXkuoYgZGlzYWJsZWRNaW51dGVzIOWImeS4jeaYvuekulxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpdGVtQ2xhc3NTZXQgPSBjbGFzc05hbWVzKGAke3ByZWZpeH0taXRlbWAsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWFjdGl2ZWBdOiBzZWxlY3RlZFZhbHVlID09PSB2YWx1ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW1DbGFzc1NldH1cbiAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29ubHlIb3VyID8gYCR7dmFsdWV9OjAwYCA6IHZhbHVlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5UaW1lU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOW9k+WJjeWwj+aXtuWAvFxuICAgKi9cbiAgY3VycmVudEhvdXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDkuI3lj6/pgInnmoTlsI/ml7ZcbiAgICovXG4gIGRpc2FibGVkSG91cnM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5LiN5Y+v6YCJ55qE5YiG6ZKfXG4gICAqL1xuICBkaXNhYmxlZE1pbnV0ZXM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y+v6YCJ5pe26Ze05q6155qE5pyA5aSn5YC8XG4gICAqL1xuICBtYXhUaW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5Y+v6YCJ5pe26Ze05q6155qE5pyA5bCP5YC8XG4gICAqL1xuICBtaW5UaW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5pS55Y+Y6YCJ5oup55qE5YC8XG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuaYr+aVtOeCuVxuICAgKi9cbiAgb25seUhvdXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5bey57uP6YCJ5oup55qE5YC8XG4gICAqL1xuICBzZWxlY3RlZFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5Yik5pat6YCJ5oup5qGG55qE57G75Z6LXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuYW55LFxufVxuXG5UaW1lU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VycmVudEhvdXI6IG51bGwsXG4gIGRpc2FibGVkSG91cnM6IG5vb3AsXG4gIGRpc2FibGVkTWludXRlczogbm9vcCxcbiAgbWF4VGltZTogXCIyMzo1OVwiLFxuICBtaW5UaW1lOiBcIjAwOjAwXCIsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbmx5SG91cjogZmFsc2UsXG4gIHNlbGVjdGVkVmFsdWU6IG51bGwsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdHlwZTogXCJob3VyXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oVGltZVNlbGVjdClcbiJdfQ==