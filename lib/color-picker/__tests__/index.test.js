"use strict";

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY29sb3ItcGlja2VyL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJDb2xvclBpY2tlck1vdW50ZXIiLCJzdGF0ZSIsInZhbHVlIiwidmFsIiwic2V0U3RhdGUiLCJwcm9wcyIsIkNvbXBvbmVudCIsImRlc2NyaWJlIiwiYmVmb3JlQWxsIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckFsbCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJmaW5kIiwiYXQiLCJpbnB1dFZhbHVlIiwidG9CZSIsInNpbXVsYXRlIiwidGFyZ2V0IiwidmFsdWUxIiwiaW5wdXRWYWx1ZTEiLCJydW5BbGxUaW1lcnMiLCJ1cGRhdGUiLCJ2aXNpYmxlIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsInRvSGF2ZUxlbmd0aCIsImFkdmFuY2VUaW1lcnNCeVRpbWUiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsa0I7Ozs7Ozs7Ozs7Ozs7OztVQUNKQyxLLEdBQVE7QUFDTkMsTUFBQUEsS0FBSyxFQUFFO0FBREQsSzs7Ozs7OzZCQUlDO0FBQUE7O0FBQUEsVUFDQ0EsS0FERCxHQUNXLEtBQUtELEtBRGhCLENBQ0NDLEtBREQ7QUFFUCxhQUNFLGdDQUFDLFlBQUQ7QUFDRSxRQUFBLEtBQUssRUFBRUEsS0FEVDtBQUVFLFFBQUEsUUFBUSxFQUFFLGtCQUFBQyxHQUFHO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUYsWUFBQUEsS0FBSyxFQUFFQztBQUFULFdBQWQsQ0FBSjtBQUFBO0FBRmYsU0FHTSxLQUFLRSxLQUhYLEVBREY7QUFPRDs7OztFQWQ4QkMsZ0I7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LFFBQVEsQ0FBQ1gsSUFBVCxDQUFjLE9BQWQsQ0FBRCxDQUFOLENBQStCYSxZQUEvQixDQUE0QyxDQUE1QztBQUNBZixJQUFBQSxNQUFNLENBQUNjLFFBQVEsQ0FBQ1osSUFBVCxDQUFjLE9BQWQsQ0FBRCxDQUFOLENBQStCYSxZQUEvQixDQUE0QyxDQUE1QztBQUNELEdBVEMsQ0FBRjtBQVdBbkIsRUFBQUEsRUFBRSxDQUFDLHNCQUFELEVBQXlCLFlBQU07QUFDL0IsUUFBTUMsT0FBTyxHQUFHLG1CQUFNLGdDQUFDLFlBQUQ7QUFBYSxNQUFBLFlBQVksRUFBQztBQUExQixNQUFOLENBQWhCO0FBQ0FBLElBQUFBLE9BQU8sQ0FBQ0ssSUFBUixDQUFhLGlCQUFiLEVBQWdDSSxRQUFoQyxDQUF5QyxPQUF6QztBQUNBVCxJQUFBQSxPQUFPLENBQUNLLElBQVIsQ0FBYSxRQUFiLEVBQXVCSSxRQUF2QixDQUFnQyxPQUFoQztBQUNBZCxJQUFBQSxJQUFJLENBQUN3QixtQkFBTCxDQUF5QixFQUF6QjtBQUNBbkIsSUFBQUEsT0FBTyxDQUNKSyxJQURILENBQ1EsaUJBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0csUUFISCxDQUdZLE9BSFo7QUFJRCxHQVRDLENBQUY7QUFVRCxDQW5JTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuLy8gaW1wb3J0IHsgYWN0IH0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCJcbmltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi5cIlxuaW1wb3J0IHsgYWN0IH0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCJcblxuY2xhc3MgQ29sb3JQaWNrZXJNb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IFwiIzA3QzE2MFwiLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbCB9KX1cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcIkNvbG9yUGlja2VyXCIsICgpID0+IHtcbiAgYmVmb3JlQWxsKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuICB9KVxuXG4gIGFmdGVyQWxsKCgpID0+IHtcbiAgICBqZXN0LnVzZVJlYWxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8Q29sb3JQaWNrZXIgZGVmYXVsdFZhbHVlPVwiIzA3QzE2MFwiIC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSE55CG5bCP5YaZ5YC855qE5oOF5Ya1XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN2MxNjBcIiAvPilcbiAgICBjb25zdCB2YWx1ZSA9IHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHdyYXBwZXJcbiAgICAgIC5maW5kKFwiSW5wdXRcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnByb3BzKCkudmFsdWVcbiAgICBleHBlY3QoaW5wdXRWYWx1ZSA9PT0gXCIwN0MxNjBcIiAmJiB2YWx1ZSA9PT0gXCIjMDdDMTYwXCIpLnRvQmUodHJ1ZSlcbiAgfSlcblxuICBpdChcIuWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlciBkZWZhdWx0VmFsdWU9XCIjMDdDMTYwXCIgLz4pXG4gICAgd3JhcHBlci5maW5kKFwiYnV0dG9uXCIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwLXN0YW5kYXJkIGlcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBjb25zdCB2YWx1ZSA9IHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHdyYXBwZXJcbiAgICAgIC5maW5kKFwiSW5wdXRcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnByb3BzKCkudmFsdWVcbiAgICBleHBlY3QoaW5wdXRWYWx1ZSA9PT0gXCJGRkZGRkZcIiAmJiB2YWx1ZSA9PT0gXCIjRkZGRkZGXCIpLnRvQmUodHJ1ZSlcblxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIkYwRjBGMFwiIH0gfSlcblxuICAgIGNvbnN0IHZhbHVlMSA9IHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktY3BcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdXG4gICAgY29uc3QgaW5wdXRWYWx1ZTEgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIklucHV0XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgZXhwZWN0KGlucHV0VmFsdWUxID09PSBcIkYwRjBGMFwiICYmIHZhbHVlMSA9PT0gXCIjRjBGMEYwXCIpLnRvQmUodHJ1ZSlcbiAgfSlcblxuICBpdChcIuWklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDb2xvclBpY2tlck1vdW50ZXIgLz4pXG5cbiAgICB3cmFwcGVyLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGFjdCgoKSA9PiB7XG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktY3Atc3RhbmRhcmQgaVwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICAgIGplc3QucnVuQWxsVGltZXJzKClcbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICAgIGNvbnN0IHZhbHVlID0gd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtdmFsdWVcIl1cbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiSW5wdXRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnZhbHVlXG4gICAgICBleHBlY3QoXG4gICAgICAgIGlucHV0VmFsdWUgPT09IFwiRkZGRkZGXCIgJiZcbiAgICAgICAgICB2YWx1ZSA9PT0gXCIjRkZGRkZGXCIgJiZcbiAgICAgICAgICB3cmFwcGVyLnN0YXRlKCkudmFsdWUgPT09IFwiI0ZGRkZGRlwiXG4gICAgICApLnRvQmUodHJ1ZSlcbiAgICB9KVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiaW5wdXRcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIkYwRjBGMFwiIH0gfSlcbiAgICBjb25zdCB2YWx1ZTEgPSB3cmFwcGVyXG4gICAgICAuZmluZChcIi5hZHVpLWNwXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXVxuICAgIGNvbnN0IGlucHV0VmFsdWUxID0gd3JhcHBlclxuICAgICAgLmZpbmQoXCJJbnB1dFwiKVxuICAgICAgLmF0KDApXG4gICAgICAucHJvcHMoKS52YWx1ZVxuICAgIGV4cGVjdChcbiAgICAgIGlucHV0VmFsdWUxID09PSBcIkYwRjBGMFwiICYmXG4gICAgICAgIHZhbHVlMSA9PT0gXCIjRjBGMEYwXCIgJiZcbiAgICAgICAgd3JhcHBlci5zdGF0ZSgpLnZhbHVlID09PSBcIiNGMEYwRjBcIlxuICAgICkudG9CZSh0cnVlKVxuICB9KVxuXG4gIGl0KFwi56aB55So5oCBXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIiBkaXNhYmxlZCAvPilcbiAgICB3cmFwcGVyLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9CZShmYWxzZSlcbiAgfSlcblxuICBpdChcInBvcHVwUmVzdWx0VmlzaWJsZVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8Q29sb3JQaWNrZXIgZGVmYXVsdFZhbHVlPVwiIzA3QzE2MFwiIC8+KVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8Q29sb3JQaWNrZXIgZGVmYXVsdFZhbHVlPVwiIzA3QzE2MFwiIHBvcHVwUmVzdWx0VmlzaWJsZT17ZmFsc2V9IC8+XG4gICAgKVxuICAgIHdyYXBwZXIwLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIHdyYXBwZXIxLmZpbmQoXCJidXR0b25cIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyMC5maW5kKFwiaW5wdXRcIikpLnRvSGF2ZUxlbmd0aCgyKVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiaW5wdXRcIikpLnRvSGF2ZUxlbmd0aCgxKVxuICB9KVxuXG4gIGl0KFwiaGFuZGxlUHJlZml4Q2xpY2sg6aqM6K+BXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPENvbG9yUGlja2VyIGRlZmF1bHRWYWx1ZT1cIiMwN0MxNjBcIiAvPilcbiAgICB3cmFwcGVyLmZpbmQoXCIuYWR1aS1jcC1wcmVmaXhcIikuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIHdyYXBwZXIuZmluZChcImJ1dHRvblwiKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgamVzdC5hZHZhbmNlVGltZXJzQnlUaW1lKDUwKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktY3AtcHJlZml4XCIpXG4gICAgICAuYXQoMSlcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gIH0pXG59KVxuIl19