"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useIsInitialRender = require("../_util/hooks/use-is-initial-render");

var _configProvider = require("../config-provider");

var _resizeObserver = _interopRequireDefault(require("../resize-observer"));

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

  var initial = (0, _useIsInitialRender.useIsInitialRender)();

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
            transition: initial ? "" : "all var(--motion-duration-base) var(--ease-in-out)",
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
  }, _react["default"].createElement(_resizeObserver["default"], {
    onResize: function onResize() {
      if (!initial) {
        updateIndicatorStyle();
      }
    }
  }, _react["default"].createElement("div", _extends({
    className: classSet,
    "data-value": value,
    ref: tabsRef
  }, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-indicator"),
    style: indicatorStyle
  }), children)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy9UYWJzLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUYWJzIiwicmVmIiwiYmFubmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImd1dHRlciIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImluaXRpYWwiLCJpbmRpY2F0b3JTdHlsZSIsInNldEluZGljYXRvclN0eWxlIiwidmFsIiwidW5kZWZpbmVkIiwic2V0VmFsdWUiLCJ0YWJzUmVmIiwiQ29uZmlnQ29udGV4dCIsInNpemVDb250ZXh0IiwidXBkYXRlSW5kaWNhdG9yU3R5bGUiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInRoZUFjdGl2ZVRhYiIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRXaWR0aCIsIm9mZnNldExlZnQiLCJ0cmFuc2Zvcm0iLCJNYXRoIiwiZmxvb3IiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJvcGFjaXR5IiwiZ2V0RG9tTm9kZSIsImhhbmRsZVRhYnNWYWx1ZUNoYW5nZSIsImNsYXNzU2V0IiwiVGFiIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFRQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmO0FBcURBLElBQU1DLElBQVcsR0FBRyx1QkFDbEIsZ0JBYUVDLEdBYkYsRUFjSztBQUFBOztBQUFBLE1BWkRDLE1BWUMsUUFaREEsTUFZQztBQUFBLE1BWERDLFNBV0MsUUFYREEsU0FXQztBQUFBLE1BVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLE1BVERDLFlBU0MsUUFUREEsWUFTQztBQUFBLE1BUkRDLFFBUUMsUUFSREEsUUFRQztBQUFBLE1BUERDLE1BT0MsUUFQREEsTUFPQztBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLElBS0MsUUFMREEsSUFLQztBQUFBLE1BSk1DLFNBSU4sUUFKREMsS0FJQztBQUFBLE1BSEVDLFVBR0Y7O0FBQ0gsTUFBTUMsT0FBTyxHQUFHLDZDQUFoQjs7QUFERyxrQkFFeUMscUJBQzFDLEVBRDBDLENBRnpDO0FBQUE7QUFBQSxNQUVJQyxjQUZKO0FBQUEsTUFFb0JDLGlCQUZwQjs7QUFBQSxtQkFjdUIscUJBQVMsWUFBTTtBQUN2QyxRQUFJQyxHQUFKOztBQUNBLFFBQUlOLFNBQVMsS0FBSyxJQUFkLElBQXNCQSxTQUFTLEtBQUtPLFNBQXhDLEVBQW1EO0FBQ2pERCxNQUFBQSxHQUFHLEdBQUdOLFNBQU47QUFDRCxLQUZELE1BRU8sSUFBSUwsWUFBWSxLQUFLLElBQWpCLElBQXlCQSxZQUFZLEtBQUtZLFNBQTlDLEVBQXlEO0FBQzlERCxNQUFBQSxHQUFHLEdBQUdYLFlBQU47QUFDRDs7QUFDRCxXQUFPVyxHQUFQO0FBQ0QsR0FSeUIsQ0FkdkI7QUFBQTtBQUFBLE1BY0lMLEtBZEo7QUFBQSxNQWNXTyxRQWRYOztBQXlCSCxNQUFJUixTQUFTLEtBQUssSUFBZCxJQUFzQkMsS0FBSyxLQUFLRCxTQUFwQyxFQUErQztBQUM3Q1EsSUFBQUEsUUFBUSxDQUFDUixTQUFELENBQVI7QUFDRDs7QUFFRCxNQUFNUyxPQUFPLEdBQUcsbUJBQXVCLElBQXZCLENBQWhCOztBQTdCRyxvQkErQjJCLHVCQUFXQyw2QkFBWCxDQS9CM0I7QUFBQSxNQStCV0MsV0EvQlgsZUErQktaLElBL0JMOztBQWlDSCxNQUFNYSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakNDLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsVUFBSUosT0FBTyxJQUFJQSxPQUFPLENBQUNLLE9BQXZCLEVBQWdDO0FBQzlCLFlBQU1DLFlBQVksR0FBR04sT0FBTyxDQUFDSyxPQUFSLENBQWdCRSxhQUFoQixDQUNuQix3QkFEbUIsQ0FBckI7O0FBR0EsWUFBSUQsWUFBSixFQUFrQjtBQUFBLGNBQ1JFLFdBRFEsR0FDb0JGLFlBRHBCLENBQ1JFLFdBRFE7QUFBQSxjQUNLQyxVQURMLEdBQ29CSCxZQURwQixDQUNLRyxVQURMO0FBRWhCYixVQUFBQSxpQkFBaUIsQ0FBQztBQUNoQmMsWUFBQUEsU0FBUyx1QkFBZ0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxVQUFYLENBQWhCLFFBRE87QUFFaEJJLFlBQUFBLFVBQVUsRUFBRW5CLE9BQU8sR0FDZixFQURlLEdBRWYsb0RBSlk7QUFLaEJvQixZQUFBQSxLQUFLLEVBQUVOO0FBTFMsV0FBRCxDQUFqQjtBQU9ELFNBVEQsTUFTTztBQUNMWixVQUFBQSxpQkFBaUIsQ0FBQztBQUFFbUIsWUFBQUEsT0FBTyxFQUFFO0FBQVgsV0FBRCxDQUFqQjtBQUNEO0FBQ0Y7QUFDRixLQWxCUyxFQWtCUCxDQWxCTyxDQUFWO0FBbUJELEdBcEJEOztBQXNCQSxrQ0FBb0JqQyxHQUFwQixFQUF5QjtBQUFBLFdBQU87QUFDOUJxQixNQUFBQSxvQkFBb0IsRUFBcEJBLG9CQUQ4QjtBQUU5QmEsTUFBQUEsVUFBVSxFQUFFO0FBQUEsZUFBTWhCLE9BQU8sQ0FBQ0ssT0FBZDtBQUFBO0FBRmtCLEtBQVA7QUFBQSxHQUF6Qjs7QUFLQSxNQUFNWSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNwQixHQUFELEVBQTBCO0FBQ3RELFFBQUlOLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QlEsTUFBQUEsUUFBUSxDQUFDRixHQUFELENBQVI7QUFDRDs7QUFDRCxRQUFJUixRQUFKLEVBQWM7QUFDWkEsTUFBQUEsUUFBUSxDQUFDUSxHQUFELENBQVI7QUFDRDtBQUNGLEdBUEQ7O0FBU0Esd0JBQVUsWUFBTTtBQUNkTSxJQUFBQSxvQkFBb0I7QUFDckIsR0FGRCxFQUVHLENBQUNYLEtBQUQsQ0FGSDtBQUlBLE1BQU0wQixRQUFRLEdBQUcsNEJBQ2ZsQyxTQURlLFlBRVpKLE1BRlksc0JBR1pBLE1BSFksY0FHRixxQ0FBZ0JVLElBQWhCLEVBQXNCWSxXQUF0QixDQUhFLDZEQUtUdEIsTUFMUyxjQUtTRyxNQUxULDBDQU1USCxNQU5TLHFCQU1nQk8sUUFOaEIsZ0JBQWpCO0FBVUEsU0FDRSxnQ0FBQyxvQkFBRCxDQUFhLFFBQWI7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUFFQSxNQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUMsTUFBQUEsTUFBTSxFQUFOQSxNQUFaO0FBQW9CNkIsTUFBQUEscUJBQXFCLEVBQXJCQSxxQkFBcEI7QUFBMkN6QixNQUFBQSxLQUFLLEVBQUxBO0FBQTNDO0FBRFQsS0FHRSxnQ0FBQywwQkFBRDtBQUNFLElBQUEsUUFBUSxFQUFFLG9CQUFNO0FBQ2QsVUFBSSxDQUFDRSxPQUFMLEVBQWM7QUFDWlMsUUFBQUEsb0JBQW9CO0FBQ3JCO0FBQ0Y7QUFMSCxLQU9FO0FBQ0UsSUFBQSxTQUFTLEVBQUVlLFFBRGI7QUFFRSxrQkFBWTFCLEtBRmQ7QUFHRSxJQUFBLEdBQUcsRUFBRVE7QUFIUCxLQUlNUCxVQUpOLEdBTUU7QUFBSyxJQUFBLFNBQVMsWUFBS2IsTUFBTCxlQUFkO0FBQXVDLElBQUEsS0FBSyxFQUFFZTtBQUE5QyxJQU5GLEVBT0dWLFFBUEgsQ0FQRixDQUhGLENBREY7QUF1QkQsQ0F6SGlCLENBQXBCO0FBNEhBSixJQUFJLENBQUNzQyxHQUFMLEdBQVdBLGVBQVg7QUFFQXRDLElBQUksQ0FBQ3VDLFNBQUwsR0FBaUI7QUFJZnJDLEVBQUFBLE1BQU0sRUFBRXNDLHNCQUFVQyxJQUpIO0FBUWZyQyxFQUFBQSxRQUFRLEVBQUVvQyxzQkFBVUUsSUFBVixDQUFlQyxVQVJWO0FBWWZ4QyxFQUFBQSxTQUFTLEVBQUVxQyxzQkFBVUksTUFaTjtBQWdCZnZDLEVBQUFBLFlBQVksRUFBRW1DLHNCQUFVSyxTQUFWLENBQW9CLENBQUNMLHNCQUFVSSxNQUFYLEVBQW1CSixzQkFBVU0sTUFBN0IsQ0FBcEIsQ0FoQkM7QUFvQmZ4QyxFQUFBQSxRQUFRLEVBQUVrQyxzQkFBVUMsSUFwQkw7QUF3QmZsQyxFQUFBQSxNQUFNLEVBQUVpQyxzQkFBVU0sTUF4Qkg7QUE0QmZ0QyxFQUFBQSxRQUFRLEVBQUVnQyxzQkFBVU8sSUE1Qkw7QUFnQ2Z0QyxFQUFBQSxJQUFJLEVBQUUrQixzQkFBVVEsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBaENTO0FBb0NmckMsRUFBQUEsS0FBSyxFQUFFNkIsc0JBQVVLLFNBQVYsQ0FBb0IsQ0FBQ0wsc0JBQVVJLE1BQVgsRUFBbUJKLHNCQUFVTSxNQUE3QixDQUFwQjtBQXBDUSxDQUFqQjtBQXVDQTlDLElBQUksQ0FBQ2lELFlBQUwsR0FBb0I7QUFDbEIvQyxFQUFBQSxNQUFNLEVBQUUsS0FEVTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFYyxTQUZPO0FBR2xCWixFQUFBQSxZQUFZLEVBQUUsSUFISTtBQUlsQkMsRUFBQUEsUUFBUSxFQUFFLEtBSlE7QUFLbEJDLEVBQUFBLE1BQU0sRUFBRVUsU0FMVTtBQU1sQlQsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FOQTtBQU9sQkMsRUFBQUEsSUFBSSxFQUFFLE9BUFk7QUFRbEJFLEVBQUFBLEtBQUssRUFBRTtBQVJXLENBQXBCO2VBV2VYLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyB1c2VJc0luaXRpYWxSZW5kZXIgfSBmcm9tIFwiLi4vX3V0aWwvaG9va3MvdXNlLWlzLWluaXRpYWwtcmVuZGVyXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFRhYiBmcm9tIFwiLi9UYWJcIlxuaW1wb3J0IHsgVGFic0NvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFic1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYnNQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCa5qCP5YiG6YWN5a695bqm77yIZmxleDogMTvvvIlcbiAgICovXG4gIGJhbm5lcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOeahOW3sumAieS4remhuVxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIHRhYiDnmoTpl7Tot50gbWFyZ2luXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWAvOWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZTogUmVhY3QuUmVhY3RUZXh0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOW3sumAieS4remhuVxuICAgKi9cbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYnNcbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElUYWJzUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuICA+IHtcbiAgVGFiOiB0eXBlb2YgVGFiXG59XG5cbi8qKlxuICog5a+86Iiq6aG1562+77yM6aG26YOo5qiq5ZCR5a+86Iiq55qE5YaF5a6577yM55So5LqO5YiH5o2i6aG16Z2i5Lit5ZCM5LiA5bGC57qn55qE5YaF5a6544CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFRhYnM6IElUYWJzID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGJhbm5lcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBndXR0ZXIsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHNpemUsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElUYWJzUHJvcHMsXG4gICAgcmVmOiBhbnlcbiAgKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbCA9IHVzZUlzSW5pdGlhbFJlbmRlcigpXG4gICAgY29uc3QgW2luZGljYXRvclN0eWxlLCBzZXRJbmRpY2F0b3JTdHlsZV0gPSB1c2VTdGF0ZTxSZWFjdC5DU1NQcm9wZXJ0aWVzPihcbiAgICAgIHt9XG4gICAgKVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWIHZhbHVlIHN0YXRlXG4gICAgICogMS4g5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBUYWJzIOWujOWFqOS6pOeUseWklumDqOaOp+WItu+8jOWGhemDqOeKtuaAgeaXoOaViO+8m1xuICAgICAqIDIuIOWGjeWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBUYWJzIOeKtuaAgeS4uuatpOm7mOiupOWAvO+8m1xuICAgICAqIDMuIOWmguaenOmDveayoeacie+8jOWImeWPliBUYWIgY2hpbGRyZW4g56ysIDAg6aG555qEIHZhbHVl77yM5bCG56ysIDAg6aG56K6+572u5Li65b2T5YmN6aG544CCXG4gICAgICpcbiAgICAgKiDku6XkuIrkuInkuKrliKTmlq3lj6/og73lrZjlnKjlhrLnqoHvvIzmiYDku6XlnKjmraTor7TmmI7mnaHku7bliKTmlq3nmoTkvJjlhYjnuqfjgIJcbiAgICAgKi9cbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgIGxldCB2YWxcbiAgICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsID0gdmFsdWVQcm9wXG4gICAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWwgPSBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWUgIT09IHZhbHVlUHJvcCkge1xuICAgICAgc2V0VmFsdWUodmFsdWVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IHRhYnNSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCB1cGRhdGVJbmRpY2F0b3JTdHlsZSA9ICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGFic1JlZiAmJiB0YWJzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCB0aGVBY3RpdmVUYWIgPSB0YWJzUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nXG4gICAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICAgIGlmICh0aGVBY3RpdmVUYWIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIG9mZnNldExlZnQgfSA9IHRoZUFjdGl2ZVRhYlxuICAgICAgICAgICAgc2V0SW5kaWNhdG9yU3R5bGUoe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7TWF0aC5mbG9vcihvZmZzZXRMZWZ0KX1weClgLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBpbml0aWFsXG4gICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgOiBcImFsbCB2YXIoLS1tb3Rpb24tZHVyYXRpb24tYmFzZSkgdmFyKC0tZWFzZS1pbi1vdXQpXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBjbGllbnRXaWR0aCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEluZGljYXRvclN0eWxlKHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIHVwZGF0ZUluZGljYXRvclN0eWxlLFxuICAgICAgZ2V0RG9tTm9kZTogKCkgPT4gdGFic1JlZi5jdXJyZW50LFxuICAgIH0pKVxuXG4gICAgY29uc3QgaGFuZGxlVGFic1ZhbHVlQ2hhbmdlID0gKHZhbDogUmVhY3QuUmVhY3RUZXh0KSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZhbHVlKHZhbClcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUluZGljYXRvclN0eWxlKClcbiAgICB9LCBbdmFsdWVdKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtnZXRDb21wdXRlZFNpemUoc2l6ZSwgc2l6ZUNvbnRleHQpfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWJhbm5lcmBdOiBiYW5uZXIsXG4gICAgICAgIFtgJHtwcmVmaXh9LWJhc2VfZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJzQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17eyBkaXNhYmxlZCwgZ3V0dGVyLCBoYW5kbGVUYWJzVmFsdWVDaGFuZ2UsIHZhbHVlIH19XG4gICAgICA+XG4gICAgICAgIDxSZXNpemVPYnNlcnZlclxuICAgICAgICAgIG9uUmVzaXplPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgICAgICAgdXBkYXRlSW5kaWNhdG9yU3R5bGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgZGF0YS12YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICByZWY9e3RhYnNSZWZ9XG4gICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbmRpY2F0b3JgfSBzdHlsZT17aW5kaWNhdG9yU3R5bGV9IC8+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVzaXplT2JzZXJ2ZXI+XG4gICAgICA8L1RhYnNDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuKVxuXG5UYWJzLlRhYiA9IFRhYlxuXG5UYWJzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpumAmuagj+WIhumFjeWuveW6pu+8iGZsZXg6IDE777yJXG4gICAqL1xuICBiYW5uZXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k55qE5bey6YCJ5Lit6aG5XG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogdGFiIOeahOmXtOi3nSBtYXJnaW5cbiAgICovXG4gIGd1dHRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOWAvOWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlt7LpgInkuK3poblcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cblRhYnMuZGVmYXVsdFByb3BzID0ge1xuICBiYW5uZXI6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGd1dHRlcjogdW5kZWZpbmVkLFxuICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIHNpemU6IFwic21hbGxcIixcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcbiJdfQ==