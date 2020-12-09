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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmFkaW8vX190ZXN0c19fL3JhZGlvLnRlc3QudHN4Il0sIm5hbWVzIjpbIlJhZGlvTW91bnRlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiYm9vbCIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25DaGFuZ2UiLCJqZXN0IiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJ0b0VxdWFsIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJ3cmFwcGVyMCIsIndyYXBwZXIxIiwib25DbGljayIsInRvSGF2ZUJlZW5DYWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUEsa0JBQ0sscUJBQVMsS0FBVCxDQURMO0FBQUE7QUFBQSxNQUNsQkMsT0FEa0I7QUFBQSxNQUNUQyxVQURTOztBQUV6QixTQUFPLGdDQUFDLFlBQUQ7QUFBTyxJQUFBLE9BQU8sRUFBRUQsT0FBaEI7QUFBeUIsSUFBQSxRQUFRLEVBQUUsa0JBQUFFLElBQUk7QUFBQSxhQUFJRCxVQUFVLENBQUNDLElBQUQsQ0FBZDtBQUFBO0FBQXZDLElBQVA7QUFDRCxDQUhEOztBQUtBQyxRQUFRLENBQUMsT0FBRCxFQUFVLFlBQU07QUFDdEJDLEVBQUFBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDdkIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUFvQixnQ0FBQyxZQUFELG1CQUFwQixDQUFoQjs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDSCxPQUFELENBQU4sQ0FBZ0JJLGVBQWhCO0FBQ0QsR0FIQyxDQUFGO0FBS0FMLEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVB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Y3RcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IFJhZGlvIGZyb20gXCIuLlwiXG5cbmNvbnN0IFJhZGlvTW91bnRlciA9ICgpID0+IHtcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHJldHVybiA8UmFkaW8gY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e2Jvb2wgPT4gc2V0Q2hlY2tlZChib29sKX0gLz5cbn1cblxuZGVzY3JpYmUoXCJSYWRpb1wiLCAoKSA9PiB7XG4gIGl0KFwiUmFkaW8g5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8UmFkaW8+Y2hpbGRyZW48L1JhZGlvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIlJhZGlvIOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFJhZGlvIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXJcbiAgICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClcbiAgICAgICAgLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwodHJ1ZSlcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUpXG4gIH0pXG5cbiAgaXQoXCJSYWRpbyDmmK/lkKbog73lj5flpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8UmFkaW8gY2hlY2tlZD17ZmFsc2V9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudCg8UmFkaW9Nb3VudGVyIC8+KVxuICAgIC8qKlxuICAgICAqIDEuIOehruWumiBvbkNoYW5nZSDov5jmmK/kvJrkvKDlm57lupTor6Xlj5jljJbnmoTlgLzvvJtcbiAgICAgKiAyLiDkvYbmmK/nlLHkuo4gUmFkaW8g5a6M5YWo5Y+X5aSW6YOo5o6n5Yi277yM5omA5Lul6KaB56Gu5a6a5YaF6YOo54q25oCB5LiN5Lya5pS55Y+Y44CCXG4gICAgICovXG4gICAgd3JhcHBlcjBcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjBcbiAgICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClcbiAgICAgICAgLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwoZmFsc2UpXG5cbiAgICB3cmFwcGVyMVxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIxXG4gICAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpXG4gICAgICAgIC5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG4gICAgd3JhcHBlcjFcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMVxuICAgICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVxuICAgICAgICAuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbCh0cnVlKVxuICB9KVxuXG4gIGl0KFwiUmFkaW8g5piv5ZCm6IO95ZON5bqUIG9uQ2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2sgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFJhZGlvIG9uQ2xpY2s9e29uQ2xpY2t9IC8+KVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DbGljaykudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG59KVxuIl19