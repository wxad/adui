function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import Popover from "../popover";
import "./style";

var noop = function noop() {};

var prefix = "adui-popconfirm";
var Popconfirm = forwardRef(function (_ref, ref) {
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

  var _useState = useState(visibleProp),
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

  return React.createElement(Popover, _extends({
    popup: React.createElement("div", null, React.createElement("div", {
      className: "".concat(prefix, "-top")
    }, popup), React.createElement("div", {
      className: "".concat(prefix, "-bottom")
    }, React.createElement(Button, _extends({
      onClick: handleClickCancel,
      theme: "light"
    }, cancelButton), cancelText), React.createElement(Button, _extends({
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
  cancelButton: PropTypes.object,
  cancelText: PropTypes.node,
  confirmButton: PropTypes.object,
  confirmText: PropTypes.node,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onVisibleChange: PropTypes.func,
  popup: PropTypes.node,
  trigger: PropTypes.string,
  visible: PropTypes.oneOf([null, true, false])
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
export default Popconfirm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wY29uZmlybS9Qb3Bjb25maXJtLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsIkJ1dHRvbiIsIlBvcG92ZXIiLCJub29wIiwicHJlZml4IiwiUG9wY29uZmlybSIsInJlZiIsImNhbmNlbEJ1dHRvbiIsImNhbmNlbFRleHQiLCJjb25maXJtQnV0dG9uIiwiY29uZmlybVRleHQiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsIm9uVmlzaWJsZUNoYW5nZSIsInBvcHVwIiwidmlzaWJsZVByb3AiLCJ2aXNpYmxlIiwib3RoZXJQcm9wcyIsInNldFZpc2libGUiLCJoYW5kbGVDbGlja0NhbmNlbCIsInRhcmdldCIsImhhbmRsZUNsaWNrQ29uZmlybSIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJib29sIiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJub2RlIiwiZnVuYyIsInRyaWdnZXIiLCJzdHJpbmciLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLFFBQTVCLFFBQTRDLE9BQTVDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBcUMsa0JBQXJDO0FBQ0EsT0FBT0MsT0FBUCxNQUF1QyxZQUF2QztBQUNBLE9BQU8sU0FBUDs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsTUFBTSxvQkFBWjtBQW9CQSxJQUFNQyxVQUVMLEdBQUdQLFVBQVUsQ0FDWixnQkFhRVEsR0FiRixFQWNLO0FBQUEsTUFaREMsWUFZQyxRQVpEQSxZQVlDO0FBQUEsTUFYREMsVUFXQyxRQVhEQSxVQVdDO0FBQUEsTUFWREMsYUFVQyxRQVZEQSxhQVVDO0FBQUEsTUFU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Q0FBQzJCLElBaEJGO0FBb0JyQmhCLEVBQUFBLFFBQVEsRUFBRVgsU0FBUyxDQUFDNEIsSUFwQkM7QUF3QnJCaEIsRUFBQUEsU0FBUyxFQUFFWixTQUFTLENBQUM0QixJQXhCQTtBQTRCckJmLEVBQUFBLGVBQWUsRUFBRWIsU0FBUyxDQUFDNEIsSUE1Qk47QUFnQ3JCZCxFQUFBQSxLQUFLLEVBQUVkLFNBQVMsQ0FBQzJCLElBaENJO0FBb0NyQkUsRUFBQUEsT0FBTyxFQUFFN0IsU0FBUyxDQUFDOEIsTUFwQ0U7QUF3Q3JCZCxFQUFBQSxPQUFPLEVBQUVoQixTQUFTLENBQUMrQixLQUFWLENBQWdCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLENBQWhCO0FBeENZLENBQXZCO0FBMkNBMUIsVUFBVSxDQUFDMkIsWUFBWCxHQUEwQjtBQUN4QnpCLEVBQUFBLFlBQVksRUFBRSxFQURVO0FBRXhCQyxFQUFBQSxVQUFVLEVBQUUsSUFGWTtBQUd4QkMsRUFBQUEsYUFBYSxFQUFFLEVBSFM7QUFJeEJDLEVBQUFBLFdBQVcsRUFBRSxJQUpXO0FBS3hCQyxFQUFBQSxRQUFRLEVBQUVSLElBTGM7QUFNeEJTLEVBQUFBLFNBQVMsRUFBRVQsSUFOYTtBQU94QlUsRUFBQUEsZUFBZSxFQUFFVixJQVBPO0FBUXhCVyxFQUFBQSxLQUFLLEVBQUUsSUFSaUI7QUFTeEJlLEVBQUFBLE9BQU8sRUFBRSxPQVRlO0FBVXhCYixFQUFBQSxPQUFPLEVBQUU7QUFWZSxDQUExQjtBQWFBLGVBQWVYLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgQnV0dG9uLCB7IElCdXR0b25Qcm9wcyB9IGZyb20gXCIuLi9idXR0b24vQnV0dG9uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBwcmVmaXggPSBgYWR1aS1wb3Bjb25maXJtYFxuXG5pbnRlcmZhY2UgSVZpc2libGVPcHRpb25zIHtcbiAgdGFyZ2V0PzogXCJjYW5jZWxcIiB8IFwiY29uZmlybVwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvcGNvbmZpcm1Qcm9wc1xuICBleHRlbmRzIE9taXQ8SVBvcG92ZXJQcm9wcywgXCJvblZpc2libGVDaGFuZ2VcIj4ge1xuICBjYW5jZWxCdXR0b24/OiBJQnV0dG9uUHJvcHNcbiAgY2FuY2VsVGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICBjb25maXJtQnV0dG9uPzogSUJ1dHRvblByb3BzXG4gIGNvbmZpcm1UZXh0PzogUmVhY3QuUmVhY3ROb2RlXG4gIG9uQ2FuY2VsPzogKCkgPT4gdm9pZFxuICBvbkNvbmZpcm0/OiAoKSA9PiB2b2lkXG4gIG9uVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuLCBvcHRpb25zOiBJVmlzaWJsZU9wdGlvbnMpID0+IHZvaWRcbn1cblxuLyoqXG4gKiDlvLnlh7rlvI/pnaLmnb/nu4Tku7bjgIJcbiAqL1xuY29uc3QgUG9wY29uZmlybTogUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgSVBvcGNvbmZpcm1Qcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8YW55PlxuPiA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBjYW5jZWxCdXR0b24sXG4gICAgICBjYW5jZWxUZXh0LFxuICAgICAgY29uZmlybUJ1dHRvbixcbiAgICAgIGNvbmZpcm1UZXh0LFxuICAgICAgb25DYW5jZWwsXG4gICAgICBvbkNvbmZpcm0sXG4gICAgICBvblZpc2libGVDaGFuZ2UsXG4gICAgICBwb3B1cCxcbiAgICAgIHZpc2libGU6IHZpc2libGVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH06IElQb3Bjb25maXJtUHJvcHMsXG4gICAgcmVmOiBSZWFjdC5SZWY8YW55PlxuICApID0+IHtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh2aXNpYmxlUHJvcClcblxuICAgIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgICBpZiAodmlzaWJsZVByb3AgIT09IG51bGwgJiYgdmlzaWJsZSAhPT0gdmlzaWJsZVByb3ApIHtcbiAgICAgIHNldFZpc2libGUoISF2aXNpYmxlUHJvcClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0NhbmNlbCA9ICgpID0+IHtcbiAgICAgIC8vIOWIpOaWreaYr+WQpueUseWklumDqOaOp+WItu+8jOWmguaenOetieS6jiBudWxsIOWImeS6pOeUsee7hOS7tuiHquW3seaOp+WItlxuICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICB9XG4gICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZShmYWxzZSwgeyB0YXJnZXQ6IFwiY2FuY2VsXCIgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNhbmNlbCkge1xuICAgICAgICBvbkNhbmNlbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tDb25maXJtID0gKCkgPT4ge1xuICAgICAgaWYgKHZpc2libGVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpXG4gICAgICB9XG4gICAgICBpZiAob25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZShmYWxzZSwgeyB0YXJnZXQ6IFwiY29uZmlybVwiIH0pXG4gICAgICB9XG4gICAgICBpZiAob25Db25maXJtKSB7XG4gICAgICAgIG9uQ29uZmlybSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlVmlzaWJsZUNoYW5nZSA9IChib29sOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAodmlzaWJsZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgc2V0VmlzaWJsZShib29sKVxuICAgICAgfVxuICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICBvblZpc2libGVDaGFuZ2UoYm9vbCwge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdG9wYH0+e3BvcHVwfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYm90dG9tYH0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja0NhbmNlbH1cbiAgICAgICAgICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICB7Li4uY2FuY2VsQnV0dG9ufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NhbmNlbFRleHR9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaW50ZW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tDb25maXJtfVxuICAgICAgICAgICAgICAgIHRoZW1lPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgIHsuLi5jb25maXJtQnV0dG9ufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbmZpcm1UZXh0fVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbilcblxuUG9wY29uZmlybS5kaXNwbGF5TmFtZSA9IFwiUG9wY29uZmlybVwiXG5cblBvcGNvbmZpcm0ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5Y+W5raI5oyJ6ZKucHJvcFxuICAgKi9cbiAgY2FuY2VsQnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICog5Y+W5raI5oyJ6ZKu5paH5pysXG4gICAqL1xuICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOehruWumuaMiemSrnByb3BcbiAgICovXG4gIGNvbmZpcm1CdXR0b246IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDnoa7lrprmjInpkq7mlofmnKxcbiAgICovXG4gIGNvbmZpcm1UZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOeCueWHu+WPlua2iOaMiemSruaXtueahOS6i+S7tlxuICAgKi9cbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog54K55Ye756Gu6K6k5oyJ6ZKu5pe255qE5LqL5Lu2XG4gICAqL1xuICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogIOaYr+WQpuaYvuekuumakOiXj+eahGhhbmRsZXJcbiAgICovXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlvLnnqpfoh6rlrprkuYnlhoXlrrnoioLngrlcbiAgICovXG4gIHBvcHVwOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOinpuWPkeW8ueeql+exu+Wei1xuICAgKi9cbiAgdHJpZ2dlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOinpuWPkeW8ueeql+exu+Wei1xuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCB0cnVlLCBmYWxzZV0pLFxufVxuXG5Qb3Bjb25maXJtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FuY2VsQnV0dG9uOiB7fSxcbiAgY2FuY2VsVGV4dDogXCLlj5bmtohcIixcbiAgY29uZmlybUJ1dHRvbjoge30sXG4gIGNvbmZpcm1UZXh0OiBcIuehruiupFwiLFxuICBvbkNhbmNlbDogbm9vcCxcbiAgb25Db25maXJtOiBub29wLFxuICBvblZpc2libGVDaGFuZ2U6IG5vb3AsXG4gIHBvcHVwOiBudWxsLFxuICB0cmlnZ2VyOiBcImNsaWNrXCIsXG4gIHZpc2libGU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcGNvbmZpcm1cbiJdfQ==