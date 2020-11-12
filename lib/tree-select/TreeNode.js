"use strict";

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZU5vZGUudHN4Il0sIm5hbWVzIjpbIlRyZWVOb2RlIiwicHJvcHMiLCJjaGlsZHJlbiIsInBvcG92ZXIiLCJwb3BvdmVyUHJvcHMiLCJ0aXRsZVByb3AiLCJ0aXRsZSIsInZhbHVlIiwib3RoZXJQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiaXNUcmVlTm9kZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJkaXNhYmxlZCIsImJvb2wiLCJvYmplY3QiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQnFCQSxROzs7Ozs7Ozs7Ozs7OzZCQXdDSDtBQUFBLHdCQVFWLEtBQUtDLEtBUks7QUFBQSxVQUVaQyxRQUZZLGVBRVpBLFFBRlk7QUFBQSxVQUdaQyxPQUhZLGVBR1pBLE9BSFk7QUFBQSxVQUlaQyxZQUpZLGVBSVpBLFlBSlk7QUFBQSxVQUtMQyxTQUxLLGVBS1pDLEtBTFk7QUFBQSxVQU1aQyxLQU5ZLGVBTVpBLEtBTlk7QUFBQSxVQU9UQyxVQVBTOztBQVNkLFVBQUlGLEtBQUssR0FBR0QsU0FBWjs7QUFDQSxVQUFJRSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixlQUFPLGlDQUFNRixTQUFOLENBQVA7QUFDRDs7QUFDRCxVQUFJRixPQUFKLEVBQWE7QUFDWEcsUUFBQUEsS0FBSyxHQUFHLENBQ047QUFBSyxVQUFBLEdBQUcsRUFBRSxDQUFWO0FBQWEsVUFBQSxTQUFTLEVBQUM7QUFBdkIsV0FDR0EsS0FESCxDQURNLEVBSU4sb0JBQUMsbUJBQUQ7QUFBUyxVQUFBLEdBQUcsRUFBRSxDQUFkO0FBQWlCLFVBQUEsS0FBSyxFQUFFSCxPQUF4QjtBQUFpQyxVQUFBLFNBQVMsRUFBQztBQUEzQyxXQUF1REMsWUFBdkQsR0FDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsVUFERixDQUpNLENBQVI7QUFRRDs7QUFFRCxhQUNFLG9CQUFDLHNCQUFEO0FBQU0sUUFBQSxLQUFLLEVBQUVFLEtBQWI7QUFBb0IsUUFBQSxLQUFLLEVBQUVDO0FBQTNCLFNBQXNDQyxVQUF0QyxHQUNHTixRQURILENBREY7QUFLRDs7OztFQXJFbUNPLEtBQUssQ0FBQ0MsUzs7O0FBQXZCVixRLENBRUxXLFUsR0FBYSxDO0FBRlJYLFEsQ0FJTFksUyxHQUFZO0FBSXhCVixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVQyxJQUpJO0FBUXhCQyxFQUFBQSxRQUFRLEVBQUVGLHNCQUFVRyxJQVJJO0FBWXhCYixFQUFBQSxPQUFPLEVBQUVVLHNCQUFVQyxJQVpLO0FBZ0J4QlYsRUFBQUEsWUFBWSxFQUFFUyxzQkFBVUksTUFoQkE7QUFvQnhCWCxFQUFBQSxLQUFLLEVBQUVPLHNCQUFVQyxJQXBCTztBQXdCeEJQLEVBQUFBLEtBQUssRUFBRU0sc0JBQVVLO0FBeEJPLEM7QUFKUGxCLFEsQ0ErQkxtQixZLEdBQStCO0FBQzNDakIsRUFBQUEsUUFBUSxFQUFFLElBRGlDO0FBRTNDYSxFQUFBQSxRQUFRLEVBQUUsS0FGaUM7QUFHM0NaLEVBQUFBLE9BQU8sRUFBRSxJQUhrQztBQUkzQ0MsRUFBQUEsWUFBWSxFQUFFLEVBSjZCO0FBSzNDRSxFQUFBQSxLQUFLLEVBQUUsSUFMb0M7QUFNM0NDLEVBQUFBLEtBQUssRUFBRTtBQU5vQyxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBhZHVpMS4w77yaIFRyZWVOb2RlIOS4jeWGjeWunumZheS9v+eUqO+8jOWcqCBUcmVlU2VsZWN0IOS4reS8mui/m+ihjCBjaGlsZHJlbiDpgY3ljoYgY29udmVydENoaWxkcmVuVG9EYXRhXG4gKiDmlofku7bmmoLml7bkv53lrZjmmK/lm6AgU2l0ZSDpnIDnlJ/miJAgQVBJIOihqOagvOOAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVHJlZU5vZGUgYXMgTm9kZSB9IGZyb20gXCJyYy10cmVlLXNlbGVjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5cbi8qKlxuICog5qCR5b2i6YCJ5oup6IqC54K5XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgcG9wb3Zlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVHJlZU5vZGVQcm9wcz4ge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyZWUvYmxvYi9tYXN0ZXIvc3JjL3V0aWwudHN4I0wzOS1MNDFcbiAgcHVibGljIHN0YXRpYyBpc1RyZWVOb2RlID0gMVxuXG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbnpoHnlKhcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5aKe5YqgIHBvcG92ZXJcbiAgICAgKi9cbiAgICBwb3BvdmVyOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiBwb3BvdmVyIHByb3Bz77yM6K+l5a+56LGh5Lya5Lyg6YCS57uZIDxQb3BvdmVyIC8+XG4gICAgICovXG4gICAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOagkeiKgueCueaYvuekuueahOWGheWuuVxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpu5jorqTmoLnmja7mraTlsZ7mgKflgLzov5vooYznrZvpgIlcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVHJlZU5vZGVQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgcG9wb3ZlcjogbnVsbCxcbiAgICBwb3BvdmVyUHJvcHM6IHt9LFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHBvcG92ZXIsXG4gICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICB0aXRsZTogdGl0bGVQcm9wLFxuICAgICAgdmFsdWUsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgdGl0bGUgPSB0aXRsZVByb3BcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiA8ZGl2Pnt0aXRsZVByb3B9PC9kaXY+XG4gICAgfVxuICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICB0aXRsZSA9IFtcbiAgICAgICAgPGRpdiBrZXk9ezB9IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvZGl2PixcbiAgICAgICAgPFBvcG92ZXIga2V5PXsxfSBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICA8L1BvcG92ZXI+LFxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Tm9kZSB0aXRsZT17dGl0bGV9IHZhbHVlPXt2YWx1ZX0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L05vZGU+XG4gICAgKVxuICB9XG59XG4iXX0=