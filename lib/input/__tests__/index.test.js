"use strict";

var _react = _interopRequireWildcard(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

var _icon = _interopRequireDefault(require("../../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var stub = _sinon["default"].stub(console, "error");

var InputMounter = function (_Component) {
  _inherits(InputMounter, _Component);

  var _super = _createSuper(InputMounter);

  function InputMounter() {
    var _this;

    _classCallCheck(this, InputMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      value: "中文abc",
      leftElement: _react["default"].createElement(_icon["default"], {
        icon: "add"
      })
    };
    return _this;
  }

  _createClass(InputMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          countHanzi = _this$props.countHanzi,
          others = _objectWithoutProperties(_this$props, ["countHanzi"]);

      var _this$state = this.state,
          leftElement = _this$state.leftElement,
          value = _this$state.value;
      return _react["default"].createElement(_["default"], _extends({
        countHanzi: countHanzi,
        leftElement: leftElement,
        limit: 10,
        value: value,
        onChange: function onChange(_ref) {
          var val = _ref.target.value;
          return _this2.setState({
            value: val
          });
        }
      }, others));
    }
  }]);

  return InputMounter;
}(_react.Component);

var TextareaMounter = function (_Component2) {
  _inherits(TextareaMounter, _Component2);

  var _super2 = _createSuper(TextareaMounter);

  function TextareaMounter() {
    var _this3;

    _classCallCheck(this, TextareaMounter);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));
    _this3.state = {
      value: "中文abc"
    };
    return _this3;
  }

  _createClass(TextareaMounter, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          countHanzi = _this$props2.countHanzi,
          others = _objectWithoutProperties(_this$props2, ["countHanzi"]);

      var value = this.state.value;
      return _react["default"].createElement(_["default"].Textarea, _extends({
        countHanzi: countHanzi,
        limit: 10,
        value: value,
        onChange: function onChange(_ref2) {
          var val = _ref2.target.value;
          return _this4.setState({
            value: val
          });
        }
      }, others));
    }
  }]);

  return TextareaMounter;
}(_react.Component);

describe("Input", function () {
  beforeAll(function () {
    Object.defineProperty(Element.prototype, "clientWidth", {
      writable: true,
      configurable: true,
      value: 200
    });
  });
  it("快照验证", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], null));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否正确渲染文本框", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"].Textarea, null));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否能验证 contentJustify", function () {
    (0, _enzyme.render)(_react["default"].createElement(_["default"], {
      contentJustify: true
    }));
    (0, _enzyme.render)(_react["default"].createElement(_["default"], {
      contentJustify: true,
      value: "111\u4E2D\u6587"
    }));
    expect(stub.calledOnce).toEqual(true);
    stub.restore();
  });
  it("是否能验证 limit", function () {
    (0, _enzyme.render)(_react["default"].createElement(_["default"], {
      limit: 10,
      rightElement: _react["default"].createElement("div", null, "string")
    }));
    expect(stub.calledOnce).toEqual(true);
    stub.restore();
  });
  it("是否支持 limit 功能", function () {
    var wrapper0 = (0, _enzyme.mount)(_react["default"].createElement(InputMounter, {
      countHanzi: true
    }));
    var wrapper1 = (0, _enzyme.mount)(_react["default"].createElement(InputMounter, {
      countHanzi: false
    }));
    wrapper0.find("input").simulate("change", {
      target: {
        value: "111中文"
      }
    });
    wrapper1.find("input").simulate("change", {
      target: {
        value: "111中文"
      }
    });
    expect(wrapper0.find(".adui-input-limit").text()).toEqual("4/10");
    expect(wrapper1.find(".adui-input-limit").text()).toEqual("5/10");
  });
  it("是否显示正确的 leftElement rightElement", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      leftElement: _react["default"].createElement(_icon["default"], {
        icon: "search"
      }),
      rightElement: _react["default"].createElement(_icon["default"], {
        icon: "search"
      })
    }));
    var left = wrapper.find(".adui-input-left");
    var right = wrapper.find(".adui-input-right");
    left.simulate("click");
    right.simulate("click");
  });
  it("是否能正确处理 leftElement 宽度", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(InputMounter, null));
    wrapper.setState({
      leftElement: null
    });
    wrapper.setProps({
      rightElement: _react["default"].createElement(_icon["default"], {
        icon: "add"
      })
    });
    wrapper.setProps({
      rightElement: null
    });
  });
  it("事件验证", function () {
    var onPressEnter = jest.fn();
    var onKeyDown = jest.fn();
    var onBlur = jest.fn();
    var onFocus = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onPressEnter: onPressEnter,
      onKeyDown: onKeyDown,
      onBlur: onBlur,
      onFocus: onFocus
    }));
    wrapper.find("input").simulate("keydown", {
      key: "enter",
      keyCode: 13
    });
    wrapper.find("input").simulate("focus");
    wrapper.find("input").simulate("blur");
    expect(onPressEnter).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
  it("验证 Cleave.js", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(InputMounter, {
      cleaveOptions: {
        uppercase: true
      }
    }));
    wrapper.setState({
      value: "abc"
    });
    wrapper.update();
    expect(wrapper.find("input").get(0).props.value).toBe("ABC");
  });
  it("Textarea: 快照验证", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"].Textarea, null));

    expect(wrapper).toMatchSnapshot();
  });
  it("Textarea: 是否能正确验证 limit", function () {
    (0, _enzyme.render)(_react["default"].createElement(_["default"].Textarea, {
      limit: 10,
      resize: "both"
    }));
    expect(stub.calledOnce).toEqual(true);
  });
  it("Textarea: 是否支持 limit 功能", function () {
    var wrapper0 = (0, _enzyme.mount)(_react["default"].createElement(TextareaMounter, {
      countHanzi: true
    }));
    var wrapper1 = (0, _enzyme.mount)(_react["default"].createElement(TextareaMounter, {
      countHanzi: false
    }));
    wrapper0.find("textarea").simulate("change", {
      target: {
        value: "111中文"
      }
    });
    wrapper1.find("textarea").simulate("change", {
      target: {
        value: "111中文"
      }
    });
    expect(wrapper0.find(".adui-input-limit").text()).toEqual("4/10");
    expect(wrapper1.find(".adui-input-limit").text()).toEqual("5/10");
  });
  it("Textarea: 事件验证", function () {
    var onPressEnter = jest.fn();
    var onKeyDown = jest.fn();
    var onBlur = jest.fn();
    var onFocus = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"].Textarea, {
      onPressEnter: onPressEnter,
      onKeyDown: onKeyDown,
      onBlur: onBlur,
      onFocus: onFocus
    }));
    wrapper.find("textarea").simulate("keydown", {
      key: "enter",
      keyCode: 13
    });
    wrapper.find("textarea").simulate("focus");
    expect(wrapper.find(".adui-input-wrapper").at(0).props().className.includes("adui-input-focused")).toBe(true);
    wrapper.find("textarea").simulate("blur");
    expect(wrapper.find(".adui-input-wrapper").at(0).props().className.includes("adui-input-focused")).toBe(false);
    expect(onPressEnter).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvaW5wdXQvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbInN0dWIiLCJzaW5vbiIsImNvbnNvbGUiLCJJbnB1dE1vdW50ZXIiLCJzdGF0ZSIsInZhbHVlIiwibGVmdEVsZW1lbnQiLCJwcm9wcyIsImNvdW50SGFuemkiLCJvdGhlcnMiLCJ2YWwiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsIlRleHRhcmVhTW91bnRlciIsImRlc2NyaWJlIiwiYmVmb3JlQWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJFbGVtZW50IiwicHJvdG90eXBlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJjYWxsZWRPbmNlIiwidG9FcXVhbCIsInJlc3RvcmUiLCJ3cmFwcGVyMCIsIndyYXBwZXIxIiwiZmluZCIsInNpbXVsYXRlIiwidGV4dCIsImxlZnQiLCJyaWdodCIsInNldFByb3BzIiwicmlnaHRFbGVtZW50Iiwib25QcmVzc0VudGVyIiwiamVzdCIsImZuIiwib25LZXlEb3duIiwib25CbHVyIiwib25Gb2N1cyIsImtleSIsImtleUNvZGUiLCJ0b0hhdmVCZWVuQ2FsbGVkVGltZXMiLCJ1cHBlcmNhc2UiLCJ1cGRhdGUiLCJnZXQiLCJ0b0JlIiwiYXQiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLGtCQUFNRCxJQUFOLENBQVdFLE9BQVgsRUFBb0IsT0FBcEIsQ0FBYjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNO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Q0FBa0MsU0FBbEMsRUFBNkM7QUFBRVksTUFBQUEsR0FBRyxFQUFFLE9BQVA7QUFBZ0JDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QixLQUE3QztBQUNBeEIsSUFBQUEsT0FBTyxDQUFDVSxJQUFSLENBQWEsVUFBYixFQUF5QkMsUUFBekIsQ0FBa0MsT0FBbEM7QUFDQVIsSUFBQUEsTUFBTSxDQUFDSCxPQUFPLENBQUNVLElBQVIsQ0FBYSxxQkFBYixFQUFvQ29CLEVBQXBDLENBQXVDLENBQXZDLEVBQTBDL0MsS0FBMUMsR0FBa0RnRCxTQUFsRCxDQUE0REMsUUFBNUQsQ0FBcUUsb0JBQXJFLENBQUQsQ0FBTixDQUFtR0gsSUFBbkcsQ0FBd0csSUFBeEc7QUFDQTdCLElBQUFBLE9BQU8sQ0FBQ1UsSUFBUixDQUFhLFVBQWIsRUFBeUJDLFFBQXpCLENBQWtDLE1BQWxDO0FBQ0FSLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDVSxJQUFSLENBQWEscUJBQWIsRUFBb0NvQixFQUFwQyxDQUF1QyxDQUF2QyxFQUEwQy9DLEtBQTFDLEdBQWtEZ0QsU0FBbEQsQ0FBNERDLFFBQTVELENBQXFFLG9CQUFyRSxDQUFELENBQU4sQ0FBbUdILElBQW5HLENBQXdHLEtBQXhHO0FBQ0ExQixJQUFBQSxNQUFNLENBQUNjLFlBQUQsQ0FBTixDQUFxQlEscUJBQXJCLENBQTJDLENBQTNDO0FBQ0F0QixJQUFBQSxNQUFNLENBQUNpQixTQUFELENBQU4sQ0FBa0JLLHFCQUFsQixDQUF3QyxDQUF4QztBQUNBdEIsSUFBQUEsTUFBTSxDQUFDa0IsTUFBRCxDQUFOLENBQWVJLHFCQUFmLENBQXFDLENBQXJDO0FBQ0F0QixJQUFBQSxNQUFNLENBQUNtQixPQUFELENBQU4sQ0FBZ0JHLHFCQUFoQixDQUFzQyxDQUF0QztBQUNELEdBdkJDLENBQUY7QUF3QkQsQ0EvSE8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc2lub24gZnJvbSBcInNpbm9uXCJcbmltcG9ydCB7IG1vdW50LCByZW5kZXIgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IElucHV0IGZyb20gXCIuLlwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vaWNvblwiXG5cbmNvbnN0IHN0dWIgPSBzaW5vbi5zdHViKGNvbnNvbGUsIFwiZXJyb3JcIilcblxuY2xhc3MgSW5wdXRNb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIuS4reaWh2FiY1wiLFxuICAgIGxlZnRFbGVtZW50OiA8SWNvbiBpY29uPVwiYWRkXCIgLz4sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb3VudEhhbnppLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGxlZnRFbGVtZW50LCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgY291bnRIYW56aT17Y291bnRIYW56aX1cbiAgICAgICAgbGVmdEVsZW1lbnQ9e2xlZnRFbGVtZW50fVxuICAgICAgICBsaW1pdD17MTB9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZTogdmFsIH0gfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSl9XG4gICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBUZXh0YXJlYU1vdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IFwi5Lit5paHYWJjXCIsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb3VudEhhbnppLCAuLi5vdGhlcnMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dC5UZXh0YXJlYVxuICAgICAgICBjb3VudEhhbnppPXtjb3VudEhhbnppfVxuICAgICAgICBsaW1pdD17MTB9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZTogdmFsIH0gfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWwgfSl9XG4gICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcIklucHV0XCIsICgpID0+IHtcbiAgYmVmb3JlQWxsKCgpID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsIFwiY2xpZW50V2lkdGhcIiwge1xuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogMjAwLFxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCLlv6vnhafpqozor4FcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxJbnB1dCAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5PmlofmnKzmoYZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxJbnB1dC5UZXh0YXJlYSAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbiAgaXQoXCLmmK/lkKbog73pqozor4EgY29udGVudEp1c3RpZnlcIiwgKCkgPT4ge1xuICAgIHJlbmRlcig8SW5wdXQgY29udGVudEp1c3RpZnkgLz4pXG4gICAgcmVuZGVyKDxJbnB1dCBjb250ZW50SnVzdGlmeSB2YWx1ZT1cIjExMeS4reaWh1wiIC8+KVxuICAgIGV4cGVjdChzdHViLmNhbGxlZE9uY2UpLnRvRXF1YWwodHJ1ZSlcbiAgICBzdHViLnJlc3RvcmUoKVxuICB9KVxuICBpdChcIuaYr+WQpuiDvemqjOivgSBsaW1pdFwiLCAoKSA9PiB7XG4gICAgcmVuZGVyKDxJbnB1dCBsaW1pdD17MTB9IHJpZ2h0RWxlbWVudD17PGRpdj5zdHJpbmc8L2Rpdj59IC8+KVxuICAgIGV4cGVjdChzdHViLmNhbGxlZE9uY2UpLnRvRXF1YWwodHJ1ZSlcbiAgICBzdHViLnJlc3RvcmUoKVxuICB9KVxuICBpdChcIuaYr+WQpuaUr+aMgSBsaW1pdCDlip/og71cIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoPElucHV0TW91bnRlciBjb3VudEhhbnppIC8+KVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoPElucHV0TW91bnRlciBjb3VudEhhbnppPXtmYWxzZX0gLz4pXG4gICAgd3JhcHBlcjAuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjExMeS4reaWh1wiIH0gfSlcbiAgICB3cmFwcGVyMS5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiMTEx5Lit5paHXCIgfSB9KVxuICAgIGV4cGVjdCh3cmFwcGVyMC5maW5kKFwiLmFkdWktaW5wdXQtbGltaXRcIikudGV4dCgpKS50b0VxdWFsKFwiNC8xMFwiKVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiLmFkdWktaW5wdXQtbGltaXRcIikudGV4dCgpKS50b0VxdWFsKFwiNS8xMFwiKVxuICB9KVxuICBpdChcIuaYr+WQpuaYvuekuuato+ehrueahCBsZWZ0RWxlbWVudCByaWdodEVsZW1lbnRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxJbnB1dFxuICAgICAgICBsZWZ0RWxlbWVudD17PEljb24gaWNvbj1cInNlYXJjaFwiIC8+fVxuICAgICAgICByaWdodEVsZW1lbnQ9ezxJY29uIGljb249XCJzZWFyY2hcIiAvPn1cbiAgICAgIC8+XG4gICAgKVxuICAgIGNvbnN0IGxlZnQgPSB3cmFwcGVyLmZpbmQoXCIuYWR1aS1pbnB1dC1sZWZ0XCIpXG4gICAgY29uc3QgcmlnaHQgPSB3cmFwcGVyLmZpbmQoXCIuYWR1aS1pbnB1dC1yaWdodFwiKVxuICAgIGxlZnQuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIHJpZ2h0LnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgfSlcbiAgaXQoXCLmmK/lkKbog73mraPnoa7lpITnkIYgbGVmdEVsZW1lbnQg5a695bqmXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPElucHV0TW91bnRlciAvPilcbiAgICB3cmFwcGVyLnNldFN0YXRlKHsgbGVmdEVsZW1lbnQ6IG51bGwgfSlcbiAgICB3cmFwcGVyLnNldFByb3BzKHsgcmlnaHRFbGVtZW50OiA8SWNvbiBpY29uPVwiYWRkXCIgLz4gfSlcbiAgICB3cmFwcGVyLnNldFByb3BzKHsgcmlnaHRFbGVtZW50OiBudWxsIH0pXG4gIH0pXG4gIGl0KFwi5LqL5Lu26aqM6K+BXCIsICgpID0+IHtcbiAgICBjb25zdCBvblByZXNzRW50ZXIgPSBqZXN0LmZuKClcbiAgICBjb25zdCBvbktleURvd24gPSBqZXN0LmZuKClcbiAgICBjb25zdCBvbkJsdXIgPSBqZXN0LmZuKClcbiAgICBjb25zdCBvbkZvY3VzID0gamVzdC5mbigpXG5cbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8SW5wdXRcbiAgICAgICAgb25QcmVzc0VudGVyPXtvblByZXNzRW50ZXJ9XG4gICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgIC8+XG4gICAgKVxuICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleTogXCJlbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxuICAgIHdyYXBwZXIuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiZm9jdXNcIilcbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImJsdXJcIilcbiAgICBleHBlY3Qob25QcmVzc0VudGVyKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSlcbiAgICBleHBlY3Qob25LZXlEb3duKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSlcbiAgICBleHBlY3Qob25CbHVyKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSlcbiAgICBleHBlY3Qob25Gb2N1cykudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpXG4gIH0pXG4gIGl0KFwi6aqM6K+BIENsZWF2ZS5qc1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxJbnB1dE1vdW50ZXIgY2xlYXZlT3B0aW9ucz17eyB1cHBlcmNhc2U6IHRydWUgfX0gLz4pXG4gICAgd3JhcHBlci5zZXRTdGF0ZSh7IHZhbHVlOiBcImFiY1wiIH0pXG4gICAgd3JhcHBlci51cGRhdGUoKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5nZXQoMCkucHJvcHMudmFsdWUpLnRvQmUoXCJBQkNcIilcbiAgfSlcblxuICBpdChcIlRleHRhcmVhOiDlv6vnhafpqozor4FcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxJbnB1dC5UZXh0YXJlYSAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbiAgaXQoXCJUZXh0YXJlYTog5piv5ZCm6IO95q2j56Gu6aqM6K+BIGxpbWl0XCIsICgpID0+IHtcbiAgICByZW5kZXIoPElucHV0LlRleHRhcmVhIGxpbWl0PXsxMH0gcmVzaXplPVwiYm90aFwiIC8+KVxuICAgIGV4cGVjdChzdHViLmNhbGxlZE9uY2UpLnRvRXF1YWwodHJ1ZSlcbiAgfSlcbiAgaXQoXCJUZXh0YXJlYTog5piv5ZCm5pSv5oyBIGxpbWl0IOWKn+iDvVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8VGV4dGFyZWFNb3VudGVyIGNvdW50SGFuemkgLz4pXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudCg8VGV4dGFyZWFNb3VudGVyIGNvdW50SGFuemk9e2ZhbHNlfSAvPilcbiAgICB3cmFwcGVyMFxuICAgICAgLmZpbmQoXCJ0ZXh0YXJlYVwiKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjExMeS4reaWh1wiIH0gfSlcbiAgICB3cmFwcGVyMVxuICAgICAgLmZpbmQoXCJ0ZXh0YXJlYVwiKVxuICAgICAgLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjExMeS4reaWh1wiIH0gfSlcbiAgICBleHBlY3Qod3JhcHBlcjAuZmluZChcIi5hZHVpLWlucHV0LWxpbWl0XCIpLnRleHQoKSkudG9FcXVhbChcIjQvMTBcIilcbiAgICBleHBlY3Qod3JhcHBlcjEuZmluZChcIi5hZHVpLWlucHV0LWxpbWl0XCIpLnRleHQoKSkudG9FcXVhbChcIjUvMTBcIilcbiAgfSlcbiAgaXQoXCJUZXh0YXJlYTog5LqL5Lu26aqM6K+BXCIsICgpID0+IHtcbiAgICBjb25zdCBvblByZXNzRW50ZXIgPSBqZXN0LmZuKClcbiAgICBjb25zdCBvbktleURvd24gPSBqZXN0LmZuKClcbiAgICBjb25zdCBvbkJsdXIgPSBqZXN0LmZuKClcbiAgICBjb25zdCBvbkZvY3VzID0gamVzdC5mbigpXG5cbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8SW5wdXQuVGV4dGFyZWFcbiAgICAgICAgb25QcmVzc0VudGVyPXtvblByZXNzRW50ZXJ9XG4gICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICAgIC8+XG4gICAgKVxuICAgIHdyYXBwZXIuZmluZChcInRleHRhcmVhXCIpLnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleTogXCJlbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxuICAgIHdyYXBwZXIuZmluZChcInRleHRhcmVhXCIpLnNpbXVsYXRlKFwiZm9jdXNcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiLmFkdWktaW5wdXQtd3JhcHBlclwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImFkdWktaW5wdXQtZm9jdXNlZFwiKSkudG9CZSh0cnVlKVxuICAgIHdyYXBwZXIuZmluZChcInRleHRhcmVhXCIpLnNpbXVsYXRlKFwiYmx1clwiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCIuYWR1aS1pbnB1dC13cmFwcGVyXCIpLmF0KDApLnByb3BzKCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWR1aS1pbnB1dC1mb2N1c2VkXCIpKS50b0JlKGZhbHNlKVxuICAgIGV4cGVjdChvblByZXNzRW50ZXIpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKVxuICAgIGV4cGVjdChvbktleURvd24pLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKVxuICAgIGV4cGVjdChvbkJsdXIpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKVxuICAgIGV4cGVjdChvbkZvY3VzKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSlcbiAgfSlcbn0pXG4iXX0=