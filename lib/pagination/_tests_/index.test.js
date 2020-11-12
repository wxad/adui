"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _sinon = _interopRequireDefault(require("sinon"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PaginationMounter = function PaginationMounter() {
  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  return _react["default"].createElement(_["default"], {
    pageSize: 10,
    current: current,
    total: 99,
    onChange: function onChange(newCurrent) {
      return setCurrent(newCurrent);
    },
    showButtonJumper: true
  });
};

describe("Pagination", function () {
  it("是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], {
      align: "right",
      defaultCurrent: 1,
      pageSize: 10,
      total: 99,
      showButtonJumper: true
    }));

    expect(wrapper).toMatchSnapshot();
  });
  it("current Prop 是否能验证非整数", function () {
    var stub = _sinon["default"].stub(console, "error");

    (0, _enzyme.render)(_react["default"].createElement(_["default"], {
      current: 3.1
    }));
    expect(stub.calledTwice).toEqual(true);
    stub.restore();
  });
  it("内部驱动", function () {
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      align: "right",
      defaultCurrent: 5,
      pageSize: 10,
      total: 99,
      showButtonJumper: true,
      showInputJumper: true
    }));
    expect(wrapper.find("div").at(0).props()["data-current"]).toEqual(5);
    wrapper.find("button").at(1).simulate("click");
    expect(wrapper.find("div").at(0).props()["data-current"]).toEqual(4);
    wrapper.find("button").at(0).simulate("click");
    expect(wrapper.find("div").at(0).props()["data-current"]).toEqual(1);
    var input = wrapper.find("input");
    input.simulate("change", {
      target: {
        value: "3"
      }
    });
    input.simulate("keydown", {
      keyCode: 13
    });
    expect(wrapper.find("div").at(0).props()["data-current"]).toEqual(3);
    input.simulate("change", {
      target: {
        value: "你好"
      }
    });
    input.simulate("keydown", {
      keyCode: 13
    });
  });
  it("外部驱动", function () {
    var wrapper1 = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      align: "right",
      pageSize: 10,
      current: 1,
      total: 99,
      showButtonJumper: true
    }));
    wrapper1.find("button").at(2).simulate("click");
    expect(wrapper1.find("div").at(0).props()["data-current"]).toEqual(1);
    wrapper1.find("button").at(3).simulate("click");
    expect(wrapper1.find("div").at(0).props()["data-current"]).toEqual(1);
  });
  var wrapper2 = (0, _enzyme.mount)(_react["default"].createElement(PaginationMounter, null));
  wrapper2.find("button").at(2).simulate("click");
  expect(wrapper2.find("div").at(0).props()["data-current"]).toEqual(2);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9fdGVzdHNfL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlBhZ2luYXRpb25Nb3VudGVyIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJuZXdDdXJyZW50IiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJzdHViIiwic2lub24iLCJjb25zb2xlIiwiY2FsbGVkVHdpY2UiLCJ0b0VxdWFsIiwicmVzdG9yZSIsImZpbmQiLCJhdCIsInByb3BzIiwic2ltdWxhdGUiLCJpbnB1dCIsInRhcmdldCIsInZhbHVlIiwia2V5Q29kZSIsIndyYXBwZXIxIiwid3JhcHBlcjIiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBLGtCQUNBLHFCQUFTLENBQVQsQ0FEQTtBQUFBO0FBQUEsTUFDdkJDLE9BRHVCO0FBQUEsTUFDZEMsVUFEYzs7QUFFOUIsU0FDRSxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUUsRUFEWjtBQUVFLElBQUEsT0FBTyxFQUFFRCxPQUZYO0FBR0UsSUFBQSxLQUFLLEVBQUUsRUFIVDtBQUlFLElBQUEsUUFBUSxFQUFFLGtCQUFBRSxVQUFVO0FBQUEsYUFBSUQsVUFBVSxDQUFDQyxVQUFELENBQWQ7QUFBQSxLQUp0QjtBQUtFLElBQUEsZ0JBQWdCO0FBTGxCLElBREY7QUFTRCxDQVhEOztBQWFBQyxRQUFRLENBQUMsWUFBRCxFQUFlLFlBQU07QUFDM0JDLEVBQUFBLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBTTtBQUNqQixRQUFNQyxPQUFPLEdBQUdDLDhCQUFhQyxNQUFiLENBQ2QsZ0NBQUMsWUFBRDtBQUNFLE1BQUEsS0FBSyxFQUFDLE9BRFI7QUFF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UmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgcmVuZGVyLCBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgc2lub24gZnJvbSBcInNpbm9uXCJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLlwiXG5cbmNvbnN0IFBhZ2luYXRpb25Nb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgxKVxuICByZXR1cm4gKFxuICAgIDxQYWdpbmF0aW9uXG4gICAgICBwYWdlU2l6ZT17MTB9XG4gICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgdG90YWw9ezk5fVxuICAgICAgb25DaGFuZ2U9e25ld0N1cnJlbnQgPT4gc2V0Q3VycmVudChuZXdDdXJyZW50KX1cbiAgICAgIHNob3dCdXR0b25KdW1wZXJcbiAgICAvPlxuICApXG59XG5cbmRlc2NyaWJlKFwiUGFnaW5hdGlvblwiLCAoKSA9PiB7XG4gIGl0KFwi5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIGFsaWduPVwicmlnaHRcIlxuICAgICAgICBkZWZhdWx0Q3VycmVudD17MX1cbiAgICAgICAgcGFnZVNpemU9ezEwfVxuICAgICAgICB0b3RhbD17OTl9XG4gICAgICAgIHNob3dCdXR0b25KdW1wZXJcbiAgICAgIC8+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwiY3VycmVudCBQcm9wIOaYr+WQpuiDvemqjOivgemdnuaVtOaVsFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgc3R1YiA9IHNpbm9uLnN0dWIoY29uc29sZSwgXCJlcnJvclwiKVxuICAgIHJlbmRlcig8UGFnaW5hdGlvbiBjdXJyZW50PXszLjF9IC8+KVxuICAgIGV4cGVjdChzdHViLmNhbGxlZFR3aWNlKS50b0VxdWFsKHRydWUpXG4gICAgc3R1Yi5yZXN0b3JlKClcbiAgfSlcblxuICBpdChcIuWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgIGRlZmF1bHRDdXJyZW50PXs1fVxuICAgICAgICBwYWdlU2l6ZT17MTB9XG4gICAgICAgIHRvdGFsPXs5OX1cbiAgICAgICAgc2hvd0J1dHRvbkp1bXBlclxuICAgICAgICBzaG93SW5wdXRKdW1wZXJcbiAgICAgIC8+XG4gICAgKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS1jdXJyZW50XCJdXG4gICAgKS50b0VxdWFsKDUpXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJidXR0b25cIilcbiAgICAgIC5hdCgxKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtY3VycmVudFwiXVxuICAgICkudG9FcXVhbCg0KVxuXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJidXR0b25cIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtY3VycmVudFwiXVxuICAgICkudG9FcXVhbCgxKVxuXG4gICAgY29uc3QgaW5wdXQgPSB3cmFwcGVyLmZpbmQoXCJpbnB1dFwiKVxuICAgIGlucHV0LnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIjNcIiB9IH0pXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJrZXlkb3duXCIsIHsga2V5Q29kZTogMTMgfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtY3VycmVudFwiXVxuICAgICkudG9FcXVhbCgzKVxuXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwi5L2g5aW9XCIgfSB9KVxuICAgIGlucHV0LnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleUNvZGU6IDEzIH0pXG4gIH0pXG5cbiAgaXQoXCLlpJbpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICBhbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgcGFnZVNpemU9ezEwfVxuICAgICAgICBjdXJyZW50PXsxfVxuICAgICAgICB0b3RhbD17OTl9XG4gICAgICAgIHNob3dCdXR0b25KdW1wZXJcbiAgICAgIC8+XG4gICAgKVxuICAgIHdyYXBwZXIxXG4gICAgICAuZmluZChcImJ1dHRvblwiKVxuICAgICAgLmF0KDIpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIxXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtY3VycmVudFwiXVxuICAgICkudG9FcXVhbCgxKVxuXG4gICAgd3JhcHBlcjFcbiAgICAgIC5maW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXQoMylcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjFcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS1jdXJyZW50XCJdXG4gICAgKS50b0VxdWFsKDEpXG4gIH0pXG5cbiAgY29uc3Qgd3JhcHBlcjIgPSBtb3VudCg8UGFnaW5hdGlvbk1vdW50ZXIgLz4pXG4gIHdyYXBwZXIyXG4gICAgLmZpbmQoXCJidXR0b25cIilcbiAgICAuYXQoMilcbiAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICBleHBlY3QoXG4gICAgd3JhcHBlcjJcbiAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5wcm9wcygpW1wiZGF0YS1jdXJyZW50XCJdXG4gICkudG9FcXVhbCgyKVxufSlcbiJdfQ==