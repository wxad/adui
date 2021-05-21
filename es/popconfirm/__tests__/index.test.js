function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import * as React from "react";
import { mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import Popconfirm from "..";

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
      return React.createElement(Popconfirm, {
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
    var wrapper = TestRenderer.create(React.createElement(Popconfirm, {
      popup: "1"
    }, "children"));
    expect(wrapper).toMatchSnapshot();
  });
  it("是否能内部驱动", function () {
    var onVisibleChange = jest.fn();
    var wrapper = mount(React.createElement(Popconfirm, {
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
    var wrapper = mount(React.createElement(PopconfirmMounter, null));
    var buttons = wrapper.find("button");
    buttons.at(0).simulate("click");
    expect(wrapper.find("Popover").props().visible).toEqual(false);
    wrapper.find("#children").at(0).simulate("click");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
    buttons.at(1).simulate("click");
    expect(wrapper.find("Popover").props().visible).toEqual(true);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9wY29uZmlybS9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJtb3VudCIsIlRlc3RSZW5kZXJlciIsIlBvcGNvbmZpcm0iLCJQb3Bjb25maXJtTW91bnRlciIsInN0YXRlIiwidmlzaWJsZSIsInBvcGNvbmZpcm0iLCJib29sIiwib3B0aW9ucyIsInRhcmdldCIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckVhY2giLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25WaXNpYmxlQ2hhbmdlIiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwicHJvcHMiLCJ0b0JlIiwiYnV0dG9ucyIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLFFBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixxQkFBekI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLElBQXZCOztJQUVNQyxpQjs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNOQyxNQUFBQSxPQUFPLEVBQUU7QUFESCxLO1VBSUFDLFU7Ozs7Ozs2QkFFQztBQUFBOztBQUFBLFVBQ0NELE9BREQsR0FDYSxLQUFLRCxLQURsQixDQUNDQyxPQUREO0FBRVAsYUFDRSxvQkFBQyxVQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUVBLE9BRFg7QUFFRSxRQUFBLGVBQWUsRUFBRSx5QkFBQ0UsSUFBRCxFQUFPQyxPQUFQLEVBQW1CO0FBQ2xDLGNBQUlBLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQixTQUFuQixJQUFnQyxDQUFD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YWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgUG9wY29uZmlybSBmcm9tIFwiLi5cIlxuXG5jbGFzcyBQb3Bjb25maXJtTW91bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZpc2libGU6IHRydWUsXG4gIH1cblxuICBwcml2YXRlIHBvcGNvbmZpcm06IGFueVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcGNvbmZpcm1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXsoYm9vbCwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgIGlmIChvcHRpb25zLnRhcmdldCAhPT0gXCJjb25maXJtXCIgJiYgIWJvb2wpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogdHJ1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgcG9wdXA9XCJwb3B1cFwiXG4gICAgICAgIHJlZj17KHBvcGNvbmZpcm06IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChwb3Bjb25maXJtKSB7XG4gICAgICAgICAgICB0aGlzLnBvcGNvbmZpcm0gPSBwb3Bjb25maXJtXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3Bjb25maXJtXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgaWQ9XCJjaGlsZHJlblwiPmNoaWxkcmVuPC9kaXY+XG4gICAgICA8L1BvcGNvbmZpcm0+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiUG9wY29uZmlybVwiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZVJlYWxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxQb3Bjb25maXJtIHBvcHVwPVwiMVwiPmNoaWxkcmVuPC9Qb3Bjb25maXJtPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25WaXNpYmxlQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFBvcGNvbmZpcm0gb25WaXNpYmxlQ2hhbmdlPXtvblZpc2libGVDaGFuZ2V9PlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRcIj5jaGlsZDwvZGl2PlxuICAgICAgPC9Qb3Bjb25maXJtPlxuICAgIClcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIiNjaGlsZFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvblZpc2libGVDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUsIHt9KVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJQb3BvdmVyXCIpLnByb3BzKCkudmlzaWJsZSkudG9CZSh0cnVlKVxuICAgIGNvbnN0IGJ1dHRvbnMgPSB3cmFwcGVyLmZpbmQoXCJidXR0b25cIilcbiAgICBidXR0b25zLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25WaXNpYmxlQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChmYWxzZSwgeyB0YXJnZXQ6IFwiY2FuY2VsXCIgfSlcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvQmUoZmFsc2UpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIjY2hpbGRcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBidXR0b25zLmF0KDEpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25WaXNpYmxlQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChmYWxzZSwgeyB0YXJnZXQ6IFwiY29uZmlybVwiIH0pXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlBvcG92ZXJcIikucHJvcHMoKS52aXNpYmxlKS50b0JlKGZhbHNlKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFBvcGNvbmZpcm1Nb3VudGVyIC8+KVxuICAgIGNvbnN0IGJ1dHRvbnMgPSB3cmFwcGVyLmZpbmQoXCJidXR0b25cIilcbiAgICBidXR0b25zLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwoZmFsc2UpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCIjY2hpbGRyZW5cIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwodHJ1ZSlcbiAgICBidXR0b25zLmF0KDEpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiUG9wb3ZlclwiKS5wcm9wcygpLnZpc2libGUpLnRvRXF1YWwodHJ1ZSlcbiAgfSlcbn0pXG4iXX0=