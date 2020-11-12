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

var Column = _["default"].Column;

var SortMounter = function (_React$Component) {
  _inherits(SortMounter, _React$Component);

  var _super = _createSuper(SortMounter);

  function SortMounter() {
    var _this;

    _classCallCheck(this, SortMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      sortOrder: undefined
    };
    return _this;
  }

  _createClass(SortMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var sortOrder = this.state.sortOrder;
      return React.createElement(_["default"], {
        dataSource: [{
          order: "order"
        }]
      }, React.createElement(Column, {
        title: "\u6392\u5E8F",
        dataIndex: "order",
        sortOrder: sortOrder,
        onSort: function onSort(argSortOrder) {
          return _this2.setState({
            sortOrder: argSortOrder
          });
        }
      }));
    }
  }]);

  return SortMounter;
}(React.Component);

describe("排序功能", function () {
  it("是否能够内部驱动", function () {
    var onSort = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: [{
        order: "order"
      }]
    }, React.createElement(Column, {
      title: "\u6392\u5E8F",
      dataIndex: "order",
      onSort: onSort
    })));
    expect(wrapper).toMatchSnapshot();
    var th = wrapper.find("[role='columnheader']").at(0);
    th.simulate("click");
    expect(onSort).toHaveBeenCalledWith("asc");
    th.simulate("click");
    expect(onSort).toHaveBeenCalledWith("desc");
    th.simulate("click");
    expect(onSort).toHaveBeenCalledWith("");
  });
  it("是否能够外部控制", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(SortMounter, null));
    var th = wrapper.find("[role='columnheader']").at(0);
    th.simulate("click");
    expect(wrapper.find(".adui-table-sort").at(0).props()["data-sort"]).toBe("asc");
    th.simulate("click");
    expect(wrapper.find(".adui-table-sort").at(0).props()["data-sort"]).toBe("desc");
    th.simulate("click");
    expect(wrapper.find(".adui-table-sort").at(0).props()["data-sort"]).toBe("");
  });
  it("是否支持键盘操作", function () {
    var onSort = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: [{
        order: "order"
      }]
    }, React.createElement(Column, {
      title: "\u6392\u5E8F",
      dataIndex: "order",
      onSort: onSort
    })));
    wrapper.find("[role='columnheader']").at(0).simulate("keyPress", {
      key: "Enter",
      keyCode: 13
    });
    expect(onSort).toHaveBeenCalled();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL3NvcnQudGVzdC50c3giXSwibmFtZXMiOlsiQ29sdW1uIiwiVGFibGUiLCJTb3J0TW91bnRlciIsInN0YXRlIiwic29ydE9yZGVyIiwidW5kZWZpbmVkIiwib3JkZXIiLCJhcmdTb3J0T3JkZXIiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJpdCIsIm9uU29ydCIsImplc3QiLCJmbiIsIndyYXBwZXIiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJ0aCIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJwcm9wcyIsInRvQmUiLCJrZXkiLCJrZXlDb2RlIiwidG9IYXZlQmVlbkNhbGxlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsTSxHQUFXQyxZLENBQVhELE07O0lBRUZFLFc7Ozs7Ozs7Ozs7Ozs7OztVQUNKQyxLLEdBQVE7QUFDTkMsTUFBQUEsU0FBUyxFQUFFQztBQURMLEs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLFVBQ0NELFNBREQsR0FDZSxLQUFLRCxLQURwQixDQUNDQyxTQUREO0FBRVAsYUFDRSxvQkFBQyxZQUFEO0FBQ0UsUUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUNFRSxVQUFBQSxLQUFLLEVBQUU7QUFEVCxTQURVO0FBRGQsU0FPRSxvQkFBQyxNQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUMsY0FEUjtBQUVFLFFBQUEsU0FBUyxFQUFDLE9BRlo7QUFHRSxRQUFBLFNBQVMsRUFBRUYsU0FIYjtBQUlFLFFBQUEsTUFBTSxFQUFFLGdCQUFBRyxZQUFZO0FBQUEsaUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUosWUFBQUEsU0FBUyxFQUFFRztBQUFiLFdBQWQsQ0FBSjtBQUFBO0FB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R0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsUUFISCxDQUdZLFVBSFosRUFHd0I7QUFBRUksTUFBQUEsR0FBRyxFQUFFLE9BQVA7QUFBZ0JDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QixLQUh4QjtBQUlBVixJQUFBQSxNQUFNLENBQUNKLE1BQUQsQ0FBTixDQUFlZSxnQkFBZjtBQUNELEdBbEJDLENBQUY7QUFtQkQsQ0FuRk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLlwiXG5cbmNvbnN0IHsgQ29sdW1uIH0gPSBUYWJsZVxuXG5jbGFzcyBTb3J0TW91bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNvcnRPcmRlcjogdW5kZWZpbmVkLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc29ydE9yZGVyIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3JkZXI6IFwib3JkZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCLmjpLluo9cIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9yZGVyXCJcbiAgICAgICAgICBzb3J0T3JkZXI9e3NvcnRPcmRlcn1cbiAgICAgICAgICBvblNvcnQ9e2FyZ1NvcnRPcmRlciA9PiB0aGlzLnNldFN0YXRlKHsgc29ydE9yZGVyOiBhcmdTb3J0T3JkZXIgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcIuaOkuW6j+WKn+iDvVwiLCAoKSA9PiB7XG4gIGl0KFwi5piv5ZCm6IO95aSf5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCBvblNvcnQgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9yZGVyOiBcIm9yZGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtbiB0aXRsZT1cIuaOkuW6j1wiIGRhdGFJbmRleD1cIm9yZGVyXCIgb25Tb3J0PXtvblNvcnR9IC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgICBjb25zdCB0aCA9IHdyYXBwZXIuZmluZChcIltyb2xlPSdjb2x1bW5oZWFkZXInXVwiKS5hdCgwKVxuICAgIHRoLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25Tb3J0KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChcImFzY1wiKVxuICAgIHRoLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25Tb3J0KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChcImRlc2NcIilcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uU29ydCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoXCJcIilcbiAgfSlcblxuICAvLyBpdChcIm9uU29ydCBQcm9wIOaYr+WQpuiDvemqjOivgSBmdW5jdGlvblwiLCAoKSA9PiB7XG4gIC8vICAgY29uc3Qgc3R1YiA9IHNpbm9uLnN0dWIoY29uc29sZSwgJ2Vycm9yJylcbiAgLy8gICBjb25zdCB3cmFwcGVyID0gcmVuZGVyKFxuICAvLyAgICAgPFRhYmxlPlxuICAvLyAgICAgICA8VGFibGUuQ29sdW1uXG4gIC8vICAgICAgICAgdGl0bGU9XCJ0aXRsZVwiXG4gIC8vICAgICAgICAgb25Tb3J0PVwic3RyaW5nXCJcbiAgLy8gICAgICAgLz5cbiAgLy8gICAgIDwvVGFibGU+XG4gIC8vICAgKVxuICAvLyAgIGV4cGVjdChzdHViLmNhbGxDb3VudCkudG9CZSgxKVxuICAvLyAgIHN0dWIucmVzdG9yZSgpXG4gIC8vIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lpJ/lpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8U29ydE1vdW50ZXIgLz4pXG4gICAgY29uc3QgdGggPSB3cmFwcGVyLmZpbmQoXCJbcm9sZT0nY29sdW1uaGVhZGVyJ11cIikuYXQoMClcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLXRhYmxlLXNvcnRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS1zb3J0XCJdXG4gICAgKS50b0JlKFwiYXNjXCIpXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS10YWJsZS1zb3J0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtc29ydFwiXVxuICAgICkudG9CZShcImRlc2NcIilcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIi5hZHVpLXRhYmxlLXNvcnRcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS1zb3J0XCJdXG4gICAgKS50b0JlKFwiXCIpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmlK/mjIHplK7nm5jmk43kvZxcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uU29ydCA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3JkZXI6IFwib3JkZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uIHRpdGxlPVwi5o6S5bqPXCIgZGF0YUluZGV4PVwib3JkZXJcIiBvblNvcnQ9e29uU29ydH0gLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiW3JvbGU9J2NvbHVtbmhlYWRlciddXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImtleVByZXNzXCIsIHsga2V5OiBcIkVudGVyXCIsIGtleUNvZGU6IDEzIH0pXG4gICAgZXhwZWN0KG9uU29ydCkudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG59KVxuIl19