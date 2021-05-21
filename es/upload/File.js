function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icon";
import Motion from "../motion";
import "./style";
var prefix = "adui-upload-file";
var File = forwardRef(function (_ref, ref) {
  var className = _ref.className,
      icon = _ref.icon,
      name = _ref.name,
      onIconClick = _ref.onIconClick,
      onUpload = _ref.onUpload,
      progress = _ref.progress,
      src = _ref.src,
      otherProps = _objectWithoutProperties(_ref, ["className", "icon", "name", "onIconClick", "onUpload", "progress", "src"]);

  var uploadElementRef = useRef(null);
  var classSet = classNames(className, "".concat(prefix), _defineProperty({}, "".concat(prefix, "-progressing"), progress !== null));
  useImperativeHandle(ref, function () {
    return {
      uploadElement: uploadElementRef.current
    };
  });
  return React.createElement(Motion, {
    transition: "zoom"
  }, !!name && React.createElement("div", _extends({
    role: "none",
    className: classSet
  }, otherProps), src ? React.createElement("a", {
    className: "".concat(prefix, "-link"),
    href: src,
    target: "_blank",
    rel: "noopener noreferrer",
    title: name
  }, name) : React.createElement("div", {
    className: "".concat(prefix, "-name"),
    title: name
  }, name), React.createElement(Icon, {
    icon: icon || "cancel",
    onClick: onIconClick,
    className: "".concat(prefix, "-icon")
  }), React.createElement("div", {
    className: "".concat(prefix, "-progress")
  }, React.createElement("i", {
    style: {
      width: "".concat(progress, "%")
    }
  }))));
});
File.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
  name: PropTypes.string,
  onIconClick: PropTypes.func,
  progress: PropTypes.number,
  src: PropTypes.string
};
File.defaultProps = {
  className: "",
  icon: "cancel",
  name: "",
  onIconClick: function onIconClick() {},
  progress: null,
  src: ""
};
export default File;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ZpbGUudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiZm9yd2FyZFJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJ1c2VSZWYiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiSWNvbiIsIk1vdGlvbiIsInByZWZpeCIsIkZpbGUiLCJyZWYiLCJjbGFzc05hbWUiLCJpY29uIiwibmFtZSIsIm9uSWNvbkNsaWNrIiwib25VcGxvYWQiLCJwcm9ncmVzcyIsInNyYyIsIm90aGVyUHJvcHMiLCJ1cGxvYWRFbGVtZW50UmVmIiwiY2xhc3NTZXQiLCJ1cGxvYWRFbGVtZW50IiwiY3VycmVudCIsIndpZHRoIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsbUJBQTVCLEVBQWlEQyxNQUFqRCxRQUErRCxPQUEvRDtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsSUFBUCxNQUFnQyxTQUFoQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsV0FBbkI7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsa0JBQWY7QUFpQ0EsSUFBTUMsSUFFTCxHQUFHUixVQUFVLENBQ1osZ0JBV0VTLEdBWEYsRUFZSztBQUFBLE1BVkRDLFNBVUMsUUFWREEsU0FVQztBQUFBLE1BVERDLElBU0MsUUFUREEsSUFTQztBQUFBLE1BUkRDLElBUUMsUUFSREEsSUFRQztBQUFBLE1BUERDLFdBT0MsUUFQREEsV0FPQztBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLEdBSUMsUUFKREEsR0FJQztBQUFBLE1BSEVDLFVBR0Y7O0FBQ0gsTUFBTUMsZ0JBQWdCLEdBQUdoQixNQUFNLENBQWlCLElBQWpCLENBQS9CO0FBRUEsTUFBTWlCLFFBQVEsR0FBR2YsVUFBVSxDQUFDTSxTQUFELFlBQWVILE1BQWYsaUNBQ3JCQSxNQURxQixtQkFDRVEsUUFBUSxLQUFLLElBRGYsRUFBM0I7QUFJQWQsRUFBQUEsbUJBQW1CLENBQUNRLEdBQUQsRUFBTTtBQUFBLFdBQU87QUFDOUJXLE1BQUFBLGFBQWEsRUFBRUYsZ0JBQWdCLENBQUNHO0FBREYsS0FBUDtBQUFBLEdBQU4sQ0FBbkI7QUFJQSxTQUNFLG9CQUFDLE1BQUQ7QUFBUSxJQUFBLFVBQVUsRUFBQztBQUFuQixLQUNHLENBQUMsQ0FBQ1QsSUFBRixJQUNDO0FBQUssSUFBQSxJQUFJLEVBQUMsTUFBVjtBQUFpQixJQUFBLFNBQVMsRUFBRU87QUFBNUIsS0FBMENGLFVBQTFDLEdBQ0dELEdBQUcsR0FDRjtBQUNFLElBQUEsU0FBUyxZQUFLVCxNQUFMLFVBRFg7QUFFRSxJQUFBLElBQUksRUFBRVMsR0FGUjtBQUdFLElBQUEsTUFBTSxFQUFDLFFBSFQ7QUFJRSxJQUFBLEdBQUcsRUFBQyxxQkFKTjtBQUtFLElBQUEsS0FBSyxFQUFFSjtBQUxULEtBT0dBLElBUEgsQ0FERSxHQVdGO0FBQUssSUFBQSxTQUFTLFlBQUtMLE1BQUwsVUFBZDtBQUFrQyxJQUFBLEtBQUssRUFBRUs7QUFBekMsS0FDR0EsSUFESCxDQVpKLEVBZ0JFLG9CQUFDLElBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUQsSUFBSSxJQUFJLFFBRGhCO0FBRUUsSUFBQSxPQUFPLEVBQUVFLFdBRlg7QUFHRSxJQUFBLFNBQVMsWUFBS04sTUFBTDtBQUhYLElBaEJGLEVBcUJFO0FBQUssSUFBQSxTQUFTLFlBQUtBLE1BQUw7QUFBZCxLQUNFO0FBQUcsSUFBQSxLQUFLLEVBQUU7QUFBRWUsTUFBQUEsS0FBSyxZQUFLUCxRQUFMO0FBQVA7QUFBVixJQURGLENBckJGLENBRkosQ0FERjtBQStCRCxDQXZEVyxDQUZkO0FBNERBUCxJQUFJLENBQUNlLFNBQUwsR0FBaUI7QUFJZmIsRUFBQUEsU0FBUyxFQUFFUCxTQUFTLENBQUNxQixNQUpOO0FBUWZiLEVBQUFBLElBQUksRUFBRVIsU0FBUyxDQUFDc0IsR0FSRDtBQVlmYixFQUFBQSxJQUFJLEVBQUVULFNBQVMsQ0FBQ3FCLE1BWkQ7QUFnQmZYLEVBQUFBLFdBQVcsRUFBRVYsU0FBUyxDQUFDdUIsSUFoQlI7QUFvQmZYLEVBQUFBLFFBQVEsRUFBRVosU0FBUyxDQUFDd0IsTUFwQkw7QUF3QmZYLEVBQUFBLEdBQUcsRUFBRWIsU0FBUyxDQUFDcUI7QUF4QkEsQ0FBakI7QUEyQkFoQixJQUFJLENBQUNvQixZQUFMLEdBQW9CO0FBQ2xCbEIsRUFBQUEsU0FBUyxFQUFFLEVBRE87QUFFbEJDLEVBQUFBLElBQUksRUFBRSxRQUZZO0FBR2xCQyxFQUFBQSxJQUFJLEVBQUUsRUFIWTtBQUlsQkMsRUFBQUEsV0FBVyxFQUFFLHVCQUFNLENBQUUsQ0FKSDtBQUtsQkUsRUFBQUEsUUFBUSxFQUFFLElBTFE7QUFNbEJDLEVBQUFBLEdBQUcsRUFBRTtBQU5hLENBQXBCO0FBU0EsZUFBZVIsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgTW90aW9uIGZyb20gXCIuLi9tb3Rpb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS11cGxvYWQtZmlsZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaMh+WumuWPs+Wbvuagh1xuICAgKi9cbiAgaWNvbj86IEljb25OYW1lc1xuICAvKipcbiAgICog5paH5Lu25ZCN77yM5q2kIFByb3Ag5Lya5o6n5Yi2IFVwbG9hZC5GaWxlIOaYvuekuuS4juWQplxuICAgKi9cbiAgbmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5Y+z5Zu+5qCH54K55Ye75pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uSWNvbkNsaWNrPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog6L+b5bqm77yM5Lyg5YWlIG51bGwg5pe26KGo56S65LiN5pi+56S66L+b5bqm5p2hXG4gICAqL1xuICBwcm9ncmVzcz86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOS4iuS8oOaIkOWKn+WQjueahOaWh+S7tuWcsOWdgO+8jOS8oOWFpeWQjuaWh+Wtl+S8muWPmOS4uumTvuaOpeagt+W8j1xuICAgKi9cbiAgc3JjPzogc3RyaW5nXG59XG5cbi8qKlxuICog5peL6L2s5Yqg6L2955So5LqO5ZGK55+l55So5oi35L+h5oGv5YaF5a6555qE5Yqg6L2954q25oCB77yM6YCa5bi45piv5Y2z5pe244CB55+t5pe255qE44CCXG4gKi9cbmNvbnN0IEZpbGU6IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gIElGaWxlUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT5cbj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWNvbixcbiAgICAgIG5hbWUsXG4gICAgICBvbkljb25DbGljayxcbiAgICAgIG9uVXBsb2FkLFxuICAgICAgcHJvZ3Jlc3MsXG4gICAgICBzcmMsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSUZpbGVQcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgdXBsb2FkRWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH1gLCB7XG4gICAgICBbYCR7cHJlZml4fS1wcm9ncmVzc2luZ2BdOiBwcm9ncmVzcyAhPT0gbnVsbCxcbiAgICB9KVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICB1cGxvYWRFbGVtZW50OiB1cGxvYWRFbGVtZW50UmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vdGlvbiB0cmFuc2l0aW9uPVwiem9vbVwiPlxuICAgICAgICB7ISFuYW1lICYmIChcbiAgICAgICAgICA8ZGl2IHJvbGU9XCJub25lXCIgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICAgICAge3NyYyA/IChcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbGlua2B9XG4gICAgICAgICAgICAgICAgaHJlZj17c3JjfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e25hbWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbmFtZWB9IHRpdGxlPXtuYW1lfT5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgaWNvbj17aWNvbiB8fCBcImNhbmNlbFwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkljb25DbGlja31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByb2dyZXNzYH0+XG4gICAgICAgICAgICAgIDxpIHN0eWxlPXt7IHdpZHRoOiBgJHtwcm9ncmVzc30lYCB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L01vdGlvbj5cbiAgICApXG4gIH1cbilcblxuRmlsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOaMh+WumuWPs+Wbvuagh1xuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOaWh+S7tuWQje+8jOatpCBQcm9wIOS8muaOp+WItiBVcGxvYWQuRmlsZSDmmL7npLrkuI7lkKZcbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDlj7Plm77moIfngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6L+b5bqm77yM5Lyg5YWlIG51bGwg5pe26KGo56S65LiN5pi+56S66L+b5bqm5p2hXG4gICAqL1xuICBwcm9ncmVzczogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIOS4iuS8oOaIkOWKn+WQjueahOaWh+S7tuWcsOWdgFxuICAgKi9cbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5GaWxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBpY29uOiBcImNhbmNlbFwiLFxuICBuYW1lOiBcIlwiLFxuICBvbkljb25DbGljazogKCkgPT4ge30sXG4gIHByb2dyZXNzOiBudWxsLFxuICBzcmM6IFwiXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVcbiJdfQ==