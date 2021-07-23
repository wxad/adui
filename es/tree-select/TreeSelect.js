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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJSY1RyZWVTZWxlY3QiLCJTSE9XX0FMTCIsIlNIT1dfUEFSRU5UIiwiU0hPV19DSElMRCIsIlRyZWVOb2RlIiwiUHJvcFR5cGVzIiwic2hhbGxvd0VxdWFsIiwiY2xhc3NOYW1lcyIsInRvQXJyYXkiLCJvbWl0IiwiQ29uZmlnQ29udGV4dCIsIkNoZWNrYm94IiwiSWNvbiIsIlBvcG92ZXIiLCJQb3J0YWwiLCJTcGlubmVyIiwiZ2V0UGxhY2VtZW50cyIsInByZWZpeCIsIm5vb3AiLCJzdHJhdGVnaWVzIiwiaXNBcnJheUluY2x1ZGVzIiwiYTEiLCJhMiIsImV2ZXJ5IiwibyIsImluY2x1ZGVzIiwiVHJlZVNlbGVjdCIsInByb3BzIiwic2VsZWN0IiwicG9ydGFsIiwid3JhcHBlciIsInRyZWVEYXRhIiwidHJlZVZhbHVlQWxsIiwidHJlZVZhbHVlRmxhdHRlbiIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInN0YXRlIiwic2F2ZVNlbGVjdCIsIm5vZGUiLCJzYXZlUG9ydGFsIiwic2F2ZVdyYXBwZXIiLCJyZW5kZXJTd2l0Y2hlckljb24iLCJpc0xlYWYiLCJsb2FkaW5nIiwiaGFuZGxlVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJzZXRUaW1lb3V0IiwiZm9yY2VVcGRhdGUiLCJ0b3BDb250ZW50IiwiaGFzaCIsInRvcENvbnRlbnRQb3J0YWxUYXJnZXQiLCJkcm9wZG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVsIiwiY3JlYXRlRWxlbWVudCIsIm9ubW91c2Vkb3duIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGRyZW4iLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGl0bGVMaXN0IiwidmFsdWVQYXJhbSIsImRpc2FibGVkIiwibXVsdGlwbGUiLCJvbkNoYW5nZSIsInZhbHVlUHJvcCIsInNhbWVWYWx1ZUVuYWJsZWQiLCJ2YWx1ZVN0YXRlIiwiZm9yRWFjaCIsInYiLCJzcGxpdGVkIiwic3BsaXQiLCJ2YWwiLCJsZW5ndGgiLCJmaWx0ZXIiLCJwdXNoIiwiU2V0IiwiaGFuZGxlU2VhcmNoIiwib25TZWFyY2giLCJmaWx0ZXJUcmVlTm9kZSIsImlucHV0IiwidHJlZU5vZGUiLCJrZXkiLCJ0aXRsZSIsImRhdGFUaXRsZSIsIlN0cmluZyIsImdldE1heFRhZ0NvdW50IiwibWF4VGFnQ291bnQiLCJtYXhIZWlnaHRGaXhlZCIsImhhbmRsZVNlbGVjdEFsbCIsImdldE1heFRhZ1BsYWNlaG9sZGVyIiwibm9kZXMiLCJyZXN1bHRSZW5kZXIiLCJwbGFjZWhvbGRlclRleHQiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwibGFiZWwiLCJtYXAiLCJpIiwidmFscyIsInNwbGljZSIsImxhYmVscyIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsInBvcG92ZXIiLCJwb3BvdmVyUHJvcHMiLCJyZXN0UHJvcHMiLCJkYXRhIiwiY2hpbGREYXRhIiwiY29udmVydFRyZWVEYXRhIiwiZGF0YU5vZGVQYXJhbSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJkYXRhTm9kZSIsImlzQWxsU2VsZWN0ZWQiLCJpbmRldGVybWluYXRlIiwic2VsZWN0QWxsIiwicHJvY2VzcyIsInBhcmVudFZhbHVlIiwiZGF0YUNoaWxkcmVuIiwibmV3VmFsIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImNoZWNrYWJsZSIsImRpc2FibGVDaGVja2JveCIsImxpc3RlbklucHV0Q2hhbmdlIiwidGFyZ2V0Iiwia2V5Q29kZSIsImNvbXBvbmVudERpZE1vdW50IiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2YWx1ZVByZXYiLCJoZWlnaHRGaXhlZCIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1ZmZpeCIsImxhc3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJlcnJvciIsImRlZmF1bHRWYWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInBsYWNlbWVudCIsInJpZ2h0SWNvbiIsInNob3dDaGVja2VkU3RyYXRlZ3kiLCJvdGhlclByb3BzIiwiY2xhc3NTZXQiLCJjaGVja2JveCIsInRydWVWYWx1ZSIsInAiLCJjb3VudCIsInRyZWVEYXRhRmluYWwiLCJCb29sZWFuIiwibXVsdGlMZXZlbCIsInNvbWUiLCJnZXRQb3B1cENvbnRhaW5lckNvbnRleHQiLCJhbGlnbkVkZ2UiLCJtYXJnaW5SaWdodCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJhcnJheSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFlBQVAsSUFDRUMsUUFERixFQUVFQyxXQUZGLEVBR0VDLFVBSEYsRUFJRUMsUUFKRixRQUtPLGdCQUxQO0FBTUEsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsY0FBekI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFlBQXZCO0FBQ0EsT0FBT0MsT0FBUCxN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LFdBQVcsRUFBRSxJQVBnQztBQVE3Q3hCLEVBQUFBLFFBQVEsRUFBRSxJQVJtQztBQVM3Q0MsRUFBQUEsUUFBUSxFQUFFcEQsSUFUbUM7QUFVN0NpSixFQUFBQSx1QkFBdUIsRUFBRWpKLElBVm9CO0FBVzdDa0UsRUFBQUEsUUFBUSxFQUFFbEUsSUFYbUM7QUFZN0NrSixFQUFBQSxTQUFTLEVBQUUsWUFaa0M7QUFhN0N2QixFQUFBQSxXQUFXLEVBQUUsS0FiZ0M7QUFjN0MzQyxFQUFBQSxZQUFZLEVBQUUsSUFkK0I7QUFlN0M0QyxFQUFBQSxhQUFhLEVBQUUsSUFmOEI7QUFnQjdDdUIsRUFBQUEsU0FBUyxFQUFFLE1BaEJrQztBQWlCN0M3RixFQUFBQSxnQkFBZ0IsRUFBRSxLQWpCMkI7QUFrQjdDd0QsRUFBQUEsU0FBUyxFQUFFLEtBbEJrQztBQW1CN0NzQyxFQUFBQSxtQkFBbUIsRUFBRSxhQW5Cd0I7QUFvQjdDckgsRUFBQUEsVUFBVSxFQUFFMkUsU0FwQmlDO0FBcUI3QzdGLEVBQUFBLFFBQVEsRUFBRTZGLFNBckJtQztBQXNCN0MzRCxFQUFBQSxLQUFLLEVBQUU7QUF0QnNDLEM7O0FBaEgzQ3ZDLFUsQ0F5SVVvSyx3QixHQUEyQixpQkFBaUM7QUFBQSxNQUE5QjdILEtBQThCLFNBQTlCQSxLQUE4Qjs7QUFDeEUsTUFBSUEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIsV0FBTztBQUNMQSxNQUFBQSxLQUFLLEVBQUxBO0FBREssS0FBUDtBQUdEOztBQUNELFNBQU8sSUFBUDtBQUNELEM7O0FBaEpHdkMsVSxDQWtKVXRCLFEsR0FBNEJBLFE7QUE2dEI1QyxlQUFlc0IsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSY1RyZWVTZWxlY3QsIHtcbiAgU0hPV19BTEwsXG4gIFNIT1dfUEFSRU5ULFxuICBTSE9XX0NISUxELFxuICBUcmVlTm9kZSxcbn0gZnJvbSBcInJjLXRyZWUtc2VsZWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi4vY29uZmlnLXByb3ZpZGVyXCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBQb3J0YWwgZnJvbSBcIi4uL3BvcnRhbFwiXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vc3Bpbm5lclwiXG5pbXBvcnQgZ2V0UGxhY2VtZW50cyBmcm9tIFwiLi4vdG9vbHRpcC9wbGFjZW1lbnRzXCJcbmltcG9ydCB7IFBsYWNlbWVudCB9IGZyb20gXCIuLi9wb3AtdHJpZ2dlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRyZWUtc2VsZWN0XCJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBzdHJhdGVnaWVzID0ge1xuICBcInNob3ctYWxsXCI6IFNIT1dfQUxMLFxuICBcInNob3ctY2hpbGRcIjogU0hPV19DSElMRCxcbiAgXCJzaG93LXBhcmVudFwiOiBTSE9XX1BBUkVOVCxcbn1cblxuLyoqXG4gKiBhMSDmmK/lkKbljIXlkKsgYTJcbiAqL1xuY29uc3QgaXNBcnJheUluY2x1ZGVzID0gKFxuICBhMTogUmVhY3QuUmVhY3RUZXh0W10sXG4gIGEyOiBSZWFjdC5SZWFjdFRleHRbXVxuKTogYm9vbGVhbiA9PiB7XG4gIGlmICghYTEgfHwgIWEyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gYTIuZXZlcnkoKG8pID0+IGExLmluY2x1ZGVzKG8pKVxufVxuXG5leHBvcnQgdHlwZSBUcmVlTm9kZVZhbHVlID0gUmVhY3QuUmVhY3RUZXh0W10gfCBudWxsXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlIHtcbiAgdmFsdWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIGtleTogc3RyaW5nXG4gIGRpc2FibGVkOiBib29sZWFuXG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFOb2RlIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIHZhbHVlPzogUmVhY3QuUmVhY3RUZXh0XG4gIHRpdGxlPzogUmVhY3QuUmVhY3ROb2RlXG4gIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlXG4gIGtleT86IFJlYWN0LlJlYWN0VGV4dFxuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhblxuICBjaGVja2FibGU/OiBib29sZWFuXG4gIHBvcG92ZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgcG9wb3ZlclByb3BzPzogSVBvcG92ZXJQcm9wc1xuICBjaGlsZHJlbj86IERhdGFOb2RlW11cbn1cblxuZXhwb3J0IHR5cGUgVHJlZURhdGEgPSBEYXRhTm9kZVtdIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGRlZmF1bHRWYWx1ZT86IFRyZWVOb2RlVmFsdWVcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICBoZWlnaHRGaXhlZD86IGJvb2xlYW5cbiAgbWF4VGFnQ291bnQ/OiBudWxsIHwgbnVtYmVyXG4gIG11bHRpcGxlPzogYm9vbGVhblxuICBvbkNoYW5nZT86ICh2YWx1ZTogVHJlZU5vZGVWYWx1ZSwgdGl0bGVMaXN0OiBSZWFjdC5SZWFjdE5vZGVbXSkgPT4gdm9pZFxuICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT86ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG4gIG9uU2VhcmNoPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgcGxhY2VtZW50PzogUGxhY2VtZW50XG4gIHJlc3VsdFJlbmRlcj86IG51bGwgfCAoKHZhbHVlczogSVRyZWVOb2RlW10pID0+IEpTWC5FbGVtZW50KVxuICByZXN1bHRWaXNpYmxlPzogYm9vbGVhblxuICBzYW1lVmFsdWVFbmFibGVkPzogYm9vbGVhblxuICBzZWxlY3RBbGw/OiBib29sZWFuXG4gIHNob3dDaGVja2VkU3RyYXRlZ3k/OiBcInNob3ctYWxsXCIgfCBcInNob3ctY2hpbGRcIiB8IFwic2hvdy1wYXJlbnRcIlxuICB0b3BDb250ZW50PzogUmVhY3QuUmVhY3ROb2RlXG4gIHRyZWVEYXRhPzogVHJlZURhdGFcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVTZWxlY3RTdGF0ZSB7XG4gIGhhc2g6IHN0cmluZ1xuICB0b3BDb250ZW50UG9ydGFsVGFyZ2V0PzogSFRNTERpdkVsZW1lbnRcbiAgdmFsdWU/OiBUcmVlTm9kZVZhbHVlXG4gIG1heEhlaWdodEZpeGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRyZWVOb2RlUHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNoZWNrYWJsZT86IGJvb2xlYW5cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGVcbiAga2V5Pzogc3RyaW5nXG4gIGV2ZW50S2V5Pzogc3RyaW5nXG4gIGlzTGVhZj86IGJvb2xlYW5cbiAgY2hlY2tlZD86IGJvb2xlYW5cbiAgZXhwYW5kZWQ/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIHNlbGVjdGVkPzogYm9vbGVhblxuICBzZWxlY3RhYmxlPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIOagkeW9oumAieaLqVxuICovXG5jbGFzcyBUcmVlU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElUcmVlU2VsZWN0UHJvcHMsIElUcmVlU2VsZWN0U3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog5YC86KKr6YCJ5oup5ZCO77yM5piv5ZCm6ZyA6KaB5riF56m65pCc57Si5qGGXG4gICAgICovXG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQjVxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDpu5jorqTpgInkuK3nmoQga2V5XG4gICAgICovXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbnpoHnlKhcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICAgKi9cbiAgICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6auY5bqm5piv5ZCm5Zu65a6a5LiA6KGM77yMVHJlZVNlbGVjdCDlsIbmoLnmja7lhoXlrrnljLrln5/lrr3luqboh6rliqjlsIbnu5PmnpzmlLbotbfvvIzlvIDlkK/ov5nkuKogUHJvcCDlkI4gVHJlZVNlbGVjdCDkvJrlv73nlaUgbWF4VGFnQ291bnQgUHJvcFxuICAgICAqL1xuICAgIGhlaWdodEZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmnIDlpJrmmL7npLrlpJrlsJHkuKogdGFn77yM5aaC5p6c6LaF6L+H5LqG5YiZ5Lul5pS26LW355qE5b2i5byP5Ye6546wXG4gICAgICovXG4gICAgbWF4VGFnQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5aSa6YCJ5qih5byPXG4gICAgICovXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWAvOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5LiL5ouJIHZpc2libGUg5Y+Y5YyW5pe255qE5Zue6LCD77yM5Y+C5pWwOiBib29sZWFuXG4gICAgICovXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOaQnOe0ouaXtueahOWbnuiwg++8jOWPguaVsDogdmFsdWVcbiAgICAgKi9cbiAgICBvblNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5by55Ye65L2N572uXG4gICAgICovXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJ0b3BcIixcbiAgICAgIFwibGVmdFwiLFxuICAgICAgXCJyaWdodFwiLFxuICAgICAgXCJib3R0b21cIixcbiAgICAgIFwidG9wTGVmdFwiLFxuICAgICAgXCJ0b3BSaWdodFwiLFxuICAgICAgXCJib3R0b21MZWZ0XCIsXG4gICAgICBcImJvdHRvbVJpZ2h0XCIsXG4gICAgICBcImxlZnRUb3BcIixcbiAgICAgIFwibGVmdEJvdHRvbVwiLFxuICAgICAgXCJyaWdodFRvcFwiLFxuICAgICAgXCJyaWdodEJvdHRvbVwiLFxuICAgIF0pLFxuICAgIC8qKlxuICAgICAqIOiuvue9rui+k+WFpeahhueahOm7mOiupOWGheWuuVxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruiHquWumuS5ieeahOe7k+aenOa4suafk1xuICAgICAqL1xuICAgIHJlc3VsdFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6L6T5YWl5qGG5YaF55qE5qCH562+5piv5ZCm5pi+56S677yM5q2kIFByb3Ag55So5LqO5oOz6KaB5bCG57uT5p6c5Yy65bGV56S65Zyo5Yir55qE5Zyw5pa555qE6ZyA5rGCXG4gICAgICovXG4gICAgcmVzdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5a6a5Yi25qCR5b2i6YCJ5oup5Zmo55qEaWNvblxuICAgICAqL1xuICAgIHJpZ2h0SWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDmmK/lkKblhYHorrjnm7jlkIzlgLzvvIzkvb/nlKjmg4XlhrXvvJrlpoLlkIzkuIDkuKrkurrlj6/og73lrZjlnKjkuo7kuKTkuKrnu4Tnu4fmnrbmnoTkuK3vvIzlpoLmnpzkvb/nlKjmraQgUHJvcO+8jOivt+WQjOaXtuS9v+eUqCByZXN1bHRWaXNpYmxlPXtmYWxzZX1cbiAgICAgKi9cbiAgICBzYW1lVmFsdWVFbmFibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/lhajpgInlip/og71cbiAgICAgKi9cbiAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWumuS5iemAieS4remhueWbnuWhq+eahOaWueW8j++8mlxuICAgICAqIDEuIHNob3ctYWxs77ya5pi+56S65YyF5ous54i26IqC54K555qE5omA5pyJ6YCJ5Lit6IqC54K577ybXG4gICAgICogMi4gc2hvdy1wYXJlbnTvvJrlj6rmmL7npLrniLboioLngrnvvJtcbiAgICAgKiAzLiBzaG93LWNoaWxk77ya5Y+q5pi+56S65a2Q6IqC54K544CC6buY6K6k5YC877yac2hvdy1wYXJlbnRcbiAgICAgKi9cbiAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJzaG93LWFsbFwiLFxuICAgICAgXCJzaG93LXBhcmVudFwiLFxuICAgICAgXCJzaG93LWNoaWxkXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog5LiL5ouJ5qGG6aG26YOo5pi+56S655qE6Ieq5a6a5LmJ5YWD57SgXG4gICAgICovXG4gICAgdG9wQ29udGVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICogdHJlZU5vZGVzIOaVsOaNru+8jOagvOW8j+WPgueFpyBpbnRlcmZhY2UgRGF0YU5vZGVcbiAgICAgKi9cbiAgICB0cmVlRGF0YTogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOWklumDqOaOp+WItu+8mumAieS4reeahCBrZXlcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRyZWVTZWxlY3RQcm9wcyA9IHtcbiAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgICBoZWlnaHRGaXhlZDogZmFsc2UsXG4gICAgbWF4VGFnQ291bnQ6IG51bGwsXG4gICAgbXVsdGlwbGU6IHRydWUsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgb25TZWFyY2g6IG5vb3AsXG4gICAgcGxhY2VtZW50OiBcImJvdHRvbUxlZnRcIixcbiAgICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgICByZXN1bHRSZW5kZXI6IG51bGwsXG4gICAgcmVzdWx0VmlzaWJsZTogdHJ1ZSxcbiAgICByaWdodEljb246IFwibWVudVwiLFxuICAgIHNhbWVWYWx1ZUVuYWJsZWQ6IGZhbHNlLFxuICAgIHNlbGVjdEFsbDogZmFsc2UsXG4gICAgc2hvd0NoZWNrZWRTdHJhdGVneTogXCJzaG93LXBhcmVudFwiLFxuICAgIHRvcENvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgICB0cmVlRGF0YTogdW5kZWZpbmVkLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoeyB2YWx1ZSB9OiBJVHJlZVNlbGVjdFByb3BzKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgVHJlZU5vZGU6IHR5cGVvZiBUcmVlTm9kZSA9IFRyZWVOb2RlXG5cbiAgcHVibGljIHNlbGVjdDogdHlwZW9mIFJjVHJlZVNlbGVjdFxuXG4gIHB1YmxpYyBwb3J0YWw6IFJlYWN0LlJlYWN0Tm9kZVxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyB0cmVlRGF0YTogRGF0YU5vZGVbXVxuXG4gIHB1YmxpYyB0cmVlVmFsdWVBbGw6IGFueVtdXG5cbiAgcHVibGljIHRyZWVWYWx1ZUZsYXR0ZW46IGFueVtdID0gW11cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRyZWVTZWxlY3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgdmFsdWUsIGRlZmF1bHRWYWx1ZSB9ID0gcHJvcHNcbiAgICBjb25zdCB2YWx1ZVN0YXRlID0gdmFsdWUgIT09IG51bGwgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhc2g6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygzLCA4KSxcbiAgICAgIHZhbHVlOiB2YWx1ZVN0YXRlLFxuICAgICAgbWF4SGVpZ2h0Rml4ZWQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIG5leHRTdGF0ZTogSVRyZWVTZWxlY3RTdGF0ZVxuICApID0+XG4gICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuXG4gIHB1YmxpYyBzYXZlU2VsZWN0ID0gKG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT4ge1xuICAgIHRoaXMuc2VsZWN0ID0gbm9kZVxuICB9XG5cbiAgcHVibGljIHNhdmVQb3J0YWwgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5wb3J0YWwgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVdyYXBwZXIgPSAobm9kZTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICB0aGlzLndyYXBwZXIgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyU3dpdGNoZXJJY29uID0gKHsgaXNMZWFmLCBsb2FkaW5nIH06IElUcmVlTm9kZVByb3BzKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciBzaXplPVwibWluaVwiIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLXN3aXRjaGVyLWljb25gfSAvPlxuICAgIH1cbiAgICBpZiAoaXNMZWFmKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEljb24gaWNvbj1cInRyaWFuZ2xlLXJpZ2h0XCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtc3dpdGNoZXItaWNvbmB9IC8+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVZpc2libGVDaGFuZ2UgPSAodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9wQ29udGVudCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCB7IGhhc2gsIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS4i+aLieahhuaYvuekuiAmJiDkvKDlhaXkuobpobbpg6joh6rlrprkuYnlhYPntKAgJiYg6aaW5qyh5re75YqgXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodmlzaWJsZSAmJiB0b3BDb250ZW50ICYmICF0b3BDb250ZW50UG9ydGFsVGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC4ke3ByZWZpeH0tZHJvcGRvd25fJHtoYXNofWBcbiAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgaWYgKGRyb3Bkb3duKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIGVsLm9ubW91c2Vkb3duID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3Bkb3duLmluc2VydEJlZm9yZShlbCwgZHJvcGRvd24uY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdG9wQ29udGVudFBvcnRhbFRhcmdldDogZWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCAwKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUNoYW5nZSA9IChcbiAgICB2YWx1ZTogVHJlZU5vZGVWYWx1ZSxcbiAgICB0aXRsZUxpc3Q6IFJlYWN0LlJlYWN0Tm9kZVtdXG4gICkgPT4ge1xuICAgIGxldCB2YWx1ZVBhcmFtID0gW10gYXMgUmVhY3QuUmVhY3RUZXh0W11cbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB2YWx1ZTogdmFsdWVQcm9wLFxuICAgICAgc2FtZVZhbHVlRW5hYmxlZCxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWU6IHZhbHVlU3RhdGUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAoc2FtZVZhbHVlRW5hYmxlZCkge1xuICAgICAgICB2YWx1ZT8uZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIGNvbnN0IHNwbGl0ZWQgPSBgJHt2fWAuc3BsaXQoXCJfX1wiKVxuICAgICAgICAgIGNvbnN0IHZhbCA9IHNwbGl0ZWRbc3BsaXRlZC5sZW5ndGggLSAxXVxuICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB2YWx1ZS5maWx0ZXIoKG8pID0+IGAke299YC5pbmNsdWRlcyhgX18ke3ZhbH1gKSlcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBsZW5ndGggPT09XG4gICAgICAgICAgICB0aGlzLnRyZWVWYWx1ZUZsYXR0ZW4uZmlsdGVyKChvKSA9PiBgJHtvfWAuaW5jbHVkZXMoYF9fJHt2YWx9YCkpXG4gICAgICAgICAgICAgIC5sZW5ndGhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIOihqOekuuWFqOWMheWQq+S6hu+8jOWImeS/neeVmVxuICAgICAgICAgICAgdmFsdWVQYXJhbS5wdXNoKHZhbClcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZVN0YXRlPy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICB2YWx1ZVBhcmFtLnB1c2godmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWVQYXJhbSA9IHZhbHVlXG4gICAgICB9XG5cbiAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICB2YWx1ZVBhcmFtID0gWy4uLm5ldyBTZXQodmFsdWVQYXJhbSldXG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZVBhcmFtIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodmFsdWVQYXJhbSwgdGl0bGVMaXN0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IG9uU2VhcmNoIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICBvblNlYXJjaCh2YWwpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJUcmVlTm9kZSA9IChpbnB1dDogc3RyaW5nLCB0cmVlTm9kZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBrZXksIHRpdGxlLCB2YWx1ZSwgZGF0YVRpdGxlIH0gPSB0cmVlTm9kZVxuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoZGF0YVRpdGxlIHx8IHRpdGxlKS5pbmNsdWRlcyhpbnB1dClcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdDb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSwgbWF4SGVpZ2h0Rml4ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChcbiAgICAgICghbWF4VGFnQ291bnQgfHwgIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8PSBtYXhUYWdDb3VudCkgJiZcbiAgICAgICFtYXhIZWlnaHRGaXhlZFxuICAgICkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTZWxlY3RBbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZTogdmFsdWVQcm9wLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoaXNBcnJheUluY2x1ZGVzKHZhbHVlIHx8IFtdLCB0aGlzLnRyZWVWYWx1ZUFsbCkpIHtcbiAgICAgIC8qKlxuICAgICAgICog5bey5YWo6YCJXG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZVByb3AgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKFtdLCBbXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiDmuIXnqbpcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMudHJlZVZhbHVlQWxsIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UodGhpcy50cmVlVmFsdWVBbGwsIFtdKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhUYWdQbGFjZWhvbGRlciA9IChub2RlczogSVRyZWVOb2RlW10pID0+IHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCB7IG9uQ2hhbmdlLCByZXN1bHRSZW5kZXIsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocmVzdWx0UmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UmVuZGVyKG5vZGVzKVxuICAgIH1cblxuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBub2Rlc1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IChcbiAgICAgIDw+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiY2FsYygxMDAlIC0gNTNweClcIixcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsXG4gICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bm9kZXNbMF0/LmxhYmVsfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwidG9wXCIgfX0+XG4gICAgICAgICAg562JIHtsZW5ndGh9IOS4qlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8Lz5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heC1wb3BvdmVyLWl0ZW0td3JhcHBlcmB9PlxuICAgICAgICAgICAge25vZGVzLm1hcCgoeyBrZXksIGRpc2FibGVkLCBsYWJlbCB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4LXBvcG92ZXItaXRlbWB9IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7IWRpc2FibGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxzID0gbm9kZXMubWFwKChvKSA9PiBvLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFscy5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHZhbHMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gbm9kZXMubWFwKChvKSA9PiBvLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzLnNwbGljZShpLCAxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UodmFscywgbGFiZWxzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBwb3B1cENsYXNzTmFtZT17YCR7cHJlZml4fS1tYXhQb3BvdmVyYH1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXhQbGFjZWhvbGRlcmB9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICA+XG4gICAgICAgICAge3BsYWNlaG9sZGVyVGV4dH1cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBbXSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFtdLCBbXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgY29udmVydENoaWxkcmVuVG9EYXRhID0gKG5vZGVzOiBhbnkpOiBEYXRhTm9kZVtdID0+XG4gICAgdG9BcnJheShub2RlcylcbiAgICAgIC5tYXAoKG5vZGU6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KG5vZGUpIHx8ICFub2RlLnR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBwb3BvdmVyLFxuICAgICAgICAgICAgcG9wb3ZlclByb3BzLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAuLi5yZXN0UHJvcHNcbiAgICAgICAgICB9LFxuICAgICAgICB9ID0gbm9kZSBhcyBSZWFjdC5SZWFjdEVsZW1lbnRcblxuICAgICAgICAvKipcbiAgICAgICAgICog5aaC5p6c5pyJIHBvcG92ZXIg5YiZ5Zyo6L+Z6YeM5YyF6KOF5LiA5LiLIHRpdGxlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBkYXRhVGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHRpdGxlOiBwb3BvdmVyID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXJgfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxQb3BvdmVyIHBvcHVwPXtwb3BvdmVyfSBwbGFjZW1lbnQ9XCJyaWdodFwiIHsuLi5wb3BvdmVyUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyLXBsYWNlaG9sZGVyYH0gLz5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgKSxcbiAgICAgICAgICAuLi5yZXN0UHJvcHMsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGlsZERhdGEgPSB0aGlzLmNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbilcbiAgICAgICAgaWYgKGNoaWxkRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBkYXRhLmNoaWxkcmVuID0gY2hpbGREYXRhXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGRhdGEpID0+IGRhdGEpXG5cbiAgcHVibGljIGNvbnZlcnRUcmVlRGF0YSA9IChcbiAgICBkYXRhTm9kZVBhcmFtOiBUcmVlRGF0YSxcbiAgICBvcHRpb25zOiB7IHNlbGVjdEFsbD86IGJvb2xlYW4gfSA9IHt9XG4gICk6IFRyZWVEYXRhID0+IHtcbiAgICBjb25zdCB7IHNhbWVWYWx1ZUVuYWJsZWQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWRhdGFOb2RlUGFyYW0pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgY29uc3QgZGF0YU5vZGUgPSBbLi4uZGF0YU5vZGVQYXJhbV1cbiAgICBjb25zdCB7IHZhbHVlOiB2YWx1ZVN0YXRlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgaXNBbGxTZWxlY3RlZCA9IGlzQXJyYXlJbmNsdWRlcyh2YWx1ZVN0YXRlIHx8IFtdLCB0aGlzLnRyZWVWYWx1ZUFsbClcbiAgICBjb25zdCBpbmRldGVybWluYXRlID0gIWlzQWxsU2VsZWN0ZWQgJiYgISF2YWx1ZVN0YXRlPy5sZW5ndGhcblxuICAgIGlmIChkYXRhTm9kZVswXT8ua2V5ID09PSBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCkge1xuICAgICAgcmV0dXJuIGRhdGFOb2RlXG4gICAgfVxuXG4gICAgaWYgKHNhbWVWYWx1ZUVuYWJsZWQgJiYgIWRhdGFOb2RlWzBdPy5kYXRhVGl0bGUpIHtcbiAgICAgIHRoaXMudHJlZVZhbHVlRmxhdHRlbiA9IFtdXG4gICAgfVxuXG4gICAgY29uc3QgeyBzZWxlY3RBbGwgfSA9IG9wdGlvbnNcblxuICAgIGNvbnN0IHByb2Nlc3MgPSAobm9kZTogRGF0YU5vZGVbXSwgcGFyZW50VmFsdWU/OiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICAgIG5vZGUuZm9yRWFjaCgobykgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRhdGFDaGlsZHJlbixcbiAgICAgICAgICBkYXRhVGl0bGUsXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgcG9wb3ZlcixcbiAgICAgICAgICBwb3BvdmVyUHJvcHMgPSB7fSxcbiAgICAgICAgfSA9IG9cbiAgICAgICAgaWYgKGRhdGFUaXRsZSAmJiBkYXRhQ2hpbGRyZW4pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogZGF0YVRpdGxlIOeUqOS6juaciSBwb3BvdmVyIOeahOaDheWGteS4i+eahOaQnOe0olxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgby5kYXRhVGl0bGUgPSB0aXRsZVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliqDlhaUgZGF0YUNoaWxkcmVuIOaYr+S4uuS6huaUr+aMgSBsb2FkRGF0YSDnmoTkvb/nlKhcbiAgICAgICAgICovXG4gICAgICAgIGlmIChjaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICAgICAgby5kYXRhQ2hpbGRyZW4gPSAxXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgby5rZXkgPSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvLnZhbHVlID0ga2V5XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNhbWVWYWx1ZUVuYWJsZWQpIHtcbiAgICAgICAgICBjb25zdCBuZXdWYWwgPSBgJHtwYXJlbnRWYWx1ZSA/IGAke3BhcmVudFZhbHVlfV9fYCA6IFwiXCJ9JHt2YWx1ZX1gXG4gICAgICAgICAgby5rZXkgPSBuZXdWYWxcbiAgICAgICAgICBvLnZhbHVlID0gbmV3VmFsXG4gICAgICAgICAgaWYgKCF0aGlzLnRyZWVWYWx1ZUZsYXR0ZW4uaW5jbHVkZXMobmV3VmFsKSkge1xuICAgICAgICAgICAgdGhpcy50cmVlVmFsdWVGbGF0dGVuLnB1c2gobmV3VmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICAgICAgby50aXRsZSA9IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyYH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8UG9wb3ZlciBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlcmB9IC8+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICBwcm9jZXNzKGNoaWxkcmVuLCBvLnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb2Nlc3MoZGF0YU5vZGUpXG5cbiAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICBkYXRhTm9kZS51bnNoaWZ0KHtcbiAgICAgICAgdGl0bGU6IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGwtaW5uZXJgfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWxlY3RBbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg5YWo6YCJXG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU9e2luZGV0ZXJtaW5hdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGxgLFxuICAgICAgICBrZXk6IGAke3ByZWZpeH0tdHJlZS10cmVlbm9kZS1hbGxgLFxuICAgICAgICBjaGVja2FibGU6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlQ2hlY2tib3g6IHRydWUsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhTm9kZVxuICB9XG5cbiAgbGlzdGVuSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGFyZ2V0OiB7IHZhbHVlIH0sXG4gICAgICBrZXlDb2RlLFxuICAgIH0gPSBlXG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gOCAmJiB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCB7IG1heFRhZ0NvdW50LCBwbGFjZWhvbGRlciwgcmVzdWx0VmlzaWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy8g56aB5q2iIHRyZWUtc2VsZWN0IOmUruebmOWbnuWIoOS8muW9seWTjSB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5saXN0ZW5JbnB1dENoYW5nZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsICYmIHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlICYmIHRoaXMud3JhcHBlcikge1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKFxuICAgIF86IElUcmVlU2VsZWN0UHJvcHMsXG4gICAgeyB2YWx1ZTogdmFsdWVQcmV2IH06IElUcmVlU2VsZWN0U3RhdGVcbiAgKSA9PiB7XG4gICAgY29uc3QgeyByZXN1bHRWaXNpYmxlLCBoZWlnaHRGaXhlZCwgcGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhhc2gsIHZhbHVlLCBtYXhIZWlnaHRGaXhlZCB9ID0gdGhpcy5zdGF0ZVxuICAgIC8qKlxuICAgICAqIHJlc3VsdFZpc2libGUg5Li6IGZhbHNlIOaXtu+8jCBzZWxlY3RvciDpq5jluqbkuI3kvJrmlLnlj5jjgIJcbiAgICAgKiDmoLnmja7miJHnmoTnu4/pqowgUG9wdXAg6Kem5Y+R6YeN5paw5a6a5L2N55qE5pe25py65piv77yaXG4gICAgICogMS4gd2luZG93IHJlc2l6ZVxuICAgICAqIDIuIHJlc2l6ZSBvYnNlcnZlciDkuoYgc2VsZWN0b3JcbiAgICAgKiDlm6DmraTov5nph4zmiYvliqjop6blj5EgcmVzaXplXG4gICAgICovXG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKVxuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgICAgICB9XG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGlmIChoZWlnaHRGaXhlZCAmJiB2YWx1ZVByZXY/Lmxlbmd0aCAhPT0gdmFsdWU/Lmxlbmd0aCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC4ke3ByZWZpeH0td3JhcHBlcl8ke2hhc2h9IC4ke3ByZWZpeH0tc2VsZWN0aW9uLW92ZXJmbG93YFxuICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGNvbnN0IHN1ZmZpeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC4ke3ByZWZpeH0td3JhcHBlcl8ke2hhc2h9IC4ke3ByZWZpeH0tc2VsZWN0aW9uLW92ZXJmbG93LWl0ZW0tc3VmZml4YFxuICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgIGNvbnN0IGxhc3QgPSBzdWZmaXguY2hpbGRyZW5bXG4gICAgICAgICAgc3VmZml4LmNoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICAgICAgXSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBpZiAoXG4gICAgICAgICAgbGFzdC5vZmZzZXRMZWZ0ID4gd3JhcHBlci5vZmZzZXRXaWR0aCAtIDMwICYmXG4gICAgICAgICAgIW1heEhlaWdodEZpeGVkICYmXG4gICAgICAgICAgdmFsdWVQcmV2ICYmXG4gICAgICAgICAgdmFsdWUgJiZcbiAgICAgICAgICB2YWx1ZVByZXYubGVuZ3RoIDwgdmFsdWUubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWF4SGVpZ2h0Rml4ZWQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBsYXN0Lm9mZnNldExlZnQgPCB3cmFwcGVyLm9mZnNldFdpZHRoIC0gMzAgJiZcbiAgICAgICAgICBtYXhIZWlnaHRGaXhlZCAmJlxuICAgICAgICAgIHZhbHVlUHJldiAmJlxuICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgdmFsdWVQcmV2Lmxlbmd0aCA+IHZhbHVlLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1heEhlaWdodEZpeGVkOiBmYWxzZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGhlaWdodEZpeGVkLFxuICAgICAgbWF4VGFnQ291bnQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByaWdodEljb24sXG4gICAgICByZXN1bHRSZW5kZXIsXG4gICAgICByZXN1bHRWaXNpYmxlLFxuICAgICAgc2FtZVZhbHVlRW5hYmxlZCxcbiAgICAgIHNlbGVjdEFsbCxcbiAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3ksXG4gICAgICB0b3BDb250ZW50LFxuICAgICAgdHJlZURhdGEsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlc3RQcm9wczogYW55ID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcIm9uQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VhcmNoXCIsXG4gICAgICBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGhhc2gsIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQsIHZhbHVlLCBtYXhIZWlnaHRGaXhlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwge1xuICAgICAgW2Ake3ByZWZpeH1fcmVzdWx0SGlkZGVuYF06ICFyZXN1bHRWaXNpYmxlLFxuICAgIH0pXG5cbiAgICBsZXQgY2hlY2tib3g6IGFueSA9IG11bHRpcGxlXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBjaGVja2JveCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVTdmdgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIHg9XCIxXCJcbiAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtY2hlY2tib3gtY2hlY2tlZFN2Z2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXN0UHJvcHMudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGlmIChzYW1lVmFsdWVFbmFibGVkKSB7XG4gICAgICBjb25zdCB0cnVlVmFsdWU6IFRyZWVOb2RlVmFsdWUgPSBbXVxuICAgICAgaWYgKHJlc3RQcm9wcy52YWx1ZSkge1xuICAgICAgICByZXN0UHJvcHMudmFsdWUuZm9yRWFjaCgobzogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmVlVmFsdWVGbGF0dGVuLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ZWQgPSBwLnNwbGl0KFwiX19cIilcbiAgICAgICAgICAgIGlmIChzcGxpdGVkW3NwbGl0ZWQubGVuZ3RoIC0gMV0gPT09IG8pIHtcbiAgICAgICAgICAgICAgdHJ1ZVZhbHVlLnB1c2gocClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmVzdFByb3BzLnZhbHVlID0gdHJ1ZVZhbHVlXG4gICAgfVxuXG4gICAgaWYgKG1heFRhZ0NvdW50ICE9PSBudWxsIHx8IG1heEhlaWdodEZpeGVkKSB7XG4gICAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0TWF4VGFnQ291bnQoKVxuICAgICAgaWYgKGNvdW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IGNvdW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdFJlbmRlcikge1xuICAgICAgcmVzdFByb3BzLm1heFRhZ0NvdW50ID0gMFxuICAgIH1cblxuICAgIGNvbnN0IHRyZWVEYXRhRmluYWwgPVxuICAgICAgdGhpcy5jb252ZXJ0VHJlZURhdGEodHJlZURhdGEgfHwgdGhpcy5jb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pLCB7XG4gICAgICAgIHNlbGVjdEFsbCxcbiAgICAgIH0pIHx8IFtdXG5cbiAgICB0aGlzLnRyZWVEYXRhID0gdHJlZURhdGFGaW5hbFxuICAgIHRoaXMudHJlZVZhbHVlQWxsID0gdHJlZURhdGFGaW5hbFxuICAgICAgLm1hcCgoeyB2YWx1ZTogdmFsLCBkaXNhYmxlZCwgZGlzYWJsZUNoZWNrYm94LCBjaGVja2FibGUgfSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAhZGlzYWJsZUNoZWNrYm94ICYmXG4gICAgICAgICAgY2hlY2thYmxlICE9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcblxuICAgIC8vIOaYr+WQpuaYr+WkmuWxgue6p1xuICAgIGNvbnN0IG11bHRpTGV2ZWwgPSB0cmVlRGF0YUZpbmFsLnNvbWUoKG8pID0+IG8uY2hpbGRyZW4/Lmxlbmd0aClcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgYCR7cHJlZml4fS13cmFwcGVyICR7cHJlZml4fS13cmFwcGVyXyR7aGFzaH1gLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1tYXhUYWdgXTogdGhpcy5nZXRNYXhUYWdDb3VudCgpICE9PSBudWxsLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXdyYXBwZXItZml4ZWRgXTogaGVpZ2h0Rml4ZWQsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1yZXN1bHRSZW5kZXJgXTogISFyZXN1bHRSZW5kZXIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVdyYXBwZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RvcENvbnRlbnQgJiYgdG9wQ29udGVudFBvcnRhbFRhcmdldCAmJiAoXG4gICAgICAgICAgICAgIDxQb3J0YWwgcmVmPXt0aGlzLnNhdmVQb3J0YWx9IGNvbnRhaW5lcj17dG9wQ29udGVudFBvcnRhbFRhcmdldH0+XG4gICAgICAgICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxSY1RyZWVTZWxlY3RcbiAgICAgICAgICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU9e1xuICAgICAgICAgICAgICAgIHJlc3VsdFZpc2libGUgPyBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YCwge1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLW11bHRpcGxlYF06IG11bHRpcGxlLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLXNpbmdsZWBdOiAhbXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tYWxsYF06IHNlbGVjdEFsbCxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1zaW5nbGUtbGV2ZWxgXTogIW11bHRpTGV2ZWwsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBkcm9wZG93blBvcHVwQWxpZ249e1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudCAmJiBnZXRQbGFjZW1lbnRzKHsgYWxpZ25FZGdlOiB0cnVlIH0pW3BsYWNlbWVudF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmaWx0ZXJUcmVlTm9kZT17dGhpcy5maWx0ZXJUcmVlTm9kZX1cbiAgICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgICAgICAgaW5wdXRJY29uPXs8SWNvbiBpY29uPVwidHJpYW5nbGUtZG93blwiIC8+fVxuICAgICAgICAgICAgICBtYXhUYWdQbGFjZWhvbGRlcj17dGhpcy5nZXRNYXhUYWdQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImZpbGUtb3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLXRyYW5zcGFyZW50LWdyYXktNjAwKVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjRweFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAg5peg5Yy56YWN6aG5XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXh9XG4gICAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlU2VsZWN0fVxuICAgICAgICAgICAgICByZW1vdmVJY29uPXs8SWNvbiBpY29uPVwiY2FuY2VsXCIgaW50ZXJhY3RpdmUgc2l6ZT17MTZ9IC8+fVxuICAgICAgICAgICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5PXtcbiAgICAgICAgICAgICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5ICYmIHN0cmF0ZWdpZXNbc2hvd0NoZWNrZWRTdHJhdGVneV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzaG93U2VhcmNoPXttdWx0aXBsZX1cbiAgICAgICAgICAgICAgc3dpdGNoZXJJY29uPXt0aGlzLnJlbmRlclN3aXRjaGVySWNvbn1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJzbGlkZS11cFwiXG4gICAgICAgICAgICAgIHRyZWVDaGVja2FibGU9e2NoZWNrYm94fVxuICAgICAgICAgICAgICB0cmVlTm9kZUZpbHRlclByb3A9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGxpc3RJdGVtSGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgbGlzdEhlaWdodD17MjgwfVxuICAgICAgICAgICAgICB0cmVlRGF0YT17dHJlZURhdGFGaW5hbH1cbiAgICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U9eyh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogMjAyMTAzMjMgdmlzaWJsZSBmYWxzZSDml7bovpPlhaXmoYbkvJrooqvmg4XlhrXvvIzkvYbmsqHmnInosIPnlKggb25TZWFyY2hcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoKFwiXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICAgIGlmIChvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UodmlzaWJsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyEhcmlnaHRJY29uICYmIG11bHRpcGxlICYmIChcbiAgICAgICAgICAgICAgPEljb24gaWNvbj17cmlnaHRJY29ufSBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlU2VsZWN0XG4iXX0=