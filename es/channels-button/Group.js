function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ButtonGroupContext } from "./Context";
import "./style";
var prefix = "adui-channels-button";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtYnV0dG9uL0dyb3VwLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJCdXR0b25Hcm91cENvbnRleHQiLCJwcmVmaXgiLCJHcm91cCIsImJhbm5lciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJpbnRlbnQiLCJzaXplIiwidGhlbWUiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsInN0cmluZyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsU0FBU0Msa0JBQVQsUUFBbUMsV0FBbkM7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsc0JBQWY7O0FBcUNBLElBQU1DLEtBQWtDLEdBQUcsU0FBckNBLEtBQXFDLE9BU2xCO0FBQUEsTUFSdkJDLE1BUXVCLFFBUnZCQSxNQVF1QjtBQUFBLE1BUHZCQyxRQU91QixRQVB2QkEsUUFPdUI7QUFBQSxNQU52QkMsU0FNdUIsUUFOdkJBLFNBTXVCO0FBQUEsTUFMdkJDLFFBS3VCLFFBTHZCQSxRQUt1QjtBQUFBLE1BSnZCQyxNQUl1QixRQUp2QkEsTUFJdUI7QUFBQSxNQUh2QkMsSUFHdUIsUUFIdkJBLElBR3VCO0FBQUEsTUFGdkJDLEtBRXVCLFFBRnZCQSxLQUV1QjtBQUFBLE1BRHBCQyxVQUNvQjs7QUFDdkIsTUFBTUMsUUFBUSxHQUFHWixVQUFVLENBQUNNLFNBQUQsWUFBZUosTUFBZiwyQ0FDckJBLE1BRHFCLG9CQUNHRSxNQURILEVBQTNCO0FBSUEsU0FDRSxvQkFBQyxrQkFBRCxDQUFvQixRQUFwQjtBQUE2QixJQUFBLEtBQUssRUFBRTtBQUFFRyxNQUFBQSxRQUFRLEVBQVJBLFFBQUY7QUFBWUMsTUFBQUEsTUFBTSxFQUFOQSxNQUFaO0FBQW9CQyxNQUFBQSxJQUFJLEVBQUpBLElBQXBCO0FBQTBCQyxNQUFBQSxLQUFLLEVBQUxBO0FBQTFCO0FBQXBDLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUU7QUFBaEIsS0FBOEJELFVBQTlCLEdBQ0dOLFFBREgsQ0FERixDQURGO0FBT0QsQ0FyQkQ7O0FBdUJBRixLQUFLLENBQUNVLFNBQU4sR0FBa0I7QUFJaEJULEVBQUFBLE1BQU0sRUFBRUwsU0FBUyxDQUFDZSxJQUpGO0FBUWhCVCxFQUFBQSxRQUFRLEVBQUVOLFNBQVMsQ0FBQ2dCLElBUko7QUFZaEJULEVBQUFBLFNBQVMsRUFBRVAsU0FBUyxDQUFDaUIsTUFaTDtBQWdCaEJULEVBQUFBLFFBQVEsRUFBRVIsU0FBUyxDQUFDZSxJQWhCSjtBQW9CaEJOLEVBQUFBLE1BQU0sRUFBRVQsU0FBUyxDQUFDa0IsS0FBVixDQUFnQixDQUN0QixRQURzQixFQUV0QixTQUZzQixFQUd0QixTQUhzQixFQUl0QixTQUpzQixFQUt0QixRQUxzQixDQUFoQixDQXBCUTtBQThCaEJSLEVBQUFBLElBQUksRUFBRVYsU0FBUyxDQUFDa0IsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCLENBOUJVO0FBa0NoQlAsRUFBQUEsS0FBSyxFQUFFWCxTQUFTLENBQUNrQixLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLE9BQVAsQ0FBaEI7QUFsQ1MsQ0FBbEI7QUFvQ0FkLEtBQUssQ0FBQ2UsWUFBTixHQUFxQjtBQUNuQmQsRUFBQUEsTUFBTSxFQUFFLEtBRFc7QUFFbkJDLEVBQUFBLFFBQVEsRUFBRSxJQUZTO0FBR25CQyxFQUFBQSxTQUFTLEVBQUVhLFNBSFE7QUFJbkJaLEVBQUFBLFFBQVEsRUFBRSxLQUpTO0FBS25CQyxFQUFBQSxNQUFNLEVBQUUsUUFMVztBQU1uQkMsRUFBQUEsSUFBSSxFQUFFLE9BTmE7QUFPbkJDLEVBQUFBLEtBQUssRUFBRTtBQVBZLENBQXJCO0FBVUEsZUFBZVAsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGFubmVscy1idXR0b25cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElCdXR0b25Hcm91cFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKbpgJrmoI/liIbphY3lrr3luqbvvIhmbGV4OiAxO++8iVxuICAgKi9cbiAgYmFubmVyPzogYm9vbGVhblxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruWGhemDqOaJgOaciSA8QnV0dG9uIC8+IOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDorr7nva7lhoXpg6jmiYDmnIkgPEJ1dHRvbiAvPiDnsbvlnotcbiAgICovXG4gIGludGVudD86IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDorr7nva7lhoXpg6jmiYDmnIkgPEJ1dHRvbiAvPiDlsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruWGhemDqOaJgOaciSA8QnV0dG9uIC8+IOS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG59XG5cbi8qKlxuICog5oyJ6ZKu57uEXG4gKi9cbmNvbnN0IEdyb3VwOiBSZWFjdC5GQzxJQnV0dG9uR3JvdXBQcm9wcz4gPSAoe1xuICBiYW5uZXIsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRpc2FibGVkLFxuICBpbnRlbnQsXG4gIHNpemUsXG4gIHRoZW1lLFxuICAuLi5vdGhlclByb3BzXG59OiBJQnV0dG9uR3JvdXBQcm9wcykgPT4ge1xuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LWdyb3VwYCwge1xuICAgIFtgJHtwcmVmaXh9LWdyb3VwX2Jhbm5lcmBdOiBiYW5uZXIsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGRpc2FibGVkLCBpbnRlbnQsIHNpemUsIHRoZW1lIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvQnV0dG9uR3JvdXBDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbkdyb3VwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOaYr+WQpumAmuagj+WIhumFjeWuveW6pu+8iGZsZXg6IDE777yJXG4gICAqL1xuICBiYW5uZXI6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruWGhemDqOaJgOaciSA8QnV0dG9uIC8+IOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog6K6+572u5YaF6YOo5omA5pyJIDxCdXR0b24gLz4g57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJub3JtYWxcIixcbiAgICBcInByaW1hcnlcIixcbiAgICBcInN1Y2Nlc3NcIixcbiAgICBcIndhcm5pbmdcIixcbiAgICBcImRhbmdlclwiLFxuICBdKSxcbiAgLyoqXG4gICAqIOiuvue9ruWGhemDqOaJgOaciSA8QnV0dG9uIC8+IOWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruWGhemDqOaJgOaciSA8QnV0dG9uIC8+IOS4u+mimFxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG59XG5Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhbm5lcjogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIHNpemU6IFwic21hbGxcIixcbiAgdGhlbWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwXG4iXX0=