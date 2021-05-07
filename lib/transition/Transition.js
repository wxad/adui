"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _popmotion = require("popmotion");

var _useIsInitialRender = require("../_util/hooks/use-is-initial-render");

var _Memo = _interopRequireDefault(require("./Memo"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HUNDREDS = ["opacity", "scale", "scale-x", "scale-y"];
var TRANSFORMS = ["scale", "rotate", "scale-x", "scale-y", "translate-x", "translate-y"];
var ANIMATE_DISABLEDS = ["transform"];
var UNITS = {
  rotate: "deg",
  width: "px",
  height: "px"
};

var useSplitClassesToStyle = function useSplitClassesToStyle() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return (0, _react.useMemo)(function () {
    var classesSplits = typeof classes === "string" ? [classes] : classes;
    var style = {};
    classesSplits.forEach(function (o, index) {
      var splits = o.split("-");
      var property;
      var value;

      if (o.startsWith("-")) {
        ;

        var _splits = _slicedToArray(splits, 3);

        property = _splits[1];
        value = _splits[2];
      } else {
        ;

        var _splits2 = _slicedToArray(splits, 2);

        property = _splits2[0];
        value = _splits2[1];
      }

      if (TRANSFORMS.includes(property)) {
        if (!style.transform) {
          style["--adui-translate-x"] = {
            value: 0,
            index: index
          };
          style["--adui-translate-y"] = {
            value: 0,
            index: index
          };
          style["--adui-rotate"] = {
            value: 0,
            unit: "deg",
            index: index
          };
          style["--adui-skew-x"] = {
            value: 0,
            index: index
          };
          style["--adui-skew-y"] = {
            value: 0,
            index: index
          };
          style["--adui-scale-x"] = {
            value: 1,
            index: index
          };
          style["--adui-scale-y"] = {
            value: 1,
            index: index
          };
          style.transform = {
            value: "translateX(var(--adui-translate-x)) translateY(var(--adui-translate-y)) rotate(var(--adui-rotate)) skewX(var(--adui-skew-x)) skewY(var(--adui-skew-y)) scaleX(var(--adui-scale-x)) scaleY(var(--adui-scale-y))",
            index: index
          };
        }

        switch (property) {
          case "scale":
            style["--adui-scale-x"] = {
              value: parseInt(value, 10) / 100,
              index: index
            };
            style["--adui-scale-y"] = {
              value: parseInt(value, 10) / 100,
              unit: "",
              index: index
            };
            break;

          case "rotate":
            style["--adui-rotate"] = {
              value: value,
              unit: "deg",
              index: index
            };
            break;

          default:
            break;
        }
      } else {
        style[property] = {
          value: HUNDREDS.includes(property) ? parseInt(value, 10) / 100 : value,
          unit: UNITS[property] || "",
          index: index
        };
      }
    });
    return style;
  }, [classes]);
};

var Transition = function Transition(_ref) {
  var afterEnter = _ref.afterEnter,
      afterLeave = _ref.afterLeave,
      appear = _ref.appear,
      beforeEnter = _ref.beforeEnter,
      beforeLeave = _ref.beforeLeave,
      children = _ref.children,
      enterDelay = _ref.enterDelay,
      enterDuration = _ref.enterDuration,
      enterEase = _ref.enterEase,
      enterTension = _ref.enterTension,
      enterFriction = _ref.enterFriction,
      enterFrom = _ref.enterFrom,
      enterTo = _ref.enterTo,
      leaveDelay = _ref.leaveDelay,
      leaveDuration = _ref.leaveDuration,
      leaveEase = _ref.leaveEase,
      leaveTension = _ref.leaveTension,
      leaveFriction = _ref.leaveFriction,
      leaveFrom = _ref.leaveFrom,
      leaveTo = _ref.leaveTo,
      show = _ref.show,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$tag = _ref.tag,
      TagName = _ref$tag === void 0 ? "span" : _ref$tag,
      otherProps = _objectWithoutProperties(_ref, ["afterEnter", "afterLeave", "appear", "beforeEnter", "beforeLeave", "children", "enterDelay", "enterDuration", "enterEase", "enterTension", "enterFriction", "enterFrom", "enterTo", "leaveDelay", "leaveDuration", "leaveEase", "leaveTension", "leaveFriction", "leaveFrom", "leaveTo", "show", "style", "tag"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isToRender = _useState2[0],
      setIsToRender = _useState2[1];

  var initial = (0, _useIsInitialRender.useIsInitialRender)();
  var enterFromStyles = useSplitClassesToStyle(enterFrom);
  var enterToStyles = useSplitClassesToStyle(enterTo);
  var leaveFromStyles = useSplitClassesToStyle(leaveFrom);
  var leaveToStyles = useSplitClassesToStyle(leaveTo);
  var wrapperRef = (0, _react.useRef)(null);
  var animatingIdRef = (0, _react.useRef)("");
  var animatingPhase = (0, _react.useRef)("");

  var animating = function () {
    var _ref2 = _asyncToGenerator(_regenerator["default"].mark(function _callee(phase) {
      var currentAnimatingId, fromStyles, toStyles, duration, delay, tension, friction, promises;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              animatingIdRef.current = Math.random().toString(36).substring(3, 8);
              currentAnimatingId = animatingIdRef.current;
              fromStyles = phase === "enter" ? enterFromStyles : leaveFromStyles;
              toStyles = phase === "enter" ? enterToStyles : leaveToStyles;
              duration = phase === "enter" ? enterDuration : leaveDuration;
              delay = phase === "enter" ? enterDelay : leaveDelay;
              tension = phase === "enter" ? enterTension : leaveTension;
              friction = phase === "enter" ? enterFriction : leaveFriction;

              if (phase === "enter") {
                if (beforeEnter) {
                  beforeEnter();
                }
              } else if (beforeLeave) {
                beforeLeave();
              }

              Object.keys(fromStyles).forEach(function (key) {
                var _fromStyles$key = fromStyles[key],
                    value = _fromStyles$key.value,
                    _fromStyles$key$unit = _fromStyles$key.unit,
                    unit = _fromStyles$key$unit === void 0 ? "" : _fromStyles$key$unit;

                if (wrapperRef.current) {
                  wrapperRef.current.style.setProperty(key, value + unit);
                }
              });
              promises = [];
              Object.keys(toStyles).forEach(function (key) {
                promises.push(new Promise(function (resolve) {
                  var _toStyles$key = toStyles[key],
                      to = _toStyles$key.value,
                      _toStyles$key$unit = _toStyles$key.unit,
                      unit = _toStyles$key$unit === void 0 ? "" : _toStyles$key$unit,
                      index = _toStyles$key.index;
                  var from = fromStyles[key].value;

                  if (fromStyles[key] && from !== to && !ANIMATE_DISABLEDS.includes(key)) {
                    var durationOption = Array.isArray(duration) ? duration[index] : duration;
                    var delayOption = Array.isArray(delay) ? delay[index] : delay;
                    var tensionOption = Array.isArray(tension) ? tension[index] : tension;
                    var frictionOption = Array.isArray(friction) ? friction[index] : friction;
                    var type = duration === undefined ? "spring" : "keyframes";
                    var additionals = type === "spring" ? {
                      stiffness: tensionOption,
                      damping: frictionOption
                    } : {
                      duration: durationOption
                    };

                    var animateOptions = _objectSpread({
                      from: Number(from),
                      to: Number(to),
                      onComplete: function onComplete() {
                        if (currentAnimatingId === animatingIdRef.current) {
                          resolve({
                            property: key,
                            animated: true
                          });
                        }
                      },
                      type: type
                    }, additionals);

                    if (delayOption) {
                      var timeDelay = new Promise(function (r) {
                        return setTimeout(r, delayOption);
                      });
                      timeDelay.then(function () {
                        var animateSave = (0, _popmotion.animate)(_objectSpread({
                          onUpdate: function onUpdate(latest) {
                            if (currentAnimatingId !== animatingIdRef.current) {
                              animateSave.stop();
                            }

                            if (wrapperRef.current) {
                              wrapperRef.current.style.setProperty(key, latest + unit);
                            }
                          }
                        }, animateOptions));
                      });
                    } else {
                      var animateSave = (0, _popmotion.animate)(_objectSpread({
                        onUpdate: function onUpdate(latest) {
                          if (currentAnimatingId !== animatingIdRef.current) {
                            animateSave.stop();
                          }

                          if (wrapperRef.current) {
                            wrapperRef.current.style.setProperty(key, latest + unit);
                          }
                        }
                      }, animateOptions));
                    }
                  } else if (wrapperRef.current) {
                    wrapperRef.current.style.setProperty(key, to + unit);
                    resolve({
                      property: key,
                      animated: false
                    });
                  }
                }));
              });
              return _context.abrupt("return", Promise.all(promises));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function animating(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var doAnimate = function () {
    var _ref3 = _asyncToGenerator(_regenerator["default"].mark(function _callee2(phase) {
      var returns;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              animatingPhase.current = phase;

              if (!(phase === "enter")) {
                _context2.next = 9;
                break;
              }

              _context2.next = 4;
              return animating("enter");

            case 4:
              returns = _context2.sent;
              returns.forEach(function (_ref4) {
                var property = _ref4.property;

                if (wrapperRef.current) {
                  wrapperRef.current.style.setProperty(property, null);
                }
              });

              if (afterEnter) {
                animatingPhase.current = "entered";
                afterEnter();
              }

              _context2.next = 13;
              break;

            case 9:
              _context2.next = 11;
              return animating("leave");

            case 11:
              setIsToRender(false);

              if (afterLeave) {
                animatingPhase.current = "leaved";
                afterLeave();
              }

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function doAnimate(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (show) {
      setIsToRender(true);

      if (animatingPhase.current === "leave") {
        doAnimate("enter");
      }
    } else if (!initial) {
      doAnimate("leave");
    }
  }, [show]);
  (0, _react.useEffect)(function () {
    if (isToRender && (!initial || appear)) {
      doAnimate("enter");
    }
  }, [isToRender]);

  if (!isToRender) {
    return null;
  }

  return _react["default"].createElement(TagName, _extends({
    ref: wrapperRef,
    style: _objectSpread({
      visibility: show && !isToRender ? "hidden" : "visible"
    }, style)
  }, otherProps), _react["default"].createElement(_Memo["default"], null, children));
};

Transition.propTypes = {
  afterEnter: _propTypes["default"].any,
  afterLeave: _propTypes["default"].any,
  appear: _propTypes["default"].any,
  beforeEnter: _propTypes["default"].any,
  beforeLeave: _propTypes["default"].any,
  children: _propTypes["default"].any,
  enterDelay: _propTypes["default"].any,
  enterDuration: _propTypes["default"].any,
  enterEase: _propTypes["default"].any,
  enterTension: _propTypes["default"].any,
  enterFriction: _propTypes["default"].any,
  enterFrom: _propTypes["default"].any,
  enterTo: _propTypes["default"].any,
  leaveDelay: _propTypes["default"].any,
  leaveDuration: _propTypes["default"].any,
  leaveEase: _propTypes["default"].any,
  leaveTension: _propTypes["default"].any,
  leaveFriction: _propTypes["default"].any,
  leaveFrom: _propTypes["default"].any,
  leaveTo: _propTypes["default"].any,
  show: _propTypes["default"].any,
  style: _propTypes["default"].any,
  tag: _propTypes["default"].any
};
Transition.defaultProps = {
  afterEnter: undefined,
  afterLeave: undefined,
  appear: false,
  beforeEnter: undefined,
  beforeLeave: undefined,
  children: undefined,
  enterDelay: undefined,
  enterDuration: undefined,
  enterEase: undefined,
  enterTension: undefined,
  enterFriction: undefined,
  enterFrom: "",
  enterTo: "",
  leaveDelay: undefined,
  leaveDuration: undefined,
  leaveEase: undefined,
  leaveTension: undefined,
  leaveFriction: undefined,
  leaveFrom: "",
  leaveTo: "",
  show: true,
  style: {},
  tag: "div"
};
var _default = Transition;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNpdGlvbi9UcmFuc2l0aW9uLnRzeCJdLCJuYW1lcyI6WyJIVU5EUkVEUyIsIlRSQU5TRk9STVMiLCJBTklNQVRFX0RJU0FCTEVEUyIsIlVOSVRTIiwicm90YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VTcGxpdENsYXNzZXNUb1N0eWxlIiwiY2xhc3NlcyIsImNsYXNzZXNTcGxpdHMiLCJzdHlsZSIsImZvckVhY2giLCJvIiwiaW5kZXgiLCJzcGxpdHMiLCJzcGxpdCIsInByb3BlcnR5IiwidmFsdWUiLCJzdGFydHNXaXRoIiwiaW5jbHVkZXMiLCJ0cmFuc2Zvcm0iLCJ1bml0IiwicGFyc2VJbnQiLCJUcmFuc2l0aW9uIiwiYWZ0ZXJFbnRlciIsImFmdGVyTGVhdmUiLCJhcHBlYXIiLCJiZWZvcmVFbnRlciIsImJlZm9yZUxlYXZlIiwiY2hpbGRyZW4iLCJlbnRlckRlbGF5IiwiZW50ZXJEdXJhdGlvbiIsImVudGVyRWFzZSIsImVudGVyVGVuc2lvbiIsImVudGVyRnJpY3Rpb24iLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmVEZWxheSIsImxlYXZlRHVyYXRpb24iLCJsZWF2ZUVhc2UiLCJsZWF2ZVRlbnNpb24iLCJsZWF2ZUZyaWN0aW9uIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsInNob3ciLCJ0YWciLCJUYWdOYW1lIiwib3RoZXJQcm9wcyIsImlzVG9SZW5kZXIiLCJzZXRJc1RvUmVuZGVyIiwiaW5pdGlhbCIsImVudGVyRnJvbVN0eWxlcyIsImVudGVyVG9TdHlsZXMiLCJsZWF2ZUZyb21TdHlsZXMiLCJsZWF2ZVRvU3R5bGVzIiwid3JhcHBlclJlZiIsImFuaW1hdGluZ0lkUmVmIiwiYW5pbWF0aW5nUGhhc2UiLCJhbmltYXRpbmciLCJwaGFzZSIsImN1cnJlbnQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjdXJyZW50QW5pbWF0aW5nSWQiLCJmcm9tU3R5bGVzIiwidG9TdHlsZXMiLCJkdXJhdGlvbiIsImRlbGF5IiwidGVuc2lvbiIsImZyaWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInNldFByb3BlcnR5IiwicHJvbWlzZXMiLCJwdXNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0byIsImZyb20iLCJkdXJhdGlvbk9wdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsImRlbGF5T3B0aW9uIiwidGVuc2lvbk9wdGlvbiIsImZyaWN0aW9uT3B0aW9uIiwidHlwZSIsInVuZGVmaW5lZCIsImFkZGl0aW9uYWxzIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImFuaW1hdGVPcHRpb25zIiwiTnVtYmVyIiwib25Db21wbGV0ZSIsImFuaW1hdGVkIiwidGltZURlbGF5IiwiciIsInNldFRpbWVvdXQiLCJ0aGVuIiwiYW5pbWF0ZVNhdmUiLCJvblVwZGF0ZSIsImxhdGVzdCIsInN0b3AiLCJhbGwiLCJkb0FuaW1hdGUiLCJyZXR1cm5zIiwidmlzaWJpbGl0eSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsU0FBckIsRUFBZ0MsU0FBaEMsQ0FBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsQ0FDakIsT0FEaUIsRUFFakIsUUFGaUIsRUFHakIsU0FIaUIsRUFJakIsU0FKaUIsRUFLakIsYUFMaUIsRUFNakIsYUFOaUIsQ0FBbkI7QUFRQSxJQUFNQyxpQkFBaUIsR0FBRyxDQUFDLFdBQUQsQ0FBMUI7QUFDQSxJQUFNQyxLQUFnQyxHQUFHO0FBQ3ZDQyxFQUFBQSxNQUFNLEVBQUUsS0FEK0I7QUFFdkNDLEVBQUFBLEtBQUssRUFBRSxJQUZnQztBQUd2Q0MsRUFBQUEsTUFBTSxFQUFFO0FBSCtCLENBQXpDOztBQWtI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RUFBRThELFNBSlc7QUFLeEI3RCxFQUFBQSxXQUFXLEVBQUU2RCxTQUxXO0FBTXhCNUQsRUFBQUEsUUFBUSxFQUFFNEQsU0FOYztBQU94QjNELEVBQUFBLFVBQVUsRUFBRTJELFNBUFk7QUFReEIxRCxFQUFBQSxhQUFhLEVBQUUwRCxTQVJTO0FBU3hCekQsRUFBQUEsU0FBUyxFQUFFeUQsU0FUYTtBQVV4QnhELEVBQUFBLFlBQVksRUFBRXdELFNBVlU7QUFXeEJ2RCxFQUFBQSxhQUFhLEVBQUV1RCxTQVhTO0FBWXhCdEQsRUFBQUEsU0FBUyxFQUFFLEVBWmE7QUFheEJDLEVBQUFBLE9BQU8sRUFBRSxFQWJlO0FBY3hCQyxFQUFBQSxVQUFVLEVBQUVvRCxTQWRZO0FBZXhCbkQsRUFBQUEsYUFBYSxFQUFFbUQsU0FmUztBQWdCeEJsRCxFQUFBQSxTQUFTLEVBQUVrRCxTQWhCYTtBQWlCeEJqRCxFQUFBQSxZQUFZLEVBQUVpRCxTQWpCVTtBQWtCeEJoRCxFQUFBQSxhQUFhLEVBQUVnRCxTQWxCUztBQW1CeEIvQyxFQUFBQSxTQUFTLEVBQUUsRUFuQmE7QUFvQnhCQyxFQUFBQSxPQUFPLEVBQUUsRUFwQmU7QUFxQnhCQyxFQUFBQSxJQUFJLEVBQUUsSUFyQmtCO0FBc0J4QmxDLEVBQUFBLEtBQUssRUFBRSxFQXRCaUI7QUF1QnhCbUMsRUFBQUEsR0FBRyxFQUFFO0FBdkJtQixDQUExQjtlQTBCZXRCLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uT3B0aW9ucyB9IGZyb20gXCJwb3Btb3Rpb25cIlxuaW1wb3J0IHsgdXNlSXNJbml0aWFsUmVuZGVyIH0gZnJvbSBcIi4uL191dGlsL2hvb2tzL3VzZS1pcy1pbml0aWFsLXJlbmRlclwiXG5pbXBvcnQgTWVtbyBmcm9tIFwiLi9NZW1vXCJcblxuY29uc3QgSFVORFJFRFMgPSBbXCJvcGFjaXR5XCIsIFwic2NhbGVcIiwgXCJzY2FsZS14XCIsIFwic2NhbGUteVwiXVxuY29uc3QgVFJBTlNGT1JNUyA9IFtcbiAgXCJzY2FsZVwiLFxuICBcInJvdGF0ZVwiLFxuICBcInNjYWxlLXhcIixcbiAgXCJzY2FsZS15XCIsXG4gIFwidHJhbnNsYXRlLXhcIixcbiAgXCJ0cmFuc2xhdGUteVwiLFxuXVxuY29uc3QgQU5JTUFURV9ESVNBQkxFRFMgPSBbXCJ0cmFuc2Zvcm1cIl1cbmNvbnN0IFVOSVRTOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICByb3RhdGU6IFwiZGVnXCIsXG4gIHdpZHRoOiBcInB4XCIsXG4gIGhlaWdodDogXCJweFwiLFxufVxuXG5leHBvcnQgdHlwZSBURWFzZSA9IFwiZWFzZS1pblwiIHwgXCJlYXNlLW91dFwiXG5cbmV4cG9ydCB0eXBlIFRQaGFzZSA9IFwiZW50ZXJcIiB8IFwibGVhdmVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmFuc2l0aW9uUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOe7k+adnyBlbnRlciDml7bnmoTlm57osINcbiAgICovXG4gIGFmdGVyRW50ZXI/OiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDnu5PmnZ8gbGVhdmUg5pe255qE5Zue6LCDXG4gICAqL1xuICBhZnRlckxlYXZlPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog5Yid5qyhIG1vdW50IOaXtuaYr+WQpui/m+ihjOWKqOeUu1xuICAgKi9cbiAgYXBwZWFyPzogYm9vbGVhblxuICAvKipcbiAgICog5byA5aeLIGVudGVyIOWJjeeahOWbnuiwg1xuICAgKi9cbiAgYmVmb3JlRW50ZXI/OiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlvIDlp4sgbGVhdmUg5YmN55qE5Zue6LCDXG4gICAqL1xuICBiZWZvcmVMZWF2ZT86ICgpID0+IHZvaWRcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIGVudGVy77ya5bu26L+fXG4gICAqL1xuICBlbnRlckRlbGF5PzogbnVtYmVyIHwgbnVtYmVyW11cbiAgLyoqXG4gICAqIGVudGVy77ya5oC75L2T5pe26Ze077yM5b2T5pyJ5q2kIFByb3Ag5pe25bCG5b+955WlIHNwcmluZyDnm7jlhbPlsZ7mgKfvvIzljbMgc3RpZmZuZXNzIOWSjCBkYW1waW5nXG4gICAqL1xuICBlbnRlckR1cmF0aW9uPzogbnVtYmVyIHwgbnVtYmVyW11cbiAgLyoqXG4gICAqIGVudGVy77ya6LSd5aGe5bCU5puy57q/77yM5bCG5ZyoIGR1cmF0aW9uIOacieaViOaXtuW6lOeUqO+8jOWcqCBzcHJpbmcg5Yqo55S75pe26KKr5b+955WlXG4gICAqL1xuICBlbnRlckVhc2U/OiBURWFzZSB8IFRFYXNlW11cbiAgLyoqXG4gICAqIGVudGVy77ya5by55YqbIOKAlOKAlCDlnKjnjrDlrp7kuJbnlYzkuK3mmK/nlLHmnZDmlpnlkozpkqLljbfljprluqbvvIhjb2lsIHRoaWNrbmVzc++8iemAoOaIkOeahOOAguW8ueWKm+i2iuWkp++8jOW8ueewp+S8muaUtue8qeW+l+abtOacieWKm++8jOWKqOeUu+S5n+S8muWPmOW+l+a0u+azvFxuICAgKi9cbiAgZW50ZXJUZW5zaW9uPzogbnVtYmVyIHwgbnVtYmVyW11cbiAgLyoqXG4gICAqIGVudGVy77ya5pGp5pOm5YqbIOKAlOKAlCDmkanmk6blipvotorpq5jvvIzlsLHpnIDopoHotorlpJrnmoTlipvorqnniankvZPov5DliqjvvIzliqjnlLvkuZ/kvJrotormhaLjgILlpoLmnpzmkanmk6blipvotrPlpJ/kvY7vvIzniankvZPkvJrov5DliqjotoXov4fnu4jngrnvvIzkuqfnlJ/mlbDkuKrlm57lvLnmlYjmnpxcbiAgICovXG4gIGVudGVyRnJpY3Rpb24/OiBudW1iZXIgfCBudW1iZXJbXVxuICAvKipcbiAgICogZW50ZXLvvJrotbfngrnnmoTkuIDkupvljp/lrZDnsbvlkI1cbiAgICovXG4gIGVudGVyRnJvbT86IHN0cmluZyB8IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBlbnRlcu+8mue7iOeCueeahOS4gOS6m+WOn+WtkOexu+WQjVxuICAgKi9cbiAgZW50ZXJUbz86IHN0cmluZyB8IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBsZWF2Ze+8muW7tui/n1xuICAgKi9cbiAgbGVhdmVEZWxheT86IG51bWJlciB8IG51bWJlcltdXG4gIC8qKlxuICAgKiBsZWF2Ze+8muaAu+S9k+aXtumXtO+8jOW9k+acieatpCBQcm9wIOaXtuWwhuW/veeVpSBzcHJpbmcg55u45YWz5bGe5oCn77yM5Y2zIHN0aWZmbmVzcyDlkowgZGFtcGluZ1xuICAgKi9cbiAgbGVhdmVEdXJhdGlvbj86IG51bWJlciB8IG51bWJlcltdXG4gIC8qKlxuICAgKiBsZWF2Ze+8mui0neWhnuWwlOabsue6v++8jOWwhuWcqCBkdXJhdGlvbiDmnInmlYjml7blupTnlKjvvIzlnKggc3ByaW5nIOWKqOeUu+aXtuiiq+W/veeVpVxuICAgKi9cbiAgbGVhdmVFYXNlPzogVEVhc2UgfCBURWFzZVtdXG4gIC8qKlxuICAgKiBsZWF2Ze+8muW8ueWKmyDigJTigJQg5Zyo546w5a6e5LiW55WM5Lit5piv55Sx5p2Q5paZ5ZKM6ZKi5Y235Y6a5bqm77yIY29pbCB0aGlja25lc3PvvInpgKDmiJDnmoTjgILlvLnlipvotorlpKfvvIzlvLnnsKfkvJrmlLbnvKnlvpfmm7TmnInlipvvvIzliqjnlLvkuZ/kvJrlj5jlvpfmtLvms7xcbiAgICovXG4gIGxlYXZlVGVuc2lvbj86IG51bWJlciB8IG51bWJlcltdXG4gIC8qKlxuICAgKiBsZWF2Ze+8muaRqeaTpuWKmyDigJTigJQg5pGp5pOm5Yqb6LaK6auY77yM5bCx6ZyA6KaB6LaK5aSa55qE5Yqb6K6p54mp5L2T6L+Q5Yqo77yM5Yqo55S75Lmf5Lya6LaK5oWi44CC5aaC5p6c5pGp5pOm5Yqb6Laz5aSf5L2O77yM54mp5L2T5Lya6L+Q5Yqo6LaF6L+H57uI54K577yM5Lqn55Sf5pWw5Liq5Zue5by55pWI5p6cXG4gICAqL1xuICBsZWF2ZUZyaWN0aW9uPzogbnVtYmVyIHwgbnVtYmVyW11cbiAgLyoqXG4gICAqIGxlYXZl77ya6LW354K555qE5LiA5Lqb5Y6f5a2Q57G75ZCNXG4gICAqL1xuICBsZWF2ZUZyb20/OiBzdHJpbmcgfCBzdHJpbmdbXVxuICAvKipcbiAgICogbGVhdmXvvJrnu4jngrnnmoTkuIDkupvljp/lrZDnsbvlkI1cbiAgICovXG4gIGxlYXZlVG8/OiBzdHJpbmcgfCBzdHJpbmdbXVxuICAvKipcbiAgICog5YWD57Sg6L+b5Zy65YWl5Zy655qE5byA5YWzXG4gICAqL1xuICBzaG93PzogYm9vbGVhblxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOiKgueCuVxuICAgKi9cbiAgdGFnPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzXG59XG5cbi8vIGV4cG9ydCB0eXBlIFRSZW5kZXJTdGF0ZSA9IFwibW91bnRlZFwiIHwgXCJ1bm1vdW50ZWRcIlxuXG50eXBlIFRTdHlsZSA9IHtcbiAgW2tleTogc3RyaW5nXTogeyB2YWx1ZTogUmVhY3QuUmVhY3RUZXh0OyB1bml0Pzogc3RyaW5nOyBpbmRleDogbnVtYmVyIH1cbn1cblxudHlwZSBQcm9taXNlUmV0dXJuID0geyBwcm9wZXJ0eTogc3RyaW5nOyBhbmltYXRlZDogYm9vbGVhbiB9XG5cbmNvbnN0IHVzZVNwbGl0Q2xhc3Nlc1RvU3R5bGUgPSAoY2xhc3Nlczogc3RyaW5nIHwgc3RyaW5nW10gPSBcIlwiKTogVFN0eWxlID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXNTcGxpdHMgPSB0eXBlb2YgY2xhc3NlcyA9PT0gXCJzdHJpbmdcIiA/IFtjbGFzc2VzXSA6IGNsYXNzZXNcbiAgICBjb25zdCBzdHlsZTogVFN0eWxlID0ge31cbiAgICBjbGFzc2VzU3BsaXRzLmZvckVhY2goKG8sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzcGxpdHMgPSBvLnNwbGl0KFwiLVwiKVxuICAgICAgbGV0IHByb3BlcnR5XG4gICAgICBsZXQgdmFsdWVcbiAgICAgIC8qKlxuICAgICAgICogLSDlvIDlpLTkuLrotJ/lgLxcbiAgICAgICAqL1xuICAgICAgaWYgKG8uc3RhcnRzV2l0aChcIi1cIikpIHtcbiAgICAgICAgO1ssIHByb3BlcnR5LCB2YWx1ZV0gPSBzcGxpdHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIDtbcHJvcGVydHksIHZhbHVlXSA9IHNwbGl0c1xuICAgICAgfVxuICAgICAgaWYgKFRSQU5TRk9STVMuaW5jbHVkZXMocHJvcGVydHkpKSB7XG4gICAgICAgIGlmICghc3R5bGUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGVbXCItLWFkdWktdHJhbnNsYXRlLXhcIl0gPSB7IHZhbHVlOiAwLCBpbmRleCB9XG4gICAgICAgICAgc3R5bGVbXCItLWFkdWktdHJhbnNsYXRlLXlcIl0gPSB7IHZhbHVlOiAwLCBpbmRleCB9XG4gICAgICAgICAgc3R5bGVbXCItLWFkdWktcm90YXRlXCJdID0geyB2YWx1ZTogMCwgdW5pdDogXCJkZWdcIiwgaW5kZXggfVxuICAgICAgICAgIHN0eWxlW1wiLS1hZHVpLXNrZXcteFwiXSA9IHsgdmFsdWU6IDAsIGluZGV4IH1cbiAgICAgICAgICBzdHlsZVtcIi0tYWR1aS1za2V3LXlcIl0gPSB7IHZhbHVlOiAwLCBpbmRleCB9XG4gICAgICAgICAgc3R5bGVbXCItLWFkdWktc2NhbGUteFwiXSA9IHsgdmFsdWU6IDEsIGluZGV4IH1cbiAgICAgICAgICBzdHlsZVtcIi0tYWR1aS1zY2FsZS15XCJdID0geyB2YWx1ZTogMSwgaW5kZXggfVxuICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICBcInRyYW5zbGF0ZVgodmFyKC0tYWR1aS10cmFuc2xhdGUteCkpIHRyYW5zbGF0ZVkodmFyKC0tYWR1aS10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS1hZHVpLXJvdGF0ZSkpIHNrZXdYKHZhcigtLWFkdWktc2tldy14KSkgc2tld1kodmFyKC0tYWR1aS1za2V3LXkpKSBzY2FsZVgodmFyKC0tYWR1aS1zY2FsZS14KSkgc2NhbGVZKHZhcigtLWFkdWktc2NhbGUteSkpXCIsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgICAgICAgIGNhc2UgXCJzY2FsZVwiOlxuICAgICAgICAgICAgc3R5bGVbXCItLWFkdWktc2NhbGUteFwiXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGVbXCItLWFkdWktc2NhbGUteVwiXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDAsXG4gICAgICAgICAgICAgIHVuaXQ6IFwiXCIsXG4gICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIFwicm90YXRlXCI6XG4gICAgICAgICAgICBzdHlsZVtcIi0tYWR1aS1yb3RhdGVcIl0gPSB7IHZhbHVlLCB1bml0OiBcImRlZ1wiLCBpbmRleCB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSB7XG4gICAgICAgICAgdmFsdWU6IEhVTkRSRURTLmluY2x1ZGVzKHByb3BlcnR5KVxuICAgICAgICAgICAgPyBwYXJzZUludCh2YWx1ZSwgMTApIC8gMTAwXG4gICAgICAgICAgICA6IHZhbHVlLFxuICAgICAgICAgIHVuaXQ6IFVOSVRTW3Byb3BlcnR5XSB8fCBcIlwiLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gc3R5bGVcbiAgfSwgW2NsYXNzZXNdKVxufVxuXG4vKipcbiAqIOWKqOaViFxuICovXG5jb25zdCBUcmFuc2l0aW9uOiBSZWFjdC5GQzxJVHJhbnNpdGlvblByb3BzPiA9ICh7XG4gIGFmdGVyRW50ZXIsXG4gIGFmdGVyTGVhdmUsXG4gIGFwcGVhcixcbiAgYmVmb3JlRW50ZXIsXG4gIGJlZm9yZUxlYXZlLFxuICBjaGlsZHJlbixcbiAgZW50ZXJEZWxheSxcbiAgZW50ZXJEdXJhdGlvbixcbiAgZW50ZXJFYXNlLFxuICBlbnRlclRlbnNpb24sXG4gIGVudGVyRnJpY3Rpb24sXG4gIGVudGVyRnJvbSxcbiAgZW50ZXJUbyxcbiAgbGVhdmVEZWxheSxcbiAgbGVhdmVEdXJhdGlvbixcbiAgbGVhdmVFYXNlLFxuICBsZWF2ZVRlbnNpb24sXG4gIGxlYXZlRnJpY3Rpb24sXG4gIGxlYXZlRnJvbSxcbiAgbGVhdmVUbyxcbiAgc2hvdyxcbiAgc3R5bGUgPSB7fSxcbiAgdGFnOiBUYWdOYW1lID0gXCJzcGFuXCIsXG4gIC4uLm90aGVyUHJvcHNcbn06IElUcmFuc2l0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzVG9SZW5kZXIsIHNldElzVG9SZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGluaXRpYWwgPSB1c2VJc0luaXRpYWxSZW5kZXIoKVxuICBjb25zdCBlbnRlckZyb21TdHlsZXMgPSB1c2VTcGxpdENsYXNzZXNUb1N0eWxlKGVudGVyRnJvbSlcbiAgY29uc3QgZW50ZXJUb1N0eWxlcyA9IHVzZVNwbGl0Q2xhc3Nlc1RvU3R5bGUoZW50ZXJUbylcbiAgY29uc3QgbGVhdmVGcm9tU3R5bGVzID0gdXNlU3BsaXRDbGFzc2VzVG9TdHlsZShsZWF2ZUZyb20pXG4gIGNvbnN0IGxlYXZlVG9TdHlsZXMgPSB1c2VTcGxpdENsYXNzZXNUb1N0eWxlKGxlYXZlVG8pXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGFuaW1hdGluZ0lkUmVmID0gdXNlUmVmKFwiXCIpXG4gIGNvbnN0IGFuaW1hdGluZ1BoYXNlID0gdXNlUmVmKFwiXCIpXG5cbiAgY29uc3QgYW5pbWF0aW5nID0gYXN5bmMgKHBoYXNlOiBUUGhhc2UpID0+IHtcbiAgICBhbmltYXRpbmdJZFJlZi5jdXJyZW50ID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDMsIDgpXG4gICAgY29uc3QgY3VycmVudEFuaW1hdGluZ0lkID0gYW5pbWF0aW5nSWRSZWYuY3VycmVudFxuICAgIGNvbnN0IGZyb21TdHlsZXMgPSBwaGFzZSA9PT0gXCJlbnRlclwiID8gZW50ZXJGcm9tU3R5bGVzIDogbGVhdmVGcm9tU3R5bGVzXG4gICAgY29uc3QgdG9TdHlsZXMgPSBwaGFzZSA9PT0gXCJlbnRlclwiID8gZW50ZXJUb1N0eWxlcyA6IGxlYXZlVG9TdHlsZXNcbiAgICBjb25zdCBkdXJhdGlvbiA9IHBoYXNlID09PSBcImVudGVyXCIgPyBlbnRlckR1cmF0aW9uIDogbGVhdmVEdXJhdGlvblxuICAgIGNvbnN0IGRlbGF5ID0gcGhhc2UgPT09IFwiZW50ZXJcIiA/IGVudGVyRGVsYXkgOiBsZWF2ZURlbGF5XG4gICAgY29uc3QgdGVuc2lvbiA9IHBoYXNlID09PSBcImVudGVyXCIgPyBlbnRlclRlbnNpb24gOiBsZWF2ZVRlbnNpb25cbiAgICBjb25zdCBmcmljdGlvbiA9IHBoYXNlID09PSBcImVudGVyXCIgPyBlbnRlckZyaWN0aW9uIDogbGVhdmVGcmljdGlvblxuICAgIGlmIChwaGFzZSA9PT0gXCJlbnRlclwiKSB7XG4gICAgICBpZiAoYmVmb3JlRW50ZXIpIHtcbiAgICAgICAgYmVmb3JlRW50ZXIoKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYmVmb3JlTGVhdmUpIHtcbiAgICAgIGJlZm9yZUxlYXZlKClcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhmcm9tU3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgPSBcIlwiIH0gPSBmcm9tU3R5bGVzW2tleV1cbiAgICAgIGlmICh3cmFwcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgKyB1bml0KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxQcm9taXNlUmV0dXJuPltdID0gW11cbiAgICBPYmplY3Qua2V5cyh0b1N0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IHRvLCB1bml0ID0gXCJcIiwgaW5kZXggfSA9IHRvU3R5bGVzW2tleV1cbiAgICAgICAgICBjb25zdCB7IHZhbHVlOiBmcm9tIH0gPSBmcm9tU3R5bGVzW2tleV1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBmcm9tU3R5bGVzW2tleV0gJiZcbiAgICAgICAgICAgIGZyb20gIT09IHRvICYmXG4gICAgICAgICAgICAhQU5JTUFURV9ESVNBQkxFRFMuaW5jbHVkZXMoa2V5KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gY29uc3QgZWFzZSA9IEFycmF5LmlzQXJyYXkoZW50ZXJFYXNlKSA/IGVudGVyRWFzZVtpbmRleF0gOiBlbnRlckVhc2VcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uT3B0aW9uID0gQXJyYXkuaXNBcnJheShkdXJhdGlvbilcbiAgICAgICAgICAgICAgPyBkdXJhdGlvbltpbmRleF1cbiAgICAgICAgICAgICAgOiBkdXJhdGlvblxuICAgICAgICAgICAgY29uc3QgZGVsYXlPcHRpb24gPSBBcnJheS5pc0FycmF5KGRlbGF5KSA/IGRlbGF5W2luZGV4XSA6IGRlbGF5XG4gICAgICAgICAgICBjb25zdCB0ZW5zaW9uT3B0aW9uID0gQXJyYXkuaXNBcnJheSh0ZW5zaW9uKVxuICAgICAgICAgICAgICA/IHRlbnNpb25baW5kZXhdXG4gICAgICAgICAgICAgIDogdGVuc2lvblxuICAgICAgICAgICAgY29uc3QgZnJpY3Rpb25PcHRpb24gPSBBcnJheS5pc0FycmF5KGZyaWN0aW9uKVxuICAgICAgICAgICAgICA/IGZyaWN0aW9uW2luZGV4XVxuICAgICAgICAgICAgICA6IGZyaWN0aW9uXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gZHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IFwic3ByaW5nXCIgOiBcImtleWZyYW1lc1wiXG4gICAgICAgICAgICBjb25zdCBhZGRpdGlvbmFscyA9XG4gICAgICAgICAgICAgIHR5cGUgPT09IFwic3ByaW5nXCJcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgc3RpZmZuZXNzOiB0ZW5zaW9uT3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICBkYW1waW5nOiBmcmljdGlvbk9wdGlvbixcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uT3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAvLyBlYXNlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhbmltYXRlT3B0aW9uczogQW5pbWF0aW9uT3B0aW9uczxudW1iZXI+ID0ge1xuICAgICAgICAgICAgICBmcm9tOiBOdW1iZXIoZnJvbSksXG4gICAgICAgICAgICAgIHRvOiBOdW1iZXIodG8pLFxuICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRBbmltYXRpbmdJZCA9PT0gYW5pbWF0aW5nSWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHByb3BlcnR5OiBrZXksIGFuaW1hdGVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAuLi5hZGRpdGlvbmFscyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWxheU9wdGlvbikge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lRGVsYXkgPSBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCBkZWxheU9wdGlvbikpXG4gICAgICAgICAgICAgIHRpbWVEZWxheS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRlU2F2ZSA9IGFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgb25VcGRhdGU6IChsYXRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRBbmltYXRpbmdJZCAhPT0gYW5pbWF0aW5nSWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVTYXZlLnN0b3AoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh3cmFwcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBsYXRlc3QgKyB1bml0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgLi4uYW5pbWF0ZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVTYXZlID0gYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IChsYXRlc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QW5pbWF0aW5nSWQgIT09IGFuaW1hdGluZ0lkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNhdmUuc3RvcCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAod3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIGxhdGVzdCArIHVuaXQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAuLi5hbmltYXRlT3B0aW9ucyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHdyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgdG8gKyB1bml0KVxuICAgICAgICAgICAgcmVzb2x2ZSh7IHByb3BlcnR5OiBrZXksIGFuaW1hdGVkOiBmYWxzZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgfVxuXG4gIGNvbnN0IGRvQW5pbWF0ZSA9IGFzeW5jIChwaGFzZTogVFBoYXNlKSA9PiB7XG4gICAgYW5pbWF0aW5nUGhhc2UuY3VycmVudCA9IHBoYXNlXG4gICAgaWYgKHBoYXNlID09PSBcImVudGVyXCIpIHtcbiAgICAgIGNvbnN0IHJldHVybnMgPSBhd2FpdCBhbmltYXRpbmcoXCJlbnRlclwiKVxuICAgICAgcmV0dXJucy5mb3JFYWNoKCh7IHByb3BlcnR5IH0pID0+IHtcbiAgICAgICAgaWYgKHdyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgbnVsbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmIChhZnRlckVudGVyKSB7XG4gICAgICAgIGFuaW1hdGluZ1BoYXNlLmN1cnJlbnQgPSBcImVudGVyZWRcIlxuICAgICAgICBhZnRlckVudGVyKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgYW5pbWF0aW5nKFwibGVhdmVcIilcbiAgICAgIHNldElzVG9SZW5kZXIoZmFsc2UpXG4gICAgICBpZiAoYWZ0ZXJMZWF2ZSkge1xuICAgICAgICBhbmltYXRpbmdQaGFzZS5jdXJyZW50ID0gXCJsZWF2ZWRcIlxuICAgICAgICBhZnRlckxlYXZlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG93KSB7XG4gICAgICBzZXRJc1RvUmVuZGVyKHRydWUpXG4gICAgICBpZiAoYW5pbWF0aW5nUGhhc2UuY3VycmVudCA9PT0gXCJsZWF2ZVwiKSB7XG4gICAgICAgIGRvQW5pbWF0ZShcImVudGVyXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaW5pdGlhbCkge1xuICAgICAgZG9BbmltYXRlKFwibGVhdmVcIilcbiAgICB9XG4gIH0sIFtzaG93XSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIOWMuuWIhiBlbnRlciDlkowgYXBwZWFyXG4gICAgICovXG4gICAgaWYgKGlzVG9SZW5kZXIgJiYgKCFpbml0aWFsIHx8IGFwcGVhcikpIHtcbiAgICAgIGRvQW5pbWF0ZShcImVudGVyXCIpXG4gICAgfVxuICB9LCBbaXNUb1JlbmRlcl0pXG5cbiAgaWYgKCFpc1RvUmVuZGVyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIDxUYWdOYW1lXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZWY9e3dyYXBwZXJSZWZ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB2aXNpYmlsaXR5OiBzaG93ICYmICFpc1RvUmVuZGVyID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICA+XG4gICAgICA8TWVtbz57Y2hpbGRyZW59PC9NZW1vPlxuICAgIDwvVGFnTmFtZT5cbiAgKVxufVxuXG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOe7k+adnyBlbnRlciDml7bnmoTlm57osINcbiAgICovXG4gIGFmdGVyRW50ZXI6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDnu5PmnZ8gbGVhdmUg5pe255qE5Zue6LCDXG4gICAqL1xuICBhZnRlckxlYXZlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5Yid5qyhIG1vdW50IOaXtuaYr+WQpui/m+ihjOWKqOeUu1xuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5byA5aeLIGVudGVyIOWJjeeahOWbnuiwg1xuICAgKi9cbiAgYmVmb3JlRW50ZXI6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlvIDlp4sgbGVhdmUg5YmN55qE5Zue6LCDXG4gICAqL1xuICBiZWZvcmVMZWF2ZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBlbnRlcu+8muW7tui/n1xuICAgKi9cbiAgZW50ZXJEZWxheTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGVudGVy77ya5oC75L2T5pe26Ze077yM5b2T5pyJ5q2kIFByb3Ag5pe25bCG5b+955WlIHNwcmluZyDnm7jlhbPlsZ7mgKfvvIzljbMgc3RpZmZuZXNzIOWSjCBkYW1waW5nXG4gICAqL1xuICBlbnRlckR1cmF0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogZW50ZXLvvJrotJ3loZ7lsJTmm7Lnur/vvIzlsIblnKggZHVyYXRpb24g5pyJ5pWI5pe25bqU55So77yM5ZyoIHNwcmluZyDliqjnlLvml7booqvlv73nlaVcbiAgICovXG4gIGVudGVyRWFzZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGVudGVy77ya5by55YqbIOKAlOKAlCDlnKjnjrDlrp7kuJbnlYzkuK3mmK/nlLHmnZDmlpnlkozpkqLljbfljprluqbvvIhjb2lsIHRoaWNrbmVzc++8iemAoOaIkOeahOOAguW8ueWKm+i2iuWkp++8jOW8ueewp+S8muaUtue8qeW+l+abtOacieWKm++8jOWKqOeUu+S5n+S8muWPmOW+l+a0u+azvFxuICAgKi9cbiAgZW50ZXJUZW5zaW9uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogZW50ZXLvvJrmkanmk6blipsg4oCU4oCUIOaRqeaTpuWKm+i2iumrmO+8jOWwsemcgOimgei2iuWkmueahOWKm+iuqeeJqeS9k+i/kOWKqO+8jOWKqOeUu+S5n+S8mui2iuaFouOAguWmguaenOaRqeaTpuWKm+i2s+Wkn+S9ju+8jOeJqeS9k+S8mui/kOWKqOi2hei/h+e7iOeCue+8jOS6p+eUn+aVsOS4quWbnuW8ueaViOaenFxuICAgKi9cbiAgZW50ZXJGcmljdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGVudGVy77ya6LW354K555qE5LiA5Lqb5Y6f5a2Q57G75ZCNXG4gICAqL1xuICBlbnRlckZyb206IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBlbnRlcu+8mue7iOeCueeahOS4gOS6m+WOn+WtkOexu+WQjVxuICAgKi9cbiAgZW50ZXJUbzogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGxlYXZl77ya5bu26L+fXG4gICAqL1xuICBsZWF2ZURlbGF5OiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogbGVhdmXvvJrmgLvkvZPml7bpl7TvvIzlvZPmnInmraQgUHJvcCDml7blsIblv73nlaUgc3ByaW5nIOebuOWFs+WxnuaAp++8jOWNsyBzdGlmZm5lc3Mg5ZKMIGRhbXBpbmdcbiAgICovXG4gIGxlYXZlRHVyYXRpb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBsZWF2Ze+8mui0neWhnuWwlOabsue6v++8jOWwhuWcqCBkdXJhdGlvbiDmnInmlYjml7blupTnlKjvvIzlnKggc3ByaW5nIOWKqOeUu+aXtuiiq+W/veeVpVxuICAgKi9cbiAgbGVhdmVFYXNlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogbGVhdmXvvJrlvLnlipsg4oCU4oCUIOWcqOeOsOWunuS4lueVjOS4reaYr+eUseadkOaWmeWSjOmSouWNt+WOmuW6pu+8iGNvaWwgdGhpY2tuZXNz77yJ6YCg5oiQ55qE44CC5by55Yqb6LaK5aSn77yM5by557Cn5Lya5pS257yp5b6X5pu05pyJ5Yqb77yM5Yqo55S75Lmf5Lya5Y+Y5b6X5rS75rO8XG4gICAqL1xuICBsZWF2ZVRlbnNpb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBsZWF2Ze+8muaRqeaTpuWKmyDigJTigJQg5pGp5pOm5Yqb6LaK6auY77yM5bCx6ZyA6KaB6LaK5aSa55qE5Yqb6K6p54mp5L2T6L+Q5Yqo77yM5Yqo55S75Lmf5Lya6LaK5oWi44CC5aaC5p6c5pGp5pOm5Yqb6Laz5aSf5L2O77yM54mp5L2T5Lya6L+Q5Yqo6LaF6L+H57uI54K577yM5Lqn55Sf5pWw5Liq5Zue5by55pWI5p6cXG4gICAqL1xuICBsZWF2ZUZyaWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogbGVhdmXvvJrotbfngrnnmoTkuIDkupvljp/lrZDnsbvlkI1cbiAgICovXG4gIGxlYXZlRnJvbTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGxlYXZl77ya57uI54K555qE5LiA5Lqb5Y6f5a2Q57G75ZCNXG4gICAqL1xuICBsZWF2ZVRvOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5YWD57Sg6L+b5Zy65YWl5Zy655qE5byA5YWzXG4gICAqL1xuICBzaG93OiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6ZmE5Yqg5qC35byPXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOiKgueCuVxuICAgKi9cbiAgdGFnOiBQcm9wVHlwZXMuYW55LFxufVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWZ0ZXJFbnRlcjogdW5kZWZpbmVkLFxuICBhZnRlckxlYXZlOiB1bmRlZmluZWQsXG4gIGFwcGVhcjogZmFsc2UsXG4gIGJlZm9yZUVudGVyOiB1bmRlZmluZWQsXG4gIGJlZm9yZUxlYXZlOiB1bmRlZmluZWQsXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGVudGVyRGVsYXk6IHVuZGVmaW5lZCxcbiAgZW50ZXJEdXJhdGlvbjogdW5kZWZpbmVkLFxuICBlbnRlckVhc2U6IHVuZGVmaW5lZCxcbiAgZW50ZXJUZW5zaW9uOiB1bmRlZmluZWQsXG4gIGVudGVyRnJpY3Rpb246IHVuZGVmaW5lZCxcbiAgZW50ZXJGcm9tOiBcIlwiLFxuICBlbnRlclRvOiBcIlwiLFxuICBsZWF2ZURlbGF5OiB1bmRlZmluZWQsXG4gIGxlYXZlRHVyYXRpb246IHVuZGVmaW5lZCxcbiAgbGVhdmVFYXNlOiB1bmRlZmluZWQsXG4gIGxlYXZlVGVuc2lvbjogdW5kZWZpbmVkLFxuICBsZWF2ZUZyaWN0aW9uOiB1bmRlZmluZWQsXG4gIGxlYXZlRnJvbTogXCJcIixcbiAgbGVhdmVUbzogXCJcIixcbiAgc2hvdzogdHJ1ZSxcbiAgc3R5bGU6IHt9LFxuICB0YWc6IFwiZGl2XCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zaXRpb25cbiJdfQ==