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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzeCJdLCJuYW1lcyI6WyJub29wIiwicHJlZml4IiwiUGFnaW5hdGlvbiIsImFsaWduIiwiY2xhc3NOYW1lIiwiY3VycmVudFByb3AiLCJjdXJyZW50IiwiZGVmYXVsdEN1cnJlbnQiLCJkaXNhYmxlZCIsImhpZGVXaGVuU2luZ2xlUGFnZSIsIm9uQ2hhbmdlIiwicGFnZVNpemUiLCJzaG93QnV0dG9uSnVtcGVyIiwic2hvd0lucHV0SnVtcGVyIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ0b3RhbCIsIm90aGVyUHJvcHMiLCJzZXRDdXJyZW50IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ1bmRlZmluZWQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsIk51bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJjZWlsIiwicGFnZU51bWJlciIsIm1heCIsInByZXZEaXNhYmxlZCIsIm5leHREaXNhYmxlZCIsImhhbmRsZUp1bXAiLCJ0eXBlIiwibmV3UGFnZSIsImhhbmRsZUlucHV0SnVtcCIsInBhcnNldmFsdWUiLCJwYXJzZUludCIsImlzTmFOIiwidmFsdWUiLCJtaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJlIiwidGFyZ2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsaUJBQWY7O0FBNkRBLElBQU1DLFVBQXFELEdBQUcsU0FBeERBLFVB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RUFBRSxLQVZPO0FBV3hCRSxFQUFBQSxJQUFJLEVBQUUsT0FYa0I7QUFZeEJDLEVBQUFBLEtBQUssRUFBRSxJQVppQjtBQWF4QkMsRUFBQUEsS0FBSyxFQUFFO0FBYmlCLENBQTFCO2VBZ0JlZixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHdhcm5pbmcgZnJvbSBcIi4uL191dGlsL3dhcm5pbmdcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9pbnB1dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBwcmVmaXggPSBcImFkdWktcGFnaW5hdGlvblwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2luYXRpb25Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a+56b2Q5pa55byPXG4gICAqL1xuICBhbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIlxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOW9k+WJjemhteaVsFxuICAgKi9cbiAgY3VycmVudD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOm7mOiupOeahOW9k+WJjemhteaVsFxuICAgKi9cbiAgZGVmYXVsdEN1cnJlbnQ/OiBudW1iZXJcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlj6rmnInkuIDpobXml7YgcmV0dXJuIG51bGxcbiAgICovXG4gIGhpZGVXaGVuU2luZ2xlUGFnZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOW9k+WJjemhteWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86IChuZXdQYWdlOiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/pobXmnaHmlbDvvIzpu5jorqQgMTAg5p2hXG4gICAqL1xuICBwYWdlU2l6ZT86IG51bWJlclxuICAvKipcbiAgICog5piv5ZCm5pi+56S66aaW6aG15bC+6aG16Lez6L2s5oyJ6ZKuXG4gICAqL1xuICBzaG93QnV0dG9uSnVtcGVyPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5pi+56S66Lez6L2s6L6T5YWl5qGGXG4gICAqL1xuICBzaG93SW5wdXRKdW1wZXI/OiBib29sZWFuXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIC8qKlxuICAgKiDmlbDmja7mgLvmlbBcbiAgICovXG4gIHRvdGFsPzogbnVtYmVyXG59XG5cbi8qKlxuICog5YiG6aG15Zmo55So5LqO5bCG5aSn6YeP5YaF5a655Lul5YiG6aG15b2i5byP6Ze06ZqU77yM5YiH5o2i6YCJ5oup5p+l55yL44CCXG4gKi9cbmNvbnN0IFBhZ2luYXRpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElQYWdpbmF0aW9uUHJvcHM+ID0gKHtcbiAgYWxpZ24sXG4gIGNsYXNzTmFtZSxcbiAgY3VycmVudDogY3VycmVudFByb3AsXG4gIGRlZmF1bHRDdXJyZW50LFxuICBkaXNhYmxlZCxcbiAgaGlkZVdoZW5TaW5nbGVQYWdlLFxuICBvbkNoYW5nZSxcbiAgcGFnZVNpemUsXG4gIHNob3dCdXR0b25KdW1wZXIsXG4gIHNob3dJbnB1dEp1bXBlcixcbiAgc2l6ZTogc2l6ZVByb3AsXG4gIHRoZW1lLFxuICB0b3RhbCxcbiAgLi4ub3RoZXJQcm9wc1xufTogSVBhZ2luYXRpb25Qcm9wcykgPT4ge1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZTxudW1iZXI+KFxuICAgIChjdXJyZW50UHJvcCAhPT0gbnVsbCA/IGN1cnJlbnRQcm9wIDogZGVmYXVsdEN1cnJlbnQpIHx8IDFcbiAgKVxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKFxuICAgIGN1cnJlbnRQcm9wICE9PSBudWxsICYmXG4gICAgY3VycmVudFByb3AgIT09IHVuZGVmaW5lZCAmJlxuICAgIGN1cnJlbnQgIT09IGN1cnJlbnRQcm9wXG4gICkge1xuICAgIHNldEN1cnJlbnQoY3VycmVudFByb3ApXG4gIH1cblxuICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgIHtcbiAgICAgIFtgJHtwcmVmaXh9LSR7YWxpZ259YF06IGFsaWduLFxuICAgIH1cbiAgKVxuXG4gIHdhcm5pbmcoTnVtYmVyLmlzSW50ZWdlcihjdXJyZW50KSwgXCJQYWdpbmF0aW9uXCIsIFwiY3VycmVudCDlgLzpnIDopoHmmK/mraPmlbTmlbBcIilcblxuICB3YXJuaW5nKFxuICAgICEoXG4gICAgICBjdXJyZW50IDwgMSB8fFxuICAgICAgKGN1cnJlbnQgPiBNYXRoLmNlaWwoKHRvdGFsIHx8IDApIC8gKHBhZ2VTaXplIHx8IDEwKSkgJiYgY3VycmVudCAhPT0gMSlcbiAgICApLFxuICAgIFwiUGFnaW5hdGlvblwiLFxuICAgIGBjdXJyZW50IOmcgOimgeaXtuWcqOato+ehruiMg+WbtOWGheeahOato+aVtOaVsO+8jHRvdGFsOiAke3RvdGFsfe+8jHBhZ2VTaXpl77yaJHtwYWdlU2l6ZX1gXG4gIClcblxuICBsZXQgcGFnZU51bWJlciA9IDFcbiAgaWYgKHRvdGFsICYmIHBhZ2VTaXplKSB7XG4gICAgcGFnZU51bWJlciA9IE1hdGgubWF4KE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKSwgMSlcbiAgfVxuICBjb25zdCBwcmV2RGlzYWJsZWQgPSBjdXJyZW50ID09PSAxXG4gIGNvbnN0IG5leHREaXNhYmxlZCA9IGN1cnJlbnQgPT09IHBhZ2VOdW1iZXJcblxuICBpZiAocGFnZU51bWJlciA9PT0gMSAmJiBoaWRlV2hlblNpbmdsZVBhZ2UpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgaGFuZGxlSnVtcCA9ICh0eXBlOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgbmV3UGFnZVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICAgIG5ld1BhZ2UgPSAxXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwicHJldlwiOlxuICAgICAgICBuZXdQYWdlID0gY3VycmVudCAtIDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgIG5ld1BhZ2UgPSBjdXJyZW50ICsgMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgaWYgKHRvdGFsICYmIHBhZ2VTaXplKSB7XG4gICAgICAgICAgbmV3UGFnZSA9IE1hdGgubWF4KE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKSwgMSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICBpZiAobmV3UGFnZSAmJiBwYWdlU2l6ZSkge1xuICAgICAgaWYgKGN1cnJlbnRQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldEN1cnJlbnQobmV3UGFnZSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZShuZXdQYWdlLCBwYWdlU2l6ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVJbnB1dEp1bXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyc2V2YWx1ZSA9IHBhcnNlSW50KGlucHV0VmFsdWUsIDEwKVxuICAgIGlmIChpc05hTihwYXJzZXZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IE1hdGgubWF4KHBhcnNldmFsdWUsIDEpXG4gICAgaWYgKHRvdGFsICYmIHBhZ2VTaXplKSB7XG4gICAgICB2YWx1ZSA9IE1hdGgubWluKHZhbHVlLCBNYXRoLm1heChNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSksIDEpKVxuICAgIH1cbiAgICBpZiAoY3VycmVudFByb3AgPT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnQodmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UodmFsdWUsIHBhZ2VTaXplKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSBkYXRhLWN1cnJlbnQ9e2N1cnJlbnR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIHtzaG93QnV0dG9uSnVtcGVyICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI4cHhcIiB9fVxuICAgICAgICAgIGxlZnRJY29uPVwiYXJyb3ctbGVmdC1maXJzdFwiXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmV2RGlzYWJsZWQpIGhhbmRsZUp1bXAoXCJmaXJzdFwiKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPEJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGxlZnRJY29uPVwiYXJyb3ctbGVmdFwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICghcHJldkRpc2FibGVkKSBoYW5kbGVKdW1wKFwicHJldlwiKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS10ZXh0YH0+XG4gICAgICAgIHtjdXJyZW50fSAvIHtwYWdlTnVtYmVyfVxuICAgICAgPC9zcGFuPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGxlZnRJY29uPVwiYXJyb3ctcmlnaHRcIlxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoIW5leHREaXNhYmxlZCkgaGFuZGxlSnVtcChcIm5leHRcIilcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7c2hvd0J1dHRvbkp1bXBlciAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI4cHhcIiB9fVxuICAgICAgICAgIGxlZnRJY29uPVwiYXJyb3ctcmlnaHQtbGFzdFwiXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuZXh0RGlzYWJsZWQpIGhhbmRsZUp1bXAoXCJsYXN0XCIpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7c2hvd0lucHV0SnVtcGVyICYmIFtcbiAgICAgICAgPElucHV0XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGtleT17MH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5wdXRgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6aG156CBXCJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgb25QcmVzc0VudGVyPXtoYW5kbGVJbnB1dEp1bXB9XG4gICAgICAgIC8+LFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGtleT17MX1cbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbnB1dEp1bXB9XG4gICAgICAgID5cbiAgICAgICAgICDot7PovaxcbiAgICAgICAgPC9CdXR0b24+LFxuICAgICAgXX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWvuem9kOaWueW8j1xuICAgKi9cbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlvZPliY3pobXmlbBcbiAgICovXG4gIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDpu5jorqTnmoTlvZPliY3pobXmlbBcbiAgICovXG4gIGRlZmF1bHRDdXJyZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlj6rmnInkuIDpobXml7YgcmV0dXJuIG51bGxcbiAgICovXG4gIGhpZGVXaGVuU2luZ2xlUGFnZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlvZPliY3pobXlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5q+P6aG15p2h5pWw77yM6buY6K6kIDEwIOadoVxuICAgKi9cbiAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrpppbpobXlsL7pobXot7PovazmjInpkq5cbiAgICovXG4gIHNob3dCdXR0b25KdW1wZXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5piv5ZCm5pi+56S66Lez6L2s6L6T5YWl5qGGXG4gICAqL1xuICBzaG93SW5wdXRKdW1wZXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIOaVsOaNruaAu+aVsFxuICAgKi9cbiAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG59XG5cblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY3VycmVudDogbnVsbCxcbiAgZGVmYXVsdEN1cnJlbnQ6IDEsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaGlkZVdoZW5TaW5nbGVQYWdlOiB0cnVlLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgcGFnZVNpemU6IDEwLFxuICBzaG93QnV0dG9uSnVtcGVyOiBmYWxzZSxcbiAgc2hvd0lucHV0SnVtcGVyOiBmYWxzZSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdG90YWw6IDAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25cbiJdfQ==