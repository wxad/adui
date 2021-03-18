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
  }, React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none",
    className: "".concat(prefix, "-intentIcon")
  }, React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24ZM41.6 24C41.6 33.7202 33.7202 41.6 24 41.6C14.2798 41.6 6.4 33.7202 6.4 24C6.4 14.2798 14.2798 6.4 24 6.4C33.7202 6.4 41.6 14.2798 41.6 24ZM25.2 20V34H22.8V20H25.2ZM24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z",
    fill: "black",
    "fill-Opacity": "0.9"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZGlhbG9nL2NvbmZpcm0udHN4Il0sIm5hbWVzIjpbInByZWZpeCIsIkNvbmZpcm0iLCJwcm9wcyIsImFmdGVyQ2xvc2UiLCJjb250ZW50IiwiY29udGVudFRpdGxlIiwiY29udGVudFRleHQiLCJpbnRlbnQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJvdGhlclByb3BzIiwiY29uZmlybSIsImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVubW91bnRSZXN1bHQiLCJSZWFjdERPTSIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXIiLCJjdXJyZW50Q29uZmlnIiwiY2IiLCJ2aXNpYmxlIiwidXBkYXRlIiwibmV3Q29uZmlnIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBT0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLHNCQUFmOztBQWNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBMEI7QUFBQSxNQUV0Q0MsVUFGc0MsR0FXcENELEtBWG9DLENBRXRDQyxVQUZzQztBQUFBLE1BR3RDQyxPQUhzQyxHQVdwQ0YsS0FYb0MsQ0FHdENFLE9BSHNDO0FBQUEsTUFJdENDLFlBSnNDLEdBV3BDSCxLQVhvQyxDQUl0Q0csWUFKc0M7QUFBQSxNQUt0Q0MsV0FMc0MsR0FXcENKLEtBWG9DLENBS3RDSSxXQUxzQztBQUFBLE1BTXRDQyxNQU5zQyxHQVdwQ0wsS0FYb0MsQ0FNdENLLE1BTnNDO0FBQUEsTUFPdENDLFNBUHNDLEdBV3BDTixLQVhvQyxDQU90Q00sUUFQc0M7QUFBQSxNQVF0Q0MsT0FSc0MsR0FXcENQLEtBWG9DLENBUXRDTyxPQVJzQztBQUFBLE1BU3RDQyxVQVRzQyxHQVdwQ1IsS0FYb0MsQ0FTdENRLFNBVHNDO0FBQUEsTUFVbkNDLFVBVm1DLDRCQVdwQ1QsS0FYb0M7O0FBYXhDLFNBQ0Usb0JBQUMsa0JBQUQ7QUFDRSxJQUFBLFVBQVUsRUFBRUMsVUFEZDtBQUVFLElBQUEsaUJBQWlCLE1BRm5CO0FBR0UsSUFBQSxRQUFRLEVBQUUsb0JBQU07QUFDZCxVQUFJTSxPQUFKLEVBQWE7QUFDWEEsUUFBQUEsT0FBTyxDQUFDRCxTQUFELENBQVA7QUFDRDtBQUNGLEtBUEg7QUFRRSxJQUFBLFNBQVMsRUFBRSxxQkFBTTtBQUNmLFVBQUlDLE9BQUosRUFBYTtBQUNYQSxRQUFBQSxPQUFPLENBQUNDLFVBQUQsQ0FBUDtBQUNEO0FBQ0Y7QUFaSCxLQWFNQyxVQWJOLEdBZUdKLE1BQU0sR0FDTDtBQUNFLElBQUEsU0FBUyxFQUFFLHNDQUNOUCxNQURNLCtCQUVOQSxNQUZNLGNBRUlPLE1BRkosaUNBSUhQLE1BSkcsNEJBSTZCLENBQUNLLFlBQUQsSUFBaUIsQ0FBQ0MsV0FKL0M7QUFEYixLQVNFO0FBQ0UsSUFBQSxLQUFLLEVBQUMsSUFEUjtBQUVFLElBQUEsTUFBTSxFQUFDLElBRlQ7QUFHRSxJQUFBLE9BQU8sRUFBQyxXQUhWO0FBSUUsSUFBQSxJQUFJLEVBQUMsTUFKUDtBQUtFLElBQUEsU0FBUyxZQUFLTixNQUFMO0FBTFgsS0FPRTtBQUNFLElBQUEsUUFBUSxFQUFDLFNBRFg7QUFFRSxJQUFBLFFBQVEsRUFBQyxTQUZYO0FBR0UsSUFBQSxDQUFDLEVBQUMsNllBSEo7QUFJRSxJQUFBLElBQUksRUFBQyxPQUpQO0FBS0Usb0JBQWE7QUFMZixJQVBGLENBVEYsRUF3QkU7QUFBSyxJQUFBLFNBQVMsWUFBS0EsTUFBTDtBQUFkLEtBQ0csQ0FBQyxDQUFDSyxZQUFGLElBQ0M7QUFBSyxJQUFBLFNBQVMsWUFBS0wsTUFBTDtBQUFkLEtBQTBDSyxZQUExQyxDQUZKLEVBSUcsQ0FBQyxDQUFDQyxXQUFGLElBQ0M7QUFBSyxJQUFBLFNBQVMsWUFBS04sTUFBTDtBQUFkLEtBQXlDTSxXQUF6QyxDQUxKLENBeEJGLENBREssR0FtQ0xGLE9BbERKLENBREY7QUF1REQsQ0FwRUQ7O0FBc0VBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBMkI7QUFDekMsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUQsRUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJKLFNBQTFCOztBQUVBLFdBQVNYLFVBQVQsR0FBc0I7QUFDcEIsUUFBTWdCLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQ1AsU0FBaEMsQ0FBdEI7O0FBQ0EsUUFBSUssYUFBYSxJQUFJTCxTQUFTLENBQUNRLFVBQS9CLEVBQTJDO0FBQ3pDUixNQUFBQSxTQUFTLENBQUNRLFVBQVYsQ0FBcUJDLFdBQXJCLENBQWlDVCxTQUFqQztBQUNEO0FBQ0Y7O0FBTUQsV0FBU1UsTUFBVCxDQUFnQnRCLEtBQWhCLEVBQXNDO0FBQ3BDa0IsSUFBQUEsUUFBUSxDQUFDSSxNQUFULENBQWdCLG9CQUFDLE9BQUQsRUFBYXRCLEtBQWIsQ0FBaEIsRUFBd0NZLFNBQXhDO0FBQ0Q7O0FBRUQsTUFBSVcsYUFBa0IsR0FBRyxFQUF6Qjs7QUFLQSxXQUFTaEIsT0FBVCxDQUFpQmlCLEVBQWpCLEVBQWlDO0FBQy9CRCxJQUFBQSxhQUFhLG1DQUNSQSxhQURRO0FBRVh0QixNQUFBQSxVQUFVLEVBQVZBLFVBRlc7QUFHWHdCLE1BQUFBLE9BQU8sRUFBRTtBQUhFLE1BQWI7QUFLQUgsSUFBQUEsTUFBTSxDQUFDQyxhQUFELENBQU47O0FBQ0EsUUFBSUMsRUFBSixFQUFRO0FBQ05BLE1BQUFBLEVBQUU7QUFDSDtBQUNGOztBQUVERCxFQUFBQSxhQUFhLG1DQUNSWixNQURRO0FBRVhWLElBQUFBLFVBQVUsRUFBVkEsVUFGVztBQUdYTSxJQUFBQSxPQUFPLEVBQVBBLE9BSFc7QUFJWGtCLElBQUFBLE9BQU8sRUFBRTtBQUpFLElBQWI7O0FBT0EsV0FBU0MsTUFBVCxDQUFnQkMsU0FBaEIsRUFBMEM7QUFDeENKLElBQUFBLGFBQWEsbUNBQ1JBLGFBRFEsR0FFUkksU0FGUSxDQUFiO0FBSUFMLElBQUFBLE1BQU0sQ0FBQ0MsYUFBRCxDQUFOO0FBQ0Q7O0FBRURELEVBQUFBLE1BQU0sQ0FBQ0MsYUFBRCxDQUFOO0FBRUEsU0FBTztBQUNMSyxJQUFBQSxPQUFPLEVBQUVyQixPQURKO0FBRUxtQixJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlELENBekREOztlQTJEZWhCLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKipcbiAqIGNvbmZpcm0g5piv5bCGIERpYWxvZyDlh73mlbDlvI/nvJbnqIvnmoTnu5PmnpzjgIJcbiAqIDEuIGNvbmZpcm0g5piv5Li65LqG6K6p5L2/55So6ICF5pa55L6/5Zyw5Ye95pWw5byP6LCD55So57uE5Lu277yb5Zug5q2kIGNvbmZpcm0g5pa55rOV55qEIHZpc2libGUg54q25oCB5piv5LiN5Lqk57uZ5aSW6YOo5aSE55CG55qE77ybXG4gKiAyLiDmr4/mrKHosIPnlKggY29uZmlybSDpg73kvJrliJvlu7rkuIDkuKogRGlhbG9n77yM5ZyoIGNsb3NlIOaXtumDvemcgOimgei/m+ihjCB1bm1vdW50Q29tcG9uZW50QXROb2Rl44CCXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBEaWFsb2csIHsgSURpYWxvZ1Byb3BzIH0gZnJvbSBcIi4vRGlhbG9nXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtZGlhbG9nXCJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpcm1Qcm9wcyBleHRlbmRzIElEaWFsb2dQcm9wcyB7XG4gIGNvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY29udGVudFRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG4gIGNvbnRlbnRUZXh0PzogUmVhY3QuUmVhY3ROb2RlXG4gIGludGVudD86IFwiZGFuZ2VyXCIgfCBcImluZm9cIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCJcbiAgb25DbG9zZT86IChmdW5jPzogKCgpID0+IHZvaWQpIHwgbnVsbCkgPT4gdm9pZFxufVxuXG4vKipcbiAqIGNvbnRlbnQsIGNvbnRlbnRUaXRsZSwgY29udGVudFRleHQsIGludGVudCDpg73kuI3mmK8gRGlhbG9nIOebtOaOpeWkhOeQhueahCBwcm9w77ybXG4gKiDlhbbkuK3vvIxjb250ZW50IOWFtuWunuWwseaYryBjaGlsZHJlbu+8jFxuICogY29udGVudFRpdGxl44CBY29udGVudFRleHQg5piv5LiT6Zeo5o+Q5L6b57uZIC5pbmZvIC5zdWNjZXNzIC53YXJuaW5nIC5kYW5nZXIg55qEIHByb3DjgIJcbiAqL1xuY29uc3QgQ29uZmlybSA9IChwcm9wczogSUNvbmZpcm1Qcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYWZ0ZXJDbG9zZSxcbiAgICBjb250ZW50LFxuICAgIGNvbnRlbnRUaXRsZSxcbiAgICBjb250ZW50VGV4dCxcbiAgICBpbnRlbnQsXG4gICAgb25DYW5jZWwsXG4gICAgb25DbG9zZSxcbiAgICBvbkNvbmZpcm0sXG4gICAgLi4ub3RoZXJQcm9wc1xuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2dcbiAgICAgIGFmdGVyQ2xvc2U9e2FmdGVyQ2xvc2V9XG4gICAgICBkZXN0cm95QWZ0ZXJDbG9zZVxuICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgICBvbkNsb3NlKG9uQ2FuY2VsKVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25Db25maXJtPXsoKSA9PiB7XG4gICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgb25DbG9zZShvbkNvbmZpcm0pXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICB7aW50ZW50ID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgYCR7cHJlZml4fS1pbnRlbnRXcmFwcGVyYCxcbiAgICAgICAgICAgIGAke3ByZWZpeH0tJHtpbnRlbnR9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0taW50ZW50V3JhcHBlcl9jZW50ZXJgXTogIWNvbnRlbnRUaXRsZSB8fCAhY29udGVudFRleHQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiNDhcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNDhcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0OCA0OFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50SWNvbmB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk00IDI0QzQgMzUuMDQ1NyAxMi45NTQzIDQ0IDI0IDQ0QzM1LjA0NTcgNDQgNDQgMzUuMDQ1NyA0NCAyNEM0NCAxMi45NTQzIDM1LjA0NTcgNCAyNCA0QzEyLjk1NDMgNCA0IDEyLjk1NDMgNCAyNFpNNDEuNiAyNEM0MS42IDMzLjcyMDIgMzMuNzIwMiA0MS42IDI0IDQxLjZDMTQuMjc5OCA0MS42IDYuNCAzMy43MjAyIDYuNCAyNEM2LjQgMTQuMjc5OCAxNC4yNzk4IDYuNCAyNCA2LjRDMzMuNzIwMiA2LjQgNDEuNiAxNC4yNzk4IDQxLjYgMjRaTTI1LjIgMjBWMzRIMjIuOFYyMEgyNS4yWk0yNCAxOEMyNS4xMDQ2IDE4IDI2IDE3LjEwNDYgMjYgMTZDMjYgMTQuODk1NCAyNS4xMDQ2IDE0IDI0IDE0QzIyLjg5NTQgMTQgMjIgMTQuODk1NCAyMiAxNkMyMiAxNy4xMDQ2IDIyLjg5NTQgMTggMjQgMThaXCJcbiAgICAgICAgICAgICAgZmlsbD1cImJsYWNrXCJcbiAgICAgICAgICAgICAgZmlsbC1PcGFjaXR5PVwiMC45XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50Q29udGVudGB9PlxuICAgICAgICAgICAgeyEhY29udGVudFRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50VGl0bGVgfT57Y29udGVudFRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshIWNvbnRlbnRUZXh0ICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50VGV4dGB9Pntjb250ZW50VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgY29udGVudFxuICAgICAgKX1cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5jb25zdCBjb25maXJtID0gKGNvbmZpZzogSUNvbmZpcm1Qcm9wcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG4gIGZ1bmN0aW9uIGFmdGVyQ2xvc2UoKSB7XG4gICAgY29uc3QgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKVxuICAgIGlmICh1bm1vdW50UmVzdWx0ICYmIGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOi/memHjOaMgui9veWIsCBjb250YWluZXIg5a6e6ZmF5LiK5piv56m655qE77yM5Zug5Li6IERpYWxvZyDoh6rouqvkvJrljrvop6PlhrPmjILovb3vvJtcbiAgICog5Zug5q2k5q+P5LiA5qyhIHJlbmRlciDpg73kvJrmnInkuKTkuKogZGl2IGFwcGVuZCDliLAgZG9tIOS4re+8jOS4gOS4quS4uuepuu+8jOWNs+i/meS4qu+8jOWPpuS4gOS4quS4uiBEaWFsb2fjgIJcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlcihwcm9wczogSUNvbmZpcm1Qcm9wcykge1xuICAgIFJlYWN0RE9NLnJlbmRlcig8Q29uZmlybSB7Li4ucHJvcHN9IC8+LCBjb250YWluZXIpXG4gIH1cblxuICBsZXQgY3VycmVudENvbmZpZzogYW55ID0ge31cblxuICAvKipcbiAgICog5YWz6Zet5pe25LiA5a6a6KaB5omn6KGMIGFmdGVyQ2xvc2XvvIxEaWFsb2cg6Ieq6Lqr5Lya5Y67IGRlc3Ryb3nvvIzkvYbmmK/pgqPkuKrnqbrnmoQgZGl2IOmcgOimgeWcqOi/memHjCBkZXN0b3J544CCXG4gICAqL1xuICBmdW5jdGlvbiBvbkNsb3NlKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgY3VycmVudENvbmZpZyA9IHtcbiAgICAgIC4uLmN1cnJlbnRDb25maWcsXG4gICAgICBhZnRlckNsb3NlLFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgfVxuICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKVxuICAgIGlmIChjYikge1xuICAgICAgY2IoKVxuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRDb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGFmdGVyQ2xvc2UsXG4gICAgb25DbG9zZSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKG5ld0NvbmZpZzogSUNvbmZpcm1Qcm9wcykge1xuICAgIGN1cnJlbnRDb25maWcgPSB7XG4gICAgICAuLi5jdXJyZW50Q29uZmlnLFxuICAgICAgLi4ubmV3Q29uZmlnLFxuICAgIH1cbiAgICByZW5kZXIoY3VycmVudENvbmZpZylcbiAgfVxuXG4gIHJlbmRlcihjdXJyZW50Q29uZmlnKVxuXG4gIHJldHVybiB7XG4gICAgZGVzdHJveTogb25DbG9zZSxcbiAgICB1cGRhdGUsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlybVxuIl19