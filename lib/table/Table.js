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
        }, selectPropsGetted !== null && selectPropsGetted !== void 0 && (_selectPropsGetted$po = selectPropsGetted.popoverProps) !== null && _selectPropsGetted$po !== void 0 && _selectPropsGetted$po.popup ? React.createElement(_popover["default"], _extends({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJURF9NSU5fV0lEVEgiLCJTRUxFQ1RfVERfV0lEVEgiLCJURF9IRUlHSFQiLCJsYXJnZSIsIm1lZGl1bSIsIm1pbmkiLCJzbWFsbCIsIkhPUklaT05UQUxfQUxJR04iLCJjZW50ZXIiLCJsZWZ0IiwicmlnaHQiLCJWRVJUSUNBTF9BTElHTiIsImJvdHRvbSIsInRvcCIsImlzRml4ZWRMZWZ0IiwiY29sIiwiZml4ZWQiLCJpc0ZpeGVkUmlnaHQiLCJUYWJsZSIsInByb3BzIiwiY29tYmluZWRDZWxsc0luZm8iLCJhZmZpeEhlYWRlciIsImFmZml4U2Nyb2xsYmFyIiwibWFpblRhYmxlIiwibWFpblRhYmxlQm9keSIsIm1haW5UaGVhZCIsIndyYXBwZXIiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJyZXNpemVFdmVudCIsImNvbHVtbk1hbmFnZXIiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJoZWFkZXJBZmZpeGVkIiwiaGVpZ2h0IiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJkYXRhU291cmNlT2xkIiwiZGF0YVNvdXJjZSIsImdldENlbGxQcm9wc09sZCIsImdldENlbGxQcm9wcyIsInNldFRpbWVvdXQiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlIiwiY2xlYXIiLCJyZXNpemVDb2x1bW5TdGFydCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImN1cnJlbnRseVJlc2l6aW5nIiwiZGF0YUluZGV4IiwicGFyZW50V2lkdGgiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3RhcnRYIiwicGFnZVgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplQ29sdW1uTW92aW5nIiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplZCIsImJhc2VXaWR0aCIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJuZXdSZXNpemVkIiwiZmlsdGVyIiwibyIsIm5ld1dpZHRoIiwibWF4Iiwib25Tb3J0Iiwib25GaWx0ZXIiLCJwdXNoIiwidmFsdWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNNYWluVGFibGVPdmVyZmxvd1giLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiaXNNYWluVGFibGVPdmVyZmxvd1kiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpc1Jlc2l6ZXJTaG93Iiwib2xkU3R5bGUiLCJtYWluVGFibGVTdHlsZSIsInJlY3QiLCJoYW5kbGVNYWluVGFibGVTY3JvbGwiLCJvblNjcm9sbCIsImFmZml4ZWRUb3AiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJmaXhlZE5vZGUiLCJzY3JvbGxMZWZ0Iiwic3luY1RhYmxlU2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVSb3dDbGljayIsInJvdyIsImkiLCJleHBhbmRPblJvd0NsaWNrIiwiZ2V0U2VsZWN0UHJvcHMiLCJvblJvd0NsaWNrIiwic2VsZWN0T25Sb3dDbGljayIsInNlbGVjdGVkUm93S2V5cyIsImtleSIsImRpc2FibGVkIiwiaGFuZGxlU2VsZWN0IiwiaW5jbHVkZXMiLCJoYW5kbGVFeHBhbmQiLCJoYW5kbGVUaFJlc2l6ZSIsImluZGV4IiwiZml4ZWRQb3NpdGlvbiIsImdldENvbHVtbnMiLCJmaXhlZENvbHVtbnNJbmZvcyIsImNvbHVtbnMiLCJmaW5kIiwicCIsImZpbmRJbmRleCIsInNwbGljZSIsInNvcnQiLCJhIiwiYiIsImZpeGVkQ29sdW1uc0luZm9zTGVmdCIsImZpeGVkQ29sdW1uc0luZm9zUmlnaHQiLCJmb3JFYWNoIiwiY29sSW5kZXgiLCJpc0xhc3RMZWZ0Iiwib2Zmc2V0Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJpc0ZpcnN0UmlnaHQiLCJoYW5kbGVUaGVhZE1vdXNlRW50ZXIiLCJoYW5kbGVUaGVhZE1vdXNlTGVhdmUiLCJPYmplY3QiLCJrZXlzIiwiZXhwYW5kZWRSb3dLZXlzUHJvcCIsImV4cGFuZGVkUm93S2V5cyIsIm9uRXhwYW5kQ2hhbmdlIiwiaW5kZXhPZiIsImNoZWNrZWQiLCJvblNlbGVjdENoYW5nZSIsInNlbGVjdGVkUm93S2V5c1Byb3AiLCJzZWxlY3RNdWx0aXBsZSIsImhhbmRsZVNlbGVjdEFsbCIsImF2YWlsYWJsZUtleXMiLCJnZXRBdmFpbGFibGVSb3dzS2V5cyIsImhhc1NlbGVjdGVkQWxsIiwiZXZlcnkiLCJnZW5lcmF0ZVRhYmxlIiwiZXhwYW5kSWNvblZpc2libGUiLCJleHBhbmRlZFJvd1JlbmRlciIsImdldEhlYWRDbGFzc05hbWUiLCJnZXRIZWFkU3R5bGUiLCJnZXRSb3dDbGFzc05hbWUiLCJnZXRSb3dTdHlsZSIsImhlYWRlckFmZml4ZWRPZmZzZXRUb3AiLCJoZWFkZXJBZmZpeEdldFRhcmdldCIsIm9uUm93TW91c2VFbnRlciIsIm9uUm93TW91c2VMZWF2ZSIsInNpemUiLCJ2ZXJ0aWNhbEFsaWduIiwidmlydHVhbExpc3RQcm9wcyIsInZpcnR1YWxMaXN0U3R5bGUiLCJ2aXJ0dWFsU2Nyb2xsIiwiYWZmaXhlZEJvdHRvbSIsImdldEdyb3VwQ29sdW1uc0RlcHRoIiwiaXNBbnlDb2x1bW5zTGVmdEZpeGVkIiwidGhlYWRTdHlsZSIsInRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlIiwidGhlYWQiLCJzYXZlUmVmIiwibWFwIiwiYWxpZ24iLCJmaWx0ZXJzIiwic29ydE9yZGVyIiwicmVzaXplZENvbCIsImNsaWNrYWJsZSIsInVuZGVmaW5lZCIsIm1pbldpZHRoIiwiZmxleFZhbHVlIiwibGFzdEluZGV4T2YiLCJ3aWR0aFJlc2l6ZSIsImZsZXgiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImdlbmVyYXRlVGhDZWxsIiwiY2hpbGRyZW4iLCJjaGlsZENvbCIsImNoaWxkQ29sSW5kZXgiLCJncmFuZENvbCIsImdyYW5kQ29sSW5kZXgiLCJnZW5lcmF0ZVRycyIsInJvd0luZGV4IiwiY29sQXJyYXkiLCJzZWxlY3RQcm9wc0dldHRlZCIsImFsbFNlbGVjdFByb3BzIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwic2VsZWN0UHJvcHMiLCJzZWxlY3RDZWxsIiwiZ2VuZXJhdGVUciIsImNvbHVtbnNQYXJhbSIsInBhcmVudEluZGV4IiwiY29sSW5kZXhQYXJhbSIsImNoaWxkcmVuQ291bnQiLCJnZW5lcmF0ZVRib2R5Q2VsbCIsInRyIiwiYWxpZ25JdGVtcyIsInBvcG92ZXJQcm9wcyIsInBvcHVwIiwiYm9vbCIsImRpc3BsYXkiLCJ6SW5kZXgiLCJmbGV4RGlyZWN0aW9uIiwib3B0aW9ucyIsImNvbHVtbnNSZXNpemFibGUiLCJnZXRIZWFkQ2VsbENsYXNzTmFtZSIsImdldEhlYWRDZWxsU3R5bGUiLCJjb2xSZXNpemFibGUiLCJyZXNpemFibGUiLCJpc0xhc3RUaCIsInRoQ2VsbCIsImp1c3RpZnlDb250ZW50Iiwib3JkZXIiLCJmaWx0ZXJlZFZhbHVlIiwiZmlsdGVyVmlzaWJsZSIsImZpbHRlck11bHRpcGxlIiwiZmlsdGVyUG9wb3ZlclByb3BzIiwidmlzaWJsZSIsIm9uRmlsdGVyVmlzaWJsZUNoYW5nZSIsInBvcG92ZXIiLCJjZWxsIiwiY2VsbEluZGV4IiwiYWxpZ25Qcm9wIiwiZ2V0Q2VsbENsYXNzTmFtZSIsImdldENlbGxTdHlsZSIsInZlcnRpY2FsQWxpZ25Qcm9wIiwicmVuZGVyIiwiY2VsbENsYXNzTmFtZSIsImNlbGxQcm9wcyIsImNlbGxTdHlsZSIsInJvd1NwYW4iLCJjb2xTcGFuIiwib3RoZXJDZWxsUHJvcHMiLCJnZXRDb21iaW5lZENlbGxTdHlsZSIsIl8iLCJfXyIsImdldFRhYmxlQ2VsbCIsInJvd0luZGV4UGFyYW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5kQ2VsbCIsImNlbGxSZWN0IiwiZW5kQ2VsbFJlY3QiLCJuYW1lIiwibm9kZSIsImRlZmF1bHRFeHBhbmRlZFJvd0tleXMiLCJkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzIiwiQ29sdW1uTWFuYWdlciIsImVtcHR5VGV4dCIsImhlYWRlckVtcGhhc2l6ZWQiLCJsb2FkaW5nIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsInJlc2V0IiwiZW1wdHkiLCJjbGFzc1NldCIsInBvc2l0aW9uIiwiaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCIsIm1heEhlaWdodCIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbHVtbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwiRXJyb3IiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxZQUFmO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLEdBQXJCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsRUFEUztBQUVoQkMsRUFBQUEsTUFBTSxFQUFFLEVBRlE7QUFHaEJDLEVBQUFBLElBQUksRUFBRSxFQUhVO0FBSWhCQyxF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QUFDRDs7QUFDRCxTQUFPZ0MsTUFBTSxDQUFDQyxJQUFQLENBQVl1SixRQUFaLEVBQXNCL1AsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUMrUCxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O2VBMDRDWXJSLEsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9pbnRlcmFjdGl2ZS1zdXBwb3J0cy1mb2N1cyAqL1xuLyoqXG4gKiBUYWJsZSDnu4Tku7blsIbkuI3kvJrkv67mlLnmiJAgRnVuY3Rpb25Db21wb25lbnTvvIxcbiAqIOWboOS4uuiAg+iZkeWIsOS5i+WJjeWcqOS9v+eUqOaXtuWtmOWcqOS4jeWwkemAmui/hyDlrp7kvosudGFibGUg55qE5pa55rOV55u05o6l6K6/6ZeuIDx0YWJsZSAvPiDlhYPntKDnmoTnlKjms5XjgIJcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IEFuaW1hdGUgZnJvbSBcInJjLWFuaW1hdGVcIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiXG5pbXBvcnQgTGlzdCBmcm9tIFwicmMtdmlydHVhbC1saXN0XCJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImRlYm91bmNlXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCBDb2x1bW4sIHsgSUNvbHVtblByb3BzIH0gZnJvbSBcIi4vQ29sdW1uXCJcbmltcG9ydCBBZmZpeCBmcm9tIFwiLi4vYWZmaXhcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgUmFkaW8gZnJvbSBcIi4uL3JhZGlvXCJcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tIFwiLi4vcmVzaXplLW9ic2VydmVyXCJcbmltcG9ydCBUYWJsZVNvcnQgZnJvbSBcIi4vVGFibGVTb3J0XCJcbmltcG9ydCBUYWJsZUZpbHRlciBmcm9tIFwiLi9UYWJsZUZpbHRlclwiXG5pbXBvcnQgQ29sdW1uTWFuYWdlciBmcm9tIFwiLi9Db2x1bW5NYW5hZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5pbnRlcmZhY2UgSUJhc2VPYmplY3Qge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuaW50ZXJmYWNlIElGaXhlZENvbHVtbnNJbmZvIHtcbiAgd2lkdGg6IG51bWJlclxuICBkYXRhSW5kZXg6IHN0cmluZ1xuICBmaXhlZDogXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbiAgaW5kZXg6IG51bWJlclxuICBpc0xhc3RMZWZ0PzogYm9vbGVhblxuICBpc0ZpcnN0UmlnaHQ/OiBib29sZWFuXG4gIG9mZnNldD86IG51bWJlclxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFibGVcIlxuY29uc3QgVERfTUlOX1dJRFRIID0gMTAwXG5jb25zdCBTRUxFQ1RfVERfV0lEVEggPSA1MFxuY29uc3QgVERfSEVJR0hUID0ge1xuICBsYXJnZTogNjAsXG4gIG1lZGl1bTogNTAsXG4gIG1pbmk6IDQwLFxuICBzbWFsbDogNDAsXG59XG5jb25zdCBIT1JJWk9OVEFMX0FMSUdOID0ge1xuICBjZW50ZXI6IFwiY2VudGVyXCIgYXMgXCJjZW50ZXJcIixcbiAgbGVmdDogXCJmbGV4LXN0YXJ0XCIgYXMgXCJmbGV4LXN0YXJ0XCIsXG4gIHJpZ2h0OiBcImZsZXgtZW5kXCIgYXMgXCJmbGV4LWVuZFwiLFxufVxuY29uc3QgVkVSVElDQUxfQUxJR04gPSB7XG4gIGJvdHRvbTogXCJmbGV4LWVuZFwiIGFzIFwiZmxleC1lbmRcIixcbiAgY2VudGVyOiBcImNlbnRlclwiIGFzIFwiY2VudGVyXCIsXG4gIHRvcDogXCJmbGV4LXN0YXJ0XCIgYXMgXCJmbGV4LXN0YXJ0XCIsXG59XG5jb25zdCBpc0ZpeGVkTGVmdCA9IChjb2w6IElCYXNlT2JqZWN0KTogYm9vbGVhbiA9PlxuICBjb2wuZml4ZWQgPT09IFwibGVmdFwiIHx8IGNvbC5maXhlZCA9PT0gdHJ1ZVxuY29uc3QgaXNGaXhlZFJpZ2h0ID0gKGNvbDogSUJhc2VPYmplY3QpOiBib29sZWFuID0+IGNvbC5maXhlZCA9PT0gXCJyaWdodFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUHJvcHM8VCBleHRlbmRzIElCYXNlT2JqZWN0PiB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxuICAvKipcbiAgICog57uf5LiA5Zyw5o6n5Yi25YiX5rC05bmz6Z2g6b2Q5pa55ZCRXG4gICAqL1xuICBhbGlnbj86IG51bGwgfCBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCJcbiAgLyoqXG4gICAqIOWtkOiKgueCuVxuICAgKi9cbiAgY2hpbGRyZW4/OiBhbnlcbiAgLyoqXG4gICAqIOS7peaVsOe7hOeahOaWueW8j+S8oOWFpSBDb2x1bW5z77yM5aaC5p6c5Lyg5YWl5LqG5q2kIFByb3DvvIzliJkgVGFibGUg5Lya5b+955WlIGNoaWxkcmVuXG4gICAqL1xuICBjb2x1bW5zPzogSUNvbHVtblByb3BzPFQ+W10gfCBudWxsXG4gIC8qKlxuICAgKiDpmYTliqDnsbvlkI1cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICog5o6n5Yi25pW05LiqIFRhYmxlIOeahCBDb2x1bW5zIOiDveWQpuiwg+aVtOWuveW6plxuICAgKi9cbiAgY29sdW1uc1Jlc2l6YWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDmlbDmja7mupBcbiAgICovXG4gIGRhdGFTb3VyY2U/OiBUW11cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkem7mOiupOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6buY6K6k6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDnqbrmlbDmja7mupDml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIGVtcHR5VGV4dD86IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5pi+56S65bGV5byAIGljb27vvIzlpoLmnpzkuLogZmFsc2XvvIzmhI/lkbPnnYBcbiAgICogMS4g5L2/55SoIGV4cGFuZE9uUm93Q2xpY2sg5oiW6ICFXG4gICAqIDIuIOmcgOimgeWcqOe7hOS7tuWkluiHquihjOiwg+eUqOe7hOS7tuaWueazleWujOaIkOWxleW8gOWKn+iDve+8iHRoaXMudGFibGUuaGFuZGxlRXhwYW5kKHJvdy5rZXkp77yJ44CCXG4gICAqL1xuICBleHBhbmRJY29uVmlzaWJsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkeWxleW8gOaUtui1t1xuICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAqL1xuICBleHBhbmRPblJvd0NsaWNrPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZXhwYW5kZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOihjOeahOWGheWuuVxuICAgKi9cbiAgZXhwYW5kZWRSb3dSZW5kZXI/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOeahOexu+WQje+8mihyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0Q2VsbENsYXNzTmFtZT86IChcbiAgICByb3c6IFQsXG4gICAgY29sOiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahOeUsee7hOS7tuinhOWumueahCBwcm9w77yMXG4gICAqIOWmgiByb3dTcGFuIGNvbFNwYW7vvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Q2VsbFByb3BzPzogKFxuICAgIHJvdzogVCxcbiAgICBjb2w6IElCYXNlT2JqZWN0LFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sSW5kZXg6IG51bWJlclxuICApID0+IElCYXNlT2JqZWN0IHwgdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qEIHN0eWxl77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldENlbGxTdHlsZT86IChcbiAgICByb3c6IFQsXG4gICAgY29sOiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog6K6+572uIHRoZWFkIOeahOexu+WQje+8migpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRIZWFkQ2xhc3NOYW1lPzogKCkgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva4gdGhlYWQg5LiK55qEIHN0eWxl77yMKCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0SGVhZFN0eWxlPzogKCkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4qiBUSCDnmoTnsbvlkI3vvJooY29sLCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldEhlYWRDZWxsQ2xhc3NOYW1lPzogKGNvbDogSUJhc2VPYmplY3QsIGNvbEluZGV4OiBudW1iZXIpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u5q+P5LiqIFRIIOS4iueahCBzdHlsZe+8jChjb2wsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRIZWFkQ2VsbFN0eWxlPzogKFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgY29sSW5kZXg6IG51bWJlclxuICApID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/ooYznmoTnsbvlkI3vvJoocm93LCByb3dJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldFJvd0NsYXNzTmFtZT86IChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u5q+P6KGM55qEIHN0eWxl77yMKHJvdywgcm93SW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldFJvd1N0eWxlPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeiuvue9ruavj+S4qiBDaGVja2JveC9SYWRpbyDkuIrnmoQgcHJvcCAocm93LCByb3dJbmRleCkgPT4gKHt9Ke+8m1xuICAgKiDlj6/ku6XlnKjov5nph4zlm57kvKAgZGlzYWJsZWQ6IHRydWUsIOaOp+WItuivpeihjOS4jeiDvemAieaLqe+8m+ivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGdldFNlbGVjdFByb3BzPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4gSUJhc2VPYmplY3RcbiAgLyoqXG4gICAqIOaYr+WQpumcgOimgeihqOWktOWbuuWumuWIsOmhtemdouS4ilxuICAgKi9cbiAgaGVhZGVyQWZmaXhlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOi3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPkeihqOWktOWbuuWumlxuICAgKi9cbiAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcD86IG51bWJlclxuICAvKipcbiAgICog5Y+C6ICDIDxBZmZpeCAvPiDnmoQgZ2V0VGFyZ2V0IFByb3BcbiAgICovXG4gIGhlYWRlckFmZml4R2V0VGFyZ2V0PzogKCgpID0+IEhUTUxFbGVtZW50KSB8IG51bGxcbiAgLyoqXG4gICAqIOWKoOmHjeWktOmDqO+8jOW8gOWQr+S5i+WQjuihqOWktOWwhuS8muWKoOeylyArIOiDjOaZr1xuICAgKi9cbiAgaGVhZGVyRW1waGFzaXplZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOaMh+WumumrmOW6puS7peWunueOsOihqOagvOWGhea7muWKqO+8jOatpCBwcm9wIOS4jiBwcm9wIGhlYWRlckFmZml4ZWQg5LqS5pal44CCXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXIgfCBudWxsXG4gIC8qKlxuICAgKiDmmK/lkKbliqDovb3kuK1cbiAgICovXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+WxleW8gOWKn+iDveeahOWIpOaWre+8m1xuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBvbkV4cGFuZENoYW5nZT86ICgoa2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDmr4/ooYznmoQgY2xpY2sgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAqL1xuICBvblJvd0NsaWNrPzpcbiAgICB8ICgocm93OiBULCByb3dJbmRleDogbnVtYmVyLCBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDmr4/ooYznmoQgbW91c2VFbnRlciBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93TW91c2VFbnRlcj86XG4gICAgfCAoKHJvdzogVCwgcm93SW5kZXg6IG51bWJlciwgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog5q+P6KGM55qEIG1vdXNlTGVhdmUgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAqL1xuICBvblJvd01vdXNlTGVhdmU/OlxuICAgIHwgKChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIsIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkemAieaLqeavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv6YCJ5oup5Yqf6IO955qE5Yik5pat77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIG9uU2VsZWN0Q2hhbmdlPzogKChrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIFRhYmxlIOa7muWKqOaXtueahCBoYW5kbGVyXG4gICAqL1xuICBvblNjcm9sbD86ICgoZTogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5aSaIC8g5Y2V6YCJ77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgc2VsZWN0TXVsdGlwbGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HpgInmi6njgIJcbiAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgKi9cbiAgc2VsZWN0T25Sb3dDbGljaz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeS7juWklumDqOaOp+WItu+8jOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIxcbiAgICog5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjO+8m1xuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBzZWxlY3RlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog6K6+572u5bC65a+477yM5rOo5oSP77ya5bC65a+45LuF5o6n5Yi26KGM5LiO5YiX6Ze06Led77yM5LiO5a2X5L2T5aSn5bCP5LiN57uR5a6a44CCXG4gICAqL1xuICBzaXplPzogXCJtaW5pXCIgfCBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiXG4gIC8qKlxuICAgKiDnu5/kuIDlnLDmjqfliLbliJflnoLnm7TpnaDpvZDmlrnlkJFcbiAgICovXG4gIHZlcnRpY2FsQWxpZ24/OiBcInRvcFwiIHwgXCJjZW50ZXJcIiB8IFwiYm90dG9tXCJcbiAgLyoqXG4gICAqIOiZmuaLn+WIl+ihqOeahCBQcm9wc++8jOivt+WPguiAgyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yYy12aXJ0dWFsLWxpc3RcbiAgICovXG4gIHZpcnR1YWxMaXN0UHJvcHM/OiBJQmFzZU9iamVjdFxuICAvKipcbiAgICog6Jma5ouf5YiX6KGo55qE5qC35byP77yM6K+35Zyo6L+Z6YeM5oyH5a6a5a695bqm77yM6buY6K6k5bCG5Lya5pyJIDUwMCBweCDlrr3luqZcbiAgICovXG4gIHZpcnR1YWxMaXN0U3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIC8qKlxuICAgKiDmmK/lkKblvIDlkK/omZrmi5/mu5rliqjvvIzmraQgUHJvcCDor7fphY3lkIggaGVpZ2h0IFByb3Ag5ZCM5pe25L2/55So77yM55So5LqO5aSE55CG5aSn5pWw5o2u6YeP5LiL55qE6Jma5ouf5YaF5rua5Yqo77ybXG4gICAqIOatpOWKn+iDveeahOWunumZheeUqOS+i+i+g+Wwke+8jOWmguaenOacieS7u+S9lemXrumimOivt+WPiuaXtuWPjemmiFxuICAgKi9cbiAgdmlydHVhbFNjcm9sbD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVTdGF0ZSB7XG4gIGFmZml4ZWRUb3A6IGJvb2xlYW5cbiAgYWZmaXhlZEJvdHRvbTogYm9vbGVhblxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGNvbWJpbmVkQ2VsbHNJbmZvOiBJQmFzZU9iamVjdFtdXG4gIGV4cGFuZGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PlxuICBmaXhlZENvbHVtbnNJbmZvczogQXJyYXk8SUZpeGVkQ29sdW1uc0luZm8+XG4gIG1haW5UYWJsZVN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIGlzTWFpblRhYmxlT3ZlcmZsb3dYOiBib29sZWFuXG4gIGlzTWFpblRhYmxlT3ZlcmZsb3dZOiBib29sZWFuXG4gIGlzUmVzaXplclNob3c6IGJvb2xlYW5cbiAgY3VycmVudGx5UmVzaXppbmc6IElCYXNlT2JqZWN0XG4gIHJlc2l6ZWQ6IElCYXNlT2JqZWN0W11cbiAgc2VsZWN0ZWRSb3dLZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+XG59XG5cbi8qKlxuICog6KGo5qC85piv5LiA56eN5qC85byP5YyW5L+h5oGv55qE5bGV56S65b2i5byP44CC6YCa5bi45pyN5Yqh5LqO5aSn6YeP5pWw5o2u5rWP6KeI44CB566h55CG5Zy65pmv44CCXG4gKi9cbmNsYXNzIFRhYmxlPFQgZXh0ZW5kcyBJQmFzZU9iamVjdD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIElUYWJsZVByb3BzPFQ+LFxuICBJVGFibGVTdGF0ZVxuPiB7XG4gIHB1YmxpYyBzdGF0aWMgQ29sdW1uOiB0eXBlb2YgQ29sdW1uID0gQ29sdW1uXG5cbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog57uf5LiA5Zyw5o6n5Yi25YiX5rC05bmz6Z2g6b2Q5pa55ZCRXG4gICAgICovXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5Lul5pWw57uE55qE5pa55byP5Lyg5YWlIENvbHVtbnPvvIzlpoLmnpzkvKDlhaXkuobmraQgUHJvcO+8jOWImSBUYWJsZSDkvJrlv73nlaUgY2hpbGRyZW5cbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5o6n5Yi25pW05LiqIFRhYmxlIOeahCBDb2x1bW5zIOiDveWQpuiwg+aVtOWuveW6plxuICAgICAqL1xuICAgIGNvbHVtbnNSZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaVsOaNrua6kFxuICAgICAqL1xuICAgIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6buY6K6k6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOepuuaVsOaNrua6kOaXtuaYvuekuueahOWGheWuuVxuICAgICAqL1xuICAgIGVtcHR5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5pi+56S65bGV5byAIGljb27vvIzlpoLmnpzkuLogZmFsc2XvvIzmhI/lkbPnnYBcbiAgICAgKiAxLiDkvb/nlKggZXhwYW5kT25Sb3dDbGljayDmiJbogIVcbiAgICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgICAqL1xuICAgIGV4cGFuZEljb25WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBleHBhbmRPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHku47lpJbpg6jmjqfliLbvvIzlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd1JlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC855qE57G75ZCN77yaKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qE55Sx57uE5Lu26KeE5a6a55qEIHByb3DvvIxcbiAgICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRDZWxsUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Q2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg55qE57G75ZCN77yacG9zaXRpb24gPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg5LiK55qEIHN0eWxl77yMcG9zaXRpb24gPT4gKHt9KVxuICAgICAqL1xuICAgIGdldEhlYWRTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5LiqIFRIIOeahOexu+WQje+8mihjb2wsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKogVEgg5LiK55qEIHN0eWxl77yMKGNvbCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/ooYznmoTnsbvlkI3vvJoocm93LCByb3dJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRSb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+ihjOeahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Um93U3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeiuvue9ruavj+S4qiBDaGVja2JveC9SYWRpbyDkuIrnmoQgcHJvcCAocm93LCByb3dJbmRleCkgPT4gKHt9Ke+8m1xuICAgICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGdldFNlbGVjdFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbpnIDopoHooajlpLTlm7rlrprliLDpobXpnaLkuIpcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HooajlpLTlm7rlrppcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWPguiAgyA8QWZmaXggLz4g55qEIGdldFRhcmdldCBQcm9wXG4gICAgICovXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWKoOmHjeWktOmDqO+8jOW8gOWQr+S5i+WQjuihqOWktOWwhuS8muWKoOeylyArIOiDjOaZr1xuICAgICAqL1xuICAgIGhlYWRlckVtcGhhc2l6ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumumrmOW6puS7peWunueOsOihqOagvOWGhea7muWKqO+8jOatpCBwcm9wIOS4jiBwcm9wIGhlYWRlckFmZml4ZWQg5LqS5pal44CCXG4gICAgICovXG4gICAgaGVpZ2h0OiAocHJvcHM6IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PikgPT4ge1xuICAgICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiSW52YWxpZCBwcm9wIGBoZWlnaHRgIHN1cHBsaWVkIHRvIGBUYWJsZWAsIGV4cGVjdGVkIGBudW1iZXJgLlwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJBZmZpeGVkICYmICEhaGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiVGFibGUuanMg5LiN5YWB6K645ZCM5pe25L2/55SoIHByb3AgYGhlYWRlckFmZml4ZWRgIOS4jiBgaGVpZ2h0YO+8jOS4jeiupOWPr+Wwhui/meS4pOiAhea3t+eUqOeahOmcgOaxguWcuuaZr+OAglwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5Yqg6L295LitXG4gICAgICovXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5bGV5byA5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/lsZXlvIDlip/og73nmoTliKTmlq3vvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgb25FeHBhbmRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBjbGljayBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICAgKi9cbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmr4/ooYznmoQgbW91c2VFbnRlciBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICAgKi9cbiAgICBvblJvd01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBtb3VzZUxlYXZlIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93TW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6YCJ5oup5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/pgInmi6nlip/og73nmoTliKTmlq3vvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIFRhYmxlIOa7muWKqOaXtueahCBoYW5kbGVyXG4gICAgICovXG4gICAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeWkmiAvIOWNlemAie+8m+ivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBzZWxlY3RNdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R6YCJ5oup44CCXG4gICAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAgICovXG4gICAgc2VsZWN0T25Sb3dDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jFxuICAgICAqIOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqozvvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgc2VsZWN0ZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog6K6+572u5bC65a+477yM5rOo5oSP77ya5bC65a+45LuF5o6n5Yi26KGM5LiO5YiX6Ze06Led77yM5LiO5a2X5L2T5aSn5bCP5LiN57uR5a6a44CCXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgICAvKipcbiAgICAgKiDnu5/kuIDlnLDmjqfliLbliJflnoLnm7TpnaDpvZDmlrnlkJFcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbEFsaWduOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwidG9wXCIsIFwiY2VudGVyXCIsIFwiYm90dG9tXCJdKSxcbiAgICAvKipcbiAgICAgKiDomZrmi5/liJfooajnmoQgUHJvcHPvvIzor7flj4LogIMgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtdmlydHVhbC1saXN0XG4gICAgICovXG4gICAgdmlydHVhbExpc3RQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDomZrmi5/liJfooajnmoTmoLflvI/vvIzor7flnKjov5nph4zmjIflrprlrr3luqbvvIzpu5jorqTlsIbkvJrmnIkgNTAwIHB4IOWuveW6plxuICAgICAqL1xuICAgIHZpcnR1YWxMaXN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5byA5ZCv6Jma5ouf5rua5Yqo77yM5q2kIFByb3Ag6K+36YWN5ZCIIGhlaWdodCBQcm9wIOWQjOaXtuS9v+eUqO+8jOeUqOS6juWkhOeQhuWkp+aVsOaNrumHj+S4i+eahOiZmuaLn+WGhea7muWKqO+8m1xuICAgICAqIOatpOWKn+iDveeahOWunumZheeUqOS+i+i+g+Wwke+8jOWmguaenOacieS7u+S9lemXrumimOivt+WPiuaXtuWPjemmiFxuICAgICAqL1xuICAgIHZpcnR1YWxTY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PiA9IHtcbiAgICBhbGlnbjogbnVsbCxcbiAgICBjaGlsZHJlbjogXCJcIixcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBjb2x1bW5zOiBudWxsLFxuICAgIGNvbHVtbnNSZXNpemFibGU6IG51bGwsXG4gICAgZGF0YVNvdXJjZTogW10sXG4gICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogbnVsbCxcbiAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzOiBudWxsLFxuICAgIGVtcHR5VGV4dDogXCLmmoLml6DmlbDmja5cIixcbiAgICBleHBhbmRJY29uVmlzaWJsZTogdHJ1ZSxcbiAgICBleHBhbmRPblJvd0NsaWNrOiBmYWxzZSxcbiAgICBleHBhbmRlZFJvd0tleXM6IG51bGwsXG4gICAgZXhwYW5kZWRSb3dSZW5kZXI6ICgpID0+IFwiXCIsXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRDZWxsUHJvcHM6IG5vb3AsXG4gICAgZ2V0Q2VsbFN0eWxlOiBub29wLFxuICAgIGdldEhlYWRDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0SGVhZFN0eWxlOiBub29wLFxuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldEhlYWRDZWxsU3R5bGU6IG5vb3AsXG4gICAgZ2V0Um93Q2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldFJvd1N0eWxlOiBub29wLFxuICAgIGdldFNlbGVjdFByb3BzOiAoKSA9PiAoe30pLFxuICAgIGhlYWRlckFmZml4ZWQ6IGZhbHNlLFxuICAgIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A6IDAsXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IG51bGwsXG4gICAgaGVhZGVyRW1waGFzaXplZDogZmFsc2UsXG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG9uRXhwYW5kQ2hhbmdlOiBudWxsLFxuICAgIG9uUm93Q2xpY2s6IG51bGwsXG4gICAgb25Sb3dNb3VzZUVudGVyOiBudWxsLFxuICAgIG9uUm93TW91c2VMZWF2ZTogbnVsbCxcbiAgICBvblNlbGVjdENoYW5nZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBzZWxlY3RNdWx0aXBsZTogdHJ1ZSxcbiAgICBzZWxlY3RPblJvd0NsaWNrOiBmYWxzZSxcbiAgICBzZWxlY3RlZFJvd0tleXM6IG51bGwsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IHVuZGVmaW5lZCxcbiAgICB2aXJ0dWFsTGlzdFByb3BzOiB7fSxcbiAgICB2aXJ0dWFsTGlzdFN0eWxlOiB7fSxcbiAgICB2aXJ0dWFsU2Nyb2xsOiBmYWxzZSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBjb2x1bW5zLFxuICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICBzZWxlY3RlZFJvd0tleXMsXG4gIH06IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PikgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPElUYWJsZVN0YXRlPiA9IHt9XG4gICAgaWYgKGNoaWxkcmVuICE9PSBudWxsIHx8IGNvbHVtbnMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmNoaWxkcmVuID0gY29sdW1ucyB8fCBjaGlsZHJlblxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5leHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5cyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSb3dLZXlzID0gc2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCA/IG5ld1N0YXRlIDogbnVsbFxuICB9XG5cbiAgcHVibGljIGNvbWJpbmVkQ2VsbHNJbmZvOiBJQmFzZU9iamVjdFtdID0gW11cblxuICBwdWJsaWMgYWZmaXhIZWFkZXI6IEFmZml4XG5cbiAgcHVibGljIGFmZml4U2Nyb2xsYmFyOiBBZmZpeFxuXG4gIHB1YmxpYyBtYWluVGFibGU6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UYWJsZUJvZHk6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UaGVhZDogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBwcml2YXRlIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZTogYW55XG5cbiAgcHJpdmF0ZSByZXNpemVFdmVudDogYW55XG5cbiAgcHJpdmF0ZSBjb2x1bW5NYW5hZ2VyOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRhYmxlUHJvcHM8VD4pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cyxcbiAgICAgIGV4cGFuZGVkUm93S2V5czogZXhwYW5kZWRSb3dLZXlzUHJvcCxcbiAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCxcbiAgICB9ID0gcHJvcHNcbiAgICB0aGlzLmNvbHVtbk1hbmFnZXIgPSBuZXcgQ29sdW1uTWFuYWdlcihjb2x1bW5zIHx8IGNoaWxkcmVuKVxuICAgIGxldCBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIGxldCBleHBhbmRlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChleHBhbmRlZFJvd0tleXNQcm9wKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0RXhwYW5kZWRSb3dLZXlzKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZmZpeGVkQm90dG9tOiBmYWxzZSxcbiAgICAgIGFmZml4ZWRUb3A6IGZhbHNlLFxuICAgICAgY2hpbGRyZW46IGNvbHVtbnMgfHwgY2hpbGRyZW4sXG4gICAgICBjb21iaW5lZENlbGxzSW5mbzogW10sXG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sIC8vIOato+WcqOaUueWPmOWuveW6pueahOWIl+eahOS/oeaBr1xuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3M6IFtdLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGZhbHNlLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGZhbHNlLFxuICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgICBtYWluVGFibGVTdHlsZToge30sXG4gICAgICByZXNpemVkOiBbXSwgLy8g5pS55Y+Y6L+H5a695bqm55qE5omA5pyJ5YiX55qE5pWw5o2uXG4gICAgICBzZWxlY3RlZFJvd0tleXMsXG4gICAgfVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplID0gZGVib3VuY2UodGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsIDEwMClcbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVGFibGVQcm9wczxUPixcbiAgICBuZXh0U3RhdGU6IElUYWJsZVN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbk1hbmFnZXIsXG4gICAgICBjb21iaW5lZENlbGxzSW5mbyxcbiAgICAgIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzXG4gICAgY29uc3QgeyBpc0FueUNvbHVtbnNGaXhlZCB9ID0gY29sdW1uTWFuYWdlclxuICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgIC8vIOWbuuWumuihqOWktOmcgOimgeebkeWQrCByZXNpemUg5LqL5Lu2XG4gICAgaWYgKGhlYWRlckFmZml4ZWQgfHwgaGVpZ2h0IHx8IGlzQW55Q29sdW1uc0ZpeGVkKSB7XG4gICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgd2luZG93LFxuICAgICAgICBcInJlc2l6ZVwiLFxuICAgICAgICBkZWJvdW5jZWRXaW5kb3dSZXNpemVcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGNvbWJpbmVkQ2VsbHNJbmZvLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbWJpbmVkQ2VsbHNJbmZvIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9ICh7XG4gICAgZGF0YVNvdXJjZTogZGF0YVNvdXJjZU9sZCxcbiAgICBnZXRDZWxsUHJvcHM6IGdldENlbGxQcm9wc09sZCxcbiAgfTogSVRhYmxlUHJvcHM8VD4pID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGdldENlbGxQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIGhhbmRsZVdpbmRvd1Jlc2l6ZSDkuI3lupTor6Xlj6rlnKggZGlkbW91bnQg5pe25omn6KGMXG4gICAgICogZGlkVXBkYXRlIOaXtuS5n+mcgOimgVxuICAgICAqL1xuICAgIGlmICghc2hhbGxvd0VxdWFsKGRhdGFTb3VyY2VPbGQsIGRhdGFTb3VyY2UpKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlV2luZG93UmVzaXplLCAwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWQiOW5tuWNleWFg+agvOmcgOaLv+WIsOecn+WunueahCBkb20g5YWD57Sg6K6h566X5bC65a+477yM5Zug5q2k6L+Z6YeM6ZyA6KaBIGZvcmNlVXBkYXRlXG4gICAgICovXG4gICAgaWYgKCFzaGFsbG93RXF1YWwoZ2V0Q2VsbFByb3BzT2xkLCBnZXRDZWxsUHJvcHMpICYmIGdldENlbGxQcm9wcykge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnJlc2l6ZUV2ZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUuY2xlYXIoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydCA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICBjb2w6IElDb2x1bW5Qcm9wczxUPlxuICApID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImNvbC1yZXNpemVcIlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudGx5UmVzaXppbmc6IHtcbiAgICAgICAgY29sLFxuICAgICAgICBkYXRhSW5kZXg6IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgIHBhcmVudFdpZHRoOlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIC53aWR0aCxcbiAgICAgICAgc3RhcnRYOiBlLnBhZ2VYLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgfSwgMClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5Nb3ZpbmcgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB7IHJlc2l6ZWQsIGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb2wsIGRhdGFJbmRleCwgcGFyZW50V2lkdGgsIHN0YXJ0WCB9ID0gY3VycmVudGx5UmVzaXppbmdcbiAgICAvKipcbiAgICAgKiAxMyDku6PooajlrZflj7fvvJvnlKggZW0g55qE5pa55byP6K6h566X5a695bqm5pys6Lqr5LiN5aSf5ZCI55CG77yM6L+Z6YeMICsgMu+8jOS4jeeEtuWcqCBTYWZhcmkg5LiL56m66Ze05Lya5LiN5aSf44CCXG4gICAgICovXG4gICAgY29uc3QgYmFzZVdpZHRoID1cbiAgICAgIE1hdGguY2VpbChcbiAgICAgICAgY29sLnRpdGxlLmxlbmd0aCA+IDQgPyBjb2wudGl0bGUubGVuZ3RoIC8gMiA6IGNvbC50aXRsZS5sZW5ndGhcbiAgICAgICkgKlxuICAgICAgICAxMyArXG4gICAgICAyXG4gICAgY29uc3QgbmV3UmVzaXplZCA9IHJlc2l6ZWQuZmlsdGVyKChvKSA9PiBvLmRhdGFJbmRleCAhPT0gZGF0YUluZGV4KVxuICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5tYXgoXG4gICAgICBNYXRoLmNlaWwocGFyZW50V2lkdGggKyBlLnBhZ2VYIC0gc3RhcnRYKSxcbiAgICAgICEhY29sLm9uU29ydCB8fCAhIWNvbC5vbkZpbHRlciA/IGJhc2VXaWR0aCArIDM2IDogYmFzZVdpZHRoICsgMTZcbiAgICApXG4gICAgbmV3UmVzaXplZC5wdXNoKHtcbiAgICAgIGRhdGFJbmRleCxcbiAgICAgIHZhbHVlOiBuZXdXaWR0aCxcbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVzaXplZDogbmV3UmVzaXplZCxcbiAgICB9KVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5FbmQgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbWFpblRhYmxlIH0gPSB0aGlzXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WDpcbiAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxXaWR0aCA+IG1haW5UYWJsZS5vZmZzZXRXaWR0aCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbEhlaWdodCA+IG1haW5UYWJsZS5vZmZzZXRIZWlnaHQsXG4gICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbHVtbk1hbmFnZXIsIG1haW5UYWJsZSwgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCB7IGlzQW55Q29sdW1uc0ZpeGVkIH0gPSBjb2x1bW5NYW5hZ2VyXG4gICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgaWYgKChoZWFkZXJBZmZpeGVkIHx8IGhlaWdodCB8fCBpc0FueUNvbHVtbnNGaXhlZCkgJiYgbWFpblRhYmxlKSB7XG4gICAgICBjb25zdCB7IG1haW5UYWJsZVN0eWxlOiBvbGRTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgY29uc3QgcmVjdCA9IG1haW5UYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgbWFpblRhYmxlU3R5bGU6IFBhcnRpYWw8UmVhY3QuQ1NTUHJvcGVydGllcz4gPSB7fVxuICAgICAgbWFpblRhYmxlU3R5bGUubGVmdCA9IHJlY3QubGVmdFxuICAgICAgbWFpblRhYmxlU3R5bGUud2lkdGggPSByZWN0LndpZHRoXG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChtYWluVGFibGVTdHlsZSwgb2xkU3R5bGUpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWluVGFibGVTdHlsZSB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsV2lkdGggPiBtYWluVGFibGUub2Zmc2V0V2lkdGgsXG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsSGVpZ2h0ID4gbWFpblRhYmxlLm9mZnNldEhlaWdodCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZU1haW5UYWJsZVNjcm9sbCA9IChlPzogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IGFmZml4SGVhZGVyLCBtYWluVGFibGUgfSA9IHRoaXNcbiAgICBjb25zdCB7IG9uU2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBhZmZpeGVkVG9wIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAob25TY3JvbGwgJiYgZSkge1xuICAgICAgLy8gZSDlj6/og73mmK8gdGhlYWRcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvbGVcIikgPT09IFwidGFibGVcIikge1xuICAgICAgICBvblNjcm9sbChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZmZpeGVkVG9wICYmIGFmZml4SGVhZGVyICYmIG1haW5UYWJsZSAmJiBhZmZpeEhlYWRlci5maXhlZE5vZGUpIHtcbiAgICAgIGFmZml4SGVhZGVyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ID0gbWFpblRhYmxlLnNjcm9sbExlZnRcbiAgICB9XG5cbiAgICAvLyDlm7rlrprlpLTnmoTmg4XlhrXvvIzpnIDopoHlkIzmraXlm7rlrprmu5rliqjmnaHlkozkuLsgVGFibGUg5rua5Yqo5p2hXG4gICAgdGhpcy5zeW5jVGFibGVTY3JvbGxQb3NpdGlvbihtYWluVGFibGUuc2Nyb2xsTGVmdClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBhZmZpeFNjcm9sbGJhciwgbWFpblRhYmxlLCBtYWluVGhlYWQgfSA9IHRoaXNcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG1haW5UYWJsZSAmJiBhZmZpeFNjcm9sbGJhciAmJiBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUpIHtcbiAgICAgIGlmIChtYWluVGFibGUuc2Nyb2xsTGVmdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgbWFpblRhYmxlLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgICAgfVxuICAgICAgaWYgKGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ICE9PSB2YWx1ZSkge1xuICAgICAgICBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c6K6+5a6a5LqGIHByb3AgaGVpZ2h077yM5bm25LiU5a2Y5Zyo5qiq5ZCR5rua5Yqo5p2h77yM5YiZ6KaB5ZCM5q2lIHRoZWFkIOeahOa7muWKqOS9jee9rlxuICAgIGlmIChoZWlnaHQgJiYgbWFpblRoZWFkKSB7XG4gICAgICBtYWluVGhlYWQuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVJvd0NsaWNrID0gKFxuICAgIHJvdzogVCxcbiAgICBpOiBudW1iZXIsXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZXhwYW5kT25Sb3dDbGljayxcbiAgICAgIGdldFNlbGVjdFByb3BzLFxuICAgICAgb25Sb3dDbGljayxcbiAgICAgIHNlbGVjdE9uUm93Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsga2V5IH0gPSByb3dcbiAgICBpZiAoXG4gICAgICBzZWxlY3RPblJvd0NsaWNrICYmXG4gICAgICB0eXBlb2Yga2V5ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAhKFxuICAgICAgICBnZXRTZWxlY3RQcm9wcyAmJlxuICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpICYmXG4gICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkuZGlzYWJsZWRcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0KGtleSwgIXNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgIH1cbiAgICBpZiAoZXhwYW5kT25Sb3dDbGljaykge1xuICAgICAgdGhpcy5oYW5kbGVFeHBhbmQoa2V5KVxuICAgIH1cbiAgICBpZiAob25Sb3dDbGljaykge1xuICAgICAgb25Sb3dDbGljayhyb3csIGksIGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoUmVzaXplID0gKFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgZGF0YUluZGV4OiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBmaXhlZFBvc2l0aW9uPzogYm9vbGVhbiB8IFwibGVmdFwiIHwgXCJyaWdodFwiXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0Q29sdW1ucyB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG4gICAgbGV0IHsgZml4ZWRDb2x1bW5zSW5mb3MgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpIGFzIElDb2x1bW5Qcm9wczxUPltdXG4gICAgLyoqXG4gICAgICogY29sdW1ucyDlj5jljJblkI4gZml4ZWRDb2x1bW5zSW5mb3Mg5Lit5Y+v6IO95a2Y5Zyo5bey57uP56e76Zmk55qEIGNvbHVtblxuICAgICAqL1xuICAgIGZpeGVkQ29sdW1uc0luZm9zID0gZml4ZWRDb2x1bW5zSW5mb3MuZmlsdGVyKChvKSA9PlxuICAgICAgY29sdW1ucy5maW5kKChwKSA9PiBwLmRhdGFJbmRleCA9PT0gby5kYXRhSW5kZXgpXG4gICAgKVxuICAgIGNvbnN0IGkgPSBmaXhlZENvbHVtbnNJbmZvcy5maW5kSW5kZXgoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgLy8gZml4ZWQg5Y+v6IO95pivIEJvb2xlYW5cbiAgICBjb25zdCBmaXhlZCA9IGZpeGVkUG9zaXRpb24gPT09IFwicmlnaHRcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwiXG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgaWYgKGZpeGVkQ29sdW1uc0luZm9zW2ldLndpZHRoID09PSB3aWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zLnNwbGljZShpLCAxKVxuICAgIH1cbiAgICBmaXhlZENvbHVtbnNJbmZvcy5wdXNoKHsgd2lkdGgsIGRhdGFJbmRleCwgaW5kZXgsIGZpeGVkIH0pXG4gICAgZml4ZWRDb2x1bW5zSW5mb3Muc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpXG5cbiAgICBjb25zdCBmaXhlZENvbHVtbnNJbmZvc0xlZnQgPSBmaXhlZENvbHVtbnNJbmZvcy5maWx0ZXIoXG4gICAgICAobykgPT4gby5maXhlZCA9PT0gXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zSW5mb3NSaWdodCA9IGZpeGVkQ29sdW1uc0luZm9zXG4gICAgICAuZmlsdGVyKChvKSA9PiBvLmZpeGVkID09PSBcInJpZ2h0XCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5pbmRleCAtIGEuaW5kZXgpXG5cbiAgICBmaXhlZENvbHVtbnNJbmZvcy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgIGxldCBjb2xJbmRleFxuICAgICAgaWYgKGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29sSW5kZXggPSBmaXhlZENvbHVtbnNJbmZvc0xlZnQuZmluZEluZGV4KFxuICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleFxuICAgICAgICApXG4gICAgICAgIGlmIChjb2xJbmRleCA9PT0gZml4ZWRDb2x1bW5zSW5mb3NMZWZ0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb2wuaXNMYXN0TGVmdCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wuaXNMYXN0TGVmdCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8g5a656ZSZ77yM5LiN5YWB6K64IHNsaWNlKDAsIC0xKSDnmoTljbHpmanmk43kvZxcbiAgICAgICAgY29sLm9mZnNldCA9XG4gICAgICAgICAgY29sSW5kZXggPT09IC0xXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogZml4ZWRDb2x1bW5zSW5mb3NMZWZ0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIGNvbEluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIud2lkdGgsIDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xJbmRleCA9IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQuZmluZEluZGV4KFxuICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleFxuICAgICAgICApXG4gICAgICAgIGlmIChjb2xJbmRleCA9PT0gZml4ZWRDb2x1bW5zSW5mb3NSaWdodC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29sLmlzRmlyc3RSaWdodCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wuaXNGaXJzdFJpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvLyDlrrnplJnvvIzkuI3lhYHorrggc2xpY2UoMCwgLTEpIOeahOWNsemZqeaTjeS9nFxuICAgICAgICBjb2wub2Zmc2V0ID1cbiAgICAgICAgICBjb2xJbmRleCA9PT0gLTFcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIGNvbEluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIud2lkdGgsIDApXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZml4ZWRDb2x1bW5zSW5mb3MgfSwgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaGVhZE1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc1Jlc2l6ZXJTaG93IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFpc1Jlc2l6ZXJTaG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemVyU2hvdzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoZWFkTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnRseVJlc2l6aW5nKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWxleW8gOihjFxuICAgKi9cbiAgcHVibGljIGhhbmRsZUV4cGFuZCA9IChrZXk6IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBleHBhbmRlZFJvd0tleXM6IGV4cGFuZGVkUm93S2V5c1Byb3AsIG9uRXhwYW5kQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBleHBhbmRlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBrZXlzID0gWy4uLmV4cGFuZGVkUm93S2V5c11cbiAgICBjb25zdCBpbmRleCA9IGtleXMuaW5kZXhPZihrZXkpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGtleXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkUm93S2V5czoga2V5cyB9KVxuICAgIH1cbiAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgIG9uRXhwYW5kQ2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAieaLqeihjFxuICAgKi9cbiAgcHVibGljIGhhbmRsZVNlbGVjdCA9IChrZXk6IFJlYWN0LlJlYWN0VGV4dCwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AsXG4gICAgICBzZWxlY3RNdWx0aXBsZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGtleXMgPSBbLi4uc2VsZWN0ZWRSb3dLZXlzXVxuICAgIGlmIChzZWxlY3RNdWx0aXBsZSkge1xuICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuc3BsaWNlKHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGtleSksIDEpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBba2V5XVxuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czoga2V5cyxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvblNlbGVjdENoYW5nZSkge1xuICAgICAgb25TZWxlY3RDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YCJ5oup6KGM5YWo6YCJ5pON5L2cXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlU2VsZWN0QWxsID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0Q2hhbmdlLCBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGtleXMgPSBbLi4uc2VsZWN0ZWRSb3dLZXlzXVxuICAgIGNvbnN0IGF2YWlsYWJsZUtleXMgPSB0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKClcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgYXZhaWxhYmxlS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOS4jeiDveebtOaOpea4heepuuaVsOe7hO+8jOWboOS4uuWPr+iDveS8oOWFpeS6huS4juW9k+WJjSBkYXRhU291cmNlIOaXoOWFs+eahCBrZXlz77ybXG4gICAgICAvLyDkuZ/kuI3og73nm7TmjqUgc3BsaWNl77yM5Zug5Li66KaB5qOA5p+l5piv5ZCmIGdldFNlbGVjdFByb3BzLmRpc2FibGVk44CCXG4gICAgICBzZWxlY3RlZFJvd0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChhdmFpbGFibGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBrZXlzLnNwbGljZShrZXlzLmluZGV4T2Yoa2V5KSwgMSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGtleXMsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3RDaGFuZ2UpIHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuW3suWFqOmDqOmAieaLqVxuICAgKi9cbiAgcHVibGljIGhhc1NlbGVjdGVkQWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKClcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChcbiAgICAgIGRhdGFTb3VyY2UgJiZcbiAgICAgIGRhdGFTb3VyY2UubGVuZ3RoICYmXG4gICAgICBrZXlzLmxlbmd0aCAmJlxuICAgICAga2V5cy5ldmVyeSgoa2V5KSA9PiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHVibGljIGdldEF2YWlsYWJsZVJvd3NLZXlzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgZ2V0U2VsZWN0UHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+ID0gW11cbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBkYXRhU291cmNlLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Yga2V5ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICEoXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMgJiZcbiAgICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpICYmXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKS5kaXNhYmxlZFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYWJsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhU291cmNlLFxuICAgICAgZXhwYW5kSWNvblZpc2libGUsXG4gICAgICBleHBhbmRlZFJvd1JlbmRlcixcbiAgICAgIGV4cGFuZE9uUm93Q2xpY2ssXG4gICAgICBnZXRIZWFkQ2xhc3NOYW1lLFxuICAgICAgZ2V0SGVhZFN0eWxlLFxuICAgICAgZ2V0Um93Q2xhc3NOYW1lLFxuICAgICAgZ2V0Um93U3R5bGUsXG4gICAgICBnZXRTZWxlY3RQcm9wcyxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBvbkV4cGFuZENoYW5nZSxcbiAgICAgIG9uUm93TW91c2VFbnRlcixcbiAgICAgIG9uUm93TW91c2VMZWF2ZSxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgc2VsZWN0TXVsdGlwbGUsXG4gICAgICBzZWxlY3RPblJvd0NsaWNrLFxuICAgICAgc2l6ZSxcbiAgICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgICB2aXJ0dWFsTGlzdFByb3BzLFxuICAgICAgdmlydHVhbExpc3RTdHlsZSxcbiAgICAgIHZpcnR1YWxTY3JvbGwsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIGFmZml4ZWRUb3AsXG4gICAgICBhZmZpeGVkQm90dG9tLFxuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3MsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgbWFpblRhYmxlU3R5bGUsXG4gICAgICByZXNpemVkLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzLFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCB7XG4gICAgICBnZXRDb2x1bW5zLFxuICAgICAgLy8gZ2V0TGVmdENvbHVtbnNXaWR0aCxcbiAgICAgIGdldEdyb3VwQ29sdW1uc0RlcHRoLFxuICAgICAgaXNBbnlDb2x1bW5zTGVmdEZpeGVkLFxuICAgIH0gPSB0aGlzLmNvbHVtbk1hbmFnZXJcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRDb2x1bW5zKCkgYXMgSUNvbHVtblByb3BzPFQ+W11cblxuICAgIGNvbnN0IHRoZWFkU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICBoZWlnaHQ6IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl0gKiBnZXRHcm91cENvbHVtbnNEZXB0aCgpfXB4YCxcbiAgICAgIC4uLigoZ2V0SGVhZFN0eWxlICYmIGdldEhlYWRTdHlsZSgpKSB8fCB7fSksXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV5byA6KGM5ZKM6YCJ5oup6KGM5pe277yMdGhlYWTlkozmr4/ooYznmoTnrKzkuIDliJfliY3pg73opoHliqDlhaXkuIDliJdcbiAgICAgKiDmraTliJfkuZ/kvJrlvbHlk40gc3RpY2t5IOeahOWBj+enu+S9jee9rlxuICAgICAqL1xuICAgIGNvbnN0IHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlID1cbiAgICAgIGV4cGFuZEljb25WaXNpYmxlICYmICghIW9uU2VsZWN0Q2hhbmdlIHx8ICEhb25FeHBhbmRDaGFuZ2UpXG5cbiAgICBjb25zdCB0aGVhZCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXswfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgYCR7cHJlZml4fS10aGVhZGAsXG4gICAgICAgICAgZ2V0SGVhZENsYXNzTmFtZSAmJiBnZXRIZWFkQ2xhc3NOYW1lKClcbiAgICAgICAgKX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZVRoZWFkTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRoZWFkTW91c2VMZWF2ZX1cbiAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJtYWluVGhlYWRcIil9XG4gICAgICAgIHN0eWxlPXt0aGVhZFN0eWxlfVxuICAgICAgPlxuICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwgYCR7cHJlZml4fS10aF9mdW5jdGlvbmFsYCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9XCJmdW5jdGlvbmFsLWFsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdE11bHRpcGxlICYmICEhb25TZWxlY3RDaGFuZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGx9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmhhc1NlbGVjdGVkQWxsKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFsaWduLFxuICAgICAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICAgIGZpeGVkLFxuICAgICAgICAgICAgb25GaWx0ZXIsXG4gICAgICAgICAgICBvblNvcnQsXG4gICAgICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIH0gPSBjb2xcblxuICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgY29uc3QgY2xpY2thYmxlID1cbiAgICAgICAgICAgICEhb25Tb3J0IHx8XG4gICAgICAgICAgICAoc29ydE9yZGVyICE9PSBudWxsICYmIHNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgISFvbkZpbHRlciB8fFxuICAgICAgICAgICAgISFmaWx0ZXJzXG4gICAgICAgICAgbGV0IG1pbldpZHRoID0gMFxuICAgICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1pbldpZHRoID1cbiAgICAgICAgICAgICAgTWF0aC5jZWlsKHRpdGxlLmxlbmd0aCA+IDQgPyB0aXRsZS5sZW5ndGggLyAyIDogdGl0bGUubGVuZ3RoKSAqXG4gICAgICAgICAgICAgICAgMTMgK1xuICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgaWYgKGNsaWNrYWJsZSkge1xuICAgICAgICAgICAgICBtaW5XaWR0aCArPSAyMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZmxleFZhbHVlXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGh9IDAgYXV0b2BcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKHdpZHRoLmxlbmd0aCAtIHdpZHRoLmxhc3RJbmRleE9mKFwicHhcIikgPT09IDIpIHtcbiAgICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGguc2xpY2UoMCwgLTIpfSAwIGF1dG9gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmbGV4VmFsdWUgPSBgMCAwICR7d2lkdGh9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmbGV4VmFsdWUgPSBgJHtNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKX0gMCBhdXRvYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiB0aCBsZWZ0IOWAvO+8muWPluW+lyByZXNpemUtb2JzZXJ2ZXIg5a2Y5YKo55qE6K+l5YiX55qE5YGP56e76YeP77yM5Yqg5LiK5aaC5p6c5pyJ6YCJ5oup6KGM44CB5bGV5byA6KGM5pe255qEIFNFTEVDVF9URF9XSURUSCDigJTigJQg5LuF5a+5IGxlZnQg5pyJ5pWIXG4gICAgICAgICAgICogdGggcmlnaHQg5YC877ya5Y+W5b6XIHJlc2l6ZS1vYnNlcnZlciDlrZjlgqjnmoTor6XliJfnmoTlgY/np7vph4/vvIzliqDkuIrlpoLmnpzlhoXmu5rliqjml7bnmoTmu5rliqjmnaHlrr3luqbvvIgxNO+8iSDigJTigJQg5LuF5a+5IHJpZ2h0IOacieaViFxuICAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVzaXplT2JzZXJ2ZXJcbiAgICAgICAgICAgICAgb25SZXNpemU9eyh7IHdpZHRoOiB3aWR0aFJlc2l6ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUaFJlc2l6ZSh3aWR0aFJlc2l6ZSwgZGF0YUluZGV4LCBpbmRleCwgZml4ZWQpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZml4ZWR9XG4gICAgICAgICAgICAgIGtleT17ZGF0YUluZGV4IHx8IGluZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGhgLCB7XG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTogY2xpY2thYmxlLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdGBdOiBpc0ZpeGVkTGVmdChjb2wpLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfcmlnaHRgXTogaXNGaXhlZFJpZ2h0KGNvbCksXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9sZWZ0TGFzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0Rmlyc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICAgICAgICAgICk/LmlzRmlyc3RSaWdodCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICh0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA/IFNFTEVDVF9URF9XSURUSCA6IDApXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IGlzRml4ZWRSaWdodChjb2wpXG4gICAgICAgICAgICAgICAgICAgID8gKGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/Lm9mZnNldCB8fCAwKSArXG4gICAgICAgICAgICAgICAgICAgICAgKGlzTWFpblRhYmxlT3ZlcmZsb3dZICYmIGhlaWdodCA/IDE0IDogMClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBmbGV4OiByZXNpemVkQ29sID8gYCR7cmVzaXplZENvbC52YWx1ZX0gMCBhdXRvYCA6IGZsZXhWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiByZXNpemVkQ29sID8gcmVzaXplZENvbC52YWx1ZSA6IHdpZHRoIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiByZXNpemVkQ29sXG4gICAgICAgICAgICAgICAgICAgID8gcmVzaXplZENvbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IHdpZHRoIHx8IE1hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGF0YS1jb2x1bW49e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUaENlbGwoY29sLCB7IGluZGV4LCBjb2x1bW5zIH0pfVxuICAgICAgICAgICAgICAgIHtjb2wuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGhHcm91cGB9PlxuICAgICAgICAgICAgICAgICAgICB7Y29sLmNoaWxkcmVuLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRDb2w6IElDb2x1bW5Qcm9wczxUPiwgY2hpbGRDb2xJbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2NsaWNrYWJsZWBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5vblNvcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZENvbC5zb3J0T3JkZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb2wuc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNoaWxkQ29sLm9uRmlsdGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNoaWxkQ29sLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NoaWxkQ29sLmRhdGFJbmRleCB8fCBjaGlsZENvbEluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMTAwIDAgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBjaGlsZENvbC5hbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGNoaWxkQ29sKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkQ29sLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aEdyb3VwYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRDb2wuY2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDb2w6IElDb2x1bW5Qcm9wczxUPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFuZENvbEluZGV4OiBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGhgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2NsaWNrYWJsZWBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZ3JhbmRDb2wub25Tb3J0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdyYW5kQ29sLnNvcnRPcmRlciAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDb2wuc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFncmFuZENvbC5vbkZpbHRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZ3JhbmRDb2wuZmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtncmFuZENvbC5kYXRhSW5kZXggfHwgZ3JhbmRDb2xJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IFwiMTAwIDAgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGdyYW5kQ29sLmFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUaENlbGwoZ3JhbmRDb2wpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Jlc2l6ZU9ic2VydmVyPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBnZW5lcmF0ZVRycyA9IChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSByb3dcbiAgICAgIGNvbnN0IGNvbEFycmF5OiBhbnkgPSBbXVxuICAgICAgY29uc3Qgc2VsZWN0UHJvcHNHZXR0ZWQgPSBnZXRTZWxlY3RQcm9wcyAmJiBnZXRTZWxlY3RQcm9wcyhyb3csIHJvd0luZGV4KVxuICAgICAgY29uc3QgYWxsU2VsZWN0UHJvcHMgPSB7XG4gICAgICAgIGNoZWNrZWQ6IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpLFxuICAgICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50YCxcbiAgICAgICAgb25DaGFuZ2U6IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdChrZXksIGNoZWNrZWQpLFxuICAgICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSxcbiAgICAgICAgLi4uKHNlbGVjdFByb3BzR2V0dGVkIHx8IHt9KSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlbGVjdFByb3BzID0gb21pdChhbGxTZWxlY3RQcm9wcywgW1wicG9wb3ZlclByb3BzXCJdKVxuICAgICAgY29uc3Qgc2VsZWN0Q2VsbCA9IG9uRXhwYW5kQ2hhbmdlID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXhwYW5kKGtleSl9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZEljb25gfSBpY29uPVwiYXJyb3ctZG93blwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHNlbGVjdE11bHRpcGxlID8gKFxuICAgICAgICA8Q2hlY2tib3ggey4uLnNlbGVjdFByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFJhZGlvIHsuLi5zZWxlY3RQcm9wc30gLz5cbiAgICAgIClcbiAgICAgIGNvbnN0IGdlbmVyYXRlVHIgPSAoY29sdW1uc1BhcmFtOiBhbnlbXSwgcGFyZW50SW5kZXg/OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29sdW1uc1BhcmFtLmZvckVhY2goKGNvbCwgY29sSW5kZXhQYXJhbSkgPT4ge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIOWmguaenOWJjemdoiDnmoQgY29sIOaciSBjaGlsZHJlbu+8jOWImeimgeaKiiBjaGlsZHJlbi5sZW5ndGgg6aKd5aSW5Yqg5YiwIGNvbEluZGV4XG4gICAgICAgICAgICovXG4gICAgICAgICAgbGV0IGNvbEluZGV4ID0gY29sSW5kZXhQYXJhbVxuICAgICAgICAgIGlmIChwYXJlbnRJbmRleCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuQ291bnQgPSBjb2x1bW5zW2ldLmNoaWxkcmVuPy5sZW5ndGggfHwgMVxuICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5Db3VudCkge1xuICAgICAgICAgICAgICAgIGNvbEluZGV4ICs9IGNoaWxkcmVuQ291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWNvbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29sQXJyYXkucHVzaCh0aGlzLmdlbmVyYXRlVGJvZHlDZWxsKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZW5lcmF0ZVRyKGNvbC5jaGlsZHJlbiwgY29sSW5kZXhQYXJhbSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBnZW5lcmF0ZVRyKGNvbHVtbnMpXG4gICAgICBjb25zdCB0ciA9IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGAke3ByZWZpeH0tdHJgLFxuICAgICAgICAgICAgZ2V0Um93Q2xhc3NOYW1lICYmIGdldFJvd0NsYXNzTmFtZShyb3csIHJvd0luZGV4KSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfY2xpY2thYmxlYF06IGV4cGFuZE9uUm93Q2xpY2sgfHwgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfZXhwYW5kZWRgXTogZXhwYW5kZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRyX3NlbGVjdGVkYF06IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAga2V5PXtrZXkgfHwgcm93SW5kZXh9XG4gICAgICAgICAgcm9sZT1cInJvd1wiXG4gICAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17XG4gICAgICAgICAgICBvblJvd01vdXNlRW50ZXJcbiAgICAgICAgICAgICAgPyAoZSkgPT4gb25Sb3dNb3VzZUVudGVyKHJvdywgcm93SW5kZXgsIGUpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17XG4gICAgICAgICAgICBvblJvd01vdXNlTGVhdmVcbiAgICAgICAgICAgICAgPyAoZSkgPT4gb25Sb3dNb3VzZUxlYXZlKHJvdywgcm93SW5kZXgsIGUpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVJvd0NsaWNrKHJvdywgcm93SW5kZXgsIGUpfVxuICAgICAgICAgIG9uS2V5RG93bj17bm9vcH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uKChnZXRSb3dTdHlsZSAmJiBnZXRSb3dTdHlsZShyb3csIHJvd0luZGV4KSkgfHwge30pLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10ZGAsIGAke3ByZWZpeH0tdGRfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAga2V5PVwiZnVuY3Rpb25hbFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogdmVydGljYWxBbGlnbiAmJiBWRVJUSUNBTF9BTElHTlt2ZXJ0aWNhbEFsaWduXSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3NlbGVjdFByb3BzR2V0dGVkPy5wb3BvdmVyUHJvcHM/LnBvcHVwID8gKFxuICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjF9XG4gICAgICAgICAgICAgICAgICAgIGFsaWduRWRnZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgey4uLihcbiAgICAgICAgICAgICAgICAgICAgICAoZ2V0U2VsZWN0UHJvcHMgJiYgZ2V0U2VsZWN0UHJvcHMocm93LCByb3dJbmRleCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICAgICAgKS5wb3BvdmVyUHJvcHN9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RDZWxsfVxuICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICBzZWxlY3RDZWxsXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb2xBcnJheX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0cixcbiAgICAgICAgICBleHBhbmRlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZFJvd2B9IGtleT1cInRyLWV4cGFuZFwiPlxuICAgICAgICAgICAgICB7ISFleHBhbmRlZFJvd1JlbmRlciAmJiBleHBhbmRlZFJvd1JlbmRlcihyb3csIHJvd0luZGV4KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICBdXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgaGVhZGVyQWZmaXhlZCA/IChcbiAgICAgICAgPEFmZml4XG4gICAgICAgICAga2V5PXswfVxuICAgICAgICAgIG9mZnNldFRvcD17aGVhZGVyQWZmaXhlZE9mZnNldFRvcH1cbiAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMud3JhcHBlcn1cbiAgICAgICAgICBnZXRUYXJnZXQ9e2hlYWRlckFmZml4R2V0VGFyZ2V0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoYm9vbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFmZml4ZWRUb3A6IGJvb2wgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAvLyDlm7rlrprnmoTpgqPkuIDliLvkuZ/pnIDopoHnq4vljbPph43mlrDlrprkvY3jgIJcbiAgICAgICAgICAgICAgLy8g6YeN5paw5a6a5L2N44CB5YyF5ous5LiL6Z2i55qEIGNsYXNzTmFtZSwgc3R5bGUg5Y+q5Zyo5Li76KGo5qC85LiK5Y+R55Sf77yM5Zug5Li65Zu65a6a5YiX55qEIEFmZml4IOihjOS4uuW+iOWNlee6r+OAglxuICAgICAgICAgICAgICBpZiAoYm9vbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKClcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1haW5UYWJsZVNjcm9sbCgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2FmZml4ZWRUb3AgPyBgJHtwcmVmaXh9LWFmZml4YCA6IFwiXCJ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIC4uLihhZmZpeGVkVG9wID8gbWFpblRhYmxlU3R5bGUgOiB7fSksXG4gICAgICAgICAgfX1cbiAgICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcImFmZml4SGVhZGVyXCIpfVxuICAgICAgICA+XG4gICAgICAgICAge3RoZWFkfVxuICAgICAgICA8L0FmZml4PlxuICAgICAgKSA6IChcbiAgICAgICAgdGhlYWRcbiAgICAgICksXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17MX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRib2R5YH1cbiAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJtYWluVGFibGVCb2R5XCIpfVxuICAgICAgPlxuICAgICAgICB7IXZpcnR1YWxTY3JvbGwgJiZcbiAgICAgICAgICBkYXRhU291cmNlICYmXG4gICAgICAgICAgISFkYXRhU291cmNlLmxlbmd0aCAmJlxuICAgICAgICAgIGRhdGFTb3VyY2UubWFwKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUcnMocm93LCByb3dJbmRleClcbiAgICAgICAgICB9KX1cbiAgICAgICAge3ZpcnR1YWxTY3JvbGwgJiYgZGF0YVNvdXJjZSAmJiAhIWRhdGFTb3VyY2UubGVuZ3RoICYmIChcbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgZGF0YT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgIGl0ZW1LZXk9XCJkYXRhSW5kZXhcIlxuICAgICAgICAgICAgaGVpZ2h0PXsoaGVpZ2h0IHx8IDQwMCkgLSA0MH1cbiAgICAgICAgICAgIGl0ZW1IZWlnaHQ9ezQyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXZpcnR1YWwtd3JhcHBlcmB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi52aXJ0dWFsTGlzdFN0eWxlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHsuLi52aXJ0dWFsTGlzdFByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRycyhyb3csIHJvd0luZGV4KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj4sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WCAmJiBoZWFkZXJBZmZpeGVkICYmIChcbiAgICAgICAgPEFmZml4XG4gICAgICAgICAga2V5PXsyfVxuICAgICAgICAgIG9mZnNldEJvdHRvbT17MH1cbiAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMubWFpblRhYmxlQm9keX1cbiAgICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcImFmZml4U2Nyb2xsYmFyXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWFmZml4U2Nyb2xsYmFyYCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0tYWZmaXhTY3JvbGxiYXJfc2hvd2BdOiBhZmZpeGVkQm90dG9tLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICAuLi5tYWluVGFibGVTdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uU2Nyb2xsPXsoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgdGhpcy5zeW5jVGFibGVTY3JvbGxQb3NpdGlvbihlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DaGFuZ2U9eyhib29sKSA9PiB0aGlzLnNldFN0YXRlKHsgYWZmaXhlZEJvdHRvbTogYm9vbCB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IHRoaXMubWFpblRhYmxlPy5zY3JvbGxXaWR0aCB9fSAvPlxuICAgICAgICA8L0FmZml4PlxuICAgICAgKSxcbiAgICBdXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUaENlbGwgPSAoY29sOiBJQ29sdW1uUHJvcHM8VD4sIG9wdGlvbnM/OiBJQmFzZU9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduLFxuICAgICAgY29sdW1uc1Jlc2l6YWJsZSxcbiAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0SGVhZENlbGxTdHlsZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcmVzaXphYmxlOiBjb2xSZXNpemFibGUgfSA9IGNvbFxuICAgIGxldCByZXNpemFibGUgPSB0cnVlXG4gICAgaWYgKHR5cGVvZiBjb2xSZXNpemFibGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXNpemFibGUgPSBjb2xSZXNpemFibGVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2x1bW5zUmVzaXphYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmVzaXphYmxlID0gY29sdW1uc1Jlc2l6YWJsZVxuICAgIH1cblxuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcsIGlzUmVzaXplclNob3cgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGlzTGFzdFRoID0gb3B0aW9ucyAmJiBvcHRpb25zLmluZGV4ID09PSBvcHRpb25zLmNvbHVtbnMubGVuZ3RoIC0gMVxuXG4gICAgY29uc3QgdGhDZWxsID0gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgYCR7cHJlZml4fS1jZWxsYCxcbiAgICAgICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZSAmJlxuICAgICAgICAgICAgZ2V0SGVhZENlbGxDbGFzc05hbWUoY29sLCBvcHRpb25zID8gb3B0aW9ucy5pbmRleCA6IHVuZGVmaW5lZClcbiAgICAgICAgKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICAgIChjb2wuYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTltjb2wuYWxpZ25dKSB8fFxuICAgICAgICAgICAgKGFsaWduICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25dKSB8fFxuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIC4uLigoZ2V0SGVhZENlbGxTdHlsZSAmJlxuICAgICAgICAgICAgZ2V0SGVhZENlbGxTdHlsZShjb2wsIG9wdGlvbnMgPyBvcHRpb25zLmluZGV4IDogdW5kZWZpbmVkKSkgfHxcbiAgICAgICAgICAgIHt9KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgeyFjb2wub25Tb3J0ICYmXG4gICAgICAgICAgKGNvbC5zb3J0T3JkZXIgPT09IG51bGwgfHwgY29sLnNvcnRPcmRlciA9PT0gdW5kZWZpbmVkKSAmJlxuICAgICAgICAgICFjb2wub25GaWx0ZXIgJiZcbiAgICAgICAgICAhY29sLmZpbHRlcnMgJiZcbiAgICAgICAgICBjb2wudGl0bGV9XG4gICAgICAgIHsoISFjb2wub25Tb3J0IHx8XG4gICAgICAgICAgKGNvbC5zb3J0T3JkZXIgIT09IG51bGwgJiYgY29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSkgJiYgKFxuICAgICAgICAgIDxUYWJsZVNvcnRcbiAgICAgICAgICAgIG9uU29ydD17KG9yZGVyKSA9PiAoY29sLm9uU29ydCA/IGNvbC5vblNvcnQob3JkZXIpIDoge30pfVxuICAgICAgICAgICAgc29ydE9yZGVyPXtjb2wuc29ydE9yZGVyfVxuICAgICAgICAgICAgdGl0bGU9e2NvbC50aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7KCEhY29sLm9uRmlsdGVyIHx8ICEhY29sLmZpbHRlcnMpICYmIChcbiAgICAgICAgICA8VGFibGVGaWx0ZXJcbiAgICAgICAgICAgIGZpbHRlcmVkVmFsdWU9e2NvbC5maWx0ZXJlZFZhbHVlfVxuICAgICAgICAgICAgZmlsdGVyVmlzaWJsZT17Y29sLmZpbHRlclZpc2libGV9XG4gICAgICAgICAgICBmaWx0ZXJNdWx0aXBsZT17Y29sLmZpbHRlck11bHRpcGxlfVxuICAgICAgICAgICAgZmlsdGVyUG9wb3ZlclByb3BzPXtjb2wuZmlsdGVyUG9wb3ZlclByb3BzfVxuICAgICAgICAgICAgZmlsdGVycz17Y29sLmZpbHRlcnN9XG4gICAgICAgICAgICBvbkZpbHRlcj17KGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgICBpZiAoY29sLm9uRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgY29sLm9uRmlsdGVyKGZpbHRlcilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRmlsdGVyVmlzaWJsZUNoYW5nZT17KHZpc2libGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNvbC5vbkZpbHRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjb2wub25GaWx0ZXJWaXNpYmxlQ2hhbmdlKHZpc2libGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0aXRsZT17Y29sLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHshY29sLmZpeGVkICYmIHJlc2l6YWJsZSAmJiAhaXNMYXN0VGggJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXJlc2l6ZXJgLCB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJlc2l6ZXJfc2hvd2BdOiBpc1Jlc2l6ZXJTaG93LFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yZXNpemVyX2N1cnJlbnRgXTpcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZy5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChlLCBjb2wpfVxuICAgICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBpZiAoY29sLnBvcG92ZXIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgbW91c2VFbnRlckRlbGF5PXswLjN9XG4gICAgICAgICAgcGxhY2VtZW50PXtcbiAgICAgICAgICAgIGNvbC5hbGlnbiA9PT0gXCJjZW50ZXJcIlxuICAgICAgICAgICAgICA/IFwidG9wXCJcbiAgICAgICAgICAgICAgOiBjb2wuYWxpZ24gPT09IFwicmlnaHRcIlxuICAgICAgICAgICAgICA/IFwidG9wUmlnaHRcIlxuICAgICAgICAgICAgICA6IFwidG9wTGVmdFwiXG4gICAgICAgICAgfVxuICAgICAgICAgIGFsaWduRWRnZVxuICAgICAgICAgIGFycm93ZWRcbiAgICAgICAgICBwb3B1cD17Y29sLnBvcG92ZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhDZWxsfVxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiB0aENlbGxcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZVRib2R5Q2VsbCA9IChcbiAgICByb3c6IFQsXG4gICAgY2VsbDogSUNvbHVtblByb3BzPFQ+LFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY2VsbEluZGV4OiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgYWxpZ246IGFsaWduUHJvcCxcbiAgICAgIGV4cGFuZEljb25WaXNpYmxlLFxuICAgICAgZ2V0Q2VsbENsYXNzTmFtZSxcbiAgICAgIGdldENlbGxQcm9wcyxcbiAgICAgIGdldENlbGxTdHlsZSxcbiAgICAgIG9uRXhwYW5kQ2hhbmdlLFxuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbEFsaWduUHJvcCxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlID1cbiAgICAgIGV4cGFuZEljb25WaXNpYmxlICYmICghIW9uU2VsZWN0Q2hhbmdlIHx8ICEhb25FeHBhbmRDaGFuZ2UpXG4gICAgY29uc3QgeyBjdXJyZW50bHlSZXNpemluZywgZml4ZWRDb2x1bW5zSW5mb3MsIHJlc2l6ZWQgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7XG4gICAgICBhbGlnbixcbiAgICAgIGRhdGFJbmRleCxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBvbkZpbHRlcixcbiAgICAgIG9uU29ydCxcbiAgICAgIHJlbmRlcixcbiAgICAgIHNvcnRPcmRlcixcbiAgICAgIHRpdGxlLFxuICAgICAgdmVydGljYWxBbGlnbixcbiAgICAgIHdpZHRoLFxuICAgIH0gPSBjZWxsXG4gICAgY29uc3QgY2xpY2thYmxlID1cbiAgICAgICEhb25Tb3J0IHx8XG4gICAgICAoc29ydE9yZGVyICE9PSBudWxsICYmIHNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgISFvbkZpbHRlciB8fFxuICAgICAgISFmaWx0ZXJzXG4gICAgbGV0IG1pbldpZHRoID0gMFxuICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1pbldpZHRoID1cbiAgICAgICAgTWF0aC5jZWlsKHRpdGxlLmxlbmd0aCA+IDQgPyB0aXRsZS5sZW5ndGggLyAyIDogdGl0bGUubGVuZ3RoKSAqIDEzICsgMTZcbiAgICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgICAgbWluV2lkdGggKz0gMjBcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGZsZXhWYWx1ZVxuICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRofSAwIGF1dG9gXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmICh3aWR0aC5sZW5ndGggLSB3aWR0aC5sYXN0SW5kZXhPZihcInB4XCIpID09PSAyKSB7XG4gICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRoLnNsaWNlKDAsIC0yKX0gMCBhdXRvYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxleFZhbHVlID0gYDAgMCAke3dpZHRofWBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmxleFZhbHVlID0gYCR7TWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCl9IDAgYXV0b2BcbiAgICB9XG4gICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICBjb25zdCBjZWxsQ2xhc3NOYW1lID1cbiAgICAgIGdldENlbGxDbGFzc05hbWUgJiYgZ2V0Q2VsbENsYXNzTmFtZShyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpXG4gICAgY29uc3QgY2VsbFByb3BzID1cbiAgICAgIChnZXRDZWxsUHJvcHMgJiYgZ2V0Q2VsbFByb3BzKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleCkpIHx8IHt9XG4gICAgY29uc3QgY2VsbFN0eWxlID1cbiAgICAgIChnZXRDZWxsU3R5bGUgJiYgZ2V0Q2VsbFN0eWxlKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleCkpIHx8IHt9XG4gICAgY29uc3QgeyByb3dTcGFuLCBjb2xTcGFuLCAuLi5vdGhlckNlbGxQcm9wcyB9ID0gY2VsbFByb3BzXG4gICAgaWYgKHJvd1NwYW4gfHwgY29sU3Bhbikge1xuICAgICAgdGhpcy5jb21iaW5lZENlbGxzSW5mby5wdXNoKHtcbiAgICAgICAgY2VsbCxcbiAgICAgICAgY2VsbEluZGV4LFxuICAgICAgICBjb2xTcGFuLFxuICAgICAgICByb3csXG4gICAgICAgIHJvd0luZGV4LFxuICAgICAgICByb3dTcGFuLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGRgLCB7XG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfcmVzaXppbmdgXTpcbiAgICAgICAgICAgIGRhdGFJbmRleCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBjdXJyZW50bHlSZXNpemluZy5kYXRhSW5kZXggPT09IGRhdGFJbmRleCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0YF06IGlzRml4ZWRMZWZ0KGNlbGwpLFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX3JpZ2h0YF06IGlzRml4ZWRSaWdodChjZWxsKSxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0TGFzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICApPy5pc0xhc3RMZWZ0LFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX3JpZ2h0Rmlyc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgKT8uaXNGaXJzdFJpZ2h0LFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2NvbWJpbmVkYF06IHJvd1NwYW4gfHwgY29sU3BhbixcbiAgICAgICAgfSl9XG4gICAgICAgIGtleT17ZGF0YUluZGV4IHx8IGNlbGxJbmRleH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBsZWZ0OiBpc0ZpeGVkTGVmdChjZWxsKVxuICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICA/Lm9mZnNldCB8fCAwKSArICh0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA/IFNFTEVDVF9URF9XSURUSCA6IDApXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICByaWdodDogaXNGaXhlZFJpZ2h0KGNlbGwpXG4gICAgICAgICAgICA/IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpPy5vZmZzZXRcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZsZXg6IHJlc2l6ZWRDb2wgPyBgJHtyZXNpemVkQ29sLnZhbHVlfSAwIGF1dG9gIDogZmxleFZhbHVlLFxuICAgICAgICAgIHdpZHRoOiByZXNpemVkQ29sXG4gICAgICAgICAgICA/IHJlc2l6ZWRDb2wudmFsdWVcbiAgICAgICAgICAgIDogd2lkdGggfHwgTWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCksXG4gICAgICAgICAgbWF4V2lkdGg6IHJlc2l6ZWRDb2wgPyByZXNpemVkQ29sLnZhbHVlIDogd2lkdGggfHwgXCJcIixcbiAgICAgICAgfX1cbiAgICAgICAgcm9sZT1cImNlbGxcIlxuICAgICAgICBkYXRhLXJvdz17cm93SW5kZXh9XG4gICAgICAgIGRhdGEtY29sdW1uPXtjZWxsSW5kZXh9XG4gICAgICAgIHsuLi5vdGhlckNlbGxQcm9wc31cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWNlbGxgLCBjZWxsQ2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYWxpZ25JdGVtczpcbiAgICAgICAgICAgICAgKHZlcnRpY2FsQWxpZ24gJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnbl0pIHx8XG4gICAgICAgICAgICAgICh2ZXJ0aWNhbEFsaWduUHJvcCAmJiBWRVJUSUNBTF9BTElHTlt2ZXJ0aWNhbEFsaWduUHJvcF0pIHx8XG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlxuICAgICAgICAgICAgICAoYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnbl0pIHx8XG4gICAgICAgICAgICAgIChhbGlnblByb3AgJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnblByb3BdKSB8fFxuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAuLi5jZWxsU3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxJbm5lcmB9PlxuICAgICAgICAgICAge3JlbmRlciA/IHJlbmRlcihyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpIDogcm93W2RhdGFJbmRleF19XG4gICAgICAgICAgICB7KHJvd1NwYW4gfHwgY29sU3BhbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxfY29tYmluZWRgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvbWJpbmVkQ2VsbFN0eWxlKFxuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW4sXG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW5cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JlbmRlclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXIocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KVxuICAgICAgICAgICAgICAgICAgOiByb3dbZGF0YUluZGV4XX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21iaW5lZENlbGxTdHlsZSA9IChcbiAgICBfOiBJQmFzZU9iamVjdCxcbiAgICBfXzogSUNvbHVtblByb3BzPFQ+LFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sSW5kZXg6IG51bWJlcixcbiAgICByb3dTcGFuOiBudW1iZXIsXG4gICAgY29sU3BhbjogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IGdldFRhYmxlQ2VsbCA9IChyb3dJbmRleFBhcmFtOiBudW1iZXIsIGNvbEluZGV4UGFyYW06IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMubWFpblRhYmxlKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMubWFpblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwicm93XCJdJylbXG4gICAgICAgICAgcm93SW5kZXhQYXJhbVxuICAgICAgICBdXG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuW2NvbEluZGV4UGFyYW1dXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IGNlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge31cbiAgICBpZiAocm93U3BhbiA8IDIgfHwgdHlwZW9mIHJvd1NwYW4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgIHN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gMXB4KVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZENlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXggKyByb3dTcGFuIC0gMSwgY29sSW5kZXgpXG4gICAgICBpZiAoY2VsbCAmJiBlbmRDZWxsKSB7XG4gICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCBlbmRDZWxsUmVjdCA9IGVuZENlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHtcbiAgICAgICAgICBlbmRDZWxsUmVjdC5oZWlnaHQgKyBlbmRDZWxsUmVjdC50b3AgLSBjZWxsUmVjdC50b3AgLSAxXG4gICAgICAgIH1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29sU3BhbiA8IDIgfHwgdHlwZW9mIGNvbFNwYW4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgIHN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgLSAxcHgpXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW5kQ2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCwgY29sSW5kZXggKyBjb2xTcGFuIC0gMSlcbiAgICAgIGlmIChjZWxsICYmIGVuZENlbGwpIHtcbiAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGVuZENlbGxSZWN0ID0gZW5kQ2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICAgIHN0eWxlLndpZHRoID0gYCR7XG4gICAgICAgICAgZW5kQ2VsbFJlY3Qud2lkdGggKyBlbmRDZWxsUmVjdC5sZWZ0IC0gY2VsbFJlY3QubGVmdCAtIDFcbiAgICAgICAgfXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZVxuICB9XG5cbiAgcHVibGljIHNhdmVSZWYgPSAoXG4gICAgbmFtZT86XG4gICAgICB8IFwiYWZmaXhIZWFkZXJcIlxuICAgICAgfCBcImFmZml4U2Nyb2xsYmFyXCJcbiAgICAgIHwgXCJtYWluVGFibGVcIlxuICAgICAgfCBcIm1haW5UYWJsZUJvZHlcIlxuICAgICAgfCBcIm1haW5UaGVhZFwiXG4gICAgICB8IFwid3JhcHBlclwiXG4gICkgPT4gKG5vZGU6IGFueSkgPT4ge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICB0aGlzW25hbWVdID0gbm9kZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGVtcHR5VGV4dCxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWFkZXJFbXBoYXNpemVkLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbG9hZGluZyxcbiAgICAgIHNpemUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiYWxpZ25cIixcbiAgICAgIFwiY2hpbGRyZW5cIixcbiAgICAgIFwiY29sdW1uc1wiLFxuICAgICAgXCJjb2x1bW5zUmVzaXphYmxlXCIsXG4gICAgICBcImRlZmF1bHRFeHBhbmRlZFJvd0tleXNcIixcbiAgICAgIFwiZGVmYXVsdFNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRJY29uVmlzaWJsZVwiLFxuICAgICAgXCJleHBhbmRPblJvd0NsaWNrXCIsXG4gICAgICBcImV4cGFuZGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRlZFJvd1JlbmRlclwiLFxuICAgICAgXCJnZXRDZWxsQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldENlbGxQcm9wc1wiLFxuICAgICAgXCJnZXRDZWxsU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRIZWFkU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxTdHlsZVwiLFxuICAgICAgXCJnZXRSb3dDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0Um93U3R5bGVcIixcbiAgICAgIFwiZ2V0U2VsZWN0UHJvcHNcIixcbiAgICAgIFwib25FeHBhbmRDaGFuZ2VcIixcbiAgICAgIFwib25TZWxlY3RDaGFuZ2VcIixcbiAgICAgIFwib25TY3JvbGxcIixcbiAgICAgIFwib25Sb3dDbGlja1wiLFxuICAgICAgXCJvblJvd01vdXNlRW50ZXJcIixcbiAgICAgIFwib25Sb3dNb3VzZUxlYXZlXCIsXG4gICAgICBcInNlbGVjdE11bHRpcGxlXCIsXG4gICAgICBcInNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJzZWxlY3RPblJvd0NsaWNrXCIsXG4gICAgICBcInZlcnRpY2FsQWxpZ25cIixcbiAgICAgIFwidmlydHVhbExpc3RQcm9wc1wiLFxuICAgICAgXCJ2aXJ0dWFsTGlzdFN0eWxlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzTWFpblRhYmxlT3ZlcmZsb3dYLCBpc01haW5UYWJsZU92ZXJmbG93WSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmNvbHVtbk1hbmFnZXIucmVzZXQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgY29uc3QgeyBnZXRHcm91cENvbHVtbnNEZXB0aCB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBlbXB0eSA9ICEoZGF0YVNvdXJjZSAmJiBkYXRhU291cmNlLmxlbmd0aClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0td3JhcHBlcmAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1oZWFkZXJFbXBoYXNpemVkYF06IGhlYWRlckVtcGhhc2l6ZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWVtcHR5YF06IGVtcHR5LFxuICAgICAgICBbYCR7cHJlZml4fS1sb2FkaW5nYF06IGxvYWRpbmcsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXhgXTogaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXlgXTogaXNNYWluVGFibGVPdmVyZmxvd1ksXG4gICAgICAgIFtgJHtwcmVmaXh9LXZpcnR1YWxTY3JvbGxgXTogdmlydHVhbFNjcm9sbCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSByZWY9e3RoaXMuc2F2ZVJlZihcIndyYXBwZXJcIil9IHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJmYWRlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIHRvcDogYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXX1weGAsXG4gICAgICAgICAgICB6SW5kZXg6IFwiY2FsYyh2YXIoLS16LWluZGV4LWFmZml4KSArIDIpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2FkaW5nICYmXG4gICAgICAgICAgICAoaGVhZGVyQWZmaXhlZCA/IChcbiAgICAgICAgICAgICAgPEFmZml4XG4gICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXtcbiAgICAgICAgICAgICAgICAgIChoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wIHx8IDApICsgVERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMud3JhcHBlcn1cbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ9e2hlYWRlckFmZml4R2V0VGFyZ2V0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgIDwvQWZmaXg+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9PlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGFibGVzYCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0taW5uZXJTY3JvbGxgXTogISFoZWlnaHQsXG4gICAgICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvd2VkYF06IGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0taGFzRml4ZWRSaWdodENvbHVtbnNgXTogdGhpcy5jb2x1bW5NYW5hZ2VyLmlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQoKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiBoZWlnaHQgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogaGVpZ2h0XG4gICAgICAgICAgICAgID8gYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXSAqIGdldEdyb3VwQ29sdW1uc0RlcHRoKCl9cHhgXG4gICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1haW5UYWJsZWB9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcIm1haW5UYWJsZVwiKX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJsZVwiXG4gICAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUYWJsZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyYH0+e2VtcHR5VGV4dH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiJdfQ==