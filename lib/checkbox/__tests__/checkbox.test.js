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
  it("Checkbox 是否能响应 enter", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvX190ZXN0c19fL2NoZWNrYm94LnRlc3QudHN4Il0sIm5hbWVzIjpbIkNoZWNrYm94TW91bnRlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiYm9vbCIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25DaGFuZ2UiLCJqZXN0IiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsIndyYXBwZXIyIiwiZmlyc3RDaGVja2JveCIsInNlY29uZENoZWNrYm94IiwidGhpcmRDaGVja2JveCIsInByb3BzIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJ0b0VxdWFsIiwibm90IiwidG9IYXZlQmVlbkNhbGxlZCIsIm9uQ2xpY2siLCJrZXkiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUEsa0JBQ0UscUJBQVMsS0FBVCxDQURGO0FBQUE7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxVQURZOztBQUU1QixTQUFPLGdDQUFDLFlBQUQ7QUFBVSxJQUFBLE9BQU8sRUFBRUQsT0FBbkI7QUFBNEIsSUFBQSxRQUFRLEVBQUUsa0JBQUNFLElBQUQ7QUFBQSxhQUFVRCxVQUFVLENBQUNDLElBQUQsQ0FBcEI7QUFBQTtBQUF0QyxJQUFQO0FBQ0QsQ0FIRDs7QUFLQUMsUUFBUSxDQUFDLFVBQUQsRUFBYSxZQUFNO0FBQ3pCQyxFQUFBQSxFQUFFLENBQUMsaUJBQUQsRUFBb0IsWUFBTTtBQUMxQixRQUFNQyxPQUFPLEdBQUdDLDhCQUFhQyxNQUFiLENBQW9CLGdDQUFDLFlBQUQsbUJBQXBCLENB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QUFhLE9BQWIsRUFBc0JDLEVBQXRCLENBQXlCLENBQXpCLEVBQTRCQyxRQUE1QixDQUFxQyxPQUFyQztBQUNBUCxJQUFBQSxNQUFNLENBQUNxQixPQUFELENBQU4sQ0FBZ0JELGdCQUFoQjtBQUNELEdBTEMsQ0FBRjtBQU9BeEIsRUFBQUEsRUFBRSxDQUFDLHNCQUFELEVBQXlCLFlBQU07QUFDL0IsUUFBTU0sUUFBUSxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBakI7QUFDQSxRQUFNUCxPQUFPLEdBQUcsbUJBQU0sZ0NBQUMsWUFBRDtBQUFVLE1BQUEsUUFBUSxFQUFFSztBQUFwQixNQUFOLENBQWhCO0FBQ0FMLElBQUFBLE9BQU8sQ0FDSlEsSUFESCxDQUNRLE9BRFIsRUFFR0MsRUFGSCxDQUVNLENBRk4sRUFHR0MsUUFISCxDQUdZLFNBSFosRUFHdUI7QUFBRWUsTUFBQUEsR0FBRyxFQUFFLE9BQVA7QUFBZ0JDLE1BQUFBLE9BQU8sRUFBRTtBQUF6QixLQUh2QjtBQUlBdkIsSUFBQUEsTUFBTSxDQUNKSCxPQUFPLENBQUNRLElBQVIsQ0FBYSxPQUFiLEVBQXNCQyxFQUF0QixDQUF5QixDQUF6QixFQUE0QlMsS0FBNUIsR0FBb0NDLFNBQXBDLENBQThDQyxRQUE5QyxDQUF1RCxTQUF2RCxDQURJLENBQU4sQ0FFRUMsT0FGRixDQUVVLElBRlY7QUFHQWxCLElBQUFBLE1BQU0sQ0FBQ0UsUUFBRCxDQUFOLENBQWlCTSxvQkFBakIsQ0FBc0MsSUFBdEM7QUFDRCxHQVhDLENBQUY7QUFZRCxDQXRGTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi5cIlxuXG5jb25zdCBDaGVja2JveE1vdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gPENoZWNrYm94IGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXsoYm9vbCkgPT4gc2V0Q2hlY2tlZChib29sKX0gLz5cbn1cblxuZGVzY3JpYmUoXCJDaGVja2JveFwiLCAoKSA9PiB7XG4gIGl0KFwiQ2hlY2tib3gg5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8Q2hlY2tib3g+Y2hpbGRyZW48L0NoZWNrYm94PilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIkNoZWNrYm94IOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPENoZWNrYm94IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgd3JhcHBlci5maW5kKFwibGFiZWxcIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgfSlcblxuICBpdChcIkNoZWNrYm94IOaYr+WQpuiDveWPl+WklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KDxDaGVja2JveCBjaGVja2VkPXtmYWxzZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxDaGVja2JveCBjaGVja2VkIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG5cbiAgICBjb25zdCB3cmFwcGVyMiA9IG1vdW50KDxDaGVja2JveE1vdW50ZXIgLz4pXG4gICAgY29uc3QgZmlyc3RDaGVja2JveCA9IHdyYXBwZXIwLmZpbmQoXCJsYWJlbFwiKS5hdCgwKVxuICAgIGNvbnN0IHNlY29uZENoZWNrYm94ID0gd3JhcHBlcjEuZmluZChcImxhYmVsXCIpLmF0KDApXG4gICAgY29uc3QgdGhpcmRDaGVja2JveCA9IHdyYXBwZXIyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKVxuICAgIC8qKlxuICAgICAqIDEuIOehruWumiBvbkNoYW5nZSDov5jmmK/kvJrkvKDlm57lupTor6Xlj5jljJbnmoTlgLzvvJtcbiAgICAgKiAyLiDkvYbmmK/nlLHkuo4gQ2hlY2tib3gg5a6M5YWo5Y+X5aSW6YOo5o6n5Yi277yM5omA5Lul6KaB56Gu5a6a5YaF6YOo54q25oCB5LiN5Lya5pS55Y+Y44CCXG4gICAgICovXG4gICAgZmlyc3RDaGVja2JveC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh0cnVlKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIwLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwoZmFsc2UpXG5cbiAgICBzZWNvbmRDaGVja2JveC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChmYWxzZSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMS5maW5kKFwibGFiZWxcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG5cbiAgICB0aGlyZENoZWNrYm94LnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMi5maW5kKFwibGFiZWxcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG4gICAgdGhpcmRDaGVja2JveC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjIuZmluZChcImxhYmVsXCIpLmF0KDApLnByb3BzKCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbChmYWxzZSlcbiAgfSlcblxuICBpdChcIkNoZWNrYm94IOemgeeUqOeKtuaAgeaYr+WQpuWPr+eUqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KDxDaGVja2JveCBkaXNhYmxlZCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+KVxuICAgIC8qKlxuICAgICAqIGdyb3VwLnRlc3QuanMg5Lit5rKh5pyJ5a+5IENoZWNrYm94Lkdyb3VwIGRpc2FibGVkIOeahOa1i+ivle+8jFxuICAgICAqIOWboOS4uiBkaXNhYmxlZCDpgLvovpHpg73mmK/lnKggQ2hlY2tib3guanMg5aSE55CG55qE44CCXG4gICAgICovXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudChcbiAgICAgIDxDaGVja2JveC5Hcm91cCBkaXNhYmxlZCBvbkNoYW5nZT17b25DaGFuZ2V9PlxuICAgICAgICA8Q2hlY2tib3ggLz5cbiAgICAgIDwvQ2hlY2tib3guR3JvdXA+XG4gICAgKVxuICAgIHdyYXBwZXIwLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS5ub3QudG9IYXZlQmVlbkNhbGxlZCgpXG5cbiAgICB3cmFwcGVyMS5maW5kKFwibGFiZWxcIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuICB9KVxuXG4gIGl0KFwiQ2hlY2tib3gg5piv5ZCm6IO95ZON5bqUIG9uQ2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2sgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPENoZWNrYm94IG9uQ2xpY2s9e29uQ2xpY2t9IC8+KVxuICAgIHdyYXBwZXIuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DbGljaykudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG5cbiAgaXQoXCJDaGVja2JveCDmmK/lkKbog73lk43lupQgZW50ZXJcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDaGVja2JveCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+KVxuICAgIHdyYXBwZXJcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwia2V5ZG93blwiLCB7IGtleTogXCJlbnRlclwiLCBrZXlDb2RlOiAxMyB9KVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIuZmluZChcImxhYmVsXCIpLmF0KDApLnByb3BzKCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbCh0cnVlKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgfSlcbn0pXG4iXX0=