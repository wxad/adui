"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _sinon = _interopRequireDefault(require("sinon"));

var _2 = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var dataSource = [{
  "one": "阿萨德",
  "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
}, {
  "one": "阿萨德",
  "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
}, {
  "one": "阿萨德",
  "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
}, {
  "one": "阿萨德",
  "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
}, {
  "one": "阿萨德",
  "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
}];
describe("Table", function () {
  beforeAll(function () {
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: 500,
        height: 600,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: function toJSON() {}
      };
    });
  });
  it("headerAffixed 检测", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_2["default"], {
      dataSource: dataSource,
      headerAffixed: true
    }, React.createElement(_2["default"].Column, {
      dataIndex: "one",
      title: "\u7B2C\u4E00\u9879",
      popover: "\u8868\u5934\u63D0\u793A\u5185\u5BB9",
      width: "100px",
      fixed: "left"
    }), React.createElement(_2["default"].Column, {
      fixed: "right",
      dataIndex: "two",
      title: "\u7B2Cer\u9879",
      width: 300
    }), React.createElement(_2["default"].Column, {
      dataIndex: "s",
      title: "\u7B2Csi\u9879",
      width: "10%",
      align: "center",
      render: function render() {
        return "这些撒大声地";
      }
    }), React.createElement(_2["default"].Column, {
      dataIndex: "three",
      title: "\u7B2Csan\u9879"
    }), React.createElement(_2["default"].Column, {
      dataIndex: "four",
      title: "\u7B2Csi\u9879",
      width: 300,
      align: "right"
    })));
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    global.dispatchEvent(new Event('scroll'));
    wrapper.instance().handleMainTableScroll();
    wrapper.instance().componentWillUnmount();
  });
  it("height 与 headerAffixed 不能同时使用 验证", function () {
    var stub = _sinon["default"].stub(console, 'error');

    (0, _enzyme.mount)(React.createElement(_2["default"], {
      dataSource: dataSource,
      height: 500,
      headerAffixed: true
    }, React.createElement(_2["default"].Column, {
      dataIndex: "one",
      title: "\u534A\u89D2\u62EC\u53F7\u5916(\u534A\u89D2\u62EC\u53F7\u5185\u6D4B\u8BD5)",
      popover: "\u8868\u5934\u63D0\u793A\u5185\u5BB9",
      width: 100,
      fixed: "left"
    })));
    expect(stub.calledOnce).toBe(true);
    stub.restore();
  });
  it("height 检测", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(_2["default"], {
      dataSource: dataSource,
      height: 200
    }, React.createElement(_2["default"].Column, {
      dataIndex: "one",
      title: "\u7B2C\u4E00\u9879",
      popover: "\u8868\u5934\u63D0\u793A\u5185\u5BB9",
      width: 100,
      fixed: "left"
    }), React.createElement(_2["default"].Column, {
      fixed: "right",
      dataIndex: "two",
      title: "\u7B2Cer\u9879",
      width: 300
    }), React.createElement(_2["default"].Column, {
      dataIndex: "s",
      title: "\u7B2Csi\u9879",
      width: 300,
      align: "center",
      render: function render() {
        return "这些撒大声地";
      }
    }), React.createElement(_2["default"].Column, {
      dataIndex: "three",
      title: "\u7B2Csan\u9879"
    }), React.createElement(_2["default"].Column, {
      dataIndex: "four",
      title: "\u7B2Csi\u9879",
      width: 300,
      align: "right"
    })));
    global.innerWidth = 500;
    global.innerHeight = 500;
    global.dispatchEvent(new Event('resize'));
    global.dispatchEvent(new Event('scroll'));
    wrapper.instance().handleMainTableScroll();
  });
  it("Column width 在 fixed 时必须设置 验证", function () {
    var stub = _sinon["default"].stub(console, 'error');

    (0, _enzyme.mount)(React.createElement(_2["default"], {
      dataSource: dataSource
    }, React.createElement(_2["default"].Column, {
      dataIndex: "one",
      title: "\u7B2C\u4E00\u9879",
      fixed: "left"
    })));
    expect(stub.calledOnce).toBe(true);
    stub.restore();
  });
  it("loading 快照", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_2["default"], {
      loading: true,
      dataSource: dataSource
    }, React.createElement(_2["default"].Column, {
      dataIndex: "one",
      title: "\u7B2C\u4E00\u9879",
      fixed: "left"
    })));

    expect(wrapper).toMatchSnapshot();
  });
  it("合并单元格快照", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_2["default"], {
      dataSource: dataSource,
      getCellProps: function getCellProps(_, __, rowIndex, colIndex) {
        if (rowIndex === 0 && colIndex === 0) {
          return {
            rowSpan: 2,
            colSpan: 2
          };
        }

        if (rowIndex === 3 && colIndex === 2) {
          return {
            rowSpan: 2,
            colSpan: 1
          };
        }

        if (rowIndex === 3 && colIndex === 3) {
          return {
            rowSpan: 2,
            colSpan: 1
          };
        }

        if (rowIndex === 2 && colIndex === 0) {
          return {
            rowSpan: 1,
            colSpan: 1
          };
        }

        return {};
      }
    }, React.createElement(_2["default"].Column, {
      dataIndex: "one",
      title: "\u7B2C\u4E00\u9879",
      fixed: true
    }), React.createElement(_2["default"].Column, {
      dataIndex: "two",
      title: "\u7B2Cer\u9879",
      fixed: true
    }), React.createElement(_2["default"].Column, {
      dataIndex: "three",
      title: "\u7B2C3\u9879",
      align: "center"
    }), React.createElement(_2["default"].Column, {
      dataIndex: "four",
      title: "\u7B2C\u56DB\u9879",
      align: "center",
      fixed: "right"
    })));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL3Byb3BzLnRlc3QudHN4Il0sIm5hbWVzIjpbImRhdGFTb3VyY2UiLCJkZXNjcmliZSIsImJlZm9yZUFsbCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJqZXN0IiwiZm4iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsIngiLCJ5IiwidG9KU09OIiwiaXQiLCJ3cmFwcGVyIiwiZ2xvYmFsIiwiaW5uZXJXaWR0aCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImluc3RhbmNlIiwiaGFuZGxlTWFpblRhYmxlU2Nyb2xsIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJzdHViIiwic2lub24iLCJjb25zb2xlIiwiZXhwZWN0IiwiY2FsbGVkT25jZSIsInRvQmUiLCJyZXN0b3JlIiwiaW5uZXJIZWlnaHQiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJ0b01hdGNoU25hcHNob3QiLCJfIiwiX18iLCJyb3dJbmRleCIsImNvbEluZGV4Iiwicm93U3BhbiIsImNvbFNwYW4iXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRSxTQUFPLEtBRFQ7QUFFRSxTQUFPLG9CQUZUO0FBR0UsVUFBUSx5Q0FIVjtBQUlFLFdBQVM7QUFKWCxDQURpQixFQU9qQjtBQUNFLFNBQU8sS0FEVDtBQUVFLFNBQU8sb0JBRlQ7QUFHRSxVQUFRLHlDQUhWO0FBSUUsV0FBUztBQUpYLENBUGlCLEVBYWpCO0FBQ0UsU0FBTyxLQURUO0FBRUUsU0FBTyxvQkFGVDtBQUdFLFVBQVEseUNBSFY7QUFJRSxXQUFTO0FBSlgsQ0FiaUIsRUFtQmpCO0FBQ0UsU0FBTyxLQURUO0FBRUUsU0FBTyxvQkFGVDtBQUdFLFVBQVEseUNBSFY7QUFJRSxXQUFTO0FBSlgs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LEtBQUssQ0FBbkMsRUFBc0M7QUFDcEMsaUJBQU87QUFDTEMsWUFBQUEsT0FBTyxFQUFFLENBREo7QUFFTEMsWUFBQUEsT0FBTyxFQUFFO0FBRkosV0FBUDtBQUlEOztBQUNELGVBQU8sRUFBUDtBQUNEO0FBNUJILE9BOEJFLG9CQUFDLGFBQUQsQ0FBTyxNQUFQO0FBQ0UsTUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLE1BQUEsS0FBSyxFQUFDLG9CQUZSO0FBR0UsTUFBQSxLQUFLO0FBSFAsTUE5QkYsRUFtQ0Usb0JBQUMsYUFBRCxDQUFPLE1BQVA7QUFDRSxNQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsTUFBQSxLQUFLLEVBQUMsZ0JBRlI7QUFHRSxNQUFBLEtBQUs7QUFIUCxNQW5DRixFQXdDRSxvQkFBQyxhQUFELENBQU8sTUFBUDtBQUNFLE1BQUEsU0FBUyxFQUFDLE9BRFo7QUFFRSxNQUFBLEtBQUssRUFBQyxlQUZSO0FBR0UsTUFBQSxLQUFLLEVBQUM7QUFIUixNQXhDRixFQTZDRSxvQkFBQyxhQUFELENBQU8sTUFBUDtBQUNFLE1BQUEsU0FBUyxFQUFDLE1BRFo7QUFFRSxNQUFBLEtBQUssRUFBQyxvQkFGUjtBQUdFLE1BQUEsS0FBSyxFQUFDLFFBSFI7QUFJRSxNQUFBLEtBQUssRUFBQztBQUpSLE1BN0NGLENBRGMsQ0FBaEI7O0FBc0RBYixJQUFBQSxNQUFNLENBQUNYLE9BQUQsQ0FBTixDQUFnQmtCLGVBQWhCO0FBQ0QsR0F4REMsQ0FBRjtBQXlERCxDQTNRTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInXG5pbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4nXG5cbmNvbnN0IGRhdGFTb3VyY2UgPSBbXG4gIHtcbiAgICBcIm9uZVwiOiBcIumYv+iQqOW+t1wiLFxuICAgIFwidHdvXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgXCJmb3VyXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgXCJ0aHJlZVwiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICB9LFxuICB7XG4gICAgXCJvbmVcIjogXCLpmL/okKjlvrdcIixcbiAgICBcInR3b1wiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIFwiZm91clwiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIFwidGhyZWVcIjogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgfSxcbiAge1xuICAgIFwib25lXCI6IFwi6Zi/6JCo5b63XCIsXG4gICAgXCJ0d29cIjogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICBcImZvdXJcIjogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICBcInRocmVlXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gIH0sXG4gIHtcbiAgICBcIm9uZVwiOiBcIumYv+iQqOW+t1wiLFxuICAgIFwidHdvXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgXCJmb3VyXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgXCJ0aHJlZVwiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICB9LFxuICB7XG4gICAgXCJvbmVcIjogXCLpmL/okKjlvrdcIixcbiAgICBcInR3b1wiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIFwiZm91clwiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIFwidGhyZWVcIjogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgfSxcbl1cblxuZXhwb3J0IGludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5cbmRlc2NyaWJlKFwiVGFibGVcIiwgKCkgPT4ge1xuXG4gIGJlZm9yZUFsbCgoKSA9PiB7XG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwMDA2NjYzXG4gICAgICog6YCa6L+HIG1vY2sgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGDvvIzkuYvlkI7ov5DooYznmoTmiYDmnIkgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAg6YO95Lya6L+U5Zue6L+Z5ZCM5LiA5Liq5YC844CCXG4gICAgICovXG4gICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gamVzdC5mbigoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB0b0pTT046ICgpID0+IHt9LFxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCJoZWFkZXJBZmZpeGVkIOajgOa1i1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIGhlYWRlckFmZml4ZWRcbiAgICAgID5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgICAgdGl0bGU9XCLnrKzkuIDpoblcIlxuICAgICAgICAgIHBvcG92ZXI9XCLooajlpLTmj5DnpLrlhoXlrrlcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxuICAgICAgICAgIGZpeGVkPVwibGVmdFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUYWJsZS5Db2x1bW5cbiAgICAgICAgICBmaXhlZD1cInJpZ2h0XCJcbiAgICAgICAgICBkYXRhSW5kZXg9XCJ0d29cIlxuICAgICAgICAgIHRpdGxlPVwi56ysZXLpoblcIlxuICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgIC8+XG4gICAgICAgIDxUYWJsZS5Db2x1bW5cbiAgICAgICAgICBkYXRhSW5kZXg9XCJzXCJcbiAgICAgICAgICB0aXRsZT1cIuesrHNp6aG5XCJcbiAgICAgICAgICB3aWR0aD1cIjEwJVwiXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIHJlbmRlcj17KCkgPT4gXCLov5nkupvmkpLlpKflo7DlnLBcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cInRocmVlXCJcbiAgICAgICAgICB0aXRsZT1cIuesrHNhbumhuVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUYWJsZS5Db2x1bW5cbiAgICAgICAgICBkYXRhSW5kZXg9XCJmb3VyXCJcbiAgICAgICAgICB0aXRsZT1cIuesrHNp6aG5XCJcbiAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgIGFsaWduPVwicmlnaHRcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdsb2JhbC5pbm5lcldpZHRoID0gNTAwXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc2Nyb2xsJykpXG4gICAgd3JhcHBlci5pbnN0YW5jZSgpLmhhbmRsZU1haW5UYWJsZVNjcm9sbCgpXG4gICAgd3JhcHBlci5pbnN0YW5jZSgpLmNvbXBvbmVudFdpbGxVbm1vdW50KClcbiAgfSlcblxuICAvLyBpdChcImhlaWdodCBwcm9wIOmqjOivgVwiLCAoKSA9PiB7XG4gIC8vICAgY29uc3Qgc3R1YiA9IHNpbm9uLnN0dWIoY29uc29sZSwgJ2Vycm9yJylcbiAgLy8gICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gIC8vICAgICA8VGFibGVcbiAgLy8gICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgLy8gICAgICAgaGVpZ2h0PVwiNTAwcHhcIlxuICAvLyAgICAgPlxuICAvLyAgICAgICA8VGFibGUuQ29sdW1uXG4gIC8vICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgLy8gICAgICAgICB0aXRsZT1cIuesrOS4gOmhuVwiXG4gIC8vICAgICAgICAgcG9wb3Zlcj1cIuihqOWktOaPkOekuuWGheWuuVwiXG4gIC8vICAgICAgICAgd2lkdGg9ezEwMH1cbiAgLy8gICAgICAgICBmaXhlZD1cImxlZnRcIlxuICAvLyAgICAgICAvPlxuICAvLyAgICAgPC9UYWJsZT5cbiAgLy8gICApXG4gIC8vICAgZXhwZWN0KHN0dWIuY2FsbGVkT25jZSkudG9CZSh0cnVlKVxuICAvLyAgIHN0dWIucmVzdG9yZSgpXG4gIC8vIH0pXG5cbiAgaXQoXCJoZWlnaHQg5LiOIGhlYWRlckFmZml4ZWQg5LiN6IO95ZCM5pe25L2/55SoIOmqjOivgVwiLCAoKSA9PiB7XG4gICAgY29uc3Qgc3R1YiA9IHNpbm9uLnN0dWIoY29uc29sZSwgJ2Vycm9yJylcbiAgICBtb3VudChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgaGVhZGVyQWZmaXhlZFxuICAgICAgPlxuICAgICAgICA8VGFibGUuQ29sdW1uXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgICB0aXRsZT1cIuWNiuinkuaLrOWPt+WklijljYrop5Lmi6zlj7flhoXmtYvor5UpXCJcbiAgICAgICAgICBwb3BvdmVyPVwi6KGo5aS05o+Q56S65YaF5a65XCJcbiAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgIGZpeGVkPVwibGVmdFwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qoc3R1Yi5jYWxsZWRPbmNlKS50b0JlKHRydWUpXG4gICAgc3R1Yi5yZXN0b3JlKClcbiAgfSlcblxuICBpdChcImhlaWdodCDmo4DmtYtcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgID5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgICAgdGl0bGU9XCLnrKzkuIDpoblcIlxuICAgICAgICAgIHBvcG92ZXI9XCLooajlpLTmj5DnpLrlhoXlrrlcIlxuICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgZml4ZWQ9XCJsZWZ0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGZpeGVkPVwicmlnaHRcIlxuICAgICAgICAgIGRhdGFJbmRleD1cInR3b1wiXG4gICAgICAgICAgdGl0bGU9XCLnrKxlcumhuVwiXG4gICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cInNcIlxuICAgICAgICAgIHRpdGxlPVwi56ysc2npoblcIlxuICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIHJlbmRlcj17KCkgPT4gXCLov5nkupvmkpLlpKflo7DlnLBcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cInRocmVlXCJcbiAgICAgICAgICB0aXRsZT1cIuesrHNhbumhuVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUYWJsZS5Db2x1bW5cbiAgICAgICAgICBkYXRhSW5kZXg9XCJmb3VyXCJcbiAgICAgICAgICB0aXRsZT1cIuesrHNp6aG5XCJcbiAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgIGFsaWduPVwicmlnaHRcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdsb2JhbC5pbm5lcldpZHRoID0gNTAwXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdsb2JhbC5pbm5lckhlaWdodCA9IDUwMFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Njcm9sbCcpKVxuICAgIHdyYXBwZXIuaW5zdGFuY2UoKS5oYW5kbGVNYWluVGFibGVTY3JvbGwoKVxuICB9KVxuXG4gIC8vIGl0KFwiQ29sdW1uIHdpZHRoIHByb3Ag6aqM6K+BXCIsICgpID0+IHtcbiAgLy8gICBjb25zdCBzdHViID0gc2lub24uc3R1Yihjb25zb2xlLCAnZXJyb3InKVxuICAvLyAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgLy8gICAgIDxUYWJsZVxuICAvLyAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAvLyAgICAgPlxuICAvLyAgICAgICA8VGFibGUuQ29sdW1uXG4gIC8vICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgLy8gICAgICAgICB0aXRsZT1cIuesrOS4gOmhuVwiXG4gIC8vICAgICAgICAgd2lkdGg9e1tdfVxuICAvLyAgICAgICAvPlxuICAvLyAgICAgPC9UYWJsZT5cbiAgLy8gICApXG4gIC8vICAgZXhwZWN0KHN0dWIuY2FsbGVkT25jZSkudG9CZSh0cnVlKVxuICAvLyAgIHN0dWIucmVzdG9yZSgpXG4gIC8vIH0pXG5cbiAgaXQoXCJDb2x1bW4gd2lkdGgg5ZyoIGZpeGVkIOaXtuW/hemhu+iuvue9riDpqozor4FcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHN0dWIgPSBzaW5vbi5zdHViKGNvbnNvbGUsICdlcnJvcicpXG4gICAgbW91bnQoXG4gICAgICA8VGFibGVcbiAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgID5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cIm9uZVwiXG4gICAgICAgICAgdGl0bGU9XCLnrKzkuIDpoblcIlxuICAgICAgICAgIGZpeGVkPVwibGVmdFwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qoc3R1Yi5jYWxsZWRPbmNlKS50b0JlKHRydWUpXG4gICAgc3R1Yi5yZXN0b3JlKClcbiAgfSlcblxuICBpdChcImxvYWRpbmcg5b+r54WnXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxUYWJsZVxuICAgICAgICBsb2FkaW5nXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICA+XG4gICAgICAgIDxUYWJsZS5Db2x1bW5cbiAgICAgICAgICBkYXRhSW5kZXg9XCJvbmVcIlxuICAgICAgICAgIHRpdGxlPVwi56ys5LiA6aG5XCJcbiAgICAgICAgICBmaXhlZD1cImxlZnRcIlxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZT5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCLlkIjlubbljZXlhYPmoLzlv6vnhadcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFRhYmxlXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgICAgIGdldENlbGxQcm9wcz17KF8sIF9fLCByb3dJbmRleCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgJiYgY29sSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJvd1NwYW46IDIsXG4gICAgICAgICAgICAgIGNvbFNwYW46IDIsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMyAmJiBjb2xJbmRleCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcm93U3BhbjogMixcbiAgICAgICAgICAgICAgY29sU3BhbjogMSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvd0luZGV4ID09PSAzICYmIGNvbEluZGV4ID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICByb3dTcGFuOiAyLFxuICAgICAgICAgICAgICBjb2xTcGFuOiAxLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm93SW5kZXggPT09IDIgJiYgY29sSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJvd1NwYW46IDEsXG4gICAgICAgICAgICAgIGNvbFNwYW46IDEsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7fVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VGFibGUuQ29sdW1uXG4gICAgICAgICAgZGF0YUluZGV4PVwib25lXCJcbiAgICAgICAgICB0aXRsZT1cIuesrOS4gOmhuVwiXG4gICAgICAgICAgZml4ZWRcbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cInR3b1wiXG4gICAgICAgICAgdGl0bGU9XCLnrKxlcumhuVwiXG4gICAgICAgICAgZml4ZWRcbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cInRocmVlXCJcbiAgICAgICAgICB0aXRsZT1cIuesrDPpoblcIlxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlLkNvbHVtblxuICAgICAgICAgIGRhdGFJbmRleD1cImZvdXJcIlxuICAgICAgICAgIHRpdGxlPVwi56ys5Zub6aG5XCJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgZml4ZWQ9XCJyaWdodFwiXG4gICAgICAgIC8+XG4gICAgICA8L1RhYmxlPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbn0pIl19