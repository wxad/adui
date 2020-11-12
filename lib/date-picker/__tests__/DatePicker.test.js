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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvX190ZXN0c19fL0RhdGVQaWNrZXIudGVzdC50c3giXSwibmFtZXMiOlsiRGF0ZVBpY2tlck1vdW50ZXIiLCJzdGF0ZSIsImNvbXBvbmVudCIsInZhbHVlIiwiRGF0ZSIsInZpc2libGUiLCJsYWJlbCIsInNldFN0YXRlIiwidmFsIiwiYm9vbCIsInByb3BzIiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJiZWZvcmVBbGwiLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyQWxsIiwidXNlUmVhbFRpbWVycyIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsImZpbmQiLCJhdCIsInRvQmUiLCJzaW11bGF0ZSIsInRhcmdldCIsImtleSIsImtleUNvZGUiLCJydW5BbGxUaW1lcnMiLCJ1cGRhdGUiLCJleHBlY3RlZFZhbCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiLCJtb3VudGVyIiwidG9kYXkiLCJnZXRNb250aCIsIndyYXBwZXJGb3JDb3ZlcmFnZTAiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGlCOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLFNBQVMsRUFBRSxJQURMO0FBRU5DLE1BQUFBLEtBQUssRUFBRSxJQUFJQyxJQUFKLEVBRkQ7QUFHTkMsTUFBQUEsT0FBTyxFQUFFO0FBSEgsSzs7Ozs7OzZCQU1DO0FBQUE7O0FBQUEsd0JBQ29CLEtBQUtKLEtBRHpCO0FBQUEsVUFDQ0UsS0FERCxlQUNDQSxLQUREO0FBQUEsVUFDUUUsT0FEUixlQUNRQSxPQURSO0FBRVAsYUFDRSxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsQ0FDVDtBQUNFQyxVQUFBQSxLQUFLLEVBQUUsTUFEVDtBQUVFSCxVQUFBQSxLQUFLLEVBQUUsSUFBSUMsSUFBSixDQUFTLFlBQVQ7QUFGVCxTQURTLENBRGI7QUFPRSxRQUFBLEdBQUcsRUFBRSxhQUFBRixTQUFTLEVBQUk7QUFDaEIsY0FBSSxDQUFDLE1BQUksQ0FBQ0QsS0FBTCxDQUFXQyxTQUFoQixFQUEyQjtBQUN6QixZQUFBLE1BQUksQ0FBQ0ssUUFBTCxDQUFjO0FBQUVMLGNBQUFBLFNBQVMsRUFBVEE7QUFBRixhQUFkO0FBQ0Q7QUFDRixTQVhIO0FBWUUsUUFBQSxhQUFhLE1BWmY7QUFhRSxRQUFBLEtBQUssRUFBRUMsS0FiVDtBQWNFLFFBQUEsT0FBTyxFQUFFRSxPQWRYO0FBZUUsUUFBQSxRQUFRLEVBQUUsa0JBQUFHLEdBQUc7QUFBQSxpQkFBSSxNQUFJLENBQUNELFFBQUwsQ0FBYztBQUFFSixZQUFBQSxLQUFLLEVBQUVLO0FBQVQsV0FBZCxDQUFKO0FBQUEsU0FmZjtBQWdCRSxRQUFBLGVBQWUsRUFBRSx5QkFBQUMsSUFBSTtBQUFBLGlCQUFJLE1BQUksQ0FBQ0YsUUFBTCxDQUFjO0FBQUVGLFlBQUFBLE9BQU8sRUFBRUk7QUFBWCxXQUFkLENBQUo7QUFBQTtBQWhCdkIsU0FpQk0sS0FBS0MsS0FqQlgsRUFERjtBQXFCRDs7OztFQTlCNkJDLGdCOztBQWlDaENDLFFBQVEsQ0FBQyxZQUFELEVBQWUsWUFBTTtBQUMzQkMsRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZEMsSUFBQUEsSUFBSSxDQUFDQyxhQUFMO0FBQ0QsR0FGUSxDQUFUO0FBSUFDLEVBQUFBLFFBQVEsQ0FBQyxZQUFNO0FBQ2JGLElBQUFBLElBQUksQ0FBQ0csYUFBTDtBQUNELEdBRk8sQ0FBUjtBQUlBQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUFvQixnQ0FBQyxZQUFELE9BQXBCLENBQWhCOztBQUNBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQUhDLENBQUY7QUFLQUwsRUFBQUEsRUFBRSxDQUFDLE1BQUQsRUFBUyxZQUFNO0FBQ2YsUUFBTVYsR0FBRyxHQUFHLElBQUlKLElBQUosRUFBWjtBQUNBLFFBQU1lLE9BQU8sR0FBRyxtQkFDZCxnQ0FBQyxZQUFEO0FBQVksTUFBQSxZQUFZLEVBQUVYLEdBQTFCO0FBQStCLE1BQUEsY0FBYyxFQUFFLEtBQS9DO0FBQXNELE1BQUEsYUFBYTtBQUFuRSxNQURjLENBQWhCO0FBR0FjLElBQUFBLE1BQU0sQ0FDSkgsT0FBTyxDQUNKSyxJQURILENBQ1EsT0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHZixLQUhILEdBR1dQLEtBSlAsQ0FBTixDQUtFdUIsSUFMRixDQUtPLCtCQUFvQmxCLEdBQXBCLENBTFA7QUFPQVcsSUFBQUEsT0FBTyxDQUFDSyxJQUFSLENBQWEsT0FBYixFQUFzQkcsUUFBdEIsQ0FBK0IsT0FBL0I7QUFFQUwsSUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxTQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV0wsT0FKUCxDQUFOLENBS0VxQixJQUxGLENBS08sSUFMUDtBQU9BUCxJQUFBQSxPQUFPLENBQUNLLElBQVIsQ0FBYSxPQUFiLEVBQXNCRyxRQUF0QixDQUErQixRQUEvQixFQUF5QztBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBRXpCLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsS0FBekM7QUFDQW1CLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDSyxJQUFSLENBQWEsT0FBYixFQUFzQmQsS0FBdEIsR0FBOEJQLEtBQS9CLENBQU4sQ0FBNEN1QixJQUE1QyxDQUFpRCxFQUFqRDtBQUVBUCxJQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxPQURSLEVBRUdHLFFBRkgsQ0FFWSxRQUZaLEVBRXNCO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFFekIsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixLQUZ0QjtBQUdBbUIsSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNLLElBQVIsQ0FBYSxPQUFiLEVBQXNCZCxLQUF0QixHQUE4QlAsS0FBL0IsQ0FBTixDQUE0Q3VCLElBQTVDLENBQWlELFlBQWpEO0FBRUEsd0JBQUksWUFBTTtBQUNSUCxNQUFBQSxPQUFPLENBQUNLLElBQVIsQ0FBYSxPQUFiLEVBQXNCRyxRQUF0QixDQUErQixTQUEvQixFQUEwQztBQUFFRSxRQUFBQSxHQUFHLEVBQUUsT0FBUDtBQUFnQkMsUUFBQUEsT0FBTyxFQUFFO0FBQXpCLE9BQTFDO0FBQ0FoQixNQUFBQSxJQUFJLENBQUNpQixZQUFMO0FBQ0FaLE1BQUFBLE9BQU8sQ0FBQ2EsTUFBUjtBQUNBVixNQUFBQSxNQUFNLENBQ0pILE9BQU8sQ0FDSkssSUFESCxDQUNRLFNBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR2YsS0FISCxHQUdXTCxPQUpQLENBQU4sQ0FLRXFCLElBTEYsQ0FLTyxLQUxQO0FBTUQsS0FWRDtBQVlBLHdCQUFJLFlBQU07QUFDUlAsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQSxVQUFNTSxXQUFXLEdBQUcsK0JBQ2xCLElBQUk3QixJQUFKLENBQ0VlLE9BQU8sQ0FDSkssSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dmLEtBSEgsR0FHVyxZQUhYLENBREYsQ0FEa0IsQ0FBcEI7QUFTQUksTUFBQUEsSUFBSSxDQUFDb0IsbUJBQUwsQ0FBeUIsR0FBekI7QUFDQWYsTUFBQUEsT0FBTyxDQUFDYSxNQUFSO0FBQ0FWLE1BQUFBLE1BQU0sQ0FDSkgsT0FBTyxDQUNKSyxJQURILENBQ1EsT0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHZixLQUhILEdBR1dQLEtBSlAsQ0FBTixDQUtFdUIsSUFMRixDQUtPTyxXQUxQO0FBTUFYLE1BQUFBLE1BQU0sQ0FDSkgsT0FBTyxDQUNKSyxJQURILENBQ1EsU0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHZixLQUhILEdBR1dMLE9BSlAsQ0FBTixDQUtFcUIsSUFMRixDQUtPLEtBTFA7QUFNRCxLQTVCRDtBQTZCRCxHQXRFQyxDQUFGO0FBd0VBUixFQUFBQSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQU07QUFJZixRQUFNVixHQUFHLEdBQUcsSUFBSUosSUFBSixFQUFaO0FBQ0EsUUFBTWUsT0FBTyxHQUFHLG1CQUNkLGdDQUFDLFlBQUQ7QUFBWSxNQUFBLEtBQUssRUFBRSxJQUFJZixJQUFKLEVBQW5CO0FBQStCLE1BQUEsT0FBTyxNQUF0QztBQUF1QyxNQUFBLGFBQWE7QUFBcEQsTUFEYyxDQUFoQjtBQUdBa0IsSUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxPQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV1AsS0FKUCxDQUFOLENBS0V1QixJQUxGLENBS08sK0JBQW9CbEIsR0FBcEIsQ0FMUDtBQU9BYyxJQUFBQSxNQUFNLENBQ0pILE9BQU8sQ0FDSkssSUFESCxDQUNRLFNBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR2YsS0FISCxHQUdXTCxPQUpQLENBQU4sQ0FLRXFCLElBTEYsQ0FLTyxJQUxQO0FBT0Esd0JBQUksWUFBTTtBQUNSUCxNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxnQkFEUixFQUVHQyxFQUZILENBRU0sRUFGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUtBYixNQUFBQSxJQUFJLENBQUNvQixtQkFBTCxDQUF5QixHQUF6QjtBQUNBZixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQVYsTUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxPQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV1AsS0FKUCxDQUFOLENBS0V1QixJQUxGLENBS08sK0JBQW9CbEIsR0FBcEIsQ0FMUDtBQU1ELEtBZEQ7QUFnQkEsd0JBQUksWUFBTTtBQUNSVyxNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxnQkFEUixFQUVHQyxFQUZILENBRU0sRUFGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUtBYixNQUFBQSxJQUFJLENBQUNvQixtQkFBTCxDQUF5QixHQUF6QjtBQUNBZixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQVYsTUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQ0pLLElBREgsQ0FDUSxPQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dmLEtBSEgsR0FHV1AsS0FKUCxDQUFOLENBS0V1QixJQUxGLENBS08sK0JBQW9CbEIsR0FBcEIsQ0FMUDtBQU1BYyxNQUFBQSxNQUFNLENBQ0pILE9BQU8sQ0FDSkssSUFESCxDQUNRLFNBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR2YsS0FISCxHQUdXTCxPQUpQLENBQU4sQ0FLRXFCLElBTEYsQ0FLTyxJQUxQO0FBTUQsS0FwQkQ7QUF5QkEsUUFBTVMsT0FBTyxHQUFHLG1CQUFNLGdDQUFDLGlCQUFELE9BQU4sQ0FBaEI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsK0JBQW9CLElBQUloQyxJQUFKLEVBQXBCLENBQWQ7QUFDQStCLElBQUFBLE9BQU8sQ0FDSlgsSUFESCxDQUNRLE9BRFIsRUFFR0csUUFGSCxDQUVZLFFBRlosRUFFc0I7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQUV6QixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLEtBRnRCO0FBR0FtQixJQUFBQSxNQUFNLENBQUMsK0JBQW9CYSxPQUFPLENBQUNsQyxLQUFSLEdBQWdCRSxLQUFwQyxDQUFELENBQU4sQ0FBbUR1QixJQUFuRCxDQUF3RCxZQUF4RDtBQUNBUyxJQUFBQSxPQUFPLENBQ0pYLElBREgsQ0FDUSxPQURSLEVBRUdHLFFBRkgsQ0FFWSxRQUZaLEVBRXNCO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFFekIsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixLQUZ0QjtBQUdBbUIsSUFBQUEsTUFBTSxDQUFDLCtCQUFvQmEsT0FBTyxDQUFDbEMsS0FBUixHQUFnQkUsS0FBcEMsQ0FBRCxDQUFOLENBQW1EdUIsSUFBbkQsQ0FBd0QsWUFBeEQ7QUFDQVMsSUFBQUEsT0FBTyxDQUFDWCxJQUFSLENBQWEsT0FBYixFQUFzQkcsUUFBdEIsQ0FBK0IsUUFBL0IsRUFBeUM7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQUV6QixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLEtBQXpDO0FBQ0FtQixJQUFBQSxNQUFNLENBQUMsK0JBQW9CYSxPQUFPLENBQUNsQyxLQUFSLEdBQWdCRSxLQUFwQyxDQUFELENBQU4sQ0FBbUR1QixJQUFuRCxDQUF3RCxFQUF4RDtBQUNBSixJQUFBQSxNQUFNLENBQ0phLE9BQU8sQ0FDSlgsSUFESCxDQUNRLFNBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR2YsS0FISCxHQUdXTCxPQUpQLENBQU4sQ0FLRXFCLElBTEYsQ0FLTyxJQUxQO0FBTUEsd0JBQUksWUFBTTtBQUNSUyxNQUFBQSxPQUFPLENBQ0pYLElBREgsQ0FDUSxnQkFEUixFQUVHQyxFQUZILENBRU0sRUFGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUlBYixNQUFBQSxJQUFJLENBQUNpQixZQUFMO0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0gsTUFBUjtBQUNBVixNQUFBQSxNQUFNLENBQ0phLE9BQU8sQ0FDSlgsSUFESCxDQUNRLFNBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR2YsS0FISCxHQUdXTCxPQUpQLENBQU4sQ0FLRXFCLElBTEYsQ0FLTyxLQUxQO0FBTUQsS0FiRDtBQWNELEdBL0ZDLENBQUY7QUFpR0FSLEVBQUFBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDdkIsUUFBTWtCLEtBQUssR0FBRyxJQUFJaEMsSUFBSixFQUFkO0FBQ0EsUUFBTWUsT0FBTyxHQUFHLG1CQUFNLGdDQUFDLGlCQUFELE9BQU4sQ0FBaEI7QUFDQUEsSUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUlBLHdCQUFJLFlBQU07QUFDUlIsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsZ0JBRFIsRUFFR0MsRUFGSCxDQUVNLEVBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQWIsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQVYsTUFBQUEsTUFBTSxDQUFDYyxLQUFLLENBQUNDLFFBQU4sS0FBbUJsQixPQUFPLENBQUNsQixLQUFSLEdBQWdCRSxLQUFoQixDQUFzQmtDLFFBQXRCLEVBQXBCLENBQU4sQ0FBNERYLElBQTVELENBQWlFLENBQWpFO0FBQ0QsS0FSRDtBQVVBLHdCQUFJLFlBQU07QUFDUlAsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EscUJBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQWIsTUFBQUEsSUFBSSxDQUFDaUIsWUFBTDtBQUNBWixNQUFBQSxPQUFPLENBQUNhLE1BQVI7QUFDQVYsTUFBQUEsTUFBTSxDQUFDLCtCQUFvQkgsT0FBTyxDQUFDbEIsS0FBUixHQUFnQkUsS0FBcEMsQ0FBRCxDQUFOLENBQW1EdUIsSUFBbkQsQ0FBd0QsWUFBeEQ7QUFDRCxLQVJEO0FBVUEsUUFBTVksbUJBQW1CLEdBQUcsbUJBQU0sZ0NBQUMsaUJBQUQ7QUFBbUIsTUFBQSxRQUFRO0FBQTNCLE1BQU4sQ0FBNUI7QUFDQUEsSUFBQUEsbUJBQW1CLENBQUNyQyxLQUFwQixHQUE0QkMsU0FBNUIsQ0FBc0NxQyxtQkFBdEMsQ0FBMEQsS0FBMUQ7QUFDQXpCLElBQUFBLElBQUksQ0FBQ2lCLFlBQUw7QUFDRCxHQTlCQyxDQUFGO0FBZ0NBYixFQUFBQSxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsWUFBTTtBQUN6QixRQUFNQyxPQUFPLEdBQUcsbUJBQU0sZ0NBQUMsaUJBQUQsT0FBTixDQUFoQjtBQUNBLHdCQUFJLFlBQU07QUFDUkEsTUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRSxRQUhILENBR1ksUUFIWixFQUdzQjtBQUFFQyxRQUFBQSxNQUFNLEVBQUU7QUFBRXpCLFVBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsT0FIdEI7QUFJQWdCLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLFFBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0UsUUFISCxDQUdZLFFBSFosRUFHc0I7QUFBRUMsUUFBQUEsTUFBTSxFQUFFO0FBQUV6QixVQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLE9BSHRCO0FBSUFXLE1BQUFBLElBQUksQ0FBQ2lCLFlBQUw7QUFDQVosTUFBQUEsT0FBTyxDQUFDYSxNQUFSO0FBQ0FiLE1BQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLGdCQURSLEVBRUdDLEVBRkgsQ0FFTSxFQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUFiLE1BQUFBLElBQUksQ0FBQ2lCLFlBQUw7QUFDQVosTUFBQUEsT0FBTyxDQUFDYSxNQUFSO0FBQ0QsS0FqQkQ7QUFrQkQsR0FwQkMsQ0FBRjtBQXFCRCxDQTVPTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCIuLlwiXG5pbXBvcnQgeyBjb252ZXJ0RGF0ZVRvU3RyaW5nIH0gZnJvbSBcIi4uL2NvcmVcIlxuaW1wb3J0IHsgYWN0IH0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCJcblxuY2xhc3MgRGF0ZVBpY2tlck1vdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgdmFsdWU6IG5ldyBEYXRlKCksXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlLCB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgIHNob3J0Y3V0cz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIuelluWbveeUn+aXpVwiLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICByZWY9e2NvbXBvbmVudCA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBvbmVudCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgY2xvc2VPblNlbGVjdFxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSl9XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17Ym9vbCA9PiB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogYm9vbCB9KX1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcIkRhdGVQaWNrZXJcIiwgKCkgPT4ge1xuICBiZWZvcmVBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJBbGwoKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxEYXRlUGlja2VyIC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB2YWwgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPERhdGVQaWNrZXIgZGVmYXVsdFZhbHVlPXt2YWx9IGRlZmF1bHRWaXNpYmxlPXtmYWxzZX0gY2xvc2VPblNlbGVjdCAvPlxuICAgIClcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgKS50b0JlKGNvbnZlcnREYXRlVG9TdHJpbmcodmFsKSlcblxuICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiZm9jdXNcIilcblxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52aXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG5cbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJcIiB9IH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcImlucHV0XCIpLnByb3BzKCkudmFsdWUpLnRvQmUoXCJcIilcblxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIyMDIwLTAyLTIyXCIgfSB9KVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5wcm9wcygpLnZhbHVlKS50b0JlKFwiMjAyMC0wMi0yMlwiKVxuXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleTogXCJlbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKGZhbHNlKVxuICAgIH0pXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGNvbnN0IGV4cGVjdGVkVmFsID0gY29udmVydERhdGVUb1N0cmluZyhcbiAgICAgICAgbmV3IERhdGUoXG4gICAgICAgICAgd3JhcHBlclxuICAgICAgICAgICAgLmZpbmQoXCIuYWR1aS1kYXRlLWRheVwiKVxuICAgICAgICAgICAgLmF0KDE0KVxuICAgICAgICAgICAgLnByb3BzKClbXCJhcmlhLWxhYmVsXCJdXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC8vIOetieW+hSAzNTBtc1xuICAgICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICAgKS50b0JlKGV4cGVjdGVkVmFsKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJQb3BvdmVyXCIpXG4gICAgICAgICAgLmF0KDApXG4gICAgICAgICAgLnByb3BzKCkudmlzaWJsZVxuICAgICAgKS50b0JlKGZhbHNlKVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCLlpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIOS7peS4i+mDveaYr+mqjOivgeWklumDqOaOp+WItuaXtuWGhemDqOeahOWkseaViFxuICAgICAqL1xuICAgIGNvbnN0IHZhbCA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8RGF0ZVBpY2tlciB2YWx1ZT17bmV3IERhdGUoKX0gdmlzaWJsZSBjbG9zZU9uU2VsZWN0IC8+XG4gICAgKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkudmFsdWVcbiAgICApLnRvQmUoY29udmVydERhdGVUb1N0cmluZyh2YWwpKVxuXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICApLnRvQmUodHJ1ZSlcblxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE0KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgLy8g562J5b6FIDM1MG1zXG4gICAgICBqZXN0LmFkdmFuY2VUaW1lcnNCeVRpbWUoMzUwKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KFxuICAgICAgICB3cmFwcGVyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgICApLnRvQmUoY29udmVydERhdGVUb1N0cmluZyh2YWwpKVxuICAgIH0pXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIC8vIOetieW+hSAzNTBtc1xuICAgICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDM1MClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAuYXQoMClcbiAgICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICAgKS50b0JlKGNvbnZlcnREYXRlVG9TdHJpbmcodmFsKSlcbiAgICAgIGV4cGVjdChcbiAgICAgICAgd3JhcHBlclxuICAgICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICAgICkudG9CZSh0cnVlKVxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiDku6XkuIvmmK/pqozor4HlpJbpg6jmjqfliLbml7YgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIOeahOacieaViFxuICAgICAqL1xuICAgIGNvbnN0IG1vdW50ZXIgPSBtb3VudCg8RGF0ZVBpY2tlck1vdW50ZXIgLz4pXG4gICAgY29uc3QgdG9kYXkgPSBjb252ZXJ0RGF0ZVRvU3RyaW5nKG5ldyBEYXRlKCkpXG4gICAgbW91bnRlclxuICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjIwMjAtMDItMjJcIiB9IH0pXG4gICAgZXhwZWN0KGNvbnZlcnREYXRlVG9TdHJpbmcobW91bnRlci5zdGF0ZSgpLnZhbHVlKSkudG9CZShcIjIwMjAtMDItMjJcIilcbiAgICBtb3VudGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAyMC0wMi0zMVwiIH0gfSlcbiAgICBleHBlY3QoY29udmVydERhdGVUb1N0cmluZyhtb3VudGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFwiMjAyMC0wMi0yMlwiKVxuICAgIG1vdW50ZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIlwiIH0gfSlcbiAgICBleHBlY3QoY29udmVydERhdGVUb1N0cmluZyhtb3VudGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFwiXCIpXG4gICAgZXhwZWN0KFxuICAgICAgbW91bnRlclxuICAgICAgICAuZmluZChcIlBvcG92ZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICApLnRvQmUodHJ1ZSlcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgbW91bnRlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNSlcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIG1vdW50ZXIudXBkYXRlKClcbiAgICAgIGV4cGVjdChcbiAgICAgICAgbW91bnRlclxuICAgICAgICAgIC5maW5kKFwiUG9wb3ZlclwiKVxuICAgICAgICAgIC5hdCgwKVxuICAgICAgICAgIC5wcm9wcygpLnZpc2libGVcbiAgICAgICkudG9CZShmYWxzZSlcbiAgICB9KVxuICB9KVxuXG4gIGl0KFwiRGF5UGlja2VyIOaTjeS9nFwiLCAoKSA9PiB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxEYXRlUGlja2VyTW91bnRlciAvPilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImJ1dHRvblwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktZGF0ZS1kYXlcIilcbiAgICAgICAgLmF0KDE1KVxuICAgICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgZXhwZWN0KHRvZGF5LmdldE1vbnRoKCkgLSB3cmFwcGVyLnN0YXRlKCkudmFsdWUuZ2V0TW9udGgoKSkudG9CZSgxKVxuICAgIH0pXG5cbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtc2hvcnRjdXRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBleHBlY3QoY29udmVydERhdGVUb1N0cmluZyh3cmFwcGVyLnN0YXRlKCkudmFsdWUpKS50b0JlKFwiMjAyMC0xMC0wMVwiKVxuICAgIH0pXG5cbiAgICBjb25zdCB3cmFwcGVyRm9yQ292ZXJhZ2UwID0gbW91bnQoPERhdGVQaWNrZXJNb3VudGVyIGRpc2FibGVkIC8+KVxuICAgIHdyYXBwZXJGb3JDb3ZlcmFnZTAuc3RhdGUoKS5jb21wb25lbnQuaGFuZGxlVmlzaWJsZUNoYW5nZShmYWxzZSlcbiAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCJEYXlQaWNrZXIg5bm05pyI5YiH5o2iXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPERhdGVQaWNrZXJNb3VudGVyIC8+KVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwic2VsZWN0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMjAxOFwiIH0gfSlcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJzZWxlY3RcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxXCIgfSB9KVxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgd3JhcHBlci51cGRhdGUoKVxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWRhdGUtZGF5XCIpXG4gICAgICAgIC5hdCgxNClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuICB9KVxufSlcbiJdfQ==