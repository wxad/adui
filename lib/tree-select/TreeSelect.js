"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcTreeSelect = _interopRequireWildcard(require("rc-tree-select"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _classnames = _interopRequireDefault(require("classnames"));

var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

var _omit = _interopRequireDefault(require("../_util/omit"));

var _configProvider = require("../config-provider");

var _icon = _interopRequireDefault(require("../icon"));

var _popover = _interopRequireDefault(require("../popover"));

var _spinner = _interopRequireDefault(require("../spinner"));

var _placements = _interopRequireDefault(require("../tooltip/placements"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = "adui-tree-select";

var noop = function noop() {};

var strategies = {
  "show-all": _rcTreeSelect.SHOW_ALL,
  "show-child": _rcTreeSelect.SHOW_CHILD,
  "show-parent": _rcTreeSelect.SHOW_PARENT
};

var convertChildrenToData = function convertChildrenToData(nodes) {
  return (0, _toArray["default"])(nodes).map(function (node) {
    if (!React.isValidElement(node) || !node.type) {
      return null;
    }

    var _ref = node,
        key = _ref.key,
        _ref$props = _ref.props,
        children = _ref$props.children,
        value = _ref$props.value,
        popover = _ref$props.popover,
        popoverProps = _ref$props.popoverProps,
        title = _ref$props.title,
        restProps = _objectWithoutProperties(_ref$props, ["children", "value", "popover", "popoverProps", "title"]);

    var data = _objectSpread({
      key: key,
      value: value,
      dataTitle: title,
      title: popover ? React.createElement(React.Fragment, null, React.createElement("div", {
        className: "adui-tree-select-pop-trigger"
      }, title), React.createElement(_popover["default"], _extends({
        popup: popover,
        placement: "right"
      }, popoverProps), React.createElement("div", {
        className: "adui-tree-select-pop-trigger-placeholder"
      }))) : title
    }, restProps);

    var childData = convertChildrenToData(children);

    if (childData.length) {
      data.children = childData;
    }

    return data;
  }).filter(function (data) {
    return data;
  });
};

var TreeSelect = function (_React$Component) {
  _inherits(TreeSelect, _React$Component);

  var _super = _createSuper(TreeSelect);

  function TreeSelect(props) {
    var _this;

    _classCallCheck(this, TreeSelect);

    _this = _super.call(this, props);
    _this.select = void 0;
    _this.wrapper = void 0;

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      return !(0, _shallowequal["default"])(_this.props, nextProps) || !(0, _shallowequal["default"])(_this.state, nextState);
    };

    _this.saveSelect = function (node) {
      _this.select = node;
    };

    _this.saveWrapper = function (node) {
      _this.wrapper = node;
    };

    _this.renderSwitcherIcon = function (_ref2) {
      var isLeaf = _ref2.isLeaf,
          loading = _ref2.loading;

      if (loading) {
        return React.createElement(_spinner["default"], {
          size: "mini",
          className: "adui-tree-select-switcher-icon"
        });
      }

      if (isLeaf) {
        return null;
      }

      return React.createElement(_icon["default"], {
        icon: "arrow-right",
        className: "adui-tree-select-switcher-icon"
      });
    };

    _this.handleChange = function (value) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          valueProp = _this$props.value;

      if (!disabled) {
        if (valueProp === null) {
          _this.setState({
            value: value
          });
        }

        if (onChange) {
          onChange(value);
        }
      }
    };

    _this.handleSearch = function (val) {
      var onSearch = _this.props.onSearch;

      if (onSearch) {
        onSearch(val);
      }
    };

    _this.filterTreeNode = function (input, treeNode) {
      var key = treeNode.key,
          title = treeNode.title,
          value = treeNode.value,
          dataTitle = treeNode.dataTitle;

      if (!key || !value) {
        return false;
      }

      return String(dataTitle || title).includes(input);
    };

    _this.getMaxTagCount = function () {
      var maxTagCount = _this.props.maxTagCount;
      var value = _this.state.value;

      if (!maxTagCount || !value || value.length <= maxTagCount) {
        return null;
      }

      return 0;
    };

    _this.getMaxTagPlaceholder = function (nodes) {
      if (!_this.select) {
        return null;
      }

      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          resultRender = _this$props2.resultRender,
          value = _this$props2.value;

      if (resultRender) {
        return resultRender(nodes);
      }

      var length = nodes.length;
      var placeholderText = React.createElement(React.Fragment, null, React.createElement("span", {
        style: {
          display: "inline-block",
          verticalAlign: "top"
        }
      }, nodes[0].label), React.createElement("span", {
        style: {
          display: "inline-block",
          verticalAlign: "top"
        }
      }, "...\u7B49 ", length, " \u4E2A"));
      return React.createElement(_popover["default"], {
        alignEdge: false,
        placement: "top",
        popup: React.createElement("div", {
          className: "adui-tree-select-max-popover-item-wrapper"
        }, nodes.map(function (_ref3, i) {
          var key = _ref3.key,
              disabled = _ref3.disabled,
              label = _ref3.label;
          return React.createElement("div", {
            className: "adui-tree-select-max-popover-item",
            key: key
          }, React.createElement("span", null, label), !disabled && React.createElement(_icon["default"], {
            icon: "cancel",
            onClick: function onClick() {
              var vals = nodes.map(function (o) {
                return o.value;
              });
              vals.splice(i, 1);

              if (value === null) {
                _this.setState({
                  value: vals
                });
              }

              if (onChange) {
                onChange(vals);
              }
            }
          }));
        })),
        popupClassName: "adui-tree-select-maxPopover"
      }, React.createElement("div", {
        className: "adui-tree-select-maxPlaceholder",
        role: "none",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, placeholderText, React.createElement(_icon["default"], {
        icon: "cancel",
        size: 14,
        onClick: function onClick() {
          if (value === null) {
            _this.setState({
              value: []
            });
          }

          if (onChange) {
            onChange([]);
          }
        }
      })));
    };

    _this.listenInputChange = function (e) {
      var value = e.target.value,
          keyCode = e.keyCode;

      if (keyCode === 8 && value === "") {
        e.stopPropagation();
      }
    };

    _this.componentDidMount = function () {
      var input = _this.wrapper.querySelector("input");

      var _this$props3 = _this.props,
          maxTagCount = _this$props3.maxTagCount,
          placeholder = _this$props3.placeholder,
          resultVisible = _this$props3.resultVisible;
      var value = _this.state.value;

      if (input) {
        input.addEventListener("keydown", _this.listenInputChange, false);
      }

      if (maxTagCount !== null && value) {
        _this.forceUpdate();
      }

      if (!resultVisible && _this.wrapper) {
        if (input) {
          input.placeholder = placeholder;
        }
      }
    };

    _this.componentDidUpdate = function () {
      var resultVisible = _this.props.resultVisible;

      if (!resultVisible) {
        window.dispatchEvent(new Event("resize"));
      }
    };

    var _value = props.value,
        defaultValue = props.defaultValue;
    var valueState = _value !== null ? _value : defaultValue;
    _this.state = {
      value: valueState
    };
    return _this;
  }

  _createClass(TreeSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          autoClearSearchValue = _this$props4.autoClearSearchValue,
          children = _this$props4.children,
          className = _this$props4.className,
          getPopupContainer = _this$props4.getPopupContainer,
          maxTagCount = _this$props4.maxTagCount,
          multiple = _this$props4.multiple,
          placement = _this$props4.placement,
          placeholder = _this$props4.placeholder,
          rightIcon = _this$props4.rightIcon,
          resultRender = _this$props4.resultRender,
          resultVisible = _this$props4.resultVisible,
          showCheckedStrategy = _this$props4.showCheckedStrategy,
          treeData = _this$props4.treeData,
          otherProps = _objectWithoutProperties(_this$props4, ["autoClearSearchValue", "children", "className", "getPopupContainer", "maxTagCount", "multiple", "placement", "placeholder", "rightIcon", "resultRender", "resultVisible", "showCheckedStrategy", "treeData"]);

      var restProps = (0, _omit["default"])(otherProps, ["onChange", "onSearch", "defaultValue", "value"]);
      var value = this.state.value;
      var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-wrapper"), _defineProperty({}, "".concat(prefix, "_resultHidden"), !resultVisible));
      var checkbox = multiple;

      if (multiple) {
        checkbox = React.createElement("div", null, React.createElement("svg", {
          width: "12",
          height: "10",
          className: "adui-tree-select-tree-checkbox-indeterminateSvg"
        }, React.createElement("rect", {
          x: "1",
          y: "4",
          width: "10",
          height: "2",
          rx: ".5",
          fill: "#fff",
          fillRule: "evenodd"
        })), React.createElement("svg", {
          width: "12",
          height: "10",
          className: "adui-tree-select-tree-checkbox-checkedSvg"
        }, React.createElement("path", {
          d: "M.618 5.827a.463.463 0 0 1-.02-.675l.804-.804a.52.52 0 0 1 .716-.01L4.75 6.75l4.922-5.625a.513.513 0 0 1 .707-.06l.742.62a.478.478 0 0 1 .044.687l-6.08 6.756a.506.506 0 0 1-.703.045L.618 5.827z",
          fillRule: "evenodd"
        })));
      }

      if (value !== null) {
        restProps.value = value;
      }

      if (maxTagCount !== null) {
        var count = this.getMaxTagCount();

        if (count !== null) {
          restProps.maxTagCount = count;
        }
      }

      if (resultRender) {
        restProps.maxTagCount = 0;
      }

      return React.createElement(_configProvider.ConfigContext.Consumer, null, function (_ref4) {
        var getPopupContainerContext = _ref4.getPopupContainer;
        return React.createElement("div", {
          className: (0, _classnames["default"])("adui-tree-select-wrapper", {
            "adui-tree-select-wrapper-maxTag": _this2.getMaxTagCount() !== null,
            "adui-tree-select-wrapper-resultRender": !!resultRender
          }),
          ref: _this2.saveWrapper
        }, React.createElement(_rcTreeSelect["default"], _extends({
          autoClearSearchValue: resultVisible ? autoClearSearchValue : false,
          className: classSet,
          dropdownClassName: "".concat(prefix, "-dropdown-").concat(multiple ? "multiple" : "single"),
          dropdownPopupAlign: placement && (0, _placements["default"])({
            alignEdge: true
          })[placement],
          filterTreeNode: _this2.filterTreeNode,
          getPopupContainer: getPopupContainer || getPopupContainerContext,
          inputIcon: React.createElement(_icon["default"], {
            icon: "triangle-down"
          }),
          maxTagPlaceholder: _this2.getMaxTagPlaceholder,
          notFoundContent: "\u65E0\u5339\u914D\u7ED3\u679C",
          onChange: _this2.handleChange,
          onSearch: _this2.handleSearch,
          placeholder: placeholder,
          prefixCls: "adui-tree-select",
          ref: _this2.saveSelect,
          removeIcon: React.createElement(_icon["default"], {
            icon: "cancel",
            interactive: true,
            size: 16
          }),
          showCheckedStrategy: showCheckedStrategy && strategies[showCheckedStrategy],
          showSearch: multiple,
          switcherIcon: _this2.renderSwitcherIcon,
          transitionName: "slide-up",
          treeCheckable: checkbox,
          treeNodeFilterProp: "title",
          listItemHeight: 36,
          listHeight: 280,
          treeData: treeData || convertChildrenToData(children)
        }, restProps), children), !!rightIcon && multiple && React.createElement(_icon["default"], {
          icon: rightIcon,
          className: "adui-tree-select-icon"
        }));
      });
    }
  }]);

  return TreeSelect;
}(React.Component);

TreeSelect.propTypes = {
  autoClearSearchValue: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array]),
  disabled: _propTypes["default"].bool,
  getPopupContainer: _propTypes["default"].func,
  maxTagCount: _propTypes["default"].number,
  multiple: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onSearch: _propTypes["default"].func,
  placement: _propTypes["default"].oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  placeholder: _propTypes["default"].string,
  resultRender: _propTypes["default"].func,
  resultVisible: _propTypes["default"].bool,
  rightIcon: _propTypes["default"].string,
  showCheckedStrategy: _propTypes["default"].oneOf(["show-all", "show-parent", "show-child"]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array])
};
TreeSelect.defaultProps = {
  autoClearSearchValue: false,
  className: undefined,
  defaultValue: null,
  disabled: false,
  getPopupContainer: null,
  maxTagCount: null,
  multiple: true,
  onChange: noop,
  onSearch: noop,
  placement: "bottomLeft",
  placeholder: "请选择",
  resultRender: null,
  resultVisible: true,
  rightIcon: "menu",
  showCheckedStrategy: "show-parent",
  value: null
};

TreeSelect.getDerivedStateFromProps = function (_ref5) {
  var value = _ref5.value;

  if (value !== null) {
    return {
      value: value
    };
  }

  return null;
};

TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
(0, _reactLifecyclesCompat.polyfill)(TreeSelect);
var _default = TreeSelect;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIm5vZGVzIiwibWFwIiwibm9kZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInRpdGxlIiwicmVzdFByb3BzIiwiZGF0YSIsImRhdGFUaXRsZSIsImNoaWxkRGF0YSIsImxlbmd0aCIsImZpbHRlciIsIlRyZWVTZWxlY3QiLCJzZWxlY3QiLCJ3cmFwcGVyIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsInNldFN0YXRlIiwiaGFuZGxlU2VhcmNoIiwidmFsIiwib25TZWFyY2giLCJmaWx0ZXJUcmVlTm9kZSIsImlucHV0IiwidHJlZU5vZGUiLCJTdHJpbmciLCJpbmNsdWRlcyIsImdldE1heFRhZ0NvdW50IiwibWF4VGFnQ291bnQiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsInJlc3VsdFJlbmRlciIsInBsYWNlaG9sZGVyVGV4dCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGFiZWwiLCJpIiwidmFscyIsIm8iLCJzcGxpY2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibGlzdGVuSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiY29tcG9uZW50RGlkTW91bnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZGVmYXVsdFZhbHVlIiwidmFsdWVTdGF0ZSIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiY2xhc3NOYW1lIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtdWx0aXBsZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJ0cmVlRGF0YSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJUcmVlTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsa0JBQWY7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQixjQUFZQyxzQkFESztBQUVqQixnQkFBY0Msd0JBRkc7QUFHakIsaUJBQWVDO0FBSEUsQ0FBbkI7O0FBdURBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUM1QyxTQUFPLHlCQUFRQSxLQUFSLEVBQ0pDLEdBREksQ0FDQSxVQUFDQyxJQUFELEVBQThCO0FBQ2pDLFFBQUksQ0FBQ0MsS0FBSyxDQUFDQyxjQUFOLENBQXFCRixJQUFyQixDQUFELElBQStCLENBQUNBLElBQUksQ0FBQ0csSUFBekMsRUFBK0M7QUFDN0MsYUFBTyxJQUFQO0FBQ0Q7O0FBSGdDLGVBTzdCSCxJQVA2QjtBQUFBLFFBSy9CSSxHQUwrQixRQUsvQkEsR0FMK0I7QUFBQSwwQkFNL0JDLEtBTitCO0FBQUEsUUFNdEJDLFFBTnNCLGNBTXRCQSxRQU5zQjtBQUFBLFFBTVpDLEtBTlksY0FNWkEsS0FOWTtBQUFBLFFBTUxDLE9BTkssY0FNTEEsT0FOSztBQUFBLFFBTUlDLFlBTkosY0FNSUEsWUFOSjtBQUFBLFFBTWtCQyxLQU5sQixjQU1rQkEsS0FObEI7QUFBQSxRQU00QkMsU0FONUI7O0FBWWpDLFFBQU1DLElBQUk7QUFDUlIsTUFBQUEsR0FBRyxFQUFIQSxHQURRO0FBRVJHLE1BQUFBLEtBQUssRUFBTEEsS0FGUTtBQUdSTSxNQUFBQSxTQUFTLEVBQUVILEtBSEg7QUFJUkEsTUFBQUEsS0FBSyxFQUFFRixPQUFPLEdBQ1osMENBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQStDRSxLQUEvQyxDQURGLEVBRUUsb0JBQUMsbUJBQUQ7QUFBUyxRQUFBLEtBQUssRUFBRUYsT0FBaEI7QUFBeUIsUUFBQSxTQUFTLEVBQUM7QUFBbkMsU0FBK0NDLFlBQS9DLEdBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFFBREYsQ0FGRixDQURZLEdBUVpDO0FBWk0sT0FjTEMsU0FkSyxDQUFWOztBQWlCQSxRQUFNRyxTQUFTLEdBQUdqQixxQkFBcUIsQ0FBQ1MsUUFBRCxDQUF2Qzs7QUFDQSxRQUFJUSxTQUFTLENBQUNDLE1BQWQsRUFBc0I7QUFDcEJILE1BQUFBLElBQUksQ0FBQ04sUUFBTCxHQUFnQlEsU0FBaEI7QUFDRDs7QUFFRCxXQUFPRixJQUFQO0FBQ0QsR0FwQ0ksRUFxQ0pJLE1BckNJLENBcUNHLFVBQUFKLElBQUk7QUFBQSxXQUFJQSxJQUFKO0FBQUEsR0FyQ1AsQ0FBUDtBQXNDRCxDQXZDRDs7SUE0Q01LLFU7Ozs7O0FBMEhKLHNCQUFZWixLQUFaLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ25DLDhCQUFNQSxLQUFOO0FBRG1DLFVBSjlCYSxNQUk4QjtBQUFBLFVBRjlCQyxPQUU4Qjs7QUFBQSxVQVU5QkMscUJBVjhCLEdBVU4sVUFDN0JDLFNBRDZCLEVBRTdCQyxTQUY2QjtBQUFBLGFBSTdCLENBQUMsOEJBQWEsTUFBS2pCLEtBQWxCLEVBQXlCZ0IsU0FBekIsQ0FBRCxJQUF3QyxDQUFDLDhCQUFhLE1BQUtFLEtBQWxCLEVBQXlCRCxTQUF6QixDQUpaO0FBQUEsS0FWTTs7QUFBQSxVQWdCOUJFLFVBaEI4QixHQWdCakIsVUFBQ3hCLElBQUQsRUFBMkI7QUFDN0MsWUFBS2tCLE1BQUwsR0FBY2xCLElBQWQ7QUFDRCxLQWxCb0M7O0FBQUEsVUFvQjlCeUIsV0FwQjhCLEdBb0JoQixVQUFDekIsSUFBRCxFQUEwQjtBQUM3QyxZQUFLbUIsT0FBTCxHQUFlbkIsSUFBZjtBQUNELEtBdEJvQzs7QUFBQSxVQXdCOUIwQixrQkF4QjhCLEdBd0JULGlCQUF5QztBQUFBLFVBQXRDQyxNQUFzQyxTQUF0Q0EsTUFBc0M7QUFBQSxVQUE5QkMsT0FBOEIsU0FBOUJBLE9BQThCOztBQUNuRSxVQUFJQSxPQUFKLEVBQWE7QUFDWCxlQUFPLG9CQUFDLG1CQUFEO0FBQVMsVUFBQSxJQUFJLEVBQUMsTUFBZDtBQUFxQixVQUFBLFNBQVMsRUFBQztBQUEvQixVQUFQO0FBQ0Q7O0FBQ0QsVUFBSUQsTUFBSixFQUFZO0FBQ1YsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFDRSxvQkFBQyxnQkFBRDtBQUFNLFFBQUEsSUFBSSxFQUFDLGFBQVg7QUFBeUIsUUFBQSxTQUFTLEVBQUM7QUFBbkMsUUFERjtBQUdELEtBbENvQzs7QUFBQSxVQW9DOUJFLFlBcEM4QixHQW9DZixVQUFDdEIsS0FBRCxFQUEwQjtBQUFBLHdCQUNHLE1BQUtGLEtBRFI7QUFBQSxVQUN0Q3lCLFFBRHNDLGVBQ3RDQSxRQURzQztBQUFBLFVBQzVCQyxRQUQ0QixlQUM1QkEsUUFENEI7QUFBQSxVQUNYQyxTQURXLGVBQ2xCekIsS0FEa0I7O0FBRTlDLFVBQUksQ0FBQ3VCLFFBQUwsRUFBZTtBQUNiLFlBQUlFLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixnQkFBS0MsUUFBTCxDQUFjO0FBQUUxQixZQUFBQSxLQUFLLEVBQUxBO0FBQUYsV0FBZDtBQUNEOztBQUNELFlBQUl3QixRQUFKLEVBQWM7QUFDWkEsVUFBQUEsUUFBUSxDQUFDeEIsS0FBRCxDQUFSO0FBQ0Q7QUFDRjtBQUNGLEtBOUNvQzs7QUFBQSxVQWdEOUIyQixZQWhEOEIsR0FnRGYsVUFBQ0MsR0FBRCxFQUFpQjtBQUFBLFVBQzdCQyxRQUQ2QixHQUNoQixNQUFLL0IsS0FEVyxDQUM3QitCLFFBRDZCOztBQUVyQyxVQUFJQSxRQUFKLEVBQWM7QUFDWkEsUUFBQUEsUUFBUSxDQUFDRCxHQUFELENBQVI7QUFDRDtBQUNGLEtBckRvQzs7QUFBQSxVQXVEOUJFLGNBdkQ4QixHQXVEYixVQUFDQyxLQUFELEVBQWdCQyxRQUFoQixFQUFrQztBQUFBLFVBQ2hEbkMsR0FEZ0QsR0FDZm1DLFFBRGUsQ0FDaERuQyxHQURnRDtBQUFBLFVBQzNDTSxLQUQyQyxHQUNmNkIsUUFEZSxDQUMzQzdCLEtBRDJDO0FBQUEsVUFDcENILEtBRG9DLEdBQ2ZnQyxRQURlLENBQ3BDaEMsS0FEb0M7QUFBQSxVQUM3Qk0sU0FENkIsR0FDZjBCLFFBRGUsQ0FDN0IxQixTQUQ2Qjs7QUFFeEQsVUFBSSxDQUFDVCxHQUFELElBQVEsQ0FBQ0csS0FBYixFQUFvQjtBQUNsQixlQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPaUMsTUFBTSxDQUFDM0IsU0FBUyxJQUFJSCxLQUFkLENBQU4sQ0FBMkIrQixRQUEzQixDQUFvQ0gsS0FBcEMsQ0FBUDtBQUNELEtBN0RvQzs7QUFBQSxVQStEOUJJLGNBL0Q4QixHQStEYixZQUFNO0FBQUEsVUFDcEJDLFdBRG9CLEdBQ0osTUFBS3RDLEtBREQsQ0FDcEJzQyxXQURvQjtBQUFBLFVBRXBCcEMsS0FGb0IsR0FFVixNQUFLZ0IsS0FGSyxDQUVwQmhCLEtBRm9COztBQUk1QixVQUFJLENBQUNvQyxXQUFELElBQWdCLENBQUNwQyxLQUFqQixJQUEwQkEsS0FBSyxDQUFDUSxNQUFOLElBQWdCNEIsV0FBOUMsRUFBMkQ7QUFDekQsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxDQUFQO0FBQ0QsS0F2RW9DOztBQUFBLFVBeUU5QkMsb0JBekU4QixHQXlFUCxVQUFDOUMsS0FBRCxFQUF3QjtBQUNwRCxVQUFJLENBQUMsTUFBS29CLE1BQVYsRUFBa0I7QUFDaEIsZUFBTyxJQUFQO0FBQ0Q7O0FBSG1ELHlCQUlWLE1BQUtiLEtBSks7QUFBQSxVQUk1QzBCLFFBSjRDLGdCQUk1Q0EsUUFKNEM7QUFBQSxVQUlsQ2MsWUFKa0MsZ0JBSWxDQSxZQUprQztBQUFBLFVBSXBCdEMsS0FKb0IsZ0JBSXBCQSxLQUpvQjs7QUFNcEQsVUFBSXNDLFlBQUosRUFBa0I7QUFDaEIsZUFBT0EsWUFBWSxDQUFDL0MsS0FBRCxDQUFuQjtBQUNEOztBQVJtRCxVQVU1Q2lCLE1BVjRDLEdBVWpDakIsS0FWaUMsQ0FVNUNpQixNQVY0QztBQVdwRCxVQUFNK0IsZUFBZSxHQUNuQiwwQ0FDRTtBQUFNLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxjQUFYO0FBQTJCQyxVQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBYixTQUNHbEQsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTbUQsS0FEWixDQURGLEVBSUU7QUFBTSxRQUFBLEtBQUssRUFBRTtBQUFFRixVQUFBQSxPQUFPLEVBQUUsY0FBWDtBQUEyQkMsVUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQWIsdUJBQ1FqQyxNQURSLFlBSkYsQ0FERjtBQVdBLGFBQ0Usb0JBQUMsbUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSxLQURiO0FBRUUsUUFBQSxTQUFTLEVBQUMsS0FGWjtBQUdFLFFBQUEsS0FBSyxFQUNIO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNHakIsS0FBSyxDQUFDQyxHQUFOLENBQVUsaUJBQTJCbUQsQ0FBM0IsRUFBaUM7QUFBQSxjQUE5QjlDLEdBQThCLFNBQTlCQSxHQUE4QjtBQUFBLGNBQXpCMEIsUUFBeUIsU0FBekJBLFFBQXlCO0FBQUEsY0FBZm1CLEtBQWUsU0FBZkEsS0FBZTtBQUMxQyxpQkFDRTtBQUFLLFlBQUEsU0FBUyxFQUFDLG1DQUFmO0FBQW1ELFlBQUEsR0FBRyxFQUFFN0M7QUFBeEQsYUFDRSxrQ0FBTzZDLEtBQVAsQ0FERixFQUVHLENBQUNuQixRQUFELElBQ0Msb0JBQUMsZ0JBQUQ7QUFDRSxZQUFBLElBQUksRUFBQyxRQURQO0FBRUUsWUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixrQkFBTXFCLElBQUksR0FBR3JELEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUFxRCxDQUFDO0FBQUEsdUJBQUlBLENBQUMsQ0FBQzdDLEtBQU47QUFBQSxlQUFYLENBQWI7QUFDQTRDLGNBQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFZSCxDQUFaLEVBQWUsQ0FBZjs7QUFDQSxrQkFBSTNDLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLHNCQUFLMEIsUUFBTCxDQUFjO0FBQUUxQixrQkFBQUEsS0FBSyxFQUFFNEM7QUFBVCxpQkFBZDtBQUNEOztBQUNELGtCQUFJcEIsUUFBSixFQUFjO0FBQ1pBLGdCQUFBQSxRQUFRLENBQUNvQixJQUFELENBQVI7QUFDRDtBQUNGO0FBWEgsWUFISixDQURGO0FBb0JELFNBckJBLENBREgsQ0FKSjtBQTZCRSxRQUFBLGNBQWMsRUFBQztBQTdCakIsU0ErQkU7QUFDRSxRQUFBLFNBQVMsRUFBQyxpQ0FEWjtBQUVFLFFBQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFBLE9BQU8sRUFBRSxpQkFBQUcsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNDLGVBQUYsRUFBSjtBQUFBO0FBSFosU0FLR1QsZUFMSCxFQU1FLG9CQUFDLGdCQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUEsSUFBSSxFQUFFLEVBRlI7QUFHRSxRQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLGNBQUl2QyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixrQkFBSzBCLFFBQUwsQ0FBYztBQUFFMUIsY0FBQUEsS0FBSyxFQUFFO0FBQVQsYUFBZDtBQUNEOztBQUNELGNBQUl3QixRQUFKLEVBQWM7QUFDWkEsWUFBQUEsUUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFWSCxRQU5GLENBL0JGLENBREY7QUFxREQsS0FwSm9DOztBQUFBLFVBc0pyQ3lCLGlCQXRKcUMsR0FzSmpCLFVBQUNGLENBQUQsRUFBWTtBQUFBLFVBRWxCL0MsS0FGa0IsR0FJMUIrQyxDQUowQixDQUU1QkcsTUFGNEIsQ0FFbEJsRCxLQUZrQjtBQUFBLFVBRzVCbUQsT0FINEIsR0FJMUJKLENBSjBCLENBRzVCSSxPQUg0Qjs7QUFNOUIsVUFBSUEsT0FBTyxLQUFLLENBQVosSUFBaUJuRCxLQUFLLEtBQUssRUFBL0IsRUFBbUM7QUFDakMrQyxRQUFBQSxDQUFDLENBQUNDLGVBQUY7QUFDRDtBQUNGLEtBL0pvQzs7QUFBQSxVQWlLOUJJLGlCQWpLOEIsR0FpS1YsWUFBTTtBQUMvQixVQUFNckIsS0FBSyxHQUFHLE1BQUtuQixPQUFMLENBQWF5QyxhQUFiLENBQTJCLE9BQTNCLENBQWQ7O0FBRCtCLHlCQUVxQixNQUFLdkQsS0FGMUI7QUFBQSxVQUV2QnNDLFdBRnVCLGdCQUV2QkEsV0FGdUI7QUFBQSxVQUVWa0IsV0FGVSxnQkFFVkEsV0FGVTtBQUFBLFVBRUdDLGFBRkgsZ0JBRUdBLGFBRkg7QUFBQSxVQUd2QnZELEtBSHVCLEdBR2IsTUFBS2dCLEtBSFEsQ0FHdkJoQixLQUh1Qjs7QUFLL0IsVUFBSStCLEtBQUosRUFBVztBQUVUQSxRQUFBQSxLQUFLLENBQUN5QixnQkFBTixDQUF1QixTQUF2QixFQUFrQyxNQUFLUCxpQkFBdkMsRUFBMEQsS0FBMUQ7QUFDRDs7QUFFRCxVQUFJYixXQUFXLEtBQUssSUFBaEIsSUFBd0JwQyxLQUE1QixFQUFtQztBQUNqQyxjQUFLeUQsV0FBTDtBQUNEOztBQUNELFVBQUksQ0FBQ0YsYUFBRCxJQUFrQixNQUFLM0MsT0FBM0IsRUFBb0M7QUFDbEMsWUFBSW1CLEtBQUosRUFBVztBQUNUQSxVQUFBQSxLQUFLLENBQUN1QixXQUFOLEdBQW9CQSxXQUFwQjtBQUNEO0FBQ0Y7QUFDRixLQW5Mb0M7O0FBQUEsVUFxTDlCSSxrQkFyTDhCLEdBcUxULFlBQU07QUFBQSxVQUN4QkgsYUFEd0IsR0FDTixNQUFLekQsS0FEQyxDQUN4QnlELGFBRHdCOztBQVNoQyxVQUFJLENBQUNBLGFBQUwsRUFBb0I7QUFDbEJJLFFBQUFBLE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQixJQUFJQyxLQUFKLENBQVUsUUFBVixDQUFyQjtBQUNEO0FBQ0YsS0FqTW9DOztBQUFBLFFBRTNCN0QsTUFGMkIsR0FFSEYsS0FGRyxDQUUzQkUsS0FGMkI7QUFBQSxRQUVwQjhELFlBRm9CLEdBRUhoRSxLQUZHLENBRXBCZ0UsWUFGb0I7QUFHbkMsUUFBTUMsVUFBVSxHQUFHL0QsTUFBSyxLQUFLLElBQVYsR0FBaUJBLE1BQWpCLEdBQXlCOEQsWUFBNUM7QUFFQSxVQUFLOUMsS0FBTCxHQUFhO0FBQ1hoQixNQUFBQSxLQUFLLEVBQUUrRDtBQURJLEtBQWI7QUFMbUM7QUFRcEM7Ozs7NkJBMkxlO0FBQUE7O0FBQUEseUJBZ0JWLEtBQUtqRSxLQWhCSztBQUFBLFVBRVprRSxvQkFGWSxnQkFFWkEsb0JBRlk7QUFBQSxVQUdaakUsUUFIWSxnQkFHWkEsUUFIWTtBQUFBLFVBSVprRSxTQUpZLGdCQUlaQSxTQUpZO0FBQUEsVUFLWkMsaUJBTFksZ0JBS1pBLGlCQUxZO0FBQUEsVUFNWjlCLFdBTlksZ0JBTVpBLFdBTlk7QUFBQSxVQU9aK0IsUUFQWSxnQkFPWkEsUUFQWTtBQUFBLFVBUVpDLFNBUlksZ0JBUVpBLFNBUlk7QUFBQSxVQVNaZCxXQVRZLGdCQVNaQSxXQVRZO0FBQUEsVUFVWmUsU0FWWSxnQkFVWkEsU0FWWTtBQUFBLFVBV1ovQixZQVhZLGdCQVdaQSxZQVhZO0FBQUEsVUFZWmlCLGFBWlksZ0JBWVpBLGFBWlk7QUFBQSxVQWFaZSxtQkFiWSxnQkFhWkEsbUJBYlk7QUFBQSxVQWNaQyxRQWRZLGdCQWNaQSxRQWRZO0FBQUEsVUFlVEMsVUFmUzs7QUFrQmQsVUFBTXBFLFNBQWMsR0FBRyxzQkFBS29FLFVBQUwsRUFBaUIsQ0FDdEMsVUFEc0MsRUFFdEMsVUFGc0MsRUFHdEMsY0FIc0MsRUFJdEMsT0FKc0MsQ0FBakIsQ0FBdkI7QUFsQmMsVUF5Qk54RSxLQXpCTSxHQXlCSSxLQUFLZ0IsS0F6QlQsQ0F5Qk5oQixLQXpCTTtBQTJCZCxVQUFNeUUsUUFBUSxHQUFHLDRCQUFXUixTQUFYLFlBQXlCakYsTUFBekIsNkNBQ1hBLE1BRFcsb0JBQ2EsQ0FBQ3VFLGFBRGQsRUFBakI7QUFJQSxVQUFJbUIsUUFBYSxHQUFHUCxRQUFwQjs7QUFDQSxVQUFJQSxRQUFKLEVBQWM7QUFDWk8sUUFBQUEsUUFBUSxHQUNOLGlDQUNFO0FBQ0UsVUFBQSxLQUFLLEVBQUMsSUFEUjtBQUVFLFVBQUEsTUFBTSxFQUFDLElBRlQ7QUFHRSxVQUFBLFNBQVMsRUFBQztBQUhaLFdBS0U7QUFDRSxVQUFBLENBQUMsRUFBQyxHQURKO0FBRUUsVUFBQSxDQUFDLEVBQUMsR0FGSjtBQUdFLFVBQUEsS0FBSyxFQUFDLElBSFI7QUFJRSxVQUFBLE1BQU0sRUFBQyxHQUpUO0FBS0UsVUFBQSxFQUFFLEVBQUMsSUFMTDtBQU1FLFVBQUEsSUFBSSxFQUFDLE1BTlA7QUFPRSxVQUFBLFFBQVEsRUFBQztBQVBYLFVBTEYsQ0FERixFQWdCRTtBQUNFLFVBQUEsS0FBSyxFQUFDLElBRFI7QUFFRSxVQUFBLE1BQU0sRUFBQyxJQUZUO0FBR0UsVUFBQSxTQUFTLEVBQUM7QUFIWixXQUtFO0FBQ0UsVUFBQSxDQUFDLEVBQUMsbU1BREo7QUFFRSxVQUFBLFFBQVEsRUFBQztBQUZYLFVBTEYsQ0FoQkYsQ0FERjtBQTZCRDs7QUFFRCxVQUFJMUUsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJJLFFBQUFBLFNBQVMsQ0FBQ0osS0FBVixHQUFrQkEsS0FBbEI7QUFDRDs7QUFFRCxVQUFJb0MsV0FBVyxLQUFLLElBQXBCLEVBQTBCO0FBQ3hCLFlBQU11QyxLQUFLLEdBQUcsS0FBS3hDLGNBQUwsRUFBZDs7QUFDQSxZQUFJd0MsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJ2RSxVQUFBQSxTQUFTLENBQUNnQyxXQUFWLEdBQXdCdUMsS0FBeEI7QUFDRDtBQUNGOztBQUVELFVBQUlyQyxZQUFKLEVBQWtCO0FBQ2hCbEMsUUFBQUEsU0FBUyxDQUFDZ0MsV0FBVixHQUF3QixDQUF4QjtBQUNEOztBQUVELGFBQ0Usb0JBQUMsNkJBQUQsQ0FBZSxRQUFmLFFBQ0c7QUFBQSxZQUFzQndDLHdCQUF0QixTQUFHVixpQkFBSDtBQUFBLGVBQ0M7QUFDRSxVQUFBLFNBQVMsRUFBRSw0QkFBVywwQkFBWCxFQUF1QztBQUNoRCwrQ0FBbUMsTUFBSSxDQUFDL0IsY0FBTCxPQUEwQixJQURiO0FBRWhELHFEQUF5QyxDQUFDLENBQUNHO0FBRkssV0FBdkMsQ0FEYjtBQUtFLFVBQUEsR0FBRyxFQUFFLE1BQUksQ0FBQ3BCO0FBTFosV0FPRSxvQkFBQyx3QkFBRDtBQUNFLFVBQUEsb0JBQW9CLEVBQ2xCcUMsYUFBYSxHQUFHUyxvQkFBSCxHQUEwQixLQUYzQztBQUlFLFVBQUEsU0FBUyxFQUFFUyxRQUpiO0FBS0UsVUFBQSxpQkFBaUIsWUFBS3pGLE1BQUwsdUJBQ2ZtRixRQUFRLEdBQUcsVUFBSCxHQUFnQixRQURULENBTG5CO0FBUUUsVUFBQSxrQkFBa0IsRUFDaEJDLFNBQVMsSUFBSSw0QkFBYztBQUFFUyxZQUFBQSxTQUFTLEVBQUU7QUFBYixXQUFkLEVBQW1DVCxTQUFuQyxDQVRqQjtBQVdFLFVBQUEsY0FBYyxFQUFFLE1BQUksQ0FBQ3RDLGNBWHZCO0FBWUUsVUFBQSxpQkFBaUIsRUFBRW9DLGlCQUFpQixJQUFJVSx3QkFaMUM7QUFhRSxVQUFBLFNBQVMsRUFBRSxvQkFBQyxnQkFBRDtBQUFNLFlBQUEsSUFBSSxFQUFDO0FBQVgsWUFiYjtBQWNFLFVBQUEsaUJBQWlCLEVBQUUsTUFBSSxDQUFDdkMsb0JBZDFCO0FBZUUsVUFBQSxlQUFlLEVBQUMsZ0NBZmxCO0FBZ0JFLFVBQUEsUUFBUSxFQUFFLE1BQUksQ0FBQ2YsWUFoQmpCO0FBaUJFLFVBQUEsUUFBUSxFQUFFLE1BQUksQ0FBQ0ssWUFqQmpCO0FBa0JFLFVBQUEsV0FBVyxFQUFFMkIsV0FsQmY7QUFtQkUsVUFBQSxTQUFTLEVBQUMsa0JBbkJaO0FBb0JFLFVBQUEsR0FBRyxFQUFFLE1BQUksQ0FBQ3JDLFVBcEJaO0FBcUJFLFVBQUEsVUFBVSxFQUFFLG9CQUFDLGdCQUFEO0FBQU0sWUFBQSxJQUFJLEVBQUMsUUFBWDtBQUFvQixZQUFBLFdBQVcsTUFBL0I7QUFBZ0MsWUFBQSxJQUFJLEVBQUU7QUFBdEMsWUFyQmQ7QUFzQkUsVUFBQSxtQkFBbUIsRUFDakJxRCxtQkFBbUIsSUFBSXBGLFVBQVUsQ0FBQ29GLG1CQUFELENBdkJyQztBQXlCRSxVQUFBLFVBQVUsRUFBRUgsUUF6QmQ7QUEwQkUsVUFBQSxZQUFZLEVBQUUsTUFBSSxDQUFDaEQsa0JBMUJyQjtBQTJCRSxVQUFBLGNBQWMsRUFBQyxVQTNCakI7QUE0QkUsVUFBQSxhQUFhLEVBQUV1RCxRQTVCakI7QUE2QkUsVUFBQSxrQkFBa0IsRUFBQyxPQTdCckI7QUE4QkUsVUFBQSxjQUFjLEVBQUUsRUE5QmxCO0FBK0JFLFVBQUEsVUFBVSxFQUFFLEdBL0JkO0FBZ0NFLFVBQUEsUUFBUSxFQUFFSCxRQUFRLElBQUlqRixxQkFBcUIsQ0FBQ1MsUUFBRDtBQWhDN0MsV0FpQ01LLFNBakNOLEdBbUNHTCxRQW5DSCxDQVBGLEVBNENHLENBQUMsQ0FBQ3NFLFNBQUYsSUFBZUYsUUFBZixJQUNDLG9CQUFDLGdCQUFEO0FBQU0sVUFBQSxJQUFJLEVBQUVFLFNBQVo7QUFBdUIsVUFBQSxTQUFTLEVBQUM7QUFBakMsVUE3Q0osQ0FERDtBQUFBLE9BREgsQ0FERjtBQXNERDs7OztFQWxjc0IzRSxLQUFLLENBQUNvRixTOztBQUF6QnBFLFUsQ0FDVXFFLFMsR0FBWTtBQUl4QmYsRUFBQUEsb0JBQW9CLEVBQUVnQixzQkFBVUMsSUFKUjtBQVF4QmhCLEVBQUFBLFNBQVMsRUFBRWUsc0JBQVVFLE1BUkc7QUFZeEJwQixFQUFBQSxZQUFZLEVBQUVrQixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVJLEtBQTdCLENBQXBCLENBWlU7QUFnQnhCN0QsRUFBQUEsUUFBUSxFQUFFeUQsc0JBQVVDLElBaEJJO0FBb0J4QmYsRUFBQUEsaUJBQWlCLEVBQUVjLHNCQUFVSyxJQXBCTDtBQXdCeEJqRCxFQUFBQSxXQUFXLEVBQUU0QyxzQkFBVU0sTUF4QkM7QUE0QnhCbkIsRUFBQUEsUUFBUSxFQUFFYSxzQkFBVUMsSUE1Qkk7QUFnQ3hCekQsRUFBQUEsUUFBUSxFQUFFd0Qsc0JBQVVLLElBaENJO0FBb0N4QnhELEVBQUFBLFFBQVEsRUFBRW1ELHNCQUFVSyxJQXBDSTtBQXdDeEJqQixFQUFBQSxTQUFTLEVBQUVZLHNCQUFVTyxLQUFWLENBQWdCLENBQ3pCLEtBRHlCLEVBRXpCLE1BRnlCLEVBR3pCLE9BSHlCLEVBSXpCLFFBSnlCLEVBS3pCLFNBTHlCLEVBTXpCLFVBTnlCLEVBT3pCLFlBUHlCLEVBUXpCLGFBUnlCLEVBU3pCLFNBVHlCLEVBVXpCLFlBVnlCLEVBV3pCLFVBWHlCLEVBWXpCLGFBWnlCLENBQWhCLENBeENhO0FBeUR4QmpDLEVBQUFBLFdBQVcsRUFBRTBCLHNCQUFVRSxNQXpEQztBQTZEeEI1QyxFQUFBQSxZQUFZLEVBQUUwQyxzQkFBVUssSUE3REE7QUFpRXhCOUIsRUFBQUEsYUFBYSxFQUFFeUIsc0JBQVVDLElBakVEO0FBcUV4QlosRUFBQUEsU0FBUyxFQUFFVyxzQkFBVUUsTUFyRUc7QUE0RXhCWixFQUFBQSxtQkFBbUIsRUFBRVUsc0JBQVVPLEtBQVYsQ0FBZ0IsQ0FDbkMsVUFEbUMsRUFFbkMsYUFGbUMsRUFHbkMsWUFIbUMsQ0FBaEIsQ0E1RUc7QUFvRnhCdkYsRUFBQUEsS0FBSyxFQUFFZ0Ysc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSSxLQUE3QixDQUFwQjtBQXBGaUIsQztBQUR0QjFFLFUsQ0F3RlU4RSxZLEdBQWlDO0FBQzdDeEIsRUFBQUEsb0JBQW9CLEVBQUUsS0FEdUI7QUFFN0NDLEVBQUFBLFNBQVMsRUFBRXdCLFNBRmtDO0FBRzdDM0IsRUFBQUEsWUFBWSxFQUFFLElBSCtCO0FBSTdDdkMsRUFBQUEsUUFBUSxFQUFFLEtBSm1DO0FBSzdDMkMsRUFBQUEsaUJBQWlCLEVBQUUsSUFMMEI7QUFNN0M5QixFQUFBQSxXQUFXLEVBQUUsSUFOZ0M7QUFPN0MrQixFQUFBQSxRQUFRLEVBQUUsSUFQbUM7QUFRN0MzQyxFQUFBQSxRQUFRLEVBQUV2QyxJQVJtQztBQVM3QzRDLEVBQUFBLFFBQVEsRUFBRTVDLElBVG1DO0FBVTdDbUYsRUFBQUEsU0FBUyxFQUFFLFlBVmtDO0FBVzdDZCxFQUFBQSxXQUFXLEVBQUUsS0FYZ0M7QUFZN0NoQixFQUFBQSxZQUFZLEVBQUUsSUFaK0I7QUFhN0NpQixFQUFBQSxhQUFhLEVBQUUsSUFiOEI7QUFjN0NjLEVBQUFBLFNBQVMsRUFBRSxNQWRrQztBQWU3Q0MsRUFBQUEsbUJBQW1CLEVBQUUsYUFmd0I7QUFnQjdDdEUsRUFBQUEsS0FBSyxFQUFFO0FBaEJzQyxDOztBQXhGM0NVLFUsQ0EyR1VnRix3QixHQUEyQixpQkFBaUM7QUFBQSxNQUE5QjFGLEtBQThCLFNBQTlCQSxLQUE4Qjs7QUFDeEUsTUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsV0FBTztBQUNMQSxNQUFBQSxLQUFLLEVBQUxBO0FBREssS0FBUDtBQUdEOztBQUNELFNBQU8sSUFBUDtBQUNELEM7O0FBbEhHVSxVLENBb0hVaUYsUSxHQUE0QkEsc0I7QUFpVjVDLHFDQUFTakYsVUFBVDtlQUVlQSxVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSY1RyZWVTZWxlY3QsIHtcbiAgU0hPV19BTEwsXG4gIFNIT1dfUEFSRU5ULFxuICBTSE9XX0NISUxELFxuICBUcmVlTm9kZSxcbn0gZnJvbSBcInJjLXRyZWUtc2VsZWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tIFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG5leHBvcnQgdHlwZSBUcmVlTm9kZVZhbHVlID0gc3RyaW5nW10gfCBudW1iZXJbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIG1heFRhZ0NvdW50PzogbnVsbCB8IG51bWJlclxuICBtdWx0aXBsZT86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFRyZWVOb2RlVmFsdWUpID0+IHZvaWRcbiAgb25TZWFyY2g/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgcmVzdWx0UmVuZGVyPzogbnVsbCB8ICgodmFsdWVzOiBJVHJlZU5vZGVbXSkgPT4gSlNYLkVsZW1lbnQpXG4gIHJlc3VsdFZpc2libGU/OiBib29sZWFuXG4gIHNob3dDaGVja2VkU3RyYXRlZ3k/OiBcInNob3ctYWxsXCIgfCBcInNob3ctY2hpbGRcIiB8IFwic2hvdy1wYXJlbnRcIlxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFN0YXRlIHtcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGVcbiAga2V5Pzogc3RyaW5nXG4gIGV2ZW50S2V5Pzogc3RyaW5nXG4gIGlzTGVhZj86IGJvb2xlYW5cbiAgY2hlY2tlZD86IGJvb2xlYW5cbiAgZXhwYW5kZWQ/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIHNlbGVjdGVkPzogYm9vbGVhblxuICBzZWxlY3RhYmxlPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5jb25zdCBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEgPSAobm9kZXM6IGFueSkgPT4ge1xuICByZXR1cm4gdG9BcnJheShub2RlcylcbiAgICAubWFwKChub2RlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBrZXksXG4gICAgICAgIHByb3BzOiB7IGNoaWxkcmVuLCB2YWx1ZSwgcG9wb3ZlciwgcG9wb3ZlclByb3BzLCB0aXRsZSwgLi4ucmVzdFByb3BzIH0sXG4gICAgICB9ID0gbm9kZSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRcblxuICAgICAgLyoqXG4gICAgICAgKiDlpoLmnpzmnIkgcG9wb3ZlciDliJnlnKjov5nph4zljIXoo4XkuIDkuIsgdGl0bGVcbiAgICAgICAqL1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZGF0YVRpdGxlOiB0aXRsZSxcbiAgICAgICAgdGl0bGU6IHBvcG92ZXIgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlclwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICksXG4gICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGREYXRhID0gY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKVxuICAgICAgaWYgKGNoaWxkRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkRGF0YVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgLmZpbHRlcihkYXRhID0+IGRhdGEpXG59XG5cbi8qKlxuICog5qCR5b2i6YCJ5oupXG4gKi9cbmNsYXNzIFRyZWVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRyZWVTZWxlY3RQcm9wcywgSVRyZWVTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlgLzooqvpgInmi6nlkI7vvIzmmK/lkKbpnIDopoHmuIXnqbrmkJzntKLmoYZcbiAgICAgKi9cbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOm7mOiupOmAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgICAqL1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmnIDlpJrmmL7npLrlpJrlsJHkuKogdGFn77yM5aaC5p6c6LaF6L+H5LqG5YiZ5Lul5pS26LW355qE5b2i5byP5Ye6546wXG4gICAgICovXG4gICAgbWF4VGFnQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5aSa6YCJ5qih5byPXG4gICAgICovXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWAvOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pCc57Si5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7lvLnlh7rkvY3nva5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u6L6T5YWl5qGG55qE6buY6K6k5YaF5a65XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572u6Ieq5a6a5LmJ55qE57uT5p6c5riy5p+TXG4gICAgICovXG4gICAgcmVzdWx0UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblhoXnmoTmoIfnrb7mmK/lkKbmmL7npLrvvIzmraQgUHJvcCDnlKjkuo7mg7PopoHlsIbnu5PmnpzljLrlsZXnpLrlnKjliKvnmoTlnLDmlrnnmoTpnIDmsYJcbiAgICAgKi9cbiAgICByZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprliLbmoJHlvaLpgInmi6nlmajnmoRpY29uXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOWumuS5iemAieS4remhueWbnuWhq+eahOaWueW8j++8mlxuICAgICAqIDEuIHNob3ctYWxs77ya5pi+56S65YyF5ous54i26IqC54K555qE5omA5pyJ6YCJ5Lit6IqC54K577ybXG4gICAgICogMi4gc2hvdy1wYXJlbnTvvJrlj6rmmL7npLrniLboioLngrnvvJtcbiAgICAgKiAzLiBzaG93LWNoaWxk77ya5Y+q5pi+56S65a2Q6IqC54K544CC6buY6K6k5YC877yac2hvdy1wYXJlbnRcbiAgICAgKi9cbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJzaG93LWFsbFwiLFxuICAgICAgXCJzaG93LXBhcmVudFwiLFxuICAgICAgXCJzaG93LWNoaWxkXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVHJlZVNlbGVjdFByb3BzID0ge1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIG1heFRhZ0NvdW50OiBudWxsLFxuICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uU2VhcmNoOiBub29wLFxuICAgIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcmVzdWx0UmVuZGVyOiBudWxsLFxuICAgIHJlc3VsdFZpc2libGU6IHRydWUsXG4gICAgcmlnaHRJY29uOiBcIm1lbnVcIixcbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBcInNob3ctcGFyZW50XCIsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7IHZhbHVlIH06IElUcmVlU2VsZWN0UHJvcHMpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBUcmVlTm9kZTogdHlwZW9mIFRyZWVOb2RlID0gVHJlZU5vZGVcblxuICBwdWJsaWMgc2VsZWN0OiB0eXBlb2YgUmNUcmVlU2VsZWN0XG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElUcmVlU2VsZWN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IHZhbHVlLCBkZWZhdWx0VmFsdWUgfSA9IHByb3BzXG4gICAgY29uc3QgdmFsdWVTdGF0ZSA9IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWVcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdmFsdWVTdGF0ZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKFxuICAgIG5leHRQcm9wczogSVRyZWVTZWxlY3RQcm9wcyxcbiAgICBuZXh0U3RhdGU6IElUcmVlU2VsZWN0U3RhdGVcbiAgKSA9PlxuICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcblxuICBwdWJsaWMgc2F2ZVNlbGVjdCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnNlbGVjdCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlV3JhcHBlciA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMud3JhcHBlciA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTd2l0Y2hlckljb24gPSAoeyBpc0xlYWYsIGxvYWRpbmcgfTogSVRyZWVOb2RlUHJvcHMpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIHNpemU9XCJtaW5pXCIgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1zd2l0Y2hlci1pY29uXCIgLz5cbiAgICB9XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uIGljb249XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3Qtc3dpdGNoZXItaWNvblwiIC8+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogVHJlZU5vZGVWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG9uQ2hhbmdlLCB2YWx1ZTogdmFsdWVQcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VhcmNoID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBvblNlYXJjaCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvblNlYXJjaCkge1xuICAgICAgb25TZWFyY2godmFsKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUcmVlTm9kZSA9IChpbnB1dDogc3RyaW5nLCB0cmVlTm9kZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBrZXksIHRpdGxlLCB2YWx1ZSwgZGF0YVRpdGxlIH0gPSB0cmVlTm9kZVxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoZGF0YVRpdGxlIHx8IHRpdGxlKS5pbmNsdWRlcyhpbnB1dClcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKCFtYXhUYWdDb3VudCB8fCAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDw9IG1heFRhZ0NvdW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ1BsYWNlaG9sZGVyID0gKG5vZGVzOiBJVHJlZU5vZGVbXSkgPT4ge1xuICAgIGlmICghdGhpcy5zZWxlY3QpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHJlc3VsdFJlbmRlciwgdmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJldHVybiByZXN1bHRSZW5kZXIobm9kZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IG5vZGVzXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICB7bm9kZXNbMF0ubGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICAuLi7nrYkge2xlbmd0aH0g5LiqXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heC1wb3BvdmVyLWl0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAge25vZGVzLm1hcCgoeyBrZXksIGRpc2FibGVkLCBsYWJlbCB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heC1wb3BvdmVyLWl0ZW1cIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFscyA9IG5vZGVzLm1hcChvID0+IG8udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFscyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXhQb3BvdmVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4UGxhY2Vob2xkZXJcIlxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7cGxhY2Vob2xkZXJUZXh0fVxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoW10pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG5cbiAgbGlzdGVuSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlIH0sXG4gICAgICBrZXlDb2RlLFxuICAgIH0gPSBlXG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gOCAmJiB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50LCBwbGFjZWhvbGRlciwgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy8g56aB5q2iIHRyZWUtc2VsZWN0IOmUruebmOWbnuWIoOS8muW9seWTjSB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5saXN0ZW5JbnB1dENoYW5nZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsICYmIHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIHJlc3VsdFZpc2libGUg5Li6IGZhbHNlIOaXtu+8jCBzZWxlY3RvciDpq5jluqbkuI3kvJrmlLnlj5jjgIJcbiAgICAgKiDmoLnmja7miJHnmoTnu4/pqowgUG9wdXAg6Kem5Y+R6YeN5paw5a6a5L2N55qE5pe25py65piv77yaXG4gICAgICogMS4gd2luZG93IHJlc2l6ZVxuICAgICAqIDIuIHJlc2l6ZSBvYnNlcnZlciDkuoYgc2VsZWN0b3JcbiAgICAgKiDlm6DmraTov5nph4zmiYvliqjop6blj5EgcmVzaXplXG4gICAgICovXG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlKSB7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBtYXhUYWdDb3VudCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByaWdodEljb24sXG4gICAgICByZXN1bHRSZW5kZXIsXG4gICAgICByZXN1bHRWaXNpYmxlLFxuICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSxcbiAgICAgIHRyZWVEYXRhLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHM6IGFueSA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJvbkNoYW5nZVwiLFxuICAgICAgXCJvblNlYXJjaFwiLFxuICAgICAgXCJkZWZhdWx0VmFsdWVcIixcbiAgICAgIFwidmFsdWVcIixcbiAgICBdKVxuXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS13cmFwcGVyYCwge1xuICAgICAgW2Ake3ByZWZpeH1fcmVzdWx0SGlkZGVuYF06ICFyZXN1bHRWaXNpYmxlLFxuICAgIH0pXG5cbiAgICBsZXQgY2hlY2tib3g6IGFueSA9IG11bHRpcGxlXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBjaGVja2JveCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtdHJlZS1jaGVja2JveC1pbmRldGVybWluYXRlU3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICB4PVwiMVwiXG4gICAgICAgICAgICAgIHk9XCI0XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICByeD1cIi41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtdHJlZS1jaGVja2JveC1jaGVja2VkU3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTS42MTggNS44MjdhLjQ2My40NjMgMCAwIDEtLjAyLS42NzVsLjgwNC0uODA0YS41Mi41MiAwIDAgMSAuNzE2LS4wMUw0Ljc1IDYuNzVsNC45MjItNS42MjVhLjUxMy41MTMgMCAwIDEgLjcwNy0uMDZsLjc0Mi42MmEuNDc4LjQ3OCAwIDAgMSAuMDQ0LjY4N2wtNi4wOCA2Ljc1NmEuNTA2LjUwNiAwIDAgMS0uNzAzLjA0NUwuNjE4IDUuODI3elwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJlc3RQcm9wcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0TWF4VGFnQ291bnQoKVxuICAgICAgaWYgKGNvdW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IGNvdW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gMFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlclwiLCB7XG4gICAgICAgICAgICAgIFwiYWR1aS10cmVlLXNlbGVjdC13cmFwcGVyLW1heFRhZ1wiOiB0aGlzLmdldE1heFRhZ0NvdW50KCkgIT09IG51bGwsXG4gICAgICAgICAgICAgIFwiYWR1aS10cmVlLXNlbGVjdC13cmFwcGVyLXJlc3VsdFJlbmRlclwiOiAhIXJlc3VsdFJlbmRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVXcmFwcGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSY1RyZWVTZWxlY3RcbiAgICAgICAgICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU9e1xuICAgICAgICAgICAgICAgIHJlc3VsdFZpc2libGUgPyBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9e2Ake3ByZWZpeH0tZHJvcGRvd24tJHtcbiAgICAgICAgICAgICAgICBtdWx0aXBsZSA/IFwibXVsdGlwbGVcIiA6IFwic2luZ2xlXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGRyb3Bkb3duUG9wdXBBbGlnbj17XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50ICYmIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpbHRlclRyZWVOb2RlPXt0aGlzLmZpbHRlclRyZWVOb2RlfVxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICAgICAgICBpbnB1dEljb249ezxJY29uIGljb249XCJ0cmlhbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyPXt0aGlzLmdldE1heFRhZ1BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9XCLml6DljLnphY3nu5PmnpxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwcmVmaXhDbHM9XCJhZHVpLXRyZWUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWxlY3R9XG4gICAgICAgICAgICAgIHJlbW92ZUljb249ezxJY29uIGljb249XCJjYW5jZWxcIiBpbnRlcmFjdGl2ZSBzaXplPXsxNn0gLz59XG4gICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3k9e1xuICAgICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3kgJiYgc3RyYXRlZ2llc1tzaG93Q2hlY2tlZFN0cmF0ZWd5XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3dTZWFyY2g9e211bHRpcGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hlckljb249e3RoaXMucmVuZGVyU3dpdGNoZXJJY29ufVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgICAgdHJlZUNoZWNrYWJsZT17Y2hlY2tib3h9XG4gICAgICAgICAgICAgIHRyZWVOb2RlRmlsdGVyUHJvcD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezM2fVxuICAgICAgICAgICAgICBsaXN0SGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgIHRyZWVEYXRhPXt0cmVlRGF0YSB8fCBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pfVxuICAgICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1JjVHJlZVNlbGVjdD5cbiAgICAgICAgICAgIHshIXJpZ2h0SWNvbiAmJiBtdWx0aXBsZSAmJiAoXG4gICAgICAgICAgICAgIDxJY29uIGljb249e3JpZ2h0SWNvbn0gY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1pY29uXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbnBvbHlmaWxsKFRyZWVTZWxlY3QpXG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVTZWxlY3RcbiJdfQ==