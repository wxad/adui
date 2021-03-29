"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Context = require("./Context");

var _Item = _interopRequireDefault(require("./Item"));

var _Tip = _interopRequireDefault(require("./Tip"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-channels-form";

var Form = function Form(_ref) {
  var children = _ref.children,
      className = _ref.className,
      itemStyle = _ref.itemStyle,
      labelAlign = _ref.labelAlign,
      labelSize = _ref.labelSize,
      labelStyle = _ref.labelStyle,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "itemStyle", "labelAlign", "labelSize", "labelStyle"]);

  var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-base"));
  return React.createElement(_Context.FormContext.Provider, {
    value: {
      itemStyle: itemStyle,
      labelAlign: labelAlign,
      labelSize: labelSize,
      labelStyle: labelStyle
    }
  }, React.createElement("div", _extends({
    className: classSet
  }, otherProps), children));
};

Form.Item = _Item["default"];
Form.Tip = _Tip["default"];
Form.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  itemStyle: _propTypes["default"].object,
  labelAlign: _propTypes["default"].oneOf(["left", "center", "right"]),
  labelSize: _propTypes["default"].number,
  labelStyle: _propTypes["default"].object
};
Form.defaultProps = {
  children: null,
  className: undefined,
  itemStyle: {},
  labelAlign: null,
  labelSize: null,
  labelStyle: {}
};
var _default = Form;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZm9ybS9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJGb3JtIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJpdGVtU3R5bGUiLCJsYWJlbEFsaWduIiwibGFiZWxTaXplIiwibGFiZWxTdHlsZSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsIkl0ZW0iLCJUaXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwib2JqZWN0Iiwib25lT2YiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxvQkFBZjs7QUFpQ0EsSUFBTUMsSUFHTCxHQUFHLFNBSEVBLElBR0YsT0FRYztBQUFBLE1BUGhCQyxRQU9nQixRQVBoQkEsUUFPZ0I7QUFBQSxNQU5oQkMsU0FNZ0IsUUFOaEJBLFNBTWdCO0FBQUEsTUFMaEJDLFNBS2dCLFFBTGhCQSxTQUtnQjtBQUFBLE1BSmhCQyxVQUlnQixRQUpoQkEsVUFJZ0I7QUFBQSxNQUhoQkMsU0FHZ0IsUUFIaEJBLFNBR2dCO0FBQUEsTUFGaEJDLFVBRWdCLFFBRmhCQSxVQUVnQjtBQUFBLE1BRGJDLFVBQ2E7O0FBQ2hCLE1BQU1DLFFBQVEsR0FBRyw0QkFBV04sU0FBWCxZQUF5QkgsTUFBekIsV0FBakI7QUFFQSxTQUNFLG9CQUFDLG9CQUFELENBQWEsUUFBYjtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQUVJLE1BQUFBLFNBQVMsRUFBVEEsU0FBRjtBQUFhQyxNQUFBQSxVQUFVLEVBQVZBLFVBQWI7QUFBeUJDLE1BQUFBLFNBQVMsRUFBVEEsU0FBekI7QUFBb0NDLE1BQUFBLFVBQVUsRUFBVkE7QUFBcEM7QUFEVCxLQUdFO0FBQUssSUFBQSxTQUFTLEVBQUVFO0FBQWhCLEtBQThCRCxVQUE5QixHQUNHTixRQURILENBSEYsQ0FERjtBQVNELENBdkJEOztBQXlCQUQsSUFBSSxDQUFDUyxJQUFMLEdBQVlBLGdCQUFaO0FBRUFULElBQUksQ0FBQ1UsR0FBTCxHQUFXQSxlQUFYO0FBRUFWLElBQUksQ0FBQ1csU0FBTCxHQUFpQjtBQUlmVixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVQyxJQUpMO0FBUWZYLEVBQUFBLFNBQVMsRUFBRVUsc0JBQVVFLE1BUk47QUFZZlgsRUFBQUEsU0FBUyxFQUFFUyxzQkFBVUcsTUFaTjtBQWdCZlgsRUFBQUEsVUFBVSxFQUFFUSxzQkFBVUksS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE9BQW5CLENBQWhCLENBaEJHO0FBb0JmWCxFQUFBQSxTQUFTLEVBQUVPLHNCQUFVSyxNQXBCTjtBQXdCZlgsRUFBQUEsVUFBVSxFQUFFTSxzQkFBVUc7QUF4QlAsQ0FBakI7QUEyQkFmLElBQUksQ0FBQ2tCLFlBQUwsR0FBb0I7QUFDbEJqQixFQUFBQSxRQUFRLEVBQUUsSUFEUTtBQUVsQkMsRUFBQUEsU0FBUyxFQUFFaUIsU0FGTztBQUdsQmhCLEVBQUFBLFNBQVMsRUFBRSxFQUhPO0FBSWxCQyxFQUFBQSxVQUFVLEVBQUUsSUFKTTtBQUtsQkMsRUFBQUEsU0FBUyxFQUFFLElBTE87QUFNbEJDLEVBQUFBLFVBQVUsRUFBRTtBQU5NLENBQXBCO2VBU2VOLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgeyBGb3JtQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiXG5pbXBvcnQgVGlwIGZyb20gXCIuL1RpcFwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLWZvcm1cIlxuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBpdGVtIHN0eWxlXG4gICAqL1xuICBpdGVtU3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKblr7npvZDmlrnlvI9cbiAgICovXG4gIGxhYmVsQWxpZ24/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCIgfCBudWxsXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKbmlbDvvIxGb3JtIOS8muS7pSBlbSDljZXkvY3orr7nva4gbGFiZWwg5a695bqmXG4gICAqL1xuICBsYWJlbFNpemU/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiBsYWJlbCBzdHlsZVxuICAgKi9cbiAgbGFiZWxTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbn1cblxuLyoqXG4gKiDooajljZXvvIzljIXlkKvooajljZXpobnmoIfpopjjgIHovpPlhaXlhoXlrrnjgIHooYzliqjmjInpkq7nrYnmlbDmja7ph4fpm4bnmoTpm4blkIjlvaLmgIHjgILpgJrluLjmnI3liqHkuo7lpKfph4/pnIDopoHmlLbpm4bnlKjmiLfkv6Hmga/lnLrmma/jgIJcbiAqL1xuY29uc3QgRm9ybTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUZvcm1Qcm9wcz4gJiB7XG4gIEl0ZW06IHR5cGVvZiBJdGVtXG4gIFRpcDogdHlwZW9mIFRpcFxufSA9ICh7XG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGl0ZW1TdHlsZSxcbiAgbGFiZWxBbGlnbixcbiAgbGFiZWxTaXplLFxuICBsYWJlbFN0eWxlLFxuICAuLi5vdGhlclByb3BzXG59OiBJRm9ybVByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0tYmFzZWApXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGl0ZW1TdHlsZSwgbGFiZWxBbGlnbiwgbGFiZWxTaXplLCBsYWJlbFN0eWxlIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuRm9ybS5JdGVtID0gSXRlbVxuXG5Gb3JtLlRpcCA9IFRpcFxuXG5Gb3JtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBpdGVtIHN0eWxlXG4gICAqL1xuICBpdGVtU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBsYWJlbCDlrZfnrKblr7npvZDmlrnlvI9cbiAgICovXG4gIGxhYmVsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAvKipcbiAgICogbGFiZWwg5a2X56ym5pWw77yMRm9ybSDkvJrku6UgZW0g5Y2V5L2N6K6+572uIGxhYmVsIOWuveW6plxuICAgKi9cbiAgbGFiZWxTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGFiZWwgc3R5bGVcbiAgICovXG4gIGxhYmVsU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59XG5cbkZvcm0uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGl0ZW1TdHlsZToge30sXG4gIGxhYmVsQWxpZ246IG51bGwsXG4gIGxhYmVsU2l6ZTogbnVsbCxcbiAgbGFiZWxTdHlsZToge30sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1cbiJdfQ==