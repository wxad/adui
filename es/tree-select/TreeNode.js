function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import * as React from "react";
import { TreeNode as Node } from "rc-tree-select";
import PropTypes from "prop-types";
import Popover from "../popover";

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
        }, title), React.createElement(Popover, _extends({
          key: 1,
          popup: popover,
          placement: "right"
        }, popoverProps), React.createElement("div", {
          className: "adui-tree-select-pop-trigger-placeholder"
        }))];
      }

      return React.createElement(Node, _extends({
        title: title,
        value: value
      }, otherProps), children);
    }
  }]);

  return TreeNode;
}(React.Component);

TreeNode.isTreeNode = 1;
TreeNode.propTypes = {
  checkable: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  popover: PropTypes.node,
  popoverProps: PropTypes.object,
  title: PropTypes.node,
  value: PropTypes.string
};
TreeNode.defaultProps = {
  checkable: true,
  children: null,
  disabled: false,
  popover: null,
  popoverProps: {},
  title: null,
  value: null
};
export { TreeNode as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZU5vZGUudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiVHJlZU5vZGUiLCJOb2RlIiwiUHJvcFR5cGVzIiwiUG9wb3ZlciIsInByb3BzIiwiY2hpbGRyZW4iLCJwb3BvdmVyIiwicG9wb3ZlclByb3BzIiwidGl0bGVQcm9wIiwidGl0bGUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJDb21wb25lbnQiLCJpc1RyZWVOb2RlIiwicHJvcFR5cGVzIiwiY2hlY2thYmxlIiwiYm9vbCIsIm5vZGUiLCJkaXNhYmxlZCIsIm9iamVjdCIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLFNBQVNDLFFBQVEsSUFBSUMsSUFBckIsUUFBaUMsZ0JBQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE9BQVAsTUFBdUMsWUFBdkM7O0lBaUJxQkgsUTs7Ozs7Ozs7Ozs7Ozs2QkE2Q0g7QUFBQSx3QkFRVixLQUFLSSxLQVJLO0FBQUEsVUFFWkMsUUFGWSxlQUVaQSxRQUZZO0FBQUEsVUFHWkMsT0FIWSxlQUdaQSxPQUhZO0FBQUEsVUFJWkMsWUFKWSxlQUlaQSxZQUpZO0FBQUEsVUFLTEMsU0FMSyxlQUtaQyxLQUxZO0FBQUEsVUFNWkMsS0FOWSxlQU1aQSxLQU5ZO0FBQUEsVUFPVEMsVUFQUzs7QUFTZCxVQUFJRixLQUFLLEdBQUdELFNBQVo7O0FBQ0EsVUFBSUUsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsZUFBTyxpQ0FBTUYsU0FBTixDQUFQO0FBQ0Q7O0FBQ0QsVUFBSUYsT0FBSixFQUFhO0FBQ1hHLFFBQUFBLEtBQUssR0FBRyxDQUNOO0FBQUssVUFBQSxHQUFHLEVBQUUsQ0FBVjtBQUFhLFVBQUEsU0FBUyxFQUFDO0FBQXZCLFdBQ0dBLEtBREgsQ0FETSxFQUlOLG9CQUFDLE9BQUQ7QUFBUyxVQUFBLEdBQUcsRUFBRSxDQUFkO0FBQWlCLFVBQUEsS0FBSyxFQUFFSCxPQUF4QjtBQUFpQyxVQUFBLFNBQVMsRUFBQztBQUEzQyxXQUF1REMsWUFBdkQsR0FDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsVUFERixDQUpNLENBQVI7QUFRRDs7QUFFRCxhQUNFLG9CQUFDLElBQUQ7QUFBTSxRQUFBLEtBQUssRUFBRUUsS0FBYjtBQUFvQixRQUFBLEtBQUssRUFBRUM7QUFBM0IsU0FBc0NDLFVBQXRDLEdBQ0dOLFFBREgsQ0FERjtBQUtEOzs7O0VBMUVtQ04sS0FBSyxDQUFDYSxTOztBQUF2QlosUSxDQUVMYSxVLEdBQWEsQztBQUZSYixRLENBSUxjLFMsR0FBWTtBQUl4QkMsRUFBQUEsU0FBUyxFQUFFYixTQUFTLENBQUNjLElBSkc7QUFReEJYLEVBQUFBLFFBQVEsRUFBRUgsU0FBUyxDQUFDZSxJQVJJO0FBWXhCQyxFQUFBQSxRQUFRLEVBQUVoQixTQUFTLENBQUNjLElBWkk7QUFnQnhCVixFQUFBQSxPQUFPLEVBQUVKLFNBQVMsQ0FBQ2UsSUFoQks7QUFvQnhCVixFQUFBQSxZQUFZLEVBQUVMLFNBQVMsQ0FBQ2lCLE1BcEJBO0FBd0J4QlYsRUFBQUEsS0FBSyxFQUFFUCxTQUFTLENBQUNlLElBeEJPO0FBNEJ4QlAsRUFBQUEsS0FBSyxFQUFFUixTQUFTLENBQUNrQjtBQTVCTyxDO0FBSlBwQixRLENBbUNMcUIsWSxHQUErQjtBQUMzQ04sRUFBQUEsU0FBUyxFQUFFLElBRGdDO0FBRTNDVixFQUFBQSxRQUFRLEVBQUUsSUFGaUM7QUFHM0NhLEVBQUFBLFFBQVEsRUFBRSxLQUhpQztBQUkzQ1osRUFBQUEsT0FBTyxFQUFFLElBSmtDO0FBSzNDQyxFQUFBQSxZQUFZLEVBQUUsRUFMNkI7QUFNM0NFLEVBQUFBLEtBQUssRUFBRSxJQU5vQztBQU8zQ0MsRUFBQUEsS0FBSyxFQUFFO0FBUG9DLEM7U0FuQzFCVixRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBhZHVpMS4w77yaIFRyZWVOb2RlIOS4jeWGjeWunumZheS9v+eUqO+8jOWcqCBUcmVlU2VsZWN0IOS4reS8mui/m+ihjCBjaGlsZHJlbiDpgY3ljoYgY29udmVydENoaWxkcmVuVG9EYXRhXG4gKiDmlofku7bmmoLml7bkv53lrZjmmK/lm6AgU2l0ZSDpnIDnlJ/miJAgQVBJIOihqOagvOOAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVHJlZU5vZGUgYXMgTm9kZSB9IGZyb20gXCJyYy10cmVlLXNlbGVjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5cbi8qKlxuICog5qCR5b2i6YCJ5oup6IqC54K5XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjaGVja2FibGU/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBwb3BvdmVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdmFsdWU/OiBzdHJpbmcgfCBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUcmVlTm9kZVByb3BzPiB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJlZS9ibG9iL21hc3Rlci9zcmMvdXRpbC50c3gjTDM5LUw0MVxuICBwdWJsaWMgc3RhdGljIGlzVHJlZU5vZGUgPSAxXG5cbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog6IqC54K55piv5ZCm5Y+v5Yu+6YCJ77yM6YCa5bi455So5LqO54i26IqC54K55LiN5Y+v5Yu+6YCJ77yM6ICM5a2Q6IqC54K55Y+v5Lul55qE5oOF5Ya1XG4gICAgICovXG4gICAgY2hlY2thYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5piv5ZCm56aB55SoXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWinuWKoCBwb3BvdmVyXG4gICAgICovXG4gICAgcG9wb3ZlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogcG9wb3ZlciBwcm9wc++8jOivpeWvueixoeS8muS8oOmAkue7mSA8UG9wb3ZlciAvPlxuICAgICAqL1xuICAgIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmoJHoioLngrnmmL7npLrnmoTlhoXlrrlcbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6buY6K6k5qC55o2u5q2k5bGe5oCn5YC86L+b6KGM562b6YCJXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRyZWVOb2RlUHJvcHMgPSB7XG4gICAgY2hlY2thYmxlOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBwb3BvdmVyOiBudWxsLFxuICAgIHBvcG92ZXJQcm9wczoge30sXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcG9wb3ZlcixcbiAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgIHRpdGxlOiB0aXRsZVByb3AsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCB0aXRsZSA9IHRpdGxlUHJvcFxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDxkaXY+e3RpdGxlUHJvcH08L2Rpdj5cbiAgICB9XG4gICAgaWYgKHBvcG92ZXIpIHtcbiAgICAgIHRpdGxlID0gW1xuICAgICAgICA8ZGl2IGtleT17MH0gY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlclwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9kaXY+LFxuICAgICAgICA8UG9wb3ZlciBrZXk9ezF9IHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlclwiIC8+XG4gICAgICAgIDwvUG9wb3Zlcj4sXG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxOb2RlIHRpdGxlPXt0aXRsZX0gdmFsdWU9e3ZhbHVlfSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTm9kZT5cbiAgICApXG4gIH1cbn1cbiJdfQ==