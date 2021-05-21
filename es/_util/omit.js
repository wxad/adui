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

export default omit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvX3V0aWwvb21pdC50cyJdLCJuYW1lcyI6WyJvbWl0Iiwib2JqIiwiZmllbGRzIiwic2hhbGxvd0NvcHkiLCJpIiwibGVuZ3RoIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxHQUFELEVBQThCQyxNQUE5QixFQUFtRDtBQUM5RCxNQUFNQyxXQUFXLHFCQUNaRixHQURZLENBQWpCOztBQUdBLE9BQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsTUFBTSxDQUFDRyxNQUEzQixFQUFtQ0QsQ0FBQyxJQUFJLENBQXhDLEVBQTJDO0FBQ3pDLFFBQU1FLElBQUcsR0FBR0osTUFBTSxDQUFDRSxDQUFELENBQWxCO0FBQ0EsV0FBT0QsV0FBVyxDQUFDRyxJQUFELENBQWxCO0FBQ0Q7O0FBQ0QsU0FBT0gsV0FBUDtBQUNELENBVEQ7O0FBV0EsZUFBZUgsSUFBZiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9taXQgPSAob2JqOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBmaWVsZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHNoYWxsb3dDb3B5ID0ge1xuICAgIC4uLm9iaixcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGtleSA9IGZpZWxkc1tpXVxuICAgIGRlbGV0ZSBzaGFsbG93Q29weVtrZXldXG4gIH1cbiAgcmV0dXJuIHNoYWxsb3dDb3B5XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9taXRcbiJdfQ==