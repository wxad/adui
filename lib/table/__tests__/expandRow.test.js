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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL2V4cGFuZFJvdy50ZXN0LnRzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJUYWJsZSIsImRhdGFTb3VyY2UiLCJFeHBhbmRNb3VudGVyIiwic3RhdGUiLCJrZXlzIiwiYXJnS2V5cyIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsIlRlc3RSZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsIm9uRXhwYW5kQ2hhbmdlIiwiamVzdCIsImZuIiwiZmluZCIsImV4cGFuZGVkUm93S2V5cyIsInRvRXF1YWwiLCJhdCIsInNpbXVsYXRlIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsTSxHQUFXQyxZLENBQVhELE07QUFFUixJQUFNRSxVQUFVLEdBQUcsQ0FDakI7QUFDRSxTQUFPLENBRFQ7QUFFRSxTQUFPO0FBRlQsQ0FEaUIsRUFLakI7QUFDRSxTQUFPLENBRFQ7QUFFRSxTQUFPO0FBRlQsQ0FMaUIsRUFTakI7QUFDRSxTQUFPLENBRFQ7QUFFRSxTQUFPO0FBRlQsQ0FUaUIsQ0FBbkI7O0lBZU1DLGE7Ozs7Ozs7Ozs7Ozs7OztVQUNKQyxLLEdBQVE7QUFDTkMsTUFBQUEsSUFBSSxFQUFFO0FBREEsSzs7Ozs7OzZCQUlDO0FBQUE7O0FBQUEsVUFDQ0EsSUFERCxHQUNVLEtBQUtELEtBRGYsQ0FDQ0MsSUFERDtBQUVQLGFBQ0Usb0JBQUMsWUFBRDtBQUNFLFFBQUEsVUFBVSxFQUFFSCxVQURkO0FBRUUsUUFBQSxlQUFlLEVBQUVHLElBRm5CO0FBR0UsUUFBQSxjQUFjLEVBQUUsd0JBQUFDLE9BQU87QUFBQSxpQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFRixZQUFBQSxJQUFJLEVBQUVDO0FBQVIsV0FBZCxDQUFKO0FBQUE7QUFIekIsU0FLRSxvQkFBQyxNQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUMsS0FEUjtBQUVFLFFBQUEsU0FBUyxFQUFDO0FBRlosUUFMRixDQURGO0FBWUQ7Ozs7RUFuQnlCRSxLQUFLLENBQUNDLFM7O0FBc0JsQ0MsUUFBUSxDQUFDLE1BQUQsRUFBUyxZQUFNO0FBRXJCQyxFQUFBQSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQU07QUFDZixRQUFNQyxPQUFPLEdBQUdDLDhCQUFhQyxNQUFiLENBQ2Qsb0JBQUMsWUFBRDtBQUNFLE1BQUEsVUFBVSxFQUFFWixVQURkO0FBRUUsTUFBQSxzQkFBc0IsRUFBRSxDQUFDLENBQUQsQ0FGMUI7QUFHRSxNQUFBLGNBQWMsRUFBRSwwQkFBTSxDQUFFO0FBSDFCLE9BS0Usb0JBQUMsTUFBRDtBQUNFLE1BQUEsS0FBSyxFQUFDLEtBRFI7QUFFRSxNQUFBLFNBQVMsRUFBQztBQUZaLE1BTEYsQ0FEYyxDQUFoQjs7QUFZQWEsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FkQyxDQUFGO0FBZ0JBTCxFQUFBQSxFQUFFLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDbEIsUUFBTU0sY0FBYyxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBdkI7QUFDQSxRQUFNUCxPQUFPLEdBQUcsbUJBQ2Qsb0JBQUMsWUFBRDtBQUNFLE1BQUEsVUFBVSxFQUFFVixVQURkO0FBRUUsTUFBQSxjQUFjLEVBQUVlLGNBRmxCO0FBR0UsTUFBQSxzQkFBc0IsRUFBRSxDQUFDLENBQUQ7QUFIMUIsT0FLRSxvQkFBQyxNQUFEO0FBQ0UsTUFBQSxLQUFLLEVBQUMsS0FEUjtBQUVFLE1BQUEsU0FBUyxFQUFDO0FBRlosTUFMRixDQURjLENBQWhCO0FBWUFGLElBQUFBLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDUSxJQUFSLENBQWEsT0FBYixFQUFzQmhCLEtBQXRCLEdBQThCaUIsZUFBL0IsQ0FBTixDQUFzREMsT0FBdEQsQ0FBOEQsQ0FBQyxDQUFELENBQTlEO0FBQ0FWLElBQUFBLE9BQU8sQ0FBQ1EsSUFBUixDQUFhLE1BQWIsRUFBcUJHLEVBQXJCLENBQXdCLENBQXhCLEVBQTJCQyxRQUEzQixDQUFvQyxPQUFwQztBQUNBVCxJQUFBQSxNQUFNLENBQUNILE9BQU8sQ0FBQ1EsSUFBUixDQUFhLE9BQWIsRUFBc0JoQixLQUF0QixHQUE4QmlCLGVBQS9CLENBQU4sQ0FBc0RDLE9BQXRELENBQThELENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBOUQ7QUFDRCxHQWpCQyxDQUFGO0FBbUJBWCxFQUFBQSxFQUFFLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDbEIsUUFBTU0sY0FBYyxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBdkI7QUFDQSxRQUFNTSxRQUFRLEdBQUcsbUJBQ2Ysb0JBQUMsWUFBRDtBQUNFLE1BQUEsVUFBVSxFQUFFdkIsVUFEZDtBQUVFLE1BQUEsY0FBYyxFQUFFZSxjQUZsQjtBQUdFLE1BQUEsZUFBZSxFQUFFLENBQUMsQ0FBRDtBQUhuQixPQUtFLG9CQUFDLE1BQUQ7QUFDRSxNQUFBLEtBQUssRUFBQyxLQURSO0FBRUUsTUFBQSxTQUFTLEVBQUM7QUFGWixNQUxGLENBRGUsQ0FBakI7QUFZQUYsSUFBQUEsTUFBTSxDQUFDVSxRQUFRLENBQUNMLElBQVQsQ0FBYyxPQUFkLEVBQXVCaEIsS0FBdkIsR0FBK0JpQixlQUFoQyxDQUFOLENBQXVEQyxPQUF2RCxDQUErRCxDQUFDLENBQUQsQ0FBL0Q7QUFDQUcsSUFBQUEsUUFBUSxDQUFDTCxJQUFULENBQWMsTUFBZCxFQUFzQkcsRUFBdEIsQ0FBeUIsQ0FBekIsRUFBNEJDLFFBQTVCLENBQXFDLE9BQXJDO0FBQ0FULElBQUFBLE1BQU0sQ0FBQ1UsUUFBUSxDQUFDTCxJQUFULENBQWMsT0FBZCxFQUF1QmhCLEtBQXZCLEdBQStCaUIsZUFBaEMsQ0FBTixDQUF1REMsT0FBdkQsQ0FBK0QsQ0FBQyxDQUFELENBQS9EO0FBRUEsUUFBTUksUUFBUSxHQUFHLG1CQUFNLG9CQUFDLGFBQUQsT0FBTixDQUFqQjtBQUNBQSxJQUFBQSxRQUFRLENBQUNOLElBQVQsQ0FBYyxNQUFkLEVBQXNCRyxFQUF0QixDQUF5QixDQUF6QixFQUE0QkMsUUFBNUIsQ0FBcUMsT0FBckM7QUFDQVQsSUFBQUEsTUFBTSxDQUFDVyxRQUFRLENBQUNOLElBQVQsQ0FBYyxPQUFkLEVBQXVCaEIsS0FBdkIsR0FBK0JpQixlQUFoQyxDQUFOLENBQXVEQyxPQUF2RCxDQUErRCxDQUFDLENBQUQsQ0FBL0Q7QUFDQUksSUFBQUEsUUFBUSxDQUFDTixJQUFULENBQWMsTUFBZCxFQUFzQkcsRUFBdEIsQ0FBeUIsQ0FBekIsRUFBNEJDLFFBQTVCLENBQXFDLE9BQXJDO0FBQ0FULElBQUFBLE1BQU0sQ0FBQ1csUUFBUSxDQUFDTixJQUFULENBQWMsT0FBZCxFQUF1QmhCLEtBQXZCLEdBQStCaUIsZUFBaEMsQ0FBTixDQUF1REMsT0FBdkQsQ0FBK0QsRUFBL0Q7QUFDRCxHQXZCQyxDQUFGO0FBeUJBWCxFQUFBQSxFQUFFLENBQUMsdUJBQUQsRUFBMEIsWUFBTTtBQUNoQyxRQUFNTSxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsRUFBTCxFQUF2QjtBQUNBLFFBQU1QLE9BQU8sR0FBRyxtQkFDZCxvQkFBQyxZQUFEO0FBQ0UsTUFBQSxVQUFVLEVBQUVWLFVBRGQ7QUFFRSxNQUFBLHNCQUFzQixFQUFFLENBQUMsQ0FBRCxDQUYxQjtBQUdFLE1BQUEsY0FBYyxFQUFFZSxjQUhsQjtBQUlFLE1BQUEsZ0JBQWdCO0FBSmxCLE9BTUUsb0JBQUMsTUFBRDtBQUNFLE1BQUEsS0FBSyxFQUFDLEtBRFI7QUFFRSxNQUFBLFNBQVMsRUFBQztBQUZaLE1BTkYsQ0FEYyxDQUFoQjtBQWFBTCxJQUFBQSxPQUFPLENBQUNRLElBQVIsQ0FBYSxjQUFiLEVBQTZCRyxFQUE3QixDQUFnQyxDQUFoQyxFQUFtQ0MsUUFBbkMsQ0FBNEMsT0FBNUM7QUFDQVQsSUFBQUEsTUFBTSxDQUFDRSxjQUFELENBQU4sQ0FBdUJVLG9CQUF2QixDQUE0QyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVDO0FBQ0QsR0FqQkMsQ0FBRjtBQWtCRCxDQWhGTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSdcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLidcblxuY29uc3QgeyBDb2x1bW4gfSA9IFRhYmxlXG5cbmNvbnN0IGRhdGFTb3VyY2UgPSBbXG4gIHtcbiAgICBcImtleVwiOiAwLFxuICAgIFwib25lXCI6IFwi56ys5LiA6aG5XCIsXG4gIH0sXG4gIHtcbiAgICBcImtleVwiOiAxLFxuICAgIFwib25lXCI6IFwi56ys5LqM6aG5XCIsXG4gIH0sXG4gIHtcbiAgICBcImtleVwiOiAyLFxuICAgIFwib25lXCI6IFwi56ys5LiJ6aG5XCIsXG4gIH1cbl1cblxuY2xhc3MgRXhwYW5kTW91bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGtleXM6IG51bGwsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBrZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBleHBhbmRlZFJvd0tleXM9e2tleXN9XG4gICAgICAgIG9uRXhwYW5kQ2hhbmdlPXthcmdLZXlzID0+IHRoaXMuc2V0U3RhdGUoeyBrZXlzOiBhcmdLZXlzIH0pfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5kZXNjcmliZShcImJhc2VcIiwgKCkgPT4ge1xuXG4gIGl0KFwi5b+r54Wn5qC45a+5XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIG9uRXhwYW5kQ2hhbmdlPXsoKSA9PiB7fX1cbiAgICAgID5cbiAgICAgICAgPENvbHVtblxuICAgICAgICAgIHRpdGxlPVwib25lXCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uRXhwYW5kQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIG9uRXhwYW5kQ2hhbmdlPXtvbkV4cGFuZENoYW5nZX1cbiAgICAgICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5cz17WzFdfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlci5maW5kKFwiVGFibGVcIikuc3RhdGUoKS5leHBhbmRlZFJvd0tleXMpLnRvRXF1YWwoWzFdKVxuICAgIHdyYXBwZXIuZmluZChcIkljb25cIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLmV4cGFuZGVkUm93S2V5cykudG9FcXVhbChbMSwgMF0pXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKbog73lpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uRXhwYW5kQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBvbkV4cGFuZENoYW5nZT17b25FeHBhbmRDaGFuZ2V9XG4gICAgICAgIGV4cGFuZGVkUm93S2V5cz17WzFdfVxuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjAuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuZXhwYW5kZWRSb3dLZXlzKS50b0VxdWFsKFsxXSlcbiAgICB3cmFwcGVyMC5maW5kKFwiSWNvblwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIwLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLmV4cGFuZGVkUm93S2V5cykudG9FcXVhbChbMV0pXG5cbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxFeHBhbmRNb3VudGVyIC8+KVxuICAgIHdyYXBwZXIxLmZpbmQoXCJJY29uXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlcjEuZmluZChcIlRhYmxlXCIpLnN0YXRlKCkuZXhwYW5kZWRSb3dLZXlzKS50b0VxdWFsKFswXSlcbiAgICB3cmFwcGVyMS5maW5kKFwiSWNvblwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIxLmZpbmQoXCJUYWJsZVwiKS5zdGF0ZSgpLmV4cGFuZGVkUm93S2V5cykudG9FcXVhbChbXSlcbiAgfSlcblxuICBpdChcIuaYr+WQpuaUr+aMgSBleHBhbmRPblJvd0NsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkV4cGFuZENoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPXtbMV19XG4gICAgICAgIG9uRXhwYW5kQ2hhbmdlPXtvbkV4cGFuZENoYW5nZX1cbiAgICAgICAgZXhwYW5kT25Sb3dDbGlja1xuICAgICAgPlxuICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgdGl0bGU9XCJvbmVcIlxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICB3cmFwcGVyLmZpbmQoJ1tyb2xlPVwicm93XCJdJykuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkV4cGFuZENoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoWzEsIDBdKVxuICB9KVxufSkiXX0=