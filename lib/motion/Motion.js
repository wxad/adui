"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var noop = function noop() {};

var MOTION_DURATION_BASE = 200;
var transitionNames = {
  slide: "slide-up",
  zoom: "zoom-motion",
  zoomHorizontal: "zoom-motion-horizontal"
};

var Motion = function Motion(_ref) {
  var afterLeave = _ref.afterLeave,
      animation = _ref.animation,
      _appear = _ref.appear,
      children = _ref.children,
      duration = _ref.duration,
      onLeave = _ref.onLeave,
      transition = _ref.transition,
      othersProps = _objectWithoutProperties(_ref, ["afterLeave", "animation", "appear", "children", "duration", "onLeave", "transition"]);

  var dur = duration !== null && duration !== undefined ? duration : MOTION_DURATION_BASE;
  var transitionName = transition && transitionNames[transition];

  var getNodeStyle = function getNodeStyle(node, styleName) {
    return getComputedStyle(node).getPropertyValue(styleName);
  };

  var setNodeStyle = function setNodeStyle(node) {
    if (node) {
      if (transitionName && transitionName.includes("horizontal")) {
        node.style.marginRight = "0";
        node.style.marginLeft = "0";
        node.style.paddingRight = "0";
        node.style.paddingLeft = "0";
        node.style.width = "0";
      } else {
        node.style.marginTop = "0";
        node.style.marginBottom = "0";
        node.style.paddingTop = "0";
        node.style.paddingBottom = "0";
        node.style.height = "0";
      }
    }
  };

  var getEnterAnimation = function getEnterAnimation(node, done) {
    var width = "".concat(node.getBoundingClientRect().width, "px");
    var height = "".concat(node.getBoundingClientRect().height, "px");
    var paddingTop = getNodeStyle(node, "padding-top");
    var paddingRight = getNodeStyle(node, "padding-right");
    var paddingBottom = getNodeStyle(node, "padding-bottom");
    var paddingLeft = getNodeStyle(node, "padding-left");

    if (transitionName && transitionName.includes("slide")) {
      node.style.opacity = "1";
    }

    if (transitionName && transitionName.includes("horizontal")) {
      node.style.width = "0";
      node.style.paddingRight = "0";
      node.style.paddingLeft = "0";
    } else {
      node.style.height = "0";
      node.style.paddingTop = "0";
      node.style.paddingBottom = "0";
    }

    node.style.overflow = "hidden";
    node.style.setProperty("animation-duration", "".concat(dur, "ms"), "important");
    node.classList.add("".concat(transitionName, "-enter"), "".concat(transitionName, "-enter-active"));
    setTimeout(function () {
      if (transitionName && transitionName.includes("horizontal")) {
        node.style.transition = "all ".concat(dur, "ms var(--ease-in-out)");
        node.style.width = width;
        node.style.paddingRight = paddingRight;
        node.style.paddingLeft = paddingLeft;
      } else {
        node.style.transition = "all ".concat(dur, "ms var(--ease-in-out)");
        node.style.height = height;
        node.style.paddingTop = paddingTop;
        node.style.paddingBottom = paddingBottom;
      }
    }, 10);
    var promise = new Promise(function (resolve) {
      return setTimeout(resolve, dur);
    });
    promise.then(function () {
      node.classList.remove("".concat(transitionName, "-enter"), "".concat(transitionName, "-enter-active"));

      if (transitionName && transitionName.includes("horizontal")) {
        node.style.width = "";
      } else {
        node.style.height = "";
      }

      node.style.overflow = "";
      return done();
    });
  };

  return React.createElement(_rcAnimate["default"], _extends({
    animation: animation || {
      appear: function appear(node, done) {
        if (_appear) {
          getEnterAnimation(node, done);
        }

        return done();
      },
      enter: function enter(node, done) {
        getEnterAnimation(node, done);
      },
      leave: function leave(node, done) {
        if (onLeave) {
          onLeave(node);
        }

        if (transitionName && transitionName.includes("horizontal")) {
          var width = "".concat(node.getBoundingClientRect().width, "px");
          node.style.width = width;
        } else {
          var height = "".concat(node.getBoundingClientRect().height, "px");
          node.style.height = height;
        }

        node.style.setProperty("animation-duration", "".concat(dur, "ms"), "important");
        node.style.overflow = "hidden";
        node.classList.remove("".concat(transitionName, "-enter"), "".concat(transitionName, "-enter-active"));
        node.classList.add("".concat(transitionName, "-leave"), "".concat(transitionName, "-leave-active"));
        setTimeout(function () {
          node.style.transition = "all ".concat(dur, "ms var(--ease-in-out)");
          setNodeStyle(node);
        }, 10);
        var promise = new Promise(function (resolve) {
          return setTimeout(resolve, dur);
        });
        promise.then(function () {
          if (afterLeave) {
            afterLeave(node);
          }

          return done();
        });
      }
    }
  }, othersProps), children);
};

Motion.propTypes = {
  afterLeave: _propTypes["default"].func,
  animation: _propTypes["default"].object,
  appear: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  duration: _propTypes["default"].number,
  onLeave: _propTypes["default"].func,
  transition: _propTypes["default"].oneOf(["slide", "zoom", "zoomHorizontal"])
};
Motion.defaultProps = {
  afterLeave: noop,
  animation: undefined,
  appear: false,
  children: null,
  duration: undefined,
  onLeave: noop,
  transition: "zoom"
};
var _default = Motion;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbW90aW9uL01vdGlvbi50c3giXSwibmFtZXMiOlsibm9vcCIsIk1PVElPTl9EVVJBVElPTl9CQVNFIiwidHJhbnNpdGlvbk5hbWVzIiwic2xpZGUiLCJ6b29tIiwiem9vbUhvcml6b250YWwiLCJNb3Rpb24iLCJhZnRlckxlYXZlIiwiYW5pbWF0aW9uIiwiYXBwZWFyIiwiY2hpbGRyZW4iLCJkdXJhdGlvbiIsIm9uTGVhdmUiLCJ0cmFuc2l0aW9uIiwib3RoZXJzUHJvcHMiLCJkdXIiLCJ1bmRlZmluZWQiLCJ0cmFuc2l0aW9uTmFtZSIsImdldE5vZGVTdHlsZSIsIm5vZGUiLCJzdHlsZU5hbWUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInNldE5vZGVTdHlsZSIsImluY2x1ZGVzIiwic3R5bGUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIndpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJoZWlnaHQiLCJnZXRFbnRlckFuaW1hdGlvbiIsImRvbmUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvcGFjaXR5Iiwib3ZlcmZsb3ciLCJzZXRQcm9wZXJ0eSIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwicmVtb3ZlIiwiZW50ZXIiLCJsZWF2ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJvYmplY3QiLCJib29sIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxvQkFBb0Is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U0FGUztBQUdwQlAsRUFBQUEsTUFBTSxFQUFFLEtBSFk7QUFJcEJDLEVBQUFBLFFBQVEsRUFBRSxJQUpVO0FBS3BCQyxFQUFBQSxRQUFRLEVBQUVLLFNBTFU7QUFNcEJKLEVBQUFBLE9BQU8sRUFBRVosSUFOVztBQU9wQmEsRUFBQUEsVUFBVSxFQUFFO0FBUFEsQ0FBdEI7ZUFVZVAsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBNT1RJT05fRFVSQVRJT05fQkFTRSA9IDIwMFxuY29uc3QgdHJhbnNpdGlvbk5hbWVzID0ge1xuICBzbGlkZTogXCJzbGlkZS11cFwiLFxuICB6b29tOiBcInpvb20tbW90aW9uXCIsXG4gIHpvb21Ib3Jpem9udGFsOiBcInpvb20tbW90aW9uLWhvcml6b250YWxcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTW90aW9uUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIGRvbSDnp7vpmaTlkI7nmoQgaGFuZGxlclxuICAgKi9cbiAgYWZ0ZXJMZWF2ZT86IChub2RlOiBIVE1MRWxlbWVudCkgPT4gdm9pZFxuICAvKipcbiAgICog5Y+v6Ieq5a6a5LmJIGFuaW1hdGlvbiDnmoQgYXBwZWFyLCBlbnRlciwgbGVhdmVcbiAgICovXG4gIGFuaW1hdGlvbj86IG9iamVjdFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75piv5ZCm5L2c55So5LqOIGFwcGVhciDpmLbmrrVcbiAgICovXG4gIGFwcGVhcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWtkOWFg+e0oFxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIE1vdGlvbiDljIXoo7nlsYLnmoTlhYPntKDmoIfnrb5cbiAgICovXG4gIGNvbXBvbmVudD86IHN0cmluZ1xuICAvKipcbiAgICog5Yqo5pWI5oyB57ut5pe26Ze077yM5Y2V5L2NIG1zXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlclxuICAvKipcbiAgICogZG9tIOW8gOWni+enu+mZpOeahCBoYW5kbGVyXG4gICAqL1xuICBvbkxlYXZlPzogKG5vZGU6IEhUTUxFbGVtZW50KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDliqjmlYjlvaLlvI9cbiAgICovXG4gIHRyYW5zaXRpb24/OiBcInNsaWRlXCIgfCBcInpvb21cIiB8IFwiem9vbUhvcml6b250YWxcIlxufVxuXG5jb25zdCBNb3Rpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElNb3Rpb25Qcm9wcz4gPSAoe1xuICBhZnRlckxlYXZlLFxuICBhbmltYXRpb24sXG4gIGFwcGVhcixcbiAgY2hpbGRyZW4sXG4gIGR1cmF0aW9uLFxuICBvbkxlYXZlLFxuICB0cmFuc2l0aW9uLFxuICAuLi5vdGhlcnNQcm9wc1xufTogSU1vdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IGR1ciA9XG4gICAgZHVyYXRpb24gIT09IG51bGwgJiYgZHVyYXRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyBkdXJhdGlvblxuICAgICAgOiBNT1RJT05fRFVSQVRJT05fQkFTRVxuICBjb25zdCB0cmFuc2l0aW9uTmFtZSA9IHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbk5hbWVzW3RyYW5zaXRpb25dXG5cbiAgY29uc3QgZ2V0Tm9kZVN0eWxlID0gKG5vZGU6IEhUTUxFbGVtZW50LCBzdHlsZU5hbWU6IHN0cmluZykgPT5cbiAgICBnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVOYW1lKVxuXG4gIGNvbnN0IHNldE5vZGVTdHlsZSA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbk5hbWUgJiYgdHJhbnNpdGlvbk5hbWUuaW5jbHVkZXMoXCJob3Jpem9udGFsXCIpKSB7XG4gICAgICAgIG5vZGUuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjBcIlxuICAgICAgICBub2RlLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjBcIlxuICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMFwiXG4gICAgICAgIG5vZGUuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjBcIlxuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gXCIwXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUubWFyZ2luVG9wID0gXCIwXCJcbiAgICAgICAgbm9kZS5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjBcIlxuICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIlxuICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBcIjBcIlxuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IFwiMFwiXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0RW50ZXJBbmltYXRpb24gPSAobm9kZTogSFRNTEVsZW1lbnQsIGRvbmU6ICgpID0+IHZvaWQpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IGAke25vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGh9cHhgXG4gICAgY29uc3QgaGVpZ2h0ID0gYCR7bm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHR9cHhgXG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGdldE5vZGVTdHlsZShub2RlLCBcInBhZGRpbmctdG9wXCIpXG4gICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gZ2V0Tm9kZVN0eWxlKG5vZGUsIFwicGFkZGluZy1yaWdodFwiKVxuICAgIGNvbnN0IHBhZGRpbmdCb3R0b20gPSBnZXROb2RlU3R5bGUobm9kZSwgXCJwYWRkaW5nLWJvdHRvbVwiKVxuICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gZ2V0Tm9kZVN0eWxlKG5vZGUsIFwicGFkZGluZy1sZWZ0XCIpXG5cbiAgICBpZiAodHJhbnNpdGlvbk5hbWUgJiYgdHJhbnNpdGlvbk5hbWUuaW5jbHVkZXMoXCJzbGlkZVwiKSkge1xuICAgICAgbm9kZS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbk5hbWUgJiYgdHJhbnNpdGlvbk5hbWUuaW5jbHVkZXMoXCJob3Jpem9udGFsXCIpKSB7XG4gICAgICBub2RlLnN0eWxlLndpZHRoID0gXCIwXCJcbiAgICAgIG5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIwXCJcbiAgICAgIG5vZGUuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjBcIlxuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnN0eWxlLmhlaWdodCA9IFwiMFwiXG4gICAgICBub2RlLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIlxuICAgICAgbm9kZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gXCIwXCJcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoXCJhbmltYXRpb24tZHVyYXRpb25cIiwgYCR7ZHVyfW1zYCwgXCJpbXBvcnRhbnRcIilcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXG4gICAgICBgJHt0cmFuc2l0aW9uTmFtZX0tZW50ZXJgLFxuICAgICAgYCR7dHJhbnNpdGlvbk5hbWV9LWVudGVyLWFjdGl2ZWBcbiAgICApXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aW9uTmFtZSAmJiB0cmFuc2l0aW9uTmFtZS5pbmNsdWRlcyhcImhvcml6b250YWxcIikpIHtcbiAgICAgICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2R1cn1tcyB2YXIoLS1lYXNlLWluLW91dClgXG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aFxuICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmdSaWdodFxuICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdMZWZ0ID0gcGFkZGluZ0xlZnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHtkdXJ9bXMgdmFyKC0tZWFzZS1pbi1vdXQpYFxuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodFxuICAgICAgICBub2RlLnN0eWxlLnBhZGRpbmdUb3AgPSBwYWRkaW5nVG9wXG4gICAgICAgIG5vZGUuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHBhZGRpbmdCb3R0b21cbiAgICAgIH1cbiAgICB9LCAxMClcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGR1cikpXG4gICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgYCR7dHJhbnNpdGlvbk5hbWV9LWVudGVyYCxcbiAgICAgICAgYCR7dHJhbnNpdGlvbk5hbWV9LWVudGVyLWFjdGl2ZWBcbiAgICAgIClcbiAgICAgIGlmICh0cmFuc2l0aW9uTmFtZSAmJiB0cmFuc2l0aW9uTmFtZS5pbmNsdWRlcyhcImhvcml6b250YWxcIikpIHtcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IFwiXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gXCJcIlxuICAgICAgfVxuICAgICAgbm9kZS5zdHlsZS5vdmVyZmxvdyA9IFwiXCJcbiAgICAgIHJldHVybiBkb25lKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVxuICAgICAgYW5pbWF0aW9uPXtcbiAgICAgICAgYW5pbWF0aW9uIHx8IHtcbiAgICAgICAgICBhcHBlYXIobm9kZTogSFRNTEVsZW1lbnQsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgICAgICAgZ2V0RW50ZXJBbmltYXRpb24obm9kZSwgZG9uZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb25lKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVudGVyKG5vZGU6IEhUTUxFbGVtZW50LCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgICAgICBnZXRFbnRlckFuaW1hdGlvbihub2RlLCBkb25lKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVhdmUobm9kZTogSFRNTEVsZW1lbnQsIGRvbmU6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgICAgIGlmIChvbkxlYXZlKSB7XG4gICAgICAgICAgICAgIG9uTGVhdmUobm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uTmFtZSAmJiB0cmFuc2l0aW9uTmFtZS5pbmNsdWRlcyhcImhvcml6b250YWxcIikpIHtcbiAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBgJHtub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRofXB4YFxuICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGhcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGAke25vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0fXB4YFxuICAgICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgXCJhbmltYXRpb24tZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgYCR7ZHVyfW1zYCxcbiAgICAgICAgICAgICAgXCJpbXBvcnRhbnRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbm9kZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgICAgYCR7dHJhbnNpdGlvbk5hbWV9LWVudGVyYCxcbiAgICAgICAgICAgICAgYCR7dHJhbnNpdGlvbk5hbWV9LWVudGVyLWFjdGl2ZWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgYCR7dHJhbnNpdGlvbk5hbWV9LWxlYXZlYCxcbiAgICAgICAgICAgICAgYCR7dHJhbnNpdGlvbk5hbWV9LWxlYXZlLWFjdGl2ZWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb24gPSBgYWxsICR7ZHVyfW1zIHZhcigtLWVhc2UtaW4tb3V0KWBcbiAgICAgICAgICAgICAgc2V0Tm9kZVN0eWxlKG5vZGUpXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZHVyKSlcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhZnRlckxlYXZlKSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXJMZWF2ZShub2RlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBkb25lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgey4uLm90aGVyc1Byb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FuaW1hdGU+XG4gIClcbn1cblxuTW90aW9uLnByb3BUeXBlcyA9IHtcbiAgYWZ0ZXJMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgb25MZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRyYW5zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXCJzbGlkZVwiLCBcInpvb21cIiwgXCJ6b29tSG9yaXpvbnRhbFwiXSksXG59XG5cbk1vdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGFmdGVyTGVhdmU6IG5vb3AsXG4gIGFuaW1hdGlvbjogdW5kZWZpbmVkLFxuICBhcHBlYXI6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZHVyYXRpb246IHVuZGVmaW5lZCxcbiAgb25MZWF2ZTogbm9vcCxcbiAgdHJhbnNpdGlvbjogXCJ6b29tXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdGlvblxuIl19