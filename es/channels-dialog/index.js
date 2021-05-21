function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Dialog from "./Dialog";
import confirm from "./confirm";
var INTENTS = ["info", "success", "warning", "danger"];

Dialog.confirm = function (props) {
  var config = _objectSpread(_objectSpread({}, props), {}, {
    type: "confirm"
  });

  return confirm(config);
};

Dialog.inform = function (props) {
  var config = _objectSpread(_objectSpread({}, props), {}, {
    type: "inform"
  });

  return confirm(config);
};

INTENTS.forEach(function (intent) {
  Dialog[intent] = function (props) {
    var style = props.style,
        otherProps = _objectWithoutProperties(props, ["style"]);

    var config = _objectSpread(_objectSpread({}, otherProps), {}, {
      intent: intent,
      style: _objectSpread({
        maxWidth: "496px",
        minHeight: "280px"
      }, style)
    });

    return confirm(config);
  };
});
export default Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2hhbm5lbHMtZGlhbG9nL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJEaWFsb2ciLCJjb25maXJtIiwiSU5URU5UUyIsInByb3BzIiwiY29uZmlnIiwidHlwZSIsImluZm9ybSIsImZvckVhY2giLCJpbnRlbnQiLCJzdHlsZSIsIm90aGVyUHJvcHMiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBcUMsVUFBckM7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFdBQXBCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLENBQ2QsTUFEYyxFQUVkLFNBRmMsRUFHZCxTQUhjLEVBSWQsUUFKYyxDQUFoQjs7QUFPQUYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFVBQUNFLEtBQUQsRUFBeUI7QUFDeEMsTUFBTUMsTUFBTSxtQ0FDUEQsS0FETztBQUVWRSxJQUFBQSxJQUFJLEVBQUU7QUFGSSxJQUFaOztBQUlBLFNBQU9KLE9BQU8sQ0FBQ0csTUFBRCxDQUFkO0FBQ0QsQ0FORDs7QUFRQUosTUFBTSxDQUFDTSxNQUFQLEdBQWdCLFVBQUNILEtBQUQsRUFBeUI7QUFDdkMsTUFBTUMsTUFBTSxtQ0FDUEQsS0FETztBQUVWRSxJQUFBQSxJQUFJLEVBQUU7QUFGSSxJQUFaOztBQUlBLFNBQU9KLE9BQU8sQ0FBQ0csTUFBRCxDQUFkO0FBQ0QsQ0FORDs7QUFRQUYsT0FBTyxDQUFDSyxPQUFSLENBQWdCLFVBQUNDLE1BQUQsRUFBWTtBQUMxQlIsRUFBQUEsTUFBTSxDQUFDUSxNQUFELENBQU4sR0FBaUIsVUFBQ0wsS0FBRCxFQUF5QjtBQUFBLFFBQ2hDTSxLQURnQyxHQUNQTixLQURPLENBQ2hDTSxLQURnQztBQUFBLFFBQ3RCQyxVQURzQiw0QkFDUFAsS0FETzs7QUFHeEMsUUFBTUMsTUFBTSxtQ0FDUE0sVUFETztBQUVWRixNQUFBQSxNQUFNLEVBQU5BLE1BRlU7QUFHVkMsTUFBQUEsS0FBSztBQUNIRSxRQUFBQSxRQUFRLEVBQUUsT0FEUDtBQUVIQyxRQUFBQSxTQUFTLEVBQUU7QUFGUixTQUdBSCxLQUhBO0FBSEssTUFBWjs7QUFTQSxXQUFPUixPQUFPLENBQUNHLE1BQUQsQ0FBZDtBQUNELEdBYkQ7QUFjRCxDQWZEO0FBaUJBLGVBQWVKLE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nLCB7IElEaWFsb2dQcm9wcyB9IGZyb20gXCIuL0RpYWxvZ1wiXG5pbXBvcnQgY29uZmlybSBmcm9tIFwiLi9jb25maXJtXCJcblxuY29uc3QgSU5URU5UUyA9IFtcbiAgXCJpbmZvXCIgYXMgXCJpbmZvXCIsXG4gIFwic3VjY2Vzc1wiIGFzIFwic3VjY2Vzc1wiLFxuICBcIndhcm5pbmdcIiBhcyBcIndhcm5pbmdcIixcbiAgXCJkYW5nZXJcIiBhcyBcImRhbmdlclwiLFxuXVxuXG5EaWFsb2cuY29uZmlybSA9IChwcm9wczogSURpYWxvZ1Byb3BzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAuLi5wcm9wcyxcbiAgICB0eXBlOiBcImNvbmZpcm1cIiBhcyBcImNvbmZpcm1cIixcbiAgfVxuICByZXR1cm4gY29uZmlybShjb25maWcpXG59XG5cbkRpYWxvZy5pbmZvcm0gPSAocHJvcHM6IElEaWFsb2dQcm9wcykgPT4ge1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgLi4ucHJvcHMsXG4gICAgdHlwZTogXCJpbmZvcm1cIiBhcyBcImluZm9ybVwiLFxuICB9XG4gIHJldHVybiBjb25maXJtKGNvbmZpZylcbn1cblxuSU5URU5UUy5mb3JFYWNoKChpbnRlbnQpID0+IHtcbiAgRGlhbG9nW2ludGVudF0gPSAocHJvcHM6IElEaWFsb2dQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgc3R5bGUsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5vdGhlclByb3BzLFxuICAgICAgaW50ZW50LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbWF4V2lkdGg6IFwiNDk2cHhcIixcbiAgICAgICAgbWluSGVpZ2h0OiBcIjI4MHB4XCIsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfSxcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpcm0oY29uZmlnKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dcbiJdfQ==