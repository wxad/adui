import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Card from '..';
describe("Card", function () {
  it("Card 是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(Card, null, React.createElement(Card.Header, {
      title: "title",
      subTitle: "title"
    }, "children"), "children"));
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2FyZC9fX3Rlc3RzX18vY2FyZC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlRlc3RSZW5kZXJlciIsIkNhcmQiLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixxQkFBekI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLElBQWpCO0FBRUFDLFFBQVEsQ0FBQyxNQUFELEVBQVMsWUFBTTtBQUNyQkMsRUFBQUEsRUFBRSxDQUFDLGFBQUQsRUFBZ0IsWUFBTTtBQUN0QixRQUFNQyxPQUFPLEdBQUdKLFlBQVksQ0FBQ0ssTUFBYixDQUNkLG9CQUFDLElBQUQsUUFDRSxvQkFBQyxJQUFELENBQU0sTUFBTjtBQUNFLE1BQUEsS0FBSyxFQUFDLE9BRFI7QUFFRSxNQUFBLFFBQVEsRUFBQztBQUZYLGtCQURGLGFBRGMsQ0FBaEI7QUFXQUMsSUFBQUEsTUFBTSxDQUFDRixPQUFELENBQU4sQ0FBZ0JHLGVBQWhCO0FBQ0QsR0FiQyxDQUFGO0FBY0QsQ0FmTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInXG5pbXBvcnQgQ2FyZCBmcm9tICcuLidcblxuZGVzY3JpYmUoXCJDYXJkXCIsICgpID0+IHtcbiAgaXQoXCJDYXJkIOaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8Q2FyZD5cbiAgICAgICAgPENhcmQuSGVhZGVyXG4gICAgICAgICAgdGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgICAgc3ViVGl0bGU9XCJ0aXRsZVwiXG4gICAgICAgID5cbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICBjaGlsZHJlblxuICAgICAgPC9DYXJkPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbn0pXG4iXX0=