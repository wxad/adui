function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import TestRenderer from "react-test-renderer";
import { mount } from "enzyme";
import Checkbox from "..";

var CheckboxMounter = function CheckboxMounter() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  return React.createElement(Checkbox, {
    checked: checked,
    onChange: function onChange(bool) {
      return setChecked(bool);
    }
  });
};

describe("Checkbox", function () {
  it("Checkbox 是否正确渲染", function () {
    var wrapper = TestRenderer.create(React.createElement(Checkbox, null, "children"));
    expect(wrapper).toMatchSnapshot();
  });
  it("Checkbox 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper = mount(React.createElement(Checkbox, {
      onChange: onChange
    }));
    wrapper.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith(true);
  });
  it("Checkbox 是否能受外部控制", function () {
    var onChange = jest.fn();
    var wrapper0 = mount(React.createElement(Checkbox, {
      checked: false,
      onChange: onChange
    }));
    var wrapper1 = mount(React.createElement(Checkbox, {
      checked: true,
      onChange: onChange
    }));
    var wrapper2 = mount(React.createElement(CheckboxMounter, null));
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
    var wrapper0 = mount(React.createElement(Checkbox, {
      disabled: true,
      onChange: onChange
    }));
    var wrapper1 = mount(React.createElement(Checkbox.Group, {
      disabled: true,
      onChange: onChange
    }, React.createElement(Checkbox, null)));
    wrapper0.find("label").at(0).simulate("click");
    expect(onChange).not.toHaveBeenCalled();
    wrapper1.find("label").at(0).simulate("click");
    expect(onChange).not.toHaveBeenCalled();
  });
  it("Checkbox 是否能响应 onClick", function () {
    var onClick = jest.fn();
    var wrapper = mount(React.createElement(Checkbox, {
      onClick: onClick
    }));
    wrapper.find("label").at(0).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("Checkbox 是否能响应 enter", function () {
    var onChange = jest.fn();
    var wrapper = mount(React.createElement(Checkbox, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvX190ZXN0c19fL2NoZWNrYm94LnRlc3QudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXN0UmVuZGVyZXIiLCJtb3VudCIsIkNoZWNrYm94IiwiQ2hlY2tib3hNb3VudGVyIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJib29sIiwiZGVzY3JpYmUiLCJpdCIsIndyYXBwZXIiLCJjcmVhdGUiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJvbkNoYW5nZSIsImplc3QiLCJmbiIsImZpbmQiLCJhdCIsInNpbXVsYXRlIiwidG9IYXZlQmVlbkNhbGxlZFdpdGgiLCJ3cmFwcGVyMCIsIndyYXBwZXIxIiwid3JhcHBlcjIiLCJmaXJzdENoZWNrYm94Iiwic2Vjb25kQ2hlY2tib3giLCJ0aGlyZENoZWNrYm94IiwicHJvcHMiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInRvRXF1YWwiLCJub3QiLCJ0b0hhdmVCZWVuQ2FsbGVkIiwib25DbGljayIsImtleSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixxQkFBekI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLFFBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixJQUFyQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQSxrQkFDRUosUUFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBO0FBQUEsTUFDckJLLE9BRHFCO0FBQUEsTUFDWkMsVUFEWTs7QUFFNUIsU0FBTyxvQkFBQyxRQUFEO0FBQVUsSUFBQSxPQUFPLEVBQUVELE9BQW5CO0FBQTRCLElBQUEsUUFBUSxFQUFFLGtCQUFDRSxJQUFEO0FBQUEsYUFBVUQsVUFBVSxDQUFDQyxJQUFELENBQXBCO0FBQUE7QUFBdEMsSUFBUDtBQUNELENB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eyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVGVzdFJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCJcbmltcG9ydCB7IG1vdW50IH0gZnJvbSBcImVuenltZVwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uXCJcblxuY29uc3QgQ2hlY2tib3hNb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgcmV0dXJuIDxDaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17KGJvb2wpID0+IHNldENoZWNrZWQoYm9vbCl9IC8+XG59XG5cbmRlc2NyaWJlKFwiQ2hlY2tib3hcIiwgKCkgPT4ge1xuICBpdChcIkNoZWNrYm94IOaYr+WQpuato+ehrua4suafk1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFRlc3RSZW5kZXJlci5jcmVhdGUoPENoZWNrYm94PmNoaWxkcmVuPC9DaGVja2JveD4pXG4gICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpXG4gIH0pXG5cbiAgaXQoXCJDaGVja2JveCDmmK/lkKbog73lhoXpg6jpqbHliqhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDaGVja2JveCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+KVxuICAgIHdyYXBwZXIuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUpXG4gIH0pXG5cbiAgaXQoXCJDaGVja2JveCDmmK/lkKbog73lj5flpJbpg6jmjqfliLZcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8Q2hlY2tib3ggY2hlY2tlZD17ZmFsc2V9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz4pXG4gICAgY29uc3Qgd3JhcHBlcjEgPSBtb3VudCg8Q2hlY2tib3ggY2hlY2tlZCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+KVxuXG4gICAgY29uc3Qgd3JhcHBlcjIgPSBtb3VudCg8Q2hlY2tib3hNb3VudGVyIC8+KVxuICAgIGNvbnN0IGZpcnN0Q2hlY2tib3ggPSB3cmFwcGVyMC5maW5kKFwibGFiZWxcIikuYXQoMClcbiAgICBjb25zdCBzZWNvbmRDaGVja2JveCA9IHdyYXBwZXIxLmZpbmQoXCJsYWJlbFwiKS5hdCgwKVxuICAgIGNvbnN0IHRoaXJkQ2hlY2tib3ggPSB3cmFwcGVyMi5maW5kKFwibGFiZWxcIikuYXQoMClcbiAgICAvKipcbiAgICAgKiAxLiDnoa7lrpogb25DaGFuZ2Ug6L+Y5piv5Lya5Lyg5Zue5bqU6K+l5Y+Y5YyW55qE5YC877ybXG4gICAgICogMi4g5L2G5piv55Sx5LqOIENoZWNrYm94IOWujOWFqOWPl+WklumDqOaOp+WItu+8jOaJgOS7peimgeehruWumuWGhemDqOeKtuaAgeS4jeS8muaUueWPmOOAglxuICAgICAqL1xuICAgIGZpcnN0Q2hlY2tib3guc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgodHJ1ZSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyMC5maW5kKFwibGFiZWxcIikuYXQoMCkucHJvcHMoKS5jbGFzc05hbWUuaW5jbHVkZXMoXCJjaGVja2VkXCIpXG4gICAgKS50b0VxdWFsKGZhbHNlKVxuXG4gICAgc2Vjb25kQ2hlY2tib3guc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZmFsc2UpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjEuZmluZChcImxhYmVsXCIpLmF0KDApLnByb3BzKCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbCh0cnVlKVxuXG4gICAgdGhpcmRDaGVja2JveC5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KFxuICAgICAgd3JhcHBlcjIuZmluZChcImxhYmVsXCIpLmF0KDApLnByb3BzKCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiY2hlY2tlZFwiKVxuICAgICkudG9FcXVhbCh0cnVlKVxuICAgIHRoaXJkQ2hlY2tib3guc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChcbiAgICAgIHdyYXBwZXIyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwoZmFsc2UpXG4gIH0pXG5cbiAgaXQoXCJDaGVja2JveCDnpoHnlKjnirbmgIHmmK/lkKblj6/nlKhcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlcjAgPSBtb3VudCg8Q2hlY2tib3ggZGlzYWJsZWQgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICAvKipcbiAgICAgKiBncm91cC50ZXN0LmpzIOS4reayoeacieWvuSBDaGVja2JveC5Hcm91cCBkaXNhYmxlZCDnmoTmtYvor5XvvIxcbiAgICAgKiDlm6DkuLogZGlzYWJsZWQg6YC76L6R6YO95piv5ZyoIENoZWNrYm94LmpzIOWkhOeQhueahOOAglxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8Q2hlY2tib3guR3JvdXAgZGlzYWJsZWQgb25DaGFuZ2U9e29uQ2hhbmdlfT5cbiAgICAgICAgPENoZWNrYm94IC8+XG4gICAgICA8L0NoZWNrYm94Lkdyb3VwPlxuICAgIClcbiAgICB3cmFwcGVyMC5maW5kKFwibGFiZWxcIikuYXQoMCkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkubm90LnRvSGF2ZUJlZW5DYWxsZWQoKVxuXG4gICAgd3JhcHBlcjEuZmluZChcImxhYmVsXCIpLmF0KDApLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKClcbiAgfSlcblxuICBpdChcIkNoZWNrYm94IOaYr+WQpuiDveWTjeW6lCBvbkNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNsaWNrID0gamVzdC5mbigpXG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KDxDaGVja2JveCBvbkNsaWNrPXtvbkNsaWNrfSAvPilcbiAgICB3cmFwcGVyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2xpY2spLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICB9KVxuXG4gIGl0KFwiQ2hlY2tib3gg5piv5ZCm6IO95ZON5bqUIGVudGVyXCIsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudCg8Q2hlY2tib3ggb25DaGFuZ2U9e29uQ2hhbmdlfSAvPilcbiAgICB3cmFwcGVyXG4gICAgICAuZmluZChcImxhYmVsXCIpXG4gICAgICAuYXQoMClcbiAgICAgIC5zaW11bGF0ZShcImtleWRvd25cIiwgeyBrZXk6IFwiZW50ZXJcIiwga2V5Q29kZTogMTMgfSlcbiAgICBleHBlY3QoXG4gICAgICB3cmFwcGVyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5wcm9wcygpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImNoZWNrZWRcIilcbiAgICApLnRvRXF1YWwodHJ1ZSlcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUpXG4gIH0pXG59KVxuIl19