"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcTreeSelect = require("rc-tree-select");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _popover = _interopRequireDefault(require("../popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TreeNode = function (_React$Component) {
  _inherits(TreeNode, _React$Component);

  var _super = _createSuper(TreeNode);

  function TreeNode() {
    _classCallCheck(this, TreeNode);

    return _super.apply(this, arguments);
  }

  _createClass(TreeNode, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          popover = _this$props.popover,
          popoverProps = _this$props.popoverProps,
          titleProp = _this$props.title,
          value = _this$props.value,
          otherProps = _objectWithoutProperties(_this$props, ["children", "popover", "popoverProps", "title", "value"]);

      var title = titleProp;

      if (value === null) {
        return React.createElement("div", null, titleProp);
      }

      if (popover) {
        title = [React.createElement("div", {
          key: 0,
          className: "adui-tree-select-pop-trigger"
        }, title), React.createElement(_popover["default"], _extends({
          key: 1,
          popup: popover,
          placement: "right"
        }, popoverProps), React.createElement("div", {
          className: "adui-tree-select-pop-trigger-placeholder"
        }))];
      }

      return React.createElement(_rcTreeSelect.TreeNode, _extends({
        title: title,
        value: value
      }, otherProps), children);
    }
  }]);

  return TreeNode;
}(React.Component);

exports["default"] = TreeNode;
TreeNode.isTreeNode = 1;
TreeNode.propTypes = {
  children: _propTypes["default"].node,
  disabled: _propTypes["default"].bool,
  popover: _propTypes["default"].node,
  popoverProps: _propTypes["default"].object,
  title: _propTypes["default"].node,
  value: _propTypes["default"].string
};
TreeNode.defaultProps = {
  children: null,
  disabled: false,
  popover: null,
  popoverProps: {},
  title: null,
  value: null
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZU5vZGUudHN4Il0sIm5hbWVzIjpbIlRyZWVOb2RlIiwicHJvcHMiLCJjaGlsZHJlbiIsInBvcG92ZXIiLCJwb3BvdmVyUHJvcHMiLCJ0aXRsZVByb3AiLCJ0aXRsZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiaXNUcmVlTm9kZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJkaXNhYmxlZCIsImJvb2wiLCJvYmplY3QiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JxQkEsUTs7Ozs7Ozs7Ozs7Ozs2QkF3Q0g7QUFBQSx3QkFRVixLQUFLQyxLQVJLO0FBQUEsVUFFWkMsUUFGWSxlQUVaQSxRQUZZO0FBQUEsVUFHWkMsT0FIWSxlQUdaQSxPQUhZO0FBQUEsVUFJWkMsWUFKWSxlQUlaQSxZQUpZO0FBQUEsVUFLTEMsU0FMSyxlQUtaQyxLQUxZO0FBQUEsVUFNWkMsS0FOWSxlQU1aQSxLQU5ZO0FBQUEsVUFPVEMsVUFQUzs7QUFTZCxVQUFJRixLQUFLLEdBQUdELFNBQVo7O0FBQ0EsVUFBSUUsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsZUFBTyxpQ0FBTUYsU0FBTixDQUFQO0FBQ0Q7O0FBQ0QsVUFBSUYsT0FBSixFQUFhO0FBQ1hHLFFBQUFBLEtBQUssR0FBRyxDQUNOO0FBQUssVUFBQSxHQUFHLEVBQUUsQ0FBVjtBQUFhLFVBQUEsU0FBUyxFQUFDO0FBQXZCLFdBQ0dBLEtBREgsQ0FETSxFQUlOLG9CQUFDLG1CQUFEO0FBQVMsVUFBQSxHQUFHLEVBQUUsQ0FBZDtBQUFpQixVQUFBLEtBQUssRUFBRUgsT0FBeEI7QUFBaUMsVUFBQSxTQUFTLEVBQUM7QUFBM0MsV0FBdURDLFlBQXZELEdBQ0U7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLFVBREYsQ0FKTSxDQUFSO0FBUUQ7O0FBRUQsYUFDRSxvQkFBQyxzQkFBRDtBQUFNLFFBQUEsS0FBSyxFQUFFRSxLQUFiO0FBQW9CLFFBQUEsS0FBSyxFQUFFQztBQUEzQixTQUFzQ0MsVUFBdEMsR0FDR04sUUFESCxDQURGO0FBS0Q7Ozs7RUFyRW1DTyxLQUFLLENBQUNDLFM7OztBQUF2QlYsUSxDQUVMVyxVLEdBQWEsQztBQUZSWCxRLENBSUxZLFMsR0FBWTtBQUl4QlYsRUFBQUEsUUFBUSxFQUFFVyxzQkFBVUMsSUFKSTtBQVF4QkMsRUFBQUEsUUFBUSxFQUFFRixzQkFBVUcsSUFSSTtBQVl4QmIsRUFBQUEsT0FBTyxFQUFFVSxzQkFBVUMsSUFaSztBQWdCeEJWLEVBQUFBLFlBQVksRUFBRVMsc0JBQVVJLE1BaEJBO0FBb0J4QlgsRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUMsSUFwQk87QUF3QnhCUCxFQUFBQSxLQUFLLEVBQUVNLHNCQUFVSztBQXhCTyxDO0FBSlBsQixRLENBK0JMbUIsWSxHQUErQjtBQUMzQ2pCLEVBQUFBLFFBQVEsRUFBRSxJQURpQztBQUUzQ2EsRUFBQUEsUUFBUSxFQUFFLEtBRmlDO0FBRzNDWixFQUFBQSxPQUFPLEVBQUUsSUFIa0M7QUFJM0NDLEVBQUFBLFlBQVksRUFBRSxFQUo2QjtBQUszQ0UsRUFBQUEsS0FBSyxFQUFFLElBTG9DO0FBTTNDQyxFQUFBQSxLQUFLLEVBQUU7QUFOb0MsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYWR1aTEuMO+8miBUcmVlTm9kZSDkuI3lho3lrp7pmYXkvb/nlKjvvIzlnKggVHJlZVNlbGVjdCDkuK3kvJrov5vooYwgY2hpbGRyZW4g6YGN5Y6GIGNvbnZlcnRDaGlsZHJlblRvRGF0YVxuICog5paH5Lu25pqC5pe25L+d5a2Y5piv5ZugIFNpdGUg6ZyA55Sf5oiQIEFQSSDooajmoLzjgIJcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRyZWVOb2RlIGFzIE5vZGUgfSBmcm9tIFwicmMtdHJlZS1zZWxlY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuXG4vKipcbiAqIOagkeW9oumAieaLqeiKgueCuVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIHBvcG92ZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxuICB2YWx1ZT86IHN0cmluZyB8IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRyZWVOb2RlUHJvcHM+IHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmVlL2Jsb2IvbWFzdGVyL3NyYy91dGlsLnRzeCNMMzktTDQxXG4gIHB1YmxpYyBzdGF0aWMgaXNUcmVlTm9kZSA9IDFcblxuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5piv5ZCm56aB55SoXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWinuWKoCBwb3BvdmVyXG4gICAgICovXG4gICAgcG9wb3ZlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogcG9wb3ZlciBwcm9wc++8jOivpeWvueixoeS8muS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgICAqL1xuICAgIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmoJHoioLngrnmmL7npLrnmoTlhoXlrrlcbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6buY6K6k5qC55o2u5q2k5bGe5oCn5YC86L+b6KGM562b6YCJXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRyZWVOb2RlUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHBvcG92ZXI6IG51bGwsXG4gICAgcG9wb3ZlclByb3BzOiB7fSxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBwb3BvdmVyLFxuICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgdGl0bGU6IHRpdGxlUHJvcCxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IHRpdGxlID0gdGl0bGVQcm9wXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gPGRpdj57dGl0bGVQcm9wfTwvZGl2PlxuICAgIH1cbiAgICBpZiAocG9wb3Zlcikge1xuICAgICAgdGl0bGUgPSBbXG4gICAgICAgIDxkaXYga2V5PXswfSBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXBvcC10cmlnZ2VyXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2Rpdj4sXG4gICAgICAgIDxQb3BvdmVyIGtleT17MX0gcG9wdXA9e3BvcG92ZXJ9IHBsYWNlbWVudD1cInJpZ2h0XCIgey4uLnBvcG92ZXJQcm9wc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXBvcC10cmlnZ2VyLXBsYWNlaG9sZGVyXCIgLz5cbiAgICAgICAgPC9Qb3BvdmVyPixcbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE5vZGUgdGl0bGU9e3RpdGxlfSB2YWx1ZT17dmFsdWV9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Ob2RlPlxuICAgIClcbiAgfVxufVxuIl19