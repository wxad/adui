function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import * as React from "react";
import PropTypes from "prop-types";
import Animate from "rc-animate";
import shallowEqual from "shallowequal";
import addEventListener from "rc-util/lib/Dom/addEventListener";
import List from "rc-virtual-list";
import { debounce } from "debounce";
import classNames from "classnames";
import omit from "../_util/omit";
import Column from "./Column";
import Affix from "../affix";
import Checkbox from "../checkbox";
import Icon from "../icon";
import Popover from "../popover";
import Radio from "../radio";
import ResizeObserver from "../resize-observer";
import TableSort from "./TableSort";
import TableFilter from "./TableFilter";
import ColumnManager from "./ColumnManager";
import "./style";

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
      return !shallowEqual(_this.props, nextProps) || !shallowEqual(_this.state, nextState);
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

        _this.resizeEvent = addEventListener(window, "resize", debouncedWindowResize);
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

      if (!shallowEqual(dataSourceOld, dataSource)) {
        setTimeout(_this.handleWindowResize, 0);
      }

      if (!shallowEqual(getCellPropsOld, getCellProps) && getCellProps) {
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

        if (!shallowEqual(mainTableStyle, oldStyle)) {
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
        className: classNames("".concat(prefix, "-thead"), getHeadClassName && getHeadClassName()),
        onMouseEnter: _this.handleTheadMouseEnter,
        onMouseLeave: _this.handleTheadMouseLeave,
        ref: _this.saveRef("mainThead"),
        style: theadStyle
      }, theadPlaceholderVisible && React.createElement("div", {
        className: classNames("".concat(prefix, "-th"), "".concat(prefix, "-th_functional"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "-th_left"), isAnyColumnsLeftFixed()), _defineProperty(_classNames, "".concat(prefix, "-th_functional_both"), selectAndExpand), _classNames)),
        key: "functional-all"
      }, selectMultiple && !!onSelectChange && React.createElement("div", {
        className: "".concat(prefix, "-cell")
      }, React.createElement(Checkbox, {
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

        return React.createElement(ResizeObserver, {
          onResize: function onResize(_ref2) {
            var widthResize = _ref2.width;

            _this.handleThResize(widthResize, dataIndex, index, fixed);
          },
          disabled: !fixed,
          key: dataIndex || index
        }, React.createElement("div", {
          className: classNames("".concat(prefix, "-th"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "-th_clickable"), clickable), _defineProperty(_classNames2, "".concat(prefix, "-th_left"), isFixedLeft(col)), _defineProperty(_classNames2, "".concat(prefix, "-th_right"), isFixedRight(col)), _defineProperty(_classNames2, "".concat(prefix, "-th_leftLast"), (_fixedColumnsInfos$fi = fixedColumnsInfos.find(function (o) {
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
            className: classNames("".concat(prefix, "-th"), _defineProperty({}, "".concat(prefix, "-th_clickable"), !!childCol.onSort || childCol.sortOrder !== null && childCol.sortOrder !== undefined || !!childCol.onFilter || !!childCol.filters)),
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
              className: classNames("".concat(prefix, "-th"), _defineProperty({}, "".concat(prefix, "-th_clickable"), !!grandCol.onSort || grandCol.sortOrder !== null && grandCol.sortOrder !== undefined || !!grandCol.onFilter || !!grandCol.filters)),
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

        var selectProps = omit(allSelectProps, ["popoverProps"]);
        var selectContent = selectMultiple ? React.createElement(Checkbox, selectProps) : React.createElement(Radio, selectProps);
        var expandContent = React.createElement("div", {
          className: "".concat(prefix, "-selectComponent"),
          style: {
            cursor: "pointer"
          },
          onClick: function onClick() {
            return _this.handleExpand(key);
          },
          role: "none"
        }, React.createElement(Icon, {
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
          className: classNames("".concat(prefix, "-tr"), getRowClassName && getRowClassName(row, rowIndex), (_classNames5 = {}, _defineProperty(_classNames5, "".concat(prefix, "-tr_clickable"), expandOnRowClick || selectOnRowClick), _defineProperty(_classNames5, "".concat(prefix, "-tr_expanded"), expandedRowKeys.includes(key)), _defineProperty(_classNames5, "".concat(prefix, "-tr_selected"), selectedRowKeys.includes(key)), _classNames5)),
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
          className: classNames("".concat(prefix, "-td"), "".concat(prefix, "-td_functional"), (_classNames6 = {}, _defineProperty(_classNames6, "".concat(prefix, "-td_left"), isAnyColumnsLeftFixed()), _defineProperty(_classNames6, "".concat(prefix, "-td_functional_both"), selectAndExpand), _classNames6)),
          key: "functional",
          role: "cell"
        }, React.createElement("div", {
          className: "".concat(prefix, "-cell"),
          style: {
            alignItems: verticalAlign && VERTICAL_ALIGN[verticalAlign]
          }
        }, selectPropsGetted !== null && selectPropsGetted !== void 0 && (_selectPropsGetted$po = selectPropsGetted.popoverProps) !== null && _selectPropsGetted$po !== void 0 && _selectPropsGetted$po.popup ? React.createElement(Popover, _extends({
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

      return [headerAffixed ? React.createElement(Affix, {
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
      }), virtualScroll && dataSource && !!dataSource.length && React.createElement(List, _extends({
        data: dataSource,
        itemKey: "dataIndex",
        height: (height || 400) - 40,
        itemHeight: 42,
        className: "".concat(prefix, "-virtual-wrapper"),
        style: _objectSpread({}, virtualListStyle)
      }, virtualListProps), function (row, rowIndex) {
        return generateTrs(row, rowIndex);
      })), isMainTableOverflowX && headerAffixed && React.createElement(Affix, {
        key: 2,
        offsetBottom: 0,
        getContainer: function getContainer() {
          return _this.mainTableBody;
        },
        ref: _this.saveRef("affixScrollbar"),
        className: classNames("".concat(prefix, "-affixScrollbar"), _defineProperty({}, "".concat(prefix, "-affixScrollbar_show"), affixedBottom)),
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
        className: classNames("".concat(prefix, "-cell"), getHeadCellClassName && getHeadCellClassName(col, options ? options.index : undefined)),
        style: _objectSpread({
          justifyContent: col.align && HORIZONTAL_ALIGN[col.align] || align && HORIZONTAL_ALIGN[align] || undefined
        }, getHeadCellStyle && getHeadCellStyle(col, options ? options.index : undefined) || {})
      }, !col.onSort && (col.sortOrder === null || col.sortOrder === undefined) && !col.onFilter && !col.filters && col.title, (!!col.onSort || col.sortOrder !== null && col.sortOrder !== undefined) && React.createElement(TableSort, {
        onSort: function onSort(order) {
          return col.onSort ? col.onSort(order) : {};
        },
        sortOrder: col.sortOrder,
        title: col.title
      }), (!!col.onFilter || !!col.filters) && React.createElement(TableFilter, {
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
        className: classNames("".concat(prefix, "-resizer"), (_classNames8 = {}, _defineProperty(_classNames8, "".concat(prefix, "-resizer_show"), isResizerShow), _defineProperty(_classNames8, "".concat(prefix, "-resizer_current"), currentlyResizing.dataIndex === col.dataIndex), _classNames8)),
        onMouseDown: function onMouseDown(e) {
          return _this.resizeColumnStart(e, col);
        },
        role: "none"
      }));

      if (col.popover) {
        return React.createElement(Popover, {
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
        className: classNames("".concat(prefix, "-td"), (_classNames9 = {}, _defineProperty(_classNames9, "".concat(prefix, "-td_resizing"), dataIndex !== undefined && currentlyResizing.dataIndex === dataIndex), _defineProperty(_classNames9, "".concat(prefix, "-td_left"), isFixedLeft(cell)), _defineProperty(_classNames9, "".concat(prefix, "-td_right"), isFixedRight(cell)), _defineProperty(_classNames9, "".concat(prefix, "-td_leftLast"), (_fixedColumnsInfos$fi5 = fixedColumnsInfos.find(function (o) {
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
        className: classNames("".concat(prefix, "-cell"), cellClassName),
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
    _this.columnManager = new ColumnManager(_columns || children);
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
    _this.debouncedWindowResize = debounce(_this.handleWindowResize, 100);
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

      var restProps = omit(otherProps, ["align", "children", "columns", "columnsResizable", "defaultExpandedRowKeys", "defaultSelectedRowKeys", "expandIconVisible", "expandOnRowClick", "expandedRowKeys", "expandedRowRender", "getCellClassName", "getCellProps", "getCellStyle", "getHeadClassName", "getHeadStyle", "getHeadCellClassName", "getHeadCellStyle", "getRowClassName", "getRowStyle", "getSelectProps", "onExpandChange", "onSelectChange", "onScroll", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "selectMultiple", "selectedRowKeys", "selectOnRowClick", "verticalAlign", "virtualListProps", "virtualListStyle"]);
      var _this$state5 = this.state,
          children = _this$state5.children,
          isMainTableOverflowX = _this$state5.isMainTableOverflowX,
          isMainTableOverflowY = _this$state5.isMainTableOverflowY;

      if (children) {
        this.columnManager.reset(children);
      }

      var getGroupColumnsDepth = this.columnManager.getGroupColumnsDepth;
      var empty = !(dataSource && dataSource.length);
      var classSet = classNames(className, "".concat(prefix, "-wrapper"), "".concat(prefix, "-").concat(size), (_classNames10 = {}, _defineProperty(_classNames10, "".concat(prefix, "-headerEmphasized"), headerEmphasized), _defineProperty(_classNames10, "".concat(prefix, "-empty"), empty), _defineProperty(_classNames10, "".concat(prefix, "-loading"), loading), _defineProperty(_classNames10, "".concat(prefix, "-overflow-x"), isMainTableOverflowX), _defineProperty(_classNames10, "".concat(prefix, "-overflow-y"), isMainTableOverflowY), _defineProperty(_classNames10, "".concat(prefix, "-virtualScroll"), virtualScroll), _classNames10));
      return React.createElement("div", _extends({
        className: classSet,
        ref: this.saveRef("wrapper")
      }, restProps), React.createElement(Animate, {
        component: "div",
        transitionName: "fade",
        style: {
          position: "relative",
          top: "".concat(TD_HEIGHT[size || "small"], "px"),
          zIndex: "calc(var(--z-index-affix) + 2)"
        }
      }, loading && (headerAffixed ? React.createElement(Affix, {
        offsetTop: (headerAffixedOffsetTop || 0) + TD_HEIGHT[size || "small"],
        getContainer: function getContainer() {
          return _this2.wrapper;
        },
        getTarget: headerAffixGetTarget,
        className: "".concat(prefix, "-progress")
      }, React.createElement("i", null), React.createElement("i", null)) : React.createElement("div", {
        className: "".concat(prefix, "-progress")
      }, React.createElement("i", null), React.createElement("i", null)))), React.createElement("div", {
        className: classNames("".concat(prefix, "-tables"), (_classNames11 = {}, _defineProperty(_classNames11, "".concat(prefix, "-innerScroll"), !!height), _defineProperty(_classNames11, "".concat(prefix, "-overflowed"), isMainTableOverflowY), _defineProperty(_classNames11, "".concat(prefix, "-hasFixedRightColumns"), this.columnManager.isAnyColumnsRightFixed()), _classNames11)),
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

Table.Column = Column;
Table.propTypes = {
  align: PropTypes.oneOf([null, "left", "center", "right"]),
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.array,
  columnsResizable: PropTypes.bool,
  dataSource: PropTypes.array,
  defaultExpandedRowKeys: PropTypes.array,
  defaultSelectedRowKeys: PropTypes.array,
  emptyText: PropTypes.node,
  expandIconVisible: PropTypes.bool,
  expandOnRowClick: PropTypes.bool,
  expandedRowKeys: PropTypes.array,
  expandedRowRender: PropTypes.func,
  getCellClassName: PropTypes.func,
  getCellProps: PropTypes.func,
  getCellStyle: PropTypes.func,
  getHeadClassName: PropTypes.func,
  getHeadStyle: PropTypes.func,
  getHeadCellClassName: PropTypes.func,
  getHeadCellStyle: PropTypes.func,
  getRowClassName: PropTypes.func,
  getRowStyle: PropTypes.func,
  getSelectProps: PropTypes.func,
  headerAffixed: PropTypes.bool,
  headerAffixedOffsetTop: PropTypes.number,
  headerAffixGetTarget: PropTypes.func,
  headerEmphasized: PropTypes.bool,
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
  loading: PropTypes.bool,
  onExpandChange: PropTypes.func,
  onRowClick: PropTypes.func,
  onRowMouseEnter: PropTypes.func,
  onRowMouseLeave: PropTypes.func,
  onSelectChange: PropTypes.func,
  onScroll: PropTypes.func,
  selectMultiple: PropTypes.bool,
  selectOnRowClick: PropTypes.bool,
  selectedRowKeys: PropTypes.array,
  size: PropTypes.oneOf(["mini", "small", "medium", "large"]),
  verticalAlign: PropTypes.oneOf([null, "top", "center", "bottom"]),
  virtualListProps: PropTypes.object,
  virtualListStyle: PropTypes.object,
  virtualScroll: PropTypes.bool
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

export default Table;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQW5pbWF0ZSIsInNoYWxsb3dFcXVhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJMaXN0IiwiZGVib3VuY2UiLCJjbGFzc05hbWVzIiwib21pdCIsIkNvbHVtbiIsIkFmZml4IiwiQ2hlY2tib3giLCJJY29uIiwiUG9wb3ZlciIsIlJhZGlvIiwiUmVzaXplT2JzZXJ2ZXIiLCJUYWJsZVNvcnQiLCJUYWJsZUZpbHRlciIsIkNvbHVtbk1hbmFnZXIiLCJub29wIiwicHJlZml4IiwiVERfTUlOX1dJRFRIIiwiU0VMRUNUX1REX1dJRFRIIiwiU0VMRUNUX0FORF9FWFBBTkRfVERfV0lEVEgiLCJURF9IRUlHSFQiLCJsYXJnZSIsIm1lZGl1bSIsIm1pbmkiLCJzbWFsbCIsIkhPUklaT05UQUxfQUxJR04iLCJjZW50ZXIiLCJsZWZ0IiwicmlnaHQiLCJWRVJUSUNBTF9BTElHTiIsImJvdHRvbSIsInRvcCIsImlzRml4ZWRMZWZ0IiwiY29sIiwiZml4ZWQiLCJpc0ZpeGVkUmlnaHQiLCJUYWJsZSIsInByb3BzIiwiY29tYmluZWRDZWxsc0luZm8iLCJhZmZpeEhlYWRlciIsImFmZml4U2Nyb2xsYmFyIiwibWFpblRhYmxlIiwibWFpblRhYmxlQm9keSIsIm1haW5UaGVhZCIsIndyYXBwZXIiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJyZXNpemVFdmVudCIsImNvbHVtbk1hbmFnZXIiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJoZWFkZXJBZmZpeGVkIiwiaGVpZ2h0IiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJkYXRhU291cmNlT2xkIiwiZGF0YVNvdXJjZSIsImdldENlbGxQcm9wc09sZCIsImdldENlbGxQcm9wcyIsInNldFRpbWVvdXQiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlIiwiY2xlYXIiLCJyZXNpemVDb2x1bW5TdGFydCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImN1cnJlbnRseVJlc2l6aW5nIiwiZGF0YUluZGV4IiwicGFyZW50V2lkdGgiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3RhcnRYIiwicGFnZVgiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJyZXNpemVDb2x1bW5FbmQiLCJyZXNpemVkIiwiYmFzZVdpZHRoIiwiTWF0aCIsImNlaWwiLCJ0aXRsZSIsIm5ld1Jlc2l6ZWQiLCJmaWx0ZXIiLCJvIiwibmV3V2lkdGgiLCJtYXgiLCJvblNvcnQiLCJvbkZpbHRlciIsInB1c2giLCJ2YWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc01haW5UYWJsZU92ZXJmbG93WCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJpc01haW5UYWJsZU92ZXJmbG93WSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImlzUmVzaXplclNob3ciLCJvbGRTdHlsZSIsIm1haW5UYWJsZVN0eWxlIiwicmVjdCIsImhhbmRsZU1haW5UYWJsZVNjcm9sbCIsIm9uU2Nyb2xsIiwiYWZmaXhlZFRvcCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImZpeGVkTm9kZSIsInNjcm9sbExlZnQiLCJzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVJvd0NsaWNrIiwicm93IiwiaSIsImV4cGFuZE9uUm93Q2xpY2siLCJnZXRTZWxlY3RQcm9wcyIsIm9uUm93Q2xpY2siLCJzZWxlY3RPblJvd0NsaWNrIiwic2VsZWN0ZWRSb3dLZXlzIiwia2V5IiwiZGlzYWJsZWQiLCJoYW5kbGVTZWxlY3QiLCJpbmNsdWRlcyIsImhhbmRsZUV4cGFuZCIsImhhbmRsZVRoUmVzaXplIiwiaW5kZXgiLCJmaXhlZFBvc2l0aW9uIiwiZ2V0Q29sdW1ucyIsImZpeGVkQ29sdW1uc0luZm9zIiwiY29sdW1ucyIsImZpbmQiLCJwIiwiZmluZEluZGV4Iiwic3BsaWNlIiwic29ydCIsImEiLCJiIiwiZml4ZWRDb2x1bW5zSW5mb3NMZWZ0IiwiZml4ZWRDb2x1bW5zSW5mb3NSaWdodCIsImZvckVhY2giLCJjb2xJbmRleCIsImlzTGFzdExlZnQiLCJvZmZzZXQiLCJzbGljZSIsInJlZHVjZSIsImFjYyIsImN1ciIsImlzRmlyc3RSaWdodCIsImhhbmRsZVRoZWFkTW91c2VFbnRlciIsImhhbmRsZVRoZWFkTW91c2VMZWF2ZSIsIk9iamVjdCIsImtleXMiLCJleHBhbmRlZFJvd0tleXNQcm9wIiwiZXhwYW5kZWRSb3dLZXlzIiwib25FeHBhbmRDaGFuZ2UiLCJpbmRleE9mIiwiY2hlY2tlZCIsIm9uU2VsZWN0Q2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzUHJvcCIsInNlbGVjdE11bHRpcGxlIiwiaGFuZGxlU2VsZWN0QWxsIiwiYXZhaWxhYmxlS2V5cyIsImdldEF2YWlsYWJsZVJvd3NLZXlzIiwiaGFzU2VsZWN0ZWRBbGwiLCJldmVyeSIsImdlbmVyYXRlVGFibGUiLCJleHBhbmRJY29uVmlzaWJsZSIsImV4cGFuZGVkUm93UmVuZGVyIiwiZ2V0SGVhZENsYXNzTmFtZSIsImdldEhlYWRTdHlsZSIsImdldFJvd0NsYXNzTmFtZSIsImdldFJvd1N0eWxlIiwiaGVhZGVyQWZmaXhlZE9mZnNldFRvcCIsImhlYWRlckFmZml4R2V0VGFyZ2V0Iiwib25Sb3dNb3VzZUVudGVyIiwib25Sb3dNb3VzZUxlYXZlIiwic2l6ZSIsInZlcnRpY2FsQWxpZ24iLCJ2aXJ0dWFsTGlzdFByb3BzIiwidmlydHVhbExpc3RTdHlsZSIsInZpcnR1YWxTY3JvbGwiLCJhZmZpeGVkQm90dG9tIiwiZ2V0R3JvdXBDb2x1bW5zRGVwdGgiLCJpc0FueUNvbHVtbnNMZWZ0Rml4ZWQiLCJ0aGVhZFN0eWxlIiwic2VsZWN0QW5kRXhwYW5kIiwidGhlYWRQbGFjZWhvbGRlclZpc2libGUiLCJ0aGVhZCIsInNhdmVSZWYiLCJtYXAiLCJhbGlnbiIsImZpbHRlcnMiLCJzb3J0T3JkZXIiLCJyZXNpemVkQ29sIiwiY2xpY2thYmxlIiwidW5kZWZpbmVkIiwibWluV2lkdGgiLCJmbGV4VmFsdWUiLCJsYXN0SW5kZXhPZiIsIndpZHRoUmVzaXplIiwiZmxleCIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwiZ2VuZXJhdGVUaENlbGwiLCJjaGlsZHJlbiIsImNoaWxkQ29sIiwiY2hpbGRDb2xJbmRleCIsImdyYW5kQ29sIiwiZ3JhbmRDb2xJbmRleCIsImdlbmVyYXRlVHJzIiwicm93SW5kZXgiLCJjb2xBcnJheSIsInNlbGVjdFByb3BzR2V0dGVkIiwiYWxsU2VsZWN0UHJvcHMiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJzZWxlY3RQcm9wcyIsInNlbGVjdENvbnRlbnQiLCJleHBhbmRDb250ZW50Iiwic2VsZWN0Q2VsbCIsImdlbmVyYXRlVHIiLCJjb2x1bW5zUGFyYW0iLCJwYXJlbnRJbmRleCIsImNvbEluZGV4UGFyYW0iLCJjaGlsZHJlbkNvdW50IiwiZ2VuZXJhdGVUYm9keUNlbGwiLCJ0ciIsImFsaWduSXRlbXMiLCJwb3BvdmVyUHJvcHMiLCJwb3B1cCIsImJvb2wiLCJkaXNwbGF5IiwiekluZGV4IiwiZmxleERpcmVjdGlvbiIsIm9wdGlvbnMiLCJjb2x1bW5zUmVzaXphYmxlIiwiZ2V0SGVhZENlbGxDbGFzc05hbWUiLCJnZXRIZWFkQ2VsbFN0eWxlIiwiY29sUmVzaXphYmxlIiwicmVzaXphYmxlIiwiaXNMYXN0VGgiLCJ0aENlbGwiLCJqdXN0aWZ5Q29udGVudCIsIm9yZGVyIiwiZmlsdGVyZWRWYWx1ZSIsImZpbHRlclZpc2libGUiLCJmaWx0ZXJNdWx0aXBsZSIsImZpbHRlclBvcG92ZXJQcm9wcyIsInZpc2libGUiLCJvbkZpbHRlclZpc2libGVDaGFuZ2UiLCJwb3BvdmVyIiwiY2VsbCIsImNlbGxJbmRleCIsImFsaWduUHJvcCIsImdldENlbGxDbGFzc05hbWUiLCJnZXRDZWxsU3R5bGUiLCJ2ZXJ0aWNhbEFsaWduUHJvcCIsInJlbmRlciIsImNlbGxDbGFzc05hbWUiLCJjZWxsUHJvcHMiLCJjZWxsU3R5bGUiLCJyb3dTcGFuIiwiY29sU3BhbiIsIm90aGVyQ2VsbFByb3BzIiwiZ2V0Q29tYmluZWRDZWxsU3R5bGUiLCJfIiwiX18iLCJnZXRUYWJsZUNlbGwiLCJyb3dJbmRleFBhcmFtIiwicXVlcnlTZWxlY3RvckFsbCIsImVuZENlbGwiLCJjZWxsUmVjdCIsImVuZENlbGxSZWN0IiwibmFtZSIsIm5vZGUiLCJkZWZhdWx0RXhwYW5kZWRSb3dLZXlzIiwiZGVmYXVsdFNlbGVjdGVkUm93S2V5cyIsImVtcHR5VGV4dCIsImhlYWRlckVtcGhhc2l6ZWQiLCJsb2FkaW5nIiwib3RoZXJQcm9wcyIsInJlc3RQcm9wcyIsInJlc2V0IiwiZW1wdHkiLCJjbGFzc1NldCIsInBvc2l0aW9uIiwiaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCIsIm1heEhlaWdodCIsInBhZGRpbmdUb3AiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyIsImFycmF5IiwiZnVuYyIsIm51bWJlciIsIkVycm9yIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibmV3U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEtBQUtBLEtBQVosTUFBdUIsT0FBdkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixZQUFwQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsY0FBekI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixrQ0FBN0I7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QyxFQUFBQSxlQUFlLEVBQUUsSUF0Q29DO0FBdUNyRDBELEVBQUFBLElBQUksRUFBRSxPQXZDK0M7QUF3Q3JEQyxFQUFBQSxhQUFhLEVBQUVrQixTQXhDc0M7QUF5Q3JEakIsRUFBQUEsZ0JBQWdCLEVBQUUsRUF6Q21DO0FBMENyREMsRUFBQUEsZ0JBQWdCLEVBQUUsRUExQ21DO0FBMkNyREMsRUFBQUEsYUFBYSxFQUFFO0FBM0NzQyxDOztBQXBObkQxSixLLENBa1FVa1Isd0IsR0FBMkIsaUJBS1Q7QUFBQSxNQUo5QmhHLFFBSThCLFNBSjlCQSxRQUk4QjtBQUFBLE1BSDlCM0UsT0FHOEIsU0FIOUJBLE9BRzhCO0FBQUEsTUFGOUJ3QixlQUU4QixTQUY5QkEsZUFFOEI7QUFBQSxNQUQ5Qm5DLGVBQzhCLFNBRDlCQSxlQUM4QjtBQUM5QixNQUFNdUwsUUFBOEIsR0FBRyxFQUF2Qzs7QUFDQSxNQUFJakcsUUFBUSxLQUFLLElBQWIsSUFBcUIzRSxPQUFPLEtBQUssSUFBckMsRUFBMkM7QUFDekM0SyxJQUFBQSxRQUFRLENBQUNqRyxRQUFULEdBQW9CM0UsT0FBTyxJQUFJMkUsUUFBL0I7QUFDRDs7QUFDRCxNQUFJbkQsZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCb0osSUFBQUEsUUFBUSxDQUFDcEosZUFBVCxHQUEyQkEsZUFBM0I7QUFDRDs7QUFDRCxNQUFJbkMsZUFBZSxLQUFLLElBQXhCLEVBQThCO0FBQzVCdUwsSUFBQUEsUUFBUSxDQUFDdkwsZUFBVCxHQUEyQkEsZUFBM0I7QUFDRDs7QUFDRCxTQUFPZ0MsTUFBTSxDQUFDQyxJQUFQLENBQVlzSixRQUFaLEVBQXNCN1AsTUFBdEIsR0FBK0IsQ0FBL0IsR0FBbUM2UCxRQUFuQyxHQUE4QyxJQUFyRDtBQUNELEM7O0FBMDZDSCxlQUFlblIsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2ludGVyYWN0aXZlLXN1cHBvcnRzLWZvY3VzICovXG4vKipcbiAqIFRhYmxlIOe7hOS7tuWwhuS4jeS8muS/ruaUueaIkCBGdW5jdGlvbkNvbXBvbmVudO+8jFxuICog5Zug5Li66ICD6JmR5Yiw5LmL5YmN5Zyo5L2/55So5pe25a2Y5Zyo5LiN5bCR6YCa6L+HIOWunuS+iy50YWJsZSDnmoTmlrnms5Xnm7TmjqXorr/pl64gPHRhYmxlIC8+IOWFg+e0oOeahOeUqOazleOAglxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwicmMtYW5pbWF0ZVwiXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gXCJzaGFsbG93ZXF1YWxcIlxuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSBcInJjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyXCJcbmltcG9ydCBMaXN0IGZyb20gXCJyYy12aXJ0dWFsLWxpc3RcIlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiZGVib3VuY2VcIlxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IENvbHVtbiwgeyBJQ29sdW1uUHJvcHMgfSBmcm9tIFwiLi9Db2x1bW5cIlxuaW1wb3J0IEFmZml4IGZyb20gXCIuLi9hZmZpeFwiXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94XCJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi4vcmFkaW9cIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFRhYmxlU29ydCBmcm9tIFwiLi9UYWJsZVNvcnRcIlxuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gXCIuL1RhYmxlRmlsdGVyXCJcbmltcG9ydCBDb2x1bW5NYW5hZ2VyIGZyb20gXCIuL0NvbHVtbk1hbmFnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5pbnRlcmZhY2UgSUZpeGVkQ29sdW1uc0luZm8ge1xuICB3aWR0aDogbnVtYmVyXG4gIGRhdGFJbmRleDogc3RyaW5nXG4gIGZpeGVkOiBcImxlZnRcIiB8IFwicmlnaHRcIlxuICBpbmRleDogbnVtYmVyXG4gIGlzTGFzdExlZnQ/OiBib29sZWFuXG4gIGlzRmlyc3RSaWdodD86IGJvb2xlYW5cbiAgb2Zmc2V0PzogbnVtYmVyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJsZVwiXG5jb25zdCBURF9NSU5fV0lEVEggPSAxMDBcbmNvbnN0IFNFTEVDVF9URF9XSURUSCA9IDUwXG5jb25zdCBTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSCA9IDgwXG5jb25zdCBURF9IRUlHSFQgPSB7XG4gIGxhcmdlOiA2MCxcbiAgbWVkaXVtOiA1MCxcbiAgbWluaTogNDAsXG4gIHNtYWxsOiA0MCxcbn1cbmNvbnN0IEhPUklaT05UQUxfQUxJR04gPSB7XG4gIGNlbnRlcjogXCJjZW50ZXJcIiBhcyBcImNlbnRlclwiLFxuICBsZWZ0OiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbiAgcmlnaHQ6IFwiZmxleC1lbmRcIiBhcyBcImZsZXgtZW5kXCIsXG59XG5jb25zdCBWRVJUSUNBTF9BTElHTiA9IHtcbiAgYm90dG9tOiBcImZsZXgtZW5kXCIgYXMgXCJmbGV4LWVuZFwiLFxuICBjZW50ZXI6IFwiY2VudGVyXCIgYXMgXCJjZW50ZXJcIixcbiAgdG9wOiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbn1cbmNvbnN0IGlzRml4ZWRMZWZ0ID0gKGNvbDogSUJhc2VPYmplY3QpOiBib29sZWFuID0+XG4gIGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIgfHwgY29sLmZpeGVkID09PSB0cnVlXG5jb25zdCBpc0ZpeGVkUmlnaHQgPSAoY29sOiBJQmFzZU9iamVjdCk6IGJvb2xlYW4gPT4gY29sLmZpeGVkID09PSBcInJpZ2h0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVQcm9wczxUIGV4dGVuZHMgSUJhc2VPYmplY3QgPSBJQmFzZU9iamVjdD4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+awtOW5s+mdoOm9kOaWueWQkVxuICAgKi9cbiAgYWxpZ24/OiBudWxsIHwgXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogYW55XG4gIC8qKlxuICAgKiDku6XmlbDnu4TnmoTmlrnlvI/kvKDlhaUgQ29sdW1uc++8jOWmguaenOS8oOWFpeS6huatpCBQcm9w77yM5YiZIFRhYmxlIOS8muW/veeVpSBjaGlsZHJlblxuICAgKi9cbiAgY29sdW1ucz86IElDb2x1bW5Qcm9wczxUPltdIHwgbnVsbFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaOp+WItuaVtOS4qiBUYWJsZSDnmoQgQ29sdW1ucyDog73lkKbosIPmlbTlrr3luqZcbiAgICovXG4gIGNvbHVtbnNSZXNpemFibGU/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5pWw5o2u5rqQXG4gICAqL1xuICBkYXRhU291cmNlPzogVFtdXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog56m65pWw5o2u5rqQ5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBlbXB0eVRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAqIDEuIOS9v+eUqCBleHBhbmRPblJvd0NsaWNrIOaIluiAhVxuICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgKi9cbiAgZXhwYW5kSWNvblZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgKi9cbiAgZXhwYW5kT25Sb3dDbGljaz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeS7juWklumDqOaOp+WItu+8jOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGV4cGFuZGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICovXG4gIGV4cGFuZGVkUm93UmVuZGVyPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLznmoTnsbvlkI3vvJoocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldENlbGxDbGFzc05hbWU/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoTnlLHnu4Tku7bop4TlrprnmoQgcHJvcO+8jFxuICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldENlbGxQcm9wcz86IChcbiAgICByb3c6IFQsXG4gICAgY29sOiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBJQmFzZU9iamVjdCB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsU3R5bGU/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9riB0aGVhZCDnmoTnsbvlkI3vvJooKSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0SGVhZENsYXNzTmFtZT86ICgpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jCgpID0+ICh7fSlcbiAgICovXG4gIGdldEhlYWRTdHlsZT86ICgpID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKogVEgg55qE57G75ZCN77yaKGNvbCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRIZWFkQ2VsbENsYXNzTmFtZT86IChjb2w6IElCYXNlT2JqZWN0LCBjb2xJbmRleDogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4qiBUSCDkuIrnmoQgc3R5bGXvvIwoY29sLCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0SGVhZENlbGxTdHlsZT86IChcbiAgICBjb2w6IElCYXNlT2JqZWN0LFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P6KGM55qE57G75ZCN77yaKHJvdywgcm93SW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRSb3dDbGFzc05hbWU/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+ihjOeahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRSb3dTdHlsZT86IChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHorr7nva7mr4/kuKogQ2hlY2tib3gvUmFkaW8g5LiK55qEIHByb3AgKHJvdywgcm93SW5kZXgpID0+ICh7fSnvvJtcbiAgICog5Y+v5Lul5Zyo6L+Z6YeM5Zue5LygIGRpc2FibGVkOiB0cnVlLCDmjqfliLbor6XooYzkuI3og73pgInmi6nvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBnZXRTZWxlY3RQcm9wcz86IChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IElCYXNlT2JqZWN0XG4gIC8qKlxuICAgKiDmmK/lkKbpnIDopoHooajlpLTlm7rlrprliLDpobXpnaLkuIpcbiAgICovXG4gIGhlYWRlckFmZml4ZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HooajlpLTlm7rlrppcbiAgICovXG4gIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A/OiBudW1iZXJcbiAgLyoqXG4gICAqIOWPguiAgyA8QWZmaXggLz4g55qEIGdldFRhcmdldCBQcm9wXG4gICAqL1xuICBoZWFkZXJBZmZpeEdldFRhcmdldD86ICgoKSA9PiBIVE1MRWxlbWVudCkgfCBudWxsXG4gIC8qKlxuICAgKiDliqDph43lpLTpg6jvvIzlvIDlkK/kuYvlkI7ooajlpLTlsIbkvJrliqDnspcgKyDog4zmma9cbiAgICovXG4gIGhlYWRlckVtcGhhc2l6ZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiDmjIflrprpq5jluqbku6Xlrp7njrDooajmoLzlhoXmu5rliqjvvIzmraQgcHJvcCDkuI4gcHJvcCBoZWFkZXJBZmZpeGVkIOS6kuaWpeOAglxuICAgKi9cbiAgaGVpZ2h0PzogbnVtYmVyIHwgbnVsbFxuICAvKipcbiAgICog5piv5ZCm5Yqg6L295LitXG4gICAqL1xuICBsb2FkaW5nPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ5bGV5byA6KGM44CR5bGV5byA5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/lsZXlvIDlip/og73nmoTliKTmlq3vvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgb25FeHBhbmRDaGFuZ2U/OiAoKGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICog5q+P6KGM55qEIGNsaWNrIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dDbGljaz86XG4gICAgfCAoKHJvdzogVCwgcm93SW5kZXg6IG51bWJlciwgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog5q+P6KGM55qEIG1vdXNlRW50ZXIgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAqL1xuICBvblJvd01vdXNlRW50ZXI/OlxuICAgIHwgKChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIsIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBtb3VzZUxlYXZlIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dNb3VzZUxlYXZlPzpcbiAgICB8ICgocm93OiBULCByb3dJbmRleDogbnVtYmVyLCBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHpgInmi6nmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+mAieaLqeWKn+iDveeahOWIpOaWre+8m1xuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBvblNlbGVjdENoYW5nZT86ICgoa2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiBUYWJsZSDmu5rliqjml7bnmoQgaGFuZGxlclxuICAgKi9cbiAgb25TY3JvbGw/OiAoKGU6IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeWkmiAvIOWNlemAie+8m+ivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIHNlbGVjdE11bHRpcGxlPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R6YCJ5oup44CCXG4gICAqIOatpCBwcm9wIOS8muWcqCAudHIg5LiK5Yqg5YWlIG9uQ2xpY2sg5LqL5Lu277yMXG4gICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICovXG4gIHNlbGVjdE9uUm93Q2xpY2s/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHku47lpJbpg6jmjqfliLbvvIzpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yMXG4gICAqIOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqozvvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgc2VsZWN0ZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOiuvue9ruWwuuWvuO+8jOazqOaEj++8muWwuuWvuOS7heaOp+WItuihjOS4juWIl+mXtOi3ne+8jOS4juWtl+S9k+Wkp+Wwj+S4jee7keWumuOAglxuICAgKi9cbiAgc2l6ZT86IFwibWluaVwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIlxuICAvKipcbiAgICog57uf5LiA5Zyw5o6n5Yi25YiX5Z6C55u06Z2g6b2Q5pa55ZCRXG4gICAqL1xuICB2ZXJ0aWNhbEFsaWduPzogXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiXG4gIC8qKlxuICAgKiDomZrmi5/liJfooajnmoQgUHJvcHPvvIzor7flj4LogIMgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtdmlydHVhbC1saXN0XG4gICAqL1xuICB2aXJ0dWFsTGlzdFByb3BzPzogSUJhc2VPYmplY3RcbiAgLyoqXG4gICAqIOiZmuaLn+WIl+ihqOeahOagt+W8j++8jOivt+WcqOi/memHjOaMh+WumuWuveW6pu+8jOm7mOiupOWwhuS8muaciSA1MDAgcHgg5a695bqmXG4gICAqL1xuICB2aXJ0dWFsTGlzdFN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICog5piv5ZCm5byA5ZCv6Jma5ouf5rua5Yqo77yM5q2kIFByb3Ag6K+36YWN5ZCIIGhlaWdodCBQcm9wIOWQjOaXtuS9v+eUqO+8jOeUqOS6juWkhOeQhuWkp+aVsOaNrumHj+S4i+eahOiZmuaLn+WGhea7muWKqO+8m1xuICAgKiDmraTlip/og73nmoTlrp7pmYXnlKjkvovovoPlsJHvvIzlpoLmnpzmnInku7vkvZXpl67popjor7flj4rml7blj43ppohcbiAgICovXG4gIHZpcnR1YWxTY3JvbGw/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3RhdGUge1xuICBhZmZpeGVkVG9wOiBib29sZWFuXG4gIGFmZml4ZWRCb3R0b206IGJvb2xlYW5cbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBjb21iaW5lZENlbGxzSW5mbzogSUJhc2VPYmplY3RbXVxuICBleHBhbmRlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbiAgZml4ZWRDb2x1bW5zSW5mb3M6IEFycmF5PElGaXhlZENvbHVtbnNJbmZvPlxuICBtYWluVGFibGVTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllc1xuICBpc01haW5UYWJsZU92ZXJmbG93WDogYm9vbGVhblxuICBpc01haW5UYWJsZU92ZXJmbG93WTogYm9vbGVhblxuICBpc1Jlc2l6ZXJTaG93OiBib29sZWFuXG4gIGN1cnJlbnRseVJlc2l6aW5nOiBJQmFzZU9iamVjdFxuICByZXNpemVkOiBJQmFzZU9iamVjdFtdXG4gIHNlbGVjdGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PlxufVxuXG4vKipcbiAqIOihqOagvOaYr+S4gOenjeagvOW8j+WMluS/oeaBr+eahOWxleekuuW9ouW8j+OAgumAmuW4uOacjeWKoeS6juWkp+mHj+aVsOaNrua1j+iniOOAgeeuoeeQhuWcuuaZr+OAglxuICovXG5jbGFzcyBUYWJsZTxUIGV4dGVuZHMgSUJhc2VPYmplY3QgPSBJQmFzZU9iamVjdD4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIElUYWJsZVByb3BzPFQ+LFxuICBJVGFibGVTdGF0ZVxuPiB7XG4gIHB1YmxpYyBzdGF0aWMgQ29sdW1uOiB0eXBlb2YgQ29sdW1uID0gQ29sdW1uXG5cbiAgcHVibGljIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICog57uf5LiA5Zyw5o6n5Yi25YiX5rC05bmz6Z2g6b2Q5pa55ZCRXG4gICAgICovXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAgIC8qKlxuICAgICAqIOWtkOiKgueCuVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICAvKipcbiAgICAgKiDpmYTliqDnsbvlkI1cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqXG4gICAgICog5Lul5pWw57uE55qE5pa55byP5Lyg5YWlIENvbHVtbnPvvIzlpoLmnpzkvKDlhaXkuobmraQgUHJvcO+8jOWImSBUYWJsZSDkvJrlv73nlaUgY2hpbGRyZW5cbiAgICAgKi9cbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog5o6n5Yi25pW05LiqIFRhYmxlIOeahCBDb2x1bW5zIOiDveWQpuiwg+aVtOWuveW6plxuICAgICAqL1xuICAgIGNvbHVtbnNSZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaVsOaNrua6kFxuICAgICAqL1xuICAgIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6buY6K6k6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOepuuaVsOaNrua6kOaXtuaYvuekuueahOWGheWuuVxuICAgICAqL1xuICAgIGVtcHR5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5pi+56S65bGV5byAIGljb27vvIzlpoLmnpzkuLogZmFsc2XvvIzmhI/lkbPnnYBcbiAgICAgKiAxLiDkvb/nlKggZXhwYW5kT25Sb3dDbGljayDmiJbogIVcbiAgICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgICAqL1xuICAgIGV4cGFuZEljb25WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBleHBhbmRPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHku47lpJbpg6jmjqfliLbvvIzlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICAgKi9cbiAgICBleHBhbmRlZFJvd1JlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC855qE57G75ZCN77yaKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5Liq5Y2V5YWD5qC85LiK55qE55Sx57uE5Lu26KeE5a6a55qEIHByb3DvvIxcbiAgICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRDZWxsUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Q2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg55qE57G75ZCN77yacG9zaXRpb24gPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva4gdGhlYWQg5LiK55qEIHN0eWxl77yMcG9zaXRpb24gPT4gKHt9KVxuICAgICAqL1xuICAgIGdldEhlYWRTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5LiqIFRIIOeahOexu+WQje+8mihjb2wsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKogVEgg5LiK55qEIHN0eWxl77yMKGNvbCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2VsbFN0eWxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/ooYznmoTnsbvlkI3vvJoocm93LCByb3dJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRSb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+ihjOeahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Um93U3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeiuvue9ruavj+S4qiBDaGVja2JveC9SYWRpbyDkuIrnmoQgcHJvcCAocm93LCByb3dJbmRleCkgPT4gKHt9Ke+8m1xuICAgICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGdldFNlbGVjdFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbpnIDopoHooajlpLTlm7rlrprliLDpobXpnaLkuIpcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDot53nprvnqpflj6Ppobbpg6jovr7liLDmjIflrprlgY/np7vph4/lkI7op6blj5HooajlpLTlm7rlrppcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIOWPguiAgyA8QWZmaXggLz4g55qEIGdldFRhcmdldCBQcm9wXG4gICAgICovXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOWKoOmHjeWktOmDqO+8jOW8gOWQr+S5i+WQjuihqOWktOWwhuS8muWKoOeylyArIOiDjOaZr1xuICAgICAqL1xuICAgIGhlYWRlckVtcGhhc2l6ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOaMh+WumumrmOW6puS7peWunueOsOihqOagvOWGhea7muWKqO+8jOatpCBwcm9wIOS4jiBwcm9wIGhlYWRlckFmZml4ZWQg5LqS5pal44CCXG4gICAgICovXG4gICAgaGVpZ2h0OiAocHJvcHM6IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PikgPT4ge1xuICAgICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiSW52YWxpZCBwcm9wIGBoZWlnaHRgIHN1cHBsaWVkIHRvIGBUYWJsZWAsIGV4cGVjdGVkIGBudW1iZXJgLlwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGlmIChoZWFkZXJBZmZpeGVkICYmICEhaGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiVGFibGUuanMg5LiN5YWB6K645ZCM5pe25L2/55SoIHByb3AgYGhlYWRlckFmZml4ZWRgIOS4jiBgaGVpZ2h0YO+8jOS4jeiupOWPr+Wwhui/meS4pOiAhea3t+eUqOeahOmcgOaxguWcuuaZr+OAglwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5piv5ZCm5Yqg6L295LitXG4gICAgICovXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5bGV5byA5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/lsZXlvIDlip/og73nmoTliKTmlq3vvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgb25FeHBhbmRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBjbGljayBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICAgKi9cbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDmr4/ooYznmoQgbW91c2VFbnRlciBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICAgKi9cbiAgICBvblJvd01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBtb3VzZUxlYXZlIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93TW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6YCJ5oup5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/pgInmi6nlip/og73nmoTliKTmlq3vvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIFRhYmxlIOa7muWKqOaXtueahCBoYW5kbGVyXG4gICAgICovXG4gICAgb25TY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkeWkmiAvIOWNlemAie+8m+ivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBzZWxlY3RNdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R6YCJ5oup44CCXG4gICAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAgICovXG4gICAgc2VsZWN0T25Sb3dDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jFxuICAgICAqIOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqozvvJtcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgc2VsZWN0ZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog6K6+572u5bC65a+477yM5rOo5oSP77ya5bC65a+45LuF5o6n5Yi26KGM5LiO5YiX6Ze06Led77yM5LiO5a2X5L2T5aSn5bCP5LiN57uR5a6a44CCXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcIm1pbmlcIiwgXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdKSxcbiAgICAvKipcbiAgICAgKiDnu5/kuIDlnLDmjqfliLbliJflnoLnm7TpnaDpvZDmlrnlkJFcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbEFsaWduOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwidG9wXCIsIFwiY2VudGVyXCIsIFwiYm90dG9tXCJdKSxcbiAgICAvKipcbiAgICAgKiDomZrmi5/liJfooajnmoQgUHJvcHPvvIzor7flj4LogIMgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtdmlydHVhbC1saXN0XG4gICAgICovXG4gICAgdmlydHVhbExpc3RQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDomZrmi5/liJfooajnmoTmoLflvI/vvIzor7flnKjov5nph4zmjIflrprlrr3luqbvvIzpu5jorqTlsIbkvJrmnIkgNTAwIHB4IOWuveW6plxuICAgICAqL1xuICAgIHZpcnR1YWxMaXN0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5byA5ZCv6Jma5ouf5rua5Yqo77yM5q2kIFByb3Ag6K+36YWN5ZCIIGhlaWdodCBQcm9wIOWQjOaXtuS9v+eUqO+8jOeUqOS6juWkhOeQhuWkp+aVsOaNrumHj+S4i+eahOiZmuaLn+WGhea7muWKqO+8m1xuICAgICAqIOatpOWKn+iDveeahOWunumZheeUqOS+i+i+g+Wwke+8jOWmguaenOacieS7u+S9lemXrumimOivt+WPiuaXtuWPjemmiFxuICAgICAqL1xuICAgIHZpcnR1YWxTY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PiA9IHtcbiAgICBhbGlnbjogbnVsbCxcbiAgICBjaGlsZHJlbjogXCJcIixcbiAgICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgICBjb2x1bW5zOiBudWxsLFxuICAgIGNvbHVtbnNSZXNpemFibGU6IG51bGwsXG4gICAgZGF0YVNvdXJjZTogW10sXG4gICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogbnVsbCxcbiAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzOiBudWxsLFxuICAgIGVtcHR5VGV4dDogXCLmmoLml6DmlbDmja5cIixcbiAgICBleHBhbmRJY29uVmlzaWJsZTogdHJ1ZSxcbiAgICBleHBhbmRPblJvd0NsaWNrOiBmYWxzZSxcbiAgICBleHBhbmRlZFJvd0tleXM6IG51bGwsXG4gICAgZXhwYW5kZWRSb3dSZW5kZXI6ICgpID0+IFwiXCIsXG4gICAgZ2V0Q2VsbENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRDZWxsUHJvcHM6IG5vb3AsXG4gICAgZ2V0Q2VsbFN0eWxlOiBub29wLFxuICAgIGdldEhlYWRDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0SGVhZFN0eWxlOiBub29wLFxuICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldEhlYWRDZWxsU3R5bGU6IG5vb3AsXG4gICAgZ2V0Um93Q2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldFJvd1N0eWxlOiBub29wLFxuICAgIGdldFNlbGVjdFByb3BzOiAoKSA9PiAoe30pLFxuICAgIGhlYWRlckFmZml4ZWQ6IGZhbHNlLFxuICAgIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A6IDAsXG4gICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ6IG51bGwsXG4gICAgaGVhZGVyRW1waGFzaXplZDogZmFsc2UsXG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIG9uRXhwYW5kQ2hhbmdlOiBudWxsLFxuICAgIG9uUm93Q2xpY2s6IG51bGwsXG4gICAgb25Sb3dNb3VzZUVudGVyOiBudWxsLFxuICAgIG9uUm93TW91c2VMZWF2ZTogbnVsbCxcbiAgICBvblNlbGVjdENoYW5nZTogbnVsbCxcbiAgICBvblNjcm9sbDogbnVsbCxcbiAgICBzZWxlY3RNdWx0aXBsZTogdHJ1ZSxcbiAgICBzZWxlY3RPblJvd0NsaWNrOiBmYWxzZSxcbiAgICBzZWxlY3RlZFJvd0tleXM6IG51bGwsXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IHVuZGVmaW5lZCxcbiAgICB2aXJ0dWFsTGlzdFByb3BzOiB7fSxcbiAgICB2aXJ0dWFsTGlzdFN0eWxlOiB7fSxcbiAgICB2aXJ0dWFsU2Nyb2xsOiBmYWxzZSxcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBjb2x1bW5zLFxuICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICBzZWxlY3RlZFJvd0tleXMsXG4gIH06IElUYWJsZVByb3BzPElCYXNlT2JqZWN0PikgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPElUYWJsZVN0YXRlPiA9IHt9XG4gICAgaWYgKGNoaWxkcmVuICE9PSBudWxsIHx8IGNvbHVtbnMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmNoaWxkcmVuID0gY29sdW1ucyB8fCBjaGlsZHJlblxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5leHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5cyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSb3dLZXlzID0gc2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCA/IG5ld1N0YXRlIDogbnVsbFxuICB9XG5cbiAgcHVibGljIGNvbWJpbmVkQ2VsbHNJbmZvOiBJQmFzZU9iamVjdFtdID0gW11cblxuICBwdWJsaWMgYWZmaXhIZWFkZXI6IEFmZml4XG5cbiAgcHVibGljIGFmZml4U2Nyb2xsYmFyOiBBZmZpeFxuXG4gIHB1YmxpYyBtYWluVGFibGU6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UYWJsZUJvZHk6IEhUTUxEaXZFbGVtZW50XG5cbiAgcHVibGljIG1haW5UaGVhZDogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcblxuICBwcml2YXRlIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZTogYW55XG5cbiAgcHJpdmF0ZSByZXNpemVFdmVudDogYW55XG5cbiAgcHJpdmF0ZSBjb2x1bW5NYW5hZ2VyOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRhYmxlUHJvcHM8VD4pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkUm93S2V5cyxcbiAgICAgIGV4cGFuZGVkUm93S2V5czogZXhwYW5kZWRSb3dLZXlzUHJvcCxcbiAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCxcbiAgICB9ID0gcHJvcHNcbiAgICB0aGlzLmNvbHVtbk1hbmFnZXIgPSBuZXcgQ29sdW1uTWFuYWdlcihjb2x1bW5zIHx8IGNoaWxkcmVuKVxuICAgIGxldCBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzKSB7XG4gICAgICBzZWxlY3RlZFJvd0tleXMgPSBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzXG4gICAgfVxuICAgIGxldCBleHBhbmRlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmIChleHBhbmRlZFJvd0tleXNQcm9wKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBleHBhbmRlZFJvd0tleXNQcm9wXG4gICAgfSBlbHNlIGlmIChkZWZhdWx0RXhwYW5kZWRSb3dLZXlzKSB7XG4gICAgICBleHBhbmRlZFJvd0tleXMgPSBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzXG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhZmZpeGVkQm90dG9tOiBmYWxzZSxcbiAgICAgIGFmZml4ZWRUb3A6IGZhbHNlLFxuICAgICAgY2hpbGRyZW46IGNvbHVtbnMgfHwgY2hpbGRyZW4sXG4gICAgICBjb21iaW5lZENlbGxzSW5mbzogW10sXG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sIC8vIOato+WcqOaUueWPmOWuveW6pueahOWIl+eahOS/oeaBr1xuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3M6IFtdLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGZhbHNlLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGZhbHNlLFxuICAgICAgaXNSZXNpemVyU2hvdzogZmFsc2UsXG4gICAgICBtYWluVGFibGVTdHlsZToge30sXG4gICAgICByZXNpemVkOiBbXSwgLy8g5pS55Y+Y6L+H5a695bqm55qE5omA5pyJ5YiX55qE5pWw5o2uXG4gICAgICBzZWxlY3RlZFJvd0tleXMsXG4gICAgfVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplID0gZGVib3VuY2UodGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsIDEwMClcbiAgfVxuXG4gIHB1YmxpYyBzaG91bGRDb21wb25lbnRVcGRhdGUgPSAoXG4gICAgbmV4dFByb3BzOiBJVGFibGVQcm9wczxUPixcbiAgICBuZXh0U3RhdGU6IElUYWJsZVN0YXRlXG4gICkgPT5cbiAgICAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpXG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbHVtbk1hbmFnZXIsXG4gICAgICBjb21iaW5lZENlbGxzSW5mbyxcbiAgICAgIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZSxcbiAgICAgIHByb3BzLFxuICAgIH0gPSB0aGlzXG4gICAgY29uc3QgeyBpc0FueUNvbHVtbnNGaXhlZCB9ID0gY29sdW1uTWFuYWdlclxuICAgIGNvbnN0IHsgaGVhZGVyQWZmaXhlZCwgaGVpZ2h0IH0gPSBwcm9wc1xuICAgIC8vIOWbuuWumuihqOWktOmcgOimgeebkeWQrCByZXNpemUg5LqL5Lu2XG4gICAgaWYgKGhlYWRlckFmZml4ZWQgfHwgaGVpZ2h0IHx8IGlzQW55Q29sdW1uc0ZpeGVkKSB7XG4gICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgd2luZG93LFxuICAgICAgICBcInJlc2l6ZVwiLFxuICAgICAgICBkZWJvdW5jZWRXaW5kb3dSZXNpemVcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKGNvbWJpbmVkQ2VsbHNJbmZvLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbWJpbmVkQ2VsbHNJbmZvIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZSA9ICh7XG4gICAgZGF0YVNvdXJjZTogZGF0YVNvdXJjZU9sZCxcbiAgICBnZXRDZWxsUHJvcHM6IGdldENlbGxQcm9wc09sZCxcbiAgfTogSVRhYmxlUHJvcHM8VD4pID0+IHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGdldENlbGxQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIC8qKlxuICAgICAqIGhhbmRsZVdpbmRvd1Jlc2l6ZSDkuI3lupTor6Xlj6rlnKggZGlkbW91bnQg5pe25omn6KGMXG4gICAgICogZGlkVXBkYXRlIOaXtuS5n+mcgOimgVxuICAgICAqL1xuICAgIGlmICghc2hhbGxvd0VxdWFsKGRhdGFTb3VyY2VPbGQsIGRhdGFTb3VyY2UpKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaGFuZGxlV2luZG93UmVzaXplLCAwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWQiOW5tuWNleWFg+agvOmcgOaLv+WIsOecn+WunueahCBkb20g5YWD57Sg6K6h566X5bC65a+477yM5Zug5q2k6L+Z6YeM6ZyA6KaBIGZvcmNlVXBkYXRlXG4gICAgICovXG4gICAgaWYgKCFzaGFsbG93RXF1YWwoZ2V0Q2VsbFByb3BzT2xkLCBnZXRDZWxsUHJvcHMpICYmIGdldENlbGxQcm9wcykge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnJlc2l6ZUV2ZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUuY2xlYXIoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5TdGFydCA9IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PixcbiAgICBjb2w6IElDb2x1bW5Qcm9wczxUPlxuICApID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImNvbC1yZXNpemVcIlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudGx5UmVzaXppbmc6IHtcbiAgICAgICAgY29sLFxuICAgICAgICBkYXRhSW5kZXg6IGNvbC5kYXRhSW5kZXgsXG4gICAgICAgIHBhcmVudFdpZHRoOlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIC53aWR0aCxcbiAgICAgICAgc3RhcnRYOiBlLnBhZ2VYLFxuICAgICAgfSxcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgfSwgMClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5Nb3ZpbmcgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB7IHJlc2l6ZWQsIGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb2wsIGRhdGFJbmRleCwgcGFyZW50V2lkdGgsIHN0YXJ0WCB9ID0gY3VycmVudGx5UmVzaXppbmdcbiAgICAvKipcbiAgICAgKiAxMyDku6PooajlrZflj7fvvJvnlKggZW0g55qE5pa55byP6K6h566X5a695bqm5pys6Lqr5LiN5aSf5ZCI55CG77yM6L+Z6YeMICsgMu+8jOS4jeeEtuWcqCBTYWZhcmkg5LiL56m66Ze05Lya5LiN5aSf44CCXG4gICAgICovXG4gICAgY29uc3QgYmFzZVdpZHRoID1cbiAgICAgIE1hdGguY2VpbChcbiAgICAgICAgY29sLnRpdGxlLmxlbmd0aCA+IDQgPyBjb2wudGl0bGUubGVuZ3RoIC8gMiA6IGNvbC50aXRsZS5sZW5ndGhcbiAgICAgICkgKlxuICAgICAgICAxMyArXG4gICAgICAyXG4gICAgY29uc3QgbmV3UmVzaXplZCA9IHJlc2l6ZWQuZmlsdGVyKChvKSA9PiBvLmRhdGFJbmRleCAhPT0gZGF0YUluZGV4KVxuICAgIGNvbnN0IG5ld1dpZHRoID0gTWF0aC5tYXgoXG4gICAgICBNYXRoLmNlaWwocGFyZW50V2lkdGggKyBlLnBhZ2VYIC0gc3RhcnRYKSxcbiAgICAgICEhY29sLm9uU29ydCB8fCAhIWNvbC5vbkZpbHRlciA/IGJhc2VXaWR0aCArIDM2IDogYmFzZVdpZHRoICsgMTZcbiAgICApXG4gICAgbmV3UmVzaXplZC5wdXNoKHtcbiAgICAgIGRhdGFJbmRleCxcbiAgICAgIHZhbHVlOiBuZXdXaWR0aCxcbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcmVzaXplZDogbmV3UmVzaXplZCxcbiAgICB9KVxuICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKClcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDb2x1bW5FbmQgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbWFpblRhYmxlIH0gPSB0aGlzXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcIlwiXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMucmVzaXplQ29sdW1uTW92aW5nKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5FbmQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge30sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WDpcbiAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxXaWR0aCA+IG1haW5UYWJsZS5vZmZzZXRXaWR0aCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbEhlaWdodCA+IG1haW5UYWJsZS5vZmZzZXRIZWlnaHQsXG4gICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbHVtbk1hbmFnZXIsIG1haW5UYWJsZSwgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCB7IGlzQW55Q29sdW1uc0ZpeGVkIH0gPSBjb2x1bW5NYW5hZ2VyXG4gICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgaWYgKChoZWFkZXJBZmZpeGVkIHx8IGhlaWdodCB8fCBpc0FueUNvbHVtbnNGaXhlZCkgJiYgbWFpblRhYmxlKSB7XG4gICAgICBjb25zdCB7IG1haW5UYWJsZVN0eWxlOiBvbGRTdHlsZSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgY29uc3QgcmVjdCA9IG1haW5UYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgbWFpblRhYmxlU3R5bGU6IFBhcnRpYWw8UmVhY3QuQ1NTUHJvcGVydGllcz4gPSB7fVxuICAgICAgbWFpblRhYmxlU3R5bGUubGVmdCA9IHJlY3QubGVmdFxuICAgICAgbWFpblRhYmxlU3R5bGUud2lkdGggPSByZWN0LndpZHRoXG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChtYWluVGFibGVTdHlsZSwgb2xkU3R5bGUpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWluVGFibGVTdHlsZSB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsV2lkdGggPiBtYWluVGFibGUub2Zmc2V0V2lkdGgsXG4gICAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZOlxuICAgICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsSGVpZ2h0ID4gbWFpblRhYmxlLm9mZnNldEhlaWdodCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZU1haW5UYWJsZVNjcm9sbCA9IChlPzogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IGFmZml4SGVhZGVyLCBtYWluVGFibGUgfSA9IHRoaXNcbiAgICBjb25zdCB7IG9uU2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBhZmZpeGVkVG9wIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAob25TY3JvbGwgJiYgZSkge1xuICAgICAgLy8gZSDlj6/og73mmK8gdGhlYWRcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvbGVcIikgPT09IFwidGFibGVcIikge1xuICAgICAgICBvblNjcm9sbChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZmZpeGVkVG9wICYmIGFmZml4SGVhZGVyICYmIG1haW5UYWJsZSAmJiBhZmZpeEhlYWRlci5maXhlZE5vZGUpIHtcbiAgICAgIGFmZml4SGVhZGVyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ID0gbWFpblRhYmxlLnNjcm9sbExlZnRcbiAgICB9XG5cbiAgICAvLyDlm7rlrprlpLTnmoTmg4XlhrXvvIzpnIDopoHlkIzmraXlm7rlrprmu5rliqjmnaHlkozkuLsgVGFibGUg5rua5Yqo5p2hXG4gICAgdGhpcy5zeW5jVGFibGVTY3JvbGxQb3NpdGlvbihtYWluVGFibGUuc2Nyb2xsTGVmdClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBhZmZpeFNjcm9sbGJhciwgbWFpblRhYmxlLCBtYWluVGhlYWQgfSA9IHRoaXNcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG1haW5UYWJsZSAmJiBhZmZpeFNjcm9sbGJhciAmJiBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUpIHtcbiAgICAgIGlmIChtYWluVGFibGUuc2Nyb2xsTGVmdCAhPT0gdmFsdWUpIHtcbiAgICAgICAgbWFpblRhYmxlLnNjcm9sbExlZnQgPSB2YWx1ZVxuICAgICAgfVxuICAgICAgaWYgKGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ICE9PSB2YWx1ZSkge1xuICAgICAgICBhZmZpeFNjcm9sbGJhci5maXhlZE5vZGUuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c6K6+5a6a5LqGIHByb3AgaGVpZ2h077yM5bm25LiU5a2Y5Zyo5qiq5ZCR5rua5Yqo5p2h77yM5YiZ6KaB5ZCM5q2lIHRoZWFkIOeahOa7muWKqOS9jee9rlxuICAgIGlmIChoZWlnaHQgJiYgbWFpblRoZWFkKSB7XG4gICAgICBtYWluVGhlYWQuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVJvd0NsaWNrID0gKFxuICAgIHJvdzogVCxcbiAgICBpOiBudW1iZXIsXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZXhwYW5kT25Sb3dDbGljayxcbiAgICAgIGdldFNlbGVjdFByb3BzLFxuICAgICAgb25Sb3dDbGljayxcbiAgICAgIHNlbGVjdE9uUm93Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsga2V5IH0gPSByb3dcbiAgICBpZiAoXG4gICAgICBzZWxlY3RPblJvd0NsaWNrICYmXG4gICAgICB0eXBlb2Yga2V5ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAhKFxuICAgICAgICBnZXRTZWxlY3RQcm9wcyAmJlxuICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpICYmXG4gICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkuZGlzYWJsZWRcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VsZWN0KGtleSwgIXNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgIH1cbiAgICBpZiAoZXhwYW5kT25Sb3dDbGljaykge1xuICAgICAgdGhpcy5oYW5kbGVFeHBhbmQoa2V5KVxuICAgIH1cbiAgICBpZiAob25Sb3dDbGljaykge1xuICAgICAgb25Sb3dDbGljayhyb3csIGksIGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoUmVzaXplID0gKFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgZGF0YUluZGV4OiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBmaXhlZFBvc2l0aW9uPzogYm9vbGVhbiB8IFwibGVmdFwiIHwgXCJyaWdodFwiXG4gICkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0Q29sdW1ucyB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG4gICAgbGV0IHsgZml4ZWRDb2x1bW5zSW5mb3MgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpIGFzIElDb2x1bW5Qcm9wczxUPltdXG4gICAgLyoqXG4gICAgICogY29sdW1ucyDlj5jljJblkI4gZml4ZWRDb2x1bW5zSW5mb3Mg5Lit5Y+v6IO95a2Y5Zyo5bey57uP56e76Zmk55qEIGNvbHVtblxuICAgICAqL1xuICAgIGZpeGVkQ29sdW1uc0luZm9zID0gZml4ZWRDb2x1bW5zSW5mb3MuZmlsdGVyKChvKSA9PlxuICAgICAgY29sdW1ucy5maW5kKChwKSA9PiBwLmRhdGFJbmRleCA9PT0gby5kYXRhSW5kZXgpXG4gICAgKVxuICAgIGNvbnN0IGkgPSBmaXhlZENvbHVtbnNJbmZvcy5maW5kSW5kZXgoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgLy8gZml4ZWQg5Y+v6IO95pivIEJvb2xlYW5cbiAgICBjb25zdCBmaXhlZCA9IGZpeGVkUG9zaXRpb24gPT09IFwicmlnaHRcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwiXG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgaWYgKGZpeGVkQ29sdW1uc0luZm9zW2ldLndpZHRoID09PSB3aWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zLnNwbGljZShpLCAxKVxuICAgIH1cbiAgICBmaXhlZENvbHVtbnNJbmZvcy5wdXNoKHsgd2lkdGgsIGRhdGFJbmRleCwgaW5kZXgsIGZpeGVkIH0pXG4gICAgZml4ZWRDb2x1bW5zSW5mb3Muc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpXG5cbiAgICBjb25zdCBmaXhlZENvbHVtbnNJbmZvc0xlZnQgPSBmaXhlZENvbHVtbnNJbmZvcy5maWx0ZXIoXG4gICAgICAobykgPT4gby5maXhlZCA9PT0gXCJsZWZ0XCJcbiAgICApXG4gICAgY29uc3QgZml4ZWRDb2x1bW5zSW5mb3NSaWdodCA9IGZpeGVkQ29sdW1uc0luZm9zXG4gICAgICAuZmlsdGVyKChvKSA9PiBvLmZpeGVkID09PSBcInJpZ2h0XCIpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5pbmRleCAtIGEuaW5kZXgpXG5cbiAgICBmaXhlZENvbHVtbnNJbmZvcy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgIGxldCBjb2xJbmRleFxuICAgICAgaWYgKGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29sSW5kZXggPSBmaXhlZENvbHVtbnNJbmZvc0xlZnQuZmluZEluZGV4KFxuICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleFxuICAgICAgICApXG4gICAgICAgIGlmIChjb2xJbmRleCA9PT0gZml4ZWRDb2x1bW5zSW5mb3NMZWZ0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb2wuaXNMYXN0TGVmdCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wuaXNMYXN0TGVmdCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgLy8g5a656ZSZ77yM5LiN5YWB6K64IHNsaWNlKDAsIC0xKSDnmoTljbHpmanmk43kvZxcbiAgICAgICAgY29sLm9mZnNldCA9XG4gICAgICAgICAgY29sSW5kZXggPT09IC0xXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogZml4ZWRDb2x1bW5zSW5mb3NMZWZ0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIGNvbEluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIud2lkdGgsIDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xJbmRleCA9IGZpeGVkQ29sdW1uc0luZm9zUmlnaHQuZmluZEluZGV4KFxuICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleFxuICAgICAgICApXG4gICAgICAgIGlmIChjb2xJbmRleCA9PT0gZml4ZWRDb2x1bW5zSW5mb3NSaWdodC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgY29sLmlzRmlyc3RSaWdodCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2wuaXNGaXJzdFJpZ2h0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvLyDlrrnplJnvvIzkuI3lhYHorrggc2xpY2UoMCwgLTEpIOeahOWNsemZqeaTjeS9nFxuICAgICAgICBjb2wub2Zmc2V0ID1cbiAgICAgICAgICBjb2xJbmRleCA9PT0gLTFcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0XG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIGNvbEluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgY3VyKSA9PiBhY2MgKyBjdXIud2lkdGgsIDApXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZml4ZWRDb2x1bW5zSW5mb3MgfSwgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVUaGVhZE1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc1Jlc2l6ZXJTaG93IH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKCFpc1Jlc2l6ZXJTaG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNSZXNpemVyU2hvdzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoZWFkTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKE9iamVjdC5rZXlzKGN1cnJlbnRseVJlc2l6aW5nKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWxleW8gOihjFxuICAgKi9cbiAgcHVibGljIGhhbmRsZUV4cGFuZCA9IChrZXk6IFJlYWN0LlJlYWN0VGV4dCkgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgeyBleHBhbmRlZFJvd0tleXM6IGV4cGFuZGVkUm93S2V5c1Byb3AsIG9uRXhwYW5kQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBleHBhbmRlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBrZXlzID0gWy4uLmV4cGFuZGVkUm93S2V5c11cbiAgICBjb25zdCBpbmRleCA9IGtleXMuaW5kZXhPZihrZXkpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGtleXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgICBpZiAoZXhwYW5kZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkUm93S2V5czoga2V5cyB9KVxuICAgIH1cbiAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgIG9uRXhwYW5kQ2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAieaLqeihjFxuICAgKi9cbiAgcHVibGljIGhhbmRsZVNlbGVjdCA9IChrZXk6IFJlYWN0LlJlYWN0VGV4dCwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AsXG4gICAgICBzZWxlY3RNdWx0aXBsZSxcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgbGV0IGtleXMgPSBbLi4uc2VsZWN0ZWRSb3dLZXlzXVxuICAgIGlmIChzZWxlY3RNdWx0aXBsZSkge1xuICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMuc3BsaWNlKHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGtleSksIDEpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBba2V5XVxuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czoga2V5cyxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvblNlbGVjdENoYW5nZSkge1xuICAgICAgb25TZWxlY3RDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YCJ5oup6KGM5YWo6YCJ5pON5L2cXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlU2VsZWN0QWxsID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0Q2hhbmdlLCBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5c1Byb3AgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGtleXMgPSBbLi4uc2VsZWN0ZWRSb3dLZXlzXVxuICAgIGNvbnN0IGF2YWlsYWJsZUtleXMgPSB0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKClcbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgYXZhaWxhYmxlS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGtleXMucHVzaChrZXkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOS4jeiDveebtOaOpea4heepuuaVsOe7hO+8jOWboOS4uuWPr+iDveS8oOWFpeS6huS4juW9k+WJjSBkYXRhU291cmNlIOaXoOWFs+eahCBrZXlz77ybXG4gICAgICAvLyDkuZ/kuI3og73nm7TmjqUgc3BsaWNl77yM5Zug5Li66KaB5qOA5p+l5piv5ZCmIGdldFNlbGVjdFByb3BzLmRpc2FibGVk44CCXG4gICAgICBzZWxlY3RlZFJvd0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChhdmFpbGFibGVLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBrZXlzLnNwbGljZShrZXlzLmluZGV4T2Yoa2V5KSwgMSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3AgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IGtleXMsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAob25TZWxlY3RDaGFuZ2UpIHtcbiAgICAgIG9uU2VsZWN0Q2hhbmdlKGtleXMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuW3suWFqOmDqOmAieaLqVxuICAgKi9cbiAgcHVibGljIGhhc1NlbGVjdGVkQWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKClcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlbGVjdGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChcbiAgICAgIGRhdGFTb3VyY2UgJiZcbiAgICAgIGRhdGFTb3VyY2UubGVuZ3RoICYmXG4gICAgICBrZXlzLmxlbmd0aCAmJlxuICAgICAga2V5cy5ldmVyeSgoa2V5KSA9PiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHVibGljIGdldEF2YWlsYWJsZVJvd3NLZXlzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgZ2V0U2VsZWN0UHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+ID0gW11cbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBkYXRhU291cmNlLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Yga2V5ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICEoXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMgJiZcbiAgICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpICYmXG4gICAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKS5kaXNhYmxlZFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYWJsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhU291cmNlLFxuICAgICAgZXhwYW5kSWNvblZpc2libGUsXG4gICAgICBleHBhbmRlZFJvd1JlbmRlcixcbiAgICAgIGV4cGFuZE9uUm93Q2xpY2ssXG4gICAgICBnZXRIZWFkQ2xhc3NOYW1lLFxuICAgICAgZ2V0SGVhZFN0eWxlLFxuICAgICAgZ2V0Um93Q2xhc3NOYW1lLFxuICAgICAgZ2V0Um93U3R5bGUsXG4gICAgICBnZXRTZWxlY3RQcm9wcyxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBvbkV4cGFuZENoYW5nZSxcbiAgICAgIG9uUm93TW91c2VFbnRlcixcbiAgICAgIG9uUm93TW91c2VMZWF2ZSxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgc2VsZWN0TXVsdGlwbGUsXG4gICAgICBzZWxlY3RPblJvd0NsaWNrLFxuICAgICAgc2l6ZSxcbiAgICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgICB2aXJ0dWFsTGlzdFByb3BzLFxuICAgICAgdmlydHVhbExpc3RTdHlsZSxcbiAgICAgIHZpcnR1YWxTY3JvbGwsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIGFmZml4ZWRUb3AsXG4gICAgICBhZmZpeGVkQm90dG9tLFxuICAgICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3MsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WCxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgbWFpblRhYmxlU3R5bGUsXG4gICAgICByZXNpemVkLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzLFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCB7XG4gICAgICBnZXRDb2x1bW5zLFxuICAgICAgLy8gZ2V0TGVmdENvbHVtbnNXaWR0aCxcbiAgICAgIGdldEdyb3VwQ29sdW1uc0RlcHRoLFxuICAgICAgaXNBbnlDb2x1bW5zTGVmdEZpeGVkLFxuICAgIH0gPSB0aGlzLmNvbHVtbk1hbmFnZXJcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRDb2x1bW5zKCkgYXMgSUNvbHVtblByb3BzPFQ+W11cblxuICAgIGNvbnN0IHRoZWFkU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICBoZWlnaHQ6IGAke1REX0hFSUdIVFtzaXplIHx8IFwic21hbGxcIl0gKiBnZXRHcm91cENvbHVtbnNEZXB0aCgpfXB4YCxcbiAgICAgIC4uLigoZ2V0SGVhZFN0eWxlICYmIGdldEhlYWRTdHlsZSgpKSB8fCB7fSksXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV5byA6KGM5ZKM6YCJ5oup6KGM5pe277yMdGhlYWTlkozmr4/ooYznmoTnrKzkuIDliJfliY3pg73opoHliqDlhaXkuIDliJdcbiAgICAgKiDmraTliJfkuZ/kvJrlvbHlk40gc3RpY2t5IOeahOWBj+enu+S9jee9rlxuICAgICAqL1xuICAgIGNvbnN0IHNlbGVjdEFuZEV4cGFuZCA9ICEhb25TZWxlY3RDaGFuZ2UgJiYgISFvbkV4cGFuZENoYW5nZVxuICAgIGNvbnN0IHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlID1cbiAgICAgIGV4cGFuZEljb25WaXNpYmxlICYmICghIW9uU2VsZWN0Q2hhbmdlIHx8ICEhb25FeHBhbmRDaGFuZ2UpXG5cbiAgICBjb25zdCB0aGVhZCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXswfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgYCR7cHJlZml4fS10aGVhZGAsXG4gICAgICAgICAgZ2V0SGVhZENsYXNzTmFtZSAmJiBnZXRIZWFkQ2xhc3NOYW1lKClcbiAgICAgICAgKX1cbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZVRoZWFkTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRoZWFkTW91c2VMZWF2ZX1cbiAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJtYWluVGhlYWRcIil9XG4gICAgICAgIHN0eWxlPXt0aGVhZFN0eWxlfVxuICAgICAgPlxuICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwgYCR7cHJlZml4fS10aF9mdW5jdGlvbmFsYCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9mdW5jdGlvbmFsX2JvdGhgXTogc2VsZWN0QW5kRXhwYW5kLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9XCJmdW5jdGlvbmFsLWFsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlbGVjdE11bHRpcGxlICYmICEhb25TZWxlY3RDaGFuZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsYH0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGx9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmhhc1NlbGVjdGVkQWxsKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCgoY29sLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFsaWduLFxuICAgICAgICAgICAgZGF0YUluZGV4LFxuICAgICAgICAgICAgZmlsdGVycyxcbiAgICAgICAgICAgIGZpeGVkLFxuICAgICAgICAgICAgb25GaWx0ZXIsXG4gICAgICAgICAgICBvblNvcnQsXG4gICAgICAgICAgICBzb3J0T3JkZXIsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIH0gPSBjb2xcblxuICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgY29uc3QgY2xpY2thYmxlID1cbiAgICAgICAgICAgICEhb25Tb3J0IHx8XG4gICAgICAgICAgICAoc29ydE9yZGVyICE9PSBudWxsICYmIHNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgISFvbkZpbHRlciB8fFxuICAgICAgICAgICAgISFmaWx0ZXJzXG4gICAgICAgICAgbGV0IG1pbldpZHRoID0gMFxuICAgICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1pbldpZHRoID1cbiAgICAgICAgICAgICAgTWF0aC5jZWlsKHRpdGxlLmxlbmd0aCA+IDQgPyB0aXRsZS5sZW5ndGggLyAyIDogdGl0bGUubGVuZ3RoKSAqXG4gICAgICAgICAgICAgICAgMTMgK1xuICAgICAgICAgICAgICAxNlxuICAgICAgICAgICAgaWYgKGNsaWNrYWJsZSkge1xuICAgICAgICAgICAgICBtaW5XaWR0aCArPSAyMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZmxleFZhbHVlXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGh9IDAgYXV0b2BcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKHdpZHRoLmxlbmd0aCAtIHdpZHRoLmxhc3RJbmRleE9mKFwicHhcIikgPT09IDIpIHtcbiAgICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGguc2xpY2UoMCwgLTIpfSAwIGF1dG9gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmbGV4VmFsdWUgPSBgMCAwICR7d2lkdGh9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmbGV4VmFsdWUgPSBgJHtNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKX0gMCBhdXRvYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiB0aCBsZWZ0IOWAvO+8muWPluW+lyByZXNpemUtb2JzZXJ2ZXIg5a2Y5YKo55qE6K+l5YiX55qE5YGP56e76YeP77yM5Yqg5LiK5aaC5p6c5pyJ6YCJ5oup6KGM44CB5bGV5byA6KGM5pe255qEIFNFTEVDVF9URF9XSURUSCDigJTigJQg5LuF5a+5IGxlZnQg5pyJ5pWIXG4gICAgICAgICAgICogdGggcmlnaHQg5YC877ya5Y+W5b6XIHJlc2l6ZS1vYnNlcnZlciDlrZjlgqjnmoTor6XliJfnmoTlgY/np7vph4/vvIzliqDkuIrlpoLmnpzlhoXmu5rliqjml7bnmoTmu5rliqjmnaHlrr3luqbvvIgxNO+8iSDigJTigJQg5LuF5a+5IHJpZ2h0IOacieaViFxuICAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVzaXplT2JzZXJ2ZXJcbiAgICAgICAgICAgICAgb25SZXNpemU9eyh7IHdpZHRoOiB3aWR0aFJlc2l6ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUaFJlc2l6ZSh3aWR0aFJlc2l6ZSwgZGF0YUluZGV4LCBpbmRleCwgZml4ZWQpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshZml4ZWR9XG4gICAgICAgICAgICAgIGtleT17ZGF0YUluZGV4IHx8IGluZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGhgLCB7XG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTogY2xpY2thYmxlLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdGBdOiBpc0ZpeGVkTGVmdChjb2wpLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfcmlnaHRgXTogaXNGaXhlZFJpZ2h0KGNvbCksXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9sZWZ0TGFzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0Rmlyc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICAgICAgICAgICk/LmlzRmlyc3RSaWdodCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICh0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxlY3RBbmRFeHBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFNFTEVDVF9URF9XSURUSFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAwKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBpc0ZpeGVkUmlnaHQoY29sKVxuICAgICAgICAgICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAgICAgICAgIChpc01haW5UYWJsZU92ZXJmbG93WSAmJiBoZWlnaHQgPyAxNCA6IDApXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgZmxleDogcmVzaXplZENvbCA/IGAke3Jlc2l6ZWRDb2wudmFsdWV9IDAgYXV0b2AgOiBmbGV4VmFsdWUsXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogcmVzaXplZENvbCA/IHJlc2l6ZWRDb2wudmFsdWUgOiB3aWR0aCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBhbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogcmVzaXplZENvbFxuICAgICAgICAgICAgICAgICAgICA/IHJlc2l6ZWRDb2wudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgOiB3aWR0aCB8fCBNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRhdGEtY29sdW1uPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGNvbCwgeyBpbmRleCwgY29sdW1ucyB9KX1cbiAgICAgICAgICAgICAgICB7Y29sLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRoR3JvdXBgfT5cbiAgICAgICAgICAgICAgICAgICAge2NvbC5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKGNoaWxkQ29sOiBJQ29sdW1uUHJvcHM8VD4sIGNoaWxkQ29sSW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wub25Tb3J0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hpbGRDb2wuc29ydE9yZGVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5vbkZpbHRlciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFjaGlsZENvbC5maWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjaGlsZENvbC5kYXRhSW5kZXggfHwgY2hpbGRDb2xJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjEwMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2hpbGRDb2wuYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChjaGlsZENvbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZENvbC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGhHcm91cGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkQ29sLmNoaWxkcmVuLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sOiBJQ29sdW1uUHJvcHM8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDb2xJbmRleDogbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9jbGlja2FibGVgXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLm9uU29ydCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChncmFuZENvbC5zb3J0T3JkZXIgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sLnNvcnRPcmRlciAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZ3JhbmRDb2wub25GaWx0ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z3JhbmRDb2wuZGF0YUluZGV4IHx8IGdyYW5kQ29sSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjEwMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBncmFuZENvbC5hbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdlbmVyYXRlVGhDZWxsKGdyYW5kQ29sKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZXNpemVPYnNlcnZlcj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3QgZ2VuZXJhdGVUcnMgPSAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgICBjb25zdCBjb2xBcnJheTogYW55ID0gW11cbiAgICAgIGNvbnN0IHNlbGVjdFByb3BzR2V0dGVkID0gZ2V0U2VsZWN0UHJvcHMgJiYgZ2V0U2VsZWN0UHJvcHMocm93LCByb3dJbmRleClcbiAgICAgIGNvbnN0IGFsbFNlbGVjdFByb3BzID0ge1xuICAgICAgICBjaGVja2VkOiBzZWxlY3RlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGAsXG4gICAgICAgIG9uQ2hhbmdlOiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3Qoa2V5LCBjaGVja2VkKSxcbiAgICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCksXG4gICAgICAgIC4uLihzZWxlY3RQcm9wc0dldHRlZCB8fCB7fSksXG4gICAgICB9XG4gICAgICBjb25zdCBzZWxlY3RQcm9wcyA9IG9taXQoYWxsU2VsZWN0UHJvcHMsIFtcInBvcG92ZXJQcm9wc1wiXSlcbiAgICAgIGNvbnN0IHNlbGVjdENvbnRlbnQgPSBzZWxlY3RNdWx0aXBsZSA/IChcbiAgICAgICAgPENoZWNrYm94IHsuLi5zZWxlY3RQcm9wc30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxSYWRpbyB7Li4uc2VsZWN0UHJvcHN9IC8+XG4gICAgICApXG4gICAgICBjb25zdCBleHBhbmRDb250ZW50ID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXhwYW5kKGtleSl9XG4gICAgICAgICAgcm9sZT1cIm5vbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZEljb25gfSBpY29uPVwiYXJyb3ctZG93blwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgbGV0IHNlbGVjdENlbGwgPSBvbkV4cGFuZENoYW5nZSA/IGV4cGFuZENvbnRlbnQgOiBzZWxlY3RDb250ZW50XG4gICAgICBpZiAoc2VsZWN0QW5kRXhwYW5kKSB7XG4gICAgICAgIHNlbGVjdENlbGwgPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tc2VsZWN0Q29tcG9uZW50LXdyYXBwZXJgfT5cbiAgICAgICAgICAgIHtzZWxlY3RDb250ZW50fVxuICAgICAgICAgICAge2V4cGFuZENvbnRlbnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdlbmVyYXRlVHIgPSAoY29sdW1uc1BhcmFtOiBhbnlbXSwgcGFyZW50SW5kZXg/OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29sdW1uc1BhcmFtLmZvckVhY2goKGNvbCwgY29sSW5kZXhQYXJhbSkgPT4ge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIOWmguaenOWJjemdoiDnmoQgY29sIOaciSBjaGlsZHJlbu+8jOWImeimgeaKiiBjaGlsZHJlbi5sZW5ndGgg6aKd5aSW5Yqg5YiwIGNvbEluZGV4XG4gICAgICAgICAgICovXG4gICAgICAgICAgbGV0IGNvbEluZGV4ID0gY29sSW5kZXhQYXJhbVxuICAgICAgICAgIGlmIChwYXJlbnRJbmRleCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuQ291bnQgPSBjb2x1bW5zW2ldLmNoaWxkcmVuPy5sZW5ndGggfHwgMVxuICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5Db3VudCkge1xuICAgICAgICAgICAgICAgIGNvbEluZGV4ICs9IGNoaWxkcmVuQ291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWNvbC5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29sQXJyYXkucHVzaCh0aGlzLmdlbmVyYXRlVGJvZHlDZWxsKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZW5lcmF0ZVRyKGNvbC5jaGlsZHJlbiwgY29sSW5kZXhQYXJhbSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBnZW5lcmF0ZVRyKGNvbHVtbnMpXG4gICAgICBjb25zdCB0ciA9IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgIGAke3ByZWZpeH0tdHJgLFxuICAgICAgICAgICAgZ2V0Um93Q2xhc3NOYW1lICYmIGdldFJvd0NsYXNzTmFtZShyb3csIHJvd0luZGV4KSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfY2xpY2thYmxlYF06IGV4cGFuZE9uUm93Q2xpY2sgfHwgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfZXhwYW5kZWRgXTogZXhwYW5kZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRyX3NlbGVjdGVkYF06IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICl9XG4gICAgICAgICAga2V5PXtrZXkgfHwgcm93SW5kZXh9XG4gICAgICAgICAgcm9sZT1cInJvd1wiXG4gICAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17XG4gICAgICAgICAgICBvblJvd01vdXNlRW50ZXJcbiAgICAgICAgICAgICAgPyAoZSkgPT4gb25Sb3dNb3VzZUVudGVyKHJvdywgcm93SW5kZXgsIGUpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17XG4gICAgICAgICAgICBvblJvd01vdXNlTGVhdmVcbiAgICAgICAgICAgICAgPyAoZSkgPT4gb25Sb3dNb3VzZUxlYXZlKHJvdywgcm93SW5kZXgsIGUpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZVJvd0NsaWNrKHJvdywgcm93SW5kZXgsIGUpfVxuICAgICAgICAgIG9uS2V5RG93bj17bm9vcH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uKChnZXRSb3dTdHlsZSAmJiBnZXRSb3dTdHlsZShyb3csIHJvd0luZGV4KSkgfHwge30pLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlYWRQbGFjZWhvbGRlclZpc2libGUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10ZGAsIGAke3ByZWZpeH0tdGRfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10ZF9sZWZ0YF06IGlzQW55Q29sdW1uc0xlZnRGaXhlZCgpLFxuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2Z1bmN0aW9uYWxfYm90aGBdOiBzZWxlY3RBbmRFeHBhbmQsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBrZXk9XCJmdW5jdGlvbmFsXCJcbiAgICAgICAgICAgICAgcm9sZT1cImNlbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiB2ZXJ0aWNhbEFsaWduICYmIFZFUlRJQ0FMX0FMSUdOW3ZlcnRpY2FsQWxpZ25dLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VsZWN0UHJvcHNHZXR0ZWQ/LnBvcG92ZXJQcm9wcz8ucG9wdXAgPyAoXG4gICAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuMX1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25FZGdlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB7Li4uKFxuICAgICAgICAgICAgICAgICAgICAgIChnZXRTZWxlY3RQcm9wcyAmJiBnZXRTZWxlY3RQcm9wcyhyb3csIHJvd0luZGV4KSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICApLnBvcG92ZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdENlbGx9XG4gICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIHNlbGVjdENlbGxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvbEFycmF5fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIGlmIChvbkV4cGFuZENoYW5nZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHRyLFxuICAgICAgICAgIGV4cGFuZGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZXhwYW5kUm93YH0ga2V5PVwidHItZXhwYW5kXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tZXhwYW5kUm93LWlubmVyYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICBpc01haW5UYWJsZU92ZXJmbG93WFxuICAgICAgICAgICAgICAgICAgICA/IHsgd2lkdGg6IG1haW5UYWJsZVN0eWxlLndpZHRoIH1cbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ISFleHBhbmRlZFJvd1JlbmRlciAmJiBleHBhbmRlZFJvd1JlbmRlcihyb3csIHJvd0luZGV4KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRyXG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIGhlYWRlckFmZml4ZWQgPyAoXG4gICAgICAgIDxBZmZpeFxuICAgICAgICAgIGtleT17MH1cbiAgICAgICAgICBvZmZzZXRUb3A9e2hlYWRlckFmZml4ZWRPZmZzZXRUb3B9XG4gICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLndyYXBwZXJ9XG4gICAgICAgICAgZ2V0VGFyZ2V0PXtoZWFkZXJBZmZpeEdldFRhcmdldH1cbiAgICAgICAgICBvbkNoYW5nZT17KGJvb2wpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZmZpeGVkVG9wOiBib29sIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgLy8g5Zu65a6a55qE6YKj5LiA5Yi75Lmf6ZyA6KaB56uL5Y2z6YeN5paw5a6a5L2N44CCXG4gICAgICAgICAgICAgIC8vIOmHjeaWsOWumuS9jeOAgeWMheaLrOS4i+mdoueahCBjbGFzc05hbWUsIHN0eWxlIOWPquWcqOS4u+ihqOagvOS4iuWPkeeUn++8jOWboOS4uuWbuuWumuWIl+eahCBBZmZpeCDooYzkuLrlvojljZXnuq/jgIJcbiAgICAgICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGwoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXthZmZpeGVkVG9wID8gYCR7cHJlZml4fS1hZmZpeGAgOiBcIlwifVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiYmFzZWxpbmVcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAuLi4oYWZmaXhlZFRvcCA/IG1haW5UYWJsZVN0eWxlIDoge30pLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJhZmZpeEhlYWRlclwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVhZH1cbiAgICAgICAgPC9BZmZpeD5cbiAgICAgICkgOiAoXG4gICAgICAgIHRoZWFkXG4gICAgICApLFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9ezF9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS10Ym9keWB9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRhYmxlQm9keVwiKX1cbiAgICAgID5cbiAgICAgICAgeyF2aXJ0dWFsU2Nyb2xsICYmXG4gICAgICAgICAgZGF0YVNvdXJjZSAmJlxuICAgICAgICAgICEhZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgICAgICBkYXRhU291cmNlLm1hcCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgfSl9XG4gICAgICAgIHt2aXJ0dWFsU2Nyb2xsICYmIGRhdGFTb3VyY2UgJiYgISFkYXRhU291cmNlLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGRhdGE9e2RhdGFTb3VyY2V9XG4gICAgICAgICAgICBpdGVtS2V5PVwiZGF0YUluZGV4XCJcbiAgICAgICAgICAgIGhlaWdodD17KGhlaWdodCB8fCA0MDApIC0gNDB9XG4gICAgICAgICAgICBpdGVtSGVpZ2h0PXs0Mn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS12aXJ0dWFsLXdyYXBwZXJgfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgLi4udmlydHVhbExpc3RTdHlsZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB7Li4udmlydHVhbExpc3RQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUcnMocm93LCByb3dJbmRleClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+LFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1ggJiYgaGVhZGVyQWZmaXhlZCAmJiAoXG4gICAgICAgIDxBZmZpeFxuICAgICAgICAgIGtleT17Mn1cbiAgICAgICAgICBvZmZzZXRCb3R0b209ezB9XG4gICAgICAgICAgZ2V0Q29udGFpbmVyPXsoKSA9PiB0aGlzLm1haW5UYWJsZUJvZHl9XG4gICAgICAgICAgcmVmPXt0aGlzLnNhdmVSZWYoXCJhZmZpeFNjcm9sbGJhclwiKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1hZmZpeFNjcm9sbGJhcmAsIHtcbiAgICAgICAgICAgIFtgJHtwcmVmaXh9LWFmZml4U2Nyb2xsYmFyX3Nob3dgXTogYWZmaXhlZEJvdHRvbSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgekluZGV4OiAyLFxuICAgICAgICAgICAgLi4ubWFpblRhYmxlU3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblNjcm9sbD17KGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT5cbiAgICAgICAgICAgIHRoaXMuc3luY1RhYmxlU2Nyb2xsUG9zaXRpb24oZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoYm9vbCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFmZml4ZWRCb3R0b206IGJvb2wgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiB0aGlzLm1haW5UYWJsZT8uc2Nyb2xsV2lkdGggfX0gLz5cbiAgICAgICAgPC9BZmZpeD5cbiAgICAgICksXG4gICAgXVxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVGhDZWxsID0gKGNvbDogSUNvbHVtblByb3BzPFQ+LCBvcHRpb25zPzogSUJhc2VPYmplY3QpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGlnbixcbiAgICAgIGNvbHVtbnNSZXNpemFibGUsXG4gICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZSxcbiAgICAgIGdldEhlYWRDZWxsU3R5bGUsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHJlc2l6YWJsZTogY29sUmVzaXphYmxlIH0gPSBjb2xcbiAgICBsZXQgcmVzaXphYmxlID0gdHJ1ZVxuICAgIGlmICh0eXBlb2YgY29sUmVzaXphYmxlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmVzaXphYmxlID0gY29sUmVzaXphYmxlXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29sdW1uc1Jlc2l6YWJsZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJlc2l6YWJsZSA9IGNvbHVtbnNSZXNpemFibGVcbiAgICB9XG5cbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nLCBpc1Jlc2l6ZXJTaG93IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBpc0xhc3RUaCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbmRleCA9PT0gb3B0aW9ucy5jb2x1bW5zLmxlbmd0aCAtIDFcblxuICAgIGNvbnN0IHRoQ2VsbCA9IChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGAke3ByZWZpeH0tY2VsbGAsXG4gICAgICAgICAgZ2V0SGVhZENlbGxDbGFzc05hbWUgJiZcbiAgICAgICAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lKGNvbCwgb3B0aW9ucyA/IG9wdGlvbnMuaW5kZXggOiB1bmRlZmluZWQpXG4gICAgICAgICl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6XG4gICAgICAgICAgICAoY29sLmFsaWduICYmIEhPUklaT05UQUxfQUxJR05bY29sLmFsaWduXSkgfHxcbiAgICAgICAgICAgIChhbGlnbiAmJiBIT1JJWk9OVEFMX0FMSUdOW2FsaWduXSkgfHxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAuLi4oKGdldEhlYWRDZWxsU3R5bGUgJiZcbiAgICAgICAgICAgIGdldEhlYWRDZWxsU3R5bGUoY29sLCBvcHRpb25zID8gb3B0aW9ucy5pbmRleCA6IHVuZGVmaW5lZCkpIHx8XG4gICAgICAgICAgICB7fSksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHshY29sLm9uU29ydCAmJlxuICAgICAgICAgIChjb2wuc29ydE9yZGVyID09PSBudWxsIHx8IGNvbC5zb3J0T3JkZXIgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICAgICAhY29sLm9uRmlsdGVyICYmXG4gICAgICAgICAgIWNvbC5maWx0ZXJzICYmXG4gICAgICAgICAgY29sLnRpdGxlfVxuICAgICAgICB7KCEhY29sLm9uU29ydCB8fFxuICAgICAgICAgIChjb2wuc29ydE9yZGVyICE9PSBudWxsICYmIGNvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkpICYmIChcbiAgICAgICAgICA8VGFibGVTb3J0XG4gICAgICAgICAgICBvblNvcnQ9eyhvcmRlcikgPT4gKGNvbC5vblNvcnQgPyBjb2wub25Tb3J0KG9yZGVyKSA6IHt9KX1cbiAgICAgICAgICAgIHNvcnRPcmRlcj17Y29sLnNvcnRPcmRlcn1cbiAgICAgICAgICAgIHRpdGxlPXtjb2wudGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyghIWNvbC5vbkZpbHRlciB8fCAhIWNvbC5maWx0ZXJzKSAmJiAoXG4gICAgICAgICAgPFRhYmxlRmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXJlZFZhbHVlPXtjb2wuZmlsdGVyZWRWYWx1ZX1cbiAgICAgICAgICAgIGZpbHRlclZpc2libGU9e2NvbC5maWx0ZXJWaXNpYmxlfVxuICAgICAgICAgICAgZmlsdGVyTXVsdGlwbGU9e2NvbC5maWx0ZXJNdWx0aXBsZX1cbiAgICAgICAgICAgIGZpbHRlclBvcG92ZXJQcm9wcz17Y29sLmZpbHRlclBvcG92ZXJQcm9wc31cbiAgICAgICAgICAgIGZpbHRlcnM9e2NvbC5maWx0ZXJzfVxuICAgICAgICAgICAgb25GaWx0ZXI9eyhmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNvbC5vbkZpbHRlcikge1xuICAgICAgICAgICAgICAgIGNvbC5vbkZpbHRlcihmaWx0ZXIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkZpbHRlclZpc2libGVDaGFuZ2U9eyh2aXNpYmxlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjb2wub25GaWx0ZXJWaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgY29sLm9uRmlsdGVyVmlzaWJsZUNoYW5nZSh2aXNpYmxlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGl0bGU9e2NvbC50aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IWNvbC5maXhlZCAmJiByZXNpemFibGUgJiYgIWlzTGFzdFRoICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1yZXNpemVyYCwge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS1yZXNpemVyX3Nob3dgXTogaXNSZXNpemVyU2hvdyxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmVzaXplcl9jdXJyZW50YF06XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcuZGF0YUluZGV4ID09PSBjb2wuZGF0YUluZGV4LFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sKX1cbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgaWYgKGNvbC5wb3BvdmVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC4zfVxuICAgICAgICAgIHBsYWNlbWVudD17XG4gICAgICAgICAgICBjb2wuYWxpZ24gPT09IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPyBcInRvcFwiXG4gICAgICAgICAgICAgIDogY29sLmFsaWduID09PSBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgPyBcInRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgOiBcInRvcExlZnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbkVkZ2VcbiAgICAgICAgICBhcnJvd2VkXG4gICAgICAgICAgcG9wdXA9e2NvbC5wb3BvdmVyfVxuICAgICAgICA+XG4gICAgICAgICAge3RoQ2VsbH1cbiAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhDZWxsXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVUYm9keUNlbGwgPSAoXG4gICAgcm93OiBULFxuICAgIGNlbGw6IElDb2x1bW5Qcm9wczxUPixcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNlbGxJbmRleDogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduOiBhbGlnblByb3AsXG4gICAgICBleHBhbmRJY29uVmlzaWJsZSxcbiAgICAgIGdldENlbGxDbGFzc05hbWUsXG4gICAgICBnZXRDZWxsUHJvcHMsXG4gICAgICBnZXRDZWxsU3R5bGUsXG4gICAgICBvbkV4cGFuZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgICAgdmVydGljYWxBbGlnbjogdmVydGljYWxBbGlnblByb3AsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzZWxlY3RBbmRFeHBhbmQgPSAhIW9uU2VsZWN0Q2hhbmdlICYmICEhb25FeHBhbmRDaGFuZ2VcbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcsIGZpeGVkQ29sdW1uc0luZm9zLCByZXNpemVkIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qge1xuICAgICAgYWxpZ24sXG4gICAgICBkYXRhSW5kZXgsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgb25GaWx0ZXIsXG4gICAgICBvblNvcnQsXG4gICAgICByZW5kZXIsXG4gICAgICBzb3J0T3JkZXIsXG4gICAgICB0aXRsZSxcbiAgICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgICB3aWR0aCxcbiAgICB9ID0gY2VsbFxuICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAhIW9uU29ydCB8fFxuICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICEhZmlsdGVyc1xuICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtaW5XaWR0aCA9XG4gICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKiAxMyArIDE2XG4gICAgICBpZiAoY2xpY2thYmxlKSB7XG4gICAgICAgIG1pbldpZHRoICs9IDIwXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBmbGV4VmFsdWVcbiAgICBpZiAodHlwZW9mIHdpZHRoID09PSBcIm51bWJlclwiKSB7XG4gICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aH0gMCBhdXRvYFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAod2lkdGgubGVuZ3RoIC0gd2lkdGgubGFzdEluZGV4T2YoXCJweFwiKSA9PT0gMikge1xuICAgICAgICBmbGV4VmFsdWUgPSBgJHt3aWR0aC5zbGljZSgwLCAtMil9IDAgYXV0b2BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsZXhWYWx1ZSA9IGAwIDAgJHt3aWR0aH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsZXhWYWx1ZSA9IGAke01hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpfSAwIGF1dG9gXG4gICAgfVxuICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgY29uc3QgY2VsbENsYXNzTmFtZSA9XG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lICYmIGdldENlbGxDbGFzc05hbWUocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KVxuICAgIGNvbnN0IGNlbGxQcm9wcyA9XG4gICAgICAoZ2V0Q2VsbFByb3BzICYmIGdldENlbGxQcm9wcyhyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpKSB8fCB7fVxuICAgIGNvbnN0IGNlbGxTdHlsZSA9XG4gICAgICAoZ2V0Q2VsbFN0eWxlICYmIGdldENlbGxTdHlsZShyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpKSB8fCB7fVxuICAgIGNvbnN0IHsgcm93U3BhbiwgY29sU3BhbiwgLi4ub3RoZXJDZWxsUHJvcHMgfSA9IGNlbGxQcm9wc1xuICAgIGlmIChyb3dTcGFuIHx8IGNvbFNwYW4pIHtcbiAgICAgIHRoaXMuY29tYmluZWRDZWxsc0luZm8ucHVzaCh7XG4gICAgICAgIGNlbGwsXG4gICAgICAgIGNlbGxJbmRleCxcbiAgICAgICAgY29sU3BhbixcbiAgICAgICAgcm93LFxuICAgICAgICByb3dJbmRleCxcbiAgICAgICAgcm93U3BhbixcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRkYCwge1xuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX3Jlc2l6aW5nYF06XG4gICAgICAgICAgICBkYXRhSW5kZXggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcuZGF0YUluZGV4ID09PSBkYXRhSW5kZXgsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdGBdOiBpc0ZpeGVkTGVmdChjZWxsKSxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodGBdOiBpc0ZpeGVkUmlnaHQoY2VsbCksXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgKT8uaXNMYXN0TGVmdCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICk/LmlzRmlyc3RSaWdodCxcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9jb21iaW5lZGBdOiByb3dTcGFuIHx8IGNvbFNwYW4sXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBjZWxsSW5kZXh9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbGVmdDogaXNGaXhlZExlZnQoY2VsbClcbiAgICAgICAgICAgID8gKGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpXG4gICAgICAgICAgICAgICAgPy5vZmZzZXQgfHwgMCkgK1xuICAgICAgICAgICAgICAodGhlYWRQbGFjZWhvbGRlclZpc2libGVcbiAgICAgICAgICAgICAgICA/IHNlbGVjdEFuZEV4cGFuZFxuICAgICAgICAgICAgICAgICAgPyBTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSFxuICAgICAgICAgICAgICAgICAgOiBTRUxFQ1RfVERfV0lEVEhcbiAgICAgICAgICAgICAgICA6IDApXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICByaWdodDogaXNGaXhlZFJpZ2h0KGNlbGwpXG4gICAgICAgICAgICA/IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXgpPy5vZmZzZXRcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZsZXg6IHJlc2l6ZWRDb2wgPyBgJHtyZXNpemVkQ29sLnZhbHVlfSAwIGF1dG9gIDogZmxleFZhbHVlLFxuICAgICAgICAgIHdpZHRoOiByZXNpemVkQ29sXG4gICAgICAgICAgICA/IHJlc2l6ZWRDb2wudmFsdWVcbiAgICAgICAgICAgIDogd2lkdGggfHwgTWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCksXG4gICAgICAgICAgbWF4V2lkdGg6IHJlc2l6ZWRDb2wgPyByZXNpemVkQ29sLnZhbHVlIDogd2lkdGggfHwgXCJcIixcbiAgICAgICAgfX1cbiAgICAgICAgcm9sZT1cImNlbGxcIlxuICAgICAgICBkYXRhLXJvdz17cm93SW5kZXh9XG4gICAgICAgIGRhdGEtY29sdW1uPXtjZWxsSW5kZXh9XG4gICAgICAgIHsuLi5vdGhlckNlbGxQcm9wc31cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LWNlbGxgLCBjZWxsQ2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYWxpZ25JdGVtczpcbiAgICAgICAgICAgICAgKHZlcnRpY2FsQWxpZ24gJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnbl0pIHx8XG4gICAgICAgICAgICAgICh2ZXJ0aWNhbEFsaWduUHJvcCAmJiBWRVJUSUNBTF9BTElHTlt2ZXJ0aWNhbEFsaWduUHJvcF0pIHx8XG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlxuICAgICAgICAgICAgICAoYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnbl0pIHx8XG4gICAgICAgICAgICAgIChhbGlnblByb3AgJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnblByb3BdKSB8fFxuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAuLi5jZWxsU3R5bGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxJbm5lcmB9PlxuICAgICAgICAgICAge3JlbmRlciA/IHJlbmRlcihyb3csIGNlbGwsIHJvd0luZGV4LCBjZWxsSW5kZXgpIDogcm93W2RhdGFJbmRleF19XG4gICAgICAgICAgICB7KHJvd1NwYW4gfHwgY29sU3BhbikgJiYgKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWNlbGxfY29tYmluZWRgfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvbWJpbmVkQ2VsbFN0eWxlKFxuICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW4sXG4gICAgICAgICAgICAgICAgICAgIGNvbFNwYW5cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3JlbmRlclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXIocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KVxuICAgICAgICAgICAgICAgICAgOiByb3dbZGF0YUluZGV4XX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb21iaW5lZENlbGxTdHlsZSA9IChcbiAgICBfOiBJQmFzZU9iamVjdCxcbiAgICBfXzogSUNvbHVtblByb3BzPFQ+LFxuICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgY29sSW5kZXg6IG51bWJlcixcbiAgICByb3dTcGFuOiBudW1iZXIsXG4gICAgY29sU3BhbjogbnVtYmVyXG4gICkgPT4ge1xuICAgIGNvbnN0IGdldFRhYmxlQ2VsbCA9IChyb3dJbmRleFBhcmFtOiBudW1iZXIsIGNvbEluZGV4UGFyYW06IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMubWFpblRhYmxlKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMubWFpblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwicm93XCJdJylbXG4gICAgICAgICAgcm93SW5kZXhQYXJhbVxuICAgICAgICBdXG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICByZXR1cm4gcm93LmNoaWxkcmVuW2NvbEluZGV4UGFyYW1dXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIGNvbnN0IGNlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXgsIGNvbEluZGV4KVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge31cbiAgICBpZiAocm93U3BhbiA8IDIgfHwgdHlwZW9mIHJvd1NwYW4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgIHN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gMXB4KVwiXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVuZENlbGwgPSBnZXRUYWJsZUNlbGwocm93SW5kZXggKyByb3dTcGFuIC0gMSwgY29sSW5kZXgpXG4gICAgICBpZiAoY2VsbCAmJiBlbmRDZWxsKSB7XG4gICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCBlbmRDZWxsUmVjdCA9IGVuZENlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgICBzdHlsZS5oZWlnaHQgPSBgJHtcbiAgICAgICAgICBlbmRDZWxsUmVjdC5oZWlnaHQgKyBlbmRDZWxsUmVjdC50b3AgLSBjZWxsUmVjdC50b3AgLSAxXG4gICAgICAgIH1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29sU3BhbiA8IDIgfHwgdHlwZW9mIGNvbFNwYW4gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgIHN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgLSAxcHgpXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW5kQ2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCwgY29sSW5kZXggKyBjb2xTcGFuIC0gMSlcbiAgICAgIGlmIChjZWxsICYmIGVuZENlbGwpIHtcbiAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGVuZENlbGxSZWN0ID0gZW5kQ2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICAgIHN0eWxlLndpZHRoID0gYCR7XG4gICAgICAgICAgZW5kQ2VsbFJlY3Qud2lkdGggKyBlbmRDZWxsUmVjdC5sZWZ0IC0gY2VsbFJlY3QubGVmdCAtIDFcbiAgICAgICAgfXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHlsZVxuICB9XG5cbiAgcHVibGljIHNhdmVSZWYgPSAoXG4gICAgbmFtZT86XG4gICAgICB8IFwiYWZmaXhIZWFkZXJcIlxuICAgICAgfCBcImFmZml4U2Nyb2xsYmFyXCJcbiAgICAgIHwgXCJtYWluVGFibGVcIlxuICAgICAgfCBcIm1haW5UYWJsZUJvZHlcIlxuICAgICAgfCBcIm1haW5UaGVhZFwiXG4gICAgICB8IFwid3JhcHBlclwiXG4gICkgPT4gKG5vZGU6IGFueSkgPT4ge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICB0aGlzW25hbWVdID0gbm9kZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGVtcHR5VGV4dCxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWFkZXJFbXBoYXNpemVkLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbG9hZGluZyxcbiAgICAgIHNpemUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiYWxpZ25cIixcbiAgICAgIFwiY2hpbGRyZW5cIixcbiAgICAgIFwiY29sdW1uc1wiLFxuICAgICAgXCJjb2x1bW5zUmVzaXphYmxlXCIsXG4gICAgICBcImRlZmF1bHRFeHBhbmRlZFJvd0tleXNcIixcbiAgICAgIFwiZGVmYXVsdFNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRJY29uVmlzaWJsZVwiLFxuICAgICAgXCJleHBhbmRPblJvd0NsaWNrXCIsXG4gICAgICBcImV4cGFuZGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRlZFJvd1JlbmRlclwiLFxuICAgICAgXCJnZXRDZWxsQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldENlbGxQcm9wc1wiLFxuICAgICAgXCJnZXRDZWxsU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRIZWFkU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxTdHlsZVwiLFxuICAgICAgXCJnZXRSb3dDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0Um93U3R5bGVcIixcbiAgICAgIFwiZ2V0U2VsZWN0UHJvcHNcIixcbiAgICAgIFwib25FeHBhbmRDaGFuZ2VcIixcbiAgICAgIFwib25TZWxlY3RDaGFuZ2VcIixcbiAgICAgIFwib25TY3JvbGxcIixcbiAgICAgIFwib25Sb3dDbGlja1wiLFxuICAgICAgXCJvblJvd01vdXNlRW50ZXJcIixcbiAgICAgIFwib25Sb3dNb3VzZUxlYXZlXCIsXG4gICAgICBcInNlbGVjdE11bHRpcGxlXCIsXG4gICAgICBcInNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJzZWxlY3RPblJvd0NsaWNrXCIsXG4gICAgICBcInZlcnRpY2FsQWxpZ25cIixcbiAgICAgIFwidmlydHVhbExpc3RQcm9wc1wiLFxuICAgICAgXCJ2aXJ0dWFsTGlzdFN0eWxlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzTWFpblRhYmxlT3ZlcmZsb3dYLCBpc01haW5UYWJsZU92ZXJmbG93WSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmNvbHVtbk1hbmFnZXIucmVzZXQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgY29uc3QgeyBnZXRHcm91cENvbHVtbnNEZXB0aCB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBlbXB0eSA9ICEoZGF0YVNvdXJjZSAmJiBkYXRhU291cmNlLmxlbmd0aClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0td3JhcHBlcmAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1oZWFkZXJFbXBoYXNpemVkYF06IGhlYWRlckVtcGhhc2l6ZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWVtcHR5YF06IGVtcHR5LFxuICAgICAgICBbYCR7cHJlZml4fS1sb2FkaW5nYF06IGxvYWRpbmcsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXhgXTogaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXlgXTogaXNNYWluVGFibGVPdmVyZmxvd1ksXG4gICAgICAgIFtgJHtwcmVmaXh9LXZpcnR1YWxTY3JvbGxgXTogdmlydHVhbFNjcm9sbCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSByZWY9e3RoaXMuc2F2ZVJlZihcIndyYXBwZXJcIil9IHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJmYWRlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIHRvcDogYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXX1weGAsXG4gICAgICAgICAgICB6SW5kZXg6IFwiY2FsYyh2YXIoLS16LWluZGV4LWFmZml4KSArIDIpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2FkaW5nICYmXG4gICAgICAgICAgICAoaGVhZGVyQWZmaXhlZCA/IChcbiAgICAgICAgICAgICAgPEFmZml4XG4gICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXtcbiAgICAgICAgICAgICAgICAgIChoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wIHx8IDApICsgVERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMud3JhcHBlcn1cbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ9e2hlYWRlckFmZml4R2V0VGFyZ2V0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgIDwvQWZmaXg+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9PlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGFibGVzYCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0taW5uZXJTY3JvbGxgXTogISFoZWlnaHQsXG4gICAgICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvd2VkYF06IGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0taGFzRml4ZWRSaWdodENvbHVtbnNgXTogdGhpcy5jb2x1bW5NYW5hZ2VyLmlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQoKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiBoZWlnaHQgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogaGVpZ2h0XG4gICAgICAgICAgICAgID8gYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXSAqIGdldEdyb3VwQ29sdW1uc0RlcHRoKCl9cHhgXG4gICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1haW5UYWJsZWB9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcIm1haW5UYWJsZVwiKX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJsZVwiXG4gICAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUYWJsZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyYH0+e2VtcHR5VGV4dH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiJdfQ==