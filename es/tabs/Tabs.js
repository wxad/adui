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
  size: "small",
  value: null
};
export default Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy9UYWJzLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZVJlZiIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInVzZUlzSW5pdGlhbFJlbmRlciIsIkNvbmZpZ0NvbnRleHQiLCJnZXRDb21wdXRlZFNpemUiLCJUYWIiLCJUYWJzQ29udGV4dCIsInByZWZpeCIsIlRhYnMiLCJyZWYiLCJiYW5uZXIiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRlZmF1bHRWYWx1ZSIsImRpc2FibGVkIiwiZ3V0dGVyIiwib25DaGFuZ2UiLCJzaXplIiwidmFsdWVQcm9wIiwidmFsdWUiLCJvdGhlclByb3BzIiwiaW5pdGlhbCIsImluZGljYXRvclN0eWxlIiwic2V0SW5kaWNhdG9yU3R5bGUiLCJ2YWwiLCJ1bmRlZmluZWQiLCJzZXRWYWx1ZSIsInRhYnNSZWYiLCJzaXplQ29udGV4dCIsInVwZGF0ZUluZGljYXRvclN0eWxlIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJ0aGVBY3RpdmVUYWIiLCJxdWVyeVNlbGVjdG9yIiwiY2xpZW50V2lkdGgiLCJvZmZzZXRMZWZ0IiwidHJhbnNmb3JtIiwiTWF0aCIsImZsb29yIiwidHJhbnNpdGlvbiIsIndpZHRoIiwib3BhY2l0eSIsImdldERvbU5vZGUiLCJoYW5kbGVUYWJzVmFsdWVDaGFuZ2UiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsImJvb2wiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQ0VDLFVBREYsRUFFRUMsVUFGRixFQUdFQyxTQUhGLEVBSUVDLG1CQUpGLEVB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QUFLbEJDLEVBQUFBLE1BQU0sRUFBRVUsU0FMVTtBQU1sQlQsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FOQTtBQU9sQkMsRUFBQUEsSUFBSSxFQUFFLE9BUFk7QUFRbEJFLEVBQUFBLEtBQUssRUFBRTtBQVJXLENBQXBCO0FBV0EsZUFBZVgsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IHVzZUlzSW5pdGlhbFJlbmRlciB9IGZyb20gXCIuLi9fdXRpbC9ob29rcy91c2UtaXMtaW5pdGlhbC1yZW5kZXJcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgVGFiIGZyb20gXCIuL1RhYlwiXG5pbXBvcnQgeyBUYWJzQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJzXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFic1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbpgJrmoI/liIbphY3lrr3luqbvvIhmbGV4OiAxO++8iVxuICAgKi9cbiAgYmFubmVyPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k55qE5bey6YCJ5Lit6aG5XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICogdGFiIOeahOmXtOi3nSBtYXJnaW5cbiAgICovXG4gIGd1dHRlcj86IG51bWJlclxuICAvKipcbiAgICog5YC85Y+Y5YyW5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBSZWFjdC5SZWFjdFRleHQpID0+IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog5bey6YCJ5Lit6aG5XG4gICAqL1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFic1xuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSVRhYnNQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4gID4ge1xuICBUYWI6IHR5cGVvZiBUYWJcbn1cblxuLyoqXG4gKiDlr7zoiKrpobXnrb7vvIzpobbpg6jmqKrlkJHlr7zoiKrnmoTlhoXlrrnvvIznlKjkuo7liIfmjaLpobXpnaLkuK3lkIzkuIDlsYLnuqfnmoTlhoXlrrnjgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgVGFiczogSVRhYnMgPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYmFubmVyLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGd1dHRlcixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2l6ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVRhYnNQcm9wcyxcbiAgICByZWY6IGFueVxuICApID0+IHtcbiAgICBjb25zdCBpbml0aWFsID0gdXNlSXNJbml0aWFsUmVuZGVyKClcbiAgICBjb25zdCBbaW5kaWNhdG9yU3R5bGUsIHNldEluZGljYXRvclN0eWxlXSA9IHVzZVN0YXRlPFJlYWN0LkNTU1Byb3BlcnRpZXM+KFxuICAgICAge31cbiAgICApXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJYgdmFsdWUgc3RhdGVcbiAgICAgKiAxLiDkvJjlhYjliKTmlq0gUHJvcCB2YWx1Ze+8jOWmguaenOWtmOWcqCBQcm9wIHZhbHVl77yM5YiZIFRhYnMg5a6M5YWo5Lqk55Sx5aSW6YOo5o6n5Yi277yM5YaF6YOo54q25oCB5peg5pWI77ybXG4gICAgICogMi4g5YaN5Yik5patIFByb3AgZGVmYXVsdFZhbHVl77yM5aaC5p6c5a2Y5Zyo6buY6K6k5YC877yM5YiZIFRhYnMg54q25oCB5Li65q2k6buY6K6k5YC877ybXG4gICAgICogMy4g5aaC5p6c6YO95rKh5pyJ77yM5YiZ5Y+WIFRhYiBjaGlsZHJlbiDnrKwgMCDpobnnmoQgdmFsdWXvvIzlsIbnrKwgMCDpobnorr7nva7kuLrlvZPliY3pobnjgIJcbiAgICAgKlxuICAgICAqIOS7peS4iuS4ieS4quWIpOaWreWPr+iDveWtmOWcqOWGsueqge+8jOaJgOS7peWcqOatpOivtOaYjuadoeS7tuWIpOaWreeahOS8mOWFiOe6p+OAglxuICAgICAqL1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgbGV0IHZhbFxuICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWwgPSB2YWx1ZVByb3BcbiAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbCA9IGRlZmF1bHRWYWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbFxuICAgIH0pXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKHZhbHVlUHJvcCAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdmFsdWVQcm9wKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZVByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgdGFic1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAgIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICAgIGNvbnN0IHVwZGF0ZUluZGljYXRvclN0eWxlID0gKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0YWJzUmVmICYmIHRhYnNSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IHRoZUFjdGl2ZVRhYiA9IHRhYnNSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSdcbiAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgaWYgKHRoZUFjdGl2ZVRhYikge1xuICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgb2Zmc2V0TGVmdCB9ID0gdGhlQWN0aXZlVGFiXG4gICAgICAgICAgICBzZXRJbmRpY2F0b3JTdHlsZSh7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtNYXRoLmZsb29yKG9mZnNldExlZnQpfXB4KWAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGluaXRpYWxcbiAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICA6IFwiYWxsIHZhcigtLW1vdGlvbi1kdXJhdGlvbi1iYXNlKSB2YXIoLS1lYXNlLWluLW91dClcIixcbiAgICAgICAgICAgICAgd2lkdGg6IGNsaWVudFdpZHRoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SW5kaWNhdG9yU3R5bGUoeyBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgdXBkYXRlSW5kaWNhdG9yU3R5bGUsXG4gICAgICBnZXREb21Ob2RlOiAoKSA9PiB0YWJzUmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYW5kbGVUYWJzVmFsdWVDaGFuZ2UgPSAodmFsOiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmFsdWUodmFsKVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgdXBkYXRlSW5kaWNhdG9yU3R5bGUoKVxuICAgIH0sIFt2YWx1ZV0pXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS0ke2dldENvbXB1dGVkU2l6ZShzaXplLCBzaXplQ29udGV4dCl9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0tYmFubmVyYF06IGJhbm5lcixcbiAgICAgICAgW2Ake3ByZWZpeH0tYmFzZV9kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYnNDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7IGRpc2FibGVkLCBndXR0ZXIsIGhhbmRsZVRhYnNWYWx1ZUNoYW5nZSwgdmFsdWUgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgZGF0YS12YWx1ZT17dmFsdWV9XG4gICAgICAgICAgcmVmPXt0YWJzUmVmfVxuICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5kaWNhdG9yYH0gc3R5bGU9e2luZGljYXRvclN0eWxlfSAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1RhYnNDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuKVxuXG5UYWJzLlRhYiA9IFRhYlxuXG5UYWJzLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpumAmuagj+WIhumFjeWuveW6pu+8iGZsZXg6IDE777yJXG4gICAqL1xuICBiYW5uZXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k55qE5bey6YCJ5Lit6aG5XG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICogdGFiIOeahOmXtOi3nSBtYXJnaW5cbiAgICovXG4gIGd1dHRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOWAvOWPmOWMluaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlt7LpgInkuK3poblcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG59XG5cblRhYnMuZGVmYXVsdFByb3BzID0ge1xuICBiYW5uZXI6IGZhbHNlLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGd1dHRlcjogdW5kZWZpbmVkLFxuICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIHNpemU6IFwic21hbGxcIixcbiAgdmFsdWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcbiJdfQ==