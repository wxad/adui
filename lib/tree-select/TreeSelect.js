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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    _this.treeValueFlatten = [];

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
      var valueParam = [];
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          multiple = _this$props.multiple,
          onChange = _this$props.onChange,
          valueProp = _this$props.value,
          sameValueEnabled = _this$props.sameValueEnabled;
      var valueState = _this.state.value;

      if (!disabled) {
        if (sameValueEnabled) {
          value === null || value === void 0 ? void 0 : value.forEach(function (v) {
            var splited = "".concat(v).split("__");
            var val = splited[splited.length - 1];

            var _value$filter = value.filter(function (o) {
              return "".concat(o).includes("__".concat(val));
            }),
                length = _value$filter.length;

            if (length === _this.treeValueFlatten.filter(function (o) {
              return "".concat(o).includes("__".concat(val));
            }).length) {
              valueParam.push(val);
            } else if (!(valueState !== null && valueState !== void 0 && valueState.includes(val))) {
              valueParam.push(val);
            }
          });
        } else if (value) {
          valueParam = value;
        }

        if (multiple) {
          valueParam = _toConsumableArray(new Set(valueParam));
        }

        if (valueProp === null) {
          _this.setState({
            value: valueParam
          });
        }

        if (onChange) {
          onChange(valueParam, titleList);
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
      var _dataNode$, _dataNode$2;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var sameValueEnabled = _this.props.sameValueEnabled;

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

      if (sameValueEnabled && !((_dataNode$2 = dataNode[0]) !== null && _dataNode$2 !== void 0 && _dataNode$2.dataTitle)) {
        _this.treeValueFlatten = [];
      }

      var selectAll = options.selectAll;

      var process = function process(node, parentValue) {
        node.forEach(function (o) {
          var children = o.children,
              key = o.key,
              title = o.title,
              dataChildren = o.dataChildren,
              dataTitle = o.dataTitle,
              value = o.value,
              popover = o.popover,
              _o$popoverProps = o.popoverProps,
              popoverProps = _o$popoverProps === void 0 ? {} : _o$popoverProps;

          if (dataTitle && dataChildren) {
            return;
          }

          if (title) {
            o.dataTitle = title;
          }

          if (children !== null && children !== void 0 && children.length) {
            o.dataChildren = 1;
          }

          if (key === undefined) {
            o.key = value;
          } else if (value === undefined) {
            o.value = key;
          }

          if (sameValueEnabled) {
            var newVal = "".concat(parentValue ? "".concat(parentValue, "__") : "").concat(value);
            o.key = newVal;
            o.value = newVal;

            if (!_this.treeValueFlatten.includes(newVal)) {
              _this.treeValueFlatten.push(newVal);
            }
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
            process(children, o.value);
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
          sameValueEnabled = _this$props6.sameValueEnabled,
          selectAll = _this$props6.selectAll,
          showCheckedStrategy = _this$props6.showCheckedStrategy,
          topContent = _this$props6.topContent,
          treeData = _this$props6.treeData,
          otherProps = _objectWithoutProperties(_this$props6, ["autoClearSearchValue", "children", "className", "getPopupContainer", "heightFixed", "maxTagCount", "multiple", "onDropdownVisibleChange", "placement", "placeholder", "rightIcon", "resultRender", "resultVisible", "sameValueEnabled", "selectAll", "showCheckedStrategy", "topContent", "treeData"]);

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

      if (sameValueEnabled) {
        var trueValue = [];

        if (restProps.value) {
          restProps.value.forEach(function (o) {
            _this2.treeValueFlatten.forEach(function (p) {
              var splited = p.split("__");

              if (splited[splited.length - 1] === o) {
                trueValue.push(p);
              }
            });
          });
        }

        restProps.value = trueValue;
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

      var treeDataFinal = this.convertTreeData(treeData || this.convertChildrenToData(children), {
        selectAll: selectAll
      }) || [];
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
  sameValueEnabled: _propTypes["default"].bool,
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
  sameValueEnabled: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImlzQXJyYXlJbmNsdWRlcyIsImExIiwiYTIiLCJldmVyeSIsIm8iLCJpbmNsdWRlcyIsIlRyZWVTZWxlY3QiLCJwcm9wcyIsInNlbGVjdCIsInBvcnRhbCIsIndyYXBwZXIiLCJ0cmVlRGF0YSIsInRyZWVWYWx1ZUFsbCIsInRyZWVWYWx1ZUZsYXR0ZW4iLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsInNhdmVTZWxlY3QiLCJub2RlIiwic2F2ZVBvcnRhbCIsInNhdmVXcmFwcGVyIiwicmVuZGVyU3dpdGNoZXJJY29uIiwiaXNMZWFmIiwibG9hZGluZyIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwic2V0VGltZW91dCIsImZvcmNlVXBkYXRlIiwidG9wQ29udGVudCIsImhhc2giLCJ0b3BDb250ZW50UG9ydGFsVGFyZ2V0IiwiZHJvcGRvd24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJvbm1vdXNlZG93biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImluc2VydEJlZm9yZSIsImNoaWxkcmVuIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsInRpdGxlTGlzdCIsInZhbHVlUGFyYW0iLCJkaXNhYmxlZCIsIm11bHRpcGxlIiwib25DaGFuZ2UiLCJ2YWx1ZVByb3AiLCJzYW1lVmFsdWVFbmFibGVkIiwidmFsdWVTdGF0ZSIsImZvckVhY2giLCJ2Iiwic3BsaXRlZCIsInNwbGl0IiwidmFsIiwibGVuZ3RoIiwiZmlsdGVyIiwicHVzaCIsIlNldCIsImhhbmRsZVNlYXJjaCIsIm9uU2VhcmNoIiwiZmlsdGVyVHJlZU5vZGUiLCJpbnB1dCIsInRyZWVOb2RlIiwia2V5IiwidGl0bGUiLCJkYXRhVGl0bGUiLCJTdHJpbmciLCJnZXRNYXhUYWdDb3VudCIsIm1heFRhZ0NvdW50IiwibWF4SGVpZ2h0Rml4ZWQiLCJoYW5kbGVTZWxlY3RBbGwiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsIm5vZGVzIiwicmVzdWx0UmVuZGVyIiwicGxhY2Vob2xkZXJUZXh0IiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImxhYmVsIiwibWFwIiwiaSIsInZhbHMiLCJzcGxpY2UiLCJsYWJlbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEiLCJSZWFjdCIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsInBvcG92ZXIiLCJwb3BvdmVyUHJvcHMiLCJyZXN0UHJvcHMiLCJkYXRhIiwiY2hpbGREYXRhIiwiY29udmVydFRyZWVEYXRhIiwiZGF0YU5vZGVQYXJhbSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJkYXRhTm9kZSIsImlzQWxsU2VsZWN0ZWQiLCJpbmRldGVybWluYXRlIiwic2VsZWN0QWxsIiwicHJvY2VzcyIsInBhcmVudFZhbHVlIiwiZGF0YUNoaWxkcmVuIiwibmV3VmFsIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImNoZWNrYWJsZSIsImRpc2FibGVDaGVja2JveCIsImxpc3RlbklucHV0Q2hhbmdlIiwidGFyZ2V0Iiwia2V5Q29kZSIsImNvbXBvbmVudERpZE1vdW50IiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2YWx1ZVByZXYiLCJoZWlnaHRGaXhlZCIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1ZmZpeCIsImxhc3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJlcnJvciIsImRlZmF1bHRWYWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJjaGVja2JveCIsInRydWVWYWx1ZSIsInAiLCJjb3VudCIsInRyZWVEYXRhRmluYWwiLCJCb29sZWFuIiwibXVsdGlMZXZlbCIsInNvbWUiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJtYXJnaW5SaWdodCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJhcnJheSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIlRyZWVOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxrQkFBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCLGNBQVlDLHNCQURLO0FBRWpCLGdCQUFjQyx3QkFGRztBQUdqQixpQkFBZUM7QUFIRSxDQUFuQjs7QUFTQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQ3RCQyxFQURzQixFQUV0QkMsRUFGc0IsRUFHVjtBQUNaLE1BQUksQ0FBQ0QsRUFBRCxJQUFPLENBQUNDLEVBQVosRUFBZ0I7QUFDZCxXQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFPQSxFQUFFLENBQUNDLEtBQUgsQ0FBUyxVQUFDQyxDQUFEO0FBQUEsV0FBT0gsRUFBRSxDQUFDSSxRQUFILENBQVlELENBQVosQ0FBUDtBQUFBLEdBQVQsQ0FBUDtBQUNELENBVEQ7O0lBdUZNRSxVOzs7OztBQWdLSixzQkFBWUMsS0FBWixFQUFxQztBQUFBOztBQUFBOztBQUNuQyw4QkFBTUEsS0FBTjtBQURtQyxVQVo5QkMsTUFZOEI7QUFBQSxVQVY5QkMsTUFVOEI7QUFBQSxVQVI5QkMsT0FROEI7QUFBQSxVQU45QkMsUUFNOEI7QUFBQSxVQUo5QkMsWUFJOEI7QUFBQSxVQUY5QkMsZ0JBRThCLEdBRkosRUFFSTs7QUFBQSxVQVk5QkMscUJBWjhCLEdBWU4sVUFDN0JDLFNBRDZCLEVBRTdCQyxTQUY2QjtBQUFBLGFBSTdCLENBQUMsOEJBQWEsTUFBS1QsS0FBbEIsRUFBeUJRLFNBQXpCLENBQUQsSUFBd0MsQ0FBQyw4QkFBYSxNQUFLRSxLQUFsQixFQUF5QkQsU0FBekIsQ0FKWjtBQUFBLEtBWk07O0FBQUEsVUFrQjlCRSxVQWxCOEIsR0FrQmpCLFVBQUNDLElBQUQsRUFBMkI7QUFDN0MsWUFBS1gsTUFBTCxHQUFjVyxJQUFkO0FBQ0QsS0FwQm9DOztBQUFBLFVBc0I5QkMsVUF0QjhCLEdBc0JqQixVQUFDRCxJQUFELEVBQTJCO0FBQzdDLFlBQUtWLE1BQUwsR0FBY1UsSUFBZDtBQUNELEtBeEJvQzs7QUFBQSxVQTBCOUJFLFdBMUI4QixHQTBCaEIsVUFBQ0YsSUFBRCxFQUEwQjtBQUM3QyxZQUFLVCxPQUFMLEdBQWVTLElBQWY7QUFDRCxLQTVCb0M7O0FBQUEsVUE4QjlCRyxrQkE5QjhCLEdBOEJULGdCQUF5QztBQUFBLFVBQXRDQyxNQUFzQyxRQUF0Q0EsTUFBc0M7QUFBQSxVQUE5QkMsT0FBOEIsUUFBOUJBLE9BQThCOztBQUNuRSxVQUFJQSxPQUFKLEVBQWE7QUFDWCxlQUFPLG9CQUFDLG1CQUFEO0FBQVMsVUFBQSxJQUFJLEVBQUMsTUFBZDtBQUFxQixVQUFBLFNBQVMsWUFBSzlCLE1BQUw7QUFBOUIsVUFBUDtBQUNEOztBQUNELFVBQUk2QixNQUFKLEVBQVk7QUFDVixlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUNFLG9CQUFDLGdCQUFEO0FBQU0sUUFBQSxJQUFJLEVBQUMsZ0JBQVg7QUFBNEIsUUFBQSxTQUFTLFlBQUs3QixNQUFMO0FBQXJDLFFBREY7QUFHRCxLQXhDb0M7O0FBQUEsVUEwQzlCK0IsbUJBMUM4QixHQTBDUixVQUFDQyxPQUFELEVBQXNCO0FBQ2pEQyxNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmLGNBQUtDLFdBQUwsQ0FBaUIsWUFBTTtBQUFBLGNBQ2JDLFVBRGEsR0FDRSxNQUFLdEIsS0FEUCxDQUNic0IsVUFEYTtBQUFBLDRCQUVvQixNQUFLWixLQUZ6QjtBQUFBLGNBRWJhLElBRmEsZUFFYkEsSUFGYTtBQUFBLGNBRVBDLHNCQUZPLGVBRVBBLHNCQUZPOztBQU1yQixjQUFJTCxPQUFPLElBQUlHLFVBQVgsSUFBeUIsQ0FBQ0Usc0JBQTlCLEVBQXNEO0FBQ3BELGdCQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxZQUNYeEMsTUFEVyx1QkFDUW9DLElBRFIsRUFBakI7O0FBR0EsZ0JBQUlFLFFBQUosRUFBYztBQUNaLGtCQUFNRyxFQUFFLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixLQUF2QixDQUFYOztBQUNBRCxjQUFBQSxFQUFFLENBQUNFLFdBQUgsR0FBaUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxnQkFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FELGdCQUFBQSxDQUFDLENBQUNFLHdCQUFGO0FBQ0QsZUFIRDs7QUFJQVIsY0FBQUEsUUFBUSxDQUFDUyxZQUFULENBQXNCTixFQUF0QixFQUEwQkgsUUFBUSxDQUFDVSxRQUFULENBQWtCLENBQWxCLENBQTFCOztBQUNBLG9CQUFLQyxRQUFMLENBQWM7QUFDWlosZ0JBQUFBLHNCQUFzQixFQUFFSTtBQURaLGVBQWQ7QUFHRDtBQUNGO0FBQ0YsU0F0QkQ7QUF1QkQsT0F4QlMsRUF3QlAsQ0F4Qk8sQ0FBVjtBQXlCRCxLQXBFb0M7O0FBQUEsVUFzRTlCUyxZQXRFOEIsR0FzRWYsVUFDcEJDLEtBRG9CLEVBRXBCQyxTQUZvQixFQUdqQjtBQUNILFVBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQURHLHdCQVFDLE1BQUt4QyxLQVJOO0FBQUEsVUFHRHlDLFFBSEMsZUFHREEsUUFIQztBQUFBLFVBSURDLFFBSkMsZUFJREEsUUFKQztBQUFBLFVBS0RDLFFBTEMsZUFLREEsUUFMQztBQUFBLFVBTU1DLFNBTk4sZUFNRE4sS0FOQztBQUFBLFVBT0RPLGdCQVBDLGVBT0RBLGdCQVBDO0FBQUEsVUFTWUMsVUFUWixHQVMyQixNQUFLcEMsS0FUaEMsQ0FTSzRCLEtBVEw7O0FBVUgsVUFBSSxDQUFDRyxRQUFMLEVBQWU7QUFDYixZQUFJSSxnQkFBSixFQUFzQjtBQUNwQlAsVUFBQUEsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVTLE9BQVAsQ0FBZSxVQUFDQyxDQUFELEVBQU87QUFDcEIsZ0JBQU1DLE9BQU8sR0FBRyxVQUFHRCxDQUFILEVBQU9FLEtBQVAsQ0FBYSxJQUFiLENBQWhCO0FBQ0EsZ0JBQU1DLEdBQUcsR0FBR0YsT0FBTyxDQUFDQSxPQUFPLENBQUNHLE1BQVIsR0FBaUIsQ0FBbEIsQ0FBbkI7O0FBRm9CLGdDQUdEZCxLQUFLLENBQUNlLE1BQU4sQ0FBYSxVQUFDeEQsQ0FBRDtBQUFBLHFCQUFPLFVBQUdBLENBQUgsRUFBT0MsUUFBUCxhQUFxQnFELEdBQXJCLEVBQVA7QUFBQSxhQUFiLENBSEM7QUFBQSxnQkFHWkMsTUFIWSxpQkFHWkEsTUFIWTs7QUFJcEIsZ0JBQ0VBLE1BQU0sS0FDTixNQUFLOUMsZ0JBQUwsQ0FBc0IrQyxNQUF0QixDQUE2QixVQUFDeEQsQ0FBRDtBQUFBLHFCQUFPLFVBQUdBLENBQUgsRUFBT0MsUUFBUCxhQUFxQnFELEdBQXJCLEVBQVA7QUFBQSxhQUE3QixFQUNHQyxNQUhMLEVBSUU7QUFFQVosY0FBQUEsVUFBVSxDQUFDYyxJQUFYLENBQWdCSCxHQUFoQjtBQUNELGFBUEQsTUFPTyxJQUFJLEVBQUNMLFVBQUQsYUFBQ0EsVUFBRCxlQUFDQSxVQUFVLENBQUVoRCxRQUFaLENBQXFCcUQsR0FBckIsQ0FBRCxDQUFKLEVBQWdDO0FBQ3JDWCxjQUFBQSxVQUFVLENBQUNjLElBQVgsQ0FBZ0JILEdBQWhCO0FBQ0Q7QUFDRixXQWREO0FBZUQsU0FoQkQsTUFnQk8sSUFBSWIsS0FBSixFQUFXO0FBQ2hCRSxVQUFBQSxVQUFVLEdBQUdGLEtBQWI7QUFDRDs7QUFFRCxZQUFJSSxRQUFKLEVBQWM7QUFDWkYsVUFBQUEsVUFBVSxzQkFBTyxJQUFJZSxHQUFKLENBQVFmLFVBQVIsQ0FBUCxDQUFWO0FBQ0Q7O0FBRUQsWUFBSUksU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCLGdCQUFLUixRQUFMLENBQWM7QUFBRUUsWUFBQUEsS0FBSyxFQUFFRTtBQUFULFdBQWQ7QUFDRDs7QUFDRCxZQUFJRyxRQUFKLEVBQWM7QUFDWkEsVUFBQUEsUUFBUSxDQUFDSCxVQUFELEVBQWFELFNBQWIsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixLQW5Ib0M7O0FBQUEsVUFxSDlCaUIsWUFySDhCLEdBcUhmLFVBQUNMLEdBQUQsRUFBaUI7QUFBQSxVQUM3Qk0sUUFENkIsR0FDaEIsTUFBS3pELEtBRFcsQ0FDN0J5RCxRQUQ2Qjs7QUFFckMsVUFBSUEsUUFBSixFQUFjO0FBQ1pBLFFBQUFBLFFBQVEsQ0FBQ04sR0FBRCxDQUFSO0FBQ0EvQixRQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmLGdCQUFLQyxXQUFMO0FBQ0QsU0FGUyxFQUVQLENBRk8sQ0FBVjtBQUdEO0FBQ0YsS0E3SG9DOztBQUFBLFVBK0g5QnFDLGNBL0g4QixHQStIYixVQUFDQyxLQUFELEVBQWdCQyxRQUFoQixFQUFrQztBQUFBLFVBQ2hEQyxHQURnRCxHQUNmRCxRQURlLENBQ2hEQyxHQURnRDtBQUFBLFVBQzNDQyxLQUQyQyxHQUNmRixRQURlLENBQzNDRSxLQUQyQztBQUFBLFVBQ3BDeEIsS0FEb0MsR0FDZnNCLFFBRGUsQ0FDcEN0QixLQURvQztBQUFBLFVBQzdCeUIsU0FENkIsR0FDZkgsUUFEZSxDQUM3QkcsU0FENkI7O0FBRXhELFVBQUksQ0FBQ0YsR0FBRCxJQUFRLENBQUN2QixLQUFiLEVBQW9CO0FBQ2xCLGVBQU8sS0FBUDtBQUNEOztBQUNELGFBQU8wQixNQUFNLENBQUNELFNBQVMsSUFBSUQsS0FBZCxDQUFOLENBQTJCaEUsUUFBM0IsQ0FBb0M2RCxLQUFwQyxDQUFQO0FBQ0QsS0FySW9DOztBQUFBLFVBdUk5Qk0sY0F2SThCLEdBdUliLFlBQU07QUFBQSxVQUNwQkMsV0FEb0IsR0FDSixNQUFLbEUsS0FERCxDQUNwQmtFLFdBRG9CO0FBQUEseUJBRU0sTUFBS3hELEtBRlg7QUFBQSxVQUVwQjRCLEtBRm9CLGdCQUVwQkEsS0FGb0I7QUFBQSxVQUViNkIsY0FGYSxnQkFFYkEsY0FGYTs7QUFJNUIsVUFDRSxDQUFDLENBQUNELFdBQUQsSUFBZ0IsQ0FBQzVCLEtBQWpCLElBQTBCQSxLQUFLLENBQUNjLE1BQU4sSUFBZ0JjLFdBQTNDLEtBQ0EsQ0FBQ0MsY0FGSCxFQUdFO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxDQUFQO0FBQ0QsS0FsSm9DOztBQUFBLFVBb0o5QkMsZUFwSjhCLEdBb0paLFlBQU07QUFBQSx5QkFDVSxNQUFLcEUsS0FEZjtBQUFBLFVBQ2Q0QyxTQURjLGdCQUNyQk4sS0FEcUI7QUFBQSxVQUNISyxRQURHLGdCQUNIQSxRQURHO0FBQUEsVUFFckJMLEtBRnFCLEdBRVgsTUFBSzVCLEtBRk0sQ0FFckI0QixLQUZxQjs7QUFHN0IsVUFBSTdDLGVBQWUsQ0FBQzZDLEtBQUssSUFBSSxFQUFWLEVBQWMsTUFBS2pDLFlBQW5CLENBQW5CLEVBQXFEO0FBSW5ELFlBQUl1QyxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsZ0JBQUtSLFFBQUwsQ0FBYztBQUFFRSxZQUFBQSxLQUFLLEVBQUU7QUFBVCxXQUFkO0FBQ0Q7O0FBQ0QsWUFBSUssUUFBSixFQUFjO0FBQ1pBLFVBQUFBLFFBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFSO0FBQ0Q7QUFDRixPQVZELE1BVU87QUFJTCxZQUFJQyxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsZ0JBQUtSLFFBQUwsQ0FBYztBQUFFRSxZQUFBQSxLQUFLLEVBQUUsTUFBS2pDO0FBQWQsV0FBZDtBQUNEOztBQUNELFlBQUlzQyxRQUFKLEVBQWM7QUFDWkEsVUFBQUEsUUFBUSxDQUFDLE1BQUt0QyxZQUFOLEVBQW9CLEVBQXBCLENBQVI7QUFDRDtBQUNGO0FBQ0YsS0E1S29DOztBQUFBLFVBOEs5QmdFLG9CQTlLOEIsR0E4S1AsVUFBQ0MsS0FBRCxFQUF3QjtBQUFBOztBQUNwRCxVQUFJLENBQUMsTUFBS3JFLE1BQVYsRUFBa0I7QUFDaEIsZUFBTyxJQUFQO0FBQ0Q7O0FBSG1ELHlCQUlWLE1BQUtELEtBSks7QUFBQSxVQUk1QzJDLFFBSjRDLGdCQUk1Q0EsUUFKNEM7QUFBQSxVQUlsQzRCLFlBSmtDLGdCQUlsQ0EsWUFKa0M7QUFBQSxVQUlwQmpDLEtBSm9CLGdCQUlwQkEsS0FKb0I7O0FBTXBELFVBQUlpQyxZQUFKLEVBQWtCO0FBQ2hCLGVBQU9BLFlBQVksQ0FBQ0QsS0FBRCxDQUFuQjtBQUNEOztBQVJtRCxVQVU1Q2xCLE1BVjRDLEdBVWpDa0IsS0FWaUMsQ0FVNUNsQixNQVY0QztBQVdwRCxVQUFNb0IsZUFBZSxHQUNuQiwwQ0FDRTtBQUNFLFFBQUEsS0FBSyxFQUFFO0FBQ0xDLFVBQUFBLE9BQU8sRUFBRSxjQURKO0FBRUxDLFVBQUFBLGFBQWEsRUFBRSxLQUZWO0FBR0xDLFVBQUFBLFFBQVEsRUFBRSxtQkFITDtBQUlMQyxVQUFBQSxRQUFRLEVBQUUsUUFKTDtBQUtMQyxVQUFBQSxZQUFZLEVBQUUsVUFMVDtBQU1MQyxVQUFBQSxVQUFVLEVBQUU7QUFOUDtBQURULG9CQVVHUixLQUFLLENBQUMsQ0FBRCxDQVZSLDRDQVVHLFFBQVVTLEtBVmIsQ0FERixFQWFFO0FBQU0sUUFBQSxLQUFLLEVBQUU7QUFBRU4sVUFBQUEsT0FBTyxFQUFFLGNBQVg7QUFBMkJDLFVBQUFBLGFBQWEsRUFBRTtBQUExQztBQUFiLG9CQUNLdEIsTUFETCxZQWJGLENBREY7QUFvQkEsYUFDRSxvQkFBQyxtQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLEtBRGI7QUFFRSxRQUFBLFNBQVMsRUFBQyxLQUZaO0FBR0UsUUFBQSxLQUFLLEVBQ0g7QUFBSyxVQUFBLFNBQVMsWUFBS2pFLE1BQUw7QUFBZCxXQUNHbUYsS0FBSyxDQUFDVSxHQUFOLENBQVUsaUJBQTJCQyxDQUEzQixFQUFpQztBQUFBLGNBQTlCcEIsR0FBOEIsU0FBOUJBLEdBQThCO0FBQUEsY0FBekJwQixRQUF5QixTQUF6QkEsUUFBeUI7QUFBQSxjQUFmc0MsS0FBZSxTQUFmQSxLQUFlO0FBQzFDLGlCQUNFO0FBQUssWUFBQSxTQUFTLFlBQUs1RixNQUFMLHNCQUFkO0FBQThDLFlBQUEsR0FBRyxFQUFFMEU7QUFBbkQsYUFDRSxrQ0FBT2tCLEtBQVAsQ0FERixFQUVHLENBQUN0QyxRQUFELElBQ0Msb0JBQUMsZ0JBQUQ7QUFDRSxZQUFBLElBQUksRUFBQyxRQURQO0FBRUUsWUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixrQkFBTXlDLElBQUksR0FBR1osS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBQ25GLENBQUQ7QUFBQSx1QkFBT0EsQ0FBQyxDQUFDeUMsS0FBVDtBQUFBLGVBQVYsQ0FBYjtBQUNBNEMsY0FBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVlGLENBQVosRUFBZSxDQUFmOztBQUNBLGtCQUFJM0MsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsc0JBQUtGLFFBQUwsQ0FBYztBQUFFRSxrQkFBQUEsS0FBSyxFQUFFNEM7QUFBVCxpQkFBZDtBQUNEOztBQUVELGtCQUFNRSxNQUFNLEdBQUdkLEtBQUssQ0FBQ1UsR0FBTixDQUFVLFVBQUNuRixDQUFEO0FBQUEsdUJBQU9BLENBQUMsQ0FBQ2tGLEtBQVQ7QUFBQSxlQUFWLENBQWY7QUFDQUssY0FBQUEsTUFBTSxDQUFDRCxNQUFQLENBQWNGLENBQWQsRUFBaUIsQ0FBakI7O0FBRUEsa0JBQUl0QyxRQUFKLEVBQWM7QUFDWkEsZ0JBQUFBLFFBQVEsQ0FBQ3VDLElBQUQsRUFBT0UsTUFBUCxDQUFSO0FBQ0Q7QUFDRjtBQWZILFlBSEosQ0FERjtBQXdCRCxTQXpCQSxDQURILENBSko7QUFpQ0UsUUFBQSxjQUFjLFlBQUtqRyxNQUFMO0FBakNoQixTQW1DRTtBQUNFLFFBQUEsU0FBUyxZQUFLQSxNQUFMLG9CQURYO0FBRUUsUUFBQSxJQUFJLEVBQUMsTUFGUDtBQUdFLFFBQUEsT0FBTyxFQUFFLGlCQUFDNEMsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNzRCxlQUFGLEVBQVA7QUFBQTtBQUhYLFNBS0diLGVBTEgsRUFNRSxvQkFBQyxnQkFBRDtBQUNFLFFBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFBLElBQUksRUFBRSxFQUZSO0FBR0UsUUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYixjQUFJbEMsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsa0JBQUtGLFFBQUwsQ0FBYztBQUFFRSxjQUFBQSxLQUFLLEVBQUU7QUFBVCxhQUFkO0FBQ0Q7O0FBQ0QsY0FBSUssUUFBSixFQUFjO0FBQ1pBLFlBQUFBLFFBQVEsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFSO0FBQ0Q7QUFDRjtBQVZILFFBTkYsQ0FuQ0YsQ0FERjtBQXlERCxLQXRRb0M7O0FBQUEsVUF3UTlCMkMscUJBeFE4QixHQXdRTixVQUFDaEIsS0FBRDtBQUFBLGFBQzdCLHlCQUFRQSxLQUFSLEVBQ0dVLEdBREgsQ0FDTyxVQUFDcEUsSUFBRCxFQUE4QjtBQUNqQyxZQUFJLENBQUMyRSxLQUFLLENBQUNDLGNBQU4sQ0FBcUI1RSxJQUFyQixDQUFELElBQStCLENBQUNBLElBQUksQ0FBQzZFLElBQXpDLEVBQStDO0FBQzdDLGlCQUFPLElBQVA7QUFDRDs7QUFIZ0Msb0JBYzdCN0UsSUFkNkI7QUFBQSxZQUsvQmlELEdBTCtCLFNBSy9CQSxHQUwrQjtBQUFBLGdDQU0vQjdELEtBTitCO0FBQUEsWUFPN0JtQyxRQVA2QixlQU83QkEsUUFQNkI7QUFBQSxZQVE3QkcsS0FSNkIsZUFRN0JBLEtBUjZCO0FBQUEsWUFTN0JvRCxPQVQ2QixlQVM3QkEsT0FUNkI7QUFBQSxZQVU3QkMsWUFWNkIsZUFVN0JBLFlBVjZCO0FBQUEsWUFXN0I3QixLQVg2QixlQVc3QkEsS0FYNkI7QUFBQSxZQVkxQjhCLFNBWjBCOztBQW1CakMsWUFBTUMsSUFBSTtBQUNSaEMsVUFBQUEsR0FBRyxFQUFIQSxHQURRO0FBRVJ2QixVQUFBQSxLQUFLLEVBQUxBLEtBRlE7QUFHUnlCLFVBQUFBLFNBQVMsRUFBRUQsS0FISDtBQUlSQSxVQUFBQSxLQUFLLEVBQUU0QixPQUFPLEdBQ1osMENBQ0U7QUFBSyxZQUFBLFNBQVMsWUFBS3ZHLE1BQUw7QUFBZCxhQUEwQzJFLEtBQTFDLENBREYsRUFFRSxvQkFBQyxtQkFBRDtBQUFTLFlBQUEsS0FBSyxFQUFFNEIsT0FBaEI7QUFBeUIsWUFBQSxTQUFTLEVBQUM7QUFBbkMsYUFBK0NDLFlBQS9DLEdBQ0U7QUFBSyxZQUFBLFNBQVMsWUFBS3hHLE1BQUw7QUFBZCxZQURGLENBRkYsQ0FEWSxHQVFaMkU7QUFaTSxXQWNMOEIsU0FkSyxDQUFWOztBQWlCQSxZQUFNRSxTQUFTLEdBQUcsTUFBS1IscUJBQUwsQ0FBMkJuRCxRQUEzQixDQUFsQjs7QUFDQSxZQUFJMkQsU0FBUyxDQUFDMUMsTUFBZCxFQUFzQjtBQUNwQnlDLFVBQUFBLElBQUksQ0FBQzFELFFBQUwsR0FBZ0IyRCxTQUFoQjtBQUNEOztBQUVELGVBQU9ELElBQVA7QUFDRCxPQTNDSCxFQTRDR3hDLE1BNUNILENBNENVLFVBQUN3QyxJQUFEO0FBQUEsZUFBVUEsSUFBVjtBQUFBLE9BNUNWLENBRDZCO0FBQUEsS0F4UU07O0FBQUEsVUF1VDlCRSxlQXZUOEIsR0F1VFosVUFDdkJDLGFBRHVCLEVBR1Y7QUFBQTs7QUFBQSxVQURiQyxPQUNhLHVFQURzQixFQUN0QjtBQUFBLFVBQ0xwRCxnQkFESyxHQUNnQixNQUFLN0MsS0FEckIsQ0FDTDZDLGdCQURLOztBQUViLFVBQUksQ0FBQ21ELGFBQUwsRUFBb0I7QUFDbEIsZUFBT0UsU0FBUDtBQUNEOztBQUNELFVBQU1DLFFBQVEsc0JBQU9ILGFBQVAsQ0FBZDs7QUFMYSxVQU1FbEQsVUFORixHQU1pQixNQUFLcEMsS0FOdEIsQ0FNTDRCLEtBTks7QUFPYixVQUFNOEQsYUFBYSxHQUFHM0csZUFBZSxDQUFDcUQsVUFBVSxJQUFJLEVBQWYsRUFBbUIsTUFBS3pDLFlBQXhCLENBQXJDO0FBQ0EsVUFBTWdHLGFBQWEsR0FBRyxDQUFDRCxhQUFELElBQWtCLENBQUMsRUFBQ3RELFVBQUQsYUFBQ0EsVUFBRCxlQUFDQSxVQUFVLENBQUVNLE1BQWIsQ0FBekM7O0FBRUEsVUFBSSxlQUFBK0MsUUFBUSxDQUFDLENBQUQsQ0FBUiwwREFBYXRDLEdBQWIsZ0JBQXdCMUUsTUFBeEIsdUJBQUosRUFBd0Q7QUFDdEQsZUFBT2dILFFBQVA7QUFDRDs7QUFFRCxVQUFJdEQsZ0JBQWdCLElBQUksaUJBQUNzRCxRQUFRLENBQUMsQ0FBRCxDQUFULHdDQUFDLFlBQWFwQyxTQUFkLENBQXhCLEVBQWlEO0FBQy9DLGNBQUt6RCxnQkFBTCxHQUF3QixFQUF4QjtBQUNEOztBQWhCWSxVQWtCTGdHLFNBbEJLLEdBa0JTTCxPQWxCVCxDQWtCTEssU0FsQks7O0FBb0JiLFVBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUMzRixJQUFELEVBQW1CNEYsV0FBbkIsRUFBcUQ7QUFDbkU1RixRQUFBQSxJQUFJLENBQUNtQyxPQUFMLENBQWEsVUFBQ2xELENBQUQsRUFBTztBQUFBLGNBRWhCc0MsUUFGZ0IsR0FVZHRDLENBVmMsQ0FFaEJzQyxRQUZnQjtBQUFBLGNBR2hCMEIsR0FIZ0IsR0FVZGhFLENBVmMsQ0FHaEJnRSxHQUhnQjtBQUFBLGNBSWhCQyxLQUpnQixHQVVkakUsQ0FWYyxDQUloQmlFLEtBSmdCO0FBQUEsY0FLaEIyQyxZQUxnQixHQVVkNUcsQ0FWYyxDQUtoQjRHLFlBTGdCO0FBQUEsY0FNaEIxQyxTQU5nQixHQVVkbEUsQ0FWYyxDQU1oQmtFLFNBTmdCO0FBQUEsY0FPaEJ6QixLQVBnQixHQVVkekMsQ0FWYyxDQU9oQnlDLEtBUGdCO0FBQUEsY0FRaEJvRCxPQVJnQixHQVVkN0YsQ0FWYyxDQVFoQjZGLE9BUmdCO0FBQUEsZ0NBVWQ3RixDQVZjLENBU2hCOEYsWUFUZ0I7QUFBQSxjQVNoQkEsWUFUZ0IsZ0NBU0QsRUFUQzs7QUFXbEIsY0FBSTVCLFNBQVMsSUFBSTBDLFlBQWpCLEVBQStCO0FBQzdCO0FBQ0Q7O0FBSUQsY0FBSTNDLEtBQUosRUFBVztBQUNUakUsWUFBQUEsQ0FBQyxDQUFDa0UsU0FBRixHQUFjRCxLQUFkO0FBQ0Q7O0FBSUQsY0FBSTNCLFFBQUosYUFBSUEsUUFBSixlQUFJQSxRQUFRLENBQUVpQixNQUFkLEVBQXNCO0FBQ3BCdkQsWUFBQUEsQ0FBQyxDQUFDNEcsWUFBRixHQUFpQixDQUFqQjtBQUNEOztBQUNELGNBQUk1QyxHQUFHLEtBQUtxQyxTQUFaLEVBQXVCO0FBQ3JCckcsWUFBQUEsQ0FBQyxDQUFDZ0UsR0FBRixHQUFRdkIsS0FBUjtBQUNELFdBRkQsTUFFTyxJQUFJQSxLQUFLLEtBQUs0RCxTQUFkLEVBQXlCO0FBQzlCckcsWUFBQUEsQ0FBQyxDQUFDeUMsS0FBRixHQUFVdUIsR0FBVjtBQUNEOztBQUNELGNBQUloQixnQkFBSixFQUFzQjtBQUNwQixnQkFBTTZELE1BQU0sYUFBTUYsV0FBVyxhQUFNQSxXQUFOLFVBQXdCLEVBQXpDLFNBQThDbEUsS0FBOUMsQ0FBWjtBQUNBekMsWUFBQUEsQ0FBQyxDQUFDZ0UsR0FBRixHQUFRNkMsTUFBUjtBQUNBN0csWUFBQUEsQ0FBQyxDQUFDeUMsS0FBRixHQUFVb0UsTUFBVjs7QUFDQSxnQkFBSSxDQUFDLE1BQUtwRyxnQkFBTCxDQUFzQlIsUUFBdEIsQ0FBK0I0RyxNQUEvQixDQUFMLEVBQTZDO0FBQzNDLG9CQUFLcEcsZ0JBQUwsQ0FBc0JnRCxJQUF0QixDQUEyQm9ELE1BQTNCO0FBQ0Q7QUFDRjs7QUFFRCxjQUFJaEIsT0FBSixFQUFhO0FBQ1g3RixZQUFBQSxDQUFDLENBQUNpRSxLQUFGLEdBQ0UsMENBQ0U7QUFBSyxjQUFBLFNBQVMsWUFBSzNFLE1BQUw7QUFBZCxlQUEwQzJFLEtBQTFDLENBREYsRUFFRSxvQkFBQyxtQkFBRDtBQUFTLGNBQUEsS0FBSyxFQUFFNEIsT0FBaEI7QUFBeUIsY0FBQSxTQUFTLEVBQUM7QUFBbkMsZUFBK0NDLFlBQS9DLEdBQ0U7QUFBSyxjQUFBLFNBQVMsWUFBS3hHLE1BQUw7QUFBZCxjQURGLENBRkYsQ0FERjtBQVFEOztBQUNELGNBQUlnRCxRQUFKLEVBQWM7QUFDWm9FLFlBQUFBLE9BQU8sQ0FBQ3BFLFFBQUQsRUFBV3RDLENBQUMsQ0FBQ3lDLEtBQWIsQ0FBUDtBQUNEO0FBQ0YsU0FyREQ7QUFzREQsT0F2REQ7O0FBeURBaUUsTUFBQUEsT0FBTyxDQUFDSixRQUFELENBQVA7O0FBRUEsVUFBSUcsU0FBSixFQUFlO0FBQ2JILFFBQUFBLFFBQVEsQ0FBQ1EsT0FBVCxDQUFpQjtBQUNmN0MsVUFBQUEsS0FBSyxFQUNIO0FBQ0UsWUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUEsU0FBUyxZQUFLM0UsTUFBTCw2QkFGWDtBQUdFLFlBQUEsT0FBTyxFQUFFLE1BQUtpRjtBQUhoQiw2QkFNRSxvQkFBQyxvQkFBRDtBQUNFLFlBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFBLE9BQU8sRUFBRWdDLGFBRlg7QUFHRSxZQUFBLGFBQWEsRUFBRUM7QUFIakIsWUFORixDQUZhO0FBZWZPLFVBQUFBLFNBQVMsWUFBS3pILE1BQUwsdUJBZk07QUFnQmYwRSxVQUFBQSxHQUFHLFlBQUsxRSxNQUFMLHVCQWhCWTtBQWlCZjBILFVBQUFBLFNBQVMsRUFBRSxLQWpCSTtBQWtCZkMsVUFBQUEsZUFBZSxFQUFFO0FBbEJGLFNBQWpCO0FBb0JEOztBQUVELGFBQU9YLFFBQVA7QUFDRCxLQWphb0M7O0FBQUEsVUFtYXJDWSxpQkFuYXFDLEdBbWFqQixVQUFDaEYsQ0FBRCxFQUFZO0FBQUEsVUFFbEJPLEtBRmtCLEdBSTFCUCxDQUowQixDQUU1QmlGLE1BRjRCLENBRWxCMUUsS0FGa0I7QUFBQSxVQUc1QjJFLE9BSDRCLEdBSTFCbEYsQ0FKMEIsQ0FHNUJrRixPQUg0Qjs7QUFNOUIsVUFBSUEsT0FBTyxLQUFLLENBQVosSUFBaUIzRSxLQUFLLEtBQUssRUFBL0IsRUFBbUM7QUFDakNQLFFBQUFBLENBQUMsQ0FBQ3NELGVBQUY7QUFDRDtBQUNGLEtBNWFvQzs7QUFBQSxVQThhOUI2QixpQkE5YThCLEdBOGFWLFlBQU07QUFDL0IsVUFBTXZELEtBQUssR0FBRyxNQUFLeEQsT0FBTCxDQUFhd0IsYUFBYixDQUEyQixPQUEzQixDQUFkOztBQUQrQix5QkFFcUIsTUFBSzNCLEtBRjFCO0FBQUEsVUFFdkJrRSxXQUZ1QixnQkFFdkJBLFdBRnVCO0FBQUEsVUFFVmlELFdBRlUsZ0JBRVZBLFdBRlU7QUFBQSxVQUVHQyxhQUZILGdCQUVHQSxhQUZIO0FBQUEsVUFHdkI5RSxLQUh1QixHQUdiLE1BQUs1QixLQUhRLENBR3ZCNEIsS0FIdUI7O0FBSy9CLFVBQUlxQixLQUFKLEVBQVc7QUFFVEEsUUFBQUEsS0FBSyxDQUFDMEQsZ0JBQU4sQ0FBdUIsU0FBdkIsRUFBa0MsTUFBS04saUJBQXZDLEVBQTBELEtBQTFEO0FBQ0Q7O0FBRUQsVUFBSTdDLFdBQVcsS0FBSyxJQUFoQixJQUF3QjVCLEtBQTVCLEVBQW1DO0FBQ2pDLGNBQUtqQixXQUFMO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDK0YsYUFBRCxJQUFrQixNQUFLakgsT0FBM0IsRUFBb0M7QUFDbEMsWUFBSXdELEtBQUosRUFBVztBQUNUQSxVQUFBQSxLQUFLLENBQUN3RCxXQUFOLEdBQW9CQSxXQUFwQjtBQUNEO0FBQ0Y7QUFDRixLQWhjb0M7O0FBQUEsVUFrYzlCRyxrQkFsYzhCLEdBa2NULFVBQzFCQyxDQUQwQixTQUd2QjtBQUFBLFVBRE1DLFNBQ04sU0FERGxGLEtBQ0M7QUFBQSx5QkFDaUQsTUFBS3RDLEtBRHREO0FBQUEsVUFDS29ILGFBREwsZ0JBQ0tBLGFBREw7QUFBQSxVQUNvQkssV0FEcEIsZ0JBQ29CQSxXQURwQjtBQUFBLFVBQ2lDTixXQURqQyxnQkFDaUNBLFdBRGpDO0FBQUEseUJBRXFDLE1BQUt6RyxLQUYxQztBQUFBLFVBRUthLElBRkwsZ0JBRUtBLElBRkw7QUFBQSxVQUVXZSxLQUZYLGdCQUVXQSxLQUZYO0FBQUEsVUFFa0I2QixjQUZsQixnQkFFa0JBLGNBRmxCOztBQVVILFVBQUksQ0FBQ2lELGFBQUwsRUFBb0I7QUFDbEJoRyxRQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmc0csVUFBQUEsTUFBTSxDQUFDQyxhQUFQLENBQXFCLElBQUlDLEtBQUosQ0FBVSxRQUFWLENBQXJCOztBQUNBLGNBQU1qRSxLQUFLLEdBQUcsTUFBS3hELE9BQUwsQ0FBYXdCLGFBQWIsQ0FBMkIsT0FBM0IsQ0FBZDs7QUFDQSxjQUFJZ0MsS0FBSixFQUFXO0FBQ1RBLFlBQUFBLEtBQUssQ0FBQ3dELFdBQU4sR0FBb0JBLFdBQXBCO0FBQ0Q7QUFDRixTQU5TLEVBTVAsQ0FOTyxDQUFWO0FBT0Q7O0FBRUQsVUFBSU0sV0FBVyxJQUFJLENBQUFELFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsWUFBQUEsU0FBUyxDQUFFcEUsTUFBWCxPQUFzQmQsS0FBdEIsYUFBc0JBLEtBQXRCLHVCQUFzQkEsS0FBSyxDQUFFYyxNQUE3QixDQUFuQixFQUF3RDtBQUN0RCxZQUFJO0FBQ0YsY0FBTWpELE9BQU8sR0FBR3VCLFFBQVEsQ0FBQ0MsYUFBVCxZQUNWeEMsTUFEVSxzQkFDUW9DLElBRFIsZUFDaUJwQyxNQURqQix5QkFBaEI7QUFHQSxjQUFNMEksTUFBTSxHQUFHbkcsUUFBUSxDQUFDQyxhQUFULFlBQ1R4QyxNQURTLHNCQUNTb0MsSUFEVCxlQUNrQnBDLE1BRGxCLHFDQUFmO0FBR0EsY0FBTTJJLElBQUksR0FBR0QsTUFBTSxDQUFDMUYsUUFBUCxDQUNYMEYsTUFBTSxDQUFDMUYsUUFBUCxDQUFnQmlCLE1BQWhCLEdBQXlCLENBRGQsQ0FBYjs7QUFHQSxjQUNFMEUsSUFBSSxDQUFDQyxVQUFMLEdBQWtCNUgsT0FBTyxDQUFDNkgsV0FBUixHQUFzQixFQUF4QyxJQUNBLENBQUM3RCxjQURELElBRUFxRCxTQUZBLElBR0FsRixLQUhBLElBSUFrRixTQUFTLENBQUNwRSxNQUFWLEdBQW1CZCxLQUFLLENBQUNjLE1BTDNCLEVBTUU7QUFDQSxrQkFBS2hCLFFBQUwsQ0FBYztBQUNaK0IsY0FBQUEsY0FBYyxFQUFFO0FBREosYUFBZDtBQUdELFdBVkQsTUFVTyxJQUNMMkQsSUFBSSxDQUFDQyxVQUFMLEdBQWtCNUgsT0FBTyxDQUFDNkgsV0FBUixHQUFzQixFQUF4QyxJQUNBN0QsY0FEQSxJQUVBcUQsU0FGQSxJQUdBbEYsS0FIQSxJQUlBa0YsU0FBUyxDQUFDcEUsTUFBVixHQUFtQmQsS0FBSyxDQUFDYyxNQUxwQixFQU1MO0FBQ0Esa0JBQUtoQixRQUFMLENBQWM7QUFDWitCLGNBQUFBLGNBQWMsRUFBRTtBQURKLGFBQWQ7QUFHRDtBQUNGLFNBL0JELENBK0JFLE9BQU84RCxLQUFQLEVBQWMsQ0FBRTtBQUNuQjtBQUNGLEtBM2ZvQzs7QUFBQSxRQUUzQjNGLE1BRjJCLEdBRUh0QyxLQUZHLENBRTNCc0MsS0FGMkI7QUFBQSxRQUVwQjRGLFlBRm9CLEdBRUhsSSxLQUZHLENBRXBCa0ksWUFGb0I7O0FBR25DLFFBQU1wRixXQUFVLEdBQUdSLE1BQUssS0FBSyxJQUFWLEdBQWlCQSxNQUFqQixHQUF5QjRGLFlBQTVDOztBQUVBLFVBQUt4SCxLQUFMLEdBQWE7QUFDWGEsTUFBQUEsSUFBSSxFQUFFNEcsSUFBSSxDQUFDQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLFNBQTNCLENBQXFDLENBQXJDLEVBQXdDLENBQXhDLENBREs7QUFFWGhHLE1BQUFBLEtBQUssRUFBRVEsV0FGSTtBQUdYcUIsTUFBQUEsY0FBYyxFQUFFO0FBSEwsS0FBYjtBQUxtQztBQVVwQzs7Ozs2QkFtZmU7QUFBQTs7QUFBQSx5QkFxQlYsS0FBS25FLEtBckJLO0FBQUEsVUFFWnVJLG9CQUZZLGdCQUVaQSxvQkFGWTtBQUFBLFVBR1pwRyxRQUhZLGdCQUdaQSxRQUhZO0FBQUEsVUFJWnlFLFNBSlksZ0JBSVpBLFNBSlk7QUFBQSxVQUtaNEIsaUJBTFksZ0JBS1pBLGlCQUxZO0FBQUEsVUFNWmYsV0FOWSxnQkFNWkEsV0FOWTtBQUFBLFVBT1p2RCxXQVBZLGdCQU9aQSxXQVBZO0FBQUEsVUFRWnhCLFFBUlksZ0JBUVpBLFFBUlk7QUFBQSxVQVNaK0Ysd0JBVFksZ0JBU1pBLHVCQVRZO0FBQUEsVUFVWkMsU0FWWSxnQkFVWkEsU0FWWTtBQUFBLFVBV1p2QixXQVhZLGdCQVdaQSxXQVhZO0FBQUEsVUFZWndCLFNBWlksZ0JBWVpBLFNBWlk7QUFBQSxVQWFacEUsWUFiWSxnQkFhWkEsWUFiWTtBQUFBLFVBY1o2QyxhQWRZLGdCQWNaQSxhQWRZO0FBQUEsVUFlWnZFLGdCQWZZLGdCQWVaQSxnQkFmWTtBQUFBLFVBZ0JaeUQsU0FoQlksZ0JBZ0JaQSxTQWhCWTtBQUFBLFVBaUJac0MsbUJBakJZLGdCQWlCWkEsbUJBakJZO0FBQUEsVUFrQlp0SCxVQWxCWSxnQkFrQlpBLFVBbEJZO0FBQUEsVUFtQlpsQixRQW5CWSxnQkFtQlpBLFFBbkJZO0FBQUEsVUFvQlR5SSxVQXBCUzs7QUF1QmQsVUFBTWpELFNBQWMsR0FBRyxzQkFBS2lELFVBQUwsRUFBaUIsQ0FDdEMsVUFEc0MsRUFFdEMsVUFGc0MsRUFHdEMsY0FIc0MsRUFJdEMsT0FKc0MsQ0FBakIsQ0FBdkI7QUF2QmMseUJBOEJrRCxLQUFLbkksS0E5QnZEO0FBQUEsVUE4Qk5hLElBOUJNLGdCQThCTkEsSUE5Qk07QUFBQSxVQThCQUMsc0JBOUJBLGdCQThCQUEsc0JBOUJBO0FBQUEsVUE4QndCYyxLQTlCeEIsZ0JBOEJ3QkEsS0E5QnhCO0FBQUEsVUE4QitCNkIsY0E5Qi9CLGdCQThCK0JBLGNBOUIvQjtBQWdDZCxVQUFNMkUsUUFBUSxHQUFHLDRCQUFXbEMsU0FBWCxnQ0FDWHpILE1BRFcsb0JBQ2EsQ0FBQ2lJLGFBRGQsRUFBakI7QUFJQSxVQUFJMkIsUUFBYSxHQUFHckcsUUFBcEI7O0FBQ0EsVUFBSUEsUUFBSixFQUFjO0FBQ1pxRyxRQUFBQSxRQUFRLEdBQ04saUNBQ0U7QUFDRSxVQUFBLEtBQUssRUFBQyxJQURSO0FBRUUsVUFBQSxNQUFNLEVBQUMsSUFGVDtBQUdFLFVBQUEsU0FBUyxZQUFLNUosTUFBTDtBQUhYLFdBS0U7QUFDRSxVQUFBLENBQUMsRUFBQyxHQURKO0FBRUUsVUFBQSxDQUFDLEVBQUMsR0FGSjtBQUdFLFVBQUEsS0FBSyxFQUFDLElBSFI7QUFJRSxVQUFBLE1BQU0sRUFBQyxHQUpUO0FBS0UsVUFBQSxFQUFFLEVBQUMsSUFMTDtBQU1FLFVBQUEsSUFBSSxFQUFDLE1BTlA7QUFPRSxVQUFBLFFBQVEsRUFBQztBQVBYLFVBTEYsQ0FERixFQWdCRTtBQUNFLFVBQUEsS0FBSyxFQUFDLElBRFI7QUFFRSxVQUFBLE1BQU0sRUFBQyxJQUZUO0FBR0UsVUFBQSxTQUFTLFlBQUtBLE1BQUw7QUFIWCxXQUtFO0FBQ0UsVUFBQSxDQUFDLEVBQUMsbU1BREo7QUFFRSxVQUFBLFFBQVEsRUFBQztBQUZYLFVBTEYsQ0FoQkYsQ0FERjtBQTZCRDs7QUFFRCxVQUFJbUQsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJzRCxRQUFBQSxTQUFTLENBQUN0RCxLQUFWLEdBQWtCQSxLQUFsQjtBQUNEOztBQUVELFVBQUlPLGdCQUFKLEVBQXNCO0FBQ3BCLFlBQU1tRyxTQUF3QixHQUFHLEVBQWpDOztBQUNBLFlBQUlwRCxTQUFTLENBQUN0RCxLQUFkLEVBQXFCO0FBQ25Cc0QsVUFBQUEsU0FBUyxDQUFDdEQsS0FBVixDQUFnQlMsT0FBaEIsQ0FBd0IsVUFBQ2xELENBQUQsRUFBWTtBQUNsQyxZQUFBLE1BQUksQ0FBQ1MsZ0JBQUwsQ0FBc0J5QyxPQUF0QixDQUE4QixVQUFDa0csQ0FBRCxFQUFPO0FBQ25DLGtCQUFNaEcsT0FBTyxHQUFHZ0csQ0FBQyxDQUFDL0YsS0FBRixDQUFRLElBQVIsQ0FBaEI7O0FBQ0Esa0JBQUlELE9BQU8sQ0FBQ0EsT0FBTyxDQUFDRyxNQUFSLEdBQWlCLENBQWxCLENBQVAsS0FBZ0N2RCxDQUFwQyxFQUF1QztBQUNyQ21KLGdCQUFBQSxTQUFTLENBQUMxRixJQUFWLENBQWUyRixDQUFmO0FBQ0Q7QUFDRixhQUxEO0FBTUQsV0FQRDtBQVFEOztBQUNEckQsUUFBQUEsU0FBUyxDQUFDdEQsS0FBVixHQUFrQjBHLFNBQWxCO0FBQ0Q7O0FBRUQsVUFBSTlFLFdBQVcsS0FBSyxJQUFoQixJQUF3QkMsY0FBNUIsRUFBNEM7QUFDMUMsWUFBTStFLEtBQUssR0FBRyxLQUFLakYsY0FBTCxFQUFkOztBQUNBLFlBQUlpRixLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQnRELFVBQUFBLFNBQVMsQ0FBQzFCLFdBQVYsR0FBd0JnRixLQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSTNFLFlBQUosRUFBa0I7QUFDaEJxQixRQUFBQSxTQUFTLENBQUMxQixXQUFWLEdBQXdCLENBQXhCO0FBQ0Q7O0FBRUQsVUFBTWlGLGFBQWEsR0FDakIsS0FBS3BELGVBQUwsQ0FBcUIzRixRQUFRLElBQUksS0FBS2tGLHFCQUFMLENBQTJCbkQsUUFBM0IsQ0FBakMsRUFBdUU7QUFDckVtRSxRQUFBQSxTQUFTLEVBQVRBO0FBRHFFLE9BQXZFLEtBRU0sRUFIUjtBQUtBLFdBQUtsRyxRQUFMLEdBQWdCK0ksYUFBaEI7QUFDQSxXQUFLOUksWUFBTCxHQUFvQjhJLGFBQWEsQ0FDOUJuRSxHQURpQixDQUNiLGlCQUEwRDtBQUFBLFlBQWhEN0IsR0FBZ0QsU0FBdkRiLEtBQXVEO0FBQUEsWUFBM0NHLFFBQTJDLFNBQTNDQSxRQUEyQztBQUFBLFlBQWpDcUUsZUFBaUMsU0FBakNBLGVBQWlDO0FBQUEsWUFBaEJELFNBQWdCLFNBQWhCQSxTQUFnQjs7QUFDN0QsWUFDRTFELEdBQUcsS0FBSytDLFNBQVIsSUFDQSxDQUFDekQsUUFERCxJQUVBLENBQUNxRSxlQUZELElBR0FELFNBQVMsS0FBSyxLQUpoQixFQUtFO0FBQ0EsaUJBQU8xRCxHQUFQO0FBQ0Q7O0FBQ0QsZUFBTytDLFNBQVA7QUFDRCxPQVhpQixFQVlqQjdDLE1BWmlCLENBWVYrRixPQVpVLENBQXBCO0FBZUEsVUFBTUMsVUFBVSxHQUFHRixhQUFhLENBQUNHLElBQWQsQ0FBbUIsVUFBQ3pKLENBQUQ7QUFBQTs7QUFBQSw4QkFBT0EsQ0FBQyxDQUFDc0MsUUFBVCxnREFBTyxZQUFZaUIsTUFBbkI7QUFBQSxPQUFuQixDQUFuQjtBQUVBLGFBQ0Usb0JBQUMsNkJBQUQsQ0FBZSxRQUFmLFFBQ0c7QUFBQTs7QUFBQSxZQUFzQm1HLHdCQUF0QixTQUFHZixpQkFBSDtBQUFBLGVBQ0M7QUFDRSxVQUFBLFNBQVMsRUFBRSxzQ0FDTnJKLE1BRE0sc0JBQ1lBLE1BRFosc0JBQzhCb0MsSUFEOUIsK0RBR0hwQyxNQUhHLHNCQUd1QixNQUFJLENBQUM4RSxjQUFMLE9BQTBCLElBSGpELDJDQUlIOUUsTUFKRyxxQkFJc0JzSSxXQUp0QiwyQ0FLSHRJLE1BTEcsNEJBSzZCLENBQUMsQ0FBQ29GLFlBTC9CLGlCQURiO0FBU0UsVUFBQSxHQUFHLEVBQUUsTUFBSSxDQUFDekQ7QUFUWixXQVdHUSxVQUFVLElBQUlFLHNCQUFkLElBQ0Msb0JBQUMsa0JBQUQ7QUFBUSxVQUFBLEdBQUcsRUFBRSxNQUFJLENBQUNYLFVBQWxCO0FBQThCLFVBQUEsU0FBUyxFQUFFVztBQUF6QyxXQUNHRixVQURILENBWkosRUFnQkUsb0JBQUMsd0JBQUQ7QUFDRSxVQUFBLG9CQUFvQixFQUNsQjhGLGFBQWEsR0FBR21CLG9CQUFILEdBQTBCLEtBRjNDO0FBSUUsVUFBQSxTQUFTLEVBQUVPLFFBSmI7QUFLRSxVQUFBLGlCQUFpQixFQUFFLHNDQUFjM0osTUFBZCx1QkFBaUNvQyxJQUFqQywrREFDYnBDLE1BRGEseUJBQ2dCdUQsUUFEaEIsMkNBRWJ2RCxNQUZhLHVCQUVjLENBQUN1RCxRQUZmLDJDQUdidkQsTUFIYSxvQkFHV21ILFNBSFgsMkNBSWJuSCxNQUphLDZCQUlvQixDQUFDa0ssVUFKckIsaUJBTHJCO0FBV0UsVUFBQSxrQkFBa0IsRUFDaEJYLFNBQVMsSUFBSSw0QkFBYztBQUFFYyxZQUFBQSxTQUFTLEVBQUU7QUFBYixXQUFkLEVBQW1DZCxTQUFuQyxDQVpqQjtBQWNFLFVBQUEsY0FBYyxFQUFFLE1BQUksQ0FBQ2hGLGNBZHZCO0FBZUUsVUFBQSxpQkFBaUIsRUFBRThFLGlCQUFpQixJQUFJZSx3QkFmMUM7QUFnQkUsVUFBQSxTQUFTLEVBQUUsb0JBQUMsZ0JBQUQ7QUFBTSxZQUFBLElBQUksRUFBQztBQUFYLFlBaEJiO0FBaUJFLFVBQUEsaUJBQWlCLEVBQUUsTUFBSSxDQUFDbEYsb0JBakIxQjtBQWtCRSxVQUFBLGVBQWUsRUFDYiwwQ0FDRSxvQkFBQyxnQkFBRDtBQUNFLFlBQUEsSUFBSSxFQUFDLGVBRFA7QUFFRSxZQUFBLEtBQUssRUFBQyw2QkFGUjtBQUdFLFlBQUEsS0FBSyxFQUFFO0FBQUVvRixjQUFBQSxXQUFXLEVBQUU7QUFBZjtBQUhULFlBREYsNkJBbkJKO0FBNEJFLFVBQUEsUUFBUSxFQUFFLE1BQUksQ0FBQ3BILFlBNUJqQjtBQTZCRSxVQUFBLFFBQVEsRUFBRSxNQUFJLENBQUNtQixZQTdCakI7QUE4QkUsVUFBQSxXQUFXLEVBQUUyRCxXQTlCZjtBQStCRSxVQUFBLFNBQVMsRUFBRWhJLE1BL0JiO0FBZ0NFLFVBQUEsR0FBRyxFQUFFLE1BQUksQ0FBQ3dCLFVBaENaO0FBaUNFLFVBQUEsVUFBVSxFQUFFLG9CQUFDLGdCQUFEO0FBQU0sWUFBQSxJQUFJLEVBQUMsUUFBWDtBQUFvQixZQUFBLFdBQVcsTUFBL0I7QUFBZ0MsWUFBQSxJQUFJLEVBQUU7QUFBdEMsWUFqQ2Q7QUFrQ0UsVUFBQSxtQkFBbUIsRUFDakJpSSxtQkFBbUIsSUFBSXZKLFVBQVUsQ0FBQ3VKLG1CQUFELENBbkNyQztBQXFDRSxVQUFBLFVBQVUsRUFBRWxHLFFBckNkO0FBc0NFLFVBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQzNCLGtCQXRDckI7QUF1Q0UsVUFBQSxjQUFjLEVBQUMsVUF2Q2pCO0FBd0NFLFVBQUEsYUFBYSxFQUFFZ0ksUUF4Q2pCO0FBeUNFLFVBQUEsa0JBQWtCLEVBQUMsT0F6Q3JCO0FBMENFLFVBQUEsY0FBYyxFQUFFLEVBMUNsQjtBQTJDRSxVQUFBLFVBQVUsRUFBRSxHQTNDZDtBQTRDRSxVQUFBLFFBQVEsRUFBRUksYUE1Q1o7QUE2Q0UsVUFBQSx1QkFBdUIsRUFBRSxpQ0FBQ2hJLE9BQUQsRUFBc0I7QUFJN0MsZ0JBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osY0FBQSxNQUFJLENBQUNxQyxZQUFMLENBQWtCLEVBQWxCO0FBQ0Q7O0FBQ0QsWUFBQSxNQUFJLENBQUN0QyxtQkFBTCxDQUF5QkMsT0FBekI7O0FBQ0EsZ0JBQUlzSCx3QkFBSixFQUE2QjtBQUMzQkEsY0FBQUEsd0JBQXVCLENBQUN0SCxPQUFELENBQXZCO0FBQ0Q7QUFDRjtBQXhESCxXQXlETXlFLFNBekROLEVBaEJGLEVBMkVHLENBQUMsQ0FBQytDLFNBQUYsSUFBZWpHLFFBQWYsSUFDQyxvQkFBQyxnQkFBRDtBQUFNLFVBQUEsSUFBSSxFQUFFaUcsU0FBWjtBQUF1QixVQUFBLFNBQVMsWUFBS3hKLE1BQUw7QUFBaEMsVUE1RUosQ0FERDtBQUFBLE9BREgsQ0FERjtBQXFGRDs7OztFQTUyQnNCb0csS0FBSyxDQUFDbUUsUzs7QUFBekIzSixVLENBQ1U0SixTLEdBQVk7QUFJeEJwQixFQUFBQSxvQkFBb0IsRUFBRXFCLHNCQUFVQyxJQUpSO0FBUXhCakQsRUFBQUEsU0FBUyxFQUFFZ0Qsc0JBQVVFLE1BUkc7QUFZeEI1QixFQUFBQSxZQUFZLEVBQUUwQixzQkFBVUcsU0FBVixDQUFvQixDQUFDSCxzQkFBVUUsTUFBWCxFQUFtQkYsc0JBQVVJLEtBQTdCLENBQXBCLENBWlU7QUFnQnhCdkgsRUFBQUEsUUFBUSxFQUFFbUgsc0JBQVVDLElBaEJJO0FBb0J4QnJCLEVBQUFBLGlCQUFpQixFQUFFb0Isc0JBQVVLLElBcEJMO0FBd0J4QnhDLEVBQUFBLFdBQVcsRUFBRW1DLHNCQUFVQyxJQXhCQztBQTRCeEIzRixFQUFBQSxXQUFXLEVBQUUwRixzQkFBVU0sTUE1QkM7QUFnQ3hCeEgsRUFBQUEsUUFBUSxFQUFFa0gsc0JBQVVDLElBaENJO0FBb0N4QmxILEVBQUFBLFFBQVEsRUFBRWlILHNCQUFVSyxJQXBDSTtBQXdDeEJ4QixFQUFBQSx1QkFBdUIsRUFBRW1CLHNCQUFVSyxJQXhDWDtBQTRDeEJ4RyxFQUFBQSxRQUFRLEVBQUVtRyxzQkFBVUssSUE1Q0k7QUFnRHhCdkIsRUFBQUEsU0FBUyxFQUFFa0Isc0JBQVVPLEtBQVYsQ0FBZ0IsQ0FDekIsS0FEeUIsRUFFekIsTUFGeUIsRUFHekIsT0FIeUIsRUFJekIsUUFKeUIsRUFLekIsU0FMeUIsRUFNekIsVUFOeUIsRUFPekIsWUFQeUIsRUFRekIsYUFSeUIsRUFTekIsU0FUeUIsRUFVekIsWUFWeUIsRUFXekIsVUFYeUIsRUFZekIsYUFaeUIsQ0FBaEIsQ0FoRGE7QUFpRXhCaEQsRUFBQUEsV0FBVyxFQUFFeUMsc0JBQVVFLE1BakVDO0FBcUV4QnZGLEVBQUFBLFlBQVksRUFBRXFGLHNCQUFVSyxJQXJFQTtBQXlFeEI3QyxFQUFBQSxhQUFhLEVBQUV3QyxzQkFBVUMsSUF6RUQ7QUE2RXhCbEIsRUFBQUEsU0FBUyxFQUFFaUIsc0JBQVVFLE1BN0VHO0FBaUZ4QmpILEVBQUFBLGdCQUFnQixFQUFFK0csc0JBQVVDLElBakZKO0FBcUZ4QnZELEVBQUFBLFNBQVMsRUFBRXNELHNCQUFVQyxJQXJGRztBQTRGeEJqQixFQUFBQSxtQkFBbUIsRUFBRWdCLHNCQUFVTyxLQUFWLENBQWdCLENBQ25DLFVBRG1DLEVBRW5DLGFBRm1DLEVBR25DLFlBSG1DLENBQWhCLENBNUZHO0FBb0d4QjdJLEVBQUFBLFVBQVUsRUFBRXNJLHNCQUFVaEosSUFwR0U7QUF3R3hCUixFQUFBQSxRQUFRLEVBQUV3SixzQkFBVUksS0F4R0k7QUE0R3hCMUgsRUFBQUEsS0FBSyxFQUFFc0gsc0JBQVVHLFNBQVYsQ0FBb0IsQ0FBQ0gsc0JBQVVFLE1BQVgsRUFBbUJGLHNCQUFVSSxLQUE3QixDQUFwQjtBQTVHaUIsQztBQUR0QmpLLFUsQ0FnSFVxSyxZLEdBQWlDO0FBQzdDN0IsRUFBQUEsb0JBQW9CLEVBQUUsS0FEdUI7QUFFN0MzQixFQUFBQSxTQUFTLEVBQUVWLFNBRmtDO0FBRzdDZ0MsRUFBQUEsWUFBWSxFQUFFLElBSCtCO0FBSTdDekYsRUFBQUEsUUFBUSxFQUFFLEtBSm1DO0FBSzdDK0YsRUFBQUEsaUJBQWlCLEVBQUUsSUFMMEI7QUFNN0NmLEVBQUFBLFdBQVcsRUFBRSxLQU5nQztBQU83Q3ZELEVBQUFBLFdBQVcsRUFBRSxJQVBnQztBQVE3Q3hCLEVBQUFBLFFBQVEsRUFBRSxJQVJtQztBQVM3Q0MsRUFBQUEsUUFBUSxFQUFFdkQsSUFUbUM7QUFVN0NxSixFQUFBQSx1QkFBdUIsRUFBRXJKLElBVm9CO0FBVzdDcUUsRUFBQUEsUUFBUSxFQUFFckUsSUFYbUM7QUFZN0NzSixFQUFBQSxTQUFTLEVBQUUsWUFaa0M7QUFhN0N2QixFQUFBQSxXQUFXLEVBQUUsS0FiZ0M7QUFjN0M1QyxFQUFBQSxZQUFZLEVBQUUsSUFkK0I7QUFlN0M2QyxFQUFBQSxhQUFhLEVBQUUsSUFmOEI7QUFnQjdDdUIsRUFBQUEsU0FBUyxFQUFFLE1BaEJrQztBQWlCN0M5RixFQUFBQSxnQkFBZ0IsRUFBRSxLQWpCMkI7QUFrQjdDeUQsRUFBQUEsU0FBUyxFQUFFLEtBbEJrQztBQW1CN0NzQyxFQUFBQSxtQkFBbUIsRUFBRSxhQW5Cd0I7QUFvQjdDdEgsRUFBQUEsVUFBVSxFQUFFNEUsU0FwQmlDO0FBcUI3QzlGLEVBQUFBLFFBQVEsRUFBRThGLFNBckJtQztBQXNCN0M1RCxFQUFBQSxLQUFLLEVBQUU7QUF0QnNDLEM7O0FBaEgzQ3ZDLFUsQ0F5SVVzSyx3QixHQUEyQixpQkFBaUM7QUFBQSxNQUE5Qi9ILEtBQThCLFNBQTlCQSxLQUE4Qjs7QUFDeEUsTUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsV0FBTztBQUNMQSxNQUFBQSxLQUFLLEVBQUxBO0FBREssS0FBUDtBQUdEOztBQUNELFNBQU8sSUFBUDtBQUNELEM7O0FBaEpHdkMsVSxDQWtKVXVLLFEsR0FBNEJBLHNCO2VBNnRCN0J2SyxVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJjVHJlZVNlbGVjdCwge1xuICBTSE9XX0FMTCxcbiAgU0hPV19QQVJFTlQsXG4gIFNIT1dfQ0hJTEQsXG4gIFRyZWVOb2RlLFxufSBmcm9tIFwicmMtdHJlZS1zZWxlY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG4vKipcbiAqIGExIOaYr+WQpuWMheWQqyBhMlxuICovXG5jb25zdCBpc0FycmF5SW5jbHVkZXMgPSAoXG4gIGExOiBSZWFjdC5SZWFjdFRleHRbXSxcbiAgYTI6IFJlYWN0LlJlYWN0VGV4dFtdXG4pOiBib29sZWFuID0+IHtcbiAgaWYgKCFhMSB8fCAhYTIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBhMi5ldmVyeSgobykgPT4gYTEuaW5jbHVkZXMobykpXG59XG5cbmV4cG9ydCB0eXBlIFRyZWVOb2RlVmFsdWUgPSBSZWFjdC5SZWFjdFRleHRbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YU5vZGUge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHRcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgbGFiZWw/OiBSZWFjdC5SZWFjdE5vZGVcbiAga2V5PzogUmVhY3QuUmVhY3RUZXh0XG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBkaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgcG9wb3Zlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIGNoaWxkcmVuPzogRGF0YU5vZGVbXVxufVxuXG5leHBvcnQgdHlwZSBUcmVlRGF0YSA9IERhdGFOb2RlW10gfCB1bmRlZmluZWRcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIGhlaWdodEZpeGVkPzogYm9vbGVhblxuICBtYXhUYWdDb3VudD86IG51bGwgfCBudW1iZXJcbiAgbXVsdGlwbGU/OiBib29sZWFuXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBUcmVlTm9kZVZhbHVlLCB0aXRsZUxpc3Q6IFJlYWN0LlJlYWN0Tm9kZVtdKSA9PiB2b2lkXG4gIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgb25TZWFyY2g/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgcmVzdWx0UmVuZGVyPzogbnVsbCB8ICgodmFsdWVzOiBJVHJlZU5vZGVbXSkgPT4gSlNYLkVsZW1lbnQpXG4gIHJlc3VsdFZpc2libGU/OiBib29sZWFuXG4gIHNhbWVWYWx1ZUVuYWJsZWQ/OiBib29sZWFuXG4gIHNlbGVjdEFsbD86IGJvb2xlYW5cbiAgc2hvd0NoZWNrZWRTdHJhdGVneT86IFwic2hvdy1hbGxcIiB8IFwic2hvdy1jaGlsZFwiIHwgXCJzaG93LXBhcmVudFwiXG4gIHRvcENvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdHJlZURhdGE/OiBUcmVlRGF0YVxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFN0YXRlIHtcbiAgaGFzaDogc3RyaW5nXG4gIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQ/OiBIVE1MRGl2RWxlbWVudFxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbiAgbWF4SGVpZ2h0Rml4ZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY2hlY2thYmxlPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICB0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZVxuICBrZXk/OiBzdHJpbmdcbiAgZXZlbnRLZXk/OiBzdHJpbmdcbiAgaXNMZWFmPzogYm9vbGVhblxuICBjaGVja2VkPzogYm9vbGVhblxuICBleHBhbmRlZD86IGJvb2xlYW5cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgc2VsZWN0ZWQ/OiBib29sZWFuXG4gIHNlbGVjdGFibGU/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5qCR5b2i6YCJ5oupXG4gKi9cbmNsYXNzIFRyZWVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRyZWVTZWxlY3RQcm9wcywgSVRyZWVTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlgLzooqvpgInmi6nlkI7vvIzmmK/lkKbpnIDopoHmuIXnqbrmkJzntKLmoYZcbiAgICAgKi9cbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOm7mOiupOmAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgICAqL1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpq5jluqbmmK/lkKblm7rlrprkuIDooYzvvIxUcmVlU2VsZWN0IOWwhuagueaNruWGheWuueWMuuWfn+WuveW6puiHquWKqOWwhue7k+aenOaUtui1t++8jOW8gOWQr+i/meS4qiBQcm9wIOWQjiBUcmVlU2VsZWN0IOS8muW/veeVpSBtYXhUYWdDb3VudCBQcm9wXG4gICAgICovXG4gICAgaGVpZ2h0Rml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWfvvIzlpoLmnpzotoXov4fkuobliJnku6XmlLbotbfnmoTlvaLlvI/lh7rnjrBcbiAgICAgKi9cbiAgICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblpJrpgInmqKHlvI9cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5YC85Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDkuIvmi4kgdmlzaWJsZSDlj5jljJbml7bnmoTlm57osIPvvIzlj4LmlbA6IGJvb2xlYW5cbiAgICAgKi9cbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pCc57Si5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7lvLnlh7rkvY3nva5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u6L6T5YWl5qGG55qE6buY6K6k5YaF5a65XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572u6Ieq5a6a5LmJ55qE57uT5p6c5riy5p+TXG4gICAgICovXG4gICAgcmVzdWx0UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblhoXnmoTmoIfnrb7mmK/lkKbmmL7npLrvvIzmraQgUHJvcCDnlKjkuo7mg7PopoHlsIbnu5PmnpzljLrlsZXnpLrlnKjliKvnmoTlnLDmlrnnmoTpnIDmsYJcbiAgICAgKi9cbiAgICByZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprliLbmoJHlvaLpgInmi6nlmajnmoRpY29uXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWFgeiuuOebuOWQjOWAvO+8jOS9v+eUqOaDheWGte+8muWmguWQjOS4gOS4quS6uuWPr+iDveWtmOWcqOS6juS4pOS4que7hOe7h+aetuaehOS4re+8jOWmguaenOS9v+eUqOatpCBQcm9w77yM6K+35ZCM5pe25L2/55SoIHJlc3VsdFZpc2libGU9e2ZhbHNlfVxuICAgICAqL1xuICAgIHNhbWVWYWx1ZUVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuW8gOWQr+WFqOmAieWKn+iDvVxuICAgICAqL1xuICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6a5LmJ6YCJ5Lit6aG55Zue5aGr55qE5pa55byP77yaXG4gICAgICogMS4gc2hvdy1hbGzvvJrmmL7npLrljIXmi6zniLboioLngrnnmoTmiYDmnInpgInkuK3oioLngrnvvJtcbiAgICAgKiAyLiBzaG93LXBhcmVudO+8muWPquaYvuekuueItuiKgueCue+8m1xuICAgICAqIDMuIHNob3ctY2hpbGTvvJrlj6rmmL7npLrlrZDoioLngrnjgILpu5jorqTlgLzvvJpzaG93LXBhcmVudFxuICAgICAqL1xuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInNob3ctYWxsXCIsXG4gICAgICBcInNob3ctcGFyZW50XCIsXG4gICAgICBcInNob3ctY2hpbGRcIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDkuIvmi4nmoYbpobbpg6jmmL7npLrnmoToh6rlrprkuYnlhYPntKBcbiAgICAgKi9cbiAgICB0b3BDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiB0cmVlTm9kZXMg5pWw5o2u77yM5qC85byP5Y+C54WnIGludGVyZmFjZSBEYXRhTm9kZVxuICAgICAqL1xuICAgIHRyZWVEYXRhOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVHJlZVNlbGVjdFByb3BzID0ge1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIGhlaWdodEZpeGVkOiBmYWxzZSxcbiAgICBtYXhUYWdDb3VudDogbnVsbCxcbiAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBvblNlYXJjaDogbm9vcCxcbiAgICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiLFxuICAgIHJlc3VsdFJlbmRlcjogbnVsbCxcbiAgICByZXN1bHRWaXNpYmxlOiB0cnVlLFxuICAgIHJpZ2h0SWNvbjogXCJtZW51XCIsXG4gICAgc2FtZVZhbHVlRW5hYmxlZDogZmFsc2UsXG4gICAgc2VsZWN0QWxsOiBmYWxzZSxcbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBcInNob3ctcGFyZW50XCIsXG4gICAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICAgIHRyZWVEYXRhOiB1bmRlZmluZWQsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7IHZhbHVlIH06IElUcmVlU2VsZWN0UHJvcHMpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBUcmVlTm9kZTogdHlwZW9mIFRyZWVOb2RlID0gVHJlZU5vZGVcblxuICBwdWJsaWMgc2VsZWN0OiB0eXBlb2YgUmNUcmVlU2VsZWN0XG5cbiAgcHVibGljIHBvcnRhbDogUmVhY3QuUmVhY3ROb2RlXG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHRyZWVEYXRhOiBEYXRhTm9kZVtdXG5cbiAgcHVibGljIHRyZWVWYWx1ZUFsbDogYW55W11cblxuICBwdWJsaWMgdHJlZVZhbHVlRmxhdHRlbjogYW55W10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVHJlZVNlbGVjdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyB2YWx1ZSwgZGVmYXVsdFZhbHVlIH0gPSBwcm9wc1xuICAgIGNvbnN0IHZhbHVlU3RhdGUgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzaDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDMsIDgpLFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgICBtYXhIZWlnaHRGaXhlZDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMsXG4gICAgbmV4dFN0YXRlOiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIHNhdmVTZWxlY3QgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5zZWxlY3QgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVBvcnRhbCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnBvcnRhbCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlV3JhcHBlciA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMud3JhcHBlciA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTd2l0Y2hlckljb24gPSAoeyBpc0xlYWYsIGxvYWRpbmcgfTogSVRyZWVOb2RlUHJvcHMpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIHNpemU9XCJtaW5pXCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtc3dpdGNoZXItaWNvbmB9IC8+XG4gICAgfVxuICAgIGlmIChpc0xlYWYpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8SWNvbiBpY29uPVwidHJpYW5nbGUtcmlnaHRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1zd2l0Y2hlci1pY29uYH0gLz5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3BDb250ZW50IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAvKipcbiAgICAgICAgICog5LiL5ouJ5qGG5pi+56S6ICYmIOS8oOWFpeS6humhtumDqOiHquWumuS5ieWFg+e0oCAmJiDpppbmrKHmt7vliqBcbiAgICAgICAgICovXG4gICAgICAgIGlmICh2aXNpYmxlICYmIHRvcENvbnRlbnQgJiYgIXRvcENvbnRlbnRQb3J0YWxUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YFxuICAgICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZWwub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd24uaW5zZXJ0QmVmb3JlKGVsLCBkcm9wZG93bi5jaGlsZHJlblswXSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0b3BDb250ZW50UG9ydGFsVGFyZ2V0OiBlbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIDApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlID0gKFxuICAgIHZhbHVlOiBUcmVlTm9kZVZhbHVlLFxuICAgIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW11cbiAgKSA9PiB7XG4gICAgbGV0IHZhbHVlUGFyYW0gPSBbXSBhcyBSZWFjdC5SZWFjdFRleHRbXVxuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICBzYW1lVmFsdWVFbmFibGVkLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZTogdmFsdWVTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGlmIChzYW1lVmFsdWVFbmFibGVkKSB7XG4gICAgICAgIHZhbHVlPy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3BsaXRlZCA9IGAke3Z9YC5zcGxpdChcIl9fXCIpXG4gICAgICAgICAgY29uc3QgdmFsID0gc3BsaXRlZFtzcGxpdGVkLmxlbmd0aCAtIDFdXG4gICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHZhbHVlLmZpbHRlcigobykgPT4gYCR7b31gLmluY2x1ZGVzKGBfXyR7dmFsfWApKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGxlbmd0aCA9PT1cbiAgICAgICAgICAgIHRoaXMudHJlZVZhbHVlRmxhdHRlbi5maWx0ZXIoKG8pID0+IGAke299YC5pbmNsdWRlcyhgX18ke3ZhbH1gKSlcbiAgICAgICAgICAgICAgLmxlbmd0aFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8g6KGo56S65YWo5YyF5ZCr5LqG77yM5YiZ5L+d55WZXG4gICAgICAgICAgICB2YWx1ZVBhcmFtLnB1c2godmFsKVxuICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlU3RhdGU/LmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgICAgIHZhbHVlUGFyYW0ucHVzaCh2YWwpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZVBhcmFtID0gdmFsdWVcbiAgICAgIH1cblxuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIHZhbHVlUGFyYW0gPSBbLi4ubmV3IFNldCh2YWx1ZVBhcmFtKV1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlUGFyYW0gfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZVBhcmFtLCB0aXRsZUxpc3QpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25TZWFyY2ggfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgIG9uU2VhcmNoKHZhbClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbHRlclRyZWVOb2RlID0gKGlucHV0OiBzdHJpbmcsIHRyZWVOb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGtleSwgdGl0bGUsIHZhbHVlLCBkYXRhVGl0bGUgfSA9IHRyZWVOb2RlXG4gICAgaWYgKCFrZXkgfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhkYXRhVGl0bGUgfHwgdGl0bGUpLmluY2x1ZGVzKGlucHV0KVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ0NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlLCBtYXhIZWlnaHRGaXhlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKFxuICAgICAgKCFtYXhUYWdDb3VudCB8fCAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDw9IG1heFRhZ0NvdW50KSAmJlxuICAgICAgIW1heEhlaWdodEZpeGVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlbGVjdEFsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlOiB2YWx1ZVByb3AsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChpc0FycmF5SW5jbHVkZXModmFsdWUgfHwgW10sIHRoaXMudHJlZVZhbHVlQWxsKSkge1xuICAgICAgLyoqXG4gICAgICAgKiDlt7LlhajpgIlcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIOa4heepulxuICAgICAgICovXG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy50cmVlVmFsdWVBbGwgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh0aGlzLnRyZWVWYWx1ZUFsbCwgW10pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ1BsYWNlaG9sZGVyID0gKG5vZGVzOiBJVHJlZU5vZGVbXSkgPT4ge1xuICAgIGlmICghdGhpcy5zZWxlY3QpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHJlc3VsdFJlbmRlciwgdmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJldHVybiByZXN1bHRSZW5kZXIobm9kZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IG5vZGVzXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG4gICAgICAgICAgICBtYXhXaWR0aDogXCJjYWxjKDEwMCUgLSA1M3B4KVwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtub2Rlc1swXT8ubGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICDnrYkge2xlbmd0aH0g5LiqXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4LXBvcG92ZXItaXRlbS13cmFwcGVyYH0+XG4gICAgICAgICAgICB7bm9kZXMubWFwKCh7IGtleSwgZGlzYWJsZWQsIGxhYmVsIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXgtcG9wb3Zlci1pdGVtYH0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHshZGlzYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBub2Rlcy5tYXAoKG8pID0+IG8udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFscyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBub2Rlcy5tYXAoKG8pID0+IG8ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHMuc3BsaWNlKGksIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWxzLCBsYWJlbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heFBvcG92ZXJgfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heFBsYWNlaG9sZGVyYH1cbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7cGxhY2Vob2xkZXJUZXh0fVxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEgPSAobm9kZXM6IGFueSk6IERhdGFOb2RlW10gPT5cbiAgICB0b0FycmF5KG5vZGVzKVxuICAgICAgLm1hcCgobm9kZTogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHBvcG92ZXIsXG4gICAgICAgICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIC4uLnJlc3RQcm9wc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0gPSBub2RlIGFzIFJlYWN0LlJlYWN0RWxlbWVudFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlpoLmnpzmnIkgcG9wb3ZlciDliJnlnKjov5nph4zljIXoo4XkuIDkuIsgdGl0bGVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGRhdGFUaXRsZTogdGl0bGUsXG4gICAgICAgICAgdGl0bGU6IHBvcG92ZXIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlcmB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPFBvcG92ZXIgcG9wdXA9e3BvcG92ZXJ9IHBsYWNlbWVudD1cInJpZ2h0XCIgey4uLnBvcG92ZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJgfSAvPlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICApLFxuICAgICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IHRoaXMuY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKVxuICAgICAgICBpZiAoY2hpbGREYXRhLmxlbmd0aCkge1xuICAgICAgICAgIGRhdGEuY2hpbGRyZW4gPSBjaGlsZERhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoZGF0YSkgPT4gZGF0YSlcblxuICBwdWJsaWMgY29udmVydFRyZWVEYXRhID0gKFxuICAgIGRhdGFOb2RlUGFyYW06IFRyZWVEYXRhLFxuICAgIG9wdGlvbnM6IHsgc2VsZWN0QWxsPzogYm9vbGVhbiB9ID0ge31cbiAgKTogVHJlZURhdGEgPT4ge1xuICAgIGNvbnN0IHsgc2FtZVZhbHVlRW5hYmxlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghZGF0YU5vZGVQYXJhbSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgICBjb25zdCBkYXRhTm9kZSA9IFsuLi5kYXRhTm9kZVBhcmFtXVxuICAgIGNvbnN0IHsgdmFsdWU6IHZhbHVlU3RhdGUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkID0gaXNBcnJheUluY2x1ZGVzKHZhbHVlU3RhdGUgfHwgW10sIHRoaXMudHJlZVZhbHVlQWxsKVxuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSAhaXNBbGxTZWxlY3RlZCAmJiAhIXZhbHVlU3RhdGU/Lmxlbmd0aFxuXG4gICAgaWYgKGRhdGFOb2RlWzBdPy5rZXkgPT09IGAke3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGxgKSB7XG4gICAgICByZXR1cm4gZGF0YU5vZGVcbiAgICB9XG5cbiAgICBpZiAoc2FtZVZhbHVlRW5hYmxlZCAmJiAhZGF0YU5vZGVbMF0/LmRhdGFUaXRsZSkge1xuICAgICAgdGhpcy50cmVlVmFsdWVGbGF0dGVuID0gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IHNlbGVjdEFsbCB9ID0gb3B0aW9uc1xuXG4gICAgY29uc3QgcHJvY2VzcyA9IChub2RlOiBEYXRhTm9kZVtdLCBwYXJlbnRWYWx1ZT86IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgICAgbm9kZS5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGF0YUNoaWxkcmVuLFxuICAgICAgICAgIGRhdGFUaXRsZSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBwb3BvdmVyLFxuICAgICAgICAgIHBvcG92ZXJQcm9wcyA9IHt9LFxuICAgICAgICB9ID0gb1xuICAgICAgICBpZiAoZGF0YVRpdGxlICYmIGRhdGFDaGlsZHJlbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhVGl0bGUg55So5LqO5pyJIHBvcG92ZXIg55qE5oOF5Ya15LiL55qE5pCc57SiXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICBvLmRhdGFUaXRsZSA9IHRpdGxlXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWKoOWFpSBkYXRhQ2hpbGRyZW4g5piv5Li65LqG5pSv5oyBIGxvYWREYXRhIOeahOS9v+eUqFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICBvLmRhdGFDaGlsZHJlbiA9IDFcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvLmtleSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG8udmFsdWUgPSBrZXlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2FtZVZhbHVlRW5hYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IGAke3BhcmVudFZhbHVlID8gYCR7cGFyZW50VmFsdWV9X19gIDogXCJcIn0ke3ZhbHVlfWBcbiAgICAgICAgICBvLmtleSA9IG5ld1ZhbFxuICAgICAgICAgIG8udmFsdWUgPSBuZXdWYWxcbiAgICAgICAgICBpZiAoIXRoaXMudHJlZVZhbHVlRmxhdHRlbi5pbmNsdWRlcyhuZXdWYWwpKSB7XG4gICAgICAgICAgICB0aGlzLnRyZWVWYWx1ZUZsYXR0ZW4ucHVzaChuZXdWYWwpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvcG92ZXIpIHtcbiAgICAgICAgICBvLnRpdGxlID0gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXJgfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyLXBsYWNlaG9sZGVyYH0gLz5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgIHByb2Nlc3MoY2hpbGRyZW4sIG8udmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvY2VzcyhkYXRhTm9kZSlcblxuICAgIGlmIChzZWxlY3RBbGwpIHtcbiAgICAgIGRhdGFOb2RlLnVuc2hpZnQoe1xuICAgICAgICB0aXRsZTogKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbC1pbm5lcmB9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbGVjdEFsbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDlhajpgIlcbiAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17aW5kZXRlcm1pbmF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICksXG4gICAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbGAsXG4gICAgICAgIGtleTogYCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbGAsXG4gICAgICAgIGNoZWNrYWJsZTogZmFsc2UsXG4gICAgICAgIGRpc2FibGVDaGVja2JveDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFOb2RlXG4gIH1cblxuICBsaXN0ZW5JbnB1dENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXQ6IHsgdmFsdWUgfSxcbiAgICAgIGtleUNvZGUsXG4gICAgfSA9IGVcblxuICAgIGlmIChrZXlDb2RlID09PSA4ICYmIHZhbHVlID09PSBcIlwiKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQsIHBsYWNlaG9sZGVyLCByZXN1bHRWaXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICAvLyDnpoHmraIgdHJlZS1zZWxlY3Qg6ZSu55uY5Zue5Yig5Lya5b2x5ZONIHZhbHVlXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmxpc3RlbklucHV0Q2hhbmdlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwgJiYgdmFsdWUpIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICBpZiAoIXJlc3VsdFZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoXG4gICAgXzogSVRyZWVTZWxlY3RQcm9wcyxcbiAgICB7IHZhbHVlOiB2YWx1ZVByZXYgfTogSVRyZWVTZWxlY3RTdGF0ZVxuICApID0+IHtcbiAgICBjb25zdCB7IHJlc3VsdFZpc2libGUsIGhlaWdodEZpeGVkLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaGFzaCwgdmFsdWUsIG1heEhlaWdodEZpeGVkIH0gPSB0aGlzLnN0YXRlXG4gICAgLyoqXG4gICAgICogcmVzdWx0VmlzaWJsZSDkuLogZmFsc2Ug5pe277yMIHNlbGVjdG9yIOmrmOW6puS4jeS8muaUueWPmOOAglxuICAgICAqIOagueaNruaIkeeahOe7j+mqjCBQb3B1cCDop6blj5Hph43mlrDlrprkvY3nmoTml7bmnLrmmK/vvJpcbiAgICAgKiAxLiB3aW5kb3cgcmVzaXplXG4gICAgICogMi4gcmVzaXplIG9ic2VydmVyIOS6hiBzZWxlY3RvclxuICAgICAqIOWboOatpOi/memHjOaJi+WKqOinpuWPkSByZXNpemVcbiAgICAgKi9cbiAgICBpZiAoIXJlc3VsdFZpc2libGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpXG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgaWYgKGhlaWdodEZpeGVkICYmIHZhbHVlUHJldj8ubGVuZ3RoICE9PSB2YWx1ZT8ubGVuZ3RoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLiR7cHJlZml4fS13cmFwcGVyXyR7aGFzaH0gLiR7cHJlZml4fS1zZWxlY3Rpb24tb3ZlcmZsb3dgXG4gICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgY29uc3Qgc3VmZml4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLiR7cHJlZml4fS13cmFwcGVyXyR7aGFzaH0gLiR7cHJlZml4fS1zZWxlY3Rpb24tb3ZlcmZsb3ctaXRlbS1zdWZmaXhgXG4gICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgY29uc3QgbGFzdCA9IHN1ZmZpeC5jaGlsZHJlbltcbiAgICAgICAgICBzdWZmaXguY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICBdIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICBsYXN0Lm9mZnNldExlZnQgPiB3cmFwcGVyLm9mZnNldFdpZHRoIC0gMzAgJiZcbiAgICAgICAgICAhbWF4SGVpZ2h0Rml4ZWQgJiZcbiAgICAgICAgICB2YWx1ZVByZXYgJiZcbiAgICAgICAgICB2YWx1ZSAmJlxuICAgICAgICAgIHZhbHVlUHJldi5sZW5ndGggPCB2YWx1ZS5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtYXhIZWlnaHRGaXhlZDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGxhc3Qub2Zmc2V0TGVmdCA8IHdyYXBwZXIub2Zmc2V0V2lkdGggLSAzMCAmJlxuICAgICAgICAgIG1heEhlaWdodEZpeGVkICYmXG4gICAgICAgICAgdmFsdWVQcmV2ICYmXG4gICAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgICB2YWx1ZVByZXYubGVuZ3RoID4gdmFsdWUubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0Rml4ZWQ6IGZhbHNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgaGVpZ2h0Rml4ZWQsXG4gICAgICBtYXhUYWdDb3VudCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJpZ2h0SWNvbixcbiAgICAgIHJlc3VsdFJlbmRlcixcbiAgICAgIHJlc3VsdFZpc2libGUsXG4gICAgICBzYW1lVmFsdWVFbmFibGVkLFxuICAgICAgc2VsZWN0QWxsLFxuICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSxcbiAgICAgIHRvcENvbnRlbnQsXG4gICAgICB0cmVlRGF0YSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzOiBhbnkgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwib25DaGFuZ2VcIixcbiAgICAgIFwib25TZWFyY2hcIixcbiAgICAgIFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICBcInZhbHVlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCwgdmFsdWUsIG1heEhlaWdodEZpeGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCB7XG4gICAgICBbYCR7cHJlZml4fV9yZXN1bHRIaWRkZW5gXTogIXJlc3VsdFZpc2libGUsXG4gICAgfSlcblxuICAgIGxldCBjaGVja2JveDogYW55ID0gbXVsdGlwbGVcbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIGNoZWNrYm94ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZVN2Z2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgeD1cIjFcIlxuICAgICAgICAgICAgICB5PVwiNFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgcng9XCIuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1jaGVja2JveC1jaGVja2VkU3ZnYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTS42MTggNS44MjdhLjQ2My40NjMgMCAwIDEtLjAyLS42NzVsLjgwNC0uODA0YS41Mi41MiAwIDAgMSAuNzE2LS4wMUw0Ljc1IDYuNzVsNC45MjItNS42MjVhLjUxMy41MTMgMCAwIDEgLjcwNy0uMDZsLjc0Mi42MmEuNDc4LjQ3OCAwIDAgMSAuMDQ0LjY4N2wtNi4wOCA2Ljc1NmEuNTA2LjUwNiAwIDAgMS0uNzAzLjA0NUwuNjE4IDUuODI3elwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJlc3RQcm9wcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKHNhbWVWYWx1ZUVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IHRydWVWYWx1ZTogVHJlZU5vZGVWYWx1ZSA9IFtdXG4gICAgICBpZiAocmVzdFByb3BzLnZhbHVlKSB7XG4gICAgICAgIHJlc3RQcm9wcy52YWx1ZS5mb3JFYWNoKChvOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnRyZWVWYWx1ZUZsYXR0ZW4uZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRlZCA9IHAuc3BsaXQoXCJfX1wiKVxuICAgICAgICAgICAgaWYgKHNwbGl0ZWRbc3BsaXRlZC5sZW5ndGggLSAxXSA9PT0gbykge1xuICAgICAgICAgICAgICB0cnVlVmFsdWUucHVzaChwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXN0UHJvcHMudmFsdWUgPSB0cnVlVmFsdWVcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwgfHwgbWF4SGVpZ2h0Rml4ZWQpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRNYXhUYWdDb3VudCgpXG4gICAgICBpZiAoY291bnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gY291bnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSAwXG4gICAgfVxuXG4gICAgY29uc3QgdHJlZURhdGFGaW5hbCA9XG4gICAgICB0aGlzLmNvbnZlcnRUcmVlRGF0YSh0cmVlRGF0YSB8fCB0aGlzLmNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbiksIHtcbiAgICAgICAgc2VsZWN0QWxsLFxuICAgICAgfSkgfHwgW11cblxuICAgIHRoaXMudHJlZURhdGEgPSB0cmVlRGF0YUZpbmFsXG4gICAgdGhpcy50cmVlVmFsdWVBbGwgPSB0cmVlRGF0YUZpbmFsXG4gICAgICAubWFwKCh7IHZhbHVlOiB2YWwsIGRpc2FibGVkLCBkaXNhYmxlQ2hlY2tib3gsIGNoZWNrYWJsZSB9KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWwgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICFkaXNhYmxlQ2hlY2tib3ggJiZcbiAgICAgICAgICBjaGVja2FibGUgIT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuXG4gICAgLy8g5piv5ZCm5piv5aSa5bGC57qnXG4gICAgY29uc3QgbXVsdGlMZXZlbCA9IHRyZWVEYXRhRmluYWwuc29tZSgobykgPT4gby5jaGlsZHJlbj8ubGVuZ3RoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBgJHtwcmVmaXh9LXdyYXBwZXIgJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofWAsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS13cmFwcGVyLW1heFRhZ2BdOiB0aGlzLmdldE1heFRhZ0NvdW50KCkgIT09IG51bGwsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1maXhlZGBdOiBoZWlnaHRGaXhlZCxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS13cmFwcGVyLXJlc3VsdFJlbmRlcmBdOiAhIXJlc3VsdFJlbmRlcixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlV3JhcHBlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dG9wQ29udGVudCAmJiB0b3BDb250ZW50UG9ydGFsVGFyZ2V0ICYmIChcbiAgICAgICAgICAgICAgPFBvcnRhbCByZWY9e3RoaXMuc2F2ZVBvcnRhbH0gY29udGFpbmVyPXt0b3BDb250ZW50UG9ydGFsVGFyZ2V0fT5cbiAgICAgICAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFJjVHJlZVNlbGVjdFxuICAgICAgICAgICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT17XG4gICAgICAgICAgICAgICAgcmVzdWx0VmlzaWJsZSA/IGF1dG9DbGVhclNlYXJjaFZhbHVlIDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWRyb3Bkb3duXyR7aGFzaH1gLCB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tbXVsdGlwbGVgXTogbXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tc2luZ2xlYF06ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1hbGxgXTogc2VsZWN0QWxsLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLXNpbmdsZS1sZXZlbGBdOiAhbXVsdGlMZXZlbCxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGRyb3Bkb3duUG9wdXBBbGlnbj17XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50ICYmIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpbHRlclRyZWVOb2RlPXt0aGlzLmZpbHRlclRyZWVOb2RlfVxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICAgICAgICBpbnB1dEljb249ezxJY29uIGljb249XCJ0cmlhbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyPXt0aGlzLmdldE1heFRhZ1BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiZmlsZS1vdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS02MDApXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICDml6DljLnphY3poblcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeH1cbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWxlY3R9XG4gICAgICAgICAgICAgIHJlbW92ZUljb249ezxJY29uIGljb249XCJjYW5jZWxcIiBpbnRlcmFjdGl2ZSBzaXplPXsxNn0gLz59XG4gICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3k9e1xuICAgICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3kgJiYgc3RyYXRlZ2llc1tzaG93Q2hlY2tlZFN0cmF0ZWd5XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3dTZWFyY2g9e211bHRpcGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hlckljb249e3RoaXMucmVuZGVyU3dpdGNoZXJJY29ufVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgICAgdHJlZUNoZWNrYWJsZT17Y2hlY2tib3h9XG4gICAgICAgICAgICAgIHRyZWVOb2RlRmlsdGVyUHJvcD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICBsaXN0SGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgIHRyZWVEYXRhPXt0cmVlRGF0YUZpbmFsfVxuICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17KHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiAyMDIxMDMyMyB2aXNpYmxlIGZhbHNlIOaXtui+k+WFpeahhuS8muiiq+aDheWGte+8jOS9huayoeacieiwg+eUqCBvblNlYXJjaFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2goXCJcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgICAgaWYgKG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ISFyaWdodEljb24gJiYgbXVsdGlwbGUgJiYgKFxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXtyaWdodEljb259IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVTZWxlY3RcbiJdfQ==