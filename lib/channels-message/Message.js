"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("../button"));

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

var prefix = "adui-channels-message";
var INTENTS = ["normal", "primary", "success", "warning", "danger"];
var Message = (0, _react.forwardRef)(function (_ref, ref) {
  var action = _ref.action,
      className = _ref.className,
      closable = _ref.closable,
      content = _ref.content,
      duration = _ref.duration,
      getContainer = _ref.getContainer,
      intent = _ref.intent,
      onClose = _ref.onClose,
      otherProps = _objectWithoutProperties(_ref, ["action", "className", "closable", "content", "duration", "getContainer", "intent", "onClose"]);

  var messageRef = (0, _react.useRef)(null);

  var icon = _react["default"].createElement("svg", {
    className: "".concat(prefix, "-icon"),
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.66663 10C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39759 1.66667 1.66663 5.39763 1.66663 10ZM13.6856 7.11667L9.01949 11.7828L6.71457 9.47785L5.83329 10.3591L8.31438 12.842C8.70481 13.2327 9.33806 13.2329 9.72871 12.8424L14.571 8.00211L13.6856 7.11667Z",
    fill: "#07C160",
    fillOpacity: "0.9"
  }));

  switch (intent) {
    case "normal":
      icon = _react["default"].createElement("svg", {
        className: "".concat(prefix, "-icon"),
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none"
      }, _react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 10C1.66663 5.39762 5.39759 1.66666 9.99996 1.66666C14.6023 1.66666 18.3333 5.39762 18.3333 10C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333ZM10.625 8.33333V14.1667H9.37496V8.33333H10.625ZM9.99996 7.5C10.4602 7.5 10.8333 7.1269 10.8333 6.66666C10.8333 6.20643 10.4602 5.83333 9.99996 5.83333C9.53972 5.83333 9.16663 6.20643 9.16663 6.66666C9.16663 7.1269 9.53972 7.5 9.99996 7.5Z",
        fill: "#10AEFF"
      }));
      break;

    case "warning":
      icon = _react["default"].createElement("svg", {
        className: "".concat(prefix, "-icon"),
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none"
      }, _react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.3005 16.0439C18.6855 16.7105 18.2044 17.5439 17.4346 17.5439L2.5653 17.5452C1.79551 17.5452 1.31431 16.712 1.69913 16.0453L9.13254 3.16683C9.51738 2.5001 10.4797 2.50002 10.8646 3.16667L18.3005 16.0439ZM9.37253 7.9541H10.6274L10.5298 12.6758H9.47019L9.37253 7.9541ZM9.28952 14.4043C9.28952 14.79 9.60202 15.0977 9.99753 15.0977C10.3979 15.0977 10.7104 14.79 10.7104 14.4043C10.7104 14.0185 10.3979 13.7158 9.99753 13.7158C9.60202 13.7158 9.28952 14.0185 9.28952 14.4043Z",
        fill: "#FA9D3B"
      }));
      break;

    case "danger":
      icon = _react["default"].createElement("svg", {
        className: "".concat(prefix, "-icon"),
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none"
      }, _react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.99996 18.3333C5.39759 18.3333 1.66663 14.6024 1.66663 10C1.66663 5.39763 5.39759 1.66667 9.99996 1.66667C14.6023 1.66667 18.3333 5.39763 18.3333 10C18.3333 14.6024 14.6023 18.3333 9.99996 18.3333ZM9.36389 5.11312H10.6342L10.5431 11.4437H9.45504L9.36389 5.11312ZM9.24996 13.5173C9.24996 13.9331 9.58036 14.2521 9.99622 14.2521C10.4235 14.2521 10.7482 13.9331 10.7482 13.5173C10.7482 13.1014 10.4235 12.7824 9.99622 12.7824C9.58036 12.7824 9.24996 13.1014 9.24996 13.5173Z",
        fill: "#FA5151"
      }));
      break;

    default:
      break;
  }

  var timer;

  var clearCloseTimer = function clearCloseTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  var close = function close() {
    if (messageRef && messageRef.current) {
      messageRef.current.style.opacity = "0";
      messageRef.current.style.visibility = "hidden";
      messageRef.current.style.filter = "blur(4px)";
    }

    clearCloseTimer();

    if (onClose) {
      onClose();
    }
  };

  var setCloseTimer = function setCloseTimer() {
    if (duration) {
      timer = setTimeout(function () {
        close();
      }, duration * 1000);
    }
  };

  (0, _react.useEffect)(function () {
    setCloseTimer();
    return clearCloseTimer;
  }, []);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      close: close,
      getDomNode: function getDomNode() {
        return messageRef.current;
      }
    };
  });
  var hasActions = action || closable;
  return _react["default"].createElement("div", _extends({
    className: (0, _classnames["default"])(className, "".concat(prefix, "-base"), "".concat(prefix, "-").concat(intent), _defineProperty({}, "".concat(prefix, "-hasActions"), hasActions)),
    onMouseEnter: clearCloseTimer,
    onMouseLeave: setCloseTimer,
    ref: messageRef,
    "data-duration": duration
  }, otherProps), icon, _react["default"].createElement("div", {
    className: "".concat(prefix, "-content")
  }, content), hasActions && _react["default"].createElement("div", {
    className: "".concat(prefix, "-actions")
  }, action && _react["default"].createElement("div", {
    className: "".concat(prefix, "-action")
  }, _react["default"].createElement(_button["default"], {
    theme: "light",
    onClick: function onClick() {
      var onClick = action.onClick;

      if (onClick) {
        onClick();
      }
    }
  }, action.text)), closable && _react["default"].createElement(_button["default"], {
    leftIcon: "cancel",
    theme: "light",
    onClick: close
  })));
});
Message.displayName = "Message";
Message.propTypes = {
  action: _propTypes["default"].any,
  className: _propTypes["default"].string,
  closable: _propTypes["default"].bool,
  content: _propTypes["default"].node,
  duration: _propTypes["default"].number,
  getContainer: _propTypes["default"].func,
  intent: _propTypes["default"].any,
  onClose: _propTypes["default"].func
};
Message.defaultProps = {
  action: null,
  className: undefined,
  closable: false,
  content: null,
  duration: 2,
  getContainer: undefined,
  intent: "normal",
  onClose: null
};

var newInstance = function newInstance(props) {
  var instances = Array.from(document.getElementsByClassName("".concat(prefix, "-wrapper")));
  instances = instances.filter(function (o) {
    return o.dataset.close !== "true";
  });

  if (instances && instances.length > 2) {
    var firstInstance = instances[0];
    var firstChild = firstInstance.children[0];

    if (firstChild.dataset.duration !== "0") {
      firstInstance.dataset.close = "true";
      firstChild.style.opacity = "0";
      firstChild.style.visibility = "hidden";
      firstChild.style.filter = "blur(4px)";
    }
  }

  var instance;

  var onClose = props.onClose,
      getContainer = props.getContainer,
      otherProps = _objectWithoutProperties(props, ["onClose", "getContainer"]);

  var container = document.createElement("div");
  container.className = "".concat(prefix, "-wrapper");

  if (getContainer) {
    getContainer().appendChild(container);
  } else {
    document.body.appendChild(container);
  }

  var updateStyles = function updateStyles() {
    setTimeout(function () {
      var messages = document.getElementsByClassName("".concat(prefix, "-wrapper"));
      Array.prototype.forEach.call(messages, function (message, index) {
        message.style.opacity = "1";
        message.style.transform = "\n          translate3d(var(--message-offset-x),\n          calc(".concat(56 * (messages.length - 1 - index), "px + var(--message-offset-y)), 0)");
      });
    }, 50);
  };

  updateStyles();

  var close = function close() {
    if (onClose) {
      onClose();
    }

    setTimeout(function () {
      var unmountResult = ReactDOM.unmountComponentAtNode(container);

      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
        updateStyles();
      }
    }, 300);
  };

  ReactDOM.render(_react["default"].createElement(Message, _extends({
    ref: function ref(message) {
      instance = message;
    },
    onClose: close
  }, otherProps)), container);
  return {
    destroy: function destroy() {
      if (instance) {
        instance.close();
      }
    }
  };
};

INTENTS.forEach(function (intent) {
  Message[intent] = function (config) {
    var cnfg = {
      intent: intent
    };

    if (typeof config === "string") {
      cnfg = {
        content: config,
        intent: intent
      };
    } else {
      cnfg = config;
    }

    return newInstance(_objectSpread(_objectSpread({}, cnfg), {}, {
      intent: intent
    }));
  };
});
var _default = Message;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtbWVzc2FnZS9NZXNzYWdlLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJTlRFTlRTIiwiTWVzc2FnZSIsInJlZiIsImFjdGlvbiIsImNsYXNzTmFtZSIsImNsb3NhYmxlIiwiY29udGVudCIsImR1cmF0aW9uIiwiZ2V0Q29udGFpbmVyIiwiaW50ZW50Iiwib25DbG9zZSIsIm90aGVyUHJvcHMiLCJtZXNzYWdlUmVmIiwiaWNvbiIsInRpbWVyIiwiY2xlYXJDbG9zZVRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJjdXJyZW50Iiwic3R5bGUiLCJvcGFjaXR5IiwidmlzaWJpbGl0eSIsImZpbHRlciIsInNldENsb3NlVGltZXIiLCJzZXRUaW1lb3V0IiwiZ2V0RG9tTm9kZSIsImhhc0FjdGlvbnMiLCJvbkNsaWNrIiwidGV4dCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Iiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJudW1iZXIiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwibmV3SW5zdGFuY2UiLCJwcm9wcyIsImluc3RhbmNlcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm8iLCJkYXRhc2V0IiwibGVuZ3RoIiwiZmlyc3RJbnN0YW5jZSIsImZpcnN0Q2hpbGQiLCJjaGlsZHJlbiIsImluc3RhbmNlIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYm9keSIsInVwZGF0ZVN0eWxlcyIsIm1lc3NhZ2VzIiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJtZXNzYWdlIiwiaW5kZXgiLCJ0cmFuc2Zvcm0iLCJ1bm1vdW50UmVzdWx0IiwiUmVhY3RET00iLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVuZGVyIiwi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Q1EsTUFBRCxDQUFQLEdBQWtCLFVBQUNnRSxNQUFELEVBQW9DO0FBQ3BELFFBQUlDLElBQUksR0FBRztBQUFFakUsTUFBQUEsTUFBTSxFQUFOQTtBQUFGLEtBQVg7O0FBQ0EsUUFBSSxPQUFPZ0UsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QkMsTUFBQUEsSUFBSSxHQUFHO0FBQUVwRSxRQUFBQSxPQUFPLEVBQUVtRSxNQUFYO0FBQW1CaEUsUUFBQUEsTUFBTSxFQUFOQTtBQUFuQixPQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xpRSxNQUFBQSxJQUFJLEdBQUdELE1BQVA7QUFDRDs7QUFDRCxXQUFPakMsV0FBVyxpQ0FDYmtDLElBRGE7QUFFaEJqRSxNQUFBQSxNQUFNLEVBQU5BO0FBRmdCLE9BQWxCO0FBSUQsR0FYRDtBQVlELENBZEg7ZUFpQmVSLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlRWZmZWN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtbWVzc2FnZVwiXG5jb25zdCBJTlRFTlRTID0gW1wibm9ybWFsXCIsIFwicHJpbWFyeVwiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJdXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6KGM5Yqo5oyJ6ZKu55qE6YWN572u77yM5aaC77yaYWN0aW9uOiB7IHRleHQ6IFwi6Kej6ZSBXCIsIG9uQ2xpY2s6ICgpID0+IHsgbWVzc2FnZS5kZXN0cm95KCkgfSB9XG4gICAqL1xuICBhY3Rpb24/OiB7IHRleHQ6IHN0cmluZzsgb25DbGljazogKCkgPT4gdm9pZCB9IHwgbnVsbFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWFs+mXrSBJY29u77yM5aaC5p6c6ZyA6KaB5Y+q5pSv5oyB5omL5Yqo5YWz6Zet77yM6L+Y6ZyA6KaB5Lyg5YWlIGR1cmF0aW9uOiAwXG4gICAqL1xuICBjbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWGheWuuVxuICAgKi9cbiAgY29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogXGLpl7TpmpTlpJrkuYXoh6rliqjlhbPpl63vvIzljZXkvY3kuLogc++8jOWmguaenOS8oOWFpSAw77yM5YiZ6KGo56S65LiN5Lya6Ieq5Yqo5raI5aSxXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlclxuICAvKipcbiAgICogXGJNZXNzYWdlIOaPkuWFpeWIsOWTquS4quWFg+e0oO+8jOm7mOiupCAoKSA9PiBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBnZXRDb250YWluZXI/OiAoKSA9PiBIVE1MRWxlbWVudFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFwibm9ybWFsXCIgfCBcInByaW1hcnlcIiB8IFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImRhbmdlclwiXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbG9zZT86ICgoKSA9PiB2b2lkKSB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZVxuICBleHRlbmRzIFJlYWN0LkZvcndhcmRSZWZFeG90aWNDb21wb25lbnQ8XG4gICAgSU1lc3NhZ2VQcm9wcyAmIFJlYWN0LlJlZkF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4gID4ge1xuICBub3JtYWw6IGFueVxuICBwcmltYXJ5OiBhbnlcbiAgc3VjY2VzczogYW55XG4gIHdhcm5pbmc6IGFueVxuICBkYW5nZXI6IGFueVxufVxuXG4vKipcbiAqIOWFqOWxgOaPkOmGkueUqOS6juWFqOWxgOaAp+WcsOWxleekuumcgOimgeWNs+aXtuaAp+WFs+azqOeahOS/oeaBr+OAglxuICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBNZXNzYWdlOiBJTWVzc2FnZSA9IGZvcndhcmRSZWYoXG4gIChcbiAgICB7XG4gICAgICBhY3Rpb24sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbG9zYWJsZSxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGdldENvbnRhaW5lcixcbiAgICAgIGludGVudCxcbiAgICAgIG9uQ2xvc2UsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSU1lc3NhZ2VQcm9wcyxcbiAgICByZWY6IGFueVxuICApID0+IHtcbiAgICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gICAgbGV0IGljb24gPSAoXG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH1cbiAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0xLjY2NjYzIDEwQzEuNjY2NjMgMTQuNjAyNCA1LjM5NzU5IDE4LjMzMzMgOS45OTk5NiAxOC4zMzMzQzE0LjYwMjMgMTguMzMzMyAxOC4zMzMzIDE0LjYwMjQgMTguMzMzMyAxMEMxOC4zMzMzIDUuMzk3NjMgMTQuNjAyMyAxLjY2NjY3IDkuOTk5OTYgMS42NjY2N0M1LjM5NzU5IDEuNjY2NjcgMS42NjY2MyA1LjM5NzYzIDEuNjY2NjMgMTBaTTEzLjY4NTYgNy4xMTY2N0w5LjAxOTQ5IDExLjc4MjhMNi43MTQ1NyA5LjQ3Nzg1TDUuODMzMjkgMTAuMzU5MUw4LjMxNDM4IDEyLjg0MkM4LjcwNDgxIDEzLjIzMjcgOS4zMzgwNiAxMy4yMzI5IDkuNzI4NzEgMTIuODQyNEwxNC41NzEgOC4wMDIxMUwxMy42ODU2IDcuMTE2NjdaXCJcbiAgICAgICAgICBmaWxsPVwiIzA3QzE2MFwiXG4gICAgICAgICAgZmlsbE9wYWNpdHk9XCIwLjlcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgc3dpdGNoIChpbnRlbnQpIHtcbiAgICAgIGNhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgaWNvbiA9IChcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9XG4gICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNOS45OTk5NiAxOC4zMzMzQzUuMzk3NTkgMTguMzMzMyAxLjY2NjYzIDE0LjYwMjQgMS42NjY2MyAxMEMxLjY2NjYzIDUuMzk3NjIgNS4zOTc1OSAxLjY2NjY2IDkuOTk5OTYgMS42NjY2NkMxNC42MDIzIDEuNjY2NjYgMTguMzMzMyA1LjM5NzYyIDE4LjMzMzMgMTBDMTguMzMzMyAxNC42MDI0IDE0LjYwMjMgMTguMzMzMyA5Ljk5OTk2IDE4LjMzMzNaTTEwLjYyNSA4LjMzMzMzVjE0LjE2NjdIOS4zNzQ5NlY4LjMzMzMzSDEwLjYyNVpNOS45OTk5NiA3LjVDMTAuNDYwMiA3LjUgMTAuODMzMyA3LjEyNjkgMTAuODMzMyA2LjY2NjY2QzEwLjgzMzMgNi4yMDY0MyAxMC40NjAyIDUuODMzMzMgOS45OTk5NiA1LjgzMzMzQzkuNTM5NzIgNS44MzMzMyA5LjE2NjYzIDYuMjA2NDMgOS4xNjY2MyA2LjY2NjY2QzkuMTY2NjMgNy4xMjY5IDkuNTM5NzIgNy41IDkuOTk5OTYgNy41WlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjMTBBRUZGXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJ3YXJuaW5nXCI6XG4gICAgICAgIGljb24gPSAoXG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfVxuICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTE4LjMwMDUgMTYuMDQzOUMxOC42ODU1IDE2LjcxMDUgMTguMjA0NCAxNy41NDM5IDE3LjQzNDYgMTcuNTQzOUwyLjU2NTMgMTcuNTQ1MkMxLjc5NTUxIDE3LjU0NTIgMS4zMTQzMSAxNi43MTIgMS42OTkxMyAxNi4wNDUzTDkuMTMyNTQgMy4xNjY4M0M5LjUxNzM4IDIuNTAwMSAxMC40Nzk3IDIuNTAwMDIgMTAuODY0NiAzLjE2NjY3TDE4LjMwMDUgMTYuMDQzOVpNOS4zNzI1MyA3Ljk1NDFIMTAuNjI3NEwxMC41Mjk4IDEyLjY3NThIOS40NzAxOUw5LjM3MjUzIDcuOTU0MVpNOS4yODk1MiAxNC40MDQzQzkuMjg5NTIgMTQuNzkgOS42MDIwMiAxNS4wOTc3IDkuOTk3NTMgMTUuMDk3N0MxMC4zOTc5IDE1LjA5NzcgMTAuNzEwNCAxNC43OSAxMC43MTA0IDE0LjQwNDNDMTAuNzEwNCAxNC4wMTg1IDEwLjM5NzkgMTMuNzE1OCA5Ljk5NzUzIDEzLjcxNThDOS42MDIwMiAxMy43MTU4IDkuMjg5NTIgMTQuMDE4NSA5LjI4OTUyIDE0LjQwNDNaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGQTlEM0JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImRhbmdlclwiOlxuICAgICAgICBpY29uID0gKFxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH1cbiAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk05Ljk5OTk2IDE4LjMzMzNDNS4zOTc1OSAxOC4zMzMzIDEuNjY2NjMgMTQuNjAyNCAxLjY2NjYzIDEwQzEuNjY2NjMgNS4zOTc2MyA1LjM5NzU5IDEuNjY2NjcgOS45OTk5NiAxLjY2NjY3QzE0LjYwMjMgMS42NjY2NyAxOC4zMzMzIDUuMzk3NjMgMTguMzMzMyAxMEMxOC4zMzMzIDE0LjYwMjQgMTQuNjAyMyAxOC4zMzMzIDkuOTk5OTYgMTguMzMzM1pNOS4zNjM4OSA1LjExMzEySDEwLjYzNDJMMTAuNTQzMSAxMS40NDM3SDkuNDU1MDRMOS4zNjM4OSA1LjExMzEyWk05LjI0OTk2IDEzLjUxNzNDOS4yNDk5NiAxMy45MzMxIDkuNTgwMzYgMTQuMjUyMSA5Ljk5NjIyIDE0LjI1MjFDMTAuNDIzNSAxNC4yNTIxIDEwLjc0ODIgMTMuOTMzMSAxMC43NDgyIDEzLjUxNzNDMTAuNzQ4MiAxMy4xMDE0IDEwLjQyMzUgMTIuNzgyNCA5Ljk5NjIyIDEyLjc4MjRDOS41ODAzNiAxMi43ODI0IDkuMjQ5OTYgMTMuMTAxNCA5LjI0OTk2IDEzLjUxNzNaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNGQTUxNTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsZXQgdGltZXI6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PlxuXG4gICAgY29uc3QgY2xlYXJDbG9zZVRpbWVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZVJlZiAmJiBtZXNzYWdlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbWVzc2FnZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICBtZXNzYWdlUmVmLmN1cnJlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICAgICAgbWVzc2FnZVJlZi5jdXJyZW50LnN0eWxlLmZpbHRlciA9IFwiYmx1cig0cHgpXCJcbiAgICAgIH1cbiAgICAgIGNsZWFyQ2xvc2VUaW1lcigpXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRDbG9zZVRpbWVyID0gKCkgPT4ge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2xvc2UoKVxuICAgICAgICB9LCBkdXJhdGlvbiAqIDEwMDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldENsb3NlVGltZXIoKVxuICAgICAgcmV0dXJuIGNsZWFyQ2xvc2VUaW1lclxuICAgIH0sIFtdKVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBjbG9zZSxcbiAgICAgIGdldERvbU5vZGU6ICgpID0+IG1lc3NhZ2VSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIGNvbnN0IGhhc0FjdGlvbnMgPSBhY3Rpb24gfHwgY2xvc2FibGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgICAgICBgJHtwcmVmaXh9LSR7aW50ZW50fWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0taGFzQWN0aW9uc2BdOiBoYXNBY3Rpb25zLFxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXtjbGVhckNsb3NlVGltZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17c2V0Q2xvc2VUaW1lcn1cbiAgICAgICAgcmVmPXttZXNzYWdlUmVmfVxuICAgICAgICBkYXRhLWR1cmF0aW9uPXtkdXJhdGlvbn1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtpY29ufVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250ZW50YH0+e2NvbnRlbnR9PC9kaXY+XG4gICAgICAgIHtoYXNBY3Rpb25zICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1hY3Rpb25zYH0+XG4gICAgICAgICAgICB7YWN0aW9uICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYWN0aW9uYH0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgb25DbGljayB9ID0gYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y2xvc2FibGUgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uIGxlZnRJY29uPVwiY2FuY2VsXCIgdGhlbWU9XCJsaWdodFwiIG9uQ2xpY2s9e2Nsb3NlfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5NZXNzYWdlLmRpc3BsYXlOYW1lID0gXCJNZXNzYWdlXCJcblxuTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDooYzliqjmjInpkq7nmoTphY3nva7vvIzlpoLvvJphY3Rpb246IHsgdGV4dDogXCLop6PplIFcIiwgb25DbGljazogKCkgPT4geyBtZXNzYWdlLmRlc3Ryb3koKSB9IH1cbiAgICovXG4gIGFjdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm5pi+56S65YWz6ZetIEljb27vvIzlpoLmnpzpnIDopoHlj6rmlK/mjIHmiYvliqjlhbPpl63vvIzov5jpnIDopoHkvKDlhaUgZHVyYXRpb246IDBcbiAgICovXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGheWuuVxuICAgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBcYumXtOmalOWkmuS5heiHquWKqOWFs+mXre+8jOWNleS9jeS4uiBz77yM5aaC5p6c5Lyg5YWlIDDvvIzliJnooajnpLrkuI3kvJroh6rliqjmtojlpLFcbiAgICovXG4gIGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogXGJNZXNzYWdlIOaPkuWFpeWIsOWTquS4quWFg+e0oO+8jOm7mOiupCAoKSA9PiBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbk1lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBhY3Rpb246IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjbG9zYWJsZTogZmFsc2UsXG4gIGNvbnRlbnQ6IG51bGwsXG4gIGR1cmF0aW9uOiAyLFxuICBnZXRDb250YWluZXI6IHVuZGVmaW5lZCxcbiAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICBvbkNsb3NlOiBudWxsLFxufVxuXG5jb25zdCBuZXdJbnN0YW5jZSA9IChwcm9wczogSU1lc3NhZ2VQcm9wcykgPT4ge1xuICBsZXQgaW5zdGFuY2VzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3ByZWZpeH0td3JhcHBlcmApXG4gIClcbiAgaW5zdGFuY2VzID0gaW5zdGFuY2VzLmZpbHRlcihcbiAgICAobzogSFRNTERpdkVsZW1lbnQpID0+IG8uZGF0YXNldC5jbG9zZSAhPT0gXCJ0cnVlXCJcbiAgKVxuICBpZiAoaW5zdGFuY2VzICYmIGluc3RhbmNlcy5sZW5ndGggPiAyKSB7XG4gICAgY29uc3QgZmlyc3RJbnN0YW5jZSA9IGluc3RhbmNlc1swXSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdEluc3RhbmNlLmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50XG4gICAgaWYgKGZpcnN0Q2hpbGQuZGF0YXNldC5kdXJhdGlvbiAhPT0gXCIwXCIpIHtcbiAgICAgIGZpcnN0SW5zdGFuY2UuZGF0YXNldC5jbG9zZSA9IFwidHJ1ZVwiXG4gICAgICBmaXJzdENoaWxkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgZmlyc3RDaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgICAgZmlyc3RDaGlsZC5zdHlsZS5maWx0ZXIgPSBcImJsdXIoNHB4KVwiXG4gICAgfVxuICB9XG5cbiAgbGV0IGluc3RhbmNlOiBhbnlcblxuICBjb25zdCB7IG9uQ2xvc2UsIGdldENvbnRhaW5lciwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb250YWluZXIuY2xhc3NOYW1lID0gYCR7cHJlZml4fS13cmFwcGVyYFxuICBpZiAoZ2V0Q29udGFpbmVyKSB7XG4gICAgZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlU3R5bGVzID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3ByZWZpeH0td3JhcHBlcmApXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgKG1lc3NhZ2U6IEhUTUxEaXZFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgbWVzc2FnZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICAgICAgICBtZXNzYWdlLnN0eWxlLnRyYW5zZm9ybSA9IGBcbiAgICAgICAgICB0cmFuc2xhdGUzZCh2YXIoLS1tZXNzYWdlLW9mZnNldC14KSxcbiAgICAgICAgICBjYWxjKCR7XG4gICAgICAgICAgICA1NiAqIChtZXNzYWdlcy5sZW5ndGggLSAxIC0gaW5kZXgpXG4gICAgICAgICAgfXB4ICsgdmFyKC0tbWVzc2FnZS1vZmZzZXQteSkpLCAwKWBcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0sIDUwKVxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKClcblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBpZiAob25DbG9zZSkge1xuICAgICAgb25DbG9zZSgpXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKVxuICAgICAgaWYgKHVubW91bnRSZXN1bHQgJiYgY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICB1cGRhdGVTdHlsZXMoKVxuICAgICAgfVxuICAgIH0sIDMwMClcbiAgfVxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8TWVzc2FnZVxuICAgICAgcmVmPXsobWVzc2FnZSkgPT4ge1xuICAgICAgICBpbnN0YW5jZSA9IG1lc3NhZ2VcbiAgICAgIH19XG4gICAgICBvbkNsb3NlPXtjbG9zZX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgIC8+LFxuICAgIGNvbnRhaW5lclxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuY2xvc2UoKVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn1cblxuSU5URU5UUy5mb3JFYWNoKFxuICAoaW50ZW50OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIikgPT4ge1xuICAgIE1lc3NhZ2VbaW50ZW50XSA9IChjb25maWc6IElNZXNzYWdlUHJvcHMgfCBzdHJpbmcpID0+IHtcbiAgICAgIGxldCBjbmZnID0geyBpbnRlbnQgfSBhcyBJTWVzc2FnZVByb3BzXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbmZnID0geyBjb250ZW50OiBjb25maWcsIGludGVudCB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbmZnID0gY29uZmlnXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3SW5zdGFuY2Uoe1xuICAgICAgICAuLi5jbmZnLFxuICAgICAgICBpbnRlbnQsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlXG4iXX0=