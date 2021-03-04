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

var RadioMounter = function (_React$Component) {
  _inherits(RadioMounter, _React$Component);

  var _super = _createSuper(RadioMounter);

  function RadioMounter() {
    var _this;

    _classCallCheck(this, RadioMounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      keys: null
    };
    return _this;
  }

  _createClass(RadioMounter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var keys = this.state.keys;
      return React.createElement(_["default"], {
        dataSource: dataSource,
        selectedRowKeys: keys,
        selectMultiple: false,
        onSelectChange: function onSelectChange(args) {
          return _this2.setState({
            keys: args
          });
        }
      }, React.createElement(Column, {
        title: "one",
        dataIndex: "one"
      }));
    }
  }]);

  return RadioMounter;
}(React.Component);

describe("disabled 验证", function () {
  it("单选", function () {
    var onSelectChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: dataSource,
      onSelectChange: onSelectChange,
      defaultSelectedRowKeys: [1],
      selectMultiple: false,
      getSelectProps: function getSelectProps(row) {
        if (row) {
          if (row.key === 0 || row.key === 1) {
            return {
              disabled: true
            };
          }
        }

        return {};
      }
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));
    wrapper.find('.adui-radio-indicator').at(0).simulate("click");
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1]);
    wrapper.find('.adui-radio-indicator').at(1).simulate("click");
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1]);
    wrapper.find('.adui-radio-indicator').at(2).simulate("click");
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([2]);
  });
  it("多选", function () {
    var onSelectChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: dataSource,
      onSelectChange: onSelectChange,
      defaultSelectedRowKeys: [1, "多余项"],
      selectMultiple: true,
      getSelectProps: function getSelectProps(row) {
        if (row) {
          if (row.key === 0 || row.key === 1) {
            return {
              disabled: true
            };
          }
        }

        return {};
      }
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));
    wrapper.find('.adui-checkbox-indicator').at(0).simulate("click");
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1, "多余项", 2]);
    wrapper.find('.adui-checkbox-indicator').at(0).simulate("click");
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1, "多余项"]);
    wrapper.find('.adui-checkbox-indicator').at(3).simulate("click");
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1, "多余项", 2]);
    wrapper.find('.adui-checkbox-indicator').at(3).simulate("click");
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1, "多余项"]);
  });
});
describe("base", function () {
  it("快照核对", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      dataSource: dataSource,
      defaultSelectedRowKeys: [1],
      selectMultiple: false,
      onSelectChange: function onSelectChange() {}
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));

    expect(wrapper).toMatchSnapshot();
  });
  it("是否能内部驱动", function () {
    var onSelectChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: dataSource,
      onSelectChange: onSelectChange,
      defaultSelectedRowKeys: [1],
      selectMultiple: false
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([1]);
    wrapper.find('.adui-radio-indicator').at(0).simulate("click");
    expect(wrapper.find("Table").state().selectedRowKeys).toEqual([0]);
  });
  it("是否能外部控制", function () {
    var onSelectChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: dataSource,
      onSelectChange: onSelectChange,
      selectedRowKeys: [1],
      selectMultiple: false
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));
    expect(wrapper0.find("Table").state().selectedRowKeys).toEqual([1]);
    wrapper0.find('.adui-radio-indicator').at(0).simulate("click");
    expect(wrapper0.find("Table").state().selectedRowKeys).toEqual([1]);
    var wrapper1 = (0, _enzyme.mount)(React.createElement(RadioMounter, null));
    expect(wrapper1.find("Table").state().selectedRowKeys).toEqual([]);
    wrapper1.find('.adui-radio-indicator').at(0).simulate("click");
    expect(wrapper1.find("Table").state().selectedRowKeys).toEqual([0]);
  });
  it("是否支持 selectOnRowClick", function () {
    var onSelectChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(React.createElement(_["default"], {
      dataSource: dataSource,
      defaultSelectedRowKeys: [1],
      onSelectChange: onSelectChange,
      selectOnRowClick: true
    }, React.createElement(Column, {
      title: "one",
      dataIndex: "one"
    })));
    wrapper.find('[role="row"]').at(0).simulate("click");
    expect(onSelectChange).toHaveBeenCalledWith([1, 0]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL3NlbGVjdFJvdy50ZXN0LnRzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsImRhdGFTb3VyY2UiLCJSYWRpb01vdW50ZXIiLCJzdGF0ZSIsImtleXMiLCJhcmdzIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlc2NyaWJlIiwiaXQiLCJvblNlbGVjdENoYW5nZSIsImplc3QiLCJmbiIsIndyYXBwZXIiLCJyb3ciLCJrZXkiLCJkaXNhYmxlZCIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwiZXhwZWN0Iiwic2VsZWN0ZWRSb3dLZXlzIiwidG9FcXVhbCIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsInRvTWF0Y2hTbmFwc2hvdCIsIndyYXBwZXIwIiwid3JhcHBlcjEiLCJ0b0hhdmVCZWVuQ2FsbGVkV2l0aCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLE0sR0FBV0MsWSxDQUFYRCxNO0FBRVIsSUFBTUUsVUFBVSxHQUFHLENBQ2pCO0FBQ0UsU0FBTyxDQURUO0FBRUUsU0FBTztBQUZULENBRGlCLEVBS2pCO0FBQ0UsU0FBTyxDQURUO0FBRUUsU0FBTztBQUZULENBTGlCLEVBU2pCO0FBQ0UsU0FBTyxDQURUO0FBRUUsU0FBTztBQUZULENBVGlCLENBQW5COztJQWVNQyxZOzs7Ozs7Ozs7Ozs7Ozs7VUFDSkMsSyxHQUFRO0FBQ05DLE1BQUFBLElBQUksRUFBRTtBQURBLEs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLFVBQ0NBLElBREQsR0FDVSxLQUFLRCxLQURmLENBQ0NDLElBREQ7QUFFUCxhQUNFLG9CQUFDLFlBQUQ7QUFDRSxRQUFBLFVBQVUsRUFBRUgsVUFEZDtBQUVFLFFBQUEsZUFBZSxFQUFFRyxJQUZuQjtBQUdFLFFBQUEsY0FBYyxFQUFFLEtBSGxCO0FBSUUsUUFBQSxjQUFjLEVB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QUFJLENBQUosQ0FBNUM7QUFDRCxHQWpCQyxDQUFGO0FBa0JELENBbEZPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJ1xuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJ1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uJ1xuXG5jb25zdCB7IENvbHVtbiB9ID0gVGFibGVcblxuY29uc3QgZGF0YVNvdXJjZSA9IFtcbiAge1xuICAgIFwia2V5XCI6IDAsXG4gICAgXCJvbmVcIjogXCLnrKzkuIDpoblcIixcbiAgfSxcbiAge1xuICAgIFwia2V5XCI6IDEsXG4gICAgXCJvbmVcIjogXCLnrKzkuozpoblcIixcbiAgfSxcbiAge1xuICAgIFwia2V5XCI6IDIsXG4gICAgXCJvbmVcIjogXCLnrKzkuInpoblcIixcbiAgfVxuXVxuXG5jbGFzcyBSYWRpb01vdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBrZXlzOiBudWxsLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsga2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzPXtrZXlzfVxuICAgICAgICBzZWxlY3RNdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXthcmdzID0+IHRoaXMuc2V0U3RhdGUoeyBrZXlzOiBhcmdzfSl9XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICB9XG59XG5cbmRlc2NyaWJlKFwiZGlzYWJsZWQg6aqM6K+BXCIsICgpID0+IHtcbiAgaXQoXCLljZXpgIlcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uU2VsZWN0Q2hhbmdlID0gamVzdC5mbigpXG4gICAgLyoqXG4gICAgICog5qih5ouf5YmN5Lik6aG556aB5q2i77yM5YW25Lit5LiA5Liq5Li65pyq6YCJ5Lit77yM5Y+m5LiA5Liq5Li65bey6YCJ5LitXG4gICAgICovXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXtvblNlbGVjdENoYW5nZX1cbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cz17WzFdfVxuICAgICAgICBzZWxlY3RNdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgIGdldFNlbGVjdFByb3BzPXsocm93KSA9PiB7XG4gICAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgICAgaWYgKHJvdy5rZXkgPT09IDAgfHwgcm93LmtleSA9PT0gMSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLXJhZGlvLWluZGljYXRvcicpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzFdKVxuICAgIHdyYXBwZXIuZmluZCgnLmFkdWktcmFkaW8taW5kaWNhdG9yJykuYXQoMSkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMV0pXG4gICAgd3JhcHBlci5maW5kKCcuYWR1aS1yYWRpby1pbmRpY2F0b3InKS5hdCgyKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsyXSlcbiAgfSlcblxuICBpdChcIuWkmumAiVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICAvKipcbiAgICAgKiDmqKHmi5/liY3kuKTpobnnpoHmraLvvIzlhbbkuK3kuIDkuKrkuLrmnKrpgInkuK3vvIzlj6bkuIDkuKrkuLrlt7LpgInkuK1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzPXtbMSwgXCLlpJrkvZnpoblcIl19XG4gICAgICAgIHNlbGVjdE11bHRpcGxlXG4gICAgICAgIGdldFNlbGVjdFByb3BzPXsocm93KSA9PiB7XG4gICAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgICAgaWYgKHJvdy5rZXkgPT09IDAgfHwgcm93LmtleSA9PT0gMSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICAvLyDlpJrpgInml7bmib7liLDnmoTnrKzkuIDkuKrlhYPntKDmmK/lhajpgInmoYZcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLWNoZWNrYm94LWluZGljYXRvcicpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzEsIFwi5aSa5L2Z6aG5XCIsIDJdKVxuICAgIHdyYXBwZXIuZmluZCgnLmFkdWktY2hlY2tib3gtaW5kaWNhdG9yJykuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMSwgXCLlpJrkvZnpoblcIl0pXG4gICAgd3JhcHBlci5maW5kKCcuYWR1aS1jaGVja2JveC1pbmRpY2F0b3InKS5hdCgzKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxLCBcIuWkmuS9memhuVwiLCAyXSlcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLWNoZWNrYm94LWluZGljYXRvcicpLmF0KDMpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzEsIFwi5aSa5L2Z6aG5XCJdKVxuICB9KVxufSlcblxuZGVzY3JpYmUoXCJiYXNlXCIsICgpID0+IHtcblxuICBpdChcIuW/q+eFp+aguOWvuVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cz17WzFdfVxuICAgICAgICBzZWxlY3RNdWx0aXBsZT17ZmFsc2V9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXsoKSA9PiB7fX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uU2VsZWN0Q2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXtvblNlbGVjdENoYW5nZX1cbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cz17WzFdfVxuICAgICAgICBzZWxlY3RNdWx0aXBsZT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMV0pXG4gICAgd3JhcHBlci5maW5kKCcuYWR1aS1yYWRpby1pbmRpY2F0b3InKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFswXSlcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXtvblNlbGVjdENoYW5nZX1cbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIwLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMV0pXG4gICAgd3JhcHBlcjAuZmluZCgnLmFkdWktcmFkaW8taW5kaWNhdG9yJykuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyMC5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzFdKVxuXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudCg8UmFkaW9Nb3VudGVyIC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoW10pXG4gICAgd3JhcHBlcjEuZmluZCgnLmFkdWktcmFkaW8taW5kaWNhdG9yJykuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzBdKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm5pSv5oyBIHNlbGVjdE9uUm93Q2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uU2VsZWN0Q2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM9e1sxXX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICBzZWxlY3RPblJvd0NsaWNrXG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIHdyYXBwZXIuZmluZCgnW3JvbGU9XCJyb3dcIl0nKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uU2VsZWN0Q2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbMSwgMF0pXG4gIH0pXG59KSJdfQ==