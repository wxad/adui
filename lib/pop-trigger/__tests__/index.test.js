"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TriggerMounter = function (_React$Component) {
  _inherits(TriggerMounter, _React$Component);

  var _super = _createSuper(TriggerMounter);

  function TriggerMounter() {
    var _this;

    _classCallCheck(this, TriggerMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      trigger: null
    };
    _this.trigger = void 0;

    _this.componentDidMount = function () {
      if (_this.trigger) {
        _this.setState({
          trigger: _this.trigger
        });
      }
    };

    return _this;
  }

  _createClass(TriggerMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(_["default"], {
        onPopupAlign: function onPopupAlign() {},
        onPopupVisibleChange: function onPopupVisibleChange() {},
        ref: function ref(node) {
          if (node) {
            _this2.trigger = node;
          }

          return null;
        },
        popup: "asd"
      }, "\u6309\u94AE");
    }
  }]);

  return TriggerMounter;
}(React.Component);

describe("PopTrigger", function () {
  it("是否正确渲染", function () {
    var wrapper0 = (0, _enzyme.render)(React.createElement(_["default"], {
      onPopupAlign: function onPopupAlign() {},
      onPopupVisibleChange: function onPopupVisibleChange() {},
      popup: "asd"
    }, "\u6309\u94AE"));
    expect(wrapper0).toMatchSnapshot();
  });
  it("是否能拿到 trigger", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(TriggerMounter, null));
    expect(_typeof(wrapper.instance().state.trigger)).toEqual("object");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9wLXRyaWdnZXIvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlRyaWdnZXJNb3VudGVyIiwic3RhdGUiLCJ0cmlnZ2VyIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsIm5vZGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyMCIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsIndyYXBwZXIiLCJpbnN0YW5jZSIsInRvRXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLE9BQU8sRUFBRTtBQURILEs7VUFJQUEsTzs7VUFFUkMsaUIsR0FBb0IsWUFBTTtBQUN4QixVQUFJLE1BQUtELE9BQVQsRUFBa0I7QUFDaEIsY0FBS0UsUUFBTCxDQUFjO0FBQ1pGLFVBQUFBLE9BQU8sRUFBRSxNQUFLQTtBQURGLFNBQWQ7QUFHRDtBQUNGLEs7Ozs7Ozs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFLG9CQUFDLFlBQUQ7QUFDRSxRQUFBLFlBQVksRUFBRSx3QkFBTSxDQUFFLENBRHhCO0FBRUUsUUFBQSxvQkFBb0IsRUFBRSxnQ0FBTSxDQUFFLENBRmhDO0FBR0UsUUFBQSxHQUFHLEVBQUUsYUFBQUcsSUFBSSxFQUFJO0FBQ1gsY0FBSUEsSUFBSixFQUFVO0FBQ1IsWUFBQSxNQUFJLENBQUNILE9BQUwsR0FBZUcsSUFBZjtBQUNEOztBQUNELGlCQUFPLElBQVA7QUFDRCxTQVJIO0FBU0UsUUFBQSxLQUFLLEVBQUM7QUFUUix3QkFERjtBQWVEOzs7O0VBL0IwQkMsS0FBSyxDQUFDQyxTOztBQWtDbkNDLFFBQVEsQ0FBQyxZQUFELEVBQWUsWUFBTTtBQUMzQkMsRUFBQUEsRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ2pCLFFBQU1DLFFBQVEsR0FBRyxvQkFDZixvQkFBQyxZQUFEO0FBQ0UsTUFBQSxZQUFZLEVBQUUsd0JBQU0sQ0FBRSxDQUR4QjtBQUVFLE1BQUEsb0JBQW9CLEVBQUUsZ0NBQU0sQ0FBRSxDQUZoQztBQUdFLE1BQUEsS0FBSyxFQUFDO0FBSFIsc0JBRGUsQ0FBakI7QUFTQUMsSUFBQUEsTUFBTSxDQUFDRCxRQUFELENBQU4sQ0FBaUJFLGVBQWpCO0FBQ0QsR0FYQyxDQUFGO0FBYUFILEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVBQWtCLFlBQU07QUFDeEIsUUFBTUksT0FBTyxHQUFHLG1CQUFNLG9CQUFDLGNBQUQsT0FBTixDQUFoQjtBQUNBRixJQUFBQSxNQUFNLFNBQVFFLE9BQU8sQ0FBQ0MsUUFBUixHQUFtQmIsS0FBbkIsQ0FBeUJDLE9BQWpDLEVBQU4sQ0FBZ0RhLE9BQWhELENBQXdELFFBQXhEO0FBQ0QsR0FIQyxDQUFGO0FBSUQsQ0FsQk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVuZGVyLCBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFBvcFRyaWdnZXIgZnJvbSBcIi4uXCJcblxuY2xhc3MgVHJpZ2dlck1vdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB0cmlnZ2VyOiBudWxsLFxuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyOiBhbnlcblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50cmlnZ2VyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BUcmlnZ2VyXG4gICAgICAgIG9uUG9wdXBBbGlnbj17KCkgPT4ge319XG4gICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlPXsoKSA9PiB7fX1cbiAgICAgICAgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyID0gbm9kZVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9fVxuICAgICAgICBwb3B1cD1cImFzZFwiXG4gICAgICA+XG4gICAgICAgIOaMiemSrlxuICAgICAgPC9Qb3BUcmlnZ2VyPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcIlBvcFRyaWdnZXJcIiwgKCkgPT4ge1xuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlcjAgPSByZW5kZXIoXG4gICAgICA8UG9wVHJpZ2dlclxuICAgICAgICBvblBvcHVwQWxpZ249eygpID0+IHt9fVxuICAgICAgICBvblBvcHVwVmlzaWJsZUNoYW5nZT17KCkgPT4ge319XG4gICAgICAgIHBvcHVwPVwiYXNkXCJcbiAgICAgID5cbiAgICAgICAg5oyJ6ZKuXG4gICAgICA8L1BvcFRyaWdnZXI+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyMCkudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveaLv+WIsCB0cmlnZ2VyXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFRyaWdnZXJNb3VudGVyIC8+KVxuICAgIGV4cGVjdCh0eXBlb2Ygd3JhcHBlci5pbnN0YW5jZSgpLnN0YXRlLnRyaWdnZXIpLnRvRXF1YWwoXCJvYmplY3RcIilcbiAgfSlcbn0pXG4iXX0=