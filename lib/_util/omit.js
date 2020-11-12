"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var omit = function omit(obj, fields) {
  var shallowCopy = _objectSpread({}, obj);

  for (var i = 0; i < fields.length; i += 1) {
    var _key = fields[i];
    delete shallowCopy[_key];
  }

  return shallowCopy;
};

var _default = omit;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvX3V0aWwvb21pdC50cyJdLCJuYW1lcyI6WyJvbWl0Iiwib2JqIiwiZmllbGRzIiwic2hhbGxvd0NvcHkiLCJpIiwibGVuZ3RoIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsR0FBRCxFQUE4QkMsTUFBOUIsRUFBbUQ7QUFDOUQsTUFBTUMsV0FBVyxxQkFDWkYsR0FEWSxDQUFqQjs7QUFHQSxPQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csTUFBM0IsRUFBbUNELENBQUMsSUFBSSxDQUF4QyxFQUEyQztBQUN6QyxRQUFNRSxJQUFHLEdBQUdKLE1BQU0sQ0FBQ0UsQ0FBRCxDQUFsQjtBQUNBLFdBQU9ELFdBQVcsQ0FBQ0csSUFBRCxDQUFsQjtBQUNEOztBQUNELFNBQU9ILFdBQVA7QUFDRCxDQVREOztlQVdlSCxJIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb21pdCA9IChvYmo6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGZpZWxkczogc3RyaW5nW10pID0+IHtcbiAgY29uc3Qgc2hhbGxvd0NvcHkgPSB7XG4gICAgLi4ub2JqLFxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qga2V5ID0gZmllbGRzW2ldXG4gICAgZGVsZXRlIHNoYWxsb3dDb3B5W2tleV1cbiAgfVxuICByZXR1cm4gc2hhbGxvd0NvcHlcbn1cblxuZXhwb3J0IGRlZmF1bHQgb21pdFxuIl19