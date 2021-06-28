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

  var menus = React.createElement("div", {
    className: "".concat(prefix, "-menus")
  }, getShowOptions().map(function (opts, menuIndex) {
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
  }));
  return React.createElement(Popover, _extends({
    arrowed: false,
    popupClassName: "".concat(prefix, "-popup"),
    visible: disabled ? false : visible,
    onVisibleChange: setPopupVisible,
    trigger: "click",
    popup: dropdownRender ? dropdownRender(menus) : menus
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
  dropdownRender: PropTypes.any,
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
export default Cascader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FzY2FkZXIvQ2FzY2FkZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQnV0dG9uIiwiSWNvbiIsIlBvcG92ZXIiLCJpc0VxdWFsQXJyYXlzIiwicHJlZml4IiwiQ2FzY2FkZXIiLCJhbGxvd0NsZWFyIiwiY2hhbmdlT25TZWxlY3QiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiZGlzcGxheVJlbmRlciIsInRpdGxlIiwiam9pbiIsImRyb3Bkb3duUmVuZGVyIiwiZXhwYW5kVHJpZ2dlciIsIm9uQ2hhbmdlIiwib25WaXNpYmxlQ2hhbmdlIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwicG9wb3ZlclByb3BzIiwic2l6ZSIsInZhbHVlUHJvcHMiLCJ2YWx1ZSIsInZpc2libGVQcm9wcyIsInZpc2libGUiLCJvdGhlclByb3BzIiwic2V0VmFsdWUiLCJhY3RpdmVWYWx1ZSIsInNldEFjdGl2ZVZhbHVlIiwic2V0VmlzaWJsZSIsImRlbGF5VGltZXIiLCJzZXRQb3B1cFZpc2libGUiLCJwb3B1cFZpc2libGUiLCJoYW5kbGVDbGVhciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNoYW5nZSIsIm9wdHMiLCJtYXAiLCJ2IiwiaGFzVmFsdWUiLCJsZW5ndGgiLCJhcnJheVRyZWVGaWx0ZXIiLCJkYXRhIiwiZmlsdGVyRm4iLCJjaGlsZHMiLCJyZXN1bHQiLCJsZXZlbCIsImZvdW5kSXRlbSIsImZpbHRlciIsIml0ZW0iLCJwdXNoIiwiZ2V0VGl0bGUiLCJ1bndyYXBwZWRWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInNlbGVjdGVkT3B0aW9ucyIsIm8iLCJ0b1N0cmluZyIsImlzQWN0aXZlT3B0aW9uIiwib3B0aW9uIiwibWVudUluZGV4IiwiZ2V0QWN0aXZlT3B0aW9ucyIsImFjdGl2ZVZhbHVlUGFyYW0iLCJnZXRTaG93T3B0aW9ucyIsImFjdGl2ZU9wdGlvbiIsInVuc2hpZnQiLCJkZWxheVNlbGVjdCIsImZ1bmMiLCJjdXJyZW50IiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsIm1lbnVzIiwiaiIsImMiLCJkIiwiaGFuZGxlU2VsZWN0IiwiYWN0aXZlVmFsdWVEdXBsaWNhdGVkIiwic2xpY2UiLCJhY3RpdmVPcHRpb25zIiwicHJvcFR5cGVzIiwiYm9vbCIsIm5vZGUiLCJzdHJpbmciLCJhbnkiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLEtBQVAsSUFBZ0JDLE1BQWhCLEVBQXdCQyxRQUF4QixRQUF3QyxPQUF4QztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsU0FBakI7QUFDQSxPQUFPQyxPQUFQLE1BQXVDLFlBQXZDO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQix3QkFBMUI7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsZUFBZjs7QUEwRkEsSUFBTUMsUUFBZ0MsR0FBRyxTQUFuQ0EsUUFBbUMsT0FtQnJCO0FBQUE7O0FBQUEsTUFsQmxCQyxVQWtCa0IsUUFsQmxCQSxVQWtCa0I7QUFBQSxNQWpCbEJDLGNBaUJrQixRQWpCbEJBLGNBaUJrQjtBQUFBLE1BaEJsQkMsUUFnQmtCLFFBaEJsQkEsUUFnQmtCO0FBQUEsTUFmbEJDLFNBZWtCLFFBZmxCQSxTQWVrQjtBQUFBLE1BZGxCQyxZQWNrQixRQWRsQkEsWUFja0I7QUFBQSxNQWJsQkMsUUFha0IsUUFibEJBLFFBYWtCO0FBQUEsZ0NBWmxCQyxhQVlrQjtBQUFBLE1BWmxCQSxhQVlrQixtQ0FaRixVQUFDQyxLQUFE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RFU7QUFFdEJDLEVBQUFBLGNBQWMsRUFBRSxLQUZNO0FBR3RCQyxFQUFBQSxRQUFRLEVBQUUsSUFIWTtBQUl0QkMsRUFBQUEsU0FBUyxFQUFFa0YsU0FKVztBQUt0QmpGLEVBQUFBLFlBQVksRUFBRSxJQUxRO0FBTXRCQyxFQUFBQSxRQUFRLEVBQUUsS0FOWTtBQU90QkMsRUFBQUEsYUFBYSxFQUFFK0UsU0FQTztBQVF0QjVFLEVBQUFBLGNBQWMsRUFBRTRFLFNBUk07QUFTdEIzRSxFQUFBQSxhQUFhLEVBQUUsT0FUTztBQVV0QkMsRUFBQUEsUUFBUSxFQUFFMEUsU0FWWTtBQVd0QnpFLEVBQUFBLGVBQWUsRUFBRXlFLFNBWEs7QUFZdEJ4RSxFQUFBQSxPQUFPLEVBQUUsRUFaYTtBQWF0QkMsRUFBQUEsV0FBVyxFQUFFLEtBYlM7QUFjdEJDLEVBQUFBLFlBQVksRUFBRSxFQWRRO0FBZXRCQyxFQUFBQSxJQUFJLEVBQUUsT0FmZ0I7QUFnQnRCRSxFQUFBQSxLQUFLLEVBQUUsSUFoQmU7QUFpQnRCRSxFQUFBQSxPQUFPLEVBQUU7QUFqQmEsQ0FBeEI7QUFvQkEsZUFBZXJCLFFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgaXNFcXVhbEFycmF5cyBmcm9tIFwiLi4vX3V0aWwvaXNFcXVhbEFycmF5c1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNhc2NhZGVyXCJcblxuZXhwb3J0IHR5cGUgQ2FzY2FkZXJWYWx1ZVR5cGUgPSBSZWFjdC5SZWFjdFRleHRbXVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyT3B0aW9uIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyXG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogQ2FzY2FkZXJPcHRpb25bXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEcmF3ZXJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5riF6ZmkXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhblxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IHRydWUg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBDYXNjYWRlciDmiYDmnInnmoTlsZ7mgKfkvJrpmYTliqDliLDlhoXpg6jnmoTlhoXlrrnlhYPntKDkuIrvvIzogIzkuI3mmK/ljIXlkKsgbWFzayDnmoTmnIDlpJblsYLlhYPntKBcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k5YC877yM5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBDYXNjYWRlclZhbHVlVHlwZSB8IG51bGxcbiAgLyoqXG4gICAqIOiHquWumuS5ieS4i+aLieahhuWGheWuuVxuICAgKi9cbiAgZHJvcGRvd25SZW5kZXI/OiAobWVudXM6IFJlYWN0LlJlYWN0Tm9kZSkgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6YCJ5oup5ZCO5bGV56S655qE5riy5p+T5Ye95pWwXG4gICAqL1xuICBkaXNwbGF5UmVuZGVyPzogKFxuICAgIHRpdGxlOiBzdHJpbmdbXSxcbiAgICBzZWxlY3RlZE9wdGlvbnM/OiBDYXNjYWRlck9wdGlvbltdXG4gICkgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDmrKHnuqfoj5zljZXnmoTlsZXlvIDmlrnlvI/vvIzlj6/pgIkgJ2NsaWNrJyDlkowgJ2hvdmVyJ1xuICAgKi9cbiAgZXhwYW5kVHJpZ2dlcj86IFwiY2xpY2tcIiB8IFwiaG92ZXJcIlxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBDYXNjYWRlclZhbHVlVHlwZSwgc2VsZWN0T3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSkgPT4gdm9pZFxuICAvKipcbiAgICog5LiL5ouJ5qGGIHZpc2libGUg54q25oCB5pS55Y+Y5pe255qE5Zue6LCDXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog5Y+v6YCJ6aG55pWw5o2u5rqQXG4gICAqL1xuICBvcHRpb25zPzogQ2FzY2FkZXJPcHRpb25bXVxuICAvKipcbiAgICog5Y2g5L2N5paH5pysXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog5bGe5oCn5bCG5Lya6YCP5Lyg57uZIFBvcG92ZXIg57uE5Lu2XG4gICAqL1xuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIC8qKlxuICAgKiDlsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWAvO+8jOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU/OiBDYXNjYWRlclZhbHVlVHlwZSB8IG51bGxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItuS4i+aLieahhiB2aXNpYmxlIOeKtuaAgVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG59XG5cbi8qKlxuICog57qn6IGU6YCJ5oup5Zmo55u06KeC5bGV56S65bey5pyJ55qE5bGC57qn5YWz57O744CCXG4gKi9cbmNvbnN0IENhc2NhZGVyOiBSZWFjdC5GQzxJRHJhd2VyUHJvcHM+ID0gKHtcbiAgYWxsb3dDbGVhcixcbiAgY2hhbmdlT25TZWxlY3QsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgZGlzYWJsZWQsXG4gIGRpc3BsYXlSZW5kZXIgPSAodGl0bGU6IHN0cmluZ1tdKSA9PiB0aXRsZS5qb2luKFwiL1wiKSxcbiAgZHJvcGRvd25SZW5kZXIsXG4gIGV4cGFuZFRyaWdnZXIsXG4gIG9uQ2hhbmdlLFxuICBvblZpc2libGVDaGFuZ2UsXG4gIG9wdGlvbnMsXG4gIHBsYWNlaG9sZGVyLFxuICBwb3BvdmVyUHJvcHMsXG4gIHNpemUsXG4gIHZhbHVlOiB2YWx1ZVByb3BzLFxuICB2aXNpYmxlOiB2aXNpYmxlUHJvcHMsXG4gIC4uLm90aGVyUHJvcHNcbn06IElEcmF3ZXJQcm9wcykgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPENhc2NhZGVyVmFsdWVUeXBlPihcbiAgICB2YWx1ZVByb3BzICE9PSBudWxsID8gdmFsdWVQcm9wcyB8fCBbXSA6IGRlZmF1bHRWYWx1ZSB8fCBbXVxuICApXG4gIGNvbnN0IFthY3RpdmVWYWx1ZSwgc2V0QWN0aXZlVmFsdWVdID0gdXNlU3RhdGU8Q2FzY2FkZXJWYWx1ZVR5cGU+KFxuICAgIHZhbHVlUHJvcHMgIT09IG51bGwgPyB2YWx1ZVByb3BzIHx8IFtdIDogZGVmYXVsdFZhbHVlIHx8IFtdXG4gIClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoXG4gICAgdmlzaWJsZVByb3BzICE9PSBudWxsID8gdmlzaWJsZVByb3BzIDogZmFsc2VcbiAgKVxuICBjb25zdCBkZWxheVRpbWVyID0gdXNlUmVmKDApXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAodmFsdWVQcm9wcyAhPT0gbnVsbCAmJiAhaXNFcXVhbEFycmF5cyh2YWx1ZVByb3BzIHx8IFtdLCB2YWx1ZSkpIHtcbiAgICBzZXRWYWx1ZSh2YWx1ZVByb3BzIHx8IFtdKVxuICB9XG4gIGlmICh2aXNpYmxlUHJvcHMgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gdmlzaWJsZVByb3BzKSB7XG4gICAgc2V0VmlzaWJsZSh2aXNpYmxlUHJvcHMpXG4gIH1cblxuICBjb25zdCBzZXRQb3B1cFZpc2libGUgPSAocG9wdXBWaXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHZpc2libGVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgc2V0VmlzaWJsZShwb3B1cFZpc2libGUpXG4gICAgfVxuICAgIGlmIChwb3B1cFZpc2libGUgJiYgIXZpc2libGUpIHtcbiAgICAgIHNldEFjdGl2ZVZhbHVlKHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICBvblZpc2libGVDaGFuZ2UocG9wdXBWaXNpYmxlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgc2V0UG9wdXBWaXNpYmxlKGZhbHNlKVxuICAgIGlmICghdmFsdWVQcm9wcykge1xuICAgICAgc2V0VmFsdWUoW10pXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChcbiAgICBvcHRzOiBDYXNjYWRlck9wdGlvbltdLFxuICAgIHsgdmlzaWJsZTogcG9wdXBWaXNpYmxlIH06IHsgdmlzaWJsZTogYm9vbGVhbiB9XG4gICkgPT4ge1xuICAgIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUpXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShcbiAgICAgICAgb3B0cy5tYXAoKHsgdmFsdWU6IHYgfSkgPT4gdiB8fCBcIlwiKSxcbiAgICAgICAgb3B0c1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhc1ZhbHVlID0gdmFsdWU/Lmxlbmd0aFxuXG4gIGNvbnN0IGFycmF5VHJlZUZpbHRlciA9IDxUIGV4dGVuZHMgdW5rbm93bj4oXG4gICAgZGF0YTogVFtdID0gW10sXG4gICAgZmlsdGVyRm46IChpdGVtOiBULCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuXG4gICkgPT4ge1xuICAgIGxldCBjaGlsZHMgPSBkYXRhXG4gICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXVxuICAgIGxldCBsZXZlbCA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBmb3VuZEl0ZW06IFQgPSBjaGlsZHMuZmlsdGVyKChpdGVtKSA9PiBmaWx0ZXJGbihpdGVtLCBsZXZlbCkpWzBdXG4gICAgICBpZiAoIWZvdW5kSXRlbSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goZm91bmRJdGVtKVxuICAgICAgY2hpbGRzID0gKGZvdW5kSXRlbSBhcyBhbnkpLmNoaWxkcmVuIHx8IFtdXG4gICAgICBsZXZlbCArPSAxXG4gICAgfSB3aGlsZSAoY2hpbGRzLmxlbmd0aCA+IDApXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdW53cmFwcGVkVmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlWzBdKSA/IHZhbHVlWzBdIDogdmFsdWVcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBhcnJheVRyZWVGaWx0ZXIoXG4gICAgICBvcHRpb25zLFxuICAgICAgKG8sIGxldmVsOiBudW1iZXIpID0+IG8udmFsdWUgPT09IHVud3JhcHBlZFZhbHVlW2xldmVsXVxuICAgIClcbiAgICBjb25zdCB0aXRsZSA9IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGhcbiAgICAgID8gc2VsZWN0ZWRPcHRpb25zLm1hcCgobykgPT4gby50aXRsZSlcbiAgICAgIDogdmFsdWVcbiAgICByZXR1cm4gZGlzcGxheVJlbmRlcihcbiAgICAgIHRpdGxlLm1hcCgobykgPT4gKG8gfHwgXCJcIikudG9TdHJpbmcoKSksXG4gICAgICBzZWxlY3RlZE9wdGlvbnNcbiAgICApXG4gIH1cblxuICBjb25zdCBpc0FjdGl2ZU9wdGlvbiA9IChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBtZW51SW5kZXg6IG51bWJlcikgPT5cbiAgICBhY3RpdmVWYWx1ZVttZW51SW5kZXhdID09PSBvcHRpb24udmFsdWVcblxuICBjb25zdCBnZXRBY3RpdmVPcHRpb25zID0gKFxuICAgIGFjdGl2ZVZhbHVlUGFyYW0/OiBDYXNjYWRlclZhbHVlVHlwZVxuICApOiBDYXNjYWRlck9wdGlvbltdID0+XG4gICAgYXJyYXlUcmVlRmlsdGVyKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIChvLCBsZXZlbCkgPT4gby52YWx1ZSA9PT0gKGFjdGl2ZVZhbHVlUGFyYW0gfHwgYWN0aXZlVmFsdWUpW2xldmVsXVxuICAgIClcblxuICBjb25zdCBnZXRTaG93T3B0aW9ucyA9ICgpOiAoQ2FzY2FkZXJPcHRpb25bXSB8IHVuZGVmaW5lZClbXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0QWN0aXZlT3B0aW9ucygpXG4gICAgICAubWFwKCh7IGNoaWxkcmVuOiBjaGlsZHMgfSkgPT4gY2hpbGRzKVxuICAgICAgLmZpbHRlcigoYWN0aXZlT3B0aW9uKSA9PiBhY3RpdmVPcHRpb24/Lmxlbmd0aClcbiAgICByZXN1bHQudW5zaGlmdChvcHRpb25zKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgY29uc3QgZGVsYXlTZWxlY3QgPSAoZnVuYz86ICgpID0+IHZvaWQpID0+IHtcbiAgICBpZiAoZGVsYXlUaW1lci5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQoZGVsYXlUaW1lci5jdXJyZW50KVxuICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gMFxuICAgIH1cbiAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmdW5jKClcbiAgICAgICAgZGVsYXlUaW1lci5jdXJyZW50ID0gMFxuICAgICAgfSwgMTUwKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lbnVzID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1lbnVzYH0+XG4gICAgICB7Z2V0U2hvd09wdGlvbnMoKS5tYXAoKG9wdHMsIG1lbnVJbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tbWVudWAsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LW1lbnUtJHtzaXplfWBdOiBzaXplLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGtleT17bWVudUluZGV4fVxuICAgICAgICA+XG4gICAgICAgICAgeyhvcHRzIHx8IFtdKS5tYXAoKG8sIGopID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHYsIHRpdGxlLCBjaGlsZHJlbjogYywgZGlzYWJsZWQ6IGQgfSA9IG9cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQgYWN0aXZlVmFsdWVEdXBsaWNhdGVkID0gWy4uLmFjdGl2ZVZhbHVlXVxuICAgICAgICAgICAgICBhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQgPSBhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQuc2xpY2UoXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBtZW51SW5kZXggKyAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgYWN0aXZlVmFsdWVEdXBsaWNhdGVkW21lbnVJbmRleF0gPSB2IHx8IFwiXCJcbiAgICAgICAgICAgICAgY29uc3QgYWN0aXZlT3B0aW9ucyA9IGdldEFjdGl2ZU9wdGlvbnMoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICBzZXRBY3RpdmVWYWx1ZShhY3RpdmVWYWx1ZUR1cGxpY2F0ZWQpXG4gICAgICAgICAgICAgIGlmICghYz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGFjdGl2ZU9wdGlvbnMsIHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2VPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShhY3RpdmVPcHRpb25zLCB7IHZpc2libGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoYWN0aXZlVmFsdWVEdXBsaWNhdGVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBrZXk9e3YgfHwgan1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1tZW51LWl0ZW1gLCB7XG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1tZW51LWl0ZW0tYWN0aXZlYF06IGlzQWN0aXZlT3B0aW9uKG8sIG1lbnVJbmRleCksXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlPy50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdH1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChleHBhbmRUcmlnZ2VyID09PSBcImhvdmVyXCIgJiYgYz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2VsZWN0KGhhbmRsZVNlbGVjdClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGV4cGFuZFRyaWdnZXIgPT09IFwiaG92ZXJcIiAmJiBjPy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXlTZWxlY3QoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tZW51LWl0ZW0tY29udGVudGB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICB7ISFjPy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyaWFuZ2xlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1lbnUtaXRlbS1pY29uYH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBhcnJvd2VkPXtmYWxzZX1cbiAgICAgIHBvcHVwQ2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcHVwYH1cbiAgICAgIHZpc2libGU9e2Rpc2FibGVkID8gZmFsc2UgOiB2aXNpYmxlfVxuICAgICAgb25WaXNpYmxlQ2hhbmdlPXtzZXRQb3B1cFZpc2libGV9XG4gICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgcG9wdXA9e2Ryb3Bkb3duUmVuZGVyID8gZHJvcGRvd25SZW5kZXIobWVudXMpIDogbWVudXN9XG4gICAgICB7Li4ucG9wb3ZlclByb3BzfVxuICAgID5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1idXR0b25gLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tYnV0dG9uLXZhbHVlZGBdOiBoYXNWYWx1ZSxcbiAgICAgICAgICBbYCR7cHJlZml4fS1idXR0b24tY2xlYXJhYmxlYF06IGFsbG93Q2xlYXIsXG4gICAgICAgIH0pfVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc1ZhbHVlID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS1sYWJlbGB9PntnZXRUaXRsZSgpfTwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGxhY2Vob2xkZXJgfT57cGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uc2B9PlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwidHJpYW5nbGUtZG93blwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3VmZml4YH1cbiAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICA/IFwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS02MDApXCJcbiAgICAgICAgICAgICAgICA6IFwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS03MDApXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHthbGxvd0NsZWFyICYmICFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsLWNpcmNsZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1yZW1vdmVgfVxuICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLXRyYW5zcGFyZW50LWdyYXktNzAwKVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvUG9wb3Zlcj5cbiAgKVxufVxuXG5DYXNjYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmuIXpmaRcbiAgICovXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IHRydWUg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQje+8jOazqOaEjyBEaWFsb2cg5omA5pyJ55qE5bGe5oCn5Lya6ZmE5Yqg5Yiw5YaF6YOo55qE5YaF5a655YWD57Sg5LiK77yM6ICM5LiN5piv5YyF5ZCrIG1hc2sg55qE5pyA5aSW5bGC5YWD57SgXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTlgLzvvIzlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6YCJ5oup5ZCO5bGV56S655qE5riy5p+T5Ye95pWwXG4gICAqL1xuICBkaXNwbGF5UmVuZGVyOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6Ieq5a6a5LmJ5LiL5ouJ5qGG5YaF5a65XG4gICAqL1xuICBkcm9wZG93blJlbmRlcjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOasoee6p+iPnOWNleeahOWxleW8gOaWueW8j++8jOWPr+mAiSAnY2xpY2snIOWSjCAnaG92ZXInXG4gICAqL1xuICBleHBhbmRUcmlnZ2VyOiBQcm9wVHlwZXMub25lT2YoW1wiY2xpY2tcIiwgXCJob3ZlclwiXSksXG4gIC8qKlxuICAgKiDlj6/pgInpobnmlbDmja7mupBcbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlgLzlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDkuIvmi4nmoYYgdmlzaWJsZSDnirbmgIHmlLnlj5jml7bnmoTlm57osINcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWNoOS9jeaWh+acrFxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlsZ7mgKflsIbkvJrpgI/kvKDnu5kgUG9wb3ZlciDnu4Tku7ZcbiAgICovXG4gIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWAvO+8jOWklumDqOaOp+WItlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbkuIvmi4nmoYYgdmlzaWJsZSDnirbmgIFcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5hbnksXG59XG5cbkNhc2NhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgY2hhbmdlT25TZWxlY3Q6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNwbGF5UmVuZGVyOiB1bmRlZmluZWQsXG4gIGRyb3Bkb3duUmVuZGVyOiB1bmRlZmluZWQsXG4gIGV4cGFuZFRyaWdnZXI6IFwiY2xpY2tcIixcbiAgb25DaGFuZ2U6IHVuZGVmaW5lZCxcbiAgb25WaXNpYmxlQ2hhbmdlOiB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IFtdLFxuICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgcG9wb3ZlclByb3BzOiB7fSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbiAgdmlzaWJsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FzY2FkZXJcbiJdfQ==