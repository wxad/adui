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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvX190ZXN0c19fL1JhbmdlUGlja2VyLnRlc3QudHN4Il0sIm5hbWVzIjpbIlJhbmdlUGlja2VyIiwiRGF0ZVBpY2tlciIsIlJhbmdlUGlja2VyTW91bnRlciIsInN0YXRlIiwiY29tcG9uZW50IiwidmFsdWUiLCJEYXRlIiwidmlzaWJsZSIsImxhYmVsIiwic2V0U3RhdGUiLCJ2YWwiLCJib29sIiwicHJvcHMiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsImJlZm9yZUFsbCIsImplc3QiLCJ1c2VGYWtlVGltZXJzIiwiYWZ0ZXJBbGwiLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90IiwiZmluZCIsImF0IiwidG9CZSIsInNpbXVsYXRlIiwidGFyZ2V0Iiwia2V5Iiwia2V5Q29kZSIsInJ1bkFsbFRpbWVycyIsInVwZGF0ZSIsImV4cGVjdGVkVmFsIiwiYWR2YW5jZVRpbWVyc0J5VGltZSIsIm1vdW50ZXIiLCJ0b2RheSIsImV4cGVjdGVkUmFuZ2UiLCJ3cmFwcGVyRm9yQ292ZXJhZ2UwIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGFBQVdELFdBQS9COztJQUVNRSxrQjs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNOQyxNQUFBQSxTQUFTLEVBQUUsSUFETDtBQUVOQyxNQUFBQSxLQUFLLEVBQUUsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsRUFBYSxJQUFJQSxJQUFKLEVBQWIsQ0FGRDtBQUdOQyxNQUFBQSxPQUFPLEVBQUU7QUFISCxLOzs7Ozs7NkJBTUM7QUFBQTs7QUFBQSx3QkFDb0IsS0FBS0osS0FEekI7QUFBQSxVQUNDRSxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRRSxPQURSLGVBQ1FBLE9BRFI7QUFFUCxhQUNFLGdDQUFDLFdBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSxDQUNUO0FBQ0VDLFVBQUFBLEtBQUssRUFBRSxNQURUO0FBRUVILFVBQUFBLEtBQUssRUFBRSxDQUFDLElBQUlDLElBQUosQ0FBUyxZQUFULENBQUQsRUFBeUIsSUFBSUEsSUFBSixDQUFTLFlBQVQsQ0FBekI7QUFGVCxTQURTLENBRGI7QUFPRSxRQUFBLEdBQUcsRUFBRSxhQUFBRixTQUFTLEVBQUk7QUFDaEIsY0FBSSxDQUFDLE1BQUksQ0FBQ0QsS0FBTCxDQUFXQyxTQUFoQixFQUEyQjtBQUN6QixZQUFBLE1BQUksQ0FBQ0ssUUFBTCxDQUFjO0FBQUVMLGNBQUFBLFNBQVMsRUFBVEE7QUFBRixhQUFkO0FBQ0Q7QUFDRixTQVhIO0FBWUUsUUFBQSxhQUFhLE1BWmY7QUFhRSxRQUFBLEtBQUssRUFBRUMsS0FiVDtBQWNFLFFBQUEsT0FBTyxFQUFFRSxPQWRYO0FBZUUsUUFBQSxRQUFRLEVBQUUsa0JBQUFHLEdBQUc7QUFBQSxpQkFBSSxNQUFJLENBQUNELFFBQUwsQ0FBYztBQUFFSixZQUFBQSxLQUFLLEVBQUVLO0FBQVQsV0FBZCxDQUFKO0FBQUEsU0FmZjtBQWdCRSxRQUFBLGVBQWUsRUFBRSx5QkFBQUMsSUFBSTtBQUFBLGlCQUFJLE1BQUksQ0FBQ0YsUUFBTCxDQUFjO0FBQUVGLFlBQUFBLE9BQU8sRUFBRUk7QUFBWCxXQUFkLENBQUo7QUFBQTtBQWhCdkIsU0FpQk0sS0FBS0MsS0FqQlgsRUFERjtBQXFCRDs7OztFQTlCOEJDLGdCOztBQWlDakNDLFFBQVEsQ0FBQyxhQUFELEVBQWdCLFlBQU07QUFDNUJDLEVBQUFBLFNBQVMsQ0FBQyxZQUFNO0FBQ2RDLElBQUFBLElBQUksQ0FBQ0MsYUFBTDtBQUNELEdBRlEsQ0FBVDtBQUlBQyxFQUFBQSxRQUFRLENBQUMsWUFBTTtBQUNiRixJQUFBQSxJQUFJLENBQUNHLGFBQUw7QUFDRCxHQUZPLENBQVI7QUFJQUMsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBR0MsOEJBQWFDLE1BQWIsQ0FBb0IsZ0NBQUMsV0FBRCxPQUFwQixDQUFoQjs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FIQyxDQUFGO0FBS0FMLEVBQUFBLEVBQUUsQ0FBQyxNQUFELEVBQVMsWUFBTTtBQUNmLFFBQU1WLEdBQUcsR0FBRyxDQUFDLElBQUlKLElBQUosQ0FBUyxZQUFULENBQUQsRUFBeUIsSUFBSUEsSUFBSixDQUFTLFlBQVQsQ0FBekIsQ0FBWjtBQUNBLFFBQU1lLE9BQU8sR0FBRyxtQkFDZCxnQ0FBQyxXQUFEO0FBQWEsTUFBQSxZQUFZLEVBQUVYLEdBQTNCO0FBQWdDLE1BQUEsY0FBYyxFQUFFLEtBQWhEO0FBQXVELE1BQUEsYUFBYTtBQUFwRSxNQURjLENBQWhCO0FBR0FjLElBQUFBLE1BQU0sQ0FDSkgsT0FBTyxDQUNKSyxJQURILENBQ1EsT0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHZixLQUhILEdBR1dQLEtBSlAsQ0FBTixDQUtFdUIsSUFMRixDQUtPLG9DQUF5QmxCLEdBQXpCLENBTFA7QUFPQVcsSUFBQUEsT0FBTyxDQUFDSyxJQUFSLENBQWEsT0FBYixFQUFzQkcsUUFBdEIsQ0FBK0IsT0FBL0I7QUFFQUwsSUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxTQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV0wsT0FKUCxDQUFOLENBS0VxQixJQUxGLENBS08sSUFMUDtBQU9BUCxJQUFBQSxPQUFPLENBQUNLLElBQVIsQ0FBYSxPQUFiLEVBQXNCRyxRQUF0QixDQUErQixRQUEvQixFQUF5QztBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBRXpCLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsS0FBekM7QUFDQW1CLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDSyxJQUFSLENBQWEsT0FBYixFQUFzQmQsS0FBdEIsR0FBOEJQLEtBQS9CLENBQU4sQ0FBNEN1QixJQUE1QyxDQUFpRCxFQUFqRDtBQUVBUCxJQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxPQURSLEVBRUdHLFFBRkgsQ0FFWSxRQUZaLEVBRXNCO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFFekIsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixLQUZ0QjtBQUdBbUIsSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNLLElBQVIsQ0FBYSxPQUFiLEVBQXNCZCxLQUF0QixHQUE4QlAsS0FBL0IsQ0FBTixDQUE0Q3VCLElBQTVDLENBQWlELHlCQUFqRDtBQUVBLHdCQUFJLFlBQU07QUFDUlAsTUFBQUEsT0FBTyxDQUFDSyxJQUFSLENBQWEsT0FBYixFQUFzQkcsUUFBdEIsQ0FBK0IsU0FBL0IsRUFBMEM7QUFBRUUsUUFBQUEsR0FBRyxFQUFFLE9BQVA7QUFBZ0JDLFFBQUFBLE9BQU8sRUFBRTtBQUF6QixPQUExQztBQUNBaEIsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQVYsTUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxTQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV0wsT0FKUCxDQUFOLENBS0VxQixJQUxGLENBS08sS0FMUDtBQU1ELEtBVkQ7QUFZQSx3QkFBSSxZQUFNO0FBQ1JQLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUFSLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUEsVUFBTU0sV0FBVyxHQUFHLG9DQUF5QixDQUMzQyxJQUFJN0IsSUFBSixDQUNFZSxPQUFPLENBQ0pLLElBREgsQ0FDUSxnQkFEUixFQUVHQyxFQUZILENBRU0sRUFGTixFQUdHZixLQUhILEdBR1csWUFIWCxJQUcyQixRQUo3QixDQUQyQyxFQU8zQyxJQUFJTixJQUFKLENBQ0VlLE9BQU8sQ0FDSkssSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dmLEtBSEgsR0FHVyxZQUhYLElBRzJCLFFBSjdCLENBUDJDLENBQXpCLENBQXBCO0FBZUFJLE1BQUFBLElBQUksQ0FBQ29CLG1CQUFMLENBQXlCLEdBQXpCO0FBQ0FmLE1BQUFBLE9BQU8sQ0FBQ2EsTUFBUjtBQUNBVixNQUFBQSxNQUFNLENBQ0pILE9BQU8sQ0FDSkssSUFESCxDQUNRLFNBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR2YsS0FISCxHQUdXTCxPQUpQLENBQU4sQ0FLRXFCLElBTEYsQ0FLTyxLQUxQO0FBTUQsS0FoQ0Q7QUFpQ0QsR0ExRUMsQ0FBRjtBQTRFQVIsRUFBQUEsRUFBRSxDQUFDLE1BQUQsRUFBUyxZQUFNO0FBSWYsUUFBTVYsR0FBRyxHQUFHLENBQUMsSUFBSUosSUFBSixFQUFELEVBQWEsSUFBSUEsSUFBSixFQUFiLENBQVo7QUFDQSxRQUFNZSxPQUFPLEdBQUcsbUJBQ2QsZ0NBQUMsV0FBRDtBQUFhLE1BQUEsS0FBSyxFQUFFLENBQUMsSUFBSWYsSUFBSixFQUFELEVBQWEsSUFBSUEsSUFBSixFQUFiLENBQXBCO0FBQThDLE1BQUEsT0FBTyxNQUFyRDtBQUFzRCxNQUFBLGFBQWE7QUFBbkUsTUFEYyxDQUFoQjtBQUdBa0IsSUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxPQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV1AsS0FKUCxDQUFOLENBS0V1QixJQUxGLENBS08sb0NBQXlCbEIsR0FBekIsQ0FMUDtBQU9BYyxJQUFBQSxNQUFNLENBQ0pILE9BQU8sQ0FDSkssSUFESCxDQUNRLFNBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR2YsS0FISCxHQUdXTCxPQUpQLENBQU4sQ0FLRXFCLElBTEYsQ0FLTyxJQUxQO0FBT0Esd0JBQUksWUFBTTtBQUNSUCxNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxnQkFEUixFQUVHQyxFQUZILENBRU0sRUFGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUlBUixNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxnQkFEUixFQUVHQyxFQUZILENBRU0sRUFGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUtBYixNQUFBQSxJQUFJLENBQUNvQixtQkFBTCxDQUF5QixHQUF6QjtBQUNBZixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQVYsTUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxPQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV1AsS0FKUCxDQUFOLENBS0V1QixJQUxGLENBS08sb0NBQXlCbEIsR0FBekIsQ0FMUDtBQU1ELEtBbEJEO0FBb0JBLHdCQUFJLFlBQU07QUFDUlcsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQVIsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFLQWIsTUFBQUEsSUFBSSxDQUFDb0IsbUJBQUwsQ0FBeUIsR0FBekI7QUFDQWYsTUFBQUEsT0FBTyxDQUFDYSxNQUFSO0FBQ0FWLE1BQUFBLE1BQU0sQ0FDSkgsT0FBTyxDQUNKSyxJQURILENBQ1EsT0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHZixLQUhILEdBR1dQLEtBSlAsQ0FBTixDQUtFdUIsSUFMRixDQUtPLG9DQUF5QmxCLEdBQXpCLENBTFA7QUFNQWMsTUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxTQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV0wsT0FKUCxDQUFOLENBS0VxQixJQUxGLENBS08sSUFMUDtBQU1ELEtBeEJEO0FBNkJBLFFBQU1TLE9BQU8sR0FBRyxtQkFBTSxnQ0FBQyxrQkFBRCxPQUFOLENBQWhCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLG9DQUF5QixJQUFJaEMsSUFBSixFQUF6QixDQUFkO0FBQ0ErQixJQUFBQSxPQUFPLENBQ0pYLElBREgsQ0FDUSxPQURSLEVBRUdHLFFBRkgsQ0FFWSxRQUZaLEVBRXNCO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFFekIsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixLQUZ0QjtBQUdBbUIsSUFBQUEsTUFBTSxDQUFDLG9DQUF5QmEsT0FBTyxDQUFDbEMsS0FBUixHQUFnQkUsS0FBekMsQ0FBRCxDQUFOLENBQXdEdUIsSUFBeEQsQ0FDRSx5QkFERjtBQUdBUyxJQUFBQSxPQUFPLENBQ0pYLElBREgsQ0FDUSxPQURSLEVBRUdHLFFBRkgsQ0FFWSxRQUZaLEVBRXNCO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFFekIsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixLQUZ0QjtBQUdBbUIsSUFBQUEsTUFBTSxDQUFDLG9DQUF5QmEsT0FBTyxDQUFDbEMsS0FBUixHQUFnQkUsS0FBekMsQ0FBRCxDQUFOLENBQXdEdUIsSUFBeEQsQ0FDRSx5QkFERjtBQUdBUyxJQUFBQSxPQUFPLENBQUNYLElBQVIsQ0FBYSxPQUFiLEVBQXNCRyxRQUF0QixDQUErQixRQUEvQixFQUF5QztBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBRXpCLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsS0FBekM7QUFDQW1CLElBQUFBLE1BQU0sQ0FBQyxvQ0FBeUJhLE9BQU8sQ0FBQ2xDLEtBQVIsR0FBZ0JFLEtBQXpDLENBQUQsQ0FBTixDQUF3RHVCLElBQXhELENBQTZELEVBQTdEO0FBQ0FKLElBQUFBLE1BQU0sQ0FDSmEsT0FBTyxDQUNKWCxJQURILENBQ1EsU0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHZixLQUhILEdBR1dMLE9BSlAsQ0FBTixDQUtFcUIsSUFMRixDQUtPLElBTFA7QUFNQSx3QkFBSSxZQUFNO0FBQ1JTLE1BQUFBLE9BQU8sQ0FDSlgsSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUFRLE1BQUFBLE9BQU8sQ0FDSlgsSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUFiLE1BQUFBLElBQUksQ0FBQ2lCLFlBQUw7QUFDQUksTUFBQUEsT0FBTyxDQUFDSCxNQUFSO0FBQ0QsS0FYRDtBQVlELEdBekdDLENBQUY7QUEyR0FkLEVBQUFBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDdkIsUUFBTWtCLEtBQUssR0FBRyxJQUFJaEMsSUFBSixFQUFkO0FBQ0EsUUFBTWUsT0FBTyxHQUFHLG1CQUFNLGdDQUFDLGtCQUFELE9BQU4sQ0FBaEI7QUFDQSxRQUFNa0IsYUFBYSxHQUFHLEVBQXRCO0FBQ0Esd0JBQUksWUFBTTtBQUNSbEIsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQVUsTUFBQUEsYUFBYSxDQUFDLENBQUQsQ0FBYixHQUFtQixJQUFJakMsSUFBSixDQUNqQmUsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR2YsS0FISCxHQUdXLFlBSFgsSUFHMkIsUUFKVixDQUFuQjtBQU1BUyxNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxRQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUFSLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLFFBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQWIsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDRCxLQXJCRDtBQXVCQSx3QkFBSSxZQUFNO0FBQ1JiLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUFVLE1BQUFBLGFBQWEsQ0FBQyxDQUFELENBQWIsR0FBbUIsSUFBSWpDLElBQUosQ0FDakJlLE9BQU8sQ0FDSkssSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dmLEtBSEgsR0FHVyxZQUhYLElBRzJCLFFBSlYsQ0FBbkI7QUFNQUksTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQVYsTUFBQUEsTUFBTSxDQUNKLG9DQUF5QkgsT0FBTyxDQUFDbEIsS0FBUixHQUFnQkUsS0FBekMsTUFDRSxvQ0FBeUJrQyxhQUF6QixDQUZFLENBQU4sQ0FHRVgsSUFIRixDQUdPLElBSFA7QUFJRCxLQWpCRDtBQW1CQSx3QkFBSSxZQUFNO0FBQ1JQLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLHFCQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dFLFFBSEgsQ0FHWSxTQUhaLEVBR3VCO0FBQUVFLFFBQUFBLEdBQUcsRUFBRSxPQUFQO0FBQWdCQyxRQUFBQSxPQUFPLEVBQUU7QUFBekIsT0FIdkI7QUFJQWhCLE1BQUFBLElBQUksQ0FBQ2lCLFlBQUw7QUFDQVosTUFBQUEsT0FBTyxDQUFDYSxNQUFSO0FBQ0FWLE1BQUFBLE1BQU0sQ0FBQyxvQ0FBeUJILE9BQU8sQ0FBQ2xCLEtBQVIsR0FBZ0JFLEtBQXpDLENBQUQsQ0FBTixDQUF3RHVCLElBQXhELENBQ0UseUJBREY7QUFHRCxLQVZEO0FBWUEsUUFBTVksbUJBQW1CLEdBQUcsbUJBQU0sZ0NBQUMsa0JBQUQ7QUFBb0IsTUFBQSxRQUFRO0FBQTVCLE1BQU4sQ0FBNUI7QUFDQUEsSUFBQUEsbUJBQW1CLENBQUNyQyxLQUFwQixHQUE0QkMsU0FBNUIsQ0FBc0NxQyxtQkFBdEMsQ0FBMEQsS0FBMUQ7QUFDQUQsSUFBQUEsbUJBQW1CLENBQ2hCZCxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLFlBSFo7QUFJQVcsSUFBQUEsbUJBQW1CLENBQ2hCZCxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLFlBSFo7QUFJQWIsSUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNELEdBckVDLENBQUY7QUF1RUFiLEVBQUFBLEVBQUUsQ0FBQyxZQUFELEVBQWUsWUFBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUcsbUJBQ2QsZ0NBQUMsa0JBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBRSxJQUFJZixJQUFKLENBQVMsWUFBVCxDQURYO0FBRUUsTUFBQSxPQUFPLEVBQUUsSUFBSUEsSUFBSixDQUFTLFlBQVQ7QUFGWCxNQURjLENBQWhCO0FBTUEsd0JBQUksWUFBTTtBQUNSZSxNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxRQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dFLFFBSEgsQ0FHWSxRQUhaLEVBR3NCO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFFekIsVUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixPQUh0QjtBQUlBZ0IsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRSxRQUhILENBR1ksUUFIWixFQUdzQjtBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBRXpCLFVBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsT0FIdEI7QUFJQVcsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQWIsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQWIsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQWIsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRSxRQUhILENBR1ksUUFIWixFQUdzQjtBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBRXpCLFVBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsT0FIdEI7QUFJQWdCLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLFFBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0UsUUFISCxDQUdZLFFBSFosRUFHc0I7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQUV6QixVQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLE9BSHRCO0FBSUFXLE1BQUFBLElBQUksQ0FBQ2lCLFlBQUw7QUFDQVosTUFBQUEsT0FBTyxDQUFDYSxNQUFSO0FBQ0FiLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUFiLE1BQUFBLElBQUksQ0FBQ2lCLFlBQUw7QUFDQVosTUFBQUEsT0FBTyxDQUFDYSxNQUFSO0FBQ0QsS0FqQ0Q7QUFrQ0QsR0F6Q0MsQ0FBRjtBQTBDRCxDQXRUTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCIuLlwiXG5pbXBvcnQgeyBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcsIGNvbnZlcnREYXRlVG9TdHJpbmcgfSBmcm9tIFwiLi4vY29yZVwiXG5pbXBvcnQgeyBhY3QgfSBmcm9tIFwicmVhY3QtZG9tL3Rlc3QtdXRpbHNcIlxuXG5jb25zdCBSYW5nZVBpY2tlciA9IERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcblxuY2xhc3MgUmFuZ2VQaWNrZXJNb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHZhbHVlOiBbbmV3IERhdGUoKSwgbmV3IERhdGUoKV0sXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxSYW5nZVBpY2tlclxuICAgICAgICBzaG9ydGN1dHM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLnpZblm73nlJ/ml6VcIixcbiAgICAgICAgICAgIHZhbHVlOiBbbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpLCBuZXcgRGF0ZShcIjIwMjAtMTAtMDdcIildLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIHJlZj17Y29tcG9uZW50ID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tcG9uZW50IH0pXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBjbG9zZU9uU2VsZWN0XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbCB9KX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtib29sID0+IHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBib29sIH0pfVxuICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiUmFuZ2VQaWNrZXJcIiwgKCkgPT4ge1xuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxSYW5nZVBpY2tlciAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gW25ldyBEYXRlKFwiMjAyMC0wMi0wMlwiKSwgbmV3IERhdGUoXCIyMDIwLTAzLTAxXCIpXVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxSYW5nZVBpY2tlciBkZWZhdWx0VmFsdWU9e3ZhbH0gZGVmYXVsdFZpc2libGU9e2ZhbHNlfSBjbG9zZU9uU2VsZWN0IC8+XG4gICAgKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICApLnRvQmUoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbCkpXG5cbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImZvY3VzXCIpXG5cbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICkudG9CZSh0cnVlKVxuXG4gICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiXCIgfSB9KVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0JlKFwiXCIpXG5cbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAyMC0wMi0yMiAtIDIwMjAtMDItMjhcIiB9IH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcImlucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvQmUoXCIyMDIwLTAyLTIyIC0gMjAyMC0wMi0yOFwiKVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleTogXCJlbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKGZhbHNlKVxuICAgIH0pXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTUpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBjb25zdCBleHBlY3RlZFZhbCA9IGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhbXG4gICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgICAgIC5hdCgxNClcbiAgICAgICAgICAgIC5wcm9wcygpW1wiYXJpYS1sYWJlbFwiXSArIFwiIDEyOjAwXCJcbiAgICAgICAgKSxcbiAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgd3JhcHBlclxuICAgICAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAgICAgLmF0KDE1KVxuICAgICAgICAgICAgLnByb3BzKClbXCJhcmlhLWxhYmVsXCJdICsgXCIgMTI6MDBcIlxuICAgICAgICApLFxuICAgICAgXSlcbiAgICAgIC8vIOetieW+hSAzNTBtc1xuICAgICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICAgICkudG9CZShmYWxzZSlcbiAgICB9KVxuICB9KVxuXG4gIGl0KFwi5aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICAvKipcbiAgICAgKiDku6XkuIvpg73mmK/pqozor4HlpJbpg6jmjqfliLbml7blhoXpg6jnmoTlpLHmlYhcbiAgICAgKi9cbiAgICBjb25zdCB2YWwgPSBbbmV3IERhdGUoKSwgbmV3IERhdGUoKV1cbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8UmFuZ2VQaWNrZXIgdmFsdWU9e1tuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpXX0gdmlzaWJsZSBjbG9zZU9uU2VsZWN0IC8+XG4gICAgKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICApLnRvQmUoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbCkpXG5cbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICkudG9CZSh0cnVlKVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTQpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE1KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgLy8g562J5b6FIDM1MG1zXG4gICAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgICApLnRvQmUoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKHZhbCkpXG4gICAgfSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE1KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNilcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIC8vIOetieW+hSAzNTBtc1xuICAgICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICAgKS50b0JlKGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh2YWwpKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKHRydWUpXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIOS7peS4i+aYr+mqjOivgeWklumDqOaOp+WItuaXtiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMg55qE5pyJ5pWIXG4gICAgICovXG4gICAgY29uc3QgbW91bnRlciA9IG1vdW50KDxSYW5nZVBpY2tlck1vdW50ZXIgLz4pXG4gICAgY29uc3QgdG9kYXkgPSBjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcobmV3IERhdGUoKSlcbiAgICBtb3VudGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAyMC0wMi0yMiAtIDIwMjAtMDItMjZcIiB9IH0pXG4gICAgZXhwZWN0KGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhtb3VudGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFxuICAgICAgXCIyMDIwLTAyLTIyIC0gMjAyMC0wMi0yNlwiXG4gICAgKVxuICAgIG1vdW50ZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIyMDIwLTAyLTI1IC0gMjAyMC0wMi0yNlwiIH0gfSlcbiAgICBleHBlY3QoY29udmVydERhdGVSYW5nZVRvU3RyaW5nKG1vdW50ZXIuc3RhdGUoKS52YWx1ZSkpLnRvQmUoXG4gICAgICBcIjIwMjAtMDItMjUgLSAyMDIwLTAyLTI2XCJcbiAgICApXG4gICAgbW91bnRlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiXCIgfSB9KVxuICAgIGV4cGVjdChjb252ZXJ0RGF0ZVJhbmdlVG9TdHJpbmcobW91bnRlci5zdGF0ZSgpLnZhbHVlKSkudG9CZShcIlwiKVxuICAgIGV4cGVjdChcbiAgICAgIG1vdW50ZXJcbiAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIG1vdW50ZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTUpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBtb3VudGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE2KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgbW91bnRlci51cGRhdGUoKVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCJEYXlQaWNrZXIg5pON5L2cXCIsICgpID0+IHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFJhbmdlUGlja2VyTW91bnRlciAvPilcbiAgICBjb25zdCBleHBlY3RlZFJhbmdlID0gW11cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxMClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGV4cGVjdGVkUmFuZ2VbMF0gPSBuZXcgRGF0ZShcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgICAuYXQoMTApXG4gICAgICAgICAgLnByb3BzKClbXCJhcmlhLWxhYmVsXCJdICsgXCIgMTI6MDBcIlxuICAgICAgKVxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImJ1dHRvblwiKVxuICAgICAgICAuYXQoMSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJidXR0b25cIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgfSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDEwKVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgZXhwZWN0ZWRSYW5nZVsxXSA9IG5ldyBEYXRlKFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAgIC5hdCgxMClcbiAgICAgICAgICAucHJvcHMoKVtcImFyaWEtbGFiZWxcIl0gKyBcIiAxMjowMFwiXG4gICAgICApXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh3cmFwcGVyLnN0YXRlKCkudmFsdWUpID09PVxuICAgICAgICAgIGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyhleHBlY3RlZFJhbmdlKVxuICAgICAgKS50b0JlKHRydWUpXG4gICAgfSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1zaG9ydGN1dFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleTogXCJlbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KGNvbnZlcnREYXRlUmFuZ2VUb1N0cmluZyh3cmFwcGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFxuICAgICAgICBcIjIwMjAtMTAtMDEgLSAyMDIwLTEwLTA3XCJcbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3Qgd3JhcHBlckZvckNvdmVyYWdlMCA9IG1vdW50KDxSYW5nZVBpY2tlck1vdW50ZXIgZGlzYWJsZWQgLz4pXG4gICAgd3JhcHBlckZvckNvdmVyYWdlMC5zdGF0ZSgpLmNvbXBvbmVudC5oYW5kbGVWaXNpYmxlQ2hhbmdlKGZhbHNlKVxuICAgIHdyYXBwZXJGb3JDb3ZlcmFnZTBcbiAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgIC5hdCgxNClcbiAgICAgIC5zaW11bGF0ZShcIm1vdXNlZW50ZXJcIilcbiAgICB3cmFwcGVyRm9yQ292ZXJhZ2UwXG4gICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAuYXQoMTQpXG4gICAgICAuc2ltdWxhdGUoXCJtb3VzZWxlYXZlXCIpXG4gICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwi5rWL6K+VIG1pbiBtYXhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxSYW5nZVBpY2tlck1vdW50ZXJcbiAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoXCIyMDE4LTEyLTMxXCIpfVxuICAgICAgICBtYXhEYXRlPXtuZXcgRGF0ZShcIjIwMjAtMDEtMDFcIil9XG4gICAgICAvPlxuICAgIClcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjIwMTlcIiB9IH0pXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5hdCgxKVxuICAgICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMVwiIH0gfSlcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTQpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5hdCgxKVxuICAgICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMTFcIiB9IH0pXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAyMFwiIH0gfSlcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTQpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=