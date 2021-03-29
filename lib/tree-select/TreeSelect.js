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

var _portal = _interopRequireDefault(require("../portal"));

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
    _this.portal = void 0;
    _this.wrapper = void 0;

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      return !(0, _shallowequal["default"])(_this.props, nextProps) || !(0, _shallowequal["default"])(_this.state, nextState);
    };

    _this.saveSelect = function (node) {
      _this.select = node;
    };

    _this.savePortal = function (node) {
      _this.portal = node;
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

    _this.handleVisibleChange = function (visible) {
      setTimeout(function () {
        _this.forceUpdate(function () {
          var topContent = _this.props.topContent;
          var _this$state = _this.state,
              hash = _this$state.hash,
              topContentPortalTarget = _this$state.topContentPortalTarget;

          if (visible && topContent && !topContentPortalTarget) {
            var dropdown = document.querySelector(".".concat(prefix, "-dropdown_").concat(hash));

            if (dropdown) {
              var el = document.createElement("div");

              el.onmousedown = function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
              };

              dropdown.insertBefore(el, dropdown.children[0]);

              _this.setState({
                topContentPortalTarget: el
              });
            }
          }
        });
      }, 0);
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
        setTimeout(function () {
          window.dispatchEvent(new Event("resize"));
        }, 0);
      }
    };

    var _value = props.value,
        defaultValue = props.defaultValue;
    var valueState = _value !== null ? _value : defaultValue;
    _this.state = {
      hash: Math.random().toString(36).substring(3, 8),
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
          topContent = _this$props4.topContent,
          treeData = _this$props4.treeData,
          otherProps = _objectWithoutProperties(_this$props4, ["autoClearSearchValue", "children", "className", "getPopupContainer", "maxTagCount", "multiple", "onDropdownVisibleChange", "placement", "placeholder", "rightIcon", "resultRender", "resultVisible", "showCheckedStrategy", "topContent", "treeData"]);

      var restProps = (0, _omit["default"])(otherProps, ["onChange", "onSearch", "defaultValue", "value"]);
      var _this$state2 = this.state,
          hash = _this$state2.hash,
          topContentPortalTarget = _this$state2.topContentPortalTarget,
          value = _this$state2.value;
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
        }, topContent && topContentPortalTarget && React.createElement(_portal["default"], {
          ref: _this2.savePortal,
          container: topContentPortalTarget
        }, topContent), React.createElement(_rcTreeSelect["default"], _extends({
          autoClearSearchValue: resultVisible ? autoClearSearchValue : false,
          className: classSet,
          dropdownClassName: "".concat(prefix, "-dropdown-").concat(multiple ? "multiple" : "single", " ").concat(prefix, "-dropdown_").concat(hash),
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
            if (!visible) {
              _this2.handleSearch("");
            }

            _this2.handleVisibleChange(visible);

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
  topContent: _propTypes["default"].node,
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
  topContent: undefined,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIm5vZGVzIiwibWFwIiwibm9kZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInRpdGxlIiwicmVzdFByb3BzIiwiZGF0YSIsImRhdGFUaXRsZSIsImNoaWxkRGF0YSIsImxlbmd0aCIsImZpbHRlciIsIlRyZWVTZWxlY3QiLCJzZWxlY3QiLCJwb3J0YWwiLCJ3cmFwcGVyIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwic2F2ZVBvcnRhbCIsInNhdmVXcmFwcGVyIiwicmVuZGVyU3dpdGNoZXJJY29uIiwiaXNMZWFmIiwibG9hZGluZyIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwic2V0VGltZW91dCIsImZvcmNlVXBkYXRlIiwidG9wQ29udGVudCIsImhhc2giLCJ0b3BDb250ZW50UG9ydGFsVGFyZ2V0IiwiZHJvcGRvd24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJvbm1vdXNlZG93biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImluc2VydEJlZm9yZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwidGl0bGVMaXN0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsImhhbmRsZVNlYXJjaCIsInZhbCIsIm9uU2VhcmNoIiwiZmlsdGVyVHJlZU5vZGUiLCJpbnB1dCIsInRyZWVOb2RlIiwiU3RyaW5nIiwiaW5jbHVkZXMiLCJnZXRNYXhUYWdDb3VudCIsIm1heFRhZ0NvdW50IiwiZ2V0TWF4VGFnUGxhY2Vob2xkZXIiLCJyZXN1bHRSZW5kZXIiLCJwbGFjZWhvbGRlclRleHQiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsImxhYmVsIiwiaSIsInZhbHMiLCJvIiwic3BsaWNlIiwibGFiZWxzIiwic3RvcFByb3BhZ2F0aW9uIiwibGlzdGVuSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJrZXlDb2RlIiwiY29tcG9uZW50RGlkTW91bnQiLCJwbGFjZWhvbGRlciIsInJlc3VsdFZpc2libGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50RGlkVXBkYXRlIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZGVmYXVsdFZhbHVlIiwidmFsdWVTdGF0ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiY2xhc3NOYW1lIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtdWx0aXBsZSIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwicGxhY2VtZW50IiwicmlnaHRJY29uIiwic2hvd0NoZWNrZWRTdHJhdGVneSIsInRyZWVEYXRhIiwib3RoZXJQcm9wcyIsImNsYXNzU2V0IiwiY2hlY2tib3giLCJjb3VudCIsImdldFBvcHVwQ29udGFpbmVyQ29udGV4dCIsImFsaWduRWRnZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJhcnJheSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIlRyZWVOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxrQkFBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCLGNBQVlDLHNCQURLO0FBRWpCLGdCQUFjQyx3QkFGRztBQUdqQixpQkFBZUM7QUFIRSxDQUFuQjs7QUEyREEsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQWdCO0FBQzVDLFNBQU8seUJBQVFBLEtBQVIsRUFDSkMsR0FESSxDQUNBLFVBQUNDLElBQUQsRUFBOEI7QUFDakMsUUFBSSxDQUFDQyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJGLElBQXJCLENBQUQsSUFBK0IsQ0FBQ0EsSUFBSSxDQUFDRyxJQUF6QyxFQUErQztBQUM3QyxhQUFPLElBQVA7QUFDRDs7QUFIZ0MsZUFPN0JILElBUDZCO0FBQUEsUUFLL0JJLEdBTCtCLFFBSy9CQSxHQUwrQjtBQUFBLDBCQU0vQkMsS0FOK0I7QUFBQSxRQU10QkMsUUFOc0IsY0FNdEJBLFFBTnNCO0FBQUEsUUFNWkMsS0FOWSxjQU1aQSxLQU5ZO0FBQUEsUUFNTEMsT0FOSyxjQU1MQSxPQU5LO0FBQUEsUUFNSUMsWUFOSixjQU1JQSxZQU5KO0FBQUEsUUFNa0JDLEtBTmxCLGNBTWtCQSxLQU5sQjtBQUFBLFFBTTRCQyxTQU41Qjs7QUFZakMsUUFBTUMsSUFBSTtBQUNSUixNQUFBQSxHQUFHLEVBQUhBLEdBRFE7QUFFUkcsTUFBQUEsS0FBSyxFQUFMQSxLQUZRO0FBR1JNLE1BQUFBLFNBQVMsRUFBRUgsS0FISDtBQUlSQSxNQUFBQSxLQUFLLEVBQUVGLE9BQU8sR0FDWiwwQ0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FBK0NFLEtBQS9DLENBREYsRUFFRSxvQkFBQyxtQkFBRDtBQUFTLFFBQUEsS0FBSyxFQUFFRixPQUFoQjtBQUF5QixRQUFBLFNBQVMsRUFBQztBQUFuQyxTQUErQ0MsWUFBL0MsR0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsUUFERixDQUZGLENBRFksR0FRWkM7QUFaTSxPQWNMQyxTQWRLLENBQVY7O0FBaUJBLFFBQU1HLFNBQVMsR0FBR2pCLHFCQUFxQixDQUFDUyxRQUFELENBQXZDOztBQUNBLFFBQUlRLFNBQVMsQ0FBQ0MsTUFBZCxFQUFzQjtBQUNwQkgsTUFBQUEsSUFBSSxDQUFDTixRQUFMLEdBQWdCUSxTQUFoQjtBQUNEOztBQUVELFdBQU9GLElBQVA7QUFDRCxHQXBDSSxFQXFDSkksTUFyQ0ksQ0FxQ0csVUFBQ0osSUFBRDtBQUFBLFdBQVVBLElBQVY7QUFBQSxHQXJDSCxDQUFQO0FBc0NELENBdkNEOztJQTRDTUssVTs7Ozs7QUFzSUosc0JBQVlaLEtBQVosRUFBcUM7QUFBQTs7QUFBQTs7QUFDbkMsOEJBQU1BLEtBQU47QUFEbUMsVUFOOUJhLE1BTThCO0FBQUEsVUFKOUJDLE1BSThCO0FBQUEsVUFGOUJDLE9BRThCOztBQUFBLFVBVzlCQyxxQkFYOEIsR0FXTixVQUM3QkMsU0FENkIsRUFFN0JDLFNBRjZCO0FBQUEsYUFJN0IsQ0FBQyw4QkFBYSxNQUFLbEIsS0FBbEIsRUFBeUJpQixTQUF6QixDQUFELElBQXdDLENBQUMsOEJBQWEsTUFBS0UsS0FBbEIsRUFBeUJELFNBQXpCLENBSlo7QUFBQSxLQVhNOztBQUFBLFVBaUI5QkUsVUFqQjhCLEdBaUJqQixVQUFDekIsSUFBRCxFQUEyQjtBQUM3QyxZQUFLa0IsTUFBTCxHQUFjbEIsSUFBZDtBQUNELEtBbkJvQzs7QUFBQSxVQXFCOUIwQixVQXJCOEIsR0FxQmpCLFVBQUMxQixJQUFELEVBQTJCO0FBQzdDLFlBQUttQixNQUFMLEdBQWNuQixJQUFkO0FBQ0QsS0F2Qm9DOztBQUFBLFVBeUI5QjJCLFdBekI4QixHQXlCaEIsVUFBQzNCLElBQUQsRUFBMEI7QUFDN0MsWUFBS29CLE9BQUwsR0FBZXBCLElBQWY7QUFDRCxLQTNCb0M7O0FBQUEsVUE2QjlCNEIsa0JBN0I4QixHQTZCVCxpQkFBeUM7QUFBQSxVQUF0Q0MsTUFBc0MsU0FBdENBLE1BQXNDO0FBQUEsVUFBOUJDLE9BQThCLFNBQTlCQSxPQUE4Qjs7QUFDbkUsVUFBSUEsT0FBSixFQUFhO0FBQ1gsZUFBTyxvQkFBQyxtQkFBRDtBQUFTLFVBQUEsSUFBSSxFQUFDLE1BQWQ7QUFBcUIsVUFBQSxTQUFTLEVBQUM7QUFBL0IsVUFBUDtBQUNEOztBQUNELFVBQUlELE1BQUosRUFBWTtBQUNWLGVBQU8sSUFBUDtBQUNEOztBQUNELGFBQ0Usb0JBQUMsZ0JBQUQ7QUFBTSxRQUFBLElBQUksRUFBQyxhQUFYO0FBQXlCLFFBQUEsU0FBUyxFQUFDO0FBQW5DLFFBREY7QUFHRCxLQXZDb0M7O0FBQUEsVUF5QzlCRSxtQkF6QzhCLEdBeUNSLFVBQUNDLE9BQUQsRUFBc0I7QUFDakRDLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBS0MsV0FBTCxDQUFpQixZQUFNO0FBQUEsY0FDYkMsVUFEYSxHQUNFLE1BQUs5QixLQURQLENBQ2I4QixVQURhO0FBQUEsNEJBRW9CLE1BQUtYLEtBRnpCO0FBQUEsY0FFYlksSUFGYSxlQUViQSxJQUZhO0FBQUEsY0FFUEMsc0JBRk8sZUFFUEEsc0JBRk87O0FBTXJCLGNBQUlMLE9BQU8sSUFBSUcsVUFBWCxJQUF5QixDQUFDRSxzQkFBOUIsRUFBc0Q7QUFDcEQsZ0JBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULFlBQ1hqRCxNQURXLHVCQUNRNkMsSUFEUixFQUFqQjs7QUFHQSxnQkFBSUUsUUFBSixFQUFjO0FBQ1osa0JBQU1HLEVBQUUsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLEtBQXZCLENBQVg7O0FBQ0FELGNBQUFBLEVBQUUsQ0FBQ0UsV0FBSCxHQUFpQixVQUFDQyxDQUFELEVBQU87QUFDdEJBLGdCQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUQsZ0JBQUFBLENBQUMsQ0FBQ0Usd0JBQUY7QUFDRCxlQUhEOztBQUlBUixjQUFBQSxRQUFRLENBQUNTLFlBQVQsQ0FBc0JOLEVBQXRCLEVBQTBCSCxRQUFRLENBQUNoQyxRQUFULENBQWtCLENBQWxCLENBQTFCOztBQUNBLG9CQUFLMEMsUUFBTCxDQUFjO0FBQ1pYLGdCQUFBQSxzQkFBc0IsRUFBRUk7QUFEWixlQUFkO0FBR0Q7QUFDRjtBQUNGLFNBdEJEO0FBdUJELE9BeEJTLEVBd0JQLENBeEJPLENBQVY7QUF5QkQsS0FuRW9DOztBQUFBLFVBcUU5QlEsWUFyRThCLEdBcUVmLFVBQ3BCMUMsS0FEb0IsRUFFcEIyQyxTQUZvQixFQUdqQjtBQUFBLHdCQUM4QyxNQUFLN0MsS0FEbkQ7QUFBQSxVQUNLOEMsUUFETCxlQUNLQSxRQURMO0FBQUEsVUFDZUMsUUFEZixlQUNlQSxRQURmO0FBQUEsVUFDZ0NDLFNBRGhDLGVBQ3lCOUMsS0FEekI7O0FBRUgsVUFBSSxDQUFDNEMsUUFBTCxFQUFlO0FBQ2IsWUFBSUUsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLGdCQUFLTCxRQUFMLENBQWM7QUFBRXpDLFlBQUFBLEtBQUssRUFBTEE7QUFBRixXQUFkO0FBQ0Q7O0FBQ0QsWUFBSTZDLFFBQUosRUFBYztBQUNaQSxVQUFBQSxRQUFRLENBQUM3QyxLQUFELEVBQVEyQyxTQUFSLENBQVI7QUFDRDtBQUNGO0FBQ0YsS0FsRm9DOztBQUFBLFVBb0Y5QkksWUFwRjhCLEdBb0ZmLFVBQUNDLEdBQUQsRUFBaUI7QUFBQSxVQUM3QkMsUUFENkIsR0FDaEIsTUFBS25ELEtBRFcsQ0FDN0JtRCxRQUQ2Qjs7QUFFckMsVUFBSUEsUUFBSixFQUFjO0FBQ1pBLFFBQUFBLFFBQVEsQ0FBQ0QsR0FBRCxDQUFSO0FBQ0F0QixRQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmLGdCQUFLQyxXQUFMO0FBQ0QsU0FGUyxFQUVQLENBRk8sQ0FBVjtBQUdEO0FBQ0YsS0E1Rm9DOztBQUFBLFVBOEY5QnVCLGNBOUY4QixHQThGYixVQUFDQyxLQUFELEVBQWdCQyxRQUFoQixFQUFrQztBQUFBLFVBQ2hEdkQsR0FEZ0QsR0FDZnVELFFBRGUsQ0FDaER2RCxHQURnRDtBQUFBLFVBQzNDTSxLQUQyQyxHQUNmaUQsUUFEZSxDQUMzQ2pELEtBRDJDO0FBQUEsVUFDcENILEtBRG9DLEdBQ2ZvRCxRQURlLENBQ3BDcEQsS0FEb0M7QUFBQSxVQUM3Qk0sU0FENkIsR0FDZjhDLFFBRGUsQ0FDN0I5QyxTQUQ2Qjs7QUFFeEQsVUFBSSxDQUFDVCxHQUFELElBQVEsQ0FBQ0csS0FBYixFQUFvQjtBQUNsQixlQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPcUQsTUFBTSxDQUFDL0MsU0FBUyxJQUFJSCxLQUFkLENBQU4sQ0FBMkJtRCxRQUEzQixDQUFvQ0gsS0FBcEMsQ0FBUDtBQUNELEtBcEdvQzs7QUFBQSxVQXNHOUJJLGNBdEc4QixHQXNHYixZQUFNO0FBQUEsVUFDcEJDLFdBRG9CLEdBQ0osTUFBSzFELEtBREQsQ0FDcEIwRCxXQURvQjtBQUFBLFVBRXBCeEQsS0FGb0IsR0FFVixNQUFLaUIsS0FGSyxDQUVwQmpCLEtBRm9COztBQUk1QixVQUFJLENBQUN3RCxXQUFELElBQWdCLENBQUN4RCxLQUFqQixJQUEwQkEsS0FBSyxDQUFDUSxNQUFOLElBQWdCZ0QsV0FBOUMsRUFBMkQ7QUFDekQsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxDQUFQO0FBQ0QsS0E5R29DOztBQUFBLFVBZ0g5QkMsb0JBaEg4QixHQWdIUCxVQUFDbEUsS0FBRCxFQUF3QjtBQUNwRCxVQUFJLENBQUMsTUFBS29CLE1BQVYsRUFBa0I7QUFDaEIsZUFBTyxJQUFQO0FBQ0Q7O0FBSG1ELHlCQUlWLE1BQUtiLEtBSks7QUFBQSxVQUk1QytDLFFBSjRDLGdCQUk1Q0EsUUFKNEM7QUFBQSxVQUlsQ2EsWUFKa0MsZ0JBSWxDQSxZQUprQztBQUFBLFVBSXBCMUQsS0FKb0IsZ0JBSXBCQSxLQUpvQjs7QUFNcEQsVUFBSTBELFlBQUosRUFBa0I7QUFDaEIsZUFBT0EsWUFBWSxDQUFDbkUsS0FBRCxDQUFuQjtBQUNEOztBQVJtRCxVQVU1Q2lCLE1BVjRDLEdBVWpDakIsS0FWaUMsQ0FVNUNpQixNQVY0QztBQVdwRCxVQUFNbUQsZUFBZSxHQUNuQiwwQ0FDRTtBQUFNLFFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLE9BQU8sRUFBRSxjQUFYO0FBQTJCQyxVQUFBQSxhQUFhLEVBQUU7QUFBMUM7QUFBYixTQUNHdEUsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTdUUsS0FEWixDQURGLEVBSUU7QUFBTSxRQUFBLEtBQUssRUFBRTtBQUFFRixVQUFBQSxPQUFPLEVBQUUsY0FBWDtBQUEyQkMsVUFBQUEsYUFBYSxFQUFFO0FBQTFDO0FBQWIsdUJBQ1FyRCxNQURSLFlBSkYsQ0FERjtBQVdBLGFBQ0Usb0JBQUMsbUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSxLQURiO0FBRUUsUUFBQSxTQUFTLEVBQUMsS0FGWjtBQUdFLFFBQUEsS0FBSyxFQUNIO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUNHakIsS0FBSyxDQUFDQyxHQUFOLENBQVUsaUJBQTJCdUUsQ0FBM0IsRUFBaUM7QUFBQSxjQUE5QmxFLEdBQThCLFNBQTlCQSxHQUE4QjtBQUFBLGNBQXpCK0MsUUFBeUIsU0FBekJBLFFBQXlCO0FBQUEsY0FBZmtCLEtBQWUsU0FBZkEsS0FBZTtBQUMxQyxpQkFDRTtBQUFLLFlBQUEsU0FBUyxFQUFDLG1DQUFmO0FBQW1ELFlBQUEsR0FBRyxFQUFFakU7QUFBeEQsYUFDRSxrQ0FBT2lFLEtBQVAsQ0FERixFQUVHLENBQUNsQixRQUFELElBQ0Msb0JBQUMsZ0JBQUQ7QUFDRSxZQUFBLElBQUksRUFBQyxRQURQO0FBRUUsWUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixrQkFBTW9CLElBQUksR0FBR3pFLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUN5RSxDQUFEO0FBQUEsdUJBQU9BLENBQUMsQ0FBQ2pFLEtBQVQ7QUFBQSxlQUFWLENBQWI7QUFDQWdFLGNBQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFZSCxDQUFaLEVBQWUsQ0FBZjs7QUFDQSxrQkFBSS9ELEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLHNCQUFLeUMsUUFBTCxDQUFjO0FBQUV6QyxrQkFBQUEsS0FBSyxFQUFFZ0U7QUFBVCxpQkFBZDtBQUNEOztBQUVELGtCQUFNRyxNQUFNLEdBQUc1RSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDeUUsQ0FBRDtBQUFBLHVCQUFPQSxDQUFDLENBQUNILEtBQVQ7QUFBQSxlQUFWLENBQWY7QUFDQUssY0FBQUEsTUFBTSxDQUFDRCxNQUFQLENBQWNILENBQWQsRUFBaUIsQ0FBakI7O0FBRUEsa0JBQUlsQixRQUFKLEVBQWM7QUFDWkEsZ0JBQUFBLFFBQVEsQ0FBQ21CLElBQUQsRUFBT0csTUFBUCxDQUFSO0FBQ0Q7QUFDRjtBQWZILFlBSEosQ0FERjtBQXdCRCxTQXpCQSxDQURILENBSko7QUFpQ0UsUUFBQSxjQUFjLEVBQUM7QUFqQ2pCLFNBbUNFO0FBQ0UsUUFBQSxTQUFTLEVBQUMsaUNBRFo7QUFFRSxRQUFBLElBQUksRUFBQyxNQUZQO0FBR0UsUUFBQSxPQUFPLEVBQUUsaUJBQUM5QixDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQytCLGVBQUYsRUFBUDtBQUFBO0FBSFgsU0FLR1QsZUFMSCxFQU1FLG9CQUFDLGdCQUFEO0FBQ0UsUUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUEsSUFBSSxFQUFFLEVBRlI7QUFHRSxRQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiLGNBQUkzRCxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixrQkFBS3lDLFFBQUwsQ0FBYztBQUFFekMsY0FBQUEsS0FBSyxFQUFFO0FBQVQsYUFBZDtBQUNEOztBQUNELGNBQUk2QyxRQUFKLEVBQWM7QUFDWkEsWUFBQUEsUUFBUSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQVI7QUFDRDtBQUNGO0FBVkgsUUFORixDQW5DRixDQURGO0FBeURELEtBL0xvQzs7QUFBQSxVQWlNckN3QixpQkFqTXFDLEdBaU1qQixVQUFDaEMsQ0FBRCxFQUFZO0FBQUEsVUFFbEJyQyxLQUZrQixHQUkxQnFDLENBSjBCLENBRTVCaUMsTUFGNEIsQ0FFbEJ0RSxLQUZrQjtBQUFBLFVBRzVCdUUsT0FINEIsR0FJMUJsQyxDQUowQixDQUc1QmtDLE9BSDRCOztBQU05QixVQUFJQSxPQUFPLEtBQUssQ0FBWixJQUFpQnZFLEtBQUssS0FBSyxFQUEvQixFQUFtQztBQUNqQ3FDLFFBQUFBLENBQUMsQ0FBQytCLGVBQUY7QUFDRDtBQUNGLEtBMU1vQzs7QUFBQSxVQTRNOUJJLGlCQTVNOEIsR0E0TVYsWUFBTTtBQUMvQixVQUFNckIsS0FBSyxHQUFHLE1BQUt0QyxPQUFMLENBQWFvQixhQUFiLENBQTJCLE9BQTNCLENBQWQ7O0FBRCtCLHlCQUVxQixNQUFLbkMsS0FGMUI7QUFBQSxVQUV2QjBELFdBRnVCLGdCQUV2QkEsV0FGdUI7QUFBQSxVQUVWaUIsV0FGVSxnQkFFVkEsV0FGVTtBQUFBLFVBRUdDLGFBRkgsZ0JBRUdBLGFBRkg7QUFBQSxVQUd2QjFFLEtBSHVCLEdBR2IsTUFBS2lCLEtBSFEsQ0FHdkJqQixLQUh1Qjs7QUFLL0IsVUFBSW1ELEtBQUosRUFBVztBQUVUQSxRQUFBQSxLQUFLLENBQUN3QixnQkFBTixDQUF1QixTQUF2QixFQUFrQyxNQUFLTixpQkFBdkMsRUFBMEQsS0FBMUQ7QUFDRDs7QUFFRCxVQUFJYixXQUFXLEtBQUssSUFBaEIsSUFBd0J4RCxLQUE1QixFQUFtQztBQUNqQyxjQUFLMkIsV0FBTDtBQUNEOztBQUNELFVBQUksQ0FBQytDLGFBQUQsSUFBa0IsTUFBSzdELE9BQTNCLEVBQW9DO0FBQ2xDLFlBQUlzQyxLQUFKLEVBQVc7QUFDVEEsVUFBQUEsS0FBSyxDQUFDc0IsV0FBTixHQUFvQkEsV0FBcEI7QUFDRDtBQUNGO0FBQ0YsS0E5Tm9DOztBQUFBLFVBZ085Qkcsa0JBaE84QixHQWdPVCxZQUFNO0FBQUEsVUFDeEJGLGFBRHdCLEdBQ04sTUFBSzVFLEtBREMsQ0FDeEI0RSxhQUR3Qjs7QUFTaEMsVUFBSSxDQUFDQSxhQUFMLEVBQW9CO0FBQ2xCaEQsUUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZm1ELFVBQUFBLE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQixJQUFJQyxLQUFKLENBQVUsUUFBVixDQUFyQjtBQUNELFNBRlMsRUFFUCxDQUZPLENBQVY7QUFHRDtBQUNGLEtBOU9vQzs7QUFBQSxRQUUzQi9FLE1BRjJCLEdBRUhGLEtBRkcsQ0FFM0JFLEtBRjJCO0FBQUEsUUFFcEJnRixZQUZvQixHQUVIbEYsS0FGRyxDQUVwQmtGLFlBRm9CO0FBR25DLFFBQU1DLFVBQVUsR0FBR2pGLE1BQUssS0FBSyxJQUFWLEdBQWlCQSxNQUFqQixHQUF5QmdGLFlBQTVDO0FBRUEsVUFBSy9ELEtBQUwsR0FBYTtBQUNYWSxNQUFBQSxJQUFJLEVBQUVxRCxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsRUFBd0MsQ0FBeEMsQ0FESztBQUVYckYsTUFBQUEsS0FBSyxFQUFFaUY7QUFGSSxLQUFiO0FBTG1DO0FBU3BDOzs7OzZCQXVPZTtBQUFBOztBQUFBLHlCQWtCVixLQUFLbkYsS0FsQks7QUFBQSxVQUVad0Ysb0JBRlksZ0JBRVpBLG9CQUZZO0FBQUEsVUFHWnZGLFFBSFksZ0JBR1pBLFFBSFk7QUFBQSxVQUlad0YsU0FKWSxnQkFJWkEsU0FKWTtBQUFBLFVBS1pDLGlCQUxZLGdCQUtaQSxpQkFMWTtBQUFBLFVBTVpoQyxXQU5ZLGdCQU1aQSxXQU5ZO0FBQUEsVUFPWmlDLFFBUFksZ0JBT1pBLFFBUFk7QUFBQSxVQVFaQyx3QkFSWSxnQkFRWkEsdUJBUlk7QUFBQSxVQVNaQyxTQVRZLGdCQVNaQSxTQVRZO0FBQUEsVUFVWmxCLFdBVlksZ0JBVVpBLFdBVlk7QUFBQSxVQVdabUIsU0FYWSxnQkFXWkEsU0FYWTtBQUFBLFVBWVpsQyxZQVpZLGdCQVlaQSxZQVpZO0FBQUEsVUFhWmdCLGFBYlksZ0JBYVpBLGFBYlk7QUFBQSxVQWNabUIsbUJBZFksZ0JBY1pBLG1CQWRZO0FBQUEsVUFlWmpFLFVBZlksZ0JBZVpBLFVBZlk7QUFBQSxVQWdCWmtFLFFBaEJZLGdCQWdCWkEsUUFoQlk7QUFBQSxVQWlCVEMsVUFqQlM7O0FBb0JkLFVBQU0zRixTQUFjLEdBQUcsc0JBQUsyRixVQUFMLEVBQWlCLENBQ3RDLFVBRHNDLEVBRXRDLFVBRnNDLEVBR3RDLGNBSHNDLEVBSXRDLE9BSnNDLENBQWpCLENBQXZCO0FBcEJjLHlCQTJCa0MsS0FBSzlFLEtBM0J2QztBQUFBLFVBMkJOWSxJQTNCTSxnQkEyQk5BLElBM0JNO0FBQUEsVUEyQkFDLHNCQTNCQSxnQkEyQkFBLHNCQTNCQTtBQUFBLFVBMkJ3QjlCLEtBM0J4QixnQkEyQndCQSxLQTNCeEI7QUE2QmQsVUFBTWdHLFFBQVEsR0FBRyw0QkFBV1QsU0FBWCxZQUF5QnZHLE1BQXpCLDZDQUNYQSxNQURXLG9CQUNhLENBQUMwRixhQURkLEVBQWpCO0FBSUEsVUFBSXVCLFFBQWEsR0FBR1IsUUFBcEI7O0FBQ0EsVUFBSUEsUUFBSixFQUFjO0FBQ1pRLFFBQUFBLFFBQVEsR0FDTixpQ0FDRTtBQUNFLFVBQUEsS0FBSyxFQUFDLElBRFI7QUFFRSxVQUFBLE1BQU0sRUFBQyxJQUZUO0FBR0UsVUFBQSxTQUFTLEVBQUM7QUFIWixXQUtFO0FBQ0UsVUFBQSxDQUFDLEVBQUMsR0FESjtBQUVFLFVBQUEsQ0FBQyxFQUFDLEdBRko7QUFHRSxVQUFBLEtBQUssRUFBQyxJQUhSO0FBSUUsVUFBQSxNQUFNLEVBQUMsR0FKVDtBQUtFLFVBQUEsRUFBRSxFQUFDLElBTEw7QUFNRSxVQUFBLElBQUksRUFBQyxNQU5QO0FBT0UsVUFBQSxRQUFRLEVBQUM7QUFQWCxVQUxGLENBREYsRUFnQkU7QUFDRSxVQUFBLEtBQUssRUFBQyxJQURSO0FBRUUsVUFBQSxNQUFNLEVBQUMsSUFGVDtBQUdFLFVBQUEsU0FBUyxFQUFDO0FBSFosV0FLRTtBQUNFLFVBQUEsQ0FBQyxFQUFDLG1NQURKO0FBRUUsVUFBQSxRQUFRLEVBQUM7QUFGWCxVQUxGLENBaEJGLENBREY7QUE2QkQ7O0FBRUQsVUFBSWpHLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCSSxRQUFBQSxTQUFTLENBQUNKLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0Q7O0FBRUQsVUFBSXdELFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QixZQUFNMEMsS0FBSyxHQUFHLEtBQUszQyxjQUFMLEVBQWQ7O0FBQ0EsWUFBSTJDLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCOUYsVUFBQUEsU0FBUyxDQUFDb0QsV0FBVixHQUF3QjBDLEtBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJeEMsWUFBSixFQUFrQjtBQUNoQnRELFFBQUFBLFNBQVMsQ0FBQ29ELFdBQVYsR0FBd0IsQ0FBeEI7QUFDRDs7QUFFRCxhQUNFLG9CQUFDLDZCQUFELENBQWUsUUFBZixRQUNHO0FBQUEsWUFBc0IyQyx3QkFBdEIsU0FBR1gsaUJBQUg7QUFBQSxlQUNDO0FBQ0UsVUFBQSxTQUFTLEVBQUUsNEJBQVcsMEJBQVgsRUFBdUM7QUFDaEQsK0NBQW1DLE1BQUksQ0FBQ2pDLGNBQUwsT0FBMEIsSUFEYjtBQUVoRCxxREFBeUMsQ0FBQyxDQUFDRztBQUZLLFdBQXZDLENBRGI7QUFLRSxVQUFBLEdBQUcsRUFBRSxNQUFJLENBQUN0QztBQUxaLFdBT0dRLFVBQVUsSUFBSUUsc0JBQWQsSUFDQyxvQkFBQyxrQkFBRDtBQUFRLFVBQUEsR0FBRyxFQUFFLE1BQUksQ0FBQ1gsVUFBbEI7QUFBOEIsVUFBQSxTQUFTLEVBQUVXO0FBQXpDLFdBQ0dGLFVBREgsQ0FSSixFQVlFLG9CQUFDLHdCQUFEO0FBQ0UsVUFBQSxvQkFBb0IsRUFDbEI4QyxhQUFhLEdBQUdZLG9CQUFILEdBQTBCLEtBRjNDO0FBSUUsVUFBQSxTQUFTLEVBQUVVLFFBSmI7QUFLRSxVQUFBLGlCQUFpQixZQUFLaEgsTUFBTCx1QkFDZnlHLFFBQVEsR0FBRyxVQUFILEdBQWdCLFFBRFQsY0FFYnpHLE1BRmEsdUJBRU02QyxJQUZOLENBTG5CO0FBUUUsVUFBQSxrQkFBa0IsRUFDaEI4RCxTQUFTLElBQUksNEJBQWM7QUFBRVMsWUFBQUEsU0FBUyxFQUFFO0FBQWIsV0FBZCxFQUFtQ1QsU0FBbkMsQ0FUakI7QUFXRSxVQUFBLGNBQWMsRUFBRSxNQUFJLENBQUN6QyxjQVh2QjtBQVlFLFVBQUEsaUJBQWlCLEVBQUVzQyxpQkFBaUIsSUFBSVcsd0JBWjFDO0FBYUUsVUFBQSxTQUFTLEVBQUUsb0JBQUMsZ0JBQUQ7QUFBTSxZQUFBLElBQUksRUFBQztBQUFYLFlBYmI7QUFjRSxVQUFBLGlCQUFpQixFQUFFLE1BQUksQ0FBQzFDLG9CQWQxQjtBQWVFLFVBQUEsZUFBZSxFQUFDLGdDQWZsQjtBQWdCRSxVQUFBLFFBQVEsRUFBRSxNQUFJLENBQUNmLFlBaEJqQjtBQWlCRSxVQUFBLFFBQVEsRUFBRSxNQUFJLENBQUNLLFlBakJqQjtBQWtCRSxVQUFBLFdBQVcsRUFBRTBCLFdBbEJmO0FBbUJFLFVBQUEsU0FBUyxFQUFDLGtCQW5CWjtBQW9CRSxVQUFBLEdBQUcsRUFBRSxNQUFJLENBQUN2RCxVQXBCWjtBQXFCRSxVQUFBLFVBQVUsRUFBRSxvQkFBQyxnQkFBRDtBQUFNLFlBQUEsSUFBSSxFQUFDLFFBQVg7QUFBb0IsWUFBQSxXQUFXLE1BQS9CO0FBQWdDLFlBQUEsSUFBSSxFQUFFO0FBQXRDLFlBckJkO0FBc0JFLFVBQUEsbUJBQW1CLEVBQ2pCMkUsbUJBQW1CLElBQUkzRyxVQUFVLENBQUMyRyxtQkFBRCxDQXZCckM7QUF5QkUsVUFBQSxVQUFVLEVBQUVKLFFBekJkO0FBMEJFLFVBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQ3BFLGtCQTFCckI7QUEyQkUsVUFBQSxjQUFjLEVBQUMsVUEzQmpCO0FBNEJFLFVBQUEsYUFBYSxFQUFFNEUsUUE1QmpCO0FBNkJFLFVBQUEsa0JBQWtCLEVBQUMsT0E3QnJCO0FBOEJFLFVBQUEsY0FBYyxFQUFFLEVBOUJsQjtBQStCRSxVQUFBLFVBQVUsRUFBRSxHQS9CZDtBQWdDRSxVQUFBLFFBQVEsRUFBRUgsUUFBUSxJQUFJeEcscUJBQXFCLENBQUNTLFFBQUQsQ0FoQzdDO0FBaUNFLFVBQUEsdUJBQXVCLEVBQUUsaUNBQUMwQixPQUFELEVBQXNCO0FBSTdDLGdCQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLGNBQUEsTUFBSSxDQUFDc0IsWUFBTCxDQUFrQixFQUFsQjtBQUNEOztBQUNELFlBQUEsTUFBSSxDQUFDdkIsbUJBQUwsQ0FBeUJDLE9BQXpCOztBQUNBLGdCQUFJaUUsd0JBQUosRUFBNkI7QUFDM0JBLGNBQUFBLHdCQUF1QixDQUFDakUsT0FBRCxDQUF2QjtBQUNEO0FBQ0Y7QUE1Q0gsV0E2Q01yQixTQTdDTixHQStDR0wsUUEvQ0gsQ0FaRixFQTZERyxDQUFDLENBQUM2RixTQUFGLElBQWVILFFBQWYsSUFDQyxvQkFBQyxnQkFBRDtBQUFNLFVBQUEsSUFBSSxFQUFFRyxTQUFaO0FBQXVCLFVBQUEsU0FBUyxFQUFDO0FBQWpDLFVBOURKLENBREQ7QUFBQSxPQURILENBREY7QUF1RUQ7Ozs7RUE5Z0JzQmxHLEtBQUssQ0FBQzJHLFM7O0FBQXpCM0YsVSxDQUNVNEYsUyxHQUFZO0FBSXhCaEIsRUFBQUEsb0JBQW9CLEVBQUVpQixzQkFBVUMsSUFKUjtBQVF4QmpCLEVBQUFBLFNBQVMsRUFBRWdCLHNCQUFVRSxNQVJHO0FBWXhCekIsRUFBQUEsWUFBWSxFQUFFdUIsc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSSxLQUE3QixDQUFwQixDQVpVO0FBZ0J4Qi9ELEVBQUFBLFFBQVEsRUFBRTJELHNCQUFVQyxJQWhCSTtBQW9CeEJoQixFQUFBQSxpQkFBaUIsRUFBRWUsc0JBQVVLLElBcEJMO0FBd0J4QnBELEVBQUFBLFdBQVcsRUFBRStDLHNCQUFVTSxNQXhCQztBQTRCeEJwQixFQUFBQSxRQUFRLEVBQUVjLHNCQUFVQyxJQTVCSTtBQWdDeEIzRCxFQUFBQSxRQUFRLEVBQUUwRCxzQkFBVUssSUFoQ0k7QUFvQ3hCbEIsRUFBQUEsdUJBQXVCLEVBQUVhLHNCQUFVSyxJQXBDWDtBQXdDeEIzRCxFQUFBQSxRQUFRLEVBQUVzRCxzQkFBVUssSUF4Q0k7QUE0Q3hCakIsRUFBQUEsU0FBUyxFQUFFWSxzQkFBVU8sS0FBVixDQUFnQixDQUN6QixLQUR5QixFQUV6QixNQUZ5QixFQUd6QixPQUh5QixFQUl6QixRQUp5QixFQUt6QixTQUx5QixFQU16QixVQU55QixFQU96QixZQVB5QixFQVF6QixhQVJ5QixFQVN6QixTQVR5QixFQVV6QixZQVZ5QixFQVd6QixVQVh5QixFQVl6QixhQVp5QixDQUFoQixDQTVDYTtBQTZEeEJyQyxFQUFBQSxXQUFXLEVBQUU4QixzQkFBVUUsTUE3REM7QUFpRXhCL0MsRUFBQUEsWUFBWSxFQUFFNkMsc0JBQVVLLElBakVBO0FBcUV4QmxDLEVBQUFBLGFBQWEsRUFBRTZCLHNCQUFVQyxJQXJFRDtBQXlFeEJaLEVBQUFBLFNBQVMsRUFBRVcsc0JBQVVFLE1BekVHO0FBZ0Z4QlosRUFBQUEsbUJBQW1CLEVBQUVVLHNCQUFVTyxLQUFWLENBQWdCLENBQ25DLFVBRG1DLEVBRW5DLGFBRm1DLEVBR25DLFlBSG1DLENBQWhCLENBaEZHO0FBd0Z4QmxGLEVBQUFBLFVBQVUsRUFBRTJFLHNCQUFVOUcsSUF4RkU7QUE0RnhCTyxFQUFBQSxLQUFLLEVBQUV1RyxzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVJLEtBQTdCLENBQXBCO0FBNUZpQixDO0FBRHRCakcsVSxDQWdHVXFHLFksR0FBaUM7QUFDN0N6QixFQUFBQSxvQkFBb0IsRUFBRSxLQUR1QjtBQUU3Q0MsRUFBQUEsU0FBUyxFQUFFeUIsU0FGa0M7QUFHN0NoQyxFQUFBQSxZQUFZLEVBQUUsSUFIK0I7QUFJN0NwQyxFQUFBQSxRQUFRLEVBQUUsS0FKbUM7QUFLN0M0QyxFQUFBQSxpQkFBaUIsRUFBRSxJQUwwQjtBQU03Q2hDLEVBQUFBLFdBQVcsRUFBRSxJQU5nQztBQU83Q2lDLEVBQUFBLFFBQVEsRUFBRSxJQVBtQztBQVE3QzVDLEVBQUFBLFFBQVEsRUFBRTVELElBUm1DO0FBUzdDeUcsRUFBQUEsdUJBQXVCLEVBQUV6RyxJQVRvQjtBQVU3Q2dFLEVBQUFBLFFBQVEsRUFBRWhFLElBVm1DO0FBVzdDMEcsRUFBQUEsU0FBUyxFQUFFLFlBWGtDO0FBWTdDbEIsRUFBQUEsV0FBVyxFQUFFLEtBWmdDO0FBYTdDZixFQUFBQSxZQUFZLEVBQUUsSUFiK0I7QUFjN0NnQixFQUFBQSxhQUFhLEVBQUUsSUFkOEI7QUFlN0NrQixFQUFBQSxTQUFTLEVBQUUsTUFma0M7QUFnQjdDQyxFQUFBQSxtQkFBbUIsRUFBRSxhQWhCd0I7QUFpQjdDakUsRUFBQUEsVUFBVSxFQUFFb0YsU0FqQmlDO0FBa0I3Q2hILEVBQUFBLEtBQUssRUFBRTtBQWxCc0MsQzs7QUFoRzNDVSxVLENBcUhVdUcsd0IsR0FBMkIsaUJBQWlDO0FBQUEsTUFBOUJqSCxLQUE4QixTQUE5QkEsS0FBOEI7O0FBQ3hFLE1BQUlBLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFdBQU87QUFDTEEsTUFBQUEsS0FBSyxFQUFMQTtBQURLLEtBQVA7QUFHRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDOztBQTVIR1UsVSxDQThIVXdHLFEsR0FBNEJBLHNCO2VBbVo3QnhHLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJjVHJlZVNlbGVjdCwge1xuICBTSE9XX0FMTCxcbiAgU0hPV19QQVJFTlQsXG4gIFNIT1dfQ0hJTEQsXG4gIFRyZWVOb2RlLFxufSBmcm9tIFwicmMtdHJlZS1zZWxlY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG5leHBvcnQgdHlwZSBUcmVlTm9kZVZhbHVlID0gc3RyaW5nW10gfCBudW1iZXJbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIG1heFRhZ0NvdW50PzogbnVsbCB8IG51bWJlclxuICBtdWx0aXBsZT86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFRyZWVOb2RlVmFsdWUsIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW10pID0+IHZvaWRcbiAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICBvblNlYXJjaD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICByZXN1bHRSZW5kZXI/OiBudWxsIHwgKCh2YWx1ZXM6IElUcmVlTm9kZVtdKSA9PiBKU1guRWxlbWVudClcbiAgcmVzdWx0VmlzaWJsZT86IGJvb2xlYW5cbiAgc2hvd0NoZWNrZWRTdHJhdGVneT86IFwic2hvdy1hbGxcIiB8IFwic2hvdy1jaGlsZFwiIHwgXCJzaG93LXBhcmVudFwiXG4gIHRvcENvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RTdGF0ZSB7XG4gIGhhc2g6IHN0cmluZ1xuICB0b3BDb250ZW50UG9ydGFsVGFyZ2V0PzogSFRNTERpdkVsZW1lbnRcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGVcbiAga2V5Pzogc3RyaW5nXG4gIGV2ZW50S2V5Pzogc3RyaW5nXG4gIGlzTGVhZj86IGJvb2xlYW5cbiAgY2hlY2tlZD86IGJvb2xlYW5cbiAgZXhwYW5kZWQ/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIHNlbGVjdGVkPzogYm9vbGVhblxuICBzZWxlY3RhYmxlPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5jb25zdCBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEgPSAobm9kZXM6IGFueSkgPT4ge1xuICByZXR1cm4gdG9BcnJheShub2RlcylcbiAgICAubWFwKChub2RlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBrZXksXG4gICAgICAgIHByb3BzOiB7IGNoaWxkcmVuLCB2YWx1ZSwgcG9wb3ZlciwgcG9wb3ZlclByb3BzLCB0aXRsZSwgLi4ucmVzdFByb3BzIH0sXG4gICAgICB9ID0gbm9kZSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRcblxuICAgICAgLyoqXG4gICAgICAgKiDlpoLmnpzmnIkgcG9wb3ZlciDliJnlnKjov5nph4zljIXoo4XkuIDkuIsgdGl0bGVcbiAgICAgICAqL1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZGF0YVRpdGxlOiB0aXRsZSxcbiAgICAgICAgdGl0bGU6IHBvcG92ZXIgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlclwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICksXG4gICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGREYXRhID0gY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKVxuICAgICAgaWYgKGNoaWxkRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkRGF0YVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgLmZpbHRlcigoZGF0YSkgPT4gZGF0YSlcbn1cblxuLyoqXG4gKiDmoJHlvaLpgInmi6lcbiAqL1xuY2xhc3MgVHJlZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVHJlZVNlbGVjdFByb3BzLCBJVHJlZVNlbGVjdFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWAvOiiq+mAieaLqeWQju+8jOaYr+WQpumcgOimgea4heepuuaQnOe0ouahhlxuICAgICAqL1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6buY6K6k6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgLyoqXG4gICAgICog5piv5ZCm56aB55SoXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWfvvIzlpoLmnpzotoXov4fkuobliJnku6XmlLbotbfnmoTlvaLlvI/lh7rnjrBcbiAgICAgKi9cbiAgICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblpJrpgInmqKHlvI9cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5YC85Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDkuIvmi4kgdmlzaWJsZSDlj5jljJbml7bnmoTlm57osIPvvIzlj4LmlbA6IGJvb2xlYW5cbiAgICAgKi9cbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pCc57Si5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7lvLnlh7rkvY3nva5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u6L6T5YWl5qGG55qE6buY6K6k5YaF5a65XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572u6Ieq5a6a5LmJ55qE57uT5p6c5riy5p+TXG4gICAgICovXG4gICAgcmVzdWx0UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblhoXnmoTmoIfnrb7mmK/lkKbmmL7npLrvvIzmraQgUHJvcCDnlKjkuo7mg7PopoHlsIbnu5PmnpzljLrlsZXnpLrlnKjliKvnmoTlnLDmlrnnmoTpnIDmsYJcbiAgICAgKi9cbiAgICByZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprliLbmoJHlvaLpgInmi6nlmajnmoRpY29uXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOWumuS5iemAieS4remhueWbnuWhq+eahOaWueW8j++8mlxuICAgICAqIDEuIHNob3ctYWxs77ya5pi+56S65YyF5ous54i26IqC54K555qE5omA5pyJ6YCJ5Lit6IqC54K577ybXG4gICAgICogMi4gc2hvdy1wYXJlbnTvvJrlj6rmmL7npLrniLboioLngrnvvJtcbiAgICAgKiAzLiBzaG93LWNoaWxk77ya5Y+q5pi+56S65a2Q6IqC54K544CC6buY6K6k5YC877yac2hvdy1wYXJlbnRcbiAgICAgKi9cbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJzaG93LWFsbFwiLFxuICAgICAgXCJzaG93LXBhcmVudFwiLFxuICAgICAgXCJzaG93LWNoaWxkXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog5LiL5ouJ5qGG6aG26YOo5pi+56S655qE6Ieq5a6a5LmJ5YWD57SgXG4gICAgICovXG4gICAgdG9wQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVHJlZVNlbGVjdFByb3BzID0ge1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIG1heFRhZ0NvdW50OiBudWxsLFxuICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uU2VhcmNoOiBub29wLFxuICAgIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcmVzdWx0UmVuZGVyOiBudWxsLFxuICAgIHJlc3VsdFZpc2libGU6IHRydWUsXG4gICAgcmlnaHRJY29uOiBcIm1lbnVcIixcbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBcInNob3ctcGFyZW50XCIsXG4gICAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoeyB2YWx1ZSB9OiBJVHJlZVNlbGVjdFByb3BzKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgVHJlZU5vZGU6IHR5cGVvZiBUcmVlTm9kZSA9IFRyZWVOb2RlXG5cbiAgcHVibGljIHNlbGVjdDogdHlwZW9mIFJjVHJlZVNlbGVjdFxuXG4gIHB1YmxpYyBwb3J0YWw6IFJlYWN0LlJlYWN0Tm9kZVxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVHJlZVNlbGVjdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyB2YWx1ZSwgZGVmYXVsdFZhbHVlIH0gPSBwcm9wc1xuICAgIGNvbnN0IHZhbHVlU3RhdGUgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzaDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDMsIDgpLFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMsXG4gICAgbmV4dFN0YXRlOiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIHNhdmVTZWxlY3QgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5zZWxlY3QgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVBvcnRhbCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnBvcnRhbCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlV3JhcHBlciA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMud3JhcHBlciA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTd2l0Y2hlckljb24gPSAoeyBpc0xlYWYsIGxvYWRpbmcgfTogSVRyZWVOb2RlUHJvcHMpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIHNpemU9XCJtaW5pXCIgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1zd2l0Y2hlci1pY29uXCIgLz5cbiAgICB9XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uIGljb249XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3Qtc3dpdGNoZXItaWNvblwiIC8+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVZpc2libGVDaGFuZ2UgPSAodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9wQ29udGVudCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCB7IGhhc2gsIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS4i+aLieahhuaYvuekuiAmJiDkvKDlhaXkuobpobbpg6joh6rlrprkuYnlhYPntKAgJiYg6aaW5qyh5re75YqgXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodmlzaWJsZSAmJiB0b3BDb250ZW50ICYmICF0b3BDb250ZW50UG9ydGFsVGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC4ke3ByZWZpeH0tZHJvcGRvd25fJHtoYXNofWBcbiAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGVsLm9ubW91c2Vkb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3Bkb3duLmluc2VydEJlZm9yZShlbCwgZHJvcGRvd24uY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdG9wQ29udGVudFBvcnRhbFRhcmdldDogZWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCAwKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUNoYW5nZSA9IChcbiAgICB2YWx1ZTogVHJlZU5vZGVWYWx1ZSxcbiAgICB0aXRsZUxpc3Q6IFJlYWN0LlJlYWN0Tm9kZVtdXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG9uQ2hhbmdlLCB2YWx1ZTogdmFsdWVQcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZSwgdGl0bGVMaXN0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IG9uU2VhcmNoIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICBvblNlYXJjaCh2YWwpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUcmVlTm9kZSA9IChpbnB1dDogc3RyaW5nLCB0cmVlTm9kZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBrZXksIHRpdGxlLCB2YWx1ZSwgZGF0YVRpdGxlIH0gPSB0cmVlTm9kZVxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoZGF0YVRpdGxlIHx8IHRpdGxlKS5pbmNsdWRlcyhpbnB1dClcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKCFtYXhUYWdDb3VudCB8fCAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDw9IG1heFRhZ0NvdW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ1BsYWNlaG9sZGVyID0gKG5vZGVzOiBJVHJlZU5vZGVbXSkgPT4ge1xuICAgIGlmICghdGhpcy5zZWxlY3QpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHJlc3VsdFJlbmRlciwgdmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJldHVybiByZXN1bHRSZW5kZXIobm9kZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IG5vZGVzXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICB7bm9kZXNbMF0ubGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICAuLi7nrYkge2xlbmd0aH0g5LiqXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heC1wb3BvdmVyLWl0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAge25vZGVzLm1hcCgoeyBrZXksIGRpc2FibGVkLCBsYWJlbCB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heC1wb3BvdmVyLWl0ZW1cIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFscyA9IG5vZGVzLm1hcCgobykgPT4gby52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWxzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IG5vZGVzLm1hcCgobykgPT4gby5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscy5zcGxpY2UoaSwgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHMsIGxhYmVscylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBDbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heFBvcG92ZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXhQbGFjZWhvbGRlclwiXG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICA+XG4gICAgICAgICAge3BsYWNlaG9sZGVyVGV4dH1cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFtdLCBbXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cblxuICBsaXN0ZW5JbnB1dENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXQ6IHsgdmFsdWUgfSxcbiAgICAgIGtleUNvZGUsXG4gICAgfSA9IGVcblxuICAgIGlmIChrZXlDb2RlID09PSA4ICYmIHZhbHVlID09PSBcIlwiKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQsIHBsYWNlaG9sZGVyLCByZXN1bHRWaXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICAvLyDnpoHmraIgdHJlZS1zZWxlY3Qg6ZSu55uY5Zue5Yig5Lya5b2x5ZONIHZhbHVlXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmxpc3RlbklucHV0Q2hhbmdlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwgJiYgdmFsdWUpIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICBpZiAoIXJlc3VsdFZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZXN1bHRWaXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgLyoqXG4gICAgICogcmVzdWx0VmlzaWJsZSDkuLogZmFsc2Ug5pe277yMIHNlbGVjdG9yIOmrmOW6puS4jeS8muaUueWPmOOAglxuICAgICAqIOagueaNruaIkeeahOe7j+mqjCBQb3B1cCDop6blj5Hph43mlrDlrprkvY3nmoTml7bmnLrmmK/vvJpcbiAgICAgKiAxLiB3aW5kb3cgcmVzaXplXG4gICAgICogMi4gcmVzaXplIG9ic2VydmVyIOS6hiBzZWxlY3RvclxuICAgICAqIOWboOatpOi/memHjOaJi+WKqOinpuWPkSByZXNpemVcbiAgICAgKi9cbiAgICBpZiAoIXJlc3VsdFZpc2libGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByaWdodEljb24sXG4gICAgICByZXN1bHRSZW5kZXIsXG4gICAgICByZXN1bHRWaXNpYmxlLFxuICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSxcbiAgICAgIHRvcENvbnRlbnQsXG4gICAgICB0cmVlRGF0YSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzOiBhbnkgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwib25DaGFuZ2VcIixcbiAgICAgIFwib25TZWFyY2hcIixcbiAgICAgIFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICBcInZhbHVlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCwgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0td3JhcHBlcmAsIHtcbiAgICAgIFtgJHtwcmVmaXh9X3Jlc3VsdEhpZGRlbmBdOiAhcmVzdWx0VmlzaWJsZSxcbiAgICB9KVxuXG4gICAgbGV0IGNoZWNrYm94OiBhbnkgPSBtdWx0aXBsZVxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgY2hlY2tib3ggPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXRyZWUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZVN2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgeD1cIjFcIlxuICAgICAgICAgICAgICB5PVwiNFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgcng9XCIuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXRyZWUtY2hlY2tib3gtY2hlY2tlZFN2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXN0UHJvcHMudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldE1heFRhZ0NvdW50KClcbiAgICAgIGlmIChjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSBjb3VudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJhZHVpLXRyZWUtc2VsZWN0LXdyYXBwZXJcIiwge1xuICAgICAgICAgICAgICBcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlci1tYXhUYWdcIjogdGhpcy5nZXRNYXhUYWdDb3VudCgpICE9PSBudWxsLFxuICAgICAgICAgICAgICBcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlci1yZXN1bHRSZW5kZXJcIjogISFyZXN1bHRSZW5kZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlV3JhcHBlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dG9wQ29udGVudCAmJiB0b3BDb250ZW50UG9ydGFsVGFyZ2V0ICYmIChcbiAgICAgICAgICAgICAgPFBvcnRhbCByZWY9e3RoaXMuc2F2ZVBvcnRhbH0gY29udGFpbmVyPXt0b3BDb250ZW50UG9ydGFsVGFyZ2V0fT5cbiAgICAgICAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFJjVHJlZVNlbGVjdFxuICAgICAgICAgICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT17XG4gICAgICAgICAgICAgICAgcmVzdWx0VmlzaWJsZSA/IGF1dG9DbGVhclNlYXJjaFZhbHVlIDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17YCR7cHJlZml4fS1kcm9wZG93bi0ke1xuICAgICAgICAgICAgICAgIG11bHRpcGxlID8gXCJtdWx0aXBsZVwiIDogXCJzaW5nbGVcIlxuICAgICAgICAgICAgICB9ICR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YH1cbiAgICAgICAgICAgICAgZHJvcGRvd25Qb3B1cEFsaWduPXtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQgJiYgZ2V0UGxhY2VtZW50cyh7IGFsaWduRWRnZTogdHJ1ZSB9KVtwbGFjZW1lbnRdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmlsdGVyVHJlZU5vZGU9e3RoaXMuZmlsdGVyVHJlZU5vZGV9XG4gICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgICAgICAgIGlucHV0SWNvbj17PEljb24gaWNvbj1cInRyaWFuZ2xlLWRvd25cIiAvPn1cbiAgICAgICAgICAgICAgbWF4VGFnUGxhY2Vob2xkZXI9e3RoaXMuZ2V0TWF4VGFnUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD1cIuaXoOWMuemFjee7k+aenFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHByZWZpeENscz1cImFkdWktdHJlZS1zZWxlY3RcIlxuICAgICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVNlbGVjdH1cbiAgICAgICAgICAgICAgcmVtb3ZlSWNvbj17PEljb24gaWNvbj1cImNhbmNlbFwiIGludGVyYWN0aXZlIHNpemU9ezE2fSAvPn1cbiAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneT17XG4gICAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSAmJiBzdHJhdGVnaWVzW3Nob3dDaGVja2VkU3RyYXRlZ3ldXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2hvd1NlYXJjaD17bXVsdGlwbGV9XG4gICAgICAgICAgICAgIHN3aXRjaGVySWNvbj17dGhpcy5yZW5kZXJTd2l0Y2hlckljb259XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic2xpZGUtdXBcIlxuICAgICAgICAgICAgICB0cmVlQ2hlY2thYmxlPXtjaGVja2JveH1cbiAgICAgICAgICAgICAgdHJlZU5vZGVGaWx0ZXJQcm9wPVwidGl0bGVcIlxuICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MzZ9XG4gICAgICAgICAgICAgIGxpc3RIZWlnaHQ9ezI4MH1cbiAgICAgICAgICAgICAgdHJlZURhdGE9e3RyZWVEYXRhIHx8IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbil9XG4gICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXsodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIDIwMjEwMzIzIHZpc2libGUgZmFsc2Ug5pe26L6T5YWl5qGG5Lya6KKr5oOF5Ya177yM5L2G5rKh5pyJ6LCD55SoIG9uU2VhcmNoXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaChcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UodmlzaWJsZSlcbiAgICAgICAgICAgICAgICBpZiAob25Ecm9wZG93blZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1JjVHJlZVNlbGVjdD5cbiAgICAgICAgICAgIHshIXJpZ2h0SWNvbiAmJiBtdWx0aXBsZSAmJiAoXG4gICAgICAgICAgICAgIDxJY29uIGljb249e3JpZ2h0SWNvbn0gY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1pY29uXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVTZWxlY3RcbiJdfQ==