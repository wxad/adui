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

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _icon = _interopRequireDefault(require("../icon"));

var _popover = _interopRequireDefault(require("../popover"));

var _portal = _interopRequireDefault(require("../portal"));

var _spinner = _interopRequireDefault(require("../spinner"));

var _placements = _interopRequireDefault(require("../tooltip/placements"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var prefix = "adui-tree-select";

var noop = function noop() {};

var strategies = {
  "show-all": _rcTreeSelect.SHOW_ALL,
  "show-child": _rcTreeSelect.SHOW_CHILD,
  "show-parent": _rcTreeSelect.SHOW_PARENT
};

var isArrayIncludes = function isArrayIncludes(a1, a2) {
  if (!a1 || !a2) {
    return false;
  }

  return a2.every(function (o) {
    return a1.includes(o);
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
    _this.treeData = void 0;
    _this.treeValueAll = void 0;

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

    _this.renderSwitcherIcon = function (_ref) {
      var isLeaf = _ref.isLeaf,
          loading = _ref.loading;

      if (loading) {
        return React.createElement(_spinner["default"], {
          size: "mini",
          className: "adui-tree-select-tree-switcher-icon"
        });
      }

      if (isLeaf) {
        return null;
      }

      return React.createElement(_icon["default"], {
        icon: "triangle-right",
        className: "adui-tree-select-tree-switcher-icon"
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

    _this.handleSelectAll = function () {
      var _this$props2 = _this.props,
          valueProp = _this$props2.value,
          onChange = _this$props2.onChange;
      var value = _this.state.value;

      if (isArrayIncludes(value || [], _this.treeValueAll)) {
        if (valueProp === null) {
          _this.setState({
            value: []
          });
        }

        if (onChange) {
          onChange([], []);
        }
      } else {
        if (valueProp === null) {
          _this.setState({
            value: _this.treeValueAll
          });
        }

        if (onChange) {
          onChange(_this.treeValueAll, []);
        }
      }
    };

    _this.getMaxTagPlaceholder = function (nodes) {
      if (!_this.select) {
        return null;
      }

      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          resultRender = _this$props3.resultRender,
          value = _this$props3.value;

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
        }, nodes.map(function (_ref2, i) {
          var key = _ref2.key,
              disabled = _ref2.disabled,
              label = _ref2.label;
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

    _this.convertChildrenToData = function (nodes) {
      return (0, _toArray["default"])(nodes).map(function (node) {
        if (!React.isValidElement(node) || !node.type) {
          return null;
        }

        var _ref3 = node,
            key = _ref3.key,
            _ref3$props = _ref3.props,
            children = _ref3$props.children,
            value = _ref3$props.value,
            popover = _ref3$props.popover,
            popoverProps = _ref3$props.popoverProps,
            title = _ref3$props.title,
            restProps = _objectWithoutProperties(_ref3$props, ["children", "value", "popover", "popoverProps", "title"]);

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

        var childData = _this.convertChildrenToData(children);

        if (childData.length) {
          data.children = childData;
        }

        return data;
      }).filter(function (data) {
        return data;
      });
    };

    _this.convertTreeData = function (dataNode) {
      var _dataNode$;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var valueState = _this.state.value;
      var isAllSelected = isArrayIncludes(valueState || [], _this.treeValueAll);
      var indeterminate = !isAllSelected && !!(valueState !== null && valueState !== void 0 && valueState.length);

      if (!dataNode) {
        return undefined;
      }

      if (((_dataNode$ = dataNode[0]) === null || _dataNode$ === void 0 ? void 0 : _dataNode$.key) === "".concat(prefix, "-tree-treenode-all")) {
        return dataNode;
      }

      var selectAll = options.selectAll;

      var process = function process(node) {
        node.forEach(function (o) {
          var children = o.children,
              key = o.key,
              title = o.title,
              dataTitle = o.dataTitle,
              value = o.value,
              popover = o.popover,
              _o$popoverProps = o.popoverProps,
              popoverProps = _o$popoverProps === void 0 ? {} : _o$popoverProps;

          if (dataTitle) {
            return;
          }

          if (title) {
            o.dataTitle = title;
          }

          if (key === undefined) {
            o.key = value;
          } else if (value === undefined) {
            o.value = key;
          }

          if (popover) {
            o.title = React.createElement(React.Fragment, null, React.createElement("div", {
              className: "".concat(prefix, "-pop-trigger")
            }, title), React.createElement(_popover["default"], _extends({
              popup: popover,
              placement: "right"
            }, popoverProps), React.createElement("div", {
              className: "".concat(prefix, "-pop-trigger-placeholder")
            })));
          }

          if (children) {
            process(children);
          }
        });
      };

      process(dataNode);

      if (selectAll) {
        dataNode.unshift({
          title: React.createElement("div", {
            role: "none",
            className: "".concat(prefix, "-tree-treenode-all-inner"),
            onClick: _this.handleSelectAll
          }, "\u5168\u9009", React.createElement(_checkbox["default"], {
            size: "medium",
            checked: isAllSelected,
            indeterminate: indeterminate
          })),
          className: "".concat(prefix, "-tree-treenode-all"),
          key: "".concat(prefix, "-tree-treenode-all"),
          checkable: false,
          disableCheckbox: true
        });
      }

      return dataNode;
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

      var _this$props4 = _this.props,
          maxTagCount = _this$props4.maxTagCount,
          placeholder = _this$props4.placeholder,
          resultVisible = _this$props4.resultVisible;
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

    var _valueState = _value !== null ? _value : defaultValue;

    _this.state = {
      hash: Math.random().toString(36).substring(3, 8),
      value: _valueState
    };
    return _this;
  }

  _createClass(TreeSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          autoClearSearchValue = _this$props5.autoClearSearchValue,
          children = _this$props5.children,
          className = _this$props5.className,
          getPopupContainer = _this$props5.getPopupContainer,
          maxTagCount = _this$props5.maxTagCount,
          multiple = _this$props5.multiple,
          _onDropdownVisibleChange = _this$props5.onDropdownVisibleChange,
          placement = _this$props5.placement,
          placeholder = _this$props5.placeholder,
          rightIcon = _this$props5.rightIcon,
          resultRender = _this$props5.resultRender,
          resultVisible = _this$props5.resultVisible,
          selectAll = _this$props5.selectAll,
          showCheckedStrategy = _this$props5.showCheckedStrategy,
          topContent = _this$props5.topContent,
          treeData = _this$props5.treeData,
          otherProps = _objectWithoutProperties(_this$props5, ["autoClearSearchValue", "children", "className", "getPopupContainer", "maxTagCount", "multiple", "onDropdownVisibleChange", "placement", "placeholder", "rightIcon", "resultRender", "resultVisible", "selectAll", "showCheckedStrategy", "topContent", "treeData"]);

      var restProps = (0, _omit["default"])(otherProps, ["onChange", "onSearch", "defaultValue", "value"]);
      var _this$state2 = this.state,
          hash = _this$state2.hash,
          topContentPortalTarget = _this$state2.topContentPortalTarget,
          value = _this$state2.value;
      var classSet = (0, _classnames["default"])(className, _defineProperty({}, "".concat(prefix, "_resultHidden"), !resultVisible));
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

      var treeDataFinal = this.convertTreeData(treeData, {
        selectAll: selectAll
      }) || this.convertChildrenToData(children);
      this.treeData = treeDataFinal;
      this.treeValueAll = treeDataFinal.map(function (_ref4) {
        var val = _ref4.value,
            disabled = _ref4.disabled,
            disableCheckbox = _ref4.disableCheckbox,
            checkable = _ref4.checkable;

        if (val !== undefined && !disabled && !disableCheckbox && checkable !== false) {
          return val;
        }

        return undefined;
      }).filter(Boolean);
      var multiLevel = treeDataFinal.some(function (o) {
        var _o$children;

        return (_o$children = o.children) === null || _o$children === void 0 ? void 0 : _o$children.length;
      });
      return React.createElement(_configProvider.ConfigContext.Consumer, null, function (_ref5) {
        var _classNames2;

        var getPopupContainerContext = _ref5.getPopupContainer;
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
          dropdownClassName: (0, _classnames["default"])("".concat(prefix, "-dropdown_").concat(hash), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-dropdown-multiple"), multiple), _defineProperty(_classNames2, "".concat(prefix, "-dropdown-single"), !multiple), _defineProperty(_classNames2, "".concat(prefix, "-dropdown-all"), selectAll), _defineProperty(_classNames2, "".concat(prefix, "-dropdown-single-level"), !multiLevel), _classNames2)),
          dropdownPopupAlign: placement && (0, _placements["default"])({
            alignEdge: true
          })[placement],
          filterTreeNode: _this2.filterTreeNode,
          getPopupContainer: getPopupContainer || getPopupContainerContext,
          inputIcon: React.createElement(_icon["default"], {
            icon: "triangle-down"
          }),
          maxTagPlaceholder: _this2.getMaxTagPlaceholder,
          notFoundContent: React.createElement(React.Fragment, null, React.createElement(_icon["default"], {
            icon: "file-outlined",
            color: "var(--transparent-gray-600)",
            style: {
              marginRight: "4px"
            }
          }), "\u65E0\u5339\u914D\u9879"),
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
          listItemHeight: 32,
          listHeight: 280,
          treeData: treeDataFinal,
          onDropdownVisibleChange: function onDropdownVisibleChange(visible) {
            if (!visible) {
              _this2.handleSearch("");
            }

            _this2.handleVisibleChange(visible);

            if (_onDropdownVisibleChange) {
              _onDropdownVisibleChange(visible);
            }
          }
        }, restProps)), !!rightIcon && multiple && React.createElement(_icon["default"], {
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
  selectAll: _propTypes["default"].bool,
  showCheckedStrategy: _propTypes["default"].oneOf(["show-all", "show-parent", "show-child"]),
  topContent: _propTypes["default"].node,
  treeData: _propTypes["default"].array,
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
  selectAll: false,
  showCheckedStrategy: "show-parent",
  topContent: undefined,
  treeData: undefined,
  value: null
};

TreeSelect.getDerivedStateFromProps = function (_ref6) {
  var value = _ref6.value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImlzQXJyYXlJbmNsdWRlcyIsImExIiwiYTIiLCJldmVyeSIsIm8iLCJpbmNsdWRlcyIsIlRyZWVTZWxlY3QiLCJwcm9wcyIsInNlbGVjdCIsInBvcnRhbCIsIndyYXBwZXIiLCJ0cmVlRGF0YSIsInRyZWVWYWx1ZUFsbCIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInN0YXRlIiwic2F2ZVNlbGVjdCIsIm5vZGUiLCJzYXZlUG9ydGFsIiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJzZXRUaW1lb3V0IiwiZm9yY2VVcGRhdGUiLCJ0b3BDb250ZW50IiwiaGFzaCIsInRvcENvbnRlbnRQb3J0YWxUYXJnZXQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsIiwiY3JlYXRlRWxlbWVudCIsIm9ubW91c2Vkb3duIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGl0bGVMaXN0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsImhhbmRsZVNlYXJjaCIsInZhbCIsIm9uU2VhcmNoIiwiZmlsdGVyVHJlZU5vZGUiLCJpbnB1dCIsInRyZWVOb2RlIiwia2V5IiwidGl0bGUiLCJkYXRhVGl0bGUiLCJTdHJpbmciLCJnZXRNYXhUYWdDb3VudCIsIm1heFRhZ0NvdW50IiwibGVuZ3RoIiwiaGFuZGxlU2VsZWN0QWxsIiwiZ2V0TWF4VGFnUGxhY2Vob2xkZXIiLCJub2RlcyIsInJlc3VsdFJlbmRlciIsInBsYWNlaG9sZGVyVGV4dCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGFiZWwiLCJtYXAiLCJpIiwidmFscyIsInNwbGljZSIsImxhYmVscyIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwicG9wb3ZlciIsInBvcG92ZXJQcm9wcyIsInJlc3RQcm9wcyIsImRhdGEiLCJjaGlsZERhdGEiLCJmaWx0ZXIiLCJjb252ZXJ0VHJlZURhdGEiLCJkYXRhTm9kZSIsIm9wdGlvbnMiLCJ2YWx1ZVN0YXRlIiwiaXNBbGxTZWxlY3RlZCIsImluZGV0ZXJtaW5hdGUiLCJ1bmRlZmluZWQiLCJzZWxlY3RBbGwiLCJwcm9jZXNzIiwiZm9yRWFjaCIsInVuc2hpZnQiLCJjbGFzc05hbWUiLCJjaGVja2FibGUiLCJkaXNhYmxlQ2hlY2tib3giLCJsaXN0ZW5JbnB1dENoYW5nZSIsInRhcmdldCIsImtleUNvZGUiLCJjb21wb25lbnREaWRNb3VudCIsInBsYWNlaG9sZGVyIiwicmVzdWx0VmlzaWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJkZWZhdWx0VmFsdWUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJhdXRvQ2xlYXJTZWFyY2hWYWx1ZSIsImdldFBvcHVwQ29udGFpbmVyIiwibXVsdGlwbGUiLCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJjaGVja2JveCIsImNvdW50IiwidHJlZURhdGFGaW5hbCIsIkJvb2xlYW4iLCJtdWx0aUxldmVsIiwic29tZSIsImdldFBvcHVwQ29udGFpbmVyQ29udGV4dCIsImFsaWduRWRnZSIsIm1hcmdpblJpZ2h0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5IiwiZnVuYyIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiVHJlZU5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLGtCQUFmOztBQUNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDakIsY0FBWUMsc0JBREs7QUFFakIsZ0JBQWNDLHdCQUZHO0FBR2pCLGlCQUFlQztBQUhFLENBQW5COztBQVNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FDdEJDLEVBRHNCLEVBRXRCQyxFQUZzQixFQUdWO0FBQ1osTUFBSSxDQUFDRCxFQUFELElBQU8sQ0FBQ0MsRUFBWixFQUFnQjtBQUNkLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU9BLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLFVBQUNDLENBQUQ7QUFBQSxXQUFPSCxFQUFFLENBQUNJLFFBQUgsQ0FBWUQsQ0FBWixDQUFQO0FBQUEsR0FBVCxDQUFQO0FBQ0QsQ0FURDs7SUFvRk1FLFU7Ozs7O0FBb0pKLHNCQUFZQyxLQUFaLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ25DLDhCQUFNQSxLQUFOO0FBRG1DLFVBVjlCQyxNQVU4QjtBQUFBLFVBUjlCQyxNQVE4QjtBQUFBLFVBTjlCQyxPQU04QjtBQUFBLFVBSjlCQyxRQUk4QjtBQUFBLFVBRjlCQyxZQUU4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QVA7QUFHRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDOztBQXRJR3RDLFUsQ0F3SVU0SSxRLEdBQTRCQSxzQjtlQTZsQjdCNUksVSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmNUcmVlU2VsZWN0LCB7XG4gIFNIT1dfQUxMLFxuICBTSE9XX1BBUkVOVCxcbiAgU0hPV19DSElMRCxcbiAgVHJlZU5vZGUsXG59IGZyb20gXCJyYy10cmVlLXNlbGVjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9saWIvQ2hpbGRyZW4vdG9BcnJheVwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94XCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9wb3J0YWxcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL3NwaW5uZXJcIlxuaW1wb3J0IGdldFBsYWNlbWVudHMgZnJvbSBcIi4uL3Rvb2x0aXAvcGxhY2VtZW50c1wiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10cmVlLXNlbGVjdFwiXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3Qgc3RyYXRlZ2llcyA9IHtcbiAgXCJzaG93LWFsbFwiOiBTSE9XX0FMTCxcbiAgXCJzaG93LWNoaWxkXCI6IFNIT1dfQ0hJTEQsXG4gIFwic2hvdy1wYXJlbnRcIjogU0hPV19QQVJFTlQsXG59XG5cbi8qKlxuICogYTEg5piv5ZCm5YyF5ZCrIGEyXG4gKi9cbmNvbnN0IGlzQXJyYXlJbmNsdWRlcyA9IChcbiAgYTE6IFJlYWN0LlJlYWN0VGV4dFtdLFxuICBhMjogUmVhY3QuUmVhY3RUZXh0W11cbik6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWExIHx8ICFhMikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGEyLmV2ZXJ5KChvKSA9PiBhMS5pbmNsdWRlcyhvKSlcbn1cblxuZXhwb3J0IHR5cGUgVHJlZU5vZGVWYWx1ZSA9IHN0cmluZ1tdIHwgbnVtYmVyW10gfCBudWxsXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlIHtcbiAgdmFsdWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIGtleTogc3RyaW5nXG4gIGRpc2FibGVkOiBib29sZWFuXG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFOb2RlIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIHZhbHVlPzogUmVhY3QuUmVhY3RUZXh0XG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG4gIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlXG4gIGtleT86IFJlYWN0LlJlYWN0VGV4dFxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICBjaGVja2FibGU/OiBib29sZWFuXG4gIHBvcG92ZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICBjaGlsZHJlbj86IERhdGFOb2RlW11cbn1cblxuZXhwb3J0IHR5cGUgVHJlZURhdGEgPSBEYXRhTm9kZVtdIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGRlZmF1bHRWYWx1ZT86IFRyZWVOb2RlVmFsdWVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICBtYXhUYWdDb3VudD86IG51bGwgfCBudW1iZXJcbiAgbXVsdGlwbGU/OiBib29sZWFuXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBUcmVlTm9kZVZhbHVlLCB0aXRsZUxpc3Q6IFJlYWN0LlJlYWN0Tm9kZVtdKSA9PiB2b2lkXG4gIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgb25TZWFyY2g/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgcmVzdWx0UmVuZGVyPzogbnVsbCB8ICgodmFsdWVzOiBJVHJlZU5vZGVbXSkgPT4gSlNYLkVsZW1lbnQpXG4gIHJlc3VsdFZpc2libGU/OiBib29sZWFuXG4gIHNlbGVjdEFsbD86IGJvb2xlYW5cbiAgc2hvd0NoZWNrZWRTdHJhdGVneT86IFwic2hvdy1hbGxcIiB8IFwic2hvdy1jaGlsZFwiIHwgXCJzaG93LXBhcmVudFwiXG4gIHRvcENvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdHJlZURhdGE/OiBUcmVlRGF0YVxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFN0YXRlIHtcbiAgaGFzaDogc3RyaW5nXG4gIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQ/OiBIVE1MRGl2RWxlbWVudFxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY2hlY2thYmxlPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICB0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZVxuICBrZXk/OiBzdHJpbmdcbiAgZXZlbnRLZXk/OiBzdHJpbmdcbiAgaXNMZWFmPzogYm9vbGVhblxuICBjaGVja2VkPzogYm9vbGVhblxuICBleHBhbmRlZD86IGJvb2xlYW5cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgc2VsZWN0ZWQ/OiBib29sZWFuXG4gIHNlbGVjdGFibGU/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5qCR5b2i6YCJ5oupXG4gKi9cbmNsYXNzIFRyZWVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRyZWVTZWxlY3RQcm9wcywgSVRyZWVTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlgLzooqvpgInmi6nlkI7vvIzmmK/lkKbpnIDopoHmuIXnqbrmkJzntKLmoYZcbiAgICAgKi9cbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOm7mOiupOmAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgICAqL1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmnIDlpJrmmL7npLrlpJrlsJHkuKogdGFn77yM5aaC5p6c6LaF6L+H5LqG5YiZ5Lul5pS26LW355qE5b2i5byP5Ye6546wXG4gICAgICovXG4gICAgbWF4VGFnQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5aSa6YCJ5qih5byPXG4gICAgICovXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWAvOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5LiL5ouJIHZpc2libGUg5Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiBib29sZWFuXG4gICAgICovXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOaQnOe0ouaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5by55Ye65L2N572uXG4gICAgICovXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJ0b3BcIixcbiAgICAgIFwibGVmdFwiLFxuICAgICAgXCJyaWdodFwiLFxuICAgICAgXCJib3R0b21cIixcbiAgICAgIFwidG9wTGVmdFwiLFxuICAgICAgXCJ0b3BSaWdodFwiLFxuICAgICAgXCJib3R0b21MZWZ0XCIsXG4gICAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgICBcImxlZnRUb3BcIixcbiAgICAgIFwibGVmdEJvdHRvbVwiLFxuICAgICAgXCJyaWdodFRvcFwiLFxuICAgICAgXCJyaWdodEJvdHRvbVwiLFxuICAgIF0pLFxuICAgIC8qKlxuICAgICAqIOiuvue9rui+k+WFpeahhueahOm7mOiupOWGheWuuVxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruiHquWumuS5ieeahOe7k+aenOa4suafk1xuICAgICAqL1xuICAgIHJlc3VsdFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6L6T5YWl5qGG5YaF55qE5qCH562+5piv5ZCm5pi+56S677yM5q2kIFByb3Ag55So5LqO5oOz6KaB5bCG57uT5p6c5Yy65bGV56S65Zyo5Yir55qE5Zyw5pa555qE6ZyA5rGCXG4gICAgICovXG4gICAgcmVzdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6a5Yi25qCR5b2i6YCJ5oup5Zmo55qEaWNvblxuICAgICAqL1xuICAgIHJpZ2h0SWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/lhajpgInlip/og71cbiAgICAgKi9cbiAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWumuS5iemAieS4remhueWbnuWhq+eahOaWueW8j++8mlxuICAgICAqIDEuIHNob3ctYWxs77ya5pi+56S65YyF5ous54i26IqC54K555qE5omA5pyJ6YCJ5Lit6IqC54K577ybXG4gICAgICogMi4gc2hvdy1wYXJlbnTvvJrlj6rmmL7npLrniLboioLngrnvvJtcbiAgICAgKiAzLiBzaG93LWNoaWxk77ya5Y+q5pi+56S65a2Q6IqC54K544CC6buY6K6k5YC877yac2hvdy1wYXJlbnRcbiAgICAgKi9cbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJzaG93LWFsbFwiLFxuICAgICAgXCJzaG93LXBhcmVudFwiLFxuICAgICAgXCJzaG93LWNoaWxkXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog5LiL5ouJ5qGG6aG26YOo5pi+56S655qE6Ieq5a6a5LmJ5YWD57SgXG4gICAgICovXG4gICAgdG9wQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogdHJlZU5vZGVzIOaVsOaNru+8jOagvOW8j+WPgueFpyBpbnRlcmZhY2UgRGF0YU5vZGVcbiAgICAgKi9cbiAgICB0cmVlRGF0YTogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8mumAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRyZWVTZWxlY3RQcm9wcyA9IHtcbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgICBtYXhUYWdDb3VudDogbnVsbCxcbiAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBvblNlYXJjaDogbm9vcCxcbiAgICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiLFxuICAgIHJlc3VsdFJlbmRlcjogbnVsbCxcbiAgICByZXN1bHRWaXNpYmxlOiB0cnVlLFxuICAgIHJpZ2h0SWNvbjogXCJtZW51XCIsXG4gICAgc2VsZWN0QWxsOiBmYWxzZSxcbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBcInNob3ctcGFyZW50XCIsXG4gICAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICAgIHRyZWVEYXRhOiB1bmRlZmluZWQsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7IHZhbHVlIH06IElUcmVlU2VsZWN0UHJvcHMpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBUcmVlTm9kZTogdHlwZW9mIFRyZWVOb2RlID0gVHJlZU5vZGVcblxuICBwdWJsaWMgc2VsZWN0OiB0eXBlb2YgUmNUcmVlU2VsZWN0XG5cbiAgcHVibGljIHBvcnRhbDogUmVhY3QuUmVhY3ROb2RlXG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHRyZWVEYXRhOiBEYXRhTm9kZVtdXG5cbiAgcHVibGljIHRyZWVWYWx1ZUFsbDogYW55W11cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRyZWVTZWxlY3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgdmFsdWUsIGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2YWx1ZVN0YXRlID0gdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc2g6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygzLCA4KSxcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIG5leHRTdGF0ZTogSVRyZWVTZWxlY3RTdGF0ZVxuICApID0+XG4gICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuXG4gIHB1YmxpYyBzYXZlU2VsZWN0ID0gKG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVQb3J0YWwgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5wb3J0YWwgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVdyYXBwZXIgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLndyYXBwZXIgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyU3dpdGNoZXJJY29uID0gKHsgaXNMZWFmLCBsb2FkaW5nIH06IElUcmVlTm9kZVByb3BzKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTcGlubmVyIHNpemU9XCJtaW5pXCIgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC10cmVlLXN3aXRjaGVyLWljb25cIiAvPlxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEljb25cbiAgICAgICAgaWNvbj1cInRyaWFuZ2xlLXJpZ2h0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC10cmVlLXN3aXRjaGVyLWljb25cIlxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3BDb250ZW50IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAvKipcbiAgICAgICAgICog5LiL5ouJ5qGG5pi+56S6ICYmIOS8oOWFpeS6humhtumDqOiHquWumuS5ieWFg+e0oCAmJiDpppbmrKHmt7vliqBcbiAgICAgICAgICovXG4gICAgICAgIGlmICh2aXNpYmxlICYmIHRvcENvbnRlbnQgJiYgIXRvcENvbnRlbnRQb3J0YWxUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YFxuICAgICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZWwub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd24uaW5zZXJ0QmVmb3JlKGVsLCBkcm9wZG93bi5jaGlsZHJlblswXSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0b3BDb250ZW50UG9ydGFsVGFyZ2V0OiBlbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIDApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlID0gKFxuICAgIHZhbHVlOiBUcmVlTm9kZVZhbHVlLFxuICAgIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW11cbiAgKSA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgb25DaGFuZ2UsIHZhbHVlOiB2YWx1ZVByb3AgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlLCB0aXRsZUxpc3QpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25TZWFyY2ggfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgIG9uU2VhcmNoKHZhbClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbHRlclRyZWVOb2RlID0gKGlucHV0OiBzdHJpbmcsIHRyZWVOb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGtleSwgdGl0bGUsIHZhbHVlLCBkYXRhVGl0bGUgfSA9IHRyZWVOb2RlXG4gICAgaWYgKCFrZXkgfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhkYXRhVGl0bGUgfHwgdGl0bGUpLmluY2x1ZGVzKGlucHV0KVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ0NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoIW1heFRhZ0NvdW50IHx8ICF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPD0gbWF4VGFnQ291bnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VsZWN0QWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWU6IHZhbHVlUHJvcCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGlzQXJyYXlJbmNsdWRlcyh2YWx1ZSB8fCBbXSwgdGhpcy50cmVlVmFsdWVBbGwpKSB7XG4gICAgICAvKipcbiAgICAgICAqIOW3suWFqOmAiVxuICAgICAgICovXG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICog5riF56m6XG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnRyZWVWYWx1ZUFsbCB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHRoaXMudHJlZVZhbHVlQWxsLCBbXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnUGxhY2Vob2xkZXIgPSAobm9kZXM6IElUcmVlTm9kZVtdKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcmVzdWx0UmVuZGVyLCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlc3VsdFJlbmRlcihub2RlcylcbiAgICB9XG5cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gbm9kZXNcbiAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSAoXG4gICAgICA8PlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIHtub2Rlc1swXS5sYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIC4uLuetiSB7bGVuZ3RofSDkuKpcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4LXBvcG92ZXItaXRlbS13cmFwcGVyXCI+XG4gICAgICAgICAgICB7bm9kZXMubWFwKCh7IGtleSwgZGlzYWJsZWQsIGxhYmVsIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4LXBvcG92ZXItaXRlbVwiIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7IWRpc2FibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxzID0gbm9kZXMubWFwKChvKSA9PiBvLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFscy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gbm9kZXMubWFwKChvKSA9PiBvLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzLnNwbGljZShpLCAxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFscywgbGFiZWxzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBwb3B1cENsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtbWF4UG9wb3ZlclwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZHVpLXRyZWUtc2VsZWN0LW1heFBsYWNlaG9sZGVyXCJcbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7cGxhY2Vob2xkZXJUZXh0fVxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEgPSAobm9kZXM6IGFueSk6IERhdGFOb2RlW10gPT5cbiAgICB0b0FycmF5KG5vZGVzKVxuICAgICAgLm1hcCgobm9kZTogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHBvcG92ZXIsXG4gICAgICAgICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIC4uLnJlc3RQcm9wc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0gPSBub2RlIGFzIFJlYWN0LlJlYWN0RWxlbWVudFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlpoLmnpzmnIkgcG9wb3ZlciDliJnlnKjov5nph4zljIXoo4XkuIDkuIsgdGl0bGVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGRhdGFUaXRsZTogdGl0bGUsXG4gICAgICAgICAgdGl0bGU6IHBvcG92ZXIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtcG9wLXRyaWdnZXJcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlclwiIC8+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICksXG4gICAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hpbGREYXRhID0gdGhpcy5jb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pXG4gICAgICAgIGlmIChjaGlsZERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkRGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkYXRhKSA9PiBkYXRhKVxuXG4gIHB1YmxpYyBjb252ZXJ0VHJlZURhdGEgPSAoXG4gICAgZGF0YU5vZGU6IFRyZWVEYXRhLFxuICAgIG9wdGlvbnM6IHsgc2VsZWN0QWxsPzogYm9vbGVhbiB9ID0ge31cbiAgKTogVHJlZURhdGEgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWU6IHZhbHVlU3RhdGUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkID0gaXNBcnJheUluY2x1ZGVzKHZhbHVlU3RhdGUgfHwgW10sIHRoaXMudHJlZVZhbHVlQWxsKVxuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSAhaXNBbGxTZWxlY3RlZCAmJiAhIXZhbHVlU3RhdGU/Lmxlbmd0aFxuXG4gICAgaWYgKCFkYXRhTm9kZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGlmIChkYXRhTm9kZVswXT8ua2V5ID09PSBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCkge1xuICAgICAgcmV0dXJuIGRhdGFOb2RlXG4gICAgfVxuXG4gICAgY29uc3QgeyBzZWxlY3RBbGwgfSA9IG9wdGlvbnNcblxuICAgIGNvbnN0IHByb2Nlc3MgPSAobm9kZTogRGF0YU5vZGVbXSkgPT4ge1xuICAgICAgbm9kZS5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGF0YVRpdGxlLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHBvcG92ZXIsXG4gICAgICAgICAgcG9wb3ZlclByb3BzID0ge30sXG4gICAgICAgIH0gPSBvXG4gICAgICAgIGlmIChkYXRhVGl0bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogZGF0YVRpdGxlIOeUqOS6juaciSBwb3BvdmVyIOeahOaDheWGteS4i+eahOaQnOe0olxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgby5kYXRhVGl0bGUgPSB0aXRsZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG8ua2V5ID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgby52YWx1ZSA9IGtleVxuICAgICAgICB9XG4gICAgICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICAgICAgby50aXRsZSA9IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyYH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8UG9wb3ZlciBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlcmB9IC8+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICBwcm9jZXNzKGNoaWxkcmVuKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb2Nlc3MoZGF0YU5vZGUpXG5cbiAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICBkYXRhTm9kZS51bnNoaWZ0KHtcbiAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGwtaW5uZXJgfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWxlY3RBbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg5YWo6YCJXG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e2luZGV0ZXJtaW5hdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGxgLFxuICAgICAgICBrZXk6IGAke3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGxgLFxuICAgICAgICBjaGVja2FibGU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlQ2hlY2tib3g6IHRydWUsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhTm9kZVxuICB9XG5cbiAgbGlzdGVuSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlIH0sXG4gICAgICBrZXlDb2RlLFxuICAgIH0gPSBlXG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gOCAmJiB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50LCBwbGFjZWhvbGRlciwgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy8g56aB5q2iIHRyZWUtc2VsZWN0IOmUruebmOWbnuWIoOS8muW9seWTjSB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5saXN0ZW5JbnB1dENoYW5nZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsICYmIHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIHJlc3VsdFZpc2libGUg5Li6IGZhbHNlIOaXtu+8jCBzZWxlY3RvciDpq5jluqbkuI3kvJrmlLnlj5jjgIJcbiAgICAgKiDmoLnmja7miJHnmoTnu4/pqowgUG9wdXAg6Kem5Y+R6YeN5paw5a6a5L2N55qE5pe25py65piv77yaXG4gICAgICogMS4gd2luZG93IHJlc2l6ZVxuICAgICAqIDIuIHJlc2l6ZSBvYnNlcnZlciDkuoYgc2VsZWN0b3JcbiAgICAgKiDlm6DmraTov5nph4zmiYvliqjop6blj5EgcmVzaXplXG4gICAgICovXG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKVxuICAgICAgfSwgMClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIG1heFRhZ0NvdW50LFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmlnaHRJY29uLFxuICAgICAgcmVzdWx0UmVuZGVyLFxuICAgICAgcmVzdWx0VmlzaWJsZSxcbiAgICAgIHNlbGVjdEFsbCxcbiAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3ksXG4gICAgICB0b3BDb250ZW50LFxuICAgICAgdHJlZURhdGEsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlc3RQcm9wczogYW55ID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcIm9uQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VhcmNoXCIsXG4gICAgICBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGhhc2gsIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQsIHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCB7XG4gICAgICBbYCR7cHJlZml4fV9yZXN1bHRIaWRkZW5gXTogIXJlc3VsdFZpc2libGUsXG4gICAgfSlcblxuICAgIGxldCBjaGVja2JveDogYW55ID0gbXVsdGlwbGVcbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIGNoZWNrYm94ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC10cmVlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVTdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIHg9XCIxXCJcbiAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWR1aS10cmVlLXNlbGVjdC10cmVlLWNoZWNrYm94LWNoZWNrZWRTdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNLjYxOCA1LjgyN2EuNDYzLjQ2MyAwIDAgMS0uMDItLjY3NWwuODA0LS44MDRhLjUyLjUyIDAgMCAxIC43MTYtLjAxTDQuNzUgNi43NWw0LjkyMi01LjYyNWEuNTEzLjUxMyAwIDAgMSAuNzA3LS4wNmwuNzQyLjYyYS40NzguNDc4IDAgMCAxIC4wNDQuNjg3bC02LjA4IDYuNzU2YS41MDYuNTA2IDAgMCAxLS43MDMuMDQ1TC42MTggNS44Mjd6XCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmVzdFByb3BzLnZhbHVlID0gdmFsdWVcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRNYXhUYWdDb3VudCgpXG4gICAgICBpZiAoY291bnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gY291bnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSAwXG4gICAgfVxuXG4gICAgY29uc3QgdHJlZURhdGFGaW5hbCA9XG4gICAgICB0aGlzLmNvbnZlcnRUcmVlRGF0YSh0cmVlRGF0YSwgeyBzZWxlY3RBbGwgfSkgfHxcbiAgICAgIHRoaXMuY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKVxuXG4gICAgdGhpcy50cmVlRGF0YSA9IHRyZWVEYXRhRmluYWxcbiAgICB0aGlzLnRyZWVWYWx1ZUFsbCA9IHRyZWVEYXRhRmluYWxcbiAgICAgIC5tYXAoKHsgdmFsdWU6IHZhbCwgZGlzYWJsZWQsIGRpc2FibGVDaGVja2JveCwgY2hlY2thYmxlIH0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgIWRpc2FibGVDaGVja2JveCAmJlxuICAgICAgICAgIGNoZWNrYWJsZSAhPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG5cbiAgICAvLyDmmK/lkKbmmK/lpJrlsYLnuqdcbiAgICBjb25zdCBtdWx0aUxldmVsID0gdHJlZURhdGFGaW5hbC5zb21lKChvKSA9PiBvLmNoaWxkcmVuPy5sZW5ndGgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJhZHVpLXRyZWUtc2VsZWN0LXdyYXBwZXJcIiwge1xuICAgICAgICAgICAgICBcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlci1tYXhUYWdcIjogdGhpcy5nZXRNYXhUYWdDb3VudCgpICE9PSBudWxsLFxuICAgICAgICAgICAgICBcImFkdWktdHJlZS1zZWxlY3Qtd3JhcHBlci1yZXN1bHRSZW5kZXJcIjogISFyZXN1bHRSZW5kZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlV3JhcHBlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dG9wQ29udGVudCAmJiB0b3BDb250ZW50UG9ydGFsVGFyZ2V0ICYmIChcbiAgICAgICAgICAgICAgPFBvcnRhbCByZWY9e3RoaXMuc2F2ZVBvcnRhbH0gY29udGFpbmVyPXt0b3BDb250ZW50UG9ydGFsVGFyZ2V0fT5cbiAgICAgICAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFJjVHJlZVNlbGVjdFxuICAgICAgICAgICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT17XG4gICAgICAgICAgICAgICAgcmVzdWx0VmlzaWJsZSA/IGF1dG9DbGVhclNlYXJjaFZhbHVlIDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWRyb3Bkb3duXyR7aGFzaH1gLCB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tbXVsdGlwbGVgXTogbXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tc2luZ2xlYF06ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1hbGxgXTogc2VsZWN0QWxsLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLXNpbmdsZS1sZXZlbGBdOiAhbXVsdGlMZXZlbCxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGRyb3Bkb3duUG9wdXBBbGlnbj17XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50ICYmIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpbHRlclRyZWVOb2RlPXt0aGlzLmZpbHRlclRyZWVOb2RlfVxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICAgICAgICBpbnB1dEljb249ezxJY29uIGljb249XCJ0cmlhbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyPXt0aGlzLmdldE1heFRhZ1BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiZmlsZS1vdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS02MDApXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICDml6DljLnphY3poblcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwcmVmaXhDbHM9XCJhZHVpLXRyZWUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWxlY3R9XG4gICAgICAgICAgICAgIHJlbW92ZUljb249ezxJY29uIGljb249XCJjYW5jZWxcIiBpbnRlcmFjdGl2ZSBzaXplPXsxNn0gLz59XG4gICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3k9e1xuICAgICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3kgJiYgc3RyYXRlZ2llc1tzaG93Q2hlY2tlZFN0cmF0ZWd5XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3dTZWFyY2g9e211bHRpcGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hlckljb249e3RoaXMucmVuZGVyU3dpdGNoZXJJY29ufVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgICAgdHJlZUNoZWNrYWJsZT17Y2hlY2tib3h9XG4gICAgICAgICAgICAgIHRyZWVOb2RlRmlsdGVyUHJvcD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICBsaXN0SGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgIHRyZWVEYXRhPXt0cmVlRGF0YUZpbmFsfVxuICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17KHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiAyMDIxMDMyMyB2aXNpYmxlIGZhbHNlIOaXtui+k+WFpeahhuS8muiiq+aDheWGte+8jOS9huayoeacieiwg+eUqCBvblNlYXJjaFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2goXCJcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgICAgaWYgKG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ISFyaWdodEljb24gJiYgbXVsdGlwbGUgJiYgKFxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXtyaWdodEljb259IGNsYXNzTmFtZT1cImFkdWktdHJlZS1zZWxlY3QtaWNvblwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlU2VsZWN0XG4iXX0=