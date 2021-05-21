import _regeneratorRuntime from "@babel/runtime/regenerator";

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

import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { animate } from "popmotion";
import { useIsInitialRender } from "../_util/hooks/use-is-initial-render";
import Memo from "./Memo";
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
  return useMemo(function () {
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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isToRender = _useState2[0],
      setIsToRender = _useState2[1];

  var initial = useIsInitialRender();
  var enterFromStyles = useSplitClassesToStyle(enterFrom);
  var enterToStyles = useSplitClassesToStyle(enterTo);
  var leaveFromStyles = useSplitClassesToStyle(leaveFrom);
  var leaveToStyles = useSplitClassesToStyle(leaveTo);
  var wrapperRef = useRef(null);
  var animatingIdRef = useRef("");
  var animatingPhase = useRef("");

  var animating = function () {
    var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(phase) {
      var currentAnimatingId, fromStyles, toStyles, duration, delay, tension, friction, promises;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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
                        var animateSave = animate(_objectSpread({
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
                      var animateSave = animate(_objectSpread({
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
    var _ref3 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(phase) {
      var returns;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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

  useEffect(function () {
    if (show) {
      setIsToRender(true);

      if (animatingPhase.current === "leave") {
        doAnimate("enter");
      }
    } else if (!initial) {
      doAnimate("leave");
    }
  }, [show]);
  useEffect(function () {
    if (isToRender && (!initial || appear)) {
      doAnimate("enter");
    }
  }, [isToRender]);

  if (!isToRender) {
    return null;
  }

  return React.createElement(TagName, _extends({
    ref: wrapperRef,
    style: _objectSpread({
      visibility: show && !isToRender ? "hidden" : "visible"
    }, style)
  }, otherProps), React.createElement(Memo, null, children));
};

Transition.propTypes = {
  afterEnter: PropTypes.any,
  afterLeave: PropTypes.any,
  appear: PropTypes.any,
  beforeEnter: PropTypes.any,
  beforeLeave: PropTypes.any,
  children: PropTypes.any,
  enterDelay: PropTypes.any,
  enterDuration: PropTypes.any,
  enterEase: PropTypes.any,
  enterTension: PropTypes.any,
  enterFriction: PropTypes.any,
  enterFrom: PropTypes.any,
  enterTo: PropTypes.any,
  leaveDelay: PropTypes.any,
  leaveDuration: PropTypes.any,
  leaveEase: PropTypes.any,
  leaveTension: PropTypes.any,
  leaveFriction: PropTypes.any,
  leaveFrom: PropTypes.any,
  leaveTo: PropTypes.any,
  show: PropTypes.any,
  style: PropTypes.any,
  tag: PropTypes.any
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
export default Transition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJhbnNpdGlvbi9UcmFuc2l0aW9uLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsImFuaW1hdGUiLCJ1c2VJc0luaXRpYWxSZW5kZXIiLCJNZW1vIiwiSFVORFJFRFMiLCJUUkFOU0ZPUk1TIiwiQU5JTUFURV9ESVNBQkxFRFMiLCJVTklUUyIsInJvdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwidXNlU3BsaXRDbGFzc2VzVG9TdHlsZSIsImNsYXNzZXMiLCJjbGFzc2VzU3BsaXRzIiwic3R5bGUiLCJmb3JFYWNoIiwibyIsImluZGV4Iiwic3BsaXRzIiwic3BsaXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwic3RhcnRzV2l0aCIsImluY2x1ZGVzIiwidHJhbnNmb3JtIiwidW5pdCIsInBhcnNlSW50IiwiVHJhbnNpdGlvbiIsImFmdGVyRW50ZXIiLCJhZnRlckxlYXZlIiwiYXBwZWFyIiwiYmVmb3JlRW50ZXIiLCJiZWZvcmVMZWF2ZSIsImNoaWxkcmVuIiwiZW50ZXJEZWxheSIsImVudGVyRHVyYXRpb24iLCJlbnRlckVhc2UiLCJlbnRlclRlbnNpb24iLCJlbnRlckZyaWN0aW9uIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlRGVsYXkiLCJsZWF2ZUR1cmF0aW9uIiwibGVhdmVFYXNlIiwibGVhdmVUZW5zaW9uIiwibGVhdmVGcmljdGlvbiIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJzaG93IiwidGFnIiwiVGFnTmFtZSIsIm90aGVyUHJvcHMiLCJpc1RvUmVuZGVyIiwic2V0SXNUb1JlbmRlciIsImluaXRpYWwiLCJlbnRlckZyb21TdHlsZXMiLCJlbnRlclRvU3R5bGVzIiwibGVhdmVGcm9tU3R5bGVzIiwibGVhdmVUb1N0eWxlcyIsIndyYXBwZXJSZWYiLCJhbmltYXRpbmdJZFJlZiIsImFuaW1hdGluZ1BoYXNlIiwiYW5pbWF0aW5nIiwicGhhc2UiLCJjdXJyZW50IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiY3VycmVudEFuaW1hdGluZ0lkIiwiZnJvbVN0eWxlcyIsInRvU3R5bGVzIiwiZHVyYXRpb24iLCJkZWxheSIsInRlbnNpb24iLCJmcmljdGlvbiIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJzZXRQcm9wZXJ0eSIsInByb21pc2VzIiwicHVzaCIsIlByb21pc2UiLCJyZXNvbHZlIiwidG8iLCJmcm9tIiwiZHVyYXRpb25PcHRpb24iLCJBcnJheSIsImlzQXJyYXkiLCJkZWxheU9wdGlvbiIsInRlbnNpb25PcHRpb24iLCJmcmljdGlvbk9wdGlvbiIsInR5cGUiLCJ1bmRlZmluZWQiLCJhZGRpdGlvbmFscyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJhbmltYXRlT3B0aW9ucyIsIk51bWJlciIsIm9uQ29tcGxldGUiLCJhbmltYXRlZCIsInRpbWVEZWxheSIsInIiLCJzZXRUaW1lb3V0IiwidGhlbiIsImFuaW1hdGVTYXZlIiwib25VcGRhdGUiLCJsYXRlc3QiLCJzdG9wIiwiYWxsIiwiZG9BbmltYXRlIiwicmV0dXJucyIsInZpc2liaWxpdHkiLCJwcm9wVHlwZXMiLCJhbnkiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLEVBQTJCQyxPQUEzQixFQUFvQ0MsTUFBcEMsRUFBNENDLFFBQTVDLFFBQTRELE9BQTVEO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE9BQVQsUUFBMEMsV0FBMUM7QUFDQSxTQUFTQyxrQkFBVCxRQUFtQyxzQ0FBbkM7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsU0FBckIsRUFBZ0MsU0FBaEMsQ0FBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcs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QyxFQUFBQSxTQUFTLEVBQUUsRUFuQmE7QUFvQnhCQyxFQUFBQSxPQUFPLEVBQUUsRUFwQmU7QUFxQnhCQyxFQUFBQSxJQUFJLEVBQUUsSUFyQmtCO0FBc0J4QmxDLEVBQUFBLEtBQUssRUFBRSxFQXRCaUI7QUF1QnhCbUMsRUFBQUEsR0FBRyxFQUFFO0FBdkJtQixDQUExQjtBQTBCQSxlQUFldEIsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25PcHRpb25zIH0gZnJvbSBcInBvcG1vdGlvblwiXG5pbXBvcnQgeyB1c2VJc0luaXRpYWxSZW5kZXIgfSBmcm9tIFwiLi4vX3V0aWwvaG9va3MvdXNlLWlzLWluaXRpYWwtcmVuZGVyXCJcbmltcG9ydCBNZW1vIGZyb20gXCIuL01lbW9cIlxuXG5jb25zdCBIVU5EUkVEUyA9IFtcIm9wYWNpdHlcIiwgXCJzY2FsZVwiLCBcInNjYWxlLXhcIiwgXCJzY2FsZS15XCJdXG5jb25zdCBUUkFOU0ZPUk1TID0gW1xuICBcInNjYWxlXCIsXG4gIFwicm90YXRlXCIsXG4gIFwic2NhbGUteFwiLFxuICBcInNjYWxlLXlcIixcbiAgXCJ0cmFuc2xhdGUteFwiLFxuICBcInRyYW5zbGF0ZS15XCIsXG5dXG5jb25zdCBBTklNQVRFX0RJU0FCTEVEUyA9IFtcInRyYW5zZm9ybVwiXVxuY29uc3QgVU5JVFM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gIHJvdGF0ZTogXCJkZWdcIixcbiAgd2lkdGg6IFwicHhcIixcbiAgaGVpZ2h0OiBcInB4XCIsXG59XG5cbmV4cG9ydCB0eXBlIFRFYXNlID0gXCJlYXNlLWluXCIgfCBcImVhc2Utb3V0XCJcblxuZXhwb3J0IHR5cGUgVFBoYXNlID0gXCJlbnRlclwiIHwgXCJsZWF2ZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zaXRpb25Qcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog57uT5p2fIGVudGVyIOaXtueahOWbnuiwg1xuICAgKi9cbiAgYWZ0ZXJFbnRlcj86ICgpID0+IHZvaWRcbiAgLyoqXG4gICAqIOe7k+adnyBsZWF2ZSDml7bnmoTlm57osINcbiAgICovXG4gIGFmdGVyTGVhdmU/OiAoKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDliJ3mrKEgbW91bnQg5pe25piv5ZCm6L+b6KGM5Yqo55S7XG4gICAqL1xuICBhcHBlYXI/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlvIDlp4sgZW50ZXIg5YmN55qE5Zue6LCDXG4gICAqL1xuICBiZWZvcmVFbnRlcj86ICgpID0+IHZvaWRcbiAgLyoqXG4gICAqIOW8gOWniyBsZWF2ZSDliY3nmoTlm57osINcbiAgICovXG4gIGJlZm9yZUxlYXZlPzogKCkgPT4gdm9pZFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICogZW50ZXLvvJrlu7bov59cbiAgICovXG4gIGVudGVyRGVsYXk/OiBudW1iZXIgfCBudW1iZXJbXVxuICAvKipcbiAgICogZW50ZXLvvJrmgLvkvZPml7bpl7TvvIzlvZPmnInmraQgUHJvcCDml7blsIblv73nlaUgc3ByaW5nIOebuOWFs+WxnuaAp++8jOWNsyBzdGlmZm5lc3Mg5ZKMIGRhbXBpbmdcbiAgICovXG4gIGVudGVyRHVyYXRpb24/OiBudW1iZXIgfCBudW1iZXJbXVxuICAvKipcbiAgICogZW50ZXLvvJrotJ3loZ7lsJTmm7Lnur/vvIzlsIblnKggZHVyYXRpb24g5pyJ5pWI5pe25bqU55So77yM5ZyoIHNwcmluZyDliqjnlLvml7booqvlv73nlaVcbiAgICovXG4gIGVudGVyRWFzZT86IFRFYXNlIHwgVEVhc2VbXVxuICAvKipcbiAgICogZW50ZXLvvJrlvLnlipsg4oCU4oCUIOWcqOeOsOWunuS4lueVjOS4reaYr+eUseadkOaWmeWSjOmSouWNt+WOmuW6pu+8iGNvaWwgdGhpY2tuZXNz77yJ6YCg5oiQ55qE44CC5by55Yqb6LaK5aSn77yM5by557Cn5Lya5pS257yp5b6X5pu05pyJ5Yqb77yM5Yqo55S75Lmf5Lya5Y+Y5b6X5rS75rO8XG4gICAqL1xuICBlbnRlclRlbnNpb24/OiBudW1iZXIgfCBudW1iZXJbXVxuICAvKipcbiAgICogZW50ZXLvvJrmkanmk6blipsg4oCU4oCUIOaRqeaTpuWKm+i2iumrmO+8jOWwsemcgOimgei2iuWkmueahOWKm+iuqeeJqeS9k+i/kOWKqO+8jOWKqOeUu+S5n+S8mui2iuaFouOAguWmguaenOaRqeaTpuWKm+i2s+Wkn+S9ju+8jOeJqeS9k+S8mui/kOWKqOi2hei/h+e7iOeCue+8jOS6p+eUn+aVsOS4quWbnuW8ueaViOaenFxuICAgKi9cbiAgZW50ZXJGcmljdGlvbj86IG51bWJlciB8IG51bWJlcltdXG4gIC8qKlxuICAgKiBlbnRlcu+8mui1t+eCueeahOS4gOS6m+WOn+WtkOexu+WQjVxuICAgKi9cbiAgZW50ZXJGcm9tPzogc3RyaW5nIHwgc3RyaW5nW11cbiAgLyoqXG4gICAqIGVudGVy77ya57uI54K555qE5LiA5Lqb5Y6f5a2Q57G75ZCNXG4gICAqL1xuICBlbnRlclRvPzogc3RyaW5nIHwgc3RyaW5nW11cbiAgLyoqXG4gICAqIGxlYXZl77ya5bu26L+fXG4gICAqL1xuICBsZWF2ZURlbGF5PzogbnVtYmVyIHwgbnVtYmVyW11cbiAgLyoqXG4gICAqIGxlYXZl77ya5oC75L2T5pe26Ze077yM5b2T5pyJ5q2kIFByb3Ag5pe25bCG5b+955WlIHNwcmluZyDnm7jlhbPlsZ7mgKfvvIzljbMgc3RpZmZuZXNzIOWSjCBkYW1waW5nXG4gICAqL1xuICBsZWF2ZUR1cmF0aW9uPzogbnVtYmVyIHwgbnVtYmVyW11cbiAgLyoqXG4gICAqIGxlYXZl77ya6LSd5aGe5bCU5puy57q/77yM5bCG5ZyoIGR1cmF0aW9uIOacieaViOaXtuW6lOeUqO+8jOWcqCBzcHJpbmcg5Yqo55S75pe26KKr5b+955WlXG4gICAqL1xuICBsZWF2ZUVhc2U/OiBURWFzZSB8IFRFYXNlW11cbiAgLyoqXG4gICAqIGxlYXZl77ya5by55YqbIOKAlOKAlCDlnKjnjrDlrp7kuJbnlYzkuK3mmK/nlLHmnZDmlpnlkozpkqLljbfljprluqbvvIhjb2lsIHRoaWNrbmVzc++8iemAoOaIkOeahOOAguW8ueWKm+i2iuWkp++8jOW8ueewp+S8muaUtue8qeW+l+abtOacieWKm++8jOWKqOeUu+S5n+S8muWPmOW+l+a0u+azvFxuICAgKi9cbiAgbGVhdmVUZW5zaW9uPzogbnVtYmVyIHwgbnVtYmVyW11cbiAgLyoqXG4gICAqIGxlYXZl77ya5pGp5pOm5YqbIOKAlOKAlCDmkanmk6blipvotorpq5jvvIzlsLHpnIDopoHotorlpJrnmoTlipvorqnniankvZPov5DliqjvvIzliqjnlLvkuZ/kvJrotormhaLjgILlpoLmnpzmkanmk6blipvotrPlpJ/kvY7vvIzniankvZPkvJrov5DliqjotoXov4fnu4jngrnvvIzkuqfnlJ/mlbDkuKrlm57lvLnmlYjmnpxcbiAgICovXG4gIGxlYXZlRnJpY3Rpb24/OiBudW1iZXIgfCBudW1iZXJbXVxuICAvKipcbiAgICogbGVhdmXvvJrotbfngrnnmoTkuIDkupvljp/lrZDnsbvlkI1cbiAgICovXG4gIGxlYXZlRnJvbT86IHN0cmluZyB8IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBsZWF2Ze+8mue7iOeCueeahOS4gOS6m+WOn+WtkOexu+WQjVxuICAgKi9cbiAgbGVhdmVUbz86IHN0cmluZyB8IHN0cmluZ1tdXG4gIC8qKlxuICAgKiDlhYPntKDov5vlnLrlhaXlnLrnmoTlvIDlhbNcbiAgICovXG4gIHNob3c/OiBib29sZWFuXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog6IqC54K5XG4gICAqL1xuICB0YWc/OiBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHNcbn1cblxuLy8gZXhwb3J0IHR5cGUgVFJlbmRlclN0YXRlID0gXCJtb3VudGVkXCIgfCBcInVubW91bnRlZFwiXG5cbnR5cGUgVFN0eWxlID0ge1xuICBba2V5OiBzdHJpbmddOiB7IHZhbHVlOiBSZWFjdC5SZWFjdFRleHQ7IHVuaXQ/OiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfVxufVxuXG50eXBlIFByb21pc2VSZXR1cm4gPSB7IHByb3BlcnR5OiBzdHJpbmc7IGFuaW1hdGVkOiBib29sZWFuIH1cblxuY29uc3QgdXNlU3BsaXRDbGFzc2VzVG9TdHlsZSA9IChjbGFzc2VzOiBzdHJpbmcgfCBzdHJpbmdbXSA9IFwiXCIpOiBUU3R5bGUgPT4ge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY2xhc3Nlc1NwbGl0cyA9IHR5cGVvZiBjbGFzc2VzID09PSBcInN0cmluZ1wiID8gW2NsYXNzZXNdIDogY2xhc3Nlc1xuICAgIGNvbnN0IHN0eWxlOiBUU3R5bGUgPSB7fVxuICAgIGNsYXNzZXNTcGxpdHMuZm9yRWFjaCgobywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHNwbGl0cyA9IG8uc3BsaXQoXCItXCIpXG4gICAgICBsZXQgcHJvcGVydHlcbiAgICAgIGxldCB2YWx1ZVxuICAgICAgLyoqXG4gICAgICAgKiAtIOW8gOWktOS4uui0n+WAvFxuICAgICAgICovXG4gICAgICBpZiAoby5zdGFydHNXaXRoKFwiLVwiKSkge1xuICAgICAgICA7WywgcHJvcGVydHksIHZhbHVlXSA9IHNwbGl0c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgO1twcm9wZXJ0eSwgdmFsdWVdID0gc3BsaXRzXG4gICAgICB9XG4gICAgICBpZiAoVFJBTlNGT1JNUy5pbmNsdWRlcyhwcm9wZXJ0eSkpIHtcbiAgICAgICAgaWYgKCFzdHlsZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICBzdHlsZVtcIi0tYWR1aS10cmFuc2xhdGUteFwiXSA9IHsgdmFsdWU6IDAsIGluZGV4IH1cbiAgICAgICAgICBzdHlsZVtcIi0tYWR1aS10cmFuc2xhdGUteVwiXSA9IHsgdmFsdWU6IDAsIGluZGV4IH1cbiAgICAgICAgICBzdHlsZVtcIi0tYWR1aS1yb3RhdGVcIl0gPSB7IHZhbHVlOiAwLCB1bml0OiBcImRlZ1wiLCBpbmRleCB9XG4gICAgICAgICAgc3R5bGVbXCItLWFkdWktc2tldy14XCJdID0geyB2YWx1ZTogMCwgaW5kZXggfVxuICAgICAgICAgIHN0eWxlW1wiLS1hZHVpLXNrZXcteVwiXSA9IHsgdmFsdWU6IDAsIGluZGV4IH1cbiAgICAgICAgICBzdHlsZVtcIi0tYWR1aS1zY2FsZS14XCJdID0geyB2YWx1ZTogMSwgaW5kZXggfVxuICAgICAgICAgIHN0eWxlW1wiLS1hZHVpLXNjYWxlLXlcIl0gPSB7IHZhbHVlOiAxLCBpbmRleCB9XG4gICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgIFwidHJhbnNsYXRlWCh2YXIoLS1hZHVpLXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS1hZHVpLXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLWFkdWktcm90YXRlKSkgc2tld1godmFyKC0tYWR1aS1za2V3LXgpKSBza2V3WSh2YXIoLS1hZHVpLXNrZXcteSkpIHNjYWxlWCh2YXIoLS1hZHVpLXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tYWR1aS1zY2FsZS15KSlcIixcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgY2FzZSBcInNjYWxlXCI6XG4gICAgICAgICAgICBzdHlsZVtcIi0tYWR1aS1zY2FsZS14XCJdID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VJbnQodmFsdWUsIDEwKSAvIDEwMCxcbiAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZVtcIi0tYWR1aS1zY2FsZS15XCJdID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VJbnQodmFsdWUsIDEwKSAvIDEwMCxcbiAgICAgICAgICAgICAgdW5pdDogXCJcIixcbiAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgXCJyb3RhdGVcIjpcbiAgICAgICAgICAgIHN0eWxlW1wiLS1hZHVpLXJvdGF0ZVwiXSA9IHsgdmFsdWUsIHVuaXQ6IFwiZGVnXCIsIGluZGV4IH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9IHtcbiAgICAgICAgICB2YWx1ZTogSFVORFJFRFMuaW5jbHVkZXMocHJvcGVydHkpXG4gICAgICAgICAgICA/IHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDBcbiAgICAgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgdW5pdDogVU5JVFNbcHJvcGVydHldIHx8IFwiXCIsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzdHlsZVxuICB9LCBbY2xhc3Nlc10pXG59XG5cbi8qKlxuICog5Yqo5pWIXG4gKi9cbmNvbnN0IFRyYW5zaXRpb246IFJlYWN0LkZDPElUcmFuc2l0aW9uUHJvcHM+ID0gKHtcbiAgYWZ0ZXJFbnRlcixcbiAgYWZ0ZXJMZWF2ZSxcbiAgYXBwZWFyLFxuICBiZWZvcmVFbnRlcixcbiAgYmVmb3JlTGVhdmUsXG4gIGNoaWxkcmVuLFxuICBlbnRlckRlbGF5LFxuICBlbnRlckR1cmF0aW9uLFxuICBlbnRlckVhc2UsXG4gIGVudGVyVGVuc2lvbixcbiAgZW50ZXJGcmljdGlvbixcbiAgZW50ZXJGcm9tLFxuICBlbnRlclRvLFxuICBsZWF2ZURlbGF5LFxuICBsZWF2ZUR1cmF0aW9uLFxuICBsZWF2ZUVhc2UsXG4gIGxlYXZlVGVuc2lvbixcbiAgbGVhdmVGcmljdGlvbixcbiAgbGVhdmVGcm9tLFxuICBsZWF2ZVRvLFxuICBzaG93LFxuICBzdHlsZSA9IHt9LFxuICB0YWc6IFRhZ05hbWUgPSBcInNwYW5cIixcbiAgLi4ub3RoZXJQcm9wc1xufTogSVRyYW5zaXRpb25Qcm9wcykgPT4ge1xuICBjb25zdCBbaXNUb1JlbmRlciwgc2V0SXNUb1JlbmRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaW5pdGlhbCA9IHVzZUlzSW5pdGlhbFJlbmRlcigpXG4gIGNvbnN0IGVudGVyRnJvbVN0eWxlcyA9IHVzZVNwbGl0Q2xhc3Nlc1RvU3R5bGUoZW50ZXJGcm9tKVxuICBjb25zdCBlbnRlclRvU3R5bGVzID0gdXNlU3BsaXRDbGFzc2VzVG9TdHlsZShlbnRlclRvKVxuICBjb25zdCBsZWF2ZUZyb21TdHlsZXMgPSB1c2VTcGxpdENsYXNzZXNUb1N0eWxlKGxlYXZlRnJvbSlcbiAgY29uc3QgbGVhdmVUb1N0eWxlcyA9IHVzZVNwbGl0Q2xhc3Nlc1RvU3R5bGUobGVhdmVUbylcbiAgY29uc3Qgd3JhcHBlclJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbClcbiAgY29uc3QgYW5pbWF0aW5nSWRSZWYgPSB1c2VSZWYoXCJcIilcbiAgY29uc3QgYW5pbWF0aW5nUGhhc2UgPSB1c2VSZWYoXCJcIilcblxuICBjb25zdCBhbmltYXRpbmcgPSBhc3luYyAocGhhc2U6IFRQaGFzZSkgPT4ge1xuICAgIGFuaW1hdGluZ0lkUmVmLmN1cnJlbnQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMywgOClcbiAgICBjb25zdCBjdXJyZW50QW5pbWF0aW5nSWQgPSBhbmltYXRpbmdJZFJlZi5jdXJyZW50XG4gICAgY29uc3QgZnJvbVN0eWxlcyA9IHBoYXNlID09PSBcImVudGVyXCIgPyBlbnRlckZyb21TdHlsZXMgOiBsZWF2ZUZyb21TdHlsZXNcbiAgICBjb25zdCB0b1N0eWxlcyA9IHBoYXNlID09PSBcImVudGVyXCIgPyBlbnRlclRvU3R5bGVzIDogbGVhdmVUb1N0eWxlc1xuICAgIGNvbnN0IGR1cmF0aW9uID0gcGhhc2UgPT09IFwiZW50ZXJcIiA/IGVudGVyRHVyYXRpb24gOiBsZWF2ZUR1cmF0aW9uXG4gICAgY29uc3QgZGVsYXkgPSBwaGFzZSA9PT0gXCJlbnRlclwiID8gZW50ZXJEZWxheSA6IGxlYXZlRGVsYXlcbiAgICBjb25zdCB0ZW5zaW9uID0gcGhhc2UgPT09IFwiZW50ZXJcIiA/IGVudGVyVGVuc2lvbiA6IGxlYXZlVGVuc2lvblxuICAgIGNvbnN0IGZyaWN0aW9uID0gcGhhc2UgPT09IFwiZW50ZXJcIiA/IGVudGVyRnJpY3Rpb24gOiBsZWF2ZUZyaWN0aW9uXG4gICAgaWYgKHBoYXNlID09PSBcImVudGVyXCIpIHtcbiAgICAgIGlmIChiZWZvcmVFbnRlcikge1xuICAgICAgICBiZWZvcmVFbnRlcigpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChiZWZvcmVMZWF2ZSkge1xuICAgICAgYmVmb3JlTGVhdmUoKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKGZyb21TdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCA9IFwiXCIgfSA9IGZyb21TdHlsZXNba2V5XVxuICAgICAgaWYgKHdyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSArIHVuaXQpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPFByb21pc2VSZXR1cm4+W10gPSBbXVxuICAgIE9iamVjdC5rZXlzKHRvU3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZTogdG8sIHVuaXQgPSBcIlwiLCBpbmRleCB9ID0gdG9TdHlsZXNba2V5XVxuICAgICAgICAgIGNvbnN0IHsgdmFsdWU6IGZyb20gfSA9IGZyb21TdHlsZXNba2V5XVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGZyb21TdHlsZXNba2V5XSAmJlxuICAgICAgICAgICAgZnJvbSAhPT0gdG8gJiZcbiAgICAgICAgICAgICFBTklNQVRFX0RJU0FCTEVEUy5pbmNsdWRlcyhrZXkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBlYXNlID0gQXJyYXkuaXNBcnJheShlbnRlckVhc2UpID8gZW50ZXJFYXNlW2luZGV4XSA6IGVudGVyRWFzZVxuICAgICAgICAgICAgY29uc3QgZHVyYXRpb25PcHRpb24gPSBBcnJheS5pc0FycmF5KGR1cmF0aW9uKVxuICAgICAgICAgICAgICA/IGR1cmF0aW9uW2luZGV4XVxuICAgICAgICAgICAgICA6IGR1cmF0aW9uXG4gICAgICAgICAgICBjb25zdCBkZWxheU9wdGlvbiA9IEFycmF5LmlzQXJyYXkoZGVsYXkpID8gZGVsYXlbaW5kZXhdIDogZGVsYXlcbiAgICAgICAgICAgIGNvbnN0IHRlbnNpb25PcHRpb24gPSBBcnJheS5pc0FycmF5KHRlbnNpb24pXG4gICAgICAgICAgICAgID8gdGVuc2lvbltpbmRleF1cbiAgICAgICAgICAgICAgOiB0ZW5zaW9uXG4gICAgICAgICAgICBjb25zdCBmcmljdGlvbk9wdGlvbiA9IEFycmF5LmlzQXJyYXkoZnJpY3Rpb24pXG4gICAgICAgICAgICAgID8gZnJpY3Rpb25baW5kZXhdXG4gICAgICAgICAgICAgIDogZnJpY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBkdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gXCJzcHJpbmdcIiA6IFwia2V5ZnJhbWVzXCJcbiAgICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxzID1cbiAgICAgICAgICAgICAgdHlwZSA9PT0gXCJzcHJpbmdcIlxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IHRlbnNpb25PcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IGZyaWN0aW9uT3B0aW9uLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25PcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIC8vIGVhc2VcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVPcHRpb25zOiBBbmltYXRpb25PcHRpb25zPG51bWJlcj4gPSB7XG4gICAgICAgICAgICAgIGZyb206IE51bWJlcihmcm9tKSxcbiAgICAgICAgICAgICAgdG86IE51bWJlcih0byksXG4gICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFuaW1hdGluZ0lkID09PSBhbmltYXRpbmdJZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHsgcHJvcGVydHk6IGtleSwgYW5pbWF0ZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIC4uLmFkZGl0aW9uYWxzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlbGF5T3B0aW9uKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVEZWxheSA9IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIGRlbGF5T3B0aW9uKSlcbiAgICAgICAgICAgICAgdGltZURlbGF5LnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVTYXZlID0gYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICBvblVwZGF0ZTogKGxhdGVzdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFuaW1hdGluZ0lkICE9PSBhbmltYXRpbmdJZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNhdmUuc3RvcCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXBwZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJSZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIGxhdGVzdCArIHVuaXQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAuLi5hbmltYXRlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYW5pbWF0ZVNhdmUgPSBhbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKGxhdGVzdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRBbmltYXRpbmdJZCAhPT0gYW5pbWF0aW5nSWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2F2ZS5zdG9wKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICh3cmFwcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KGtleSwgbGF0ZXN0ICsgdW5pdClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC4uLmFuaW1hdGVPcHRpb25zLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAod3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICB3cmFwcGVyUmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB0byArIHVuaXQpXG4gICAgICAgICAgICByZXNvbHZlKHsgcHJvcGVydHk6IGtleSwgYW5pbWF0ZWQ6IGZhbHNlIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuICB9XG5cbiAgY29uc3QgZG9BbmltYXRlID0gYXN5bmMgKHBoYXNlOiBUUGhhc2UpID0+IHtcbiAgICBhbmltYXRpbmdQaGFzZS5jdXJyZW50ID0gcGhhc2VcbiAgICBpZiAocGhhc2UgPT09IFwiZW50ZXJcIikge1xuICAgICAgY29uc3QgcmV0dXJucyA9IGF3YWl0IGFuaW1hdGluZyhcImVudGVyXCIpXG4gICAgICByZXR1cm5zLmZvckVhY2goKHsgcHJvcGVydHkgfSkgPT4ge1xuICAgICAgICBpZiAod3JhcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgd3JhcHBlclJlZi5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBudWxsKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGFmdGVyRW50ZXIpIHtcbiAgICAgICAgYW5pbWF0aW5nUGhhc2UuY3VycmVudCA9IFwiZW50ZXJlZFwiXG4gICAgICAgIGFmdGVyRW50ZXIoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBhbmltYXRpbmcoXCJsZWF2ZVwiKVxuICAgICAgc2V0SXNUb1JlbmRlcihmYWxzZSlcbiAgICAgIGlmIChhZnRlckxlYXZlKSB7XG4gICAgICAgIGFuaW1hdGluZ1BoYXNlLmN1cnJlbnQgPSBcImxlYXZlZFwiXG4gICAgICAgIGFmdGVyTGVhdmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNob3cpIHtcbiAgICAgIHNldElzVG9SZW5kZXIodHJ1ZSlcbiAgICAgIGlmIChhbmltYXRpbmdQaGFzZS5jdXJyZW50ID09PSBcImxlYXZlXCIpIHtcbiAgICAgICAgZG9BbmltYXRlKFwiZW50ZXJcIilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpbml0aWFsKSB7XG4gICAgICBkb0FuaW1hdGUoXCJsZWF2ZVwiKVxuICAgIH1cbiAgfSwgW3Nob3ddKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLyoqXG4gICAgICog5Yy65YiGIGVudGVyIOWSjCBhcHBlYXJcbiAgICAgKi9cbiAgICBpZiAoaXNUb1JlbmRlciAmJiAoIWluaXRpYWwgfHwgYXBwZWFyKSkge1xuICAgICAgZG9BbmltYXRlKFwiZW50ZXJcIilcbiAgICB9XG4gIH0sIFtpc1RvUmVuZGVyXSlcblxuICBpZiAoIWlzVG9SZW5kZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgPFRhZ05hbWVcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJlZj17d3JhcHBlclJlZn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHZpc2liaWxpdHk6IHNob3cgJiYgIWlzVG9SZW5kZXIgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgID5cbiAgICAgIDxNZW1vPntjaGlsZHJlbn08L01lbW8+XG4gICAgPC9UYWdOYW1lPlxuICApXG59XG5cblRyYW5zaXRpb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog57uT5p2fIGVudGVyIOaXtueahOWbnuiwg1xuICAgKi9cbiAgYWZ0ZXJFbnRlcjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOe7k+adnyBsZWF2ZSDml7bnmoTlm57osINcbiAgICovXG4gIGFmdGVyTGVhdmU6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDliJ3mrKEgbW91bnQg5pe25piv5ZCm6L+b6KGM5Yqo55S7XG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlvIDlp4sgZW50ZXIg5YmN55qE5Zue6LCDXG4gICAqL1xuICBiZWZvcmVFbnRlcjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIOW8gOWniyBsZWF2ZSDliY3nmoTlm57osINcbiAgICovXG4gIGJlZm9yZUxlYXZlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGVudGVy77ya5bu26L+fXG4gICAqL1xuICBlbnRlckRlbGF5OiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogZW50ZXLvvJrmgLvkvZPml7bpl7TvvIzlvZPmnInmraQgUHJvcCDml7blsIblv73nlaUgc3ByaW5nIOebuOWFs+WxnuaAp++8jOWNsyBzdGlmZm5lc3Mg5ZKMIGRhbXBpbmdcbiAgICovXG4gIGVudGVyRHVyYXRpb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBlbnRlcu+8mui0neWhnuWwlOabsue6v++8jOWwhuWcqCBkdXJhdGlvbiDmnInmlYjml7blupTnlKjvvIzlnKggc3ByaW5nIOWKqOeUu+aXtuiiq+W/veeVpVxuICAgKi9cbiAgZW50ZXJFYXNlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogZW50ZXLvvJrlvLnlipsg4oCU4oCUIOWcqOeOsOWunuS4lueVjOS4reaYr+eUseadkOaWmeWSjOmSouWNt+WOmuW6pu+8iGNvaWwgdGhpY2tuZXNz77yJ6YCg5oiQ55qE44CC5by55Yqb6LaK5aSn77yM5by557Cn5Lya5pS257yp5b6X5pu05pyJ5Yqb77yM5Yqo55S75Lmf5Lya5Y+Y5b6X5rS75rO8XG4gICAqL1xuICBlbnRlclRlbnNpb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBlbnRlcu+8muaRqeaTpuWKmyDigJTigJQg5pGp5pOm5Yqb6LaK6auY77yM5bCx6ZyA6KaB6LaK5aSa55qE5Yqb6K6p54mp5L2T6L+Q5Yqo77yM5Yqo55S75Lmf5Lya6LaK5oWi44CC5aaC5p6c5pGp5pOm5Yqb6Laz5aSf5L2O77yM54mp5L2T5Lya6L+Q5Yqo6LaF6L+H57uI54K577yM5Lqn55Sf5pWw5Liq5Zue5by55pWI5p6cXG4gICAqL1xuICBlbnRlckZyaWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogZW50ZXLvvJrotbfngrnnmoTkuIDkupvljp/lrZDnsbvlkI1cbiAgICovXG4gIGVudGVyRnJvbTogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGVudGVy77ya57uI54K555qE5LiA5Lqb5Y6f5a2Q57G75ZCNXG4gICAqL1xuICBlbnRlclRvOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogbGVhdmXvvJrlu7bov59cbiAgICovXG4gIGxlYXZlRGVsYXk6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBsZWF2Ze+8muaAu+S9k+aXtumXtO+8jOW9k+acieatpCBQcm9wIOaXtuWwhuW/veeVpSBzcHJpbmcg55u45YWz5bGe5oCn77yM5Y2zIHN0aWZmbmVzcyDlkowgZGFtcGluZ1xuICAgKi9cbiAgbGVhdmVEdXJhdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGxlYXZl77ya6LSd5aGe5bCU5puy57q/77yM5bCG5ZyoIGR1cmF0aW9uIOacieaViOaXtuW6lOeUqO+8jOWcqCBzcHJpbmcg5Yqo55S75pe26KKr5b+955WlXG4gICAqL1xuICBsZWF2ZUVhc2U6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBsZWF2Ze+8muW8ueWKmyDigJTigJQg5Zyo546w5a6e5LiW55WM5Lit5piv55Sx5p2Q5paZ5ZKM6ZKi5Y235Y6a5bqm77yIY29pbCB0aGlja25lc3PvvInpgKDmiJDnmoTjgILlvLnlipvotorlpKfvvIzlvLnnsKfkvJrmlLbnvKnlvpfmm7TmnInlipvvvIzliqjnlLvkuZ/kvJrlj5jlvpfmtLvms7xcbiAgICovXG4gIGxlYXZlVGVuc2lvbjogUHJvcFR5cGVzLmFueSxcbiAgLyoqXG4gICAqIGxlYXZl77ya5pGp5pOm5YqbIOKAlOKAlCDmkanmk6blipvotorpq5jvvIzlsLHpnIDopoHotorlpJrnmoTlipvorqnniankvZPov5DliqjvvIzliqjnlLvkuZ/kvJrotormhaLjgILlpoLmnpzmkanmk6blipvotrPlpJ/kvY7vvIzniankvZPkvJrov5DliqjotoXov4fnu4jngrnvvIzkuqfnlJ/mlbDkuKrlm57lvLnmlYjmnpxcbiAgICovXG4gIGxlYXZlRnJpY3Rpb246IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBsZWF2Ze+8mui1t+eCueeahOS4gOS6m+WOn+WtkOexu+WQjVxuICAgKi9cbiAgbGVhdmVGcm9tOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogbGVhdmXvvJrnu4jngrnnmoTkuIDkupvljp/lrZDnsbvlkI1cbiAgICovXG4gIGxlYXZlVG86IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlhYPntKDov5vlnLrlhaXlnLrnmoTlvIDlhbNcbiAgICovXG4gIHNob3c6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDpmYTliqDmoLflvI9cbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog6IqC54K5XG4gICAqL1xuICB0YWc6IFByb3BUeXBlcy5hbnksXG59XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBhZnRlckVudGVyOiB1bmRlZmluZWQsXG4gIGFmdGVyTGVhdmU6IHVuZGVmaW5lZCxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgYmVmb3JlRW50ZXI6IHVuZGVmaW5lZCxcbiAgYmVmb3JlTGVhdmU6IHVuZGVmaW5lZCxcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgZW50ZXJEZWxheTogdW5kZWZpbmVkLFxuICBlbnRlckR1cmF0aW9uOiB1bmRlZmluZWQsXG4gIGVudGVyRWFzZTogdW5kZWZpbmVkLFxuICBlbnRlclRlbnNpb246IHVuZGVmaW5lZCxcbiAgZW50ZXJGcmljdGlvbjogdW5kZWZpbmVkLFxuICBlbnRlckZyb206IFwiXCIsXG4gIGVudGVyVG86IFwiXCIsXG4gIGxlYXZlRGVsYXk6IHVuZGVmaW5lZCxcbiAgbGVhdmVEdXJhdGlvbjogdW5kZWZpbmVkLFxuICBsZWF2ZUVhc2U6IHVuZGVmaW5lZCxcbiAgbGVhdmVUZW5zaW9uOiB1bmRlZmluZWQsXG4gIGxlYXZlRnJpY3Rpb246IHVuZGVmaW5lZCxcbiAgbGVhdmVGcm9tOiBcIlwiLFxuICBsZWF2ZVRvOiBcIlwiLFxuICBzaG93OiB0cnVlLFxuICBzdHlsZToge30sXG4gIHRhZzogXCJkaXZcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvblxuIl19