"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var TimePickerTest = function (_React$Component) {
  _inherits(TimePickerTest, _React$Component);

  var _super = _createSuper(TimePickerTest);

  function TimePickerTest() {
    var _this;

    _classCallCheck(this, TimePickerTest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: "09:00"
    };
    return _this;
  }

  _createClass(TimePickerTest, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return React.createElement("div", null, React.createElement(_["default"], {
        closeOnSelect: true,
        value: value,
        onChange: function onChange(val) {
          return _this2.setState({
            value: val
          });
        },
        minTime: "08:40",
        maxTime: "09:20",
        ref: function ref(node) {
          if (node) {
            _this2.picker = node;
          }

          return null;
        }
      }));
    }
  }]);

  return TimePickerTest;
}(React.Component);

function timeout(ms) {
  return function (done) {
    setTimeout(done, ms);
  };
}

describe("TimePicker", function () {
  beforeAll(function () {
    jest.useFakeTimers();
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], null));

    expect(wrapper).toMatchSnapshot();
  });
  it("各种情况快照核对", function () {
    var wrapper0 = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      size: "mini",
      theme: "light",
      onlyHour: true,
      disabled: true
    }));

    expect(wrapper0).toMatchSnapshot();
  });
  it("输入事件", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], null));
    var input = wrapper.find("input");
    input.simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    input.simulate("change", {
      target: {
        value: " "
      }
    });
    input.simulate("change", {
      target: {
        value: "16:07"
      }
    });
    expect(wrapper.find("Input").props().value).toEqual("16:07");
    input.simulate("keydown", {
      keyCode: 13
    });
    expect(wrapper.find("Popover").props().visible).toEqual(false);
  });
  it("点击事件", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(TimePickerTest, null));
    expect(wrapper.find("Popover").props().visible).toEqual(false);
    wrapper.find("input").simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
  });
  it("内部驱动", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      defaultValue: "09:20"
    }));
    var input = wrapper.find("input");
    input.simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    wrapper.find(".adui-time-item").at(0).simulate("click");
    expect(wrapper.find("Input").props().value).toEqual("00:20");
  });
  it("外部控制", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      value: "09:00",
      onlyHour: true
    }));
    var input = wrapper.find("input");
    input.simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    wrapper.find(".adui-time-item").at(0).simulate("click");
    expect(wrapper.find("Input").props().value).toEqual("09:00");
  });
  it("测试禁用", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      disabled: true
    }));
    var input = wrapper.find("input");
    input.simulate("click");
    expect(wrapper.find("Popover").props().visible).toEqual(false);
  });
  it("测试最大时间和最小时间", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      minTime: "09:00",
      maxTime: "09:20",
      defaultValue: "09:10"
    }));
    var input = wrapper.find("input");
    input.simulate("change", {
      target: {
        value: "09:30"
      }
    });
    input.simulate("focus");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlRpbWVQaWNrZXJUZXN0Iiwic3RhdGUiLCJ2YWx1ZSIsInZhbCIsInNldFN0YXRlIiwibm9kZSIsInBpY2tlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwidGltZW91dCIsIm1zIiwiZG9uZSIsInNldFRpbWVvdXQiLCJkZXNjcmliZSIsImJlZm9yZUFsbCIsImplc3QiLCJ1c2VGYWtlVGltZXJzIiwiYWZ0ZXJBbGwiLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwid3JhcHBlcjAiLCJpbnB1dCIsImZpbmQiLCJzaW11bGF0ZSIsInByb3BzIiwidmlzaWJsZSIsInRvRXF1YWwiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiYXQiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLEtBQUssRUFBRTtBQURELEs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLFVBQ0NBLEtBREQsR0FDVyxLQUFLRCxLQURoQixDQUNDQyxLQUREO0FBRVAsYUFDRSxpQ0FDRSxvQkFBQyxZQUFEO0FBQ0UsUUFBQSxhQUFhLE1BRGY7QUFFRSxRQUFBLEtBQUssRUFBRUEsS0FGVDtBQUdFLFFBQUEsUUFBUSxFQUFFLGtCQUFBQyxHQUFHO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUYsWUFBQUEsS0FBSyxFQUFFQztBQUFULFdBQWQsQ0FBSjtBQUFBLFNBSGY7QUFJRSxRQUFBLE9BQU8sRUFBQyxPQUpWO0FBS0UsUUFBQSxPQUFPLEVBQUMsT0FMVjtBQU1FLFFBQUEsR0FBRyxFQUFFLGFBQUFFLElBQUks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QWEsT0FBYixDQUFkO0FBQ0FELElBQUFBLEtBQUssQ0FBQ0UsUUFBTixDQUFlLFFBQWYsRUFBeUI7QUFBRUksTUFBQUEsTUFBTSxFQUFFO0FBQUU5QixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLEtBQXpCO0FBQ0F3QixJQUFBQSxLQUFLLENBQUNFLFFBQU4sQ0FBZSxPQUFmO0FBQ0FMLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDTyxJQUFSLENBQWEsU0FBYixFQUF3QkUsS0FBeEIsR0FBZ0NDLE9BQWpDLENBQU4sQ0FBZ0RDLE9BQWhELENBQXdELElBQXhEO0FBQ0QsR0FSQyxDQUFGO0FBU0QsQ0F0SU8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgeyBhY3QgfSBmcm9tIFwicmVhY3QtZG9tL3Rlc3QtdXRpbHNcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBhc3luYyBmcm9tIFwiYXN5bmNcIlxuaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSBcIi4uXCJcblxuY2xhc3MgVGltZVBpY2tlclRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogXCIwOTowMFwiLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICBjbG9zZU9uU2VsZWN0XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSl9XG4gICAgICAgICAgbWluVGltZT1cIjA4OjQwXCJcbiAgICAgICAgICBtYXhUaW1lPVwiMDk6MjBcIlxuICAgICAgICAgIHJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICB0aGlzLnBpY2tlciA9IG5vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lb3V0KG1zOiBudW1iZXIpIHtcbiAgcmV0dXJuIChkb25lOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgc2V0VGltZW91dChkb25lLCBtcylcbiAgfVxufVxuXG5kZXNjcmliZShcIlRpbWVQaWNrZXJcIiwgKCkgPT4ge1xuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxUaW1lUGlja2VyIC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5ZCE56eN5oOF5Ya15b+r54Wn5qC45a+5XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyMCA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8VGltZVBpY2tlciBzaXplPVwibWluaVwiIHRoZW1lPVwibGlnaHRcIiBvbmx5SG91ciBkaXNhYmxlZCAvPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjApLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCLovpPlhaXkuovku7ZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8VGltZVBpY2tlciAvPilcbiAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIuZmluZChcImlucHV0XCIpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJmb2N1c1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbCh0cnVlKVxuICAgIGlucHV0LnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIiBcIiB9IH0pXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMTY6MDdcIiB9IH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIklucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvRXF1YWwoXCIxNjowN1wiKVxuICAgIGlucHV0LnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleUNvZGU6IDEzIH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlBvcG92ZXJcIikucHJvcHMoKS52aXNpYmxlKS50b0VxdWFsKGZhbHNlKVxuICB9KVxuXG4gIGl0KFwi54K55Ye75LqL5Lu2XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRpbWVQaWNrZXJUZXN0IC8+KVxuXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlBvcG92ZXJcIikucHJvcHMoKS52aXNpYmxlKS50b0VxdWFsKGZhbHNlKVxuXG4gICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJmb2N1c1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbCh0cnVlKVxuXG4gICAgLy8gYWN0KCgpID0+IHtcbiAgICAvLyAgIHdyYXBwZXJcbiAgICAvLyAgICAgLmZpbmQoXCIuYWR1aS10aW1lLWl0ZW1cIilcbiAgICAvLyAgICAgLmF0KDApXG4gICAgLy8gICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8gICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoNTApXG4gICAgLy8gICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgLy8gICBleHBlY3Qod3JhcHBlci5maW5kKFwiSW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9FcXVhbChcIjA4OjQwXCIpXG5cbiAgICAvLyAgIHdyYXBwZXJcbiAgICAvLyAgICAgLmZpbmQoXCIuYWR1aS10aW1lLWl0ZW1cIilcbiAgICAvLyAgICAgLmF0KDQyKVxuICAgIC8vICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vICAgd3JhcHBlci51cGRhdGUoKVxuICAgIC8vICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDUwKVxuICAgIC8vICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIklucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvRXF1YWwoXCIwODo0MFwiKVxuXG4gICAgLy8gICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIwNzo0MFwiIH0gfSlcbiAgICAvLyAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjA4OjRcIiB9IH0pXG4gICAgLy8gICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgLy8gICBleHBlY3Qod3JhcHBlci5maW5kKFwiSW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9FcXVhbChcIjA4OjQwXCIpXG4gICAgLy8gfSlcblxuICAgIC8vIGFjdCgoKSA9PiB7XG4gICAgLy8gICB3cmFwcGVyXG4gICAgLy8gICAgIC5maW5kKFwiLmFkdWktdGltZS1pdGVtXCIpXG4gICAgLy8gICAgIC5hdCgxKVxuICAgIC8vICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIC8vICAgd3JhcHBlci51cGRhdGUoKVxuICAgIC8vICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICAvLyAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJJbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0VxdWFsKFwiMDk6MjBcIilcbiAgICAvLyAgIGRvbmUoKVxuICAgIC8vIH0pXG5cbiAgICAvLyBhY3QoKCkgPT4ge1xuICAgIC8vICAgd3JhcHBlclxuICAgIC8vICAgICAuZmluZChcIi5hZHVpLXRpbWUtaXRlbVwiKVxuICAgIC8vICAgICAuYXQoMSlcbiAgICAvLyAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAvLyAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAvLyAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJJbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0VxdWFsKFwiMDk6MjBcIilcbiAgICAvLyB9KVxuXG4gICAgLy8gYWN0KCgpID0+IHtcbiAgICAvLyAgIHdyYXBwZXJcbiAgICAvLyAgICAgLmZpbmQoXCIuYWR1aS10aW1lLWl0ZW1cIilcbiAgICAvLyAgICAgLmF0KDApXG4gICAgLy8gICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8gICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgLy8gICBleHBlY3Qod3JhcHBlci5maW5kKFwiSW5wdXRcIikucHJvcHMoKS52YWx1ZSkudG9FcXVhbChcIjA4OjQwXCIpXG4gICAgLy8gfSlcbiAgfSlcblxuICBpdChcIuWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUaW1lUGlja2VyIGRlZmF1bHRWYWx1ZT1cIjA5OjIwXCIgLz4pXG4gICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKVxuICAgIGlucHV0LnNpbXVsYXRlKFwiZm9jdXNcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwodHJ1ZSlcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLXRpbWUtaXRlbVwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJJbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0VxdWFsKFwiMDA6MjBcIilcbiAgfSlcblxuICBpdChcIuWklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxUaW1lUGlja2VyIHZhbHVlPVwiMDk6MDBcIiBvbmx5SG91ciAvPilcbiAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIuZmluZChcImlucHV0XCIpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJmb2N1c1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbCh0cnVlKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktdGltZS1pdGVtXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIklucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvRXF1YWwoXCIwOTowMFwiKVxuICB9KVxuXG4gIGl0KFwi5rWL6K+V56aB55SoXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRpbWVQaWNrZXIgZGlzYWJsZWQgLz4pXG4gICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKVxuICAgIGlucHV0LnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCLmtYvor5XmnIDlpKfml7bpl7TlkozmnIDlsI/ml7bpl7RcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUaW1lUGlja2VyIG1pblRpbWU9XCIwOTowMFwiIG1heFRpbWU9XCIwOToyMFwiIGRlZmF1bHRWYWx1ZT1cIjA5OjEwXCIgLz5cbiAgICApXG4gICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKVxuICAgIGlucHV0LnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjA5OjMwXCIgfSB9KVxuICAgIGlucHV0LnNpbXVsYXRlKFwiZm9jdXNcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwodHJ1ZSlcbiAgfSlcbn0pXG4iXX0=