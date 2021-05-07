"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsInitialRender = useIsInitialRender;

var _react = require("react");

function useIsInitialRender() {
  var initial = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    initial.current = false;
  }, []);
  return initial.current;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvX3V0aWwvaG9va3MvdXNlLWlzLWluaXRpYWwtcmVuZGVyLnRzIl0sIm5hbWVzIjpbInVzZUlzSW5pdGlhbFJlbmRlciIsImluaXRpYWwiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sU0FBU0Esa0JBQVQsR0FBOEI7QUFDbkMsTUFBTUMsT0FBTyxHQUFHLG1CQUFPLElBQVAsQ0FBaEI7QUFFQSx3QkFBVSxZQUFNO0FBQ2RBLElBQUFBLE9BQU8sQ0FBQ0MsT0FBUixHQUFrQixLQUFsQjtBQUNELEdBRkQsRUFFRyxFQUZIO0FBSUEsU0FBT0QsT0FBTyxDQUFDQyxPQUFmO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc0luaXRpYWxSZW5kZXIoKSB7XG4gIGNvbnN0IGluaXRpYWwgPSB1c2VSZWYodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRpYWwuY3VycmVudCA9IGZhbHNlXG4gIH0sIFtdKVxuXG4gIHJldHVybiBpbml0aWFsLmN1cnJlbnRcbn1cbiJdfQ==