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
import Icon from "../icon";
import "./style";
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
  }, React.createElement(Icon, {
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

export default confirm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2NvbmZpcm0udHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjbGFzc05hbWVzIiwiRGlhbG9nIiwiSWNvbiIsInByZWZpeCIsIklDT05fSU5URU5UUyIsImRhbmdlciIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsIkNvbmZpcm0iLCJwcm9wcyIsImFmdGVyQ2xvc2UiLCJjb250ZW50IiwiY29udGVudFRpdGxlIiwiY29udGVudFRleHQiLCJpbnRlbnQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJvdGhlclByb3BzIiwiY29uZmlybSIsImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInVubW91bnRSZXN1bHQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVuZGVyIiwiY3VycmVudENvbmZpZyIsImNiIiwidmlzaWJsZSIsInVwZGF0ZSIsIm5ld0NvbmZpZyIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU1BLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU8sS0FBS0MsUUFBWixNQUEwQixXQUExQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsWUFBdkI7QUFDQSxPQUFPQyxNQUFQLE1BQXFDLFVBQXJDO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixTQUFqQjtBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxhQUFmO0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxNQUFNLEVBQUUsY0FEVztBQUVuQkMsRUFBQUEsSUFBSSxFQUFFLGFBRmE7QUFHbkJDLEVBQUFBLE9BQU8sRUFBRSxhQUhVO0FBSW5CQyxFQUFBQSxPQUFPLEVBQUU7QUFKVSxDQUFyQjs7QUFvQkEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUEwQjtBQUFBLE1BRXRDQyxVQUZzQyxHQVdwQ0QsS0FYb0MsQ0FFdENDLFVBRnNDO0FBQUEsTUFHdENDLE9BSHNDLEdBV3BDRixLQVhvQyxDQUd0Q0UsT0FIc0M7QUFBQSxNQUl0Q0MsWUFKc0MsR0FXcENILEtBWG9DLENBSXRDRyxZQUpzQztBQUFBLE1BS3RDQyxXQUxzQyxHQVdwQ0osS0FYb0MsQ0FLdENJLFdBTHNDO0FBQUEsTUFNdENDLE1BTnNDLEdBV3BDTCxLQVhvQyxDQU10Q0ssTUFOc0M7QUFBQSxNQU90Q0MsU0FQc0MsR0FXcENOLEtBWG9DLENBT3RDTSxRQVBzQztBQUFBLE1BUXRDQyxPQVJzQyxHQVdwQ1AsS0FYb0MsQ0FRdENPLE9BUnNDO0FBQUEsTUFTdENDLFVBVHNDLEdBV3BDUixLQVhvQyxDQVN0Q1EsU0FUc0M7QUFBQSxNQVVuQ0MsVUFWbUMsNEJBV3BDVCxLQVhvQzs7QUFheEMsU0FDRSxvQkFBQyxNQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVDLFVBRGQ7QUFFRSxJQUFBLGlCQUFpQixNQUZuQjtBQUdFLElBQUEsUUFBUSxFQUFFLG9CQUFNO0FBQ2QsVUFBSU0sT0FBSixFQUFhO0FBQ1hBLFFBQUFBLE9BQU8sQ0FBQ0QsU0FBRCxDQUFQO0FBQ0Q7QUFDRixLQVBIO0FBUUUsSUFBQSxTQUFTLEVBQUUscUJBQU07QUFDZixVQUFJQyxPQUFKLEVBQWE7QUFDWEEsUUFBQUEsT0FBTyxDQUFDQyxVQUFELENBQVA7QUFDRDtBQUNGO0FBWkgsS0FhTUMsVUFiTixHQWVHSixNQUFNLEdBQ0w7QUFDRSxJQUFBLFNBQVMsRUFBRWYsVUFBVSxXQUNoQkcsTUFEZ0IsK0JBRWhCQSxNQUZnQixjQUVOWSxNQUZNLGlDQUliWixNQUphLDRCQUltQixDQUFDVSxZQUFELElBQWlCLENBQUNDLFdBSnJDO0FBRHZCLEtBU0Usb0JBQUMsSUFBRDtBQUNFLElBQUEsU0FBUyxZQUFLWCxNQUFMLGdCQURYO0FBRUUsSUFBQSxJQUFJLEVBQUUsRUFGUjtBQUdFLElBQUEsSUFBSSxFQUFFQyxZQUFZLENBQUNXLE1BQUQ7QUFIcEIsSUFURixFQWNFO0FBQUssSUFBQSxTQUFTLFlBQUtaLE1BQUw7QUFBZCxLQUNHLENBQUMsQ0FBQ1UsWUFBRixJQUNDO0FBQUssSUFBQSxTQUFTLFlBQUtWLE1BQUw7QUFBZCxLQUEwQ1UsWUFBMUMsQ0FGSixFQUlHLENBQUMsQ0FBQ0MsV0FBRixJQUNDO0FBQUssSUFBQSxTQUFTLFlBQUtYLE1BQUw7QUFBZCxLQUF5Q1csV0FBekMsQ0FMSixDQWRGLENBREssR0F5QkxGLE9BeENKLENBREY7QUE2Q0QsQ0ExREQ7O0FBNERBLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBMkI7QUFDekMsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUQsRUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJKLFNBQTFCOztBQUVBLFdBQVNYLFVBQVQsR0FBc0I7QUFDcEIsUUFBTWdCLGFBQWEsR0FBRzVCLFFBQVEsQ0FBQzZCLHNCQUFULENBQWdDTixTQUFoQyxDQUF0Qjs7QUFDQSxRQUFJSyxhQUFhLElBQUlMLFNBQVMsQ0FBQ08sVUFBL0IsRUFBMkM7QUFDekNQLE1BQUFBLFNBQVMsQ0FBQ08sVUFBVixDQUFxQkMsV0FBckIsQ0FBaUNSLFNBQWpDO0FBQ0Q7QUFDRjs7QUFNRCxXQUFTUyxNQUFULENBQWdCckIsS0FBaEIsRUFBc0M7QUFDcENYLElBQUFBLFFBQVEsQ0FBQ2dDLE1BQVQsQ0FBZ0Isb0JBQUMsT0FBRCxFQUFhckIsS0FBYixDQUFoQixFQUF3Q1ksU0FBeEM7QUFDRDs7QUFFRCxNQUFJVSxhQUFrQixHQUFHLEVBQXpCOztBQUtBLFdBQVNmLE9BQVQsQ0FBaUJnQixFQUFqQixFQUFpQztBQUMvQkQsSUFBQUEsYUFBYSxtQ0FDUkEsYUFEUTtBQUVYckIsTUFBQUEsVUFBVSxFQUFWQSxVQUZXO0FBR1h1QixNQUFBQSxPQUFPLEVBQUU7QUFIRSxNQUFiO0FBS0FILElBQUFBLE1BQU0sQ0FBQ0MsYUFBRCxDQUFOOztBQUNBLFFBQUlDLEVBQUosRUFBUTtBQUNOQSxNQUFBQSxFQUFFO0FBQ0g7QUFDRjs7QUFFREQsRUFBQUEsYUFBYSxtQ0FDUlgsTUFEUTtBQUVYVixJQUFBQSxVQUFVLEVBQVZBLFVBRlc7QUFHWE0sSUFBQUEsT0FBTyxFQUFQQSxPQUhXO0FBSVhpQixJQUFBQSxPQUFPLEVBQUU7QUFKRSxJQUFiOztBQU9BLFdBQVNDLE1BQVQsQ0FBZ0JDLFNBQWhCLEVBQTBDO0FBQ3hDSixJQUFBQSxhQUFhLG1DQUNSQSxhQURRLEdBRVJJLFNBRlEsQ0FBYjtBQUlBTCxJQUFBQSxNQUFNLENBQUNDLGFBQUQsQ0FBTjtBQUNEOztBQUVERCxFQUFBQSxNQUFNLENBQUNDLGFBQUQsQ0FBTjtBQUVBLFNBQU87QUFDTEssSUFBQUEsT0FBTyxFQUFFcEIsT0FESjtBQUVMa0IsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRCxDQXpERDs7QUEyREEsZUFBZWYsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qKlxuICogY29uZmlybSDmmK/lsIYgRGlhbG9nIOWHveaVsOW8j+e8lueoi+eahOe7k+aenOOAglxuICogMS4gY29uZmlybSDmmK/kuLrkuoborqnkvb/nlKjogIXmlrnkvr/lnLDlh73mlbDlvI/osIPnlKjnu4Tku7bvvJvlm6DmraQgY29uZmlybSDmlrnms5XnmoQgdmlzaWJsZSDnirbmgIHmmK/kuI3kuqTnu5nlpJbpg6jlpITnkIbnmoTvvJtcbiAqIDIuIOavj+asoeiwg+eUqCBjb25maXJtIOmDveS8muWIm+W7uuS4gOS4qiBEaWFsb2fvvIzlnKggY2xvc2Ug5pe26YO96ZyA6KaB6L+b6KGMIHVubW91bnRDb21wb25lbnRBdE5vZGXjgIJcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IERpYWxvZywgeyBJRGlhbG9nUHJvcHMgfSBmcm9tIFwiLi9EaWFsb2dcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1kaWFsb2dcIlxuXG5jb25zdCBJQ09OX0lOVEVOVFMgPSB7XG4gIGRhbmdlcjogXCJhbGVydC1jaXJjbGVcIiBhcyBcImFsZXJ0LWNpcmNsZVwiLFxuICBpbmZvOiBcImluZm8tY2lyY2xlXCIgYXMgXCJpbmZvLWNpcmNsZVwiLFxuICBzdWNjZXNzOiBcInRpY2stY2lyY2xlXCIgYXMgXCJ0aWNrLWNpcmNsZVwiLFxuICB3YXJuaW5nOiBcIndhcm5pbmdcIiBhcyBcIndhcm5pbmdcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlybVByb3BzIGV4dGVuZHMgSURpYWxvZ1Byb3BzIHtcbiAgY29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICBjb250ZW50VGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgY29udGVudFRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgaW50ZW50PzogXCJkYW5nZXJcIiB8IFwiaW5mb1wiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIlxuICBvbkNsb3NlPzogKGZ1bmM/OiAoKCkgPT4gdm9pZCkgfCBudWxsKSA9PiB2b2lkXG59XG5cbi8qKlxuICogY29udGVudCwgY29udGVudFRpdGxlLCBjb250ZW50VGV4dCwgaW50ZW50IOmDveS4jeaYryBEaWFsb2cg55u05o6l5aSE55CG55qEIHByb3DvvJtcbiAqIOWFtuS4re+8jGNvbnRlbnQg5YW25a6e5bCx5pivIGNoaWxkcmVu77yMXG4gKiBjb250ZW50VGl0bGXjgIFjb250ZW50VGV4dCDmmK/kuJPpl6jmj5Dkvpvnu5kgLmluZm8gLnN1Y2Nlc3MgLndhcm5pbmcgLmRhbmdlciDnmoQgcHJvcOOAglxuICovXG5jb25zdCBDb25maXJtID0gKHByb3BzOiBJQ29uZmlybVByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZnRlckNsb3NlLFxuICAgIGNvbnRlbnQsXG4gICAgY29udGVudFRpdGxlLFxuICAgIGNvbnRlbnRUZXh0LFxuICAgIGludGVudCxcbiAgICBvbkNhbmNlbCxcbiAgICBvbkNsb3NlLFxuICAgIG9uQ29uZmlybSxcbiAgICAuLi5vdGhlclByb3BzXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgYWZ0ZXJDbG9zZT17YWZ0ZXJDbG9zZX1cbiAgICAgIGRlc3Ryb3lBZnRlckNsb3NlXG4gICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICAgIG9uQ2xvc2Uob25DYW5jZWwpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgICBvbkNsb3NlKG9uQ29uZmlybSlcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIHtpbnRlbnQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICBgJHtwcmVmaXh9LWludGVudFdyYXBwZXJgLFxuICAgICAgICAgICAgYCR7cHJlZml4fS0ke2ludGVudH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1pbnRlbnRXcmFwcGVyX2NlbnRlcmBdOiAhY29udGVudFRpdGxlIHx8ICFjb250ZW50VGV4dCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnRlbnRJY29uYH1cbiAgICAgICAgICAgIHNpemU9ezQ4fVxuICAgICAgICAgICAgaWNvbj17SUNPTl9JTlRFTlRTW2ludGVudF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnRlbnRDb250ZW50YH0+XG4gICAgICAgICAgICB7ISFjb250ZW50VGl0bGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnRlbnRUaXRsZWB9Pntjb250ZW50VGl0bGV9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyEhY29udGVudFRleHQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pbnRlbnRUZXh0YH0+e2NvbnRlbnRUZXh0fTwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBjb250ZW50XG4gICAgICApfVxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbmNvbnN0IGNvbmZpcm0gPSAoY29uZmlnOiBJQ29uZmlybVByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbiAgZnVuY3Rpb24gYWZ0ZXJDbG9zZSgpIHtcbiAgICBjb25zdCB1bm1vdW50UmVzdWx0ID0gUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShjb250YWluZXIpXG4gICAgaWYgKHVubW91bnRSZXN1bHQgJiYgY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6L+Z6YeM5oyC6L295YiwIGNvbnRhaW5lciDlrp7pmYXkuIrmmK/nqbrnmoTvvIzlm6DkuLogRGlhbG9nIOiHqui6q+S8muWOu+ino+WGs+aMgui9ve+8m1xuICAgKiDlm6DmraTmr4/kuIDmrKEgcmVuZGVyIOmDveS8muacieS4pOS4qiBkaXYgYXBwZW5kIOWIsCBkb20g5Lit77yM5LiA5Liq5Li656m677yM5Y2z6L+Z5Liq77yM5Y+m5LiA5Liq5Li6IERpYWxvZ+OAglxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyKHByb3BzOiBJQ29uZmlybVByb3BzKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKDxDb25maXJtIHsuLi5wcm9wc30gLz4sIGNvbnRhaW5lcilcbiAgfVxuXG4gIGxldCBjdXJyZW50Q29uZmlnOiBhbnkgPSB7fVxuXG4gIC8qKlxuICAgKiDlhbPpl63ml7bkuIDlrpropoHmiafooYwgYWZ0ZXJDbG9zZe+8jERpYWxvZyDoh6rouqvkvJrljrsgZGVzdHJvee+8jOS9huaYr+mCo+S4quepuueahCBkaXYg6ZyA6KaB5Zyo6L+Z6YeMIGRlc3RvcnnjgIJcbiAgICovXG4gIGZ1bmN0aW9uIG9uQ2xvc2UoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBjdXJyZW50Q29uZmlnID0ge1xuICAgICAgLi4uY3VycmVudENvbmZpZyxcbiAgICAgIGFmdGVyQ2xvc2UsXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB9XG4gICAgcmVuZGVyKGN1cnJlbnRDb25maWcpXG4gICAgaWYgKGNiKSB7XG4gICAgICBjYigpXG4gICAgfVxuICB9XG5cbiAgY3VycmVudENvbmZpZyA9IHtcbiAgICAuLi5jb25maWcsXG4gICAgYWZ0ZXJDbG9zZSxcbiAgICBvbkNsb3NlLFxuICAgIHZpc2libGU6IHRydWUsXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUobmV3Q29uZmlnOiBJQ29uZmlybVByb3BzKSB7XG4gICAgY3VycmVudENvbmZpZyA9IHtcbiAgICAgIC4uLmN1cnJlbnRDb25maWcsXG4gICAgICAuLi5uZXdDb25maWcsXG4gICAgfVxuICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKVxuICB9XG5cbiAgcmVuZGVyKGN1cnJlbnRDb25maWcpXG5cbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiBvbkNsb3NlLFxuICAgIHVwZGF0ZSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maXJtXG4iXX0=