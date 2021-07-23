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

import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Animate from "rc-animate";
import Button from "../button";
import Icon from "../icon";
import Popover from "../popover";
import isEqualArrays from "../_util/isEqualArrays";
import "./style";
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

  var _useState = useState(valueProps !== null ? valueProps || [] : defaultValue || []),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(valueProps !== null ? valueProps || [] : defaultValue || []),
      _useState4 = _slicedToArray(_useState3, 2),
      activeValue = _useState4[0],
      setActiveValue = _useState4[1];

  var _useState5 = useState(visibleProps !== null ? visibleProps : false),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var delayTimer = useRef(0);

  if (valueProps !== null && !isEqualArrays(valueProps || [], value)) {
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
  var menus = React.createElement("div", {
    className: "".concat(prefix, "-menus")
  }, React.createElement(Animate, {
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
    return React.createElement("div", {
      className: classNames("".concat(prefix, "-menu"), _defineProperty({}, "".concat(prefix, "-menu-").concat(size), size)),
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

      return React.createElement("div", {
        role: "none",
        key: v || j,
        className: classNames("".concat(prefix, "-menu-item"), _defineProperty({}, "".concat(prefix, "-menu-item-active"), isActiveOption(o, menuIndex))),
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
      }, React.createElement("div", {
        className: "".concat(prefix, "-menu-item-content")
      }, title), !!(c !== null && c !== void 0 && c.length) && React.createElement(Icon, {
        icon: "triangle-right",
        className: "".concat(prefix, "-menu-item-icon")
      }));
    }));
  })));
  return React.createElement(Popover, _extends({
    arrowed: false,
    popupClassName: "".concat(prefix, "-popup"),
    visible: disabled ? false : visible,
    onVisibleChange: setPopupVisible,
    trigger: "click",
    popup: menus
  }, popoverProps), React.createElement(Button, _extends({
    disabled: disabled,
    className: classNames("".concat(prefix, "-button"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "-button-valued"), hasValue), _defineProperty(_classNames3, "".concat(prefix, "-button-clearable"), allowClear), _classNames3)),
    size: size
  }, otherProps), hasValue ? React.createElement("span", {
    className: "".concat(prefix, "-label")
  }, getTitle()) : React.createElement("span", {
    className: "".concat(prefix, "-placeholder")
  }, placeholder), React.createElement("div", {
    className: "".concat(prefix, "-icons")
  }, React.createElement(Icon, {
    icon: "triangle-down",
    className: "".concat(prefix, "-suffix"),
    color: disabled ? "var(--transparent-gray-600)" : "var(--transparent-gray-700)"
  }), allowClear && !disabled && React.createElement(Icon, {
    icon: "cancel-circle",
    className: "".concat(prefix, "-remove"),
    color: "var(--transparent-gray-700)",
    onClick: handleClear
  }))));
};

Cascader.propTypes = {
  allowClear: PropTypes.bool,
  changeOnSelect: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  displayRender: PropTypes.any,
  expandTrigger: PropTypes.oneOf(["click", "hover"]),
  options: PropTypes.any,
  onChange: PropTypes.any,
  onVisibleChange: PropTypes.any,
  placeholder: PropTypes.any,
  popoverProps: PropTypes.any,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  value: PropTypes.any,
  visible: PropTypes.any
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
export default Cascader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FzY2FkZXIvQ2FzY2FkZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQW5pbWF0ZSIsIkJ1dHRvbiIsIkljb24iLCJQb3BvdmVyIiwiaXNFcXVhbEFycmF5cyIsInByZWZpeCIsIkNhc2NhZGVyIiwiYWxsb3dDbGVhciIsImNoYW5nZU9uU2VsZWN0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImRpc3BsYXlSZW5kZXIiLCJ0aXRsZSIsImpvaW4iLCJleHBhbmRUcmlnZ2VyIiwib25DaGFuZ2UiLCJvblZpc2libGVDaGFuZ2UiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJwb3BvdmVyUHJvcHMiLCJzaXplIiwidmFsdWVQcm9wcyIsInZhbHVlIiwidmlzaWJsZVByb3BzIiwidmlzaWJsZSIsIm90aGVyUHJvcHMiLCJzZXRWYWx1ZSIsImFjdGl2ZVZhbHVlIiwic2V0QWN0aXZlVmFsdWUiLCJzZXRWaXNpYmxlIiwiZGVsYXlUaW1lciIsInNldFBvcHVwVmlzaWJsZSIsInBvcHVwVmlzaWJsZSIsImhhbmRsZUNsZWFyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2hhbmdlIiwib3B0cyIsIm1hcCIsInYiLCJoYXNWYWx1ZSIsImxlbmd0aCIsImFycmF5VHJlZUZpbHRlciIsImRhdGEiLCJmaWx0ZXJGbiIsImNoaWxkcyIsInJlc3VsdCIsImxldmVsIiwiZm91bmRJdGVtIiwiZmlsdGVyIiwiaXRlbSIsInB1c2giLCJnZXRUaXRsZSIsInVud3JhcHBlZFZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwic2VsZWN0ZWRPcHRpb25zIiwibyIsInRvU3RyaW5nIiwiaXNBY3RpdmVPcHRpb24iLCJvcHRpb24iLCJtZW51SW5kZXgiLCJnZXRBY3RpdmVPcHRpb25zIiwiYWN0aXZlVmFsdWVQYXJhbSIsImdldFNob3dPcHRpb25zIiwiYWN0aXZlT3B0aW9uIiwidW5zaGlmdCIsImRlbGF5U2VsZWN0IiwiZnVuYyIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwib3B0c3MiLCJtZW51cyIsImRpc3BsYXkiLCJhcHBlYXIiLCJub2RlIiwiZG9uZSIsImNsYXNzTGlzdCIsImFkZCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZW1vdmUiLCJlbnRlciIsImxlYXZlIiwiaiIsImMiLCJkIiwiaGFuZGxlU2VsZWN0IiwiYWN0aXZlVmFsdWVEdXBsaWNhdGVkIiwic2xpY2UiLCJhY3RpdmVPcHRpb25zIiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImFueSIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBT0EsS0FBUCxJQUFnQkMsTUFBaEIsRUFBd0JDLFFBQXhCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFlBQXBCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsU0FBakI7QUFDQSxPQUFPQyxPQUFQLE1BQXVDLFlBQXZDO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQix3QkFBMUI7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsZUFBZjs7QUFzRkEsSUFBTUMsUUFBa0MsR0FBRyxTQUFyQ0EsUUFBcUMsT0FrQnJDO0FBQUE7O0FBQUEsTUFqQkpDLFVBaUJJLFFBakJKQSxVQWlCSTtBQUFBLE1BaEJKQyxjQWdCSSxRQWhCSkEsY0FnQkk7QUFBQSxNQWZKQyxRQWVJLFFBZkpBLFFBZUk7QUFBQSxNQWRKQyxTQWNJLFFBZEpBLFNBY0k7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TztBQVN0QkMsRUFBQUEsUUFBUSxFQUFFdUYsU0FUWTtBQVV0QnRGLEVBQUFBLGVBQWUsRUFBRXNGLFNBVks7QUFXdEJyRixFQUFBQSxPQUFPLEVBQUUsRUFYYTtBQVl0QkMsRUFBQUEsV0FBVyxFQUFFLEtBWlM7QUFhdEJDLEVBQUFBLFlBQVksRUFBRSxFQWJRO0FBY3RCQyxFQUFBQSxJQUFJLEVBQUUsT0FkZ0I7QUFldEJFLEVBQUFBLEtBQUssRUFBRSxJQWZlO0FBZ0J0QkUsRUFBQUEsT0FBTyxFQUFFO0FBaEJhLENBQXhCO0FBbUJBLGVBQWVwQixRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IGlzRXF1YWxBcnJheXMgZnJvbSBcIi4uL191dGlsL2lzRXF1YWxBcnJheXNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jYXNjYWRlclwiXG5cbmV4cG9ydCB0eXBlIENhc2NhZGVyVmFsdWVUeXBlID0gUmVhY3QuUmVhY3RUZXh0W11cblxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlck9wdGlvbiB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlclxuICB0aXRsZTogUmVhY3QuUmVhY3ROb2RlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBjaGlsZHJlbj86IENhc2NhZGVyT3B0aW9uW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2FzY2FkZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5riF6ZmkXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhblxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IHRydWUg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBDYXNjYWRlciDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k5YC877yM5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBDYXNjYWRlclZhbHVlVHlwZSB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpgInmi6nlkI7lsZXnpLrnmoTmuLLmn5Plh73mlbBcbiAgICovXG4gIGRpc3BsYXlSZW5kZXI/OiAoXG4gICAgdGl0bGU6IHN0cmluZ1tdLFxuICAgIHNlbGVjdGVkT3B0aW9ucz86IENhc2NhZGVyT3B0aW9uW11cbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOasoee6p+iPnOWNleeahOWxleW8gOaWueW8j++8jOWPr+mAiSAnY2xpY2snIOWSjCAnaG92ZXInXG4gICAqL1xuICBleHBhbmRUcmlnZ2VyPzogXCJjbGlja1wiIHwgXCJob3ZlclwiXG4gIC8qKlxuICAgKiDlgLzlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU6IENhc2NhZGVyVmFsdWVUeXBlLCBzZWxlY3RPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDkuIvmi4nmoYYgdmlzaWJsZSDnirbmgIHmlLnlj5jml7bnmoTlm57osINcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlj6/pgInpobnmlbDmja7mupBcbiAgICovXG4gIG9wdGlvbnM/OiBDYXNjYWRlck9wdGlvbltdXG4gIC8qKlxuICAgKiDljaDkvY3mlofmnKxcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDlsZ7mgKflsIbkvJrpgI/kvKDnu5kgUG9wb3ZlciDnu4Tku7ZcbiAgICovXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5YC877yM5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZT86IENhc2NhZGVyVmFsdWVUeXBlIHwgbnVsbFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi25LiL5ouJ5qGGIHZpc2libGUg54q25oCBXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbiB8IG51bGxcbn1cblxuLyoqXG4gKiDnuqfogZTpgInmi6nlmajnm7Top4LlsZXnpLrlt7LmnInnmoTlsYLnuqflhbPns7vjgIJcbiAqL1xuY29uc3QgQ2FzY2FkZXI6IFJlYWN0LkZDPElDYXNjYWRlclByb3BzPiA9ICh7XG4gIGFsbG93Q2xlYXIsXG4gIGNoYW5nZU9uU2VsZWN0LFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkZWZhdWx0VmFsdWUsXG4gIGRpc2FibGVkLFxuICBkaXNwbGF5UmVuZGVyID0gKHRpdGxlOiBzdHJpbmdbXSkgPT4gdGl0bGUuam9pbihcIi9cIiksXG4gIGV4cGFuZFRyaWdnZXIsXG4gIG9uQ2hhbmdlLFxuICBvblZpc2libGVDaGFuZ2UsXG4gIG9wdGlvbnMsXG4gIHBsYWNlaG9sZGVyLFxuICBwb3BvdmVyUHJvcHMsXG4gIHNpemUsXG4gIHZhbHVlOiB2YWx1ZVByb3BzLFxuICB2aXNpYmxlOiB2aXNpYmxlUHJvcHMsXG4gIC4uLm90aGVyUHJvcHNcbn0pID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxDYXNjYWRlclZhbHVlVHlwZT4oXG4gICAgdmFsdWVQcm9wcyAhPT0gbnVsbCA/IHZhbHVlUHJvcHMgfHwgW10gOiBkZWZhdWx0VmFsdWUgfHwgW11cbiAgKVxuICBjb25zdCBbYWN0aXZlVmFsdWUsIHNldEFjdGl2ZVZhbHVlXSA9IHVzZVN0YXRlPENhc2NhZGVyVmFsdWVUeXBlPihcbiAgICB2YWx1ZVByb3BzICE9PSBudWxsID8gdmFsdWVQcm9wcyB8fCBbXSA6IGRlZmF1bHRWYWx1ZSB8fCBbXVxuICApXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKFxuICAgIHZpc2libGVQcm9wcyAhPT0gbnVsbCA/IHZpc2libGVQcm9wcyA6IGZhbHNlXG4gIClcbiAgY29uc3QgZGVsYXlUaW1lciA9IHVzZVJlZigwKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKHZhbHVlUHJvcHMgIT09IG51bGwgJiYgIWlzRXF1YWxBcnJheXModmFsdWVQcm9wcyB8fCBbXSwgdmFsdWUpKSB7XG4gICAgc2V0VmFsdWUodmFsdWVQcm9wcyB8fCBbXSlcbiAgfVxuICBpZiAodmlzaWJsZVByb3BzICE9PSBudWxsICYmIHZpc2libGUgIT09IHZpc2libGVQcm9wcykge1xuICAgIHNldFZpc2libGUodmlzaWJsZVByb3BzKVxuICB9XG5cbiAgY29uc3Qgc2V0UG9wdXBWaXNpYmxlID0gKHBvcHVwVmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgIGlmICh2aXNpYmxlUHJvcHMgPT09IG51bGwpIHtcbiAgICAgIHNldFZpc2libGUocG9wdXBWaXNpYmxlKVxuICAgIH1cbiAgICBpZiAocG9wdXBWaXNpYmxlICYmICF2aXNpYmxlKSB7XG4gICAgICBzZXRBY3RpdmVWYWx1ZSh2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgb25WaXNpYmxlQ2hhbmdlKHBvcHVwVmlzaWJsZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGVhciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PFNWR1NWR0VsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHNldFBvcHVwVmlzaWJsZShmYWxzZSlcbiAgICBpZiAoIXZhbHVlUHJvcHMpIHtcbiAgICAgIHNldFZhbHVlKFtdKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKFtdLCBbXSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoXG4gICAgb3B0czogQ2FzY2FkZXJPcHRpb25bXSxcbiAgICB7IHZpc2libGU6IHBvcHVwVmlzaWJsZSB9OiB7IHZpc2libGU6IGJvb2xlYW4gfVxuICApID0+IHtcbiAgICBzZXRQb3B1cFZpc2libGUocG9wdXBWaXNpYmxlKVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoXG4gICAgICAgIG9wdHMubWFwKCh7IHZhbHVlOiB2IH0pID0+IHYgfHwgXCJcIiksXG4gICAgICAgIG9wdHNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYXNWYWx1ZSA9IHZhbHVlPy5sZW5ndGhcblxuICBjb25zdCBhcnJheVRyZWVGaWx0ZXIgPSA8VCBleHRlbmRzIHVua25vd24+KFxuICAgIGRhdGE6IFRbXSA9IFtdLFxuICAgIGZpbHRlckZuOiAoaXRlbTogVCwgbGV2ZWw6IG51bWJlcikgPT4gYm9vbGVhblxuICApID0+IHtcbiAgICBsZXQgY2hpbGRzID0gZGF0YVxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW11cbiAgICBsZXQgbGV2ZWwgPSAwXG4gICAgZG8ge1xuICAgICAgY29uc3QgZm91bmRJdGVtOiBUID0gY2hpbGRzLmZpbHRlcigoaXRlbSkgPT4gZmlsdGVyRm4oaXRlbSwgbGV2ZWwpKVswXVxuICAgICAgaWYgKCFmb3VuZEl0ZW0pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKGZvdW5kSXRlbSlcbiAgICAgIGNoaWxkcyA9IChmb3VuZEl0ZW0gYXMgYW55KS5jaGlsZHJlbiB8fCBbXVxuICAgICAgbGV2ZWwgKz0gMVxuICAgIH0gd2hpbGUgKGNoaWxkcy5sZW5ndGggPiAwKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHVud3JhcHBlZFZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZVswXSkgPyB2YWx1ZVswXSA6IHZhbHVlXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gYXJyYXlUcmVlRmlsdGVyKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIChvLCBsZXZlbDogbnVtYmVyKSA9PiBvLnZhbHVlID09PSB1bndyYXBwZWRWYWx1ZVtsZXZlbF1cbiAgICApXG4gICAgY29uc3QgdGl0bGUgPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoXG4gICAgICA/IHNlbGVjdGVkT3B0aW9ucy5tYXAoKG8pID0+IG8udGl0bGUpXG4gICAgICA6IHZhbHVlXG4gICAgcmV0dXJuIGRpc3BsYXlSZW5kZXIoXG4gICAgICB0aXRsZS5tYXAoKG8pID0+IChvIHx8IFwiXCIpLnRvU3RyaW5nKCkpLFxuICAgICAgc2VsZWN0ZWRPcHRpb25zXG4gICAgKVxuICB9XG5cbiAgY29uc3QgaXNBY3RpdmVPcHRpb24gPSAob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgbWVudUluZGV4OiBudW1iZXIpID0+XG4gICAgYWN0aXZlVmFsdWVbbWVudUluZGV4XSA9PT0gb3B0aW9uLnZhbHVlXG5cbiAgY29uc3QgZ2V0QWN0aXZlT3B0aW9ucyA9IChcbiAgICBhY3RpdmVWYWx1ZVBhcmFtPzogQ2FzY2FkZXJWYWx1ZVR5cGVcbiAgKTogQ2FzY2FkZXJPcHRpb25bXSA9PlxuICAgIGFycmF5VHJlZUZpbHRlcihcbiAgICAgIG9wdGlvbnMsXG4gICAgICAobywgbGV2ZWwpID0+IG8udmFsdWUgPT09IChhY3RpdmVWYWx1ZVBhcmFtIHx8IGFjdGl2ZVZhbHVlKVtsZXZlbF1cbiAgICApXG5cbiAgY29uc3QgZ2V0U2hvd09wdGlvbnMgPSAoKTogKENhc2NhZGVyT3B0aW9uW10gfCB1bmRlZmluZWQpW10gPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGdldEFjdGl2ZU9wdGlvbnMoKVxuICAgICAgLm1hcCgoeyBjaGlsZHJlbjogY2hpbGRzIH0pID0+IGNoaWxkcylcbiAgICAgIC5maWx0ZXIoKGFjdGl2ZU9wdGlvbikgPT4gYWN0aXZlT3B0aW9uPy5sZW5ndGgpXG4gICAgcmVzdWx0LnVuc2hpZnQob3B0aW9ucylcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGNvbnN0IGRlbGF5U2VsZWN0ID0gKGZ1bmM/OiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgaWYgKGRlbGF5VGltZXIuY3VycmVudCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGRlbGF5VGltZXIuY3VycmVudClcbiAgICAgIGRlbGF5VGltZXIuY3VycmVudCA9IDBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGRlbGF5VGltZXIuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZnVuYygpXG4gICAgICAgIGRlbGF5VGltZXIuY3VycmVudCA9IDBcbiAgICAgIH0sIDE1MClcbiAgICB9XG4gIH1cblxuICBjb25zdCBvcHRzcyA9IGdldFNob3dPcHRpb25zKClcblxuICBjb25zdCBtZW51cyA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tZW51c2B9PlxuICAgICAgPEFuaW1hdGVcbiAgICAgICAgdHJhbnNpdGlvbkFwcGVhclxuICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fVxuICAgICAgICBhbmltYXRpb249e3tcbiAgICAgICAgICBhcHBlYXIobm9kZTogSFRNTEVsZW1lbnQsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWVudGVyYClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1lbnRlci1hY3RpdmVgKVxuICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwKSlcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShgJHtwcmVmaXh9LWVudGVyLWFjdGl2ZWApXG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShgJHtwcmVmaXh9LWVudGVyYClcbiAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBkb25lKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVudGVyKG5vZGU6IEhUTUxFbGVtZW50LCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoYCR7cHJlZml4fS1lbnRlcmApXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tZW50ZXItYWN0aXZlYClcbiAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMCkpXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYCR7cHJlZml4fS1lbnRlci1hY3RpdmVgKVxuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYCR7cHJlZml4fS1lbnRlcmApXG4gICAgICAgICAgICAgIHJldHVybiBkb25lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gZG9uZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWF2ZShub2RlOiBIVE1MRWxlbWVudCwgZG9uZTogKCkgPT4gdm9pZCkge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGAke3ByZWZpeH0tbGVhdmVgKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChgJHtwcmVmaXh9LWxlYXZlLWFjdGl2ZWApXG4gICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDApKVxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGRvbmUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7b3B0c3MubWFwKChvcHRzLCBtZW51SW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1tZW51YCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1tZW51LSR7c2l6ZX1gXTogc2l6ZSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PXttZW51SW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhvcHRzIHx8IFtdKS5tYXAoKG8sIGopID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB2YWx1ZTogdiwgdGl0bGUsIGNoaWxkcmVuOiBjLCBkaXNhYmxlZDogZCB9ID0gb1xuICAgICAgICAgICAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlVmFsdWVEdXBsaWNhdGVkID0gWy4uLmFjdGl2ZVZhbHVlXVxuICAgICAgICAgICAgICAgIGFjdGl2ZVZhbHVlRHVwbGljYXRlZCA9IGFjdGl2ZVZhbHVlRHVwbGljYXRlZC5zbGljZShcbiAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICBtZW51SW5kZXggKyAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGFjdGl2ZVZhbHVlRHVwbGljYXRlZFttZW51SW5kZXhdID0gdiB8fCBcIlwiXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlT3B0aW9ucyA9IGdldEFjdGl2ZU9wdGlvbnMoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVZhbHVlKGFjdGl2ZVZhbHVlRHVwbGljYXRlZClcbiAgICAgICAgICAgICAgICBpZiAoIWM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGFjdGl2ZU9wdGlvbnMsIHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3BzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGFjdGl2ZVZhbHVlRHVwbGljYXRlZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZU9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoYWN0aXZlT3B0aW9ucywgeyB2aXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAga2V5PXt2IHx8IGp9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1tZW51LWl0ZW1gLCB7XG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LW1lbnUtaXRlbS1hY3RpdmVgXTogaXNBY3RpdmVPcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgICAgICAgICBtZW51SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGFuZFRyaWdnZXIgPT09IFwiaG92ZXJcIiAmJiBjPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWxheVNlbGVjdChoYW5kbGVTZWxlY3QpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGFuZFRyaWdnZXIgPT09IFwiaG92ZXJcIiAmJiBjPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBkZWxheVNlbGVjdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWVudS1pdGVtLWNvbnRlbnRgfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICB7ISFjPy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmlhbmdsZS1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1lbnUtaXRlbS1pY29uYH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvQW5pbWF0ZT5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPFBvcG92ZXJcbiAgICAgIGFycm93ZWQ9e2ZhbHNlfVxuICAgICAgcG9wdXBDbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wdXBgfVxuICAgICAgdmlzaWJsZT17ZGlzYWJsZWQgPyBmYWxzZSA6IHZpc2libGV9XG4gICAgICBvblZpc2libGVDaGFuZ2U9e3NldFBvcHVwVmlzaWJsZX1cbiAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICBwb3B1cD17bWVudXN9XG4gICAgICB7Li4ucG9wb3ZlclByb3BzfVxuICAgID5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1idXR0b25gLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tYnV0dG9uLXZhbHVlZGBdOiBoYXNWYWx1ZSxcbiAgICAgICAgICBbYCR7cHJlZml4fS1idXR0b24tY2xlYXJhYmxlYF06IGFsbG93Q2xlYXIsXG4gICAgICAgIH0pfVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc1ZhbHVlID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1sYWJlbGB9PntnZXRUaXRsZSgpfTwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGxhY2Vob2xkZXJgfT57cGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uc2B9PlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwidHJpYW5nbGUtZG93blwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3VmZml4YH1cbiAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICA/IFwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS02MDApXCJcbiAgICAgICAgICAgICAgICA6IFwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS03MDApXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHthbGxvd0NsZWFyICYmICFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsLWNpcmNsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZW1vdmVgfVxuICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLXRyYW5zcGFyZW50LWdyYXktNzAwKVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvUG9wb3Zlcj5cbiAgKVxufVxuXG5DYXNjYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmuIXpmaRcbiAgICovXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IHRydWUg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTlgLzvvIzlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5oup5ZCO5bGV56S655qE5riy5p+T5Ye95pWwXG4gICAqL1xuICBkaXNwbGF5UmVuZGVyOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5qyh57qn6I+c5Y2V55qE5bGV5byA5pa55byP77yM5Y+v6YCJICdjbGljaycg5ZKMICdob3ZlcidcbiAgICovXG4gIGV4cGFuZFRyaWdnZXI6IFByb3BUeXBlcy5vbmVPZihbXCJjbGlja1wiLCBcImhvdmVyXCJdKSxcbiAgLyoqXG4gICAqIOWPr+mAiemhueaVsOaNrua6kFxuICAgKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWAvOWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOS4i+aLieahhiB2aXNpYmxlIOeKtuaAgeaUueWPmOaXtueahOWbnuiwg1xuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5Y2g5L2N5paH5pysXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWxnuaAp+WwhuS8mumAj+S8oOe7mSBQb3BvdmVyIOe7hOS7tlxuICAgKi9cbiAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5YC877yM5aSW6YOo5o6n5Yi2XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItuS4i+aLieahhiB2aXNpYmxlIOeKtuaAgVxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLmFueSxcbn1cblxuQ2FzY2FkZXIuZGVmYXVsdFByb3BzID0ge1xuICBhbGxvd0NsZWFyOiB0cnVlLFxuICBjaGFuZ2VPblNlbGVjdDogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc3BsYXlSZW5kZXI6IHVuZGVmaW5lZCxcbiAgZXhwYW5kVHJpZ2dlcjogXCJjbGlja1wiLFxuICBvbkNoYW5nZTogdW5kZWZpbmVkLFxuICBvblZpc2libGVDaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb3B0aW9uczogW10sXG4gIHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiLFxuICBwb3BvdmVyUHJvcHM6IHt9LFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHZhbHVlOiBudWxsLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXNjYWRlclxuIl19