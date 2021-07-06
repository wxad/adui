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

        valueParam = _toConsumableArray(new Set(valueParam));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsicHJlZml4Iiwibm9vcCIsInN0cmF0ZWdpZXMiLCJTSE9XX0FMTCIsIlNIT1dfQ0hJTEQiLCJTSE9XX1BBUkVOVCIsImlzQXJyYXlJbmNsdWRlcyIsImExIiwiYTIiLCJldmVyeSIsIm8iLCJpbmNsdWRlcyIsIlRyZWVTZWxlY3QiLCJwcm9wcyIsInNlbGVjdCIsInBvcnRhbCIsIndyYXBwZXIiLCJ0cmVlRGF0YSIsInRyZWVWYWx1ZUFsbCIsInRyZWVWYWx1ZUZsYXR0ZW4iLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsInNhdmVTZWxlY3QiLCJub2RlIiwic2F2ZVBvcnRhbCIsInNhdmVXcmFwcGVyIiwicmVuZGVyU3dpdGNoZXJJY29uIiwiaXNMZWFmIiwibG9hZGluZyIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwic2V0VGltZW91dCIsImZvcmNlVXBkYXRlIiwidG9wQ29udGVudCIsImhhc2giLCJ0b3BDb250ZW50UG9ydGFsVGFyZ2V0IiwiZHJvcGRvd24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJvbm1vdXNlZG93biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImluc2VydEJlZm9yZSIsImNoaWxkcmVuIiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsInRpdGxlTGlzdCIsInZhbHVlUGFyYW0iLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWVQcm9wIiwic2FtZVZhbHVlRW5hYmxlZCIsInZhbHVlU3RhdGUiLCJmb3JFYWNoIiwidiIsInNwbGl0ZWQiLCJzcGxpdCIsInZhbCIsImxlbmd0aCIsImZpbHRlciIsInB1c2giLCJTZXQiLCJoYW5kbGVTZWFyY2giLCJvblNlYXJjaCIsImZpbHRlclRyZWVOb2RlIiwiaW5wdXQiLCJ0cmVlTm9kZSIsImtleSIsInRpdGxlIiwiZGF0YVRpdGxlIiwiU3RyaW5nIiwiZ2V0TWF4VGFnQ291bnQiLCJtYXhUYWdDb3VudCIsIm1heEhlaWdodEZpeGVkIiwiaGFuZGxlU2VsZWN0QWxsIiwiZ2V0TWF4VGFnUGxhY2Vob2xkZXIiLCJub2RlcyIsInJlc3VsdFJlbmRlciIsInBsYWNlaG9sZGVyVGV4dCIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJsYWJlbCIsIm1hcCIsImkiLCJ2YWxzIiwic3BsaWNlIiwibGFiZWxzIiwic3RvcFByb3BhZ2F0aW9uIiwiY29udmVydENoaWxkcmVuVG9EYXRhIiwiUmVhY3QiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJwb3BvdmVyIiwicG9wb3ZlclByb3BzIiwicmVzdFByb3BzIiwiZGF0YSIsImNoaWxkRGF0YSIsImNvbnZlcnRUcmVlRGF0YSIsImRhdGFOb2RlUGFyYW0iLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiZGF0YU5vZGUiLCJpc0FsbFNlbGVjdGVkIiwiaW5kZXRlcm1pbmF0ZSIsInNlbGVjdEFsbCIsInByb2Nlc3MiLCJwYXJlbnRWYWx1ZSIsImRhdGFDaGlsZHJlbiIsIm5ld1ZhbCIsInVuc2hpZnQiLCJjbGFzc05hbWUiLCJjaGVja2FibGUiLCJkaXNhYmxlQ2hlY2tib3giLCJsaXN0ZW5JbnB1dENoYW5nZSIsInRhcmdldCIsImtleUNvZGUiLCJjb21wb25lbnREaWRNb3VudCIsInBsYWNlaG9sZGVyIiwicmVzdWx0VmlzaWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfIiwidmFsdWVQcmV2IiwiaGVpZ2h0Rml4ZWQiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJzdWZmaXgiLCJsYXN0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJhdXRvQ2xlYXJTZWFyY2hWYWx1ZSIsImdldFBvcHVwQ29udGFpbmVyIiwibXVsdGlwbGUiLCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJjaGVja2JveCIsInRydWVWYWx1ZSIsInAiLCJjb3VudCIsInRyZWVEYXRhRmluYWwiLCJCb29sZWFuIiwibXVsdGlMZXZlbCIsInNvbWUiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJtYXJnaW5SaWdodCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJhcnJheSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIlRyZWVOb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxrQkFBZjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHO0FBQ2pCLGNBQVlDLHNCQURLO0FBRWpCLGdCQUFjQyx3QkFGRztBQUdqQixpQkFBZUM7QUFIRSxDQUFuQjs7QUFTQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQ3RCQyxFQURzQixFQUV0QkMsRUFGc0IsRUFHVjtBQUNaLE1BQUksQ0FBQ0Qs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dCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmNUcmVlU2VsZWN0LCB7XG4gIFNIT1dfQUxMLFxuICBTSE9XX1BBUkVOVCxcbiAgU0hPV19DSElMRCxcbiAgVHJlZU5vZGUsXG59IGZyb20gXCJyYy10cmVlLXNlbGVjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9saWIvQ2hpbGRyZW4vdG9BcnJheVwiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94XCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyLCB7IElQb3BvdmVyUHJvcHMgfSBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9wb3J0YWxcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL3NwaW5uZXJcIlxuaW1wb3J0IGdldFBsYWNlbWVudHMgZnJvbSBcIi4uL3Rvb2x0aXAvcGxhY2VtZW50c1wiXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tIFwiLi4vcG9wLXRyaWdnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10cmVlLXNlbGVjdFwiXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3Qgc3RyYXRlZ2llcyA9IHtcbiAgXCJzaG93LWFsbFwiOiBTSE9XX0FMTCxcbiAgXCJzaG93LWNoaWxkXCI6IFNIT1dfQ0hJTEQsXG4gIFwic2hvdy1wYXJlbnRcIjogU0hPV19QQVJFTlQsXG59XG5cbi8qKlxuICogYTEg5piv5ZCm5YyF5ZCrIGEyXG4gKi9cbmNvbnN0IGlzQXJyYXlJbmNsdWRlcyA9IChcbiAgYTE6IFJlYWN0LlJlYWN0VGV4dFtdLFxuICBhMjogUmVhY3QuUmVhY3RUZXh0W11cbik6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWExIHx8ICFhMikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGEyLmV2ZXJ5KChvKSA9PiBhMS5pbmNsdWRlcyhvKSlcbn1cblxuZXhwb3J0IHR5cGUgVHJlZU5vZGVWYWx1ZSA9IFJlYWN0LlJlYWN0VGV4dFtdIHwgbnVsbFxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBrZXk6IHN0cmluZ1xuICBkaXNhYmxlZDogYm9vbGVhblxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhTm9kZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dFxuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxuICBsYWJlbD86IFJlYWN0LlJlYWN0Tm9kZVxuICBrZXk/OiBSZWFjdC5SZWFjdFRleHRcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW5cbiAgY2hlY2thYmxlPzogYm9vbGVhblxuICBwb3BvdmVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgY2hpbGRyZW4/OiBEYXRhTm9kZVtdXG59XG5cbmV4cG9ydCB0eXBlIFRyZWVEYXRhID0gRGF0YU5vZGVbXSB8IHVuZGVmaW5lZFxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlU2VsZWN0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWU/OiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBkZWZhdWx0VmFsdWU/OiBUcmVlTm9kZVZhbHVlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBnZXRQb3B1cENvbnRhaW5lcj86IG51bGwgfCAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBIVE1MRWxlbWVudClcbiAgaGVpZ2h0Rml4ZWQ/OiBib29sZWFuXG4gIG1heFRhZ0NvdW50PzogbnVsbCB8IG51bWJlclxuICBtdWx0aXBsZT86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFRyZWVOb2RlVmFsdWUsIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW10pID0+IHZvaWRcbiAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICBvblNlYXJjaD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICByZXN1bHRSZW5kZXI/OiBudWxsIHwgKCh2YWx1ZXM6IElUcmVlTm9kZVtdKSA9PiBKU1guRWxlbWVudClcbiAgcmVzdWx0VmlzaWJsZT86IGJvb2xlYW5cbiAgc2FtZVZhbHVlRW5hYmxlZD86IGJvb2xlYW5cbiAgc2VsZWN0QWxsPzogYm9vbGVhblxuICBzaG93Q2hlY2tlZFN0cmF0ZWd5PzogXCJzaG93LWFsbFwiIHwgXCJzaG93LWNoaWxkXCIgfCBcInNob3ctcGFyZW50XCJcbiAgdG9wQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICB0cmVlRGF0YT86IFRyZWVEYXRhXG4gIHZhbHVlPzogVHJlZU5vZGVWYWx1ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlU2VsZWN0U3RhdGUge1xuICBoYXNoOiBzdHJpbmdcbiAgdG9wQ29udGVudFBvcnRhbFRhcmdldD86IEhUTUxEaXZFbGVtZW50XG4gIHZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBtYXhIZWlnaHRGaXhlZDogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjaGVja2FibGU/OiBib29sZWFuXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBkaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlXG4gIGtleT86IHN0cmluZ1xuICBldmVudEtleT86IHN0cmluZ1xuICBpc0xlYWY/OiBib29sZWFuXG4gIGNoZWNrZWQ/OiBib29sZWFuXG4gIGV4cGFuZGVkPzogYm9vbGVhblxuICBsb2FkaW5nPzogYm9vbGVhblxuICBzZWxlY3RlZD86IGJvb2xlYW5cbiAgc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDmoJHlvaLpgInmi6lcbiAqL1xuY2xhc3MgVHJlZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVHJlZVNlbGVjdFByb3BzLCBJVHJlZVNlbGVjdFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWAvOiiq+mAieaLqeWQju+8jOaYr+WQpumcgOimgea4heepuuaQnOe0ouahhlxuICAgICAqL1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6buY6K6k6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgLyoqXG4gICAgICog5piv5ZCm56aB55SoXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmrmOW6puaYr+WQpuWbuuWumuS4gOihjO+8jFRyZWVTZWxlY3Qg5bCG5qC55o2u5YaF5a655Yy65Z+f5a695bqm6Ieq5Yqo5bCG57uT5p6c5pS26LW377yM5byA5ZCv6L+Z5LiqIFByb3Ag5ZCOIFRyZWVTZWxlY3Qg5Lya5b+955WlIG1heFRhZ0NvdW50IFByb3BcbiAgICAgKi9cbiAgICBoZWlnaHRGaXhlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5pyA5aSa5pi+56S65aSa5bCR5LiqIHRhZ++8jOWmguaenOi2hei/h+S6huWImeS7peaUtui1t+eahOW9ouW8j+WHuueOsFxuICAgICAqL1xuICAgIG1heFRhZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWkmumAieaooeW8j1xuICAgICAqL1xuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlgLzlj5jljJbml7bnmoTlm57osIPvvIzlj4LmlbA6IHZhbHVlXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOS4i+aLiSB2aXNpYmxlIOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogYm9vbGVhblxuICAgICAqL1xuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmkJzntKLml7bnmoTlm57osIPvvIzlj4LmlbA6IHZhbHVlXG4gICAgICovXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruW8ueWHuuS9jee9rlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwidG9wXCIsXG4gICAgICBcImxlZnRcIixcbiAgICAgIFwicmlnaHRcIixcbiAgICAgIFwiYm90dG9tXCIsXG4gICAgICBcInRvcExlZnRcIixcbiAgICAgIFwidG9wUmlnaHRcIixcbiAgICAgIFwiYm90dG9tTGVmdFwiLFxuICAgICAgXCJib3R0b21SaWdodFwiLFxuICAgICAgXCJsZWZ0VG9wXCIsXG4gICAgICBcImxlZnRCb3R0b21cIixcbiAgICAgIFwicmlnaHRUb3BcIixcbiAgICAgIFwicmlnaHRCb3R0b21cIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7ovpPlhaXmoYbnmoTpu5jorqTlhoXlrrlcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDorr7nva7oh6rlrprkuYnnmoTnu5PmnpzmuLLmn5NcbiAgICAgKi9cbiAgICByZXN1bHRSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOi+k+WFpeahhuWGheeahOagh+etvuaYr+WQpuaYvuekuu+8jOatpCBQcm9wIOeUqOS6juaDs+imgeWwhue7k+aenOWMuuWxleekuuWcqOWIq+eahOWcsOaWueeahOmcgOaxglxuICAgICAqL1xuICAgIHJlc3VsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWumuWItuagkeW9oumAieaLqeWZqOeahGljb25cbiAgICAgKi9cbiAgICByaWdodEljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5YWB6K6455u45ZCM5YC877yM5L2/55So5oOF5Ya177ya5aaC5ZCM5LiA5Liq5Lq65Y+v6IO95a2Y5Zyo5LqO5Lik5Liq57uE57uH5p625p6E5Lit77yM5aaC5p6c5L2/55So5q2kIFByb3DvvIzor7flkIzml7bkvb/nlKggcmVzdWx0VmlzaWJsZT17ZmFsc2V9XG4gICAgICovXG4gICAgc2FtZVZhbHVlRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5byA5ZCv5YWo6YCJ5Yqf6IO9XG4gICAgICovXG4gICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprkuYnpgInkuK3pobnlm57loavnmoTmlrnlvI/vvJpcbiAgICAgKiAxLiBzaG93LWFsbO+8muaYvuekuuWMheaLrOeItuiKgueCueeahOaJgOaciemAieS4reiKgueCue+8m1xuICAgICAqIDIuIHNob3ctcGFyZW5077ya5Y+q5pi+56S654i26IqC54K577ybXG4gICAgICogMy4gc2hvdy1jaGlsZO+8muWPquaYvuekuuWtkOiKgueCueOAgum7mOiupOWAvO+8mnNob3ctcGFyZW50XG4gICAgICovXG4gICAgc2hvd0NoZWNrZWRTdHJhdGVneTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwic2hvdy1hbGxcIixcbiAgICAgIFwic2hvdy1wYXJlbnRcIixcbiAgICAgIFwic2hvdy1jaGlsZFwiLFxuICAgIF0pLFxuICAgIC8qKlxuICAgICAqIOS4i+aLieahhumhtumDqOaYvuekuueahOiHquWumuS5ieWFg+e0oFxuICAgICAqL1xuICAgIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIHRyZWVOb2RlcyDmlbDmja7vvIzmoLzlvI/lj4LnhacgaW50ZXJmYWNlIERhdGFOb2RlXG4gICAgICovXG4gICAgdHJlZURhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrpgInkuK3nmoQga2V5XG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMgPSB7XG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gICAgaGVpZ2h0Rml4ZWQ6IGZhbHNlLFxuICAgIG1heFRhZ0NvdW50OiBudWxsLFxuICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uU2VhcmNoOiBub29wLFxuICAgIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcmVzdWx0UmVuZGVyOiBudWxsLFxuICAgIHJlc3VsdFZpc2libGU6IHRydWUsXG4gICAgcmlnaHRJY29uOiBcIm1lbnVcIixcbiAgICBzYW1lVmFsdWVFbmFibGVkOiBmYWxzZSxcbiAgICBzZWxlY3RBbGw6IGZhbHNlLFxuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFwic2hvdy1wYXJlbnRcIixcbiAgICB0b3BDb250ZW50OiB1bmRlZmluZWQsXG4gICAgdHJlZURhdGE6IHVuZGVmaW5lZCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHsgdmFsdWUgfTogSVRyZWVTZWxlY3RQcm9wcykgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFRyZWVOb2RlOiB0eXBlb2YgVHJlZU5vZGUgPSBUcmVlTm9kZVxuXG4gIHB1YmxpYyBzZWxlY3Q6IHR5cGVvZiBSY1RyZWVTZWxlY3RcblxuICBwdWJsaWMgcG9ydGFsOiBSZWFjdC5SZWFjdE5vZGVcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgdHJlZURhdGE6IERhdGFOb2RlW11cblxuICBwdWJsaWMgdHJlZVZhbHVlQWxsOiBhbnlbXVxuXG4gIHB1YmxpYyB0cmVlVmFsdWVGbGF0dGVuOiBhbnlbXSA9IFtdXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElUcmVlU2VsZWN0UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IHZhbHVlLCBkZWZhdWx0VmFsdWUgfSA9IHByb3BzXG4gICAgY29uc3QgdmFsdWVTdGF0ZSA9IHZhbHVlICE9PSBudWxsID8gdmFsdWUgOiBkZWZhdWx0VmFsdWVcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNoOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMywgOCksXG4gICAgICB2YWx1ZTogdmFsdWVTdGF0ZSxcbiAgICAgIG1heEhlaWdodEZpeGVkOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKFxuICAgIG5leHRQcm9wczogSVRyZWVTZWxlY3RQcm9wcyxcbiAgICBuZXh0U3RhdGU6IElUcmVlU2VsZWN0U3RhdGVcbiAgKSA9PlxuICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcblxuICBwdWJsaWMgc2F2ZVNlbGVjdCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnNlbGVjdCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlUG9ydGFsID0gKG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIHRoaXMucG9ydGFsID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVXcmFwcGVyID0gKG5vZGU6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgdGhpcy53cmFwcGVyID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHJlbmRlclN3aXRjaGVySWNvbiA9ICh7IGlzTGVhZiwgbG9hZGluZyB9OiBJVHJlZU5vZGVQcm9wcykgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgc2l6ZT1cIm1pbmlcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1zd2l0Y2hlci1pY29uYH0gLz5cbiAgICB9XG4gICAgaWYgKGlzTGVhZikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxJY29uIGljb249XCJ0cmlhbmdsZS1yaWdodFwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLXN3aXRjaGVyLWljb25gfSAvPlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVWaXNpYmxlQ2hhbmdlID0gKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRvcENvbnRlbnQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgeyBoYXNoLCB0b3BDb250ZW50UG9ydGFsVGFyZ2V0IH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkuIvmi4nmoYbmmL7npLogJiYg5Lyg5YWl5LqG6aG26YOo6Ieq5a6a5LmJ5YWD57SgICYmIOmmluasoea3u+WKoFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHZpc2libGUgJiYgdG9wQ29udGVudCAmJiAhdG9wQ29udGVudFBvcnRhbFRhcmdldCkge1xuICAgICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuJHtwcmVmaXh9LWRyb3Bkb3duXyR7aGFzaH1gXG4gICAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICBlbC5vbm1vdXNlZG93biA9IChlKSA9PiB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcm9wZG93bi5pbnNlcnRCZWZvcmUoZWwsIGRyb3Bkb3duLmNoaWxkcmVuWzBdKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQ6IGVsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSwgMClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVDaGFuZ2UgPSAoXG4gICAgdmFsdWU6IFRyZWVOb2RlVmFsdWUsXG4gICAgdGl0bGVMaXN0OiBSZWFjdC5SZWFjdE5vZGVbXVxuICApID0+IHtcbiAgICBsZXQgdmFsdWVQYXJhbSA9IFtdIGFzIFJlYWN0LlJlYWN0VGV4dFtdXG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlOiB2YWx1ZVByb3AsXG4gICAgICBzYW1lVmFsdWVFbmFibGVkLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZTogdmFsdWVTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGlmIChzYW1lVmFsdWVFbmFibGVkKSB7XG4gICAgICAgIHZhbHVlPy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3BsaXRlZCA9IGAke3Z9YC5zcGxpdChcIl9fXCIpXG4gICAgICAgICAgY29uc3QgdmFsID0gc3BsaXRlZFtzcGxpdGVkLmxlbmd0aCAtIDFdXG4gICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHZhbHVlLmZpbHRlcigobykgPT4gYCR7b31gLmluY2x1ZGVzKGBfXyR7dmFsfWApKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGxlbmd0aCA9PT1cbiAgICAgICAgICAgIHRoaXMudHJlZVZhbHVlRmxhdHRlbi5maWx0ZXIoKG8pID0+IGAke299YC5pbmNsdWRlcyhgX18ke3ZhbH1gKSlcbiAgICAgICAgICAgICAgLmxlbmd0aFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8g6KGo56S65YWo5YyF5ZCr5LqG77yM5YiZ5L+d55WZXG4gICAgICAgICAgICB2YWx1ZVBhcmFtLnB1c2godmFsKVxuICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlU3RhdGU/LmluY2x1ZGVzKHZhbCkpIHtcbiAgICAgICAgICAgIHZhbHVlUGFyYW0ucHVzaCh2YWwpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZVBhcmFtID0gdmFsdWVcbiAgICAgIH1cblxuICAgICAgdmFsdWVQYXJhbSA9IFsuLi5uZXcgU2V0KHZhbHVlUGFyYW0pXVxuXG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFsdWVQYXJhbSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlUGFyYW0sIHRpdGxlTGlzdClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VhcmNoID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBvblNlYXJjaCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvblNlYXJjaCkge1xuICAgICAgb25TZWFyY2godmFsKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgfSwgMClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyVHJlZU5vZGUgPSAoaW5wdXQ6IHN0cmluZywgdHJlZU5vZGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsga2V5LCB0aXRsZSwgdmFsdWUsIGRhdGFUaXRsZSB9ID0gdHJlZU5vZGVcbiAgICBpZiAoIWtleSB8fCAhdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKGRhdGFUaXRsZSB8fCB0aXRsZSkuaW5jbHVkZXMoaW5wdXQpXG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUsIG1heEhlaWdodEZpeGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoXG4gICAgICAoIW1heFRhZ0NvdW50IHx8ICF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPD0gbWF4VGFnQ291bnQpICYmXG4gICAgICAhbWF4SGVpZ2h0Rml4ZWRcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU2VsZWN0QWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWU6IHZhbHVlUHJvcCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGlzQXJyYXlJbmNsdWRlcyh2YWx1ZSB8fCBbXSwgdGhpcy50cmVlVmFsdWVBbGwpKSB7XG4gICAgICAvKipcbiAgICAgICAqIOW3suWFqOmAiVxuICAgICAgICovXG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICog5riF56m6XG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnRyZWVWYWx1ZUFsbCB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHRoaXMudHJlZVZhbHVlQWxsLCBbXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4VGFnUGxhY2Vob2xkZXIgPSAobm9kZXM6IElUcmVlTm9kZVtdKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcmVzdWx0UmVuZGVyLCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlc3VsdFJlbmRlcihub2RlcylcbiAgICB9XG5cbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gbm9kZXNcbiAgICBjb25zdCBwbGFjZWhvbGRlclRleHQgPSAoXG4gICAgICA8PlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcImNhbGMoMTAwJSAtIDUzcHgpXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge25vZGVzWzBdPy5sYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIOetiSB7bGVuZ3RofSDkuKpcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXgtcG9wb3Zlci1pdGVtLXdyYXBwZXJgfT5cbiAgICAgICAgICAgIHtub2Rlcy5tYXAoKHsga2V5LCBkaXNhYmxlZCwgbGFiZWwgfSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heC1wb3BvdmVyLWl0ZW1gfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFscyA9IG5vZGVzLm1hcCgobykgPT4gby52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWxzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IG5vZGVzLm1hcCgobykgPT4gby5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscy5zcGxpY2UoaSwgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHMsIGxhYmVscylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBDbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4UG9wb3ZlcmB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4UGxhY2Vob2xkZXJgfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwbGFjZWhvbGRlclRleHR9XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGNvbnZlcnRDaGlsZHJlblRvRGF0YSA9IChub2RlczogYW55KTogRGF0YU5vZGVbXSA9PlxuICAgIHRvQXJyYXkobm9kZXMpXG4gICAgICAubWFwKChub2RlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChub2RlKSB8fCAhbm9kZS50eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgcG9wb3ZlcixcbiAgICAgICAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgLi4ucmVzdFByb3BzXG4gICAgICAgICAgfSxcbiAgICAgICAgfSA9IG5vZGUgYXMgUmVhY3QuUmVhY3RFbGVtZW50XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWmguaenOaciSBwb3BvdmVyIOWImeWcqOi/memHjOWMheijheS4gOS4iyB0aXRsZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgZGF0YVRpdGxlOiB0aXRsZSxcbiAgICAgICAgICB0aXRsZTogcG9wb3ZlciA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyYH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8UG9wb3ZlciBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlcmB9IC8+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICksXG4gICAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hpbGREYXRhID0gdGhpcy5jb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pXG4gICAgICAgIGlmIChjaGlsZERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkRGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkYXRhKSA9PiBkYXRhKVxuXG4gIHB1YmxpYyBjb252ZXJ0VHJlZURhdGEgPSAoXG4gICAgZGF0YU5vZGVQYXJhbTogVHJlZURhdGEsXG4gICAgb3B0aW9uczogeyBzZWxlY3RBbGw/OiBib29sZWFuIH0gPSB7fVxuICApOiBUcmVlRGF0YSA9PiB7XG4gICAgY29uc3QgeyBzYW1lVmFsdWVFbmFibGVkIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFkYXRhTm9kZVBhcmFtKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIGNvbnN0IGRhdGFOb2RlID0gWy4uLmRhdGFOb2RlUGFyYW1dXG4gICAgY29uc3QgeyB2YWx1ZTogdmFsdWVTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWQgPSBpc0FycmF5SW5jbHVkZXModmFsdWVTdGF0ZSB8fCBbXSwgdGhpcy50cmVlVmFsdWVBbGwpXG4gICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9ICFpc0FsbFNlbGVjdGVkICYmICEhdmFsdWVTdGF0ZT8ubGVuZ3RoXG5cbiAgICBpZiAoZGF0YU5vZGVbMF0/LmtleSA9PT0gYCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbGApIHtcbiAgICAgIHJldHVybiBkYXRhTm9kZVxuICAgIH1cblxuICAgIGlmIChzYW1lVmFsdWVFbmFibGVkICYmICFkYXRhTm9kZVswXT8uZGF0YVRpdGxlKSB7XG4gICAgICB0aGlzLnRyZWVWYWx1ZUZsYXR0ZW4gPSBbXVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2VsZWN0QWxsIH0gPSBvcHRpb25zXG5cbiAgICBjb25zdCBwcm9jZXNzID0gKG5vZGU6IERhdGFOb2RlW10sIHBhcmVudFZhbHVlPzogUmVhY3QuUmVhY3RUZXh0KSA9PiB7XG4gICAgICBub2RlLmZvckVhY2goKG8pID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBkYXRhQ2hpbGRyZW4sXG4gICAgICAgICAgZGF0YVRpdGxlLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHBvcG92ZXIsXG4gICAgICAgICAgcG9wb3ZlclByb3BzID0ge30sXG4gICAgICAgIH0gPSBvXG4gICAgICAgIGlmIChkYXRhVGl0bGUgJiYgZGF0YUNoaWxkcmVuKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGFUaXRsZSDnlKjkuo7mnIkgcG9wb3ZlciDnmoTmg4XlhrXkuIvnmoTmkJzntKJcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIG8uZGF0YVRpdGxlID0gdGl0bGVcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICog5Yqg5YWlIGRhdGFDaGlsZHJlbiDmmK/kuLrkuobmlK/mjIEgbG9hZERhdGEg55qE5L2/55SoXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoY2hpbGRyZW4/Lmxlbmd0aCkge1xuICAgICAgICAgIG8uZGF0YUNoaWxkcmVuID0gMVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG8ua2V5ID0gdmFsdWVcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgby52YWx1ZSA9IGtleVxuICAgICAgICB9XG4gICAgICAgIGlmIChzYW1lVmFsdWVFbmFibGVkKSB7XG4gICAgICAgICAgY29uc3QgbmV3VmFsID0gYCR7cGFyZW50VmFsdWUgPyBgJHtwYXJlbnRWYWx1ZX1fX2AgOiBcIlwifSR7dmFsdWV9YFxuICAgICAgICAgIG8ua2V5ID0gbmV3VmFsXG4gICAgICAgICAgby52YWx1ZSA9IG5ld1ZhbFxuICAgICAgICAgIGlmICghdGhpcy50cmVlVmFsdWVGbGF0dGVuLmluY2x1ZGVzKG5ld1ZhbCkpIHtcbiAgICAgICAgICAgIHRoaXMudHJlZVZhbHVlRmxhdHRlbi5wdXNoKG5ld1ZhbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9wb3Zlcikge1xuICAgICAgICAgIG8udGl0bGUgPSAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlcmB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPFBvcG92ZXIgcG9wdXA9e3BvcG92ZXJ9IHBsYWNlbWVudD1cInJpZ2h0XCIgey4uLnBvcG92ZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJgfSAvPlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgcHJvY2VzcyhjaGlsZHJlbiwgby52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm9jZXNzKGRhdGFOb2RlKVxuXG4gICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgZGF0YU5vZGUudW5zaGlmdCh7XG4gICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsLWlubmVyYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWFqOmAiVxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICBjaGVja2VkPXtpc0FsbFNlbGVjdGVkfVxuICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXtpbmRldGVybWluYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCxcbiAgICAgICAga2V5OiBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCxcbiAgICAgICAgY2hlY2thYmxlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZUNoZWNrYm94OiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YU5vZGVcbiAgfVxuXG4gIGxpc3RlbklucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZSB9LFxuICAgICAga2V5Q29kZSxcbiAgICB9ID0gZVxuXG4gICAgaWYgKGtleUNvZGUgPT09IDggJiYgdmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCwgcGxhY2Vob2xkZXIsIHJlc3VsdFZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIC8vIOemgeatoiB0cmVlLXNlbGVjdCDplK7nm5jlm57liKDkvJrlvbHlk40gdmFsdWVcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubGlzdGVuSW5wdXRDaGFuZ2UsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIGlmICghcmVzdWx0VmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9IChcbiAgICBfOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIHsgdmFsdWU6IHZhbHVlUHJldiB9OiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0VmlzaWJsZSwgaGVpZ2h0Rml4ZWQsIHBsYWNlaG9sZGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBoYXNoLCB2YWx1ZSwgbWF4SGVpZ2h0Rml4ZWQgfSA9IHRoaXMuc3RhdGVcbiAgICAvKipcbiAgICAgKiByZXN1bHRWaXNpYmxlIOS4uiBmYWxzZSDml7bvvIwgc2VsZWN0b3Ig6auY5bqm5LiN5Lya5pS55Y+Y44CCXG4gICAgICog5qC55o2u5oiR55qE57uP6aqMIFBvcHVwIOinpuWPkemHjeaWsOWumuS9jeeahOaXtuacuuaYr++8mlxuICAgICAqIDEuIHdpbmRvdyByZXNpemVcbiAgICAgKiAyLiByZXNpemUgb2JzZXJ2ZXIg5LqGIHNlbGVjdG9yXG4gICAgICog5Zug5q2k6L+Z6YeM5omL5Yqo6Kem5Y+RIHJlc2l6ZVxuICAgICAqL1xuICAgIGlmICghcmVzdWx0VmlzaWJsZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInJlc2l6ZVwiKSlcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0Rml4ZWQgJiYgdmFsdWVQcmV2Py5sZW5ndGggIT09IHZhbHVlPy5sZW5ndGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofSAuJHtwcmVmaXh9LXNlbGVjdGlvbi1vdmVyZmxvd2BcbiAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBjb25zdCBzdWZmaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofSAuJHtwcmVmaXh9LXNlbGVjdGlvbi1vdmVyZmxvdy1pdGVtLXN1ZmZpeGBcbiAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBjb25zdCBsYXN0ID0gc3VmZml4LmNoaWxkcmVuW1xuICAgICAgICAgIHN1ZmZpeC5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgIF0gYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxhc3Qub2Zmc2V0TGVmdCA+IHdyYXBwZXIub2Zmc2V0V2lkdGggLSAzMCAmJlxuICAgICAgICAgICFtYXhIZWlnaHRGaXhlZCAmJlxuICAgICAgICAgIHZhbHVlUHJldiAmJlxuICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgdmFsdWVQcmV2Lmxlbmd0aCA8IHZhbHVlLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1heEhlaWdodEZpeGVkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgbGFzdC5vZmZzZXRMZWZ0IDwgd3JhcHBlci5vZmZzZXRXaWR0aCAtIDMwICYmXG4gICAgICAgICAgbWF4SGVpZ2h0Rml4ZWQgJiZcbiAgICAgICAgICB2YWx1ZVByZXYgJiZcbiAgICAgICAgICB2YWx1ZSAmJlxuICAgICAgICAgIHZhbHVlUHJldi5sZW5ndGggPiB2YWx1ZS5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtYXhIZWlnaHRGaXhlZDogZmFsc2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBoZWlnaHRGaXhlZCxcbiAgICAgIG1heFRhZ0NvdW50LFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmlnaHRJY29uLFxuICAgICAgcmVzdWx0UmVuZGVyLFxuICAgICAgcmVzdWx0VmlzaWJsZSxcbiAgICAgIHNhbWVWYWx1ZUVuYWJsZWQsXG4gICAgICBzZWxlY3RBbGwsXG4gICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5LFxuICAgICAgdG9wQ29udGVudCxcbiAgICAgIHRyZWVEYXRhLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHM6IGFueSA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJvbkNoYW5nZVwiLFxuICAgICAgXCJvblNlYXJjaFwiLFxuICAgICAgXCJkZWZhdWx0VmFsdWVcIixcbiAgICAgIFwidmFsdWVcIixcbiAgICBdKVxuXG4gICAgY29uc3QgeyBoYXNoLCB0b3BDb250ZW50UG9ydGFsVGFyZ2V0LCB2YWx1ZSwgbWF4SGVpZ2h0Rml4ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIHtcbiAgICAgIFtgJHtwcmVmaXh9X3Jlc3VsdEhpZGRlbmBdOiAhcmVzdWx0VmlzaWJsZSxcbiAgICB9KVxuXG4gICAgbGV0IGNoZWNrYm94OiBhbnkgPSBtdWx0aXBsZVxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgY2hlY2tib3ggPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1jaGVja2JveC1pbmRldGVybWluYXRlU3ZnYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICB4PVwiMVwiXG4gICAgICAgICAgICAgIHk9XCI0XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjJcIlxuICAgICAgICAgICAgICByeD1cIi41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLWNoZWNrYm94LWNoZWNrZWRTdmdgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNLjYxOCA1LjgyN2EuNDYzLjQ2MyAwIDAgMS0uMDItLjY3NWwuODA0LS44MDRhLjUyLjUyIDAgMCAxIC43MTYtLjAxTDQuNzUgNi43NWw0LjkyMi01LjYyNWEuNTEzLjUxMyAwIDAgMSAuNzA3LS4wNmwuNzQyLjYyYS40NzguNDc4IDAgMCAxIC4wNDQuNjg3bC02LjA4IDYuNzU2YS41MDYuNTA2IDAgMCAxLS43MDMuMDQ1TC42MTggNS44Mjd6XCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmVzdFByb3BzLnZhbHVlID0gdmFsdWVcbiAgICB9XG5cbiAgICBpZiAoc2FtZVZhbHVlRW5hYmxlZCkge1xuICAgICAgY29uc3QgdHJ1ZVZhbHVlOiBUcmVlTm9kZVZhbHVlID0gW11cbiAgICAgIGlmIChyZXN0UHJvcHMudmFsdWUpIHtcbiAgICAgICAgcmVzdFByb3BzLnZhbHVlLmZvckVhY2goKG86IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMudHJlZVZhbHVlRmxhdHRlbi5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdGVkID0gcC5zcGxpdChcIl9fXCIpXG4gICAgICAgICAgICBpZiAoc3BsaXRlZFtzcGxpdGVkLmxlbmd0aCAtIDFdID09PSBvKSB7XG4gICAgICAgICAgICAgIHRydWVWYWx1ZS5wdXNoKHApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJlc3RQcm9wcy52YWx1ZSA9IHRydWVWYWx1ZVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCB8fCBtYXhIZWlnaHRGaXhlZCkge1xuICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldE1heFRhZ0NvdW50KClcbiAgICAgIGlmIChjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSBjb3VudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IDBcbiAgICB9XG5cbiAgICBjb25zdCB0cmVlRGF0YUZpbmFsID1cbiAgICAgIHRoaXMuY29udmVydFRyZWVEYXRhKHRyZWVEYXRhIHx8IHRoaXMuY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKSwge1xuICAgICAgICBzZWxlY3RBbGwsXG4gICAgICB9KSB8fCBbXVxuXG4gICAgdGhpcy50cmVlRGF0YSA9IHRyZWVEYXRhRmluYWxcbiAgICB0aGlzLnRyZWVWYWx1ZUFsbCA9IHRyZWVEYXRhRmluYWxcbiAgICAgIC5tYXAoKHsgdmFsdWU6IHZhbCwgZGlzYWJsZWQsIGRpc2FibGVDaGVja2JveCwgY2hlY2thYmxlIH0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgIWRpc2FibGVkICYmXG4gICAgICAgICAgIWRpc2FibGVDaGVja2JveCAmJlxuICAgICAgICAgIGNoZWNrYWJsZSAhPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG5cbiAgICAvLyDmmK/lkKbmmK/lpJrlsYLnuqdcbiAgICBjb25zdCBtdWx0aUxldmVsID0gdHJlZURhdGFGaW5hbC5zb21lKChvKSA9PiBvLmNoaWxkcmVuPy5sZW5ndGgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgIGAke3ByZWZpeH0td3JhcHBlciAke3ByZWZpeH0td3JhcHBlcl8ke2hhc2h9YCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXdyYXBwZXItbWF4VGFnYF06IHRoaXMuZ2V0TWF4VGFnQ291bnQoKSAhPT0gbnVsbCxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS13cmFwcGVyLWZpeGVkYF06IGhlaWdodEZpeGVkLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXdyYXBwZXItcmVzdWx0UmVuZGVyYF06ICEhcmVzdWx0UmVuZGVyLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVXcmFwcGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0b3BDb250ZW50ICYmIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQgJiYgKFxuICAgICAgICAgICAgICA8UG9ydGFsIHJlZj17dGhpcy5zYXZlUG9ydGFsfSBjb250YWluZXI9e3RvcENvbnRlbnRQb3J0YWxUYXJnZXR9PlxuICAgICAgICAgICAgICAgIHt0b3BDb250ZW50fVxuICAgICAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8UmNUcmVlU2VsZWN0XG4gICAgICAgICAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlPXtcbiAgICAgICAgICAgICAgICByZXN1bHRWaXNpYmxlID8gYXV0b0NsZWFyU2VhcmNoVmFsdWUgOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXR9XG4gICAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tZHJvcGRvd25fJHtoYXNofWAsIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1tdWx0aXBsZWBdOiBtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1zaW5nbGVgXTogIW11bHRpcGxlLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLWFsbGBdOiBzZWxlY3RBbGwsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tc2luZ2xlLWxldmVsYF06ICFtdWx0aUxldmVsLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgZHJvcGRvd25Qb3B1cEFsaWduPXtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQgJiYgZ2V0UGxhY2VtZW50cyh7IGFsaWduRWRnZTogdHJ1ZSB9KVtwbGFjZW1lbnRdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZmlsdGVyVHJlZU5vZGU9e3RoaXMuZmlsdGVyVHJlZU5vZGV9XG4gICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgICAgICAgIGlucHV0SWNvbj17PEljb24gaWNvbj1cInRyaWFuZ2xlLWRvd25cIiAvPn1cbiAgICAgICAgICAgICAgbWF4VGFnUGxhY2Vob2xkZXI9e3RoaXMuZ2V0TWF4VGFnUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG5vdEZvdW5kQ29udGVudD17XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJmaWxlLW91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS10cmFuc3BhcmVudC1ncmF5LTYwMClcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI0cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIOaXoOWMuemFjemhuVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHByZWZpeENscz17cHJlZml4fVxuICAgICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVNlbGVjdH1cbiAgICAgICAgICAgICAgcmVtb3ZlSWNvbj17PEljb24gaWNvbj1cImNhbmNlbFwiIGludGVyYWN0aXZlIHNpemU9ezE2fSAvPn1cbiAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneT17XG4gICAgICAgICAgICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSAmJiBzdHJhdGVnaWVzW3Nob3dDaGVja2VkU3RyYXRlZ3ldXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2hvd1NlYXJjaD17bXVsdGlwbGV9XG4gICAgICAgICAgICAgIHN3aXRjaGVySWNvbj17dGhpcy5yZW5kZXJTd2l0Y2hlckljb259XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic2xpZGUtdXBcIlxuICAgICAgICAgICAgICB0cmVlQ2hlY2thYmxlPXtjaGVja2JveH1cbiAgICAgICAgICAgICAgdHJlZU5vZGVGaWx0ZXJQcm9wPVwidGl0bGVcIlxuICAgICAgICAgICAgICBsaXN0SXRlbUhlaWdodD17MzJ9XG4gICAgICAgICAgICAgIGxpc3RIZWlnaHQ9ezI4MH1cbiAgICAgICAgICAgICAgdHJlZURhdGE9e3RyZWVEYXRhRmluYWx9XG4gICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXsodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIDIwMjEwMzIzIHZpc2libGUgZmFsc2Ug5pe26L6T5YWl5qGG5Lya6KKr5oOF5Ya177yM5L2G5rKh5pyJ6LCD55SoIG9uU2VhcmNoXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaChcIlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2libGVDaGFuZ2UodmlzaWJsZSlcbiAgICAgICAgICAgICAgICBpZiAob25Ecm9wZG93blZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshIXJpZ2h0SWNvbiAmJiBtdWx0aXBsZSAmJiAoXG4gICAgICAgICAgICAgIDxJY29uIGljb249e3JpZ2h0SWNvbn0gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWljb25gfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlZVNlbGVjdFxuIl19