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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL3NlbGVjdFJvdy50ZXN0LnRzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsImRhdGFTb3VyY2UiLCJSYWRpb01vdW50ZXIiLCJzdGF0ZSIsImtleXMiLCJhcmdzIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlc2NyaWJlIiwiaXQiLCJvblNlbGVjdENoYW5nZSIsImplc3QiLCJmbiIsIndyYXBwZXIiLCJyb3ciLCJrZXkiLCJkaXNhYmxlZCIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwiZXhwZWN0Iiwic2VsZWN0ZWRSb3dLZXlzIiwidG9FcXVhbCIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsInRvTWF0Y2hTbmFwc2hvdCIsIndyYXBwZXIwIiwid3JhcHBlcjEiLCJ0b0hhdmVCZWVuQ2FsbGVkV2l0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsTSxHQUFXQyxZLENBQVhELE07QUFFUixJQUFNRSxVQUFVLEdBQUcsQ0FDakI7QUFDRSxTQUFPLENBRFQ7QUFFRSxTQUFPO0FBRlQsQ0FEaUIsRUFLakI7QUFDRSxTQUFPLENBRFQ7QUFFRSxTQUFPO0FBRlQsQ0FMaUIsRUFTakI7QUFDRSxTQUFPLENBRFQ7QUFFRSxTQUFPO0FBRlQsQ0FUaUIsQ0FBbkI7O0lBZU1DLFk7Ozs7Ozs7Ozs7Ozs7OztVQUNKQyxLLEdBQVE7QUFDTkMsTUFBQUEsSUFBSSxFQUFFO0FBREEsSzs7Ozs7OzZCQUlDO0FBQUE7O0FBQUEsVUFDQ0EsSUFERCxHQUNVLEtBQUtELEtBRGYsQ0FDQ0MsSUFERDtBQUVQLGFBQ0Usb0JBQUMsWUFBRDtBQUNFLFFBQUEsVUFBVSxFQUFFSCxVQURkO0FBRUUsUUFBQSxlQUFlLEVBQUVHLElBRm5CO0FBR0UsUUFBQSxjQUFjLEVB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QixvQkFBdkIsQ0FBNEMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE1QztBQUNELEdBakJDLENBQUY7QUFrQkQsQ0FsRk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4nXG5cbmNvbnN0IHsgQ29sdW1uIH0gPSBUYWJsZVxuXG5jb25zdCBkYXRhU291cmNlID0gW1xuICB7XG4gICAgXCJrZXlcIjogMCxcbiAgICBcIm9uZVwiOiBcIuesrOS4gOmhuVwiLFxuICB9LFxuICB7XG4gICAgXCJrZXlcIjogMSxcbiAgICBcIm9uZVwiOiBcIuesrOS6jOmhuVwiLFxuICB9LFxuICB7XG4gICAgXCJrZXlcIjogMixcbiAgICBcIm9uZVwiOiBcIuesrOS4iemhuVwiLFxuICB9XG5dXG5cbmNsYXNzIFJhZGlvTW91bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGtleXM6IG51bGwsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBrZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBzZWxlY3RlZFJvd0tleXM9e2tleXN9XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e2FyZ3MgPT4gdGhpcy5zZXRTdGF0ZSh7IGtleXM6IGFyZ3N9KX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJkaXNhYmxlZCDpqozor4FcIiwgKCkgPT4ge1xuICBpdChcIuWNlemAiVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICAvKipcbiAgICAgKiDmqKHmi5/liY3kuKTpobnnpoHmraLvvIzlhbbkuK3kuIDkuKrkuLrmnKrpgInkuK3vvIzlj6bkuIDkuKrkuLrlt7LpgInkuK1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgZ2V0U2VsZWN0UHJvcHM9eyhyb3cpID0+IHtcbiAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICBpZiAocm93LmtleSA9PT0gMCB8fCByb3cua2V5ID09PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIHdyYXBwZXIuZmluZCgnLmFkdWktcmFkaW8taW5kaWNhdG9yJykuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMV0pXG4gICAgd3JhcHBlci5maW5kKCcuYWR1aS1yYWRpby1pbmRpY2F0b3InKS5hdCgxKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxXSlcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLXJhZGlvLWluZGljYXRvcicpLmF0KDIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzJdKVxuICB9KVxuXG4gIGl0KFwi5aSa6YCJXCIsICgpID0+IHtcbiAgICBjb25zdCBvblNlbGVjdENoYW5nZSA9IGplc3QuZm4oKVxuICAgIC8qKlxuICAgICAqIOaooeaLn+WJjeS4pOmhueemgeatou+8jOWFtuS4reS4gOS4quS4uuacqumAieS4re+8jOWPpuS4gOS4quS4uuW3sumAieS4rVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17b25TZWxlY3RDaGFuZ2V9XG4gICAgICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM9e1sxLCBcIuWkmuS9memhuVwiXX1cbiAgICAgICAgc2VsZWN0TXVsdGlwbGVcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHM9eyhyb3cpID0+IHtcbiAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICBpZiAocm93LmtleSA9PT0gMCB8fCByb3cua2V5ID09PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIC8vIOWkmumAieaXtuaJvuWIsOeahOesrOS4gOS4quWFg+e0oOaYr+WFqOmAieahhlxuICAgIHdyYXBwZXIuZmluZCgnLmFkdWktY2hlY2tib3gtaW5kaWNhdG9yJykuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMSwgXCLlpJrkvZnpoblcIiwgMl0pXG4gICAgd3JhcHBlci5maW5kKCcuYWR1aS1jaGVja2JveC1pbmRpY2F0b3InKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxLCBcIuWkmuS9memhuVwiXSlcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLWNoZWNrYm94LWluZGljYXRvcicpLmF0KDMpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzEsIFwi5aSa5L2Z6aG5XCIsIDJdKVxuICAgIHdyYXBwZXIuZmluZCgnLmFkdWktY2hlY2tib3gtaW5kaWNhdG9yJykuYXQoMykuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMSwgXCLlpJrkvZnpoblcIl0pXG4gIH0pXG59KVxuXG5kZXNjcmliZShcImJhc2VcIiwgKCkgPT4ge1xuXG4gIGl0KFwi5b+r54Wn5qC45a+5XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9eygpID0+IHt9fVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxXSlcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLXJhZGlvLWluZGljYXRvcicpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzBdKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCBvblNlbGVjdENoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICBzZWxlY3RlZFJvd0tleXM9e1sxXX1cbiAgICAgICAgc2VsZWN0TXVsdGlwbGU9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjAuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxXSlcbiAgICB3cmFwcGVyMC5maW5kKCcuYWR1aS1yYWRpby1pbmRpY2F0b3InKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIwLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMV0pXG5cbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxSYWRpb01vdW50ZXIgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbXSlcbiAgICB3cmFwcGVyMS5maW5kKCcuYWR1aS1yYWRpby1pbmRpY2F0b3InKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMF0pXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmlK/mjIEgc2VsZWN0T25Sb3dDbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cz17WzFdfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17b25TZWxlY3RDaGFuZ2V9XG4gICAgICAgIHNlbGVjdE9uUm93Q2xpY2tcbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgd3JhcHBlci5maW5kKCdbcm9sZT1cInJvd1wiXScpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25TZWxlY3RDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFsxLCAwXSlcbiAgfSlcbn0pIl19