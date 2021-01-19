"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcTreeSelect = _interopRequireWildcard(require("rc-tree-select"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
var _default = TreeSelect;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIm5vZGVzIiwibWFwIiwibm9kZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInRpdGxlIiwicmVzdFByb3BzIiwiZGF0YSIsImRhdGFUaXRsZSIsImNoaWxkRGF0YSIsImxlbmd0aCIsImZpbHRlciIsIlRyZWVTZWxlY3QiLCJzZWxlY3QiLCJ3cmFwcGVyIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsInNldFN0YXRlIiwiaGFuZGxlU2VhcmNoIiwidmFsIiwib25TZWFyY2giLCJmaWx0ZXJUcmVlTm9kZSIsImlucHV0IiwidHJlZU5vZGUiLCJTdHJpbmciLCJpbmNsdWRlcyIsImdldE1heFRhZ0NvdW50IiwibWF4VGFnQ291bnQiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsInJlc3VsdFJlbmRlciIsInBsYWNlaG9sZGVyVGV4dCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGFiZWwiLCJpIiwidmFscyIsIm8iLCJzcGxpY2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibGlzdGVuSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiY29tcG9uZW50RGlkTW91bnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZGVmYXVsdFZhbHVlIiwidmFsdWVTdGF0ZSIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiY2xhc3NOYW1lIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtdWx0aXBsZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJ0cmVlRGF0YSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJUcmVlTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsa0JBQWY7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQixjQUFZQyxzQkFESztBQUVqQixnQkFBY0Msd0JBRkc7QUFHakIsaUJBQWVDO0FBSEUsQ0FBbkI7O0FBdURBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUM1QyxTQUFPLHlCQUFRQSxLQUFSLEVBQ0pDLEdBREksQ0FDQSxV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QUEsS0FBSyxFQUFFZ0Ysc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSSxLQUE3QixDQUFwQjtBQXBGaUIsQztBQUR0QjFFLFUsQ0F3RlU4RSxZLEdBQWlDO0FBQzdDeEIsRUFBQUEsb0JBQW9CLEVBQUUsS0FEdUI7QUFFN0NDLEVBQUFBLFNBQVMsRUFBRXdCLFNBRmtDO0FBRzdDM0IsRUFBQUEsWUFBWSxFQUFFLElBSCtCO0FBSTdDdkMsRUFBQUEsUUFBUSxFQUFFLEtBSm1DO0FBSzdDMkMsRUFBQUEsaUJBQWlCLEVBQUUsSUFMMEI7QUFNN0M5QixFQUFBQSxXQUFXLEVBQUUsSUFOZ0M7QUFPN0MrQixFQUFBQSxRQUFRLEVBQUUsSUFQbUM7QUFRN0MzQyxFQUFBQSxRQUFRLEVBQUV2QyxJQVJtQztBQVM3QzRDLEVBQUFBLFFBQVEsRUFBRTVDLElBVG1DO0FBVTdDbUYsRUFBQUEsU0FBUyxFQUFFLFlBVmtDO0FBVzdDZCxFQUFBQSxXQUFXLEVBQUUsS0FYZ0M7QUFZN0NoQixFQUFBQSxZQUFZLEVBQUUsSUFaK0I7QUFhN0NpQixFQUFBQSxhQUFhLEVBQUUsSUFiOEI7QUFjN0NjLEVBQUFBLFNBQVMsRUFBRSxNQWRrQztBQWU3Q0MsRUFBQUEsbUJBQW1CLEVBQUUsYUFmd0I7QUFnQjdDdEUsRUFBQUEsS0FBSyxFQUFFO0FBaEJzQyxDOztBQXhGM0NVLFUsQ0EyR1VnRix3QixHQUEyQixpQkFBaUM7QUFBQSxNQUE5QjFGLEtBQThCLFNBQTlCQSxLQUE4Qjs7QUFDeEUsTUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsV0FBTztBQUNMQSxNQUFBQSxLQUFLLEVBQUxBO0FBREssS0FBUDtBQUdEOztBQUNELFNBQU8sSUFBUDtBQUNELEM7O0FBbEhHVSxVLENBb0hVaUYsUSxHQUE0QkEsc0I7ZUFpVjdCakYsVSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmNUcmVlU2VsZWN0LCB7XG4gIFNIT1dfQUxMLFxuICBTSE9XX1BBUkVOVCxcbiAgU0hPV19DSElMRCxcbiAgVHJlZU5vZGUsXG59IGZyb20gXCJyYy10cmVlLXNlbGVjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9saWIvQ2hpbGRyZW4vdG9BcnJheVwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vc3Bpbm5lclwiXG5pbXBvcnQgZ2V0UGxhY2VtZW50cyBmcm9tIFwiLi4vdG9vbHRpcC9wbGFjZW1lbnRzXCJcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRyZWUtc2VsZWN0XCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBzdHJhdGVnaWVzID0ge1xuICBcInNob3ctYWxsXCI6IFNIT1dfQUxMLFxuICBcInNob3ctY2hpbGRcIjogU0hPV19DSElMRCxcbiAgXCJzaG93LXBhcmVudFwiOiBTSE9XX1BBUkVOVCxcbn1cblxuZXhwb3J0IHR5cGUgVHJlZU5vZGVWYWx1ZSA9IHN0cmluZ1tdIHwgbnVtYmVyW10gfCBudWxsXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlIHtcbiAgdmFsdWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIGtleTogc3RyaW5nXG4gIGRpc2FibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGRlZmF1bHRWYWx1ZT86IFRyZWVOb2RlVmFsdWVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICBtYXhUYWdDb3VudD86IG51bGwgfCBudW1iZXJcbiAgbXVsdGlwbGU/OiBib29sZWFuXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBUcmVlTm9kZVZhbHVlKSA9PiB2b2lkXG4gIG9uU2VhcmNoPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIHJlc3VsdFJlbmRlcj86IG51bGwgfCAoKHZhbHVlczogSVRyZWVOb2RlW10pID0+IEpTWC5FbGVtZW50KVxuICByZXN1bHRWaXNpYmxlPzogYm9vbGVhblxuICBzaG93Q2hlY2tlZFN0cmF0ZWd5PzogXCJzaG93LWFsbFwiIHwgXCJzaG93LWNoaWxkXCIgfCBcInNob3ctcGFyZW50XCJcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RTdGF0ZSB7XG4gIHZhbHVlPzogVHJlZU5vZGVWYWx1ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjaGVja2FibGU/OiBib29sZWFuXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBkaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlXG4gIGtleT86IHN0cmluZ1xuICBldmVudEtleT86IHN0cmluZ1xuICBpc0xlYWY/OiBib29sZWFuXG4gIGNoZWNrZWQ/OiBib29sZWFuXG4gIGV4cGFuZGVkPzogYm9vbGVhblxuICBsb2FkaW5nPzogYm9vbGVhblxuICBzZWxlY3RlZD86IGJvb2xlYW5cbiAgc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgY29udmVydENoaWxkcmVuVG9EYXRhID0gKG5vZGVzOiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvQXJyYXkobm9kZXMpXG4gICAgLm1hcCgobm9kZTogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KG5vZGUpIHx8ICFub2RlLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAga2V5LFxuICAgICAgICBwcm9wczogeyBjaGlsZHJlbiwgdmFsdWUsIHBvcG92ZXIsIHBvcG92ZXJQcm9wcywgdGl0bGUsIC4uLnJlc3RQcm9wcyB9LFxuICAgICAgfSA9IG5vZGUgYXMgUmVhY3QuUmVhY3RFbGVtZW50XG5cbiAgICAgIC8qKlxuICAgICAgICog5aaC5p6c5pyJIHBvcG92ZXIg5YiZ5Zyo6L+Z6YeM5YyF6KOF5LiA5LiLIHRpdGxlXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGRhdGFUaXRsZTogdGl0bGUsXG4gICAgICAgIHRpdGxlOiBwb3BvdmVyID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXJcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8UG9wb3ZlciBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXBvcC10cmlnZ2VyLXBsYWNlaG9sZGVyXCIgLz5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aXRsZVxuICAgICAgICApLFxuICAgICAgICAuLi5yZXN0UHJvcHMsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbilcbiAgICAgIGlmIChjaGlsZERhdGEubGVuZ3RoKSB7XG4gICAgICAgIGRhdGEuY2hpbGRyZW4gPSBjaGlsZERhdGFcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICAgIC5maWx0ZXIoKGRhdGEpID0+IGRhdGEpXG59XG5cbi8qKlxuICog5qCR5b2i6YCJ5oupXG4gKi9cbmNsYXNzIFRyZWVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRyZWVTZWxlY3RQcm9wcywgSVRyZWVTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlgLzooqvpgInmi6nlkI7vvIzmmK/lkKbpnIDopoHmuIXnqbrmkJzntKLmoYZcbiAgICAgKi9cbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOm7mOiupOmAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgICAqL1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmnIDlpJrmmL7npLrlpJrlsJHkuKogdGFn77yM5aaC5p6c6LaF6L+H5LqG5YiZ5Lul5pS26LW355qE5b2i5byP5Ye6546wXG4gICAgICovXG4gICAgbWF4VGFnQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5aSa6YCJ5qih5byPXG4gICAgICovXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWAvOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pCc57Si5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7lvLnlh7rkvY3nva5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u6L6T5YWl5qGG55qE6buY6K6k5YaF5a65XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572u6Ieq5a6a5LmJ55qE57uT5p6c5riy5p+TXG4gICAgICovXG4gICAgcmVzdWx0UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblhoXnmoTmoIfnrb7mmK/lkKbmmL7npLrvvIzmraQgUHJvcCDnlKjkuo7mg7PopoHlsIbnu5PmnpzljLrlsZXnpLrlnKjliKvnmoTlnLDmlrnnmoTpnIDmsYJcbiAgICAgKi9cbiAgICByZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprliLbmoJHlvaLpgInmi6nlmajnmoRpY29uXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOWumuS5iemAieS4remhueWbnuWhq+eahOaWueW8j++8mlxuICAgICAqIDEuIHNob3ctYWxs77ya5pi+56S65YyF5ous54i26IqC54K555qE5omA5pyJ6YCJ5Lit6IqC54K577ybXG4gICAgICogMi4gc2hvdy1wYXJlbnTvvJrlj6rmmL7npLrniLboioLngrnvvJtcbiAgICAgKiAzLiBzaG93LWNoaWxk77ya5Y+q5pi+56S65a2Q6IqC54K544CC6buY6K6k5YC877yac2hvdy1wYXJlbnRcbiAgICAgKi9cbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJzaG93LWFsbFwiLFxuICAgICAgXCJzaG93LXBhcmVudFwiLFxuICAgICAgXCJzaG93LWNoaWxkXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVHJlZVNlbGVjdFByb3BzID0ge1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIG1heFRhZ0NvdW50OiBudWxsLFxuICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uU2VhcmNoOiBub29wLFxuICAgIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcmVzdWx0UmVuZGVyOiBudWxsLFxuICAgIHJlc3VsdFZpc2libGU6IHRydWUsXG4gICAgcmlnaHRJY29uOiBcIm1lbnVcIixcbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBcInNob3ctcGFyZW50XCIsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7IHZhbHVlIH06IElUcmVlU2VsZWN0UHJvcHMpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBUcmVlTm9kZTogdHlwZW9mIFRyZWVOb2RlID0gVHJlZU5vZGVcblxuICBwdWJsaWMgc2VsZWN0OiB0eXBlb2YgUmNUcmVlU2VsZWN0XG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElUcmVlU2VsZWN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IHZhbHVlLCBkZWZhdWx0VmFsdWUgfSA9IHByb3BzXG4gICAgY29uc3QgdmFsdWVTdGF0ZSA9IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWVcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdmFsdWVTdGF0ZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKFxuICAgIG5leHRQcm9wczogSVRyZWVTZWxlY3RQcm9wcyxcbiAgICBuZXh0U3RhdGU6IElUcmVlU2VsZWN0U3RhdGVcbiAgKSA9PlxuICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcblxuICBwdWJsaWMgc2F2ZVNlbGVjdCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnNlbGVjdCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlV3JhcHBlciA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMud3JhcHBlciA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTd2l0Y2hlckljb24gPSAoeyBpc0xlYWYsIGxvYWRpbmcgfTogSVRyZWVOb2RlUHJvcHMpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIHNpemU9XCJtaW5pXCIgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1zd2l0Y2hlci1pY29uXCIgLz5cbiAgICB9XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uIGljb249XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3Qtc3dpdGNoZXItaWNvblwiIC8+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogVHJlZU5vZGVWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG9uQ2hhbmdlLCB2YWx1ZTogdmFsdWVQcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VhcmNoID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBvblNlYXJjaCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvblNlYXJjaCkge1xuICAgICAgb25TZWFyY2godmFsKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUcmVlTm9kZSA9IChpbnB1dDogc3RyaW5nLCB0cmVlTm9kZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBrZXksIHRpdGxlLCB2YWx1ZSwgZGF0YVRpdGxlIH0gPSB0cmVlTm9kZVxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoZGF0YVRpdGxlIHx8IHRpdGxlKS5pbmNsdWRlcyhpbnB1dClcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKCFtYXhUYWdDb3VudCB8fCAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDw9IG1heFRhZ0NvdW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ1BsYWNlaG9sZGVyID0gKG5vZGVzOiBJVHJlZU5vZGVbXSkgPT4ge1xuICAgIGlmICghdGhpcy5zZWxlY3QpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHJlc3VsdFJlbmRlciwgdmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJldHVybiByZXN1bHRSZW5kZXIobm9kZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IG5vZGVzXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICB7bm9kZXNbMF0ubGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICAuLi7nrYkge2xlbmd0aH0g5LiqXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heC1wb3BvdmVyLWl0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAge25vZGVzLm1hcCgoeyBrZXksIGRpc2FibGVkLCBsYWJlbCB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heC1wb3BvdmVyLWl0ZW1cIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFscyA9IG5vZGVzLm1hcCgobykgPT4gby52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWxzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFscylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBDbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heFBvcG92ZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXhQbGFjZWhvbGRlclwiXG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICA+XG4gICAgICAgICAge3BsYWNlaG9sZGVyVGV4dH1cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFtdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuXG4gIGxpc3RlbklucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZSB9LFxuICAgICAga2V5Q29kZSxcbiAgICB9ID0gZVxuXG4gICAgaWYgKGtleUNvZGUgPT09IDggJiYgdmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCwgcGxhY2Vob2xkZXIsIHJlc3VsdFZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIC8vIOemgeatoiB0cmVlLXNlbGVjdCDplK7nm5jlm57liKDkvJrlvbHlk40gdmFsdWVcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubGlzdGVuSW5wdXRDaGFuZ2UsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIGlmICghcmVzdWx0VmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlc3VsdFZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICAvKipcbiAgICAgKiByZXN1bHRWaXNpYmxlIOS4uiBmYWxzZSDml7bvvIwgc2VsZWN0b3Ig6auY5bqm5LiN5Lya5pS55Y+Y44CCXG4gICAgICog5qC55o2u5oiR55qE57uP6aqMIFBvcHVwIOinpuWPkemHjeaWsOWumuS9jeeahOaXtuacuuaYr++8mlxuICAgICAqIDEuIHdpbmRvdyByZXNpemVcbiAgICAgKiAyLiByZXNpemUgb2JzZXJ2ZXIg5LqGIHNlbGVjdG9yXG4gICAgICog5Zug5q2k6L+Z6YeM5omL5Yqo6Kem5Y+RIHJlc2l6ZVxuICAgICAqL1xuICAgIGlmICghcmVzdWx0VmlzaWJsZSkge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmlnaHRJY29uLFxuICAgICAgcmVzdWx0UmVuZGVyLFxuICAgICAgcmVzdWx0VmlzaWJsZSxcbiAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3ksXG4gICAgICB0cmVlRGF0YSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzOiBhbnkgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwib25DaGFuZ2VcIixcbiAgICAgIFwib25TZWFyY2hcIixcbiAgICAgIFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICBcInZhbHVlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0td3JhcHBlcmAsIHtcbiAgICAgIFtgJHtwcmVmaXh9X3Jlc3VsdEhpZGRlbmBdOiAhcmVzdWx0VmlzaWJsZSxcbiAgICB9KVxuXG4gICAgbGV0IGNoZWNrYm94OiBhbnkgPSBtdWx0aXBsZVxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgY2hlY2tib3ggPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXRyZWUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZVN2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgeD1cIjFcIlxuICAgICAgICAgICAgICB5PVwiNFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgcng9XCIuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXRyZWUtY2hlY2tib3gtY2hlY2tlZFN2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXN0UHJvcHMudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldE1heFRhZ0NvdW50KClcbiAgICAgIGlmIChjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSBjb3VudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJhZHVpLXRyZWUtc2VsZWN0LXdyYXBwZXJcIiwge1xuICAgICAgICAgICAgICBcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlci1tYXhUYWdcIjogdGhpcy5nZXRNYXhUYWdDb3VudCgpICE9PSBudWxsLFxuICAgICAgICAgICAgICBcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlci1yZXN1bHRSZW5kZXJcIjogISFyZXN1bHRSZW5kZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlV3JhcHBlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UmNUcmVlU2VsZWN0XG4gICAgICAgICAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlPXtcbiAgICAgICAgICAgICAgICByZXN1bHRWaXNpYmxlID8gYXV0b0NsZWFyU2VhcmNoVmFsdWUgOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lPXtgJHtwcmVmaXh9LWRyb3Bkb3duLSR7XG4gICAgICAgICAgICAgICAgbXVsdGlwbGUgPyBcIm11bHRpcGxlXCIgOiBcInNpbmdsZVwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBkcm9wZG93blBvcHVwQWxpZ249e1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudCAmJiBnZXRQbGFjZW1lbnRzKHsgYWxpZ25FZGdlOiB0cnVlIH0pW3BsYWNlbWVudF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmaWx0ZXJUcmVlTm9kZT17dGhpcy5maWx0ZXJUcmVlTm9kZX1cbiAgICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgICAgICAgaW5wdXRJY29uPXs8SWNvbiBpY29uPVwidHJpYW5nbGUtZG93blwiIC8+fVxuICAgICAgICAgICAgICBtYXhUYWdQbGFjZWhvbGRlcj17dGhpcy5nZXRNYXhUYWdQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PVwi5peg5Yy56YWN57uT5p6cXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgcHJlZml4Q2xzPVwiYWR1aS10cmVlLXNlbGVjdFwiXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlU2VsZWN0fVxuICAgICAgICAgICAgICByZW1vdmVJY29uPXs8SWNvbiBpY29uPVwiY2FuY2VsXCIgaW50ZXJhY3RpdmUgc2l6ZT17MTZ9IC8+fVxuICAgICAgICAgICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5PXtcbiAgICAgICAgICAgICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5ICYmIHN0cmF0ZWdpZXNbc2hvd0NoZWNrZWRTdHJhdGVneV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzaG93U2VhcmNoPXttdWx0aXBsZX1cbiAgICAgICAgICAgICAgc3dpdGNoZXJJY29uPXt0aGlzLnJlbmRlclN3aXRjaGVySWNvbn1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJzbGlkZS11cFwiXG4gICAgICAgICAgICAgIHRyZWVDaGVja2FibGU9e2NoZWNrYm94fVxuICAgICAgICAgICAgICB0cmVlTm9kZUZpbHRlclByb3A9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGxpc3RJdGVtSGVpZ2h0PXszNn1cbiAgICAgICAgICAgICAgbGlzdEhlaWdodD17MjgwfVxuICAgICAgICAgICAgICB0cmVlRGF0YT17dHJlZURhdGEgfHwgY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKX1cbiAgICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9SY1RyZWVTZWxlY3Q+XG4gICAgICAgICAgICB7ISFyaWdodEljb24gJiYgbXVsdGlwbGUgJiYgKFxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXtyaWdodEljb259IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtaWNvblwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlU2VsZWN0XG4iXX0=