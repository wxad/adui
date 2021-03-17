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

var _icon = _interopRequireDefault(require("../icon"));

var _iconIntents = _interopRequireDefault(require("../alert/iconIntents"));

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
      icon = _ref.icon,
      intent = _ref.intent,
      onClose = _ref.onClose,
      otherProps = _objectWithoutProperties(_ref, ["action", "className", "closable", "content", "duration", "getContainer", "icon", "intent", "onClose"]);

  var messageRef = (0, _react.useRef)(null);
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
  }, otherProps), _react["default"].createElement(_icon["default"], {
    icon: icon || _iconIntents["default"][intent],
    size: 20,
    className: "".concat(prefix, "-icon")
  }), _react["default"].createElement("div", {
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
  icon: _propTypes["default"].any,
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
  icon: undefined,
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
      firstChild.style.webkitFilter = "blur(4px)";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtbWVzc2FnZS9NZXNzYWdlLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJTlRFTlRTIiwiTWVzc2FnZSIsInJlZiIsImFjdGlvbiIsImNsYXNzTmFtZSIsImNsb3NhYmxlIiwiY29udGVudCIsImR1cmF0aW9uIiwiZ2V0Q29udGFpbmVyIiwiaWNvbiIsImludGVudCIsIm9uQ2xvc2UiLCJvdGhlclByb3BzIiwibWVzc2FnZVJlZiIsInRpbWVyIiwiY2xlYXJDbG9zZVRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJjdXJyZW50Iiwic3R5bGUiLCJvcGFjaXR5IiwidmlzaWJpbGl0eSIsImZpbHRlciIsInNldENsb3NlVGltZXIiLCJzZXRUaW1lb3V0IiwiZ2V0RG9tTm9kZSIsImhhc0FjdGlvbnMiLCJJQ09OX0lOVEVOVFMiLCJvbkNsaWNrIiwidGV4dCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Iiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJudW1iZXIiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwibmV3SW5zdGFuY2UiLCJwcm9wcyIsImluc3RhbmNlcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm8iLCJkYXRhc2V0IiwibGVuZ3RoIiwiZmlyc3RJbnN0YW5jZSIsImZpcnN0Q2hpbGQiLCJjaGlsZHJlbiIsIndlYmtpdEZpbHRlciIsImluc3RhbmNlIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYm9keSIsInVwZGF0ZVN0eWxlcyIsIm1lc3NhZ2VzIiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJtZXNzYWdlIiwiaW5kZXgiLCJ0cmFuc2Zvcm0iLCJ1bm1vdW50UmVzdWx0IiwiUmVhY3RET00iLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwicGFyZW50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QUFBLE9BQU8sQ0FBQ1MsTUFBRCxDQUFQLEdBQWtCLFVBQUNpRSxNQUFELEVBQW9DO0FBQ3BELFFBQUlDLElBQUksR0FBRztBQUFFbEUsTUFBQUEsTUFBTSxFQUFOQTtBQUFGLEtBQVg7O0FBQ0EsUUFBSSxPQUFPaUUsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QkMsTUFBQUEsSUFBSSxHQUFHO0FBQUV0RSxRQUFBQSxPQUFPLEVBQUVxRSxNQUFYO0FBQW1CakUsUUFBQUEsTUFBTSxFQUFOQTtBQUFuQixPQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xrRSxNQUFBQSxJQUFJLEdBQUdELE1BQVA7QUFDRDs7QUFDRCxXQUFPbEMsV0FBVyxpQ0FDYm1DLElBRGE7QUFFaEJsRSxNQUFBQSxNQUFNLEVBQU5BO0FBRmdCLE9BQWxCO0FBSUQsR0FYRDtBQVlELENBZEg7ZUFpQmVULE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgZm9yd2FyZFJlZixcbiAgdXNlRWZmZWN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VSZWYsXG59IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBJQ09OX0lOVEVOVFMgZnJvbSBcIi4uL2FsZXJ0L2ljb25JbnRlbnRzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktY2hhbm5lbHMtbWVzc2FnZVwiXG5jb25zdCBJTlRFTlRTID0gW1wibm9ybWFsXCIsIFwicHJpbWFyeVwiLCBcInN1Y2Nlc3NcIiwgXCJ3YXJuaW5nXCIsIFwiZGFuZ2VyXCJdXG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog6KGM5Yqo5oyJ6ZKu55qE6YWN572u77yM5aaC77yaYWN0aW9uOiB7IHRleHQ6IFwi6Kej6ZSBXCIsIG9uQ2xpY2s6ICgpID0+IHsgbWVzc2FnZS5kZXN0cm95KCkgfSB9XG4gICAqL1xuICBhY3Rpb24/OiB7IHRleHQ6IHN0cmluZzsgb25DbGljazogKCkgPT4gdm9pZCB9IHwgbnVsbFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuWFs+mXrSBJY29u77yM5aaC5p6c6ZyA6KaB5Y+q5pSv5oyB5omL5Yqo5YWz6Zet77yM6L+Y6ZyA6KaB5Lyg5YWlIGR1cmF0aW9uOiAwXG4gICAqL1xuICBjbG9zYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWGheWuuVxuICAgKi9cbiAgY29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogXGLpl7TpmpTlpJrkuYXoh6rliqjlhbPpl63vvIzljZXkvY3kuLogc++8jOWmguaenOS8oOWFpSAw77yM5YiZ6KGo56S65LiN5Lya6Ieq5Yqo5raI5aSxXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlclxuICAvKipcbiAgICogXGJNZXNzYWdlIOaPkuWFpeWIsOWTquS4quWFg+e0oO+8jOm7mOiupCAoKSA9PiBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBnZXRDb250YWluZXI/OiAoKSA9PiBIVE1MRWxlbWVudFxuICAvKipcbiAgICog6K6+572u5Zu+5qCHXG4gICAqL1xuICBpY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDorr7nva7nsbvlnotcbiAgICovXG4gIGludGVudDogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgLyoqXG4gICAqIOWFs+mXreaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsb3NlPzogKCgpID0+IHZvaWQpIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlXG4gIGV4dGVuZHMgUmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxcbiAgICBJTWVzc2FnZVByb3BzICYgUmVhY3QuUmVmQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cbiAgPiB7XG4gIG5vcm1hbDogYW55XG4gIHByaW1hcnk6IGFueVxuICBzdWNjZXNzOiBhbnlcbiAgd2FybmluZzogYW55XG4gIGRhbmdlcjogYW55XG59XG5cbi8qKlxuICog5YWo5bGA5o+Q6YaS55So5LqO5YWo5bGA5oCn5Zyw5bGV56S66ZyA6KaB5Y2z5pe25oCn5YWz5rOo55qE5L+h5oGv44CCXG4gKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IE1lc3NhZ2U6IElNZXNzYWdlID0gZm9yd2FyZFJlZihcbiAgKFxuICAgIHtcbiAgICAgIGFjdGlvbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNsb3NhYmxlLFxuICAgICAgY29udGVudCxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZ2V0Q29udGFpbmVyLFxuICAgICAgaWNvbixcbiAgICAgIGludGVudCxcbiAgICAgIG9uQ2xvc2UsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfTogSU1lc3NhZ2VQcm9wcyxcbiAgICByZWY6IGFueVxuICApID0+IHtcbiAgICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gICAgbGV0IHRpbWVyOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD5cblxuICAgIGNvbnN0IGNsZWFyQ2xvc2VUaW1lciA9ICgpID0+IHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIHRpbWVyID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xuICAgICAgaWYgKG1lc3NhZ2VSZWYgJiYgbWVzc2FnZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIG1lc3NhZ2VSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcbiAgICAgICAgbWVzc2FnZVJlZi5jdXJyZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gICAgICAgIG1lc3NhZ2VSZWYuY3VycmVudC5zdHlsZS5maWx0ZXIgPSBcImJsdXIoNHB4KVwiXG4gICAgICB9XG4gICAgICBjbGVhckNsb3NlVGltZXIoKVxuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgb25DbG9zZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q2xvc2VUaW1lciA9ICgpID0+IHtcbiAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNsb3NlKClcbiAgICAgICAgfSwgZHVyYXRpb24gKiAxMDAwKVxuICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRDbG9zZVRpbWVyKClcbiAgICAgIHJldHVybiBjbGVhckNsb3NlVGltZXJcbiAgICB9LCBbXSlcblxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgICAgY2xvc2UsXG4gICAgICBnZXREb21Ob2RlOiAoKSA9PiBtZXNzYWdlUmVmLmN1cnJlbnQsXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYXNBY3Rpb25zID0gYWN0aW9uIHx8IGNsb3NhYmxlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgIGAke3ByZWZpeH0tYmFzZWAsXG4gICAgICAgICAgYCR7cHJlZml4fS0ke2ludGVudH1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWhhc0FjdGlvbnNgXTogaGFzQWN0aW9ucyxcbiAgICAgICAgICB9XG4gICAgICAgICl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17Y2xlYXJDbG9zZVRpbWVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3NldENsb3NlVGltZXJ9XG4gICAgICAgIHJlZj17bWVzc2FnZVJlZn1cbiAgICAgICAgZGF0YS1kdXJhdGlvbj17ZHVyYXRpb259XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgPlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249e2ljb24gfHwgSUNPTl9JTlRFTlRTW2ludGVudF19XG4gICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jb250ZW50YH0+e2NvbnRlbnR9PC9kaXY+XG4gICAgICAgIHtoYXNBY3Rpb25zICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1hY3Rpb25zYH0+XG4gICAgICAgICAgICB7YWN0aW9uICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tYWN0aW9uYH0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdGhlbWU9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgb25DbGljayB9ID0gYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y2xvc2FibGUgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uIGxlZnRJY29uPVwiY2FuY2VsXCIgdGhlbWU9XCJsaWdodFwiIG9uQ2xpY2s9e2Nsb3NlfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuKVxuXG5NZXNzYWdlLmRpc3BsYXlOYW1lID0gXCJNZXNzYWdlXCJcblxuTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDooYzliqjmjInpkq7nmoTphY3nva7vvIzlpoLvvJphY3Rpb246IHsgdGV4dDogXCLop6PplIFcIiwgb25DbGljazogKCkgPT4geyBtZXNzYWdlLmRlc3Ryb3koKSB9IH1cbiAgICovXG4gIGFjdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICog5piv5ZCm5pi+56S65YWz6ZetIEljb27vvIzlpoLmnpzpnIDopoHlj6rmlK/mjIHmiYvliqjlhbPpl63vvIzov5jpnIDopoHkvKDlhaUgZHVyYXRpb246IDBcbiAgICovXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOWGheWuuVxuICAgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBcYumXtOmalOWkmuS5heiHquWKqOWFs+mXre+8jOWNleS9jeS4uiBz77yM5aaC5p6c5Lyg5YWlIDDvvIzliJnooajnpLrkuI3kvJroh6rliqjmtojlpLFcbiAgICovXG4gIGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogXGJNZXNzYWdlIOaPkuWFpeWIsOWTquS4quWFg+e0oO+8jOm7mOiupCAoKSA9PiBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6K6+572u5Zu+5qCHXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6K6+572u57G75Z6LXG4gICAqL1xuICBpbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlhbPpl63ml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbk1lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBhY3Rpb246IG51bGwsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICBjbG9zYWJsZTogZmFsc2UsXG4gIGNvbnRlbnQ6IG51bGwsXG4gIGR1cmF0aW9uOiAyLFxuICBnZXRDb250YWluZXI6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gIG9uQ2xvc2U6IG51bGwsXG59XG5cbmNvbnN0IG5ld0luc3RhbmNlID0gKHByb3BzOiBJTWVzc2FnZVByb3BzKSA9PiB7XG4gIGxldCBpbnN0YW5jZXMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7cHJlZml4fS13cmFwcGVyYClcbiAgKVxuICBpbnN0YW5jZXMgPSBpbnN0YW5jZXMuZmlsdGVyKFxuICAgIChvOiBIVE1MRGl2RWxlbWVudCkgPT4gby5kYXRhc2V0LmNsb3NlICE9PSBcInRydWVcIlxuICApXG4gIGlmIChpbnN0YW5jZXMgJiYgaW5zdGFuY2VzLmxlbmd0aCA+IDIpIHtcbiAgICBjb25zdCBmaXJzdEluc3RhbmNlID0gaW5zdGFuY2VzWzBdIGFzIEhUTUxFbGVtZW50XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0SW5zdGFuY2UuY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnRcbiAgICBpZiAoZmlyc3RDaGlsZC5kYXRhc2V0LmR1cmF0aW9uICE9PSBcIjBcIikge1xuICAgICAgZmlyc3RJbnN0YW5jZS5kYXRhc2V0LmNsb3NlID0gXCJ0cnVlXCJcbiAgICAgIGZpcnN0Q2hpbGQuc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4gICAgICBmaXJzdENoaWxkLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gICAgICBmaXJzdENoaWxkLnN0eWxlLndlYmtpdEZpbHRlciA9IFwiYmx1cig0cHgpXCJcbiAgICAgIGZpcnN0Q2hpbGQuc3R5bGUuZmlsdGVyID0gXCJibHVyKDRweClcIlxuICAgIH1cbiAgfVxuXG4gIGxldCBpbnN0YW5jZTogYW55XG5cbiAgY29uc3QgeyBvbkNsb3NlLCBnZXRDb250YWluZXIsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGAke3ByZWZpeH0td3JhcHBlcmBcbiAgaWYgKGdldENvbnRhaW5lcikge1xuICAgIGdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVN0eWxlcyA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtwcmVmaXh9LXdyYXBwZXJgKVxuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIChtZXNzYWdlOiBIVE1MRGl2RWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIG1lc3NhZ2Uuc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgICAgICAgbWVzc2FnZS5zdHlsZS50cmFuc2Zvcm0gPSBgXG4gICAgICAgICAgdHJhbnNsYXRlM2QodmFyKC0tbWVzc2FnZS1vZmZzZXQteCksXG4gICAgICAgICAgY2FsYygke1xuICAgICAgICAgICAgNTYgKiAobWVzc2FnZXMubGVuZ3RoIC0gMSAtIGluZGV4KVxuICAgICAgICAgIH1weCArIHZhcigtLW1lc3NhZ2Utb2Zmc2V0LXkpKSwgMClgXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9LCA1MClcbiAgfVxuXG4gIHVwZGF0ZVN0eWxlcygpXG5cbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHVubW91bnRSZXN1bHQgPSBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGNvbnRhaW5lcilcbiAgICAgIGlmICh1bm1vdW50UmVzdWx0ICYmIGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcilcbiAgICAgICAgdXBkYXRlU3R5bGVzKClcbiAgICAgIH1cbiAgICB9LCAzMDApXG4gIH1cblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPE1lc3NhZ2VcbiAgICAgIHJlZj17KG1lc3NhZ2UpID0+IHtcbiAgICAgICAgaW5zdGFuY2UgPSBtZXNzYWdlXG4gICAgICB9fVxuICAgICAgb25DbG9zZT17Y2xvc2V9XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAvPixcbiAgICBjb250YWluZXJcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG5cbklOVEVOVFMuZm9yRWFjaChcbiAgKGludGVudDogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCIpID0+IHtcbiAgICBNZXNzYWdlW2ludGVudF0gPSAoY29uZmlnOiBJTWVzc2FnZVByb3BzIHwgc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY25mZyA9IHsgaW50ZW50IH0gYXMgSU1lc3NhZ2VQcm9wc1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY25mZyA9IHsgY29udGVudDogY29uZmlnLCBpbnRlbnQgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY25mZyA9IGNvbmZpZ1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0luc3RhbmNlKHtcbiAgICAgICAgLi4uY25mZyxcbiAgICAgICAgaW50ZW50LFxuICAgICAgfSlcbiAgICB9XG4gIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVxuIl19