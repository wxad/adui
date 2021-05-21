function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      }, nodes[0].label), React.createElement("span", {
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
            }, title), React.createElement(Popover, _extends({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdHJlZS1zZWxlY3QvVHJlZVNlbGVjdC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJSY1RyZWVTZWxlY3QiLCJTSE9XX0FMTCIsIlNIT1dfUEFSRU5UIiwiU0hPV19DSElMRCIsIlRyZWVOb2RlIiwiUHJvcFR5cGVzIiwic2hhbGxvd0VxdWFsIiwiY2xhc3NOYW1lcyIsInRvQXJyYXkiLCJvbWl0IiwiQ29uZmlnQ29udGV4dCIsIkNoZWNrYm94IiwiSWNvbiIsIlBvcG92ZXIiLCJQb3J0YWwiLCJTcGlubmVyIiwiZ2V0UGxhY2VtZW50cyIsInByZWZpeCIsIm5vb3AiLCJzdHJhdGVnaWVzIiwiaXNBcnJheUluY2x1ZGVzIiwiYTEiLCJhMiIsImV2ZXJ5IiwibyIsImluY2x1ZGVzIiwiVHJlZVNlbGVjdCIsInByb3BzIiwic2VsZWN0IiwicG9ydGFsIiwid3JhcHBlciIsInRyZWVEYXRhIiwidHJlZVZhbHVlQWxsIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic3RhdGUiLCJzYXZlU2VsZWN0Iiwibm9kZSIsInNhdmVQb3J0YWwiLCJzYXZlV3JhcHBlciIsInJlbmRlclN3aXRjaGVySWNvbiIsImlzTGVhZiIsImxvYWRpbmciLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwidmlzaWJsZSIsInNldFRpbWVvdXQiLCJmb3JjZVVwZGF0ZSIsInRvcENvbnRlbnQiLCJoYXNoIiwidG9wQ29udGVudFBvcnRhbFRhcmdldCIsImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwib25tb3VzZWRvd24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJpbnNlcnRCZWZvcmUiLCJjaGlsZHJlbiIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJ0aXRsZUxpc3QiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwidmFsdWVQcm9wIiwiaGFuZGxlU2VhcmNoIiwidmFsIiwib25TZWFyY2giLCJmaWx0ZXJUcmVlTm9kZSIsImlucHV0IiwidHJlZU5vZGUiLCJrZXkiLCJ0aXRsZSIsImRhdGFUaXRsZSIsIlN0cmluZyIsImdldE1heFRhZ0NvdW50IiwibWF4VGFnQ291bnQiLCJtYXhIZWlnaHRGaXhlZCIsImxlbmd0aCIsImhhbmRsZVNlbGVjdEFsbCIsImdldE1heFRhZ1BsYWNlaG9sZGVyIiwibm9kZXMiLCJyZXN1bHRSZW5kZXIiLCJwbGFjZWhvbGRlclRleHQiLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwibGFiZWwiLCJtYXAiLCJpIiwidmFscyIsInNwbGljZSIsImxhYmVscyIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnZlcnRDaGlsZHJlblRvRGF0YSIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsInBvcG92ZXIiLCJwb3BvdmVyUHJvcHMiLCJyZXN0UHJvcHMiLCJkYXRhIiwiY2hpbGREYXRhIiwiZmlsdGVyIiwiY29udmVydFRyZWVEYXRhIiwiZGF0YU5vZGVQYXJhbSIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJkYXRhTm9kZSIsInZhbHVlU3RhdGUiLCJpc0FsbFNlbGVjdGVkIiwiaW5kZXRlcm1pbmF0ZSIsInNlbGVjdEFsbCIsInByb2Nlc3MiLCJmb3JFYWNoIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImNoZWNrYWJsZSIsImRpc2FibGVDaGVja2JveCIsImxpc3RlbklucHV0Q2hhbmdlIiwidGFyZ2V0Iiwia2V5Q29kZSIsImNvbXBvbmVudERpZE1vdW50IiwicGxhY2Vob2xkZXIiLCJyZXN1bHRWaXNpYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl8iLCJ2YWx1ZVByZXYiLCJoZWlnaHRGaXhlZCIsIndpbmRvdyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1ZmZpeCIsImxhc3QiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJlcnJvciIsImRlZmF1bHRWYWx1ZSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImF1dG9DbGVhclNlYXJjaFZhbHVlIiwiZ2V0UG9wdXBDb250YWluZXIiLCJtdWx0aXBsZSIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwicGxhY2VtZW50IiwicmlnaHRJY29uIiwic2hvd0NoZWNrZWRTdHJhdGVneSIsIm90aGVyUHJvcHMiLCJjbGFzc1NldCIsImNoZWNrYm94IiwiY291bnQiLCJ0cmVlRGF0YUZpbmFsIiwiQm9vbGVhbiIsIm11bHRpTGV2ZWwiLCJzb21lIiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwiYWxpZ25FZGdlIiwibWFyZ2luUmlnaHQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxZQUFQLElBQ0VDLFFBREYsRUFFRUMsV0FGRixFQUdFQyxVQUhGLEVBSUVDLFFBSkYsUUFLTyxnQkFMUDtBQU1BLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGNBQXpCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsOEJBQXBCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixlQUFqQjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsb0JBQTlCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixhQUFyQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsU0FBakI7QUFDQSxPQUFPQyxPQUFQ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QUFBQSxpQkFBaUIsRUFBRSxJQUwwQjtBQU03Q2YsRUFBQUEsV0FBVyxFQUFFLEtBTmdDO0FBTzdDdkQsRUFBQUEsV0FBVyxFQUFFLElBUGdDO0FBUTdDdUUsRUFBQUEsUUFBUSxFQUFFLElBUm1DO0FBUzdDcEYsRUFBQUEsUUFBUSxFQUFFakQsSUFUbUM7QUFVN0NzSSxFQUFBQSx1QkFBdUIsRUFBRXRJLElBVm9CO0FBVzdDcUQsRUFBQUEsUUFBUSxFQUFFckQsSUFYbUM7QUFZN0N1SSxFQUFBQSxTQUFTLEVBQUUsWUFaa0M7QUFhN0N4QixFQUFBQSxXQUFXLEVBQUUsS0FiZ0M7QUFjN0MzQyxFQUFBQSxZQUFZLEVBQUUsSUFkK0I7QUFlN0M0QyxFQUFBQSxhQUFhLEVBQUUsSUFmOEI7QUFnQjdDd0IsRUFBQUEsU0FBUyxFQUFFLE1BaEJrQztBQWlCN0NwQyxFQUFBQSxTQUFTLEVBQUUsS0FqQmtDO0FBa0I3Q3FDLEVBQUFBLG1CQUFtQixFQUFFLGFBbEJ3QjtBQW1CN0MzRyxFQUFBQSxVQUFVLEVBQUVpRSxTQW5CaUM7QUFvQjdDbEYsRUFBQUEsUUFBUSxFQUFFa0YsU0FwQm1DO0FBcUI3Q2pELEVBQUFBLEtBQUssRUFBRTtBQXJCc0MsQzs7QUE1RzNDdEMsVSxDQW9JVXVKLHdCLEdBQTJCLGlCQUFpQztBQUFBLE1BQTlCakgsS0FBOEIsU0FBOUJBLEtBQThCOztBQUN4RSxNQUFJQSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQixXQUFPO0FBQ0xBLE1BQUFBLEtBQUssRUFBTEE7QUFESyxLQUFQO0FBR0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQzs7QUEzSUd0QyxVLENBNklVdEIsUSxHQUE0QkEsUTtBQWlwQjVDLGVBQWVzQixVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFJjVHJlZVNlbGVjdCwge1xuICBTSE9XX0FMTCxcbiAgU0hPV19QQVJFTlQsXG4gIFNIT1dfQ0hJTEQsXG4gIFRyZWVOb2RlLFxufSBmcm9tIFwicmMtdHJlZS1zZWxlY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvbGliL0NoaWxkcmVuL3RvQXJyYXlcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciwgeyBJUG9wb3ZlclByb3BzIH0gZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vcG9ydGFsXCJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9zcGlubmVyXCJcbmltcG9ydCBnZXRQbGFjZW1lbnRzIGZyb20gXCIuLi90b29sdGlwL3BsYWNlbWVudHNcIlxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSBcIi4uL3BvcC10cmlnZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBwcmVmaXggPSBcImFkdWktdHJlZS1zZWxlY3RcIlxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHN0cmF0ZWdpZXMgPSB7XG4gIFwic2hvdy1hbGxcIjogU0hPV19BTEwsXG4gIFwic2hvdy1jaGlsZFwiOiBTSE9XX0NISUxELFxuICBcInNob3ctcGFyZW50XCI6IFNIT1dfUEFSRU5ULFxufVxuXG4vKipcbiAqIGExIOaYr+WQpuWMheWQqyBhMlxuICovXG5jb25zdCBpc0FycmF5SW5jbHVkZXMgPSAoXG4gIGExOiBSZWFjdC5SZWFjdFRleHRbXSxcbiAgYTI6IFJlYWN0LlJlYWN0VGV4dFtdXG4pOiBib29sZWFuID0+IHtcbiAgaWYgKCFhMSB8fCAhYTIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBhMi5ldmVyeSgobykgPT4gYTEuaW5jbHVkZXMobykpXG59XG5cbmV4cG9ydCB0eXBlIFRyZWVOb2RlVmFsdWUgPSBzdHJpbmdbXSB8IG51bWJlcltdIHwgbnVsbFxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZSB7XG4gIHZhbHVlOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBrZXk6IHN0cmluZ1xuICBkaXNhYmxlZDogYm9vbGVhblxufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhTm9kZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dFxuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZVxuICBsYWJlbD86IFJlYWN0LlJlYWN0Tm9kZVxuICBrZXk/OiBSZWFjdC5SZWFjdFRleHRcbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW5cbiAgY2hlY2thYmxlPzogYm9vbGVhblxuICBwb3BvdmVyPzogUmVhY3QuUmVhY3ROb2RlXG4gIHBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgY2hpbGRyZW4/OiBEYXRhTm9kZVtdXG59XG5cbmV4cG9ydCB0eXBlIFRyZWVEYXRhID0gRGF0YU5vZGVbXSB8IHVuZGVmaW5lZFxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlU2VsZWN0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWU/OiBib29sZWFuXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBkZWZhdWx0VmFsdWU/OiBUcmVlTm9kZVZhbHVlXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBnZXRQb3B1cENvbnRhaW5lcj86IG51bGwgfCAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBIVE1MRWxlbWVudClcbiAgaGVpZ2h0Rml4ZWQ/OiBib29sZWFuXG4gIG1heFRhZ0NvdW50PzogbnVsbCB8IG51bWJlclxuICBtdWx0aXBsZT86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFRyZWVOb2RlVmFsdWUsIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW10pID0+IHZvaWRcbiAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U/OiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuICBvblNlYXJjaD86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudFxuICByZXN1bHRSZW5kZXI/OiBudWxsIHwgKCh2YWx1ZXM6IElUcmVlTm9kZVtdKSA9PiBKU1guRWxlbWVudClcbiAgcmVzdWx0VmlzaWJsZT86IGJvb2xlYW5cbiAgc2VsZWN0QWxsPzogYm9vbGVhblxuICBzaG93Q2hlY2tlZFN0cmF0ZWd5PzogXCJzaG93LWFsbFwiIHwgXCJzaG93LWNoaWxkXCIgfCBcInNob3ctcGFyZW50XCJcbiAgdG9wQ29udGVudD86IFJlYWN0LlJlYWN0Tm9kZVxuICB0cmVlRGF0YT86IFRyZWVEYXRhXG4gIHZhbHVlPzogVHJlZU5vZGVWYWx1ZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlU2VsZWN0U3RhdGUge1xuICBoYXNoOiBzdHJpbmdcbiAgdG9wQ29udGVudFBvcnRhbFRhcmdldD86IEhUTUxEaXZFbGVtZW50XG4gIHZhbHVlPzogVHJlZU5vZGVWYWx1ZVxuICBtYXhIZWlnaHRGaXhlZDogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlTm9kZVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjaGVja2FibGU/OiBib29sZWFuXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICBkaXNhYmxlQ2hlY2tib3g/OiBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlXG4gIGtleT86IHN0cmluZ1xuICBldmVudEtleT86IHN0cmluZ1xuICBpc0xlYWY/OiBib29sZWFuXG4gIGNoZWNrZWQ/OiBib29sZWFuXG4gIGV4cGFuZGVkPzogYm9vbGVhblxuICBsb2FkaW5nPzogYm9vbGVhblxuICBzZWxlY3RlZD86IGJvb2xlYW5cbiAgc2VsZWN0YWJsZT86IGJvb2xlYW5cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiDmoJHlvaLpgInmi6lcbiAqL1xuY2xhc3MgVHJlZVNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVHJlZVNlbGVjdFByb3BzLCBJVHJlZVNlbGVjdFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOWAvOiiq+mAieaLqeWQju+8jOaYr+WQpumcgOimgea4heepuuaQnOe0ouahhlxuICAgICAqL1xuICAgIGF1dG9DbGVhclNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog6buY6K6k6YCJ5Lit55qEIGtleVxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgLyoqXG4gICAgICog5piv5ZCm56aB55SoXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmrmOW6puaYr+WQpuWbuuWumuS4gOihjO+8jFRyZWVTZWxlY3Qg5bCG5qC55o2u5YaF5a655Yy65Z+f5a695bqm6Ieq5Yqo5bCG57uT5p6c5pS26LW377yM5byA5ZCv6L+Z5LiqIFByb3Ag5ZCOIFRyZWVTZWxlY3Qg5Lya5b+955WlIG1heFRhZ0NvdW50IFByb3BcbiAgICAgKi9cbiAgICBoZWlnaHRGaXhlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5pyA5aSa5pi+56S65aSa5bCR5LiqIHRhZ++8jOWmguaenOi2hei/h+S6huWImeS7peaUtui1t+eahOW9ouW8j+WHuueOsFxuICAgICAqL1xuICAgIG1heFRhZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWkmumAieaooeW8j1xuICAgICAqL1xuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlgLzlj5jljJbml7bnmoTlm57osIPvvIzlj4LmlbA6IHZhbHVlXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOS4i+aLiSB2aXNpYmxlIOWPmOWMluaXtueahOWbnuiwg++8jOWPguaVsDogYm9vbGVhblxuICAgICAqL1xuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmkJzntKLml7bnmoTlm57osIPvvIzlj4LmlbA6IHZhbHVlXG4gICAgICovXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruW8ueWHuuS9jee9rlxuICAgICAqL1xuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwidG9wXCIsXG4gICAgICBcImxlZnRcIixcbiAgICAgIFwicmlnaHRcIixcbiAgICAgIFwiYm90dG9tXCIsXG4gICAgICBcInRvcExlZnRcIixcbiAgICAgIFwidG9wUmlnaHRcIixcbiAgICAgIFwiYm90dG9tTGVmdFwiLFxuICAgICAgXCJib3R0b21SaWdodFwiLFxuICAgICAgXCJsZWZ0VG9wXCIsXG4gICAgICBcImxlZnRCb3R0b21cIixcbiAgICAgIFwicmlnaHRUb3BcIixcbiAgICAgIFwicmlnaHRCb3R0b21cIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7ovpPlhaXmoYbnmoTpu5jorqTlhoXlrrlcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDorr7nva7oh6rlrprkuYnnmoTnu5PmnpzmuLLmn5NcbiAgICAgKi9cbiAgICByZXN1bHRSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOi+k+WFpeahhuWGheeahOagh+etvuaYr+WQpuaYvuekuu+8jOatpCBQcm9wIOeUqOS6juaDs+imgeWwhue7k+aenOWMuuWxleekuuWcqOWIq+eahOWcsOaWueeahOmcgOaxglxuICAgICAqL1xuICAgIHJlc3VsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWumuWItuagkeW9oumAieaLqeWZqOeahGljb25cbiAgICAgKi9cbiAgICByaWdodEljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5byA5ZCv5YWo6YCJ5Yqf6IO9XG4gICAgICovXG4gICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrprkuYnpgInkuK3pobnlm57loavnmoTmlrnlvI/vvJpcbiAgICAgKiAxLiBzaG93LWFsbO+8muaYvuekuuWMheaLrOeItuiKgueCueeahOaJgOaciemAieS4reiKgueCue+8m1xuICAgICAqIDIuIHNob3ctcGFyZW5077ya5Y+q5pi+56S654i26IqC54K577ybXG4gICAgICogMy4gc2hvdy1jaGlsZO+8muWPquaYvuekuuWtkOiKgueCueOAgum7mOiupOWAvO+8mnNob3ctcGFyZW50XG4gICAgICovXG4gICAgc2hvd0NoZWNrZWRTdHJhdGVneTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwic2hvdy1hbGxcIixcbiAgICAgIFwic2hvdy1wYXJlbnRcIixcbiAgICAgIFwic2hvdy1jaGlsZFwiLFxuICAgIF0pLFxuICAgIC8qKlxuICAgICAqIOS4i+aLieahhumhtumDqOaYvuekuueahOiHquWumuS5ieWFg+e0oFxuICAgICAqL1xuICAgIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIHRyZWVOb2RlcyDmlbDmja7vvIzmoLzlvI/lj4LnhacgaW50ZXJmYWNlIERhdGFOb2RlXG4gICAgICovXG4gICAgdHJlZURhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDlpJbpg6jmjqfliLbvvJrpgInkuK3nmoQga2V5XG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMgPSB7XG4gICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gICAgaGVpZ2h0Rml4ZWQ6IGZhbHNlLFxuICAgIG1heFRhZ0NvdW50OiBudWxsLFxuICAgIG11bHRpcGxlOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uU2VhcmNoOiBub29wLFxuICAgIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcmVzdWx0UmVuZGVyOiBudWxsLFxuICAgIHJlc3VsdFZpc2libGU6IHRydWUsXG4gICAgcmlnaHRJY29uOiBcIm1lbnVcIixcbiAgICBzZWxlY3RBbGw6IGZhbHNlLFxuICAgIHNob3dDaGVja2VkU3RyYXRlZ3k6IFwic2hvdy1wYXJlbnRcIixcbiAgICB0b3BDb250ZW50OiB1bmRlZmluZWQsXG4gICAgdHJlZURhdGE6IHVuZGVmaW5lZCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHsgdmFsdWUgfTogSVRyZWVTZWxlY3RQcm9wcykgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIFRyZWVOb2RlOiB0eXBlb2YgVHJlZU5vZGUgPSBUcmVlTm9kZVxuXG4gIHB1YmxpYyBzZWxlY3Q6IHR5cGVvZiBSY1RyZWVTZWxlY3RcblxuICBwdWJsaWMgcG9ydGFsOiBSZWFjdC5SZWFjdE5vZGVcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgdHJlZURhdGE6IERhdGFOb2RlW11cblxuICBwdWJsaWMgdHJlZVZhbHVlQWxsOiBhbnlbXVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVHJlZVNlbGVjdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyB2YWx1ZSwgZGVmYXVsdFZhbHVlIH0gPSBwcm9wc1xuICAgIGNvbnN0IHZhbHVlU3RhdGUgPSB2YWx1ZSAhPT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGFzaDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDMsIDgpLFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgICBtYXhIZWlnaHRGaXhlZDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUcmVlU2VsZWN0UHJvcHMsXG4gICAgbmV4dFN0YXRlOiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIHNhdmVTZWxlY3QgPSAobm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PiB7XG4gICAgdGhpcy5zZWxlY3QgPSBub2RlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVBvcnRhbCA9IChub2RlOiBSZWFjdC5SZWFjdE5vZGUpID0+IHtcbiAgICB0aGlzLnBvcnRhbCA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlV3JhcHBlciA9IChub2RlOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgIHRoaXMud3JhcHBlciA9IG5vZGVcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTd2l0Y2hlckljb24gPSAoeyBpc0xlYWYsIGxvYWRpbmcgfTogSVRyZWVOb2RlUHJvcHMpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIHNpemU9XCJtaW5pXCIgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtc3dpdGNoZXItaWNvbmB9IC8+XG4gICAgfVxuICAgIGlmIChpc0xlYWYpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8SWNvbiBpY29uPVwidHJpYW5nbGUtcmlnaHRcIiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdHJlZS1zd2l0Y2hlci1pY29uYH0gLz5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b3BDb250ZW50IH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnN0IHsgaGFzaCwgdG9wQ29udGVudFBvcnRhbFRhcmdldCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAvKipcbiAgICAgICAgICog5LiL5ouJ5qGG5pi+56S6ICYmIOS8oOWFpeS6humhtumDqOiHquWumuS5ieWFg+e0oCAmJiDpppbmrKHmt7vliqBcbiAgICAgICAgICovXG4gICAgICAgIGlmICh2aXNpYmxlICYmIHRvcENvbnRlbnQgJiYgIXRvcENvbnRlbnRQb3J0YWxUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLiR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YFxuICAgICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgZWwub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJvcGRvd24uaW5zZXJ0QmVmb3JlKGVsLCBkcm9wZG93bi5jaGlsZHJlblswXSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB0b3BDb250ZW50UG9ydGFsVGFyZ2V0OiBlbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sIDApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlID0gKFxuICAgIHZhbHVlOiBUcmVlTm9kZVZhbHVlLFxuICAgIHRpdGxlTGlzdDogUmVhY3QuUmVhY3ROb2RlW11cbiAgKSA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgb25DaGFuZ2UsIHZhbHVlOiB2YWx1ZVByb3AgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgICAgfVxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlLCB0aXRsZUxpc3QpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25TZWFyY2ggfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgIG9uU2VhcmNoKHZhbClcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbHRlclRyZWVOb2RlID0gKGlucHV0OiBzdHJpbmcsIHRyZWVOb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGtleSwgdGl0bGUsIHZhbHVlLCBkYXRhVGl0bGUgfSA9IHRyZWVOb2RlXG4gICAgaWYgKCFrZXkgfHwgIXZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhkYXRhVGl0bGUgfHwgdGl0bGUpLmluY2x1ZGVzKGlucHV0KVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ0NvdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWF4VGFnQ291bnQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlLCBtYXhIZWlnaHRGaXhlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKFxuICAgICAgKCFtYXhUYWdDb3VudCB8fCAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDw9IG1heFRhZ0NvdW50KSAmJlxuICAgICAgIW1heEhlaWdodEZpeGVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgcHVibGljIGhhbmRsZVNlbGVjdEFsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlOiB2YWx1ZVByb3AsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChpc0FycmF5SW5jbHVkZXModmFsdWUgfHwgW10sIHRoaXMudHJlZVZhbHVlQWxsKSkge1xuICAgICAgLyoqXG4gICAgICAgKiDlt7LlhajpgIlcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtdIH0pXG4gICAgICB9XG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UoW10sIFtdKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIOa4heepulxuICAgICAgICovXG4gICAgICBpZiAodmFsdWVQcm9wID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy50cmVlVmFsdWVBbGwgfSlcbiAgICAgIH1cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBvbkNoYW5nZSh0aGlzLnRyZWVWYWx1ZUFsbCwgW10pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldE1heFRhZ1BsYWNlaG9sZGVyID0gKG5vZGVzOiBJVHJlZU5vZGVbXSkgPT4ge1xuICAgIGlmICghdGhpcy5zZWxlY3QpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHJlc3VsdFJlbmRlciwgdmFsdWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJldHVybiByZXN1bHRSZW5kZXIobm9kZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBsZW5ndGggfSA9IG5vZGVzXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gKFxuICAgICAgPD5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXG4gICAgICAgICAgICBtYXhXaWR0aDogXCJjYWxjKDEwMCUgLSA1M3B4KVwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtub2Rlc1swXS5sYWJlbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiIH19PlxuICAgICAgICAgIOetiSB7bGVuZ3RofSDkuKpcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYXgtcG9wb3Zlci1pdGVtLXdyYXBwZXJgfT5cbiAgICAgICAgICAgIHtub2Rlcy5tYXAoKHsga2V5LCBkaXNhYmxlZCwgbGFiZWwgfSwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1heC1wb3BvdmVyLWl0ZW1gfSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFscyA9IG5vZGVzLm1hcCgobykgPT4gby52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWxzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IG5vZGVzLm1hcCgobykgPT4gby5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscy5zcGxpY2UoaSwgMSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHMsIGxhYmVscylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXBDbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4UG9wb3ZlcmB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWF4UGxhY2Vob2xkZXJgfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwbGFjZWhvbGRlclRleHR9XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxuICAgICAgICAgICAgc2l6ZT17MTR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogW10gfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShbXSwgW10pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGNvbnZlcnRDaGlsZHJlblRvRGF0YSA9IChub2RlczogYW55KTogRGF0YU5vZGVbXSA9PlxuICAgIHRvQXJyYXkobm9kZXMpXG4gICAgICAubWFwKChub2RlOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChub2RlKSB8fCAhbm9kZS50eXBlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgcG9wb3ZlcixcbiAgICAgICAgICAgIHBvcG92ZXJQcm9wcyxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgLi4ucmVzdFByb3BzXG4gICAgICAgICAgfSxcbiAgICAgICAgfSA9IG5vZGUgYXMgUmVhY3QuUmVhY3RFbGVtZW50XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWmguaenOaciSBwb3BvdmVyIOWImeWcqOi/memHjOWMheijheS4gOS4iyB0aXRsZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgZGF0YVRpdGxlOiB0aXRsZSxcbiAgICAgICAgICB0aXRsZTogcG9wb3ZlciA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBvcC10cmlnZ2VyYH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8UG9wb3ZlciBwb3B1cD17cG9wb3Zlcn0gcGxhY2VtZW50PVwicmlnaHRcIiB7Li4ucG9wb3ZlclByb3BzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlci1wbGFjZWhvbGRlcmB9IC8+XG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICksXG4gICAgICAgICAgLi4ucmVzdFByb3BzLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hpbGREYXRhID0gdGhpcy5jb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pXG4gICAgICAgIGlmIChjaGlsZERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgZGF0YS5jaGlsZHJlbiA9IGNoaWxkRGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkYXRhKSA9PiBkYXRhKVxuXG4gIHB1YmxpYyBjb252ZXJ0VHJlZURhdGEgPSAoXG4gICAgZGF0YU5vZGVQYXJhbTogVHJlZURhdGEsXG4gICAgb3B0aW9uczogeyBzZWxlY3RBbGw/OiBib29sZWFuIH0gPSB7fVxuICApOiBUcmVlRGF0YSA9PiB7XG4gICAgaWYgKCFkYXRhTm9kZVBhcmFtKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIGNvbnN0IGRhdGFOb2RlID0gWy4uLmRhdGFOb2RlUGFyYW1dXG4gICAgY29uc3QgeyB2YWx1ZTogdmFsdWVTdGF0ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWQgPSBpc0FycmF5SW5jbHVkZXModmFsdWVTdGF0ZSB8fCBbXSwgdGhpcy50cmVlVmFsdWVBbGwpXG4gICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9ICFpc0FsbFNlbGVjdGVkICYmICEhdmFsdWVTdGF0ZT8ubGVuZ3RoXG5cbiAgICBpZiAoZGF0YU5vZGVbMF0/LmtleSA9PT0gYCR7cHJlZml4fS10cmVlLXRyZWVub2RlLWFsbGApIHtcbiAgICAgIHJldHVybiBkYXRhTm9kZVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2VsZWN0QWxsIH0gPSBvcHRpb25zXG5cbiAgICBjb25zdCBwcm9jZXNzID0gKG5vZGU6IERhdGFOb2RlW10pID0+IHtcbiAgICAgIG5vZGUuZm9yRWFjaCgobykgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRhdGFUaXRsZSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBwb3BvdmVyLFxuICAgICAgICAgIHBvcG92ZXJQcm9wcyA9IHt9LFxuICAgICAgICB9ID0gb1xuICAgICAgICBpZiAoZGF0YVRpdGxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGFUaXRsZSDnlKjkuo7mnIkgcG9wb3ZlciDnmoTmg4XlhrXkuIvnmoTmkJzntKJcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgIG8uZGF0YVRpdGxlID0gdGl0bGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvLmtleSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG8udmFsdWUgPSBrZXlcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9wb3Zlcikge1xuICAgICAgICAgIG8udGl0bGUgPSAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wb3AtdHJpZ2dlcmB9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPFBvcG92ZXIgcG9wdXA9e3BvcG92ZXJ9IHBsYWNlbWVudD1cInJpZ2h0XCIgey4uLnBvcG92ZXJQcm9wc30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcG9wLXRyaWdnZXItcGxhY2Vob2xkZXJgfSAvPlxuICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgcHJvY2VzcyhjaGlsZHJlbilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm9jZXNzKGRhdGFOb2RlKVxuXG4gICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgZGF0YU5vZGUudW5zaGlmdCh7XG4gICAgICAgIHRpdGxlOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsLWlubmVyYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWFqOmAiVxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICBjaGVja2VkPXtpc0FsbFNlbGVjdGVkfVxuICAgICAgICAgICAgICBpbmRldGVybWluYXRlPXtpbmRldGVybWluYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSxcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCxcbiAgICAgICAga2V5OiBgJHtwcmVmaXh9LXRyZWUtdHJlZW5vZGUtYWxsYCxcbiAgICAgICAgY2hlY2thYmxlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZUNoZWNrYm94OiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YU5vZGVcbiAgfVxuXG4gIGxpc3RlbklucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZSB9LFxuICAgICAga2V5Q29kZSxcbiAgICB9ID0gZVxuXG4gICAgaWYgKGtleUNvZGUgPT09IDggJiYgdmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgeyBtYXhUYWdDb3VudCwgcGxhY2Vob2xkZXIsIHJlc3VsdFZpc2libGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIC8vIOemgeatoiB0cmVlLXNlbGVjdCDplK7nm5jlm57liKDkvJrlvbHlk40gdmFsdWVcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubGlzdGVuSW5wdXRDaGFuZ2UsIGZhbHNlKVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIGlmICghcmVzdWx0VmlzaWJsZSAmJiB0aGlzLndyYXBwZXIpIHtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9IChcbiAgICBfOiBJVHJlZVNlbGVjdFByb3BzLFxuICAgIHsgdmFsdWU6IHZhbHVlUHJldiB9OiBJVHJlZVNlbGVjdFN0YXRlXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0VmlzaWJsZSwgaGVpZ2h0Rml4ZWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhhc2gsIHZhbHVlLCBtYXhIZWlnaHRGaXhlZCB9ID0gdGhpcy5zdGF0ZVxuICAgIC8qKlxuICAgICAqIHJlc3VsdFZpc2libGUg5Li6IGZhbHNlIOaXtu+8jCBzZWxlY3RvciDpq5jluqbkuI3kvJrmlLnlj5jjgIJcbiAgICAgKiDmoLnmja7miJHnmoTnu4/pqowgUG9wdXAg6Kem5Y+R6YeN5paw5a6a5L2N55qE5pe25py65piv77yaXG4gICAgICogMS4gd2luZG93IHJlc2l6ZVxuICAgICAqIDIuIHJlc2l6ZSBvYnNlcnZlciDkuoYgc2VsZWN0b3JcbiAgICAgKiDlm6DmraTov5nph4zmiYvliqjop6blj5EgcmVzaXplXG4gICAgICovXG4gICAgaWYgKCFyZXN1bHRWaXNpYmxlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKVxuICAgICAgfSwgMClcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0Rml4ZWQgJiYgdmFsdWVQcmV2Py5sZW5ndGggIT09IHZhbHVlPy5sZW5ndGgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofSAuJHtwcmVmaXh9LXNlbGVjdGlvbi1vdmVyZmxvd2BcbiAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBjb25zdCBzdWZmaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuJHtwcmVmaXh9LXdyYXBwZXJfJHtoYXNofSAuJHtwcmVmaXh9LXNlbGVjdGlvbi1vdmVyZmxvdy1pdGVtLXN1ZmZpeGBcbiAgICAgICAgKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICBjb25zdCBsYXN0ID0gc3VmZml4LmNoaWxkcmVuW1xuICAgICAgICAgIHN1ZmZpeC5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgIF0gYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxhc3Qub2Zmc2V0TGVmdCA+IHdyYXBwZXIub2Zmc2V0V2lkdGggLSAzMCAmJlxuICAgICAgICAgICFtYXhIZWlnaHRGaXhlZCAmJlxuICAgICAgICAgIHZhbHVlUHJldiAmJlxuICAgICAgICAgIHZhbHVlICYmXG4gICAgICAgICAgdmFsdWVQcmV2Lmxlbmd0aCA8IHZhbHVlLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1heEhlaWdodEZpeGVkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgbGFzdC5vZmZzZXRMZWZ0IDwgd3JhcHBlci5vZmZzZXRXaWR0aCAtIDMwICYmXG4gICAgICAgICAgbWF4SGVpZ2h0Rml4ZWQgJiZcbiAgICAgICAgICB2YWx1ZVByZXYgJiZcbiAgICAgICAgICB2YWx1ZSAmJlxuICAgICAgICAgIHZhbHVlUHJldi5sZW5ndGggPiB2YWx1ZS5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtYXhIZWlnaHRGaXhlZDogZmFsc2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBoZWlnaHRGaXhlZCxcbiAgICAgIG1heFRhZ0NvdW50LFxuICAgICAgbXVsdGlwbGUsXG4gICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmlnaHRJY29uLFxuICAgICAgcmVzdWx0UmVuZGVyLFxuICAgICAgcmVzdWx0VmlzaWJsZSxcbiAgICAgIHNlbGVjdEFsbCxcbiAgICAgIHNob3dDaGVja2VkU3RyYXRlZ3ksXG4gICAgICB0b3BDb250ZW50LFxuICAgICAgdHJlZURhdGEsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlc3RQcm9wczogYW55ID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcIm9uQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VhcmNoXCIsXG4gICAgICBcImRlZmF1bHRWYWx1ZVwiLFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGhhc2gsIHRvcENvbnRlbnRQb3J0YWxUYXJnZXQsIHZhbHVlLCBtYXhIZWlnaHRGaXhlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwge1xuICAgICAgW2Ake3ByZWZpeH1fcmVzdWx0SGlkZGVuYF06ICFyZXN1bHRWaXNpYmxlLFxuICAgIH0pXG5cbiAgICBsZXQgY2hlY2tib3g6IGFueSA9IG11bHRpcGxlXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBjaGVja2JveCA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB3aWR0aD1cIjEyXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10cmVlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVTdmdgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIHg9XCIxXCJcbiAgICAgICAgICAgICAgeT1cIjRcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjEwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMlwiXG4gICAgICAgICAgICAgIHJ4PVwiLjVcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHdpZHRoPVwiMTJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRyZWUtY2hlY2tib3gtY2hlY2tlZFN2Z2B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0uNjE4IDUuODI3YS40NjMuNDYzIDAgMCAxLS4wMi0uNjc1bC44MDQtLjgwNGEuNTIuNTIgMCAwIDEgLjcxNi0uMDFMNC43NSA2Ljc1bDQuOTIyLTUuNjI1YS41MTMuNTEzIDAgMCAxIC43MDctLjA2bC43NDIuNjJhLjQ3OC40NzggMCAwIDEgLjA0NC42ODdsLTYuMDggNi43NTZhLjUwNi41MDYgMCAwIDEtLjcwMy4wNDVMLjYxOCA1LjgyN3pcIlxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICByZXN0UHJvcHMudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGlmIChtYXhUYWdDb3VudCAhPT0gbnVsbCB8fCBtYXhIZWlnaHRGaXhlZCkge1xuICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdldE1heFRhZ0NvdW50KClcbiAgICAgIGlmIChjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICByZXN0UHJvcHMubWF4VGFnQ291bnQgPSBjb3VudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRSZW5kZXIpIHtcbiAgICAgIHJlc3RQcm9wcy5tYXhUYWdDb3VudCA9IDBcbiAgICB9XG5cbiAgICBjb25zdCB0cmVlRGF0YUZpbmFsID1cbiAgICAgIHRoaXMuY29udmVydFRyZWVEYXRhKHRyZWVEYXRhLCB7IHNlbGVjdEFsbCB9KSB8fFxuICAgICAgdGhpcy5jb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pXG5cbiAgICB0aGlzLnRyZWVEYXRhID0gdHJlZURhdGFGaW5hbFxuICAgIHRoaXMudHJlZVZhbHVlQWxsID0gdHJlZURhdGFGaW5hbFxuICAgICAgLm1hcCgoeyB2YWx1ZTogdmFsLCBkaXNhYmxlZCwgZGlzYWJsZUNoZWNrYm94LCBjaGVja2FibGUgfSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdmFsICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAhZGlzYWJsZWQgJiZcbiAgICAgICAgICAhZGlzYWJsZUNoZWNrYm94ICYmXG4gICAgICAgICAgY2hlY2thYmxlICE9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcblxuICAgIC8vIOaYr+WQpuaYr+WkmuWxgue6p1xuICAgIGNvbnN0IG11bHRpTGV2ZWwgPSB0cmVlRGF0YUZpbmFsLnNvbWUoKG8pID0+IG8uY2hpbGRyZW4/Lmxlbmd0aClcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgYCR7cHJlZml4fS13cmFwcGVyICR7cHJlZml4fS13cmFwcGVyXyR7aGFzaH1gLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1tYXhUYWdgXTogdGhpcy5nZXRNYXhUYWdDb3VudCgpICE9PSBudWxsLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXdyYXBwZXItZml4ZWRgXTogaGVpZ2h0Rml4ZWQsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0td3JhcHBlci1yZXN1bHRSZW5kZXJgXTogISFyZXN1bHRSZW5kZXIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVdyYXBwZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RvcENvbnRlbnQgJiYgdG9wQ29udGVudFBvcnRhbFRhcmdldCAmJiAoXG4gICAgICAgICAgICAgIDxQb3J0YWwgcmVmPXt0aGlzLnNhdmVQb3J0YWx9IGNvbnRhaW5lcj17dG9wQ29udGVudFBvcnRhbFRhcmdldH0+XG4gICAgICAgICAgICAgICAge3RvcENvbnRlbnR9XG4gICAgICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxSY1RyZWVTZWxlY3RcbiAgICAgICAgICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWU9e1xuICAgICAgICAgICAgICAgIHJlc3VsdFZpc2libGUgPyBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1NldH1cbiAgICAgICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1kcm9wZG93bl8ke2hhc2h9YCwge1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLW11bHRpcGxlYF06IG11bHRpcGxlLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LWRyb3Bkb3duLXNpbmdsZWBdOiAhbXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tZHJvcGRvd24tYWxsYF06IHNlbGVjdEFsbCxcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS1kcm9wZG93bi1zaW5nbGUtbGV2ZWxgXTogIW11bHRpTGV2ZWwsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBkcm9wZG93blBvcHVwQWxpZ249e1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudCAmJiBnZXRQbGFjZW1lbnRzKHsgYWxpZ25FZGdlOiB0cnVlIH0pW3BsYWNlbWVudF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmaWx0ZXJUcmVlTm9kZT17dGhpcy5maWx0ZXJUcmVlTm9kZX1cbiAgICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgICAgICAgaW5wdXRJY29uPXs8SWNvbiBpY29uPVwidHJpYW5nbGUtZG93blwiIC8+fVxuICAgICAgICAgICAgICBtYXhUYWdQbGFjZWhvbGRlcj17dGhpcy5nZXRNYXhUYWdQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgbm90Rm91bmRDb250ZW50PXtcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImZpbGUtb3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLXRyYW5zcGFyZW50LWdyYXktNjAwKVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjRweFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAg5peg5Yy56YWN6aG5XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBvblNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXh9XG4gICAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlU2VsZWN0fVxuICAgICAgICAgICAgICByZW1vdmVJY29uPXs8SWNvbiBpY29uPVwiY2FuY2VsXCIgaW50ZXJhY3RpdmUgc2l6ZT17MTZ9IC8+fVxuICAgICAgICAgICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5PXtcbiAgICAgICAgICAgICAgICBzaG93Q2hlY2tlZFN0cmF0ZWd5ICYmIHN0cmF0ZWdpZXNbc2hvd0NoZWNrZWRTdHJhdGVneV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzaG93U2VhcmNoPXttdWx0aXBsZX1cbiAgICAgICAgICAgICAgc3dpdGNoZXJJY29uPXt0aGlzLnJlbmRlclN3aXRjaGVySWNvbn1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJzbGlkZS11cFwiXG4gICAgICAgICAgICAgIHRyZWVDaGVja2FibGU9e2NoZWNrYm94fVxuICAgICAgICAgICAgICB0cmVlTm9kZUZpbHRlclByb3A9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGxpc3RJdGVtSGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgbGlzdEhlaWdodD17MjgwfVxuICAgICAgICAgICAgICB0cmVlRGF0YT17dHJlZURhdGFGaW5hbH1cbiAgICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U9eyh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogMjAyMTAzMjMgdmlzaWJsZSBmYWxzZSDml7bovpPlhaXmoYbkvJrooqvmg4XlhrXvvIzkvYbmsqHmnInosIPnlKggb25TZWFyY2hcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoKFwiXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICAgIGlmIChvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UodmlzaWJsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyEhcmlnaHRJY29uICYmIG11bHRpcGxlICYmIChcbiAgICAgICAgICAgICAgPEljb24gaWNvbj17cmlnaHRJY29ufSBjbGFzc05hbWU9e2Ake3ByZWZpeH0taWNvbmB9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlU2VsZWN0XG4iXX0=