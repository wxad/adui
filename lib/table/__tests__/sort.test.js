"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL3NvcnQudGVzdC50c3giXSwibmFtZXMiOlsiQ29sdW1uIiwiVGFibGUiLCJTb3J0TW91bnRlciIsInN0YXRlIiwic29ydE9yZGVyIiwidW5kZWZpbmVkIiwib3JkZXIiLCJhcmdTb3J0T3JkZXIiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJpdCIsIm9uU29ydCIsImplc3QiLCJmbiIsIndyYXBwZXIiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJ0aCIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJwcm9wcyIsInRvQmUiLCJrZXkiLCJrZXlDb2RlIiwidG9IYXZlQmVlbkNhbGxlZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLE0sR0FBV0MsWSxDQUFYRCxNOztJQUVGRSxXOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLFNBQVMsRUFBRUM7QUFETCxLOzs7Ozs7NkJBSUM7QUFBQTs7QUFBQSxVQUNDRCxTQURELEdBQ2UsS0FBS0QsS0FEcEIsQ0FDQ0MsU0FERDtBQUVQLGFBQ0Usb0JBQUMsWUFBRDtBQUNFLFFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRUUsVUFBQUEsS0FBSyxFQUFFO0FBRFQsU0FEVTtBQURkLFNBT0Usb0JBQUMsTUFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLGNBRFI7QUFFRSxRQUFBLFNBQVMsRUFBQyxPQUZaO0FBR0UsUUFBQSxTQUFTLEVBQUVGLFNBSGI7QUFJRSxRQUFBLE1BQU0sRUFBRSxnQkFBQUcsWUFBWTtBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVKLFlBQUFBLFNBQVMsRUFBRUc7QUFBYixXQUFkLENBQUo7QUFBQTtBQUp0QixRQVBGLENBREY7QUFnQkQ7Ozs7RUF2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SEgsQ0FHWSxVQUhaLEVBR3dCO0FBQUVJLE1BQUFBLEdBQUcsRUFBRSxPQUFQO0FBQWdCQyxNQUFBQSxPQUFPLEVBQUU7QUFBekIsS0FIeEI7QUFJQVYsSUFBQUEsTUFBTSxDQUFDSixNQUFELENBQU4sQ0FBZWUsZ0JBQWY7QUFDRCxHQWxCQyxDQUFGO0FBbUJELENBbkZPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi5cIlxuXG5jb25zdCB7IENvbHVtbiB9ID0gVGFibGVcblxuY2xhc3MgU29ydE1vdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzb3J0T3JkZXI6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNvcnRPcmRlciB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9yZGVyOiBcIm9yZGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwi5o6S5bqPXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvcmRlclwiXG4gICAgICAgICAgc29ydE9yZGVyPXtzb3J0T3JkZXJ9XG4gICAgICAgICAgb25Tb3J0PXthcmdTb3J0T3JkZXIgPT4gdGhpcy5zZXRTdGF0ZSh7IHNvcnRPcmRlcjogYXJnU29ydE9yZGVyIH0pfVxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCLmjpLluo/lip/og71cIiwgKCkgPT4ge1xuICBpdChcIuaYr+WQpuiDveWkn+WGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25Tb3J0ID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcmRlcjogXCJvcmRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW4gdGl0bGU9XCLmjpLluo9cIiBkYXRhSW5kZXg9XCJvcmRlclwiIG9uU29ydD17b25Tb3J0fSAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gICAgY29uc3QgdGggPSB3cmFwcGVyLmZpbmQoXCJbcm9sZT0nY29sdW1uaGVhZGVyJ11cIikuYXQoMClcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uU29ydCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoXCJhc2NcIilcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uU29ydCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoXCJkZXNjXCIpXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvblNvcnQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiXCIpXG4gIH0pXG5cbiAgLy8gaXQoXCJvblNvcnQgUHJvcCDmmK/lkKbog73pqozor4EgZnVuY3Rpb25cIiwgKCkgPT4ge1xuICAvLyAgIGNvbnN0IHN0dWIgPSBzaW5vbi5zdHViKGNvbnNvbGUsICdlcnJvcicpXG4gIC8vICAgY29uc3Qgd3JhcHBlciA9IHJlbmRlcihcbiAgLy8gICAgIDxUYWJsZT5cbiAgLy8gICAgICAgPFRhYmxlLkNvbHVtblxuICAvLyAgICAgICAgIHRpdGxlPVwidGl0bGVcIlxuICAvLyAgICAgICAgIG9uU29ydD1cInN0cmluZ1wiXG4gIC8vICAgICAgIC8+XG4gIC8vICAgICA8L1RhYmxlPlxuICAvLyAgIClcbiAgLy8gICBleHBlY3Qoc3R1Yi5jYWxsQ291bnQpLnRvQmUoMSlcbiAgLy8gICBzdHViLnJlc3RvcmUoKVxuICAvLyB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSf5aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFNvcnRNb3VudGVyIC8+KVxuICAgIGNvbnN0IHRoID0gd3JhcHBlci5maW5kKFwiW3JvbGU9J2NvbHVtbmhlYWRlciddXCIpLmF0KDApXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS10YWJsZS1zb3J0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtc29ydFwiXVxuICAgICkudG9CZShcImFzY1wiKVxuICAgIHRoLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiLmFkdWktdGFibGUtc29ydFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLXNvcnRcIl1cbiAgICApLnRvQmUoXCJkZXNjXCIpXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCIuYWR1aS10YWJsZS1zb3J0XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtc29ydFwiXVxuICAgICkudG9CZShcIlwiKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5pSv5oyB6ZSu55uY5pON5L2cXCIsICgpID0+IHtcbiAgICBjb25zdCBvblNvcnQgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9yZGVyOiBcIm9yZGVyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtbiB0aXRsZT1cIuaOkuW6j1wiIGRhdGFJbmRleD1cIm9yZGVyXCIgb25Tb3J0PXtvblNvcnR9IC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcIltyb2xlPSdjb2x1bW5oZWFkZXInXVwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJrZXlQcmVzc1wiLCB7IGtleTogXCJFbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxuICAgIGV4cGVjdChvblNvcnQpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICB9KVxufSlcbiJdfQ==