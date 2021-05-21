function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../button";
import Affix from "../affix";
import { detectStickySupport } from "../_util/detectStickySupport";
import { preventOuterScroll } from "../_util/preventOuterScroll";
import { LayoutContext } from "./Context";
import "./style";
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

  var _useContext = useContext(LayoutContext),
      headerAffixed = _useContext.headerAffixed;

  var asideRef = useRef(null);
  var asideContentRef = useRef(null);

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

  useEffect(function () {
    setTimeout(bindScrollEvent, 0);

    if (asideContentRef !== null && asideContentRef !== void 0 && asideContentRef.current) {
      asideContentRef.current.addEventListener("wheel", preventOuterScroll, {
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

  var asideContent = React.createElement("aside", _extends({
    className: classNames(className, "".concat(prefix, "-aside"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-aside_affixed"), affixed && headerAffixed), _defineProperty(_classNames, "".concat(prefix, "-aside_affixed_alone"), affixed && !headerAffixed), _defineProperty(_classNames, "".concat(prefix, "-aside_collapsed"), collapsed), _defineProperty(_classNames, "".concat(prefix, "-aside_collapsible"), collapsible), _classNames))
  }, otherProps, {
    ref: asideRef
  }), React.createElement("div", {
    className: classNames("".concat(prefix, "-asideInner"))
  }, collapsible && React.createElement("div", {
    className: "".concat(prefix, "-asideBackButton"),
    onClick: function onClick() {
      return handleCollapseChange(true);
    },
    role: "none"
  }, React.createElement(Button, {
    theme: "light",
    leftIcon: "arrow-back"
  })), React.createElement("div", {
    className: "".concat(prefix, "-asideContent"),
    ref: asideContentRef
  }, children)), React.createElement("div", {
    className: "".concat(prefix, "-asideMask"),
    onClick: function onClick() {
      return handleCollapseChange(true);
    },
    role: "none"
  }));

  if (affixed && !Aside.stickable) {
    return React.createElement(Affix, {
      offsetTop: offsetTop
    }, asideContent);
  }

  return asideContent;
};

Aside.stickable = detectStickySupport();
Aside.propTypes = {
  affixed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  collapsible: PropTypes.bool,
  onCollapseChange: PropTypes.func
};
Aside.defaultProps = {
  affixed: false,
  children: "",
  className: undefined,
  collapsed: false,
  collapsible: false,
  onCollapseChange: function onCollapseChange() {}
};
export default Aside;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FzaWRlLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQnV0dG9uIiwiQWZmaXgiLCJkZXRlY3RTdGlja3lTdXBwb3J0IiwicHJldmVudE91dGVyU2Nyb2xsIiwiTGF5b3V0Q29udGV4dCIsInByZWZpeCIsIkFzaWRlIiwiYWZmaXhlZCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29sbGFwc2VkIiwiY29sbGFwc2libGUiLCJvbkNvbGxhcHNlQ2hhbmdlIiwib3RoZXJQcm9wcyIsImhlYWRlckFmZml4ZWQiLCJhc2lkZVJlZiIsImFzaWRlQ29udGVudFJlZiIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnQiLCJzdHlsZSIsIm1heEhlaWdodCIsInNjcm9sbFkiLCJoYW5kbGVDb2xsYXBzZUNoYW5nZSIsImJvb2wiLCJiaW5kU2Nyb2xsRXZlbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2Zmc2V0VG9wIiwiYXNpZGVDb250ZW50Iiwic3RpY2thYmxlIiwicHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLFNBQTVCLEVBQXVDQyxNQUF2QyxRQUFxRCxPQUFyRDtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixXQUFuQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsVUFBbEI7QUFDQSxTQUFTQyxtQkFBVCxRQUFvQyw4QkFBcEM7QUFDQSxTQUFTQyxrQkFBVCxRQUFtQyw2QkFB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YixTQUFTLENBQUN5QixJQXBCUDtBQXdCaEJYLEVBQUFBLGdCQUFnQixFQUFFZCxTQUFTLENBQUNzQztBQXhCWixDQUFsQjtBQTJCQTlCLEtBQUssQ0FBQytCLFlBQU4sR0FBcUI7QUFDbkI5QixFQUFBQSxPQUFPLEVBQUUsS0FEVTtBQUVuQkMsRUFBQUEsUUFBUSxFQUFFLEVBRlM7QUFHbkJDLEVBQUFBLFNBQVMsRUFBRTZCLFNBSFE7QUFJbkI1QixFQUFBQSxTQUFTLEVBQUUsS0FKUTtBQUtuQkMsRUFBQUEsV0FBVyxFQUFFLEtBTE07QUFNbkJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUU7QUFOUCxDQUFyQjtBQVNBLGVBQWVOLEtBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IEFmZml4IGZyb20gXCIuLi9hZmZpeFwiXG5pbXBvcnQgeyBkZXRlY3RTdGlja3lTdXBwb3J0IH0gZnJvbSBcIi4uL191dGlsL2RldGVjdFN0aWNreVN1cHBvcnRcIlxuaW1wb3J0IHsgcHJldmVudE91dGVyU2Nyb2xsIH0gZnJvbSBcIi4uL191dGlsL3ByZXZlbnRPdXRlclNjcm9sbFwiXG5pbXBvcnQgeyBMYXlvdXRDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWxheW91dFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFzaWRlUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpuWbuuWumlxuICAgKi9cbiAgYWZmaXhlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbmlLbotbdcbiAgICovXG4gIGNvbGxhcHNlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgeaUtui1t1xuICAgKi9cbiAgY29sbGFwc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmlLbotbfnirbmgIHlj5jljJbml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25Db2xsYXBzZUNoYW5nZT86IChjb2xsYXBzZWQ6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuLyoqXG4gKiDluIPlsYAgLSDkvqfovrnmoI8gYDxhc2lkZSAvPmBcbiAqL1xuY29uc3QgQXNpZGU6IFJlYWN0LkZDPElBc2lkZVByb3BzPiAmIHtcbiAgc3RpY2thYmxlOiBib29sZWFuXG59ID0gKHtcbiAgYWZmaXhlZCxcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgY29sbGFwc2VkLFxuICBjb2xsYXBzaWJsZSxcbiAgb25Db2xsYXBzZUNoYW5nZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSUFzaWRlUHJvcHMpID0+IHtcbiAgY29uc3QgeyBoZWFkZXJBZmZpeGVkIH0gPSB1c2VDb250ZXh0KExheW91dENvbnRleHQpXG4gIGNvbnN0IGFzaWRlUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKVxuICBjb25zdCBhc2lkZUNvbnRlbnRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmIChhc2lkZVJlZj8uY3VycmVudCAmJiBhZmZpeGVkICYmIGhlYWRlckFmZml4ZWQpIHtcbiAgICAgIGFzaWRlUmVmLmN1cnJlbnQuc3R5bGUubWF4SGVpZ2h0ID1cbiAgICAgICAgc2Nyb2xsWSA+PSAwICYmIHNjcm9sbFkgPD0gNzJcbiAgICAgICAgICA/IGBjYWxjKDEwMHZoIC0gJHs3MiAtIHNjcm9sbFl9cHgpYFxuICAgICAgICAgIDogXCIxMDB2aFwiXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29sbGFwc2VDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgIGlmIChvbkNvbGxhcHNlQ2hhbmdlKSB7XG4gICAgICBvbkNvbGxhcHNlQ2hhbmdlKGJvb2wpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYmluZFNjcm9sbEV2ZW50ID0gKCkgPT4ge1xuICAgIGlmIChhZmZpeGVkICYmICFoZWFkZXJBZmZpeGVkKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KGJpbmRTY3JvbGxFdmVudCwgMClcbiAgICBpZiAoYXNpZGVDb250ZW50UmVmPy5jdXJyZW50KSB7XG4gICAgICBhc2lkZUNvbnRlbnRSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgcHJldmVudE91dGVyU2Nyb2xsLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGxldCBvZmZzZXRUb3BcbiAgaWYgKGFmZml4ZWQgJiYgaGVhZGVyQWZmaXhlZCkge1xuICAgIG9mZnNldFRvcCA9IDcyXG4gIH1cbiAgaWYgKGFmZml4ZWQgJiYgIWhlYWRlckFmZml4ZWQpIHtcbiAgICBvZmZzZXRUb3AgPSAwXG4gIH1cblxuICBjb25zdCBhc2lkZUNvbnRlbnQgPSAoXG4gICAgPGFzaWRlXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWFzaWRlYCwge1xuICAgICAgICBbYCR7cHJlZml4fS1hc2lkZV9hZmZpeGVkYF06IGFmZml4ZWQgJiYgaGVhZGVyQWZmaXhlZCxcbiAgICAgICAgW2Ake3ByZWZpeH0tYXNpZGVfYWZmaXhlZF9hbG9uZWBdOiBhZmZpeGVkICYmICFoZWFkZXJBZmZpeGVkLFxuICAgICAgICBbYCR7cHJlZml4fS1hc2lkZV9jb2xsYXBzZWRgXTogY29sbGFwc2VkLFxuICAgICAgICBbYCR7cHJlZml4fS1hc2lkZV9jb2xsYXBzaWJsZWBdOiBjb2xsYXBzaWJsZSxcbiAgICAgIH0pfVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICByZWY9e2FzaWRlUmVmfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tYXNpZGVJbm5lcmApfT5cbiAgICAgICAge2NvbGxhcHNpYmxlICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYXNpZGVCYWNrQnV0dG9uYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbGxhcHNlQ2hhbmdlKHRydWUpfVxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b24gdGhlbWU9XCJsaWdodFwiIGxlZnRJY29uPVwiYXJyb3ctYmFja1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWFzaWRlQ29udGVudGB9IHJlZj17YXNpZGVDb250ZW50UmVmfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1hc2lkZU1hc2tgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb2xsYXBzZUNoYW5nZSh0cnVlKX1cbiAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgLz5cbiAgICA8L2FzaWRlPlxuICApXG4gIGlmIChhZmZpeGVkICYmICFBc2lkZS5zdGlja2FibGUpIHtcbiAgICByZXR1cm4gPEFmZml4IG9mZnNldFRvcD17b2Zmc2V0VG9wfT57YXNpZGVDb250ZW50fTwvQWZmaXg+XG4gIH1cbiAgcmV0dXJuIGFzaWRlQ29udGVudFxufVxuXG5Bc2lkZS5zdGlja2FibGUgPSBkZXRlY3RTdGlja3lTdXBwb3J0KClcblxuQXNpZGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm5Zu65a6aXG4gICAqL1xuICBhZmZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbmlLbotbdcbiAgICovXG4gIGNvbGxhcHNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmlLbotbdcbiAgICovXG4gIGNvbGxhcHNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOaUtui1t+eKtuaAgeWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNvbGxhcHNlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn1cblxuQXNpZGUuZGVmYXVsdFByb3BzID0ge1xuICBhZmZpeGVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IFwiXCIsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjb2xsYXBzZWQ6IGZhbHNlLFxuICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gIG9uQ29sbGFwc2VDaGFuZ2U6ICgpID0+IHt9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBc2lkZVxuIl19