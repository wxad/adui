"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var noop = function noop() {};

var prefix = "adui-table";
var TD_MIN_WIDTH = 100;
var SELECT_TD_WIDTH = 50;
var SELECT_AND_EXPAND_TD_WIDTH = 80;
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
      var _classNames, _this$mainTable;

      var _this$props7 = _this.props,
          dataSource = _this$props7.dataSource,
          expandIconVisible = _this$props7.expandIconVisible,
          expandedRowRender = _this$props7.expandedRowRender,
          expandOnRowClick = _this$props7.expandOnRowClick,
          getHeadClassName = _this$props7.getHeadClassName,
          getHeadStyle = _this$props7.getHeadStyle,
          getRowClassName = _this$props7.getRowClassName,
          getRowProps = _this$props7.getRowProps,
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

      var selectAndExpand = !!onSelectChange && !!onExpandChange;
      var theadPlaceholderVisible = expandIconVisible && (!!onSelectChange || !!onExpandChange);
      var thead = React.createElement("div", {
        key: 0,
        className: (0, _classnames["default"])("".concat(prefix, "-thead"), getHeadClassName && getHeadClassName()),
        onMouseEnter: _this.handleTheadMouseEnter,
        onMouseLeave: _this.handleTheadMouseLeave,
        ref: _this.saveRef("mainThead"),
        style: theadStyle
      }, theadPlaceholderVisible && React.createElement("div", {
        className: (0, _classnames["default"])("".concat(prefix, "-th"), "".concat(prefix, "-th_functional"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-th_left"), isAnyColumnsLeftFixed()), _defineProperty(_classNames, "".concat(prefix, "-th_functional_both"), selectAndExpand), _classNames)),
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
            })) === null || _fixedColumnsInfos$fi3 === void 0 ? void 0 : _fixedColumnsInfos$fi3.offset) || 0) + (theadPlaceholderVisible ? selectAndExpand ? SELECT_AND_EXPAND_TD_WIDTH : SELECT_TD_WIDTH : 0) : undefined,
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
        var _classNames5, _classNames6, _selectPropsGetted$po;

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
        var selectContent = selectMultiple ? React.createElement(_checkbox["default"], selectProps) : React.createElement(_radio["default"], selectProps);
        var expandContent = React.createElement("div", {
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
        }));
        var selectCell = onExpandChange ? expandContent : selectContent;

        if (selectAndExpand) {
          selectCell = React.createElement("div", {
            className: "".concat(prefix, "-selectComponent-wrapper")
          }, selectContent, expandContent);
        }

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
          className: (0, _classnames["default"])("".concat(prefix, "-td"), "".concat(prefix, "-td_functional"), (_classNames6 = {}, _defineProperty(_classNames6, "".concat(prefix, "-td_left"), isAnyColumnsLeftFixed()), _defineProperty(_classNames6, "".concat(prefix, "-td_functional_both"), selectAndExpand), _classNames6)),
          key: "functional",
          role: "cell"
        }, React.createElement("div", {
          className: "".concat(prefix, "-cell"),
          style: {
            alignItems: verticalAlign && VERTICAL_ALIGN[verticalAlign]
          }
        }, selectPropsGetted !== null && selectPropsGetted !== void 0 && (_selectPropsGetted$po = selectPropsGetted.popoverProps) !== null && _selectPropsGetted$po !== void 0 && _selectPropsGetted$po.popup ? React.createElement(_popover["default"], _extends({
          mouseEnterDelay: 0.1,
          alignEdge: false,
          placement: "right"
        }, (getSelectProps && getSelectProps(row, rowIndex) || {}).popoverProps), selectCell) : selectCell)), colArray);

        if (getRowProps) {
          var _getRowProps = getRowProps(row, rowIndex),
              popover = _getRowProps.popover;

          if (popover !== null && popover !== void 0 && popover.popup) {
            tr = React.createElement(_popover["default"], popover, tr);
          }
        }

        if (onExpandChange) {
          return [tr, expandedRowKeys.includes(key) ? React.createElement("div", {
            className: "".concat(prefix, "-expandRow"),
            key: "tr-expand"
          }, React.createElement("div", {
            className: "".concat(prefix, "-expandRow-inner"),
            style: isMainTableOverflowX ? {
              width: mainTableStyle.width
            } : undefined
          }, !!expandedRowRender && expandedRowRender(row, rowIndex))) : null];
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
        itemKey: "key",
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
      var selectAndExpand = !!onSelectChange && !!onExpandChange;
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
          })) === null || _fixedColumnsInfos$fi7 === void 0 ? void 0 : _fixedColumnsInfos$fi7.offset) || 0) + (theadPlaceholderVisible ? selectAndExpand ? SELECT_AND_EXPAND_TD_WIDTH : SELECT_TD_WIDTH : 0) : undefined,
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
        style: _objectSpread(_objectSpread({}, _this.getCombinedCellStyle(row, cell, rowIndex, cellIndex, rowSpan, colSpan)), {}, {
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

      var restProps = (0, _omit["default"])(otherProps, ["align", "children", "columns", "columnsResizable", "defaultExpandedRowKeys", "defaultSelectedRowKeys", "expandIconVisible", "expandOnRowClick", "expandedRowKeys", "expandedRowRender", "getCellClassName", "getCellProps", "getCellStyle", "getHeadClassName", "getHeadStyle", "getHeadCellClassName", "getHeadCellStyle", "getRowClassName", "getRowProps", "getRowStyle", "getSelectProps", "onExpandChange", "onSelectChange", "onScroll", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "selectMultiple", "selectedRowKeys", "selectOnRowClick", "verticalAlign", "virtualListProps", "virtualListStyle"]);
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
  getRowProps: _propTypes["default"].func,
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
  getRowProps: function getRowProps() {
    return {};
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

var _default = Table;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJURF9NSU5fV0lEVEgiLCJTRUxFQ1RfVERfV0lEVEgiLCJTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSCIsIlREX0hFSUdIVCIsImxhcmdlIiwibWVkaXVtIiwibWluaSIsInNtYWxsIiwiSE9SSVpPTlRBTF9BTElHTiIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsIlZFUlRJQ0FMX0FMSUdOIiwiYm90dG9tIiwidG9wIiwiaXNGaXhlZExlZnQiLCJjb2wiLCJmaXhlZCIsImlzRml4ZWRSaWdodCIsIlRhYmxlIiwicHJvcHMiLCJjb21iaW5lZENlbGxzSW5mbyIsImFmZml4SGVhZGVyIiwiYWZmaXhTY3JvbGxiYXIiLCJtYWluVGFibGUiLCJtYWluVGFibGVCb2R5IiwibWFpblRoZWFkIiwid3JhcHBlciIsImRlYm91bmNlZFdpbmRvd1Jlc2l6ZSIsInJlc2l6ZUV2ZW50IiwiY29sdW1uTWFuYWdlciIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJpc0FueUNvbHVtbnNGaXhlZCIsImhlYWRlckFmZml4ZWQiLCJoZWlnaHQiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJ3aW5kb3ciLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImRhdGFTb3VyY2VPbGQiLCJkYXRhU291cmNlIiwiZ2V0Q2VsbFByb3BzT2xkIiwiZ2V0Q2VsbFByb3BzIiwic2V0VGltZW91dCIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmUiLCJjbGVhciIsInJlc2l6ZUNvbHVtblN0YXJ0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiY3Vyc29yIiwiY3VycmVudGx5UmVzaXppbmciLCJkYXRhSW5kZXgiLCJwYXJlbnRXaWR0aCIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzdGFydFgiLCJwYWdlWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJyZXNpemVDb2x1bW5FbmQiLCJyZXNpemVkIiwiYmFzZVdpZHRoIiwiTWF0aCIsImNlaWwiLCJ0aXRsZSIsIm5ld1Jlc2l6ZWQiLCJmaWx0ZXIiLCJvIiwibmV3V2lkdGgiLCJtYXgiLCJvblNvcnQiLCJvbkZpbHRlciIsInB1c2giLCJ2YWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc01haW5UYWJsZU92ZXJmbG93WCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJpc01haW5UYWJsZU92ZXJmbG93WSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImlzUmVzaXplclNob3ciLCJvbGRTdHlsZSIsIm1haW5UYWJsZVN0eWxlIiwicmVjdCIsImhhbmRsZU1haW5UYWJsZVNjcm9sbCIsIm9uU2Nyb2xsIiwiYWZmaXhlZFRvcCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImZpeGVkTm9kZSIsInNjcm9sbExlZnQiLCJzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVJvd0NsaWNrIiwicm93IiwiaSIsImV4cGFuZE9uUm93Q2xpY2siLCJnZXRTZWxlY3RQcm9wcyIsIm9uUm93Q2xpY2siLCJzZWxlY3RPblJvd0NsaWNrIiwic2VsZWN0ZWRSb3dLZXlzIiwia2V5IiwiZGlzYWJsZWQiLCJoYW5kbGVTZWxlY3QiLCJpbmNsdWRlcyIsImhhbmRsZUV4cGFuZCIsImhhbmRsZVRoUmVzaXplIiwiaW5kZXgiLCJmaXhlZFBvc2l0aW9uIiwiZ2V0Q29sdW1ucyIsImZpeGVkQ29sdW1uc0luZm9zIiwiY29sdW1ucyIsImZpbmQiLCJwIiwiZmluZEluZGV4Iiwic3BsaWNlIiwic29ydCIsImEiLCJiIiwiZml4ZWRDb2x1bW5zSW5mb3NMZWZ0IiwiZml4ZWRDb2x1bW5zSW5mb3NSaWdodCIsImZvckVhY2giLCJjb2xJbmRleCIsImlzTGFzdExlZnQiLCJvZmZzZXQiLCJzbGljZSIsInJlZHVjZSIsImFjYyIsImN1ciIsImlzRmlyc3RSaWdodCIsImhhbmRsZVRoZWFkTW91c2VFbnRlciIsImhhbmRsZVRoZWFkTW91c2VMZWF2ZSIsIk9iamVjdCIsImtleXMiLCJleHBhbmRlZFJvd0tleXNQcm9wIiwiZXhwYW5kZWRSb3dLZXlzIiwib25FeHBhbmRDaGFuZ2UiLCJpbmRleE9mIiwiY2hlY2tlZCIsIm9uU2VsZWN0Q2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzUHJvcCIsInNlbGVjdE11bHRpcGxlIiwiaGFuZGxlU2VsZWN0QWxsIiwiYXZhaWxhYmxlS2V5cyIsImdldEF2YWlsYWJsZVJvd3NLZXlzIiwiaGFzU2VsZWN0ZWRBbGwiLCJldmVyeSIsImdlbmVyYXRlVGFibGUiLCJleHBhbmRJY29uVmlzaWJsZSIsImV4cGFuZGVkUm93UmVuZGVyIiwiZ2V0SGVhZENsYXNzTmFtZSIsImdldEhlYWRTdHlsZSIsImdldFJvd0NsYXNzTmFtZSIsImdldFJvd1Byb3BzIiwiZ2V0Um93U3R5bGUiLCJoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wIiwiaGVhZGVyQWZmaXhHZXRUYXJnZXQiLCJvblJvd01vdXNlRW50ZXIiLCJvblJvd01vdXNlTGVhdmUiLCJzaXplIiwidmVydGljYWxBbGlnbiIsInZpcnR1YWxMaXN0UHJvcHMiLCJ2aXJ0dWFsTGlzdFN0eWxlIiwidmlydHVhbFNjcm9sbCIsImFmZml4ZWRCb3R0b20iLCJnZXRHcm91cENvbHVtbnNEZXB0aCIsImlzQW55Q29sdW1uc0xlZnRGaXhlZCIsInRoZWFkU3R5bGUiLCJzZWxlY3RBbmRFeHBhbmQiLCJ0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSIsInRoZWFkIiwic2F2ZVJlZiIsIm1hcCIsImFsaWduIiwiZmlsdGVycyIsInNvcnRPcmRlciIsInJlc2l6ZWRDb2wiLCJjbGlja2FibGUiLCJ1bmRlZmluZWQiLCJtaW5XaWR0aCIsImZsZXhWYWx1ZSIsImxhc3RJbmRleE9mIiwid2lkdGhSZXNpemUiLCJmbGV4IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJnZW5lcmF0ZVRoQ2VsbCIsImNoaWxkcmVuIiwiY2hpbGRDb2wiLCJjaGlsZENvbEluZGV4IiwiZ3JhbmRDb2wiLCJncmFuZENvbEluZGV4IiwiZ2VuZXJhdGVUcnMiLCJyb3dJbmRleCIsImNvbEFycmF5Iiwic2VsZWN0UHJvcHNHZXR0ZWQiLCJhbGxTZWxlY3RQcm9wcyIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwib25DbGljayIsInNlbGVjdFByb3BzIiwic2VsZWN0Q29udGVudCIsImV4cGFuZENvbnRlbnQiLCJzZWxlY3RDZWxsIiwiZ2VuZXJhdGVUciIsImNvbHVtbnNQYXJhbSIsInBhcmVudEluZGV4IiwiY29sSW5kZXhQYXJhbSIsImNoaWxkcmVuQ291bnQiLCJnZW5lcmF0ZVRib2R5Q2VsbCIsInRyIiwiYWxpZ25JdGVtcyIsInBvcG92ZXJQcm9wcyIsInBvcHVwIiwicG9wb3ZlciIsImJvb2wiLCJkaXNwbGF5IiwiekluZGV4IiwiZmxleERpcmVjdGlvbiIsIm9wdGlvbnMiLCJjb2x1bW5zUmVzaXphYmxlIiwiZ2V0SGVhZENlbGxDbGFzc05hbWUiLCJnZXRIZWFkQ2VsbFN0eWxlIiwiY29sUmVzaXphYmxlIiwicmVzaXphYmxlIiwiaXNMYXN0VGgiLCJ0aENlbGwiLCJqdXN0aWZ5Q29udGVudCIsIm9yZGVyIiwiZmlsdGVyZWRWYWx1ZSIsImZpbHRlclZpc2libGUiLCJmaWx0ZXJNdWx0aXBsZSIsImZpbHRlclBvcG92ZXJQcm9wcyIsInZpc2libGUiLCJvbkZpbHRlclZpc2libGVDaGFuZ2UiLCJjZWxsIiwiY2VsbEluZGV4IiwiYWxpZ25Qcm9wIiwiZ2V0Q2VsbENsYXNzTmFtZSIsImdldENlbGxTdHlsZSIsInZlcnRpY2FsQWxpZ25Qcm9wIiwicmVuZGVyIiwiY2VsbENsYXNzTmFtZSIsImNlbGxQcm9wcyIsImNlbGxTdHlsZSIsInJvd1NwYW4iLCJjb2xTcGFuIiwib3RoZXJDZWxsUHJvcHMiLCJnZXRDb21iaW5lZENlbGxTdHlsZSIsIl8iLCJfXyIsImdldFRhYmxlQ2VsbCIsInJvd0luZGV4UGFyYW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5kQ2VsbCIsImNlbGxSZWN0IiwiZW5kQ2VsbFJlY3QiLCJuYW1lIiwibm9kZSIsImRlZmF1bHRFeHBhbmRlZFJvd0tleXMiLCJkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzIiwiQ29sdW1uTWFuYWdlciIsImVtcHR5VGV4dCIsImhlYWRlckVtcGhhc2l6ZWQiLCJsb2FkaW5nIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsInJlc2V0IiwiZW1wdHkiLCJjbGFzc1NldCIsInBvc2l0aW9uIiwiaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCIsIm1heEhlaWdodCIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbHVtbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwiRXJyb3IiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxZQUFmO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLEdBQXJCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0EsSUFBTUMsMEJBQTBCLEdB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QWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QnlKLElBQUFBLFFBQVEsQ0FBQ3pKLGVBQVQsR0FBMkJBLGVBQTNCO0FBQ0Q7O0FBQ0QsTUFBSW5DLGVBQWUsS0FBSyxJQUF4QixFQUE4QjtBQUM1QjRMLElBQUFBLFFBQVEsQ0FBQzVMLGVBQVQsR0FBMkJBLGVBQTNCO0FBQ0Q7O0FBQ0QsU0FBT2dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZMkosUUFBWixFQUFzQm5RLE1BQXRCLEdBQStCLENBQS9CLEdBQW1DbVEsUUFBbkMsR0FBOEMsSUFBckQ7QUFDRCxDOztlQXk2Q1l6UixLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvaW50ZXJhY3RpdmUtc3VwcG9ydHMtZm9jdXMgKi9cbi8qKlxuICogVGFibGUg57uE5Lu25bCG5LiN5Lya5L+u5pS55oiQIEZ1bmN0aW9uQ29tcG9uZW5077yMXG4gKiDlm6DkuLrogIPomZHliLDkuYvliY3lnKjkvb/nlKjml7blrZjlnKjkuI3lsJHpgJrov4cg5a6e5L6LLnRhYmxlIOeahOaWueazleebtOaOpeiuv+mXriA8dGFibGUgLz4g5YWD57Sg55qE55So5rOV44CCXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIlxuaW1wb3J0IExpc3QgZnJvbSBcInJjLXZpcnR1YWwtbGlzdFwiXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJkZWJvdW5jZVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgQ29sdW1uLCB7IElDb2x1bW5Qcm9wcyB9IGZyb20gXCIuL0NvbHVtblwiXG5pbXBvcnQgQWZmaXggZnJvbSBcIi4uL2FmZml4XCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi4vcmFkaW9cIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFRhYmxlU29ydCBmcm9tIFwiLi9UYWJsZVNvcnRcIlxuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gXCIuL1RhYmxlRmlsdGVyXCJcbmltcG9ydCBDb2x1bW5NYW5hZ2VyIGZyb20gXCIuL0NvbHVtbk1hbmFnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5pbnRlcmZhY2UgSUZpeGVkQ29sdW1uc0luZm8ge1xuICB3aWR0aDogbnVtYmVyXG4gIGRhdGFJbmRleDogc3RyaW5nXG4gIGZpeGVkOiBcImxlZnRcIiB8IFwicmlnaHRcIlxuICBpbmRleDogbnVtYmVyXG4gIGlzTGFzdExlZnQ/OiBib29sZWFuXG4gIGlzRmlyc3RSaWdodD86IGJvb2xlYW5cbiAgb2Zmc2V0PzogbnVtYmVyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJsZVwiXG5jb25zdCBURF9NSU5fV0lEVEggPSAxMDBcbmNvbnN0IFNFTEVDVF9URF9XSURUSCA9IDUwXG5jb25zdCBTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSCA9IDgwXG5jb25zdCBURF9IRUlHSFQgPSB7XG4gIGxhcmdlOiA2MCxcbiAgbWVkaXVtOiA1MCxcbiAgbWluaTogNDAsXG4gIHNtYWxsOiA0MCxcbn1cbmNvbnN0IEhPUklaT05UQUxfQUxJR04gPSB7XG4gIGNlbnRlcjogXCJjZW50ZXJcIiBhcyBcImNlbnRlclwiLFxuICBsZWZ0OiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbiAgcmlnaHQ6IFwiZmxleC1lbmRcIiBhcyBcImZsZXgtZW5kXCIsXG59XG5jb25zdCBWRVJUSUNBTF9BTElHTiA9IHtcbiAgYm90dG9tOiBcImZsZXgtZW5kXCIgYXMgXCJmbGV4LWVuZFwiLFxuICBjZW50ZXI6IFwiY2VudGVyXCIgYXMgXCJjZW50ZXJcIixcbiAgdG9wOiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbn1cbmNvbnN0IGlzRml4ZWRMZWZ0ID0gKGNvbDogSUJhc2VPYmplY3QpOiBib29sZWFuID0+XG4gIGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIgfHwgY29sLmZpeGVkID09PSB0cnVlXG5jb25zdCBpc0ZpeGVkUmlnaHQgPSAoY29sOiBJQmFzZU9iamVjdCk6IGJvb2xlYW4gPT4gY29sLmZpeGVkID09PSBcInJpZ2h0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVQcm9wczxUIGV4dGVuZHMgSUJhc2VPYmplY3QgPSBJQmFzZU9iamVjdD4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+awtOW5s+mdoOm9kOaWueWQkVxuICAgKi9cbiAgYWxpZ24/OiBudWxsIHwgXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogYW55XG4gIC8qKlxuICAgKiDku6XmlbDnu4TnmoTmlrnlvI/kvKDlhaUgQ29sdW1uc++8jOWmguaenOS8oOWFpeS6huatpCBQcm9w77yM5YiZIFRhYmxlIOS8muW/veeVpSBjaGlsZHJlblxuICAgKi9cbiAgY29sdW1ucz86IElDb2x1bW5Qcm9wczxUPltdIHwgbnVsbFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaOp+WItuaVtOS4qiBUYWJsZSDnmoQgQ29sdW1ucyDog73lkKbosIPmlbTlrr3luqZcbiAgICovXG4gIGNvbHVtbnNSZXNpemFibGU/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5pWw5o2u5rqQXG4gICAqL1xuICBkYXRhU291cmNlPzogVFtdXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog56m65pWw5o2u5rqQ5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBlbXB0eVRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAqIDEuIOS9v+eUqCBleHBhbmRPblJvd0NsaWNrIOaIluiAhVxuICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgKi9cbiAgZXhwYW5kSWNvblZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgKi9cbiAgZXhwYW5kT25Sb3dDbGljaz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeS7juWklumDqOaOp+WItu+8jOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGV4cGFuZGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICovXG4gIGV4cGFuZGVkUm93UmVuZGVyPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLznmoTnsbvlkI3vvJoocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldENlbGxDbGFzc05hbWU/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoTnlLHnu4Tku7bop4TlrprnmoQgcHJvcO+8jFxuICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldENlbGxQcm9wcz86IChcbiAgICByb3c6IFQsXG4gICAgY29sOiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBJQmFzZU9iamVjdCB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsU3R5bGU/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9riB0aGVhZCDnmoTnsbvlkI3vvJooKSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0SGVhZENsYXNzTmFtZT86ICgpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jCgpID0+ICh7fSlcbiAgICovXG4gIGdldEhlYWRTdHlsZT86ICgpID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKogVEgg55qE57G75ZCN77yaKGNvbCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRIZWFkQ2VsbENsYXNzTmFtZT86IChjb2w6IElCYXNlT2JqZWN0LCBjb2xJbmRleDogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4qiBUSCDkuIrnmoQgc3R5bGXvvIwoY29sLCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0SGVhZENlbGxTdHlsZT86IChcbiAgICBjb2w6IElCYXNlT2JqZWN0LFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P6KGM55qE57G75ZCN77yaKHJvdywgcm93SW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRSb3dDbGFzc05hbWU/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+ihjOS4iueahOeUsee7hOS7tuinhOWumueahCBwcm9w77yMXG4gICAqIOWmgiBwb3BvdmVy77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldFJvd1Byb3BzPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4geyBwb3BvdmVyPzogSVBvcG92ZXJQcm9wcyB9XG4gIC8qKlxuICAgKiDorr7nva7mr4/ooYznmoQgc3R5bGXvvIwocm93LCByb3dJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Um93U3R5bGU/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6K6+572u5q+P5LiqIENoZWNrYm94L1JhZGlvIOS4iueahCBwcm9wIChyb3csIHJvd0luZGV4KSA9PiAoe30p77ybXG4gICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZ2V0U2VsZWN0UHJvcHM/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBJQmFzZU9iamVjdFxuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB6KGo5aS05Zu65a6a5Yiw6aG16Z2i5LiKXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+R6KGo5aS05Zu65a6aXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlj4LogIMgPEFmZml4IC8+IOeahCBnZXRUYXJnZXQgUHJvcFxuICAgKi9cbiAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICAvKipcbiAgICog5Yqg6YeN5aS06YOo77yM5byA5ZCv5LmL5ZCO6KGo5aS05bCG5Lya5Yqg57KXICsg6IOM5pmvXG4gICAqL1xuICBoZWFkZXJFbXBoYXNpemVkPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a6auY5bqm5Lul5a6e546w6KGo5qC85YaF5rua5Yqo77yM5q2kIHByb3Ag5LiOIHByb3AgaGVhZGVyQWZmaXhlZCDkupLmlqXjgIJcbiAgICovXG4gIGhlaWdodD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuWKoOi9veS4rVxuICAgKi9cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv5bGV5byA5Yqf6IO955qE5Yik5pat77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKChrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBjbGljayBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93Q2xpY2s/OlxuICAgIHwgKChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIsIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dNb3VzZUVudGVyPzpcbiAgICB8ICgocm93OiBULCByb3dJbmRleDogbnVtYmVyLCBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDmr4/ooYznmoQgbW91c2VMZWF2ZSBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93TW91c2VMZWF2ZT86XG4gICAgfCAoKHJvdzogVCwgcm93SW5kZXg6IG51bWJlciwgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6YCJ5oup5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/pgInmi6nlip/og73nmoTliKTmlq3vvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgb25TZWxlY3RDaGFuZ2U/OiAoKGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uU2Nyb2xsPzogKChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHlpJogLyDljZXpgInvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBzZWxlY3RNdWx0aXBsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkemAieaLqeOAglxuICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAqL1xuICBzZWxlY3RPblJvd0NsaWNrPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jFxuICAgKiDlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqM77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIHNlbGVjdGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgKi9cbiAgdmVydGljYWxBbGlnbj86IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIlxuICAvKipcbiAgICog6Jma5ouf5YiX6KGo55qEIFByb3Bz77yM6K+35Y+C6ICDIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgdmlydHVhbExpc3RQcm9wcz86IElCYXNlT2JqZWN0XG4gIC8qKlxuICAgKiDomZrmi5/liJfooajnmoTmoLflvI/vvIzor7flnKjov5nph4zmjIflrprlrr3luqbvvIzpu5jorqTlsIbkvJrmnIkgNTAwIHB4IOWuveW6plxuICAgKi9cbiAgdmlydHVhbExpc3RTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaYr+WQpuW8gOWQr+iZmuaLn+a7muWKqO+8jOatpCBQcm9wIOivt+mFjeWQiCBoZWlnaHQgUHJvcCDlkIzml7bkvb/nlKjvvIznlKjkuo7lpITnkIblpKfmlbDmja7ph4/kuIvnmoTomZrmi5/lhoXmu5rliqjvvJtcbiAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAqL1xuICB2aXJ0dWFsU2Nyb2xsPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcbiAgYWZmaXhlZFRvcDogYm9vbGVhblxuICBhZmZpeGVkQm90dG9tOiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY29tYmluZWRDZWxsc0luZm86IElCYXNlT2JqZWN0W11cbiAgZXhwYW5kZWRSb3dLZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+XG4gIGZpeGVkQ29sdW1uc0luZm9zOiBBcnJheTxJRml4ZWRDb2x1bW5zSW5mbz5cbiAgbWFpblRhYmxlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGJvb2xlYW5cbiAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGJvb2xlYW5cbiAgaXNSZXNpemVyU2hvdzogYm9vbGVhblxuICBjdXJyZW50bHlSZXNpemluZzogSUJhc2VPYmplY3RcbiAgcmVzaXplZDogSUJhc2VPYmplY3RbXVxuICBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbn1cblxuLyoqXG4gKiDooajmoLzmmK/kuIDnp43moLzlvI/ljJbkv6Hmga/nmoTlsZXnpLrlvaLlvI/jgILpgJrluLjmnI3liqHkuo7lpKfph4/mlbDmja7mtY/op4jjgIHnrqHnkIblnLrmma/jgIJcbiAqL1xuY2xhc3MgVGFibGU8VCBleHRlbmRzIElCYXNlT2JqZWN0ID0gSUJhc2VPYmplY3Q+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBJVGFibGVQcm9wczxUPixcbiAgSVRhYmxlU3RhdGVcbj4ge1xuICBwdWJsaWMgc3RhdGljIENvbHVtbjogdHlwZW9mIENvbHVtbiA9IENvbHVtblxuXG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOe7n+S4gOWcsOaOp+WItuWIl+awtOW5s+mdoOm9kOaWueWQkVxuICAgICAqL1xuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKSxcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOS7peaVsOe7hOeahOaWueW8j+S8oOWFpSBDb2x1bW5z77yM5aaC5p6c5Lyg5YWl5LqG5q2kIFByb3DvvIzliJkgVGFibGUg5Lya5b+955WlIGNoaWxkcmVuXG4gICAgICovXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOaOp+WItuaVtOS4qiBUYWJsZSDnmoQgQ29sdW1ucyDog73lkKbosIPmlbTlrr3luqZcbiAgICAgKi9cbiAgICBjb2x1bW5zUmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmlbDmja7mupBcbiAgICAgKi9cbiAgICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR6buY6K6k5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDnqbrmlbDmja7mupDml7bmmL7npLrnmoTlhoXlrrlcbiAgICAgKi9cbiAgICBlbXB0eVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAgICogMS4g5L2/55SoIGV4cGFuZE9uUm93Q2xpY2sg5oiW6ICFXG4gICAgICogMi4g6ZyA6KaB5Zyo57uE5Lu25aSW6Ieq6KGM6LCD55So57uE5Lu25pa55rOV5a6M5oiQ5bGV5byA5Yqf6IO977yIdGhpcy50YWJsZS5oYW5kbGVFeHBhbmQocm93LmtleSnvvInjgIJcbiAgICAgKi9cbiAgICBleHBhbmRJY29uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R5bGV5byA5pS26LW3XG4gICAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAgICovXG4gICAgZXhwYW5kT25Sb3dDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5bGV5byA6KGM55qE5YaF5a65XG4gICAgICovXG4gICAgZXhwYW5kZWRSb3dSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOeahOexu+WQje+8mihyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldENlbGxDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahOeUsee7hOS7tuinhOWumueahCBwcm9w77yMXG4gICAgICog5aaCIHJvd1NwYW4gY29sU3Bhbu+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Q2VsbFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoQgc3R5bGXvvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgICAqL1xuICAgIGdldENlbGxTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIHRoZWFkIOeahOexu+WQje+8mnBvc2l0aW9uID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0SGVhZENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jHBvc2l0aW9uID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRIZWFkU3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4qiBUSCDnmoTnsbvlkI3vvJooY29sLCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5LiqIFRIIOS4iueahCBzdHlsZe+8jChjb2wsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0SGVhZENlbGxTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P6KGM55qE57G75ZCN77yaKHJvdywgcm93SW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0Um93Q2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/ooYzkuIrnmoTnlLHnu4Tku7bop4TlrprnmoQgcHJvcO+8jFxuICAgICAqIOWmgiBwb3BvdmVy77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRSb3dQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P6KGM55qEIHN0eWxl77yMKHJvdywgcm93SW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRSb3dTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6K6+572u5q+P5LiqIENoZWNrYm94L1JhZGlvIOS4iueahCBwcm9wIChyb3csIHJvd0luZGV4KSA9PiAoe30p77ybXG4gICAgICog5Y+v5Lul5Zyo6L+Z6YeM5Zue5LygIGRpc2FibGVkOiB0cnVlLCDmjqfliLbor6XooYzkuI3og73pgInmi6nvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZ2V0U2VsZWN0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpumcgOimgeihqOWktOWbuuWumuWIsOmhtemdouS4ilxuICAgICAqL1xuICAgIGhlYWRlckFmZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOi3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPkeihqOWktOWbuuWumlxuICAgICAqL1xuICAgIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5Y+C6ICDIDxBZmZpeCAvPiDnmoQgZ2V0VGFyZ2V0IFByb3BcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeEdldFRhcmdldDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5Yqg6YeN5aS06YOo77yM5byA5ZCv5LmL5ZCO6KGo5aS05bCG5Lya5Yqg57KXICsg6IOM5pmvXG4gICAgICovXG4gICAgaGVhZGVyRW1waGFzaXplZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5oyH5a6a6auY5bqm5Lul5a6e546w6KGo5qC85YaF5rua5Yqo77yM5q2kIHByb3Ag5LiOIHByb3AgaGVhZGVyQWZmaXhlZCDkupLmlqXjgIJcbiAgICAgKi9cbiAgICBoZWlnaHQ6IChwcm9wczogSVRhYmxlUHJvcHM8SUJhc2VPYmplY3Q+KSA9PiB7XG4gICAgICBjb25zdCB7IGhlYWRlckFmZml4ZWQsIGhlaWdodCB9ID0gcHJvcHNcbiAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJJbnZhbGlkIHByb3AgYGhlaWdodGAgc3VwcGxpZWQgdG8gYFRhYmxlYCwgZXhwZWN0ZWQgYG51bWJlcmAuXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckFmZml4ZWQgJiYgISFoZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJUYWJsZS5qcyDkuI3lhYHorrjlkIzml7bkvb/nlKggcHJvcCBgaGVhZGVyQWZmaXhlZGAg5LiOIGBoZWlnaHRg77yM5LiN6K6k5Y+v5bCG6L+Z5Lik6ICF5re355So55qE6ZyA5rGC5Zy65pmv44CCXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbliqDovb3kuK1cbiAgICAgKi9cbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+WxleW8gOWKn+iDveeahOWIpOaWre+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBvbkV4cGFuZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIGNsaWNrIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93TW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIG1vdXNlTGVhdmUgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAgICovXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHpgInmi6nmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+mAieaLqeWKn+iDveeahOWIpOaWre+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5aSaIC8g5Y2V6YCJ77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIHNlbGVjdE11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HpgInmi6njgIJcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBzZWxlY3RPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHku47lpJbpg6jmjqfliLbvvIzpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yMXG4gICAgICog5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjO+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBzZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAgIC8qKlxuICAgICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgICAqL1xuICAgIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJ0b3BcIiwgXCJjZW50ZXJcIiwgXCJib3R0b21cIl0pLFxuICAgIC8qKlxuICAgICAqIOiZmuaLn+WIl+ihqOeahCBQcm9wc++8jOivt+WPguiAgyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yYy12aXJ0dWFsLWxpc3RcbiAgICAgKi9cbiAgICB2aXJ0dWFsTGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOiZmuaLn+WIl+ihqOeahOagt+W8j++8jOivt+WcqOi/memHjOaMh+WumuWuveW6pu+8jOm7mOiupOWwhuS8muaciSA1MDAgcHgg5a695bqmXG4gICAgICovXG4gICAgdmlydHVhbExpc3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/omZrmi5/mu5rliqjvvIzmraQgUHJvcCDor7fphY3lkIggaGVpZ2h0IFByb3Ag5ZCM5pe25L2/55So77yM55So5LqO5aSE55CG5aSn5pWw5o2u6YeP5LiL55qE6Jma5ouf5YaF5rua5Yqo77ybXG4gICAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAgICovXG4gICAgdmlydHVhbFNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRhYmxlUHJvcHM8SUJhc2VPYmplY3Q+ID0ge1xuICAgIGFsaWduOiBudWxsLFxuICAgIGNoaWxkcmVuOiBcIlwiLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGNvbHVtbnM6IG51bGwsXG4gICAgY29sdW1uc1Jlc2l6YWJsZTogbnVsbCxcbiAgICBkYXRhU291cmNlOiBbXSxcbiAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzOiBudWxsLFxuICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM6IG51bGwsXG4gICAgZW1wdHlUZXh0OiBcIuaaguaXoOaVsOaNrlwiLFxuICAgIGV4cGFuZEljb25WaXNpYmxlOiB0cnVlLFxuICAgIGV4cGFuZE9uUm93Q2xpY2s6IGZhbHNlLFxuICAgIGV4cGFuZGVkUm93S2V5czogbnVsbCxcbiAgICBleHBhbmRlZFJvd1JlbmRlcjogKCkgPT4gXCJcIixcbiAgICBnZXRDZWxsQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldENlbGxQcm9wczogbm9vcCxcbiAgICBnZXRDZWxsU3R5bGU6IG5vb3AsXG4gICAgZ2V0SGVhZENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRIZWFkU3R5bGU6IG5vb3AsXG4gICAgZ2V0SGVhZENlbGxDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0SGVhZENlbGxTdHlsZTogbm9vcCxcbiAgICBnZXRSb3dDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0Um93UHJvcHM6ICgpID0+ICh7fSksXG4gICAgZ2V0Um93U3R5bGU6IG5vb3AsXG4gICAgZ2V0U2VsZWN0UHJvcHM6ICgpID0+ICh7fSksXG4gICAgaGVhZGVyQWZmaXhlZDogZmFsc2UsXG4gICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcDogMCxcbiAgICBoZWFkZXJBZmZpeEdldFRhcmdldDogbnVsbCxcbiAgICBoZWFkZXJFbXBoYXNpemVkOiBmYWxzZSxcbiAgICBoZWlnaHQ6IG51bGwsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgb25FeHBhbmRDaGFuZ2U6IG51bGwsXG4gICAgb25Sb3dDbGljazogbnVsbCxcbiAgICBvblJvd01vdXNlRW50ZXI6IG51bGwsXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBudWxsLFxuICAgIG9uU2VsZWN0Q2hhbmdlOiBudWxsLFxuICAgIG9uU2Nyb2xsOiBudWxsLFxuICAgIHNlbGVjdE11bHRpcGxlOiB0cnVlLFxuICAgIHNlbGVjdE9uUm93Q2xpY2s6IGZhbHNlLFxuICAgIHNlbGVjdGVkUm93S2V5czogbnVsbCxcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdmVydGljYWxBbGlnbjogdW5kZWZpbmVkLFxuICAgIHZpcnR1YWxMaXN0UHJvcHM6IHt9LFxuICAgIHZpcnR1YWxMaXN0U3R5bGU6IHt9LFxuICAgIHZpcnR1YWxTY3JvbGw6IGZhbHNlLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoe1xuICAgIGNoaWxkcmVuLFxuICAgIGNvbHVtbnMsXG4gICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgfTogSVRhYmxlUHJvcHM8SUJhc2VPYmplY3Q+KSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFBhcnRpYWw8SVRhYmxlU3RhdGU+ID0ge31cbiAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwgfHwgY29sdW1ucyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuY2hpbGRyZW4gPSBjb2x1bW5zIHx8IGNoaWxkcmVuXG4gICAgfVxuICAgIGlmIChleHBhbmRlZFJvd0tleXMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmV4cGFuZGVkUm93S2V5cyA9IGV4cGFuZGVkUm93S2V5c1xuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5zZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXNcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICBwdWJsaWMgY29tYmluZWRDZWxsc0luZm86IElCYXNlT2JqZWN0W10gPSBbXVxuXG4gIHB1YmxpYyBhZmZpeEhlYWRlcjogQWZmaXhcblxuICBwdWJsaWMgYWZmaXhTY3JvbGxiYXI6IEFmZml4XG5cbiAgcHVibGljIG1haW5UYWJsZTogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgbWFpblRhYmxlQm9keTogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgbWFpblRoZWFkOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIHByaXZhdGUgZGVib3VuY2VkV2luZG93UmVzaXplOiBhbnlcblxuICBwcml2YXRlIHJlc2l6ZUV2ZW50OiBhbnlcblxuICBwcml2YXRlIGNvbHVtbk1hbmFnZXI6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVGFibGVQcm9wczxUPikge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXMsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzLFxuICAgICAgZXhwYW5kZWRSb3dLZXlzOiBleHBhbmRlZFJvd0tleXNQcm9wLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wLFxuICAgIH0gPSBwcm9wc1xuICAgIHRoaXMuY29sdW1uTWFuYWdlciA9IG5ldyBDb2x1bW5NYW5hZ2VyKGNvbHVtbnMgfHwgY2hpbGRyZW4pXG4gICAgbGV0IHNlbGVjdGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3ApIHtcbiAgICAgIHNlbGVjdGVkUm93S2V5cyA9IHNlbGVjdGVkUm93S2V5c1Byb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRTZWxlY3RlZFJvd0tleXMpIHtcbiAgICAgIHNlbGVjdGVkUm93S2V5cyA9IGRlZmF1bHRTZWxlY3RlZFJvd0tleXNcbiAgICB9XG4gICAgbGV0IGV4cGFuZGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKGV4cGFuZGVkUm93S2V5c1Byb3ApIHtcbiAgICAgIGV4cGFuZGVkUm93S2V5cyA9IGV4cGFuZGVkUm93S2V5c1Byb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRFeHBhbmRlZFJvd0tleXMpIHtcbiAgICAgIGV4cGFuZGVkUm93S2V5cyA9IGRlZmF1bHRFeHBhbmRlZFJvd0tleXNcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFmZml4ZWRCb3R0b206IGZhbHNlLFxuICAgICAgYWZmaXhlZFRvcDogZmFsc2UsXG4gICAgICBjaGlsZHJlbjogY29sdW1ucyB8fCBjaGlsZHJlbixcbiAgICAgIGNvbWJpbmVkQ2VsbHNJbmZvOiBbXSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiB7fSwgLy8g5q2j5Zyo5pS55Y+Y5a695bqm55qE5YiX55qE5L+h5oGvXG4gICAgICBleHBhbmRlZFJvd0tleXMsXG4gICAgICBmaXhlZENvbHVtbnNJbmZvczogW10sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WDogZmFsc2UsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WTogZmFsc2UsXG4gICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICAgIG1haW5UYWJsZVN0eWxlOiB7fSxcbiAgICAgIHJlc2l6ZWQ6IFtdLCAvLyDmlLnlj5jov4flrr3luqbnmoTmiYDmnInliJfnmoTmlbDmja5cbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICB9XG4gICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUgPSBkZWJvdW5jZSh0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSwgMTAwKVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUYWJsZVByb3BzPFQ+LFxuICAgIG5leHRTdGF0ZTogSVRhYmxlU3RhdGVcbiAgKSA9PlxuICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb2x1bW5NYW5hZ2VyLCBjb21iaW5lZENlbGxzSW5mbywgZGVib3VuY2VkV2luZG93UmVzaXplLCBwcm9wcyB9ID1cbiAgICAgIHRoaXNcbiAgICBjb25zdCB7IGlzQW55Q29sdW1uc0ZpeGVkIH0gPSBjb2x1bW5NYW5hZ2VyXG4gICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgLy8g5Zu65a6a6KGo5aS06ZyA6KaB55uR5ZCsIHJlc2l6ZSDkuovku7ZcbiAgICBpZiAoaGVhZGVyQWZmaXhlZCB8fCBoZWlnaHQgfHwgaXNBbnlDb2x1bW5zRml4ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKClcbiAgICAgIHRoaXMucmVzaXplRXZlbnQgPSBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIFwicmVzaXplXCIsXG4gICAgICAgIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZVxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoY29tYmluZWRDZWxsc0luZm8ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tYmluZWRDZWxsc0luZm8gfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKHtcbiAgICBkYXRhU291cmNlOiBkYXRhU291cmNlT2xkLFxuICAgIGdldENlbGxQcm9wczogZ2V0Q2VsbFByb3BzT2xkLFxuICB9OiBJVGFibGVQcm9wczxUPikgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgZ2V0Q2VsbFByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgLyoqXG4gICAgICogaGFuZGxlV2luZG93UmVzaXplIOS4jeW6lOivpeWPquWcqCBkaWRtb3VudCDml7bmiafooYxcbiAgICAgKiBkaWRVcGRhdGUg5pe25Lmf6ZyA6KaBXG4gICAgICovXG4gICAgaWYgKCFzaGFsbG93RXF1YWwoZGF0YVNvdXJjZU9sZCwgZGF0YVNvdXJjZSkpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsIDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCI5bm25Y2V5YWD5qC86ZyA5ou/5Yiw55yf5a6e55qEIGRvbSDlhYPntKDorqHnrpflsLrlr7jvvIzlm6DmraTov5nph4zpnIDopoEgZm9yY2VVcGRhdGVcbiAgICAgKi9cbiAgICBpZiAoIXNoYWxsb3dFcXVhbChnZXRDZWxsUHJvcHNPbGQsIGdldENlbGxQcm9wcykgJiYgZ2V0Q2VsbFByb3BzKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucmVzaXplRXZlbnQpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnQucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKSB7XG4gICAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZS5jbGVhcigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtblN0YXJ0ID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LFxuICAgIGNvbDogSUNvbHVtblByb3BzPFQ+XG4gICkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiY29sLXJlc2l6ZVwiXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge1xuICAgICAgICBjb2wsXG4gICAgICAgIGRhdGFJbmRleDogY29sLmRhdGFJbmRleCxcbiAgICAgICAgcGFyZW50V2lkdGg6XG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgLndpZHRoLFxuICAgICAgICBzdGFydFg6IGUucGFnZVgsXG4gICAgICB9LFxuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB9LCAwKVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtbk1vdmluZyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHsgcmVzaXplZCwgY3VycmVudGx5UmVzaXppbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGNvbCwgZGF0YUluZGV4LCBwYXJlbnRXaWR0aCwgc3RhcnRYIH0gPSBjdXJyZW50bHlSZXNpemluZ1xuICAgIC8qKlxuICAgICAqIDEzIOS7o+ihqOWtl+WPt++8m+eUqCBlbSDnmoTmlrnlvI/orqHnrpflrr3luqbmnKzouqvkuI3lpJ/lkIjnkIbvvIzov5nph4wgKyAy77yM5LiN54S25ZyoIFNhZmFyaSDkuIvnqbrpl7TkvJrkuI3lpJ/jgIJcbiAgICAgKi9cbiAgICBjb25zdCBiYXNlV2lkdGggPVxuICAgICAgTWF0aC5jZWlsKFxuICAgICAgICBjb2wudGl0bGUubGVuZ3RoID4gNCA/IGNvbC50aXRsZS5sZW5ndGggLyAyIDogY29sLnRpdGxlLmxlbmd0aFxuICAgICAgKSAqXG4gICAgICAgIDEzICtcbiAgICAgIDJcbiAgICBjb25zdCBuZXdSZXNpemVkID0gcmVzaXplZC5maWx0ZXIoKG8pID0+IG8uZGF0YUluZGV4ICE9PSBkYXRhSW5kZXgpXG4gICAgY29uc3QgbmV3V2lkdGggPSBNYXRoLm1heChcbiAgICAgIE1hdGguY2VpbChwYXJlbnRXaWR0aCArIGUucGFnZVggLSBzdGFydFgpLFxuICAgICAgISFjb2wub25Tb3J0IHx8ICEhY29sLm9uRmlsdGVyID8gYmFzZVdpZHRoICsgMzYgOiBiYXNlV2lkdGggKyAxNlxuICAgIClcbiAgICBuZXdSZXNpemVkLnB1c2goe1xuICAgICAgZGF0YUluZGV4LFxuICAgICAgdmFsdWU6IG5ld1dpZHRoLFxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZXNpemVkOiBuZXdSZXNpemVkLFxuICAgIH0pXG4gICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUoKVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtbkVuZCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBtYWluVGFibGUgfSA9IHRoaXNcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiXCJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiB7fSxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYOlxuICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbFdpZHRoID4gbWFpblRhYmxlLm9mZnNldFdpZHRoLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6XG4gICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsSGVpZ2h0ID4gbWFpblRhYmxlLm9mZnNldEhlaWdodCxcbiAgICAgIGlzUmVzaXplclNob3c6IGZhbHNlLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29sdW1uTWFuYWdlciwgbWFpblRhYmxlLCBwcm9wcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgaXNBbnlDb2x1bW5zRml4ZWQgfSA9IGNvbHVtbk1hbmFnZXJcbiAgICBjb25zdCB7IGhlYWRlckFmZml4ZWQsIGhlaWdodCB9ID0gcHJvcHNcbiAgICBpZiAoKGhlYWRlckFmZml4ZWQgfHwgaGVpZ2h0IHx8IGlzQW55Q29sdW1uc0ZpeGVkKSAmJiBtYWluVGFibGUpIHtcbiAgICAgIGNvbnN0IHsgbWFpblRhYmxlU3R5bGU6IG9sZFN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgICBjb25zdCByZWN0ID0gbWFpblRhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCBtYWluVGFibGVTdHlsZTogUGFydGlhbDxSZWFjdC5DU1NQcm9wZXJ0aWVzPiA9IHt9XG4gICAgICBtYWluVGFibGVTdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0XG4gICAgICBtYWluVGFibGVTdHlsZS53aWR0aCA9IHJlY3Qud2lkdGhcbiAgICAgIGlmICghc2hhbGxvd0VxdWFsKG1haW5UYWJsZVN0eWxlLCBvbGRTdHlsZSkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1haW5UYWJsZVN0eWxlIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6XG4gICAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxXaWR0aCA+IG1haW5UYWJsZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6XG4gICAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxIZWlnaHQgPiBtYWluVGFibGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlTWFpblRhYmxlU2Nyb2xsID0gKGU/OiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgYWZmaXhIZWFkZXIsIG1haW5UYWJsZSB9ID0gdGhpc1xuICAgIGNvbnN0IHsgb25TY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGFmZml4ZWRUb3AgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChvblNjcm9sbCAmJiBlKSB7XG4gICAgICAvLyBlIOWPr+iDveaYryB0aGVhZFxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSA9PT0gXCJ0YWJsZVwiKSB7XG4gICAgICAgIG9uU2Nyb2xsKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFmZml4ZWRUb3AgJiYgYWZmaXhIZWFkZXIgJiYgbWFpblRhYmxlICYmIGFmZml4SGVhZGVyLmZpeGVkTm9kZSkge1xuICAgICAgYWZmaXhIZWFkZXIuZml4ZWROb2RlLnNjcm9sbExlZnQgPSBtYWluVGFibGUuc2Nyb2xsTGVmdFxuICAgIH1cblxuICAgIC8vIOWbuuWumuWktOeahOaDheWGte+8jOmcgOimgeWQjOatpeWbuuWumua7muWKqOadoeWSjOS4uyBUYWJsZSDmu5rliqjmnaFcbiAgICB0aGlzLnN5bmNUYWJsZVNjcm9sbFBvc2l0aW9uKG1haW5UYWJsZS5zY3JvbGxMZWZ0KVxuICB9XG5cbiAgcHVibGljIHN5bmNUYWJsZVNjcm9sbFBvc2l0aW9uID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IGFmZml4U2Nyb2xsYmFyLCBtYWluVGFibGUsIG1haW5UaGVhZCB9ID0gdGhpc1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAobWFpblRhYmxlICYmIGFmZml4U2Nyb2xsYmFyICYmIGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZSkge1xuICAgICAgaWYgKG1haW5UYWJsZS5zY3JvbGxMZWZ0ICE9PSB2YWx1ZSkge1xuICAgICAgICBtYWluVGFibGUuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgICB9XG4gICAgICBpZiAoYWZmaXhTY3JvbGxiYXIuZml4ZWROb2RlLnNjcm9sbExlZnQgIT09IHZhbHVlKSB7XG4gICAgICAgIGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlpoLmnpzorr7lrprkuoYgcHJvcCBoZWlnaHTvvIzlubbkuJTlrZjlnKjmqKrlkJHmu5rliqjmnaHvvIzliJnopoHlkIzmraUgdGhlYWQg55qE5rua5Yqo5L2N572uXG4gICAgaWYgKGhlaWdodCAmJiBtYWluVGhlYWQpIHtcbiAgICAgIG1haW5UaGVhZC5zY3JvbGxMZWZ0ID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUm93Q2xpY2sgPSAoXG4gICAgcm93OiBULFxuICAgIGk6IG51bWJlcixcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zdCB7IGV4cGFuZE9uUm93Q2xpY2ssIGdldFNlbGVjdFByb3BzLCBvblJvd0NsaWNrLCBzZWxlY3RPblJvd0NsaWNrIH0gPVxuICAgICAgdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgIGlmIChcbiAgICAgIHNlbGVjdE9uUm93Q2xpY2sgJiZcbiAgICAgIHR5cGVvZiBrZXkgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICEoXG4gICAgICAgIGdldFNlbGVjdFByb3BzICYmXG4gICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkgJiZcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKS5kaXNhYmxlZFxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3Qoa2V5LCAhc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgfVxuICAgIGlmIChleHBhbmRPblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLmhhbmRsZUV4cGFuZChrZXkpXG4gICAgfVxuICAgIGlmIChvblJvd0NsaWNrKSB7XG4gICAgICBvblJvd0NsaWNrKHJvdywgaSwgZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGhSZXNpemUgPSAoXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBkYXRhSW5kZXg6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIGZpeGVkUG9zaXRpb24/OiBib29sZWFuIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBnZXRDb2x1bW5zIH0gPSB0aGlzLmNvbHVtbk1hbmFnZXJcbiAgICBsZXQgeyBmaXhlZENvbHVtbnNJbmZvcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRDb2x1bW5zKCkgYXMgSUNvbHVtblByb3BzPFQ+W11cbiAgICAvKipcbiAgICAgKiBjb2x1bW5zIOWPmOWMluWQjiBmaXhlZENvbHVtbnNJbmZvcyDkuK3lj6/og73lrZjlnKjlt7Lnu4/np7vpmaTnmoQgY29sdW1uXG4gICAgICovXG4gICAgZml4ZWRDb2x1bW5zSW5mb3MgPSBmaXhlZENvbHVtbnNJbmZvcy5maWx0ZXIoKG8pID0+XG4gICAgICBjb2x1bW5zLmZpbmQoKHApID0+IHAuZGF0YUluZGV4ID09PSBvLmRhdGFJbmRleClcbiAgICApXG4gICAgY29uc3QgaSA9IGZpeGVkQ29sdW1uc0luZm9zLmZpbmRJbmRleCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAvLyBmaXhlZCDlj6/og73mmK8gQm9vbGVhblxuICAgIGNvbnN0IGZpeGVkID0gZml4ZWRQb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCJcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBpZiAoZml4ZWRDb2x1bW5zSW5mb3NbaV0ud2lkdGggPT09IHdpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3Muc3BsaWNlKGksIDEpXG4gICAgfVxuICAgIGZpeGVkQ29sdW1uc0luZm9zLnB1c2goeyB3aWR0aCwgZGF0YUluZGV4LCBpbmRleCwgZml4ZWQgfSlcbiAgICBmaXhlZENvbHVtbnNJbmZvcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleClcblxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc0luZm9zTGVmdCA9IGZpeGVkQ29sdW1uc0luZm9zLmZpbHRlcihcbiAgICAgIChvKSA9PiBvLmZpeGVkID09PSBcImxlZnRcIlxuICAgIClcbiAgICBjb25zdCBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0ID0gZml4ZWRDb2x1bW5zSW5mb3NcbiAgICAgIC5maWx0ZXIoKG8pID0+IG8uZml4ZWQgPT09IFwicmlnaHRcIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmluZGV4IC0gYS5pbmRleClcblxuICAgIGZpeGVkQ29sdW1uc0luZm9zLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgbGV0IGNvbEluZGV4XG4gICAgICBpZiAoY29sLmZpeGVkID09PSBcImxlZnRcIikge1xuICAgICAgICBjb2xJbmRleCA9IGZpeGVkQ29sdW1uc0luZm9zTGVmdC5maW5kSW5kZXgoXG4gICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBjb2wuZGF0YUluZGV4XG4gICAgICAgIClcbiAgICAgICAgaWYgKGNvbEluZGV4ID09PSBmaXhlZENvbHVtbnNJbmZvc0xlZnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbC5pc0xhc3RMZWZ0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbC5pc0xhc3RMZWZ0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvLyDlrrnplJnvvIzkuI3lhYHorrggc2xpY2UoMCwgLTEpIOeahOWNsemZqeaTjeS9nFxuICAgICAgICBjb2wub2Zmc2V0ID1cbiAgICAgICAgICBjb2xJbmRleCA9PT0gLTFcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBmaXhlZENvbHVtbnNJbmZvc0xlZnRcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgY29sSW5kZXgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci53aWR0aCwgMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbEluZGV4ID0gZml4ZWRDb2x1bW5zSW5mb3NSaWdodC5maW5kSW5kZXgoXG4gICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBjb2wuZGF0YUluZGV4XG4gICAgICAgIClcbiAgICAgICAgaWYgKGNvbEluZGV4ID09PSBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb2wuaXNGaXJzdFJpZ2h0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbC5pc0ZpcnN0UmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIC8vIOWuuemUme+8jOS4jeWFgeiuuCBzbGljZSgwLCAtMSkg55qE5Y2x6Zmp5pON5L2cXG4gICAgICAgIGNvbC5vZmZzZXQgPVxuICAgICAgICAgIGNvbEluZGV4ID09PSAtMVxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IGZpeGVkQ29sdW1uc0luZm9zUmlnaHRcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgY29sSW5kZXgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci53aWR0aCwgMClcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaXhlZENvbHVtbnNJbmZvcyB9LCB0aGlzLmZvcmNlVXBkYXRlKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoZWFkTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzUmVzaXplclNob3cgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIWlzUmVzaXplclNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Jlc2l6ZXJTaG93OiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGhlYWRNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudGx5UmVzaXppbmcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzUmVzaXplclNob3c6IGZhbHNlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5bGV5byA6KGMXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlRXhwYW5kID0gKGtleTogUmVhY3QuUmVhY3RUZXh0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IGV4cGFuZGVkUm93S2V5czogZXhwYW5kZWRSb3dLZXlzUHJvcCwgb25FeHBhbmRDaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGV4cGFuZGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGtleXMgPSBbLi4uZXhwYW5kZWRSb3dLZXlzXVxuICAgIGNvbnN0IGluZGV4ID0ga2V5cy5pbmRleE9mKGtleSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAga2V5cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMucHVzaChrZXkpXG4gICAgfVxuICAgIGlmIChleHBhbmRlZFJvd0tleXNQcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWRSb3dLZXlzOiBrZXlzIH0pXG4gICAgfVxuICAgIGlmIChvbkV4cGFuZENoYW5nZSkge1xuICAgICAgb25FeHBhbmRDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YCJ5oup6KGMXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlU2VsZWN0ID0gKGtleTogUmVhY3QuUmVhY3RUZXh0LCBjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCxcbiAgICAgIHNlbGVjdE11bHRpcGxlLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQga2V5cyA9IFsuLi5zZWxlY3RlZFJvd0tleXNdXG4gICAgaWYgKHNlbGVjdE11bHRpcGxlKSB7XG4gICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5zcGxpY2Uoc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2Yoa2V5KSwgMSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IFtrZXldXG4gICAgfVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBrZXlzLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG9uU2VsZWN0Q2hhbmdlKSB7XG4gICAgICBvblNlbGVjdENoYW5nZShrZXlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgInmi6nooYzlhajpgInmk43kvZxcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3RDaGFuZ2UsIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qga2V5cyA9IFsuLi5zZWxlY3RlZFJvd0tleXNdXG4gICAgY29uc3QgYXZhaWxhYmxlS2V5cyA9IHRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKVxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBhdmFpbGFibGVLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5LiN6IO955u05o6l5riF56m65pWw57uE77yM5Zug5Li65Y+v6IO95Lyg5YWl5LqG5LiO5b2T5YmNIGRhdGFTb3VyY2Ug5peg5YWz55qEIGtleXPvvJtcbiAgICAgIC8vIOS5n+S4jeiDveebtOaOpSBzcGxpY2XvvIzlm6DkuLropoHmo4Dmn6XmmK/lkKYgZ2V0U2VsZWN0UHJvcHMuZGlzYWJsZWTjgIJcbiAgICAgIHNlbGVjdGVkUm93S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGF2YWlsYWJsZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZihrZXkpLCAxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czoga2V5cyxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvblNlbGVjdENoYW5nZSkge1xuICAgICAgb25TZWxlY3RDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5bey5YWo6YOo6YCJ5oupXG4gICAqL1xuICBwdWJsaWMgaGFzU2VsZWN0ZWRBbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKVxuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKFxuICAgICAgZGF0YVNvdXJjZSAmJlxuICAgICAgZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgIGtleXMubGVuZ3RoICYmXG4gICAgICBrZXlzLmV2ZXJ5KChrZXkpID0+IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgZ2V0QXZhaWxhYmxlUm93c0tleXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCBnZXRTZWxlY3RQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmICghZGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIGRhdGFTb3VyY2UuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBrZXkgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgIShcbiAgICAgICAgICBnZXRTZWxlY3RQcm9wcyAmJlxuICAgICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkgJiZcbiAgICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpLmRpc2FibGVkXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGtleXNcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZVRhYmxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGFTb3VyY2UsXG4gICAgICBleHBhbmRJY29uVmlzaWJsZSxcbiAgICAgIGV4cGFuZGVkUm93UmVuZGVyLFxuICAgICAgZXhwYW5kT25Sb3dDbGljayxcbiAgICAgIGdldEhlYWRDbGFzc05hbWUsXG4gICAgICBnZXRIZWFkU3R5bGUsXG4gICAgICBnZXRSb3dDbGFzc05hbWUsXG4gICAgICBnZXRSb3dQcm9wcyxcbiAgICAgIGdldFJvd1N0eWxlLFxuICAgICAgZ2V0U2VsZWN0UHJvcHMsXG4gICAgICBoZWFkZXJBZmZpeGVkLFxuICAgICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcCxcbiAgICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblJvd01vdXNlRW50ZXIsXG4gICAgICBvblJvd01vdXNlTGVhdmUsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHNlbGVjdE11bHRpcGxlLFxuICAgICAgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgIHNpemUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgdmlydHVhbExpc3RQcm9wcyxcbiAgICAgIHZpcnR1YWxMaXN0U3R5bGUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBhZmZpeGVkVG9wLFxuICAgICAgYWZmaXhlZEJvdHRvbSxcbiAgICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgIG1haW5UYWJsZVN0eWxlLFxuICAgICAgcmVzaXplZCxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3Qge1xuICAgICAgZ2V0Q29sdW1ucyxcbiAgICAgIC8vIGdldExlZnRDb2x1bW5zV2lkdGgsXG4gICAgICBnZXRHcm91cENvbHVtbnNEZXB0aCxcbiAgICAgIGlzQW55Q29sdW1uc0xlZnRGaXhlZCxcbiAgICB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpIGFzIElDb2x1bW5Qcm9wczxUPltdXG5cbiAgICBjb25zdCB0aGVhZFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgaGVpZ2h0OiBgJHtURF9IRUlHSFRbc2l6ZSB8fCBcInNtYWxsXCJdICogZ2V0R3JvdXBDb2x1bW5zRGVwdGgoKX1weGAsXG4gICAgICAuLi4oKGdldEhlYWRTdHlsZSAmJiBnZXRIZWFkU3R5bGUoKSkgfHwge30pLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWxleW8gOihjOWSjOmAieaLqeihjOaXtu+8jHRoZWFk5ZKM5q+P6KGM55qE56ys5LiA5YiX5YmN6YO96KaB5Yqg5YWl5LiA5YiXXG4gICAgICog5q2k5YiX5Lmf5Lya5b2x5ZONIHN0aWNreSDnmoTlgY/np7vkvY3nva5cbiAgICAgKi9cbiAgICBjb25zdCBzZWxlY3RBbmRFeHBhbmQgPSAhIW9uU2VsZWN0Q2hhbmdlICYmICEhb25FeHBhbmRDaGFuZ2VcbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuXG4gICAgY29uc3QgdGhlYWQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17MH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGAke3ByZWZpeH0tdGhlYWRgLFxuICAgICAgICAgIGdldEhlYWRDbGFzc05hbWUgJiYgZ2V0SGVhZENsYXNzTmFtZSgpXG4gICAgICAgICl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVUaGVhZE1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUaGVhZE1vdXNlTGVhdmV9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRoZWFkXCIpfVxuICAgICAgICBzdHlsZT17dGhlYWRTdHlsZX1cbiAgICAgID5cbiAgICAgICAge3RoZWFkUGxhY2Vob2xkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIGAke3ByZWZpeH0tdGhfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdGBdOiBpc0FueUNvbHVtbnNMZWZ0Rml4ZWQoKSxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfZnVuY3Rpb25hbF9ib3RoYF06IHNlbGVjdEFuZEV4cGFuZCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PVwiZnVuY3Rpb25hbC1hbGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RNdWx0aXBsZSAmJiAhIW9uU2VsZWN0Q2hhbmdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKCkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5oYXNTZWxlY3RlZEFsbCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbGlnbixcbiAgICAgICAgICAgIGRhdGFJbmRleCxcbiAgICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgICBmaXhlZCxcbiAgICAgICAgICAgIG9uRmlsdGVyLFxuICAgICAgICAgICAgb25Tb3J0LFxuICAgICAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICB9ID0gY29sXG5cbiAgICAgICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAgICAgICAhIW9uU29ydCB8fFxuICAgICAgICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICAgICAgICEhZmlsdGVyc1xuICAgICAgICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtaW5XaWR0aCA9XG4gICAgICAgICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKlxuICAgICAgICAgICAgICAgIDEzICtcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgICAgICAgICAgbWluV2lkdGggKz0gMjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGZsZXhWYWx1ZVxuICAgICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRofSAwIGF1dG9gXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aC5sZW5ndGggLSB3aWR0aC5sYXN0SW5kZXhPZihcInB4XCIpID09PSAyKSB7XG4gICAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRoLnNsaWNlKDAsIC0yKX0gMCBhdXRvYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmxleFZhbHVlID0gYDAgMCAke3dpZHRofWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7TWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCl9IDAgYXV0b2BcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogdGggbGVmdCDlgLzvvJrlj5blvpcgcmVzaXplLW9ic2VydmVyIOWtmOWCqOeahOivpeWIl+eahOWBj+enu+mHj++8jOWKoOS4iuWmguaenOaciemAieaLqeihjOOAgeWxleW8gOihjOaXtueahCBTRUxFQ1RfVERfV0lEVEgg4oCU4oCUIOS7heWvuSBsZWZ0IOacieaViFxuICAgICAgICAgICAqIHRoIHJpZ2h0IOWAvO+8muWPluW+lyByZXNpemUtb2JzZXJ2ZXIg5a2Y5YKo55qE6K+l5YiX55qE5YGP56e76YeP77yM5Yqg5LiK5aaC5p6c5YaF5rua5Yqo5pe255qE5rua5Yqo5p2h5a695bqm77yIMTTvvIkg4oCU4oCUIOS7heWvuSByaWdodCDmnInmlYhcbiAgICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAgICAgIG9uUmVzaXplPXsoeyB3aWR0aDogd2lkdGhSZXNpemUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGhSZXNpemUod2lkdGhSZXNpemUsIGRhdGFJbmRleCwgaW5kZXgsIGZpeGVkKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZpeGVkfVxuICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06IGNsaWNrYWJsZSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2xlZnRgXTogaXNGaXhlZExlZnQoY29sKSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0YF06IGlzRml4ZWRSaWdodChjb2wpLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICAgICAgICAgICk/LmlzTGFzdExlZnQsXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgaW5kZXh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGlzRml4ZWRMZWZ0KGNvbClcbiAgICAgICAgICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAodGhlYWRQbGFjZWhvbGRlclZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZWN0QW5kRXhwYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gU0VMRUNUX0FORF9FWFBBTkRfVERfV0lEVEhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBTRUxFQ1RfVERfV0lEVEhcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICByaWdodDogaXNGaXhlZFJpZ2h0KGNvbClcbiAgICAgICAgICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAoaXNNYWluVGFibGVPdmVyZmxvd1kgJiYgaGVpZ2h0ID8gMTQgOiAwKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGZsZXg6IHJlc2l6ZWRDb2wgPyBgJHtyZXNpemVkQ29sLnZhbHVlfSAwIGF1dG9gIDogZmxleFZhbHVlLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHJlc2l6ZWRDb2wgPyByZXNpemVkQ29sLnZhbHVlIDogd2lkdGggfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlc2l6ZWRDb2xcbiAgICAgICAgICAgICAgICAgICAgPyByZXNpemVkQ29sLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogd2lkdGggfHwgTWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbHVtbj17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChjb2wsIHsgaW5kZXgsIGNvbHVtbnMgfSl9XG4gICAgICAgICAgICAgICAge2NvbC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aEdyb3VwYH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb2wuY2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChjaGlsZENvbDogSUNvbHVtblByb3BzPFQ+LCBjaGlsZENvbEluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGhgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNoaWxkQ29sLm9uU29ydCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkQ29sLnNvcnRPcmRlciAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wub25GaWx0ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wuZmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRDb2wuZGF0YUluZGV4IHx8IGNoaWxkQ29sSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxMDAgMCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGNoaWxkQ29sLmFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUaENlbGwoY2hpbGRDb2wpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRDb2wuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRoR3JvdXBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZENvbC5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFuZENvbDogSUNvbHVtblByb3BzPFQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sSW5kZXg6IG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFncmFuZENvbC5vblNvcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ3JhbmRDb2wuc29ydE9yZGVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFuZENvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLm9uRmlsdGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFncmFuZENvbC5maWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2dyYW5kQ29sLmRhdGFJbmRleCB8fCBncmFuZENvbEluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxMDAgMCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogZ3JhbmRDb2wuYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChncmFuZENvbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVzaXplT2JzZXJ2ZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IGdlbmVyYXRlVHJzID0gKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgICAgY29uc3QgY29sQXJyYXk6IGFueSA9IFtdXG4gICAgICBjb25zdCBzZWxlY3RQcm9wc0dldHRlZCA9IGdldFNlbGVjdFByb3BzICYmIGdldFNlbGVjdFByb3BzKHJvdywgcm93SW5kZXgpXG4gICAgICBjb25zdCBhbGxTZWxlY3RQcm9wcyA9IHtcbiAgICAgICAgY2hlY2tlZDogc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4fS1zZWxlY3RDb21wb25lbnRgLFxuICAgICAgICBvbkNoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHRoaXMuaGFuZGxlU2VsZWN0KGtleSwgY2hlY2tlZCksXG4gICAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpLFxuICAgICAgICAuLi4oc2VsZWN0UHJvcHNHZXR0ZWQgfHwge30pLFxuICAgICAgfVxuICAgICAgY29uc3Qgc2VsZWN0UHJvcHMgPSBvbWl0KGFsbFNlbGVjdFByb3BzLCBbXCJwb3BvdmVyUHJvcHNcIl0pXG4gICAgICBjb25zdCBzZWxlY3RDb250ZW50ID0gc2VsZWN0TXVsdGlwbGUgPyAoXG4gICAgICAgIDxDaGVja2JveCB7Li4uc2VsZWN0UHJvcHN9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8UmFkaW8gey4uLnNlbGVjdFByb3BzfSAvPlxuICAgICAgKVxuICAgICAgY29uc3QgZXhwYW5kQ29udGVudCA9IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWxlY3RDb21wb25lbnRgfVxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUV4cGFuZChrZXkpfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17YCR7cHJlZml4fS1leHBhbmRJY29uYH0gaWNvbj1cImFycm93LWRvd25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIGxldCBzZWxlY3RDZWxsID0gb25FeHBhbmRDaGFuZ2UgPyBleHBhbmRDb250ZW50IDogc2VsZWN0Q29udGVudFxuICAgICAgaWYgKHNlbGVjdEFuZEV4cGFuZCkge1xuICAgICAgICBzZWxlY3RDZWxsID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudC13cmFwcGVyYH0+XG4gICAgICAgICAgICB7c2VsZWN0Q29udGVudH1cbiAgICAgICAgICAgIHtleHBhbmRDb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICBjb25zdCBnZW5lcmF0ZVRyID0gKGNvbHVtbnNQYXJhbTogYW55W10sIHBhcmVudEluZGV4PzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbHVtbnNQYXJhbS5mb3JFYWNoKChjb2wsIGNvbEluZGV4UGFyYW0pID0+IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiDlpoLmnpzliY3pnaIg55qEIGNvbCDmnIkgY2hpbGRyZW7vvIzliJnopoHmioogY2hpbGRyZW4ubGVuZ3RoIOmineWkluWKoOWIsCBjb2xJbmRleFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxldCBjb2xJbmRleCA9IGNvbEluZGV4UGFyYW1cbiAgICAgICAgICBpZiAocGFyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50SW5kZXg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbkNvdW50ID0gY29sdW1uc1tpXS5jaGlsZHJlbj8ubGVuZ3RoIHx8IDFcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuQ291bnQpIHtcbiAgICAgICAgICAgICAgICBjb2xJbmRleCArPSBjaGlsZHJlbkNvdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjb2wuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbEFycmF5LnB1c2godGhpcy5nZW5lcmF0ZVRib2R5Q2VsbChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2VuZXJhdGVUcihjb2wuY2hpbGRyZW4sIGNvbEluZGV4UGFyYW0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZ2VuZXJhdGVUcihjb2x1bW5zKVxuICAgICAgbGV0IHRyID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgYCR7cHJlZml4fS10cmAsXG4gICAgICAgICAgICBnZXRSb3dDbGFzc05hbWUgJiYgZ2V0Um93Q2xhc3NOYW1lKHJvdywgcm93SW5kZXgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10cl9jbGlja2FibGVgXTogZXhwYW5kT25Sb3dDbGljayB8fCBzZWxlY3RPblJvd0NsaWNrLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10cl9leHBhbmRlZGBdOiBleHBhbmRlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfc2VsZWN0ZWRgXTogc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgICBrZXk9e2tleSB8fCByb3dJbmRleH1cbiAgICAgICAgICByb2xlPVwicm93XCJcbiAgICAgICAgICBkYXRhLXJvdz17cm93SW5kZXh9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtcbiAgICAgICAgICAgIG9uUm93TW91c2VFbnRlclxuICAgICAgICAgICAgICA/IChlKSA9PiBvblJvd01vdXNlRW50ZXIocm93LCByb3dJbmRleCwgZSlcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtcbiAgICAgICAgICAgIG9uUm93TW91c2VMZWF2ZVxuICAgICAgICAgICAgICA/IChlKSA9PiBvblJvd01vdXNlTGVhdmUocm93LCByb3dJbmRleCwgZSlcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlUm93Q2xpY2socm93LCByb3dJbmRleCwgZSl9XG4gICAgICAgICAgb25LZXlEb3duPXtub29wfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi4oKGdldFJvd1N0eWxlICYmIGdldFJvd1N0eWxlKHJvdywgcm93SW5kZXgpKSB8fCB7fSksXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRkYCwgYCR7cHJlZml4fS10ZF9mdW5jdGlvbmFsYCwge1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2xlZnRgXTogaXNBbnlDb2x1bW5zTGVmdEZpeGVkKCksXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGRfZnVuY3Rpb25hbF9ib3RoYF06IHNlbGVjdEFuZEV4cGFuZCxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGtleT1cImZ1bmN0aW9uYWxcIlxuICAgICAgICAgICAgICByb2xlPVwiY2VsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IHZlcnRpY2FsQWxpZ24gJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnbl0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RQcm9wc0dldHRlZD8ucG9wb3ZlclByb3BzPy5wb3B1cCA/IChcbiAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC4xfVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi4oXG4gICAgICAgICAgICAgICAgICAgICAgKGdldFNlbGVjdFByb3BzICYmIGdldFNlbGVjdFByb3BzKHJvdywgcm93SW5kZXgpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICkucG9wb3ZlclByb3BzfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0Q2VsbH1cbiAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2VsbFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y29sQXJyYXl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgICBpZiAoZ2V0Um93UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBwb3BvdmVyIH0gPSBnZXRSb3dQcm9wcyhyb3csIHJvd0luZGV4KVxuICAgICAgICBpZiAocG9wb3Zlcj8ucG9wdXApIHtcbiAgICAgICAgICB0ciA9IDxQb3BvdmVyIHsuLi5wb3BvdmVyfT57dHJ9PC9Qb3BvdmVyPlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0cixcbiAgICAgICAgICBleHBhbmRlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZFJvd2B9IGtleT1cInRyLWV4cGFuZFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZFJvdy1pbm5lcmB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1hcbiAgICAgICAgICAgICAgICAgICAgPyB7IHdpZHRoOiBtYWluVGFibGVTdHlsZS53aWR0aCB9XG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyEhZXhwYW5kZWRSb3dSZW5kZXIgJiYgZXhwYW5kZWRSb3dSZW5kZXIocm93LCByb3dJbmRleCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGwsXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0clxuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBoZWFkZXJBZmZpeGVkID8gKFxuICAgICAgICA8QWZmaXhcbiAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgb2Zmc2V0VG9wPXtoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wfVxuICAgICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gdGhpcy53cmFwcGVyfVxuICAgICAgICAgIGdldFRhcmdldD17aGVhZGVyQWZmaXhHZXRUYXJnZXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhib29sKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWZmaXhlZFRvcDogYm9vbCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIOWbuuWumueahOmCo+S4gOWIu+S5n+mcgOimgeeri+WNs+mHjeaWsOWumuS9jeOAglxuICAgICAgICAgICAgICAvLyDph43mlrDlrprkvY3jgIHljIXmi6zkuIvpnaLnmoQgY2xhc3NOYW1lLCBzdHlsZSDlj6rlnKjkuLvooajmoLzkuIrlj5HnlJ/vvIzlm6DkuLrlm7rlrprliJfnmoQgQWZmaXgg6KGM5Li65b6I5Y2V57qv44CCXG4gICAgICAgICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTWFpblRhYmxlU2Nyb2xsKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YWZmaXhlZFRvcCA/IGAke3ByZWZpeH0tYWZmaXhgIDogXCJcIn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImJhc2VsaW5lXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgLi4uKGFmZml4ZWRUb3AgPyBtYWluVGFibGVTdHlsZSA6IHt9KSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwiYWZmaXhIZWFkZXJcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlYWR9XG4gICAgICAgIDwvQWZmaXg+XG4gICAgICApIDogKFxuICAgICAgICB0aGVhZFxuICAgICAgKSxcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXsxfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGJvZHlgfVxuICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcIm1haW5UYWJsZUJvZHlcIil9XG4gICAgICA+XG4gICAgICAgIHshdmlydHVhbFNjcm9sbCAmJlxuICAgICAgICAgIGRhdGFTb3VyY2UgJiZcbiAgICAgICAgICAhIWRhdGFTb3VyY2UubGVuZ3RoICYmXG4gICAgICAgICAgZGF0YVNvdXJjZS5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRycyhyb3csIHJvd0luZGV4KVxuICAgICAgICAgIH0pfVxuICAgICAgICB7dmlydHVhbFNjcm9sbCAmJiBkYXRhU291cmNlICYmICEhZGF0YVNvdXJjZS5sZW5ndGggJiYgKFxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBkYXRhPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgaXRlbUtleT1cImtleVwiXG4gICAgICAgICAgICBoZWlnaHQ9eyhoZWlnaHQgfHwgNDAwKSAtIDQwfVxuICAgICAgICAgICAgaXRlbUhlaWdodD17NDJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdmlydHVhbC13cmFwcGVyYH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnZpcnR1YWxMaXN0U3R5bGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgey4uLnZpcnR1YWxMaXN0UHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PixcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYICYmIGhlYWRlckFmZml4ZWQgJiYgKFxuICAgICAgICA8QWZmaXhcbiAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgb2Zmc2V0Qm90dG9tPXswfVxuICAgICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gdGhpcy5tYWluVGFibGVCb2R5fVxuICAgICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwiYWZmaXhTY3JvbGxiYXJcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tYWZmaXhTY3JvbGxiYXJgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1hZmZpeFNjcm9sbGJhcl9zaG93YF06IGFmZml4ZWRCb3R0b20sXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIC4uLm1haW5UYWJsZVN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25TY3JvbGw9eyhlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+XG4gICAgICAgICAgICB0aGlzLnN5bmNUYWJsZVNjcm9sbFBvc2l0aW9uKGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNoYW5nZT17KGJvb2wpID0+IHRoaXMuc2V0U3RhdGUoeyBhZmZpeGVkQm90dG9tOiBib29sIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogdGhpcy5tYWluVGFibGU/LnNjcm9sbFdpZHRoIH19IC8+XG4gICAgICAgIDwvQWZmaXg+XG4gICAgICApLFxuICAgIF1cbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZVRoQ2VsbCA9IChjb2w6IElDb2x1bW5Qcm9wczxUPiwgb3B0aW9ucz86IElCYXNlT2JqZWN0KSA9PiB7XG4gICAgY29uc3QgeyBhbGlnbiwgY29sdW1uc1Jlc2l6YWJsZSwgZ2V0SGVhZENlbGxDbGFzc05hbWUsIGdldEhlYWRDZWxsU3R5bGUgfSA9XG4gICAgICB0aGlzLnByb3BzXG4gICAgY29uc3QgeyByZXNpemFibGU6IGNvbFJlc2l6YWJsZSB9ID0gY29sXG4gICAgbGV0IHJlc2l6YWJsZSA9IHRydWVcbiAgICBpZiAodHlwZW9mIGNvbFJlc2l6YWJsZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJlc2l6YWJsZSA9IGNvbFJlc2l6YWJsZVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbHVtbnNSZXNpemFibGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXNpemFibGUgPSBjb2x1bW5zUmVzaXphYmxlXG4gICAgfVxuXG4gICAgY29uc3QgeyBjdXJyZW50bHlSZXNpemluZywgaXNSZXNpemVyU2hvdyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgaXNMYXN0VGggPSBvcHRpb25zICYmIG9wdGlvbnMuaW5kZXggPT09IG9wdGlvbnMuY29sdW1ucy5sZW5ndGggLSAxXG5cbiAgICBjb25zdCB0aENlbGwgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBgJHtwcmVmaXh9LWNlbGxgLFxuICAgICAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lICYmXG4gICAgICAgICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZShjb2wsIG9wdGlvbnMgPyBvcHRpb25zLmluZGV4IDogdW5kZWZpbmVkKVxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OlxuICAgICAgICAgICAgKGNvbC5hbGlnbiAmJiBIT1JJWk9OVEFMX0FMSUdOW2NvbC5hbGlnbl0pIHx8XG4gICAgICAgICAgICAoYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnbl0pIHx8XG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgLi4uKChnZXRIZWFkQ2VsbFN0eWxlICYmXG4gICAgICAgICAgICBnZXRIZWFkQ2VsbFN0eWxlKGNvbCwgb3B0aW9ucyA/IG9wdGlvbnMuaW5kZXggOiB1bmRlZmluZWQpKSB8fFxuICAgICAgICAgICAge30pLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7IWNvbC5vblNvcnQgJiZcbiAgICAgICAgICAoY29sLnNvcnRPcmRlciA9PT0gbnVsbCB8fCBjb2wuc29ydE9yZGVyID09PSB1bmRlZmluZWQpICYmXG4gICAgICAgICAgIWNvbC5vbkZpbHRlciAmJlxuICAgICAgICAgICFjb2wuZmlsdGVycyAmJlxuICAgICAgICAgIGNvbC50aXRsZX1cbiAgICAgICAgeyghIWNvbC5vblNvcnQgfHxcbiAgICAgICAgICAoY29sLnNvcnRPcmRlciAhPT0gbnVsbCAmJiBjb2wuc29ydE9yZGVyICE9PSB1bmRlZmluZWQpKSAmJiAoXG4gICAgICAgICAgPFRhYmxlU29ydFxuICAgICAgICAgICAgb25Tb3J0PXsob3JkZXIpID0+IChjb2wub25Tb3J0ID8gY29sLm9uU29ydChvcmRlcikgOiB7fSl9XG4gICAgICAgICAgICBzb3J0T3JkZXI9e2NvbC5zb3J0T3JkZXJ9XG4gICAgICAgICAgICB0aXRsZT17Y29sLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsoISFjb2wub25GaWx0ZXIgfHwgISFjb2wuZmlsdGVycykgJiYgKFxuICAgICAgICAgIDxUYWJsZUZpbHRlclxuICAgICAgICAgICAgZmlsdGVyZWRWYWx1ZT17Y29sLmZpbHRlcmVkVmFsdWV9XG4gICAgICAgICAgICBmaWx0ZXJWaXNpYmxlPXtjb2wuZmlsdGVyVmlzaWJsZX1cbiAgICAgICAgICAgIGZpbHRlck11bHRpcGxlPXtjb2wuZmlsdGVyTXVsdGlwbGV9XG4gICAgICAgICAgICBmaWx0ZXJQb3BvdmVyUHJvcHM9e2NvbC5maWx0ZXJQb3BvdmVyUHJvcHN9XG4gICAgICAgICAgICBmaWx0ZXJzPXtjb2wuZmlsdGVyc31cbiAgICAgICAgICAgIG9uRmlsdGVyPXsoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjb2wub25GaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb2wub25GaWx0ZXIoZmlsdGVyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlPXsodmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY29sLm9uRmlsdGVyVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGNvbC5vbkZpbHRlclZpc2libGVDaGFuZ2UodmlzaWJsZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRpdGxlPXtjb2wudGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFjb2wuZml4ZWQgJiYgcmVzaXphYmxlICYmICFpc0xhc3RUaCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tcmVzaXplcmAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmVzaXplcl9zaG93YF06IGlzUmVzaXplclNob3csXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJlc2l6ZXJfY3VycmVudGBdOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGUsIGNvbCl9XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGlmIChjb2wucG9wb3Zlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuM31cbiAgICAgICAgICBwbGFjZW1lbnQ9e1xuICAgICAgICAgICAgY29sLmFsaWduID09PSBcImNlbnRlclwiXG4gICAgICAgICAgICAgID8gXCJ0b3BcIlxuICAgICAgICAgICAgICA6IGNvbC5hbGlnbiA9PT0gXCJyaWdodFwiXG4gICAgICAgICAgICAgID8gXCJ0b3BSaWdodFwiXG4gICAgICAgICAgICAgIDogXCJ0b3BMZWZ0XCJcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ25FZGdlXG4gICAgICAgICAgYXJyb3dlZFxuICAgICAgICAgIHBvcHVwPXtjb2wucG9wb3Zlcn1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aENlbGx9XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHRoQ2VsbFxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVGJvZHlDZWxsID0gKFxuICAgIHJvdzogVCxcbiAgICBjZWxsOiBJQ29sdW1uUHJvcHM8VD4sXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjZWxsSW5kZXg6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGlnbjogYWxpZ25Qcm9wLFxuICAgICAgZXhwYW5kSWNvblZpc2libGUsXG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0Q2VsbFByb3BzLFxuICAgICAgZ2V0Q2VsbFN0eWxlLFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ25Qcm9wLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc2VsZWN0QW5kRXhwYW5kID0gISFvblNlbGVjdENoYW5nZSAmJiAhIW9uRXhwYW5kQ2hhbmdlXG4gICAgY29uc3QgdGhlYWRQbGFjZWhvbGRlclZpc2libGUgPVxuICAgICAgZXhwYW5kSWNvblZpc2libGUgJiYgKCEhb25TZWxlY3RDaGFuZ2UgfHwgISFvbkV4cGFuZENoYW5nZSlcbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nLCBmaXhlZENvbHVtbnNJbmZvcywgcmVzaXplZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduLFxuICAgICAgZGF0YUluZGV4LFxuICAgICAgZmlsdGVycyxcbiAgICAgIG9uRmlsdGVyLFxuICAgICAgb25Tb3J0LFxuICAgICAgcmVuZGVyLFxuICAgICAgc29ydE9yZGVyLFxuICAgICAgdGl0bGUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IGNlbGxcbiAgICBjb25zdCBjbGlja2FibGUgPVxuICAgICAgISFvblNvcnQgfHxcbiAgICAgIChzb3J0T3JkZXIgIT09IG51bGwgJiYgc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAhIW9uRmlsdGVyIHx8XG4gICAgICAhIWZpbHRlcnNcbiAgICBsZXQgbWluV2lkdGggPSAwXG4gICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbWluV2lkdGggPVxuICAgICAgICBNYXRoLmNlaWwodGl0bGUubGVuZ3RoID4gNCA/IHRpdGxlLmxlbmd0aCAvIDIgOiB0aXRsZS5sZW5ndGgpICogMTMgKyAxNlxuICAgICAgaWYgKGNsaWNrYWJsZSkge1xuICAgICAgICBtaW5XaWR0aCArPSAyMFxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZmxleFZhbHVlXG4gICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGh9IDAgYXV0b2BcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHdpZHRoLmxlbmd0aCAtIHdpZHRoLmxhc3RJbmRleE9mKFwicHhcIikgPT09IDIpIHtcbiAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGguc2xpY2UoMCwgLTIpfSAwIGF1dG9gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGV4VmFsdWUgPSBgMCAwICR7d2lkdGh9YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmbGV4VmFsdWUgPSBgJHtNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKX0gMCBhdXRvYFxuICAgIH1cbiAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgIGNvbnN0IGNlbGxDbGFzc05hbWUgPVxuICAgICAgZ2V0Q2VsbENsYXNzTmFtZSAmJiBnZXRDZWxsQ2xhc3NOYW1lKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleClcbiAgICBjb25zdCBjZWxsUHJvcHMgPVxuICAgICAgKGdldENlbGxQcm9wcyAmJiBnZXRDZWxsUHJvcHMocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KSkgfHwge31cbiAgICBjb25zdCBjZWxsU3R5bGUgPVxuICAgICAgKGdldENlbGxTdHlsZSAmJiBnZXRDZWxsU3R5bGUocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KSkgfHwge31cbiAgICBjb25zdCB7IHJvd1NwYW4sIGNvbFNwYW4sIC4uLm90aGVyQ2VsbFByb3BzIH0gPSBjZWxsUHJvcHNcbiAgICBpZiAocm93U3BhbiB8fCBjb2xTcGFuKSB7XG4gICAgICB0aGlzLmNvbWJpbmVkQ2VsbHNJbmZvLnB1c2goe1xuICAgICAgICBjZWxsLFxuICAgICAgICBjZWxsSW5kZXgsXG4gICAgICAgIGNvbFNwYW4sXG4gICAgICAgIHJvdyxcbiAgICAgICAgcm93SW5kZXgsXG4gICAgICAgIHJvd1NwYW4sXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10ZGAsIHtcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yZXNpemluZ2BdOlxuICAgICAgICAgICAgZGF0YUluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4LFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2xlZnRgXTogaXNGaXhlZExlZnQoY2VsbCksXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfcmlnaHRgXTogaXNGaXhlZFJpZ2h0KGNlbGwpLFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2xlZnRMYXN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICk/LmlzTGFzdExlZnQsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfcmlnaHRGaXJzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfY29tYmluZWRgXTogcm93U3BhbiB8fCBjb2xTcGFuLFxuICAgICAgICB9KX1cbiAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgY2VsbEluZGV4fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGxlZnQ6IGlzRml4ZWRMZWZ0KGNlbGwpXG4gICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgKHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlXG4gICAgICAgICAgICAgICAgPyBzZWxlY3RBbmRFeHBhbmRcbiAgICAgICAgICAgICAgICAgID8gU0VMRUNUX0FORF9FWFBBTkRfVERfV0lEVEhcbiAgICAgICAgICAgICAgICAgIDogU0VMRUNUX1REX1dJRFRIXG4gICAgICAgICAgICAgICAgOiAwKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcmlnaHQ6IGlzRml4ZWRSaWdodChjZWxsKVxuICAgICAgICAgICAgPyBmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KT8ub2Zmc2V0XG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmbGV4OiByZXNpemVkQ29sID8gYCR7cmVzaXplZENvbC52YWx1ZX0gMCBhdXRvYCA6IGZsZXhWYWx1ZSxcbiAgICAgICAgICB3aWR0aDogcmVzaXplZENvbFxuICAgICAgICAgICAgPyByZXNpemVkQ29sLnZhbHVlXG4gICAgICAgICAgICA6IHdpZHRoIHx8IE1hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpLFxuICAgICAgICAgIG1heFdpZHRoOiByZXNpemVkQ29sID8gcmVzaXplZENvbC52YWx1ZSA6IHdpZHRoIHx8IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICBkYXRhLWNvbHVtbj17Y2VsbEluZGV4fVxuICAgICAgICB7Li4ub3RoZXJDZWxsUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1jZWxsYCwgY2VsbENsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XG4gICAgICAgICAgICAgICh2ZXJ0aWNhbEFsaWduICYmIFZFUlRJQ0FMX0FMSUdOW3ZlcnRpY2FsQWxpZ25dKSB8fFxuICAgICAgICAgICAgICAodmVydGljYWxBbGlnblByb3AgJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnblByb3BdKSB8fFxuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICAgICAgKGFsaWduICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25dKSB8fFxuICAgICAgICAgICAgICAoYWxpZ25Qcm9wICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25Qcm9wXSkgfHxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgLi4uY2VsbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsSW5uZXJgfT5cbiAgICAgICAgICAgIHtyZW5kZXIgPyByZW5kZXIocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KSA6IHJvd1tkYXRhSW5kZXhdfVxuICAgICAgICAgICAgeyhyb3dTcGFuIHx8IGNvbFNwYW4pICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsX2NvbWJpbmVkYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDb21iaW5lZENlbGxTdHlsZShcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4LFxuICAgICAgICAgICAgICAgICAgICByb3dTcGFuLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBhbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJcbiAgICAgICAgICAgICAgICAgID8gcmVuZGVyKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleClcbiAgICAgICAgICAgICAgICAgIDogcm93W2RhdGFJbmRleF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tYmluZWRDZWxsU3R5bGUgPSAoXG4gICAgXzogSUJhc2VPYmplY3QsXG4gICAgX186IElDb2x1bW5Qcm9wczxUPixcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXIsXG4gICAgcm93U3BhbjogbnVtYmVyLFxuICAgIGNvbFNwYW46IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCBnZXRUYWJsZUNlbGwgPSAocm93SW5kZXhQYXJhbTogbnVtYmVyLCBjb2xJbmRleFBhcmFtOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLm1haW5UYWJsZSkge1xuICAgICAgICBjb25zdCByb3cgPVxuICAgICAgICAgIHRoaXMubWFpblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwicm93XCJdJylbcm93SW5kZXhQYXJhbV1cbiAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgIHJldHVybiByb3cuY2hpbGRyZW5bY29sSW5kZXhQYXJhbV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgY2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCwgY29sSW5kZXgpXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fVxuICAgIGlmIChyb3dTcGFuIDwgMiB8fCB0eXBlb2Ygcm93U3BhbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMCUgLSAxcHgpXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW5kQ2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCArIHJvd1NwYW4gLSAxLCBjb2xJbmRleClcbiAgICAgIGlmIChjZWxsICYmIGVuZENlbGwpIHtcbiAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGVuZENlbGxSZWN0ID0gZW5kQ2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke1xuICAgICAgICAgIGVuZENlbGxSZWN0LmhlaWdodCArIGVuZENlbGxSZWN0LnRvcCAtIGNlbGxSZWN0LnRvcCAtIDFcbiAgICAgICAgfXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2xTcGFuIDwgMiB8fCB0eXBlb2YgY29sU3BhbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSAtIDFweClcIlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbmRDZWxsID0gZ2V0VGFibGVDZWxsKHJvd0luZGV4LCBjb2xJbmRleCArIGNvbFNwYW4gLSAxKVxuICAgICAgaWYgKGNlbGwgJiYgZW5kQ2VsbCkge1xuICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZW5kQ2VsbFJlY3QgPSBlbmRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtcbiAgICAgICAgICBlbmRDZWxsUmVjdC53aWR0aCArIGVuZENlbGxSZWN0LmxlZnQgLSBjZWxsUmVjdC5sZWZ0IC0gMVxuICAgICAgICB9cHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVJlZiA9XG4gICAgKFxuICAgICAgbmFtZT86XG4gICAgICAgIHwgXCJhZmZpeEhlYWRlclwiXG4gICAgICAgIHwgXCJhZmZpeFNjcm9sbGJhclwiXG4gICAgICAgIHwgXCJtYWluVGFibGVcIlxuICAgICAgICB8IFwibWFpblRhYmxlQm9keVwiXG4gICAgICAgIHwgXCJtYWluVGhlYWRcIlxuICAgICAgICB8IFwid3JhcHBlclwiXG4gICAgKSA9PlxuICAgIChub2RlOiBhbnkpID0+IHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSBub2RlXG4gICAgICB9XG4gICAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGVtcHR5VGV4dCxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWFkZXJFbXBoYXNpemVkLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbG9hZGluZyxcbiAgICAgIHNpemUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiYWxpZ25cIixcbiAgICAgIFwiY2hpbGRyZW5cIixcbiAgICAgIFwiY29sdW1uc1wiLFxuICAgICAgXCJjb2x1bW5zUmVzaXphYmxlXCIsXG4gICAgICBcImRlZmF1bHRFeHBhbmRlZFJvd0tleXNcIixcbiAgICAgIFwiZGVmYXVsdFNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRJY29uVmlzaWJsZVwiLFxuICAgICAgXCJleHBhbmRPblJvd0NsaWNrXCIsXG4gICAgICBcImV4cGFuZGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRlZFJvd1JlbmRlclwiLFxuICAgICAgXCJnZXRDZWxsQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldENlbGxQcm9wc1wiLFxuICAgICAgXCJnZXRDZWxsU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRIZWFkU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxTdHlsZVwiLFxuICAgICAgXCJnZXRSb3dDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0Um93UHJvcHNcIixcbiAgICAgIFwiZ2V0Um93U3R5bGVcIixcbiAgICAgIFwiZ2V0U2VsZWN0UHJvcHNcIixcbiAgICAgIFwib25FeHBhbmRDaGFuZ2VcIixcbiAgICAgIFwib25TZWxlY3RDaGFuZ2VcIixcbiAgICAgIFwib25TY3JvbGxcIixcbiAgICAgIFwib25Sb3dDbGlja1wiLFxuICAgICAgXCJvblJvd01vdXNlRW50ZXJcIixcbiAgICAgIFwib25Sb3dNb3VzZUxlYXZlXCIsXG4gICAgICBcInNlbGVjdE11bHRpcGxlXCIsXG4gICAgICBcInNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJzZWxlY3RPblJvd0NsaWNrXCIsXG4gICAgICBcInZlcnRpY2FsQWxpZ25cIixcbiAgICAgIFwidmlydHVhbExpc3RQcm9wc1wiLFxuICAgICAgXCJ2aXJ0dWFsTGlzdFN0eWxlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzTWFpblRhYmxlT3ZlcmZsb3dYLCBpc01haW5UYWJsZU92ZXJmbG93WSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmNvbHVtbk1hbmFnZXIucmVzZXQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgY29uc3QgeyBnZXRHcm91cENvbHVtbnNEZXB0aCB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBlbXB0eSA9ICEoZGF0YVNvdXJjZSAmJiBkYXRhU291cmNlLmxlbmd0aClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0td3JhcHBlcmAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1oZWFkZXJFbXBoYXNpemVkYF06IGhlYWRlckVtcGhhc2l6ZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWVtcHR5YF06IGVtcHR5LFxuICAgICAgICBbYCR7cHJlZml4fS1sb2FkaW5nYF06IGxvYWRpbmcsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXhgXTogaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXlgXTogaXNNYWluVGFibGVPdmVyZmxvd1ksXG4gICAgICAgIFtgJHtwcmVmaXh9LXZpcnR1YWxTY3JvbGxgXTogdmlydHVhbFNjcm9sbCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSByZWY9e3RoaXMuc2F2ZVJlZihcIndyYXBwZXJcIil9IHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJmYWRlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIHRvcDogYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXX1weGAsXG4gICAgICAgICAgICB6SW5kZXg6IFwiY2FsYyh2YXIoLS16LWluZGV4LWFmZml4KSArIDIpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2FkaW5nICYmXG4gICAgICAgICAgICAoaGVhZGVyQWZmaXhlZCA/IChcbiAgICAgICAgICAgICAgPEFmZml4XG4gICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXtcbiAgICAgICAgICAgICAgICAgIChoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wIHx8IDApICsgVERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMud3JhcHBlcn1cbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ9e2hlYWRlckFmZml4R2V0VGFyZ2V0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgIDwvQWZmaXg+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9PlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGFibGVzYCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0taW5uZXJTY3JvbGxgXTogISFoZWlnaHQsXG4gICAgICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvd2VkYF06IGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0taGFzRml4ZWRSaWdodENvbHVtbnNgXTpcbiAgICAgICAgICAgICAgdGhpcy5jb2x1bW5NYW5hZ2VyLmlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQoKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiBoZWlnaHQgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogaGVpZ2h0XG4gICAgICAgICAgICAgID8gYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXSAqIGdldEdyb3VwQ29sdW1uc0RlcHRoKCl9cHhgXG4gICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1haW5UYWJsZWB9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcIm1haW5UYWJsZVwiKX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJsZVwiXG4gICAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUYWJsZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyYH0+e2VtcHR5VGV4dH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiJdfQ==