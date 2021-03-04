"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var prefix = "adui-tooltip";

var Popup = function Popup(_ref) {
  var content = _ref.content,
      trigger = _ref.trigger;
  (0, _react.useEffect)(function () {
    if (trigger && trigger.forcePopupAlign) {
      trigger.forcePopupAlign();
    }
  });
  return _react["default"].createElement("div", {
    className: "".concat(prefix, "-content")
  }, _react["default"].createElement("i", {
    className: "".concat(prefix, "-arrow")
  }), _react["default"].createElement("div", null, content));
};

Popup.propTypes = {
  content: _propTypes["default"].node,
  trigger: _propTypes["default"].object
};
Popup.defaultProps = {
  content: null,
  trigger: undefined
};
var _default = Popup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9Qb3B1cC50c3giXSwibmFtZXMiOlsicHJlZml4IiwiUG9wdXAiLCJjb250ZW50IiwidHJpZ2dlciIsImZvcmNlUG9wdXBBbGlnbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxjQUFmOztBQVFBLElBQU1DLEtBQTJDLEdBQUcsU0FBOUNBLEtBQThDLE9BR2pDO0FBQUEsTUFGakJDLE9BRWlCLFFBRmpCQSxPQUVpQjtBQUFBLE1BRGpCQyxPQUNpQixRQURqQkEsT0FDaUI7QUFDakIsd0JBQVUsWUFBTTtBQUtkLFFBQUlBLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxlQUF2QixFQUF3QztBQUN0Q0QsTUFBQUEsT0FBTyxDQUFDQyxlQUFSO0FBQ0Q7QUFDRixHQVJEO0FBU0EsU0FDRTtBQUFLLElBQUEsU0FBUyxZQUFLSixNQUFMO0FBQWQsS0FDRTtBQUFHLElBQUEsU0FBUyxZQUFLQSxNQUFMO0FBQVosSUFERixFQUVFLDZDQUFNRSxPQUFOLENBRkYsQ0FERjtBQU1ELENBbkJEOztBQXFCQUQsS0FBSyxDQUFDSSxTQUFOLEdBQWtCO0FBSWhCSCxFQUFBQSxPQUFPLEVBQUVJLHNCQUFVQyxJQUpIO0FBUWhCSixFQUFBQSxPQUFPLEVBQUVHLHNCQUFVRTtBQVJILENBQWxCO0FBV0FQLEtBQUssQ0FBQ1EsWUFBTixHQUFxQjtBQUNuQlAsRUFBQUEsT0FBTyxFQUFFLElBRFU7QUFFbkJDLEVBQUFBLE9BQU8sRUFBRU87QUFGVSxDQUFyQjtlQUtlVCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCB7IElUcmlnZ2VyIH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdG9vbHRpcFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcHVwUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICB0cmlnZ2VyPzogSVRyaWdnZXJcbn1cblxuY29uc3QgUG9wdXA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElQb3B1cFByb3BzPiA9ICh7XG4gIGNvbnRlbnQsXG4gIHRyaWdnZXIsXG59OiBJUG9wdXBQcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIOWcqCBTbGlkZXIg5Lit55SoIFRvb2x0aXAg5pe25Y+R546wIFBvcFRyaWdnZXIg5LiN5Lya5Zyo5q+P5LiA5qyh56e75Yqo5pe26Kem5Y+RIG9uUG9wdXBBbGlnblxuICAgICAqIOaJgOS7peWcqOi/memHjOWIqeeUqCB0cmlnZ2VyIOeahOaOpeWPo+W8uuWItuWumuS9jVxuICAgICAqL1xuICAgIGlmICh0cmlnZ2VyICYmIHRyaWdnZXIuZm9yY2VQb3B1cEFsaWduKSB7XG4gICAgICB0cmlnZ2VyLmZvcmNlUG9wdXBBbGlnbigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbnRlbnRgfT5cbiAgICAgIDxpIGNsYXNzTmFtZT17YCR7cHJlZml4fS1hcnJvd2B9IC8+XG4gICAgICA8ZGl2Pntjb250ZW50fTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblBvcHVwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOW8ueWHuuWGheWuuVxuICAgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiB0cmlnZ2VyIOWvueixoVxuICAgKi9cbiAgdHJpZ2dlcjogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuUG9wdXAuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50OiBudWxsLFxuICB0cmlnZ2VyOiB1bmRlZmluZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwXG4iXX0=