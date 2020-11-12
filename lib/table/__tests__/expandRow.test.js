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

var Column = _["default"].Column;
var dataSource = [{
  "key": 0,
  "one": "第一项"
}, {
  "key": 1,
  "one": "第二项"
}, {
  "key": 2,
  "one": "第三项"
}];

var ExpandMounter = function (_React$Component) {
  _inherits(ExpandMounter, _React$Component);

  var _super = _createSuper(ExpandMounter);

  function ExpandMounter() {
    var _this;

    _classCallCheck(this, ExpandMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      keys: null
    };
    return _this;
  }

  _createClass(ExpandMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var keys = this.state.keys;
      return React.createElement(_["default"], {
        dataSource: dataSource,
        expandedRowKeys: keys,
        onExpandChange: function onExpandChange(argKeys) {
          return _this2.setState({
            keys: argKeys
          });
        }
      }, React.createElement(Column, {
        title: "one",
        dataIndex: "one"
      }));
    }
  }]);

  return ExpandMounter;
}(React.Component);

describe("base", function () {
  it("快照核对", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      dataSource: dataSource,
      defaultExpandedRowKeys: [1],
      onExpandChange: function onExpandChange() {}
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否能内部驱动", function () {
    var onExpandChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: dataSource,
      onExpandChange: onExpandChange,
      defaultExpandedRowKeys: [1]
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));
    expect(wrapper.find("Table").state().expandedRowKeys).toEqual([1]);
    wrapper.find("Icon").at(0).simulate("click");
    expect(wrapper.find("Table").state().expandedRowKeys).toEqual([1, 0]);
  });
  it("是否能外部控制", function () {
    var onExpandChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: dataSource,
      onExpandChange: onExpandChange,
      expandedRowKeys: [1]
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));
    expect(wrapper0.find("Table").state().expandedRowKeys).toEqual([1]);
    wrapper0.find("Icon").at(0).simulate("click");
    expect(wrapper0.find("Table").state().expandedRowKeys).toEqual([1]);
    var wrapper1 = (0, _enzyme.mount)(React.createElement(ExpandMounter, null));
    wrapper1.find("Icon").at(0).simulate("click");
    expect(wrapper1.find("Table").state().expandedRowKeys).toEqual([0]);
    wrapper1.find("Icon").at(0).simulate("click");
    expect(wrapper1.find("Table").state().expandedRowKeys).toEqual([]);
  });
  it("是否支持 expandOnRowClick", function () {
    var onExpandChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: dataSource,
      defaultExpandedRowKeys: [1],
      onExpandChange: onExpandChange,
      expandOnRowClick: true
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));
    wrapper.find('[role="row"]').at(0).simulate("click");
    expect(onExpandChange).toHaveBeenCalledWith([1, 0]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL2V4cGFuZFJvdy50ZXN0LnRzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsImRhdGFTb3VyY2UiLCJFeHBhbmRNb3VudGVyIiwic3RhdGUiLCJrZXlzIiwiYXJnS2V5cyIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsIm9uRXhwYW5kQ2hhbmdlIiwiamVzdCIsImZuIiwiZmluZCIsImV4cGFuZGVkUm93S2V5cyIsInRvRXF1YWwiLCJhdCIsInNpbXVsYXRlIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxNLEdBQVdDLFksQ0FBWEQsTTtBQUVSLElBQU1FLFVBQVUsR0FBRyxDQUNqQjtBQUNFLFNBQU8sQ0FEVDtBQUVFLFNBQU87QUFGVCxDQURpQixFQUtqQjtBQUNFLFNBQU8sQ0FEVDtBQUVFLFNBQU87QUFGVCxDQUxpQixFQVNqQjtBQUNFLFNBQU8sQ0FEVDtBQUVFLFNBQU87QUFGVCxDQVRpQixDQUFuQjs7SUFlTUMsYTs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNOQyxNQUFBQSxJQUFJLEVBQUU7QUFEQSxLOzs7Ozs7NkJBSUM7QUFBQTs7QUFBQSxVQUNDQSxJQURELEdBQ1UsS0FBS0QsS0FEZixDQUNDQyxJQUREO0FBRVAsYUFDRSxvQkFBQyxZQUFEO0FBQ0UsUUFBQSxVQUFVLEVBQUVILFVBRGQ7QUFFRSxRQUFBLGVBQWUsRUFBRUcsSUFGbkI7QUFHRSxRQUFBLGNBQWMsRUFBRSx3QkFBQUMsT0FBTztBQUFB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LGNBQUQsQ0FBTixDQUF1QlUsb0JBQXZCLENBQTRDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBNUM7QUFDRCxHQWpCQyxDQUFGO0FBa0JELENBaEZPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJ1xuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJ1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uJ1xuXG5jb25zdCB7IENvbHVtbiB9ID0gVGFibGVcblxuY29uc3QgZGF0YVNvdXJjZSA9IFtcbiAge1xuICAgIFwia2V5XCI6IDAsXG4gICAgXCJvbmVcIjogXCLnrKzkuIDpoblcIixcbiAgfSxcbiAge1xuICAgIFwia2V5XCI6IDEsXG4gICAgXCJvbmVcIjogXCLnrKzkuozpoblcIixcbiAgfSxcbiAge1xuICAgIFwia2V5XCI6IDIsXG4gICAgXCJvbmVcIjogXCLnrKzkuInpoblcIixcbiAgfVxuXVxuXG5jbGFzcyBFeHBhbmRNb3VudGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAga2V5czogbnVsbCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGtleXMgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIGV4cGFuZGVkUm93S2V5cz17a2V5c31cbiAgICAgICAgb25FeHBhbmRDaGFuZ2U9e2FyZ0tleXMgPT4gdGhpcy5zZXRTdGF0ZSh7IGtleXM6IGFyZ0tleXMgfSl9XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiYmFzZVwiLCAoKSA9PiB7XG5cbiAgaXQoXCLlv6vnhafmoLjlr7lcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM9e1sxXX1cbiAgICAgICAgb25FeHBhbmRDaGFuZ2U9eygpID0+IHt9fVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25FeHBhbmRDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgb25FeHBhbmRDaGFuZ2U9e29uRXhwYW5kQ2hhbmdlfVxuICAgICAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPXtbMV19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLmV4cGFuZGVkUm93S2V5cykudG9FcXVhbChbMV0pXG4gICAgd3JhcHBlci5maW5kKFwiSWNvblwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuZXhwYW5kZWRSb3dLZXlzKS50b0VxdWFsKFsxLCAwXSlcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25FeHBhbmRDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIG9uRXhwYW5kQ2hhbmdlPXtvbkV4cGFuZENoYW5nZX1cbiAgICAgICAgZXhwYW5kZWRSb3dLZXlzPXtbMV19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyMC5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5leHBhbmRlZFJvd0tleXMpLnRvRXF1YWwoWzFdKVxuICAgIHdyYXBwZXIwLmZpbmQoXCJJY29uXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlcjAuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuZXhwYW5kZWRSb3dLZXlzKS50b0VxdWFsKFsxXSlcblxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoPEV4cGFuZE1vdW50ZXIgLz4pXG4gICAgd3JhcHBlcjEuZmluZChcIkljb25cIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5leHBhbmRlZFJvd0tleXMpLnRvRXF1YWwoWzBdKVxuICAgIHdyYXBwZXIxLmZpbmQoXCJJY29uXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlcjEuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuZXhwYW5kZWRSb3dLZXlzKS50b0VxdWFsKFtdKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5pSv5oyBIGV4cGFuZE9uUm93Q2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uRXhwYW5kQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM9e1sxXX1cbiAgICAgICAgb25FeHBhbmRDaGFuZ2U9e29uRXhwYW5kQ2hhbmdlfVxuICAgICAgICBleHBhbmRPblJvd0NsaWNrXG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIHdyYXBwZXIuZmluZCgnW3JvbGU9XCJyb3dcIl0nKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uRXhwYW5kQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbMSwgMF0pXG4gIH0pXG59KSJdfQ==