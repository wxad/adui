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
    expect(onSort).toHaveBeenCalledWith("desc");
    th.simulate("click");
    expect(onSort).toHaveBeenCalledWith("asc");
    th.simulate("click");
    expect(onSort).toHaveBeenCalledWith("");
  });
  it("是否能够外部控制", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(SortMounter, null));
    var th = wrapper.find("[role='columnheader']").at(0);
    th.simulate("click");
    expect(wrapper.find(".adui-table-sort").at(0).props()["data-sort"]).toBe("desc");
    th.simulate("click");
    expect(wrapper.find(".adui-table-sort").at(0).props()["data-sort"]).toBe("asc");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL3NvcnQudGVzdC50c3giXSwibmFtZXMiOlsiQ29sdW1uIiwiVGFibGUiLCJTb3J0TW91bnRlciIsInN0YXRlIiwic29ydE9yZGVyIiwidW5kZWZpbmVkIiwib3JkZXIiLCJhcmdTb3J0T3JkZXIiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJpdCIsIm9uU29ydCIsImplc3QiLCJmbiIsIndyYXBwZXIiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJ0aCIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJwcm9wcyIsInRvQmUiLCJrZXkiLCJrZXlDb2RlIiwidG9IYXZlQmVlbkNhbGxlZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLE0sR0FBV0MsWSxDQUFYRCxNOztJQUVGRSxXOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLFNBQVMsRUFBRUM7QUFETCxLOzs7Ozs7NkJBSUM7QUFBQTs7QUFBQSxVQUNDRCxTQURELEdBQ2UsS0FBS0QsS0FEcEIsQ0FDQ0MsU0FERDtBQUVQLGFBQ0Usb0JBQUMsWUFBRDtBQUNFLFFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRUUsVUFBQUEsS0FBSyxFQUFFO0FBRFQsU0FEVTtBQURkLFNBT0Usb0JBQUMsTUFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLGNBRFI7QUFFRSxRQUFBLFNBQVMsRUFBQyxPQUZaO0FBR0UsUUFBQSxTQUFTLEVBQUVGLFNBSGI7QUFJRSxRQUFBLE1BQU0sRUFBRSxnQkFBQ0csWUFBRDtBQUFBLGlCQUFrQixNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFSixZQUFBQSxTQUFTLEVBQUVHO0FBQWIsV0FBZCxDQUFsQjtBQUFBO0FBSlYsUUFQRixDQURGO0FBZ0JEOzs7O0VB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UixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHQyxRQUhILENBR1ksVUFIWixFQUd3QjtBQUFFSSxNQUFBQSxHQUFHLEVBQUUsT0FBUDtBQUFnQkMsTUFBQUEsT0FBTyxFQUFFO0FBQXpCLEtBSHhCO0FBSUFWLElBQUFBLE1BQU0sQ0FBQ0osTUFBRCxDQUFOLENBQWVlLGdCQUFmO0FBQ0QsR0FsQkMsQ0FBRjtBQW1CRCxDQXhFTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uXCJcblxuY29uc3QgeyBDb2x1bW4gfSA9IFRhYmxlXG5cbmNsYXNzIFNvcnRNb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc29ydE9yZGVyOiB1bmRlZmluZWQsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzb3J0T3JkZXIgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcmRlcjogXCJvcmRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIuaOkuW6j1wiXG4gICAgICAgICAgZGF0YUluZGV4PVwib3JkZXJcIlxuICAgICAgICAgIHNvcnRPcmRlcj17c29ydE9yZGVyfVxuICAgICAgICAgIG9uU29ydD17KGFyZ1NvcnRPcmRlcikgPT4gdGhpcy5zZXRTdGF0ZSh7IHNvcnRPcmRlcjogYXJnU29ydE9yZGVyIH0pfVxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCLmjpLluo/lip/og71cIiwgKCkgPT4ge1xuICBpdChcIuaYr+WQpuiDveWkn+WGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25Tb3J0ID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcmRlcjogXCJvcmRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW4gdGl0bGU9XCLmjpLluo9cIiBkYXRhSW5kZXg9XCJvcmRlclwiIG9uU29ydD17b25Tb3J0fSAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gICAgY29uc3QgdGggPSB3cmFwcGVyLmZpbmQoXCJbcm9sZT0nY29sdW1uaGVhZGVyJ11cIikuYXQoMClcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uU29ydCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoXCJkZXNjXCIpXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvblNvcnQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiYXNjXCIpXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvblNvcnQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFwiXCIpXG4gIH0pXG5cbiAgLy8gaXQoXCJvblNvcnQgUHJvcCDmmK/lkKbog73pqozor4EgZnVuY3Rpb25cIiwgKCkgPT4ge1xuICAvLyAgIGNvbnN0IHN0dWIgPSBzaW5vbi5zdHViKGNvbnNvbGUsICdlcnJvcicpXG4gIC8vICAgY29uc3Qgd3JhcHBlciA9IHJlbmRlcihcbiAgLy8gICAgIDxUYWJsZT5cbiAgLy8gICAgICAgPFRhYmxlLkNvbHVtblxuICAvLyAgICAgICAgIHRpdGxlPVwidGl0bGVcIlxuICAvLyAgICAgICAgIG9uU29ydD1cInN0cmluZ1wiXG4gIC8vICAgICAgIC8+XG4gIC8vICAgICA8L1RhYmxlPlxuICAvLyAgIClcbiAgLy8gICBleHBlY3Qoc3R1Yi5jYWxsQ291bnQpLnRvQmUoMSlcbiAgLy8gICBzdHViLnJlc3RvcmUoKVxuICAvLyB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSf5aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFNvcnRNb3VudGVyIC8+KVxuICAgIGNvbnN0IHRoID0gd3JhcHBlci5maW5kKFwiW3JvbGU9J2NvbHVtbmhlYWRlciddXCIpLmF0KDApXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCIuYWR1aS10YWJsZS1zb3J0XCIpLmF0KDApLnByb3BzKClbXCJkYXRhLXNvcnRcIl0pLnRvQmUoXG4gICAgICBcImRlc2NcIlxuICAgIClcbiAgICB0aC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIi5hZHVpLXRhYmxlLXNvcnRcIikuYXQoMCkucHJvcHMoKVtcImRhdGEtc29ydFwiXSkudG9CZShcbiAgICAgIFwiYXNjXCJcbiAgICApXG4gICAgdGguc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCIuYWR1aS10YWJsZS1zb3J0XCIpLmF0KDApLnByb3BzKClbXCJkYXRhLXNvcnRcIl0pLnRvQmUoXCJcIilcbiAgfSlcblxuICBpdChcIuaYr+WQpuaUr+aMgemUruebmOaTjeS9nFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25Tb3J0ID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcmRlcjogXCJvcmRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW4gdGl0bGU9XCLmjpLluo9cIiBkYXRhSW5kZXg9XCJvcmRlclwiIG9uU29ydD17b25Tb3J0fSAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJbcm9sZT0nY29sdW1uaGVhZGVyJ11cIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwia2V5UHJlc3NcIiwgeyBrZXk6IFwiRW50ZXJcIiwga2V5Q29kZTogMTMgfSlcbiAgICBleHBlY3Qob25Tb3J0KS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcbn0pXG4iXX0=