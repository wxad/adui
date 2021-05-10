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
      var target;

      if (e) {
        target = e.target;
      } else {
        target = _this.search;
      }

      var val = target.value;
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
          var _target$parentNode, _target$parentNode$ne;

          id = (_target$parentNode = target.parentNode) === null || _target$parentNode === void 0 ? void 0 : (_target$parentNode$ne = _target$parentNode.nextSibling) === null || _target$parentNode$ne === void 0 ? void 0 : _target$parentNode$ne.id;

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
          options = _this$props4.options,
          placeholder = _this$props4.placeholder,
          placeholderColor = _this$props4.placeholderColor,
          placement = _this$props4.placement,
          rightIcon = _this$props4.rightIcon,
          searchable = _this$props4.searchable,
          size = _this$props4.size,
          theme = _this$props4.theme,
          valueProp = _this$props4.value,
          otherProps = _objectWithoutProperties(_this$props4, ["className", "getPopupContainer", "options", "placeholder", "placeholderColor", "placement", "rightIcon", "searchable", "size", "theme", "value"]);

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
        openProps.value = valueProp === "" ? placeholderColor ? React.createElement("span", {
          style: {
            color: placeholderColor
          }
        }, placeholder) : placeholder : valueState;
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
            style: {
              color: placeholderColor
            },
            dangerouslySetInnerHTML: {
              __html: "".concat(placeholderText || placeholder || "")
            }
          }) : React.createElement("div", {
            className: "".concat(prefix, "-placeholder-text"),
            style: {
              color: placeholderColor
            }
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
          optionLabelProp: options ? "label" : "children",
          optionFilterProp: options ? "label" : "children",
          options: options,
          placeholder: placeholderColor ? React.createElement("span", {
            style: {
              color: placeholderColor
            }
          }, placeholder) : placeholder,
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
  options: _propTypes["default"].array,
  placeholder: _propTypes["default"].any,
  placeholderColor: _propTypes["default"].string,
  placement: _propTypes["default"].oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  rightIcon: _propTypes["default"].any,
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
  options: undefined,
  placeholder: "请选择",
  placeholderColor: undefined,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsibm9vcCIsInByZWZpeCIsIlNlbGVjdCIsInByb3BzIiwibG9ja2VkIiwic2VsZWN0Iiwic2VhcmNoIiwibWVudSIsInNhdmVTZWxlY3QiLCJub2RlIiwic2F2ZVNlYXJjaCIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwib3BlbiIsIm9wZW5Qcm9wIiwic3RhdGUiLCJ2YWx1ZSIsInNlbGVjdElkIiwic2V0U3RhdGUiLCJwcmV2ZW50VmlzaWJsZUNoYW5nZSIsInNldFRpbWVvdXQiLCJpZCIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsInBhcmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGlsZHJlbiIsImxpc3RIb2xkZXIiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJwbGFjZWhvbGRlclRleHQiLCJkYXRhc2V0IiwiaHRtbCIsImlubmVySFRNTCIsImZvY3VzIiwicGxhY2Vob2xkZXJTaG93Iiwib25TZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZVByb3AiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlRHJvcGRvd25SZW5kZXIiLCJzZWFyY2hhYmxlIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVTZWFyY2hLZXlEb3duIiwiZSIsInRhcmdldCIsInZhbCIsInJlYWxJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJsYXN0VmFsdWUiLCJldmVudCIsImJ1YmJsZXMiLCJ0cmFja2VyIiwiX3ZhbHVlVHJhY2tlciIsInNldFZhbHVlIiwib25JbnB1dEtleURvd24iLCJkZWZhdWx0T3BlbiIsImRlZmF1bHRWYWx1ZSIsInZhbHVlU3RhdGUiLCJ1bmRlZmluZWQiLCJvcGVuU3RhdGUiLCJjbGFzc05hbWUiLCJnZXRQb3B1cENvbnRhaW5lciIsIm9wdGlvbnMiLCJwbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyQ29sb3IiLCJwbGFjZW1lbnQiLCJyaWdodEljb24iLCJzaXplIiwidGhlbWUiLCJvdGhlclByb3BzIiwicmVzdFByb3BzIiwib3BlblByb3BzIiwiY29sb3IiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJfX2h0bWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsInR5cGUiLCJPcHRpb24iLCJPcHRHcm91cCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgiLCJmdW5jIiwiYXJyYXkiLCJhbnkiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5ld1N0YXRlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsYUFBZjs7SUE4R01DLE07Ozs7O0FBZ0pKLGtCQUFZQyxLQUFaLEVBQWlDO0FBQUE7O0FBQUE7O0FBQy9CLDhCQUFNQSxLQUFOO0FBRCtCLFVBUjFCQyxNQVEwQixHQVJqQixLQVFpQjtBQUFBLFVBTjFCQyxNQU0wQjtBQUFBLFVBSjFCQyxNQUkwQjtBQUFBLFVBRjFCQyxJQUUwQjs7QUFBQSxVQThCMUJDLFVBOUIwQixHQThCYixVQUFDQyxJQUFELEVBQW1CO0FBQ3JDLFlBQUtKLE1BQUwsR0FBY0ksSUFBZDtBQUNELEtBaENnQzs7QUFBQSxVQWtDMUJDLFVBbEMwQixHQWtDYixVQUFDRCxJQUFELEVBQTRCO0FBQzlDLFlBQUtILE1BQUwsR0FBY0csSUFB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LE1BRU87QUFDTG9DLE1BQUFBLFFBQVEsQ0FBQ25GLEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPb0YsTUFBTSxDQUFDQyxJQUFQLENBQVlGLFFBQVosRUFBc0JHLE1BQXRCLEdBQStCLENBQS9CLEdBQW1DSCxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O2VBMlVZaEcsTSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kYW5nZXIgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgUmNTZWxlY3QgZnJvbSBcInJjLXNlbGVjdFwiXG5pbXBvcnQgT3B0R3JvdXAgZnJvbSBcIi4vT3B0R3JvdXBcIlxuaW1wb3J0IE9wdGlvbiBmcm9tIFwiLi9PcHRpb25cIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IEljb24sIHsgSWNvbk5hbWVzIH0gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbi8qKlxuICogU2VsZWN0IOWwgeijheS6jiByYy1zZWxlY3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvc2VsZWN0XG4gKiByYy1zZWxlY3Qg5pys6LqrIHByb3BzIOmdnuW4uOmdnuW4uOWkmuOAguiAjOWmgiBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSDov5nmoLfnmoQgcHJvcCDnlJroh7PkuI3lnKjmlofmoaPkuK3vvJtcbiAqIOiwg+eUqCByYy1zZWxlY3Qg55qE5YaF572u5pa55rOV77yMU2VsZWN0IOWunueOsOS6huWKn+iDveeahOWGjeWwgeijhe+8jOWmguWGheW1jOaQnOe0ouS+nemdoOeahOaYryB0aGlzLnNlbGVjdC5vbklucHV0Q2hhbmdl77ybXG4gKiByYy1zZWxlY3Qg5LuN54S25pyJ6K645aSa5YC85b6X5YaN5bCB6KOF5ZKM57un57ut5a2m5Lmg55qE5L2Z5Zyw77yMKirmnKrmnaXnmoTlj6/nu7TmiqTnqbrpl7TmmK/pnZ7luLjlpKfnmoQqKuOAglxuICovXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXNlbGVjdFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdCB7XG4gIGZvcmNlUG9wdXBBbGlnbj86ICgpID0+IHZvaWRcbiAgZ2V0Um9vdERvbU5vZGU/OiAoKSA9PiBIVE1MRWxlbWVudFxuICBvbklucHV0Q2hhbmdlPzogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXG4gIG9uSW5wdXRLZXlEb3duPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgc2V0SW5wdXRWYWx1ZT86ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZFxuICBnZXRQb3B1cERPTU5vZGU6ICgpID0+IEhUTUxFbGVtZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm5bGV5byAXG4gICAqL1xuICBkZWZhdWx0T3Blbj86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrlvZPliY3pgInkuK3pobnnmoTlgLxcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuvVxuICAgKi9cbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICAvKipcbiAgICog5LiL5ouJ5bGV56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJpib29sXG4gICAqL1xuICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT86IChvcGVuOiBib29sZWFuKSA9PiB2b2lkXG4gIC8qKlxuICAgKiDpgInmi6nml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mih2YWx1ZSwgb3B0aW9uKVxuICAgKi9cbiAgb25TZWxlY3Q/OiAodmFsdWU6IFJlYWN0LlJlYWN0VGV4dCwgb3B0aW9uOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4gdm9pZFxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5piv5ZCm5bGV5byAXG4gICAqL1xuICBvcGVuPzogbnVsbCB8IGJvb2xlYW5cbiAgLyoqXG4gICAqIOWPr+ebtOaOpeS8oOWFpSBvcHRpb25z77yM5pu/5Luj5omL5Yqo5p6E6YCgIGNoaWxkcmVuIGpzeCDnmoTmlrnlvI/vvIzpnIDkvKDlhaXmr4/pobnnmoQgbGFiZWwg5ZKMIHZhbHVlXG4gICAqL1xuICBvcHRpb25zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueVxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIGRpc2FibGVkPzogYm9vbGVhblxuICAgIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGVcbiAgICB2YWx1ZTogUmVhY3QuUmVhY3RUZXh0XG4gIH1bXVxuICAvKipcbiAgICog6YCJ5oup5qGG6buY6K6k5paH5a2XXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6YCJ5oup5qGG6buY6K6k5paH5a2X55qE6aKc6ImyXG4gICAqL1xuICBwbGFjZWhvbGRlckNvbG9yPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva4gcGxhY2VtZW50XG4gICAqL1xuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgLyoqXG4gICAqIOiuvue9ruWPs+Wbvuagh1xuICAgKi9cbiAgcmlnaHRJY29uPzogSWNvbk5hbWVzXG4gIC8qKlxuICAgKiDmkJzntKLmoYbpu5jorqTmloflrZdcbiAgICovXG4gIHNlYXJjaGFibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmmK/lkKbpnIDopoHlhoXltYzmkJzntKJcbiAgICovXG4gIHNlYXJjaFBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jvvIzot5/nnYAgYnV0dG9uIOi1sFxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog6K6+572u5Li76aKYXG4gICAqL1xuICB0aGVtZT86IG51bGwgfCBcImxpZ2h0XCJcbiAgLyoqXG4gICAqIOWklumDqOaOp+WItu+8muW9k+WJjemAieS4remhueeahOWAvFxuICAgKi9cbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdFN0YXRlIHtcbiAgb3Blbj86IGJvb2xlYW5cbiAgcGxhY2Vob2xkZXJTaG93PzogYm9vbGVhblxuICBwbGFjZWhvbGRlclRleHQ/OiBzdHJpbmdcbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHQgfCBudWxsXG4gIHNlbGVjdElkPzogc3RyaW5nXG59XG5cbi8qKlxuICog6YCJ5oup5Zmo55So5LqO6YCJ5oup5p+Q6aG55YaF5a6544CCXG4gKiDpgInmi6nlmajlr7nmr5TljZXpgIkgUmFkaW8g55qE5LyY5Yq/5piv77yM5b2T6YCJ6aG56L+H5aSa5pe277yM6YCJ5oup5Zmo5Y+v5a+55YaF5a655pS26LW377yM5bm25pu05YWz5rOo5LqO5bey6YCJ6aG544CCXG4gKiDpgJrluLjvvIzlvZPnlKjmiLfog73lpJ/pgJrov4flt7LpgInpobnvvIzovbvmmJPlvpfnn6XlhbbkvZnpgInpobnnmoTop4Tlvovml7bvvIjlpoLlubTku73jgIHln47luILnrYnvvInvvIzpgInmi6nlmaggU2VsZWN0IOaYr+avlOi+g+WlveeahOmAieaLqeOAglxuICovXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVNlbGVjdFByb3BzLCBJU2VsZWN0U3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyB0eXBlID0gXCJTZWxlY3RcIlxuXG4gIHB1YmxpYyBzdGF0aWMgT3B0aW9uOiB0eXBlb2YgT3B0aW9uID0gT3B0aW9uXG5cbiAgcHVibGljIHN0YXRpYyBPcHRHcm91cDogdHlwZW9mIE9wdEdyb3VwID0gT3B0R3JvdXBcblxuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muaYr+WQpuWxleW8gFxuICAgICAqL1xuICAgIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlhoXpg6jpqbHliqjvvJrlvZPliY3pgInkuK3pobnnmoTlgLxcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAvKipcbiAgICAgKiDkuIvmi4noj5zljZXlkozpgInmi6nlmajlkIzlrr1cbiAgICAgKi9cbiAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOS4i+aLieWxleekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaYm9vbFxuICAgICAqL1xuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpgInmi6nml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mih2YWx1ZSwgb3B0aW9uKVxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKblsZXlvIBcbiAgICAgKi9cbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlj6/nm7TmjqXkvKDlhaUgb3B0aW9uc++8jOabv+S7o+aJi+WKqOaehOmAoCBjaGlsZHJlbiBqc3gg55qE5pa55byP77yM6ZyA5Lyg5YWl5q+P6aG555qEIGxhYmVsIOWSjCB2YWx1ZVxuICAgICAqL1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDpgInmi6nmoYbpu5jorqTmloflrZdcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLmFueSxcbiAgICAvKipcbiAgICAgKiDpgInmi6nmoYbpu5jorqTmloflrZfnmoTpopzoibJcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlckNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOiuvue9riBwbGFjZW1lbnRcbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u5Y+z5Zu+5qCHXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMuYW55LFxuICAgIC8qKlxuICAgICAqIOaQnOe0ouahhum7mOiupOaWh+Wtl1xuICAgICAqL1xuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpumcgOimgeWGheW1jOaQnOe0olxuICAgICAqL1xuICAgIHNlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruWwuuWvuO+8jOi3n+edgCBidXR0b24g6LWwXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7kuLvpophcbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrlvZPliY3pgInkuK3pobnnmoTlgLxcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElTZWxlY3RQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0T3BlbjogbnVsbCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0cnVlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uU2VsZWN0OiBub29wLFxuICAgIG9wZW46IG51bGwsXG4gICAgb3B0aW9uczogdW5kZWZpbmVkLFxuICAgIHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiLFxuICAgIHBsYWNlaG9sZGVyQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgIHJpZ2h0SWNvbjogXCJ0cmlhbmdsZS1kb3duXCIsXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFwi5pCc57SiXCIsXG4gICAgc2VhcmNoYWJsZTogZmFsc2UsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHRoZW1lOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoeyBvcGVuLCB2YWx1ZSB9OiBJU2VsZWN0UHJvcHMpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZTogSVNlbGVjdFN0YXRlID0ge31cbiAgICBpZiAob3BlbiAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUub3BlbiA9IG9wZW5cbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgbmV3U3RhdGUudmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0YXRlLnZhbHVlID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICBwdWJsaWMgbG9ja2VkID0gZmFsc2VcblxuICBwdWJsaWMgc2VsZWN0OiBJU2VsZWN0XG5cbiAgcHVibGljIHNlYXJjaDogSFRNTElucHV0RWxlbWVudFxuXG4gIHB1YmxpYyBtZW51OiBKU1guRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJU2VsZWN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IGRlZmF1bHRPcGVuLCBkZWZhdWx0VmFsdWUsIG9wZW4sIHZhbHVlIH0gPSBwcm9wc1xuXG4gICAgbGV0IHZhbHVlU3RhdGVcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICB2YWx1ZVN0YXRlID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZVN0YXRlID0gdmFsdWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWVTdGF0ZSA9IGRlZmF1bHRWYWx1ZVxuICAgIH1cblxuICAgIGxldCBvcGVuU3RhdGVcbiAgICBpZiAob3BlbiAhPT0gbnVsbCkge1xuICAgICAgb3BlblN0YXRlID0gb3BlblxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdE9wZW4gIT09IG51bGwpIHtcbiAgICAgIG9wZW5TdGF0ZSA9IGRlZmF1bHRPcGVuXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBvcGVuU3RhdGUsXG4gICAgICBwbGFjZWhvbGRlclNob3c6IGZhbHNlLFxuICAgICAgc2VsZWN0SWQ6IFwiXCIsXG4gICAgICBwbGFjZWhvbGRlclRleHQ6IFwiXCIsXG4gICAgICB2YWx1ZTogdmFsdWVTdGF0ZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2F2ZVNlbGVjdCA9IChub2RlOiBJU2VsZWN0KSA9PiB7XG4gICAgdGhpcy5zZWxlY3QgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVNlYXJjaCA9IChub2RlOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zZWFyY2ggPSBub2RlXG4gIH1cblxuICBwdWJsaWMgb25Ecm9wZG93blZpc2libGVDaGFuZ2UgPSAob3BlbjogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHsgb25Ecm9wZG93blZpc2libGVDaGFuZ2UsIG9wZW46IG9wZW5Qcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSwgc2VsZWN0SWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChvcGVuUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW4gfSlcbiAgICB9XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMucHJldmVudFZpc2libGVDaGFuZ2UoKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBzZWxlY3RJZFxuICAgICAgICAgICAgaWYgKCFzZWxlY3RJZCkge1xuICAgICAgICAgICAgICBpZCA9ICh0aGlzLnNlYXJjaC5wYXJlbnROb2RlPy5uZXh0U2libGluZyBhcyBFbGVtZW50KT8uaWRcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdElkOiBpZCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKT8ubmV4dFNpYmxpbmcgYXMgRWxlbWVudFxuICAgICAgICAgICAgICBjb25zdCBlbCA9IHBhcmVudD8uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICAgICBcImFkdWktc2VsZWN0LWl0ZW0tb3B0aW9uLXNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgKVswXT8uY2hpbGRyZW5bMF0gYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICAgICAgICBjb25zdCBsaXN0SG9sZGVyID0gcGFyZW50Py5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgIFwicmMtdmlydHVhbC1saXN0LWhvbGRlclwiXG4gICAgICAgICAgICAgIClbMF0gYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICAgICAgICBpZiAobGlzdEhvbGRlcikge1xuICAgICAgICAgICAgICAgIGxpc3RIb2xkZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIikpXG5cbiAgICAgICAgICAgICAgICBpZiAobGlzdEhvbGRlci5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgbGlzdEhvbGRlci5jaGlsZHJlblswXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInNjcm9sbFwiKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dDogZWwuZGF0YXNldC5odG1sIHx8IGVsLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2VhcmNoLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSwgMTUwKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zZWFyY2gudmFsdWUgPSBcIlwiXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGxhY2Vob2xkZXJTaG93OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSkge1xuICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2Uob3BlbilcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3QgPSAodmFsdWU6IFJlYWN0LlJlYWN0VGV4dCwgb3B0aW9uOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0LCB2YWx1ZTogdmFsdWVQcm9wIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3QgJiYgdmFsdWVQcm9wICE9PSB2YWx1ZSkge1xuICAgICAgb25TZWxlY3QodmFsdWUsIG9wdGlvbilcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoLnZhbHVlID0gXCJcIlxuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Quc2V0SW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZWxlY3Quc2V0SW5wdXRWYWx1ZShcIlwiKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVEcm9wZG93blJlbmRlciA9IChtZW51OiBKU1guRWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWVudSA9IG1lbnVcbiAgICBjb25zdCB7IHNlYXJjaGFibGUsIHNlYXJjaFBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNlYXJjaGFibGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VhcmNoYH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWFyY2h9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzZWFyY2hQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlU2VhcmNoS2V5RG93bn1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJldmVudFZpc2libGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5wcmV2ZW50VmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwic2VhcmNoXCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHttZW51fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2ggPSAoZT86IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgbGV0IHRhcmdldDogSFRNTElucHV0RWxlbWVudFxuICAgIGlmIChlKSB7XG4gICAgICB0YXJnZXQgPSBlLnRhcmdldFxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQgPSB0aGlzLnNlYXJjaFxuICAgIH1cbiAgICBjb25zdCB2YWwgPSB0YXJnZXQudmFsdWVcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyU2hvdywgc2VsZWN0SWQgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAodmFsICYmICFwbGFjZWhvbGRlclNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwbGFjZWhvbGRlclNob3c6IHRydWUgfSlcbiAgICB9XG4gICAgaWYgKCF2YWwgJiYgcGxhY2Vob2xkZXJTaG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGxhY2Vob2xkZXJTaG93OiBmYWxzZSB9KVxuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3QpIHtcbiAgICAgIGxldCBpZCA9IHNlbGVjdElkXG4gICAgICBpZiAoIXNlbGVjdElkKSB7XG4gICAgICAgIGlkID0gKHRhcmdldC5wYXJlbnROb2RlPy5uZXh0U2libGluZyBhcyBFbGVtZW50KT8uaWRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdElkOiBpZCB9KVxuICAgICAgfVxuICAgICAgY29uc3QgcmVhbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2FyaWEtb3ducz1cIiR7aWR9XCJdYCkgYXMgYW55XG4gICAgICBpZiAocmVhbElucHV0KSB7XG4gICAgICAgIGNvbnN0IGxhc3RWYWx1ZSA9IHJlYWxJbnB1dC52YWx1ZVxuICAgICAgICByZWFsSW5wdXQudmFsdWUgPSB2YWxcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoXCJpbnB1dFwiLCB7IGJ1YmJsZXM6IHRydWUgfSlcbiAgICAgICAgLy8gaGFjayBSZWFjdDE2IOWGhemDqOWumuS5ieS6hmRlc2NyaXB0b3Lmi6bmiKp2YWx1Ze+8jOatpOWkhOmHjee9rueKtuaAgVxuICAgICAgICBjb25zdCB0cmFja2VyID0gcmVhbElucHV0Ll92YWx1ZVRyYWNrZXJcbiAgICAgICAgaWYgKHRyYWNrZXIpIHtcbiAgICAgICAgICB0cmFja2VyLnNldFZhbHVlKGxhc3RWYWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZWFsSW5wdXQuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VhcmNoS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ICYmIHRoaXMuc2VsZWN0Lm9uSW5wdXRLZXlEb3duKSB7XG4gICAgICB0aGlzLnNlbGVjdC5vbklucHV0S2V5RG93bihlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcmV2ZW50VmlzaWJsZUNoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLmxvY2tlZCA9IHRydWVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9ja2VkID0gZmFsc2VcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pXG4gICAgfSwgMjAwKVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIG9wdGlvbnMsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHBsYWNlaG9sZGVyQ29sb3IsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICByaWdodEljb24sXG4gICAgICBzZWFyY2hhYmxlLFxuICAgICAgc2l6ZSxcbiAgICAgIHRoZW1lLFxuICAgICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgXCJvcGVuXCIsXG4gICAgICBcIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VsZWN0XCIsXG4gICAgICBcInNlYXJjaFBsYWNlaG9sZGVyXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHtcbiAgICAgIG9wZW46IG9wZW5TdGF0ZSxcbiAgICAgIHBsYWNlaG9sZGVyU2hvdyxcbiAgICAgIHBsYWNlaG9sZGVyVGV4dCxcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAvLyBvcGVuU3RhdGUg5Y+v6IO95pivIHVuZGVmaW5lZCBvciBudWxsXG4gICAgY29uc3Qgb3BlblByb3BzOiB7IG9wZW4/OiBib29sZWFuOyB2YWx1ZT86IFJlYWN0LlJlYWN0Tm9kZSB8IG51bGwgfSA9IHt9XG4gICAgaWYgKHR5cGVvZiBvcGVuU3RhdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBvcGVuUHJvcHMub3BlbiA9IG9wZW5TdGF0ZVxuICAgIH1cbiAgICBpZiAodmFsdWVTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgb3BlblByb3BzLnZhbHVlID1cbiAgICAgICAgdmFsdWVQcm9wID09PSBcIlwiID8gKFxuICAgICAgICAgIHBsYWNlaG9sZGVyQ29sb3IgPyAoXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogcGxhY2Vob2xkZXJDb2xvciB9fT57cGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBwbGFjZWhvbGRlclxuICAgICAgICAgIClcbiAgICAgICAgKSA6IChcbiAgICAgICAgICB2YWx1ZVN0YXRlXG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0pID0+IChcbiAgICAgICAgICA8UmNTZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBgJHtwcmVmaXh9LXNlbGVjdGAsXG4gICAgICAgICAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1saWdodGBdOiB0aGVtZSA9PT0gXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXNlbGVjdF9wbGFjZWhvbGRlclNob3dgXTogcGxhY2Vob2xkZXJTaG93LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgZGF0YS12YWx1ZT17dmFsdWVTdGF0ZSB8fCBwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uPXtudWxsfVxuICAgICAgICAgICAgZHJvcGRvd25BbGlnbj17XG4gICAgICAgICAgICAgIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50IHx8IFwiYm90dG9tTGVmdFwiXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9e2BhZHVpLXNlbGVjdC1kcm9wZG93bi0ke3NpemV9ICR7XG4gICAgICAgICAgICAgIHNlYXJjaGFibGUgPyBcImFkdWktc2VsZWN0LWRyb3Bkb3duLXNlYXJjaGFibGVcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgZHJvcGRvd25SZW5kZXI9e3RoaXMuaGFuZGxlRHJvcGRvd25SZW5kZXJ9XG4gICAgICAgICAgICBpbnB1dEljb249e1xuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtwbGFjZWhvbGRlclNob3cgJiZcbiAgICAgICAgICAgICAgICAgICh0eXBlb2YgKHBsYWNlaG9sZGVyVGV4dCB8fCBwbGFjZWhvbGRlciB8fCBcIlwiKSA9PT1cbiAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGxhY2Vob2xkZXItdGV4dGB9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHBsYWNlaG9sZGVyQ29sb3IgfX1cbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgJHtwbGFjZWhvbGRlclRleHQgfHwgcGxhY2Vob2xkZXIgfHwgXCJcIn1gLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyLXRleHRgfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBwbGFjZWhvbGRlckNvbG9yIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7cGxhY2Vob2xkZXJUZXh0IHx8IHBsYWNlaG9sZGVyIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIGljb249e3JpZ2h0SWNvbiB8fCBcInRyaWFuZ2xlLWRvd25cIn1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tZ3JheS04MDApXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpc3RIZWlnaHQ9ezI1MH1cbiAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD1cIuaXoOWMuemFjee7k+aenFwiXG4gICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17dGhpcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxuICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgICAgICBvcHRpb25MYWJlbFByb3A9e29wdGlvbnMgPyBcImxhYmVsXCIgOiBcImNoaWxkcmVuXCJ9XG4gICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPXtvcHRpb25zID8gXCJsYWJlbFwiIDogXCJjaGlsZHJlblwifVxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDb2xvciA/IChcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogcGxhY2Vob2xkZXJDb2xvciB9fT57cGxhY2Vob2xkZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZWZpeENscz1cImFkdWktc2VsZWN0XCJcbiAgICAgICAgICAgIC8vIOW8gOWQryBzaG93U2VhcmNoIOaJjeWPr+iDvSBoYWNrIOW8j+WcsOinpuWPkSBpbnB1dCBjaGFuZ2Ug5LqL5Lu2XG4gICAgICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVNlbGVjdH1cbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic2xpZGUtdXBcIlxuICAgICAgICAgICAgey4uLm9wZW5Qcm9wc31cbiAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iXX0=