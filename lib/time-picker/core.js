"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTimeBefore = exports.isTimeAfter = exports.extractHourAndMinuteFromTime = exports.isLegalTimeString = exports.minutes = exports.hours24 = exports.hours = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvY29yZS50cyJdLCJuYW1lcyI6WyJtYWtlQXJyYXkiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsImhvdXJzIiwiaG91cnMyNCIsIm1pbnV0ZXMiLCJpc0xlZ2FsVGltZVN0cmluZyIsInRpbWUiLCJvbmx5SG91ciIsInRyaW0iLCJzdHJpbmdzIiwic3BsaXQiLCJpc05hTiIsIk51bWJlciIsImhvdXIiLCJwYXJzZUludCIsIm1pbnV0ZSIsImV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUiLCJpc1RpbWVBZnRlciIsInQxIiwidDIiLCJ0MUhvdXIiLCJ0MU1pbnV0ZSIsInQySG91ciIsInQyTWludXRlIiwiaXNUaW1lQmVmb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxNQUFEO0FBQUEsU0FDaEJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLElBQUlELEtBQUosQ0FBVUQsTUFBVixDQUFYLEVBQThCLFVBQUNHLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVdBLENBQUMsR0FBRyxFQUFKLGNBQWFBLENBQWIsY0FBc0JBLENBQXRCLENBQVg7QUFBQSxHQUE5QixDQURnQjtBQUFBLENBQWxCOztBQUdPLElBQU1DLEtBQUssR0FBR04sU0FBUyxDQUFDLEVBQUQsQ0FBdkI7O0FBRUEsSUFBTU8sT0FBTyxHQUFHUCxTQUFTLENBQUMsRUFBRCxDQUF6Qjs7QUFFQSxJQUFNUSxPQUFPLEdBQUdSLFNBQVMsQ0FBQyxFQUFELENBQXpCOzs7QUFFQSxJQUFNUyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBZUMsUUFBZixFQUFzQztBQUNyRSxNQUFJRCxJQUFJLENBQUNFLElBQUwsT0FBZ0IsRUFBcEIsRUFBd0I7QUFDdEIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsT0FBTyxHQUFHSCxJQUFJLENB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RUFBRCxDQUF6QixJQUFpQyxDQUFDQyxFQUFsQyxJQUF3QyxDQUFDZCxpQkFBaUIsQ0FBQ2MsRUFBRCxDQUE5RCxFQUFvRTtBQUNsRSxXQUFPLEtBQVA7QUFDRDs7QUFIcUUsK0JBSTNCSCw0QkFBNEIsQ0FBQ0UsRUFBRCxDQUpEO0FBQUEsTUFJeERFLE1BSndELDBCQUk5RFAsSUFKOEQ7QUFBQSxNQUl4Q1EsUUFKd0MsMEJBSWhETixNQUpnRDs7QUFBQSwrQkFLM0JDLDRCQUE0QixDQUFDRyxFQUFELENBTEQ7QUFBQSxNQUt4REcsTUFMd0QsMEJBSzlEVCxJQUw4RDtBQUFBLE1BS3hDVSxRQUx3QywwQkFLaERSLE1BTGdEOztBQU10RSxNQUFJSyxNQUFNLElBQUlFLE1BQVYsSUFBb0JSLFFBQVEsQ0FBQ00sTUFBRCxFQUFTLEVBQVQsQ0FBUixLQUF5Qk4sUUFBUSxDQUFDUSxNQUFELEVBQVMsRUFBVCxDQUF6RCxFQUF1RTtBQUNyRSxXQUFPRixNQUFNLEdBQUdFLE1BQWhCO0FBQ0Q7O0FBQ0QsU0FBT0QsUUFBUSxJQUFJRSxRQUFaLElBQXdCVCxRQUFRLENBQUNPLFFBQUQsRUFBVyxFQUFYLENBQVIsR0FBeUJQLFFBQVEsQ0FBQ1MsUUFBRCxFQUFXLEVBQVgsQ0FBaEU7QUFDRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFrZUFycmF5ID0gKGxlbmd0aDogbnVtYmVyKSA9PlxuICBBcnJheS5mcm9tKG5ldyBBcnJheShsZW5ndGgpLCAoXywgaSkgPT4gKGkgPCAxMCA/IGAwJHtpfWAgOiBgJHtpfWApKVxuXG5leHBvcnQgY29uc3QgaG91cnMgPSBtYWtlQXJyYXkoMjQpXG5cbmV4cG9ydCBjb25zdCBob3VyczI0ID0gbWFrZUFycmF5KDI1KVxuXG5leHBvcnQgY29uc3QgbWludXRlcyA9IG1ha2VBcnJheSg2MClcblxuZXhwb3J0IGNvbnN0IGlzTGVnYWxUaW1lU3RyaW5nID0gKHRpbWU6IHN0cmluZywgb25seUhvdXI/OiBib29sZWFuKSA9PiB7XG4gIGlmICh0aW1lLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3Qgc3RyaW5ncyA9IHRpbWUuc3BsaXQoXCI6XCIpXG4gIGlmIChcbiAgICBzdHJpbmdzLmxlbmd0aCA9PT0gMiAmJlxuICAgIHN0cmluZ3NbMF0ubGVuZ3RoID09PSAyICYmXG4gICAgc3RyaW5nc1sxXS5sZW5ndGggPT09IDIgJiZcbiAgICAhaXNOYU4oTnVtYmVyKHN0cmluZ3NbMF0pKSAmJlxuICAgICFpc05hTihOdW1iZXIoc3RyaW5nc1sxXSkpXG4gICkge1xuICAgIGNvbnN0IGhvdXIgPSBwYXJzZUludChzdHJpbmdzWzBdLCAxMClcbiAgICBjb25zdCBtaW51dGUgPSBwYXJzZUludChzdHJpbmdzWzFdLCAxMClcbiAgICAvLyDmlbTngrnpgInmi6kgb25seUhvdXIg5pe25Yik5pat6YC76L6R5LiN5LiA5qC3XG4gICAgaWYgKG9ubHlIb3VyKSB7XG4gICAgICByZXR1cm4gaG91ciA+IC0xICYmIGhvdXIgPCAyNSAmJiBtaW51dGUgPT09IDBcbiAgICB9XG4gICAgcmV0dXJuIGhvdXIgPiAtMSAmJiBob3VyIDwgMjQgJiYgbWludXRlID4gLTEgJiYgbWludXRlIDwgNjBcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUgPSAodGltZT86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF0aW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhvdXI6IG51bGwsXG4gICAgICBtaW51dGU6IG51bGwsXG4gICAgfVxuICB9XG4gIGNvbnN0IFtob3VyLCBtaW51dGVdID0gdGltZS5zcGxpdChcIjpcIilcbiAgcmV0dXJuIHtcbiAgICBob3VyOiBob3VyIHx8IG51bGwsXG4gICAgbWludXRlOiBtaW51dGUgfHwgbnVsbCxcbiAgfVxufVxuXG4vLyB0MSDmmK/lkKblnKggdDIg5ZCOXG5leHBvcnQgY29uc3QgaXNUaW1lQWZ0ZXIgPSAodDE/OiBzdHJpbmcgfCBudWxsLCB0Mj86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF0MSB8fCAhaXNMZWdhbFRpbWVTdHJpbmcodDEpIHx8ICF0MiB8fCAhaXNMZWdhbFRpbWVTdHJpbmcodDIpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgeyBob3VyOiB0MUhvdXIsIG1pbnV0ZTogdDFNaW51dGUgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUodDEpXG4gIGNvbnN0IHsgaG91cjogdDJIb3VyLCBtaW51dGU6IHQyTWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKHQyKVxuICBpZiAodDFIb3VyICYmIHQySG91ciAmJiBwYXJzZUludCh0MUhvdXIsIDEwKSAhPT0gcGFyc2VJbnQodDJIb3VyLCAxMCkpIHtcbiAgICByZXR1cm4gdDFIb3VyID4gdDJIb3VyXG4gIH1cbiAgcmV0dXJuIHQxTWludXRlICYmIHQyTWludXRlICYmIHBhcnNlSW50KHQxTWludXRlLCAxMCkgPiBwYXJzZUludCh0Mk1pbnV0ZSwgMTApXG59XG5cbi8vIHQxIOaYr+WQpuWcqCB0MiDliY1cbmV4cG9ydCBjb25zdCBpc1RpbWVCZWZvcmUgPSAodDE/OiBzdHJpbmcgfCBudWxsLCB0Mj86IHN0cmluZyB8IG51bGwpID0+IHtcbiAgaWYgKCF0MSB8fCAhaXNMZWdhbFRpbWVTdHJpbmcodDEpIHx8ICF0MiB8fCAhaXNMZWdhbFRpbWVTdHJpbmcodDIpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgeyBob3VyOiB0MUhvdXIsIG1pbnV0ZTogdDFNaW51dGUgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUodDEpXG4gIGNvbnN0IHsgaG91cjogdDJIb3VyLCBtaW51dGU6IHQyTWludXRlIH0gPSBleHRyYWN0SG91ckFuZE1pbnV0ZUZyb21UaW1lKHQyKVxuICBpZiAodDFIb3VyICYmIHQySG91ciAmJiBwYXJzZUludCh0MUhvdXIsIDEwKSAhPT0gcGFyc2VJbnQodDJIb3VyLCAxMCkpIHtcbiAgICByZXR1cm4gdDFIb3VyIDwgdDJIb3VyXG4gIH1cbiAgcmV0dXJuIHQxTWludXRlICYmIHQyTWludXRlICYmIHBhcnNlSW50KHQxTWludXRlLCAxMCkgPCBwYXJzZUludCh0Mk1pbnV0ZSwgMTApXG59XG4iXX0=