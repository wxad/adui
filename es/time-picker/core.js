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

export var hours = makeArray(25);
export var minutes = makeArray(60);
export var isLegalTimeString = function isLegalTimeString(time, onlyHour) {
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
export var extractHourAndMinuteFromTime = function extractHourAndMinuteFromTime(time) {
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
export var isTimeAfter = function isTimeAfter(t1, t2) {
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
export var isTimeBefore = function isTimeBefore(t1, t2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGltZS1waWNrZXIvY29yZS50cyJdLCJuYW1lcyI6WyJtYWtlQXJyYXkiLCJsZW5ndGgiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsImhvdXJzIiwibWludXRlcyIsImlzTGVnYWxUaW1lU3RyaW5nIiwidGltZSIsIm9ubHlIb3VyIiwidHJpbSIsInN0cmluZ3MiLCJzcGxpdCIsImlzTmFOIiwiTnVtYmVyIiwiaG91ciIsInBhcnNlSW50IiwibWludXRlIiwiZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSIsImlzVGltZUFmdGVyIiwidDEiLCJ0MiIsInQxSG91ciIsInQxTWludXRlIiwidDJIb3VyIiwidDJNaW51dGUiLCJpc1RpbWVCZWZvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQ7QUFBQSxTQUNoQkMsS0FBSyxDQUFDQyxJQUFOLENBQVcsSUFBSUQsS0FBSixDQUFVRCxNQUFWLENBQVgsRUFBOEIsVUFBQ0csQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBV0EsQ0FBQyxHQUFHLEVBQUosY0FBYUEsQ0FBYixjQUFzQkEsQ0FBdEIsQ0FBWDtBQUFBLEdBQTlCLENBRGdCO0FBQUEsQ0FBbEI7O0FBR0EsT0FBTyxJQUFNQyxLQUFLLEdBQUdOLFNBQVMsQ0FBQyxFQUFELENBQXZCO0FBRVAsT0FBTyxJQUFNTyxPQUFPLEdBQUdQLFNBQVMsQ0FBQyxFQUFELENBQXpCO0FBRVAsT0FBTyxJQUFNUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBZUMsUUFBZixFQUFzQztBQUNyRSxNQUFJRCxJQUFJLENBQUNFLElBQUwsT0FBZ0IsRUFBcEIsRUFBd0I7QUFDdEIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsT0FBTyxHQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxHQUFYLENBQWhCOztBQUNBLE1BQ0VELE9BQU8sQ0FB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ZCxpQkFBaUIsQ0FBQ2MsRUFBRCxDQUE5RCxFQUFvRTtBQUNsRSxXQUFPLEtBQVA7QUFDRDs7QUFIcUUsK0JBSTNCSCw0QkFBNEIsQ0FBQ0UsRUFBRCxDQUpEO0FBQUEsTUFJeERFLE1BSndELDBCQUk5RFAsSUFKOEQ7QUFBQSxNQUl4Q1EsUUFKd0MsMEJBSWhETixNQUpnRDs7QUFBQSwrQkFLM0JDLDRCQUE0QixDQUFDRyxFQUFELENBTEQ7QUFBQSxNQUt4REcsTUFMd0QsMEJBSzlEVCxJQUw4RDtBQUFBLE1BS3hDVSxRQUx3QywwQkFLaERSLE1BTGdEOztBQU10RSxNQUFJSyxNQUFNLElBQUlFLE1BQVYsSUFBb0JSLFFBQVEsQ0FBQ00sTUFBRCxFQUFTLEVBQVQsQ0FBUixLQUF5Qk4sUUFBUSxDQUFDUSxNQUFELEVBQVMsRUFBVCxDQUF6RCxFQUF1RTtBQUNyRSxXQUFPRixNQUFNLEdBQUdFLE1BQWhCO0FBQ0Q7O0FBQ0QsU0FBT0QsUUFBUSxJQUFJRSxRQUFaLElBQXdCVCxRQUFRLENBQUNPLFFBQUQsRUFBVyxFQUFYLENBQVIsR0FBeUJQLFFBQVEsQ0FBQ1MsUUFBRCxFQUFXLEVBQVgsQ0FBaEU7QUFDRCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWFrZUFycmF5ID0gKGxlbmd0aDogbnVtYmVyKSA9PlxuICBBcnJheS5mcm9tKG5ldyBBcnJheShsZW5ndGgpLCAoXywgaSkgPT4gKGkgPCAxMCA/IGAwJHtpfWAgOiBgJHtpfWApKVxuXG5leHBvcnQgY29uc3QgaG91cnMgPSBtYWtlQXJyYXkoMjUpXG5cbmV4cG9ydCBjb25zdCBtaW51dGVzID0gbWFrZUFycmF5KDYwKVxuXG5leHBvcnQgY29uc3QgaXNMZWdhbFRpbWVTdHJpbmcgPSAodGltZTogc3RyaW5nLCBvbmx5SG91cj86IGJvb2xlYW4pID0+IHtcbiAgaWYgKHRpbWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBzdHJpbmdzID0gdGltZS5zcGxpdChcIjpcIilcbiAgaWYgKFxuICAgIHN0cmluZ3MubGVuZ3RoID09PSAyICYmXG4gICAgc3RyaW5nc1swXS5sZW5ndGggPT09IDIgJiZcbiAgICBzdHJpbmdzWzFdLmxlbmd0aCA9PT0gMiAmJlxuICAgICFpc05hTihOdW1iZXIoc3RyaW5nc1swXSkpICYmXG4gICAgIWlzTmFOKE51bWJlcihzdHJpbmdzWzFdKSlcbiAgKSB7XG4gICAgY29uc3QgaG91ciA9IHBhcnNlSW50KHN0cmluZ3NbMF0sIDEwKVxuICAgIGNvbnN0IG1pbnV0ZSA9IHBhcnNlSW50KHN0cmluZ3NbMV0sIDEwKVxuICAgIC8vIOaVtOeCuemAieaLqSBvbmx5SG91ciDml7bliKTmlq3pgLvovpHkuI3kuIDmoLdcbiAgICBpZiAob25seUhvdXIpIHtcbiAgICAgIHJldHVybiBob3VyID4gLTEgJiYgaG91ciA8IDI1ICYmIG1pbnV0ZSA9PT0gMFxuICAgIH1cbiAgICByZXR1cm4gaG91ciA+IC0xICYmIGhvdXIgPCAyNSAmJiBtaW51dGUgPiAtMSAmJiBtaW51dGUgPCA2MFxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSA9ICh0aW1lPzogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXRpbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaG91cjogbnVsbCxcbiAgICAgIG1pbnV0ZTogbnVsbCxcbiAgICB9XG4gIH1cbiAgY29uc3QgW2hvdXIsIG1pbnV0ZV0gPSB0aW1lLnNwbGl0KFwiOlwiKVxuICByZXR1cm4ge1xuICAgIGhvdXI6IGhvdXIgfHwgbnVsbCxcbiAgICBtaW51dGU6IG1pbnV0ZSB8fCBudWxsLFxuICB9XG59XG5cbi8vIHQxIOaYr+WQpuWcqCB0MiDlkI5cbmV4cG9ydCBjb25zdCBpc1RpbWVBZnRlciA9ICh0MT86IHN0cmluZyB8IG51bGwsIHQyPzogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXQxIHx8ICFpc0xlZ2FsVGltZVN0cmluZyh0MSkgfHwgIXQyIHx8ICFpc0xlZ2FsVGltZVN0cmluZyh0MikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCB7IGhvdXI6IHQxSG91ciwgbWludXRlOiB0MU1pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSh0MSlcbiAgY29uc3QgeyBob3VyOiB0MkhvdXIsIG1pbnV0ZTogdDJNaW51dGUgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUodDIpXG4gIGlmICh0MUhvdXIgJiYgdDJIb3VyICYmIHBhcnNlSW50KHQxSG91ciwgMTApICE9PSBwYXJzZUludCh0MkhvdXIsIDEwKSkge1xuICAgIHJldHVybiB0MUhvdXIgPiB0MkhvdXJcbiAgfVxuICByZXR1cm4gdDFNaW51dGUgJiYgdDJNaW51dGUgJiYgcGFyc2VJbnQodDFNaW51dGUsIDEwKSA+IHBhcnNlSW50KHQyTWludXRlLCAxMClcbn1cblxuLy8gdDEg5piv5ZCm5ZyoIHQyIOWJjVxuZXhwb3J0IGNvbnN0IGlzVGltZUJlZm9yZSA9ICh0MT86IHN0cmluZyB8IG51bGwsIHQyPzogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXQxIHx8ICFpc0xlZ2FsVGltZVN0cmluZyh0MSkgfHwgIXQyIHx8ICFpc0xlZ2FsVGltZVN0cmluZyh0MikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCB7IGhvdXI6IHQxSG91ciwgbWludXRlOiB0MU1pbnV0ZSB9ID0gZXh0cmFjdEhvdXJBbmRNaW51dGVGcm9tVGltZSh0MSlcbiAgY29uc3QgeyBob3VyOiB0MkhvdXIsIG1pbnV0ZTogdDJNaW51dGUgfSA9IGV4dHJhY3RIb3VyQW5kTWludXRlRnJvbVRpbWUodDIpXG4gIGlmICh0MUhvdXIgJiYgdDJIb3VyICYmIHBhcnNlSW50KHQxSG91ciwgMTApICE9PSBwYXJzZUludCh0MkhvdXIsIDEwKSkge1xuICAgIHJldHVybiB0MUhvdXIgPCB0MkhvdXJcbiAgfVxuICByZXR1cm4gdDFNaW51dGUgJiYgdDJNaW51dGUgJiYgcGFyc2VJbnQodDFNaW51dGUsIDEwKSA8IHBhcnNlSW50KHQyTWludXRlLCAxMClcbn1cbiJdfQ==