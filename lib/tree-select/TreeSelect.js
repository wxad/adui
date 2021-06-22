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
          heightFixed = _this$props5.heightFixed,
          placeholder = _this$props5.placeholder;
      var _this$state3 = _this.state,
          hash = _this$state3.hash,
          value = _this$state3.value,
          maxHeightFixed = _this$state3.maxHeightFixed;

      if (!resultVisible) {
        setTimeout(function () {
          window.dispatchEvent(new Event("resize"));

          var input = _this.wrapper.querySelector("input");

          if (input) {
            input.placeholder = placeholder;
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImlzQXJyYXlJbmNsdWRlcyIsImExIiwiYTIiLCJldmVyeSIsIm8iLCJpbmNsdWRlcyIsIlRyZWVTZWxlY3QiLCJwcm9wcyIsInNlbGVjdCIsInBvcnRhbCIsIndyYXBwZXIiLCJ0cmVlRGF0YSIsInRyZWVWYWx1ZUFsbCIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInN0YXRlIiwic2F2ZVNlbGVjdCIsIm5vZGUiLCJzYXZlUG9ydGFsIiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJzZXRUaW1lb3V0IiwiZm9yY2VVcGRhdGUiLCJ0b3BDb250ZW50IiwiaGFzaCIsInRvcENvbnRlbnRQb3J0YWxUYXJnZXQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsIiwiY3JlYXRlRWxlbWVudCIsIm9ubW91c2Vkb3duIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGl0bGVMaXN0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsImhhbmRsZVNlYXJjaCIsInZhbCIsIm9uU2VhcmNoIiwiZmlsdGVyVHJlZU5vZGUiLCJpbnB1dCIsInRyZWVOb2RlIiwia2V5IiwidGl0bGUiLCJkYXRhVGl0bGUiLCJTdHJpbmciLCJnZXRNYXhUYWdDb3VudCIsIm1heFRhZ0NvdW50IiwibWF4SGVpZ2h0Rml4ZWQiLCJsZW5ndGgiLCJoYW5kbGVTZWxlY3RBbGwiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsIm5vZGVzIiwicmVzdWx0UmVuZGVyIiwicGxhY2Vob2xkZXJUZXh0IiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImxhYmVsIiwibWFwIiwiaSIsInZhbHMiLCJzcGxpY2UiLCJsYWJlbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEiLCJSZWFjdCIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsInBvcG92ZXIiLCJwb3BvdmVyUHJvcHMiLCJyZXN0UHJvcHMiLCJkYXRhIiwiY2hpbGREYXRhIiwiZmlsdGVyIiwiY29udmVydFRyZWVEYXRhIiwiZGF0YU5vZGVQYXJhbSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJkYXRhTm9kZSIsInZhbHVlU3RhdGUiLCJpc0FsbFNlbGVjdGVkIiwiaW5kZXRlcm1pbmF0ZSIsInNlbGVjdEFsbCIsInByb2Nlc3MiLCJmb3JFYWNoIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImNoZWNrYWJsZSIsImRpc2FibGVDaGVja2JveCIsImxpc3RlbklucHV0Q2hhbmdlIiwidGFyZ2V0Iiwia2V5Q29kZSIsImNvbXBvbmVudERpZE1vdW50IiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2YWx1ZVByZXYiLCJoZWlnaHRGaXhlZCIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1ZmZpeCIsImxhc3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJlcnJvciIsImRlZmF1bHRWYWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtdWx0aXBsZSIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwicGxhY2VtZW50IiwicmlnaHRJY29uIiwic2hvd0NoZWNrZWRTdHJhdGVneSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJ0cmVlRGF0YUZpbmFsIiwiQm9vbGVhbiIsIm11bHRpTGV2ZWwiLCJzb21lIiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwiYWxpZ25FZGdlIiwibWFyZ2luUmlnaHQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJUcmVlTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsa0JBQWY7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQixjQUFZQyxzQkFESztBQUVqQixnQkFBY0Msd0JBRkc7QUFHakIsaUJBQWVDO0FBSEUsQ0FBbkI7O0FBU0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUN0QkMsRUFEc0IsRUFFdEJDLEVBRnNCLEVBR1Y7QUFDWixNQUFJLENBQUNELEVBQUQsSUFBTyxDQUFDQyxFQUFaLEVBQWdCO0FBQ2QsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsRUFBRSxDQUFDQyxLQUFILENBQVMsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9ILEVBQUUsQ0FBQ0ksUUFBSCxDQUFZRCxDQUFaLENBQVA7QUFBQSxH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U0FwQm1DO0FBcUI3Q2xELEVBQUFBLEtBQUssRUFBRTtBQXJCc0MsQzs7QUE1RzNDdEMsVSxDQW9JVXlKLHdCLEdBQTJCLGlCQUFpQztBQUFBLE1BQTlCbkgsS0FBOEIsU0FBOUJBLEtBQThCOztBQUN4RSxNQUFJQSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixXQUFPO0FBQ0xBLE1BQUFBLEtBQUssRUFBTEE7QUFESyxLQUFQO0FBR0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQzs7QUEzSUd0QyxVLENBNklVMEosUSxHQUE0QkEsc0I7ZUFxcEI3QjFKLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmNUcmVlU2VsZWN0LCB7XG4gIFNIT1dfQUxMLFxuICBTSE9XX1BBUkVOVCxcbiAgU0hPV19DSElMRCxcbiAgVHJlZU5vZGUsXG59IGZyb20gXCJyYy10cmVlLXNlbGVjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9saWIvQ2hpbGRyZW4vdG9BcnJheVwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94XCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9wb3J0YWxcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL3NwaW5uZXJcIlxuaW1wb3J0IGdldFBsYWNlbWVudHMgZnJvbSBcIi4uL3Rvb2x0aXAvcGxhY2VtZW50c1wiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10cmVlLXNlbGVjdFwiXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3Qgc3RyYXRlZ2llcyA9IHtcbiAgXCJzaG93LWFsbFwiOiBTSE9XX0FMTCxcbiAgXCJzaG93LWNoaWxkXCI6IFNIT1dfQ0hJTEQsXG4gIFwic2hvdy1wYXJlbnRcIjogU0hPV19QQVJFTlQsXG59XG5cbi8qKlxuICogYTEg5piv5ZCm5YyF5ZCrIGEyXG4gKi9cbmNvbnN0IGlzQXJyYXlJbmNsdWRlcyA9IChcbiAgYTE6IFJlYWN0LlJlYWN0VGV4dFtdLFxuICBhMjogUmVhY3QuUmVhY3RUZXh0W11cbik6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWExIHx8ICFhMikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGEyLmV2ZXJ5KChvKSA9PiBhMS5pbmNsdWRlcyhvKSlcbn1cblxuZXhwb3J0IHR5cGUgVHJlZU5vZGVWYWx1ZSA9IHN0cmluZ1tdIHwgbnVtYmVyW10gfCBudWxsXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlIHtcbiAgdmFsdWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIGtleTogc3RyaW5nXG4gIGRpc2FibGVkOiBib29sZWFuXG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFOb2RlIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIHZhbHVlPzogUmVhY3QuUmVhY3RUZXh0XG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG4gIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlXG4gIGtleT86IFJlYWN0LlJlYWN0VGV4dFxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICBjaGVja2FibGU/OiBib29sZWFuXG4gIHBvcG92ZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICBjaGlsZHJlbj86IERhdGFOb2RlW11cbn1cblxuZXhwb3J0IHR5cGUgVHJlZURhdGEgPSBEYXRhTm9kZVtdIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGRlZmF1bHRWYWx1ZT86IFRyZWVOb2RlVmFsdWVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICBoZWlnaHRGaXhlZD86IGJvb2xlYW5cbiAgbWF4VGFnQ291bnQ/OiBudWxsIHwgbnVtYmVyXG4gIG11bHRpcGxlPzogYm9vbGVhblxuICBvbkNoYW5nZT86ICh2YWx1ZTogVHJlZU5vZGVWYWx1ZSwgdGl0bGVMaXN0OiBSZWFjdC5SZWFjdE5vZGVbXSkgPT4gdm9pZFxuICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIG9uU2VhcmNoPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIHJlc3VsdFJlbmRlcj86IG51bGwgfCAoKHZhbHVlczogSVRyZWVOb2RlW10pID0+IEpTWC5FbGVtZW50KVxuICByZXN1bHRWaXNpYmxlPzogYm9vbGVhblxuICBzZWxlY3RBbGw/OiBib29sZWFuXG4gIHNob3dDaGVja2VkU3RyYXRlZ3k/OiBcInNob3ctYWxsXCIgfCBcInNob3ctY2hpbGRcIiB8IFwic2hvdy1wYXJlbnRcIlxuICB0b3BDb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIHRyZWVEYXRhPzogVHJlZURhdGFcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RTdGF0ZSB7XG4gIGhhc2g6IHN0cmluZ1xuICB0b3BDb250ZW50UG9ydGFsVGFyZ2V0PzogSFRNTERpdkVsZW1lbnRcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG4gIG1heEhlaWdodEZpeGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGVcbiAga2V5Pzogc3RyaW5nXG4gIGV2ZW50S2V5Pzogc3RyaW5nXG4gIGlzTGVhZj86IGJvb2xlYW5cbiAgY2hlY2tlZD86IGJvb2xlYW5cbiAgZXhwYW5kZWQ/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIHNlbGVjdGVkPzogYm9vbGVhblxuICBzZWxlY3RhYmxlPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOagkeW9oumAieaLqVxuICovXG5jbGFzcyBUcmVlU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUcmVlU2VsZWN0UHJvcHMsIElUcmVlU2VsZWN0U3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog5YC86KKr6YCJ5oup5ZCO77yM5piv5ZCm6ZyA6KaB5riF56m65pCc57Si5qGGXG4gICAgICovXG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQjVxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDpu5jorqTpgInkuK3nmoQga2V5XG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbnpoHnlKhcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICAgKi9cbiAgICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6auY5bqm5piv5ZCm5Zu65a6a5LiA6KGM77yMVHJlZVNlbGVjdCDlsIbmoLnmja7lhoXlrrnljLrln5/lrr3luqboh6rliqjlsIbnu5PmnpzmlLbotbfvvIzlvIDlkK/ov5nkuKogUHJvcCDlkI4gVHJlZVNlbGVjdCDkvJrlv73nlaUgbWF4VGFnQ291bnQgUHJvcFxuICAgICAqL1xuICAgIGhlaWdodEZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmnIDlpJrmmL7npLrlpJrlsJHkuKogdGFn77yM5aaC5p6c6LaF6L+H5LqG5YiZ5Lul5pS26LW355qE5b2i5byP5Ye6546wXG4gICAgICovXG4gICAgbWF4VGFnQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5aSa6YCJ5qih5byPXG4gICAgICovXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWAvOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5LiL5ouJIHZpc2libGUg5Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiBib29sZWFuXG4gICAgICovXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOaQnOe0ouaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5by55Ye65L2N572uXG4gICAgICovXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJ0b3BcIixcbiAgICAgIFwibGVmdFwiLFxuICAgICAgXCJyaWdodFwiLFxuICAgICAgXCJib3R0b21cIixcbiAgICAgIFwidG9wTGVmdFwiLFxuICAgICAgXCJ0b3BSaWdodFwiLFxuICAgICAgXCJib3R0b21MZWZ0XCIsXG4gICAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgICBcImxlZnRUb3BcIixcbiAgICAgIFwibGVmdEJvdHRvbVwiLFxuICAgICAgXCJyaWdodFRvcFwiLFxuICAgICAgXCJyaWdodEJvdHRvbVwiLFxuICAgIF0pLFxuICAgIC8qKlxuICAgICAqIOiuvue9rui+k+WFpeahhueahOm7mOiupOWGheWuuVxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruiHquWumuS5ieeahOe7k+aenOa4suafk1xuICAgICAqL1xuICAgIHJlc3VsdFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6L6T5YWl5qGG5YaF55qE5qCH562+5piv5ZCm5pi+56S677yM5q2kIFByb3Ag55So5LqO5oOz6KaB5bCG57uT5p6c5Yy65bGV56S65Zyo5Yir55qE5Zyw5pa555qE6ZyA5rGCXG4gICAgICovXG4gICAgcmVzdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6a5Yi25qCR5b2i6YCJ5oup5Zmo55qEaWNvblxuICAgICAqL1xuICAgIHJpZ2h0SWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/lhajpgInlip/og71cbiAgICAgKi9cbiAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWumuS5iemAieS4remhueWbnuWhq+eahOaWueW8j++8mlxuICAgICAqIDEuIHNob3ctYWxs77ya5pi+56S65YyF5ous54i26IqC54K555qE5omA5pyJ6YCJ5Lit6IqC54K577ybXG4gICAgICogMi4gc2hvdy1wYXJlbnTvvJrlj6rmmL7npLrniLboioLngrnvvJtcbiAgICAgKiAzLiBzaG93LWNoaWxk77ya5Y+q5pi+56S65a2Q6IqC54K544CC6buY6K6k5YC877yac2hvdy1wYXJlbnRcbiAgICAgKi9cbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJzaG93LWFsbFwiLFxuICAgICAgXCJzaG93LXBhcmVudFwiLFxuICAgICAgXCJzaG93LWNoaWxkXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog5LiL5ouJ5qGG6aG26YOo5pi+56S655qE6Ieq5a6a5LmJ5YWD57SgXG4gICAgICovXG4gICAgdG9wQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogdHJlZU5vZGVzIOaVsOaNru+8jOagvOW8j+WPgueFpyBpbnRlcmZhY2UgRGF0YU5vZGVcbiAgICAgKi9cbiAgICB0cmVlRGF0YTogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8mumAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRyZWVTZWxlY3RQcm9wcyA9IHtcbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgICBoZWlnaHRGaXhlZDogZmFsc2UsXG4gICAgbWF4VGFnQ291bnQ6IG51bGwsXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgb25TZWFyY2g6IG5vb3AsXG4gICAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgICByZXN1bHRSZW5kZXI6IG51bGwsXG4gICAgcmVzdWx0VmlzaWJsZTogdHJ1ZSxcbiAgICByaWdodEljb246IFwibWVudVwiLFxuICAgIHNlbGVjdEFsbDogZmFsc2UsXG4gICAgc2hvd0NoZWNrZWRTdHJhdGVneTogXCJzaG93LXBhcmVudFwiLFxuICAgIHRvcENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgICB0cmVlRGF0YTogdW5kZWZpbmVkLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoeyB2YWx1ZSB9OiBJVHJlZVNlbGVjdFByb3BzKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgVHJlZU5vZGU6IHR5cGVvZiBUcmVlTm9kZSA9IFRyZWVOb2RlXG5cbiAgcHVibGljIHNlbGVjdDogdHlwZW9mIFJjVHJlZVNlbGVjdFxuXG4gIHB1YmxpYyBwb3J0YWw6IFJlYWN0LlJlYWN0Tm9kZVxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyB0cmVlRGF0YTogRGF0YU5vZGVbXVxuXG4gIHB1YmxpYyB0cmVlVmFsdWVBbGw6IGFueVtdXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElUcmVlU2VsZWN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IHZhbHVlLCBkZWZhdWx0VmFsdWUgfSA9IHByb3BzXG4gICAgY29uc3QgdmFsdWVTdGF0ZSA9IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWVcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNoOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMywgOCksXG4gICAgICB2YWx1ZTogdmFsdWVTdGF0ZSxcbiAgICAgIG1heEhlaWdodEZpeGVkOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKFxuICAgIG5leHRQcm9wczogSVRyZWVTZWxlY3RQcm9wcyxcbiAgICBuZXh0U3RhdGU6IElUcmVlU2VsZWN0U3RhdGVcbiAgKSA9PlxuICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcblxuICBwdWJsaWMgc2F2ZVNlbGVjdCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnNlbGVjdCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlUG9ydGFsID0gKG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIHRoaXMucG9ydGFsID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVXcmFwcGVyID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy53cmFwcGVyID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHJlbmRlclN3aXRjaGVySWNvbiA9ICh7IGlzTGVhZiwgbG9hZGluZyB9OiBJVHJlZU5vZGVQcm9wcykgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgc2l6ZT1cIm1pbmlcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1zd2l0Y2hlci1pY29uYH0gLz5cbiAgICB9XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uIGljb249XCJ0cmlhbmdsZS1yaWdodFwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLXN3aXRjaGVyLWljb25gfSAvPlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRvcENvbnRlbnQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgeyBoYXNoLCB0b3BDb250ZW50UG9ydGFsVGFyZ2V0IH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkuIvmi4nmoYbmmL7npLogJiYg5Lyg5YWl5LqG6aG26YOo6Ieq5a6a5LmJ5YWD57SgICYmIOmmluasoea3u+WKoFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHZpc2libGUgJiYgdG9wQ29udGVudCAmJiAhdG9wQ29udGVudFBvcnRhbFRhcmdldCkge1xuICAgICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuJHtwcmVmaXh9LWRyb3Bkb3duXyR7aGFzaH1gXG4gICAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBlbC5vbm1vdXNlZG93biA9IChlKSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wZG93bi5pbnNlcnRCZWZvcmUoZWwsIGRyb3Bkb3duLmNoaWxkcmVuWzBdKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQ6IGVsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSwgMClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDaGFuZ2UgPSAoXG4gICAgdmFsdWU6IFRyZWVOb2RlVmFsdWUsXG4gICAgdGl0bGVMaXN0OiBSZWFjdC5SZWFjdE5vZGVbXVxuICApID0+IHtcbiAgICBjb25zdCB7IGRpc2FibGVkLCBvbkNoYW5nZSwgdmFsdWU6IHZhbHVlUHJvcCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsdWUsIHRpdGxlTGlzdClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VhcmNoID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBvblNlYXJjaCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvblNlYXJjaCkge1xuICAgICAgb25TZWFyY2godmFsKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgfSwgMClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyVHJlZU5vZGUgPSAoaW5wdXQ6IHN0cmluZywgdHJlZU5vZGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsga2V5LCB0aXRsZSwgdmFsdWUsIGRhdGFUaXRsZSB9ID0gdHJlZU5vZGVcbiAgICBpZiAoIWtleSB8fCAhdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKGRhdGFUaXRsZSB8fCB0aXRsZSkuaW5jbHVkZXMoaW5wdXQpXG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUsIG1heEhlaWdodEZpeGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoXG4gICAgICAoIW1heFRhZ0NvdW50IHx8ICF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPD0gbWF4VGFnQ291bnQpICYmXG4gICAgICAhbWF4SGVpZ2h0Rml4ZWRcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VsZWN0QWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWU6IHZhbHVlUHJvcCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGlzQXJyYXlJbmNsdWRlcyh2YWx1ZSB8fCBbXSwgdGhpcy50cmVlVmFsdWVBbGwpKSB7XG4gICAgICAvKipcbiAgICAgICAqIOW3suWFqOmAiVxuICAgICAgICovXG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICog5riF56m6XG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnRyZWVWYWx1ZUFsbCB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHRoaXMudHJlZVZhbHVlQWxsLCBbXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnUGxhY2Vob2xkZXIgPSAobm9kZXM6IElUcmVlTm9kZVtdKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcmVzdWx0UmVuZGVyLCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlc3VsdFJlbmRlcihub2RlcylcbiAgICB9XG5cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gbm9kZXNcbiAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSAoXG4gICAgICA8PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDUzcHgpXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25vZGVzWzBdPy5sYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIOetiSB7bGVuZ3RofSDkuKpcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXgtcG9wb3Zlci1pdGVtLXdyYXBwZXJgfT5cbiAgICAgICAgICAgIHtub2Rlcy5tYXAoKHsga2V5LCBkaXNhYmxlZCwgbGFiZWwgfSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heC1wb3BvdmVyLWl0ZW1gfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFscyA9IG5vZGVzLm1hcCgobykgPT4gby52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWxzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IG5vZGVzLm1hcCgobykgPT4gby5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscy5zcGxpY2UoaSwgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHMsIGxhYmVscylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBDbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4UG9wb3ZlcmB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4UGxhY2Vob2xkZXJgfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwbGFjZWhvbGRlclRleHR9XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGNvbnZlcnRDaGlsZHJlblRvRGF0YSA9IChub2RlczogYW55KTogRGF0YU5vZGVbXSA9PlxuICAgIHRvQXJyYXkobm9kZXMpXG4gICAgICAubWFwKChub2RlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChub2RlKSB8fCAhbm9kZS50eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgcG9wb3ZlcixcbiAgICAgICAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgLi4ucmVzdFByb3BzXG4gICAgICAgICAgfSxcbiAgICAgICAgfSA9IG5vZGUgYXMgUmVhY3QuUmVhY3RFbGVtZW50XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWmguaenOaciSBwb3BvdmVyIOWImeWcqOi/memHjOWMheijheS4gOS4iyB0aXRsZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgZGF0YVRpdGxlOiB0aXRsZSxcbiAgICAgICAgICB0aXRsZTogcG9wb3ZlciA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyYH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8UG9wb3ZlciBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlcmB9IC8+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICksXG4gICAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hpbGREYXRhID0gdGhpcy5jb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pXG4gICAgICAgIGlmIChjaGlsZERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkRGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkYXRhKSA9PiBkYXRhKVxuXG4gIHB1YmxpYyBjb252ZXJ0VHJlZURhdGEgPSAoXG4gICAgZGF0YU5vZGVQYXJhbTogVHJlZURhdGEsXG4gICAgb3B0aW9uczogeyBzZWxlY3RBbGw/OiBib29sZWFuIH0gPSB7fVxuICApOiBUcmVlRGF0YSA9PiB7XG4gICAgaWYgKCFkYXRhTm9kZVBhcmFtKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIGNvbnN0IGRhdGFOb2RlID0gWy4uLmRhdGFOb2RlUGFyYW1dXG4gICAgY29uc3QgeyB2YWx1ZTogdmFsdWVTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWQgPSBpc0FycmF5SW5jbHVkZXModmFsdWVTdGF0ZSB8fCBbXSwgdGhpcy50cmVlVmFsdWVBbGwpXG4gICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9ICFpc0FsbFNlbGVjdGVkICYmICEhdmFsdWVTdGF0ZT8ubGVuZ3RoXG5cbiAgICBpZiAoZGF0YU5vZGVbMF0/LmtleSA9PT0gYCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbGApIHtcbiAgICAgIHJldHVybiBkYXRhTm9kZVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2VsZWN0QWxsIH0gPSBvcHRpb25zXG5cbiAgICBjb25zdCBwcm9jZXNzID0gKG5vZGU6IERhdGFOb2RlW10pID0+IHtcbiAgICAgIG5vZGUuZm9yRWFjaCgobykgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRhdGFUaXRsZSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBwb3BvdmVyLFxuICAgICAgICAgIHBvcG92ZXJQcm9wcyA9IHt9LFxuICAgICAgICB9ID0gb1xuICAgICAgICBpZiAoZGF0YVRpdGxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGFUaXRsZSDnlKjkuo7mnIkgcG9wb3ZlciDnmoTmg4XlhrXkuIvnmoTmkJzntKJcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIG8uZGF0YVRpdGxlID0gdGl0bGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvLmtleSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG8udmFsdWUgPSBrZXlcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9wb3Zlcikge1xuICAgICAgICAgIG8udGl0bGUgPSAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlcmB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPFBvcG92ZXIgcG9wdXA9e3BvcG92ZXJ9IHBsYWNlbWVudD1cInJpZ2h0XCIgey4uLnBvcG92ZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJgfSAvPlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgcHJvY2VzcyhjaGlsZHJlbilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm9jZXNzKGRhdGFOb2RlKVxuXG4gICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgZGF0YU5vZGUudW5zaGlmdCh7XG4gICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsLWlubmVyYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWFqOmAiVxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICBjaGVja2VkPXtpc0FsbFNlbGVjdGVkfVxuICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXtpbmRldGVybWluYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCxcbiAgICAgICAga2V5OiBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCxcbiAgICAgICAgY2hlY2thYmxlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZUNoZWNrYm94OiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YU5vZGVcbiAgfVxuXG4gIGxpc3RlbklucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZSB9LFxuICAgICAga2V5Q29kZSxcbiAgICB9ID0gZVxuXG4gICAgaWYgKGtleUNvZGUgPT09IDggJiYgdmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCwgcGxhY2Vob2xkZXIsIHJlc3VsdFZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIC8vIOemgeatoiB0cmVlLXNlbGVjdCDplK7nm5jlm57liKDkvJrlvbHlk40gdmFsdWVcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubGlzdGVuSW5wdXRDaGFuZ2UsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIGlmICghcmVzdWx0VmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9IChcbiAgICBfOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIHsgdmFsdWU6IHZhbHVlUHJldiB9OiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0VmlzaWJsZSwgaGVpZ2h0Rml4ZWQsIHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBoYXNoLCB2YWx1ZSwgbWF4SGVpZ2h0Rml4ZWQgfSA9IHRoaXMuc3RhdGVcbiAgICAvKipcbiAgICAgKiByZXN1bHRWaXNpYmxlIOS4uiBmYWxzZSDml7bvvIwgc2VsZWN0b3Ig6auY5bqm5LiN5Lya5pS55Y+Y44CCXG4gICAgICog5qC55o2u5oiR55qE57uP6aqMIFBvcHVwIOinpuWPkemHjeaWsOWumuS9jeeahOaXtuacuuaYr++8mlxuICAgICAqIDEuIHdpbmRvdyByZXNpemVcbiAgICAgKiAyLiByZXNpemUgb2JzZXJ2ZXIg5LqGIHNlbGVjdG9yXG4gICAgICog5Zug5q2k6L+Z6YeM5omL5Yqo6Kem5Y+RIHJlc2l6ZVxuICAgICAqL1xuICAgIGlmICghcmVzdWx0VmlzaWJsZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInJlc2l6ZVwiKSlcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0Rml4ZWQgJiYgdmFsdWVQcmV2Py5sZW5ndGggIT09IHZhbHVlPy5sZW5ndGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofSAuJHtwcmVmaXh9LXNlbGVjdGlvbi1vdmVyZmxvd2BcbiAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBjb25zdCBzdWZmaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofSAuJHtwcmVmaXh9LXNlbGVjdGlvbi1vdmVyZmxvdy1pdGVtLXN1ZmZpeGBcbiAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBjb25zdCBsYXN0ID0gc3VmZml4LmNoaWxkcmVuW1xuICAgICAgICAgIHN1ZmZpeC5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgIF0gYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxhc3Qub2Zmc2V0TGVmdCA+IHdyYXBwZXIub2Zmc2V0V2lkdGggLSAzMCAmJlxuICAgICAgICAgICFtYXhIZWlnaHRGaXhlZCAmJlxuICAgICAgICAgIHZhbHVlUHJldiAmJlxuICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgdmFsdWVQcmV2Lmxlbmd0aCA8IHZhbHVlLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1heEhlaWdodEZpeGVkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgbGFzdC5vZmZzZXRMZWZ0IDwgd3JhcHBlci5vZmZzZXRXaWR0aCAtIDMwICYmXG4gICAgICAgICAgbWF4SGVpZ2h0Rml4ZWQgJiZcbiAgICAgICAgICB2YWx1ZVByZXYgJiZcbiAgICAgICAgICB2YWx1ZSAmJlxuICAgICAgICAgIHZhbHVlUHJldi5sZW5ndGggPiB2YWx1ZS5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtYXhIZWlnaHRGaXhlZDogZmFsc2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBoZWlnaHRGaXhlZCxcbiAgICAgIG1heFRhZ0NvdW50LFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmlnaHRJY29uLFxuICAgICAgcmVzdWx0UmVuZGVyLFxuICAgICAgcmVzdWx0VmlzaWJsZSxcbiAgICAgIHNlbGVjdEFsbCxcbiAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3ksXG4gICAgICB0b3BDb250ZW50LFxuICAgICAgdHJlZURhdGEsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlc3RQcm9wczogYW55ID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcIm9uQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VhcmNoXCIsXG4gICAgICBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGhhc2gsIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQsIHZhbHVlLCBtYXhIZWlnaHRGaXhlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwge1xuICAgICAgW2Ake3ByZWZpeH1fcmVzdWx0SGlkZGVuYF06ICFyZXN1bHRWaXNpYmxlLFxuICAgIH0pXG5cbiAgICBsZXQgY2hlY2tib3g6IGFueSA9IG11bHRpcGxlXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBjaGVja2JveCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVTdmdgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIHg9XCIxXCJcbiAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtY2hlY2tib3gtY2hlY2tlZFN2Z2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXN0UHJvcHMudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCB8fCBtYXhIZWlnaHRGaXhlZCkge1xuICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldE1heFRhZ0NvdW50KClcbiAgICAgIGlmIChjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSBjb3VudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IDBcbiAgICB9XG5cbiAgICBjb25zdCB0cmVlRGF0YUZpbmFsID1cbiAgICAgIHRoaXMuY29udmVydFRyZWVEYXRhKHRyZWVEYXRhLCB7IHNlbGVjdEFsbCB9KSB8fFxuICAgICAgdGhpcy5jb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pXG5cbiAgICB0aGlzLnRyZWVEYXRhID0gdHJlZURhdGFGaW5hbFxuICAgIHRoaXMudHJlZVZhbHVlQWxsID0gdHJlZURhdGFGaW5hbFxuICAgICAgLm1hcCgoeyB2YWx1ZTogdmFsLCBkaXNhYmxlZCwgZGlzYWJsZUNoZWNrYm94LCBjaGVja2FibGUgfSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAhZGlzYWJsZUNoZWNrYm94ICYmXG4gICAgICAgICAgY2hlY2thYmxlICE9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcblxuICAgIC8vIOaYr+WQpuaYr+WkmuWxgue6p1xuICAgIGNvbnN0IG11bHRpTGV2ZWwgPSB0cmVlRGF0YUZpbmFsLnNvbWUoKG8pID0+IG8uY2hpbGRyZW4/Lmxlbmd0aClcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgYCR7cHJlZml4fS13cmFwcGVyICR7cHJlZml4fS13cmFwcGVyXyR7aGFzaH1gLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1tYXhUYWdgXTogdGhpcy5nZXRNYXhUYWdDb3VudCgpICE9PSBudWxsLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXdyYXBwZXItZml4ZWRgXTogaGVpZ2h0Rml4ZWQsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1yZXN1bHRSZW5kZXJgXTogISFyZXN1bHRSZW5kZXIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVdyYXBwZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RvcENvbnRlbnQgJiYgdG9wQ29udGVudFBvcnRhbFRhcmdldCAmJiAoXG4gICAgICAgICAgICAgIDxQb3J0YWwgcmVmPXt0aGlzLnNhdmVQb3J0YWx9IGNvbnRhaW5lcj17dG9wQ29udGVudFBvcnRhbFRhcmdldH0+XG4gICAgICAgICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxSY1RyZWVTZWxlY3RcbiAgICAgICAgICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU9e1xuICAgICAgICAgICAgICAgIHJlc3VsdFZpc2libGUgPyBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YCwge1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLW11bHRpcGxlYF06IG11bHRpcGxlLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLXNpbmdsZWBdOiAhbXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tYWxsYF06IHNlbGVjdEFsbCxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1zaW5nbGUtbGV2ZWxgXTogIW11bHRpTGV2ZWwsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBkcm9wZG93blBvcHVwQWxpZ249e1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudCAmJiBnZXRQbGFjZW1lbnRzKHsgYWxpZ25FZGdlOiB0cnVlIH0pW3BsYWNlbWVudF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmaWx0ZXJUcmVlTm9kZT17dGhpcy5maWx0ZXJUcmVlTm9kZX1cbiAgICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgICAgICAgaW5wdXRJY29uPXs8SWNvbiBpY29uPVwidHJpYW5nbGUtZG93blwiIC8+fVxuICAgICAgICAgICAgICBtYXhUYWdQbGFjZWhvbGRlcj17dGhpcy5nZXRNYXhUYWdQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImZpbGUtb3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLXRyYW5zcGFyZW50LWdyYXktNjAwKVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjRweFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAg5peg5Yy56YWN6aG5XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXh9XG4gICAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlU2VsZWN0fVxuICAgICAgICAgICAgICByZW1vdmVJY29uPXs8SWNvbiBpY29uPVwiY2FuY2VsXCIgaW50ZXJhY3RpdmUgc2l6ZT17MTZ9IC8+fVxuICAgICAgICAgICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5PXtcbiAgICAgICAgICAgICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5ICYmIHN0cmF0ZWdpZXNbc2hvd0NoZWNrZWRTdHJhdGVneV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzaG93U2VhcmNoPXttdWx0aXBsZX1cbiAgICAgICAgICAgICAgc3dpdGNoZXJJY29uPXt0aGlzLnJlbmRlclN3aXRjaGVySWNvbn1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJzbGlkZS11cFwiXG4gICAgICAgICAgICAgIHRyZWVDaGVja2FibGU9e2NoZWNrYm94fVxuICAgICAgICAgICAgICB0cmVlTm9kZUZpbHRlclByb3A9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGxpc3RJdGVtSGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgbGlzdEhlaWdodD17MjgwfVxuICAgICAgICAgICAgICB0cmVlRGF0YT17dHJlZURhdGFGaW5hbH1cbiAgICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U9eyh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogMjAyMTAzMjMgdmlzaWJsZSBmYWxzZSDml7bovpPlhaXmoYbkvJrooqvmg4XlhrXvvIzkvYbmsqHmnInosIPnlKggb25TZWFyY2hcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoKFwiXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICAgIGlmIChvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UodmlzaWJsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyEhcmlnaHRJY29uICYmIG11bHRpcGxlICYmIChcbiAgICAgICAgICAgICAgPEljb24gaWNvbj17cmlnaHRJY29ufSBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlU2VsZWN0XG4iXX0=