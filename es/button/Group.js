function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ButtonGroupContext } from "./Context";
import "./style";
var prefix = "adui-button";

var Group = function Group(_ref) {
  var banner = _ref.banner,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      intent = _ref.intent,
      size = _ref.size,
      theme = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["banner", "children", "className", "disabled", "intent", "size", "theme"]);

  var classSet = classNames(className, "".concat(prefix, "-group"), _defineProperty({}, "".concat(prefix, "-group_banner"), banner));
  return React.createElement(ButtonGroupContext.Provider, {
    value: {
      disabled: disabled,
      intent: intent,
      size: size,
      theme: theme
    }
  }, React.createElement("div", _extends({
    className: classSet
  }, otherProps), children));
};

Group.propTypes = {
  banner: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"]),
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  theme: PropTypes.oneOf([null, "light"])
};
Group.defaultProps = {
  banner: false,
  children: null,
  className: undefined,
  disabled: false,
  intent: "normal",
  size: "small",
  theme: null
};
export default Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL0dyb3VwLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJCdXR0b25Hcm91cENvbnRleHQiLCJwcmVmaXgiLCJHcm91cCIsImJhbm5lciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJpbnRlbnQiLCJzaXplIiwidGhlbWUiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsU0FBU0Msa0JBQVQsUUFBbUMsV0FBbkM7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsYUFBZjs7QUFxQ0EsSUFBTUMsS0FBa0MsR0FBRyxTQUFyQ0EsS0FBcUMsT0FTbEI7QUFBQSxNQVJ2QkMsTUFRdUIsUUFSdkJBLE1BUXVCO0FBQUEsTUFQdkJDLFFBT3VCLFFBUHZCQSxRQU91QjtBQUFBLE1BTnZCQyxTQU11QixRQU52QkEsU0FNdUI7QUFBQSxNQUx2QkMsUUFLdUIsUUFMdkJBLFFBS3VCO0FBQUEsTUFKdkJDLE1BSXVCLFFBSnZCQSxNQUl1QjtBQUFBLE1BSHZCQyxJQUd1QixRQUh2QkEsSUFHdUI7QUFBQSxNQUZ2QkMsS0FFdUIsUUFGdkJBLEtBRXVCO0FBQUEsTUFEcEJDLFVBQ29COztBQUN2QixNQUFNQyxRQUFRLEdBQUdaLFVBQVUsQ0FBQ00sU0FBRCxZQUFlSixNQUFmLDJDQUNyQkEsTUFEcUIsb0JBQ0dFLE1BREgsRUFBM0I7QUFJQSxTQUNFLG9CQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLElBQUEsS0FBSyxFQUFFO0FBQUVHLE1BQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZQyxNQUFBQSxNQUFNLEVBQU5BLE1BQVo7QUFBb0JDLE1BQUFBLElBQUksRUFBSkEsSUFBcEI7QUFBMEJDLE1BQUFBLEtBQUssRUFBTEE7QUFBMUI7QUFBcEMsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFRTtBQUFoQixLQUE4QkQsVUFBOUIsR0FDR04sUUFESCxDQURGLENBREY7QUFPRCxDQXJCRDs7QUF1QkFGLEtBQUssQ0FBQ1UsU0FBTixHQUFrQjtBQUloQlQsRUFBQUEsTUFBTSxFQUFFTCxTQUFTLENBQUNlLElBSkY7QUFRaEJULEVBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDZ0IsSUFSSjtBQVloQlQsRUFBQUEsU0FBUyxFQUFFUCxTQUFTLENBQUNpQixNQVpMO0FBZ0JoQlQsRUFBQUEsUUFBUSxFQUFFUixTQUFTLENBQUNlLElBaEJKO0FBb0JoQk4sRUFBQUEsTUFBTSxFQUFFVCxTQUFTLENBQUNrQixLQUFWLENBQWdCLENBQ3RCLFFBRHNCLEVBRXRCLFNBRnNCLEVBR3RCLFNBSHNCLEVBSXRCLFNBSnNCLEVBS3RCLFFBTHNCLENBQWhCLENBcEJRO0FBOEJoQlIsRUFBQUEsSUFBSSxFQUFFVixTQUFTLENBQUNrQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0E5QlU7QUFrQ2hCUCxFQUFBQSxLQUFLLEVBQUVYLFNBQVMsQ0FBQ2tCLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFoQjtBQWxDUyxDQUFsQjtBQW9DQWQsS0FBSyxDQUFDZSxZQUFOLEdBQXFCO0FBQ25CZCxFQUFBQSxNQUFNLEVBQUUsS0FEVztBQUVuQkMsRUFBQUEsUUFBUSxFQUFFLElBRlM7QUFHbkJDLEVBQUFBLFNBQVMsRUFBRWEsU0FIUTtBQUluQlosRUFBQUEsUUFBUSxFQUFFLEtBSlM7QUFLbkJDLEVBQUFBLE1BQU0sRUFBRSxRQUxXO0FBTW5CQyxFQUFBQSxJQUFJLEVBQUUsT0FOYTtBQU9uQkMsRUFBQUEsS0FBSyxFQUFFO0FBUFksQ0FBckI7QUFVQSxlQUFlUCxLQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQnV0dG9uR3JvdXBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWJ1dHRvblwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvbkdyb3VwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpumAmuagj+WIhumFjeWuveW6pu+8iGZsZXg6IDE777yJXG4gICAqL1xuICBiYW5uZXI/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u5YaF6YOo5omA5pyJIDxCdXR0b24gLz4g5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOiuvue9ruWGhemDqOaJgOaciSA8QnV0dG9uIC8+IOexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOiuvue9ruWGhemDqOaJgOaciSA8QnV0dG9uIC8+IOWwuuWvuFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog6K6+572u5YaF6YOo5omA5pyJIDxCdXR0b24gLz4g5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbn1cblxuLyoqXG4gKiDmjInpkq7nu4RcbiAqL1xuY29uc3QgR3JvdXA6IFJlYWN0LkZDPElCdXR0b25Hcm91cFByb3BzPiA9ICh7XG4gIGJhbm5lcixcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZGlzYWJsZWQsXG4gIGludGVudCxcbiAgc2l6ZSxcbiAgdGhlbWUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElCdXR0b25Hcm91cFByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tZ3JvdXBgLCB7XG4gICAgW2Ake3ByZWZpeH0tZ3JvdXBfYmFubmVyYF06IGJhbm5lcixcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZGlzYWJsZWQsIGludGVudCwgc2l6ZSwgdGhlbWUgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9CdXR0b25Hcm91cENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuR3JvdXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5piv5ZCm6YCa5qCP5YiG6YWN5a695bqm77yIZmxleDogMTvvvIlcbiAgICovXG4gIGJhbm5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6K6+572u5YaF6YOo5omA5pyJIDxCdXR0b24gLz4g5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDorr7nva7lhoXpg6jmiYDmnIkgPEJ1dHRvbiAvPiDnsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcIm5vcm1hbFwiLFxuICAgIFwicHJpbWFyeVwiLFxuICAgIFwic3VjY2Vzc1wiLFxuICAgIFwid2FybmluZ1wiLFxuICAgIFwiZGFuZ2VyXCIsXG4gIF0pLFxuICAvKipcbiAgICog6K6+572u5YaF6YOo5omA5pyJIDxCdXR0b24gLz4g5bC65a+4XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAvKipcbiAgICog6K6+572u5YaF6YOo5omA5pyJIDxCdXR0b24gLz4g5Li76aKYXG4gICAqL1xuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbn1cbkdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFubmVyOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgc2l6ZTogXCJzbWFsbFwiLFxuICB0aGVtZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBcbiJdfQ==