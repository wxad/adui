"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _motion = _interopRequireDefault(require("../motion"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-upload-file";
var File = (0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      icon = _ref.icon,
      name = _ref.name,
      onIconClick = _ref.onIconClick,
      onUpload = _ref.onUpload,
      progress = _ref.progress,
      src = _ref.src,
      otherProps = _objectWithoutProperties(_ref, ["className", "icon", "name", "onIconClick", "onUpload", "progress", "src"]);

  var uploadElementRef = (0, _react.useRef)(null);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix), _defineProperty({}, "".concat(prefix, "-progressing"), progress !== null));
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      uploadElement: uploadElementRef.current
    };
  });
  return _react["default"].createElement(_motion["default"], {
    transition: "zoom"
  }, !!name && _react["default"].createElement("div", _extends({
    role: "none",
    className: classSet
  }, otherProps), src ? _react["default"].createElement("a", {
    className: "".concat(prefix, "-link"),
    href: src,
    target: "_blank",
    rel: "noopener noreferrer",
    title: name
  }, name) : _react["default"].createElement("div", {
    className: "".concat(prefix, "-name"),
    title: name
  }, name), _react["default"].createElement(_icon["default"], {
    icon: icon || "cancel",
    onClick: onIconClick,
    className: "".concat(prefix, "-icon")
  }), _react["default"].createElement("div", {
    className: "".concat(prefix, "-progress")
  }, _react["default"].createElement("i", {
    style: {
      width: "".concat(progress, "%")
    }
  }))));
});
File.propTypes = {
  className: _propTypes["default"].string,
  icon: _propTypes["default"].any,
  name: _propTypes["default"].string,
  onIconClick: _propTypes["default"].func,
  progress: _propTypes["default"].number,
  src: _propTypes["default"].string
};
File.defaultProps = {
  className: "",
  icon: "cancel",
  name: "",
  onIconClick: function onIconClick() {},
  progress: null,
  src: ""
};
var _default = File;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL0ZpbGUudHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkZpbGUiLCJyZWYiLCJjbGFzc05hbWUiLCJpY29uIiwibmFtZSIsIm9uSWNvbkNsaWNrIiwib25VcGxvYWQiLCJwcm9ncmVzcyIsInNyYyIsIm90aGVyUHJvcHMiLCJ1cGxvYWRFbGVtZW50UmVmIiwiY2xhc3NTZXQiLCJ1cGxvYWRFbGVtZW50IiwiY3VycmVudCIsIndpZHRoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYW55IiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsa0JBQWY7QUFpQ0EsSUFBTUMsSUFFTCxHQUFHLHVCQUNGLGdCQVdFQyxHQVhGLEVBWUs7QUFBQSxNQVZEQyxTQVVDLFFBVkRBLFNBVUM7QUFBQSxNQVREQyxJQVNDLFFBVERBLElBU0M7QUFBQSxNQVJEQyxJQVFDLFFBUkRBLElBUUM7QUFBQSxNQVBEQyxXQU9DLFFBUERBLFdBT0M7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFBQSxNQUpEQyxHQUlDLFFBSkRBLEdBSUM7QUFBQSxNQUhFQyxVQUdGOztBQUNILE1BQU1DLGdCQUFnQixHQUFHLG1CQUF1QixJQUF2QixDQUF6QjtBQUVBLE1BQU1DLFFBQVEsR0FBRyw0QkFBV1QsU0FBWCxZQUF5QkgsTUFBekIsaUNBQ1hBLE1BRFcsbUJBQ1lRLFFBQVEsS0FBSyxJQUR6QixFQUFqQjtBQUlBLGtDQUFvQk4sR0FBcEIsRUFBeUI7QUFBQSxXQUFPO0FBQzlCVyxNQUFBQSxhQUFhLEVBQUVGLGdCQUFnQixDQUFDRztBQURGLEtBQVA7QUFBQSxHQUF6QjtBQUlBLFNBQ0UsZ0NBQUMsa0JBQUQ7QUFBUSxJQUFBLFVBQVUsRUFBQztBQUFuQixLQUNHLENBQUMsQ0FBQ1QsSUFBRixJQUNDO0FBQUssSUFBQSxJQUFJLEVBQUMsTUFBVjtBQUFpQixJQUFBLFNBQVMsRUFBRU87QUFBNUIsS0FBMENGLFVBQTFDLEdBQ0dELEdBQUcsR0FDRjtBQUNFLElBQUEsU0FBUyxZQUFLVCxNQUFMLFVBRFg7QUFFRSxJQUFBLElBQUksRUFBRVMsR0FGUjtBQUdFLElBQUEsTUFBTSxFQUFDLFFBSFQ7QUFJRSxJQUFBLEdBQUcsRUFBQyxxQkFKTjtBQUtFLElBQUEsS0FBSyxFQUFFSjtBQUxULEtBT0dBLElBUEgsQ0FERSxHQVdGO0FBQUssSUFBQSxTQUFTLFlBQUtMLE1BQUwsVUFBZDtBQUFrQyxJQUFBLEtBQUssRUFBRUs7QUFBekMsS0FDR0EsSUFESCxDQVpKLEVBZ0JFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVELElBQUksSUFBSSxRQURoQjtBQUVFLElBQUEsT0FBTyxFQUFFRSxXQUZYO0FBR0UsSUFBQSxTQUFTLFlBQUtOLE1BQUw7QUFIWCxJQWhCRixFQXFCRTtBQUFLLElBQUEsU0FBUyxZQUFLQSxNQUFMO0FBQWQsS0FDRTtBQUFHLElBQUEsS0FBSyxFQUFFO0FBQUVlLE1BQUFBLEtBQUssWUFBS1AsUUFBTDtBQUFQO0FBQVYsSUFERixDQXJCRixDQUZKLENBREY7QUErQkQsQ0F2REMsQ0FGSjtBQTREQVAsSUFBSSxDQUFDZSxTQUFMLEdBQWlCO0FBSWZiLEVBQUFBLFNBQVMsRUFBRWMsc0JBQVVDLE1BSk47QUFRZmQsRUFBQUEsSUFBSSxFQUFFYSxzQkFBVUUsR0FSRDtBQVlmZCxFQUFBQSxJQUFJLEVBQUVZLHNCQUFVQyxNQVpEO0FBZ0JmWixFQUFBQSxXQUFXLEVBQUVXLHNCQUFVRyxJQWhCUjtBQW9CZlosRUFBQUEsUUFBUSxFQUFFUyxzQkFBVUksTUFwQkw7QUF3QmZaLEVBQUFBLEdBQUcsRUFBRVEsc0JBQVVDO0FBeEJBLENBQWpCO0FBMkJBakIsSUFBSSxDQUFDcUIsWUFBTCxHQUFvQjtBQUNsQm5CLEVBQUFBLFNBQVMsRUFBRSxFQURPO0FBRWxCQyxFQUFBQSxJQUFJLEVBQUUsUUFGWTtBQUdsQkMsRUFBQUEsSUFBSSxFQUFFLEVBSFk7QUFJbEJDLEVBQUFBLFdBQVcsRUFBRSx1QkFBTSxDQUFFLENBSkg7QUFLbEJFLEVBQUFBLFFBQVEsRUFBRSxJQUxRO0FBTWxCQyxFQUFBQSxHQUFHLEVBQUU7QUFOYSxDQUFwQjtlQVNlUixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBNb3Rpb24gZnJvbSBcIi4uL21vdGlvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXVwbG9hZC1maWxlXCJcblxuZXhwb3J0IGludGVyZmFjZSBJRmlsZVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5oyH5a6a5Y+z5Zu+5qCHXG4gICAqL1xuICBpY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDmlofku7blkI3vvIzmraQgUHJvcCDkvJrmjqfliLYgVXBsb2FkLkZpbGUg5pi+56S65LiO5ZCmXG4gICAqL1xuICBuYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlj7Plm77moIfngrnlh7vml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25JY29uQ2xpY2s/OiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDov5vluqbvvIzkvKDlhaUgbnVsbCDml7booajnpLrkuI3mmL7npLrov5vluqbmnaFcbiAgICovXG4gIHByb2dyZXNzPzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog5LiK5Lyg5oiQ5Yqf5ZCO55qE5paH5Lu25Zyw5Z2A77yM5Lyg5YWl5ZCO5paH5a2X5Lya5Y+Y5Li66ZO+5o6l5qC35byPXG4gICAqL1xuICBzcmM/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiDml4vovazliqDovb3nlKjkuo7lkYrnn6XnlKjmiLfkv6Hmga/lhoXlrrnnmoTliqDovb3nirbmgIHvvIzpgJrluLjmmK/ljbPml7bjgIHnn63ml7bnmoTjgIJcbiAqL1xuY29uc3QgRmlsZTogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSUZpbGVQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpY29uLFxuICAgICAgbmFtZSxcbiAgICAgIG9uSWNvbkNsaWNrLFxuICAgICAgb25VcGxvYWQsXG4gICAgICBwcm9ncmVzcyxcbiAgICAgIHNyYyxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJRmlsZVByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCB1cGxvYWRFbGVtZW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fWAsIHtcbiAgICAgIFtgJHtwcmVmaXh9LXByb2dyZXNzaW5nYF06IHByb2dyZXNzICE9PSBudWxsLFxuICAgIH0pXG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgIHVwbG9hZEVsZW1lbnQ6IHVwbG9hZEVsZW1lbnRSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8TW90aW9uIHRyYW5zaXRpb249XCJ6b29tXCI+XG4gICAgICAgIHshIW5hbWUgJiYgKFxuICAgICAgICAgIDxkaXYgcm9sZT1cIm5vbmVcIiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgICAgICB7c3JjID8gKFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1saW5rYH1cbiAgICAgICAgICAgICAgICBocmVmPXtzcmN9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17bmFtZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1uYW1lYH0gdGl0bGU9e25hbWV9PlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBpY29uPXtpY29uIHx8IFwiY2FuY2VsXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uSWNvbkNsaWNrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfT5cbiAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgd2lkdGg6IGAke3Byb2dyZXNzfSVgIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvTW90aW9uPlxuICAgIClcbiAgfVxuKVxuXG5GaWxlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5oyH5a6a5Y+z5Zu+5qCHXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5paH5Lu25ZCN77yM5q2kIFByb3Ag5Lya5o6n5Yi2IFVwbG9hZC5GaWxlIOaYvuekuuS4juWQplxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOWPs+Wbvuagh+eCueWHu+aXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDov5vluqbvvIzkvKDlhaUgbnVsbCDml7booajnpLrkuI3mmL7npLrov5vluqbmnaFcbiAgICovXG4gIHByb2dyZXNzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICog5LiK5Lyg5oiQ5Yqf5ZCO55qE5paH5Lu25Zyw5Z2AXG4gICAqL1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkZpbGUuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIGljb246IFwiY2FuY2VsXCIsXG4gIG5hbWU6IFwiXCIsXG4gIG9uSWNvbkNsaWNrOiAoKSA9PiB7fSxcbiAgcHJvZ3Jlc3M6IG51bGwsXG4gIHNyYzogXCJcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVxuIl19