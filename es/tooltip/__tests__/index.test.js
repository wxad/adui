import * as React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import Tooltip from "..";
describe("Tooltip", function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  it("是否能内部驱动", function () {
    var wrapper = mount(React.createElement(Tooltip, {
      alignEdge: true,
      placement: "top",
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0,
      popup: React.createElement("div", {
        id: "popup"
      }, "popup")
    }, React.createElement("div", {
      id: "children"
    }, "children")));
    var child = wrapper.find("#children").at(0);
    child.simulate("mouseenter");
    expect(wrapper.find("Trigger").at(0).props().popupVisible).toBe(true);
    child.simulate("mouseleave");
    expect(wrapper.find("Trigger").at(0).props().popupVisible).toBe(false);
  });
});
describe("Tooltip 测试 handlePopupAlign - Top", function () {
  beforeEach(function () {
    jest.useFakeTimers();
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: 120,
        height: 120,
        top: -10,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: -10,
        toJSON: function toJSON() {}
      };
    });
  });
  it("是否处理 PopupAlign", function () {
    document.body.innerHTML = '<div id="mounter" />';
    var wrapper = mount(React.createElement(Tooltip, {
      test: true,
      visible: true,
      placement: "top",
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0,
      popup: "popup"
    }, React.createElement("div", {
      id: "children"
    }, "children")), {
      attachTo: document.getElementById("mounter")
    });
    document.body.scrollTop = 0;
    var child = wrapper.find("#children").at(0);
    act(function () {
      child.simulate("mouseenter");
      jest.runAllTimers();
      wrapper.update();
    });
    expect(wrapper.find("PopTrigger").at(0).props().popupPlacement).toBe("bottom");
  });
});
describe("Tooltip 测试 handlePopupAlign - Bottom", function () {
  beforeEach(function () {
    jest.useFakeTimers();
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: 120,
        height: 120,
        top: 1000,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 1000,
        toJSON: function toJSON() {}
      };
    });
  });
  it("是否处理 PopupAlign", function () {
    document.body.innerHTML = '<div id="mounter" />';
    var wrapper = mount(React.createElement(Tooltip, {
      test: true,
      visible: true,
      placement: "bottom",
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0,
      popup: "popup"
    }, React.createElement("div", {
      id: "children"
    }, "children")), {
      attachTo: document.getElementById("mounter")
    });
    document.body.scrollTop = 0;
    var child = wrapper.find("#children").at(0);
    act(function () {
      child.simulate("mouseenter");
      jest.runAllTimers();
      wrapper.update();
    });
    expect(wrapper.find("PopTrigger").at(0).props().popupPlacement).toBe("top");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdG9vbHRpcC9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJhY3QiLCJtb3VudCIsIlRvb2x0aXAiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJqZXN0IiwidXNlRmFrZVRpbWVycyIsImFmdGVyRWFjaCIsInVzZVJlYWxUaW1lcnMiLCJpdCIsIndyYXBwZXIiLCJjaGlsZCIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwiZXhwZWN0IiwicHJvcHMiLCJwb3B1cFZpc2libGUiLCJ0b0JlIiwiRWxlbWVudCIsInByb3RvdHlwZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZuIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJ4IiwieSIsInRvSlNPTiIsImRvY3VtZW50IiwiYm9keSIsImlubmVySFRNTCIsImF0dGFjaFRvIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJydW5BbGxUaW1lcnMiLCJ1cGRhdGUiLCJwb3B1cFBsYWNlbWVudCJdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsU0FBU0MsR0FBVCxRQUFvQixzQkFBcEI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLFFBQXRCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixJQUFwQjtBQUVBQyxRQUFRLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDeEJDLEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZDLElBQUFBLElBQUksQ0FBQ0MsYUFBTDtBQUNELEdBRlMsQ0FBVjtBQUlBQyxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkRixJQUFBQSxJQUFJLENBQUNHLGFBQUw7QUFDRCxHQUZRLENBQVQ7QUFJQUMsRUFBQUEsRUFBRSxDQUFDLFNBQUQsRUFBWSxZQUFNO0FBQ2xCLFFBQU1DLE9BQU8sR0FBR1QsS0FBSyxDQUNuQixvQkFBQyxPQUFEO0FBQ0UsTUFB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Q0FEbUIsRUFXbkI7QUFBRWtDLE1BQUFBLFFBQVEsRUFBRUgsUUFBUSxDQUFDSSxjQUFULENBQXdCLFNBQXhCO0FBQVosS0FYbUIsQ0FBckI7QUFhQUosSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNJLFNBQWQsR0FBMEIsQ0FBMUI7QUFDQSxRQUFNMUIsS0FBSyxHQUFHRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxXQUFiLEVBQTBCQyxFQUExQixDQUE2QixDQUE3QixDQUFkO0FBQ0FiLElBQUFBLEdBQUcsQ0FBQyxZQUFNO0FBQ1JXLE1BQUFBLEtBQUssQ0FBQ0csUUFBTixDQUFlLFlBQWY7QUFFQVQsTUFBQUEsSUFBSSxDQUFDaUMsWUFBTDtBQUlBNUIsTUFBQUEsT0FBTyxDQUFDNkIsTUFBUjtBQUNELEtBUkUsQ0FBSDtBQVVBeEIsSUFBQUEsTUFBTSxDQUNKTCxPQUFPLENBQ0pFLElBREgsQ0FDUSxZQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dHLEtBSEgsR0FHV3dCLGNBSlAsQ0FBTixDQUtFdEIsSUFMRixDQUtPLEtBTFA7QUFNRCxHQWpDQyxDQUFGO0FBa0NELENBekRPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBUb29sdGlwIOaYr+WfuuS6jiBQb3BUcmlnZ2VyIOi/m+ihjOWwgeijheeahOOAglxuICog6Zmk6Z2e5LiOIFRvb2x0aXAg55u45YWz77yM5ZCm5YiZ5rWL6K+V55So5L6L6YO95bqU5ZyoIFBvcFRyaWdnZXIg5LiL44CCXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBhY3QgfSBmcm9tIFwicmVhY3QtZG9tL3Rlc3QtdXRpbHNcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuLlwiXG5cbmRlc2NyaWJlKFwiVG9vbHRpcFwiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZVJlYWxUaW1lcnMoKVxuICB9KVxuXG4gIGl0KFwi5piv5ZCm6IO95YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICBhbGlnbkVkZ2VcbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgbW91c2VFbnRlckRlbGF5PXswfVxuICAgICAgICBtb3VzZUxlYXZlRGVsYXk9ezB9XG4gICAgICAgIHBvcHVwPXs8ZGl2IGlkPVwicG9wdXBcIj5wb3B1cDwvZGl2Pn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBpZD1cImNoaWxkcmVuXCI+Y2hpbGRyZW48L2Rpdj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApXG4gICAgY29uc3QgY2hpbGQgPSB3cmFwcGVyLmZpbmQoXCIjY2hpbGRyZW5cIikuYXQoMClcbiAgICBjaGlsZC5zaW11bGF0ZShcIm1vdXNlZW50ZXJcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKCkucG9wdXBWaXNpYmxlXG4gICAgKS50b0JlKHRydWUpXG4gICAgY2hpbGQuc2ltdWxhdGUoXCJtb3VzZWxlYXZlXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnBvcHVwVmlzaWJsZVxuICAgICkudG9CZShmYWxzZSlcbiAgfSlcbn0pXG5cbmRlc2NyaWJlKFwiVG9vbHRpcCDmtYvor5UgaGFuZGxlUG9wdXBBbGlnbiAtIFRvcFwiLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGplc3QudXNlRmFrZVRpbWVycygpXG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDAwMDY2NjNcbiAgICAgKiDpgJrov4cgbW9jayBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YO+8jOS5i+WQjui/kOihjOeahOaJgOaciSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCDpg73kvJrov5Tlm57ov5nlkIzkuIDkuKrlgLzjgIJcbiAgICAgKi9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSBqZXN0LmZuKCgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiAxMjAsXG4gICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgICB0b3A6IC0xMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogLTEwLFxuICAgICAgICB0b0pTT046ICgpID0+IHt9LFxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKblpITnkIYgUG9wdXBBbGlnblwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGRpdiBpZD1cIm1vdW50ZXJcIiAvPidcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICB0ZXN0XG4gICAgICAgIHZpc2libGVcbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgbW91c2VFbnRlckRlbGF5PXswfVxuICAgICAgICBtb3VzZUxlYXZlRGVsYXk9ezB9XG4gICAgICAgIHBvcHVwPVwicG9wdXBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRyZW5cIj5jaGlsZHJlbjwvZGl2PlxuICAgICAgPC9Ub29sdGlwPixcbiAgICAgIHsgYXR0YWNoVG86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW91bnRlclwiKSB9XG4gICAgKVxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIGNvbnN0IGNoaWxkID0gd3JhcHBlci5maW5kKFwiI2NoaWxkcmVuXCIpLmF0KDApXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIGNoaWxkLnNpbXVsYXRlKFwibW91c2VlbnRlclwiKVxuICAgICAgLy8gamVzdCBydW5BbGxUaW1lcnMg5piv5Li65LqG6Kem5Y+RIFRvb2x0aXAg5YaF55qEIHNldFRpbWVvdXQgMFxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgLy8g5b+F6aG75omn6KGMIHdyYXBwZXIudXBkYXRlIOWQpuWImeaLv+WIsOeahCBwcm9wIOi/mOaYr+aXp+eahFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VuenltZWpzL2VuenltZSNyZWFjdC1ob29rcy1zdXBwb3J0XG4gICAgICAvLyDooYDnmoTmlZnorq1cbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlBvcFRyaWdnZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnBvcHVwUGxhY2VtZW50XG4gICAgKS50b0JlKFwiYm90dG9tXCIpXG4gIH0pXG59KVxuXG5kZXNjcmliZShcIlRvb2x0aXAg5rWL6K+VIGhhbmRsZVBvcHVwQWxpZ24gLSBCb3R0b21cIiwgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwMDA2NjYzXG4gICAgICog6YCa6L+HIG1vY2sgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGDvvIzkuYvlkI7ov5DooYznmoTmiYDmnIkgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAg6YO95Lya6L+U5Zue6L+Z5ZCM5LiA5Liq5YC844CCXG4gICAgICovXG4gICAgRWxlbWVudC5wcm90b3R5cGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID0gamVzdC5mbigoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICBoZWlnaHQ6IDEyMCxcbiAgICAgICAgdG9wOiAxMDAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAxMDAwLFxuICAgICAgICB0b0pTT046ICgpID0+IHt9LFxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgaXQoXCLmmK/lkKblpITnkIYgUG9wdXBBbGlnblwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnPGRpdiBpZD1cIm1vdW50ZXJcIiAvPidcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICB0ZXN0XG4gICAgICAgIHZpc2libGVcbiAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgbW91c2VFbnRlckRlbGF5PXswfVxuICAgICAgICBtb3VzZUxlYXZlRGVsYXk9ezB9XG4gICAgICAgIHBvcHVwPVwicG9wdXBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGlkPVwiY2hpbGRyZW5cIj5jaGlsZHJlbjwvZGl2PlxuICAgICAgPC9Ub29sdGlwPixcbiAgICAgIHsgYXR0YWNoVG86IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW91bnRlclwiKSB9XG4gICAgKVxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIGNvbnN0IGNoaWxkID0gd3JhcHBlci5maW5kKFwiI2NoaWxkcmVuXCIpLmF0KDApXG4gICAgYWN0KCgpID0+IHtcbiAgICAgIGNoaWxkLnNpbXVsYXRlKFwibW91c2VlbnRlclwiKVxuICAgICAgLy8gamVzdCBydW5BbGxUaW1lcnMg5piv5Li65LqG6Kem5Y+RIFRvb2x0aXAg5YaF55qEIHNldFRpbWVvdXQgMFxuICAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAgICAgLy8g5b+F6aG75omn6KGMIHdyYXBwZXIudXBkYXRlIOWQpuWImeaLv+WIsOeahCBwcm9wIOi/mOaYr+aXp+eahFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VuenltZWpzL2VuenltZSNyZWFjdC1ob29rcy1zdXBwb3J0XG4gICAgICAvLyDooYDnmoTmlZnorq1cbiAgICAgIHdyYXBwZXIudXBkYXRlKClcbiAgICB9KVxuXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcIlBvcFRyaWdnZXJcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpLnBvcHVwUGxhY2VtZW50XG4gICAgKS50b0JlKFwidG9wXCIpXG4gIH0pXG59KVxuIl19