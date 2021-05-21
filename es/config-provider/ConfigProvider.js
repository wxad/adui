function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from "react";
import PropTypes from "prop-types";
export var ConfigContext = React.createContext({});
export var ConfigConsumer = ConfigContext.Consumer;
export var getComputedSize = function getComputedSize(size0, size1, size2) {
  if (size0 !== "small" && size0) {
    return size0;
  }

  if (size1 !== "small" && size1) {
    return size1;
  }

  return size2 || size1 || size0 || "small";
};

var ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children,
      getPopupContainer = _ref.getPopupContainer,
      size = _ref.size,
      otherProps = _objectWithoutProperties(_ref, ["children", "getPopupContainer", "size"]);

  return React.createElement(ConfigContext.Provider, _extends({
    value: {
      getPopupContainer: getPopupContainer,
      size: size
    }
  }, otherProps), children);
};

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  getPopupContainer: PropTypes.func
};
ConfigProvider.defaultProps = {
  getPopupContainer: undefined,
  size: undefined
};
export default ConfigProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY29uZmlnLXByb3ZpZGVyL0NvbmZpZ1Byb3ZpZGVyLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNvbmZpZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ29uZmlnQ29uc3VtZXIiLCJDb25zdW1lciIsImdldENvbXB1dGVkU2l6ZSIsInNpemUwIiwic2l6ZTEiLCJzaXplMiIsIkNvbmZpZ1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJnZXRQb3B1cENvbnRhaW5lciIsInNpemUiLCJvdGhlclByb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFzQkEsT0FBTyxJQUFNQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csYUFBTixDQUEwQyxFQUExQyxDQUF0QjtBQUVQLE9BQU8sSUFBTUMsY0FBYyxHQUFHRixhQUFhLENBQUNHLFFBQXJDO0FBS1AsT0FBTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQzdCQyxLQUQ2QixFQUU3QkMsS0FGNkIsRUFHN0JDLEtBSDZCLEVBSWhCO0FBQ2IsTUFBSUYsS0FBSyxLQUFLLE9BQVYsSUFBcUJBLEtBQXpCLEVBQWdDO0FBQzlCLFdBQU9BLEtBQVA7QUFDRDs7QUFDRCxNQUFJQyxLQUFLLEtBQUssT0FBVixJQUFxQkEsS0FBekIsRUFBZ0M7QUFDOUIsV0FBT0EsS0FBUDtBQUNEOztBQUNELFNBQU9DLEtBQUssSUFBSUQsS0FBVCxJQUFrQkQsS0FBbEIsSUFBMkIsT0FBbEM7QUFDRCxDQVpNOztBQWNQLElBQU1HLGNBQThDLEdBQUcsU0FBakRBLGNBQWlELE9BS2pEO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsaUJBR0ksUUFISkEsaUJBR0k7QUFBQSxNQUZKQyxJQUVJLFFBRkpBLElBRUk7QUFBQSxNQUREQyxVQUNDOztBQUNKLFNBQ0Usb0JBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsSUFBQSxLQUFLLEVBQUU7QUFBRUYsTUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFBRjtBQUFxQkMsTUFBQUEsSUFBSSxFQUFKQTtBQUFyQjtBQUEvQixLQUFnRUMsVUFBaEUsR0FDR0gsUUFESCxDQURGO0FBS0QsQ0FYRDs7QUFhQUQsY0FBYyxDQUFDSyxTQUFmLEdBQTJCO0FBSXpCSixFQUFBQSxRQUFRLEVBQUVWLFNBQVMsQ0FBQ2UsSUFBVixDQUFlQyxVQUpBO0FBUXpCSixFQUFBQSxJQUFJLEVBQUVaLFNBQVMsQ0FBQ2lCLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQVJtQjtBQVl6Qk4sRUFBQUEsaUJBQWlCLEVBQUVYLFNBQVMsQ0FBQ2tCO0FBWkosQ0FBM0I7QUFlQVQsY0FBYyxDQUFDVSxZQUFmLEdBQThCO0FBQzVCUixFQUFBQSxpQkFBaUIsRUFBRVMsU0FEUztBQUU1QlIsRUFBQUEsSUFBSSxFQUFFUTtBQUZzQixDQUE5QjtBQUtBLGVBQWVYLGNBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5cbnR5cGUgc2l6ZVR5cGUgPSBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnQ29uc3VtZXJQcm9wcyB7XG4gIC8qKlxuICAgKiDmjIflrprmsJTms6Hmj5DnpLrnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIC8qKlxuICAgKiDorr7nva7miYDmnInnu4Tku7bnmoQgc2l6ZVxuICAgKi9cbiAgc2l6ZT86IHNpemVUeXBlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZ1Byb3ZpZGVyUHJvcHMgZXh0ZW5kcyBJQ29uZmlnQ29uc3VtZXJQcm9wcyB7XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PElDb25maWdDb25zdW1lclByb3BzPih7fSlcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnN1bWVyID0gQ29uZmlnQ29udGV4dC5Db25zdW1lclxuXG4vKipcbiAqIOS4ieS4qiBwYXJhbe+8jOadg+mHjeS+neasoemAkuWHj1xuICovXG5leHBvcnQgY29uc3QgZ2V0Q29tcHV0ZWRTaXplID0gKFxuICBzaXplMD86IHNpemVUeXBlLFxuICBzaXplMT86IHNpemVUeXBlLFxuICBzaXplMj86IHNpemVUeXBlXG4pOiBzaXplVHlwZSA9PiB7XG4gIGlmIChzaXplMCAhPT0gXCJzbWFsbFwiICYmIHNpemUwKSB7XG4gICAgcmV0dXJuIHNpemUwXG4gIH1cbiAgaWYgKHNpemUxICE9PSBcInNtYWxsXCIgJiYgc2l6ZTEpIHtcbiAgICByZXR1cm4gc2l6ZTFcbiAgfVxuICByZXR1cm4gc2l6ZTIgfHwgc2l6ZTEgfHwgc2l6ZTAgfHwgXCJzbWFsbFwiXG59XG5cbmNvbnN0IENvbmZpZ1Byb3ZpZGVyOiBSZWFjdC5GQzxJQ29uZmlnUHJvdmlkZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgZ2V0UG9wdXBDb250YWluZXIsXG4gIHNpemUsXG4gIC4uLm90aGVyUHJvcHNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29uZmlnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBnZXRQb3B1cENvbnRhaW5lciwgc2l6ZSB9fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbkNvbmZpZ1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiDorr7nva7miYDmnInnu4Tku7bnmoQgc2l6ZVxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOaMh+WumuawlOazoeaPkOekuueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbkNvbmZpZ1Byb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ2V0UG9wdXBDb250YWluZXI6IHVuZGVmaW5lZCxcbiAgc2l6ZTogdW5kZWZpbmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdQcm92aWRlclxuIl19