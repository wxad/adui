function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Header from "./Header";
import "./style";
var prefix = "adui-card";
var Card = forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      elevation = _ref.elevation,
      interactive = _ref.interactive,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "elevation", "interactive"]);

  var classSet = classNames(className, "".concat(prefix, "-base"), "".concat(prefix, "-elevation_").concat(elevation), _defineProperty({}, "".concat(prefix, "-interactive"), interactive));
  return React.createElement("div", _extends({
    ref: ref,
    className: classSet
  }, otherProps), children);
});
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),
  interactive: PropTypes.bool
};
Card.defaultProps = {
  children: "",
  className: undefined,
  elevation: 1,
  interactive: false
};
Card.Header = Header;
export default Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9DYXJkLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiSGVhZGVyIiwicHJlZml4IiwiQ2FyZCIsInJlZiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZWxldmF0aW9uIiwiaW50ZXJhY3RpdmUiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib25lT2YiLCJib29sIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFVBQWhCLFFBQWtDLE9BQWxDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsT0FBTyxTQUFQO0FBRUEsSUFBTUMsTUFBTSxHQUFHLFdBQWY7QUFpQ0EsSUFBTUMsSUFBVyxHQUFHTCxVQUFVLENBQzVCLGdCQUVFTSxHQUZGLEVBR0s7QUFBQSxNQUZEQyxRQUVDLFFBRkRBLFFBRUM7QUFBQSxNQUZTQyxTQUVULFFBRlNBLFNBRVQ7QUFBQSxNQUZvQkMsU0FFcEIsUUFGb0JBLFNBRXBCO0FBQUEsTUFGK0JDLFdBRS9CLFFBRitCQSxXQUUvQjtBQUFBLE1BRitDQyxVQUUvQzs7QUFDSCxNQUFNQyxRQUFRLEdBQUdWLFVBQVUsQ0FDekJNLFNBRHlCLFlBRXRCSixNQUZzQixzQkFHdEJBLE1BSHNCLHdCQUdGSyxTQUhFLGlDQUtuQkwsTUFMbUIsbUJBS0lNLFdBTEosRUFBM0I7QUFRQSxTQUNFO0FBQUssSUFBQSxHQUFHLEVBQUVKLEdBQVY7QUFBZSxJQUFBLFNBQVMsRUFBRU07QUFBMUIsS0FBd0NELFVBQXhDLEdBQ0dKLFFBREgsQ0FERjtBQUtELENBbEIyQixDQUE5QjtBQW9CQUYsSUFBSSxDQUFDUSxTQUFMLEdBQWlCO0FBSWZOLEVBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDYSxJQUpMO0FBUWZOLEVBQUFBLFNBQVMsRUFBRVAsU0FBUyxDQUFDYyxNQVJOO0FBWWZOLEVBQUFBLFNBQVMsRUFBRVIsU0FBUyxDQUFDZSxLQUFWLENBQWdCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBaEIsQ0FaSTtBQWdCZk4sRUFBQUEsV0FBVyxFQUFFVCxTQUFTLENBQUNnQjtBQWhCUixDQUFqQjtBQW1CQVosSUFBSSxDQUFDYSxZQUFMLEdBQW9CO0FBQ2xCWCxFQUFBQSxRQUFRLEVBQUUsRUFEUTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFVyxTQUZPO0FBR2xCVixFQUFBQSxTQUFTLEVBQUUsQ0FITztBQUlsQkMsRUFBQUEsV0FBVyxFQUFFO0FBSkssQ0FBcEI7QUFPQUwsSUFBSSxDQUFDRixNQUFMLEdBQWNBLE1BQWQ7QUFFQSxlQUFlRSxJQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNhcmRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElDYXJkUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlsYLnuqdcbiAgICovXG4gIGVsZXZhdGlvbj86IDAgfCAxIHwgMiB8IDMgfCA0XG4gIC8qKlxuICAgKiDlj69cYuS6kuWKqOaAp1xuICAgKi9cbiAgaW50ZXJhY3RpdmU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhcmRcbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElDYXJkUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuICA+IHtcbiAgSGVhZGVyOiB0eXBlb2YgSGVhZGVyXG59XG5cbi8qKlxuICog5Y2h54mH5piv5YyF5ZCr5LiA57G754m55a6a5pWw5o2u6ZuG55qE5pyJ5bGC57qn55qE5qih5Z2X77yM55So5Lul5om/6L2955u45YWz6IGU5YaF5a6544CC6aG16Z2i6K6+6K6h5Lit77yM6YCa5bi45Lul5YaF5a655Yaz5a6a5Y2h54mH55qE5biD5bGA5pa55byP44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IENhcmQ6IElDYXJkID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZWxldmF0aW9uLCBpbnRlcmFjdGl2ZSwgLi4ub3RoZXJQcm9wcyB9OiBJQ2FyZFByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LWJhc2VgLFxuICAgICAgYCR7cHJlZml4fS1lbGV2YXRpb25fJHtlbGV2YXRpb259YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0taW50ZXJhY3RpdmVgXTogaW50ZXJhY3RpdmUsXG4gICAgICB9XG4gICAgKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5bGC57qnXG4gICAqL1xuICBlbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuICAvKipcbiAgICog5Y+vXGLkupLliqjmgKdcbiAgICovXG4gIGludGVyYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBcIlwiLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZWxldmF0aW9uOiAxLFxuICBpbnRlcmFjdGl2ZTogZmFsc2UsXG59XG5cbkNhcmQuSGVhZGVyID0gSGVhZGVyXG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdfQ==