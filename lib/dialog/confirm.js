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

var prefix = "adui-dialog";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2NvbmZpcm0udHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIklDT05fSU5URU5UUyIsImRhbmdlciIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsIkNvbmZpcm0iLCJwcm9wcyIsImFmdGVyQ2xvc2UiLCJjb250ZW50IiwiY29udGVudFRpdGxlIiwiY29udGVudFRleHQiLCJpbnRlbnQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJvdGhlclByb3BzIiwiY29uZmlybSIsImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVubW91bnRSZXN1bHQiLCJSZWFjdERPTSIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXIiLCJjdXJyZW50Q29uZmlnIiwiY2IiLCJ2aXNpYmxlIiwidXBkYXRlIiwibmV3Q29uZmlnIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGFBQWY7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLEVBQUFBLE1BQU0sRUFBRSxjQURXO0FBRW5CQyxFQUFBQSxJQUFJLEVBQUUsYUFGYTtBQUduQkMsRUFBQUEsT0FBTyxFQUFFLGFBSFU7QUFJbkJDLEVBQUFBLE9BQU8sRUFBRTtBQUpVLENBQXJCOztBQW9CQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQTBCO0FBQUEsTUFFdENDLFVBRnNDLEdBV3BDRCxLQVhvQyxDQUV0Q0MsVUFGc0M7QUFBQSxNQUd0Q0MsT0FIc0MsR0FXcENGLEtBWG9DLENBR3RDRSxPQUhzQztBQUFBLE1BSXRDQyxZQUpzQyxHQVdwQ0gsS0FYb0MsQ0FJ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QVBBLE9BSFc7QUFJWGtCLElBQUFBLE9BQU8sRUFBRTtBQUpFLElBQWI7O0FBT0EsV0FBU0MsTUFBVCxDQUFnQkMsU0FBaEIsRUFBMEM7QUFDeENKLElBQUFBLGFBQWEsbUNBQ1JBLGFBRFEsR0FFUkksU0FGUSxDQUFiO0FBSUFMLElBQUFBLE1BQU0sQ0FBQ0MsYUFBRCxDQUFOO0FBQ0Q7O0FBRURELEVBQUFBLE1BQU0sQ0FBQ0MsYUFBRCxDQUFOO0FBRUEsU0FBTztBQUNMSyxJQUFBQSxPQUFPLEVBQUVyQixPQURKO0FBRUxtQixJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlELENBekREOztlQTJEZWhCLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4vKipcbiAqIGNvbmZpcm0g5piv5bCGIERpYWxvZyDlh73mlbDlvI/nvJbnqIvnmoTnu5PmnpzjgIJcbiAqIDEuIGNvbmZpcm0g5piv5Li65LqG6K6p5L2/55So6ICF5pa55L6/5Zyw5Ye95pWw5byP6LCD55So57uE5Lu277yb5Zug5q2kIGNvbmZpcm0g5pa55rOV55qEIHZpc2libGUg54q25oCB5piv5LiN5Lqk57uZ5aSW6YOo5aSE55CG55qE77ybXG4gKiAyLiDmr4/mrKHosIPnlKggY29uZmlybSDpg73kvJrliJvlu7rkuIDkuKogRGlhbG9n77yM5ZyoIGNsb3NlIOaXtumDvemcgOimgei/m+ihjCB1bm1vdW50Q29tcG9uZW50QXROb2Rl44CCXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBEaWFsb2csIHsgSURpYWxvZ1Byb3BzIH0gZnJvbSBcIi4vRGlhbG9nXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGlhbG9nXCJcblxuY29uc3QgSUNPTl9JTlRFTlRTID0ge1xuICBkYW5nZXI6IFwiYWxlcnQtY2lyY2xlXCIgYXMgXCJhbGVydC1jaXJjbGVcIixcbiAgaW5mbzogXCJpbmZvLWNpcmNsZVwiIGFzIFwiaW5mby1jaXJjbGVcIixcbiAgc3VjY2VzczogXCJ0aWNrLWNpcmNsZVwiIGFzIFwidGljay1jaXJjbGVcIixcbiAgd2FybmluZzogXCJ3YXJuaW5nXCIgYXMgXCJ3YXJuaW5nXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1Qcm9wcyBleHRlbmRzIElEaWFsb2dQcm9wcyB7XG4gIGNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY29udGVudFRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG4gIGNvbnRlbnRUZXh0PzogUmVhY3QuUmVhY3ROb2RlXG4gIGludGVudD86IFwiZGFuZ2VyXCIgfCBcImluZm9cIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCJcbiAgb25DbG9zZT86IChmdW5jPzogKCgpID0+IHZvaWQpIHwgbnVsbCkgPT4gdm9pZFxufVxuXG4vKipcbiAqIGNvbnRlbnQsIGNvbnRlbnRUaXRsZSwgY29udGVudFRleHQsIGludGVudCDpg73kuI3mmK8gRGlhbG9nIOebtOaOpeWkhOeQhueahCBwcm9w77ybXG4gKiDlhbbkuK3vvIxjb250ZW50IOWFtuWunuWwseaYryBjaGlsZHJlbu+8jFxuICogY29udGVudFRpdGxl44CBY29udGVudFRleHQg5piv5LiT6Zeo5o+Q5L6b57uZIC5pbmZvIC5zdWNjZXNzIC53YXJuaW5nIC5kYW5nZXIg55qEIHByb3DjgIJcbiAqL1xuY29uc3QgQ29uZmlybSA9IChwcm9wczogSUNvbmZpcm1Qcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYWZ0ZXJDbG9zZSxcbiAgICBjb250ZW50LFxuICAgIGNvbnRlbnRUaXRsZSxcbiAgICBjb250ZW50VGV4dCxcbiAgICBpbnRlbnQsXG4gICAgb25DYW5jZWwsXG4gICAgb25DbG9zZSxcbiAgICBvbkNvbmZpcm0sXG4gICAgLi4ub3RoZXJQcm9wc1xuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIGFmdGVyQ2xvc2U9e2FmdGVyQ2xvc2V9XG4gICAgICBkZXN0cm95QWZ0ZXJDbG9zZVxuICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgICBvbkNsb3NlKG9uQ2FuY2VsKVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25Db25maXJtPXsoKSA9PiB7XG4gICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgb25DbG9zZShvbkNvbmZpcm0pXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICB7aW50ZW50ID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgYCR7cHJlZml4fS1pbnRlbnRXcmFwcGVyYCxcbiAgICAgICAgICAgIGAke3ByZWZpeH0tJHtpbnRlbnR9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0taW50ZW50V3JhcHBlcl9jZW50ZXJgXTogIWNvbnRlbnRUaXRsZSB8fCAhY29udGVudFRleHQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50SWNvbmB9XG4gICAgICAgICAgICBzaXplPXs0OH1cbiAgICAgICAgICAgIGljb249e0lDT05fSU5URU5UU1tpbnRlbnRdfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50Q29udGVudGB9PlxuICAgICAgICAgICAgeyEhY29udGVudFRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50VGl0bGVgfT57Y29udGVudFRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshIWNvbnRlbnRUZXh0ICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50VGV4dGB9Pntjb250ZW50VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgY29udGVudFxuICAgICAgKX1cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5jb25zdCBjb25maXJtID0gKGNvbmZpZzogSUNvbmZpcm1Qcm9wcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG4gIGZ1bmN0aW9uIGFmdGVyQ2xvc2UoKSB7XG4gICAgY29uc3QgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKVxuICAgIGlmICh1bm1vdW50UmVzdWx0ICYmIGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOi/memHjOaMgui9veWIsCBjb250YWluZXIg5a6e6ZmF5LiK5piv56m655qE77yM5Zug5Li6IERpYWxvZyDoh6rouqvkvJrljrvop6PlhrPmjILovb3vvJtcbiAgICog5Zug5q2k5q+P5LiA5qyhIHJlbmRlciDpg73kvJrmnInkuKTkuKogZGl2IGFwcGVuZCDliLAgZG9tIOS4re+8jOS4gOS4quS4uuepuu+8jOWNs+i/meS4qu+8jOWPpuS4gOS4quS4uiBEaWFsb2fjgIJcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlcihwcm9wczogSUNvbmZpcm1Qcm9wcykge1xuICAgIFJlYWN0RE9NLnJlbmRlcig8Q29uZmlybSB7Li4ucHJvcHN9IC8+LCBjb250YWluZXIpXG4gIH1cblxuICBsZXQgY3VycmVudENvbmZpZzogYW55ID0ge31cblxuICAvKipcbiAgICog5YWz6Zet5pe25LiA5a6a6KaB5omn6KGMIGFmdGVyQ2xvc2XvvIxEaWFsb2cg6Ieq6Lqr5Lya5Y67IGRlc3Ryb3nvvIzkvYbmmK/pgqPkuKrnqbrnmoQgZGl2IOmcgOimgeWcqOi/memHjCBkZXN0b3J544CCXG4gICAqL1xuICBmdW5jdGlvbiBvbkNsb3NlKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgY3VycmVudENvbmZpZyA9IHtcbiAgICAgIC4uLmN1cnJlbnRDb25maWcsXG4gICAgICBhZnRlckNsb3NlLFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgfVxuICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKVxuICAgIGlmIChjYikge1xuICAgICAgY2IoKVxuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRDb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGFmdGVyQ2xvc2UsXG4gICAgb25DbG9zZSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKG5ld0NvbmZpZzogSUNvbmZpcm1Qcm9wcykge1xuICAgIGN1cnJlbnRDb25maWcgPSB7XG4gICAgICAuLi5jdXJyZW50Q29uZmlnLFxuICAgICAgLi4ubmV3Q29uZmlnLFxuICAgIH1cbiAgICByZW5kZXIoY3VycmVudENvbmZpZylcbiAgfVxuXG4gIHJlbmRlcihjdXJyZW50Q29uZmlnKVxuXG4gIHJldHVybiB7XG4gICAgZGVzdHJveTogb25DbG9zZSxcbiAgICB1cGRhdGUsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlybVxuIl19