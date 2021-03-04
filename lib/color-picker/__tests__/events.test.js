"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _testUtils = require("react-dom/test-utils");

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL19fdGVzdHNfXy9ldmVudHMudGVzdC50c3giXSwibmFtZXMiOlsiQ29sb3JQaWNrZXJNb3VudGVyIiwic3RhdGUiLCJ2YWx1ZSIsInZhbCIsInNldFN0YXRlIiwicHJvcHMiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsImJlZm9yZUFsbCIsImplc3QiLCJ1c2VGYWtlVGltZXJzIiwiRWxlbWVudCIsInByb3RvdHlwZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZuIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ4IiwieSIsInRvSlNPTiIsImFmdGVyQWxsIiwidXNlUmVhbFRpbWVycyIsIml0Iiwib25GaW5pc2hDaGFuZ2UiLCJ3cmFwcGVyIiwiaW5wdXQiLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRhcmdldCIsImV4cGVjdCIsInRvQmUiLCJ0b0hhdmVCZWVuQ2FsbGVkV2l0aCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiLCJoZWFkMCIsImhlYWQxIiwiaGVhZDIiLCJ0b0hhdmVMZW5ndGgiLCJrZXlDb2RlIiwiUklHSFQiLCJtYXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjYiIsImNsYXNzV3JhcHBlciIsInJ1bkFsbFRpbWVycyIsInVwZGF0ZSIsIm1vdXNlbW92ZSIsInBhZ2VYIiwicGFnZVkiLCJtb3VzZXVwIl0sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxrQjs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNOQyxNQUFBQSxLQUFLLEVBQUU7QUFERCxLOzs7Ozs7NkJBSUM7QUFBQTs7QUFBQSxVQUNDQSxLQURELEdBQ1csS0FBS0QsS0FEaEIsQ0FDQ0MsS0FERDtBQUVQLGFBQ0UsZ0NBQUMsWUFBRDtBQUNFLFFB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LEtBSEgsR0FHVyxRQUhYLENBREksQ0FBTixDQUtFOEIsSUFMRixDQUtPLEdBTFA7QUFPQVMsTUFBQUEsR0FBRyxDQUFDVyxPQUFKLENBQVksRUFBWjtBQUNELEtBbkREO0FBb0RELEdBcExDLENBQUY7QUFxTEQsQ0FoTk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgeyBhY3QgfSBmcm9tIFwicmVhY3QtZG9tL3Rlc3QtdXRpbHNcIlxuaW1wb3J0IGtleUNvZGUgZnJvbSBcInJjLXV0aWwvbGliL0tleUNvZGVcIlxuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuLlwiXG5cbmNsYXNzIENvbG9yUGlja2VyTW91bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIiMwN0MxNjBcIixcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSl9XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJDb2xvclBpY2tlclwiLCAoKSA9PiB7XG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MDAwNjY2M1xuICAgICAqIOmAmui/hyBtb2NrIGBnZXRCb3VuZGluZ0NsaWVudFJlY3Rg77yM5LmL5ZCO6L+Q6KGM55qE5omA5pyJIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIOmDveS8mui/lOWbnui/meWQjOS4gOS4quWAvOOAglxuICAgICAqL1xuICAgIEVsZW1lbnQucHJvdG90eXBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9IGplc3QuZm4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IDE2MCxcbiAgICAgICAgaGVpZ2h0OiA5MCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB0b0pTT046ICgpID0+IHt9LFxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCLlhbbku5bkuovku7bpqozor4FcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uRmluaXNoQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIlxuICAgICAgICBvbkZpbmlzaENoYW5nZT17b25GaW5pc2hDaGFuZ2V9XG4gICAgICAgIHJlY2VudENvbG9ycz17W1wiIzAwQkI5Q1wiXX1cbiAgICAgIC8+XG4gICAgKVxuICAgIGNvbnN0IGlucHV0ID0gd3JhcHBlci5maW5kKFwiaW5wdXRcIikuYXQoMClcblxuICAgIC8vIOmqjOivgSBpbnB1dCDkv67mlLnkuLrpnZ7ms5XlgLzlkI7vvIzlnKggYmx1ciDml7bkvJrph43nva5cbiAgICBpbnB1dC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxMVwiIH0gfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgKS50b0JlKFwiMTFcIilcbiAgICBpbnB1dC5zaW11bGF0ZShcImJsdXJcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgKS50b0JlKFwiMDdDMTYwXCIpXG5cbiAgICBpbnB1dC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIwMEJCOUNcIiB9IH0pXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJibHVyXCIpXG4gICAgZXhwZWN0KG9uRmluaXNoQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChcIiMwMEJCOUNcIilcblxuICAgIHdyYXBwZXIuZmluZChcImJ1dHRvblwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIuYWR1aS1jcC1yZWNlbnQgaVwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktY3Atc3RhbmRhcmQgaVwiKVxuICAgICAgLmF0KDExKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICB3cmFwcGVyLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vIOetieW+hSAyMDBtc1xuICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSgyMDApXG4gICAgZXhwZWN0KG9uRmluaXNoQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChcIiM1QkRFQzhcIilcblxuICAgIC8vIOa1i+ivlSBDb2xsYXBzZVxuICAgIHdyYXBwZXIuZmluZChcImJ1dHRvblwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8g562J5b6FIDM1MG1zXG4gICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICBjb25zdCBoZWFkMCA9IHdyYXBwZXIuZmluZChcIi5hZHVpLWNwLWNvbGxhcHNlLWhlYWRlclwiKS5hdCgwKVxuICAgIGNvbnN0IGhlYWQxID0gd3JhcHBlci5maW5kKFwiLmFkdWktY3AtY29sbGFwc2UtaGVhZGVyXCIpLmF0KDEpXG4gICAgY29uc3QgaGVhZDIgPSB3cmFwcGVyLmZpbmQoXCIuYWR1aS1jcC1jb2xsYXBzZS1oZWFkZXJcIikuYXQoMilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiLmFkdWktY3AtY29sbGFwc2UtY29udGVudFwiKSkudG9IYXZlTGVuZ3RoKDIpXG4gICAgaGVhZDAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGhlYWQyLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBoZWFkMS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgaGVhZDIuc2ltdWxhdGUoXCJjbGlja1wiKVxuXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJTbGlkZXJcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiZm9jdXNcIilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIlNsaWRlclwiKVxuICAgICAgLmF0KDApXG4gICAgICAuZmluZChcIi5hZHVpLXNsaWRlci1oYW5kbGVcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwia2V5RG93blwiLCB7IGtleUNvZGU6IGtleUNvZGUuUklHSFQgfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgICkudG9CZShcIiM1QkRFQ0FcIilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIlNsaWRlclwiKVxuICAgICAgLmF0KDEpXG4gICAgICAuc2ltdWxhdGUoXCJmb2N1c1wiKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiU2xpZGVyXCIpXG4gICAgICAuYXQoMSlcbiAgICAgIC5maW5kKFwiLmFkdWktc2xpZGVyLWhhbmRsZVwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJrZXlEb3duXCIsIHsga2V5Q29kZToga2V5Q29kZS5SSUdIVCB9KVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgKS50b0JlKFwiIzU5REVDQVwiKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiU2xpZGVyXCIpXG4gICAgICAuYXQoMilcbiAgICAgIC5zaW11bGF0ZShcImZvY3VzXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJTbGlkZXJcIilcbiAgICAgIC5hdCgyKVxuICAgICAgLmZpbmQoXCIuYWR1aS1zbGlkZXItaGFuZGxlXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImtleURvd25cIiwgeyBrZXlDb2RlOiBrZXlDb2RlLlJJR0hUIH0pXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICApLnRvQmUoXCIjNUFFMENDXCIpXG5cbiAgICBjb25zdCBtYXAgPSB7fVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciA9IGplc3QuZm4oKGV2ZW50LCBjYikgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbWFwW2V2ZW50XSA9IGNiXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzV3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlck1vdW50ZXIgLz4pXG5cbiAgICBjbGFzc1dyYXBwZXIuZmluZChcImJ1dHRvblwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDEwKVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIGNsYXNzV3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWNwLWNvbGxhcHNlLWhlYWRlclwiKVxuICAgICAgICAuYXQoMSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIGNsYXNzV3JhcHBlci51cGRhdGUoKVxuICAgIH0pXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgY2xhc3NXcmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktY3AtcGFsZXR0ZVwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnNpbXVsYXRlKFwibW91c2VEb3duXCIpXG5cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG1hcC5tb3VzZW1vdmUoe30pXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBtYXAubW91c2Vtb3ZlKHsgcGFnZVg6IDEwMDAwLCBwYWdlWTogMCB9KVxuXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICBjbGFzc1dyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgY2xhc3NXcmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpW1wiZGF0YS1zXCJdXG4gICAgICApLnRvQmUoMTAwKVxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbWFwLm1vdXNlbW92ZSh7IHBhZ2VYOiAtMTAwMDAsIHBhZ2VZOiAwIH0pXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICBjbGFzc1dyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgY2xhc3NXcmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpW1wiZGF0YS1zXCJdXG4gICAgICApLnRvQmUoMClcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG1hcC5tb3VzZW1vdmUoeyBwYWdlWTogMTAwMDAsIHBhZ2VYOiAwIH0pXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICBjbGFzc1dyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgY2xhc3NXcmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpW1wiZGF0YS1iXCJdXG4gICAgICApLnRvQmUoMClcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG1hcC5tb3VzZW1vdmUoeyBwYWdlWTogLTEwMDAwLCBwYWdlWDogMCB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgY2xhc3NXcmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIGNsYXNzV3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKVtcImRhdGEtYlwiXVxuICAgICAgKS50b0JlKDEwMClcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG1hcC5tb3VzZXVwKHt9KVxuICAgIH0pXG4gIH0pXG59KVxuIl19