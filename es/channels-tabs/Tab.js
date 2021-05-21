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
var prefix = "adui-channels-tabs";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtdGFicy9UYWIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJUYWJzQ29udGV4dCIsInByZWZpeCIsIlRhYiIsImNsYXNzTmFtZSIsImRpc2FibGVkUHJvcCIsImRpc2FibGVkIiwib25DbGljayIsInN0eWxlIiwidGl0bGUiLCJ2YWx1ZSIsIm90aGVyUHJvcHMiLCJkaXNhYmxlZENvbnRleHQiLCJndXR0ZXJDb250ZXh0IiwiZ3V0dGVyIiwiaGFuZGxlVGFic1ZhbHVlQ2hhbmdlIiwidmFsdWVDb250ZXh0IiwiY2xhc3NTZXQiLCJhZGRpdGlvblN0eWxlIiwidW5kZWZpbmVkIiwibWFyZ2luUmlnaHQiLCJoYW5kbGVDbGljayIsImtleUNvZGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsIm9iamVjdCIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixRQUFrQyxPQUFsQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixXQUE1QjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxvQkFBZjs7QUFpQ0EsSUFBTUMsR0FBd0IsR0FBRyxTQUEzQkEsR0FBMkIsT0FRaEI7QUFBQTs7QUFBQSxNQVBmQyxTQU9lLFFBUGZBLFNBT2U7QUFBQSxNQU5MQyxZQU1LLFFBTmZDLFFBTWU7QUFBQSxNQUxmQyxPQUtlLFFBTGZBLE9BS2U7QUFBQSxNQUpmQyxLQUllLFFBSmZBLEtBSWU7QUFBQSxNQUhmQyxLQUdlLFFBSGZBLEtBR2U7QUFBQSxNQUZmQyxLQUVlLFFBRmZBLEtBRWU7QUFBQSxNQURaQyxVQUNZOztBQUFBLG9CQU1YYixVQUFVLENBQUNHLFdBQUQsQ0FOQztBQUFBLE1BRUhXLGVBRkcsZUFFYk4sUUFGYTtBQUFBLE1BR0xPLGFBSEssZUFHYkMsTUFIYTtBQUFBLE1BSWJDLHFCQUphLGVBSWJBLHFCQUphO0FBQUEsTUFLTkMsWUFMTSxlQUtiTixLQUxhOztBQVFmLE1BQU1KLFFBQVEsR0FBR0QsWUFBWSxJQUFJTyxlQUFqQztBQUVBLE1BQU1LLFFBQVEsR0FBR2pCLFVBQVUsQ0FBQ0ksU0FBRCxZQUFlRixNQUFmLHFFQUNyQkEsTUFEcUIsY0FDSFEsS0FBSyxLQUFLTSxZQURQLDBDQUVyQmQsTUFGcUIsZ0JBRURJLFFBRkMsZ0JBQTNCO0FBS0EsTUFBTVksYUFBa0MsR0FBRyxFQUEzQzs7QUFDQSxNQUFJTCxhQUFhLEtBQUtNLFNBQXRCLEVBQWlDO0FBQy9CRCxJQUFBQSxhQUFhLENBQUNFLFdBQWQsYUFBK0JQLGFBQS9CO0FBQ0Q7O0FBRUQsTUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUNFWCxLQUFLLEtBQUtTLFNBQVYsSUFDQSxFQUFFYixRQUFRLElBQUlNLGVBQWQsQ0FEQSxJQUVBRyxxQkFIRixFQUlFO0FBQ0FBLE1BQUFBLHFCQUFxQixDQUFDTCxLQUFELENBQXJCO0FBQ0Q7O0FBQ0QsUUFBSUgsT0FBSixFQUFhO0FBQ1hBLE1BQUFBLE9BQU87QUFDUjtBQUNGLEdBWEQ7O0FBYUEsU0FDRTtBQUNFLHFCQUFlRCxRQURqQjtBQUVFLHFCQUFlSSxLQUFLLEtBQUtNLFlBRjNCO0FBR0UsSUFBQSxTQUFTLEVBQUVDLFFBSGI7QUFJRSxJQUFBLEdBQUcsRUFBRVAsS0FKUDtBQUtFLElBQUEsT0FBTyxFQUFFVyxXQUxYO0FBTUUsSUFBQSxTQUFTLEVBQUUsMEJBQXNEO0FBQUEsVUFBbkRDLE9BQW1ELFNBQW5EQSxPQUFtRDs7QUFDL0QsVUFBSUEsT0FBTyxLQUFLLEVBQWhCLEVBQW9CO0FBQ2xCRCxRQUFBQSxXQUFXO0FBQ1o7QUFDRixLQVZIO0FBV0UsSUFBQSxJQUFJLEVBQUMsS0FYUDtBQVlFLElBQUEsUUFBUSxFQUFFLENBQUMsQ0FaYjtBQWFFLElBQUEsS0FBSyxrQ0FDQUgsYUFEQSxHQUVBVixLQUZBO0FBYlAsS0FpQk1HLFVBakJOLEdBbUJHRixLQW5CSCxDQURGO0FBdUJELENBaEVEOztBQWtFQU4sR0FBRyxDQUFDb0IsU0FBSixHQUFnQjtBQUlkbkIsRUFBQUEsU0FBUyxFQUFFTCxTQUFTLENBQUN5QixNQUpQO0FBUWRsQixFQUFBQSxRQUFRLEVBQUVQLFNBQVMsQ0FBQzBCLElBUk47QUFZZGxCLEVBQUFBLE9BQU8sRUFBRVIsU0FBUyxDQUFDMkIsSUFaTDtBQWdCZGxCLEVBQUFBLEtBQUssRUFBRVQsU0FBUyxDQUFDNEIsTUFoQkg7QUFvQmRsQixFQUFBQSxLQUFLLEVBQUVWLFNBQVMsQ0FBQzZCLElBQVYsQ0FBZUMsVUFwQlI7QUF3QmRuQixFQUFBQSxLQUFLLEVBQUVYLFNBQVMsQ0FBQytCLFNBQVYsQ0FBb0IsQ0FBQy9CLFNBQVMsQ0FBQ3lCLE1BQVgsRUFBbUJ6QixTQUFTLENBQUNnQyxNQUE3QixDQUFwQixFQUEwREY7QUF4Qm5ELENBQWhCO0FBMkJBMUIsR0FBRyxDQUFDNkIsWUFBSixHQUFtQjtBQUNqQjVCLEVBQUFBLFNBQVMsRUFBRWUsU0FETTtBQUVqQmIsRUFBQUEsUUFBUSxFQUFFLEtBRk87QUFHakJDLEVBQUFBLE9BQU8sRUFBRSxtQkFBTSxDQUFFLENBSEE7QUFJakJDLEVBQUFBLEtBQUssRUFBRTtBQUpVLENBQW5CO0FBT0EsZUFBZUwsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgVGFic0NvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtdGFic1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYlByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzogKGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOagh+etvuaWh+Wtl1xuICAgKi9cbiAgdGl0bGU6IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogdmFsdWVcbiAgICovXG4gIHZhbHVlPzogUmVhY3QuUmVhY3RUZXh0XG59XG5cbi8qKlxuICog5a+86Iiq6aG1562+IC0gVGFiXG4gKi9cbmNvbnN0IFRhYjogUmVhY3QuRkM8SVRhYlByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgZGlzYWJsZWQ6IGRpc2FibGVkUHJvcCxcbiAgb25DbGljayxcbiAgc3R5bGUsXG4gIHRpdGxlLFxuICB2YWx1ZSxcbiAgLi4ub3RoZXJQcm9wc1xufTogSVRhYlByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRDb250ZXh0LFxuICAgIGd1dHRlcjogZ3V0dGVyQ29udGV4dCxcbiAgICBoYW5kbGVUYWJzVmFsdWVDaGFuZ2UsXG4gICAgdmFsdWU6IHZhbHVlQ29udGV4dCxcbiAgfSA9IHVzZUNvbnRleHQoVGFic0NvbnRleHQpXG5cbiAgY29uc3QgZGlzYWJsZWQgPSBkaXNhYmxlZFByb3AgfHwgZGlzYWJsZWRDb250ZXh0XG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS10YWJgLCB7XG4gICAgW2Ake3ByZWZpeH0tYWN0aXZlYF06IHZhbHVlID09PSB2YWx1ZUNvbnRleHQsXG4gICAgW2Ake3ByZWZpeH0tZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gIH0pXG5cbiAgY29uc3QgYWRkaXRpb25TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9XG4gIGlmIChndXR0ZXJDb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBhZGRpdGlvblN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7Z3V0dGVyQ29udGV4dH1weGBcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICEoZGlzYWJsZWQgfHwgZGlzYWJsZWRDb250ZXh0KSAmJlxuICAgICAgaGFuZGxlVGFic1ZhbHVlQ2hhbmdlXG4gICAgKSB7XG4gICAgICBoYW5kbGVUYWJzVmFsdWVDaGFuZ2UodmFsdWUpXG4gICAgfVxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgYXJpYS1zZWxlY3RlZD17dmFsdWUgPT09IHZhbHVlQ29udGV4dH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBrZXk9e3ZhbHVlfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICBvbktleURvd249eyh7IGtleUNvZGUgfTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgaGFuZGxlQ2xpY2soKVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgcm9sZT1cInRhYlwiXG4gICAgICB0YWJJbmRleD17LTF9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5hZGRpdGlvblN0eWxlLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICB7dGl0bGV9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuVGFiLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5qCH562+5paH5a2XXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIHZhbHVlXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG59XG5cblRhYi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2xpY2s6ICgpID0+IHt9LFxuICBzdHlsZToge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIl19