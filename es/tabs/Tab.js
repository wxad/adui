function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { TabsContext } from "./Context";
import "./style";
var prefix = "adui-tabs";

var Tab = function Tab(_ref) {
  var _classNames;

  var className = _ref.className,
      disabledProp = _ref.disabled,
      onClick = _ref.onClick,
      style = _ref.style,
      title = _ref.title,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ["className", "disabled", "onClick", "style", "title", "value"]);

  var _useContext = useContext(TabsContext),
      disabledContext = _useContext.disabled,
      gutterContext = _useContext.gutter,
      handleTabsValueChange = _useContext.handleTabsValueChange,
      valueContext = _useContext.value;

  var disabled = disabledProp || disabledContext;
  var classSet = classNames(className, "".concat(prefix, "-tab"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-active"), value === valueContext), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _classNames));
  var additionStyle = {};

  if (gutterContext !== undefined) {
    additionStyle.marginRight = "".concat(gutterContext, "px");
  }

  var handleClick = function handleClick() {
    if (value !== undefined && !(disabled || disabledContext) && handleTabsValueChange) {
      handleTabsValueChange(value);
    }

    if (onClick) {
      onClick();
    }
  };

  return React.createElement("div", _extends({
    "aria-disabled": disabled,
    "aria-selected": value === valueContext,
    className: classSet,
    key: value,
    onClick: handleClick,
    onKeyDown: function onKeyDown(_ref2) {
      var keyCode = _ref2.keyCode;

      if (keyCode === 13) {
        handleClick();
      }
    },
    role: "tab",
    tabIndex: -1,
    style: _objectSpread(_objectSpread({}, additionStyle), style)
  }, otherProps), title);
};

Tab.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
Tab.defaultProps = {
  className: undefined,
  disabled: false,
  onClick: function onClick() {},
  style: {}
};
export default Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFicy9UYWIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJUYWJzQ29udGV4dCIsInByZWZpeCIsIlRhYiIsImNsYXNzTmFtZSIsImRpc2FibGVkUHJvcCIsImRpc2FibGVkIiwib25DbGljayIsInN0eWxlIiwidGl0bGUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJkaXNhYmxlZENvbnRleHQiLCJndXR0ZXJDb250ZXh0IiwiZ3V0dGVyIiwiaGFuZGxlVGFic1ZhbHVlQ2hhbmdlIiwidmFsdWVDb250ZXh0IiwiY2xhc3NTZXQiLCJhZGRpdGlvblN0eWxlIiwidW5kZWZpbmVkIiwibWFyZ2luUmlnaHQiLCJoYW5kbGVDbGljayIsImtleUNvZGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsIm9iamVjdCIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixRQUFrQyxPQUFsQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixXQUE1QjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQWlDQSxJQUFNQyxHQUF3QixHQUFHLFNBQTNCQSxHQUEyQixPQVFoQjtBQUFBOztBQUFBLE1BUGZDLFNBT2UsUUFQZkEsU0FPZTtBQUFBLE1BTkxDLFlBTUssUUFOZkMsUUFNZTtBQUFBLE1BTGZDLE9BS2UsUUFMZkEsT0FLZTtBQUFBLE1BSmZDLEtBSWUsUUFKZkEsS0FJZTtBQUFBLE1BSGZDLEtBR2UsUUFIZkEsS0FHZTtBQUFBLE1BRmZDLEtBRWUsUUFGZkEsS0FFZTtBQUFBLE1BRFpDLFVBQ1k7O0FBQUEsb0JBTVhiLFVBQVUsQ0FBQ0csV0FBRCxDQU5DO0FBQUEsTUFFSFcsZUFGRyxlQUViTixRQUZhO0FBQUEsTUFHTE8sYUFISyxlQUdiQyxNQUhhO0FBQUEsTUFJYkMscUJBSmEsZUFJYkEscUJBSmE7QUFBQSxNQUtOQyxZQUxNLGVBS2JOLEtBTGE7O0FBUWYsTUFBTUosUUFBUSxHQUFHRCxZQUFZLElBQUlPLGVBQWpDO0FBRUEsTUFBTUssUUFBUSxHQUFHakIsVUFBVSxDQUFDSSxTQUFELFlBQWVGLE1BQWYscUVBQ3JCQSxNQURxQixjQUNIUSxLQUFLLEtBQUtNLFlBRFAsMENBRXJCZCxNQUZxQixnQkFFREksUUFGQyxnQkFBM0I7QUFLQSxNQUFNWSxhQUFrQyxHQUFHLEVBQTNDOztBQUNBLE1BQUlMLGFBQWEsS0FBS00sU0FBdEIsRUFBaUM7QUFDL0JELElBQUFBLGFBQWEsQ0FBQ0UsV0FBZCxhQUErQlAsYUFBL0I7QUFDRDs7QUFFRCxNQUFNUSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQ0VYLEtBQUssS0FBS1MsU0FBVixJQUNBLEVBQUViLFFBQVEsSUFBSU0sZUFBZCxDQURBLElBRUFHLHFCQUhGLEVBSUU7QUFDQUEsTUFBQUEscUJBQXFCLENBQUNMLEtBQUQsQ0FBckI7QUFDRDs7QUFDRCxRQUFJSCxPQUFKLEVBQWE7QUFDWEEsTUFBQUEsT0FBTztBQUNSO0FBQ0YsR0FYRDs7QUFhQSxTQUNFO0FBQ0UscUJBQWVELFFBRGpCO0FBRUUscUJBQWVJLEtBQUssS0FBS00sWUFGM0I7QUFHRSxJQUFBLFNBQVMsRUFBRUMsUUFIYjtBQUlFLElBQUEsR0FBRyxFQUFFUCxLQUpQO0FBS0UsSUFBQSxPQUFPLEVBQUVXLFdBTFg7QUFNRSxJQUFBLFNBQVMsRUFBRSwwQkFBc0Q7QUFBQSxVQUFuREMsT0FBbUQsU0FBbkRBLE9BQW1EOztBQUMvRCxVQUFJQSxPQUFPLEtBQUssRUFBaEIsRUFBb0I7QUFDbEJELFFBQUFBLFdBQVc7QUFDWjtBQUNGLEtBVkg7QUFXRSxJQUFBLElBQUksRUFBQyxLQVhQO0FBWUUsSUFBQSxRQUFRLEVBQUUsQ0FBQyxDQVpiO0FBYUUsSUFBQSxLQUFLLGtDQUNBSCxhQURBLEdBRUFWLEtBRkE7QUFiUCxLQWlCTUcsVUFqQk4sR0FtQkdGLEtBbkJILENBREY7QUF1QkQsQ0FoRUQ7O0FBa0VBTixHQUFHLENBQUNvQixTQUFKLEdBQWdCO0FBSWRuQixFQUFBQSxTQUFTLEVBQUVMLFNBQVMsQ0FBQ3lCLE1BSlA7QUFRZGxCLEVBQUFBLFFBQVEsRUFBRVAsU0FBUyxDQUFDMEIsSUFSTjtBQVlkbEIsRUFBQUEsT0FBTyxFQUFFUixTQUFTLENBQUMyQixJQVpMO0FBZ0JkbEIsRUFBQUEsS0FBSyxFQUFFVCxTQUFTLENBQUM0QixNQWhCSDtBQW9CZGxCLEVBQUFBLEtBQUssRUFBRVYsU0FBUyxDQUFDNkIsSUFBVixDQUFlQyxVQXBCUjtBQXdCZG5CLEVBQUFBLEtBQUssRUFBRVgsU0FBUyxDQUFDK0IsU0FBVixDQUFvQixDQUFDL0IsU0FBUyxDQUFDeUIsTUFBWCxFQUFtQnpCLFNBQVMsQ0FBQ2dDLE1BQTdCLENBQXBCLEVBQTBERjtBQXhCbkQsQ0FBaEI7QUEyQkExQixHQUFHLENBQUM2QixZQUFKLEdBQW1CO0FBQ2pCNUIsRUFBQUEsU0FBUyxFQUFFZSxTQURNO0FBRWpCYixFQUFBQSxRQUFRLEVBQUUsS0FGTztBQUdqQkMsRUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FIQTtBQUlqQkMsRUFBQUEsS0FBSyxFQUFFO0FBSlUsQ0FBbkI7QUFPQSxlQUFlTCxHQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBUYWJzQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJzXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFiUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog54K55Ye75LqL5Lu255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xpY2s/OiAoZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5qCH562+5paH5a2XXG4gICAqL1xuICB0aXRsZTogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiB2YWx1ZVxuICAgKi9cbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHRcbn1cblxuLyoqXG4gKiDlr7zoiKrpobXnrb4gLSBUYWJcbiAqL1xuY29uc3QgVGFiOiBSZWFjdC5GQzxJVGFiUHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBkaXNhYmxlZDogZGlzYWJsZWRQcm9wLFxuICBvbkNsaWNrLFxuICBzdHlsZSxcbiAgdGl0bGUsXG4gIHZhbHVlLFxuICAuLi5vdGhlclByb3BzXG59OiBJVGFiUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGRpc2FibGVkOiBkaXNhYmxlZENvbnRleHQsXG4gICAgZ3V0dGVyOiBndXR0ZXJDb250ZXh0LFxuICAgIGhhbmRsZVRhYnNWYWx1ZUNoYW5nZSxcbiAgICB2YWx1ZTogdmFsdWVDb250ZXh0LFxuICB9ID0gdXNlQ29udGV4dChUYWJzQ29udGV4dClcblxuICBjb25zdCBkaXNhYmxlZCA9IGRpc2FibGVkUHJvcCB8fCBkaXNhYmxlZENvbnRleHRcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LXRhYmAsIHtcbiAgICBbYCR7cHJlZml4fS1hY3RpdmVgXTogdmFsdWUgPT09IHZhbHVlQ29udGV4dCxcbiAgICBbYCR7cHJlZml4fS1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgfSlcblxuICBjb25zdCBhZGRpdGlvblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge31cbiAgaWYgKGd1dHRlckNvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGFkZGl0aW9uU3R5bGUubWFyZ2luUmlnaHQgPSBgJHtndXR0ZXJDb250ZXh0fXB4YFxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgIShkaXNhYmxlZCB8fCBkaXNhYmxlZENvbnRleHQpICYmXG4gICAgICBoYW5kbGVUYWJzVmFsdWVDaGFuZ2VcbiAgICApIHtcbiAgICAgIGhhbmRsZVRhYnNWYWx1ZUNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgYXJpYS1kaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBhcmlhLXNlbGVjdGVkPXt2YWx1ZSA9PT0gdmFsdWVDb250ZXh0fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgIGtleT17dmFsdWV9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIG9uS2V5RG93bj17KHsga2V5Q29kZSB9OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICBoYW5kbGVDbGljaygpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICByb2xlPVwidGFiXCJcbiAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLmFkZGl0aW9uU3R5bGUsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHt0aXRsZX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5UYWIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDmoIfnrb7mloflrZdcbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogdmFsdWVcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbn1cblxuVGFiLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25DbGljazogKCkgPT4ge30sXG4gIHN0eWxlOiB7fSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iXX0=