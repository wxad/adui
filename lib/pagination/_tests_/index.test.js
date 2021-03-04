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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9fdGVzdHNfL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlBhZ2luYXRpb25Nb3VudGVyIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJuZXdDdXJyZW50IiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJzdHViIiwic2lub24iLCJjb25zb2xlIiwiY2FsbGVkVHdpY2UiLCJ0b0VxdWFsIiwicmVzdG9yZSIsImZpbmQiLCJhdCIsInByb3BzIiwic2ltdWxhdGUiLCJpbnB1dCIsInRhcmdldCIsInZhbHVlIiwia2V5Q29kZSIsIndyYXBwZXIxIiwid3JhcHBlcjIiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQSxrQkFDQSxxQkFBUyxDQUFULENBREE7QUFBQTtBQUFBLE1BQ3ZCQyxPQUR1QjtBQUFBLE1BQ2RDLFVBRGM7O0FBRTlCLFNBQ0UsZ0NBQUMsWUFBRDtBQUNFLElBQUEsUUFBUSxFQUFFLEVBRFo7QUFFRSxJQUFBLE9BQU8sRUFBRUQsT0FGWDtBQUdFLElBQUEsS0FBSyxFQUFFLEVBSFQ7QUFJRSxJQUFBLFFBQVEsRUFBRSxrQkFBQUUsVUFBVTtBQUFBLGFBQUlELFVBQVUsQ0FBQ0MsVUFBRCxDQUFkO0FBQUEsS0FKdEI7QUFLRSxJQUFBLGdCQUFnQjtBQUxsQixJQURGO0FBU0QsQ0FYRDs7QUFhQUMsUUFBUSxDQUFDLFlBQUQsRUFBZSxZQUFNO0FBQzNCQyxFQUFBQSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQU07QUFDakIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUNkLGdDQUFDLFlBQUQ7QUFDRSxNQUFBLEtBQUssRUFBQyxPQURS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b3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlbmRlciwgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IHNpbm9uIGZyb20gXCJzaW5vblwiXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi5cIlxuXG5jb25zdCBQYWdpbmF0aW9uTW91bnRlciA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMSlcbiAgcmV0dXJuIChcbiAgICA8UGFnaW5hdGlvblxuICAgICAgcGFnZVNpemU9ezEwfVxuICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgIHRvdGFsPXs5OX1cbiAgICAgIG9uQ2hhbmdlPXtuZXdDdXJyZW50ID0+IHNldEN1cnJlbnQobmV3Q3VycmVudCl9XG4gICAgICBzaG93QnV0dG9uSnVtcGVyXG4gICAgLz5cbiAgKVxufVxuXG5kZXNjcmliZShcIlBhZ2luYXRpb25cIiwgKCkgPT4ge1xuICBpdChcIuaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICBhbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgZGVmYXVsdEN1cnJlbnQ9ezF9XG4gICAgICAgIHBhZ2VTaXplPXsxMH1cbiAgICAgICAgdG90YWw9ezk5fVxuICAgICAgICBzaG93QnV0dG9uSnVtcGVyXG4gICAgICAvPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcImN1cnJlbnQgUHJvcCDmmK/lkKbog73pqozor4HpnZ7mlbTmlbBcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHN0dWIgPSBzaW5vbi5zdHViKGNvbnNvbGUsIFwiZXJyb3JcIilcbiAgICByZW5kZXIoPFBhZ2luYXRpb24gY3VycmVudD17My4xfSAvPilcbiAgICBleHBlY3Qoc3R1Yi5jYWxsZWRUd2ljZSkudG9FcXVhbCh0cnVlKVxuICAgIHN0dWIucmVzdG9yZSgpXG4gIH0pXG5cbiAgaXQoXCLlhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIGFsaWduPVwicmlnaHRcIlxuICAgICAgICBkZWZhdWx0Q3VycmVudD17NX1cbiAgICAgICAgcGFnZVNpemU9ezEwfVxuICAgICAgICB0b3RhbD17OTl9XG4gICAgICAgIHNob3dCdXR0b25KdW1wZXJcbiAgICAgICAgc2hvd0lucHV0SnVtcGVyXG4gICAgICAvPlxuICAgIClcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtY3VycmVudFwiXVxuICAgICkudG9FcXVhbCg1KVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXQoMSlcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLWN1cnJlbnRcIl1cbiAgICApLnRvRXF1YWwoNClcblxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLWN1cnJlbnRcIl1cbiAgICApLnRvRXF1YWwoMSlcblxuICAgIGNvbnN0IGlucHV0ID0gd3JhcHBlci5maW5kKFwiaW5wdXRcIilcbiAgICBpbnB1dC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCIzXCIgfSB9KVxuICAgIGlucHV0LnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleUNvZGU6IDEzIH0pXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLWN1cnJlbnRcIl1cbiAgICApLnRvRXF1YWwoMylcblxuICAgIGlucHV0LnNpbXVsYXRlKFwiY2hhbmdlXCIsIHsgdGFyZ2V0OiB7IHZhbHVlOiBcIuS9oOWlvVwiIH0gfSlcbiAgICBpbnB1dC5zaW11bGF0ZShcImtleWRvd25cIiwgeyBrZXlDb2RlOiAxMyB9KVxuICB9KVxuXG4gIGl0KFwi5aSW6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KFxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgIHBhZ2VTaXplPXsxMH1cbiAgICAgICAgY3VycmVudD17MX1cbiAgICAgICAgdG90YWw9ezk5fVxuICAgICAgICBzaG93QnV0dG9uSnVtcGVyXG4gICAgICAvPlxuICAgIClcbiAgICB3cmFwcGVyMVxuICAgICAgLmZpbmQoXCJidXR0b25cIilcbiAgICAgIC5hdCgyKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMVxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLWN1cnJlbnRcIl1cbiAgICApLnRvRXF1YWwoMSlcblxuICAgIHdyYXBwZXIxXG4gICAgICAuZmluZChcImJ1dHRvblwiKVxuICAgICAgLmF0KDMpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIxXG4gICAgICAgIC5maW5kKFwiZGl2XCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVtcImRhdGEtY3VycmVudFwiXVxuICAgICkudG9FcXVhbCgxKVxuICB9KVxuXG4gIGNvbnN0IHdyYXBwZXIyID0gbW91bnQoPFBhZ2luYXRpb25Nb3VudGVyIC8+KVxuICB3cmFwcGVyMlxuICAgIC5maW5kKFwiYnV0dG9uXCIpXG4gICAgLmF0KDIpXG4gICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgZXhwZWN0KFxuICAgIHdyYXBwZXIyXG4gICAgICAuZmluZChcImRpdlwiKVxuICAgICAgLmF0KDApXG4gICAgICAucHJvcHMoKVtcImRhdGEtY3VycmVudFwiXVxuICApLnRvRXF1YWwoMilcbn0pXG4iXX0=