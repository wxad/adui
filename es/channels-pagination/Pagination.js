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
import "./style";

var noop = function noop() {};

var prefix = "adui-channels-pagination";

var Pagination = function Pagination(_ref) {
  var _classNames;

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
  var classSet = classNames(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(align), align), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _classNames));
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
  }), React.createElement("div", {
    className: "".concat(prefix, "-btn ").concat(prefix, "-btn-left"),
    role: "none",
    onClick: function onClick() {
      if (!prevDisabled) handleJump("prev");
    }
  }), React.createElement("span", {
    className: "".concat(prefix, "-text")
  }, current, " / ", pageNumber), React.createElement("div", {
    className: "".concat(prefix, "-btn ").concat(prefix, "-btn-right"),
    role: "none",
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
  }), showInputJumper && [React.createElement("input", {
    key: 0,
    className: "".concat(prefix, "-input"),
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    }
  }), React.createElement("div", {
    role: "none",
    className: "".concat(prefix, "-input-btn"),
    key: 1,
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
  showInputJumper: true,
  size: "small",
  theme: null,
  total: 0
};
export default Pagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJ3YXJuaW5nIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkJ1dHRvbiIsIm5vb3AiLCJwcmVmaXgiLCJQYWdpbmF0aW9uIiwiYWxpZ24iLCJjbGFzc05hbWUiLCJjdXJyZW50UHJvcCIsImN1cnJlbnQiLCJkZWZhdWx0Q3VycmVudCIsImRpc2FibGVkIiwiaGlkZVdoZW5TaW5nbGVQYWdlIiwib25DaGFuZ2UiLCJwYWdlU2l6ZSIsInNob3dCdXR0b25KdW1wZXIiLCJzaG93SW5wdXRKdW1wZXIiLCJzaXplUHJvcCIsInNpemUiLCJ0aGVtZSIsInRvdGFsIiwib3RoZXJQcm9wcyIsInNldEN1cnJlbnQiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInVuZGVmaW5lZCIsInNpemVDb250ZXh0IiwiY2xhc3NTZXQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJNYXRoIiwiY2VpbCIsInBhZ2VOdW1iZXIiLCJtYXgiLCJwcmV2RGlzYWJsZWQiLCJuZXh0RGlzYWJsZWQiLCJoYW5kbGVKdW1wIiwidHlwZSIsIm5ld1BhZ2UiLCJoYW5kbGVJbnB1dEp1bXAiLCJwYXJzZXZhbHVlIiwicGFyc2VJbnQiLCJpc05hTiIsInZhbHVlIiwibWluIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiZSIsInRhcmdldCIsInByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLFFBQTVCLFFBQTRDLE9BQTVDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZ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QUFRLEVBQUUsS0FMYztBQU14QkMsRUFBQUEsa0JBQWtCLEVBQUUsSUFOSTtBQU94QkMsRUFBQUEsUUFBUSxFQUFFVixJQVBjO0FBUXhCVyxFQUFBQSxRQUFRLEVBQUUsRUFSYztBQVN4QkMsRUFBQUEsZ0JBQWdCLEVBQUUsS0FUTTtBQVV4QkMsRUFBQUEsZUFBZSxFQUFFLElBVk87QUFXeEJFLEVBQUFBLElBQUksRUFBRSxPQVhrQjtBQVl4QkMsRUFBQUEsS0FBSyxFQUFFLElBWmlCO0FBYXhCQyxFQUFBQSxLQUFLLEVBQUU7QUFiaUIsQ0FBMUI7QUFnQkEsZUFBZWYsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB3YXJuaW5nIGZyb20gXCIuLi9fdXRpbC93YXJuaW5nXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGFubmVscy1wYWdpbmF0aW9uXCJcblxuZXhwb3J0IGludGVyZmFjZSBJUGFnaW5hdGlvblByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlr7npvZDmlrnlvI9cbiAgICovXG4gIGFsaWduPzogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5b2T5YmN6aG15pWwXG4gICAqL1xuICBjdXJyZW50PzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog6buY6K6k55qE5b2T5YmN6aG15pWwXG4gICAqL1xuICBkZWZhdWx0Q3VycmVudD86IG51bWJlclxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWPquacieS4gOmhteaXtiByZXR1cm4gbnVsbFxuICAgKi9cbiAgaGlkZVdoZW5TaW5nbGVQYWdlPzogYm9vbGVhblxuICAvKipcbiAgICog5b2T5YmN6aG15Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKG5ld1BhZ2U6IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpID0+IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+mhteadoeaVsO+8jOm7mOiupCAxMCDmnaFcbiAgICovXG4gIHBhZ2VTaXplPzogbnVtYmVyXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrpppbpobXlsL7pobXot7PovazmjInpkq5cbiAgICovXG4gIHNob3dCdXR0b25KdW1wZXI/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrot7PovazovpPlhaXmoYZcbiAgICovXG4gIHNob3dJbnB1dEp1bXBlcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbiAgLyoqXG4gICAqIOaVsOaNruaAu+aVsFxuICAgKi9cbiAgdG90YWw/OiBudW1iZXJcbn1cblxuLyoqXG4gKiDliIbpobXlmajnlKjkuo7lsIblpKfph4/lhoXlrrnku6XliIbpobXlvaLlvI/pl7TpmpTvvIzliIfmjaLpgInmi6nmn6XnnIvjgIJcbiAqL1xuY29uc3QgUGFnaW5hdGlvbjogUmVhY3QuRkM8SVBhZ2luYXRpb25Qcm9wcz4gPSAoe1xuICBhbGlnbixcbiAgY2xhc3NOYW1lLFxuICBjdXJyZW50OiBjdXJyZW50UHJvcCxcbiAgZGVmYXVsdEN1cnJlbnQsXG4gIGRpc2FibGVkLFxuICBoaWRlV2hlblNpbmdsZVBhZ2UsXG4gIG9uQ2hhbmdlLFxuICBwYWdlU2l6ZSxcbiAgc2hvd0J1dHRvbkp1bXBlcixcbiAgc2hvd0lucHV0SnVtcGVyLFxuICBzaXplOiBzaXplUHJvcCxcbiAgdGhlbWUsXG4gIHRvdGFsLFxuICAuLi5vdGhlclByb3BzXG59OiBJUGFnaW5hdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlPG51bWJlcj4oXG4gICAgKGN1cnJlbnRQcm9wICE9PSBudWxsID8gY3VycmVudFByb3AgOiBkZWZhdWx0Q3VycmVudCkgfHwgMVxuICApXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoXG4gICAgY3VycmVudFByb3AgIT09IG51bGwgJiZcbiAgICBjdXJyZW50UHJvcCAhPT0gdW5kZWZpbmVkICYmXG4gICAgY3VycmVudCAhPT0gY3VycmVudFByb3BcbiAgKSB7XG4gICAgc2V0Q3VycmVudChjdXJyZW50UHJvcClcbiAgfVxuXG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAge1xuICAgICAgW2Ake3ByZWZpeH0tJHthbGlnbn1gXTogYWxpZ24sXG4gICAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICB9XG4gIClcblxuICB3YXJuaW5nKE51bWJlci5pc0ludGVnZXIoY3VycmVudCksIFwiUGFnaW5hdGlvblwiLCBcImN1cnJlbnQg5YC86ZyA6KaB5piv5q2j5pW05pWwXCIpXG5cbiAgd2FybmluZyhcbiAgICAhKFxuICAgICAgY3VycmVudCA8IDEgfHxcbiAgICAgIChjdXJyZW50ID4gTWF0aC5jZWlsKCh0b3RhbCB8fCAwKSAvIChwYWdlU2l6ZSB8fCAxMCkpICYmIGN1cnJlbnQgIT09IDEpXG4gICAgKSxcbiAgICBcIlBhZ2luYXRpb25cIixcbiAgICBgY3VycmVudCDpnIDopoHml7blnKjmraPnoa7ojIPlm7TlhoXnmoTmraPmlbTmlbDvvIx0b3RhbDogJHt0b3RhbH3vvIxwYWdlU2l6Ze+8miR7cGFnZVNpemV9YFxuICApXG5cbiAgbGV0IHBhZ2VOdW1iZXIgPSAxXG4gIGlmICh0b3RhbCAmJiBwYWdlU2l6ZSkge1xuICAgIHBhZ2VOdW1iZXIgPSBNYXRoLm1heChNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSksIDEpXG4gIH1cbiAgY29uc3QgcHJldkRpc2FibGVkID0gY3VycmVudCA9PT0gMVxuICBjb25zdCBuZXh0RGlzYWJsZWQgPSBjdXJyZW50ID09PSBwYWdlTnVtYmVyXG5cbiAgaWYgKHBhZ2VOdW1iZXIgPT09IDEgJiYgaGlkZVdoZW5TaW5nbGVQYWdlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUp1bXAgPSAodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IG5ld1BhZ2VcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJmaXJzdFwiOlxuICAgICAgICBuZXdQYWdlID0gMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcInByZXZcIjpcbiAgICAgICAgbmV3UGFnZSA9IGN1cnJlbnQgLSAxXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwibmV4dFwiOlxuICAgICAgICBuZXdQYWdlID0gY3VycmVudCArIDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJsYXN0XCI6XG4gICAgICAgIGlmICh0b3RhbCAmJiBwYWdlU2l6ZSkge1xuICAgICAgICAgIG5ld1BhZ2UgPSBNYXRoLm1heChNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSksIDEpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgaWYgKG5ld1BhZ2UgJiYgcGFnZVNpemUpIHtcbiAgICAgIGlmIChjdXJyZW50UHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRDdXJyZW50KG5ld1BhZ2UpXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UobmV3UGFnZSwgcGFnZVNpemUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRKdW1wID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcnNldmFsdWUgPSBwYXJzZUludChpbnB1dFZhbHVlLCAxMClcbiAgICBpZiAoaXNOYU4ocGFyc2V2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgdmFsdWUgPSBNYXRoLm1heChwYXJzZXZhbHVlLCAxKVxuICAgIGlmICh0b3RhbCAmJiBwYWdlU2l6ZSkge1xuICAgICAgdmFsdWUgPSBNYXRoLm1pbih2YWx1ZSwgTWF0aC5tYXgoTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpLCAxKSlcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQcm9wID09PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50KHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlLCBwYWdlU2l6ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gZGF0YS1jdXJyZW50PXtjdXJyZW50fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICB7c2hvd0J1dHRvbkp1bXBlciAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiOHB4XCIgfX1cbiAgICAgICAgICBsZWZ0SWNvbj1cImFycm93LWxlZnQtZmlyc3RcIlxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghcHJldkRpc2FibGVkKSBoYW5kbGVKdW1wKFwiZmlyc3RcIilcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJ0biAke3ByZWZpeH0tYnRuLWxlZnRgfVxuICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoIXByZXZEaXNhYmxlZCkgaGFuZGxlSnVtcChcInByZXZcIilcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGV4dGB9PlxuICAgICAgICB7Y3VycmVudH0gLyB7cGFnZU51bWJlcn1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJ0biAke3ByZWZpeH0tYnRuLXJpZ2h0YH1cbiAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKCFuZXh0RGlzYWJsZWQpIGhhbmRsZUp1bXAoXCJuZXh0XCIpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAge3Nob3dCdXR0b25KdW1wZXIgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX1cbiAgICAgICAgICBsZWZ0SWNvbj1cImFycm93LXJpZ2h0LWxhc3RcIlxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghbmV4dERpc2FibGVkKSBoYW5kbGVKdW1wKFwibGFzdFwiKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3Nob3dJbnB1dEp1bXBlciAmJiBbXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGtleT17MH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5wdXRgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgLz4sXG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWlucHV0LWJ0bmB9XG4gICAgICAgICAga2V5PXsxfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUlucHV0SnVtcH1cbiAgICAgICAgPlxuICAgICAgICAgIOi3s+i9rFxuICAgICAgICA8L2Rpdj4sXG4gICAgICBdfVxuICAgIDwvZGl2PlxuICApXG59XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a+56b2Q5pa55byPXG4gICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSksXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOW9k+WJjemhteaVsFxuICAgKi9cbiAgY3VycmVudDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOm7mOiupOeahOW9k+WJjemhteaVsFxuICAgKi9cbiAgZGVmYXVsdEN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWPquacieS4gOmhteaXtiByZXR1cm4gbnVsbFxuICAgKi9cbiAgaGlkZVdoZW5TaW5nbGVQYWdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOW9k+WJjemhteWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7mr4/pobXmnaHmlbDvvIzpu5jorqQgMTAg5p2hXG4gICAqL1xuICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuummlumhteWwvumhtei3s+i9rOaMiemSrlxuICAgKi9cbiAgc2hvd0J1dHRvbkp1bXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrot7PovazovpPlhaXmoYZcbiAgICovXG4gIHNob3dJbnB1dEp1bXBlcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAvKipcbiAgICog5pWw5o2u5oC75pWwXG4gICAqL1xuICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbn1cblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduOiB1bmRlZmluZWQsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjdXJyZW50OiBudWxsLFxuICBkZWZhdWx0Q3VycmVudDogMSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBoaWRlV2hlblNpbmdsZVBhZ2U6IHRydWUsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBwYWdlU2l6ZTogMTAsXG4gIHNob3dCdXR0b25KdW1wZXI6IGZhbHNlLFxuICBzaG93SW5wdXRKdW1wZXI6IHRydWUsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHRvdGFsOiAwLFxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iXX0=