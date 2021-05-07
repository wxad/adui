"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTimeBefore = exports.isTimeAfter = exports.extractHourAndMinuteFromTime = exports.isLegalTimeString = exports.minutes = exports.hours = void 0;

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

var hours = makeArray(25);
exports.hours = hours;
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

    return hour > -1 && hour < 25 && minute > -1 && minute < 60;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvY29yZS50cyJdLCJuYW1lcyI6WyJtYWtlQXJyYXkiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsImhvdXJzIiwibWludXRlcyIsImlzTGVnYWxUaW1lU3RyaW5nIiwidGltZSIsIm9ubHlIb3VyIiwidHJpbSIsInN0cmluZ3MiLCJzcGxpdCIsImlzTmFOIiwiTnVtYmVyIiwiaG91ciIsInBhcnNlSW50IiwibWludXRlIiwiZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSIsImlzVGltZUFmdGVyIiwidDEiLCJ0MiIsInQxSG91ciIsInQxTWludXRlIiwidDJIb3VyIiwidDJNaW51dGUiLCJpc1RpbWVCZWZvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxNQUFEO0FBQUEsU0FDaEJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLElBQUlELEtBQUosQ0FBVUQsTUFBVixDQUFYLEVBQThCLFVBQUNHLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVdBLENBQUMsR0FBRyxFQUFKLGNBQWFBLENBQWIsY0FBc0JBLENBQXRCLENBQVg7QUFBQSxHQUE5QixDQURnQjtBQUFBLENBQWxCOztBQUdPLElBQU1DLEtBQUssR0FBR04sU0FBUyxDQUFDLEVBQUQsQ0FBdkI7O0FBRUEsSUFBTU8sT0FBTyxHQUFHUCxTQUFTLENBQUMsRUFBRCxDQUF6Qjs7O0FBRUEsSUFBTVEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQWVDLFFBQWYsRUFBc0M7QUFDckUsTUFBSUQsSUFBSSxDQUFDRSxJQUFMLE9BQWdCLEVBQXBCLEVBQXdCO0FBQ3RCLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU1DLE9BQU8sR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVcsR0FBWCxDQUFoQjs7QUFDQSxNQUNFRCxPQUFPLENBQUNYLE1B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QUNjLEVBQUQsQ0FBOUQsRUFBb0U7QUFDbEUsV0FBTyxLQUFQO0FBQ0Q7O0FBSHFFLCtCQUkzQkgsNEJBQTRCLENBQUNFLEVBQUQsQ0FKRDtBQUFBLE1BSXhERSxNQUp3RCwwQkFJOURQLElBSjhEO0FBQUEsTUFJeENRLFFBSndDLDBCQUloRE4sTUFKZ0Q7O0FBQUEsK0JBSzNCQyw0QkFBNEIsQ0FBQ0csRUFBRCxDQUxEO0FBQUEsTUFLeERHLE1BTHdELDBCQUs5RFQsSUFMOEQ7QUFBQSxNQUt4Q1UsUUFMd0MsMEJBS2hEUixNQUxnRDs7QUFNdEUsTUFBSUssTUFBTSxJQUFJRSxNQUFWLElBQW9CUixRQUFRLENBQUNNLE1BQUQsRUFBUyxFQUFULENBQVIsS0FBeUJOLFFBQVEsQ0FBQ1EsTUFBRCxFQUFTLEVBQVQsQ0FBekQsRUFBdUU7QUFDckUsV0FBT0YsTUFBTSxHQUFHRSxNQUFoQjtBQUNEOztBQUNELFNBQU9ELFFBQVEsSUFBSUUsUUFBWixJQUF3QlQsUUFBUSxDQUFDTyxRQUFELEVBQVcsRUFBWCxDQUFSLEdBQXlCUCxRQUFRLENBQUNTLFFBQUQsRUFBVyxFQUFYLENBQWhFO0FBQ0QsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1ha2VBcnJheSA9IChsZW5ndGg6IG51bWJlcikgPT5cbiAgQXJyYXkuZnJvbShuZXcgQXJyYXkobGVuZ3RoKSwgKF8sIGkpID0+IChpIDwgMTAgPyBgMCR7aX1gIDogYCR7aX1gKSlcblxuZXhwb3J0IGNvbnN0IGhvdXJzID0gbWFrZUFycmF5KDI1KVxuXG5leHBvcnQgY29uc3QgbWludXRlcyA9IG1ha2VBcnJheSg2MClcblxuZXhwb3J0IGNvbnN0IGlzTGVnYWxUaW1lU3RyaW5nID0gKHRpbWU6IHN0cmluZywgb25seUhvdXI/OiBib29sZWFuKSA9PiB7XG4gIGlmICh0aW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3Qgc3RyaW5ncyA9IHRpbWUuc3BsaXQoXCI6XCIpXG4gIGlmIChcbiAgICBzdHJpbmdzLmxlbmd0aCA9PT0gMiAmJlxuICAgIHN0cmluZ3NbMF0ubGVuZ3RoID09PSAyICYmXG4gICAgc3RyaW5nc1sxXS5sZW5ndGggPT09IDIgJiZcbiAgICAhaXNOYU4oTnVtYmVyKHN0cmluZ3NbMF0pKSAmJlxuICAgICFpc05hTihOdW1iZXIoc3RyaW5nc1sxXSkpXG4gICkge1xuICAgIGNvbnN0IGhvdXIgPSBwYXJzZUludChzdHJpbmdzWzBdLCAxMClcbiAgICBjb25zdCBtaW51dGUgPSBwYXJzZUludChzdHJpbmdzWzFdLCAxMClcbiAgICAvLyDmlbTngrnpgInmi6kgb25seUhvdXIg5pe25Yik5pat6YC76L6R5LiN5LiA5qC3XG4gICAgaWYgKG9ubHlIb3VyKSB7XG4gICAgICByZXR1cm4gaG91ciA+IC0xICYmIGhvdXIgPCAyNSAmJiBtaW51dGUgPT09IDBcbiAgICB9XG4gICAgcmV0dXJuIGhvdXIgPiAtMSAmJiBob3VyIDwgMjUgJiYgbWludXRlID4gLTEgJiYgbWludXRlIDwgNjBcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUgPSAodGltZT86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF0aW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvdXI6IG51bGwsXG4gICAgICBtaW51dGU6IG51bGwsXG4gICAgfVxuICB9XG4gIGNvbnN0IFtob3VyLCBtaW51dGVdID0gdGltZS5zcGxpdChcIjpcIilcbiAgcmV0dXJuIHtcbiAgICBob3VyOiBob3VyIHx8IG51bGwsXG4gICAgbWludXRlOiBtaW51dGUgfHwgbnVsbCxcbiAgfVxufVxuXG4vLyB0MSDmmK/lkKblnKggdDIg5ZCOXG5leHBvcnQgY29uc3QgaXNUaW1lQWZ0ZXIgPSAodDE/OiBzdHJpbmcgfCBudWxsLCB0Mj86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF0MSB8fCAhaXNMZWdhbFRpbWVTdHJpbmcodDEpIHx8ICF0MiB8fCAhaXNMZWdhbFRpbWVTdHJpbmcodDIpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgeyBob3VyOiB0MUhvdXIsIG1pbnV0ZTogdDFNaW51dGUgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUodDEpXG4gIGNvbnN0IHsgaG91cjogdDJIb3VyLCBtaW51dGU6IHQyTWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKHQyKVxuICBpZiAodDFIb3VyICYmIHQySG91ciAmJiBwYXJzZUludCh0MUhvdXIsIDEwKSAhPT0gcGFyc2VJbnQodDJIb3VyLCAxMCkpIHtcbiAgICByZXR1cm4gdDFIb3VyID4gdDJIb3VyXG4gIH1cbiAgcmV0dXJuIHQxTWludXRlICYmIHQyTWludXRlICYmIHBhcnNlSW50KHQxTWludXRlLCAxMCkgPiBwYXJzZUludCh0Mk1pbnV0ZSwgMTApXG59XG5cbi8vIHQxIOaYr+WQpuWcqCB0MiDliY1cbmV4cG9ydCBjb25zdCBpc1RpbWVCZWZvcmUgPSAodDE/OiBzdHJpbmcgfCBudWxsLCB0Mj86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF0MSB8fCAhaXNMZWdhbFRpbWVTdHJpbmcodDEpIHx8ICF0MiB8fCAhaXNMZWdhbFRpbWVTdHJpbmcodDIpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgeyBob3VyOiB0MUhvdXIsIG1pbnV0ZTogdDFNaW51dGUgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUodDEpXG4gIGNvbnN0IHsgaG91cjogdDJIb3VyLCBtaW51dGU6IHQyTWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKHQyKVxuICBpZiAodDFIb3VyICYmIHQySG91ciAmJiBwYXJzZUludCh0MUhvdXIsIDEwKSAhPT0gcGFyc2VJbnQodDJIb3VyLCAxMCkpIHtcbiAgICByZXR1cm4gdDFIb3VyIDwgdDJIb3VyXG4gIH1cbiAgcmV0dXJuIHQxTWludXRlICYmIHQyTWludXRlICYmIHBhcnNlSW50KHQxTWludXRlLCAxMCkgPCBwYXJzZUludCh0Mk1pbnV0ZSwgMTApXG59XG4iXX0=