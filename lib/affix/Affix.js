"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

var _debounce = require("debounce");

var _omit = _interopRequireDefault(require("../_util/omit"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var prefix = "adui-affix";

var Affix = function (_React$Component) {
  _inherits(Affix, _React$Component);

  var _super = _createSuper(Affix);

  function Affix(_props) {
    var _this;

    _classCallCheck(this, Affix);

    _this = _super.call(this, _props);
    _this.fixedNode = void 0;
    _this.placeholderNode = void 0;
    _this.debouncedWindowResize = void 0;
    _this.scrollEventHandler = void 0;
    _this.windowResizeEventHandler = void 0;

    _this.componentDidMount = function () {
      var getTarget = _this.props.getTarget;
      var target = getTarget ? getTarget() : window;
      _this.scrollEventHandler = (0, _addEventListener["default"])(target, "scroll", _this.updatePosition);
      _this.windowResizeEventHandler = (0, _addEventListener["default"])(window, "resize", _this.debouncedWindowResize);

      _this.updatePosition();

      _this.syncPlaceholderStyle();
    };

    _this.componentWillUnmount = function () {
      if (_this.scrollEventHandler) {
        _this.scrollEventHandler.remove();
      }

      if (_this.windowResizeEventHandler) {
        _this.windowResizeEventHandler.remove();
      }

      if (_this.debouncedWindowResize) {
        _this.debouncedWindowResize.clear();
      }
    };

    _this.setAffixStyle = function (newAffixStyle) {
      var onChange = _this.props.onChange;
      var affixStyle = _this.state.affixStyle;

      if (!(0, _shallowequal["default"])(affixStyle, newAffixStyle)) {
        _this.setState({
          affixStyle: newAffixStyle
        });
      }

      if (!!affixStyle !== !!newAffixStyle && onChange) {
        onChange(!!newAffixStyle);
      }
    };

    _this.setPlaceholderStyle = function (newPlaceholderStyle) {
      var placeholderStyle = _this.state.placeholderStyle;

      if (!(0, _shallowequal["default"])(placeholderStyle, newPlaceholderStyle)) {
        _this.setState({
          placeholderStyle: newPlaceholderStyle
        });
      }
    };

    _this.updatePosition = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          fixedNode = _assertThisInitialize.fixedNode,
          placeholderNode = _assertThisInitialize.placeholderNode,
          props = _assertThisInitialize.props;

      var getContainer = props.getContainer,
          getTarget = props.getTarget,
          offsetBottom = props.offsetBottom,
          offsetTop = props.offsetTop;
      var target = getTarget ? getTarget() : window;

      if (target && placeholderNode && fixedNode) {
        var documentRect = document.body.getBoundingClientRect();
        var placeholderRect = placeholderNode.getBoundingClientRect();
        var fixedRect = fixedNode.getBoundingClientRect();
        var targetRect = getTarget ? getTarget().getBoundingClientRect() : documentRect;
        var documentRectLeft = documentRect.left;
        var placeholderRectLeft = placeholderRect.left;
        var targetTop = getTarget ? targetRect.top : 0;
        var targetHeight = getTarget ? targetRect.height : window.innerHeight;
        var affixStyle = {
          left: documentRectLeft + placeholderRectLeft,
          position: "fixed",
          width: fixedRect.width
        };

        var setStyle = function setStyle() {
          if (fixedRect.width) {
            _this.setPlaceholderStyle({
              height: fixedRect.height,
              width: fixedRect.width
            });
          }
        };

        if (offsetBottom !== null && offsetBottom !== undefined && !isNaN(offsetBottom)) {
          if (placeholderRect.bottom > targetHeight - offsetBottom) {
            if (getContainer && getContainer()) {
              var containerRect = getContainer().getBoundingClientRect();
              var bottom = targetHeight - containerRect.top - placeholderRect.height;

              if (bottom <= offsetBottom) {
                affixStyle.bottom = bottom + placeholderRect.height < 0 ? -placeholderRect.height : bottom;
              } else {
                affixStyle.bottom = offsetBottom;
              }
            } else {
              affixStyle.bottom = offsetBottom;
            }

            setStyle();

            _this.setAffixStyle(affixStyle);
          } else {
            _this.setAffixStyle(null);

            _this.setPlaceholderStyle(null);
          }
        } else if (placeholderRect.top < (offsetTop || 0) + targetTop) {
          if (getContainer && getContainer()) {
            var _containerRect = getContainer().getBoundingClientRect();

            var top = _containerRect.height + _containerRect.top - placeholderRect.height;

            if (offsetTop !== undefined && top <= offsetTop) {
              affixStyle.top = top + placeholderRect.height < 0 ? -placeholderRect.height : top;
            } else {
              affixStyle.top = targetTop + (offsetTop || 0);
            }
          } else {
            affixStyle.top = targetTop + (offsetTop || 0);
          }

          setStyle();

          _this.setAffixStyle(affixStyle);
        } else {
          _this.setAffixStyle(null);

          _this.setPlaceholderStyle(null);
        }
      }
    };

    _this.syncPlaceholderStyle = function () {
      _this.updatePosition();

      var affixStyle = _this.state.affixStyle;

      if (_this.placeholderNode && affixStyle) {
        var widthPrev = _this.placeholderNode.style.width;
        _this.placeholderNode.style.width = "";
        var width = _this.placeholderNode.offsetWidth;

        _this.setAffixStyle(_objectSpread(_objectSpread({}, affixStyle), {}, {
          width: width
        }));

        if (width) {
          _this.setPlaceholderStyle({
            width: width
          });
        } else {
          _this.placeholderNode.style.width = widthPrev;
        }
      }
    };

    _this.savePlaceholderNode = function (node) {
      _this.placeholderNode = node;
    };

    _this.saveFixedNode = function (node) {
      _this.fixedNode = node;
    };

    _this.state = {
      affixStyle: undefined,
      placeholderStyle: undefined
    };
    _this.debouncedWindowResize = (0, _debounce.debounce)(_this.syncPlaceholderStyle, 100, null);
    return _this;
  }

  _createClass(Affix, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ["children", "className", "style"]);

      var restProps = (0, _omit["default"])(otherProps, ["getContainer", "getTarget", "offsetBottom", "offsetTop", "onChange"]);
      var _this$state = this.state,
          affixStyle = _this$state.affixStyle,
          placeholderStyle = _this$state.placeholderStyle;
      var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"));
      return React.createElement("div", {
        ref: this.savePlaceholderNode,
        style: _objectSpread({}, placeholderStyle)
      }, React.createElement("div", _extends({
        className: classSet,
        ref: this.saveFixedNode,
        style: _objectSpread(_objectSpread({}, affixStyle), style)
      }, restProps), children));
    }
  }]);

  return Affix;
}(React.Component);

exports["default"] = Affix;
Affix.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  getContainer: _propTypes["default"].func,
  getTarget: _propTypes["default"].func,
  offsetBottom: _propTypes["default"].number,
  offsetTop: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  style: _propTypes["default"].object
};
Affix.defaultProps = {
  children: "",
  className: undefined,
  getContainer: null,
  getTarget: null,
  offsetBottom: null,
  offsetTop: 0,
  onChange: null,
  style: {}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWZmaXgvQWZmaXgudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkFmZml4IiwicHJvcHMiLCJmaXhlZE5vZGUiLCJwbGFjZWhvbGRlck5vZGUiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJzY3JvbGxFdmVudEhhbmRsZXIiLCJ3aW5kb3dSZXNpemVFdmVudEhhbmRsZXIiLCJjb21wb25lbnREaWRNb3VudCIsImdldFRhcmdldCIsInRhcmdldCIsIndpbmRvdyIsInVwZGF0ZVBvc2l0aW9uIiwic3luY1BsYWNlaG9sZGVyU3R5bGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZSIsImNsZWFyIiwic2V0QWZmaXhTdHlsZSIsIm5ld0FmZml4U3R5bGUiLCJvbkNoYW5nZSIsImFmZml4U3R5bGUiLCJzdGF0ZSIsInNldFN0YXRlIiwic2V0UGxhY2Vob2xkZXJTdHlsZSIsIm5ld1BsYWNlaG9sZGVyU3R5bGUiLCJwbGFjZWhvbGRlclN0eWxlIiwiZ2V0Q29udGFpbmVyIiwib2Zmc2V0Qm90dG9tIiwib2Zmc2V0VG9wIiwiZG9jdW1lbnRSZWN0IiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGxhY2Vob2xkZXJSZWN0IiwiZml4ZWRSZWN0IiwidGFyZ2V0UmVjdCIsImRvY3VtZW50UmVjdExlZnQiLCJsZWZ0IiwicGxhY2Vob2xkZXJSZWN0TGVmdCIsInRhcmdldFRvcCIsInRvcCIsInRhcmdldEhlaWdodCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ3aWR0aCIsInNldFN0eWxlIiwidW5kZWZpbmVkIiwiaXNOYU4iLCJib3R0b20iLCJjb250YWluZXJSZWN0Iiwid2lkdGhQcmV2Iiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsInNhdmVQbGFjZWhvbGRlck5vZGUiLCJub2RlIiwic2F2ZUZpeGVkTm9kZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsImNsYXNzU2V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwibnVtYmVyIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxZQUFmOztJQXNCcUJDLEs7Ozs7O0FBeURuQixpQkFBWUMsTUFBWixFQUFnQztBQUFBOztBQUFBOztBQUM5Qiw4QkFBTUEsTUFBTjtBQUQ4QixVQVZ6QkMsU0FVeUI7QUFBQSxVQVJ6QkMsZUFReUI7QUFBQSxVQU54QkMscUJBTXdCO0FBQUEsVUFKeEJDLGtCQUl3QjtBQUFBLFVBRnhCQyx3QkFFd0I7O0FBQUEsVUFTekJDLGlCQVR5QixHQVNMLFlBQU07QUFBQSxVQUN2QkMsU0FEdUIsR0FDVCxNQUFLUCxLQURJLENBQ3ZCTyxTQUR1QjtBQUUvQixVQUFNQyxNQUFNLEdBQUdELFNBQVMsR0FBR0EsU0FBUyxFQUFaLEdBQWlCRSxNQUF6QztBQUNBLFlBQUtMLGtCQUFMLEdBQTBCLGtDQUN4QkksTUFEd0IsRUFFeEIsUUFGd0IsRUFHeEIsTUFBS0UsY0FIbUIsQ0FBMUI7QUFLQSxZQUFLTCx3QkFBTCxHQUFnQyxrQ0FDOUJJLE1BRDhCLEVBRTlCLFFBRjhCLEVBRzlCLE1BQUtOLHFCQUh5QixDQUFoQzs7QUFLQSxZQUFLTyxjQUFMOztBQUNBLFlBQUtDLG9CQUFMO0FBQ0QsS0F4QitCOztBQUFBLFVBMEJ6QkMsb0JBMUJ5QixHQTBCRixZQUFNO0FBQ2xDLFVBQUksTUFBS1Isa0JBQVQsRUFBNkI7QUFDM0IsY0FBS0Esa0JBQUwsQ0FBd0JTLE1BQXhCO0FBQ0Q7O0FBQ0QsVUFBSSxNQUFLUix3QkFBVCxFQUFtQztBQUNqQyxjQUFLQSx3QkFBTCxDQUE4QlEsTUFBOUI7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Q2tCLEVBQUFBLFlBQVksRUFBRSxJQUwwQjtBQU14Q0MsRUFBQUEsU0FBUyxFQUFFLENBTjZCO0FBT3hDVCxFQUFBQSxRQUFRLEVBQUUsSUFQOEI7QUFReENpQyxFQUFBQSxLQUFLLEVBQUU7QUFSaUMsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQWZmaXgg57uE5Lu25bCG5LiN5Lya5L+u5pS55oiQIEZ1bmN0aW9uQ29tcG9uZW5077yMXG4gKiDlm6DkuLrmiJHvvIhZaWppZe+8ieWwneivlei/h+WPkeeOsOS8muS4gOebtOinpuWPkSBvbkNoYW5nZSwgYWZmaXhTdHlsZSDmmI7mmI7mnInvvIzkvYbmmK/lnKggb25DaGFuZ2Ug5pe25LiA55u05pivIHVuZGVmaW5lZFxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgc2hhbGxvd2VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyXCJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImRlYm91bmNlXCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktYWZmaXhcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElBZmZpeFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBnZXRDb250YWluZXI/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICBnZXRUYXJnZXQ/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICBvZmZzZXRCb3R0b20/OiBudW1iZXIgfCBudWxsXG4gIG9mZnNldFRvcD86IG51bWJlclxuICBvbkNoYW5nZT86ICgoYWZmaXhlZDogYm9vbGVhbikgPT4gdm9pZCkgfCBudWxsXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBZmZpeFN0YXRlIHtcbiAgYWZmaXhTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCBudWxsXG4gIHBsYWNlaG9sZGVyU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgbnVsbFxufVxuXG4vKipcbiAqIOWbuumSiVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZmZpeCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQWZmaXhQcm9wcywgSUFmZml4U3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog5a2Q6IqC54K5XG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQjVxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiAoKSA9PiBIVE1MRWxlbWVudCDlm7rpkonnmoTmmL7npLrljLrln5/vvIzmsLjov5zkvJrlnKjmraTmlrnms5XkvKDlm57nmoTlhYPntKDlhoVcbiAgICAgKi9cbiAgICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqICgpID0+IEhUTUxFbGVtZW50IOebkeWQrOa7muWKqOeahOWFg+e0oO+8jOm7mOiupOWcqCB3aW5kb3cg5LiKXG4gICAgICovXG4gICAgZ2V0VGFyZ2V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HvvIzlpoLmnpzkvKDlhaXkuoYgb2Zmc2V0Qm90dG9t77yMQWZmaXgg5Lya5b+955WlIG9mZnNldFRvcFxuICAgICAqL1xuICAgIG9mZnNldEJvdHRvbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5FcbiAgICAgKi9cbiAgICBvZmZzZXRUb3A6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5Zu65a6a54q25oCB5pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg5qC35byPXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSUFmZml4UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFwiXCIsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgZ2V0Q29udGFpbmVyOiBudWxsLFxuICAgIGdldFRhcmdldDogbnVsbCxcbiAgICBvZmZzZXRCb3R0b206IG51bGwsXG4gICAgb2Zmc2V0VG9wOiAwLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgIHN0eWxlOiB7fSxcbiAgfVxuXG4gIHB1YmxpYyBmaXhlZE5vZGU6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHBsYWNlaG9sZGVyTm9kZTogSFRNTERpdkVsZW1lbnRcblxuICBwcml2YXRlIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZTogYW55XG5cbiAgcHJpdmF0ZSBzY3JvbGxFdmVudEhhbmRsZXI6IGFueVxuXG4gIHByaXZhdGUgd2luZG93UmVzaXplRXZlbnRIYW5kbGVyOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSUFmZml4UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWZmaXhTdHlsZTogdW5kZWZpbmVkLFxuICAgICAgcGxhY2Vob2xkZXJTdHlsZTogdW5kZWZpbmVkLFxuICAgIH1cbiAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSA9IGRlYm91bmNlKHRoaXMuc3luY1BsYWNlaG9sZGVyU3R5bGUsIDEwMCwgbnVsbClcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdldFRhcmdldCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldCA/IGdldFRhcmdldCgpIDogd2luZG93XG4gICAgdGhpcy5zY3JvbGxFdmVudEhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgdGFyZ2V0LFxuICAgICAgXCJzY3JvbGxcIixcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25cbiAgICApXG4gICAgdGhpcy53aW5kb3dSZXNpemVFdmVudEhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgd2luZG93LFxuICAgICAgXCJyZXNpemVcIixcbiAgICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplXG4gICAgKVxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKVxuICAgIHRoaXMuc3luY1BsYWNlaG9sZGVyU3R5bGUoKVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNjcm9sbEV2ZW50SGFuZGxlcikge1xuICAgICAgdGhpcy5zY3JvbGxFdmVudEhhbmRsZXIucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKHRoaXMud2luZG93UmVzaXplRXZlbnRIYW5kbGVyKSB7XG4gICAgICB0aGlzLndpbmRvd1Jlc2l6ZUV2ZW50SGFuZGxlci5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUpIHtcbiAgICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplLmNsZWFyKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0QWZmaXhTdHlsZSA9IChuZXdBZmZpeFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgbnVsbCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGFmZml4U3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIXNoYWxsb3dlcXVhbChhZmZpeFN0eWxlLCBuZXdBZmZpeFN0eWxlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFmZml4U3R5bGU6IG5ld0FmZml4U3R5bGUgfSlcbiAgICB9XG4gICAgaWYgKCEhYWZmaXhTdHlsZSAhPT0gISFuZXdBZmZpeFN0eWxlICYmIG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZSghIW5ld0FmZml4U3R5bGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFBsYWNlaG9sZGVyU3R5bGUgPSAoXG4gICAgbmV3UGxhY2Vob2xkZXJTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyB8IG51bGxcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBwbGFjZWhvbGRlclN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFzaGFsbG93ZXF1YWwocGxhY2Vob2xkZXJTdHlsZSwgbmV3UGxhY2Vob2xkZXJTdHlsZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwbGFjZWhvbGRlclN0eWxlOiBuZXdQbGFjZWhvbGRlclN0eWxlIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZVBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZml4ZWROb2RlLCBwbGFjZWhvbGRlck5vZGUsIHByb3BzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBnZXRDb250YWluZXIsIGdldFRhcmdldCwgb2Zmc2V0Qm90dG9tLCBvZmZzZXRUb3AgfSA9IHByb3BzXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0ID8gZ2V0VGFyZ2V0KCkgOiB3aW5kb3dcblxuICAgIC8vIOavj+asoeS9v+eUqCByZWYg6YO96KaB6L+b6KGM5Yik5patXG4gICAgaWYgKHRhcmdldCAmJiBwbGFjZWhvbGRlck5vZGUgJiYgZml4ZWROb2RlKSB7XG4gICAgICAvLyBkb2N1bWVudFJlY3Qg5piv5LiA5a6a6ZyA6KaB55qE77yM5Li65LqG6K6+572u5q2j56Gu55qEIGxlZnQg5YC8XG4gICAgICBjb25zdCBkb2N1bWVudFJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCBwbGFjZWhvbGRlclJlY3QgPSBwbGFjZWhvbGRlck5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IGZpeGVkUmVjdCA9IGZpeGVkTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAvLyDliKTmlq3mmK/lkKbmmK8gd2luZG93XG4gICAgICBjb25zdCB0YXJnZXRSZWN0ID0gZ2V0VGFyZ2V0XG4gICAgICAgID8gZ2V0VGFyZ2V0KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgOiBkb2N1bWVudFJlY3RcbiAgICAgIGNvbnN0IGRvY3VtZW50UmVjdExlZnQgPSBkb2N1bWVudFJlY3QubGVmdFxuICAgICAgY29uc3QgcGxhY2Vob2xkZXJSZWN0TGVmdCA9IHBsYWNlaG9sZGVyUmVjdC5sZWZ0XG5cbiAgICAgIGNvbnN0IHRhcmdldFRvcCA9IGdldFRhcmdldCA/IHRhcmdldFJlY3QudG9wIDogMFxuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gZ2V0VGFyZ2V0ID8gdGFyZ2V0UmVjdC5oZWlnaHQgOiB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgICAgY29uc3QgYWZmaXhTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgbGVmdDogZG9jdW1lbnRSZWN0TGVmdCArIHBsYWNlaG9sZGVyUmVjdExlZnQsXG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgIHdpZHRoOiBmaXhlZFJlY3Qud2lkdGgsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNldFN0eWxlID0gKCkgPT4ge1xuICAgICAgICBpZiAoZml4ZWRSZWN0LndpZHRoKSB7XG4gICAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgICAgIGhlaWdodDogZml4ZWRSZWN0LmhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoOiBmaXhlZFJlY3Qud2lkdGgsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyDlpoLmnpzkvKDlhaXkuoYgb2Zmc2V0Qm90dG9t77yM5YiZ5Lya5b+955WlIG9mZnNldFRvcFxuICAgICAgaWYgKFxuICAgICAgICBvZmZzZXRCb3R0b20gIT09IG51bGwgJiZcbiAgICAgICAgb2Zmc2V0Qm90dG9tICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgIWlzTmFOKG9mZnNldEJvdHRvbSlcbiAgICAgICkge1xuICAgICAgICBpZiAocGxhY2Vob2xkZXJSZWN0LmJvdHRvbSA+IHRhcmdldEhlaWdodCAtIG9mZnNldEJvdHRvbSkge1xuICAgICAgICAgIGlmIChnZXRDb250YWluZXIgJiYgZ2V0Q29udGFpbmVyKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBnZXRDb250YWluZXIoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgYm90dG9tID1cbiAgICAgICAgICAgICAgdGFyZ2V0SGVpZ2h0IC0gY29udGFpbmVyUmVjdC50b3AgLSBwbGFjZWhvbGRlclJlY3QuaGVpZ2h0XG4gICAgICAgICAgICBpZiAoYm90dG9tIDw9IG9mZnNldEJvdHRvbSkge1xuICAgICAgICAgICAgICBhZmZpeFN0eWxlLmJvdHRvbSA9XG4gICAgICAgICAgICAgICAgYm90dG9tICsgcGxhY2Vob2xkZXJSZWN0LmhlaWdodCA8IDBcbiAgICAgICAgICAgICAgICAgID8gLXBsYWNlaG9sZGVyUmVjdC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgIDogYm90dG9tXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhZmZpeFN0eWxlLmJvdHRvbSA9IG9mZnNldEJvdHRvbVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZmZpeFN0eWxlLmJvdHRvbSA9IG9mZnNldEJvdHRvbVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRTdHlsZSgpXG4gICAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGFmZml4U3R5bGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKG51bGwpXG4gICAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKG51bGwpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGxhY2Vob2xkZXJSZWN0LnRvcCA8IChvZmZzZXRUb3AgfHwgMCkgKyB0YXJnZXRUb3ApIHtcbiAgICAgICAgaWYgKGdldENvbnRhaW5lciAmJiBnZXRDb250YWluZXIoKSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBnZXRDb250YWluZXIoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIGNvbnN0IHRvcCA9XG4gICAgICAgICAgICBjb250YWluZXJSZWN0LmhlaWdodCArIGNvbnRhaW5lclJlY3QudG9wIC0gcGxhY2Vob2xkZXJSZWN0LmhlaWdodFxuICAgICAgICAgIGlmIChvZmZzZXRUb3AgIT09IHVuZGVmaW5lZCAmJiB0b3AgPD0gb2Zmc2V0VG9wKSB7XG4gICAgICAgICAgICBhZmZpeFN0eWxlLnRvcCA9XG4gICAgICAgICAgICAgIHRvcCArIHBsYWNlaG9sZGVyUmVjdC5oZWlnaHQgPCAwID8gLXBsYWNlaG9sZGVyUmVjdC5oZWlnaHQgOiB0b3BcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWZmaXhTdHlsZS50b3AgPSB0YXJnZXRUb3AgKyAob2Zmc2V0VG9wIHx8IDApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFmZml4U3R5bGUudG9wID0gdGFyZ2V0VG9wICsgKG9mZnNldFRvcCB8fCAwKVxuICAgICAgICB9XG4gICAgICAgIHNldFN0eWxlKClcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGFmZml4U3R5bGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUobnVsbClcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKG51bGwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN5bmNQbGFjZWhvbGRlclN0eWxlID0gKCkgPT4ge1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKVxuICAgIGNvbnN0IHsgYWZmaXhTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIC8vIOadoeS7tuWIpOaWre+8mlxuICAgIC8vIDEuIOavj+asoeS9v+eUqCByZWYg6YO96KaB6L+b6KGM5Yik5patIDIuIOWIpOaWreaciSBhZmZpeFN0eWxlIOivtOaYjueOsOWcqOato+WkhOS6juWbuuWumueKtuaAgeS4rVxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyTm9kZSAmJiBhZmZpeFN0eWxlKSB7XG4gICAgICBjb25zdCB3aWR0aFByZXYgPSB0aGlzLnBsYWNlaG9sZGVyTm9kZS5zdHlsZS53aWR0aFxuICAgICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUud2lkdGggPSBcIlwiXG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMucGxhY2Vob2xkZXJOb2RlLm9mZnNldFdpZHRoXG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoe1xuICAgICAgICAuLi5hZmZpeFN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH0pXG4gICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLndpZHRoID0gd2lkdGhQcmV2XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNhdmVQbGFjZWhvbGRlck5vZGUgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZSA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlRml4ZWROb2RlID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5maXhlZE5vZGUgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc3R5bGUsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlc3RQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJnZXRDb250YWluZXJcIixcbiAgICAgIFwiZ2V0VGFyZ2V0XCIsXG4gICAgICBcIm9mZnNldEJvdHRvbVwiLFxuICAgICAgXCJvZmZzZXRUb3BcIixcbiAgICAgIFwib25DaGFuZ2VcIixcbiAgICBdKVxuXG4gICAgY29uc3QgeyBhZmZpeFN0eWxlLCBwbGFjZWhvbGRlclN0eWxlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWJhc2VgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXt0aGlzLnNhdmVQbGFjZWhvbGRlck5vZGV9IHN0eWxlPXt7IC4uLnBsYWNlaG9sZGVyU3R5bGUgfX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgIHJlZj17dGhpcy5zYXZlRml4ZWROb2RlfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5hZmZpeFN0eWxlLFxuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19