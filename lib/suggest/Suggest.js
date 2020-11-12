"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcSelect = _interopRequireWildcard(require("rc-select"));

var _configProvider = require("../config-provider");

var _input = _interopRequireDefault(require("../input"));

var _omit = _interopRequireDefault(require("../_util/omit"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var noop = function noop() {};

var Suggest = function (_React$Component) {
  _inherits(Suggest, _React$Component);

  var _super = _createSuper(Suggest);

  function Suggest(props) {
    var _this;

    _classCallCheck(this, Suggest);

    _this = _super.call(this, props);
    _this.locked = false;
    _this.suggest = void 0;

    _this.saveSuggest = function (node) {
      if (node) {
        _this.suggest = node;
      }
    };

    _this.onDropdownVisibleChange = function (open) {
      var _this$props = _this.props,
          onDropdownVisibleChange = _this$props.onDropdownVisibleChange,
          openProp = _this$props.open;

      if (openProp === null) {
        _this.setState({
          open: open
        });
      }

      if (onDropdownVisibleChange) onDropdownVisibleChange(open);
    };

    _this.onSearch = function (val) {
      var onSearch = _this.props.onSearch;
      var open = _this.state.open;

      _this.setState({
        searchValue: val
      });

      if (!open) {
        _this.setState({
          open: true
        });
      }

      if (onSearch) {
        onSearch(val);
      }
    };

    var defaultOpen = props.defaultOpen,
        defaultValue = props.defaultValue,
        _open = props.open,
        value = props.value;
    var openState;

    if (_open !== null) {
      openState = _open;
    } else if (defaultOpen !== null) {
      openState = defaultOpen;
    }

    _this.state = {
      open: openState,
      searchValue: (value || defaultValue || "").toString()
    };
    return _this;
  }

  _createClass(Suggest, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          autoHidePopup = _this$props2.autoHidePopup,
          dataSource = _this$props2.dataSource,
          defaultValue = _this$props2.defaultValue,
          getPopupContainer = _this$props2.getPopupContainer,
          inputProps = _this$props2.inputProps,
          intent = _this$props2.intent,
          leftElement = _this$props2.leftElement,
          placeholder = _this$props2.placeholder,
          rightElement = _this$props2.rightElement,
          size = _this$props2.size,
          theme = _this$props2.theme,
          value = _this$props2.value,
          otherProps = _objectWithoutProperties(_this$props2, ["autoHidePopup", "dataSource", "defaultValue", "getPopupContainer", "inputProps", "intent", "leftElement", "placeholder", "rightElement", "size", "theme", "value"]);

      var _this$state = this.state,
          openState = _this$state.open,
          searchValue = _this$state.searchValue;
      var restProps = (0, _omit["default"])(otherProps, ["defaultOpen", "onSearch", "onDropdownVisibleChange", "open"]);
      var selectProps = {};

      if (typeof openState === "boolean") {
        selectProps.open = openState;
      }

      if (value !== null) {
        selectProps.value = value;
      } else {
        selectProps.defaultValue = defaultValue;
      }

      var options = dataSource ? dataSource.filter(function (o) {
        if (searchValue) {
          if (typeof o !== "string") {
            return o.props.title.toUpperCase().includes(searchValue.toUpperCase());
          }

          return o.toUpperCase().includes(searchValue.toUpperCase());
        }

        return true;
      }).map(function (item) {
        if (React.isValidElement(item)) {
          return item;
        }

        return React.createElement(_rcSelect.Option, {
          key: item,
          value: item
        }, item);
      }) : [];

      if (autoHidePopup && !searchValue) {
        options = [];
      }

      return React.createElement(_configProvider.ConfigContext.Consumer, null, function (_ref) {
        var getPopupContainerContext = _ref.getPopupContainer;
        return React.createElement(_rcSelect["default"], _extends({
          mode: "combobox",
          menuItemSelectedIcon: null,
          dropdownMatchSelectWidth: true,
          dropdownClassName: "adui-suggest-dropdown",
          defaultActiveFirstOption: true,
          getPopupContainer: getPopupContainer || getPopupContainerContext,
          onDropdownVisibleChange: _this2.onDropdownVisibleChange,
          onSearch: _this2.onSearch,
          optionFilterProp: "children",
          prefixCls: "adui-suggest",
          showSearch: true,
          ref: _this2.saveSuggest,
          transitionName: "slide-up",
          getInputElement: function getInputElement() {
            return React.createElement(_input["default"], _extends({
              intent: intent,
              leftElement: leftElement,
              placeholder: placeholder,
              rightElement: rightElement,
              size: size,
              theme: theme
            }, inputProps));
          }
        }, selectProps, restProps), options);
      });
    }
  }]);

  return Suggest;
}(React.Component);

Suggest.Option = _rcSelect.Option;
Suggest.OptGroup = _rcSelect.OptGroup;
Suggest.propTypes = {
  autoHidePopup: _propTypes["default"].bool,
  autoFocus: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  dataSource: _propTypes["default"].array,
  defaultOpen: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  getPopupContainer: _propTypes["default"].func,
  inputProps: _propTypes["default"].object,
  intent: _propTypes["default"].oneOf(["normal", "primary", "success", "warning", "danger"]),
  leftElement: _propTypes["default"].node,
  notFoundContent: _propTypes["default"].string,
  onDropdownVisibleChange: _propTypes["default"].func,
  onSearch: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  open: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  rightElement: _propTypes["default"].node,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  theme: _propTypes["default"].oneOf([null, "light"]),
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Suggest.defaultProps = {
  autoHidePopup: true,
  autoFocus: false,
  children: null,
  dataSource: [],
  defaultOpen: null,
  defaultValue: "",
  getPopupContainer: null,
  inputProps: {},
  intent: "normal",
  leftElement: undefined,
  notFoundContent: null,
  onDropdownVisibleChange: noop,
  onSearch: noop,
  onSelect: noop,
  open: null,
  placeholder: "请选择",
  rightElement: undefined,
  size: "small",
  theme: null,
  value: null
};

Suggest.getDerivedStateFromProps = function (_ref2) {
  var open = _ref2.open,
      value = _ref2.value;
  var newState = {};

  if (open !== null) {
    newState.open = open;
  }

  if (value !== null) {
    newState.searchValue = (value || "").toString();
  }

  return Object.keys(newState).length > 0 ? newState : null;
};

var _default = Suggest;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VnZ2VzdC9TdWdnZXN0LnRzeCJdLCJuYW1lcyI6WyJub29wIiwiU3VnZ2VzdCIsInByb3BzIiwibG9ja2VkIiwic3VnZ2VzdCIsInNhdmVTdWdnZXN0Iiwibm9kZSIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwib3BlbiIsIm9wZW5Qcm9wIiwic2V0U3RhdGUiLCJvblNlYXJjaCIsInZhbCIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJkZWZhdWx0T3BlbiIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwib3BlblN0YXRlIiwidG9TdHJpbmciLCJhdXRvSGlkZVBvcHVwIiwiZGF0YVNvdXJjZSIsImdldFBvcHVwQ29udGFpbmVyIiwiaW5wdXRQcm9wcyIsImludGVudCIsImxlZnRFbGVtZW50IiwicGxhY2Vob2xkZXIiLCJyaWdodEVsZW1lbnQiLCJzaXplIiwidGhlbWUiLCJvdGhlclByb3BzIiwicmVzdFByb3BzIiwic2VsZWN0UHJvcHMiLCJvcHRpb25zIiwiZmlsdGVyIiwibyIsInRpdGxlIiwidG9VcHBlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsImlzVmFsaWRFbGVtZW50IiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwiQ29tcG9uZW50IiwiT3B0aW9uIiwiT3B0R3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiYXV0b0ZvY3VzIiwiY2hpbGRyZW4iLCJhcnJheSIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJvYmplY3QiLCJvbmVPZiIsIm5vdEZvdW5kQ29udGVudCIsIm9uU2VsZWN0IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV3U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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QjZCO0FBaUIxQ0MsRUFBQUEsWUFBWSxFQUFFbUMsU0FqQjRCO0FBa0IxQ2xDLEVBQUFBLElBQUksRUFBRSxPQWxCb0M7QUFtQjFDQyxFQUFBQSxLQUFLLEVBQUUsSUFuQm1DO0FBb0IxQ1osRUFBQUEsS0FBSyxFQUFFO0FBcEJtQyxDOztBQTlGeENoQixPLENBcUhVOEQsd0IsR0FBMkIsaUJBQW9DO0FBQUEsTUFBakN2RCxJQUFpQyxTQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQlMsS0FBMkIsU0FBM0JBLEtBQTJCO0FBQzNFLE1BQU0rQyxRQUF1QixHQUFHLEVBQWhDOztBQUNBLE1BQUl4RCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQndELElBQUFBLFFBQVEsQ0FBQ3hELElBQVQsR0FBZ0JBLElBQWhCO0FBQ0Q7O0FBQ0QsTUFBSVMsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEIrQyxJQUFBQSxRQUFRLENBQUNsRCxXQUFULEdBQXVCLENBQUNHLEtBQUssSUFBSSxFQUFWLEVBQWNFLFFBQWQsRUFBdkI7QUFDRDs7QUFDRCxTQUFPOEMsTUFBTSxDQUFDQyxJQUFQLENBQVlGLFFBQVosRUFBc0JHLE1BQXRCLEdBQStCLENBQS9CLEdBQW1DSCxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O2VBZ0tZL0QsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBSY1NlbGVjdCwgeyBPcHRpb24sIE9wdEdyb3VwIH0gZnJvbSBcInJjLXNlbGVjdFwiXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4uL2NvbmZpZy1wcm92aWRlclwiXG5pbXBvcnQgSW5wdXQsIHsgSUlucHV0UHJvcHMgfSBmcm9tIFwiLi4vaW5wdXRcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWdnZXN0IHtcbiAgZ2V0UG9wdXBET01Ob2RlOiAoKSA9PiBIVE1MRWxlbWVudFxuICBnZXRJbnB1dERPTU5vZGU6ICgpID0+IEhUTUxJbnB1dEVsZW1lbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9uIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIGtleTogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWdnZXN0UHJvcHMge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOaYr+WQpuWcqOaQnOe0ouahhuS4uuepuuaXtu+8jOiHquWKqOmakOiXjyBwb3B1cFxuICAgKi9cbiAgYXV0b0hpZGVQb3B1cD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIGlucHV0IOagh+etvuWOn+eUn+WxnuaApyAtIGF1dG9Gb2N1c1xuICAgKi9cbiAgYXV0b0ZvY3VzPzogYm9vbGVhblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICBkZWZhdWx0T3Blbj86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDpu5jorqTlgLwgLSDlhoXpg6jpqbHliqhcbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IHN0cmluZyB8IG51bGxcbiAgZGF0YVNvdXJjZT86IGFueVtdXG4gIC8qKlxuICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgKi9cbiAgZ2V0UG9wdXBDb250YWluZXI/OiBudWxsIHwgKChub2RlOiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQpXG4gIGlucHV0UHJvcHM/OiBJSW5wdXRQcm9wc1xuICAvKipcbiAgICog57G75Z6LXG4gICAqL1xuICBpbnRlbnQ/OiBcIm5vcm1hbFwiIHwgXCJwcmltYXJ5XCIgfCBcInN1Y2Nlc3NcIiB8IFwid2FybmluZ1wiIHwgXCJkYW5nZXJcIlxuICBsZWZ0RWxlbWVudD86IEpTWC5FbGVtZW50XG4gIG5vdEZvdW5kQ29udGVudD86IHN0cmluZyB8IG51bGxcbiAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U/OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZFxuICBvblNlYXJjaD86ICh2YWw6IHN0cmluZykgPT4gdm9pZFxuICBvblNlbGVjdD86ICh2YWx1ZTogc3RyaW5nLCBvcHRpb246IElPcHRpb24pID0+IHZvaWRcbiAgb3Blbj86IG51bGwgfCBib29sZWFuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIHJpZ2h0RWxlbWVudD86IEpTWC5FbGVtZW50XG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7hcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOiuvue9ruS4u+mimFxuICAgKi9cbiAgdGhlbWU/OiBudWxsIHwgXCJsaWdodFwiXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdWdnZXN0U3RhdGUge1xuICBvcGVuPzogYm9vbGVhblxuICBzZWFyY2hWYWx1ZT86IHN0cmluZ1xufVxuLyoqXG4gKiDkuIvmi4npgInmi6nlmajjgIJcbiAqL1xuY2xhc3MgU3VnZ2VzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU3VnZ2VzdFByb3BzLCBJU3VnZ2VzdFN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgT3B0aW9uOiB0eXBlb2YgT3B0aW9uID0gT3B0aW9uXG5cbiAgcHVibGljIHN0YXRpYyBPcHRHcm91cDogdHlwZW9mIE9wdEdyb3VwID0gT3B0R3JvdXBcblxuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDmmK/lkKblnKjmkJzntKLmoYbkuLrnqbrml7bvvIzoh6rliqjpmpDol48gcG9wdXBcbiAgICAgKi9cbiAgICBhdXRvSGlkZVBvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvRm9jdXNcbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDkuIvmi4nliJfooahcbiAgICAgKi9cbiAgICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5YaF6YOo6amx5Yqo77ya5piv5ZCm5bGV5byAXG4gICAgICovXG4gICAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOm7mOiupOWAvCAtIOWGhemDqOmpseWKqFxuICAgICAqL1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIC8qKlxuICAgICAqIOaMh+WumuW8ueWHuuWxgueahOeItue6p++8jOm7mOiupOS4uiBkb2N1bWVudC5ib2R5XG4gICAgICovXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOS8oOmAkue7mSA8SW5wdXQgLz4g55qEIFByb3BzXG4gICAgICovXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDnsbvlnotcbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBcIm5vcm1hbFwiLFxuICAgICAgXCJwcmltYXJ5XCIsXG4gICAgICBcInN1Y2Nlc3NcIixcbiAgICAgIFwid2FybmluZ1wiLFxuICAgICAgXCJkYW5nZXJcIixcbiAgICBdKSxcbiAgICAvKipcbiAgICAgKiDliY3nva7lhYPntKBcbiAgICAgKi9cbiAgICBsZWZ0RWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5peg5Yy56YWN57uT5p6c5pe255qE5pi+56S65paH5a2XXG4gICAgICovXG4gICAgbm90Rm91bmRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOS4i+aLieWxleekuuWPkeeUn+WPmOWMluaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaYm9vbFxuICAgICAqL1xuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmkJzntKLml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mnZhbHVlXG4gICAgICovXG4gICAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOmAieaLqeaXtueahCBoYW5kbGVy77yM5Y+C5pWw77yaKHZhbHVlLCBvcHRpb24pXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOS7juWklumDqOaMh+WumuS4i+aLieaYr+WQpuWxleW8gFxuICAgICAqL1xuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOmAieaLqeahhum7mOiupOaWh+Wtl1xuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOWQjue9ruWFg+e0oFxuICAgICAqL1xuICAgIHJpZ2h0RWxlbWVudDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6K6+572u5bC65a+4XG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgICAvKipcbiAgICAgKiDorr7nva7kuLvpophcbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxpZ2h0XCJdKSxcbiAgICAvKipcbiAgICAgKiDku47lpJbpg6jmjIflrprlvZPliY3pgInkuK3pobnnmoTlgLxcbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElTdWdnZXN0UHJvcHMgPSB7XG4gICAgYXV0b0hpZGVQb3B1cDogdHJ1ZSxcbiAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGRhdGFTb3VyY2U6IFtdLFxuICAgIGRlZmF1bHRPcGVuOiBudWxsLFxuICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICBnZXRQb3B1cENvbnRhaW5lcjogbnVsbCxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnRlbnQ6IFwibm9ybWFsXCIsXG4gICAgbGVmdEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBub3RGb3VuZENvbnRlbnQ6IG51bGwsXG4gICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgb25TZWFyY2g6IG5vb3AsXG4gICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgb3BlbjogbnVsbCxcbiAgICBwbGFjZWhvbGRlcjogXCLor7fpgInmi6lcIixcbiAgICByaWdodEVsZW1lbnQ6IHVuZGVmaW5lZCxcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdGhlbWU6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7IG9wZW4sIHZhbHVlIH06IElTdWdnZXN0UHJvcHMpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZTogSVN1Z2dlc3RTdGF0ZSA9IHt9XG4gICAgaWYgKG9wZW4gIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLm9wZW4gPSBvcGVuXG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuc2VhcmNoVmFsdWUgPSAodmFsdWUgfHwgXCJcIikudG9TdHJpbmcoKVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3U3RhdGUpLmxlbmd0aCA+IDAgPyBuZXdTdGF0ZSA6IG51bGxcbiAgfVxuXG4gIHB1YmxpYyBsb2NrZWQgPSBmYWxzZVxuXG4gIHB1YmxpYyBzdWdnZXN0OiBJU3VnZ2VzdFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJU3VnZ2VzdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBkZWZhdWx0T3BlbiwgZGVmYXVsdFZhbHVlLCBvcGVuLCB2YWx1ZSB9ID0gcHJvcHNcblxuICAgIGxldCBvcGVuU3RhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWRcbiAgICBpZiAob3BlbiAhPT0gbnVsbCkge1xuICAgICAgb3BlblN0YXRlID0gb3BlblxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdE9wZW4gIT09IG51bGwpIHtcbiAgICAgIG9wZW5TdGF0ZSA9IGRlZmF1bHRPcGVuXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IG9wZW5TdGF0ZSxcbiAgICAgIHNlYXJjaFZhbHVlOiAodmFsdWUgfHwgZGVmYXVsdFZhbHVlIHx8IFwiXCIpLnRvU3RyaW5nKCksXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNhdmVTdWdnZXN0ID0gKG5vZGU6IElTdWdnZXN0KSA9PiB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdCA9IG5vZGVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Ecm9wZG93blZpc2libGVDaGFuZ2UgPSAob3BlbjogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHsgb25Ecm9wZG93blZpc2libGVDaGFuZ2UsIG9wZW46IG9wZW5Qcm9wIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAob3BlblByb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuIH0pXG4gICAgfVxuICAgIGlmIChvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSkgb25Ecm9wZG93blZpc2libGVDaGFuZ2Uob3BlbilcbiAgfVxuXG4gIHB1YmxpYyBvblNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25TZWFyY2ggfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IG9wZW4gfSA9IHRoaXMuc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IHZhbCB9KVxuXG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICAgIH1cbiAgICBpZiAob25TZWFyY2gpIHtcbiAgICAgIG9uU2VhcmNoKHZhbClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9IaWRlUG9wdXAsXG4gICAgICBkYXRhU291cmNlLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgaW50ZW50LFxuICAgICAgbGVmdEVsZW1lbnQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJpZ2h0RWxlbWVudCxcbiAgICAgIHNpemUsXG4gICAgICB0aGVtZSxcbiAgICAgIHZhbHVlLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IG9wZW46IG9wZW5TdGF0ZSwgc2VhcmNoVmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IHJlc3RQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJkZWZhdWx0T3BlblwiLFxuICAgICAgXCJvblNlYXJjaFwiLFxuICAgICAgXCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZVwiLFxuICAgICAgXCJvcGVuXCIsXG4gICAgXSlcblxuICAgIC8vIG9wZW5TdGF0ZSDlj6/og73mmK8gdW5kZWZpbmVkIG9yIG51bGxcbiAgICBjb25zdCBzZWxlY3RQcm9wczoge1xuICAgICAgZGVmYXVsdFZhbHVlPzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxuICAgICAgb3Blbj86IGJvb2xlYW5cbiAgICAgIHZhbHVlPzogUmVhY3QuUmVhY3RUZXh0IHwgbnVsbFxuICAgIH0gPSB7fVxuICAgIGlmICh0eXBlb2Ygb3BlblN0YXRlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgc2VsZWN0UHJvcHMub3BlbiA9IG9wZW5TdGF0ZVxuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHNlbGVjdFByb3BzLnZhbHVlID0gdmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0UHJvcHMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlXG4gICAgfVxuXG4gICAgbGV0IG9wdGlvbnMgPSBkYXRhU291cmNlXG4gICAgICA/IGRhdGFTb3VyY2VcbiAgICAgICAgICAuZmlsdGVyKG8gPT4ge1xuICAgICAgICAgICAgaWYgKHNlYXJjaFZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvLnByb3BzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG8udG9VcHBlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b1VwcGVyQ2FzZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XG4gICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICA6IFtdXG5cbiAgICBpZiAoYXV0b0hpZGVQb3B1cCAmJiAhc2VhcmNoVmFsdWUpIHtcbiAgICAgIG9wdGlvbnMgPSBbXVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgeyh7IGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lckNvbnRleHQgfSkgPT4gKFxuICAgICAgICAgIDxSY1NlbGVjdFxuICAgICAgICAgICAgbW9kZT1cImNvbWJvYm94XCJcbiAgICAgICAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uPXtudWxsfVxuICAgICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXG4gICAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT1cImFkdWktc3VnZ2VzdC1kcm9wZG93blwiXG4gICAgICAgICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25cbiAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyPXtnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRQb3B1cENvbnRhaW5lckNvbnRleHR9XG4gICAgICAgICAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZT17dGhpcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZX1cbiAgICAgICAgICAgIG9uU2VhcmNoPXt0aGlzLm9uU2VhcmNofVxuICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgIHByZWZpeENscz1cImFkdWktc3VnZ2VzdFwiXG4gICAgICAgICAgICBzaG93U2VhcmNoXG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVN1Z2dlc3R9XG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInNsaWRlLXVwXCJcbiAgICAgICAgICAgIGdldElucHV0RWxlbWVudD17KCkgPT4gKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICAgICAgICBsZWZ0RWxlbWVudD17bGVmdEVsZW1lbnR9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIHJpZ2h0RWxlbWVudD17cmlnaHRFbGVtZW50fVxuICAgICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cbiAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgPC9SY1NlbGVjdD5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29uZmlnQ29udGV4dC5Db25zdW1lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdFxuIl19