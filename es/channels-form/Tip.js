function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style";
var prefix = "adui-channels-form";

var Tip = function Tip(props) {
  var children = props.children,
      className = props.className,
      intent = props.intent,
      otherProps = _objectWithoutProperties(props, ["children", "className", "intent"]);

  var classSet = classNames(className, "".concat(prefix, "-tip"), "".concat(prefix, "-tip_").concat(intent));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), children);
};

Tip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  intent: PropTypes.oneOf(["normal", "primary", "success", "warning", "danger"])
};
Tip.defaultProps = {
  children: null,
  className: null,
  intent: "normal"
};
export default Tip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZm9ybS9UaXAudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NOYW1lcyIsInByZWZpeCIsIlRpcCIsInByb3BzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpbnRlbnQiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLG9CQUFmOztBQXFCQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQXNCO0FBQUEsTUFDeEJDLFFBRHdCLEdBQ3VCRCxLQUR2QixDQUN4QkMsUUFEd0I7QUFBQSxNQUNkQyxTQURjLEdBQ3VCRixLQUR2QixDQUNkRSxTQURjO0FBQUEsTUFDSEMsTUFERyxHQUN1QkgsS0FEdkIsQ0FDSEcsTUFERztBQUFBLE1BQ1FDLFVBRFIsNEJBQ3VCSixLQUR2Qjs7QUFHaEMsTUFBTUssUUFBUSxHQUFHUixVQUFVLENBQ3pCSyxTQUR5QixZQUV0QkosTUFGc0IscUJBR3RCQSxNQUhzQixrQkFHUkssTUFIUSxFQUEzQjtBQU1BLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBRUU7QUFBaEIsS0FBOEJELFVBQTlCLEdBQ0dILFFBREgsQ0FERjtBQUtELENBZEQ7O0FBZ0JBRixHQUFHLENBQUNPLFNBQUosR0FBZ0I7QUFJZEwsRUFBQUEsUUFBUSxFQUFFTCxTQUFTLENBQUNXLElBSk47QUFRZEwsRUFBQUEsU0FBUyxFQUFFTixTQUFTLENBQUNZLE1BUlA7QUFZZEwsRUFBQUEsTUFBTSxFQUFFUCxTQUFTLENBQUNhLEtBQVYsQ0FBZ0IsQ0FDdEIsUUFEc0IsRUFFdEIsU0FGc0IsRUFHdEIsU0FIc0IsRUFJdEIsU0FKc0IsRUFLdEIsUUFMc0IsQ0FBaEI7QUFaTSxDQUFoQjtBQXFCQVYsR0FBRyxDQUFDVyxZQUFKLEdBQW1CO0FBQ2pCVCxFQUFBQSxRQUFRLEVBQUUsSUFETztBQUVqQkMsRUFBQUEsU0FBUyxFQUFFLElBRk07QUFHakJDLEVBQUFBLE1BQU0sRUFBRTtBQUhTLENBQW5CO0FBTUEsZUFBZUosR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtZm9ybVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRpcFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxufVxuXG4vKipcbiAqIOihqOWNlSB0aXBcbiAqL1xuY29uc3QgVGlwID0gKHByb3BzOiBJVGlwUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBpbnRlbnQsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LXRpcGAsXG4gICAgYCR7cHJlZml4fS10aXBfJHtpbnRlbnR9YFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5UaXAucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG59XG5cblRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIGludGVudDogXCJub3JtYWxcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlwXG4iXX0=