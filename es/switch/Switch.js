function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ConfigContext, getComputedSize } from "../config-provider";
import "./style";
var prefix = "adui-switch";

var Switch = function Switch(_ref) {
  var _classNames;

  var checkedProps = _ref.checked,
      checkedText = _ref.checkedText,
      className = _ref.className,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      size = _ref.size,
      unCheckedText = _ref.unCheckedText,
      otherProps = _objectWithoutProperties(_ref, ["checked", "checkedText", "className", "defaultChecked", "disabled", "onChange", "onClick", "size", "unCheckedText"]);

  var _useState = useState(checkedProps !== null ? !!checkedProps : !!defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  if (checkedProps !== null && checked !== !!checkedProps) {
    setChecked(!!checkedProps);
  }

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var handleChange = function handleChange() {
    if (onClick) {
      onClick();
    }

    if (!disabled) {
      if (checkedProps === null) {
        setChecked(!checked);
      }

      if (onChange) {
        onChange(!checked);
      }
    }
  };

  var handleKeyPress = function handleKeyPress(_ref2) {
    var key = _ref2.key;

    if (key.toUpperCase() === "ENTER") {
      handleChange();
    }
  };

  var classSet = classNames(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat(getComputedSize(size, sizeContext)), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-checked"), checked), _defineProperty(_classNames, "".concat(prefix, "-disabled"), disabled), _classNames));
  return React.createElement("span", _extends({
    "aria-checked": checked,
    className: classSet,
    onClick: handleChange,
    onKeyPress: handleKeyPress,
    role: "switch",
    tabIndex: 0
  }, otherProps), React.createElement("span", {
    className: "".concat(prefix, "-base")
  }, React.createElement("i", {
    className: "".concat(prefix, "-indicator")
  })), !!checked && checkedText && React.createElement("span", {
    className: "".concat(prefix, "-text")
  }, checkedText), !checked && unCheckedText && React.createElement("span", {
    className: "".concat(prefix, "-text")
  }, unCheckedText));
};

Switch.propTypes = {
  checked: PropTypes.oneOf([null, true, false]),
  checkedText: PropTypes.node,
  className: PropTypes.string,
  defaultChecked: PropTypes.oneOf([null, true, false]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  unCheckedText: PropTypes.node
};
Switch.defaultProps = {
  checked: null,
  checkedText: null,
  className: undefined,
  defaultChecked: null,
  disabled: false,
  onChange: null,
  onClick: null,
  size: "small",
  unCheckedText: null
};
export default Switch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3dpdGNoL1N3aXRjaC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsInByZWZpeCIsIlN3aXRjaCIsImNoZWNrZWRQcm9wcyIsImNoZWNrZWQiLCJjaGVja2VkVGV4dCIsImNsYXNzTmFtZSIsImRlZmF1bHRDaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzaXplIiwidW5DaGVja2VkVGV4dCIsIm90aGVyUHJvcHMiLCJzZXRDaGVja2VkIiwic2l6ZUNvbnRleHQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsInRvVXBwZXJDYXNlIiwiY2xhc3NTZXQiLCJwcm9wVHlwZXMiLCJvbmVPZiIsIm5vZGUiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsUUFBNUIsUUFBNEMsT0FBNUM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLGVBQXhCLFFBQStDLG9CQUEvQztBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxhQUFmOztBQTZDQSxJQUFNQyxNQUE4QixHQUFHLFNBQWpDQSxNQUFpQyxPQVduQjtBQUFBOztBQUFBLE1BVlRDLFlBVVMsUUFWbEJDLE9BVWtCO0FBQUEsTUFUbEJDLFdBU2tCLFFBVGxCQSxXQVNrQjtBQUFBLE1BUmxCQyxTQVFrQixRQVJsQkEsU0FRa0I7QUFBQSxNQVBsQkMsY0FPa0IsUUFQbEJBLGNBT2tCO0FBQUEsTUFObEJDLFFBTWtCLFFB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WCxTQUFTLENBQUM0QixJQXBCSDtBQXdCakJoQixFQUFBQSxRQUFRLEVBQUVaLFNBQVMsQ0FBQzZCLElBeEJIO0FBNEJqQmhCLEVBQUFBLE9BQU8sRUFBRWIsU0FBUyxDQUFDNkIsSUE1QkY7QUFnQ2pCZixFQUFBQSxJQUFJLEVBQUVkLFNBQVMsQ0FBQ3lCLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQWhDVztBQW9DakJWLEVBQUFBLGFBQWEsRUFBRWYsU0FBUyxDQUFDMEI7QUFwQ1IsQ0FBbkI7QUF1Q0FyQixNQUFNLENBQUN5QixZQUFQLEdBQXNCO0FBQ3BCdkIsRUFBQUEsT0FBTyxFQUFFLElBRFc7QUFFcEJDLEVBQUFBLFdBQVcsRUFBRSxJQUZPO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUVzQixTQUhTO0FBSXBCckIsRUFBQUEsY0FBYyxFQUFFLElBSkk7QUFLcEJDLEVBQUFBLFFBQVEsRUFBRSxLQUxVO0FBTXBCQyxFQUFBQSxRQUFRLEVBQUUsSUFOVTtBQU9wQkMsRUFBQUEsT0FBTyxFQUFFLElBUFc7QUFRcEJDLEVBQUFBLElBQUksRUFBRSxPQVJjO0FBU3BCQyxFQUFBQSxhQUFhLEVBQUU7QUFUSyxDQUF0QjtBQVlBLGVBQWVWLE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktc3dpdGNoXCJcblxuZXhwb3J0IGludGVyZmFjZSBJU3dpdGNoUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOW8gOWFs+eKtuaAgSAtIOWklumDqOaOp+WItlxuICAgKi9cbiAgY2hlY2tlZD86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDlvIDnirbmgIHml7bnmoTpmYTliqDmloflrZdcbiAgICovXG4gIGNoZWNrZWRUZXh0PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k5byA5YWz54q25oCBIC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0Q2hlY2tlZD86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICog5byA5YWz54q25oCB5pS55Y+Y5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2hhbmdlPzogKChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrPzogKCgpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDlhbPnirbmgIHml7bnmoTpmYTliqDmloflrZdcbiAgICovXG4gIHVuQ2hlY2tlZFRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDlvIDlhbPnlKjkuo7ooajnpLrlhoXlrrnnmoTlvIDlkK/kuI7lhbPpl63vvIzluLjnlKjkuo7lvIDlkK/miJblhbPpl63mn5DkuIDlip/og73jgIHmqKHlvI/vvIzkuZ/lj6/ku6XooajnpLrkuJrliqHkuK3nmoTkuIDkupvnibnmrorpgLvovpHvvIzlpoLlub/lkYrnmoTigJzmipXmlL4v5pqC5YGc4oCd44CCXG4gKi9cbmNvbnN0IFN3aXRjaDogUmVhY3QuRkM8SVN3aXRjaFByb3BzPiA9ICh7XG4gIGNoZWNrZWQ6IGNoZWNrZWRQcm9wcyxcbiAgY2hlY2tlZFRleHQsXG4gIGNsYXNzTmFtZSxcbiAgZGVmYXVsdENoZWNrZWQsXG4gIGRpc2FibGVkLFxuICBvbkNoYW5nZSxcbiAgb25DbGljayxcbiAgc2l6ZSxcbiAgdW5DaGVja2VkVGV4dCxcbiAgLi4ub3RoZXJQcm9wc1xufTogSVN3aXRjaFByb3BzKSA9PiB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKFxuICAgIGNoZWNrZWRQcm9wcyAhPT0gbnVsbCA/ICEhY2hlY2tlZFByb3BzIDogISFkZWZhdWx0Q2hlY2tlZFxuICApXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoY2hlY2tlZFByb3BzICE9PSBudWxsICYmIGNoZWNrZWQgIT09ICEhY2hlY2tlZFByb3BzKSB7XG4gICAgc2V0Q2hlY2tlZCghIWNoZWNrZWRQcm9wcylcbiAgfVxuXG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soKVxuICAgIH1cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAoY2hlY2tlZFByb3BzID09PSBudWxsKSB7XG4gICAgICAgIHNldENoZWNrZWQoIWNoZWNrZWQpXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UoIWNoZWNrZWQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoeyBrZXkgfTogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChrZXkudG9VcHBlckNhc2UoKSA9PT0gXCJFTlRFUlwiKSB7XG4gICAgICBoYW5kbGVDaGFuZ2UoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS13cmFwcGVyYCxcbiAgICBgJHtwcmVmaXh9LSR7Z2V0Q29tcHV0ZWRTaXplKHNpemUsIHNpemVDb250ZXh0KX1gLFxuICAgIHtcbiAgICAgIFtgJHtwcmVmaXh9LWNoZWNrZWRgXTogY2hlY2tlZCxcbiAgICAgIFtgJHtwcmVmaXh9LWRpc2FibGVkYF06IGRpc2FibGVkLFxuICAgIH1cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGFyaWEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDaGFuZ2V9XG4gICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYmFzZWB9PlxuICAgICAgICA8aSBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW5kaWNhdG9yYH0gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIHshIWNoZWNrZWQgJiYgY2hlY2tlZFRleHQgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGV4dGB9PntjaGVja2VkVGV4dH08L3NwYW4+XG4gICAgICApfVxuICAgICAgeyFjaGVja2VkICYmIHVuQ2hlY2tlZFRleHQgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGV4dGB9Pnt1bkNoZWNrZWRUZXh0fTwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9zcGFuPlxuICApXG59XG5cblN3aXRjaC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlvIDlhbPnirbmgIEgLSDlpJbpg6jmjqfliLZcbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgdHJ1ZSwgZmFsc2VdKSxcbiAgLyoqXG4gICAqIOW8gOeKtuaAgeaXtueahOmZhOWKoOaWh+Wtl1xuICAgKi9cbiAgY2hlY2tlZFRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTlvIDlhbPnirbmgIEgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMub25lT2YoW251bGwsIHRydWUsIGZhbHNlXSksXG4gIC8qKlxuICAgKiDmmK/lkKbnpoHnlKhcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOW8gOWFs+eKtuaAgeaUueWPmOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDngrnlh7vkuovku7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gIC8qKlxuICAgKiDlhbPnirbmgIHml7bnmoTpmYTliqDmloflrZdcbiAgICovXG4gIHVuQ2hlY2tlZFRleHQ6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5Td2l0Y2guZGVmYXVsdFByb3BzID0ge1xuICBjaGVja2VkOiBudWxsLFxuICBjaGVja2VkVGV4dDogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRDaGVja2VkOiBudWxsLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIG9uQ2hhbmdlOiBudWxsLFxuICBvbkNsaWNrOiBudWxsLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHVuQ2hlY2tlZFRleHQ6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFxuIl19