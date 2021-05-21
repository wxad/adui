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

import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import { MenuContext } from "./Context";
import "./style";
var prefix = "adui-menu";

var SubMenu = function SubMenu(_ref) {
  var _classNames;

  var className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      index = _ref.index,
      title = _ref.title,
      otherProps = _objectWithoutProperties(_ref, ["className", "children", "disabled", "index", "title"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useContext = useContext(MenuContext),
      onExpandChange = _useContext.onExpandChange;

  var classSet = classNames(className, "".concat(prefix, "-sub"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-sub_open"), open), _defineProperty(_classNames, "".concat(prefix, "-sub_disabled"), disabled), _classNames));

  var handleExpandChange = function handleExpandChange(bool) {
    if (onExpandChange) {
      onExpandChange(index, bool);
    }

    setOpen(bool);
  };

  var mouseEvents = {};

  if (!disabled) {
    mouseEvents = {
      onMouseEnter: function onMouseEnter() {
        return handleExpandChange(true);
      },
      onMouseLeave: function onMouseLeave() {
        return handleExpandChange(false);
      }
    };
  }

  return React.createElement("div", _extends({
    className: classSet,
    "data-index": index
  }, mouseEvents, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-subTitle")
  }, React.createElement("span", null, title), React.createElement(Icon, {
    icon: "triangle-right",
    className: "".concat(prefix, "-icon")
  })), React.createElement("div", {
    className: "".concat(prefix, "-dropdown")
  }, children));
};

SubMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.node
};
SubMenu.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  title: null
};
export default SubMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9TdWJNZW51LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJY29uIiwiTWVudUNvbnRleHQiLCJwcmVmaXgiLCJTdWJNZW51IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImluZGV4IiwidGl0bGUiLCJvdGhlclByb3BzIiwib3BlbiIsInNldE9wZW4iLCJvbkV4cGFuZENoYW5nZSIsImNsYXNzU2V0IiwiaGFuZGxlRXhwYW5kQ2hhbmdlIiwiYm9vbCIsIm1vdXNlRXZlbnRzIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwicHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLFFBQTVCLFFBQTRDLE9BQTVDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFNBQWpCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixXQUE1QjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQTZCQSxJQUFNQyxPQUFnQyxHQUFHLFNBQW5DQSxPQUFtQyxPQU9wQjtBQUFBOztBQUFBLE1BTm5CQyxTQU1tQixRQU5uQkEsU0FNbUI7QUFBQSxNQUxuQkMsUUFLbUIsUUFMbkJBLFFBS21CO0FBQUEsTUFKbkJDLFFBSW1CLFFBSm5CQSxRQUltQjtBQUFBLE1BSG5CQyxLQUdtQixRQUhuQkEsS0FHbUI7QUFBQSxNQUZuQkMsS0FFbUIsUUFGbkJBLEtBRW1CO0FBQUEsTUFEaEJDLFVBQ2dCOztBQUFBLGtCQUNLWixRQUFRLENBQUMsS0FBRCxDQURiO0FBQUE7QUFBQSxNQUNaYSxJQURZO0FBQUEsTUFDTkMsT0FETTs7QUFBQSxvQkFHUWYsVUFBVSxDQUFDSyxXQUFELENBSGxCO0FBQUEsTUFHWFcsY0FIVyxlQUdYQSxjQUhXOztBQUtuQixNQUFNQyxRQUFRLEdBQUdkLFVBQVUsQ0FBQ0ssU0FBRCxZQUFlRixNQUFmLHFFQUNyQkEsTUFEcUIsZ0JBQ0RRLElBREMsMENBRXJCUixNQUZxQixvQkFFR0ksUUFGSCxnQkFBM0I7O0FBS0EsTUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQW1CO0FBQzVDLFFBQUlILGNBQUosRUFBb0I7QUFDbEJBLE1BQUFBLGNBQWMsQ0FBQ0wsS0FBRCxFQUFRUSxJQUFSLENBQWQ7QUFDRDs7QUFDREosSUFBQUEsT0FBTyxDQUFDSSxJQUFELENBQVA7QUFDRCxHQUxEOztBQU9BLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFFQSxNQUFJLENBQUNWLFFBQUwsRUFBZTtBQUNiVSxJQUFBQSxXQUFXLEdBQUc7QUFDWkMsTUFBQUEsWUFBWSxFQUFFO0FBQUEsZUFBTUgsa0JBQWtCLENBQUMsSUFBRCxDQUF4QjtBQUFBLE9BREY7QUFFWkksTUFBQUEsWUFBWSxFQUFFO0FBQUEsZUFBTUosa0JBQWtCLENBQUMsS0FBRCxDQUF4QjtBQUFBO0FBRkYsS0FBZDtBQUlEOztBQUVELFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRUQsUUFEYjtBQUVFLGtCQUFZTjtBQUZkLEtBR01TLFdBSE4sRUFJTVAsVUFKTixHQU1FO0FBQUssSUFBQSxTQUFTLFlBQUtQLE1BQUw7QUFBZCxLQUNFLGtDQUFPTSxLQUFQLENBREYsRUFFRSxvQkFBQyxJQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUMsZ0JBQVg7QUFBNEIsSUFBQSxTQUFTLFlBQUtOLE1BQUw7QUFBckMsSUFGRixDQU5GLEVBVUU7QUFBSyxJQUFBLFNBQVMsWUFBS0EsTUFBTDtBQUFkLEtBQXVDRyxRQUF2QyxDQVZGLENBREY7QUFjRCxDQS9DRDs7QUFpREFGLE9BQU8sQ0FBQ2dCLFNBQVIsR0FBb0I7QUFJbEJkLEVBQUFBLFFBQVEsRUFBRVAsU0FBUyxDQUFDc0IsSUFKRjtBQVFsQmhCLEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDdUIsTUFSSDtBQVlsQmYsRUFBQUEsUUFBUSxFQUFFUixTQUFTLENBQUNpQixJQVpGO0FBZ0JsQlIsRUFBQUEsS0FBSyxFQUFFVCxTQUFTLENBQUN3QixTQUFWLENBQW9CLENBQUN4QixTQUFTLENBQUN1QixNQUFYLEVBQW1CdkIsU0FBUyxDQUFDeUIsTUFBN0IsQ0FBcEIsRUFBMERDLFVBaEIvQztBQW9CbEJoQixFQUFBQSxLQUFLLEVBQUVWLFNBQVMsQ0FBQ3NCO0FBcEJDLENBQXBCO0FBdUJBakIsT0FBTyxDQUFDc0IsWUFBUixHQUF1QjtBQUNyQnBCLEVBQUFBLFFBQVEsRUFBRSxJQURXO0FBRXJCRCxFQUFBQSxTQUFTLEVBQUVzQixTQUZVO0FBR3JCcEIsRUFBQUEsUUFBUSxFQUFFLEtBSFc7QUFJckJFLEVBQUFBLEtBQUssRUFBRTtBQUpjLENBQXZCO0FBT0EsZUFBZUwsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCB7IE1lbnVDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLW1lbnVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWJNZW51UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogQm9vbGVhblxuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUmVhY3QuUmVhY3RUZXh0XG4gIC8qKlxuICAgKiBzdWJuYXYg5qCH6aKYXG4gICAqL1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOihjOWKqOiPnOWNlSAtIOWtkOiPnOWNlVxuICovXG5jb25zdCBTdWJNZW51OiBSZWFjdC5GQzxJU3ViTWVudVByb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBpbmRleCxcbiAgdGl0bGUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElTdWJNZW51UHJvcHMpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgeyBvbkV4cGFuZENoYW5nZSB9ID0gdXNlQ29udGV4dChNZW51Q29udGV4dClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LXN1YmAsIHtcbiAgICBbYCR7cHJlZml4fS1zdWJfb3BlbmBdOiBvcGVuLFxuICAgIFtgJHtwcmVmaXh9LXN1Yl9kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgfSlcblxuICBjb25zdCBoYW5kbGVFeHBhbmRDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgIGlmIChvbkV4cGFuZENoYW5nZSkge1xuICAgICAgb25FeHBhbmRDaGFuZ2UoaW5kZXgsIGJvb2wpXG4gICAgfVxuICAgIHNldE9wZW4oYm9vbClcbiAgfVxuXG4gIGxldCBtb3VzZUV2ZW50cyA9IHt9XG5cbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIG1vdXNlRXZlbnRzID0ge1xuICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiBoYW5kbGVFeHBhbmRDaGFuZ2UodHJ1ZSksXG4gICAgICBvbk1vdXNlTGVhdmU6ICgpID0+IGhhbmRsZUV4cGFuZENoYW5nZShmYWxzZSksXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgZGF0YS1pbmRleD17aW5kZXh9XG4gICAgICB7Li4ubW91c2VFdmVudHN9XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zdWJUaXRsZWB9PlxuICAgICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxuICAgICAgICA8SWNvbiBpY29uPVwidHJpYW5nbGUtcmlnaHRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWRyb3Bkb3duYH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblN1Yk1lbnUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog54us56uL55qEIGluZGV4IHJlcXVpcmVkXG4gICAqL1xuICBpbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBzdWJuYXYg5qCH6aKYXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG59XG5cblN1Yk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgdGl0bGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Yk1lbnVcbiJdfQ==