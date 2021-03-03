"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

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

var Group = _["default"].Group;

var GroupMounter = function GroupMounter() {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return React.createElement(Group, {
    value: value,
    onChange: setValue
  }, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1"));
};

describe("Checkbox", function () {
  it("Group 是否正确渲染", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(Group, null, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));

    expect(wrapper).toMatchSnapshot();
  });
  it("Group 是否能内部驱动", function () {
    var onChange = jest.fn();
    var wrapper0 = (0, _enzyme.mount)(React.createElement(Group, {
      onChange: onChange
    }, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));
    var wrapper1 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: ["children0"],
      onChange: onChange
    }, React.createElement(_["default"], null, "children0"), React.createElement(_["default"], null, "children1")));
    wrapper0.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children0"]);
    wrapper0.find("label").at(1).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children0", "children1"]);
    wrapper1.find("label").at(0).simulate("click");
    expect(onChange).toHaveBeenCalledWith([]);
    wrapper1.find("label").at(1).simulate("click");
    expect(onChange).toHaveBeenCalledWith(["children1"]);
  });
  it("Group 是否能外部控制", function () {
    var wrapper = (0, _enzyme.mount)(React.createElement(GroupMounter, null));
    wrapper.find("label").at(0).simulate("click");
    expect(wrapper.find("div").at(0).props()["data-value"]).toEqual(["children0"]);
  });
  it("Group 是否正确处理 value State", function () {
    var wrapper1 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: ["children0"]
    }, React.createElement(_["default"], {
      disabled: true
    }, "children0"), React.createElement(_["default"], {
      value: 27
    }, "children1"), React.createElement(_["default"], {
      checked: true
    }, "children2"), React.createElement(_["default"], {
      checked: true,
      value: 3
    }, "children3")));
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(["children0"]);
    wrapper1.find("label").at(3).simulate("click");
    expect(wrapper1.find("div").at(0).props()["data-value"]).toEqual(["children0", 3]);
    var wrapper2 = (0, _enzyme.mount)(React.createElement(Group, {
      defaultValue: [123],
      value: [27]
    }, React.createElement(_["default"], {
      disabled: true,
      value: 123
    }, "children0"), React.createElement(_["default"], {
      value: 27
    }, "children1"), React.createElement(_["default"], {
      checked: true
    }, "children2"), React.createElement(_["default"], {
      checked: true,
      value: 3
    }, "children3")));
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual([27]);
    wrapper2.find("label").at(3).simulate("click");
    expect(wrapper2.find("div").at(0).props()["data-value"]).toEqual([27]);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gvX190ZXN0c19fL2dyb3VwLnRlc3QudHN4Il0sIm5hbWVzIjpbIkdyb3VwIiwiQ2hlY2tib3giLCJHcm91cE1vdW50ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Iiwib25DaGFuZ2UiLCJqZXN0IiwiZm4iLCJ3cmFwcGVyMCIsIndyYXBwZXIxIiwiZmluZCIsImF0Iiwic2ltdWxhdGUiLCJ0b0hhdmVCZWVuQ2FsbGVkV2l0aCIsInByb3BzIiwidG9FcXVhbCIsIndyYXBwZXIyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMsWSxDQUFWRCxLOztBQUVSLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQSx3QkFDQ0MsS0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUREO0FBQUE7QUFBQSxNQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxRQURXOztBQUV6QixTQUNFLG9CQUFDLEtBQUQ7QUFBTyxJQUFBLEtBQUssRUFBRUQsS0FBZDtBQUFxQixJQUFBLFFBQVEsRUFBRUM7QUFBL0IsS0FDRSxvQkFBQyxZQUFELG9CQURGLEVBRUUsb0JBQUMsWUFBRCxvQkFGRixDQURGO0FBTUQsQ0FSRDs7QUFVQUMsUUFBUSxDQUFDLFVBQUQsRUFBYSxZQUFNO0FBQ3pCQyxFQUFBQSxFQUFFLENBQUMsY0FBRCxFQUFpQixZQUFNO0FBQ3ZCLFFBQU1DLE9BQU8sR0FBR0MsOEJBQWFDLE1BQWIsQ0FDZCxvQkFBQyxLQUFELFFBQ0Usb0JBQUMsWUFBRCxvQkFERixFQUVFLG9CQUFDLFlBQUQsb0JBRkYsQ0FEYyxDQUFoQjs7QUFNQUMsSUFBQUEsTUFBTSxDQUFDSCxP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QU0sQ0FBQ2EsUUFBUSxDQUFDTixJQUFULENBQWMsS0FBZCxFQUFxQkMsRUFBckIsQ0FBd0IsQ0FBeEIsRUFBMkJHLEtBQTNCLEdBQW1DLFlBQW5DLENBQUQsQ0FBTixDQUF5REMsT0FBekQsQ0FBaUUsQ0FBQyxFQUFELENBQWpFO0FBQ0QsR0FyQ0MsQ0FBRjtBQXNDRCxDQWxGTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIlxuaW1wb3J0IHsgbW91bnQgfSBmcm9tIFwiZW56eW1lXCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi5cIlxuXG5jb25zdCB7IEdyb3VwIH0gPSBDaGVja2JveFxuXG5jb25zdCBHcm91cE1vdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoW10pXG4gIHJldHVybiAoXG4gICAgPEdyb3VwIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3NldFZhbHVlfT5cbiAgICAgIDxDaGVja2JveD5jaGlsZHJlbjA8L0NoZWNrYm94PlxuICAgICAgPENoZWNrYm94PmNoaWxkcmVuMTwvQ2hlY2tib3g+XG4gICAgPC9Hcm91cD5cbiAgKVxufVxuXG5kZXNjcmliZShcIkNoZWNrYm94XCIsICgpID0+IHtcbiAgaXQoXCJHcm91cCDmmK/lkKbmraPnoa7muLLmn5NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEdyb3VwPlxuICAgICAgICA8Q2hlY2tib3g+Y2hpbGRyZW4wPC9DaGVja2JveD5cbiAgICAgICAgPENoZWNrYm94PmNoaWxkcmVuMTwvQ2hlY2tib3g+XG4gICAgICA8L0dyb3VwPlxuICAgIClcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcblxuICBpdChcIkdyb3VwIOaYr+WQpuiDveWGhemDqOmpseWKqFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKClcbiAgICBjb25zdCB3cmFwcGVyMCA9IG1vdW50KFxuICAgICAgPEdyb3VwIG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgIDxDaGVja2JveD5jaGlsZHJlbjA8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3g+Y2hpbGRyZW4xPC9DaGVja2JveD5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIGNvbnN0IHdyYXBwZXIxID0gbW91bnQoXG4gICAgICA8R3JvdXAgZGVmYXVsdFZhbHVlPXtbXCJjaGlsZHJlbjBcIl19IG9uQ2hhbmdlPXtvbkNoYW5nZX0+XG4gICAgICAgIDxDaGVja2JveD5jaGlsZHJlbjA8L0NoZWNrYm94PlxuICAgICAgICA8Q2hlY2tib3g+Y2hpbGRyZW4xPC9DaGVja2JveD5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIHdyYXBwZXIwLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbXCJjaGlsZHJlbjBcIl0pXG4gICAgd3JhcHBlcjAuZmluZChcImxhYmVsXCIpLmF0KDEpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qob25DaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKFtcImNoaWxkcmVuMFwiLCBcImNoaWxkcmVuMVwiXSlcblxuICAgIHdyYXBwZXIxLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChbXSlcbiAgICB3cmFwcGVyMS5maW5kKFwibGFiZWxcIikuYXQoMSkuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdChvbkNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoW1wiY2hpbGRyZW4xXCJdKVxuICB9KVxuXG4gIGl0KFwiR3JvdXAg5piv5ZCm6IO95aSW6YOo5o6n5Yi2XCIsICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gbW91bnQoPEdyb3VwTW91bnRlciAvPilcbiAgICB3cmFwcGVyLmZpbmQoXCJsYWJlbFwiKS5hdCgwKS5zaW11bGF0ZShcImNsaWNrXCIpXG4gICAgZXhwZWN0KHdyYXBwZXIuZmluZChcImRpdlwiKS5hdCgwKS5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXSkudG9FcXVhbChbXG4gICAgICBcImNoaWxkcmVuMFwiLFxuICAgIF0pXG4gIH0pXG5cbiAgaXQoXCJHcm91cCDmmK/lkKbmraPnoa7lpITnkIYgdmFsdWUgU3RhdGVcIiwgKCkgPT4ge1xuICAgIC8vIOehruS/neS8mOWFiOWIpOaWrSBQcm9wIGRlZmF1bHRWYWx1Ze+8jOWmguaenOWtmOWcqOm7mOiupOWAvO+8jOWImSBHcm91cCDnirbmgIHkuLrmraTpu5jorqTlgLxcbiAgICBjb25zdCB3cmFwcGVyMSA9IG1vdW50KFxuICAgICAgPEdyb3VwIGRlZmF1bHRWYWx1ZT17W1wiY2hpbGRyZW4wXCJdfT5cbiAgICAgICAgPENoZWNrYm94IGRpc2FibGVkPmNoaWxkcmVuMDwvQ2hlY2tib3g+XG4gICAgICAgIDxDaGVja2JveCB2YWx1ZT17Mjd9PmNoaWxkcmVuMTwvQ2hlY2tib3g+XG4gICAgICAgIDxDaGVja2JveCBjaGVja2VkPmNoaWxkcmVuMjwvQ2hlY2tib3g+XG4gICAgICAgIDxDaGVja2JveCBjaGVja2VkIHZhbHVlPXszfT5cbiAgICAgICAgICBjaGlsZHJlbjNcbiAgICAgICAgPC9DaGVja2JveD5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiZGl2XCIpLmF0KDApLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdKS50b0VxdWFsKFtcbiAgICAgIFwiY2hpbGRyZW4wXCIsXG4gICAgXSlcbiAgICB3cmFwcGVyMS5maW5kKFwibGFiZWxcIikuYXQoMykuc2ltdWxhdGUoXCJjbGlja1wiKVxuICAgIGV4cGVjdCh3cmFwcGVyMS5maW5kKFwiZGl2XCIpLmF0KDApLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdKS50b0VxdWFsKFtcbiAgICAgIFwiY2hpbGRyZW4wXCIsXG4gICAgICAzLFxuICAgIF0pXG5cbiAgICAvLyDnoa7kv53mnIDkvJjlhYjliKTmlq0gUHJvcCB2YWx1Ze+8jOWmguaenOWtmOWcqCBQcm9wIHZhbHVl77yM5YiZIEdyb3VwIOWujOWFqOS6pOeUseWklumDqOaOp+WItu+8jOWGhemDqOeKtuaAgeaXoOaViOOAglxuICAgIGNvbnN0IHdyYXBwZXIyID0gbW91bnQoXG4gICAgICA8R3JvdXAgZGVmYXVsdFZhbHVlPXtbMTIzXX0gdmFsdWU9e1syN119PlxuICAgICAgICA8Q2hlY2tib3ggZGlzYWJsZWQgdmFsdWU9ezEyM30+XG4gICAgICAgICAgY2hpbGRyZW4wXG4gICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgIDxDaGVja2JveCB2YWx1ZT17Mjd9PmNoaWxkcmVuMTwvQ2hlY2tib3g+XG4gICAgICAgIDxDaGVja2JveCBjaGVja2VkPmNoaWxkcmVuMjwvQ2hlY2tib3g+XG4gICAgICAgIDxDaGVja2JveCBjaGVja2VkIHZhbHVlPXszfT5cbiAgICAgICAgICBjaGlsZHJlbjNcbiAgICAgICAgPC9DaGVja2JveD5cbiAgICAgIDwvR3JvdXA+XG4gICAgKVxuICAgIGV4cGVjdCh3cmFwcGVyMi5maW5kKFwiZGl2XCIpLmF0KDApLnByb3BzKClbXCJkYXRhLXZhbHVlXCJdKS50b0VxdWFsKFsyN10pXG4gICAgd3JhcHBlcjIuZmluZChcImxhYmVsXCIpLmF0KDMpLnNpbXVsYXRlKFwiY2xpY2tcIilcbiAgICBleHBlY3Qod3JhcHBlcjIuZmluZChcImRpdlwiKS5hdCgwKS5wcm9wcygpW1wiZGF0YS12YWx1ZVwiXSkudG9FcXVhbChbMjddKVxuICB9KVxufSlcbiJdfQ==