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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L05hdi50c3giXSwibmFtZXMiOlsibm9vcCIsInByZWZpeCIsIk5hdiIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGVmYXVsdE9wZW5JbmRleGVzIiwiZGVmYXVsdFNlbGVjdGVkSW5kZXgiLCJvbkNoYW5nZSIsIm9uT3BlbkNoYW5nZSIsIm9wZW5JbmRleGVzUHJvcCIsIm9wZW5JbmRleGVzIiwic2VsZWN0ZWRJbmRleFByb3AiLCJzZWxlY3RlZEluZGV4Iiwic2l6ZVByb3AiLCJzaXplIiwib3RoZXJQcm9wcyIsInNldFNlbGVjdGVkSW5kZXgiLCJzZXRPcGVuSW5kZXhlcyIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImNsYXNzU2V0IiwiaGFuZGxlQ2hhbmdlIiwiaW5kZXgiLCJoYW5kbGVPcGVuQ2hhbmdlIiwib3BlbkluZGV4ZXNEdXBsaWNhdGUiLCJpIiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJEaXZpZGVyIiwiR3JvdXAiLCJJdGVtIiwiU3ViTmF2IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImFycmF5Iiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxVQUFmOztBQTZDQSxJQUFNQyxHQUtMLEdBQUcsU0FMRUEsR0FLRixPQVdhO0FBQUEsTUFWZkMsUUFVZSxRQVZmQSxRQVVlO0FBQUEsTUFUZkMsU0FTZSxRQVRmQSxTQVNlO0FBQUEsTUFSZkMsa0JBUWUsUUFSZkEsa0JBUWU7QUFBQSxNQVBmQyxvQkFPZSxRQVBmQSxvQkFPZTtBQUFBLE1BTmZDLFFBTWUsUUFOZkEsUUFNZTtBQUFBLE1BTGZDLFlBS2UsUUFMZkEsWUFLZTtBQUFBLE1BSkZDLGVBSUUsUUFKZkMsV0FJZTtBQUFBLE1BSEFDLGlCQUdBLFFBSGZDLGFBR2U7QUFBQSxNQUZUQyxRQUVTLFFBRmZDLElBRWU7QUFBQSxNQURaQyxVQUNZOztBQUFBLGtCQUMyQixxQkFDeENKLGlCQUFpQixLQUFLLElBQXRCLEdBQTZCQSxpQkFBN0IsR0FBaURMLG9CQURULENBRDNCO0FBQUE7QUFBQSxNQUNSTSxhQURRO0FBQUEsTUFDT0ksZ0JBRFA7O0FBQUEsbUJBSXVCLHFCQUNwQ1AsZUFBZSxLQUFLLElBQXBCLEdBQTJCQSxlQUEzQixHQUE2Q0osa0JBRFQsQ0FKdkI7QUFBQTtBQUFBLE1BSVJLLFdBSlE7QUFBQSxNQUlLTyxjQUpMOztBQVNmLE1BQUlOLGlCQUFpQixLQUFLLElBQXRCLElBQThCQyxhQUFhLEtBQUtELGlCQUFwRCxFQUF1RTtBQUNyRUssSUFBQUEsZ0JBQWdCLENBQUNMLGlCQUFELENBQWhCO0FBQ0Q7O0FBQ0QsTUFBSUYsZUFBZSxLQUFLLElBQXBCLElBQTRCQyxXQUFXLEtBQUtELGVBQWhELEVBQWlFO0FBQy9EUSxJQUFBQSxjQUFjLENBQUNSLGVBQUQsQ0FBZDtBQUNEOztBQWRjLG9CQWdCZSx1QkFBV1MsNkJBQVgsQ0FoQmY7QUFBQSxNQWdCREMsV0FoQkMsZUFnQlBMLElBaEJPOztBQWlCZixNQUFNQSxJQUFJLEdBQUcscUNBQWdCRCxRQUFoQixFQUEwQk0sV0FBMUIsQ0FBYjtBQUVBLE1BQU1DLFFBQVEsR0FBRyw0QkFDZmhCLFNBRGUsWUFFWkgsTUFGWSx5QkFHWkEsTUFIWSxjQUdGYSxJQUhFLEVBQWpCOztBQU1BLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBNEI7QUFDL0MsUUFBSVgsaUJBQWlCLEtBQUssSUFBMUIsRUFBZ0M7QUFDOUJLLE1BQUFBLGdCQUFnQixDQUFDTSxLQUFELENBQWhCO0FBQ0Q7O0FBQ0QsUUFBSWYsUUFBSixFQUFjO0FBQ1pBLE1BQUFBLFFBQVEsQ0FBQ2UsS0FBRCxDQUFSO0FBQ0Q7QUFDRixHQVBEOztBQVNBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0QsS0FBRCxFQUE0QjtBQUNuRCxRQUFNRSxvQkFBb0IsR0FBR2QsV0FBVyxzQkFBT0EsV0FBUCxJQUFzQixFQUE5RDtBQUNBLFFBQU1lLENBQUMsR0FBR0Qsb0JBQW9CLENBQUNFLE9BQXJCLENBQTZCSixLQUE3QixDQUFWOztBQUNBLFFBQUlHLENBQUMsS0FBSyxDQUFDLENBQVgsRUFBYztBQUNaRCxNQUFBQSxvQkFBb0IsQ0FBQ0csTUFBckIsQ0FBNEJGLENBQTVCLEVBQStCLENBQS9CO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELE1BQUFBLG9CQUFvQixDQUFDSSxJQUFyQixDQUEwQk4sS0FBMUI7QUFDRDs7QUFFRCxRQUFJYixlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJRLE1BQUFBLGNBQWMsQ0FBQ08sb0JBQUQsQ0FBZDtBQUNEOztBQUNELFFBQUloQixZQUFKLEVBQWtCO0FBQ2hCQSxNQUFBQSxZQUFZLENBQUNnQixvQkFBRCxDQUFaO0FBQ0Q7QUFDRixHQWZEOztBQWlCQSxTQUNFLGdDQUFDLG1CQUFELENBQVksUUFBWjtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQ0xqQixNQUFBQSxRQUFRLEVBQUVjLFlBREw7QUFFTGIsTUFBQUEsWUFBWSxFQUFFZSxnQkFGVDtBQUdMYixNQUFBQSxXQUFXLEVBQVhBLFdBSEs7QUFJTEUsTUFBQUEsYUFBYSxFQUFiQTtBQUpLO0FBRFQsS0FRRTtBQUFLLElBQUEsU0FBUyxFQUFFUTtBQUFoQixLQUE4QkwsVUFBOUIsR0FDR1osUUFESCxDQVJGLENBREY7QUFjRCxDQWpGRDs7QUFtRkFELEdBQUcsQ0FBQzJCLE9BQUosR0FBY0EsbUJBQWQ7QUFDQTNCLEdBQUcsQ0FBQzRCLEtBQUosR0FBWUEsaUJBQVo7QUFDQTVCLEdBQUcsQ0FBQzZCLElBQUosR0FBV0EsZ0JBQVg7QUFDQTdCLEdBQUcsQ0FBQzhCLE1BQUosR0FBYUEsa0JBQWI7QUFFQTlCLEdBQUcsQ0FBQytCLFNBQUosR0FBZ0I7QUFJZDlCLEVBQUFBLFFBQVEsRUFBRStCLHNCQUFVQyxJQUpOO0FBUWQvQixFQUFBQSxTQUFTLEVBQUU4QixzQkFBVUUsTUFSUDtBQVlkL0IsRUFBQUEsa0JBQWtCLEVBQUU2QixzQkFBVUcsS0FaaEI7QUFnQmQvQixFQUFBQSxvQkFBb0IsRUFBRTRCLHNCQUFVSSxTQUFWLENBQW9CLENBQ3hDSixzQkFBVUUsTUFEOEIsRUFFeENGLHNCQUFVSyxNQUY4QixDQUFwQixDQWhCUjtBQXVCZGhDLEVBQUFBLFFBQVEsRUFBRTJCLHNCQUFVTSxJQXZCTjtBQTJCZGhDLEVBQUFBLFlBQVksRUFBRTBCLHNCQUFVTSxJQTNCVjtBQStCZDlCLEVBQUFBLFdBQVcsRUFBRXdCLHNCQUFVRyxLQS9CVDtBQW1DZHpCLEVBQUFBLGFBQWEsRUFBRXNCLHNCQUFVSSxTQUFWLENBQW9CLENBQUNKLHNCQUFVRSxNQUFYLEVBQW1CRixzQkFBVUssTUFBN0IsQ0FBcEIsQ0FuQ0Q7QUF1Q2R6QixFQUFBQSxJQUFJLEVBQUVvQixzQkFBVU8sS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLENBQWhCO0FBdkNRLENBQWhCO0FBMENBdkMsR0FBRyxDQUFDd0MsWUFBSixHQUFtQjtBQUNqQnZDLEVBQUFBLFFBQVEsRUFBRSxJQURPO0FBRWpCQyxFQUFBQSxTQUFTLEVBQUV1QyxTQUZNO0FBR2pCdEMsRUFBQUEsa0JBQWtCLEVBQUUsRUFISDtBQUlqQkMsRUFBQUEsb0JBQW9CLEVBQUUsSUFKTDtBQUtqQkMsRUFBQUEsUUFBUSxFQUFFUCxJQUxPO0FBTWpCUSxFQUFBQSxZQUFZLEVBQUVSLElBTkc7QUFPakJVLEVBQUFBLFdBQVcsRUFBRSxJQVBJO0FBUWpCRSxFQUFBQSxhQUFhLEVBQUUsSUFSRTtBQVNqQkUsRUFBQUEsSUFBSSxFQUFFO0FBVFcsQ0FBbkI7ZUFZZVosRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIi4vRGl2aWRlclwiXG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIlxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiXG5pbXBvcnQgU3ViTmF2IGZyb20gXCIuL1N1Yk5hdlwiXG5pbXBvcnQgeyBOYXZDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBwcmVmaXggPSBcImFkdWktbmF2XCJcblxuZXhwb3J0IGludGVyZmFjZSBJTmF2UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDpu5jorqTlsZXlvIDnmoQgU3ViTmF2IGluZGV4ZXPvvIzor7fnoa7kv53mlbDnu4TpobnlkIjms5XvvIxOYXYg5LiN5Lya5YGa6L+H5aSa6aqM6K+BXG4gICAqL1xuICBkZWZhdWx0T3BlbkluZGV4ZXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog6buY6K6k6YCJ5Lit55qEIE5hdi5JdGVtIGluZGV4XG4gICAqL1xuICBkZWZhdWx0U2VsZWN0ZWRJbmRleD86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgLyoqXG4gICAqIOeCueWHuyBOYXYuSXRlbSDml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mmluZGV4XG4gICAqL1xuICBvbkNoYW5nZT86IChpbmRleDogUmVhY3QuUmVhY3RUZXh0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBTdWIg5pS26LW3IC8g5bGV5byAIOaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaaW5kZXhcbiAgICovXG4gIG9uT3BlbkNoYW5nZT86IChpbmRleGVzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlsZXlvIDnmoQgU3ViTmF2IGluZGV4ZXPvvIzor7fnoa7kv53mlbDnu4TpobnlkIjms5XvvIxOYXYg5LiN5Lya5YGa6L+H5aSa6aqM6K+BXG4gICAqL1xuICBvcGVuSW5kZXhlcz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrpgInkuK3nmoQgTmF2Lkl0ZW0gaW5kZXhcbiAgICovXG4gIHNlbGVjdGVkSW5kZXg/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jlpKflsI9cbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbn1cblxuLyoqXG4gKiDlr7zoiKrmoI/lvJXlr7znlKjmiLfnoa7orqTkvY3nva7jgIHmlrnlkJHvvIzlrozmiJDlhoXlrrnkuYvpl7Tnp7vliqjjgILkvp3mja7lhoXlrrnpgInmi6npgILlvZPphY3lkIjnmoTlr7zoiKrlvaLlvI/vvIzkuLrpobXpnaLlkozlip/og73mj5DkvpvlvJXlr7zmgKfnu5PmnoToj5zljZXjgIJcbiAqL1xuY29uc3QgTmF2OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJTmF2UHJvcHM+ICYge1xuICBEaXZpZGVyOiB0eXBlb2YgRGl2aWRlclxuICBHcm91cDogdHlwZW9mIEdyb3VwXG4gIEl0ZW06IHR5cGVvZiBJdGVtXG4gIFN1Yk5hdjogdHlwZW9mIFN1Yk5hdlxufSA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGRlZmF1bHRPcGVuSW5kZXhlcyxcbiAgZGVmYXVsdFNlbGVjdGVkSW5kZXgsXG4gIG9uQ2hhbmdlLFxuICBvbk9wZW5DaGFuZ2UsXG4gIG9wZW5JbmRleGVzOiBvcGVuSW5kZXhlc1Byb3AsXG4gIHNlbGVjdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXhQcm9wLFxuICBzaXplOiBzaXplUHJvcCxcbiAgLi4ub3RoZXJQcm9wc1xufTogSU5hdlByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKFxuICAgIHNlbGVjdGVkSW5kZXhQcm9wICE9PSBudWxsID8gc2VsZWN0ZWRJbmRleFByb3AgOiBkZWZhdWx0U2VsZWN0ZWRJbmRleFxuICApXG4gIGNvbnN0IFtvcGVuSW5kZXhlcywgc2V0T3BlbkluZGV4ZXNdID0gdXNlU3RhdGUoXG4gICAgb3BlbkluZGV4ZXNQcm9wICE9PSBudWxsID8gb3BlbkluZGV4ZXNQcm9wIDogZGVmYXVsdE9wZW5JbmRleGVzXG4gIClcblxuICAvLyDnm7jlvZPkuo7nlJ/lkb3lkajmnJ8gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gIGlmIChzZWxlY3RlZEluZGV4UHJvcCAhPT0gbnVsbCAmJiBzZWxlY3RlZEluZGV4ICE9PSBzZWxlY3RlZEluZGV4UHJvcCkge1xuICAgIHNldFNlbGVjdGVkSW5kZXgoc2VsZWN0ZWRJbmRleFByb3ApXG4gIH1cbiAgaWYgKG9wZW5JbmRleGVzUHJvcCAhPT0gbnVsbCAmJiBvcGVuSW5kZXhlcyAhPT0gb3BlbkluZGV4ZXNQcm9wKSB7XG4gICAgc2V0T3BlbkluZGV4ZXMob3BlbkluZGV4ZXNQcm9wKVxuICB9XG5cbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuICBjb25zdCBzaXplID0gZ2V0Q29tcHV0ZWRTaXplKHNpemVQcm9wLCBzaXplQ29udGV4dClcblxuICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgIGAke3ByZWZpeH0td3JhcHBlcmAsXG4gICAgYCR7cHJlZml4fS0ke3NpemV9YFxuICApXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZGV4OiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRJbmRleFByb3AgPT09IG51bGwpIHtcbiAgICAgIHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpXG4gICAgfVxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoaW5kZXgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9IChpbmRleDogUmVhY3QuUmVhY3RUZXh0KSA9PiB7XG4gICAgY29uc3Qgb3BlbkluZGV4ZXNEdXBsaWNhdGUgPSBvcGVuSW5kZXhlcyA/IFsuLi5vcGVuSW5kZXhlc10gOiBbXVxuICAgIGNvbnN0IGkgPSBvcGVuSW5kZXhlc0R1cGxpY2F0ZS5pbmRleE9mKGluZGV4KVxuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgb3BlbkluZGV4ZXNEdXBsaWNhdGUuc3BsaWNlKGksIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5JbmRleGVzRHVwbGljYXRlLnB1c2goaW5kZXgpXG4gICAgfVxuXG4gICAgaWYgKG9wZW5JbmRleGVzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgc2V0T3BlbkluZGV4ZXMob3BlbkluZGV4ZXNEdXBsaWNhdGUpXG4gICAgfVxuICAgIGlmIChvbk9wZW5DaGFuZ2UpIHtcbiAgICAgIG9uT3BlbkNoYW5nZShvcGVuSW5kZXhlc0R1cGxpY2F0ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgICBvbk9wZW5DaGFuZ2U6IGhhbmRsZU9wZW5DaGFuZ2UsXG4gICAgICAgIG9wZW5JbmRleGVzLFxuICAgICAgICBzZWxlY3RlZEluZGV4LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9uYXY+XG4gICAgPC9OYXZDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbk5hdi5EaXZpZGVyID0gRGl2aWRlclxuTmF2Lkdyb3VwID0gR3JvdXBcbk5hdi5JdGVtID0gSXRlbVxuTmF2LlN1Yk5hdiA9IFN1Yk5hdlxuXG5OYXYucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOm7mOiupOWxleW8gOeahCBTdWJOYXYgaW5kZXhlc++8jOivt+ehruS/neaVsOe7hOmhueWQiOazle+8jE5hdiDkuI3kvJrlgZrov4flpJrpqozor4FcbiAgICovXG4gIGRlZmF1bHRPcGVuSW5kZXhlczogUHJvcFR5cGVzLmFycmF5LFxuICAvKipcbiAgICog6buY6K6k6YCJ5Lit55qEIE5hdi5JdGVtIGluZGV4XG4gICAqL1xuICBkZWZhdWx0U2VsZWN0ZWRJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgLyoqXG4gICAqIOeCueWHuyBOYXYuSXRlbSDml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mmluZGV4XG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBTdWIg5pS26LW3IC8g5bGV5byAIOaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaaW5kZXhcbiAgICovXG4gIG9uT3BlbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrlsZXlvIDnmoQgU3ViTmF2IGluZGV4ZXPvvIzor7fnoa7kv53mlbDnu4TpobnlkIjms5XvvIxOYXYg5LiN5Lya5YGa6L+H5aSa6aqM6K+BXG4gICAqL1xuICBvcGVuSW5kZXhlczogUHJvcFR5cGVzLmFycmF5LFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIE5hdi5JdGVtIGluZGV4XG4gICAqL1xuICBzZWxlY3RlZEluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jlpKflsI9cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG59XG5cbk5hdi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGVmYXVsdE9wZW5JbmRleGVzOiBbXSxcbiAgZGVmYXVsdFNlbGVjdGVkSW5kZXg6IG51bGwsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbk9wZW5DaGFuZ2U6IG5vb3AsXG4gIG9wZW5JbmRleGVzOiBudWxsLFxuICBzZWxlY3RlZEluZGV4OiBudWxsLFxuICBzaXplOiBcInNtYWxsXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl19