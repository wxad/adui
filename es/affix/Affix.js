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
      }, React.createElement("div", _extends({
        className: classSet,
        ref: this.saveFixedNode,
        style: _objectSpread(_objectSpread({}, affixStyle), style)
      }, restProps), children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYWZmaXgvQWZmaXgudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInNoYWxsb3dlcXVhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsIm9taXQiLCJwcmVmaXgiLCJBZmZpeCIsInByb3BzIiwiZml4ZWROb2RlIiwicGxhY2Vob2xkZXJOb2RlIiwiZGVib3VuY2VkV2luZG93UmVzaXplIiwic2Nyb2xsRXZlbnRIYW5kbGVyIiwid2luZG93UmVzaXplRXZlbnRIYW5kbGVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJ1cGRhdGVQb3NpdGlvbiIsInN5bmNQbGFjZWhvbGRlclN0eWxlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmUiLCJjbGVhciIsInNldEFmZml4U3R5bGUiLCJuZXdBZmZpeFN0eWxlIiwib25DaGFuZ2UiLCJhZmZpeFN0eWxlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInNldFBsYWNlaG9sZGVyU3R5bGUiLCJuZXdQbGFjZWhvbGRlclN0eWxlIiwicGxhY2Vob2xkZXJTdHlsZSIsImdldENvbnRhaW5lciIsIm9mZnNldEJvdHRvbSIsIm9mZnNldFRvcCIsImRvY3VtZW50UmVjdCIsImRvY3VtZW50IiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBsYWNlaG9sZGVyUmVjdCIsImZpeGVkUmVjdCIsInRhcmdldFJlY3QiLCJkb2N1bWVudFJlY3RMZWZ0IiwibGVmdCIsInBsYWNlaG9sZGVyUmVjdExlZnQiLCJ0YXJnZXRUb3AiLCJ0b3AiLCJ0YXJnZXRIZWlnaHQiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwid2lkdGgiLCJzZXRTdHlsZSIsInVuZGVmaW5lZCIsImlzTmFOIiwiYm90dG9tIiwiY29udGFpbmVyUmVjdCIsIndpZHRoUHJldiIsInN0eWxlIiwib2Zmc2V0V2lkdGgiLCJzYXZlUGxhY2Vob2xkZXJOb2RlIiwibm9kZSIsInNhdmVGaXhlZE5vZGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm90aGVyUHJvcHMiLCJyZXN0UHJvcHMiLCJjbGFzc1NldCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJudW1iZXIiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsY0FBekI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixrQ0FBN0I7QUFDQSxTQUFTQyxRQUFULFFBQXlCLFVBQXpCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixlQUFqQjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxZQUFmOztJQXNCcUJDLEs7Ozs7O0FBeURuQixpQkFBWUMsTUFBWixFQUFnQztBQUFBOztBQUFBOztBQUM5Qiw4QkFBTUEsTUFBTjtBQUQ4QixVQVZ6QkMsU0FVeUI7QUFBQSxVQVJ6QkMsZUFReUI7QUFBQSxVQU54QkMscUJBTXdCO0FBQUEsVUFKeEJDLGtCQUl3QjtBQUFBLFVBRnhCQyx3QkFFd0I7O0FBQUEsVUFTekJDLGlCQVR5QixHQVNMLFlBQU07QUFBQSxVQUN2QkMsU0FEdUIsR0FDVCxNQUFLUCxLQURJLENBQ3ZCTyxTQUR1QjtBQUUvQixVQUFNQyxNQUFNLEdBQUdELFNBQVMsR0FBR0EsU0FBUyxFQUFaLEdBQWlCRSxNQUF6QztBQUNBLFlBQUtMLGtCQUFMLEdBQTBCVCxnQkFBZ0IsQ0FDeENhLE1BRHdDLEVBRXhDLFFBRndDLEVBR3hDLE1BQUtFLGNBSG1DLENBQTFDO0FBS0EsWUFBS0wsd0JBQUwsR0FBZ0NWLGdCQUFnQixDQUM5Q2MsTUFEOEMsRUFFOUMs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QUFFakMsU0FBUyxDQUFDd0UsTUFwQkE7QUF3QnhCdEMsRUFBQUEsU0FBUyxFQUFFbEMsU0FBUyxDQUFDd0UsTUF4Qkc7QUE0QnhCL0MsRUFBQUEsUUFBUSxFQUFFekIsU0FBUyxDQUFDdUUsSUE1Qkk7QUFnQ3hCYixFQUFBQSxLQUFLLEVBQUUxRCxTQUFTLENBQUN5RTtBQWhDTyxDO0FBRFBsRSxLLENBb0NMbUUsWSxHQUE0QjtBQUN4Q1gsRUFBQUEsUUFBUSxFQUFFLEVBRDhCO0FBRXhDQyxFQUFBQSxTQUFTLEVBQUVYLFNBRjZCO0FBR3hDckIsRUFBQUEsWUFBWSxFQUFFLElBSDBCO0FBSXhDakIsRUFBQUEsU0FBUyxFQUFFLElBSjZCO0FBS3hDa0IsRUFBQUEsWUFBWSxFQUFFLElBTDBCO0FBTXhDQyxFQUFBQSxTQUFTLEVBQUUsQ0FONkI7QUFPeENULEVBQUFBLFFBQVEsRUFBRSxJQVA4QjtBQVF4Q2lDLEVBQUFBLEtBQUssRUFBRTtBQVJpQyxDO1NBcEN2Qm5ELEsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFmZml4IOe7hOS7tuWwhuS4jeS8muS/ruaUueaIkCBGdW5jdGlvbkNvbXBvbmVudO+8jFxuICog5Zug5Li65oiR77yIWWlqaWXvvInlsJ3or5Xov4flj5HnjrDkvJrkuIDnm7Top6blj5Egb25DaGFuZ2UsIGFmZml4U3R5bGUg5piO5piO5pyJ77yM5L2G5piv5ZyoIG9uQ2hhbmdlIOaXtuS4gOebtOaYryB1bmRlZmluZWRcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHNoYWxsb3dlcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJkZWJvdW5jZVwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWFmZml4XCJcblxuZXhwb3J0IGludGVyZmFjZSBJQWZmaXhQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZ2V0Q29udGFpbmVyPzogKCgpID0+IEhUTUxFbGVtZW50KSB8IG51bGxcbiAgZ2V0VGFyZ2V0PzogKCgpID0+IEhUTUxFbGVtZW50KSB8IG51bGxcbiAgb2Zmc2V0Qm90dG9tPzogbnVtYmVyIHwgbnVsbFxuICBvZmZzZXRUb3A/OiBudW1iZXJcbiAgb25DaGFuZ2U/OiAoKGFmZml4ZWQ6IGJvb2xlYW4pID0+IHZvaWQpIHwgbnVsbFxuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWZmaXhTdGF0ZSB7XG4gIGFmZml4U3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgbnVsbFxuICBwbGFjZWhvbGRlclN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcyB8IG51bGxcbn1cblxuLyoqXG4gKiDlm7rpkolcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWZmaXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUFmZml4UHJvcHMsIElBZmZpeFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICogKCkgPT4gSFRNTEVsZW1lbnQg5Zu66ZKJ55qE5pi+56S65Yy65Z+f77yM5rC46L+c5Lya5Zyo5q2k5pa55rOV5Lyg5Zue55qE5YWD57Sg5YaFXG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiAoKSA9PiBIVE1MRWxlbWVudCDnm5HlkKzmu5rliqjnmoTlhYPntKDvvIzpu5jorqTlnKggd2luZG93IOS4ilxuICAgICAqL1xuICAgIGdldFRhcmdldDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+R77yM5aaC5p6c5Lyg5YWl5LqGIG9mZnNldEJvdHRvbe+8jEFmZml4IOS8muW/veeVpSBvZmZzZXRUb3BcbiAgICAgKi9cbiAgICBvZmZzZXRCb3R0b206IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+RXG4gICAgICovXG4gICAgb2Zmc2V0VG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWbuuWumueKtuaAgeaUueWPmOaXtueahCBoYW5kbGVyXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOagt+W8j1xuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElBZmZpeFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBcIlwiLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGdldENvbnRhaW5lcjogbnVsbCxcbiAgICBnZXRUYXJnZXQ6IG51bGwsXG4gICAgb2Zmc2V0Qm90dG9tOiBudWxsLFxuICAgIG9mZnNldFRvcDogMCxcbiAgICBvbkNoYW5nZTogbnVsbCxcbiAgICBzdHlsZToge30sXG4gIH1cblxuICBwdWJsaWMgZml4ZWROb2RlOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyBwbGFjZWhvbGRlck5vZGU6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHJpdmF0ZSBkZWJvdW5jZWRXaW5kb3dSZXNpemU6IGFueVxuXG4gIHByaXZhdGUgc2Nyb2xsRXZlbnRIYW5kbGVyOiBhbnlcblxuICBwcml2YXRlIHdpbmRvd1Jlc2l6ZUV2ZW50SGFuZGxlcjogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElBZmZpeFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFmZml4U3R5bGU6IHVuZGVmaW5lZCxcbiAgICAgIHBsYWNlaG9sZGVyU3R5bGU6IHVuZGVmaW5lZCxcbiAgICB9XG4gICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUgPSBkZWJvdW5jZSh0aGlzLnN5bmNQbGFjZWhvbGRlclN0eWxlLCAxMDAsIG51bGwpXG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBnZXRUYXJnZXQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRUYXJnZXQgPyBnZXRUYXJnZXQoKSA6IHdpbmRvd1xuICAgIHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIHRhcmdldCxcbiAgICAgIFwic2Nyb2xsXCIsXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uXG4gICAgKVxuICAgIHRoaXMud2luZG93UmVzaXplRXZlbnRIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIHdpbmRvdyxcbiAgICAgIFwicmVzaXplXCIsXG4gICAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZVxuICAgIClcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKClcbiAgICB0aGlzLnN5bmNQbGFjZWhvbGRlclN0eWxlKClcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zY3JvbGxFdmVudEhhbmRsZXIpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRXZlbnRIYW5kbGVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLndpbmRvd1Jlc2l6ZUV2ZW50SGFuZGxlcikge1xuICAgICAgdGhpcy53aW5kb3dSZXNpemVFdmVudEhhbmRsZXIucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKSB7XG4gICAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZS5jbGVhcigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEFmZml4U3R5bGUgPSAobmV3QWZmaXhTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyB8IG51bGwpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBhZmZpeFN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFzaGFsbG93ZXF1YWwoYWZmaXhTdHlsZSwgbmV3QWZmaXhTdHlsZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZmZpeFN0eWxlOiBuZXdBZmZpeFN0eWxlIH0pXG4gICAgfVxuICAgIGlmICghIWFmZml4U3R5bGUgIT09ICEhbmV3QWZmaXhTdHlsZSAmJiBvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoISFuZXdBZmZpeFN0eWxlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRQbGFjZWhvbGRlclN0eWxlID0gKFxuICAgIG5ld1BsYWNlaG9sZGVyU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCBudWxsXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgcGxhY2Vob2xkZXJTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghc2hhbGxvd2VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG5ld1BsYWNlaG9sZGVyU3R5bGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGxhY2Vob2xkZXJTdHlsZTogbmV3UGxhY2Vob2xkZXJTdHlsZSB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IGZpeGVkTm9kZSwgcGxhY2Vob2xkZXJOb2RlLCBwcm9wcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgZ2V0Q29udGFpbmVyLCBnZXRUYXJnZXQsIG9mZnNldEJvdHRvbSwgb2Zmc2V0VG9wIH0gPSBwcm9wc1xuICAgIGNvbnN0IHRhcmdldCA9IGdldFRhcmdldCA/IGdldFRhcmdldCgpIDogd2luZG93XG5cbiAgICAvLyDmr4/mrKHkvb/nlKggcmVmIOmDveimgei/m+ihjOWIpOaWrVxuICAgIGlmICh0YXJnZXQgJiYgcGxhY2Vob2xkZXJOb2RlICYmIGZpeGVkTm9kZSkge1xuICAgICAgLy8gZG9jdW1lbnRSZWN0IOaYr+S4gOWumumcgOimgeeahO+8jOS4uuS6huiuvue9ruato+ehrueahCBsZWZ0IOWAvFxuICAgICAgY29uc3QgZG9jdW1lbnRSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgcGxhY2Vob2xkZXJSZWN0ID0gcGxhY2Vob2xkZXJOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCBmaXhlZFJlY3QgPSBmaXhlZE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgLy8g5Yik5pat5piv5ZCm5pivIHdpbmRvd1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IGdldFRhcmdldFxuICAgICAgICA/IGdldFRhcmdldCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIDogZG9jdW1lbnRSZWN0XG4gICAgICBjb25zdCBkb2N1bWVudFJlY3RMZWZ0ID0gZG9jdW1lbnRSZWN0LmxlZnRcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyUmVjdExlZnQgPSBwbGFjZWhvbGRlclJlY3QubGVmdFxuXG4gICAgICBjb25zdCB0YXJnZXRUb3AgPSBnZXRUYXJnZXQgPyB0YXJnZXRSZWN0LnRvcCA6IDBcbiAgICAgIGNvbnN0IHRhcmdldEhlaWdodCA9IGdldFRhcmdldCA/IHRhcmdldFJlY3QuaGVpZ2h0IDogd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAgIGNvbnN0IGFmZml4U3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGxlZnQ6IGRvY3VtZW50UmVjdExlZnQgKyBwbGFjZWhvbGRlclJlY3RMZWZ0LFxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICB3aWR0aDogZml4ZWRSZWN0LndpZHRoLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBzZXRTdHlsZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGZpeGVkUmVjdC53aWR0aCkge1xuICAgICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XG4gICAgICAgICAgICBoZWlnaHQ6IGZpeGVkUmVjdC5oZWlnaHQsXG4gICAgICAgICAgICB3aWR0aDogZml4ZWRSZWN0LndpZHRoLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8g5aaC5p6c5Lyg5YWl5LqGIG9mZnNldEJvdHRvbe+8jOWImeS8muW/veeVpSBvZmZzZXRUb3BcbiAgICAgIGlmIChcbiAgICAgICAgb2Zmc2V0Qm90dG9tICE9PSBudWxsICYmXG4gICAgICAgIG9mZnNldEJvdHRvbSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICFpc05hTihvZmZzZXRCb3R0b20pXG4gICAgICApIHtcbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyUmVjdC5ib3R0b20gPiB0YXJnZXRIZWlnaHQgLSBvZmZzZXRCb3R0b20pIHtcbiAgICAgICAgICBpZiAoZ2V0Q29udGFpbmVyICYmIGdldENvbnRhaW5lcigpKSB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gZ2V0Q29udGFpbmVyKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9XG4gICAgICAgICAgICAgIHRhcmdldEhlaWdodCAtIGNvbnRhaW5lclJlY3QudG9wIC0gcGxhY2Vob2xkZXJSZWN0LmhlaWdodFxuICAgICAgICAgICAgaWYgKGJvdHRvbSA8PSBvZmZzZXRCb3R0b20pIHtcbiAgICAgICAgICAgICAgYWZmaXhTdHlsZS5ib3R0b20gPVxuICAgICAgICAgICAgICAgIGJvdHRvbSArIHBsYWNlaG9sZGVyUmVjdC5oZWlnaHQgPCAwXG4gICAgICAgICAgICAgICAgICA/IC1wbGFjZWhvbGRlclJlY3QuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICA6IGJvdHRvbVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWZmaXhTdHlsZS5ib3R0b20gPSBvZmZzZXRCb3R0b21cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWZmaXhTdHlsZS5ib3R0b20gPSBvZmZzZXRCb3R0b21cbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0U3R5bGUoKVxuICAgICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShhZmZpeFN0eWxlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShudWxsKVxuICAgICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZShudWxsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlaG9sZGVyUmVjdC50b3AgPCAob2Zmc2V0VG9wIHx8IDApICsgdGFyZ2V0VG9wKSB7XG4gICAgICAgIGlmIChnZXRDb250YWluZXIgJiYgZ2V0Q29udGFpbmVyKCkpIHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0ID0gZ2V0Q29udGFpbmVyKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICBjb25zdCB0b3AgPVxuICAgICAgICAgICAgY29udGFpbmVyUmVjdC5oZWlnaHQgKyBjb250YWluZXJSZWN0LnRvcCAtIHBsYWNlaG9sZGVyUmVjdC5oZWlnaHRcbiAgICAgICAgICBpZiAob2Zmc2V0VG9wICE9PSB1bmRlZmluZWQgJiYgdG9wIDw9IG9mZnNldFRvcCkge1xuICAgICAgICAgICAgYWZmaXhTdHlsZS50b3AgPVxuICAgICAgICAgICAgICB0b3AgKyBwbGFjZWhvbGRlclJlY3QuaGVpZ2h0IDwgMCA/IC1wbGFjZWhvbGRlclJlY3QuaGVpZ2h0IDogdG9wXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFmZml4U3R5bGUudG9wID0gdGFyZ2V0VG9wICsgKG9mZnNldFRvcCB8fCAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZmZpeFN0eWxlLnRvcCA9IHRhcmdldFRvcCArIChvZmZzZXRUb3AgfHwgMClcbiAgICAgICAgfVxuICAgICAgICBzZXRTdHlsZSgpXG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShhZmZpeFN0eWxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKG51bGwpXG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZShudWxsKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzeW5jUGxhY2Vob2xkZXJTdHlsZSA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKClcbiAgICBjb25zdCB7IGFmZml4U3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICAvLyDmnaHku7bliKTmlq3vvJpcbiAgICAvLyAxLiDmr4/mrKHkvb/nlKggcmVmIOmDveimgei/m+ihjOWIpOaWrSAyLiDliKTmlq3mnIkgYWZmaXhTdHlsZSDor7TmmI7njrDlnKjmraPlpITkuo7lm7rlrprnirbmgIHkuK1cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlck5vZGUgJiYgYWZmaXhTdHlsZSkge1xuICAgICAgY29uc3Qgd2lkdGhQcmV2ID0gdGhpcy5wbGFjZWhvbGRlck5vZGUuc3R5bGUud2lkdGhcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJOb2RlLnN0eWxlLndpZHRoID0gXCJcIlxuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnBsYWNlaG9sZGVyTm9kZS5vZmZzZXRXaWR0aFxuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKHtcbiAgICAgICAgLi4uYWZmaXhTdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9KVxuICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyTm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoUHJldlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYXZlUGxhY2Vob2xkZXJOb2RlID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFjZWhvbGRlck5vZGUgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZUZpeGVkTm9kZSA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZml4ZWROb2RlID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHN0eWxlLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiZ2V0Q29udGFpbmVyXCIsXG4gICAgICBcImdldFRhcmdldFwiLFxuICAgICAgXCJvZmZzZXRCb3R0b21cIixcbiAgICAgIFwib2Zmc2V0VG9wXCIsXG4gICAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgYWZmaXhTdHlsZSwgcGxhY2Vob2xkZXJTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS1iYXNlYClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17dGhpcy5zYXZlUGxhY2Vob2xkZXJOb2RlfSBzdHlsZT17eyAuLi5wbGFjZWhvbGRlclN0eWxlIH19PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICByZWY9e3RoaXMuc2F2ZUZpeGVkTm9kZX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uYWZmaXhTdHlsZSxcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==