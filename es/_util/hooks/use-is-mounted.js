import { useRef, useEffect } from "react";
export function useIsMounted() {
  var mounted = useRef(true);
  useEffect(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return mounted;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvX3V0aWwvaG9va3MvdXNlLWlzLW1vdW50ZWQudHMiXSwibmFtZXMiOlsidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlSXNNb3VudGVkIiwibW91bnRlZCIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQVQsRUFBaUJDLFNBQWpCLFFBQWtDLE9BQWxDO0FBRUEsT0FBTyxTQUFTQyxZQUFULEdBQXdCO0FBQzdCLE1BQU1DLE9BQU8sR0FBR0gsTUFBTSxDQUFDLElBQUQsQ0FBdEI7QUFFQUMsRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZCxXQUFPLFlBQU07QUFDWEUsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLEdBQWtCLEtBQWxCO0FBQ0QsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUFPRCxPQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJc01vdW50ZWQoKSB7XG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIG1vdW50ZWRcbn1cbiJdfQ==