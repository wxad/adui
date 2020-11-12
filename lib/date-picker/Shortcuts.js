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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvU2hvcnRjdXRzLnRzeCJdLCJuYW1lcyI6WyJwcmVmaXgiLCJTaG9ydGN1dHMiLCJvblNob3J0Y3V0Q2xpY2siLCJzZWxlY3RlZERheSIsInNlbGVjdGVkRGF5cyIsInNob3J0Y3V0cyIsIm1hcCIsInNob3J0Y3V0IiwibGFiZWwiLCJ2YWx1ZVNob3J0Y3V0IiwidmFsdWUiLCJzZWxlY3RlZCIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsIkRhdGVVdGlscyIsImlzU2FtZURheSIsInRvU3RyaW5nIiwiZSIsImtleUNvZGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxXQUFmOztBQWtCQSxJQUFNQyxTQUFtRCxHQUFHLFNBQXREQSxTQUFzRDtBQUFBLE1BQzFEQyxlQUQwRCxRQUMxREEsZUFEMEQ7QUFBQSxNQUUxREMsV0FGMEQsUUFFMURBLFdBRjBEO0FBQUEsTUFHMURDLFlBSDBELFFBRzFEQSxZQUgwRDtBQUFBLE1BSTFEQyxTQUowRCxRQUkxREEsU0FKMEQ7QUFBQSxTQU0xRDtBQUFLLElBQUEsU0FBUyxZQUFLTCxNQUFMO0FBQWQsS0FDR0ssU0FBUyxJQUNSQSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFBQyxRQUFRLEVBQUk7QUFBQSxRQUNoQkMsS0FEZ0IsR0FDZ0JELFFBRGhCLENBQ2hCQyxLQURnQjtBQUFBLFFBQ0ZDLGFBREUsR0FDZ0JGLFFBRGhCLENBQ1RHLEtBRFM7QUFFeEIsUUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBQ0EsUUFDRVAsWUFBWSxJQUNaQSxZQUFZLENBQUNRLE1BRGIsSUFFQUMsS0FBSyxDQUFDQyxPQUFOLENBQWNMLGFBQWQsQ0FIRixFQUlFO0FBQ0FFLE1BQUFBLFFBQVEsR0FDTlAsWUFBWSxJQUNaSyxhQURBLElBRUFNLDBCQUFVQyxTQUFWLENBQW9CWixZQUFZLENBQUMsQ0FBRCxDQUFoQyxFQUFxQ0ssYUFBYSxDQUFDLENBQUQsQ0FBbEQsQ0FGQSxJQUdBTSwwQkFBVUMsU0FBVixDQUFvQlosWUFBWSxDQUFDLENBQUQsQ0FBaEMsRUFBcUNLLGFBQWEsQ0FBQyxDQUFELENBQWxELENBSkY7QUFLRCxLQVZELE1BVU87QUFDTEUsTUFBQUEsUUFBUSxHQUNOUixXQUFXLElBQ1hNLGFBREEsSUFFQU0sMEJBQVVDLFNBQVYsQ0FBb0JiLFdBQXBCLEVBQWlDTSxhQUFqQyxDQUhGO0FBSUQ7O0FBQ0QsV0FDRTtBQUNFLE1BQUEsR0FBRyxFQUFFQSxhQUFhLENBQUNRLFFBQWQsRUFEUDtBQUVFLE1BQUEsU0FBUyxFQUFFLHNDQUFjakIsTUFBZCw4Q0FDTEEsTUFESyxzQkFDcUJXLFFBRHJCLEVBRmI7QUFLRSxvQkFBWUYsYUFMZDtBQU1FLE1BQUEsT0FBTyxFQUFFO0FBQUEsZUFBTVAsZUFBZSxDQUFDTyxhQUFELENBQXJCO0FBQUEsT0FOWDtBQU9FLE1BQUEsUUFBUSxFQUFFLENBUFo7QUFRRSxNQUFBLFNBQVMsRUFBRSxtQkFBQVMsQ0FBQyxFQUFJO0FBQ2QsWUFBSUEsQ0FBQyxDQUFDQyxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDcEJqQixVQUFBQSxlQUFlLENBQUNPLGFBQUQsQ0FBZjtBQUNEO0FBQ0YsT0FaSDtBQWFFLE1BQUEsSUFBSSxFQUFDO0FBYlAsT0FlR0QsS0FmSCxDQURGO0FBbUJELEdBdENELENBRkosQ0FOMEQ7QUFBQSxDQUE1RDs7QUFrREFQLFNBQVMsQ0FBQ21CLFNBQVYsR0FBc0I7QUFJcEJsQixFQUFBQSxlQUFlLEVBQUVtQixzQkFBVUMsR0FBVixDQUFjQyxVQUpYO0FBUXBCcEIsRUFBQUEsV0FBVyxFQUFFa0Isc0JBQVVDLEdBUkg7QUFZcEJsQixFQUFBQSxZQUFZLEVBQUVpQixzQkFBVUMsR0FaSjtBQW9CcEJqQixFQUFBQSxTQUFTLEVBQUVnQixzQkFBVUMsR0FBVixDQUFjQztBQXBCTCxDQUF0QjtBQXVCQXRCLFNBQVMsQ0FBQ3VCLFlBQVYsR0FBeUI7QUFDdkJyQixFQUFBQSxXQUFXLEVBQUUsSUFEVTtBQUV2QkMsRUFBQUEsWUFBWSxFQUFFO0FBRlMsQ0FBekI7ZUFLZUgsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IERhdGVVdGlscyB9IGZyb20gXCJkYXktcGlja2VyLXJlYWN0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNob3J0Y3V0c1Byb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIG9uU2hvcnRjdXRDbGljazogKFxuICAgIHZhbHVlOiBEYXRlIHwgW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgKSA9PiB2b2lkXG4gIHNlbGVjdGVkRGF5PzogRGF0ZSB8IFwiXCIgfCBudWxsXG4gIHNlbGVjdGVkRGF5cz86IFtEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZCwgRGF0ZSB8IG51bGwgfCB1bmRlZmluZWRdIHwgbnVsbFxuICBzaG9ydGN1dHM/OiB7XG4gICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgIHZhbHVlOiBEYXRlIHwgW0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkLCBEYXRlIHwgbnVsbCB8IHVuZGVmaW5lZF1cbiAgfVtdXG59XG5cbi8qKlxuICog5pel5pyf6YCJ5oupIFNob3J0Y3V0c1xuICovXG5jb25zdCBTaG9ydGN1dHM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElTaG9ydGN1dHNQcm9wcz4gPSAoe1xuICBvblNob3J0Y3V0Q2xpY2ssXG4gIHNlbGVjdGVkRGF5LFxuICBzZWxlY3RlZERheXMsXG4gIHNob3J0Y3V0cyxcbn06IElTaG9ydGN1dHNQcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zaG9ydGN1dHNgfT5cbiAgICB7c2hvcnRjdXRzICYmXG4gICAgICBzaG9ydGN1dHMubWFwKHNob3J0Y3V0ID0+IHtcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgdmFsdWU6IHZhbHVlU2hvcnRjdXQgfSA9IHNob3J0Y3V0XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZWxlY3RlZERheXMgJiZcbiAgICAgICAgICBzZWxlY3RlZERheXMubGVuZ3RoICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZVNob3J0Y3V0KVxuICAgICAgICApIHtcbiAgICAgICAgICBzZWxlY3RlZCA9XG4gICAgICAgICAgICBzZWxlY3RlZERheXMgJiZcbiAgICAgICAgICAgIHZhbHVlU2hvcnRjdXQgJiZcbiAgICAgICAgICAgIERhdGVVdGlscy5pc1NhbWVEYXkoc2VsZWN0ZWREYXlzWzBdLCB2YWx1ZVNob3J0Y3V0WzBdKSAmJlxuICAgICAgICAgICAgRGF0ZVV0aWxzLmlzU2FtZURheShzZWxlY3RlZERheXNbMV0sIHZhbHVlU2hvcnRjdXRbMV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0ZWQgPVxuICAgICAgICAgICAgc2VsZWN0ZWREYXkgJiZcbiAgICAgICAgICAgIHZhbHVlU2hvcnRjdXQgJiZcbiAgICAgICAgICAgIERhdGVVdGlscy5pc1NhbWVEYXkoc2VsZWN0ZWREYXksIHZhbHVlU2hvcnRjdXQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e3ZhbHVlU2hvcnRjdXQudG9TdHJpbmcoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXNob3J0Y3V0YCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1zaG9ydGN1dEFjdGl2ZWBdOiBzZWxlY3RlZCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgZGF0YS12YWx1ZT17dmFsdWVTaG9ydGN1dH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2hvcnRjdXRDbGljayh2YWx1ZVNob3J0Y3V0KX1cbiAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBvblNob3J0Y3V0Q2xpY2sodmFsdWVTaG9ydGN1dClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KX1cbiAgPC9kaXY+XG4pXG5cblNob3J0Y3V0cy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBzaG9ydGN1dCBjbGljayBoYW5kbGVyXG4gICAqL1xuICBvblNob3J0Y3V0Q2xpY2s6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIOW9k+WJjeaXpeacn++8jOS7heS+myBEYXRlUGlja2VyIOS9v+eUqFxuICAgKi9cbiAgc2VsZWN0ZWREYXk6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlvZPliY3ml6XmnJ/ojIPlm7TvvIzku4XkvpsgUmFuZ2VQaWNrZXIg5L2/55SoXG4gICAqL1xuICBzZWxlY3RlZERheXM6IFByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiDlv6vmjbfpgInmi6npobnvvIzmoLzlvI/vvJpcbiAgICogW3tcbiAgICogICBsYWJlbDogXCLnpZblm73nlJ/ml6VcIixcbiAgICogICB2YWx1ZTogbmV3IERhdGUoXCIyMDIwLTEwLTAxXCIpLFxuICAgKiB9XVxuICAgKi9cbiAgc2hvcnRjdXRzOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59XG5cblNob3J0Y3V0cy5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGVkRGF5OiBudWxsLFxuICBzZWxlY3RlZERheXM6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3J0Y3V0c1xuIl19