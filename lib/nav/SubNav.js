"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _Context = require("./Context");

var _motion = _interopRequireDefault(require("../motion"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-nav";

var SubNav = function SubNav(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      index = _ref.index,
      title = _ref.title,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "icon", "index", "title"]);

  var _useContext = (0, _react.useContext)(_Context.NavContext),
      openIndexes = _useContext.openIndexes,
      onOpenChange = _useContext.onOpenChange;

  var open = (openIndexes || []).includes(index);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-sub"), _defineProperty({}, "".concat(prefix, "-open"), open));
  return _react["default"].createElement("div", _extends({
    className: classSet
  }, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-subTitle"),
    onClick: function onClick() {
      if (onOpenChange) {
        onOpenChange(index);
      }
    },
    role: "none"
  }, icon && _react["default"].createElement(_icon["default"], {
    icon: icon,
    className: "".concat(prefix, "-icon")
  }), _react["default"].createElement("div", {
    className: "".concat(prefix, "-subTitleContent")
  }, title), _react["default"].createElement(_icon["default"], {
    icon: "arrow-up",
    className: "".concat(prefix, "-arrow")
  })), _react["default"].createElement(_motion["default"], {
    transition: "slide",
    component: "div"
  }, open && _react["default"].createElement("div", null, children)));
};

SubNav.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  icon: _propTypes["default"].any,
  index: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  title: _propTypes["default"].node
};
SubNav.defaultProps = {
  children: null,
  className: undefined,
  icon: undefined,
  title: null
};
var _default = SubNav;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1N1Yk5hdi50c3giXSwibmFtZXMiOlsicHJlZml4IiwiU3ViTmF2IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpY29uIiwiaW5kZXgiLCJ0aXRsZSIsIm90aGVyUHJvcHMiLCJOYXZDb250ZXh0Iiwib3BlbkluZGV4ZXMiLCJvbk9wZW5DaGFuZ2UiLCJvcGVuIiwiaW5jbHVkZXMiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJhbnkiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxVQUFmOztBQTZCQSxJQUFNQyxNQUE2QyxHQUFHLFNBQWhEQSxNQUFnRCxPQU9sQztBQUFBLE1BTmxCQyxRQU1rQixRQU5sQkEsUUFNa0I7QUFBQSxNQUxsQkMsU0FLa0IsUUFMbEJBLFNBS2tCO0FBQUEsTUFKbEJDLElBSWtCLFFBSmxCQSxJQUlrQjtBQUFBLE1BSGxCQyxLQUdrQixRQUhsQkEsS0FHa0I7QUFBQSxNQUZsQkMsS0FFa0IsUUFGbEJBLEtBRWtCO0FBQUEsTUFEZkMsVUFDZTs7QUFBQSxvQkFDb0IsdUJBQVdDLG1CQUFYLENBRHBCO0FBQUEsTUFDVkMsV0FEVSxlQUNWQSxXQURVO0FBQUEsTUFDR0MsWUFESCxlQUNHQSxZQURIOztBQUdsQixNQUFNQyxJQUFJLEdBQUcsQ0FBQ0YsV0FBVyxJQUFJLEVBQWhCLEVBQW9CRyxRQUFwQixDQUE2QlAsS0FBN0IsQ0FBYjtBQUVBLE1BQU1RLFFBQVEsR0FBRyw0QkFBV1YsU0FBWCxZQUF5QkgsTUFBekIseUNBQ1hBLE1BRFcsWUFDS1csSUFETCxFQUFqQjtBQUlBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUU7QUFBaEIsS0FBOEJOLFVBQTlCLEdBQ0U7QUFDRSxJQUFBLFNBQVMsWUFBS1AsTUFBTCxjQURYO0FBRUUsSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixVQUFJVSxZQUFKLEVBQWtCO0FBQ2hCQSxRQUFBQSxZQUFZLENBQUNMLEtBQUQsQ0FBWjtBQUNEO0FBQ0YsS0FOSDtBQU9FLElBQUEsSUFBSSxFQUFDO0FBUFAsS0FTR0QsSUFBSSxJQUFJLGdDQUFDLGdCQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUVBLElBQVo7QUFBa0IsSUFBQSxTQUFTLFlBQUtKLE1BQUw7QUFBM0IsSUFUWCxFQVVFO0FBQUssSUFBQSxTQUFTLFlBQUtBLE1BQUw7QUFBZCxLQUE4Q00sS0FBOUMsQ0FWRixFQVdFLGdDQUFDLGdCQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUMsVUFBWDtBQUFzQixJQUFBLFNBQVMsWUFBS04sTUFBTDtBQUEvQixJQVhGLENBREYsRUFjRSxnQ0FBQyxrQkFBRDtBQUFRLElBQUEsVUFBVSxFQUFDLE9BQW5CO0FBQTJCLElBQUEsU0FBUyxFQUFDO0FBQXJDLEtBQ0dXLElBQUksSUFBSSw2Q0FBTVQsUUFBTixDQURYLENBZEYsQ0FERjtBQW9CRCxDQXBDRDs7QUFzQ0FELE1BQU0sQ0FBQ2EsU0FBUCxHQUFtQjtBQUlqQlosRUFBQUEsUUFBUSxFQUFFYSxzQkFBVUMsSUFKSDtBQVFqQmIsRUFBQUEsU0FBUyxFQUFFWSxzQkFBVUUsTUFSSjtBQVlqQmIsRUFBQUEsSUFBSSxFQUFFVyxzQkFBVUcsR0FaQztBQWdCakJiLEVBQUFBLEtBQUssRUFBRVUsc0JBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSyxNQUE3QixDQUFwQixFQUEwREMsVUFoQmhEO0FBb0JqQmYsRUFBQUEsS0FBSyxFQUFFUyxzQkFBVUM7QUFwQkEsQ0FBbkI7QUF1QkFmLE1BQU0sQ0FBQ3FCLFlBQVAsR0FBc0I7QUFDcEJwQixFQUFBQSxRQUFRLEVBQUUsSUFEVTtBQUVwQkMsRUFBQUEsU0FBUyxFQUFFb0IsU0FGUztBQUdwQm5CLEVBQUFBLElBQUksRUFBRW1CLFNBSGM7QUFJcEJqQixFQUFBQSxLQUFLLEVBQUU7QUFKYSxDQUF0QjtlQU9lTCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgTW90aW9uIGZyb20gXCIuLi9tb3Rpb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1uYXZcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWJOYXZQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruWbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUmVhY3QuUmVhY3RUZXh0XG4gIC8qKlxuICAgKiBzdWJuYXYg5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOWvvOiIquagjyAtIOWtkOWvvOiIqlxuICovXG5jb25zdCBTdWJOYXY6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElTdWJOYXZQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBpY29uLFxuICBpbmRleCxcbiAgdGl0bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElTdWJOYXZQcm9wcykgPT4ge1xuICBjb25zdCB7IG9wZW5JbmRleGVzLCBvbk9wZW5DaGFuZ2UgfSA9IHVzZUNvbnRleHQoTmF2Q29udGV4dClcblxuICBjb25zdCBvcGVuID0gKG9wZW5JbmRleGVzIHx8IFtdKS5pbmNsdWRlcyhpbmRleClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LXN1YmAsIHtcbiAgICBbYCR7cHJlZml4fS1vcGVuYF06IG9wZW4sXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXN1YlRpdGxlYH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChvbk9wZW5DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uT3BlbkNoYW5nZShpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgID5cbiAgICAgICAge2ljb24gJiYgPEljb24gaWNvbj17aWNvbn0gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfSAvPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3ViVGl0bGVDb250ZW50YH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8SWNvbiBpY29uPVwiYXJyb3ctdXBcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYXJyb3dgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TW90aW9uIHRyYW5zaXRpb249XCJzbGlkZVwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICB7b3BlbiAmJiA8ZGl2PntjaGlsZHJlbn08L2Rpdj59XG4gICAgICA8L01vdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TdWJOYXYucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruWbvuagh1xuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOeLrOeri+eahCBpbmRleCByZXF1aXJlZFxuICAgKi9cbiAgaW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogc3VibmF2IOagh+mimFxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5TdWJOYXYuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgdGl0bGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Yk5hdlxuIl19