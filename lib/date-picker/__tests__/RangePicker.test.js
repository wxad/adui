"use strict";

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

var _core = require("../core");

var _testUtils = require("react-dom/test-utils");

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

var RangePicker = _["default"].RangePicker;

var RangePickerMounter = function (_Component) {
  _inherits(RangePickerMounter, _Component);

  var _super = _createSuper(RangePickerMounter);

  function RangePickerMounter() {
    var _this;

    _classCallCheck(this, RangePickerMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      component: null,
      value: [new Date(), new Date()],
      visible: true
    };
    return _this;
  }

  _createClass(RangePickerMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          value = _this$state.value,
          visible = _this$state.visible;
      return _react["default"].createElement(RangePicker, _extends({
        shortcuts: [{
          label: "祖国生日",
          value: [new Date("2020-10-01"), new Date("2020-10-07")]
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

  return RangePickerMounter;
}(_react.Component);

describe("RangePicker", function () {
  beforeAll(function () {
    jest.useFakeTimers();
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(RangePicker, null));

    expect(wrapper).toMatchSnapshot();
  });
  it("内部驱动", function () {
    var val = [new Date("2020-02-02"), new Date("2020-03-01")];
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(RangePicker, {
      defaultValue: val,
      defaultVisible: false,
      closeOnSelect: true
    }));
    expect(wrapper.find("input").at(0).props().value).toBe((0, _core.convertDateRangeToString)(val));
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
        value: "2020-02-22 - 2020-02-28"
      }
    });
    expect(wrapper.find("input").props().value).toBe("2020-02-22 - 2020-02-28");
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
      wrapper.find(".adui-date-day").at(15).simulate("click");
      var expectedVal = (0, _core.convertDateRangeToString)([new Date(wrapper.find(".adui-date-day").at(14).props()["aria-label"] + " 12:00"), new Date(wrapper.find(".adui-date-day").at(15).props()["aria-label"] + " 12:00")]);
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("Popover").at(0).props().visible).toBe(false);
    });
  });
  it("外部控制", function () {
    var val = [new Date(), new Date()];
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(RangePicker, {
      value: [new Date(), new Date()],
      visible: true,
      closeOnSelect: true
    }));
    expect(wrapper.find("input").at(0).props().value).toBe((0, _core.convertDateRangeToString)(val));
    expect(wrapper.find("Popover").at(0).props().visible).toBe(true);
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-day").at(14).simulate("click");
      wrapper.find(".adui-date-day").at(15).simulate("click");
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("input").at(0).props().value).toBe((0, _core.convertDateRangeToString)(val));
    });
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-day").at(15).simulate("click");
      wrapper.find(".adui-date-day").at(16).simulate("click");
      jest.advanceTimersByTime(350);
      wrapper.update();
      expect(wrapper.find("input").at(0).props().value).toBe((0, _core.convertDateRangeToString)(val));
      expect(wrapper.find("Popover").at(0).props().visible).toBe(true);
    });
    var mounter = (0, _enzyme.mount)(_react["default"].createElement(RangePickerMounter, null));
    var today = (0, _core.convertDateRangeToString)(new Date());
    mounter.find("input").simulate("change", {
      target: {
        value: "2020-02-22 - 2020-02-26"
      }
    });
    expect((0, _core.convertDateRangeToString)(mounter.state().value)).toBe("2020-02-22 - 2020-02-26");
    mounter.find("input").simulate("change", {
      target: {
        value: "2020-02-25 - 2020-02-26"
      }
    });
    expect((0, _core.convertDateRangeToString)(mounter.state().value)).toBe("2020-02-25 - 2020-02-26");
    mounter.find("input").simulate("change", {
      target: {
        value: ""
      }
    });
    expect((0, _core.convertDateRangeToString)(mounter.state().value)).toBe("");
    expect(mounter.find("Popover").at(0).props().visible).toBe(true);
    (0, _testUtils.act)(function () {
      mounter.find(".adui-date-day").at(15).simulate("click");
      mounter.find(".adui-date-day").at(16).simulate("click");
      jest.runAllTimers();
      mounter.update();
    });
  });
  it("DayPicker 操作", function () {
    var today = new Date();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(RangePickerMounter, null));
    var expectedRange = [];
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-day").at(10).simulate("click");
      expectedRange[0] = new Date(wrapper.find(".adui-date-day").at(10).props()["aria-label"] + " 12:00");
      wrapper.find("button").at(1).simulate("click");
      wrapper.find("button").at(1).simulate("click");
      jest.runAllTimers();
      wrapper.update();
    });
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-day").at(10).simulate("click");
      expectedRange[1] = new Date(wrapper.find(".adui-date-day").at(10).props()["aria-label"] + " 12:00");
      jest.runAllTimers();
      wrapper.update();
      expect((0, _core.convertDateRangeToString)(wrapper.state().value) === (0, _core.convertDateRangeToString)(expectedRange)).toBe(true);
    });
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-date-shortcut").at(0).simulate("keydown", {
        key: "enter",
        keyCode: 13
      });
      jest.runAllTimers();
      wrapper.update();
      expect((0, _core.convertDateRangeToString)(wrapper.state().value)).toBe("2020-10-01 - 2020-10-07");
    });
    var wrapperForCoverage0 = (0, _enzyme.mount)(_react["default"].createElement(RangePickerMounter, {
      disabled: true
    }));
    wrapperForCoverage0.state().component.handleVisibleChange(false);
    wrapperForCoverage0.find(".adui-date-day").at(14).simulate("mouseenter");
    wrapperForCoverage0.find(".adui-date-day").at(14).simulate("mouseleave");
    jest.runAllTimers();
  });
  it("测试 min max", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(RangePickerMounter, {
      minDate: new Date("2018-12-31"),
      maxDate: new Date("2020-01-01")
    }));
    (0, _testUtils.act)(function () {
      wrapper.find("select").at(0).simulate("change", {
        target: {
          value: "2019"
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
      wrapper.find("select").at(1).simulate("change", {
        target: {
          value: "11"
        }
      });
      wrapper.find("select").at(0).simulate("change", {
        target: {
          value: "2020"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvX190ZXN0c19fL1JhbmdlUGlja2VyLnRlc3QudHN4Il0sIm5hbWVzIjpbIlJhbmdlUGlja2VyIiwiRGF0ZVBpY2tlciIsIlJhbmdlUGlja2VyTW91bnRlciIsInN0YXRlIiwiY29tcG9uZW50IiwidmFsdWUiLCJEYXRlIiwidmlzaWJsZSIsImxhYmVsIiwic2V0U3RhdGUiLCJ2YWwiLCJib29sIiwicHJvcHMiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsImJlZm9yZUFsbCIsImplc3QiLCJ1c2VGYWtlVGltZXJzIiwiYWZ0ZXJBbGwiLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90IiwiZmluZCIsImF0IiwidG9CZSIsInNpbXVsYXRlIiwidGFyZ2V0Iiwia2V5Iiwia2V5Q29kZSIsInJ1bkFsbFRpbWVycyIsInVwZGF0ZSIsImV4cGVjdGVkVmFsIiwiYWR2YW5jZVRpbWVyc0J5VGltZSIsIm1vdW50ZXIiLCJ0b2RheSIsImV4cGVjdGVkUmFuZ2UiLCJ3cmFwcGVyRm9yQ292ZXJhZ2UwIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBR0MsYUFBV0QsV0FBL0I7O0lBRU1FLGtCOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLFNBQVMsRUFBRSxJQURMO0FBRU5DLE1BQUFBLEtBQUssRUFBRSxDQUFDLElBQUlDLElBQUosRUFBRCxFQUFhLElBQUlBLElBQUosRUFBYixDQUZEO0FBR05DLE1BQUFBLE9BQU8sRUFBRTtBQUhILEs7Ozs7Ozs2QkFNQztBQUFBOztBQUFB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Q0FaLE1BQUFBLE9BQU8sQ0FBQ2EsTUFBUjtBQUNBYixNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxRQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dFLFFBSEgsQ0FHWSxRQUhaLEVBR3NCO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFFekIsVUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixPQUh0QjtBQUlBZ0IsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRSxRQUhILENBR1ksUUFIWixFQUdzQjtBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBRXpCLFVBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsT0FIdEI7QUFJQVcsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQWIsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQWIsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDRCxLQWpDRDtBQWtDRCxHQXpDQyxDQUFGO0FBMENELENBdFRPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIi4uXCJcbmltcG9ydCB7IGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZywgY29udmVydERhdGVUb1N0cmluZyB9IGZyb20gXCIuLi9jb3JlXCJcbmltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5cbmNvbnN0IFJhbmdlUGlja2VyID0gRGF0ZVBpY2tlci5SYW5nZVBpY2tlclxuXG5jbGFzcyBSYW5nZVBpY2tlck1vdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgdmFsdWU6IFtuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpXSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFJhbmdlUGlja2VyXG4gICAgICAgIHNob3J0Y3V0cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIuelluWbveeUn+aXpVwiLFxuICAgICAgICAgICAgdmFsdWU6IFtuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIiksIG5ldyBEYXRlKFwiMjAyMC0xMC0wN1wiKV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgcmVmPXtjb21wb25lbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wb25lbnQgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIGNsb3NlT25TZWxlY3RcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBvbkNoYW5nZT17dmFsID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsIH0pfVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e2Jvb2wgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGJvb2wgfSl9XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJSYW5nZVBpY2tlclwiLCAoKSA9PiB7XG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPFJhbmdlUGlja2VyIC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBbbmV3IERhdGUoXCIyMDIwLTAyLTAyXCIpLCBuZXcgRGF0ZShcIjIwMjAtMDMtMDFcIildXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFJhbmdlUGlja2VyIGRlZmF1bHRWYWx1ZT17dmFsfSBkZWZhdWx0VmlzaWJsZT17ZmFsc2V9IGNsb3NlT25TZWxlY3QgLz5cbiAgICApXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICkudG9CZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsKSlcblxuICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiZm9jdXNcIilcblxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG5cbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJcIiB9IH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcImlucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvQmUoXCJcIilcblxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIyMDIwLTAyLTIyIC0gMjAyMC0wMi0yOFwiIH0gfSlcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiaW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9CZShcIjIwMjAtMDItMjIgLSAyMDIwLTAyLTI4XCIpXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJrZXlkb3duXCIsIHsga2V5OiBcImVudGVyXCIsIGtleUNvZGU6IDEzIH0pXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgICApLnRvQmUoZmFsc2UpXG4gICAgfSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE0KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGNvbnN0IGV4cGVjdGVkVmFsID0gY29udmVydERhdGVSYW5nZVRvU3RyaW5nKFtcbiAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgd3JhcHBlclxuICAgICAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAgICAgLmF0KDE0KVxuICAgICAgICAgICAgLnByb3BzKClbXCJhcmlhLWxhYmVsXCJdICsgXCIgMTI6MDBcIlxuICAgICAgICApLFxuICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgICAgICAuYXQoMTUpXG4gICAgICAgICAgICAucHJvcHMoKVtcImFyaWEtbGFiZWxcIl0gKyBcIiAxMjowMFwiXG4gICAgICAgICksXG4gICAgICBdKVxuICAgICAgLy8g562J5b6FIDM1MG1zXG4gICAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKGZhbHNlKVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCLlpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIOS7peS4i+mDveaYr+mqjOivgeWklumDqOaOp+WItuaXtuWGhemDqOeahOWkseaViFxuICAgICAqL1xuICAgIGNvbnN0IHZhbCA9IFtuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpXVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxSYW5nZVBpY2tlciB2YWx1ZT17W25ldyBEYXRlKCksIG5ldyBEYXRlKCldfSB2aXNpYmxlIGNsb3NlT25TZWxlY3QgLz5cbiAgICApXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICkudG9CZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsKSlcblxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTUpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICAvLyDnrYnlvoUgMzUwbXNcbiAgICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSgzNTApXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICAgICkudG9CZShjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcodmFsKSlcbiAgICB9KVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTUpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE2KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgLy8g562J5b6FIDM1MG1zXG4gICAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgICApLnRvQmUoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbCkpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgICApLnRvQmUodHJ1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICog5Lul5LiL5piv6aqM6K+B5aSW6YOo5o6n5Yi25pe2IGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyDnmoTmnInmlYhcbiAgICAgKi9cbiAgICBjb25zdCBtb3VudGVyID0gbW91bnQoPFJhbmdlUGlja2VyTW91bnRlciAvPilcbiAgICBjb25zdCB0b2RheSA9IGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhuZXcgRGF0ZSgpKVxuICAgIG1vdW50ZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIyMDIwLTAyLTIyIC0gMjAyMC0wMi0yNlwiIH0gfSlcbiAgICBleHBlY3QoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKG1vdW50ZXIuc3RhdGUoKS52YWx1ZSkpLnRvQmUoXG4gICAgICBcIjIwMjAtMDItMjIgLSAyMDIwLTAyLTI2XCJcbiAgICApXG4gICAgbW91bnRlclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjIwMjAtMDItMjUgLSAyMDIwLTAyLTI2XCIgfSB9KVxuICAgIGV4cGVjdChjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcobW91bnRlci5zdGF0ZSgpLnZhbHVlKSkudG9CZShcbiAgICAgIFwiMjAyMC0wMi0yNSAtIDIwMjAtMDItMjZcIlxuICAgIClcbiAgICBtb3VudGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJcIiB9IH0pXG4gICAgZXhwZWN0KGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhtb3VudGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFwiXCIpXG4gICAgZXhwZWN0KFxuICAgICAgbW91bnRlclxuICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICApLnRvQmUodHJ1ZSlcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgbW91bnRlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIG1vdW50ZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTYpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICBtb3VudGVyLnVwZGF0ZSgpXG4gICAgfSlcbiAgfSlcblxuICBpdChcIkRheVBpY2tlciDmk43kvZxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8UmFuZ2VQaWNrZXJNb3VudGVyIC8+KVxuICAgIGNvbnN0IGV4cGVjdGVkUmFuZ2UgPSBbXVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDEwKVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgZXhwZWN0ZWRSYW5nZVswXSA9IG5ldyBEYXRlKFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAgIC5hdCgxMClcbiAgICAgICAgICAucHJvcHMoKVtcImFyaWEtbGFiZWxcIl0gKyBcIiAxMjowMFwiXG4gICAgICApXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiYnV0dG9uXCIpXG4gICAgICAgIC5hdCgxKVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImJ1dHRvblwiKVxuICAgICAgICAuYXQoMSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTApXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBleHBlY3RlZFJhbmdlWzFdID0gbmV3IERhdGUoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgICAgLmF0KDEwKVxuICAgICAgICAgIC5wcm9wcygpW1wiYXJpYS1sYWJlbFwiXSArIFwiIDEyOjAwXCJcbiAgICAgIClcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHdyYXBwZXIuc3RhdGUoKS52YWx1ZSkgPT09XG4gICAgICAgICAgY29udmVydERhdGVSYW5nZVRvU3RyaW5nKGV4cGVjdGVkUmFuZ2UpXG4gICAgICApLnRvQmUodHJ1ZSlcbiAgICB9KVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLXNob3J0Y3V0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAuc2ltdWxhdGUoXCJrZXlkb3duXCIsIHsga2V5OiBcImVudGVyXCIsIGtleUNvZGU6IDEzIH0pXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHdyYXBwZXIuc3RhdGUoKS52YWx1ZSkpLnRvQmUoXG4gICAgICAgIFwiMjAyMC0xMC0wMSAtIDIwMjAtMTAtMDdcIlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCB3cmFwcGVyRm9yQ292ZXJhZ2UwID0gbW91bnQoPFJhbmdlUGlja2VyTW91bnRlciBkaXNhYmxlZCAvPilcbiAgICB3cmFwcGVyRm9yQ292ZXJhZ2UwLnN0YXRlKCkuY29tcG9uZW50LmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgd3JhcHBlckZvckNvdmVyYWdlMFxuICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgLmF0KDE0KVxuICAgICAgLnNpbXVsYXRlKFwibW91c2VlbnRlclwiKVxuICAgIHdyYXBwZXJGb3JDb3ZlcmFnZTBcbiAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgIC5hdCgxNClcbiAgICAgIC5zaW11bGF0ZShcIm1vdXNlbGVhdmVcIilcbiAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCLmtYvor5UgbWluIG1heFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFJhbmdlUGlja2VyTW91bnRlclxuICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZShcIjIwMTgtMTItMzFcIil9XG4gICAgICAgIG1heERhdGU9e25ldyBEYXRlKFwiMjAyMC0wMS0wMVwiKX1cbiAgICAgIC8+XG4gICAgKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAxOVwiIH0gfSlcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxXCIgfSB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxMVwiIH0gfSlcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIyMDIwXCIgfSB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==