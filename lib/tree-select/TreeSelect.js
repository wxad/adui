"use strict";

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIm5vZGVzIiwibWFwIiwibm9kZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInRpdGxlIiwicmVzdFByb3BzIiwiZGF0YSIsImRhdGFUaXRsZSIsImNoaWxkRGF0YSIsImxlbmd0aCIsImZpbHRlciIsIlRyZWVTZWxlY3QiLCJzZWxlY3QiLCJ3cmFwcGVyIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsInNldFN0YXRlIiwiaGFuZGxlU2VhcmNoIiwidmFsIiwib25TZWFyY2giLCJmaWx0ZXJUcmVlTm9kZSIsImlucHV0IiwidHJlZU5vZGUiLCJTdHJpbmciLCJpbmNsdWRlcyIsImdldE1heFRhZ0NvdW50IiwibWF4VGFnQ291bnQiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsInJlc3VsdFJlbmRlciIsInBsYWNlaG9sZGVyVGV4dCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGFiZWwiLCJpIiwidmFscyIsIm8iLCJzcGxpY2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibGlzdGVuSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiY29tcG9uZW50RGlkTW91bnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZGVmYXVsdFZhbHVlIiwidmFsdWVTdGF0ZSIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiY2xhc3NOYW1lIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtdWx0aXBsZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJ0cmVlRGF0YSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJUcmVlTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxrQkFBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCLGNBQVlDLHNCQURLO0FBRWpCLGdCQUFjQyx3QkFGRztBQUdqQixpQkFBZUM7QUFIRSxDQUFuQjs7QUF1REEsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQWdCO0FBQzVDLFNBQU8seUJBQVFBLEtBQVIsRUFDSkMsR0FESSxDQUNBLFVBQUNDLElBQUQsRUFBOEI7QUFDakMsUUFBSSxDQUFDQyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJGLElBQXJCLENBQUQsSUFBK0IsQ0FBQ0EsSUFBSSxDQUFDRyxJQUF6QyxFQUErQztBQUM3QyxhQUFPLElBQVA7QUFDRDs7QUFIZ0MsZUFPN0JILElBUDZCO0FBQUEsUUFLL0JJLEdBTCtCLFFBSy9CQSxHQUwrQjtBQUFBLDBCQU0vQkMsS0FOK0I7QUFBQSxRQU10QkMsUUFOc0IsY0FNdEJBLFFBTnNCO0FBQUEsUUFNWkMsS0FOWSxjQU1aQSxLQU5ZO0FBQUEsUUFNTEMsT0FOSyxjQU1MQSxPQU5LO0FBQUEsUUFNSUMsWUFOSixjQU1JQSxZQU5KO0FBQUEsUUFNa0JDLEtBTmxCLGNBTWtCQSxLQU5sQjtBQUFBLFFBTTRCQyxTQU41Qjs7QUFZakMsUUFBTUMsSUFBSTtBQUNSUixNQUFBQSxHQUFHLEVBQUhBLEdBRFE7QUFFUkcsTUFBQUEsS0FBSyxFQUFMQSxLQUZRO0FBR1JNLE1BQUFBLFNBQVMsRUFBRUgsS0FISDtBQUlSQSxNQUFBQSxLQUFLLEVBQUVGLE9BQU8sR0FDWiwwQ0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FBK0NFLEtBQS9DLENBREYsRUFFRSxvQkFBQyxtQkFBRDtBQUFTLFFBQUEsS0FBSyxFQUFFRixPQUFoQjtBQUF5QixRQUFBLFNBQVMsRUFBQztBQUFuQyxTQUErQ0MsWUFBL0MsR0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsUUFERixDQUZGLENBRFksR0FRWkM7QUFaTSxPQWNMQyxTQWRLLENBQVY7O0FBaUJBLFFBQU1HLFNBQVMsR0FBR2pCLHFCQUFxQixDQUFDUyxRQUFELENBQXZDOztBQUNBLFFBQUlRLFNBQVMsQ0FBQ0MsTUFBZCxFQUFzQjtBQUNwQkgsTUFBQUEsSUFBSSxDQUFDTixRQUFMLEdBQWdCUSxTQUFoQjtBQUNEOztBQUVELFdBQU9GLElBQVA7QUFDRCxHQXBDSSxFQXFDSkksTUFyQ0ksQ0FxQ0csVUFBQUosSUFBSTtBQUFBLFdBQUlBLElBQUo7QUFBQSxHQXJDUCxDQUFQO0FBc0NELENBdkNEOztJQTRDTUssVTs7Ozs7QUEwSEosc0JBQVlaLEtBQVosRUFBcUM7QUFBQTs7QUFBQTs7QUFDbkMsOEJBQU1BLEtBQU47QUFEbUMsVUFKOUJhLE1BSThCO0FBQUEsVUFGOUJDLE9BRThCOztBQUFBLFVBVTlCQyxxQkFWOEIsR0FVTixVQUM3QkMsU0FENkIsRUFFN0JDLFNBRjZCO0FBQUEsYUFJN0IsQ0FBQyw4QkFBYSxNQUFLakIsS0FBbEIsRUFBeUJnQixTQUF6QixDQUFELElBQXdDLENBQUMsOEJBQWEsTUFBS0UsS0FBbEIsRUFBeUJELFNBQXpCLENBSlo7QUFBQSxLQVZNOztBQUFBLFVBZ0I5QkUsVUFoQjhCLEdBZ0JqQixVQUFDeEIsSUFBRCxFQUEyQjtBQUM3QyxZQUFLa0IsTUFBTCxHQUFjbEIsSUFBZDtBQUNELEtBbEJvQzs7QUFBQSxVQW9COUJ5QixXQXBCOEIsR0FvQmhCLFVBQUN6QixJQUFELEVBQTBCO0FBQzdDLFlBQUttQixPQUFMLEdBQWVuQixJQUFmO0FBQ0QsS0F0Qm9DOztBQUFBLFVBd0I5QjBCLGtCQXhCOEIsR0F3QlQsaUJBQXlDO0FBQUEsVUFBdENDLE1BQXNDLFNBQXRDQSxNQUFzQztBQUFBLFVBQTlCQyxPQUE4QixTQUE5QkEsT0FBOEI7O0FBQ25FLFVBQUlBLE9BQUosRUFBYTtBQUNYLGVBQU8sb0JBQUMsbUJBQUQ7QUFBUyxVQUFBLElBQUksRUFBQyxNQUFkO0FBQXFCLFVBQUEsU0FBUyxFQUFDO0FBQS9CLFVBQVA7QUFDRDs7QUFDRCxVQUFJRCxNQUFKLEVBQVk7QUFDVixlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUNFLG9CQUFDLGdCQUFEO0FBQU0sUUFBQSxJQUFJLEVBQUMsYUFBWDtBQUF5QixRQUFBLFNBQVMsRUFBQztBQUFuQyxRQURGO0FBR0QsS0FsQ29DOztBQUFBLFVBb0M5QkUsWUFwQzhCLEdBb0NmLFVBQUN0QixLQUFELEVBQTBCO0FBQUEsd0JBQ0csTUFBS0YsS0FEUjtBQUFBLFVBQ3RDeUIsUUFEc0MsZUFDdENBLFFBRHNDO0FBQUEsVUFDNUJDLFFBRDRCLGVBQzVCQSxRQUQ0QjtBQUFBLFVBQ1hDLFNBRFcsZUFDbEJ6QixLQURrQjs7QUFFOUMsVUFBSSxDQUFDdUIsUUFBTCxFQUFlO0FBQ2IsWUFBSUUsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLGdCQUFLQyxRQUFMLENBQWM7QUFBRTFCLFlBQUFBLEtBQUssRUFBTEE7QUFBRixXQUFkO0FBQ0Q7O0FBQ0QsWUFBSXdCLFFBQUosRUFBYztBQUNaQSxVQUFBQSxRQUFRLENBQUN4QixLQUFELENBQVI7QUFDRDtBQUNGO0FBQ0YsS0E5Q29DOztBQUFBLFVBZ0Q5QjJCLFlBaEQ4QixHQWdEZixVQUFDQyxHQUFELEVBQWlCO0FBQUEsVUFDN0JDLFFBRDZCLEdBQ2hCLE1BQUsvQixLQURXLENBQzdCK0IsUUFENkI7O0FBRXJDLFVBQUlBLFFBQUosRUFBYztBQUNaQSxRQUFBQSxRQUFRLENBQUNELEdBQUQsQ0FBUjtBQUNEO0FBQ0YsS0FyRG9DOztBQUFBLFVBdUQ5QkUsY0F2RDhCLEdBdURiLFVBQUNDLEtBQUQsRUFBZ0JDLFFBQWhCLEVBQWtDO0FBQUEsVUFDaERuQyxHQURnRCxHQUNmbUMsUUFEZSxDQUNoRG5DLEdBRGdEO0FBQUEsVUFDM0NNLEtBRDJDLEdBQ2Y2QixRQURlLENBQzNDN0IsS0FEMkM7QUFBQSxVQUNwQ0gsS0FEb0MsR0FDZmdDLFFBRGUsQ0FDcENoQyxLQURvQztBQUFBLFVBQzdCTSxTQUQ2QixHQUNmMEIsUUFEZSxDQUM3QjFCLFNBRDZCOztBQUV4RCxVQUFJLENBQUNULEdBQUQsSUFBUSxDQUFDRyxLQUFiLEVBQW9CO0FBQ2xCLGVBQU8sS0FBUDtBQUNEOztBQUNELGFBQU9pQyxNQUFNLENBQUMzQixTQUFTLElBQUlILEtBQWQsQ0FBTixDQUEyQitCLFFBQTNCLENBQW9DSCxLQUFwQyxDQUFQO0FBQ0QsS0E3RG9DOztBQUFBLFVBK0Q5QkksY0EvRDhCLEdBK0RiLFlBQU07QUFBQSxVQUNwQkMsV0FEb0IsR0FDSixNQUFLdEMsS0FERCxDQUNwQnNDLFdBRG9CO0FBQUEsVUFFcEJwQyxLQUZvQixHQUVWLE1BQUtnQixLQUZLLENBRXBCaEIsS0FGb0I7O0FBSTVCLFVBQUksQ0FBQ29DLFdBQUQsSUFBZ0IsQ0FBQ3BDLEtBQWpCLElBQTBCQSxLQUFLLENBQUNRLE1BQU4sSUFBZ0I0QixXQUE5QyxFQUEyRDtBQUN6RCxlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPLENBQVA7QUFDRCxLQXZFb0M7O0FBQUEsVUF5RTlCQyxvQkF6RThCLEdBeUVQLFVBQUM5QyxLQUFELEVBQXdCO0FBQ3BELFVBQUksQ0FBQyxNQUFLb0IsTUFBVixFQUFrQjtBQUNoQixlQUFPLElBQVA7QUFDRDs7QUFIbUQseUJBSVYsTUFBS2IsS0FKSztBQUFBLFVBSTVDMEIsUUFKNEMsZ0JBSTVDQSxRQUo0QztBQUFBLFVBSWxDYyxZQUprQyxnQkFJbENBLFlBSmtDO0FBQUEsVUFJcEJ0QyxLQUpvQixnQkFJcEJBLEtBSm9COztBQU1wRCxVQUFJc0MsWUFBSixFQUFrQjtBQUNoQixlQUFPQSxZQUFZLENBQUMvQyxLQUFELENBQW5CO0FBQ0Q7O0FBUm1ELFVBVTVDaUIsTUFWNEMsR0FVakNqQixLQVZpQyxDQVU1Q2lCLE1BVjRDO0FBV3BELFVBQU0rQixlQUFlLEdBQ25CLDBDQUNFO0FBQU0sUUFBQSxLQUFLLEVBQUU7QUFBRUMsVUFBQUEsT0FBTyxFQUFFLGNBQVg7QUFBMkJDLFVBQUFBLGFBQWEsRUFBRTtBQUExQztBQUFiLFNBQ0dsRCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNtRCxLQURaLENBREYsRUFJRTtBQUFNLFFBQUEsS0FBSyxFQUFFO0FBQUVGLFVBQUFBLE9BQU8sRUFBRSxjQUFYO0FBQTJCQyxVQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBYix1QkFDUWpDLE1BRFIsWUFKRixDQURGO0FBV0EsYUFDRSxvQkFBQyxtQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLEtBRGI7QUFFRSxRQUFBLFNBQVMsRUFBQyxLQUZaO0FBR0UsUUFBQSxLQUFLLEVBQ0g7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLFdBQ0dqQixLQUFLLENBQUNDLEdBQU4sQ0FBVSxpQkFBMkJtRCxDQUEzQixFQUFpQztBQUFBLGNBQTlCOUMsR0FBOEIsU0FBOUJBLEdBQThCO0FBQUEsY0FBekIwQixRQUF5QixTQUF6QkEsUUFBeUI7QUFBQSxjQUFmbUIsS0FBZSxTQUFmQSxLQUFlO0FBQzFDLGlCQUNFO0FBQUssWUFBQSxTQUFTLEVBQUMsbUNBQWY7QUFBbUQsWUFBQSxHQUFHLEVBQUU3QztBQUF4RCxhQUNFLGtDQUFPNkMsS0FBUCxDQURGLEVBRUcsQ0FBQ25CLFFBQUQsSUFDQyxvQkFBQyxnQkFBRDtBQUNFLFlBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLGtCQUFNcUIsSUFBSSxHQUFHckQsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQXFELENBQUM7QUFBQSx1QkFBSUEsQ0FBQyxDQUFDN0MsS0FBTjtBQUFBLGVBQVgsQ0FBYjtBQUNBNEMsY0FBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVlILENBQVosRUFBZSxDQUFmOztBQUNBLGtCQUFJM0MsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsc0JBQUswQixRQUFMLENBQWM7QUFBRTFCLGtCQUFBQSxLQUFLLEVBQUU0QztBQUFULGlCQUFkO0FBQ0Q7O0FBQ0Qsa0JBQUlwQixRQUFKLEVBQWM7QUFDWkEsZ0JBQUFBLFFBQVEsQ0FBQ29CLElBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFYSCxZQUhKLENBREY7QUFvQkQsU0FyQkEsQ0FESCxDQUpKO0FBNkJFLFFBQUEsY0FBYyxFQUFDO0FBN0JqQixTQStCRTtBQUNFLFFBQUEsU0FBUyxFQUFDLGlDQURaO0FBRUUsUUFBQSxJQUFJLEVBQUMsTUFGUDtBQUdFLFFBQUEsT0FBTyxFQUFFLGlCQUFBRyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ0MsZUFBRixFQUFKO0FBQUE7QUFIWixTQUtHVCxlQUxILEVBTUUsb0JBQUMsZ0JBQUQ7QUFDRSxRQUFBLElBQUksRUFBQyxRQURQO0FBRUUsUUFBQSxJQUFJLEVBQUUsRUFGUjtBQUdFLFFBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsY0FBSXZDLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLGtCQUFLMEIsUUFBTCxDQUFjO0FBQUUxQixjQUFBQSxLQUFLLEVBQUU7QUFBVCxhQUFkO0FBQ0Q7O0FBQ0QsY0FBSXdCLFFBQUosRUFBYztBQUNaQSxZQUFBQSxRQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0Q7QUFDRjtBQVZILFFBTkYsQ0EvQkYsQ0FERjtBQXFERCxLQXBKb0M7O0FBQUEsVUFzSnJDeUIsaUJBdEpxQyxHQXNKakIsVUFBQ0YsQ0FBRCxFQUFZO0FBQUEsVUFFbEIvQyxLQUZrQixHQUkxQitDLENBSjBCLENBRTVCRyxNQUY0QixDQUVsQmxELEtBRmtCO0FBQUEsVUFHNUJtRCxPQUg0QixHQUkxQkosQ0FKMEIsQ0FHNUJJLE9BSDRCOztBQU05QixVQUFJQSxPQUFPLEtBQUssQ0FBWixJQUFpQm5ELEtBQUssS0FBSyxFQUEvQixFQUFtQztBQUNqQytDLFFBQUFBLENBQUMsQ0FBQ0MsZUFBRjtBQUNEO0FBQ0YsS0EvSm9DOztBQUFBLFVBaUs5QkksaUJBaks4QixHQWlLVixZQUFNO0FBQy9CLFVBQU1yQixLQUFLLEdBQUcsTUFBS25CLE9BQUwsQ0FBYXlDLGFBQWIsQ0FBMkIsT0FBM0IsQ0FBZDs7QUFEK0IseUJBRXFCLE1BQUt2RCxLQUYxQjtBQUFBLFVBRXZCc0MsV0FGdUIsZ0JBRXZCQSxXQUZ1QjtBQUFBLFVBRVZrQixXQUZVLGdCQUVWQSxXQUZVO0FBQUEsVUFFR0MsYUFGSCxnQkFFR0EsYUFGSDtBQUFBLFVBR3ZCdkQsS0FIdUIsR0FHYixNQUFLZ0IsS0FIUSxDQUd2QmhCLEtBSHVCOztBQUsvQixVQUFJK0IsS0FBSixFQUFXO0FBRVRBLFFBQUFBLEtBQUssQ0FBQ3lCLGdCQUFOLENBQXVCLFNBQXZCLEVBQWtDLE1BQUtQLGlCQUF2QyxFQUEwRCxLQUExRDtBQUNEOztBQUVELFVBQUliLFdBQVcsS0FBSyxJQUFoQixJQUF3QnBDLEtBQTVCLEVBQW1DO0FBQ2pDLGNBQUt5RCxXQUFMO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDRixhQUFELElBQWtCLE1BQUszQyxPQUEzQixFQUFvQztBQUNsQyxZQUFJbUIsS0FBSixFQUFXO0FBQ1RBLFVBQUFBLEtBQUssQ0FBQ3VCLFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0Q7QUFDRjtBQUNGLEtBbkxvQzs7QUFBQSxVQXFMOUJJLGtCQXJMOEIsR0FxTFQsWUFBTTtBQUFBLFVBQ3hCSCxhQUR3QixHQUNOLE1BQUt6RCxLQURDLENBQ3hCeUQsYUFEd0I7O0FBU2hDLFVBQUksQ0FBQ0EsYUFBTCxFQUFvQjtBQUNsQkksUUFBQUEsTUFBTSxDQUFDQyxhQUFQLENBQXFCLElBQUlDLEtBQUosQ0FBVSxRQUFWLENBQXJCO0FBQ0Q7QUFDRixLQWpNb0M7O0FBQUEsUUFFM0I3RCxNQUYyQixHQUVIRixLQUZHLENBRTNCRSxLQUYyQjtBQUFBLFFBRXBCOEQsWUFGb0IsR0FFSGhFLEtBRkcsQ0FFcEJnRSxZQUZvQjtBQUduQyxRQUFNQyxVQUFVLEdBQUcvRCxNQUFLLEtBQUssSUFBVixHQUFpQkEsTUFBakIsR0FBeUI4RCxZQUE1QztBQUVBLFVBQUs5QyxLQUFMLEdBQWE7QUFDWGhCLE1BQUFBLEtBQUssRUFBRStEO0FBREksS0FBYjtBQUxtQztBQVFwQzs7Ozs2QkEyTGU7QUFBQTs7QUFBQSx5QkFnQlYsS0FBS2pFLEtBaEJLO0FBQUEsVUFFWmtFLG9CQUZZLGdCQUVaQSxvQkFGWTtBQUFBLFVBR1pqRSxRQUhZLGdCQUdaQSxRQUhZO0FBQUEsVUFJWmtFLFNBSlksZ0JBSVpBLFNBSlk7QUFBQSxVQUtaQyxpQkFMWSxnQkFLWkEsaUJBTFk7QUFBQSxVQU1aOUIsV0FOWSxnQkFNWkEsV0FOWTtBQUFBLFVBT1orQixRQVBZLGdCQU9aQSxRQVBZO0FBQUEsVUFRWkMsU0FSWSxnQkFRWkEsU0FSWTtBQUFBLFVBU1pkLFdBVFksZ0JBU1pBLFdBVFk7QUFBQSxVQVVaZSxTQVZZLGdCQVVaQSxTQVZZO0FBQUEsVUFXWi9CLFlBWFksZ0JBV1pBLFlBWFk7QUFBQSxVQVlaaUIsYUFaWSxnQkFZWkEsYUFaWTtBQUFBLFVBYVplLG1CQWJZLGdCQWFaQSxtQkFiWTtBQUFBLFVBY1pDLFFBZFksZ0JBY1pBLFFBZFk7QUFBQSxVQWVUQyxVQWZTOztBQWtCZCxVQUFNcEUsU0FBYyxHQUFHLHNCQUFLb0UsVUFBTCxFQUFpQixDQUN0QyxVQURzQyxFQUV0QyxVQUZzQyxFQUd0QyxjQUhzQyxFQUl0QyxPQUpzQyxDQUFqQixDQUF2QjtBQWxCYyxVQXlCTnhFLEtBekJNLEdBeUJJLEtBQUtnQixLQXpCVCxDQXlCTmhCLEtBekJNO0FBMkJkLFVBQU15RSxRQUFRLEdBQUcsNEJBQVdSLFNBQVgsWUFBeUJqRixNQUF6Qiw2Q0FDWEEsTUFEVyxvQkFDYSxDQUFDdUUsYUFEZCxFQUFqQjtBQUlBLFVBQUltQixRQUFhLEdBQUdQLFFBQXBCOztBQUNBLFVBQUlBLFFBQUosRUFBYztBQUNaTyxRQUFBQSxRQUFRLEdBQ04saUNBQ0U7QUFDRSxVQUFBLEtBQUssRUFBQyxJQURSO0FBRUUsVUFBQSxNQUFNLEVBQUMsSUFGVDtBQUdFLFVBQUEsU0FBUyxFQUFDO0FBSFosV0FLRTtBQUNFLFVBQUEsQ0FBQyxFQUFDLEdBREo7QUFFRSxVQUFBLENBQUMsRUFBQyxHQUZKO0FBR0UsVUFBQSxLQUFLLEVBQUMsSUFIUjtBQUlFLFVBQUEsTUFBTSxFQUFDLEdBSlQ7QUFLRSxVQUFBLEVBQUUsRUFBQyxJQUxMO0FBTUUsVUFBQSxJQUFJLEVBQUMsTUFOUDtBQU9FLFVBQUEsUUFBUSxFQUFDO0FBUFgsVUFMRixDQURGLEVBZ0JFO0FBQ0UsVUFBQSxLQUFLLEVBQUMsSUFEUjtBQUVFLFVBQUEsTUFBTSxFQUFDLElBRlQ7QUFHRSxVQUFBLFNBQVMsRUFBQztBQUhaLFdBS0U7QUFDRSxVQUFBLENBQUMsRUFBQyxtTUFESjtBQUVFLFVBQUEsUUFBUSxFQUFDO0FBRlgsVUFMRixDQWhCRixDQURGO0FBNkJEOztBQUVELFVBQUkxRSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQkksUUFBQUEsU0FBUyxDQUFDSixLQUFWLEdBQWtCQSxLQUFsQjtBQUNEOztBQUVELFVBQUlvQyxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEIsWUFBTXVDLEtBQUssR0FBRyxLQUFLeEMsY0FBTCxFQUFkOztBQUNBLFlBQUl3QyxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQnZFLFVBQUFBLFNBQVMsQ0FBQ2dDLFdBQVYsR0FBd0J1QyxLQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSXJDLFlBQUosRUFBa0I7QUFDaEJsQyxRQUFBQSxTQUFTLENBQUNnQyxXQUFWLEdBQXdCLENBQXhCO0FBQ0Q7O0FBRUQsYUFDRSxvQkFBQyw2QkFBRCxDQUFlLFFBQWYsUUFDRztBQUFBLFlBQXNCd0Msd0JBQXRCLFNBQUdWLGlCQUFIO0FBQUEsZUFDQztBQUNFLFVBQUEsU0FBUyxFQUFFLDRCQUFXLDBCQUFYLEVBQXVDO0FBQ2hELCtDQUFtQyxNQUFJLENBQUMvQixjQUFMLE9BQTBCLElBRGI7QUFFaEQscURBQXlDLENBQUMsQ0FBQ0c7QUFGSyxXQUF2QyxDQURiO0FBS0UsVUFBQSxHQUFHLEVBQUUsTUFBSSxDQUFDcEI7QUFMWixXQU9FLG9CQUFDLHdCQUFEO0FBQ0UsVUFBQSxvQkFBb0IsRUFDbEJxQyxhQUFhLEdBQUdTLG9CQUFILEdBQTBCLEtBRjNDO0FBSUUsVUFBQSxTQUFTLEVBQUVTLFFBSmI7QUFLRSxVQUFBLGlCQUFpQixZQUFLekYsTUFBTCx1QkFDZm1GLFFBQVEsR0FBRyxVQUFILEdBQWdCLFFBRFQsQ0FMbkI7QUFRRSxVQUFBLGtCQUFrQixFQUNoQkMsU0FBUyxJQUFJLDRCQUFjO0FBQUVTLFlBQUFBLFNBQVMsRUFBRTtBQUFiLFdBQWQsRUFBbUNULFNBQW5DLENBVGpCO0FBV0UsVUFBQSxjQUFjLEVBQUUsTUFBSSxDQUFDdEMsY0FYdkI7QUFZRSxVQUFBLGlCQUFpQixFQUFFb0MsaUJBQWlCLElBQUlVLHdCQVoxQztBQWFFLFVBQUEsU0FBUyxFQUFFLG9CQUFDLGdCQUFEO0FBQU0sWUFBQSxJQUFJLEVBQUM7QUFBWCxZQWJiO0FBY0UsVUFBQSxpQkFBaUIsRUFBRSxNQUFJLENBQUN2QyxvQkFkMUI7QUFlRSxVQUFBLGVBQWUsRUFBQyxnQ0FmbEI7QUFnQkUsVUFBQSxRQUFRLEVBQUUsTUFBSSxDQUFDZixZQWhCakI7QUFpQkUsVUFBQSxRQUFRLEVBQUUsTUFBSSxDQUFDSyxZQWpCakI7QUFrQkUsVUFBQSxXQUFXLEVBQUUyQixXQWxCZjtBQW1CRSxVQUFBLFNBQVMsRUFBQyxrQkFuQlo7QUFvQkUsVUFBQSxHQUFHLEVBQUUsTUFBSSxDQUFDckMsVUFwQlo7QUFxQkUsVUFBQSxVQUFVLEVBQUUsb0JBQUMsZ0JBQUQ7QUFBTSxZQUFBLElBQUksRUFBQyxRQUFYO0FBQW9CLFlBQUEsV0FBVyxNQUEvQjtBQUFnQyxZQUFBLElBQUksRUFBRTtBQUF0QyxZQXJCZDtBQXNCRSxVQUFBLG1CQUFtQixFQUNqQnFELG1CQUFtQixJQUFJcEYsVUFBVSxDQUFDb0YsbUJBQUQsQ0F2QnJDO0FBeUJFLFVBQUEsVUFBVSxFQUFFSCxRQXpCZDtBQTBCRSxVQUFBLFlBQVksRUFBRSxNQUFJLENBQUNoRCxrQkExQnJCO0FBMkJFLFVBQUEsY0FBYyxFQUFDLFVBM0JqQjtBQTRCRSxVQUFBLGFBQWEsRUFBRXVELFFBNUJqQjtBQTZCRSxVQUFBLGtCQUFrQixFQUFDLE9BN0JyQjtBQThCRSxVQUFBLGNBQWMsRUFBRSxFQTlCbEI7QUErQkUsVUFBQSxVQUFVLEVBQUUsR0EvQmQ7QUFnQ0UsVUFBQSxRQUFRLEVBQUVILFFBQVEsSUFBSWpGLHFCQUFxQixDQUFDUyxRQUFEO0FBaEM3QyxXQWlDTUssU0FqQ04sR0FtQ0dMLFFBbkNILENBUEYsRUE0Q0csQ0FBQyxDQUFDc0UsU0FBRixJQUFlRixRQUFmLElBQ0Msb0JBQUMsZ0JBQUQ7QUFBTSxVQUFBLElBQUksRUFBRUUsU0FBWjtBQUF1QixVQUFBLFNBQVMsRUFBQztBQUFqQyxVQTdDSixDQUREO0FBQUEsT0FESCxDQURGO0FBc0REOzs7O0VBbGNzQjNFLEtBQUssQ0FBQ29GLFM7O0FBQXpCcEUsVSxDQUNVcUUsUyxHQUFZO0FBSXhCZixFQUFBQSxvQkFBb0IsRUFBRWdCLHNCQUFVQyxJQUpSO0FBUXhCaEIsRUFBQUEsU0FBUyxFQUFFZSxzQkFBVUUsTUFSRztBQVl4QnBCLEVBQUFBLFlBQVksRUFBRWtCLHNCQUFVRyxTQUFWLENBQW9CLENBQUNILHNCQUFVRSxNQUFYLEVBQW1CRixzQkFBVUksS0FBN0IsQ0FBcEIsQ0FaVTtBQWdCeEI3RCxFQUFBQSxRQUFRLEVBQUV5RCxzQkFBVUMsSUFoQkk7QUFvQnhCZixFQUFBQSxpQkFBaUIsRUFBRWMsc0JBQVVLLElBcEJMO0FBd0J4QmpELEVBQUFBLFdBQVcsRUFBRTRDLHNCQUFVTSxNQXhCQztBQTRCeEJuQixFQUFBQSxRQUFRLEVBQUVhLHNCQUFVQyxJQTVCSTtBQWdDeEJ6RCxFQUFBQSxRQUFRLEVBQUV3RCxzQkFBVUssSUFoQ0k7QUFvQ3hCeEQsRUFBQUEsUUFBUSxFQUFFbUQsc0JBQVVLLElBcENJO0FBd0N4QmpCLEVBQUFBLFNBQVMsRUFBRVksc0JBQVVPLEtBQVYsQ0FBZ0IsQ0FDekIsS0FEeUIsRUFFekIsTUFGeUIsRUFHekIsT0FIeUIsRUFJekIsUUFKeUIsRUFLekIsU0FMeUIsRUFNekIsVUFOeUIsRUFPekIsWUFQeUIsRUFRekIsYUFSeUIsRUFTekIsU0FUeUIsRUFVekIsWUFWeUIsRUFXekIsVUFYeUIsRUFZekIsYUFaeUIsQ0FBaEIsQ0F4Q2E7QUF5RHhCakMsRUFBQUEsV0FBVyxFQUFFMEIsc0JBQVVFLE1BekRDO0FBNkR4QjVDLEVBQUFBLFlBQVksRUFBRTBDLHNCQUFVSyxJQTdEQTtBQWlFeEI5QixFQUFBQSxhQUFhLEVBQUV5QixzQkFBVUMsSUFqRUQ7QUFxRXhCWixFQUFBQSxTQUFTLEVBQUVXLHNCQUFVRSxNQXJFRztBQTRFeEJaLEVBQUFBLG1CQUFtQixFQUFFVSxzQkFBVU8sS0FBVixDQUFnQixDQUNuQyxVQURtQyxFQUVuQyxhQUZtQyxFQUduQyxZQUhtQyxDQUFoQixDQTVFRztBQW9GeEJ2RixFQUFBQSxLQUFLLEVBQUVnRixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVJLEtBQTdCLENBQXBCO0FBcEZpQixDO0FBRHRCMUUsVSxDQXdGVThFLFksR0FBaUM7QUFDN0N4QixFQUFBQSxvQkFBb0IsRUFBRSxLQUR1QjtBQUU3Q0MsRUFBQUEsU0FBUyxFQUFFd0IsU0FGa0M7QUFHN0MzQixFQUFBQSxZQUFZLEVBQUUsSUFIK0I7QUFJN0N2QyxFQUFBQSxRQUFRLEVBQUUsS0FKbUM7QUFLN0MyQyxFQUFBQSxpQkFBaUIsRUFBRSxJQUwwQjtBQU03QzlCLEVBQUFBLFdBQVcsRUFBRSxJQU5nQztBQU83QytCLEVBQUFBLFFBQVEsRUFBRSxJQVBtQztBQVE3QzNDLEVBQUFBLFFBQVEsRUFBRXZDLElBUm1DO0FBUzdDNEMsRUFBQUEsUUFBUSxFQUFFNUMsSUFUbUM7QUFVN0NtRixFQUFBQSxTQUFTLEVBQUUsWUFWa0M7QUFXN0NkLEVBQUFBLFdBQVcsRUFBRSxLQVhnQztBQVk3Q2hCLEVBQUFBLFlBQVksRUFBRSxJQVorQjtBQWE3Q2lCLEVBQUFBLGFBQWEsRUFBRSxJQWI4QjtBQWM3Q2MsRUFBQUEsU0FBUyxFQUFFLE1BZGtDO0FBZTdDQyxFQUFBQSxtQkFBbUIsRUFBRSxhQWZ3QjtBQWdCN0N0RSxFQUFBQSxLQUFLLEVBQUU7QUFoQnNDLEM7O0FBeEYzQ1UsVSxDQTJHVWdGLHdCLEdBQTJCLGlCQUFpQztBQUFBLE1BQTlCMUYsS0FBOEIsU0FBOUJBLEtBQThCOztBQUN4RSxNQUFJQSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixXQUFPO0FBQ0xBLE1BQUFBLEtBQUssRUFBTEE7QUFESyxLQUFQO0FBR0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQzs7QUFsSEdVLFUsQ0FvSFVpRixRLEdBQTRCQSxzQjtBQWlWNUMscUNBQVNqRixVQUFUO2VBRWVBLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJjVHJlZVNlbGVjdCwge1xuICBTSE9XX0FMTCxcbiAgU0hPV19QQVJFTlQsXG4gIFNIT1dfQ0hJTEQsXG4gIFRyZWVOb2RlLFxufSBmcm9tIFwicmMtdHJlZS1zZWxlY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL3NwaW5uZXJcIlxuaW1wb3J0IGdldFBsYWNlbWVudHMgZnJvbSBcIi4uL3Rvb2x0aXAvcGxhY2VtZW50c1wiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10cmVlLXNlbGVjdFwiXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3Qgc3RyYXRlZ2llcyA9IHtcbiAgXCJzaG93LWFsbFwiOiBTSE9XX0FMTCxcbiAgXCJzaG93LWNoaWxkXCI6IFNIT1dfQ0hJTEQsXG4gIFwic2hvdy1wYXJlbnRcIjogU0hPV19QQVJFTlQsXG59XG5cbmV4cG9ydCB0eXBlIFRyZWVOb2RlVmFsdWUgPSBzdHJpbmdbXSB8IG51bWJlcltdIHwgbnVsbFxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBrZXk6IHN0cmluZ1xuICBkaXNhYmxlZDogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlU2VsZWN0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWU/OiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBkZWZhdWx0VmFsdWU/OiBUcmVlTm9kZVZhbHVlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBnZXRQb3B1cENvbnRhaW5lcj86IG51bGwgfCAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBIVE1MRWxlbWVudClcbiAgbWF4VGFnQ291bnQ/OiBudWxsIHwgbnVtYmVyXG4gIG11bHRpcGxlPzogYm9vbGVhblxuICBvbkNoYW5nZT86ICh2YWx1ZTogVHJlZU5vZGVWYWx1ZSkgPT4gdm9pZFxuICBvblNlYXJjaD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICByZXN1bHRSZW5kZXI/OiBudWxsIHwgKCh2YWx1ZXM6IElUcmVlTm9kZVtdKSA9PiBKU1guRWxlbWVudClcbiAgcmVzdWx0VmlzaWJsZT86IGJvb2xlYW5cbiAgc2hvd0NoZWNrZWRTdHJhdGVneT86IFwic2hvdy1hbGxcIiB8IFwic2hvdy1jaGlsZFwiIHwgXCJzaG93LXBhcmVudFwiXG4gIHZhbHVlPzogVHJlZU5vZGVWYWx1ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlU2VsZWN0U3RhdGUge1xuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY2hlY2thYmxlPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICB0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZVxuICBrZXk/OiBzdHJpbmdcbiAgZXZlbnRLZXk/OiBzdHJpbmdcbiAgaXNMZWFmPzogYm9vbGVhblxuICBjaGVja2VkPzogYm9vbGVhblxuICBleHBhbmRlZD86IGJvb2xlYW5cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgc2VsZWN0ZWQ/OiBib29sZWFuXG4gIHNlbGVjdGFibGU/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IGNvbnZlcnRDaGlsZHJlblRvRGF0YSA9IChub2RlczogYW55KSA9PiB7XG4gIHJldHVybiB0b0FycmF5KG5vZGVzKVxuICAgIC5tYXAoKG5vZGU6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChub2RlKSB8fCAhbm9kZS50eXBlKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICBjb25zdCB7XG4gICAgICAgIGtleSxcbiAgICAgICAgcHJvcHM6IHsgY2hpbGRyZW4sIHZhbHVlLCBwb3BvdmVyLCBwb3BvdmVyUHJvcHMsIHRpdGxlLCAuLi5yZXN0UHJvcHMgfSxcbiAgICAgIH0gPSBub2RlIGFzIFJlYWN0LlJlYWN0RWxlbWVudFxuXG4gICAgICAvKipcbiAgICAgICAqIOWmguaenOaciSBwb3BvdmVyIOWImeWcqOi/memHjOWMheijheS4gOS4iyB0aXRsZVxuICAgICAgICovXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBkYXRhVGl0bGU6IHRpdGxlLFxuICAgICAgICB0aXRsZTogcG9wb3ZlciA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXBvcC10cmlnZ2VyXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPFBvcG92ZXIgcG9wdXA9e3BvcG92ZXJ9IHBsYWNlbWVudD1cInJpZ2h0XCIgey4uLnBvcG92ZXJQcm9wc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlclwiIC8+XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgKSxcbiAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZERhdGEgPSBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pXG4gICAgICBpZiAoY2hpbGREYXRhLmxlbmd0aCkge1xuICAgICAgICBkYXRhLmNoaWxkcmVuID0gY2hpbGREYXRhXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgICAuZmlsdGVyKGRhdGEgPT4gZGF0YSlcbn1cblxuLyoqXG4gKiDmoJHlvaLpgInmi6lcbiAqL1xuY2xhc3MgVHJlZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVHJlZVNlbGVjdFByb3BzLCBJVHJlZVNlbGVjdFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWAvOiiq+mAieaLqeWQju+8jOaYr+WQpumcgOimgea4heepuuaQnOe0ouahhlxuICAgICAqL1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6buY6K6k6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgLyoqXG4gICAgICog5piv5ZCm56aB55SoXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWfvvIzlpoLmnpzotoXov4fkuobliJnku6XmlLbotbfnmoTlvaLlvI/lh7rnjrBcbiAgICAgKi9cbiAgICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblpJrpgInmqKHlvI9cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5YC85Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmkJzntKLml7bnmoTlm57osIPvvIzlj4LmlbA6IHZhbHVlXG4gICAgICovXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruW8ueWHuuS9jee9rlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwidG9wXCIsXG4gICAgICBcImxlZnRcIixcbiAgICAgIFwicmlnaHRcIixcbiAgICAgIFwiYm90dG9tXCIsXG4gICAgICBcInRvcExlZnRcIixcbiAgICAgIFwidG9wUmlnaHRcIixcbiAgICAgIFwiYm90dG9tTGVmdFwiLFxuICAgICAgXCJib3R0b21SaWdodFwiLFxuICAgICAgXCJsZWZ0VG9wXCIsXG4gICAgICBcImxlZnRCb3R0b21cIixcbiAgICAgIFwicmlnaHRUb3BcIixcbiAgICAgIFwicmlnaHRCb3R0b21cIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7ovpPlhaXmoYbnmoTpu5jorqTlhoXlrrlcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDorr7nva7oh6rlrprkuYnnmoTnu5PmnpzmuLLmn5NcbiAgICAgKi9cbiAgICByZXN1bHRSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOi+k+WFpeahhuWGheeahOagh+etvuaYr+WQpuaYvuekuu+8jOatpCBQcm9wIOeUqOS6juaDs+imgeWwhue7k+aenOWMuuWxleekuuWcqOWIq+eahOWcsOaWueeahOmcgOaxglxuICAgICAqL1xuICAgIHJlc3VsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWumuWItuagkeW9oumAieaLqeWZqOeahGljb25cbiAgICAgKi9cbiAgICByaWdodEljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5a6a5LmJ6YCJ5Lit6aG55Zue5aGr55qE5pa55byP77yaXG4gICAgICogMS4gc2hvdy1hbGzvvJrmmL7npLrljIXmi6zniLboioLngrnnmoTmiYDmnInpgInkuK3oioLngrnvvJtcbiAgICAgKiAyLiBzaG93LXBhcmVudO+8muWPquaYvuekuueItuiKgueCue+8m1xuICAgICAqIDMuIHNob3ctY2hpbGTvvJrlj6rmmL7npLrlrZDoioLngrnjgILpu5jorqTlgLzvvJpzaG93LXBhcmVudFxuICAgICAqL1xuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInNob3ctYWxsXCIsXG4gICAgICBcInNob3ctcGFyZW50XCIsXG4gICAgICBcInNob3ctY2hpbGRcIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrpgInkuK3nmoQga2V5XG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMgPSB7XG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gICAgbWF4VGFnQ291bnQ6IG51bGwsXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25TZWFyY2g6IG5vb3AsXG4gICAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgICByZXN1bHRSZW5kZXI6IG51bGwsXG4gICAgcmVzdWx0VmlzaWJsZTogdHJ1ZSxcbiAgICByaWdodEljb246IFwibWVudVwiLFxuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFwic2hvdy1wYXJlbnRcIixcbiAgICB2YWx1ZTogbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHsgdmFsdWUgfTogSVRyZWVTZWxlY3RQcm9wcykgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFRyZWVOb2RlOiB0eXBlb2YgVHJlZU5vZGUgPSBUcmVlTm9kZVxuXG4gIHB1YmxpYyBzZWxlY3Q6IHR5cGVvZiBSY1RyZWVTZWxlY3RcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRyZWVTZWxlY3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgdmFsdWUsIGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2YWx1ZVN0YXRlID0gdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIG5leHRTdGF0ZTogSVRyZWVTZWxlY3RTdGF0ZVxuICApID0+XG4gICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuXG4gIHB1YmxpYyBzYXZlU2VsZWN0ID0gKG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVXcmFwcGVyID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy53cmFwcGVyID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHJlbmRlclN3aXRjaGVySWNvbiA9ICh7IGlzTGVhZiwgbG9hZGluZyB9OiBJVHJlZU5vZGVQcm9wcykgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgc2l6ZT1cIm1pbmlcIiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXN3aXRjaGVyLWljb25cIiAvPlxuICAgIH1cbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEljb24gaWNvbj1cImFycm93LXJpZ2h0XCIgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1zd2l0Y2hlci1pY29uXCIgLz5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlID0gKHZhbHVlOiBUcmVlTm9kZVZhbHVlKSA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgb25DaGFuZ2UsIHZhbHVlOiB2YWx1ZVByb3AgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IG9uU2VhcmNoIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICBvblNlYXJjaCh2YWwpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbHRlclRyZWVOb2RlID0gKGlucHV0OiBzdHJpbmcsIHRyZWVOb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGtleSwgdGl0bGUsIHZhbHVlLCBkYXRhVGl0bGUgfSA9IHRyZWVOb2RlXG4gICAgaWYgKCFrZXkgfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhkYXRhVGl0bGUgfHwgdGl0bGUpLmluY2x1ZGVzKGlucHV0KVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ0NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoIW1heFRhZ0NvdW50IHx8ICF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPD0gbWF4VGFnQ291bnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnUGxhY2Vob2xkZXIgPSAobm9kZXM6IElUcmVlTm9kZVtdKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcmVzdWx0UmVuZGVyLCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlc3VsdFJlbmRlcihub2RlcylcbiAgICB9XG5cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gbm9kZXNcbiAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSAoXG4gICAgICA8PlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIHtub2Rlc1swXS5sYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIC4uLuetiSB7bGVuZ3RofSDkuKpcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4LXBvcG92ZXItaXRlbS13cmFwcGVyXCI+XG4gICAgICAgICAgICB7bm9kZXMubWFwKCh7IGtleSwgZGlzYWJsZWQsIGxhYmVsIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4LXBvcG92ZXItaXRlbVwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7IWRpc2FibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxzID0gbm9kZXMubWFwKG8gPT4gby52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWxzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFscylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBDbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heFBvcG92ZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXhQbGFjZWhvbGRlclwiXG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwbGFjZWhvbGRlclRleHR9XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShbXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cblxuICBsaXN0ZW5JbnB1dENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXQ6IHsgdmFsdWUgfSxcbiAgICAgIGtleUNvZGUsXG4gICAgfSA9IGVcblxuICAgIGlmIChrZXlDb2RlID09PSA4ICYmIHZhbHVlID09PSBcIlwiKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQsIHBsYWNlaG9sZGVyLCByZXN1bHRWaXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICAvLyDnpoHmraIgdHJlZS1zZWxlY3Qg6ZSu55uY5Zue5Yig5Lya5b2x5ZONIHZhbHVlXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmxpc3RlbklucHV0Q2hhbmdlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwgJiYgdmFsdWUpIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICBpZiAoIXJlc3VsdFZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZXN1bHRWaXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgLyoqXG4gICAgICogcmVzdWx0VmlzaWJsZSDkuLogZmFsc2Ug5pe277yMIHNlbGVjdG9yIOmrmOW6puS4jeS8muaUueWPmOOAglxuICAgICAqIOagueaNruaIkeeahOe7j+mqjCBQb3B1cCDop6blj5Hph43mlrDlrprkvY3nmoTml7bmnLrmmK/vvJpcbiAgICAgKiAxLiB3aW5kb3cgcmVzaXplXG4gICAgICogMi4gcmVzaXplIG9ic2VydmVyIOS6hiBzZWxlY3RvclxuICAgICAqIOWboOatpOi/memHjOaJi+WKqOinpuWPkSByZXNpemVcbiAgICAgKi9cbiAgICBpZiAoIXJlc3VsdFZpc2libGUpIHtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInJlc2l6ZVwiKSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIG1heFRhZ0NvdW50LFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJpZ2h0SWNvbixcbiAgICAgIHJlc3VsdFJlbmRlcixcbiAgICAgIHJlc3VsdFZpc2libGUsXG4gICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5LFxuICAgICAgdHJlZURhdGEsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlc3RQcm9wczogYW55ID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcIm9uQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VhcmNoXCIsXG4gICAgICBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LXdyYXBwZXJgLCB7XG4gICAgICBbYCR7cHJlZml4fV9yZXN1bHRIaWRkZW5gXTogIXJlc3VsdFZpc2libGUsXG4gICAgfSlcblxuICAgIGxldCBjaGVja2JveDogYW55ID0gbXVsdGlwbGVcbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIGNoZWNrYm94ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC10cmVlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVTdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIHg9XCIxXCJcbiAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC10cmVlLWNoZWNrYm94LWNoZWNrZWRTdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNLjYxOCA1LjgyN2EuNDYzLjQ2MyAwIDAgMS0uMDItLjY3NWwuODA0LS44MDRhLjUyLjUyIDAgMCAxIC43MTYtLjAxTDQuNzUgNi43NWw0LjkyMi01LjYyNWEuNTEzLjUxMyAwIDAgMSAuNzA3LS4wNmwuNzQyLjYyYS40NzguNDc4IDAgMCAxIC4wNDQuNjg3bC02LjA4IDYuNzU2YS41MDYuNTA2IDAgMCAxLS43MDMuMDQ1TC42MTggNS44Mjd6XCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmVzdFByb3BzLnZhbHVlID0gdmFsdWVcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRNYXhUYWdDb3VudCgpXG4gICAgICBpZiAoY291bnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gY291bnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSAwXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiYWR1aS10cmVlLXNlbGVjdC13cmFwcGVyXCIsIHtcbiAgICAgICAgICAgICAgXCJhZHVpLXRyZWUtc2VsZWN0LXdyYXBwZXItbWF4VGFnXCI6IHRoaXMuZ2V0TWF4VGFnQ291bnQoKSAhPT0gbnVsbCxcbiAgICAgICAgICAgICAgXCJhZHVpLXRyZWUtc2VsZWN0LXdyYXBwZXItcmVzdWx0UmVuZGVyXCI6ICEhcmVzdWx0UmVuZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVdyYXBwZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJjVHJlZVNlbGVjdFxuICAgICAgICAgICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT17XG4gICAgICAgICAgICAgICAgcmVzdWx0VmlzaWJsZSA/IGF1dG9DbGVhclNlYXJjaFZhbHVlIDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17YCR7cHJlZml4fS1kcm9wZG93bi0ke1xuICAgICAgICAgICAgICAgIG11bHRpcGxlID8gXCJtdWx0aXBsZVwiIDogXCJzaW5nbGVcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgZHJvcGRvd25Qb3B1cEFsaWduPXtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQgJiYgZ2V0UGxhY2VtZW50cyh7IGFsaWduRWRnZTogdHJ1ZSB9KVtwbGFjZW1lbnRdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmlsdGVyVHJlZU5vZGU9e3RoaXMuZmlsdGVyVHJlZU5vZGV9XG4gICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgICAgICAgIGlucHV0SWNvbj17PEljb24gaWNvbj1cInRyaWFuZ2xlLWRvd25cIiAvPn1cbiAgICAgICAgICAgICAgbWF4VGFnUGxhY2Vob2xkZXI9e3RoaXMuZ2V0TWF4VGFnUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD1cIuaXoOWMuemFjee7k+aenFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHByZWZpeENscz1cImFkdWktdHJlZS1zZWxlY3RcIlxuICAgICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVNlbGVjdH1cbiAgICAgICAgICAgICAgcmVtb3ZlSWNvbj17PEljb24gaWNvbj1cImNhbmNlbFwiIGludGVyYWN0aXZlIHNpemU9ezE2fSAvPn1cbiAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneT17XG4gICAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSAmJiBzdHJhdGVnaWVzW3Nob3dDaGVja2VkU3RyYXRlZ3ldXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2hvd1NlYXJjaD17bXVsdGlwbGV9XG4gICAgICAgICAgICAgIHN3aXRjaGVySWNvbj17dGhpcy5yZW5kZXJTd2l0Y2hlckljb259XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic2xpZGUtdXBcIlxuICAgICAgICAgICAgICB0cmVlQ2hlY2thYmxlPXtjaGVja2JveH1cbiAgICAgICAgICAgICAgdHJlZU5vZGVGaWx0ZXJQcm9wPVwidGl0bGVcIlxuICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MzZ9XG4gICAgICAgICAgICAgIGxpc3RIZWlnaHQ9ezI4MH1cbiAgICAgICAgICAgICAgdHJlZURhdGE9e3RyZWVEYXRhIHx8IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbil9XG4gICAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvUmNUcmVlU2VsZWN0PlxuICAgICAgICAgICAgeyEhcmlnaHRJY29uICYmIG11bHRpcGxlICYmIChcbiAgICAgICAgICAgICAgPEljb24gaWNvbj17cmlnaHRJY29ufSBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LWljb25cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICApXG4gIH1cbn1cblxucG9seWZpbGwoVHJlZVNlbGVjdClcblxuZXhwb3J0IGRlZmF1bHQgVHJlZVNlbGVjdFxuIl19