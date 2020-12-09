"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _warning = _interopRequireDefault(require("../_util/warning"));

var _configProvider = require("../config-provider");

var _button = _interopRequireDefault(require("../button"));

var _input = _interopRequireDefault(require("../input"));

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  var _useState = (0, _react.useState)((currentProp !== null ? currentProp : defaultCurrent) || 1),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  if (currentProp !== null && currentProp !== undefined && current !== currentProp) {
    setCurrent(currentProp);
  }

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(size), _defineProperty({}, "".concat(prefix, "-").concat(align), align));
  (0, _warning["default"])(Number.isInteger(current), "Pagination", "current 值需要是正整数");
  (0, _warning["default"])(!(current < 1 || current > Math.ceil((total || 0) / (pageSize || 10)) && current !== 1), "Pagination", "current \u9700\u8981\u65F6\u5728\u6B63\u786E\u8303\u56F4\u5185\u7684\u6B63\u6574\u6570\uFF0Ctotal: ".concat(total, "\uFF0CpageSize\uFF1A").concat(pageSize));
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

  return _react["default"].createElement("div", _extends({
    className: classSet,
    "data-current": current
  }, otherProps), showButtonJumper && _react["default"].createElement(_button["default"], {
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
  }), _react["default"].createElement(_button["default"], {
    disabled: disabled,
    leftIcon: "arrow-left",
    size: size,
    theme: theme,
    onClick: function onClick() {
      if (!prevDisabled) handleJump("prev");
    }
  }), _react["default"].createElement("span", {
    className: "".concat(prefix, "-text")
  }, current, " / ", pageNumber), _react["default"].createElement(_button["default"], {
    disabled: disabled,
    leftIcon: "arrow-right",
    size: size,
    theme: theme,
    onClick: function onClick() {
      if (!nextDisabled) handleJump("next");
    }
  }), showButtonJumper && _react["default"].createElement(_button["default"], {
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
  }), showInputJumper && [_react["default"].createElement(_input["default"], {
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
  }), _react["default"].createElement(_button["default"], {
    disabled: disabled,
    key: 1,
    size: size,
    theme: theme,
    onClick: handleInputJump
  }, "\u8DF3\u8F6C")]);
};

Pagination.propTypes = {
  align: _propTypes["default"].oneOf(["left", "center", "right"]),
  className: _propTypes["default"].string,
  current: _propTypes["default"].number,
  defaultCurrent: _propTypes["default"].number,
  disabled: _propTypes["default"].bool,
  hideWhenSinglePage: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  pageSize: _propTypes["default"].number,
  showButtonJumper: _propTypes["default"].bool,
  showInputJumper: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  theme: _propTypes["default"].oneOf([null, "light"]),
  total: _propTypes["default"].number
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
var _default = Pagination;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzeCJdLCJuYW1lcyI6WyJub29wIiwicHJlZml4IiwiUGFnaW5hdGlvbiIsImFsaWduIiwiY2xhc3NOYW1lIiwiY3VycmVudFByb3AiLCJjdXJyZW50IiwiZGVmYXVsdEN1cnJlbnQiLCJkaXNhYmxlZCIsImhpZGVXaGVuU2luZ2xlUGFnZSIsIm9uQ2hhbmdlIiwicGFnZVNpemUiLCJzaG93QnV0dG9uSnVtcGVyIiwic2hvd0lucHV0SnVtcGVyIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ0b3RhbCIsIm90aGVyUHJvcHMiLCJzZXRDdXJyZW50IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ1bmRlZmluZWQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsIk51bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJjZWlsIiwicGFnZU51bWJlciIsIm1heCIsInByZXZEaXNhYmxlZCIsIm5leHREaXNhYmxlZCIsImhhbmRsZUp1bXAiLCJ0eXBlIiwibmV3UGFnZSIsImhhbmRsZUlucHV0SnVtcCIsInBhcnNldmFsdWUiLCJwYXJzZUludCIsImlzTmFOIiwidmFsdWUiLCJtaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJlIiwidGFyZ2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLGlCQUFmOztBQTZEQSxJQUFNQyxVQUFxRCxHQUFHLFNBQXhEQSxVQUF3RCxPQWV0QztBQUFBLE1BZHRCQyxLQWNzQixRQWR0QkEsS0Fjc0I7QUFBQSxNQWJ0QkMsU0Fhc0IsUUFidEJBLFNBYXNCO0FBQUEsTUFaYkMsV0FZYSxRQVp0QkMsT0FZc0I7QUFBQSxNQVh0QkMsY0FXc0IsUUFYdEJBLGNBV3NCO0FBQUEsTUFWdEJDLFFBVXNCLFFBVnRCQSxRQVVzQjtBQUFBLE1BVHRCQyxrQkFTc0IsUUFUdEJBLGtCQVNzQjtBQUFBLE1BUnRCQyxRQVFzQixRQVJ0QkEsUUFRc0I7QUFBQSxNQVB0QkMsUUFPc0IsUUFQdEJBLFFBT3NCO0FBQUEsTUFOdEJDLGdCQU1zQixRQU50QkEsZ0JBTXNCO0FBQUEsTUFMdEJDLGVBS3NCLFFBTHRCQSxlQUtzQjtBQUFBLE1BSmhCQyxRQUlnQixRQUp0QkMsSUFJc0I7QUFBQSxNQUh0QkMsS0FHc0IsUUFIdEJBLEtBR3NCO0FBQUEsTUFGdEJDLEtBRXNCLFFBRnRCQSxLQUVzQjtBQUFBLE1BRG5CQyxVQUNtQjs7QUFBQSxrQkFDUSxxQkFDNUIsQ0FBQ2IsV0FBVyxLQUFLLElBQWhCLEdBQXVCQSxXQUF2QixHQUFxQ0UsY0FBdEMsS0FBeUQsQ0FEN0IsQ0FEUjtBQUFBO0FBQUEsTUFDZkQsT0FEZTtBQUFBLE1BQ05hLFVBRE07O0FBQUEsbUJBSWMscUJBQVMsRUFBVCxDQUpkO0FBQUE7QUFBQSxNQUlmQyxVQUplO0FBQUEsTUFJSEMsYUFKRzs7QUFPdEIsTUFDRWhCLFdBQVcsS0FBSyxJQUFoQixJQUNBQSxXQUFXLEtBQUtpQixTQURoQixJQUVBaEIsT0FBTyxLQUFLRCxXQUhkLEVBSUU7QUFDQWMsSUFBQUEsVUFBVSxDQUFDZCxXQUFELENBQVY7QUFDRDs7QUFicUIsb0JBZVEsdUJBQVdrQiw2QkFBWCxDQWZSO0FBQUEsTUFlUkMsV0FmUSxlQWVkVCxJQWZjOztBQWdCdEIsTUFBTUEsSUFBSSxHQUFHLHFDQUFnQkQsUUFBaEIsRUFBMEJVLFdBQTFCLENBQWI7QUFFQSxNQUFNQyxRQUFRLEdBQUcsNEJBQ2ZyQixTQURlLFlBRVpILE1BRlksc0JBR1pBLE1BSFksY0FHRmMsSUFIRSxpQ0FLVGQsTUFMUyxjQUtDRSxLQUxELEdBS1dBLEtBTFgsRUFBakI7QUFTQSwyQkFBUXVCLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQnJCLE9BQWpCLENBQVIsRUFBbUMsWUFBbkMsRUFBaUQsaUJBQWpEO0FBRUEsMkJBQ0UsRUFDRUEsT0FBTyxHQUFHLENBQVYsSUFDQ0EsT0FBTyxHQUFHc0IsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBQ1osS0FBSyxJQUFJLENBQVYsS0FBZ0JOLFFBQVEsSUFBSSxFQUE1QixDQUFWLENBQVYsSUFBd0RMLE9BQU8sS0FBSyxDQUZ2RSxDQURGLEVBS0UsWUFMRiwrR0FNa0NXLEtBTmxDLGlDQU1vRE4sUUFOcEQ7QUFTQSxNQUFJbUIsVUFBVSxHQUFHLENBQWpCOztBQUNBLE1BQUliLEtBQUssSUFBSU4sUUFBYixFQUF1QjtBQUNyQm1CLElBQUFBLFVBQVUsR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVNILElBQUksQ0FBQ0MsSUFBTCxDQUFVWixLQUFLLEdBQUdOLFFBQWxCLENBQVQsRUFBc0MsQ0FBdEMsQ0FBYjtBQUNEOztBQUNELE1BQU1xQixZQUFZLEdBQUcxQixPQUFPLEtBQUssQ0FBakM7QUFDQSxNQUFNMkIsWUFBWSxHQUFHM0IsT0FBTyxLQUFLd0IsVUFBakM7O0FBRUEsTUFBSUEsVUFBVSxLQUFLLENBQWYsSUFBb0JyQixrQkFBeEIsRUFBNEM7QUFDMUMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTXlCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBa0I7QUFDbkMsUUFBSUMsT0FBSjs7QUFDQSxZQUFRRCxJQUFSO0FBQ0UsV0FBSyxPQUFMO0FBQ0VDLFFBQUFBLE9BQU8sR0FBRyxDQUFWO0FBQ0E7O0FBQ0YsV0FBSyxNQUFMO0FBQ0VBLFFBQUFBLE9BQU8sR0FBRzlCLE9BQU8sR0FBRyxDQUFwQjtBQUNBOztBQUNGLFdBQUssTUFBTDtBQUNFOEIsUUFBQUEsT0FBTyxHQUFHOUIsT0FBTyxHQUFHLENBQXBCO0FBQ0E7O0FBQ0YsV0FBSyxNQUFMO0FBQ0UsWUFBSVcsS0FBSyxJQUFJTixRQUFiLEVBQXVCO0FBQ3JCeUIsVUFBQUEsT0FBTyxHQUFHUixJQUFJLENBQUNHLEdBQUwsQ0FBU0gsSUFBSSxDQUFDQyxJQUFMLENBQVVaLEtBQUssR0FBR04sUUFBbEIsQ0FBVCxFQUFzQyxDQUF0QyxDQUFWO0FBQ0Q7O0FBQ0Q7O0FBQ0Y7QUFmRjs7QUFrQkEsUUFBSXlCLE9BQU8sSUFBSXpCLFFBQWYsRUFBeUI7QUFDdkIsVUFBSU4sV0FBVyxLQUFLLElBQXBCLEVBQTBCO0FBQ3hCYyxRQUFBQSxVQUFVLENBQUNpQixPQUFELENBQVY7QUFDRDs7QUFDRCxVQUFJMUIsUUFBSixFQUFjO0FBQ1pBLFFBQUFBLFFBQVEsQ0FBQzBCLE9BQUQsRUFBVXpCLFFBQVYsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixHQTVCRDs7QUE4QkEsTUFBTTBCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ25CLFVBQUQsRUFBYSxFQUFiLENBQTNCOztBQUNBLFFBQUlvQixLQUFLLENBQUNGLFVBQUQsQ0FBVCxFQUF1QjtBQUNyQjtBQUNEOztBQUNELFFBQUlHLEtBQUssR0FBR2IsSUFBSSxDQUFDRyxHQUFMLENBQVNPLFVBQVQsRUFBcUIsQ0FBckIsQ0FBWjs7QUFDQSxRQUFJckIsS0FBSyxJQUFJTixRQUFiLEVBQXVCO0FBQ3JCOEIsTUFBQUEsS0FBSyxHQUFHYixJQUFJLENBQUNjLEdBQUwsQ0FBU0QsS0FBVCxFQUFnQmIsSUFBSSxDQUFDRyxHQUFMLENBQVNILElBQUksQ0FBQ0MsSUFBTCxDQUFVWixLQUFLLEdBQUdOLFFBQWxCLENBQVQsRUFBc0MsQ0FBdEMsQ0FBaEIsQ0FBUjtBQUNEOztBQUNELFFBQUlOLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QmMsTUFBQUEsVUFBVSxDQUFDc0IsS0FBRCxDQUFWO0FBQ0Q7O0FBQ0QsUUFBSS9CLFFBQUosRUFBYztBQUNaQSxNQUFBQSxRQUFRLENBQUMrQixLQUFELEVBQVE5QixRQUFSLENBQVI7QUFDRDtBQUNGLEdBZkQ7O0FBaUJBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRWMsUUFBaEI7QUFBMEIsb0JBQWNuQjtBQUF4QyxLQUFxRFksVUFBckQsR0FDR04sZ0JBQWdCLElBQ2YsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRUosUUFEWjtBQUVFLElBQUEsS0FBSyxFQUFFO0FBQUVtQyxNQUFBQSxXQUFXLEVBQUU7QUFBZixLQUZUO0FBR0UsSUFBQSxRQUFRLEVBQUMsa0JBSFg7QUFJRSxJQUFBLElBQUksRUFBRTVCLElBSlI7QUFLRSxJQUFBLEtBQUssRUFBRUMsS0FMVDtBQU1FLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSSxDQUFDZ0IsWUFBTCxFQUFtQkUsVUFBVSxDQUFDLE9BQUQsQ0FBVjtBQUNwQjtBQVJILElBRkosRUFhRSxnQ0FBQyxrQkFBRDtBQUNFLElBQUEsUUFBUSxFQUFFMUIsUUFEWjtBQUVFLElBQUEsUUFBUSxFQUFDLFlBRlg7QUFHRSxJQUFBLElBQUksRUFBRU8sSUFIUjtBQUlFLElBQUEsS0FBSyxFQUFFQyxLQUpUO0FBS0UsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixVQUFJLENBQUNnQixZQUFMLEVBQW1CRSxVQUFVLENBQUMsTUFBRCxDQUFWO0FBQ3BCO0FBUEgsSUFiRixFQXNCRTtBQUFNLElBQUEsU0FBUyxZQUFLakMsTUFBTDtBQUFmLEtBQ0dLLE9BREgsU0FDZXdCLFVBRGYsQ0F0QkYsRUF5QkUsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRXRCLFFBRFo7QUFFRSxJQUFBLFFBQVEsRUFBQyxhQUZYO0FBR0UsSUFBQSxJQUFJLEVBQUVPLElBSFI7QUFJRSxJQUFBLEtBQUssRUFBRUMsS0FKVDtBQUtFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSSxDQUFDaUIsWUFBTCxFQUFtQkMsVUFBVSxDQUFDLE1BQUQsQ0FBVjtBQUNwQjtBQVBILElBekJGLEVBa0NHdEIsZ0JBQWdCLElBQ2YsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLFFBQVEsRUFBRUosUUFEWjtBQUVFLElBQUEsS0FBSyxFQUFFO0FBQUVvQyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLQUZUO0FBR0UsSUFBQSxRQUFRLEVBQUMsa0JBSFg7QUFJRSxJQUFBLElBQUksRUFBRTdCLElBSlI7QUFLRSxJQUFBLEtBQUssRUFBRUMsS0FMVDtBQU1FLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSSxDQUFDaUIsWUFBTCxFQUFtQkMsVUFBVSxDQUFDLE1BQUQsQ0FBVjtBQUNwQjtBQVJILElBbkNKLEVBOENHckIsZUFBZSxJQUFJLENBQ2xCLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUVMLFFBRFo7QUFFRSxJQUFBLEdBQUcsRUFBRSxDQUZQO0FBR0UsSUFBQSxTQUFTLFlBQUtQLE1BQUwsV0FIWDtBQUlFLElBQUEsV0FBVyxFQUFDLGNBSmQ7QUFLRSxJQUFBLElBQUksRUFBRWMsSUFMUjtBQU1FLElBQUEsS0FBSyxFQUFFQyxLQU5UO0FBT0UsSUFBQSxRQUFRLEVBQUUsa0JBQUM2QixDQUFEO0FBQUEsYUFDUnhCLGFBQWEsQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBREw7QUFBQSxLQVBaO0FBVUUsSUFBQSxZQUFZLEVBQUVKO0FBVmhCLElBRGtCLEVBYWxCLGdDQUFDLGtCQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUU3QixRQURaO0FBRUUsSUFBQSxHQUFHLEVBQUUsQ0FGUDtBQUdFLElBQUEsSUFBSSxFQUFFTyxJQUhSO0FBSUUsSUFBQSxLQUFLLEVBQUVDLEtBSlQ7QUFLRSxJQUFBLE9BQU8sRUFBRXFCO0FBTFgsb0JBYmtCLENBOUN0QixDQURGO0FBd0VELENBdkxEOztBQXlMQW5DLFVBQVUsQ0FBQzZDLFNBQVgsR0FBdUI7QUFJckI1QyxFQUFBQSxLQUFLLEVBQUU2QyxzQkFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE9BQW5CLENBQWhCLENBSmM7QUFRckI3QyxFQUFBQSxTQUFTLEVBQUU0QyxzQkFBVUUsTUFSQTtBQVlyQjVDLEVBQUFBLE9BQU8sRUFBRTBDLHNCQUFVRyxNQVpFO0FBZ0JyQjVDLEVBQUFBLGNBQWMsRUFBRXlDLHNCQUFVRyxNQWhCTDtBQW9CckIzQyxFQUFBQSxRQUFRLEVBQUV3QyxzQkFBVUksSUFwQkM7QUF3QnJCM0MsRUFBQUEsa0JBQWtCLEVBQUV1QyxzQkFBVUksSUF4QlQ7QUE0QnJCMUMsRUFBQUEsUUFBUSxFQUFFc0Msc0JBQVVLLElBNUJDO0FBZ0NyQjFDLEVBQUFBLFFBQVEsRUFBRXFDLHNCQUFVRyxNQWhDQztBQW9DckJ2QyxFQUFBQSxnQkFBZ0IsRUFBRW9DLHNCQUFVSSxJQXBDUDtBQXdDckJ2QyxFQUFBQSxlQUFlLEVBQUVtQyxzQkFBVUksSUF4Q047QUE0Q3JCckMsRUFBQUEsSUFBSSxFQUFFaUMsc0JBQVVDLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQTVDZTtBQWdEckJqQyxFQUFBQSxLQUFLLEVBQUVnQyxzQkFBVUMsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxPQUFQLENBQWhCLENBaERjO0FBb0RyQmhDLEVBQUFBLEtBQUssRUFBRStCLHNCQUFVRztBQXBESSxDQUF2QjtBQXVEQWpELFVBQVUsQ0FBQ29ELFlBQVgsR0FBMEI7QUFDeEJuRCxFQUFBQSxLQUFLLEVBQUVtQixTQURpQjtBQUV4QmxCLEVBQUFBLFNBQVMsRUFBRWtCLFNBRmE7QUFHeEJoQixFQUFBQSxPQUFPLEVBQUUsSUFIZTtBQUl4QkMsRUFBQUEsY0FBYyxFQUFFLENBSlE7QUFLeEJDLEVBQUFBLFFBQVEsRUFBRSxLQUxjO0FBTXhCQyxFQUFBQSxrQkFBa0IsRUFBRSxJQU5JO0FBT3hCQyxFQUFBQSxRQUFRLEVBQUVWLElBUGM7QUFReEJXLEVBQUFBLFFBQVEsRUFBRSxFQVJjO0FBU3hCQyxFQUFBQSxnQkFBZ0IsRUFBRSxLQVRNO0FBVXhCQyxFQUFBQSxlQUFlLEVBQUUsS0FWTztBQVd4QkUsRUFBQUEsSUFBSSxFQUFFLE9BWGtCO0FBWXhCQyxFQUFBQSxLQUFLLEVBQUUsSUFaaUI7QUFheEJDLEVBQUFBLEtBQUssRUFBRTtBQWJpQixDQUExQjtlQWdCZWYsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB3YXJuaW5nIGZyb20gXCIuLi9fdXRpbC93YXJuaW5nXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXBhZ2luYXRpb25cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElQYWdpbmF0aW9uUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWvuem9kOaWueW8j1xuICAgKi9cbiAgYWxpZ24/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCJcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlvZPliY3pobXmlbBcbiAgICovXG4gIGN1cnJlbnQ/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiDpu5jorqTnmoTlvZPliY3pobXmlbBcbiAgICovXG4gIGRlZmF1bHRDdXJyZW50PzogbnVtYmVyXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5Y+q5pyJ5LiA6aG15pe2IHJldHVybiBudWxsXG4gICAqL1xuICBoaWRlV2hlblNpbmdsZVBhZ2U/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlvZPliY3pobXlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAobmV3UGFnZTogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgPT4gdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P6aG15p2h5pWw77yM6buY6K6kIDEwIOadoVxuICAgKi9cbiAgcGFnZVNpemU/OiBudW1iZXJcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuummlumhteWwvumhtei3s+i9rOaMiemSrlxuICAgKi9cbiAgc2hvd0J1dHRvbkp1bXBlcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuui3s+i9rOi+k+WFpeahhlxuICAgKi9cbiAgc2hvd0lucHV0SnVtcGVyPzogYm9vbGVhblxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5pWw5o2u5oC75pWwXG4gICAqL1xuICB0b3RhbD86IG51bWJlclxufVxuXG4vKipcbiAqIOWIhumhteWZqOeUqOS6juWwhuWkp+mHj+WGheWuueS7peWIhumhteW9ouW8j+mXtOmalO+8jOWIh+aNoumAieaLqeafpeeci+OAglxuICovXG5jb25zdCBQYWdpbmF0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJUGFnaW5hdGlvblByb3BzPiA9ICh7XG4gIGFsaWduLFxuICBjbGFzc05hbWUsXG4gIGN1cnJlbnQ6IGN1cnJlbnRQcm9wLFxuICBkZWZhdWx0Q3VycmVudCxcbiAgZGlzYWJsZWQsXG4gIGhpZGVXaGVuU2luZ2xlUGFnZSxcbiAgb25DaGFuZ2UsXG4gIHBhZ2VTaXplLFxuICBzaG93QnV0dG9uSnVtcGVyLFxuICBzaG93SW5wdXRKdW1wZXIsXG4gIHNpemU6IHNpemVQcm9wLFxuICB0aGVtZSxcbiAgdG90YWwsXG4gIC4uLm90aGVyUHJvcHNcbn06IElQYWdpbmF0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGU8bnVtYmVyPihcbiAgICAoY3VycmVudFByb3AgIT09IG51bGwgPyBjdXJyZW50UHJvcCA6IGRlZmF1bHRDdXJyZW50KSB8fCAxXG4gIClcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIilcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChcbiAgICBjdXJyZW50UHJvcCAhPT0gbnVsbCAmJlxuICAgIGN1cnJlbnRQcm9wICE9PSB1bmRlZmluZWQgJiZcbiAgICBjdXJyZW50ICE9PSBjdXJyZW50UHJvcFxuICApIHtcbiAgICBzZXRDdXJyZW50KGN1cnJlbnRQcm9wKVxuICB9XG5cbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICB7XG4gICAgICBbYCR7cHJlZml4fS0ke2FsaWdufWBdOiBhbGlnbixcbiAgICB9XG4gIClcblxuICB3YXJuaW5nKE51bWJlci5pc0ludGVnZXIoY3VycmVudCksIFwiUGFnaW5hdGlvblwiLCBcImN1cnJlbnQg5YC86ZyA6KaB5piv5q2j5pW05pWwXCIpXG5cbiAgd2FybmluZyhcbiAgICAhKFxuICAgICAgY3VycmVudCA8IDEgfHxcbiAgICAgIChjdXJyZW50ID4gTWF0aC5jZWlsKCh0b3RhbCB8fCAwKSAvIChwYWdlU2l6ZSB8fCAxMCkpICYmIGN1cnJlbnQgIT09IDEpXG4gICAgKSxcbiAgICBcIlBhZ2luYXRpb25cIixcbiAgICBgY3VycmVudCDpnIDopoHml7blnKjmraPnoa7ojIPlm7TlhoXnmoTmraPmlbTmlbDvvIx0b3RhbDogJHt0b3RhbH3vvIxwYWdlU2l6Ze+8miR7cGFnZVNpemV9YFxuICApXG5cbiAgbGV0IHBhZ2VOdW1iZXIgPSAxXG4gIGlmICh0b3RhbCAmJiBwYWdlU2l6ZSkge1xuICAgIHBhZ2VOdW1iZXIgPSBNYXRoLm1heChNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSksIDEpXG4gIH1cbiAgY29uc3QgcHJldkRpc2FibGVkID0gY3VycmVudCA9PT0gMVxuICBjb25zdCBuZXh0RGlzYWJsZWQgPSBjdXJyZW50ID09PSBwYWdlTnVtYmVyXG5cbiAgaWYgKHBhZ2VOdW1iZXIgPT09IDEgJiYgaGlkZVdoZW5TaW5nbGVQYWdlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUp1bXAgPSAodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IG5ld1BhZ2VcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJmaXJzdFwiOlxuICAgICAgICBuZXdQYWdlID0gMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcInByZXZcIjpcbiAgICAgICAgbmV3UGFnZSA9IGN1cnJlbnQgLSAxXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwibmV4dFwiOlxuICAgICAgICBuZXdQYWdlID0gY3VycmVudCArIDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJsYXN0XCI6XG4gICAgICAgIGlmICh0b3RhbCAmJiBwYWdlU2l6ZSkge1xuICAgICAgICAgIG5ld1BhZ2UgPSBNYXRoLm1heChNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSksIDEpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgaWYgKG5ld1BhZ2UgJiYgcGFnZVNpemUpIHtcbiAgICAgIGlmIChjdXJyZW50UHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRDdXJyZW50KG5ld1BhZ2UpXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UobmV3UGFnZSwgcGFnZVNpemUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRKdW1wID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcnNldmFsdWUgPSBwYXJzZUludChpbnB1dFZhbHVlLCAxMClcbiAgICBpZiAoaXNOYU4ocGFyc2V2YWx1ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgdmFsdWUgPSBNYXRoLm1heChwYXJzZXZhbHVlLCAxKVxuICAgIGlmICh0b3RhbCAmJiBwYWdlU2l6ZSkge1xuICAgICAgdmFsdWUgPSBNYXRoLm1pbih2YWx1ZSwgTWF0aC5tYXgoTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpLCAxKSlcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQcm9wID09PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50KHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKHZhbHVlLCBwYWdlU2l6ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gZGF0YS1jdXJyZW50PXtjdXJyZW50fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICB7c2hvd0J1dHRvbkp1bXBlciAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiOHB4XCIgfX1cbiAgICAgICAgICBsZWZ0SWNvbj1cImFycm93LWxlZnQtZmlyc3RcIlxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghcHJldkRpc2FibGVkKSBoYW5kbGVKdW1wKFwiZmlyc3RcIilcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBsZWZ0SWNvbj1cImFycm93LWxlZnRcIlxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoIXByZXZEaXNhYmxlZCkgaGFuZGxlSnVtcChcInByZXZcIilcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGV4dGB9PlxuICAgICAgICB7Y3VycmVudH0gLyB7cGFnZU51bWJlcn1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBsZWZ0SWNvbj1cImFycm93LXJpZ2h0XCJcbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKCFuZXh0RGlzYWJsZWQpIGhhbmRsZUp1bXAoXCJuZXh0XCIpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAge3Nob3dCdXR0b25KdW1wZXIgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX1cbiAgICAgICAgICBsZWZ0SWNvbj1cImFycm93LXJpZ2h0LWxhc3RcIlxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghbmV4dERpc2FibGVkKSBoYW5kbGVKdW1wKFwibGFzdFwiKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3Nob3dJbnB1dEp1bXBlciAmJiBbXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWlucHV0YH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIumhteeggVwiXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uUHJlc3NFbnRlcj17aGFuZGxlSW5wdXRKdW1wfVxuICAgICAgICAvPixcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW5wdXRKdW1wfVxuICAgICAgICA+XG4gICAgICAgICAg6Lez6L2sXG4gICAgICAgIDwvQnV0dG9uPixcbiAgICAgIF19XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlr7npvZDmlrnlvI9cbiAgICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5b2T5YmN6aG15pWwXG4gICAqL1xuICBjdXJyZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog6buY6K6k55qE5b2T5YmN6aG15pWwXG4gICAqL1xuICBkZWZhdWx0Q3VycmVudDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5Y+q5pyJ5LiA6aG15pe2IHJldHVybiBudWxsXG4gICAqL1xuICBoaWRlV2hlblNpbmdsZVBhZ2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5b2T5YmN6aG15Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruavj+mhteadoeaVsO+8jOm7mOiupCAxMCDmnaFcbiAgICovXG4gIHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5piv5ZCm5pi+56S66aaW6aG15bC+6aG16Lez6L2s5oyJ6ZKuXG4gICAqL1xuICBzaG93QnV0dG9uSnVtcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuui3s+i9rOi+k+WFpeahhlxuICAgKi9cbiAgc2hvd0lucHV0SnVtcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiDmlbDmja7mgLvmlbBcbiAgICovXG4gIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxufVxuXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxpZ246IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGN1cnJlbnQ6IG51bGwsXG4gIGRlZmF1bHRDdXJyZW50OiAxLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhpZGVXaGVuU2luZ2xlUGFnZTogdHJ1ZSxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIHBhZ2VTaXplOiAxMCxcbiAgc2hvd0J1dHRvbkp1bXBlcjogZmFsc2UsXG4gIHNob3dJbnB1dEp1bXBlcjogZmFsc2UsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG4gIHRvdGFsOiAwLFxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXG4iXX0=