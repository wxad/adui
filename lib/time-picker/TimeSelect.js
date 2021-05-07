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
  } else {
    items = _core.hours;
  }

  return _react["default"].createElement("div", _extends({
    className: classSet,
    ref: selectRef
  }, otherProps), items.map(function (value) {
    var _classNames2;

    var disabled = isDisabled(parseInt(value, 10), parseInt(minHour || "00", 10), parseInt(minMinute || "00", 10), parseInt(maxHour || "24", 10), parseInt(maxMinute || "59", 10), onlyHour);

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
  maxTime: "24:00",
  minTime: "00:00",
  onChange: noop,
  onlyHour: false,
  selectedValue: null,
  size: "small",
  type: "hour"
};

var _default = (0, _react.memo)(TimeSelect);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvVGltZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInNjcm9sbFRvIiwiZWxlbWVudCIsInRvIiwiZHVyYXRpb24iLCJyZXFBbmltRnJhbWUiLCJzY3JvbGxUb3AiLCJkaWZmZXJlbmNlIiwicGVyVGljayIsIlRpbWVTZWxlY3QiLCJyZWYiLCJjdXJyZW50SG91ciIsImRpc2FibGVkSG91cnMiLCJkaXNhYmxlZE1pbnV0ZXMiLCJtYXhUaW1lIiwibWluVGltZSIsIm9uQ2hhbmdlIiwib25seUhvdXIiLCJzaXplIiwic2VsZWN0ZWRWYWx1ZSIsInR5cGUiLCJvdGhlclByb3BzIiwic2VsZWN0UmVmIiwic2VsZWN0IiwiaGFuZGxlQ2xpY2siLCJpdGVtIiwiQ29uZmlnQ29udGV4dCIsInNpemVDb250ZXh0IiwiaXNEaXNhYmxlZCIsInZhbHVlIiwibWluSG91ciIsIm1pbk1pbnV0ZSIsIm1heEhvdXIiLCJtYXhNaW51dGUiLCJpc09ubHlIb3VyIiwidXBkYXRlU2Nyb2xsVG9wIiwiY3VycmVudCIsImFjdGl2ZUl0ZW0iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2Zmc2V0VG9wIiwidW5kZWZpbmVkIiwiY2xhc3NTZXQiLCJob3VyIiwibWludXRlIiwiaXRlbXMiLCJtaW51dGVzIiwiaG91cnMiLCJtYXAiLCJkaXNhYmxlZCIsInBhcnNlSW50IiwiaXRlbUNsYXNzU2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiZnVuYyIsInN0cmluZyIsImFueSIsImJvb2wiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsV0FBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBZ0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLE9BQUQsRUFBMEJDLEVBQTFCLEVBQXNDQyxRQUF0QyxFQUEyRDtBQUMxRSxNQUFNQyxZQUFZLEdBQUcsb0NBQXJCOztBQUVBLE1BQUlELFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNqQkYsSUFBQUEsT0FBTyxDQUFDSSxTQUFSLEdBQW9CSCxFQUFwQjtBQUNBO0FBQ0Q7O0FBQ0QsTUFBTUksVUFBVSxHQUFHSixFQUFFLEdBQUdELE9BQU8sQ0FBQ0ksU0FBaEM7QUFDQSxNQUFNRSxPQUFPLEdBQUlELFVBQVUsR0FBR0gsUUFBZCxHQUEwQixFQUExQztBQUVBQyxFQUFBQSxZQUFZLENBQUMsWUFBTTtBQUNqQkgsSUFBQUEsT0FBTyxDQUFDSSxTQUFSLElBQXFCRSxPQUFyQjs7QUFDQSxRQUFJTixPQUFPLENBQUNJLFNBQVIsS0FBc0JILEVBQTFCLEVBQThCO0FBQzVCO0FBQ0Q7O0FBQ0RGLElBQUFBLFFBQVEsQ0FBQ0MsT0FBRCxFQUFVQyxFQUFWLEVBQWNDLFFBQVEsR0FBRyxFQUF6QixDQUFSO0FBQ0QsR0FOVyxDQUFaO0FBT0QsQ0FqQkQ7O0FBbUJBLElBQU1LLFVBRUwsR0FBRyx1QkFDRixnQkFjRUMsR0FkRixFQWVLO0FBQUEsTUFiREMsV0FhQyxRQWJEQSxXQWFDO0FBQUEsTUFaREMsYUFZQyxRQVpEQSxhQVlDO0FBQUEsTUFYREMsZUFXQyxRQVhEQSxlQVdDO0FBQUEsTUFWREMsT0FVQyxRQVZEQSxPQVVDO0FBQUEsTUFUREMsT0FTQyxRQVREQSxPQVNDO0FBQUEsTUFSREMsUUFRQyxRQVJEQSxRQVFDO0FBQUEsTUFQREMsUUFPQyxRQVBEQSxRQU9DO0FBQUEsTUFOREMsSUFNQyxRQU5EQSxJQU1DO0FBQUEsTUFMREMsYUFLQyxRQUxEQSxhQUtDO0FBQUEsTUFKREMsSUFJQyxRQUpEQSxJQUlDO0FBQUEsTUFIRUMsVUFHRjs7QUFDSCxNQUFNQyxTQUFTLEdBQUcsbUJBQVksSUFBWixDQUFsQjtBQUNBLGtDQUFvQlosR0FBcEIsRUFBeUI7QUFBQSxXQUFPO0FBQzlCYSxNQUFBQSxNQUFNLEVBQUVEO0FBRHNCLEtBQVA7QUFBQSxHQUF6Qjs7QUFJQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQWtCO0FBQ3BDVCxJQUFBQSxRQUFRLENBQUNTLElBQUQsRUFBT0wsSUFBUCxDQUFSO0FBQ0QsR0FGRDs7QUFORyxvQkFVMkIsdUJBQVdNLDZCQUFYLENBVjNCO0FBQUEsTUFVV0MsV0FWWCxlQVVLVCxJQVZMOztBQVlILE1BQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQ2pCQyxLQURpQixFQUVqQkMsT0FGaUIsRUFHakJDLFNBSGlCLEVBSWpCQyxPQUppQixFQUtqQkMsU0FMaUIsRUFNakJDLFVBTmlCLEVBT2Q7QUFDSCxRQUFJZCxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUVuQixhQUNFUyxLQUFLLEdBQUdDLE9BQVIsSUFDQUQsS0FBSyxJQUFJSyxVQUFVLElBQUksQ0FBQ3BCLE9BQWYsR0FBeUIsT0FBekIsR0FBbUNrQixPQUF2QyxDQUZQO0FBSUQ7O0FBRUQsUUFBSUYsT0FBTyxLQUFLRSxPQUFoQixFQUF5QjtBQUN2QixhQUFPSCxLQUFLLEdBQUdFLFNBQVIsSUFBcUJGLEtBQUssR0FBR0ksU0FBcEM7QUFDRDs7QUFFRCxRQUFJSCxPQUFPLEtBQUtuQixXQUFoQixFQUE2QjtBQUMzQixhQUFPa0IsS0FBSyxHQUFHRSxTQUFmO0FBQ0Q7O0FBRUQsUUFBSUMsT0FBTyxLQUFLckIsV0FBaEIsRUFBNkI7QUFDM0IsYUFBT2tCLEtBQUssR0FBR0ksU0FBZjtBQUNEOztBQUVELFdBQU8sS0FBUDtBQUNELEdBN0JEOztBQStCQSxNQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUMvQixRQUFELEVBQXNCO0FBQzVDLFFBQUlrQixTQUFKLGFBQUlBLFNBQUosZUFBSUEsU0FBUyxDQUFFYyxPQUFmLEVBQXdCO0FBQ3RCLFVBQU1DLFVBQW1DLEdBQUdmLFNBQVMsQ0FBQ2MsT0FBVixDQUFrQkUsc0JBQWxCLFdBQ3ZDdkMsTUFEdUMsY0FFMUMsQ0FGMEMsQ0FBNUM7O0FBR0EsVUFBSXNDLFVBQUosRUFBZ0I7QUFBQSxZQUNORSxTQURNLEdBQ1FGLFVBRFIsQ0FDTkUsU0FETTs7QUFFZCxZQUFJQSxTQUFTLEtBQUtDLFNBQWxCLEVBQTZCO0FBQzNCLGNBQUlwQyxRQUFKLEVBQWM7QUFDWkgsWUFBQUEsUUFBUSxDQUFDcUIsU0FBUyxDQUFDYyxPQUFYLEVBQW9CRyxTQUFwQixFQUErQm5DLFFBQS9CLENBQVI7QUFDRCxXQUZELE1BRU87QUFDTGtCLFlBQUFBLFNBQVMsQ0FBQ2MsT0FBVixDQUFrQjlCLFNBQWxCLEdBQThCaUMsU0FBOUI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGLEdBaEJEOztBQWtCQSx3QkFBVSxZQUFNO0FBQ2RKLElBQUFBLGVBQWUsQ0FBQyxDQUFELENBQWY7QUFDRCxHQUZELEVBRUcsRUFGSDtBQUlBLHdCQUFVLFlBQU07QUFDZEEsSUFBQUEsZUFBZSxDQUFDLEdBQUQsQ0FBZjtBQUNELEdBRkQsRUFFRyxDQUFDaEIsYUFBRCxDQUZIO0FBSUEsTUFBTXNCLFFBQVEsR0FBRyxzQ0FDWjFDLE1BRFksNEJBRVpBLE1BRlksY0FFRixxQ0FBZ0JtQixJQUFoQixFQUFzQlMsV0FBdEIsQ0FGRSxpQ0FJVDVCLE1BSlMseUJBSW9Ca0IsUUFKcEIsRUFBakI7O0FBckVHLDhCQTZFMEMsd0NBQzNDRixPQUQyQyxDQTdFMUM7QUFBQSxNQTZFV2UsT0E3RVgseUJBNkVLWSxJQTdFTDtBQUFBLE1BNkU0QlgsU0E3RTVCLHlCQTZFb0JZLE1BN0VwQjs7QUFBQSwrQkFnRjBDLHdDQUMzQzdCLE9BRDJDLENBaEYxQztBQUFBLE1BZ0ZXa0IsT0FoRlgsMEJBZ0ZLVSxJQWhGTDtBQUFBLE1BZ0Y0QlQsU0FoRjVCLDBCQWdGb0JVLE1BaEZwQjs7QUFvRkgsTUFBSUMsS0FBZSxHQUFHLEVBQXRCOztBQUNBLE1BQUl4QixJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQndCLElBQUFBLEtBQUssR0FBR0MsYUFBUjtBQUNELEdBRkQsTUFFTztBQUNMRCxJQUFBQSxLQUFLLEdBQUdFLFdBQVI7QUFDRDs7QUFFRCxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVMLFFBQWhCO0FBQTBCLElBQUEsR0FBRyxFQUFFbkI7QUFBL0IsS0FBOENELFVBQTlDLEdBQ0d1QixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDbEIsS0FBRCxFQUFXO0FBQUE7O0FBQ3BCLFFBQU1tQixRQUFRLEdBQUdwQixVQUFVLENBQ3pCcUIsUUFBUSxDQUFDcEIsS0FBRCxFQUFRLEVBQVIsQ0FEaUIsRUFFekJvQixRQUFRLENBQUNuQixPQUFPLElBQUksSUFBWixFQUFrQixFQUFsQixDQUZpQixFQUd6Qm1CLFFBQVEsQ0FBQ2xCLFNBQVMsSUFBSSxJQUFkLEVBQW9CLEVBQXBCLENBSGlCLEVBSXpCa0IsUUFBUSxDQUFDakIsT0FBTyxJQUFJLElBQVosRUFBa0IsRUFBbEIsQ0FKaUIsRUFLekJpQixRQUFRLENBQUNoQixTQUFTLElBQUksSUFBZCxFQUFvQixFQUFwQixDQUxpQixFQU16QmhCLFFBTnlCLENBQTNCOztBQVFBLFFBQ0csQ0FBQytCLFFBQVEsSUFBS3BDLGFBQWEsSUFBSUEsYUFBYSxDQUFDaUIsS0FBRCxDQUE1QyxLQUNDVCxJQUFJLEtBQUssTUFEWCxJQUVDUCxlQUFlLElBQUlBLGVBQWUsQ0FBQ2dCLEtBQUQsQ0FBbEMsSUFBNkNULElBQUksS0FBSyxRQUh6RCxFQUlFO0FBR0EsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTThCLFlBQVksR0FBRyxzQ0FBY25ELE1BQWQsd0VBQ2ZBLE1BRGUsY0FDR29CLGFBQWEsS0FBS1UsS0FEckIsMkNBRWY5QixNQUZlLGdCQUVLaUQsUUFGTCxpQkFBckI7QUFJQSxXQUNFO0FBQ0UsTUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLE1BQUEsU0FBUyxFQUFFRSxZQUZiO0FBR0UsTUFBQSxHQUFHLEVBQUVyQixLQUhQO0FBSUUsTUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixZQUFJLENBQUNtQixRQUFMLEVBQWU7QUFDYnhCLFVBQUFBLFdBQVcsQ0FBQ0ssS0FBRCxDQUFYO0FBQ0Q7QUFDRjtBQVJILE9BVUdaLFFBQVEsYUFBTVksS0FBTixXQUFtQkEsS0FWOUIsQ0FERjtBQWNELEdBckNBLENBREgsQ0FERjtBQTBDRCxDQXJKQyxDQUZKO0FBMEpBcEIsVUFBVSxDQUFDMEMsU0FBWCxHQUF1QjtBQUlyQnhDLEVBQUFBLFdBQVcsRUFBRXlDLHNCQUFVQyxNQUpGO0FBUXJCekMsRUFBQUEsYUFBYSxFQUFFd0Msc0JBQVVFLElBUko7QUFZckJ6QyxFQUFBQSxlQUFlLEVBQUV1QyxzQkFBVUUsSUFaTjtBQWdCckJ4QyxFQUFBQSxPQUFPLEVBQUVzQyxzQkFBVUcsTUFoQkU7QUFvQnJCeEMsRUFBQUEsT0FBTyxFQUFFcUMsc0JBQVVHLE1BcEJFO0FBd0JyQnZDLEVBQUFBLFFBQVEsRUFBRW9DLHNCQUFVSSxHQXhCQztBQTRCckJ2QyxFQUFBQSxRQUFRLEVBQUVtQyxzQkFBVUssSUE1QkM7QUFnQ3JCdEMsRUFBQUEsYUFBYSxFQUFFaUMsc0JBQVVHLE1BaENKO0FBb0NyQnJDLEVBQUFBLElBQUksRUFBRWtDLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0FwQ2U7QUF3Q3JCdEMsRUFBQUEsSUFBSSxFQUFFZ0Msc0JBQVVJO0FBeENLLENBQXZCO0FBMkNBL0MsVUFBVSxDQUFDa0QsWUFBWCxHQUEwQjtBQUN4QmhELEVBQUFBLFdBQVcsRUFBRSxJQURXO0FBRXhCQyxFQUFBQSxhQUFhLEVBQUVaLElBRlM7QUFHeEJhLEVBQUFBLGVBQWUsRUFBRWIsSUFITztBQUl4QmMsRUFBQUEsT0FBTyxFQUFFLE9BSmU7QUFLeEJDLEVBQUFBLE9BQU8sRUFBRSxPQUxlO0FBTXhCQyxFQUFBQSxRQUFRLEVBQUVoQixJQU5jO0FBT3hCaUIsRUFBQUEsUUFBUSxFQUFFLEtBUGM7QUFReEJFLEVBQUFBLGFBQWEsRUFBRSxJQVJTO0FBU3hCRCxFQUFBQSxJQUFJLEVBQUUsT0FUa0I7QUFVeEJFLEVBQUFBLElBQUksRUFBRTtBQVZrQixDQUExQjs7ZUFhZSxpQkFBS1gsVUFBTCxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlRWZmZWN0LFxuICBtZW1vLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfSBmcm9tIFwiLi4vX3V0aWwvcmFmXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuaW1wb3J0IHsgZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSwgaG91cnMsIG1pbnV0ZXMgfSBmcm9tIFwiLi9jb3JlXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdGltZVwiXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJVGltZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGN1cnJlbnRIb3VyPzogbnVtYmVyIHwgbnVsbFxuICBkaXNhYmxlZEhvdXJzPzogKGhvdXI/OiBzdHJpbmcgfCBudWxsKSA9PiBib29sZWFuIHwgdm9pZFxuICBkaXNhYmxlZE1pbnV0ZXM/OiAobWludXRlPzogc3RyaW5nIHwgbnVsbCkgPT4gYm9vbGVhbiB8IHZvaWRcbiAgbWF4VGltZT86IHN0cmluZyB8IG51bGxcbiAgbWluVGltZT86IHN0cmluZyB8IG51bGxcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nLCB0eXBlOiBcImhvdXJcIiB8IFwibWludXRlXCIpID0+IHZvaWRcbiAgb25seUhvdXI/OiBib29sZWFuXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgc2VsZWN0ZWRWYWx1ZT86IG51bGwgfCBzdHJpbmdcbiAgdHlwZTogXCJob3VyXCIgfCBcIm1pbnV0ZVwiXG59XG5cbmNvbnN0IHNjcm9sbFRvID0gKGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50LCB0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHJlcUFuaW1GcmFtZSA9IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpXG5cbiAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3BcbiAgY29uc3QgcGVyVGljayA9IChkaWZmZXJlbmNlIC8gZHVyYXRpb24pICogMTBcblxuICByZXFBbmltRnJhbWUoKCkgPT4ge1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wICs9IHBlclRpY2tcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT09IHRvKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApXG4gIH0pXG59XG5cbmNvbnN0IFRpbWVTZWxlY3Q6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElUaW1lU2VsZWN0UHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY3VycmVudEhvdXIsXG4gICAgICBkaXNhYmxlZEhvdXJzLFxuICAgICAgZGlzYWJsZWRNaW51dGVzLFxuICAgICAgbWF4VGltZSxcbiAgICAgIG1pblRpbWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9ubHlIb3VyLFxuICAgICAgc2l6ZSxcbiAgICAgIHNlbGVjdGVkVmFsdWUsXG4gICAgICB0eXBlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElUaW1lU2VsZWN0UHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBzZWxlY3Q6IHNlbGVjdFJlZixcbiAgICB9KSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgb25DaGFuZ2UoaXRlbSwgdHlwZSlcbiAgICB9XG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gKFxuICAgICAgdmFsdWU6IG51bWJlcixcbiAgICAgIG1pbkhvdXI6IG51bWJlcixcbiAgICAgIG1pbk1pbnV0ZTogbnVtYmVyLFxuICAgICAgbWF4SG91cjogbnVtYmVyLFxuICAgICAgbWF4TWludXRlOiBudW1iZXIsXG4gICAgICBpc09ubHlIb3VyPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgaWYgKHR5cGUgPT09IFwiaG91clwiKSB7XG4gICAgICAgIC8vIFxi6L+Z6YeM6KaB5rOo5oSP5oqK5pW054K56YCJ5oupIDI0OjAwIOeahOaDheWGteeJueauiuWkhOeQhlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHZhbHVlIDwgbWluSG91ciB8fFxuICAgICAgICAgIHZhbHVlID4gKGlzT25seUhvdXIgJiYgIW1heFRpbWUgPyBcIjI0OjAwXCIgOiBtYXhIb3VyKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICAvLyDlnKjlkIzkuIDkuKrlsI/ml7blhoVcbiAgICAgIGlmIChtaW5Ib3VyID09PSBtYXhIb3VyKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IG1pbk1pbnV0ZSB8fCB2YWx1ZSA+IG1heE1pbnV0ZVxuICAgICAgfVxuICAgICAgLy8g5Zyo5pyA5bCP55qE5bCP5pe25YaF5pe277yM6L+Z5pe25YCZ6KaB5oqKIG1pbk1pbnV0ZSDku6XkuIvnmoQgZGlzYWJsZWRcbiAgICAgIGlmIChtaW5Ib3VyID09PSBjdXJyZW50SG91cikge1xuICAgICAgICByZXR1cm4gdmFsdWUgPCBtaW5NaW51dGVcbiAgICAgIH1cbiAgICAgIC8vIOWcqOacgOWkp+eahOWwj+aXtuWGheaXtu+8jOi/meaXtuWAmeimgeaKiiBtYXhNaW51dGUg5Lul5LiK55qEIGRpc2FibGVkXG4gICAgICBpZiAobWF4SG91ciA9PT0gY3VycmVudEhvdXIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID4gbWF4TWludXRlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVNjcm9sbFRvcCA9IChkdXJhdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoc2VsZWN0UmVmPy5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW06IFBhcnRpYWw8SFRNTERpdkVsZW1lbnQ+ID0gc2VsZWN0UmVmLmN1cnJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICBgJHtwcmVmaXh9LWFjdGl2ZWBcbiAgICAgICAgKVswXVxuICAgICAgICBpZiAoYWN0aXZlSXRlbSkge1xuICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0VG9wIH0gPSBhY3RpdmVJdGVtXG4gICAgICAgICAgaWYgKG9mZnNldFRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgc2Nyb2xsVG8oc2VsZWN0UmVmLmN1cnJlbnQsIG9mZnNldFRvcCwgZHVyYXRpb24pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxlY3RSZWYuY3VycmVudC5zY3JvbGxUb3AgPSBvZmZzZXRUb3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdXBkYXRlU2Nyb2xsVG9wKDApXG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdXBkYXRlU2Nyb2xsVG9wKDEyMClcbiAgICB9LCBbc2VsZWN0ZWRWYWx1ZV0pXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBgJHtwcmVmaXh9LXRpbWVTZWxlY3RgLFxuICAgICAgYCR7cHJlZml4fS0ke2dldENvbXB1dGVkU2l6ZShzaXplLCBzaXplQ29udGV4dCl9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0taW50ZWdlclRpbWVTZWxlY3RgXTogb25seUhvdXIsXG4gICAgICB9XG4gICAgKVxuXG4gICAgY29uc3QgeyBob3VyOiBtaW5Ib3VyLCBtaW51dGU6IG1pbk1pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZShcbiAgICAgIG1pblRpbWVcbiAgICApXG4gICAgY29uc3QgeyBob3VyOiBtYXhIb3VyLCBtaW51dGU6IG1heE1pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZShcbiAgICAgIG1heFRpbWVcbiAgICApXG5cbiAgICBsZXQgaXRlbXM6IHN0cmluZ1tdID0gW11cbiAgICBpZiAodHlwZSA9PT0gXCJtaW51dGVcIikge1xuICAgICAgaXRlbXMgPSBtaW51dGVzXG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1zID0gaG91cnNcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSByZWY9e3NlbGVjdFJlZn0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICB7aXRlbXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gaXNEaXNhYmxlZChcbiAgICAgICAgICAgIHBhcnNlSW50KHZhbHVlLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtaW5Ib3VyIHx8IFwiMDBcIiwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWluTWludXRlIHx8IFwiMDBcIiwgMTApLFxuICAgICAgICAgICAgcGFyc2VJbnQobWF4SG91ciB8fCBcIjI0XCIsIDEwKSxcbiAgICAgICAgICAgIHBhcnNlSW50KG1heE1pbnV0ZSB8fCBcIjU5XCIsIDEwKSxcbiAgICAgICAgICAgIG9ubHlIb3VyXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICgoZGlzYWJsZWQgfHwgKGRpc2FibGVkSG91cnMgJiYgZGlzYWJsZWRIb3Vycyh2YWx1ZSkpKSAmJlxuICAgICAgICAgICAgICB0eXBlID09PSBcImhvdXJcIikgfHxcbiAgICAgICAgICAgIChkaXNhYmxlZE1pbnV0ZXMgJiYgZGlzYWJsZWRNaW51dGVzKHZhbHVlKSAmJiB0eXBlID09PSBcIm1pbnV0ZVwiKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8g5bCP5pe255qEIGRpc2FibGVkIOebtOaOpeS4jeaYvuekuu+8jOiAjOS4jeaYr+WBmiBkaXNhYmxlZCDlpITnkIZcbiAgICAgICAgICAgIC8vIOWIhumSn+eahCBkaXNhYmxlZCDmmL7npLrvvIzlpoLmnpzkvKDlhaXkuoYgZGlzYWJsZWRNaW51dGVzIOWImeS4jeaYvuekulxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpdGVtQ2xhc3NTZXQgPSBjbGFzc05hbWVzKGAke3ByZWZpeH0taXRlbWAsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWFjdGl2ZWBdOiBzZWxlY3RlZFZhbHVlID09PSB2YWx1ZSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW1DbGFzc1NldH1cbiAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge29ubHlIb3VyID8gYCR7dmFsdWV9OjAwYCA6IHZhbHVlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5UaW1lU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOW9k+WJjeWwj+aXtuWAvFxuICAgKi9cbiAgY3VycmVudEhvdXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDkuI3lj6/pgInnmoTlsI/ml7ZcbiAgICovXG4gIGRpc2FibGVkSG91cnM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5LiN5Y+v6YCJ55qE5YiG6ZKfXG4gICAqL1xuICBkaXNhYmxlZE1pbnV0ZXM6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5Y+v6YCJ5pe26Ze05q6155qE5pyA5aSn5YC8XG4gICAqL1xuICBtYXhUaW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5Y+v6YCJ5pe26Ze05q6155qE5pyA5bCP5YC8XG4gICAqL1xuICBtaW5UaW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5pS55Y+Y6YCJ5oup55qE5YC8XG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuaYr+aVtOeCuVxuICAgKi9cbiAgb25seUhvdXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5bey57uP6YCJ5oup55qE5YC8XG4gICAqL1xuICBzZWxlY3RlZFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5Yik5pat6YCJ5oup5qGG55qE57G75Z6LXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuYW55LFxufVxuXG5UaW1lU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY3VycmVudEhvdXI6IG51bGwsXG4gIGRpc2FibGVkSG91cnM6IG5vb3AsXG4gIGRpc2FibGVkTWludXRlczogbm9vcCxcbiAgbWF4VGltZTogXCIyNDowMFwiLFxuICBtaW5UaW1lOiBcIjAwOjAwXCIsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbmx5SG91cjogZmFsc2UsXG4gIHNlbGVjdGVkVmFsdWU6IG51bGwsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdHlwZTogXCJob3VyXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oVGltZVNlbGVjdClcbiJdfQ==