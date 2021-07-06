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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FzY2FkZXIvQ2FzY2FkZXIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNhc2NhZGVyIiwiYWxsb3dDbGVhciIsImNoYW5nZU9uU2VsZWN0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImRpc3BsYXlSZW5kZXIiLCJ0aXRsZSIsImpvaW4iLCJleHBhbmRUcmlnZ2VyIiwib25DaGFuZ2UiLCJvblZpc2libGVDaGFuZ2UiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJwb3BvdmVyUHJvcHMiLCJzaXplIiwidmFsdWVQcm9wcyIsInZhbHVlIiwidmlzaWJsZVByb3BzIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJzZXRWYWx1ZSIsImFjdGl2ZVZhbHVlIiwic2V0QWN0aXZlVmFsdWUiLCJzZXRWaXNpYmxlIiwiZGVsYXlUaW1lciIsInNldFBvcHVwVmlzaWJsZSIsInBvcHVwVmlzaWJsZSIsImhhbmRsZUNsZWFyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib3B0cyIsIm1hcCIsInYiLCJoYXNWYWx1ZSIsImxlbmd0aCIsImFycmF5VHJlZUZpbHRlciIsImRhdGEiLCJmaWx0ZXJGbiIsImNoaWxkcyIsInJlc3VsdCIsImxldmVsIiwiZm91bmRJdGVtIiwiZmlsdGVyIiwiaXRlbSIsInB1c2giLCJnZXRUaXRsZSIsInVud3JhcHBlZFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwic2VsZWN0ZWRPcHRpb25zIiwibyIsInRvU3RyaW5nIiwiaXNBY3RpdmVPcHRpb24iLCJvcHRpb24iLCJtZW51SW5kZXgiLCJnZXRBY3RpdmVPcHRpb25zIiwiYWN0aXZlVmFsdWVQYXJhbSIsImdldFNob3dPcHRpb25zIiwiYWN0aXZlT3B0aW9uIiwidW5zaGlmdCIsImRlbGF5U2VsZWN0IiwiZnVuYyIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwib3B0c3MiLCJtZW51cyIsImRpc3BsYXkiLCJhcHBlYXIiLCJub2RlIiwiZG9uZSIsImNsYXNzTGlzdCIsImFkZCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZW1vdmUiLCJlbnRlciIsImxlYXZlIiwiaiIsImMiLCJkIiwiaGFuZGxlU2VsZWN0IiwiYWN0aXZlVmFsdWVEdXBsaWNhdGVkIiwic2xpY2UiLCJhY3RpdmVPcHRpb25zIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImFueSIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGVBQWY7O0FBc0ZBLElBQU1DLFFBQWdDLEdBQUcsU0FBbkNBLFFBQW1DLE9Ba0JyQjtBQUFBOztBQUFBLE1BakJsQkMsVUFpQmtCLFFBakJsQkEsVUFpQmtCO0FBQUEsTUFoQmxCQyxjQWdCa0IsUUFoQmxCQSxjQWdCa0I7QUFBQSxNQWZsQkMsUUFla0IsUUFmbEJBLFFBZWtCO0FBQUEsTUFkbEJDLFNBY2tCLFFBZGxCQSxTQWNrQjtBQUFBLE1BYmxCQyxZQWFrQixRQWJsQkEsWUFha0I7QUFBQSxNQVpsQkMsUUFZa0IsUUFabEJBLFFBWWtCO0FBQUEsZ0NBWGxCQyxhQVdrQjtBQUFBLE1BWGxCQSxhQVdrQixtQ0FYRixVQUFDQyxLQUFEO0FBQUEsV0FBcUJBLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEdBQVgsQ0FBckI7QUFBQSxHQVdFO0FBQUEsTUFWbEJDLGFBVWtCLFFBVmxCQSxhQVVrQjtBQUFBLE1BVGxCQyxRQVNrQixRQVRsQkEsUUFTa0I7QUFBQSxNQVJsQkMsZUFRa0IsUUFSbEJBLGVBUWtCO0FBQUEsTUFQbEJD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QUFBQSxlQUFlLEVBQUVpRixzQkFBVUcsR0E1Q1I7QUFnRG5CbEYsRUFBQUEsV0FBVyxFQUFFK0Usc0JBQVVHLEdBaERKO0FBb0RuQmpGLEVBQUFBLFlBQVksRUFBRThFLHNCQUFVRyxHQXBETDtBQXdEbkJoRixFQUFBQSxJQUFJLEVBQUU2RSxzQkFBVUksS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBeERhO0FBNERuQi9FLEVBQUFBLEtBQUssRUFBRTJFLHNCQUFVRyxHQTVERTtBQWdFbkI1RSxFQUFBQSxPQUFPLEVBQUV5RSxzQkFBVUc7QUFoRUEsQ0FBckI7QUFtRUFoRyxRQUFRLENBQUNrRyxZQUFULEdBQXdCO0FBQ3RCakcsRUFBQUEsVUFBVSxFQUFFLElBRFU7QUFFdEJDLEVBQUFBLGNBQWMsRUFBRSxLQUZNO0FBR3RCQyxFQUFBQSxRQUFRLEVBQUUsSUFIWTtBQUl0QkMsRUFBQUEsU0FBUyxFQUFFK0YsU0FKVztBQUt0QjlGLEVBQUFBLFlBQVksRUFBRSxJQUxRO0FBTXRCQyxFQUFBQSxRQUFRLEVBQUUsS0FOWTtBQU90QkMsRUFBQUEsYUFBYSxFQUFFNEYsU0FQTztBQVF0QnpGLEVBQUFBLGFBQWEsRUFBRSxPQVJPO0FBU3RCQyxFQUFBQSxRQUFRLEVBQUV3RixTQVRZO0FBVXRCdkYsRUFBQUEsZUFBZSxFQUFFdUYsU0FWSztBQVd0QnRGLEVBQUFBLE9BQU8sRUFBRSxFQVhhO0FBWXRCQyxFQUFBQSxXQUFXLEVBQUUsS0FaUztBQWF0QkMsRUFBQUEsWUFBWSxFQUFFLEVBYlE7QUFjdEJDLEVBQUFBLElBQUksRUFBRSxPQWRnQjtBQWV0QkUsRUFBQUEsS0FBSyxFQUFFLElBZmU7QUFnQnRCRSxFQUFBQSxPQUFPLEVBQUU7QUFoQmEsQ0FBeEI7ZUFtQmVwQixRIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IGlzRXF1YWxBcnJheXMgZnJvbSBcIi4uL191dGlsL2lzRXF1YWxBcnJheXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jYXNjYWRlclwiXG5cbmV4cG9ydCB0eXBlIENhc2NhZGVyVmFsdWVUeXBlID0gUmVhY3QuUmVhY3RUZXh0W11cblxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlck9wdGlvbiB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlclxuICB0aXRsZTogUmVhY3QuUmVhY3ROb2RlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBjaGlsZHJlbj86IENhc2NhZGVyT3B0aW9uW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHJhd2VyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgea4hemZpFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOW9k+atpOmhueS4uiB0cnVlIOaXtu+8jOeCuemAieavj+e6p+iPnOWNlemAiemhueWAvOmDveS8muWPkeeUn+WPmOWMllxuICAgKi9cbiAgY2hhbmdlT25TZWxlY3Q/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI3vvIzms6jmhI8gQ2FzY2FkZXIg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOWAvO+8jOWGhemDqOmpseWKqFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogQ2FzY2FkZXJWYWx1ZVR5cGUgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6YCJ5oup5ZCO5bGV56S655qE5riy5p+T5Ye95pWwXG4gICAqL1xuICBkaXNwbGF5UmVuZGVyPzogKFxuICAgIHRpdGxlOiBzdHJpbmdbXSxcbiAgICBzZWxlY3RlZE9wdGlvbnM/OiBDYXNjYWRlck9wdGlvbltdXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmrKHnuqfoj5zljZXnmoTlsZXlvIDmlrnlvI/vvIzlj6/pgIkgJ2NsaWNrJyDlkowgJ2hvdmVyJ1xuICAgKi9cbiAgZXhwYW5kVHJpZ2dlcj86IFwiY2xpY2tcIiB8IFwiaG92ZXJcIlxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBDYXNjYWRlclZhbHVlVHlwZSwgc2VsZWN0T3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSkgPT4gdm9pZFxuICAvKipcbiAgICog5LiL5ouJ5qGGIHZpc2libGUg54q25oCB5pS55Y+Y5pe255qE5Zue6LCDXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5Y+v6YCJ6aG55pWw5o2u5rqQXG4gICAqL1xuICBvcHRpb25zPzogQ2FzY2FkZXJPcHRpb25bXVxuICAvKipcbiAgICog5Y2g5L2N5paH5pysXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5bGe5oCn5bCG5Lya6YCP5Lyg57uZIFBvcG92ZXIg57uE5Lu2XG4gICAqL1xuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWAvO+8jOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBDYXNjYWRlclZhbHVlVHlwZSB8IG51bGxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItuS4i+aLieahhiB2aXNpYmxlIOeKtuaAgVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG59XG5cbi8qKlxuICog57qn6IGU6YCJ5oup5Zmo55u06KeC5bGV56S65bey5pyJ55qE5bGC57qn5YWz57O744CCXG4gKi9cbmNvbnN0IENhc2NhZGVyOiBSZWFjdC5GQzxJRHJhd2VyUHJvcHM+ID0gKHtcbiAgYWxsb3dDbGVhcixcbiAgY2hhbmdlT25TZWxlY3QsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIGRpc3BsYXlSZW5kZXIgPSAodGl0bGU6IHN0cmluZ1tdKSA9PiB0aXRsZS5qb2luKFwiL1wiKSxcbiAgZXhwYW5kVHJpZ2dlcixcbiAgb25DaGFuZ2UsXG4gIG9uVmlzaWJsZUNoYW5nZSxcbiAgb3B0aW9ucyxcbiAgcGxhY2Vob2xkZXIsXG4gIHBvcG92ZXJQcm9wcyxcbiAgc2l6ZSxcbiAgdmFsdWU6IHZhbHVlUHJvcHMsXG4gIHZpc2libGU6IHZpc2libGVQcm9wcyxcbiAgLi4ub3RoZXJQcm9wc1xufTogSURyYXdlclByb3BzKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8Q2FzY2FkZXJWYWx1ZVR5cGU+KFxuICAgIHZhbHVlUHJvcHMgIT09IG51bGwgPyB2YWx1ZVByb3BzIHx8IFtdIDogZGVmYXVsdFZhbHVlIHx8IFtdXG4gIClcbiAgY29uc3QgW2FjdGl2ZVZhbHVlLCBzZXRBY3RpdmVWYWx1ZV0gPSB1c2VTdGF0ZTxDYXNjYWRlclZhbHVlVHlwZT4oXG4gICAgdmFsdWVQcm9wcyAhPT0gbnVsbCA/IHZhbHVlUHJvcHMgfHwgW10gOiBkZWZhdWx0VmFsdWUgfHwgW11cbiAgKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShcbiAgICB2aXNpYmxlUHJvcHMgIT09IG51bGwgPyB2aXNpYmxlUHJvcHMgOiBmYWxzZVxuICApXG4gIGNvbnN0IGRlbGF5VGltZXIgPSB1c2VSZWYoMClcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmICh2YWx1ZVByb3BzICE9PSBudWxsICYmICFpc0VxdWFsQXJyYXlzKHZhbHVlUHJvcHMgfHwgW10sIHZhbHVlKSkge1xuICAgIHNldFZhbHVlKHZhbHVlUHJvcHMgfHwgW10pXG4gIH1cbiAgaWYgKHZpc2libGVQcm9wcyAhPT0gbnVsbCAmJiB2aXNpYmxlICE9PSB2aXNpYmxlUHJvcHMpIHtcbiAgICBzZXRWaXNpYmxlKHZpc2libGVQcm9wcylcbiAgfVxuXG4gIGNvbnN0IHNldFBvcHVwVmlzaWJsZSA9IChwb3B1cFZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodmlzaWJsZVByb3BzID09PSBudWxsKSB7XG4gICAgICBzZXRWaXNpYmxlKHBvcHVwVmlzaWJsZSlcbiAgICB9XG4gICAgaWYgKHBvcHVwVmlzaWJsZSAmJiAhdmlzaWJsZSkge1xuICAgICAgc2V0QWN0aXZlVmFsdWUodmFsdWUpXG4gICAgfVxuICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgIG9uVmlzaWJsZUNoYW5nZShwb3B1cFZpc2libGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xlYXIgPSAoZTogUmVhY3QuTW91c2VFdmVudDxTVkdTVkdFbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBzZXRQb3B1cFZpc2libGUoZmFsc2UpXG4gICAgaWYgKCF2YWx1ZVByb3BzKSB7XG4gICAgICBzZXRWYWx1ZShbXSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxuICAgIG9wdHM6IENhc2NhZGVyT3B0aW9uW10sXG4gICAgeyB2aXNpYmxlOiBwb3B1cFZpc2libGUgfTogeyB2aXNpYmxlOiBib29sZWFuIH1cbiAgKSA9PiB7XG4gICAgc2V0UG9wdXBWaXNpYmxlKHBvcHVwVmlzaWJsZSlcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKFxuICAgICAgICBvcHRzLm1hcCgoeyB2YWx1ZTogdiB9KSA9PiB2IHx8IFwiXCIpLFxuICAgICAgICBvcHRzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFzVmFsdWUgPSB2YWx1ZT8ubGVuZ3RoXG5cbiAgY29uc3QgYXJyYXlUcmVlRmlsdGVyID0gPFQgZXh0ZW5kcyB1bmtub3duPihcbiAgICBkYXRhOiBUW10gPSBbXSxcbiAgICBmaWx0ZXJGbjogKGl0ZW06IFQsIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW5cbiAgKSA9PiB7XG4gICAgbGV0IGNoaWxkcyA9IGRhdGFcbiAgICBjb25zdCByZXN1bHQ6IFRbXSA9IFtdXG4gICAgbGV0IGxldmVsID0gMFxuICAgIGRvIHtcbiAgICAgIGNvbnN0IGZvdW5kSXRlbTogVCA9IGNoaWxkcy5maWx0ZXIoKGl0ZW0pID0+IGZpbHRlckZuKGl0ZW0sIGxldmVsKSlbMF1cbiAgICAgIGlmICghZm91bmRJdGVtKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChmb3VuZEl0ZW0pXG4gICAgICBjaGlsZHMgPSAoZm91bmRJdGVtIGFzIGFueSkuY2hpbGRyZW4gfHwgW11cbiAgICAgIGxldmVsICs9IDFcbiAgICB9IHdoaWxlIChjaGlsZHMubGVuZ3RoID4gMClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB1bndyYXBwZWRWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWVbMF0pID8gdmFsdWVbMF0gOiB2YWx1ZVxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IGFycmF5VHJlZUZpbHRlcihcbiAgICAgIG9wdGlvbnMsXG4gICAgICAobywgbGV2ZWw6IG51bWJlcikgPT4gby52YWx1ZSA9PT0gdW53cmFwcGVkVmFsdWVbbGV2ZWxdXG4gICAgKVxuICAgIGNvbnN0IHRpdGxlID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aFxuICAgICAgPyBzZWxlY3RlZE9wdGlvbnMubWFwKChvKSA9PiBvLnRpdGxlKVxuICAgICAgOiB2YWx1ZVxuICAgIHJldHVybiBkaXNwbGF5UmVuZGVyKFxuICAgICAgdGl0bGUubWFwKChvKSA9PiAobyB8fCBcIlwiKS50b1N0cmluZygpKSxcbiAgICAgIHNlbGVjdGVkT3B0aW9uc1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGlzQWN0aXZlT3B0aW9uID0gKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIG1lbnVJbmRleDogbnVtYmVyKSA9PlxuICAgIGFjdGl2ZVZhbHVlW21lbnVJbmRleF0gPT09IG9wdGlvbi52YWx1ZVxuXG4gIGNvbnN0IGdldEFjdGl2ZU9wdGlvbnMgPSAoXG4gICAgYWN0aXZlVmFsdWVQYXJhbT86IENhc2NhZGVyVmFsdWVUeXBlXG4gICk6IENhc2NhZGVyT3B0aW9uW10gPT5cbiAgICBhcnJheVRyZWVGaWx0ZXIoXG4gICAgICBvcHRpb25zLFxuICAgICAgKG8sIGxldmVsKSA9PiBvLnZhbHVlID09PSAoYWN0aXZlVmFsdWVQYXJhbSB8fCBhY3RpdmVWYWx1ZSlbbGV2ZWxdXG4gICAgKVxuXG4gIGNvbnN0IGdldFNob3dPcHRpb25zID0gKCk6IChDYXNjYWRlck9wdGlvbltdIHwgdW5kZWZpbmVkKVtdID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBnZXRBY3RpdmVPcHRpb25zKClcbiAgICAgIC5tYXAoKHsgY2hpbGRyZW46IGNoaWxkcyB9KSA9PiBjaGlsZHMpXG4gICAgICAuZmlsdGVyKChhY3RpdmVPcHRpb24pID0+IGFjdGl2ZU9wdGlvbj8ubGVuZ3RoKVxuICAgIHJlc3VsdC51bnNoaWZ0KG9wdGlvbnMpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjb25zdCBkZWxheVNlbGVjdCA9IChmdW5jPzogKCkgPT4gdm9pZCkgPT4ge1xuICAgIGlmIChkZWxheVRpbWVyLmN1cnJlbnQpIHtcbiAgICAgIGNsZWFyVGltZW91dChkZWxheVRpbWVyLmN1cnJlbnQpXG4gICAgICBkZWxheVRpbWVyLmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBkZWxheVRpbWVyLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZ1bmMoKVxuICAgICAgICBkZWxheVRpbWVyLmN1cnJlbnQgPSAwXG4gICAgICB9LCAxNTApXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb3B0c3MgPSBnZXRTaG93T3B0aW9ucygpXG5cbiAgY29uc3QgbWVudXMgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWVudXNgfT5cbiAgICAgIDxBbmltYXRlXG4gICAgICAgIHRyYW5zaXRpb25BcHBlYXJcbiAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX1cbiAgICAgICAgYW5pbWF0aW9uPXt7XG4gICAgICAgICAgYXBwZWFyKG5vZGU6IEhUTUxFbGVtZW50LCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1lbnRlcmApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tZW50ZXItYWN0aXZlYClcbiAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMCkpXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYCR7cHJlZml4fS1lbnRlci1hY3RpdmVgKVxuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYCR7cHJlZml4fS1lbnRlcmApXG4gICAgICAgICAgICAgIHJldHVybiBkb25lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gZG9uZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbnRlcihub2RlOiBIVE1MRWxlbWVudCwgZG9uZTogKCkgPT4gdm9pZCkge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tZW50ZXJgKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWVudGVyLWFjdGl2ZWApXG4gICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDApKVxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGAke3ByZWZpeH0tZW50ZXItYWN0aXZlYClcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGAke3ByZWZpeH0tZW50ZXJgKVxuICAgICAgICAgICAgICByZXR1cm4gZG9uZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGRvbmUoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVhdmUobm9kZTogSFRNTEVsZW1lbnQsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWxlYXZlYClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1sZWF2ZS1hY3RpdmVgKVxuICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwKSlcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBkb25lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge29wdHNzLm1hcCgob3B0cywgbWVudUluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tbWVudWAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tbWVudS0ke3NpemV9YF06IHNpemUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGtleT17bWVudUluZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsob3B0cyB8fCBbXSkubWFwKChvLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHYsIHRpdGxlLCBjaGlsZHJlbjogYywgZGlzYWJsZWQ6IGQgfSA9IG9cbiAgICAgICAgICAgICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZVZhbHVlRHVwbGljYXRlZCA9IFsuLi5hY3RpdmVWYWx1ZV1cbiAgICAgICAgICAgICAgICBhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQgPSBhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQuc2xpY2UoXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgbWVudUluZGV4ICsgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBhY3RpdmVWYWx1ZUR1cGxpY2F0ZWRbbWVudUluZGV4XSA9IHYgfHwgXCJcIlxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZU9wdGlvbnMgPSBnZXRBY3RpdmVPcHRpb25zKGFjdGl2ZVZhbHVlRHVwbGljYXRlZClcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVWYWx1ZShhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQpXG4gICAgICAgICAgICAgICAgaWYgKCFjPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShhY3RpdmVPcHRpb25zLCB7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGFjdGl2ZU9wdGlvbnMsIHsgdmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcHMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIGtleT17diB8fCBqfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tbWVudS1pdGVtYCwge1xuICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1tZW51LWl0ZW0tYWN0aXZlYF06IGlzQWN0aXZlT3B0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgICAgICAgICAgbWVudUluZGV4XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZT8udG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRUcmlnZ2VyID09PSBcImhvdmVyXCIgJiYgYz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVsYXlTZWxlY3QoaGFuZGxlU2VsZWN0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRUcmlnZ2VyID09PSBcImhvdmVyXCIgJiYgYz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVsYXlTZWxlY3QoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1lbnUtaXRlbS1jb250ZW50YH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgeyEhYz8ubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJpYW5nbGUtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tZW51LWl0ZW0taWNvbmB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L0FuaW1hdGU+XG4gICAgPC9kaXY+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBhcnJvd2VkPXtmYWxzZX1cbiAgICAgIHBvcHVwQ2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwYH1cbiAgICAgIHZpc2libGU9e2Rpc2FibGVkID8gZmFsc2UgOiB2aXNpYmxlfVxuICAgICAgb25WaXNpYmxlQ2hhbmdlPXtzZXRQb3B1cFZpc2libGV9XG4gICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgcG9wdXA9e21lbnVzfVxuICAgICAgey4uLnBvcG92ZXJQcm9wc31cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tYnV0dG9uYCwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LWJ1dHRvbi12YWx1ZWRgXTogaGFzVmFsdWUsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tYnV0dG9uLWNsZWFyYWJsZWBdOiBhbGxvd0NsZWFyLFxuICAgICAgICB9KX1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtoYXNWYWx1ZSA/IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbGFiZWxgfT57Z2V0VGl0bGUoKX08L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyYH0+e3BsYWNlaG9sZGVyfTwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbnNgfT5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cInRyaWFuZ2xlLWRvd25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXN1ZmZpeGB9XG4gICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgPyBcInZhcigtLXRyYW5zcGFyZW50LWdyYXktNjAwKVwiXG4gICAgICAgICAgICAgICAgOiBcInZhcigtLXRyYW5zcGFyZW50LWdyYXktNzAwKVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7YWxsb3dDbGVhciAmJiAhZGlzYWJsZWQgJiYgKFxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbC1jaXJjbGVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcmVtb3ZlYH1cbiAgICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS10cmFuc3BhcmVudC1ncmF5LTcwMClcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGVhcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1BvcG92ZXI+XG4gIClcbn1cblxuQ2FzY2FkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5riF6ZmkXG4gICAqL1xuICBhbGxvd0NsZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOW9k+atpOmhueS4uiB0cnVlIOaXtu+8jOeCuemAieavj+e6p+iPnOWNlemAiemhueWAvOmDveS8muWPkeeUn+WPmOWMllxuICAgKi9cbiAgY2hhbmdlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI3vvIzms6jmhI8gRGlhbG9nIOaJgOacieeahOWxnuaAp+S8mumZhOWKoOWIsOWGhemDqOeahOWGheWuueWFg+e0oOS4iu+8jOiAjOS4jeaYr+WMheWQqyBtYXNrIOeahOacgOWkluWxguWFg+e0oFxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k5YC877yM5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOmAieaLqeWQjuWxleekuueahOa4suafk+WHveaVsFxuICAgKi9cbiAgZGlzcGxheVJlbmRlcjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOasoee6p+iPnOWNleeahOWxleW8gOaWueW8j++8jOWPr+mAiSAnY2xpY2snIOWSjCAnaG92ZXInXG4gICAqL1xuICBleHBhbmRUcmlnZ2VyOiBQcm9wVHlwZXMub25lT2YoW1wiY2xpY2tcIiwgXCJob3ZlclwiXSksXG4gIC8qKlxuICAgKiDlj6/pgInpobnmlbDmja7mupBcbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlgLzlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDkuIvmi4nmoYYgdmlzaWJsZSDnirbmgIHmlLnlj5jml7bnmoTlm57osINcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWNoOS9jeaWh+acrFxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlsZ7mgKflsIbkvJrpgI/kvKDnu5kgUG9wb3ZlciDnu4Tku7ZcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWAvO+8jOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbkuIvmi4nmoYYgdmlzaWJsZSDnirbmgIFcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5hbnksXG59XG5cbkNhc2NhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgY2hhbmdlT25TZWxlY3Q6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNwbGF5UmVuZGVyOiB1bmRlZmluZWQsXG4gIGV4cGFuZFRyaWdnZXI6IFwiY2xpY2tcIixcbiAgb25DaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25WaXNpYmxlQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IFtdLFxuICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbiAgdmlzaWJsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FzY2FkZXJcbiJdfQ==