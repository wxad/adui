"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

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

var RadioMounter = function RadioMounter() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  return _react["default"].createElement(_["default"], {
    checked: checked,
    onChange: function onChange(bool) {
      return setChecked(bool);
    }
  });
};

describe("Radio", function () {
  it("Radio 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], null, "children"));

    expect(wrapper).toMatchSnapshot();
  });
  it("Radio 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChange
    }));
    wrapper.find("label").at(0).simulate("click");
    expect(wrapper.find("label").at(0).props().className.includes("checked")).toEqual(true);
    expect(onChange).toHaveBeenCalledWith(true);
  });
  it("Radio 是否能受外部控制", function () {
    var onChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      checked: false,
      onChange: onChange
    }));
    var wrapper1 = (0, _enzyme.mount)(_react["default"].createElement(RadioMounter, null));
    wrapper0.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith(true);
    expect(wrapper0.find("label").at(0).props().className.includes("checked")).toEqual(false);
    wrapper1.find("label").at(0).simulate("click");
    expect(wrapper1.find("label").at(0).props().className.includes("checked")).toEqual(true);
    wrapper1.find("label").at(0).simulate("click");
    expect(wrapper1.find("label").at(0).props().className.includes("checked")).toEqual(true);
  });
  it("Radio 是否能响应 onClick", function () {
    var onClick = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onClick: onClick
    }));
    wrapper.find("label").at(0).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("Radio 是否能响应 enter", function () {
    var onChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChange
    }));
    wrapper.find("label").at(0).simulate("keydown", {
      key: "enter",
      keyCode: 13
    });
    expect(wrapper.find("label").at(0).props().className.includes("checked")).toEqual(true);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmFkaW8vX190ZXN0c19fL3JhZGlvLnRlc3QudHN4Il0sIm5hbWVzIjpbIlJhZGlvTW91bnRlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiYm9vbCIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25DaGFuZ2UiLCJqZXN0IiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJ0b0VxdWFsIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJ3cmFwcGVyMCIsIndyYXBwZXIxIiwib25DbGljayIsInRvSGF2ZUJlZW5DYWxsZWQiLCJrZXkiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBLGtCQUNLLHFCQUFTLEtBQVQsQ0FETDtBQUFBO0FBQUEsTUFDbEJDLE9BRGtCO0FBQUEsTUFDVEMsVUFEUzs7QUFFekIsU0FBTyxnQ0FBQyxZQUFEO0FBQU8sSUFBQSxPQUFPLEVBQUVELE9BQWhCO0FBQXlCLElBQUEsUUFBUSxFQUFFLGtCQUFDRSxJQUFEO0FBQUEsYUFBVUQsVUFBVSxDQUFDQyxJQUFELENBQXBCO0FBQUE7QUFBbkMsSUFBUDtBQUNELENBSEQ7O0FBS0FDLFFBQVEsQ0FBQyxPQUFELEVBQVUsWUFBTTtBQUN0QkMsRUFBQUEsRUFBRSxDQUFDLGNBQUQsRUFBaUIsWUFBTTtBQUN2QixRQUFNQyxPQUFPLEdBQUdDLDhCQUFhQyxNQUFiLENBQW9CLGdDQUFDLFlBQUQsbUJBQXBCLENBQWhCOztBQUNBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQUhDLENBQUY7QUFLQUwsRUFBQUEs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LGdCQUFoQjtBQUNELEdBTEMsQ0FBRjtBQU9BcEIsRUFBQUEsRUFBRSxDQUFDLG1CQUFELEVBQXNCLFlBQU07QUFDNUIsUUFBTU0sUUFBUSxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBakI7QUFDQSxRQUFNUCxPQUFPLEdBQUcsbUJBQU0sZ0NBQUMsWUFBRDtBQUFPLE1BQUEsUUFBUSxFQUFFSztBQUFqQixNQUFOLENBQWhCO0FBQ0FMLElBQUFBLE9BQU8sQ0FDSlEsSUFESCxDQUNRLE9BRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsUUFISCxDQUdZLFNBSFosRUFHdUI7QUFBRVUsTUFBQUEsR0FBRyxFQUFFLE9BQVA7QUFBZ0JDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QixLQUh2QjtBQUlBbEIsSUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQUNRLElBQVIsQ0FBYSxPQUFiLEVBQXNCQyxFQUF0QixDQUF5QixDQUF6QixFQUE0QkUsS0FBNUIsR0FBb0NDLFNBQXBDLENBQThDQyxRQUE5QyxDQUF1RCxTQUF2RCxDQURJLENBQU4sQ0FFRUMsT0FGRixDQUVVLElBRlY7QUFHQVgsSUFBQUEsTUFBTSxDQUFDRSxRQUFELENBQU4sQ0FBaUJVLG9CQUFqQixDQUFzQyxJQUF0QztBQUNELEdBWEMsQ0FBRjtBQVlELENBM0RPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IFJhZGlvIGZyb20gXCIuLlwiXG5cbmNvbnN0IFJhZGlvTW91bnRlciA9ICgpID0+IHtcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHJldHVybiA8UmFkaW8gY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9eyhib29sKSA9PiBzZXRDaGVja2VkKGJvb2wpfSAvPlxufVxuXG5kZXNjcmliZShcIlJhZGlvXCIsICgpID0+IHtcbiAgaXQoXCJSYWRpbyDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxSYWRpbz5jaGlsZHJlbjwvUmFkaW8+KVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwiUmFkaW8g5piv5ZCm6IO95YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8UmFkaW8gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICB3cmFwcGVyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlci5maW5kKFwibGFiZWxcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh0cnVlKVxuICB9KVxuXG4gIGl0KFwiUmFkaW8g5piv5ZCm6IO95Y+X5aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoPFJhZGlvIGNoZWNrZWQ9e2ZhbHNlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+KVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoPFJhZGlvTW91bnRlciAvPilcbiAgICAvKipcbiAgICAgKiAxLiDnoa7lrpogb25DaGFuZ2Ug6L+Y5piv5Lya5Lyg5Zue5bqU6K+l5Y+Y5YyW55qE5YC877ybXG4gICAgICogMi4g5L2G5piv55Sx5LqOIFJhZGlvIOWujOWFqOWPl+WklumDqOaOp+WItu+8jOaJgOS7peimgeehruWumuWGhemDqOeKtuaAgeS4jeS8muaUueWPmOOAglxuICAgICAqL1xuICAgIHdyYXBwZXIwLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh0cnVlKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIwLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwoZmFsc2UpXG5cbiAgICB3cmFwcGVyMS5maW5kKFwibGFiZWxcIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIxLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwodHJ1ZSlcbiAgICB3cmFwcGVyMS5maW5kKFwibGFiZWxcIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIxLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwodHJ1ZSlcbiAgfSlcblxuICBpdChcIlJhZGlvIOaYr+WQpuiDveWTjeW6lCBvbkNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNsaWNrID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxSYWRpbyBvbkNsaWNrPXtvbkNsaWNrfSAvPilcbiAgICB3cmFwcGVyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2xpY2spLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICB9KVxuXG4gIGl0KFwiUmFkaW8g5piv5ZCm6IO95ZON5bqUIGVudGVyXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8UmFkaW8gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImtleWRvd25cIiwgeyBrZXk6IFwiZW50ZXJcIiwga2V5Q29kZTogMTMgfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwodHJ1ZSlcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUpXG4gIH0pXG59KVxuIl19