"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-tabs";

var Tab = function Tab(_ref) {
  var _classNames;

  var className = _ref.className,
      disabledProp = _ref.disabled,
      onClick = _ref.onClick,
      style = _ref.style,
      title = _ref.title,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["className", "disabled", "onClick", "style", "title", "value"]);

  var _useContext = (0, _react.useContext)(_Context.TabsContext),
      disabledContext = _useContext.disabled,
      gutterContext = _useContext.gutter,
      handleTabsValueChange = _useContext.handleTabsValueChange,
      valueContext = _useContext.value;

  var disabled = disabledProp || disabledContext;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-tab"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-active"), value === valueContext), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _classNames));
  var additionStyle = {};

  if (gutterContext !== undefined) {
    additionStyle.marginRight = "".concat(gutterContext, "px");
  }

  var handleClick = function handleClick() {
    if (value !== undefined && !(disabled || disabledContext) && handleTabsValueChange) {
      handleTabsValueChange(value);
    }

    if (onClick) {
      onClick();
    }
  };

  return _react["default"].createElement("div", _extends({
    "aria-disabled": disabled,
    "aria-selected": value === valueContext,
    className: classSet,
    key: value,
    onClick: handleClick,
    onKeyDown: function onKeyDown(_ref2) {
      var keyCode = _ref2.keyCode;

      if (keyCode === 13) {
        handleClick();
      }
    },
    role: "tab",
    tabIndex: -1,
    style: _objectSpread({}, additionStyle, {}, style)
  }, otherProps), title);
};

Tab.propTypes = {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  style: _propTypes["default"].object,
  title: _propTypes["default"].node.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired
};
Tab.defaultProps = {
  className: undefined,
  disabled: false,
  onClick: function onClick() {},
  style: {}
};
var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy9UYWIudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIlRhYiIsImNsYXNzTmFtZSIsImRpc2FibGVkUHJvcCIsImRpc2FibGVkIiwib25DbGljayIsInN0eWxlIiwidGl0bGUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJUYWJzQ29udGV4dCIsImRpc2FibGVkQ29udGV4dCIsImd1dHRlckNvbnRleHQiLCJndXR0ZXIiLCJoYW5kbGVUYWJzVmFsdWVDaGFuZ2UiLCJ2YWx1ZUNvbnRleHQiLCJjbGFzc1NldCIsImFkZGl0aW9uU3R5bGUiLCJ1bmRlZmluZWQiLCJtYXJnaW5SaWdodCIsImhhbmRsZUNsaWNrIiwia2V5Q29kZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwib2JqZWN0Iiwibm9kZSIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQWlDQSxJQUFNQyxHQUF1QyxHQUFHLFNBQTFDQSxHQUEwQyxPQVEvQjtBQUFBOztBQUFBLE1BUGZDLFNBT2UsUUFQZkEsU0FPZTtBQUFBLE1BTkxDLFlBTUssUUFOZkMsUUFNZTtBQUFBLE1BTGZDLE9BS2UsUUFMZkEsT0FLZTtBQUFBLE1BSmZDLEtBSWUsUUFKZkEsS0FJZTtBQUFBLE1BSGZDLEtBR2UsUUFIZkEsS0FHZTtBQUFBLE1BRmZDLEtBRWUsUUFGZkEsS0FFZTtBQUFBLE1BRFpDLFVBQ1k7O0FBQUEsb0JBTVgsdUJBQVdDLG9CQUFYLENBTlc7QUFBQSxNQUVIQyxlQUZHLGVBRWJQLFFBRmE7QUFBQSxNQUdMUSxhQUhLLGVBR2JDLE1BSGE7QUFBQSxNQUliQyxxQkFKYSxlQUliQSxxQkFKYTtBQUFBLE1BS05DLFlBTE0sZUFLYlAsS0FMYTs7QUFRZixNQUFNSixRQUFRLEdBQUdELFlBQVksSUFBSVEsZUFBakM7QUFFQSxNQUFNSyxRQUFRLEdBQUcsNEJBQVdkLFNBQVgsWUFBeUJGLE1BQXpCLHFFQUNYQSxNQURXLGNBQ09RLEtBQUssS0FBS08sWUFEakIsMENBRVhmLE1BRlcsZ0JBRVNJLFFBRlQsZ0JBQWpCO0FBS0EsTUFBTWEsYUFBa0MsR0FBRyxFQUEzQzs7QUFDQSxNQUFJTCxhQUFhLEtBQUtNLFNBQXRCLEVBQWlDO0FBQy9CRCxJQUFBQSxhQUFhLENBQUNFLFdBQWQsYUFBK0JQLGFBQS9CO0FBQ0Q7O0FBRUQsTUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUNFWixLQUFLLEtBQUtVLFNBQVYsSUFDQSxFQUFFZCxRQUFRLElBQUlPLGVBQWQsQ0FEQSxJQUVBRyxxQkFIRixFQUlFO0FBQ0FBLE1BQUFBLHFCQUFxQixDQUFDTixLQUFELENBQXJCO0FBQ0Q7O0FBQ0QsUUFBSUgsT0FBSixFQUFhO0FBQ1hBLE1BQUFBLE9BQU87QUFDUjtBQUNGLEdBWEQ7O0FBYUEsU0FDRTtBQUNFLHFCQUFlRCxRQURqQjtBQUVFLHFCQUFlSSxLQUFLLEtBQUtPLFlBRjNCO0FBR0UsSUFBQSxTQUFTLEVBQUVDLFFBSGI7QUFJRSxJQUFBLEdBQUcsRUFBRVIsS0FKUDtBQUtFLElBQUEsT0FBTyxFQUFFWSxXQUxYO0FBTUUsSUFBQSxTQUFTLEVBQUUsMEJBQXNEO0FBQUEsVUFBbkRDLE9BQW1ELFNBQW5EQSxPQUFtRDs7QUFDL0QsVUFBSUEsT0FBTyxLQUFLLEVBQWhCLEVBQW9CO0FBQ2xCRCxRQUFBQSxXQUFXO0FBQ1o7QUFDRixLQVZIO0FBV0UsSUFBQSxJQUFJLEVBQUMsS0FYUDtBQVlFLElBQUEsUUFBUSxFQUFFLENBQUMsQ0FaYjtBQWFFLElBQUEsS0FBSyxvQkFDQUgsYUFEQSxNQUVBWCxLQUZBO0FBYlAsS0FpQk1HLFVBakJOLEdBbUJHRixLQW5CSCxDQURGO0FBdUJELENBaEVEOztBQWtFQU4sR0FBRyxDQUFDcUIsU0FBSixHQUFnQjtBQUlkcEIsRUFBQUEsU0FBUyxFQUFFcUIsc0JBQVVDLE1BSlA7QUFRZHBCLEVBQUFBLFFBQVEsRUFBRW1CLHNCQUFVRSxJQVJOO0FBWWRwQixFQUFBQSxPQUFPLEVBQUVrQixzQkFBVUcsSUFaTDtBQWdCZHBCLEVBQUFBLEtBQUssRUFBRWlCLHNCQUFVSSxNQWhCSDtBQW9CZHBCLEVBQUFBLEtBQUssRUFBRWdCLHNCQUFVSyxJQUFWLENBQWVDLFVBcEJSO0FBd0JkckIsRUFBQUEsS0FBSyxFQUFFZSxzQkFBVU8sU0FBVixDQUFvQixDQUFDUCxzQkFBVUMsTUFBWCxFQUFtQkQsc0JBQVVRLE1BQTdCLENBQXBCLEVBQTBERjtBQXhCbkQsQ0FBaEI7QUEyQkE1QixHQUFHLENBQUMrQixZQUFKLEdBQW1CO0FBQ2pCOUIsRUFBQUEsU0FBUyxFQUFFZ0IsU0FETTtBQUVqQmQsRUFBQUEsUUFBUSxFQUFFLEtBRk87QUFHakJDLEVBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBSEE7QUFJakJDLEVBQUFBLEtBQUssRUFBRTtBQUpVLENBQW5CO2VBT2VMLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IFRhYnNDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRhYnNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljaz86IChlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDmoIfnrb7mloflrZdcbiAgICovXG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIHZhbHVlXG4gICAqL1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dFxufVxuXG4vKipcbiAqIOWvvOiIqumhteetviAtIFRhYlxuICovXG5jb25zdCBUYWI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElUYWJQcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIGRpc2FibGVkOiBkaXNhYmxlZFByb3AsXG4gIG9uQ2xpY2ssXG4gIHN0eWxlLFxuICB0aXRsZSxcbiAgdmFsdWUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElUYWJQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkQ29udGV4dCxcbiAgICBndXR0ZXI6IGd1dHRlckNvbnRleHQsXG4gICAgaGFuZGxlVGFic1ZhbHVlQ2hhbmdlLFxuICAgIHZhbHVlOiB2YWx1ZUNvbnRleHQsXG4gIH0gPSB1c2VDb250ZXh0KFRhYnNDb250ZXh0KVxuXG4gIGNvbnN0IGRpc2FibGVkID0gZGlzYWJsZWRQcm9wIHx8IGRpc2FibGVkQ29udGV4dFxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tdGFiYCwge1xuICAgIFtgJHtwcmVmaXh9LWFjdGl2ZWBdOiB2YWx1ZSA9PT0gdmFsdWVDb250ZXh0LFxuICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICB9KVxuXG4gIGNvbnN0IGFkZGl0aW9uU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fVxuICBpZiAoZ3V0dGVyQ29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYWRkaXRpb25TdHlsZS5tYXJnaW5SaWdodCA9IGAke2d1dHRlckNvbnRleHR9cHhgXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAhKGRpc2FibGVkIHx8IGRpc2FibGVkQ29udGV4dCkgJiZcbiAgICAgIGhhbmRsZVRhYnNWYWx1ZUNoYW5nZVxuICAgICkge1xuICAgICAgaGFuZGxlVGFic1ZhbHVlQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljaygpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBhcmlhLWRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGFyaWEtc2VsZWN0ZWQ9e3ZhbHVlID09PSB2YWx1ZUNvbnRleHR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAga2V5PXt2YWx1ZX1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgb25LZXlEb3duPXsoeyBrZXlDb2RlIH06IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGlmIChrZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIGhhbmRsZUNsaWNrKClcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uYWRkaXRpb25TdHlsZSxcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICB9fVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAge3RpdGxlfVxuICAgIDwvZGl2PlxuICApXG59XG5cblRhYi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog54K55Ye75LqL5Lu255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOagh+etvuaWh+Wtl1xuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiB2YWx1ZVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxufVxuXG5UYWIuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgc3R5bGU6IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiJdfQ==