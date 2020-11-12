"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe("Table", function () {
  it("快照核对", function () {
    var wrapper = _reactTestRenderer["default"].create(React.createElement(_["default"], {
      dataSource: [{
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
      }, {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
      }, {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
      }, {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
      }, {
        "one": "阿萨德",
        "two": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "four": "阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德",
        "three": "阿萨德阿萨德阿萨德阿萨德阿萨德"
      }]
    }));

    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwiVGVzdFJlbmRlcmVyIiwiY3JlYXRlIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBR0FBLFFBQVEsQ0FBQyxPQUFELEVBQVUsWUFBTTtBQUN0QkMsRUFBQUEsRUFBRSxDQUFDLE1BQUQsRUFBUyxZQUFNO0FBQ2YsUUFBTUMsT0FBTyxHQUFHQyw4QkFBYUMsTUFBYixDQUFvQixvQkFBQyxZQUFEO0FBQU8sTUFBQSxVQUFVLEVBQUUsQ0FDckQ7QUFDRSxlQUFPLEtBRFQ7QUFFRSxlQUFPLG9CQUZUO0FBR0UsZ0JBQVEseUNBSFY7QUFJRSxpQkFBUztBQUpYLE9BRHFELEVBT3JEO0FBQ0UsZUFBTyxLQURUO0FBRUUsZUFBTyxvQkFGVDtBQUdFLGdCQUFRLHlDQUhWO0FBSUUsaUJBQVM7QUFKWCxPQVBxRCxFQWFyRDtBQUNFLGVBQU8sS0FEVDtBQUVFLGVBQU8sb0JBRlQ7QUFHRSxnQkFBUSx5Q0FIVjtBQUlFLGlCQUFTO0FBSlgsT0FicUQsRUFtQnJEO0FBQ0UsZUFBTyxLQURUO0FBRUUsZUFBTyxvQkFGVDtBQUdFLGdCQUFRLHlDQUhWO0FBSUUsaUJBQVM7QUFKWCxPQW5CcUQsRUF5QnJEO0FBQ0UsZUFBTyxLQURUO0FBRUUsZUFBTyxvQkFGVDtBQUdFLGdCQUFRLHlDQUhWO0FBSUUsaUJBQVM7QUFKWCxPQXpCcUQ7QUFBbkIsTUFBcEIsQ0FBaEI7O0FBZ0NBQyxJQUFBQSxNQUFNLENBQUNILE9BQUQsQ0FBTixDQUFnQkksZUFBaEI7QUFDRCxHQWxDQyxDQUFGO0FBbUNELENBcENPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLidcblxuXG5kZXNjcmliZShcIlRhYmxlXCIsICgpID0+IHtcbiAgaXQoXCLlv6vnhafmoLjlr7lcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKDxUYWJsZSBkYXRhU291cmNlPXtbXG4gICAgICB7XG4gICAgICAgIFwib25lXCI6IFwi6Zi/6JCo5b63XCIsXG4gICAgICAgIFwidHdvXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgICAgIFwiZm91clwiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgICAgICBcInRocmVlXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm9uZVwiOiBcIumYv+iQqOW+t1wiLFxuICAgICAgICBcInR3b1wiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgICAgICBcImZvdXJcIjogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICAgICAgXCJ0aHJlZVwiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJvbmVcIjogXCLpmL/okKjlvrdcIixcbiAgICAgICAgXCJ0d29cIjogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICAgICAgXCJmb3VyXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgICAgIFwidGhyZWVcIjogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwib25lXCI6IFwi6Zi/6JCo5b63XCIsXG4gICAgICAgIFwidHdvXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgICAgIFwiZm91clwiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgICAgICBcInRocmVlXCI6IFwi6Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b636Zi/6JCo5b63XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm9uZVwiOiBcIumYv+iQqOW+t1wiLFxuICAgICAgICBcInR3b1wiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgICAgICBcImZvdXJcIjogXCLpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrfpmL/okKjlvrdcIixcbiAgICAgICAgXCJ0aHJlZVwiOiBcIumYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t+mYv+iQqOW+t1wiLFxuICAgICAgfSxcbiAgICBdfSAvPilcbiAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KClcbiAgfSlcbn0pXG4iXX0=