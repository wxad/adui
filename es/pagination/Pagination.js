function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import warning from "../_util/warning";
import { ConfigContext, getComputedSize } from "../config-provider";
import Button from "../button";
import Input from "../input";
import "./style";

var noop = function noop() {};

var prefix = "adui-pagination";

var Pagination = function Pagination(_ref) {
  var align = _ref.align,
      className = _ref.className,
      currentProp = _ref.current,
      defaultCurrent = _ref.defaultCurrent,
      disabled = _ref.disabled,
      hideWhenSinglePage = _ref.hideWhenSinglePage,
      onChange = _ref.onChange,
      pageSize = _ref.pageSize,
      showButtonJumper = _ref.showButtonJumper,
      showInputJumper = _ref.showInputJumper,
      sizeProp = _ref.size,
      theme = _ref.theme,
      total = _ref.total,
      otherProps = _objectWithoutProperties(_ref, ["align", "className", "current", "defaultCurrent", "disabled", "hideWhenSinglePage", "onChange", "pageSize", "showButtonJumper", "showInputJumper", "size", "theme", "total"]);

  var _useState = useState((currentProp !== null ? currentProp : defaultCurrent) || 1),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  if (currentProp !== null && currentProp !== undefined && current !== currentProp) {
    setCurrent(currentProp);
  }

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);
  var classSet = classNames(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(size), _defineProperty({}, "".concat(prefix, "-").concat(align), align));
  warning(Number.isInteger(current), "Pagination", "current 值需要是正整数");
  warning(!(current < 1 || current > Math.ceil((total || 0) / (pageSize || 10)) && current !== 1), "Pagination", "current \u9700\u8981\u65F6\u5728\u6B63\u786E\u8303\u56F4\u5185\u7684\u6B63\u6574\u6570\uFF0Ctotal: ".concat(total, "\uFF0CpageSize\uFF1A").concat(pageSize));
  var pageNumber = 1;

  if (total && pageSize) {
    pageNumber = Math.max(Math.ceil(total / pageSize), 1);
  }

  var prevDisabled = current === 1;
  var nextDisabled = current === pageNumber;

  if (pageNumber === 1 && hideWhenSinglePage) {
    return null;
  }

  var handleJump = function handleJump(type) {
    var newPage;

    switch (type) {
      case "first":
        newPage = 1;
        break;

      case "prev":
        newPage = current - 1;
        break;

      case "next":
        newPage = current + 1;
        break;

      case "last":
        if (total && pageSize) {
          newPage = Math.max(Math.ceil(total / pageSize), 1);
        }

        break;

      default:
    }

    if (newPage && pageSize) {
      if (currentProp === null) {
        setCurrent(newPage);
      }

      if (onChange) {
        onChange(newPage, pageSize);
      }
    }
  };

  var handleInputJump = function handleInputJump() {
    var parsevalue = parseInt(inputValue, 10);

    if (isNaN(parsevalue)) {
      return;
    }

    var value = Math.max(parsevalue, 1);

    if (total && pageSize) {
      value = Math.min(value, Math.max(Math.ceil(total / pageSize), 1));
    }

    if (currentProp === null) {
      setCurrent(value);
    }

    if (onChange) {
      onChange(value, pageSize);
    }
  };

  return React.createElement("div", _extends({
    className: classSet,
    "data-current": current
  }, otherProps), showButtonJumper && React.createElement(Button, {
    disabled: disabled,
    style: {
      marginRight: "8px"
    },
    leftIcon: "arrow-left-first",
    size: size,
    theme: theme,
    onClick: function onClick() {
      if (!prevDisabled) handleJump("first");
    }
  }), React.createElement(Button, {
    disabled: disabled,
    leftIcon: "arrow-left",
    size: size,
    theme: theme,
    onClick: function onClick() {
      if (!prevDisabled) handleJump("prev");
    }
  }), React.createElement("span", {
    className: "".concat(prefix, "-text")
  }, current, " / ", pageNumber), React.createElement(Button, {
    disabled: disabled,
    leftIcon: "arrow-right",
    size: size,
    theme: theme,
    onClick: function onClick() {
      if (!nextDisabled) handleJump("next");
    }
  }), showButtonJumper && React.createElement(Button, {
    disabled: disabled,
    style: {
      marginLeft: "8px"
    },
    leftIcon: "arrow-right-last",
    size: size,
    theme: theme,
    onClick: function onClick() {
      if (!nextDisabled) handleJump("last");
    }
  }), showInputJumper && [React.createElement(Input, {
    disabled: disabled,
    key: 0,
    className: "".concat(prefix, "-input"),
    placeholder: "\u9875\u7801",
    size: size,
    theme: theme,
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    },
    onPressEnter: handleInputJump
  }), React.createElement(Button, {
    disabled: disabled,
    key: 1,
    size: size,
    theme: theme,
    onClick: handleInputJump
  }, "\u8DF3\u8F6C")]);
};

Pagination.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
  current: PropTypes.number,
  defaultCurrent: PropTypes.number,
  disabled: PropTypes.bool,
  hideWhenSinglePage: PropTypes.bool,
  onChange: PropTypes.func,
  pageSize: PropTypes.number,
  showButtonJumper: PropTypes.bool,
  showInputJumper: PropTypes.bool,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  theme: PropTypes.oneOf([null, "light"]),
  total: PropTypes.number
};
Pagination.defaultProps = {
  align: undefined,
  className: undefined,
  current: null,
  defaultCurrent: 1,
  disabled: false,
  hideWhenSinglePage: true,
  onChange: noop,
  pageSize: 10,
  showButtonJumper: false,
  showInputJumper: false,
  size: "small",
  theme: null,
  total: 0
};
export default Pagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJ3YXJuaW5nIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkJ1dHRvbiIsIklucHV0Iiwibm9vcCIsInByZWZpeCIsIlBhZ2luYXRpb24iLCJhbGlnbiIsImNsYXNzTmFtZSIsImN1cnJlbnRQcm9wIiwiY3VycmVudCIsImRlZmF1bHRDdXJyZW50IiwiZGlzYWJsZWQiLCJoaWRlV2hlblNpbmdsZVBhZ2UiLCJvbkNoYW5nZSIsInBhZ2VTaXplIiwic2hvd0J1dHRvbkp1bXBlciIsInNob3dJbnB1dEp1bXBlciIsInNpemVQcm9wIiwic2l6ZSIsInRoZW1lIiwidG90YWwiLCJvdGhlclByb3BzIiwic2V0Q3VycmVudCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwidW5kZWZpbmVkIiwic2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsIk51bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJjZWlsIiwicGFnZU51bWJlciIsIm1heCIsInByZXZEaXNhYmxlZCIsIm5leHREaXNhYmxlZCIsImhhbmRsZUp1bXAiLCJ0eXBlIiwibmV3UGFnZSIsImhhbmRsZUlucHV0SnVtcCIsInBhcnNldmFsdWUiLCJwYXJzZUludCIsImlzTmFOIiwidmFsdWUiLCJtaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJlIiwidGFyZ2V0IiwicHJvcFR5cGVzIiwib25lT2YiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsUUFBNUIsUUFBNEMsT0FBNUM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlB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VixDQUFnQixDQUFDLElBQUQsRUFBTyxPQUFQLENBQWhCLENBaERjO0FBb0RyQjlCLEVBQUFBLEtBQUssRUFBRXhCLFNBQVMsQ0FBQ3dEO0FBcERJLENBQXZCO0FBdURBL0MsVUFBVSxDQUFDa0QsWUFBWCxHQUEwQjtBQUN4QmpELEVBQUFBLEtBQUssRUFBRW1CLFNBRGlCO0FBRXhCbEIsRUFBQUEsU0FBUyxFQUFFa0IsU0FGYTtBQUd4QmhCLEVBQUFBLE9BQU8sRUFBRSxJQUhlO0FBSXhCQyxFQUFBQSxjQUFjLEVBQUUsQ0FKUTtBQUt4QkMsRUFBQUEsUUFBUSxFQUFFLEtBTGM7QUFNeEJDLEVBQUFBLGtCQUFrQixFQUFFLElBTkk7QUFPeEJDLEVBQUFBLFFBQVEsRUFBRVYsSUFQYztBQVF4QlcsRUFBQUEsUUFBUSxFQUFFLEVBUmM7QUFTeEJDLEVBQUFBLGdCQUFnQixFQUFFLEtBVE07QUFVeEJDLEVBQUFBLGVBQWUsRUFBRSxLQVZPO0FBV3hCRSxFQUFBQSxJQUFJLEVBQUUsT0FYa0I7QUFZeEJDLEVBQUFBLEtBQUssRUFBRSxJQVppQjtBQWF4QkMsRUFBQUEsS0FBSyxFQUFFO0FBYmlCLENBQTFCO0FBZ0JBLGVBQWVmLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgd2FybmluZyBmcm9tIFwiLi4vX3V0aWwvd2FybmluZ1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1wYWdpbmF0aW9uXCJcblxuZXhwb3J0IGludGVyZmFjZSBJUGFnaW5hdGlvblByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlr7npvZDmlrnlvI9cbiAgICovXG4gIGFsaWduPzogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5b2T5YmN6aG15pWwXG4gICAqL1xuICBjdXJyZW50PzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog6buY6K6k55qE5b2T5YmN6aG15pWwXG4gICAqL1xuICBkZWZhdWx0Q3VycmVudD86IG51bWJlclxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWPquacieS4gOmhteaXtiByZXR1cm4gbnVsbFxuICAgKi9cbiAgaGlkZVdoZW5TaW5nbGVQYWdlPzogYm9vbGVhblxuICAvKipcbiAgICog5b2T5YmN6aG15Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKG5ld1BhZ2U6IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpID0+IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+mhteadoeaVsO+8jOm7mOiupCAxMCDmnaFcbiAgICovXG4gIHBhZ2VTaXplPzogbnVtYmVyXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrpppbpobXlsL7pobXot7PovazmjInpkq5cbiAgICovXG4gIHNob3dCdXR0b25KdW1wZXI/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrot7PovazovpPlhaXmoYZcbiAgICovXG4gIHNob3dJbnB1dEp1bXBlcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbiAgLyoqXG4gICAqIOaVsOaNruaAu+aVsFxuICAgKi9cbiAgdG90YWw/OiBudW1iZXJcbn1cblxuLyoqXG4gKiDliIbpobXlmajnlKjkuo7lsIblpKfph4/lhoXlrrnku6XliIbpobXlvaLlvI/pl7TpmpTvvIzliIfmjaLpgInmi6nmn6XnnIvjgIJcbiAqL1xuY29uc3QgUGFnaW5hdGlvbjogUmVhY3QuRkM8SVBhZ2luYXRpb25Qcm9wcz4gPSAoe1xuICBhbGlnbixcbiAgY2xhc3NOYW1lLFxuICBjdXJyZW50OiBjdXJyZW50UHJvcCxcbiAgZGVmYXVsdEN1cnJlbnQsXG4gIGRpc2FibGVkLFxuICBoaWRlV2hlblNpbmdsZVBhZ2UsXG4gIG9uQ2hhbmdlLFxuICBwYWdlU2l6ZSxcbiAgc2hvd0J1dHRvbkp1bXBlcixcbiAgc2hvd0lucHV0SnVtcGVyLFxuICBzaXplOiBzaXplUHJvcCxcbiAgdGhlbWUsXG4gIHRvdGFsLFxuICAuLi5vdGhlclByb3BzXG59OiBJUGFnaW5hdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlPG51bWJlcj4oXG4gICAgKGN1cnJlbnRQcm9wICE9PSBudWxsID8gY3VycmVudFByb3AgOiBkZWZhdWx0Q3VycmVudCkgfHwgMVxuICApXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoXG4gICAgY3VycmVudFByb3AgIT09IG51bGwgJiZcbiAgICBjdXJyZW50UHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgY3VycmVudCAhPT0gY3VycmVudFByb3BcbiAgKSB7XG4gICAgc2V0Q3VycmVudChjdXJyZW50UHJvcClcbiAgfVxuXG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAge1xuICAgICAgW2Ake3ByZWZpeH0tJHthbGlnbn1gXTogYWxpZ24sXG4gICAgfVxuICApXG5cbiAgd2FybmluZyhOdW1iZXIuaXNJbnRlZ2VyKGN1cnJlbnQpLCBcIlBhZ2luYXRpb25cIiwgXCJjdXJyZW50IOWAvOmcgOimgeaYr+ato+aVtOaVsFwiKVxuXG4gIHdhcm5pbmcoXG4gICAgIShcbiAgICAgIGN1cnJlbnQgPCAxIHx8XG4gICAgICAoY3VycmVudCA+IE1hdGguY2VpbCgodG90YWwgfHwgMCkgLyAocGFnZVNpemUgfHwgMTApKSAmJiBjdXJyZW50ICE9PSAxKVxuICAgICksXG4gICAgXCJQYWdpbmF0aW9uXCIsXG4gICAgYGN1cnJlbnQg6ZyA6KaB5pe25Zyo5q2j56Gu6IyD5Zu05YaF55qE5q2j5pW05pWw77yMdG90YWw6ICR7dG90YWx977yMcGFnZVNpemXvvJoke3BhZ2VTaXplfWBcbiAgKVxuXG4gIGxldCBwYWdlTnVtYmVyID0gMVxuICBpZiAodG90YWwgJiYgcGFnZVNpemUpIHtcbiAgICBwYWdlTnVtYmVyID0gTWF0aC5tYXgoTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpLCAxKVxuICB9XG4gIGNvbnN0IHByZXZEaXNhYmxlZCA9IGN1cnJlbnQgPT09IDFcbiAgY29uc3QgbmV4dERpc2FibGVkID0gY3VycmVudCA9PT0gcGFnZU51bWJlclxuXG4gIGlmIChwYWdlTnVtYmVyID09PSAxICYmIGhpZGVXaGVuU2luZ2xlUGFnZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBoYW5kbGVKdW1wID0gKHR5cGU6IHN0cmluZykgPT4ge1xuICAgIGxldCBuZXdQYWdlXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwiZmlyc3RcIjpcbiAgICAgICAgbmV3UGFnZSA9IDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJwcmV2XCI6XG4gICAgICAgIG5ld1BhZ2UgPSBjdXJyZW50IC0gMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgbmV3UGFnZSA9IGN1cnJlbnQgKyAxXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICBpZiAodG90YWwgJiYgcGFnZVNpemUpIHtcbiAgICAgICAgICBuZXdQYWdlID0gTWF0aC5tYXgoTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpLCAxKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIGlmIChuZXdQYWdlICYmIHBhZ2VTaXplKSB7XG4gICAgICBpZiAoY3VycmVudFByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0Q3VycmVudChuZXdQYWdlKVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKG5ld1BhZ2UsIHBhZ2VTaXplKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUlucHV0SnVtcCA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJzZXZhbHVlID0gcGFyc2VJbnQoaW5wdXRWYWx1ZSwgMTApXG4gICAgaWYgKGlzTmFOKHBhcnNldmFsdWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbGV0IHZhbHVlID0gTWF0aC5tYXgocGFyc2V2YWx1ZSwgMSlcbiAgICBpZiAodG90YWwgJiYgcGFnZVNpemUpIHtcbiAgICAgIHZhbHVlID0gTWF0aC5taW4odmFsdWUsIE1hdGgubWF4KE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKSwgMSkpXG4gICAgfVxuICAgIGlmIChjdXJyZW50UHJvcCA9PT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudCh2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZSwgcGFnZVNpemUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IGRhdGEtY3VycmVudD17Y3VycmVudH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAge3Nob3dCdXR0b25KdW1wZXIgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjhweFwiIH19XG4gICAgICAgICAgbGVmdEljb249XCJhcnJvdy1sZWZ0LWZpcnN0XCJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByZXZEaXNhYmxlZCkgaGFuZGxlSnVtcChcImZpcnN0XCIpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgbGVmdEljb249XCJhcnJvdy1sZWZ0XCJcbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKCFwcmV2RGlzYWJsZWQpIGhhbmRsZUp1bXAoXCJwcmV2XCIpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRleHRgfT5cbiAgICAgICAge2N1cnJlbnR9IC8ge3BhZ2VOdW1iZXJ9XG4gICAgICA8L3NwYW4+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgbGVmdEljb249XCJhcnJvdy1yaWdodFwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICghbmV4dERpc2FibGVkKSBoYW5kbGVKdW1wKFwibmV4dFwiKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHtzaG93QnV0dG9uSnVtcGVyICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjhweFwiIH19XG4gICAgICAgICAgbGVmdEljb249XCJhcnJvdy1yaWdodC1sYXN0XCJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5leHREaXNhYmxlZCkgaGFuZGxlSnVtcChcImxhc3RcIilcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtzaG93SW5wdXRKdW1wZXIgJiYgW1xuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAga2V5PXswfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnB1dGB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLpobXnoIFcIlxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBvblByZXNzRW50ZXI9e2hhbmRsZUlucHV0SnVtcH1cbiAgICAgICAgLz4sXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAga2V5PXsxfVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUlucHV0SnVtcH1cbiAgICAgICAgPlxuICAgICAgICAgIOi3s+i9rFxuICAgICAgICA8L0J1dHRvbj4sXG4gICAgICBdfVxuICAgIDwvZGl2PlxuICApXG59XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a+56b2Q5pa55byPXG4gICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSksXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW9k+WJjemhteaVsFxuICAgKi9cbiAgY3VycmVudDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOm7mOiupOeahOW9k+WJjemhteaVsFxuICAgKi9cbiAgZGVmYXVsdEN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWPquacieS4gOmhteaXtiByZXR1cm4gbnVsbFxuICAgKi9cbiAgaGlkZVdoZW5TaW5nbGVQYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOW9k+WJjemhteWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7mr4/pobXmnaHmlbDvvIzpu5jorqQgMTAg5p2hXG4gICAqL1xuICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuummlumhteWwvumhtei3s+i9rOaMiemSrlxuICAgKi9cbiAgc2hvd0J1dHRvbkp1bXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrot7PovazovpPlhaXmoYZcbiAgICovXG4gIHNob3dJbnB1dEp1bXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICog5pWw5o2u5oC75pWwXG4gICAqL1xuICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbn1cblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjdXJyZW50OiBudWxsLFxuICBkZWZhdWx0Q3VycmVudDogMSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBoaWRlV2hlblNpbmdsZVBhZ2U6IHRydWUsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBwYWdlU2l6ZTogMTAsXG4gIHNob3dCdXR0b25KdW1wZXI6IGZhbHNlLFxuICBzaG93SW5wdXRKdW1wZXI6IGZhbHNlLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHRoZW1lOiBudWxsLFxuICB0b3RhbDogMCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxuIl19