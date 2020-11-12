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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy9UYWJzLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJUYWJzIiwicmVmIiwiYmFubmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsImd1dHRlciIsIm9uQ2hhbmdlIiwic2l6ZSIsInZhbHVlUHJvcCIsInZhbHVlIiwib3RoZXJQcm9wcyIsImluZGljYXRvclN0eWxlIiwic2V0SW5kaWNhdG9yU3R5bGUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJzZXRWYWx1ZSIsInRhYnNSZWYiLCJDb25maWdDb250ZXh0Iiwic2l6ZUNvbnRleHQiLCJ1cGRhdGVJbmRpY2F0b3JTdHlsZSIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwidGhlQWN0aXZlVGFiIiwicXVlcnlTZWxlY3RvciIsImNsaWVudFdpZHRoIiwib2Zmc2V0TGVmdCIsInRyYW5zZm9ybSIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwib3BhY2l0eSIsImdldERvbU5vZGUiLCJoYW5kbGVUYWJzVmFsdWVDaGFuZ2UiLCJjbGFzc1NldCIsIlRhYiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBUUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmO0FBcURBLElBQU1DLElBQVcsR0FBRyx1QkFDbEIsZ0JBYUVDLEdBYkYsRUFjSztBQUFBOztBQUFBLE1BWkRDLE1BWUMsUUFaREEsTUFZQztBQUFBLE1BWERDLFNBV0MsUUFYREEsU0FXQztBQUFBLE1BVkRDLFFBVUMsUUFWREEsUUFVQztBQUFBLE1BVERDLFlBU0MsUUFUREEsWUFTQztB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QUFoQixDQWhDUztBQW9DZm5DLEVBQUFBLEtBQUssRUFBRTJCLHNCQUFVSyxTQUFWLENBQW9CLENBQUNMLHNCQUFVSSxNQUFYLEVBQW1CSixzQkFBVU0sTUFBN0IsQ0FBcEI7QUFwQ1EsQ0FBakI7QUF1Q0E1QyxJQUFJLENBQUMrQyxZQUFMLEdBQW9CO0FBQ2xCN0MsRUFBQUEsTUFBTSxFQUFFLEtBRFU7QUFFbEJDLEVBQUFBLFNBQVMsRUFBRWEsU0FGTztBQUdsQlgsRUFBQUEsWUFBWSxFQUFFLElBSEk7QUFJbEJDLEVBQUFBLFFBQVEsRUFBRSxLQUpRO0FBS2xCQyxFQUFBQSxNQUFNLEVBQUVTLFNBTFU7QUFNbEJSLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBTkE7QUFPbEJDLEVBQUFBLElBQUksRUFBRSxPQVBZO0FBUWxCRSxFQUFBQSxLQUFLLEVBQUU7QUFSVyxDQUFwQjtlQVdlWCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGZvcndhcmRSZWYsXG4gIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgVGFiIGZyb20gXCIuL1RhYlwiXG5pbXBvcnQgeyBUYWJzQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJzXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFic1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbpgJrmoI/liIbphY3lrr3luqbvvIhmbGV4OiAxO++8iVxuICAgKi9cbiAgYmFubmVyPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k55qE5bey6YCJ5Lit6aG5XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICogdGFiIOeahOmXtOi3nSBtYXJnaW5cbiAgICovXG4gIGd1dHRlcj86IG51bWJlclxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBSZWFjdC5SZWFjdFRleHQpID0+IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5bey6YCJ5Lit6aG5XG4gICAqL1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFic1xuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSVRhYnNQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4gID4ge1xuICBUYWI6IHR5cGVvZiBUYWJcbn1cblxuLyoqXG4gKiDlr7zoiKrpobXnrb7vvIzpobbpg6jmqKrlkJHlr7zoiKrnmoTlhoXlrrnvvIznlKjkuo7liIfmjaLpobXpnaLkuK3lkIzkuIDlsYLnuqfnmoTlhoXlrrnjgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgVGFiczogSVRhYnMgPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYmFubmVyLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGd1dHRlcixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2l6ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVRhYnNQcm9wcyxcbiAgICByZWY6IGFueVxuICApID0+IHtcbiAgICBjb25zdCBbaW5kaWNhdG9yU3R5bGUsIHNldEluZGljYXRvclN0eWxlXSA9IHVzZVN0YXRlPFJlYWN0LkNTU1Byb3BlcnRpZXM+KFxuICAgICAge31cbiAgICApXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJYgdmFsdWUgc3RhdGVcbiAgICAgKiAxLiDkvJjlhYjliKTmlq0gUHJvcCB2YWx1Ze+8jOWmguaenOWtmOWcqCBQcm9wIHZhbHVl77yM5YiZIFRhYnMg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI77ybXG4gICAgICogMi4g5YaN5Yik5patIFByb3AgZGVmYXVsdFZhbHVl77yM5aaC5p6c5a2Y5Zyo6buY6K6k5YC877yM5YiZIFRhYnMg54q25oCB5Li65q2k6buY6K6k5YC877ybXG4gICAgICogMy4g5aaC5p6c6YO95rKh5pyJ77yM5YiZ5Y+WIFRhYiBjaGlsZHJlbiDnrKwgMCDpobnnmoQgdmFsdWXvvIzlsIbnrKwgMCDpobnorr7nva7kuLrlvZPliY3pobnjgIJcbiAgICAgKlxuICAgICAqIOS7peS4iuS4ieS4quWIpOaWreWPr+iDveWtmOWcqOWGsueqge+8jOaJgOS7peWcqOatpOivtOaYjuadoeS7tuWIpOaWreeahOS8mOWFiOe6p+OAglxuICAgICAqL1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgbGV0IHZhbFxuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWwgPSB2YWx1ZVByb3BcbiAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbCA9IGRlZmF1bHRWYWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbFxuICAgIH0pXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdmFsdWVQcm9wKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZVByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgdGFic1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IHVwZGF0ZUluZGljYXRvclN0eWxlID0gKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0YWJzUmVmICYmIHRhYnNSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHRoZUFjdGl2ZVRhYiA9IHRhYnNSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSdcbiAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgaWYgKHRoZUFjdGl2ZVRhYikge1xuICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgb2Zmc2V0TGVmdCB9ID0gdGhlQWN0aXZlVGFiXG4gICAgICAgICAgICBzZXRJbmRpY2F0b3JTdHlsZSh7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtNYXRoLmZsb29yKG9mZnNldExlZnQpfXB4KWAsXG4gICAgICAgICAgICAgIHdpZHRoOiBjbGllbnRXaWR0aCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEluZGljYXRvclN0eWxlKHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIHVwZGF0ZUluZGljYXRvclN0eWxlLFxuICAgICAgZ2V0RG9tTm9kZTogKCkgPT4gdGFic1JlZi5jdXJyZW50LFxuICAgIH0pKVxuXG4gICAgY29uc3QgaGFuZGxlVGFic1ZhbHVlQ2hhbmdlID0gKHZhbDogUmVhY3QuUmVhY3RUZXh0KSA9PiB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZhbHVlKHZhbClcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUluZGljYXRvclN0eWxlKClcbiAgICB9LCBbdmFsdWVdKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgIGAke3ByZWZpeH0tJHtnZXRDb21wdXRlZFNpemUoc2l6ZSwgc2l6ZUNvbnRleHQpfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWJhbm5lcmBdOiBiYW5uZXIsXG4gICAgICAgIFtgJHtwcmVmaXh9LWJhc2VfZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJzQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17eyBkaXNhYmxlZCwgZ3V0dGVyLCBoYW5kbGVUYWJzVmFsdWVDaGFuZ2UsIHZhbHVlIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgIGRhdGEtdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHJlZj17dGFic1JlZn1cbiAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWluZGljYXRvcmB9IHN0eWxlPXtpbmRpY2F0b3JTdHlsZX0gLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UYWJzQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cbilcblxuVGFicy5UYWIgPSBUYWJcblxuVGFicy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbpgJrmoI/liIbphY3lrr3luqbvvIhmbGV4OiAxO++8iVxuICAgKi9cbiAgYmFubmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOm7mOiupOeahOW3sumAieS4remhuVxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIHRhYiDnmoTpl7Tot50gbWFyZ2luXG4gICAqL1xuICBndXR0ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiDlgLzlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog5bey6YCJ5Lit6aG5XG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufVxuXG5UYWJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFubmVyOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBndXR0ZXI6IHVuZGVmaW5lZCxcbiAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHZhbHVlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iXX0=