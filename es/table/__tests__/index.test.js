import * as React from "react";
import TestRenderer from "react-test-renderer";
import Table from "..";
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
    var wrapper = TestRenderer.create(React.createElement(Table, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGVzdFJlbmRlcmVyIiwiVGFibGUiLCJkcyIsIm9uZSIsInR3byIsImZvdXIiLCJ0aHJlZSIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiY3JlYXRlIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJyZW5kZXIiLCJyb3ciLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIscUJBQXpCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixJQUFsQjtBQUVBLElBQU1DLEVBQUUsR0FBRyxDQUNUO0FBQ0VDLEVBQUFBLEdBQUcsRUFBRSxLQURQO0FBRUVDLEVBQUFBLEdBQUcsRUFBRSxvQkFGUDtBQUdFQyxFQUFBQSxJQUFJLEVBQ0YseUNBSko7QUFLRUMsRUFBQUEsS0FBSyxFQUFFO0FBTFQsQ0FEUyxFQVFUO0FBQ0VILEVBQUFBLEdBQUcsRUFBRSxLQURQO0FBRUVDLEVBQUFBLEdBQUcsRUFBRSxvQkFGUDtBQUdFQyxFQUFBQSxJQUFJLEVBQ0YseUNBSko7QUFLRUMsRUFBQUEsS0FBSyxFQUFFO0FBTFQsQ0FSUyxFQWVUO0FBQ0VILEVBQUFBLEdBQUcsRUFBRSxLQURQO0FBRUVDLEVBQUFBLEdBQUcsRUFBRSxvQkFGUDtBQUdFQyxFQUFBQSxJQUFJLEVBQ0YseUNBSko7QUFLRUMsRUFBQUEsS0FBSyxFQUFFO0FBTFQsQ0FmUyxFQXNCVDtBQUNFSCxFQUFBQSxHQUFHLEVBQUUsS0FEUDtBQUVFQyxFQUFBQSxHQUFHLEVBQUUsb0JBRlA7QUFHRUMsRUFBQUEsSUFBSSxFQUNGLHlDQUpKO0FBS0VDLEVBQUFBLEtBQUssRUFBRTtBQUxULENBdEJTLEVBNkJUO0FBQ0VILEVBQUFBLEdBQUcsRUFBRSxLQURQO0FBRUVDLEVBQUFBLEdBQUcsRUFBRSxvQkFGUDtBQUdFQyxFQUFBQSxJQUFJLEVBQ0YseUNBSko7QUFLRUMsRUFBQUEsS0FBSyxFQUFFO0FBTFQsQ0E3QlMsQ0FBWDtBQXNDQUMsUUFBUSxDQUFDLE9BQUQsRUFBVSxZQUFNO0FBQ3RCQyxFQUFBQSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQU07QUFDZixRQUFNQyxPQUFPLEdBQUdULFlBQVksQ0FBQ1UsTUFBYixDQUNkLG9CQUFDLEtBQUQ7QUFDRSxNQUFBLFVBQVUsRUFBRVIsRUFEZDtBQUVFLE1BQUEsT0FBTyxFQUFFLENBQ1A7QUFDRVMsUUFBQUEsS0FBSyxFQUFFLEtBRFQ7QUFFRUMsUUFBQUEsU0FBUyxFQUFFLEtBRmI7QUFHRUMsUUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxHQUFEO0FBQUEsaUJBQVNBLEdBQUcsQ0FBQ1QsSUFBYjtBQUFBO0FBSFYsT0FETyxDQUZYO0FBU0UsTUFBQSxnQkFBZ0IsRUFBRTtBQUFBLGVBQU0sS0FBTjtBQUFBO0FBVHBCLE1BRGMsQ0FBaEI7QUFhQVUsSUFBQUEsTUFBTSxDQUFDTixPQUFELENBQU4sQ0FBZ0JPLGVBQWhCO0FBQ0QsR0FmQyxDQUFGO0FBZ0JELENBakJPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uXCJcblxuY29uc3QgZHMgPSBbXG4gIHtcbiAgICBvbmU6IFwi6Zi/6JCo5b63XCIsXG4gICAgdHdvOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIGZvdXI6XG4gICAgICBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIHRocmVlOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICB9LFxuICB7XG4gICAgb25lOiBcIumYv+iQqOW+t1wiLFxuICAgIHR3bzogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICBmb3VyOlxuICAgICAgXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICB0aHJlZTogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgfSxcbiAge1xuICAgIG9uZTogXCLpmL/okKjlvrdcIixcbiAgICB0d286IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgZm91cjpcbiAgICAgIFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgdGhyZWU6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gIH0sXG4gIHtcbiAgICBvbmU6IFwi6Zi/6JCo5b63XCIsXG4gICAgdHdvOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIGZvdXI6XG4gICAgICBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgIHRocmVlOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICB9LFxuICB7XG4gICAgb25lOiBcIumYv+iQqOW+t1wiLFxuICAgIHR3bzogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICBmb3VyOlxuICAgICAgXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICB0aHJlZTogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgfSxcbl1cblxuZGVzY3JpYmUoXCJUYWJsZVwiLCAoKSA9PiB7XG4gIGl0KFwi5b+r54Wn5qC45a+5XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxUYWJsZVxuICAgICAgICBkYXRhU291cmNlPXtkc31cbiAgICAgICAgY29sdW1ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIuWIhue7hOWlvVwiLFxuICAgICAgICAgICAgZGF0YUluZGV4OiBcImFzZFwiLFxuICAgICAgICAgICAgcmVuZGVyOiAocm93KSA9PiByb3cuZm91cixcbiAgICAgICAgICB9LFxuICAgICAgICBdfVxuICAgICAgICBnZXRDZWxsQ2xhc3NOYW1lPXsoKSA9PiBcImFzZFwifVxuICAgICAgLz5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG59KVxuIl19