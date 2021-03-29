"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Context = require("./Context");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {};

var prefix = "adui-menu";

var Item = function Item(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      index = _ref.index,
      _onClick = _ref.onClick,
      otherProps = _objectWithoutProperties(_ref, ["className", "disabled", "index", "onClick"]);

  var _useContext = (0, _react.useContext)(_Context.MenuContext),
      onItemClick = _useContext.onItemClick;

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-item"), _defineProperty({}, "".concat(prefix, "-item_disabled"), disabled));
  return _react["default"].createElement("div", _extends({
    role: "none",
    onClick: function onClick() {
      if (!disabled) {
        if (_onClick) {
          _onClick();
        }

        if (onItemClick) {
          onItemClick(index);
        }
      }
    },
    className: classSet
  }, otherProps));
};

Item.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  index: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  onClick: _propTypes["default"].func
};
Item.defaultProps = {
  children: null,
  className: undefined,
  disabled: false,
  onClick: noop
};
var _default = Item;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVudS9JdGVtLnRzeCJdLCJuYW1lcyI6WyJub29wIiwicHJlZml4IiwiSXRlbSIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiaW5kZXgiLCJvbkNsaWNrIiwib3RoZXJQcm9wcyIsIk1lbnVDb250ZXh0Iiwib25JdGVtQ2xpY2siLCJjbGFzc1NldCIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImJvb2wiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFdBQWY7O0FBNkJBLElBQU1DLElBQTBCLEdBQUcsU0FBN0JBLElBQTZCLE9BTWpCO0FBQUEsTUFMaEJDLFNBS2dCLFFBTGhCQSxTQUtnQjtBQUFBLE1BSmhCQyxRQUlnQixRQUpoQkEsUUFJZ0I7QUFBQSxNQUhoQkMsS0FHZ0IsUUFIaEJBLEtBR2dCO0FBQUEsTUFGaEJDLFFBRWdCLFFBRmhCQSxPQUVnQjtBQUFBLE1BRGJDLFVBQ2E7O0FBQUEsb0JBQ1EsdUJBQVdDLG9CQUFYLENBRFI7QUFBQSxNQUNSQyxXQURRLGVBQ1JBLFdBRFE7O0FBR2hCLE1BQU1DLFFBQVEsR0FBRyw0QkFBV1AsU0FBWCxZQUF5QkYsTUFBekIsMENBQ1hBLE1BRFcscUJBQ2NHLFFBRGQsRUFBakI7QUFHQSxTQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDYixZQUFJRSxRQUFKLEVBQWE7QUFDWEEsVUFBQUEsUUFBTztBQUNSOztBQUNELFlBQUlHLFdBQUosRUFBaUI7QUFDZkEsVUFBQUEsV0FBVyxDQUFDSixLQUFELENBQVg7QUFDRDtBQUNGO0FBQ0YsS0FYSDtBQVlFLElBQUEsU0FBUyxFQUFFSztBQVpiLEtBYU1ILFVBYk4sRUFERjtBQWlCRCxDQTdCRDs7QUE4QkFMLElBQUksQ0FBQ1MsU0FBTCxHQUFpQjtBQUlmQyxFQUFBQSxRQUFRLEVBQUVDLHNCQUFVQyxJQUpMO0FBUWZYLEVBQUFBLFNBQVMsRUFBRVUsc0JBQVVFLE1BUk47QUFZZlgsRUFBQUEsUUFBUSxFQUFFUyxzQkFBVUcsSUFaTDtBQWdCZlgsRUFBQUEsS0FBSyxFQUFFUSxzQkFBVUksU0FBVixDQUFvQixDQUFDSixzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVLLE1BQTdCLENBQXBCLEVBQTBEQyxVQWhCbEQ7QUFvQmZiLEVBQUFBLE9BQU8sRUFBRU8sc0JBQVVPO0FBcEJKLENBQWpCO0FBdUJBbEIsSUFBSSxDQUFDbUIsWUFBTCxHQUFvQjtBQUNsQlQsRUFBQUEsUUFBUSxFQUFFLElBRFE7QUFFbEJULEVBQUFBLFNBQVMsRUFBRW1CLFNBRk87QUFHbEJsQixFQUFBQSxRQUFRLEVBQUUsS0FIUTtBQUlsQkUsRUFBQUEsT0FBTyxFQUFFTjtBQUpTLENBQXBCO2VBT2VFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IE1lbnVDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBwcmVmaXggPSBcImFkdWktbWVudVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUl0ZW1Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuemgeeUqFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBCb29sZWFuXG4gIC8qKlxuICAgKiDni6znq4vnmoQgaW5kZXggcmVxdWlyZWRcbiAgICovXG4gIGluZGV4OiBSZWFjdC5SZWFjdFRleHRcbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tlxuICAgKi9cbiAgb25DbGljaz86IChlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWRcbn1cblxuLyoqXG4gKiDooYzliqjoj5zljZUgLSDoj5zljZXpoblcbiAqL1xuY29uc3QgSXRlbTogUmVhY3QuRkM8SUl0ZW1Qcm9wcz4gPSAoe1xuICBjbGFzc05hbWUsXG4gIGRpc2FibGVkLFxuICBpbmRleCxcbiAgb25DbGljayxcbiAgLi4ub3RoZXJQcm9wc1xufTogSUl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB7IG9uSXRlbUNsaWNrIH0gPSB1c2VDb250ZXh0KE1lbnVDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0taXRlbWAsIHtcbiAgICBbYCR7cHJlZml4fS1pdGVtX2Rpc2FibGVkYF06IGRpc2FibGVkLFxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICBvbkNsaWNrKClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG9uSXRlbUNsaWNrKSB7XG4gICAgICAgICAgICBvbkl0ZW1DbGljayhpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgLz5cbiAgKVxufVxuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm56aB55SoXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiDni6znq4vnmoQgaW5kZXggcmVxdWlyZWRcbiAgICovXG4gIGluZGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOeCueWHu+S6i+S7tlxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgb25DbGljazogbm9vcCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbVxuIl19