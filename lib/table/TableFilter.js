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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGVGaWx0ZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsImdldEZpbHRlcmVkVmFsdWUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJUYWJsZUZpbHRlciIsImZpbHRlcmVkVmFsdWVQcm9wIiwiZmlsdGVyZWRWYWx1ZSIsImZpbHRlck11bHRpcGxlIiwiZmlsdGVyUG9wb3ZlclByb3BzIiwiZmlsdGVyVmlzaWJsZSIsImZpbHRlcnMiLCJvbkZpbHRlciIsIm9uRmlsdGVyVmlzaWJsZUNoYW5nZSIsInRpdGxlIiwic2V0RmlsdGVyZWRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGFuZGxlQ2hhbmdlIiwiZmlsdGVyZWRWYWx1ZVBhcmFtIiwibmV3VmFsdWUiLCJzZXRUaW1lb3V0IiwicG9wdXAiLCJtYXAiLCJpdGVtIiwidmFsdWUiLCJ0ZXh0IiwiYm9vbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5IiwiYW55IiwiZnVuYyIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxZQUFmOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsR0FBRCxFQUF5QztBQUNoRSxNQUFJQSxHQUFHLEtBQUssSUFBUixJQUFnQkEsR0FBRyxLQUFLQyxTQUF4QixJQUFxQ0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsQ0FBeEQsRUFBMkQ7QUFDekQsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEOztBQUNELFNBQU9GLEdBQVA7QUFDRCxDQUxEOztBQXNCQSxJQUFNRyxXQUF1RCxHQUFHLFNBQTFEQSxXQUEwRCxPQVN2QztBQUFBLE1BUlJDLGlCQVFRLFFBUnZCQyxhQVF1QjtB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QixFQUFBQSxjQUFjLEVBQUVxQixzQkFBVUYsSUFKSjtBQVF0QmxCLEVBQUFBLGtCQUFrQixFQUFFb0Isc0JBQVVDLE1BUlI7QUFZdEJ2QixFQUFBQSxhQUFhLEVBQUVzQixzQkFBVUUsS0FaSDtBQWdCdEJwQixFQUFBQSxPQUFPLEVBQUVrQixzQkFBVUcsR0FoQkc7QUFvQnRCdEIsRUFBQUEsYUFBYSxFQUFFbUIsc0JBQVVGLElBcEJIO0FBd0J0QmYsRUFBQUEsUUFBUSxFQUFFaUIsc0JBQVVJLElBeEJFO0FBNEJ0QnBCLEVBQUFBLHFCQUFxQixFQUFFZ0Isc0JBQVVJLElBNUJYO0FBZ0N0Qm5CLEVBQUFBLEtBQUssRUFBRWUsc0JBQVVLO0FBaENLLENBQXhCO0FBbUNBN0IsV0FBVyxDQUFDOEIsWUFBWixHQUEyQjtBQUN6QjNCLEVBQUFBLGNBQWMsRUFBRSxLQURTO0FBRXpCQyxFQUFBQSxrQkFBa0IsRUFBRSxFQUZLO0FBR3pCRixFQUFBQSxhQUFhLEVBQUUsSUFIVTtBQUl6QkcsRUFBQUEsYUFBYSxFQUFFLElBSlU7QUFLekJDLEVBQUFBLE9BQU8sRUFBRSxJQUxnQjtBQU16QkMsRUFBQUEsUUFBUSxFQUFFLElBTmU7QUFPekJDLEVBQUFBLHFCQUFxQixFQUFFLElBUEU7QUFRekJDLEVBQUFBLEtBQUssRUFBRTtBQVJrQixDQUEzQjtlQVdlVCxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIlxuaW1wb3J0IFJhZGlvIGZyb20gXCIuLi9yYWRpb1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRhYmxlXCJcbmNvbnN0IGdldEZpbHRlcmVkVmFsdWUgPSAodmFsPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGwpID0+IHtcbiAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtcImFsbFwiXVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVGaWx0ZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBmaWx0ZXJlZFZhbHVlPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgZmlsdGVyTXVsdGlwbGU/OiBib29sZWFuXG4gIGZpbHRlclBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgZmlsdGVycz86IEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogUmVhY3QuUmVhY3RUZXh0IH0+IHwgbnVsbFxuICBmaWx0ZXJWaXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbiAgb25GaWx0ZXI/OiAoKHZhbHVlOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlPzogKCh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDooajmoLznrZvpgIlcbiAqL1xuY29uc3QgVGFibGVGaWx0ZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElUYWJsZUZpbHRlclByb3BzPiA9ICh7XG4gIGZpbHRlcmVkVmFsdWU6IGZpbHRlcmVkVmFsdWVQcm9wLFxuICBmaWx0ZXJNdWx0aXBsZSxcbiAgZmlsdGVyUG9wb3ZlclByb3BzLFxuICBmaWx0ZXJWaXNpYmxlLFxuICBmaWx0ZXJzLFxuICBvbkZpbHRlcixcbiAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlLFxuICB0aXRsZSxcbn06IElUYWJsZUZpbHRlclByb3BzKSA9PiB7XG4gIGlmICghZmlsdGVycykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgW2ZpbHRlcmVkVmFsdWUsIHNldEZpbHRlcmVkVmFsdWVdID0gdXNlU3RhdGUoXG4gICAgZ2V0RmlsdGVyZWRWYWx1ZShmaWx0ZXJlZFZhbHVlUHJvcClcbiAgKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmaWx0ZXJWaXNpYmxlIHx8IGZhbHNlKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKFxuICAgIGZpbHRlcmVkVmFsdWVQcm9wICE9PSBudWxsICYmXG4gICAgZmlsdGVyZWRWYWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJlxuICAgIGZpbHRlcmVkVmFsdWUgIT09IGZpbHRlcmVkVmFsdWVQcm9wXG4gICkge1xuICAgIHNldEZpbHRlcmVkVmFsdWUoZmlsdGVyZWRWYWx1ZVByb3ApXG4gIH1cblxuICBpZiAodHlwZW9mIGZpbHRlclZpc2libGUgPT09IFwiYm9vbGVhblwiICYmIHZpc2libGUgIT09IGZpbHRlclZpc2libGUpIHtcbiAgICBzZXRWaXNpYmxlKGZpbHRlclZpc2libGUpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXG4gICAgZmlsdGVyZWRWYWx1ZVBhcmFtOiBSZWFjdC5SZWFjdFRleHQgfCBBcnJheTxSZWFjdC5SZWFjdFRleHQ+XG4gICkgPT4ge1xuICAgIGNvbnN0IG5ld1ZhbHVlOiBhbnkgPVxuICAgICAgZmlsdGVyTXVsdGlwbGUgJiYgZmlsdGVyZWRWYWx1ZVBhcmFtXG4gICAgICAgID8gZmlsdGVyZWRWYWx1ZVBhcmFtXG4gICAgICAgIDogW2ZpbHRlcmVkVmFsdWVQYXJhbV1cbiAgICBpZiAoZmlsdGVyZWRWYWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgIHNldEZpbHRlcmVkVmFsdWUobmV3VmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkZpbHRlcikge1xuICAgICAgaWYgKGZpbHRlcmVkVmFsdWVQYXJhbSA9PT0gXCJhbGxcIikge1xuICAgICAgICBvbkZpbHRlcihbXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uRmlsdGVyKG5ld1ZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZpbHRlck11bHRpcGxlKSB7XG4gICAgICAvLyDlu7bov5/mmK/kuLrkuoborqnnirbmgIHnmoTlj5jljJblnKjop4bop4nkuIrlhYjooqvmjqXlj5dcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAob25GaWx0ZXJWaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICB9LCAxMDApXG4gICAgfVxuICB9XG5cbiAgbGV0IHBvcHVwXG5cbiAgaWYgKGZpbHRlck11bHRpcGxlKSB7XG4gICAgcG9wdXAgPSAoXG4gICAgICA8Q2hlY2tib3guR3JvdXBcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWZpbHRlckxpc3RgfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e1tcImFsbFwiXX1cbiAgICAgICAgdmFsdWU9e2ZpbHRlcmVkVmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICA+XG4gICAgICAgIHtmaWx0ZXJzLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8Q2hlY2tib3gga2V5PXtpdGVtLnZhbHVlfSB2YWx1ZT17aXRlbS52YWx1ZX0+XG4gICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICkpfVxuICAgICAgPC9DaGVja2JveC5Hcm91cD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcG9wdXAgPSAoXG4gICAgICA8UmFkaW8uR3JvdXBcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWZpbHRlckxpc3RgfVxuICAgICAgICBkZWZhdWx0VmFsdWU9XCJhbGxcIlxuICAgICAgICB2YWx1ZT17ZmlsdGVyZWRWYWx1ZSA/IGZpbHRlcmVkVmFsdWVbMF0gOiBudWxsfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICA8UmFkaW8gdmFsdWU9XCJhbGxcIj7lhajpg6g8L1JhZGlvPlxuICAgICAgICB7ZmlsdGVycy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPFJhZGlvIGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxuICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICApKX1cbiAgICAgIDwvUmFkaW8uR3JvdXA+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclxuICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgb25WaXNpYmxlQ2hhbmdlPXtib29sID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXJWaXNpYmxlICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgICAgfVxuICAgICAgICBpZiAob25GaWx0ZXJWaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlKGJvb2wpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBwb3B1cD17cG9wdXB9XG4gICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgcGxhY2VtZW50PVwiYm90dG9tTGVmdFwiXG4gICAgICB7Li4uZmlsdGVyUG9wb3ZlclByb3BzfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgZGF0YS12YWx1ZT17ZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWZpbHRlcmAsIHtcbiAgICAgICAgICBbYCR7cHJlZml4fS1maWx0ZXJlZGBdOlxuICAgICAgICAgICAgZmlsdGVyZWRWYWx1ZSAmJiBmaWx0ZXJlZFZhbHVlLmxlbmd0aCAmJiBmaWx0ZXJlZFZhbHVlWzBdICE9PSBcImFsbFwiLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgICA8SWNvbiBpY29uPVwiZmlsdGVyLW91dGxpbmVkXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUG9wb3Zlcj5cbiAgKVxufVxuXG5UYWJsZUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKblpJrpgIlcbiAgICovXG4gIGZpbHRlck11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOetm+mAiSBQb3BvdmVyIHByb3Bz77yM5Lya5bCG5q2k5a+56LGh6YCP5Lyg57uZIDxQb3BvdmVyIC8+XG4gICAqL1xuICBmaWx0ZXJQb3BvdmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlj6/ku6Xku47lpJbpg6jkvKDlhaXnrZvpgInnmoTlgLzvvIxudWxsLCBbXSwg6YO95Lya6K+G5Yir5Li65pyq562b6YCJ54q25oCBXG4gICAqL1xuICBmaWx0ZXJlZFZhbHVlOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKlxuICAgKiDnrZvpgInpobnvvIzmoLzlvI/vvJpbeyB0ZXh0OiBcIuaci+WPi+WciOW5v+WRilwiLCB2YWx1ZTogJzInIH1dXG4gICAqL1xuICBmaWx0ZXJzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5LuO5aSW6YOo5o6n5Yi2IGZpbHRlciBQb3BvdmVyIOeahOaYvuekulxuICAgKi9cbiAgZmlsdGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDnrZvpgInml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25GaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog562b6YCJIHBvcHVwIHZpc2libGUg5Y+Y5YyW5pe255qEIGhhbmRsZXLvvIzlj4LmlbAgKGJvb2wsIGNvbClcbiAgICovXG4gIG9uRmlsdGVyVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiB0aXRsZVxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5UYWJsZUZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGZpbHRlck11bHRpcGxlOiBmYWxzZSxcbiAgZmlsdGVyUG9wb3ZlclByb3BzOiB7fSxcbiAgZmlsdGVyZWRWYWx1ZTogbnVsbCxcbiAgZmlsdGVyVmlzaWJsZTogbnVsbCxcbiAgZmlsdGVyczogbnVsbCxcbiAgb25GaWx0ZXI6IG51bGwsXG4gIG9uRmlsdGVyVmlzaWJsZUNoYW5nZTogbnVsbCxcbiAgdGl0bGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlRmlsdGVyXG4iXX0=