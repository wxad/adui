"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmFkaW8vX190ZXN0c19fL3JhZGlvLnRlc3QudHN4Il0sIm5hbWVzIjpbIlJhZGlvTW91bnRlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiYm9vbCIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25DaGFuZ2UiLCJqZXN0IiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJ0b0VxdWFsIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJ3cmFwcGVyMCIsIndyYXBwZXIxIiwib25DbGljayIsInRvSGF2ZUJlZW5DYWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQSxrQkFDSyxxQkFBUyxLQUFULENBREw7QUFBQTtBQUFBLE1BQ2xCQyxPQURrQjtBQUFBLE1BQ1RDLFVBRFM7O0FBRXpCLFNBQU8sZ0NBQUMsWUFBRDtBQUFPLElBQUEsT0FBTyxFQUFFRCxPQUFoQjtBQUF5QixJQUFBLFFBQVEsRUFBRSxrQkFBQUUsSUFBSTtBQUFBLGFBQUlELFVBQVUsQ0FBQ0MsSUFBRCxDQUFkO0FBQUE7QUFBdkMsSUFBUDtBQUNELENBSEQ7O0FBS0FDLFFBQVEsQ0FBQyxPQUFELEVBQVUsWUFBTTtBQUN0QkMsRUFBQUEsRUFBRSxDQUFDLGNBQUQsRUFBaUIsWUFBTTtBQUN2QixRQUFNQyxPQUFPLEdBQUdDLDhCQUFhQyxNQUFiLENBQW9CLGdDQUFDLFlBQUQsbUJBQXBCLENBQWhCOztBQUNBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQUhDLENBQUY7QUFLQUwsRUFBQUEsRUFBRSxDQUFDLGVBQUQsRUFBa0Is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XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgUmFkaW8gZnJvbSBcIi4uXCJcblxuY29uc3QgUmFkaW9Nb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgcmV0dXJuIDxSYWRpbyBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17Ym9vbCA9PiBzZXRDaGVja2VkKGJvb2wpfSAvPlxufVxuXG5kZXNjcmliZShcIlJhZGlvXCIsICgpID0+IHtcbiAgaXQoXCJSYWRpbyDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxSYWRpbz5jaGlsZHJlbjwvUmFkaW8+KVxuICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKVxuICB9KVxuXG4gIGl0KFwiUmFkaW8g5piv5ZCm6IO95YaF6YOo6amx5YqoXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8UmFkaW8gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlclxuICAgICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVxuICAgICAgICAuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbCh0cnVlKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgfSlcblxuICBpdChcIlJhZGlvIOaYr+WQpuiDveWPl+WklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KDxSYWRpbyBjaGVja2VkPXtmYWxzZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxSYWRpb01vdW50ZXIgLz4pXG4gICAgLyoqXG4gICAgICogMS4g56Gu5a6aIG9uQ2hhbmdlIOi/mOaYr+S8muS8oOWbnuW6lOivpeWPmOWMlueahOWAvO+8m1xuICAgICAqIDIuIOS9huaYr+eUseS6jiBSYWRpbyDlrozlhajlj5flpJbpg6jmjqfliLbvvIzmiYDku6XopoHnoa7lrprlhoXpg6jnirbmgIHkuI3kvJrmlLnlj5jjgIJcbiAgICAgKi9cbiAgICB3cmFwcGVyMFxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMFxuICAgICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVxuICAgICAgICAuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbChmYWxzZSlcblxuICAgIHdyYXBwZXIxXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjFcbiAgICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClcbiAgICAgICAgLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwodHJ1ZSlcbiAgICB3cmFwcGVyMVxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIxXG4gICAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpXG4gICAgICAgIC5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG4gIH0pXG5cbiAgaXQoXCJSYWRpbyDmmK/lkKbog73lk43lupQgb25DbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DbGljayA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8UmFkaW8gb25DbGljaz17b25DbGlja30gLz4pXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNsaWNrKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcbn0pXG4iXX0=