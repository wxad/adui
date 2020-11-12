"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvX190ZXN0c19fL2NoZWNrYm94LnRlc3QudHN4Il0sIm5hbWVzIjpbIkNoZWNrYm94TW91bnRlciIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiYm9vbCIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25DaGFuZ2UiLCJqZXN0IiwiZm4iLCJmaW5kIiwiYXQiLCJzaW11bGF0ZSIsInRvSGF2ZUJlZW5DYWxsZWRXaXRoIiwid3JhcHBlcjAiLCJ3cmFwcGVyMSIsIndyYXBwZXIyIiwiZmlyc3RDaGVja2JveCIsInNlY29uZENoZWNrYm94IiwidGhpcmRDaGVja2JveCIsInByb3BzIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJ0b0VxdWFsIiwibm90IiwidG9IYXZlQmVlbkNhbGxlZCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBLGtCQUNFLHFCQUFTLEtBQVQsQ0FERjtBQUFBO0FBQUEsTUFDckJDLE9BRHFCO0FBQUEsTUFDWkMsVUFEWTs7QUFFNUIsU0FBTyxnQ0FBQyxZQUFEO0FBQVUsSUFBQSxPQUFPLEVBQUVELE9BQW5CO0FBQTRCLElBQUEsUUFBUSxFQUFFLGtCQUFBRSxJQUFJO0FBQUEsYUFBSUQsVUFBVSxDQUFDQyxJQUFELENBQWQ7QUFBQTtBQUExQyxJQUFQO0FBQ0QsQ0FIRDs7QUFLQUMsUUFBUSxDQUFDLFVBQUQsRUFBYSxZQUFNO0FBQ3pCQyxFQUFBQSxFQUFFLENBQUMsaUJBQUQsRUFBb0IsWUFBTTtBQUMxQixRQUFNQyxPQUFPLEdBQUdDLDhCQUFhQyxNQUFiLENBQW9CLGdDQUFDLFlBQUQsbUJBQXBCLENBQWhCOztBQUNBQyxJQUFBQSxNQUFN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Q0FBZ0JELGdCQUFoQjtBQUNELEdBUkMsQ0FBRjtBQVNELENBckdPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRlc3RSZW5kZXJlciBmcm9tIFwicmVhY3QtdGVzdC1yZW5kZXJlclwiXG5pbXBvcnQgeyBtb3VudCB9IGZyb20gXCJlbnp5bWVcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLlwiXG5cbmNvbnN0IENoZWNrYm94TW91bnRlciA9ICgpID0+IHtcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHJldHVybiA8Q2hlY2tib3ggY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e2Jvb2wgPT4gc2V0Q2hlY2tlZChib29sKX0gLz5cbn1cblxuZGVzY3JpYmUoXCJDaGVja2JveFwiLCAoKSA9PiB7XG4gIGl0KFwiQ2hlY2tib3gg5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8Q2hlY2tib3g+Y2hpbGRyZW48L0NoZWNrYm94PilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIkNoZWNrYm94IOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPENoZWNrYm94IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgfSlcblxuICBpdChcIkNoZWNrYm94IOaYr+WQpuiDveWPl+WklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KDxDaGVja2JveCBjaGVja2VkPXtmYWxzZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxDaGVja2JveCBjaGVja2VkIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG5cbiAgICBjb25zdCB3cmFwcGVyMiA9IG1vdW50KDxDaGVja2JveE1vdW50ZXIgLz4pXG4gICAgY29uc3QgZmlyc3RDaGVja2JveCA9IHdyYXBwZXIwLmZpbmQoXCJsYWJlbFwiKS5hdCgwKVxuICAgIGNvbnN0IHNlY29uZENoZWNrYm94ID0gd3JhcHBlcjEuZmluZChcImxhYmVsXCIpLmF0KDApXG4gICAgY29uc3QgdGhpcmRDaGVja2JveCA9IHdyYXBwZXIyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKVxuICAgIC8qKlxuICAgICAqIDEuIOehruWumiBvbkNoYW5nZSDov5jmmK/kvJrkvKDlm57lupTor6Xlj5jljJbnmoTlgLzvvJtcbiAgICAgKiAyLiDkvYbmmK/nlLHkuo4gQ2hlY2tib3gg5a6M5YWo5Y+X5aSW6YOo5o6n5Yi277yM5omA5Lul6KaB56Gu5a6a5YaF6YOo54q25oCB5LiN5Lya5pS55Y+Y44CCXG4gICAgICovXG4gICAgZmlyc3RDaGVja2JveC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh0cnVlKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIwXG4gICAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpXG4gICAgICAgIC5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKGZhbHNlKVxuXG4gICAgc2Vjb25kQ2hlY2tib3guc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZmFsc2UpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjFcbiAgICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClcbiAgICAgICAgLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwodHJ1ZSlcblxuICAgIHRoaXJkQ2hlY2tib3guc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIyXG4gICAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgICAgLmF0KDApXG4gICAgICAgIC5wcm9wcygpXG4gICAgICAgIC5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG4gICAgdGhpcmRDaGVja2JveC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjJcbiAgICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgICAuYXQoMClcbiAgICAgICAgLnByb3BzKClcbiAgICAgICAgLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCJDaGVja2JveCDnpoHnlKjnirbmgIHmmK/lkKblj6/nlKhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8Q2hlY2tib3ggZGlzYWJsZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICAvKipcbiAgICAgKiBncm91cC50ZXN0LmpzIOS4reayoeacieWvuSBDaGVja2JveC5Hcm91cCBkaXNhYmxlZCDnmoTmtYvor5XvvIxcbiAgICAgKiDlm6DkuLogZGlzYWJsZWQg6YC76L6R6YO95piv5ZyoIENoZWNrYm94LmpzIOWkhOeQhueahOOAglxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8Q2hlY2tib3guR3JvdXAgZGlzYWJsZWQgb25DaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgICAgPENoZWNrYm94IC8+XG4gICAgICA8L0NoZWNrYm94Lkdyb3VwPlxuICAgIClcbiAgICB3cmFwcGVyMFxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXG4gICAgd3JhcHBlcjFcbiAgICAgIC5maW5kKFwibGFiZWxcIilcbiAgICAgIC5hdCgwKVxuICAgICAgLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcblxuICBpdChcIkNoZWNrYm94IOaYr+WQpuiDveWTjeW6lCBvbkNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNsaWNrID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDaGVja2JveCBvbkNsaWNrPXtvbkNsaWNrfSAvPilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2xpY2spLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICB9KVxufSlcbiJdfQ==