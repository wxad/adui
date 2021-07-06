function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import * as React from "react";
import RcTreeSelect, { SHOW_ALL, SHOW_PARENT, SHOW_CHILD, TreeNode } from "rc-tree-select";
import PropTypes from "prop-types";
import shallowEqual from "shallowequal";
import classNames from "classnames";
import toArray from "rc-util/lib/Children/toArray";
import omit from "../_util/omit";
import { ConfigContext } from "../config-provider";
import Checkbox from "../checkbox";
import Icon from "../icon";
import Popover from "../popover";
import Portal from "../portal";
import Spinner from "../spinner";
import getPlacements from "../tooltip/placements";
import "./style";
var prefix = "adui-tree-select";

var noop = function noop() {};

var strategies = {
  "show-all": SHOW_ALL,
  "show-child": SHOW_CHILD,
  "show-parent": SHOW_PARENT
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
      return !shallowEqual(_this.props, nextProps) || !shallowEqual(_this.state, nextState);
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
        return React.createElement(Spinner, {
          size: "mini",
          className: "".concat(prefix, "-tree-switcher-icon")
        });
      }

      if (isLeaf) {
        return null;
      }

      return React.createElement(Icon, {
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
      return React.createElement(Popover, {
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
          }, React.createElement("span", null, label), !disabled && React.createElement(Icon, {
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
      }, placeholderText, React.createElement(Icon, {
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
      return toArray(nodes).map(function (node) {
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
          }, title), React.createElement(Popover, _extends({
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
            }, title), React.createElement(Popover, _extends({
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
          }, "\u5168\u9009", React.createElement(Checkbox, {
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

      var restProps = omit(otherProps, ["onChange", "onSearch", "defaultValue", "value"]);
      var _this$state4 = this.state,
          hash = _this$state4.hash,
          topContentPortalTarget = _this$state4.topContentPortalTarget,
          value = _this$state4.value,
          maxHeightFixed = _this$state4.maxHeightFixed;
      var classSet = classNames(className, _defineProperty({}, "".concat(prefix, "_resultHidden"), !resultVisible));
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
      return React.createElement(ConfigContext.Consumer, null, function (_ref6) {
        var _classNames2, _classNames3;

        var getPopupContainerContext = _ref6.getPopupContainer;
        return React.createElement("div", {
          className: classNames("".concat(prefix, "-wrapper ").concat(prefix, "-wrapper_").concat(hash), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-wrapper-maxTag"), _this2.getMaxTagCount() !== null), _defineProperty(_classNames2, "".concat(prefix, "-wrapper-fixed"), heightFixed), _defineProperty(_classNames2, "".concat(prefix, "-wrapper-resultRender"), !!resultRender), _classNames2)),
          ref: _this2.saveWrapper
        }, topContent && topContentPortalTarget && React.createElement(Portal, {
          ref: _this2.savePortal,
          container: topContentPortalTarget
        }, topContent), React.createElement(RcTreeSelect, _extends({
          autoClearSearchValue: resultVisible ? autoClearSearchValue : false,
          className: classSet,
          dropdownClassName: classNames("".concat(prefix, "-dropdown_").concat(hash), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "-dropdown-multiple"), multiple), _defineProperty(_classNames3, "".concat(prefix, "-dropdown-single"), !multiple), _defineProperty(_classNames3, "".concat(prefix, "-dropdown-all"), selectAll), _defineProperty(_classNames3, "".concat(prefix, "-dropdown-single-level"), !multiLevel), _classNames3)),
          dropdownPopupAlign: placement && getPlacements({
            alignEdge: true
          })[placement],
          filterTreeNode: _this2.filterTreeNode,
          getPopupContainer: getPopupContainer || getPopupContainerContext,
          inputIcon: React.createElement(Icon, {
            icon: "triangle-down"
          }),
          maxTagPlaceholder: _this2.getMaxTagPlaceholder,
          notFoundContent: React.createElement(React.Fragment, null, React.createElement(Icon, {
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
          removeIcon: React.createElement(Icon, {
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
        }, restProps)), !!rightIcon && multiple && React.createElement(Icon, {
          icon: rightIcon,
          className: "".concat(prefix, "-icon")
        }));
      });
    }
  }]);

  return TreeSelect;
}(React.Component);

TreeSelect.propTypes = {
  autoClearSearchValue: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  heightFixed: PropTypes.bool,
  maxTagCount: PropTypes.number,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  onDropdownVisibleChange: PropTypes.func,
  onSearch: PropTypes.func,
  placement: PropTypes.oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]),
  placeholder: PropTypes.string,
  resultRender: PropTypes.func,
  resultVisible: PropTypes.bool,
  rightIcon: PropTypes.string,
  sameValueEnabled: PropTypes.bool,
  selectAll: PropTypes.bool,
  showCheckedStrategy: PropTypes.oneOf(["show-all", "show-parent", "show-child"]),
  topContent: PropTypes.node,
  treeData: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
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

TreeSelect.TreeNode = TreeNode;
export default TreeSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJSY1RyZWVTZWxlY3QiLCJTSE9XX0FMTCIsIlNIT1dfUEFSRU5UIiwiU0hPV19DSElMRCIsIlRyZWVOb2RlIiwiUHJvcFR5cGVzIiwic2hhbGxvd0VxdWFsIiwiY2xhc3NOYW1lcyIsInRvQXJyYXkiLCJvbWl0IiwiQ29uZmlnQ29udGV4dCIsIkNoZWNrYm94IiwiSWNvbiIsIlBvcG92ZXIiLCJQb3J0YWwiLCJTcGlubmVyIiwiZ2V0UGxhY2VtZW50cyIsInByZWZpeCIsIm5vb3AiLCJzdHJhdGVnaWVzIiwiaXNBcnJheUluY2x1ZGVzIiwiYTEiLCJhMiIsImV2ZXJ5IiwibyIsImluY2x1ZGVzIiwiVHJlZVNlbGVjdCIsInByb3BzIiwic2VsZWN0IiwicG9ydGFsIiwid3JhcHBlciIsInRyZWVEYXRhIiwidHJlZVZhbHVlQWxsIiwidHJlZVZhbHVlRmxhdHRlbiIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInN0YXRlIiwic2F2ZVNlbGVjdCIsIm5vZGUiLCJzYXZlUG9ydGFsIiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJzZXRUaW1lb3V0IiwiZm9yY2VVcGRhdGUiLCJ0b3BDb250ZW50IiwiaGFzaCIsInRvcENvbnRlbnRQb3J0YWxUYXJnZXQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsIiwiY3JlYXRlRWxlbWVudCIsIm9ubW91c2Vkb3duIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGl0bGVMaXN0IiwidmFsdWVQYXJhbSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJ2YWx1ZVByb3AiLCJzYW1lVmFsdWVFbmFibGVkIiwidmFsdWVTdGF0ZSIsImZvckVhY2giLCJ2Iiwic3BsaXRlZCIsInNwbGl0IiwidmFsIiwibGVuZ3RoIiwiZmlsdGVyIiwicHVzaCIsIlNldCIsImhhbmRsZVNlYXJjaCIsIm9uU2VhcmNoIiwiZmlsdGVyVHJlZU5vZGUiLCJpbnB1dCIsInRyZWVOb2RlIiwia2V5IiwidGl0bGUiLCJkYXRhVGl0bGUiLCJTdHJpbmciLCJnZXRNYXhUYWdDb3VudCIsIm1heFRhZ0NvdW50IiwibWF4SGVpZ2h0Rml4ZWQiLCJoYW5kbGVTZWxlY3RBbGwiLCJnZXRNYXhUYWdQbGFjZWhvbGRlciIsIm5vZGVzIiwicmVzdWx0UmVuZGVyIiwicGxhY2Vob2xkZXJUZXh0IiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImxhYmVsIiwibWFwIiwiaSIsInZhbHMiLCJzcGxpY2UiLCJsYWJlbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJwb3BvdmVyIiwicG9wb3ZlclByb3BzIiwicmVzdFByb3BzIiwiZGF0YSIsImNoaWxkRGF0YSIsImNvbnZlcnRUcmVlRGF0YSIsImRhdGFOb2RlUGFyYW0iLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiZGF0YU5vZGUiLCJpc0FsbFNlbGVjdGVkIiwiaW5kZXRlcm1pbmF0ZSIsInNlbGVjdEFsbCIsInByb2Nlc3MiLCJwYXJlbnRWYWx1ZSIsImRhdGFDaGlsZHJlbiIsIm5ld1ZhbCIsInVuc2hpZnQiLCJjbGFzc05hbWUiLCJjaGVja2FibGUiLCJkaXNhYmxlQ2hlY2tib3giLCJsaXN0ZW5JbnB1dENoYW5nZSIsInRhcmdldCIsImtleUNvZGUiLCJjb21wb25lbnREaWRNb3VudCIsInBsYWNlaG9sZGVyIiwicmVzdWx0VmlzaWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfIiwidmFsdWVQcmV2IiwiaGVpZ2h0Rml4ZWQiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJzdWZmaXgiLCJsYXN0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJhdXRvQ2xlYXJTZWFyY2hWYWx1ZSIsImdldFBvcHVwQ29udGFpbmVyIiwibXVsdGlwbGUiLCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJjaGVja2JveCIsInRydWVWYWx1ZSIsInAiLCJjb3VudCIsInRyZWVEYXRhRmluYWwiLCJCb29sZWFuIiwibXVsdGlMZXZlbCIsInNvbWUiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJtYXJnaW5SaWdodCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJhcnJheSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFlBQVAsSUFDRUMsUUFERixFQUVFQyxXQUZGLEVBR0VDLFVBSEYsRUFJRUMsUUFKRixRQUtPLGdCQUxQO0FBTUEsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsY0FBekI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxN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QSxRQUFRLEVBQUVuRCxJQVRtQztBQVU3Q2lKLEVBQUFBLHVCQUF1QixFQUFFakosSUFWb0I7QUFXN0NpRSxFQUFBQSxRQUFRLEVBQUVqRSxJQVhtQztBQVk3Q2tKLEVBQUFBLFNBQVMsRUFBRSxZQVprQztBQWE3Q3hCLEVBQUFBLFdBQVcsRUFBRSxLQWJnQztBQWM3QzNDLEVBQUFBLFlBQVksRUFBRSxJQWQrQjtBQWU3QzRDLEVBQUFBLGFBQWEsRUFBRSxJQWY4QjtBQWdCN0N3QixFQUFBQSxTQUFTLEVBQUUsTUFoQmtDO0FBaUI3QzlGLEVBQUFBLGdCQUFnQixFQUFFLEtBakIyQjtBQWtCN0N3RCxFQUFBQSxTQUFTLEVBQUUsS0FsQmtDO0FBbUI3Q3VDLEVBQUFBLG1CQUFtQixFQUFFLGFBbkJ3QjtBQW9CN0NySCxFQUFBQSxVQUFVLEVBQUUwRSxTQXBCaUM7QUFxQjdDNUYsRUFBQUEsUUFBUSxFQUFFNEYsU0FyQm1DO0FBc0I3QzFELEVBQUFBLEtBQUssRUFBRTtBQXRCc0MsQzs7QUFoSDNDdkMsVSxDQXlJVW9LLHdCLEdBQTJCLGlCQUFpQztBQUFBLE1BQTlCN0gsS0FBOEIsU0FBOUJBLEtBQThCOztBQUN4RSxNQUFJQSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixXQUFPO0FBQ0xBLE1BQUFBLEtBQUssRUFBTEE7QUFESyxLQUFQO0FBR0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQzs7QUFoSkd2QyxVLENBa0pVdEIsUSxHQUE0QkEsUTtBQTB0QjVDLGVBQWVzQixVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJjVHJlZVNlbGVjdCwge1xuICBTSE9XX0FMTCxcbiAgU0hPV19QQVJFTlQsXG4gIFNIT1dfQ0hJTEQsXG4gIFRyZWVOb2RlLFxufSBmcm9tIFwicmMtdHJlZS1zZWxlY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG4vKipcbiAqIGExIOaYr+WQpuWMheWQqyBhMlxuICovXG5jb25zdCBpc0FycmF5SW5jbHVkZXMgPSAoXG4gIGExOiBSZWFjdC5SZWFjdFRleHRbXSxcbiAgYTI6IFJlYWN0LlJlYWN0VGV4dFtdXG4pOiBib29sZWFuID0+IHtcbiAgaWYgKCFhMSB8fCAhYTIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBhMi5ldmVyeSgobykgPT4gYTEuaW5jbHVkZXMobykpXG59XG5cbmV4cG9ydCB0eXBlIFRyZWVOb2RlVmFsdWUgPSBSZWFjdC5SZWFjdFRleHRbXSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGUge1xuICB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAga2V5OiBzdHJpbmdcbiAgZGlzYWJsZWQ6IGJvb2xlYW5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YU5vZGUge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgdmFsdWU/OiBSZWFjdC5SZWFjdFRleHRcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGVcbiAgbGFiZWw/OiBSZWFjdC5SZWFjdE5vZGVcbiAga2V5PzogUmVhY3QuUmVhY3RUZXh0XG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBkaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgcG9wb3Zlcj86IFJlYWN0LlJlYWN0Tm9kZVxuICBwb3BvdmVyUHJvcHM/OiBJUG9wb3ZlclByb3BzXG4gIGNoaWxkcmVuPzogRGF0YU5vZGVbXVxufVxuXG5leHBvcnQgdHlwZSBUcmVlRGF0YSA9IERhdGFOb2RlW10gfCB1bmRlZmluZWRcblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGVmYXVsdFZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIGhlaWdodEZpeGVkPzogYm9vbGVhblxuICBtYXhUYWdDb3VudD86IG51bGwgfCBudW1iZXJcbiAgbXVsdGlwbGU/OiBib29sZWFuXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBUcmVlTm9kZVZhbHVlLCB0aXRsZUxpc3Q6IFJlYWN0LlJlYWN0Tm9kZVtdKSA9PiB2b2lkXG4gIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPzogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbiAgb25TZWFyY2g/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICBwbGFjZW1lbnQ/OiBQbGFjZW1lbnRcbiAgcmVzdWx0UmVuZGVyPzogbnVsbCB8ICgodmFsdWVzOiBJVHJlZU5vZGVbXSkgPT4gSlNYLkVsZW1lbnQpXG4gIHJlc3VsdFZpc2libGU/OiBib29sZWFuXG4gIHNhbWVWYWx1ZUVuYWJsZWQ/OiBib29sZWFuXG4gIHNlbGVjdEFsbD86IGJvb2xlYW5cbiAgc2hvd0NoZWNrZWRTdHJhdGVneT86IFwic2hvdy1hbGxcIiB8IFwic2hvdy1jaGlsZFwiIHwgXCJzaG93LXBhcmVudFwiXG4gIHRvcENvbnRlbnQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdHJlZURhdGE/OiBUcmVlRGF0YVxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVNlbGVjdFN0YXRlIHtcbiAgaGFzaDogc3RyaW5nXG4gIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQ/OiBIVE1MRGl2RWxlbWVudFxuICB2YWx1ZT86IFRyZWVOb2RlVmFsdWVcbiAgbWF4SGVpZ2h0Rml4ZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZU5vZGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY2hlY2thYmxlPzogYm9vbGVhblxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICB0aXRsZT86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZVxuICBrZXk/OiBzdHJpbmdcbiAgZXZlbnRLZXk/OiBzdHJpbmdcbiAgaXNMZWFmPzogYm9vbGVhblxuICBjaGVja2VkPzogYm9vbGVhblxuICBleHBhbmRlZD86IGJvb2xlYW5cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgc2VsZWN0ZWQ/OiBib29sZWFuXG4gIHNlbGVjdGFibGU/OiBib29sZWFuXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbi8qKlxuICog5qCR5b2i6YCJ5oupXG4gKi9cbmNsYXNzIFRyZWVTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRyZWVTZWxlY3RQcm9wcywgSVRyZWVTZWxlY3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDlgLzooqvpgInmi6nlkI7vvIzmmK/lkKbpnIDopoHmuIXnqbrmkJzntKLmoYZcbiAgICAgKi9cbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOm7mOiupOmAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuemgeeUqFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgICAqL1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpq5jluqbmmK/lkKblm7rlrprkuIDooYzvvIxUcmVlU2VsZWN0IOWwhuagueaNruWGheWuueWMuuWfn+WuveW6puiHquWKqOWwhue7k+aenOaUtui1t++8jOW8gOWQr+i/meS4qiBQcm9wIOWQjiBUcmVlU2VsZWN0IOS8muW/veeVpSBtYXhUYWdDb3VudCBQcm9wXG4gICAgICovXG4gICAgaGVpZ2h0Rml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWfvvIzlpoLmnpzotoXov4fkuobliJnku6XmlLbotbfnmoTlvaLlvI/lh7rnjrBcbiAgICAgKi9cbiAgICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblpJrpgInmqKHlvI9cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5YC85Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDkuIvmi4kgdmlzaWJsZSDlj5jljJbml7bnmoTlm57osIPvvIzlj4LmlbA6IGJvb2xlYW5cbiAgICAgKi9cbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pCc57Si5pe255qE5Zue6LCD77yM5Y+C5pWwOiB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7lvLnlh7rkvY3nva5cbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ0b3BMZWZ0XCIsXG4gICAgICBcInRvcFJpZ2h0XCIsXG4gICAgICBcImJvdHRvbUxlZnRcIixcbiAgICAgIFwiYm90dG9tUmlnaHRcIixcbiAgICAgIFwibGVmdFRvcFwiLFxuICAgICAgXCJsZWZ0Qm90dG9tXCIsXG4gICAgICBcInJpZ2h0VG9wXCIsXG4gICAgICBcInJpZ2h0Qm90dG9tXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog6K6+572u6L6T5YWl5qGG55qE6buY6K6k5YaF5a65XG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6K6+572u6Ieq5a6a5LmJ55qE57uT5p6c5riy5p+TXG4gICAgICovXG4gICAgcmVzdWx0UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDovpPlhaXmoYblhoXnmoTmoIfnrb7mmK/lkKbmmL7npLrvvIzmraQgUHJvcCDnlKjkuo7mg7PopoHlsIbnu5PmnpzljLrlsZXnpLrlnKjliKvnmoTlnLDmlrnnmoTpnIDmsYJcbiAgICAgKi9cbiAgICByZXN1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprliLbmoJHlvaLpgInmi6nlmajnmoRpY29uXG4gICAgICovXG4gICAgcmlnaHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWFgeiuuOebuOWQjOWAvO+8jOS9v+eUqOaDheWGte+8muWmguWQjOS4gOS4quS6uuWPr+iDveWtmOWcqOS6juS4pOS4que7hOe7h+aetuaehOS4re+8jOWmguaenOS9v+eUqOatpCBQcm9w77yM6K+35ZCM5pe25L2/55SoIHJlc3VsdFZpc2libGU9e2ZhbHNlfVxuICAgICAqL1xuICAgIHNhbWVWYWx1ZUVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuW8gOWQr+WFqOmAieWKn+iDvVxuICAgICAqL1xuICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6a5LmJ6YCJ5Lit6aG55Zue5aGr55qE5pa55byP77yaXG4gICAgICogMS4gc2hvdy1hbGzvvJrmmL7npLrljIXmi6zniLboioLngrnnmoTmiYDmnInpgInkuK3oioLngrnvvJtcbiAgICAgKiAyLiBzaG93LXBhcmVudO+8muWPquaYvuekuueItuiKgueCue+8m1xuICAgICAqIDMuIHNob3ctY2hpbGTvvJrlj6rmmL7npLrlrZDoioLngrnjgILpu5jorqTlgLzvvJpzaG93LXBhcmVudFxuICAgICAqL1xuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcInNob3ctYWxsXCIsXG4gICAgICBcInNob3ctcGFyZW50XCIsXG4gICAgICBcInNob3ctY2hpbGRcIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDkuIvmi4nmoYbpobbpg6jmmL7npLrnmoToh6rlrprkuYnlhYPntKBcbiAgICAgKi9cbiAgICB0b3BDb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiB0cmVlTm9kZXMg5pWw5o2u77yM5qC85byP5Y+C54WnIGludGVyZmFjZSBEYXRhTm9kZVxuICAgICAqL1xuICAgIHRyZWVEYXRhOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5aSW6YOo5o6n5Yi277ya6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVHJlZVNlbGVjdFByb3BzID0ge1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBmYWxzZSxcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBudWxsLFxuICAgIGhlaWdodEZpeGVkOiBmYWxzZSxcbiAgICBtYXhUYWdDb3VudDogbnVsbCxcbiAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICBvblNlYXJjaDogbm9vcCxcbiAgICBwbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIuivt+mAieaLqVwiLFxuICAgIHJlc3VsdFJlbmRlcjogbnVsbCxcbiAgICByZXN1bHRWaXNpYmxlOiB0cnVlLFxuICAgIHJpZ2h0SWNvbjogXCJtZW51XCIsXG4gICAgc2FtZVZhbHVlRW5hYmxlZDogZmFsc2UsXG4gICAgc2VsZWN0QWxsOiBmYWxzZSxcbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBcInNob3ctcGFyZW50XCIsXG4gICAgdG9wQ29udGVudDogdW5kZWZpbmVkLFxuICAgIHRyZWVEYXRhOiB1bmRlZmluZWQsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7IHZhbHVlIH06IElUcmVlU2VsZWN0UHJvcHMpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBUcmVlTm9kZTogdHlwZW9mIFRyZWVOb2RlID0gVHJlZU5vZGVcblxuICBwdWJsaWMgc2VsZWN0OiB0eXBlb2YgUmNUcmVlU2VsZWN0XG5cbiAgcHVibGljIHBvcnRhbDogUmVhY3QuUmVhY3ROb2RlXG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHRyZWVEYXRhOiBEYXRhTm9kZVtdXG5cbiAgcHVibGljIHRyZWVWYWx1ZUFsbDogYW55W11cblxuICBwdWJsaWMgdHJlZVZhbHVlRmxhdHRlbjogYW55W10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVHJlZVNlbGVjdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyB2YWx1ZSwgZGVmYXVsdFZhbHVlIH0gPSBwcm9wc1xuICAgIGNvbnN0IHZhbHVlU3RhdGUgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzaDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDMsIDgpLFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgICBtYXhIZWlnaHRGaXhlZDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMsXG4gICAgbmV4dFN0YXRlOiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIHNhdmVTZWxlY3QgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5zZWxlY3QgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVBvcnRhbCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnBvcnRhbCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlV3JhcHBlciA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMud3JhcHBlciA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTd2l0Y2hlckljb24gPSAoeyBpc0xlYWYsIGxvYWRpbmcgfTogSVRyZWVOb2RlUHJvcHMpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIHNpemU9XCJtaW5pXCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtc3dpdGNoZXItaWNvbmB9IC8+XG4gICAgfVxuICAgIGlmIChpc0xlYWYpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8SWNvbiBpY29uPVwidHJpYW5nbGUtcmlnaHRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1zd2l0Y2hlci1pY29uYH0gLz5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3BDb250ZW50IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAvKipcbiAgICAgICAgICog5LiL5ouJ5qGG5pi+56S6ICYmIOS8oOWFpeS6humhtumDqOiHquWumuS5ieWFg+e0oCAmJiDpppbmrKHmt7vliqBcbiAgICAgICAgICovXG4gICAgICAgIGlmICh2aXNpYmxlICYmIHRvcENvbnRlbnQgJiYgIXRvcENvbnRlbnRQb3J0YWxUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YFxuICAgICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZWwub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd24uaW5zZXJ0QmVmb3JlKGVsLCBkcm9wZG93bi5jaGlsZHJlblswXSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0b3BDb250ZW50UG9ydGFsVGFyZ2V0OiBlbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIDApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlID0gKFxuICAgIHZhbHVlOiBUcmVlTm9kZVZhbHVlLFxuICAgIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW11cbiAgKSA9PiB7XG4gICAgbGV0IHZhbHVlUGFyYW0gPSBbXSBhcyBSZWFjdC5SZWFjdFRleHRbXVxuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgc2FtZVZhbHVlRW5hYmxlZCxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWU6IHZhbHVlU3RhdGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAoc2FtZVZhbHVlRW5hYmxlZCkge1xuICAgICAgICB2YWx1ZT8uZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIGNvbnN0IHNwbGl0ZWQgPSBgJHt2fWAuc3BsaXQoXCJfX1wiKVxuICAgICAgICAgIGNvbnN0IHZhbCA9IHNwbGl0ZWRbc3BsaXRlZC5sZW5ndGggLSAxXVxuICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB2YWx1ZS5maWx0ZXIoKG8pID0+IGAke299YC5pbmNsdWRlcyhgX18ke3ZhbH1gKSlcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsZW5ndGggPT09XG4gICAgICAgICAgICB0aGlzLnRyZWVWYWx1ZUZsYXR0ZW4uZmlsdGVyKChvKSA9PiBgJHtvfWAuaW5jbHVkZXMoYF9fJHt2YWx9YCkpXG4gICAgICAgICAgICAgIC5sZW5ndGhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIOihqOekuuWFqOWMheWQq+S6hu+8jOWImeS/neeVmVxuICAgICAgICAgICAgdmFsdWVQYXJhbS5wdXNoKHZhbClcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZVN0YXRlPy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICB2YWx1ZVBhcmFtLnB1c2godmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWVQYXJhbSA9IHZhbHVlXG4gICAgICB9XG5cbiAgICAgIHZhbHVlUGFyYW0gPSBbLi4ubmV3IFNldCh2YWx1ZVBhcmFtKV1cblxuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHVlUGFyYW0gfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh2YWx1ZVBhcmFtLCB0aXRsZUxpc3QpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25TZWFyY2ggfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgIG9uU2VhcmNoKHZhbClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbHRlclRyZWVOb2RlID0gKGlucHV0OiBzdHJpbmcsIHRyZWVOb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGtleSwgdGl0bGUsIHZhbHVlLCBkYXRhVGl0bGUgfSA9IHRyZWVOb2RlXG4gICAgaWYgKCFrZXkgfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhkYXRhVGl0bGUgfHwgdGl0bGUpLmluY2x1ZGVzKGlucHV0KVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ0NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlLCBtYXhIZWlnaHRGaXhlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKFxuICAgICAgKCFtYXhUYWdDb3VudCB8fCAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDw9IG1heFRhZ0NvdW50KSAmJlxuICAgICAgIW1heEhlaWdodEZpeGVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlbGVjdEFsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlOiB2YWx1ZVByb3AsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChpc0FycmF5SW5jbHVkZXModmFsdWUgfHwgW10sIHRoaXMudHJlZVZhbHVlQWxsKSkge1xuICAgICAgLyoqXG4gICAgICAgKiDlt7LlhajpgIlcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIOa4heepulxuICAgICAgICovXG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy50cmVlVmFsdWVBbGwgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh0aGlzLnRyZWVWYWx1ZUFsbCwgW10pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ1BsYWNlaG9sZGVyID0gKG5vZGVzOiBJVHJlZU5vZGVbXSkgPT4ge1xuICAgIGlmICghdGhpcy5zZWxlY3QpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHJlc3VsdFJlbmRlciwgdmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJldHVybiByZXN1bHRSZW5kZXIobm9kZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IG5vZGVzXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG4gICAgICAgICAgICBtYXhXaWR0aDogXCJjYWxjKDEwMCUgLSA1M3B4KVwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtub2Rlc1swXT8ubGFiZWx9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgdmVydGljYWxBbGlnbjogXCJ0b3BcIiB9fT5cbiAgICAgICAgICDnrYkge2xlbmd0aH0g5LiqXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvPlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICBwb3B1cD17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4LXBvcG92ZXItaXRlbS13cmFwcGVyYH0+XG4gICAgICAgICAgICB7bm9kZXMubWFwKCh7IGtleSwgZGlzYWJsZWQsIGxhYmVsIH0sIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXgtcG9wb3Zlci1pdGVtYH0ga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHshZGlzYWJsZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBub2Rlcy5tYXAoKG8pID0+IG8udmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdmFscyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBub2Rlcy5tYXAoKG8pID0+IG8ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHMuc3BsaWNlKGksIDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh2YWxzLCBsYWJlbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heFBvcG92ZXJgfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heFBsYWNlaG9sZGVyYH1cbiAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7cGxhY2Vob2xkZXJUZXh0fVxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qb3BvdmVyPlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEgPSAobm9kZXM6IGFueSk6IERhdGFOb2RlW10gPT5cbiAgICB0b0FycmF5KG5vZGVzKVxuICAgICAgLm1hcCgobm9kZTogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHBvcG92ZXIsXG4gICAgICAgICAgICBwb3BvdmVyUHJvcHMsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIC4uLnJlc3RQcm9wc1xuICAgICAgICAgIH0sXG4gICAgICAgIH0gPSBub2RlIGFzIFJlYWN0LlJlYWN0RWxlbWVudFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlpoLmnpzmnIkgcG9wb3ZlciDliJnlnKjov5nph4zljIXoo4XkuIDkuIsgdGl0bGVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGRhdGFUaXRsZTogdGl0bGUsXG4gICAgICAgICAgdGl0bGU6IHBvcG92ZXIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlcmB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPFBvcG92ZXIgcG9wdXA9e3BvcG92ZXJ9IHBsYWNlbWVudD1cInJpZ2h0XCIgey4uLnBvcG92ZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJgfSAvPlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICApLFxuICAgICAgICAgIC4uLnJlc3RQcm9wcyxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IHRoaXMuY29udmVydENoaWxkcmVuVG9EYXRhKGNoaWxkcmVuKVxuICAgICAgICBpZiAoY2hpbGREYXRhLmxlbmd0aCkge1xuICAgICAgICAgIGRhdGEuY2hpbGRyZW4gPSBjaGlsZERhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoZGF0YSkgPT4gZGF0YSlcblxuICBwdWJsaWMgY29udmVydFRyZWVEYXRhID0gKFxuICAgIGRhdGFOb2RlUGFyYW06IFRyZWVEYXRhLFxuICAgIG9wdGlvbnM6IHsgc2VsZWN0QWxsPzogYm9vbGVhbiB9ID0ge31cbiAgKTogVHJlZURhdGEgPT4ge1xuICAgIGNvbnN0IHsgc2FtZVZhbHVlRW5hYmxlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghZGF0YU5vZGVQYXJhbSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgICBjb25zdCBkYXRhTm9kZSA9IFsuLi5kYXRhTm9kZVBhcmFtXVxuICAgIGNvbnN0IHsgdmFsdWU6IHZhbHVlU3RhdGUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkID0gaXNBcnJheUluY2x1ZGVzKHZhbHVlU3RhdGUgfHwgW10sIHRoaXMudHJlZVZhbHVlQWxsKVxuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSAhaXNBbGxTZWxlY3RlZCAmJiAhIXZhbHVlU3RhdGU/Lmxlbmd0aFxuXG4gICAgaWYgKGRhdGFOb2RlWzBdPy5rZXkgPT09IGAke3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGxgKSB7XG4gICAgICByZXR1cm4gZGF0YU5vZGVcbiAgICB9XG5cbiAgICBpZiAoc2FtZVZhbHVlRW5hYmxlZCAmJiAhZGF0YU5vZGVbMF0/LmRhdGFUaXRsZSkge1xuICAgICAgdGhpcy50cmVlVmFsdWVGbGF0dGVuID0gW11cbiAgICB9XG5cbiAgICBjb25zdCB7IHNlbGVjdEFsbCB9ID0gb3B0aW9uc1xuXG4gICAgY29uc3QgcHJvY2VzcyA9IChub2RlOiBEYXRhTm9kZVtdLCBwYXJlbnRWYWx1ZT86IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgICAgbm9kZS5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGF0YUNoaWxkcmVuLFxuICAgICAgICAgIGRhdGFUaXRsZSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBwb3BvdmVyLFxuICAgICAgICAgIHBvcG92ZXJQcm9wcyA9IHt9LFxuICAgICAgICB9ID0gb1xuICAgICAgICBpZiAoZGF0YVRpdGxlICYmIGRhdGFDaGlsZHJlbikge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRhVGl0bGUg55So5LqO5pyJIHBvcG92ZXIg55qE5oOF5Ya15LiL55qE5pCc57SiXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICBvLmRhdGFUaXRsZSA9IHRpdGxlXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWKoOWFpSBkYXRhQ2hpbGRyZW4g5piv5Li65LqG5pSv5oyBIGxvYWREYXRhIOeahOS9v+eUqFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGNoaWxkcmVuPy5sZW5ndGgpIHtcbiAgICAgICAgICBvLmRhdGFDaGlsZHJlbiA9IDFcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvLmtleSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG8udmFsdWUgPSBrZXlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2FtZVZhbHVlRW5hYmxlZCkge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IGAke3BhcmVudFZhbHVlID8gYCR7cGFyZW50VmFsdWV9X19gIDogXCJcIn0ke3ZhbHVlfWBcbiAgICAgICAgICBvLmtleSA9IG5ld1ZhbFxuICAgICAgICAgIG8udmFsdWUgPSBuZXdWYWxcbiAgICAgICAgICBpZiAoIXRoaXMudHJlZVZhbHVlRmxhdHRlbi5pbmNsdWRlcyhuZXdWYWwpKSB7XG4gICAgICAgICAgICB0aGlzLnRyZWVWYWx1ZUZsYXR0ZW4ucHVzaChuZXdWYWwpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvcG92ZXIpIHtcbiAgICAgICAgICBvLnRpdGxlID0gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXJgfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyLXBsYWNlaG9sZGVyYH0gLz5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgIHByb2Nlc3MoY2hpbGRyZW4sIG8udmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvY2VzcyhkYXRhTm9kZSlcblxuICAgIGlmIChzZWxlY3RBbGwpIHtcbiAgICAgIGRhdGFOb2RlLnVuc2hpZnQoe1xuICAgICAgICB0aXRsZTogKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbC1pbm5lcmB9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbGVjdEFsbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDlhajpgIlcbiAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZT17aW5kZXRlcm1pbmF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICksXG4gICAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbGAsXG4gICAgICAgIGtleTogYCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbGAsXG4gICAgICAgIGNoZWNrYWJsZTogZmFsc2UsXG4gICAgICAgIGRpc2FibGVDaGVja2JveDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFOb2RlXG4gIH1cblxuICBsaXN0ZW5JbnB1dENoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXQ6IHsgdmFsdWUgfSxcbiAgICAgIGtleUNvZGUsXG4gICAgfSA9IGVcblxuICAgIGlmIChrZXlDb2RlID09PSA4ICYmIHZhbHVlID09PSBcIlwiKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQsIHBsYWNlaG9sZGVyLCByZXN1bHRWaXNpYmxlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICAvLyDnpoHmraIgdHJlZS1zZWxlY3Qg6ZSu55uY5Zue5Yig5Lya5b2x5ZONIHZhbHVlXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmxpc3RlbklucHV0Q2hhbmdlLCBmYWxzZSlcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwgJiYgdmFsdWUpIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICBpZiAoIXJlc3VsdFZpc2libGUgJiYgdGhpcy53cmFwcGVyKSB7XG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoXG4gICAgXzogSVRyZWVTZWxlY3RQcm9wcyxcbiAgICB7IHZhbHVlOiB2YWx1ZVByZXYgfTogSVRyZWVTZWxlY3RTdGF0ZVxuICApID0+IHtcbiAgICBjb25zdCB7IHJlc3VsdFZpc2libGUsIGhlaWdodEZpeGVkLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaGFzaCwgdmFsdWUsIG1heEhlaWdodEZpeGVkIH0gPSB0aGlzLnN0YXRlXG4gICAgLyoqXG4gICAgICogcmVzdWx0VmlzaWJsZSDkuLogZmFsc2Ug5pe277yMIHNlbGVjdG9yIOmrmOW6puS4jeS8muaUueWPmOOAglxuICAgICAqIOagueaNruaIkeeahOe7j+mqjCBQb3B1cCDop6blj5Hph43mlrDlrprkvY3nmoTml7bmnLrmmK/vvJpcbiAgICAgKiAxLiB3aW5kb3cgcmVzaXplXG4gICAgICogMi4gcmVzaXplIG9ic2VydmVyIOS6hiBzZWxlY3RvclxuICAgICAqIOWboOatpOi/memHjOaJi+WKqOinpuWPkSByZXNpemVcbiAgICAgKi9cbiAgICBpZiAoIXJlc3VsdFZpc2libGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpXG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgICAgIH1cbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgaWYgKGhlaWdodEZpeGVkICYmIHZhbHVlUHJldj8ubGVuZ3RoICE9PSB2YWx1ZT8ubGVuZ3RoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLiR7cHJlZml4fS13cmFwcGVyXyR7aGFzaH0gLiR7cHJlZml4fS1zZWxlY3Rpb24tb3ZlcmZsb3dgXG4gICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgY29uc3Qgc3VmZml4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLiR7cHJlZml4fS13cmFwcGVyXyR7aGFzaH0gLiR7cHJlZml4fS1zZWxlY3Rpb24tb3ZlcmZsb3ctaXRlbS1zdWZmaXhgXG4gICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgY29uc3QgbGFzdCA9IHN1ZmZpeC5jaGlsZHJlbltcbiAgICAgICAgICBzdWZmaXguY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICBdIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGlmIChcbiAgICAgICAgICBsYXN0Lm9mZnNldExlZnQgPiB3cmFwcGVyLm9mZnNldFdpZHRoIC0gMzAgJiZcbiAgICAgICAgICAhbWF4SGVpZ2h0Rml4ZWQgJiZcbiAgICAgICAgICB2YWx1ZVByZXYgJiZcbiAgICAgICAgICB2YWx1ZSAmJlxuICAgICAgICAgIHZhbHVlUHJldi5sZW5ndGggPCB2YWx1ZS5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtYXhIZWlnaHRGaXhlZDogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGxhc3Qub2Zmc2V0TGVmdCA8IHdyYXBwZXIub2Zmc2V0V2lkdGggLSAzMCAmJlxuICAgICAgICAgIG1heEhlaWdodEZpeGVkICYmXG4gICAgICAgICAgdmFsdWVQcmV2ICYmXG4gICAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgICB2YWx1ZVByZXYubGVuZ3RoID4gdmFsdWUubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0Rml4ZWQ6IGZhbHNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgaGVpZ2h0Rml4ZWQsXG4gICAgICBtYXhUYWdDb3VudCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJpZ2h0SWNvbixcbiAgICAgIHJlc3VsdFJlbmRlcixcbiAgICAgIHJlc3VsdFZpc2libGUsXG4gICAgICBzYW1lVmFsdWVFbmFibGVkLFxuICAgICAgc2VsZWN0QWxsLFxuICAgICAgc2hvd0NoZWNrZWRTdHJhdGVneSxcbiAgICAgIHRvcENvbnRlbnQsXG4gICAgICB0cmVlRGF0YSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzOiBhbnkgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwib25DaGFuZ2VcIixcbiAgICAgIFwib25TZWFyY2hcIixcbiAgICAgIFwiZGVmYXVsdFZhbHVlXCIsXG4gICAgICBcInZhbHVlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCwgdmFsdWUsIG1heEhlaWdodEZpeGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCB7XG4gICAgICBbYCR7cHJlZml4fV9yZXN1bHRIaWRkZW5gXTogIXJlc3VsdFZpc2libGUsXG4gICAgfSlcblxuICAgIGxldCBjaGVja2JveDogYW55ID0gbXVsdGlwbGVcbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIGNoZWNrYm94ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZVN2Z2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgeD1cIjFcIlxuICAgICAgICAgICAgICB5PVwiNFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyXCJcbiAgICAgICAgICAgICAgcng9XCIuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1jaGVja2JveC1jaGVja2VkU3ZnYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTS42MTggNS44MjdhLjQ2My40NjMgMCAwIDEtLjAyLS42NzVsLjgwNC0uODA0YS41Mi41MiAwIDAgMSAuNzE2LS4wMUw0Ljc1IDYuNzVsNC45MjItNS42MjVhLjUxMy41MTMgMCAwIDEgLjcwNy0uMDZsLjc0Mi42MmEuNDc4LjQ3OCAwIDAgMSAuMDQ0LjY4N2wtNi4wOCA2Ljc1NmEuNTA2LjUwNiAwIDAgMS0uNzAzLjA0NUwuNjE4IDUuODI3elwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJlc3RQcm9wcy52YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKHNhbWVWYWx1ZUVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IHRydWVWYWx1ZTogVHJlZU5vZGVWYWx1ZSA9IFtdXG4gICAgICBpZiAocmVzdFByb3BzLnZhbHVlKSB7XG4gICAgICAgIHJlc3RQcm9wcy52YWx1ZS5mb3JFYWNoKChvOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLnRyZWVWYWx1ZUZsYXR0ZW4uZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRlZCA9IHAuc3BsaXQoXCJfX1wiKVxuICAgICAgICAgICAgaWYgKHNwbGl0ZWRbc3BsaXRlZC5sZW5ndGggLSAxXSA9PT0gbykge1xuICAgICAgICAgICAgICB0cnVlVmFsdWUucHVzaChwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXN0UHJvcHMudmFsdWUgPSB0cnVlVmFsdWVcbiAgICB9XG5cbiAgICBpZiAobWF4VGFnQ291bnQgIT09IG51bGwgfHwgbWF4SGVpZ2h0Rml4ZWQpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRNYXhUYWdDb3VudCgpXG4gICAgICBpZiAoY291bnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gY291bnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSAwXG4gICAgfVxuXG4gICAgY29uc3QgdHJlZURhdGFGaW5hbCA9XG4gICAgICB0aGlzLmNvbnZlcnRUcmVlRGF0YSh0cmVlRGF0YSB8fCB0aGlzLmNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbiksIHtcbiAgICAgICAgc2VsZWN0QWxsLFxuICAgICAgfSkgfHwgW11cblxuICAgIHRoaXMudHJlZURhdGEgPSB0cmVlRGF0YUZpbmFsXG4gICAgdGhpcy50cmVlVmFsdWVBbGwgPSB0cmVlRGF0YUZpbmFsXG4gICAgICAubWFwKCh7IHZhbHVlOiB2YWwsIGRpc2FibGVkLCBkaXNhYmxlQ2hlY2tib3gsIGNoZWNrYWJsZSB9KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB2YWwgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICFkaXNhYmxlZCAmJlxuICAgICAgICAgICFkaXNhYmxlQ2hlY2tib3ggJiZcbiAgICAgICAgICBjaGVja2FibGUgIT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuXG4gICAgLy8g5piv5ZCm5piv5aSa5bGC57qnXG4gICAgY29uc3QgbXVsdGlMZXZlbCA9IHRyZWVEYXRhRmluYWwuc29tZSgobykgPT4gby5jaGlsZHJlbj8ubGVuZ3RoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICBgJHtwcmVmaXh9LXdyYXBwZXIgJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofWAsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS13cmFwcGVyLW1heFRhZ2BdOiB0aGlzLmdldE1heFRhZ0NvdW50KCkgIT09IG51bGwsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1maXhlZGBdOiBoZWlnaHRGaXhlZCxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS13cmFwcGVyLXJlc3VsdFJlbmRlcmBdOiAhIXJlc3VsdFJlbmRlcixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlV3JhcHBlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dG9wQ29udGVudCAmJiB0b3BDb250ZW50UG9ydGFsVGFyZ2V0ICYmIChcbiAgICAgICAgICAgICAgPFBvcnRhbCByZWY9e3RoaXMuc2F2ZVBvcnRhbH0gY29udGFpbmVyPXt0b3BDb250ZW50UG9ydGFsVGFyZ2V0fT5cbiAgICAgICAgICAgICAgICB7dG9wQ29udGVudH1cbiAgICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFJjVHJlZVNlbGVjdFxuICAgICAgICAgICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT17XG4gICAgICAgICAgICAgICAgcmVzdWx0VmlzaWJsZSA/IGF1dG9DbGVhclNlYXJjaFZhbHVlIDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0fVxuICAgICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWRyb3Bkb3duXyR7aGFzaH1gLCB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tbXVsdGlwbGVgXTogbXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tc2luZ2xlYF06ICFtdWx0aXBsZSxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1hbGxgXTogc2VsZWN0QWxsLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLXNpbmdsZS1sZXZlbGBdOiAhbXVsdGlMZXZlbCxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGRyb3Bkb3duUG9wdXBBbGlnbj17XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50ICYmIGdldFBsYWNlbWVudHMoeyBhbGlnbkVkZ2U6IHRydWUgfSlbcGxhY2VtZW50XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZpbHRlclRyZWVOb2RlPXt0aGlzLmZpbHRlclRyZWVOb2RlfVxuICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXIgfHwgZ2V0UG9wdXBDb250YWluZXJDb250ZXh0fVxuICAgICAgICAgICAgICBpbnB1dEljb249ezxJY29uIGljb249XCJ0cmlhbmdsZS1kb3duXCIgLz59XG4gICAgICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyPXt0aGlzLmdldE1heFRhZ1BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiZmlsZS1vdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tdHJhbnNwYXJlbnQtZ3JheS02MDApXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICDml6DljLnphY3poblcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeH1cbiAgICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVTZWxlY3R9XG4gICAgICAgICAgICAgIHJlbW92ZUljb249ezxJY29uIGljb249XCJjYW5jZWxcIiBpbnRlcmFjdGl2ZSBzaXplPXsxNn0gLz59XG4gICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3k9e1xuICAgICAgICAgICAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3kgJiYgc3RyYXRlZ2llc1tzaG93Q2hlY2tlZFN0cmF0ZWd5XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNob3dTZWFyY2g9e211bHRpcGxlfVxuICAgICAgICAgICAgICBzd2l0Y2hlckljb249e3RoaXMucmVuZGVyU3dpdGNoZXJJY29ufVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgICAgdHJlZUNoZWNrYWJsZT17Y2hlY2tib3h9XG4gICAgICAgICAgICAgIHRyZWVOb2RlRmlsdGVyUHJvcD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgbGlzdEl0ZW1IZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICBsaXN0SGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgIHRyZWVEYXRhPXt0cmVlRGF0YUZpbmFsfVxuICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17KHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiAyMDIxMDMyMyB2aXNpYmxlIGZhbHNlIOaXtui+k+WFpeahhuS8muiiq+aDheWGte+8jOS9huayoeacieiwg+eUqCBvblNlYXJjaFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2goXCJcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgICAgaWYgKG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ISFyaWdodEljb24gJiYgbXVsdGlwbGUgJiYgKFxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXtyaWdodEljb259IGNsYXNzTmFtZT17YCR7cHJlZml4fS1pY29uYH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbmZpZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVTZWxlY3RcbiJdfQ==