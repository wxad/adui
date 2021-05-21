function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import { render, mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import sinon from "sinon";
import Pagination from "..";

var PaginationMounter = function PaginationMounter() {
  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  return React.createElement(Pagination, {
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
    var wrapper = TestRenderer.create(React.createElement(Pagination, {
      align: "right",
      defaultCurrent: 1,
      pageSize: 10,
      total: 99,
      showButtonJumper: true
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it("current Prop 是否能验证非整数", function () {
    var stub = sinon.stub(console, "error");
    render(React.createElement(Pagination, {
      current: 3.1
    }));
    expect(stub.calledTwice).toEqual(true);
    stub.restore();
  });
  it("内部驱动", function () {
    var wrapper = mount(React.createElement(Pagination, {
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
    var wrapper1 = mount(React.createElement(Pagination, {
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
  var wrapper2 = mount(React.createElement(PaginationMounter, null));
  wrapper2.find("button").at(2).simulate("click");
  expect(wrapper2.find("div").at(0).props()["data-current"]).toEqual(2);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9fdGVzdHNfL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJyZW5kZXIiLCJtb3VudCIsIlRlc3RSZW5kZXJlciIsInNpbm9uIiwiUGFnaW5hdGlvbiIsIlBhZ2luYXRpb25Nb3VudGVyIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJuZXdDdXJyZW50IiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJzdHViIiwiY29uc29sZSIsImNhbGxlZFR3aWNlIiwidG9FcXVhbCIsInJlc3RvcmUiLCJmaW5kIiwiYXQiLCJwcm9wcyIsInNpbXVsYXRlIiwiaW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleUNvZGUiLCJ3cmFwcGVyMSIsIndyYXBwZXIyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLFNBQVNDLE1BQVQsRUFBaUJDLEtBQWpCLFFBQThCLFFBQTlCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixxQkFBekI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixJQUF2Qjs7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQSxrQkFDQU4sUUFBUSxDQUFDLENBQUQsQ0FEUjtBQUFBO0FBQUEsTUFDdkJPLE9BRHVCO0FBQUEsTUFDZEMsVUFEYzs7QUFFOUIsU0FDRSxvQkFBQyxVQUFEO0FBQ0UsSUFBQSxRQUFRLEVBQUUsRUFEWjtBQUVFLElBQUEsT0FBTyxFQUFFRCxPQUZYO0FBR0UsSUFBQSxLQUFLLEVBQUUsRUFIVDtBQUlFLElBQUEsUUFBUSxFQUFFLGtCQUFBRSxVQUFVO0FBQUEsYUFBSUQsVUFBVSxDQUFDQyxVQUFELENBQWQ7QUFBQSxLQUp0QjtBQUtFLElBQUEsZ0JBQWdCO0FBTGxCLElBREY7QUFTRCxDQVhEOztBQWFBQyxRQUFRLENBQUMsWUFBRCxFQUFlLFlBQU07QUFDM0JDLEVBQUFBLEVBQUUsQ0FBQyxRQUFELEVBQVcsWUFBTTtBQUNqQixRQUFNQyxPQUFPLEdBQUdULFlBQVksQ0FBQ1UsTUFBYixDQUNkLG9CQUFDLFVBQUQ7QUFDRSxNQUFBLEtBQUssRUFBQyxPQURSO0FBRUUsTUFBQSxjQUFjLEVBQUUsQ0FGbEI7QUFHRSxNQUFBLFFBQVEsRUFBRSxFQUhaO0FBSUUsTUFBQSxLQUFLLEVBQUUsRUFKVDtBQUtFLE1BQUEsZ0JBQWdCO0FBTGxCLE1BRGMsQ0FBaEI7QUFTQUMsSUFBQUEsTUFBTSxDQUFDRixPQUFELENBQU4sQ0FBZ0JHLGVBQWhCO0FBQ0QsR0FYQyxDQUFGO0FBYUFKLEVBQUFBLEVBQUUsQ0FBQyx1QkFBRCxFQUEwQixZQUFNO0FBQ2hDLFFBQU1LLElBQUksR0FBR1osS0FBSyxDQUFDWSxJQUFOLENBQVdDLE9BQVgsRUFBb0IsT0FBcEIsQ0FBYjtBQUNBaEIsSUFBQUEsTUFBTSxDQUFDLG9CQUFDLFVBQUQ7QUFBWSxNQUFBLE9BQU8sRUFBRTtBQUFyQixNQUFELENBQU47QUFDQWEsSUFBQUEsTUFBTSxDQUFDRSxJQUFJLENBQUNFLFdBQU4sQ0FBTixDQUF5QkMsT0FBekIsQ0FBaUMsSUFBakM7QUFDQUgsSUFBQUEsSUFBSSxDQUFDSSxPQUFMO0FBQ0QsR0FMQyxDQUFGO0FBT0FULEVBQUFBLEVBQUUsQ0FBQyxNQUFELEVBQVMsWUFBTTtBQUNmLFFBQU1DLE9BQU8sR0FBR1YsS0FBSyxDQUNuQixvQkFBQyxVQUFEO0FBQ0UsTUFBQSxLQUFLLEVBQUMsT0FEUjtBQUVFLE1BQUEsY0FBYyxFQUFFLENBRmxCO0FBR0UsTUFBQSxRQUFRLEVBQUUsRUFIWjtBQUlFLE1BQUEsS0FBSyxFQUFFLEVBSlQ7QUFLRSxNQUFBLGdCQUFnQixNQUxsQjtBQU1FLE1BQUEsZUFBZTtBQU5qQixNQURtQixDQUFyQjtBQVVBWSxJQUFBQSxNQUFNLENBQ0pGLE9BQU8sQ0FDSlMsSUFESCxDQUNRLEtBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsS0FISCxHQUdXLGNBSFgsQ0FESSxDQUFOLENBS0VKLE9BTEYsQ0FLVSxDQUxWO0FBTUFQLElBQUFBLE9BQU8sQ0FDSlMsSUFESCxDQUNRLFFBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQVYsSUFBQUEsTUFBTSxDQUNKRixPQUFPLENBQ0pTLElBREgsQ0FDUSxLQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLEtBSEgsR0FHVyxjQUhYLENBREksQ0FBTixDQUtFSixPQUxGLENBS1UsQ0FMVjtBQU9BUCxJQUFBQSxPQUFPLENBQ0pTLElBREgsQ0FDUSxRQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dFLFFBSEgsQ0FHWSxPQUhaO0FBSUFWLElBQUFBLE1BQU0sQ0FDSkYsT0FBTyxDQUNKUyxJQURILENBQ1EsS0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHQyxLQUhILEdBR1csY0FIWCxDQURJLENBQU4sQ0FLRUosT0FMRixDQUtVLENBTFY7QUFPQSxRQUFNTSxLQUFLLEdBQUdiLE9BQU8sQ0FBQ1MsSUFBUixDQUFhLE9BQWIsQ0FBZDtBQUNBSSxJQUFBQSxLQUFLLENBQUNELFFBQU4sQ0FBZSxRQUFmLEVBQXlCO0FBQUVFLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLEtBQXpCO0FBQ0FGLElBQUFBLEtBQUssQ0FBQ0QsUUFBTixDQUFlLFNBQWYsRUFBMEI7QUFBRUksTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBMUI7QUFDQWQsSUFBQUEsTUFBTSxDQUNKRixPQUFPLENBQ0pTLElBREgsQ0FDUSxLQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLEtBSEgsR0FHVyxjQUhYLENBREksQ0FBTixDQUtFSixPQUxGLENBS1UsQ0FMVjtBQU9BTSxJQUFBQSxLQUFLLENBQUNELFFBQU4sQ0FBZSxRQUFmLEVBQXlCO0FBQUVFLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFWLEtBQXpCO0FBQ0FGLElBQUFBLEtBQUssQ0FBQ0QsUUFBTixDQUFlLFNBQWYsRUFBMEI7QUFBRUksTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBMUI7QUFDRCxHQW5EQyxDQUFGO0FBcURBakIsRUFBQUEsRUFBRSxDQUFDLE1BQUQsRUFBUyxZQUFNO0FBQ2YsUUFBTWtCLFFBQVEsR0FBRzNCLEtBQUssQ0FDcEIsb0JBQUMsVUFBRDtBQUNFLE1BQUEsS0FBSyxFQUFDLE9BRFI7QUFFRSxNQUFBLFFBQVEsRUFBRSxFQUZaO0FBR0UsTUFBQSxPQUFPLEVBQUUsQ0FIWDtBQUlFLE1BQUEsS0FBSyxFQUFFLEVBSlQ7QUFLRSxNQUFBLGdCQUFnQjtBQUxsQixNQURvQixDQUF0QjtBQVNBMkIsSUFBQUEsUUFBUSxDQUNMUixJQURILENBQ1EsUUFEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHRSxRQUhILENBR1ksT0FIWjtBQUlBVixJQUFBQSxNQUFNLENBQ0plLFFBQVEsQ0FDTFIsSUFESCxDQUNRLEtBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsS0FISCxHQUdXLGNBSFgsQ0FESSxDQUFOLENBS0VKLE9BTEYsQ0FLVSxDQUxWO0FBT0FVLElBQUFBLFFBQVEsQ0FDTFIsSUFESCxDQUNRLFFBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQVYsSUFBQUEsTUFBTSxDQUNKZSxRQUFRLENBQ0xSLElBREgsQ0FDUSxLQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLEtBSEgsR0FHVyxjQUhYLENBREksQ0FBTixDQUtFSixPQUxGLENBS1UsQ0FMVjtBQU1ELEdBL0JDLENBQUY7QUFpQ0EsTUFBTVcsUUFBUSxHQUFHNUIsS0FBSyxDQUFDLG9CQUFDLGlCQUFELE9BQUQsQ0FBdEI7QUFDQTRCLEVBQUFBLFFBQVEsQ0FDTFQsSUFESCxDQUNRLFFBRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0UsUUFISCxDQUdZLE9BSFo7QUFJQVYsRUFBQUEsTUFBTSxDQUNKZ0IsUUFBUSxDQUNMVCxJQURILENBQ1EsS0FEUixFQUVHQyxFQUZILENBRU0sQ0FGTixFQUdHQyxLQUhILEdBR1csY0FIWCxDQURJLENBQU4sQ0FLRUosT0FMRixDQUtVLENBTFY7QUFNRCxDQXRITyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW5kZXIsIG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBzaW5vbiBmcm9tIFwic2lub25cIlxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uXCJcblxuY29uc3QgUGFnaW5hdGlvbk1vdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDEpXG4gIHJldHVybiAoXG4gICAgPFBhZ2luYXRpb25cbiAgICAgIHBhZ2VTaXplPXsxMH1cbiAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICB0b3RhbD17OTl9XG4gICAgICBvbkNoYW5nZT17bmV3Q3VycmVudCA9PiBzZXRDdXJyZW50KG5ld0N1cnJlbnQpfVxuICAgICAgc2hvd0J1dHRvbkp1bXBlclxuICAgIC8+XG4gIClcbn1cblxuZGVzY3JpYmUoXCJQYWdpbmF0aW9uXCIsICgpID0+IHtcbiAgaXQoXCLmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgIGRlZmF1bHRDdXJyZW50PXsxfVxuICAgICAgICBwYWdlU2l6ZT17MTB9XG4gICAgICAgIHRvdGFsPXs5OX1cbiAgICAgICAgc2hvd0J1dHRvbkp1bXBlclxuICAgICAgLz5cbiAgICApXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCJjdXJyZW50IFByb3Ag5piv5ZCm6IO96aqM6K+B6Z2e5pW05pWwXCIsICgpID0+IHtcbiAgICBjb25zdCBzdHViID0gc2lub24uc3R1Yihjb25zb2xlLCBcImVycm9yXCIpXG4gICAgcmVuZGVyKDxQYWdpbmF0aW9uIGN1cnJlbnQ9ezMuMX0gLz4pXG4gICAgZXhwZWN0KHN0dWIuY2FsbGVkVHdpY2UpLnRvRXF1YWwodHJ1ZSlcbiAgICBzdHViLnJlc3RvcmUoKVxuICB9KVxuXG4gIGl0KFwi5YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoXG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICBhbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgZGVmYXVsdEN1cnJlbnQ9ezV9XG4gICAgICAgIHBhZ2VTaXplPXsxMH1cbiAgICAgICAgdG90YWw9ezk5fVxuICAgICAgICBzaG93QnV0dG9uSnVtcGVyXG4gICAgICAgIHNob3dJbnB1dEp1bXBlclxuICAgICAgLz5cbiAgICApXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLWN1cnJlbnRcIl1cbiAgICApLnRvRXF1YWwoNSlcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImJ1dHRvblwiKVxuICAgICAgLmF0KDEpXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS1jdXJyZW50XCJdXG4gICAgKS50b0VxdWFsKDQpXG5cbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImJ1dHRvblwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS1jdXJyZW50XCJdXG4gICAgKS50b0VxdWFsKDEpXG5cbiAgICBjb25zdCBpbnB1dCA9IHdyYXBwZXIuZmluZChcImlucHV0XCIpXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJjaGFuZ2VcIiwgeyB0YXJnZXQ6IHsgdmFsdWU6IFwiM1wiIH0gfSlcbiAgICBpbnB1dC5zaW11bGF0ZShcImtleWRvd25cIiwgeyBrZXlDb2RlOiAxMyB9KVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS1jdXJyZW50XCJdXG4gICAgKS50b0VxdWFsKDMpXG5cbiAgICBpbnB1dC5zaW11bGF0ZShcImNoYW5nZVwiLCB7IHRhcmdldDogeyB2YWx1ZTogXCLkvaDlpb1cIiB9IH0pXG4gICAgaW5wdXQuc2ltdWxhdGUoXCJrZXlkb3duXCIsIHsga2V5Q29kZTogMTMgfSlcbiAgfSlcblxuICBpdChcIuWklumDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudChcbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIGFsaWduPVwicmlnaHRcIlxuICAgICAgICBwYWdlU2l6ZT17MTB9XG4gICAgICAgIGN1cnJlbnQ9ezF9XG4gICAgICAgIHRvdGFsPXs5OX1cbiAgICAgICAgc2hvd0J1dHRvbkp1bXBlclxuICAgICAgLz5cbiAgICApXG4gICAgd3JhcHBlcjFcbiAgICAgIC5maW5kKFwiYnV0dG9uXCIpXG4gICAgICAuYXQoMilcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjFcbiAgICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpW1wiZGF0YS1jdXJyZW50XCJdXG4gICAgKS50b0VxdWFsKDEpXG5cbiAgICB3cmFwcGVyMVxuICAgICAgLmZpbmQoXCJidXR0b25cIilcbiAgICAgIC5hdCgzKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMVxuICAgICAgICAuZmluZChcImRpdlwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClbXCJkYXRhLWN1cnJlbnRcIl1cbiAgICApLnRvRXF1YWwoMSlcbiAgfSlcblxuICBjb25zdCB3cmFwcGVyMiA9IG1vdW50KDxQYWdpbmF0aW9uTW91bnRlciAvPilcbiAgd3JhcHBlcjJcbiAgICAuZmluZChcImJ1dHRvblwiKVxuICAgIC5hdCgyKVxuICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gIGV4cGVjdChcbiAgICB3cmFwcGVyMlxuICAgICAgLmZpbmQoXCJkaXZcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnByb3BzKClbXCJkYXRhLWN1cnJlbnRcIl1cbiAgKS50b0VxdWFsKDIpXG59KVxuIl19