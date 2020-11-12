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

        var generateTr = function generateTr(columnsParam) {
          columnsParam.forEach(function (col, colIndex) {
            if (!col.children) {
              colArray.push(_this.generateTbodyCell(row, col, rowIndex, colIndex));
            } else {
              generateTr(col.children);
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
        })) === null || _fixedColumnsInfos$fi6 === void 0 ? void 0 : _fixedColumnsInfos$fi6.isFirstRight), _classNames9)),
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
        style: _this.getCombinedCellStyle(row, cell, rowIndex, cellIndex, rowSpan, colSpan)
      }, render ? render(row, cell, rowIndex, cellIndex) : row[dataIndex]))));
    };

    _this.getCombinedCellStyle = function (_, col, rowIndex, colIndex, rowSpan, colSpan) {
      var getTableCell = function getTableCell(rowIndexParam, colIndexParam, fixed) {
        if (_this.mainTable && !fixed) {
          var _row = _this.mainTable.querySelectorAll('[role="row"]')[rowIndexParam];

          if (_row) {
            return _row.children[colIndexParam];
          }
        }

        return null;
      };

      var cell = getTableCell(rowIndex, colIndex, col.fixed);
      var style = {};

      if (rowSpan < 2 || typeof rowSpan === "undefined") {
        style.height = "calc(100% - 1px)";
      } else {
        var endCell = getTableCell(rowIndex + rowSpan - 1, colIndex, col.fixed);

        if (cell && endCell) {
          var cellRect = cell.getBoundingClientRect();
          var endCellRect = endCell.getBoundingClientRect();
          style.height = "".concat(endCellRect.height + endCellRect.top - cellRect.top - 1, "px");
        }
      }

      if (colSpan < 2 || typeof colSpan === "undefined") {
        style.width = "calc(100% - 1px)";
      } else {
        var _endCell = getTableCell(rowIndex, colIndex + colSpan - 1, col.fixed);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJURF9NSU5fV0lEVEgiLCJTRUxFQ1RfVERfV0lEVEgiLCJURF9IRUlHSFQiLCJsYXJnZSIsIm1lZGl1bSIsIm1pbmkiLCJzbWFsbCIsIkhPUklaT05UQUxfQUxJR04iLCJjZW50ZXIiLCJsZWZ0IiwicmlnaHQiLCJWRVJUSUNBTF9BTElHTiIsImJvdHRvbSIsInRvcCIsImlzRml4ZWRMZWZ0IiwiY29sIiwiZml4ZWQiLCJpc0ZpeGVkUmlnaHQiLCJUYWJsZSIsInByb3BzIiwiY29tYmluZWRDZWxsc0luZm8iLCJhZmZpeEhlYWRlciIsImFmZml4U2Nyb2xsYmFyIiwibWFpblRhYmxlIiwibWFpblRhYmxlQm9keSIsIm1haW5UaGVhZCIsIndyYXBwZXIiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJyZXNpemVFdmVudCIsImNvbHVtbk1hbmFnZXIiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJoZWFkZXJBZmZpeGVkIiwiaGVpZ2h0IiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJkYXRhU291cmNlT2xkIiwiZGF0YVNvdXJjZSIsImdldENlbGxQcm9wc09sZCIsImdldENlbGxQcm9wcyIsInNldFRpbWVvdXQiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlIiwiY2xlYXIiLCJyZXNpemVDb2x1bW5TdGFydCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImN1cnJlbnRseVJlc2l6aW5nIiwiZGF0YUluZGV4IiwicGFyZW50V2lkdGgiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3RhcnRYIiwicGFnZVgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplQ29sdW1uTW92aW5nIiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplZCIsImJhc2VXaWR0aCIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJuZXdSZXNpemVkIiwiZmlsdGVyIiwibyIsIm5ld1dpZHRoIiwibWF4Iiwib25Tb3J0Iiwib25GaWx0ZXIiLCJwdXNoIiwidmFsdWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNNYWluVGFibGVPdmVyZmxvd1giLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiaXNNYWluVGFibGVPdmVyZmxvd1kiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpc1Jlc2l6ZXJTaG93Iiwib2xkU3R5bGUiLCJtYWluVGFibGVTdHlsZSIsInJlY3QiLCJoYW5kbGVNYWluVGFibGVTY3JvbGwiLCJvblNjcm9sbCIsImFmZml4ZWRUb3AiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJmaXhlZE5vZGUiLCJzY3JvbGxMZWZ0Iiwic3luY1RhYmxlU2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVSb3dDbGljayIsInJvdyIsImkiLCJleHBhbmRPblJvd0NsaWNrIiwiZ2V0U2VsZWN0UHJvcHMiLCJvblJvd0NsaWNrIiwic2VsZWN0T25Sb3dDbGljayIsInNlbGVjdGVkUm93S2V5cyIsImtleSIsImRpc2FibGVkIiwiaGFuZGxlU2VsZWN0IiwiaW5jbHVkZXMiLCJoYW5kbGVFeHBhbmQiLCJoYW5kbGVUaFJlc2l6ZSIsImluZGV4IiwiZml4ZWRQb3NpdGlvbiIsImdldENvbHVtbnMiLCJmaXhlZENvbHVtbnNJbmZvcyIsImNvbHVtbnMiLCJmaW5kIiwicCIsImZpbmRJbmRleCIsInNwbGljZSIsInNvcnQiLCJhIiwiYiIsImZpeGVkQ29sdW1uc0luZm9zTGVmdCIsImZpeGVkQ29sdW1uc0luZm9zUmlnaHQiLCJmb3JFYWNoIiwiY29sSW5kZXgiLCJpc0xhc3RMZWZ0Iiwib2Zmc2V0Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJpc0ZpcnN0UmlnaHQiLCJoYW5kbGVUaGVhZE1vdXNlRW50ZXIiLCJoYW5kbGVUaGVhZE1vdXNlTGVhdmUiLCJPYmplY3QiLCJrZXlzIiwiZXhwYW5kZWRSb3dLZXlzUHJvcCIsImV4cGFuZGVkUm93S2V5cyIsIm9uRXhwYW5kQ2hhbmdlIiwiaW5kZXhPZiIsImNoZWNrZWQiLCJvblNlbGVjdENoYW5nZSIsInNlbGVjdGVkUm93S2V5c1Byb3AiLCJzZWxlY3RNdWx0aXBsZSIsImhhbmRsZVNlbGVjdEFsbCIsImF2YWlsYWJsZUtleXMiLCJnZXRBdmFpbGFibGVSb3dzS2V5cyIsImhhc1NlbGVjdGVkQWxsIiwiZXZlcnkiLCJnZW5lcmF0ZVRhYmxlIiwiZXhwYW5kSWNvblZpc2libGUiLCJleHBhbmRlZFJvd1JlbmRlciIsImdldEhlYWRDbGFzc05hbWUiLCJnZXRIZWFkU3R5bGUiLCJnZXRSb3dDbGFzc05hbWUiLCJnZXRSb3dTdHlsZSIsImhlYWRlckFmZml4ZWRPZmZzZXRUb3AiLCJoZWFkZXJBZmZpeEdldFRhcmdldCIsIm9uUm93TW91c2VFbnRlciIsIm9uUm93TW91c2VMZWF2ZSIsInNpemUiLCJ2ZXJ0aWNhbEFsaWduIiwidmlydHVhbExpc3RQcm9wcyIsInZpcnR1YWxMaXN0U3R5bGUiLCJ2aXJ0dWFsU2Nyb2xsIiwiYWZmaXhlZEJvdHRvbSIsImdldEdyb3VwQ29sdW1uc0RlcHRoIiwiaXNBbnlDb2x1bW5zTGVmdEZpeGVkIiwidGhlYWRTdHlsZSIsInRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlIiwidGhlYWQiLCJzYXZlUmVmIiwibWFwIiwiYWxpZ24iLCJmaWx0ZXJzIiwic29ydE9yZGVyIiwicmVzaXplZENvbCIsImNsaWNrYWJsZSIsInVuZGVmaW5lZCIsIm1pbldpZHRoIiwiZmxleFZhbHVlIiwibGFzdEluZGV4T2YiLCJ3aWR0aFJlc2l6ZSIsImZsZXgiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImdlbmVyYXRlVGhDZWxsIiwiY2hpbGRyZW4iLCJjaGlsZENvbCIsImNoaWxkQ29sSW5kZXgiLCJncmFuZENvbCIsImdyYW5kQ29sSW5kZXgiLCJnZW5lcmF0ZVRycyIsInJvd0luZGV4IiwiY29sQXJyYXkiLCJzZWxlY3RQcm9wc0dldHRlZCIsImFsbFNlbGVjdFByb3BzIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwic2VsZWN0UHJvcHMiLCJzZWxlY3RDZWxsIiwiZ2VuZXJhdGVUciIsImNvbHVtbnNQYXJhbSIsImdlbmVyYXRlVGJvZHlDZWxsIiwidHIiLCJhbGlnbkl0ZW1zIiwicG9wb3ZlclByb3BzIiwicG9wdXAiLCJib29sIiwiZGlzcGxheSIsInpJbmRleCIsImZsZXhEaXJlY3Rpb24iLCJvcHRpb25zIiwiY29sdW1uc1Jlc2l6YWJsZSIsImdldEhlYWRDZWxsQ2xhc3NOYW1lIiwiZ2V0SGVhZENlbGxTdHlsZSIsImNvbFJlc2l6YWJsZSIsInJlc2l6YWJsZSIsImlzTGFzdFRoIiwidGhDZWxsIiwianVzdGlmeUNvbnRlbnQiLCJvcmRlciIsImZpbHRlcmVkVmFsdWUiLCJmaWx0ZXJWaXNpYmxlIiwiZmlsdGVyTXVsdGlwbGUiLCJmaWx0ZXJQb3BvdmVyUHJvcHMiLCJ2aXNpYmxlIiwib25GaWx0ZXJWaXNpYmxlQ2hhbmdlIiwicG9wb3ZlciIsImNlbGwiLCJjZWxsSW5kZXgiLCJhbGlnblByb3AiLCJnZXRDZWxsQ2xhc3NOYW1lIiwiZ2V0Q2VsbFN0eWxlIiwidmVydGljYWxBbGlnblByb3AiLCJyZW5kZXIiLCJjZWxsQ2xhc3NOYW1lIiwiY2VsbFByb3BzIiwiY2VsbFN0eWxlIiwicm93U3BhbiIsImNvbFNwYW4iLCJvdGhlckNlbGxQcm9wcyIsImdldENvbWJpbmVkQ2VsbFN0eWxlIiwiXyIsImdldFRhYmxlQ2VsbCIsInJvd0luZGV4UGFyYW0iLCJjb2xJbmRleFBhcmFtIiwicXVlcnlTZWxlY3RvckFsbCIsImVuZENlbGwiLCJjZWxsUmVjdCIsImVuZENlbGxSZWN0IiwibmFtZSIsIm5vZGUiLCJkZWZhdWx0RXhwYW5kZWRSb3dLZXlzIiwiZGVmYXVsdFNlbGVjdGVkUm93S2V5cyIsIkNvbHVtbk1hbmFnZXIiLCJlbXB0eVRleHQiLCJoZWFkZXJFbXBoYXNpemVkIiwibG9hZGluZyIsIm90aGVyUHJvcHMiLCJyZXN0UHJvcHMiLCJyZXNldCIsImVtcHR5IiwiY2xhc3NTZXQiLCJwb3NpdGlvbiIsImlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQiLCJtYXhIZWlnaHQiLCJwYWRkaW5nVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDb2x1bW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyIsImFycmF5IiwiZnVuYyIsIm51bWJlciIsIkVycm9yIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV3U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFlBQWY7QUFDQSxJQUFNQyxZQUFZLEdBQUcsR0FBckI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsRUFBeEI7QUFDQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRSxFQURTO0FBRWhCQyxFQUFBQSxNQUFNLEVBQUUsRUFGUTtBQUdoQkMsRUFBQUEsSUFBSSxFQUFFLEVBSFU7QUFJaEJDLEVBQUFBLEtB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QixFQUFBQSxnQkFBZ0IsRUFBRSxFQXpDc0I7QUEwQ3hDQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQTFDc0I7QUEyQ3hDQyxFQUFBQSxhQUFhLEVBQUU7QUEzQ3lCLEM7O0FBak50QzNKLEssQ0ErUFVpUix3QixHQUEyQixpQkFLdEI7QUFBQSxNQUpqQi9GLFFBSWlCLFNBSmpCQSxRQUlpQjtBQUFBLE1BSGpCMUUsT0FHaUIsU0FIakJBLE9BR2lCO0FBQUEsTUFGakJ3QixlQUVpQixTQUZqQkEsZUFFaUI7QUFBQSxNQURqQm5DLGVBQ2lCLFNBRGpCQSxlQUNpQjtBQUNqQixNQUFNcUwsUUFBOEIsR0FBRyxFQUF2Qzs7QUFDQSxNQUFJaEcsUUFBUSxLQUFLLElBQWIsSUFBcUIxRSxPQUFPLEtBQUssSUFBckMsRUFBMkM7QUFDekMwSyxJQUFBQSxRQUFRLENBQUNoRyxRQUFULEdBQW9CMUUsT0FBTyxJQUFJMEUsUUFBL0I7QUFDRDs7QUFDRCxNQUFJbEQsZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCa0osSUFBQUEsUUFBUSxDQUFDbEosZUFBVCxHQUEyQkEsZUFBM0I7QUFDRDs7QUFDRCxNQUFJbkMsZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCcUwsSUFBQUEsUUFBUSxDQUFDckwsZUFBVCxHQUEyQkEsZUFBM0I7QUFDRDs7QUFDRCxTQUFPZ0MsTUFBTSxDQUFDQyxJQUFQLENBQVlvSixRQUFaLEVBQXNCNVAsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUM0UCxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O0FBMjNDSCxxQ0FBU2xSLEtBQVQ7ZUFFZUEsSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2ludGVyYWN0aXZlLXN1cHBvcnRzLWZvY3VzICovXG4vKipcbiAqIFRhYmxlIOe7hOS7tuWwhuS4jeS8muS/ruaUueaIkCBGdW5jdGlvbkNvbXBvbmVudO+8jFxuICog5Zug5Li66ICD6JmR5Yiw5LmL5YmN5Zyo5L2/55So5pe25a2Y5Zyo5LiN5bCR6YCa6L+HIOWunuS+iy50YWJsZSDnmoTmlrnms5Xnm7TmjqXorr/pl64gPHRhYmxlIC8+IOWFg+e0oOeahOeUqOazleOAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyXCJcbmltcG9ydCBMaXN0IGZyb20gXCJyYy12aXJ0dWFsLWxpc3RcIlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiZGVib3VuY2VcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IENvbHVtbiwgeyBJQ29sdW1uUHJvcHMgfSBmcm9tIFwiLi9Db2x1bW5cIlxuaW1wb3J0IEFmZml4IGZyb20gXCIuLi9hZmZpeFwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94XCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi4vcmFkaW9cIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFRhYmxlU29ydCBmcm9tIFwiLi9UYWJsZVNvcnRcIlxuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gXCIuL1RhYmxlRmlsdGVyXCJcbmltcG9ydCBDb2x1bW5NYW5hZ2VyIGZyb20gXCIuL0NvbHVtbk1hbmFnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5pbnRlcmZhY2UgSUZpeGVkQ29sdW1uc0luZm8ge1xuICB3aWR0aDogbnVtYmVyXG4gIGRhdGFJbmRleDogc3RyaW5nXG4gIGZpeGVkOiBcImxlZnRcIiB8IFwicmlnaHRcIlxuICBpbmRleDogbnVtYmVyXG4gIGlzTGFzdExlZnQ/OiBib29sZWFuXG4gIGlzRmlyc3RSaWdodD86IGJvb2xlYW5cbiAgb2Zmc2V0PzogbnVtYmVyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJsZVwiXG5jb25zdCBURF9NSU5fV0lEVEggPSAxMDBcbmNvbnN0IFNFTEVDVF9URF9XSURUSCA9IDUwXG5jb25zdCBURF9IRUlHSFQgPSB7XG4gIGxhcmdlOiA2MCxcbiAgbWVkaXVtOiA1MCxcbiAgbWluaTogNDAsXG4gIHNtYWxsOiA0MCxcbn1cbmNvbnN0IEhPUklaT05UQUxfQUxJR04gPSB7XG4gIGNlbnRlcjogXCJjZW50ZXJcIiBhcyBcImNlbnRlclwiLFxuICBsZWZ0OiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbiAgcmlnaHQ6IFwiZmxleC1lbmRcIiBhcyBcImZsZXgtZW5kXCIsXG59XG5jb25zdCBWRVJUSUNBTF9BTElHTiA9IHtcbiAgYm90dG9tOiBcImZsZXgtZW5kXCIgYXMgXCJmbGV4LWVuZFwiLFxuICBjZW50ZXI6IFwiY2VudGVyXCIgYXMgXCJjZW50ZXJcIixcbiAgdG9wOiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbn1cbmNvbnN0IGlzRml4ZWRMZWZ0ID0gKGNvbDogSUJhc2VPYmplY3QpOiBib29sZWFuID0+XG4gIGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIgfHwgY29sLmZpeGVkID09PSB0cnVlXG5jb25zdCBpc0ZpeGVkUmlnaHQgPSAoY29sOiBJQmFzZU9iamVjdCk6IGJvb2xlYW4gPT4gY29sLmZpeGVkID09PSBcInJpZ2h0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVQcm9wcyB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog57uf5LiA5Zyw5o6n5Yi25YiX5rC05bmz6Z2g6b2Q5pa55ZCRXG4gICAqL1xuICBhbGlnbj86IG51bGwgfCBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCJcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBhbnlcbiAgLyoqXG4gICAqIOS7peaVsOe7hOeahOaWueW8j+S8oOWFpSBDb2x1bW5z77yM5aaC5p6c5Lyg5YWl5LqG5q2kIFByb3DvvIzliJkgVGFibGUg5Lya5b+955WlIGNoaWxkcmVuXG4gICAqL1xuICBjb2x1bW5zPzogSUNvbHVtblByb3BzW10gfCBudWxsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5o6n5Yi25pW05LiqIFRhYmxlIOeahCBDb2x1bW5zIOiDveWQpuiwg+aVtOWuveW6plxuICAgKi9cbiAgY29sdW1uc1Jlc2l6YWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDmlbDmja7mupBcbiAgICovXG4gIGRhdGFTb3VyY2U/OiBJQmFzZU9iamVjdFtdXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog56m65pWw5o2u5rqQ5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBlbXB0eVRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAqIDEuIOS9v+eUqCBleHBhbmRPblJvd0NsaWNrIOaIluiAhVxuICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgKi9cbiAgZXhwYW5kSWNvblZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgKi9cbiAgZXhwYW5kT25Sb3dDbGljaz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeS7juWklumDqOaOp+WItu+8jOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGV4cGFuZGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICovXG4gIGV4cGFuZGVkUm93UmVuZGVyPzogKHJvdz86IElCYXNlT2JqZWN0LCByb3dJbmRleD86IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLznmoTnsbvlkI3vvJoocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldENlbGxDbGFzc05hbWU/OiAoXG4gICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgY29sPzogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg/OiBudW1iZXIsXG4gICAgY29sSW5kZXg/OiBudW1iZXJcbiAgKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahOeUsee7hOS7tuinhOWumueahCBwcm9w77yMXG4gICAqIOWmgiByb3dTcGFuIGNvbFNwYW7vvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Q2VsbFByb3BzPzogKFxuICAgIHJvdz86IElCYXNlT2JqZWN0LFxuICAgIGNvbD86IElCYXNlT2JqZWN0LFxuICAgIHJvd0luZGV4PzogbnVtYmVyLFxuICAgIGNvbEluZGV4PzogbnVtYmVyXG4gICkgPT4gSUJhc2VPYmplY3QgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoQgc3R5bGXvvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Q2VsbFN0eWxlPzogKFxuICAgIHJvdz86IElCYXNlT2JqZWN0LFxuICAgIGNvbD86IElCYXNlT2JqZWN0LFxuICAgIHJvd0luZGV4PzogbnVtYmVyLFxuICAgIGNvbEluZGV4PzogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9riB0aGVhZCDnmoTnsbvlkI3vvJooKSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0SGVhZENsYXNzTmFtZT86ICgpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jCgpID0+ICh7fSlcbiAgICovXG4gIGdldEhlYWRTdHlsZT86ICgpID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKogVEgg55qE57G75ZCN77yaKGNvbCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRIZWFkQ2VsbENsYXNzTmFtZT86IChjb2w/OiBJQmFzZU9iamVjdCwgY29sSW5kZXg/OiBudW1iZXIpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u5q+P5LiqIFRIIOS4iueahCBzdHlsZe+8jChjb2wsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRIZWFkQ2VsbFN0eWxlPzogKFxuICAgIGNvbD86IElCYXNlT2JqZWN0LFxuICAgIGNvbEluZGV4PzogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+ihjOeahOexu+WQje+8mihyb3csIHJvd0luZGV4KSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0Um93Q2xhc3NOYW1lPzogKHJvdz86IElCYXNlT2JqZWN0LCByb3dJbmRleD86IG51bWJlcikgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/ooYznmoQgc3R5bGXvvIwocm93LCByb3dJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Um93U3R5bGU/OiAoXG4gICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg/OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6K6+572u5q+P5LiqIENoZWNrYm94L1JhZGlvIOS4iueahCBwcm9wIChyb3csIHJvd0luZGV4KSA9PiAoe30p77ybXG4gICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZ2V0U2VsZWN0UHJvcHM/OiAocm93PzogSUJhc2VPYmplY3QsIHJvd0luZGV4PzogbnVtYmVyKSA9PiBJQmFzZU9iamVjdFxuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB6KGo5aS05Zu65a6a5Yiw6aG16Z2i5LiKXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+R6KGo5aS05Zu65a6aXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlj4LogIMgPEFmZml4IC8+IOeahCBnZXRUYXJnZXQgUHJvcFxuICAgKi9cbiAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICAvKipcbiAgICog5Yqg6YeN5aS06YOo77yM5byA5ZCv5LmL5ZCO6KGo5aS05bCG5Lya5Yqg57KXICsg6IOM5pmvXG4gICAqL1xuICBoZWFkZXJFbXBoYXNpemVkPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a6auY5bqm5Lul5a6e546w6KGo5qC85YaF5rua5Yqo77yM5q2kIHByb3Ag5LiOIHByb3AgaGVhZGVyQWZmaXhlZCDkupLmlqXjgIJcbiAgICovXG4gIGhlaWdodD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuWKoOi9veS4rVxuICAgKi9cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv5bGV5byA5Yqf6IO955qE5Yik5pat77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKChrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBjbGljayBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93Q2xpY2s/OlxuICAgIHwgKChcbiAgICAgICAgcm93PzogSUJhc2VPYmplY3QsXG4gICAgICAgIHJvd0luZGV4PzogbnVtYmVyLFxuICAgICAgICBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgICAgICkgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dNb3VzZUVudGVyPzpcbiAgICB8ICgoXG4gICAgICAgIHJvdz86IElCYXNlT2JqZWN0LFxuICAgICAgICByb3dJbmRleD86IG51bWJlcixcbiAgICAgICAgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICAgICApID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDmr4/ooYznmoQgbW91c2VMZWF2ZSBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93TW91c2VMZWF2ZT86XG4gICAgfCAoKFxuICAgICAgICByb3c/OiBJQmFzZU9iamVjdCxcbiAgICAgICAgcm93SW5kZXg/OiBudW1iZXIsXG4gICAgICAgIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICAgICAgKSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6YCJ5oup5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/pgInmi6nlip/og73nmoTliKTmlq3vvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgb25TZWxlY3RDaGFuZ2U/OiAoKGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uU2Nyb2xsPzogKChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHlpJogLyDljZXpgInvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBzZWxlY3RNdWx0aXBsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkemAieaLqeOAglxuICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAqL1xuICBzZWxlY3RPblJvd0NsaWNrPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jFxuICAgKiDlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqM77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIHNlbGVjdGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgKi9cbiAgdmVydGljYWxBbGlnbj86IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIlxuICAvKipcbiAgICog6Jma5ouf5YiX6KGo55qEIFByb3Bz77yM6K+35Y+C6ICDIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgdmlydHVhbExpc3RQcm9wcz86IElCYXNlT2JqZWN0XG4gIC8qKlxuICAgKiDomZrmi5/liJfooajnmoTmoLflvI/vvIzor7flnKjov5nph4zmjIflrprlrr3luqbvvIzpu5jorqTlsIbkvJrmnIkgNTAwIHB4IOWuveW6plxuICAgKi9cbiAgdmlydHVhbExpc3RTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaYr+WQpuW8gOWQr+iZmuaLn+a7muWKqO+8jOatpCBQcm9wIOivt+mFjeWQiCBoZWlnaHQgUHJvcCDlkIzml7bkvb/nlKjvvIznlKjkuo7lpITnkIblpKfmlbDmja7ph4/kuIvnmoTomZrmi5/lhoXmu5rliqjvvJtcbiAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAqL1xuICB2aXJ0dWFsU2Nyb2xsPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcbiAgYWZmaXhlZFRvcDogYm9vbGVhblxuICBhZmZpeGVkQm90dG9tOiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY29tYmluZWRDZWxsc0luZm86IElCYXNlT2JqZWN0W11cbiAgZXhwYW5kZWRSb3dLZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+XG4gIGZpeGVkQ29sdW1uc0luZm9zOiBBcnJheTxJRml4ZWRDb2x1bW5zSW5mbz5cbiAgbWFpblRhYmxlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGJvb2xlYW5cbiAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGJvb2xlYW5cbiAgaXNSZXNpemVyU2hvdzogYm9vbGVhblxuICBjdXJyZW50bHlSZXNpemluZzogSUJhc2VPYmplY3RcbiAgcmVzaXplZDogSUJhc2VPYmplY3RbXVxuICBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbn1cblxuLyoqXG4gKiDooajmoLzmmK/kuIDnp43moLzlvI/ljJbkv6Hmga/nmoTlsZXnpLrlvaLlvI/jgILpgJrluLjmnI3liqHkuo7lpKfph4/mlbDmja7mtY/op4jjgIHnrqHnkIblnLrmma/jgIJcbiAqL1xuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVRhYmxlUHJvcHMsIElUYWJsZVN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgQ29sdW1uOiB0eXBlb2YgQ29sdW1uID0gQ29sdW1uXG5cbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog57uf5LiA5Zyw5o6n5Yi25YiX5rC05bmz6Z2g6b2Q5pa55ZCRXG4gICAgICovXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5Lul5pWw57uE55qE5pa55byP5Lyg5YWlIENvbHVtbnPvvIzlpoLmnpzkvKDlhaXkuobmraQgUHJvcO+8jOWImSBUYWJsZSDkvJrlv73nlaUgY2hpbGRyZW5cbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5o6n5Yi25pW05LiqIFRhYmxlIOeahCBDb2x1bW5zIOiDveWQpuiwg+aVtOWuveW6plxuICAgICAqL1xuICAgIGNvbHVtbnNSZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaVsOaNrua6kFxuICAgICAqL1xuICAgIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6buY6K6k6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOepuuaVsOaNrua6kOaXtuaYvuekuueahOWGheWuuVxuICAgICAqL1xuICAgIGVtcHR5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5pi+56S65bGV5byAIGljb27vvIzlpoLmnpzkuLogZmFsc2XvvIzmhI/lkbPnnYBcbiAgICAgKiAxLiDkvb/nlKggZXhwYW5kT25Sb3dDbGljayDmiJbogIVcbiAgICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgICAqL1xuICAgIGV4cGFuZEljb25WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBleHBhbmRPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHku47lpJbpg6jmjqfliLbvvIzlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd1JlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC855qE57G75ZCN77yaKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qE55Sx57uE5Lu26KeE5a6a55qEIHByb3DvvIxcbiAgICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRDZWxsUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Q2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg55qE57G75ZCN77yacG9zaXRpb24gPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg5LiK55qEIHN0eWxl77yMcG9zaXRpb24gPT4gKHt9KVxuICAgICAqL1xuICAgIGdldEhlYWRTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5LiqIFRIIOeahOexu+WQje+8mihjb2wsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKogVEgg5LiK55qEIHN0eWxl77yMKGNvbCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/ooYznmoTnsbvlkI3vvJoocm93LCByb3dJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRSb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+ihjOeahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Um93U3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeiuvue9ruavj+S4qiBDaGVja2JveC9SYWRpbyDkuIrnmoQgcHJvcCAocm93LCByb3dJbmRleCkgPT4gKHt9Ke+8m1xuICAgICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGdldFNlbGVjdFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbpnIDopoHooajlpLTlm7rlrprliLDpobXpnaLkuIpcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HooajlpLTlm7rlrppcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWPguiAgyA8QWZmaXggLz4g55qEIGdldFRhcmdldCBQcm9wXG4gICAgICovXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWKoOmHjeWktOmDqO+8jOW8gOWQr+S5i+WQjuihqOWktOWwhuS8muWKoOeylyArIOiDjOaZr1xuICAgICAqL1xuICAgIGhlYWRlckVtcGhhc2l6ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumumrmOW6puS7peWunueOsOihqOagvOWGhea7muWKqO+8jOatpCBwcm9wIOS4jiBwcm9wIGhlYWRlckFmZml4ZWQg5LqS5pal44CCXG4gICAgICovXG4gICAgaGVpZ2h0OiAocHJvcHM6IElUYWJsZVByb3BzKSA9PiB7XG4gICAgICBjb25zdCB7IGhlYWRlckFmZml4ZWQsIGhlaWdodCB9ID0gcHJvcHNcbiAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJJbnZhbGlkIHByb3AgYGhlaWdodGAgc3VwcGxpZWQgdG8gYFRhYmxlYCwgZXhwZWN0ZWQgYG51bWJlcmAuXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckFmZml4ZWQgJiYgISFoZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJUYWJsZS5qcyDkuI3lhYHorrjlkIzml7bkvb/nlKggcHJvcCBgaGVhZGVyQWZmaXhlZGAg5LiOIGBoZWlnaHRg77yM5LiN6K6k5Y+v5bCG6L+Z5Lik6ICF5re355So55qE6ZyA5rGC5Zy65pmv44CCXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbliqDovb3kuK1cbiAgICAgKi9cbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+WxleW8gOWKn+iDveeahOWIpOaWre+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBvbkV4cGFuZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIGNsaWNrIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93TW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIG1vdXNlTGVhdmUgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAgICovXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHpgInmi6nmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+mAieaLqeWKn+iDveeahOWIpOaWre+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5aSaIC8g5Y2V6YCJ77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIHNlbGVjdE11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HpgInmi6njgIJcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBzZWxlY3RPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHku47lpJbpg6jmjqfliLbvvIzpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yMXG4gICAgICog5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjO+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBzZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAgIC8qKlxuICAgICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgICAqL1xuICAgIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJ0b3BcIiwgXCJjZW50ZXJcIiwgXCJib3R0b21cIl0pLFxuICAgIC8qKlxuICAgICAqIOiZmuaLn+WIl+ihqOeahCBQcm9wc++8jOivt+WPguiAgyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yYy12aXJ0dWFsLWxpc3RcbiAgICAgKi9cbiAgICB2aXJ0dWFsTGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOiZmuaLn+WIl+ihqOeahOagt+W8j++8jOivt+WcqOi/memHjOaMh+WumuWuveW6pu+8jOm7mOiupOWwhuS8muaciSA1MDAgcHgg5a695bqmXG4gICAgICovXG4gICAgdmlydHVhbExpc3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/omZrmi5/mu5rliqjvvIzmraQgUHJvcCDor7fphY3lkIggaGVpZ2h0IFByb3Ag5ZCM5pe25L2/55So77yM55So5LqO5aSE55CG5aSn5pWw5o2u6YeP5LiL55qE6Jma5ouf5YaF5rua5Yqo77ybXG4gICAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAgICovXG4gICAgdmlydHVhbFNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRhYmxlUHJvcHMgPSB7XG4gICAgYWxpZ246IG51bGwsXG4gICAgY2hpbGRyZW46IFwiXCIsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgY29sdW1uczogbnVsbCxcbiAgICBjb2x1bW5zUmVzaXphYmxlOiBudWxsLFxuICAgIGRhdGFTb3VyY2U6IFtdLFxuICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM6IG51bGwsXG4gICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5czogbnVsbCxcbiAgICBlbXB0eVRleHQ6IFwi5pqC5peg5pWw5o2uXCIsXG4gICAgZXhwYW5kSWNvblZpc2libGU6IHRydWUsXG4gICAgZXhwYW5kT25Sb3dDbGljazogZmFsc2UsXG4gICAgZXhwYW5kZWRSb3dLZXlzOiBudWxsLFxuICAgIGV4cGFuZGVkUm93UmVuZGVyOiAoKSA9PiBcIlwiLFxuICAgIGdldENlbGxDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0Q2VsbFByb3BzOiBub29wLFxuICAgIGdldENlbGxTdHlsZTogbm9vcCxcbiAgICBnZXRIZWFkQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldEhlYWRTdHlsZTogbm9vcCxcbiAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRIZWFkQ2VsbFN0eWxlOiBub29wLFxuICAgIGdldFJvd0NsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRSb3dTdHlsZTogbm9vcCxcbiAgICBnZXRTZWxlY3RQcm9wczogKCkgPT4gKHt9KSxcbiAgICBoZWFkZXJBZmZpeGVkOiBmYWxzZSxcbiAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wOiAwLFxuICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0OiBudWxsLFxuICAgIGhlYWRlckVtcGhhc2l6ZWQ6IGZhbHNlLFxuICAgIGhlaWdodDogbnVsbCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBvbkV4cGFuZENoYW5nZTogbnVsbCxcbiAgICBvblJvd0NsaWNrOiBudWxsLFxuICAgIG9uUm93TW91c2VFbnRlcjogbnVsbCxcbiAgICBvblJvd01vdXNlTGVhdmU6IG51bGwsXG4gICAgb25TZWxlY3RDaGFuZ2U6IG51bGwsXG4gICAgb25TY3JvbGw6IG51bGwsXG4gICAgc2VsZWN0TXVsdGlwbGU6IHRydWUsXG4gICAgc2VsZWN0T25Sb3dDbGljazogZmFsc2UsXG4gICAgc2VsZWN0ZWRSb3dLZXlzOiBudWxsLFxuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiB1bmRlZmluZWQsXG4gICAgdmlydHVhbExpc3RQcm9wczoge30sXG4gICAgdmlydHVhbExpc3RTdHlsZToge30sXG4gICAgdmlydHVhbFNjcm9sbDogZmFsc2UsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgY29sdW1ucyxcbiAgICBleHBhbmRlZFJvd0tleXMsXG4gICAgc2VsZWN0ZWRSb3dLZXlzLFxuICB9OiBJVGFibGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPElUYWJsZVN0YXRlPiA9IHt9XG4gICAgaWYgKGNoaWxkcmVuICE9PSBudWxsIHx8IGNvbHVtbnMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmNoaWxkcmVuID0gY29sdW1ucyB8fCBjaGlsZHJlblxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5leHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5cyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSb3dLZXlzID0gc2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCA/IG5ld1N0YXRlIDogbnVsbFxuICB9XG5cbiAgcHVibGljIGNvbWJpbmVkQ2VsbHNJbmZvOiBJQmFzZU9iamVjdFtdID0gW11cblxuICBwdWJsaWMgYWZmaXhIZWFkZXI6IEFmZml4XG5cbiAgcHVibGljIGFmZml4U2Nyb2xsYmFyOiBBZmZpeFxuXG4gIHB1YmxpYyBtYWluVGFibGU6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UYWJsZUJvZHk6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UaGVhZDogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBwcml2YXRlIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZTogYW55XG5cbiAgcHJpdmF0ZSByZXNpemVFdmVudDogYW55XG5cbiAgcHJpdmF0ZSBjb2x1bW5NYW5hZ2VyOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRhYmxlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cyxcbiAgICAgIGV4cGFuZGVkUm93S2V5czogZXhwYW5kZWRSb3dLZXlzUHJvcCxcbiAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCxcbiAgICB9ID0gcHJvcHNcbiAgICB0aGlzLmNvbHVtbk1hbmFnZXIgPSBuZXcgQ29sdW1uTWFuYWdlcihjb2x1bW5zIHx8IGNoaWxkcmVuKVxuICAgIGxldCBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIGxldCBleHBhbmRlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChleHBhbmRlZFJvd0tleXNQcm9wKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0RXhwYW5kZWRSb3dLZXlzKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZmZpeGVkQm90dG9tOiBmYWxzZSxcbiAgICAgIGFmZml4ZWRUb3A6IGZhbHNlLFxuICAgICAgY2hpbGRyZW46IGNvbHVtbnMgfHwgY2hpbGRyZW4sXG4gICAgICBjb21iaW5lZENlbGxzSW5mbzogW10sXG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sIC8vIOato+WcqOaUueWPmOWuveW6pueahOWIl+eahOS/oeaBr1xuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3M6IFtdLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGZhbHNlLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGZhbHNlLFxuICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgICBtYWluVGFibGVTdHlsZToge30sXG4gICAgICByZXNpemVkOiBbXSwgLy8g5pS55Y+Y6L+H5a695bqm55qE5omA5pyJ5YiX55qE5pWw5o2uXG4gICAgICBzZWxlY3RlZFJvd0tleXMsXG4gICAgfVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplID0gZGVib3VuY2UodGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsIDEwMClcbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVGFibGVQcm9wcyxcbiAgICBuZXh0U3RhdGU6IElUYWJsZVN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbk1hbmFnZXIsXG4gICAgICBjb21iaW5lZENlbGxzSW5mbyxcbiAgICAgIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzXG4gICAgY29uc3QgeyBpc0FueUNvbHVtbnNGaXhlZCB9ID0gY29sdW1uTWFuYWdlclxuICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgIC8vIOWbuuWumuihqOWktOmcgOimgeebkeWQrCByZXNpemUg5LqL5Lu2XG4gICAgaWYgKGhlYWRlckFmZml4ZWQgfHwgaGVpZ2h0IHx8IGlzQW55Q29sdW1uc0ZpeGVkKSB7XG4gICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgd2luZG93LFxuICAgICAgICBcInJlc2l6ZVwiLFxuICAgICAgICBkZWJvdW5jZWRXaW5kb3dSZXNpemVcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGNvbWJpbmVkQ2VsbHNJbmZvLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbWJpbmVkQ2VsbHNJbmZvIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9ICh7XG4gICAgZGF0YVNvdXJjZTogZGF0YVNvdXJjZU9sZCxcbiAgICBnZXRDZWxsUHJvcHM6IGdldENlbGxQcm9wc09sZCxcbiAgfTogSVRhYmxlUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGdldENlbGxQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIGhhbmRsZVdpbmRvd1Jlc2l6ZSDkuI3lupTor6Xlj6rlnKggZGlkbW91bnQg5pe25omn6KGMXG4gICAgICogZGlkVXBkYXRlIOaXtuS5n+mcgOimgVxuICAgICAqL1xuICAgIGlmICghc2hhbGxvd0VxdWFsKGRhdGFTb3VyY2VPbGQsIGRhdGFTb3VyY2UpKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlV2luZG93UmVzaXplLCAwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWQiOW5tuWNleWFg+agvOmcgOaLv+WIsOecn+WunueahCBkb20g5YWD57Sg6K6h566X5bC65a+477yM5Zug5q2k6L+Z6YeM6ZyA6KaBIGZvcmNlVXBkYXRlXG4gICAgICovXG4gICAgaWYgKCFzaGFsbG93RXF1YWwoZ2V0Q2VsbFByb3BzT2xkLCBnZXRDZWxsUHJvcHMpICYmIGdldENlbGxQcm9wcykge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnJlc2l6ZUV2ZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUuY2xlYXIoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydCA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICBjb2w6IElDb2x1bW5Qcm9wc1xuICApID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImNvbC1yZXNpemVcIlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudGx5UmVzaXppbmc6IHtcbiAgICAgICAgY29sLFxuICAgICAgICBkYXRhSW5kZXg6IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgIHBhcmVudFdpZHRoOlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIC53aWR0aCxcbiAgICAgICAgc3RhcnRYOiBlLnBhZ2VYLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgfSwgMClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5Nb3ZpbmcgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB7IHJlc2l6ZWQsIGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb2wsIGRhdGFJbmRleCwgcGFyZW50V2lkdGgsIHN0YXJ0WCB9ID0gY3VycmVudGx5UmVzaXppbmdcbiAgICAvKipcbiAgICAgKiAxMyDku6PooajlrZflj7fvvJvnlKggZW0g55qE5pa55byP6K6h566X5a695bqm5pys6Lqr5LiN5aSf5ZCI55CG77yM6L+Z6YeMICsgMu+8jOS4jeeEtuWcqCBTYWZhcmkg5LiL56m66Ze05Lya5LiN5aSf44CCXG4gICAgICovXG4gICAgY29uc3QgYmFzZVdpZHRoID1cbiAgICAgIE1hdGguY2VpbChcbiAgICAgICAgY29sLnRpdGxlLmxlbmd0aCA+IDQgPyBjb2wudGl0bGUubGVuZ3RoIC8gMiA6IGNvbC50aXRsZS5sZW5ndGhcbiAgICAgICkgKlxuICAgICAgICAxMyArXG4gICAgICAyXG4gICAgY29uc3QgbmV3UmVzaXplZCA9IHJlc2l6ZWQuZmlsdGVyKG8gPT4gby5kYXRhSW5kZXggIT09IGRhdGFJbmRleClcbiAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgubWF4KFxuICAgICAgTWF0aC5jZWlsKHBhcmVudFdpZHRoICsgZS5wYWdlWCAtIHN0YXJ0WCksXG4gICAgICAhIWNvbC5vblNvcnQgfHwgISFjb2wub25GaWx0ZXIgPyBiYXNlV2lkdGggKyAzNiA6IGJhc2VXaWR0aCArIDE2XG4gICAgKVxuICAgIG5ld1Jlc2l6ZWQucHVzaCh7XG4gICAgICBkYXRhSW5kZXgsXG4gICAgICB2YWx1ZTogbmV3V2lkdGgsXG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlc2l6ZWQ6IG5ld1Jlc2l6ZWQsXG4gICAgfSlcbiAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSgpXG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uRW5kID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG1haW5UYWJsZSB9ID0gdGhpc1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJcIlxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudGx5UmVzaXppbmc6IHt9LFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6XG4gICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsV2lkdGggPiBtYWluVGFibGUub2Zmc2V0V2lkdGgsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WTpcbiAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxIZWlnaHQgPiBtYWluVGFibGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVXaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb2x1bW5NYW5hZ2VyLCBtYWluVGFibGUsIHByb3BzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBpc0FueUNvbHVtbnNGaXhlZCB9ID0gY29sdW1uTWFuYWdlclxuICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgIGlmICgoaGVhZGVyQWZmaXhlZCB8fCBoZWlnaHQgfHwgaXNBbnlDb2x1bW5zRml4ZWQpICYmIG1haW5UYWJsZSkge1xuICAgICAgY29uc3QgeyBtYWluVGFibGVTdHlsZTogb2xkU3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGNvbnN0IHJlY3QgPSBtYWluVGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IG1haW5UYWJsZVN0eWxlOiBQYXJ0aWFsPFJlYWN0LkNTU1Byb3BlcnRpZXM+ID0ge31cbiAgICAgIG1haW5UYWJsZVN0eWxlLmxlZnQgPSByZWN0LmxlZnRcbiAgICAgIG1haW5UYWJsZVN0eWxlLndpZHRoID0gcmVjdC53aWR0aFxuICAgICAgaWYgKCFzaGFsbG93RXF1YWwobWFpblRhYmxlU3R5bGUsIG9sZFN0eWxlKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFpblRhYmxlU3R5bGUgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc01haW5UYWJsZU92ZXJmbG93WDpcbiAgICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbFdpZHRoID4gbWFpblRhYmxlLm9mZnNldFdpZHRoLFxuICAgICAgICBpc01haW5UYWJsZU92ZXJmbG93WTpcbiAgICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbEhlaWdodCA+IG1haW5UYWJsZS5vZmZzZXRIZWlnaHQsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVNYWluVGFibGVTY3JvbGwgPSAoZT86IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBhZmZpeEhlYWRlciwgbWFpblRhYmxlIH0gPSB0aGlzXG4gICAgY29uc3QgeyBvblNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYWZmaXhlZFRvcCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKG9uU2Nyb2xsICYmIGUpIHtcbiAgICAgIC8vIGUg5Y+v6IO95pivIHRoZWFkXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgaWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpID09PSBcInRhYmxlXCIpIHtcbiAgICAgICAgb25TY3JvbGwoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWZmaXhlZFRvcCAmJiBhZmZpeEhlYWRlciAmJiBtYWluVGFibGUgJiYgYWZmaXhIZWFkZXIuZml4ZWROb2RlKSB7XG4gICAgICBhZmZpeEhlYWRlci5maXhlZE5vZGUuc2Nyb2xsTGVmdCA9IG1haW5UYWJsZS5zY3JvbGxMZWZ0XG4gICAgfVxuXG4gICAgLy8g5Zu65a6a5aS055qE5oOF5Ya177yM6ZyA6KaB5ZCM5q2l5Zu65a6a5rua5Yqo5p2h5ZKM5Li7IFRhYmxlIOa7muWKqOadoVxuICAgIHRoaXMuc3luY1RhYmxlU2Nyb2xsUG9zaXRpb24obWFpblRhYmxlLnNjcm9sbExlZnQpXG4gIH1cblxuICBwdWJsaWMgc3luY1RhYmxlU2Nyb2xsUG9zaXRpb24gPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgYWZmaXhTY3JvbGxiYXIsIG1haW5UYWJsZSwgbWFpblRoZWFkIH0gPSB0aGlzXG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChtYWluVGFibGUgJiYgYWZmaXhTY3JvbGxiYXIgJiYgYWZmaXhTY3JvbGxiYXIuZml4ZWROb2RlKSB7XG4gICAgICBpZiAobWFpblRhYmxlLnNjcm9sbExlZnQgIT09IHZhbHVlKSB7XG4gICAgICAgIG1haW5UYWJsZS5zY3JvbGxMZWZ0ID0gdmFsdWVcbiAgICAgIH1cbiAgICAgIGlmIChhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUuc2Nyb2xsTGVmdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgYWZmaXhTY3JvbGxiYXIuZml4ZWROb2RlLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWmguaenOiuvuWumuS6hiBwcm9wIGhlaWdodO+8jOW5tuS4lOWtmOWcqOaoquWQkea7muWKqOadoe+8jOWImeimgeWQjOatpSB0aGVhZCDnmoTmu5rliqjkvY3nva5cbiAgICBpZiAoaGVpZ2h0ICYmIG1haW5UaGVhZCkge1xuICAgICAgbWFpblRoZWFkLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVSb3dDbGljayA9IChcbiAgICByb3c6IElCYXNlT2JqZWN0LFxuICAgIGk6IG51bWJlcixcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBleHBhbmRPblJvd0NsaWNrLFxuICAgICAgZ2V0U2VsZWN0UHJvcHMsXG4gICAgICBvblJvd0NsaWNrLFxuICAgICAgc2VsZWN0T25Sb3dDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgIGlmIChcbiAgICAgIHNlbGVjdE9uUm93Q2xpY2sgJiZcbiAgICAgIHR5cGVvZiBrZXkgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICEoXG4gICAgICAgIGdldFNlbGVjdFByb3BzICYmXG4gICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkgJiZcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKS5kaXNhYmxlZFxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3Qoa2V5LCAhc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgfVxuICAgIGlmIChleHBhbmRPblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLmhhbmRsZUV4cGFuZChrZXkpXG4gICAgfVxuICAgIGlmIChvblJvd0NsaWNrKSB7XG4gICAgICBvblJvd0NsaWNrKHJvdywgaSwgZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGhSZXNpemUgPSAoXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBkYXRhSW5kZXg6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIGZpeGVkUG9zaXRpb24/OiBib29sZWFuIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBnZXRDb2x1bW5zIH0gPSB0aGlzLmNvbHVtbk1hbmFnZXJcbiAgICBsZXQgeyBmaXhlZENvbHVtbnNJbmZvcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRDb2x1bW5zKCkgYXMgSUNvbHVtblByb3BzW11cbiAgICAvKipcbiAgICAgKiBjb2x1bW5zIOWPmOWMluWQjiBmaXhlZENvbHVtbnNJbmZvcyDkuK3lj6/og73lrZjlnKjlt7Lnu4/np7vpmaTnmoQgY29sdW1uXG4gICAgICovXG4gICAgZml4ZWRDb2x1bW5zSW5mb3MgPSBmaXhlZENvbHVtbnNJbmZvcy5maWx0ZXIobyA9PlxuICAgICAgY29sdW1ucy5maW5kKHAgPT4gcC5kYXRhSW5kZXggPT09IG8uZGF0YUluZGV4KVxuICAgIClcbiAgICBjb25zdCBpID0gZml4ZWRDb2x1bW5zSW5mb3MuZmluZEluZGV4KG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAvLyBmaXhlZCDlj6/og73mmK8gQm9vbGVhblxuICAgIGNvbnN0IGZpeGVkID0gZml4ZWRQb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCJcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBpZiAoZml4ZWRDb2x1bW5zSW5mb3NbaV0ud2lkdGggPT09IHdpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3Muc3BsaWNlKGksIDEpXG4gICAgfVxuICAgIGZpeGVkQ29sdW1uc0luZm9zLnB1c2goeyB3aWR0aCwgZGF0YUluZGV4LCBpbmRleCwgZml4ZWQgfSlcbiAgICBmaXhlZENvbHVtbnNJbmZvcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleClcblxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc0luZm9zTGVmdCA9IGZpeGVkQ29sdW1uc0luZm9zLmZpbHRlcihcbiAgICAgIG8gPT4gby5maXhlZCA9PT0gXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zSW5mb3NSaWdodCA9IGZpeGVkQ29sdW1uc0luZm9zXG4gICAgICAuZmlsdGVyKG8gPT4gby5maXhlZCA9PT0gXCJyaWdodFwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuaW5kZXggLSBhLmluZGV4KVxuXG4gICAgZml4ZWRDb2x1bW5zSW5mb3MuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgbGV0IGNvbEluZGV4XG4gICAgICBpZiAoY29sLmZpeGVkID09PSBcImxlZnRcIikge1xuICAgICAgICBjb2xJbmRleCA9IGZpeGVkQ29sdW1uc0luZm9zTGVmdC5maW5kSW5kZXgoXG4gICAgICAgICAgbyA9PiBvLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleFxuICAgICAgICApXG4gICAgICAgIGlmIChjb2xJbmRleCA9PT0gZml4ZWRDb2x1bW5zSW5mb3NMZWZ0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb2wuaXNMYXN0TGVmdCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wuaXNMYXN0TGVmdCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8g5a656ZSZ77yM5LiN5YWB6K64IHNsaWNlKDAsIC0xKSDnmoTljbHpmanmk43kvZxcbiAgICAgICAgY29sLm9mZnNldCA9XG4gICAgICAgICAgY29sSW5kZXggPT09IC0xXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogZml4ZWRDb2x1bW5zSW5mb3NMZWZ0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIGNvbEluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIud2lkdGgsIDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xJbmRleCA9IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQuZmluZEluZGV4KFxuICAgICAgICAgIG8gPT4gby5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXhcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29sSW5kZXggPT09IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbC5pc0ZpcnN0UmlnaHQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sLmlzRmlyc3RSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8g5a656ZSZ77yM5LiN5YWB6K64IHNsaWNlKDAsIC0xKSDnmoTljbHpmanmk43kvZxcbiAgICAgICAgY29sLm9mZnNldCA9XG4gICAgICAgICAgY29sSW5kZXggPT09IC0xXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogZml4ZWRDb2x1bW5zSW5mb3NSaWdodFxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjb2xJbmRleClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLndpZHRoLCAwKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpeGVkQ29sdW1uc0luZm9zIH0sIHRoaXMuZm9yY2VVcGRhdGUpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGhlYWRNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNSZXNpemVyU2hvdyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghaXNSZXNpemVyU2hvdykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzUmVzaXplclNob3c6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaGVhZE1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50bHlSZXNpemluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50bHlSZXNpemluZykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlsZXlvIDooYxcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVFeHBhbmQgPSAoa2V5OiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgZXhwYW5kZWRSb3dLZXlzOiBleHBhbmRlZFJvd0tleXNQcm9wLCBvbkV4cGFuZENoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZXhwYW5kZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qga2V5cyA9IFsuLi5leHBhbmRlZFJvd0tleXNdXG4gICAgY29uc3QgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBrZXlzLnNwbGljZShpbmRleCwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAga2V5cy5wdXNoKGtleSlcbiAgICB9XG4gICAgaWYgKGV4cGFuZGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZFJvd0tleXM6IGtleXMgfSlcbiAgICB9XG4gICAgaWYgKG9uRXhwYW5kQ2hhbmdlKSB7XG4gICAgICBvbkV4cGFuZENoYW5nZShrZXlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgInmi6nooYxcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVTZWxlY3QgPSAoa2V5OiBSZWFjdC5SZWFjdFRleHQsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wLFxuICAgICAgc2VsZWN0TXVsdGlwbGUsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBrZXlzID0gWy4uLnNlbGVjdGVkUm93S2V5c11cbiAgICBpZiAoc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLnNwbGljZShzZWxlY3RlZFJvd0tleXMuaW5kZXhPZihrZXkpLCAxKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gW2tleV1cbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGtleXMsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3RDaGFuZ2UpIHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAieaLqeihjOWFqOmAieaTjeS9nFxuICAgKi9cbiAgcHVibGljIGhhbmRsZVNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdENoYW5nZSwgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBrZXlzID0gWy4uLnNlbGVjdGVkUm93S2V5c11cbiAgICBjb25zdCBhdmFpbGFibGVLZXlzID0gdGhpcy5nZXRBdmFpbGFibGVSb3dzS2V5cygpXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGF2YWlsYWJsZUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5LiN6IO955u05o6l5riF56m65pWw57uE77yM5Zug5Li65Y+v6IO95Lyg5YWl5LqG5LiO5b2T5YmNIGRhdGFTb3VyY2Ug5peg5YWz55qEIGtleXPvvJtcbiAgICAgIC8vIOS5n+S4jeiDveebtOaOpSBzcGxpY2XvvIzlm6DkuLropoHmo4Dmn6XmmK/lkKYgZ2V0U2VsZWN0UHJvcHMuZGlzYWJsZWTjgIJcbiAgICAgIHNlbGVjdGVkUm93S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChhdmFpbGFibGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBrZXlzLnNwbGljZShrZXlzLmluZGV4T2Yoa2V5KSwgMSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGtleXMsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3RDaGFuZ2UpIHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuW3suWFqOmDqOmAieaLqVxuICAgKi9cbiAgcHVibGljIGhhc1NlbGVjdGVkQWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKClcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChcbiAgICAgIGRhdGFTb3VyY2UgJiZcbiAgICAgIGRhdGFTb3VyY2UubGVuZ3RoICYmXG4gICAgICBrZXlzLmxlbmd0aCAmJlxuICAgICAga2V5cy5ldmVyeShrZXkgPT4gc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdmFpbGFibGVSb3dzS2V5cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGdldFNlbGVjdFByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qga2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKCFkYXRhU291cmNlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgZGF0YVNvdXJjZS5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSByb3dcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGtleSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAhKFxuICAgICAgICAgIGdldFNlbGVjdFByb3BzICYmXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKSAmJlxuICAgICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkuZGlzYWJsZWRcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4ga2V5c1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGV4cGFuZEljb25WaXNpYmxlLFxuICAgICAgZXhwYW5kZWRSb3dSZW5kZXIsXG4gICAgICBleHBhbmRPblJvd0NsaWNrLFxuICAgICAgZ2V0SGVhZENsYXNzTmFtZSxcbiAgICAgIGdldEhlYWRTdHlsZSxcbiAgICAgIGdldFJvd0NsYXNzTmFtZSxcbiAgICAgIGdldFJvd1N0eWxlLFxuICAgICAgZ2V0U2VsZWN0UHJvcHMsXG4gICAgICBoZWFkZXJBZmZpeGVkLFxuICAgICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcCxcbiAgICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblJvd01vdXNlRW50ZXIsXG4gICAgICBvblJvd01vdXNlTGVhdmUsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHNlbGVjdE11bHRpcGxlLFxuICAgICAgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgIHNpemUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgdmlydHVhbExpc3RQcm9wcyxcbiAgICAgIHZpcnR1YWxMaXN0U3R5bGUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBhZmZpeGVkVG9wLFxuICAgICAgYWZmaXhlZEJvdHRvbSxcbiAgICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgIG1haW5UYWJsZVN0eWxlLFxuICAgICAgcmVzaXplZCxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3Qge1xuICAgICAgZ2V0Q29sdW1ucyxcbiAgICAgIC8vIGdldExlZnRDb2x1bW5zV2lkdGgsXG4gICAgICBnZXRHcm91cENvbHVtbnNEZXB0aCxcbiAgICAgIGlzQW55Q29sdW1uc0xlZnRGaXhlZCxcbiAgICB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpIGFzIElDb2x1bW5Qcm9wc1tdXG5cbiAgICBjb25zdCB0aGVhZFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgaGVpZ2h0OiBgJHtURF9IRUlHSFRbc2l6ZSB8fCBcInNtYWxsXCJdICogZ2V0R3JvdXBDb2x1bW5zRGVwdGgoKX1weGAsXG4gICAgICAuLi4oKGdldEhlYWRTdHlsZSAmJiBnZXRIZWFkU3R5bGUoKSkgfHwge30pLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWxleW8gOihjOWSjOmAieaLqeihjOaXtu+8jHRoZWFk5ZKM5q+P6KGM55qE56ys5LiA5YiX5YmN6YO96KaB5Yqg5YWl5LiA5YiXXG4gICAgICog5q2k5YiX5Lmf5Lya5b2x5ZONIHN0aWNreSDnmoTlgY/np7vkvY3nva5cbiAgICAgKi9cbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuXG4gICAgY29uc3QgdGhlYWQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17MH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGAke3ByZWZpeH0tdGhlYWRgLFxuICAgICAgICAgIGdldEhlYWRDbGFzc05hbWUgJiYgZ2V0SGVhZENsYXNzTmFtZSgpXG4gICAgICAgICl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVUaGVhZE1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUaGVhZE1vdXNlTGVhdmV9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRoZWFkXCIpfVxuICAgICAgICBzdHlsZT17dGhlYWRTdHlsZX1cbiAgICAgID5cbiAgICAgICAge3RoZWFkUGxhY2Vob2xkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIGAke3ByZWZpeH0tdGhfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdGBdOiBpc0FueUNvbHVtbnNMZWZ0Rml4ZWQoKSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PVwiZnVuY3Rpb25hbC1hbGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RNdWx0aXBsZSAmJiAhIW9uU2VsZWN0Q2hhbmdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKCkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5oYXNTZWxlY3RlZEFsbCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbGlnbixcbiAgICAgICAgICAgIGRhdGFJbmRleCxcbiAgICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgICBmaXhlZCxcbiAgICAgICAgICAgIG9uRmlsdGVyLFxuICAgICAgICAgICAgb25Tb3J0LFxuICAgICAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICB9ID0gY29sXG5cbiAgICAgICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICBjb25zdCBjbGlja2FibGUgPVxuICAgICAgICAgICAgISFvblNvcnQgfHxcbiAgICAgICAgICAgIChzb3J0T3JkZXIgIT09IG51bGwgJiYgc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAhIW9uRmlsdGVyIHx8XG4gICAgICAgICAgICAhIWZpbHRlcnNcbiAgICAgICAgICBsZXQgbWluV2lkdGggPSAwXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbWluV2lkdGggPVxuICAgICAgICAgICAgICBNYXRoLmNlaWwodGl0bGUubGVuZ3RoID4gNCA/IHRpdGxlLmxlbmd0aCAvIDIgOiB0aXRsZS5sZW5ndGgpICpcbiAgICAgICAgICAgICAgICAxMyArXG4gICAgICAgICAgICAgIDE2XG4gICAgICAgICAgICBpZiAoY2xpY2thYmxlKSB7XG4gICAgICAgICAgICAgIG1pbldpZHRoICs9IDIwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBmbGV4VmFsdWVcbiAgICAgICAgICBpZiAodHlwZW9mIHdpZHRoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aH0gMCBhdXRvYFxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiAod2lkdGgubGVuZ3RoIC0gd2lkdGgubGFzdEluZGV4T2YoXCJweFwiKSA9PT0gMikge1xuICAgICAgICAgICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aC5zbGljZSgwLCAtMil9IDAgYXV0b2BcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAwIDAgJHt3aWR0aH1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke01hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpfSAwIGF1dG9gXG4gICAgICAgICAgfVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIHRoIGxlZnQg5YC877ya5Y+W5b6XIHJlc2l6ZS1vYnNlcnZlciDlrZjlgqjnmoTor6XliJfnmoTlgY/np7vph4/vvIzliqDkuIrlpoLmnpzmnInpgInmi6nooYzjgIHlsZXlvIDooYzml7bnmoQgU0VMRUNUX1REX1dJRFRIIOKAlOKAlCDku4Xlr7kgbGVmdCDmnInmlYhcbiAgICAgICAgICAgKiB0aCByaWdodCDlgLzvvJrlj5blvpcgcmVzaXplLW9ic2VydmVyIOWtmOWCqOeahOivpeWIl+eahOWBj+enu+mHj++8jOWKoOS4iuWmguaenOWGhea7muWKqOaXtueahOa7muWKqOadoeWuveW6pu+8iDE077yJIOKAlOKAlCDku4Xlr7kgcmlnaHQg5pyJ5pWIXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZXNpemVPYnNlcnZlclxuICAgICAgICAgICAgICBvblJlc2l6ZT17KHsgd2lkdGg6IHdpZHRoUmVzaXplIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRoUmVzaXplKHdpZHRoUmVzaXplLCBkYXRhSW5kZXgsIGluZGV4LCBmaXhlZClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFmaXhlZH1cbiAgICAgICAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgaW5kZXh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIHtcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2NsaWNrYWJsZWBdOiBjbGlja2FibGUsXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9sZWZ0YF06IGlzRml4ZWRMZWZ0KGNvbCksXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9yaWdodGBdOiBpc0ZpeGVkUmlnaHQoY29sKSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2xlZnRMYXN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0Rmlyc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgbyA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgaW5kZXh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGlzRml4ZWRMZWZ0KGNvbClcbiAgICAgICAgICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZChvID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/Lm9mZnNldCB8fCAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgKHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlID8gU0VMRUNUX1REX1dJRFRIIDogMClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICByaWdodDogaXNGaXhlZFJpZ2h0KGNvbClcbiAgICAgICAgICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZChvID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/Lm9mZnNldCB8fCAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgKGlzTWFpblRhYmxlT3ZlcmZsb3dZICYmIGhlaWdodCA/IDE0IDogMClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBmbGV4OiByZXNpemVkQ29sID8gYCR7cmVzaXplZENvbC52YWx1ZX0gMCBhdXRvYCA6IGZsZXhWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiByZXNpemVkQ29sID8gcmVzaXplZENvbC52YWx1ZSA6IHdpZHRoIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiByZXNpemVkQ29sXG4gICAgICAgICAgICAgICAgICAgID8gcmVzaXplZENvbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IHdpZHRoIHx8IE1hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGF0YS1jb2x1bW49e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUaENlbGwoY29sLCB7IGluZGV4LCBjb2x1bW5zIH0pfVxuICAgICAgICAgICAgICAgIHtjb2wuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGhHcm91cGB9PlxuICAgICAgICAgICAgICAgICAgICB7Y29sLmNoaWxkcmVuLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRDb2w6IElDb2x1bW5Qcm9wcywgY2hpbGRDb2xJbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2NsaWNrYWJsZWBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5vblNvcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZENvbC5zb3J0T3JkZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb2wuc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNoaWxkQ29sLm9uRmlsdGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNoaWxkQ29sLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoaWxkQ29sLmRhdGFJbmRleCB8fCBjaGlsZENvbEluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMTAwIDAgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBjaGlsZENvbC5hbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGNoaWxkQ29sKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkQ29sLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aEdyb3VwYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRDb2wuY2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDb2w6IElDb2x1bW5Qcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFuZENvbEluZGV4OiBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGhgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2NsaWNrYWJsZWBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZ3JhbmRDb2wub25Tb3J0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdyYW5kQ29sLnNvcnRPcmRlciAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDb2wuc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFncmFuZENvbC5vbkZpbHRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZ3JhbmRDb2wuZmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtncmFuZENvbC5kYXRhSW5kZXggfHwgZ3JhbmRDb2xJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMTAwIDAgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGdyYW5kQ29sLmFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUaENlbGwoZ3JhbmRDb2wpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Jlc2l6ZU9ic2VydmVyPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBnZW5lcmF0ZVRycyA9IChyb3c6IElCYXNlT2JqZWN0LCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgICBjb25zdCBjb2xBcnJheTogYW55ID0gW11cbiAgICAgIGNvbnN0IHNlbGVjdFByb3BzR2V0dGVkID0gZ2V0U2VsZWN0UHJvcHMgJiYgZ2V0U2VsZWN0UHJvcHMocm93LCByb3dJbmRleClcbiAgICAgIGNvbnN0IGFsbFNlbGVjdFByb3BzID0ge1xuICAgICAgICBjaGVja2VkOiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGAsXG4gICAgICAgIG9uQ2hhbmdlOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3Qoa2V5LCBjaGVja2VkKSxcbiAgICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCksXG4gICAgICAgIC4uLihzZWxlY3RQcm9wc0dldHRlZCB8fCB7fSksXG4gICAgICB9XG4gICAgICBjb25zdCBzZWxlY3RQcm9wcyA9IG9taXQoYWxsU2VsZWN0UHJvcHMsIFtcInBvcG92ZXJQcm9wc1wiXSlcbiAgICAgIGNvbnN0IHNlbGVjdENlbGwgPSBvbkV4cGFuZENoYW5nZSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWxlY3RDb21wb25lbnRgfVxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUV4cGFuZChrZXkpfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17YCR7cHJlZml4fS1leHBhbmRJY29uYH0gaWNvbj1cImFycm93LWRvd25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBzZWxlY3RNdWx0aXBsZSA/IChcbiAgICAgICAgPENoZWNrYm94IHsuLi5zZWxlY3RQcm9wc30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxSYWRpbyB7Li4uc2VsZWN0UHJvcHN9IC8+XG4gICAgICApXG4gICAgICBjb25zdCBnZW5lcmF0ZVRyID0gKGNvbHVtbnNQYXJhbTogYW55W10pID0+IHtcbiAgICAgICAgY29sdW1uc1BhcmFtLmZvckVhY2goKGNvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoIWNvbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29sQXJyYXkucHVzaCh0aGlzLmdlbmVyYXRlVGJvZHlDZWxsKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZW5lcmF0ZVRyKGNvbC5jaGlsZHJlbilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBnZW5lcmF0ZVRyKGNvbHVtbnMpXG4gICAgICBjb25zdCB0ciA9IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGAke3ByZWZpeH0tdHJgLFxuICAgICAgICAgICAgZ2V0Um93Q2xhc3NOYW1lICYmIGdldFJvd0NsYXNzTmFtZShyb3csIHJvd0luZGV4KSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfY2xpY2thYmxlYF06IGV4cGFuZE9uUm93Q2xpY2sgfHwgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfZXhwYW5kZWRgXTogZXhwYW5kZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRyX3NlbGVjdGVkYF06IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAga2V5PXtrZXkgfHwgcm93SW5kZXh9XG4gICAgICAgICAgcm9sZT1cInJvd1wiXG4gICAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17XG4gICAgICAgICAgICBvblJvd01vdXNlRW50ZXIgPyBlID0+IG9uUm93TW91c2VFbnRlcihyb3csIHJvd0luZGV4LCBlKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e1xuICAgICAgICAgICAgb25Sb3dNb3VzZUxlYXZlID8gZSA9PiBvblJvd01vdXNlTGVhdmUocm93LCByb3dJbmRleCwgZSkgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZVJvd0NsaWNrKHJvdywgcm93SW5kZXgsIGUpfVxuICAgICAgICAgIG9uS2V5RG93bj17bm9vcH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uKChnZXRSb3dTdHlsZSAmJiBnZXRSb3dTdHlsZShyb3csIHJvd0luZGV4KSkgfHwge30pLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10ZGAsIGAke3ByZWZpeH0tdGRfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAga2V5PVwiZnVuY3Rpb25hbFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogdmVydGljYWxBbGlnbiAmJiBWRVJUSUNBTF9BTElHTlt2ZXJ0aWNhbEFsaWduXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlbGVjdFByb3BzR2V0dGVkPy5wb3BvdmVyUHJvcHM/LnBvcHVwID8gKFxuICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjF9XG4gICAgICAgICAgICAgICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgey4uLihcbiAgICAgICAgICAgICAgICAgICAgICAoZ2V0U2VsZWN0UHJvcHMgJiYgZ2V0U2VsZWN0UHJvcHMocm93LCByb3dJbmRleCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgKS5wb3BvdmVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RDZWxsfVxuICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDZWxsXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb2xBcnJheX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0cixcbiAgICAgICAgICBleHBhbmRlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZFJvd2B9IGtleT1cInRyLWV4cGFuZFwiPlxuICAgICAgICAgICAgICB7ISFleHBhbmRlZFJvd1JlbmRlciAmJiBleHBhbmRlZFJvd1JlbmRlcihyb3csIHJvd0luZGV4KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICBdXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgaGVhZGVyQWZmaXhlZCA/IChcbiAgICAgICAgPEFmZml4XG4gICAgICAgICAga2V5PXswfVxuICAgICAgICAgIG9mZnNldFRvcD17aGVhZGVyQWZmaXhlZE9mZnNldFRvcH1cbiAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMud3JhcHBlcn1cbiAgICAgICAgICBnZXRUYXJnZXQ9e2hlYWRlckFmZml4R2V0VGFyZ2V0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtib29sID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZmZpeGVkVG9wOiBib29sIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgLy8g5Zu65a6a55qE6YKj5LiA5Yi75Lmf6ZyA6KaB56uL5Y2z6YeN5paw5a6a5L2N44CCXG4gICAgICAgICAgICAgIC8vIOmHjeaWsOWumuS9jeOAgeWMheaLrOS4i+mdoueahCBjbGFzc05hbWUsIHN0eWxlIOWPquWcqOS4u+ihqOagvOS4iuWPkeeUn++8jOWboOS4uuWbuuWumuWIl+eahCBBZmZpeCDooYzkuLrlvojljZXnuq/jgIJcbiAgICAgICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGwoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXthZmZpeGVkVG9wID8gYCR7cHJlZml4fS1hZmZpeGAgOiBcIlwifVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAuLi4oYWZmaXhlZFRvcCA/IG1haW5UYWJsZVN0eWxlIDoge30pLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJhZmZpeEhlYWRlclwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVhZH1cbiAgICAgICAgPC9BZmZpeD5cbiAgICAgICkgOiAoXG4gICAgICAgIHRoZWFkXG4gICAgICApLFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9ezF9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10Ym9keWB9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRhYmxlQm9keVwiKX1cbiAgICAgID5cbiAgICAgICAgeyF2aXJ0dWFsU2Nyb2xsICYmXG4gICAgICAgICAgZGF0YVNvdXJjZSAmJlxuICAgICAgICAgICEhZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgICAgICBkYXRhU291cmNlLm1hcCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgfSl9XG4gICAgICAgIHt2aXJ0dWFsU2Nyb2xsICYmIGRhdGFTb3VyY2UgJiYgISFkYXRhU291cmNlLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGRhdGE9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICBpdGVtS2V5PVwiZGF0YUluZGV4XCJcbiAgICAgICAgICAgIGhlaWdodD17KGhlaWdodCB8fCA0MDApIC0gNDB9XG4gICAgICAgICAgICBpdGVtSGVpZ2h0PXs0Mn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS12aXJ0dWFsLXdyYXBwZXJgfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4udmlydHVhbExpc3RTdHlsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB7Li4udmlydHVhbExpc3RQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHJvdzogSUJhc2VPYmplY3QsIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PixcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYICYmIGhlYWRlckFmZml4ZWQgJiYgKFxuICAgICAgICA8QWZmaXhcbiAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgb2Zmc2V0Qm90dG9tPXswfVxuICAgICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gdGhpcy5tYWluVGFibGVCb2R5fVxuICAgICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwiYWZmaXhTY3JvbGxiYXJcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tYWZmaXhTY3JvbGxiYXJgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1hZmZpeFNjcm9sbGJhcl9zaG93YF06IGFmZml4ZWRCb3R0b20sXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIC4uLm1haW5UYWJsZVN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25TY3JvbGw9eyhlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+XG4gICAgICAgICAgICB0aGlzLnN5bmNUYWJsZVNjcm9sbFBvc2l0aW9uKGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNoYW5nZT17Ym9vbCA9PiB0aGlzLnNldFN0YXRlKHsgYWZmaXhlZEJvdHRvbTogYm9vbCB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHRoaXMubWFpblRhYmxlPy5zY3JvbGxXaWR0aCB9fSAvPlxuICAgICAgICA8L0FmZml4PlxuICAgICAgKSxcbiAgICBdXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUaENlbGwgPSAoY29sOiBJQ29sdW1uUHJvcHMsIG9wdGlvbnM/OiBJQmFzZU9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduLFxuICAgICAgY29sdW1uc1Jlc2l6YWJsZSxcbiAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0SGVhZENlbGxTdHlsZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcmVzaXphYmxlOiBjb2xSZXNpemFibGUgfSA9IGNvbFxuICAgIGxldCByZXNpemFibGUgPSB0cnVlXG4gICAgaWYgKHR5cGVvZiBjb2xSZXNpemFibGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXNpemFibGUgPSBjb2xSZXNpemFibGVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2x1bW5zUmVzaXphYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmVzaXphYmxlID0gY29sdW1uc1Jlc2l6YWJsZVxuICAgIH1cblxuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcsIGlzUmVzaXplclNob3cgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGlzTGFzdFRoID0gb3B0aW9ucyAmJiBvcHRpb25zLmluZGV4ID09PSBvcHRpb25zLmNvbHVtbnMubGVuZ3RoIC0gMVxuXG4gICAgY29uc3QgdGhDZWxsID0gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgYCR7cHJlZml4fS1jZWxsYCxcbiAgICAgICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZSAmJlxuICAgICAgICAgICAgZ2V0SGVhZENlbGxDbGFzc05hbWUoY29sLCBvcHRpb25zID8gb3B0aW9ucy5pbmRleCA6IHVuZGVmaW5lZClcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICAgIChjb2wuYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTltjb2wuYWxpZ25dKSB8fFxuICAgICAgICAgICAgKGFsaWduICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25dKSB8fFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIC4uLigoZ2V0SGVhZENlbGxTdHlsZSAmJlxuICAgICAgICAgICAgZ2V0SGVhZENlbGxTdHlsZShjb2wsIG9wdGlvbnMgPyBvcHRpb25zLmluZGV4IDogdW5kZWZpbmVkKSkgfHxcbiAgICAgICAgICAgIHt9KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyFjb2wub25Tb3J0ICYmXG4gICAgICAgICAgKGNvbC5zb3J0T3JkZXIgPT09IG51bGwgfHwgY29sLnNvcnRPcmRlciA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICFjb2wub25GaWx0ZXIgJiZcbiAgICAgICAgICAhY29sLmZpbHRlcnMgJiZcbiAgICAgICAgICBjb2wudGl0bGV9XG4gICAgICAgIHsoISFjb2wub25Tb3J0IHx8XG4gICAgICAgICAgKGNvbC5zb3J0T3JkZXIgIT09IG51bGwgJiYgY29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSkgJiYgKFxuICAgICAgICAgIDxUYWJsZVNvcnRcbiAgICAgICAgICAgIG9uU29ydD17b3JkZXIgPT4gKGNvbC5vblNvcnQgPyBjb2wub25Tb3J0KG9yZGVyKSA6IHt9KX1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17Y29sLnNvcnRPcmRlcn1cbiAgICAgICAgICAgIHRpdGxlPXtjb2wudGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyghIWNvbC5vbkZpbHRlciB8fCAhIWNvbC5maWx0ZXJzKSAmJiAoXG4gICAgICAgICAgPFRhYmxlRmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlPXtjb2wuZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgICAgIGZpbHRlclZpc2libGU9e2NvbC5maWx0ZXJWaXNpYmxlfVxuICAgICAgICAgICAgZmlsdGVyTXVsdGlwbGU9e2NvbC5maWx0ZXJNdWx0aXBsZX1cbiAgICAgICAgICAgIGZpbHRlclBvcG92ZXJQcm9wcz17Y29sLmZpbHRlclBvcG92ZXJQcm9wc31cbiAgICAgICAgICAgIGZpbHRlcnM9e2NvbC5maWx0ZXJzfVxuICAgICAgICAgICAgb25GaWx0ZXI9e2ZpbHRlciA9PiB7XG4gICAgICAgICAgICAgIGlmIChjb2wub25GaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb2wub25GaWx0ZXIoZmlsdGVyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlPXt2aXNpYmxlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNvbC5vbkZpbHRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjb2wub25GaWx0ZXJWaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0aXRsZT17Y29sLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHshY29sLmZpeGVkICYmIHJlc2l6YWJsZSAmJiAhaXNMYXN0VGggJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXJlc2l6ZXJgLCB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJlc2l6ZXJfc2hvd2BdOiBpc1Jlc2l6ZXJTaG93LFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yZXNpemVyX2N1cnJlbnRgXTpcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZy5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sKX1cbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgaWYgKGNvbC5wb3BvdmVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC4zfVxuICAgICAgICAgIHBsYWNlbWVudD17XG4gICAgICAgICAgICBjb2wuYWxpZ24gPT09IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPyBcInRvcFwiXG4gICAgICAgICAgICAgIDogY29sLmFsaWduID09PSBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgOiBcInRvcExlZnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbkVkZ2VcbiAgICAgICAgICBhcnJvd2VkXG4gICAgICAgICAgcG9wdXA9e2NvbC5wb3BvdmVyfVxuICAgICAgICA+XG4gICAgICAgICAge3RoQ2VsbH1cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhDZWxsXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYm9keUNlbGwgPSAoXG4gICAgcm93OiBJQmFzZU9iamVjdCxcbiAgICBjZWxsOiBJQ29sdW1uUHJvcHMsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjZWxsSW5kZXg6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGlnbjogYWxpZ25Qcm9wLFxuICAgICAgZXhwYW5kSWNvblZpc2libGUsXG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0Q2VsbFByb3BzLFxuICAgICAgZ2V0Q2VsbFN0eWxlLFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ25Qcm9wLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlYWRQbGFjZWhvbGRlclZpc2libGUgPVxuICAgICAgZXhwYW5kSWNvblZpc2libGUgJiYgKCEhb25TZWxlY3RDaGFuZ2UgfHwgISFvbkV4cGFuZENoYW5nZSlcbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nLCBmaXhlZENvbHVtbnNJbmZvcywgcmVzaXplZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduLFxuICAgICAgZGF0YUluZGV4LFxuICAgICAgZmlsdGVycyxcbiAgICAgIG9uRmlsdGVyLFxuICAgICAgb25Tb3J0LFxuICAgICAgcmVuZGVyLFxuICAgICAgc29ydE9yZGVyLFxuICAgICAgdGl0bGUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IGNlbGxcbiAgICBjb25zdCBjbGlja2FibGUgPVxuICAgICAgISFvblNvcnQgfHxcbiAgICAgIChzb3J0T3JkZXIgIT09IG51bGwgJiYgc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAhIW9uRmlsdGVyIHx8XG4gICAgICAhIWZpbHRlcnNcbiAgICBsZXQgbWluV2lkdGggPSAwXG4gICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbWluV2lkdGggPVxuICAgICAgICBNYXRoLmNlaWwodGl0bGUubGVuZ3RoID4gNCA/IHRpdGxlLmxlbmd0aCAvIDIgOiB0aXRsZS5sZW5ndGgpICogMTMgKyAxNlxuICAgICAgaWYgKGNsaWNrYWJsZSkge1xuICAgICAgICBtaW5XaWR0aCArPSAyMFxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZmxleFZhbHVlXG4gICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGh9IDAgYXV0b2BcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHdpZHRoLmxlbmd0aCAtIHdpZHRoLmxhc3RJbmRleE9mKFwicHhcIikgPT09IDIpIHtcbiAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGguc2xpY2UoMCwgLTIpfSAwIGF1dG9gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGV4VmFsdWUgPSBgMCAwICR7d2lkdGh9YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmbGV4VmFsdWUgPSBgJHtNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKX0gMCBhdXRvYFxuICAgIH1cbiAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICBjb25zdCBjZWxsQ2xhc3NOYW1lID1cbiAgICAgIGdldENlbGxDbGFzc05hbWUgJiYgZ2V0Q2VsbENsYXNzTmFtZShyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpXG4gICAgY29uc3QgY2VsbFByb3BzID1cbiAgICAgIChnZXRDZWxsUHJvcHMgJiYgZ2V0Q2VsbFByb3BzKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleCkpIHx8IHt9XG4gICAgY29uc3QgY2VsbFN0eWxlID1cbiAgICAgIChnZXRDZWxsU3R5bGUgJiYgZ2V0Q2VsbFN0eWxlKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleCkpIHx8IHt9XG4gICAgY29uc3QgeyByb3dTcGFuLCBjb2xTcGFuLCAuLi5vdGhlckNlbGxQcm9wcyB9ID0gY2VsbFByb3BzXG4gICAgaWYgKHJvd1NwYW4gfHwgY29sU3Bhbikge1xuICAgICAgdGhpcy5jb21iaW5lZENlbGxzSW5mby5wdXNoKHtcbiAgICAgICAgY2VsbCxcbiAgICAgICAgY2VsbEluZGV4LFxuICAgICAgICBjb2xTcGFuLFxuICAgICAgICByb3csXG4gICAgICAgIHJvd0luZGV4LFxuICAgICAgICByb3dTcGFuLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGRgLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfcmVzaXppbmdgXTpcbiAgICAgICAgICAgIGRhdGFJbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZy5kYXRhSW5kZXggPT09IGRhdGFJbmRleCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0YF06IGlzRml4ZWRMZWZ0KGNlbGwpLFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX3JpZ2h0YF06IGlzRml4ZWRSaWdodChjZWxsKSxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0TGFzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgbyA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICBvID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBjZWxsSW5kZXh9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY2VsbClcbiAgICAgICAgICAgID8gKGZpeGVkQ29sdW1uc0luZm9zLmZpbmQobyA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KT8ub2Zmc2V0IHx8XG4gICAgICAgICAgICAgICAgMCkgKyAodGhlYWRQbGFjZWhvbGRlclZpc2libGUgPyBTRUxFQ1RfVERfV0lEVEggOiAwKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcmlnaHQ6IGlzRml4ZWRSaWdodChjZWxsKVxuICAgICAgICAgICAgPyBmaXhlZENvbHVtbnNJbmZvcy5maW5kKG8gPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleCk/Lm9mZnNldFxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZmxleDogcmVzaXplZENvbCA/IGAke3Jlc2l6ZWRDb2wudmFsdWV9IDAgYXV0b2AgOiBmbGV4VmFsdWUsXG4gICAgICAgICAgd2lkdGg6IHJlc2l6ZWRDb2xcbiAgICAgICAgICAgID8gcmVzaXplZENvbC52YWx1ZVxuICAgICAgICAgICAgOiB3aWR0aCB8fCBNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKSxcbiAgICAgICAgICBtYXhXaWR0aDogcmVzaXplZENvbCA/IHJlc2l6ZWRDb2wudmFsdWUgOiB3aWR0aCB8fCBcIlwiLFxuICAgICAgICB9fVxuICAgICAgICByb2xlPVwiY2VsbFwiXG4gICAgICAgIGRhdGEtcm93PXtyb3dJbmRleH1cbiAgICAgICAgZGF0YS1jb2x1bW49e2NlbGxJbmRleH1cbiAgICAgICAgey4uLm90aGVyQ2VsbFByb3BzfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tY2VsbGAsIGNlbGxDbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlxuICAgICAgICAgICAgICAodmVydGljYWxBbGlnbiAmJiBWRVJUSUNBTF9BTElHTlt2ZXJ0aWNhbEFsaWduXSkgfHxcbiAgICAgICAgICAgICAgKHZlcnRpY2FsQWxpZ25Qcm9wICYmIFZFUlRJQ0FMX0FMSUdOW3ZlcnRpY2FsQWxpZ25Qcm9wXSkgfHxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XG4gICAgICAgICAgICAgIChhbGlnbiAmJiBIT1JJWk9OVEFMX0FMSUdOW2FsaWduXSkgfHxcbiAgICAgICAgICAgICAgKGFsaWduUHJvcCAmJiBIT1JJWk9OVEFMX0FMSUdOW2FsaWduUHJvcF0pIHx8XG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC4uLmNlbGxTdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbElubmVyYH0+XG4gICAgICAgICAgICB7cmVuZGVyID8gcmVuZGVyKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleCkgOiByb3dbZGF0YUluZGV4XX1cbiAgICAgICAgICAgIHsocm93U3BhbiB8fCBjb2xTcGFuKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbF9jb21iaW5lZGB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMuZ2V0Q29tYmluZWRDZWxsU3R5bGUoXG4gICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgICAgcm93SW5kZXgsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5kZXgsXG4gICAgICAgICAgICAgICAgICByb3dTcGFuLFxuICAgICAgICAgICAgICAgICAgY29sU3BhblxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVuZGVyXG4gICAgICAgICAgICAgICAgICA/IHJlbmRlcihyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpXG4gICAgICAgICAgICAgICAgICA6IHJvd1tkYXRhSW5kZXhdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcHVibGljIGdldENvbWJpbmVkQ2VsbFN0eWxlID0gKFxuICAgIF86IElCYXNlT2JqZWN0LFxuICAgIGNvbDogSUNvbHVtblByb3BzLFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sSW5kZXg6IG51bWJlcixcbiAgICByb3dTcGFuOiBudW1iZXIsXG4gICAgY29sU3BhbjogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IGdldFRhYmxlQ2VsbCA9IChcbiAgICAgIHJvd0luZGV4UGFyYW06IG51bWJlcixcbiAgICAgIGNvbEluZGV4UGFyYW06IG51bWJlcixcbiAgICAgIGZpeGVkPzogYm9vbGVhbiB8IFwibGVmdFwiIHwgXCJyaWdodFwiXG4gICAgKSA9PiB7XG4gICAgICBpZiAodGhpcy5tYWluVGFibGUgJiYgIWZpeGVkKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMubWFpblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwicm93XCJdJylbXG4gICAgICAgICAgcm93SW5kZXhQYXJhbVxuICAgICAgICBdXG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuW2NvbEluZGV4UGFyYW1dXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IGNlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXgsIGNvbEluZGV4LCBjb2wuZml4ZWQpXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fVxuICAgIGlmIChyb3dTcGFuIDwgMiB8fCB0eXBlb2Ygcm93U3BhbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMCUgLSAxcHgpXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW5kQ2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCArIHJvd1NwYW4gLSAxLCBjb2xJbmRleCwgY29sLmZpeGVkKVxuICAgICAgaWYgKGNlbGwgJiYgZW5kQ2VsbCkge1xuICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZW5kQ2VsbFJlY3QgPSBlbmRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7ZW5kQ2VsbFJlY3QuaGVpZ2h0ICtcbiAgICAgICAgICBlbmRDZWxsUmVjdC50b3AgLVxuICAgICAgICAgIGNlbGxSZWN0LnRvcCAtXG4gICAgICAgICAgMX1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29sU3BhbiA8IDIgfHwgdHlwZW9mIGNvbFNwYW4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgIHN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgLSAxcHgpXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW5kQ2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCwgY29sSW5kZXggKyBjb2xTcGFuIC0gMSwgY29sLmZpeGVkKVxuICAgICAgaWYgKGNlbGwgJiYgZW5kQ2VsbCkge1xuICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZW5kQ2VsbFJlY3QgPSBlbmRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtlbmRDZWxsUmVjdC53aWR0aCArXG4gICAgICAgICAgZW5kQ2VsbFJlY3QubGVmdCAtXG4gICAgICAgICAgY2VsbFJlY3QubGVmdCAtXG4gICAgICAgICAgMX1weGBcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVJlZiA9IChcbiAgICBuYW1lPzpcbiAgICAgIHwgXCJhZmZpeEhlYWRlclwiXG4gICAgICB8IFwiYWZmaXhTY3JvbGxiYXJcIlxuICAgICAgfCBcIm1haW5UYWJsZVwiXG4gICAgICB8IFwibWFpblRhYmxlQm9keVwiXG4gICAgICB8IFwibWFpblRoZWFkXCJcbiAgICAgIHwgXCJ3cmFwcGVyXCJcbiAgKSA9PiAobm9kZTogYW55KSA9PiB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHRoaXNbbmFtZV0gPSBub2RlXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkYXRhU291cmNlLFxuICAgICAgZW1wdHlUZXh0LFxuICAgICAgaGVhZGVyQWZmaXhlZCxcbiAgICAgIGhlYWRlckFmZml4ZWRPZmZzZXRUb3AsXG4gICAgICBoZWFkZXJBZmZpeEdldFRhcmdldCxcbiAgICAgIGhlYWRlckVtcGhhc2l6ZWQsXG4gICAgICBoZWlnaHQsXG4gICAgICBsb2FkaW5nLFxuICAgICAgc2l6ZSxcbiAgICAgIHZpcnR1YWxTY3JvbGwsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHJlc3RQcm9wcyA9IG9taXQob3RoZXJQcm9wcywgW1xuICAgICAgXCJhbGlnblwiLFxuICAgICAgXCJjaGlsZHJlblwiLFxuICAgICAgXCJjb2x1bW5zXCIsXG4gICAgICBcImNvbHVtbnNSZXNpemFibGVcIixcbiAgICAgIFwiZGVmYXVsdEV4cGFuZGVkUm93S2V5c1wiLFxuICAgICAgXCJkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzXCIsXG4gICAgICBcImV4cGFuZEljb25WaXNpYmxlXCIsXG4gICAgICBcImV4cGFuZE9uUm93Q2xpY2tcIixcbiAgICAgIFwiZXhwYW5kZWRSb3dLZXlzXCIsXG4gICAgICBcImV4cGFuZGVkUm93UmVuZGVyXCIsXG4gICAgICBcImdldENlbGxDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0Q2VsbFByb3BzXCIsXG4gICAgICBcImdldENlbGxTdHlsZVwiLFxuICAgICAgXCJnZXRIZWFkQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldEhlYWRTdHlsZVwiLFxuICAgICAgXCJnZXRIZWFkQ2VsbENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRIZWFkQ2VsbFN0eWxlXCIsXG4gICAgICBcImdldFJvd0NsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRSb3dTdHlsZVwiLFxuICAgICAgXCJnZXRTZWxlY3RQcm9wc1wiLFxuICAgICAgXCJvbkV4cGFuZENoYW5nZVwiLFxuICAgICAgXCJvblNlbGVjdENoYW5nZVwiLFxuICAgICAgXCJvblNjcm9sbFwiLFxuICAgICAgXCJvblJvd0NsaWNrXCIsXG4gICAgICBcIm9uUm93TW91c2VFbnRlclwiLFxuICAgICAgXCJvblJvd01vdXNlTGVhdmVcIixcbiAgICAgIFwic2VsZWN0TXVsdGlwbGVcIixcbiAgICAgIFwic2VsZWN0ZWRSb3dLZXlzXCIsXG4gICAgICBcInNlbGVjdE9uUm93Q2xpY2tcIixcbiAgICAgIFwidmVydGljYWxBbGlnblwiLFxuICAgICAgXCJ2aXJ0dWFsTGlzdFByb3BzXCIsXG4gICAgICBcInZpcnR1YWxMaXN0U3R5bGVcIixcbiAgICBdKVxuXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaXNNYWluVGFibGVPdmVyZmxvd1gsIGlzTWFpblRhYmxlT3ZlcmZsb3dZIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuY29sdW1uTWFuYWdlci5yZXNldChjaGlsZHJlbilcbiAgICB9XG5cbiAgICBjb25zdCB7IGdldEdyb3VwQ29sdW1uc0RlcHRoIH0gPSB0aGlzLmNvbHVtbk1hbmFnZXJcblxuICAgIGNvbnN0IGVtcHR5ID0gIShkYXRhU291cmNlICYmIGRhdGFTb3VyY2UubGVuZ3RoKVxuXG4gICAgY29uc3QgY2xhc3NTZXQgPSBjbGFzc05hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYCR7cHJlZml4fS13cmFwcGVyYCxcbiAgICAgIGAke3ByZWZpeH0tJHtzaXplfWAsXG4gICAgICB7XG4gICAgICAgIFtgJHtwcmVmaXh9LWhlYWRlckVtcGhhc2l6ZWRgXTogaGVhZGVyRW1waGFzaXplZCxcbiAgICAgICAgW2Ake3ByZWZpeH0tZW1wdHlgXTogZW1wdHksXG4gICAgICAgIFtgJHtwcmVmaXh9LWxvYWRpbmdgXTogbG9hZGluZyxcbiAgICAgICAgW2Ake3ByZWZpeH0tb3ZlcmZsb3cteGBdOiBpc01haW5UYWJsZU92ZXJmbG93WCxcbiAgICAgICAgW2Ake3ByZWZpeH0tb3ZlcmZsb3cteWBdOiBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgICAgW2Ake3ByZWZpeH0tdmlydHVhbFNjcm9sbGBdOiB2aXJ0dWFsU2Nyb2xsLFxuICAgICAgfVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NTZXR9IHJlZj17dGhpcy5zYXZlUmVmKFwid3JhcHBlclwiKX0gey4uLnJlc3RQcm9wc30+XG4gICAgICAgIDxBbmltYXRlXG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cImZhZGVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgdG9wOiBgJHtURF9IRUlHSFRbc2l6ZSB8fCBcInNtYWxsXCJdfXB4YCxcbiAgICAgICAgICAgIHpJbmRleDogXCJjYWxjKHZhcigtLXotaW5kZXgtYWZmaXgpICsgMilcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2xvYWRpbmcgJiZcbiAgICAgICAgICAgIChoZWFkZXJBZmZpeGVkID8gKFxuICAgICAgICAgICAgICA8QWZmaXhcbiAgICAgICAgICAgICAgICBvZmZzZXRUb3A9e1xuICAgICAgICAgICAgICAgICAgKGhlYWRlckFmZml4ZWRPZmZzZXRUb3AgfHwgMCkgKyBURF9IRUlHSFRbc2l6ZSB8fCBcInNtYWxsXCJdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gdGhpcy53cmFwcGVyfVxuICAgICAgICAgICAgICAgIGdldFRhcmdldD17aGVhZGVyQWZmaXhHZXRUYXJnZXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByb2dyZXNzYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgPC9BZmZpeD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXByb2dyZXNzYH0+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0FuaW1hdGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10YWJsZXNgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1pbm5lclNjcm9sbGBdOiAhIWhlaWdodCxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93ZWRgXTogaXNNYWluVGFibGVPdmVyZmxvd1ksXG4gICAgICAgICAgICBbYCR7cHJlZml4fS1oYXNGaXhlZFJpZ2h0Q29sdW1uc2BdOiB0aGlzLmNvbHVtbk1hbmFnZXIuaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCgpLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXhIZWlnaHQ6IGhlaWdodCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBoZWlnaHRcbiAgICAgICAgICAgICAgPyBgJHtURF9IRUlHSFRbc2l6ZSB8fCBcInNtYWxsXCJdICogZ2V0R3JvdXBDb2x1bW5zRGVwdGgoKX1weGBcbiAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tbWFpblRhYmxlYH1cbiAgICAgICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRhYmxlXCIpfVxuICAgICAgICAgICAgcm9sZT1cInRhYmxlXCJcbiAgICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLmhhbmRsZU1haW5UYWJsZVNjcm9sbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRhYmxlKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZW1wdHkgJiYgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcGxhY2Vob2xkZXJgfT57ZW1wdHlUZXh0fTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5wb2x5ZmlsbChUYWJsZSlcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiJdfQ==