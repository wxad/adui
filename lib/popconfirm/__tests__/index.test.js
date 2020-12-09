"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9wY29uZmlybS9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiUG9wY29uZmlybU1vdW50ZXIiLCJzdGF0ZSIsInZpc2libGUiLCJwb3Bjb25maXJtIiwiYm9vbCIsIm9wdGlvbnMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckVhY2giLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25WaXNpYmxlQ2hhbmdlIiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwicHJvcHMiLCJ0b0JlIiwiYnV0dG9ucyIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxpQjs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLO1VBSUFDLFU7Ozs7Ozs2QkFFQztBQUFBOztBQUFBLFVBQ0NELE9BREQsR0FDYSxLQUFLRCxLQURsQixDQUNDQyxPQUREO0FBRVAsYUFDRSxvQkFBQyxZQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUVBLE9BRFg7QUFFRSxRQUFBLGVBQWUsRUFBRSx5QkFBQ0UsSUFBRCxFQUFPQyxPQUFQLEVBQW1CO0FBQ2xDLGNBQUlBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQixTQUFuQixJQUFnQyxDQUFDRixJQUFyQyxFQUEyQztBQUN6QyxZQUFBLE1BQUksQ0FBQ0csUUFBTCxDQUFjO0FBQUVMLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQWQ7QUFDRCxXQUZELE1BRU87QUFDTCxZQUFBLE1BQUksQ0FBQ0ssUUFBTCxDQUFjO0FBQUVMLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQWQ7QUFDRDtBQUNGLFNBUkg7QUFTRSxRQUFBLEtBQUssRUFBQyxPQVRSO0FBVUUsUUFBQSxHQUFHLEVBQUUsYUFBQ0MsVUFBRCxFQUFxQjtBQUN4QixjQUFJQSxVQUFKLEVBQWdCO0FBQ2QsWUFBQSxNQUFJLENBQUNBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsbUJBQU8sTUFBSSxDQUFDQSxVQUFaO0FBQ0Q7O0FBQ0QsaUJBQU8sSUFBUDtBQUNEO0FBaEJILFNBa0JFO0FBQUssUUFBQSxFQUFFLEVBQUM7QUFBUixvQkFsQkYsQ0FERjtBQXNCRDs7OztFQS9CNkJLLEtBQUssQ0FBQ0MsUzs7QUFrQ3RDQyxRQUFRLENBQUMsWUFBRCxFQUFlLFlBQU07QUFDM0JDLEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZDLElBQUFBLElBQUksQ0FBQ0MsYUFBTDtBQUNELEdBRlMsQ0FBVjtBQUlBQyxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkRixJQUFBQSxJQUFJLENBQUNHLGFBQUw7QUFDRCxHQUZRLENBQVQ7QUFJQUMsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLE9BQU8sR0FBR0MsOEJBQWFDLE1BQWIsQ0FDZCxvQkFBQyxZQUFEO0FBQVksTUFBQSxLQUFLLEVBQUM7QUFBbEIsa0JBRGMsQ0FBaEI7O0FBR0FDLElBQUFBLE1BQU0sQ0FBQ0gsT0FBRCxDQUFOLENBQWdCSSxlQUFoQjtBQUNELEdBTEMsQ0FBRjtBQU9BTCxFQUFBQSxFQUFFLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDbEIsUUFBTU0sZUFBZSxHQUFHVixJQUFJLENBQUNXLEVBQUwsRUFBeEI7QUFDQSxRQUFNTixPQUFPLEdBQUcsbUJBQ2Qsb0JBQUMsWUFBRDtBQUFZLE1BQUEsZUFBZSxFQUFFSztBQUE3QixPQUNFO0FBQUssTUFBQSxFQUFFLEVBQUM7QUFBUixlQURGLENBRGMsQ0FBaEI7QUFLQUwsSUFBQUEsT0FBTyxDQUNKTyxJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHQyxRQUhILENBR1ksT0FIWjtBQUlBTixJQUFBQSxNQUFNLENBQUNFLGVBQUQsQ0FBTixDQUF3Qkssb0JBQXhCLENBQTZDLElBQTdDLEVBQW1ELEVBQW5EO0FBQ0FQLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDTyxJQUFSLENBQWEsU0FBYixFQUF3QkksS0FBeEIsR0FBZ0MxQixPQUFqQyxDQUFOLENBQWdEMkIsSUFBaEQsQ0FBcUQsSUFBckQ7QUFDQSxRQUFNQyxPQUFPLEdBQUdiLE9BQU8sQ0FBQ08sSUFBUixDQUFhLFFBQWIsQ0FBaEI7QUFDQU0sSUFBQUEsT0FBTyxDQUFDTCxFQUFSLENBQVcsQ0FBWCxFQUFjQyxRQUFkLENBQXVCLE9BQXZCO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0UsZUFBRCxDQUFOLENBQXdCSyxvQkFBeEIsQ0FBNkMsS0FBN0MsRUFBb0Q7QUFBRXJCLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBQXBEO0FBQ0FjLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDTyxJQUFSLENBQWEsU0FBYixFQUF3QkksS0FBeEIsR0FBZ0MxQixPQUFqQyxDQUFOLENBQWdEMkIsSUFBaEQsQ0FBcUQsS0FBckQ7QUFDQVosSUFBQUEsT0FBTyxDQUNKTyxJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHQyxRQUhILENBR1ksT0FIWjtBQUlBSSxJQUFBQSxPQUFPLENBQUNMLEVBQVIsQ0FBVyxDQUFYLEVBQWNDLFFBQWQsQ0FBdUIsT0FBdkI7QUFDQU4sSUFBQUEsTUFBTSxDQUFDRSxlQUFELENBQU4sQ0FBd0JLLG9CQUF4QixDQUE2QyxLQUE3QyxFQUFvRDtBQUFFckIsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBcEQ7QUFDQWMsSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNPLElBQVIsQ0FBYSxTQUFiLEVBQXdCSSxLQUF4QixHQUFnQzFCLE9BQWpDLENBQU4sQ0FBZ0QyQixJQUFoRCxDQUFxRCxLQUFyRDtBQUNELEdBeEJDLENBQUY7QUEwQkFiLEVBQUFBLEVBQUUsQ0FBQyxTQUFELEVBQVksWUFBTTtBQUNsQixRQUFNQyxPQUFPLEdBQUcsbUJBQU0sb0JBQUMsaUJBQUQsT0FBTixDQUFoQjtBQUNBLFFBQU1hLE9BQU8sR0FBR2IsT0FBTyxDQUFDTyxJQUFSLENBQWEsUUFBYixDQUFoQjtBQUNBTSxJQUFBQSxPQUFPLENBQUNMLEVBQVIsQ0FBVyxDQUFYLEVBQWNDLFFBQWQsQ0FBdUIsT0FBdkI7QUFDQU4sSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNPLElBQVIsQ0FBYSxTQUFiLEVBQXdCSSxLQUF4QixHQUFnQzFCLE9BQWpDLENBQU4sQ0FBZ0Q2QixPQUFoRCxDQUF3RCxLQUF4RDtBQUNBZCxJQUFBQSxPQUFPLENBQ0pPLElBREgsQ0FDUSxXQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLFFBSEgsQ0FHWSxPQUhaO0FBSUFOLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDTyxJQUFSLENBQWEsU0FBYixFQUF3QkksS0FBeEIsR0FBZ0MxQixPQUFqQyxDQUFOLENBQWdENkIsT0FBaEQsQ0FBd0QsSUFBeEQ7QUFDQUQsSUFBQUEsT0FBTyxDQUFDTCxFQUFSLENBQVcsQ0FBWCxFQUFjQyxRQUFkLENBQXVCLE9BQXZCO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDTyxJQUFSLENBQWEsU0FBYixFQUF3QkksS0FBeEIsR0FBZ0MxQixPQUFqQyxDQUFOLENBQWdENkIsT0FBaEQsQ0FBd0QsSUFBeEQ7QUFDRCxHQVpDLENBQUY7QUFhRCxDQXZETyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgUG9wY29uZmlybSBmcm9tIFwiLi5cIlxuXG5jbGFzcyBQb3Bjb25maXJtTW91bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZpc2libGU6IHRydWUsXG4gIH1cblxuICBwcml2YXRlIHBvcGNvbmZpcm06IGFueVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcGNvbmZpcm1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXsoYm9vbCwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgIGlmIChvcHRpb25zLnRhcmdldCAhPT0gXCJjb25maXJtXCIgJiYgIWJvb2wpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgcG9wdXA9XCJwb3B1cFwiXG4gICAgICAgIHJlZj17KHBvcGNvbmZpcm06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChwb3Bjb25maXJtKSB7XG4gICAgICAgICAgICB0aGlzLnBvcGNvbmZpcm0gPSBwb3Bjb25maXJtXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3Bjb25maXJtXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgaWQ9XCJjaGlsZHJlblwiPmNoaWxkcmVuPC9kaXY+XG4gICAgICA8L1BvcGNvbmZpcm0+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiUG9wY29uZmlybVwiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZVJlYWxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxQb3Bjb25maXJtIHBvcHVwPVwiMVwiPmNoaWxkcmVuPC9Qb3Bjb25maXJtPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25WaXNpYmxlQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFBvcGNvbmZpcm0gb25WaXNpYmxlQ2hhbmdlPXtvblZpc2libGVDaGFuZ2V9PlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRcIj5jaGlsZDwvZGl2PlxuICAgICAgPC9Qb3Bjb25maXJtPlxuICAgIClcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIiNjaGlsZFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvblZpc2libGVDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUsIHt9KVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9CZSh0cnVlKVxuICAgIGNvbnN0IGJ1dHRvbnMgPSB3cmFwcGVyLmZpbmQoXCJidXR0b25cIilcbiAgICBidXR0b25zLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25WaXNpYmxlQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChmYWxzZSwgeyB0YXJnZXQ6IFwiY2FuY2VsXCIgfSlcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvQmUoZmFsc2UpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIjY2hpbGRcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBidXR0b25zLmF0KDEpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25WaXNpYmxlQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChmYWxzZSwgeyB0YXJnZXQ6IFwiY29uZmlybVwiIH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlBvcG92ZXJcIikucHJvcHMoKS52aXNpYmxlKS50b0JlKGZhbHNlKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFBvcGNvbmZpcm1Nb3VudGVyIC8+KVxuICAgIGNvbnN0IGJ1dHRvbnMgPSB3cmFwcGVyLmZpbmQoXCJidXR0b25cIilcbiAgICBidXR0b25zLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwoZmFsc2UpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIjY2hpbGRyZW5cIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwodHJ1ZSlcbiAgICBidXR0b25zLmF0KDEpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwodHJ1ZSlcbiAgfSlcbn0pXG4iXX0=