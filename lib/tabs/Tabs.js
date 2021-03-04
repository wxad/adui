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

var prefix = "adui-tabs";
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
  size: "small",
  value: null
};
var _default = Tabs;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy9UYWJzLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUYWJzIiwicmVmIiwiYmFubmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImd1dHRlciIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImluZGljYXRvclN0eWxlIiwic2V0SW5kaWNhdG9yU3R5bGUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJzZXRWYWx1ZSIsInRhYnNSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJ1cGRhdGVJbmRpY2F0b3JTdHlsZSIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwidGhlQWN0aXZlVGFiIiwicXVlcnlTZWxlY3RvciIsImNsaWVudFdpZHRoIiwib2Zmc2V0TGVmdCIsInRyYW5zZm9ybSIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwib3BhY2l0eSIsImdldERvbU5vZGUiLCJoYW5kbGVUYWJzVmFsdWVDaGFuZ2UiLCJjbGFzc1NldCIsIlRhYiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsV0FBZjtBQXFEQSxJQUFNQyxJQUFXLEdBQUcsdUJBQ2xCLGdCQWFFQyxHQWJGLEVBY0s7QUFBQTs7QUFBQSxNQVpEQyxNQVlDLFFBWkRBLE1BWUM7QUFBQSxNQVhEQyxTQVdDLFFBWERBLFNBV0M7QUFBQSxNQVZEQyxRQVVDLFFBVkRBLFFBVUM7QUFBQSxNQVREQyxZQVNDLFFBVERBLFlB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NUIsQ0FBaEIsQ0FoQ1M7QUFvQ2ZuQyxFQUFBQSxLQUFLLEVBQUUyQixzQkFBVUssU0FBVixDQUFvQixDQUFDTCxzQkFBVUksTUFBWCxFQUFtQkosc0JBQVVNLE1BQTdCLENBQXBCO0FBcENRLENBQWpCO0FBdUNBNUMsSUFBSSxDQUFDK0MsWUFBTCxHQUFvQjtBQUNsQjdDLEVBQUFBLE1BQU0sRUFBRSxLQURVO0FBRWxCQyxFQUFBQSxTQUFTLEVBQUVhLFNBRk87QUFHbEJYLEVBQUFBLFlBQVksRUFBRSxJQUhJO0FBSWxCQyxFQUFBQSxRQUFRLEVBQUUsS0FKUTtBQUtsQkMsRUFBQUEsTUFBTSxFQUFFUyxTQUxVO0FBTWxCUixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQU5BO0FBT2xCQyxFQUFBQSxJQUFJLEVBQUUsT0FQWTtBQVFsQkUsRUFBQUEsS0FBSyxFQUFFO0FBUlcsQ0FBcEI7ZUFXZVgsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFRhYiBmcm9tIFwiLi9UYWJcIlxuaW1wb3J0IHsgVGFic0NvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFic1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYnNQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCa5qCP5YiG6YWN5a695bqm77yIZmxleDogMTvvvIlcbiAgICovXG4gIGJhbm5lcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOeahOW3sumAieS4remhuVxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIHRhYiDnmoTpl7Tot50gbWFyZ2luXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWAvOWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZTogUmVhY3QuUmVhY3RUZXh0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOW3sumAieS4remhuVxuICAgKi9cbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYnNcbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElUYWJzUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuICA+IHtcbiAgVGFiOiB0eXBlb2YgVGFiXG59XG5cbi8qKlxuICog5a+86Iiq6aG1562+77yM6aG26YOo5qiq5ZCR5a+86Iiq55qE5YaF5a6577yM55So5LqO5YiH5o2i6aG16Z2i5Lit5ZCM5LiA5bGC57qn55qE5YaF5a6544CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFRhYnM6IElUYWJzID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGJhbm5lcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBndXR0ZXIsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHNpemUsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElUYWJzUHJvcHMsXG4gICAgcmVmOiBhbnlcbiAgKSA9PiB7XG4gICAgY29uc3QgW2luZGljYXRvclN0eWxlLCBzZXRJbmRpY2F0b3JTdHlsZV0gPSB1c2VTdGF0ZTxSZWFjdC5DU1NQcm9wZXJ0aWVzPihcbiAgICAgIHt9XG4gICAgKVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWIHZhbHVlIHN0YXRlXG4gICAgICogMS4g5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBUYWJzIOWujOWFqOS6pOeUseWklumDqOaOp+WItu+8jOWGhemDqOeKtuaAgeaXoOaViO+8m1xuICAgICAqIDIuIOWGjeWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBUYWJzIOeKtuaAgeS4uuatpOm7mOiupOWAvO+8m1xuICAgICAqIDMuIOWmguaenOmDveayoeacie+8jOWImeWPliBUYWIgY2hpbGRyZW4g56ysIDAg6aG555qEIHZhbHVl77yM5bCG56ysIDAg6aG56K6+572u5Li65b2T5YmN6aG544CCXG4gICAgICpcbiAgICAgKiDku6XkuIrkuInkuKrliKTmlq3lj6/og73lrZjlnKjlhrLnqoHvvIzmiYDku6XlnKjmraTor7TmmI7mnaHku7bliKTmlq3nmoTkvJjlhYjnuqfjgIJcbiAgICAgKi9cbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgIGxldCB2YWxcbiAgICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsID0gdmFsdWVQcm9wXG4gICAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWwgPSBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWUgIT09IHZhbHVlUHJvcCkge1xuICAgICAgc2V0VmFsdWUodmFsdWVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IHRhYnNSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCB1cGRhdGVJbmRpY2F0b3JTdHlsZSA9ICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGFic1JlZiAmJiB0YWJzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCB0aGVBY3RpdmVUYWIgPSB0YWJzUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nXG4gICAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICAgIGlmICh0aGVBY3RpdmVUYWIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIG9mZnNldExlZnQgfSA9IHRoZUFjdGl2ZVRhYlxuICAgICAgICAgICAgc2V0SW5kaWNhdG9yU3R5bGUoe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7TWF0aC5mbG9vcihvZmZzZXRMZWZ0KX1weClgLFxuICAgICAgICAgICAgICB3aWR0aDogY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJbmRpY2F0b3JTdHlsZSh7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICB1cGRhdGVJbmRpY2F0b3JTdHlsZSxcbiAgICAgIGdldERvbU5vZGU6ICgpID0+IHRhYnNSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIGNvbnN0IGhhbmRsZVRhYnNWYWx1ZUNoYW5nZSA9ICh2YWw6IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWYWx1ZSh2YWwpXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB1cGRhdGVJbmRpY2F0b3JTdHlsZSgpXG4gICAgfSwgW3ZhbHVlXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LSR7Z2V0Q29tcHV0ZWRTaXplKHNpemUsIHNpemVDb250ZXh0KX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1iYW5uZXJgXTogYmFubmVyLFxuICAgICAgICBbYCR7cHJlZml4fS1iYXNlX2Rpc2FibGVkYF06IGRpc2FibGVkLFxuICAgICAgfVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFic0NvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3sgZGlzYWJsZWQsIGd1dHRlciwgaGFuZGxlVGFic1ZhbHVlQ2hhbmdlLCB2YWx1ZSB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBkYXRhLXZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICByZWY9e3RhYnNSZWZ9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbmRpY2F0b3JgfSBzdHlsZT17aW5kaWNhdG9yU3R5bGV9IC8+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGFic0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG4pXG5cblRhYnMuVGFiID0gVGFiXG5cblRhYnMucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCa5qCP5YiG6YWN5a695bqm77yIZmxleDogMTvvvIlcbiAgICovXG4gIGJhbm5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTnmoTlt7LpgInkuK3poblcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiB0YWIg55qE6Ze06LedIG1hcmdpblxuICAgKi9cbiAgZ3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOW3sumAieS4remhuVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn1cblxuVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhbm5lcjogZmFsc2UsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZ3V0dGVyOiB1bmRlZmluZWQsXG4gIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIl19