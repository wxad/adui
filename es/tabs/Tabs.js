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
import { useIsInitialRender } from "../_util/hooks/use-is-initial-render";
import { ConfigContext, getComputedSize } from "../config-provider";
import ResizeObserver from "../resize-observer";
import Tab from "./Tab";
import { TabsContext } from "./Context";
import "./style";
var prefix = "adui-tabs";
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

  var initial = useIsInitialRender();

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
            transition: initial ? "" : "all var(--motion-duration-base) var(--ease-in-out)",
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
  }, React.createElement(ResizeObserver, {
    onResize: function onResize() {
      if (!initial) {
        updateIndicatorStyle();
      }
    }
  }, React.createElement("div", _extends({
    className: classSet,
    "data-value": value,
    ref: tabsRef
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-indicator"),
    style: indicatorStyle
  }), children)));
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
  size: "small",
  value: null
};
export default Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy9UYWJzLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZVJlZiIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInVzZUlzSW5pdGlhbFJlbmRlciIsIkNvbmZpZ0NvbnRleHQiLCJnZXRDb21wdXRlZFNpemUiLCJSZXNpemVPYnNlcnZlciIsIlRhYiIsIlRhYnNDb250ZXh0IiwicHJlZml4IiwiVGFicyIsInJlZiIsImJhbm5lciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGVmYXVsdFZhbHVlIiwiZGlzYWJsZWQiLCJndXR0ZXIiLCJvbkNoYW5nZSIsInNpemUiLCJ2YWx1ZVByb3AiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJpbml0aWFsIiwiaW5kaWNhdG9yU3R5bGUiLCJzZXRJbmRpY2F0b3JTdHlsZSIsInZhbCIsInVuZGVmaW5lZCIsInNldFZhbHVlIiwidGFic1JlZiIsInNpemVDb250ZXh0IiwidXBkYXRlSW5kaWNhdG9yU3R5bGUiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInRoZUFjdGl2ZVRhYiIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRXaWR0aCIsIm9mZnNldExlZnQiLCJ0cmFuc2Zvcm0iLCJNYXRoIiwiZmxvb3IiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJvcGFjaXR5IiwiZ2V0RG9tTm9kZSIsImhhbmRsZVRhYnNWYWx1ZUNoYW5nZSIsImNsYXNzU2V0IiwicHJvcFR5cGVzIiwiYm9vbCIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFDRUMsVUFERixFQUVFQyxVQUZGLEVBR0VDLFNB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QXBDUSxDQUFqQjtBQXVDQTNDLElBQUksQ0FBQzhDLFlBQUwsR0FBb0I7QUFDbEI1QyxFQUFBQSxNQUFNLEVBQUUsS0FEVTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFYyxTQUZPO0FBR2xCWixFQUFBQSxZQUFZLEVBQUUsSUFISTtBQUlsQkMsRUFBQUEsUUFBUSxFQUFFLEtBSlE7QUFLbEJDLEVBQUFBLE1BQU0sRUFBRVUsU0FMVTtBQU1sQlQsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FOQTtBQU9sQkMsRUFBQUEsSUFBSSxFQUFFLE9BUFk7QUFRbEJFLEVBQUFBLEtBQUssRUFBRTtBQVJXLENBQXBCO0FBV0EsZUFBZVgsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IHVzZUlzSW5pdGlhbFJlbmRlciB9IGZyb20gXCIuLi9fdXRpbC9ob29rcy91c2UtaXMtaW5pdGlhbC1yZW5kZXJcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSBcIi4uL3Jlc2l6ZS1vYnNlcnZlclwiXG5pbXBvcnQgVGFiIGZyb20gXCIuL1RhYlwiXG5pbXBvcnQgeyBUYWJzQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJzXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFic1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbpgJrmoI/liIbphY3lrr3luqbvvIhmbGV4OiAxO++8iVxuICAgKi9cbiAgYmFubmVyPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k55qE5bey6YCJ5Lit6aG5XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICogdGFiIOeahOmXtOi3nSBtYXJnaW5cbiAgICovXG4gIGd1dHRlcj86IG51bWJlclxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBSZWFjdC5SZWFjdFRleHQpID0+IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5bey6YCJ5Lit6aG5XG4gICAqL1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFic1xuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSVRhYnNQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4gID4ge1xuICBUYWI6IHR5cGVvZiBUYWJcbn1cblxuLyoqXG4gKiDlr7zoiKrpobXnrb7vvIzpobbpg6jmqKrlkJHlr7zoiKrnmoTlhoXlrrnvvIznlKjkuo7liIfmjaLpobXpnaLkuK3lkIzkuIDlsYLnuqfnmoTlhoXlrrnjgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgVGFiczogSVRhYnMgPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYmFubmVyLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGd1dHRlcixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2l6ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVRhYnNQcm9wcyxcbiAgICByZWY6IGFueVxuICApID0+IHtcbiAgICBjb25zdCBpbml0aWFsID0gdXNlSXNJbml0aWFsUmVuZGVyKClcbiAgICBjb25zdCBbaW5kaWNhdG9yU3R5bGUsIHNldEluZGljYXRvclN0eWxlXSA9IHVzZVN0YXRlPFJlYWN0LkNTU1Byb3BlcnRpZXM+KFxuICAgICAge31cbiAgICApXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJYgdmFsdWUgc3RhdGVcbiAgICAgKiAxLiDkvJjlhYjliKTmlq0gUHJvcCB2YWx1Ze+8jOWmguaenOWtmOWcqCBQcm9wIHZhbHVl77yM5YiZIFRhYnMg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI77ybXG4gICAgICogMi4g5YaN5Yik5patIFByb3AgZGVmYXVsdFZhbHVl77yM5aaC5p6c5a2Y5Zyo6buY6K6k5YC877yM5YiZIFRhYnMg54q25oCB5Li65q2k6buY6K6k5YC877ybXG4gICAgICogMy4g5aaC5p6c6YO95rKh5pyJ77yM5YiZ5Y+WIFRhYiBjaGlsZHJlbiDnrKwgMCDpobnnmoQgdmFsdWXvvIzlsIbnrKwgMCDpobnorr7nva7kuLrlvZPliY3pobnjgIJcbiAgICAgKlxuICAgICAqIOS7peS4iuS4ieS4quWIpOaWreWPr+iDveWtmOWcqOWGsueqge+8jOaJgOS7peWcqOatpOivtOaYjuadoeS7tuWIpOaWreeahOS8mOWFiOe6p+OAglxuICAgICAqL1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgbGV0IHZhbFxuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWwgPSB2YWx1ZVByb3BcbiAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbCA9IGRlZmF1bHRWYWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbFxuICAgIH0pXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdmFsdWVQcm9wKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZVByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgdGFic1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IHVwZGF0ZUluZGljYXRvclN0eWxlID0gKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0YWJzUmVmICYmIHRhYnNSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHRoZUFjdGl2ZVRhYiA9IHRhYnNSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSdcbiAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgaWYgKHRoZUFjdGl2ZVRhYikge1xuICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgb2Zmc2V0TGVmdCB9ID0gdGhlQWN0aXZlVGFiXG4gICAgICAgICAgICBzZXRJbmRpY2F0b3JTdHlsZSh7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtNYXRoLmZsb29yKG9mZnNldExlZnQpfXB4KWAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGluaXRpYWxcbiAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICA6IFwiYWxsIHZhcigtLW1vdGlvbi1kdXJhdGlvbi1iYXNlKSB2YXIoLS1lYXNlLWluLW91dClcIixcbiAgICAgICAgICAgICAgd2lkdGg6IGNsaWVudFdpZHRoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SW5kaWNhdG9yU3R5bGUoeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgdXBkYXRlSW5kaWNhdG9yU3R5bGUsXG4gICAgICBnZXREb21Ob2RlOiAoKSA9PiB0YWJzUmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYW5kbGVUYWJzVmFsdWVDaGFuZ2UgPSAodmFsOiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmFsdWUodmFsKVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdXBkYXRlSW5kaWNhdG9yU3R5bGUoKVxuICAgIH0sIFt2YWx1ZV0pXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke2dldENvbXB1dGVkU2l6ZShzaXplLCBzaXplQ29udGV4dCl9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tYmFubmVyYF06IGJhbm5lcixcbiAgICAgICAgW2Ake3ByZWZpeH0tYmFzZV9kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYnNDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7IGRpc2FibGVkLCBndXR0ZXIsIGhhbmRsZVRhYnNWYWx1ZUNoYW5nZSwgdmFsdWUgfX1cbiAgICAgID5cbiAgICAgICAgPFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAgb25SZXNpemU9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghaW5pdGlhbCkge1xuICAgICAgICAgICAgICB1cGRhdGVJbmRpY2F0b3JTdHlsZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgICBkYXRhLXZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIHJlZj17dGFic1JlZn1cbiAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWluZGljYXRvcmB9IHN0eWxlPXtpbmRpY2F0b3JTdHlsZX0gLz5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZXNpemVPYnNlcnZlcj5cbiAgICAgIDwvVGFic0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG4pXG5cblRhYnMuVGFiID0gVGFiXG5cblRhYnMucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCa5qCP5YiG6YWN5a695bqm77yIZmxleDogMTvvvIlcbiAgICovXG4gIGJhbm5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTnmoTlt7LpgInkuK3poblcbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiB0YWIg55qE6Ze06LedIG1hcmdpblxuICAgKi9cbiAgZ3V0dGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOW3sumAieS4remhuVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn1cblxuVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhbm5lcjogZmFsc2UsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZ3V0dGVyOiB1bmRlZmluZWQsXG4gIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB2YWx1ZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFic1xuIl19