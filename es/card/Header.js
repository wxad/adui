function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ConfigContext, getComputedSize } from "../config-provider";
import "./style";
var prefix = "adui-card";

var Header = function Header(_ref) {
  var children = _ref.children,
      className = _ref.className,
      topContent = _ref.topContent,
      size = _ref.size,
      subTitle = _ref.subTitle,
      title = _ref.title,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "topContent", "size", "subTitle", "title"]);

  var _useContext = useContext(ConfigContext),
      sizeContext = _useContext.size;

  var classSet = classNames(className, "".concat(prefix, "-header"), "".concat(prefix, "-").concat(getComputedSize(size, sizeContext)));
  return React.createElement("div", _extends({
    className: classSet
  }, otherProps), React.createElement("div", {
    className: "".concat(prefix, "-headerBlock")
  }, !!title && React.createElement("div", {
    className: "".concat(prefix, "-headerTop")
  }, React.createElement("div", {
    className: "".concat(prefix, "-title")
  }, title), !!subTitle && React.createElement("div", {
    className: "".concat(prefix, "-subTitle")
  }, subTitle)), !!topContent && React.createElement("div", {
    className: "".concat(prefix, "-topContent")
  }, topContent)), !!children && React.createElement("div", {
    className: "".concat(prefix, "-children")
  }, children));
};

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  subTitle: PropTypes.node,
  title: PropTypes.node,
  topContent: PropTypes.node
};
Header.defaultProps = {
  children: "",
  className: undefined,
  size: "small",
  subTitle: null,
  title: null,
  topContent: null
};
export default Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvY2FyZC9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIlByb3BUeXBlcyIsImNsYXNzTmFtZXMiLCJDb25maWdDb250ZXh0IiwiZ2V0Q29tcHV0ZWRTaXplIiwicHJlZml4IiwiSGVhZGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJ0b3BDb250ZW50Iiwic2l6ZSIsInN1YlRpdGxlIiwidGl0bGUiLCJvdGhlclByb3BzIiwic2l6ZUNvbnRleHQiLCJjbGFzc1NldCIsInByb3BUeXBlcyIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsUUFBa0MsT0FBbEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLGVBQXhCLFFBQStDLG9CQUEvQztBQUNBLE9BQU8sU0FBUDtBQUVBLElBQU1DLE1BQU0sR0FBRyxXQUFmOztBQWlDQSxJQUFNQyxNQUE4QixHQUFHLFNBQWpDQSxNQUFpQyxPQVFqQztBQUFBLE1BUEpDLFFBT0ksUUFQSkEsUUFPSTtBQUFBLE1BTkpDLFNBTUksUUFOSkEsU0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtBQUFBLE1BRkpDLEtBRUksUUFGSkEsS0FFSTtBQUFBLE1BRERDLFVBQ0M7O0FBQUEsb0JBQzBCYixVQUFVLENBQUNHLGFBQUQsQ0FEcEM7QUFBQSxNQUNVVyxXQURWLGVBQ0lKLElBREo7O0FBR0osTUFBTUssUUFBUSxHQUFHYixVQUFVLENBQ3pCTSxTQUR5QixZQUV0QkgsTUFGc0Isd0JBR3RCQSxNQUhzQixjQUdaRCxlQUFlLENBQUNNLElBQUQsRUFBT0ksV0FBUCxDQUhILEVBQTNCO0FBTUEsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFFQztBQUFoQixLQUE4QkYsVUFBOUIsR0FDRTtBQUFLLElBQUEsU0FBUyxZQUFLUixNQUFMO0FBQWQsS0FDRyxDQUFDLENBQUNPLEtBQUYsSUFDQztBQUFLLElBQUEsU0FBUyxZQUFLUCxNQUFMO0FBQWQsS0FDRTtBQUFLLElBQUEsU0FBUyxZQUFLQSxNQUFMO0FBQWQsS0FBb0NPLEtBQXBDLENBREYsRUFFRyxDQUFDLENBQUNELFFBQUYsSUFDQztBQUFLLElBQUEsU0FBUyxZQUFLTixNQUFMO0FBQWQsS0FBdUNNLFFBQXZDLENBSEosQ0FGSixFQVNHLENBQUMsQ0FBQ0YsVUFBRixJQUNDO0FBQUssSUFBQSxTQUFTLFlBQUtKLE1BQUw7QUFBZCxLQUF5Q0ksVUFBekMsQ0FWSixDQURGLEVBY0csQ0FBQyxDQUFDRixRQUFGLElBQWM7QUFBSyxJQUFBLFNBQVMsWUFBS0YsTUFBTDtBQUFkLEtBQXVDRSxRQUF2QyxDQWRqQixDQURGO0FBa0JELENBbkNEOztBQXFDQUQsTUFBTSxDQUFDVSxTQUFQLEdBQW1CO0FBSWpCVCxFQUFBQSxRQUFRLEVBQUVOLFNBQVMsQ0FBQ2dCLElBSkg7QUFRakJULEVBQUFBLFNBQVMsRUFBRVAsU0FBUyxDQUFDaUIsTUFSSjtBQVlqQlIsRUFBQUEsSUFBSSxFQUFFVCxTQUFTLENBQUNrQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FBaEIsQ0FaVztBQWdCakJSLEVBQUFBLFFBQVEsRUFBRVYsU0FBUyxDQUFDZ0IsSUFoQkg7QUFvQmpCTCxFQUFBQSxLQUFLLEVBQUVYLFNBQVMsQ0FBQ2dCLElBcEJBO0FBd0JqQlIsRUFBQUEsVUFBVSxFQUFFUixTQUFTLENBQUNnQjtBQXhCTCxDQUFuQjtBQTJCQVgsTUFBTSxDQUFDYyxZQUFQLEdBQXNCO0FBQ3BCYixFQUFBQSxRQUFRLEVBQUUsRUFEVTtBQUVwQkMsRUFBQUEsU0FBUyxFQUFFYSxTQUZTO0FBR3BCWCxFQUFBQSxJQUFJLEVBQUUsT0FIYztBQUlwQkMsRUFBQUEsUUFBUSxFQUFFLElBSlU7QUFLcEJDLEVBQUFBLEtBQUssRUFBRSxJQUxhO0FBTXBCSCxFQUFBQSxVQUFVLEVBQUU7QUFOUSxDQUF0QjtBQVNBLGVBQWVILE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQsIGdldENvbXB1dGVkU2l6ZSB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1jYXJkXCJcblxuZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOWNoeeJh+WJr+agh+mimFxuICAgKi9cbiAgc3ViVGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWNoeeJh+S4u+agh+mimO+8iOWmguS4jeWhq+aVtOS4quagh+mimOaooeWdl+makOiXj++8iVxuICAgKi9cbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWktOmDqOWPs+S+p+iKgueCuVxuICAgKi9cbiAgdG9wQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOWNoeeJh+e7hOS7tuWktOmDqOmDqOWIhlxuICovXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPElIZWFkZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICB0b3BDb250ZW50LFxuICBzaXplLFxuICBzdWJUaXRsZSxcbiAgdGl0bGUsXG4gIC4uLm90aGVyUHJvcHNcbn0pID0+IHtcbiAgY29uc3QgeyBzaXplOiBzaXplQ29udGV4dCB9ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KVxuXG4gIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7cHJlZml4fS1oZWFkZXJgLFxuICAgIGAke3ByZWZpeH0tJHtnZXRDb21wdXRlZFNpemUoc2l6ZSwgc2l6ZUNvbnRleHQpfWBcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSB7Li4ub3RoZXJQcm9wc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1oZWFkZXJCbG9ja2B9PlxuICAgICAgICB7ISF0aXRsZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taGVhZGVyVG9wYH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aXRsZWB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIHshIXN1YlRpdGxlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc3ViVGl0bGVgfT57c3ViVGl0bGV9PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7ISF0b3BDb250ZW50ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10b3BDb250ZW50YH0+e3RvcENvbnRlbnR9PC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHshIWNoaWxkcmVuICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNoaWxkcmVuYH0+e2NoaWxkcmVufTwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuFxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgLyoqXG4gICAqIOWNoeeJh+WJr+agh+mimFxuICAgKi9cbiAgc3ViVGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5Y2h54mH5Li75qCH6aKY77yI5aaC5LiN5aGr5pW05Liq5qCH6aKY5qih5Z2X6ZqQ6JeP77yJXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiDlpLTpg6jlj7PkvqfoioLngrlcbiAgICovXG4gIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxufVxuXG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogXCJcIixcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIHNpemU6IFwic21hbGxcIixcbiAgc3ViVGl0bGU6IG51bGwsXG4gIHRpdGxlOiBudWxsLFxuICB0b3BDb250ZW50OiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdfQ==