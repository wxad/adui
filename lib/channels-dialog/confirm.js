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
  }, intent === "danger" ? React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    className: "".concat(prefix, "-intentIcon")
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24ZM41.6 24C41.6 33.7202 33.7202 41.6 24 41.6C14.2798 41.6 6.4 33.7202 6.4 24C6.4 14.2798 14.2798 6.4 24 6.4C33.7202 6.4 41.6 14.2798 41.6 24ZM25.3184 12.8623L25.1426 26.9834H22.8574L22.6816 12.8623H25.3184ZM22.3301 32.4766C22.3301 33.4141 23.0625 34.1465 24 34.1465C24.9521 34.1465 25.6699 33.4141 25.6699 32.4766C25.6699 31.5244 24.9521 30.8066 24 30.8066C23.0625 30.8066 22.3301 31.5244 22.3301 32.4766Z",
    fill: "#fa5151"
  })) : React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    className: "".concat(prefix, "-intentIcon")
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24ZM41.6 24C41.6 33.7202 33.7202 41.6 24 41.6C14.2798 41.6 6.4 33.7202 6.4 24C6.4 14.2798 14.2798 6.4 24 6.4C33.7202 6.4 41.6 14.2798 41.6 24ZM25.2 20V34H22.8V20H25.2ZM24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z",
    fill: intent === "info" ? "#10aeff" : "#000"
  })), React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZGlhbG9nL2NvbmZpcm0udHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNvbmZpcm0iLCJwcm9wcyIsImFmdGVyQ2xvc2UiLCJjb250ZW50IiwiY29udGVudFRpdGxlIiwiY29udGVudFRleHQiLCJpbnRlbnQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJvdGhlclByb3BzIiwiY29uZmlybSIsImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVubW91bnRSZXN1bHQiLCJSZWFjdERPTSIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXIiLCJjdXJyZW50Q29uZmlnIiwiY2IiLCJ2aXNpYmxlIiwidXBkYXRlIiwibmV3Q29uZmlnIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLHNCQUFmOztBQWNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBMEI7QUFBQSxNQUV0Q0MsVUFGc0MsR0FXcENELEtBWG9DLENBRXRDQyxVQUZzQztBQUFBLE1BR3RDQyxPQUhzQyxHQVdwQ0YsS0FYb0MsQ0FHdENFLE9BSHNDO0FBQUEsTUFJdENDLFlBSnNDLEdBV3BDSCxLQVhvQyxDQUl0Q0csWUFKc0M7QUFBQSxNQUt0Q0MsV0FMc0MsR0FXcENKLEtBWG9DLENBS3RDSSxXQUxzQztBQUFBLE1BTXRDQyxNQU5zQyxHQVdwQ0wsS0FYb0MsQ0FNdENLLE1BTnNDO0FBQUEsTUFPdENDLFNBUHNDLEdBV3BDTixLQVhvQyxDQU90Q00sUUFQc0M7QUFBQSxNQVF0Q0MsT0FSc0MsR0FXcENQLEtBWG9DLENBUXRDTyxPQVJzQztB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QUFpQztBQUMvQkQsSUFBQUEsYUFBYSxtQ0FDUkEsYUFEUTtBQUVYdEIsTUFBQUEsVUFBVSxFQUFWQSxVQUZXO0FBR1h3QixNQUFBQSxPQUFPLEVBQUU7QUFIRSxNQUFiO0FBS0FILElBQUFBLE1BQU0sQ0FBQ0MsYUFBRCxDQUFOOztBQUNBLFFBQUlDLEVBQUosRUFBUTtBQUNOQSxNQUFBQSxFQUFFO0FBQ0g7QUFDRjs7QUFFREQsRUFBQUEsYUFBYSxtQ0FDUlosTUFEUTtBQUVYVixJQUFBQSxVQUFVLEVBQVZBLFVBRlc7QUFHWE0sSUFBQUEsT0FBTyxFQUFQQSxPQUhXO0FBSVhrQixJQUFBQSxPQUFPLEVBQUU7QUFKRSxJQUFiOztBQU9BLFdBQVNDLE1BQVQsQ0FBZ0JDLFNBQWhCLEVBQTBDO0FBQ3hDSixJQUFBQSxhQUFhLG1DQUNSQSxhQURRLEdBRVJJLFNBRlEsQ0FBYjtBQUlBTCxJQUFBQSxNQUFNLENBQUNDLGFBQUQsQ0FBTjtBQUNEOztBQUVERCxFQUFBQSxNQUFNLENBQUNDLGFBQUQsQ0FBTjtBQUVBLFNBQU87QUFDTEssSUFBQUEsT0FBTyxFQUFFckIsT0FESjtBQUVMbUIsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRCxDQXpERDs7ZUEyRGVoQixPIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyoqXG4gKiBjb25maXJtIOaYr+WwhiBEaWFsb2cg5Ye95pWw5byP57yW56iL55qE57uT5p6c44CCXG4gKiAxLiBjb25maXJtIOaYr+S4uuS6huiuqeS9v+eUqOiAheaWueS+v+WcsOWHveaVsOW8j+iwg+eUqOe7hOS7tu+8m+WboOatpCBjb25maXJtIOaWueazleeahCB2aXNpYmxlIOeKtuaAgeaYr+S4jeS6pOe7meWklumDqOWkhOeQhueahO+8m1xuICogMi4g5q+P5qyh6LCD55SoIGNvbmZpcm0g6YO95Lya5Yib5bu65LiA5LiqIERpYWxvZ++8jOWcqCBjbG9zZSDml7bpg73pnIDopoHov5vooYwgdW5tb3VudENvbXBvbmVudEF0Tm9kZeOAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgRGlhbG9nLCB7IElEaWFsb2dQcm9wcyB9IGZyb20gXCIuL0RpYWxvZ1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLWNoYW5uZWxzLWRpYWxvZ1wiXG5leHBvcnQgaW50ZXJmYWNlIElDb25maXJtUHJvcHMgZXh0ZW5kcyBJRGlhbG9nUHJvcHMge1xuICBjb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIGNvbnRlbnRUaXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxuICBjb250ZW50VGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICBpbnRlbnQ/OiBcImRhbmdlclwiIHwgXCJpbmZvXCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiXG4gIG9uQ2xvc2U/OiAoZnVuYz86ICgoKSA9PiB2b2lkKSB8IG51bGwpID0+IHZvaWRcbn1cblxuLyoqXG4gKiBjb250ZW50LCBjb250ZW50VGl0bGUsIGNvbnRlbnRUZXh0LCBpbnRlbnQg6YO95LiN5pivIERpYWxvZyDnm7TmjqXlpITnkIbnmoQgcHJvcO+8m1xuICog5YW25Lit77yMY29udGVudCDlhbblrp7lsLHmmK8gY2hpbGRyZW7vvIxcbiAqIGNvbnRlbnRUaXRsZeOAgWNvbnRlbnRUZXh0IOaYr+S4k+mXqOaPkOS+m+e7mSAuaW5mbyAuc3VjY2VzcyAud2FybmluZyAuZGFuZ2VyIOeahCBwcm9w44CCXG4gKi9cbmNvbnN0IENvbmZpcm0gPSAocHJvcHM6IElDb25maXJtUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGFmdGVyQ2xvc2UsXG4gICAgY29udGVudCxcbiAgICBjb250ZW50VGl0bGUsXG4gICAgY29udGVudFRleHQsXG4gICAgaW50ZW50LFxuICAgIG9uQ2FuY2VsLFxuICAgIG9uQ2xvc2UsXG4gICAgb25Db25maXJtLFxuICAgIC4uLm90aGVyUHJvcHNcbiAgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICBhZnRlckNsb3NlPXthZnRlckNsb3NlfVxuICAgICAgZGVzdHJveUFmdGVyQ2xvc2VcbiAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgb25DbG9zZShvbkNhbmNlbClcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICAgIG9uQ2xvc2Uob25Db25maXJtKVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgPlxuICAgICAge2ludGVudCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGAke3ByZWZpeH0taW50ZW50V3JhcHBlcmAsXG4gICAgICAgICAgICBgJHtwcmVmaXh9LSR7aW50ZW50fWAsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWludGVudFdyYXBwZXJfY2VudGVyYF06ICFjb250ZW50VGl0bGUgfHwgIWNvbnRlbnRUZXh0LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICB7aW50ZW50ID09PSBcImRhbmdlclwiID8gKFxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB3aWR0aD1cIjQ4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDhcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50SWNvbmB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNCAyNEM0IDM1LjA0NTcgMTIuOTU0MyA0NCAyNCA0NEMzNS4wNDU3IDQ0IDQ0IDM1LjA0NTcgNDQgMjRDNDQgMTIuOTU0MyAzNS4wNDU3IDQgMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRaTTQxLjYgMjRDNDEuNiAzMy43MjAyIDMzLjcyMDIgNDEuNiAyNCA0MS42QzE0LjI3OTggNDEuNiA2LjQgMzMuNzIwMiA2LjQgMjRDNi40IDE0LjI3OTggMTQuMjc5OCA2LjQgMjQgNi40QzMzLjcyMDIgNi40IDQxLjYgMTQuMjc5OCA0MS42IDI0Wk0yNS4zMTg0IDEyLjg2MjNMMjUuMTQyNiAyNi45ODM0SDIyLjg1NzRMMjIuNjgxNiAxMi44NjIzSDI1LjMxODRaTTIyLjMzMDEgMzIuNDc2NkMyMi4zMzAxIDMzLjQxNDEgMjMuMDYyNSAzNC4xNDY1IDI0IDM0LjE0NjVDMjQuOTUyMSAzNC4xNDY1IDI1LjY2OTkgMzMuNDE0MSAyNS42Njk5IDMyLjQ3NjZDMjUuNjY5OSAzMS41MjQ0IDI0Ljk1MjEgMzAuODA2NiAyNCAzMC44MDY2QzIzLjA2MjUgMzAuODA2NiAyMi4zMzAxIDMxLjUyNDQgMjIuMzMwMSAzMi40NzY2WlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNmYTUxNTFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgd2lkdGg9XCI0OFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0OCA0OFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWludGVudEljb25gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRDMTIuOTU0MyA0IDQgMTIuOTU0MyA0IDI0Wk00MS42IDI0QzQxLjYgMzMuNzIwMiAzMy43MjAyIDQxLjYgMjQgNDEuNkMxNC4yNzk4IDQxLjYgNi40IDMzLjcyMDIgNi40IDI0QzYuNCAxNC4yNzk4IDE0LjI3OTggNi40IDI0IDYuNEMzMy43MjAyIDYuNCA0MS42IDE0LjI3OTggNDEuNiAyNFpNMjUuMiAyMFYzNEgyMi44VjIwSDI1LjJaTTI0IDE4QzI1LjEwNDYgMTggMjYgMTcuMTA0NiAyNiAxNkMyNiAxNC44OTU0IDI1LjEwNDYgMTQgMjQgMTRDMjIuODk1NCAxNCAyMiAxNC44OTU0IDIyIDE2QzIyIDE3LjEwNDYgMjIuODk1NCAxOCAyNCAxOFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9e2ludGVudCA9PT0gXCJpbmZvXCIgPyBcIiMxMGFlZmZcIiA6IFwiIzAwMFwifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnRlbnRDb250ZW50YH0+XG4gICAgICAgICAgICB7ISFjb250ZW50VGl0bGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnRlbnRUaXRsZWB9Pntjb250ZW50VGl0bGV9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyEhY29udGVudFRleHQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnRlbnRUZXh0YH0+e2NvbnRlbnRUZXh0fTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBjb250ZW50XG4gICAgICApfVxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmNvbnN0IGNvbmZpcm0gPSAoY29uZmlnOiBJQ29uZmlybVByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbiAgZnVuY3Rpb24gYWZ0ZXJDbG9zZSgpIHtcbiAgICBjb25zdCB1bm1vdW50UmVzdWx0ID0gUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShjb250YWluZXIpXG4gICAgaWYgKHVubW91bnRSZXN1bHQgJiYgY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6L+Z6YeM5oyC6L295YiwIGNvbnRhaW5lciDlrp7pmYXkuIrmmK/nqbrnmoTvvIzlm6DkuLogRGlhbG9nIOiHqui6q+S8muWOu+ino+WGs+aMgui9ve+8m1xuICAgKiDlm6DmraTmr4/kuIDmrKEgcmVuZGVyIOmDveS8muacieS4pOS4qiBkaXYgYXBwZW5kIOWIsCBkb20g5Lit77yM5LiA5Liq5Li656m677yM5Y2z6L+Z5Liq77yM5Y+m5LiA5Liq5Li6IERpYWxvZ+OAglxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyKHByb3BzOiBJQ29uZmlybVByb3BzKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKDxDb25maXJtIHsuLi5wcm9wc30gLz4sIGNvbnRhaW5lcilcbiAgfVxuXG4gIGxldCBjdXJyZW50Q29uZmlnOiBhbnkgPSB7fVxuXG4gIC8qKlxuICAgKiDlhbPpl63ml7bkuIDlrpropoHmiafooYwgYWZ0ZXJDbG9zZe+8jERpYWxvZyDoh6rouqvkvJrljrsgZGVzdHJvee+8jOS9huaYr+mCo+S4quepuueahCBkaXYg6ZyA6KaB5Zyo6L+Z6YeMIGRlc3RvcnnjgIJcbiAgICovXG4gIGZ1bmN0aW9uIG9uQ2xvc2UoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBjdXJyZW50Q29uZmlnID0ge1xuICAgICAgLi4uY3VycmVudENvbmZpZyxcbiAgICAgIGFmdGVyQ2xvc2UsXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB9XG4gICAgcmVuZGVyKGN1cnJlbnRDb25maWcpXG4gICAgaWYgKGNiKSB7XG4gICAgICBjYigpXG4gICAgfVxuICB9XG5cbiAgY3VycmVudENvbmZpZyA9IHtcbiAgICAuLi5jb25maWcsXG4gICAgYWZ0ZXJDbG9zZSxcbiAgICBvbkNsb3NlLFxuICAgIHZpc2libGU6IHRydWUsXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUobmV3Q29uZmlnOiBJQ29uZmlybVByb3BzKSB7XG4gICAgY3VycmVudENvbmZpZyA9IHtcbiAgICAgIC4uLmN1cnJlbnRDb25maWcsXG4gICAgICAuLi5uZXdDb25maWcsXG4gICAgfVxuICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKVxuICB9XG5cbiAgcmVuZGVyKGN1cnJlbnRDb25maWcpXG5cbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiBvbkNsb3NlLFxuICAgIHVwZGF0ZSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maXJtXG4iXX0=