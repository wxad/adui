"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _popover = _interopRequireDefault(require("../popover"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _radio = _interopRequireDefault(require("../radio"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var prefix = "adui-table";

var getFilteredValue = function getFilteredValue(val) {
  if (val === null || val === undefined || val.length === 0) {
    return ["all"];
  }

  return val;
};

var TableFilter = function TableFilter(_ref) {
  var filteredValueProp = _ref.filteredValue,
      filterMultiple = _ref.filterMultiple,
      filterPopoverProps = _ref.filterPopoverProps,
      filterVisible = _ref.filterVisible,
      filters = _ref.filters,
      onFilter = _ref.onFilter,
      onFilterVisibleChange = _ref.onFilterVisibleChange,
      title = _ref.title;

  if (!filters) {
    return null;
  }

  var _useState = (0, _react.useState)(getFilteredValue(filteredValueProp)),
      _useState2 = _slicedToArray(_useState, 2),
      filteredValue = _useState2[0],
      setFilteredValue = _useState2[1];

  var _useState3 = (0, _react.useState)(filterVisible || false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  if (filteredValueProp !== null && filteredValueProp !== undefined && filteredValue !== filteredValueProp) {
    setFilteredValue(filteredValueProp);
  }

  if (typeof filterVisible === "boolean" && visible !== filterVisible) {
    setVisible(filterVisible);
  }

  var handleChange = function handleChange(filteredValueParam) {
    var newValue = filterMultiple && filteredValueParam ? filteredValueParam : [filteredValueParam];

    if (filteredValueProp === null) {
      setFilteredValue(newValue);
    }

    if (onFilter) {
      if (filteredValueParam === "all") {
        onFilter([]);
      } else {
        onFilter(newValue);
      }
    }

    if (!filterMultiple) {
      setTimeout(function () {
        if (onFilterVisibleChange) {
          onFilterVisibleChange(false);
        }

        setVisible(false);
      }, 100);
    }
  };

  var popup;

  if (filterMultiple) {
    popup = _react["default"].createElement(_checkbox["default"].Group, {
      className: "".concat(prefix, "-filterList"),
      defaultValue: ["all"],
      value: filteredValue,
      onChange: handleChange
    }, filters.map(function (item) {
      return _react["default"].createElement(_checkbox["default"], {
        key: item.value,
        value: item.value
      }, item.text);
    }));
  } else {
    popup = _react["default"].createElement(_radio["default"].Group, {
      className: "".concat(prefix, "-filterList"),
      defaultValue: "all",
      value: filteredValue ? filteredValue[0] : null,
      onChange: handleChange
    }, _react["default"].createElement(_radio["default"], {
      value: "all"
    }, "\u5168\u90E8"), filters.map(function (item) {
      return _react["default"].createElement(_radio["default"], {
        key: item.value,
        value: item.value
      }, item.text);
    }));
  }

  return _react["default"].createElement(_popover["default"], _extends({
    arrowed: false,
    visible: visible,
    onVisibleChange: function onVisibleChange(bool) {
      if (typeof filterVisible !== "boolean") {
        setVisible(bool);
      }

      if (onFilterVisibleChange) {
        onFilterVisibleChange(bool);
      }
    },
    popup: popup,
    trigger: "click",
    placement: "bottomLeft"
  }, filterPopoverProps), _react["default"].createElement("div", {
    "data-value": filteredValue,
    role: "columnheader",
    className: (0, _classnames["default"])("".concat(prefix, "-filter"), _defineProperty({}, "".concat(prefix, "-filtered"), filteredValue && filteredValue.length && filteredValue[0] !== "all"))
  }, title, _react["default"].createElement(_icon["default"], {
    icon: "filter-outlined"
  })));
};

TableFilter.propTypes = {
  filterMultiple: _propTypes["default"].bool,
  filterPopoverProps: _propTypes["default"].object,
  filteredValue: _propTypes["default"].array,
  filters: _propTypes["default"].any,
  filterVisible: _propTypes["default"].bool,
  onFilter: _propTypes["default"].func,
  onFilterVisibleChange: _propTypes["default"].func,
  title: _propTypes["default"].node
};
TableFilter.defaultProps = {
  filterMultiple: false,
  filterPopoverProps: {},
  filteredValue: null,
  filterVisible: null,
  filters: null,
  onFilter: null,
  onFilterVisibleChange: null,
  title: null
};
var _default = TableFilter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGVGaWx0ZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsImdldEZpbHRlcmVkVmFsdWUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJUYWJsZUZpbHRlciIsImZpbHRlcmVkVmFsdWVQcm9wIiwiZmlsdGVyZWRWYWx1ZSIsImZpbHRlck11bHRpcGxlIiwiZmlsdGVyUG9wb3ZlclByb3BzIiwiZmlsdGVyVmlzaWJsZSIsImZpbHRlcnMiLCJvbkZpbHRlciIsIm9uRmlsdGVyVmlzaWJsZUNoYW5nZSIsInRpdGxlIiwic2V0RmlsdGVyZWRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGFuZGxlQ2hhbmdlIiwiZmlsdGVyZWRWYWx1ZVBhcmFtIiwibmV3VmFsdWUiLCJzZXRUaW1lb3V0IiwicG9wdXAiLCJtYXAiLCJpdGVtIiwidmFsdWUiLCJ0ZXh0IiwiYm9vbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5IiwiYW55IiwiZnVuYyIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsWUFBZjs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEdBQUQsRUFBeUM7QUFDaEUsTUFBSUEsR0FBRyxLQUFLLElBQVIsSUFBZ0JBLEdBQUcsS0FBS0MsU0FBeEIsSUFBcUNELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLENBQXhELEVBQTJEO0FBQ3pELFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRDs7QUFDRCxTQUFPRixHQUFQO0FBQ0QsQ0FMRDs7QUFzQkEsSUFBTUcsV0FBdUQsR0FBRyxTQUExREEsV0FBMEQsT0FTdkM7QUFBQSxNQVJSQyxpQkFRUSxRQVJ2QkMsYUFR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SXRCcEIsRUFBQUEsY0FBYyxFQUFFcUIsc0JBQVVGLElBSko7QUFRdEJsQixFQUFBQSxrQkFBa0IsRUFBRW9CLHNCQUFVQyxNQVJSO0FBWXRCdkIsRUFBQUEsYUFBYSxFQUFFc0Isc0JBQVVFLEtBWkg7QUFnQnRCcEIsRUFBQUEsT0FBTyxFQUFFa0Isc0JBQVVHLEdBaEJHO0FBb0J0QnRCLEVBQUFBLGFBQWEsRUFBRW1CLHNCQUFVRixJQXBCSDtBQXdCdEJmLEVBQUFBLFFBQVEsRUFBRWlCLHNCQUFVSSxJQXhCRTtBQTRCdEJwQixFQUFBQSxxQkFBcUIsRUFBRWdCLHNCQUFVSSxJQTVCWDtBQWdDdEJuQixFQUFBQSxLQUFLLEVBQUVlLHNCQUFVSztBQWhDSyxDQUF4QjtBQW1DQTdCLFdBQVcsQ0FBQzhCLFlBQVosR0FBMkI7QUFDekIzQixFQUFBQSxjQUFjLEVBQUUsS0FEUztBQUV6QkMsRUFBQUEsa0JBQWtCLEVBQUUsRUFGSztBQUd6QkYsRUFBQUEsYUFBYSxFQUFFLElBSFU7QUFJekJHLEVBQUFBLGFBQWEsRUFBRSxJQUpVO0FBS3pCQyxFQUFBQSxPQUFPLEVBQUUsSUFMZ0I7QUFNekJDLEVBQUFBLFFBQVEsRUFBRSxJQU5lO0FBT3pCQyxFQUFBQSxxQkFBcUIsRUFBRSxJQVBFO0FBUXpCQyxFQUFBQSxLQUFLLEVBQUU7QUFSa0IsQ0FBM0I7ZUFXZVQsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94XCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi4vcmFkaW9cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJsZVwiXG5jb25zdCBnZXRGaWx0ZXJlZFZhbHVlID0gKHZhbD86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsKSA9PiB7XG4gIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQgfHwgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXCJhbGxcIl1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlRmlsdGVyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgZmlsdGVyZWRWYWx1ZT86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIGZpbHRlck11bHRpcGxlPzogYm9vbGVhblxuICBmaWx0ZXJQb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIGZpbHRlcnM/OiBBcnJheTx7IHRleHQ6IHN0cmluZzsgdmFsdWU6IFJlYWN0LlJlYWN0VGV4dCB9PiB8IG51bGxcbiAgZmlsdGVyVmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIG9uRmlsdGVyPzogKCh2YWx1ZTogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PikgPT4gdm9pZCkgfCBudWxsXG4gIG9uRmlsdGVyVmlzaWJsZUNoYW5nZT86ICgodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZCkgfCBudWxsXG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog6KGo5qC8562b6YCJXG4gKi9cbmNvbnN0IFRhYmxlRmlsdGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJVGFibGVGaWx0ZXJQcm9wcz4gPSAoe1xuICBmaWx0ZXJlZFZhbHVlOiBmaWx0ZXJlZFZhbHVlUHJvcCxcbiAgZmlsdGVyTXVsdGlwbGUsXG4gIGZpbHRlclBvcG92ZXJQcm9wcyxcbiAgZmlsdGVyVmlzaWJsZSxcbiAgZmlsdGVycyxcbiAgb25GaWx0ZXIsXG4gIG9uRmlsdGVyVmlzaWJsZUNoYW5nZSxcbiAgdGl0bGUsXG59OiBJVGFibGVGaWx0ZXJQcm9wcykgPT4ge1xuICBpZiAoIWZpbHRlcnMpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IFtmaWx0ZXJlZFZhbHVlLCBzZXRGaWx0ZXJlZFZhbHVlXSA9IHVzZVN0YXRlKFxuICAgIGdldEZpbHRlcmVkVmFsdWUoZmlsdGVyZWRWYWx1ZVByb3ApXG4gIClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmlsdGVyVmlzaWJsZSB8fCBmYWxzZSlcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChcbiAgICBmaWx0ZXJlZFZhbHVlUHJvcCAhPT0gbnVsbCAmJlxuICAgIGZpbHRlcmVkVmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiZcbiAgICBmaWx0ZXJlZFZhbHVlICE9PSBmaWx0ZXJlZFZhbHVlUHJvcFxuICApIHtcbiAgICBzZXRGaWx0ZXJlZFZhbHVlKGZpbHRlcmVkVmFsdWVQcm9wKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBmaWx0ZXJWaXNpYmxlID09PSBcImJvb2xlYW5cIiAmJiB2aXNpYmxlICE9PSBmaWx0ZXJWaXNpYmxlKSB7XG4gICAgc2V0VmlzaWJsZShmaWx0ZXJWaXNpYmxlKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxuICAgIGZpbHRlcmVkVmFsdWVQYXJhbTogUmVhY3QuUmVhY3RUZXh0IHwgQXJyYXk8UmVhY3QuUmVhY3RUZXh0PlxuICApID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZTogYW55ID1cbiAgICAgIGZpbHRlck11bHRpcGxlICYmIGZpbHRlcmVkVmFsdWVQYXJhbVxuICAgICAgICA/IGZpbHRlcmVkVmFsdWVQYXJhbVxuICAgICAgICA6IFtmaWx0ZXJlZFZhbHVlUGFyYW1dXG4gICAgaWYgKGZpbHRlcmVkVmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICBzZXRGaWx0ZXJlZFZhbHVlKG5ld1ZhbHVlKVxuICAgIH1cbiAgICBpZiAob25GaWx0ZXIpIHtcbiAgICAgIGlmIChmaWx0ZXJlZFZhbHVlUGFyYW0gPT09IFwiYWxsXCIpIHtcbiAgICAgICAgb25GaWx0ZXIoW10pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkZpbHRlcihuZXdWYWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaWx0ZXJNdWx0aXBsZSkge1xuICAgICAgLy8g5bu26L+f5piv5Li65LqG6K6p54q25oCB55qE5Y+Y5YyW5Zyo6KeG6KeJ5LiK5YWI6KKr5o6l5Y+XXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKG9uRmlsdGVyVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgIG9uRmlsdGVyVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgfSwgMTAwKVxuICAgIH1cbiAgfVxuXG4gIGxldCBwb3B1cFxuXG4gIGlmIChmaWx0ZXJNdWx0aXBsZSkge1xuICAgIHBvcHVwID0gKFxuICAgICAgPENoZWNrYm94Lkdyb3VwXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWx0ZXJMaXN0YH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtbXCJhbGxcIl19XG4gICAgICAgIHZhbHVlPXtmaWx0ZXJlZFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICB7ZmlsdGVycy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPENoZWNrYm94IGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxuICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICApKX1cbiAgICAgIDwvQ2hlY2tib3guR3JvdXA+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHBvcHVwID0gKFxuICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWx0ZXJMaXN0YH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPVwiYWxsXCJcbiAgICAgICAgdmFsdWU9e2ZpbHRlcmVkVmFsdWUgPyBmaWx0ZXJlZFZhbHVlWzBdIDogbnVsbH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAgPFJhZGlvIHZhbHVlPVwiYWxsXCI+5YWo6YOoPC9SYWRpbz5cbiAgICAgICAge2ZpbHRlcnMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxSYWRpbyBrZXk9e2l0ZW0udmFsdWV9IHZhbHVlPXtpdGVtLnZhbHVlfT5cbiAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgPC9SYWRpbz5cbiAgICAgICAgKSl9XG4gICAgICA8L1JhZGlvLkdyb3VwPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBvcG92ZXJcbiAgICAgIGFycm93ZWQ9e2ZhbHNlfVxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgIG9uVmlzaWJsZUNoYW5nZT17Ym9vbCA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsdGVyVmlzaWJsZSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uRmlsdGVyVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgIG9uRmlsdGVyVmlzaWJsZUNoYW5nZShib29sKVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgcG9wdXA9e3BvcHVwfVxuICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIlxuICAgICAgey4uLmZpbHRlclBvcG92ZXJQcm9wc31cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtdmFsdWU9e2ZpbHRlcmVkVmFsdWV9XG4gICAgICAgIHJvbGU9XCJjb2x1bW5oZWFkZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1maWx0ZXJgLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tZmlsdGVyZWRgXTpcbiAgICAgICAgICAgIGZpbHRlcmVkVmFsdWUgJiYgZmlsdGVyZWRWYWx1ZS5sZW5ndGggJiYgZmlsdGVyZWRWYWx1ZVswXSAhPT0gXCJhbGxcIixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgICAgPEljb24gaWNvbj1cImZpbHRlci1vdXRsaW5lZFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BvcG92ZXI+XG4gIClcbn1cblxuVGFibGVGaWx0ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm5aSa6YCJXG4gICAqL1xuICBmaWx0ZXJNdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDnrZvpgIkgUG9wb3ZlciBwcm9wc++8jOS8muWwhuatpOWvueixoemAj+S8oOe7mSA8UG9wb3ZlciAvPlxuICAgKi9cbiAgZmlsdGVyUG9wb3ZlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5Y+v5Lul5LuO5aSW6YOo5Lyg5YWl562b6YCJ55qE5YC877yMbnVsbCwgW10sIOmDveS8muivhuWIq+S4uuacquetm+mAieeKtuaAgVxuICAgKi9cbiAgZmlsdGVyZWRWYWx1ZTogUHJvcFR5cGVzLmFycmF5LFxuICAvKipcbiAgICog562b6YCJ6aG577yM5qC85byP77yaW3sgdGV4dDogXCLmnIvlj4vlnIjlub/lkYpcIiwgdmFsdWU6ICcyJyB9XVxuICAgKi9cbiAgZmlsdGVyczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOS7juWklumDqOaOp+WItiBmaWx0ZXIgUG9wb3ZlciDnmoTmmL7npLpcbiAgICovXG4gIGZpbHRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog562b6YCJ5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOetm+mAiSBwb3B1cCB2aXNpYmxlIOWPmOWMluaXtueahCBoYW5kbGVy77yM5Y+C5pWwIChib29sLCBjb2wpXG4gICAqL1xuICBvbkZpbHRlclZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogdGl0bGVcbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuVGFibGVGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBmaWx0ZXJNdWx0aXBsZTogZmFsc2UsXG4gIGZpbHRlclBvcG92ZXJQcm9wczoge30sXG4gIGZpbHRlcmVkVmFsdWU6IG51bGwsXG4gIGZpbHRlclZpc2libGU6IG51bGwsXG4gIGZpbHRlcnM6IG51bGwsXG4gIG9uRmlsdGVyOiBudWxsLFxuICBvbkZpbHRlclZpc2libGVDaGFuZ2U6IG51bGwsXG4gIHRpdGxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUZpbHRlclxuIl19