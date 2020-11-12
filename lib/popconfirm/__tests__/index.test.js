"use strict";

var React = _interopRequireWildcard(require("react"));

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

var PopconfirmMounter = function (_React$Component) {
  _inherits(PopconfirmMounter, _React$Component);

  var _super = _createSuper(PopconfirmMounter);

  function PopconfirmMounter() {
    var _this;

    _classCallCheck(this, PopconfirmMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      visible: true
    };
    _this.popconfirm = void 0;
    return _this;
  }

  _createClass(PopconfirmMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var visible = this.state.visible;
      return React.createElement(_["default"], {
        visible: visible,
        onVisibleChange: function onVisibleChange(bool, options) {
          if (options.target !== "confirm" && !bool) {
            _this2.setState({
              visible: false
            });
          } else {
            _this2.setState({
              visible: true
            });
          }
        },
        popup: "popup",
        ref: function ref(popconfirm) {
          if (popconfirm) {
            _this2.popconfirm = popconfirm;
            return _this2.popconfirm;
          }

          return null;
        }
      }, React.createElement("div", {
        id: "children"
      }, "children"));
    }
  }]);

  return PopconfirmMounter;
}(React.Component);

describe("Popconfirm", function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      popup: "1"
    }, "children"));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否能内部驱动", function () {
    var onVisibleChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      onVisibleChange: onVisibleChange
    }, React.createElement("div", {
      id: "child"
    }, "child")));
    wrapper.find("#child").at(0).simulate("click");
    expect(onVisibleChange).toHaveBeenCalledWith(true, {});
    expect(wrapper.find("Popover").props().visible).toBe(true);
    var buttons = wrapper.find("button");
    buttons.at(0).simulate("click");
    expect(onVisibleChange).toHaveBeenCalledWith(false, {
      target: "cancel"
    });
    expect(wrapper.find("Popover").props().visible).toBe(false);
    wrapper.find("#child").at(0).simulate("click");
    buttons.at(1).simulate("click");
    expect(onVisibleChange).toHaveBeenCalledWith(false, {
      target: "confirm"
    });
    expect(wrapper.find("Popover").props().visible).toBe(false);
  });
  it("是否能外部控制", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(PopconfirmMounter, null));
    var buttons = wrapper.find("button");
    buttons.at(0).simulate("click");
    expect(wrapper.find("Popover").props().visible).toEqual(false);
    wrapper.find("#children").at(0).simulate("click");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    buttons.at(1).simulate("click");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9wY29uZmlybS9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiUG9wY29uZmlybU1vdW50ZXIiLCJzdGF0ZSIsInZpc2libGUiLCJwb3Bjb25maXJtIiwiYm9vbCIsIm9wdGlvbnMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckVhY2giLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25WaXNpYmxlQ2hhbmdlIiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwicHJvcHMiLCJ0b0JlIiwiYnV0dG9ucyIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGlCOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLE9BQU8sRUFBRTtBQURILEs7VUFJQUMsVTs7Ozs7OzZCQUVDO0FBQUE7O0FBQUEsVUFDQ0QsT0FERCxHQUNhLEtBQUtELEtBRGxCLENBQ0NDLE9BREQ7QUFFUCxhQUNFLG9CQUFDLFlBQUQ7QUFDRSxRQUFBLE9BQU8sRUFBRUEsT0FEWDtBQUVFLFFBQUEsZUFBZSxFQUFFLHlCQUFDRSxJQUFELEVBQU9DLE9BQVAsRUFBbUI7QUFDbEMsY0FBSUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CLFNBQW5CLElBQWdDLENBQUNGLElBQXJDLEVBQTJDO0FBQ3pDLFlBQUEsTUFBSSxDQUFDRyxRQUFMLENBQWM7QUFBRUwsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUFBZDtBQUNE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TixDQUFnRDJCLElBQWhELENBQXFELEtBQXJEO0FBQ0QsR0F4QkMsQ0FBRjtBQTBCQWIsRUFBQUEsRUFBRSxDQUFDLFNBQUQsRUFBWSxZQUFNO0FBQ2xCLFFBQU1DLE9BQU8sR0FBRyxtQkFBTSxvQkFBQyxpQkFBRCxPQUFOLENBQWhCO0FBQ0EsUUFBTWEsT0FBTyxHQUFHYixPQUFPLENBQUNPLElBQVIsQ0FBYSxRQUFiLENBQWhCO0FBQ0FNLElBQUFBLE9BQU8sQ0FBQ0wsRUFBUixDQUFXLENBQVgsRUFBY0MsUUFBZCxDQUF1QixPQUF2QjtBQUNBTixJQUFBQSxNQUFNLENBQUNILE9BQU8sQ0FBQ08sSUFBUixDQUFhLFNBQWIsRUFBd0JJLEtBQXhCLEdBQWdDMUIsT0FBakMsQ0FBTixDQUFnRDZCLE9BQWhELENBQXdELEtBQXhEO0FBQ0FkLElBQUFBLE9BQU8sQ0FDSk8sSUFESCxDQUNRLFdBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsUUFISCxDQUdZLE9BSFo7QUFJQU4sSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNPLElBQVIsQ0FBYSxTQUFiLEVBQXdCSSxLQUF4QixHQUFnQzFCLE9BQWpDLENBQU4sQ0FBZ0Q2QixPQUFoRCxDQUF3RCxJQUF4RDtBQUNBRCxJQUFBQSxPQUFPLENBQUNMLEVBQVIsQ0FBVyxDQUFYLEVBQWNDLFFBQWQsQ0FBdUIsT0FBdkI7QUFDQU4sSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNPLElBQVIsQ0FBYSxTQUFiLEVBQXdCSSxLQUF4QixHQUFnQzFCLE9BQWpDLENBQU4sQ0FBZ0Q2QixPQUFoRCxDQUF3RCxJQUF4RDtBQUNELEdBWkMsQ0FBRjtBQWFELENBdkRPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBQb3Bjb25maXJtIGZyb20gXCIuLlwiXG5cbmNsYXNzIFBvcGNvbmZpcm1Nb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfVxuXG4gIHByaXZhdGUgcG9wY29uZmlybTogYW55XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8UG9wY29uZmlybVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9eyhib29sLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0ICE9PSBcImNvbmZpcm1cIiAmJiAhYm9vbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGZhbHNlIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiB0cnVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBwb3B1cD1cInBvcHVwXCJcbiAgICAgICAgcmVmPXsocG9wY29uZmlybTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHBvcGNvbmZpcm0pIHtcbiAgICAgICAgICAgIHRoaXMucG9wY29uZmlybSA9IHBvcGNvbmZpcm1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcGNvbmZpcm1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBpZD1cImNoaWxkcmVuXCI+Y2hpbGRyZW48L2Rpdj5cbiAgICAgIDwvUG9wY29uZmlybT5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJQb3Bjb25maXJtXCIsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VGYWtlVGltZXJzKClcbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlUmVhbFRpbWVycygpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFBvcGNvbmZpcm0gcG9wdXA9XCIxXCI+Y2hpbGRyZW48L1BvcGNvbmZpcm0+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCBvblZpc2libGVDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8UG9wY29uZmlybSBvblZpc2libGVDaGFuZ2U9e29uVmlzaWJsZUNoYW5nZX0+XG4gICAgICAgIDxkaXYgaWQ9XCJjaGlsZFwiPmNoaWxkPC9kaXY+XG4gICAgICA8L1BvcGNvbmZpcm0+XG4gICAgKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiI2NoaWxkXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uVmlzaWJsZUNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSwge30pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlBvcG92ZXJcIikucHJvcHMoKS52aXNpYmxlKS50b0JlKHRydWUpXG4gICAgY29uc3QgYnV0dG9ucyA9IHdyYXBwZXIuZmluZChcImJ1dHRvblwiKVxuICAgIGJ1dHRvbnMuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvblZpc2libGVDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGZhbHNlLCB7IHRhcmdldDogXCJjYW5jZWxcIiB9KVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9CZShmYWxzZSlcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIiNjaGlsZFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGJ1dHRvbnMuYXQoMSkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvblZpc2libGVDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGZhbHNlLCB7IHRhcmdldDogXCJjb25maXJtXCIgfSlcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvQmUoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8UG9wY29uZmlybU1vdW50ZXIgLz4pXG4gICAgY29uc3QgYnV0dG9ucyA9IHdyYXBwZXIuZmluZChcImJ1dHRvblwiKVxuICAgIGJ1dHRvbnMuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbChmYWxzZSlcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIiNjaGlsZHJlblwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbCh0cnVlKVxuICAgIGJ1dHRvbnMuYXQoMSkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9FcXVhbCh0cnVlKVxuICB9KVxufSlcbiJdfQ==