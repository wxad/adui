function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
import Divider from "./Divider";
import Group from "./Group";
import Item from "./Item";
import SubNav from "./SubNav";
import { NavContext } from "./Context";
import "./style";

var noop = function noop() {};

var prefix = "adui-nav";

var Nav = function Nav(_ref) {
  var children = _ref.children,
      className = _ref.className,
      defaultOpenIndexes = _ref.defaultOpenIndexes,
      defaultSelectedIndex = _ref.defaultSelectedIndex,
      onChange = _ref.onChange,
      onOpenChange = _ref.onOpenChange,
      openIndexesProp = _ref.openIndexes,
      selectedIndexProp = _ref.selectedIndex,
      sizeProp = _ref.size,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "defaultOpenIndexes", "defaultSelectedIndex", "onChange", "onOpenChange", "openIndexes", "selectedIndex", "size"]);

  var _useState = useState(selectedIndexProp !== null ? selectedIndexProp : defaultSelectedIndex),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var _useState3 = useState(openIndexesProp !== null ? openIndexesProp : defaultOpenIndexes),
      _useState4 = _slicedToArray(_useState3, 2),
      openIndexes = _useState4[0],
      setOpenIndexes = _useState4[1];

  if (selectedIndexProp !== null && selectedIndex !== selectedIndexProp) {
    setSelectedIndex(selectedIndexProp);
  }

  if (openIndexesProp !== null && openIndexes !== openIndexesProp) {
    setOpenIndexes(openIndexesProp);
  }

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var size = getComputedSize(sizeProp, sizeContext);
  var classSet = classNames(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat(size));

  var handleChange = function handleChange(index) {
    if (selectedIndexProp === null) {
      setSelectedIndex(index);
    }

    if (onChange) {
      onChange(index);
    }
  };

  var handleOpenChange = function handleOpenChange(index) {
    var openIndexesDuplicate = openIndexes ? _toConsumableArray(openIndexes) : [];
    var i = openIndexesDuplicate.indexOf(index);

    if (i !== -1) {
      openIndexesDuplicate.splice(i, 1);
    } else {
      openIndexesDuplicate.push(index);
    }

    if (openIndexesProp === null) {
      setOpenIndexes(openIndexesDuplicate);
    }

    if (onOpenChange) {
      onOpenChange(openIndexesDuplicate);
    }
  };

  return React.createElement(NavContext.Provider, {
    value: {
      onChange: handleChange,
      onOpenChange: handleOpenChange,
      openIndexes: openIndexes,
      selectedIndex: selectedIndex
    }
  }, React.createElement("nav", _extends({
    className: classSet
  }, otherProps), children));
};

Nav.Divider = Divider;
Nav.Group = Group;
Nav.Item = Item;
Nav.SubNav = SubNav;
Nav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultOpenIndexes: PropTypes.array,
  defaultSelectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onOpenChange: PropTypes.func,
  openIndexes: PropTypes.array,
  selectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(["mini", "small", "medium", "large"])
};
Nav.defaultProps = {
  children: null,
  className: undefined,
  defaultOpenIndexes: [],
  defaultSelectedIndex: null,
  onChange: noop,
  onOpenChange: noop,
  openIndexes: null,
  selectedIndex: null,
  size: "small"
};
export default Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L05hdi50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiQ29uZmlnQ29udGV4dCIsImdldENvbXB1dGVkU2l6ZSIsIkRpdmlkZXIiLCJHcm91cCIsIkl0ZW0iLCJTdWJOYXYiLCJOYXZDb250ZXh0Iiwibm9vcCIsInByZWZpeCIsIk5hdiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGVmYXVsdE9wZW5JbmRleGVzIiwiZGVmYXVsdFNlbGVjdGVkSW5kZXgiLCJvbkNoYW5nZSIsIm9uT3BlbkNoYW5nZSIsIm9wZW5JbmRleGVzUHJvcCIsIm9wZW5JbmRleGVzIiwic2VsZWN0ZWRJbmRleFByb3AiLCJzZWxlY3RlZEluZGV4Iiwic2l6ZVByb3AiLCJzaXplIiwib3RoZXJQcm9wcyIsInNldFNlbGVjdGVkSW5kZXgiLCJzZXRPcGVuSW5kZXhlcyIsInNpemVDb250ZXh0IiwiY2xhc3NTZXQiLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsImhhbmRsZU9wZW5DaGFuZ2UiLCJvcGVuSW5kZXhlc0R1cGxpY2F0ZSIsImkiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsInByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJhcnJheSIsIm9uZU9mVHlwZSIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsUUFBNUIsUUFBNEMsT0FBNUM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLGVBQXhCLFFBQStDLG9CQUEvQztBQUNBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7QUFDQSxPQUFP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LENBbkNEO0FBdUNkbkIsRUFBQUEsSUFBSSxFQUFFdkIsU0FBUyxDQUFDNEMsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCO0FBdkNRLENBQWhCO0FBMENBakMsR0FBRyxDQUFDa0MsWUFBSixHQUFtQjtBQUNqQmpDLEVBQUFBLFFBQVEsRUFBRSxJQURPO0FBRWpCQyxFQUFBQSxTQUFTLEVBQUVpQyxTQUZNO0FBR2pCaEMsRUFBQUEsa0JBQWtCLEVBQUUsRUFISDtBQUlqQkMsRUFBQUEsb0JBQW9CLEVBQUUsSUFKTDtBQUtqQkMsRUFBQUEsUUFBUSxFQUFFUCxJQUxPO0FBTWpCUSxFQUFBQSxZQUFZLEVBQUVSLElBTkc7QUFPakJVLEVBQUFBLFdBQVcsRUFBRSxJQVBJO0FBUWpCRSxFQUFBQSxhQUFhLEVBQUUsSUFSRTtBQVNqQkUsRUFBQUEsSUFBSSxFQUFFO0FBVFcsQ0FBbkI7QUFZQSxlQUFlWixHQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi9EaXZpZGVyXCJcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCJcbmltcG9ydCBTdWJOYXYgZnJvbSBcIi4vU3ViTmF2XCJcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1uYXZcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElOYXZQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOm7mOiupOWxleW8gOeahCBTdWJOYXYgaW5kZXhlc++8jOivt+ehruS/neaVsOe7hOmhueWQiOazle+8jE5hdiDkuI3kvJrlgZrov4flpJrpqozor4FcbiAgICovXG4gIGRlZmF1bHRPcGVuSW5kZXhlcz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDpu5jorqTpgInkuK3nmoQgTmF2Lkl0ZW0gaW5kZXhcbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZEluZGV4PzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxuICAvKipcbiAgICog54K55Ye7IE5hdi5JdGVtIOaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaaW5kZXhcbiAgICovXG4gIG9uQ2hhbmdlPzogKGluZGV4OiBSZWFjdC5SZWFjdFRleHQpID0+IHZvaWRcbiAgLyoqXG4gICAqIFN1YiDmlLbotbcgLyDlsZXlvIAg5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJppbmRleFxuICAgKi9cbiAgb25PcGVuQ2hhbmdlPzogKGluZGV4ZXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muWxleW8gOeahCBTdWJOYXYgaW5kZXhlc++8jOivt+ehruS/neaVsOe7hOmhueWQiOazle+8jE5hdiDkuI3kvJrlgZrov4flpJrpqozor4FcbiAgICovXG4gIG9wZW5JbmRleGVzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8mumAieS4reeahCBOYXYuSXRlbSBpbmRleFxuICAgKi9cbiAgc2VsZWN0ZWRJbmRleD86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxufVxuXG4vKipcbiAqIOWvvOiIquagj+W8leWvvOeUqOaIt+ehruiupOS9jee9ruOAgeaWueWQke+8jOWujOaIkOWGheWuueS5i+mXtOenu+WKqOOAguS+neaNruWGheWuuemAieaLqemAguW9k+mFjeWQiOeahOWvvOiIquW9ouW8j++8jOS4uumhtemdouWSjOWKn+iDveaPkOS+m+W8leWvvOaAp+e7k+aehOiPnOWNleOAglxuICovXG5jb25zdCBOYXY6IFJlYWN0LkZDPElOYXZQcm9wcz4gJiB7XG4gIERpdmlkZXI6IHR5cGVvZiBEaXZpZGVyXG4gIEdyb3VwOiB0eXBlb2YgR3JvdXBcbiAgSXRlbTogdHlwZW9mIEl0ZW1cbiAgU3ViTmF2OiB0eXBlb2YgU3ViTmF2XG59ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZGVmYXVsdE9wZW5JbmRleGVzLFxuICBkZWZhdWx0U2VsZWN0ZWRJbmRleCxcbiAgb25DaGFuZ2UsXG4gIG9uT3BlbkNoYW5nZSxcbiAgb3BlbkluZGV4ZXM6IG9wZW5JbmRleGVzUHJvcCxcbiAgc2VsZWN0ZWRJbmRleDogc2VsZWN0ZWRJbmRleFByb3AsXG4gIHNpemU6IHNpemVQcm9wLFxuICAuLi5vdGhlclByb3BzXG59OiBJTmF2UHJvcHMpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoXG4gICAgc2VsZWN0ZWRJbmRleFByb3AgIT09IG51bGwgPyBzZWxlY3RlZEluZGV4UHJvcCA6IGRlZmF1bHRTZWxlY3RlZEluZGV4XG4gIClcbiAgY29uc3QgW29wZW5JbmRleGVzLCBzZXRPcGVuSW5kZXhlc10gPSB1c2VTdGF0ZShcbiAgICBvcGVuSW5kZXhlc1Byb3AgIT09IG51bGwgPyBvcGVuSW5kZXhlc1Byb3AgOiBkZWZhdWx0T3BlbkluZGV4ZXNcbiAgKVxuXG4gIC8vIOebuOW9k+S6jueUn+WRveWRqOacnyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcbiAgaWYgKHNlbGVjdGVkSW5kZXhQcm9wICE9PSBudWxsICYmIHNlbGVjdGVkSW5kZXggIT09IHNlbGVjdGVkSW5kZXhQcm9wKSB7XG4gICAgc2V0U2VsZWN0ZWRJbmRleChzZWxlY3RlZEluZGV4UHJvcClcbiAgfVxuICBpZiAob3BlbkluZGV4ZXNQcm9wICE9PSBudWxsICYmIG9wZW5JbmRleGVzICE9PSBvcGVuSW5kZXhlc1Byb3ApIHtcbiAgICBzZXRPcGVuSW5kZXhlcyhvcGVuSW5kZXhlc1Byb3ApXG4gIH1cblxuICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG4gIGNvbnN0IHNpemUgPSBnZXRDb21wdXRlZFNpemUoc2l6ZVByb3AsIHNpemVDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS13cmFwcGVyYCxcbiAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gXG4gIClcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5kZXg6IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEluZGV4UHJvcCA9PT0gbnVsbCkge1xuICAgICAgc2V0U2VsZWN0ZWRJbmRleChpbmRleClcbiAgICB9XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShpbmRleClcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVPcGVuQ2hhbmdlID0gKGluZGV4OiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICBjb25zdCBvcGVuSW5kZXhlc0R1cGxpY2F0ZSA9IG9wZW5JbmRleGVzID8gWy4uLm9wZW5JbmRleGVzXSA6IFtdXG4gICAgY29uc3QgaSA9IG9wZW5JbmRleGVzRHVwbGljYXRlLmluZGV4T2YoaW5kZXgpXG4gICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICBvcGVuSW5kZXhlc0R1cGxpY2F0ZS5zcGxpY2UoaSwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlbkluZGV4ZXNEdXBsaWNhdGUucHVzaChpbmRleClcbiAgICB9XG5cbiAgICBpZiAob3BlbkluZGV4ZXNQcm9wID09PSBudWxsKSB7XG4gICAgICBzZXRPcGVuSW5kZXhlcyhvcGVuSW5kZXhlc0R1cGxpY2F0ZSlcbiAgICB9XG4gICAgaWYgKG9uT3BlbkNoYW5nZSkge1xuICAgICAgb25PcGVuQ2hhbmdlKG9wZW5JbmRleGVzRHVwbGljYXRlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIG9uT3BlbkNoYW5nZTogaGFuZGxlT3BlbkNoYW5nZSxcbiAgICAgICAgb3BlbkluZGV4ZXMsXG4gICAgICAgIHNlbGVjdGVkSW5kZXgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gey4uLm90aGVyUHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L25hdj5cbiAgICA8L05hdkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuTmF2LkRpdmlkZXIgPSBEaXZpZGVyXG5OYXYuR3JvdXAgPSBHcm91cFxuTmF2Lkl0ZW0gPSBJdGVtXG5OYXYuU3ViTmF2ID0gU3ViTmF2XG5cbk5hdi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6buY6K6k5bGV5byA55qEIFN1Yk5hdiBpbmRleGVz77yM6K+356Gu5L+d5pWw57uE6aG55ZCI5rOV77yMTmF2IOS4jeS8muWBmui/h+WkmumqjOivgVxuICAgKi9cbiAgZGVmYXVsdE9wZW5JbmRleGVzOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKlxuICAgKiDpu5jorqTpgInkuK3nmoQgTmF2Lkl0ZW0gaW5kZXhcbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZEluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICAvKipcbiAgICog54K55Ye7IE5hdi5JdGVtIOaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaaW5kZXhcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIFN1YiDmlLbotbcgLyDlsZXlvIAg5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJppbmRleFxuICAgKi9cbiAgb25PcGVuQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muWxleW8gOeahCBTdWJOYXYgaW5kZXhlc++8jOivt+ehruS/neaVsOe7hOmhueWQiOazle+8jE5hdiDkuI3kvJrlgZrov4flpJrpqozor4FcbiAgICovXG4gIG9wZW5JbmRleGVzOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrpgInkuK3nmoQgTmF2Lkl0ZW0gaW5kZXhcbiAgICovXG4gIHNlbGVjdGVkSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuOWkp+Wwj1xuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbn1cblxuTmF2LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBkZWZhdWx0T3BlbkluZGV4ZXM6IFtdLFxuICBkZWZhdWx0U2VsZWN0ZWRJbmRleDogbnVsbCxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9uT3BlbkNoYW5nZTogbm9vcCxcbiAgb3BlbkluZGV4ZXM6IG51bGwsXG4gIHNlbGVjdGVkSW5kZXg6IG51bGwsXG4gIHNpemU6IFwic21hbGxcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXX0=