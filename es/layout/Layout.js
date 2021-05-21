function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import PropTypes from "prop-types";
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";
import { LayoutContext } from "./Context";

var Layout = function Layout(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      headerAffixed = _useState2[0],
      setHeaderAffixed = _useState2[1];

  return React.createElement(LayoutContext.Provider, {
    value: {
      headerAffixed: headerAffixed,
      setHeaderAffixed: setHeaderAffixed
    }
  }, React.createElement("div", props));
};

Layout.Aside = Aside;
Layout.Header = Header;
Layout.Main = Main;
Layout.propTypes = {
  children: PropTypes.node
};
Layout.defaultProps = {
  children: null
};
export default Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsIkFzaWRlIiwiSGVhZGVyIiwiTWFpbiIsIkxheW91dENvbnRleHQiLCJMYXlvdXQiLCJwcm9wcyIsImhlYWRlckFmZml4ZWQiLCJzZXRIZWFkZXJBZmZpeGVkIiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJub2RlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7QUFDQSxTQUFTQyxhQUFULFFBQThCLFdBQTlCOztBQWFBLElBQU1DLE1BSUwsR0FBRyxTQUpFQSxNQUlGLENBQUNDLEtBQUQsRUFBeUI7QUFBQSxrQkFDZVAsUUFBUSxDQUFDLEtBQUQsQ0FEdkI7QUFBQTtBQUFBLE1BQ3BCUSxhQURvQjtBQUFBLE1BQ0xDLGdCQURLOztBQUczQixTQUNFLG9CQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLElBQUEsS0FBSyxFQUFFO0FBQUVELE1BQUFBLGFBQWEsRUFBYkEsYUFBRjtBQUFpQkMsTUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUFqQjtBQUEvQixLQUNFLDJCQUFTRixLQUFULENBREYsQ0FERjtBQUtELENBWkQ7O0FBYUFELE1BQU0sQ0FBQ0osS0FBUCxHQUFlQSxLQUFmO0FBQ0FJLE1BQU0sQ0FBQ0gsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQUcsTUFBTSxDQUFDRixJQUFQLEdBQWNBLElBQWQ7QUFFQUUsTUFBTSxDQUFDSSxTQUFQLEdBQW1CO0FBSWpCQyxFQUFBQSxRQUFRLEVBQUVWLFNBQVMsQ0FBQ1c7QUFKSCxDQUFuQjtBQU9BTixNQUFNLENBQUNPLFlBQVAsR0FBc0I7QUFDcEJGLEVBQUFBLFFBQVEsRUFBRTtBQURVLENBQXRCO0FBSUEsZUFBZUwsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBBc2lkZSBmcm9tIFwiLi9Bc2lkZVwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCJcbmltcG9ydCB7IExheW91dENvbnRleHQgfSBmcm9tIFwiLi9Db250ZXh0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJTGF5b3V0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDluIPlsYDnu4Tku7bnlKjkuo7mkK3lu7rkuIDkuKrnvZHnq5nnmoTln7rmnKzmoYbmnrbjgILljIXlkKvlrZDnu4Tku7YgYEFzaWRlYCBgSGVhZGVyYCBgTWFpbmBcbiAqL1xuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxJTGF5b3V0UHJvcHM+ICYge1xuICBBc2lkZTogdHlwZW9mIEFzaWRlXG4gIEhlYWRlcjogdHlwZW9mIEhlYWRlclxuICBNYWluOiB0eXBlb2YgTWFpblxufSA9IChwcm9wczogSUxheW91dFByb3BzKSA9PiB7XG4gIGNvbnN0IFtoZWFkZXJBZmZpeGVkLCBzZXRIZWFkZXJBZmZpeGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaGVhZGVyQWZmaXhlZCwgc2V0SGVhZGVyQWZmaXhlZCB9fT5cbiAgICAgIDxkaXYgey4uLnByb3BzfSAvPlxuICAgIDwvTGF5b3V0Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuTGF5b3V0LkFzaWRlID0gQXNpZGVcbkxheW91dC5IZWFkZXIgPSBIZWFkZXJcbkxheW91dC5NYWluID0gTWFpblxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ==