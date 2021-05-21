function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ConfigContext, getComputedSize } from "../config-provider";
import Tab from "./Tab";
import { TabsContext } from "./Context";
import "./style";
var prefix = "adui-channels-tabs";
var Tabs = forwardRef(function (_ref, ref) {
  var _classNames;

  var banner = _ref.banner,
      className = _ref.className,
      children = _ref.children,
      defaultValue = _ref.defaultValue,
      disabled = _ref.disabled,
      gutter = _ref.gutter,
      onChange = _ref.onChange,
      size = _ref.size,
      valueProp = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["banner", "className", "children", "defaultValue", "disabled", "gutter", "onChange", "size", "value"]);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      indicatorStyle = _useState2[0],
      setIndicatorStyle = _useState2[1];

  var _useState3 = useState(function () {
    var val;

    if (valueProp !== null && valueProp !== undefined) {
      val = valueProp;
    } else if (defaultValue !== null && defaultValue !== undefined) {
      val = defaultValue;
    }

    return val;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  if (valueProp !== null && value !== valueProp) {
    setValue(valueProp);
  }

  var tabsRef = useRef(null);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var updateIndicatorStyle = function updateIndicatorStyle() {
    setTimeout(function () {
      if (tabsRef && tabsRef.current) {
        var theActiveTab = tabsRef.current.querySelector('[aria-selected="true"]');

        if (theActiveTab) {
          var clientWidth = theActiveTab.clientWidth,
              offsetLeft = theActiveTab.offsetLeft;
          setIndicatorStyle({
            transform: "translateX(".concat(Math.floor(offsetLeft), "px)"),
            width: clientWidth
          });
        } else {
          setIndicatorStyle({
            opacity: 0
          });
        }
      }
    }, 0);
  };

  useImperativeHandle(ref, function () {
    return {
      updateIndicatorStyle: updateIndicatorStyle,
      getDomNode: function getDomNode() {
        return tabsRef.current;
      }
    };
  });

  var handleTabsValueChange = function handleTabsValueChange(val) {
    if (valueProp === null) {
      setValue(val);
    }

    if (onChange) {
      onChange(val);
    }
  };

  useEffect(function () {
    updateIndicatorStyle();
  }, [value]);
  var classSet = classNames(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(getComputedSize(size, sizeContext)), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-banner"), banner), _defineProperty(_classNames, "".concat(prefix, "-base_disabled"), disabled), _classNames));
  return React.createElement(TabsContext.Provider, {
    value: {
      disabled: disabled,
      gutter: gutter,
      handleTabsValueChange: handleTabsValueChange,
      value: value
    }
  }, React.createElement("div", _extends({
    className: classSet,
    "data-value": value,
    ref: tabsRef
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-indicator"),
    style: indicatorStyle
  }), children));
});
Tabs.Tab = Tab;
Tabs.propTypes = {
  banner: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  gutter: PropTypes.number,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Tabs.defaultProps = {
  banner: false,
  className: undefined,
  defaultValue: null,
  disabled: false,
  gutter: undefined,
  onChange: function onChange() {},
  size: "large",
  value: null
};
export default Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtdGFicy9UYWJzLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZVJlZiIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsIkNvbmZpZ0NvbnRleHQiLCJnZXRDb21wdXRlZFNpemUiLCJUYWIiLCJUYWJzQ29udGV4dCIsInByZWZpeCIsIlRhYnMiLCJyZWYiLCJiYW5uZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiZ3V0dGVyIiwib25DaGFuZ2UiLCJzaXplIiwidmFsdWVQcm9wIiwidmFsdWUiLCJvdGhlclByb3BzIiwiaW5kaWNhdG9yU3R5bGUiLCJzZXRJbmRpY2F0b3JTdHlsZSIsInZhbCIsInVuZGVmaW5lZCIsInNldFZhbHVlIiwidGFic1JlZiIsInNpemVDb250ZXh0IiwidXBkYXRlSW5kaWNhdG9yU3R5bGUiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInRoZUFjdGl2ZVRhYiIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRXaWR0aCIsIm9mZnNldExlZnQiLCJ0cmFuc2Zvcm0iLCJNYXRoIiwiZmxvb3IiLCJ3aWR0aCIsIm9wYWNpdHkiLCJnZXREb21Ob2RlIiwiaGFuZGxlVGFic1ZhbHVlQ2hhbmdlIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJmdW5jIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUNFQyxVQURGLEVBRUVDLFVBRkYsRUFHRUMsU0FIRixFQUlFQyxtQkFKRixFQUtFQyxNQUxGLEVBTUVDLFFBTkYsUUFPTyxPQVBQO0FBUUEs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b250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFRhYiBmcm9tIFwiLi9UYWJcIlxuaW1wb3J0IHsgVGFic0NvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtdGFic1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYnNQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5piv5ZCm6YCa5qCP5YiG6YWN5a695bqm77yIZmxleDogMTvvvIlcbiAgICovXG4gIGJhbm5lcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOeahOW3sumAieS4remhuVxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIHRhYiDnmoTpl7Tot50gbWFyZ2luXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWAvOWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZTogUmVhY3QuUmVhY3RUZXh0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOW3sumAieS4remhuVxuICAgKi9cbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYnNcbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElUYWJzUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuICA+IHtcbiAgVGFiOiB0eXBlb2YgVGFiXG59XG5cbi8qKlxuICog5a+86Iiq6aG1562+77yM6aG26YOo5qiq5ZCR5a+86Iiq55qE5YaF5a6577yM55So5LqO5YiH5o2i6aG16Z2i5Lit5ZCM5LiA5bGC57qn55qE5YaF5a6544CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFRhYnM6IElUYWJzID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGJhbm5lcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBndXR0ZXIsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHNpemUsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElUYWJzUHJvcHMsXG4gICAgcmVmOiBhbnlcbiAgKSA9PiB7XG4gICAgY29uc3QgW2luZGljYXRvclN0eWxlLCBzZXRJbmRpY2F0b3JTdHlsZV0gPSB1c2VTdGF0ZTxSZWFjdC5DU1NQcm9wZXJ0aWVzPihcbiAgICAgIHt9XG4gICAgKVxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWIHZhbHVlIHN0YXRlXG4gICAgICogMS4g5LyY5YWI5Yik5patIFByb3AgdmFsdWXvvIzlpoLmnpzlrZjlnKggUHJvcCB2YWx1Ze+8jOWImSBUYWJzIOWujOWFqOS6pOeUseWklumDqOaOp+WItu+8jOWGhemDqOeKtuaAgeaXoOaViO+8m1xuICAgICAqIDIuIOWGjeWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBUYWJzIOeKtuaAgeS4uuatpOm7mOiupOWAvO+8m1xuICAgICAqIDMuIOWmguaenOmDveayoeacie+8jOWImeWPliBUYWIgY2hpbGRyZW4g56ysIDAg6aG555qEIHZhbHVl77yM5bCG56ysIDAg6aG56K6+572u5Li65b2T5YmN6aG544CCXG4gICAgICpcbiAgICAgKiDku6XkuIrkuInkuKrliKTmlq3lj6/og73lrZjlnKjlhrLnqoHvvIzmiYDku6XlnKjmraTor7TmmI7mnaHku7bliKTmlq3nmoTkvJjlhYjnuqfjgIJcbiAgICAgKi9cbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgIGxldCB2YWxcbiAgICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsID0gdmFsdWVQcm9wXG4gICAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCAmJiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWwgPSBkZWZhdWx0VmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9KVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2YWx1ZVByb3AgIT09IG51bGwgJiYgdmFsdWUgIT09IHZhbHVlUHJvcCkge1xuICAgICAgc2V0VmFsdWUodmFsdWVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IHRhYnNSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgICBjb25zdCB1cGRhdGVJbmRpY2F0b3JTdHlsZSA9ICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGFic1JlZiAmJiB0YWJzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBjb25zdCB0aGVBY3RpdmVUYWIgPSB0YWJzUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nXG4gICAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICAgIGlmICh0aGVBY3RpdmVUYWIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIG9mZnNldExlZnQgfSA9IHRoZUFjdGl2ZVRhYlxuICAgICAgICAgICAgc2V0SW5kaWNhdG9yU3R5bGUoe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7TWF0aC5mbG9vcihvZmZzZXRMZWZ0KX1weClgLFxuICAgICAgICAgICAgICB3aWR0aDogY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRJbmRpY2F0b3JTdHlsZSh7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICB1cGRhdGVJbmRpY2F0b3JTdHlsZSxcbiAgICAgIGdldERvbU5vZGU6ICgpID0+IHRhYnNSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIGNvbnN0IGhhbmRsZVRhYnNWYWx1ZUNoYW5nZSA9ICh2YWw6IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWYWx1ZSh2YWwpXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB1cGRhdGVJbmRpY2F0b3JTdHlsZSgpXG4gICAgfSwgW3ZhbHVlXSlcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICBgJHtwcmVmaXh9LSR7Z2V0Q29tcHV0ZWRTaXplKHNpemUsIHNpemVDb250ZXh0KX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1iYW5uZXJgXTogYmFubmVyLFxuICAgICAgICBbYCR7cHJlZml4fS1iYXNlX2Rpc2FibGVkYF06IGRpc2FibGVkLFxuICAgICAgfVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFic0NvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3sgZGlzYWJsZWQsIGd1dHRlciwgaGFuZGxlVGFic1ZhbHVlQ2hhbmdlLCB2YWx1ZSB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICBkYXRhLXZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICByZWY9e3RhYnNSZWZ9XG4gICAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbmRpY2F0b3JgfSBzdHlsZT17aW5kaWNhdG9yU3R5bGV9IC8+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVGFic0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG4pXG5cblRhYnMuVGFiID0gVGFiXG5cblRhYnMucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCa5qCP5YiG6YWN5a695bqm77yIZmxleDogMTvvvIlcbiAgICovXG4gIGJhbm5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTnmoTlt7LpgInkuK3poblcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiB0YWIg55qE6Ze06LedIG1hcmdpblxuICAgKi9cbiAgZ3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOW3sumAieS4remhuVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn1cblxuVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhbm5lcjogZmFsc2UsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZ3V0dGVyOiB1bmRlZmluZWQsXG4gIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgc2l6ZTogXCJsYXJnZVwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIl19