"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

var _core = require("../core");

var _testUtils = require("react-dom/test-utils");

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

var DatePickerMounter = function (_Component) {
  _inherits(DatePickerMounter, _Component);

  var _super = _createSuper(DatePickerMounter);

  function DatePickerMounter() {
    var _this;

    _classCallCheck(this, DatePickerMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      component: null,
      value: new Date(),
      visible: true
    };
    return _this;
  }

  _createClass(DatePickerMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          value = _this$state.value,
          visible = _this$state.visible;
      return _react["default"].createElement(_["default"], _extends({
        shortcuts: [{
          label: "祖国生日",
          value: new Date("2020-10-01")
        }],
        ref: function ref(component) {
          if (!_this2.state.component) {
            _this2.setState({
              component: component
            });
          }
        },
        closeOnSelect: true,
        value: value,
        visible: visible,
        onChange: function onChange(val) {
          return _this2.setState({
            value: val
          });
        },
        onVisibleChange: function onVisibleChange(bool) {
          return _this2.setState({
            visible: bool
          });
        }
      }, this.props));
    }
  }]);

  return DatePickerMounter;
}(_react.Component);

describe("DatePicker", function () {
  beforeAll(function () {
    jest.useFakeTimers();
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], null));

    expect(wrapper).toMatchSnapshot();
  });
  it("内部驱动", function () {
    var val = new Date();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultValue: val,
      defaultVisible: false,
      closeOnSelect: true
    }));
    expect(wrapper.find("input").at(0).props().value).toBe((0, _core.convertDateToString)(val));
    wrapper.find("input").simulate("focus");
    expect(wrapper.find("Popover").at(0).props().visible).toBe(true);
    wrapper.find("input").simulate("change", {
      target: {
        value: ""
      }
    });
    expect(wrapper.find("input").props().value).toBe("");
    wrapper.find("input").simulate("change", {
      target: {
        value: "2020-02-22"
      }
    });
    expect(wrapper.find("input").props().value).toBe("2020-02-22");
    (0, _testUtils.act)(function () {
      wrapper.find("input").simulate("keydown", {
        key: "enter",
        keyCode: 13
      });
      jest.runAllTimers();
      wrapper.update();
      expect(wrapper.find("Popover").at(0).props().visible).toBe(false);
    });
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-day").at(14).simulate("click");
      var expectedVal = (0, _core.convertDateToString)(new Date(wrapper.find(".adui-date-day").at(14).props()["aria-label"]));
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("input").at(0).props().value).toBe(expectedVal);
      expect(wrapper.find("Popover").at(0).props().visible).toBe(false);
    });
  });
  it("外部控制", function () {
    var val = new Date();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      value: new Date(),
      visible: true,
      closeOnSelect: true
    }));
    expect(wrapper.find("input").at(0).props().value).toBe((0, _core.convertDateToString)(val));
    expect(wrapper.find("Popover").at(0).props().visible).toBe(true);
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-day").at(14).simulate("click");
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("input").at(0).props().value).toBe((0, _core.convertDateToString)(val));
    });
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-day").at(15).simulate("click");
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("input").at(0).props().value).toBe((0, _core.convertDateToString)(val));
      expect(wrapper.find("Popover").at(0).props().visible).toBe(true);
    });
    var mounter = (0, _enzyme.mount)(_react["default"].createElement(DatePickerMounter, null));
    var today = (0, _core.convertDateToString)(new Date());
    mounter.find("input").simulate("change", {
      target: {
        value: "2020-02-22"
      }
    });
    expect((0, _core.convertDateToString)(mounter.state().value)).toBe("2020-02-22");
    mounter.find("input").simulate("change", {
      target: {
        value: "2020-02-31"
      }
    });
    expect((0, _core.convertDateToString)(mounter.state().value)).toBe("2020-02-22");
    mounter.find("input").simulate("change", {
      target: {
        value: ""
      }
    });
    expect((0, _core.convertDateToString)(mounter.state().value)).toBe("");
    expect(mounter.find("Popover").at(0).props().visible).toBe(true);
    (0, _testUtils.act)(function () {
      mounter.find(".adui-date-day").at(15).simulate("click");
      jest.runAllTimers();
      mounter.update();
      expect(mounter.find("Popover").at(0).props().visible).toBe(false);
    });
  });
  it("DayPicker 操作", function () {
    var today = new Date();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(DatePickerMounter, null));
    wrapper.find("button").at(0).simulate("click");
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-day").at(15).simulate("click");
      jest.runAllTimers();
      wrapper.update();

      if (today.getFullYear() > wrapper.state().value.getFullYear()) {
        expect(today.getMonth() - wrapper.state().value.getMonth()).toBe(-11);
      } else {
        expect(today.getMonth() - wrapper.state().value.getMonth()).toBe(1);
      }
    });
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-shortcut").at(0).simulate("click");
      jest.runAllTimers();
      wrapper.update();
      expect((0, _core.convertDateToString)(wrapper.state().value)).toBe("2020-10-01");
    });
    var wrapperForCoverage0 = (0, _enzyme.mount)(_react["default"].createElement(DatePickerMounter, {
      disabled: true
    }));
    wrapperForCoverage0.state().component.handleVisibleChange(false);
    jest.runAllTimers();
  });
  it("DayPicker 年月切换", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(DatePickerMounter, null));
    (0, _testUtils.act)(function () {
      wrapper.find("select").at(0).simulate("change", {
        target: {
          value: "2018"
        }
      });
      wrapper.find("select").at(1).simulate("change", {
        target: {
          value: "1"
        }
      });
      jest.runAllTimers();
      wrapper.update();
      wrapper.find(".adui-date-day").at(14).simulate("click");
      jest.runAllTimers();
      wrapper.update();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvX190ZXN0c19fL0RhdGVQaWNrZXIudGVzdC50c3giXSwibmFtZXMiOlsiRGF0ZVBpY2tlck1vdW50ZXIiLCJzdGF0ZSIsImNvbXBvbmVudCIsInZhbHVlIiwiRGF0ZSIsInZpc2libGUiLCJsYWJlbCIsInNldFN0YXRlIiwidmFsIiwiYm9vbCIsInByb3BzIiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJiZWZvcmVBbGwiLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyQWxsIiwidXNlUmVhbFRpbWVycyIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsImZpbmQiLCJhdCIsInRvQmUiLCJzaW11bGF0ZSIsInRhcmdldCIsImtleSIsImtleUNvZGUiLCJydW5BbGxUaW1lcnMiLCJ1cGRhdGUiLCJleHBlY3RlZFZhbCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiLCJtb3VudGVyIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwid3JhcHBlckZvckNvdmVyYWdlMCIsImhhbmRsZVZpc2libGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGlCOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLFNBQVMsRUFBRSxJQURMO0FBRU5DLE1BQUFBLEtBQUssRUFBRSxJQUFJQyxJQUFKLEVBRkQ7QUFHTkMsTUFBQUEsT0FBTyxFQUFFO0FBSEgsSzs7Ozs7OzZCQU1DO0FBQUE7O0FBQUEsd0JBQ29CLEtBQUtKLEtBRHpCO0FBQUEsVUFDQ0UsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUUsT0FEUixlQUNRQSxPQURSO0FBRVAsYUFDRSxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxTQUFTLEVB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QUNBQSxJQUFBQSxtQkFBbUIsQ0FBQ3RDLEtBQXBCLEdBQTRCQyxTQUE1QixDQUFzQ3NDLG1CQUF0QyxDQUEwRCxLQUExRDtBQUNBMUIsSUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNELEdBbENDLENBQUY7QUFvQ0FiLEVBQUFBLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixZQUFNO0FBQ3pCLFFBQU1DLE9BQU8sR0FBRyxtQkFBTSxnQ0FBQyxpQkFBRCxPQUFOLENBQWhCO0FBQ0Esd0JBQUksWUFBTTtBQUNSQSxNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxRQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dFLFFBSEgsQ0FHWSxRQUhaLEVBR3NCO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFFekIsVUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixPQUh0QjtBQUlBZ0IsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRSxRQUhILENBR1ksUUFIWixFQUdzQjtBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBRXpCLFVBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsT0FIdEI7QUFJQVcsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQWIsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQWIsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDRCxLQWpCRDtBQWtCRCxHQXBCQyxDQUFGO0FBcUJELENBaFBPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIi4uXCJcbmltcG9ydCB7IGNvbnZlcnREYXRlVG9TdHJpbmcgfSBmcm9tIFwiLi4vY29yZVwiXG5pbXBvcnQgeyBhY3QgfSBmcm9tIFwicmVhY3QtZG9tL3Rlc3QtdXRpbHNcIlxuXG5jbGFzcyBEYXRlUGlja2VyTW91bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICB2YWx1ZTogbmV3IERhdGUoKSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgc2hvcnRjdXRzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi56WW5Zu955Sf5pelXCIsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIHJlZj17Y29tcG9uZW50ID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcG9uZW50IH0pXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBjbG9zZU9uU2VsZWN0XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbCB9KX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtib29sID0+IHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBib29sIH0pfVxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiRGF0ZVBpY2tlclwiLCAoKSA9PiB7XG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPERhdGVQaWNrZXIgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCLlhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8RGF0ZVBpY2tlciBkZWZhdWx0VmFsdWU9e3ZhbH0gZGVmYXVsdFZpc2libGU9e2ZhbHNlfSBjbG9zZU9uU2VsZWN0IC8+XG4gICAgKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICApLnRvQmUoY29udmVydERhdGVUb1N0cmluZyh2YWwpKVxuXG4gICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJmb2N1c1wiKVxuXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICApLnRvQmUodHJ1ZSlcblxuICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIlwiIH0gfSlcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiaW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9CZShcIlwiKVxuXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjIwMjAtMDItMjJcIiB9IH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcImlucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvQmUoXCIyMDIwLTAyLTIyXCIpXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJrZXlkb3duXCIsIHsga2V5OiBcImVudGVyXCIsIGtleUNvZGU6IDEzIH0pXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgICApLnRvQmUoZmFsc2UpXG4gICAgfSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE0KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgY29uc3QgZXhwZWN0ZWRWYWwgPSBjb252ZXJ0RGF0ZVRvU3RyaW5nKFxuICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgICAgICAuYXQoMTQpXG4gICAgICAgICAgICAucHJvcHMoKVtcImFyaWEtbGFiZWxcIl1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLy8g562J5b6FIDM1MG1zXG4gICAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgICApLnRvQmUoZXhwZWN0ZWRWYWwpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgICApLnRvQmUoZmFsc2UpXG4gICAgfSlcbiAgfSlcblxuICBpdChcIuWklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgLyoqXG4gICAgICog5Lul5LiL6YO95piv6aqM6K+B5aSW6YOo5o6n5Yi25pe25YaF6YOo55qE5aSx5pWIXG4gICAgICovXG4gICAgY29uc3QgdmFsID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxEYXRlUGlja2VyIHZhbHVlPXtuZXcgRGF0ZSgpfSB2aXNpYmxlIGNsb3NlT25TZWxlY3QgLz5cbiAgICApXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICkudG9CZShjb252ZXJ0RGF0ZVRvU3RyaW5nKHZhbCkpXG5cbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICkudG9CZSh0cnVlKVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTQpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICAvLyDnrYnlvoUgMzUwbXNcbiAgICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSgzNTApXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICAgICkudG9CZShjb252ZXJ0RGF0ZVRvU3RyaW5nKHZhbCkpXG4gICAgfSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE1KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgLy8g562J5b6FIDM1MG1zXG4gICAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgICApLnRvQmUoY29udmVydERhdGVUb1N0cmluZyh2YWwpKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKHRydWUpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIOS7peS4i+aYr+mqjOivgeWklumDqOaOp+WItuaXtiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMg55qE5pyJ5pWIXG4gICAgICovXG4gICAgY29uc3QgbW91bnRlciA9IG1vdW50KDxEYXRlUGlja2VyTW91bnRlciAvPilcbiAgICBjb25zdCB0b2RheSA9IGNvbnZlcnREYXRlVG9TdHJpbmcobmV3IERhdGUoKSlcbiAgICBtb3VudGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAyMC0wMi0yMlwiIH0gfSlcbiAgICBleHBlY3QoY29udmVydERhdGVUb1N0cmluZyhtb3VudGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFwiMjAyMC0wMi0yMlwiKVxuICAgIG1vdW50ZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIyMDIwLTAyLTMxXCIgfSB9KVxuICAgIGV4cGVjdChjb252ZXJ0RGF0ZVRvU3RyaW5nKG1vdW50ZXIuc3RhdGUoKS52YWx1ZSkpLnRvQmUoXCIyMDIwLTAyLTIyXCIpXG4gICAgbW91bnRlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiXCIgfSB9KVxuICAgIGV4cGVjdChjb252ZXJ0RGF0ZVRvU3RyaW5nKG1vdW50ZXIuc3RhdGUoKS52YWx1ZSkpLnRvQmUoXCJcIilcbiAgICBleHBlY3QoXG4gICAgICBtb3VudGVyXG4gICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICkudG9CZSh0cnVlKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICBtb3VudGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE1KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgbW91bnRlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICBtb3VudGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKGZhbHNlKVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCJEYXlQaWNrZXIg5pON5L2cXCIsICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPERhdGVQaWNrZXJNb3VudGVyIC8+KVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTUpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBpZiAodG9kYXkuZ2V0RnVsbFllYXIoKSA+IHdyYXBwZXIuc3RhdGUoKS52YWx1ZS5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgIGV4cGVjdCh0b2RheS5nZXRNb250aCgpIC0gd3JhcHBlci5zdGF0ZSgpLnZhbHVlLmdldE1vbnRoKCkpLnRvQmUoLTExKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwZWN0KHRvZGF5LmdldE1vbnRoKCkgLSB3cmFwcGVyLnN0YXRlKCkudmFsdWUuZ2V0TW9udGgoKSkudG9CZSgxKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtc2hvcnRjdXRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoY29udmVydERhdGVUb1N0cmluZyh3cmFwcGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFwiMjAyMC0xMC0wMVwiKVxuICAgIH0pXG5cbiAgICBjb25zdCB3cmFwcGVyRm9yQ292ZXJhZ2UwID0gbW91bnQoPERhdGVQaWNrZXJNb3VudGVyIGRpc2FibGVkIC8+KVxuICAgIHdyYXBwZXJGb3JDb3ZlcmFnZTAuc3RhdGUoKS5jb21wb25lbnQuaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCJEYXlQaWNrZXIg5bm05pyI5YiH5o2iXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPERhdGVQaWNrZXJNb3VudGVyIC8+KVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAxOFwiIH0gfSlcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxXCIgfSB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==