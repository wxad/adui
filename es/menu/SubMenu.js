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
      minWidth = _useContext.minWidth,
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
    className: "".concat(prefix, "-dropdown"),
    style: {
      minWidth: minWidth
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9TdWJNZW51LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJJY29uIiwiTWVudUNvbnRleHQiLCJwcmVmaXgiLCJTdWJNZW51IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkaXNhYmxlZCIsImluZGV4IiwidGl0bGUiLCJvdGhlclByb3BzIiwib3BlbiIsInNldE9wZW4iLCJtaW5XaWR0aCIsIm9uRXhwYW5kQ2hhbmdlIiwiY2xhc3NTZXQiLCJoYW5kbGVFeHBhbmRDaGFuZ2UiLCJib29sIiwibW91c2VFdmVudHMiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsUUFBNUIsUUFBNEMsT0FBNUM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsU0FBakI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLFdBQTVCO0FBQ0EsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLFdBQWY7O0FBNkJBLElBQU1DLE9BQWdDLEdBQUcsU0FBbkNBLE9BQW1DLE9BT3BCO0FBQUE7O0FBQUEsTUFObkJDLFNBTW1CLFFBTm5CQSxTQU1tQjtBQUFBLE1BTG5CQyxRQUttQixRQUxuQkEsUUFLbUI7QUFBQSxNQUpuQkMsUUFJbUIsUUFKbkJBLFFBSW1CO0FBQUEsTUFIbkJDLEtBR21CLFFBSG5CQSxLQUdtQjtBQUFBLE1BRm5CQyxLQUVtQixRQUZuQkEsS0FFbUI7QUFBQSxNQURoQkMsVUFDZ0I7O0FBQUEsa0JBQ0taLFFBQVEsQ0FBQyxLQUFELENBRGI7QUFBQTtBQUFBLE1BQ1phLElBRFk7QUFBQSxNQUNOQyxPQURNOztBQUFBLG9CQUdrQmYsVUFBVSxDQUFDSyxXQUFELENBSDVCO0FBQUEsTUFHWFcsUUFIVyxlQUdYQSxRQUhXO0FBQUEsTUFHREMsY0FIQyxlQUdEQSxjQUhDOztBQUtuQixNQUFNQyxRQUFRLEdBQUdmLFVBQVUsQ0FBQ0ssU0FBRCxZQUFlRixNQUFmLHFFQUNyQkEsTUFEcUIsZ0JBQ0RRLElBREMsMENBRXJCUixNQUZxQixvQkFFR0ksUUFGSCxnQkFBM0I7O0FBS0EsTUFBTVMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQW1CO0FBQzVDLFFBQUlILGNBQUosRUFBb0I7QUFDbEJBLE1BQUFBLGNBQWMsQ0FBQ04sS0FBRCxFQUFRUyxJQUFSLENBQWQ7QUFDRDs7QUFDREwsSUFBQUEsT0FBTyxDQUFDSyxJQUFELENBQVA7QUFDRCxHQUxEOztBQU9BLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFFQSxNQUFJLENBQUNYLFFBQUwsRUFBZTtBQUNiVyxJQUFBQSxXQUFXLEdBQUc7QUFDWkMsTUFBQUEsWUFBWSxFQUFFO0FBQUEsZUFBTUgsa0JBQWtCLENBQUMsSUFBRCxDQUF4QjtBQUFBLE9BREY7QUFFWkksTUFBQUEsWUFBWSxFQUFFO0FBQUEsZUFBTUosa0JBQWtCLENBQUMsS0FBRCxDQUF4QjtBQUFBO0FBRkYsS0FBZDtBQUlEOztBQUVELFNBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBRUQsUUFEYjtBQUVFLGtCQUFZUDtBQUZkLEtBR01VLFdBSE4sRUFJTVIsVUFKTixHQU1FO0FBQUssSUFBQSxTQUFTLFlBQUtQLE1BQUw7QUFBZCxLQUNFLGtDQUFPTSxLQUFQLENBREYsRUFFRSxvQkFBQyxJQUFEO0FBQU0sSUFBQSxJQUFJLEVBQUMsZ0JBQVg7QUFBNEIsSUFBQSxTQUFTLFlBQUtOLE1BQUw7QUFBckMsSUFGRixDQU5GLEVBVUU7QUFBSyxJQUFBLFNBQVMsWUFBS0EsTUFBTCxjQUFkO0FBQXNDLElBQUEsS0FBSyxFQUFFO0FBQUVVLE1BQUFBLFFBQVEsRUFBUkE7QUFBRjtBQUE3QyxLQUNHUCxRQURILENBVkYsQ0FERjtBQWdCRCxDQWpERDs7QUFtREFGLE9BQU8sQ0FBQ2lCLFNBQVIsR0FBb0I7QUFJbEJmLEVBQUFBLFFBQVEsRUFBRVAsU0FBUyxDQUFDdUIsSUFKRjtBQVFsQmpCLEVBQUFBLFNBQVMsRUFBRU4sU0FBUyxDQUFDd0IsTUFSSDtBQVlsQmhCLEVBQUFBLFFBQVEsRUFBRVIsU0FBUyxDQUFDa0IsSUFaRjtBQWdCbEJULEVBQUFBLEtBQUssRUFBRVQsU0FBUyxDQUFDeUIsU0FBVixDQUFvQixDQUFDekIsU0FBUyxDQUFDd0IsTUFBWCxFQUFtQnhCLFNBQVMsQ0FBQzBCLE1BQTdCLENBQXBCLEVBQTBEQyxVQWhCL0M7QUFvQmxCakIsRUFBQUEsS0FBSyxFQUFFVixTQUFTLENBQUN1QjtBQXBCQyxDQUFwQjtBQXVCQWxCLE9BQU8sQ0FBQ3VCLFlBQVIsR0FBdUI7QUFDckJyQixFQUFBQSxRQUFRLEVBQUUsSUFEVztBQUVyQkQsRUFBQUEsU0FBUyxFQUFFdUIsU0FGVTtBQUdyQnJCLEVBQUFBLFFBQVEsRUFBRSxLQUhXO0FBSXJCRSxFQUFBQSxLQUFLLEVBQUU7QUFKYyxDQUF2QjtBQU9BLGVBQWVMLE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgeyBNZW51Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1tZW51XCJcblxuZXhwb3J0IGludGVyZmFjZSBJU3ViTWVudVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IEJvb2xlYW5cbiAgLyoqXG4gICAqIOeLrOeri+eahCBpbmRleCByZXF1aXJlZFxuICAgKi9cbiAgaW5kZXg6IFJlYWN0LlJlYWN0VGV4dFxuICAvKipcbiAgICogc3VibmF2IOagh+mimFxuICAgKi9cbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDooYzliqjoj5zljZUgLSDlrZDoj5zljZVcbiAqL1xuY29uc3QgU3ViTWVudTogUmVhY3QuRkM8SVN1Yk1lbnVQcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBkaXNhYmxlZCxcbiAgaW5kZXgsXG4gIHRpdGxlLFxuICAuLi5vdGhlclByb3BzXG59OiBJU3ViTWVudVByb3BzKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHsgbWluV2lkdGgsIG9uRXhwYW5kQ2hhbmdlIH0gPSB1c2VDb250ZXh0KE1lbnVDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tc3ViYCwge1xuICAgIFtgJHtwcmVmaXh9LXN1Yl9vcGVuYF06IG9wZW4sXG4gICAgW2Ake3ByZWZpeH0tc3ViX2Rpc2FibGVkYF06IGRpc2FibGVkLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUV4cGFuZENoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKG9uRXhwYW5kQ2hhbmdlKSB7XG4gICAgICBvbkV4cGFuZENoYW5nZShpbmRleCwgYm9vbClcbiAgICB9XG4gICAgc2V0T3Blbihib29sKVxuICB9XG5cbiAgbGV0IG1vdXNlRXZlbnRzID0ge31cblxuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgbW91c2VFdmVudHMgPSB7XG4gICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IGhhbmRsZUV4cGFuZENoYW5nZSh0cnVlKSxcbiAgICAgIG9uTW91c2VMZWF2ZTogKCkgPT4gaGFuZGxlRXhwYW5kQ2hhbmdlKGZhbHNlKSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBkYXRhLWluZGV4PXtpbmRleH1cbiAgICAgIHsuLi5tb3VzZUV2ZW50c31cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXN1YlRpdGxlYH0+XG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgIDxJY29uIGljb249XCJ0cmlhbmdsZS1yaWdodFwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZHJvcGRvd25gfSBzdHlsZT17eyBtaW5XaWR0aCB9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuU3ViTWVudS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDni6znq4vnmoQgaW5kZXggcmVxdWlyZWRcbiAgICovXG4gIGluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIHN1Ym5hdiDmoIfpophcbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcbn1cblxuU3ViTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICB0aXRsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ViTWVudVxuIl19