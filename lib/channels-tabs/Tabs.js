"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

var _Tab = _interopRequireDefault(require("./Tab"));

var _Context = require("./Context");

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

var prefix = "adui-channels-tabs";
var Tabs = (0, _react.forwardRef)(function (_ref, ref) {
  var _classNames;

  var banner = _ref.banner,
      className = _ref.className,
      children = _ref.children,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      gutter = _ref.gutter,
      onChange = _ref.onChange,
      size = _ref.size,
      valueProp = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["banner", "className", "children", "defaultValue", "disabled", "gutter", "onChange", "size", "value"]);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      indicatorStyle = _useState2[0],
      setIndicatorStyle = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    var val;

    if (valueProp !== null && valueProp !== undefined) {
      val = valueProp;
    } else if (defaultValue !== null && defaultValue !== undefined) {
      val = defaultValue;
    }

    return val;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  if (valueProp !== null && value !== valueProp) {
    setValue(valueProp);
  }

  var tabsRef = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var updateIndicatorStyle = function updateIndicatorStyle() {
    setTimeout(function () {
      if (tabsRef && tabsRef.current) {
        var theActiveTab = tabsRef.current.querySelector('[aria-selected="true"]');

        if (theActiveTab) {
          var clientWidth = theActiveTab.clientWidth,
              offsetLeft = theActiveTab.offsetLeft;
          setIndicatorStyle({
            transform: "translateX(".concat(Math.floor(offsetLeft), "px)"),
            width: clientWidth
          });
        } else {
          setIndicatorStyle({
            opacity: 0
          });
        }
      }
    }, 0);
  };

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      updateIndicatorStyle: updateIndicatorStyle,
      getDomNode: function getDomNode() {
        return tabsRef.current;
      }
    };
  });

  var handleTabsValueChange = function handleTabsValueChange(val) {
    if (valueProp === null) {
      setValue(val);
    }

    if (onChange) {
      onChange(val);
    }
  };

  (0, _react.useEffect)(function () {
    updateIndicatorStyle();
  }, [value]);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat((0, _configProvider.getComputedSize)(size, sizeContext)), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-banner"), banner), _defineProperty(_classNames, "".concat(prefix, "-base_disabled"), disabled), _classNames));
  return _react["default"].createElement(_Context.TabsContext.Provider, {
    value: {
      disabled: disabled,
      gutter: gutter,
      handleTabsValueChange: handleTabsValueChange,
      value: value
    }
  }, _react["default"].createElement("div", _extends({
    className: classSet,
    "data-value": value,
    ref: tabsRef
  }, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-indicator"),
    style: indicatorStyle
  }), children));
});
Tabs.Tab = _Tab["default"];
Tabs.propTypes = {
  banner: _propTypes["default"].bool,
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  disabled: _propTypes["default"].bool,
  gutter: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Tabs.defaultProps = {
  banner: false,
  className: undefined,
  defaultValue: null,
  disabled: false,
  gutter: undefined,
  onChange: function onChange() {},
  size: "large",
  value: null
};
var _default = Tabs;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtdGFicy9UYWJzLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUYWJzIiwicmVmIiwiYmFubmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImd1dHRlciIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImluZGljYXRvclN0eWxlIiwic2V0SW5kaWNhdG9yU3R5bGUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJzZXRWYWx1ZSIsInRhYnNSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJ1cGRhdGVJbmRpY2F0b3JTdHlsZSIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwidGhlQWN0aXZlVGFiIiwicXVlcnlTZWxlY3RvciIsImNsaWVudFdpZHRoIiwib2Zmc2V0TGVmdCIsInRyYW5zZm9ybSIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwib3BhY2l0eSIsImdldERvbU5vZGUiLCJoYW5kbGVUYWJzVmFsdWVDaGFuZ2UiLCJjbGFzc1NldCIsIlRhYiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsb0JBQWY7QUFxREEsSUFBTUMsSUFBVyxHQUFHLHVCQUNsQixnQkFhRUMsR0FiRixFQWNLO0FBQUE7O0FBQUEsTUFaREMsTUFZQyxRQVpEQSxNQVlDO0FBQUEsTUFYREMsU0FXQyxRQVhEQSxTQVdDO0FBQUEsTUFWREMsUUFVQyxRQVZEQSxRQVVDO0FBQUEsTUFUREMsWUFT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LEVBQTRCLE9BQTVCLENBQWhCLENBaENTO0FBb0NmbkMsRUFBQUEsS0FBSyxFQUFFMkIsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FBQ0wsc0JBQVVJLE1BQVgsRUFBbUJKLHNCQUFVTSxNQUE3QixDQUFwQjtBQXBDUSxDQUFqQjtBQXVDQTVDLElBQUksQ0FBQytDLFlBQUwsR0FBb0I7QUFDbEI3QyxFQUFBQSxNQUFNLEVBQUUsS0FEVTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFYSxTQUZPO0FBR2xCWCxFQUFBQSxZQUFZLEVBQUUsSUFISTtBQUlsQkMsRUFBQUEsUUFBUSxFQUFFLEtBSlE7QUFLbEJDLEVBQUFBLE1BQU0sRUFBRVMsU0FMVTtBQU1sQlIsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FOQTtBQU9sQkMsRUFBQUEsSUFBSSxFQUFFLE9BUFk7QUFRbEJFLEVBQUFBLEtBQUssRUFBRTtBQVJXLENBQXBCO2VBV2VYLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBUYWIgZnJvbSBcIi4vVGFiXCJcbmltcG9ydCB7IFRhYnNDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLXRhYnNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJzUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpumAmuagj+WIhumFjeWuveW6pu+8iGZsZXg6IDE777yJXG4gICAqL1xuICBiYW5uZXI/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpu5jorqTnmoTlt7LpgInkuK3poblcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiB0YWIg55qE6Ze06LedIG1hcmdpblxuICAgKi9cbiAgZ3V0dGVyPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlgLzlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFJlYWN0LlJlYWN0VGV4dCkgPT4gdm9pZFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlt7LpgInkuK3poblcbiAgICovXG4gIHZhbHVlPzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJzXG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJVGFic1Byb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbiAgPiB7XG4gIFRhYjogdHlwZW9mIFRhYlxufVxuXG4vKipcbiAqIOWvvOiIqumhteetvu+8jOmhtumDqOaoquWQkeWvvOiIqueahOWGheWuue+8jOeUqOS6juWIh+aNoumhtemdouS4reWQjOS4gOWxgue6p+eahOWGheWuueOAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBUYWJzOiBJVGFicyA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBiYW5uZXIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZ3V0dGVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBzaXplLFxuICAgICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJVGFic1Byb3BzLFxuICAgIHJlZjogYW55XG4gICkgPT4ge1xuICAgIGNvbnN0IFtpbmRpY2F0b3JTdHlsZSwgc2V0SW5kaWNhdG9yU3R5bGVdID0gdXNlU3RhdGU8UmVhY3QuQ1NTUHJvcGVydGllcz4oXG4gICAgICB7fVxuICAgIClcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMliB2YWx1ZSBzdGF0ZVxuICAgICAqIDEuIOS8mOWFiOWIpOaWrSBQcm9wIHZhbHVl77yM5aaC5p6c5a2Y5ZyoIFByb3AgdmFsdWXvvIzliJkgVGFicyDlrozlhajkuqTnlLHlpJbpg6jmjqfliLbvvIzlhoXpg6jnirbmgIHml6DmlYjvvJtcbiAgICAgKiAyLiDlho3liKTmlq0gUHJvcCBkZWZhdWx0VmFsdWXvvIzlpoLmnpzlrZjlnKjpu5jorqTlgLzvvIzliJkgVGFicyDnirbmgIHkuLrmraTpu5jorqTlgLzvvJtcbiAgICAgKiAzLiDlpoLmnpzpg73msqHmnInvvIzliJnlj5YgVGFiIGNoaWxkcmVuIOesrCAwIOmhueeahCB2YWx1Ze+8jOWwhuesrCAwIOmhueiuvue9ruS4uuW9k+WJjemhueOAglxuICAgICAqXG4gICAgICog5Lul5LiK5LiJ5Liq5Yik5pat5Y+v6IO95a2Y5Zyo5Yay56qB77yM5omA5Lul5Zyo5q2k6K+05piO5p2h5Lu25Yik5pat55qE5LyY5YWI57qn44CCXG4gICAgICovXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICBsZXQgdmFsXG4gICAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbCA9IHZhbHVlUHJvcFxuICAgICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwgJiYgZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsID0gZGVmYXVsdFZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSlcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAodmFsdWVQcm9wICE9PSBudWxsICYmIHZhbHVlICE9PSB2YWx1ZVByb3ApIHtcbiAgICAgIHNldFZhbHVlKHZhbHVlUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCB0YWJzUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gICAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gICAgY29uc3QgdXBkYXRlSW5kaWNhdG9yU3R5bGUgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRhYnNSZWYgJiYgdGFic1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgY29uc3QgdGhlQWN0aXZlVGFiID0gdGFic1JlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJ1xuICAgICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgICBpZiAodGhlQWN0aXZlVGFiKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBvZmZzZXRMZWZ0IH0gPSB0aGVBY3RpdmVUYWJcbiAgICAgICAgICAgIHNldEluZGljYXRvclN0eWxlKHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke01hdGguZmxvb3Iob2Zmc2V0TGVmdCl9cHgpYCxcbiAgICAgICAgICAgICAgd2lkdGg6IGNsaWVudFdpZHRoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SW5kaWNhdG9yU3R5bGUoeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgdXBkYXRlSW5kaWNhdG9yU3R5bGUsXG4gICAgICBnZXREb21Ob2RlOiAoKSA9PiB0YWJzUmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYW5kbGVUYWJzVmFsdWVDaGFuZ2UgPSAodmFsOiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmFsdWUodmFsKVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdXBkYXRlSW5kaWNhdG9yU3R5bGUoKVxuICAgIH0sIFt2YWx1ZV0pXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke2dldENvbXB1dGVkU2l6ZShzaXplLCBzaXplQ29udGV4dCl9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tYmFubmVyYF06IGJhbm5lcixcbiAgICAgICAgW2Ake3ByZWZpeH0tYmFzZV9kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYnNDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7IGRpc2FibGVkLCBndXR0ZXIsIGhhbmRsZVRhYnNWYWx1ZUNoYW5nZSwgdmFsdWUgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgZGF0YS12YWx1ZT17dmFsdWV9XG4gICAgICAgICAgcmVmPXt0YWJzUmVmfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5kaWNhdG9yYH0gc3R5bGU9e2luZGljYXRvclN0eWxlfSAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RhYnNDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuKVxuXG5UYWJzLlRhYiA9IFRhYlxuXG5UYWJzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpumAmuagj+WIhumFjeWuveW6pu+8iGZsZXg6IDE777yJXG4gICAqL1xuICBiYW5uZXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k55qE5bey6YCJ5Lit6aG5XG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogdGFiIOeahOmXtOi3nSBtYXJnaW5cbiAgICovXG4gIGd1dHRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOWAvOWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlt7LpgInkuK3poblcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cblRhYnMuZGVmYXVsdFByb3BzID0ge1xuICBiYW5uZXI6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGd1dHRlcjogdW5kZWZpbmVkLFxuICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIHNpemU6IFwibGFyZ2VcIixcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcbiJdfQ==