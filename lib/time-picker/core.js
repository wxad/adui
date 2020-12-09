"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTimeBefore = exports.isTimeAfter = exports.extractHourAndMinuteFromTime = exports.isLegalTimeString = exports.minutes = exports.hours24 = exports.hours = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var makeArray = function makeArray(length) {
  return Array.from(new Array(length), function (_, i) {
    return i < 10 ? "0".concat(i) : "".concat(i);
  });
};

var hours = makeArray(24);
exports.hours = hours;
var hours24 = makeArray(25);
exports.hours24 = hours24;
var minutes = makeArray(60);
exports.minutes = minutes;

var isLegalTimeString = function isLegalTimeString(time, onlyHour) {
  if (time.trim() === "") {
    return true;
  }

  var strings = time.split(":");

  if (strings.length === 2 && strings[0].length === 2 && strings[1].length === 2 && !isNaN(Number(strings[0])) && !isNaN(Number(strings[1]))) {
    var hour = parseInt(strings[0], 10);
    var minute = parseInt(strings[1], 10);

    if (onlyHour) {
      return hour > -1 && hour < 25 && minute === 0;
    }

    return hour > -1 && hour < 24 && minute > -1 && minute < 60;
  }

  return false;
};

exports.isLegalTimeString = isLegalTimeString;

var extractHourAndMinuteFromTime = function extractHourAndMinuteFromTime(time) {
  if (!time) {
    return {
      hour: null,
      minute: null
    };
  }

  var _time$split = time.split(":"),
      _time$split2 = _slicedToArray(_time$split, 2),
      hour = _time$split2[0],
      minute = _time$split2[1];

  return {
    hour: hour || null,
    minute: minute || null
  };
};

exports.extractHourAndMinuteFromTime = extractHourAndMinuteFromTime;

var isTimeAfter = function isTimeAfter(t1, t2) {
  if (!t1 || !isLegalTimeString(t1) || !t2 || !isLegalTimeString(t2)) {
    return false;
  }

  var _extractHourAndMinute = extractHourAndMinuteFromTime(t1),
      t1Hour = _extractHourAndMinute.hour,
      t1Minute = _extractHourAndMinute.minute;

  var _extractHourAndMinute2 = extractHourAndMinuteFromTime(t2),
      t2Hour = _extractHourAndMinute2.hour,
      t2Minute = _extractHourAndMinute2.minute;

  if (t1Hour && t2Hour && parseInt(t1Hour, 10) !== parseInt(t2Hour, 10)) {
    return t1Hour > t2Hour;
  }

  return t1Minute && t2Minute && parseInt(t1Minute, 10) > parseInt(t2Minute, 10);
};

exports.isTimeAfter = isTimeAfter;

var isTimeBefore = function isTimeBefore(t1, t2) {
  if (!t1 || !isLegalTimeString(t1) || !t2 || !isLegalTimeString(t2)) {
    return false;
  }

  var _extractHourAndMinute3 = extractHourAndMinuteFromTime(t1),
      t1Hour = _extractHourAndMinute3.hour,
      t1Minute = _extractHourAndMinute3.minute;

  var _extractHourAndMinute4 = extractHourAndMinuteFromTime(t2),
      t2Hour = _extractHourAndMinute4.hour,
      t2Minute = _extractHourAndMinute4.minute;

  if (t1Hour && t2Hour && parseInt(t1Hour, 10) !== parseInt(t2Hour, 10)) {
    return t1Hour < t2Hour;
  }

  return t1Minute && t2Minute && parseInt(t1Minute, 10) < parseInt(t2Minute, 10);
};

exports.isTimeBefore = isTimeBefore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvY29yZS50cyJdLCJuYW1lcyI6WyJtYWtlQXJyYXkiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsImhvdXJzIiwiaG91cnMyNCIsIm1pbnV0ZXMiLCJpc0xlZ2FsVGltZVN0cmluZyIsInRpbWUiLCJvbmx5SG91ciIsInRyaW0iLCJzdHJpbmdzIiwic3BsaXQiLCJpc05hTiIsIk51bWJlciIsImhvdXIiLCJwYXJzZUludCIsIm1pbnV0ZSIsImV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUiLCJpc1RpbWVBZnRlciIsInQxIiwidDIiLCJ0MUhvdXIiLCJ0MU1pbnV0ZSIsInQySG91ciIsInQyTWludXRlIiwiaXNUaW1lQmVmb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRDtBQUFBLFNBQ2hCQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxJQUFJRCxLQUFKLENBQVVELE1BQVYsQ0FBWCxFQUE4QixVQUFDRyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFXQSxDQUFDLEdBQUcsRUFBSixjQUFhQSxDQUFiLGNBQXNCQSxDQUF0QixDQUFYO0FBQUEsR0FBOUIsQ0FEZ0I7QUFBQSxDQUFsQjs7QUFHTyxJQUFNQyxLQUFLLEdBQUdOLFNBQVMsQ0FBQyxFQUFELENBQXZCOztBQUVBLElBQU1PLE9BQU8sR0FBR1AsU0FBUyxDQUFDLEVBQUQsQ0FBekI7O0FBRUEsSUFBTVEsT0FBTyxHQUFHUixTQUFTLENBQUMsRUFBRCxDQUF6Qjs7O0FBRUEsSUFBTVMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQWVDLFFBQWYsRUFBc0M7QUFDckUsTUFBSUQsSUFBSSxDQUFDRSxJQUFMLE9BQWdCLEVBQXBCLEVBQXdCO0FBQ3RCLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU1DLE9BQU8sR0FBR0gsSUFB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QUNhLEVBQUQsQ0FBekIsSUFBaUMsQ0FBQ0MsRUFBbEMsSUFBd0MsQ0FBQ2QsaUJBQWlCLENBQUNjLEVBQUQsQ0FBOUQsRUFBb0U7QUFDbEUsV0FBTyxLQUFQO0FBQ0Q7O0FBSHFFLCtCQUkzQkgsNEJBQTRCLENBQUNFLEVBQUQsQ0FKRDtBQUFBLE1BSXhERSxNQUp3RCwwQkFJOURQLElBSjhEO0FBQUEsTUFJeENRLFFBSndDLDBCQUloRE4sTUFKZ0Q7O0FBQUEsK0JBSzNCQyw0QkFBNEIsQ0FBQ0csRUFBRCxDQUxEO0FBQUEsTUFLeERHLE1BTHdELDBCQUs5RFQsSUFMOEQ7QUFBQSxNQUt4Q1UsUUFMd0MsMEJBS2hEUixNQUxnRDs7QUFNdEUsTUFBSUssTUFBTSxJQUFJRSxNQUFWLElBQW9CUixRQUFRLENBQUNNLE1BQUQsRUFBUyxFQUFULENBQVIsS0FBeUJOLFFBQVEsQ0FBQ1EsTUFBRCxFQUFTLEVBQVQsQ0FBekQsRUFBdUU7QUFDckUsV0FBT0YsTUFBTSxHQUFHRSxNQUFoQjtBQUNEOztBQUNELFNBQU9ELFFBQVEsSUFBSUUsUUFBWixJQUF3QlQsUUFBUSxDQUFDTyxRQUFELEVBQVcsRUFBWCxDQUFSLEdBQXlCUCxRQUFRLENBQUNTLFFBQUQsRUFBVyxFQUFYLENBQWhFO0FBQ0QsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1ha2VBcnJheSA9IChsZW5ndGg6IG51bWJlcikgPT5cbiAgQXJyYXkuZnJvbShuZXcgQXJyYXkobGVuZ3RoKSwgKF8sIGkpID0+IChpIDwgMTAgPyBgMCR7aX1gIDogYCR7aX1gKSlcblxuZXhwb3J0IGNvbnN0IGhvdXJzID0gbWFrZUFycmF5KDI0KVxuXG5leHBvcnQgY29uc3QgaG91cnMyNCA9IG1ha2VBcnJheSgyNSlcblxuZXhwb3J0IGNvbnN0IG1pbnV0ZXMgPSBtYWtlQXJyYXkoNjApXG5cbmV4cG9ydCBjb25zdCBpc0xlZ2FsVGltZVN0cmluZyA9ICh0aW1lOiBzdHJpbmcsIG9ubHlIb3VyPzogYm9vbGVhbikgPT4ge1xuICBpZiAodGltZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IHN0cmluZ3MgPSB0aW1lLnNwbGl0KFwiOlwiKVxuICBpZiAoXG4gICAgc3RyaW5ncy5sZW5ndGggPT09IDIgJiZcbiAgICBzdHJpbmdzWzBdLmxlbmd0aCA9PT0gMiAmJlxuICAgIHN0cmluZ3NbMV0ubGVuZ3RoID09PSAyICYmXG4gICAgIWlzTmFOKE51bWJlcihzdHJpbmdzWzBdKSkgJiZcbiAgICAhaXNOYU4oTnVtYmVyKHN0cmluZ3NbMV0pKVxuICApIHtcbiAgICBjb25zdCBob3VyID0gcGFyc2VJbnQoc3RyaW5nc1swXSwgMTApXG4gICAgY29uc3QgbWludXRlID0gcGFyc2VJbnQoc3RyaW5nc1sxXSwgMTApXG4gICAgLy8g5pW054K56YCJ5oupIG9ubHlIb3VyIOaXtuWIpOaWremAu+i+keS4jeS4gOagt1xuICAgIGlmIChvbmx5SG91cikge1xuICAgICAgcmV0dXJuIGhvdXIgPiAtMSAmJiBob3VyIDwgMjUgJiYgbWludXRlID09PSAwXG4gICAgfVxuICAgIHJldHVybiBob3VyID4gLTEgJiYgaG91ciA8IDI0ICYmIG1pbnV0ZSA+IC0xICYmIG1pbnV0ZSA8IDYwXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lID0gKHRpbWU/OiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gIGlmICghdGltZSkge1xuICAgIHJldHVybiB7XG4gICAgICBob3VyOiBudWxsLFxuICAgICAgbWludXRlOiBudWxsLFxuICAgIH1cbiAgfVxuICBjb25zdCBbaG91ciwgbWludXRlXSA9IHRpbWUuc3BsaXQoXCI6XCIpXG4gIHJldHVybiB7XG4gICAgaG91cjogaG91ciB8fCBudWxsLFxuICAgIG1pbnV0ZTogbWludXRlIHx8IG51bGwsXG4gIH1cbn1cblxuLy8gdDEg5piv5ZCm5ZyoIHQyIOWQjlxuZXhwb3J0IGNvbnN0IGlzVGltZUFmdGVyID0gKHQxPzogc3RyaW5nIHwgbnVsbCwgdDI/OiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gIGlmICghdDEgfHwgIWlzTGVnYWxUaW1lU3RyaW5nKHQxKSB8fCAhdDIgfHwgIWlzTGVnYWxUaW1lU3RyaW5nKHQyKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IHsgaG91cjogdDFIb3VyLCBtaW51dGU6IHQxTWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKHQxKVxuICBjb25zdCB7IGhvdXI6IHQySG91ciwgbWludXRlOiB0Mk1pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSh0MilcbiAgaWYgKHQxSG91ciAmJiB0MkhvdXIgJiYgcGFyc2VJbnQodDFIb3VyLCAxMCkgIT09IHBhcnNlSW50KHQySG91ciwgMTApKSB7XG4gICAgcmV0dXJuIHQxSG91ciA+IHQySG91clxuICB9XG4gIHJldHVybiB0MU1pbnV0ZSAmJiB0Mk1pbnV0ZSAmJiBwYXJzZUludCh0MU1pbnV0ZSwgMTApID4gcGFyc2VJbnQodDJNaW51dGUsIDEwKVxufVxuXG4vLyB0MSDmmK/lkKblnKggdDIg5YmNXG5leHBvcnQgY29uc3QgaXNUaW1lQmVmb3JlID0gKHQxPzogc3RyaW5nIHwgbnVsbCwgdDI/OiBzdHJpbmcgfCBudWxsKSA9PiB7XG4gIGlmICghdDEgfHwgIWlzTGVnYWxUaW1lU3RyaW5nKHQxKSB8fCAhdDIgfHwgIWlzTGVnYWxUaW1lU3RyaW5nKHQyKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IHsgaG91cjogdDFIb3VyLCBtaW51dGU6IHQxTWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKHQxKVxuICBjb25zdCB7IGhvdXI6IHQySG91ciwgbWludXRlOiB0Mk1pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSh0MilcbiAgaWYgKHQxSG91ciAmJiB0MkhvdXIgJiYgcGFyc2VJbnQodDFIb3VyLCAxMCkgIT09IHBhcnNlSW50KHQySG91ciwgMTApKSB7XG4gICAgcmV0dXJuIHQxSG91ciA8IHQySG91clxuICB9XG4gIHJldHVybiB0MU1pbnV0ZSAmJiB0Mk1pbnV0ZSAmJiBwYXJzZUludCh0MU1pbnV0ZSwgMTApIDwgcGFyc2VJbnQodDJNaW51dGUsIDEwKVxufVxuIl19