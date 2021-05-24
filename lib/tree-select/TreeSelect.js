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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
          className: "".concat(prefix, "-tree-switcher-icon")
        });
      }

      if (isLeaf) {
        return null;
      }

      return React.createElement(_icon["default"], {
        icon: "triangle-right",
        className: "".concat(prefix, "-tree-switcher-icon")
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
      var _this$state2 = _this.state,
          value = _this$state2.value,
          maxHeightFixed = _this$state2.maxHeightFixed;

      if ((!maxTagCount || !value || value.length <= maxTagCount) && !maxHeightFixed) {
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
      var _nodes$;

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
          verticalAlign: "top",
          maxWidth: "calc(100% - 53px)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      }, (_nodes$ = nodes[0]) === null || _nodes$ === void 0 ? void 0 : _nodes$.label), React.createElement("span", {
        style: {
          display: "inline-block",
          verticalAlign: "top"
        }
      }, "\u7B49 ", length, " \u4E2A"));
      return React.createElement(_popover["default"], {
        alignEdge: false,
        placement: "top",
        popup: React.createElement("div", {
          className: "".concat(prefix, "-max-popover-item-wrapper")
        }, nodes.map(function (_ref2, i) {
          var key = _ref2.key,
              disabled = _ref2.disabled,
              label = _ref2.label;
          return React.createElement("div", {
            className: "".concat(prefix, "-max-popover-item"),
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
        popupClassName: "".concat(prefix, "-maxPopover")
      }, React.createElement("div", {
        className: "".concat(prefix, "-maxPlaceholder"),
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
            className: "".concat(prefix, "-pop-trigger")
          }, title), React.createElement(_popover["default"], _extends({
            popup: popover,
            placement: "right"
          }, popoverProps), React.createElement("div", {
            className: "".concat(prefix, "-pop-trigger-placeholder")
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

    _this.convertTreeData = function (dataNodeParam) {
      var _dataNode$;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!dataNodeParam) {
        return undefined;
      }

      var dataNode = _toConsumableArray(dataNodeParam);

      var valueState = _this.state.value;
      var isAllSelected = isArrayIncludes(valueState || [], _this.treeValueAll);
      var indeterminate = !isAllSelected && !!(valueState !== null && valueState !== void 0 && valueState.length);

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

    _this.componentDidUpdate = function (_, _ref4) {
      var valuePrev = _ref4.value;
      var _this$props5 = _this.props,
          resultVisible = _this$props5.resultVisible,
          heightFixed = _this$props5.heightFixed;
      var _this$state3 = _this.state,
          hash = _this$state3.hash,
          value = _this$state3.value,
          maxHeightFixed = _this$state3.maxHeightFixed;

      if (!resultVisible) {
        setTimeout(function () {
          window.dispatchEvent(new Event("resize"));
        }, 0);
      }

      if (heightFixed && (valuePrev === null || valuePrev === void 0 ? void 0 : valuePrev.length) !== (value === null || value === void 0 ? void 0 : value.length)) {
        try {
          var wrapper = document.querySelector(".".concat(prefix, "-wrapper_").concat(hash, " .").concat(prefix, "-selection-overflow"));
          var suffix = document.querySelector(".".concat(prefix, "-wrapper_").concat(hash, " .").concat(prefix, "-selection-overflow-item-suffix"));
          var last = suffix.children[suffix.children.length - 1];

          if (last.offsetLeft > wrapper.offsetWidth - 30 && !maxHeightFixed && valuePrev && value && valuePrev.length < value.length) {
            _this.setState({
              maxHeightFixed: true
            });
          } else if (last.offsetLeft < wrapper.offsetWidth - 30 && maxHeightFixed && valuePrev && value && valuePrev.length > value.length) {
            _this.setState({
              maxHeightFixed: false
            });
          }
        } catch (error) {}
      }
    };

    var _value = props.value,
        defaultValue = props.defaultValue;

    var _valueState = _value !== null ? _value : defaultValue;

    _this.state = {
      hash: Math.random().toString(36).substring(3, 8),
      value: _valueState,
      maxHeightFixed: false
    };
    return _this;
  }

  _createClass(TreeSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props6 = this.props,
          autoClearSearchValue = _this$props6.autoClearSearchValue,
          children = _this$props6.children,
          className = _this$props6.className,
          getPopupContainer = _this$props6.getPopupContainer,
          heightFixed = _this$props6.heightFixed,
          maxTagCount = _this$props6.maxTagCount,
          multiple = _this$props6.multiple,
          _onDropdownVisibleChange = _this$props6.onDropdownVisibleChange,
          placement = _this$props6.placement,
          placeholder = _this$props6.placeholder,
          rightIcon = _this$props6.rightIcon,
          resultRender = _this$props6.resultRender,
          resultVisible = _this$props6.resultVisible,
          selectAll = _this$props6.selectAll,
          showCheckedStrategy = _this$props6.showCheckedStrategy,
          topContent = _this$props6.topContent,
          treeData = _this$props6.treeData,
          otherProps = _objectWithoutProperties(_this$props6, ["autoClearSearchValue", "children", "className", "getPopupContainer", "heightFixed", "maxTagCount", "multiple", "onDropdownVisibleChange", "placement", "placeholder", "rightIcon", "resultRender", "resultVisible", "selectAll", "showCheckedStrategy", "topContent", "treeData"]);

      var restProps = (0, _omit["default"])(otherProps, ["onChange", "onSearch", "defaultValue", "value"]);
      var _this$state4 = this.state,
          hash = _this$state4.hash,
          topContentPortalTarget = _this$state4.topContentPortalTarget,
          value = _this$state4.value,
          maxHeightFixed = _this$state4.maxHeightFixed;
      var classSet = (0, _classnames["default"])(className, _defineProperty({}, "".concat(prefix, "_resultHidden"), !resultVisible));
      var checkbox = multiple;

      if (multiple) {
        checkbox = React.createElement("div", null, React.createElement("svg", {
          width: "12",
          height: "10",
          className: "".concat(prefix, "-tree-checkbox-indeterminateSvg")
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
          className: "".concat(prefix, "-tree-checkbox-checkedSvg")
        }, React.createElement("path", {
          d: "M.618 5.827a.463.463 0 0 1-.02-.675l.804-.804a.52.52 0 0 1 .716-.01L4.75 6.75l4.922-5.625a.513.513 0 0 1 .707-.06l.742.62a.478.478 0 0 1 .044.687l-6.08 6.756a.506.506 0 0 1-.703.045L.618 5.827z",
          fillRule: "evenodd"
        })));
      }

      if (value !== null) {
        restProps.value = value;
      }

      if (maxTagCount !== null || maxHeightFixed) {
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
      this.treeValueAll = treeDataFinal.map(function (_ref5) {
        var val = _ref5.value,
            disabled = _ref5.disabled,
            disableCheckbox = _ref5.disableCheckbox,
            checkable = _ref5.checkable;

        if (val !== undefined && !disabled && !disableCheckbox && checkable !== false) {
          return val;
        }

        return undefined;
      }).filter(Boolean);
      var multiLevel = treeDataFinal.some(function (o) {
        var _o$children;

        return (_o$children = o.children) === null || _o$children === void 0 ? void 0 : _o$children.length;
      });
      return React.createElement(_configProvider.ConfigContext.Consumer, null, function (_ref6) {
        var _classNames2, _classNames3;

        var getPopupContainerContext = _ref6.getPopupContainer;
        return React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefix, "-wrapper ").concat(prefix, "-wrapper_").concat(hash), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-wrapper-maxTag"), _this2.getMaxTagCount() !== null), _defineProperty(_classNames2, "".concat(prefix, "-wrapper-fixed"), heightFixed), _defineProperty(_classNames2, "".concat(prefix, "-wrapper-resultRender"), !!resultRender), _classNames2)),
          ref: _this2.saveWrapper
        }, topContent && topContentPortalTarget && React.createElement(_portal["default"], {
          ref: _this2.savePortal,
          container: topContentPortalTarget
        }, topContent), React.createElement(_rcTreeSelect["default"], _extends({
          autoClearSearchValue: resultVisible ? autoClearSearchValue : false,
          className: classSet,
          dropdownClassName: (0, _classnames["default"])("".concat(prefix, "-dropdown_").concat(hash), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "-dropdown-multiple"), multiple), _defineProperty(_classNames3, "".concat(prefix, "-dropdown-single"), !multiple), _defineProperty(_classNames3, "".concat(prefix, "-dropdown-all"), selectAll), _defineProperty(_classNames3, "".concat(prefix, "-dropdown-single-level"), !multiLevel), _classNames3)),
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
          prefixCls: prefix,
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
          className: "".concat(prefix, "-icon")
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
  heightFixed: _propTypes["default"].bool,
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
  heightFixed: false,
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

TreeSelect.getDerivedStateFromProps = function (_ref7) {
  var value = _ref7.value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImlzQXJyYXlJbmNsdWRlcyIsImExIiwiYTIiLCJldmVyeSIsIm8iLCJpbmNsdWRlcyIsIlRyZWVTZWxlY3QiLCJwcm9wcyIsInNlbGVjdCIsInBvcnRhbCIsIndyYXBwZXIiLCJ0cmVlRGF0YSIsInRyZWVWYWx1ZUFsbCIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInN0YXRlIiwic2F2ZVNlbGVjdCIsIm5vZGUiLCJzYXZlUG9ydGFsIiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJzZXRUaW1lb3V0IiwiZm9yY2VVcGRhdGUiLCJ0b3BDb250ZW50IiwiaGFzaCIsInRvcENvbnRlbnRQb3J0YWxUYXJnZXQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsIiwiY3JlYXRlRWxlbWVudCIsIm9ubW91c2Vkb3duIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGl0bGVMaXN0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsImhhbmRsZVNlYXJjaCIsInZhbCIsIm9uU2VhcmNoIiwiZmlsdGVyVHJlZU5vZGUiLCJpbnB1dCIsInRyZWVOb2RlIiwia2V5IiwidGl0bGUiLCJkYXRhVGl0bGUiLCJTdHJpbmciLCJnZXRNYXhUYWdDb3VudCIsIm1heFRhZ0NvdW50IiwibWF4SGVpZ2h0Rml4ZWQiLCJsZW5ndGgiLCJoYW5kbGVTZWxlY3RBbGwiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsIm5vZGVzIiwicmVzdWx0UmVuZGVyIiwicGxhY2Vob2xkZXJUZXh0IiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImxhYmVsIiwibWFwIiwiaSIsInZhbHMiLCJzcGxpY2UiLCJsYWJlbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEiLCJSZWFjdCIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsInBvcG92ZXIiLCJwb3BvdmVyUHJvcHMiLCJyZXN0UHJvcHMiLCJkYXRhIiwiY2hpbGREYXRhIiwiZmlsdGVyIiwiY29udmVydFRyZWVEYXRhIiwiZGF0YU5vZGVQYXJhbSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJkYXRhTm9kZSIsInZhbHVlU3RhdGUiLCJpc0FsbFNlbGVjdGVkIiwiaW5kZXRlcm1pbmF0ZSIsInNlbGVjdEFsbCIsInByb2Nlc3MiLCJmb3JFYWNoIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImNoZWNrYWJsZSIsImRpc2FibGVDaGVja2JveCIsImxpc3RlbklucHV0Q2hhbmdlIiwidGFyZ2V0Iiwia2V5Q29kZSIsImNvbXBvbmVudERpZE1vdW50IiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2YWx1ZVByZXYiLCJoZWlnaHRGaXhlZCIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1ZmZpeCIsImxhc3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJlcnJvciIsImRlZmF1bHRWYWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtdWx0aXBsZSIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwicGxhY2VtZW50IiwicmlnaHRJY29uIiwic2hvd0NoZWNrZWRTdHJhdGVneSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJ0cmVlRGF0YUZpbmFsIiwiQm9vbGVhbiIsIm11bHRpTGV2ZWwiLCJzb21lIiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwiYWxpZ25FZGdlIiwibWFyZ2luUmlnaHQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJUcmVlTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsa0JBQWY7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQixjQUFZQyxzQkFESztBQUVqQixnQkFBY0Msd0JBRkc7QUFHakIsaUJBQWVDO0FBSEUsQ0FBbkI7O0FBU0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUN0QkMsRUFEc0IsRUFFdEJDLEVBRnNCLEVBR1Y7QUFDWixNQUFJLENBQUNELEVBQUQsSUFBTyxDQUFDQyxFQUFaLEVBQWdCO0FBQ2QsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsRUFBRSxDQUFDQyxLQUFILENBQVMsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9ILEVBQUUsQ0FBQ0ksUUFBSCxDQUFZRCxDQUFaLENBQVA7QUFBQSxH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S0FBSyxFQUFMQTtBQURLLEtBQVA7QUFHRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDOztBQTNJR3RDLFUsQ0E2SVUwSixRLEdBQTRCQSxzQjtlQWlwQjdCMUosVSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSY1RyZWVTZWxlY3QsIHtcbiAgU0hPV19BTEwsXG4gIFNIT1dfUEFSRU5ULFxuICBTSE9XX0NISUxELFxuICBUcmVlTm9kZSxcbn0gZnJvbSBcInJjLXRyZWUtc2VsZWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL3BvcnRhbFwiXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vc3Bpbm5lclwiXG5pbXBvcnQgZ2V0UGxhY2VtZW50cyBmcm9tIFwiLi4vdG9vbHRpcC9wbGFjZW1lbnRzXCJcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRyZWUtc2VsZWN0XCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBzdHJhdGVnaWVzID0ge1xuICBcInNob3ctYWxsXCI6IFNIT1dfQUxMLFxuICBcInNob3ctY2hpbGRcIjogU0hPV19DSElMRCxcbiAgXCJzaG93LXBhcmVudFwiOiBTSE9XX1BBUkVOVCxcbn1cblxuLyoqXG4gKiBhMSDmmK/lkKbljIXlkKsgYTJcbiAqL1xuY29uc3QgaXNBcnJheUluY2x1ZGVzID0gKFxuICBhMTogUmVhY3QuUmVhY3RUZXh0W10sXG4gIGEyOiBSZWFjdC5SZWFjdFRleHRbXVxuKTogYm9vbGVhbiA9PiB7XG4gIGlmICghYTEgfHwgIWEyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gYTIuZXZlcnkoKG8pID0+IGExLmluY2x1ZGVzKG8pKVxufVxuXG5leHBvcnQgdHlwZSBUcmVlTm9kZVZhbHVlID0gc3RyaW5nW10gfCBudW1iZXJbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YU5vZGUge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHRcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgbGFiZWw/OiBSZWFjdC5SZWFjdE5vZGVcbiAga2V5PzogUmVhY3QuUmVhY3RUZXh0XG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBkaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgcG9wb3Zlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIGNoaWxkcmVuPzogRGF0YU5vZGVbXVxufVxuXG5leHBvcnQgdHlwZSBUcmVlRGF0YSA9IERhdGFOb2RlW10gfCB1bmRlZmluZWRcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIGhlaWdodEZpeGVkPzogYm9vbGVhblxuICBtYXhUYWdDb3VudD86IG51bGwgfCBudW1iZXJcbiAgbXVsdGlwbGU/OiBib29sZWFuXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBUcmVlTm9kZVZhbHVlLCB0aXRsZUxpc3Q6IFJlYWN0LlJlYWN0Tm9kZVtdKSA9PiB2b2lkXG4gIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgb25TZWFyY2g/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgcmVzdWx0UmVuZGVyPzogbnVsbCB8ICgodmFsdWVzOiBJVHJlZU5vZGVbXSkgPT4gSlNYLkVsZW1lbnQpXG4gIHJlc3VsdFZpc2libGU/OiBib29sZWFuXG4gIHNlbGVjdEFsbD86IGJvb2xlYW5cbiAgc2hvd0NoZWNrZWRTdHJhdGVneT86IFwic2hvdy1hbGxcIiB8IFwic2hvdy1jaGlsZFwiIHwgXCJzaG93LXBhcmVudFwiXG4gIHRvcENvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdHJlZURhdGE/OiBUcmVlRGF0YVxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFN0YXRlIHtcbiAgaGFzaDogc3RyaW5nXG4gIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQ/OiBIVE1MRGl2RWxlbWVudFxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbiAgbWF4SGVpZ2h0Rml4ZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY2hlY2thYmxlPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICB0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZVxuICBrZXk/OiBzdHJpbmdcbiAgZXZlbnRLZXk/OiBzdHJpbmdcbiAgaXNMZWFmPzogYm9vbGVhblxuICBjaGVja2VkPzogYm9vbGVhblxuICBleHBhbmRlZD86IGJvb2xlYW5cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgc2VsZWN0ZWQ/OiBib29sZWFuXG4gIHNlbGVjdGFibGU/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5qCR5b2i6YCJ5oupXG4gKi9cbmNsYXNzIFRyZWVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRyZWVTZWxlY3RQcm9wcywgSVRyZWVTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlgLzooqvpgInmi6nlkI7vvIzmmK/lkKbpnIDopoHmuIXnqbrmkJzntKLmoYZcbiAgICAgKi9cbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOm7mOiupOmAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgICAqL1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpq5jluqbmmK/lkKblm7rlrprkuIDooYzvvIxUcmVlU2VsZWN0IOWwhuagueaNruWGheWuueWMuuWfn+WuveW6puiHquWKqOWwhue7k+aenOaUtui1t++8jOW8gOWQr+i/meS4qiBQcm9wIOWQjiBUcmVlU2VsZWN0IOS8muW/veeVpSBtYXhUYWdDb3VudCBQcm9wXG4gICAgICovXG4gICAgaGVpZ2h0Rml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWfvvIzlpoLmnpzotoXov4fkuobliJnku6XmlLbotbfnmoTlvaLlvI/lh7rnjrBcbiAgICAgKi9cbiAgICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblpJrpgInmqKHlvI9cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5YC85Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDkuIvmi4kgdmlzaWJsZSDlj5jljJbml7bnmoTlm57osIPvvIzlj4LmlbA6IGJvb2xlYW5cbiAgICAgKi9cbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pCc57Si5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7lvLnlh7rkvY3nva5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u6L6T5YWl5qGG55qE6buY6K6k5YaF5a65XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572u6Ieq5a6a5LmJ55qE57uT5p6c5riy5p+TXG4gICAgICovXG4gICAgcmVzdWx0UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblhoXnmoTmoIfnrb7mmK/lkKbmmL7npLrvvIzmraQgUHJvcCDnlKjkuo7mg7PopoHlsIbnu5PmnpzljLrlsZXnpLrlnKjliKvnmoTlnLDmlrnnmoTpnIDmsYJcbiAgICAgKi9cbiAgICByZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprliLbmoJHlvaLpgInmi6nlmajnmoRpY29uXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuW8gOWQr+WFqOmAieWKn+iDvVxuICAgICAqL1xuICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6a5LmJ6YCJ5Lit6aG55Zue5aGr55qE5pa55byP77yaXG4gICAgICogMS4gc2hvdy1hbGzvvJrmmL7npLrljIXmi6zniLboioLngrnnmoTmiYDmnInpgInkuK3oioLngrnvvJtcbiAgICAgKiAyLiBzaG93LXBhcmVudO+8muWPquaYvuekuueItuiKgueCue+8m1xuICAgICAqIDMuIHNob3ctY2hpbGTvvJrlj6rmmL7npLrlrZDoioLngrnjgILpu5jorqTlgLzvvJpzaG93LXBhcmVudFxuICAgICAqL1xuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInNob3ctYWxsXCIsXG4gICAgICBcInNob3ctcGFyZW50XCIsXG4gICAgICBcInNob3ctY2hpbGRcIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDkuIvmi4nmoYbpobbpg6jmmL7npLrnmoToh6rlrprkuYnlhYPntKBcbiAgICAgKi9cbiAgICB0b3BDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiB0cmVlTm9kZXMg5pWw5o2u77yM5qC85byP5Y+C54WnIGludGVyZmFjZSBEYXRhTm9kZVxuICAgICAqL1xuICAgIHRyZWVEYXRhOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVHJlZVNlbGVjdFByb3BzID0ge1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIGhlaWdodEZpeGVkOiBmYWxzZSxcbiAgICBtYXhUYWdDb3VudDogbnVsbCxcbiAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBvblNlYXJjaDogbm9vcCxcbiAgICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiLFxuICAgIHJlc3VsdFJlbmRlcjogbnVsbCxcbiAgICByZXN1bHRWaXNpYmxlOiB0cnVlLFxuICAgIHJpZ2h0SWNvbjogXCJtZW51XCIsXG4gICAgc2VsZWN0QWxsOiBmYWxzZSxcbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBcInNob3ctcGFyZW50XCIsXG4gICAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICAgIHRyZWVEYXRhOiB1bmRlZmluZWQsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7IHZhbHVlIH06IElUcmVlU2VsZWN0UHJvcHMpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBUcmVlTm9kZTogdHlwZW9mIFRyZWVOb2RlID0gVHJlZU5vZGVcblxuICBwdWJsaWMgc2VsZWN0OiB0eXBlb2YgUmNUcmVlU2VsZWN0XG5cbiAgcHVibGljIHBvcnRhbDogUmVhY3QuUmVhY3ROb2RlXG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHRyZWVEYXRhOiBEYXRhTm9kZVtdXG5cbiAgcHVibGljIHRyZWVWYWx1ZUFsbDogYW55W11cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRyZWVTZWxlY3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgdmFsdWUsIGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2YWx1ZVN0YXRlID0gdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc2g6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygzLCA4KSxcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgICAgbWF4SGVpZ2h0Rml4ZWQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIG5leHRTdGF0ZTogSVRyZWVTZWxlY3RTdGF0ZVxuICApID0+XG4gICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuXG4gIHB1YmxpYyBzYXZlU2VsZWN0ID0gKG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVQb3J0YWwgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5wb3J0YWwgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVdyYXBwZXIgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLndyYXBwZXIgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyU3dpdGNoZXJJY29uID0gKHsgaXNMZWFmLCBsb2FkaW5nIH06IElUcmVlTm9kZVByb3BzKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciBzaXplPVwibWluaVwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLXN3aXRjaGVyLWljb25gfSAvPlxuICAgIH1cbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEljb24gaWNvbj1cInRyaWFuZ2xlLXJpZ2h0XCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtc3dpdGNoZXItaWNvbmB9IC8+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVZpc2libGVDaGFuZ2UgPSAodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9wQ29udGVudCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCB7IGhhc2gsIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS4i+aLieahhuaYvuekuiAmJiDkvKDlhaXkuobpobbpg6joh6rlrprkuYnlhYPntKAgJiYg6aaW5qyh5re75YqgXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodmlzaWJsZSAmJiB0b3BDb250ZW50ICYmICF0b3BDb250ZW50UG9ydGFsVGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC4ke3ByZWZpeH0tZHJvcGRvd25fJHtoYXNofWBcbiAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGVsLm9ubW91c2Vkb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3Bkb3duLmluc2VydEJlZm9yZShlbCwgZHJvcGRvd24uY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdG9wQ29udGVudFBvcnRhbFRhcmdldDogZWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCAwKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUNoYW5nZSA9IChcbiAgICB2YWx1ZTogVHJlZU5vZGVWYWx1ZSxcbiAgICB0aXRsZUxpc3Q6IFJlYWN0LlJlYWN0Tm9kZVtdXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG9uQ2hhbmdlLCB2YWx1ZTogdmFsdWVQcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZSwgdGl0bGVMaXN0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IG9uU2VhcmNoIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICBvblNlYXJjaCh2YWwpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUcmVlTm9kZSA9IChpbnB1dDogc3RyaW5nLCB0cmVlTm9kZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBrZXksIHRpdGxlLCB2YWx1ZSwgZGF0YVRpdGxlIH0gPSB0cmVlTm9kZVxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoZGF0YVRpdGxlIHx8IHRpdGxlKS5pbmNsdWRlcyhpbnB1dClcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSwgbWF4SGVpZ2h0Rml4ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChcbiAgICAgICghbWF4VGFnQ291bnQgfHwgIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8PSBtYXhUYWdDb3VudCkgJiZcbiAgICAgICFtYXhIZWlnaHRGaXhlZFxuICAgICkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWxlY3RBbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZTogdmFsdWVQcm9wLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoaXNBcnJheUluY2x1ZGVzKHZhbHVlIHx8IFtdLCB0aGlzLnRyZWVWYWx1ZUFsbCkpIHtcbiAgICAgIC8qKlxuICAgICAgICog5bey5YWo6YCJXG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKFtdLCBbXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiDmuIXnqbpcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMudHJlZVZhbHVlQWxsIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodGhpcy50cmVlVmFsdWVBbGwsIFtdKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdQbGFjZWhvbGRlciA9IChub2RlczogSVRyZWVOb2RlW10pID0+IHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCB7IG9uQ2hhbmdlLCByZXN1bHRSZW5kZXIsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UmVuZGVyKG5vZGVzKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBub2Rlc1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IChcbiAgICAgIDw+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gNTNweClcIixcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bm9kZXNbMF0/LmxhYmVsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0+XG4gICAgICAgICAg562JIHtsZW5ndGh9IOS4qlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8Lz5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heC1wb3BvdmVyLWl0ZW0td3JhcHBlcmB9PlxuICAgICAgICAgICAge25vZGVzLm1hcCgoeyBrZXksIGRpc2FibGVkLCBsYWJlbCB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4LXBvcG92ZXItaXRlbWB9IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7IWRpc2FibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxzID0gbm9kZXMubWFwKChvKSA9PiBvLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFscy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gbm9kZXMubWFwKChvKSA9PiBvLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzLnNwbGljZShpLCAxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFscywgbGFiZWxzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBwb3B1cENsYXNzTmFtZT17YCR7cHJlZml4fS1tYXhQb3BvdmVyYH1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXhQbGFjZWhvbGRlcmB9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICA+XG4gICAgICAgICAge3BsYWNlaG9sZGVyVGV4dH1cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFtdLCBbXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgY29udmVydENoaWxkcmVuVG9EYXRhID0gKG5vZGVzOiBhbnkpOiBEYXRhTm9kZVtdID0+XG4gICAgdG9BcnJheShub2RlcylcbiAgICAgIC5tYXAoKG5vZGU6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KG5vZGUpIHx8ICFub2RlLnR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBwb3BvdmVyLFxuICAgICAgICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAuLi5yZXN0UHJvcHNcbiAgICAgICAgICB9LFxuICAgICAgICB9ID0gbm9kZSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRcblxuICAgICAgICAvKipcbiAgICAgICAgICog5aaC5p6c5pyJIHBvcG92ZXIg5YiZ5Zyo6L+Z6YeM5YyF6KOF5LiA5LiLIHRpdGxlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBkYXRhVGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHRpdGxlOiBwb3BvdmVyID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXJgfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyLXBsYWNlaG9sZGVyYH0gLz5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgKSxcbiAgICAgICAgICAuLi5yZXN0UHJvcHMsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlsZERhdGEgPSB0aGlzLmNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbilcbiAgICAgICAgaWYgKGNoaWxkRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBkYXRhLmNoaWxkcmVuID0gY2hpbGREYXRhXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGRhdGEpID0+IGRhdGEpXG5cbiAgcHVibGljIGNvbnZlcnRUcmVlRGF0YSA9IChcbiAgICBkYXRhTm9kZVBhcmFtOiBUcmVlRGF0YSxcbiAgICBvcHRpb25zOiB7IHNlbGVjdEFsbD86IGJvb2xlYW4gfSA9IHt9XG4gICk6IFRyZWVEYXRhID0+IHtcbiAgICBpZiAoIWRhdGFOb2RlUGFyYW0pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgY29uc3QgZGF0YU5vZGUgPSBbLi4uZGF0YU5vZGVQYXJhbV1cbiAgICBjb25zdCB7IHZhbHVlOiB2YWx1ZVN0YXRlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaXNBbGxTZWxlY3RlZCA9IGlzQXJyYXlJbmNsdWRlcyh2YWx1ZVN0YXRlIHx8IFtdLCB0aGlzLnRyZWVWYWx1ZUFsbClcbiAgICBjb25zdCBpbmRldGVybWluYXRlID0gIWlzQWxsU2VsZWN0ZWQgJiYgISF2YWx1ZVN0YXRlPy5sZW5ndGhcblxuICAgIGlmIChkYXRhTm9kZVswXT8ua2V5ID09PSBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCkge1xuICAgICAgcmV0dXJuIGRhdGFOb2RlXG4gICAgfVxuXG4gICAgY29uc3QgeyBzZWxlY3RBbGwgfSA9IG9wdGlvbnNcblxuICAgIGNvbnN0IHByb2Nlc3MgPSAobm9kZTogRGF0YU5vZGVbXSkgPT4ge1xuICAgICAgbm9kZS5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGF0YVRpdGxlLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHBvcG92ZXIsXG4gICAgICAgICAgcG9wb3ZlclByb3BzID0ge30sXG4gICAgICAgIH0gPSBvXG4gICAgICAgIGlmIChkYXRhVGl0bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogZGF0YVRpdGxlIOeUqOS6juaciSBwb3BvdmVyIOeahOaDheWGteS4i+eahOaQnOe0olxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgby5kYXRhVGl0bGUgPSB0aXRsZVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG8ua2V5ID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgby52YWx1ZSA9IGtleVxuICAgICAgICB9XG4gICAgICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICAgICAgby50aXRsZSA9IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyYH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8UG9wb3ZlciBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlcmB9IC8+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICBwcm9jZXNzKGNoaWxkcmVuKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb2Nlc3MoZGF0YU5vZGUpXG5cbiAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICBkYXRhTm9kZS51bnNoaWZ0KHtcbiAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGwtaW5uZXJgfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWxlY3RBbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg5YWo6YCJXG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e2luZGV0ZXJtaW5hdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGxgLFxuICAgICAgICBrZXk6IGAke3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGxgLFxuICAgICAgICBjaGVja2FibGU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlQ2hlY2tib3g6IHRydWUsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhTm9kZVxuICB9XG5cbiAgbGlzdGVuSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlIH0sXG4gICAgICBrZXlDb2RlLFxuICAgIH0gPSBlXG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gOCAmJiB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50LCBwbGFjZWhvbGRlciwgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy8g56aB5q2iIHRyZWUtc2VsZWN0IOmUruebmOWbnuWIoOS8muW9seWTjSB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5saXN0ZW5JbnB1dENoYW5nZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsICYmIHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKFxuICAgIF86IElUcmVlU2VsZWN0UHJvcHMsXG4gICAgeyB2YWx1ZTogdmFsdWVQcmV2IH06IElUcmVlU2VsZWN0U3RhdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgeyByZXN1bHRWaXNpYmxlLCBoZWlnaHRGaXhlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaGFzaCwgdmFsdWUsIG1heEhlaWdodEZpeGVkIH0gPSB0aGlzLnN0YXRlXG4gICAgLyoqXG4gICAgICogcmVzdWx0VmlzaWJsZSDkuLogZmFsc2Ug5pe277yMIHNlbGVjdG9yIOmrmOW6puS4jeS8muaUueWPmOOAglxuICAgICAqIOagueaNruaIkeeahOe7j+mqjCBQb3B1cCDop6blj5Hph43mlrDlrprkvY3nmoTml7bmnLrmmK/vvJpcbiAgICAgKiAxLiB3aW5kb3cgcmVzaXplXG4gICAgICogMi4gcmVzaXplIG9ic2VydmVyIOS6hiBzZWxlY3RvclxuICAgICAqIOWboOatpOi/memHjOaJi+WKqOinpuWPkSByZXNpemVcbiAgICAgKi9cbiAgICBpZiAoIXJlc3VsdFZpc2libGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGlmIChoZWlnaHRGaXhlZCAmJiB2YWx1ZVByZXY/Lmxlbmd0aCAhPT0gdmFsdWU/Lmxlbmd0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC4ke3ByZWZpeH0td3JhcHBlcl8ke2hhc2h9IC4ke3ByZWZpeH0tc2VsZWN0aW9uLW92ZXJmbG93YFxuICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGNvbnN0IHN1ZmZpeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC4ke3ByZWZpeH0td3JhcHBlcl8ke2hhc2h9IC4ke3ByZWZpeH0tc2VsZWN0aW9uLW92ZXJmbG93LWl0ZW0tc3VmZml4YFxuICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGNvbnN0IGxhc3QgPSBzdWZmaXguY2hpbGRyZW5bXG4gICAgICAgICAgc3VmZml4LmNoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICAgICAgXSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBpZiAoXG4gICAgICAgICAgbGFzdC5vZmZzZXRMZWZ0ID4gd3JhcHBlci5vZmZzZXRXaWR0aCAtIDMwICYmXG4gICAgICAgICAgIW1heEhlaWdodEZpeGVkICYmXG4gICAgICAgICAgdmFsdWVQcmV2ICYmXG4gICAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgICB2YWx1ZVByZXYubGVuZ3RoIDwgdmFsdWUubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0Rml4ZWQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBsYXN0Lm9mZnNldExlZnQgPCB3cmFwcGVyLm9mZnNldFdpZHRoIC0gMzAgJiZcbiAgICAgICAgICBtYXhIZWlnaHRGaXhlZCAmJlxuICAgICAgICAgIHZhbHVlUHJldiAmJlxuICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgdmFsdWVQcmV2Lmxlbmd0aCA+IHZhbHVlLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1heEhlaWdodEZpeGVkOiBmYWxzZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGhlaWdodEZpeGVkLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByaWdodEljb24sXG4gICAgICByZXN1bHRSZW5kZXIsXG4gICAgICByZXN1bHRWaXNpYmxlLFxuICAgICAgc2VsZWN0QWxsLFxuICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSxcbiAgICAgIHRvcENvbnRlbnQsXG4gICAgICB0cmVlRGF0YSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzOiBhbnkgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwib25DaGFuZ2VcIixcbiAgICAgIFwib25TZWFyY2hcIixcbiAgICAgIFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICBcInZhbHVlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCwgdmFsdWUsIG1heEhlaWdodEZpeGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCB7XG4gICAgICBbYCR7cHJlZml4fV9yZXN1bHRIaWRkZW5gXTogIXJlc3VsdFZpc2libGUsXG4gICAgfSlcblxuICAgIGxldCBjaGVja2JveDogYW55ID0gbXVsdGlwbGVcbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIGNoZWNrYm94ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZVN2Z2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgeD1cIjFcIlxuICAgICAgICAgICAgICB5PVwiNFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgcng9XCIuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1jaGVja2JveC1jaGVja2VkU3ZnYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTS42MTggNS44MjdhLjQ2My40NjMgMCAwIDEtLjAyLS42NzVsLjgwNC0uODA0YS41Mi41MiAwIDAgMSAuNzE2LS4wMUw0Ljc1IDYuNzVsNC45MjItNS42MjVhLjUxMy41MTMgMCAwIDEgLjcwNy0uMDZsLjc0Mi42MmEuNDc4LjQ3OCAwIDAgMSAuMDQ0LjY4N2wtNi4wOCA2Ljc1NmEuNTA2LjUwNiAwIDAgMS0uNzAzLjA0NUwuNjE4IDUuODI3elwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJlc3RQcm9wcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsIHx8IG1heEhlaWdodEZpeGVkKSB7XG4gICAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0TWF4VGFnQ291bnQoKVxuICAgICAgaWYgKGNvdW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IGNvdW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gMFxuICAgIH1cblxuICAgIGNvbnN0IHRyZWVEYXRhRmluYWwgPVxuICAgICAgdGhpcy5jb252ZXJ0VHJlZURhdGEodHJlZURhdGEsIHsgc2VsZWN0QWxsIH0pIHx8XG4gICAgICB0aGlzLmNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbilcblxuICAgIHRoaXMudHJlZURhdGEgPSB0cmVlRGF0YUZpbmFsXG4gICAgdGhpcy50cmVlVmFsdWVBbGwgPSB0cmVlRGF0YUZpbmFsXG4gICAgICAubWFwKCh7IHZhbHVlOiB2YWwsIGRpc2FibGVkLCBkaXNhYmxlQ2hlY2tib3gsIGNoZWNrYWJsZSB9KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWwgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICFkaXNhYmxlQ2hlY2tib3ggJiZcbiAgICAgICAgICBjaGVja2FibGUgIT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuXG4gICAgLy8g5piv5ZCm5piv5aSa5bGC57qnXG4gICAgY29uc3QgbXVsdGlMZXZlbCA9IHRyZWVEYXRhRmluYWwuc29tZSgobykgPT4gby5jaGlsZHJlbj8ubGVuZ3RoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBgJHtwcmVmaXh9LXdyYXBwZXIgJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofWAsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS13cmFwcGVyLW1heFRhZ2BdOiB0aGlzLmdldE1heFRhZ0NvdW50KCkgIT09IG51bGwsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1maXhlZGBdOiBoZWlnaHRGaXhlZCxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS13cmFwcGVyLXJlc3VsdFJlbmRlcmBdOiAhIXJlc3VsdFJlbmRlcixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlV3JhcHBlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dG9wQ29udGVudCAmJiB0b3BDb250ZW50UG9ydGFsVGFyZ2V0ICYmIChcbiAgICAgICAgICAgICAgPFBvcnRhbCByZWY9e3RoaXMuc2F2ZVBvcnRhbH0gY29udGFpbmVyPXt0b3BDb250ZW50UG9ydGFsVGFyZ2V0fT5cbiAgICAgICAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFJjVHJlZVNlbGVjdFxuICAgICAgICAgICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT17XG4gICAgICAgICAgICAgICAgcmVzdWx0VmlzaWJsZSA/IGF1dG9DbGVhclNlYXJjaFZhbHVlIDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWRyb3Bkb3duXyR7aGFzaH1gLCB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tbXVsdGlwbGVgXTogbXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tc2luZ2xlYF06ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1hbGxgXTogc2VsZWN0QWxsLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLXNpbmdsZS1sZXZlbGBdOiAhbXVsdGlMZXZlbCxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGRyb3Bkb3duUG9wdXBBbGlnbj17XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50ICYmIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpbHRlclRyZWVOb2RlPXt0aGlzLmZpbHRlclRyZWVOb2RlfVxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICAgICAgICBpbnB1dEljb249ezxJY29uIGljb249XCJ0cmlhbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyPXt0aGlzLmdldE1heFRhZ1BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiZmlsZS1vdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS02MDApXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICDml6DljLnphY3poblcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeH1cbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWxlY3R9XG4gICAgICAgICAgICAgIHJlbW92ZUljb249ezxJY29uIGljb249XCJjYW5jZWxcIiBpbnRlcmFjdGl2ZSBzaXplPXsxNn0gLz59XG4gICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3k9e1xuICAgICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3kgJiYgc3RyYXRlZ2llc1tzaG93Q2hlY2tlZFN0cmF0ZWd5XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3dTZWFyY2g9e211bHRpcGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hlckljb249e3RoaXMucmVuZGVyU3dpdGNoZXJJY29ufVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgICAgdHJlZUNoZWNrYWJsZT17Y2hlY2tib3h9XG4gICAgICAgICAgICAgIHRyZWVOb2RlRmlsdGVyUHJvcD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICBsaXN0SGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgIHRyZWVEYXRhPXt0cmVlRGF0YUZpbmFsfVxuICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17KHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiAyMDIxMDMyMyB2aXNpYmxlIGZhbHNlIOaXtui+k+WFpeahhuS8muiiq+aDheWGte+8jOS9huayoeacieiwg+eUqCBvblNlYXJjaFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2goXCJcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgICAgaWYgKG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ISFyaWdodEljb24gJiYgbXVsdGlwbGUgJiYgKFxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXtyaWdodEljb259IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVTZWxlY3RcbiJdfQ==