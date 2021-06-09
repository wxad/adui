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

var _default = Table;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJURF9NSU5fV0lEVEgiLCJTRUxFQ1RfVERfV0lEVEgiLCJTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSCIsIlREX0hFSUdIVCIsImxhcmdlIiwibWVkaXVtIiwibWluaSIsInNtYWxsIiwiSE9SSVpPTlRBTF9BTElHTiIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsIlZFUlRJQ0FMX0FMSUdOIiwiYm90dG9tIiwidG9wIiwiaXNGaXhlZExlZnQiLCJjb2wiLCJmaXhlZCIsImlzRml4ZWRSaWdodCIsIlRhYmxlIiwicHJvcHMiLCJjb21iaW5lZENlbGxzSW5mbyIsImFmZml4SGVhZGVyIiwiYWZmaXhTY3JvbGxiYXIiLCJtYWluVGFibGUiLCJtYWluVGFibGVCb2R5IiwibWFpblRoZWFkIiwid3JhcHBlciIsImRlYm91bmNlZFdpbmRvd1Jlc2l6ZSIsInJlc2l6ZUV2ZW50IiwiY29sdW1uTWFuYWdlciIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJpc0FueUNvbHVtbnNGaXhlZCIsImhlYWRlckFmZml4ZWQiLCJoZWlnaHQiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJ3aW5kb3ciLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImRhdGFTb3VyY2VPbGQiLCJkYXRhU291cmNlIiwiZ2V0Q2VsbFByb3BzT2xkIiwiZ2V0Q2VsbFByb3BzIiwic2V0VGltZW91dCIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmUiLCJjbGVhciIsInJlc2l6ZUNvbHVtblN0YXJ0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiY3Vyc29yIiwiY3VycmVudGx5UmVzaXppbmciLCJkYXRhSW5kZXgiLCJwYXJlbnRXaWR0aCIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzdGFydFgiLCJwYWdlWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJyZXNpemVDb2x1bW5FbmQiLCJyZXNpemVkIiwiYmFzZVdpZHRoIiwiTWF0aCIsImNlaWwiLCJ0aXRsZSIsIm5ld1Jlc2l6ZWQiLCJmaWx0ZXIiLCJvIiwibmV3V2lkdGgiLCJtYXgiLCJvblNvcnQiLCJvbkZpbHRlciIsInB1c2giLCJ2YWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc01haW5UYWJsZU92ZXJmbG93WCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJpc01haW5UYWJsZU92ZXJmbG93WSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImlzUmVzaXplclNob3ciLCJvbGRTdHlsZSIsIm1haW5UYWJsZVN0eWxlIiwicmVjdCIsImhhbmRsZU1haW5UYWJsZVNjcm9sbCIsIm9uU2Nyb2xsIiwiYWZmaXhlZFRvcCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImZpeGVkTm9kZSIsInNjcm9sbExlZnQiLCJzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVJvd0NsaWNrIiwicm93IiwiaSIsImV4cGFuZE9uUm93Q2xpY2siLCJnZXRTZWxlY3RQcm9wcyIsIm9uUm93Q2xpY2siLCJzZWxlY3RPblJvd0NsaWNrIiwic2VsZWN0ZWRSb3dLZXlzIiwia2V5IiwiZGlzYWJsZWQiLCJoYW5kbGVTZWxlY3QiLCJpbmNsdWRlcyIsImhhbmRsZUV4cGFuZCIsImhhbmRsZVRoUmVzaXplIiwiaW5kZXgiLCJmaXhlZFBvc2l0aW9uIiwiZ2V0Q29sdW1ucyIsImZpeGVkQ29sdW1uc0luZm9zIiwiY29sdW1ucyIsImZpbmQiLCJwIiwiZmluZEluZGV4Iiwic3BsaWNlIiwic29ydCIsImEiLCJiIiwiZml4ZWRDb2x1bW5zSW5mb3NMZWZ0IiwiZml4ZWRDb2x1bW5zSW5mb3NSaWdodCIsImZvckVhY2giLCJjb2xJbmRleCIsImlzTGFzdExlZnQiLCJvZmZzZXQiLCJzbGljZSIsInJlZHVjZSIsImFjYyIsImN1ciIsImlzRmlyc3RSaWdodCIsImhhbmRsZVRoZWFkTW91c2VFbnRlciIsImhhbmRsZVRoZWFkTW91c2VMZWF2ZSIsIk9iamVjdCIsImtleXMiLCJleHBhbmRlZFJvd0tleXNQcm9wIiwiZXhwYW5kZWRSb3dLZXlzIiwib25FeHBhbmRDaGFuZ2UiLCJpbmRleE9mIiwiY2hlY2tlZCIsIm9uU2VsZWN0Q2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzUHJvcCIsInNlbGVjdE11bHRpcGxlIiwiaGFuZGxlU2VsZWN0QWxsIiwiYXZhaWxhYmxlS2V5cyIsImdldEF2YWlsYWJsZVJvd3NLZXlzIiwiaGFzU2VsZWN0ZWRBbGwiLCJldmVyeSIsImdlbmVyYXRlVGFibGUiLCJleHBhbmRJY29uVmlzaWJsZSIsImV4cGFuZGVkUm93UmVuZGVyIiwiZ2V0SGVhZENsYXNzTmFtZSIsImdldEhlYWRTdHlsZSIsImdldFJvd0NsYXNzTmFtZSIsImdldFJvd1N0eWxlIiwiaGVhZGVyQWZmaXhlZE9mZnNldFRvcCIsImhlYWRlckFmZml4R2V0VGFyZ2V0Iiwib25Sb3dNb3VzZUVudGVyIiwib25Sb3dNb3VzZUxlYXZlIiwic2l6ZSIsInZlcnRpY2FsQWxpZ24iLCJ2aXJ0dWFsTGlzdFByb3BzIiwidmlydHVhbExpc3RTdHlsZSIsInZpcnR1YWxTY3JvbGwiLCJhZmZpeGVkQm90dG9tIiwiZ2V0R3JvdXBDb2x1bW5zRGVwdGgiLCJpc0FueUNvbHVtbnNMZWZ0Rml4ZWQiLCJ0aGVhZFN0eWxlIiwic2VsZWN0QW5kRXhwYW5kIiwidGhlYWRQbGFjZWhvbGRlclZpc2libGUiLCJ0aGVhZCIsInNhdmVSZWYiLCJtYXAiLCJhbGlnbiIsImZpbHRlcnMiLCJzb3J0T3JkZXIiLCJyZXNpemVkQ29sIiwiY2xpY2thYmxlIiwidW5kZWZpbmVkIiwibWluV2lkdGgiLCJmbGV4VmFsdWUiLCJsYXN0SW5kZXhPZiIsIndpZHRoUmVzaXplIiwiZmxleCIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwiZ2VuZXJhdGVUaENlbGwiLCJjaGlsZHJlbiIsImNoaWxkQ29sIiwiY2hpbGRDb2xJbmRleCIsImdyYW5kQ29sIiwiZ3JhbmRDb2xJbmRleCIsImdlbmVyYXRlVHJzIiwicm93SW5kZXgiLCJjb2xBcnJheSIsInNlbGVjdFByb3BzR2V0dGVkIiwiYWxsU2VsZWN0UHJvcHMiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzZWxlY3RQcm9wcyIsInNlbGVjdENvbnRlbnQiLCJleHBhbmRDb250ZW50Iiwic2VsZWN0Q2VsbCIsImdlbmVyYXRlVHIiLCJjb2x1bW5zUGFyYW0iLCJwYXJlbnRJbmRleCIsImNvbEluZGV4UGFyYW0iLCJjaGlsZHJlbkNvdW50IiwiZ2VuZXJhdGVUYm9keUNlbGwiLCJ0ciIsImFsaWduSXRlbXMiLCJwb3BvdmVyUHJvcHMiLCJwb3B1cCIsImJvb2wiLCJkaXNwbGF5IiwiekluZGV4IiwiZmxleERpcmVjdGlvbiIsIm9wdGlvbnMiLCJjb2x1bW5zUmVzaXphYmxlIiwiZ2V0SGVhZENlbGxDbGFzc05hbWUiLCJnZXRIZWFkQ2VsbFN0eWxlIiwiY29sUmVzaXphYmxlIiwicmVzaXphYmxlIiwiaXNMYXN0VGgiLCJ0aENlbGwiLCJqdXN0aWZ5Q29udGVudCIsIm9yZGVyIiwiZmlsdGVyZWRWYWx1ZSIsImZpbHRlclZpc2libGUiLCJmaWx0ZXJNdWx0aXBsZSIsImZpbHRlclBvcG92ZXJQcm9wcyIsInZpc2libGUiLCJvbkZpbHRlclZpc2libGVDaGFuZ2UiLCJwb3BvdmVyIiwiY2VsbCIsImNlbGxJbmRleCIsImFsaWduUHJvcCIsImdldENlbGxDbGFzc05hbWUiLCJnZXRDZWxsU3R5bGUiLCJ2ZXJ0aWNhbEFsaWduUHJvcCIsInJlbmRlciIsImNlbGxDbGFzc05hbWUiLCJjZWxsUHJvcHMiLCJjZWxsU3R5bGUiLCJyb3dTcGFuIiwiY29sU3BhbiIsIm90aGVyQ2VsbFByb3BzIiwiZ2V0Q29tYmluZWRDZWxsU3R5bGUiLCJfIiwiX18iLCJnZXRUYWJsZUNlbGwiLCJyb3dJbmRleFBhcmFtIiwicXVlcnlTZWxlY3RvckFsbCIsImVuZENlbGwiLCJjZWxsUmVjdCIsImVuZENlbGxSZWN0IiwibmFtZSIsIm5vZGUiLCJkZWZhdWx0RXhwYW5kZWRSb3dLZXlzIiwiZGVmYXVsdFNlbGVjdGVkUm93S2V5cyIsIkNvbHVtbk1hbmFnZXIiLCJlbXB0eVRleHQiLCJoZWFkZXJFbXBoYXNpemVkIiwibG9hZGluZyIsIm90aGVyUHJvcHMiLCJyZXN0UHJvcHMiLCJyZXNldCIsImVtcHR5IiwiY2xhc3NTZXQiLCJwb3NpdGlvbiIsImlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQiLCJtYXhIZWlnaHQiLCJwYWRkaW5nVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiLCJDb2x1bW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyIsImFycmF5IiwiZnVuYyIsIm51bWJlciIsIkVycm9yIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV3U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUcsWUFBZjtBQUNBLElBQU1DLFlBQVksR0FBRyxHQUFyQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxFQUF4QjtBQUNBLElBQU1DLDBCQUEwQixHQUFHLEVBQW5DO0FBQ0Es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QUFBLGVBQWUsRUFBRSxJQXRDb0M7QUF1Q3JEMEQsRUFBQUEsSUFBSSxFQUFFLE9BdkMrQztBQXdDckRDLEVBQUFBLGFBQWEsRUFBRWtCLFNBeENzQztBQXlDckRqQixFQUFBQSxnQkFBZ0IsRUFBRSxFQXpDbUM7QUEwQ3JEQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQTFDbUM7QUEyQ3JEQyxFQUFBQSxhQUFhLEVBQUU7QUEzQ3NDLEM7O0FBcE5uRDNKLEssQ0FrUVV1Uix3QixHQUEyQixpQkFLVDtBQUFBLE1BSjlCcEcsUUFJOEIsU0FKOUJBLFFBSThCO0FBQUEsTUFIOUIzRSxPQUc4QixTQUg5QkEsT0FHOEI7QUFBQSxNQUY5QndCLGVBRThCLFNBRjlCQSxlQUU4QjtBQUFBLE1BRDlCbkMsZUFDOEIsU0FEOUJBLGVBQzhCO0FBQzlCLE1BQU0yTCxRQUE4QixHQUFHLEVBQXZDOztBQUNBLE1BQUlyRyxRQUFRLEtBQUssSUFBYixJQUFxQjNFLE9BQU8sS0FBSyxJQUFyQyxFQUEyQztBQUN6Q2dMLElBQUFBLFFBQVEsQ0FBQ3JHLFFBQVQsR0FBb0IzRSxPQUFPLElBQUkyRSxRQUEvQjtBQUNEOztBQUNELE1BQUluRCxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJ3SixJQUFBQSxRQUFRLENBQUN4SixlQUFULEdBQTJCQSxlQUEzQjtBQUNEOztBQUNELE1BQUluQyxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIyTCxJQUFBQSxRQUFRLENBQUMzTCxlQUFULEdBQTJCQSxlQUEzQjtBQUNEOztBQUNELFNBQU9nQyxNQUFNLENBQUNDLElBQVAsQ0FBWTBKLFFBQVosRUFBc0JsUSxNQUF0QixHQUErQixDQUEvQixHQUFtQ2tRLFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsQzs7ZUEwNkNZeFIsSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2ludGVyYWN0aXZlLXN1cHBvcnRzLWZvY3VzICovXG4vKipcbiAqIFRhYmxlIOe7hOS7tuWwhuS4jeS8muS/ruaUueaIkCBGdW5jdGlvbkNvbXBvbmVudO+8jFxuICog5Zug5Li66ICD6JmR5Yiw5LmL5YmN5Zyo5L2/55So5pe25a2Y5Zyo5LiN5bCR6YCa6L+HIOWunuS+iy50YWJsZSDnmoTmlrnms5Xnm7TmjqXorr/pl64gPHRhYmxlIC8+IOWFg+e0oOeahOeUqOazleOAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyXCJcbmltcG9ydCBMaXN0IGZyb20gXCJyYy12aXJ0dWFsLWxpc3RcIlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiZGVib3VuY2VcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IENvbHVtbiwgeyBJQ29sdW1uUHJvcHMgfSBmcm9tIFwiLi9Db2x1bW5cIlxuaW1wb3J0IEFmZml4IGZyb20gXCIuLi9hZmZpeFwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94XCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi4vcmFkaW9cIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFRhYmxlU29ydCBmcm9tIFwiLi9UYWJsZVNvcnRcIlxuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gXCIuL1RhYmxlRmlsdGVyXCJcbmltcG9ydCBDb2x1bW5NYW5hZ2VyIGZyb20gXCIuL0NvbHVtbk1hbmFnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5pbnRlcmZhY2UgSUZpeGVkQ29sdW1uc0luZm8ge1xuICB3aWR0aDogbnVtYmVyXG4gIGRhdGFJbmRleDogc3RyaW5nXG4gIGZpeGVkOiBcImxlZnRcIiB8IFwicmlnaHRcIlxuICBpbmRleDogbnVtYmVyXG4gIGlzTGFzdExlZnQ/OiBib29sZWFuXG4gIGlzRmlyc3RSaWdodD86IGJvb2xlYW5cbiAgb2Zmc2V0PzogbnVtYmVyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJsZVwiXG5jb25zdCBURF9NSU5fV0lEVEggPSAxMDBcbmNvbnN0IFNFTEVDVF9URF9XSURUSCA9IDUwXG5jb25zdCBTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSCA9IDgwXG5jb25zdCBURF9IRUlHSFQgPSB7XG4gIGxhcmdlOiA2MCxcbiAgbWVkaXVtOiA1MCxcbiAgbWluaTogNDAsXG4gIHNtYWxsOiA0MCxcbn1cbmNvbnN0IEhPUklaT05UQUxfQUxJR04gPSB7XG4gIGNlbnRlcjogXCJjZW50ZXJcIiBhcyBcImNlbnRlclwiLFxuICBsZWZ0OiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbiAgcmlnaHQ6IFwiZmxleC1lbmRcIiBhcyBcImZsZXgtZW5kXCIsXG59XG5jb25zdCBWRVJUSUNBTF9BTElHTiA9IHtcbiAgYm90dG9tOiBcImZsZXgtZW5kXCIgYXMgXCJmbGV4LWVuZFwiLFxuICBjZW50ZXI6IFwiY2VudGVyXCIgYXMgXCJjZW50ZXJcIixcbiAgdG9wOiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbn1cbmNvbnN0IGlzRml4ZWRMZWZ0ID0gKGNvbDogSUJhc2VPYmplY3QpOiBib29sZWFuID0+XG4gIGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIgfHwgY29sLmZpeGVkID09PSB0cnVlXG5jb25zdCBpc0ZpeGVkUmlnaHQgPSAoY29sOiBJQmFzZU9iamVjdCk6IGJvb2xlYW4gPT4gY29sLmZpeGVkID09PSBcInJpZ2h0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVQcm9wczxUIGV4dGVuZHMgSUJhc2VPYmplY3QgPSBJQmFzZU9iamVjdD4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+awtOW5s+mdoOm9kOaWueWQkVxuICAgKi9cbiAgYWxpZ24/OiBudWxsIHwgXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogYW55XG4gIC8qKlxuICAgKiDku6XmlbDnu4TnmoTmlrnlvI/kvKDlhaUgQ29sdW1uc++8jOWmguaenOS8oOWFpeS6huatpCBQcm9w77yM5YiZIFRhYmxlIOS8muW/veeVpSBjaGlsZHJlblxuICAgKi9cbiAgY29sdW1ucz86IElDb2x1bW5Qcm9wczxUPltdIHwgbnVsbFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaOp+WItuaVtOS4qiBUYWJsZSDnmoQgQ29sdW1ucyDog73lkKbosIPmlbTlrr3luqZcbiAgICovXG4gIGNvbHVtbnNSZXNpemFibGU/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5pWw5o2u5rqQXG4gICAqL1xuICBkYXRhU291cmNlPzogVFtdXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog56m65pWw5o2u5rqQ5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBlbXB0eVRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAqIDEuIOS9v+eUqCBleHBhbmRPblJvd0NsaWNrIOaIluiAhVxuICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgKi9cbiAgZXhwYW5kSWNvblZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgKi9cbiAgZXhwYW5kT25Sb3dDbGljaz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeS7juWklumDqOaOp+WItu+8jOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGV4cGFuZGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICovXG4gIGV4cGFuZGVkUm93UmVuZGVyPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLznmoTnsbvlkI3vvJoocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldENlbGxDbGFzc05hbWU/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoTnlLHnu4Tku7bop4TlrprnmoQgcHJvcO+8jFxuICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldENlbGxQcm9wcz86IChcbiAgICByb3c6IFQsXG4gICAgY29sOiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBJQmFzZU9iamVjdCB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsU3R5bGU/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9riB0aGVhZCDnmoTnsbvlkI3vvJooKSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0SGVhZENsYXNzTmFtZT86ICgpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jCgpID0+ICh7fSlcbiAgICovXG4gIGdldEhlYWRTdHlsZT86ICgpID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKogVEgg55qE57G75ZCN77yaKGNvbCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRIZWFkQ2VsbENsYXNzTmFtZT86IChjb2w6IElCYXNlT2JqZWN0LCBjb2xJbmRleDogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4qiBUSCDkuIrnmoQgc3R5bGXvvIwoY29sLCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0SGVhZENlbGxTdHlsZT86IChcbiAgICBjb2w6IElCYXNlT2JqZWN0LFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P6KGM55qE57G75ZCN77yaKHJvdywgcm93SW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRSb3dDbGFzc05hbWU/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+ihjOeahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRSb3dTdHlsZT86IChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHorr7nva7mr4/kuKogQ2hlY2tib3gvUmFkaW8g5LiK55qEIHByb3AgKHJvdywgcm93SW5kZXgpID0+ICh7fSnvvJtcbiAgICog5Y+v5Lul5Zyo6L+Z6YeM5Zue5LygIGRpc2FibGVkOiB0cnVlLCDmjqfliLbor6XooYzkuI3og73pgInmi6nvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBnZXRTZWxlY3RQcm9wcz86IChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IElCYXNlT2JqZWN0XG4gIC8qKlxuICAgKiDmmK/lkKbpnIDopoHooajlpLTlm7rlrprliLDpobXpnaLkuIpcbiAgICovXG4gIGhlYWRlckFmZml4ZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HooajlpLTlm7rlrppcbiAgICovXG4gIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWPguiAgyA8QWZmaXggLz4g55qEIGdldFRhcmdldCBQcm9wXG4gICAqL1xuICBoZWFkZXJBZmZpeEdldFRhcmdldD86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIC8qKlxuICAgKiDliqDph43lpLTpg6jvvIzlvIDlkK/kuYvlkI7ooajlpLTlsIbkvJrliqDnspcgKyDog4zmma9cbiAgICovXG4gIGhlYWRlckVtcGhhc2l6ZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprpq5jluqbku6Xlrp7njrDooajmoLzlhoXmu5rliqjvvIzmraQgcHJvcCDkuI4gcHJvcCBoZWFkZXJBZmZpeGVkIOS6kuaWpeOAglxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm5Yqg6L295LitXG4gICAqL1xuICBsb2FkaW5nPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5bGV5byA5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/lsZXlvIDlip/og73nmoTliKTmlq3vvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgb25FeHBhbmRDaGFuZ2U/OiAoKGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog5q+P6KGM55qEIGNsaWNrIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dDbGljaz86XG4gICAgfCAoKHJvdzogVCwgcm93SW5kZXg6IG51bWJlciwgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog5q+P6KGM55qEIG1vdXNlRW50ZXIgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAqL1xuICBvblJvd01vdXNlRW50ZXI/OlxuICAgIHwgKChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIsIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBtb3VzZUxlYXZlIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dNb3VzZUxlYXZlPzpcbiAgICB8ICgocm93OiBULCByb3dJbmRleDogbnVtYmVyLCBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHpgInmi6nmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+mAieaLqeWKn+iDveeahOWIpOaWre+8m1xuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBvblNlbGVjdENoYW5nZT86ICgoa2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiBUYWJsZSDmu5rliqjml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25TY3JvbGw/OiAoKGU6IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeWkmiAvIOWNlemAie+8m+ivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIHNlbGVjdE11bHRpcGxlPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R6YCJ5oup44CCXG4gICAqIOatpCBwcm9wIOS8muWcqCAudHIg5LiK5Yqg5YWlIG9uQ2xpY2sg5LqL5Lu277yMXG4gICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICovXG4gIHNlbGVjdE9uUm93Q2xpY2s/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHku47lpJbpg6jmjqfliLbvvIzpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yMXG4gICAqIOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqozvvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgc2VsZWN0ZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuO+8jOazqOaEj++8muWwuuWvuOS7heaOp+WItuihjOS4juWIl+mXtOi3ne+8jOS4juWtl+S9k+Wkp+Wwj+S4jee7keWumuOAglxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog57uf5LiA5Zyw5o6n5Yi25YiX5Z6C55u06Z2g6b2Q5pa55ZCRXG4gICAqL1xuICB2ZXJ0aWNhbEFsaWduPzogXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiXG4gIC8qKlxuICAgKiDomZrmi5/liJfooajnmoQgUHJvcHPvvIzor7flj4LogIMgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtdmlydHVhbC1saXN0XG4gICAqL1xuICB2aXJ0dWFsTGlzdFByb3BzPzogSUJhc2VPYmplY3RcbiAgLyoqXG4gICAqIOiZmuaLn+WIl+ihqOeahOagt+W8j++8jOivt+WcqOi/memHjOaMh+WumuWuveW6pu+8jOm7mOiupOWwhuS8muaciSA1MDAgcHgg5a695bqmXG4gICAqL1xuICB2aXJ0dWFsTGlzdFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5piv5ZCm5byA5ZCv6Jma5ouf5rua5Yqo77yM5q2kIFByb3Ag6K+36YWN5ZCIIGhlaWdodCBQcm9wIOWQjOaXtuS9v+eUqO+8jOeUqOS6juWkhOeQhuWkp+aVsOaNrumHj+S4i+eahOiZmuaLn+WGhea7muWKqO+8m1xuICAgKiDmraTlip/og73nmoTlrp7pmYXnlKjkvovovoPlsJHvvIzlpoLmnpzmnInku7vkvZXpl67popjor7flj4rml7blj43ppohcbiAgICovXG4gIHZpcnR1YWxTY3JvbGw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3RhdGUge1xuICBhZmZpeGVkVG9wOiBib29sZWFuXG4gIGFmZml4ZWRCb3R0b206IGJvb2xlYW5cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBjb21iaW5lZENlbGxzSW5mbzogSUJhc2VPYmplY3RbXVxuICBleHBhbmRlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbiAgZml4ZWRDb2x1bW5zSW5mb3M6IEFycmF5PElGaXhlZENvbHVtbnNJbmZvPlxuICBtYWluVGFibGVTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllc1xuICBpc01haW5UYWJsZU92ZXJmbG93WDogYm9vbGVhblxuICBpc01haW5UYWJsZU92ZXJmbG93WTogYm9vbGVhblxuICBpc1Jlc2l6ZXJTaG93OiBib29sZWFuXG4gIGN1cnJlbnRseVJlc2l6aW5nOiBJQmFzZU9iamVjdFxuICByZXNpemVkOiBJQmFzZU9iamVjdFtdXG4gIHNlbGVjdGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PlxufVxuXG4vKipcbiAqIOihqOagvOaYr+S4gOenjeagvOW8j+WMluS/oeaBr+eahOWxleekuuW9ouW8j+OAgumAmuW4uOacjeWKoeS6juWkp+mHj+aVsOaNrua1j+iniOOAgeeuoeeQhuWcuuaZr+OAglxuICovXG5jbGFzcyBUYWJsZTxUIGV4dGVuZHMgSUJhc2VPYmplY3QgPSBJQmFzZU9iamVjdD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIElUYWJsZVByb3BzPFQ+LFxuICBJVGFibGVTdGF0ZVxuPiB7XG4gIHB1YmxpYyBzdGF0aWMgQ29sdW1uOiB0eXBlb2YgQ29sdW1uID0gQ29sdW1uXG5cbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog57uf5LiA5Zyw5o6n5Yi25YiX5rC05bmz6Z2g6b2Q5pa55ZCRXG4gICAgICovXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5Lul5pWw57uE55qE5pa55byP5Lyg5YWlIENvbHVtbnPvvIzlpoLmnpzkvKDlhaXkuobmraQgUHJvcO+8jOWImSBUYWJsZSDkvJrlv73nlaUgY2hpbGRyZW5cbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5o6n5Yi25pW05LiqIFRhYmxlIOeahCBDb2x1bW5zIOiDveWQpuiwg+aVtOWuveW6plxuICAgICAqL1xuICAgIGNvbHVtbnNSZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaVsOaNrua6kFxuICAgICAqL1xuICAgIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6buY6K6k6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOepuuaVsOaNrua6kOaXtuaYvuekuueahOWGheWuuVxuICAgICAqL1xuICAgIGVtcHR5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5pi+56S65bGV5byAIGljb27vvIzlpoLmnpzkuLogZmFsc2XvvIzmhI/lkbPnnYBcbiAgICAgKiAxLiDkvb/nlKggZXhwYW5kT25Sb3dDbGljayDmiJbogIVcbiAgICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgICAqL1xuICAgIGV4cGFuZEljb25WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBleHBhbmRPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHku47lpJbpg6jmjqfliLbvvIzlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd1JlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC855qE57G75ZCN77yaKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qE55Sx57uE5Lu26KeE5a6a55qEIHByb3DvvIxcbiAgICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRDZWxsUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Q2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg55qE57G75ZCN77yacG9zaXRpb24gPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg5LiK55qEIHN0eWxl77yMcG9zaXRpb24gPT4gKHt9KVxuICAgICAqL1xuICAgIGdldEhlYWRTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5LiqIFRIIOeahOexu+WQje+8mihjb2wsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKogVEgg5LiK55qEIHN0eWxl77yMKGNvbCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/ooYznmoTnsbvlkI3vvJoocm93LCByb3dJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRSb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+ihjOeahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Um93U3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeiuvue9ruavj+S4qiBDaGVja2JveC9SYWRpbyDkuIrnmoQgcHJvcCAocm93LCByb3dJbmRleCkgPT4gKHt9Ke+8m1xuICAgICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGdldFNlbGVjdFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbpnIDopoHooajlpLTlm7rlrprliLDpobXpnaLkuIpcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HooajlpLTlm7rlrppcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWPguiAgyA8QWZmaXggLz4g55qEIGdldFRhcmdldCBQcm9wXG4gICAgICovXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWKoOmHjeWktOmDqO+8jOW8gOWQr+S5i+WQjuihqOWktOWwhuS8muWKoOeylyArIOiDjOaZr1xuICAgICAqL1xuICAgIGhlYWRlckVtcGhhc2l6ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumumrmOW6puS7peWunueOsOihqOagvOWGhea7muWKqO+8jOatpCBwcm9wIOS4jiBwcm9wIGhlYWRlckFmZml4ZWQg5LqS5pal44CCXG4gICAgICovXG4gICAgaGVpZ2h0OiAocHJvcHM6IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PikgPT4ge1xuICAgICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiSW52YWxpZCBwcm9wIGBoZWlnaHRgIHN1cHBsaWVkIHRvIGBUYWJsZWAsIGV4cGVjdGVkIGBudW1iZXJgLlwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJBZmZpeGVkICYmICEhaGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiVGFibGUuanMg5LiN5YWB6K645ZCM5pe25L2/55SoIHByb3AgYGhlYWRlckFmZml4ZWRgIOS4jiBgaGVpZ2h0YO+8jOS4jeiupOWPr+Wwhui/meS4pOiAhea3t+eUqOeahOmcgOaxguWcuuaZr+OAglwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5Yqg6L295LitXG4gICAgICovXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5bGV5byA5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/lsZXlvIDlip/og73nmoTliKTmlq3vvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgb25FeHBhbmRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBjbGljayBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICAgKi9cbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmr4/ooYznmoQgbW91c2VFbnRlciBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICAgKi9cbiAgICBvblJvd01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBtb3VzZUxlYXZlIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93TW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6YCJ5oup5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/pgInmi6nlip/og73nmoTliKTmlq3vvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIFRhYmxlIOa7muWKqOaXtueahCBoYW5kbGVyXG4gICAgICovXG4gICAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeWkmiAvIOWNlemAie+8m+ivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBzZWxlY3RNdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R6YCJ5oup44CCXG4gICAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAgICovXG4gICAgc2VsZWN0T25Sb3dDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jFxuICAgICAqIOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqozvvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgc2VsZWN0ZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog6K6+572u5bC65a+477yM5rOo5oSP77ya5bC65a+45LuF5o6n5Yi26KGM5LiO5YiX6Ze06Led77yM5LiO5a2X5L2T5aSn5bCP5LiN57uR5a6a44CCXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgICAvKipcbiAgICAgKiDnu5/kuIDlnLDmjqfliLbliJflnoLnm7TpnaDpvZDmlrnlkJFcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbEFsaWduOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwidG9wXCIsIFwiY2VudGVyXCIsIFwiYm90dG9tXCJdKSxcbiAgICAvKipcbiAgICAgKiDomZrmi5/liJfooajnmoQgUHJvcHPvvIzor7flj4LogIMgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtdmlydHVhbC1saXN0XG4gICAgICovXG4gICAgdmlydHVhbExpc3RQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDomZrmi5/liJfooajnmoTmoLflvI/vvIzor7flnKjov5nph4zmjIflrprlrr3luqbvvIzpu5jorqTlsIbkvJrmnIkgNTAwIHB4IOWuveW6plxuICAgICAqL1xuICAgIHZpcnR1YWxMaXN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5byA5ZCv6Jma5ouf5rua5Yqo77yM5q2kIFByb3Ag6K+36YWN5ZCIIGhlaWdodCBQcm9wIOWQjOaXtuS9v+eUqO+8jOeUqOS6juWkhOeQhuWkp+aVsOaNrumHj+S4i+eahOiZmuaLn+WGhea7muWKqO+8m1xuICAgICAqIOatpOWKn+iDveeahOWunumZheeUqOS+i+i+g+Wwke+8jOWmguaenOacieS7u+S9lemXrumimOivt+WPiuaXtuWPjemmiFxuICAgICAqL1xuICAgIHZpcnR1YWxTY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PiA9IHtcbiAgICBhbGlnbjogbnVsbCxcbiAgICBjaGlsZHJlbjogXCJcIixcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBjb2x1bW5zOiBudWxsLFxuICAgIGNvbHVtbnNSZXNpemFibGU6IG51bGwsXG4gICAgZGF0YVNvdXJjZTogW10sXG4gICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogbnVsbCxcbiAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzOiBudWxsLFxuICAgIGVtcHR5VGV4dDogXCLmmoLml6DmlbDmja5cIixcbiAgICBleHBhbmRJY29uVmlzaWJsZTogdHJ1ZSxcbiAgICBleHBhbmRPblJvd0NsaWNrOiBmYWxzZSxcbiAgICBleHBhbmRlZFJvd0tleXM6IG51bGwsXG4gICAgZXhwYW5kZWRSb3dSZW5kZXI6ICgpID0+IFwiXCIsXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRDZWxsUHJvcHM6IG5vb3AsXG4gICAgZ2V0Q2VsbFN0eWxlOiBub29wLFxuICAgIGdldEhlYWRDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0SGVhZFN0eWxlOiBub29wLFxuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldEhlYWRDZWxsU3R5bGU6IG5vb3AsXG4gICAgZ2V0Um93Q2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldFJvd1N0eWxlOiBub29wLFxuICAgIGdldFNlbGVjdFByb3BzOiAoKSA9PiAoe30pLFxuICAgIGhlYWRlckFmZml4ZWQ6IGZhbHNlLFxuICAgIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A6IDAsXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IG51bGwsXG4gICAgaGVhZGVyRW1waGFzaXplZDogZmFsc2UsXG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG9uRXhwYW5kQ2hhbmdlOiBudWxsLFxuICAgIG9uUm93Q2xpY2s6IG51bGwsXG4gICAgb25Sb3dNb3VzZUVudGVyOiBudWxsLFxuICAgIG9uUm93TW91c2VMZWF2ZTogbnVsbCxcbiAgICBvblNlbGVjdENoYW5nZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBzZWxlY3RNdWx0aXBsZTogdHJ1ZSxcbiAgICBzZWxlY3RPblJvd0NsaWNrOiBmYWxzZSxcbiAgICBzZWxlY3RlZFJvd0tleXM6IG51bGwsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IHVuZGVmaW5lZCxcbiAgICB2aXJ0dWFsTGlzdFByb3BzOiB7fSxcbiAgICB2aXJ0dWFsTGlzdFN0eWxlOiB7fSxcbiAgICB2aXJ0dWFsU2Nyb2xsOiBmYWxzZSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBjb2x1bW5zLFxuICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICBzZWxlY3RlZFJvd0tleXMsXG4gIH06IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PikgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPElUYWJsZVN0YXRlPiA9IHt9XG4gICAgaWYgKGNoaWxkcmVuICE9PSBudWxsIHx8IGNvbHVtbnMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmNoaWxkcmVuID0gY29sdW1ucyB8fCBjaGlsZHJlblxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5leHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5cyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSb3dLZXlzID0gc2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCA/IG5ld1N0YXRlIDogbnVsbFxuICB9XG5cbiAgcHVibGljIGNvbWJpbmVkQ2VsbHNJbmZvOiBJQmFzZU9iamVjdFtdID0gW11cblxuICBwdWJsaWMgYWZmaXhIZWFkZXI6IEFmZml4XG5cbiAgcHVibGljIGFmZml4U2Nyb2xsYmFyOiBBZmZpeFxuXG4gIHB1YmxpYyBtYWluVGFibGU6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UYWJsZUJvZHk6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UaGVhZDogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBwcml2YXRlIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZTogYW55XG5cbiAgcHJpdmF0ZSByZXNpemVFdmVudDogYW55XG5cbiAgcHJpdmF0ZSBjb2x1bW5NYW5hZ2VyOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRhYmxlUHJvcHM8VD4pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cyxcbiAgICAgIGV4cGFuZGVkUm93S2V5czogZXhwYW5kZWRSb3dLZXlzUHJvcCxcbiAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCxcbiAgICB9ID0gcHJvcHNcbiAgICB0aGlzLmNvbHVtbk1hbmFnZXIgPSBuZXcgQ29sdW1uTWFuYWdlcihjb2x1bW5zIHx8IGNoaWxkcmVuKVxuICAgIGxldCBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIGxldCBleHBhbmRlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChleHBhbmRlZFJvd0tleXNQcm9wKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0RXhwYW5kZWRSb3dLZXlzKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZmZpeGVkQm90dG9tOiBmYWxzZSxcbiAgICAgIGFmZml4ZWRUb3A6IGZhbHNlLFxuICAgICAgY2hpbGRyZW46IGNvbHVtbnMgfHwgY2hpbGRyZW4sXG4gICAgICBjb21iaW5lZENlbGxzSW5mbzogW10sXG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sIC8vIOato+WcqOaUueWPmOWuveW6pueahOWIl+eahOS/oeaBr1xuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3M6IFtdLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGZhbHNlLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGZhbHNlLFxuICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgICBtYWluVGFibGVTdHlsZToge30sXG4gICAgICByZXNpemVkOiBbXSwgLy8g5pS55Y+Y6L+H5a695bqm55qE5omA5pyJ5YiX55qE5pWw5o2uXG4gICAgICBzZWxlY3RlZFJvd0tleXMsXG4gICAgfVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplID0gZGVib3VuY2UodGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsIDEwMClcbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVGFibGVQcm9wczxUPixcbiAgICBuZXh0U3RhdGU6IElUYWJsZVN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbk1hbmFnZXIsXG4gICAgICBjb21iaW5lZENlbGxzSW5mbyxcbiAgICAgIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzXG4gICAgY29uc3QgeyBpc0FueUNvbHVtbnNGaXhlZCB9ID0gY29sdW1uTWFuYWdlclxuICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgIC8vIOWbuuWumuihqOWktOmcgOimgeebkeWQrCByZXNpemUg5LqL5Lu2XG4gICAgaWYgKGhlYWRlckFmZml4ZWQgfHwgaGVpZ2h0IHx8IGlzQW55Q29sdW1uc0ZpeGVkKSB7XG4gICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgd2luZG93LFxuICAgICAgICBcInJlc2l6ZVwiLFxuICAgICAgICBkZWJvdW5jZWRXaW5kb3dSZXNpemVcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGNvbWJpbmVkQ2VsbHNJbmZvLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbWJpbmVkQ2VsbHNJbmZvIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9ICh7XG4gICAgZGF0YVNvdXJjZTogZGF0YVNvdXJjZU9sZCxcbiAgICBnZXRDZWxsUHJvcHM6IGdldENlbGxQcm9wc09sZCxcbiAgfTogSVRhYmxlUHJvcHM8VD4pID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGdldENlbGxQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIGhhbmRsZVdpbmRvd1Jlc2l6ZSDkuI3lupTor6Xlj6rlnKggZGlkbW91bnQg5pe25omn6KGMXG4gICAgICogZGlkVXBkYXRlIOaXtuS5n+mcgOimgVxuICAgICAqL1xuICAgIGlmICghc2hhbGxvd0VxdWFsKGRhdGFTb3VyY2VPbGQsIGRhdGFTb3VyY2UpKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlV2luZG93UmVzaXplLCAwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWQiOW5tuWNleWFg+agvOmcgOaLv+WIsOecn+WunueahCBkb20g5YWD57Sg6K6h566X5bC65a+477yM5Zug5q2k6L+Z6YeM6ZyA6KaBIGZvcmNlVXBkYXRlXG4gICAgICovXG4gICAgaWYgKCFzaGFsbG93RXF1YWwoZ2V0Q2VsbFByb3BzT2xkLCBnZXRDZWxsUHJvcHMpICYmIGdldENlbGxQcm9wcykge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnJlc2l6ZUV2ZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUuY2xlYXIoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydCA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICBjb2w6IElDb2x1bW5Qcm9wczxUPlxuICApID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImNvbC1yZXNpemVcIlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudGx5UmVzaXppbmc6IHtcbiAgICAgICAgY29sLFxuICAgICAgICBkYXRhSW5kZXg6IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgIHBhcmVudFdpZHRoOlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIC53aWR0aCxcbiAgICAgICAgc3RhcnRYOiBlLnBhZ2VYLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgfSwgMClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5Nb3ZpbmcgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB7IHJlc2l6ZWQsIGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb2wsIGRhdGFJbmRleCwgcGFyZW50V2lkdGgsIHN0YXJ0WCB9ID0gY3VycmVudGx5UmVzaXppbmdcbiAgICAvKipcbiAgICAgKiAxMyDku6PooajlrZflj7fvvJvnlKggZW0g55qE5pa55byP6K6h566X5a695bqm5pys6Lqr5LiN5aSf5ZCI55CG77yM6L+Z6YeMICsgMu+8jOS4jeeEtuWcqCBTYWZhcmkg5LiL56m66Ze05Lya5LiN5aSf44CCXG4gICAgICovXG4gICAgY29uc3QgYmFzZVdpZHRoID1cbiAgICAgIE1hdGguY2VpbChcbiAgICAgICAgY29sLnRpdGxlLmxlbmd0aCA+IDQgPyBjb2wudGl0bGUubGVuZ3RoIC8gMiA6IGNvbC50aXRsZS5sZW5ndGhcbiAgICAgICkgKlxuICAgICAgICAxMyArXG4gICAgICAyXG4gICAgY29uc3QgbmV3UmVzaXplZCA9IHJlc2l6ZWQuZmlsdGVyKChvKSA9PiBvLmRhdGFJbmRleCAhPT0gZGF0YUluZGV4KVxuICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5tYXgoXG4gICAgICBNYXRoLmNlaWwocGFyZW50V2lkdGggKyBlLnBhZ2VYIC0gc3RhcnRYKSxcbiAgICAgICEhY29sLm9uU29ydCB8fCAhIWNvbC5vbkZpbHRlciA/IGJhc2VXaWR0aCArIDM2IDogYmFzZVdpZHRoICsgMTZcbiAgICApXG4gICAgbmV3UmVzaXplZC5wdXNoKHtcbiAgICAgIGRhdGFJbmRleCxcbiAgICAgIHZhbHVlOiBuZXdXaWR0aCxcbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVzaXplZDogbmV3UmVzaXplZCxcbiAgICB9KVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5FbmQgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbWFpblRhYmxlIH0gPSB0aGlzXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WDpcbiAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxXaWR0aCA+IG1haW5UYWJsZS5vZmZzZXRXaWR0aCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbEhlaWdodCA+IG1haW5UYWJsZS5vZmZzZXRIZWlnaHQsXG4gICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbHVtbk1hbmFnZXIsIG1haW5UYWJsZSwgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCB7IGlzQW55Q29sdW1uc0ZpeGVkIH0gPSBjb2x1bW5NYW5hZ2VyXG4gICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgaWYgKChoZWFkZXJBZmZpeGVkIHx8IGhlaWdodCB8fCBpc0FueUNvbHVtbnNGaXhlZCkgJiYgbWFpblRhYmxlKSB7XG4gICAgICBjb25zdCB7IG1haW5UYWJsZVN0eWxlOiBvbGRTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgY29uc3QgcmVjdCA9IG1haW5UYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgbWFpblRhYmxlU3R5bGU6IFBhcnRpYWw8UmVhY3QuQ1NTUHJvcGVydGllcz4gPSB7fVxuICAgICAgbWFpblRhYmxlU3R5bGUubGVmdCA9IHJlY3QubGVmdFxuICAgICAgbWFpblRhYmxlU3R5bGUud2lkdGggPSByZWN0LndpZHRoXG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChtYWluVGFibGVTdHlsZSwgb2xkU3R5bGUpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWluVGFibGVTdHlsZSB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsV2lkdGggPiBtYWluVGFibGUub2Zmc2V0V2lkdGgsXG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsSGVpZ2h0ID4gbWFpblRhYmxlLm9mZnNldEhlaWdodCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZU1haW5UYWJsZVNjcm9sbCA9IChlPzogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IGFmZml4SGVhZGVyLCBtYWluVGFibGUgfSA9IHRoaXNcbiAgICBjb25zdCB7IG9uU2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBhZmZpeGVkVG9wIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAob25TY3JvbGwgJiYgZSkge1xuICAgICAgLy8gZSDlj6/og73mmK8gdGhlYWRcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvbGVcIikgPT09IFwidGFibGVcIikge1xuICAgICAgICBvblNjcm9sbChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZmZpeGVkVG9wICYmIGFmZml4SGVhZGVyICYmIG1haW5UYWJsZSAmJiBhZmZpeEhlYWRlci5maXhlZE5vZGUpIHtcbiAgICAgIGFmZml4SGVhZGVyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ID0gbWFpblRhYmxlLnNjcm9sbExlZnRcbiAgICB9XG5cbiAgICAvLyDlm7rlrprlpLTnmoTmg4XlhrXvvIzpnIDopoHlkIzmraXlm7rlrprmu5rliqjmnaHlkozkuLsgVGFibGUg5rua5Yqo5p2hXG4gICAgdGhpcy5zeW5jVGFibGVTY3JvbGxQb3NpdGlvbihtYWluVGFibGUuc2Nyb2xsTGVmdClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBhZmZpeFNjcm9sbGJhciwgbWFpblRhYmxlLCBtYWluVGhlYWQgfSA9IHRoaXNcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG1haW5UYWJsZSAmJiBhZmZpeFNjcm9sbGJhciAmJiBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUpIHtcbiAgICAgIGlmIChtYWluVGFibGUuc2Nyb2xsTGVmdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgbWFpblRhYmxlLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgICAgfVxuICAgICAgaWYgKGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ICE9PSB2YWx1ZSkge1xuICAgICAgICBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c6K6+5a6a5LqGIHByb3AgaGVpZ2h077yM5bm25LiU5a2Y5Zyo5qiq5ZCR5rua5Yqo5p2h77yM5YiZ6KaB5ZCM5q2lIHRoZWFkIOeahOa7muWKqOS9jee9rlxuICAgIGlmIChoZWlnaHQgJiYgbWFpblRoZWFkKSB7XG4gICAgICBtYWluVGhlYWQuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVJvd0NsaWNrID0gKFxuICAgIHJvdzogVCxcbiAgICBpOiBudW1iZXIsXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZXhwYW5kT25Sb3dDbGljayxcbiAgICAgIGdldFNlbGVjdFByb3BzLFxuICAgICAgb25Sb3dDbGljayxcbiAgICAgIHNlbGVjdE9uUm93Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsga2V5IH0gPSByb3dcbiAgICBpZiAoXG4gICAgICBzZWxlY3RPblJvd0NsaWNrICYmXG4gICAgICB0eXBlb2Yga2V5ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAhKFxuICAgICAgICBnZXRTZWxlY3RQcm9wcyAmJlxuICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpICYmXG4gICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkuZGlzYWJsZWRcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0KGtleSwgIXNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgIH1cbiAgICBpZiAoZXhwYW5kT25Sb3dDbGljaykge1xuICAgICAgdGhpcy5oYW5kbGVFeHBhbmQoa2V5KVxuICAgIH1cbiAgICBpZiAob25Sb3dDbGljaykge1xuICAgICAgb25Sb3dDbGljayhyb3csIGksIGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoUmVzaXplID0gKFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgZGF0YUluZGV4OiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBmaXhlZFBvc2l0aW9uPzogYm9vbGVhbiB8IFwibGVmdFwiIHwgXCJyaWdodFwiXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0Q29sdW1ucyB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG4gICAgbGV0IHsgZml4ZWRDb2x1bW5zSW5mb3MgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpIGFzIElDb2x1bW5Qcm9wczxUPltdXG4gICAgLyoqXG4gICAgICogY29sdW1ucyDlj5jljJblkI4gZml4ZWRDb2x1bW5zSW5mb3Mg5Lit5Y+v6IO95a2Y5Zyo5bey57uP56e76Zmk55qEIGNvbHVtblxuICAgICAqL1xuICAgIGZpeGVkQ29sdW1uc0luZm9zID0gZml4ZWRDb2x1bW5zSW5mb3MuZmlsdGVyKChvKSA9PlxuICAgICAgY29sdW1ucy5maW5kKChwKSA9PiBwLmRhdGFJbmRleCA9PT0gby5kYXRhSW5kZXgpXG4gICAgKVxuICAgIGNvbnN0IGkgPSBmaXhlZENvbHVtbnNJbmZvcy5maW5kSW5kZXgoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgLy8gZml4ZWQg5Y+v6IO95pivIEJvb2xlYW5cbiAgICBjb25zdCBmaXhlZCA9IGZpeGVkUG9zaXRpb24gPT09IFwicmlnaHRcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwiXG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgaWYgKGZpeGVkQ29sdW1uc0luZm9zW2ldLndpZHRoID09PSB3aWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zLnNwbGljZShpLCAxKVxuICAgIH1cbiAgICBmaXhlZENvbHVtbnNJbmZvcy5wdXNoKHsgd2lkdGgsIGRhdGFJbmRleCwgaW5kZXgsIGZpeGVkIH0pXG4gICAgZml4ZWRDb2x1bW5zSW5mb3Muc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpXG5cbiAgICBjb25zdCBmaXhlZENvbHVtbnNJbmZvc0xlZnQgPSBmaXhlZENvbHVtbnNJbmZvcy5maWx0ZXIoXG4gICAgICAobykgPT4gby5maXhlZCA9PT0gXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zSW5mb3NSaWdodCA9IGZpeGVkQ29sdW1uc0luZm9zXG4gICAgICAuZmlsdGVyKChvKSA9PiBvLmZpeGVkID09PSBcInJpZ2h0XCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5pbmRleCAtIGEuaW5kZXgpXG5cbiAgICBmaXhlZENvbHVtbnNJbmZvcy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgIGxldCBjb2xJbmRleFxuICAgICAgaWYgKGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29sSW5kZXggPSBmaXhlZENvbHVtbnNJbmZvc0xlZnQuZmluZEluZGV4KFxuICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleFxuICAgICAgICApXG4gICAgICAgIGlmIChjb2xJbmRleCA9PT0gZml4ZWRDb2x1bW5zSW5mb3NMZWZ0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb2wuaXNMYXN0TGVmdCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wuaXNMYXN0TGVmdCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8g5a656ZSZ77yM5LiN5YWB6K64IHNsaWNlKDAsIC0xKSDnmoTljbHpmanmk43kvZxcbiAgICAgICAgY29sLm9mZnNldCA9XG4gICAgICAgICAgY29sSW5kZXggPT09IC0xXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogZml4ZWRDb2x1bW5zSW5mb3NMZWZ0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIGNvbEluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIud2lkdGgsIDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xJbmRleCA9IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQuZmluZEluZGV4KFxuICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleFxuICAgICAgICApXG4gICAgICAgIGlmIChjb2xJbmRleCA9PT0gZml4ZWRDb2x1bW5zSW5mb3NSaWdodC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29sLmlzRmlyc3RSaWdodCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wuaXNGaXJzdFJpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvLyDlrrnplJnvvIzkuI3lhYHorrggc2xpY2UoMCwgLTEpIOeahOWNsemZqeaTjeS9nFxuICAgICAgICBjb2wub2Zmc2V0ID1cbiAgICAgICAgICBjb2xJbmRleCA9PT0gLTFcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIGNvbEluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIud2lkdGgsIDApXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZml4ZWRDb2x1bW5zSW5mb3MgfSwgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaGVhZE1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc1Jlc2l6ZXJTaG93IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFpc1Jlc2l6ZXJTaG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemVyU2hvdzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoZWFkTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnRseVJlc2l6aW5nKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWxleW8gOihjFxuICAgKi9cbiAgcHVibGljIGhhbmRsZUV4cGFuZCA9IChrZXk6IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBleHBhbmRlZFJvd0tleXM6IGV4cGFuZGVkUm93S2V5c1Byb3AsIG9uRXhwYW5kQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBleHBhbmRlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBrZXlzID0gWy4uLmV4cGFuZGVkUm93S2V5c11cbiAgICBjb25zdCBpbmRleCA9IGtleXMuaW5kZXhPZihrZXkpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGtleXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkUm93S2V5czoga2V5cyB9KVxuICAgIH1cbiAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgIG9uRXhwYW5kQ2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAieaLqeihjFxuICAgKi9cbiAgcHVibGljIGhhbmRsZVNlbGVjdCA9IChrZXk6IFJlYWN0LlJlYWN0VGV4dCwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AsXG4gICAgICBzZWxlY3RNdWx0aXBsZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGtleXMgPSBbLi4uc2VsZWN0ZWRSb3dLZXlzXVxuICAgIGlmIChzZWxlY3RNdWx0aXBsZSkge1xuICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuc3BsaWNlKHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGtleSksIDEpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBba2V5XVxuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czoga2V5cyxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvblNlbGVjdENoYW5nZSkge1xuICAgICAgb25TZWxlY3RDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YCJ5oup6KGM5YWo6YCJ5pON5L2cXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlU2VsZWN0QWxsID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0Q2hhbmdlLCBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGtleXMgPSBbLi4uc2VsZWN0ZWRSb3dLZXlzXVxuICAgIGNvbnN0IGF2YWlsYWJsZUtleXMgPSB0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKClcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgYXZhaWxhYmxlS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOS4jeiDveebtOaOpea4heepuuaVsOe7hO+8jOWboOS4uuWPr+iDveS8oOWFpeS6huS4juW9k+WJjSBkYXRhU291cmNlIOaXoOWFs+eahCBrZXlz77ybXG4gICAgICAvLyDkuZ/kuI3og73nm7TmjqUgc3BsaWNl77yM5Zug5Li66KaB5qOA5p+l5piv5ZCmIGdldFNlbGVjdFByb3BzLmRpc2FibGVk44CCXG4gICAgICBzZWxlY3RlZFJvd0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChhdmFpbGFibGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBrZXlzLnNwbGljZShrZXlzLmluZGV4T2Yoa2V5KSwgMSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGtleXMsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3RDaGFuZ2UpIHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuW3suWFqOmDqOmAieaLqVxuICAgKi9cbiAgcHVibGljIGhhc1NlbGVjdGVkQWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKClcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChcbiAgICAgIGRhdGFTb3VyY2UgJiZcbiAgICAgIGRhdGFTb3VyY2UubGVuZ3RoICYmXG4gICAgICBrZXlzLmxlbmd0aCAmJlxuICAgICAga2V5cy5ldmVyeSgoa2V5KSA9PiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHVibGljIGdldEF2YWlsYWJsZVJvd3NLZXlzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgZ2V0U2VsZWN0UHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+ID0gW11cbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBkYXRhU291cmNlLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Yga2V5ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICEoXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMgJiZcbiAgICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpICYmXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKS5kaXNhYmxlZFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYWJsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhU291cmNlLFxuICAgICAgZXhwYW5kSWNvblZpc2libGUsXG4gICAgICBleHBhbmRlZFJvd1JlbmRlcixcbiAgICAgIGV4cGFuZE9uUm93Q2xpY2ssXG4gICAgICBnZXRIZWFkQ2xhc3NOYW1lLFxuICAgICAgZ2V0SGVhZFN0eWxlLFxuICAgICAgZ2V0Um93Q2xhc3NOYW1lLFxuICAgICAgZ2V0Um93U3R5bGUsXG4gICAgICBnZXRTZWxlY3RQcm9wcyxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBvbkV4cGFuZENoYW5nZSxcbiAgICAgIG9uUm93TW91c2VFbnRlcixcbiAgICAgIG9uUm93TW91c2VMZWF2ZSxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgc2VsZWN0TXVsdGlwbGUsXG4gICAgICBzZWxlY3RPblJvd0NsaWNrLFxuICAgICAgc2l6ZSxcbiAgICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgICB2aXJ0dWFsTGlzdFByb3BzLFxuICAgICAgdmlydHVhbExpc3RTdHlsZSxcbiAgICAgIHZpcnR1YWxTY3JvbGwsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIGFmZml4ZWRUb3AsXG4gICAgICBhZmZpeGVkQm90dG9tLFxuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3MsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgbWFpblRhYmxlU3R5bGUsXG4gICAgICByZXNpemVkLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzLFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCB7XG4gICAgICBnZXRDb2x1bW5zLFxuICAgICAgLy8gZ2V0TGVmdENvbHVtbnNXaWR0aCxcbiAgICAgIGdldEdyb3VwQ29sdW1uc0RlcHRoLFxuICAgICAgaXNBbnlDb2x1bW5zTGVmdEZpeGVkLFxuICAgIH0gPSB0aGlzLmNvbHVtbk1hbmFnZXJcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRDb2x1bW5zKCkgYXMgSUNvbHVtblByb3BzPFQ+W11cblxuICAgIGNvbnN0IHRoZWFkU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICBoZWlnaHQ6IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl0gKiBnZXRHcm91cENvbHVtbnNEZXB0aCgpfXB4YCxcbiAgICAgIC4uLigoZ2V0SGVhZFN0eWxlICYmIGdldEhlYWRTdHlsZSgpKSB8fCB7fSksXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV5byA6KGM5ZKM6YCJ5oup6KGM5pe277yMdGhlYWTlkozmr4/ooYznmoTnrKzkuIDliJfliY3pg73opoHliqDlhaXkuIDliJdcbiAgICAgKiDmraTliJfkuZ/kvJrlvbHlk40gc3RpY2t5IOeahOWBj+enu+S9jee9rlxuICAgICAqL1xuICAgIGNvbnN0IHNlbGVjdEFuZEV4cGFuZCA9ICEhb25TZWxlY3RDaGFuZ2UgJiYgISFvbkV4cGFuZENoYW5nZVxuICAgIGNvbnN0IHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlID1cbiAgICAgIGV4cGFuZEljb25WaXNpYmxlICYmICghIW9uU2VsZWN0Q2hhbmdlIHx8ICEhb25FeHBhbmRDaGFuZ2UpXG5cbiAgICBjb25zdCB0aGVhZCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXswfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgYCR7cHJlZml4fS10aGVhZGAsXG4gICAgICAgICAgZ2V0SGVhZENsYXNzTmFtZSAmJiBnZXRIZWFkQ2xhc3NOYW1lKClcbiAgICAgICAgKX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZVRoZWFkTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRoZWFkTW91c2VMZWF2ZX1cbiAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJtYWluVGhlYWRcIil9XG4gICAgICAgIHN0eWxlPXt0aGVhZFN0eWxlfVxuICAgICAgPlxuICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwgYCR7cHJlZml4fS10aF9mdW5jdGlvbmFsYCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9mdW5jdGlvbmFsX2JvdGhgXTogc2VsZWN0QW5kRXhwYW5kLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9XCJmdW5jdGlvbmFsLWFsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdE11bHRpcGxlICYmICEhb25TZWxlY3RDaGFuZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGx9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmhhc1NlbGVjdGVkQWxsKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFsaWduLFxuICAgICAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICAgIGZpeGVkLFxuICAgICAgICAgICAgb25GaWx0ZXIsXG4gICAgICAgICAgICBvblNvcnQsXG4gICAgICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIH0gPSBjb2xcblxuICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgY29uc3QgY2xpY2thYmxlID1cbiAgICAgICAgICAgICEhb25Tb3J0IHx8XG4gICAgICAgICAgICAoc29ydE9yZGVyICE9PSBudWxsICYmIHNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgISFvbkZpbHRlciB8fFxuICAgICAgICAgICAgISFmaWx0ZXJzXG4gICAgICAgICAgbGV0IG1pbldpZHRoID0gMFxuICAgICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1pbldpZHRoID1cbiAgICAgICAgICAgICAgTWF0aC5jZWlsKHRpdGxlLmxlbmd0aCA+IDQgPyB0aXRsZS5sZW5ndGggLyAyIDogdGl0bGUubGVuZ3RoKSAqXG4gICAgICAgICAgICAgICAgMTMgK1xuICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgaWYgKGNsaWNrYWJsZSkge1xuICAgICAgICAgICAgICBtaW5XaWR0aCArPSAyMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZmxleFZhbHVlXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGh9IDAgYXV0b2BcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKHdpZHRoLmxlbmd0aCAtIHdpZHRoLmxhc3RJbmRleE9mKFwicHhcIikgPT09IDIpIHtcbiAgICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGguc2xpY2UoMCwgLTIpfSAwIGF1dG9gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmbGV4VmFsdWUgPSBgMCAwICR7d2lkdGh9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmbGV4VmFsdWUgPSBgJHtNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKX0gMCBhdXRvYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiB0aCBsZWZ0IOWAvO+8muWPluW+lyByZXNpemUtb2JzZXJ2ZXIg5a2Y5YKo55qE6K+l5YiX55qE5YGP56e76YeP77yM5Yqg5LiK5aaC5p6c5pyJ6YCJ5oup6KGM44CB5bGV5byA6KGM5pe255qEIFNFTEVDVF9URF9XSURUSCDigJTigJQg5LuF5a+5IGxlZnQg5pyJ5pWIXG4gICAgICAgICAgICogdGggcmlnaHQg5YC877ya5Y+W5b6XIHJlc2l6ZS1vYnNlcnZlciDlrZjlgqjnmoTor6XliJfnmoTlgY/np7vph4/vvIzliqDkuIrlpoLmnpzlhoXmu5rliqjml7bnmoTmu5rliqjmnaHlrr3luqbvvIgxNO+8iSDigJTigJQg5LuF5a+5IHJpZ2h0IOacieaViFxuICAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVzaXplT2JzZXJ2ZXJcbiAgICAgICAgICAgICAgb25SZXNpemU9eyh7IHdpZHRoOiB3aWR0aFJlc2l6ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUaFJlc2l6ZSh3aWR0aFJlc2l6ZSwgZGF0YUluZGV4LCBpbmRleCwgZml4ZWQpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZml4ZWR9XG4gICAgICAgICAgICAgIGtleT17ZGF0YUluZGV4IHx8IGluZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGhgLCB7XG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTogY2xpY2thYmxlLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdGBdOiBpc0ZpeGVkTGVmdChjb2wpLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfcmlnaHRgXTogaXNGaXhlZFJpZ2h0KGNvbCksXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9sZWZ0TGFzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0Rmlyc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICAgICAgICAgICk/LmlzRmlyc3RSaWdodCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICh0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RBbmRFeHBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFNFTEVDVF9URF9XSURUSFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAwKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBpc0ZpeGVkUmlnaHQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAgICAgICAgIChpc01haW5UYWJsZU92ZXJmbG93WSAmJiBoZWlnaHQgPyAxNCA6IDApXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgZmxleDogcmVzaXplZENvbCA/IGAke3Jlc2l6ZWRDb2wudmFsdWV9IDAgYXV0b2AgOiBmbGV4VmFsdWUsXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogcmVzaXplZENvbCA/IHJlc2l6ZWRDb2wudmFsdWUgOiB3aWR0aCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBhbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogcmVzaXplZENvbFxuICAgICAgICAgICAgICAgICAgICA/IHJlc2l6ZWRDb2wudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiB3aWR0aCB8fCBNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRhdGEtY29sdW1uPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGNvbCwgeyBpbmRleCwgY29sdW1ucyB9KX1cbiAgICAgICAgICAgICAgICB7Y29sLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRoR3JvdXBgfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKGNoaWxkQ29sOiBJQ29sdW1uUHJvcHM8VD4sIGNoaWxkQ29sSW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wub25Tb3J0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRDb2wuc29ydE9yZGVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5vbkZpbHRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5maWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZENvbC5kYXRhSW5kZXggfHwgY2hpbGRDb2xJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjEwMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2hpbGRDb2wuYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChjaGlsZENvbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZENvbC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGhHcm91cGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkQ29sLmNoaWxkcmVuLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sOiBJQ29sdW1uUHJvcHM8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDb2xJbmRleDogbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLm9uU29ydCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChncmFuZENvbC5zb3J0T3JkZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZ3JhbmRDb2wub25GaWx0ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z3JhbmRDb2wuZGF0YUluZGV4IHx8IGdyYW5kQ29sSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjEwMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBncmFuZENvbC5hbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGdyYW5kQ29sKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZXNpemVPYnNlcnZlcj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgZ2VuZXJhdGVUcnMgPSAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgICBjb25zdCBjb2xBcnJheTogYW55ID0gW11cbiAgICAgIGNvbnN0IHNlbGVjdFByb3BzR2V0dGVkID0gZ2V0U2VsZWN0UHJvcHMgJiYgZ2V0U2VsZWN0UHJvcHMocm93LCByb3dJbmRleClcbiAgICAgIGNvbnN0IGFsbFNlbGVjdFByb3BzID0ge1xuICAgICAgICBjaGVja2VkOiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGAsXG4gICAgICAgIG9uQ2hhbmdlOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3Qoa2V5LCBjaGVja2VkKSxcbiAgICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCksXG4gICAgICAgIC4uLihzZWxlY3RQcm9wc0dldHRlZCB8fCB7fSksXG4gICAgICB9XG4gICAgICBjb25zdCBzZWxlY3RQcm9wcyA9IG9taXQoYWxsU2VsZWN0UHJvcHMsIFtcInBvcG92ZXJQcm9wc1wiXSlcbiAgICAgIGNvbnN0IHNlbGVjdENvbnRlbnQgPSBzZWxlY3RNdWx0aXBsZSA/IChcbiAgICAgICAgPENoZWNrYm94IHsuLi5zZWxlY3RQcm9wc30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxSYWRpbyB7Li4uc2VsZWN0UHJvcHN9IC8+XG4gICAgICApXG4gICAgICBjb25zdCBleHBhbmRDb250ZW50ID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXhwYW5kKGtleSl9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZEljb25gfSBpY29uPVwiYXJyb3ctZG93blwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgbGV0IHNlbGVjdENlbGwgPSBvbkV4cGFuZENoYW5nZSA/IGV4cGFuZENvbnRlbnQgOiBzZWxlY3RDb250ZW50XG4gICAgICBpZiAoc2VsZWN0QW5kRXhwYW5kKSB7XG4gICAgICAgIHNlbGVjdENlbGwgPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50LXdyYXBwZXJgfT5cbiAgICAgICAgICAgIHtzZWxlY3RDb250ZW50fVxuICAgICAgICAgICAge2V4cGFuZENvbnRlbnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdlbmVyYXRlVHIgPSAoY29sdW1uc1BhcmFtOiBhbnlbXSwgcGFyZW50SW5kZXg/OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29sdW1uc1BhcmFtLmZvckVhY2goKGNvbCwgY29sSW5kZXhQYXJhbSkgPT4ge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIOWmguaenOWJjemdoiDnmoQgY29sIOaciSBjaGlsZHJlbu+8jOWImeimgeaKiiBjaGlsZHJlbi5sZW5ndGgg6aKd5aSW5Yqg5YiwIGNvbEluZGV4XG4gICAgICAgICAgICovXG4gICAgICAgICAgbGV0IGNvbEluZGV4ID0gY29sSW5kZXhQYXJhbVxuICAgICAgICAgIGlmIChwYXJlbnRJbmRleCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuQ291bnQgPSBjb2x1bW5zW2ldLmNoaWxkcmVuPy5sZW5ndGggfHwgMVxuICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5Db3VudCkge1xuICAgICAgICAgICAgICAgIGNvbEluZGV4ICs9IGNoaWxkcmVuQ291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWNvbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29sQXJyYXkucHVzaCh0aGlzLmdlbmVyYXRlVGJvZHlDZWxsKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZW5lcmF0ZVRyKGNvbC5jaGlsZHJlbiwgY29sSW5kZXhQYXJhbSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBnZW5lcmF0ZVRyKGNvbHVtbnMpXG4gICAgICBjb25zdCB0ciA9IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGAke3ByZWZpeH0tdHJgLFxuICAgICAgICAgICAgZ2V0Um93Q2xhc3NOYW1lICYmIGdldFJvd0NsYXNzTmFtZShyb3csIHJvd0luZGV4KSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfY2xpY2thYmxlYF06IGV4cGFuZE9uUm93Q2xpY2sgfHwgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfZXhwYW5kZWRgXTogZXhwYW5kZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRyX3NlbGVjdGVkYF06IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAga2V5PXtrZXkgfHwgcm93SW5kZXh9XG4gICAgICAgICAgcm9sZT1cInJvd1wiXG4gICAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17XG4gICAgICAgICAgICBvblJvd01vdXNlRW50ZXJcbiAgICAgICAgICAgICAgPyAoZSkgPT4gb25Sb3dNb3VzZUVudGVyKHJvdywgcm93SW5kZXgsIGUpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17XG4gICAgICAgICAgICBvblJvd01vdXNlTGVhdmVcbiAgICAgICAgICAgICAgPyAoZSkgPT4gb25Sb3dNb3VzZUxlYXZlKHJvdywgcm93SW5kZXgsIGUpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVJvd0NsaWNrKHJvdywgcm93SW5kZXgsIGUpfVxuICAgICAgICAgIG9uS2V5RG93bj17bm9vcH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uKChnZXRSb3dTdHlsZSAmJiBnZXRSb3dTdHlsZShyb3csIHJvd0luZGV4KSkgfHwge30pLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10ZGAsIGAke3ByZWZpeH0tdGRfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2Z1bmN0aW9uYWxfYm90aGBdOiBzZWxlY3RBbmRFeHBhbmQsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBrZXk9XCJmdW5jdGlvbmFsXCJcbiAgICAgICAgICAgICAgcm9sZT1cImNlbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB2ZXJ0aWNhbEFsaWduICYmIFZFUlRJQ0FMX0FMSUdOW3ZlcnRpY2FsQWxpZ25dLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VsZWN0UHJvcHNHZXR0ZWQ/LnBvcG92ZXJQcm9wcz8ucG9wdXAgPyAoXG4gICAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uKFxuICAgICAgICAgICAgICAgICAgICAgIChnZXRTZWxlY3RQcm9wcyAmJiBnZXRTZWxlY3RQcm9wcyhyb3csIHJvd0luZGV4KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICApLnBvcG92ZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdENlbGx9XG4gICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENlbGxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvbEFycmF5fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIGlmIChvbkV4cGFuZENoYW5nZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHRyLFxuICAgICAgICAgIGV4cGFuZGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZXhwYW5kUm93YH0ga2V5PVwidHItZXhwYW5kXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZXhwYW5kUm93LWlubmVyYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICBpc01haW5UYWJsZU92ZXJmbG93WFxuICAgICAgICAgICAgICAgICAgICA/IHsgd2lkdGg6IG1haW5UYWJsZVN0eWxlLndpZHRoIH1cbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ISFleHBhbmRlZFJvd1JlbmRlciAmJiBleHBhbmRlZFJvd1JlbmRlcihyb3csIHJvd0luZGV4KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRyXG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIGhlYWRlckFmZml4ZWQgPyAoXG4gICAgICAgIDxBZmZpeFxuICAgICAgICAgIGtleT17MH1cbiAgICAgICAgICBvZmZzZXRUb3A9e2hlYWRlckFmZml4ZWRPZmZzZXRUb3B9XG4gICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLndyYXBwZXJ9XG4gICAgICAgICAgZ2V0VGFyZ2V0PXtoZWFkZXJBZmZpeEdldFRhcmdldH1cbiAgICAgICAgICBvbkNoYW5nZT17KGJvb2wpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZmZpeGVkVG9wOiBib29sIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgLy8g5Zu65a6a55qE6YKj5LiA5Yi75Lmf6ZyA6KaB56uL5Y2z6YeN5paw5a6a5L2N44CCXG4gICAgICAgICAgICAgIC8vIOmHjeaWsOWumuS9jeOAgeWMheaLrOS4i+mdoueahCBjbGFzc05hbWUsIHN0eWxlIOWPquWcqOS4u+ihqOagvOS4iuWPkeeUn++8jOWboOS4uuWbuuWumuWIl+eahCBBZmZpeCDooYzkuLrlvojljZXnuq/jgIJcbiAgICAgICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGwoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXthZmZpeGVkVG9wID8gYCR7cHJlZml4fS1hZmZpeGAgOiBcIlwifVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAuLi4oYWZmaXhlZFRvcCA/IG1haW5UYWJsZVN0eWxlIDoge30pLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJhZmZpeEhlYWRlclwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVhZH1cbiAgICAgICAgPC9BZmZpeD5cbiAgICAgICkgOiAoXG4gICAgICAgIHRoZWFkXG4gICAgICApLFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9ezF9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10Ym9keWB9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRhYmxlQm9keVwiKX1cbiAgICAgID5cbiAgICAgICAgeyF2aXJ0dWFsU2Nyb2xsICYmXG4gICAgICAgICAgZGF0YVNvdXJjZSAmJlxuICAgICAgICAgICEhZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgICAgICBkYXRhU291cmNlLm1hcCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgfSl9XG4gICAgICAgIHt2aXJ0dWFsU2Nyb2xsICYmIGRhdGFTb3VyY2UgJiYgISFkYXRhU291cmNlLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGRhdGE9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICBpdGVtS2V5PVwia2V5XCJcbiAgICAgICAgICAgIGhlaWdodD17KGhlaWdodCB8fCA0MDApIC0gNDB9XG4gICAgICAgICAgICBpdGVtSGVpZ2h0PXs0Mn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS12aXJ0dWFsLXdyYXBwZXJgfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4udmlydHVhbExpc3RTdHlsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB7Li4udmlydHVhbExpc3RQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUcnMocm93LCByb3dJbmRleClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+LFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1ggJiYgaGVhZGVyQWZmaXhlZCAmJiAoXG4gICAgICAgIDxBZmZpeFxuICAgICAgICAgIGtleT17Mn1cbiAgICAgICAgICBvZmZzZXRCb3R0b209ezB9XG4gICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLm1haW5UYWJsZUJvZHl9XG4gICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJhZmZpeFNjcm9sbGJhclwiKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1hZmZpeFNjcm9sbGJhcmAsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWFmZml4U2Nyb2xsYmFyX3Nob3dgXTogYWZmaXhlZEJvdHRvbSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgLi4ubWFpblRhYmxlU3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblNjcm9sbD17KGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT5cbiAgICAgICAgICAgIHRoaXMuc3luY1RhYmxlU2Nyb2xsUG9zaXRpb24oZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoYm9vbCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFmZml4ZWRCb3R0b206IGJvb2wgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiB0aGlzLm1haW5UYWJsZT8uc2Nyb2xsV2lkdGggfX0gLz5cbiAgICAgICAgPC9BZmZpeD5cbiAgICAgICksXG4gICAgXVxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVGhDZWxsID0gKGNvbDogSUNvbHVtblByb3BzPFQ+LCBvcHRpb25zPzogSUJhc2VPYmplY3QpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGlnbixcbiAgICAgIGNvbHVtbnNSZXNpemFibGUsXG4gICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZSxcbiAgICAgIGdldEhlYWRDZWxsU3R5bGUsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHJlc2l6YWJsZTogY29sUmVzaXphYmxlIH0gPSBjb2xcbiAgICBsZXQgcmVzaXphYmxlID0gdHJ1ZVxuICAgIGlmICh0eXBlb2YgY29sUmVzaXphYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmVzaXphYmxlID0gY29sUmVzaXphYmxlXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29sdW1uc1Jlc2l6YWJsZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJlc2l6YWJsZSA9IGNvbHVtbnNSZXNpemFibGVcbiAgICB9XG5cbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nLCBpc1Jlc2l6ZXJTaG93IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBpc0xhc3RUaCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbmRleCA9PT0gb3B0aW9ucy5jb2x1bW5zLmxlbmd0aCAtIDFcblxuICAgIGNvbnN0IHRoQ2VsbCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGAke3ByZWZpeH0tY2VsbGAsXG4gICAgICAgICAgZ2V0SGVhZENlbGxDbGFzc05hbWUgJiZcbiAgICAgICAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lKGNvbCwgb3B0aW9ucyA/IG9wdGlvbnMuaW5kZXggOiB1bmRlZmluZWQpXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6XG4gICAgICAgICAgICAoY29sLmFsaWduICYmIEhPUklaT05UQUxfQUxJR05bY29sLmFsaWduXSkgfHxcbiAgICAgICAgICAgIChhbGlnbiAmJiBIT1JJWk9OVEFMX0FMSUdOW2FsaWduXSkgfHxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAuLi4oKGdldEhlYWRDZWxsU3R5bGUgJiZcbiAgICAgICAgICAgIGdldEhlYWRDZWxsU3R5bGUoY29sLCBvcHRpb25zID8gb3B0aW9ucy5pbmRleCA6IHVuZGVmaW5lZCkpIHx8XG4gICAgICAgICAgICB7fSksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHshY29sLm9uU29ydCAmJlxuICAgICAgICAgIChjb2wuc29ydE9yZGVyID09PSBudWxsIHx8IGNvbC5zb3J0T3JkZXIgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICAhY29sLm9uRmlsdGVyICYmXG4gICAgICAgICAgIWNvbC5maWx0ZXJzICYmXG4gICAgICAgICAgY29sLnRpdGxlfVxuICAgICAgICB7KCEhY29sLm9uU29ydCB8fFxuICAgICAgICAgIChjb2wuc29ydE9yZGVyICE9PSBudWxsICYmIGNvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkpICYmIChcbiAgICAgICAgICA8VGFibGVTb3J0XG4gICAgICAgICAgICBvblNvcnQ9eyhvcmRlcikgPT4gKGNvbC5vblNvcnQgPyBjb2wub25Tb3J0KG9yZGVyKSA6IHt9KX1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17Y29sLnNvcnRPcmRlcn1cbiAgICAgICAgICAgIHRpdGxlPXtjb2wudGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyghIWNvbC5vbkZpbHRlciB8fCAhIWNvbC5maWx0ZXJzKSAmJiAoXG4gICAgICAgICAgPFRhYmxlRmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlPXtjb2wuZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgICAgIGZpbHRlclZpc2libGU9e2NvbC5maWx0ZXJWaXNpYmxlfVxuICAgICAgICAgICAgZmlsdGVyTXVsdGlwbGU9e2NvbC5maWx0ZXJNdWx0aXBsZX1cbiAgICAgICAgICAgIGZpbHRlclBvcG92ZXJQcm9wcz17Y29sLmZpbHRlclBvcG92ZXJQcm9wc31cbiAgICAgICAgICAgIGZpbHRlcnM9e2NvbC5maWx0ZXJzfVxuICAgICAgICAgICAgb25GaWx0ZXI9eyhmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNvbC5vbkZpbHRlcikge1xuICAgICAgICAgICAgICAgIGNvbC5vbkZpbHRlcihmaWx0ZXIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkZpbHRlclZpc2libGVDaGFuZ2U9eyh2aXNpYmxlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjb2wub25GaWx0ZXJWaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgY29sLm9uRmlsdGVyVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGl0bGU9e2NvbC50aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IWNvbC5maXhlZCAmJiByZXNpemFibGUgJiYgIWlzTGFzdFRoICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1yZXNpemVyYCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yZXNpemVyX3Nob3dgXTogaXNSZXNpemVyU2hvdyxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmVzaXplcl9jdXJyZW50YF06XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcuZGF0YUluZGV4ID09PSBjb2wuZGF0YUluZGV4LFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sKX1cbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgaWYgKGNvbC5wb3BvdmVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC4zfVxuICAgICAgICAgIHBsYWNlbWVudD17XG4gICAgICAgICAgICBjb2wuYWxpZ24gPT09IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPyBcInRvcFwiXG4gICAgICAgICAgICAgIDogY29sLmFsaWduID09PSBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgOiBcInRvcExlZnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbkVkZ2VcbiAgICAgICAgICBhcnJvd2VkXG4gICAgICAgICAgcG9wdXA9e2NvbC5wb3BvdmVyfVxuICAgICAgICA+XG4gICAgICAgICAge3RoQ2VsbH1cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhDZWxsXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYm9keUNlbGwgPSAoXG4gICAgcm93OiBULFxuICAgIGNlbGw6IElDb2x1bW5Qcm9wczxUPixcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNlbGxJbmRleDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduOiBhbGlnblByb3AsXG4gICAgICBleHBhbmRJY29uVmlzaWJsZSxcbiAgICAgIGdldENlbGxDbGFzc05hbWUsXG4gICAgICBnZXRDZWxsUHJvcHMsXG4gICAgICBnZXRDZWxsU3R5bGUsXG4gICAgICBvbkV4cGFuZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnblByb3AsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzZWxlY3RBbmRFeHBhbmQgPSAhIW9uU2VsZWN0Q2hhbmdlICYmICEhb25FeHBhbmRDaGFuZ2VcbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcsIGZpeGVkQ29sdW1uc0luZm9zLCByZXNpemVkIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qge1xuICAgICAgYWxpZ24sXG4gICAgICBkYXRhSW5kZXgsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgb25GaWx0ZXIsXG4gICAgICBvblNvcnQsXG4gICAgICByZW5kZXIsXG4gICAgICBzb3J0T3JkZXIsXG4gICAgICB0aXRsZSxcbiAgICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgICB3aWR0aCxcbiAgICB9ID0gY2VsbFxuICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAhIW9uU29ydCB8fFxuICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICEhZmlsdGVyc1xuICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtaW5XaWR0aCA9XG4gICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKiAxMyArIDE2XG4gICAgICBpZiAoY2xpY2thYmxlKSB7XG4gICAgICAgIG1pbldpZHRoICs9IDIwXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBmbGV4VmFsdWVcbiAgICBpZiAodHlwZW9mIHdpZHRoID09PSBcIm51bWJlclwiKSB7XG4gICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aH0gMCBhdXRvYFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAod2lkdGgubGVuZ3RoIC0gd2lkdGgubGFzdEluZGV4T2YoXCJweFwiKSA9PT0gMikge1xuICAgICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aC5zbGljZSgwLCAtMil9IDAgYXV0b2BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsZXhWYWx1ZSA9IGAwIDAgJHt3aWR0aH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsZXhWYWx1ZSA9IGAke01hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpfSAwIGF1dG9gXG4gICAgfVxuICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgY29uc3QgY2VsbENsYXNzTmFtZSA9XG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lICYmIGdldENlbGxDbGFzc05hbWUocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KVxuICAgIGNvbnN0IGNlbGxQcm9wcyA9XG4gICAgICAoZ2V0Q2VsbFByb3BzICYmIGdldENlbGxQcm9wcyhyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpKSB8fCB7fVxuICAgIGNvbnN0IGNlbGxTdHlsZSA9XG4gICAgICAoZ2V0Q2VsbFN0eWxlICYmIGdldENlbGxTdHlsZShyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpKSB8fCB7fVxuICAgIGNvbnN0IHsgcm93U3BhbiwgY29sU3BhbiwgLi4ub3RoZXJDZWxsUHJvcHMgfSA9IGNlbGxQcm9wc1xuICAgIGlmIChyb3dTcGFuIHx8IGNvbFNwYW4pIHtcbiAgICAgIHRoaXMuY29tYmluZWRDZWxsc0luZm8ucHVzaCh7XG4gICAgICAgIGNlbGwsXG4gICAgICAgIGNlbGxJbmRleCxcbiAgICAgICAgY29sU3BhbixcbiAgICAgICAgcm93LFxuICAgICAgICByb3dJbmRleCxcbiAgICAgICAgcm93U3BhbixcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRkYCwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX3Jlc2l6aW5nYF06XG4gICAgICAgICAgICBkYXRhSW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcuZGF0YUluZGV4ID09PSBkYXRhSW5kZXgsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdGBdOiBpc0ZpeGVkTGVmdChjZWxsKSxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodGBdOiBpc0ZpeGVkUmlnaHQoY2VsbCksXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICk/LmlzRmlyc3RSaWdodCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9jb21iaW5lZGBdOiByb3dTcGFuIHx8IGNvbFNwYW4sXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBjZWxsSW5kZXh9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY2VsbClcbiAgICAgICAgICAgID8gKGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAodGhlYWRQbGFjZWhvbGRlclZpc2libGVcbiAgICAgICAgICAgICAgICA/IHNlbGVjdEFuZEV4cGFuZFxuICAgICAgICAgICAgICAgICAgPyBTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSFxuICAgICAgICAgICAgICAgICAgOiBTRUxFQ1RfVERfV0lEVEhcbiAgICAgICAgICAgICAgICA6IDApXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICByaWdodDogaXNGaXhlZFJpZ2h0KGNlbGwpXG4gICAgICAgICAgICA/IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpPy5vZmZzZXRcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZsZXg6IHJlc2l6ZWRDb2wgPyBgJHtyZXNpemVkQ29sLnZhbHVlfSAwIGF1dG9gIDogZmxleFZhbHVlLFxuICAgICAgICAgIHdpZHRoOiByZXNpemVkQ29sXG4gICAgICAgICAgICA/IHJlc2l6ZWRDb2wudmFsdWVcbiAgICAgICAgICAgIDogd2lkdGggfHwgTWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCksXG4gICAgICAgICAgbWF4V2lkdGg6IHJlc2l6ZWRDb2wgPyByZXNpemVkQ29sLnZhbHVlIDogd2lkdGggfHwgXCJcIixcbiAgICAgICAgfX1cbiAgICAgICAgcm9sZT1cImNlbGxcIlxuICAgICAgICBkYXRhLXJvdz17cm93SW5kZXh9XG4gICAgICAgIGRhdGEtY29sdW1uPXtjZWxsSW5kZXh9XG4gICAgICAgIHsuLi5vdGhlckNlbGxQcm9wc31cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWNlbGxgLCBjZWxsQ2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYWxpZ25JdGVtczpcbiAgICAgICAgICAgICAgKHZlcnRpY2FsQWxpZ24gJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnbl0pIHx8XG4gICAgICAgICAgICAgICh2ZXJ0aWNhbEFsaWduUHJvcCAmJiBWRVJUSUNBTF9BTElHTlt2ZXJ0aWNhbEFsaWduUHJvcF0pIHx8XG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlxuICAgICAgICAgICAgICAoYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnbl0pIHx8XG4gICAgICAgICAgICAgIChhbGlnblByb3AgJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnblByb3BdKSB8fFxuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAuLi5jZWxsU3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxJbm5lcmB9PlxuICAgICAgICAgICAge3JlbmRlciA/IHJlbmRlcihyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpIDogcm93W2RhdGFJbmRleF19XG4gICAgICAgICAgICB7KHJvd1NwYW4gfHwgY29sU3BhbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxfY29tYmluZWRgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvbWJpbmVkQ2VsbFN0eWxlKFxuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW4sXG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW5cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JlbmRlclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXIocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KVxuICAgICAgICAgICAgICAgICAgOiByb3dbZGF0YUluZGV4XX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21iaW5lZENlbGxTdHlsZSA9IChcbiAgICBfOiBJQmFzZU9iamVjdCxcbiAgICBfXzogSUNvbHVtblByb3BzPFQ+LFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sSW5kZXg6IG51bWJlcixcbiAgICByb3dTcGFuOiBudW1iZXIsXG4gICAgY29sU3BhbjogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IGdldFRhYmxlQ2VsbCA9IChyb3dJbmRleFBhcmFtOiBudW1iZXIsIGNvbEluZGV4UGFyYW06IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMubWFpblRhYmxlKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMubWFpblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwicm93XCJdJylbXG4gICAgICAgICAgcm93SW5kZXhQYXJhbVxuICAgICAgICBdXG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuW2NvbEluZGV4UGFyYW1dXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IGNlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge31cbiAgICBpZiAocm93U3BhbiA8IDIgfHwgdHlwZW9mIHJvd1NwYW4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgIHN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gMXB4KVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZENlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXggKyByb3dTcGFuIC0gMSwgY29sSW5kZXgpXG4gICAgICBpZiAoY2VsbCAmJiBlbmRDZWxsKSB7XG4gICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCBlbmRDZWxsUmVjdCA9IGVuZENlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHtcbiAgICAgICAgICBlbmRDZWxsUmVjdC5oZWlnaHQgKyBlbmRDZWxsUmVjdC50b3AgLSBjZWxsUmVjdC50b3AgLSAxXG4gICAgICAgIH1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29sU3BhbiA8IDIgfHwgdHlwZW9mIGNvbFNwYW4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgIHN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgLSAxcHgpXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW5kQ2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCwgY29sSW5kZXggKyBjb2xTcGFuIC0gMSlcbiAgICAgIGlmIChjZWxsICYmIGVuZENlbGwpIHtcbiAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGVuZENlbGxSZWN0ID0gZW5kQ2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICAgIHN0eWxlLndpZHRoID0gYCR7XG4gICAgICAgICAgZW5kQ2VsbFJlY3Qud2lkdGggKyBlbmRDZWxsUmVjdC5sZWZ0IC0gY2VsbFJlY3QubGVmdCAtIDFcbiAgICAgICAgfXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZVxuICB9XG5cbiAgcHVibGljIHNhdmVSZWYgPSAoXG4gICAgbmFtZT86XG4gICAgICB8IFwiYWZmaXhIZWFkZXJcIlxuICAgICAgfCBcImFmZml4U2Nyb2xsYmFyXCJcbiAgICAgIHwgXCJtYWluVGFibGVcIlxuICAgICAgfCBcIm1haW5UYWJsZUJvZHlcIlxuICAgICAgfCBcIm1haW5UaGVhZFwiXG4gICAgICB8IFwid3JhcHBlclwiXG4gICkgPT4gKG5vZGU6IGFueSkgPT4ge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICB0aGlzW25hbWVdID0gbm9kZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGVtcHR5VGV4dCxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWFkZXJFbXBoYXNpemVkLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbG9hZGluZyxcbiAgICAgIHNpemUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiYWxpZ25cIixcbiAgICAgIFwiY2hpbGRyZW5cIixcbiAgICAgIFwiY29sdW1uc1wiLFxuICAgICAgXCJjb2x1bW5zUmVzaXphYmxlXCIsXG4gICAgICBcImRlZmF1bHRFeHBhbmRlZFJvd0tleXNcIixcbiAgICAgIFwiZGVmYXVsdFNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRJY29uVmlzaWJsZVwiLFxuICAgICAgXCJleHBhbmRPblJvd0NsaWNrXCIsXG4gICAgICBcImV4cGFuZGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRlZFJvd1JlbmRlclwiLFxuICAgICAgXCJnZXRDZWxsQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldENlbGxQcm9wc1wiLFxuICAgICAgXCJnZXRDZWxsU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRIZWFkU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxTdHlsZVwiLFxuICAgICAgXCJnZXRSb3dDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0Um93U3R5bGVcIixcbiAgICAgIFwiZ2V0U2VsZWN0UHJvcHNcIixcbiAgICAgIFwib25FeHBhbmRDaGFuZ2VcIixcbiAgICAgIFwib25TZWxlY3RDaGFuZ2VcIixcbiAgICAgIFwib25TY3JvbGxcIixcbiAgICAgIFwib25Sb3dDbGlja1wiLFxuICAgICAgXCJvblJvd01vdXNlRW50ZXJcIixcbiAgICAgIFwib25Sb3dNb3VzZUxlYXZlXCIsXG4gICAgICBcInNlbGVjdE11bHRpcGxlXCIsXG4gICAgICBcInNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJzZWxlY3RPblJvd0NsaWNrXCIsXG4gICAgICBcInZlcnRpY2FsQWxpZ25cIixcbiAgICAgIFwidmlydHVhbExpc3RQcm9wc1wiLFxuICAgICAgXCJ2aXJ0dWFsTGlzdFN0eWxlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzTWFpblRhYmxlT3ZlcmZsb3dYLCBpc01haW5UYWJsZU92ZXJmbG93WSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmNvbHVtbk1hbmFnZXIucmVzZXQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgY29uc3QgeyBnZXRHcm91cENvbHVtbnNEZXB0aCB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBlbXB0eSA9ICEoZGF0YVNvdXJjZSAmJiBkYXRhU291cmNlLmxlbmd0aClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0td3JhcHBlcmAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1oZWFkZXJFbXBoYXNpemVkYF06IGhlYWRlckVtcGhhc2l6ZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWVtcHR5YF06IGVtcHR5LFxuICAgICAgICBbYCR7cHJlZml4fS1sb2FkaW5nYF06IGxvYWRpbmcsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXhgXTogaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXlgXTogaXNNYWluVGFibGVPdmVyZmxvd1ksXG4gICAgICAgIFtgJHtwcmVmaXh9LXZpcnR1YWxTY3JvbGxgXTogdmlydHVhbFNjcm9sbCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSByZWY9e3RoaXMuc2F2ZVJlZihcIndyYXBwZXJcIil9IHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJmYWRlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIHRvcDogYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXX1weGAsXG4gICAgICAgICAgICB6SW5kZXg6IFwiY2FsYyh2YXIoLS16LWluZGV4LWFmZml4KSArIDIpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2FkaW5nICYmXG4gICAgICAgICAgICAoaGVhZGVyQWZmaXhlZCA/IChcbiAgICAgICAgICAgICAgPEFmZml4XG4gICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXtcbiAgICAgICAgICAgICAgICAgIChoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wIHx8IDApICsgVERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMud3JhcHBlcn1cbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ9e2hlYWRlckFmZml4R2V0VGFyZ2V0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgIDwvQWZmaXg+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9PlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGFibGVzYCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0taW5uZXJTY3JvbGxgXTogISFoZWlnaHQsXG4gICAgICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvd2VkYF06IGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0taGFzRml4ZWRSaWdodENvbHVtbnNgXTogdGhpcy5jb2x1bW5NYW5hZ2VyLmlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQoKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiBoZWlnaHQgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogaGVpZ2h0XG4gICAgICAgICAgICAgID8gYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXSAqIGdldEdyb3VwQ29sdW1uc0RlcHRoKCl9cHhgXG4gICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1haW5UYWJsZWB9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcIm1haW5UYWJsZVwiKX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJsZVwiXG4gICAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUYWJsZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyYH0+e2VtcHR5VGV4dH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiJdfQ==