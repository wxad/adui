"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

var _icon = _interopRequireDefault(require("../../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvaW5wdXQvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbInN0dWIiLCJzaW5vbiIsImNvbnNvbGUiLCJJbnB1dE1vdW50ZXIiLCJzdGF0ZSIsInZhbHVlIiwibGVmdEVsZW1lbnQiLCJwcm9wcyIsImNvdW50SGFuemkiLCJvdGhlcnMiLCJ2YWwiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsIlRleHRhcmVhTW91bnRlciIsImRlc2NyaWJlIiwiYmVmb3JlQWxsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJFbGVtZW50IiwicHJvdG90eXBlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJjYWxsZWRPbmNlIiwidG9FcXVhbCIsInJlc3RvcmUiLCJ3cmFwcGVyMCIsIndyYXBwZXIxIiwiZmluZCIsInNpbXVsYXRlIiwidGV4dCIsImxlZnQiLCJyaWdodCIsInNldFByb3BzIiwicmlnaHRFbGVtZW50Iiwib25QcmVzc0VudGVyIiwiamVzdCIsImZuIiwib25LZXlEb3duIiwib25CbHVyIiwib25Gb2N1cyIsImtleSIsImtleUNvZGUiLCJ0b0hhdmVCZWVuQ2FsbGVkVGltZXMiLCJ1cHBlcmNhc2UiLCJ1cGRhdGUiLCJnZXQiLCJ0b0JlIiwiYXQiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxrQkFBTUQsSUFBTixDQUFXRSxPQUFYLEVBQW9CLE9BQXBCLENBQWI7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7OztVQUNKQyxLLEdBQVE7QUFDTkMsTUFBQUEsS0FBSyxFQUFFLE9BREQ7QUFF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QUFBLEdBQUcsRUFBRSxPQUFQO0FBQWdCQyxNQUFBQSxPQUFPLEVBQUU7QUFBekIsS0FBN0M7QUFDQXhCLElBQUFBLE9BQU8sQ0FBQ1UsSUFBUixDQUFhLFVBQWIsRUFBeUJDLFFBQXpCLENBQWtDLE9BQWxDO0FBQ0FSLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDVSxJQUFSLENBQWEscUJBQWIsRUFBb0NvQixFQUFwQyxDQUF1QyxDQUF2QyxFQUEwQy9DLEtBQTFDLEdBQWtEZ0QsU0FBbEQsQ0FBNERDLFFBQTVELENBQXFFLG9CQUFyRSxDQUFELENBQU4sQ0FBbUdILElBQW5HLENBQXdHLElBQXhHO0FBQ0E3QixJQUFBQSxPQUFPLENBQUNVLElBQVIsQ0FBYSxVQUFiLEVBQXlCQyxRQUF6QixDQUFrQyxNQUFsQztBQUNBUixJQUFBQSxNQUFNLENBQUNILE9BQU8sQ0FBQ1UsSUFBUixDQUFhLHFCQUFiLEVBQW9Db0IsRUFBcEMsQ0FBdUMsQ0FBdkMsRUFBMEMvQyxLQUExQyxHQUFrRGdELFNBQWxELENBQTREQyxRQUE1RCxDQUFxRSxvQkFBckUsQ0FBRCxDQUFOLENBQW1HSCxJQUFuRyxDQUF3RyxLQUF4RztBQUNBMUIsSUFBQUEsTUFBTSxDQUFDYyxZQUFELENBQU4sQ0FBcUJRLHFCQUFyQixDQUEyQyxDQUEzQztBQUNBdEIsSUFBQUEsTUFBTSxDQUFDaUIsU0FBRCxDQUFOLENBQWtCSyxxQkFBbEIsQ0FBd0MsQ0FBeEM7QUFDQXRCLElBQUFBLE1BQU0sQ0FBQ2tCLE1BQUQsQ0FBTixDQUFlSSxxQkFBZixDQUFxQyxDQUFyQztBQUNBdEIsSUFBQUEsTUFBTSxDQUFDbUIsT0FBRCxDQUFOLENBQWdCRyxxQkFBaEIsQ0FBc0MsQ0FBdEM7QUFDRCxHQXZCQyxDQUFGO0FBd0JELENBL0hPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHNpbm9uIGZyb20gXCJzaW5vblwiXG5pbXBvcnQgeyBtb3VudCwgcmVuZGVyIH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi5cIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL2ljb25cIlxuXG5jb25zdCBzdHViID0gc2lub24uc3R1Yihjb25zb2xlLCBcImVycm9yXCIpXG5cbmNsYXNzIElucHV0TW91bnRlciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogXCLkuK3mlodhYmNcIixcbiAgICBsZWZ0RWxlbWVudDogPEljb24gaWNvbj1cImFkZFwiIC8+LFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY291bnRIYW56aSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBsZWZ0RWxlbWVudCwgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGNvdW50SGFuemk9e2NvdW50SGFueml9XG4gICAgICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWU6IHZhbCB9IH0pID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsIH0pfVxuICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgVGV4dGFyZWFNb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiBcIuS4reaWh2FiY1wiLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY291bnRIYW56aSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXQuVGV4dGFyZWFcbiAgICAgICAgY291bnRIYW56aT17Y291bnRIYW56aX1cbiAgICAgICAgbGltaXQ9ezEwfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWU6IHZhbCB9IH0pID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsIH0pfVxuICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJJbnB1dFwiLCAoKSA9PiB7XG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCBcImNsaWVudFdpZHRoXCIsIHtcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IDIwMCxcbiAgICB9KVxuICB9KVxuXG4gIGl0KFwi5b+r54Wn6aqM6K+BXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8SW5wdXQgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+T5paH5pys5qGGXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8SW5wdXQuVGV4dGFyZWEgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG4gIGl0KFwi5piv5ZCm6IO96aqM6K+BIGNvbnRlbnRKdXN0aWZ5XCIsICgpID0+IHtcbiAgICByZW5kZXIoPElucHV0IGNvbnRlbnRKdXN0aWZ5IC8+KVxuICAgIHJlbmRlcig8SW5wdXQgY29udGVudEp1c3RpZnkgdmFsdWU9XCIxMTHkuK3mlodcIiAvPilcbiAgICBleHBlY3Qoc3R1Yi5jYWxsZWRPbmNlKS50b0VxdWFsKHRydWUpXG4gICAgc3R1Yi5yZXN0b3JlKClcbiAgfSlcbiAgaXQoXCLmmK/lkKbog73pqozor4EgbGltaXRcIiwgKCkgPT4ge1xuICAgIHJlbmRlcig8SW5wdXQgbGltaXQ9ezEwfSByaWdodEVsZW1lbnQ9ezxkaXY+c3RyaW5nPC9kaXY+fSAvPilcbiAgICBleHBlY3Qoc3R1Yi5jYWxsZWRPbmNlKS50b0VxdWFsKHRydWUpXG4gICAgc3R1Yi5yZXN0b3JlKClcbiAgfSlcbiAgaXQoXCLmmK/lkKbmlK/mjIEgbGltaXQg5Yqf6IO9XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KDxJbnB1dE1vdW50ZXIgY291bnRIYW56aSAvPilcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxJbnB1dE1vdW50ZXIgY291bnRIYW56aT17ZmFsc2V9IC8+KVxuICAgIHdyYXBwZXIwLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxMTHkuK3mlodcIiB9IH0pXG4gICAgd3JhcHBlcjEuZmluZChcImlucHV0XCIpLnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjExMeS4reaWh1wiIH0gfSlcbiAgICBleHBlY3Qod3JhcHBlcjAuZmluZChcIi5hZHVpLWlucHV0LWxpbWl0XCIpLnRleHQoKSkudG9FcXVhbChcIjQvMTBcIilcbiAgICBleHBlY3Qod3JhcHBlcjEuZmluZChcIi5hZHVpLWlucHV0LWxpbWl0XCIpLnRleHQoKSkudG9FcXVhbChcIjUvMTBcIilcbiAgfSlcbiAgaXQoXCLmmK/lkKbmmL7npLrmraPnoa7nmoQgbGVmdEVsZW1lbnQgcmlnaHRFbGVtZW50XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8SW5wdXRcbiAgICAgICAgbGVmdEVsZW1lbnQ9ezxJY29uIGljb249XCJzZWFyY2hcIiAvPn1cbiAgICAgICAgcmlnaHRFbGVtZW50PXs8SWNvbiBpY29uPVwic2VhcmNoXCIgLz59XG4gICAgICAvPlxuICAgIClcbiAgICBjb25zdCBsZWZ0ID0gd3JhcHBlci5maW5kKFwiLmFkdWktaW5wdXQtbGVmdFwiKVxuICAgIGNvbnN0IHJpZ2h0ID0gd3JhcHBlci5maW5kKFwiLmFkdWktaW5wdXQtcmlnaHRcIilcbiAgICBsZWZ0LnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICByaWdodC5zaW11bGF0ZShcImNsaWNrXCIpXG4gIH0pXG4gIGl0KFwi5piv5ZCm6IO95q2j56Gu5aSE55CGIGxlZnRFbGVtZW50IOWuveW6plwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxJbnB1dE1vdW50ZXIgLz4pXG4gICAgd3JhcHBlci5zZXRTdGF0ZSh7IGxlZnRFbGVtZW50OiBudWxsIH0pXG4gICAgd3JhcHBlci5zZXRQcm9wcyh7IHJpZ2h0RWxlbWVudDogPEljb24gaWNvbj1cImFkZFwiIC8+IH0pXG4gICAgd3JhcHBlci5zZXRQcm9wcyh7IHJpZ2h0RWxlbWVudDogbnVsbCB9KVxuICB9KVxuICBpdChcIuS6i+S7tumqjOivgVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25QcmVzc0VudGVyID0gamVzdC5mbigpXG4gICAgY29uc3Qgb25LZXlEb3duID0gamVzdC5mbigpXG4gICAgY29uc3Qgb25CbHVyID0gamVzdC5mbigpXG4gICAgY29uc3Qgb25Gb2N1cyA9IGplc3QuZm4oKVxuXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPElucHV0XG4gICAgICAgIG9uUHJlc3NFbnRlcj17b25QcmVzc0VudGVyfVxuICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAvPlxuICAgIClcbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImtleWRvd25cIiwgeyBrZXk6IFwiZW50ZXJcIiwga2V5Q29kZTogMTMgfSlcbiAgICB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKS5zaW11bGF0ZShcImZvY3VzXCIpXG4gICAgd3JhcHBlci5maW5kKFwiaW5wdXRcIikuc2ltdWxhdGUoXCJibHVyXCIpXG4gICAgZXhwZWN0KG9uUHJlc3NFbnRlcikudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpXG4gICAgZXhwZWN0KG9uS2V5RG93bikudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpXG4gICAgZXhwZWN0KG9uQmx1cikudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpXG4gICAgZXhwZWN0KG9uRm9jdXMpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKVxuICB9KVxuICBpdChcIumqjOivgSBDbGVhdmUuanNcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8SW5wdXRNb3VudGVyIGNsZWF2ZU9wdGlvbnM9e3sgdXBwZXJjYXNlOiB0cnVlIH19IC8+KVxuICAgIHdyYXBwZXIuc2V0U3RhdGUoeyB2YWx1ZTogXCJhYmNcIiB9KVxuICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiaW5wdXRcIikuZ2V0KDApLnByb3BzLnZhbHVlKS50b0JlKFwiQUJDXCIpXG4gIH0pXG5cbiAgaXQoXCJUZXh0YXJlYTog5b+r54Wn6aqM6K+BXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8SW5wdXQuVGV4dGFyZWEgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG4gIGl0KFwiVGV4dGFyZWE6IOaYr+WQpuiDveato+ehrumqjOivgSBsaW1pdFwiLCAoKSA9PiB7XG4gICAgcmVuZGVyKDxJbnB1dC5UZXh0YXJlYSBsaW1pdD17MTB9IHJlc2l6ZT1cImJvdGhcIiAvPilcbiAgICBleHBlY3Qoc3R1Yi5jYWxsZWRPbmNlKS50b0VxdWFsKHRydWUpXG4gIH0pXG4gIGl0KFwiVGV4dGFyZWE6IOaYr+WQpuaUr+aMgSBsaW1pdCDlip/og71cIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoPFRleHRhcmVhTW91bnRlciBjb3VudEhhbnppIC8+KVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoPFRleHRhcmVhTW91bnRlciBjb3VudEhhbnppPXtmYWxzZX0gLz4pXG4gICAgd3JhcHBlcjBcbiAgICAgIC5maW5kKFwidGV4dGFyZWFcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxMTHkuK3mlodcIiB9IH0pXG4gICAgd3JhcHBlcjFcbiAgICAgIC5maW5kKFwidGV4dGFyZWFcIilcbiAgICAgIC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIxMTHkuK3mlodcIiB9IH0pXG4gICAgZXhwZWN0KHdyYXBwZXIwLmZpbmQoXCIuYWR1aS1pbnB1dC1saW1pdFwiKS50ZXh0KCkpLnRvRXF1YWwoXCI0LzEwXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCIuYWR1aS1pbnB1dC1saW1pdFwiKS50ZXh0KCkpLnRvRXF1YWwoXCI1LzEwXCIpXG4gIH0pXG4gIGl0KFwiVGV4dGFyZWE6IOS6i+S7tumqjOivgVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25QcmVzc0VudGVyID0gamVzdC5mbigpXG4gICAgY29uc3Qgb25LZXlEb3duID0gamVzdC5mbigpXG4gICAgY29uc3Qgb25CbHVyID0gamVzdC5mbigpXG4gICAgY29uc3Qgb25Gb2N1cyA9IGplc3QuZm4oKVxuXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPElucHV0LlRleHRhcmVhXG4gICAgICAgIG9uUHJlc3NFbnRlcj17b25QcmVzc0VudGVyfVxuICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAvPlxuICAgIClcbiAgICB3cmFwcGVyLmZpbmQoXCJ0ZXh0YXJlYVwiKS5zaW11bGF0ZShcImtleWRvd25cIiwgeyBrZXk6IFwiZW50ZXJcIiwga2V5Q29kZTogMTMgfSlcbiAgICB3cmFwcGVyLmZpbmQoXCJ0ZXh0YXJlYVwiKS5zaW11bGF0ZShcImZvY3VzXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIi5hZHVpLWlucHV0LXdyYXBwZXJcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJhZHVpLWlucHV0LWZvY3VzZWRcIikpLnRvQmUodHJ1ZSlcbiAgICB3cmFwcGVyLmZpbmQoXCJ0ZXh0YXJlYVwiKS5zaW11bGF0ZShcImJsdXJcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiLmFkdWktaW5wdXQtd3JhcHBlclwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImFkdWktaW5wdXQtZm9jdXNlZFwiKSkudG9CZShmYWxzZSlcbiAgICBleHBlY3Qob25QcmVzc0VudGVyKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSlcbiAgICBleHBlY3Qob25LZXlEb3duKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSlcbiAgICBleHBlY3Qob25CbHVyKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSlcbiAgICBleHBlY3Qob25Gb2N1cykudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpXG4gIH0pXG59KVxuIl19