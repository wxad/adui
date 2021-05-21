function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";
import Dialog from "./Dialog";
import "./style";
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

  return React.createElement(Dialog, _extends({
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
    className: classNames("".concat(prefix, "-intentWrapper"), "".concat(prefix, "-").concat(intent), _defineProperty({}, "".concat(prefix, "-intentWrapper_center"), !contentTitle || !contentText))
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

export default confirm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZGlhbG9nL2NvbmZpcm0udHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjbGFzc05hbWVzIiwiRGlhbG9nIiwicHJlZml4IiwiQ29uZmlybSIsInByb3BzIiwiYWZ0ZXJDbG9zZSIsImNvbnRlbnQiLCJjb250ZW50VGl0bGUiLCJjb250ZW50VGV4dCIsImludGVudCIsIm9uQ2FuY2VsIiwib25DbG9zZSIsIm9uQ29uZmlybSIsIm90aGVyUHJvcHMiLCJjb25maXJtIiwiY29uZmlnIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidW5tb3VudFJlc3VsdCIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXIiLCJjdXJyZW50Q29uZmlnIiwiY2IiLCJ2aXNpYmxlIiwidXBkYXRlIiwibmV3Q29uZmlnIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsT0FBTyxLQUFLQyxRQUFaLE1BQTBCLFdBQTFCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLE1BQVAsTUFBcUMsVUFBckM7QUFDQSxPQUFPLFNBQVA7QUFFQSxJQUFNQyxNQUFNLEdBQUcsc0JBQWY7O0FBY0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUEwQjtBQUFBLE1BRXRDQyxVQUZzQyxHQVdwQ0QsS0FYb0MsQ0FFdENDLFVBRnNDO0FBQUEsTUFHdENDLE9BSHNDLEdBV3BDRixLQVhvQyxDQUd0Q0UsT0FIc0M7QUFBQSxNQUl0Q0MsWUFKc0MsR0FXcENILEtBWG9DLENBSXRDRyxZQUpzQztBQUFBLE1BS3RDQyxXQUxzQyxHQVdwQ0osS0FYb0MsQ0FLdENJLFdBTHNDO0FBQUEsTUFNdEND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LFFBQVEsQ0FBQzBCLE1BQVQsQ0FBZ0Isb0JBQUMsT0FBRCxFQUFhckIsS0FBYixDQUFoQixFQUF3Q1ksU0FBeEM7QUFDRDs7QUFFRCxNQUFJVSxhQUFrQixHQUFHLEVBQXpCOztBQUtBLFdBQVNmLE9BQVQsQ0FBaUJnQixFQUFqQixFQUFpQztBQUMvQkQsSUFBQUEsYUFBYSxtQ0FDUkEsYUFEUTtBQUVYckIsTUFBQUEsVUFBVSxFQUFWQSxVQUZXO0FBR1h1QixNQUFBQSxPQUFPLEVBQUU7QUFIRSxNQUFiO0FBS0FILElBQUFBLE1BQU0sQ0FBQ0MsYUFBRCxDQUFOOztBQUNBLFFBQUlDLEVBQUosRUFBUTtBQUNOQSxNQUFBQSxFQUFFO0FBQ0g7QUFDRjs7QUFFREQsRUFBQUEsYUFBYSxtQ0FDUlgsTUFEUTtBQUVYVixJQUFBQSxVQUFVLEVBQVZBLFVBRlc7QUFHWE0sSUFBQUEsT0FBTyxFQUFQQSxPQUhXO0FBSVhpQixJQUFBQSxPQUFPLEVBQUU7QUFKRSxJQUFiOztBQU9BLFdBQVNDLE1BQVQsQ0FBZ0JDLFNBQWhCLEVBQTBDO0FBQ3hDSixJQUFBQSxhQUFhLG1DQUNSQSxhQURRLEdBRVJJLFNBRlEsQ0FBYjtBQUlBTCxJQUFBQSxNQUFNLENBQUNDLGFBQUQsQ0FBTjtBQUNEOztBQUVERCxFQUFBQSxNQUFNLENBQUNDLGFBQUQsQ0FBTjtBQUVBLFNBQU87QUFDTEssSUFBQUEsT0FBTyxFQUFFcEIsT0FESjtBQUVMa0IsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRCxDQXpERDs7QUEyREEsZUFBZWYsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qKlxuICogY29uZmlybSDmmK/lsIYgRGlhbG9nIOWHveaVsOW8j+e8lueoi+eahOe7k+aenOOAglxuICogMS4gY29uZmlybSDmmK/kuLrkuoborqnkvb/nlKjogIXmlrnkvr/lnLDlh73mlbDlvI/osIPnlKjnu4Tku7bvvJvlm6DmraQgY29uZmlybSDmlrnms5XnmoQgdmlzaWJsZSDnirbmgIHmmK/kuI3kuqTnu5nlpJbpg6jlpITnkIbnmoTvvJtcbiAqIDIuIOavj+asoeiwg+eUqCBjb25maXJtIOmDveS8muWIm+W7uuS4gOS4qiBEaWFsb2fvvIzlnKggY2xvc2Ug5pe26YO96ZyA6KaB6L+b6KGMIHVubW91bnRDb21wb25lbnRBdE5vZGXjgIJcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IERpYWxvZywgeyBJRGlhbG9nUHJvcHMgfSBmcm9tIFwiLi9EaWFsb2dcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jaGFubmVscy1kaWFsb2dcIlxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlybVByb3BzIGV4dGVuZHMgSURpYWxvZ1Byb3BzIHtcbiAgY29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICBjb250ZW50VGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY29udGVudFRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgaW50ZW50PzogXCJkYW5nZXJcIiB8IFwiaW5mb1wiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIlxuICBvbkNsb3NlPzogKGZ1bmM/OiAoKCkgPT4gdm9pZCkgfCBudWxsKSA9PiB2b2lkXG59XG5cbi8qKlxuICogY29udGVudCwgY29udGVudFRpdGxlLCBjb250ZW50VGV4dCwgaW50ZW50IOmDveS4jeaYryBEaWFsb2cg55u05o6l5aSE55CG55qEIHByb3DvvJtcbiAqIOWFtuS4re+8jGNvbnRlbnQg5YW25a6e5bCx5pivIGNoaWxkcmVu77yMXG4gKiBjb250ZW50VGl0bGXjgIFjb250ZW50VGV4dCDmmK/kuJPpl6jmj5Dkvpvnu5kgLmluZm8gLnN1Y2Nlc3MgLndhcm5pbmcgLmRhbmdlciDnmoQgcHJvcOOAglxuICovXG5jb25zdCBDb25maXJtID0gKHByb3BzOiBJQ29uZmlybVByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZnRlckNsb3NlLFxuICAgIGNvbnRlbnQsXG4gICAgY29udGVudFRpdGxlLFxuICAgIGNvbnRlbnRUZXh0LFxuICAgIGludGVudCxcbiAgICBvbkNhbmNlbCxcbiAgICBvbkNsb3NlLFxuICAgIG9uQ29uZmlybSxcbiAgICAuLi5vdGhlclByb3BzXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgYWZ0ZXJDbG9zZT17YWZ0ZXJDbG9zZX1cbiAgICAgIGRlc3Ryb3lBZnRlckNsb3NlXG4gICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICAgIG9uQ2xvc2Uob25DYW5jZWwpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgICBvbkNsb3NlKG9uQ29uZmlybSlcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHtpbnRlbnQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICBgJHtwcmVmaXh9LWludGVudFdyYXBwZXJgLFxuICAgICAgICAgICAgYCR7cHJlZml4fS0ke2ludGVudH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1pbnRlbnRXcmFwcGVyX2NlbnRlcmBdOiAhY29udGVudFRpdGxlIHx8ICFjb250ZW50VGV4dCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge2ludGVudCA9PT0gXCJkYW5nZXJcIiA/IChcbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgd2lkdGg9XCI0OFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQ4XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0OCA0OFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWludGVudEljb25gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRDMTIuOTU0MyA0IDQgMTIuOTU0MyA0IDI0Wk00MS42IDI0QzQxLjYgMzMuNzIwMiAzMy43MjAyIDQxLjYgMjQgNDEuNkMxNC4yNzk4IDQxLjYgNi40IDMzLjcyMDIgNi40IDI0QzYuNCAxNC4yNzk4IDE0LjI3OTggNi40IDI0IDYuNEMzMy43MjAyIDYuNCA0MS42IDE0LjI3OTggNDEuNiAyNFpNMjUuMzE4NCAxMi44NjIzTDI1LjE0MjYgMjYuOTgzNEgyMi44NTc0TDIyLjY4MTYgMTIuODYyM0gyNS4zMTg0Wk0yMi4zMzAxIDMyLjQ3NjZDMjIuMzMwMSAzMy40MTQxIDIzLjA2MjUgMzQuMTQ2NSAyNCAzNC4xNDY1QzI0Ljk1MjEgMzQuMTQ2NSAyNS42Njk5IDMzLjQxNDEgMjUuNjY5OSAzMi40NzY2QzI1LjY2OTkgMzEuNTI0NCAyNC45NTIxIDMwLjgwNjYgMjQgMzAuODA2NkMyMy4wNjI1IDMwLjgwNjYgMjIuMzMwMSAzMS41MjQ0IDIyLjMzMDEgMzIuNDc2NlpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjZmE1MTUxXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDhcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0OFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDggNDhcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnRlbnRJY29uYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk00IDI0QzQgMzUuMDQ1NyAxMi45NTQzIDQ0IDI0IDQ0QzM1LjA0NTcgNDQgNDQgMzUuMDQ1NyA0NCAyNEM0NCAxMi45NTQzIDM1LjA0NTcgNCAyNCA0QzEyLjk1NDMgNCA0IDEyLjk1NDMgNCAyNFpNNDEuNiAyNEM0MS42IDMzLjcyMDIgMzMuNzIwMiA0MS42IDI0IDQxLjZDMTQuMjc5OCA0MS42IDYuNCAzMy43MjAyIDYuNCAyNEM2LjQgMTQuMjc5OCAxNC4yNzk4IDYuNCAyNCA2LjRDMzMuNzIwMiA2LjQgNDEuNiAxNC4yNzk4IDQxLjYgMjRaTTI1LjIgMjBWMzRIMjIuOFYyMEgyNS4yWk0yNCAxOEMyNS4xMDQ2IDE4IDI2IDE3LjEwNDYgMjYgMTZDMjYgMTQuODk1NCAyNS4xMDQ2IDE0IDI0IDE0QzIyLjg5NTQgMTQgMjIgMTQuODk1NCAyMiAxNkMyMiAxNy4xMDQ2IDIyLjg5NTQgMTggMjQgMThaXCJcbiAgICAgICAgICAgICAgICBmaWxsPXtpbnRlbnQgPT09IFwiaW5mb1wiID8gXCIjMTBhZWZmXCIgOiBcIiMwMDBcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50Q29udGVudGB9PlxuICAgICAgICAgICAgeyEhY29udGVudFRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50VGl0bGVgfT57Y29udGVudFRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshIWNvbnRlbnRUZXh0ICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taW50ZW50VGV4dGB9Pntjb250ZW50VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgY29udGVudFxuICAgICAgKX1cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5jb25zdCBjb25maXJtID0gKGNvbmZpZzogSUNvbmZpcm1Qcm9wcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuXG4gIGZ1bmN0aW9uIGFmdGVyQ2xvc2UoKSB7XG4gICAgY29uc3QgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKVxuICAgIGlmICh1bm1vdW50UmVzdWx0ICYmIGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOi/memHjOaMgui9veWIsCBjb250YWluZXIg5a6e6ZmF5LiK5piv56m655qE77yM5Zug5Li6IERpYWxvZyDoh6rouqvkvJrljrvop6PlhrPmjILovb3vvJtcbiAgICog5Zug5q2k5q+P5LiA5qyhIHJlbmRlciDpg73kvJrmnInkuKTkuKogZGl2IGFwcGVuZCDliLAgZG9tIOS4re+8jOS4gOS4quS4uuepuu+8jOWNs+i/meS4qu+8jOWPpuS4gOS4quS4uiBEaWFsb2fjgIJcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlcihwcm9wczogSUNvbmZpcm1Qcm9wcykge1xuICAgIFJlYWN0RE9NLnJlbmRlcig8Q29uZmlybSB7Li4ucHJvcHN9IC8+LCBjb250YWluZXIpXG4gIH1cblxuICBsZXQgY3VycmVudENvbmZpZzogYW55ID0ge31cblxuICAvKipcbiAgICog5YWz6Zet5pe25LiA5a6a6KaB5omn6KGMIGFmdGVyQ2xvc2XvvIxEaWFsb2cg6Ieq6Lqr5Lya5Y67IGRlc3Ryb3nvvIzkvYbmmK/pgqPkuKrnqbrnmoQgZGl2IOmcgOimgeWcqOi/memHjCBkZXN0b3J544CCXG4gICAqL1xuICBmdW5jdGlvbiBvbkNsb3NlKGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgY3VycmVudENvbmZpZyA9IHtcbiAgICAgIC4uLmN1cnJlbnRDb25maWcsXG4gICAgICBhZnRlckNsb3NlLFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgfVxuICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKVxuICAgIGlmIChjYikge1xuICAgICAgY2IoKVxuICAgIH1cbiAgfVxuXG4gIGN1cnJlbnRDb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGFmdGVyQ2xvc2UsXG4gICAgb25DbG9zZSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKG5ld0NvbmZpZzogSUNvbmZpcm1Qcm9wcykge1xuICAgIGN1cnJlbnRDb25maWcgPSB7XG4gICAgICAuLi5jdXJyZW50Q29uZmlnLFxuICAgICAgLi4ubmV3Q29uZmlnLFxuICAgIH1cbiAgICByZW5kZXIoY3VycmVudENvbmZpZylcbiAgfVxuXG4gIHJlbmRlcihjdXJyZW50Q29uZmlnKVxuXG4gIHJldHVybiB7XG4gICAgZGVzdHJveTogb25DbG9zZSxcbiAgICB1cGRhdGUsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlybVxuIl19