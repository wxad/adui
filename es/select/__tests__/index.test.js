import * as React from "react";
import { mount } from "enzyme";
import Select from "..";
var Option = Select.Option;
describe("Select", function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    jest.useRealTimers();
  });
  it("Select 是否正确渲染", function () {
    var wrapper = mount(React.createElement(Select, null));
    expect(wrapper).toMatchSnapshot();
  });
  it("Select 是否能内部驱动", function () {
    var wrapper = mount(React.createElement(Select, {
      defaultOpen: true,
      defaultValue: 2,
      style: {
        width: "120px"
      }
    }, React.createElement(Option, {
      value: 1
    }, "\u670B\u53CB\u5708"), React.createElement(Option, {
      value: 2
    }, "\u516C\u4F17\u53F7")));
    var dropdownWrapper = mount(wrapper.find("Trigger").instance().getComponent());
    expect(dropdownWrapper.props().visible).toBe(true);
    dropdownWrapper.find(".adui-select-item-option").at(0).simulate("click");
    dropdownWrapper = mount(wrapper.find("Trigger").instance().getComponent());
    expect(wrapper.state().value).toBe(1);
    expect(dropdownWrapper.props().visible).toBe(false);
  });
  it("Select 是否受外部控制", function () {
    var onSelect = jest.fn();
    var wrapper = mount(React.createElement(Select, {
      open: true,
      value: 2,
      style: {
        width: "120px"
      },
      onSelect: onSelect
    }, React.createElement(Option, {
      value: 1
    }, "\u670B\u53CB\u5708"), React.createElement(Option, {
      value: 2
    }, "\u516C\u4F17\u53F7")));
    var dropdownWrapper = mount(wrapper.find("Trigger").instance().getComponent());
    expect(wrapper.state().value).toBe(2);
    expect(dropdownWrapper.props().visible).toBe(true);
    dropdownWrapper.find(".adui-select-item-option").at(0).simulate("click");
    dropdownWrapper = mount(wrapper.find("Trigger").instance().getComponent());
    expect(wrapper.state().value).toBe(2);
    expect(dropdownWrapper.props().visible).toBe(true);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdW50IiwiU2VsZWN0IiwiT3B0aW9uIiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiamVzdCIsInVzZUZha2VUaW1lcnMiLCJhZnRlckVhY2giLCJ1c2VSZWFsVGltZXJzIiwiaXQiLCJ3cmFwcGVyIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwid2lkdGgiLCJkcm9wZG93bldyYXBwZXIiLCJmaW5kIiwiaW5zdGFuY2UiLCJnZXRDb21wb25lbnQiLCJwcm9wcyIsInZpc2libGUiLCJ0b0JlIiwiYXQiLCJzaW11bGF0ZSIsInN0YXRlIiwidmFsdWUiLCJvblNlbGVjdCIsImZuIl0sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLFFBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixJQUFuQjtJQUdRQyxNLEdBQVdELE0sQ0FBWEMsTTtBQU1SQyxRQUFRLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDdkJDLEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZDLElBQUFBLElBQUksQ0FBQ0MsYUFBTDtBQVNELEdBVlMsQ0FBVjtBQVlBQyxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkRixJQUFBQSxJQUFJLENBQUNHLGFBQUw7QUFDRCxHQUZRLENBQVQ7QUFJQUMsRUFBQUEsRUFBRSxDQUFDLGVBQUQsRUFBa0IsWUFBTTtBQUN4QixRQUFNQyxPQUFPLEdBQUdWLEtBQUssQ0FBQyxvQkFBQyxNQUFELE9BQUQsQ0FBckI7QUFDQVcsSUFBQUEsTUFBTSxDQUFDRCxPQUFELENBQU4sQ0FBZ0JFLGVBQWhCO0FBQ0QsR0FIQyxDQUFGO0FBS0FILEVBQUFBLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixZQUFNO0FBQ3pCLFFBQU1DLE9BQU8sR0FBR1YsS0FBSyxDQUNuQixvQkFB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Y2hlY2tcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi5cIlxuaW1wb3J0IHsgYWN0IH0gZnJvbSBcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCJcblxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdFxuXG5leHBvcnQgaW50ZXJmYWNlIElFbGVtZW50UHJvdG8ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZGVzY3JpYmUoXCJTZWxlY3RcIiwgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBqZXN0LnVzZUZha2VUaW1lcnMoKVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwMDA2NjYzXG4gICAgICog6YCa6L+HIG1vY2sgYGdldFBvcHVwRE9NTm9kZWDvvIzkuYvlkI7ov5DooYznmoTmiYDmnIkgYGdldFBvcHVwRE9NTm9kZWAg6YO95Lya6L+U5Zue6L+Z5ZCM5LiA5Liq5YC844CCXG4gICAgICovXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuZ2V0UG9wdXBET01Ob2RlID0gamVzdC5mbigoKSA9PiB7XG4gICAgLy8gcmV0dXJuIFwiYXNkXCJcbiAgICAvLyB9KVxuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgamVzdC51c2VSZWFsVGltZXJzKClcbiAgfSlcblxuICBpdChcIlNlbGVjdCDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8U2VsZWN0IC8+KVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwiU2VsZWN0IOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFNlbGVjdCBkZWZhdWx0T3BlbiBkZWZhdWx0VmFsdWU9ezJ9IHN0eWxlPXt7IHdpZHRoOiBcIjEyMHB4XCIgfX0+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9ezF9Puaci+WPi+WciDwvT3B0aW9uPlxuICAgICAgICA8T3B0aW9uIHZhbHVlPXsyfT7lhazkvJflj7c8L09wdGlvbj5cbiAgICAgIDwvU2VsZWN0PlxuICAgIClcbiAgICBsZXQgZHJvcGRvd25XcmFwcGVyID0gbW91bnQoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KClcbiAgICApXG4gICAgZXhwZWN0KGRyb3Bkb3duV3JhcHBlci5wcm9wcygpLnZpc2libGUpLnRvQmUodHJ1ZSlcbiAgICBkcm9wZG93bldyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktc2VsZWN0LWl0ZW0tb3B0aW9uXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8g6ZyA6KaB6YeN5paw6I635Y+WXG4gICAgZHJvcGRvd25XcmFwcGVyID0gbW91bnQoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KClcbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIuc3RhdGUoKS52YWx1ZSkudG9CZSgxKVxuICAgIGV4cGVjdChkcm9wZG93bldyYXBwZXIucHJvcHMoKS52aXNpYmxlKS50b0JlKGZhbHNlKVxuICB9KVxuXG4gIGl0KFwiU2VsZWN0IOaYr+WQpuWPl+WklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3QgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8U2VsZWN0IG9wZW4gdmFsdWU9ezJ9IHN0eWxlPXt7IHdpZHRoOiBcIjEyMHB4XCIgfX0gb25TZWxlY3Q9e29uU2VsZWN0fT5cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17MX0+5pyL5Y+L5ZyIPC9PcHRpb24+XG4gICAgICAgIDxPcHRpb24gdmFsdWU9ezJ9PuWFrOS8l+WPtzwvT3B0aW9uPlxuICAgICAgPC9TZWxlY3Q+XG4gICAgKVxuICAgIGxldCBkcm9wZG93bldyYXBwZXIgPSBtb3VudChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJUcmlnZ2VyXCIpXG4gICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgIC5nZXRDb21wb25lbnQoKVxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlci5zdGF0ZSgpLnZhbHVlKS50b0JlKDIpXG4gICAgZXhwZWN0KGRyb3Bkb3duV3JhcHBlci5wcm9wcygpLnZpc2libGUpLnRvQmUodHJ1ZSlcbiAgICBkcm9wZG93bldyYXBwZXJcbiAgICAgIC5maW5kKFwiLmFkdWktc2VsZWN0LWl0ZW0tb3B0aW9uXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgLy8g6ZyA6KaB6YeN5paw6I635Y+WXG4gICAgZHJvcGRvd25XcmFwcGVyID0gbW91bnQoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAgICAgICAuaW5zdGFuY2UoKVxuICAgICAgICAuZ2V0Q29tcG9uZW50KClcbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIuc3RhdGUoKS52YWx1ZSkudG9CZSgyKVxuICAgIGV4cGVjdChkcm9wZG93bldyYXBwZXIucHJvcHMoKS52aXNpYmxlKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgLy8gaXQoXCLlsIHoo4XnmoTmkJzntKLmmK/lkKblj6/nlKhcIiwgKCkgPT4ge1xuICAvLyAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJzxkaXYgaWQ9XCJtb3VudGVyXCIgLz4nXG4gIC8vICAgY29uc3Qgb25TZWxlY3QgPSBqZXN0LmZuKClcbiAgLy8gICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gIC8vICAgICA8U2VsZWN0XG4gIC8vICAgICAgIG9wZW5cbiAgLy8gICAgICAgdmFsdWU9e251bGx9XG4gIC8vICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyMHB4XCIgfX1cbiAgLy8gICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAvLyAgICAgICBzZWFyY2hhYmxlXG4gIC8vICAgICA+XG4gIC8vICAgICAgIDxPcHRpb24gdmFsdWU9ezF9PnBlbmd5b3VxdWFuPC9PcHRpb24+XG4gIC8vICAgICAgIDxPcHRpb24gdmFsdWU9ezJ9Pmdvbmd6aG9uZ2hhbzwvT3B0aW9uPlxuICAvLyAgICAgPC9TZWxlY3Q+LFxuICAvLyAgICAgeyBhdHRhY2hUbzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3VudGVyXCIpIH1cbiAgLy8gICApXG4gIC8vICAgbGV0IGRyb3Bkb3duV3JhcHBlciA9IG1vdW50KFxuICAvLyAgICAgd3JhcHBlclxuICAvLyAgICAgICAuZmluZChcIlRyaWdnZXJcIilcbiAgLy8gICAgICAgLmluc3RhbmNlKClcbiAgLy8gICAgICAgLmdldENvbXBvbmVudCgpXG4gIC8vICAgKVxuICAvLyAgIGNvbnN0IGlucHV0ID0gZHJvcGRvd25XcmFwcGVyLmZpbmQoXCJpbnB1dFwiKVxuICAvLyAgIGFjdCgoKSA9PiB7XG4gIC8vICAgICBpbnB1dC5zaW11bGF0ZShcIm1vdXNlZG93blwiKVxuICAvLyAgICAgaW5wdXQuc2ltdWxhdGUoXCJtb3VzZXVwXCIpXG4gIC8vICAgICBpbnB1dC5zaW11bGF0ZShcImtleWRvd25cIiwgeyBrZXk6IFwielwiLCBrZXlDb2RlOiA5MCB9KVxuICAvLyAgICAgaW5wdXQuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwielwiIH0gfSlcbiAgLy8gICAgIC8qKlxuICAvLyAgICAgICogcnVuQWxsVGltZXJzIOa1i+ivlSBTZWxlY3QucHJldmVudFZpc2libGVDaGFuZ2VcbiAgLy8gICAgICAqL1xuICAvLyAgICAgamVzdC5ydW5BbGxUaW1lcnMoKVxuICAvLyAgICAgd3JhcHBlci51cGRhdGUoKVxuICAvLyAgICAgLy8g6ZyA6KaB6YeN5paw6I635Y+WXG4gIC8vICAgICBkcm9wZG93bldyYXBwZXIgPSBtb3VudChcbiAgLy8gICAgICAgd3JhcHBlclxuICAvLyAgICAgICAgIC5maW5kKFwiVHJpZ2dlclwiKVxuICAvLyAgICAgICAgIC5pbnN0YW5jZSgpXG4gIC8vICAgICAgICAgLmdldENvbXBvbmVudCgpXG4gIC8vICAgICApXG4gIC8vICAgICBjb25zb2xlLmxvZyhkcm9wZG93bldyYXBwZXIuZmluZChcImlucHV0XCIpLmF0KDApLnByb3BzKCksIFwieWlqaWVcIilcbiAgLy8gICAgIGV4cGVjdChcbiAgLy8gICAgICAgZHJvcGRvd25XcmFwcGVyXG4gIC8vICAgICAgICAgLmZpbmQoXCIuYWR1aS1zZWxlY3QtaXRlbS1vcHRpb25cIilcbiAgLy8gICAgICAgICAuYXQoMClcbiAgLy8gICAgICAgICAudGV4dCgpXG4gIC8vICAgICApLnRvQmUoXCJnb25nemhvbmdoYW9cIilcbiAgLy8gICAgIGRyb3Bkb3duV3JhcHBlclxuICAvLyAgICAgICAuZmluZChcIi5hZHVpLXNlbGVjdC1pdGVtLW9wdGlvblwiKVxuICAvLyAgICAgICAuYXQoMClcbiAgLy8gICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgLy8gICB9KVxuICAvLyB9KVxufSlcbiJdfQ==