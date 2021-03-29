"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

var _Divider = _interopRequireDefault(require("./Divider"));

var _Group = _interopRequireDefault(require("./Group"));

var _Item = _interopRequireDefault(require("./Item"));

var _SubNav = _interopRequireDefault(require("./SubNav"));

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  var _useState = (0, _react.useState)(selectedIndexProp !== null ? selectedIndexProp : defaultSelectedIndex),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(openIndexesProp !== null ? openIndexesProp : defaultOpenIndexes),
      _useState4 = _slicedToArray(_useState3, 2),
      openIndexes = _useState4[0],
      setOpenIndexes = _useState4[1];

  if (selectedIndexProp !== null && selectedIndex !== selectedIndexProp) {
    setSelectedIndex(selectedIndexProp);
  }

  if (openIndexesProp !== null && openIndexes !== openIndexesProp) {
    setOpenIndexes(openIndexesProp);
  }

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var size = (0, _configProvider.getComputedSize)(sizeProp, sizeContext);
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat(size));

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

  return _react["default"].createElement(_Context.NavContext.Provider, {
    value: {
      onChange: handleChange,
      onOpenChange: handleOpenChange,
      openIndexes: openIndexes,
      selectedIndex: selectedIndex
    }
  }, _react["default"].createElement("nav", _extends({
    className: classSet
  }, otherProps), children));
};

Nav.Divider = _Divider["default"];
Nav.Group = _Group["default"];
Nav.Item = _Item["default"];
Nav.SubNav = _SubNav["default"];
Nav.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  defaultOpenIndexes: _propTypes["default"].array,
  defaultSelectedIndex: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onChange: _propTypes["default"].func,
  onOpenChange: _propTypes["default"].func,
  openIndexes: _propTypes["default"].array,
  selectedIndex: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"])
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
var _default = Nav;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L05hdi50c3giXSwibmFtZXMiOlsibm9vcCIsInByZWZpeCIsIk5hdiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGVmYXVsdE9wZW5JbmRleGVzIiwiZGVmYXVsdFNlbGVjdGVkSW5kZXgiLCJvbkNoYW5nZSIsIm9uT3BlbkNoYW5nZSIsIm9wZW5JbmRleGVzUHJvcCIsIm9wZW5JbmRleGVzIiwic2VsZWN0ZWRJbmRleFByb3AiLCJzZWxlY3RlZEluZGV4Iiwic2l6ZVByb3AiLCJzaXplIiwib3RoZXJQcm9wcyIsInNldFNlbGVjdGVkSW5kZXgiLCJzZXRPcGVuSW5kZXhlcyIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0IiwiaGFuZGxlQ2hhbmdlIiwiaW5kZXgiLCJoYW5kbGVPcGVuQ2hhbmdlIiwib3BlbkluZGV4ZXNEdXBsaWNhdGUiLCJpIiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJEaXZpZGVyIiwiR3JvdXAiLCJJdGVtIiwiU3ViTmF2IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImFycmF5Iiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsVUFBZjs7QUE2Q0EsSUFBTUMsR0FLTCxHQUFHLFNBTEVBLEdBS0YsT0FXYTtBQUFBLE1BVmZDLFFBVWUsUUFWZkEsUUFVZTtBQUFBLE1BVGZDLFNBU2UsUUFUZkEsU0FTZTtBQUFBLE1BUmZDLGtCQVFlLFFBUmZB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LElBQUksRUFBRTtBQVRXLENBQW5CO2VBWWVaLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0LCBnZXRDb21wdXRlZFNpemUgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCIuL0RpdmlkZXJcIlxuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCJcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIlxuaW1wb3J0IFN1Yk5hdiBmcm9tIFwiLi9TdWJOYXZcIlxuaW1wb3J0IHsgTmF2Q29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLW5hdlwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5hdlByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6buY6K6k5bGV5byA55qEIFN1Yk5hdiBpbmRleGVz77yM6K+356Gu5L+d5pWw57uE6aG55ZCI5rOV77yMTmF2IOS4jeS8muWBmui/h+WkmumqjOivgVxuICAgKi9cbiAgZGVmYXVsdE9wZW5JbmRleGVzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOm7mOiupOmAieS4reeahCBOYXYuSXRlbSBpbmRleFxuICAgKi9cbiAgZGVmYXVsdFNlbGVjdGVkSW5kZXg/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG4gIC8qKlxuICAgKiDngrnlh7sgTmF2Lkl0ZW0g5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJppbmRleFxuICAgKi9cbiAgb25DaGFuZ2U/OiAoaW5kZXg6IFJlYWN0LlJlYWN0VGV4dCkgPT4gdm9pZFxuICAvKipcbiAgICogU3ViIOaUtui1tyAvIOWxleW8gCDml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mmluZGV4XG4gICAqL1xuICBvbk9wZW5DaGFuZ2U/OiAoaW5kZXhlczogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PikgPT4gdm9pZFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5bGV5byA55qEIFN1Yk5hdiBpbmRleGVz77yM6K+356Gu5L+d5pWw57uE6aG55ZCI5rOV77yMTmF2IOS4jeS8muWBmui/h+WkmumqjOivgVxuICAgKi9cbiAgb3BlbkluZGV4ZXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIE5hdi5JdGVtIGluZGV4XG4gICAqL1xuICBzZWxlY3RlZEluZGV4PzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxuICAvKipcbiAgICog6K6+572u5bC65a+45aSn5bCPXG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG59XG5cbi8qKlxuICog5a+86Iiq5qCP5byV5a+855So5oi356Gu6K6k5L2N572u44CB5pa55ZCR77yM5a6M5oiQ5YaF5a655LmL6Ze056e75Yqo44CC5L6d5o2u5YaF5a656YCJ5oup6YCC5b2T6YWN5ZCI55qE5a+86Iiq5b2i5byP77yM5Li66aG16Z2i5ZKM5Yqf6IO95o+Q5L6b5byV5a+85oCn57uT5p6E6I+c5Y2V44CCXG4gKi9cbmNvbnN0IE5hdjogUmVhY3QuRkM8SU5hdlByb3BzPiAmIHtcbiAgRGl2aWRlcjogdHlwZW9mIERpdmlkZXJcbiAgR3JvdXA6IHR5cGVvZiBHcm91cFxuICBJdGVtOiB0eXBlb2YgSXRlbVxuICBTdWJOYXY6IHR5cGVvZiBTdWJOYXZcbn0gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBkZWZhdWx0T3BlbkluZGV4ZXMsXG4gIGRlZmF1bHRTZWxlY3RlZEluZGV4LFxuICBvbkNoYW5nZSxcbiAgb25PcGVuQ2hhbmdlLFxuICBvcGVuSW5kZXhlczogb3BlbkluZGV4ZXNQcm9wLFxuICBzZWxlY3RlZEluZGV4OiBzZWxlY3RlZEluZGV4UHJvcCxcbiAgc2l6ZTogc2l6ZVByb3AsXG4gIC4uLm90aGVyUHJvcHNcbn06IElOYXZQcm9wcykgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZShcbiAgICBzZWxlY3RlZEluZGV4UHJvcCAhPT0gbnVsbCA/IHNlbGVjdGVkSW5kZXhQcm9wIDogZGVmYXVsdFNlbGVjdGVkSW5kZXhcbiAgKVxuICBjb25zdCBbb3BlbkluZGV4ZXMsIHNldE9wZW5JbmRleGVzXSA9IHVzZVN0YXRlKFxuICAgIG9wZW5JbmRleGVzUHJvcCAhPT0gbnVsbCA/IG9wZW5JbmRleGVzUHJvcCA6IGRlZmF1bHRPcGVuSW5kZXhlc1xuICApXG5cbiAgLy8g55u45b2T5LqO55Sf5ZG95ZGo5pyfIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICBpZiAoc2VsZWN0ZWRJbmRleFByb3AgIT09IG51bGwgJiYgc2VsZWN0ZWRJbmRleCAhPT0gc2VsZWN0ZWRJbmRleFByb3ApIHtcbiAgICBzZXRTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXhQcm9wKVxuICB9XG4gIGlmIChvcGVuSW5kZXhlc1Byb3AgIT09IG51bGwgJiYgb3BlbkluZGV4ZXMgIT09IG9wZW5JbmRleGVzUHJvcCkge1xuICAgIHNldE9wZW5JbmRleGVzKG9wZW5JbmRleGVzUHJvcClcbiAgfVxuXG4gIGNvbnN0IHsgc2l6ZTogc2l6ZUNvbnRleHQgfSA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dClcbiAgY29uc3Qgc2l6ZSA9IGdldENvbXB1dGVkU2l6ZShzaXplUHJvcCwgc2l6ZUNvbnRleHQpXG5cbiAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgJHtwcmVmaXh9LXdyYXBwZXJgLFxuICAgIGAke3ByZWZpeH0tJHtzaXplfWBcbiAgKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmRleDogUmVhY3QuUmVhY3RUZXh0KSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkSW5kZXhQcm9wID09PSBudWxsKSB7XG4gICAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KVxuICAgIH1cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGluZGV4KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU9wZW5DaGFuZ2UgPSAoaW5kZXg6IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgIGNvbnN0IG9wZW5JbmRleGVzRHVwbGljYXRlID0gb3BlbkluZGV4ZXMgPyBbLi4ub3BlbkluZGV4ZXNdIDogW11cbiAgICBjb25zdCBpID0gb3BlbkluZGV4ZXNEdXBsaWNhdGUuaW5kZXhPZihpbmRleClcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIG9wZW5JbmRleGVzRHVwbGljYXRlLnNwbGljZShpLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuSW5kZXhlc0R1cGxpY2F0ZS5wdXNoKGluZGV4KVxuICAgIH1cblxuICAgIGlmIChvcGVuSW5kZXhlc1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHNldE9wZW5JbmRleGVzKG9wZW5JbmRleGVzRHVwbGljYXRlKVxuICAgIH1cbiAgICBpZiAob25PcGVuQ2hhbmdlKSB7XG4gICAgICBvbk9wZW5DaGFuZ2Uob3BlbkluZGV4ZXNEdXBsaWNhdGUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgICAgb25PcGVuQ2hhbmdlOiBoYW5kbGVPcGVuQ2hhbmdlLFxuICAgICAgICBvcGVuSW5kZXhlcyxcbiAgICAgICAgc2VsZWN0ZWRJbmRleCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbmF2PlxuICAgIDwvTmF2Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5OYXYuRGl2aWRlciA9IERpdmlkZXJcbk5hdi5Hcm91cCA9IEdyb3VwXG5OYXYuSXRlbSA9IEl0ZW1cbk5hdi5TdWJOYXYgPSBTdWJOYXZcblxuTmF2LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpu5jorqTlsZXlvIDnmoQgU3ViTmF2IGluZGV4ZXPvvIzor7fnoa7kv53mlbDnu4TpobnlkIjms5XvvIxOYXYg5LiN5Lya5YGa6L+H5aSa6aqM6K+BXG4gICAqL1xuICBkZWZhdWx0T3BlbkluZGV4ZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqXG4gICAqIOm7mOiupOmAieS4reeahCBOYXYuSXRlbSBpbmRleFxuICAgKi9cbiAgZGVmYXVsdFNlbGVjdGVkSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIC8qKlxuICAgKiDngrnlh7sgTmF2Lkl0ZW0g5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJppbmRleFxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogU3ViIOaUtui1tyAvIOWxleW8gCDml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mmluZGV4XG4gICAqL1xuICBvbk9wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5bGV5byA55qEIFN1Yk5hdiBpbmRleGVz77yM6K+356Gu5L+d5pWw57uE6aG55ZCI5rOV77yMTmF2IOS4jeS8muWBmui/h+WkmumqjOivgVxuICAgKi9cbiAgb3BlbkluZGV4ZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8mumAieS4reeahCBOYXYuSXRlbSBpbmRleFxuICAgKi9cbiAgc2VsZWN0ZWRJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAvKipcbiAgICog6K6+572u5bC65a+45aSn5bCPXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxufVxuXG5OYXYuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHRPcGVuSW5kZXhlczogW10sXG4gIGRlZmF1bHRTZWxlY3RlZEluZGV4OiBudWxsLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25PcGVuQ2hhbmdlOiBub29wLFxuICBvcGVuSW5kZXhlczogbnVsbCxcbiAgc2VsZWN0ZWRJbmRleDogbnVsbCxcbiAgc2l6ZTogXCJzbWFsbFwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdfQ==