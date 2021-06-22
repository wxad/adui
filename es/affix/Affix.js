function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import shallowequal from "shallowequal";
import addEventListener from "rc-util/lib/Dom/addEventListener";
import { debounce } from "debounce";
import omit from "../_util/omit";
import ResizeObserver from "../resize-observer";
import "./style";
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
      _this.scrollEventHandler = addEventListener(target, "scroll", _this.updatePosition);
      _this.windowResizeEventHandler = addEventListener(window, "resize", _this.debouncedWindowResize);

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

      if (!shallowequal(affixStyle, newAffixStyle)) {
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

      if (!shallowequal(placeholderStyle, newPlaceholderStyle)) {
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
    _this.debouncedWindowResize = debounce(_this.syncPlaceholderStyle, 100, null);
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

      var restProps = omit(otherProps, ["getContainer", "getTarget", "offsetBottom", "offsetTop", "onChange"]);
      var _this$state = this.state,
          affixStyle = _this$state.affixStyle,
          placeholderStyle = _this$state.placeholderStyle;
      var classSet = classNames(className, "".concat(prefix, "-base"));
      return React.createElement("div", {
        ref: this.savePlaceholderNode,
        style: _objectSpread({}, placeholderStyle)
      }, React.createElement(ResizeObserver, {
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

Affix.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  getContainer: PropTypes.func,
  getTarget: PropTypes.func,
  offsetBottom: PropTypes.number,
  offsetTop: PropTypes.number,
  onChange: PropTypes.func,
  style: PropTypes.object
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
export { Affix as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWZmaXgvQWZmaXgudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInNoYWxsb3dlcXVhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsIm9taXQiLCJSZXNpemVPYnNlcnZlciIsInByZWZpeCIsIkFmZml4IiwicHJvcHMiLCJmaXhlZE5vZGUiLCJwbGFjZWhvbGRlck5vZGUiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJzY3JvbGxFdmVudEhhbmRsZXIiLCJ3aW5kb3dSZXNpemVFdmVudEhhbmRsZXIiLCJjb21wb25lbnREaWRNb3VudCIsImdldFRhcmdldCIsInRhcmdldCIsIndpbmRvdyIsInVwZGF0ZVBvc2l0aW9uIiwic3luY1BsYWNlaG9sZGVyU3R5bGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZSIsImNsZWFyIiwic2V0QWZmaXhTdHlsZSIsIm5ld0FmZml4U3R5bGUiLCJvbkNoYW5nZSIsImFmZml4U3R5bGUiLCJzdGF0ZSIsInNldFN0YXRlIiwic2V0UGxhY2Vob2xkZXJTdHlsZSIsIm5ld1BsYWNlaG9sZGVyU3R5bGUiLCJwbGFjZWhvbGRlclN0eWxlIiwiZ2V0Q29udGFpbmVyIiwib2Zmc2V0Qm90dG9tIiwib2Zmc2V0VG9wIiwiZG9jdW1lbnRSZWN0IiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGxhY2Vob2xkZXJSZWN0IiwiZml4ZWRSZWN0IiwidGFyZ2V0UmVjdCIsImRvY3VtZW50UmVjdExlZnQiLCJsZWZ0IiwicGxhY2Vob2xkZXJSZWN0TGVmdCIsInRhcmdldFRvcCIsInRvcCIsInRhcmdldEhlaWdodCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ3aWR0aCIsInNldFN0eWxlIiwidW5kZWZpbmVkIiwiaXNOYU4iLCJib3R0b20iLCJjb250YWluZXJSZWN0Iiwid2lkdGhQcmV2Iiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsInNhdmVQbGFjZWhvbGRlck5vZGUiLCJub2RlIiwic2F2ZUZpeGVkTm9kZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsImNsYXNzU2V0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm51bWJlciIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixjQUF6QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLGtDQUE3QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsVUFBekI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLGVBQWpCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixvQkFBM0I7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsWUFBZjs7SUFzQnFCQyxLOzs7OztBQXlEbkIsaUJBQVlDLE1BQVosRUFBZ0M7QUFBQTs7QUFBQTs7QUFDOUIsOEJBQU1BLE1BQU47QUFEOEIsVUFWekJDLFNBVXlCO0FBQUEsVUFSekJDLGVBUXlCO0FBQUEsVUFOeEJDLHFCQU13QjtBQUFBLFVBSnhCQyxrQkFJd0I7QUFBQSxVQUZ4QkMsd0JBRXdCOztBQUFBLFVBU3pCQyxpQkFUeUIsR0FTTCxZQUFNO0FBQUEsVUFDdkJDLFNBRHVCLEdBQ1QsTUFBS1AsS0FESSxDQUN2Qk8sU0FEdUI7QUFFL0IsVUFBTUMsTUFBTSxHQUFHRCxTQUFTLEdBQUdBLFNBQVMsRUFBWixHQUFpQkUsTUFBekM7QUFDQSxZQUFLTCxrQkFBTCxHQUEwQlYsZ0JBQWdCLENBQ3hDYyxNQUR3QyxFQUV4QyxRQUZ3QyxFQUd4QyxNQUFLRSxjQUhtQyxDQUExQztBQUtB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QVMsQ0FBQzhELElBSkk7QUFReEJHLEVBQUFBLFNBQVMsRUFBRWpFLFNBQVMsQ0FBQ3VFLE1BUkc7QUFZeEJ0QyxFQUFBQSxZQUFZLEVBQUVqQyxTQUFTLENBQUN3RSxJQVpBO0FBZ0J4QnhELEVBQUFBLFNBQVMsRUFBRWhCLFNBQVMsQ0FBQ3dFLElBaEJHO0FBb0J4QnRDLEVBQUFBLFlBQVksRUFBRWxDLFNBQVMsQ0FBQ3lFLE1BcEJBO0FBd0J4QnRDLEVBQUFBLFNBQVMsRUFBRW5DLFNBQVMsQ0FBQ3lFLE1BeEJHO0FBNEJ4Qi9DLEVBQUFBLFFBQVEsRUFBRTFCLFNBQVMsQ0FBQ3dFLElBNUJJO0FBZ0N4QmIsRUFBQUEsS0FBSyxFQUFFM0QsU0FBUyxDQUFDMEU7QUFoQ08sQztBQURQbEUsSyxDQW9DTG1FLFksR0FBNEI7QUFDeENYLEVBQUFBLFFBQVEsRUFBRSxFQUQ4QjtBQUV4Q0MsRUFBQUEsU0FBUyxFQUFFWCxTQUY2QjtBQUd4Q3JCLEVBQUFBLFlBQVksRUFBRSxJQUgwQjtBQUl4Q2pCLEVBQUFBLFNBQVMsRUFBRSxJQUo2QjtBQUt4Q2tCLEVBQUFBLFlBQVksRUFBRSxJQUwwQjtBQU14Q0MsRUFBQUEsU0FBUyxFQUFFLENBTjZCO0FBT3hDVCxFQUFBQSxRQUFRLEVBQUUsSUFQOEI7QUFReENpQyxFQUFBQSxLQUFLLEVBQUU7QUFSaUMsQztTQXBDdkJuRCxLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBZmZpeCDnu4Tku7blsIbkuI3kvJrkv67mlLnmiJAgRnVuY3Rpb25Db21wb25lbnTvvIxcbiAqIOWboOS4uuaIke+8iFlpamll77yJ5bCd6K+V6L+H5Y+R546w5Lya5LiA55u06Kem5Y+RIG9uQ2hhbmdlLCBhZmZpeFN0eWxlIOaYjuaYjuacie+8jOS9huaYr+WcqCBvbkNoYW5nZSDml7bkuIDnm7TmmK8gdW5kZWZpbmVkXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBzaGFsbG93ZXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiZGVib3VuY2VcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1hZmZpeFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFmZml4UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGdldENvbnRhaW5lcj86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIGdldFRhcmdldD86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIG9mZnNldEJvdHRvbT86IG51bWJlciB8IG51bGxcbiAgb2Zmc2V0VG9wPzogbnVtYmVyXG4gIG9uQ2hhbmdlPzogKChhZmZpeGVkOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFmZml4U3RhdGUge1xuICBhZmZpeFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcyB8IG51bGxcbiAgcGxhY2Vob2xkZXJTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCBudWxsXG59XG5cbi8qKlxuICog5Zu66ZKJXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmZml4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElBZmZpeFByb3BzLCBJQWZmaXhTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqICgpID0+IEhUTUxFbGVtZW50IOWbuumSieeahOaYvuekuuWMuuWfn++8jOawuOi/nOS8muWcqOatpOaWueazleS8oOWbnueahOWFg+e0oOWGhVxuICAgICAqL1xuICAgIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogKCkgPT4gSFRNTEVsZW1lbnQg55uR5ZCs5rua5Yqo55qE5YWD57Sg77yM6buY6K6k5ZyoIHdpbmRvdyDkuIpcbiAgICAgKi9cbiAgICBnZXRUYXJnZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOi3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPke+8jOWmguaenOS8oOWFpeS6hiBvZmZzZXRCb3R0b23vvIxBZmZpeCDkvJrlv73nlaUgb2Zmc2V0VG9wXG4gICAgICovXG4gICAgb2Zmc2V0Qm90dG9tOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOi3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPkVxuICAgICAqL1xuICAgIG9mZnNldFRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDlm7rlrprnirbmgIHmlLnlj5jml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpmYTliqDmoLflvI9cbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJQWZmaXhQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogXCJcIixcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBnZXRDb250YWluZXI6IG51bGwsXG4gICAgZ2V0VGFyZ2V0OiBudWxsLFxuICAgIG9mZnNldEJvdHRvbTogbnVsbCxcbiAgICBvZmZzZXRUb3A6IDAsXG4gICAgb25DaGFuZ2U6IG51bGwsXG4gICAgc3R5bGU6IHt9LFxuICB9XG5cbiAgcHVibGljIGZpeGVkTm9kZTogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgcGxhY2Vob2xkZXJOb2RlOiBIVE1MRGl2RWxlbWVudFxuXG4gIHByaXZhdGUgZGVib3VuY2VkV2luZG93UmVzaXplOiBhbnlcblxuICBwcml2YXRlIHNjcm9sbEV2ZW50SGFuZGxlcjogYW55XG5cbiAgcHJpdmF0ZSB3aW5kb3dSZXNpemVFdmVudEhhbmRsZXI6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJQWZmaXhQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZmZpeFN0eWxlOiB1bmRlZmluZWQsXG4gICAgICBwbGFjZWhvbGRlclN0eWxlOiB1bmRlZmluZWQsXG4gICAgfVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplID0gZGVib3VuY2UodGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZSwgMTAwLCBudWxsKVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0VGFyZ2V0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0ID8gZ2V0VGFyZ2V0KCkgOiB3aW5kb3dcbiAgICB0aGlzLnNjcm9sbEV2ZW50SGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICB0YXJnZXQsXG4gICAgICBcInNjcm9sbFwiLFxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvblxuICAgIClcbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUV2ZW50SGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICB3aW5kb3csXG4gICAgICBcInJlc2l6ZVwiLFxuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemVcbiAgICApXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpXG4gICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZSgpXG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbEV2ZW50SGFuZGxlci5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy53aW5kb3dSZXNpemVFdmVudEhhbmRsZXIpIHtcbiAgICAgIHRoaXMud2luZG93UmVzaXplRXZlbnRIYW5kbGVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUuY2xlYXIoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBZmZpeFN0eWxlID0gKG5ld0FmZml4U3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCBudWxsKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYWZmaXhTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghc2hhbGxvd2VxdWFsKGFmZml4U3R5bGUsIG5ld0FmZml4U3R5bGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWZmaXhTdHlsZTogbmV3QWZmaXhTdHlsZSB9KVxuICAgIH1cbiAgICBpZiAoISFhZmZpeFN0eWxlICE9PSAhIW5ld0FmZml4U3R5bGUgJiYgb25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKCEhbmV3QWZmaXhTdHlsZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UGxhY2Vob2xkZXJTdHlsZSA9IChcbiAgICBuZXdQbGFjZWhvbGRlclN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgbnVsbFxuICApID0+IHtcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyU3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIXNoYWxsb3dlcXVhbChwbGFjZWhvbGRlclN0eWxlLCBuZXdQbGFjZWhvbGRlclN0eWxlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYWNlaG9sZGVyU3R5bGU6IG5ld1BsYWNlaG9sZGVyU3R5bGUgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBmaXhlZE5vZGUsIHBsYWNlaG9sZGVyTm9kZSwgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCB7IGdldENvbnRhaW5lciwgZ2V0VGFyZ2V0LCBvZmZzZXRCb3R0b20sIG9mZnNldFRvcCB9ID0gcHJvcHNcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQgPyBnZXRUYXJnZXQoKSA6IHdpbmRvd1xuXG4gICAgLy8g5q+P5qyh5L2/55SoIHJlZiDpg73opoHov5vooYzliKTmlq1cbiAgICBpZiAodGFyZ2V0ICYmIHBsYWNlaG9sZGVyTm9kZSAmJiBmaXhlZE5vZGUpIHtcbiAgICAgIC8vIGRvY3VtZW50UmVjdCDmmK/kuIDlrprpnIDopoHnmoTvvIzkuLrkuoborr7nva7mraPnoa7nmoQgbGVmdCDlgLxcbiAgICAgIGNvbnN0IGRvY3VtZW50UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyUmVjdCA9IHBsYWNlaG9sZGVyTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgZml4ZWRSZWN0ID0gZml4ZWROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIC8vIOWIpOaWreaYr+WQpuaYryB3aW5kb3dcbiAgICAgIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRUYXJnZXRcbiAgICAgICAgPyBnZXRUYXJnZXQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IGRvY3VtZW50UmVjdFxuICAgICAgY29uc3QgZG9jdW1lbnRSZWN0TGVmdCA9IGRvY3VtZW50UmVjdC5sZWZ0XG4gICAgICBjb25zdCBwbGFjZWhvbGRlclJlY3RMZWZ0ID0gcGxhY2Vob2xkZXJSZWN0LmxlZnRcblxuICAgICAgY29uc3QgdGFyZ2V0VG9wID0gZ2V0VGFyZ2V0ID8gdGFyZ2V0UmVjdC50b3AgOiAwXG4gICAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSBnZXRUYXJnZXQgPyB0YXJnZXRSZWN0LmhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBjb25zdCBhZmZpeFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBsZWZ0OiBkb2N1bWVudFJlY3RMZWZ0ICsgcGxhY2Vob2xkZXJSZWN0TGVmdCxcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgd2lkdGg6IGZpeGVkUmVjdC53aWR0aCxcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2V0U3R5bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChmaXhlZFJlY3Qud2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiBmaXhlZFJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGZpeGVkUmVjdC53aWR0aCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIOWmguaenOS8oOWFpeS6hiBvZmZzZXRCb3R0b23vvIzliJnkvJrlv73nlaUgb2Zmc2V0VG9wXG4gICAgICBpZiAoXG4gICAgICAgIG9mZnNldEJvdHRvbSAhPT0gbnVsbCAmJlxuICAgICAgICBvZmZzZXRCb3R0b20gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAhaXNOYU4ob2Zmc2V0Qm90dG9tKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChwbGFjZWhvbGRlclJlY3QuYm90dG9tID4gdGFyZ2V0SGVpZ2h0IC0gb2Zmc2V0Qm90dG9tKSB7XG4gICAgICAgICAgaWYgKGdldENvbnRhaW5lciAmJiBnZXRDb250YWluZXIoKSkge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGdldENvbnRhaW5lcigpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCBib3R0b20gPVxuICAgICAgICAgICAgICB0YXJnZXRIZWlnaHQgLSBjb250YWluZXJSZWN0LnRvcCAtIHBsYWNlaG9sZGVyUmVjdC5oZWlnaHRcbiAgICAgICAgICAgIGlmIChib3R0b20gPD0gb2Zmc2V0Qm90dG9tKSB7XG4gICAgICAgICAgICAgIGFmZml4U3R5bGUuYm90dG9tID1cbiAgICAgICAgICAgICAgICBib3R0b20gKyBwbGFjZWhvbGRlclJlY3QuaGVpZ2h0IDwgMFxuICAgICAgICAgICAgICAgICAgPyAtcGxhY2Vob2xkZXJSZWN0LmhlaWdodFxuICAgICAgICAgICAgICAgICAgOiBib3R0b21cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFmZml4U3R5bGUuYm90dG9tID0gb2Zmc2V0Qm90dG9tXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFmZml4U3R5bGUuYm90dG9tID0gb2Zmc2V0Qm90dG9tXG4gICAgICAgICAgfVxuICAgICAgICAgIHNldFN0eWxlKClcbiAgICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoYWZmaXhTdHlsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUobnVsbClcbiAgICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUobnVsbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwbGFjZWhvbGRlclJlY3QudG9wIDwgKG9mZnNldFRvcCB8fCAwKSArIHRhcmdldFRvcCkge1xuICAgICAgICBpZiAoZ2V0Q29udGFpbmVyICYmIGdldENvbnRhaW5lcigpKSB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGdldENvbnRhaW5lcigpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgY29uc3QgdG9wID1cbiAgICAgICAgICAgIGNvbnRhaW5lclJlY3QuaGVpZ2h0ICsgY29udGFpbmVyUmVjdC50b3AgLSBwbGFjZWhvbGRlclJlY3QuaGVpZ2h0XG4gICAgICAgICAgaWYgKG9mZnNldFRvcCAhPT0gdW5kZWZpbmVkICYmIHRvcCA8PSBvZmZzZXRUb3ApIHtcbiAgICAgICAgICAgIGFmZml4U3R5bGUudG9wID1cbiAgICAgICAgICAgICAgdG9wICsgcGxhY2Vob2xkZXJSZWN0LmhlaWdodCA8IDAgPyAtcGxhY2Vob2xkZXJSZWN0LmhlaWdodCA6IHRvcFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZmZpeFN0eWxlLnRvcCA9IHRhcmdldFRvcCArIChvZmZzZXRUb3AgfHwgMClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZmaXhTdHlsZS50b3AgPSB0YXJnZXRUb3AgKyAob2Zmc2V0VG9wIHx8IDApXG4gICAgICAgIH1cbiAgICAgICAgc2V0U3R5bGUoKVxuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoYWZmaXhTdHlsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShudWxsKVxuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUobnVsbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3luY1BsYWNlaG9sZGVyU3R5bGUgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpXG4gICAgY29uc3QgeyBhZmZpeFN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgLy8g5p2h5Lu25Yik5pat77yaXG4gICAgLy8gMS4g5q+P5qyh5L2/55SoIHJlZiDpg73opoHov5vooYzliKTmlq0gMi4g5Yik5pat5pyJIGFmZml4U3R5bGUg6K+05piO546w5Zyo5q2j5aSE5LqO5Zu65a6a54q25oCB5LitXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXJOb2RlICYmIGFmZml4U3R5bGUpIHtcbiAgICAgIGNvbnN0IHdpZHRoUHJldiA9IHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLndpZHRoXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5zdHlsZS53aWR0aCA9IFwiXCJcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5wbGFjZWhvbGRlck5vZGUub2Zmc2V0V2lkdGhcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZSh7XG4gICAgICAgIC4uLmFmZml4U3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfSlcbiAgICAgIGlmICh3aWR0aCkge1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUud2lkdGggPSB3aWR0aFByZXZcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2F2ZVBsYWNlaG9sZGVyTm9kZSA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVGaXhlZE5vZGUgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmZpeGVkTm9kZSA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdHlsZSwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImdldENvbnRhaW5lclwiLFxuICAgICAgXCJnZXRUYXJnZXRcIixcbiAgICAgIFwib2Zmc2V0Qm90dG9tXCIsXG4gICAgICBcIm9mZnNldFRvcFwiLFxuICAgICAgXCJvbkNoYW5nZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGFmZml4U3R5bGUsIHBsYWNlaG9sZGVyU3R5bGUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tYmFzZWApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e3RoaXMuc2F2ZVBsYWNlaG9sZGVyTm9kZX0gc3R5bGU9e3sgLi4ucGxhY2Vob2xkZXJTdHlsZSB9fT5cbiAgICAgICAgPFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAgb25SZXNpemU9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKVxuICAgICAgICAgICAgdGhpcy5zeW5jUGxhY2Vob2xkZXJTdHlsZSgpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZUZpeGVkTm9kZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLmFmZml4U3R5bGUsXG4gICAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Jlc2l6ZU9ic2VydmVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=