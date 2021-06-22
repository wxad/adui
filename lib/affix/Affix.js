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

var _resizeObserver = _interopRequireDefault(require("../resize-observer"));

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
      var _this2 = this;

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
      }, React.createElement(_resizeObserver["default"], {
        onResize: function onResize() {
          _this2.updatePosition();

          _this2.syncPlaceholderStyle();
        }
      }, React.createElement("div", _extends({
        className: classSet,
        ref: this.saveFixedNode,
        style: _objectSpread(_objectSpread({}, affixStyle), style)
      }, restProps), children)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWZmaXgvQWZmaXgudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkFmZml4IiwicHJvcHMiLCJmaXhlZE5vZGUiLCJwbGFjZWhvbGRlck5vZGUiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJzY3JvbGxFdmVudEhhbmRsZXIiLCJ3aW5kb3dSZXNpemVFdmVudEhhbmRsZXIiLCJjb21wb25lbnREaWRNb3VudCIsImdldFRhcmdldCIsInRhcmdldCIsIndpbmRvdyIsInVwZGF0ZVBvc2l0aW9uIiwic3luY1BsYWNlaG9sZGVyU3R5bGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZSIsImNsZWFyIiwic2V0QWZmaXhTdHlsZSIsIm5ld0FmZml4U3R5bGUiLCJvbkNoYW5nZSIsImFmZml4U3R5bGUiLCJzdGF0ZSIsInNldFN0YXRlIiwic2V0UGxhY2Vob2xkZXJTdHlsZSIsIm5ld1BsYWNlaG9sZGVyU3R5bGUiLCJwbGFjZWhvbGRlclN0eWxlIiwiZ2V0Q29udGFpbmVyIiwib2Zmc2V0Qm90dG9tIiwib2Zmc2V0VG9wIiwiZG9jdW1lbnRSZWN0IiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGxhY2Vob2xkZXJSZWN0IiwiZml4ZWRSZWN0IiwidGFyZ2V0UmVjdCIsImRvY3VtZW50UmVjdExlZnQiLCJsZWZ0IiwicGxhY2Vob2xkZXJSZWN0TGVmdCIsInRhcmdldFRvcCIsInRvcCIsInRhcmdldEhlaWdodCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ3aWR0aCIsInNldFN0eWxlIiwidW5kZWZpbmVkIiwiaXNOYU4iLCJib3R0b20iLCJjb250YWluZXJSZWN0Iiwid2lkdGhQcmV2Iiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsInNhdmVQbGFjZWhvbGRlck5vZGUiLCJub2RlIiwic2F2ZUZpeGVkTm9kZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsImNsYXNzU2V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwibnVtYmVyIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxZQUFmOztJQXNCcUJDLEs7Ozs7O0FBeURuQixpQkFBWUMsTUFBWixFQUFnQztBQUFBOztBQUFBOztBQUM5Qiw4QkFBTUEsTUFBTjtBQUQ4QixVQVZ6QkMsU0FVeUI7QUFBQSxVQVJ6QkMsZUFReUI7QUFBQSxVQU54QkMscUJBTXdCO0FBQUEsVUFKeEJDLGtCQUl3QjtBQUFBLFVBRnhCQyx3QkFFd0I7O0FBQUEsVUFTekJDLGlCQVR5QixHQVNMLFlBQU07QUFBQSxVQUN2QkMsU0FEdUIsR0FDVCxNQUFLUCxLQURJLENBQ3ZCTyxTQUR1QjtBQUUvQixVQUFNQyxNQUFNLEdBQUdELFNBQVMsR0FBR0EsU0FBUyxFQUFaLEdBQWlCRSxNQUF6QztBQUNBLFlBQUtMLGtCQUFMLEdBQTBCLGtDQUN4QkksTUFEd0IsRUFFeEIsUUFGd0IsRUFHeEIsTUFBS0UsY0FIbUIsQ0FBMUI7QUFLQSxZQUFLTCx3QkFBTCxHQUFnQyxrQ0FDOUJJLE1BRDhCLEVBRTlCLFFBRjhCLEVBRzlCLE1BQUtOLHFCQUh5QixDQUFoQzs7QUFLQSxZQUFLTyxjQUFMOztBQUNBLFlBQUtDLG9CQUFMO0FBQ0QsS0F4QitCOztBQUFBLFVBMEJ6QkMsb0JBMUJ5QixHQTBCRixZQUFNO0FBQ2xDLFVBQUksTUFBS1Isa0JBQVQsRUFBNkI7QUFDM0IsY0FBS0Esa0JBQUwsQ0FBd0JTLE1BQXhCO0FBQ0Q7O0FBQ0QsVUFBSSxNQUFLUix3QkFBVCxFQUFtQztBQUNqQyxjQUFLQSx3QkFBTCxDQUE4QlEs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QjtBQUN4Q2IsRUFBQUEsUUFBUSxFQUFFLEVBRDhCO0FBRXhDQyxFQUFBQSxTQUFTLEVBQUVYLFNBRjZCO0FBR3hDckIsRUFBQUEsWUFBWSxFQUFFLElBSDBCO0FBSXhDakIsRUFBQUEsU0FBUyxFQUFFLElBSjZCO0FBS3hDa0IsRUFBQUEsWUFBWSxFQUFFLElBTDBCO0FBTXhDQyxFQUFBQSxTQUFTLEVBQUUsQ0FONkI7QUFPeENULEVBQUFBLFFBQVEsRUFBRSxJQVA4QjtBQVF4Q2lDLEVBQUFBLEtBQUssRUFBRTtBQVJpQyxDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBZmZpeCDnu4Tku7blsIbkuI3kvJrkv67mlLnmiJAgRnVuY3Rpb25Db21wb25lbnTvvIxcbiAqIOWboOS4uuaIke+8iFlpamll77yJ5bCd6K+V6L+H5Y+R546w5Lya5LiA55u06Kem5Y+RIG9uQ2hhbmdlLCBhZmZpeFN0eWxlIOaYjuaYjuacie+8jOS9huaYr+WcqCBvbkNoYW5nZSDml7bkuIDnm7TmmK8gdW5kZWZpbmVkXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBzaGFsbG93ZXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiZGVib3VuY2VcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1hZmZpeFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFmZml4UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGdldENvbnRhaW5lcj86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIGdldFRhcmdldD86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIG9mZnNldEJvdHRvbT86IG51bWJlciB8IG51bGxcbiAgb2Zmc2V0VG9wPzogbnVtYmVyXG4gIG9uQ2hhbmdlPzogKChhZmZpeGVkOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFmZml4U3RhdGUge1xuICBhZmZpeFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcyB8IG51bGxcbiAgcGxhY2Vob2xkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCBudWxsXG59XG5cbi8qKlxuICog5Zu66ZKJXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmZml4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElBZmZpeFByb3BzLCBJQWZmaXhTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqICgpID0+IEhUTUxFbGVtZW50IOWbuumSieeahOaYvuekuuWMuuWfn++8jOawuOi/nOS8muWcqOatpOaWueazleS8oOWbnueahOWFg+e0oOWGhVxuICAgICAqL1xuICAgIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogKCkgPT4gSFRNTEVsZW1lbnQg55uR5ZCs5rua5Yqo55qE5YWD57Sg77yM6buY6K6k5ZyoIHdpbmRvdyDkuIpcbiAgICAgKi9cbiAgICBnZXRUYXJnZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOi3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPke+8jOWmguaenOS8oOWFpeS6hiBvZmZzZXRCb3R0b23vvIxBZmZpeCDkvJrlv73nlaUgb2Zmc2V0VG9wXG4gICAgICovXG4gICAgb2Zmc2V0Qm90dG9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOi3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPkVxuICAgICAqL1xuICAgIG9mZnNldFRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDlm7rlrprnirbmgIHmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpmYTliqDmoLflvI9cbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJQWZmaXhQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogXCJcIixcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBnZXRDb250YWluZXI6IG51bGwsXG4gICAgZ2V0VGFyZ2V0OiBudWxsLFxuICAgIG9mZnNldEJvdHRvbTogbnVsbCxcbiAgICBvZmZzZXRUb3A6IDAsXG4gICAgb25DaGFuZ2U6IG51bGwsXG4gICAgc3R5bGU6IHt9LFxuICB9XG5cbiAgcHVibGljIGZpeGVkTm9kZTogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgcGxhY2Vob2xkZXJOb2RlOiBIVE1MRGl2RWxlbWVudFxuXG4gIHByaXZhdGUgZGVib3VuY2VkV2luZG93UmVzaXplOiBhbnlcblxuICBwcml2YXRlIHNjcm9sbEV2ZW50SGFuZGxlcjogYW55XG5cbiAgcHJpdmF0ZSB3aW5kb3dSZXNpemVFdmVudEhhbmRsZXI6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJQWZmaXhQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZmZpeFN0eWxlOiB1bmRlZmluZWQsXG4gICAgICBwbGFjZWhvbGRlclN0eWxlOiB1bmRlZmluZWQsXG4gICAgfVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplID0gZGVib3VuY2UodGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZSwgMTAwLCBudWxsKVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0VGFyZ2V0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0ID8gZ2V0VGFyZ2V0KCkgOiB3aW5kb3dcbiAgICB0aGlzLnNjcm9sbEV2ZW50SGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICB0YXJnZXQsXG4gICAgICBcInNjcm9sbFwiLFxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblxuICAgIClcbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUV2ZW50SGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICB3aW5kb3csXG4gICAgICBcInJlc2l6ZVwiLFxuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemVcbiAgICApXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpXG4gICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZSgpXG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50SGFuZGxlci5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy53aW5kb3dSZXNpemVFdmVudEhhbmRsZXIpIHtcbiAgICAgIHRoaXMud2luZG93UmVzaXplRXZlbnRIYW5kbGVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUuY2xlYXIoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBZmZpeFN0eWxlID0gKG5ld0FmZml4U3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCBudWxsKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYWZmaXhTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghc2hhbGxvd2VxdWFsKGFmZml4U3R5bGUsIG5ld0FmZml4U3R5bGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWZmaXhTdHlsZTogbmV3QWZmaXhTdHlsZSB9KVxuICAgIH1cbiAgICBpZiAoISFhZmZpeFN0eWxlICE9PSAhIW5ld0FmZml4U3R5bGUgJiYgb25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKCEhbmV3QWZmaXhTdHlsZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UGxhY2Vob2xkZXJTdHlsZSA9IChcbiAgICBuZXdQbGFjZWhvbGRlclN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgbnVsbFxuICApID0+IHtcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyU3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIXNoYWxsb3dlcXVhbChwbGFjZWhvbGRlclN0eWxlLCBuZXdQbGFjZWhvbGRlclN0eWxlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYWNlaG9sZGVyU3R5bGU6IG5ld1BsYWNlaG9sZGVyU3R5bGUgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBmaXhlZE5vZGUsIHBsYWNlaG9sZGVyTm9kZSwgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCB7IGdldENvbnRhaW5lciwgZ2V0VGFyZ2V0LCBvZmZzZXRCb3R0b20sIG9mZnNldFRvcCB9ID0gcHJvcHNcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQgPyBnZXRUYXJnZXQoKSA6IHdpbmRvd1xuXG4gICAgLy8g5q+P5qyh5L2/55SoIHJlZiDpg73opoHov5vooYzliKTmlq1cbiAgICBpZiAodGFyZ2V0ICYmIHBsYWNlaG9sZGVyTm9kZSAmJiBmaXhlZE5vZGUpIHtcbiAgICAgIC8vIGRvY3VtZW50UmVjdCDmmK/kuIDlrprpnIDopoHnmoTvvIzkuLrkuoborr7nva7mraPnoa7nmoQgbGVmdCDlgLxcbiAgICAgIGNvbnN0IGRvY3VtZW50UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyUmVjdCA9IHBsYWNlaG9sZGVyTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgZml4ZWRSZWN0ID0gZml4ZWROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIC8vIOWIpOaWreaYr+WQpuaYryB3aW5kb3dcbiAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRUYXJnZXRcbiAgICAgICAgPyBnZXRUYXJnZXQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IGRvY3VtZW50UmVjdFxuICAgICAgY29uc3QgZG9jdW1lbnRSZWN0TGVmdCA9IGRvY3VtZW50UmVjdC5sZWZ0XG4gICAgICBjb25zdCBwbGFjZWhvbGRlclJlY3RMZWZ0ID0gcGxhY2Vob2xkZXJSZWN0LmxlZnRcblxuICAgICAgY29uc3QgdGFyZ2V0VG9wID0gZ2V0VGFyZ2V0ID8gdGFyZ2V0UmVjdC50b3AgOiAwXG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBnZXRUYXJnZXQgPyB0YXJnZXRSZWN0LmhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBjb25zdCBhZmZpeFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBsZWZ0OiBkb2N1bWVudFJlY3RMZWZ0ICsgcGxhY2Vob2xkZXJSZWN0TGVmdCxcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgd2lkdGg6IGZpeGVkUmVjdC53aWR0aCxcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2V0U3R5bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChmaXhlZFJlY3Qud2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiBmaXhlZFJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGZpeGVkUmVjdC53aWR0aCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOWmguaenOS8oOWFpeS6hiBvZmZzZXRCb3R0b23vvIzliJnkvJrlv73nlaUgb2Zmc2V0VG9wXG4gICAgICBpZiAoXG4gICAgICAgIG9mZnNldEJvdHRvbSAhPT0gbnVsbCAmJlxuICAgICAgICBvZmZzZXRCb3R0b20gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAhaXNOYU4ob2Zmc2V0Qm90dG9tKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChwbGFjZWhvbGRlclJlY3QuYm90dG9tID4gdGFyZ2V0SGVpZ2h0IC0gb2Zmc2V0Qm90dG9tKSB7XG4gICAgICAgICAgaWYgKGdldENvbnRhaW5lciAmJiBnZXRDb250YWluZXIoKSkge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGdldENvbnRhaW5lcigpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBib3R0b20gPVxuICAgICAgICAgICAgICB0YXJnZXRIZWlnaHQgLSBjb250YWluZXJSZWN0LnRvcCAtIHBsYWNlaG9sZGVyUmVjdC5oZWlnaHRcbiAgICAgICAgICAgIGlmIChib3R0b20gPD0gb2Zmc2V0Qm90dG9tKSB7XG4gICAgICAgICAgICAgIGFmZml4U3R5bGUuYm90dG9tID1cbiAgICAgICAgICAgICAgICBib3R0b20gKyBwbGFjZWhvbGRlclJlY3QuaGVpZ2h0IDwgMFxuICAgICAgICAgICAgICAgICAgPyAtcGxhY2Vob2xkZXJSZWN0LmhlaWdodFxuICAgICAgICAgICAgICAgICAgOiBib3R0b21cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFmZml4U3R5bGUuYm90dG9tID0gb2Zmc2V0Qm90dG9tXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFmZml4U3R5bGUuYm90dG9tID0gb2Zmc2V0Qm90dG9tXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldFN0eWxlKClcbiAgICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoYWZmaXhTdHlsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUobnVsbClcbiAgICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUobnVsbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwbGFjZWhvbGRlclJlY3QudG9wIDwgKG9mZnNldFRvcCB8fCAwKSArIHRhcmdldFRvcCkge1xuICAgICAgICBpZiAoZ2V0Q29udGFpbmVyICYmIGdldENvbnRhaW5lcigpKSB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGdldENvbnRhaW5lcigpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgY29uc3QgdG9wID1cbiAgICAgICAgICAgIGNvbnRhaW5lclJlY3QuaGVpZ2h0ICsgY29udGFpbmVyUmVjdC50b3AgLSBwbGFjZWhvbGRlclJlY3QuaGVpZ2h0XG4gICAgICAgICAgaWYgKG9mZnNldFRvcCAhPT0gdW5kZWZpbmVkICYmIHRvcCA8PSBvZmZzZXRUb3ApIHtcbiAgICAgICAgICAgIGFmZml4U3R5bGUudG9wID1cbiAgICAgICAgICAgICAgdG9wICsgcGxhY2Vob2xkZXJSZWN0LmhlaWdodCA8IDAgPyAtcGxhY2Vob2xkZXJSZWN0LmhlaWdodCA6IHRvcFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZmZpeFN0eWxlLnRvcCA9IHRhcmdldFRvcCArIChvZmZzZXRUb3AgfHwgMClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZmaXhTdHlsZS50b3AgPSB0YXJnZXRUb3AgKyAob2Zmc2V0VG9wIHx8IDApXG4gICAgICAgIH1cbiAgICAgICAgc2V0U3R5bGUoKVxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoYWZmaXhTdHlsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShudWxsKVxuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUobnVsbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3luY1BsYWNlaG9sZGVyU3R5bGUgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpXG4gICAgY29uc3QgeyBhZmZpeFN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgLy8g5p2h5Lu25Yik5pat77yaXG4gICAgLy8gMS4g5q+P5qyh5L2/55SoIHJlZiDpg73opoHov5vooYzliKTmlq0gMi4g5Yik5pat5pyJIGFmZml4U3R5bGUg6K+05piO546w5Zyo5q2j5aSE5LqO5Zu65a6a54q25oCB5LitXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXJOb2RlICYmIGFmZml4U3R5bGUpIHtcbiAgICAgIGNvbnN0IHdpZHRoUHJldiA9IHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLndpZHRoXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5zdHlsZS53aWR0aCA9IFwiXCJcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZSh7XG4gICAgICAgIC4uLmFmZml4U3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSlcbiAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUud2lkdGggPSB3aWR0aFByZXZcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2F2ZVBsYWNlaG9sZGVyTm9kZSA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVGaXhlZE5vZGUgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmZpeGVkTm9kZSA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdHlsZSwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImdldENvbnRhaW5lclwiLFxuICAgICAgXCJnZXRUYXJnZXRcIixcbiAgICAgIFwib2Zmc2V0Qm90dG9tXCIsXG4gICAgICBcIm9mZnNldFRvcFwiLFxuICAgICAgXCJvbkNoYW5nZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGFmZml4U3R5bGUsIHBsYWNlaG9sZGVyU3R5bGUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tYmFzZWApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMuc2F2ZVBsYWNlaG9sZGVyTm9kZX0gc3R5bGU9e3sgLi4ucGxhY2Vob2xkZXJTdHlsZSB9fT5cbiAgICAgICAgPFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAgb25SZXNpemU9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKVxuICAgICAgICAgICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZSgpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZUZpeGVkTm9kZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLmFmZml4U3R5bGUsXG4gICAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Jlc2l6ZU9ic2VydmVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=