"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

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

var CheckboxMounter = function CheckboxMounter() {
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

describe("Checkbox", function () {
  it("Checkbox 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], null, "children"));

    expect(wrapper).toMatchSnapshot();
  });
  it("Checkbox 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onChange: onChange
    }));
    wrapper.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith(true);
  });
  it("Checkbox 是否能受外部控制", function () {
    var onChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      checked: false,
      onChange: onChange
    }));
    var wrapper1 = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      checked: true,
      onChange: onChange
    }));
    var wrapper2 = (0, _enzyme.mount)(_react["default"].createElement(CheckboxMounter, null));
    var firstCheckbox = wrapper0.find("label").at(0);
    var secondCheckbox = wrapper1.find("label").at(0);
    var thirdCheckbox = wrapper2.find("label").at(0);
    firstCheckbox.simulate("click");
    expect(onChange).toHaveBeenCalledWith(true);
    expect(wrapper0.find("label").at(0).props().className.includes("checked")).toEqual(false);
    secondCheckbox.simulate("click");
    expect(onChange).toHaveBeenCalledWith(false);
    expect(wrapper1.find("label").at(0).props().className.includes("checked")).toEqual(true);
    thirdCheckbox.simulate("click");
    expect(wrapper2.find("label").at(0).props().className.includes("checked")).toEqual(true);
    thirdCheckbox.simulate("click");
    expect(wrapper2.find("label").at(0).props().className.includes("checked")).toEqual(false);
  });
  it("Checkbox 禁用状态是否可用", function () {
    var onChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      disabled: true,
      onChange: onChange
    }));
    var wrapper1 = (0, _enzyme.mount)(_react["default"].createElement(_["default"].Group, {
      disabled: true,
      onChange: onChange
    }, _react["default"].createElement(_["default"], null)));
    wrapper0.find("label").at(0).simulate("click");
    expect(onChange).not.toHaveBeenCalled();
    wrapper1.find("label").at(0).simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });
  it("Checkbox 是否能响应 onClick", function () {
    var onClick = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
      onClick: onClick
    }));
    wrapper.find("label").at(0).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvX190ZXN0c19fL2NoZWNrYm94LnRlc3QudHN4Il0sIm5hbWVzIjpbIkNoZWNrYm94TW91bnRlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiYm9vbCIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25DaGFuZ2UiLCJqZXN0IiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsIndyYXBwZXIyIiwiZmlyc3RDaGVja2JveCIsInNlY29uZENoZWNrYm94IiwidGhpcmRDaGVja2JveCIsInByb3BzIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJ0b0VxdWFsIiwibm90IiwidG9IYXZlQmVlbkNhbGxlZCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQSxrQkFDRSxxQkFBUyxLQUFULENBREY7QUFBQTtBQUFBLE1BQ3JCQyxPQURxQjtBQUFBLE1BQ1pDLFVBRFk7O0FBRTVCLFNBQU8sZ0NBQUMsWUFBRDtBQUFVLElBQUEsT0FBTyxFQUFFRCxPQUFuQjtBQUE0QixJQUFBLFFBQVEsRUFBRSxrQkFBQUUsSUFBSTtBQUFBLGFBQUlELFVBQVUsQ0FBQ0MsSUFBRCxDQUFkO0FBQUE7QUFBMUMsSUFBUDtBQUNELENBSEQ7O0FBS0FDLFFBQVEsQ0FBQyxVQUFELEVBQWEsWUFBTTtBQUN6QkMsRUFBQUEsRUFBRSxDQUFDLGlCQUFELEVBQW9CLFlBQU07QUFDMUIsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUFvQixnQ0FBQyxZQUFELG1CQUFwQixDQUFoQjs7QUFDQUMsSUFBQUEs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QUFOLENBQWdCRCxnQkFBaEI7QUFDRCxHQVJDLENBQUY7QUFTRCxDQXJHTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi5cIlxuXG5jb25zdCBDaGVja2JveE1vdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gPENoZWNrYm94IGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXtib29sID0+IHNldENoZWNrZWQoYm9vbCl9IC8+XG59XG5cbmRlc2NyaWJlKFwiQ2hlY2tib3hcIiwgKCkgPT4ge1xuICBpdChcIkNoZWNrYm94IOaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPENoZWNrYm94PmNoaWxkcmVuPC9DaGVja2JveD4pXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCJDaGVja2JveCDmmK/lkKbog73lhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDaGVja2JveCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+KVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUpXG4gIH0pXG5cbiAgaXQoXCJDaGVja2JveCDmmK/lkKbog73lj5flpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8Q2hlY2tib3ggY2hlY2tlZD17ZmFsc2V9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudCg8Q2hlY2tib3ggY2hlY2tlZCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+KVxuXG4gICAgY29uc3Qgd3JhcHBlcjIgPSBtb3VudCg8Q2hlY2tib3hNb3VudGVyIC8+KVxuICAgIGNvbnN0IGZpcnN0Q2hlY2tib3ggPSB3cmFwcGVyMC5maW5kKFwibGFiZWxcIikuYXQoMClcbiAgICBjb25zdCBzZWNvbmRDaGVja2JveCA9IHdyYXBwZXIxLmZpbmQoXCJsYWJlbFwiKS5hdCgwKVxuICAgIGNvbnN0IHRoaXJkQ2hlY2tib3ggPSB3cmFwcGVyMi5maW5kKFwibGFiZWxcIikuYXQoMClcbiAgICAvKipcbiAgICAgKiAxLiDnoa7lrpogb25DaGFuZ2Ug6L+Y5piv5Lya5Lyg5Zue5bqU6K+l5Y+Y5YyW55qE5YC877ybXG4gICAgICogMi4g5L2G5piv55Sx5LqOIENoZWNrYm94IOWujOWFqOWPl+WklumDqOaOp+WItu+8jOaJgOS7peimgeehruWumuWGhemDqOeKtuaAgeS4jeS8muaUueWPmOOAglxuICAgICAqL1xuICAgIGZpcnN0Q2hlY2tib3guc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMFxuICAgICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVxuICAgICAgICAuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbChmYWxzZSlcblxuICAgIHNlY29uZENoZWNrYm94LnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGZhbHNlKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIxXG4gICAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpXG4gICAgICAgIC5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG5cbiAgICB0aGlyZENoZWNrYm94LnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMlxuICAgICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAgIC5hdCgwKVxuICAgICAgICAucHJvcHMoKVxuICAgICAgICAuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbCh0cnVlKVxuICAgIHRoaXJkQ2hlY2tib3guc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIyXG4gICAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpXG4gICAgICAgIC5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKGZhbHNlKVxuICB9KVxuXG4gIGl0KFwiQ2hlY2tib3gg56aB55So54q25oCB5piv5ZCm5Y+v55SoXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIwID0gbW91bnQoPENoZWNrYm94IGRpc2FibGVkIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgLyoqXG4gICAgICogZ3JvdXAudGVzdC5qcyDkuK3msqHmnInlr7kgQ2hlY2tib3guR3JvdXAgZGlzYWJsZWQg55qE5rWL6K+V77yMXG4gICAgICog5Zug5Li6IGRpc2FibGVkIOmAu+i+kemDveaYr+WcqCBDaGVja2JveC5qcyDlpITnkIbnmoTjgIJcbiAgICAgKi9cbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KFxuICAgICAgPENoZWNrYm94Lkdyb3VwIGRpc2FibGVkIG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgIDxDaGVja2JveCAvPlxuICAgICAgPC9DaGVja2JveC5Hcm91cD5cbiAgICApXG4gICAgd3JhcHBlcjBcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcblxuICAgIHdyYXBwZXIxXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG5cbiAgaXQoXCJDaGVja2JveCDmmK/lkKbog73lk43lupQgb25DbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DbGljayA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8Q2hlY2tib3ggb25DbGljaz17b25DbGlja30gLz4pXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNsaWNrKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcbn0pXG4iXX0=