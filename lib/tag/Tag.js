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

var _icon = _interopRequireDefault(require("../icon"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-tag";

var Tag = function Tag(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      intent = _ref.intent,
      interactive = _ref.interactive,
      onRemove = _ref.onRemove,
      removableProp = _ref.removable,
      round = _ref.round,
      size = _ref.size,
      style = _ref.style,
      theme = _ref.theme,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "color", "intent", "interactive", "onRemove", "removable", "round", "size", "style", "theme"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      removed = _useState2[0],
      setRemoved = _useState2[1];

  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
      sizeContext = _useContext.size;

  var handleRemove = function handleRemove(e) {
    setRemoved(true);

    if (onRemove) {
      onRemove(e);
    }
  };

  var removable = !!onRemove || removableProp;
  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"), color ? "" : "".concat(prefix, "-").concat(intent), "".concat(prefix, "-").concat((0, _configProvider.getComputedSize)(size, sizeContext)), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-colored"), !!color), _defineProperty(_classNames, "".concat(prefix, "-interactive"), interactive), _defineProperty(_classNames, "".concat(prefix, "-removable"), removable), _defineProperty(_classNames, "".concat(prefix, "-round"), round), _defineProperty(_classNames, "".concat(prefix, "-").concat(theme), theme), _classNames));

  if (removed) {
    return null;
  }

  var colorStyle = {};

  if (color) {
    colorStyle.color = color;
  }

  return _react["default"].createElement("div", _extends({
    className: classSet,
    style: _objectSpread(_objectSpread({}, colorStyle), style)
  }, otherProps), _react["default"].createElement("div", {
    className: "".concat(prefix, "-content")
  }, children, removable && _react["default"].createElement(_icon["default"], {
    icon: "cancel-circle",
    className: "".concat(prefix, "-remove"),
    onClick: handleRemove,
    size: 16
  })), _react["default"].createElement("div", {
    className: "".concat(prefix, "-background")
  }), !theme && _react["default"].createElement("div", {
    className: "".concat(prefix, "-shadow")
  }));
};

Tag.propTypes = {
  children: _propTypes["default"].node.isRequired,
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  interactive: _propTypes["default"].bool,
  onRemove: _propTypes["default"].func,
  removable: _propTypes["default"].bool,
  round: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  style: _propTypes["default"].object,
  theme: _propTypes["default"].oneOf([null, "light"])
};
Tag.defaultProps = {
  className: undefined,
  color: null,
  intent: "normal",
  interactive: false,
  onRemove: null,
  removable: false,
  round: false,
  size: "small",
  style: {},
  theme: null
};
var _default = Tag;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFnL1RhZy50c3giXSwibmFtZXMiOlsicHJlZml4IiwiVGFnIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb2xvciIsImludGVudCIsImludGVyYWN0aXZlIiwib25SZW1vdmUiLCJyZW1vdmFibGVQcm9wIiwicmVtb3ZhYmxlIiwicm91bmQiLCJzaXplIiwic3R5bGUiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJyZW1vdmVkIiwic2V0UmVtb3ZlZCIsIkNvbmZpZ0NvbnRleHQiLCJzaXplQ29udGV4dCIsImhhbmRsZVJlbW92ZSIsImUiLCJjbGFzc1NldCIsImNvbG9yU3R5bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxVQUFmOztBQXFEQSxJQUFNQyxHQUF3QixHQUFHLFNBQTNCQSxHQUEyQixPQWFoQjtBQUFBOztBQUFBLE1BWmZDLFFBWWUsUUFaZkEsUUFZZTtBQUFBLE1BWGZDLFNBV2UsUUFYZkEsU0FXZTtBQUFBLE1BVmZDLEtBVWUsUUFWZkEsS0FVZTtBQUFBLE1BVGZDLE1BU2UsUUFUZkEsTUFTZTtBQUFBLE1BUmZDLFdBUWUsUUFSZkEsV0FRZTtBQUFBLE1BUGZDLFFBT2UsUUFQZkEsUUFPZTtBQUFBLE1BTkpDLGFBTUksUUFOZkMsU0FNZTtBQUFBLE1BTGZDLEtBS2UsUUFMZkEsS0FLZTtBQUFBLE1BSmZDLElBSWUsUUFKZkEsSUFJZTtBQUFBLE1BSGZDLEtBR2UsUUFIZkEsS0FHZTtBQUFBLE1BRmZDLEtBRWUsUUFGZkEsS0FFZTtBQUFBLE1BRFpDLFVBQ1k7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QjtBQXFEQTNCLEdBQUcsQ0FBQytCLFlBQUosR0FBbUI7QUFDakI3QixFQUFBQSxTQUFTLEVBQUU4QixTQURNO0FBRWpCN0IsRUFBQUEsS0FBSyxFQUFFLElBRlU7QUFHakJDLEVBQUFBLE1BQU0sRUFBRSxRQUhTO0FBSWpCQyxFQUFBQSxXQUFXLEVBQUUsS0FKSTtBQUtqQkMsRUFBQUEsUUFBUSxFQUFFLElBTE87QUFNakJFLEVBQUFBLFNBQVMsRUFBRSxLQU5NO0FBT2pCQyxFQUFBQSxLQUFLLEVBQUUsS0FQVTtBQVFqQkMsRUFBQUEsSUFBSSxFQUFFLE9BUlc7QUFTakJDLEVBQUFBLEtBQUssRUFBRSxFQVRVO0FBVWpCQyxFQUFBQSxLQUFLLEVBQUU7QUFWVSxDQUFuQjtlQWFlWixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCwgZ2V0Q29tcHV0ZWRTaXplIH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRhZ1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhZ1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog6Ieq5a6a5LmJ6aKc6ImyXG4gICAqL1xuICBjb2xvcj86IHN0cmluZyB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOaMh+WumiBUYWcg5piv5ZCm5Y+v5Lqk5LqS77yM57uE5Lu25bCG5Lya6Ieq5Yqo5Yqg5LiKIGhvdmVyIGFjdGl2ZSDmoLflvI9cbiAgICovXG4gIGludGVyYWN0aXZlPzogYm9vbGVhblxuICAvKipcbiAgICog56e76Zmk5pe255qEIGhhbmRsZXLvvIzorr7nva7mraQgcHJvcCDml7YgVGFnIOWwhuS8muW/veeVpSByZW1vdmFibGUgcHJvcFxuICAgKi9cbiAgb25SZW1vdmU/OiAoKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm5Y+v56e76ZmkXG4gICAqL1xuICByZW1vdmFibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKblnIbop5JcbiAgICovXG4gIHJvdW5kPzogYm9vbGVhblxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbn1cblxuLyoqXG4gKiDmoIfnrb7lsZXnjrDnm7jlhbPnmoTni6znq4vlhbPplK7or43kv6Hmga/vvIzmlrnkvr/nlKjmiLflv6vpgJ/ovqjliKvlhoXlrrnlsZ7mgKfvvIzkuZ/lj6/ov5vooYzmk43kvZzjgIJcbiAqL1xuY29uc3QgVGFnOiBSZWFjdC5GQzxJVGFnUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgY29sb3IsXG4gIGludGVudCxcbiAgaW50ZXJhY3RpdmUsXG4gIG9uUmVtb3ZlLFxuICByZW1vdmFibGU6IHJlbW92YWJsZVByb3AsXG4gIHJvdW5kLFxuICBzaXplLFxuICBzdHlsZSxcbiAgdGhlbWUsXG4gIC4uLm90aGVyUHJvcHNcbn06IElUYWdQcm9wcykgPT4ge1xuICBjb25zdCBbcmVtb3ZlZCwgc2V0UmVtb3ZlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB7IHNpemU6IHNpemVDb250ZXh0IH0gPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpXG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBzZXRSZW1vdmVkKHRydWUpXG4gICAgaWYgKG9uUmVtb3ZlKSB7XG4gICAgICBvblJlbW92ZShlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92YWJsZSA9ICEhb25SZW1vdmUgfHwgcmVtb3ZhYmxlUHJvcFxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICBjb2xvciA/IFwiXCIgOiBgJHtwcmVmaXh9LSR7aW50ZW50fWAsXG4gICAgYCR7cHJlZml4fS0ke2dldENvbXB1dGVkU2l6ZShzaXplLCBzaXplQ29udGV4dCl9YCxcbiAgICB7XG4gICAgICBbYCR7cHJlZml4fS1jb2xvcmVkYF06ICEhY29sb3IsXG4gICAgICBbYCR7cHJlZml4fS1pbnRlcmFjdGl2ZWBdOiBpbnRlcmFjdGl2ZSxcbiAgICAgIFtgJHtwcmVmaXh9LXJlbW92YWJsZWBdOiByZW1vdmFibGUsXG4gICAgICBbYCR7cHJlZml4fS1yb3VuZGBdOiByb3VuZCxcbiAgICAgIFtgJHtwcmVmaXh9LSR7dGhlbWV9YF06IHRoZW1lLFxuICAgIH1cbiAgKVxuXG4gIGlmIChyZW1vdmVkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGNvbG9yU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fVxuXG4gIGlmIChjb2xvcikge1xuICAgIGNvbG9yU3R5bGUuY29sb3IgPSBjb2xvclxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uY29sb3JTdHlsZSxcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICB9fVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY29udGVudGB9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtyZW1vdmFibGUgJiYgKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY2FuY2VsLWNpcmNsZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcmVtb3ZlYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX1cbiAgICAgICAgICAgIHNpemU9ezE2fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWJhY2tncm91bmRgfSAvPlxuICAgICAgeyF0aGVtZSAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zaGFkb3dgfSAvPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5UYWcucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog6Ieq5a6a5LmJ6aKc6ImyXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwibm9ybWFsXCIsXG4gICAgXCJwcmltYXJ5XCIsXG4gICAgXCJzdWNjZXNzXCIsXG4gICAgXCJ3YXJuaW5nXCIsXG4gICAgXCJkYW5nZXJcIixcbiAgXSksXG4gIC8qKlxuICAgKiDmjIflrpogVGFnIOaYr+WQpuWPr+S6pOS6ku+8jOe7hOS7tuWwhuS8muiHquWKqOWKoOS4iiBob3ZlciBhY3RpdmUg5qC35byPXG4gICAqL1xuICBpbnRlcmFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDnp7vpmaTml7bnmoQgaGFuZGxlcu+8jOiuvue9ruatpCBwcm9wIOaXtiBUYWcg5bCG5Lya5b+955WlIHJlbW92YWJsZSBwcm9wXG4gICAqL1xuICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDmmK/lkKblj6/np7vpmaRcbiAgICovXG4gIHJlbW92YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDmmK/lkKblnIbop5JcbiAgICovXG4gIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOmZhOWKoOagt+W8j1xuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDkuLvpophcbiAgICovXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxufVxuXG5UYWcuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgY29sb3I6IG51bGwsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICBvblJlbW92ZTogbnVsbCxcbiAgcmVtb3ZhYmxlOiBmYWxzZSxcbiAgcm91bmQ6IGZhbHNlLFxuICBzaXplOiBcInNtYWxsXCIsXG4gIHN0eWxlOiB7fSxcbiAgdGhlbWU6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ1xuIl19