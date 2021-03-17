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
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-").concat(align), align), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _classNames));
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
  }), _react["default"].createElement("div", {
    className: "".concat(prefix, "-btn ").concat(prefix, "-btn-left"),
    role: "none",
    onClick: function onClick() {
      if (!prevDisabled) handleJump("prev");
    }
  }), _react["default"].createElement("span", {
    className: "".concat(prefix, "-text")
  }, current, " / ", pageNumber), _react["default"].createElement("div", {
    className: "".concat(prefix, "-btn ").concat(prefix, "-btn-right"),
    role: "none",
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
  }), showInputJumper && [_react["default"].createElement("input", {
    key: 0,
    className: "".concat(prefix, "-input"),
    onChange: function onChange(e) {
      return setInputValue(e.target.value);
    }
  }), _react["default"].createElement("div", {
    role: "none",
    className: "".concat(prefix, "-input-btn"),
    key: 1,
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
  showInputJumper: true,
  size: "small",
  theme: null,
  total: 0
};
var _default = Pagination;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzeCJdLCJuYW1lcyI6WyJub29wIiwicHJlZml4IiwiUGFnaW5hdGlvbiIsImFsaWduIiwiY2xhc3NOYW1lIiwiY3VycmVudFByb3AiLCJjdXJyZW50IiwiZGVmYXVsdEN1cnJlbnQiLCJkaXNhYmxlZCIsImhpZGVXaGVuU2luZ2xlUGFnZSIsIm9uQ2hhbmdlIiwicGFnZVNpemUiLCJzaG93QnV0dG9uSnVtcGVyIiwic2hvd0lucHV0SnVtcGVyIiwic2l6ZVByb3AiLCJzaXplIiwidGhlbWUiLCJ0b3RhbCIsIm90aGVyUHJvcHMiLCJzZXRDdXJyZW50IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ1bmRlZmluZWQiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsIk51bWJlciIsImlzSW50ZWdlciIsIk1hdGgiLCJjZWlsIiwicGFnZU51bWJlciIsIm1heCIsInByZXZEaXNhYmxlZCIsIm5leHREaXNhYmxlZCIsImhhbmRsZUp1bXAiLCJ0eXBlIiwibmV3UGFnZSIsImhhbmRsZUlucHV0SnVtcCIsInBhcnNldmFsdWUiLCJwYXJzZUludCIsImlzTmFOIiwidmFsdWUiLCJtaW4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJlIiwidGFyZ2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLDBCQUFmOztBQTZEQSxJQUFNQyxVQUFxRCxHQUFHLFNB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QkFBVUssSUE1QkM7QUFnQ3JCMUMsRUFBQUEsUUFBUSxFQUFFcUMsc0JBQVVHLE1BaENDO0FBb0NyQnZDLEVBQUFBLGdCQUFnQixFQUFFb0Msc0JBQVVJLElBcENQO0FBd0NyQnZDLEVBQUFBLGVBQWUsRUFBRW1DLHNCQUFVSSxJQXhDTjtBQTRDckJyQyxFQUFBQSxJQUFJLEVBQUVpQyxzQkFBVUMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBNUNlO0FBZ0RyQmpDLEVBQUFBLEtBQUssRUFBRWdDLHNCQUFVQyxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLE9BQVAsQ0FBaEIsQ0FoRGM7QUFvRHJCaEMsRUFBQUEsS0FBSyxFQUFFK0Isc0JBQVVHO0FBcERJLENBQXZCO0FBdURBakQsVUFBVSxDQUFDb0QsWUFBWCxHQUEwQjtBQUN4Qm5ELEVBQUFBLEtBQUssRUFBRW1CLFNBRGlCO0FBRXhCbEIsRUFBQUEsU0FBUyxFQUFFa0IsU0FGYTtBQUd4QmhCLEVBQUFBLE9BQU8sRUFBRSxJQUhlO0FBSXhCQyxFQUFBQSxjQUFjLEVBQUUsQ0FKUTtBQUt4QkMsRUFBQUEsUUFBUSxFQUFFLEtBTGM7QUFNeEJDLEVBQUFBLGtCQUFrQixFQUFFLElBTkk7QUFPeEJDLEVBQUFBLFFBQVEsRUFBRVYsSUFQYztBQVF4QlcsRUFBQUEsUUFBUSxFQUFFLEVBUmM7QUFTeEJDLEVBQUFBLGdCQUFnQixFQUFFLEtBVE07QUFVeEJDLEVBQUFBLGVBQWUsRUFBRSxJQVZPO0FBV3hCRSxFQUFBQSxJQUFJLEVBQUUsT0FYa0I7QUFZeEJDLEVBQUFBLEtBQUssRUFBRSxJQVppQjtBQWF4QkMsRUFBQUEsS0FBSyxFQUFFO0FBYmlCLENBQTFCO2VBZ0JlZixVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHdhcm5pbmcgZnJvbSBcIi4uL191dGlsL3dhcm5pbmdcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLXBhZ2luYXRpb25cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElQYWdpbmF0aW9uUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWvuem9kOaWueW8j1xuICAgKi9cbiAgYWxpZ24/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCJcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlvZPliY3pobXmlbBcbiAgICovXG4gIGN1cnJlbnQ/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiDpu5jorqTnmoTlvZPliY3pobXmlbBcbiAgICovXG4gIGRlZmF1bHRDdXJyZW50PzogbnVtYmVyXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5Y+q5pyJ5LiA6aG15pe2IHJldHVybiBudWxsXG4gICAqL1xuICBoaWRlV2hlblNpbmdsZVBhZ2U/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlvZPliY3pobXlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAobmV3UGFnZTogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgPT4gdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P6aG15p2h5pWw77yM6buY6K6kIDEwIOadoVxuICAgKi9cbiAgcGFnZVNpemU/OiBudW1iZXJcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuummlumhteWwvumhtei3s+i9rOaMiemSrlxuICAgKi9cbiAgc2hvd0J1dHRvbkp1bXBlcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuui3s+i9rOi+k+WFpeahhlxuICAgKi9cbiAgc2hvd0lucHV0SnVtcGVyPzogYm9vbGVhblxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5pWw5o2u5oC75pWwXG4gICAqL1xuICB0b3RhbD86IG51bWJlclxufVxuXG4vKipcbiAqIOWIhumhteWZqOeUqOS6juWwhuWkp+mHj+WGheWuueS7peWIhumhteW9ouW8j+mXtOmalO+8jOWIh+aNoumAieaLqeafpeeci+OAglxuICovXG5jb25zdCBQYWdpbmF0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJUGFnaW5hdGlvblByb3BzPiA9ICh7XG4gIGFsaWduLFxuICBjbGFzc05hbWUsXG4gIGN1cnJlbnQ6IGN1cnJlbnRQcm9wLFxuICBkZWZhdWx0Q3VycmVudCxcbiAgZGlzYWJsZWQsXG4gIGhpZGVXaGVuU2luZ2xlUGFnZSxcbiAgb25DaGFuZ2UsXG4gIHBhZ2VTaXplLFxuICBzaG93QnV0dG9uSnVtcGVyLFxuICBzaG93SW5wdXRKdW1wZXIsXG4gIHNpemU6IHNpemVQcm9wLFxuICB0aGVtZSxcbiAgdG90YWwsXG4gIC4uLm90aGVyUHJvcHNcbn06IElQYWdpbmF0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGU8bnVtYmVyPihcbiAgICAoY3VycmVudFByb3AgIT09IG51bGwgPyBjdXJyZW50UHJvcCA6IGRlZmF1bHRDdXJyZW50KSB8fCAxXG4gIClcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIilcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChcbiAgICBjdXJyZW50UHJvcCAhPT0gbnVsbCAmJlxuICAgIGN1cnJlbnRQcm9wICE9PSB1bmRlZmluZWQgJiZcbiAgICBjdXJyZW50ICE9PSBjdXJyZW50UHJvcFxuICApIHtcbiAgICBzZXRDdXJyZW50KGN1cnJlbnRQcm9wKVxuICB9XG5cbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICB7XG4gICAgICBbYCR7cHJlZml4fS0ke2FsaWdufWBdOiBhbGlnbixcbiAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICAgIH1cbiAgKVxuXG4gIHdhcm5pbmcoTnVtYmVyLmlzSW50ZWdlcihjdXJyZW50KSwgXCJQYWdpbmF0aW9uXCIsIFwiY3VycmVudCDlgLzpnIDopoHmmK/mraPmlbTmlbBcIilcblxuICB3YXJuaW5nKFxuICAgICEoXG4gICAgICBjdXJyZW50IDwgMSB8fFxuICAgICAgKGN1cnJlbnQgPiBNYXRoLmNlaWwoKHRvdGFsIHx8IDApIC8gKHBhZ2VTaXplIHx8IDEwKSkgJiYgY3VycmVudCAhPT0gMSlcbiAgICApLFxuICAgIFwiUGFnaW5hdGlvblwiLFxuICAgIGBjdXJyZW50IOmcgOimgeaXtuWcqOato+ehruiMg+WbtOWGheeahOato+aVtOaVsO+8jHRvdGFsOiAke3RvdGFsfe+8jHBhZ2VTaXpl77yaJHtwYWdlU2l6ZX1gXG4gIClcblxuICBsZXQgcGFnZU51bWJlciA9IDFcbiAgaWYgKHRvdGFsICYmIHBhZ2VTaXplKSB7XG4gICAgcGFnZU51bWJlciA9IE1hdGgubWF4KE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKSwgMSlcbiAgfVxuICBjb25zdCBwcmV2RGlzYWJsZWQgPSBjdXJyZW50ID09PSAxXG4gIGNvbnN0IG5leHREaXNhYmxlZCA9IGN1cnJlbnQgPT09IHBhZ2VOdW1iZXJcblxuICBpZiAocGFnZU51bWJlciA9PT0gMSAmJiBoaWRlV2hlblNpbmdsZVBhZ2UpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgaGFuZGxlSnVtcCA9ICh0eXBlOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgbmV3UGFnZVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICAgIG5ld1BhZ2UgPSAxXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwicHJldlwiOlxuICAgICAgICBuZXdQYWdlID0gY3VycmVudCAtIDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgIG5ld1BhZ2UgPSBjdXJyZW50ICsgMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgaWYgKHRvdGFsICYmIHBhZ2VTaXplKSB7XG4gICAgICAgICAgbmV3UGFnZSA9IE1hdGgubWF4KE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKSwgMSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICBpZiAobmV3UGFnZSAmJiBwYWdlU2l6ZSkge1xuICAgICAgaWYgKGN1cnJlbnRQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldEN1cnJlbnQobmV3UGFnZSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZShuZXdQYWdlLCBwYWdlU2l6ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVJbnB1dEp1bXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyc2V2YWx1ZSA9IHBhcnNlSW50KGlucHV0VmFsdWUsIDEwKVxuICAgIGlmIChpc05hTihwYXJzZXZhbHVlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IE1hdGgubWF4KHBhcnNldmFsdWUsIDEpXG4gICAgaWYgKHRvdGFsICYmIHBhZ2VTaXplKSB7XG4gICAgICB2YWx1ZSA9IE1hdGgubWluKHZhbHVlLCBNYXRoLm1heChNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSksIDEpKVxuICAgIH1cbiAgICBpZiAoY3VycmVudFByb3AgPT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnQodmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UodmFsdWUsIHBhZ2VTaXplKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSBkYXRhLWN1cnJlbnQ9e2N1cnJlbnR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIHtzaG93QnV0dG9uSnVtcGVyICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI4cHhcIiB9fVxuICAgICAgICAgIGxlZnRJY29uPVwiYXJyb3ctbGVmdC1maXJzdFwiXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmV2RGlzYWJsZWQpIGhhbmRsZUp1bXAoXCJmaXJzdFwiKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYnRuICR7cHJlZml4fS1idG4tbGVmdGB9XG4gICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICghcHJldkRpc2FibGVkKSBoYW5kbGVKdW1wKFwicHJldlwiKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4fS10ZXh0YH0+XG4gICAgICAgIHtjdXJyZW50fSAvIHtwYWdlTnVtYmVyfVxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYnRuICR7cHJlZml4fS1idG4tcmlnaHRgfVxuICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAoIW5leHREaXNhYmxlZCkgaGFuZGxlSnVtcChcIm5leHRcIilcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICB7c2hvd0J1dHRvbkp1bXBlciAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI4cHhcIiB9fVxuICAgICAgICAgIGxlZnRJY29uPVwiYXJyb3ctcmlnaHQtbGFzdFwiXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuZXh0RGlzYWJsZWQpIGhhbmRsZUp1bXAoXCJsYXN0XCIpXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7c2hvd0lucHV0SnVtcGVyICYmIFtcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAga2V5PXswfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnB1dGB9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAvPixcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5wdXQtYnRuYH1cbiAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlSW5wdXRKdW1wfVxuICAgICAgICA+XG4gICAgICAgICAg6Lez6L2sXG4gICAgICAgIDwvZGl2PixcbiAgICAgIF19XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlr7npvZDmlrnlvI9cbiAgICovXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5b2T5YmN6aG15pWwXG4gICAqL1xuICBjdXJyZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog6buY6K6k55qE5b2T5YmN6aG15pWwXG4gICAqL1xuICBkZWZhdWx0Q3VycmVudDogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5Y+q5pyJ5LiA6aG15pe2IHJldHVybiBudWxsXG4gICAqL1xuICBoaWRlV2hlblNpbmdsZVBhZ2U6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5b2T5YmN6aG15Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruavj+mhteadoeaVsO+8jOm7mOiupCAxMCDmnaFcbiAgICovXG4gIHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5piv5ZCm5pi+56S66aaW6aG15bC+6aG16Lez6L2s5oyJ6ZKuXG4gICAqL1xuICBzaG93QnV0dG9uSnVtcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuui3s+i9rOi+k+WFpeahhlxuICAgKi9cbiAgc2hvd0lucHV0SnVtcGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gIC8qKlxuICAgKiDmlbDmja7mgLvmlbBcbiAgICovXG4gIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxufVxuXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxpZ246IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGN1cnJlbnQ6IG51bGwsXG4gIGRlZmF1bHRDdXJyZW50OiAxLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGhpZGVXaGVuU2luZ2xlUGFnZTogdHJ1ZSxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIHBhZ2VTaXplOiAxMCxcbiAgc2hvd0J1dHRvbkp1bXBlcjogZmFsc2UsXG4gIHNob3dJbnB1dEp1bXBlcjogdHJ1ZSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbiAgdG90YWw6IDAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25cbiJdfQ==