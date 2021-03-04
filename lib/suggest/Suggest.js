"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VnZ2VzdC9TdWdnZXN0LnRzeCJdLCJuYW1lcyI6WyJub29wIiwiU3VnZ2VzdCIsInByb3BzIiwibG9ja2VkIiwic3VnZ2VzdCIsInNhdmVTdWdnZXN0Iiwibm9kZSIsIm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwib3BlbiIsIm9wZW5Qcm9wIiwic2V0U3RhdGUiLCJvblNlYXJjaCIsInZhbCIsInN0YXRlIiwic2VhcmNoVmFsdWUiLCJkZWZhdWx0T3BlbiIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwib3BlblN0YXRlIiwidG9TdHJpbmciLCJhdXRvSGlkZVBvcHVwIiwiZGF0YVNvdXJjZSIsImdldFBvcHVwQ29udGFpbmVyIiwiaW5wdXRQcm9wcyIsImludGVudCIsImxlZnRFbGVtZW50IiwicGxhY2Vob2xkZXIiLCJyaWdodEVsZW1lbnQiLCJzaXplIiwidGhlbWUiLCJvdGhlclByb3BzIiwicmVzdFByb3BzIiwic2VsZWN0UHJvcHMiLCJvcHRpb25zIiwiZmlsdGVyIiwibyIsInRpdGxlIiwidG9VcHBlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsImlzVmFsaWRFbGVtZW50IiwiZ2V0UG9wdXBDb250YWluZXJDb250ZXh0IiwiQ29tcG9uZW50IiwiT3B0aW9uIiwiT3B0R3JvdXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiYXV0b0ZvY3VzIiwiY2hpbGRyZW4iLCJhcnJheSIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJvYmplY3QiLCJvbmVPZiIsIm5vdEZvdW5kQ29udGVudCIsIm9uU2VsZWN0IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV3U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7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RW1DLFNBakI0QjtBQWtCMUNsQyxFQUFBQSxJQUFJLEVBQUUsT0FsQm9DO0FBbUIxQ0MsRUFBQUEsS0FBSyxFQUFFLElBbkJtQztBQW9CMUNaLEVBQUFBLEtBQUssRUFBRTtBQXBCbUMsQzs7QUE5RnhDaEIsTyxDQXFIVThELHdCLEdBQTJCLGlCQUFvQztBQUFBLE1BQWpDdkQsSUFBaUMsU0FBakNBLElBQWlDO0FBQUEsTUFBM0JTLEtBQTJCLFNBQTNCQSxLQUEyQjtBQUMzRSxNQUFNK0MsUUFBdUIsR0FBRyxFQUFoQzs7QUFDQSxNQUFJeEQsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJ3RCxJQUFBQSxRQUFRLENBQUN4RCxJQUFULEdBQWdCQSxJQUFoQjtBQUNEOztBQUNELE1BQUlTLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCK0MsSUFBQUEsUUFBUSxDQUFDbEQsV0FBVCxHQUF1QixDQUFDRyxLQUFLLElBQUksRUFBVixFQUFjRSxRQUFkLEVBQXZCO0FBQ0Q7O0FBQ0QsU0FBTzhDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixRQUFaLEVBQXNCRyxNQUF0QixHQUErQixDQUEvQixHQUFtQ0gsUUFBbkMsR0FBOEMsSUFBckQ7QUFDRCxDOztlQWdLWS9ELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgUmNTZWxlY3QsIHsgT3B0aW9uLCBPcHRHcm91cCB9IGZyb20gXCJyYy1zZWxlY3RcIlxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuLi9jb25maWctcHJvdmlkZXJcIlxuaW1wb3J0IElucHV0LCB7IElJbnB1dFByb3BzIH0gZnJvbSBcIi4uL2lucHV0XCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJU3VnZ2VzdCB7XG4gIGdldFBvcHVwRE9NTm9kZTogKCkgPT4gSFRNTEVsZW1lbnRcbiAgZ2V0SW5wdXRET01Ob2RlOiAoKSA9PiBIVE1MSW5wdXRFbGVtZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbiB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICBrZXk6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3VnZ2VzdFByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDmmK/lkKblnKjmkJzntKLmoYbkuLrnqbrml7bvvIzoh6rliqjpmpDol48gcG9wdXBcbiAgICovXG4gIGF1dG9IaWRlUG9wdXA/OiBib29sZWFuXG4gIC8qKlxuICAgKiBpbnB1dCDmoIfnrb7ljp/nlJ/lsZ7mgKcgLSBhdXRvRm9jdXNcbiAgICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW5cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgZGVmYXVsdE9wZW4/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog6buY6K6k5YC8IC0g5YaF6YOo6amx5YqoXG4gICAqL1xuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCBudWxsXG4gIGRhdGFTb3VyY2U/OiBhbnlbXVxuICAvKipcbiAgICog5oyH5a6a5by55Ye65bGC55qE54i257qn77yM6buY6K6k5Li6IGRvY3VtZW50LmJvZHlcbiAgICovXG4gIGdldFBvcHVwQ29udGFpbmVyPzogbnVsbCB8ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50KVxuICBpbnB1dFByb3BzPzogSUlucHV0UHJvcHNcbiAgLyoqXG4gICAqIOexu+Wei1xuICAgKi9cbiAgaW50ZW50PzogXCJub3JtYWxcIiB8IFwicHJpbWFyeVwiIHwgXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZGFuZ2VyXCJcbiAgbGVmdEVsZW1lbnQ/OiBKU1guRWxlbWVudFxuICBub3RGb3VuZENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsXG4gIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPzogKG9wZW46IGJvb2xlYW4pID0+IHZvaWRcbiAgb25TZWFyY2g/OiAodmFsOiBzdHJpbmcpID0+IHZvaWRcbiAgb25TZWxlY3Q/OiAodmFsdWU6IHN0cmluZywgb3B0aW9uOiBJT3B0aW9uKSA9PiB2b2lkXG4gIG9wZW4/OiBudWxsIHwgYm9vbGVhblxuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICByaWdodEVsZW1lbnQ/OiBKU1guRWxlbWVudFxuICAvKipcbiAgICog6K6+572u5bC65a+4XG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDorr7nva7kuLvpophcbiAgICovXG4gIHRoZW1lPzogbnVsbCB8IFwibGlnaHRcIlxuICB2YWx1ZT86IHN0cmluZyB8IG51bGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3VnZ2VzdFN0YXRlIHtcbiAgb3Blbj86IGJvb2xlYW5cbiAgc2VhcmNoVmFsdWU/OiBzdHJpbmdcbn1cbi8qKlxuICog5LiL5ouJ6YCJ5oup5Zmo44CCXG4gKi9cbmNsYXNzIFN1Z2dlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVN1Z2dlc3RQcm9wcywgSVN1Z2dlc3RTdGF0ZT4ge1xuICBwdWJsaWMgc3RhdGljIE9wdGlvbjogdHlwZW9mIE9wdGlvbiA9IE9wdGlvblxuXG4gIHB1YmxpYyBzdGF0aWMgT3B0R3JvdXA6IHR5cGVvZiBPcHRHcm91cCA9IE9wdEdyb3VwXG5cbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog5piv5ZCm5Zyo5pCc57Si5qGG5Li656m65pe277yM6Ieq5Yqo6ZqQ6JePIHBvcHVwXG4gICAgICovXG4gICAgYXV0b0hpZGVQb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogaW5wdXQg5qCH562+5Y6f55Sf5bGe5oCnIC0gYXV0b0ZvY3VzXG4gICAgICovXG4gICAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog5LiL5ouJ5YiX6KGoXG4gICAgICovXG4gICAgZGF0YVNvdXJjZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOWGhemDqOmpseWKqO+8muaYr+WQpuWxleW8gFxuICAgICAqL1xuICAgIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpu5jorqTlgLwgLSDlhoXpg6jpqbHliqhcbiAgICAgKi9cbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICAvKipcbiAgICAgKiDmjIflrprlvLnlh7rlsYLnmoTniLbnuqfvvIzpu5jorqTkuLogZG9jdW1lbnQuYm9keVxuICAgICAqL1xuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDkvKDpgJLnu5kgPElucHV0IC8+IOeahCBQcm9wc1xuICAgICAqL1xuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog57G75Z6LXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgXCJub3JtYWxcIixcbiAgICAgIFwicHJpbWFyeVwiLFxuICAgICAgXCJzdWNjZXNzXCIsXG4gICAgICBcIndhcm5pbmdcIixcbiAgICAgIFwiZGFuZ2VyXCIsXG4gICAgXSksXG4gICAgLyoqXG4gICAgICog5YmN572u5YWD57SgXG4gICAgICovXG4gICAgbGVmdEVsZW1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOaXoOWMuemFjee7k+aenOaXtueahOaYvuekuuaWh+Wtl1xuICAgICAqL1xuICAgIG5vdEZvdW5kQ29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDkuIvmi4nlsZXnpLrlj5HnlJ/lj5jljJbml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mmJvb2xcbiAgICAgKi9cbiAgICBvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5pCc57Si5pe255qEIGhhbmRsZXLvvIzlj4LmlbDvvJp2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDpgInmi6nml7bnmoQgaGFuZGxlcu+8jOWPguaVsO+8mih2YWx1ZSwgb3B0aW9uKVxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDku47lpJbpg6jmjIflrprkuIvmi4nmmK/lkKblsZXlvIBcbiAgICAgKi9cbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDpgInmi6nmoYbpu5jorqTmloflrZdcbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDlkI7nva7lhYPntKBcbiAgICAgKi9cbiAgICByaWdodEVsZW1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruWwuuWvuFxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gICAgLyoqXG4gICAgICog6K6+572u5Li76aKYXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsaWdodFwiXSksXG4gICAgLyoqXG4gICAgICog5LuO5aSW6YOo5oyH5a6a5b2T5YmN6YCJ5Lit6aG555qE5YC8XG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJU3VnZ2VzdFByb3BzID0ge1xuICAgIGF1dG9IaWRlUG9wdXA6IHRydWUsXG4gICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBkYXRhU291cmNlOiBbXSxcbiAgICBkZWZhdWx0T3BlbjogbnVsbCxcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IG51bGwsXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW50ZW50OiBcIm5vcm1hbFwiLFxuICAgIGxlZnRFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgbm90Rm91bmRDb250ZW50OiBudWxsLFxuICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiBub29wLFxuICAgIG9uU2VhcmNoOiBub29wLFxuICAgIG9uU2VsZWN0OiBub29wLFxuICAgIG9wZW46IG51bGwsXG4gICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oupXCIsXG4gICAgcmlnaHRFbGVtZW50OiB1bmRlZmluZWQsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHRoZW1lOiBudWxsLFxuICAgIHZhbHVlOiBudWxsLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoeyBvcGVuLCB2YWx1ZSB9OiBJU3VnZ2VzdFByb3BzKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IElTdWdnZXN0U3RhdGUgPSB7fVxuICAgIGlmIChvcGVuICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5vcGVuID0gb3BlblxuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLnNlYXJjaFZhbHVlID0gKHZhbHVlIHx8IFwiXCIpLnRvU3RyaW5nKClcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICBwdWJsaWMgbG9ja2VkID0gZmFsc2VcblxuICBwdWJsaWMgc3VnZ2VzdDogSVN1Z2dlc3RcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVN1Z2dlc3RQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgZGVmYXVsdE9wZW4sIGRlZmF1bHRWYWx1ZSwgb3BlbiwgdmFsdWUgfSA9IHByb3BzXG5cbiAgICBsZXQgb3BlblN0YXRlOiBib29sZWFuIHwgdW5kZWZpbmVkXG4gICAgaWYgKG9wZW4gIT09IG51bGwpIHtcbiAgICAgIG9wZW5TdGF0ZSA9IG9wZW5cbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRPcGVuICE9PSBudWxsKSB7XG4gICAgICBvcGVuU3RhdGUgPSBkZWZhdWx0T3BlblxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBvcGVuU3RhdGUsXG4gICAgICBzZWFyY2hWYWx1ZTogKHZhbHVlIHx8IGRlZmF1bHRWYWx1ZSB8fCBcIlwiKS50b1N0cmluZygpLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYXZlU3VnZ2VzdCA9IChub2RlOiBJU3VnZ2VzdCkgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICB0aGlzLnN1Z2dlc3QgPSBub2RlXG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlID0gKG9wZW46IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLCBvcGVuOiBvcGVuUHJvcCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG9wZW5Qcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbiB9KVxuICAgIH1cbiAgICBpZiAob25Ecm9wZG93blZpc2libGVDaGFuZ2UpIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKG9wZW4pXG4gIH1cblxuICBwdWJsaWMgb25TZWFyY2ggPSAodmFsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IG9uU2VhcmNoIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzLnN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiB2YWwgfSlcblxuICAgIGlmICghb3Blbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSlcbiAgICB9XG4gICAgaWYgKG9uU2VhcmNoKSB7XG4gICAgICBvblNlYXJjaCh2YWwpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhdXRvSGlkZVBvcHVwLFxuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGludGVudCxcbiAgICAgIGxlZnRFbGVtZW50LFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByaWdodEVsZW1lbnQsXG4gICAgICBzaXplLFxuICAgICAgdGhlbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBvcGVuOiBvcGVuU3RhdGUsIHNlYXJjaFZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiZGVmYXVsdE9wZW5cIixcbiAgICAgIFwib25TZWFyY2hcIixcbiAgICAgIFwib25Ecm9wZG93blZpc2libGVDaGFuZ2VcIixcbiAgICAgIFwib3BlblwiLFxuICAgIF0pXG5cbiAgICAvLyBvcGVuU3RhdGUg5Y+v6IO95pivIHVuZGVmaW5lZCBvciBudWxsXG4gICAgY29uc3Qgc2VsZWN0UHJvcHM6IHtcbiAgICAgIGRlZmF1bHRWYWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgICAgIG9wZW4/OiBib29sZWFuXG4gICAgICB2YWx1ZT86IFJlYWN0LlJlYWN0VGV4dCB8IG51bGxcbiAgICB9ID0ge31cbiAgICBpZiAodHlwZW9mIG9wZW5TdGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHNlbGVjdFByb3BzLm9wZW4gPSBvcGVuU3RhdGVcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBzZWxlY3RQcm9wcy52YWx1ZSA9IHZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdFByb3BzLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZVxuICAgIH1cblxuICAgIGxldCBvcHRpb25zID0gZGF0YVNvdXJjZVxuICAgICAgPyBkYXRhU291cmNlXG4gICAgICAgICAgLmZpbHRlcigobykgPT4ge1xuICAgICAgICAgICAgaWYgKHNlYXJjaFZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvLnByb3BzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG8udG9VcHBlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b1VwcGVyQ2FzZSgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChpdGVtKSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cbiAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgIDogW11cblxuICAgIGlmIChhdXRvSGlkZVBvcHVwICYmICFzZWFyY2hWYWx1ZSkge1xuICAgICAgb3B0aW9ucyA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KHsgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dCB9KSA9PiAoXG4gICAgICAgICAgPFJjU2VsZWN0XG4gICAgICAgICAgICBtb2RlPVwiY29tYm9ib3hcIlxuICAgICAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb249e251bGx9XG4gICAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcbiAgICAgICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lPVwiYWR1aS1zdWdnZXN0LWRyb3Bkb3duXCJcbiAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblxuICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI9e2dldFBvcHVwQ29udGFpbmVyIHx8IGdldFBvcHVwQ29udGFpbmVyQ29udGV4dH1cbiAgICAgICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlPXt0aGlzLm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWFyY2g9e3RoaXMub25TZWFyY2h9XG4gICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwiY2hpbGRyZW5cIlxuICAgICAgICAgICAgcHJlZml4Q2xzPVwiYWR1aS1zdWdnZXN0XCJcbiAgICAgICAgICAgIHNob3dTZWFyY2hcbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlU3VnZ2VzdH1cbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic2xpZGUtdXBcIlxuICAgICAgICAgICAgZ2V0SW5wdXRFbGVtZW50PXsoKSA9PiAoXG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgICAgICAgIGxlZnRFbGVtZW50PXtsZWZ0RWxlbWVudH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgcmlnaHRFbGVtZW50PXtyaWdodEVsZW1lbnR9XG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey4uLnNlbGVjdFByb3BzfVxuICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICA8L1JjU2VsZWN0PlxuICAgICAgICApfVxuICAgICAgPC9Db25maWdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0XG4iXX0=