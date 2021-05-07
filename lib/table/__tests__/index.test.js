"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ds = [{
  one: "阿萨德",
  two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  three: "阿萨德阿萨德阿萨德阿萨德阿萨德"
}, {
  one: "阿萨德",
  two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  three: "阿萨德阿萨德阿萨德阿萨德阿萨德"
}, {
  one: "阿萨德",
  two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  three: "阿萨德阿萨德阿萨德阿萨德阿萨德"
}, {
  one: "阿萨德",
  two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  three: "阿萨德阿萨德阿萨德阿萨德阿萨德"
}, {
  one: "阿萨德",
  two: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  four: "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
  three: "阿萨德阿萨德阿萨德阿萨德阿萨德"
}];
describe("Table", function () {
  it("快照核对", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      dataSource: ds,
      columns: [{
        title: "分组好",
        dataIndex: "asd",
        render: function render(row) {
          return row.four;
        }
      }],
      getCellClassName: function getCellClassName() {
        return "asd";
      }
    }));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbImRzIiwib25lIiwidHdvIiwiZm91ciIsInRocmVlIiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJ0aXRsZSIsImRhdGFJbmRleCIsInJlbmRlciIsInJvdyIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLEVBQUUsR0FBRyxDQUNUO0FBQ0VDLEVBQUFBLEdBQUcsRUFBRSxLQURQO0FBRUVDLEVBQUFBLEdBQUcsRUFBRSxvQkFGUDtBQUdFQyxFQUFBQSxJQUFJLEVBQ0YseUNBSko7QUFLRUMsRUFBQUEsS0FBSyxFQUFFO0FBTFQsQ0FEUyxFQVFUO0FBQ0VILEVBQUFBLEdBQUcsRUFBRSxLQURQO0FBRUVDLEVBQUFBLEdBQUcsRUFBRSxvQkFGUDtBQUdFQyxFQUFBQSxJQUFJLEVBQ0YseUNBSko7QUFLRUMsRUFBQUEsS0FBSyxFQUFFO0FBTFQsQ0FSUyxFQWVUO0FBQ0VILEVBQUFBLEdBQUcsRUFBRSxLQURQO0FBRUVDLEVBQUFBLEdBQUcsRUFBRSxvQkFGUDtBQUdFQyxFQUFBQSxJQUFJLEVBQ0YseUNBSko7QUFLRUMsRUFBQUEsS0FBSyxFQUFFO0FBTFQsQ0FmUyxFQXNCVDtBQUNFSCxFQUFBQSxHQUFHLEVBQUUsS0FEUDtBQUVFQyxFQUFBQSxHQUFHLEVBQUUsb0JBRlA7QUFHRUMsRUFBQUEsSUFBSSxFQUNGLHlDQUpKO0FBS0VDLEVBQUFBLEtBQUssRUFBRTtBQUxULENBdEJTLEVBNkJUO0FBQ0VILEVBQUFBLEdBQUcsRUFBRSxLQURQO0FBRUVDLEVBQUFBLEdBQUcsRUFBRSxvQkFGUDtBQUdFQyxFQUFBQSxJQUFJLEVBQ0YseUNBSko7QUFLRUMsRUFBQUEsS0FBSyxFQUFFO0FBTFQsQ0E3QlMsQ0FBWDtBQXNDQUMsUUFBUSxDQUFDLE9BQUQsRUFBVSxZQUFNO0FBQ3RCQyxFQUFBQSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQU07QUFDZixRQUFNQyxPQUFPLEdBQUdDLDhCQUFhQyxNQUFiLENBQ2Qsb0JBQUMsWUFBRDtBQUNFLE1BQUEsVUFBVSxFQUFFVCxFQURkO0FBRUUsTUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFVSxRQUFBQSxLQUFLLEVBQUUsS0FEVDtBQUVFQyxRQUFBQSxTQUFTLEVBQUUsS0FGYjtBQUdFQyxRQUFBQSxNQUFNLEVBQUUsZ0JBQUNDLEdBQUQ7QUFBQSxpQkFBU0EsR0FBRyxDQUFDVixJQUFiO0FBQUE7QUFIVixPQURPLENBRlg7QUFTRSxNQUFBLGdCQUFnQixFQUFFO0FBQUEsZUFBTSxLQUFOO0FBQUE7QUFUcEIsTUFEYyxDQUFoQjs7QUFhQVcsSUFBQUEsTUFBTSxDQUFDUCxPQUFELENBQU4sQ0FBZ0JRLGVBQWhCO0FBQ0QsR0FmQyxDQUFGO0FBZ0JELENBakJPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uXCJcblxuY29uc3QgZHMgPSBbXG4gIHtcbiAgICBvbmU6IFwi6Zi/6JCo5b63XCIsXG4gICAgdHdvOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIGZvdXI6XG4gICAgICBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIHRocmVlOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICB9LFxuICB7XG4gICAgb25lOiBcIumYv+iQqOW+t1wiLFxuICAgIHR3bzogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICBmb3VyOlxuICAgICAgXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICB0aHJlZTogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgfSxcbiAge1xuICAgIG9uZTogXCLpmL/okKjlvrdcIixcbiAgICB0d286IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgZm91cjpcbiAgICAgIFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgdGhyZWU6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gIH0sXG4gIHtcbiAgICBvbmU6IFwi6Zi/6JCo5b63XCIsXG4gICAgdHdvOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIGZvdXI6XG4gICAgICBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIHRocmVlOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICB9LFxuICB7XG4gICAgb25lOiBcIumYv+iQqOW+t1wiLFxuICAgIHR3bzogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICBmb3VyOlxuICAgICAgXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICB0aHJlZTogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgfSxcbl1cblxuZGVzY3JpYmUoXCJUYWJsZVwiLCAoKSA9PiB7XG4gIGl0KFwi5b+r54Wn5qC45a+5XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkc31cbiAgICAgICAgY29sdW1ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIuWIhue7hOWlvVwiLFxuICAgICAgICAgICAgZGF0YUluZGV4OiBcImFzZFwiLFxuICAgICAgICAgICAgcmVuZGVyOiAocm93KSA9PiByb3cuZm91cixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBnZXRDZWxsQ2xhc3NOYW1lPXsoKSA9PiBcImFzZFwifVxuICAgICAgLz5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG59KVxuIl19