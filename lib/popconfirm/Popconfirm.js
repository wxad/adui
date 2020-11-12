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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wY29uZmlybS9Qb3Bjb25maXJtLnRzeCJdLCJuYW1lcyI6WyJub29wIiwicHJlZml4IiwiUG9wY29uZmlybSIsInJlZiIsImNhbmNlbEJ1dHRvbiIsImNhbmNlbFRleHQiLCJjb25maXJtQnV0dG9uIiwiY29uZmlybVRleHQiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsIm9uVmlzaWJsZUNoYW5nZSIsInBvcHVwIiwidmlzaWJsZVByb3AiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsInNldFZpc2libGUiLCJoYW5kbGVDbGlja0NhbmNlbCIsInRhcmdldCIsImhhbmRsZUNsaWNrQ29uZmlybSIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJub2RlIiwiZnVuYyIsInRyaWdnZXIiLCJzdHJpbmciLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsTUFBTSxvQkFBWjtBQW9CQSxJQUFNQyxVQUNxQixHQUFHLHVCQUM1QixnQkFhRUMsR0FiRixFQWNLO0FBQUEsTUFaREMsWUFZQyxRQVpEQSxZQVlDO0FBQUEsTUFYREMsVUFXQyxRQVhEQSxVQVdDO0FBQUEsTUFWREMsYUFVQyxRQVZEQSxhQVVDO0FBQUEsTUFUREMsV0FTQyxRQVREQSxXQVNDO0FBQUEsTUFSREMsUUFRQyxRQVJEQSxRQVFDO0FBQUEsTUFQREMsU0FPQyxRQVBEQSxTQU9DO0FBQUEsTUFOREMsZUFNQyxRQU5EQSxlQU1DO0FBQUEsTUFMREMsS0FLQyxRQUxEQSxLQUtDO0FBQUEsTUFKUUMsV0FJUixRQUpEQyxPQUlDO0FBQUEsTUFIRUMsVUFH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LEVBQUVKLHNCQUFVSyxNQXBDRTtBQXdDckJmLEVBQUFBLE9BQU8sRUFBRVUsc0JBQVVNLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsQ0FBaEI7QUF4Q1ksQ0FBdkI7QUEyQ0EzQixVQUFVLENBQUM0QixZQUFYLEdBQTBCO0FBQ3hCMUIsRUFBQUEsWUFBWSxFQUFFLEVBRFU7QUFFeEJDLEVBQUFBLFVBQVUsRUFBRSxJQUZZO0FBR3hCQyxFQUFBQSxhQUFhLEVBQUUsRUFIUztBQUl4QkMsRUFBQUEsV0FBVyxFQUFFLElBSlc7QUFLeEJDLEVBQUFBLFFBQVEsRUFBRVIsSUFMYztBQU14QlMsRUFBQUEsU0FBUyxFQUFFVCxJQU5hO0FBT3hCVSxFQUFBQSxlQUFlLEVBQUVWLElBUE87QUFReEJXLEVBQUFBLEtBQUssRUFBRSxJQVJpQjtBQVN4QmdCLEVBQUFBLE9BQU8sRUFBRSxPQVRlO0FBVXhCZCxFQUFBQSxPQUFPLEVBQUU7QUFWZSxDQUExQjtlQWFlWCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IEJ1dHRvbiwgeyBJQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vYnV0dG9uL0J1dHRvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gYGFkdWktcG9wY29uZmlybWBcblxuaW50ZXJmYWNlIElWaXNpYmxlT3B0aW9ucyB7XG4gIHRhcmdldD86IFwiY2FuY2VsXCIgfCBcImNvbmZpcm1cIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQb3Bjb25maXJtUHJvcHNcbiAgZXh0ZW5kcyBPbWl0PElQb3BvdmVyUHJvcHMsIFwib25WaXNpYmxlQ2hhbmdlXCI+IHtcbiAgY2FuY2VsQnV0dG9uPzogSUJ1dHRvblByb3BzXG4gIGNhbmNlbFRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY29uZmlybUJ1dHRvbj86IElCdXR0b25Qcm9wc1xuICBjb25maXJtVGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICBvbkNhbmNlbD86ICgpID0+IHZvaWRcbiAgb25Db25maXJtPzogKCkgPT4gdm9pZFxuICBvblZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbiwgb3B0aW9uczogSVZpc2libGVPcHRpb25zKSA9PiB2b2lkXG59XG5cbi8qKlxuICog5by55Ye65byP6Z2i5p2/57uE5Lu244CCXG4gKi9cbmNvbnN0IFBvcGNvbmZpcm06IFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8SVBvcGNvbmZpcm1Qcm9wcyAmXG4gIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55Pj4gPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgY2FuY2VsQnV0dG9uLFxuICAgICAgY2FuY2VsVGV4dCxcbiAgICAgIGNvbmZpcm1CdXR0b24sXG4gICAgICBjb25maXJtVGV4dCxcbiAgICAgIG9uQ2FuY2VsLFxuICAgICAgb25Db25maXJtLFxuICAgICAgb25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcG9wdXAsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJUG9wY29uZmlybVByb3BzLFxuICAgIHJlZjogUmVhY3QuUmVmPGFueT5cbiAgKSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodmlzaWJsZVByb3ApXG5cbiAgICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgaWYgKHZpc2libGVQcm9wICE9PSBudWxsICYmIHZpc2libGUgIT09IHZpc2libGVQcm9wKSB7XG4gICAgICBzZXRWaXNpYmxlKCEhdmlzaWJsZVByb3ApXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tDYW5jZWwgPSAoKSA9PiB7XG4gICAgICAvLyDliKTmlq3mmK/lkKbnlLHlpJbpg6jmjqfliLbvvIzlpoLmnpznrYnkuo4gbnVsbCDliJnkuqTnlLHnu4Tku7boh6rlt7HmjqfliLZcbiAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgfVxuICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICBvblZpc2libGVDaGFuZ2UoZmFsc2UsIHsgdGFyZ2V0OiBcImNhbmNlbFwiIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgb25DYW5jZWwoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrQ29uZmlybSA9ICgpID0+IHtcbiAgICAgIGlmICh2aXNpYmxlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgfVxuICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICBvblZpc2libGVDaGFuZ2UoZmFsc2UsIHsgdGFyZ2V0OiBcImNvbmZpcm1cIiB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ29uZmlybSkge1xuICAgICAgICBvbkNvbmZpcm0oKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAoYm9vbDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZpc2libGUoYm9vbClcbiAgICAgIH1cbiAgICAgIGlmIChvblZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlKGJvb2wsIHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRvcGB9Pntwb3B1cH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJvdHRvbWB9PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tDYW5jZWx9XG4gICAgICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgey4uLmNhbmNlbEJ1dHRvbn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYW5jZWxUZXh0fVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGludGVudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ29uZmlybX1cbiAgICAgICAgICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICB7Li4uY29uZmlybUJ1dHRvbn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb25maXJtVGV4dH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e2hhbmRsZVZpc2libGVDaGFuZ2V9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG4pXG5cblBvcGNvbmZpcm0uZGlzcGxheU5hbWUgPSBcIlBvcGNvbmZpcm1cIlxuXG5Qb3Bjb25maXJtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWPlua2iOaMiemSrnByb3BcbiAgICovXG4gIGNhbmNlbEJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIOWPlua2iOaMiemSruaWh+acrFxuICAgKi9cbiAgY2FuY2VsVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDnoa7lrprmjInpkq5wcm9wXG4gICAqL1xuICBjb25maXJtQnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog56Gu5a6a5oyJ6ZKu5paH5pysXG4gICAqL1xuICBjb25maXJtVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDngrnlh7vlj5bmtojmjInpkq7ml7bnmoTkuovku7ZcbiAgICovXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOeCueWHu+ehruiupOaMiemSruaXtueahOS6i+S7tlxuICAgKi9cbiAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqICDmmK/lkKbmmL7npLrpmpDol4/nmoRoYW5kbGVyXG4gICAqL1xuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5by556qX6Ieq5a6a5LmJ5YaF5a656IqC54K5XG4gICAqL1xuICBwb3B1cDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDop6blj5HlvLnnqpfnsbvlnotcbiAgICovXG4gIHRyaWdnZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDop6blj5HlvLnnqpfnsbvlnotcbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbn1cblxuUG9wY29uZmlybS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhbmNlbEJ1dHRvbjoge30sXG4gIGNhbmNlbFRleHQ6IFwi5Y+W5raIXCIsXG4gIGNvbmZpcm1CdXR0b246IHt9LFxuICBjb25maXJtVGV4dDogXCLnoa7orqRcIixcbiAgb25DYW5jZWw6IG5vb3AsXG4gIG9uQ29uZmlybTogbm9vcCxcbiAgb25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICBwb3B1cDogbnVsbCxcbiAgdHJpZ2dlcjogXCJjbGlja1wiLFxuICB2aXNpYmxlOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3Bjb25maXJtXG4iXX0=