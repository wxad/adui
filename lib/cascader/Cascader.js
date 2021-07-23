"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

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
      expandTrigger = _ref.expandTrigger,
      onChange = _ref.onChange,
      onVisibleChange = _ref.onVisibleChange,
      options = _ref.options,
      placeholder = _ref.placeholder,
      popoverProps = _ref.popoverProps,
      size = _ref.size,
      valueProps = _ref.value,
      visibleProps = _ref.visible,
      otherProps = _objectWithoutProperties(_ref, ["allowClear", "changeOnSelect", "children", "className", "defaultValue", "disabled", "displayRender", "expandTrigger", "onChange", "onVisibleChange", "options", "placeholder", "popoverProps", "size", "value", "visible"]);

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

  var optss = getShowOptions();

  var menus = _react["default"].createElement("div", {
    className: "".concat(prefix, "-menus")
  }, _react["default"].createElement(_rcAnimate["default"], {
    transitionAppear: true,
    component: "div",
    style: {
      display: "flex"
    },
    animation: {
      appear: function appear(node, done) {
        node.classList.add("".concat(prefix, "-enter"));
        setTimeout(function () {
          node.classList.add("".concat(prefix, "-enter-active"));
        }, 50);
        var promise = new Promise(function (resolve) {
          return setTimeout(resolve, 200);
        });
        promise.then(function () {
          node.classList.remove("".concat(prefix, "-enter-active"));
          node.classList.remove("".concat(prefix, "-enter"));
          return done();
        });
        return done();
      },
      enter: function enter(node, done) {
        node.classList.add("".concat(prefix, "-enter"));
        setTimeout(function () {
          node.classList.add("".concat(prefix, "-enter-active"));
        }, 50);
        var promise = new Promise(function (resolve) {
          return setTimeout(resolve, 200);
        });
        promise.then(function () {
          node.classList.remove("".concat(prefix, "-enter-active"));
          node.classList.remove("".concat(prefix, "-enter"));
          return done();
        });
        return done();
      },
      leave: function leave(node, done) {
        node.classList.add("".concat(prefix, "-leave"));
        setTimeout(function () {
          node.classList.add("".concat(prefix, "-leave-active"));
        }, 50);
        var promise = new Promise(function (resolve) {
          return setTimeout(resolve, 200);
        });
        promise.then(function () {
          return done();
        });
      }
    }
  }, optss.map(function (opts, menuIndex) {
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
  })));

  return _react["default"].createElement(_popover["default"], _extends({
    arrowed: false,
    popupClassName: "".concat(prefix, "-popup"),
    visible: disabled ? false : visible,
    onVisibleChange: setPopupVisible,
    trigger: "click",
    popup: menus
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FzY2FkZXIvQ2FzY2FkZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNhc2NhZGVyIiwiYWxsb3dDbGVhciIsImNoYW5nZU9uU2VsZWN0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImRpc3BsYXlSZW5kZXIiLCJ0aXRsZSIsImpvaW4iLCJleHBhbmRUcmlnZ2VyIiwib25DaGFuZ2UiLCJvblZpc2libGVDaGFuZ2UiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJwb3BvdmVyUHJvcHMiLCJzaXplIiwidmFsdWVQcm9wcyIsInZhbHVlIiwidmlzaWJsZVByb3BzIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJzZXRWYWx1ZSIsImFjdGl2ZVZhbHVlIiwic2V0QWN0aXZlVmFsdWUiLCJzZXRWaXNpYmxlIiwiZGVsYXlUaW1lciIsInNldFBvcHVwVmlzaWJsZSIsInBvcHVwVmlzaWJsZSIsImhhbmRsZUNsZWFyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib3B0cyIsIm1hcCIsInYiLCJoYXNWYWx1ZSIsImxlbmd0aCIsImFycmF5VHJlZUZpbHRlciIsImRhdGEiLCJmaWx0ZXJGbiIsImNoaWxkcyIsInJlc3VsdCIsImxldmVsIiwiZm91bmRJdGVtIiwiZmlsdGVyIiwiaXRlbSIsInB1c2giLCJnZXRUaXRsZSIsInVud3JhcHBlZFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwic2VsZWN0ZWRPcHRpb25zIiwibyIsInRvU3RyaW5nIiwiaXNBY3RpdmVPcHRpb24iLCJvcHRpb24iLCJtZW51SW5kZXgiLCJnZXRBY3RpdmVPcHRpb25zIiwiYWN0aXZlVmFsdWVQYXJhbSIsImdldFNob3dPcHRpb25zIiwiYWN0aXZlT3B0aW9uIiwidW5zaGlmdCIsImRlbGF5U2VsZWN0IiwiZnVuYyIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwib3B0c3MiLCJtZW51cyIsImRpc3BsYXkiLCJhcHBlYXIiLCJub2RlIiwiZG9uZSIsImNsYXNzTGlzdCIsImFkZCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZW1vdmUiLCJlbnRlciIsImxlYXZlIiwiaiIsImMiLCJkIiwiaGFuZGxlU2VsZWN0IiwiYWN0aXZlVmFsdWVEdXBsaWNhdGVkIiwic2xpY2UiLCJhY3RpdmVPcHRpb25zIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImFueSIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGVBQWY7O0FBc0ZBLElBQU1DLFFBQWtDLEdBQUcsU0FBckNBLFFBQXFDLE9Ba0JyQztBQUFBOztBQUFBLE1BakJKQyxVQWlCSSxRQWpCSkEsVUFpQkk7QUFBQSxNQWhCSkMsY0FnQkksUUFoQkpBLGNBZ0JJO0FBQUEsTUFmSkMsUUFlSSxRQWZKQSxRQWVJO0FBQUEsTUFkSkMsU0FjSSxRQWRKQSxTQWNJO0FBQUEsTUFiSkMsWUFhSSxRQWJKQSxZQWFJO0FBQUEsTUFaSkMsUUFZSSxRQVpKQSxRQVlJO0FBQUEsZ0NBWEpDLGFBV0k7QUFBQSxNQVhKQSxhQVdJLG1DQVhZLFVBQUNDLEtBQUQ7QUFBQSxXQUFxQkEsS0FBSyxDQUFDQyxJQUFOLENBQVcsR0FBWCxDQUFyQjtBQUFBLEdBV1o7QUFBQSxNQVZKQyxhQVVJLFFBVkpBLGFBVUk7QUFBQSxNQVRKQyxRQVNJLFFBVEpBLFFBU0k7QUFBQSxNQVJKQyxlQVFJLFFBUkpBLGVBUUk7QUFBQSxNQVBKQyxPQU9JLFFBUEpBLE9BT0k7QUFBQSxNQU5KQyxXQU1JLFFBTkpBLFdB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RSxzQkFBVUcsR0FoREo7QUFvRG5CakYsRUFBQUEsWUFBWSxFQUFFOEUsc0JBQVVHLEdBcERMO0FBd0RuQmhGLEVBQUFBLElBQUksRUFBRTZFLHNCQUFVSSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0F4RGE7QUE0RG5CL0UsRUFBQUEsS0FBSyxFQUFFMkUsc0JBQVVHLEdBNURFO0FBZ0VuQjVFLEVBQUFBLE9BQU8sRUFBRXlFLHNCQUFVRztBQWhFQSxDQUFyQjtBQW1FQWhHLFFBQVEsQ0FBQ2tHLFlBQVQsR0FBd0I7QUFDdEJqRyxFQUFBQSxVQUFVLEVBQUUsSUFEVTtBQUV0QkMsRUFBQUEsY0FBYyxFQUFFLEtBRk07QUFHdEJDLEVBQUFBLFFBQVEsRUFBRSxJQUhZO0FBSXRCQyxFQUFBQSxTQUFTLEVBQUUrRixTQUpXO0FBS3RCOUYsRUFBQUEsWUFBWSxFQUFFLElBTFE7QUFNdEJDLEVBQUFBLFFBQVEsRUFBRSxLQU5ZO0FBT3RCQyxFQUFBQSxhQUFhLEVBQUU0RixTQVBPO0FBUXRCekYsRUFBQUEsYUFBYSxFQUFFLE9BUk87QUFTdEJDLEVBQUFBLFFBQVEsRUFBRXdGLFNBVFk7QUFVdEJ2RixFQUFBQSxlQUFlLEVBQUV1RixTQVZLO0FBV3RCdEYsRUFBQUEsT0FBTyxFQUFFLEVBWGE7QUFZdEJDLEVBQUFBLFdBQVcsRUFBRSxLQVpTO0FBYXRCQyxFQUFBQSxZQUFZLEVBQUUsRUFiUTtBQWN0QkMsRUFBQUEsSUFBSSxFQUFFLE9BZGdCO0FBZXRCRSxFQUFBQSxLQUFLLEVBQUUsSUFmZTtBQWdCdEJFLEVBQUFBLE9BQU8sRUFBRTtBQWhCYSxDQUF4QjtlQW1CZXBCLFEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEFuaW1hdGUgZnJvbSBcInJjLWFuaW1hdGVcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgaXNFcXVhbEFycmF5cyBmcm9tIFwiLi4vX3V0aWwvaXNFcXVhbEFycmF5c1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNhc2NhZGVyXCJcblxuZXhwb3J0IHR5cGUgQ2FzY2FkZXJWYWx1ZVR5cGUgPSBSZWFjdC5SZWFjdFRleHRbXVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyT3B0aW9uIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyXG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogQ2FzY2FkZXJPcHRpb25bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYXNjYWRlclByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmuIXpmaRcbiAgICovXG4gIGFsbG93Q2xlYXI/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlvZPmraTpobnkuLogdHJ1ZSDml7bvvIzngrnpgInmr4/nuqfoj5zljZXpgInpobnlgLzpg73kvJrlj5HnlJ/lj5jljJZcbiAgICovXG4gIGNoYW5nZU9uU2VsZWN0PzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIENhc2NhZGVyIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpu5jorqTlgLzvvIzlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IENhc2NhZGVyVmFsdWVUeXBlIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmAieaLqeWQjuWxleekuueahOa4suafk+WHveaVsFxuICAgKi9cbiAgZGlzcGxheVJlbmRlcj86IChcbiAgICB0aXRsZTogc3RyaW5nW10sXG4gICAgc2VsZWN0ZWRPcHRpb25zPzogQ2FzY2FkZXJPcHRpb25bXVxuICApID0+IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5qyh57qn6I+c5Y2V55qE5bGV5byA5pa55byP77yM5Y+v6YCJICdjbGljaycg5ZKMICdob3ZlcidcbiAgICovXG4gIGV4cGFuZFRyaWdnZXI/OiBcImNsaWNrXCIgfCBcImhvdmVyXCJcbiAgLyoqXG4gICAqIOWAvOWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZTogQ2FzY2FkZXJWYWx1ZVR5cGUsIHNlbGVjdE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10pID0+IHZvaWRcbiAgLyoqXG4gICAqIOS4i+aLieahhiB2aXNpYmxlIOeKtuaAgeaUueWPmOaXtueahOWbnuiwg1xuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWPr+mAiemhueaVsOaNrua6kFxuICAgKi9cbiAgb3B0aW9ucz86IENhc2NhZGVyT3B0aW9uW11cbiAgLyoqXG4gICAqIOWNoOS9jeaWh+acrFxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWxnuaAp+WwhuS8mumAj+S8oOe7mSBQb3BvdmVyIOe7hOS7tlxuICAgKi9cbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlgLzvvIzlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlPzogQ2FzY2FkZXJWYWx1ZVR5cGUgfCBudWxsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbkuIvmi4nmoYYgdmlzaWJsZSDnirbmgIFcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuIHwgbnVsbFxufVxuXG4vKipcbiAqIOe6p+iBlOmAieaLqeWZqOebtOinguWxleekuuW3suacieeahOWxgue6p+WFs+ezu+OAglxuICovXG5jb25zdCBDYXNjYWRlcjogUmVhY3QuRkM8SUNhc2NhZGVyUHJvcHM+ID0gKHtcbiAgYWxsb3dDbGVhcixcbiAgY2hhbmdlT25TZWxlY3QsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIGRpc3BsYXlSZW5kZXIgPSAodGl0bGU6IHN0cmluZ1tdKSA9PiB0aXRsZS5qb2luKFwiL1wiKSxcbiAgZXhwYW5kVHJpZ2dlcixcbiAgb25DaGFuZ2UsXG4gIG9uVmlzaWJsZUNoYW5nZSxcbiAgb3B0aW9ucyxcbiAgcGxhY2Vob2xkZXIsXG4gIHBvcG92ZXJQcm9wcyxcbiAgc2l6ZSxcbiAgdmFsdWU6IHZhbHVlUHJvcHMsXG4gIHZpc2libGU6IHZpc2libGVQcm9wcyxcbiAgLi4ub3RoZXJQcm9wc1xufSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPENhc2NhZGVyVmFsdWVUeXBlPihcbiAgICB2YWx1ZVByb3BzICE9PSBudWxsID8gdmFsdWVQcm9wcyB8fCBbXSA6IGRlZmF1bHRWYWx1ZSB8fCBbXVxuICApXG4gIGNvbnN0IFthY3RpdmVWYWx1ZSwgc2V0QWN0aXZlVmFsdWVdID0gdXNlU3RhdGU8Q2FzY2FkZXJWYWx1ZVR5cGU+KFxuICAgIHZhbHVlUHJvcHMgIT09IG51bGwgPyB2YWx1ZVByb3BzIHx8IFtdIDogZGVmYXVsdFZhbHVlIHx8IFtdXG4gIClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoXG4gICAgdmlzaWJsZVByb3BzICE9PSBudWxsID8gdmlzaWJsZVByb3BzIDogZmFsc2VcbiAgKVxuICBjb25zdCBkZWxheVRpbWVyID0gdXNlUmVmKDApXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAodmFsdWVQcm9wcyAhPT0gbnVsbCAmJiAhaXNFcXVhbEFycmF5cyh2YWx1ZVByb3BzIHx8IFtdLCB2YWx1ZSkpIHtcbiAgICBzZXRWYWx1ZSh2YWx1ZVByb3BzIHx8IFtdKVxuICB9XG4gIGlmICh2aXNpYmxlUHJvcHMgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gdmlzaWJsZVByb3BzKSB7XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlUHJvcHMpXG4gIH1cblxuICBjb25zdCBzZXRQb3B1cFZpc2libGUgPSAocG9wdXBWaXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHZpc2libGVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgc2V0VmlzaWJsZShwb3B1cFZpc2libGUpXG4gICAgfVxuICAgIGlmIChwb3B1cFZpc2libGUgJiYgIXZpc2libGUpIHtcbiAgICAgIHNldEFjdGl2ZVZhbHVlKHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICBvblZpc2libGVDaGFuZ2UocG9wdXBWaXNpYmxlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgc2V0UG9wdXBWaXNpYmxlKGZhbHNlKVxuICAgIGlmICghdmFsdWVQcm9wcykge1xuICAgICAgc2V0VmFsdWUoW10pXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcbiAgICBvcHRzOiBDYXNjYWRlck9wdGlvbltdLFxuICAgIHsgdmlzaWJsZTogcG9wdXBWaXNpYmxlIH06IHsgdmlzaWJsZTogYm9vbGVhbiB9XG4gICkgPT4ge1xuICAgIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUpXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShcbiAgICAgICAgb3B0cy5tYXAoKHsgdmFsdWU6IHYgfSkgPT4gdiB8fCBcIlwiKSxcbiAgICAgICAgb3B0c1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhc1ZhbHVlID0gdmFsdWU/Lmxlbmd0aFxuXG4gIGNvbnN0IGFycmF5VHJlZUZpbHRlciA9IDxUIGV4dGVuZHMgdW5rbm93bj4oXG4gICAgZGF0YTogVFtdID0gW10sXG4gICAgZmlsdGVyRm46IChpdGVtOiBULCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuXG4gICkgPT4ge1xuICAgIGxldCBjaGlsZHMgPSBkYXRhXG4gICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXVxuICAgIGxldCBsZXZlbCA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBmb3VuZEl0ZW06IFQgPSBjaGlsZHMuZmlsdGVyKChpdGVtKSA9PiBmaWx0ZXJGbihpdGVtLCBsZXZlbCkpWzBdXG4gICAgICBpZiAoIWZvdW5kSXRlbSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goZm91bmRJdGVtKVxuICAgICAgY2hpbGRzID0gKGZvdW5kSXRlbSBhcyBhbnkpLmNoaWxkcmVuIHx8IFtdXG4gICAgICBsZXZlbCArPSAxXG4gICAgfSB3aGlsZSAoY2hpbGRzLmxlbmd0aCA+IDApXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdW53cmFwcGVkVmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlWzBdKSA/IHZhbHVlWzBdIDogdmFsdWVcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBhcnJheVRyZWVGaWx0ZXIoXG4gICAgICBvcHRpb25zLFxuICAgICAgKG8sIGxldmVsOiBudW1iZXIpID0+IG8udmFsdWUgPT09IHVud3JhcHBlZFZhbHVlW2xldmVsXVxuICAgIClcbiAgICBjb25zdCB0aXRsZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGhcbiAgICAgID8gc2VsZWN0ZWRPcHRpb25zLm1hcCgobykgPT4gby50aXRsZSlcbiAgICAgIDogdmFsdWVcbiAgICByZXR1cm4gZGlzcGxheVJlbmRlcihcbiAgICAgIHRpdGxlLm1hcCgobykgPT4gKG8gfHwgXCJcIikudG9TdHJpbmcoKSksXG4gICAgICBzZWxlY3RlZE9wdGlvbnNcbiAgICApXG4gIH1cblxuICBjb25zdCBpc0FjdGl2ZU9wdGlvbiA9IChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBtZW51SW5kZXg6IG51bWJlcikgPT5cbiAgICBhY3RpdmVWYWx1ZVttZW51SW5kZXhdID09PSBvcHRpb24udmFsdWVcblxuICBjb25zdCBnZXRBY3RpdmVPcHRpb25zID0gKFxuICAgIGFjdGl2ZVZhbHVlUGFyYW0/OiBDYXNjYWRlclZhbHVlVHlwZVxuICApOiBDYXNjYWRlck9wdGlvbltdID0+XG4gICAgYXJyYXlUcmVlRmlsdGVyKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIChvLCBsZXZlbCkgPT4gby52YWx1ZSA9PT0gKGFjdGl2ZVZhbHVlUGFyYW0gfHwgYWN0aXZlVmFsdWUpW2xldmVsXVxuICAgIClcblxuICBjb25zdCBnZXRTaG93T3B0aW9ucyA9ICgpOiAoQ2FzY2FkZXJPcHRpb25bXSB8IHVuZGVmaW5lZClbXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0QWN0aXZlT3B0aW9ucygpXG4gICAgICAubWFwKCh7IGNoaWxkcmVuOiBjaGlsZHMgfSkgPT4gY2hpbGRzKVxuICAgICAgLmZpbHRlcigoYWN0aXZlT3B0aW9uKSA9PiBhY3RpdmVPcHRpb24/Lmxlbmd0aClcbiAgICByZXN1bHQudW5zaGlmdChvcHRpb25zKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgZGVsYXlTZWxlY3QgPSAoZnVuYz86ICgpID0+IHZvaWQpID0+IHtcbiAgICBpZiAoZGVsYXlUaW1lci5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQoZGVsYXlUaW1lci5jdXJyZW50KVxuICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gMFxuICAgIH1cbiAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmdW5jKClcbiAgICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gMFxuICAgICAgfSwgMTUwKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9wdHNzID0gZ2V0U2hvd09wdGlvbnMoKVxuXG4gIGNvbnN0IG1lbnVzID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1lbnVzYH0+XG4gICAgICA8QW5pbWF0ZVxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19XG4gICAgICAgIGFuaW1hdGlvbj17e1xuICAgICAgICAgIGFwcGVhcihub2RlOiBIVE1MRWxlbWVudCwgZG9uZTogKCkgPT4gdm9pZCkge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tZW50ZXJgKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWVudGVyLWFjdGl2ZWApXG4gICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDApKVxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGAke3ByZWZpeH0tZW50ZXItYWN0aXZlYClcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGAke3ByZWZpeH0tZW50ZXJgKVxuICAgICAgICAgICAgICByZXR1cm4gZG9uZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGRvbmUoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW50ZXIobm9kZTogSFRNTEVsZW1lbnQsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWVudGVyYClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1lbnRlci1hY3RpdmVgKVxuICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwKSlcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShgJHtwcmVmaXh9LWVudGVyLWFjdGl2ZWApXG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShgJHtwcmVmaXh9LWVudGVyYClcbiAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBkb25lKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlYXZlKG5vZGU6IEhUTUxFbGVtZW50LCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1sZWF2ZWApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tbGVhdmUtYWN0aXZlYClcbiAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMCkpXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZG9uZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtvcHRzcy5tYXAoKG9wdHMsIG1lbnVJbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LW1lbnVgLCB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LW1lbnUtJHtzaXplfWBdOiBzaXplLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9e21lbnVJbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KG9wdHMgfHwgW10pLm1hcCgobywgaikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlOiB2LCB0aXRsZSwgY2hpbGRyZW46IGMsIGRpc2FibGVkOiBkIH0gPSBvXG4gICAgICAgICAgICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQgPSBbLi4uYWN0aXZlVmFsdWVdXG4gICAgICAgICAgICAgICAgYWN0aXZlVmFsdWVEdXBsaWNhdGVkID0gYWN0aXZlVmFsdWVEdXBsaWNhdGVkLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIG1lbnVJbmRleCArIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgYWN0aXZlVmFsdWVEdXBsaWNhdGVkW21lbnVJbmRleF0gPSB2IHx8IFwiXCJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVPcHRpb25zID0gZ2V0QWN0aXZlT3B0aW9ucyhhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQpXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVmFsdWUoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICAgIGlmICghYz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoYWN0aXZlT3B0aW9ucywgeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlT25TZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShhY3RpdmVPcHRpb25zLCB7IHZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3BzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGFjdGl2ZVZhbHVlRHVwbGljYXRlZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICBrZXk9e3YgfHwgan1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LW1lbnUtaXRlbWAsIHtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tbWVudS1pdGVtLWFjdGl2ZWBdOiBpc0FjdGl2ZU9wdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICBvLFxuICAgICAgICAgICAgICAgICAgICAgIG1lbnVJbmRleFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGU/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwYW5kVHJpZ2dlciA9PT0gXCJob3ZlclwiICYmIGM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgIGRlbGF5U2VsZWN0KGhhbmRsZVNlbGVjdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwYW5kVHJpZ2dlciA9PT0gXCJob3ZlclwiICYmIGM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgIGRlbGF5U2VsZWN0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tZW51LWl0ZW0tY29udGVudGB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHshIWM/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyaWFuZ2xlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWVudS1pdGVtLWljb25gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9BbmltYXRlPlxuICAgIDwvZGl2PlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclxuICAgICAgYXJyb3dlZD17ZmFsc2V9XG4gICAgICBwb3B1cENsYXNzTmFtZT17YCR7cHJlZml4fS1wb3B1cGB9XG4gICAgICB2aXNpYmxlPXtkaXNhYmxlZCA/IGZhbHNlIDogdmlzaWJsZX1cbiAgICAgIG9uVmlzaWJsZUNoYW5nZT17c2V0UG9wdXBWaXNpYmxlfVxuICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgIHBvcHVwPXttZW51c31cbiAgICAgIHsuLi5wb3BvdmVyUHJvcHN9XG4gICAgPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWJ1dHRvbmAsIHtcbiAgICAgICAgICBbYCR7cHJlZml4fS1idXR0b24tdmFsdWVkYF06IGhhc1ZhbHVlLFxuICAgICAgICAgIFtgJHtwcmVmaXh9LWJ1dHRvbi1jbGVhcmFibGVgXTogYWxsb3dDbGVhcixcbiAgICAgICAgfSl9XG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICB7aGFzVmFsdWUgPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWxhYmVsYH0+e2dldFRpdGxlKCl9PC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wbGFjZWhvbGRlcmB9PntwbGFjZWhvbGRlcn08L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25zYH0+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJ0cmlhbmdsZS1kb3duXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zdWZmaXhgfVxuICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgID8gXCJ2YXIoLS10cmFuc3BhcmVudC1ncmF5LTYwMClcIlxuICAgICAgICAgICAgICAgIDogXCJ2YXIoLS10cmFuc3BhcmVudC1ncmF5LTcwMClcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2FsbG93Q2xlYXIgJiYgIWRpc2FibGVkICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGljb249XCJjYW5jZWwtY2lyY2xlXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXJlbW92ZWB9XG4gICAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS03MDApXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xlYXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Qb3BvdmVyPlxuICApXG59XG5cbkNhc2NhZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgea4hemZpFxuICAgKi9cbiAgYWxsb3dDbGVhcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlvZPmraTpobnkuLogdHJ1ZSDml7bvvIzngrnpgInmr4/nuqfoj5zljZXpgInpobnlgLzpg73kvJrlj5HnlJ/lj5jljJZcbiAgICovXG4gIGNoYW5nZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCN77yM5rOo5oSPIERpYWxvZyDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOm7mOiupOWAvO+8jOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDpgInmi6nlkI7lsZXnpLrnmoTmuLLmn5Plh73mlbBcbiAgICovXG4gIGRpc3BsYXlSZW5kZXI6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmrKHnuqfoj5zljZXnmoTlsZXlvIDmlrnlvI/vvIzlj6/pgIkgJ2NsaWNrJyDlkowgJ2hvdmVyJ1xuICAgKi9cbiAgZXhwYW5kVHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mKFtcImNsaWNrXCIsIFwiaG92ZXJcIl0pLFxuICAvKipcbiAgICog5Y+v6YCJ6aG55pWw5o2u5rqQXG4gICAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5LiL5ouJ5qGGIHZpc2libGUg54q25oCB5pS55Y+Y5pe255qE5Zue6LCDXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDljaDkvY3mlofmnKxcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5bGe5oCn5bCG5Lya6YCP5Lyg57uZIFBvcG92ZXIg57uE5Lu2XG4gICAqL1xuICBwb3BvdmVyUHJvcHM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlgLzvvIzlpJbpg6jmjqfliLZcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi25LiL5ouJ5qGGIHZpc2libGUg54q25oCBXG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYW55LFxufVxuXG5DYXNjYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsbG93Q2xlYXI6IHRydWUsXG4gIGNoYW5nZU9uU2VsZWN0OiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzcGxheVJlbmRlcjogdW5kZWZpbmVkLFxuICBleHBhbmRUcmlnZ2VyOiBcImNsaWNrXCIsXG4gIG9uQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9uVmlzaWJsZUNoYW5nZTogdW5kZWZpbmVkLFxuICBvcHRpb25zOiBbXSxcbiAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gIHBvcG92ZXJQcm9wczoge30sXG4gIHNpemU6IFwic21hbGxcIixcbiAgdmFsdWU6IG51bGwsXG4gIHZpc2libGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhc2NhZGVyXG4iXX0=