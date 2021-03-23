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
            var dropdown = document.querySelector(".".concat(prefix, "-dropdown_").concat(hash, " > div"));

            if (dropdown) {
              var el = document.createElement("div");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIm5vZGVzIiwibWFwIiwibm9kZSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInRpdGxlIiwicmVzdFByb3BzIiwiZGF0YSIsImRhdGFUaXRsZSIsImNoaWxkRGF0YSIsImxlbmd0aCIsImZpbHRlciIsIlRyZWVTZWxlY3QiLCJzZWxlY3QiLCJwb3J0YWwiLCJ3cmFwcGVyIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwic2F2ZVBvcnRhbCIsInNhdmVXcmFwcGVyIiwicmVuZGVyU3dpdGNoZXJJY29uIiwiaXNMZWFmIiwibG9hZGluZyIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwic2V0VGltZW91dCIsImZvcmNlVXBkYXRlIiwidG9wQ29udGVudCIsImhhc2giLCJ0b3BDb250ZW50UG9ydGFsVGFyZ2V0IiwiZHJvcGRvd24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInRpdGxlTGlzdCIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJ2YWx1ZVByb3AiLCJoYW5kbGVTZWFyY2giLCJ2YWwiLCJvblNlYXJjaCIsImZpbHRlclRyZWVOb2RlIiwiaW5wdXQiLCJ0cmVlTm9kZSIsIlN0cmluZyIsImluY2x1ZGVzIiwiZ2V0TWF4VGFnQ291bnQiLCJtYXhUYWdDb3VudCIsImdldE1heFRhZ1BsYWNlaG9sZGVyIiwicmVzdWx0UmVuZGVyIiwicGxhY2Vob2xkZXJUZXh0IiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJsYWJlbCIsImkiLCJ2YWxzIiwibyIsInNwbGljZSIsImxhYmVscyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJsaXN0ZW5JbnB1dENoYW5nZSIsInRhcmdldCIsImtleUNvZGUiLCJjb21wb25lbnREaWRNb3VudCIsInBsYWNlaG9sZGVyIiwicmVzdWx0VmlzaWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZVN0YXRlIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiYXV0b0NsZWFyU2VhcmNoVmFsdWUiLCJjbGFzc05hbWUiLCJnZXRQb3B1cENvbnRhaW5lciIsIm11bHRpcGxlIiwib25Ecm9wZG93blZpc2libGVDaGFuZ2UiLCJwbGFjZW1lbnQiLCJyaWdodEljb24iLCJzaG93Q2hlY2tlZFN0cmF0ZWd5IiwidHJlZURhdGEiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJjaGVja2JveCIsImNvdW50IiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwiYWxpZ25FZGdlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5IiwiZnVuYyIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiVHJlZU5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBLEtBQUssRUFBRTtBQWxCc0MsQzs7QUFoRzNDVSxVLENBcUhVb0csd0IsR0FBMkIsaUJBQWlDO0FBQUEsTUFBOUI5RyxLQUE4QixTQUE5QkEsS0FBOEI7O0FBQ3hFLE1BQUlBLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCLFdBQU87QUFDTEEsTUFBQUEsS0FBSyxFQUFMQTtBQURLLEtBQVA7QUFHRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDOztBQTVIR1UsVSxDQThIVXFHLFEsR0FBNEJBLHNCO2VBK1k3QnJHLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJjVHJlZVNlbGVjdCwge1xuICBTSE9XX0FMTCxcbiAgU0hPV19QQVJFTlQsXG4gIFNIT1dfQ0hJTEQsXG4gIFRyZWVOb2RlLFxufSBmcm9tIFwicmMtdHJlZS1zZWxlY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG5leHBvcnQgdHlwZSBUcmVlTm9kZVZhbHVlID0gc3RyaW5nW10gfCBudW1iZXJbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIG1heFRhZ0NvdW50PzogbnVsbCB8IG51bWJlclxuICBtdWx0aXBsZT86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFRyZWVOb2RlVmFsdWUsIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW10pID0+IHZvaWRcbiAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICBvblNlYXJjaD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICByZXN1bHRSZW5kZXI/OiBudWxsIHwgKCh2YWx1ZXM6IElUcmVlTm9kZVtdKSA9PiBKU1guRWxlbWVudClcbiAgcmVzdWx0VmlzaWJsZT86IGJvb2xlYW5cbiAgc2hvd0NoZWNrZWRTdHJhdGVneT86IFwic2hvdy1hbGxcIiB8IFwic2hvdy1jaGlsZFwiIHwgXCJzaG93LXBhcmVudFwiXG4gIHRvcENvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RTdGF0ZSB7XG4gIGhhc2g6IHN0cmluZ1xuICB0b3BDb250ZW50UG9ydGFsVGFyZ2V0PzogSFRNTERpdkVsZW1lbnRcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGVcbiAga2V5Pzogc3RyaW5nXG4gIGV2ZW50S2V5Pzogc3RyaW5nXG4gIGlzTGVhZj86IGJvb2xlYW5cbiAgY2hlY2tlZD86IGJvb2xlYW5cbiAgZXhwYW5kZWQ/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIHNlbGVjdGVkPzogYm9vbGVhblxuICBzZWxlY3RhYmxlPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5jb25zdCBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEgPSAobm9kZXM6IGFueSkgPT4ge1xuICByZXR1cm4gdG9BcnJheShub2RlcylcbiAgICAubWFwKChub2RlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBrZXksXG4gICAgICAgIHByb3BzOiB7IGNoaWxkcmVuLCB2YWx1ZSwgcG9wb3ZlciwgcG9wb3ZlclByb3BzLCB0aXRsZSwgLi4ucmVzdFByb3BzIH0sXG4gICAgICB9ID0gbm9kZSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRcblxuICAgICAgLyoqXG4gICAgICAgKiDlpoLmnpzmnIkgcG9wb3ZlciDliJnlnKjov5nph4zljIXoo4XkuIDkuIsgdGl0bGVcbiAgICAgICAqL1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZGF0YVRpdGxlOiB0aXRsZSxcbiAgICAgICAgdGl0bGU6IHBvcG92ZXIgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlclwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICksXG4gICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGREYXRhID0gY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKVxuICAgICAgaWYgKGNoaWxkRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkRGF0YVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgLmZpbHRlcigoZGF0YSkgPT4gZGF0YSlcbn1cblxuLyoqXG4gKiDmoJHlvaLpgInmi6lcbiAqL1xuY2xhc3MgVHJlZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVHJlZVNlbGVjdFByb3BzLCBJVHJlZVNlbGVjdFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWAvOiiq+mAieaLqeWQju+8jOaYr+WQpumcgOimgea4heepuuaQnOe0ouahhlxuICAgICAqL1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6buY6K6k6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgLyoqXG4gICAgICog5piv5ZCm56aB55SoXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWfvvIzlpoLmnpzotoXov4fkuobliJnku6XmlLbotbfnmoTlvaLlvI/lh7rnjrBcbiAgICAgKi9cbiAgICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblpJrpgInmqKHlvI9cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5YC85Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDkuIvmi4kgdmlzaWJsZSDlj5jljJbml7bnmoTlm57osIPvvIzlj4LmlbA6IGJvb2xlYW5cbiAgICAgKi9cbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pCc57Si5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7lvLnlh7rkvY3nva5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u6L6T5YWl5qGG55qE6buY6K6k5YaF5a65XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572u6Ieq5a6a5LmJ55qE57uT5p6c5riy5p+TXG4gICAgICovXG4gICAgcmVzdWx0UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblhoXnmoTmoIfnrb7mmK/lkKbmmL7npLrvvIzmraQgUHJvcCDnlKjkuo7mg7PopoHlsIbnu5PmnpzljLrlsZXnpLrlnKjliKvnmoTlnLDmlrnnmoTpnIDmsYJcbiAgICAgKi9cbiAgICByZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprliLbmoJHlvaLpgInmi6nlmajnmoRpY29uXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOWumuS5iemAieS4remhueWbnuWhq+eahOaWueW8j++8mlxuICAgICAqIDEuIHNob3ctYWxs77ya5pi+56S65YyF5ous54i26IqC54K555qE5omA5pyJ6YCJ5Lit6IqC54K577ybXG4gICAgICogMi4gc2hvdy1wYXJlbnTvvJrlj6rmmL7npLrniLboioLngrnvvJtcbiAgICAgKiAzLiBzaG93LWNoaWxk77ya5Y+q5pi+56S65a2Q6IqC54K544CC6buY6K6k5YC877yac2hvdy1wYXJlbnRcbiAgICAgKi9cbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJzaG93LWFsbFwiLFxuICAgICAgXCJzaG93LXBhcmVudFwiLFxuICAgICAgXCJzaG93LWNoaWxkXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog5LiL5ouJ5qGG6aG26YOo5pi+56S655qE6Ieq5a6a5LmJ5YWD57SgXG4gICAgICovXG4gICAgdG9wQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVHJlZVNlbGVjdFByb3BzID0ge1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIG1heFRhZ0NvdW50OiBudWxsLFxuICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uU2VhcmNoOiBub29wLFxuICAgIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcmVzdWx0UmVuZGVyOiBudWxsLFxuICAgIHJlc3VsdFZpc2libGU6IHRydWUsXG4gICAgcmlnaHRJY29uOiBcIm1lbnVcIixcbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBcInNob3ctcGFyZW50XCIsXG4gICAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoeyB2YWx1ZSB9OiBJVHJlZVNlbGVjdFByb3BzKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgVHJlZU5vZGU6IHR5cGVvZiBUcmVlTm9kZSA9IFRyZWVOb2RlXG5cbiAgcHVibGljIHNlbGVjdDogdHlwZW9mIFJjVHJlZVNlbGVjdFxuXG4gIHB1YmxpYyBwb3J0YWw6IFJlYWN0LlJlYWN0Tm9kZVxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVHJlZVNlbGVjdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyB2YWx1ZSwgZGVmYXVsdFZhbHVlIH0gPSBwcm9wc1xuICAgIGNvbnN0IHZhbHVlU3RhdGUgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzaDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDMsIDgpLFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMsXG4gICAgbmV4dFN0YXRlOiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIHNhdmVTZWxlY3QgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5zZWxlY3QgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVBvcnRhbCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnBvcnRhbCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlV3JhcHBlciA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMud3JhcHBlciA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTd2l0Y2hlckljb24gPSAoeyBpc0xlYWYsIGxvYWRpbmcgfTogSVRyZWVOb2RlUHJvcHMpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIHNpemU9XCJtaW5pXCIgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1zd2l0Y2hlci1pY29uXCIgLz5cbiAgICB9XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uIGljb249XCJhcnJvdy1yaWdodFwiIGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3Qtc3dpdGNoZXItaWNvblwiIC8+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVZpc2libGVDaGFuZ2UgPSAodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9wQ29udGVudCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCB7IGhhc2gsIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS4i+aLieahhuaYvuekuiAmJiDkvKDlhaXkuobpobbpg6joh6rlrprkuYnlhYPntKAgJiYg6aaW5qyh5re75YqgXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodmlzaWJsZSAmJiB0b3BDb250ZW50ICYmICF0b3BDb250ZW50UG9ydGFsVGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC4ke3ByZWZpeH0tZHJvcGRvd25fJHtoYXNofSA+IGRpdmBcbiAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGRyb3Bkb3duLmluc2VydEJlZm9yZShlbCwgZHJvcGRvd24uY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdG9wQ29udGVudFBvcnRhbFRhcmdldDogZWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCAwKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUNoYW5nZSA9IChcbiAgICB2YWx1ZTogVHJlZU5vZGVWYWx1ZSxcbiAgICB0aXRsZUxpc3Q6IFJlYWN0LlJlYWN0Tm9kZVtdXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG9uQ2hhbmdlLCB2YWx1ZTogdmFsdWVQcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZSwgdGl0bGVMaXN0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IG9uU2VhcmNoIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICBvblNlYXJjaCh2YWwpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUcmVlTm9kZSA9IChpbnB1dDogc3RyaW5nLCB0cmVlTm9kZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBrZXksIHRpdGxlLCB2YWx1ZSwgZGF0YVRpdGxlIH0gPSB0cmVlTm9kZVxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoZGF0YVRpdGxlIHx8IHRpdGxlKS5pbmNsdWRlcyhpbnB1dClcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKCFtYXhUYWdDb3VudCB8fCAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDw9IG1heFRhZ0NvdW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ1BsYWNlaG9sZGVyID0gKG5vZGVzOiBJVHJlZU5vZGVbXSkgPT4ge1xuICAgIGlmICghdGhpcy5zZWxlY3QpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHJlc3VsdFJlbmRlciwgdmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJldHVybiByZXN1bHRSZW5kZXIobm9kZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IG5vZGVzXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICB7bm9kZXNbMF0ubGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICAuLi7nrYkge2xlbmd0aH0g5LiqXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heC1wb3BvdmVyLWl0ZW0td3JhcHBlclwiPlxuICAgICAgICAgICAge25vZGVzLm1hcCgoeyBrZXksIGRpc2FibGVkLCBsYWJlbCB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heC1wb3BvdmVyLWl0ZW1cIiBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFscyA9IG5vZGVzLm1hcCgobykgPT4gby52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWxzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IG5vZGVzLm1hcCgobykgPT4gby5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscy5zcGxpY2UoaSwgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHMsIGxhYmVscylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBDbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heFBvcG92ZXJcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1tYXhQbGFjZWhvbGRlclwiXG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICA+XG4gICAgICAgICAge3BsYWNlaG9sZGVyVGV4dH1cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFtdLCBbXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cblxuICBsaXN0ZW5JbnB1dENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXQ6IHsgdmFsdWUgfSxcbiAgICAgIGtleUNvZGUsXG4gICAgfSA9IGVcblxuICAgIGlmIChrZXlDb2RlID09PSA4ICYmIHZhbHVlID09PSBcIlwiKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQsIHBsYWNlaG9sZGVyLCByZXN1bHRWaXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICAvLyDnpoHmraIgdHJlZS1zZWxlY3Qg6ZSu55uY5Zue5Yig5Lya5b2x5ZONIHZhbHVlXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmxpc3RlbklucHV0Q2hhbmdlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwgJiYgdmFsdWUpIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICBpZiAoIXJlc3VsdFZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZXN1bHRWaXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgLyoqXG4gICAgICogcmVzdWx0VmlzaWJsZSDkuLogZmFsc2Ug5pe277yMIHNlbGVjdG9yIOmrmOW6puS4jeS8muaUueWPmOOAglxuICAgICAqIOagueaNruaIkeeahOe7j+mqjCBQb3B1cCDop6blj5Hph43mlrDlrprkvY3nmoTml7bmnLrmmK/vvJpcbiAgICAgKiAxLiB3aW5kb3cgcmVzaXplXG4gICAgICogMi4gcmVzaXplIG9ic2VydmVyIOS6hiBzZWxlY3RvclxuICAgICAqIOWboOatpOi/memHjOaJi+WKqOinpuWPkSByZXNpemVcbiAgICAgKi9cbiAgICBpZiAoIXJlc3VsdFZpc2libGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByaWdodEljb24sXG4gICAgICByZXN1bHRSZW5kZXIsXG4gICAgICByZXN1bHRWaXNpYmxlLFxuICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSxcbiAgICAgIHRvcENvbnRlbnQsXG4gICAgICB0cmVlRGF0YSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzOiBhbnkgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwib25DaGFuZ2VcIixcbiAgICAgIFwib25TZWFyY2hcIixcbiAgICAgIFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICBcInZhbHVlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCwgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIGAke3ByZWZpeH0td3JhcHBlcmAsIHtcbiAgICAgIFtgJHtwcmVmaXh9X3Jlc3VsdEhpZGRlbmBdOiAhcmVzdWx0VmlzaWJsZSxcbiAgICB9KVxuXG4gICAgbGV0IGNoZWNrYm94OiBhbnkgPSBtdWx0aXBsZVxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgY2hlY2tib3ggPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXRyZWUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZVN2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgeD1cIjFcIlxuICAgICAgICAgICAgICB5PVwiNFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgcng9XCIuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LXRyZWUtY2hlY2tib3gtY2hlY2tlZFN2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXN0UHJvcHMudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldE1heFRhZ0NvdW50KClcbiAgICAgIGlmIChjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSBjb3VudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IDBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJhZHVpLXRyZWUtc2VsZWN0LXdyYXBwZXJcIiwge1xuICAgICAgICAgICAgICBcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlci1tYXhUYWdcIjogdGhpcy5nZXRNYXhUYWdDb3VudCgpICE9PSBudWxsLFxuICAgICAgICAgICAgICBcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlci1yZXN1bHRSZW5kZXJcIjogISFyZXN1bHRSZW5kZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlV3JhcHBlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dG9wQ29udGVudCAmJiB0b3BDb250ZW50UG9ydGFsVGFyZ2V0ICYmIChcbiAgICAgICAgICAgICAgPFBvcnRhbCByZWY9e3RoaXMuc2F2ZVBvcnRhbH0gY29udGFpbmVyPXt0b3BDb250ZW50UG9ydGFsVGFyZ2V0fT5cbiAgICAgICAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFJjVHJlZVNlbGVjdFxuICAgICAgICAgICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT17XG4gICAgICAgICAgICAgICAgcmVzdWx0VmlzaWJsZSA/IGF1dG9DbGVhclNlYXJjaFZhbHVlIDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17YCR7cHJlZml4fS1kcm9wZG93bi0ke1xuICAgICAgICAgICAgICAgIG11bHRpcGxlID8gXCJtdWx0aXBsZVwiIDogXCJzaW5nbGVcIlxuICAgICAgICAgICAgICB9ICR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YH1cbiAgICAgICAgICAgICAgZHJvcGRvd25Qb3B1cEFsaWduPXtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQgJiYgZ2V0UGxhY2VtZW50cyh7IGFsaWduRWRnZTogdHJ1ZSB9KVtwbGFjZW1lbnRdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmlsdGVyVHJlZU5vZGU9e3RoaXMuZmlsdGVyVHJlZU5vZGV9XG4gICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgICAgICAgIGlucHV0SWNvbj17PEljb24gaWNvbj1cInRyaWFuZ2xlLWRvd25cIiAvPn1cbiAgICAgICAgICAgICAgbWF4VGFnUGxhY2Vob2xkZXI9e3RoaXMuZ2V0TWF4VGFnUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD1cIuaXoOWMuemFjee7k+aenFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHByZWZpeENscz1cImFkdWktdHJlZS1zZWxlY3RcIlxuICAgICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVNlbGVjdH1cbiAgICAgICAgICAgICAgcmVtb3ZlSWNvbj17PEljb24gaWNvbj1cImNhbmNlbFwiIGludGVyYWN0aXZlIHNpemU9ezE2fSAvPn1cbiAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneT17XG4gICAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSAmJiBzdHJhdGVnaWVzW3Nob3dDaGVja2VkU3RyYXRlZ3ldXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2hvd1NlYXJjaD17bXVsdGlwbGV9XG4gICAgICAgICAgICAgIHN3aXRjaGVySWNvbj17dGhpcy5yZW5kZXJTd2l0Y2hlckljb259XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic2xpZGUtdXBcIlxuICAgICAgICAgICAgICB0cmVlQ2hlY2thYmxlPXtjaGVja2JveH1cbiAgICAgICAgICAgICAgdHJlZU5vZGVGaWx0ZXJQcm9wPVwidGl0bGVcIlxuICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MzZ9XG4gICAgICAgICAgICAgIGxpc3RIZWlnaHQ9ezI4MH1cbiAgICAgICAgICAgICAgdHJlZURhdGE9e3RyZWVEYXRhIHx8IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbil9XG4gICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXsodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIDIwMjEwMzIzIHZpc2libGUgZmFsc2Ug5pe26L6T5YWl5qGG5Lya6KKr5oOF5Ya177yM5L2G5rKh5pyJ6LCD55SoIG9uU2VhcmNoXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaChcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UodmlzaWJsZSlcbiAgICAgICAgICAgICAgICBpZiAob25Ecm9wZG93blZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1JjVHJlZVNlbGVjdD5cbiAgICAgICAgICAgIHshIXJpZ2h0SWNvbiAmJiBtdWx0aXBsZSAmJiAoXG4gICAgICAgICAgICAgIDxJY29uIGljb249e3JpZ2h0SWNvbn0gY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1pY29uXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVTZWxlY3RcbiJdfQ==