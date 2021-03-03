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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIm5vZGVzIiwibWFwIiwibm9kZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInRpdGxlIiwicmVzdFByb3BzIiwiZGF0YSIsImRhdGFUaXRsZSIsImNoaWxkRGF0YSIsImxlbmd0aCIsImZpbHRlciIsIlRyZWVTZWxlY3QiLCJzZWxlY3QiLCJ3cmFwcGVyIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGl0bGVMaXN0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsInNldFN0YXRlIiwiaGFuZGxlU2VhcmNoIiwidmFsIiwib25TZWFyY2giLCJzZXRUaW1lb3V0IiwiZm9yY2VVcGRhdGUiLCJmaWx0ZXJUcmVlTm9kZSIsImlucHV0IiwidHJlZU5vZGUiLCJTdHJpbmciLCJpbmNsdWRlcyIsImdldE1heFRhZ0NvdW50IiwibWF4VGFnQ291bnQiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsInJlc3VsdFJlbmRlciIsInBsYWNlaG9sZGVyVGV4dCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGFiZWwiLCJpIiwidmFscyIsIm8iLCJzcGxpY2UiLCJsYWJlbHMiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibGlzdGVuSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiY29tcG9uZW50RGlkTW91bnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImRlZmF1bHRWYWx1ZSIsInZhbHVlU3RhdGUiLCJhdXRvQ2xlYXJTZWFyY2hWYWx1ZSIsImNsYXNzTmFtZSIsImdldFBvcHVwQ29udGFpbmVyIiwibXVsdGlwbGUiLCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJ0cmVlRGF0YSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJ2aXNpYmxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5IiwiZnVuYyIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiVHJlZU5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGtCQUFmOztBQUNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDakIsY0FBWUMsc0JBREs7QUFFakIsZ0JBQWNDLHdCQUZHO0FBR2pCLGlCQUFlQztBQUhFLENBQW5COztBQXdEQSxJQUFNQyxxQkFBcUIsR0FBRyxT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QVcsRUFBRSxJQU5nQztBQU83QytCLEVBQUFBLFFBQVEsRUFBRSxJQVBtQztBQVE3QzdDLEVBQUFBLFFBQVEsRUFBRXhDLElBUm1DO0FBUzdDc0YsRUFBQUEsdUJBQXVCLEVBQUV0RixJQVRvQjtBQVU3QzZDLEVBQUFBLFFBQVEsRUFBRTdDLElBVm1DO0FBVzdDdUYsRUFBQUEsU0FBUyxFQUFFLFlBWGtDO0FBWTdDZCxFQUFBQSxXQUFXLEVBQUUsS0FaZ0M7QUFhN0NqQixFQUFBQSxZQUFZLEVBQUUsSUFiK0I7QUFjN0NrQixFQUFBQSxhQUFhLEVBQUUsSUFkOEI7QUFlN0NjLEVBQUFBLFNBQVMsRUFBRSxNQWZrQztBQWdCN0NDLEVBQUFBLG1CQUFtQixFQUFFLGFBaEJ3QjtBQWlCN0MxRSxFQUFBQSxLQUFLLEVBQUU7QUFqQnNDLEM7O0FBNUYzQ1UsVSxDQWdIVXFGLHdCLEdBQTJCLGlCQUFpQztBQUFBLE1BQTlCL0YsS0FBOEIsU0FBOUJBLEtBQThCOztBQUN4RSxNQUFJQSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixXQUFPO0FBQ0xBLE1BQUFBLEtBQUssRUFBTEE7QUFESyxLQUFQO0FBR0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQzs7QUF2SEdVLFUsQ0F5SFVzRixRLEdBQTRCQSxzQjtlQW9XN0J0RixVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSY1RyZWVTZWxlY3QsIHtcbiAgU0hPV19BTEwsXG4gIFNIT1dfUEFSRU5ULFxuICBTSE9XX0NISUxELFxuICBUcmVlTm9kZSxcbn0gZnJvbSBcInJjLXRyZWUtc2VsZWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG5leHBvcnQgdHlwZSBUcmVlTm9kZVZhbHVlID0gc3RyaW5nW10gfCBudW1iZXJbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIG1heFRhZ0NvdW50PzogbnVsbCB8IG51bWJlclxuICBtdWx0aXBsZT86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFRyZWVOb2RlVmFsdWUsIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW10pID0+IHZvaWRcbiAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIG9uU2VhcmNoPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIHJlc3VsdFJlbmRlcj86IG51bGwgfCAoKHZhbHVlczogSVRyZWVOb2RlW10pID0+IEpTWC5FbGVtZW50KVxuICByZXN1bHRWaXNpYmxlPzogYm9vbGVhblxuICBzaG93Q2hlY2tlZFN0cmF0ZWd5PzogXCJzaG93LWFsbFwiIHwgXCJzaG93LWNoaWxkXCIgfCBcInNob3ctcGFyZW50XCJcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RTdGF0ZSB7XG4gIHZhbHVlPzogVHJlZU5vZGVWYWx1ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjaGVja2FibGU/OiBib29sZWFuXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBkaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlXG4gIGtleT86IHN0cmluZ1xuICBldmVudEtleT86IHN0cmluZ1xuICBpc0xlYWY/OiBib29sZWFuXG4gIGNoZWNrZWQ/OiBib29sZWFuXG4gIGV4cGFuZGVkPzogYm9vbGVhblxuICBsb2FkaW5nPzogYm9vbGVhblxuICBzZWxlY3RlZD86IGJvb2xlYW5cbiAgc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuY29uc3QgY29udmVydENoaWxkcmVuVG9EYXRhID0gKG5vZGVzOiBhbnkpID0+IHtcbiAgcmV0dXJuIHRvQXJyYXkobm9kZXMpXG4gICAgLm1hcCgobm9kZTogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KG5vZGUpIHx8ICFub2RlLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAga2V5LFxuICAgICAgICBwcm9wczogeyBjaGlsZHJlbiwgdmFsdWUsIHBvcG92ZXIsIHBvcG92ZXJQcm9wcywgdGl0bGUsIC4uLnJlc3RQcm9wcyB9LFxuICAgICAgfSA9IG5vZGUgYXMgUmVhY3QuUmVhY3RFbGVtZW50XG5cbiAgICAgIC8qKlxuICAgICAgICog5aaC5p6c5pyJIHBvcG92ZXIg5YiZ5Zyo6L+Z6YeM5YyF6KOF5LiA5LiLIHRpdGxlXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGRhdGFUaXRsZTogdGl0bGUsXG4gICAgICAgIHRpdGxlOiBwb3BvdmVyID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXJcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8UG9wb3ZlciBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXBvcC10cmlnZ2VyLXBsYWNlaG9sZGVyXCIgLz5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICB0aXRsZVxuICAgICAgICApLFxuICAgICAgICAuLi5yZXN0UHJvcHMsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbilcbiAgICAgIGlmIChjaGlsZERhdGEubGVuZ3RoKSB7XG4gICAgICAgIGRhdGEuY2hpbGRyZW4gPSBjaGlsZERhdGFcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICAgIC5maWx0ZXIoKGRhdGEpID0+IGRhdGEpXG59XG5cbi8qKlxuICog5qCR5b2i6YCJ5oupXG4gKi9cbmNsYXNzIFRyZWVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRyZWVTZWxlY3RQcm9wcywgSVRyZWVTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlgLzooqvpgInmi6nlkI7vvIzmmK/lkKbpnIDopoHmuIXnqbrmkJzntKLmoYZcbiAgICAgKi9cbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOm7mOiupOmAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgICAqL1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmnIDlpJrmmL7npLrlpJrlsJHkuKogdGFn77yM5aaC5p6c6LaF6L+H5LqG5YiZ5Lul5pS26LW355qE5b2i5byP5Ye6546wXG4gICAgICovXG4gICAgbWF4VGFnQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5aSa6YCJ5qih5byPXG4gICAgICovXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWAvOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5LiL5ouJIHZpc2libGUg5Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiBib29sZWFuXG4gICAgICovXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOaQnOe0ouaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5by55Ye65L2N572uXG4gICAgICovXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJ0b3BcIixcbiAgICAgIFwibGVmdFwiLFxuICAgICAgXCJyaWdodFwiLFxuICAgICAgXCJib3R0b21cIixcbiAgICAgIFwidG9wTGVmdFwiLFxuICAgICAgXCJ0b3BSaWdodFwiLFxuICAgICAgXCJib3R0b21MZWZ0XCIsXG4gICAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgICBcImxlZnRUb3BcIixcbiAgICAgIFwibGVmdEJvdHRvbVwiLFxuICAgICAgXCJyaWdodFRvcFwiLFxuICAgICAgXCJyaWdodEJvdHRvbVwiLFxuICAgIF0pLFxuICAgIC8qKlxuICAgICAqIOiuvue9rui+k+WFpeahhueahOm7mOiupOWGheWuuVxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruiHquWumuS5ieeahOe7k+aenOa4suafk1xuICAgICAqL1xuICAgIHJlc3VsdFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6L6T5YWl5qGG5YaF55qE5qCH562+5piv5ZCm5pi+56S677yM5q2kIFByb3Ag55So5LqO5oOz6KaB5bCG57uT5p6c5Yy65bGV56S65Zyo5Yir55qE5Zyw5pa555qE6ZyA5rGCXG4gICAgICovXG4gICAgcmVzdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6a5Yi25qCR5b2i6YCJ5oup5Zmo55qEaWNvblxuICAgICAqL1xuICAgIHJpZ2h0SWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDlrprkuYnpgInkuK3pobnlm57loavnmoTmlrnlvI/vvJpcbiAgICAgKiAxLiBzaG93LWFsbO+8muaYvuekuuWMheaLrOeItuiKgueCueeahOaJgOaciemAieS4reiKgueCue+8m1xuICAgICAqIDIuIHNob3ctcGFyZW5077ya5Y+q5pi+56S654i26IqC54K577ybXG4gICAgICogMy4gc2hvdy1jaGlsZO+8muWPquaYvuekuuWtkOiKgueCueOAgum7mOiupOWAvO+8mnNob3ctcGFyZW50XG4gICAgICovXG4gICAgc2hvd0NoZWNrZWRTdHJhdGVneTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwic2hvdy1hbGxcIixcbiAgICAgIFwic2hvdy1wYXJlbnRcIixcbiAgICAgIFwic2hvdy1jaGlsZFwiLFxuICAgIF0pLFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8mumAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRyZWVTZWxlY3RQcm9wcyA9IHtcbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgICBtYXhUYWdDb3VudDogbnVsbCxcbiAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBvblNlYXJjaDogbm9vcCxcbiAgICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiLFxuICAgIHJlc3VsdFJlbmRlcjogbnVsbCxcbiAgICByZXN1bHRWaXNpYmxlOiB0cnVlLFxuICAgIHJpZ2h0SWNvbjogXCJtZW51XCIsXG4gICAgc2hvd0NoZWNrZWRTdHJhdGVneTogXCJzaG93LXBhcmVudFwiLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoeyB2YWx1ZSB9OiBJVHJlZVNlbGVjdFByb3BzKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgVHJlZU5vZGU6IHR5cGVvZiBUcmVlTm9kZSA9IFRyZWVOb2RlXG5cbiAgcHVibGljIHNlbGVjdDogdHlwZW9mIFJjVHJlZVNlbGVjdFxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVHJlZVNlbGVjdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyB2YWx1ZSwgZGVmYXVsdFZhbHVlIH0gPSBwcm9wc1xuICAgIGNvbnN0IHZhbHVlU3RhdGUgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMsXG4gICAgbmV4dFN0YXRlOiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIHNhdmVTZWxlY3QgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5zZWxlY3QgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVdyYXBwZXIgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLndyYXBwZXIgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyU3dpdGNoZXJJY29uID0gKHsgaXNMZWFmLCBsb2FkaW5nIH06IElUcmVlTm9kZVByb3BzKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciBzaXplPVwibWluaVwiIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3Qtc3dpdGNoZXItaWNvblwiIC8+XG4gICAgfVxuICAgIGlmIChpc0xlYWYpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8SWNvbiBpY29uPVwiYXJyb3ctcmlnaHRcIiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXN3aXRjaGVyLWljb25cIiAvPlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDaGFuZ2UgPSAoXG4gICAgdmFsdWU6IFRyZWVOb2RlVmFsdWUsXG4gICAgdGl0bGVMaXN0OiBSZWFjdC5SZWFjdE5vZGVbXVxuICApID0+IHtcbiAgICBjb25zdCB7IGRpc2FibGVkLCBvbkNoYW5nZSwgdmFsdWU6IHZhbHVlUHJvcCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsdWUsIHRpdGxlTGlzdClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VhcmNoID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBvblNlYXJjaCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvblNlYXJjaCkge1xuICAgICAgb25TZWFyY2godmFsKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgfSwgMClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyVHJlZU5vZGUgPSAoaW5wdXQ6IHN0cmluZywgdHJlZU5vZGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsga2V5LCB0aXRsZSwgdmFsdWUsIGRhdGFUaXRsZSB9ID0gdHJlZU5vZGVcbiAgICBpZiAoIWtleSB8fCAhdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKGRhdGFUaXRsZSB8fCB0aXRsZSkuaW5jbHVkZXMoaW5wdXQpXG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmICghbWF4VGFnQ291bnQgfHwgIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8PSBtYXhUYWdDb3VudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdQbGFjZWhvbGRlciA9IChub2RlczogSVRyZWVOb2RlW10pID0+IHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCB7IG9uQ2hhbmdlLCByZXN1bHRSZW5kZXIsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UmVuZGVyKG5vZGVzKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBub2Rlc1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IChcbiAgICAgIDw+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0+XG4gICAgICAgICAge25vZGVzWzBdLmxhYmVsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0+XG4gICAgICAgICAgLi4u562JIHtsZW5ndGh9IOS4qlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8Lz5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXgtcG9wb3Zlci1pdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIHtub2Rlcy5tYXAoKHsga2V5LCBkaXNhYmxlZCwgbGFiZWwgfSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXgtcG9wb3Zlci1pdGVtXCIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHshZGlzYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBub2Rlcy5tYXAoKG8pID0+IG8udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFscyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBub2Rlcy5tYXAoKG8pID0+IG8ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHMuc3BsaWNlKGksIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWxzLCBsYWJlbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXhQb3BvdmVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4UGxhY2Vob2xkZXJcIlxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwbGFjZWhvbGRlclRleHR9XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG5cbiAgbGlzdGVuSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlIH0sXG4gICAgICBrZXlDb2RlLFxuICAgIH0gPSBlXG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gOCAmJiB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50LCBwbGFjZWhvbGRlciwgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy8g56aB5q2iIHRyZWUtc2VsZWN0IOmUruebmOWbnuWIoOS8muW9seWTjSB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5saXN0ZW5JbnB1dENoYW5nZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsICYmIHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIHJlc3VsdFZpc2libGUg5Li6IGZhbHNlIOaXtu+8jCBzZWxlY3RvciDpq5jluqbkuI3kvJrmlLnlj5jjgIJcbiAgICAgKiDmoLnmja7miJHnmoTnu4/pqowgUG9wdXAg6Kem5Y+R6YeN5paw5a6a5L2N55qE5pe25py65piv77yaXG4gICAgICogMS4gd2luZG93IHJlc2l6ZVxuICAgICAqIDIuIHJlc2l6ZSBvYnNlcnZlciDkuoYgc2VsZWN0b3JcbiAgICAgKiDlm6DmraTov5nph4zmiYvliqjop6blj5EgcmVzaXplXG4gICAgICovXG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlKSB7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBtYXhUYWdDb3VudCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJpZ2h0SWNvbixcbiAgICAgIHJlc3VsdFJlbmRlcixcbiAgICAgIHJlc3VsdFZpc2libGUsXG4gICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5LFxuICAgICAgdHJlZURhdGEsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlc3RQcm9wczogYW55ID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcIm9uQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VhcmNoXCIsXG4gICAgICBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBgJHtwcmVmaXh9LXdyYXBwZXJgLCB7XG4gICAgICBbYCR7cHJlZml4fV9yZXN1bHRIaWRkZW5gXTogIXJlc3VsdFZpc2libGUsXG4gICAgfSlcblxuICAgIGxldCBjaGVja2JveDogYW55ID0gbXVsdGlwbGVcbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIGNoZWNrYm94ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC10cmVlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVTdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIHg9XCIxXCJcbiAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC10cmVlLWNoZWNrYm94LWNoZWNrZWRTdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNLjYxOCA1LjgyN2EuNDYzLjQ2MyAwIDAgMS0uMDItLjY3NWwuODA0LS44MDRhLjUyLjUyIDAgMCAxIC43MTYtLjAxTDQuNzUgNi43NWw0LjkyMi01LjYyNWEuNTEzLjUxMyAwIDAgMSAuNzA3LS4wNmwuNzQyLjYyYS40NzguNDc4IDAgMCAxIC4wNDQuNjg3bC02LjA4IDYuNzU2YS41MDYuNTA2IDAgMCAxLS43MDMuMDQ1TC42MTggNS44Mjd6XCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmVzdFByb3BzLnZhbHVlID0gdmFsdWVcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRNYXhUYWdDb3VudCgpXG4gICAgICBpZiAoY291bnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gY291bnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSAwXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiYWR1aS10cmVlLXNlbGVjdC13cmFwcGVyXCIsIHtcbiAgICAgICAgICAgICAgXCJhZHVpLXRyZWUtc2VsZWN0LXdyYXBwZXItbWF4VGFnXCI6IHRoaXMuZ2V0TWF4VGFnQ291bnQoKSAhPT0gbnVsbCxcbiAgICAgICAgICAgICAgXCJhZHVpLXRyZWUtc2VsZWN0LXdyYXBwZXItcmVzdWx0UmVuZGVyXCI6ICEhcmVzdWx0UmVuZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVdyYXBwZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJjVHJlZVNlbGVjdFxuICAgICAgICAgICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT17XG4gICAgICAgICAgICAgICAgcmVzdWx0VmlzaWJsZSA/IGF1dG9DbGVhclNlYXJjaFZhbHVlIDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17YCR7cHJlZml4fS1kcm9wZG93bi0ke1xuICAgICAgICAgICAgICAgIG11bHRpcGxlID8gXCJtdWx0aXBsZVwiIDogXCJzaW5nbGVcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgZHJvcGRvd25Qb3B1cEFsaWduPXtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQgJiYgZ2V0UGxhY2VtZW50cyh7IGFsaWduRWRnZTogdHJ1ZSB9KVtwbGFjZW1lbnRdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmlsdGVyVHJlZU5vZGU9e3RoaXMuZmlsdGVyVHJlZU5vZGV9XG4gICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgICAgICAgIGlucHV0SWNvbj17PEljb24gaWNvbj1cInRyaWFuZ2xlLWRvd25cIiAvPn1cbiAgICAgICAgICAgICAgbWF4VGFnUGxhY2Vob2xkZXI9e3RoaXMuZ2V0TWF4VGFnUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD1cIuaXoOWMuemFjee7k+aenFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHByZWZpeENscz1cImFkdWktdHJlZS1zZWxlY3RcIlxuICAgICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVNlbGVjdH1cbiAgICAgICAgICAgICAgcmVtb3ZlSWNvbj17PEljb24gaWNvbj1cImNhbmNlbFwiIGludGVyYWN0aXZlIHNpemU9ezE2fSAvPn1cbiAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneT17XG4gICAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSAmJiBzdHJhdGVnaWVzW3Nob3dDaGVja2VkU3RyYXRlZ3ldXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2hvd1NlYXJjaD17bXVsdGlwbGV9XG4gICAgICAgICAgICAgIHN3aXRjaGVySWNvbj17dGhpcy5yZW5kZXJTd2l0Y2hlckljb259XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic2xpZGUtdXBcIlxuICAgICAgICAgICAgICB0cmVlQ2hlY2thYmxlPXtjaGVja2JveH1cbiAgICAgICAgICAgICAgdHJlZU5vZGVGaWx0ZXJQcm9wPVwidGl0bGVcIlxuICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MzZ9XG4gICAgICAgICAgICAgIGxpc3RIZWlnaHQ9ezI4MH1cbiAgICAgICAgICAgICAgdHJlZURhdGE9e3RyZWVEYXRhIHx8IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbil9XG4gICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXsodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICAgICAgICBpZiAob25Ecm9wZG93blZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1JjVHJlZVNlbGVjdD5cbiAgICAgICAgICAgIHshIXJpZ2h0SWNvbiAmJiBtdWx0aXBsZSAmJiAoXG4gICAgICAgICAgICAgIDxJY29uIGljb249e3JpZ2h0SWNvbn0gY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1pY29uXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVTZWxlY3RcbiJdfQ==