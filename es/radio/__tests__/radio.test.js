function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import { mount } from "enzyme";
import TestRenderer from "react-test-renderer";
import Radio from "..";

var RadioMounter = function RadioMounter() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  return React.createElement(Radio, {
    checked: checked,
    onChange: function onChange(bool) {
      return setChecked(bool);
    }
  });
};

describe("Radio", function () {
  it("Radio 是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(Radio, null, "children"));
    expect(wrapper).toMatchSnapshot();
  });
  it("Radio 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper = mount(React.createElement(Radio, {
      onChange: onChange
    }));
    wrapper.find("label").at(0).simulate("click");
    expect(wrapper.find("label").at(0).props().className.includes("checked")).toEqual(true);
    expect(onChange).toHaveBeenCalledWith(true);
  });
  it("Radio 是否能受外部控制", function () {
    var onChange = jest.fn();
    var wrapper0 = mount(React.createElement(Radio, {
      checked: false,
      onChange: onChange
    }));
    var wrapper1 = mount(React.createElement(RadioMounter, null));
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
    var wrapper = mount(React.createElement(Radio, {
      onClick: onClick
    }));
    wrapper.find("label").at(0).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("Radio 是否能响应 enter", function () {
    var onChange = jest.fn();
    var wrapper = mount(React.createElement(Radio, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmFkaW8vX190ZXN0c19fL3JhZGlvLnRlc3QudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3VudCIsIlRlc3RSZW5kZXJlciIsIlJhZGlvIiwiUmFkaW9Nb3VudGVyIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJib29sIiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJvbkNoYW5nZSIsImplc3QiLCJmbiIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInRvRXF1YWwiLCJ0b0hhdmVCZWVuQ2FsbGVkV2l0aCIsIndyYXBwZXIwIiwid3JhcHBlcjEiLCJvbkNsaWNrIiwidG9IYXZlQmVlbkNhbGxlZCIsImtleSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixRQUF0QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIscUJBQXpCO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixJQUFsQjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUEsa0JBQ0tKLFFBQVEsQ0FBQyxLQUFELENBRGI7QUFBQTtBQUFBLE1BQ2xCSyxPQURrQjtBQUFBLE1BQ1RDLFVBRFM7O0FBRXpCLFNBQU8sb0JBQUMsS0FBRDtBQUFPLElBQUEsT0FBTyxFQUFFRCxPQUFoQjtBQUF5QixJQUFBLFFBQVEsRUFBRSxrQkFBQ0UsSUFBRDtBQUFBLGFBQVVELFVBQVUsQ0FBQ0MsSUFBRCxDQUFwQjtBQUFBO0FBQW5DLElBQVA7QUFDRCxDQUhEOztBQUtBQyxRQUFRLENBQUMsT0FBRCxFQUFVLFlBQU07QUFDdEJDLEVBQUFBLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFlBQU07QUFDdkIs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LE9BQU8sRUFBRTBCO0FBQWhCLE1BQUQsQ0FBckI7QUFDQWpCLElBQUFBLE9BQU8sQ0FBQ08sSUFBUixDQUFhLE9BQWIsRUFBc0JDLEVBQXRCLENBQXlCLENBQXpCLEVBQTRCQyxRQUE1QixDQUFxQyxPQUFyQztBQUNBUCxJQUFBQSxNQUFNLENBQUNlLE9BQUQsQ0FBTixDQUFnQkMsZ0JBQWhCO0FBQ0QsR0FMQyxDQUFGO0FBT0FuQixFQUFBQSxFQUFFLENBQUMsbUJBQUQsRUFBc0IsWUFBTTtBQUM1QixRQUFNSyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsRUFBTCxFQUFqQjtBQUNBLFFBQU1OLE9BQU8sR0FBR1QsS0FBSyxDQUFDLG9CQUFDLEtBQUQ7QUFBTyxNQUFBLFFBQVEsRUFBRWE7QUFBakIsTUFBRCxDQUFyQjtBQUNBSixJQUFBQSxPQUFPLENBQ0pPLElBREgsQ0FDUSxPQURSLEVBRUdDLEVBRkgsQ0FFTSxDQUZOLEVBR0dDLFFBSEgsQ0FHWSxTQUhaLEVBR3VCO0FBQUVVLE1BQUFBLEdBQUcsRUFBRSxPQUFQO0FBQWdCQyxNQUFBQSxPQUFPLEVBQUU7QUFBekIsS0FIdkI7QUFJQWxCLElBQUFBLE1BQU0sQ0FDSkYsT0FBTyxDQUFDTyxJQUFSLENBQWEsT0FBYixFQUFzQkMsRUFBdEIsQ0FBeUIsQ0FBekIsRUFBNEJFLEtBQTVCLEdBQW9DQyxTQUFwQyxDQUE4Q0MsUUFBOUMsQ0FBdUQsU0FBdkQsQ0FESSxDQUFOLENBRUVDLE9BRkYsQ0FFVSxJQUZWO0FBR0FYLElBQUFBLE1BQU0sQ0FBQ0UsUUFBRCxDQUFOLENBQWlCVSxvQkFBakIsQ0FBc0MsSUFBdEM7QUFDRCxHQVhDLENBQUY7QUFZRCxDQTNETyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi5cIlxuXG5jb25zdCBSYWRpb01vdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gPFJhZGlvIGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXsoYm9vbCkgPT4gc2V0Q2hlY2tlZChib29sKX0gLz5cbn1cblxuZGVzY3JpYmUoXCJSYWRpb1wiLCAoKSA9PiB7XG4gIGl0KFwiUmFkaW8g5piv5ZCm5q2j56Gu5riy5p+TXCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gVGVzdFJlbmRlcmVyLmNyZWF0ZSg8UmFkaW8+Y2hpbGRyZW48L1JhZGlvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIlJhZGlvIOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFJhZGlvIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgd3JhcHBlci5maW5kKFwibGFiZWxcIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIuZmluZChcImxhYmVsXCIpLmF0KDApLnByb3BzKCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbCh0cnVlKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgfSlcblxuICBpdChcIlJhZGlvIOaYr+WQpuiDveWPl+WklumDqOaOp+WItlwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KDxSYWRpbyBjaGVja2VkPXtmYWxzZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KDxSYWRpb01vdW50ZXIgLz4pXG4gICAgLyoqXG4gICAgICogMS4g56Gu5a6aIG9uQ2hhbmdlIOi/mOaYr+S8muS8oOWbnuW6lOivpeWPmOWMlueahOWAvO+8m1xuICAgICAqIDIuIOS9huaYr+eUseS6jiBSYWRpbyDlrozlhajlj5flpJbpg6jmjqfliLbvvIzmiYDku6XopoHnoa7lrprlhoXpg6jnirbmgIHkuI3kvJrmlLnlj5jjgIJcbiAgICAgKi9cbiAgICB3cmFwcGVyMC5maW5kKFwibGFiZWxcIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMC5maW5kKFwibGFiZWxcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKGZhbHNlKVxuXG4gICAgd3JhcHBlcjEuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMS5maW5kKFwibGFiZWxcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG4gICAgd3JhcHBlcjEuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMS5maW5kKFwibGFiZWxcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG4gIH0pXG5cbiAgaXQoXCJSYWRpbyDmmK/lkKbog73lk43lupQgb25DbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DbGljayA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8UmFkaW8gb25DbGljaz17b25DbGlja30gLz4pXG4gICAgd3JhcHBlci5maW5kKFwibGFiZWxcIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNsaWNrKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcblxuICBpdChcIlJhZGlvIOaYr+WQpuiDveWTjeW6lCBlbnRlclwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPFJhZGlvIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgd3JhcHBlclxuICAgICAgLmZpbmQoXCJsYWJlbFwiKVxuICAgICAgLmF0KDApXG4gICAgICAuc2ltdWxhdGUoXCJrZXlkb3duXCIsIHsga2V5OiBcImVudGVyXCIsIGtleUNvZGU6IDEzIH0pXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlci5maW5kKFwibGFiZWxcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKHRydWUpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh0cnVlKVxuICB9KVxufSlcbiJdfQ==