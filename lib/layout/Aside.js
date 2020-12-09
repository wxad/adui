"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("../button"));

var _affix = _interopRequireDefault(require("../affix"));

var _detectStickySupport = require("../_util/detectStickySupport");

var _preventOuterScroll = require("../_util/preventOuterScroll");

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-layout";

var Aside = function Aside(_ref) {
  var _classNames;

  var affixed = _ref.affixed,
      children = _ref.children,
      className = _ref.className,
      collapsed = _ref.collapsed,
      collapsible = _ref.collapsible,
      onCollapseChange = _ref.onCollapseChange,
      otherProps = _objectWithoutProperties(_ref, ["affixed", "children", "className", "collapsed", "collapsible", "onCollapseChange"]);

  var _useContext = (0, _react.useContext)(_Context.LayoutContext),
      headerAffixed = _useContext.headerAffixed;

  var asideRef = (0, _react.useRef)(null);
  var asideContentRef = (0, _react.useRef)(null);

  var handleScroll = function handleScroll() {
    if (asideRef !== null && asideRef !== void 0 && asideRef.current && affixed && headerAffixed) {
      asideRef.current.style.maxHeight = scrollY >= 0 && scrollY <= 72 ? "calc(100vh - ".concat(72 - scrollY, "px)") : "100vh";
    }
  };

  var handleCollapseChange = function handleCollapseChange(bool) {
    if (onCollapseChange) {
      onCollapseChange(bool);
    }
  };

  var bindScrollEvent = function bindScrollEvent() {
    if (affixed && !headerAffixed) {
      window.addEventListener("scroll", handleScroll);
    }
  };

  (0, _react.useEffect)(function () {
    setTimeout(bindScrollEvent, 0);

    if (asideContentRef !== null && asideContentRef !== void 0 && asideContentRef.current) {
      asideContentRef.current.addEventListener("wheel", _preventOuterScroll.preventOuterScroll, {
        passive: false
      });
    }

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  var offsetTop;

  if (affixed && headerAffixed) {
    offsetTop = 72;
  }

  if (affixed && !headerAffixed) {
    offsetTop = 0;
  }

  var asideContent = _react["default"].createElement("aside", _extends({
    className: (0, _classnames["default"])(className, "".concat(prefix, "-aside"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-aside_affixed"), affixed && headerAffixed), _defineProperty(_classNames, "".concat(prefix, "-aside_affixed_alone"), affixed && !headerAffixed), _defineProperty(_classNames, "".concat(prefix, "-aside_collapsed"), collapsed), _defineProperty(_classNames, "".concat(prefix, "-aside_collapsible"), collapsible), _classNames))
  }, otherProps, {
    ref: asideRef
  }), _react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(prefix, "-asideInner"))
  }, collapsible && _react["default"].createElement("div", {
    className: "".concat(prefix, "-asideBackButton"),
    onClick: function onClick() {
      return handleCollapseChange(true);
    },
    role: "none"
  }, _react["default"].createElement(_button["default"], {
    theme: "light",
    leftIcon: "arrow-back"
  })), _react["default"].createElement("div", {
    className: "".concat(prefix, "-asideContent"),
    ref: asideContentRef
  }, children)), _react["default"].createElement("div", {
    className: "".concat(prefix, "-asideMask"),
    onClick: function onClick() {
      return handleCollapseChange(true);
    },
    role: "none"
  }));

  if (affixed && !Aside.stickable) {
    return _react["default"].createElement(_affix["default"], {
      offsetTop: offsetTop
    }, asideContent);
  }

  return asideContent;
};

Aside.stickable = (0, _detectStickySupport.detectStickySupport)();
Aside.propTypes = {
  affixed: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  collapsed: _propTypes["default"].bool,
  collapsible: _propTypes["default"].bool,
  onCollapseChange: _propTypes["default"].func
};
Aside.defaultProps = {
  affixed: false,
  children: "",
  className: undefined,
  collapsed: false,
  collapsible: false,
  onCollapseChange: function onCollapseChange() {}
};
var _default = Aside;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FzaWRlLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJBc2lkZSIsImFmZml4ZWQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbGxhcHNlZCIsImNvbGxhcHNpYmxlIiwib25Db2xsYXBzZUNoYW5nZSIsIm90aGVyUHJvcHMiLCJMYXlvdXRDb250ZXh0IiwiaGVhZGVyQWZmaXhlZCIsImFzaWRlUmVmIiwiYXNpZGVDb250ZW50UmVmIiwiaGFuZGxlU2Nyb2xsIiwiY3VycmVudCIsInN0eWxlIiwibWF4SGVpZ2h0Iiwic2Nyb2xsWSIsImhhbmRsZUNvbGxhcHNlQ2hhbmdlIiwiYm9vbCIsImJpbmRTY3JvbGxFdmVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwicHJldmVudE91dGVyU2Nyb2xsIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvZmZzZXRUb3AiLCJhc2lkZUNvbnRlbnQiLCJzdGlja2FibGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsYUFBZjs7QUFpQ0EsSUFBTUMsS0FFTCxHQUFHLFNBRkVBLEtBRUYsT0FRZTtBQUFBOztBQUFBLE1BUGpCQyxPQU9pQixRQVBqQkEsT0FPaUI7QUFBQSxNQU5qQkMsUUFNaUIsUUFOakJBLFFBTWlCO0FBQUEsTUFMakJDLFNBS2lCLFFBTGpCQSxTQUtpQjtBQUFBLE1BSmpCQyxTQUlpQixRQUpqQkEsU0FJaUI7QUFBQSxNQUhqQkMsV0FHaUIsUUFIakJBLFdBR2lCO0FBQUEsTUFGakJDLGdCQUVpQixRQUZqQkEsZ0JBRWlCO0FB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Q0UsSUFBQSxTQUFTLFlBQUtILE1BQUwsZUFEWDtBQUVFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTWtCLG9CQUFvQixDQUFDLElBQUQsQ0FBMUI7QUFBQSxLQUZYO0FBR0UsSUFBQSxJQUFJLEVBQUM7QUFIUCxJQXhCRixDQURGOztBQWdDQSxNQUFJaEIsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQzRCLFNBQXRCLEVBQWlDO0FBQy9CLFdBQU8sZ0NBQUMsaUJBQUQ7QUFBTyxNQUFBLFNBQVMsRUFBRUY7QUFBbEIsT0FBOEJDLFlBQTlCLENBQVA7QUFDRDs7QUFDRCxTQUFPQSxZQUFQO0FBQ0QsQ0E1RkQ7O0FBOEZBM0IsS0FBSyxDQUFDNEIsU0FBTixHQUFrQiwrQ0FBbEI7QUFFQTVCLEtBQUssQ0FBQzZCLFNBQU4sR0FBa0I7QUFJaEI1QixFQUFBQSxPQUFPLEVBQUU2QixzQkFBVVosSUFKSDtBQVFoQmhCLEVBQUFBLFFBQVEsRUFBRTRCLHNCQUFVQyxJQVJKO0FBWWhCNUIsRUFBQUEsU0FBUyxFQUFFMkIsc0JBQVVFLE1BWkw7QUFnQmhCNUIsRUFBQUEsU0FBUyxFQUFFMEIsc0JBQVVaLElBaEJMO0FBb0JoQmIsRUFBQUEsV0FBVyxFQUFFeUIsc0JBQVVaLElBcEJQO0FBd0JoQlosRUFBQUEsZ0JBQWdCLEVBQUV3QixzQkFBVUc7QUF4QlosQ0FBbEI7QUEyQkFqQyxLQUFLLENBQUNrQyxZQUFOLEdBQXFCO0FBQ25CakMsRUFBQUEsT0FBTyxFQUFFLEtBRFU7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRSxFQUZTO0FBR25CQyxFQUFBQSxTQUFTLEVBQUVnQyxTQUhRO0FBSW5CL0IsRUFBQUEsU0FBUyxFQUFFLEtBSlE7QUFLbkJDLEVBQUFBLFdBQVcsRUFBRSxLQUxNO0FBTW5CQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFO0FBTlAsQ0FBckI7ZUFTZU4sSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiXG5pbXBvcnQgQWZmaXggZnJvbSBcIi4uL2FmZml4XCJcbmltcG9ydCB7IGRldGVjdFN0aWNreVN1cHBvcnQgfSBmcm9tIFwiLi4vX3V0aWwvZGV0ZWN0U3RpY2t5U3VwcG9ydFwiXG5pbXBvcnQgeyBwcmV2ZW50T3V0ZXJTY3JvbGwgfSBmcm9tIFwiLi4vX3V0aWwvcHJldmVudE91dGVyU2Nyb2xsXCJcbmltcG9ydCB7IExheW91dENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktbGF5b3V0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJQXNpZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm5Zu65a6aXG4gICAqL1xuICBhZmZpeGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuaUtui1t1xuICAgKi9cbiAgY29sbGFwc2VkPzogYm9vbGVhblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5pS26LW3XG4gICAqL1xuICBjb2xsYXBzaWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaUtui1t+eKtuaAgeWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNvbGxhcHNlQ2hhbmdlPzogKGNvbGxhcHNlZDogYm9vbGVhbikgPT4gdm9pZFxufVxuXG4vKipcbiAqIOW4g+WxgCAtIOS+p+i+ueagjyBgPGFzaWRlIC8+YFxuICovXG5jb25zdCBBc2lkZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUFzaWRlUHJvcHM+ICYge1xuICBzdGlja2FibGU6IGJvb2xlYW5cbn0gPSAoe1xuICBhZmZpeGVkLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBjb2xsYXBzZWQsXG4gIGNvbGxhcHNpYmxlLFxuICBvbkNvbGxhcHNlQ2hhbmdlLFxuICAuLi5vdGhlclByb3BzXG59OiBJQXNpZGVQcm9wcykgPT4ge1xuICBjb25zdCB7IGhlYWRlckFmZml4ZWQgfSA9IHVzZUNvbnRleHQoTGF5b3V0Q29udGV4dClcbiAgY29uc3QgYXNpZGVSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGFzaWRlQ29udGVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGFzaWRlUmVmPy5jdXJyZW50ICYmIGFmZml4ZWQgJiYgaGVhZGVyQWZmaXhlZCkge1xuICAgICAgYXNpZGVSZWYuY3VycmVudC5zdHlsZS5tYXhIZWlnaHQgPVxuICAgICAgICBzY3JvbGxZID49IDAgJiYgc2Nyb2xsWSA8PSA3MlxuICAgICAgICAgID8gYGNhbGMoMTAwdmggLSAkezcyIC0gc2Nyb2xsWX1weClgXG4gICAgICAgICAgOiBcIjEwMHZoXCJcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVDb2xsYXBzZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKG9uQ29sbGFwc2VDaGFuZ2UpIHtcbiAgICAgIG9uQ29sbGFwc2VDaGFuZ2UoYm9vbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBiaW5kU2Nyb2xsRXZlbnQgPSAoKSA9PiB7XG4gICAgaWYgKGFmZml4ZWQgJiYgIWhlYWRlckFmZml4ZWQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoYmluZFNjcm9sbEV2ZW50LCAwKVxuICAgIGlmIChhc2lkZUNvbnRlbnRSZWY/LmN1cnJlbnQpIHtcbiAgICAgIGFzaWRlQ29udGVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBwcmV2ZW50T3V0ZXJTY3JvbGwsIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgbGV0IG9mZnNldFRvcFxuICBpZiAoYWZmaXhlZCAmJiBoZWFkZXJBZmZpeGVkKSB7XG4gICAgb2Zmc2V0VG9wID0gNzJcbiAgfVxuICBpZiAoYWZmaXhlZCAmJiAhaGVhZGVyQWZmaXhlZCkge1xuICAgIG9mZnNldFRvcCA9IDBcbiAgfVxuXG4gIGNvbnN0IGFzaWRlQ29udGVudCA9IChcbiAgICA8YXNpZGVcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tYXNpZGVgLCB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWFzaWRlX2FmZml4ZWRgXTogYWZmaXhlZCAmJiBoZWFkZXJBZmZpeGVkLFxuICAgICAgICBbYCR7cHJlZml4fS1hc2lkZV9hZmZpeGVkX2Fsb25lYF06IGFmZml4ZWQgJiYgIWhlYWRlckFmZml4ZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWFzaWRlX2NvbGxhcHNlZGBdOiBjb2xsYXBzZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWFzaWRlX2NvbGxhcHNpYmxlYF06IGNvbGxhcHNpYmxlLFxuICAgICAgfSl9XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgIHJlZj17YXNpZGVSZWZ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1hc2lkZUlubmVyYCl9PlxuICAgICAgICB7Y29sbGFwc2libGUgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1hc2lkZUJhY2tCdXR0b25gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29sbGFwc2VDaGFuZ2UodHJ1ZSl9XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvbiB0aGVtZT1cImxpZ2h0XCIgbGVmdEljb249XCJhcnJvdy1iYWNrXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYXNpZGVDb250ZW50YH0gcmVmPXthc2lkZUNvbnRlbnRSZWZ9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWFzaWRlTWFza2B9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbGxhcHNlQ2hhbmdlKHRydWUpfVxuICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAvPlxuICAgIDwvYXNpZGU+XG4gIClcbiAgaWYgKGFmZml4ZWQgJiYgIUFzaWRlLnN0aWNrYWJsZSkge1xuICAgIHJldHVybiA8QWZmaXggb2Zmc2V0VG9wPXtvZmZzZXRUb3B9Pnthc2lkZUNvbnRlbnR9PC9BZmZpeD5cbiAgfVxuICByZXR1cm4gYXNpZGVDb250ZW50XG59XG5cbkFzaWRlLnN0aWNrYWJsZSA9IGRldGVjdFN0aWNreVN1cHBvcnQoKVxuXG5Bc2lkZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKblm7rlrppcbiAgICovXG4gIGFmZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuaUtui1t1xuICAgKi9cbiAgY29sbGFwc2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgeaUtui1t1xuICAgKi9cbiAgY29sbGFwc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5pS26LW354q25oCB5Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ29sbGFwc2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5Bc2lkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFmZml4ZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogXCJcIixcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGNvbGxhcHNlZDogZmFsc2UsXG4gIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgb25Db2xsYXBzZUNoYW5nZTogKCkgPT4ge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzaWRlXG4iXX0=