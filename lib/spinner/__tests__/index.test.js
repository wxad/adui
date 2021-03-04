"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _sinon = _interopRequireDefault(require("sinon"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Spinner", function () {
  it("Spinner 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      color: "#00bb9c"
    }, "children"));

    expect(wrapper).toMatchSnapshot();
  });
  it("value Prop 是否能验证 [0, 1] 外的数字", function () {
    var stub = _sinon["default"].stub(console, "error");

    (0, _enzyme.render)(React.createElement(_["default"], {
      value: 2
    }));
    expect(stub.calledOnce).toEqual(true);
    stub.restore();
  });
  it("各情况快照核对", function () {
    var wrapper0 = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      size: "mini"
    }));

    var wrapper1 = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      size: "small"
    }));

    var wrapper2 = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      size: "medium"
    }));

    var wrapper3 = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      size: "large"
    }));

    var wrapper4 = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      value: 0.27,
      text: "\u6307\u5B9A\u8FDB\u5EA6"
    }));

    expect(wrapper0).toMatchSnapshot();
    expect(wrapper1).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
    expect(wrapper3).toMatchSnapshot();
    expect(wrapper4).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc3Bpbm5lci9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJUZXN0UmVuZGVyZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJzdHViIiwic2lub24iLCJjb25zb2xlIiwiY2FsbGVkT25jZSIsInRvRXF1YWwiLCJyZXN0b3JlIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsIndyYXBwZXIyIiwid3JhcHBlcjMiLCJ3cmFwcGVyNCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBQSxRQUFRLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDeEJDLEVBQUFBLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixZQUFNO0FBQ3pCLFFBQU1DLE9BQU8sR0FBR0MsOEJBQWFDLE1BQWIsQ0FDZCxvQkFBQyxZQUFEO0FBQVMsTUFBQSxLQUFLLEVBQUM7QUFBZixrQkFEYyxDQUFoQjs7QUFHQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FMQyxDQUFGO0FBT0FMLEVBQUFBLEVBQUUsQ0FBQyw4QkFBRCxFQUFpQyxZQUFNO0FBQ3ZDLFFBQU1NLElBQUksR0FBR0Msa0JBQU1ELElBQU4sQ0FBV0UsT0FBWCxFQUFvQixPQUFwQixDQUFiOztBQUNBLHdCQUFPLG9CQUFDLFlBQUQ7QUFBUyxNQUFBLEtBQUssRUFBRTtBQUFoQixNQUFQO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDRyxVQUFOLENBQU4sQ0FBd0JDLE9BQXhCLENBQWdDLElBQWhDO0FBQ0FKLElBQUFBLElBQUksQ0FBQ0ssT0FBTDtBQUNELEdBTEMsQ0FBRjtBQU9BWCxFQUFBQSxFQUFFLENBQUMsU0FBRCxFQUFZLFlBQU07QUFDbEIsUUFBTVksUUFBUSxHQUFHViw4QkFBYUMsTUFBYixDQUFvQixvQkFBQyxZQUFEO0FBQVMsTUFBQSxJQUFJLEVBQUM7QUFBZCxNQUFwQixDQUFqQjs7QUFDQSxRQUFNVSxRQUFRLEdBQUdYLDhCQUFhQyxNQUFiLENBQW9CLG9CQUFDLFlBQUQ7QUFBUyxNQUFBLElBQUksRUFBQztBQUFkLE1BQXBCLENBQWpCOztBQUNBLFFBQU1XLFFBQVEsR0FBR1osOEJBQWFDLE1BQWIsQ0FBb0Isb0JBQUMsWUFBRDtBQUFTLE1BQUEsSUFBSSxFQUFDO0FBQWQsTUFBcEIsQ0FBakI7O0FBQ0EsUUFBTVksUUFBUSxHQUFHYiw4QkFBYUMsTUFBYixDQUFvQixvQkFBQyxZQUFEO0FBQVMsTUFBQSxJQUFJLEVBQUM7QUFBZCxNQUFwQixDQUFqQjs7QUFDQSxRQUFNYSxRQUFRLEdBQUdkLDhCQUFhQyxNQUFiLENBQ2Ysb0JBQUMsWUFBRDtBQUFTLE1BQUEsS0FBSyxFQUFFLElBQWhCO0FBQXNCLE1BQUEsSUFBSSxFQUFDO0FBQTNCLE1BRGUsQ0FBakI7O0FBSUFDLElBQUFBLE1BQU0sQ0FBQ1EsUUFBRCxDQUFOLENBQWlCUCxlQUFqQjtBQUNBRCxJQUFBQSxNQUFNLENBQUNTLFFBQUQsQ0FBTixDQUFpQlIsZUFBakI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDVSxRQUFELENBQU4sQ0FBaUJULGVBQWpCO0FBQ0FELElBQUFBLE1BQU0sQ0FBQ1csUUFBRCxDQUFOLENBQWlCVixlQUFqQjtBQUNBRCxJQUFBQSxNQUFNLENBQUNZLFFBQUQsQ0FBTixDQUFpQlgsZUFBakI7QUFDRCxHQWRDLENBQUY7QUFlRCxDQTlCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgc2lub24gZnJvbSBcInNpbm9uXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLlwiXG5cbmRlc2NyaWJlKFwiU3Bpbm5lclwiLCAoKSA9PiB7XG4gIGl0KFwiU3Bpbm5lciDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFNwaW5uZXIgY29sb3I9XCIjMDBiYjljXCI+Y2hpbGRyZW48L1NwaW5uZXI+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwidmFsdWUgUHJvcCDmmK/lkKbog73pqozor4EgWzAsIDFdIOWklueahOaVsOWtl1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgc3R1YiA9IHNpbm9uLnN0dWIoY29uc29sZSwgXCJlcnJvclwiKVxuICAgIHJlbmRlcig8U3Bpbm5lciB2YWx1ZT17Mn0gLz4pXG4gICAgZXhwZWN0KHN0dWIuY2FsbGVkT25jZSkudG9FcXVhbCh0cnVlKVxuICAgIHN0dWIucmVzdG9yZSgpXG4gIH0pXG5cbiAgaXQoXCLlkITmg4XlhrXlv6vnhafmoLjlr7lcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIwID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8U3Bpbm5lciBzaXplPVwibWluaVwiIC8+KVxuICAgIGNvbnN0IHdyYXBwZXIxID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8U3Bpbm5lciBzaXplPVwic21hbGxcIiAvPilcbiAgICBjb25zdCB3cmFwcGVyMiA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPFNwaW5uZXIgc2l6ZT1cIm1lZGl1bVwiIC8+KVxuICAgIGNvbnN0IHdyYXBwZXIzID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8U3Bpbm5lciBzaXplPVwibGFyZ2VcIiAvPilcbiAgICBjb25zdCB3cmFwcGVyNCA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG4gICAgICA8U3Bpbm5lciB2YWx1ZT17MC4yN30gdGV4dD1cIuaMh+Wumui/m+W6plwiIC8+XG4gICAgKVxuXG4gICAgZXhwZWN0KHdyYXBwZXIwKS50b01hdGNoU25hcHNob3QoKVxuICAgIGV4cGVjdCh3cmFwcGVyMSkudG9NYXRjaFNuYXBzaG90KClcbiAgICBleHBlY3Qod3JhcHBlcjIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gICAgZXhwZWN0KHdyYXBwZXIzKS50b01hdGNoU25hcHNob3QoKVxuICAgIGV4cGVjdCh3cmFwcGVyNCkudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbn0pXG4iXX0=