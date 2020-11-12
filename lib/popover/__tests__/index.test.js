"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Popover", function () {
  it("Motion 类名是否正确", function () {
    var wrapper0 = (0, _enzyme.mount)(React.createElement(_["default"], {
      popup: "popup"
    }, "popover"));
    var wrapper1 = (0, _enzyme.mount)(React.createElement(_["default"], {
      arrowed: false,
      placement: "top",
      popup: "popup"
    }, "popover"));
    var wrapper2 = (0, _enzyme.mount)(React.createElement(_["default"], {
      arrowed: false,
      placement: "right",
      popup: "popup"
    }, "popover"));
    var wrapper3 = (0, _enzyme.mount)(React.createElement(_["default"], {
      arrowed: false,
      placement: "bottom",
      popup: "popup"
    }, "popover"));
    var wrapper4 = (0, _enzyme.mount)(React.createElement(_["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIwIiwid3JhcHBlcjEiLCJ3cmFwcGVyMiIsIndyYXBwZXIzIiwid3JhcHBlcjQiLCJleHBlY3QiLCJmaW5kIiwicHJvcHMiLCJwb3B1cFRyYW5zaXRpb25OYW1lIiwidG9CZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUtBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBQSxRQUFRLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDeEJDLEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVBQWtCLFlBQU07QUFDeEIsUUFBTUMsUUFBUSxHQUFHLG1CQUFNLG9CQUFDLFlBQUQ7QUFBUyxNQUFBLEtBQUssRUFBQztBQUFmLGlCQUFOLENBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLG1CQUNmLG9CQUFDLFlBQUQ7QUFBUyxNQUFBLE9BQU8sRUFBRSxLQUFsQjtBQUF5QixNQUFBLFNBQVMsRUFBQyxLQUFuQztBQUF5QyxNQUFBLEtBQUssRUFBQztBQUEvQyxpQkFEZSxDQUFqQjtBQUtBLFFBQU1DLFFBQVEsR0FBRyxtQkFDZixvQkFBQyxZQUFEO0FBQVMsTUFBQSxPQUFPLEVBQUUsS0FBbEI7QUFBeUIsTUFBQSxTQUFTLEVBQUMsT0FBbkM7QUFBMkMsTUFBQSxLQUFLLEVBQUM7QUFBakQsaUJBRGUsQ0FBakI7QUFLQSxRQUFNQyxRQUFRLEdBQUcsbUJBQ2Ysb0JBQUMsWUFBRDtBQUFTLE1BQUEsT0FBTyxFQUFFLEtBQWxCO0FBQXlCLE1BQUEsU0FBUyxFQUFDLFFBQW5DO0FBQTRDLE1BQUEsS0FBSyxFQUFDO0FBQWxELGlCQURlLENBQWpCO0FBS0EsUUFBTUMsUUFBUSxHQUFHLG1CQUNmLG9CQUFDLFlBQUQ7QUFBUyxNQUFBLE9BQU8sRUFBRSxLQUFsQjtBQUF5QixNQUFBLFNBQVMsRUFBQyxNQUFuQztBQUEwQyxNQUFBLEtBQUssRUFBQztBQUFoRCxpQkFEZSxDQUFqQjtBQUtBQyxJQUFBQSxNQUFNLENBQUNMLFFBQVEsQ0FBQ00sSUFBVCxDQUFjLFNBQWQsRUFBeUJDLEtBQXpCLEdBQWlDQyxtQkFBbEMsQ0FBTixDQUE2REMsSUFBN0QsQ0FDRSxlQURGO0FBR0FKLElBQUFBLE1BQU0sQ0FBQ0osUUFBUSxDQUFDSyxJQUFULENBQWMsU0FBZCxFQUF5QkMsS0FBekIsR0FBaUNDLG1CQUFsQyxDQUFOLENBQTZEQyxJQUE3RCxDQUNFLFlBREY7QUFHQUosSUFBQUEsTUFBTSxDQUFDSCxRQUFRLENBQUNJLElBQVQsQ0FBYyxTQUFkLEVBQXlCQyxLQUF6QixHQUFpQ0MsbUJBQWxDLENBQU4sQ0FBNkRDLElBQTdELENBQ0UsWUFERjtBQUdBSixJQUFBQSxNQUFNLENBQUNGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLFNBQWQsRUFBeUJDLEtBQXpCLEdBQWlDQyxtQkFBbEMsQ0FBTixDQUE2REMsSUFBN0QsQ0FDRSxVQURGO0FBR0FKLElBQUFBLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDRSxJQUFULENBQWMsU0FBZCxFQUF5QkMsS0FBekIsR0FBaUNDLG1CQUFsQyxDQUFOLENBQTZEQyxJQUE3RCxDQUNFLGFBREY7QUFHRCxHQXJDQyxDQUFGO0FBc0NELENBdkNPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBvcG92ZXIg5piv5Z+65LqOIFRvb2x0aXAg6L+b6KGM5bCB6KOF55qE44CCXG4gKiDpmaTpnZ7kuI4gUG9wb3ZlciDnm7jlhbPvvIzlkKbliJnmtYvor5XnlKjkvovpg73lupTlnKggVG9vbHRpcCDkuIvjgIJcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLlwiXG5cbmRlc2NyaWJlKFwiUG9wb3ZlclwiLCAoKSA9PiB7XG4gIGl0KFwiTW90aW9uIOexu+WQjeaYr+WQpuato+ehrlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8UG9wb3ZlciBwb3B1cD1cInBvcHVwXCI+cG9wb3ZlcjwvUG9wb3Zlcj4pXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudChcbiAgICAgIDxQb3BvdmVyIGFycm93ZWQ9e2ZhbHNlfSBwbGFjZW1lbnQ9XCJ0b3BcIiBwb3B1cD1cInBvcHVwXCI+XG4gICAgICAgIHBvcG92ZXJcbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gICAgY29uc3Qgd3JhcHBlcjIgPSBtb3VudChcbiAgICAgIDxQb3BvdmVyIGFycm93ZWQ9e2ZhbHNlfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHBvcHVwPVwicG9wdXBcIj5cbiAgICAgICAgcG9wb3ZlclxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgICBjb25zdCB3cmFwcGVyMyA9IG1vdW50KFxuICAgICAgPFBvcG92ZXIgYXJyb3dlZD17ZmFsc2V9IHBsYWNlbWVudD1cImJvdHRvbVwiIHBvcHVwPVwicG9wdXBcIj5cbiAgICAgICAgcG9wb3ZlclxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgICBjb25zdCB3cmFwcGVyNCA9IG1vdW50KFxuICAgICAgPFBvcG92ZXIgYXJyb3dlZD17ZmFsc2V9IHBsYWNlbWVudD1cImxlZnRcIiBwb3B1cD1cInBvcHVwXCI+XG4gICAgICAgIHBvcG92ZXJcbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIwLmZpbmQoXCJUb29sdGlwXCIpLnByb3BzKCkucG9wdXBUcmFuc2l0aW9uTmFtZSkudG9CZShcbiAgICAgIFwiem9vbS1iaWctZmFzdFwiXG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiVG9vbHRpcFwiKS5wcm9wcygpLnBvcHVwVHJhbnNpdGlvbk5hbWUpLnRvQmUoXG4gICAgICBcInNsaWRlLWRvd25cIlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjIuZmluZChcIlRvb2x0aXBcIikucHJvcHMoKS5wb3B1cFRyYW5zaXRpb25OYW1lKS50b0JlKFxuICAgICAgXCJzbGlkZS1sZWZ0XCJcbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIzLmZpbmQoXCJUb29sdGlwXCIpLnByb3BzKCkucG9wdXBUcmFuc2l0aW9uTmFtZSkudG9CZShcbiAgICAgIFwic2xpZGUtdXBcIlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcjQuZmluZChcIlRvb2x0aXBcIikucHJvcHMoKS5wb3B1cFRyYW5zaXRpb25OYW1lKS50b0JlKFxuICAgICAgXCJzbGlkZS1yaWdodFwiXG4gICAgKVxuICB9KVxufSlcbiJdfQ==