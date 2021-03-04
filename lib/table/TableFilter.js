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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGVGaWx0ZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsImdldEZpbHRlcmVkVmFsdWUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJUYWJsZUZpbHRlciIsImZpbHRlcmVkVmFsdWVQcm9wIiwiZmlsdGVyZWRWYWx1ZSIsImZpbHRlck11bHRpcGxlIiwiZmlsdGVyUG9wb3ZlclByb3BzIiwiZmlsdGVyVmlzaWJsZSIsImZpbHRlcnMiLCJvbkZpbHRlciIsIm9uRmlsdGVyVmlzaWJsZUNoYW5nZSIsInRpdGxlIiwic2V0RmlsdGVyZWRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGFuZGxlQ2hhbmdlIiwiZmlsdGVyZWRWYWx1ZVBhcmFtIiwibmV3VmFsdWUiLCJzZXRUaW1lb3V0IiwicG9wdXAiLCJtYXAiLCJpdGVtIiwidmFsdWUiLCJ0ZXh0IiwiYm9vbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5IiwiYW55IiwiZnVuYyIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsWUFBZjs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEdBQUQsRUFBeUM7QUFDaEUsTUFBSUEsR0FBRyxLQUFLLElBQVIsSUFBZ0JBLEdBQUcsS0FBS0MsU0FBeEIsSUFBcUNELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLENBQXhELEVBQTJEO0FBQ3pELFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRDs7QUFDRCxTQUFPRixHQUFQO0FBQ0QsQ0FMRDs7QUFzQkEsSUFBTUcsV0FBdUQsR0FBRyxTQUExREEsV0FBMEQsT0FTdkM7QUFBQSxNQVJSQyxpQkFRUSxRQVJ2QkMsYUFR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QnBCLEVBQUFBLGNBQWMsRUFBRXFCLHNCQUFVRixJQUpKO0FBUXRCbEIsRUFBQUEsa0JBQWtCLEVBQUVvQixzQkFBVUMsTUFSUjtBQVl0QnZCLEVBQUFBLGFBQWEsRUFBRXNCLHNCQUFVRSxLQVpIO0FBZ0J0QnBCLEVBQUFBLE9BQU8sRUFBRWtCLHNCQUFVRyxHQWhCRztBQW9CdEJ0QixFQUFBQSxhQUFhLEVBQUVtQixzQkFBVUYsSUFwQkg7QUF3QnRCZixFQUFBQSxRQUFRLEVBQUVpQixzQkFBVUksSUF4QkU7QUE0QnRCcEIsRUFBQUEscUJBQXFCLEVBQUVnQixzQkFBVUksSUE1Qlg7QUFnQ3RCbkIsRUFBQUEsS0FBSyxFQUFFZSxzQkFBVUs7QUFoQ0ssQ0FBeEI7QUFtQ0E3QixXQUFXLENBQUM4QixZQUFaLEdBQTJCO0FBQ3pCM0IsRUFBQUEsY0FBYyxFQUFFLEtBRFM7QUFFekJDLEVBQUFBLGtCQUFrQixFQUFFLEVBRks7QUFHekJGLEVBQUFBLGFBQWEsRUFBRSxJQUhVO0FBSXpCRyxFQUFBQSxhQUFhLEVBQUUsSUFKVTtBQUt6QkMsRUFBQUEsT0FBTyxFQUFFLElBTGdCO0FBTXpCQyxFQUFBQSxRQUFRLEVBQUUsSUFOZTtBQU96QkMsRUFBQUEscUJBQXFCLEVBQUUsSUFQRTtBQVF6QkMsRUFBQUEsS0FBSyxFQUFFO0FBUmtCLENBQTNCO2VBV2VULFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiXG5pbXBvcnQgUmFkaW8gZnJvbSBcIi4uL3JhZGlvXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFibGVcIlxuY29uc3QgZ2V0RmlsdGVyZWRWYWx1ZSA9ICh2YWw/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbCkgPT4ge1xuICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW1wiYWxsXCJdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUZpbHRlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGZpbHRlcmVkVmFsdWU/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICBmaWx0ZXJNdWx0aXBsZT86IGJvb2xlYW5cbiAgZmlsdGVyUG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICBmaWx0ZXJzPzogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBSZWFjdC5SZWFjdFRleHQgfT4gfCBudWxsXG4gIGZpbHRlclZpc2libGU/OiBib29sZWFuIHwgbnVsbFxuICBvbkZpbHRlcj86ICgodmFsdWU6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICBvbkZpbHRlclZpc2libGVDaGFuZ2U/OiAoKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQpIHwgbnVsbFxuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOihqOagvOetm+mAiVxuICovXG5jb25zdCBUYWJsZUZpbHRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SVRhYmxlRmlsdGVyUHJvcHM+ID0gKHtcbiAgZmlsdGVyZWRWYWx1ZTogZmlsdGVyZWRWYWx1ZVByb3AsXG4gIGZpbHRlck11bHRpcGxlLFxuICBmaWx0ZXJQb3BvdmVyUHJvcHMsXG4gIGZpbHRlclZpc2libGUsXG4gIGZpbHRlcnMsXG4gIG9uRmlsdGVyLFxuICBvbkZpbHRlclZpc2libGVDaGFuZ2UsXG4gIHRpdGxlLFxufTogSVRhYmxlRmlsdGVyUHJvcHMpID0+IHtcbiAgaWYgKCFmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBbZmlsdGVyZWRWYWx1ZSwgc2V0RmlsdGVyZWRWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICBnZXRGaWx0ZXJlZFZhbHVlKGZpbHRlcmVkVmFsdWVQcm9wKVxuICApXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZpbHRlclZpc2libGUgfHwgZmFsc2UpXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoXG4gICAgZmlsdGVyZWRWYWx1ZVByb3AgIT09IG51bGwgJiZcbiAgICBmaWx0ZXJlZFZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgZmlsdGVyZWRWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZVByb3BcbiAgKSB7XG4gICAgc2V0RmlsdGVyZWRWYWx1ZShmaWx0ZXJlZFZhbHVlUHJvcClcbiAgfVxuXG4gIGlmICh0eXBlb2YgZmlsdGVyVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgJiYgdmlzaWJsZSAhPT0gZmlsdGVyVmlzaWJsZSkge1xuICAgIHNldFZpc2libGUoZmlsdGVyVmlzaWJsZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcbiAgICBmaWx0ZXJlZFZhbHVlUGFyYW06IFJlYWN0LlJlYWN0VGV4dCB8IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWU6IGFueSA9XG4gICAgICBmaWx0ZXJNdWx0aXBsZSAmJiBmaWx0ZXJlZFZhbHVlUGFyYW1cbiAgICAgICAgPyBmaWx0ZXJlZFZhbHVlUGFyYW1cbiAgICAgICAgOiBbZmlsdGVyZWRWYWx1ZVBhcmFtXVxuICAgIGlmIChmaWx0ZXJlZFZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgc2V0RmlsdGVyZWRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uRmlsdGVyKSB7XG4gICAgICBpZiAoZmlsdGVyZWRWYWx1ZVBhcmFtID09PSBcImFsbFwiKSB7XG4gICAgICAgIG9uRmlsdGVyKFtdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25GaWx0ZXIobmV3VmFsdWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZmlsdGVyTXVsdGlwbGUpIHtcbiAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChvbkZpbHRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBvbkZpbHRlclZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG4gIH1cblxuICBsZXQgcG9wdXBcblxuICBpZiAoZmlsdGVyTXVsdGlwbGUpIHtcbiAgICBwb3B1cCA9IChcbiAgICAgIDxDaGVja2JveC5Hcm91cFxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZmlsdGVyTGlzdGB9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17W1wiYWxsXCJdfVxuICAgICAgICB2YWx1ZT17ZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAge2ZpbHRlcnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPENoZWNrYm94IGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxuICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICApKX1cbiAgICAgIDwvQ2hlY2tib3guR3JvdXA+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHBvcHVwID0gKFxuICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWx0ZXJMaXN0YH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPVwiYWxsXCJcbiAgICAgICAgdmFsdWU9e2ZpbHRlcmVkVmFsdWUgPyBmaWx0ZXJlZFZhbHVlWzBdIDogbnVsbH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAgPFJhZGlvIHZhbHVlPVwiYWxsXCI+5YWo6YOoPC9SYWRpbz5cbiAgICAgICAge2ZpbHRlcnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPFJhZGlvIGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxuICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICApKX1cbiAgICAgIDwvUmFkaW8uR3JvdXA+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclxuICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgb25WaXNpYmxlQ2hhbmdlPXsoYm9vbCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbHRlclZpc2libGUgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkZpbHRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBvbkZpbHRlclZpc2libGVDaGFuZ2UoYm9vbClcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHBvcHVwPXtwb3B1cH1cbiAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICAgIHsuLi5maWx0ZXJQb3BvdmVyUHJvcHN9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBkYXRhLXZhbHVlPXtmaWx0ZXJlZFZhbHVlfVxuICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tZmlsdGVyYCwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LWZpbHRlcmVkYF06XG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlICYmIGZpbHRlcmVkVmFsdWUubGVuZ3RoICYmIGZpbHRlcmVkVmFsdWVbMF0gIT09IFwiYWxsXCIsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICAgIDxJY29uIGljb249XCJmaWx0ZXItb3V0bGluZWRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qb3BvdmVyPlxuICApXG59XG5cblRhYmxlRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpuWkmumAiVxuICAgKi9cbiAgZmlsdGVyTXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog562b6YCJIFBvcG92ZXIgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpgI/kvKDnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGZpbHRlclBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOWPr+S7peS7juWklumDqOS8oOWFpeetm+mAieeahOWAvO+8jG51bGwsIFtdLCDpg73kvJror4bliKvkuLrmnKrnrZvpgInnirbmgIFcbiAgICovXG4gIGZpbHRlcmVkVmFsdWU6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqXG4gICAqIOetm+mAiemhue+8jOagvOW8j++8mlt7IHRleHQ6IFwi5pyL5Y+L5ZyI5bm/5ZGKXCIsIHZhbHVlOiAnMicgfV1cbiAgICovXG4gIGZpbHRlcnM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDku47lpJbpg6jmjqfliLYgZmlsdGVyIFBvcG92ZXIg55qE5pi+56S6XG4gICAqL1xuICBmaWx0ZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOetm+mAieaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDnrZvpgIkgcG9wdXAgdmlzaWJsZSDlj5jljJbml7bnmoQgaGFuZGxlcu+8jOWPguaVsCAoYm9vbCwgY29sKVxuICAgKi9cbiAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIHRpdGxlXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG59XG5cblRhYmxlRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmlsdGVyTXVsdGlwbGU6IGZhbHNlLFxuICBmaWx0ZXJQb3BvdmVyUHJvcHM6IHt9LFxuICBmaWx0ZXJlZFZhbHVlOiBudWxsLFxuICBmaWx0ZXJWaXNpYmxlOiBudWxsLFxuICBmaWx0ZXJzOiBudWxsLFxuICBvbkZpbHRlcjogbnVsbCxcbiAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlOiBudWxsLFxuICB0aXRsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVGaWx0ZXJcbiJdfQ==