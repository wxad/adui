"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Aside = _interopRequireDefault(require("./Aside"));

var _Header = _interopRequireDefault(require("./Header"));

var _Main = _interopRequireDefault(require("./Main"));

var _Context = require("./Context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Layout = function Layout(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      headerAffixed = _useState2[0],
      setHeaderAffixed = _useState2[1];

  return _react["default"].createElement(_Context.LayoutContext.Provider, {
    value: {
      headerAffixed: headerAffixed,
      setHeaderAffixed: setHeaderAffixed
    }
  }, _react["default"].createElement("div", props));
};

Layout.Aside = _Aside["default"];
Layout.Header = _Header["default"];
Layout.Main = _Main["default"];
Layout.propTypes = {
  children: _propTypes["default"].node
};
Layout.defaultProps = {
  children: null
};
var _default = Layout;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJoZWFkZXJBZmZpeGVkIiwic2V0SGVhZGVyQWZmaXhlZCIsIkFzaWRlIiwiSGVhZGVyIiwiTWFpbiIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUHJvcFR5cGVzIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTUEsTUFJTCxHQUFHLFNBSkVBLE1BSUYsQ0FBQ0MsS0FBRCxFQUF5QjtBQUFBLGtCQUNlLHFCQUFTLEtBQVQsQ0FEZjtBQUFBO0FBQUEsTUFDcEJDLGFBRG9CO0FBQUEsTUFDTEMsZ0JBREs7O0FBRzNCLFNBQ0UsZ0NBQUMsc0JBQUQsQ0FBZSxRQUFmO0FBQXdCLElBQUEsS0FBSyxFQUFFO0FBQUVELE1BQUFBLGFBQWEsRUFBYkEsYUFBRjtBQUFpQkMsTUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUFqQjtBQUEvQixLQUNFLHVDQUFTRixLQUFULENBREYsQ0FERjtBQUtELENBWkQ7O0FBYUFELE1BQU0sQ0FBQ0ksS0FBUCxHQUFlQSxpQkFBZjtBQUNBSixNQUFNLENBQUNLLE1BQVAsR0FBZ0JBLGtCQUFoQjtBQUNBTCxNQUFNLENBQUNNLElBQVAsR0FBY0EsZ0JBQWQ7QUFFQU4sTUFBTSxDQUFDTyxTQUFQLEdBQW1CO0FBSWpCQyxFQUFBQSxRQUFRLEVBQUVDLHNCQUFVQztBQUpILENBQW5CO0FBT0FWLE1BQU0sQ0FBQ1csWUFBUCxHQUFzQjtBQUNwQkgsRUFBQUEsUUFBUSxFQUFFO0FBRFUsQ0FBdEI7ZUFJZVIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi9Bc2lkZVwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCJcbmltcG9ydCB7IExheW91dENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJTGF5b3V0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDluIPlsYDnu4Tku7bnlKjkuo7mkK3lu7rkuIDkuKrnvZHnq5nnmoTln7rmnKzmoYbmnrbjgILljIXlkKvlrZDnu4Tku7YgYEFzaWRlYCBgSGVhZGVyYCBgTWFpbmBcbiAqL1xuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxJTGF5b3V0UHJvcHM+ICYge1xuICBBc2lkZTogdHlwZW9mIEFzaWRlXG4gIEhlYWRlcjogdHlwZW9mIEhlYWRlclxuICBNYWluOiB0eXBlb2YgTWFpblxufSA9IChwcm9wczogSUxheW91dFByb3BzKSA9PiB7XG4gIGNvbnN0IFtoZWFkZXJBZmZpeGVkLCBzZXRIZWFkZXJBZmZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaGVhZGVyQWZmaXhlZCwgc2V0SGVhZGVyQWZmaXhlZCB9fT5cbiAgICAgIDxkaXYgey4uLnByb3BzfSAvPlxuICAgIDwvTGF5b3V0Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuTGF5b3V0LkFzaWRlID0gQXNpZGVcbkxheW91dC5IZWFkZXIgPSBIZWFkZXJcbkxheW91dC5NYWluID0gTWFpblxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ==