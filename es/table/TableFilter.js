function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import Popover from "../popover";
import Checkbox from "../checkbox";
import Radio from "../radio";
import "./style";
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

  var _useState = useState(getFilteredValue(filteredValueProp)),
      _useState2 = _slicedToArray(_useState, 2),
      filteredValue = _useState2[0],
      setFilteredValue = _useState2[1];

  var _useState3 = useState(filterVisible || false),
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
    popup = React.createElement(Checkbox.Group, {
      className: "".concat(prefix, "-filterList"),
      defaultValue: ["all"],
      value: filteredValue,
      onChange: handleChange
    }, filters.map(function (item) {
      return React.createElement(Checkbox, {
        key: item.value,
        value: item.value
      }, item.text);
    }));
  } else {
    popup = React.createElement(Radio.Group, {
      className: "".concat(prefix, "-filterList"),
      defaultValue: "all",
      value: filteredValue ? filteredValue[0] : null,
      onChange: handleChange
    }, React.createElement(Radio, {
      value: "all"
    }, "\u5168\u90E8"), filters.map(function (item) {
      return React.createElement(Radio, {
        key: item.value,
        value: item.value
      }, item.text);
    }));
  }

  return React.createElement(Popover, _extends({
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
  }, filterPopoverProps), React.createElement("div", {
    "data-value": filteredValue,
    role: "columnheader",
    className: classNames("".concat(prefix, "-filter"), _defineProperty({}, "".concat(prefix, "-filtered"), filteredValue && filteredValue.length && filteredValue[0] !== "all"))
  }, title, React.createElement(Icon, {
    icon: "filter-outlined"
  })));
};

TableFilter.propTypes = {
  filterMultiple: PropTypes.bool,
  filterPopoverProps: PropTypes.object,
  filteredValue: PropTypes.array,
  filters: PropTypes.any,
  filterVisible: PropTypes.bool,
  onFilter: PropTypes.func,
  onFilterVisibleChange: PropTypes.func,
  title: PropTypes.node
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
export default TableFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGVGaWx0ZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiSWNvbiIsIlBvcG92ZXIiLCJDaGVja2JveCIsIlJhZGlvIiwicHJlZml4IiwiZ2V0RmlsdGVyZWRWYWx1ZSIsInZhbCIsInVuZGVmaW5lZCIsImxlbmd0aCIsIlRhYmxlRmlsdGVyIiwiZmlsdGVyZWRWYWx1ZVByb3AiLCJmaWx0ZXJlZFZhbHVlIiwiZmlsdGVyTXVsdGlwbGUiLCJmaWx0ZXJQb3BvdmVyUHJvcHMiLCJmaWx0ZXJWaXNpYmxlIiwiZmlsdGVycyIsIm9uRmlsdGVyIiwib25GaWx0ZXJWaXNpYmxlQ2hhbmdlIiwidGl0bGUiLCJzZXRGaWx0ZXJlZFZhbHVlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJoYW5kbGVDaGFuZ2UiLCJmaWx0ZXJlZFZhbHVlUGFyYW0iLCJuZXdWYWx1ZSIsInNldFRpbWVvdXQiLCJwb3B1cCIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsInRleHQiLCJib29sIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiYXJyYXkiLCJhbnkiLCJmdW5jIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFNBQWpCO0FBQ0EsT0FBT0MsT0FBUCxNQUF1QyxZQUF2QztBQUNBLE9BQU9DLFFBQVAsTUFBcUIsYUFBckI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFVBQWxCO0FBQ0EsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLFlBQWY7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxH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WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiXG5pbXBvcnQgUmFkaW8gZnJvbSBcIi4uL3JhZGlvXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFibGVcIlxuY29uc3QgZ2V0RmlsdGVyZWRWYWx1ZSA9ICh2YWw/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbCkgPT4ge1xuICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW1wiYWxsXCJdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUZpbHRlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGZpbHRlcmVkVmFsdWU/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICBmaWx0ZXJNdWx0aXBsZT86IGJvb2xlYW5cbiAgZmlsdGVyUG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICBmaWx0ZXJzPzogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBSZWFjdC5SZWFjdFRleHQgfT4gfCBudWxsXG4gIGZpbHRlclZpc2libGU/OiBib29sZWFuIHwgbnVsbFxuICBvbkZpbHRlcj86ICgodmFsdWU6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICBvbkZpbHRlclZpc2libGVDaGFuZ2U/OiAoKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQpIHwgbnVsbFxuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOihqOagvOetm+mAiVxuICovXG5jb25zdCBUYWJsZUZpbHRlcjogUmVhY3QuRkM8SVRhYmxlRmlsdGVyUHJvcHM+ID0gKHtcbiAgZmlsdGVyZWRWYWx1ZTogZmlsdGVyZWRWYWx1ZVByb3AsXG4gIGZpbHRlck11bHRpcGxlLFxuICBmaWx0ZXJQb3BvdmVyUHJvcHMsXG4gIGZpbHRlclZpc2libGUsXG4gIGZpbHRlcnMsXG4gIG9uRmlsdGVyLFxuICBvbkZpbHRlclZpc2libGVDaGFuZ2UsXG4gIHRpdGxlLFxufTogSVRhYmxlRmlsdGVyUHJvcHMpID0+IHtcbiAgaWYgKCFmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBbZmlsdGVyZWRWYWx1ZSwgc2V0RmlsdGVyZWRWYWx1ZV0gPSB1c2VTdGF0ZShcbiAgICBnZXRGaWx0ZXJlZFZhbHVlKGZpbHRlcmVkVmFsdWVQcm9wKVxuICApXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZpbHRlclZpc2libGUgfHwgZmFsc2UpXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoXG4gICAgZmlsdGVyZWRWYWx1ZVByb3AgIT09IG51bGwgJiZcbiAgICBmaWx0ZXJlZFZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgZmlsdGVyZWRWYWx1ZSAhPT0gZmlsdGVyZWRWYWx1ZVByb3BcbiAgKSB7XG4gICAgc2V0RmlsdGVyZWRWYWx1ZShmaWx0ZXJlZFZhbHVlUHJvcClcbiAgfVxuXG4gIGlmICh0eXBlb2YgZmlsdGVyVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgJiYgdmlzaWJsZSAhPT0gZmlsdGVyVmlzaWJsZSkge1xuICAgIHNldFZpc2libGUoZmlsdGVyVmlzaWJsZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcbiAgICBmaWx0ZXJlZFZhbHVlUGFyYW06IFJlYWN0LlJlYWN0VGV4dCB8IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWU6IGFueSA9XG4gICAgICBmaWx0ZXJNdWx0aXBsZSAmJiBmaWx0ZXJlZFZhbHVlUGFyYW1cbiAgICAgICAgPyBmaWx0ZXJlZFZhbHVlUGFyYW1cbiAgICAgICAgOiBbZmlsdGVyZWRWYWx1ZVBhcmFtXVxuICAgIGlmIChmaWx0ZXJlZFZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgc2V0RmlsdGVyZWRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uRmlsdGVyKSB7XG4gICAgICBpZiAoZmlsdGVyZWRWYWx1ZVBhcmFtID09PSBcImFsbFwiKSB7XG4gICAgICAgIG9uRmlsdGVyKFtdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25GaWx0ZXIobmV3VmFsdWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZmlsdGVyTXVsdGlwbGUpIHtcbiAgICAgIC8vIOW7tui/n+aYr+S4uuS6huiuqeeKtuaAgeeahOWPmOWMluWcqOinhuinieS4iuWFiOiiq+aOpeWPl1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChvbkZpbHRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBvbkZpbHRlclZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG4gIH1cblxuICBsZXQgcG9wdXBcblxuICBpZiAoZmlsdGVyTXVsdGlwbGUpIHtcbiAgICBwb3B1cCA9IChcbiAgICAgIDxDaGVja2JveC5Hcm91cFxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZmlsdGVyTGlzdGB9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17W1wiYWxsXCJdfVxuICAgICAgICB2YWx1ZT17ZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAge2ZpbHRlcnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPENoZWNrYm94IGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxuICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICApKX1cbiAgICAgIDwvQ2hlY2tib3guR3JvdXA+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHBvcHVwID0gKFxuICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1maWx0ZXJMaXN0YH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPVwiYWxsXCJcbiAgICAgICAgdmFsdWU9e2ZpbHRlcmVkVmFsdWUgPyBmaWx0ZXJlZFZhbHVlWzBdIDogbnVsbH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAgPFJhZGlvIHZhbHVlPVwiYWxsXCI+5YWo6YOoPC9SYWRpbz5cbiAgICAgICAge2ZpbHRlcnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPFJhZGlvIGtleT17aXRlbS52YWx1ZX0gdmFsdWU9e2l0ZW0udmFsdWV9PlxuICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICA8L1JhZGlvPlxuICAgICAgICApKX1cbiAgICAgIDwvUmFkaW8uR3JvdXA+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclxuICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgb25WaXNpYmxlQ2hhbmdlPXsoYm9vbCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbHRlclZpc2libGUgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgICB9XG4gICAgICAgIGlmIChvbkZpbHRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBvbkZpbHRlclZpc2libGVDaGFuZ2UoYm9vbClcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHBvcHVwPXtwb3B1cH1cbiAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICBwbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICAgIHsuLi5maWx0ZXJQb3BvdmVyUHJvcHN9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBkYXRhLXZhbHVlPXtmaWx0ZXJlZFZhbHVlfVxuICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tZmlsdGVyYCwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LWZpbHRlcmVkYF06XG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlICYmIGZpbHRlcmVkVmFsdWUubGVuZ3RoICYmIGZpbHRlcmVkVmFsdWVbMF0gIT09IFwiYWxsXCIsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICAgIDxJY29uIGljb249XCJmaWx0ZXItb3V0bGluZWRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qb3BvdmVyPlxuICApXG59XG5cblRhYmxlRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpuWkmumAiVxuICAgKi9cbiAgZmlsdGVyTXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog562b6YCJIFBvcG92ZXIgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpgI/kvKDnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGZpbHRlclBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOWPr+S7peS7juWklumDqOS8oOWFpeetm+mAieeahOWAvO+8jG51bGwsIFtdLCDpg73kvJror4bliKvkuLrmnKrnrZvpgInnirbmgIFcbiAgICovXG4gIGZpbHRlcmVkVmFsdWU6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqXG4gICAqIOetm+mAiemhue+8jOagvOW8j++8mlt7IHRleHQ6IFwi5pyL5Y+L5ZyI5bm/5ZGKXCIsIHZhbHVlOiAnMicgfV1cbiAgICovXG4gIGZpbHRlcnM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDku47lpJbpg6jmjqfliLYgZmlsdGVyIFBvcG92ZXIg55qE5pi+56S6XG4gICAqL1xuICBmaWx0ZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOetm+mAieaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDnrZvpgIkgcG9wdXAgdmlzaWJsZSDlj5jljJbml7bnmoQgaGFuZGxlcu+8jOWPguaVsCAoYm9vbCwgY29sKVxuICAgKi9cbiAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIHRpdGxlXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG59XG5cblRhYmxlRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmlsdGVyTXVsdGlwbGU6IGZhbHNlLFxuICBmaWx0ZXJQb3BvdmVyUHJvcHM6IHt9LFxuICBmaWx0ZXJlZFZhbHVlOiBudWxsLFxuICBmaWx0ZXJWaXNpYmxlOiBudWxsLFxuICBmaWx0ZXJzOiBudWxsLFxuICBvbkZpbHRlcjogbnVsbCxcbiAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlOiBudWxsLFxuICB0aXRsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVGaWx0ZXJcbiJdfQ==