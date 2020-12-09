"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _classnames = _interopRequireDefault(require("classnames"));

var _rcSelect = _interopRequireDefault(require("rc-select"));

var _OptGroup = _interopRequireDefault(require("./OptGroup"));

var _Option = _interopRequireDefault(require("./Option"));

var _omit = _interopRequireDefault(require("../_util/omit"));

var _icon = _interopRequireDefault(require("../icon"));

var _configProvider = require("../config-provider");

var _IconSvgPaths = _interopRequireDefault(require("../icon/IconSvgPaths"));

var _placements = _interopRequireDefault(require("../tooltip/placements"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var noop = function noop() {};

var prefix = "adui-select";

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);
    _this.locked = false;
    _this.select = void 0;
    _this.search = void 0;
    _this.menu = void 0;

    _this.saveSelect = function (node) {
      _this.select = node;
    };

    _this.saveSearch = function (node) {
      _this.search = node;
    };

    _this.onDropdownVisibleChange = function (open) {
      var _this$props = _this.props,
          onDropdownVisibleChange = _this$props.onDropdownVisibleChange,
          openProp = _this$props.open;
      var _this$state = _this.state,
          value = _this$state.value,
          selectId = _this$state.selectId;

      if (_this.locked) {
        return;
      }

      if (openProp === null) {
        _this.setState({
          open: open
        });
      }

      if (open) {
        _this.preventVisibleChange();

        setTimeout(function () {
          if (_this.search) {
            if (value) {
              var id = selectId;

              if (!selectId) {
                var _this$search$parentNo, _this$search$parentNo2;

                id = (_this$search$parentNo = _this.search.parentNode) === null || _this$search$parentNo === void 0 ? void 0 : (_this$search$parentNo2 = _this$search$parentNo.nextSibling) === null || _this$search$parentNo2 === void 0 ? void 0 : _this$search$parentNo2.id;

                _this.setState({
                  selectId: id
                });
              }

              if (id) {
                var _document$getElementB, _parent$getElementsBy;

                var parent = (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.nextSibling;
                var el = parent === null || parent === void 0 ? void 0 : (_parent$getElementsBy = parent.getElementsByClassName("adui-select-item-option-selected")[0]) === null || _parent$getElementsBy === void 0 ? void 0 : _parent$getElementsBy.children[0];
                var listHolder = parent === null || parent === void 0 ? void 0 : parent.getElementsByClassName("rc-virtual-list-holder")[0];

                if (listHolder) {
                  listHolder.dispatchEvent(new Event("scroll"));
                }

                if (listHolder.children[0]) {
                  listHolder.children[0].dispatchEvent(new Event("scroll"));
                }

                if (el) {
                  _this.setState({
                    placeholderText: el.dataset.html || el.innerHTML
                  });
                }
              }
            }

            _this.search.focus();
          }
        }, 150);
      } else {
        if (_this.search) {
          _this.search.value = "";
        }

        _this.setState({
          placeholderShow: false
        });
      }

      if (onDropdownVisibleChange) {
        onDropdownVisibleChange(open);
      }
    };

    _this.onSelect = function (value, option) {
      var _this$props2 = _this.props,
          onSelect = _this$props2.onSelect,
          valueProp = _this$props2.value;

      if (valueProp === null) {
        _this.setState({
          value: value
        });
      }

      if (onSelect && valueProp !== value) {
        onSelect(value, option);
      }

      if (_this.search) {
        _this.search.value = "";
      }

      if (_this.select && _this.select.setInputValue) {
        _this.select.setInputValue("");
      }
    };

    _this.handleDropdownRender = function (menu) {
      _this.menu = menu;
      var _this$props3 = _this.props,
          searchable = _this$props3.searchable,
          searchPlaceholder = _this$props3.searchPlaceholder;

      if (searchable) {
        return React.createElement("div", null, React.createElement("div", {
          className: "".concat(prefix, "-search")
        }, React.createElement("input", {
          ref: _this.saveSearch,
          placeholder: searchPlaceholder,
          onChange: _this.handleSearch,
          onKeyDown: _this.handleSearchKeyDown,
          onMouseDown: _this.preventVisibleChange,
          onMouseUp: _this.preventVisibleChange
        }), React.createElement(_icon["default"], {
          icon: "search",
          className: "".concat(prefix, "-icon")
        })), menu);
      }

      return menu;
    };

    _this.handleSearch = function (e) {
      var val = e.target.value;
      var _this$state2 = _this.state,
          placeholderShow = _this$state2.placeholderShow,
          selectId = _this$state2.selectId;

      if (val && !placeholderShow) {
        _this.setState({
          placeholderShow: true
        });
      }

      if (!val && placeholderShow) {
        _this.setState({
          placeholderShow: false
        });
      }

      if (_this.select) {
        var id = selectId;

        if (!selectId) {
          var _e$target$parentNode, _e$target$parentNode$;

          id = (_e$target$parentNode = e.target.parentNode) === null || _e$target$parentNode === void 0 ? void 0 : (_e$target$parentNode$ = _e$target$parentNode.nextSibling) === null || _e$target$parentNode$ === void 0 ? void 0 : _e$target$parentNode$.id;

          _this.setState({
            selectId: id
          });
        }

        var realInput = document.querySelector("[aria-owns=\"".concat(id, "\"]"));

        if (realInput) {
          var lastValue = realInput.value;
          realInput.value = val;
          var event = new Event("input", {
            bubbles: true
          });
          var tracker = realInput._valueTracker;

          if (tracker) {
            tracker.setValue(lastValue);
          }

          realInput.dispatchEvent(event);
        }
      }
    };

    _this.handleSearchKeyDown = function (e) {
      if (_this.select && _this.select.onInputKeyDown) {
        _this.select.onInputKeyDown(e);
      }
    };

    _this.preventVisibleChange = function () {
      _this.locked = true;
      setTimeout(function () {
        _this.locked = false;

        _this.setState({
          open: true
        });
      }, 200);
    };

    var defaultOpen = props.defaultOpen,
        defaultValue = props.defaultValue,
        _open = props.open,
        _value = props.value;
    var valueState;

    if (_value !== null) {
      if (_value === "") {
        valueState = undefined;
      } else {
        valueState = _value;
      }
    } else if (defaultValue !== null) {
      valueState = defaultValue;
    }

    var openState;

    if (_open !== null) {
      openState = _open;
    } else if (defaultOpen !== null) {
      openState = defaultOpen;
    }

    _this.state = {
      open: openState,
      placeholderShow: false,
      selectId: "",
      placeholderText: "",
      value: valueState
    };
    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          getPopupContainer = _this$props4.getPopupContainer,
          placeholder = _this$props4.placeholder,
          placement = _this$props4.placement,
          rightIcon = _this$props4.rightIcon,
          searchable = _this$props4.searchable,
          size = _this$props4.size,
          theme = _this$props4.theme,
          valueProp = _this$props4.value,
          otherProps = _objectWithoutProperties(_this$props4, ["className", "getPopupContainer", "placeholder", "placement", "rightIcon", "searchable", "size", "theme", "value"]);

      var restProps = (0, _omit["default"])(otherProps, ["defaultValue", "open", "onDropdownVisibleChange", "onSelect", "searchPlaceholder"]);
      var _this$state3 = this.state,
          openState = _this$state3.open,
          placeholderShow = _this$state3.placeholderShow,
          placeholderText = _this$state3.placeholderText,
          valueState = _this$state3.value;
      var openProps = {};

      if (typeof openState === "boolean") {
        openProps.open = openState;
      }

      if (valueState !== null) {
        openProps.value = valueProp === "" ? placeholder : valueState;
      }

      return React.createElement(_configProvider.ConfigContext.Consumer, null, function (_ref) {
        var _classNames;

        var getPopupContainerContext = _ref.getPopupContainer;
        return React.createElement(_rcSelect["default"], _extends({
          className: (0, _classnames["default"])(className, "".concat(prefix, "-select"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-light"), theme === "light"), _defineProperty(_classNames, "".concat(prefix, "-select_placeholderShow"), placeholderShow), _classNames)),
          "data-value": valueState || placeholder,
          menuItemSelectedIcon: null,
          dropdownAlign: (0, _placements["default"])({
            alignEdge: true
          })[placement || "bottomLeft"],
          dropdownClassName: "adui-select-dropdown-".concat(size, " ").concat(searchable ? "adui-select-dropdown-searchable" : ""),
          dropdownRender: _this2.handleDropdownRender,
          inputIcon: React.createElement(React.Fragment, null, placeholderShow && (typeof (placeholderText || placeholder || "") === "string" ? React.createElement("div", {
            className: "".concat(prefix, "-placeholder-text"),
            dangerouslySetInnerHTML: {
              __html: "".concat(placeholderText || placeholder || "")
            }
          }) : React.createElement("div", {
            className: "".concat(prefix, "-placeholder-text")
          }, placeholderText || placeholder || "")), React.createElement(_icon["default"], {
            icon: rightIcon || "triangle-down",
            color: "var(--gray-800)"
          })),
          listHeight: 250,
          notFoundContent: "\u65E0\u5339\u914D\u7ED3\u679C",
          onDropdownVisibleChange: _this2.onDropdownVisibleChange,
          onSelect: _this2.onSelect,
          defaultActiveFirstOption: false,
          getPopupContainer: getPopupContainer || getPopupContainerContext,
          optionLabelProp: "children",
          optionFilterProp: "children",
          placeholder: placeholder,
          prefixCls: "adui-select",
          showSearch: true,
          ref: _this2.saveSelect,
          transitionName: "slide-up"
        }, openProps, restProps));
      });
    }
  }]);

  return Select;
}(React.Component);

Select.type = "Select";
Select.Option = _Option["default"];
Select.OptGroup = _OptGroup["default"];
Select.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  defaultOpen: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  dropdownMatchSelectWidth: _propTypes["default"].bool,
  getPopupContainer: _propTypes["default"].func,
  onDropdownVisibleChange: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  open: _propTypes["default"].bool,
  placeholder: _propTypes["default"].any,
  placement: _propTypes["default"].oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  rightIcon: _propTypes["default"].oneOf(Object.keys(_IconSvgPaths["default"])),
  searchPlaceholder: _propTypes["default"].string,
  searchable: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  theme: _propTypes["default"].oneOf([null, "light"]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Select.defaultProps = {
  children: null,
  className: undefined,
  defaultOpen: null,
  defaultValue: null,
  dropdownMatchSelectWidth: true,
  getPopupContainer: null,
  onDropdownVisibleChange: noop,
  onSelect: noop,
  open: null,
  placeholder: "请选择",
  placement: "bottomLeft",
  rightIcon: "triangle-down",
  searchPlaceholder: "搜索",
  searchable: false,
  size: "small",
  theme: null,
  value: null
};

Select.getDerivedStateFromProps = function (_ref2) {
  var open = _ref2.open,
      value = _ref2.value;
  var newState = {};

  if (open !== null) {
    newState.open = open;
  }

  if (value !== null) {
    if (value === "") {
      newState.value = undefined;
    } else {
      newState.value = value;
    }
  }

  return Object.keys(newState).length > 0 ? newState : null;
};

(0, _reactLifecyclesCompat.polyfill)(Select);
var _default = Select;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsibm9vcCIsInByZWZpeCIsIlNlbGVjdCIsInByb3BzIiwibG9ja2VkIiwic2VsZWN0Iiwic2VhcmNoIiwibWVudSIsInNhdmVTZWxlY3QiLCJub2RlIiwic2F2ZVNlYXJjaCIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwib3BlbiIsIm9wZW5Qcm9wIiwic3RhdGUiLCJ2YWx1ZSIsInNlbGVjdElkIiwic2V0U3RhdGUiLCJwcmV2ZW50VmlzaWJsZUNoYW5nZSIsInNldFRpbWVvdXQiLCJpZCIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsInBhcmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGlsZHJlbiIsImxpc3RIb2xkZXIiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJwbGFjZWhvbGRlclRleHQiLCJkYXRhc2V0IiwiaHRtbCIsImlubmVySFRNTCIsImZvY3VzIiwicGxhY2Vob2xkZXJTaG93Iiwib25TZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZVByb3AiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlRHJvcGRvd25SZW5kZXIiLCJzZWFyY2hhYmxlIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVTZWFyY2hLZXlEb3duIiwiZSIsInZhbCIsInRhcmdldCIsInJlYWxJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJsYXN0VmFsdWUiLCJldmVudCIsImJ1YmJsZXMiLCJ0cmFja2VyIiwiX3ZhbHVlVHJhY2tlciIsInNldFZhbHVlIiwib25JbnB1dEtleURvd24iLCJkZWZhdWx0T3BlbiIsImRlZmF1bHRWYWx1ZSIsInZhbHVlU3RhdGUiLCJ1bmRlZmluZWQiLCJvcGVuU3RhdGUiLCJjbGFzc05hbWUiLCJnZXRQb3B1cENvbnRhaW5lciIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwicmlnaHRJY29uIiwic2l6ZSIsInRoZW1lIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsIm9wZW5Qcm9wcyIsImdldFBvcHVwQ29udGFpbmVyQ29udGV4dCIsImFsaWduRWRnZSIsIl9faHRtbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwidHlwZSIsIk9wdGlvbiIsIk9wdEdyb3VwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCIsImZ1bmMiLCJhbnkiLCJvbmVPZiIsIk9iamVjdCIsImtleXMiLCJJY29uU3ZnUGF0aHMiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsYUFBZjs7SUFnR01DLE07Ozs7O0FBc0lKLGtCQUFZQyxLQUFaLEVBQWlDO0FBQUE7O0FBQUE7O0FBQy9CLDhCQUFNQSxLQUFOO0FBRCtCLFVBUjFCQyxNQVEwQixHQVJqQixLQVFpQjtBQUFBLFVBTjFCQyxNQU0wQjtBQUFBLFVBSjFCQyxNQUkwQjtBQUFBLFVBRjFCQyxJQUUwQjs7QUFBQSxVQThCMUJDLFVBOUIwQixHQThCYixVQUFDQyxJQUFELEVBQW1CO0FBQ3JDLFlBQUtKLE1BQUwsR0FBY0ksSUFBZDtBQUNELEtBaENnQzs7QUFBQSxVQWtDMUJDLFVBbEMwQixHQWtDYixVQUFDRCxJQUFELEVBQTRCO0FBQzlDLFlBQUtILE1BQUwsR0FBY0csSUFBZDtBQUNELEtBcENnQzs7QUFB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RyxLQUEwQixTQUExQkEsS0FBMEI7QUFDMUUsTUFBTWtGLFFBQXNCLEdBQUcsRUFBL0I7O0FBQ0EsTUFBSXJGLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCcUYsSUFBQUEsUUFBUSxDQUFDckYsSUFBVCxHQUFnQkEsSUFBaEI7QUFDRDs7QUFDRCxNQUFJRyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixRQUFJQSxLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQmtGLE1BQUFBLFFBQVEsQ0FBQ2xGLEtBQVQsR0FBaUIrQyxTQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMbUMsTUFBQUEsUUFBUSxDQUFDbEYsS0FBVCxHQUFpQkEsS0FBakI7QUFDRDtBQUNGOztBQUNELFNBQU82RSxNQUFNLENBQUNDLElBQVAsQ0FBWUksUUFBWixFQUFzQkMsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUNELFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsQzs7QUErU0gscUNBQVMvRixNQUFUO2VBRWVBLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGFuZ2VyICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgUmNTZWxlY3QgZnJvbSBcInJjLXNlbGVjdFwiXG5pbXBvcnQgT3B0R3JvdXAgZnJvbSBcIi4vT3B0R3JvdXBcIlxuaW1wb3J0IE9wdGlvbiBmcm9tIFwiLi9PcHRpb25cIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuLy8gSWNvblN2Z1BhdGhzIOeUqOS7peWIpOaWrSBpY29uIOebuOWFs+eahCBwcm9wIOaYr+WQpuWQiOazlVxuaW1wb3J0IEljb25TdmdQYXRocyBmcm9tIFwiLi4vaWNvbi9JY29uU3ZnUGF0aHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbi8qKlxuICogU2VsZWN0IOWwgeijheS6jiByYy1zZWxlY3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvc2VsZWN0XG4gKiByYy1zZWxlY3Qg5pys6LqrIHByb3BzIOmdnuW4uOmdnuW4uOWkmuOAguiAjOWmgiBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSDov5nmoLfnmoQgcHJvcCDnlJroh7PkuI3lnKjmlofmoaPkuK3vvJtcbiAqIOiwg+eUqCByYy1zZWxlY3Qg55qE5YaF572u5pa55rOV77yMU2VsZWN0IOWunueOsOS6huWKn+iDveeahOWGjeWwgeijhe+8jOWmguWGheW1jOaQnOe0ouS+nemdoOeahOaYryB0aGlzLnNlbGVjdC5vbklucHV0Q2hhbmdl77ybXG4gKiByYy1zZWxlY3Qg5LuN54S25pyJ6K645aSa5YC85b6X5YaN5bCB6KOF5ZKM57un57ut5a2m5Lmg55qE5L2Z5Zyw77yMKirmnKrmnaXnmoTlj6/nu7TmiqTnqbrpl7TmmK/pnZ7luLjlpKfnmoQqKuOAglxuICovXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXNlbGVjdFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdCB7XG4gIGZvcmNlUG9wdXBBbGlnbj86ICgpID0+IHZvaWRcbiAgZ2V0Um9vdERvbU5vZGU/OiAoKSA9PiBIVE1MRWxlbWVudFxuICBvbklucHV0Q2hhbmdlPzogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXG4gIG9uSW5wdXRLZXlEb3duPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgc2V0SW5wdXRWYWx1ZT86ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZFxuICBnZXRQb3B1cERPTU5vZGU6ICgpID0+IEhUTUxFbGVtZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm5bGV5byAXG4gICAqL1xuICBkZWZhdWx0T3Blbj86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrlvZPliY3pgInkuK3pobnnmoTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuvVxuICAgKi9cbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICAvKipcbiAgICog5LiL5ouJ5bGV56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJpib29sXG4gICAqL1xuICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT86IChvcGVuOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDpgInmi6nml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mih2YWx1ZSwgb3B0aW9uKVxuICAgKi9cbiAgb25TZWxlY3Q/OiAodmFsdWU6IFJlYWN0LlJlYWN0VGV4dCwgb3B0aW9uOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4gdm9pZFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5bGV5byAXG4gICAqL1xuICBvcGVuPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOmAieaLqeahhum7mOiupOaWh+Wtl1xuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9riBwbGFjZW1lbnRcbiAgICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICAvKipcbiAgICog6K6+572u5Y+z5Zu+5qCHXG4gICAqL1xuICByaWdodEljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOaQnOe0ouahhum7mOiupOaWh+Wtl1xuICAgKi9cbiAgc2VhcmNoYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgeWGheW1jOaQnOe0olxuICAgKi9cbiAgc2VhcmNoUGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuO+8jOi3n+edgCBidXR0b24g6LWwXG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN6YCJ5Lit6aG555qE5YC8XG4gICAqL1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0U3RhdGUge1xuICBvcGVuPzogYm9vbGVhblxuICBwbGFjZWhvbGRlclNob3c/OiBib29sZWFuXG4gIHBsYWNlaG9sZGVyVGV4dD86IHN0cmluZ1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgc2VsZWN0SWQ/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiDpgInmi6nlmajnlKjkuo7pgInmi6nmn5DpobnlhoXlrrnjgIJcbiAqIOmAieaLqeWZqOWvueavlOWNlemAiSBSYWRpbyDnmoTkvJjlir/mmK/vvIzlvZPpgInpobnov4flpJrml7bvvIzpgInmi6nlmajlj6/lr7nlhoXlrrnmlLbotbfvvIzlubbmm7TlhbPms6jkuo7lt7LpgInpobnjgIJcbiAqIOmAmuW4uO+8jOW9k+eUqOaIt+iDveWkn+mAmui/h+W3sumAiemhue+8jOi9u+aYk+W+l+efpeWFtuS9memAiemhueeahOinhOW+i+aXtu+8iOWmguW5tOS7veOAgeWfjuW4guetie+8ie+8jOmAieaLqeWZqCBTZWxlY3Qg5piv5q+U6L6D5aW955qE6YCJ5oup44CCXG4gKi9cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU2VsZWN0UHJvcHMsIElTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHR5cGUgPSBcIlNlbGVjdFwiXG5cbiAgcHVibGljIHN0YXRpYyBPcHRpb246IHR5cGVvZiBPcHRpb24gPSBPcHRpb25cblxuICBwdWJsaWMgc3RhdGljIE9wdEdyb3VwOiB0eXBlb2YgT3B0R3JvdXAgPSBPcHRHcm91cFxuXG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm5bGV5byAXG4gICAgICovXG4gICAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muW9k+WJjemAieS4remhueeahOWAvFxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIC8qKlxuICAgICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuvVxuICAgICAqL1xuICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICAgKi9cbiAgICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5LiL5ouJ5bGV56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJpib29sXG4gICAgICovXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmAieaLqeaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaKHZhbHVlLCBvcHRpb24pXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8muaYr+WQpuWxleW8gFxuICAgICAqL1xuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOmAieaLqeahhum7mOiupOaWh+Wtl1xuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuYW55LFxuICAgIC8qKlxuICAgICAqIOiuvue9riBwbGFjZW1lbnRcbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u5Y+z5Zu+5qCHXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMub25lT2YoT2JqZWN0LmtleXMoSWNvblN2Z1BhdGhzKSksXG4gICAgLyoqXG4gICAgICog5pCc57Si5qGG6buY6K6k5paH5a2XXG4gICAgICovXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5piv5ZCm6ZyA6KaB5YaF5bWM5pCc57SiXG4gICAgICovXG4gICAgc2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6K6+572u5bC65a+477yM6Lef552AIGJ1dHRvbiDotbBcbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruS4u+mimFxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8muW9k+WJjemAieS4remhueeahOWAvFxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVNlbGVjdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRPcGVuOiBudWxsLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRydWUsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgb3BlbjogbnVsbCxcbiAgICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgIHJpZ2h0SWNvbjogXCJ0cmlhbmdsZS1kb3duXCIsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFwi5pCc57SiXCIsXG4gICAgc2VhcmNoYWJsZTogZmFsc2UsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHRoZW1lOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoeyBvcGVuLCB2YWx1ZSB9OiBJU2VsZWN0UHJvcHMpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZTogSVNlbGVjdFN0YXRlID0ge31cbiAgICBpZiAob3BlbiAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUub3BlbiA9IG9wZW5cbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgbmV3U3RhdGUudmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0YXRlLnZhbHVlID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICBwdWJsaWMgbG9ja2VkID0gZmFsc2VcblxuICBwdWJsaWMgc2VsZWN0OiBJU2VsZWN0XG5cbiAgcHVibGljIHNlYXJjaDogSFRNTElucHV0RWxlbWVudFxuXG4gIHB1YmxpYyBtZW51OiBKU1guRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJU2VsZWN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IGRlZmF1bHRPcGVuLCBkZWZhdWx0VmFsdWUsIG9wZW4sIHZhbHVlIH0gPSBwcm9wc1xuXG4gICAgbGV0IHZhbHVlU3RhdGVcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICB2YWx1ZVN0YXRlID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZVN0YXRlID0gdmFsdWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWVTdGF0ZSA9IGRlZmF1bHRWYWx1ZVxuICAgIH1cblxuICAgIGxldCBvcGVuU3RhdGVcbiAgICBpZiAob3BlbiAhPT0gbnVsbCkge1xuICAgICAgb3BlblN0YXRlID0gb3BlblxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdE9wZW4gIT09IG51bGwpIHtcbiAgICAgIG9wZW5TdGF0ZSA9IGRlZmF1bHRPcGVuXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBvcGVuU3RhdGUsXG4gICAgICBwbGFjZWhvbGRlclNob3c6IGZhbHNlLFxuICAgICAgc2VsZWN0SWQ6IFwiXCIsXG4gICAgICBwbGFjZWhvbGRlclRleHQ6IFwiXCIsXG4gICAgICB2YWx1ZTogdmFsdWVTdGF0ZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2F2ZVNlbGVjdCA9IChub2RlOiBJU2VsZWN0KSA9PiB7XG4gICAgdGhpcy5zZWxlY3QgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVNlYXJjaCA9IChub2RlOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zZWFyY2ggPSBub2RlXG4gIH1cblxuICBwdWJsaWMgb25Ecm9wZG93blZpc2libGVDaGFuZ2UgPSAob3BlbjogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHsgb25Ecm9wZG93blZpc2libGVDaGFuZ2UsIG9wZW46IG9wZW5Qcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSwgc2VsZWN0SWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChvcGVuUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW4gfSlcbiAgICB9XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMucHJldmVudFZpc2libGVDaGFuZ2UoKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBzZWxlY3RJZFxuICAgICAgICAgICAgaWYgKCFzZWxlY3RJZCkge1xuICAgICAgICAgICAgICBpZCA9ICh0aGlzLnNlYXJjaC5wYXJlbnROb2RlPy5uZXh0U2libGluZyBhcyBFbGVtZW50KT8uaWRcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdElkOiBpZCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKT8ubmV4dFNpYmxpbmcgYXMgRWxlbWVudFxuICAgICAgICAgICAgICBjb25zdCBlbCA9IHBhcmVudD8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICAgICBcImFkdWktc2VsZWN0LWl0ZW0tb3B0aW9uLXNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgKVswXT8uY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICAgICAgICBjb25zdCBsaXN0SG9sZGVyID0gcGFyZW50Py5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgIFwicmMtdmlydHVhbC1saXN0LWhvbGRlclwiXG4gICAgICAgICAgICAgIClbMF0gYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICAgICAgICBpZiAobGlzdEhvbGRlcikge1xuICAgICAgICAgICAgICAgIGxpc3RIb2xkZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIikpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobGlzdEhvbGRlci5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgIGxpc3RIb2xkZXIuY2hpbGRyZW5bMF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIikpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dDogZWwuZGF0YXNldC5odG1sIHx8IGVsLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2VhcmNoLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSwgMTUwKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zZWFyY2gudmFsdWUgPSBcIlwiXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGxhY2Vob2xkZXJTaG93OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSkge1xuICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2Uob3BlbilcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3QgPSAodmFsdWU6IFJlYWN0LlJlYWN0VGV4dCwgb3B0aW9uOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0LCB2YWx1ZTogdmFsdWVQcm9wIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3QgJiYgdmFsdWVQcm9wICE9PSB2YWx1ZSkge1xuICAgICAgb25TZWxlY3QodmFsdWUsIG9wdGlvbilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoLnZhbHVlID0gXCJcIlxuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Quc2V0SW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3Quc2V0SW5wdXRWYWx1ZShcIlwiKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVEcm9wZG93blJlbmRlciA9IChtZW51OiBKU1guRWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWVudSA9IG1lbnVcbiAgICBjb25zdCB7IHNlYXJjaGFibGUsIHNlYXJjaFBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNlYXJjaGFibGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VhcmNoYH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWFyY2h9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzZWFyY2hQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlU2VhcmNoS2V5RG93bn1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJldmVudFZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5wcmV2ZW50VmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwic2VhcmNoXCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHttZW51fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2ggPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHsgcGxhY2Vob2xkZXJTaG93LCBzZWxlY3RJZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh2YWwgJiYgIXBsYWNlaG9sZGVyU2hvdykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYWNlaG9sZGVyU2hvdzogdHJ1ZSB9KVxuICAgIH1cbiAgICBpZiAoIXZhbCAmJiBwbGFjZWhvbGRlclNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwbGFjZWhvbGRlclNob3c6IGZhbHNlIH0pXG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdCkge1xuICAgICAgbGV0IGlkID0gc2VsZWN0SWRcbiAgICAgIGlmICghc2VsZWN0SWQpIHtcbiAgICAgICAgaWQgPSAoZS50YXJnZXQucGFyZW50Tm9kZT8ubmV4dFNpYmxpbmcgYXMgRWxlbWVudCk/LmlkXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RJZDogaWQgfSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlYWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFthcmlhLW93bnM9XCIke2lkfVwiXWApIGFzIGFueVxuICAgICAgaWYgKHJlYWxJbnB1dCkge1xuICAgICAgICBjb25zdCBsYXN0VmFsdWUgPSByZWFsSW5wdXQudmFsdWVcbiAgICAgICAgcmVhbElucHV0LnZhbHVlID0gdmFsXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KFwiaW5wdXRcIiwgeyBidWJibGVzOiB0cnVlIH0pXG4gICAgICAgIC8vIGhhY2sgUmVhY3QxNiDlhoXpg6jlrprkuYnkuoZkZXNjcmlwdG9y5oum5oiqdmFsdWXvvIzmraTlpITph43nva7nirbmgIFcbiAgICAgICAgY29uc3QgdHJhY2tlciA9IHJlYWxJbnB1dC5fdmFsdWVUcmFja2VyXG4gICAgICAgIGlmICh0cmFja2VyKSB7XG4gICAgICAgICAgdHJhY2tlci5zZXRWYWx1ZShsYXN0VmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgcmVhbElucHV0LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlYXJjaEtleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmICh0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC5vbklucHV0S2V5RG93bikge1xuICAgICAgdGhpcy5zZWxlY3Qub25JbnB1dEtleURvd24oZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcHJldmVudFZpc2libGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5sb2NrZWQgPSB0cnVlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHJpZ2h0SWNvbixcbiAgICAgIHNlYXJjaGFibGUsXG4gICAgICBzaXplLFxuICAgICAgdGhlbWUsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICBcIm9wZW5cIixcbiAgICAgIFwib25Ecm9wZG93blZpc2libGVDaGFuZ2VcIixcbiAgICAgIFwib25TZWxlY3RcIixcbiAgICAgIFwic2VhcmNoUGxhY2Vob2xkZXJcIixcbiAgICBdKVxuXG4gICAgY29uc3Qge1xuICAgICAgb3Blbjogb3BlblN0YXRlLFxuICAgICAgcGxhY2Vob2xkZXJTaG93LFxuICAgICAgcGxhY2Vob2xkZXJUZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIC8vIG9wZW5TdGF0ZSDlj6/og73mmK8gdW5kZWZpbmVkIG9yIG51bGxcbiAgICBjb25zdCBvcGVuUHJvcHM6IHsgb3Blbj86IGJvb2xlYW47IHZhbHVlPzogUmVhY3QuUmVhY3ROb2RlIHwgbnVsbCB9ID0ge31cbiAgICBpZiAodHlwZW9mIG9wZW5TdGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIG9wZW5Qcm9wcy5vcGVuID0gb3BlblN0YXRlXG4gICAgfVxuICAgIGlmICh2YWx1ZVN0YXRlICE9PSBudWxsKSB7XG4gICAgICBvcGVuUHJvcHMudmFsdWUgPSB2YWx1ZVByb3AgPT09IFwiXCIgPyBwbGFjZWhvbGRlciA6IHZhbHVlU3RhdGVcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0pID0+IChcbiAgICAgICAgICA8UmNTZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBgJHtwcmVmaXh9LXNlbGVjdGAsXG4gICAgICAgICAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1saWdodGBdOiB0aGVtZSA9PT0gXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXNlbGVjdF9wbGFjZWhvbGRlclNob3dgXTogcGxhY2Vob2xkZXJTaG93LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgZGF0YS12YWx1ZT17dmFsdWVTdGF0ZSB8fCBwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uPXtudWxsfVxuICAgICAgICAgICAgZHJvcGRvd25BbGlnbj17XG4gICAgICAgICAgICAgIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50IHx8IFwiYm90dG9tTGVmdFwiXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9e2BhZHVpLXNlbGVjdC1kcm9wZG93bi0ke3NpemV9ICR7XG4gICAgICAgICAgICAgIHNlYXJjaGFibGUgPyBcImFkdWktc2VsZWN0LWRyb3Bkb3duLXNlYXJjaGFibGVcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgZHJvcGRvd25SZW5kZXI9e3RoaXMuaGFuZGxlRHJvcGRvd25SZW5kZXJ9XG4gICAgICAgICAgICBpbnB1dEljb249e1xuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtwbGFjZWhvbGRlclNob3cgJiZcbiAgICAgICAgICAgICAgICAgICh0eXBlb2YgKHBsYWNlaG9sZGVyVGV4dCB8fCBwbGFjZWhvbGRlciB8fCBcIlwiKSA9PT1cbiAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGxhY2Vob2xkZXItdGV4dGB9XG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogYCR7cGxhY2Vob2xkZXJUZXh0IHx8IHBsYWNlaG9sZGVyIHx8IFwiXCJ9YCxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGxhY2Vob2xkZXItdGV4dGB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtwbGFjZWhvbGRlclRleHQgfHwgcGxhY2Vob2xkZXIgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17cmlnaHRJY29uIHx8IFwidHJpYW5nbGUtZG93blwifVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1ncmF5LTgwMClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdEhlaWdodD17MjUwfVxuICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PVwi5peg5Yy56YWN57uT5p6cXCJcbiAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXt0aGlzLm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3R9XG4gICAgICAgICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb249e2ZhbHNlfVxuICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgICAgIG9wdGlvbkxhYmVsUHJvcD1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9XCJjaGlsZHJlblwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBwcmVmaXhDbHM9XCJhZHVpLXNlbGVjdFwiXG4gICAgICAgICAgICAvLyDlvIDlkK8gc2hvd1NlYXJjaCDmiY3lj6/og70gaGFjayDlvI/lnLDop6blj5EgaW5wdXQgY2hhbmdlIOS6i+S7tlxuICAgICAgICAgICAgc2hvd1NlYXJjaFxuICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWxlY3R9XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgIHsuLi5vcGVuUHJvcHN9XG4gICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbnBvbHlmaWxsKFNlbGVjdClcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iXX0=