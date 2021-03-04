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

    _this.handleChange = function (value, titleList) {
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
          onChange(value, titleList);
        }
      }
    };

    _this.handleSearch = function (val) {
      var onSearch = _this.props.onSearch;

      if (onSearch) {
        onSearch(val);
        setTimeout(function () {
          _this.forceUpdate();
        }, 0);
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

              var labels = nodes.map(function (o) {
                return o.label;
              });
              labels.splice(i, 1);

              if (onChange) {
                onChange(vals, labels);
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
            onChange([], []);
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
          _onDropdownVisibleChange = _this$props4.onDropdownVisibleChange,
          placement = _this$props4.placement,
          placeholder = _this$props4.placeholder,
          rightIcon = _this$props4.rightIcon,
          resultRender = _this$props4.resultRender,
          resultVisible = _this$props4.resultVisible,
          showCheckedStrategy = _this$props4.showCheckedStrategy,
          treeData = _this$props4.treeData,
          otherProps = _objectWithoutProperties(_this$props4, ["autoClearSearchValue", "children", "className", "getPopupContainer", "maxTagCount", "multiple", "onDropdownVisibleChange", "placement", "placeholder", "rightIcon", "resultRender", "resultVisible", "showCheckedStrategy", "treeData"]);

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
          treeData: treeData || convertChildrenToData(children),
          onDropdownVisibleChange: function onDropdownVisibleChange(visible) {
            setTimeout(function () {
              _this2.forceUpdate();
            }, 0);

            if (_onDropdownVisibleChange) {
              _onDropdownVisibleChange(visible);
            }
          }
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
  onDropdownVisibleChange: _propTypes["default"].func,
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
  onDropdownVisibleChange: noop,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIm5vZGVzIiwibWFwIiwibm9kZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInRpdGxlIiwicmVzdFByb3BzIiwiZGF0YSIsImRhdGFUaXRsZSIsImNoaWxkRGF0YSIsImxlbmd0aCIsImZpbHRlciIsIlRyZWVTZWxlY3QiLCJzZWxlY3QiLCJ3cmFwcGVyIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGl0bGVMaXN0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsInNldFN0YXRlIiwiaGFuZGxlU2VhcmNoIiwidmFsIiwib25TZWFyY2giLCJmaWx0ZXJUcmVlTm9kZSIsImlucHV0IiwidHJlZU5vZGUiLCJTdHJpbmciLCJpbmNsdWRlcyIsImdldE1heFRhZ0NvdW50IiwibWF4VGFnQ291bnQiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsInJlc3VsdFJlbmRlciIsInBsYWNlaG9sZGVyVGV4dCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGFiZWwiLCJpIiwidmFscyIsIm8iLCJzcGxpY2UiLCJsYWJlbHMiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibGlzdGVuSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiY29tcG9uZW50RGlkTW91bnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZGVmYXVsdFZhbHVlIiwidmFsdWVTdGF0ZSIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiY2xhc3NOYW1lIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtdWx0aXBsZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJ0cmVlRGF0YSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJUcmVlTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsa0JBQWY7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQixjQUFZQyxzQkFESztBQUVqQixnQkFBY0Msd0JBRkc7QUFHakIsaUJBQWVDO0FBSEUsQ0FBbkI7O0FBdURBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFnQjtBQUM1QyxTQUFPLHlCQUFRQSxL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QSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixXQUFPO0FBQ0xBLE1BQUFBLEtBQUssRUFBTEE7QUFESyxLQUFQO0FBR0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQzs7QUFsSEdVLFUsQ0FvSFVtRixRLEdBQTRCQSxzQjtlQXdWN0JuRixVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSY1RyZWVTZWxlY3QsIHtcbiAgU0hPV19BTEwsXG4gIFNIT1dfUEFSRU5ULFxuICBTSE9XX0NISUxELFxuICBUcmVlTm9kZSxcbn0gZnJvbSBcInJjLXRyZWUtc2VsZWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG5leHBvcnQgdHlwZSBUcmVlTm9kZVZhbHVlID0gc3RyaW5nW10gfCBudW1iZXJbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIG1heFRhZ0NvdW50PzogbnVsbCB8IG51bWJlclxuICBtdWx0aXBsZT86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFRyZWVOb2RlVmFsdWUsIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW10pID0+IHZvaWRcbiAgb25TZWFyY2g/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgcmVzdWx0UmVuZGVyPzogbnVsbCB8ICgodmFsdWVzOiBJVHJlZU5vZGVbXSkgPT4gSlNYLkVsZW1lbnQpXG4gIHJlc3VsdFZpc2libGU/OiBib29sZWFuXG4gIHNob3dDaGVja2VkU3RyYXRlZ3k/OiBcInNob3ctYWxsXCIgfCBcInNob3ctY2hpbGRcIiB8IFwic2hvdy1wYXJlbnRcIlxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFN0YXRlIHtcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGVcbiAga2V5Pzogc3RyaW5nXG4gIGV2ZW50S2V5Pzogc3RyaW5nXG4gIGlzTGVhZj86IGJvb2xlYW5cbiAgY2hlY2tlZD86IGJvb2xlYW5cbiAgZXhwYW5kZWQ/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIHNlbGVjdGVkPzogYm9vbGVhblxuICBzZWxlY3RhYmxlPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5jb25zdCBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEgPSAobm9kZXM6IGFueSkgPT4ge1xuICByZXR1cm4gdG9BcnJheShub2RlcylcbiAgICAubWFwKChub2RlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBrZXksXG4gICAgICAgIHByb3BzOiB7IGNoaWxkcmVuLCB2YWx1ZSwgcG9wb3ZlciwgcG9wb3ZlclByb3BzLCB0aXRsZSwgLi4ucmVzdFByb3BzIH0sXG4gICAgICB9ID0gbm9kZSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRcblxuICAgICAgLyoqXG4gICAgICAgKiDlpoLmnpzmnIkgcG9wb3ZlciDliJnlnKjov5nph4zljIXoo4XkuIDkuIsgdGl0bGVcbiAgICAgICAqL1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZGF0YVRpdGxlOiB0aXRsZSxcbiAgICAgICAgdGl0bGU6IHBvcG92ZXIgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlclwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICksXG4gICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGREYXRhID0gY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKVxuICAgICAgaWYgKGNoaWxkRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkRGF0YVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgLmZpbHRlcigoZGF0YSkgPT4gZGF0YSlcbn1cblxuLyoqXG4gKiDmoJHlvaLpgInmi6lcbiAqL1xuY2xhc3MgVHJlZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVHJlZVNlbGVjdFByb3BzLCBJVHJlZVNlbGVjdFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWAvOiiq+mAieaLqeWQju+8jOaYr+WQpumcgOimgea4heepuuaQnOe0ouahhlxuICAgICAqL1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6buY6K6k6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgLyoqXG4gICAgICog5piv5ZCm56aB55SoXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWfvvIzlpoLmnpzotoXov4fkuobliJnku6XmlLbotbfnmoTlvaLlvI/lh7rnjrBcbiAgICAgKi9cbiAgICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblpJrpgInmqKHlvI9cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5YC85Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmkJzntKLml7bnmoTlm57osIPvvIzlj4LmlbA6IHZhbHVlXG4gICAgICovXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruW8ueWHuuS9jee9rlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwidG9wXCIsXG4gICAgICBcImxlZnRcIixcbiAgICAgIFwicmlnaHRcIixcbiAgICAgIFwiYm90dG9tXCIsXG4gICAgICBcInRvcExlZnRcIixcbiAgICAgIFwidG9wUmlnaHRcIixcbiAgICAgIFwiYm90dG9tTGVmdFwiLFxuICAgICAgXCJib3R0b21SaWdodFwiLFxuICAgICAgXCJsZWZ0VG9wXCIsXG4gICAgICBcImxlZnRCb3R0b21cIixcbiAgICAgIFwicmlnaHRUb3BcIixcbiAgICAgIFwicmlnaHRCb3R0b21cIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7ovpPlhaXmoYbnmoTpu5jorqTlhoXlrrlcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDorr7nva7oh6rlrprkuYnnmoTnu5PmnpzmuLLmn5NcbiAgICAgKi9cbiAgICByZXN1bHRSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOi+k+WFpeahhuWGheeahOagh+etvuaYr+WQpuaYvuekuu+8jOatpCBQcm9wIOeUqOS6juaDs+imgeWwhue7k+aenOWMuuWxleekuuWcqOWIq+eahOWcsOaWueeahOmcgOaxglxuICAgICAqL1xuICAgIHJlc3VsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWumuWItuagkeW9oumAieaLqeWZqOeahGljb25cbiAgICAgKi9cbiAgICByaWdodEljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5a6a5LmJ6YCJ5Lit6aG55Zue5aGr55qE5pa55byP77yaXG4gICAgICogMS4gc2hvdy1hbGzvvJrmmL7npLrljIXmi6zniLboioLngrnnmoTmiYDmnInpgInkuK3oioLngrnvvJtcbiAgICAgKiAyLiBzaG93LXBhcmVudO+8muWPquaYvuekuueItuiKgueCue+8m1xuICAgICAqIDMuIHNob3ctY2hpbGTvvJrlj6rmmL7npLrlrZDoioLngrnjgILpu5jorqTlgLzvvJpzaG93LXBhcmVudFxuICAgICAqL1xuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInNob3ctYWxsXCIsXG4gICAgICBcInNob3ctcGFyZW50XCIsXG4gICAgICBcInNob3ctY2hpbGRcIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrpgInkuK3nmoQga2V5XG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMgPSB7XG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gICAgbWF4VGFnQ291bnQ6IG51bGwsXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25TZWFyY2g6IG5vb3AsXG4gICAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgICByZXN1bHRSZW5kZXI6IG51bGwsXG4gICAgcmVzdWx0VmlzaWJsZTogdHJ1ZSxcbiAgICByaWdodEljb246IFwibWVudVwiLFxuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFwic2hvdy1wYXJlbnRcIixcbiAgICB2YWx1ZTogbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHsgdmFsdWUgfTogSVRyZWVTZWxlY3RQcm9wcykgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFRyZWVOb2RlOiB0eXBlb2YgVHJlZU5vZGUgPSBUcmVlTm9kZVxuXG4gIHB1YmxpYyBzZWxlY3Q6IHR5cGVvZiBSY1RyZWVTZWxlY3RcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRyZWVTZWxlY3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgdmFsdWUsIGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2YWx1ZVN0YXRlID0gdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIG5leHRTdGF0ZTogSVRyZWVTZWxlY3RTdGF0ZVxuICApID0+XG4gICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuXG4gIHB1YmxpYyBzYXZlU2VsZWN0ID0gKG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVXcmFwcGVyID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy53cmFwcGVyID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHJlbmRlclN3aXRjaGVySWNvbiA9ICh7IGlzTGVhZiwgbG9hZGluZyB9OiBJVHJlZU5vZGVQcm9wcykgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgc2l6ZT1cIm1pbmlcIiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXN3aXRjaGVyLWljb25cIiAvPlxuICAgIH1cbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEljb24gaWNvbj1cImFycm93LXJpZ2h0XCIgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1zd2l0Y2hlci1pY29uXCIgLz5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlID0gKFxuICAgIHZhbHVlOiBUcmVlTm9kZVZhbHVlLFxuICAgIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW11cbiAgKSA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgb25DaGFuZ2UsIHZhbHVlOiB2YWx1ZVByb3AgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlLCB0aXRsZUxpc3QpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25TZWFyY2ggfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgIG9uU2VhcmNoKHZhbClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyVHJlZU5vZGUgPSAoaW5wdXQ6IHN0cmluZywgdHJlZU5vZGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsga2V5LCB0aXRsZSwgdmFsdWUsIGRhdGFUaXRsZSB9ID0gdHJlZU5vZGVcbiAgICBpZiAoIWtleSB8fCAhdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKGRhdGFUaXRsZSB8fCB0aXRsZSkuaW5jbHVkZXMoaW5wdXQpXG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmICghbWF4VGFnQ291bnQgfHwgIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8PSBtYXhUYWdDb3VudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdQbGFjZWhvbGRlciA9IChub2RlczogSVRyZWVOb2RlW10pID0+IHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCB7IG9uQ2hhbmdlLCByZXN1bHRSZW5kZXIsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UmVuZGVyKG5vZGVzKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBub2Rlc1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IChcbiAgICAgIDw+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0+XG4gICAgICAgICAge25vZGVzWzBdLmxhYmVsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0+XG4gICAgICAgICAgLi4u562JIHtsZW5ndGh9IOS4qlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8Lz5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXgtcG9wb3Zlci1pdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIHtub2Rlcy5tYXAoKHsga2V5LCBkaXNhYmxlZCwgbGFiZWwgfSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXgtcG9wb3Zlci1pdGVtXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHshZGlzYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBub2Rlcy5tYXAoKG8pID0+IG8udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFscyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBub2Rlcy5tYXAoKG8pID0+IG8ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHMuc3BsaWNlKGksIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWxzLCBsYWJlbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXhQb3BvdmVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4UGxhY2Vob2xkZXJcIlxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwbGFjZWhvbGRlclRleHR9XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG5cbiAgbGlzdGVuSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlIH0sXG4gICAgICBrZXlDb2RlLFxuICAgIH0gPSBlXG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gOCAmJiB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50LCBwbGFjZWhvbGRlciwgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy8g56aB5q2iIHRyZWUtc2VsZWN0IOmUruebmOWbnuWIoOS8muW9seWTjSB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5saXN0ZW5JbnB1dENoYW5nZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsICYmIHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIHJlc3VsdFZpc2libGUg5Li6IGZhbHNlIOaXtu+8jCBzZWxlY3RvciDpq5jluqbkuI3kvJrmlLnlj5jjgIJcbiAgICAgKiDmoLnmja7miJHnmoTnu4/pqowgUG9wdXAg6Kem5Y+R6YeN5paw5a6a5L2N55qE5pe25py65piv77yaXG4gICAgICogMS4gd2luZG93IHJlc2l6ZVxuICAgICAqIDIuIHJlc2l6ZSBvYnNlcnZlciDkuoYgc2VsZWN0b3JcbiAgICAgKiDlm6DmraTov5nph4zmiYvliqjop6blj5EgcmVzaXplXG4gICAgICovXG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlKSB7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBtYXhUYWdDb3VudCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByaWdodEljb24sXG4gICAgICByZXN1bHRSZW5kZXIsXG4gICAgICByZXN1bHRWaXNpYmxlLFxuICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSxcbiAgICAgIHRyZWVEYXRhLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHM6IGFueSA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJvbkNoYW5nZVwiLFxuICAgICAgXCJvblNlYXJjaFwiLFxuICAgICAgXCJkZWZhdWx0VmFsdWVcIixcbiAgICAgIFwidmFsdWVcIixcbiAgICBdKVxuXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS13cmFwcGVyYCwge1xuICAgICAgW2Ake3ByZWZpeH1fcmVzdWx0SGlkZGVuYF06ICFyZXN1bHRWaXNpYmxlLFxuICAgIH0pXG5cbiAgICBsZXQgY2hlY2tib3g6IGFueSA9IG11bHRpcGxlXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBjaGVja2JveCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtdHJlZS1jaGVja2JveC1pbmRldGVybWluYXRlU3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICB4PVwiMVwiXG4gICAgICAgICAgICAgIHk9XCI0XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICByeD1cIi41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtdHJlZS1jaGVja2JveC1jaGVja2VkU3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTS42MTggNS44MjdhLjQ2My40NjMgMCAwIDEtLjAyLS42NzVsLjgwNC0uODA0YS41Mi41MiAwIDAgMSAuNzE2LS4wMUw0Ljc1IDYuNzVsNC45MjItNS42MjVhLjUxMy41MTMgMCAwIDEgLjcwNy0uMDZsLjc0Mi42MmEuNDc4LjQ3OCAwIDAgMSAuMDQ0LjY4N2wtNi4wOCA2Ljc1NmEuNTA2LjUwNiAwIDAgMS0uNzAzLjA0NUwuNjE4IDUuODI3elwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJlc3RQcm9wcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0TWF4VGFnQ291bnQoKVxuICAgICAgaWYgKGNvdW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IGNvdW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gMFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlclwiLCB7XG4gICAgICAgICAgICAgIFwiYWR1aS10cmVlLXNlbGVjdC13cmFwcGVyLW1heFRhZ1wiOiB0aGlzLmdldE1heFRhZ0NvdW50KCkgIT09IG51bGwsXG4gICAgICAgICAgICAgIFwiYWR1aS10cmVlLXNlbGVjdC13cmFwcGVyLXJlc3VsdFJlbmRlclwiOiAhIXJlc3VsdFJlbmRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVXcmFwcGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSY1RyZWVTZWxlY3RcbiAgICAgICAgICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU9e1xuICAgICAgICAgICAgICAgIHJlc3VsdFZpc2libGUgPyBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9e2Ake3ByZWZpeH0tZHJvcGRvd24tJHtcbiAgICAgICAgICAgICAgICBtdWx0aXBsZSA/IFwibXVsdGlwbGVcIiA6IFwic2luZ2xlXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGRyb3Bkb3duUG9wdXBBbGlnbj17XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50ICYmIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpbHRlclRyZWVOb2RlPXt0aGlzLmZpbHRlclRyZWVOb2RlfVxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICAgICAgICBpbnB1dEljb249ezxJY29uIGljb249XCJ0cmlhbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyPXt0aGlzLmdldE1heFRhZ1BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9XCLml6DljLnphY3nu5PmnpxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwcmVmaXhDbHM9XCJhZHVpLXRyZWUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWxlY3R9XG4gICAgICAgICAgICAgIHJlbW92ZUljb249ezxJY29uIGljb249XCJjYW5jZWxcIiBpbnRlcmFjdGl2ZSBzaXplPXsxNn0gLz59XG4gICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3k9e1xuICAgICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3kgJiYgc3RyYXRlZ2llc1tzaG93Q2hlY2tlZFN0cmF0ZWd5XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3dTZWFyY2g9e211bHRpcGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hlckljb249e3RoaXMucmVuZGVyU3dpdGNoZXJJY29ufVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgICAgdHJlZUNoZWNrYWJsZT17Y2hlY2tib3h9XG4gICAgICAgICAgICAgIHRyZWVOb2RlRmlsdGVyUHJvcD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezM2fVxuICAgICAgICAgICAgICBsaXN0SGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgIHRyZWVEYXRhPXt0cmVlRGF0YSB8fCBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pfVxuICAgICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1JjVHJlZVNlbGVjdD5cbiAgICAgICAgICAgIHshIXJpZ2h0SWNvbiAmJiBtdWx0aXBsZSAmJiAoXG4gICAgICAgICAgICAgIDxJY29uIGljb249e3JpZ2h0SWNvbn0gY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1pY29uXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVTZWxlY3RcbiJdfQ==
