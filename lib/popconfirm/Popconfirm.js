"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../button/Button"));

var _popover = _interopRequireDefault(require("../popover"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {};

var prefix = "adui-popconfirm";
var Popconfirm = (0, _react.forwardRef)(function (_ref, ref) {
  var cancelButton = _ref.cancelButton,
      cancelText = _ref.cancelText,
      confirmButton = _ref.confirmButton,
      confirmText = _ref.confirmText,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      onVisibleChange = _ref.onVisibleChange,
      popup = _ref.popup,
      visibleProp = _ref.visible,
      otherProps = _objectWithoutProperties(_ref, ["cancelButton", "cancelText", "confirmButton", "confirmText", "onCancel", "onConfirm", "onVisibleChange", "popup", "visible"]);

  var _useState = (0, _react.useState)(visibleProp),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  if (visibleProp !== null && visible !== visibleProp) {
    setVisible(!!visibleProp);
  }

  var handleClickCancel = function handleClickCancel() {
    if (visibleProp === null) {
      setVisible(false);
    }

    if (onVisibleChange) {
      onVisibleChange(false, {
        target: "cancel"
      });
    }

    if (onCancel) {
      onCancel();
    }
  };

  var handleClickConfirm = function handleClickConfirm() {
    if (visibleProp === null) {
      setVisible(false);
    }

    if (onVisibleChange) {
      onVisibleChange(false, {
        target: "confirm"
      });
    }

    if (onConfirm) {
      onConfirm();
    }
  };

  var handleVisibleChange = function handleVisibleChange(bool) {
    if (visibleProp === null) {
      setVisible(bool);
    }

    if (onVisibleChange) {
      onVisibleChange(bool, {});
    }
  };

  return _react["default"].createElement(_popover["default"], _extends({
    popup: _react["default"].createElement("div", null, _react["default"].createElement("div", {
      className: "".concat(prefix, "-top")
    }, popup), _react["default"].createElement("div", {
      className: "".concat(prefix, "-bottom")
    }, _react["default"].createElement(_Button["default"], _extends({
      onClick: handleClickCancel,
      theme: "light"
    }, cancelButton), cancelText), _react["default"].createElement(_Button["default"], _extends({
      intent: "primary",
      onClick: handleClickConfirm,
      theme: "light"
    }, confirmButton), confirmText))),
    visible: visible,
    onVisibleChange: handleVisibleChange,
    ref: ref
  }, otherProps));
});
Popconfirm.displayName = "Popconfirm";
Popconfirm.propTypes = {
  cancelButton: _propTypes["default"].object,
  cancelText: _propTypes["default"].node,
  confirmButton: _propTypes["default"].object,
  confirmText: _propTypes["default"].node,
  onCancel: _propTypes["default"].func,
  onConfirm: _propTypes["default"].func,
  onVisibleChange: _propTypes["default"].func,
  popup: _propTypes["default"].node,
  trigger: _propTypes["default"].string,
  visible: _propTypes["default"].oneOf([null, true, false])
};
Popconfirm.defaultProps = {
  cancelButton: {},
  cancelText: "取消",
  confirmButton: {},
  confirmText: "确认",
  onCancel: noop,
  onConfirm: noop,
  onVisibleChange: noop,
  popup: null,
  trigger: "click",
  visible: null
};
var _default = Popconfirm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wY29uZmlybS9Qb3Bjb25maXJtLnRzeCJdLCJuYW1lcyI6WyJub29wIiwicHJlZml4IiwiUG9wY29uZmlybSIsInJlZiIsImNhbmNlbEJ1dHRvbiIsImNhbmNlbFRleHQiLCJjb25maXJtQnV0dG9uIiwiY29uZmlybVRleHQiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsIm9uVmlzaWJsZUNoYW5nZSIsInBvcHVwIiwidmlzaWJsZVByb3AiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsInNldFZpc2libGUiLCJoYW5kbGVDbGlja0NhbmNlbCIsInRhcmdldCIsImhhbmRsZUNsaWNrQ29uZmlybSIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJub2RlIiwiZnVuYyIsInRyaWdnZXIiLCJzdHJpbmciLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLE1BQU0sb0JBQVo7QUFvQkEsSUFBTUMsVUFDcUIsR0FBRyx1QkFDNUIsZ0JBYUVDLEdBYkYsRUFjSztBQUFBLE1BWkRDLFlBWUMsUUFaREEsWUFZQztBQUFBLE1BWERDLFVBV0MsUUFYREEsVUFXQztBQUFBLE1BVkRDLGFBVUMsUUFWREEsYUFVQztBQUFBLE1BVERDLFdBU0MsUUFUREEsV0FTQztBQUFBLE1BUkRDLFFBUUMsUUFSREEsUUFRQztBQUFBLE1BUERDLFNBT0MsUUFQREEsU0FPQztBQUFBLE1BTkRDLGVBTUMsUUFOREEsZUFNQztBQUFBLE1BTERDLEtBS0MsUUFMREEsS0FLQztBQUFBLE1BSlFDLFdBSVIsUUFKREMsT0FJQztBQUFBLE1BSEVD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T0FBTyxFQUFFSixzQkFBVUssTUFwQ0U7QUF3Q3JCZixFQUFBQSxPQUFPLEVBQUVVLHNCQUFVTSxLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBQWhCO0FBeENZLENBQXZCO0FBMkNBM0IsVUFBVSxDQUFDNEIsWUFBWCxHQUEwQjtBQUN4QjFCLEVBQUFBLFlBQVksRUFBRSxFQURVO0FBRXhCQyxFQUFBQSxVQUFVLEVBQUUsSUFGWTtBQUd4QkMsRUFBQUEsYUFBYSxFQUFFLEVBSFM7QUFJeEJDLEVBQUFBLFdBQVcsRUFBRSxJQUpXO0FBS3hCQyxFQUFBQSxRQUFRLEVBQUVSLElBTGM7QUFNeEJTLEVBQUFBLFNBQVMsRUFBRVQsSUFOYTtBQU94QlUsRUFBQUEsZUFBZSxFQUFFVixJQVBPO0FBUXhCVyxFQUFBQSxLQUFLLEVBQUUsSUFSaUI7QUFTeEJnQixFQUFBQSxPQUFPLEVBQUUsT0FUZTtBQVV4QmQsRUFBQUEsT0FBTyxFQUFFO0FBVmUsQ0FBMUI7ZUFhZVgsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBCdXR0b24sIHsgSUJ1dHRvblByb3BzIH0gZnJvbSBcIi4uL2J1dHRvbi9CdXR0b25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IGBhZHVpLXBvcGNvbmZpcm1gXG5cbmludGVyZmFjZSBJVmlzaWJsZU9wdGlvbnMge1xuICB0YXJnZXQ/OiBcImNhbmNlbFwiIHwgXCJjb25maXJtXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUG9wY29uZmlybVByb3BzXG4gIGV4dGVuZHMgT21pdDxJUG9wb3ZlclByb3BzLCBcIm9uVmlzaWJsZUNoYW5nZVwiPiB7XG4gIGNhbmNlbEJ1dHRvbj86IElCdXR0b25Qcm9wc1xuICBjYW5jZWxUZXh0PzogUmVhY3QuUmVhY3ROb2RlXG4gIGNvbmZpcm1CdXR0b24/OiBJQnV0dG9uUHJvcHNcbiAgY29uZmlybVRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkXG4gIG9uQ29uZmlybT86ICgpID0+IHZvaWRcbiAgb25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4sIG9wdGlvbnM6IElWaXNpYmxlT3B0aW9ucykgPT4gdm9pZFxufVxuXG4vKipcbiAqIOW8ueWHuuW8j+mdouadv+e7hOS7tuOAglxuICovXG5jb25zdCBQb3Bjb25maXJtOiBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PElQb3Bjb25maXJtUHJvcHMgJlxuICBSZWFjdC5SZWZBdHRyaWJ1dGVzPGFueT4+ID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGNhbmNlbEJ1dHRvbixcbiAgICAgIGNhbmNlbFRleHQsXG4gICAgICBjb25maXJtQnV0dG9uLFxuICAgICAgY29uZmlybVRleHQsXG4gICAgICBvbkNhbmNlbCxcbiAgICAgIG9uQ29uZmlybSxcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBvcHVwLFxuICAgICAgdmlzaWJsZTogdmlzaWJsZVByb3AsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSVBvcGNvbmZpcm1Qcm9wcyxcbiAgICByZWY6IFJlYWN0LlJlZjxhbnk+XG4gICkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHZpc2libGVQcm9wKVxuXG4gICAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIGlmICh2aXNpYmxlUHJvcCAhPT0gbnVsbCAmJiB2aXNpYmxlICE9PSB2aXNpYmxlUHJvcCkge1xuICAgICAgc2V0VmlzaWJsZSghIXZpc2libGVQcm9wKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgLy8g5Yik5pat5piv5ZCm55Sx5aSW6YOo5o6n5Yi277yM5aaC5p6c562J5LqOIG51bGwg5YiZ5Lqk55Sx57uE5Lu26Ieq5bex5o6n5Yi2XG4gICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIH1cbiAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGZhbHNlLCB7IHRhcmdldDogXCJjYW5jZWxcIiB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgIG9uQ2FuY2VsKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0NvbmZpcm0gPSAoKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIH1cbiAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGZhbHNlLCB7IHRhcmdldDogXCJjb25maXJtXCIgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNvbmZpcm0pIHtcbiAgICAgICAgb25Db25maXJtKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWaXNpYmxlKGJvb2wpXG4gICAgICB9XG4gICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZShib29sLCB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10b3BgfT57cG9wdXB9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1ib3R0b21gfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2FuY2VsfVxuICAgICAgICAgICAgICAgIHRoZW1lPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgIHsuLi5jYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2FuY2VsVGV4dH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBpbnRlbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja0NvbmZpcm19XG4gICAgICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgey4uLmNvbmZpcm1CdXR0b259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29uZmlybVRleHR9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxuKVxuXG5Qb3Bjb25maXJtLmRpc3BsYXlOYW1lID0gXCJQb3Bjb25maXJtXCJcblxuUG9wY29uZmlybS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlj5bmtojmjInpkq5wcm9wXG4gICAqL1xuICBjYW5jZWxCdXR0b246IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlj5bmtojmjInpkq7mlofmnKxcbiAgICovXG4gIGNhbmNlbFRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog56Gu5a6a5oyJ6ZKucHJvcFxuICAgKi9cbiAgY29uZmlybUJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOehruWumuaMiemSruaWh+acrFxuICAgKi9cbiAgY29uZmlybVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog54K55Ye75Y+W5raI5oyJ6ZKu5pe255qE5LqL5Lu2XG4gICAqL1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDngrnlh7vnoa7orqTmjInpkq7ml7bnmoTkuovku7ZcbiAgICovXG4gIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiAg5piv5ZCm5pi+56S66ZqQ6JeP55qEaGFuZGxlclxuICAgKi9cbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOW8ueeql+iHquWumuS5ieWGheWuueiKgueCuVxuICAgKi9cbiAgcG9wdXA6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6Kem5Y+R5by556qX57G75Z6LXG4gICAqL1xuICB0cmlnZ2VyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6Kem5Y+R5by556qX57G75Z6LXG4gICAqL1xuICB2aXNpYmxlOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG59XG5cblBvcGNvbmZpcm0uZGVmYXVsdFByb3BzID0ge1xuICBjYW5jZWxCdXR0b246IHt9LFxuICBjYW5jZWxUZXh0OiBcIuWPlua2iFwiLFxuICBjb25maXJtQnV0dG9uOiB7fSxcbiAgY29uZmlybVRleHQ6IFwi56Gu6K6kXCIsXG4gIG9uQ2FuY2VsOiBub29wLFxuICBvbkNvbmZpcm06IG5vb3AsXG4gIG9uVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgcG9wdXA6IG51bGwsXG4gIHRyaWdnZXI6IFwiY2xpY2tcIixcbiAgdmlzaWJsZTogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wY29uZmlybVxuIl19