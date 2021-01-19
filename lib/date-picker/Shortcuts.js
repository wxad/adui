"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dayPickerReact = require("day-picker-react");

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = "adui-date";

var Shortcuts = function Shortcuts(_ref) {
  var onShortcutClick = _ref.onShortcutClick,
      selectedDay = _ref.selectedDay,
      selectedDays = _ref.selectedDays,
      shortcuts = _ref.shortcuts;
  return React.createElement("div", {
    className: "".concat(prefix, "-shortcuts")
  }, shortcuts && shortcuts.map(function (shortcut) {
    var label = shortcut.label,
        valueShortcut = shortcut.value;
    var selected = false;

    if (selectedDays && selectedDays.length && Array.isArray(valueShortcut)) {
      selected = selectedDays && valueShortcut && _dayPickerReact.DateUtils.isSameDay(selectedDays[0], valueShortcut[0]) && _dayPickerReact.DateUtils.isSameDay(selectedDays[1], valueShortcut[1]);
    } else {
      selected = selectedDay && valueShortcut && _dayPickerReact.DateUtils.isSameDay(selectedDay, valueShortcut);
    }

    return React.createElement("div", {
      key: valueShortcut.toString(),
      className: (0, _classnames["default"])("".concat(prefix, "-shortcut"), _defineProperty({}, "".concat(prefix, "-shortcutActive"), selected)),
      "data-value": valueShortcut,
      onClick: function onClick() {
        return onShortcutClick(valueShortcut);
      },
      tabIndex: 0,
      onKeyDown: function onKeyDown(e) {
        if (e.keyCode === 13) {
          onShortcutClick(valueShortcut);
        }
      },
      role: "menuitem"
    }, label);
  }));
};

Shortcuts.propTypes = {
  onShortcutClick: _propTypes["default"].any.isRequired,
  selectedDay: _propTypes["default"].any,
  selectedDays: _propTypes["default"].any,
  shortcuts: _propTypes["default"].any.isRequired
};
Shortcuts.defaultProps = {
  selectedDay: null,
  selectedDays: null
};
var _default = Shortcuts;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvU2hvcnRjdXRzLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJTaG9ydGN1dHMiLCJvblNob3J0Y3V0Q2xpY2siLCJzZWxlY3RlZERheSIsInNlbGVjdGVkRGF5cyIsInNob3J0Y3V0cyIsIm1hcCIsInNob3J0Y3V0IiwibGFiZWwiLCJ2YWx1ZVNob3J0Y3V0IiwidmFsdWUiLCJzZWxlY3RlZCIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsIkRhdGVVdGlscyIsImlzU2FtZURheSIsInRvU3RyaW5nIiwiZSIsImtleUNvZGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQWtCQSxJQUFNQyxTQUFtRCxHQUFHLFNBQXREQSxTQUFzRDtBQUFBLE1BQzFEQyxlQUQwRCxRQUMxREEsZUFEMEQ7QUFBQSxNQUUxREMsV0FGMEQsUUFFMURBLFdBRjBEO0FBQUEsTUFHMURDLFlBSDBELFFBRzFEQSxZQUgwRDtBQUFBLE1BSTFEQyxTQUowRCxRQUkxREEsU0FKMEQ7QUFBQSxTQU0xRDtBQUFLLElBQUEsU0FBUyxZQUFLTCxNQUFMO0FBQWQsS0FDR0ssU0FBUyxJQUNSQSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQWM7QUFBQSxRQUNsQkMsS0FEa0IsR0FDY0QsUUFEZCxDQUNsQkMsS0FEa0I7QUFBQSxRQUNKQyxhQURJLEdBQ2NGLFFBRGQsQ0FDWEcsS0FEVztBQUUxQixRQUFJQyxRQUFRLEdBQUcsS0FBZjs7QUFDQSxRQUNFUCxZQUFZLElBQ1pBLFlBQVksQ0FBQ1EsTUFEYixJQUVBQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0wsYUFBZCxDQUhGLEVBSUU7QUFDQUUsTUFBQUEsUUFBUSxHQUNOUCxZQUFZLElBQ1pLLGFBREEsSUFFQU0sMEJBQVVDLFNBQVYsQ0FBb0JaLFlBQVksQ0FBQyxDQUFELENBQWhDLEVBQXFDSyxhQUFhLENBQUMsQ0FBRCxDQUFsRCxDQUZBLElBR0FNLDBCQUFVQyxTQUFWLENBQW9CWixZQUFZLENBQUMsQ0FBRCxDQUFoQyxFQUFxQ0ssYUFBYSxDQUFDLENBQUQsQ0FBbEQsQ0FKRjtBQUtELEtBVkQsTUFVTztBQUNMRSxNQUFBQSxRQUFRLEdBQ05SLFdBQVcsSUFDWE0sYUFEQSxJQUVBTSwwQkFBVUMsU0FBVixDQUFvQmIsV0FBcEIsRUFBaUNNLGFBQWpDLENBSEY7QUFJRDs7QUFDRCxXQUNFO0FBQ0UsTUFBQSxHQUFHLEVBQUVBLGFBQWEsQ0FBQ1EsUUFBZCxFQURQO0FBRUUsTUFBQSxTQUFTLEVBQUUsc0NBQWNqQixNQUFkLDhDQUNMQSxNQURLLHNCQUNxQlcsUUFEckIsRUFGYjtBQUtFLG9CQUFZRixhQUxkO0FBTUUsTUFBQSxPQUFPLEVBQUU7QUFBQSxlQUFNUCxlQUFlLENBQUNPLGFBQUQsQ0FBckI7QUFBQSxPQU5YO0FBT0UsTUFBQSxRQUFRLEVBQUUsQ0FQWjtBQVFFLE1BQUEsU0FBUyxFQUFFLG1CQUFDUyxDQUFELEVBQU87QUFDaEIsWUFBSUEsQ0FBQyxDQUFDQyxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDcEJqQixVQUFBQSxlQUFlLENBQUNPLGFBQUQsQ0FBZjtBQUNEO0FBQ0YsT0FaSDtBQWFFLE1BQUEsSUFBSSxFQUFDO0FBYlAsT0FlR0QsS0FmSCxDQURGO0FBbUJELEdBdENELENBRkosQ0FOMEQ7QUFBQSxDQUE1RDs7QUFrREFQLFNBQVMsQ0FBQ21CLFNBQVYsR0FBc0I7QUFJcEJsQixFQUFBQSxlQUFlLEVBQUVtQixzQkFBVUMsR0FBVixDQUFjQyxVQUpYO0FBUXBCcEIsRUFBQUEsV0FBVyxFQUFFa0Isc0JBQVVDLEdBUkg7QUFZcEJsQixFQUFBQSxZQUFZLEVBQUVpQixzQkFBVUMsR0FaSjtBQW9CcEJqQixFQUFBQSxTQUFTLEVBQUVnQixzQkFBVUMsR0FBVixDQUFjQztBQXBCTCxDQUF0QjtBQXVCQXRCLFNBQVMsQ0FBQ3VCLFlBQVYsR0FBeUI7QUFDdkJyQixFQUFBQSxXQUFXLEVBQUUsSUFEVTtBQUV2QkMsRUFBQUEsWUFBWSxFQUFFO0FBRlMsQ0FBekI7ZUFLZUgsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IERhdGVVdGlscyB9IGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNob3J0Y3V0c1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIG9uU2hvcnRjdXRDbGljazogKFxuICAgIHZhbHVlOiBEYXRlIHwgW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgKSA9PiB2b2lkXG4gIHNlbGVjdGVkRGF5PzogRGF0ZSB8IFwiXCIgfCBudWxsXG4gIHNlbGVjdGVkRGF5cz86IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbFxuICBzaG9ydGN1dHM/OiB7XG4gICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgIHZhbHVlOiBEYXRlIHwgW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgfVtdXG59XG5cbi8qKlxuICog5pel5pyf6YCJ5oupIFNob3J0Y3V0c1xuICovXG5jb25zdCBTaG9ydGN1dHM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElTaG9ydGN1dHNQcm9wcz4gPSAoe1xuICBvblNob3J0Y3V0Q2xpY2ssXG4gIHNlbGVjdGVkRGF5LFxuICBzZWxlY3RlZERheXMsXG4gIHNob3J0Y3V0cyxcbn06IElTaG9ydGN1dHNQcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zaG9ydGN1dHNgfT5cbiAgICB7c2hvcnRjdXRzICYmXG4gICAgICBzaG9ydGN1dHMubWFwKChzaG9ydGN1dCkgPT4ge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCB2YWx1ZTogdmFsdWVTaG9ydGN1dCB9ID0gc2hvcnRjdXRcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNlbGVjdGVkRGF5cyAmJlxuICAgICAgICAgIHNlbGVjdGVkRGF5cy5sZW5ndGggJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHZhbHVlU2hvcnRjdXQpXG4gICAgICAgICkge1xuICAgICAgICAgIHNlbGVjdGVkID1cbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cyAmJlxuICAgICAgICAgICAgdmFsdWVTaG9ydGN1dCAmJlxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzU2FtZURheShzZWxlY3RlZERheXNbMF0sIHZhbHVlU2hvcnRjdXRbMF0pICYmXG4gICAgICAgICAgICBEYXRlVXRpbHMuaXNTYW1lRGF5KHNlbGVjdGVkRGF5c1sxXSwgdmFsdWVTaG9ydGN1dFsxXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZCA9XG4gICAgICAgICAgICBzZWxlY3RlZERheSAmJlxuICAgICAgICAgICAgdmFsdWVTaG9ydGN1dCAmJlxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzU2FtZURheShzZWxlY3RlZERheSwgdmFsdWVTaG9ydGN1dClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17dmFsdWVTaG9ydGN1dC50b1N0cmluZygpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tc2hvcnRjdXRgLCB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXNob3J0Y3V0QWN0aXZlYF06IHNlbGVjdGVkLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBkYXRhLXZhbHVlPXt2YWx1ZVNob3J0Y3V0fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TaG9ydGN1dENsaWNrKHZhbHVlU2hvcnRjdXQpfVxuICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgb25TaG9ydGN1dENsaWNrKHZhbHVlU2hvcnRjdXQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gIDwvZGl2PlxuKVxuXG5TaG9ydGN1dHMucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogc2hvcnRjdXQgY2xpY2sgaGFuZGxlclxuICAgKi9cbiAgb25TaG9ydGN1dENsaWNrOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiDlvZPliY3ml6XmnJ/vvIzku4XkvpsgRGF0ZVBpY2tlciDkvb/nlKhcbiAgICovXG4gIHNlbGVjdGVkRGF5OiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5b2T5YmN5pel5pyf6IyD5Zu077yM5LuF5L6bIFJhbmdlUGlja2VyIOS9v+eUqFxuICAgKi9cbiAgc2VsZWN0ZWREYXlzOiBQcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICog5b+r5o236YCJ5oup6aG577yM5qC85byP77yaXG4gICAqIFt7XG4gICAqICAgbGFiZWw6IFwi56WW5Zu955Sf5pelXCIsXG4gICAqICAgdmFsdWU6IG5ldyBEYXRlKFwiMjAyMC0xMC0wMVwiKSxcbiAgICogfV1cbiAgICovXG4gIHNob3J0Y3V0czogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufVxuXG5TaG9ydGN1dHMuZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZERheTogbnVsbCxcbiAgc2VsZWN0ZWREYXlzOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9ydGN1dHNcbiJdfQ==