"use strict";

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var SliderMounter = function (_Component) {
  _inherits(SliderMounter, _Component);

  var _super = _createSuper(SliderMounter);

  function SliderMounter() {
    var _this;

    _classCallCheck(this, SliderMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: 30
    };
    return _this;
  }

  _createClass(SliderMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return _react["default"].createElement(_["default"], {
        value: value,
        onChange: function onChange(param) {
          return _this2.setState({
            value: param
          });
        }
      });
    }
  }]);

  return SliderMounter;
}(_react.Component);

describe("Slider", function () {
  it("Slider 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], null));

    expect(wrapper).toMatchSnapshot();
  });
  it("Slider 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      min: 0,
      max: 100,
      defaultValue: 30,
      onChange: onChange
    }));
    expect(wrapper.find(".adui-slider-handle").at(1).prop("aria-valuenow")).toBe(30);
    wrapper.find("input").simulate("change", {
      target: {
        value: "50"
      }
    });
    expect(wrapper.find(".adui-slider-handle").at(1).prop("aria-valuenow")).toBe(50);
  });
  it("Slider 是否能受外部控制", function () {
    var onChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      min: 0,
      max: 100,
      value: 30,
      step: 0.1,
      onChange: onChange
    }));
    var wrapper1 = (0, _enzyme.mount)(_react["default"].createElement(SliderMounter, null));
    wrapper0.find("input").simulate("change", {
      target: {
        value: "50"
      }
    });
    expect(wrapper0.find(".adui-slider-handle").at(1).prop("aria-valuenow")).toBe(30);
    wrapper1.find("input").simulate("change", {
      target: {
        value: "50"
      }
    });
    expect(wrapper1.find(".adui-slider-handle").at(1).prop("aria-valuenow")).toBe(50);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2xpZGVyL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJTbGlkZXJNb3VudGVyIiwic3RhdGUiLCJ2YWx1ZSIsInBhcmFtIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsIm9uQ2hhbmdlIiwiamVzdCIsImZuIiwiZmluZCIsImF0IiwicHJvcCIsInRvQmUiLCJzaW11bGF0ZSIsInRhcmdldCIsIndyYXBwZXIwIiwid3JhcHBlcjEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGE7Ozs7Ozs7Ozs7Ozs7OztVQUNKQyxLLEdBQVE7QUFDTkMsTUFBQUEsS0FBSyxFQUFFO0FBREQsSzs7Ozs7OzZCQUlDO0FBQUE7O0FBQUEsVUFDQ0EsS0FERCxHQUNXLEtBQUtELEtBRGhCLENBQ0NDLEtBREQ7QUFFUCxhQUNFLGdDQUFDLFlBQUQ7QUFDRSxRQUFBLEtBQUssRUFBRUEsS0FEVDtBQUVFLFFBQUEsUUFBUSxFQUFFLGtCQUFBQyxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUYsWUFBQUEsS0FBSyxFQUFFQztBQUFULFdBQWQsQ0FBSjtBQUFBO0FBRmpCLFFBREY7QUFNRDs7OztFQWJ5QkUsZ0I7O0FBZ0I1QkMsUUFBUSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ3ZCQyxFQUFBQSxFQUFFLENBQUMsZUFBRCxFQUFrQixZQUFNO0FBQ3hCLFFBQU1DLE9BQU8sR0FBR0MsOEJBQWFDLE1BQWIsQ0FBb0IsZ0NBQUMsWUFBRCxPQUFwQixDQUFoQjs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FIQyxDQUFGO0FBS0FMLEVBQUFBLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixZQUFNO0FBQ3pCLFFBQU1NLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxFQUFMLEVBQWpCO0FBQ0EsUUFBTVAsT0FBTyxHQUFHLG1CQUNkLGdDQUFDLFlBQUQ7QUFBUSxNQUFBLEdBQUcsRUFBRSxDQUFiO0FBQWdCLE1BQUEsR0FBRyxFQUFFLEdBQXJCO0FBQTBCLE1BQUEsWUFBWSxFQUFFLEVBQXhDO0FBQTRDLE1BQUEsUUFBUSxFQUFFSztBQUF0RCxNQURjLENBQWhCO0FBS0FGLElBQUFBLE1BQU0sQ0FDSkgsT0FBTyxDQUNKUSxJQURILENBQ1EscUJBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsSUFISCxDQUdRLGVBSFIsQ0FESSxDQUFOLENBS0VDLElBTEYsQ0FLTyxFQUxQO0FBTUFYLElBQUFBLE9BQU8sQ0FBQ1EsSUFBUixDQUFhLE9BQWIsRUFBc0JJLFFBQXRCLENBQStCLFFBQS9CLEVBQXlDO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFFbkIsUUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBVixLQUF6QztBQUNBUyxJQUFBQSxNQUFNLENBQ0pILE9BQU8sQ0FDSlEsSUFESCxDQUNRLHFCQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLElBSEgsQ0FHUSxlQUhSLENBREksQ0FBTixDQUtFQyxJQUxGLENBS08sRUFMUDtBQU1ELEdBcEJDLENBQUY7QUFzQkFaLEVBQUFBLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixZQUFNO0FBQzFCLFFBQU1NLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxFQUFMLEVBQWpCO0FBQ0EsUUFBTU8sUUFBUSxHQUFHLG1CQUNmLGdDQUFDLFlBQUQ7QUFBUSxNQUFBLEdBQUcsRUFBRSxDQUFiO0FBQWdCLE1BQUEsR0FBRyxFQUFFLEdBQXJCO0FBQTBCLE1BQUEsS0FBSyxFQUFFLEVBQWpDO0FBQXFDLE1BQUEsSUFBSSxFQUFFLEdBQTNDO0FBQWdELE1BQUEsUUFBUSxFQUFFVDtBQUExRCxNQURlLENBQWpCO0FBR0EsUUFBTVUsUUFBUSxHQUFHLG1CQUFNLGdDQUFDLGFBQUQsT0FBTixDQUFqQjtBQUVBRCxJQUFBQSxRQUFRLENBQUNOLElBQVQsQ0FBYyxPQUFkLEVBQXVCSSxRQUF2QixDQUFnQyxRQUFoQyxFQUEwQztBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBRW5CLFFBQUFBLEtBQUssRUFBRTtBQUFUO0FBQVYsS0FBMUM7QUFDQVMsSUFBQUEsTUFBTSxDQUNKVyxRQUFRLENBQ0xOLElBREgsQ0FDUSxxQkFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHQyxJQUhILENBR1EsZUFIUixDQURJLENBQU4sQ0FLRUMsSUFMRixDQUtPLEVBTFA7QUFNQUksSUFBQUEsUUFBUSxDQUFDUCxJQUFULENBQWMsT0FBZCxFQUF1QkksUUFBdkIsQ0FBZ0MsUUFBaEMsRUFBMEM7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQUVuQixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLEtBQTFDO0FBQ0FTLElBQUFBLE1BQU0sQ0FDSlksUUFBUSxDQUNMUCxJQURILENBQ1EscUJBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsSUFISCxDQUdRLGVBSFIsQ0FESSxDQUFOLENBS0VDLElBTEYsQ0FLTyxFQUxQO0FBTUQsR0FyQkMsQ0FBRjtBQXNCRCxDQWxETyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLlwiXG5cbmNsYXNzIFNsaWRlck1vdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogMzAsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8U2xpZGVyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3BhcmFtID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogcGFyYW0gfSl9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcIlNsaWRlclwiLCAoKSA9PiB7XG4gIGl0KFwiU2xpZGVyIOaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPFNsaWRlciAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIlNsaWRlciDmmK/lkKbog73lhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFNsaWRlciBtaW49ezB9IG1heD17MTAwfSBkZWZhdWx0VmFsdWU9ezMwfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgKVxuICAgIC8vIHdyYXBwZXIuaW5zdGFuY2UoKS5oYW5kbGVCZWZvcmVDaGFuZ2UoKVxuICAgIC8vIHdyYXBwZXIuaW5zdGFuY2UoKS5oYW5kbGVBZnRlckNoYW5nZSgpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLXNsaWRlci1oYW5kbGVcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5wcm9wKFwiYXJpYS12YWx1ZW5vd1wiKVxuICAgICkudG9CZSgzMClcbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCI1MFwiIH0gfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktc2xpZGVyLWhhbmRsZVwiKVxuICAgICAgICAuYXQoMSlcbiAgICAgICAgLnByb3AoXCJhcmlhLXZhbHVlbm93XCIpXG4gICAgKS50b0JlKDUwKVxuICB9KVxuXG4gIGl0KFwiU2xpZGVyIOaYr+WQpuiDveWPl+WklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KFxuICAgICAgPFNsaWRlciBtaW49ezB9IG1heD17MTAwfSB2YWx1ZT17MzB9IHN0ZXA9ezAuMX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIClcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxTbGlkZXJNb3VudGVyIC8+KVxuXG4gICAgd3JhcHBlcjAuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjUwXCIgfSB9KVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIwXG4gICAgICAgIC5maW5kKFwiLmFkdWktc2xpZGVyLWhhbmRsZVwiKVxuICAgICAgICAuYXQoMSlcbiAgICAgICAgLnByb3AoXCJhcmlhLXZhbHVlbm93XCIpXG4gICAgKS50b0JlKDMwKVxuICAgIHdyYXBwZXIxLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCI1MFwiIH0gfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMVxuICAgICAgICAuZmluZChcIi5hZHVpLXNsaWRlci1oYW5kbGVcIilcbiAgICAgICAgLmF0KDEpXG4gICAgICAgIC5wcm9wKFwiYXJpYS12YWx1ZW5vd1wiKVxuICAgICkudG9CZSg1MClcbiAgfSlcbn0pXG4iXX0=