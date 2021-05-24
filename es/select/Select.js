function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import RcSelect from "rc-select";
import OptGroup from "./OptGroup";
import Option from "./Option";
import omit from "../_util/omit";
import Icon from "../icon";
import { ConfigContext } from "../config-provider";
import getPlacements from "../tooltip/placements";
import "./style";

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
        }), React.createElement(Icon, {
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

        var realInput = document.querySelector(".adui-select-selection-search [aria-owns=\"".concat(id, "\"]"));

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

      var restProps = omit(otherProps, ["defaultValue", "open", "onDropdownVisibleChange", "onSelect", "searchPlaceholder"]);
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

      return React.createElement(ConfigContext.Consumer, null, function (_ref) {
        var _classNames;

        var getPopupContainerContext = _ref.getPopupContainer;
        return React.createElement(RcSelect, _extends({
          className: classNames(className, "".concat(prefix, "-select"), "".concat(prefix, "-").concat(size), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-light"), theme === "light"), _defineProperty(_classNames, "".concat(prefix, "-select_placeholderShow"), placeholderShow), _classNames)),
          "data-value": valueState || placeholder,
          menuItemSelectedIcon: null,
          dropdownAlign: getPlacements({
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
          }, placeholderText || placeholder || "")), React.createElement(Icon, {
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
Select.Option = Option;
Select.OptGroup = OptGroup;
Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dropdownMatchSelectWidth: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  onDropdownVisibleChange: PropTypes.func,
  onSelect: PropTypes.func,
  open: PropTypes.bool,
  options: PropTypes.array,
  placeholder: PropTypes.any,
  placeholderColor: PropTypes.string,
  placement: PropTypes.oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  rightIcon: PropTypes.any,
  searchPlaceholder: PropTypes.string,
  searchable: PropTypes.bool,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  theme: PropTypes.oneOf([null, "light"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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

export default Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJjbGFzc05hbWVzIiwiUmNTZWxlY3QiLCJPcHRHcm91cCIsIk9wdGlvbiIsIm9taXQiLCJJY29uIiwiQ29uZmlnQ29udGV4dCIsImdldFBsYWNlbWVudHMiLCJub29wIiwicHJlZml4IiwiU2VsZWN0IiwicHJvcHMiLCJsb2NrZWQiLCJzZWxlY3QiLCJzZWFyY2giLCJtZW51Iiwic2F2ZVNlbGVjdCIsIm5vZGUiLCJzYXZlU2VhcmNoIiwib25Ecm9wZG93blZpc2libGVDaGFuZ2UiLCJvcGVuIiwib3BlblByb3AiLCJzdGF0ZSIsInZhbHVlIiwic2VsZWN0SWQiLCJzZXRTdGF0ZSIsInByZXZlbnRWaXNpYmxlQ2hhbmdlIiwic2V0VGltZW91dCIsImlkIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwicGFyZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoaWxkcmVuIiwibGlzdEhvbGRlciIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInBsYWNlaG9sZGVyVGV4dCIsImRhdGFzZXQiLCJodG1sIiwiaW5uZXJIVE1MIiwiZm9jdXMiLCJwbGFjZWhvbGRlclNob3ciLCJvblNlbGVjdCIsIm9wdGlvbiIsInZhbHVlUHJvcCIsInNldElucHV0VmFsdWUiLCJoYW5kbGVEcm9wZG93blJlbmRlciIsInNlYXJjaGFibGUiLCJzZWFyY2hQbGFjZWhvbGRlciIsImhhbmRsZVNlYXJjaCIsImhhbmRsZVNlYXJjaEtleURvd24iLCJlIiwidGFyZ2V0IiwidmFsIiwicmVhbElucHV0IiwicXVlcnlTZWxlY3RvciIsImxhc3RWYWx1ZSIsImV2ZW50IiwiYnViYmxlcyIsInRyYWNrZXIiLCJfdmFsdWVUcmFja2VyIiwic2V0VmFsdWUiLCJvbklucHV0S2V5RG93biIsImRlZmF1bHRPcGVuIiwiZGVmYXVsdFZhbHVlIiwidmFsdWVTdGF0ZSIsInVuZGVmaW5lZCIsIm9wZW5TdGF0ZSIsImNsYXNzTmFtZSIsImdldFBvcHVwQ29udGFpbmVyIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwicGxhY2Vob2xkZXJDb2xvciIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNpemUiLCJ0aGVtZSIsIm90aGVyUHJvcHMiLCJyZXN0UHJvcHMiLCJvcGVuUHJvcHMiLCJjb2xvciIsImdldFBvcHVwQ29udGFpbmVyQ29udGV4dCIsImFsaWduRWRnZSIsIl9faHRtbCIsIkNvbXBvbmVudCIsInR5cGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoIiwiZnVuYyIsImFycmF5IiwiYW55Iiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixXQUFyQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsWUFBckI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFVBQW5CO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixlQUFqQjtBQUNBLE9BQU9DLElBQVAsTUFBZ0MsU0FBaEM7QUFDQSxTQUFTQyxhQUFULFFBQThCLG9CQUE5QjtBQUVBLE9BQU9DLGFBQVAsTUFBMEIsdUJBQTFCO0FBQ0EsT0FBTyxTQUFQOztBQVNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsYUFBZjs7SUE4R01DLE07Ozs7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S0FoQjZCO0FBaUJ6QzRCLEVBQUFBLElBQUksRUFBRSxPQWpCbUM7QUFrQnpDQyxFQUFBQSxLQUFLLEVBQUUsSUFsQmtDO0FBbUJ6Q3pELEVBQUFBLEtBQUssRUFBRTtBQW5Ca0MsQzs7QUFuR3ZDYixNLENBeUhVMkYsd0IsR0FBMkIsaUJBQW1DO0FBQUEsTUFBaENqRixJQUFnQyxTQUFoQ0EsSUFBZ0M7QUFBQSxNQUExQkcsS0FBMEIsU0FBMUJBLEtBQTBCO0FBQzFFLE1BQU0rRSxRQUFzQixHQUFHLEVBQS9COztBQUNBLE1BQUlsRixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQmtGLElBQUFBLFFBQVEsQ0FBQ2xGLElBQVQsR0FBZ0JBLElBQWhCO0FBQ0Q7O0FBQ0QsTUFBSUcsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsUUFBSUEsS0FBSyxLQUFLLEVBQWQsRUFBa0I7QUFDaEIrRSxNQUFBQSxRQUFRLENBQUMvRSxLQUFULEdBQWlCK0MsU0FBakI7QUFDRCxLQUZELE1BRU87QUFDTGdDLE1BQUFBLFFBQVEsQ0FBQy9FLEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPZ0YsTUFBTSxDQUFDQyxJQUFQLENBQVlGLFFBQVosRUFBc0JHLE1BQXRCLEdBQStCLENBQS9CLEdBQW1DSCxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O0FBNlVILGVBQWU1RixNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRhbmdlciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBSY1NlbGVjdCBmcm9tIFwicmMtc2VsZWN0XCJcbmltcG9ydCBPcHRHcm91cCBmcm9tIFwiLi9PcHRHcm91cFwiXG5pbXBvcnQgT3B0aW9uIGZyb20gXCIuL09wdGlvblwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgSWNvbiwgeyBJY29uTmFtZXMgfSBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IGdldFBsYWNlbWVudHMgZnJvbSBcIi4uL3Rvb2x0aXAvcGxhY2VtZW50c1wiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuLyoqXG4gKiBTZWxlY3Qg5bCB6KOF5LqOIHJjLXNlbGVjdDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9zZWxlY3RcbiAqIHJjLXNlbGVjdCDmnKzouqsgcHJvcHMg6Z2e5bi46Z2e5bi45aSa44CC6ICM5aaCIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIOi/meagt+eahCBwcm9wIOeUmuiHs+S4jeWcqOaWh+aho+S4re+8m1xuICog6LCD55SoIHJjLXNlbGVjdCDnmoTlhoXnva7mlrnms5XvvIxTZWxlY3Qg5a6e546w5LqG5Yqf6IO955qE5YaN5bCB6KOF77yM5aaC5YaF5bWM5pCc57Si5L6d6Z2g55qE5pivIHRoaXMuc2VsZWN0Lm9uSW5wdXRDaGFuZ2XvvJtcbiAqIHJjLXNlbGVjdCDku43nhLbmnInorrjlpJrlgLzlvpflho3lsIHoo4Xlkoznu6fnu63lrabkuaDnmoTkvZnlnLDvvIwqKuacquadpeeahOWPr+e7tOaKpOepuumXtOaYr+mdnuW4uOWkp+eahCoq44CCXG4gKi9cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBwcmVmaXggPSBcImFkdWktc2VsZWN0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0IHtcbiAgZm9yY2VQb3B1cEFsaWduPzogKCkgPT4gdm9pZFxuICBnZXRSb290RG9tTm9kZT86ICgpID0+IEhUTUxFbGVtZW50XG4gIG9uSW5wdXRDaGFuZ2U/OiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbiAgb25JbnB1dEtleURvd24/OiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxuICBzZXRJbnB1dFZhbHVlPzogKHZhbHVlPzogc3RyaW5nKSA9PiB2b2lkXG4gIGdldFBvcHVwRE9NTm9kZTogKCkgPT4gSFRNTEVsZW1lbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDlhoXpg6jpqbHliqjvvJrmmK/lkKblsZXlvIBcbiAgICovXG4gIGRlZmF1bHRPcGVuPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOWGhemDqOmpseWKqO+8muW9k+WJjemAieS4remhueeahOWAvFxuICAgKi9cbiAgZGVmYXVsdFZhbHVlPzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5ZKM6YCJ5oup5Zmo5ZCM5a69XG4gICAqL1xuICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIC8qKlxuICAgKiDkuIvmi4nlsZXnpLrlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mmJvb2xcbiAgICovXG4gIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPzogKG9wZW46IGJvb2xlYW4pID0+IHZvaWRcbiAgLyoqXG4gICAqIOmAieaLqeaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaKHZhbHVlLCBvcHRpb24pXG4gICAqL1xuICBvblNlbGVjdD86ICh2YWx1ZTogUmVhY3QuUmVhY3RUZXh0LCBvcHRpb246IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB2b2lkXG4gIC8qKlxuICAgKiDlpJbpg6jmjqfliLbvvJrmmK/lkKblsZXlvIBcbiAgICovXG4gIG9wZW4/OiBudWxsIHwgYm9vbGVhblxuICAvKipcbiAgICog5Y+v55u05o6l5Lyg5YWlIG9wdGlvbnPvvIzmm7/ku6PmiYvliqjmnoTpgKAgY2hpbGRyZW4ganN4IOeahOaWueW8j++8jOmcgOS8oOWFpeavj+mhueeahCBsYWJlbCDlkowgdmFsdWVcbiAgICovXG4gIG9wdGlvbnM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuXG4gICAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZVxuICAgIHZhbHVlOiBSZWFjdC5SZWFjdFRleHRcbiAgfVtdXG4gIC8qKlxuICAgKiDpgInmi6nmoYbpu5jorqTmloflrZdcbiAgICovXG4gIHBsYWNlaG9sZGVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDpgInmi6nmoYbpu5jorqTmloflrZfnmoTpopzoibJcbiAgICovXG4gIHBsYWNlaG9sZGVyQ29sb3I/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9riBwbGFjZW1lbnRcbiAgICovXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICAvKipcbiAgICog6K6+572u5Y+z5Zu+5qCHXG4gICAqL1xuICByaWdodEljb24/OiBJY29uTmFtZXNcbiAgLyoqXG4gICAqIOaQnOe0ouahhum7mOiupOaWh+Wtl1xuICAgKi9cbiAgc2VhcmNoYWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgeWGheW1jOaQnOe0olxuICAgKi9cbiAgc2VhcmNoUGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuO+8jOi3n+edgCBidXR0b24g6LWwXG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICAvKipcbiAgICog5aSW6YOo5o6n5Yi277ya5b2T5YmN6YCJ5Lit6aG555qE5YC8XG4gICAqL1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0U3RhdGUge1xuICBvcGVuPzogYm9vbGVhblxuICBwbGFjZWhvbGRlclNob3c/OiBib29sZWFuXG4gIHBsYWNlaG9sZGVyVGV4dD86IHN0cmluZ1xuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgc2VsZWN0SWQ/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiDpgInmi6nlmajnlKjkuo7pgInmi6nmn5DpobnlhoXlrrnjgIJcbiAqIOmAieaLqeWZqOWvueavlOWNlemAiSBSYWRpbyDnmoTkvJjlir/mmK/vvIzlvZPpgInpobnov4flpJrml7bvvIzpgInmi6nlmajlj6/lr7nlhoXlrrnmlLbotbfvvIzlubbmm7TlhbPms6jkuo7lt7LpgInpobnjgIJcbiAqIOmAmuW4uO+8jOW9k+eUqOaIt+iDveWkn+mAmui/h+W3sumAiemhue+8jOi9u+aYk+W+l+efpeWFtuS9memAiemhueeahOinhOW+i+aXtu+8iOWmguW5tOS7veOAgeWfjuW4guetie+8ie+8jOmAieaLqeWZqCBTZWxlY3Qg5piv5q+U6L6D5aW955qE6YCJ5oup44CCXG4gKi9cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU2VsZWN0UHJvcHMsIElTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHR5cGUgPSBcIlNlbGVjdFwiXG5cbiAgcHVibGljIHN0YXRpYyBPcHRpb246IHR5cGVvZiBPcHRpb24gPSBPcHRpb25cblxuICBwdWJsaWMgc3RhdGljIE9wdEdyb3VwOiB0eXBlb2YgT3B0R3JvdXAgPSBPcHRHcm91cFxuXG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm5bGV5byAXG4gICAgICovXG4gICAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muW9k+WJjemAieS4remhueeahOWAvFxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIC8qKlxuICAgICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuvVxuICAgICAqL1xuICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICAgKi9cbiAgICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5LiL5ouJ5bGV56S65Y+R55Sf5Y+Y5YyW5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJpib29sXG4gICAgICovXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmAieaLqeaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaKHZhbHVlLCBvcHRpb24pXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8muaYr+WQpuWxleW8gFxuICAgICAqL1xuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWPr+ebtOaOpeS8oOWFpSBvcHRpb25z77yM5pu/5Luj5omL5Yqo5p6E6YCgIGNoaWxkcmVuIGpzeCDnmoTmlrnlvI/vvIzpnIDkvKDlhaXmr4/pobnnmoQgbGFiZWwg5ZKMIHZhbHVlXG4gICAgICovXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOmAieaLqeahhum7mOiupOaWh+Wtl1xuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuYW55LFxuICAgIC8qKlxuICAgICAqIOmAieaLqeahhum7mOiupOaWh+Wtl+eahOminOiJslxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572uIHBsYWNlbWVudFxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwidG9wXCIsXG4gICAgICBcImxlZnRcIixcbiAgICAgIFwicmlnaHRcIixcbiAgICAgIFwiYm90dG9tXCIsXG4gICAgICBcInRvcExlZnRcIixcbiAgICAgIFwidG9wUmlnaHRcIixcbiAgICAgIFwiYm90dG9tTGVmdFwiLFxuICAgICAgXCJib3R0b21SaWdodFwiLFxuICAgICAgXCJsZWZ0VG9wXCIsXG4gICAgICBcImxlZnRCb3R0b21cIixcbiAgICAgIFwicmlnaHRUb3BcIixcbiAgICAgIFwicmlnaHRCb3R0b21cIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7lj7Plm77moIdcbiAgICAgKi9cbiAgICByaWdodEljb246IFByb3BUeXBlcy5hbnksXG4gICAgLyoqXG4gICAgICog5pCc57Si5qGG6buY6K6k5paH5a2XXG4gICAgICovXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5piv5ZCm6ZyA6KaB5YaF5bWM5pCc57SiXG4gICAgICovXG4gICAgc2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6K6+572u5bC65a+477yM6Lef552AIGJ1dHRvbiDotbBcbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruS4u+mimFxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGlnaHRcIl0pLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8muW9k+WJjemAieS4remhueeahOWAvFxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVNlbGVjdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRPcGVuOiBudWxsLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRydWUsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgb3BlbjogbnVsbCxcbiAgICBvcHRpb25zOiB1bmRlZmluZWQsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcGxhY2Vob2xkZXJDb2xvcjogdW5kZWZpbmVkLFxuICAgIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gICAgcmlnaHRJY29uOiBcInRyaWFuZ2xlLWRvd25cIixcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogXCLmkJzntKJcIixcbiAgICBzZWFyY2hhYmxlOiBmYWxzZSxcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdGhlbWU6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7IG9wZW4sIHZhbHVlIH06IElTZWxlY3RQcm9wcykgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBJU2VsZWN0U3RhdGUgPSB7fVxuICAgIGlmIChvcGVuICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5vcGVuID0gb3BlblxuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBuZXdTdGF0ZS52YWx1ZSA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RhdGUudmFsdWUgPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3U3RhdGUpLmxlbmd0aCA+IDAgPyBuZXdTdGF0ZSA6IG51bGxcbiAgfVxuXG4gIHB1YmxpYyBsb2NrZWQgPSBmYWxzZVxuXG4gIHB1YmxpYyBzZWxlY3Q6IElTZWxlY3RcblxuICBwdWJsaWMgc2VhcmNoOiBIVE1MSW5wdXRFbGVtZW50XG5cbiAgcHVibGljIG1lbnU6IEpTWC5FbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElTZWxlY3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgZGVmYXVsdE9wZW4sIGRlZmF1bHRWYWx1ZSwgb3BlbiwgdmFsdWUgfSA9IHByb3BzXG5cbiAgICBsZXQgdmFsdWVTdGF0ZVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIHZhbHVlU3RhdGUgPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlU3RhdGUgPSB2YWx1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZVN0YXRlID0gZGVmYXVsdFZhbHVlXG4gICAgfVxuXG4gICAgbGV0IG9wZW5TdGF0ZVxuICAgIGlmIChvcGVuICE9PSBudWxsKSB7XG4gICAgICBvcGVuU3RhdGUgPSBvcGVuXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0T3BlbiAhPT0gbnVsbCkge1xuICAgICAgb3BlblN0YXRlID0gZGVmYXVsdE9wZW5cbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IG9wZW5TdGF0ZSxcbiAgICAgIHBsYWNlaG9sZGVyU2hvdzogZmFsc2UsXG4gICAgICBzZWxlY3RJZDogXCJcIixcbiAgICAgIHBsYWNlaG9sZGVyVGV4dDogXCJcIixcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYXZlU2VsZWN0ID0gKG5vZGU6IElTZWxlY3QpID0+IHtcbiAgICB0aGlzLnNlbGVjdCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlU2VhcmNoID0gKG5vZGU6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnNlYXJjaCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSA9IChvcGVuOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgeyBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSwgb3Blbjogb3BlblByb3AgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlLCBzZWxlY3RJZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKHRoaXMubG9ja2VkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKG9wZW5Qcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbiB9KVxuICAgIH1cbiAgICBpZiAob3Blbikge1xuICAgICAgdGhpcy5wcmV2ZW50VmlzaWJsZUNoYW5nZSgpXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBpZCA9IHNlbGVjdElkXG4gICAgICAgICAgICBpZiAoIXNlbGVjdElkKSB7XG4gICAgICAgICAgICAgIGlkID0gKHRoaXMuc2VhcmNoLnBhcmVudE5vZGU/Lm5leHRTaWJsaW5nIGFzIEVsZW1lbnQpPy5pZFxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0SWQ6IGlkIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpPy5uZXh0U2libGluZyBhcyBFbGVtZW50XG4gICAgICAgICAgICAgIGNvbnN0IGVsID0gcGFyZW50Py5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgIFwiYWR1aS1zZWxlY3QtaXRlbS1vcHRpb24tc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICApWzBdPy5jaGlsZHJlblswXSBhcyBIVE1MRWxlbWVudFxuXG4gICAgICAgICAgICAgIGNvbnN0IGxpc3RIb2xkZXIgPSBwYXJlbnQ/LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgXCJyYy12aXJ0dWFsLWxpc3QtaG9sZGVyXCJcbiAgICAgICAgICAgICAgKVswXSBhcyBIVE1MRWxlbWVudFxuXG4gICAgICAgICAgICAgIGlmIChsaXN0SG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgbGlzdEhvbGRlci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInNjcm9sbFwiKSlcblxuICAgICAgICAgICAgICAgIGlmIChsaXN0SG9sZGVyLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICAgICAgICBsaXN0SG9sZGVyLmNoaWxkcmVuWzBdLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2Nyb2xsXCIpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0OiBlbC5kYXRhc2V0Lmh0bWwgfHwgZWwuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZWFyY2guZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9LCAxNTApXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaCkge1xuICAgICAgICB0aGlzLnNlYXJjaC52YWx1ZSA9IFwiXCJcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwbGFjZWhvbGRlclNob3c6IGZhbHNlLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZShvcGVuKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdCA9ICh2YWx1ZTogUmVhY3QuUmVhY3RUZXh0LCBvcHRpb246IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3QsIHZhbHVlOiB2YWx1ZVByb3AgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvblNlbGVjdCAmJiB2YWx1ZVByb3AgIT09IHZhbHVlKSB7XG4gICAgICBvblNlbGVjdCh2YWx1ZSwgb3B0aW9uKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2gudmFsdWUgPSBcIlwiXG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdCAmJiB0aGlzLnNlbGVjdC5zZXRJbnB1dFZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdC5zZXRJbnB1dFZhbHVlKFwiXCIpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZURyb3Bkb3duUmVuZGVyID0gKG1lbnU6IEpTWC5FbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tZW51ID0gbWVudVxuICAgIGNvbnN0IHsgc2VhcmNoYWJsZSwgc2VhcmNoUGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2VhcmNoYWJsZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWFyY2hgfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVNlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3NlYXJjaFBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVTZWFyY2hLZXlEb3dufVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcmV2ZW50VmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLnByZXZlbnRWaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge21lbnV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbWVudVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlYXJjaCA9IChlPzogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBsZXQgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50XG4gICAgaWYgKGUpIHtcbiAgICAgIHRhcmdldCA9IGUudGFyZ2V0XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldCA9IHRoaXMuc2VhcmNoXG4gICAgfVxuICAgIGNvbnN0IHZhbCA9IHRhcmdldC52YWx1ZVxuICAgIGNvbnN0IHsgcGxhY2Vob2xkZXJTaG93LCBzZWxlY3RJZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICh2YWwgJiYgIXBsYWNlaG9sZGVyU2hvdykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYWNlaG9sZGVyU2hvdzogdHJ1ZSB9KVxuICAgIH1cbiAgICBpZiAoIXZhbCAmJiBwbGFjZWhvbGRlclNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwbGFjZWhvbGRlclNob3c6IGZhbHNlIH0pXG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdCkge1xuICAgICAgbGV0IGlkID0gc2VsZWN0SWRcbiAgICAgIGlmICghc2VsZWN0SWQpIHtcbiAgICAgICAgaWQgPSAodGFyZ2V0LnBhcmVudE5vZGU/Lm5leHRTaWJsaW5nIGFzIEVsZW1lbnQpPy5pZFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0SWQ6IGlkIH0pXG4gICAgICB9XG4gICAgICBjb25zdCByZWFsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmFkdWktc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2ggW2FyaWEtb3ducz1cIiR7aWR9XCJdYFxuICAgICAgKSBhcyBhbnlcbiAgICAgIGlmIChyZWFsSW5wdXQpIHtcbiAgICAgICAgY29uc3QgbGFzdFZhbHVlID0gcmVhbElucHV0LnZhbHVlXG4gICAgICAgIHJlYWxJbnB1dC52YWx1ZSA9IHZhbFxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChcImlucHV0XCIsIHsgYnViYmxlczogdHJ1ZSB9KVxuICAgICAgICAvLyBoYWNrIFJlYWN0MTYg5YaF6YOo5a6a5LmJ5LqGZGVzY3JpcHRvcuaLpuaIqnZhbHVl77yM5q2k5aSE6YeN572u54q25oCBXG4gICAgICAgIGNvbnN0IHRyYWNrZXIgPSByZWFsSW5wdXQuX3ZhbHVlVHJhY2tlclxuICAgICAgICBpZiAodHJhY2tlcikge1xuICAgICAgICAgIHRyYWNrZXIuc2V0VmFsdWUobGFzdFZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJlYWxJbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2hLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAodGhpcy5zZWxlY3QgJiYgdGhpcy5zZWxlY3Qub25JbnB1dEtleURvd24pIHtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uSW5wdXRLZXlEb3duKGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHByZXZlbnRWaXNpYmxlQ2hhbmdlID0gKCkgPT4ge1xuICAgIHRoaXMubG9ja2VkID0gdHJ1ZVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSlcbiAgICB9LCAyMDApXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcGxhY2Vob2xkZXJDb2xvcixcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHJpZ2h0SWNvbixcbiAgICAgIHNlYXJjaGFibGUsXG4gICAgICBzaXplLFxuICAgICAgdGhlbWUsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICBcIm9wZW5cIixcbiAgICAgIFwib25Ecm9wZG93blZpc2libGVDaGFuZ2VcIixcbiAgICAgIFwib25TZWxlY3RcIixcbiAgICAgIFwic2VhcmNoUGxhY2Vob2xkZXJcIixcbiAgICBdKVxuXG4gICAgY29uc3Qge1xuICAgICAgb3Blbjogb3BlblN0YXRlLFxuICAgICAgcGxhY2Vob2xkZXJTaG93LFxuICAgICAgcGxhY2Vob2xkZXJUZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIC8vIG9wZW5TdGF0ZSDlj6/og73mmK8gdW5kZWZpbmVkIG9yIG51bGxcbiAgICBjb25zdCBvcGVuUHJvcHM6IHsgb3Blbj86IGJvb2xlYW47IHZhbHVlPzogUmVhY3QuUmVhY3ROb2RlIHwgbnVsbCB9ID0ge31cbiAgICBpZiAodHlwZW9mIG9wZW5TdGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIG9wZW5Qcm9wcy5vcGVuID0gb3BlblN0YXRlXG4gICAgfVxuICAgIGlmICh2YWx1ZVN0YXRlICE9PSBudWxsKSB7XG4gICAgICBvcGVuUHJvcHMudmFsdWUgPVxuICAgICAgICB2YWx1ZVByb3AgPT09IFwiXCIgPyAoXG4gICAgICAgICAgcGxhY2Vob2xkZXJDb2xvciA/IChcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBwbGFjZWhvbGRlckNvbG9yIH19PntwbGFjZWhvbGRlcn08L3NwYW4+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICAgICAgKVxuICAgICAgICApIDogKFxuICAgICAgICAgIHZhbHVlU3RhdGVcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSkgPT4gKFxuICAgICAgICAgIDxSY1NlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgIGAke3ByZWZpeH0tc2VsZWN0YCxcbiAgICAgICAgICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWxpZ2h0YF06IHRoZW1lID09PSBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tc2VsZWN0X3BsYWNlaG9sZGVyU2hvd2BdOiBwbGFjZWhvbGRlclNob3csXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBkYXRhLXZhbHVlPXt2YWx1ZVN0YXRlIHx8IHBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb249e251bGx9XG4gICAgICAgICAgICBkcm9wZG93bkFsaWduPXtcbiAgICAgICAgICAgICAgZ2V0UGxhY2VtZW50cyh7IGFsaWduRWRnZTogdHJ1ZSB9KVtwbGFjZW1lbnQgfHwgXCJib3R0b21MZWZ0XCJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17YGFkdWktc2VsZWN0LWRyb3Bkb3duLSR7c2l6ZX0gJHtcbiAgICAgICAgICAgICAgc2VhcmNoYWJsZSA/IFwiYWR1aS1zZWxlY3QtZHJvcGRvd24tc2VhcmNoYWJsZVwiIDogXCJcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBkcm9wZG93blJlbmRlcj17dGhpcy5oYW5kbGVEcm9wZG93blJlbmRlcn1cbiAgICAgICAgICAgIGlucHV0SWNvbj17XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge3BsYWNlaG9sZGVyU2hvdyAmJlxuICAgICAgICAgICAgICAgICAgKHR5cGVvZiAocGxhY2Vob2xkZXJUZXh0IHx8IHBsYWNlaG9sZGVyIHx8IFwiXCIpID09PVxuICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wbGFjZWhvbGRlci10ZXh0YH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogcGxhY2Vob2xkZXJDb2xvciB9fVxuICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGAke3BsYWNlaG9sZGVyVGV4dCB8fCBwbGFjZWhvbGRlciB8fCBcIlwifWAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGxhY2Vob2xkZXItdGV4dGB9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHBsYWNlaG9sZGVyQ29sb3IgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtwbGFjZWhvbGRlclRleHQgfHwgcGxhY2Vob2xkZXIgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17cmlnaHRJY29uIHx8IFwidHJpYW5nbGUtZG93blwifVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1ncmF5LTgwMClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlzdEhlaWdodD17MjUwfVxuICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PVwi5peg5Yy56YWN57uT5p6cXCJcbiAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXt0aGlzLm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3R9XG4gICAgICAgICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb249e2ZhbHNlfVxuICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgICAgIG9wdGlvbkxhYmVsUHJvcD17b3B0aW9ucyA/IFwibGFiZWxcIiA6IFwiY2hpbGRyZW5cIn1cbiAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9e29wdGlvbnMgPyBcImxhYmVsXCIgOiBcImNoaWxkcmVuXCJ9XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlckNvbG9yID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBwbGFjZWhvbGRlckNvbG9yIH19PntwbGFjZWhvbGRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlZml4Q2xzPVwiYWR1aS1zZWxlY3RcIlxuICAgICAgICAgICAgLy8g5byA5ZCvIHNob3dTZWFyY2gg5omN5Y+v6IO9IGhhY2sg5byP5Zyw6Kem5Y+RIGlucHV0IGNoYW5nZSDkuovku7ZcbiAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlU2VsZWN0fVxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJzbGlkZS11cFwiXG4gICAgICAgICAgICB7Li4ub3BlblByb3BzfVxuICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcbiJdfQ==