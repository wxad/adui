"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsMounted = useIsMounted;

var _react = require("react");

function useIsMounted() {
  var mounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return mounted;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvX3V0aWwvaG9va3MvdXNlLWlzLW1vdW50ZWQudHMiXSwibmFtZXMiOlsidXNlSXNNb3VudGVkIiwibW91bnRlZCIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxTQUFTQSxZQUFULEdBQXdCO0FBQzdCLE1BQU1DLE9BQU8sR0FBRyxtQkFBTyxJQUFQLENBQWhCO0FBRUEsd0JBQVUsWUFBTTtBQUNkLFdBQU8sWUFBTTtBQUNYQSxNQUFBQSxPQUFPLENBQUNDLE9BQVIsR0FBa0IsS0FBbEI7QUFDRCxLQUZEO0FBR0QsR0FKRCxFQUlHLEVBSkg7QUFNQSxTQUFPRCxPQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc01vdW50ZWQoKSB7XG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIG1vdW50ZWRcbn1cbiJdfQ==