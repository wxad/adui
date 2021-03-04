"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

                  if (listHolder.children[0]) {
                    listHolder.children[0].dispatchEvent(new Event("scroll"));
                  }
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

var _default = Select;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsibm9vcCIsInByZWZpeCIsIlNlbGVjdCIsInByb3BzIiwibG9ja2VkIiwic2VsZWN0Iiwic2VhcmNoIiwibWVudSIsInNhdmVTZWxlY3QiLCJub2RlIiwic2F2ZVNlYXJjaCIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwib3BlbiIsIm9wZW5Qcm9wIiwic3RhdGUiLCJ2YWx1ZSIsInNlbGVjdElkIiwic2V0U3RhdGUiLCJwcmV2ZW50VmlzaWJsZUNoYW5nZSIsInNldFRpbWVvdXQiLCJpZCIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsInBhcmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGlsZHJlbiIsImxpc3RIb2xkZXIiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJwbGFjZWhvbGRlclRleHQiLCJkYXRhc2V0IiwiaHRtbCIsImlubmVySFRNTCIsImZvY3VzIiwicGxhY2Vob2xkZXJTaG93Iiwib25TZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZVByb3AiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlRHJvcGRvd25SZW5kZXIiLCJzZWFyY2hhYmxlIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVTZWFyY2hLZXlEb3duIiwiZSIsInZhbCIsInRhcmdldCIsInJlYWxJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJsYXN0VmFsdWUiLCJldmVudCIsImJ1YmJsZXMiLCJ0cmFja2VyIiwiX3ZhbHVlVHJhY2tlciIsInNldFZhbHVlIiwib25JbnB1dEtleURvd24iLCJkZWZhdWx0T3BlbiIsImRlZmF1bHRWYWx1ZSIsInZhbHVlU3RhdGUiLCJ1bmRlZmluZWQiLCJvcGVuU3RhdGUiLCJjbGFzc05hbWUiLCJnZXRQb3B1cENvbnRhaW5lciIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50IiwicmlnaHRJY29uIiwic2l6ZSIsInRoZW1lIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsIm9wZW5Qcm9wcyIsImdldFBvcHVwQ29udGFpbmVyQ29udGV4dCIsImFsaWduRWRnZSIsIl9faHRtbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwidHlwZSIsIk9wdGlvbiIsIk9wdEdyb3VwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mVHlwZSIsIm51bWJlciIsImRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCIsImZ1bmMiLCJhbnkiLCJvbmVPZiIsIk9iamVjdCIsImtleXMiLCJJY29uU3ZnUGF0aHMiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsYUFBZjs7SUFnR01DLE07Ozs7O0FBc0lKLGtCQUFZQyxLQUFaLEVBQWlDO0FBQUE7O0FBQUE7O0FBQy9CLDhCQUFNQSxLQUFOO0FBRCtCLFVBUjFCQyxNQVEwQixHQVJqQixLQVFpQjtBQUFBLFVBTjFCQyxNQU0wQjtBQUFBLFVBSjFCQyxNQUkwQjtBQUFBLFVBRjFCQyxJQUUwQjs7QUFBQSxVQThCMUJDLFVBOUIwQixHQThCYixVQUFDQyxJQUFELEVBQW1CO0FBQ3JDLFlBQUtKLE1BQUwsR0FBY0ksSUFBZDtBQUNELEtBaENnQzs7QUFBQSxVQWtDMUJDLFVBbEMwQixHQWtDYixVQUFDRCxJQUFELEVBQTRCO0FBQzlDLFlBQUtILE1BQUwsR0FBY0csSUFBZDtBQUNELEtBcENnQzs7QUFBQSxVQXNDMUJFLHVCQXRDMEIsR0FzQ0EsVUFBQ0MsSUFBRCxFQUFtQjtBQUFBLHdCQUNFLE1BQUtULEtBRFA7QUFBQSxVQUMxQ1EsdUJBRDBDLGVBQzFDQSx1QkFEMEM7QUFBQSxVQUNYRSxRQURXLGVBQ2pCRCxJQURpQjtBQUFBLHdCQUV0QixNQUFLRSxLQUZpQjtBQUFBLFVBRTFDQyxLQUYwQyxlQUUxQ0EsS0FGMEM7QUFBQSxVQUVuQ0MsUUFGbUMsZUFFbkNBLFFBRm1DOztBQUlsRCxVQUFJLE1BQUtaLE1BQVQsRUFBaUI7QUFDZjtBQUNEOztBQUNELFVBQUlTLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQixjQUFLSSxRQUFMLENBQWM7QUFBRUwsVUFBQUEsSUFBSSxFQUFKQTtBQUFGLFNBQWQ7QUFDRDs7QUFDRCxVQUFJQSxJQUFKLEVBQVU7QUFDUixjQUFLTSxvQkFBTDs7QUFFQUMsUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixjQUFJLE1BQUtiLE1BQVQsRUFBaUI7QUFDZixnQkFBSVMsS0FBSixFQUFXO0FBQ1Qsa0JBQUlLLEVBQUUsR0FBR0osUUFBVDs7QUFDQSxrQkFBSSxDQUFDQSxRQUFMLEVBQWU7QUFBQTs7QUFDYkksZ0JBQUFBLEVBQUUsNEJBQUksTUFBS2QsTUFBTCxDQUFZZSxVQUFoQixvRkFBSSxzQkFBd0JDLFdBQTVCLDJEQUFHLHVCQUFrREYsRUFBdkQ7O0FBQ0Esc0JBQUtILFFBQUwsQ0FBYztBQUFFRCxrQkFBQUEsUUFBUSxFQUFFSTtBQUFaLGlCQUFkO0FBQ0Q7O0FBQ0Qsa0JBQUlBLEVBQUosRUFBUTtBQUFBOztBQUNOLG9CQUFNRyxNQUFNLDRCQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JMLEVBQXhCLENBQUgsMERBQUcsc0JBQTZCRSxXQUE1QztBQUNBLG9CQUFNSSxFQUFFLEdBQUdILE1BQUgsYUFBR0EsTUFBSCxnREFBR0EsTUFBTSxDQUFFSSxzQkFBUixDQUNULGtDQURTLEVBRVQsQ0FGUyxDQUFILDBEQUFHLHNCQUVMQyxRQUZLLENBRUksQ0FGSixDQUFYO0FBSUEsb0JBQU1DLFVBQVUsR0FBR04sTUFBSCxhQUFHQSxNQUFILHVCQUFHQSxNQUFNLENBQUVJLHNCQUFSLENBQ2pCLHdCQURpQixFQUVqQixDQUZpQixDQUFuQjs7QUFJQSxvQkFBSUUsVUFBSixFQUFnQjtBQUNkQSxrQkFBQUEsVUFBVSxDQUFDQyxhQUFYLENBQXlCLElBQUlDLEtBQUosQ0FBVSxRQUFWLENBQXpCOztBQUVBLHNCQUFJRixVQUFVLENBQUNELFFBQVgsQ0FBb0IsQ0FBcEIsQ0FBSixFQUE0QjtBQUMxQkMsb0JBQUFBLFVBQVUsQ0FBQ0QsUUFBWCxDQUFvQixDQUFwQixFQUF1QkUsYUFBdkIsQ0FBcUMsSUFBSUMsS0FBSixDQUFVLFFBQVYsQ0FBckM7QUFDRDtBQUNGOztBQUVELG9CQUFJTCxFQUFKLEVBQVE7QUFDTix3QkFBS1QsUUFBTCxDQUFjO0FBQ1plLG9CQUFBQSxlQUFlLEVBQUVOLEVBQUUsQ0FBQ08sT0FBSCxDQUFXQyxJQUFYLElBQW1CUixFQUFFLENBQUNTO0FBRDNCLG1CQUFkO0FBR0Q7QUFDRjtBQUNGOztBQUNELGtCQUFLN0IsTUFBTCxDQUFZOEIsS0FBWjtBQUNEO0FBQ0YsU0FuQ1MsRUFtQ1AsR0FuQ08sQ0FBVjtBQW9DRCxPQXZDRCxNQXVDTztBQUNMLFlBQUksTUFBSzlCLE1BQVQsRUFBaUI7QUFDZixnQkFBS0EsTUFBTCxDQUFZUyxLQUFaLEdBQW9CLEVBQXBCO0FBQ0Q7O0FBQ0QsY0FBS0UsUUFBTCxDQUFjO0FBQ1pvQixVQUFBQSxlQUFlLEVBQUU7QUFETCxTQUFkO0FBR0Q7O0FBQ0QsVUFBSTFCLHVCQUFKLEVBQTZCO0FBQzNCQSxRQUFBQSx1QkFBdUIsQ0FBQ0MsSUFBRCxDQUF2QjtBQUNEO0FBQ0YsS0FsR2dDOztBQUFBLFVBb0cxQjBCLFFBcEcwQixHQW9HZixVQUFDdkIsS0FBRCxFQUF5QndCLE1BQXpCLEVBQXlDO0FBQUEseUJBQ2xCLE1BQUtwQyxLQURhO0FBQUEsVUFDakRtQyxRQURpRCxnQkFDakRBLFFBRGlEO0FBQUEsVUFDaENFLFNBRGdDLGdCQUN2Q3pCLEtBRHVDOztBQUd6RCxVQUFJeUIsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLGNBQUt2QixRQUFMLENBQWM7QUFDWkYsVUFBQUEsS0FBSyxFQUFMQTtBQURZLFNBQWQ7QUFHRDs7QUFDRCxVQUFJdUIsUUFBUSxJQUFJRSxTQUFTLEtBQUt6QixLQUE5QixFQUFxQztBQUNuQ3VCLFFBQUFBLFFBQVEsQ0FBQ3ZCLEtBQUQsRUFBUXdCLE1BQVIsQ0FBUjtBQUNEOztBQUVELFVBQUksTUFBS2pDLE1BQVQsRUFBaUI7QUFDZixjQUFLQSxNQUFMLENBQVlTLEtBQVosR0FBb0IsRUFBcEI7QUFDRDs7QUFDRCxVQUFJLE1BQUtWLE1BQUwsSUFBZSxNQUFLQSxNQUFMLENBQVlvQyxhQUEvQixFQUE4QztBQUM1QyxjQUFLcEMsTUFBTCxDQUFZb0MsYUFBWixDQUEwQixFQUExQjtBQUNEO0FBQ0YsS0F0SGdDOztBQUFBLFVBd0gxQkMsb0JBeEgwQixHQXdISCxVQUFDbkMsSUFBRCxFQUF1QjtBQUNuRCxZQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFEbUQseUJBRVQsTUFBS0osS0FGSTtBQUFBLFVBRTNDd0MsVUFGMkMsZ0JBRTNDQSxVQUYyQztBQUFBLFVBRS9CQyxpQkFGK0IsZ0JBRS9CQSxpQkFGK0I7O0FBR25ELFVBQUlELFVBQUosRUFBZ0I7QUFDZCxlQUNFLGlDQUNFO0FBQUssVUFBQSxTQUFTLFlBQUsxQyxNQUFMO0FBQWQsV0FDRTtBQUNFLFVBQUEsR0FBRyxFQUFFLE1BQUtTLFVBRFo7QUFFRSxVQUFBLFdBQVcsRUFBRWtDLGlCQUZmO0FBR0UsVUFBQSxRQUFRLEVBQUUsTUFBS0MsWUFIakI7QUFJRSxVQUFBLFNBQVMsRUFBRSxNQUFLQyxtQkFKbEI7QUFLRSxVQUFBLFdBQVcsRUFBRSxNQUFLNUIsb0JBTHBCO0FBTUUsVUFBQSxTQUFTLEVBQUUsTUFBS0E7QUFObEIsVUFERixFQVNFLG9CQUFDLGdCQUFEO0FBQU0sVUFBQSxJQUFJLEVBQUMsUUFBWDtBQUFvQixVQUFBLFNBQVMsWUFBS2pCLE1BQUw7QUFBN0IsVUFURixDQURGLEVBWUdNLElBWkgsQ0FERjtBQWdCRDs7QUFDRCxhQUFPQSxJQUFQO0FBQ0QsS0E5SWdDOztBQUFBLFVBZ0oxQnNDLFlBaEowQixHQWdKWCxVQUFDRSxDQUFELEVBQTRDO0FBQ2hFLFVBQU1DLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNsQyxLQUFyQjtBQURnRSx5QkFFMUIsTUFBS0QsS0FGcUI7QUFBQSxVQUV4RHVCLGVBRndELGdCQUV4REEsZUFGd0Q7QUFBQSxVQUV2Q3JCLFFBRnVDLGdCQUV2Q0EsUUFGdUM7O0FBR2hFLFVBQUlnQyxHQUFHLElBQUksQ0FBQ1gsZUFBWixFQUE2QjtBQUMzQixjQUFLcEIsUUFBTCxDQUFjO0FBQUVvQixVQUFBQSxlQUFlLEVBQUU7QUFBbkIsU0FBZDtBQUNEOztBQUNELFVBQUksQ0FBQ1csR0FBRCxJQUFRWCxlQUFaLEVBQTZCO0FBQzNCLGNBQUtwQixRQUFMLENBQWM7QUFBRW9CLFVBQUFBLGVBQWUsRUFBRTtBQUFuQixTQUFkO0FBQ0Q7O0FBQ0QsVUFBSSxNQUFLaEMsTUFBVCxFQUFpQjtBQUNmLFlBQUllLEVBQUUsR0FBR0osUUFBVDs7QUFDQSxZQUFJLENBQUNBLFFBQUwsRUFBZTtBQUFBOztBQUNiSSxVQUFBQSxFQUFFLDJCQUFJMkIsQ0FBQyxDQUFDRSxNQUFGLENBQVM1QixVQUFiLGtGQUFJLHFCQUFxQkMsV0FBekIsMERBQUcsc0JBQStDRixFQUFwRDs7QUFDQSxnQkFBS0gsUUFBTCxDQUFjO0FBQUVELFlBQUFBLFFBQVEsRUFBRUk7QUFBWixXQUFkO0FBQ0Q7O0FBQ0QsWUFBTThCLFNBQVMsR0FBRzFCLFFBQVEsQ0FBQzJCLGFBQVQsd0JBQXNDL0IsRUFBdEMsU0FBbEI7O0FBQ0EsWUFBSThCLFNBQUosRUFBZTtBQUNiLGNBQU1FLFNBQVMsR0FBR0YsU0FBUyxDQUFDbkMsS0FBNUI7QUFDQW1DLFVBQUFBLFNBQVMsQ0FBQ25DLEtBQVYsR0FBa0JpQyxHQUFsQjtBQUNBLGNBQU1LLEtBQUssR0FBRyxJQUFJdEIsS0FBSixDQUFVLE9BQVYsRUFBbUI7QUFBRXVCLFlBQUFBLE9BQU8sRUFBRTtBQUFYLFdBQW5CLENBQWQ7QUFFQSxjQUFNQyxPQUFPLEdBQUdMLFNBQVMsQ0FBQ00sYUFBMUI7O0FBQ0EsY0FBSUQsT0FBSixFQUFhO0FBQ1hBLFlBQUFBLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQkwsU0FBakI7QUFDRDs7QUFDREYsVUFBQUEsU0FBUyxDQUFDcEIsYUFBVixDQUF3QnVCLEtBQXhCO0FBQ0Q7QUFDRjtBQUNGLEtBNUtnQzs7QUFBQSxVQThLMUJQLG1CQTlLMEIsR0E4S0osVUFBQ0MsQ0FBRCxFQUE4QztBQUN6RSxVQUFJLE1BQUsxQyxNQUFMLElBQWUsTUFBS0EsTUFBTCxDQUFZcUQsY0FBL0IsRUFBK0M7QUFDN0MsY0FBS3JELE1BQUwsQ0FBWXFELGNBQVosQ0FBMkJYLENBQTNCO0FBQ0Q7QUFDRixLQWxMZ0M7O0FBQUEsVUFvTDFCN0Isb0JBcEwwQixHQW9MSCxZQUFNO0FBQ2xDLFlBQUtkLE1BQUwsR0FBYyxJQUFkO0FBQ0FlLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBS2YsTUFBTCxHQUFjLEtBQWQ7O0FBQ0EsY0FBS2EsUUFBTCxDQUFjO0FBQUVMLFVBQUFBLElBQUksRUFBRTtBQUFSLFNBQWQ7QUFDRCxPQUhTLEVBR1AsR0FITyxDQUFWO0FBSUQsS0ExTGdDOztBQUFBLFFBRXZCK0MsV0FGdUIsR0FFb0J4RCxLQUZwQixDQUV2QndELFdBRnVCO0FBQUEsUUFFVkMsWUFGVSxHQUVvQnpELEtBRnBCLENBRVZ5RCxZQUZVO0FBQUEsUUFFSWhELEtBRkosR0FFb0JULEtBRnBCLENBRUlTLElBRko7QUFBQSxRQUVVRyxNQUZWLEdBRW9CWixLQUZwQixDQUVVWSxLQUZWO0FBSS9CLFFBQUk4QyxVQUFKOztBQUNBLFFBQUk5QyxNQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixVQUFJQSxNQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQjhDLFFBQUFBLFVBQVUsR0FBR0MsU0FBYjtBQUNELE9BRkQsTUFFTztBQUNMRCxRQUFBQSxVQUFVLEdBQUc5QyxNQUFiO0FBQ0Q7QUFDRixLQU5ELE1BTU8sSUFBSTZDLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUNoQ0MsTUFBQUEsVUFBVSxHQUFHRCxZQUFiO0FBQ0Q7O0FBRUQsUUFBSUcsU0FBSjs7QUFDQSxRQUFJbkQsS0FBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJtRCxNQUFBQSxTQUFTLEdBQUduRCxLQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUkrQyxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDL0JJLE1BQUFBLFNBQVMsR0FBR0osV0FBWjtBQUNEOztBQUNELFVBQUs3QyxLQUFMLEdBQWE7QUFDWEYsTUFBQUEsSUFBSSxFQUFFbUQsU0FESztBQUVYMUIsTUFBQUEsZUFBZSxFQUFFLEtBRk47QUFHWHJCLE1BQUFBLFFBQVEsRUFBRSxFQUhDO0FBSVhnQixNQUFBQSxlQUFlLEVBQUUsRUFKTjtBQUtYakIsTUFBQUEsS0FBSyxFQUFFOEM7QUFMSSxLQUFiO0FBckIrQjtBQTRCaEM7Ozs7NkJBZ0tlO0FBQUE7O0FBQUEseUJBWVYsS0FBSzFELEtBWks7QUFBQSxVQUVaNkQsU0FGWSxnQkFFWkEsU0FGWTtBQUFBLFVBR1pDLGlCQUhZLGdCQUdaQSxpQkFIWTtBQUFBLFVBSVpDLFdBSlksZ0JBSVpBLFdBSlk7QUFBQSxVQUtaQyxTQUxZLGdCQUtaQSxTQUxZO0FBQUEsVUFNWkMsU0FOWSxnQkFNWkEsU0FOWTtBQUFBLFVBT1p6QixVQVBZLGdCQU9aQSxVQVBZO0FBQUEsVUFRWjBCLElBUlksZ0JBUVpBLElBUlk7QUFBQSxVQVNaQyxLQVRZLGdCQVNaQSxLQVRZO0FBQUEsVUFVTDlCLFNBVkssZ0JBVVp6QixLQVZZO0FBQUEsVUFXVHdELFVBWFM7O0FBY2QsVUFBTUMsU0FBUyxHQUFHLHNCQUFLRCxVQUFMLEVBQWlCLENBQ2pDLGNBRGlDLEVBRWpDLE1BRmlDLEVBR2pDLHlCQUhpQyxFQUlqQyxVQUppQyxFQUtqQyxtQkFMaUMsQ0FBakIsQ0FBbEI7QUFkYyx5QkEyQlYsS0FBS3pELEtBM0JLO0FBQUEsVUF1Qk5pRCxTQXZCTSxnQkF1QlpuRCxJQXZCWTtBQUFBLFVBd0JaeUIsZUF4QlksZ0JBd0JaQSxlQXhCWTtBQUFBLFVBeUJaTCxlQXpCWSxnQkF5QlpBLGVBekJZO0FBQUEsVUEwQkw2QixVQTFCSyxnQkEwQlo5QyxLQTFCWTtBQThCZCxVQUFNMEQsU0FBNkQsR0FBRyxFQUF0RTs7QUFDQSxVQUFJLE9BQU9WLFNBQVAsS0FBcUIsU0FBekIsRUFBb0M7QUFDbENVLFFBQUFBLFNBQVMsQ0FBQzdELElBQVYsR0FBaUJtRCxTQUFqQjtBQUNEOztBQUNELFVBQUlGLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2QlksUUFBQUEsU0FBUyxDQUFDMUQsS0FBVixHQUFrQnlCLFNBQVMsS0FBSyxFQUFkLEdBQW1CMEIsV0FBbkIsR0FBaUNMLFVBQW5EO0FBQ0Q7O0FBRUQsYUFDRSxvQkFBQyw2QkFBRCxDQUFlLFFBQWYsUUFDRztBQUFBOztBQUFBLFlBQXNCYSx3QkFBdEIsUUFBR1QsaUJBQUg7QUFBQSxlQUNDLG9CQUFDLG9CQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUUsNEJBQ1RELFNBRFMsWUFFTi9ELE1BRk0sd0JBR05BLE1BSE0sY0FHSW9FLElBSEosNkRBS0hwRSxNQUxHLGFBS2NxRSxLQUFLLEtBQUssT0FMeEIsMENBTUhyRSxNQU5HLDhCQU0rQm9DLGVBTi9CLGdCQURiO0FBVUUsd0JBQVl3QixVQUFVLElBQUlLLFdBVjVCO0FBV0UsVUFBQSxvQkFBb0IsRUFBRSxJQVh4QjtBQVlFLFVBQUEsYUFBYSxFQUNYLDRCQUFjO0FBQUVTLFlBQUFBLFNBQVMsRUFBRTtBQUFiLFdBQWQsRUFBbUNSLFNBQVMsSUFBSSxZQUFoRCxDQWJKO0FBZUUsVUFBQSxpQkFBaUIsaUNBQTBCRSxJQUExQixjQUNmMUIsVUFBVSxHQUFHLGlDQUFILEdBQXVDLEVBRGxDLENBZm5CO0FBa0JFLFVBQUEsY0FBYyxFQUFFLE1BQUksQ0FBQ0Qsb0JBbEJ2QjtBQW1CRSxVQUFBLFNBQVMsRUFDUCwwQ0FDR0wsZUFBZSxLQUNiLFFBQVFMLGVBQWUsSUFBSWtDLFdBQW5CLElBQWtDLEVBQTFDLE1BQ0QsUUFEQyxHQUVDO0FBQ0UsWUFBQSxTQUFTLFlBQUtqRSxNQUFMLHNCQURYO0FBRUUsWUFBQSx1QkFBdUIsRUFBRTtBQUN2QjJFLGNBQUFBLE1BQU0sWUFBSzVDLGVBQWUsSUFBSWtDLFdBQW5CLElBQWtDLEVBQXZDO0FBRGlCO0FBRjNCLFlBRkQsR0FTQztBQUFLLFlBQUEsU0FBUyxZQUFLakUsTUFBTDtBQUFkLGFBQ0crQixlQUFlLElBQUlrQyxXQUFuQixJQUFrQyxFQURyQyxDQVZZLENBRGxCLEVBZUUsb0JBQUMsZ0JBQUQ7QUFDRSxZQUFBLElBQUksRUFBRUUsU0FBUyxJQUFJLGVBRHJCO0FBRUUsWUFBQSxLQUFLLEVBQUM7QUFGUixZQWZGLENBcEJKO0FBeUNFLFVBQUEsVUFBVSxFQUFFLEdBekNkO0FBMENFLFVBQUEsZUFBZSxFQUFDLGdDQTFDbEI7QUEyQ0UsVUFBQSx1QkFBdUIsRUFBRSxNQUFJLENBQUN6RCx1QkEzQ2hDO0FBNENFLFVBQUEsUUFBUSxFQUFFLE1BQUksQ0FBQzJCLFFBNUNqQjtBQTZDRSxVQUFBLHdCQUF3QixFQUFFLEtBN0M1QjtBQThDRSxVQUFBLGlCQUFpQixFQUFFMkIsaUJBQWlCLElBQUlTLHdCQTlDMUM7QUErQ0UsVUFBQSxlQUFlLEVBQUMsVUEvQ2xCO0FBZ0RFLFVBQUEsZ0JBQWdCLEVBQUMsVUFoRG5CO0FBaURFLFVBQUEsV0FBVyxFQUFFUixXQWpEZjtBQWtERSxVQUFBLFNBQVMsRUFBQyxhQWxEWjtBQW9ERSxVQUFBLFVBQVUsTUFwRFo7QUFxREUsVUFBQSxHQUFHLEVBQUUsTUFBSSxDQUFDMUQsVUFyRFo7QUFzREUsVUFBQSxjQUFjLEVBQUM7QUF0RGpCLFdBdURNaUUsU0F2RE4sRUF3RE1ELFNBeEROLEVBREQ7QUFBQSxPQURILENBREY7QUFnRUQ7Ozs7RUF4YWtCSyxLQUFLLENBQUNDLFM7O0FBQXJCNUUsTSxDQUNVNkUsSSxHQUFPLFE7QUFEakI3RSxNLENBR1U4RSxNLEdBQXdCQSxrQjtBQUhsQzlFLE0sQ0FLVStFLFEsR0FBNEJBLG9CO0FBTHRDL0UsTSxDQU9VZ0YsUyxHQUFZO0FBSXhCdEQsRUFBQUEsUUFBUSxFQUFFdUQsc0JBQVUxRSxJQUpJO0FBUXhCdUQsRUFBQUEsU0FBUyxFQUFFbUIsc0JBQVVDLE1BUkc7QUFZeEJ6QixFQUFBQSxXQUFXLEVBQUV3QixzQkFBVUUsSUFaQztBQWdCeEJ6QixFQUFBQSxZQUFZLEVBQUV1QixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUMsTUFBWCxFQUFtQkQsc0JBQVVJLE1BQTdCLENBQXBCLENBaEJVO0FBb0J4QkMsRUFBQUEsd0JBQXdCLEVBQUVMLHNCQUFVRSxJQXBCWjtBQXdCeEJwQixFQUFBQSxpQkFBaUIsRUFBRWtCLHNCQUFVTSxJQXhCTDtBQTRCeEI5RSxFQUFBQSx1QkFBdUIsRUFBRXdFLHNCQUFVTSxJQTVCWDtBQWdDeEJuRCxFQUFBQSxRQUFRLEVBQUU2QyxzQkFBVU0sSUFoQ0k7QUFvQ3hCN0UsRUFBQUEsSUFBSSxFQUFFdUUsc0JBQVVFLElBcENRO0FBd0N4Qm5CLEVBQUFBLFdBQVcsRUFBRWlCLHNCQUFVTyxHQXhDQztBQTRDeEJ2QixFQUFBQSxTQUFTLEVBQUVnQixzQkFBVVEsS0FBVixDQUFnQixDQUN6QixLQUR5QixFQUV6QixNQUZ5QixFQUd6QixPQUh5QixFQUl6QixRQUp5QixFQUt6QixTQUx5QixFQU16QixVQU55QixFQU96QixZQVB5QixFQVF6QixhQVJ5QixFQVN6QixTQVR5QixFQVV6QixZQVZ5QixFQVd6QixVQVh5QixFQVl6QixhQVp5QixDQUFoQixDQTVDYTtBQTZEeEJ2QixFQUFBQSxTQUFTLEVBQUVlLHNCQUFVUSxLQUFWLENBQWdCQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsd0JBQVosQ0FBaEIsQ0E3RGE7QUFpRXhCbEQsRUFBQUEsaUJBQWlCLEVBQUV1QyxzQkFBVUMsTUFqRUw7QUFxRXhCekMsRUFBQUEsVUFBVSxFQUFFd0Msc0JBQVVFLElBckVFO0FBeUV4QmhCLEVBQUFBLElBQUksRUFBRWMsc0JBQVVRLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUFoQixDQXpFa0I7QUE2RXhCckIsRUFBQUEsS0FBSyxFQUFFYSxzQkFBVVEsS0FBVixDQUFnQixDQUFDLElBQUQsRUFBTyxPQUFQLENBQWhCLENBN0VpQjtBQWlGeEI1RSxFQUFBQSxLQUFLLEVBQUVvRSxzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUMsTUFBWCxFQUFtQkQsc0JBQVVJLE1BQTdCLENBQXBCO0FBakZpQixDO0FBUHRCckYsTSxDQTJGVTZGLFksR0FBNkI7QUFDekNuRSxFQUFBQSxRQUFRLEVBQUUsSUFEK0I7QUFFekNvQyxFQUFBQSxTQUFTLEVBQUVGLFNBRjhCO0FBR3pDSCxFQUFBQSxXQUFXLEVBQUUsSUFINEI7QUFJekNDLEVBQUFBLFlBQVksRUFBRSxJQUoyQjtBQUt6QzRCLEVBQUFBLHdCQUF3QixFQUFFLElBTGU7QUFNekN2QixFQUFBQSxpQkFBaUIsRUFBRSxJQU5zQjtBQU96Q3RELEVBQUFBLHVCQUF1QixFQUFFWCxJQVBnQjtBQVF6Q3NDLEVBQUFBLFFBQVEsRUFBRXRDLElBUitCO0FBU3pDWSxFQUFBQSxJQUFJLEVBQUUsSUFUbUM7QUFVekNzRCxFQUFBQSxXQUFXLEVBQUUsS0FWNEI7QUFXekNDLEVBQUFBLFNBQVMsRUFBRSxZQVg4QjtBQVl6Q0MsRUFBQUEsU0FBUyxFQUFFLGVBWjhCO0FBYXpDeEIsRUFBQUEsaUJBQWlCLEVBQUUsSUFic0I7QUFjekNELEVBQUFBLFVBQVUsRUFBRSxLQWQ2QjtBQWV6QzBCLEVBQUFBLElBQUksRUFBRSxPQWZtQztBQWdCekNDLEVBQUFBLEtBQUssRUFBRSxJQWhCa0M7QUFpQnpDdkQsRUFBQUEsS0FBSyxFQUFFO0FBakJrQyxDOztBQTNGdkNiLE0sQ0ErR1U4Rix3QixHQUEyQixpQkFBbUM7QUFBQSxNQUFoQ3BGLElBQWdDLFNBQWhDQSxJQUFnQztBQUFBLE1BQTFCRyxLQUEwQixTQUExQkEsS0FBMEI7QUFDMUUsTUFBTWtGLFFBQXNCLEdBQUcsRUFBL0I7O0FBQ0EsTUFBSXJGLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCcUYsSUFBQUEsUUFBUSxDQUFDckYsSUFBVCxHQUFnQkEsSUFBaEI7QUFDRDs7QUFDRCxNQUFJRyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixRQUFJQSxLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNoQmtGLE1BQUFBLFFBQVEsQ0FBQ2xGLEtBQVQsR0FBaUIrQyxTQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMbUMsTUFBQUEsUUFBUSxDQUFDbEYsS0FBVCxHQUFpQkEsS0FBakI7QUFDRDtBQUNGOztBQUNELFNBQU82RSxNQUFNLENBQUNDLElBQVAsQ0FBWUksUUFBWixFQUFzQkMsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUNELFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsQzs7ZUErU1kvRixNIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFJjU2VsZWN0IGZyb20gXCJyYy1zZWxlY3RcIlxuaW1wb3J0IE9wdEdyb3VwIGZyb20gXCIuL09wdEdyb3VwXCJcbmltcG9ydCBPcHRpb24gZnJvbSBcIi4vT3B0aW9uXCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCBJY29uLCB7IEljb25OYW1lcyB9IGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbi8vIEljb25TdmdQYXRocyDnlKjku6XliKTmlq0gaWNvbiDnm7jlhbPnmoQgcHJvcCDmmK/lkKblkIjms5VcbmltcG9ydCBJY29uU3ZnUGF0aHMgZnJvbSBcIi4uL2ljb24vSWNvblN2Z1BhdGhzXCJcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgZ2V0UGxhY2VtZW50cyBmcm9tIFwiLi4vdG9vbHRpcC9wbGFjZW1lbnRzXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG4vKipcbiAqIFNlbGVjdCDlsIHoo4Xkuo4gcmMtc2VsZWN0OiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3NlbGVjdFxuICogcmMtc2VsZWN0IOacrOi6qyBwcm9wcyDpnZ7luLjpnZ7luLjlpJrjgILogIzlpoIgb25Ecm9wZG93blZpc2libGVDaGFuZ2Ug6L+Z5qC355qEIHByb3Ag55Sa6Iez5LiN5Zyo5paH5qGj5Lit77ybXG4gKiDosIPnlKggcmMtc2VsZWN0IOeahOWGhee9ruaWueazle+8jFNlbGVjdCDlrp7njrDkuoblip/og73nmoTlho3lsIHoo4XvvIzlpoLlhoXltYzmkJzntKLkvp3pnaDnmoTmmK8gdGhpcy5zZWxlY3Qub25JbnB1dENoYW5nZe+8m1xuICogcmMtc2VsZWN0IOS7jeeEtuacieiuuOWkmuWAvOW+l+WGjeWwgeijheWSjOe7p+e7reWtpuS5oOeahOS9meWcsO+8jCoq5pyq5p2l55qE5Y+v57u05oqk56m66Ze05piv6Z2e5bi45aSn55qEKirjgIJcbiAqL1xuXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS1zZWxlY3RcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3Qge1xuICBmb3JjZVBvcHVwQWxpZ24/OiAoKSA9PiB2b2lkXG4gIGdldFJvb3REb21Ob2RlPzogKCkgPT4gSFRNTEVsZW1lbnRcbiAgb25JbnB1dENoYW5nZT86IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICBvbklucHV0S2V5RG93bj86IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXG4gIHNldElucHV0VmFsdWU/OiAodmFsdWU/OiBzdHJpbmcpID0+IHZvaWRcbiAgZ2V0UG9wdXBET01Ob2RlOiAoKSA9PiBIVE1MRWxlbWVudFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8muaYr+WQpuWxleW8gFxuICAgKi9cbiAgZGVmYXVsdE9wZW4/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya5b2T5YmN6YCJ5Lit6aG555qE5YC8XG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXlkozpgInmi6nlmajlkIzlrr1cbiAgICovXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAqL1xuICBnZXRQb3B1cENvbnRhaW5lcj86IG51bGwgfCAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBIVE1MRWxlbWVudClcbiAgLyoqXG4gICAqIOS4i+aLieWxleekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaYm9vbFxuICAgKi9cbiAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U/OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZFxuICAvKipcbiAgICog6YCJ5oup5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJoodmFsdWUsIG9wdGlvbilcbiAgICovXG4gIG9uU2VsZWN0PzogKHZhbHVlOiBSZWFjdC5SZWFjdFRleHQsIG9wdGlvbjogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muaYr+WQpuWxleW8gFxuICAgKi9cbiAgb3Blbj86IG51bGwgfCBib29sZWFuXG4gIC8qKlxuICAgKiDpgInmi6nmoYbpu5jorqTmloflrZdcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva4gcGxhY2VtZW50XG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgLyoqXG4gICAqIOiuvue9ruWPs+Wbvuagh1xuICAgKi9cbiAgcmlnaHRJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDmkJzntKLmoYbpu5jorqTmloflrZdcbiAgICovXG4gIHNlYXJjaGFibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbpnIDopoHlhoXltYzmkJzntKJcbiAgICovXG4gIHNlYXJjaFBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jvvIzot5/nnYAgYnV0dG9uIOi1sFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muW9k+WJjemAieS4remhueeahOWAvFxuICAgKi9cbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdFN0YXRlIHtcbiAgb3Blbj86IGJvb2xlYW5cbiAgcGxhY2Vob2xkZXJTaG93PzogYm9vbGVhblxuICBwbGFjZWhvbGRlclRleHQ/OiBzdHJpbmdcbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG4gIHNlbGVjdElkPzogc3RyaW5nXG59XG5cbi8qKlxuICog6YCJ5oup5Zmo55So5LqO6YCJ5oup5p+Q6aG55YaF5a6544CCXG4gKiDpgInmi6nlmajlr7nmr5TljZXpgIkgUmFkaW8g55qE5LyY5Yq/5piv77yM5b2T6YCJ6aG56L+H5aSa5pe277yM6YCJ5oup5Zmo5Y+v5a+55YaF5a655pS26LW377yM5bm25pu05YWz5rOo5LqO5bey6YCJ6aG544CCXG4gKiDpgJrluLjvvIzlvZPnlKjmiLfog73lpJ/pgJrov4flt7LpgInpobnvvIzovbvmmJPlvpfnn6XlhbbkvZnpgInpobnnmoTop4Tlvovml7bvvIjlpoLlubTku73jgIHln47luILnrYnvvInvvIzpgInmi6nlmaggU2VsZWN0IOaYr+avlOi+g+WlveeahOmAieaLqeOAglxuICovXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVNlbGVjdFByb3BzLCBJU2VsZWN0U3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyB0eXBlID0gXCJTZWxlY3RcIlxuXG4gIHB1YmxpYyBzdGF0aWMgT3B0aW9uOiB0eXBlb2YgT3B0aW9uID0gT3B0aW9uXG5cbiAgcHVibGljIHN0YXRpYyBPcHRHcm91cDogdHlwZW9mIE9wdEdyb3VwID0gT3B0R3JvdXBcblxuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muaYr+WQpuWxleW8gFxuICAgICAqL1xuICAgIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlhoXpg6jpqbHliqjvvJrlvZPliY3pgInkuK3pobnnmoTlgLxcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAvKipcbiAgICAgKiDkuIvmi4noj5zljZXlkozpgInmi6nlmajlkIzlrr1cbiAgICAgKi9cbiAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOS4i+aLieWxleekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaYm9vbFxuICAgICAqL1xuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpgInmi6nml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mih2YWx1ZSwgb3B0aW9uKVxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKblsZXlvIBcbiAgICAgKi9cbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpgInmi6nmoYbpu5jorqTmloflrZdcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLmFueSxcbiAgICAvKipcbiAgICAgKiDorr7nva4gcGxhY2VtZW50XG4gICAgICovXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJ0b3BcIixcbiAgICAgIFwibGVmdFwiLFxuICAgICAgXCJyaWdodFwiLFxuICAgICAgXCJib3R0b21cIixcbiAgICAgIFwidG9wTGVmdFwiLFxuICAgICAgXCJ0b3BSaWdodFwiLFxuICAgICAgXCJib3R0b21MZWZ0XCIsXG4gICAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgICBcImxlZnRUb3BcIixcbiAgICAgIFwibGVmdEJvdHRvbVwiLFxuICAgICAgXCJyaWdodFRvcFwiLFxuICAgICAgXCJyaWdodEJvdHRvbVwiLFxuICAgIF0pLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruWPs+Wbvuagh1xuICAgICAqL1xuICAgIHJpZ2h0SWNvbjogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKEljb25TdmdQYXRocykpLFxuICAgIC8qKlxuICAgICAqIOaQnOe0ouahhum7mOiupOaWh+Wtl1xuICAgICAqL1xuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpumcgOimgeWGheW1jOaQnOe0olxuICAgICAqL1xuICAgIHNlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruWwuuWvuO+8jOi3n+edgCBidXR0b24g6LWwXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7kuLvpophcbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3pgInkuK3pobnnmoTlgLxcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElTZWxlY3RQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0T3BlbjogbnVsbCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0cnVlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uU2VsZWN0OiBub29wLFxuICAgIG9wZW46IG51bGwsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgICByaWdodEljb246IFwidHJpYW5nbGUtZG93blwiLFxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBcIuaQnOe0olwiLFxuICAgIHNlYXJjaGFibGU6IGZhbHNlLFxuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB0aGVtZTogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHsgb3BlbiwgdmFsdWUgfTogSVNlbGVjdFByb3BzKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IElTZWxlY3RTdGF0ZSA9IHt9XG4gICAgaWYgKG9wZW4gIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLm9wZW4gPSBvcGVuXG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIG5ld1N0YXRlLnZhbHVlID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTdGF0ZS52YWx1ZSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCA/IG5ld1N0YXRlIDogbnVsbFxuICB9XG5cbiAgcHVibGljIGxvY2tlZCA9IGZhbHNlXG5cbiAgcHVibGljIHNlbGVjdDogSVNlbGVjdFxuXG4gIHB1YmxpYyBzZWFyY2g6IEhUTUxJbnB1dEVsZW1lbnRcblxuICBwdWJsaWMgbWVudTogSlNYLkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVNlbGVjdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBkZWZhdWx0T3BlbiwgZGVmYXVsdFZhbHVlLCBvcGVuLCB2YWx1ZSB9ID0gcHJvcHNcblxuICAgIGxldCB2YWx1ZVN0YXRlXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgdmFsdWVTdGF0ZSA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVTdGF0ZSA9IHZhbHVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlU3RhdGUgPSBkZWZhdWx0VmFsdWVcbiAgICB9XG5cbiAgICBsZXQgb3BlblN0YXRlXG4gICAgaWYgKG9wZW4gIT09IG51bGwpIHtcbiAgICAgIG9wZW5TdGF0ZSA9IG9wZW5cbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRPcGVuICE9PSBudWxsKSB7XG4gICAgICBvcGVuU3RhdGUgPSBkZWZhdWx0T3BlblxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3Blbjogb3BlblN0YXRlLFxuICAgICAgcGxhY2Vob2xkZXJTaG93OiBmYWxzZSxcbiAgICAgIHNlbGVjdElkOiBcIlwiLFxuICAgICAgcGxhY2Vob2xkZXJUZXh0OiBcIlwiLFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNhdmVTZWxlY3QgPSAobm9kZTogSVNlbGVjdCkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVTZWFyY2ggPSAobm9kZTogSFRNTElucHV0RWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2VhcmNoID0gbm9kZVxuICB9XG5cbiAgcHVibGljIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlID0gKG9wZW46IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLCBvcGVuOiBvcGVuUHJvcCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUsIHNlbGVjdElkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAodGhpcy5sb2NrZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAob3BlblByb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuIH0pXG4gICAgfVxuICAgIGlmIChvcGVuKSB7XG4gICAgICB0aGlzLnByZXZlbnRWaXNpYmxlQ2hhbmdlKClcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaCkge1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IGlkID0gc2VsZWN0SWRcbiAgICAgICAgICAgIGlmICghc2VsZWN0SWQpIHtcbiAgICAgICAgICAgICAgaWQgPSAodGhpcy5zZWFyY2gucGFyZW50Tm9kZT8ubmV4dFNpYmxpbmcgYXMgRWxlbWVudCk/LmlkXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RJZDogaWQgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk/Lm5leHRTaWJsaW5nIGFzIEVsZW1lbnRcbiAgICAgICAgICAgICAgY29uc3QgZWwgPSBwYXJlbnQ/LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgXCJhZHVpLXNlbGVjdC1pdGVtLW9wdGlvbi1zZWxlY3RlZFwiXG4gICAgICAgICAgICAgIClbMF0/LmNoaWxkcmVuWzBdIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgICAgICAgY29uc3QgbGlzdEhvbGRlciA9IHBhcmVudD8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICAgICBcInJjLXZpcnR1YWwtbGlzdC1ob2xkZXJcIlxuICAgICAgICAgICAgICApWzBdIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgICAgICAgaWYgKGxpc3RIb2xkZXIpIHtcbiAgICAgICAgICAgICAgICBsaXN0SG9sZGVyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2Nyb2xsXCIpKVxuXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RIb2xkZXIuY2hpbGRyZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgIGxpc3RIb2xkZXIuY2hpbGRyZW5bMF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ6IGVsLmRhdGFzZXQuaHRtbCB8fCBlbC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNlYXJjaC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sIDE1MClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoLnZhbHVlID0gXCJcIlxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBsYWNlaG9sZGVyU2hvdzogZmFsc2UsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25Ecm9wZG93blZpc2libGVDaGFuZ2UpIHtcbiAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKG9wZW4pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0ID0gKHZhbHVlOiBSZWFjdC5SZWFjdFRleHQsIG9wdGlvbjogYW55KSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdCwgdmFsdWU6IHZhbHVlUHJvcCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG9uU2VsZWN0ICYmIHZhbHVlUHJvcCAhPT0gdmFsdWUpIHtcbiAgICAgIG9uU2VsZWN0KHZhbHVlLCBvcHRpb24pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaC52YWx1ZSA9IFwiXCJcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0LnNldElucHV0VmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0LnNldElucHV0VmFsdWUoXCJcIilcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlRHJvcGRvd25SZW5kZXIgPSAobWVudTogSlNYLkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1lbnUgPSBtZW51XG4gICAgY29uc3QgeyBzZWFyY2hhYmxlLCBzZWFyY2hQbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzZWFyY2hhYmxlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlYXJjaGB9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlU2VhcmNofVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17c2VhcmNoUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZVNlYXJjaEtleURvd259XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByZXZlbnRWaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbk1vdXNlVXA9e3RoaXMucHJldmVudFZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bWVudX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBtZW51XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VhcmNoID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyU2hvdywgc2VsZWN0SWQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmFsICYmICFwbGFjZWhvbGRlclNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwbGFjZWhvbGRlclNob3c6IHRydWUgfSlcbiAgICB9XG4gICAgaWYgKCF2YWwgJiYgcGxhY2Vob2xkZXJTaG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGxhY2Vob2xkZXJTaG93OiBmYWxzZSB9KVxuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3QpIHtcbiAgICAgIGxldCBpZCA9IHNlbGVjdElkXG4gICAgICBpZiAoIXNlbGVjdElkKSB7XG4gICAgICAgIGlkID0gKGUudGFyZ2V0LnBhcmVudE5vZGU/Lm5leHRTaWJsaW5nIGFzIEVsZW1lbnQpPy5pZFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0SWQ6IGlkIH0pXG4gICAgICB9XG4gICAgICBjb25zdCByZWFsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbYXJpYS1vd25zPVwiJHtpZH1cIl1gKSBhcyBhbnlcbiAgICAgIGlmIChyZWFsSW5wdXQpIHtcbiAgICAgICAgY29uc3QgbGFzdFZhbHVlID0gcmVhbElucHV0LnZhbHVlXG4gICAgICAgIHJlYWxJbnB1dC52YWx1ZSA9IHZhbFxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSB9KVxuICAgICAgICAvLyBoYWNrIFJlYWN0MTYg5YaF6YOo5a6a5LmJ5LqGZGVzY3JpcHRvcuaLpuaIqnZhbHVl77yM5q2k5aSE6YeN572u54q25oCBXG4gICAgICAgIGNvbnN0IHRyYWNrZXIgPSByZWFsSW5wdXQuX3ZhbHVlVHJhY2tlclxuICAgICAgICBpZiAodHJhY2tlcikge1xuICAgICAgICAgIHRyYWNrZXIuc2V0VmFsdWUobGFzdFZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJlYWxJbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2hLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Qub25JbnB1dEtleURvd24pIHtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uSW5wdXRLZXlEb3duKGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHByZXZlbnRWaXNpYmxlQ2hhbmdlID0gKCkgPT4ge1xuICAgIHRoaXMubG9ja2VkID0gdHJ1ZVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSlcbiAgICB9LCAyMDApXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICByaWdodEljb24sXG4gICAgICBzZWFyY2hhYmxlLFxuICAgICAgc2l6ZSxcbiAgICAgIHRoZW1lLFxuICAgICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgXCJvcGVuXCIsXG4gICAgICBcIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VsZWN0XCIsXG4gICAgICBcInNlYXJjaFBsYWNlaG9sZGVyXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHtcbiAgICAgIG9wZW46IG9wZW5TdGF0ZSxcbiAgICAgIHBsYWNlaG9sZGVyU2hvdyxcbiAgICAgIHBsYWNlaG9sZGVyVGV4dCxcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAvLyBvcGVuU3RhdGUg5Y+v6IO95pivIHVuZGVmaW5lZCBvciBudWxsXG4gICAgY29uc3Qgb3BlblByb3BzOiB7IG9wZW4/OiBib29sZWFuOyB2YWx1ZT86IFJlYWN0LlJlYWN0Tm9kZSB8IG51bGwgfSA9IHt9XG4gICAgaWYgKHR5cGVvZiBvcGVuU3RhdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBvcGVuUHJvcHMub3BlbiA9IG9wZW5TdGF0ZVxuICAgIH1cbiAgICBpZiAodmFsdWVTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgb3BlblByb3BzLnZhbHVlID0gdmFsdWVQcm9wID09PSBcIlwiID8gcGxhY2Vob2xkZXIgOiB2YWx1ZVN0YXRlXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9KSA9PiAoXG4gICAgICAgICAgPFJjU2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgYCR7cHJlZml4fS1zZWxlY3RgLFxuICAgICAgICAgICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tbGlnaHRgXTogdGhlbWUgPT09IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1zZWxlY3RfcGxhY2Vob2xkZXJTaG93YF06IHBsYWNlaG9sZGVyU2hvdyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGRhdGEtdmFsdWU9e3ZhbHVlU3RhdGUgfHwgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBtZW51SXRlbVNlbGVjdGVkSWNvbj17bnVsbH1cbiAgICAgICAgICAgIGRyb3Bkb3duQWxpZ249e1xuICAgICAgICAgICAgICBnZXRQbGFjZW1lbnRzKHsgYWxpZ25FZGdlOiB0cnVlIH0pW3BsYWNlbWVudCB8fCBcImJvdHRvbUxlZnRcIl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lPXtgYWR1aS1zZWxlY3QtZHJvcGRvd24tJHtzaXplfSAke1xuICAgICAgICAgICAgICBzZWFyY2hhYmxlID8gXCJhZHVpLXNlbGVjdC1kcm9wZG93bi1zZWFyY2hhYmxlXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIGRyb3Bkb3duUmVuZGVyPXt0aGlzLmhhbmRsZURyb3Bkb3duUmVuZGVyfVxuICAgICAgICAgICAgaW5wdXRJY29uPXtcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7cGxhY2Vob2xkZXJTaG93ICYmXG4gICAgICAgICAgICAgICAgICAodHlwZW9mIChwbGFjZWhvbGRlclRleHQgfHwgcGxhY2Vob2xkZXIgfHwgXCJcIikgPT09XG4gICAgICAgICAgICAgICAgICBcInN0cmluZ1wiID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyLXRleHRgfVxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGAke3BsYWNlaG9sZGVyVGV4dCB8fCBwbGFjZWhvbGRlciB8fCBcIlwifWAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyLXRleHRgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7cGxhY2Vob2xkZXJUZXh0IHx8IHBsYWNlaG9sZGVyIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIGljb249e3JpZ2h0SWNvbiB8fCBcInRyaWFuZ2xlLWRvd25cIn1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tZ3JheS04MDApXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpc3RIZWlnaHQ9ezI1MH1cbiAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD1cIuaXoOWMuemFjee7k+aenFwiXG4gICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17dGhpcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxuICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgICAgICBvcHRpb25MYWJlbFByb3A9XCJjaGlsZHJlblwiXG4gICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgcHJlZml4Q2xzPVwiYWR1aS1zZWxlY3RcIlxuICAgICAgICAgICAgLy8g5byA5ZCvIHNob3dTZWFyY2gg5omN5Y+v6IO9IGhhY2sg5byP5Zyw6Kem5Y+RIGlucHV0IGNoYW5nZSDkuovku7ZcbiAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlU2VsZWN0fVxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJzbGlkZS11cFwiXG4gICAgICAgICAgICB7Li4ub3BlblByb3BzfVxuICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiJdfQ==