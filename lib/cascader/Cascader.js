"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

var _popover = _interopRequireDefault(require("../popover"));

var _isEqualArrays = _interopRequireDefault(require("../_util/isEqualArrays"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-cascader";

var Cascader = function Cascader(_ref) {
  var _classNames3;

  var allowClear = _ref.allowClear,
      changeOnSelect = _ref.changeOnSelect,
      children = _ref.children,
      className = _ref.className,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      _ref$displayRender = _ref.displayRender,
      displayRender = _ref$displayRender === void 0 ? function (title) {
    return title.join("/");
  } : _ref$displayRender,
      dropdownRender = _ref.dropdownRender,
      expandTrigger = _ref.expandTrigger,
      onChange = _ref.onChange,
      onVisibleChange = _ref.onVisibleChange,
      options = _ref.options,
      placeholder = _ref.placeholder,
      popoverProps = _ref.popoverProps,
      size = _ref.size,
      valueProps = _ref.value,
      visibleProps = _ref.visible,
      otherProps = _objectWithoutProperties(_ref, ["allowClear", "changeOnSelect", "children", "className", "defaultValue", "disabled", "displayRender", "dropdownRender", "expandTrigger", "onChange", "onVisibleChange", "options", "placeholder", "popoverProps", "size", "value", "visible"]);

  var _useState = (0, _react.useState)(valueProps !== null ? valueProps || [] : defaultValue || []),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(valueProps !== null ? valueProps || [] : defaultValue || []),
      _useState4 = _slicedToArray(_useState3, 2),
      activeValue = _useState4[0],
      setActiveValue = _useState4[1];

  var _useState5 = (0, _react.useState)(visibleProps !== null ? visibleProps : false),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var delayTimer = (0, _react.useRef)(0);

  if (valueProps !== null && !(0, _isEqualArrays["default"])(valueProps || [], value)) {
    setValue(valueProps || []);
  }

  if (visibleProps !== null && visible !== visibleProps) {
    setVisible(visibleProps);
  }

  var setPopupVisible = function setPopupVisible(popupVisible) {
    if (visibleProps === null) {
      setVisible(popupVisible);
    }

    if (popupVisible && !visible) {
      setActiveValue(value);
    }

    if (onVisibleChange) {
      onVisibleChange(popupVisible);
    }
  };

  var handleClear = function handleClear(e) {
    e.preventDefault();
    e.stopPropagation();
    setPopupVisible(false);

    if (!valueProps) {
      setValue([]);
    }

    if (onChange) {
      onChange([], []);
    }
  };

  var handleChange = function handleChange(opts, _ref2) {
    var popupVisible = _ref2.visible;
    setPopupVisible(popupVisible);

    if (onChange) {
      onChange(opts.map(function (_ref3) {
        var v = _ref3.value;
        return v || "";
      }), opts);
    }
  };

  var hasValue = value === null || value === void 0 ? void 0 : value.length;

  var arrayTreeFilter = function arrayTreeFilter() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var filterFn = arguments.length > 1 ? arguments[1] : undefined;
    var childs = data;
    var result = [];
    var level = 0;

    do {
      var foundItem = childs.filter(function (item) {
        return filterFn(item, level);
      })[0];

      if (!foundItem) {
        break;
      }

      result.push(foundItem);
      childs = foundItem.children || [];
      level += 1;
    } while (childs.length > 0);

    return result;
  };

  var getTitle = function getTitle() {
    var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
    var selectedOptions = arrayTreeFilter(options, function (o, level) {
      return o.value === unwrappedValue[level];
    });
    var title = selectedOptions.length ? selectedOptions.map(function (o) {
      return o.title;
    }) : value;
    return displayRender(title.map(function (o) {
      return (o || "").toString();
    }), selectedOptions);
  };

  var isActiveOption = function isActiveOption(option, menuIndex) {
    return activeValue[menuIndex] === option.value;
  };

  var getActiveOptions = function getActiveOptions(activeValueParam) {
    return arrayTreeFilter(options, function (o, level) {
      return o.value === (activeValueParam || activeValue)[level];
    });
  };

  var getShowOptions = function getShowOptions() {
    var result = getActiveOptions().map(function (_ref4) {
      var childs = _ref4.children;
      return childs;
    }).filter(function (activeOption) {
      return activeOption === null || activeOption === void 0 ? void 0 : activeOption.length;
    });
    result.unshift(options);
    return result;
  };

  var delaySelect = function delaySelect(func) {
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
      delayTimer.current = 0;
    }

    if (typeof func === "function") {
      delayTimer.current = window.setTimeout(function () {
        func();
        delayTimer.current = 0;
      }, 150);
    }
  };

  var menus = _react["default"].createElement("div", {
    className: "".concat(prefix, "-menus")
  }, getShowOptions().map(function (opts, menuIndex) {
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])("".concat(prefix, "-menu"), _defineProperty({}, "".concat(prefix, "-menu-").concat(size), size)),
      key: menuIndex
    }, (opts || []).map(function (o, j) {
      var v = o.value,
          title = o.title,
          c = o.children,
          d = o.disabled;

      var handleSelect = function handleSelect() {
        if (d) {
          return;
        }

        var activeValueDuplicated = _toConsumableArray(activeValue);

        activeValueDuplicated = activeValueDuplicated.slice(0, menuIndex + 1);
        activeValueDuplicated[menuIndex] = v || "";
        var activeOptions = getActiveOptions(activeValueDuplicated);
        setActiveValue(activeValueDuplicated);

        if (!(c !== null && c !== void 0 && c.length)) {
          handleChange(activeOptions, {
            visible: false
          });

          if (valueProps === null) {
            setValue(activeValueDuplicated);
          }
        } else if (changeOnSelect) {
          handleChange(activeOptions, {
            visible: true
          });

          if (valueProps === null) {
            setValue(activeValueDuplicated);
          }
        }
      };

      return _react["default"].createElement("div", {
        role: "none",
        key: v || j,
        className: (0, _classnames["default"])("".concat(prefix, "-menu-item"), _defineProperty({}, "".concat(prefix, "-menu-item-active"), isActiveOption(o, menuIndex))),
        title: title === null || title === void 0 ? void 0 : title.toString(),
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        },
        onClick: handleSelect,
        onMouseEnter: function onMouseEnter() {
          if (expandTrigger === "hover" && c !== null && c !== void 0 && c.length) {
            delaySelect(handleSelect);
          }
        },
        onMouseLeave: function onMouseLeave() {
          if (expandTrigger === "hover" && c !== null && c !== void 0 && c.length) {
            delaySelect();
          }
        }
      }, _react["default"].createElement("div", {
        className: "".concat(prefix, "-menu-item-content")
      }, title), !!(c !== null && c !== void 0 && c.length) && _react["default"].createElement(_icon["default"], {
        icon: "triangle-right",
        className: "".concat(prefix, "-menu-item-icon")
      }));
    }));
  }));

  return _react["default"].createElement(_popover["default"], _extends({
    arrowed: false,
    popupClassName: "".concat(prefix, "-popup"),
    visible: disabled ? false : visible,
    onVisibleChange: setPopupVisible,
    trigger: "click",
    popup: dropdownRender ? dropdownRender(menus) : menus
  }, popoverProps), _react["default"].createElement(_button["default"], _extends({
    disabled: disabled,
    className: (0, _classnames["default"])("".concat(prefix, "-button"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "-button-valued"), hasValue), _defineProperty(_classNames3, "".concat(prefix, "-button-clearable"), allowClear), _classNames3)),
    size: size
  }, otherProps), hasValue ? _react["default"].createElement("span", {
    className: "".concat(prefix, "-label")
  }, getTitle()) : _react["default"].createElement("span", {
    className: "".concat(prefix, "-placeholder")
  }, placeholder), _react["default"].createElement("div", {
    className: "".concat(prefix, "-icons")
  }, _react["default"].createElement(_icon["default"], {
    icon: "triangle-down",
    className: "".concat(prefix, "-suffix"),
    color: disabled ? "var(--transparent-gray-600)" : "var(--transparent-gray-700)"
  }), allowClear && !disabled && _react["default"].createElement(_icon["default"], {
    icon: "cancel-circle",
    className: "".concat(prefix, "-remove"),
    color: "var(--transparent-gray-700)",
    onClick: handleClear
  }))));
};

Cascader.propTypes = {
  allowClear: _propTypes["default"].bool,
  changeOnSelect: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  defaultValue: _propTypes["default"].any,
  disabled: _propTypes["default"].bool,
  displayRender: _propTypes["default"].any,
  dropdownRender: _propTypes["default"].any,
  expandTrigger: _propTypes["default"].oneOf(["click", "hover"]),
  options: _propTypes["default"].any,
  onChange: _propTypes["default"].any,
  onVisibleChange: _propTypes["default"].any,
  placeholder: _propTypes["default"].any,
  popoverProps: _propTypes["default"].any,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  value: _propTypes["default"].any,
  visible: _propTypes["default"].any
};
Cascader.defaultProps = {
  allowClear: true,
  changeOnSelect: false,
  children: null,
  className: undefined,
  defaultValue: null,
  disabled: false,
  displayRender: undefined,
  dropdownRender: undefined,
  expandTrigger: "click",
  onChange: undefined,
  onVisibleChange: undefined,
  options: [],
  placeholder: "请选择",
  popoverProps: {},
  size: "small",
  value: null,
  visible: null
};
var _default = Cascader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FzY2FkZXIvQ2FzY2FkZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNhc2NhZGVyIiwiYWxsb3dDbGVhciIsImNoYW5nZU9uU2VsZWN0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImRpc3BsYXlSZW5kZXIiLCJ0aXRsZSIsImpvaW4iLCJkcm9wZG93blJlbmRlciIsImV4cGFuZFRyaWdnZXIiLCJvbkNoYW5nZSIsIm9uVmlzaWJsZUNoYW5nZSIsIm9wdGlvbnMiLCJwbGFjZWhvbGRlciIsInBvcG92ZXJQcm9wcyIsInNpemUiLCJ2YWx1ZVByb3BzIiwidmFsdWUiLCJ2aXNpYmxlUHJvcHMiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsInNldFZhbHVlIiwiYWN0aXZlVmFsdWUiLCJzZXRBY3RpdmVWYWx1ZSIsInNldFZpc2libGUiLCJkZWxheVRpbWVyIiwic2V0UG9wdXBWaXNpYmxlIiwicG9wdXBWaXNpYmxlIiwiaGFuZGxlQ2xlYXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJvcHRzIiwibWFwIiwidiIsImhhc1ZhbHVlIiwibGVuZ3RoIiwiYXJyYXlUcmVlRmlsdGVyIiwiZGF0YSIsImZpbHRlckZuIiwiY2hpbGRzIiwicmVzdWx0IiwibGV2ZWwiLCJmb3VuZEl0ZW0iLCJmaWx0ZXIiLCJpdGVtIiwicHVzaCIsImdldFRpdGxlIiwidW53cmFwcGVkVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJzZWxlY3RlZE9wdGlvbnMiLCJvIiwidG9TdHJpbmciLCJpc0FjdGl2ZU9wdGlvbiIsIm9wdGlvbiIsIm1lbnVJbmRleCIsImdldEFjdGl2ZU9wdGlvbnMiLCJhY3RpdmVWYWx1ZVBhcmFtIiwiZ2V0U2hvd09wdGlvbnMiLCJhY3RpdmVPcHRpb24iLCJ1bnNoaWZ0IiwiZGVsYXlTZWxlY3QiLCJmdW5jIiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJtZW51cyIsImoiLCJjIiwiZCIsImhhbmRsZVNlbGVjdCIsImFjdGl2ZVZhbHVlRHVwbGljYXRlZCIsInNsaWNlIiwiYWN0aXZlT3B0aW9ucyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwic3RyaW5nIiwiYW55Iiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsZUFBZjs7QUEwRkEsSUFBTUMsUUFBZ0MsR0FBRyxTQUFuQ0EsUUFBbUMsT0FtQnJCO0FBQUE7O0FBQUEsTUFsQmxCQyxVQWtCa0IsUUFsQmxCQSxVQWtCa0I7QUFBQSxNQWpCbEJDLGNBaUJrQixRQWpCbEJBLGNBaUJrQjtBQUFBLE1BaEJsQkMsUUFnQmtCLFFBaEJsQkEsUUFnQmtCO0FBQUEsTUFmbEJDLFNBZWtCLFFBZmxCQSxTQWVrQjtBQUFBLE1BZGxCQyxZQWNrQixRQWRsQkEsWUFja0I7QUFBQSxNQWJsQkMsUUFha0IsUUFibEJBLFFBYWtCO0FBQUEsZ0NBWmxCQyxhQVlrQjtBQUFBLE1BWmxCQSxhQVlrQixtQ0FaRixVQUFDQyxLQUFEO0FBQUEsV0FBcUJBLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEdBQVgsQ0FBckI7QUFBQSxHQVlFO0FBQUEsTUFYbEJDLGNBV2tCLFFBWGxCQSxjQVdrQjtBQUFBLE1BVmxCQyxhQVVrQixRQVZsQkEsYUFVa0I7QUFBQSxNQVRsQkMsUUFTa0IsUUFUbEJBLFFBU2tCO0FBQUEsTUFSbEJDLGVBUWtCLFFBUmxCQSxlQVFrQjtBQUFBLE1BUGxCQyxPQU9rQixRQVBsQkEsT0FPa0I7QUFBQSxNQU5sQkMsV0FNa0IsUUFObEJBLFdBTWtCO0FBQUEsTUFMbEJDLFlBS2tCLFFBTGxCQSxZQUtrQjtBQUFBLE1BSmxCQyxJQUlrQixRQUpsQkEsSUFJa0I7QUFBQSxNQUhYQyxVQUdXLFFBSGxCQyxLQUdrQjtBQUFBLE1BRlRDLFlBRVMsUUFGbEJDLE9BRWtCO0FBQUEsTUFEZkMsVUFDZTs7QUFBQSxrQkFDUSxxQkFDeEJKLFVBQVUsS0FBSyxJQUFmLEdBQXNCQSxVQUFVLElBQUksRUFBcEMsR0FBeUNiLFlBQVksSUFBSSxFQURqQyxDQURSO0FBQUE7QUFBQSxNQUNYYyxLQURXO0FBQUEsTUFDSkksUUFESTs7QUFBQSxtQkFJb0IscUJBQ3BDTCxVQUFVLEtBQUssSUFBZixHQUFzQkEsVUFBVSxJQUFJLEVBQXBDLEdBQXlDYixZQUFZLElBQUksRUFEckIsQ0FKcEI7QUFBQTtBQUFBLE1BSVhtQixXQUpXO0FBQUEsTUFJRUMsY0FKRjs7QUFBQSxtQkFPWSxxQkFDNUJMLFlBQVksS0FBSyxJQUFqQixHQUF3QkEsWUFBeEIsR0FBdUMsS0FEWCxDQVBaO0FBQUE7QUFBQSxNQU9YQyxPQVBXO0FBQUEsTUFPRkssVUFQRTs7QUFVbEIsTUFBTUMsVUFBVSxHQUFHLG1CQUFPLENBQVAsQ0FBbkI7O0FBR0EsTUFBSVQsVUFBVSxLQUFLLElBQWYsSUFBdUIsQ0FBQywrQkFBY0EsVUFBVSxJQUFJLEVBQTVCLEVBQWdDQyxLQUFoQyxDQUE1QixFQUFvRTtBQUNsRUksSUFBQUEsUUFBUSxDQUFDTCxVQUFVLElBQUksRUFBZixDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUUsWUFBWSxLQUFLLElBQWpCLElBQXlCQyxPQUFPLEtBQUtELFlBQXpDLEVBQXVEO0FBQ3JETSxJQUFBQSxVQUFVLENBQUNOLFlBQUQsQ0FBVjtBQUNEOztBQUVELE1BQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsWUFBRCxFQUEyQjtBQUNqRCxRQUFJVCxZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDekJNLE1BQUFBLFVBQVUsQ0FBQ0csWUFBRCxDQUFWO0FBQ0Q7O0FBQ0QsUUFBSUEsWUFBWSxJQUFJLENBQUNSLE9BQXJCLEVBQThCO0FBQzVCSSxNQUFBQSxjQUFjLENBQUNOLEtBQUQsQ0FBZDtBQUNEOztBQUNELFFBQUlOLGVBQUosRUFBcUI7QUFDbkJBLE1BQUFBLGVBQWUsQ0FBQ2dCLFlBQUQsQ0FBZjtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQXdDO0FBQzFEQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDRSxlQUFGO0FBQ0FMLElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7O0FBQ0EsUUFBSSxDQUFDVixVQUFMLEVBQWlCO0FBQ2ZLLE1BQUFBLFFBQVEsQ0FBQyxFQUFELENBQVI7QUFDRDs7QUFDRCxRQUFJWCxRQUFKLEVBQWM7QUFDWkEsTUFBQUEsUUFBUSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQVI7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsTUFBTXNCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQ25CQyxJQURtQixTQUdoQjtBQUFBLFFBRFFOLFlBQ1IsU0FERFIsT0FDQztBQUNITyxJQUFBQSxlQUFlLENBQUNDLFlBQUQsQ0FBZjs7QUFDQSxRQUFJakIsUUFBSixFQUFjO0FBQ1pBLE1BQUFBLFFBQVEsQ0FDTnVCLElBQUksQ0FBQ0MsR0FBTCxDQUFTO0FBQUEsWUFBVUMsQ0FBVixTQUFHbEIsS0FBSDtBQUFBLGVBQWtCa0IsQ0FBQyxJQUFJLEVBQXZCO0FBQUEsT0FBVCxDQURNLEVBRU5GLElBRk0sQ0FBUjtBQUlEO0FBQ0YsR0FYRDs7QUFhQSxNQUFNRyxRQUFRLEdBQUduQixLQUFILGFBQUdBLEtBQUgsdUJBQUdBLEtBQUssQ0FBRW9CLE1BQXhCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FHbkI7QUFBQSxRQUZIQyxJQUVHLHVFQUZTLEVBRVQ7QUFBQSxRQURIQyxRQUNHO0FBQ0gsUUFBSUMsTUFBTSxHQUFHRixJQUFiO0FBQ0EsUUFBTUcsTUFBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsT0FBRztBQUNELFVBQU1DLFNBQVksR0FBR0gsTUFBTSxDQUFDSSxNQUFQLENBQWMsVUFBQ0MsSUFBRDtBQUFBLGVBQVVOLFFBQVEsQ0FBQ00sSUFBRCxFQUFPSCxLQUFQLENBQWxCO0FBQUEsT0FBZCxFQUErQyxDQUEvQyxDQUFyQjs7QUFDQSxVQUFJLENBQUNDLFNBQUwsRUFBZ0I7QUFDZDtBQUNEOztBQUNERixNQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWUgsU0FBWjtBQUNBSCxNQUFBQSxNQUFNLEdBQUlHLFNBQUQsQ0FBbUIzQyxRQUFuQixJQUErQixFQUF4QztBQUNBMEMsTUFBQUEsS0FBSyxJQUFJLENBQVQ7QUFDRCxLQVJELFFBUVNGLE1BQU0sQ0FBQ0osTUFBUCxHQUFnQixDQVJ6Qjs7QUFTQSxXQUFPSyxNQUFQO0FBQ0QsR0FqQkQ7O0FBbUJBLE1BQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUMsY0FBYyxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY2xDLEtBQUssQ0FBQyxDQUFELENBQW5CLElBQTBCQSxLQUFLLENBQUMsQ0FBRCxDQUEvQixHQUFxQ0EsS0FBNUQ7QUFDQSxRQUFNbUMsZUFBZSxHQUFHZCxlQUFlLENBQ3JDMUIsT0FEcUMsRUFFckMsVUFBQ3lDLENBQUQsRUFBSVYsS0FBSjtBQUFBLGFBQXNCVSxDQUFDLENBQUNwQyxLQUFGLEtBQVlnQyxjQUFjLENBQUNOLEtBQUQsQ0FBaEQ7QUFBQSxLQUZxQyxDQUF2QztBQUlBLFFBQU1yQyxLQUFLLEdBQUc4QyxlQUFlLENBQUNmLE1BQWhCLEdBQ1ZlLGVBQWUsQ0FBQ2xCLEdBQWhCLENBQW9CLFVBQUNtQixDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDL0MsS0FBVDtBQUFBLEtBQXBCLENBRFUsR0FFVlcsS0FGSjtBQUdBLFdBQU9aLGFBQWEsQ0FDbEJDLEtBQUssQ0FBQzRCLEdBQU4sQ0FBVSxVQUFDbUIsQ0FBRDtBQUFBLGFBQU8sQ0FBQ0EsQ0FBQyxJQUFJLEVBQU4sRUFBVUMsUUFBVixFQUFQO0FBQUEsS0FBVixDQURrQixFQUVsQkYsZUFGa0IsQ0FBcEI7QUFJRCxHQWJEOztBQWVBLE1BQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUF5QkMsU0FBekI7QUFBQSxXQUNyQm5DLFdBQVcsQ0FBQ21DLFNBQUQsQ0FBWCxLQUEyQkQsTUFBTSxDQUFDdkMsS0FEYjtBQUFBLEdBQXZCOztBQUdBLE1BQU15QyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQ3ZCQyxnQkFEdUI7QUFBQSxXQUd2QnJCLGVBQWUsQ0FDYjFCLE9BRGEsRUFFYixVQUFDeUMsQ0FBRCxFQUFJVixLQUFKO0FBQUEsYUFBY1UsQ0FBQyxDQUFDcEMsS0FBRixLQUFZLENBQUMwQyxnQkFBZ0IsSUFBSXJDLFdBQXJCLEVBQWtDcUIsS0FBbEMsQ0FBMUI7QUFBQSxLQUZhLENBSFE7QUFBQSxHQUF6Qjs7QUFRQSxNQUFNaUIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUF3QztBQUM3RCxRQUFNbEIsTUFBTSxHQUFHZ0IsZ0JBQWdCLEdBQzVCeEIsR0FEWSxDQUNSO0FBQUEsVUFBYU8sTUFBYixTQUFHeEMsUUFBSDtBQUFBLGFBQTBCd0MsTUFBMUI7QUFBQSxLQURRLEVBRVpJLE1BRlksQ0FFTCxVQUFDZ0IsWUFBRDtBQUFBLGFBQWtCQSxZQUFsQixhQUFrQkEsWUFBbEIsdUJBQWtCQSxZQUFZLENBQUV4QixNQUFoQztBQUFBLEtBRkssQ0FBZjtBQUdBSyxJQUFBQSxNQUFNLENBQUNvQixPQUFQLENBQWVsRCxPQUFmO0FBRUEsV0FBTzhCLE1BQVA7QUFDRCxHQVBEOztBQVNBLE1BQU1xQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQXVCO0FBQ3pDLFFBQUl2QyxVQUFVLENBQUN3QyxPQUFmLEVBQXdCO0FBQ3RCQyxNQUFBQSxZQUFZLENBQUN6QyxVQUFVLENBQUN3QyxPQUFaLENBQVo7QUFDQXhDLE1BQUFBLFVBQVUsQ0FBQ3dDLE9BQVgsR0FBcUIsQ0FBckI7QUFDRDs7QUFDRCxRQUFJLE9BQU9ELElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUJ2QyxNQUFBQSxVQUFVLENBQUN3QyxPQUFYLEdBQXFCRSxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBTTtBQUMzQ0osUUFBQUEsSUFBSTtBQUNKdkMsUUFBQUEsVUFBVSxDQUFDd0MsT0FBWCxHQUFxQixDQUFyQjtBQUNELE9BSG9CLEVBR2xCLEdBSGtCLENBQXJCO0FBSUQ7QUFDRixHQVhEOztBQWFBLE1BQU1JLEtBQUssR0FDVDtBQUFLLElBQUEsU0FBUyxZQUFLeEUsTUFBTDtBQUFkLEtBQ0crRCxjQUFjLEdBQUcxQixHQUFqQixDQUFxQixVQUFDRCxJQUFELEVBQU93QixTQUFQO0FBQUEsV0FDcEI7QUFDRSxNQUFBLFNBQVMsRUFBRSxzQ0FBYzVELE1BQWQsMENBQ0xBLE1BREssbUJBQ1VrQixJQURWLEdBQ21CQSxJQURuQixFQURiO0FBSUUsTUFBQSxHQUFHLEVBQUUwQztBQUpQLE9BTUcsQ0FBQ3hCLElBQUksSUFBSSxFQUFULEVBQWFDLEdBQWIsQ0FBaUIsVUFBQ21CLENBQUQsRUFBSWlCLENBQUosRUFBVTtBQUFBLFVBQ1huQyxDQURXLEdBQzRCa0IsQ0FENUIsQ0FDbEJwQyxLQURrQjtBQUFBLFVBQ1JYLEtBRFEsR0FDNEIrQyxDQUQ1QixDQUNSL0MsS0FEUTtBQUFBLFVBQ1NpRSxDQURULEdBQzRCbEIsQ0FENUIsQ0FDRHBELFFBREM7QUFBQSxVQUNzQnVFLENBRHRCLEdBQzRCbkIsQ0FENUIsQ0FDWWpELFFBRFo7O0FBRTFCLFVBQU1xRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFlBQUlELENBQUosRUFBTztBQUNMO0FBQ0Q7O0FBQ0QsWUFBSUUscUJBQXFCLHNCQUFPcEQsV0FBUCxDQUF6Qjs7QUFDQW9ELFFBQUFBLHFCQUFxQixHQUFHQSxxQkFBcUIsQ0FBQ0MsS0FBdEIsQ0FDdEIsQ0FEc0IsRUFFdEJsQixTQUFTLEdBQUcsQ0FGVSxDQUF4QjtBQUlBaUIsUUFBQUEscUJBQXFCLENBQUNqQixTQUFELENBQXJCLEdBQW1DdEIsQ0FBQyxJQUFJLEVBQXhDO0FBQ0EsWUFBTXlDLGFBQWEsR0FBR2xCLGdCQUFnQixDQUFDZ0IscUJBQUQsQ0FBdEM7QUFDQW5ELFFBQUFBLGNBQWMsQ0FBQ21ELHFCQUFELENBQWQ7O0FBQ0EsWUFBSSxFQUFDSCxDQUFELGFBQUNBLENBQUQsZUFBQ0EsQ0FBQyxDQUFFbEMsTUFBSixDQUFKLEVBQWdCO0FBQ2RMLFVBQUFBLFlBQVksQ0FBQzRDLGFBQUQsRUFBZ0I7QUFBRXpELFlBQUFBLE9BQU8sRUFBRTtBQUFYLFdBQWhCLENBQVo7O0FBQ0EsY0FBSUgsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCSyxZQUFBQSxRQUFRLENBQUNxRCxxQkFBRCxDQUFSO0FBQ0Q7QUFDRixTQUxELE1BS08sSUFBSTFFLGNBQUosRUFBb0I7QUFDekJnQyxVQUFBQSxZQUFZLENBQUM0QyxhQUFELEVBQWdCO0FBQUV6RCxZQUFBQSxPQUFPLEVBQUU7QUFBWCxXQUFoQixDQUFaOztBQUNBLGNBQUlILFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2QkssWUFBQUEsUUFBUSxDQUFDcUQscUJBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixPQXZCRDs7QUF3QkEsYUFDRTtBQUNFLFFBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFBLEdBQUcsRUFBRXZDLENBQUMsSUFBSW1DLENBRlo7QUFHRSxRQUFBLFNBQVMsRUFBRSxzQ0FBY3pFLE1BQWQsK0NBQ0xBLE1BREssd0JBQ3VCMEQsY0FBYyxDQUFDRixDQUFELEVBQUlJLFNBQUosQ0FEckMsRUFIYjtBQU1FLFFBQUEsS0FBSyxFQUFFbkQsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVnRCxRQUFQLEVBTlQ7QUFPRSxRQUFBLFdBQVcsRUFBRSxxQkFBQ3pCLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQVA7QUFBQSxTQVBmO0FBUUUsUUFBQSxPQUFPLEVBQUUyQyxZQVJYO0FBU0UsUUFBQSxZQUFZLEVBQUUsd0JBQU07QUFDbEIsY0FBSWhFLGFBQWEsS0FBSyxPQUFsQixJQUE2QjhELENBQTdCLGFBQTZCQSxDQUE3QixlQUE2QkEsQ0FBQyxDQUFFbEMsTUFBcEMsRUFBNEM7QUFDMUMwQixZQUFBQSxXQUFXLENBQUNVLFlBQUQsQ0FBWDtBQUNEO0FBQ0YsU0FiSDtBQWNFLFFBQUEsWUFBWSxFQUFFLHdCQUFNO0FBQ2xCLGNBQUloRSxhQUFhLEtBQUssT0FBbEIsSUFBNkI4RCxDQUE3QixhQUE2QkEsQ0FBN0IsZUFBNkJBLENBQUMsQ0FBRWxDLE1BQXBDLEVBQTRDO0FBQzFDMEIsWUFBQUEsV0FBVztBQUNaO0FBQ0Y7QUFsQkgsU0FvQkU7QUFBSyxRQUFBLFNBQVMsWUFBS2xFLE1BQUw7QUFBZCxTQUFnRFMsS0FBaEQsQ0FwQkYsRUFxQkcsQ0FBQyxFQUFDaUUsQ0FBRCxhQUFDQSxDQUFELGVBQUNBLENBQUMsQ0FBRWxDLE1BQUosQ0FBRCxJQUNDLGdDQUFDLGdCQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUMsZ0JBRFA7QUFFRSxRQUFBLFNBQVMsWUFBS3hDLE1BQUw7QUFGWCxRQXRCSixDQURGO0FBOEJELEtBeERBLENBTkgsQ0FEb0I7QUFBQSxHQUFyQixDQURILENBREY7O0FBdUVBLFNBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBRSxLQURYO0FBRUUsSUFBQSxjQUFjLFlBQUtBLE1BQUwsV0FGaEI7QUFHRSxJQUFBLE9BQU8sRUFBRU8sUUFBUSxHQUFHLEtBQUgsR0FBV2UsT0FIOUI7QUFJRSxJQUFBLGVBQWUsRUFBRU8sZUFKbkI7QUFLRSxJQUFBLE9BQU8sRUFBQyxPQUxWO0FBTUUsSUFBQSxLQUFLLEVBQUVsQixjQUFjLEdBQUdBLGNBQWMsQ0FBQzZELEtBQUQsQ0FBakIsR0FBMkJBO0FBTmxELEtBT012RCxZQVBOLEdBU0UsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRVYsUUFEWjtBQUVFLElBQUEsU0FBUyxFQUFFLHNDQUFjUCxNQUFkLDBFQUNMQSxNQURLLHFCQUNvQnVDLFFBRHBCLDJDQUVMdkMsTUFGSyx3QkFFdUJFLFVBRnZCLGlCQUZiO0FBTUUsSUFBQSxJQUFJLEVBQUVnQjtBQU5SLEtBT01LLFVBUE4sR0FTR2dCLFFBQVEsR0FDUDtBQUFNLElBQUEsU0FBUyxZQUFLdkMsTUFBTDtBQUFmLEtBQXFDbUQsUUFBUSxFQUE3QyxDQURPLEdBR1A7QUFBTSxJQUFBLFNBQVMsWUFBS25ELE1BQUw7QUFBZixLQUEyQ2dCLFdBQTNDLENBWkosRUFjRTtBQUFLLElBQUEsU0FBUyxZQUFLaEIsTUFBTDtBQUFkLEtBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLElBQUksRUFBQyxlQURQO0FBRUUsSUFBQSxTQUFTLFlBQUtBLE1BQUwsWUFGWDtBQUdFLElBQUEsS0FBSyxFQUNITyxRQUFRLEdBQ0osNkJBREksR0FFSjtBQU5SLElBREYsRUFVR0wsVUFBVSxJQUFJLENBQUNLLFFBQWYsSUFDQyxnQ0FBQyxnQkFBRDtBQUNFLElBQUEsSUFBSSxFQUFDLGVBRFA7QUFFRSxJQUFBLFNBQVMsWUFBS1AsTUFBTCxZQUZYO0FBR0UsSUFBQSxLQUFLLEVBQUMsNkJBSFI7QUFJRSxJQUFBLE9BQU8sRUFBRStCO0FBSlgsSUFYSixDQWRGLENBVEYsQ0FERjtBQThDRCxDQXRRRDs7QUF3UUE5QixRQUFRLENBQUMrRSxTQUFULEdBQXFCO0FBSW5COUUsRUFBQUEsVUFBVSxFQUFFK0Usc0JBQVVDLElBSkg7QUFRbkIvRSxFQUFBQSxjQUFjLEVBQUU4RSxzQkFBVUMsSUFSUDtBQVluQjlFLEVBQUFBLFFBQVEsRUFBRTZFLHNCQUFVRSxJQVpEO0FBZ0JuQjlFLEVBQUFBLFNBQVMsRUFBRTRFLHNCQUFVRyxNQWhCRjtBQW9CbkI5RSxFQUFBQSxZQUFZLEVBQUUyRSxzQkFBVUksR0FwQkw7QUF3Qm5COUUsRUFBQUEsUUFBUSxFQUFFMEUsc0JBQVVDLElBeEJEO0FBNEJuQjFFLEVBQUFBLGFBQWEsRUFBRXlFLHNCQUFVSSxHQTVCTjtBQWdDbkIxRSxFQUFBQSxjQUFjLEVBQUVzRSxzQkFBVUksR0FoQ1A7QUFvQ25CekUsRUFBQUEsYUFBYSxFQUFFcUUsc0JBQVVLLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFoQixDQXBDSTtBQXdDbkJ2RSxFQUFBQSxPQUFPLEVBQUVrRSxzQkFBVUksR0F4Q0E7QUE0Q25CeEUsRUFBQUEsUUFBUSxFQUFFb0Usc0JBQVVJLEdBNUNEO0FBZ0RuQnZFLEVBQUFBLGVBQWUsRUFBRW1FLHNCQUFVSSxHQWhEUjtBQW9EbkJyRSxFQUFBQSxXQUFXLEVBQUVpRSxzQkFBVUksR0FwREo7QUF3RG5CcEUsRUFBQUEsWUFBWSxFQUFFZ0Usc0JBQVVJLEdBeERMO0FBNERuQm5FLEVBQUFBLElBQUksRUFBRStELHNCQUFVSyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0E1RGE7QUFnRW5CbEUsRUFBQUEsS0FBSyxFQUFFNkQsc0JBQVVJLEdBaEVFO0FBb0VuQi9ELEVBQUFBLE9BQU8sRUFBRTJELHNCQUFVSTtBQXBFQSxDQUFyQjtBQXVFQXBGLFFBQVEsQ0FBQ3NGLFlBQVQsR0FBd0I7QUFDdEJyRixFQUFBQSxVQUFVLEVBQUUsSUFEVTtBQUV0QkMsRUFBQUEsY0FBYyxFQUFFLEtBRk07QUFHdEJDLEVBQUFBLFFBQVEsRUFBRSxJQUhZO0FBSXRCQyxFQUFBQSxTQUFTLEVBQUVtRixTQUpXO0FBS3RCbEYsRUFBQUEsWUFBWSxFQUFFLElBTFE7QUFNdEJDLEVBQUFBLFFBQVEsRUFBRSxLQU5ZO0FBT3RCQyxFQUFBQSxhQUFhLEVBQUVnRixTQVBPO0FBUXRCN0UsRUFBQUEsY0FBYyxFQUFFNkUsU0FSTTtBQVN0QjVFLEVBQUFBLGFBQWEsRUFBRSxPQVRPO0FBVXRCQyxFQUFBQSxRQUFRLEVBQUUyRSxTQVZZO0FBV3RCMUUsRUFBQUEsZUFBZSxFQUFFMEUsU0FYSztBQVl0QnpFLEVBQUFBLE9BQU8sRUFBRSxFQVphO0FBYXRCQyxFQUFBQSxXQUFXLEVBQUUsS0FiUztBQWN0QkMsRUFBQUEsWUFBWSxFQUFFLEVBZFE7QUFldEJDLEVBQUFBLElBQUksRUFBRSxPQWZnQjtBQWdCdEJFLEVBQUFBLEtBQUssRUFBRSxJQWhCZTtBQWlCdEJFLEVBQUFBLE9BQU8sRUFBRTtBQWpCYSxDQUF4QjtlQW9CZXJCLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgaXNFcXVhbEFycmF5cyBmcm9tIFwiLi4vX3V0aWwvaXNFcXVhbEFycmF5c1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNhc2NhZGVyXCJcblxuZXhwb3J0IHR5cGUgQ2FzY2FkZXJWYWx1ZVR5cGUgPSBSZWFjdC5SZWFjdFRleHRbXVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyT3B0aW9uIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyXG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogQ2FzY2FkZXJPcHRpb25bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmF3ZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5riF6ZmkXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhblxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IHRydWUg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBDYXNjYWRlciDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k5YC877yM5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBDYXNjYWRlclZhbHVlVHlwZSB8IG51bGxcbiAgLyoqXG4gICAqIOiHquWumuS5ieS4i+aLieahhuWGheWuuVxuICAgKi9cbiAgZHJvcGRvd25SZW5kZXI/OiAobWVudXM6IFJlYWN0LlJlYWN0Tm9kZSkgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6YCJ5oup5ZCO5bGV56S655qE5riy5p+T5Ye95pWwXG4gICAqL1xuICBkaXNwbGF5UmVuZGVyPzogKFxuICAgIHRpdGxlOiBzdHJpbmdbXSxcbiAgICBzZWxlY3RlZE9wdGlvbnM/OiBDYXNjYWRlck9wdGlvbltdXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmrKHnuqfoj5zljZXnmoTlsZXlvIDmlrnlvI/vvIzlj6/pgIkgJ2NsaWNrJyDlkowgJ2hvdmVyJ1xuICAgKi9cbiAgZXhwYW5kVHJpZ2dlcj86IFwiY2xpY2tcIiB8IFwiaG92ZXJcIlxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBDYXNjYWRlclZhbHVlVHlwZSwgc2VsZWN0T3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSkgPT4gdm9pZFxuICAvKipcbiAgICog5LiL5ouJ5qGGIHZpc2libGUg54q25oCB5pS55Y+Y5pe255qE5Zue6LCDXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5Y+v6YCJ6aG55pWw5o2u5rqQXG4gICAqL1xuICBvcHRpb25zPzogQ2FzY2FkZXJPcHRpb25bXVxuICAvKipcbiAgICog5Y2g5L2N5paH5pysXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5bGe5oCn5bCG5Lya6YCP5Lyg57uZIFBvcG92ZXIg57uE5Lu2XG4gICAqL1xuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWAvO+8jOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBDYXNjYWRlclZhbHVlVHlwZSB8IG51bGxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItuS4i+aLieahhiB2aXNpYmxlIOeKtuaAgVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG59XG5cbi8qKlxuICog57qn6IGU6YCJ5oup5Zmo55u06KeC5bGV56S65bey5pyJ55qE5bGC57qn5YWz57O744CCXG4gKi9cbmNvbnN0IENhc2NhZGVyOiBSZWFjdC5GQzxJRHJhd2VyUHJvcHM+ID0gKHtcbiAgYWxsb3dDbGVhcixcbiAgY2hhbmdlT25TZWxlY3QsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIGRpc3BsYXlSZW5kZXIgPSAodGl0bGU6IHN0cmluZ1tdKSA9PiB0aXRsZS5qb2luKFwiL1wiKSxcbiAgZHJvcGRvd25SZW5kZXIsXG4gIGV4cGFuZFRyaWdnZXIsXG4gIG9uQ2hhbmdlLFxuICBvblZpc2libGVDaGFuZ2UsXG4gIG9wdGlvbnMsXG4gIHBsYWNlaG9sZGVyLFxuICBwb3BvdmVyUHJvcHMsXG4gIHNpemUsXG4gIHZhbHVlOiB2YWx1ZVByb3BzLFxuICB2aXNpYmxlOiB2aXNpYmxlUHJvcHMsXG4gIC4uLm90aGVyUHJvcHNcbn06IElEcmF3ZXJQcm9wcykgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPENhc2NhZGVyVmFsdWVUeXBlPihcbiAgICB2YWx1ZVByb3BzICE9PSBudWxsID8gdmFsdWVQcm9wcyB8fCBbXSA6IGRlZmF1bHRWYWx1ZSB8fCBbXVxuICApXG4gIGNvbnN0IFthY3RpdmVWYWx1ZSwgc2V0QWN0aXZlVmFsdWVdID0gdXNlU3RhdGU8Q2FzY2FkZXJWYWx1ZVR5cGU+KFxuICAgIHZhbHVlUHJvcHMgIT09IG51bGwgPyB2YWx1ZVByb3BzIHx8IFtdIDogZGVmYXVsdFZhbHVlIHx8IFtdXG4gIClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoXG4gICAgdmlzaWJsZVByb3BzICE9PSBudWxsID8gdmlzaWJsZVByb3BzIDogZmFsc2VcbiAgKVxuICBjb25zdCBkZWxheVRpbWVyID0gdXNlUmVmKDApXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAodmFsdWVQcm9wcyAhPT0gbnVsbCAmJiAhaXNFcXVhbEFycmF5cyh2YWx1ZVByb3BzIHx8IFtdLCB2YWx1ZSkpIHtcbiAgICBzZXRWYWx1ZSh2YWx1ZVByb3BzIHx8IFtdKVxuICB9XG4gIGlmICh2aXNpYmxlUHJvcHMgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gdmlzaWJsZVByb3BzKSB7XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlUHJvcHMpXG4gIH1cblxuICBjb25zdCBzZXRQb3B1cFZpc2libGUgPSAocG9wdXBWaXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHZpc2libGVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgc2V0VmlzaWJsZShwb3B1cFZpc2libGUpXG4gICAgfVxuICAgIGlmIChwb3B1cFZpc2libGUgJiYgIXZpc2libGUpIHtcbiAgICAgIHNldEFjdGl2ZVZhbHVlKHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICBvblZpc2libGVDaGFuZ2UocG9wdXBWaXNpYmxlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgc2V0UG9wdXBWaXNpYmxlKGZhbHNlKVxuICAgIGlmICghdmFsdWVQcm9wcykge1xuICAgICAgc2V0VmFsdWUoW10pXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcbiAgICBvcHRzOiBDYXNjYWRlck9wdGlvbltdLFxuICAgIHsgdmlzaWJsZTogcG9wdXBWaXNpYmxlIH06IHsgdmlzaWJsZTogYm9vbGVhbiB9XG4gICkgPT4ge1xuICAgIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUpXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShcbiAgICAgICAgb3B0cy5tYXAoKHsgdmFsdWU6IHYgfSkgPT4gdiB8fCBcIlwiKSxcbiAgICAgICAgb3B0c1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhc1ZhbHVlID0gdmFsdWU/Lmxlbmd0aFxuXG4gIGNvbnN0IGFycmF5VHJlZUZpbHRlciA9IDxUIGV4dGVuZHMgdW5rbm93bj4oXG4gICAgZGF0YTogVFtdID0gW10sXG4gICAgZmlsdGVyRm46IChpdGVtOiBULCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuXG4gICkgPT4ge1xuICAgIGxldCBjaGlsZHMgPSBkYXRhXG4gICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXVxuICAgIGxldCBsZXZlbCA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBmb3VuZEl0ZW06IFQgPSBjaGlsZHMuZmlsdGVyKChpdGVtKSA9PiBmaWx0ZXJGbihpdGVtLCBsZXZlbCkpWzBdXG4gICAgICBpZiAoIWZvdW5kSXRlbSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goZm91bmRJdGVtKVxuICAgICAgY2hpbGRzID0gKGZvdW5kSXRlbSBhcyBhbnkpLmNoaWxkcmVuIHx8IFtdXG4gICAgICBsZXZlbCArPSAxXG4gICAgfSB3aGlsZSAoY2hpbGRzLmxlbmd0aCA+IDApXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdW53cmFwcGVkVmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlWzBdKSA/IHZhbHVlWzBdIDogdmFsdWVcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBhcnJheVRyZWVGaWx0ZXIoXG4gICAgICBvcHRpb25zLFxuICAgICAgKG8sIGxldmVsOiBudW1iZXIpID0+IG8udmFsdWUgPT09IHVud3JhcHBlZFZhbHVlW2xldmVsXVxuICAgIClcbiAgICBjb25zdCB0aXRsZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGhcbiAgICAgID8gc2VsZWN0ZWRPcHRpb25zLm1hcCgobykgPT4gby50aXRsZSlcbiAgICAgIDogdmFsdWVcbiAgICByZXR1cm4gZGlzcGxheVJlbmRlcihcbiAgICAgIHRpdGxlLm1hcCgobykgPT4gKG8gfHwgXCJcIikudG9TdHJpbmcoKSksXG4gICAgICBzZWxlY3RlZE9wdGlvbnNcbiAgICApXG4gIH1cblxuICBjb25zdCBpc0FjdGl2ZU9wdGlvbiA9IChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBtZW51SW5kZXg6IG51bWJlcikgPT5cbiAgICBhY3RpdmVWYWx1ZVttZW51SW5kZXhdID09PSBvcHRpb24udmFsdWVcblxuICBjb25zdCBnZXRBY3RpdmVPcHRpb25zID0gKFxuICAgIGFjdGl2ZVZhbHVlUGFyYW0/OiBDYXNjYWRlclZhbHVlVHlwZVxuICApOiBDYXNjYWRlck9wdGlvbltdID0+XG4gICAgYXJyYXlUcmVlRmlsdGVyKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIChvLCBsZXZlbCkgPT4gby52YWx1ZSA9PT0gKGFjdGl2ZVZhbHVlUGFyYW0gfHwgYWN0aXZlVmFsdWUpW2xldmVsXVxuICAgIClcblxuICBjb25zdCBnZXRTaG93T3B0aW9ucyA9ICgpOiAoQ2FzY2FkZXJPcHRpb25bXSB8IHVuZGVmaW5lZClbXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0QWN0aXZlT3B0aW9ucygpXG4gICAgICAubWFwKCh7IGNoaWxkcmVuOiBjaGlsZHMgfSkgPT4gY2hpbGRzKVxuICAgICAgLmZpbHRlcigoYWN0aXZlT3B0aW9uKSA9PiBhY3RpdmVPcHRpb24/Lmxlbmd0aClcbiAgICByZXN1bHQudW5zaGlmdChvcHRpb25zKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgZGVsYXlTZWxlY3QgPSAoZnVuYz86ICgpID0+IHZvaWQpID0+IHtcbiAgICBpZiAoZGVsYXlUaW1lci5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQoZGVsYXlUaW1lci5jdXJyZW50KVxuICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gMFxuICAgIH1cbiAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmdW5jKClcbiAgICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gMFxuICAgICAgfSwgMTUwKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lbnVzID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1lbnVzYH0+XG4gICAgICB7Z2V0U2hvd09wdGlvbnMoKS5tYXAoKG9wdHMsIG1lbnVJbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tbWVudWAsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LW1lbnUtJHtzaXplfWBdOiBzaXplLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGtleT17bWVudUluZGV4fVxuICAgICAgICA+XG4gICAgICAgICAgeyhvcHRzIHx8IFtdKS5tYXAoKG8sIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHYsIHRpdGxlLCBjaGlsZHJlbjogYywgZGlzYWJsZWQ6IGQgfSA9IG9cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgYWN0aXZlVmFsdWVEdXBsaWNhdGVkID0gWy4uLmFjdGl2ZVZhbHVlXVxuICAgICAgICAgICAgICBhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQgPSBhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQuc2xpY2UoXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBtZW51SW5kZXggKyAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgYWN0aXZlVmFsdWVEdXBsaWNhdGVkW21lbnVJbmRleF0gPSB2IHx8IFwiXCJcbiAgICAgICAgICAgICAgY29uc3QgYWN0aXZlT3B0aW9ucyA9IGdldEFjdGl2ZU9wdGlvbnMoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICBzZXRBY3RpdmVWYWx1ZShhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQpXG4gICAgICAgICAgICAgIGlmICghYz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGFjdGl2ZU9wdGlvbnMsIHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShhY3RpdmVPcHRpb25zLCB7IHZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBrZXk9e3YgfHwgan1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1tZW51LWl0ZW1gLCB7XG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1tZW51LWl0ZW0tYWN0aXZlYF06IGlzQWN0aXZlT3B0aW9uKG8sIG1lbnVJbmRleCksXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRUcmlnZ2VyID09PSBcImhvdmVyXCIgJiYgYz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2VsZWN0KGhhbmRsZVNlbGVjdClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGV4cGFuZFRyaWdnZXIgPT09IFwiaG92ZXJcIiAmJiBjPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXlTZWxlY3QoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tZW51LWl0ZW0tY29udGVudGB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICB7ISFjPy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyaWFuZ2xlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1lbnUtaXRlbS1pY29uYH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBhcnJvd2VkPXtmYWxzZX1cbiAgICAgIHBvcHVwQ2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwYH1cbiAgICAgIHZpc2libGU9e2Rpc2FibGVkID8gZmFsc2UgOiB2aXNpYmxlfVxuICAgICAgb25WaXNpYmxlQ2hhbmdlPXtzZXRQb3B1cFZpc2libGV9XG4gICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgcG9wdXA9e2Ryb3Bkb3duUmVuZGVyID8gZHJvcGRvd25SZW5kZXIobWVudXMpIDogbWVudXN9XG4gICAgICB7Li4ucG9wb3ZlclByb3BzfVxuICAgID5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1idXR0b25gLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tYnV0dG9uLXZhbHVlZGBdOiBoYXNWYWx1ZSxcbiAgICAgICAgICBbYCR7cHJlZml4fS1idXR0b24tY2xlYXJhYmxlYF06IGFsbG93Q2xlYXIsXG4gICAgICAgIH0pfVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc1ZhbHVlID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1sYWJlbGB9PntnZXRUaXRsZSgpfTwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGxhY2Vob2xkZXJgfT57cGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uc2B9PlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwidHJpYW5nbGUtZG93blwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3VmZml4YH1cbiAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICA/IFwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS02MDApXCJcbiAgICAgICAgICAgICAgICA6IFwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS03MDApXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHthbGxvd0NsZWFyICYmICFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsLWNpcmNsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZW1vdmVgfVxuICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLXRyYW5zcGFyZW50LWdyYXktNzAwKVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvUG9wb3Zlcj5cbiAgKVxufVxuXG5DYXNjYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmuIXpmaRcbiAgICovXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IHRydWUg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTlgLzvvIzlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5oup5ZCO5bGV56S655qE5riy5p+T5Ye95pWwXG4gICAqL1xuICBkaXNwbGF5UmVuZGVyOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6Ieq5a6a5LmJ5LiL5ouJ5qGG5YaF5a65XG4gICAqL1xuICBkcm9wZG93blJlbmRlcjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOasoee6p+iPnOWNleeahOWxleW8gOaWueW8j++8jOWPr+mAiSAnY2xpY2snIOWSjCAnaG92ZXInXG4gICAqL1xuICBleHBhbmRUcmlnZ2VyOiBQcm9wVHlwZXMub25lT2YoW1wiY2xpY2tcIiwgXCJob3ZlclwiXSksXG4gIC8qKlxuICAgKiDlj6/pgInpobnmlbDmja7mupBcbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlgLzlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDkuIvmi4nmoYYgdmlzaWJsZSDnirbmgIHmlLnlj5jml7bnmoTlm57osINcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWNoOS9jeaWh+acrFxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlsZ7mgKflsIbkvJrpgI/kvKDnu5kgUG9wb3ZlciDnu4Tku7ZcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWAvO+8jOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbkuIvmi4nmoYYgdmlzaWJsZSDnirbmgIFcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5hbnksXG59XG5cbkNhc2NhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgY2hhbmdlT25TZWxlY3Q6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNwbGF5UmVuZGVyOiB1bmRlZmluZWQsXG4gIGRyb3Bkb3duUmVuZGVyOiB1bmRlZmluZWQsXG4gIGV4cGFuZFRyaWdnZXI6IFwiY2xpY2tcIixcbiAgb25DaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25WaXNpYmxlQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IFtdLFxuICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbiAgdmlzaWJsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FzY2FkZXJcbiJdfQ==