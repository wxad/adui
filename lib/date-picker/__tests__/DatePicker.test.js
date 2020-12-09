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
      expect(today.getMonth() - wrapper.state().value.getMonth()).toBe(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvX190ZXN0c19fL0RhdGVQaWNrZXIudGVzdC50c3giXSwibmFtZXMiOlsiRGF0ZVBpY2tlck1vdW50ZXIiLCJzdGF0ZSIsImNvbXBvbmVudCIsInZhbHVlIiwiRGF0ZSIsInZpc2libGUiLCJsYWJlbCIsInNldFN0YXRlIiwidmFsIiwiYm9vbCIsInByb3BzIiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJiZWZvcmVBbGwiLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyQWxsIiwidXNlUmVhbFRpbWVycyIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsImZpbmQiLCJhdCIsInRvQmUiLCJzaW11bGF0ZSIsInRhcmdldCIsImtleSIsImtleUNvZGUiLCJydW5BbGxUaW1lcnMiLCJ1cGRhdGUiLCJleHBlY3RlZFZhbCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiLCJtb3VudGVyIiwidG9kYXkiLCJnZXRNb250aCIsIndyYXBwZXJGb3JDb3ZlcmFnZTAiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxpQjs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNOQyxNQUFBQSxTQUFTLEVBQUUsSUFETDtBQUVOQyxNQUFBQSxLQUFLLEVBQUUsSUFBSUMsSUFBSixFQUZEO0FBR05DLE1BQUFBLE9BQU8sRUFBRTtBQUhILEs7Ozs7Ozs2QkFNQztBQUFBOztBQUFBLHdCQUNvQixLQUFLSixLQUR6QjtBQUFBLFVBQ0NFLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FFLE9BRFIsZUFDUUEsT0FEUjtBQUVQLGFBQ0UsZ0NBQUMsWUFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLENBQ1Q7QUFDRUMs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RFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0UsUUFISCxDQUdZLFFBSFosRUFHc0I7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQUV6QixVQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLE9BSHRCO0FBSUFnQixNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxRQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dFLFFBSEgsQ0FHWSxRQUhaLEVBR3NCO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFFekIsVUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixPQUh0QjtBQUlBVyxNQUFBQSxJQUFJLENBQUNpQixZQUFMO0FBQ0FaLE1BQUFBLE9BQU8sQ0FBQ2EsTUFBUjtBQUNBYixNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxnQkFEUixFQUVHQyxFQUZILENBRU0sRUFGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUlBYixNQUFBQSxJQUFJLENBQUNpQixZQUFMO0FBQ0FaLE1BQUFBLE9BQU8sQ0FBQ2EsTUFBUjtBQUNELEtBakJEO0FBa0JELEdBcEJDLENBQUY7QUFxQkQsQ0E1T08sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwiLi5cIlxuaW1wb3J0IHsgY29udmVydERhdGVUb1N0cmluZyB9IGZyb20gXCIuLi9jb3JlXCJcbmltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5cbmNsYXNzIERhdGVQaWNrZXJNb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIHZhbHVlOiBuZXcgRGF0ZSgpLFxuICAgIHZpc2libGU6IHRydWUsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8RGF0ZVBpY2tlclxuICAgICAgICBzaG9ydGN1dHM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLnpZblm73nlJ/ml6VcIixcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShcIjIwMjAtMTAtMDFcIiksXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgICAgcmVmPXtjb21wb25lbnQgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wb25lbnQgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIGNsb3NlT25TZWxlY3RcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBvbkNoYW5nZT17dmFsID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsIH0pfVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e2Jvb2wgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGJvb2wgfSl9XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJEYXRlUGlja2VyXCIsICgpID0+IHtcbiAgYmVmb3JlQWxsKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuICB9KVxuXG4gIGFmdGVyQWxsKCgpID0+IHtcbiAgICBqZXN0LnVzZVJlYWxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8RGF0ZVBpY2tlciAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3QgdmFsID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxEYXRlUGlja2VyIGRlZmF1bHRWYWx1ZT17dmFsfSBkZWZhdWx0VmlzaWJsZT17ZmFsc2V9IGNsb3NlT25TZWxlY3QgLz5cbiAgICApXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICkudG9CZShjb252ZXJ0RGF0ZVRvU3RyaW5nKHZhbCkpXG5cbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImZvY3VzXCIpXG5cbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICkudG9CZSh0cnVlKVxuXG4gICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiXCIgfSB9KVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0JlKFwiXCIpXG5cbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAyMC0wMi0yMlwiIH0gfSlcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiaW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9CZShcIjIwMjAtMDItMjJcIilcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImtleWRvd25cIiwgeyBrZXk6IFwiZW50ZXJcIiwga2V5Q29kZTogMTMgfSlcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICAgICkudG9CZShmYWxzZSlcbiAgICB9KVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTQpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBjb25zdCBleHBlY3RlZFZhbCA9IGNvbnZlcnREYXRlVG9TdHJpbmcoXG4gICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgICAgIC5hdCgxNClcbiAgICAgICAgICAgIC5wcm9wcygpW1wiYXJpYS1sYWJlbFwiXVxuICAgICAgICApXG4gICAgICApXG4gICAgICAvLyDnrYnlvoUgMzUwbXNcbiAgICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSgzNTApXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICAgICkudG9CZShleHBlY3RlZFZhbClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICAgICkudG9CZShmYWxzZSlcbiAgICB9KVxuICB9KVxuXG4gIGl0KFwi5aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICAvKipcbiAgICAgKiDku6XkuIvpg73mmK/pqozor4HlpJbpg6jmjqfliLbml7blhoXpg6jnmoTlpLHmlYhcbiAgICAgKi9cbiAgICBjb25zdCB2YWwgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPERhdGVQaWNrZXIgdmFsdWU9e25ldyBEYXRlKCl9IHZpc2libGUgY2xvc2VPblNlbGVjdCAvPlxuICAgIClcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgKS50b0JlKGNvbnZlcnREYXRlVG9TdHJpbmcodmFsKSlcblxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIC8vIOetieW+hSAzNTBtc1xuICAgICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICAgKS50b0JlKGNvbnZlcnREYXRlVG9TdHJpbmcodmFsKSlcbiAgICB9KVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTUpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICAvLyDnrYnlvoUgMzUwbXNcbiAgICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSgzNTApXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICAgICkudG9CZShjb252ZXJ0RGF0ZVRvU3RyaW5nKHZhbCkpXG4gICAgICBleHBlY3QoXG4gICAgICAgIHdyYXBwZXJcbiAgICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgICApLnRvQmUodHJ1ZSlcbiAgICB9KVxuXG4gICAgLyoqXG4gICAgICog5Lul5LiL5piv6aqM6K+B5aSW6YOo5o6n5Yi25pe2IGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyDnmoTmnInmlYhcbiAgICAgKi9cbiAgICBjb25zdCBtb3VudGVyID0gbW91bnQoPERhdGVQaWNrZXJNb3VudGVyIC8+KVxuICAgIGNvbnN0IHRvZGF5ID0gY29udmVydERhdGVUb1N0cmluZyhuZXcgRGF0ZSgpKVxuICAgIG1vdW50ZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIyMDIwLTAyLTIyXCIgfSB9KVxuICAgIGV4cGVjdChjb252ZXJ0RGF0ZVRvU3RyaW5nKG1vdW50ZXIuc3RhdGUoKS52YWx1ZSkpLnRvQmUoXCIyMDIwLTAyLTIyXCIpXG4gICAgbW91bnRlclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjIwMjAtMDItMzFcIiB9IH0pXG4gICAgZXhwZWN0KGNvbnZlcnREYXRlVG9TdHJpbmcobW91bnRlci5zdGF0ZSgpLnZhbHVlKSkudG9CZShcIjIwMjAtMDItMjJcIilcbiAgICBtb3VudGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJcIiB9IH0pXG4gICAgZXhwZWN0KGNvbnZlcnREYXRlVG9TdHJpbmcobW91bnRlci5zdGF0ZSgpLnZhbHVlKSkudG9CZShcIlwiKVxuICAgIGV4cGVjdChcbiAgICAgIG1vdW50ZXJcbiAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIG1vdW50ZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTUpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICBtb3VudGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoXG4gICAgICAgIG1vdW50ZXJcbiAgICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgICApLnRvQmUoZmFsc2UpXG4gICAgfSlcbiAgfSlcblxuICBpdChcIkRheVBpY2tlciDmk43kvZxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8RGF0ZVBpY2tlck1vdW50ZXIgLz4pXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJidXR0b25cIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdCh0b2RheS5nZXRNb250aCgpIC0gd3JhcHBlci5zdGF0ZSgpLnZhbHVlLmdldE1vbnRoKCkpLnRvQmUoMSlcbiAgICB9KVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLXNob3J0Y3V0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KGNvbnZlcnREYXRlVG9TdHJpbmcod3JhcHBlci5zdGF0ZSgpLnZhbHVlKSkudG9CZShcIjIwMjAtMTAtMDFcIilcbiAgICB9KVxuXG4gICAgY29uc3Qgd3JhcHBlckZvckNvdmVyYWdlMCA9IG1vdW50KDxEYXRlUGlja2VyTW91bnRlciBkaXNhYmxlZCAvPilcbiAgICB3cmFwcGVyRm9yQ292ZXJhZ2UwLnN0YXRlKCkuY29tcG9uZW50LmhhbmRsZVZpc2libGVDaGFuZ2UoZmFsc2UpXG4gICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwiRGF5UGlja2VyIOW5tOaciOWIh+aNolwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxEYXRlUGlja2VyTW91bnRlciAvPilcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcInNlbGVjdFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjIwMThcIiB9IH0pXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5hdCgxKVxuICAgICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMVwiIH0gfSlcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAuYXQoMTQpXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgfSlcbiAgfSlcbn0pXG4iXX0=