import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '..';
describe("Button", function () {
  it("是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(Button, {
      leftIcon: "add",
      rightIcon: "tick"
    }, "\u6309\u94AE"));
    expect(wrapper).toMatchSnapshot();
  });
  it("是否支持 link button", function () {
    var wrapper = TestRenderer.create(React.createElement(Button, {
      target: "_blank",
      href: "https://ad.weixin.qq.com"
    }, "link button"));
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlRlc3RSZW5kZXJlciIsIkJ1dHRvbiIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHFCQUF6QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsSUFBbkI7QUFFQUMsUUFBUSxDQUFDLFFBQUQsRUFBVyxZQUFNO0FBQ3ZCQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHSixZQUFZLENBQUNLLE1BQWIsQ0FDZCxvQkFBQyxNQUFEO0FBQ0UsTUFBQSxRQUFRLEVBQUMsS0FEWDtBQUVFLE1BQUEsU0FBUyxFQUFDO0FBRlosc0JBRGMsQ0FBaEI7QUFRQUMsSUFBQUEsTUFBTSxDQUFDRixPQUFELENBQU4sQ0FBZ0JHLGVBQWhCO0FBQ0QsR0FWQyxDQUFGO0FBWUFKLEVBQUFBLEVBQUUsQ0FBQyxrQkFBRCxFQUFxQixZQUFNO0FBQzNCLFFBQU1DLE9BQU8sR0FBR0osWUFBWSxDQUFDSyxNQUFiLENBQ2Qsb0JBQUMsTUFBRDtBQUNFLE1BQUEsTUFBTSxFQUFDLFFBRFQ7QUFFRSxNQUFBLElBQUksRUFBQztBQUZQLHFCQURjLENBQWhCO0FBUUFDLElBQUFBLE1BQU0sQ0FBQ0YsT0FBRCxDQUFOLENBQWdCRyxlQUFoQjtBQUNELEdBVkMsQ0FBRjtBQVdELENBeEJPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4nXG5cbmRlc2NyaWJlKFwiQnV0dG9uXCIsICgpID0+IHtcbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBsZWZ0SWNvbj1cImFkZFwiXG4gICAgICAgIHJpZ2h0SWNvbj1cInRpY2tcIlxuICAgICAgPlxuICAgICAgICDmjInpkq5cbiAgICAgIDwvQnV0dG9uPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIuaYr+WQpuaUr+aMgSBsaW5rIGJ1dHRvblwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGhyZWY9XCJodHRwczovL2FkLndlaXhpbi5xcS5jb21cIlxuICAgICAgPlxuICAgICAgICBsaW5rIGJ1dHRvblxuICAgICAgPC9CdXR0b24+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxufSlcbiJdfQ==