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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJwcmVmaXgiLCJURF9NSU5fV0lEVEgiLCJTRUxFQ1RfVERfV0lEVEgiLCJURF9IRUlHSFQiLCJsYXJnZSIsIm1lZGl1bSIsIm1pbmkiLCJzbWFsbCIsIkhPUklaT05UQUxfQUxJR04iLCJjZW50ZXIiLCJsZWZ0IiwicmlnaHQiLCJWRVJUSUNBTF9BTElHTiIsImJvdHRvbSIsInRvcCIsImlzRml4ZWRMZWZ0IiwiY29sIiwiZml4ZWQiLCJpc0ZpeGVkUmlnaHQiLCJUYWJsZSIsInByb3BzIiwiY29tYmluZWRDZWxsc0luZm8iLCJhZmZpeEhlYWRlciIsImFmZml4U2Nyb2xsYmFyIiwibWFpblRhYmxlIiwibWFpblRhYmxlQm9keSIsIm1haW5UaGVhZCIsIndyYXBwZXIiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJyZXNpemVFdmVudCIsImNvbHVtbk1hbmFnZXIiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJoZWFkZXJBZmZpeGVkIiwiaGVpZ2h0IiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJkYXRhU291cmNlT2xkIiwiZGF0YVNvdXJjZSIsImdldENlbGxQcm9wc09sZCIsImdldENlbGxQcm9wcyIsInNldFRpbWVvdXQiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlIiwiY2xlYXIiLCJyZXNpemVDb2x1bW5TdGFydCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImN1cnJlbnRseVJlc2l6aW5nIiwiZGF0YUluZGV4IiwicGFyZW50V2lkdGgiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3RhcnRYIiwicGFnZVgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplQ29sdW1uTW92aW5nIiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplZCIsImJhc2VXaWR0aCIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJuZXdSZXNpemVkIiwiZmlsdGVyIiwibyIsIm5ld1dpZHRoIiwibWF4Iiwib25Tb3J0Iiwib25GaWx0ZXIiLCJwdXNoIiwidmFsdWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNNYWluVGFibGVPdmVyZmxvd1giLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiaXNNYWluVGFibGVPdmVyZmxvd1kiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJpc1Jlc2l6ZXJTaG93Iiwib2xkU3R5bGUiLCJtYWluVGFibGVTdHlsZSIsInJlY3QiLCJoYW5kbGVNYWluVGFibGVTY3JvbGwiLCJvblNjcm9sbCIsImFmZml4ZWRUb3AiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJmaXhlZE5vZGUiLCJzY3JvbGxMZWZ0Iiwic3luY1RhYmxlU2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVSb3dDbGljayIsInJvdyIsImkiLCJleHBhbmRPblJvd0NsaWNrIiwiZ2V0U2VsZWN0UHJvcHMiLCJvblJvd0NsaWNrIiwic2VsZWN0T25Sb3dDbGljayIsInNlbGVjdGVkUm93S2V5cyIsImtleSIsImRpc2FibGVkIiwiaGFuZGxlU2VsZWN0IiwiaW5jbHVkZXMiLCJoYW5kbGVFeHBhbmQiLCJoYW5kbGVUaFJlc2l6ZSIsImluZGV4IiwiZml4ZWRQb3NpdGlvbiIsImdldENvbHVtbnMiLCJmaXhlZENvbHVtbnNJbmZvcyIsImNvbHVtbnMiLCJmaW5kIiwicCIsImZpbmRJbmRleCIsInNwbGljZSIsInNvcnQiLCJhIiwiYiIsImZpeGVkQ29sdW1uc0luZm9zTGVmdCIsImZpeGVkQ29sdW1uc0luZm9zUmlnaHQiLCJmb3JFYWNoIiwiY29sSW5kZXgiLCJpc0xhc3RMZWZ0Iiwib2Zmc2V0Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJpc0ZpcnN0UmlnaHQiLCJoYW5kbGVUaGVhZE1vdXNlRW50ZXIiLCJoYW5kbGVUaGVhZE1vdXNlTGVhdmUiLCJPYmplY3QiLCJrZXlzIiwiZXhwYW5kZWRSb3dLZXlzUHJvcCIsImV4cGFuZGVkUm93S2V5cyIsIm9uRXhwYW5kQ2hhbmdlIiwiaW5kZXhPZiIsImNoZWNrZWQiLCJvblNlbGVjdENoYW5nZSIsInNlbGVjdGVkUm93S2V5c1Byb3AiLCJzZWxlY3RNdWx0aXBsZSIsImhhbmRsZVNlbGVjdEFsbCIsImF2YWlsYWJsZUtleXMiLCJnZXRBdmFpbGFibGVSb3dzS2V5cyIsImhhc1NlbGVjdGVkQWxsIiwiZXZlcnkiLCJnZW5lcmF0ZVRhYmxlIiwiZXhwYW5kSWNvblZpc2libGUiLCJleHBhbmRlZFJvd1JlbmRlciIsImdldEhlYWRDbGFzc05hbWUiLCJnZXRIZWFkU3R5bGUiLCJnZXRSb3dDbGFzc05hbWUiLCJnZXRSb3dTdHlsZSIsImhlYWRlckFmZml4ZWRPZmZzZXRUb3AiLCJoZWFkZXJBZmZpeEdldFRhcmdldCIsIm9uUm93TW91c2VFbnRlciIsIm9uUm93TW91c2VMZWF2ZSIsInNpemUiLCJ2ZXJ0aWNhbEFsaWduIiwidmlydHVhbExpc3RQcm9wcyIsInZpcnR1YWxMaXN0U3R5bGUiLCJ2aXJ0dWFsU2Nyb2xsIiwiYWZmaXhlZEJvdHRvbSIsImdldEdyb3VwQ29sdW1uc0RlcHRoIiwiaXNBbnlDb2x1bW5zTGVmdEZpeGVkIiwidGhlYWRTdHlsZSIsInRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlIiwidGhlYWQiLCJzYXZlUmVmIiwibWFwIiwiYWxpZ24iLCJmaWx0ZXJzIiwic29ydE9yZGVyIiwicmVzaXplZENvbCIsImNsaWNrYWJsZSIsInVuZGVmaW5lZCIsIm1pbldpZHRoIiwiZmxleFZhbHVlIiwibGFzdEluZGV4T2YiLCJ3aWR0aFJlc2l6ZSIsImZsZXgiLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImdlbmVyYXRlVGhDZWxsIiwiY2hpbGRyZW4iLCJjaGlsZENvbCIsImNoaWxkQ29sSW5kZXgiLCJncmFuZENvbCIsImdyYW5kQ29sSW5kZXgiLCJnZW5lcmF0ZVRycyIsInJvd0luZGV4IiwiY29sQXJyYXkiLCJzZWxlY3RQcm9wc0dldHRlZCIsImFsbFNlbGVjdFByb3BzIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwic2VsZWN0UHJvcHMiLCJzZWxlY3RDZWxsIiwiZ2VuZXJhdGVUciIsImNvbHVtbnNQYXJhbSIsInBhcmVudEluZGV4IiwiY29sSW5kZXhQYXJhbSIsImNoaWxkcmVuQ291bnQiLCJnZW5lcmF0ZVRib2R5Q2VsbCIsInRyIiwiYWxpZ25JdGVtcyIsInBvcG92ZXJQcm9wcyIsInBvcHVwIiwiYm9vbCIsImRpc3BsYXkiLCJ6SW5kZXgiLCJmbGV4RGlyZWN0aW9uIiwib3B0aW9ucyIsImNvbHVtbnNSZXNpemFibGUiLCJnZXRIZWFkQ2VsbENsYXNzTmFtZSIsImdldEhlYWRDZWxsU3R5bGUiLCJjb2xSZXNpemFibGUiLCJyZXNpemFibGUiLCJpc0xhc3RUaCIsInRoQ2VsbCIsImp1c3RpZnlDb250ZW50Iiwib3JkZXIiLCJmaWx0ZXJlZFZhbHVlIiwiZmlsdGVyVmlzaWJsZSIsImZpbHRlck11bHRpcGxlIiwiZmlsdGVyUG9wb3ZlclByb3BzIiwidmlzaWJsZSIsIm9uRmlsdGVyVmlzaWJsZUNoYW5nZSIsInBvcG92ZXIiLCJjZWxsIiwiY2VsbEluZGV4IiwiYWxpZ25Qcm9wIiwiZ2V0Q2VsbENsYXNzTmFtZSIsImdldENlbGxTdHlsZSIsInZlcnRpY2FsQWxpZ25Qcm9wIiwicmVuZGVyIiwiY2VsbENsYXNzTmFtZSIsImNlbGxQcm9wcyIsImNlbGxTdHlsZSIsInJvd1NwYW4iLCJjb2xTcGFuIiwib3RoZXJDZWxsUHJvcHMiLCJnZXRDb21iaW5lZENlbGxTdHlsZSIsIl8iLCJfXyIsImdldFRhYmxlQ2VsbCIsInJvd0luZGV4UGFyYW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5kQ2VsbCIsImNlbGxSZWN0IiwiZW5kQ2VsbFJlY3QiLCJuYW1lIiwibm9kZSIsImRlZmF1bHRFeHBhbmRlZFJvd0tleXMiLCJkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzIiwiQ29sdW1uTWFuYWdlciIsImVtcHR5VGV4dCIsImhlYWRlckVtcGhhc2l6ZWQiLCJsb2FkaW5nIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsInJlc2V0IiwiZW1wdHkiLCJjbGFzc1NldCIsInBvc2l0aW9uIiwiaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCIsIm1heEhlaWdodCIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbHVtbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwiRXJyb3IiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLElBQU1DLE1BQU0sR0FBRyxZQUFmO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLEdBQXJCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsRUFEUztBQUVoQkMsRUFBQUEsTUFBTSxFQUFFLEVBRlE7QUFHaEJDLEVBQUFBLElBQUksRUFBRSxFQUhVO0FBSWhCQyxF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QUFDRDs7QUFDRCxTQUFPZ0MsTUFBTSxDQUFDQyxJQUFQLENBQVl1SixRQUFaLEVBQXNCL1AsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUMrUCxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O2VBMDRDWXJSLEsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9pbnRlcmFjdGl2ZS1zdXBwb3J0cy1mb2N1cyAqL1xuLyoqXG4gKiBUYWJsZSDnu4Tku7blsIbkuI3kvJrkv67mlLnmiJAgRnVuY3Rpb25Db21wb25lbnTvvIxcbiAqIOWboOS4uuiAg+iZkeWIsOS5i+WJjeWcqOS9v+eUqOaXtuWtmOWcqOS4jeWwkemAmui/hyDlrp7kvosudGFibGUg55qE5pa55rOV55u05o6l6K6/6ZeuIDx0YWJsZSAvPiDlhYPntKDnmoTnlKjms5XjgIJcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IEFuaW1hdGUgZnJvbSBcInJjLWFuaW1hdGVcIlxuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tIFwic2hhbGxvd2VxdWFsXCJcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiXG5pbXBvcnQgTGlzdCBmcm9tIFwicmMtdmlydHVhbC1saXN0XCJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcImRlYm91bmNlXCJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCJcbmltcG9ydCBvbWl0IGZyb20gXCIuLi9fdXRpbC9vbWl0XCJcbmltcG9ydCBDb2x1bW4sIHsgSUNvbHVtblByb3BzIH0gZnJvbSBcIi4vQ29sdW1uXCJcbmltcG9ydCBBZmZpeCBmcm9tIFwiLi4vYWZmaXhcIlxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgUG9wb3ZlciBmcm9tIFwiLi4vcG9wb3ZlclwiXG5pbXBvcnQgUmFkaW8gZnJvbSBcIi4uL3JhZGlvXCJcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tIFwiLi4vcmVzaXplLW9ic2VydmVyXCJcbmltcG9ydCBUYWJsZVNvcnQgZnJvbSBcIi4vVGFibGVTb3J0XCJcbmltcG9ydCBUYWJsZUZpbHRlciBmcm9tIFwiLi9UYWJsZUZpbHRlclwiXG5pbXBvcnQgQ29sdW1uTWFuYWdlciBmcm9tIFwiLi9Db2x1bW5NYW5hZ2VyXCJcbmltcG9ydCBcIi4vc3R5bGVcIlxuXG5pbnRlcmZhY2UgSUJhc2VPYmplY3Qge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuaW50ZXJmYWNlIElGaXhlZENvbHVtbnNJbmZvIHtcbiAgd2lkdGg6IG51bWJlclxuICBkYXRhSW5kZXg6IHN0cmluZ1xuICBmaXhlZDogXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbiAgaW5kZXg6IG51bWJlclxuICBpc0xhc3RMZWZ0PzogYm9vbGVhblxuICBpc0ZpcnN0UmlnaHQ/OiBib29sZWFuXG4gIG9mZnNldD86IG51bWJlclxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5jb25zdCBwcmVmaXggPSBcImFkdWktdGFibGVcIlxuY29uc3QgVERfTUlOX1dJRFRIID0gMTAwXG5jb25zdCBTRUxFQ1RfVERfV0lEVEggPSA1MFxuY29uc3QgVERfSEVJR0hUID0ge1xuICBsYXJnZTogNjAsXG4gIG1lZGl1bTogNTAsXG4gIG1pbmk6IDQwLFxuICBzbWFsbDogNDAsXG59XG5jb25zdCBIT1JJWk9OVEFMX0FMSUdOID0ge1xuICBjZW50ZXI6IFwiY2VudGVyXCIgYXMgXCJjZW50ZXJcIixcbiAgbGVmdDogXCJmbGV4LXN0YXJ0XCIgYXMgXCJmbGV4LXN0YXJ0XCIsXG4gIHJpZ2h0OiBcImZsZXgtZW5kXCIgYXMgXCJmbGV4LWVuZFwiLFxufVxuY29uc3QgVkVSVElDQUxfQUxJR04gPSB7XG4gIGJvdHRvbTogXCJmbGV4LWVuZFwiIGFzIFwiZmxleC1lbmRcIixcbiAgY2VudGVyOiBcImNlbnRlclwiIGFzIFwiY2VudGVyXCIsXG4gIHRvcDogXCJmbGV4LXN0YXJ0XCIgYXMgXCJmbGV4LXN0YXJ0XCIsXG59XG5jb25zdCBpc0ZpeGVkTGVmdCA9IChjb2w6IElCYXNlT2JqZWN0KTogYm9vbGVhbiA9PlxuICBjb2wuZml4ZWQgPT09IFwibGVmdFwiIHx8IGNvbC5maXhlZCA9PT0gdHJ1ZVxuY29uc3QgaXNGaXhlZFJpZ2h0ID0gKGNvbDogSUJhc2VPYmplY3QpOiBib29sZWFuID0+IGNvbC5maXhlZCA9PT0gXCJyaWdodFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUHJvcHM8VCBleHRlbmRzIElCYXNlT2JqZWN0ID0gSUJhc2VPYmplY3Q+IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG4gIC8qKlxuICAgKiDnu5/kuIDlnLDmjqfliLbliJfmsLTlubPpnaDpvZDmlrnlkJFcbiAgICovXG4gIGFsaWduPzogbnVsbCB8IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIlxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IGFueVxuICAvKipcbiAgICog5Lul5pWw57uE55qE5pa55byP5Lyg5YWlIENvbHVtbnPvvIzlpoLmnpzkvKDlhaXkuobmraQgUHJvcO+8jOWImSBUYWJsZSDkvJrlv73nlaUgY2hpbGRyZW5cbiAgICovXG4gIGNvbHVtbnM/OiBJQ29sdW1uUHJvcHM8VD5bXSB8IG51bGxcbiAgLyoqXG4gICAqIOmZhOWKoOexu+WQjVxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiDmjqfliLbmlbTkuKogVGFibGUg55qEIENvbHVtbnMg6IO95ZCm6LCD5pW05a695bqmXG4gICAqL1xuICBjb2x1bW5zUmVzaXphYmxlPzogYm9vbGVhbiB8IG51bGxcbiAgLyoqXG4gICAqIOaVsOaNrua6kFxuICAgKi9cbiAgZGF0YVNvdXJjZT86IFRbXVxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR6buY6K6k5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZGVmYXVsdEV4cGFuZGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHpu5jorqTpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOepuuaVsOaNrua6kOaXtuaYvuekuueahOWGheWuuVxuICAgKi9cbiAgZW1wdHlUZXh0PzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKbmmL7npLrlsZXlvIAgaWNvbu+8jOWmguaenOS4uiBmYWxzZe+8jOaEj+WRs+edgFxuICAgKiAxLiDkvb/nlKggZXhwYW5kT25Sb3dDbGljayDmiJbogIVcbiAgICogMi4g6ZyA6KaB5Zyo57uE5Lu25aSW6Ieq6KGM6LCD55So57uE5Lu25pa55rOV5a6M5oiQ5bGV5byA5Yqf6IO977yIdGhpcy50YWJsZS5oYW5kbGVFeHBhbmQocm93LmtleSnvvInjgIJcbiAgICovXG4gIGV4cGFuZEljb25WaXNpYmxlPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R5bGV5byA5pS26LW3XG4gICAqIOatpCBwcm9wIOS8muWcqCAudHIg5LiK5Yqg5YWlIG9uQ2xpY2sg5LqL5Lu277yMXG4gICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICovXG4gIGV4cGFuZE9uUm93Q2xpY2s/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHku47lpJbpg6jmjqfliLbvvIzlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBleHBhbmRlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5bGV5byA6KGM55qE5YaF5a65XG4gICAqL1xuICBleHBhbmRlZFJvd1JlbmRlcj86IChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IFJlYWN0LlJlYWN0Tm9kZVxuICAvKipcbiAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC855qE57G75ZCN77yaKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRDZWxsQ2xhc3NOYW1lPzogKFxuICAgIHJvdzogVCxcbiAgICBjb2w6IElCYXNlT2JqZWN0LFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sSW5kZXg6IG51bWJlclxuICApID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qE55Sx57uE5Lu26KeE5a6a55qEIHByb3DvvIxcbiAgICog5aaCIHJvd1NwYW4gY29sU3Bhbu+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsUHJvcHM/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gSUJhc2VPYmplY3QgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoQgc3R5bGXvvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Q2VsbFN0eWxlPzogKFxuICAgIHJvdzogVCxcbiAgICBjb2w6IElCYXNlT2JqZWN0LFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sSW5kZXg6IG51bWJlclxuICApID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva4gdGhlYWQg55qE57G75ZCN77yaKCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldEhlYWRDbGFzc05hbWU/OiAoKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9riB0aGVhZCDkuIrnmoQgc3R5bGXvvIwoKSA9PiAoe30pXG4gICAqL1xuICBnZXRIZWFkU3R5bGU/OiAoKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P5LiqIFRIIOeahOexu+WQje+8mihjb2wsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0SGVhZENlbGxDbGFzc05hbWU/OiAoY29sOiBJQmFzZU9iamVjdCwgY29sSW5kZXg6IG51bWJlcikgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKogVEgg5LiK55qEIHN0eWxl77yMKGNvbCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldEhlYWRDZWxsU3R5bGU/OiAoXG4gICAgY29sOiBJQmFzZU9iamVjdCxcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+ihjOeahOexu+WQje+8mihyb3csIHJvd0luZGV4KSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0Um93Q2xhc3NOYW1lPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/ooYznmoQgc3R5bGXvvIwocm93LCByb3dJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Um93U3R5bGU/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6K6+572u5q+P5LiqIENoZWNrYm94L1JhZGlvIOS4iueahCBwcm9wIChyb3csIHJvd0luZGV4KSA9PiAoe30p77ybXG4gICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZ2V0U2VsZWN0UHJvcHM/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBJQmFzZU9iamVjdFxuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB6KGo5aS05Zu65a6a5Yiw6aG16Z2i5LiKXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+R6KGo5aS05Zu65a6aXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlj4LogIMgPEFmZml4IC8+IOeahCBnZXRUYXJnZXQgUHJvcFxuICAgKi9cbiAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICAvKipcbiAgICog5Yqg6YeN5aS06YOo77yM5byA5ZCv5LmL5ZCO6KGo5aS05bCG5Lya5Yqg57KXICsg6IOM5pmvXG4gICAqL1xuICBoZWFkZXJFbXBoYXNpemVkPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a6auY5bqm5Lul5a6e546w6KGo5qC85YaF5rua5Yqo77yM5q2kIHByb3Ag5LiOIHByb3AgaGVhZGVyQWZmaXhlZCDkupLmlqXjgIJcbiAgICovXG4gIGhlaWdodD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuWKoOi9veS4rVxuICAgKi9cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv5bGV5byA5Yqf6IO955qE5Yik5pat77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKChrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBjbGljayBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93Q2xpY2s/OlxuICAgIHwgKChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIsIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dNb3VzZUVudGVyPzpcbiAgICB8ICgocm93OiBULCByb3dJbmRleDogbnVtYmVyLCBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDmr4/ooYznmoQgbW91c2VMZWF2ZSBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93TW91c2VMZWF2ZT86XG4gICAgfCAoKHJvdzogVCwgcm93SW5kZXg6IG51bWJlciwgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6YCJ5oup5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/pgInmi6nlip/og73nmoTliKTmlq3vvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgb25TZWxlY3RDaGFuZ2U/OiAoKGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uU2Nyb2xsPzogKChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHlpJogLyDljZXpgInvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBzZWxlY3RNdWx0aXBsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkemAieaLqeOAglxuICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAqL1xuICBzZWxlY3RPblJvd0NsaWNrPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jFxuICAgKiDlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqM77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIHNlbGVjdGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgKi9cbiAgdmVydGljYWxBbGlnbj86IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIlxuICAvKipcbiAgICog6Jma5ouf5YiX6KGo55qEIFByb3Bz77yM6K+35Y+C6ICDIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgdmlydHVhbExpc3RQcm9wcz86IElCYXNlT2JqZWN0XG4gIC8qKlxuICAgKiDomZrmi5/liJfooajnmoTmoLflvI/vvIzor7flnKjov5nph4zmjIflrprlrr3luqbvvIzpu5jorqTlsIbkvJrmnIkgNTAwIHB4IOWuveW6plxuICAgKi9cbiAgdmlydHVhbExpc3RTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaYr+WQpuW8gOWQr+iZmuaLn+a7muWKqO+8jOatpCBQcm9wIOivt+mFjeWQiCBoZWlnaHQgUHJvcCDlkIzml7bkvb/nlKjvvIznlKjkuo7lpITnkIblpKfmlbDmja7ph4/kuIvnmoTomZrmi5/lhoXmu5rliqjvvJtcbiAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAqL1xuICB2aXJ0dWFsU2Nyb2xsPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcbiAgYWZmaXhlZFRvcDogYm9vbGVhblxuICBhZmZpeGVkQm90dG9tOiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY29tYmluZWRDZWxsc0luZm86IElCYXNlT2JqZWN0W11cbiAgZXhwYW5kZWRSb3dLZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+XG4gIGZpeGVkQ29sdW1uc0luZm9zOiBBcnJheTxJRml4ZWRDb2x1bW5zSW5mbz5cbiAgbWFpblRhYmxlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGJvb2xlYW5cbiAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGJvb2xlYW5cbiAgaXNSZXNpemVyU2hvdzogYm9vbGVhblxuICBjdXJyZW50bHlSZXNpemluZzogSUJhc2VPYmplY3RcbiAgcmVzaXplZDogSUJhc2VPYmplY3RbXVxuICBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbn1cblxuLyoqXG4gKiDooajmoLzmmK/kuIDnp43moLzlvI/ljJbkv6Hmga/nmoTlsZXnpLrlvaLlvI/jgILpgJrluLjmnI3liqHkuo7lpKfph4/mlbDmja7mtY/op4jjgIHnrqHnkIblnLrmma/jgIJcbiAqL1xuY2xhc3MgVGFibGU8VCBleHRlbmRzIElCYXNlT2JqZWN0ID0gSUJhc2VPYmplY3Q+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBJVGFibGVQcm9wczxUPixcbiAgSVRhYmxlU3RhdGVcbj4ge1xuICBwdWJsaWMgc3RhdGljIENvbHVtbjogdHlwZW9mIENvbHVtbiA9IENvbHVtblxuXG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOe7n+S4gOWcsOaOp+WItuWIl+awtOW5s+mdoOm9kOaWueWQkVxuICAgICAqL1xuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKSxcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOS7peaVsOe7hOeahOaWueW8j+S8oOWFpSBDb2x1bW5z77yM5aaC5p6c5Lyg5YWl5LqG5q2kIFByb3DvvIzliJkgVGFibGUg5Lya5b+955WlIGNoaWxkcmVuXG4gICAgICovXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOaOp+WItuaVtOS4qiBUYWJsZSDnmoQgQ29sdW1ucyDog73lkKbosIPmlbTlrr3luqZcbiAgICAgKi9cbiAgICBjb2x1bW5zUmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmlbDmja7mupBcbiAgICAgKi9cbiAgICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR6buY6K6k5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDnqbrmlbDmja7mupDml7bmmL7npLrnmoTlhoXlrrlcbiAgICAgKi9cbiAgICBlbXB0eVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAgICogMS4g5L2/55SoIGV4cGFuZE9uUm93Q2xpY2sg5oiW6ICFXG4gICAgICogMi4g6ZyA6KaB5Zyo57uE5Lu25aSW6Ieq6KGM6LCD55So57uE5Lu25pa55rOV5a6M5oiQ5bGV5byA5Yqf6IO977yIdGhpcy50YWJsZS5oYW5kbGVFeHBhbmQocm93LmtleSnvvInjgIJcbiAgICAgKi9cbiAgICBleHBhbmRJY29uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R5bGV5byA5pS26LW3XG4gICAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAgICovXG4gICAgZXhwYW5kT25Sb3dDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5bGV5byA6KGM55qE5YaF5a65XG4gICAgICovXG4gICAgZXhwYW5kZWRSb3dSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOeahOexu+WQje+8mihyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldENlbGxDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahOeUsee7hOS7tuinhOWumueahCBwcm9w77yMXG4gICAgICog5aaCIHJvd1NwYW4gY29sU3Bhbu+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Q2VsbFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoQgc3R5bGXvvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgICAqL1xuICAgIGdldENlbGxTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIHRoZWFkIOeahOexu+WQje+8mnBvc2l0aW9uID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0SGVhZENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jHBvc2l0aW9uID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRIZWFkU3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4qiBUSCDnmoTnsbvlkI3vvJooY29sLCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5LiqIFRIIOS4iueahCBzdHlsZe+8jChjb2wsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0SGVhZENlbGxTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P6KGM55qE57G75ZCN77yaKHJvdywgcm93SW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0Um93Q2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/ooYznmoQgc3R5bGXvvIwocm93LCByb3dJbmRleCkgPT4gKHt9KVxuICAgICAqL1xuICAgIGdldFJvd1N0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHorr7nva7mr4/kuKogQ2hlY2tib3gvUmFkaW8g5LiK55qEIHByb3AgKHJvdywgcm93SW5kZXgpID0+ICh7fSnvvJtcbiAgICAgKiDlj6/ku6XlnKjov5nph4zlm57kvKAgZGlzYWJsZWQ6IHRydWUsIOaOp+WItuivpeihjOS4jeiDvemAieaLqe+8m+ivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBnZXRTZWxlY3RQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5piv5ZCm6ZyA6KaB6KGo5aS05Zu65a6a5Yiw6aG16Z2i5LiKXG4gICAgICovXG4gICAgaGVhZGVyQWZmaXhlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+R6KGo5aS05Zu65a6aXG4gICAgICovXG4gICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKipcbiAgICAgKiDlj4LogIMgPEFmZml4IC8+IOeahCBnZXRUYXJnZXQgUHJvcFxuICAgICAqL1xuICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDliqDph43lpLTpg6jvvIzlvIDlkK/kuYvlkI7ooajlpLTlsIbkvJrliqDnspcgKyDog4zmma9cbiAgICAgKi9cbiAgICBoZWFkZXJFbXBoYXNpemVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmjIflrprpq5jluqbku6Xlrp7njrDooajmoLzlhoXmu5rliqjvvIzmraQgcHJvcCDkuI4gcHJvcCBoZWFkZXJBZmZpeGVkIOS6kuaWpeOAglxuICAgICAqL1xuICAgIGhlaWdodDogKHByb3BzOiBJVGFibGVQcm9wczxJQmFzZU9iamVjdD4pID0+IHtcbiAgICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICBpZiAodHlwZW9mIGhlaWdodCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIkludmFsaWQgcHJvcCBgaGVpZ2h0YCBzdXBwbGllZCB0byBgVGFibGVgLCBleHBlY3RlZCBgbnVtYmVyYC5cIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVhZGVyQWZmaXhlZCAmJiAhIWhlaWdodCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIlRhYmxlLmpzIOS4jeWFgeiuuOWQjOaXtuS9v+eUqCBwcm9wIGBoZWFkZXJBZmZpeGVkYCDkuI4gYGhlaWdodGDvvIzkuI3orqTlj6/lsIbov5nkuKTogIXmt7fnlKjnmoTpnIDmsYLlnLrmma/jgIJcIlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWKoOi9veS4rVxuICAgICAqL1xuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv5bGV5byA5Yqf6IO955qE5Yik5pat77ybXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIG9uRXhwYW5kQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmr4/ooYznmoQgY2xpY2sgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAgICovXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIG1vdXNlRW50ZXIgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAgICovXG4gICAgb25Sb3dNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmr4/ooYznmoQgbW91c2VMZWF2ZSBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICAgKi9cbiAgICBvblJvd01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkemAieaLqeavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv6YCJ5oup5Yqf6IO955qE5Yik5pat77ybXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIG9uU2VsZWN0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBUYWJsZSDmu5rliqjml7bnmoQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHlpJogLyDljZXpgInvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgc2VsZWN0TXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkemAieaLqeOAglxuICAgICAqIOatpCBwcm9wIOS8muWcqCAudHIg5LiK5Yqg5YWlIG9uQ2xpY2sg5LqL5Lu277yMXG4gICAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgICAqL1xuICAgIHNlbGVjdE9uUm93Q2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeS7juWklumDqOaOp+WItu+8jOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIxcbiAgICAgKiDlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqM77ybXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIHNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOiuvue9ruWwuuWvuO+8jOazqOaEj++8muWwuuWvuOS7heaOp+WItuihjOS4juWIl+mXtOi3ne+8jOS4juWtl+S9k+Wkp+Wwj+S4jee7keWumuOAglxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJtaW5pXCIsIFwic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXSksXG4gICAgLyoqXG4gICAgICog57uf5LiA5Zyw5o6n5Yi25YiX5Z6C55u06Z2g6b2Q5pa55ZCRXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFtudWxsLCBcInRvcFwiLCBcImNlbnRlclwiLCBcImJvdHRvbVwiXSksXG4gICAgLyoqXG4gICAgICog6Jma5ouf5YiX6KGo55qEIFByb3Bz77yM6K+35Y+C6ICDIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLXZpcnR1YWwtbGlzdFxuICAgICAqL1xuICAgIHZpcnR1YWxMaXN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog6Jma5ouf5YiX6KGo55qE5qC35byP77yM6K+35Zyo6L+Z6YeM5oyH5a6a5a695bqm77yM6buY6K6k5bCG5Lya5pyJIDUwMCBweCDlrr3luqZcbiAgICAgKi9cbiAgICB2aXJ0dWFsTGlzdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuW8gOWQr+iZmuaLn+a7muWKqO+8jOatpCBQcm9wIOivt+mFjeWQiCBoZWlnaHQgUHJvcCDlkIzml7bkvb/nlKjvvIznlKjkuo7lpITnkIblpKfmlbDmja7ph4/kuIvnmoTomZrmi5/lhoXmu5rliqjvvJtcbiAgICAgKiDmraTlip/og73nmoTlrp7pmYXnlKjkvovovoPlsJHvvIzlpoLmnpzmnInku7vkvZXpl67popjor7flj4rml7blj43ppohcbiAgICAgKi9cbiAgICB2aXJ0dWFsU2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJVGFibGVQcm9wczxJQmFzZU9iamVjdD4gPSB7XG4gICAgYWxpZ246IG51bGwsXG4gICAgY2hpbGRyZW46IFwiXCIsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgY29sdW1uczogbnVsbCxcbiAgICBjb2x1bW5zUmVzaXphYmxlOiBudWxsLFxuICAgIGRhdGFTb3VyY2U6IFtdLFxuICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM6IG51bGwsXG4gICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5czogbnVsbCxcbiAgICBlbXB0eVRleHQ6IFwi5pqC5peg5pWw5o2uXCIsXG4gICAgZXhwYW5kSWNvblZpc2libGU6IHRydWUsXG4gICAgZXhwYW5kT25Sb3dDbGljazogZmFsc2UsXG4gICAgZXhwYW5kZWRSb3dLZXlzOiBudWxsLFxuICAgIGV4cGFuZGVkUm93UmVuZGVyOiAoKSA9PiBcIlwiLFxuICAgIGdldENlbGxDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0Q2VsbFByb3BzOiBub29wLFxuICAgIGdldENlbGxTdHlsZTogbm9vcCxcbiAgICBnZXRIZWFkQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldEhlYWRTdHlsZTogbm9vcCxcbiAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRIZWFkQ2VsbFN0eWxlOiBub29wLFxuICAgIGdldFJvd0NsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRSb3dTdHlsZTogbm9vcCxcbiAgICBnZXRTZWxlY3RQcm9wczogKCkgPT4gKHt9KSxcbiAgICBoZWFkZXJBZmZpeGVkOiBmYWxzZSxcbiAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wOiAwLFxuICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0OiBudWxsLFxuICAgIGhlYWRlckVtcGhhc2l6ZWQ6IGZhbHNlLFxuICAgIGhlaWdodDogbnVsbCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBvbkV4cGFuZENoYW5nZTogbnVsbCxcbiAgICBvblJvd0NsaWNrOiBudWxsLFxuICAgIG9uUm93TW91c2VFbnRlcjogbnVsbCxcbiAgICBvblJvd01vdXNlTGVhdmU6IG51bGwsXG4gICAgb25TZWxlY3RDaGFuZ2U6IG51bGwsXG4gICAgb25TY3JvbGw6IG51bGwsXG4gICAgc2VsZWN0TXVsdGlwbGU6IHRydWUsXG4gICAgc2VsZWN0T25Sb3dDbGljazogZmFsc2UsXG4gICAgc2VsZWN0ZWRSb3dLZXlzOiBudWxsLFxuICAgIHNpemU6IFwic21hbGxcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiB1bmRlZmluZWQsXG4gICAgdmlydHVhbExpc3RQcm9wczoge30sXG4gICAgdmlydHVhbExpc3RTdHlsZToge30sXG4gICAgdmlydHVhbFNjcm9sbDogZmFsc2UsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9ICh7XG4gICAgY2hpbGRyZW4sXG4gICAgY29sdW1ucyxcbiAgICBleHBhbmRlZFJvd0tleXMsXG4gICAgc2VsZWN0ZWRSb3dLZXlzLFxuICB9OiBJVGFibGVQcm9wczxJQmFzZU9iamVjdD4pID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZTogUGFydGlhbDxJVGFibGVTdGF0ZT4gPSB7fVxuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCB8fCBjb2x1bW5zICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5jaGlsZHJlbiA9IGNvbHVtbnMgfHwgY2hpbGRyZW5cbiAgICB9XG4gICAgaWYgKGV4cGFuZGVkUm93S2V5cyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuZXhwYW5kZWRSb3dLZXlzID0gZXhwYW5kZWRSb3dLZXlzXG4gICAgfVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLnNlbGVjdGVkUm93S2V5cyA9IHNlbGVjdGVkUm93S2V5c1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMobmV3U3RhdGUpLmxlbmd0aCA+IDAgPyBuZXdTdGF0ZSA6IG51bGxcbiAgfVxuXG4gIHB1YmxpYyBjb21iaW5lZENlbGxzSW5mbzogSUJhc2VPYmplY3RbXSA9IFtdXG5cbiAgcHVibGljIGFmZml4SGVhZGVyOiBBZmZpeFxuXG4gIHB1YmxpYyBhZmZpeFNjcm9sbGJhcjogQWZmaXhcblxuICBwdWJsaWMgbWFpblRhYmxlOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyBtYWluVGFibGVCb2R5OiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyBtYWluVGhlYWQ6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIHdyYXBwZXI6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHJpdmF0ZSBkZWJvdW5jZWRXaW5kb3dSZXNpemU6IGFueVxuXG4gIHByaXZhdGUgcmVzaXplRXZlbnQ6IGFueVxuXG4gIHByaXZhdGUgY29sdW1uTWFuYWdlcjogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElUYWJsZVByb3BzPFQ+KSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjb2x1bW5zLFxuICAgICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5cyxcbiAgICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXMsXG4gICAgICBleHBhbmRlZFJvd0tleXM6IGV4cGFuZGVkUm93S2V5c1Byb3AsXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AsXG4gICAgfSA9IHByb3BzXG4gICAgdGhpcy5jb2x1bW5NYW5hZ2VyID0gbmV3IENvbHVtbk1hbmFnZXIoY29sdW1ucyB8fCBjaGlsZHJlbilcbiAgICBsZXQgc2VsZWN0ZWRSb3dLZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+ID0gW11cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzUHJvcCkge1xuICAgICAgc2VsZWN0ZWRSb3dLZXlzID0gc2VsZWN0ZWRSb3dLZXlzUHJvcFxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdFNlbGVjdGVkUm93S2V5cykge1xuICAgICAgc2VsZWN0ZWRSb3dLZXlzID0gZGVmYXVsdFNlbGVjdGVkUm93S2V5c1xuICAgIH1cbiAgICBsZXQgZXhwYW5kZWRSb3dLZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+ID0gW11cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzUHJvcCkge1xuICAgICAgZXhwYW5kZWRSb3dLZXlzID0gZXhwYW5kZWRSb3dLZXlzUHJvcFxuICAgIH0gZWxzZSBpZiAoZGVmYXVsdEV4cGFuZGVkUm93S2V5cykge1xuICAgICAgZXhwYW5kZWRSb3dLZXlzID0gZGVmYXVsdEV4cGFuZGVkUm93S2V5c1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWZmaXhlZEJvdHRvbTogZmFsc2UsXG4gICAgICBhZmZpeGVkVG9wOiBmYWxzZSxcbiAgICAgIGNoaWxkcmVuOiBjb2x1bW5zIHx8IGNoaWxkcmVuLFxuICAgICAgY29tYmluZWRDZWxsc0luZm86IFtdLFxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IHt9LCAvLyDmraPlnKjmlLnlj5jlrr3luqbnmoTliJfnmoTkv6Hmga9cbiAgICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zOiBbXSxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYOiBmYWxzZSxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOiBmYWxzZSxcbiAgICAgIGlzUmVzaXplclNob3c6IGZhbHNlLFxuICAgICAgbWFpblRhYmxlU3R5bGU6IHt9LFxuICAgICAgcmVzaXplZDogW10sIC8vIOaUueWPmOi/h+WuveW6pueahOaJgOacieWIl+eahOaVsOaNrlxuICAgICAgc2VsZWN0ZWRSb3dLZXlzLFxuICAgIH1cbiAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSA9IGRlYm91bmNlKHRoaXMuaGFuZGxlV2luZG93UmVzaXplLCAxMDApXG4gIH1cblxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKFxuICAgIG5leHRQcm9wczogSVRhYmxlUHJvcHM8VD4sXG4gICAgbmV4dFN0YXRlOiBJVGFibGVTdGF0ZVxuICApID0+XG4gICAgIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW5NYW5hZ2VyLFxuICAgICAgY29tYmluZWRDZWxsc0luZm8sXG4gICAgICBkZWJvdW5jZWRXaW5kb3dSZXNpemUsXG4gICAgICBwcm9wcyxcbiAgICB9ID0gdGhpc1xuICAgIGNvbnN0IHsgaXNBbnlDb2x1bW5zRml4ZWQgfSA9IGNvbHVtbk1hbmFnZXJcbiAgICBjb25zdCB7IGhlYWRlckFmZml4ZWQsIGhlaWdodCB9ID0gcHJvcHNcbiAgICAvLyDlm7rlrprooajlpLTpnIDopoHnm5HlkKwgcmVzaXplIOS6i+S7tlxuICAgIGlmIChoZWFkZXJBZmZpeGVkIHx8IGhlaWdodCB8fCBpc0FueUNvbHVtbnNGaXhlZCkge1xuICAgICAgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUoKVxuICAgICAgdGhpcy5yZXNpemVFdmVudCA9IGFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgXCJyZXNpemVcIixcbiAgICAgICAgZGVib3VuY2VkV2luZG93UmVzaXplXG4gICAgICApXG4gICAgfVxuICAgIGlmIChjb21iaW5lZENlbGxzSW5mby5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21iaW5lZENlbGxzSW5mbyB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUgPSAoe1xuICAgIGRhdGFTb3VyY2U6IGRhdGFTb3VyY2VPbGQsXG4gICAgZ2V0Q2VsbFByb3BzOiBnZXRDZWxsUHJvcHNPbGQsXG4gIH06IElUYWJsZVByb3BzPFQ+KSA9PiB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCBnZXRDZWxsUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICAvKipcbiAgICAgKiBoYW5kbGVXaW5kb3dSZXNpemUg5LiN5bqU6K+l5Y+q5ZyoIGRpZG1vdW50IOaXtuaJp+ihjFxuICAgICAqIGRpZFVwZGF0ZSDml7bkuZ/pnIDopoFcbiAgICAgKi9cbiAgICBpZiAoIXNoYWxsb3dFcXVhbChkYXRhU291cmNlT2xkLCBkYXRhU291cmNlKSkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSwgMClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlkIjlubbljZXlhYPmoLzpnIDmi7/liLDnnJ/lrp7nmoQgZG9tIOWFg+e0oOiuoeeul+WwuuWvuO+8jOWboOatpOi/memHjOmcgOimgSBmb3JjZVVwZGF0ZVxuICAgICAqL1xuICAgIGlmICghc2hhbGxvd0VxdWFsKGdldENlbGxQcm9wc09sZCwgZ2V0Q2VsbFByb3BzKSAmJiBnZXRDZWxsUHJvcHMpIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5yZXNpemVFdmVudCkge1xuICAgICAgdGhpcy5yZXNpemVFdmVudC5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAodGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUpIHtcbiAgICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplLmNsZWFyKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uU3RhcnQgPSAoXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4sXG4gICAgY29sOiBJQ29sdW1uUHJvcHM8VD5cbiAgKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJjb2wtcmVzaXplXCJcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiB7XG4gICAgICAgIGNvbCxcbiAgICAgICAgZGF0YUluZGV4OiBjb2wuZGF0YUluZGV4LFxuICAgICAgICBwYXJlbnRXaWR0aDpcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICAud2lkdGgsXG4gICAgICAgIHN0YXJ0WDogZS5wYWdlWCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgIH0sIDApXG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uTW92aW5nID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgeyByZXNpemVkLCBjdXJyZW50bHlSZXNpemluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgY29sLCBkYXRhSW5kZXgsIHBhcmVudFdpZHRoLCBzdGFydFggfSA9IGN1cnJlbnRseVJlc2l6aW5nXG4gICAgLyoqXG4gICAgICogMTMg5Luj6KGo5a2X5Y+377yb55SoIGVtIOeahOaWueW8j+iuoeeul+WuveW6puacrOi6q+S4jeWkn+WQiOeQhu+8jOi/memHjCArIDLvvIzkuI3nhLblnKggU2FmYXJpIOS4i+epuumXtOS8muS4jeWkn+OAglxuICAgICAqL1xuICAgIGNvbnN0IGJhc2VXaWR0aCA9XG4gICAgICBNYXRoLmNlaWwoXG4gICAgICAgIGNvbC50aXRsZS5sZW5ndGggPiA0ID8gY29sLnRpdGxlLmxlbmd0aCAvIDIgOiBjb2wudGl0bGUubGVuZ3RoXG4gICAgICApICpcbiAgICAgICAgMTMgK1xuICAgICAgMlxuICAgIGNvbnN0IG5ld1Jlc2l6ZWQgPSByZXNpemVkLmZpbHRlcigobykgPT4gby5kYXRhSW5kZXggIT09IGRhdGFJbmRleClcbiAgICBjb25zdCBuZXdXaWR0aCA9IE1hdGgubWF4KFxuICAgICAgTWF0aC5jZWlsKHBhcmVudFdpZHRoICsgZS5wYWdlWCAtIHN0YXJ0WCksXG4gICAgICAhIWNvbC5vblNvcnQgfHwgISFjb2wub25GaWx0ZXIgPyBiYXNlV2lkdGggKyAzNiA6IGJhc2VXaWR0aCArIDE2XG4gICAgKVxuICAgIG5ld1Jlc2l6ZWQucHVzaCh7XG4gICAgICBkYXRhSW5kZXgsXG4gICAgICB2YWx1ZTogbmV3V2lkdGgsXG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlc2l6ZWQ6IG5ld1Jlc2l6ZWQsXG4gICAgfSlcbiAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSgpXG4gIH1cblxuICBwdWJsaWMgcmVzaXplQ29sdW1uRW5kID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG1haW5UYWJsZSB9ID0gdGhpc1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJcIlxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudGx5UmVzaXppbmc6IHt9LFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6XG4gICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsV2lkdGggPiBtYWluVGFibGUub2Zmc2V0V2lkdGgsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WTpcbiAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxIZWlnaHQgPiBtYWluVGFibGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVXaW5kb3dSZXNpemUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb2x1bW5NYW5hZ2VyLCBtYWluVGFibGUsIHByb3BzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBpc0FueUNvbHVtbnNGaXhlZCB9ID0gY29sdW1uTWFuYWdlclxuICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgIGlmICgoaGVhZGVyQWZmaXhlZCB8fCBoZWlnaHQgfHwgaXNBbnlDb2x1bW5zRml4ZWQpICYmIG1haW5UYWJsZSkge1xuICAgICAgY29uc3QgeyBtYWluVGFibGVTdHlsZTogb2xkU3R5bGUgfSA9IHRoaXMuc3RhdGVcbiAgICAgIGNvbnN0IHJlY3QgPSBtYWluVGFibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IG1haW5UYWJsZVN0eWxlOiBQYXJ0aWFsPFJlYWN0LkNTU1Byb3BlcnRpZXM+ID0ge31cbiAgICAgIG1haW5UYWJsZVN0eWxlLmxlZnQgPSByZWN0LmxlZnRcbiAgICAgIG1haW5UYWJsZVN0eWxlLndpZHRoID0gcmVjdC53aWR0aFxuICAgICAgaWYgKCFzaGFsbG93RXF1YWwobWFpblRhYmxlU3R5bGUsIG9sZFN0eWxlKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFpblRhYmxlU3R5bGUgfSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc01haW5UYWJsZU92ZXJmbG93WDpcbiAgICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbFdpZHRoID4gbWFpblRhYmxlLm9mZnNldFdpZHRoLFxuICAgICAgICBpc01haW5UYWJsZU92ZXJmbG93WTpcbiAgICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbEhlaWdodCA+IG1haW5UYWJsZS5vZmZzZXRIZWlnaHQsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVNYWluVGFibGVTY3JvbGwgPSAoZT86IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBhZmZpeEhlYWRlciwgbWFpblRhYmxlIH0gPSB0aGlzXG4gICAgY29uc3QgeyBvblNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgYWZmaXhlZFRvcCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKG9uU2Nyb2xsICYmIGUpIHtcbiAgICAgIC8vIGUg5Y+v6IO95pivIHRoZWFkXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgaWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb2xlXCIpID09PSBcInRhYmxlXCIpIHtcbiAgICAgICAgb25TY3JvbGwoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWZmaXhlZFRvcCAmJiBhZmZpeEhlYWRlciAmJiBtYWluVGFibGUgJiYgYWZmaXhIZWFkZXIuZml4ZWROb2RlKSB7XG4gICAgICBhZmZpeEhlYWRlci5maXhlZE5vZGUuc2Nyb2xsTGVmdCA9IG1haW5UYWJsZS5zY3JvbGxMZWZ0XG4gICAgfVxuXG4gICAgLy8g5Zu65a6a5aS055qE5oOF5Ya177yM6ZyA6KaB5ZCM5q2l5Zu65a6a5rua5Yqo5p2h5ZKM5Li7IFRhYmxlIOa7muWKqOadoVxuICAgIHRoaXMuc3luY1RhYmxlU2Nyb2xsUG9zaXRpb24obWFpblRhYmxlLnNjcm9sbExlZnQpXG4gIH1cblxuICBwdWJsaWMgc3luY1RhYmxlU2Nyb2xsUG9zaXRpb24gPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgYWZmaXhTY3JvbGxiYXIsIG1haW5UYWJsZSwgbWFpblRoZWFkIH0gPSB0aGlzXG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChtYWluVGFibGUgJiYgYWZmaXhTY3JvbGxiYXIgJiYgYWZmaXhTY3JvbGxiYXIuZml4ZWROb2RlKSB7XG4gICAgICBpZiAobWFpblRhYmxlLnNjcm9sbExlZnQgIT09IHZhbHVlKSB7XG4gICAgICAgIG1haW5UYWJsZS5zY3JvbGxMZWZ0ID0gdmFsdWVcbiAgICAgIH1cbiAgICAgIGlmIChhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUuc2Nyb2xsTGVmdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgYWZmaXhTY3JvbGxiYXIuZml4ZWROb2RlLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWmguaenOiuvuWumuS6hiBwcm9wIGhlaWdodO+8jOW5tuS4lOWtmOWcqOaoquWQkea7muWKqOadoe+8jOWImeimgeWQjOatpSB0aGVhZCDnmoTmu5rliqjkvY3nva5cbiAgICBpZiAoaGVpZ2h0ICYmIG1haW5UaGVhZCkge1xuICAgICAgbWFpblRoZWFkLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVSb3dDbGljayA9IChcbiAgICByb3c6IFQsXG4gICAgaTogbnVtYmVyLFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGV4cGFuZE9uUm93Q2xpY2ssXG4gICAgICBnZXRTZWxlY3RQcm9wcyxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgICBzZWxlY3RPblJvd0NsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgaWYgKFxuICAgICAgc2VsZWN0T25Sb3dDbGljayAmJlxuICAgICAgdHlwZW9mIGtleSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgIShcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMgJiZcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKSAmJlxuICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpLmRpc2FibGVkXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdChrZXksICFzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICB9XG4gICAgaWYgKGV4cGFuZE9uUm93Q2xpY2spIHtcbiAgICAgIHRoaXMuaGFuZGxlRXhwYW5kKGtleSlcbiAgICB9XG4gICAgaWYgKG9uUm93Q2xpY2spIHtcbiAgICAgIG9uUm93Q2xpY2socm93LCBpLCBlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaFJlc2l6ZSA9IChcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGRhdGFJbmRleDogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgZml4ZWRQb3NpdGlvbj86IGJvb2xlYW4gfCBcImxlZnRcIiB8IFwicmlnaHRcIlxuICApID0+IHtcbiAgICBjb25zdCB7IGdldENvbHVtbnMgfSA9IHRoaXMuY29sdW1uTWFuYWdlclxuICAgIGxldCB7IGZpeGVkQ29sdW1uc0luZm9zIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgY29sdW1ucyA9IGdldENvbHVtbnMoKSBhcyBJQ29sdW1uUHJvcHM8VD5bXVxuICAgIC8qKlxuICAgICAqIGNvbHVtbnMg5Y+Y5YyW5ZCOIGZpeGVkQ29sdW1uc0luZm9zIOS4reWPr+iDveWtmOWcqOW3sue7j+enu+mZpOeahCBjb2x1bW5cbiAgICAgKi9cbiAgICBmaXhlZENvbHVtbnNJbmZvcyA9IGZpeGVkQ29sdW1uc0luZm9zLmZpbHRlcigobykgPT5cbiAgICAgIGNvbHVtbnMuZmluZCgocCkgPT4gcC5kYXRhSW5kZXggPT09IG8uZGF0YUluZGV4KVxuICAgIClcbiAgICBjb25zdCBpID0gZml4ZWRDb2x1bW5zSW5mb3MuZmluZEluZGV4KChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgIC8vIGZpeGVkIOWPr+iDveaYryBCb29sZWFuXG4gICAgY29uc3QgZml4ZWQgPSBmaXhlZFBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIlxuICAgIGlmIChpID4gLTEpIHtcbiAgICAgIGlmIChmaXhlZENvbHVtbnNJbmZvc1tpXS53aWR0aCA9PT0gd2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmaXhlZENvbHVtbnNJbmZvcy5zcGxpY2UoaSwgMSlcbiAgICB9XG4gICAgZml4ZWRDb2x1bW5zSW5mb3MucHVzaCh7IHdpZHRoLCBkYXRhSW5kZXgsIGluZGV4LCBmaXhlZCB9KVxuICAgIGZpeGVkQ29sdW1uc0luZm9zLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KVxuXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zSW5mb3NMZWZ0ID0gZml4ZWRDb2x1bW5zSW5mb3MuZmlsdGVyKFxuICAgICAgKG8pID0+IG8uZml4ZWQgPT09IFwibGVmdFwiXG4gICAgKVxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQgPSBmaXhlZENvbHVtbnNJbmZvc1xuICAgICAgLmZpbHRlcigobykgPT4gby5maXhlZCA9PT0gXCJyaWdodFwiKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuaW5kZXggLSBhLmluZGV4KVxuXG4gICAgZml4ZWRDb2x1bW5zSW5mb3MuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICBsZXQgY29sSW5kZXhcbiAgICAgIGlmIChjb2wuZml4ZWQgPT09IFwibGVmdFwiKSB7XG4gICAgICAgIGNvbEluZGV4ID0gZml4ZWRDb2x1bW5zSW5mb3NMZWZ0LmZpbmRJbmRleChcbiAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXhcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29sSW5kZXggPT09IGZpeGVkQ29sdW1uc0luZm9zTGVmdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29sLmlzTGFzdExlZnQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sLmlzTGFzdExlZnQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIC8vIOWuuemUme+8jOS4jeWFgeiuuCBzbGljZSgwLCAtMSkg55qE5Y2x6Zmp5pON5L2cXG4gICAgICAgIGNvbC5vZmZzZXQgPVxuICAgICAgICAgIGNvbEluZGV4ID09PSAtMVxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IGZpeGVkQ29sdW1uc0luZm9zTGVmdFxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjb2xJbmRleClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLndpZHRoLCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sSW5kZXggPSBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0LmZpbmRJbmRleChcbiAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGNvbC5kYXRhSW5kZXhcbiAgICAgICAgKVxuICAgICAgICBpZiAoY29sSW5kZXggPT09IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbC5pc0ZpcnN0UmlnaHQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sLmlzRmlyc3RSaWdodCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8g5a656ZSZ77yM5LiN5YWB6K64IHNsaWNlKDAsIC0xKSDnmoTljbHpmanmk43kvZxcbiAgICAgICAgY29sLm9mZnNldCA9XG4gICAgICAgICAgY29sSW5kZXggPT09IC0xXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogZml4ZWRDb2x1bW5zSW5mb3NSaWdodFxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjb2xJbmRleClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIGN1cikgPT4gYWNjICsgY3VyLndpZHRoLCAwKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpeGVkQ29sdW1uc0luZm9zIH0sIHRoaXMuZm9yY2VVcGRhdGUpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGhlYWRNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNSZXNpemVyU2hvdyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmICghaXNSZXNpemVyU2hvdykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzUmVzaXplclNob3c6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaGVhZE1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50bHlSZXNpemluZyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChPYmplY3Qua2V5cyhjdXJyZW50bHlSZXNpemluZykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlsZXlvIDooYxcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVFeHBhbmQgPSAoa2V5OiBSZWFjdC5SZWFjdFRleHQpID0+IHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgZXhwYW5kZWRSb3dLZXlzOiBleHBhbmRlZFJvd0tleXNQcm9wLCBvbkV4cGFuZENoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZXhwYW5kZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qga2V5cyA9IFsuLi5leHBhbmRlZFJvd0tleXNdXG4gICAgY29uc3QgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBrZXlzLnNwbGljZShpbmRleCwgMSlcbiAgICB9IGVsc2Uge1xuICAgICAga2V5cy5wdXNoKGtleSlcbiAgICB9XG4gICAgaWYgKGV4cGFuZGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZFJvd0tleXM6IGtleXMgfSlcbiAgICB9XG4gICAgaWYgKG9uRXhwYW5kQ2hhbmdlKSB7XG4gICAgICBvbkV4cGFuZENoYW5nZShrZXlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgInmi6nooYxcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVTZWxlY3QgPSAoa2V5OiBSZWFjdC5SZWFjdFRleHQsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wLFxuICAgICAgc2VsZWN0TXVsdGlwbGUsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBrZXlzID0gWy4uLnNlbGVjdGVkUm93S2V5c11cbiAgICBpZiAoc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLnNwbGljZShzZWxlY3RlZFJvd0tleXMuaW5kZXhPZihrZXkpLCAxKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gW2tleV1cbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGtleXMsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3RDaGFuZ2UpIHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAieaLqeihjOWFqOmAieaTjeS9nFxuICAgKi9cbiAgcHVibGljIGhhbmRsZVNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdENoYW5nZSwgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBrZXlzID0gWy4uLnNlbGVjdGVkUm93S2V5c11cbiAgICBjb25zdCBhdmFpbGFibGVLZXlzID0gdGhpcy5nZXRBdmFpbGFibGVSb3dzS2V5cygpXG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGF2YWlsYWJsZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDkuI3og73nm7TmjqXmuIXnqbrmlbDnu4TvvIzlm6DkuLrlj6/og73kvKDlhaXkuobkuI7lvZPliY0gZGF0YVNvdXJjZSDml6DlhbPnmoQga2V5c++8m1xuICAgICAgLy8g5Lmf5LiN6IO955u05o6lIHNwbGljZe+8jOWboOS4uuimgeajgOafpeaYr+WQpiBnZXRTZWxlY3RQcm9wcy5kaXNhYmxlZOOAglxuICAgICAgc2VsZWN0ZWRSb3dLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoYXZhaWxhYmxlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAga2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKGtleSksIDEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBrZXlzLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG9uU2VsZWN0Q2hhbmdlKSB7XG4gICAgICBvblNlbGVjdENoYW5nZShrZXlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDliKTmlq3mmK/lkKblt7Llhajpg6jpgInmi6lcbiAgICovXG4gIHB1YmxpYyBoYXNTZWxlY3RlZEFsbCA9ICgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5nZXRBdmFpbGFibGVSb3dzS2V5cygpXG4gICAgY29uc3QgeyBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoXG4gICAgICBkYXRhU291cmNlICYmXG4gICAgICBkYXRhU291cmNlLmxlbmd0aCAmJlxuICAgICAga2V5cy5sZW5ndGggJiZcbiAgICAgIGtleXMuZXZlcnkoKGtleSkgPT4gc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdmFpbGFibGVSb3dzS2V5cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGdldFNlbGVjdFByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qga2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKCFkYXRhU291cmNlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgZGF0YVNvdXJjZS5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSByb3dcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGtleSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAhKFxuICAgICAgICAgIGdldFNlbGVjdFByb3BzICYmXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKSAmJlxuICAgICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkuZGlzYWJsZWRcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4ga2V5c1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGV4cGFuZEljb25WaXNpYmxlLFxuICAgICAgZXhwYW5kZWRSb3dSZW5kZXIsXG4gICAgICBleHBhbmRPblJvd0NsaWNrLFxuICAgICAgZ2V0SGVhZENsYXNzTmFtZSxcbiAgICAgIGdldEhlYWRTdHlsZSxcbiAgICAgIGdldFJvd0NsYXNzTmFtZSxcbiAgICAgIGdldFJvd1N0eWxlLFxuICAgICAgZ2V0U2VsZWN0UHJvcHMsXG4gICAgICBoZWFkZXJBZmZpeGVkLFxuICAgICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcCxcbiAgICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblJvd01vdXNlRW50ZXIsXG4gICAgICBvblJvd01vdXNlTGVhdmUsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHNlbGVjdE11bHRpcGxlLFxuICAgICAgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgIHNpemUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgdmlydHVhbExpc3RQcm9wcyxcbiAgICAgIHZpcnR1YWxMaXN0U3R5bGUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBhZmZpeGVkVG9wLFxuICAgICAgYWZmaXhlZEJvdHRvbSxcbiAgICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgIG1haW5UYWJsZVN0eWxlLFxuICAgICAgcmVzaXplZCxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3Qge1xuICAgICAgZ2V0Q29sdW1ucyxcbiAgICAgIC8vIGdldExlZnRDb2x1bW5zV2lkdGgsXG4gICAgICBnZXRHcm91cENvbHVtbnNEZXB0aCxcbiAgICAgIGlzQW55Q29sdW1uc0xlZnRGaXhlZCxcbiAgICB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpIGFzIElDb2x1bW5Qcm9wczxUPltdXG5cbiAgICBjb25zdCB0aGVhZFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgaGVpZ2h0OiBgJHtURF9IRUlHSFRbc2l6ZSB8fCBcInNtYWxsXCJdICogZ2V0R3JvdXBDb2x1bW5zRGVwdGgoKX1weGAsXG4gICAgICAuLi4oKGdldEhlYWRTdHlsZSAmJiBnZXRIZWFkU3R5bGUoKSkgfHwge30pLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWxleW8gOihjOWSjOmAieaLqeihjOaXtu+8jHRoZWFk5ZKM5q+P6KGM55qE56ys5LiA5YiX5YmN6YO96KaB5Yqg5YWl5LiA5YiXXG4gICAgICog5q2k5YiX5Lmf5Lya5b2x5ZONIHN0aWNreSDnmoTlgY/np7vkvY3nva5cbiAgICAgKi9cbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuXG4gICAgY29uc3QgdGhlYWQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17MH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGAke3ByZWZpeH0tdGhlYWRgLFxuICAgICAgICAgIGdldEhlYWRDbGFzc05hbWUgJiYgZ2V0SGVhZENsYXNzTmFtZSgpXG4gICAgICAgICl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVUaGVhZE1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUaGVhZE1vdXNlTGVhdmV9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRoZWFkXCIpfVxuICAgICAgICBzdHlsZT17dGhlYWRTdHlsZX1cbiAgICAgID5cbiAgICAgICAge3RoZWFkUGxhY2Vob2xkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIGAke3ByZWZpeH0tdGhfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdGBdOiBpc0FueUNvbHVtbnNMZWZ0Rml4ZWQoKSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PVwiZnVuY3Rpb25hbC1hbGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RNdWx0aXBsZSAmJiAhIW9uU2VsZWN0Q2hhbmdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKCkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5oYXNTZWxlY3RlZEFsbCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbGlnbixcbiAgICAgICAgICAgIGRhdGFJbmRleCxcbiAgICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgICBmaXhlZCxcbiAgICAgICAgICAgIG9uRmlsdGVyLFxuICAgICAgICAgICAgb25Tb3J0LFxuICAgICAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICB9ID0gY29sXG5cbiAgICAgICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAgICAgICAhIW9uU29ydCB8fFxuICAgICAgICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICAgICAgICEhZmlsdGVyc1xuICAgICAgICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtaW5XaWR0aCA9XG4gICAgICAgICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKlxuICAgICAgICAgICAgICAgIDEzICtcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgICAgICAgICAgbWluV2lkdGggKz0gMjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGZsZXhWYWx1ZVxuICAgICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRofSAwIGF1dG9gXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aC5sZW5ndGggLSB3aWR0aC5sYXN0SW5kZXhPZihcInB4XCIpID09PSAyKSB7XG4gICAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRoLnNsaWNlKDAsIC0yKX0gMCBhdXRvYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmxleFZhbHVlID0gYDAgMCAke3dpZHRofWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7TWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCl9IDAgYXV0b2BcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogdGggbGVmdCDlgLzvvJrlj5blvpcgcmVzaXplLW9ic2VydmVyIOWtmOWCqOeahOivpeWIl+eahOWBj+enu+mHj++8jOWKoOS4iuWmguaenOaciemAieaLqeihjOOAgeWxleW8gOihjOaXtueahCBTRUxFQ1RfVERfV0lEVEgg4oCU4oCUIOS7heWvuSBsZWZ0IOacieaViFxuICAgICAgICAgICAqIHRoIHJpZ2h0IOWAvO+8muWPluW+lyByZXNpemUtb2JzZXJ2ZXIg5a2Y5YKo55qE6K+l5YiX55qE5YGP56e76YeP77yM5Yqg5LiK5aaC5p6c5YaF5rua5Yqo5pe255qE5rua5Yqo5p2h5a695bqm77yIMTTvvIkg4oCU4oCUIOS7heWvuSByaWdodCDmnInmlYhcbiAgICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAgICAgIG9uUmVzaXplPXsoeyB3aWR0aDogd2lkdGhSZXNpemUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGhSZXNpemUod2lkdGhSZXNpemUsIGRhdGFJbmRleCwgaW5kZXgsIGZpeGVkKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZpeGVkfVxuICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06IGNsaWNrYWJsZSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2xlZnRgXTogaXNGaXhlZExlZnQoY29sKSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0YF06IGlzRml4ZWRSaWdodChjb2wpLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICAgICAgICAgICk/LmlzTGFzdExlZnQsXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgaW5kZXh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGlzRml4ZWRMZWZ0KGNvbClcbiAgICAgICAgICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAodGhlYWRQbGFjZWhvbGRlclZpc2libGUgPyBTRUxFQ1RfVERfV0lEVEggOiAwKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBpc0ZpeGVkUmlnaHQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAgICAgICAgIChpc01haW5UYWJsZU92ZXJmbG93WSAmJiBoZWlnaHQgPyAxNCA6IDApXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgZmxleDogcmVzaXplZENvbCA/IGAke3Jlc2l6ZWRDb2wudmFsdWV9IDAgYXV0b2AgOiBmbGV4VmFsdWUsXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogcmVzaXplZENvbCA/IHJlc2l6ZWRDb2wudmFsdWUgOiB3aWR0aCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBhbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogcmVzaXplZENvbFxuICAgICAgICAgICAgICAgICAgICA/IHJlc2l6ZWRDb2wudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiB3aWR0aCB8fCBNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRhdGEtY29sdW1uPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGNvbCwgeyBpbmRleCwgY29sdW1ucyB9KX1cbiAgICAgICAgICAgICAgICB7Y29sLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRoR3JvdXBgfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKGNoaWxkQ29sOiBJQ29sdW1uUHJvcHM8VD4sIGNoaWxkQ29sSW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wub25Tb3J0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRDb2wuc29ydE9yZGVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5vbkZpbHRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5maWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZENvbC5kYXRhSW5kZXggfHwgY2hpbGRDb2xJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjEwMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2hpbGRDb2wuYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChjaGlsZENvbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZENvbC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGhHcm91cGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkQ29sLmNoaWxkcmVuLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sOiBJQ29sdW1uUHJvcHM8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDb2xJbmRleDogbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLm9uU29ydCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChncmFuZENvbC5zb3J0T3JkZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZ3JhbmRDb2wub25GaWx0ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z3JhbmRDb2wuZGF0YUluZGV4IHx8IGdyYW5kQ29sSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjEwMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBncmFuZENvbC5hbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGdyYW5kQ29sKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZXNpemVPYnNlcnZlcj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgZ2VuZXJhdGVUcnMgPSAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgICBjb25zdCBjb2xBcnJheTogYW55ID0gW11cbiAgICAgIGNvbnN0IHNlbGVjdFByb3BzR2V0dGVkID0gZ2V0U2VsZWN0UHJvcHMgJiYgZ2V0U2VsZWN0UHJvcHMocm93LCByb3dJbmRleClcbiAgICAgIGNvbnN0IGFsbFNlbGVjdFByb3BzID0ge1xuICAgICAgICBjaGVja2VkOiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGAsXG4gICAgICAgIG9uQ2hhbmdlOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3Qoa2V5LCBjaGVja2VkKSxcbiAgICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCksXG4gICAgICAgIC4uLihzZWxlY3RQcm9wc0dldHRlZCB8fCB7fSksXG4gICAgICB9XG4gICAgICBjb25zdCBzZWxlY3RQcm9wcyA9IG9taXQoYWxsU2VsZWN0UHJvcHMsIFtcInBvcG92ZXJQcm9wc1wiXSlcbiAgICAgIGNvbnN0IHNlbGVjdENlbGwgPSBvbkV4cGFuZENoYW5nZSA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWxlY3RDb21wb25lbnRgfVxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUV4cGFuZChrZXkpfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17YCR7cHJlZml4fS1leHBhbmRJY29uYH0gaWNvbj1cImFycm93LWRvd25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBzZWxlY3RNdWx0aXBsZSA/IChcbiAgICAgICAgPENoZWNrYm94IHsuLi5zZWxlY3RQcm9wc30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxSYWRpbyB7Li4uc2VsZWN0UHJvcHN9IC8+XG4gICAgICApXG4gICAgICBjb25zdCBnZW5lcmF0ZVRyID0gKGNvbHVtbnNQYXJhbTogYW55W10sIHBhcmVudEluZGV4PzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbHVtbnNQYXJhbS5mb3JFYWNoKChjb2wsIGNvbEluZGV4UGFyYW0pID0+IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiDlpoLmnpzliY3pnaIg55qEIGNvbCDmnIkgY2hpbGRyZW7vvIzliJnopoHmioogY2hpbGRyZW4ubGVuZ3RoIOmineWkluWKoOWIsCBjb2xJbmRleFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxldCBjb2xJbmRleCA9IGNvbEluZGV4UGFyYW1cbiAgICAgICAgICBpZiAocGFyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50SW5kZXg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbkNvdW50ID0gY29sdW1uc1tpXS5jaGlsZHJlbj8ubGVuZ3RoIHx8IDFcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuQ291bnQpIHtcbiAgICAgICAgICAgICAgICBjb2xJbmRleCArPSBjaGlsZHJlbkNvdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjb2wuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbEFycmF5LnB1c2godGhpcy5nZW5lcmF0ZVRib2R5Q2VsbChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2VuZXJhdGVUcihjb2wuY2hpbGRyZW4sIGNvbEluZGV4UGFyYW0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZ2VuZXJhdGVUcihjb2x1bW5zKVxuICAgICAgY29uc3QgdHIgPSAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICBgJHtwcmVmaXh9LXRyYCxcbiAgICAgICAgICAgIGdldFJvd0NsYXNzTmFtZSAmJiBnZXRSb3dDbGFzc05hbWUocm93LCByb3dJbmRleCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRyX2NsaWNrYWJsZWBdOiBleHBhbmRPblJvd0NsaWNrIHx8IHNlbGVjdE9uUm93Q2xpY2ssXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRyX2V4cGFuZGVkYF06IGV4cGFuZGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10cl9zZWxlY3RlZGBdOiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAgIGtleT17a2V5IHx8IHJvd0luZGV4fVxuICAgICAgICAgIHJvbGU9XCJyb3dcIlxuICAgICAgICAgIGRhdGEtcm93PXtyb3dJbmRleH1cbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e1xuICAgICAgICAgICAgb25Sb3dNb3VzZUVudGVyXG4gICAgICAgICAgICAgID8gKGUpID0+IG9uUm93TW91c2VFbnRlcihyb3csIHJvd0luZGV4LCBlKVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e1xuICAgICAgICAgICAgb25Sb3dNb3VzZUxlYXZlXG4gICAgICAgICAgICAgID8gKGUpID0+IG9uUm93TW91c2VMZWF2ZShyb3csIHJvd0luZGV4LCBlKVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVSb3dDbGljayhyb3csIHJvd0luZGV4LCBlKX1cbiAgICAgICAgICBvbktleURvd249e25vb3B9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLigoZ2V0Um93U3R5bGUgJiYgZ2V0Um93U3R5bGUocm93LCByb3dJbmRleCkpIHx8IHt9KSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RoZWFkUGxhY2Vob2xkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGRgLCBgJHtwcmVmaXh9LXRkX2Z1bmN0aW9uYWxgLCB7XG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdGBdOiBpc0FueUNvbHVtbnNMZWZ0Rml4ZWQoKSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGtleT1cImZ1bmN0aW9uYWxcIlxuICAgICAgICAgICAgICByb2xlPVwiY2VsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IHZlcnRpY2FsQWxpZ24gJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnbl0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RQcm9wc0dldHRlZD8ucG9wb3ZlclByb3BzPy5wb3B1cCA/IChcbiAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC4xfVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi4oXG4gICAgICAgICAgICAgICAgICAgICAgKGdldFNlbGVjdFByb3BzICYmIGdldFNlbGVjdFByb3BzKHJvdywgcm93SW5kZXgpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICkucG9wb3ZlclByb3BzfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0Q2VsbH1cbiAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2VsbFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y29sQXJyYXl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgaWYgKG9uRXhwYW5kQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdHIsXG4gICAgICAgICAgZXhwYW5kZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1leHBhbmRSb3dgfSBrZXk9XCJ0ci1leHBhbmRcIj5cbiAgICAgICAgICAgICAgeyEhZXhwYW5kZWRSb3dSZW5kZXIgJiYgZXhwYW5kZWRSb3dSZW5kZXIocm93LCByb3dJbmRleCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRyXG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIGhlYWRlckFmZml4ZWQgPyAoXG4gICAgICAgIDxBZmZpeFxuICAgICAgICAgIGtleT17MH1cbiAgICAgICAgICBvZmZzZXRUb3A9e2hlYWRlckFmZml4ZWRPZmZzZXRUb3B9XG4gICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLndyYXBwZXJ9XG4gICAgICAgICAgZ2V0VGFyZ2V0PXtoZWFkZXJBZmZpeEdldFRhcmdldH1cbiAgICAgICAgICBvbkNoYW5nZT17KGJvb2wpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZmZpeGVkVG9wOiBib29sIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgLy8g5Zu65a6a55qE6YKj5LiA5Yi75Lmf6ZyA6KaB56uL5Y2z6YeN5paw5a6a5L2N44CCXG4gICAgICAgICAgICAgIC8vIOmHjeaWsOWumuS9jeOAgeWMheaLrOS4i+mdoueahCBjbGFzc05hbWUsIHN0eWxlIOWPquWcqOS4u+ihqOagvOS4iuWPkeeUn++8jOWboOS4uuWbuuWumuWIl+eahCBBZmZpeCDooYzkuLrlvojljZXnuq/jgIJcbiAgICAgICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGwoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXthZmZpeGVkVG9wID8gYCR7cHJlZml4fS1hZmZpeGAgOiBcIlwifVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAuLi4oYWZmaXhlZFRvcCA/IG1haW5UYWJsZVN0eWxlIDoge30pLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJhZmZpeEhlYWRlclwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVhZH1cbiAgICAgICAgPC9BZmZpeD5cbiAgICAgICkgOiAoXG4gICAgICAgIHRoZWFkXG4gICAgICApLFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9ezF9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10Ym9keWB9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRhYmxlQm9keVwiKX1cbiAgICAgID5cbiAgICAgICAgeyF2aXJ0dWFsU2Nyb2xsICYmXG4gICAgICAgICAgZGF0YVNvdXJjZSAmJlxuICAgICAgICAgICEhZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgICAgICBkYXRhU291cmNlLm1hcCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgfSl9XG4gICAgICAgIHt2aXJ0dWFsU2Nyb2xsICYmIGRhdGFTb3VyY2UgJiYgISFkYXRhU291cmNlLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGRhdGE9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICBpdGVtS2V5PVwiZGF0YUluZGV4XCJcbiAgICAgICAgICAgIGhlaWdodD17KGhlaWdodCB8fCA0MDApIC0gNDB9XG4gICAgICAgICAgICBpdGVtSGVpZ2h0PXs0Mn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS12aXJ0dWFsLXdyYXBwZXJgfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4udmlydHVhbExpc3RTdHlsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB7Li4udmlydHVhbExpc3RQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUcnMocm93LCByb3dJbmRleClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+LFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1ggJiYgaGVhZGVyQWZmaXhlZCAmJiAoXG4gICAgICAgIDxBZmZpeFxuICAgICAgICAgIGtleT17Mn1cbiAgICAgICAgICBvZmZzZXRCb3R0b209ezB9XG4gICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLm1haW5UYWJsZUJvZHl9XG4gICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJhZmZpeFNjcm9sbGJhclwiKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1hZmZpeFNjcm9sbGJhcmAsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWFmZml4U2Nyb2xsYmFyX3Nob3dgXTogYWZmaXhlZEJvdHRvbSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgLi4ubWFpblRhYmxlU3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblNjcm9sbD17KGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT5cbiAgICAgICAgICAgIHRoaXMuc3luY1RhYmxlU2Nyb2xsUG9zaXRpb24oZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoYm9vbCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFmZml4ZWRCb3R0b206IGJvb2wgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiB0aGlzLm1haW5UYWJsZT8uc2Nyb2xsV2lkdGggfX0gLz5cbiAgICAgICAgPC9BZmZpeD5cbiAgICAgICksXG4gICAgXVxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVGhDZWxsID0gKGNvbDogSUNvbHVtblByb3BzPFQ+LCBvcHRpb25zPzogSUJhc2VPYmplY3QpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGlnbixcbiAgICAgIGNvbHVtbnNSZXNpemFibGUsXG4gICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZSxcbiAgICAgIGdldEhlYWRDZWxsU3R5bGUsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHJlc2l6YWJsZTogY29sUmVzaXphYmxlIH0gPSBjb2xcbiAgICBsZXQgcmVzaXphYmxlID0gdHJ1ZVxuICAgIGlmICh0eXBlb2YgY29sUmVzaXphYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmVzaXphYmxlID0gY29sUmVzaXphYmxlXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29sdW1uc1Jlc2l6YWJsZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJlc2l6YWJsZSA9IGNvbHVtbnNSZXNpemFibGVcbiAgICB9XG5cbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nLCBpc1Jlc2l6ZXJTaG93IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBpc0xhc3RUaCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbmRleCA9PT0gb3B0aW9ucy5jb2x1bW5zLmxlbmd0aCAtIDFcblxuICAgIGNvbnN0IHRoQ2VsbCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGAke3ByZWZpeH0tY2VsbGAsXG4gICAgICAgICAgZ2V0SGVhZENlbGxDbGFzc05hbWUgJiZcbiAgICAgICAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lKGNvbCwgb3B0aW9ucyA/IG9wdGlvbnMuaW5kZXggOiB1bmRlZmluZWQpXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6XG4gICAgICAgICAgICAoY29sLmFsaWduICYmIEhPUklaT05UQUxfQUxJR05bY29sLmFsaWduXSkgfHxcbiAgICAgICAgICAgIChhbGlnbiAmJiBIT1JJWk9OVEFMX0FMSUdOW2FsaWduXSkgfHxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAuLi4oKGdldEhlYWRDZWxsU3R5bGUgJiZcbiAgICAgICAgICAgIGdldEhlYWRDZWxsU3R5bGUoY29sLCBvcHRpb25zID8gb3B0aW9ucy5pbmRleCA6IHVuZGVmaW5lZCkpIHx8XG4gICAgICAgICAgICB7fSksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHshY29sLm9uU29ydCAmJlxuICAgICAgICAgIChjb2wuc29ydE9yZGVyID09PSBudWxsIHx8IGNvbC5zb3J0T3JkZXIgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICAhY29sLm9uRmlsdGVyICYmXG4gICAgICAgICAgIWNvbC5maWx0ZXJzICYmXG4gICAgICAgICAgY29sLnRpdGxlfVxuICAgICAgICB7KCEhY29sLm9uU29ydCB8fFxuICAgICAgICAgIChjb2wuc29ydE9yZGVyICE9PSBudWxsICYmIGNvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkpICYmIChcbiAgICAgICAgICA8VGFibGVTb3J0XG4gICAgICAgICAgICBvblNvcnQ9eyhvcmRlcikgPT4gKGNvbC5vblNvcnQgPyBjb2wub25Tb3J0KG9yZGVyKSA6IHt9KX1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17Y29sLnNvcnRPcmRlcn1cbiAgICAgICAgICAgIHRpdGxlPXtjb2wudGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyghIWNvbC5vbkZpbHRlciB8fCAhIWNvbC5maWx0ZXJzKSAmJiAoXG4gICAgICAgICAgPFRhYmxlRmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlPXtjb2wuZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgICAgIGZpbHRlclZpc2libGU9e2NvbC5maWx0ZXJWaXNpYmxlfVxuICAgICAgICAgICAgZmlsdGVyTXVsdGlwbGU9e2NvbC5maWx0ZXJNdWx0aXBsZX1cbiAgICAgICAgICAgIGZpbHRlclBvcG92ZXJQcm9wcz17Y29sLmZpbHRlclBvcG92ZXJQcm9wc31cbiAgICAgICAgICAgIGZpbHRlcnM9e2NvbC5maWx0ZXJzfVxuICAgICAgICAgICAgb25GaWx0ZXI9eyhmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNvbC5vbkZpbHRlcikge1xuICAgICAgICAgICAgICAgIGNvbC5vbkZpbHRlcihmaWx0ZXIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkZpbHRlclZpc2libGVDaGFuZ2U9eyh2aXNpYmxlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjb2wub25GaWx0ZXJWaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgY29sLm9uRmlsdGVyVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGl0bGU9e2NvbC50aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IWNvbC5maXhlZCAmJiByZXNpemFibGUgJiYgIWlzTGFzdFRoICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1yZXNpemVyYCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yZXNpemVyX3Nob3dgXTogaXNSZXNpemVyU2hvdyxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmVzaXplcl9jdXJyZW50YF06XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcuZGF0YUluZGV4ID09PSBjb2wuZGF0YUluZGV4LFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sKX1cbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgaWYgKGNvbC5wb3BvdmVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC4zfVxuICAgICAgICAgIHBsYWNlbWVudD17XG4gICAgICAgICAgICBjb2wuYWxpZ24gPT09IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPyBcInRvcFwiXG4gICAgICAgICAgICAgIDogY29sLmFsaWduID09PSBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgOiBcInRvcExlZnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbkVkZ2VcbiAgICAgICAgICBhcnJvd2VkXG4gICAgICAgICAgcG9wdXA9e2NvbC5wb3BvdmVyfVxuICAgICAgICA+XG4gICAgICAgICAge3RoQ2VsbH1cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhDZWxsXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYm9keUNlbGwgPSAoXG4gICAgcm93OiBULFxuICAgIGNlbGw6IElDb2x1bW5Qcm9wczxUPixcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNlbGxJbmRleDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduOiBhbGlnblByb3AsXG4gICAgICBleHBhbmRJY29uVmlzaWJsZSxcbiAgICAgIGdldENlbGxDbGFzc05hbWUsXG4gICAgICBnZXRDZWxsUHJvcHMsXG4gICAgICBnZXRDZWxsU3R5bGUsXG4gICAgICBvbkV4cGFuZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnblByb3AsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcsIGZpeGVkQ29sdW1uc0luZm9zLCByZXNpemVkIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qge1xuICAgICAgYWxpZ24sXG4gICAgICBkYXRhSW5kZXgsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgb25GaWx0ZXIsXG4gICAgICBvblNvcnQsXG4gICAgICByZW5kZXIsXG4gICAgICBzb3J0T3JkZXIsXG4gICAgICB0aXRsZSxcbiAgICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgICB3aWR0aCxcbiAgICB9ID0gY2VsbFxuICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAhIW9uU29ydCB8fFxuICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICEhZmlsdGVyc1xuICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtaW5XaWR0aCA9XG4gICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKiAxMyArIDE2XG4gICAgICBpZiAoY2xpY2thYmxlKSB7XG4gICAgICAgIG1pbldpZHRoICs9IDIwXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBmbGV4VmFsdWVcbiAgICBpZiAodHlwZW9mIHdpZHRoID09PSBcIm51bWJlclwiKSB7XG4gICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aH0gMCBhdXRvYFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAod2lkdGgubGVuZ3RoIC0gd2lkdGgubGFzdEluZGV4T2YoXCJweFwiKSA9PT0gMikge1xuICAgICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aC5zbGljZSgwLCAtMil9IDAgYXV0b2BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsZXhWYWx1ZSA9IGAwIDAgJHt3aWR0aH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsZXhWYWx1ZSA9IGAke01hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpfSAwIGF1dG9gXG4gICAgfVxuICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgY29uc3QgY2VsbENsYXNzTmFtZSA9XG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lICYmIGdldENlbGxDbGFzc05hbWUocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KVxuICAgIGNvbnN0IGNlbGxQcm9wcyA9XG4gICAgICAoZ2V0Q2VsbFByb3BzICYmIGdldENlbGxQcm9wcyhyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpKSB8fCB7fVxuICAgIGNvbnN0IGNlbGxTdHlsZSA9XG4gICAgICAoZ2V0Q2VsbFN0eWxlICYmIGdldENlbGxTdHlsZShyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpKSB8fCB7fVxuICAgIGNvbnN0IHsgcm93U3BhbiwgY29sU3BhbiwgLi4ub3RoZXJDZWxsUHJvcHMgfSA9IGNlbGxQcm9wc1xuICAgIGlmIChyb3dTcGFuIHx8IGNvbFNwYW4pIHtcbiAgICAgIHRoaXMuY29tYmluZWRDZWxsc0luZm8ucHVzaCh7XG4gICAgICAgIGNlbGwsXG4gICAgICAgIGNlbGxJbmRleCxcbiAgICAgICAgY29sU3BhbixcbiAgICAgICAgcm93LFxuICAgICAgICByb3dJbmRleCxcbiAgICAgICAgcm93U3BhbixcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRkYCwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX3Jlc2l6aW5nYF06XG4gICAgICAgICAgICBkYXRhSW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcuZGF0YUluZGV4ID09PSBkYXRhSW5kZXgsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdGBdOiBpc0ZpeGVkTGVmdChjZWxsKSxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodGBdOiBpc0ZpeGVkUmlnaHQoY2VsbCksXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICk/LmlzRmlyc3RSaWdodCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9jb21iaW5lZGBdOiByb3dTcGFuIHx8IGNvbFNwYW4sXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBjZWxsSW5kZXh9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY2VsbClcbiAgICAgICAgICAgID8gKGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgKyAodGhlYWRQbGFjZWhvbGRlclZpc2libGUgPyBTRUxFQ1RfVERfV0lEVEggOiAwKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcmlnaHQ6IGlzRml4ZWRSaWdodChjZWxsKVxuICAgICAgICAgICAgPyBmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KT8ub2Zmc2V0XG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmbGV4OiByZXNpemVkQ29sID8gYCR7cmVzaXplZENvbC52YWx1ZX0gMCBhdXRvYCA6IGZsZXhWYWx1ZSxcbiAgICAgICAgICB3aWR0aDogcmVzaXplZENvbFxuICAgICAgICAgICAgPyByZXNpemVkQ29sLnZhbHVlXG4gICAgICAgICAgICA6IHdpZHRoIHx8IE1hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpLFxuICAgICAgICAgIG1heFdpZHRoOiByZXNpemVkQ29sID8gcmVzaXplZENvbC52YWx1ZSA6IHdpZHRoIHx8IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICBkYXRhLWNvbHVtbj17Y2VsbEluZGV4fVxuICAgICAgICB7Li4ub3RoZXJDZWxsUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1jZWxsYCwgY2VsbENsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XG4gICAgICAgICAgICAgICh2ZXJ0aWNhbEFsaWduICYmIFZFUlRJQ0FMX0FMSUdOW3ZlcnRpY2FsQWxpZ25dKSB8fFxuICAgICAgICAgICAgICAodmVydGljYWxBbGlnblByb3AgJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnblByb3BdKSB8fFxuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICAgICAgKGFsaWduICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25dKSB8fFxuICAgICAgICAgICAgICAoYWxpZ25Qcm9wICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25Qcm9wXSkgfHxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgLi4uY2VsbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsSW5uZXJgfT5cbiAgICAgICAgICAgIHtyZW5kZXIgPyByZW5kZXIocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KSA6IHJvd1tkYXRhSW5kZXhdfVxuICAgICAgICAgICAgeyhyb3dTcGFuIHx8IGNvbFNwYW4pICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsX2NvbWJpbmVkYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDb21iaW5lZENlbGxTdHlsZShcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4LFxuICAgICAgICAgICAgICAgICAgICByb3dTcGFuLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBhbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJcbiAgICAgICAgICAgICAgICAgID8gcmVuZGVyKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleClcbiAgICAgICAgICAgICAgICAgIDogcm93W2RhdGFJbmRleF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tYmluZWRDZWxsU3R5bGUgPSAoXG4gICAgXzogSUJhc2VPYmplY3QsXG4gICAgX186IElDb2x1bW5Qcm9wczxUPixcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXIsXG4gICAgcm93U3BhbjogbnVtYmVyLFxuICAgIGNvbFNwYW46IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCBnZXRUYWJsZUNlbGwgPSAocm93SW5kZXhQYXJhbTogbnVtYmVyLCBjb2xJbmRleFBhcmFtOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLm1haW5UYWJsZSkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLm1haW5UYWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInJvd1wiXScpW1xuICAgICAgICAgIHJvd0luZGV4UGFyYW1cbiAgICAgICAgXVxuICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgcmV0dXJuIHJvdy5jaGlsZHJlbltjb2xJbmRleFBhcmFtXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBjb25zdCBjZWxsID0gZ2V0VGFibGVDZWxsKHJvd0luZGV4LCBjb2xJbmRleClcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHt9XG4gICAgaWYgKHJvd1NwYW4gPCAyIHx8IHR5cGVvZiByb3dTcGFuID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICBzdHlsZS5oZWlnaHQgPSBcImNhbGMoMTAwJSAtIDFweClcIlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbmRDZWxsID0gZ2V0VGFibGVDZWxsKHJvd0luZGV4ICsgcm93U3BhbiAtIDEsIGNvbEluZGV4KVxuICAgICAgaWYgKGNlbGwgJiYgZW5kQ2VsbCkge1xuICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZW5kQ2VsbFJlY3QgPSBlbmRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7XG4gICAgICAgICAgZW5kQ2VsbFJlY3QuaGVpZ2h0ICsgZW5kQ2VsbFJlY3QudG9wIC0gY2VsbFJlY3QudG9wIC0gMVxuICAgICAgICB9cHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbFNwYW4gPCAyIHx8IHR5cGVvZiBjb2xTcGFuID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICBzdHlsZS53aWR0aCA9IFwiY2FsYygxMDAlIC0gMXB4KVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZENlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXgsIGNvbEluZGV4ICsgY29sU3BhbiAtIDEpXG4gICAgICBpZiAoY2VsbCAmJiBlbmRDZWxsKSB7XG4gICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCBlbmRDZWxsUmVjdCA9IGVuZENlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgICBzdHlsZS53aWR0aCA9IGAke1xuICAgICAgICAgIGVuZENlbGxSZWN0LndpZHRoICsgZW5kQ2VsbFJlY3QubGVmdCAtIGNlbGxSZWN0LmxlZnQgLSAxXG4gICAgICAgIH1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVcbiAgfVxuXG4gIHB1YmxpYyBzYXZlUmVmID0gKFxuICAgIG5hbWU/OlxuICAgICAgfCBcImFmZml4SGVhZGVyXCJcbiAgICAgIHwgXCJhZmZpeFNjcm9sbGJhclwiXG4gICAgICB8IFwibWFpblRhYmxlXCJcbiAgICAgIHwgXCJtYWluVGFibGVCb2R5XCJcbiAgICAgIHwgXCJtYWluVGhlYWRcIlxuICAgICAgfCBcIndyYXBwZXJcIlxuICApID0+IChub2RlOiBhbnkpID0+IHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgdGhpc1tuYW1lXSA9IG5vZGVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRhdGFTb3VyY2UsXG4gICAgICBlbXB0eVRleHQsXG4gICAgICBoZWFkZXJBZmZpeGVkLFxuICAgICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcCxcbiAgICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0LFxuICAgICAgaGVhZGVyRW1waGFzaXplZCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBzaXplLFxuICAgICAgdmlydHVhbFNjcm9sbCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgcmVzdFByb3BzID0gb21pdChvdGhlclByb3BzLCBbXG4gICAgICBcImFsaWduXCIsXG4gICAgICBcImNoaWxkcmVuXCIsXG4gICAgICBcImNvbHVtbnNcIixcbiAgICAgIFwiY29sdW1uc1Jlc2l6YWJsZVwiLFxuICAgICAgXCJkZWZhdWx0RXhwYW5kZWRSb3dLZXlzXCIsXG4gICAgICBcImRlZmF1bHRTZWxlY3RlZFJvd0tleXNcIixcbiAgICAgIFwiZXhwYW5kSWNvblZpc2libGVcIixcbiAgICAgIFwiZXhwYW5kT25Sb3dDbGlja1wiLFxuICAgICAgXCJleHBhbmRlZFJvd0tleXNcIixcbiAgICAgIFwiZXhwYW5kZWRSb3dSZW5kZXJcIixcbiAgICAgIFwiZ2V0Q2VsbENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRDZWxsUHJvcHNcIixcbiAgICAgIFwiZ2V0Q2VsbFN0eWxlXCIsXG4gICAgICBcImdldEhlYWRDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0SGVhZFN0eWxlXCIsXG4gICAgICBcImdldEhlYWRDZWxsQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldEhlYWRDZWxsU3R5bGVcIixcbiAgICAgIFwiZ2V0Um93Q2xhc3NOYW1lXCIsXG4gICAgICBcImdldFJvd1N0eWxlXCIsXG4gICAgICBcImdldFNlbGVjdFByb3BzXCIsXG4gICAgICBcIm9uRXhwYW5kQ2hhbmdlXCIsXG4gICAgICBcIm9uU2VsZWN0Q2hhbmdlXCIsXG4gICAgICBcIm9uU2Nyb2xsXCIsXG4gICAgICBcIm9uUm93Q2xpY2tcIixcbiAgICAgIFwib25Sb3dNb3VzZUVudGVyXCIsXG4gICAgICBcIm9uUm93TW91c2VMZWF2ZVwiLFxuICAgICAgXCJzZWxlY3RNdWx0aXBsZVwiLFxuICAgICAgXCJzZWxlY3RlZFJvd0tleXNcIixcbiAgICAgIFwic2VsZWN0T25Sb3dDbGlja1wiLFxuICAgICAgXCJ2ZXJ0aWNhbEFsaWduXCIsXG4gICAgICBcInZpcnR1YWxMaXN0UHJvcHNcIixcbiAgICAgIFwidmlydHVhbExpc3RTdHlsZVwiLFxuICAgIF0pXG5cbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpc01haW5UYWJsZU92ZXJmbG93WCwgaXNNYWluVGFibGVPdmVyZmxvd1kgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgdGhpcy5jb2x1bW5NYW5hZ2VyLnJlc2V0KGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGNvbnN0IHsgZ2V0R3JvdXBDb2x1bW5zRGVwdGggfSA9IHRoaXMuY29sdW1uTWFuYWdlclxuXG4gICAgY29uc3QgZW1wdHkgPSAhKGRhdGFTb3VyY2UgJiYgZGF0YVNvdXJjZS5sZW5ndGgpXG5cbiAgICBjb25zdCBjbGFzc1NldCA9IGNsYXNzTmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBgJHtwcmVmaXh9LXdyYXBwZXJgLFxuICAgICAgYCR7cHJlZml4fS0ke3NpemV9YCxcbiAgICAgIHtcbiAgICAgICAgW2Ake3ByZWZpeH0taGVhZGVyRW1waGFzaXplZGBdOiBoZWFkZXJFbXBoYXNpemVkLFxuICAgICAgICBbYCR7cHJlZml4fS1lbXB0eWBdOiBlbXB0eSxcbiAgICAgICAgW2Ake3ByZWZpeH0tbG9hZGluZ2BdOiBsb2FkaW5nLFxuICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvdy14YF06IGlzTWFpblRhYmxlT3ZlcmZsb3dYLFxuICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvdy15YF06IGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgICBbYCR7cHJlZml4fS12aXJ0dWFsU2Nyb2xsYF06IHZpcnR1YWxTY3JvbGwsXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldH0gcmVmPXt0aGlzLnNhdmVSZWYoXCJ3cmFwcGVyXCIpfSB7Li4ucmVzdFByb3BzfT5cbiAgICAgICAgPEFuaW1hdGVcbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwiZmFkZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICB0b3A6IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl19cHhgLFxuICAgICAgICAgICAgekluZGV4OiBcImNhbGModmFyKC0tei1pbmRleC1hZmZpeCkgKyAyKVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bG9hZGluZyAmJlxuICAgICAgICAgICAgKGhlYWRlckFmZml4ZWQgPyAoXG4gICAgICAgICAgICAgIDxBZmZpeFxuICAgICAgICAgICAgICAgIG9mZnNldFRvcD17XG4gICAgICAgICAgICAgICAgICAoaGVhZGVyQWZmaXhlZE9mZnNldFRvcCB8fCAwKSArIFREX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLndyYXBwZXJ9XG4gICAgICAgICAgICAgICAgZ2V0VGFyZ2V0PXtoZWFkZXJBZmZpeEdldFRhcmdldH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICA8L0FmZml4PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tcHJvZ3Jlc3NgfT5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRhYmxlc2AsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWlubmVyU2Nyb2xsYF06ICEhaGVpZ2h0LFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0tb3ZlcmZsb3dlZGBdOiBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWhhc0ZpeGVkUmlnaHRDb2x1bW5zYF06IHRoaXMuY29sdW1uTWFuYWdlci5pc0FueUNvbHVtbnNSaWdodEZpeGVkKCksXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1heEhlaWdodDogaGVpZ2h0IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IGhlaWdodFxuICAgICAgICAgICAgICA/IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl0gKiBnZXRHcm91cENvbHVtbnNEZXB0aCgpfXB4YFxuICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1tYWluVGFibGVgfVxuICAgICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJtYWluVGFibGVcIil9XG4gICAgICAgICAgICByb2xlPVwidGFibGVcIlxuICAgICAgICAgICAgb25TY3JvbGw9e3RoaXMuaGFuZGxlTWFpblRhYmxlU2Nyb2xsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGFibGUoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtlbXB0eSAmJiA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wbGFjZWhvbGRlcmB9PntlbXB0eVRleHR9PC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlXG4iXX0=