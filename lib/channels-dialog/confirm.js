"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _icon = _interopRequireDefault(require("../icon"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-channels-dialog";
var ICON_INTENTS = {
  danger: "alert-circle",
  info: "info-circle",
  success: "tick-circle",
  warning: "warning"
};

var Confirm = function Confirm(props) {
  var afterClose = props.afterClose,
      content = props.content,
      contentTitle = props.contentTitle,
      contentText = props.contentText,
      intent = props.intent,
      _onCancel = props.onCancel,
      onClose = props.onClose,
      _onConfirm = props.onConfirm,
      otherProps = _objectWithoutProperties(props, ["afterClose", "content", "contentTitle", "contentText", "intent", "onCancel", "onClose", "onConfirm"]);

  return React.createElement(_Dialog["default"], _extends({
    afterClose: afterClose,
    destroyAfterClose: true,
    onCancel: function onCancel() {
      if (onClose) {
        onClose(_onCancel);
      }
    },
    onConfirm: function onConfirm() {
      if (onClose) {
        onClose(_onConfirm);
      }
    }
  }, otherProps), intent ? React.createElement("div", {
    className: (0, _classnames["default"])("".concat(prefix, "-intentWrapper"), "".concat(prefix, "-").concat(intent), _defineProperty({}, "".concat(prefix, "-intentWrapper_center"), !contentTitle || !contentText))
  }, React.createElement(_icon["default"], {
    className: "".concat(prefix, "-intentIcon"),
    size: 48,
    icon: ICON_INTENTS[intent]
  }), React.createElement("div", {
    className: "".concat(prefix, "-intentContent")
  }, !!contentTitle && React.createElement("div", {
    className: "".concat(prefix, "-intentTitle")
  }, contentTitle), !!contentText && React.createElement("div", {
    className: "".concat(prefix, "-intentText")
  }, contentText))) : content);
};

var confirm = function confirm(config) {
  var container = document.createElement("div");
  document.body.appendChild(container);

  function afterClose() {
    var unmountResult = ReactDOM.unmountComponentAtNode(container);

    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }

  function render(props) {
    ReactDOM.render(React.createElement(Confirm, props), container);
  }

  var currentConfig = {};

  function onClose(cb) {
    currentConfig = _objectSpread(_objectSpread({}, currentConfig), {}, {
      afterClose: afterClose,
      visible: false
    });
    render(currentConfig);

    if (cb) {
      cb();
    }
  }

  currentConfig = _objectSpread(_objectSpread({}, config), {}, {
    afterClose: afterClose,
    onClose: onClose,
    visible: true
  });

  function update(newConfig) {
    currentConfig = _objectSpread(_objectSpread({}, currentConfig), newConfig);
    render(currentConfig);
  }

  render(currentConfig);
  return {
    destroy: onClose,
    update: update
  };
};

var _default = confirm;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZGlhbG9nL2NvbmZpcm0udHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIklDT05fSU5URU5UUyIsImRhbmdlciIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsIkNvbmZpcm0iLCJwcm9wcyIsImFmdGVyQ2xvc2UiLCJjb250ZW50IiwiY29udGVudFRpdGxlIiwiY29udGVudFRleHQiLCJpbnRlbnQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJvdGhlclByb3BzIiwiY29uZmlybSIsImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVubW91bnRSZXN1bHQiLCJSZWFjdERPTSIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXIiLCJjdXJyZW50Q29uZmlnIiwiY2IiLCJ2aXNpYmxlIiwidXBkYXRlIiwibmV3Q29uZmlnIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLHNCQUFmO0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxNQUFNLEVBQUUsY0FEVztBQUVuQkMsRUFBQUEsSUFBSSxFQUFFLGFBRmE7QUFHbkJDLEVBQUFBLE9BQU8sRUFBRSxhQUhVO0FBSW5CQyxFQUFBQSxPQUFPLEVBQUU7QUFKVSxDQUFyQjs7QUFvQkEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUEwQjtBQUFBLE1BRXRDQyxVQUZzQyxHQVdwQ0QsS0FYb0MsQ0FFdENDLFVBRnNDO0FBQUEsTUFHdENDLE9BSHNDLEdBV3BDRixLQVhvQyxDQUd0Q0UsT0FIc0M7QUFBQSxNQUl0Q0MsWUFKc0MsR0FXcENI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QUEsT0FBTyxFQUFQQSxPQUhXO0FBSVhrQixJQUFBQSxPQUFPLEVBQUU7QUFKRSxJQUFiOztBQU9BLFdBQVNDLE1BQVQsQ0FBZ0JDLFNBQWhCLEVBQTBDO0FBQ3hDSixJQUFBQSxhQUFhLG1DQUNSQSxhQURRLEdBRVJJLFNBRlEsQ0FBYjtBQUlBTCxJQUFBQSxNQUFNLENBQUNDLGFBQUQsQ0FBTjtBQUNEOztBQUVERCxFQUFBQSxNQUFNLENBQUNDLGFBQUQsQ0FBTjtBQUVBLFNBQU87QUFDTEssSUFBQUEsT0FBTyxFQUFFckIsT0FESjtBQUVMbUIsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRCxDQXpERDs7ZUEyRGVoQixPIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLyoqXG4gKiBjb25maXJtIOaYr+WwhiBEaWFsb2cg5Ye95pWw5byP57yW56iL55qE57uT5p6c44CCXG4gKiAxLiBjb25maXJtIOaYr+S4uuS6huiuqeS9v+eUqOiAheaWueS+v+WcsOWHveaVsOW8j+iwg+eUqOe7hOS7tu+8m+WboOatpCBjb25maXJtIOaWueazleeahCB2aXNpYmxlIOeKtuaAgeaYr+S4jeS6pOe7meWklumDqOWkhOeQhueahO+8m1xuICogMi4g5q+P5qyh6LCD55SoIGNvbmZpcm0g6YO95Lya5Yib5bu65LiA5LiqIERpYWxvZ++8jOWcqCBjbG9zZSDml7bpg73pnIDopoHov5vooYwgdW5tb3VudENvbXBvbmVudEF0Tm9kZeOAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgRGlhbG9nLCB7IElEaWFsb2dQcm9wcyB9IGZyb20gXCIuL0RpYWxvZ1wiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLWRpYWxvZ1wiXG5cbmNvbnN0IElDT05fSU5URU5UUyA9IHtcbiAgZGFuZ2VyOiBcImFsZXJ0LWNpcmNsZVwiIGFzIFwiYWxlcnQtY2lyY2xlXCIsXG4gIGluZm86IFwiaW5mby1jaXJjbGVcIiBhcyBcImluZm8tY2lyY2xlXCIsXG4gIHN1Y2Nlc3M6IFwidGljay1jaXJjbGVcIiBhcyBcInRpY2stY2lyY2xlXCIsXG4gIHdhcm5pbmc6IFwid2FybmluZ1wiIGFzIFwid2FybmluZ1wiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25maXJtUHJvcHMgZXh0ZW5kcyBJRGlhbG9nUHJvcHMge1xuICBjb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIGNvbnRlbnRUaXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxuICBjb250ZW50VGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICBpbnRlbnQ/OiBcImRhbmdlclwiIHwgXCJpbmZvXCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiXG4gIG9uQ2xvc2U/OiAoZnVuYz86ICgoKSA9PiB2b2lkKSB8IG51bGwpID0+IHZvaWRcbn1cblxuLyoqXG4gKiBjb250ZW50LCBjb250ZW50VGl0bGUsIGNvbnRlbnRUZXh0LCBpbnRlbnQg6YO95LiN5pivIERpYWxvZyDnm7TmjqXlpITnkIbnmoQgcHJvcO+8m1xuICog5YW25Lit77yMY29udGVudCDlhbblrp7lsLHmmK8gY2hpbGRyZW7vvIxcbiAqIGNvbnRlbnRUaXRsZeOAgWNvbnRlbnRUZXh0IOaYr+S4k+mXqOaPkOS+m+e7mSAuaW5mbyAuc3VjY2VzcyAud2FybmluZyAuZGFuZ2VyIOeahCBwcm9w44CCXG4gKi9cbmNvbnN0IENvbmZpcm0gPSAocHJvcHM6IElDb25maXJtUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGFmdGVyQ2xvc2UsXG4gICAgY29udGVudCxcbiAgICBjb250ZW50VGl0bGUsXG4gICAgY29udGVudFRleHQsXG4gICAgaW50ZW50LFxuICAgIG9uQ2FuY2VsLFxuICAgIG9uQ2xvc2UsXG4gICAgb25Db25maXJtLFxuICAgIC4uLm90aGVyUHJvcHNcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICBhZnRlckNsb3NlPXthZnRlckNsb3NlfVxuICAgICAgZGVzdHJveUFmdGVyQ2xvc2VcbiAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgb25DbG9zZShvbkNhbmNlbClcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICAgIG9uQ2xvc2Uob25Db25maXJtKVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAge2ludGVudCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGAke3ByZWZpeH0taW50ZW50V3JhcHBlcmAsXG4gICAgICAgICAgICBgJHtwcmVmaXh9LSR7aW50ZW50fWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWludGVudFdyYXBwZXJfY2VudGVyYF06ICFjb250ZW50VGl0bGUgfHwgIWNvbnRlbnRUZXh0LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWludGVudEljb25gfVxuICAgICAgICAgICAgc2l6ZT17NDh9XG4gICAgICAgICAgICBpY29uPXtJQ09OX0lOVEVOVFNbaW50ZW50XX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWludGVudENvbnRlbnRgfT5cbiAgICAgICAgICAgIHshIWNvbnRlbnRUaXRsZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWludGVudFRpdGxlYH0+e2NvbnRlbnRUaXRsZX08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ISFjb250ZW50VGV4dCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWludGVudFRleHRgfT57Y29udGVudFRleHR9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICl9XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuY29uc3QgY29uZmlybSA9IChjb25maWc6IElDb25maXJtUHJvcHMpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxuICBmdW5jdGlvbiBhZnRlckNsb3NlKCkge1xuICAgIGNvbnN0IHVubW91bnRSZXN1bHQgPSBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGNvbnRhaW5lcilcbiAgICBpZiAodW5tb3VudFJlc3VsdCAmJiBjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDov5nph4zmjILovb3liLAgY29udGFpbmVyIOWunumZheS4iuaYr+epuueahO+8jOWboOS4uiBEaWFsb2cg6Ieq6Lqr5Lya5Y676Kej5Yaz5oyC6L2977ybXG4gICAqIOWboOatpOavj+S4gOasoSByZW5kZXIg6YO95Lya5pyJ5Lik5LiqIGRpdiBhcHBlbmQg5YiwIGRvbSDkuK3vvIzkuIDkuKrkuLrnqbrvvIzljbPov5nkuKrvvIzlj6bkuIDkuKrkuLogRGlhbG9n44CCXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXIocHJvcHM6IElDb25maXJtUHJvcHMpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoPENvbmZpcm0gey4uLnByb3BzfSAvPiwgY29udGFpbmVyKVxuICB9XG5cbiAgbGV0IGN1cnJlbnRDb25maWc6IGFueSA9IHt9XG5cbiAgLyoqXG4gICAqIOWFs+mXreaXtuS4gOWumuimgeaJp+ihjCBhZnRlckNsb3Nl77yMRGlhbG9nIOiHqui6q+S8muWOuyBkZXN0cm9577yM5L2G5piv6YKj5Liq56m655qEIGRpdiDpnIDopoHlnKjov5nph4wgZGVzdG9yeeOAglxuICAgKi9cbiAgZnVuY3Rpb24gb25DbG9zZShjYjogKCkgPT4gdm9pZCkge1xuICAgIGN1cnJlbnRDb25maWcgPSB7XG4gICAgICAuLi5jdXJyZW50Q29uZmlnLFxuICAgICAgYWZ0ZXJDbG9zZSxcbiAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgIH1cbiAgICByZW5kZXIoY3VycmVudENvbmZpZylcbiAgICBpZiAoY2IpIHtcbiAgICAgIGNiKClcbiAgICB9XG4gIH1cblxuICBjdXJyZW50Q29uZmlnID0ge1xuICAgIC4uLmNvbmZpZyxcbiAgICBhZnRlckNsb3NlLFxuICAgIG9uQ2xvc2UsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShuZXdDb25maWc6IElDb25maXJtUHJvcHMpIHtcbiAgICBjdXJyZW50Q29uZmlnID0ge1xuICAgICAgLi4uY3VycmVudENvbmZpZyxcbiAgICAgIC4uLm5ld0NvbmZpZyxcbiAgICB9XG4gICAgcmVuZGVyKGN1cnJlbnRDb25maWcpXG4gIH1cblxuICByZW5kZXIoY3VycmVudENvbmZpZylcblxuICByZXR1cm4ge1xuICAgIGRlc3Ryb3k6IG9uQ2xvc2UsXG4gICAgdXBkYXRlLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpcm1cbiJdfQ==