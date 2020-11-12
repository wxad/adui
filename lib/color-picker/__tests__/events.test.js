"use strict";

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _testUtils = require("react-dom/test-utils");

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ColorPickerMounter = function (_Component) {
  _inherits(ColorPickerMounter, _Component);

  var _super = _createSuper(ColorPickerMounter);

  function ColorPickerMounter() {
    var _this;

    _classCallCheck(this, ColorPickerMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: "#07C160"
    };
    return _this;
  }

  _createClass(ColorPickerMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return _react["default"].createElement(_["default"], _extends({
        value: value,
        onChange: function onChange(val) {
          return _this2.setState({
            value: val
          });
        }
      }, this.props));
    }
  }]);

  return ColorPickerMounter;
}(_react.Component);

describe("ColorPicker", function () {
  beforeAll(function () {
    jest.useFakeTimers();
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: 160,
        height: 90,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: function toJSON() {}
      };
    });
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("其他事件验证", function () {
    var onFinishChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultValue: "#07C160",
      onFinishChange: onFinishChange,
      recentColors: ["#00BB9C"]
    }));
    var input = wrapper.find("input").at(0);
    input.simulate("change", {
      target: {
        value: "11"
      }
    });
    expect(wrapper.find("input").at(0).props().value).toBe("11");
    input.simulate("blur");
    expect(wrapper.find("input").at(0).props().value).toBe("07C160");
    input.simulate("change", {
      target: {
        value: "00BB9C"
      }
    });
    input.simulate("blur");
    expect(onFinishChange).toHaveBeenCalledWith("#00BB9C");
    wrapper.find("button").simulate("click");
    wrapper.find(".adui-cp-recent i").at(0).simulate("click");
    wrapper.find(".adui-cp-standard i").at(11).simulate("click");
    wrapper.find("button").simulate("click");
    jest.advanceTimersByTime(200);
    expect(onFinishChange).toHaveBeenCalledWith("#5BDEC8");
    wrapper.find("button").simulate("click");
    jest.advanceTimersByTime(350);
    var head0 = wrapper.find(".adui-cp-collapse-header").at(0);
    var head1 = wrapper.find(".adui-cp-collapse-header").at(1);
    var head2 = wrapper.find(".adui-cp-collapse-header").at(2);
    expect(wrapper.find(".adui-cp-collapse-content")).toHaveLength(2);
    head0.simulate("click");
    head2.simulate("click");
    head1.simulate("click");
    head2.simulate("click");
    wrapper.find("Slider").at(0).simulate("focus");
    wrapper.find("Slider").at(0).find(".adui-slider-handle").at(0).simulate("keyDown", {
      keyCode: _KeyCode["default"].RIGHT
    });
    expect(wrapper.find(".adui-cp").at(0).props()["data-value"]).toBe("#5BDECA");
    wrapper.find("Slider").at(1).simulate("focus");
    wrapper.find("Slider").at(1).find(".adui-slider-handle").at(0).simulate("keyDown", {
      keyCode: _KeyCode["default"].RIGHT
    });
    expect(wrapper.find(".adui-cp").at(0).props()["data-value"]).toBe("#59DECA");
    wrapper.find("Slider").at(2).simulate("focus");
    wrapper.find("Slider").at(2).find(".adui-slider-handle").at(0).simulate("keyDown", {
      keyCode: _KeyCode["default"].RIGHT
    });
    expect(wrapper.find(".adui-cp").at(0).props()["data-value"]).toBe("#5AE0CC");
    var map = {};
    window.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var classWrapper = (0, _enzyme.mount)(_react["default"].createElement(ColorPickerMounter, null));
    classWrapper.find("button").simulate("click");
    jest.advanceTimersByTime(10);
    (0, _testUtils.act)(function () {
      classWrapper.find(".adui-cp-collapse-header").at(1).simulate("click");
      jest.runAllTimers();
      classWrapper.update();
    });
    (0, _testUtils.act)(function () {
      classWrapper.find(".adui-cp-palette").at(0).simulate("mouseDown");
      map.mousemove({});
      map.mousemove({
        pageX: 10000,
        pageY: 0
      });
      jest.runAllTimers();
      classWrapper.update();
      expect(classWrapper.find(".adui-cp").at(0).props()["data-s"]).toBe(100);
      map.mousemove({
        pageX: -10000,
        pageY: 0
      });
      jest.runAllTimers();
      classWrapper.update();
      expect(classWrapper.find(".adui-cp").at(0).props()["data-s"]).toBe(0);
      map.mousemove({
        pageY: 10000,
        pageX: 0
      });
      jest.runAllTimers();
      classWrapper.update();
      expect(classWrapper.find(".adui-cp").at(0).props()["data-b"]).toBe(0);
      map.mousemove({
        pageY: -10000,
        pageX: 0
      });
      jest.runAllTimers();
      classWrapper.update();
      expect(classWrapper.find(".adui-cp").at(0).props()["data-b"]).toBe(100);
      map.mouseup({});
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL19fdGVzdHNfXy9ldmVudHMudGVzdC50c3giXSwibmFtZXMiOlsiQ29sb3JQaWNrZXJNb3VudGVyIiwic3RhdGUiLCJ2YWx1ZSIsInZhbCIsInNldFN0YXRlIiwicHJvcHMiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsImJlZm9yZUFsbCIsImplc3QiLCJ1c2VGYWtlVGltZXJzIiwiRWxlbWVudCIsInByb3RvdHlwZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZuIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ4IiwieSIsInRvSlNPTiIsImFmdGVyQWxsIiwidXNlUmVhbFRpbWVycyIsIml0Iiwib25GaW5pc2hDaGFuZ2UiLCJ3cmFwcGVyIiwiaW5wdXQiLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRhcmdldCIsImV4cGVjdCIsInRvQmUiLCJ0b0hhdmVCZWVuQ2FsbGVkV2l0aCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiLCJoZWFkMCIsImhlYWQxIiwiaGVhZDIiLCJ0b0hhdmVMZW5ndGgiLCJrZXlDb2RlIiwiUklHSFQiLCJtYXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjYiIsImNsYXNzV3JhcHBlciIsInJ1bkFsbFRpbWVycyIsInVwZGF0ZSIsIm1vdXNlbW92ZSIsInBhZ2VYIiwicGFnZVkiLCJtb3VzZXVwIl0sIm1hcHBpbmdzIjoiOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGtCOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLEtBQUssRUFBRTtBQURELEs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLFVBQ0NBLEtBREQsR0FDVyxLQUFLRCxLQURoQixDQUNDQyxLQUREO0FB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QUVHQyxFQUZILENBRU0sQ0FGTixFQUdHMUIsS0FISCxHQUdXLFFBSFgsQ0FESSxDQUFOLENBS0U4QixJQUxGLENBS08sR0FMUDtBQU9BUyxNQUFBQSxHQUFHLENBQUNXLE9BQUosQ0FBWSxFQUFaO0FBQ0QsS0FuREQ7QUFvREQsR0FwTEMsQ0FBRjtBQXFMRCxDQWhOTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5pbXBvcnQga2V5Q29kZSBmcm9tIFwicmMtdXRpbC9saWIvS2V5Q29kZVwiXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4uXCJcblxuY2xhc3MgQ29sb3JQaWNrZXJNb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IFwiIzA3QzE2MFwiLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbCB9KX1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcIkNvbG9yUGlja2VyXCIsICgpID0+IHtcbiAgYmVmb3JlQWxsKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwMDA2NjYzXG4gICAgICog6YCa6L+HIG1vY2sgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGDvvIzkuYvlkI7ov5DooYznmoTmiYDmnIkgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAg6YO95Lya6L+U5Zue6L+Z5ZCM5LiA5Liq5YC844CCXG4gICAgICovXG4gICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gamVzdC5mbigoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHRvSlNPTjogKCkgPT4ge30sXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIuWFtuS7luS6i+S7tumqjOivgVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25GaW5pc2hDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgZGVmYXVsdFZhbHVlPVwiIzA3QzE2MFwiXG4gICAgICAgIG9uRmluaXNoQ2hhbmdlPXtvbkZpbmlzaENoYW5nZX1cbiAgICAgICAgcmVjZW50Q29sb3JzPXtbXCIjMDBCQjlDXCJdfVxuICAgICAgLz5cbiAgICApXG4gICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5hdCgwKVxuXG4gICAgLy8g6aqM6K+BIGlucHV0IOS/ruaUueS4uumdnuazleWAvOWQju+8jOWcqCBibHVyIOaXtuS8mumHjee9rlxuICAgIGlucHV0LnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjExXCIgfSB9KVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICApLnRvQmUoXCIxMVwiKVxuICAgIGlucHV0LnNpbXVsYXRlKFwiYmx1clwiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICApLnRvQmUoXCIwN0MxNjBcIilcblxuICAgIGlucHV0LnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjAwQkI5Q1wiIH0gfSlcbiAgICBpbnB1dC5zaW11bGF0ZShcImJsdXJcIilcbiAgICBleHBlY3Qob25GaW5pc2hDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiIzAwQkI5Q1wiKVxuXG4gICAgd3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwLXJlY2VudCBpXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIuYWR1aS1jcC1zdGFuZGFyZCBpXCIpXG4gICAgICAuYXQoMTEpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIHdyYXBwZXIuZmluZChcImJ1dHRvblwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8g562J5b6FIDIwMG1zXG4gICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDIwMClcbiAgICBleHBlY3Qob25GaW5pc2hDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiIzVCREVDOFwiKVxuXG4gICAgLy8g5rWL6K+VIENvbGxhcHNlXG4gICAgd3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAvLyDnrYnlvoUgMzUwbXNcbiAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgIGNvbnN0IGhlYWQwID0gd3JhcHBlci5maW5kKFwiLmFkdWktY3AtY29sbGFwc2UtaGVhZGVyXCIpLmF0KDApXG4gICAgY29uc3QgaGVhZDEgPSB3cmFwcGVyLmZpbmQoXCIuYWR1aS1jcC1jb2xsYXBzZS1oZWFkZXJcIikuYXQoMSlcbiAgICBjb25zdCBoZWFkMiA9IHdyYXBwZXIuZmluZChcIi5hZHVpLWNwLWNvbGxhcHNlLWhlYWRlclwiKS5hdCgyKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCIuYWR1aS1jcC1jb2xsYXBzZS1jb250ZW50XCIpKS50b0hhdmVMZW5ndGgoMilcbiAgICBoZWFkMC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgaGVhZDIuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGhlYWQxLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBoZWFkMi5zaW11bGF0ZShcImNsaWNrXCIpXG5cbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIlNsaWRlclwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJmb2N1c1wiKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiU2xpZGVyXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5maW5kKFwiLmFkdWktc2xpZGVyLWhhbmRsZVwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJrZXlEb3duXCIsIHsga2V5Q29kZToga2V5Q29kZS5SSUdIVCB9KVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0JlKFwiIzVCREVDQVwiKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiU2xpZGVyXCIpXG4gICAgICAuYXQoMSlcbiAgICAgIC5zaW11bGF0ZShcImZvY3VzXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJTbGlkZXJcIilcbiAgICAgIC5hdCgxKVxuICAgICAgLmZpbmQoXCIuYWR1aS1zbGlkZXItaGFuZGxlXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImtleURvd25cIiwgeyBrZXlDb2RlOiBrZXlDb2RlLlJJR0hUIH0pXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvQmUoXCIjNTlERUNBXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJTbGlkZXJcIilcbiAgICAgIC5hdCgyKVxuICAgICAgLnNpbXVsYXRlKFwiZm9jdXNcIilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIlNsaWRlclwiKVxuICAgICAgLmF0KDIpXG4gICAgICAuZmluZChcIi5hZHVpLXNsaWRlci1oYW5kbGVcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwia2V5RG93blwiLCB7IGtleUNvZGU6IGtleUNvZGUuUklHSFQgfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgICkudG9CZShcIiM1QUUwQ0NcIilcblxuICAgIGNvbnN0IG1hcCA9IHt9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyID0gamVzdC5mbigoZXZlbnQsIGNiKSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtYXBbZXZlbnRdID0gY2JcbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NXcmFwcGVyID0gbW91bnQoPENvbG9yUGlja2VyTW91bnRlciAvPilcblxuICAgIGNsYXNzV3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMTApXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgY2xhc3NXcmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktY3AtY29sbGFwc2UtaGVhZGVyXCIpXG4gICAgICAgIC5hdCgxKVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgY2xhc3NXcmFwcGVyLnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICBjbGFzc1dyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1jcC1wYWxldHRlXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAuc2ltdWxhdGUoXCJtb3VzZURvd25cIilcblxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbWFwLm1vdXNlbW92ZSh7fSlcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG1hcC5tb3VzZW1vdmUoeyBwYWdlWDogMTAwMDAsIHBhZ2VZOiAwIH0pXG5cbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIGNsYXNzV3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICBjbGFzc1dyYXBwZXJcbiAgICAgICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKClbXCJkYXRhLXNcIl1cbiAgICAgICkudG9CZSgxMDApXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtYXAubW91c2Vtb3ZlKHsgcGFnZVg6IC0xMDAwMCwgcGFnZVk6IDAgfSlcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIGNsYXNzV3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICBjbGFzc1dyYXBwZXJcbiAgICAgICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKClbXCJkYXRhLXNcIl1cbiAgICAgICkudG9CZSgwKVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbWFwLm1vdXNlbW92ZSh7IHBhZ2VZOiAxMDAwMCwgcGFnZVg6IDAgfSlcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIGNsYXNzV3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICBjbGFzc1dyYXBwZXJcbiAgICAgICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKClbXCJkYXRhLWJcIl1cbiAgICAgICkudG9CZSgwKVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbWFwLm1vdXNlbW92ZSh7IHBhZ2VZOiAtMTAwMDAsIHBhZ2VYOiAwIH0pXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICBjbGFzc1dyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgY2xhc3NXcmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpW1wiZGF0YS1iXCJdXG4gICAgICApLnRvQmUoMTAwKVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbWFwLm1vdXNldXAoe30pXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=