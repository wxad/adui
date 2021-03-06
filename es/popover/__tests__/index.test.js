import * as React from "react";
import { mount } from "enzyme";
import Popover from "..";
describe("Popover", function () {
  it("Motion 类名是否正确", function () {
    var wrapper0 = mount(React.createElement(Popover, {
      popup: "popup"
    }, "popover"));
    var wrapper1 = mount(React.createElement(Popover, {
      arrowed: false,
      placement: "top",
      popup: "popup"
    }, "popover"));
    var wrapper2 = mount(React.createElement(Popover, {
      arrowed: false,
      placement: "right",
      popup: "popup"
    }, "popover"));
    var wrapper3 = mount(React.createElement(Popover, {
      arrowed: false,
      placement: "bottom",
      popup: "popup"
    }, "popover"));
    var wrapper4 = mount(React.createElement(Popover, {
      arrowed: false,
      placement: "left",
      popup: "popup"
    }, "popover"));
    expect(wrapper0.find("Tooltip").props().popupTransitionName).toBe("zoom-big-fast");
    expect(wrapper1.find("Tooltip").props().popupTransitionName).toBe("slide-down");
    expect(wrapper2.find("Tooltip").props().popupTransitionName).toBe("slide-left");
    expect(wrapper3.find("Tooltip").props().popupTransitionName).toBe("slide-up");
    expect(wrapper4.find("Tooltip").props().popupTransitionName).toBe("slide-right");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJtb3VudCIsIlBvcG92ZXIiLCJkZXNjcmliZSIsIml0Iiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsIndyYXBwZXIyIiwid3JhcHBlcjMiLCJ3cmFwcGVyNCIsImV4cGVjdCIsImZpbmQiLCJwcm9wcyIsInBvcHVwVHJhbnNpdGlvbk5hbWUiLCJ0b0JlIl0sIm1hcHBpbmdzIjoiQUFLQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLFFBQXRCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixJQUFwQjtBQUVBQyxRQUFRLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDeEJDLEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVBQWtCLFlBQU07QUFDeEIsUUFBTUMsUUFBUSxHQUFHSixLQUFLLENBQUMsb0JBQUMsT0FBRDtBQUFTLE1BQUEsS0FBSyxFQUFDO0FBQWYsaUJBQUQsQ0FBdEI7QUFDQSxRQUFNSyxRQUFRLEdBQUdMLEtBQUssQ0FDcEIsb0JBQUMsT0FBRDtBQUFTLE1BQUEsT0FBTyxFQUFFLEtBQWxCO0FBQXlCLE1BQUEsU0FBUyxFQUFDLEtBQW5DO0FBQXlDLE1BQUEsS0FBSyxFQUFDO0FBQS9DLGlCQURvQixDQUF0QjtBQUtBLFFBQU1NLFFBQVEsR0FBR04sS0FBSyxDQUNwQixvQkFBQyxPQUFEO0FBQVMsTUFBQSxPQUFPLEVBQUUsS0FBbEI7QUFBeUIsTUFBQSxTQUFTLEVBQUMsT0FBbkM7QUFBMkMsTUFBQSxLQUFLLEVBQUM7QUFBakQsaUJBRG9CLENBQXRCO0FBS0EsUUFBTU8sUUFBUSxHQUFHUCxLQUFLLENBQ3BCLG9CQUFDLE9BQUQ7QUFBUyxNQUFBLE9BQU8sRUFBRSxLQUFsQjtBQUF5QixNQUFBLFNBQVMsRUFBQyxRQUFuQztBQUE0QyxNQUFBLEtBQUssRUFBQztBQUFsRCxpQkFEb0IsQ0FBdEI7QUFLQSxRQUFNUSxRQUFRLEdBQUdSLEtBQUssQ0FDcEIsb0JBQUMsT0FBRDtBQUFTLE1BQUEsT0FBTyxFQUFFLEtBQWxCO0FBQXlCLE1BQUEsU0FBUyxFQUFDLE1BQW5DO0FBQTBDLE1BQUEsS0FBSyxFQUFDO0FBQWhELGlCQURvQixDQUF0QjtBQUtBUyxJQUFBQSxNQUFNLENBQUNMLFFBQVEsQ0FBQ00sSUFBVCxDQUFjLFNBQWQsRUFBeUJDLEtBQXpCLEdBQWlDQyxtQkFBbEMsQ0FBTixDQUE2REMsSUFBN0QsQ0FDRSxlQURGO0FBR0FKLElBQUFBLE1BQU0sQ0FBQ0osUUFBUSxDQUFDSyxJQUFULENBQWMsU0FBZCxFQUF5QkMsS0FBekIsR0FBaUNDLG1CQUFsQyxDQUFOLENBQTZEQyxJQUE3RCxDQUNFLFlBREY7QUFHQUosSUFBQUEsTUFBTSxDQUFDSCxRQUFRLENBQUNJLElBQVQsQ0FBYyxTQUFkLEVBQXlCQyxLQUF6QixHQUFpQ0MsbUJBQWxDLENBQU4sQ0FBNkRDLElBQTdELENBQ0UsWUFERjtBQUdBSixJQUFBQSxNQUFNLENBQUNGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLFNBQWQsRUFBeUJDLEtBQXpCLEdBQWlDQyxtQkFBbEMsQ0FBTixDQUE2REMsSUFBN0QsQ0FDRSxVQURGO0FBR0FKLElBQUFBLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDRSxJQUFULENBQWMsU0FBZCxFQUF5QkMsS0FBekIsR0FBaUNDLG1CQUFsQyxDQUFOLENBQTZEQyxJQUE3RCxDQUNFLGFBREY7QUFHRCxHQXJDQyxDQUFGO0FBc0NELENBdkNPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBvcG92ZXIg5piv5Z+65LqOIFRvb2x0aXAg6L+b6KGM5bCB6KOF55qE44CCXG4gKiDpmaTpnZ7kuI4gUG9wb3ZlciDnm7jlhbPvvIzlkKbliJnmtYvor5XnlKjkvovpg73lupTlnKggVG9vbHRpcCDkuIvjgIJcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLlwiXG5cbmRlc2NyaWJlKFwiUG9wb3ZlclwiLCAoKSA9PiB7XG4gIGl0KFwiTW90aW9uIOexu+WQjeaYr+WQpuato+ehrlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8UG9wb3ZlciBwb3B1cD1cInBvcHVwXCI+cG9wb3ZlcjwvUG9wb3Zlcj4pXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudChcbiAgICAgIDxQb3BvdmVyIGFycm93ZWQ9e2ZhbHNlfSBwbGFjZW1lbnQ9XCJ0b3BcIiBwb3B1cD1cInBvcHVwXCI+XG4gICAgICAgIHBvcG92ZXJcbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gICAgY29uc3Qgd3JhcHBlcjIgPSBtb3VudChcbiAgICAgIDxQb3BvdmVyIGFycm93ZWQ9e2ZhbHNlfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHBvcHVwPVwicG9wdXBcIj5cbiAgICAgICAgcG9wb3ZlclxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgICBjb25zdCB3cmFwcGVyMyA9IG1vdW50KFxuICAgICAgPFBvcG92ZXIgYXJyb3dlZD17ZmFsc2V9IHBsYWNlbWVudD1cImJvdHRvbVwiIHBvcHVwPVwicG9wdXBcIj5cbiAgICAgICAgcG9wb3ZlclxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgICBjb25zdCB3cmFwcGVyNCA9IG1vdW50KFxuICAgICAgPFBvcG92ZXIgYXJyb3dlZD17ZmFsc2V9IHBsYWNlbWVudD1cImxlZnRcIiBwb3B1cD1cInBvcHVwXCI+XG4gICAgICAgIHBvcG92ZXJcbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIwLmZpbmQoXCJUb29sdGlwXCIpLnByb3BzKCkucG9wdXBUcmFuc2l0aW9uTmFtZSkudG9CZShcbiAgICAgIFwiem9vbS1iaWctZmFzdFwiXG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiVG9vbHRpcFwiKS5wcm9wcygpLnBvcHVwVHJhbnNpdGlvbk5hbWUpLnRvQmUoXG4gICAgICBcInNsaWRlLWRvd25cIlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjIuZmluZChcIlRvb2x0aXBcIikucHJvcHMoKS5wb3B1cFRyYW5zaXRpb25OYW1lKS50b0JlKFxuICAgICAgXCJzbGlkZS1sZWZ0XCJcbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIzLmZpbmQoXCJUb29sdGlwXCIpLnByb3BzKCkucG9wdXBUcmFuc2l0aW9uTmFtZSkudG9CZShcbiAgICAgIFwic2xpZGUtdXBcIlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjQuZmluZChcIlRvb2x0aXBcIikucHJvcHMoKS5wb3B1cFRyYW5zaXRpb25OYW1lKS50b0JlKFxuICAgICAgXCJzbGlkZS1yaWdodFwiXG4gICAgKVxuICB9KVxufSlcbiJdfQ==