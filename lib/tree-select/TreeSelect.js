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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIm5vZGVzIiwibWFwIiwibm9kZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInRpdGxlIiwicmVzdFByb3BzIiwiZGF0YSIsImRhdGFUaXRsZSIsImNoaWxkRGF0YSIsImxlbmd0aCIsImZpbHRlciIsIlRyZWVTZWxlY3QiLCJzZWxlY3QiLCJ3cmFwcGVyIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwidGl0bGVMaXN0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsInNldFN0YXRlIiwiaGFuZGxlU2VhcmNoIiwidmFsIiwib25TZWFyY2giLCJzZXRUaW1lb3V0IiwiZm9yY2VVcGRhdGUiLCJmaWx0ZXJUcmVlTm9kZSIsImlucHV0IiwidHJlZU5vZGUiLCJTdHJpbmciLCJpbmNsdWRlcyIsImdldE1heFRhZ0NvdW50IiwibWF4VGFnQ291bnQiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsInJlc3VsdFJlbmRlciIsInBsYWNlaG9sZGVyVGV4dCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGFiZWwiLCJpIiwidmFscyIsIm8iLCJzcGxpY2UiLCJsYWJlbHMiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibGlzdGVuSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiY29tcG9uZW50RGlkTW91bnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImRlZmF1bHRWYWx1ZSIsInZhbHVlU3RhdGUiLCJhdXRvQ2xlYXJTZWFyY2hWYWx1ZSIsImNsYXNzTmFtZSIsImdldFBvcHVwQ29udGFpbmVyIiwibXVsdGlwbGUiLCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJ0cmVlRGF0YSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJ2aXNpYmxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5IiwiZnVuYyIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiVHJlZU5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGtCQUFmOztBQUNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDakIsY0FBWUMsc0JBREs7QUFFakIsZ0JBQWNDLHdCQUZHO0FBR2pCLGlCQUFlQztBQUhFLENBQW5COztBQXdEQSxJQUFNQyxxQkFBcUIsR0FBRyxT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QVcsRUFBRSxJQU5nQztBQU83QytCLEVBQUFBLFFBQVEsRUFBRSxJQVBtQztBQVE3QzdDLEVBQUFBLFFBQVEsRUFBRXhDLElBUm1DO0FBUzdDc0YsRUFBQUEsdUJBQXVCLEVBQUV0RixJQVRvQjtBQVU3QzZDLEVBQUFBLFFBQVEsRUFBRTdDLElBVm1DO0FBVzdDdUYsRUFBQUEsU0FBUyxFQUFFLFlBWGtDO0FBWTdDZCxFQUFBQSxXQUFXLEVBQUUsS0FaZ0M7QUFhN0NqQixFQUFBQSxZQUFZLEVBQUUsSUFiK0I7QUFjN0NrQixFQUFBQSxhQUFhLEVBQUUsSUFkOEI7QUFlN0NjLEVBQUFBLFNBQVMsRUFBRSxNQWZrQztBQWdCN0NDLEVBQUFBLG1CQUFtQixFQUFFLGFBaEJ3QjtBQWlCN0MxRSxFQUFBQSxLQUFLLEVBQUU7QUFqQnNDLEM7O0FBNUYzQ1UsVSxDQWdIVXFGLHdCLEdBQTJCLGlCQUFpQztBQUFBLE1BQTlCL0YsS0FBOEIsU0FBOUJBLEtBQThCOztBQUN4RSxNQUFJQSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixXQUFPO0FBQ0xBLE1BQUFBLEtBQUssRUFBTEE7QUFESyxLQUFQO0FBR0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQzs7QUF2SEdVLFUsQ0F5SFVzRixRLEdBQTRCQSxzQjtlQW9XN0J0RixVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSY1RyZWVTZWxlY3QsIHtcbiAgU0hPV19BTEwsXG4gIFNIT1dfUEFSRU5ULFxuICBTSE9XX0NISUxELFxuICBUcmVlTm9kZSxcbn0gZnJvbSBcInJjLXRyZWUtc2VsZWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG5leHBvcnQgdHlwZSBUcmVlTm9kZVZhbHVlID0gc3RyaW5nW10gfCBudW1iZXJbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIG1heFRhZ0NvdW50PzogbnVsbCB8IG51bWJlclxuICBtdWx0aXBsZT86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFRyZWVOb2RlVmFsdWUsIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW10pID0+IHZvaWRcbiAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICBvblNlYXJjaD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICByZXN1bHRSZW5kZXI/OiBudWxsIHwgKCh2YWx1ZXM6IElUcmVlTm9kZVtdKSA9PiBKU1guRWxlbWVudClcbiAgcmVzdWx0VmlzaWJsZT86IGJvb2xlYW5cbiAgc2hvd0NoZWNrZWRTdHJhdGVneT86IFwic2hvdy1hbGxcIiB8IFwic2hvdy1jaGlsZFwiIHwgXCJzaG93LXBhcmVudFwiXG4gIHZhbHVlPzogVHJlZU5vZGVWYWx1ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlU2VsZWN0U3RhdGUge1xuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY2hlY2thYmxlPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICB0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZVxuICBrZXk/OiBzdHJpbmdcbiAgZXZlbnRLZXk/OiBzdHJpbmdcbiAgaXNMZWFmPzogYm9vbGVhblxuICBjaGVja2VkPzogYm9vbGVhblxuICBleHBhbmRlZD86IGJvb2xlYW5cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgc2VsZWN0ZWQ/OiBib29sZWFuXG4gIHNlbGVjdGFibGU/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmNvbnN0IGNvbnZlcnRDaGlsZHJlblRvRGF0YSA9IChub2RlczogYW55KSA9PiB7XG4gIHJldHVybiB0b0FycmF5KG5vZGVzKVxuICAgIC5tYXAoKG5vZGU6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChub2RlKSB8fCAhbm9kZS50eXBlKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICBjb25zdCB7XG4gICAgICAgIGtleSxcbiAgICAgICAgcHJvcHM6IHsgY2hpbGRyZW4sIHZhbHVlLCBwb3BvdmVyLCBwb3BvdmVyUHJvcHMsIHRpdGxlLCAuLi5yZXN0UHJvcHMgfSxcbiAgICAgIH0gPSBub2RlIGFzIFJlYWN0LlJlYWN0RWxlbWVudFxuXG4gICAgICAvKipcbiAgICAgICAqIOWmguaenOaciSBwb3BvdmVyIOWImeWcqOi/memHjOWMheijheS4gOS4iyB0aXRsZVxuICAgICAgICovXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBrZXksXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBkYXRhVGl0bGU6IHRpdGxlLFxuICAgICAgICB0aXRsZTogcG9wb3ZlciA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXBvcC10cmlnZ2VyXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPFBvcG92ZXIgcG9wdXA9e3BvcG92ZXJ9IHBsYWNlbWVudD1cInJpZ2h0XCIgey4uLnBvcG92ZXJQcm9wc30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlclwiIC8+XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgKSxcbiAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZERhdGEgPSBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pXG4gICAgICBpZiAoY2hpbGREYXRhLmxlbmd0aCkge1xuICAgICAgICBkYXRhLmNoaWxkcmVuID0gY2hpbGREYXRhXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgICAuZmlsdGVyKChkYXRhKSA9PiBkYXRhKVxufVxuXG4vKipcbiAqIOagkeW9oumAieaLqVxuICovXG5jbGFzcyBUcmVlU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUcmVlU2VsZWN0UHJvcHMsIElUcmVlU2VsZWN0U3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog5YC86KKr6YCJ5oup5ZCO77yM5piv5ZCm6ZyA6KaB5riF56m65pCc57Si5qGGXG4gICAgICovXG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQjVxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDpu5jorqTpgInkuK3nmoQga2V5XG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbnpoHnlKhcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICAgKi9cbiAgICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pyA5aSa5pi+56S65aSa5bCR5LiqIHRhZ++8jOWmguaenOi2hei/h+S6huWImeS7peaUtui1t+eahOW9ouW8j+WHuueOsFxuICAgICAqL1xuICAgIG1heFRhZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWkmumAieaooeW8j1xuICAgICAqL1xuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlgLzlj5jljJbml7bnmoTlm57osIPvvIzlj4LmlbA6IHZhbHVlXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOS4i+aLiSB2aXNpYmxlIOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogYm9vbGVhblxuICAgICAqL1xuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmkJzntKLml7bnmoTlm57osIPvvIzlj4LmlbA6IHZhbHVlXG4gICAgICovXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruW8ueWHuuS9jee9rlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwidG9wXCIsXG4gICAgICBcImxlZnRcIixcbiAgICAgIFwicmlnaHRcIixcbiAgICAgIFwiYm90dG9tXCIsXG4gICAgICBcInRvcExlZnRcIixcbiAgICAgIFwidG9wUmlnaHRcIixcbiAgICAgIFwiYm90dG9tTGVmdFwiLFxuICAgICAgXCJib3R0b21SaWdodFwiLFxuICAgICAgXCJsZWZ0VG9wXCIsXG4gICAgICBcImxlZnRCb3R0b21cIixcbiAgICAgIFwicmlnaHRUb3BcIixcbiAgICAgIFwicmlnaHRCb3R0b21cIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7ovpPlhaXmoYbnmoTpu5jorqTlhoXlrrlcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDorr7nva7oh6rlrprkuYnnmoTnu5PmnpzmuLLmn5NcbiAgICAgKi9cbiAgICByZXN1bHRSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOi+k+WFpeahhuWGheeahOagh+etvuaYr+WQpuaYvuekuu+8jOatpCBQcm9wIOeUqOS6juaDs+imgeWwhue7k+aenOWMuuWxleekuuWcqOWIq+eahOWcsOaWueeahOmcgOaxglxuICAgICAqL1xuICAgIHJlc3VsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWumuWItuagkeW9oumAieaLqeWZqOeahGljb25cbiAgICAgKi9cbiAgICByaWdodEljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5a6a5LmJ6YCJ5Lit6aG55Zue5aGr55qE5pa55byP77yaXG4gICAgICogMS4gc2hvdy1hbGzvvJrmmL7npLrljIXmi6zniLboioLngrnnmoTmiYDmnInpgInkuK3oioLngrnvvJtcbiAgICAgKiAyLiBzaG93LXBhcmVudO+8muWPquaYvuekuueItuiKgueCue+8m1xuICAgICAqIDMuIHNob3ctY2hpbGTvvJrlj6rmmL7npLrlrZDoioLngrnjgILpu5jorqTlgLzvvJpzaG93LXBhcmVudFxuICAgICAqL1xuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInNob3ctYWxsXCIsXG4gICAgICBcInNob3ctcGFyZW50XCIsXG4gICAgICBcInNob3ctY2hpbGRcIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrpgInkuK3nmoQga2V5XG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMgPSB7XG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gICAgbWF4VGFnQ291bnQ6IG51bGwsXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgb25TZWFyY2g6IG5vb3AsXG4gICAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgICByZXN1bHRSZW5kZXI6IG51bGwsXG4gICAgcmVzdWx0VmlzaWJsZTogdHJ1ZSxcbiAgICByaWdodEljb246IFwibWVudVwiLFxuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFwic2hvdy1wYXJlbnRcIixcbiAgICB2YWx1ZTogbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHsgdmFsdWUgfTogSVRyZWVTZWxlY3RQcm9wcykgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFRyZWVOb2RlOiB0eXBlb2YgVHJlZU5vZGUgPSBUcmVlTm9kZVxuXG4gIHB1YmxpYyBzZWxlY3Q6IHR5cGVvZiBSY1RyZWVTZWxlY3RcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRyZWVTZWxlY3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgdmFsdWUsIGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2YWx1ZVN0YXRlID0gdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIG5leHRTdGF0ZTogSVRyZWVTZWxlY3RTdGF0ZVxuICApID0+XG4gICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuXG4gIHB1YmxpYyBzYXZlU2VsZWN0ID0gKG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVXcmFwcGVyID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy53cmFwcGVyID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHJlbmRlclN3aXRjaGVySWNvbiA9ICh7IGlzTGVhZiwgbG9hZGluZyB9OiBJVHJlZU5vZGVQcm9wcykgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgc2l6ZT1cIm1pbmlcIiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXN3aXRjaGVyLWljb25cIiAvPlxuICAgIH1cbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEljb24gaWNvbj1cImFycm93LXJpZ2h0XCIgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1zd2l0Y2hlci1pY29uXCIgLz5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlID0gKFxuICAgIHZhbHVlOiBUcmVlTm9kZVZhbHVlLFxuICAgIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW11cbiAgKSA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgb25DaGFuZ2UsIHZhbHVlOiB2YWx1ZVByb3AgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlLCB0aXRsZUxpc3QpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25TZWFyY2ggfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgIG9uU2VhcmNoKHZhbClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbHRlclRyZWVOb2RlID0gKGlucHV0OiBzdHJpbmcsIHRyZWVOb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGtleSwgdGl0bGUsIHZhbHVlLCBkYXRhVGl0bGUgfSA9IHRyZWVOb2RlXG4gICAgaWYgKCFrZXkgfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhkYXRhVGl0bGUgfHwgdGl0bGUpLmluY2x1ZGVzKGlucHV0KVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ0NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoIW1heFRhZ0NvdW50IHx8ICF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPD0gbWF4VGFnQ291bnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnUGxhY2Vob2xkZXIgPSAobm9kZXM6IElUcmVlTm9kZVtdKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcmVzdWx0UmVuZGVyLCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlc3VsdFJlbmRlcihub2RlcylcbiAgICB9XG5cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gbm9kZXNcbiAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSAoXG4gICAgICA8PlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIHtub2Rlc1swXS5sYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIC4uLuetiSB7bGVuZ3RofSDkuKpcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4LXBvcG92ZXItaXRlbS13cmFwcGVyXCI+XG4gICAgICAgICAgICB7bm9kZXMubWFwKCh7IGtleSwgZGlzYWJsZWQsIGxhYmVsIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4LXBvcG92ZXItaXRlbVwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7IWRpc2FibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxzID0gbm9kZXMubWFwKChvKSA9PiBvLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFscy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gbm9kZXMubWFwKChvKSA9PiBvLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzLnNwbGljZShpLCAxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFscywgbGFiZWxzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBwb3B1cENsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4UG9wb3ZlclwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heFBsYWNlaG9sZGVyXCJcbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7cGxhY2Vob2xkZXJUZXh0fVxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuXG4gIGxpc3RlbklucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZSB9LFxuICAgICAga2V5Q29kZSxcbiAgICB9ID0gZVxuXG4gICAgaWYgKGtleUNvZGUgPT09IDggJiYgdmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCwgcGxhY2Vob2xkZXIsIHJlc3VsdFZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIC8vIOemgeatoiB0cmVlLXNlbGVjdCDplK7nm5jlm57liKDkvJrlvbHlk40gdmFsdWVcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubGlzdGVuSW5wdXRDaGFuZ2UsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIGlmICghcmVzdWx0VmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlc3VsdFZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICAvKipcbiAgICAgKiByZXN1bHRWaXNpYmxlIOS4uiBmYWxzZSDml7bvvIwgc2VsZWN0b3Ig6auY5bqm5LiN5Lya5pS55Y+Y44CCXG4gICAgICog5qC55o2u5oiR55qE57uP6aqMIFBvcHVwIOinpuWPkemHjeaWsOWumuS9jeeahOaXtuacuuaYr++8mlxuICAgICAqIDEuIHdpbmRvdyByZXNpemVcbiAgICAgKiAyLiByZXNpemUgb2JzZXJ2ZXIg5LqGIHNlbGVjdG9yXG4gICAgICog5Zug5q2k6L+Z6YeM5omL5Yqo6Kem5Y+RIHJlc2l6ZVxuICAgICAqL1xuICAgIGlmICghcmVzdWx0VmlzaWJsZSkge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByaWdodEljb24sXG4gICAgICByZXN1bHRSZW5kZXIsXG4gICAgICByZXN1bHRWaXNpYmxlLFxuICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSxcbiAgICAgIHRyZWVEYXRhLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHM6IGFueSA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJvbkNoYW5nZVwiLFxuICAgICAgXCJvblNlYXJjaFwiLFxuICAgICAgXCJkZWZhdWx0VmFsdWVcIixcbiAgICAgIFwidmFsdWVcIixcbiAgICBdKVxuXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYCR7cHJlZml4fS13cmFwcGVyYCwge1xuICAgICAgW2Ake3ByZWZpeH1fcmVzdWx0SGlkZGVuYF06ICFyZXN1bHRWaXNpYmxlLFxuICAgIH0pXG5cbiAgICBsZXQgY2hlY2tib3g6IGFueSA9IG11bHRpcGxlXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBjaGVja2JveCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtdHJlZS1jaGVja2JveC1pbmRldGVybWluYXRlU3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICB4PVwiMVwiXG4gICAgICAgICAgICAgIHk9XCI0XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICByeD1cIi41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtdHJlZS1jaGVja2JveC1jaGVja2VkU3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTS42MTggNS44MjdhLjQ2My40NjMgMCAwIDEtLjAyLS42NzVsLjgwNC0uODA0YS41Mi41MiAwIDAgMSAuNzE2LS4wMUw0Ljc1IDYuNzVsNC45MjItNS42MjVhLjUxMy41MTMgMCAwIDEgLjcwNy0uMDZsLjc0Mi42MmEuNDc4LjQ3OCAwIDAgMSAuMDQ0LjY4N2wtNi4wOCA2Ljc1NmEuNTA2LjUwNiAwIDAgMS0uNzAzLjA0NUwuNjE4IDUuODI3elwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJlc3RQcm9wcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0TWF4VGFnQ291bnQoKVxuICAgICAgaWYgKGNvdW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IGNvdW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gMFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlclwiLCB7XG4gICAgICAgICAgICAgIFwiYWR1aS10cmVlLXNlbGVjdC13cmFwcGVyLW1heFRhZ1wiOiB0aGlzLmdldE1heFRhZ0NvdW50KCkgIT09IG51bGwsXG4gICAgICAgICAgICAgIFwiYWR1aS10cmVlLXNlbGVjdC13cmFwcGVyLXJlc3VsdFJlbmRlclwiOiAhIXJlc3VsdFJlbmRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVXcmFwcGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSY1RyZWVTZWxlY3RcbiAgICAgICAgICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU9e1xuICAgICAgICAgICAgICAgIHJlc3VsdFZpc2libGUgPyBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9e2Ake3ByZWZpeH0tZHJvcGRvd24tJHtcbiAgICAgICAgICAgICAgICBtdWx0aXBsZSA/IFwibXVsdGlwbGVcIiA6IFwic2luZ2xlXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIGRyb3Bkb3duUG9wdXBBbGlnbj17XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50ICYmIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpbHRlclRyZWVOb2RlPXt0aGlzLmZpbHRlclRyZWVOb2RlfVxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICAgICAgICBpbnB1dEljb249ezxJY29uIGljb249XCJ0cmlhbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyPXt0aGlzLmdldE1heFRhZ1BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9XCLml6DljLnphY3nu5PmnpxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwcmVmaXhDbHM9XCJhZHVpLXRyZWUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWxlY3R9XG4gICAgICAgICAgICAgIHJlbW92ZUljb249ezxJY29uIGljb249XCJjYW5jZWxcIiBpbnRlcmFjdGl2ZSBzaXplPXsxNn0gLz59XG4gICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3k9e1xuICAgICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3kgJiYgc3RyYXRlZ2llc1tzaG93Q2hlY2tlZFN0cmF0ZWd5XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3dTZWFyY2g9e211bHRpcGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hlckljb249e3RoaXMucmVuZGVyU3dpdGNoZXJJY29ufVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgICAgdHJlZUNoZWNrYWJsZT17Y2hlY2tib3h9XG4gICAgICAgICAgICAgIHRyZWVOb2RlRmlsdGVyUHJvcD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezM2fVxuICAgICAgICAgICAgICBsaXN0SGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgIHRyZWVEYXRhPXt0cmVlRGF0YSB8fCBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pfVxuICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17KHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICAgICAgaWYgKG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9SY1RyZWVTZWxlY3Q+XG4gICAgICAgICAgICB7ISFyaWdodEljb24gJiYgbXVsdGlwbGUgJiYgKFxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXtyaWdodEljb259IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtaWNvblwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlU2VsZWN0XG4iXX0=