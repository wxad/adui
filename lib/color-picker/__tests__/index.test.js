"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

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
  });
  afterAll(function () {
    jest.useRealTimers();
  });
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], {
      defaultValue: "#07C160"
    }));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否能处理小写值的情况", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultValue: "#07c160"
    }));
    var value = wrapper.find(".adui-cp").at(0).props()["data-value"];
    var inputValue = wrapper.find("Input").at(0).props().value;
    expect(inputValue === "07C160" && value === "#07C160").toBe(true);
  });
  it("内部驱动", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultValue: "#07C160"
    }));
    wrapper.find("button").simulate("click");
    wrapper.find(".adui-cp-standard i").at(0).simulate("click");
    var value = wrapper.find(".adui-cp").at(0).props()["data-value"];
    var inputValue = wrapper.find("Input").at(0).props().value;
    expect(inputValue === "FFFFFF" && value === "#FFFFFF").toBe(true);
    wrapper.find("input").at(0).simulate("change", {
      target: {
        value: "F0F0F0"
      }
    });
    var value1 = wrapper.find(".adui-cp").at(0).props()["data-value"];
    var inputValue1 = wrapper.find("Input").at(0).props().value;
    expect(inputValue1 === "F0F0F0" && value1 === "#F0F0F0").toBe(true);
  });
  it("外部控制", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(ColorPickerMounter, null));
    wrapper.find("button").simulate("click");
    (0, _testUtils.act)(function () {
      wrapper.find(".adui-cp-standard i").at(0).simulate("click");
      jest.runAllTimers();
      wrapper.update();
      var value = wrapper.find(".adui-cp").at(0).props()["data-value"];
      var inputValue = wrapper.find("Input").at(0).props().value;
      expect(inputValue === "FFFFFF" && value === "#FFFFFF" && wrapper.state().value === "#FFFFFF").toBe(true);
    });
    wrapper.find("input").at(0).simulate("change", {
      target: {
        value: "F0F0F0"
      }
    });
    var value1 = wrapper.find(".adui-cp").at(0).props()["data-value"];
    var inputValue1 = wrapper.find("Input").at(0).props().value;
    expect(inputValue1 === "F0F0F0" && value1 === "#F0F0F0" && wrapper.state().value === "#F0F0F0").toBe(true);
  });
  it("禁用态", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultValue: "#07C160",
      disabled: true
    }));
    wrapper.find("button").simulate("click");
    expect(wrapper.find("Popover").props().visible).toBe(false);
  });
  it("popupResultVisible", function () {
    var wrapper0 = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultValue: "#07C160"
    }));
    var wrapper1 = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultValue: "#07C160",
      popupResultVisible: false
    }));
    wrapper0.find("button").simulate("click");
    wrapper1.find("button").simulate("click");
    expect(wrapper0.find("input")).toHaveLength(2);
    expect(wrapper1.find("input")).toHaveLength(1);
  });
  it("handlePrefixClick 验证", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      defaultValue: "#07C160"
    }));
    wrapper.find(".adui-cp-prefix").simulate("click");
    wrapper.find("button").simulate("click");
    jest.advanceTimersByTime(50);
    wrapper.find(".adui-cp-prefix").at(1).simulate("click");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJDb2xvclBpY2tlck1vdW50ZXIiLCJzdGF0ZSIsInZhbHVlIiwidmFsIiwic2V0U3RhdGUiLCJwcm9wcyIsIkNvbXBvbmVudCIsImRlc2NyaWJlIiwiYmVmb3JlQWxsIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckFsbCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJmaW5kIiwiYXQiLCJpbnB1dFZhbHVlIiwidG9CZSIsInNpbXVsYXRlIiwidGFyZ2V0IiwidmFsdWUxIiwiaW5wdXRWYWx1ZTEiLCJydW5BbGxUaW1lcnMiLCJ1cGRhdGUiLCJ2aXNpYmxlIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsInRvSGF2ZUxlbmd0aCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGtCOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLEtBQUssRUFBRTtBQURELEs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLFVBQ0NBLEtBREQsR0FDVyxLQUFLRCxLQURoQixDQUNDQyxLQUREO0FBRVAsYUFDRSxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUVBLEtBRFQ7QUFFRSxRQUFBLFFBQVEsRUFBRSxrQkFBQUMsR0FBRztBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVGLFlBQUFBLEtBQUssRUFBRUM7QUFBVCxXQUFkLENBQUo7QUFBQTtBQUZmLFNBR00sS0FBS0UsS0FIWCxFQURGO0FBT0Q7Ozs7RUFkOEJDLGdCOztBQWlCakNDLFFBQVEsQ0FBQyxhQUFELEVBQWdCLFlBQU07QUFDNUJDLEVBQUFBLFNBQVMsQ0FBQyxZQUFNO0FBQ2RDLElBQUFBLElBQUksQ0FBQ0MsYUFBTDtBQUNELEdBRlEsQ0FBVDtBQUlBQyxFQUFBQSxRQUFRLENBQUMsWUFBTTtBQUNiRixJQUFBQSxJQUFJLENBQUNHLGFBQUw7QUFDRCxHQUZPLENBQVI7QUFJQUMsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBR0MsOEJBQWFDLE1BQWIsQ0FBb0IsZ0NBQUMsWUFBRDtBQUFhLE1BQUEsWUFBWSxFQUFDO0FBQTFCLE1BQXBCLENBQWhCOztBQUNBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQUhDLENBQUY7QUFLQUwsRUFBQUEsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsWUFBTTtBQUN0QixRQUFNQyxPQUFPLEdBQUcsbUJBQU0sZ0NBQUMsWUFBRDtBQUFhLE1BQUEsWUFBWSxFQUFDO0FBQTFCLE1BQU4sQ0FBaEI7QUFDQSxRQUFNWixLQUFLLEdBQUdZLE9BQU8sQ0FDbEJLLElBRFcsQ0FDTixVQURNLEVBRVhDLEVBRlcsQ0FFUixDQUZRLEVBR1hmLEtBSFcsR0FHSCxZQUhHLENBQWQ7QUFJQSxRQUFNZ0IsVUFBVSxHQUFHUCxPQUFPLENBQ3ZCSyxJQURnQixDQUNYLE9BRFcsRUFFaEJDLEVBRmdCLENBRWIsQ0FGYSxFQUdoQmYsS0FIZ0IsR0FHUkgsS0FIWDtBQUlBZSxJQUFBQSxNQUFNLENBQUNJLFVBQVUsS0FBSyxRQUFmLElBQTJCbkIsS0FBSyxLQUFLLFNBQXRDLENBQU4sQ0FBdURvQixJQUF2RCxDQUE0RCxJQUE1RDtBQUNELEdBWEMsQ0FBRjtBQWFBVCxFQUFBQSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQU07QUFDZixRQUFNQyxPQUFPLEdBQUcsbUJBQU0sZ0NBQUMsWUFBRDtBQUFhLE1BQUEsWUFBWSxFQUFDO0FBQTFCLE1BQU4sQ0FBaEI7QUFDQUEsSUFBQUEsT0FBTyxDQUFDSyxJQUFSLENBQWEsUUFBYixFQUF1QkksUUFBdkIsQ0FBZ0MsT0FBaEM7QUFDQVQsSUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EscUJBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0csUUFISCxDQUdZLE9BSFo7QUFJQSxRQUFNckIsS0FBSyxHQUFHWSxPQUFPLENBQ2xCSyxJQURXLENBQ04sVUFETSxFQUVYQyxFQUZXLENBRVIsQ0FGUSxFQUdYZixLQUhXLEdBR0gsWUFIRyxDQUFkO0FBSUEsUUFBTWdCLFVBQVUsR0FBR1AsT0FBTyxDQUN2QkssSUFEZ0IsQ0FDWCxPQURXLEVBRWhCQyxFQUZnQixDQUViLENBRmEsRUFHaEJmLEtBSGdCLEdBR1JILEtBSFg7QUFJQWUsSUFBQUEsTUFBTSxDQUFDSSxVQUFVLEtBQUssUUFBZixJQUEyQm5CLEtBQUssS0FBSyxTQUF0QyxDQUFOLENBQXVEb0IsSUFBdkQsQ0FBNEQsSUFBNUQ7QUFFQVIsSUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsT0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRyxRQUhILENBR1ksUUFIWixFQUdzQjtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBRXRCLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsS0FIdEI7QUFLQSxRQUFNdUIsTUFBTSxHQUFHWCxPQUFPLENBQ25CSyxJQURZLENBQ1AsVUFETyxFQUVaQyxFQUZZLENBRVQsQ0FGUyxFQUdaZixLQUhZLEdBR0osWUFISSxDQUFmO0FBSUEsUUFBTXFCLFdBQVcsR0FBR1osT0FBTyxDQUN4QkssSUFEaUIsQ0FDWixPQURZLEVBRWpCQyxFQUZpQixDQUVkLENBRmMsRUFHakJmLEtBSGlCLEdBR1RILEtBSFg7QUFJQWUsSUFBQUEsTUFBTSxDQUFDUyxXQUFXLEtBQUssUUFBaEIsSUFBNEJELE1BQU0sS0FBSyxTQUF4QyxDQUFOLENBQXlESCxJQUF6RCxDQUE4RCxJQUE5RDtBQUNELEdBL0JDLENBQUY7QUFpQ0FULEVBQUFBLEVBQUUsQ0FBQyxNQUFELEVBQVMsWUFBTTtBQUNmLFFBQU1DLE9BQU8sR0FBRyxtQkFBTSxnQ0FBQyxrQkFBRCxPQUFOLENBQWhCO0FBRUFBLElBQUFBLE9BQU8sQ0FBQ0ssSUFBUixDQUFhLFFBQWIsRUFBdUJJLFFBQXZCLENBQWdDLE9BQWhDO0FBQ0Esd0JBQUksWUFBTTtBQUNSVCxNQUFBQSxPQUFPLENBQ0pLLElBREgsQ0FDUSxxQkFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRyxRQUhILENBR1ksT0FIWjtBQUlBZCxNQUFBQSxJQUFJLENBQUNrQixZQUFMO0FBQ0FiLE1BQUFBLE9BQU8sQ0FBQ2MsTUFBUjtBQUNBLFVBQU0xQixLQUFLLEdBQUdZLE9BQU8sQ0FDbEJLLElBRFcsQ0FDTixVQURNLEVBRVhDLEVBRlcsQ0FFUixDQUZRLEVBR1hmLEtBSFcsR0FHSCxZQUhHLENBQWQ7QUFJQSxVQUFNZ0IsVUFBVSxHQUFHUCxPQUFPLENBQ3ZCSyxJQURnQixDQUNYLE9BRFcsRUFFaEJDLEVBRmdCLENBRWIsQ0FGYSxFQUdoQmYsS0FIZ0IsR0FHUkgsS0FIWDtBQUlBZSxNQUFBQSxNQUFNLENBQ0pJLFVBQVUsS0FBSyxRQUFmLElBQ0VuQixLQUFLLEtBQUssU0FEWixJQUVFWSxPQUFPLENBQUNiLEtBQVIsR0FBZ0JDLEtBQWhCLEtBQTBCLFNBSHhCLENBQU4sQ0FJRW9CLElBSkYsQ0FJTyxJQUpQO0FBS0QsS0FwQkQ7QUFxQkFSLElBQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLE9BRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0csUUFISCxDQUdZLFFBSFosRUFHc0I7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQUV0QixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLEtBSHRCO0FBSUEsUUFBTXVCLE1BQU0sR0FBR1gsT0FBTyxDQUNuQkssSUFEWSxDQUNQLFVBRE8sRUFFWkMsRUFGWSxDQUVULENBRlMsRUFHWmYsS0FIWSxHQUdKLFlBSEksQ0FBZjtBQUlBLFFBQU1xQixXQUFXLEdBQUdaLE9BQU8sQ0FDeEJLLElBRGlCLENBQ1osT0FEWSxFQUVqQkMsRUFGaUIsQ0FFZCxDQUZjLEVBR2pCZixLQUhpQixHQUdUSCxLQUhYO0FBSUFlLElBQUFBLE1BQU0sQ0FDSlMsV0FBVyxLQUFLLFFBQWhCLElBQ0VELE1BQU0sS0FBSyxTQURiLElBRUVYLE9BQU8sQ0FBQ2IsS0FBUixHQUFnQkMsS0FBaEIsS0FBMEIsU0FIeEIsQ0FBTixDQUlFb0IsSUFKRixDQUlPLElBSlA7QUFLRCxHQTFDQyxDQUFGO0FBNENBVCxFQUFBQSxFQUFFLENBQUMsS0FBRCxFQUFRLFlBQU07QUFDZCxRQUFNQyxPQUFPLEdBQUcsbUJBQU0sZ0NBQUMsWUFBRDtBQUFhLE1BQUEsWUFBWSxFQUFDLFNBQTFCO0FBQW9DLE1BQUEsUUFBUTtBQUE1QyxNQUFOLENBQWhCO0FBQ0FBLElBQUFBLE9BQU8sQ0FBQ0ssSUFBUixDQUFhLFFBQWIsRUFBdUJJLFFBQXZCLENBQWdDLE9BQWhDO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDSyxJQUFSLENBQWEsU0FBYixFQUF3QmQsS0FBeEIsR0FBZ0N3QixPQUFqQyxDQUFOLENBQWdEUCxJQUFoRCxDQUFxRCxLQUFyRDtBQUNELEdBSkMsQ0FBRjtBQU1BVCxFQUFBQSxFQUFFLENBQUMsb0JBQUQsRUFBdUIsWUFBTTtBQUM3QixRQUFNaUIsUUFBUSxHQUFHLG1CQUFNLGdDQUFDLFlBQUQ7QUFBYSxNQUFBLFlBQVksRUFBQztBQUExQixNQUFOLENBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLG1CQUNmLGdDQUFDLFlBQUQ7QUFBYSxNQUFBLFlBQVksRUFBQyxTQUExQjtBQUFvQyxNQUFBLGtCQUFrQixFQUFFO0FBQXhELE1BRGUsQ0FBakI7QUFHQUQsSUFBQUEsUUFBUSxDQUFDWCxJQUFULENBQWMsUUFBZCxFQUF3QkksUUFBeEIsQ0FBaUMsT0FBakM7QUFDQVEsSUFBQUEsUUFBUSxDQUFDWixJQUFULENBQWMsUUFBZCxFQUF3QkksUUFBeEIsQ0FBaUMsT0FBakM7QUFDQU4sSUFBQUEsTUFBTSxDQUFDYSxRQUFRLENBQUNYLElBQVQsQ0FBYyxPQUFkLENBQUQsQ0FBTixDQUErQmEsWUFBL0IsQ0FBNEMsQ0FBNUM7QUFDQWYsSUFBQUEsTUFBTSxDQUFDYyxRQUFRLENBQUNaLElBQVQsQ0FBYyxPQUFkLENBQUQsQ0FBTixDQUErQmEsWUFBL0IsQ0FBNEMsQ0FBNUM7QUFDRCxHQVRDLENBQUY7QUFXQW5CLEVBQUFBLEVBQUUsQ0FBQyxzQkFBRCxFQUF5QixZQUFNO0FBQy9CLFFBQU1DLE9BQU8sR0FBRyxtQkFBTSxnQ0FBQyxZQUFEO0FBQWEsTUFBQSxZQUFZLEVBQUM7QUFBMUIsTUFBTixDQUFoQjtBQUNBQSxJQUFBQSxPQUFPLENBQUNLLElBQVIsQ0FBYSxpQkFBYixFQUFnQ0ksUUFBaEMsQ0FBeUMsT0FBekM7QUFDQVQsSUFBQUEsT0FBTyxDQUFDSyxJQUFSLENBQWEsUUFBYixFQUF1QkksUUFBdkIsQ0FBZ0MsT0FBaEM7QUFDQWQsSUFBQUEsSUFBSSxDQUFDd0IsbUJBQUwsQ0FBeUIsRUFBekI7QUFDQW5CLElBQUFBLE9BQU8sQ0FDSkssSUFESCxDQUNRLGlCQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dHLFFBSEgsQ0FHWSxPQUhaO0FBSUQsR0FUQyxDQUFGO0FBVUQsQ0FuSU8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbi8vIGltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4uXCJcbmltcG9ydCB7IGFjdCB9IGZyb20gXCJyZWFjdC1kb20vdGVzdC11dGlsc1wiXG5cbmNsYXNzIENvbG9yUGlja2VyTW91bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIiMwN0MxNjBcIixcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSl9XG4gICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJDb2xvclBpY2tlclwiLCAoKSA9PiB7XG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckFsbCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIiAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWkhOeQhuWwj+WGmeWAvOeahOaDheWGtVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlciBkZWZhdWx0VmFsdWU9XCIjMDdjMTYwXCIgLz4pXG4gICAgY29uc3QgdmFsdWUgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIklucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgZXhwZWN0KGlucHV0VmFsdWUgPT09IFwiMDdDMTYwXCIgJiYgdmFsdWUgPT09IFwiIzA3QzE2MFwiKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgaXQoXCLlhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8Q29sb3JQaWNrZXIgZGVmYXVsdFZhbHVlPVwiIzA3QzE2MFwiIC8+KVxuICAgIHdyYXBwZXIuZmluZChcImJ1dHRvblwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIuYWR1aS1jcC1zdGFuZGFyZCBpXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgY29uc3QgdmFsdWUgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIklucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgZXhwZWN0KGlucHV0VmFsdWUgPT09IFwiRkZGRkZGXCIgJiYgdmFsdWUgPT09IFwiI0ZGRkZGRlwiKS50b0JlKHRydWUpXG5cbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJGMEYwRjBcIiB9IH0pXG5cbiAgICBjb25zdCB2YWx1ZTEgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIGNvbnN0IGlucHV0VmFsdWUxID0gd3JhcHBlclxuICAgICAgLmZpbmQoXCJJbnB1dFwiKVxuICAgICAgLmF0KDApXG4gICAgICAucHJvcHMoKS52YWx1ZVxuICAgIGV4cGVjdChpbnB1dFZhbHVlMSA9PT0gXCJGMEYwRjBcIiAmJiB2YWx1ZTEgPT09IFwiI0YwRjBGMFwiKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgaXQoXCLlpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8Q29sb3JQaWNrZXJNb3VudGVyIC8+KVxuXG4gICAgd3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBhY3QoKCkgPT4ge1xuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWNwLXN0YW5kYXJkIGlcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgICBqZXN0LnJ1bkFsbFRpbWVycygpXG4gICAgICB3cmFwcGVyLnVwZGF0ZSgpXG4gICAgICBjb25zdCB2YWx1ZSA9IHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gd3JhcHBlclxuICAgICAgICAuZmluZChcIklucHV0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKS52YWx1ZVxuICAgICAgZXhwZWN0KFxuICAgICAgICBpbnB1dFZhbHVlID09PSBcIkZGRkZGRlwiICYmXG4gICAgICAgICAgdmFsdWUgPT09IFwiI0ZGRkZGRlwiICYmXG4gICAgICAgICAgd3JhcHBlci5zdGF0ZSgpLnZhbHVlID09PSBcIiNGRkZGRkZcIlxuICAgICAgKS50b0JlKHRydWUpXG4gICAgfSlcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImlucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCJGMEYwRjBcIiB9IH0pXG4gICAgY29uc3QgdmFsdWUxID0gd3JhcHBlclxuICAgICAgLmZpbmQoXCIuYWR1aS1jcFwiKVxuICAgICAgLmF0KDApXG4gICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICBjb25zdCBpbnB1dFZhbHVlMSA9IHdyYXBwZXJcbiAgICAgIC5maW5kKFwiSW5wdXRcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnByb3BzKCkudmFsdWVcbiAgICBleHBlY3QoXG4gICAgICBpbnB1dFZhbHVlMSA9PT0gXCJGMEYwRjBcIiAmJlxuICAgICAgICB2YWx1ZTEgPT09IFwiI0YwRjBGMFwiICYmXG4gICAgICAgIHdyYXBwZXIuc3RhdGUoKS52YWx1ZSA9PT0gXCIjRjBGMEYwXCJcbiAgICApLnRvQmUodHJ1ZSlcbiAgfSlcblxuICBpdChcIuemgeeUqOaAgVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlciBkZWZhdWx0VmFsdWU9XCIjMDdDMTYwXCIgZGlzYWJsZWQgLz4pXG4gICAgd3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvQmUoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCJwb3B1cFJlc3VsdFZpc2libGVcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIiAvPilcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KFxuICAgICAgPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIiBwb3B1cFJlc3VsdFZpc2libGU9e2ZhbHNlfSAvPlxuICAgIClcbiAgICB3cmFwcGVyMC5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICB3cmFwcGVyMS5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlcjAuZmluZChcImlucHV0XCIpKS50b0hhdmVMZW5ndGgoMilcbiAgICBleHBlY3Qod3JhcHBlcjEuZmluZChcImlucHV0XCIpKS50b0hhdmVMZW5ndGgoMSlcbiAgfSlcblxuICBpdChcImhhbmRsZVByZWZpeENsaWNrIOmqjOivgVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlciBkZWZhdWx0VmFsdWU9XCIjMDdDMTYwXCIgLz4pXG4gICAgd3JhcHBlci5maW5kKFwiLmFkdWktY3AtcHJlZml4XCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICB3cmFwcGVyLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGplc3QuYWR2YW5jZVRpbWVyc0J5VGltZSg1MClcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwLXByZWZpeFwiKVxuICAgICAgLmF0KDEpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICB9KVxufSlcbiJdfQ==