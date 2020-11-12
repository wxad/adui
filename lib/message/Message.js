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

var prefix = "adui-message";
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
      messageRef.current.style.webkitFilter = "blur(4px)";
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
        message.style.transform = "translate3d(0, ".concat(56 * (messages.length - 1 - index), "px, 0)");
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

    return newInstance(_objectSpread({}, cnfg, {
      intent: intent
    }));
  };
});
var _default = Message;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbWVzc2FnZS9NZXNzYWdlLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJJTlRFTlRTIiwiTWVzc2FnZSIsInJlZiIsImFjdGlvbiIsImNsYXNzTmFtZSIsImNsb3NhYmxlIiwiY29udGVudCIsImR1cmF0aW9uIiwiZ2V0Q29udGFpbmVyIiwiaWNvbiIsImludGVudCIsIm9uQ2xvc2UiLCJvdGhlclByb3BzIiwibWVzc2FnZVJlZiIsInRpbWVyIiwiY2xlYXJDbG9zZVRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJjdXJyZW50Iiwic3R5bGUiLCJvcGFjaXR5IiwidmlzaWJpbGl0eSIsIndlYmtpdEZpbHRlciIsImZpbHRlciIsInNldENsb3NlVGltZXIiLCJzZXRUaW1lb3V0IiwiZ2V0RG9tTm9kZSIsImhhc0FjdGlvbnMiLCJJQ09OX0lOVEVOVFMiLCJvbkNsaWNrIiwidGV4dCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Iiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJudW1iZXIiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwibmV3SW5zdGFuY2UiLCJwcm9wcyIsImluc3RhbmNlcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm8iLCJkYXRhc2V0IiwibGVuZ3RoIiwiZmlyc3RJbnN0YW5jZSIsImZpcnN0Q2hpbGQiLCJjaGlsZHJlbiIsImluc3RhbmNlIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYm9keSIsInVwZGF0ZVN0eWxlcyIsIm1lc3NhZ2VzIiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJtZXNzYWdlIiwiaW5kZXgiLCJ0cmFuc2Zvcm0iLCJ1bm1vdW50UmVzdWx0IiwiUmVhY3RET00iLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwicGFyZW50Tm9kZSIsInJl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QStFQWpCLE9BQU8sQ0FBQytELE9BQVIsQ0FDRSxVQUFDckQsTUFBRCxFQUFxRTtBQUNuRVQsRUFBQUEsT0FBTyxDQUFDUyxNQUFELENBQVAsR0FBa0IsVUFBQ2lFLE1BQUQsRUFBb0M7QUFDcEQsUUFBSUMsSUFBSSxHQUFHO0FBQUVsRSxNQUFBQSxNQUFNLEVBQU5BO0FBQUYsS0FBWDs7QUFDQSxRQUFJLE9BQU9pRSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCQyxNQUFBQSxJQUFJLEdBQUc7QUFBRXRFLFFBQUFBLE9BQU8sRUFBRXFFLE1BQVg7QUFBbUJqRSxRQUFBQSxNQUFNLEVBQU5BO0FBQW5CLE9BQVA7QUFDRCxLQUZELE1BRU87QUFDTGtFLE1BQUFBLElBQUksR0FBR0QsTUFBUDtBQUNEOztBQUNELFdBQU9qQyxXQUFXLG1CQUNia0MsSUFEYTtBQUVoQmxFLE1BQUFBLE1BQU0sRUFBTkE7QUFGZ0IsT0FBbEI7QUFJRCxHQVhEO0FBWUQsQ0FkSDtlQWlCZVQsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBmb3J3YXJkUmVmLFxuICB1c2VFZmZlY3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZVJlZixcbn0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IElDT05fSU5URU5UUyBmcm9tIFwiLi4vYWxlcnQvaWNvbkludGVudHNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1tZXNzYWdlXCJcbmNvbnN0IElOVEVOVFMgPSBbXCJub3JtYWxcIiwgXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIl1cblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDooYzliqjmjInpkq7nmoTphY3nva7vvIzlpoLvvJphY3Rpb246IHsgdGV4dDogXCLop6PplIFcIiwgb25DbGljazogKCkgPT4geyBtZXNzYWdlLmRlc3Ryb3koKSB9IH1cbiAgICovXG4gIGFjdGlvbj86IHsgdGV4dDogc3RyaW5nOyBvbkNsaWNrOiAoKSA9PiB2b2lkIH0gfCBudWxsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65YWz6ZetIEljb27vvIzlpoLmnpzpnIDopoHlj6rmlK/mjIHmiYvliqjlhbPpl63vvIzov5jpnIDopoHkvKDlhaUgZHVyYXRpb246IDBcbiAgICovXG4gIGNsb3NhYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog5YaF5a65XG4gICAqL1xuICBjb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBcYumXtOmalOWkmuS5heiHquWKqOWFs+mXre+8jOWNleS9jeS4uiBz77yM5aaC5p6c5Lyg5YWlIDDvvIzliJnooajnpLrkuI3kvJroh6rliqjmtojlpLFcbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyXG4gIC8qKlxuICAgKiBcYk1lc3NhZ2Ug5o+S5YWl5Yiw5ZOq5Liq5YWD57Sg77yM6buY6K6kICgpID0+IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldENvbnRhaW5lcj86ICgpID0+IEhUTUxFbGVtZW50XG4gIC8qKlxuICAgKiDorr7nva7lm77moIdcbiAgICovXG4gIGljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOiuvue9ruexu+Wei1xuICAgKi9cbiAgaW50ZW50OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICAvKipcbiAgICog5YWz6Zet5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uQ2xvc2U/OiAoKCkgPT4gdm9pZCkgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2VcbiAgZXh0ZW5kcyBSZWFjdC5Gb3J3YXJkUmVmRXhvdGljQ29tcG9uZW50PFxuICAgIElNZXNzYWdlUHJvcHMgJiBSZWFjdC5SZWZBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuICA+IHtcbiAgbm9ybWFsOiBhbnlcbiAgcHJpbWFyeTogYW55XG4gIHN1Y2Nlc3M6IGFueVxuICB3YXJuaW5nOiBhbnlcbiAgZGFuZ2VyOiBhbnlcbn1cblxuLyoqXG4gKiDlhajlsYDmj5DphpLnlKjkuo7lhajlsYDmgKflnLDlsZXnpLrpnIDopoHljbPml7bmgKflhbPms6jnmoTkv6Hmga/jgIJcbiAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgTWVzc2FnZTogSU1lc3NhZ2UgPSBmb3J3YXJkUmVmKFxuICAoXG4gICAge1xuICAgICAgYWN0aW9uLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2xvc2FibGUsXG4gICAgICBjb250ZW50LFxuICAgICAgZHVyYXRpb24sXG4gICAgICBnZXRDb250YWluZXIsXG4gICAgICBpY29uLFxuICAgICAgaW50ZW50LFxuICAgICAgb25DbG9zZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9OiBJTWVzc2FnZVByb3BzLFxuICAgIHJlZjogYW55XG4gICkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG5cbiAgICBsZXQgdGltZXI6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PlxuXG4gICAgY29uc3QgY2xlYXJDbG9zZVRpbWVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZVJlZiAmJiBtZXNzYWdlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbWVzc2FnZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICBtZXNzYWdlUmVmLmN1cnJlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICAgICAgbWVzc2FnZVJlZi5jdXJyZW50LnN0eWxlLndlYmtpdEZpbHRlciA9IFwiYmx1cig0cHgpXCJcbiAgICAgICAgbWVzc2FnZVJlZi5jdXJyZW50LnN0eWxlLmZpbHRlciA9IFwiYmx1cig0cHgpXCJcbiAgICAgIH1cbiAgICAgIGNsZWFyQ2xvc2VUaW1lcigpXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRDbG9zZVRpbWVyID0gKCkgPT4ge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY2xvc2UoKVxuICAgICAgICB9LCBkdXJhdGlvbiAqIDEwMDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldENsb3NlVGltZXIoKVxuICAgICAgcmV0dXJuIGNsZWFyQ2xvc2VUaW1lclxuICAgIH0sIFtdKVxuXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XG4gICAgICBjbG9zZSxcbiAgICAgIGdldERvbU5vZGU6ICgpID0+IG1lc3NhZ2VSZWYuY3VycmVudCxcbiAgICB9KSlcblxuICAgIGNvbnN0IGhhc0FjdGlvbnMgPSBhY3Rpb24gfHwgY2xvc2FibGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgYCR7cHJlZml4fS1iYXNlYCxcbiAgICAgICAgICBgJHtwcmVmaXh9LSR7aW50ZW50fWAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0taGFzQWN0aW9uc2BdOiBoYXNBY3Rpb25zLFxuICAgICAgICAgIH1cbiAgICAgICAgKX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXtjbGVhckNsb3NlVGltZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17c2V0Q2xvc2VUaW1lcn1cbiAgICAgICAgcmVmPXttZXNzYWdlUmVmfVxuICAgICAgICBkYXRhLWR1cmF0aW9uPXtkdXJhdGlvbn1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aWNvbiB8fCBJQ09OX0lOVEVOVFNbaW50ZW50XX1cbiAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNvbnRlbnRgfT57Y29udGVudH08L2Rpdj5cbiAgICAgICAge2hhc0FjdGlvbnMgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWFjdGlvbnNgfT5cbiAgICAgICAgICAgIHthY3Rpb24gJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1hY3Rpb25gfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBvbkNsaWNrIH0gPSBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjbG9zYWJsZSAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gbGVmdEljb249XCJjYW5jZWxcIiB0aGVtZT1cImxpZ2h0XCIgb25DbGljaz17Y2xvc2V9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4pXG5cbk1lc3NhZ2UuZGlzcGxheU5hbWUgPSBcIk1lc3NhZ2VcIlxuXG5NZXNzYWdlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOihjOWKqOaMiemSrueahOmFjee9ru+8jOWmgu+8mmFjdGlvbjogeyB0ZXh0OiBcIuino+mUgVwiLCBvbkNsaWNrOiAoKSA9PiB7IG1lc3NhZ2UuZGVzdHJveSgpIH0gfVxuICAgKi9cbiAgYWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrlhbPpl60gSWNvbu+8jOWmguaenOmcgOimgeWPquaUr+aMgeaJi+WKqOWFs+mXre+8jOi/mOmcgOimgeS8oOWFpSBkdXJhdGlvbjogMFxuICAgKi9cbiAgY2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5YaF5a65XG4gICAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFxi6Ze06ZqU5aSa5LmF6Ieq5Yqo5YWz6Zet77yM5Y2V5L2N5Li6IHPvvIzlpoLmnpzkvKDlhaUgMO+8jOWImeihqOekuuS4jeS8muiHquWKqOa2iOWksVxuICAgKi9cbiAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBcYk1lc3NhZ2Ug5o+S5YWl5Yiw5ZOq5Liq5YWD57Sg77yM6buY6K6kICgpID0+IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDorr7nva7lm77moIdcbiAgICovXG4gIGljb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDorr7nva7nsbvlnotcbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWFs+mXreaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbn1cblxuTWVzc2FnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGlvbjogbnVsbCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIGNsb3NhYmxlOiBmYWxzZSxcbiAgY29udGVudDogbnVsbCxcbiAgZHVyYXRpb246IDIsXG4gIGdldENvbnRhaW5lcjogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIGludGVudDogXCJub3JtYWxcIixcbiAgb25DbG9zZTogbnVsbCxcbn1cblxuY29uc3QgbmV3SW5zdGFuY2UgPSAocHJvcHM6IElNZXNzYWdlUHJvcHMpID0+IHtcbiAgbGV0IGluc3RhbmNlcyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtwcmVmaXh9LXdyYXBwZXJgKVxuICApXG4gIGluc3RhbmNlcyA9IGluc3RhbmNlcy5maWx0ZXIoXG4gICAgKG86IEhUTUxEaXZFbGVtZW50KSA9PiBvLmRhdGFzZXQuY2xvc2UgIT09IFwidHJ1ZVwiXG4gIClcbiAgaWYgKGluc3RhbmNlcyAmJiBpbnN0YW5jZXMubGVuZ3RoID4gMikge1xuICAgIGNvbnN0IGZpcnN0SW5zdGFuY2UgPSBpbnN0YW5jZXNbMF0gYXMgSFRNTEVsZW1lbnRcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3RJbnN0YW5jZS5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudFxuICAgIGlmIChmaXJzdENoaWxkLmRhdGFzZXQuZHVyYXRpb24gIT09IFwiMFwiKSB7XG4gICAgICBmaXJzdEluc3RhbmNlLmRhdGFzZXQuY2xvc2UgPSBcInRydWVcIlxuICAgICAgZmlyc3RDaGlsZC5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcbiAgICAgIGZpcnN0Q2hpbGQuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICAgIGZpcnN0Q2hpbGQuc3R5bGUud2Via2l0RmlsdGVyID0gXCJibHVyKDRweClcIlxuICAgICAgZmlyc3RDaGlsZC5zdHlsZS5maWx0ZXIgPSBcImJsdXIoNHB4KVwiXG4gICAgfVxuICB9XG5cbiAgbGV0IGluc3RhbmNlOiBhbnlcblxuICBjb25zdCB7IG9uQ2xvc2UsIGdldENvbnRhaW5lciwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb250YWluZXIuY2xhc3NOYW1lID0gYCR7cHJlZml4fS13cmFwcGVyYFxuICBpZiAoZ2V0Q29udGFpbmVyKSB7XG4gICAgZ2V0Q29udGFpbmVyKCkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlU3R5bGVzID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3ByZWZpeH0td3JhcHBlcmApXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgKG1lc3NhZ2U6IEhUTUxEaXZFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgbWVzc2FnZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICAgICAgICBtZXNzYWdlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAkezU2ICpcbiAgICAgICAgICAgIChtZXNzYWdlcy5sZW5ndGggLSAxIC0gaW5kZXgpfXB4LCAwKWBcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0sIDUwKVxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKClcblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBpZiAob25DbG9zZSkge1xuICAgICAgb25DbG9zZSgpXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoY29udGFpbmVyKVxuICAgICAgaWYgKHVubW91bnRSZXN1bHQgJiYgY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKVxuICAgICAgICB1cGRhdGVTdHlsZXMoKVxuICAgICAgfVxuICAgIH0sIDMwMClcbiAgfVxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8TWVzc2FnZVxuICAgICAgcmVmPXttZXNzYWdlID0+IHtcbiAgICAgICAgaW5zdGFuY2UgPSBtZXNzYWdlXG4gICAgICB9fVxuICAgICAgb25DbG9zZT17Y2xvc2V9XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAvPixcbiAgICBjb250YWluZXJcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG5cbklOVEVOVFMuZm9yRWFjaChcbiAgKGludGVudDogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCIpID0+IHtcbiAgICBNZXNzYWdlW2ludGVudF0gPSAoY29uZmlnOiBJTWVzc2FnZVByb3BzIHwgc3RyaW5nKSA9PiB7XG4gICAgICBsZXQgY25mZyA9IHsgaW50ZW50IH0gYXMgSU1lc3NhZ2VQcm9wc1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY25mZyA9IHsgY29udGVudDogY29uZmlnLCBpbnRlbnQgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY25mZyA9IGNvbmZpZ1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld0luc3RhbmNlKHtcbiAgICAgICAgLi4uY25mZyxcbiAgICAgICAgaW50ZW50LFxuICAgICAgfSlcbiAgICB9XG4gIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVxuIl19