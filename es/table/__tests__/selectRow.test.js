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

import * as React from 'react';
import { mount } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import Table from '..';
var Column = Table.Column;
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
      return React.createElement(Table, {
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
    var wrapper = mount(React.createElement(Table, {
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
    var wrapper = mount(React.createElement(Table, {
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
    var wrapper = TestRenderer.create(React.createElement(Table, {
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
    var wrapper = mount(React.createElement(Table, {
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
    var wrapper0 = mount(React.createElement(Table, {
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
    var wrapper1 = mount(React.createElement(RadioMounter, null));
    expect(wrapper1.find("Table").state().selectedRowKeys).toEqual([]);
    wrapper1.find('.adui-radio-indicator').at(0).simulate("click");
    expect(wrapper1.find("Table").state().selectedRowKeys).toEqual([0]);
  });
  it("是否支持 selectOnRowClick", function () {
    var onSelectChange = jest.fn();
    var wrapper = mount(React.createElement(Table, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL3NlbGVjdFJvdy50ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdW50IiwiVGVzdFJlbmRlcmVyIiwiVGFibGUiLCJDb2x1bW4iLCJkYXRhU291cmNlIiwiUmFkaW9Nb3VudGVyIiwic3RhdGUiLCJrZXlzIiwiYXJncyIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJpdCIsIm9uU2VsZWN0Q2hhbmdlIiwiamVzdCIsImZuIiwid3JhcHBlciIsInJvdyIsImtleSIsImRpc2FibGVkIiwiZmluZCIsImF0Iiwic2ltdWxhdGUiLCJleHBlY3QiLCJzZWxlY3RlZFJvd0tleXMiLCJ0b0VxdWFsIiwiY3JlYXRlIiwidG9NYXRjaFNuYXBzaG90Iiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixRQUF0QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIscUJBQXpCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixJQUFsQjtJQUVRQyxNLEdBQVdELEssQ0FBWEMsTTtBQUVSLElBQU1DLFVBQVUsR0FBRyxDQUNqQjtBQUNFLFNBQU8sQ0FEVDtBQUVFLFNBQU87QUFGVCxDQURpQixFQUtqQjtBQUNFLFNBQU8sQ0FEVDtBQUVFLFNBQU87QUFGVCxDQUxpQixFQVNqQjtBQUNFLFNBQU8sQ0FEVDtBQUVFLFNBQU87QUFGVCxDQVRpQixDQUFuQjs7SUFlTUMsWTs7Ozs7Ozs7Ozs7Ozs7O1VBQ0pDLEssR0FBUTtBQUNOQyxNQUFBQSxJQUFJLEVBQUU7QUFEQSxLOzs7Ozs7NkJBSUM7QUFBQTs7QUFBQSxVQUNDQSxJQURELEdBQ1UsS0FBS0QsS0FEZixDQUNDQyxJQUREO0FBRVAsYUFDRSxvQkFBQyxLQUFEO0FB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QSxPQUFPLENBQUNJLElBQVIsQ0FBYSxjQUFiLEVBQTZCQyxFQUE3QixDQUFnQyxDQUFoQyxFQUFtQ0MsUUFBbkMsQ0FBNEMsT0FBNUM7QUFDQUMsSUFBQUEsTUFBTSxDQUFDVixjQUFELENBQU4sQ0FBdUJpQixvQkFBdkIsQ0FBNEMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE1QztBQUNELEdBakJDLENBQUY7QUFrQkQsQ0FsRk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4nXG5cbmNvbnN0IHsgQ29sdW1uIH0gPSBUYWJsZVxuXG5jb25zdCBkYXRhU291cmNlID0gW1xuICB7XG4gICAgXCJrZXlcIjogMCxcbiAgICBcIm9uZVwiOiBcIuesrOS4gOmhuVwiLFxuICB9LFxuICB7XG4gICAgXCJrZXlcIjogMSxcbiAgICBcIm9uZVwiOiBcIuesrOS6jOmhuVwiLFxuICB9LFxuICB7XG4gICAgXCJrZXlcIjogMixcbiAgICBcIm9uZVwiOiBcIuesrOS4iemhuVwiLFxuICB9XG5dXG5cbmNsYXNzIFJhZGlvTW91bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGtleXM6IG51bGwsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBrZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBzZWxlY3RlZFJvd0tleXM9e2tleXN9XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e2FyZ3MgPT4gdGhpcy5zZXRTdGF0ZSh7IGtleXM6IGFyZ3N9KX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gIH1cbn1cblxuZGVzY3JpYmUoXCJkaXNhYmxlZCDpqozor4FcIiwgKCkgPT4ge1xuICBpdChcIuWNlemAiVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICAvKipcbiAgICAgKiDmqKHmi5/liY3kuKTpobnnpoHmraLvvIzlhbbkuK3kuIDkuKrkuLrmnKrpgInkuK3vvIzlj6bkuIDkuKrkuLrlt7LpgInkuK1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgZ2V0U2VsZWN0UHJvcHM9eyhyb3cpID0+IHtcbiAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICBpZiAocm93LmtleSA9PT0gMCB8fCByb3cua2V5ID09PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIHdyYXBwZXIuZmluZCgnLmFkdWktcmFkaW8taW5kaWNhdG9yJykuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMV0pXG4gICAgd3JhcHBlci5maW5kKCcuYWR1aS1yYWRpby1pbmRpY2F0b3InKS5hdCgxKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxXSlcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLXJhZGlvLWluZGljYXRvcicpLmF0KDIpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzJdKVxuICB9KVxuXG4gIGl0KFwi5aSa6YCJXCIsICgpID0+IHtcbiAgICBjb25zdCBvblNlbGVjdENoYW5nZSA9IGplc3QuZm4oKVxuICAgIC8qKlxuICAgICAqIOaooeaLn+WJjeS4pOmhueemgeatou+8jOWFtuS4reS4gOS4quS4uuacqumAieS4re+8jOWPpuS4gOS4quS4uuW3sumAieS4rVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17b25TZWxlY3RDaGFuZ2V9XG4gICAgICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM9e1sxLCBcIuWkmuS9memhuVwiXX1cbiAgICAgICAgc2VsZWN0TXVsdGlwbGVcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHM9eyhyb3cpID0+IHtcbiAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICBpZiAocm93LmtleSA9PT0gMCB8fCByb3cua2V5ID09PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb2x1bW5cbiAgICAgICAgICB0aXRsZT1cIm9uZVwiXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGU+XG4gICAgKVxuICAgIC8vIOWkmumAieaXtuaJvuWIsOeahOesrOS4gOS4quWFg+e0oOaYr+WFqOmAieahhlxuICAgIHdyYXBwZXIuZmluZCgnLmFkdWktY2hlY2tib3gtaW5kaWNhdG9yJykuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMSwgXCLlpJrkvZnpoblcIiwgMl0pXG4gICAgd3JhcHBlci5maW5kKCcuYWR1aS1jaGVja2JveC1pbmRpY2F0b3InKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxLCBcIuWkmuS9memhuVwiXSlcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLWNoZWNrYm94LWluZGljYXRvcicpLmF0KDMpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzEsIFwi5aSa5L2Z6aG5XCIsIDJdKVxuICAgIHdyYXBwZXIuZmluZCgnLmFkdWktY2hlY2tib3gtaW5kaWNhdG9yJykuYXQoMykuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMSwgXCLlpJrkvZnpoblcIl0pXG4gIH0pXG59KVxuXG5kZXNjcmliZShcImJhc2VcIiwgKCkgPT4ge1xuXG4gIGl0KFwi5b+r54Wn5qC45a+5XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9eygpID0+IHt9fVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIHNlbGVjdE11bHRpcGxlPXtmYWxzZX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxXSlcbiAgICB3cmFwcGVyLmZpbmQoJy5hZHVpLXJhZGlvLWluZGljYXRvcicpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5zZWxlY3RlZFJvd0tleXMpLnRvRXF1YWwoWzBdKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCBvblNlbGVjdENoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICBzZWxlY3RlZFJvd0tleXM9e1sxXX1cbiAgICAgICAgc2VsZWN0TXVsdGlwbGU9e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjAuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzKS50b0VxdWFsKFsxXSlcbiAgICB3cmFwcGVyMC5maW5kKCcuYWR1aS1yYWRpby1pbmRpY2F0b3InKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIwLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMV0pXG5cbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxSYWRpb01vdW50ZXIgLz4pXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbXSlcbiAgICB3cmFwcGVyMS5maW5kKCcuYWR1aS1yYWRpby1pbmRpY2F0b3InKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLnNlbGVjdGVkUm93S2V5cykudG9FcXVhbChbMF0pXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbmlK/mjIEgc2VsZWN0T25Sb3dDbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RDaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cz17WzFdfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17b25TZWxlY3RDaGFuZ2V9XG4gICAgICAgIHNlbGVjdE9uUm93Q2xpY2tcbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgd3JhcHBlci5maW5kKCdbcm9sZT1cInJvd1wiXScpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25TZWxlY3RDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFsxLCAwXSlcbiAgfSlcbn0pIl19