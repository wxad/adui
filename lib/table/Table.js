"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

var _rcVirtualList = _interopRequireDefault(require("rc-virtual-list"));

var _debounce = require("debounce");

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("../_util/omit"));

var _Column = _interopRequireDefault(require("./Column"));

var _affix = _interopRequireDefault(require("../affix"));

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _icon = _interopRequireDefault(require("../icon"));

var _popover = _interopRequireDefault(require("../popover"));

var _radio = _interopRequireDefault(require("../radio"));

var _resizeObserver = _interopRequireDefault(require("../resize-observer"));

var _TableSort = _interopRequireDefault(require("./TableSort"));

var _TableFilter = _interopRequireDefault(require("./TableFilter"));

var _ColumnManager = _interopRequireDefault(require("./ColumnManager"));

require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var prefix = "adui-table";
var TD_MIN_WIDTH = 100;
var SELECT_TD_WIDTH = 50;
var TD_HEIGHT = {
  large: 60,
  medium: 50,
  mini: 40,
  small: 40
};
var HORIZONTAL_ALIGN = {
  center: "center",
  left: "flex-start",
  right: "flex-end"
};
var VERTICAL_ALIGN = {
  bottom: "flex-end",
  center: "center",
  top: "flex-start"
};

var isFixedLeft = function isFixedLeft(col) {
  return col.fixed === "left" || col.fixed === true;
};

var isFixedRight = function isFixedRight(col) {
  return col.fixed === "right";
};

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(_props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, _props);
    _this.combinedCellsInfo = [];
    _this.affixHeader = void 0;
    _this.affixScrollbar = void 0;
    _this.mainTable = void 0;
    _this.mainTableBody = void 0;
    _this.mainThead = void 0;
    _this.wrapper = void 0;
    _this.debouncedWindowResize = void 0;
    _this.resizeEvent = void 0;
    _this.columnManager = void 0;

    _this.shouldComponentUpdate = function (nextProps, nextState) {
      return !(0, _shallowequal["default"])(_this.props, nextProps) || !(0, _shallowequal["default"])(_this.state, nextState);
    };

    _this.componentDidMount = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          columnManager = _assertThisInitialize.columnManager,
          combinedCellsInfo = _assertThisInitialize.combinedCellsInfo,
          debouncedWindowResize = _assertThisInitialize.debouncedWindowResize,
          props = _assertThisInitialize.props;

      var isAnyColumnsFixed = columnManager.isAnyColumnsFixed;
      var headerAffixed = props.headerAffixed,
          height = props.height;

      if (headerAffixed || height || isAnyColumnsFixed) {
        _this.handleWindowResize();

        _this.resizeEvent = (0, _addEventListener["default"])(window, "resize", debouncedWindowResize);
      }

      if (combinedCellsInfo.length) {
        _this.setState({
          combinedCellsInfo: combinedCellsInfo
        });
      }
    };

    _this.componentDidUpdate = function (_ref) {
      var dataSourceOld = _ref.dataSource,
          getCellPropsOld = _ref.getCellProps;
      var _this$props = _this.props,
          dataSource = _this$props.dataSource,
          getCellProps = _this$props.getCellProps;

      if (!(0, _shallowequal["default"])(dataSourceOld, dataSource)) {
        setTimeout(_this.handleWindowResize, 0);
      }

      if (!(0, _shallowequal["default"])(getCellPropsOld, getCellProps) && getCellProps) {
        _this.forceUpdate();
      }
    };

    _this.componentWillUnmount = function () {
      if (_this.resizeEvent) {
        _this.resizeEvent.remove();
      }

      if (_this.debouncedWindowResize) {
        _this.debouncedWindowResize.clear();
      }
    };

    _this.resizeColumnStart = function (e, col) {
      e.stopPropagation();
      document.body.style.cursor = "col-resize";

      _this.setState({
        currentlyResizing: {
          col: col,
          dataIndex: col.dataIndex,
          parentWidth: e.currentTarget.parentElement && e.currentTarget.parentElement.parentElement && e.currentTarget.parentElement.parentElement.getBoundingClientRect().width,
          startX: e.pageX
        }
      });

      setTimeout(function () {
        window.addEventListener("mousemove", _this.resizeColumnMoving);
        window.addEventListener("mouseup", _this.resizeColumnEnd);
        window.addEventListener("mouseleave", _this.resizeColumnEnd);
      }, 0);
    };

    _this.resizeColumnMoving = function (e) {
      e.stopPropagation();
      var _this$state = _this.state,
          resized = _this$state.resized,
          currentlyResizing = _this$state.currentlyResizing;
      var col = currentlyResizing.col,
          dataIndex = currentlyResizing.dataIndex,
          parentWidth = currentlyResizing.parentWidth,
          startX = currentlyResizing.startX;
      var baseWidth = Math.ceil(col.title.length > 4 ? col.title.length / 2 : col.title.length) * 13 + 2;
      var newResized = resized.filter(function (o) {
        return o.dataIndex !== dataIndex;
      });
      var newWidth = Math.max(Math.ceil(parentWidth + e.pageX - startX), !!col.onSort || !!col.onFilter ? baseWidth + 36 : baseWidth + 16);
      newResized.push({
        dataIndex: dataIndex,
        value: newWidth
      });

      _this.setState({
        resized: newResized
      });

      _this.debouncedWindowResize();
    };

    _this.resizeColumnEnd = function (e) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          mainTable = _assertThisInitialize2.mainTable;

      document.body.style.cursor = "";
      e.stopPropagation();
      window.removeEventListener("mousemove", _this.resizeColumnMoving);
      window.removeEventListener("mouseup", _this.resizeColumnEnd);
      window.removeEventListener("mouseleave", _this.resizeColumnEnd);

      _this.setState({
        currentlyResizing: {},
        isMainTableOverflowX: mainTable && mainTable.scrollWidth > mainTable.offsetWidth,
        isMainTableOverflowY: mainTable && mainTable.scrollHeight > mainTable.offsetHeight,
        isResizerShow: false
      });
    };

    _this.handleWindowResize = function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          columnManager = _assertThisInitialize3.columnManager,
          mainTable = _assertThisInitialize3.mainTable,
          props = _assertThisInitialize3.props;

      var isAnyColumnsFixed = columnManager.isAnyColumnsFixed;
      var headerAffixed = props.headerAffixed,
          height = props.height;

      if ((headerAffixed || height || isAnyColumnsFixed) && mainTable) {
        var oldStyle = _this.state.mainTableStyle;
        var rect = mainTable.getBoundingClientRect();
        var mainTableStyle = {};
        mainTableStyle.left = rect.left;
        mainTableStyle.width = rect.width;

        if (!(0, _shallowequal["default"])(mainTableStyle, oldStyle)) {
          _this.setState({
            mainTableStyle: mainTableStyle
          });
        }

        _this.setState({
          isMainTableOverflowX: mainTable && mainTable.scrollWidth > mainTable.offsetWidth,
          isMainTableOverflowY: mainTable && mainTable.scrollHeight > mainTable.offsetHeight
        });
      }
    };

    _this.handleMainTableScroll = function (e) {
      var _assertThisInitialize4 = _assertThisInitialized(_this),
          affixHeader = _assertThisInitialize4.affixHeader,
          mainTable = _assertThisInitialize4.mainTable;

      var onScroll = _this.props.onScroll;
      var affixedTop = _this.state.affixedTop;

      if (onScroll && e) {
        var target = e.target;

        if (target.getAttribute("role") === "table") {
          onScroll(e);
        }
      }

      if (affixedTop && affixHeader && mainTable && affixHeader.fixedNode) {
        affixHeader.fixedNode.scrollLeft = mainTable.scrollLeft;
      }

      _this.syncTableScrollPosition(mainTable.scrollLeft);
    };

    _this.syncTableScrollPosition = function (value) {
      var _assertThisInitialize5 = _assertThisInitialized(_this),
          affixScrollbar = _assertThisInitialize5.affixScrollbar,
          mainTable = _assertThisInitialize5.mainTable,
          mainThead = _assertThisInitialize5.mainThead;

      var height = _this.props.height;

      if (mainTable && affixScrollbar && affixScrollbar.fixedNode) {
        if (mainTable.scrollLeft !== value) {
          mainTable.scrollLeft = value;
        }

        if (affixScrollbar.fixedNode.scrollLeft !== value) {
          affixScrollbar.fixedNode.scrollLeft = value;
        }
      }

      if (height && mainThead) {
        mainThead.scrollLeft = value;
      }
    };

    _this.handleRowClick = function (row, i, e) {
      var _this$props2 = _this.props,
          expandOnRowClick = _this$props2.expandOnRowClick,
          getSelectProps = _this$props2.getSelectProps,
          onRowClick = _this$props2.onRowClick,
          selectOnRowClick = _this$props2.selectOnRowClick;
      var selectedRowKeys = _this.state.selectedRowKeys;
      var key = row.key;

      if (selectOnRowClick && typeof key !== "undefined" && !(getSelectProps && getSelectProps(row, i) && getSelectProps(row, i).disabled)) {
        _this.handleSelect(key, !selectedRowKeys.includes(key));
      }

      if (expandOnRowClick) {
        _this.handleExpand(key);
      }

      if (onRowClick) {
        onRowClick(row, i, e);
      }
    };

    _this.handleThResize = function (width, dataIndex, index, fixedPosition) {
      var getColumns = _this.columnManager.getColumns;
      var fixedColumnsInfos = _this.state.fixedColumnsInfos;
      var columns = getColumns();
      fixedColumnsInfos = fixedColumnsInfos.filter(function (o) {
        return columns.find(function (p) {
          return p.dataIndex === o.dataIndex;
        });
      });
      var i = fixedColumnsInfos.findIndex(function (o) {
        return o.dataIndex === dataIndex;
      });
      var fixed = fixedPosition === "right" ? "right" : "left";

      if (i > -1) {
        if (fixedColumnsInfos[i].width === width) {
          return;
        }

        fixedColumnsInfos.splice(i, 1);
      }

      fixedColumnsInfos.push({
        width: width,
        dataIndex: dataIndex,
        index: index,
        fixed: fixed
      });
      fixedColumnsInfos.sort(function (a, b) {
        return a.index - b.index;
      });
      var fixedColumnsInfosLeft = fixedColumnsInfos.filter(function (o) {
        return o.fixed === "left";
      });
      var fixedColumnsInfosRight = fixedColumnsInfos.filter(function (o) {
        return o.fixed === "right";
      }).sort(function (a, b) {
        return b.index - a.index;
      });
      fixedColumnsInfos.forEach(function (col) {
        var colIndex;

        if (col.fixed === "left") {
          colIndex = fixedColumnsInfosLeft.findIndex(function (o) {
            return o.dataIndex === col.dataIndex;
          });

          if (colIndex === fixedColumnsInfosLeft.length - 1) {
            col.isLastLeft = true;
          } else {
            col.isLastLeft = false;
          }

          col.offset = colIndex === -1 ? 0 : fixedColumnsInfosLeft.slice(0, colIndex).reduce(function (acc, cur) {
            return acc + cur.width;
          }, 0);
        } else {
          colIndex = fixedColumnsInfosRight.findIndex(function (o) {
            return o.dataIndex === col.dataIndex;
          });

          if (colIndex === fixedColumnsInfosRight.length - 1) {
            col.isFirstRight = true;
          } else {
            col.isFirstRight = false;
          }

          col.offset = colIndex === -1 ? 0 : fixedColumnsInfosRight.slice(0, colIndex).reduce(function (acc, cur) {
            return acc + cur.width;
          }, 0);
        }
      });

      _this.setState({
        fixedColumnsInfos: fixedColumnsInfos
      }, _this.forceUpdate);
    };

    _this.handleTheadMouseEnter = function () {
      var isResizerShow = _this.state.isResizerShow;

      if (!isResizerShow) {
        _this.setState({
          isResizerShow: true
        });
      }
    };

    _this.handleTheadMouseLeave = function () {
      var currentlyResizing = _this.state.currentlyResizing;

      if (Object.keys(currentlyResizing).length === 0) {
        _this.setState({
          isResizerShow: false
        });
      }
    };

    _this.handleExpand = function (key) {
      if (typeof key === "undefined") {
        return;
      }

      var _this$props3 = _this.props,
          expandedRowKeysProp = _this$props3.expandedRowKeys,
          onExpandChange = _this$props3.onExpandChange;
      var expandedRowKeys = _this.state.expandedRowKeys;

      var keys = _toConsumableArray(expandedRowKeys);

      var index = keys.indexOf(key);

      if (index > -1) {
        keys.splice(index, 1);
      } else {
        keys.push(key);
      }

      if (expandedRowKeysProp === null) {
        _this.setState({
          expandedRowKeys: keys
        });
      }

      if (onExpandChange) {
        onExpandChange(keys);
      }
    };

    _this.handleSelect = function (key, checked) {
      if (typeof key === "undefined") {
        return;
      }

      var _this$props4 = _this.props,
          onSelectChange = _this$props4.onSelectChange,
          selectedRowKeysProp = _this$props4.selectedRowKeys,
          selectMultiple = _this$props4.selectMultiple;
      var selectedRowKeys = _this.state.selectedRowKeys;

      var keys = _toConsumableArray(selectedRowKeys);

      if (selectMultiple) {
        if (checked) {
          keys.push(key);
        } else {
          keys.splice(selectedRowKeys.indexOf(key), 1);
        }
      } else {
        keys = [key];
      }

      if (selectedRowKeysProp === null) {
        _this.setState({
          selectedRowKeys: keys
        });
      }

      if (onSelectChange) {
        onSelectChange(keys);
      }
    };

    _this.handleSelectAll = function (checked) {
      var _this$props5 = _this.props,
          onSelectChange = _this$props5.onSelectChange,
          selectedRowKeysProp = _this$props5.selectedRowKeys;
      var selectedRowKeys = _this.state.selectedRowKeys;

      var keys = _toConsumableArray(selectedRowKeys);

      var availableKeys = _this.getAvailableRowsKeys();

      if (checked) {
        availableKeys.forEach(function (key) {
          if (!selectedRowKeys.includes(key)) {
            keys.push(key);
          }
        });
      } else {
        selectedRowKeys.forEach(function (key) {
          if (availableKeys.includes(key)) {
            keys.splice(keys.indexOf(key), 1);
          }
        });
      }

      if (selectedRowKeysProp === null) {
        _this.setState({
          selectedRowKeys: keys
        });
      }

      if (onSelectChange) {
        onSelectChange(keys);
      }
    };

    _this.hasSelectedAll = function () {
      var keys = _this.getAvailableRowsKeys();

      var dataSource = _this.props.dataSource;
      var selectedRowKeys = _this.state.selectedRowKeys;

      if (dataSource && dataSource.length && keys.length && keys.every(function (key) {
        return selectedRowKeys.includes(key);
      })) {
        return true;
      }

      return false;
    };

    _this.getAvailableRowsKeys = function () {
      var _this$props6 = _this.props,
          dataSource = _this$props6.dataSource,
          getSelectProps = _this$props6.getSelectProps;
      var keys = [];

      if (!dataSource) {
        return [];
      }

      dataSource.forEach(function (row, i) {
        var key = row.key;

        if (typeof key !== "undefined" && !(getSelectProps && getSelectProps(row, i) && getSelectProps(row, i).disabled)) {
          keys.push(key);
        }
      });
      return keys;
    };

    _this.generateTable = function () {
      var _this$mainTable;

      var _this$props7 = _this.props,
          dataSource = _this$props7.dataSource,
          expandIconVisible = _this$props7.expandIconVisible,
          expandedRowRender = _this$props7.expandedRowRender,
          expandOnRowClick = _this$props7.expandOnRowClick,
          getHeadClassName = _this$props7.getHeadClassName,
          getHeadStyle = _this$props7.getHeadStyle,
          getRowClassName = _this$props7.getRowClassName,
          getRowStyle = _this$props7.getRowStyle,
          getSelectProps = _this$props7.getSelectProps,
          headerAffixed = _this$props7.headerAffixed,
          headerAffixedOffsetTop = _this$props7.headerAffixedOffsetTop,
          headerAffixGetTarget = _this$props7.headerAffixGetTarget,
          height = _this$props7.height,
          onExpandChange = _this$props7.onExpandChange,
          onRowMouseEnter = _this$props7.onRowMouseEnter,
          onRowMouseLeave = _this$props7.onRowMouseLeave,
          onSelectChange = _this$props7.onSelectChange,
          selectMultiple = _this$props7.selectMultiple,
          selectOnRowClick = _this$props7.selectOnRowClick,
          size = _this$props7.size,
          verticalAlign = _this$props7.verticalAlign,
          virtualListProps = _this$props7.virtualListProps,
          virtualListStyle = _this$props7.virtualListStyle,
          virtualScroll = _this$props7.virtualScroll;
      var _this$state2 = _this.state,
          affixedTop = _this$state2.affixedTop,
          affixedBottom = _this$state2.affixedBottom,
          expandedRowKeys = _this$state2.expandedRowKeys,
          fixedColumnsInfos = _this$state2.fixedColumnsInfos,
          isMainTableOverflowX = _this$state2.isMainTableOverflowX,
          isMainTableOverflowY = _this$state2.isMainTableOverflowY,
          mainTableStyle = _this$state2.mainTableStyle,
          resized = _this$state2.resized,
          selectedRowKeys = _this$state2.selectedRowKeys;
      var _this$columnManager = _this.columnManager,
          getColumns = _this$columnManager.getColumns,
          getGroupColumnsDepth = _this$columnManager.getGroupColumnsDepth,
          isAnyColumnsLeftFixed = _this$columnManager.isAnyColumnsLeftFixed;
      var columns = getColumns();

      var theadStyle = _objectSpread({
        height: "".concat(TD_HEIGHT[size || "small"] * getGroupColumnsDepth(), "px")
      }, getHeadStyle && getHeadStyle() || {});

      var theadPlaceholderVisible = expandIconVisible && (!!onSelectChange || !!onExpandChange);
      var thead = React.createElement("div", {
        key: 0,
        className: (0, _classnames["default"])("".concat(prefix, "-thead"), getHeadClassName && getHeadClassName()),
        onMouseEnter: _this.handleTheadMouseEnter,
        onMouseLeave: _this.handleTheadMouseLeave,
        ref: _this.saveRef("mainThead"),
        style: theadStyle
      }, theadPlaceholderVisible && React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-th"), "".concat(prefix, "-th_functional"), _defineProperty({}, "".concat(prefix, "-th_left"), isAnyColumnsLeftFixed())),
        key: "functional-all"
      }, selectMultiple && !!onSelectChange && React.createElement("div", {
        className: "".concat(prefix, "-cell")
      }, React.createElement(_checkbox["default"], {
        disabled: !_this.getAvailableRowsKeys().length,
        onChange: _this.handleSelectAll,
        checked: _this.hasSelectedAll(),
        className: "".concat(prefix, "-selectComponent")
      }))), columns.map(function (col, index) {
        var _fixedColumnsInfos$fi, _fixedColumnsInfos$fi2, _classNames2, _fixedColumnsInfos$fi3, _fixedColumnsInfos$fi4;

        var align = col.align,
            dataIndex = col.dataIndex,
            filters = col.filters,
            fixed = col.fixed,
            onFilter = col.onFilter,
            onSort = col.onSort,
            sortOrder = col.sortOrder,
            title = col.title,
            width = col.width;
        var resizedCol = resized.find(function (o) {
          return o.dataIndex === dataIndex;
        });
        var clickable = !!onSort || sortOrder !== null && sortOrder !== undefined || !!onFilter || !!filters;
        var minWidth = 0;

        if (typeof title === "string") {
          minWidth = Math.ceil(title.length > 4 ? title.length / 2 : title.length) * 13 + 16;

          if (clickable) {
            minWidth += 20;
          }
        }

        var flexValue;

        if (typeof width === "number") {
          flexValue = "".concat(width, " 0 auto");
        } else if (typeof width === "string") {
          if (width.length - width.lastIndexOf("px") === 2) {
            flexValue = "".concat(width.slice(0, -2), " 0 auto");
          } else {
            flexValue = "0 0 ".concat(width);
          }
        } else {
          flexValue = "".concat(Math.max(TD_MIN_WIDTH, minWidth), " 0 auto");
        }

        return React.createElement(_resizeObserver["default"], {
          onResize: function onResize(_ref2) {
            var widthResize = _ref2.width;

            _this.handleThResize(widthResize, dataIndex, index, fixed);
          },
          disabled: !fixed,
          key: dataIndex || index
        }, React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefix, "-th"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-th_clickable"), clickable), _defineProperty(_classNames2, "".concat(prefix, "-th_left"), isFixedLeft(col)), _defineProperty(_classNames2, "".concat(prefix, "-th_right"), isFixedRight(col)), _defineProperty(_classNames2, "".concat(prefix, "-th_leftLast"), (_fixedColumnsInfos$fi = fixedColumnsInfos.find(function (o) {
            return o.dataIndex === dataIndex;
          })) === null || _fixedColumnsInfos$fi === void 0 ? void 0 : _fixedColumnsInfos$fi.isLastLeft), _defineProperty(_classNames2, "".concat(prefix, "-th_rightFirst"), (_fixedColumnsInfos$fi2 = fixedColumnsInfos.find(function (o) {
            return o.dataIndex === dataIndex;
          })) === null || _fixedColumnsInfos$fi2 === void 0 ? void 0 : _fixedColumnsInfos$fi2.isFirstRight), _classNames2)),
          key: dataIndex || index,
          style: {
            left: isFixedLeft(col) ? (((_fixedColumnsInfos$fi3 = fixedColumnsInfos.find(function (o) {
              return o.dataIndex === dataIndex;
            })) === null || _fixedColumnsInfos$fi3 === void 0 ? void 0 : _fixedColumnsInfos$fi3.offset) || 0) + (theadPlaceholderVisible ? SELECT_TD_WIDTH : 0) : undefined,
            right: isFixedRight(col) ? (((_fixedColumnsInfos$fi4 = fixedColumnsInfos.find(function (o) {
              return o.dataIndex === dataIndex;
            })) === null || _fixedColumnsInfos$fi4 === void 0 ? void 0 : _fixedColumnsInfos$fi4.offset) || 0) + (isMainTableOverflowY && height ? 14 : 0) : undefined,
            flex: resizedCol ? "".concat(resizedCol.value, " 0 auto") : flexValue,
            maxWidth: resizedCol ? resizedCol.value : width || "",
            textAlign: align || undefined,
            width: resizedCol ? resizedCol.value : width || Math.max(TD_MIN_WIDTH, minWidth)
          },
          "data-column": index
        }, _this.generateThCell(col, {
          index: index,
          columns: columns
        }), col.children && React.createElement("div", {
          className: "".concat(prefix, "-thGroup")
        }, col.children.map(function (childCol, childColIndex) {
          return React.createElement("div", {
            className: (0, _classnames["default"])("".concat(prefix, "-th"), _defineProperty({}, "".concat(prefix, "-th_clickable"), !!childCol.onSort || childCol.sortOrder !== null && childCol.sortOrder !== undefined || !!childCol.onFilter || !!childCol.filters)),
            key: childCol.dataIndex || childColIndex,
            style: {
              flex: "100 0 auto",
              width: "100px",
              textAlign: childCol.align || undefined
            }
          }, _this.generateThCell(childCol), childCol.children && React.createElement("div", {
            className: "".concat(prefix, "-thGroup")
          }, childCol.children.map(function (grandCol, grandColIndex) {
            return React.createElement("div", {
              className: (0, _classnames["default"])("".concat(prefix, "-th"), _defineProperty({}, "".concat(prefix, "-th_clickable"), !!grandCol.onSort || grandCol.sortOrder !== null && grandCol.sortOrder !== undefined || !!grandCol.onFilter || !!grandCol.filters)),
              key: grandCol.dataIndex || grandColIndex,
              style: {
                flex: "100 0 auto",
                width: "100px",
                textAlign: grandCol.align || undefined
              }
            }, _this.generateThCell(grandCol));
          })));
        }))));
      }));

      var generateTrs = function generateTrs(row, rowIndex) {
        var _classNames5, _selectPropsGetted$po;

        var key = row.key;
        var colArray = [];
        var selectPropsGetted = getSelectProps && getSelectProps(row, rowIndex);

        var allSelectProps = _objectSpread({
          checked: selectedRowKeys.includes(key),
          className: "".concat(prefix, "-selectComponent"),
          onChange: function onChange(checked) {
            return _this.handleSelect(key, checked);
          },
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        }, selectPropsGetted || {});

        var selectProps = (0, _omit["default"])(allSelectProps, ["popoverProps"]);
        var selectCell = onExpandChange ? React.createElement("div", {
          className: "".concat(prefix, "-selectComponent"),
          style: {
            cursor: "pointer"
          },
          onClick: function onClick() {
            return _this.handleExpand(key);
          },
          role: "none"
        }, React.createElement(_icon["default"], {
          className: "".concat(prefix, "-expandIcon"),
          icon: "arrow-down"
        })) : selectMultiple ? React.createElement(_checkbox["default"], selectProps) : React.createElement(_radio["default"], selectProps);

        var generateTr = function generateTr(columnsParam, parentIndex) {
          columnsParam.forEach(function (col, colIndexParam) {
            var colIndex = colIndexParam;

            if (parentIndex) {
              for (var i = 0; i < parentIndex; i += 1) {
                var _columns$i$children;

                var childrenCount = ((_columns$i$children = columns[i].children) === null || _columns$i$children === void 0 ? void 0 : _columns$i$children.length) || 1;

                if (childrenCount) {
                  colIndex += childrenCount;
                }
              }
            }

            if (!col.children) {
              colArray.push(_this.generateTbodyCell(row, col, rowIndex, colIndex));
            } else {
              generateTr(col.children, colIndexParam);
            }
          });
        };

        generateTr(columns);
        var tr = React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefix, "-tr"), getRowClassName && getRowClassName(row, rowIndex), (_classNames5 = {}, _defineProperty(_classNames5, "".concat(prefix, "-tr_clickable"), expandOnRowClick || selectOnRowClick), _defineProperty(_classNames5, "".concat(prefix, "-tr_expanded"), expandedRowKeys.includes(key)), _defineProperty(_classNames5, "".concat(prefix, "-tr_selected"), selectedRowKeys.includes(key)), _classNames5)),
          key: key || rowIndex,
          role: "row",
          "data-row": rowIndex,
          onMouseEnter: onRowMouseEnter ? function (e) {
            return onRowMouseEnter(row, rowIndex, e);
          } : undefined,
          onMouseLeave: onRowMouseLeave ? function (e) {
            return onRowMouseLeave(row, rowIndex, e);
          } : undefined,
          onClick: function onClick(e) {
            return _this.handleRowClick(row, rowIndex, e);
          },
          onKeyDown: noop,
          style: _objectSpread({}, getRowStyle && getRowStyle(row, rowIndex) || {})
        }, theadPlaceholderVisible && React.createElement("div", {
          className: (0, _classnames["default"])("".concat(prefix, "-td"), "".concat(prefix, "-td_functional"), _defineProperty({}, "".concat(prefix, "-td_left"), isAnyColumnsLeftFixed())),
          key: "functional",
          role: "cell"
        }, React.createElement("div", {
          className: "".concat(prefix, "-cell"),
          style: {
            alignItems: verticalAlign && VERTICAL_ALIGN[verticalAlign]
          }
        }, (selectPropsGetted === null || selectPropsGetted === void 0 ? void 0 : (_selectPropsGetted$po = selectPropsGetted.popoverProps) === null || _selectPropsGetted$po === void 0 ? void 0 : _selectPropsGetted$po.popup) ? React.createElement(_popover["default"], _extends({
          mouseEnterDelay: 0.1,
          alignEdge: false,
          placement: "right"
        }, (getSelectProps && getSelectProps(row, rowIndex) || {}).popoverProps), selectCell) : selectCell)), colArray);

        if (onExpandChange) {
          return [tr, expandedRowKeys.includes(key) ? React.createElement("div", {
            className: "".concat(prefix, "-expandRow"),
            key: "tr-expand"
          }, !!expandedRowRender && expandedRowRender(row, rowIndex)) : null];
        }

        return tr;
      };

      return [headerAffixed ? React.createElement(_affix["default"], {
        key: 0,
        offsetTop: headerAffixedOffsetTop,
        getContainer: function getContainer() {
          return _this.wrapper;
        },
        getTarget: headerAffixGetTarget,
        onChange: function onChange(bool) {
          _this.setState({
            affixedTop: bool
          }, function () {
            if (bool) {
              _this.handleWindowResize();

              _this.handleMainTableScroll();
            }
          });
        },
        className: affixedTop ? "".concat(prefix, "-affix") : "",
        style: _objectSpread({
          display: "flex",
          zIndex: 2,
          alignItems: "baseline",
          flexDirection: "column"
        }, affixedTop ? mainTableStyle : {}),
        ref: _this.saveRef("affixHeader")
      }, thead) : thead, React.createElement("div", {
        key: 1,
        className: "".concat(prefix, "-tbody"),
        ref: _this.saveRef("mainTableBody")
      }, !virtualScroll && dataSource && !!dataSource.length && dataSource.map(function (row, rowIndex) {
        return generateTrs(row, rowIndex);
      }), virtualScroll && dataSource && !!dataSource.length && React.createElement(_rcVirtualList["default"], _extends({
        data: dataSource,
        itemKey: "dataIndex",
        height: (height || 400) - 40,
        itemHeight: 42,
        className: "".concat(prefix, "-virtual-wrapper"),
        style: _objectSpread({}, virtualListStyle)
      }, virtualListProps), function (row, rowIndex) {
        return generateTrs(row, rowIndex);
      })), isMainTableOverflowX && headerAffixed && React.createElement(_affix["default"], {
        key: 2,
        offsetBottom: 0,
        getContainer: function getContainer() {
          return _this.mainTableBody;
        },
        ref: _this.saveRef("affixScrollbar"),
        className: (0, _classnames["default"])("".concat(prefix, "-affixScrollbar"), _defineProperty({}, "".concat(prefix, "-affixScrollbar_show"), affixedBottom)),
        style: _objectSpread({
          zIndex: 2
        }, mainTableStyle),
        onScroll: function onScroll(e) {
          return _this.syncTableScrollPosition(e.currentTarget.scrollLeft);
        },
        onChange: function onChange(bool) {
          return _this.setState({
            affixedBottom: bool
          });
        }
      }, React.createElement("div", {
        style: {
          width: (_this$mainTable = _this.mainTable) === null || _this$mainTable === void 0 ? void 0 : _this$mainTable.scrollWidth
        }
      }))];
    };

    _this.generateThCell = function (col, options) {
      var _classNames8;

      var _this$props8 = _this.props,
          align = _this$props8.align,
          columnsResizable = _this$props8.columnsResizable,
          getHeadCellClassName = _this$props8.getHeadCellClassName,
          getHeadCellStyle = _this$props8.getHeadCellStyle;
      var colResizable = col.resizable;
      var resizable = true;

      if (typeof colResizable === "boolean") {
        resizable = colResizable;
      } else if (typeof columnsResizable === "boolean") {
        resizable = columnsResizable;
      }

      var _this$state3 = _this.state,
          currentlyResizing = _this$state3.currentlyResizing,
          isResizerShow = _this$state3.isResizerShow;
      var isLastTh = options && options.index === options.columns.length - 1;
      var thCell = React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-cell"), getHeadCellClassName && getHeadCellClassName(col, options ? options.index : undefined)),
        style: _objectSpread({
          justifyContent: col.align && HORIZONTAL_ALIGN[col.align] || align && HORIZONTAL_ALIGN[align] || undefined
        }, getHeadCellStyle && getHeadCellStyle(col, options ? options.index : undefined) || {})
      }, !col.onSort && (col.sortOrder === null || col.sortOrder === undefined) && !col.onFilter && !col.filters && col.title, (!!col.onSort || col.sortOrder !== null && col.sortOrder !== undefined) && React.createElement(_TableSort["default"], {
        onSort: function onSort(order) {
          return col.onSort ? col.onSort(order) : {};
        },
        sortOrder: col.sortOrder,
        title: col.title
      }), (!!col.onFilter || !!col.filters) && React.createElement(_TableFilter["default"], {
        filteredValue: col.filteredValue,
        filterVisible: col.filterVisible,
        filterMultiple: col.filterMultiple,
        filterPopoverProps: col.filterPopoverProps,
        filters: col.filters,
        onFilter: function onFilter(filter) {
          if (col.onFilter) {
            col.onFilter(filter);
          }
        },
        onFilterVisibleChange: function onFilterVisibleChange(visible) {
          if (col.onFilterVisibleChange) {
            col.onFilterVisibleChange(visible);
          }
        },
        title: col.title
      }), !col.fixed && resizable && !isLastTh && React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-resizer"), (_classNames8 = {}, _defineProperty(_classNames8, "".concat(prefix, "-resizer_show"), isResizerShow), _defineProperty(_classNames8, "".concat(prefix, "-resizer_current"), currentlyResizing.dataIndex === col.dataIndex), _classNames8)),
        onMouseDown: function onMouseDown(e) {
          return _this.resizeColumnStart(e, col);
        },
        role: "none"
      }));

      if (col.popover) {
        return React.createElement(_popover["default"], {
          mouseEnterDelay: 0.3,
          placement: col.align === "center" ? "top" : col.align === "right" ? "topRight" : "topLeft",
          alignEdge: true,
          arrowed: true,
          popup: col.popover
        }, thCell);
      }

      return thCell;
    };

    _this.generateTbodyCell = function (row, cell, rowIndex, cellIndex) {
      var _fixedColumnsInfos$fi5, _fixedColumnsInfos$fi6, _classNames9, _fixedColumnsInfos$fi7, _fixedColumnsInfos$fi8;

      var _this$props9 = _this.props,
          alignProp = _this$props9.align,
          expandIconVisible = _this$props9.expandIconVisible,
          getCellClassName = _this$props9.getCellClassName,
          getCellProps = _this$props9.getCellProps,
          getCellStyle = _this$props9.getCellStyle,
          onExpandChange = _this$props9.onExpandChange,
          onSelectChange = _this$props9.onSelectChange,
          verticalAlignProp = _this$props9.verticalAlign;
      var theadPlaceholderVisible = expandIconVisible && (!!onSelectChange || !!onExpandChange);
      var _this$state4 = _this.state,
          currentlyResizing = _this$state4.currentlyResizing,
          fixedColumnsInfos = _this$state4.fixedColumnsInfos,
          resized = _this$state4.resized;
      var align = cell.align,
          dataIndex = cell.dataIndex,
          filters = cell.filters,
          onFilter = cell.onFilter,
          onSort = cell.onSort,
          render = cell.render,
          sortOrder = cell.sortOrder,
          title = cell.title,
          verticalAlign = cell.verticalAlign,
          width = cell.width;
      var clickable = !!onSort || sortOrder !== null && sortOrder !== undefined || !!onFilter || !!filters;
      var minWidth = 0;

      if (typeof title === "string") {
        minWidth = Math.ceil(title.length > 4 ? title.length / 2 : title.length) * 13 + 16;

        if (clickable) {
          minWidth += 20;
        }
      }

      var flexValue;

      if (typeof width === "number") {
        flexValue = "".concat(width, " 0 auto");
      } else if (typeof width === "string") {
        if (width.length - width.lastIndexOf("px") === 2) {
          flexValue = "".concat(width.slice(0, -2), " 0 auto");
        } else {
          flexValue = "0 0 ".concat(width);
        }
      } else {
        flexValue = "".concat(Math.max(TD_MIN_WIDTH, minWidth), " 0 auto");
      }

      var resizedCol = resized.find(function (o) {
        return o.dataIndex === dataIndex;
      });
      var cellClassName = getCellClassName && getCellClassName(row, cell, rowIndex, cellIndex);
      var cellProps = getCellProps && getCellProps(row, cell, rowIndex, cellIndex) || {};
      var cellStyle = getCellStyle && getCellStyle(row, cell, rowIndex, cellIndex) || {};

      var rowSpan = cellProps.rowSpan,
          colSpan = cellProps.colSpan,
          otherCellProps = _objectWithoutProperties(cellProps, ["rowSpan", "colSpan"]);

      if (rowSpan || colSpan) {
        _this.combinedCellsInfo.push({
          cell: cell,
          cellIndex: cellIndex,
          colSpan: colSpan,
          row: row,
          rowIndex: rowIndex,
          rowSpan: rowSpan
        });
      }

      return React.createElement("div", _extends({
        className: (0, _classnames["default"])("".concat(prefix, "-td"), (_classNames9 = {}, _defineProperty(_classNames9, "".concat(prefix, "-td_resizing"), dataIndex !== undefined && currentlyResizing.dataIndex === dataIndex), _defineProperty(_classNames9, "".concat(prefix, "-td_left"), isFixedLeft(cell)), _defineProperty(_classNames9, "".concat(prefix, "-td_right"), isFixedRight(cell)), _defineProperty(_classNames9, "".concat(prefix, "-td_leftLast"), (_fixedColumnsInfos$fi5 = fixedColumnsInfos.find(function (o) {
          return o.dataIndex === dataIndex;
        })) === null || _fixedColumnsInfos$fi5 === void 0 ? void 0 : _fixedColumnsInfos$fi5.isLastLeft), _defineProperty(_classNames9, "".concat(prefix, "-td_rightFirst"), (_fixedColumnsInfos$fi6 = fixedColumnsInfos.find(function (o) {
          return o.dataIndex === dataIndex;
        })) === null || _fixedColumnsInfos$fi6 === void 0 ? void 0 : _fixedColumnsInfos$fi6.isFirstRight), _defineProperty(_classNames9, "".concat(prefix, "-td_combined"), rowSpan || colSpan), _classNames9)),
        key: dataIndex || cellIndex,
        style: {
          left: isFixedLeft(cell) ? (((_fixedColumnsInfos$fi7 = fixedColumnsInfos.find(function (o) {
            return o.dataIndex === dataIndex;
          })) === null || _fixedColumnsInfos$fi7 === void 0 ? void 0 : _fixedColumnsInfos$fi7.offset) || 0) + (theadPlaceholderVisible ? SELECT_TD_WIDTH : 0) : undefined,
          right: isFixedRight(cell) ? (_fixedColumnsInfos$fi8 = fixedColumnsInfos.find(function (o) {
            return o.dataIndex === dataIndex;
          })) === null || _fixedColumnsInfos$fi8 === void 0 ? void 0 : _fixedColumnsInfos$fi8.offset : undefined,
          flex: resizedCol ? "".concat(resizedCol.value, " 0 auto") : flexValue,
          width: resizedCol ? resizedCol.value : width || Math.max(TD_MIN_WIDTH, minWidth),
          maxWidth: resizedCol ? resizedCol.value : width || ""
        },
        role: "cell",
        "data-row": rowIndex,
        "data-column": cellIndex
      }, otherCellProps), React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-cell"), cellClassName),
        style: _objectSpread({
          alignItems: verticalAlign && VERTICAL_ALIGN[verticalAlign] || verticalAlignProp && VERTICAL_ALIGN[verticalAlignProp] || undefined,
          justifyContent: align && HORIZONTAL_ALIGN[align] || alignProp && HORIZONTAL_ALIGN[alignProp] || undefined
        }, cellStyle)
      }, React.createElement("div", {
        className: "".concat(prefix, "-cellInner")
      }, render ? render(row, cell, rowIndex, cellIndex) : row[dataIndex], (rowSpan || colSpan) && React.createElement("div", {
        className: "".concat(prefix, "-cell_combined"),
        style: _objectSpread({}, _this.getCombinedCellStyle(row, cell, rowIndex, cellIndex, rowSpan, colSpan), {
          textAlign: align || undefined
        })
      }, render ? render(row, cell, rowIndex, cellIndex) : row[dataIndex]))));
    };

    _this.getCombinedCellStyle = function (_, __, rowIndex, colIndex, rowSpan, colSpan) {
      var getTableCell = function getTableCell(rowIndexParam, colIndexParam) {
        if (_this.mainTable) {
          var _row = _this.mainTable.querySelectorAll('[role="row"]')[rowIndexParam];

          if (_row) {
            return _row.children[colIndexParam];
          }
        }

        return null;
      };

      var cell = getTableCell(rowIndex, colIndex);
      var style = {};

      if (rowSpan < 2 || typeof rowSpan === "undefined") {
        style.height = "calc(100% - 1px)";
      } else {
        var endCell = getTableCell(rowIndex + rowSpan - 1, colIndex);

        if (cell && endCell) {
          var cellRect = cell.getBoundingClientRect();
          var endCellRect = endCell.getBoundingClientRect();
          style.height = "".concat(endCellRect.height + endCellRect.top - cellRect.top - 1, "px");
        }
      }

      if (colSpan < 2 || typeof colSpan === "undefined") {
        style.width = "calc(100% - 1px)";
      } else {
        var _endCell = getTableCell(rowIndex, colIndex + colSpan - 1);

        if (cell && _endCell) {
          var _cellRect = cell.getBoundingClientRect();

          var _endCellRect = _endCell.getBoundingClientRect();

          style.width = "".concat(_endCellRect.width + _endCellRect.left - _cellRect.left - 1, "px");
        }
      }

      return style;
    };

    _this.saveRef = function (name) {
      return function (node) {
        if (name) {
          _this[name] = node;
        }
      };
    };

    var children = _props.children,
        _columns = _props.columns,
        defaultExpandedRowKeys = _props.defaultExpandedRowKeys,
        defaultSelectedRowKeys = _props.defaultSelectedRowKeys,
        _expandedRowKeysProp = _props.expandedRowKeys,
        _selectedRowKeysProp = _props.selectedRowKeys;
    _this.columnManager = new _ColumnManager["default"](_columns || children);
    var _selectedRowKeys = [];

    if (_selectedRowKeysProp) {
      _selectedRowKeys = _selectedRowKeysProp;
    } else if (defaultSelectedRowKeys) {
      _selectedRowKeys = defaultSelectedRowKeys;
    }

    var _expandedRowKeys = [];

    if (_expandedRowKeysProp) {
      _expandedRowKeys = _expandedRowKeysProp;
    } else if (defaultExpandedRowKeys) {
      _expandedRowKeys = defaultExpandedRowKeys;
    }

    _this.state = {
      affixedBottom: false,
      affixedTop: false,
      children: _columns || children,
      combinedCellsInfo: [],
      currentlyResizing: {},
      expandedRowKeys: _expandedRowKeys,
      fixedColumnsInfos: [],
      isMainTableOverflowX: false,
      isMainTableOverflowY: false,
      isResizerShow: false,
      mainTableStyle: {},
      resized: [],
      selectedRowKeys: _selectedRowKeys
    };
    _this.debouncedWindowResize = (0, _debounce.debounce)(_this.handleWindowResize, 100);
    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _classNames10,
          _this2 = this,
          _classNames11;

      var _this$props10 = this.props,
          className = _this$props10.className,
          dataSource = _this$props10.dataSource,
          emptyText = _this$props10.emptyText,
          headerAffixed = _this$props10.headerAffixed,
          headerAffixedOffsetTop = _this$props10.headerAffixedOffsetTop,
          headerAffixGetTarget = _this$props10.headerAffixGetTarget,
          headerEmphasized = _this$props10.headerEmphasized,
          height = _this$props10.height,
          loading = _this$props10.loading,
          size = _this$props10.size,
          virtualScroll = _this$props10.virtualScroll,
          otherProps = _objectWithoutProperties(_this$props10, ["className", "dataSource", "emptyText", "headerAffixed", "headerAffixedOffsetTop", "headerAffixGetTarget", "headerEmphasized", "height", "loading", "size", "virtualScroll"]);

      var restProps = (0, _omit["default"])(otherProps, ["align", "children", "columns", "columnsResizable", "defaultExpandedRowKeys", "defaultSelectedRowKeys", "expandIconVisible", "expandOnRowClick", "expandedRowKeys", "expandedRowRender", "getCellClassName", "getCellProps", "getCellStyle", "getHeadClassName", "getHeadStyle", "getHeadCellClassName", "getHeadCellStyle", "getRowClassName", "getRowStyle", "getSelectProps", "onExpandChange", "onSelectChange", "onScroll", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "selectMultiple", "selectedRowKeys", "selectOnRowClick", "verticalAlign", "virtualListProps", "virtualListStyle"]);
      var _this$state5 = this.state,
          children = _this$state5.children,
          isMainTableOverflowX = _this$state5.isMainTableOverflowX,
          isMainTableOverflowY = _this$state5.isMainTableOverflowY;

      if (children) {
        this.columnManager.reset(children);
      }

      var getGroupColumnsDepth = this.columnManager.getGroupColumnsDepth;
      var empty = !(dataSource && dataSource.length);
      var classSet = (0, _classnames["default"])(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat(size), (_classNames10 = {}, _defineProperty(_classNames10, "".concat(prefix, "-headerEmphasized"), headerEmphasized), _defineProperty(_classNames10, "".concat(prefix, "-empty"), empty), _defineProperty(_classNames10, "".concat(prefix, "-loading"), loading), _defineProperty(_classNames10, "".concat(prefix, "-overflow-x"), isMainTableOverflowX), _defineProperty(_classNames10, "".concat(prefix, "-overflow-y"), isMainTableOverflowY), _defineProperty(_classNames10, "".concat(prefix, "-virtualScroll"), virtualScroll), _classNames10));
      return React.createElement("div", _extends({
        className: classSet,
        ref: this.saveRef("wrapper")
      }, restProps), React.createElement(_rcAnimate["default"], {
        component: "div",
        transitionName: "fade",
        style: {
          position: "relative",
          top: "".concat(TD_HEIGHT[size || "small"], "px"),
          zIndex: "calc(var(--z-index-affix) + 2)"
        }
      }, loading && (headerAffixed ? React.createElement(_affix["default"], {
        offsetTop: (headerAffixedOffsetTop || 0) + TD_HEIGHT[size || "small"],
        getContainer: function getContainer() {
          return _this2.wrapper;
        },
        getTarget: headerAffixGetTarget,
        className: "".concat(prefix, "-progress")
      }, React.createElement("i", null), React.createElement("i", null)) : React.createElement("div", {
        className: "".concat(prefix, "-progress")
      }, React.createElement("i", null), React.createElement("i", null)))), React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-tables"), (_classNames11 = {}, _defineProperty(_classNames11, "".concat(prefix, "-innerScroll"), !!height), _defineProperty(_classNames11, "".concat(prefix, "-overflowed"), isMainTableOverflowY), _defineProperty(_classNames11, "".concat(prefix, "-hasFixedRightColumns"), this.columnManager.isAnyColumnsRightFixed()), _classNames11)),
        style: {
          maxHeight: height || undefined,
          paddingTop: height ? "".concat(TD_HEIGHT[size || "small"] * getGroupColumnsDepth(), "px") : ""
        }
      }, React.createElement("div", {
        className: "".concat(prefix, "-mainTable"),
        ref: this.saveRef("mainTable"),
        role: "table",
        onScroll: this.handleMainTableScroll
      }, this.generateTable())), empty && React.createElement("div", {
        className: "".concat(prefix, "-placeholder")
      }, emptyText));
    }
  }]);

  return Table;
}(React.Component);

Table.Column = _Column["default"];
Table.propTypes = {
  align: _propTypes["default"].oneOf([null, "left", "center", "right"]),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  columns: _propTypes["default"].array,
  columnsResizable: _propTypes["default"].bool,
  dataSource: _propTypes["default"].array,
  defaultExpandedRowKeys: _propTypes["default"].array,
  defaultSelectedRowKeys: _propTypes["default"].array,
  emptyText: _propTypes["default"].node,
  expandIconVisible: _propTypes["default"].bool,
  expandOnRowClick: _propTypes["default"].bool,
  expandedRowKeys: _propTypes["default"].array,
  expandedRowRender: _propTypes["default"].func,
  getCellClassName: _propTypes["default"].func,
  getCellProps: _propTypes["default"].func,
  getCellStyle: _propTypes["default"].func,
  getHeadClassName: _propTypes["default"].func,
  getHeadStyle: _propTypes["default"].func,
  getHeadCellClassName: _propTypes["default"].func,
  getHeadCellStyle: _propTypes["default"].func,
  getRowClassName: _propTypes["default"].func,
  getRowStyle: _propTypes["default"].func,
  getSelectProps: _propTypes["default"].func,
  headerAffixed: _propTypes["default"].bool,
  headerAffixedOffsetTop: _propTypes["default"].number,
  headerAffixGetTarget: _propTypes["default"].func,
  headerEmphasized: _propTypes["default"].bool,
  height: function height(props) {
    var headerAffixed = props.headerAffixed,
        height = props.height;

    if (height) {
      if (typeof height !== "number") {
        return new Error("Invalid prop `height` supplied to `Table`, expected `number`.");
      }

      if (headerAffixed && !!height) {
        return new Error("Table.js 不允许同时使用 prop `headerAffixed` 与 `height`，不认可将这两者混用的需求场景。");
      }
    }

    return null;
  },
  loading: _propTypes["default"].bool,
  onExpandChange: _propTypes["default"].func,
  onRowClick: _propTypes["default"].func,
  onRowMouseEnter: _propTypes["default"].func,
  onRowMouseLeave: _propTypes["default"].func,
  onSelectChange: _propTypes["default"].func,
  onScroll: _propTypes["default"].func,
  selectMultiple: _propTypes["default"].bool,
  selectOnRowClick: _propTypes["default"].bool,
  selectedRowKeys: _propTypes["default"].array,
  size: _propTypes["default"].oneOf(["mini", "small", "medium", "large"]),
  verticalAlign: _propTypes["default"].oneOf([null, "top", "center", "bottom"]),
  virtualListProps: _propTypes["default"].object,
  virtualListStyle: _propTypes["default"].object,
  virtualScroll: _propTypes["default"].bool
};
Table.defaultProps = {
  align: null,
  children: "",
  className: undefined,
  columns: null,
  columnsResizable: null,
  dataSource: [],
  defaultExpandedRowKeys: null,
  defaultSelectedRowKeys: null,
  emptyText: "暂无数据",
  expandIconVisible: true,
  expandOnRowClick: false,
  expandedRowKeys: null,
  expandedRowRender: function expandedRowRender() {
    return "";
  },
  getCellClassName: function getCellClassName() {
    return "";
  },
  getCellProps: noop,
  getCellStyle: noop,
  getHeadClassName: function getHeadClassName() {
    return "";
  },
  getHeadStyle: noop,
  getHeadCellClassName: function getHeadCellClassName() {
    return "";
  },
  getHeadCellStyle: noop,
  getRowClassName: function getRowClassName() {
    return "";
  },
  getRowStyle: noop,
  getSelectProps: function getSelectProps() {
    return {};
  },
  headerAffixed: false,
  headerAffixedOffsetTop: 0,
  headerAffixGetTarget: null,
  headerEmphasized: false,
  height: null,
  loading: false,
  onExpandChange: null,
  onRowClick: null,
  onRowMouseEnter: null,
  onRowMouseLeave: null,
  onSelectChange: null,
  onScroll: null,
  selectMultiple: true,
  selectOnRowClick: false,
  selectedRowKeys: null,
  size: "small",
  verticalAlign: undefined,
  virtualListProps: {},
  virtualListStyle: {},
  virtualScroll: false
};

Table.getDerivedStateFromProps = function (_ref3) {
  var children = _ref3.children,
      columns = _ref3.columns,
      expandedRowKeys = _ref3.expandedRowKeys,
      selectedRowKeys = _ref3.selectedRowKeys;
  var newState = {};

  if (children !== null || columns !== null) {
    newState.children = columns || children;
  }

  if (expandedRowKeys !== null) {
    newState.expandedRowKeys = expandedRowKeys;
  }

  if (selectedRowKeys !== null) {
    newState.selectedRowKeys = selectedRowKeys;
  }

  return Object.keys(newState).length > 0 ? newState : null;
};

(0, _reactLifecyclesCompat.polyfill)(Table);
var _default = Table;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJURF9NSU5fV0lEVEgiLCJTRUxFQ1RfVERfV0lEVEgiLCJURF9IRUlHSFQiLCJsYXJnZSIsIm1lZGl1bSIsIm1pbmkiLCJzbWFsbCIsIkhPUklaT05UQUxfQUxJR04iLCJjZW50ZXIiLCJsZWZ0IiwicmlnaHQiLCJWRVJUSUNBTF9BTElHTiIsImJvdHRvbSIsInRvcCIsImlzRml4ZWRMZWZ0IiwiY29sIiwiZml4ZWQiLCJpc0ZpeGVkUmlnaHQiLCJUYWJsZSIsInByb3BzIiwiY29tYmluZWRDZWxsc0luZm8iLCJhZmZpeEhlYWRlciIsImFmZml4U2Nyb2xsYmFyIiwibWFpblRhYmxlIiwibWFpblRhYmxlQm9keSIsIm1haW5UaGVhZCIsIndyYXBwZXIiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJyZXNpemVFdmVudCIsImNvbHVtbk1hbmFnZXIiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJoZWFkZXJBZmZpeGVkIiwiaGVpZ2h0IiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJkYXRhU291cmNlT2xkIiwiZGF0YVNvdXJjZSIsImdldENlbGxQcm9wc09sZCIsImdldENlbGxQcm9wcyIsInNldFRpbWVvdXQiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlIiwiY2xlYXIiLCJyZXNpemVDb2x1bW5TdGFydCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImN1cnJlbnRseVJlc2l6aW5nIiwiZGF0YUluZGV4IiwicGFyZW50V2lkdGgiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3RhcnRYIiwicGFnZVgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplQ29sdW1uTW92aW5nIiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplZCIsImJhc2VXaWR0aCIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJuZXdSZXNpemVkIiwiZmlsdGVyIiwibyIsIm5ld1dpZHRoIiwibWF4Iiwib25Tb3J0Iiwib25GaWx0ZXIiLCJwdXNoIiwidmFsdWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNNYWluVGFibGVPdmVyZmxvd1giLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiaXNNYWluVGFibGVPdmVyZmxvd1kiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpc1Jlc2l6ZXJTaG93Iiwib2xkU3R5bGUiLCJtYWluVGFibGVTdHlsZSIsInJlY3QiLCJoYW5kbGVNYWluVGFibGVTY3JvbGwiLCJvblNjcm9sbCIsImFmZml4ZWRUb3AiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJmaXhlZE5vZGUiLCJzY3JvbGxMZWZ0Iiwic3luY1RhYmxlU2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVSb3dDbGljayIsInJvdyIsImkiLCJleHBhbmRPblJvd0NsaWNrIiwiZ2V0U2VsZWN0UHJvcHMiLCJvblJvd0NsaWNrIiwic2VsZWN0T25Sb3dDbGljayIsInNlbGVjdGVkUm93S2V5cyIsImtleSIsImRpc2FibGVkIiwiaGFuZGxlU2VsZWN0IiwiaW5jbHVkZXMiLCJoYW5kbGVFeHBhbmQiLCJoYW5kbGVUaFJlc2l6ZSIsImluZGV4IiwiZml4ZWRQb3NpdGlvbiIsImdldENvbHVtbnMiLCJmaXhlZENvbHVtbnNJbmZvcyIsImNvbHVtbnMiLCJmaW5kIiwicCIsImZpbmRJbmRleCIsInNwbGljZSIsInNvcnQiLCJhIiwiYiIsImZpeGVkQ29sdW1uc0luZm9zTGVmdCIsImZpeGVkQ29sdW1uc0luZm9zUmlnaHQiLCJmb3JFYWNoIiwiY29sSW5kZXgiLCJpc0xhc3RMZWZ0Iiwib2Zmc2V0Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJpc0ZpcnN0UmlnaHQiLCJoYW5kbGVUaGVhZE1vdXNlRW50ZXIiLCJoYW5kbGVUaGVhZE1vdXNlTGVhdmUiLCJPYmplY3QiLCJrZXlzIiwiZXhwYW5kZWRSb3dLZXlzUHJvcCIsImV4cGFuZGVkUm93S2V5cyIsIm9uRXhwYW5kQ2hhbmdlIiwiaW5kZXhPZiIsImNoZWNrZWQiLCJvblNlbGVjdENoYW5nZSIsInNlbGVjdGVkUm93S2V5c1Byb3AiLCJzZWxlY3RNdWx0aXBsZSIsImhhbmRsZVNlbGVjdEFsbCIsImF2YWlsYWJsZUtleXMiLCJnZXRBdmFpbGFibGVSb3dzS2V5cyIsImhhc1NlbGVjdGVkQWxsIiwiZXZlcnkiLCJnZW5lcmF0ZVRhYmxlIiwiZXhwYW5kSWNvblZpc2libGUiLCJleHBhbmRlZFJvd1JlbmRlciIsImdldEhlYWRDbGFzc05hbWUiLCJnZXRIZWFkU3R5bGUiLCJnZXRSb3dDbGFzc05hbWUiLCJnZXRSb3dTdHlsZSIsImhlYWRlckFmZml4ZWRPZmZzZXRUb3AiLCJoZWFkZXJBZmZpeEdldFRhcmdldCIsIm9uUm93TW91c2VFbnRlciIsIm9uUm93TW91c2VMZWF2ZSIsInNpemUiLCJ2ZXJ0aWNhbEFsaWduIiwidmlydHVhbExpc3RQcm9wcyIsInZpcnR1YWxMaXN0U3R5bGUiLCJ2aXJ0dWFsU2Nyb2xsIiwiYWZmaXhlZEJvdHRvbSIsImdldEdyb3VwQ29sdW1uc0RlcHRoIiwiaXNBbnlDb2x1bW5zTGVmdEZpeGVkIiwidGhlYWRTdHlsZSIsInRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlIiwidGhlYWQiLCJzYXZlUmVmIiwibWFwIiwiYWxpZ24iLCJmaWx0ZXJzIiwic29ydE9yZGVyIiwicmVzaXplZENvbCIsImNsaWNrYWJsZSIsInVuZGVmaW5lZCIsIm1pbldpZHRoIiwiZmxleFZhbHVlIiwibGFzdEluZGV4T2YiLCJ3aWR0aFJlc2l6ZSIsImZsZXgiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImdlbmVyYXRlVGhDZWxsIiwiY2hpbGRyZW4iLCJjaGlsZENvbCIsImNoaWxkQ29sSW5kZXgiLCJncmFuZENvbCIsImdyYW5kQ29sSW5kZXgiLCJnZW5lcmF0ZVRycyIsInJvd0luZGV4IiwiY29sQXJyYXkiLCJzZWxlY3RQcm9wc0dldHRlZCIsImFsbFNlbGVjdFByb3BzIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwic2VsZWN0UHJvcHMiLCJzZWxlY3RDZWxsIiwiZ2VuZXJhdGVUciIsImNvbHVtbnNQYXJhbSIsInBhcmVudEluZGV4IiwiY29sSW5kZXhQYXJhbSIsImNoaWxkcmVuQ291bnQiLCJnZW5lcmF0ZVRib2R5Q2VsbCIsInRyIiwiYWxpZ25JdGVtcyIsInBvcG92ZXJQcm9wcyIsInBvcHVwIiwiYm9vbCIsImRpc3BsYXkiLCJ6SW5kZXgiLCJmbGV4RGlyZWN0aW9uIiwib3B0aW9ucyIsImNvbHVtbnNSZXNpemFibGUiLCJnZXRIZWFkQ2VsbENsYXNzTmFtZSIsImdldEhlYWRDZWxsU3R5bGUiLCJjb2xSZXNpemFibGUiLCJyZXNpemFibGUiLCJpc0xhc3RUaCIsInRoQ2VsbCIsImp1c3RpZnlDb250ZW50Iiwib3JkZXIiLCJmaWx0ZXJlZFZhbHVlIiwiZmlsdGVyVmlzaWJsZSIsImZpbHRlck11bHRpcGxlIiwiZmlsdGVyUG9wb3ZlclByb3BzIiwidmlzaWJsZSIsIm9uRmlsdGVyVmlzaWJsZUNoYW5nZSIsInBvcG92ZXIiLCJjZWxsIiwiY2VsbEluZGV4IiwiYWxpZ25Qcm9wIiwiZ2V0Q2VsbENsYXNzTmFtZSIsImdldENlbGxTdHlsZSIsInZlcnRpY2FsQWxpZ25Qcm9wIiwicmVuZGVyIiwiY2VsbENsYXNzTmFtZSIsImNlbGxQcm9wcyIsImNlbGxTdHlsZSIsInJvd1NwYW4iLCJjb2xTcGFuIiwib3RoZXJDZWxsUHJvcHMiLCJnZXRDb21iaW5lZENlbGxTdHlsZSIsIl8iLCJfXyIsImdldFRhYmxlQ2VsbCIsInJvd0luZGV4UGFyYW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5kQ2VsbCIsImNlbGxSZWN0IiwiZW5kQ2VsbFJlY3QiLCJuYW1lIiwibm9kZSIsImRlZmF1bHRFeHBhbmRlZFJvd0tleXMiLCJkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzIiwiQ29sdW1uTWFuYWdlciIsImVtcHR5VGV4dCIsImhlYWRlckVtcGhhc2l6ZWQiLCJsb2FkaW5nIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsInJlc2V0IiwiZW1wdHkiLCJjbGFzc1NldCIsInBvc2l0aW9uIiwiaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCIsIm1heEhlaWdodCIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbHVtbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwiRXJyb3IiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsWUFBZjtBQUNBLElBQU1DLFlBQVksR0FBRyxHQUFyQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxFQUF4QjtBQUNBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsS0FBSyxFQUFFLEVBRFM7QUFFaEJDLEVBQUFBLE1BQU0sRUFBRSxFQUZRO0FBR2hCQyxF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QSxRQUFRLENBQUN4TCxlQUFULEdBQTJCQSxlQUEzQjtBQUNEOztBQUNELFNBQU9nQyxNQUFNLENBQUNDLElBQVAsQ0FBWXVKLFFBQVosRUFBc0IvUCxNQUF0QixHQUErQixDQUEvQixHQUFtQytQLFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsQzs7QUF3NENILHFDQUFTclIsS0FBVDtlQUVlQSxLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvaW50ZXJhY3RpdmUtc3VwcG9ydHMtZm9jdXMgKi9cbi8qKlxuICogVGFibGUg57uE5Lu25bCG5LiN5Lya5L+u5pS55oiQIEZ1bmN0aW9uQ29tcG9uZW5077yMXG4gKiDlm6DkuLrogIPomZHliLDkuYvliY3lnKjkvb/nlKjml7blrZjlnKjkuI3lsJHpgJrov4cg5a6e5L6LLnRhYmxlIOeahOaWueazleebtOaOpeiuv+mXriA8dGFibGUgLz4g5YWD57Sg55qE55So5rOV44CCXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSBcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCJcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIlxuaW1wb3J0IExpc3QgZnJvbSBcInJjLXZpcnR1YWwtbGlzdFwiXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJkZWJvdW5jZVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgQ29sdW1uLCB7IElDb2x1bW5Qcm9wcyB9IGZyb20gXCIuL0NvbHVtblwiXG5pbXBvcnQgQWZmaXggZnJvbSBcIi4uL2FmZml4XCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIi4uL3BvcG92ZXJcIlxuaW1wb3J0IFJhZGlvIGZyb20gXCIuLi9yYWRpb1wiXG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSBcIi4uL3Jlc2l6ZS1vYnNlcnZlclwiXG5pbXBvcnQgVGFibGVTb3J0IGZyb20gXCIuL1RhYmxlU29ydFwiXG5pbXBvcnQgVGFibGVGaWx0ZXIgZnJvbSBcIi4vVGFibGVGaWx0ZXJcIlxuaW1wb3J0IENvbHVtbk1hbmFnZXIgZnJvbSBcIi4vQ29sdW1uTWFuYWdlclwiXG5pbXBvcnQgXCIuL3N0eWxlXCJcblxuaW50ZXJmYWNlIElCYXNlT2JqZWN0IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmludGVyZmFjZSBJRml4ZWRDb2x1bW5zSW5mbyB7XG4gIHdpZHRoOiBudW1iZXJcbiAgZGF0YUluZGV4OiBzdHJpbmdcbiAgZml4ZWQ6IFwibGVmdFwiIHwgXCJyaWdodFwiXG4gIGluZGV4OiBudW1iZXJcbiAgaXNMYXN0TGVmdD86IGJvb2xlYW5cbiAgaXNGaXJzdFJpZ2h0PzogYm9vbGVhblxuICBvZmZzZXQ/OiBudW1iZXJcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tbmVzdGVkLXRlcm5hcnkgKi9cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuY29uc3QgcHJlZml4ID0gXCJhZHVpLXRhYmxlXCJcbmNvbnN0IFREX01JTl9XSURUSCA9IDEwMFxuY29uc3QgU0VMRUNUX1REX1dJRFRIID0gNTBcbmNvbnN0IFREX0hFSUdIVCA9IHtcbiAgbGFyZ2U6IDYwLFxuICBtZWRpdW06IDUwLFxuICBtaW5pOiA0MCxcbiAgc21hbGw6IDQwLFxufVxuY29uc3QgSE9SSVpPTlRBTF9BTElHTiA9IHtcbiAgY2VudGVyOiBcImNlbnRlclwiIGFzIFwiY2VudGVyXCIsXG4gIGxlZnQ6IFwiZmxleC1zdGFydFwiIGFzIFwiZmxleC1zdGFydFwiLFxuICByaWdodDogXCJmbGV4LWVuZFwiIGFzIFwiZmxleC1lbmRcIixcbn1cbmNvbnN0IFZFUlRJQ0FMX0FMSUdOID0ge1xuICBib3R0b206IFwiZmxleC1lbmRcIiBhcyBcImZsZXgtZW5kXCIsXG4gIGNlbnRlcjogXCJjZW50ZXJcIiBhcyBcImNlbnRlclwiLFxuICB0b3A6IFwiZmxleC1zdGFydFwiIGFzIFwiZmxleC1zdGFydFwiLFxufVxuY29uc3QgaXNGaXhlZExlZnQgPSAoY29sOiBJQmFzZU9iamVjdCk6IGJvb2xlYW4gPT5cbiAgY29sLmZpeGVkID09PSBcImxlZnRcIiB8fCBjb2wuZml4ZWQgPT09IHRydWVcbmNvbnN0IGlzRml4ZWRSaWdodCA9IChjb2w6IElCYXNlT2JqZWN0KTogYm9vbGVhbiA9PiBjb2wuZml4ZWQgPT09IFwicmlnaHRcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVByb3BzIHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDnu5/kuIDlnLDmjqfliLbliJfmsLTlubPpnaDpvZDmlrnlkJFcbiAgICovXG4gIGFsaWduPzogbnVsbCB8IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIlxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IGFueVxuICAvKipcbiAgICog5Lul5pWw57uE55qE5pa55byP5Lyg5YWlIENvbHVtbnPvvIzlpoLmnpzkvKDlhaXkuobmraQgUHJvcO+8jOWImSBUYWJsZSDkvJrlv73nlaUgY2hpbGRyZW5cbiAgICovXG4gIGNvbHVtbnM/OiBJQ29sdW1uUHJvcHNbXSB8IG51bGxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmjqfliLbmlbTkuKogVGFibGUg55qEIENvbHVtbnMg6IO95ZCm6LCD5pW05a695bqmXG4gICAqL1xuICBjb2x1bW5zUmVzaXphYmxlPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOaVsOaNrua6kFxuICAgKi9cbiAgZGF0YVNvdXJjZT86IElCYXNlT2JqZWN0W11cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkem7mOiupOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6buY6K6k6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDnqbrmlbDmja7mupDml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIGVtcHR5VGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5pi+56S65bGV5byAIGljb27vvIzlpoLmnpzkuLogZmFsc2XvvIzmhI/lkbPnnYBcbiAgICogMS4g5L2/55SoIGV4cGFuZE9uUm93Q2xpY2sg5oiW6ICFXG4gICAqIDIuIOmcgOimgeWcqOe7hOS7tuWkluiHquihjOiwg+eUqOe7hOS7tuaWueazleWujOaIkOWxleW8gOWKn+iDve+8iHRoaXMudGFibGUuaGFuZGxlRXhwYW5kKHJvdy5rZXkp77yJ44CCXG4gICAqL1xuICBleHBhbmRJY29uVmlzaWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkeWxleW8gOaUtui1t1xuICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAqL1xuICBleHBhbmRPblJvd0NsaWNrPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZXhwYW5kZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOihjOeahOWGheWuuVxuICAgKi9cbiAgZXhwYW5kZWRSb3dSZW5kZXI/OiAocm93PzogSUJhc2VPYmplY3QsIHJvd0luZGV4PzogbnVtYmVyKSA9PiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOeahOexu+WQje+8mihyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0Q2VsbENsYXNzTmFtZT86IChcbiAgICByb3c/OiBJQmFzZU9iamVjdCxcbiAgICBjb2w/OiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleD86IG51bWJlcixcbiAgICBjb2xJbmRleD86IG51bWJlclxuICApID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qE55Sx57uE5Lu26KeE5a6a55qEIHByb3DvvIxcbiAgICog5aaCIHJvd1NwYW4gY29sU3Bhbu+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsUHJvcHM/OiAoXG4gICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgY29sPzogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg/OiBudW1iZXIsXG4gICAgY29sSW5kZXg/OiBudW1iZXJcbiAgKSA9PiBJQmFzZU9iamVjdCB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsU3R5bGU/OiAoXG4gICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgY29sPzogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg/OiBudW1iZXIsXG4gICAgY29sSW5kZXg/OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog6K6+572uIHRoZWFkIOeahOexu+WQje+8migpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRIZWFkQ2xhc3NOYW1lPzogKCkgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva4gdGhlYWQg5LiK55qEIHN0eWxl77yMKCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0SGVhZFN0eWxlPzogKCkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4qiBUSCDnmoTnsbvlkI3vvJooY29sLCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldEhlYWRDZWxsQ2xhc3NOYW1lPzogKGNvbD86IElCYXNlT2JqZWN0LCBjb2xJbmRleD86IG51bWJlcikgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKogVEgg5LiK55qEIHN0eWxl77yMKGNvbCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldEhlYWRDZWxsU3R5bGU/OiAoXG4gICAgY29sPzogSUJhc2VPYmplY3QsXG4gICAgY29sSW5kZXg/OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P6KGM55qE57G75ZCN77yaKHJvdywgcm93SW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRSb3dDbGFzc05hbWU/OiAocm93PzogSUJhc2VPYmplY3QsIHJvd0luZGV4PzogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+ihjOeahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRSb3dTdHlsZT86IChcbiAgICByb3c/OiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleD86IG51bWJlclxuICApID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHorr7nva7mr4/kuKogQ2hlY2tib3gvUmFkaW8g5LiK55qEIHByb3AgKHJvdywgcm93SW5kZXgpID0+ICh7fSnvvJtcbiAgICog5Y+v5Lul5Zyo6L+Z6YeM5Zue5LygIGRpc2FibGVkOiB0cnVlLCDmjqfliLbor6XooYzkuI3og73pgInmi6nvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBnZXRTZWxlY3RQcm9wcz86IChyb3c/OiBJQmFzZU9iamVjdCwgcm93SW5kZXg/OiBudW1iZXIpID0+IElCYXNlT2JqZWN0XG4gIC8qKlxuICAgKiDmmK/lkKbpnIDopoHooajlpLTlm7rlrprliLDpobXpnaLkuIpcbiAgICovXG4gIGhlYWRlckFmZml4ZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HooajlpLTlm7rlrppcbiAgICovXG4gIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWPguiAgyA8QWZmaXggLz4g55qEIGdldFRhcmdldCBQcm9wXG4gICAqL1xuICBoZWFkZXJBZmZpeEdldFRhcmdldD86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIC8qKlxuICAgKiDliqDph43lpLTpg6jvvIzlvIDlkK/kuYvlkI7ooajlpLTlsIbkvJrliqDnspcgKyDog4zmma9cbiAgICovXG4gIGhlYWRlckVtcGhhc2l6ZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprpq5jluqbku6Xlrp7njrDooajmoLzlhoXmu5rliqjvvIzmraQgcHJvcCDkuI4gcHJvcCBoZWFkZXJBZmZpeGVkIOS6kuaWpeOAglxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm5Yqg6L295LitXG4gICAqL1xuICBsb2FkaW5nPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5bGV5byA5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/lsZXlvIDlip/og73nmoTliKTmlq3vvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgb25FeHBhbmRDaGFuZ2U/OiAoKGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog5q+P6KGM55qEIGNsaWNrIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dDbGljaz86XG4gICAgfCAoKFxuICAgICAgICByb3c/OiBJQmFzZU9iamVjdCxcbiAgICAgICAgcm93SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICAgICAgKSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog5q+P6KGM55qEIG1vdXNlRW50ZXIgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAqL1xuICBvblJvd01vdXNlRW50ZXI/OlxuICAgIHwgKChcbiAgICAgICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgICAgIHJvd0luZGV4PzogbnVtYmVyLFxuICAgICAgICBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgICkgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBtb3VzZUxlYXZlIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dNb3VzZUxlYXZlPzpcbiAgICB8ICgoXG4gICAgICAgIHJvdz86IElCYXNlT2JqZWN0LFxuICAgICAgICByb3dJbmRleD86IG51bWJlcixcbiAgICAgICAgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICAgICApID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHpgInmi6nmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+mAieaLqeWKn+iDveeahOWIpOaWre+8m1xuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBvblNlbGVjdENoYW5nZT86ICgoa2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiBUYWJsZSDmu5rliqjml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25TY3JvbGw/OiAoKGU6IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeWkmiAvIOWNlemAie+8m+ivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIHNlbGVjdE11bHRpcGxlPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R6YCJ5oup44CCXG4gICAqIOatpCBwcm9wIOS8muWcqCAudHIg5LiK5Yqg5YWlIG9uQ2xpY2sg5LqL5Lu277yMXG4gICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICovXG4gIHNlbGVjdE9uUm93Q2xpY2s/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHku47lpJbpg6jmjqfliLbvvIzpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yMXG4gICAqIOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqozvvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgc2VsZWN0ZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuO+8jOazqOaEj++8muWwuuWvuOS7heaOp+WItuihjOS4juWIl+mXtOi3ne+8jOS4juWtl+S9k+Wkp+Wwj+S4jee7keWumuOAglxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog57uf5LiA5Zyw5o6n5Yi25YiX5Z6C55u06Z2g6b2Q5pa55ZCRXG4gICAqL1xuICB2ZXJ0aWNhbEFsaWduPzogXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiXG4gIC8qKlxuICAgKiDomZrmi5/liJfooajnmoQgUHJvcHPvvIzor7flj4LogIMgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtdmlydHVhbC1saXN0XG4gICAqL1xuICB2aXJ0dWFsTGlzdFByb3BzPzogSUJhc2VPYmplY3RcbiAgLyoqXG4gICAqIOiZmuaLn+WIl+ihqOeahOagt+W8j++8jOivt+WcqOi/memHjOaMh+WumuWuveW6pu+8jOm7mOiupOWwhuS8muaciSA1MDAgcHgg5a695bqmXG4gICAqL1xuICB2aXJ0dWFsTGlzdFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5piv5ZCm5byA5ZCv6Jma5ouf5rua5Yqo77yM5q2kIFByb3Ag6K+36YWN5ZCIIGhlaWdodCBQcm9wIOWQjOaXtuS9v+eUqO+8jOeUqOS6juWkhOeQhuWkp+aVsOaNrumHj+S4i+eahOiZmuaLn+WGhea7muWKqO+8m1xuICAgKiDmraTlip/og73nmoTlrp7pmYXnlKjkvovovoPlsJHvvIzlpoLmnpzmnInku7vkvZXpl67popjor7flj4rml7blj43ppohcbiAgICovXG4gIHZpcnR1YWxTY3JvbGw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3RhdGUge1xuICBhZmZpeGVkVG9wOiBib29sZWFuXG4gIGFmZml4ZWRCb3R0b206IGJvb2xlYW5cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBjb21iaW5lZENlbGxzSW5mbzogSUJhc2VPYmplY3RbXVxuICBleHBhbmRlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbiAgZml4ZWRDb2x1bW5zSW5mb3M6IEFycmF5PElGaXhlZENvbHVtbnNJbmZvPlxuICBtYWluVGFibGVTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllc1xuICBpc01haW5UYWJsZU92ZXJmbG93WDogYm9vbGVhblxuICBpc01haW5UYWJsZU92ZXJmbG93WTogYm9vbGVhblxuICBpc1Jlc2l6ZXJTaG93OiBib29sZWFuXG4gIGN1cnJlbnRseVJlc2l6aW5nOiBJQmFzZU9iamVjdFxuICByZXNpemVkOiBJQmFzZU9iamVjdFtdXG4gIHNlbGVjdGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PlxufVxuXG4vKipcbiAqIOihqOagvOaYr+S4gOenjeagvOW8j+WMluS/oeaBr+eahOWxleekuuW9ouW8j+OAgumAmuW4uOacjeWKoeS6juWkp+mHj+aVsOaNrua1j+iniOOAgeeuoeeQhuWcuuaZr+OAglxuICovXG5jbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVGFibGVQcm9wcywgSVRhYmxlU3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBDb2x1bW46IHR5cGVvZiBDb2x1bW4gPSBDb2x1bW5cblxuICBwdWJsaWMgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiDnu5/kuIDlnLDmjqfliLbliJfmsLTlubPpnaDpvZDmlrnlkJFcbiAgICAgKi9cbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiXSksXG4gICAgLyoqXG4gICAgICog5a2Q6IqC54K5XG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOmZhOWKoOexu+WQjVxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKipcbiAgICAgKiDku6XmlbDnu4TnmoTmlrnlvI/kvKDlhaUgQ29sdW1uc++8jOWmguaenOS8oOWFpeS6huatpCBQcm9w77yM5YiZIFRhYmxlIOS8muW/veeVpSBjaGlsZHJlblxuICAgICAqL1xuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDmjqfliLbmlbTkuKogVGFibGUg55qEIENvbHVtbnMg6IO95ZCm6LCD5pW05a695bqmXG4gICAgICovXG4gICAgY29sdW1uc1Jlc2l6YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5pWw5o2u5rqQXG4gICAgICovXG4gICAgZGF0YVNvdXJjZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkem7mOiupOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHpu5jorqTpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog56m65pWw5o2u5rqQ5pe25pi+56S655qE5YaF5a65XG4gICAgICovXG4gICAgZW1wdHlUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKbmmL7npLrlsZXlvIAgaWNvbu+8jOWmguaenOS4uiBmYWxzZe+8jOaEj+WRs+edgFxuICAgICAqIDEuIOS9v+eUqCBleHBhbmRPblJvd0NsaWNrIOaIluiAhVxuICAgICAqIDIuIOmcgOimgeWcqOe7hOS7tuWkluiHquihjOiwg+eUqOe7hOS7tuaWueazleWujOaIkOWxleW8gOWKn+iDve+8iHRoaXMudGFibGUuaGFuZGxlRXhwYW5kKHJvdy5rZXkp77yJ44CCXG4gICAgICovXG4gICAgZXhwYW5kSWNvblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkeWxleW8gOaUtui1t1xuICAgICAqIOatpCBwcm9wIOS8muWcqCAudHIg5LiK5Yqg5YWlIG9uQ2xpY2sg5LqL5Lu277yMXG4gICAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgICAqL1xuICAgIGV4cGFuZE9uUm93Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkeS7juWklumDqOaOp+WItu+8jOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGV4cGFuZGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOihjOeahOWGheWuuVxuICAgICAqL1xuICAgIGV4cGFuZGVkUm93UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLznmoTnsbvlkI3vvJoocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRDZWxsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoTnlLHnu4Tku7bop4TlrprnmoQgcHJvcO+8jFxuICAgICAqIOWmgiByb3dTcGFuIGNvbFNwYW7vvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgICAqL1xuICAgIGdldENlbGxQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qEIHN0eWxl77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRDZWxsU3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9riB0aGVhZCDnmoTnsbvlkI3vvJpwb3NpdGlvbiA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldEhlYWRDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9riB0aGVhZCDkuIrnmoQgc3R5bGXvvIxwb3NpdGlvbiA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0SGVhZFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKogVEgg55qE57G75ZCN77yaKGNvbCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0SGVhZENlbGxDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4qiBUSCDkuIrnmoQgc3R5bGXvvIwoY29sLCBjb2xJbmRleCkgPT4gKHt9KVxuICAgICAqL1xuICAgIGdldEhlYWRDZWxsU3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+ihjOeahOexu+WQje+8mihyb3csIHJvd0luZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldFJvd0NsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P6KGM55qEIHN0eWxl77yMKHJvdywgcm93SW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRSb3dTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6K6+572u5q+P5LiqIENoZWNrYm94L1JhZGlvIOS4iueahCBwcm9wIChyb3csIHJvd0luZGV4KSA9PiAoe30p77ybXG4gICAgICog5Y+v5Lul5Zyo6L+Z6YeM5Zue5LygIGRpc2FibGVkOiB0cnVlLCDmjqfliLbor6XooYzkuI3og73pgInmi6nvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZ2V0U2VsZWN0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpumcgOimgeihqOWktOWbuuWumuWIsOmhtemdouS4ilxuICAgICAqL1xuICAgIGhlYWRlckFmZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOi3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPkeihqOWktOWbuuWumlxuICAgICAqL1xuICAgIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5Y+C6ICDIDxBZmZpeCAvPiDnmoQgZ2V0VGFyZ2V0IFByb3BcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeEdldFRhcmdldDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5Yqg6YeN5aS06YOo77yM5byA5ZCv5LmL5ZCO6KGo5aS05bCG5Lya5Yqg57KXICsg6IOM5pmvXG4gICAgICovXG4gICAgaGVhZGVyRW1waGFzaXplZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5oyH5a6a6auY5bqm5Lul5a6e546w6KGo5qC85YaF5rua5Yqo77yM5q2kIHByb3Ag5LiOIHByb3AgaGVhZGVyQWZmaXhlZCDkupLmlqXjgIJcbiAgICAgKi9cbiAgICBoZWlnaHQ6IChwcm9wczogSVRhYmxlUHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICBpZiAodHlwZW9mIGhlaWdodCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIkludmFsaWQgcHJvcCBgaGVpZ2h0YCBzdXBwbGllZCB0byBgVGFibGVgLCBleHBlY3RlZCBgbnVtYmVyYC5cIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyQWZmaXhlZCAmJiAhIWhlaWdodCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIlRhYmxlLmpzIOS4jeWFgeiuuOWQjOaXtuS9v+eUqCBwcm9wIGBoZWFkZXJBZmZpeGVkYCDkuI4gYGhlaWdodGDvvIzkuI3orqTlj6/lsIbov5nkuKTogIXmt7fnlKjnmoTpnIDmsYLlnLrmma/jgIJcIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWKoOi9veS4rVxuICAgICAqL1xuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv5bGV5byA5Yqf6IO955qE5Yik5pat77ybXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIG9uRXhwYW5kQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmr4/ooYznmoQgY2xpY2sgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAgICovXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIG1vdXNlRW50ZXIgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAgICovXG4gICAgb25Sb3dNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmr4/ooYznmoQgbW91c2VMZWF2ZSBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICAgKi9cbiAgICBvblJvd01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkemAieaLqeavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv6YCJ5oup5Yqf6IO955qE5Yik5pat77ybXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIG9uU2VsZWN0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBUYWJsZSDmu5rliqjml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHlpJogLyDljZXpgInvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgc2VsZWN0TXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkemAieaLqeOAglxuICAgICAqIOatpCBwcm9wIOS8muWcqCAudHIg5LiK5Yqg5YWlIG9uQ2xpY2sg5LqL5Lu277yMXG4gICAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgICAqL1xuICAgIHNlbGVjdE9uUm93Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeS7juWklumDqOaOp+WItu+8jOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIxcbiAgICAgKiDlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqM77ybXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIHNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOiuvue9ruWwuuWvuO+8jOazqOaEj++8muWwuuWvuOS7heaOp+WItuihjOS4juWIl+mXtOi3ne+8jOS4juWtl+S9k+Wkp+Wwj+S4jee7keWumuOAglxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gICAgLyoqXG4gICAgICog57uf5LiA5Zyw5o6n5Yi25YiX5Z6C55u06Z2g6b2Q5pa55ZCRXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcInRvcFwiLCBcImNlbnRlclwiLCBcImJvdHRvbVwiXSksXG4gICAgLyoqXG4gICAgICog6Jma5ouf5YiX6KGo55qEIFByb3Bz77yM6K+35Y+C6ICDIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLXZpcnR1YWwtbGlzdFxuICAgICAqL1xuICAgIHZpcnR1YWxMaXN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog6Jma5ouf5YiX6KGo55qE5qC35byP77yM6K+35Zyo6L+Z6YeM5oyH5a6a5a695bqm77yM6buY6K6k5bCG5Lya5pyJIDUwMCBweCDlrr3luqZcbiAgICAgKi9cbiAgICB2aXJ0dWFsTGlzdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuW8gOWQr+iZmuaLn+a7muWKqO+8jOatpCBQcm9wIOivt+mFjeWQiCBoZWlnaHQgUHJvcCDlkIzml7bkvb/nlKjvvIznlKjkuo7lpITnkIblpKfmlbDmja7ph4/kuIvnmoTomZrmi5/lhoXmu5rliqjvvJtcbiAgICAgKiDmraTlip/og73nmoTlrp7pmYXnlKjkvovovoPlsJHvvIzlpoLmnpzmnInku7vkvZXpl67popjor7flj4rml7blj43ppohcbiAgICAgKi9cbiAgICB2aXJ0dWFsU2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVGFibGVQcm9wcyA9IHtcbiAgICBhbGlnbjogbnVsbCxcbiAgICBjaGlsZHJlbjogXCJcIixcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBjb2x1bW5zOiBudWxsLFxuICAgIGNvbHVtbnNSZXNpemFibGU6IG51bGwsXG4gICAgZGF0YVNvdXJjZTogW10sXG4gICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogbnVsbCxcbiAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzOiBudWxsLFxuICAgIGVtcHR5VGV4dDogXCLmmoLml6DmlbDmja5cIixcbiAgICBleHBhbmRJY29uVmlzaWJsZTogdHJ1ZSxcbiAgICBleHBhbmRPblJvd0NsaWNrOiBmYWxzZSxcbiAgICBleHBhbmRlZFJvd0tleXM6IG51bGwsXG4gICAgZXhwYW5kZWRSb3dSZW5kZXI6ICgpID0+IFwiXCIsXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRDZWxsUHJvcHM6IG5vb3AsXG4gICAgZ2V0Q2VsbFN0eWxlOiBub29wLFxuICAgIGdldEhlYWRDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0SGVhZFN0eWxlOiBub29wLFxuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldEhlYWRDZWxsU3R5bGU6IG5vb3AsXG4gICAgZ2V0Um93Q2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldFJvd1N0eWxlOiBub29wLFxuICAgIGdldFNlbGVjdFByb3BzOiAoKSA9PiAoe30pLFxuICAgIGhlYWRlckFmZml4ZWQ6IGZhbHNlLFxuICAgIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A6IDAsXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IG51bGwsXG4gICAgaGVhZGVyRW1waGFzaXplZDogZmFsc2UsXG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG9uRXhwYW5kQ2hhbmdlOiBudWxsLFxuICAgIG9uUm93Q2xpY2s6IG51bGwsXG4gICAgb25Sb3dNb3VzZUVudGVyOiBudWxsLFxuICAgIG9uUm93TW91c2VMZWF2ZTogbnVsbCxcbiAgICBvblNlbGVjdENoYW5nZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBzZWxlY3RNdWx0aXBsZTogdHJ1ZSxcbiAgICBzZWxlY3RPblJvd0NsaWNrOiBmYWxzZSxcbiAgICBzZWxlY3RlZFJvd0tleXM6IG51bGwsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IHVuZGVmaW5lZCxcbiAgICB2aXJ0dWFsTGlzdFByb3BzOiB7fSxcbiAgICB2aXJ0dWFsTGlzdFN0eWxlOiB7fSxcbiAgICB2aXJ0dWFsU2Nyb2xsOiBmYWxzZSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBjb2x1bW5zLFxuICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICBzZWxlY3RlZFJvd0tleXMsXG4gIH06IElUYWJsZVByb3BzKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFBhcnRpYWw8SVRhYmxlU3RhdGU+ID0ge31cbiAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwgfHwgY29sdW1ucyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuY2hpbGRyZW4gPSBjb2x1bW5zIHx8IGNoaWxkcmVuXG4gICAgfVxuICAgIGlmIChleHBhbmRlZFJvd0tleXMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmV4cGFuZGVkUm93S2V5cyA9IGV4cGFuZGVkUm93S2V5c1xuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5zZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXNcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICBwdWJsaWMgY29tYmluZWRDZWxsc0luZm86IElCYXNlT2JqZWN0W10gPSBbXVxuXG4gIHB1YmxpYyBhZmZpeEhlYWRlcjogQWZmaXhcblxuICBwdWJsaWMgYWZmaXhTY3JvbGxiYXI6IEFmZml4XG5cbiAgcHVibGljIG1haW5UYWJsZTogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgbWFpblRhYmxlQm9keTogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgbWFpblRoZWFkOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIHByaXZhdGUgZGVib3VuY2VkV2luZG93UmVzaXplOiBhbnlcblxuICBwcml2YXRlIHJlc2l6ZUV2ZW50OiBhbnlcblxuICBwcml2YXRlIGNvbHVtbk1hbmFnZXI6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVGFibGVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXMsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzLFxuICAgICAgZXhwYW5kZWRSb3dLZXlzOiBleHBhbmRlZFJvd0tleXNQcm9wLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wLFxuICAgIH0gPSBwcm9wc1xuICAgIHRoaXMuY29sdW1uTWFuYWdlciA9IG5ldyBDb2x1bW5NYW5hZ2VyKGNvbHVtbnMgfHwgY2hpbGRyZW4pXG4gICAgbGV0IHNlbGVjdGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3ApIHtcbiAgICAgIHNlbGVjdGVkUm93S2V5cyA9IHNlbGVjdGVkUm93S2V5c1Byb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRTZWxlY3RlZFJvd0tleXMpIHtcbiAgICAgIHNlbGVjdGVkUm93S2V5cyA9IGRlZmF1bHRTZWxlY3RlZFJvd0tleXNcbiAgICB9XG4gICAgbGV0IGV4cGFuZGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKGV4cGFuZGVkUm93S2V5c1Byb3ApIHtcbiAgICAgIGV4cGFuZGVkUm93S2V5cyA9IGV4cGFuZGVkUm93S2V5c1Byb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRFeHBhbmRlZFJvd0tleXMpIHtcbiAgICAgIGV4cGFuZGVkUm93S2V5cyA9IGRlZmF1bHRFeHBhbmRlZFJvd0tleXNcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFmZml4ZWRCb3R0b206IGZhbHNlLFxuICAgICAgYWZmaXhlZFRvcDogZmFsc2UsXG4gICAgICBjaGlsZHJlbjogY29sdW1ucyB8fCBjaGlsZHJlbixcbiAgICAgIGNvbWJpbmVkQ2VsbHNJbmZvOiBbXSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiB7fSwgLy8g5q2j5Zyo5pS55Y+Y5a695bqm55qE5YiX55qE5L+h5oGvXG4gICAgICBleHBhbmRlZFJvd0tleXMsXG4gICAgICBmaXhlZENvbHVtbnNJbmZvczogW10sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WDogZmFsc2UsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WTogZmFsc2UsXG4gICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICAgIG1haW5UYWJsZVN0eWxlOiB7fSxcbiAgICAgIHJlc2l6ZWQ6IFtdLCAvLyDmlLnlj5jov4flrr3luqbnmoTmiYDmnInliJfnmoTmlbDmja5cbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICB9XG4gICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUgPSBkZWJvdW5jZSh0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSwgMTAwKVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUYWJsZVByb3BzLFxuICAgIG5leHRTdGF0ZTogSVRhYmxlU3RhdGVcbiAgKSA9PlxuICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY29sdW1uTWFuYWdlcixcbiAgICAgIGNvbWJpbmVkQ2VsbHNJbmZvLFxuICAgICAgZGVib3VuY2VkV2luZG93UmVzaXplLFxuICAgICAgcHJvcHMsXG4gICAgfSA9IHRoaXNcbiAgICBjb25zdCB7IGlzQW55Q29sdW1uc0ZpeGVkIH0gPSBjb2x1bW5NYW5hZ2VyXG4gICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgLy8g5Zu65a6a6KGo5aS06ZyA6KaB55uR5ZCsIHJlc2l6ZSDkuovku7ZcbiAgICBpZiAoaGVhZGVyQWZmaXhlZCB8fCBoZWlnaHQgfHwgaXNBbnlDb2x1bW5zRml4ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKClcbiAgICAgIHRoaXMucmVzaXplRXZlbnQgPSBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIFwicmVzaXplXCIsXG4gICAgICAgIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZVxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoY29tYmluZWRDZWxsc0luZm8ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tYmluZWRDZWxsc0luZm8gfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKHtcbiAgICBkYXRhU291cmNlOiBkYXRhU291cmNlT2xkLFxuICAgIGdldENlbGxQcm9wczogZ2V0Q2VsbFByb3BzT2xkLFxuICB9OiBJVGFibGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgZ2V0Q2VsbFByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgLyoqXG4gICAgICogaGFuZGxlV2luZG93UmVzaXplIOS4jeW6lOivpeWPquWcqCBkaWRtb3VudCDml7bmiafooYxcbiAgICAgKiBkaWRVcGRhdGUg5pe25Lmf6ZyA6KaBXG4gICAgICovXG4gICAgaWYgKCFzaGFsbG93RXF1YWwoZGF0YVNvdXJjZU9sZCwgZGF0YVNvdXJjZSkpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsIDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCI5bm25Y2V5YWD5qC86ZyA5ou/5Yiw55yf5a6e55qEIGRvbSDlhYPntKDorqHnrpflsLrlr7jvvIzlm6DmraTov5nph4zpnIDopoEgZm9yY2VVcGRhdGVcbiAgICAgKi9cbiAgICBpZiAoIXNoYWxsb3dFcXVhbChnZXRDZWxsUHJvcHNPbGQsIGdldENlbGxQcm9wcykgJiYgZ2V0Q2VsbFByb3BzKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucmVzaXplRXZlbnQpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnQucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKSB7XG4gICAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZS5jbGVhcigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtblN0YXJ0ID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LFxuICAgIGNvbDogSUNvbHVtblByb3BzXG4gICkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiY29sLXJlc2l6ZVwiXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge1xuICAgICAgICBjb2wsXG4gICAgICAgIGRhdGFJbmRleDogY29sLmRhdGFJbmRleCxcbiAgICAgICAgcGFyZW50V2lkdGg6XG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgLndpZHRoLFxuICAgICAgICBzdGFydFg6IGUucGFnZVgsXG4gICAgICB9LFxuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB9LCAwKVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtbk1vdmluZyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHsgcmVzaXplZCwgY3VycmVudGx5UmVzaXppbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGNvbCwgZGF0YUluZGV4LCBwYXJlbnRXaWR0aCwgc3RhcnRYIH0gPSBjdXJyZW50bHlSZXNpemluZ1xuICAgIC8qKlxuICAgICAqIDEzIOS7o+ihqOWtl+WPt++8m+eUqCBlbSDnmoTmlrnlvI/orqHnrpflrr3luqbmnKzouqvkuI3lpJ/lkIjnkIbvvIzov5nph4wgKyAy77yM5LiN54S25ZyoIFNhZmFyaSDkuIvnqbrpl7TkvJrkuI3lpJ/jgIJcbiAgICAgKi9cbiAgICBjb25zdCBiYXNlV2lkdGggPVxuICAgICAgTWF0aC5jZWlsKFxuICAgICAgICBjb2wudGl0bGUubGVuZ3RoID4gNCA/IGNvbC50aXRsZS5sZW5ndGggLyAyIDogY29sLnRpdGxlLmxlbmd0aFxuICAgICAgKSAqXG4gICAgICAgIDEzICtcbiAgICAgIDJcbiAgICBjb25zdCBuZXdSZXNpemVkID0gcmVzaXplZC5maWx0ZXIobyA9PiBvLmRhdGFJbmRleCAhPT0gZGF0YUluZGV4KVxuICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5tYXgoXG4gICAgICBNYXRoLmNlaWwocGFyZW50V2lkdGggKyBlLnBhZ2VYIC0gc3RhcnRYKSxcbiAgICAgICEhY29sLm9uU29ydCB8fCAhIWNvbC5vbkZpbHRlciA/IGJhc2VXaWR0aCArIDM2IDogYmFzZVdpZHRoICsgMTZcbiAgICApXG4gICAgbmV3UmVzaXplZC5wdXNoKHtcbiAgICAgIGRhdGFJbmRleCxcbiAgICAgIHZhbHVlOiBuZXdXaWR0aCxcbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVzaXplZDogbmV3UmVzaXplZCxcbiAgICB9KVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5FbmQgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbWFpblRhYmxlIH0gPSB0aGlzXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WDpcbiAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxXaWR0aCA+IG1haW5UYWJsZS5vZmZzZXRXaWR0aCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbEhlaWdodCA+IG1haW5UYWJsZS5vZmZzZXRIZWlnaHQsXG4gICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbHVtbk1hbmFnZXIsIG1haW5UYWJsZSwgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCB7IGlzQW55Q29sdW1uc0ZpeGVkIH0gPSBjb2x1bW5NYW5hZ2VyXG4gICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgaWYgKChoZWFkZXJBZmZpeGVkIHx8IGhlaWdodCB8fCBpc0FueUNvbHVtbnNGaXhlZCkgJiYgbWFpblRhYmxlKSB7XG4gICAgICBjb25zdCB7IG1haW5UYWJsZVN0eWxlOiBvbGRTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgY29uc3QgcmVjdCA9IG1haW5UYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgbWFpblRhYmxlU3R5bGU6IFBhcnRpYWw8UmVhY3QuQ1NTUHJvcGVydGllcz4gPSB7fVxuICAgICAgbWFpblRhYmxlU3R5bGUubGVmdCA9IHJlY3QubGVmdFxuICAgICAgbWFpblRhYmxlU3R5bGUud2lkdGggPSByZWN0LndpZHRoXG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChtYWluVGFibGVTdHlsZSwgb2xkU3R5bGUpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWluVGFibGVTdHlsZSB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsV2lkdGggPiBtYWluVGFibGUub2Zmc2V0V2lkdGgsXG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsSGVpZ2h0ID4gbWFpblRhYmxlLm9mZnNldEhlaWdodCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZU1haW5UYWJsZVNjcm9sbCA9IChlPzogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IGFmZml4SGVhZGVyLCBtYWluVGFibGUgfSA9IHRoaXNcbiAgICBjb25zdCB7IG9uU2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBhZmZpeGVkVG9wIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAob25TY3JvbGwgJiYgZSkge1xuICAgICAgLy8gZSDlj6/og73mmK8gdGhlYWRcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvbGVcIikgPT09IFwidGFibGVcIikge1xuICAgICAgICBvblNjcm9sbChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZmZpeGVkVG9wICYmIGFmZml4SGVhZGVyICYmIG1haW5UYWJsZSAmJiBhZmZpeEhlYWRlci5maXhlZE5vZGUpIHtcbiAgICAgIGFmZml4SGVhZGVyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ID0gbWFpblRhYmxlLnNjcm9sbExlZnRcbiAgICB9XG5cbiAgICAvLyDlm7rlrprlpLTnmoTmg4XlhrXvvIzpnIDopoHlkIzmraXlm7rlrprmu5rliqjmnaHlkozkuLsgVGFibGUg5rua5Yqo5p2hXG4gICAgdGhpcy5zeW5jVGFibGVTY3JvbGxQb3NpdGlvbihtYWluVGFibGUuc2Nyb2xsTGVmdClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBhZmZpeFNjcm9sbGJhciwgbWFpblRhYmxlLCBtYWluVGhlYWQgfSA9IHRoaXNcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG1haW5UYWJsZSAmJiBhZmZpeFNjcm9sbGJhciAmJiBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUpIHtcbiAgICAgIGlmIChtYWluVGFibGUuc2Nyb2xsTGVmdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgbWFpblRhYmxlLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgICAgfVxuICAgICAgaWYgKGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ICE9PSB2YWx1ZSkge1xuICAgICAgICBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c6K6+5a6a5LqGIHByb3AgaGVpZ2h077yM5bm25LiU5a2Y5Zyo5qiq5ZCR5rua5Yqo5p2h77yM5YiZ6KaB5ZCM5q2lIHRoZWFkIOeahOa7muWKqOS9jee9rlxuICAgIGlmIChoZWlnaHQgJiYgbWFpblRoZWFkKSB7XG4gICAgICBtYWluVGhlYWQuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVJvd0NsaWNrID0gKFxuICAgIHJvdzogSUJhc2VPYmplY3QsXG4gICAgaTogbnVtYmVyLFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGV4cGFuZE9uUm93Q2xpY2ssXG4gICAgICBnZXRTZWxlY3RQcm9wcyxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgICBzZWxlY3RPblJvd0NsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgaWYgKFxuICAgICAgc2VsZWN0T25Sb3dDbGljayAmJlxuICAgICAgdHlwZW9mIGtleSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgIShcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMgJiZcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKSAmJlxuICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpLmRpc2FibGVkXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdChrZXksICFzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICB9XG4gICAgaWYgKGV4cGFuZE9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMuaGFuZGxlRXhwYW5kKGtleSlcbiAgICB9XG4gICAgaWYgKG9uUm93Q2xpY2spIHtcbiAgICAgIG9uUm93Q2xpY2socm93LCBpLCBlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaFJlc2l6ZSA9IChcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGRhdGFJbmRleDogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgZml4ZWRQb3NpdGlvbj86IGJvb2xlYW4gfCBcImxlZnRcIiB8IFwicmlnaHRcIlxuICApID0+IHtcbiAgICBjb25zdCB7IGdldENvbHVtbnMgfSA9IHRoaXMuY29sdW1uTWFuYWdlclxuICAgIGxldCB7IGZpeGVkQ29sdW1uc0luZm9zIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgY29sdW1ucyA9IGdldENvbHVtbnMoKSBhcyBJQ29sdW1uUHJvcHNbXVxuICAgIC8qKlxuICAgICAqIGNvbHVtbnMg5Y+Y5YyW5ZCOIGZpeGVkQ29sdW1uc0luZm9zIOS4reWPr+iDveWtmOWcqOW3sue7j+enu+mZpOeahCBjb2x1bW5cbiAgICAgKi9cbiAgICBmaXhlZENvbHVtbnNJbmZvcyA9IGZpeGVkQ29sdW1uc0luZm9zLmZpbHRlcihvID0+XG4gICAgICBjb2x1bW5zLmZpbmQocCA9PiBwLmRhdGFJbmRleCA9PT0gby5kYXRhSW5kZXgpXG4gICAgKVxuICAgIGNvbnN0IGkgPSBmaXhlZENvbHVtbnNJbmZvcy5maW5kSW5kZXgobyA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgIC8vIGZpeGVkIOWPr+iDveaYryBCb29sZWFuXG4gICAgY29uc3QgZml4ZWQgPSBmaXhlZFBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIlxuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIGlmIChmaXhlZENvbHVtbnNJbmZvc1tpXS53aWR0aCA9PT0gd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmaXhlZENvbHVtbnNJbmZvcy5zcGxpY2UoaSwgMSlcbiAgICB9XG4gICAgZml4ZWRDb2x1bW5zSW5mb3MucHVzaCh7IHdpZHRoLCBkYXRhSW5kZXgsIGluZGV4LCBmaXhlZCB9KVxuICAgIGZpeGVkQ29sdW1uc0luZm9zLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KVxuXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zSW5mb3NMZWZ0ID0gZml4ZWRDb2x1bW5zSW5mb3MuZmlsdGVyKFxuICAgICAgbyA9PiBvLmZpeGVkID09PSBcImxlZnRcIlxuICAgIClcbiAgICBjb25zdCBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0ID0gZml4ZWRDb2x1bW5zSW5mb3NcbiAgICAgIC5maWx0ZXIobyA9PiBvLmZpeGVkID09PSBcInJpZ2h0XCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5pbmRleCAtIGEuaW5kZXgpXG5cbiAgICBmaXhlZENvbHVtbnNJbmZvcy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBsZXQgY29sSW5kZXhcbiAgICAgIGlmIChjb2wuZml4ZWQgPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbEluZGV4ID0gZml4ZWRDb2x1bW5zSW5mb3NMZWZ0LmZpbmRJbmRleChcbiAgICAgICAgICBvID0+IG8uZGF0YUluZGV4ID09PSBjb2wuZGF0YUluZGV4XG4gICAgICAgIClcbiAgICAgICAgaWYgKGNvbEluZGV4ID09PSBmaXhlZENvbHVtbnNJbmZvc0xlZnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbC5pc0xhc3RMZWZ0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbC5pc0xhc3RMZWZ0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvLyDlrrnplJnvvIzkuI3lhYHorrggc2xpY2UoMCwgLTEpIOeahOWNsemZqeaTjeS9nFxuICAgICAgICBjb2wub2Zmc2V0ID1cbiAgICAgICAgICBjb2xJbmRleCA9PT0gLTFcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBmaXhlZENvbHVtbnNJbmZvc0xlZnRcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgY29sSW5kZXgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci53aWR0aCwgMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbEluZGV4ID0gZml4ZWRDb2x1bW5zSW5mb3NSaWdodC5maW5kSW5kZXgoXG4gICAgICAgICAgbyA9PiBvLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleFxuICAgICAgICApXG4gICAgICAgIGlmIChjb2xJbmRleCA9PT0gZml4ZWRDb2x1bW5zSW5mb3NSaWdodC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29sLmlzRmlyc3RSaWdodCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wuaXNGaXJzdFJpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvLyDlrrnplJnvvIzkuI3lhYHorrggc2xpY2UoMCwgLTEpIOeahOWNsemZqeaTjeS9nFxuICAgICAgICBjb2wub2Zmc2V0ID1cbiAgICAgICAgICBjb2xJbmRleCA9PT0gLTFcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIGNvbEluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIud2lkdGgsIDApXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZml4ZWRDb2x1bW5zSW5mb3MgfSwgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaGVhZE1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc1Jlc2l6ZXJTaG93IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFpc1Jlc2l6ZXJTaG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemVyU2hvdzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoZWFkTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnRseVJlc2l6aW5nKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWxleW8gOihjFxuICAgKi9cbiAgcHVibGljIGhhbmRsZUV4cGFuZCA9IChrZXk6IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBleHBhbmRlZFJvd0tleXM6IGV4cGFuZGVkUm93S2V5c1Byb3AsIG9uRXhwYW5kQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBleHBhbmRlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBrZXlzID0gWy4uLmV4cGFuZGVkUm93S2V5c11cbiAgICBjb25zdCBpbmRleCA9IGtleXMuaW5kZXhPZihrZXkpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGtleXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkUm93S2V5czoga2V5cyB9KVxuICAgIH1cbiAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgIG9uRXhwYW5kQ2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAieaLqeihjFxuICAgKi9cbiAgcHVibGljIGhhbmRsZVNlbGVjdCA9IChrZXk6IFJlYWN0LlJlYWN0VGV4dCwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AsXG4gICAgICBzZWxlY3RNdWx0aXBsZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGtleXMgPSBbLi4uc2VsZWN0ZWRSb3dLZXlzXVxuICAgIGlmIChzZWxlY3RNdWx0aXBsZSkge1xuICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuc3BsaWNlKHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGtleSksIDEpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBba2V5XVxuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czoga2V5cyxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvblNlbGVjdENoYW5nZSkge1xuICAgICAgb25TZWxlY3RDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YCJ5oup6KGM5YWo6YCJ5pON5L2cXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlU2VsZWN0QWxsID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0Q2hhbmdlLCBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGtleXMgPSBbLi4uc2VsZWN0ZWRSb3dLZXlzXVxuICAgIGNvbnN0IGF2YWlsYWJsZUtleXMgPSB0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKClcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgYXZhaWxhYmxlS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDkuI3og73nm7TmjqXmuIXnqbrmlbDnu4TvvIzlm6DkuLrlj6/og73kvKDlhaXkuobkuI7lvZPliY0gZGF0YVNvdXJjZSDml6DlhbPnmoQga2V5c++8m1xuICAgICAgLy8g5Lmf5LiN6IO955u05o6lIHNwbGljZe+8jOWboOS4uuimgeajgOafpeaYr+WQpiBnZXRTZWxlY3RQcm9wcy5kaXNhYmxlZOOAglxuICAgICAgc2VsZWN0ZWRSb3dLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGF2YWlsYWJsZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZihrZXkpLCAxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czoga2V5cyxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvblNlbGVjdENoYW5nZSkge1xuICAgICAgb25TZWxlY3RDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5bey5YWo6YOo6YCJ5oupXG4gICAqL1xuICBwdWJsaWMgaGFzU2VsZWN0ZWRBbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKVxuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKFxuICAgICAgZGF0YVNvdXJjZSAmJlxuICAgICAgZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgIGtleXMubGVuZ3RoICYmXG4gICAgICBrZXlzLmV2ZXJ5KGtleSA9PiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHVibGljIGdldEF2YWlsYWJsZVJvd3NLZXlzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgZ2V0U2VsZWN0UHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+ID0gW11cbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBkYXRhU291cmNlLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Yga2V5ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICEoXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMgJiZcbiAgICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpICYmXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKS5kaXNhYmxlZFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYWJsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhU291cmNlLFxuICAgICAgZXhwYW5kSWNvblZpc2libGUsXG4gICAgICBleHBhbmRlZFJvd1JlbmRlcixcbiAgICAgIGV4cGFuZE9uUm93Q2xpY2ssXG4gICAgICBnZXRIZWFkQ2xhc3NOYW1lLFxuICAgICAgZ2V0SGVhZFN0eWxlLFxuICAgICAgZ2V0Um93Q2xhc3NOYW1lLFxuICAgICAgZ2V0Um93U3R5bGUsXG4gICAgICBnZXRTZWxlY3RQcm9wcyxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBvbkV4cGFuZENoYW5nZSxcbiAgICAgIG9uUm93TW91c2VFbnRlcixcbiAgICAgIG9uUm93TW91c2VMZWF2ZSxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgc2VsZWN0TXVsdGlwbGUsXG4gICAgICBzZWxlY3RPblJvd0NsaWNrLFxuICAgICAgc2l6ZSxcbiAgICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgICB2aXJ0dWFsTGlzdFByb3BzLFxuICAgICAgdmlydHVhbExpc3RTdHlsZSxcbiAgICAgIHZpcnR1YWxTY3JvbGwsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIGFmZml4ZWRUb3AsXG4gICAgICBhZmZpeGVkQm90dG9tLFxuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3MsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgbWFpblRhYmxlU3R5bGUsXG4gICAgICByZXNpemVkLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzLFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCB7XG4gICAgICBnZXRDb2x1bW5zLFxuICAgICAgLy8gZ2V0TGVmdENvbHVtbnNXaWR0aCxcbiAgICAgIGdldEdyb3VwQ29sdW1uc0RlcHRoLFxuICAgICAgaXNBbnlDb2x1bW5zTGVmdEZpeGVkLFxuICAgIH0gPSB0aGlzLmNvbHVtbk1hbmFnZXJcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRDb2x1bW5zKCkgYXMgSUNvbHVtblByb3BzW11cblxuICAgIGNvbnN0IHRoZWFkU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICBoZWlnaHQ6IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl0gKiBnZXRHcm91cENvbHVtbnNEZXB0aCgpfXB4YCxcbiAgICAgIC4uLigoZ2V0SGVhZFN0eWxlICYmIGdldEhlYWRTdHlsZSgpKSB8fCB7fSksXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV5byA6KGM5ZKM6YCJ5oup6KGM5pe277yMdGhlYWTlkozmr4/ooYznmoTnrKzkuIDliJfliY3pg73opoHliqDlhaXkuIDliJdcbiAgICAgKiDmraTliJfkuZ/kvJrlvbHlk40gc3RpY2t5IOeahOWBj+enu+S9jee9rlxuICAgICAqL1xuICAgIGNvbnN0IHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlID1cbiAgICAgIGV4cGFuZEljb25WaXNpYmxlICYmICghIW9uU2VsZWN0Q2hhbmdlIHx8ICEhb25FeHBhbmRDaGFuZ2UpXG5cbiAgICBjb25zdCB0aGVhZCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXswfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgYCR7cHJlZml4fS10aGVhZGAsXG4gICAgICAgICAgZ2V0SGVhZENsYXNzTmFtZSAmJiBnZXRIZWFkQ2xhc3NOYW1lKClcbiAgICAgICAgKX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZVRoZWFkTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRoZWFkTW91c2VMZWF2ZX1cbiAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJtYWluVGhlYWRcIil9XG4gICAgICAgIHN0eWxlPXt0aGVhZFN0eWxlfVxuICAgICAgPlxuICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwgYCR7cHJlZml4fS10aF9mdW5jdGlvbmFsYCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9XCJmdW5jdGlvbmFsLWFsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdE11bHRpcGxlICYmICEhb25TZWxlY3RDaGFuZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGx9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmhhc1NlbGVjdGVkQWxsKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFsaWduLFxuICAgICAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICAgIGZpeGVkLFxuICAgICAgICAgICAgb25GaWx0ZXIsXG4gICAgICAgICAgICBvblNvcnQsXG4gICAgICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIH0gPSBjb2xcblxuICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQobyA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAgICAgICAhIW9uU29ydCB8fFxuICAgICAgICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICAgICAgICEhZmlsdGVyc1xuICAgICAgICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtaW5XaWR0aCA9XG4gICAgICAgICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKlxuICAgICAgICAgICAgICAgIDEzICtcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgICAgICAgICAgbWluV2lkdGggKz0gMjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGZsZXhWYWx1ZVxuICAgICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRofSAwIGF1dG9gXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aC5sZW5ndGggLSB3aWR0aC5sYXN0SW5kZXhPZihcInB4XCIpID09PSAyKSB7XG4gICAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRoLnNsaWNlKDAsIC0yKX0gMCBhdXRvYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmxleFZhbHVlID0gYDAgMCAke3dpZHRofWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7TWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCl9IDAgYXV0b2BcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogdGggbGVmdCDlgLzvvJrlj5blvpcgcmVzaXplLW9ic2VydmVyIOWtmOWCqOeahOivpeWIl+eahOWBj+enu+mHj++8jOWKoOS4iuWmguaenOaciemAieaLqeihjOOAgeWxleW8gOihjOaXtueahCBTRUxFQ1RfVERfV0lEVEgg4oCU4oCUIOS7heWvuSBsZWZ0IOacieaViFxuICAgICAgICAgICAqIHRoIHJpZ2h0IOWAvO+8muWPluW+lyByZXNpemUtb2JzZXJ2ZXIg5a2Y5YKo55qE6K+l5YiX55qE5YGP56e76YeP77yM5Yqg5LiK5aaC5p6c5YaF5rua5Yqo5pe255qE5rua5Yqo5p2h5a695bqm77yIMTTvvIkg4oCU4oCUIOS7heWvuSByaWdodCDmnInmlYhcbiAgICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAgICAgIG9uUmVzaXplPXsoeyB3aWR0aDogd2lkdGhSZXNpemUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGhSZXNpemUod2lkdGhSZXNpemUsIGRhdGFJbmRleCwgaW5kZXgsIGZpeGVkKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZpeGVkfVxuICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06IGNsaWNrYWJsZSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2xlZnRgXTogaXNGaXhlZExlZnQoY29sKSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0YF06IGlzRml4ZWRSaWdodChjb2wpLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgbyA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgICAgICAgICApPy5pc0xhc3RMZWZ0LFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfcmlnaHRGaXJzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICBvID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICAgICAgICAgICk/LmlzRmlyc3RSaWdodCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAodGhlYWRQbGFjZWhvbGRlclZpc2libGUgPyBTRUxFQ1RfVERfV0lEVEggOiAwKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBpc0ZpeGVkUmlnaHQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAoaXNNYWluVGFibGVPdmVyZmxvd1kgJiYgaGVpZ2h0ID8gMTQgOiAwKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGZsZXg6IHJlc2l6ZWRDb2wgPyBgJHtyZXNpemVkQ29sLnZhbHVlfSAwIGF1dG9gIDogZmxleFZhbHVlLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHJlc2l6ZWRDb2wgPyByZXNpemVkQ29sLnZhbHVlIDogd2lkdGggfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlc2l6ZWRDb2xcbiAgICAgICAgICAgICAgICAgICAgPyByZXNpemVkQ29sLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogd2lkdGggfHwgTWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbHVtbj17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChjb2wsIHsgaW5kZXgsIGNvbHVtbnMgfSl9XG4gICAgICAgICAgICAgICAge2NvbC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aEdyb3VwYH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb2wuY2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChjaGlsZENvbDogSUNvbHVtblByb3BzLCBjaGlsZENvbEluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGhgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNoaWxkQ29sLm9uU29ydCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkQ29sLnNvcnRPcmRlciAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wub25GaWx0ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wuZmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRDb2wuZGF0YUluZGV4IHx8IGNoaWxkQ29sSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxMDAgMCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGNoaWxkQ29sLmFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUaENlbGwoY2hpbGRDb2wpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRDb2wuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRoR3JvdXBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZENvbC5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFuZENvbDogSUNvbHVtblByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sSW5kZXg6IG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFncmFuZENvbC5vblNvcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ3JhbmRDb2wuc29ydE9yZGVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFuZENvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLm9uRmlsdGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFncmFuZENvbC5maWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2dyYW5kQ29sLmRhdGFJbmRleCB8fCBncmFuZENvbEluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxMDAgMCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogZ3JhbmRDb2wuYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChncmFuZENvbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVzaXplT2JzZXJ2ZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IGdlbmVyYXRlVHJzID0gKHJvdzogSUJhc2VPYmplY3QsIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSByb3dcbiAgICAgIGNvbnN0IGNvbEFycmF5OiBhbnkgPSBbXVxuICAgICAgY29uc3Qgc2VsZWN0UHJvcHNHZXR0ZWQgPSBnZXRTZWxlY3RQcm9wcyAmJiBnZXRTZWxlY3RQcm9wcyhyb3csIHJvd0luZGV4KVxuICAgICAgY29uc3QgYWxsU2VsZWN0UHJvcHMgPSB7XG4gICAgICAgIGNoZWNrZWQ6IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpLFxuICAgICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50YCxcbiAgICAgICAgb25DaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdChrZXksIGNoZWNrZWQpLFxuICAgICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSxcbiAgICAgICAgLi4uKHNlbGVjdFByb3BzR2V0dGVkIHx8IHt9KSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlbGVjdFByb3BzID0gb21pdChhbGxTZWxlY3RQcm9wcywgW1wicG9wb3ZlclByb3BzXCJdKVxuICAgICAgY29uc3Qgc2VsZWN0Q2VsbCA9IG9uRXhwYW5kQ2hhbmdlID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXhwYW5kKGtleSl9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZEljb25gfSBpY29uPVwiYXJyb3ctZG93blwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHNlbGVjdE11bHRpcGxlID8gKFxuICAgICAgICA8Q2hlY2tib3ggey4uLnNlbGVjdFByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFJhZGlvIHsuLi5zZWxlY3RQcm9wc30gLz5cbiAgICAgIClcbiAgICAgIGNvbnN0IGdlbmVyYXRlVHIgPSAoY29sdW1uc1BhcmFtOiBhbnlbXSwgcGFyZW50SW5kZXg/OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29sdW1uc1BhcmFtLmZvckVhY2goKGNvbCwgY29sSW5kZXhQYXJhbSkgPT4ge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIOWmguaenOWJjemdoiDnmoQgY29sIOaciSBjaGlsZHJlbu+8jOWImeimgeaKiiBjaGlsZHJlbi5sZW5ndGgg6aKd5aSW5Yqg5YiwIGNvbEluZGV4XG4gICAgICAgICAgICovXG4gICAgICAgICAgbGV0IGNvbEluZGV4ID0gY29sSW5kZXhQYXJhbVxuICAgICAgICAgIGlmIChwYXJlbnRJbmRleCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuQ291bnQgPSBjb2x1bW5zW2ldLmNoaWxkcmVuPy5sZW5ndGggfHwgMVxuICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5Db3VudCkge1xuICAgICAgICAgICAgICAgIGNvbEluZGV4ICs9IGNoaWxkcmVuQ291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWNvbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29sQXJyYXkucHVzaCh0aGlzLmdlbmVyYXRlVGJvZHlDZWxsKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZW5lcmF0ZVRyKGNvbC5jaGlsZHJlbiwgY29sSW5kZXhQYXJhbSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBnZW5lcmF0ZVRyKGNvbHVtbnMpXG4gICAgICBjb25zdCB0ciA9IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGAke3ByZWZpeH0tdHJgLFxuICAgICAgICAgICAgZ2V0Um93Q2xhc3NOYW1lICYmIGdldFJvd0NsYXNzTmFtZShyb3csIHJvd0luZGV4KSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfY2xpY2thYmxlYF06IGV4cGFuZE9uUm93Q2xpY2sgfHwgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfZXhwYW5kZWRgXTogZXhwYW5kZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRyX3NlbGVjdGVkYF06IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAga2V5PXtrZXkgfHwgcm93SW5kZXh9XG4gICAgICAgICAgcm9sZT1cInJvd1wiXG4gICAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17XG4gICAgICAgICAgICBvblJvd01vdXNlRW50ZXIgPyBlID0+IG9uUm93TW91c2VFbnRlcihyb3csIHJvd0luZGV4LCBlKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e1xuICAgICAgICAgICAgb25Sb3dNb3VzZUxlYXZlID8gZSA9PiBvblJvd01vdXNlTGVhdmUocm93LCByb3dJbmRleCwgZSkgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZVJvd0NsaWNrKHJvdywgcm93SW5kZXgsIGUpfVxuICAgICAgICAgIG9uS2V5RG93bj17bm9vcH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uKChnZXRSb3dTdHlsZSAmJiBnZXRSb3dTdHlsZShyb3csIHJvd0luZGV4KSkgfHwge30pLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10ZGAsIGAke3ByZWZpeH0tdGRfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAga2V5PVwiZnVuY3Rpb25hbFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogdmVydGljYWxBbGlnbiAmJiBWRVJUSUNBTF9BTElHTlt2ZXJ0aWNhbEFsaWduXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlbGVjdFByb3BzR2V0dGVkPy5wb3BvdmVyUHJvcHM/LnBvcHVwID8gKFxuICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjF9XG4gICAgICAgICAgICAgICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgey4uLihcbiAgICAgICAgICAgICAgICAgICAgICAoZ2V0U2VsZWN0UHJvcHMgJiYgZ2V0U2VsZWN0UHJvcHMocm93LCByb3dJbmRleCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgKS5wb3BvdmVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RDZWxsfVxuICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDZWxsXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb2xBcnJheX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0cixcbiAgICAgICAgICBleHBhbmRlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZFJvd2B9IGtleT1cInRyLWV4cGFuZFwiPlxuICAgICAgICAgICAgICB7ISFleHBhbmRlZFJvd1JlbmRlciAmJiBleHBhbmRlZFJvd1JlbmRlcihyb3csIHJvd0luZGV4KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICBdXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgaGVhZGVyQWZmaXhlZCA/IChcbiAgICAgICAgPEFmZml4XG4gICAgICAgICAga2V5PXswfVxuICAgICAgICAgIG9mZnNldFRvcD17aGVhZGVyQWZmaXhlZE9mZnNldFRvcH1cbiAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMud3JhcHBlcn1cbiAgICAgICAgICBnZXRUYXJnZXQ9e2hlYWRlckFmZml4R2V0VGFyZ2V0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtib29sID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZmZpeGVkVG9wOiBib29sIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgLy8g5Zu65a6a55qE6YKj5LiA5Yi75Lmf6ZyA6KaB56uL5Y2z6YeN5paw5a6a5L2N44CCXG4gICAgICAgICAgICAgIC8vIOmHjeaWsOWumuS9jeOAgeWMheaLrOS4i+mdoueahCBjbGFzc05hbWUsIHN0eWxlIOWPquWcqOS4u+ihqOagvOS4iuWPkeeUn++8jOWboOS4uuWbuuWumuWIl+eahCBBZmZpeCDooYzkuLrlvojljZXnuq/jgIJcbiAgICAgICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGwoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXthZmZpeGVkVG9wID8gYCR7cHJlZml4fS1hZmZpeGAgOiBcIlwifVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAuLi4oYWZmaXhlZFRvcCA/IG1haW5UYWJsZVN0eWxlIDoge30pLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJhZmZpeEhlYWRlclwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVhZH1cbiAgICAgICAgPC9BZmZpeD5cbiAgICAgICkgOiAoXG4gICAgICAgIHRoZWFkXG4gICAgICApLFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9ezF9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10Ym9keWB9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRhYmxlQm9keVwiKX1cbiAgICAgID5cbiAgICAgICAgeyF2aXJ0dWFsU2Nyb2xsICYmXG4gICAgICAgICAgZGF0YVNvdXJjZSAmJlxuICAgICAgICAgICEhZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgICAgICBkYXRhU291cmNlLm1hcCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgfSl9XG4gICAgICAgIHt2aXJ0dWFsU2Nyb2xsICYmIGRhdGFTb3VyY2UgJiYgISFkYXRhU291cmNlLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGRhdGE9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICBpdGVtS2V5PVwiZGF0YUluZGV4XCJcbiAgICAgICAgICAgIGhlaWdodD17KGhlaWdodCB8fCA0MDApIC0gNDB9XG4gICAgICAgICAgICBpdGVtSGVpZ2h0PXs0Mn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS12aXJ0dWFsLXdyYXBwZXJgfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4udmlydHVhbExpc3RTdHlsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB7Li4udmlydHVhbExpc3RQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHJvdzogSUJhc2VPYmplY3QsIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PixcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYICYmIGhlYWRlckFmZml4ZWQgJiYgKFxuICAgICAgICA8QWZmaXhcbiAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgb2Zmc2V0Qm90dG9tPXswfVxuICAgICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gdGhpcy5tYWluVGFibGVCb2R5fVxuICAgICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwiYWZmaXhTY3JvbGxiYXJcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tYWZmaXhTY3JvbGxiYXJgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1hZmZpeFNjcm9sbGJhcl9zaG93YF06IGFmZml4ZWRCb3R0b20sXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIC4uLm1haW5UYWJsZVN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25TY3JvbGw9eyhlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+XG4gICAgICAgICAgICB0aGlzLnN5bmNUYWJsZVNjcm9sbFBvc2l0aW9uKGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNoYW5nZT17Ym9vbCA9PiB0aGlzLnNldFN0YXRlKHsgYWZmaXhlZEJvdHRvbTogYm9vbCB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHRoaXMubWFpblRhYmxlPy5zY3JvbGxXaWR0aCB9fSAvPlxuICAgICAgICA8L0FmZml4PlxuICAgICAgKSxcbiAgICBdXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUaENlbGwgPSAoY29sOiBJQ29sdW1uUHJvcHMsIG9wdGlvbnM/OiBJQmFzZU9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduLFxuICAgICAgY29sdW1uc1Jlc2l6YWJsZSxcbiAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0SGVhZENlbGxTdHlsZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcmVzaXphYmxlOiBjb2xSZXNpemFibGUgfSA9IGNvbFxuICAgIGxldCByZXNpemFibGUgPSB0cnVlXG4gICAgaWYgKHR5cGVvZiBjb2xSZXNpemFibGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXNpemFibGUgPSBjb2xSZXNpemFibGVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2x1bW5zUmVzaXphYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmVzaXphYmxlID0gY29sdW1uc1Jlc2l6YWJsZVxuICAgIH1cblxuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcsIGlzUmVzaXplclNob3cgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGlzTGFzdFRoID0gb3B0aW9ucyAmJiBvcHRpb25zLmluZGV4ID09PSBvcHRpb25zLmNvbHVtbnMubGVuZ3RoIC0gMVxuXG4gICAgY29uc3QgdGhDZWxsID0gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgYCR7cHJlZml4fS1jZWxsYCxcbiAgICAgICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZSAmJlxuICAgICAgICAgICAgZ2V0SGVhZENlbGxDbGFzc05hbWUoY29sLCBvcHRpb25zID8gb3B0aW9ucy5pbmRleCA6IHVuZGVmaW5lZClcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICAgIChjb2wuYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTltjb2wuYWxpZ25dKSB8fFxuICAgICAgICAgICAgKGFsaWduICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25dKSB8fFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIC4uLigoZ2V0SGVhZENlbGxTdHlsZSAmJlxuICAgICAgICAgICAgZ2V0SGVhZENlbGxTdHlsZShjb2wsIG9wdGlvbnMgPyBvcHRpb25zLmluZGV4IDogdW5kZWZpbmVkKSkgfHxcbiAgICAgICAgICAgIHt9KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyFjb2wub25Tb3J0ICYmXG4gICAgICAgICAgKGNvbC5zb3J0T3JkZXIgPT09IG51bGwgfHwgY29sLnNvcnRPcmRlciA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICFjb2wub25GaWx0ZXIgJiZcbiAgICAgICAgICAhY29sLmZpbHRlcnMgJiZcbiAgICAgICAgICBjb2wudGl0bGV9XG4gICAgICAgIHsoISFjb2wub25Tb3J0IHx8XG4gICAgICAgICAgKGNvbC5zb3J0T3JkZXIgIT09IG51bGwgJiYgY29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSkgJiYgKFxuICAgICAgICAgIDxUYWJsZVNvcnRcbiAgICAgICAgICAgIG9uU29ydD17b3JkZXIgPT4gKGNvbC5vblNvcnQgPyBjb2wub25Tb3J0KG9yZGVyKSA6IHt9KX1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17Y29sLnNvcnRPcmRlcn1cbiAgICAgICAgICAgIHRpdGxlPXtjb2wudGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyghIWNvbC5vbkZpbHRlciB8fCAhIWNvbC5maWx0ZXJzKSAmJiAoXG4gICAgICAgICAgPFRhYmxlRmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlPXtjb2wuZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgICAgIGZpbHRlclZpc2libGU9e2NvbC5maWx0ZXJWaXNpYmxlfVxuICAgICAgICAgICAgZmlsdGVyTXVsdGlwbGU9e2NvbC5maWx0ZXJNdWx0aXBsZX1cbiAgICAgICAgICAgIGZpbHRlclBvcG92ZXJQcm9wcz17Y29sLmZpbHRlclBvcG92ZXJQcm9wc31cbiAgICAgICAgICAgIGZpbHRlcnM9e2NvbC5maWx0ZXJzfVxuICAgICAgICAgICAgb25GaWx0ZXI9e2ZpbHRlciA9PiB7XG4gICAgICAgICAgICAgIGlmIChjb2wub25GaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb2wub25GaWx0ZXIoZmlsdGVyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlPXt2aXNpYmxlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNvbC5vbkZpbHRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjb2wub25GaWx0ZXJWaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0aXRsZT17Y29sLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHshY29sLmZpeGVkICYmIHJlc2l6YWJsZSAmJiAhaXNMYXN0VGggJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXJlc2l6ZXJgLCB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJlc2l6ZXJfc2hvd2BdOiBpc1Jlc2l6ZXJTaG93LFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yZXNpemVyX2N1cnJlbnRgXTpcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZy5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sKX1cbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgaWYgKGNvbC5wb3BvdmVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC4zfVxuICAgICAgICAgIHBsYWNlbWVudD17XG4gICAgICAgICAgICBjb2wuYWxpZ24gPT09IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPyBcInRvcFwiXG4gICAgICAgICAgICAgIDogY29sLmFsaWduID09PSBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgOiBcInRvcExlZnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbkVkZ2VcbiAgICAgICAgICBhcnJvd2VkXG4gICAgICAgICAgcG9wdXA9e2NvbC5wb3BvdmVyfVxuICAgICAgICA+XG4gICAgICAgICAge3RoQ2VsbH1cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhDZWxsXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYm9keUNlbGwgPSAoXG4gICAgcm93OiBJQmFzZU9iamVjdCxcbiAgICBjZWxsOiBJQ29sdW1uUHJvcHMsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjZWxsSW5kZXg6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGlnbjogYWxpZ25Qcm9wLFxuICAgICAgZXhwYW5kSWNvblZpc2libGUsXG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0Q2VsbFByb3BzLFxuICAgICAgZ2V0Q2VsbFN0eWxlLFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ25Qcm9wLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlYWRQbGFjZWhvbGRlclZpc2libGUgPVxuICAgICAgZXhwYW5kSWNvblZpc2libGUgJiYgKCEhb25TZWxlY3RDaGFuZ2UgfHwgISFvbkV4cGFuZENoYW5nZSlcbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nLCBmaXhlZENvbHVtbnNJbmZvcywgcmVzaXplZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduLFxuICAgICAgZGF0YUluZGV4LFxuICAgICAgZmlsdGVycyxcbiAgICAgIG9uRmlsdGVyLFxuICAgICAgb25Tb3J0LFxuICAgICAgcmVuZGVyLFxuICAgICAgc29ydE9yZGVyLFxuICAgICAgdGl0bGUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IGNlbGxcbiAgICBjb25zdCBjbGlja2FibGUgPVxuICAgICAgISFvblNvcnQgfHxcbiAgICAgIChzb3J0T3JkZXIgIT09IG51bGwgJiYgc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAhIW9uRmlsdGVyIHx8XG4gICAgICAhIWZpbHRlcnNcbiAgICBsZXQgbWluV2lkdGggPSAwXG4gICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbWluV2lkdGggPVxuICAgICAgICBNYXRoLmNlaWwodGl0bGUubGVuZ3RoID4gNCA/IHRpdGxlLmxlbmd0aCAvIDIgOiB0aXRsZS5sZW5ndGgpICogMTMgKyAxNlxuICAgICAgaWYgKGNsaWNrYWJsZSkge1xuICAgICAgICBtaW5XaWR0aCArPSAyMFxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZmxleFZhbHVlXG4gICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGh9IDAgYXV0b2BcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHdpZHRoLmxlbmd0aCAtIHdpZHRoLmxhc3RJbmRleE9mKFwicHhcIikgPT09IDIpIHtcbiAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGguc2xpY2UoMCwgLTIpfSAwIGF1dG9gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGV4VmFsdWUgPSBgMCAwICR7d2lkdGh9YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmbGV4VmFsdWUgPSBgJHtNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKX0gMCBhdXRvYFxuICAgIH1cbiAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICBjb25zdCBjZWxsQ2xhc3NOYW1lID1cbiAgICAgIGdldENlbGxDbGFzc05hbWUgJiYgZ2V0Q2VsbENsYXNzTmFtZShyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpXG4gICAgY29uc3QgY2VsbFByb3BzID1cbiAgICAgIChnZXRDZWxsUHJvcHMgJiYgZ2V0Q2VsbFByb3BzKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleCkpIHx8IHt9XG4gICAgY29uc3QgY2VsbFN0eWxlID1cbiAgICAgIChnZXRDZWxsU3R5bGUgJiYgZ2V0Q2VsbFN0eWxlKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleCkpIHx8IHt9XG4gICAgY29uc3QgeyByb3dTcGFuLCBjb2xTcGFuLCAuLi5vdGhlckNlbGxQcm9wcyB9ID0gY2VsbFByb3BzXG4gICAgaWYgKHJvd1NwYW4gfHwgY29sU3Bhbikge1xuICAgICAgdGhpcy5jb21iaW5lZENlbGxzSW5mby5wdXNoKHtcbiAgICAgICAgY2VsbCxcbiAgICAgICAgY2VsbEluZGV4LFxuICAgICAgICBjb2xTcGFuLFxuICAgICAgICByb3csXG4gICAgICAgIHJvd0luZGV4LFxuICAgICAgICByb3dTcGFuLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGRgLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfcmVzaXppbmdgXTpcbiAgICAgICAgICAgIGRhdGFJbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZy5kYXRhSW5kZXggPT09IGRhdGFJbmRleCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0YF06IGlzRml4ZWRMZWZ0KGNlbGwpLFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX3JpZ2h0YF06IGlzRml4ZWRSaWdodChjZWxsKSxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0TGFzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgbyA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICBvID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfY29tYmluZWRgXTogcm93U3BhbiB8fCBjb2xTcGFuLFxuICAgICAgICB9KX1cbiAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgY2VsbEluZGV4fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGxlZnQ6IGlzRml4ZWRMZWZ0KGNlbGwpXG4gICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleCk/Lm9mZnNldCB8fFxuICAgICAgICAgICAgICAgIDApICsgKHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlID8gU0VMRUNUX1REX1dJRFRIIDogMClcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHJpZ2h0OiBpc0ZpeGVkUmlnaHQoY2VsbClcbiAgICAgICAgICAgID8gZml4ZWRDb2x1bW5zSW5mb3MuZmluZChvID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpPy5vZmZzZXRcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZsZXg6IHJlc2l6ZWRDb2wgPyBgJHtyZXNpemVkQ29sLnZhbHVlfSAwIGF1dG9gIDogZmxleFZhbHVlLFxuICAgICAgICAgIHdpZHRoOiByZXNpemVkQ29sXG4gICAgICAgICAgICA/IHJlc2l6ZWRDb2wudmFsdWVcbiAgICAgICAgICAgIDogd2lkdGggfHwgTWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCksXG4gICAgICAgICAgbWF4V2lkdGg6IHJlc2l6ZWRDb2wgPyByZXNpemVkQ29sLnZhbHVlIDogd2lkdGggfHwgXCJcIixcbiAgICAgICAgfX1cbiAgICAgICAgcm9sZT1cImNlbGxcIlxuICAgICAgICBkYXRhLXJvdz17cm93SW5kZXh9XG4gICAgICAgIGRhdGEtY29sdW1uPXtjZWxsSW5kZXh9XG4gICAgICAgIHsuLi5vdGhlckNlbGxQcm9wc31cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWNlbGxgLCBjZWxsQ2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYWxpZ25JdGVtczpcbiAgICAgICAgICAgICAgKHZlcnRpY2FsQWxpZ24gJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnbl0pIHx8XG4gICAgICAgICAgICAgICh2ZXJ0aWNhbEFsaWduUHJvcCAmJiBWRVJUSUNBTF9BTElHTlt2ZXJ0aWNhbEFsaWduUHJvcF0pIHx8XG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlxuICAgICAgICAgICAgICAoYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnbl0pIHx8XG4gICAgICAgICAgICAgIChhbGlnblByb3AgJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnblByb3BdKSB8fFxuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAuLi5jZWxsU3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxJbm5lcmB9PlxuICAgICAgICAgICAge3JlbmRlciA/IHJlbmRlcihyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpIDogcm93W2RhdGFJbmRleF19XG4gICAgICAgICAgICB7KHJvd1NwYW4gfHwgY29sU3BhbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxfY29tYmluZWRgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvbWJpbmVkQ2VsbFN0eWxlKFxuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW4sXG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW5cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JlbmRlclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXIocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KVxuICAgICAgICAgICAgICAgICAgOiByb3dbZGF0YUluZGV4XX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21iaW5lZENlbGxTdHlsZSA9IChcbiAgICBfOiBJQmFzZU9iamVjdCxcbiAgICBfXzogSUNvbHVtblByb3BzLFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sSW5kZXg6IG51bWJlcixcbiAgICByb3dTcGFuOiBudW1iZXIsXG4gICAgY29sU3BhbjogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IGdldFRhYmxlQ2VsbCA9IChyb3dJbmRleFBhcmFtOiBudW1iZXIsIGNvbEluZGV4UGFyYW06IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMubWFpblRhYmxlKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMubWFpblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwicm93XCJdJylbXG4gICAgICAgICAgcm93SW5kZXhQYXJhbVxuICAgICAgICBdXG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuW2NvbEluZGV4UGFyYW1dXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IGNlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge31cbiAgICBpZiAocm93U3BhbiA8IDIgfHwgdHlwZW9mIHJvd1NwYW4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgIHN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gMXB4KVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZENlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXggKyByb3dTcGFuIC0gMSwgY29sSW5kZXgpXG4gICAgICBpZiAoY2VsbCAmJiBlbmRDZWxsKSB7XG4gICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCBlbmRDZWxsUmVjdCA9IGVuZENlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHtlbmRDZWxsUmVjdC5oZWlnaHQgK1xuICAgICAgICAgIGVuZENlbGxSZWN0LnRvcCAtXG4gICAgICAgICAgY2VsbFJlY3QudG9wIC1cbiAgICAgICAgICAxfXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2xTcGFuIDwgMiB8fCB0eXBlb2YgY29sU3BhbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSAtIDFweClcIlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbmRDZWxsID0gZ2V0VGFibGVDZWxsKHJvd0luZGV4LCBjb2xJbmRleCArIGNvbFNwYW4gLSAxKVxuICAgICAgaWYgKGNlbGwgJiYgZW5kQ2VsbCkge1xuICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZW5kQ2VsbFJlY3QgPSBlbmRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtlbmRDZWxsUmVjdC53aWR0aCArXG4gICAgICAgICAgZW5kQ2VsbFJlY3QubGVmdCAtXG4gICAgICAgICAgY2VsbFJlY3QubGVmdCAtXG4gICAgICAgICAgMX1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlUmVmID0gKFxuICAgIG5hbWU/OlxuICAgICAgfCBcImFmZml4SGVhZGVyXCJcbiAgICAgIHwgXCJhZmZpeFNjcm9sbGJhclwiXG4gICAgICB8IFwibWFpblRhYmxlXCJcbiAgICAgIHwgXCJtYWluVGFibGVCb2R5XCJcbiAgICAgIHwgXCJtYWluVGhlYWRcIlxuICAgICAgfCBcIndyYXBwZXJcIlxuICApID0+IChub2RlOiBhbnkpID0+IHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgdGhpc1tuYW1lXSA9IG5vZGVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRhdGFTb3VyY2UsXG4gICAgICBlbXB0eVRleHQsXG4gICAgICBoZWFkZXJBZmZpeGVkLFxuICAgICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcCxcbiAgICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0LFxuICAgICAgaGVhZGVyRW1waGFzaXplZCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBzaXplLFxuICAgICAgdmlydHVhbFNjcm9sbCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImFsaWduXCIsXG4gICAgICBcImNoaWxkcmVuXCIsXG4gICAgICBcImNvbHVtbnNcIixcbiAgICAgIFwiY29sdW1uc1Jlc2l6YWJsZVwiLFxuICAgICAgXCJkZWZhdWx0RXhwYW5kZWRSb3dLZXlzXCIsXG4gICAgICBcImRlZmF1bHRTZWxlY3RlZFJvd0tleXNcIixcbiAgICAgIFwiZXhwYW5kSWNvblZpc2libGVcIixcbiAgICAgIFwiZXhwYW5kT25Sb3dDbGlja1wiLFxuICAgICAgXCJleHBhbmRlZFJvd0tleXNcIixcbiAgICAgIFwiZXhwYW5kZWRSb3dSZW5kZXJcIixcbiAgICAgIFwiZ2V0Q2VsbENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRDZWxsUHJvcHNcIixcbiAgICAgIFwiZ2V0Q2VsbFN0eWxlXCIsXG4gICAgICBcImdldEhlYWRDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0SGVhZFN0eWxlXCIsXG4gICAgICBcImdldEhlYWRDZWxsQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldEhlYWRDZWxsU3R5bGVcIixcbiAgICAgIFwiZ2V0Um93Q2xhc3NOYW1lXCIsXG4gICAgICBcImdldFJvd1N0eWxlXCIsXG4gICAgICBcImdldFNlbGVjdFByb3BzXCIsXG4gICAgICBcIm9uRXhwYW5kQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VsZWN0Q2hhbmdlXCIsXG4gICAgICBcIm9uU2Nyb2xsXCIsXG4gICAgICBcIm9uUm93Q2xpY2tcIixcbiAgICAgIFwib25Sb3dNb3VzZUVudGVyXCIsXG4gICAgICBcIm9uUm93TW91c2VMZWF2ZVwiLFxuICAgICAgXCJzZWxlY3RNdWx0aXBsZVwiLFxuICAgICAgXCJzZWxlY3RlZFJvd0tleXNcIixcbiAgICAgIFwic2VsZWN0T25Sb3dDbGlja1wiLFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduXCIsXG4gICAgICBcInZpcnR1YWxMaXN0UHJvcHNcIixcbiAgICAgIFwidmlydHVhbExpc3RTdHlsZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpc01haW5UYWJsZU92ZXJmbG93WCwgaXNNYWluVGFibGVPdmVyZmxvd1kgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgdGhpcy5jb2x1bW5NYW5hZ2VyLnJlc2V0KGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGNvbnN0IHsgZ2V0R3JvdXBDb2x1bW5zRGVwdGggfSA9IHRoaXMuY29sdW1uTWFuYWdlclxuXG4gICAgY29uc3QgZW1wdHkgPSAhKGRhdGFTb3VyY2UgJiYgZGF0YVNvdXJjZS5sZW5ndGgpXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LXdyYXBwZXJgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0taGVhZGVyRW1waGFzaXplZGBdOiBoZWFkZXJFbXBoYXNpemVkLFxuICAgICAgICBbYCR7cHJlZml4fS1lbXB0eWBdOiBlbXB0eSxcbiAgICAgICAgW2Ake3ByZWZpeH0tbG9hZGluZ2BdOiBsb2FkaW5nLFxuICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvdy14YF06IGlzTWFpblRhYmxlT3ZlcmZsb3dYLFxuICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvdy15YF06IGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgICBbYCR7cHJlZml4fS12aXJ0dWFsU2Nyb2xsYF06IHZpcnR1YWxTY3JvbGwsXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gcmVmPXt0aGlzLnNhdmVSZWYoXCJ3cmFwcGVyXCIpfSB7Li4ucmVzdFByb3BzfT5cbiAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiZmFkZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICB0b3A6IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl19cHhgLFxuICAgICAgICAgICAgekluZGV4OiBcImNhbGModmFyKC0tei1pbmRleC1hZmZpeCkgKyAyKVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bG9hZGluZyAmJlxuICAgICAgICAgICAgKGhlYWRlckFmZml4ZWQgPyAoXG4gICAgICAgICAgICAgIDxBZmZpeFxuICAgICAgICAgICAgICAgIG9mZnNldFRvcD17XG4gICAgICAgICAgICAgICAgICAoaGVhZGVyQWZmaXhlZE9mZnNldFRvcCB8fCAwKSArIFREX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLndyYXBwZXJ9XG4gICAgICAgICAgICAgICAgZ2V0VGFyZ2V0PXtoZWFkZXJBZmZpeEdldFRhcmdldH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICA8L0FmZml4PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfT5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRhYmxlc2AsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWlubmVyU2Nyb2xsYF06ICEhaGVpZ2h0LFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0tb3ZlcmZsb3dlZGBdOiBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWhhc0ZpeGVkUmlnaHRDb2x1bW5zYF06IHRoaXMuY29sdW1uTWFuYWdlci5pc0FueUNvbHVtbnNSaWdodEZpeGVkKCksXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1heEhlaWdodDogaGVpZ2h0IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGhlaWdodFxuICAgICAgICAgICAgICA/IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl0gKiBnZXRHcm91cENvbHVtbnNEZXB0aCgpfXB4YFxuICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYWluVGFibGVgfVxuICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJtYWluVGFibGVcIil9XG4gICAgICAgICAgICByb2xlPVwidGFibGVcIlxuICAgICAgICAgICAgb25TY3JvbGw9e3RoaXMuaGFuZGxlTWFpblRhYmxlU2Nyb2xsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGFibGUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtlbXB0eSAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wbGFjZWhvbGRlcmB9PntlbXB0eVRleHR9PC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnBvbHlmaWxsKFRhYmxlKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxuIl19