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

        if (getRowProps) {
          var _getRowProps = getRowProps(row, rowIndex),
              popover = _getRowProps.popover;

          if (popover !== null && popover !== void 0 && popover.popup) {
            tr = React.createElement(Popover, popover, tr);
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
        itemKey: "key",
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

      var restProps = omit(otherProps, ["align", "children", "columns", "columnsResizable", "defaultExpandedRowKeys", "defaultSelectedRowKeys", "expandIconVisible", "expandOnRowClick", "expandedRowKeys", "expandedRowRender", "getCellClassName", "getCellProps", "getCellStyle", "getHeadClassName", "getHeadStyle", "getHeadCellClassName", "getHeadCellStyle", "getRowClassName", "getRowProps", "getRowStyle", "getSelectProps", "onExpandChange", "onSelectChange", "onScroll", "onRowClick", "onRowMouseEnter", "onRowMouseLeave", "selectMultiple", "selectedRowKeys", "selectOnRowClick", "verticalAlign", "virtualListProps", "virtualListStyle"]);
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
  getRowProps: PropTypes.func,
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

export default Table;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQW5pbWF0ZSIsInNoYWxsb3dFcXVhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJMaXN0IiwiZGVib3VuY2UiLCJjbGFzc05hbWVzIiwib21pdCIsIkNvbHVtbiIsIkFmZml4IiwiQ2hlY2tib3giLCJJY29uIiwiUG9wb3ZlciIsIlJhZGlvIiwiUmVzaXplT2JzZXJ2ZXIiLCJUYWJsZVNvcnQiLCJUYWJsZUZpbHRlciIsIkNvbHVtbk1hbmFnZXIiLCJub29wIiwicHJlZml4IiwiVERfTUlOX1dJRFRIIiwiU0VMRUNUX1REX1dJRFRIIiwiU0VMRUNUX0FORF9FWFBBTkRfVERfV0lEVEgiLCJURF9IRUlHSFQiLCJsYXJnZSIsIm1lZGl1bSIsIm1pbmkiLCJzbWFsbCIsIkhPUklaT05UQUxfQUxJR04iLCJjZW50ZXIiLCJsZWZ0IiwicmlnaHQiLCJWRVJUSUNBTF9BTElHTiIsImJvdHRvbSIsInRvcCIsImlzRml4ZWRMZWZ0IiwiY29sIiwiZml4ZWQiLCJpc0ZpeGVkUmlnaHQiLCJUYWJsZSIsInByb3BzIiwiY29tYmluZWRDZWxsc0luZm8iLCJhZmZpeEhlYWRlciIsImFmZml4U2Nyb2xsYmFyIiwibWFpblRhYmxlIiwibWFpblRhYmxlQm9keSIsIm1haW5UaGVhZCIsIndyYXBwZXIiLCJkZWJvdW5jZWRXaW5kb3dSZXNpemUiLCJyZXNpemVFdmVudCIsImNvbHVtbk1hbmFnZXIiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJoZWFkZXJBZmZpeGVkIiwiaGVpZ2h0IiwiaGFuZGxlV2luZG93UmVzaXplIiwid2luZG93IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJkYXRhU291cmNlT2xkIiwiZGF0YVNvdXJjZSIsImdldENlbGxQcm9wc09sZCIsImdldENlbGxQcm9wcyIsInNldFRpbWVvdXQiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlIiwiY2xlYXIiLCJyZXNpemVDb2x1bW5TdGFydCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImN1cnNvciIsImN1cnJlbnRseVJlc2l6aW5nIiwiZGF0YUluZGV4IiwicGFyZW50V2lkdGgiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3RhcnRYIiwicGFnZVgiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJyZXNpemVDb2x1bW5FbmQiLCJyZXNpemVkIiwiYmFzZVdpZHRoIiwiTWF0aCIsImNlaWwiLCJ0aXRsZSIsIm5ld1Jlc2l6ZWQiLCJmaWx0ZXIiLCJvIiwibmV3V2lkdGgiLCJtYXgiLCJvblNvcnQiLCJvbkZpbHRlciIsInB1c2giLCJ2YWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc01haW5UYWJsZU92ZXJmbG93WCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJpc01haW5UYWJsZU92ZXJmbG93WSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImlzUmVzaXplclNob3ciLCJvbGRTdHlsZSIsIm1haW5UYWJsZVN0eWxlIiwicmVjdCIsImhhbmRsZU1haW5UYWJsZVNjcm9sbCIsIm9uU2Nyb2xsIiwiYWZmaXhlZFRvcCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImZpeGVkTm9kZSIsInNjcm9sbExlZnQiLCJzeW5jVGFibGVTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVJvd0NsaWNrIiwicm93IiwiaSIsImV4cGFuZE9uUm93Q2xpY2siLCJnZXRTZWxlY3RQcm9wcyIsIm9uUm93Q2xpY2siLCJzZWxlY3RPblJvd0NsaWNrIiwic2VsZWN0ZWRSb3dLZXlzIiwia2V5IiwiZGlzYWJsZWQiLCJoYW5kbGVTZWxlY3QiLCJpbmNsdWRlcyIsImhhbmRsZUV4cGFuZCIsImhhbmRsZVRoUmVzaXplIiwiaW5kZXgiLCJmaXhlZFBvc2l0aW9uIiwiZ2V0Q29sdW1ucyIsImZpeGVkQ29sdW1uc0luZm9zIiwiY29sdW1ucyIsImZpbmQiLCJwIiwiZmluZEluZGV4Iiwic3BsaWNlIiwic29ydCIsImEiLCJiIiwiZml4ZWRDb2x1bW5zSW5mb3NMZWZ0IiwiZml4ZWRDb2x1bW5zSW5mb3NSaWdodCIsImZvckVhY2giLCJjb2xJbmRleCIsImlzTGFzdExlZnQiLCJvZmZzZXQiLCJzbGljZSIsInJlZHVjZSIsImFjYyIsImN1ciIsImlzRmlyc3RSaWdodCIsImhhbmRsZVRoZWFkTW91c2VFbnRlciIsImhhbmRsZVRoZWFkTW91c2VMZWF2ZSIsIk9iamVjdCIsImtleXMiLCJleHBhbmRlZFJvd0tleXNQcm9wIiwiZXhwYW5kZWRSb3dLZXlzIiwib25FeHBhbmRDaGFuZ2UiLCJpbmRleE9mIiwiY2hlY2tlZCIsIm9uU2VsZWN0Q2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzUHJvcCIsInNlbGVjdE11bHRpcGxlIiwiaGFuZGxlU2VsZWN0QWxsIiwiYXZhaWxhYmxlS2V5cyIsImdldEF2YWlsYWJsZVJvd3NLZXlzIiwiaGFzU2VsZWN0ZWRBbGwiLCJldmVyeSIsImdlbmVyYXRlVGFibGUiLCJleHBhbmRJY29uVmlzaWJsZSIsImV4cGFuZGVkUm93UmVuZGVyIiwiZ2V0SGVhZENsYXNzTmFtZSIsImdldEhlYWRTdHlsZSIsImdldFJvd0NsYXNzTmFtZSIsImdldFJvd1Byb3BzIiwiZ2V0Um93U3R5bGUiLCJoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wIiwiaGVhZGVyQWZmaXhHZXRUYXJnZXQiLCJvblJvd01vdXNlRW50ZXIiLCJvblJvd01vdXNlTGVhdmUiLCJzaXplIiwidmVydGljYWxBbGlnbiIsInZpcnR1YWxMaXN0UHJvcHMiLCJ2aXJ0dWFsTGlzdFN0eWxlIiwidmlydHVhbFNjcm9sbCIsImFmZml4ZWRCb3R0b20iLCJnZXRHcm91cENvbHVtbnNEZXB0aCIsImlzQW55Q29sdW1uc0xlZnRGaXhlZCIsInRoZWFkU3R5bGUiLCJzZWxlY3RBbmRFeHBhbmQiLCJ0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSIsInRoZWFkIiwic2F2ZVJlZiIsIm1hcCIsImFsaWduIiwiZmlsdGVycyIsInNvcnRPcmRlciIsInJlc2l6ZWRDb2wiLCJjbGlja2FibGUiLCJ1bmRlZmluZWQiLCJtaW5XaWR0aCIsImZsZXhWYWx1ZSIsImxhc3RJbmRleE9mIiwid2lkdGhSZXNpemUiLCJmbGV4IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJnZW5lcmF0ZVRoQ2VsbCIsImNoaWxkcmVuIiwiY2hpbGRDb2wiLCJjaGlsZENvbEluZGV4IiwiZ3JhbmRDb2wiLCJncmFuZENvbEluZGV4IiwiZ2VuZXJhdGVUcnMiLCJyb3dJbmRleCIsImNvbEFycmF5Iiwic2VsZWN0UHJvcHNHZXR0ZWQiLCJhbGxTZWxlY3RQcm9wcyIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwib25DbGljayIsInNlbGVjdFByb3BzIiwic2VsZWN0Q29udGVudCIsImV4cGFuZENvbnRlbnQiLCJzZWxlY3RDZWxsIiwiZ2VuZXJhdGVUciIsImNvbHVtbnNQYXJhbSIsInBhcmVudEluZGV4IiwiY29sSW5kZXhQYXJhbSIsImNoaWxkcmVuQ291bnQiLCJnZW5lcmF0ZVRib2R5Q2VsbCIsInRyIiwiYWxpZ25JdGVtcyIsInBvcG92ZXJQcm9wcyIsInBvcHVwIiwicG9wb3ZlciIsImJvb2wiLCJkaXNwbGF5IiwiekluZGV4IiwiZmxleERpcmVjdGlvbiIsIm9wdGlvbnMiLCJjb2x1bW5zUmVzaXphYmxlIiwiZ2V0SGVhZENlbGxDbGFzc05hbWUiLCJnZXRIZWFkQ2VsbFN0eWxlIiwiY29sUmVzaXphYmxlIiwicmVzaXphYmxlIiwiaXNMYXN0VGgiLCJ0aENlbGwiLCJqdXN0aWZ5Q29udGVudCIsIm9yZGVyIiwiZmlsdGVyZWRWYWx1ZSIsImZpbHRlclZpc2libGUiLCJmaWx0ZXJNdWx0aXBsZSIsImZpbHRlclBvcG92ZXJQcm9wcyIsInZpc2libGUiLCJvbkZpbHRlclZpc2libGVDaGFuZ2UiLCJjZWxsIiwiY2VsbEluZGV4IiwiYWxpZ25Qcm9wIiwiZ2V0Q2VsbENsYXNzTmFtZSIsImdldENlbGxTdHlsZSIsInZlcnRpY2FsQWxpZ25Qcm9wIiwicmVuZGVyIiwiY2VsbENsYXNzTmFtZSIsImNlbGxQcm9wcyIsImNlbGxTdHlsZSIsInJvd1NwYW4iLCJjb2xTcGFuIiwib3RoZXJDZWxsUHJvcHMiLCJnZXRDb21iaW5lZENlbGxTdHlsZSIsIl8iLCJfXyIsImdldFRhYmxlQ2VsbCIsInJvd0luZGV4UGFyYW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZW5kQ2VsbCIsImNlbGxSZWN0IiwiZW5kQ2VsbFJlY3QiLCJuYW1lIiwibm9kZSIsImRlZmF1bHRFeHBhbmRlZFJvd0tleXMiLCJkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzIiwiZW1wdHlUZXh0IiwiaGVhZGVyRW1waGFzaXplZCIsImxvYWRpbmciLCJvdGhlclByb3BzIiwicmVzdFByb3BzIiwicmVzZXQiLCJlbXB0eSIsImNsYXNzU2V0IiwicG9zaXRpb24iLCJpc0FueUNvbHVtbnNSaWdodEZpeGVkIiwibWF4SGVpZ2h0IiwicGFkZGluZ1RvcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwiYXJyYXkiLCJmdW5jIiwibnVtYmVyIiwiRXJyb3IiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJuZXdTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLE9BQU8sS0FBS0EsS0FBWixNQUF1QixPQUF2QjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFlBQXBCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixjQUF6QjtBQUNBLE9BQU9DLGdCQUFQ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LE1BQUlwRCxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJxSixJQUFBQSxRQUFRLENBQUNySixlQUFULEdBQTJCQSxlQUEzQjtBQUNEOztBQUNELE1BQUluQyxlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUJ3TCxJQUFBQSxRQUFRLENBQUN4TCxlQUFULEdBQTJCQSxlQUEzQjtBQUNEOztBQUNELFNBQU9nQyxNQUFNLENBQUNDLElBQVAsQ0FBWXVKLFFBQVosRUFBc0I5UCxNQUF0QixHQUErQixDQUEvQixHQUFtQzhQLFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsQzs7QUF5NkNILGVBQWVwUixLQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvaW50ZXJhY3RpdmUtc3VwcG9ydHMtZm9jdXMgKi9cbi8qKlxuICogVGFibGUg57uE5Lu25bCG5LiN5Lya5L+u5pS55oiQIEZ1bmN0aW9uQ29tcG9uZW5077yMXG4gKiDlm6DkuLrogIPomZHliLDkuYvliY3lnKjkvb/nlKjml7blrZjlnKjkuI3lsJHpgJrov4cg5a6e5L6LLnRhYmxlIOeahOaWueazleebtOaOpeiuv+mXriA8dGFibGUgLz4g5YWD57Sg55qE55So5rOV44CCXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBBbmltYXRlIGZyb20gXCJyYy1hbmltYXRlXCJcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSBcInNoYWxsb3dlcXVhbFwiXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tIFwicmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIlxuaW1wb3J0IExpc3QgZnJvbSBcInJjLXZpcnR1YWwtbGlzdFwiXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCJkZWJvdW5jZVwiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiXG5pbXBvcnQgb21pdCBmcm9tIFwiLi4vX3V0aWwvb21pdFwiXG5pbXBvcnQgQ29sdW1uLCB7IElDb2x1bW5Qcm9wcyB9IGZyb20gXCIuL0NvbHVtblwiXG5pbXBvcnQgQWZmaXggZnJvbSBcIi4uL2FmZml4XCJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIlxuaW1wb3J0IEljb24gZnJvbSBcIi4uL2ljb25cIlxuaW1wb3J0IFBvcG92ZXIsIHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcbmltcG9ydCBSYWRpbyBmcm9tIFwiLi4vcmFkaW9cIlxuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gXCIuLi9yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IFRhYmxlU29ydCBmcm9tIFwiLi9UYWJsZVNvcnRcIlxuaW1wb3J0IFRhYmxlRmlsdGVyIGZyb20gXCIuL1RhYmxlRmlsdGVyXCJcbmltcG9ydCBDb2x1bW5NYW5hZ2VyIGZyb20gXCIuL0NvbHVtbk1hbmFnZXJcIlxuaW1wb3J0IFwiLi9zdHlsZVwiXG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5pbnRlcmZhY2UgSUZpeGVkQ29sdW1uc0luZm8ge1xuICB3aWR0aDogbnVtYmVyXG4gIGRhdGFJbmRleDogc3RyaW5nXG4gIGZpeGVkOiBcImxlZnRcIiB8IFwicmlnaHRcIlxuICBpbmRleDogbnVtYmVyXG4gIGlzTGFzdExlZnQ/OiBib29sZWFuXG4gIGlzRmlyc3RSaWdodD86IGJvb2xlYW5cbiAgb2Zmc2V0PzogbnVtYmVyXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5jb25zdCBub29wID0gKCkgPT4ge31cbmNvbnN0IHByZWZpeCA9IFwiYWR1aS10YWJsZVwiXG5jb25zdCBURF9NSU5fV0lEVEggPSAxMDBcbmNvbnN0IFNFTEVDVF9URF9XSURUSCA9IDUwXG5jb25zdCBTRUxFQ1RfQU5EX0VYUEFORF9URF9XSURUSCA9IDgwXG5jb25zdCBURF9IRUlHSFQgPSB7XG4gIGxhcmdlOiA2MCxcbiAgbWVkaXVtOiA1MCxcbiAgbWluaTogNDAsXG4gIHNtYWxsOiA0MCxcbn1cbmNvbnN0IEhPUklaT05UQUxfQUxJR04gPSB7XG4gIGNlbnRlcjogXCJjZW50ZXJcIiBhcyBcImNlbnRlclwiLFxuICBsZWZ0OiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbiAgcmlnaHQ6IFwiZmxleC1lbmRcIiBhcyBcImZsZXgtZW5kXCIsXG59XG5jb25zdCBWRVJUSUNBTF9BTElHTiA9IHtcbiAgYm90dG9tOiBcImZsZXgtZW5kXCIgYXMgXCJmbGV4LWVuZFwiLFxuICBjZW50ZXI6IFwiY2VudGVyXCIgYXMgXCJjZW50ZXJcIixcbiAgdG9wOiBcImZsZXgtc3RhcnRcIiBhcyBcImZsZXgtc3RhcnRcIixcbn1cbmNvbnN0IGlzRml4ZWRMZWZ0ID0gKGNvbDogSUJhc2VPYmplY3QpOiBib29sZWFuID0+XG4gIGNvbC5maXhlZCA9PT0gXCJsZWZ0XCIgfHwgY29sLmZpeGVkID09PSB0cnVlXG5jb25zdCBpc0ZpeGVkUmlnaHQgPSAoY29sOiBJQmFzZU9iamVjdCk6IGJvb2xlYW4gPT4gY29sLmZpeGVkID09PSBcInJpZ2h0XCJcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVQcm9wczxUIGV4dGVuZHMgSUJhc2VPYmplY3QgPSBJQmFzZU9iamVjdD4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+awtOW5s+mdoOm9kOaWueWQkVxuICAgKi9cbiAgYWxpZ24/OiBudWxsIHwgXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiXG4gIC8qKlxuICAgKiDlrZDoioLngrlcbiAgICovXG4gIGNoaWxkcmVuPzogYW55XG4gIC8qKlxuICAgKiDku6XmlbDnu4TnmoTmlrnlvI/kvKDlhaUgQ29sdW1uc++8jOWmguaenOS8oOWFpeS6huatpCBQcm9w77yM5YiZIFRhYmxlIOS8muW/veeVpSBjaGlsZHJlblxuICAgKi9cbiAgY29sdW1ucz86IElDb2x1bW5Qcm9wczxUPltdIHwgbnVsbFxuICAvKipcbiAgICog6ZmE5Yqg57G75ZCNXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIOaOp+WItuaVtOS4qiBUYWJsZSDnmoQgQ29sdW1ucyDog73lkKbosIPmlbTlrr3luqZcbiAgICovXG4gIGNvbHVtbnNSZXNpemFibGU/OiBib29sZWFuIHwgbnVsbFxuICAvKipcbiAgICog5pWw5o2u5rqQXG4gICAqL1xuICBkYXRhU291cmNlPzogVFtdXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHpu5jorqTlsZXlvIDnmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yM5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjFxuICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzPzogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiB8IG51bGxcbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog56m65pWw5o2u5rqQ5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBlbXB0eVRleHQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAqIDEuIOS9v+eUqCBleHBhbmRPblJvd0NsaWNrIOaIluiAhVxuICAgKiAyLiDpnIDopoHlnKjnu4Tku7blpJboh6rooYzosIPnlKjnu4Tku7bmlrnms5XlrozmiJDlsZXlvIDlip/og73vvIh0aGlzLnRhYmxlLmhhbmRsZUV4cGFuZChyb3cua2V5Ke+8ieOAglxuICAgKi9cbiAgZXhwYW5kSWNvblZpc2libGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HlsZXlvIDmlLbotbdcbiAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICog5aaC5p6c5LiN5biM5pyb5Y2V5YWD5qC85YaFIG9uQ2xpY2sg6Kem5Y+R5LqL5Lu277yM6K+35Zyo6YKj5Lqb5LqL5Lu25LitIHN0b3BQcm9wYWdhdGlvbuOAglxuICAgKi9cbiAgZXhwYW5kT25Sb3dDbGljaz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeS7juWklumDqOaOp+WItu+8jOWxleW8gOeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIGV4cGFuZGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDooYznmoTlhoXlrrlcbiAgICovXG4gIGV4cGFuZGVkUm93UmVuZGVyPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLznmoTnsbvlkI3vvJoocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICovXG4gIGdldENlbGxDbGFzc05hbWU/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gc3RyaW5nXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoTnlLHnu4Tku7bop4TlrprnmoQgcHJvcO+8jFxuICAgKiDlpoIgcm93U3BhbiBjb2xTcGFu77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldENlbGxQcm9wcz86IChcbiAgICByb3c6IFQsXG4gICAgY29sOiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBJQmFzZU9iamVjdCB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsU3R5bGU/OiAoXG4gICAgcm93OiBULFxuICAgIGNvbDogSUJhc2VPYmplY3QsXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjb2xJbmRleDogbnVtYmVyXG4gICkgPT4gUmVhY3QuQ1NTUHJvcGVydGllcyB8IHZvaWRcbiAgLyoqXG4gICAqIOiuvue9riB0aGVhZCDnmoTnsbvlkI3vvJooKSA9PiAoc3RyaW5nKVxuICAgKi9cbiAgZ2V0SGVhZENsYXNzTmFtZT86ICgpID0+IHN0cmluZ1xuICAvKipcbiAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jCgpID0+ICh7fSlcbiAgICovXG4gIGdldEhlYWRTdHlsZT86ICgpID0+IFJlYWN0LkNTU1Byb3BlcnRpZXMgfCB2b2lkXG4gIC8qKlxuICAgKiDorr7nva7mr4/kuKogVEgg55qE57G75ZCN77yaKGNvbCwgY29sSW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRIZWFkQ2VsbENsYXNzTmFtZT86IChjb2w6IElCYXNlT2JqZWN0LCBjb2xJbmRleDogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+S4qiBUSCDkuIrnmoQgc3R5bGXvvIwoY29sLCBjb2xJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0SGVhZENlbGxTdHlsZT86IChcbiAgICBjb2w6IElCYXNlT2JqZWN0LFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog6K6+572u5q+P6KGM55qE57G75ZCN77yaKHJvdywgcm93SW5kZXgpID0+IChzdHJpbmcpXG4gICAqL1xuICBnZXRSb3dDbGFzc05hbWU/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBzdHJpbmdcbiAgLyoqXG4gICAqIOiuvue9ruavj+ihjOS4iueahOeUsee7hOS7tuinhOWumueahCBwcm9w77yMXG4gICAqIOWmgiBwb3BvdmVy77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICovXG4gIGdldFJvd1Byb3BzPzogKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4geyBwb3BvdmVyPzogSVBvcG92ZXJQcm9wcyB9XG4gIC8qKlxuICAgKiDorr7nva7mr4/ooYznmoQgc3R5bGXvvIwocm93LCByb3dJbmRleCkgPT4gKHt9KVxuICAgKi9cbiAgZ2V0Um93U3R5bGU/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6K6+572u5q+P5LiqIENoZWNrYm94L1JhZGlvIOS4iueahCBwcm9wIChyb3csIHJvd0luZGV4KSA9PiAoe30p77ybXG4gICAqIOWPr+S7peWcqOi/memHjOWbnuS8oCBkaXNhYmxlZDogdHJ1ZSwg5o6n5Yi26K+l6KGM5LiN6IO96YCJ5oup77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgZ2V0U2VsZWN0UHJvcHM/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBJQmFzZU9iamVjdFxuICAvKipcbiAgICog5piv5ZCm6ZyA6KaB6KGo5aS05Zu65a6a5Yiw6aG16Z2i5LiKXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkPzogYm9vbGVhblxuICAvKipcbiAgICog6Led56a756qX5Y+j6aG26YOo6L6+5Yiw5oyH5a6a5YGP56e76YeP5ZCO6Kem5Y+R6KGo5aS05Zu65a6aXG4gICAqL1xuICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wPzogbnVtYmVyXG4gIC8qKlxuICAgKiDlj4LogIMgPEFmZml4IC8+IOeahCBnZXRUYXJnZXQgUHJvcFxuICAgKi9cbiAgaGVhZGVyQWZmaXhHZXRUYXJnZXQ/OiAoKCkgPT4gSFRNTEVsZW1lbnQpIHwgbnVsbFxuICAvKipcbiAgICog5Yqg6YeN5aS06YOo77yM5byA5ZCv5LmL5ZCO6KGo5aS05bCG5Lya5Yqg57KXICsg6IOM5pmvXG4gICAqL1xuICBoZWFkZXJFbXBoYXNpemVkPzogYm9vbGVhblxuICAvKipcbiAgICog5oyH5a6a6auY5bqm5Lul5a6e546w6KGo5qC85YaF5rua5Yqo77yM5q2kIHByb3Ag5LiOIHByb3AgaGVhZGVyQWZmaXhlZCDkupLmlqXjgIJcbiAgICovXG4gIGhlaWdodD86IG51bWJlciB8IG51bGxcbiAgLyoqXG4gICAqIOaYr+WQpuWKoOi9veS4rVxuICAgKi9cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOWxleW8gOihjOOAkeWxleW8gOavj+ihjOaXtueahCBoYW5kbGVy77yMVGFibGUg5Lmf5Lul5q2kIHByb3Ag5L2c5Li65byA5ZCv5bGV5byA5Yqf6IO955qE5Yik5pat77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIG9uRXhwYW5kQ2hhbmdlPzogKChrZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+KSA9PiB2b2lkKSB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBjbGljayBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93Q2xpY2s/OlxuICAgIHwgKChyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIsIGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZClcbiAgICB8IG51bGxcbiAgLyoqXG4gICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgKi9cbiAgb25Sb3dNb3VzZUVudGVyPzpcbiAgICB8ICgocm93OiBULCByb3dJbmRleDogbnVtYmVyLCBlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQpXG4gICAgfCBudWxsXG4gIC8qKlxuICAgKiDmr4/ooYznmoQgbW91c2VMZWF2ZSBoYW5kbGVy77yMKHJvdywgaSwgZSkgPT4ge31cbiAgICovXG4gIG9uUm93TW91c2VMZWF2ZT86XG4gICAgfCAoKHJvdzogVCwgcm93SW5kZXg6IG51bWJlciwgZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkKVxuICAgIHwgbnVsbFxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR6YCJ5oup5q+P6KGM5pe255qEIGhhbmRsZXLvvIxUYWJsZSDkuZ/ku6XmraQgcHJvcCDkvZzkuLrlvIDlkK/pgInmi6nlip/og73nmoTliKTmlq3vvJtcbiAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgKi9cbiAgb25TZWxlY3RDaGFuZ2U/OiAoKGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4pID0+IHZvaWQpIHwgbnVsbFxuICAvKipcbiAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICovXG4gIG9uU2Nyb2xsPzogKChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDjgJDpgInmi6nooYzjgJHlpJogLyDljZXpgInvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAqL1xuICBzZWxlY3RNdWx0aXBsZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIOOAkOmAieaLqeihjOOAkeaYr+WQpuWcqOeCueWHu+aVtOihjOaXtuinpuWPkemAieaLqeOAglxuICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAqL1xuICBzZWxlY3RPblJvd0NsaWNrPzogYm9vbGVhblxuICAvKipcbiAgICog44CQ6YCJ5oup6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM6YCJ5Lit55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jFxuICAgKiDlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqM77ybXG4gICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICovXG4gIHNlbGVjdGVkUm93S2V5cz86IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gfCBudWxsXG4gIC8qKlxuICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICovXG4gIHNpemU/OiBcIm1pbmlcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCJcbiAgLyoqXG4gICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgKi9cbiAgdmVydGljYWxBbGlnbj86IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIlxuICAvKipcbiAgICog6Jma5ouf5YiX6KGo55qEIFByb3Bz77yM6K+35Y+C6ICDIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLXZpcnR1YWwtbGlzdFxuICAgKi9cbiAgdmlydHVhbExpc3RQcm9wcz86IElCYXNlT2JqZWN0XG4gIC8qKlxuICAgKiDomZrmi5/liJfooajnmoTmoLflvI/vvIzor7flnKjov5nph4zmjIflrprlrr3luqbvvIzpu5jorqTlsIbkvJrmnIkgNTAwIHB4IOWuveW6plxuICAgKi9cbiAgdmlydHVhbExpc3RTdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgLyoqXG4gICAqIOaYr+WQpuW8gOWQr+iZmuaLn+a7muWKqO+8jOatpCBQcm9wIOivt+mFjeWQiCBoZWlnaHQgUHJvcCDlkIzml7bkvb/nlKjvvIznlKjkuo7lpITnkIblpKfmlbDmja7ph4/kuIvnmoTomZrmi5/lhoXmu5rliqjvvJtcbiAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAqL1xuICB2aXJ0dWFsU2Nyb2xsPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZVN0YXRlIHtcbiAgYWZmaXhlZFRvcDogYm9vbGVhblxuICBhZmZpeGVkQm90dG9tOiBib29sZWFuXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY29tYmluZWRDZWxsc0luZm86IElCYXNlT2JqZWN0W11cbiAgZXhwYW5kZWRSb3dLZXlzOiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+XG4gIGZpeGVkQ29sdW1uc0luZm9zOiBBcnJheTxJRml4ZWRDb2x1bW5zSW5mbz5cbiAgbWFpblRhYmxlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgaXNNYWluVGFibGVPdmVyZmxvd1g6IGJvb2xlYW5cbiAgaXNNYWluVGFibGVPdmVyZmxvd1k6IGJvb2xlYW5cbiAgaXNSZXNpemVyU2hvdzogYm9vbGVhblxuICBjdXJyZW50bHlSZXNpemluZzogSUJhc2VPYmplY3RcbiAgcmVzaXplZDogSUJhc2VPYmplY3RbXVxuICBzZWxlY3RlZFJvd0tleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD5cbn1cblxuLyoqXG4gKiDooajmoLzmmK/kuIDnp43moLzlvI/ljJbkv6Hmga/nmoTlsZXnpLrlvaLlvI/jgILpgJrluLjmnI3liqHkuo7lpKfph4/mlbDmja7mtY/op4jjgIHnrqHnkIblnLrmma/jgIJcbiAqL1xuY2xhc3MgVGFibGU8VCBleHRlbmRzIElCYXNlT2JqZWN0ID0gSUJhc2VPYmplY3Q+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBJVGFibGVQcm9wczxUPixcbiAgSVRhYmxlU3RhdGVcbj4ge1xuICBwdWJsaWMgc3RhdGljIENvbHVtbjogdHlwZW9mIENvbHVtbiA9IENvbHVtblxuXG4gIHB1YmxpYyBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIOe7n+S4gOWcsOaOp+WItuWIl+awtOW5s+mdoOm9kOaWueWQkVxuICAgICAqL1xuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoW251bGwsIFwibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCJdKSxcbiAgICAvKipcbiAgICAgKiDlrZDoioLngrlcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgLyoqXG4gICAgICog6ZmE5Yqg57G75ZCNXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKlxuICAgICAqIOS7peaVsOe7hOeahOaWueW8j+S8oOWFpSBDb2x1bW5z77yM5aaC5p6c5Lyg5YWl5LqG5q2kIFByb3DvvIzliJkgVGFibGUg5Lya5b+955WlIGNoaWxkcmVuXG4gICAgICovXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOaOp+WItuaVtOS4qiBUYWJsZSDnmoQgQ29sdW1ucyDog73lkKbosIPmlbTlrr3luqZcbiAgICAgKi9cbiAgICBjb2x1bW5zUmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDmlbDmja7mupBcbiAgICAgKi9cbiAgICBkYXRhU291cmNlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR6buY6K6k5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIC8qKlxuICAgICAqIOOAkOmAieaLqeihjOOAkem7mOiupOmAieS4reeahOihjOeahCBrZXnvvIzor7flnKjkvKDlhaXliY3ov5vooYzlkIjms5XmoKHpqozvvIzlm6DkuLogVGFibGUg5a+55q2kIFByb3Ag5rKh5pyJ6L+H5aSa5qCh6aqMXG4gICAgICog6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDnqbrmlbDmja7mupDml7bmmL7npLrnmoTlhoXlrrlcbiAgICAgKi9cbiAgICBlbXB0eVRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIOOAkOWxleW8gOihjOOAkeaYr+WQpuaYvuekuuWxleW8gCBpY29u77yM5aaC5p6c5Li6IGZhbHNl77yM5oSP5ZGz552AXG4gICAgICogMS4g5L2/55SoIGV4cGFuZE9uUm93Q2xpY2sg5oiW6ICFXG4gICAgICogMi4g6ZyA6KaB5Zyo57uE5Lu25aSW6Ieq6KGM6LCD55So57uE5Lu25pa55rOV5a6M5oiQ5bGV5byA5Yqf6IO977yIdGhpcy50YWJsZS5oYW5kbGVFeHBhbmQocm93LmtleSnvvInjgIJcbiAgICAgKi9cbiAgICBleHBhbmRJY29uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5piv5ZCm5Zyo54K55Ye75pW06KGM5pe26Kem5Y+R5bGV5byA5pS26LW3XG4gICAgICog5q2kIHByb3Ag5Lya5ZyoIC50ciDkuIrliqDlhaUgb25DbGljayDkuovku7bvvIxcbiAgICAgKiDlpoLmnpzkuI3luIzmnJvljZXlhYPmoLzlhoUgb25DbGljayDop6blj5Hkuovku7bvvIzor7flnKjpgqPkupvkuovku7bkuK0gc3RvcFByb3BhZ2F0aW9u44CCXG4gICAgICovXG4gICAgZXhwYW5kT25Sb3dDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5LuO5aSW6YOo5o6n5Yi277yM5bGV5byA55qE6KGM55qEIGtlee+8jOivt+WcqOS8oOWFpeWJjei/m+ihjOWQiOazleagoemqjO+8jOWboOS4uiBUYWJsZSDlr7nmraQgUHJvcCDmsqHmnInov4flpJrmoKHpqoxcbiAgICAgKiDor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZXhwYW5kZWRSb3dLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgLyoqXG4gICAgICog44CQ5bGV5byA6KGM44CR5bGV5byA6KGM55qE5YaF5a65XG4gICAgICovXG4gICAgZXhwYW5kZWRSb3dSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOeahOexu+WQje+8mihyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoc3RyaW5nKVxuICAgICAqL1xuICAgIGdldENlbGxDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4quWNleWFg+agvOS4iueahOeUsee7hOS7tuinhOWumueahCBwcm9w77yMXG4gICAgICog5aaCIHJvd1NwYW4gY29sU3Bhbu+8jChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0Q2VsbFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/kuKrljZXlhYPmoLzkuIrnmoQgc3R5bGXvvIwocm93LCBjb2wsIHJvd0luZGV4LCBjb2xJbmRleCkgPT4gKHt9KVxuICAgICAqL1xuICAgIGdldENlbGxTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIHRoZWFkIOeahOexu+WQje+8mnBvc2l0aW9uID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0SGVhZENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572uIHRoZWFkIOS4iueahCBzdHlsZe+8jHBvc2l0aW9uID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRIZWFkU3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOiuvue9ruavj+S4qiBUSCDnmoTnsbvlkI3vvJooY29sLCBjb2xJbmRleCkgPT4gKHN0cmluZylcbiAgICAgKi9cbiAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P5LiqIFRIIOS4iueahCBzdHlsZe+8jChjb2wsIGNvbEluZGV4KSA9PiAoe30pXG4gICAgICovXG4gICAgZ2V0SGVhZENlbGxTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P6KGM55qE57G75ZCN77yaKHJvdywgcm93SW5kZXgpID0+IChzdHJpbmcpXG4gICAgICovXG4gICAgZ2V0Um93Q2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDorr7nva7mr4/ooYzkuIrnmoTnlLHnu4Tku7bop4TlrprnmoQgcHJvcO+8jFxuICAgICAqIOWmgiBwb3BvdmVy77yMKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRSb3dQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog6K6+572u5q+P6KGM55qEIHN0eWxl77yMKHJvdywgcm93SW5kZXgpID0+ICh7fSlcbiAgICAgKi9cbiAgICBnZXRSb3dTdHlsZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR6K6+572u5q+P5LiqIENoZWNrYm94L1JhZGlvIOS4iueahCBwcm9wIChyb3csIHJvd0luZGV4KSA9PiAoe30p77ybXG4gICAgICog5Y+v5Lul5Zyo6L+Z6YeM5Zue5LygIGRpc2FibGVkOiB0cnVlLCDmjqfliLbor6XooYzkuI3og73pgInmi6nvvJvor7fnoa7kv50gZGF0YVNvdXJjZSDnmoTlr7nosaHlkKvmnInlsZ7mgKcga2V577yM5Y+K5YW25ZSv5LiA55qE5YC844CCXG4gICAgICovXG4gICAgZ2V0U2VsZWN0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpumcgOimgeihqOWktOWbuuWumuWIsOmhtemdouS4ilxuICAgICAqL1xuICAgIGhlYWRlckFmZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIOi3neemu+eql+WPo+mhtumDqOi+vuWIsOaMh+WumuWBj+enu+mHj+WQjuinpuWPkeihqOWktOWbuuWumlxuICAgICAqL1xuICAgIGhlYWRlckFmZml4ZWRPZmZzZXRUb3A6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgLyoqXG4gICAgICog5Y+C6ICDIDxBZmZpeCAvPiDnmoQgZ2V0VGFyZ2V0IFByb3BcbiAgICAgKi9cbiAgICBoZWFkZXJBZmZpeEdldFRhcmdldDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5Yqg6YeN5aS06YOo77yM5byA5ZCv5LmL5ZCO6KGo5aS05bCG5Lya5Yqg57KXICsg6IOM5pmvXG4gICAgICovXG4gICAgaGVhZGVyRW1waGFzaXplZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICog5oyH5a6a6auY5bqm5Lul5a6e546w6KGo5qC85YaF5rua5Yqo77yM5q2kIHByb3Ag5LiOIHByb3AgaGVhZGVyQWZmaXhlZCDkupLmlqXjgIJcbiAgICAgKi9cbiAgICBoZWlnaHQ6IChwcm9wczogSVRhYmxlUHJvcHM8SUJhc2VPYmplY3Q+KSA9PiB7XG4gICAgICBjb25zdCB7IGhlYWRlckFmZml4ZWQsIGhlaWdodCB9ID0gcHJvcHNcbiAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJJbnZhbGlkIHByb3AgYGhlaWdodGAgc3VwcGxpZWQgdG8gYFRhYmxlYCwgZXhwZWN0ZWQgYG51bWJlcmAuXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlYWRlckFmZml4ZWQgJiYgISFoZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJUYWJsZS5qcyDkuI3lhYHorrjlkIzml7bkvb/nlKggcHJvcCBgaGVhZGVyQWZmaXhlZGAg5LiOIGBoZWlnaHRg77yM5LiN6K6k5Y+v5bCG6L+Z5Lik6ICF5re355So55qE6ZyA5rGC5Zy65pmv44CCXCJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmK/lkKbliqDovb3kuK1cbiAgICAgKi9cbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDlsZXlvIDooYzjgJHlsZXlvIDmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+WxleW8gOWKn+iDveeahOWIpOaWre+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBvbkV4cGFuZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIGNsaWNrIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIOavj+ihjOeahCBtb3VzZUVudGVyIGhhbmRsZXLvvIwocm93LCBpLCBlKSA9PiB7fVxuICAgICAqL1xuICAgIG9uUm93TW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog5q+P6KGM55qEIG1vdXNlTGVhdmUgaGFuZGxlcu+8jChyb3csIGksIGUpID0+IHt9XG4gICAgICovXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHpgInmi6nmr4/ooYzml7bnmoQgaGFuZGxlcu+8jFRhYmxlIOS5n+S7peatpCBwcm9wIOS9nOS4uuW8gOWQr+mAieaLqeWKn+iDveeahOWIpOaWre+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogVGFibGUg5rua5Yqo5pe255qEIGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICog44CQ6YCJ5oup6KGM44CR5aSaIC8g5Y2V6YCJ77yb6K+356Gu5L+dIGRhdGFTb3VyY2Ug55qE5a+56LGh5ZCr5pyJ5bGe5oCnIGtlee+8jOWPiuWFtuWUr+S4gOeahOWAvOOAglxuICAgICAqL1xuICAgIHNlbGVjdE11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHmmK/lkKblnKjngrnlh7vmlbTooYzml7bop6blj5HpgInmi6njgIJcbiAgICAgKiDmraQgcHJvcCDkvJrlnKggLnRyIOS4iuWKoOWFpSBvbkNsaWNrIOS6i+S7tu+8jFxuICAgICAqIOWmguaenOS4jeW4jOacm+WNleWFg+agvOWGhSBvbkNsaWNrIOinpuWPkeS6i+S7tu+8jOivt+WcqOmCo+S6m+S6i+S7tuS4rSBzdG9wUHJvcGFnYXRpb27jgIJcbiAgICAgKi9cbiAgICBzZWxlY3RPblJvd0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKipcbiAgICAgKiDjgJDpgInmi6nooYzjgJHku47lpJbpg6jmjqfliLbvvIzpgInkuK3nmoTooYznmoQga2V577yM6K+35Zyo5Lyg5YWl5YmN6L+b6KGM5ZCI5rOV5qCh6aqM77yMXG4gICAgICog5Zug5Li6IFRhYmxlIOWvueatpCBQcm9wIOayoeaciei/h+WkmuagoemqjO+8m1xuICAgICAqIOivt+ehruS/nSBkYXRhU291cmNlIOeahOWvueixoeWQq+acieWxnuaApyBrZXnvvIzlj4rlhbbllK/kuIDnmoTlgLzjgIJcbiAgICAgKi9cbiAgICBzZWxlY3RlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAvKipcbiAgICAgKiDorr7nva7lsLrlr7jvvIzms6jmhI/vvJrlsLrlr7jku4XmjqfliLbooYzkuI7liJfpl7Tot53vvIzkuI7lrZfkvZPlpKflsI/kuI3nu5HlrprjgIJcbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wibWluaVwiLCBcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl0pLFxuICAgIC8qKlxuICAgICAqIOe7n+S4gOWcsOaOp+WItuWIl+WeguebtOmdoOm9kOaWueWQkVxuICAgICAqL1xuICAgIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJ0b3BcIiwgXCJjZW50ZXJcIiwgXCJib3R0b21cIl0pLFxuICAgIC8qKlxuICAgICAqIOiZmuaLn+WIl+ihqOeahCBQcm9wc++8jOivt+WPguiAgyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yYy12aXJ0dWFsLWxpc3RcbiAgICAgKi9cbiAgICB2aXJ0dWFsTGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIOiZmuaLn+WIl+ihqOeahOagt+W8j++8jOivt+WcqOi/memHjOaMh+WumuWuveW6pu+8jOm7mOiupOWwhuS8muaciSA1MDAgcHgg5a695bqmXG4gICAgICovXG4gICAgdmlydHVhbExpc3RTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiDmmK/lkKblvIDlkK/omZrmi5/mu5rliqjvvIzmraQgUHJvcCDor7fphY3lkIggaGVpZ2h0IFByb3Ag5ZCM5pe25L2/55So77yM55So5LqO5aSE55CG5aSn5pWw5o2u6YeP5LiL55qE6Jma5ouf5YaF5rua5Yqo77ybXG4gICAgICog5q2k5Yqf6IO955qE5a6e6ZmF55So5L6L6L6D5bCR77yM5aaC5p6c5pyJ5Lu75L2V6Zeu6aKY6K+35Y+K5pe25Y+N6aaIXG4gICAgICovXG4gICAgdmlydHVhbFNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogSVRhYmxlUHJvcHM8SUJhc2VPYmplY3Q+ID0ge1xuICAgIGFsaWduOiBudWxsLFxuICAgIGNoaWxkcmVuOiBcIlwiLFxuICAgIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxuICAgIGNvbHVtbnM6IG51bGwsXG4gICAgY29sdW1uc1Jlc2l6YWJsZTogbnVsbCxcbiAgICBkYXRhU291cmNlOiBbXSxcbiAgICBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzOiBudWxsLFxuICAgIGRlZmF1bHRTZWxlY3RlZFJvd0tleXM6IG51bGwsXG4gICAgZW1wdHlUZXh0OiBcIuaaguaXoOaVsOaNrlwiLFxuICAgIGV4cGFuZEljb25WaXNpYmxlOiB0cnVlLFxuICAgIGV4cGFuZE9uUm93Q2xpY2s6IGZhbHNlLFxuICAgIGV4cGFuZGVkUm93S2V5czogbnVsbCxcbiAgICBleHBhbmRlZFJvd1JlbmRlcjogKCkgPT4gXCJcIixcbiAgICBnZXRDZWxsQ2xhc3NOYW1lOiAoKSA9PiBcIlwiLFxuICAgIGdldENlbGxQcm9wczogbm9vcCxcbiAgICBnZXRDZWxsU3R5bGU6IG5vb3AsXG4gICAgZ2V0SGVhZENsYXNzTmFtZTogKCkgPT4gXCJcIixcbiAgICBnZXRIZWFkU3R5bGU6IG5vb3AsXG4gICAgZ2V0SGVhZENlbGxDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0SGVhZENlbGxTdHlsZTogbm9vcCxcbiAgICBnZXRSb3dDbGFzc05hbWU6ICgpID0+IFwiXCIsXG4gICAgZ2V0Um93UHJvcHM6ICgpID0+ICh7fSksXG4gICAgZ2V0Um93U3R5bGU6IG5vb3AsXG4gICAgZ2V0U2VsZWN0UHJvcHM6ICgpID0+ICh7fSksXG4gICAgaGVhZGVyQWZmaXhlZDogZmFsc2UsXG4gICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcDogMCxcbiAgICBoZWFkZXJBZmZpeEdldFRhcmdldDogbnVsbCxcbiAgICBoZWFkZXJFbXBoYXNpemVkOiBmYWxzZSxcbiAgICBoZWlnaHQ6IG51bGwsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgb25FeHBhbmRDaGFuZ2U6IG51bGwsXG4gICAgb25Sb3dDbGljazogbnVsbCxcbiAgICBvblJvd01vdXNlRW50ZXI6IG51bGwsXG4gICAgb25Sb3dNb3VzZUxlYXZlOiBudWxsLFxuICAgIG9uU2VsZWN0Q2hhbmdlOiBudWxsLFxuICAgIG9uU2Nyb2xsOiBudWxsLFxuICAgIHNlbGVjdE11bHRpcGxlOiB0cnVlLFxuICAgIHNlbGVjdE9uUm93Q2xpY2s6IGZhbHNlLFxuICAgIHNlbGVjdGVkUm93S2V5czogbnVsbCxcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdmVydGljYWxBbGlnbjogdW5kZWZpbmVkLFxuICAgIHZpcnR1YWxMaXN0UHJvcHM6IHt9LFxuICAgIHZpcnR1YWxMaXN0U3R5bGU6IHt9LFxuICAgIHZpcnR1YWxTY3JvbGw6IGZhbHNlLFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSAoe1xuICAgIGNoaWxkcmVuLFxuICAgIGNvbHVtbnMsXG4gICAgZXhwYW5kZWRSb3dLZXlzLFxuICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgfTogSVRhYmxlUHJvcHM8SUJhc2VPYmplY3Q+KSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFBhcnRpYWw8SVRhYmxlU3RhdGU+ID0ge31cbiAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwgfHwgY29sdW1ucyAhPT0gbnVsbCkge1xuICAgICAgbmV3U3RhdGUuY2hpbGRyZW4gPSBjb2x1bW5zIHx8IGNoaWxkcmVuXG4gICAgfVxuICAgIGlmIChleHBhbmRlZFJvd0tleXMgIT09IG51bGwpIHtcbiAgICAgIG5ld1N0YXRlLmV4cGFuZGVkUm93S2V5cyA9IGV4cGFuZGVkUm93S2V5c1xuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzICE9PSBudWxsKSB7XG4gICAgICBuZXdTdGF0ZS5zZWxlY3RlZFJvd0tleXMgPSBzZWxlY3RlZFJvd0tleXNcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1N0YXRlKS5sZW5ndGggPiAwID8gbmV3U3RhdGUgOiBudWxsXG4gIH1cblxuICBwdWJsaWMgY29tYmluZWRDZWxsc0luZm86IElCYXNlT2JqZWN0W10gPSBbXVxuXG4gIHB1YmxpYyBhZmZpeEhlYWRlcjogQWZmaXhcblxuICBwdWJsaWMgYWZmaXhTY3JvbGxiYXI6IEFmZml4XG5cbiAgcHVibGljIG1haW5UYWJsZTogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgbWFpblRhYmxlQm9keTogSFRNTERpdkVsZW1lbnRcblxuICBwdWJsaWMgbWFpblRoZWFkOiBIVE1MRGl2RWxlbWVudFxuXG4gIHB1YmxpYyB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuXG4gIHByaXZhdGUgZGVib3VuY2VkV2luZG93UmVzaXplOiBhbnlcblxuICBwcml2YXRlIHJlc2l6ZUV2ZW50OiBhbnlcblxuICBwcml2YXRlIGNvbHVtbk1hbmFnZXI6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVGFibGVQcm9wczxUPikge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXMsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWRSb3dLZXlzLFxuICAgICAgZXhwYW5kZWRSb3dLZXlzOiBleHBhbmRlZFJvd0tleXNQcm9wLFxuICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZFJvd0tleXNQcm9wLFxuICAgIH0gPSBwcm9wc1xuICAgIHRoaXMuY29sdW1uTWFuYWdlciA9IG5ldyBDb2x1bW5NYW5hZ2VyKGNvbHVtbnMgfHwgY2hpbGRyZW4pXG4gICAgbGV0IHNlbGVjdGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKHNlbGVjdGVkUm93S2V5c1Byb3ApIHtcbiAgICAgIHNlbGVjdGVkUm93S2V5cyA9IHNlbGVjdGVkUm93S2V5c1Byb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRTZWxlY3RlZFJvd0tleXMpIHtcbiAgICAgIHNlbGVjdGVkUm93S2V5cyA9IGRlZmF1bHRTZWxlY3RlZFJvd0tleXNcbiAgICB9XG4gICAgbGV0IGV4cGFuZGVkUm93S2V5czogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PiA9IFtdXG4gICAgaWYgKGV4cGFuZGVkUm93S2V5c1Byb3ApIHtcbiAgICAgIGV4cGFuZGVkUm93S2V5cyA9IGV4cGFuZGVkUm93S2V5c1Byb3BcbiAgICB9IGVsc2UgaWYgKGRlZmF1bHRFeHBhbmRlZFJvd0tleXMpIHtcbiAgICAgIGV4cGFuZGVkUm93S2V5cyA9IGRlZmF1bHRFeHBhbmRlZFJvd0tleXNcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFmZml4ZWRCb3R0b206IGZhbHNlLFxuICAgICAgYWZmaXhlZFRvcDogZmFsc2UsXG4gICAgICBjaGlsZHJlbjogY29sdW1ucyB8fCBjaGlsZHJlbixcbiAgICAgIGNvbWJpbmVkQ2VsbHNJbmZvOiBbXSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiB7fSwgLy8g5q2j5Zyo5pS55Y+Y5a695bqm55qE5YiX55qE5L+h5oGvXG4gICAgICBleHBhbmRlZFJvd0tleXMsXG4gICAgICBmaXhlZENvbHVtbnNJbmZvczogW10sXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WDogZmFsc2UsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WTogZmFsc2UsXG4gICAgICBpc1Jlc2l6ZXJTaG93OiBmYWxzZSxcbiAgICAgIG1haW5UYWJsZVN0eWxlOiB7fSxcbiAgICAgIHJlc2l6ZWQ6IFtdLCAvLyDmlLnlj5jov4flrr3luqbnmoTmiYDmnInliJfnmoTmlbDmja5cbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICB9XG4gICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUgPSBkZWJvdW5jZSh0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSwgMTAwKVxuICB9XG5cbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IChcbiAgICBuZXh0UHJvcHM6IElUYWJsZVByb3BzPFQ+LFxuICAgIG5leHRTdGF0ZTogSVRhYmxlU3RhdGVcbiAgKSA9PlxuICAgICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb2x1bW5NYW5hZ2VyLCBjb21iaW5lZENlbGxzSW5mbywgZGVib3VuY2VkV2luZG93UmVzaXplLCBwcm9wcyB9ID1cbiAgICAgIHRoaXNcbiAgICBjb25zdCB7IGlzQW55Q29sdW1uc0ZpeGVkIH0gPSBjb2x1bW5NYW5hZ2VyXG4gICAgY29uc3QgeyBoZWFkZXJBZmZpeGVkLCBoZWlnaHQgfSA9IHByb3BzXG4gICAgLy8g5Zu65a6a6KGo5aS06ZyA6KaB55uR5ZCsIHJlc2l6ZSDkuovku7ZcbiAgICBpZiAoaGVhZGVyQWZmaXhlZCB8fCBoZWlnaHQgfHwgaXNBbnlDb2x1bW5zRml4ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlV2luZG93UmVzaXplKClcbiAgICAgIHRoaXMucmVzaXplRXZlbnQgPSBhZGRFdmVudExpc3RlbmVyKFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIFwicmVzaXplXCIsXG4gICAgICAgIGRlYm91bmNlZFdpbmRvd1Jlc2l6ZVxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoY29tYmluZWRDZWxsc0luZm8ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tYmluZWRDZWxsc0luZm8gfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlID0gKHtcbiAgICBkYXRhU291cmNlOiBkYXRhU291cmNlT2xkLFxuICAgIGdldENlbGxQcm9wczogZ2V0Q2VsbFByb3BzT2xkLFxuICB9OiBJVGFibGVQcm9wczxUPikgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgZ2V0Q2VsbFByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgLyoqXG4gICAgICogaGFuZGxlV2luZG93UmVzaXplIOS4jeW6lOivpeWPquWcqCBkaWRtb3VudCDml7bmiafooYxcbiAgICAgKiBkaWRVcGRhdGUg5pe25Lmf6ZyA6KaBXG4gICAgICovXG4gICAgaWYgKCFzaGFsbG93RXF1YWwoZGF0YVNvdXJjZU9sZCwgZGF0YVNvdXJjZSkpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5oYW5kbGVXaW5kb3dSZXNpemUsIDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCI5bm25Y2V5YWD5qC86ZyA5ou/5Yiw55yf5a6e55qEIGRvbSDlhYPntKDorqHnrpflsLrlr7jvvIzlm6DmraTov5nph4zpnIDopoEgZm9yY2VVcGRhdGVcbiAgICAgKi9cbiAgICBpZiAoIXNoYWxsb3dFcXVhbChnZXRDZWxsUHJvcHNPbGQsIGdldENlbGxQcm9wcykgJiYgZ2V0Q2VsbFByb3BzKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucmVzaXplRXZlbnQpIHtcbiAgICAgIHRoaXMucmVzaXplRXZlbnQucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplKSB7XG4gICAgICB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZS5jbGVhcigpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtblN0YXJ0ID0gKFxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+LFxuICAgIGNvbDogSUNvbHVtblByb3BzPFQ+XG4gICkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiY29sLXJlc2l6ZVwiXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50bHlSZXNpemluZzoge1xuICAgICAgICBjb2wsXG4gICAgICAgIGRhdGFJbmRleDogY29sLmRhdGFJbmRleCxcbiAgICAgICAgcGFyZW50V2lkdGg6XG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgLndpZHRoLFxuICAgICAgICBzdGFydFg6IGUucGFnZVgsXG4gICAgICB9LFxuICAgIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZylcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB9LCAwKVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtbk1vdmluZyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHsgcmVzaXplZCwgY3VycmVudGx5UmVzaXppbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGNvbCwgZGF0YUluZGV4LCBwYXJlbnRXaWR0aCwgc3RhcnRYIH0gPSBjdXJyZW50bHlSZXNpemluZ1xuICAgIC8qKlxuICAgICAqIDEzIOS7o+ihqOWtl+WPt++8m+eUqCBlbSDnmoTmlrnlvI/orqHnrpflrr3luqbmnKzouqvkuI3lpJ/lkIjnkIbvvIzov5nph4wgKyAy77yM5LiN54S25ZyoIFNhZmFyaSDkuIvnqbrpl7TkvJrkuI3lpJ/jgIJcbiAgICAgKi9cbiAgICBjb25zdCBiYXNlV2lkdGggPVxuICAgICAgTWF0aC5jZWlsKFxuICAgICAgICBjb2wudGl0bGUubGVuZ3RoID4gNCA/IGNvbC50aXRsZS5sZW5ndGggLyAyIDogY29sLnRpdGxlLmxlbmd0aFxuICAgICAgKSAqXG4gICAgICAgIDEzICtcbiAgICAgIDJcbiAgICBjb25zdCBuZXdSZXNpemVkID0gcmVzaXplZC5maWx0ZXIoKG8pID0+IG8uZGF0YUluZGV4ICE9PSBkYXRhSW5kZXgpXG4gICAgY29uc3QgbmV3V2lkdGggPSBNYXRoLm1heChcbiAgICAgIE1hdGguY2VpbChwYXJlbnRXaWR0aCArIGUucGFnZVggLSBzdGFydFgpLFxuICAgICAgISFjb2wub25Tb3J0IHx8ICEhY29sLm9uRmlsdGVyID8gYmFzZVdpZHRoICsgMzYgOiBiYXNlV2lkdGggKyAxNlxuICAgIClcbiAgICBuZXdSZXNpemVkLnB1c2goe1xuICAgICAgZGF0YUluZGV4LFxuICAgICAgdmFsdWU6IG5ld1dpZHRoLFxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByZXNpemVkOiBuZXdSZXNpemVkLFxuICAgIH0pXG4gICAgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUoKVxuICB9XG5cbiAgcHVibGljIHJlc2l6ZUNvbHVtbkVuZCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBtYWluVGFibGUgfSA9IHRoaXNcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IFwiXCJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMucmVzaXplQ29sdW1uRW5kKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLnJlc2l6ZUNvbHVtbkVuZClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiB7fSxcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYOlxuICAgICAgICBtYWluVGFibGUgJiYgbWFpblRhYmxlLnNjcm9sbFdpZHRoID4gbWFpblRhYmxlLm9mZnNldFdpZHRoLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6XG4gICAgICAgIG1haW5UYWJsZSAmJiBtYWluVGFibGUuc2Nyb2xsSGVpZ2h0ID4gbWFpblRhYmxlLm9mZnNldEhlaWdodCxcbiAgICAgIGlzUmVzaXplclNob3c6IGZhbHNlLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY29sdW1uTWFuYWdlciwgbWFpblRhYmxlLCBwcm9wcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgaXNBbnlDb2x1bW5zRml4ZWQgfSA9IGNvbHVtbk1hbmFnZXJcbiAgICBjb25zdCB7IGhlYWRlckFmZml4ZWQsIGhlaWdodCB9ID0gcHJvcHNcbiAgICBpZiAoKGhlYWRlckFmZml4ZWQgfHwgaGVpZ2h0IHx8IGlzQW55Q29sdW1uc0ZpeGVkKSAmJiBtYWluVGFibGUpIHtcbiAgICAgIGNvbnN0IHsgbWFpblRhYmxlU3R5bGU6IG9sZFN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgICBjb25zdCByZWN0ID0gbWFpblRhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBjb25zdCBtYWluVGFibGVTdHlsZTogUGFydGlhbDxSZWFjdC5DU1NQcm9wZXJ0aWVzPiA9IHt9XG4gICAgICBtYWluVGFibGVTdHlsZS5sZWZ0ID0gcmVjdC5sZWZ0XG4gICAgICBtYWluVGFibGVTdHlsZS53aWR0aCA9IHJlY3Qud2lkdGhcbiAgICAgIGlmICghc2hhbGxvd0VxdWFsKG1haW5UYWJsZVN0eWxlLCBvbGRTdHlsZSkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1haW5UYWJsZVN0eWxlIH0pXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1g6XG4gICAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxXaWR0aCA+IG1haW5UYWJsZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1k6XG4gICAgICAgICAgbWFpblRhYmxlICYmIG1haW5UYWJsZS5zY3JvbGxIZWlnaHQgPiBtYWluVGFibGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlTWFpblRhYmxlU2Nyb2xsID0gKGU/OiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgYWZmaXhIZWFkZXIsIG1haW5UYWJsZSB9ID0gdGhpc1xuICAgIGNvbnN0IHsgb25TY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGFmZml4ZWRUb3AgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChvblNjcm9sbCAmJiBlKSB7XG4gICAgICAvLyBlIOWPr+iDveaYryB0aGVhZFxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgIGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKFwicm9sZVwiKSA9PT0gXCJ0YWJsZVwiKSB7XG4gICAgICAgIG9uU2Nyb2xsKGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFmZml4ZWRUb3AgJiYgYWZmaXhIZWFkZXIgJiYgbWFpblRhYmxlICYmIGFmZml4SGVhZGVyLmZpeGVkTm9kZSkge1xuICAgICAgYWZmaXhIZWFkZXIuZml4ZWROb2RlLnNjcm9sbExlZnQgPSBtYWluVGFibGUuc2Nyb2xsTGVmdFxuICAgIH1cblxuICAgIC8vIOWbuuWumuWktOeahOaDheWGte+8jOmcgOimgeWQjOatpeWbuuWumua7muWKqOadoeWSjOS4uyBUYWJsZSDmu5rliqjmnaFcbiAgICB0aGlzLnN5bmNUYWJsZVNjcm9sbFBvc2l0aW9uKG1haW5UYWJsZS5zY3JvbGxMZWZ0KVxuICB9XG5cbiAgcHVibGljIHN5bmNUYWJsZVNjcm9sbFBvc2l0aW9uID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IGFmZml4U2Nyb2xsYmFyLCBtYWluVGFibGUsIG1haW5UaGVhZCB9ID0gdGhpc1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAobWFpblRhYmxlICYmIGFmZml4U2Nyb2xsYmFyICYmIGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZSkge1xuICAgICAgaWYgKG1haW5UYWJsZS5zY3JvbGxMZWZ0ICE9PSB2YWx1ZSkge1xuICAgICAgICBtYWluVGFibGUuc2Nyb2xsTGVmdCA9IHZhbHVlXG4gICAgICB9XG4gICAgICBpZiAoYWZmaXhTY3JvbGxiYXIuZml4ZWROb2RlLnNjcm9sbExlZnQgIT09IHZhbHVlKSB7XG4gICAgICAgIGFmZml4U2Nyb2xsYmFyLmZpeGVkTm9kZS5zY3JvbGxMZWZ0ID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlpoLmnpzorr7lrprkuoYgcHJvcCBoZWlnaHTvvIzlubbkuJTlrZjlnKjmqKrlkJHmu5rliqjmnaHvvIzliJnopoHlkIzmraUgdGhlYWQg55qE5rua5Yqo5L2N572uXG4gICAgaWYgKGhlaWdodCAmJiBtYWluVGhlYWQpIHtcbiAgICAgIG1haW5UaGVhZC5zY3JvbGxMZWZ0ID0gdmFsdWVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUm93Q2xpY2sgPSAoXG4gICAgcm93OiBULFxuICAgIGk6IG51bWJlcixcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zdCB7IGV4cGFuZE9uUm93Q2xpY2ssIGdldFNlbGVjdFByb3BzLCBvblJvd0NsaWNrLCBzZWxlY3RPblJvd0NsaWNrIH0gPVxuICAgICAgdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgIGlmIChcbiAgICAgIHNlbGVjdE9uUm93Q2xpY2sgJiZcbiAgICAgIHR5cGVvZiBrZXkgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICEoXG4gICAgICAgIGdldFNlbGVjdFByb3BzICYmXG4gICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkgJiZcbiAgICAgICAgZ2V0U2VsZWN0UHJvcHMocm93LCBpKS5kaXNhYmxlZFxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3Qoa2V5LCAhc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgfVxuICAgIGlmIChleHBhbmRPblJvd0NsaWNrKSB7XG4gICAgICB0aGlzLmhhbmRsZUV4cGFuZChrZXkpXG4gICAgfVxuICAgIGlmIChvblJvd0NsaWNrKSB7XG4gICAgICBvblJvd0NsaWNrKHJvdywgaSwgZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGhSZXNpemUgPSAoXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBkYXRhSW5kZXg6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIGZpeGVkUG9zaXRpb24/OiBib29sZWFuIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbiAgKSA9PiB7XG4gICAgY29uc3QgeyBnZXRDb2x1bW5zIH0gPSB0aGlzLmNvbHVtbk1hbmFnZXJcbiAgICBsZXQgeyBmaXhlZENvbHVtbnNJbmZvcyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRDb2x1bW5zKCkgYXMgSUNvbHVtblByb3BzPFQ+W11cbiAgICAvKipcbiAgICAgKiBjb2x1bW5zIOWPmOWMluWQjiBmaXhlZENvbHVtbnNJbmZvcyDkuK3lj6/og73lrZjlnKjlt7Lnu4/np7vpmaTnmoQgY29sdW1uXG4gICAgICovXG4gICAgZml4ZWRDb2x1bW5zSW5mb3MgPSBmaXhlZENvbHVtbnNJbmZvcy5maWx0ZXIoKG8pID0+XG4gICAgICBjb2x1bW5zLmZpbmQoKHApID0+IHAuZGF0YUluZGV4ID09PSBvLmRhdGFJbmRleClcbiAgICApXG4gICAgY29uc3QgaSA9IGZpeGVkQ29sdW1uc0luZm9zLmZpbmRJbmRleCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAvLyBmaXhlZCDlj6/og73mmK8gQm9vbGVhblxuICAgIGNvbnN0IGZpeGVkID0gZml4ZWRQb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gXCJyaWdodFwiIDogXCJsZWZ0XCJcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBpZiAoZml4ZWRDb2x1bW5zSW5mb3NbaV0ud2lkdGggPT09IHdpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZml4ZWRDb2x1bW5zSW5mb3Muc3BsaWNlKGksIDEpXG4gICAgfVxuICAgIGZpeGVkQ29sdW1uc0luZm9zLnB1c2goeyB3aWR0aCwgZGF0YUluZGV4LCBpbmRleCwgZml4ZWQgfSlcbiAgICBmaXhlZENvbHVtbnNJbmZvcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleClcblxuICAgIGNvbnN0IGZpeGVkQ29sdW1uc0luZm9zTGVmdCA9IGZpeGVkQ29sdW1uc0luZm9zLmZpbHRlcihcbiAgICAgIChvKSA9PiBvLmZpeGVkID09PSBcImxlZnRcIlxuICAgIClcbiAgICBjb25zdCBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0ID0gZml4ZWRDb2x1bW5zSW5mb3NcbiAgICAgIC5maWx0ZXIoKG8pID0+IG8uZml4ZWQgPT09IFwicmlnaHRcIilcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmluZGV4IC0gYS5pbmRleClcblxuICAgIGZpeGVkQ29sdW1uc0luZm9zLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgbGV0IGNvbEluZGV4XG4gICAgICBpZiAoY29sLmZpeGVkID09PSBcImxlZnRcIikge1xuICAgICAgICBjb2xJbmRleCA9IGZpeGVkQ29sdW1uc0luZm9zTGVmdC5maW5kSW5kZXgoXG4gICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBjb2wuZGF0YUluZGV4XG4gICAgICAgIClcbiAgICAgICAgaWYgKGNvbEluZGV4ID09PSBmaXhlZENvbHVtbnNJbmZvc0xlZnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGNvbC5pc0xhc3RMZWZ0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbC5pc0xhc3RMZWZ0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvLyDlrrnplJnvvIzkuI3lhYHorrggc2xpY2UoMCwgLTEpIOeahOWNsemZqeaTjeS9nFxuICAgICAgICBjb2wub2Zmc2V0ID1cbiAgICAgICAgICBjb2xJbmRleCA9PT0gLTFcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiBmaXhlZENvbHVtbnNJbmZvc0xlZnRcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgY29sSW5kZXgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci53aWR0aCwgMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbEluZGV4ID0gZml4ZWRDb2x1bW5zSW5mb3NSaWdodC5maW5kSW5kZXgoXG4gICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBjb2wuZGF0YUluZGV4XG4gICAgICAgIClcbiAgICAgICAgaWYgKGNvbEluZGV4ID09PSBmaXhlZENvbHVtbnNJbmZvc1JpZ2h0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb2wuaXNGaXJzdFJpZ2h0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbC5pc0ZpcnN0UmlnaHQgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIC8vIOWuuemUme+8jOS4jeWFgeiuuCBzbGljZSgwLCAtMSkg55qE5Y2x6Zmp5pON5L2cXG4gICAgICAgIGNvbC5vZmZzZXQgPVxuICAgICAgICAgIGNvbEluZGV4ID09PSAtMVxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IGZpeGVkQ29sdW1uc0luZm9zUmlnaHRcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgY29sSW5kZXgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBjdXIpID0+IGFjYyArIGN1ci53aWR0aCwgMClcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaXhlZENvbHVtbnNJbmZvcyB9LCB0aGlzLmZvcmNlVXBkYXRlKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVRoZWFkTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzUmVzaXplclNob3cgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoIWlzUmVzaXplclNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc1Jlc2l6ZXJTaG93OiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlVGhlYWRNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudGx5UmVzaXppbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoT2JqZWN0LmtleXMoY3VycmVudGx5UmVzaXppbmcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzUmVzaXplclNob3c6IGZhbHNlLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5bGV5byA6KGMXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlRXhwYW5kID0gKGtleTogUmVhY3QuUmVhY3RUZXh0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7IGV4cGFuZGVkUm93S2V5czogZXhwYW5kZWRSb3dLZXlzUHJvcCwgb25FeHBhbmRDaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGV4cGFuZGVkUm93S2V5cyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IGtleXMgPSBbLi4uZXhwYW5kZWRSb3dLZXlzXVxuICAgIGNvbnN0IGluZGV4ID0ga2V5cy5pbmRleE9mKGtleSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAga2V5cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMucHVzaChrZXkpXG4gICAgfVxuICAgIGlmIChleHBhbmRlZFJvd0tleXNQcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWRSb3dLZXlzOiBrZXlzIH0pXG4gICAgfVxuICAgIGlmIChvbkV4cGFuZENoYW5nZSkge1xuICAgICAgb25FeHBhbmRDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YCJ5oup6KGMXG4gICAqL1xuICBwdWJsaWMgaGFuZGxlU2VsZWN0ID0gKGtleTogUmVhY3QuUmVhY3RUZXh0LCBjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCxcbiAgICAgIHNlbGVjdE11bHRpcGxlLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWxlY3RlZFJvd0tleXMgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQga2V5cyA9IFsuLi5zZWxlY3RlZFJvd0tleXNdXG4gICAgaWYgKHNlbGVjdE11bHRpcGxlKSB7XG4gICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5zcGxpY2Uoc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2Yoa2V5KSwgMSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IFtrZXldXG4gICAgfVxuICAgIGlmIChzZWxlY3RlZFJvd0tleXNQcm9wID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRSb3dLZXlzOiBrZXlzLFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKG9uU2VsZWN0Q2hhbmdlKSB7XG4gICAgICBvblNlbGVjdENoYW5nZShrZXlzKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgInmi6nooYzlhajpgInmk43kvZxcbiAgICovXG4gIHB1YmxpYyBoYW5kbGVTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3RDaGFuZ2UsIHNlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRSb3dLZXlzUHJvcCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qga2V5cyA9IFsuLi5zZWxlY3RlZFJvd0tleXNdXG4gICAgY29uc3QgYXZhaWxhYmxlS2V5cyA9IHRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKVxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBhdmFpbGFibGVLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5LiN6IO955u05o6l5riF56m65pWw57uE77yM5Zug5Li65Y+v6IO95Lyg5YWl5LqG5LiO5b2T5YmNIGRhdGFTb3VyY2Ug5peg5YWz55qEIGtleXPvvJtcbiAgICAgIC8vIOS5n+S4jeiDveebtOaOpSBzcGxpY2XvvIzlm6DkuLropoHmo4Dmn6XmmK/lkKYgZ2V0U2VsZWN0UHJvcHMuZGlzYWJsZWTjgIJcbiAgICAgIHNlbGVjdGVkUm93S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGF2YWlsYWJsZUtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZihrZXkpLCAxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzUHJvcCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkUm93S2V5czoga2V5cyxcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChvblNlbGVjdENoYW5nZSkge1xuICAgICAgb25TZWxlY3RDaGFuZ2Uoa2V5cylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Yik5pat5piv5ZCm5bey5YWo6YOo6YCJ5oupXG4gICAqL1xuICBwdWJsaWMgaGFzU2VsZWN0ZWRBbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMuZ2V0QXZhaWxhYmxlUm93c0tleXMoKVxuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSb3dLZXlzIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKFxuICAgICAgZGF0YVNvdXJjZSAmJlxuICAgICAgZGF0YVNvdXJjZS5sZW5ndGggJiZcbiAgICAgIGtleXMubGVuZ3RoICYmXG4gICAgICBrZXlzLmV2ZXJ5KChrZXkpID0+IHNlbGVjdGVkUm93S2V5cy5pbmNsdWRlcyhrZXkpKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgZ2V0QXZhaWxhYmxlUm93c0tleXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCBnZXRTZWxlY3RQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGtleXM6IEFycmF5PFJlYWN0LlJlYWN0VGV4dD4gPSBbXVxuICAgIGlmICghZGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIGRhdGFTb3VyY2UuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gcm93XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBrZXkgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgIShcbiAgICAgICAgICBnZXRTZWxlY3RQcm9wcyAmJlxuICAgICAgICAgIGdldFNlbGVjdFByb3BzKHJvdywgaSkgJiZcbiAgICAgICAgICBnZXRTZWxlY3RQcm9wcyhyb3csIGkpLmRpc2FibGVkXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGtleXNcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZVRhYmxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGFTb3VyY2UsXG4gICAgICBleHBhbmRJY29uVmlzaWJsZSxcbiAgICAgIGV4cGFuZGVkUm93UmVuZGVyLFxuICAgICAgZXhwYW5kT25Sb3dDbGljayxcbiAgICAgIGdldEhlYWRDbGFzc05hbWUsXG4gICAgICBnZXRIZWFkU3R5bGUsXG4gICAgICBnZXRSb3dDbGFzc05hbWUsXG4gICAgICBnZXRSb3dQcm9wcyxcbiAgICAgIGdldFJvd1N0eWxlLFxuICAgICAgZ2V0U2VsZWN0UHJvcHMsXG4gICAgICBoZWFkZXJBZmZpeGVkLFxuICAgICAgaGVhZGVyQWZmaXhlZE9mZnNldFRvcCxcbiAgICAgIGhlYWRlckFmZml4R2V0VGFyZ2V0LFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblJvd01vdXNlRW50ZXIsXG4gICAgICBvblJvd01vdXNlTGVhdmUsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHNlbGVjdE11bHRpcGxlLFxuICAgICAgc2VsZWN0T25Sb3dDbGljayxcbiAgICAgIHNpemUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgdmlydHVhbExpc3RQcm9wcyxcbiAgICAgIHZpcnR1YWxMaXN0U3R5bGUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7XG4gICAgICBhZmZpeGVkVG9wLFxuICAgICAgYWZmaXhlZEJvdHRvbSxcbiAgICAgIGV4cGFuZGVkUm93S2V5cyxcbiAgICAgIGZpeGVkQ29sdW1uc0luZm9zLFxuICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICBpc01haW5UYWJsZU92ZXJmbG93WSxcbiAgICAgIG1haW5UYWJsZVN0eWxlLFxuICAgICAgcmVzaXplZCxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyxcbiAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3Qge1xuICAgICAgZ2V0Q29sdW1ucyxcbiAgICAgIC8vIGdldExlZnRDb2x1bW5zV2lkdGgsXG4gICAgICBnZXRHcm91cENvbHVtbnNEZXB0aCxcbiAgICAgIGlzQW55Q29sdW1uc0xlZnRGaXhlZCxcbiAgICB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0Q29sdW1ucygpIGFzIElDb2x1bW5Qcm9wczxUPltdXG5cbiAgICBjb25zdCB0aGVhZFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgaGVpZ2h0OiBgJHtURF9IRUlHSFRbc2l6ZSB8fCBcInNtYWxsXCJdICogZ2V0R3JvdXBDb2x1bW5zRGVwdGgoKX1weGAsXG4gICAgICAuLi4oKGdldEhlYWRTdHlsZSAmJiBnZXRIZWFkU3R5bGUoKSkgfHwge30pLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWxleW8gOihjOWSjOmAieaLqeihjOaXtu+8jHRoZWFk5ZKM5q+P6KGM55qE56ys5LiA5YiX5YmN6YO96KaB5Yqg5YWl5LiA5YiXXG4gICAgICog5q2k5YiX5Lmf5Lya5b2x5ZONIHN0aWNreSDnmoTlgY/np7vkvY3nva5cbiAgICAgKi9cbiAgICBjb25zdCBzZWxlY3RBbmRFeHBhbmQgPSAhIW9uU2VsZWN0Q2hhbmdlICYmICEhb25FeHBhbmRDaGFuZ2VcbiAgICBjb25zdCB0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSA9XG4gICAgICBleHBhbmRJY29uVmlzaWJsZSAmJiAoISFvblNlbGVjdENoYW5nZSB8fCAhIW9uRXhwYW5kQ2hhbmdlKVxuXG4gICAgY29uc3QgdGhlYWQgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17MH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIGAke3ByZWZpeH0tdGhlYWRgLFxuICAgICAgICAgIGdldEhlYWRDbGFzc05hbWUgJiYgZ2V0SGVhZENsYXNzTmFtZSgpXG4gICAgICAgICl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVUaGVhZE1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUaGVhZE1vdXNlTGVhdmV9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwibWFpblRoZWFkXCIpfVxuICAgICAgICBzdHlsZT17dGhlYWRTdHlsZX1cbiAgICAgID5cbiAgICAgICAge3RoZWFkUGxhY2Vob2xkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIGAke3ByZWZpeH0tdGhfZnVuY3Rpb25hbGAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdGBdOiBpc0FueUNvbHVtbnNMZWZ0Rml4ZWQoKSxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfZnVuY3Rpb25hbF9ib3RoYF06IHNlbGVjdEFuZEV4cGFuZCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PVwiZnVuY3Rpb25hbC1hbGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWxlY3RNdWx0aXBsZSAmJiAhIW9uU2VsZWN0Q2hhbmdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmdldEF2YWlsYWJsZVJvd3NLZXlzKCkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5oYXNTZWxlY3RlZEFsbCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudGB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhbGlnbixcbiAgICAgICAgICAgIGRhdGFJbmRleCxcbiAgICAgICAgICAgIGZpbHRlcnMsXG4gICAgICAgICAgICBmaXhlZCxcbiAgICAgICAgICAgIG9uRmlsdGVyLFxuICAgICAgICAgICAgb25Tb3J0LFxuICAgICAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICB9ID0gY29sXG5cbiAgICAgICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgIGNvbnN0IGNsaWNrYWJsZSA9XG4gICAgICAgICAgICAhIW9uU29ydCB8fFxuICAgICAgICAgICAgKHNvcnRPcmRlciAhPT0gbnVsbCAmJiBzb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICEhb25GaWx0ZXIgfHxcbiAgICAgICAgICAgICEhZmlsdGVyc1xuICAgICAgICAgIGxldCBtaW5XaWR0aCA9IDBcbiAgICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtaW5XaWR0aCA9XG4gICAgICAgICAgICAgIE1hdGguY2VpbCh0aXRsZS5sZW5ndGggPiA0ID8gdGl0bGUubGVuZ3RoIC8gMiA6IHRpdGxlLmxlbmd0aCkgKlxuICAgICAgICAgICAgICAgIDEzICtcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgICAgICAgICAgbWluV2lkdGggKz0gMjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGZsZXhWYWx1ZVxuICAgICAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRofSAwIGF1dG9gXG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmICh3aWR0aC5sZW5ndGggLSB3aWR0aC5sYXN0SW5kZXhPZihcInB4XCIpID09PSAyKSB7XG4gICAgICAgICAgICAgIGZsZXhWYWx1ZSA9IGAke3dpZHRoLnNsaWNlKDAsIC0yKX0gMCBhdXRvYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmxleFZhbHVlID0gYDAgMCAke3dpZHRofWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxleFZhbHVlID0gYCR7TWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCl9IDAgYXV0b2BcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogdGggbGVmdCDlgLzvvJrlj5blvpcgcmVzaXplLW9ic2VydmVyIOWtmOWCqOeahOivpeWIl+eahOWBj+enu+mHj++8jOWKoOS4iuWmguaenOaciemAieaLqeihjOOAgeWxleW8gOihjOaXtueahCBTRUxFQ1RfVERfV0lEVEgg4oCU4oCUIOS7heWvuSBsZWZ0IOacieaViFxuICAgICAgICAgICAqIHRoIHJpZ2h0IOWAvO+8muWPluW+lyByZXNpemUtb2JzZXJ2ZXIg5a2Y5YKo55qE6K+l5YiX55qE5YGP56e76YeP77yM5Yqg5LiK5aaC5p6c5YaF5rua5Yqo5pe255qE5rua5Yqo5p2h5a695bqm77yIMTTvvIkg4oCU4oCUIOS7heWvuSByaWdodCDmnInmlYhcbiAgICAgICAgICAgKi9cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAgICAgIG9uUmVzaXplPXsoeyB3aWR0aDogd2lkdGhSZXNpemUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVGhSZXNpemUod2lkdGhSZXNpemUsIGRhdGFJbmRleCwgaW5kZXgsIGZpeGVkKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWZpeGVkfVxuICAgICAgICAgICAgICBrZXk9e2RhdGFJbmRleCB8fCBpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRoYCwge1xuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06IGNsaWNrYWJsZSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX2xlZnRgXTogaXNGaXhlZExlZnQoY29sKSxcbiAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRoX3JpZ2h0YF06IGlzRml4ZWRSaWdodChjb2wpLFxuICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfbGVmdExhc3RgXTogZml4ZWRDb2x1bW5zSW5mb3MuZmluZChcbiAgICAgICAgICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICAgICAgICAgICk/LmlzTGFzdExlZnQsXG4gICAgICAgICAgICAgICAgICBbYCR7cHJlZml4fS10aF9yaWdodEZpcnN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4XG4gICAgICAgICAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgaW5kZXh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGlzRml4ZWRMZWZ0KGNvbClcbiAgICAgICAgICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAodGhlYWRQbGFjZWhvbGRlclZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZWN0QW5kRXhwYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gU0VMRUNUX0FORF9FWFBBTkRfVERfV0lEVEhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBTRUxFQ1RfVERfV0lEVEhcbiAgICAgICAgICAgICAgICAgICAgICAgIDogMClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICByaWdodDogaXNGaXhlZFJpZ2h0KGNvbClcbiAgICAgICAgICAgICAgICAgICAgPyAoZml4ZWRDb2x1bW5zSW5mb3MuZmluZCgobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgICAgICAgICAoaXNNYWluVGFibGVPdmVyZmxvd1kgJiYgaGVpZ2h0ID8gMTQgOiAwKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIGZsZXg6IHJlc2l6ZWRDb2wgPyBgJHtyZXNpemVkQ29sLnZhbHVlfSAwIGF1dG9gIDogZmxleFZhbHVlLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHJlc2l6ZWRDb2wgPyByZXNpemVkQ29sLnZhbHVlIDogd2lkdGggfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IHJlc2l6ZWRDb2xcbiAgICAgICAgICAgICAgICAgICAgPyByZXNpemVkQ29sLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogd2lkdGggfHwgTWF0aC5tYXgoVERfTUlOX1dJRFRILCBtaW5XaWR0aCksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbHVtbj17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChjb2wsIHsgaW5kZXgsIGNvbHVtbnMgfSl9XG4gICAgICAgICAgICAgICAge2NvbC5jaGlsZHJlbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS10aEdyb3VwYH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb2wuY2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChjaGlsZENvbDogSUNvbHVtblByb3BzPFQ+LCBjaGlsZENvbEluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGhgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNoaWxkQ29sLm9uU29ydCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkQ29sLnNvcnRPcmRlciAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wub25GaWx0ZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhY2hpbGRDb2wuZmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRDb2wuZGF0YUluZGV4IHx8IGNoaWxkQ29sSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxMDAgMCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGNoaWxkQ29sLmFsaWduIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUaENlbGwoY2hpbGRDb2wpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRDb2wuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXRoR3JvdXBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZENvbC5jaGlsZHJlbi5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFuZENvbDogSUNvbHVtblByb3BzPFQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ29sSW5kZXg6IG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGhfY2xpY2thYmxlYF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFncmFuZENvbC5vblNvcnQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ3JhbmRDb2wuc29ydE9yZGVyICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFuZENvbC5zb3J0T3JkZXIgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWdyYW5kQ29sLm9uRmlsdGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFncmFuZENvbC5maWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2dyYW5kQ29sLmRhdGFJbmRleCB8fCBncmFuZENvbEluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogXCIxMDAgMCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogZ3JhbmRDb2wuYWxpZ24gfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZVRoQ2VsbChncmFuZENvbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVzaXplT2JzZXJ2ZXI+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IGdlbmVyYXRlVHJzID0gKHJvdzogVCwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IHJvd1xuICAgICAgY29uc3QgY29sQXJyYXk6IGFueSA9IFtdXG4gICAgICBjb25zdCBzZWxlY3RQcm9wc0dldHRlZCA9IGdldFNlbGVjdFByb3BzICYmIGdldFNlbGVjdFByb3BzKHJvdywgcm93SW5kZXgpXG4gICAgICBjb25zdCBhbGxTZWxlY3RQcm9wcyA9IHtcbiAgICAgICAgY2hlY2tlZDogc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4fS1zZWxlY3RDb21wb25lbnRgLFxuICAgICAgICBvbkNoYW5nZTogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHRoaXMuaGFuZGxlU2VsZWN0KGtleSwgY2hlY2tlZCksXG4gICAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpLFxuICAgICAgICAuLi4oc2VsZWN0UHJvcHNHZXR0ZWQgfHwge30pLFxuICAgICAgfVxuICAgICAgY29uc3Qgc2VsZWN0UHJvcHMgPSBvbWl0KGFsbFNlbGVjdFByb3BzLCBbXCJwb3BvdmVyUHJvcHNcIl0pXG4gICAgICBjb25zdCBzZWxlY3RDb250ZW50ID0gc2VsZWN0TXVsdGlwbGUgPyAoXG4gICAgICAgIDxDaGVja2JveCB7Li4uc2VsZWN0UHJvcHN9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8UmFkaW8gey4uLnNlbGVjdFByb3BzfSAvPlxuICAgICAgKVxuICAgICAgY29uc3QgZXhwYW5kQ29udGVudCA9IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1zZWxlY3RDb21wb25lbnRgfVxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUV4cGFuZChrZXkpfVxuICAgICAgICAgIHJvbGU9XCJub25lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17YCR7cHJlZml4fS1leHBhbmRJY29uYH0gaWNvbj1cImFycm93LWRvd25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIGxldCBzZWxlY3RDZWxsID0gb25FeHBhbmRDaGFuZ2UgPyBleHBhbmRDb250ZW50IDogc2VsZWN0Q29udGVudFxuICAgICAgaWYgKHNlbGVjdEFuZEV4cGFuZCkge1xuICAgICAgICBzZWxlY3RDZWxsID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXNlbGVjdENvbXBvbmVudC13cmFwcGVyYH0+XG4gICAgICAgICAgICB7c2VsZWN0Q29udGVudH1cbiAgICAgICAgICAgIHtleHBhbmRDb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICBjb25zdCBnZW5lcmF0ZVRyID0gKGNvbHVtbnNQYXJhbTogYW55W10sIHBhcmVudEluZGV4PzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbHVtbnNQYXJhbS5mb3JFYWNoKChjb2wsIGNvbEluZGV4UGFyYW0pID0+IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiDlpoLmnpzliY3pnaIg55qEIGNvbCDmnIkgY2hpbGRyZW7vvIzliJnopoHmioogY2hpbGRyZW4ubGVuZ3RoIOmineWkluWKoOWIsCBjb2xJbmRleFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxldCBjb2xJbmRleCA9IGNvbEluZGV4UGFyYW1cbiAgICAgICAgICBpZiAocGFyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50SW5kZXg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbkNvdW50ID0gY29sdW1uc1tpXS5jaGlsZHJlbj8ubGVuZ3RoIHx8IDFcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuQ291bnQpIHtcbiAgICAgICAgICAgICAgICBjb2xJbmRleCArPSBjaGlsZHJlbkNvdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjb2wuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbEFycmF5LnB1c2godGhpcy5nZW5lcmF0ZVRib2R5Q2VsbChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2VuZXJhdGVUcihjb2wuY2hpbGRyZW4sIGNvbEluZGV4UGFyYW0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZ2VuZXJhdGVUcihjb2x1bW5zKVxuICAgICAgbGV0IHRyID0gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgYCR7cHJlZml4fS10cmAsXG4gICAgICAgICAgICBnZXRSb3dDbGFzc05hbWUgJiYgZ2V0Um93Q2xhc3NOYW1lKHJvdywgcm93SW5kZXgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10cl9jbGlja2FibGVgXTogZXhwYW5kT25Sb3dDbGljayB8fCBzZWxlY3RPblJvd0NsaWNrLFxuICAgICAgICAgICAgICBbYCR7cHJlZml4fS10cl9leHBhbmRlZGBdOiBleHBhbmRlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSxcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdHJfc2VsZWN0ZWRgXTogc2VsZWN0ZWRSb3dLZXlzLmluY2x1ZGVzKGtleSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKX1cbiAgICAgICAgICBrZXk9e2tleSB8fCByb3dJbmRleH1cbiAgICAgICAgICByb2xlPVwicm93XCJcbiAgICAgICAgICBkYXRhLXJvdz17cm93SW5kZXh9XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtcbiAgICAgICAgICAgIG9uUm93TW91c2VFbnRlclxuICAgICAgICAgICAgICA/IChlKSA9PiBvblJvd01vdXNlRW50ZXIocm93LCByb3dJbmRleCwgZSlcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtcbiAgICAgICAgICAgIG9uUm93TW91c2VMZWF2ZVxuICAgICAgICAgICAgICA/IChlKSA9PiBvblJvd01vdXNlTGVhdmUocm93LCByb3dJbmRleCwgZSlcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlUm93Q2xpY2socm93LCByb3dJbmRleCwgZSl9XG4gICAgICAgICAgb25LZXlEb3duPXtub29wfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi4oKGdldFJvd1N0eWxlICYmIGdldFJvd1N0eWxlKHJvdywgcm93SW5kZXgpKSB8fCB7fSksXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVhZFBsYWNlaG9sZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhgJHtwcmVmaXh9LXRkYCwgYCR7cHJlZml4fS10ZF9mdW5jdGlvbmFsYCwge1xuICAgICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2xlZnRgXTogaXNBbnlDb2x1bW5zTGVmdEZpeGVkKCksXG4gICAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tdGRfZnVuY3Rpb25hbF9ib3RoYF06IHNlbGVjdEFuZEV4cGFuZCxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGtleT1cImZ1bmN0aW9uYWxcIlxuICAgICAgICAgICAgICByb2xlPVwiY2VsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tY2VsbGB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IHZlcnRpY2FsQWxpZ24gJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnbl0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RQcm9wc0dldHRlZD8ucG9wb3ZlclByb3BzPy5wb3B1cCA/IChcbiAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlRW50ZXJEZWxheT17MC4xfVxuICAgICAgICAgICAgICAgICAgICBhbGlnbkVkZ2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi4oXG4gICAgICAgICAgICAgICAgICAgICAgKGdldFNlbGVjdFByb3BzICYmIGdldFNlbGVjdFByb3BzKHJvdywgcm93SW5kZXgpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgICAgICkucG9wb3ZlclByb3BzfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0Q2VsbH1cbiAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgc2VsZWN0Q2VsbFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y29sQXJyYXl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgICBpZiAoZ2V0Um93UHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBwb3BvdmVyIH0gPSBnZXRSb3dQcm9wcyhyb3csIHJvd0luZGV4KVxuICAgICAgICBpZiAocG9wb3Zlcj8ucG9wdXApIHtcbiAgICAgICAgICB0ciA9IDxQb3BvdmVyIHsuLi5wb3BvdmVyfT57dHJ9PC9Qb3BvdmVyPlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob25FeHBhbmRDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0cixcbiAgICAgICAgICBleHBhbmRlZFJvd0tleXMuaW5jbHVkZXMoa2V5KSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZFJvd2B9IGtleT1cInRyLWV4cGFuZFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LWV4cGFuZFJvdy1pbm5lcmB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgaXNNYWluVGFibGVPdmVyZmxvd1hcbiAgICAgICAgICAgICAgICAgICAgPyB7IHdpZHRoOiBtYWluVGFibGVTdHlsZS53aWR0aCB9XG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyEhZXhwYW5kZWRSb3dSZW5kZXIgJiYgZXhwYW5kZWRSb3dSZW5kZXIocm93LCByb3dJbmRleCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGwsXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0clxuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBoZWFkZXJBZmZpeGVkID8gKFxuICAgICAgICA8QWZmaXhcbiAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgb2Zmc2V0VG9wPXtoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wfVxuICAgICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gdGhpcy53cmFwcGVyfVxuICAgICAgICAgIGdldFRhcmdldD17aGVhZGVyQWZmaXhHZXRUYXJnZXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhib29sKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWZmaXhlZFRvcDogYm9vbCB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIOWbuuWumueahOmCo+S4gOWIu+S5n+mcgOimgeeri+WNs+mHjeaWsOWumuS9jeOAglxuICAgICAgICAgICAgICAvLyDph43mlrDlrprkvY3jgIHljIXmi6zkuIvpnaLnmoQgY2xhc3NOYW1lLCBzdHlsZSDlj6rlnKjkuLvooajmoLzkuIrlj5HnlJ/vvIzlm6DkuLrlm7rlrprliJfnmoQgQWZmaXgg6KGM5Li65b6I5Y2V57qv44CCXG4gICAgICAgICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUoKVxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTWFpblRhYmxlU2Nyb2xsKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YWZmaXhlZFRvcCA/IGAke3ByZWZpeH0tYWZmaXhgIDogXCJcIn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImJhc2VsaW5lXCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgLi4uKGFmZml4ZWRUb3AgPyBtYWluVGFibGVTdHlsZSA6IHt9KSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwiYWZmaXhIZWFkZXJcIil9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhlYWR9XG4gICAgICAgIDwvQWZmaXg+XG4gICAgICApIDogKFxuICAgICAgICB0aGVhZFxuICAgICAgKSxcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXsxfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdGJvZHlgfVxuICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcIm1haW5UYWJsZUJvZHlcIil9XG4gICAgICA+XG4gICAgICAgIHshdmlydHVhbFNjcm9sbCAmJlxuICAgICAgICAgIGRhdGFTb3VyY2UgJiZcbiAgICAgICAgICAhIWRhdGFTb3VyY2UubGVuZ3RoICYmXG4gICAgICAgICAgZGF0YVNvdXJjZS5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRycyhyb3csIHJvd0luZGV4KVxuICAgICAgICAgIH0pfVxuICAgICAgICB7dmlydHVhbFNjcm9sbCAmJiBkYXRhU291cmNlICYmICEhZGF0YVNvdXJjZS5sZW5ndGggJiYgKFxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBkYXRhPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgaXRlbUtleT1cImtleVwiXG4gICAgICAgICAgICBoZWlnaHQ9eyhoZWlnaHQgfHwgNDAwKSAtIDQwfVxuICAgICAgICAgICAgaXRlbUhlaWdodD17NDJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeH0tdmlydHVhbC13cmFwcGVyYH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLnZpcnR1YWxMaXN0U3R5bGUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgey4uLnZpcnR1YWxMaXN0UHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyhyb3c6IFQsIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVHJzKHJvdywgcm93SW5kZXgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PixcbiAgICAgIGlzTWFpblRhYmxlT3ZlcmZsb3dYICYmIGhlYWRlckFmZml4ZWQgJiYgKFxuICAgICAgICA8QWZmaXhcbiAgICAgICAgICBrZXk9ezJ9XG4gICAgICAgICAgb2Zmc2V0Qm90dG9tPXswfVxuICAgICAgICAgIGdldENvbnRhaW5lcj17KCkgPT4gdGhpcy5tYWluVGFibGVCb2R5fVxuICAgICAgICAgIHJlZj17dGhpcy5zYXZlUmVmKFwiYWZmaXhTY3JvbGxiYXJcIil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tYWZmaXhTY3JvbGxiYXJgLCB7XG4gICAgICAgICAgICBbYCR7cHJlZml4fS1hZmZpeFNjcm9sbGJhcl9zaG93YF06IGFmZml4ZWRCb3R0b20sXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgIC4uLm1haW5UYWJsZVN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25TY3JvbGw9eyhlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+XG4gICAgICAgICAgICB0aGlzLnN5bmNUYWJsZVNjcm9sbFBvc2l0aW9uKGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNoYW5nZT17KGJvb2wpID0+IHRoaXMuc2V0U3RhdGUoeyBhZmZpeGVkQm90dG9tOiBib29sIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogdGhpcy5tYWluVGFibGU/LnNjcm9sbFdpZHRoIH19IC8+XG4gICAgICAgIDwvQWZmaXg+XG4gICAgICApLFxuICAgIF1cbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZVRoQ2VsbCA9IChjb2w6IElDb2x1bW5Qcm9wczxUPiwgb3B0aW9ucz86IElCYXNlT2JqZWN0KSA9PiB7XG4gICAgY29uc3QgeyBhbGlnbiwgY29sdW1uc1Jlc2l6YWJsZSwgZ2V0SGVhZENlbGxDbGFzc05hbWUsIGdldEhlYWRDZWxsU3R5bGUgfSA9XG4gICAgICB0aGlzLnByb3BzXG4gICAgY29uc3QgeyByZXNpemFibGU6IGNvbFJlc2l6YWJsZSB9ID0gY29sXG4gICAgbGV0IHJlc2l6YWJsZSA9IHRydWVcbiAgICBpZiAodHlwZW9mIGNvbFJlc2l6YWJsZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJlc2l6YWJsZSA9IGNvbFJlc2l6YWJsZVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbHVtbnNSZXNpemFibGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXNpemFibGUgPSBjb2x1bW5zUmVzaXphYmxlXG4gICAgfVxuXG4gICAgY29uc3QgeyBjdXJyZW50bHlSZXNpemluZywgaXNSZXNpemVyU2hvdyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgaXNMYXN0VGggPSBvcHRpb25zICYmIG9wdGlvbnMuaW5kZXggPT09IG9wdGlvbnMuY29sdW1ucy5sZW5ndGggLSAxXG5cbiAgICBjb25zdCB0aENlbGwgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICBgJHtwcmVmaXh9LWNlbGxgLFxuICAgICAgICAgIGdldEhlYWRDZWxsQ2xhc3NOYW1lICYmXG4gICAgICAgICAgICBnZXRIZWFkQ2VsbENsYXNzTmFtZShjb2wsIG9wdGlvbnMgPyBvcHRpb25zLmluZGV4IDogdW5kZWZpbmVkKVxuICAgICAgICApfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OlxuICAgICAgICAgICAgKGNvbC5hbGlnbiAmJiBIT1JJWk9OVEFMX0FMSUdOW2NvbC5hbGlnbl0pIHx8XG4gICAgICAgICAgICAoYWxpZ24gJiYgSE9SSVpPTlRBTF9BTElHTlthbGlnbl0pIHx8XG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgLi4uKChnZXRIZWFkQ2VsbFN0eWxlICYmXG4gICAgICAgICAgICBnZXRIZWFkQ2VsbFN0eWxlKGNvbCwgb3B0aW9ucyA/IG9wdGlvbnMuaW5kZXggOiB1bmRlZmluZWQpKSB8fFxuICAgICAgICAgICAge30pLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7IWNvbC5vblNvcnQgJiZcbiAgICAgICAgICAoY29sLnNvcnRPcmRlciA9PT0gbnVsbCB8fCBjb2wuc29ydE9yZGVyID09PSB1bmRlZmluZWQpICYmXG4gICAgICAgICAgIWNvbC5vbkZpbHRlciAmJlxuICAgICAgICAgICFjb2wuZmlsdGVycyAmJlxuICAgICAgICAgIGNvbC50aXRsZX1cbiAgICAgICAgeyghIWNvbC5vblNvcnQgfHxcbiAgICAgICAgICAoY29sLnNvcnRPcmRlciAhPT0gbnVsbCAmJiBjb2wuc29ydE9yZGVyICE9PSB1bmRlZmluZWQpKSAmJiAoXG4gICAgICAgICAgPFRhYmxlU29ydFxuICAgICAgICAgICAgb25Tb3J0PXsob3JkZXIpID0+IChjb2wub25Tb3J0ID8gY29sLm9uU29ydChvcmRlcikgOiB7fSl9XG4gICAgICAgICAgICBzb3J0T3JkZXI9e2NvbC5zb3J0T3JkZXJ9XG4gICAgICAgICAgICB0aXRsZT17Y29sLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsoISFjb2wub25GaWx0ZXIgfHwgISFjb2wuZmlsdGVycykgJiYgKFxuICAgICAgICAgIDxUYWJsZUZpbHRlclxuICAgICAgICAgICAgZmlsdGVyZWRWYWx1ZT17Y29sLmZpbHRlcmVkVmFsdWV9XG4gICAgICAgICAgICBmaWx0ZXJWaXNpYmxlPXtjb2wuZmlsdGVyVmlzaWJsZX1cbiAgICAgICAgICAgIGZpbHRlck11bHRpcGxlPXtjb2wuZmlsdGVyTXVsdGlwbGV9XG4gICAgICAgICAgICBmaWx0ZXJQb3BvdmVyUHJvcHM9e2NvbC5maWx0ZXJQb3BvdmVyUHJvcHN9XG4gICAgICAgICAgICBmaWx0ZXJzPXtjb2wuZmlsdGVyc31cbiAgICAgICAgICAgIG9uRmlsdGVyPXsoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjb2wub25GaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBjb2wub25GaWx0ZXIoZmlsdGVyKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlPXsodmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY29sLm9uRmlsdGVyVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGNvbC5vbkZpbHRlclZpc2libGVDaGFuZ2UodmlzaWJsZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRpdGxlPXtjb2wudGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFjb2wuZml4ZWQgJiYgcmVzaXphYmxlICYmICFpc0xhc3RUaCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tcmVzaXplcmAsIHtcbiAgICAgICAgICAgICAgW2Ake3ByZWZpeH0tcmVzaXplcl9zaG93YF06IGlzUmVzaXplclNob3csXG4gICAgICAgICAgICAgIFtgJHtwcmVmaXh9LXJlc2l6ZXJfY3VycmVudGBdOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nLmRhdGFJbmRleCA9PT0gY29sLmRhdGFJbmRleCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0KGUsIGNvbCl9XG4gICAgICAgICAgICByb2xlPVwibm9uZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGlmIChjb2wucG9wb3Zlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBtb3VzZUVudGVyRGVsYXk9ezAuM31cbiAgICAgICAgICBwbGFjZW1lbnQ9e1xuICAgICAgICAgICAgY29sLmFsaWduID09PSBcImNlbnRlclwiXG4gICAgICAgICAgICAgID8gXCJ0b3BcIlxuICAgICAgICAgICAgICA6IGNvbC5hbGlnbiA9PT0gXCJyaWdodFwiXG4gICAgICAgICAgICAgID8gXCJ0b3BSaWdodFwiXG4gICAgICAgICAgICAgIDogXCJ0b3BMZWZ0XCJcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ25FZGdlXG4gICAgICAgICAgYXJyb3dlZFxuICAgICAgICAgIHBvcHVwPXtjb2wucG9wb3Zlcn1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aENlbGx9XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHRoQ2VsbFxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVGJvZHlDZWxsID0gKFxuICAgIHJvdzogVCxcbiAgICBjZWxsOiBJQ29sdW1uUHJvcHM8VD4sXG4gICAgcm93SW5kZXg6IG51bWJlcixcbiAgICBjZWxsSW5kZXg6IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBhbGlnbjogYWxpZ25Qcm9wLFxuICAgICAgZXhwYW5kSWNvblZpc2libGUsXG4gICAgICBnZXRDZWxsQ2xhc3NOYW1lLFxuICAgICAgZ2V0Q2VsbFByb3BzLFxuICAgICAgZ2V0Q2VsbFN0eWxlLFxuICAgICAgb25FeHBhbmRDaGFuZ2UsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICAgIHZlcnRpY2FsQWxpZ246IHZlcnRpY2FsQWxpZ25Qcm9wLFxuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc2VsZWN0QW5kRXhwYW5kID0gISFvblNlbGVjdENoYW5nZSAmJiAhIW9uRXhwYW5kQ2hhbmdlXG4gICAgY29uc3QgdGhlYWRQbGFjZWhvbGRlclZpc2libGUgPVxuICAgICAgZXhwYW5kSWNvblZpc2libGUgJiYgKCEhb25TZWxlY3RDaGFuZ2UgfHwgISFvbkV4cGFuZENoYW5nZSlcbiAgICBjb25zdCB7IGN1cnJlbnRseVJlc2l6aW5nLCBmaXhlZENvbHVtbnNJbmZvcywgcmVzaXplZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHtcbiAgICAgIGFsaWduLFxuICAgICAgZGF0YUluZGV4LFxuICAgICAgZmlsdGVycyxcbiAgICAgIG9uRmlsdGVyLFxuICAgICAgb25Tb3J0LFxuICAgICAgcmVuZGVyLFxuICAgICAgc29ydE9yZGVyLFxuICAgICAgdGl0bGUsXG4gICAgICB2ZXJ0aWNhbEFsaWduLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IGNlbGxcbiAgICBjb25zdCBjbGlja2FibGUgPVxuICAgICAgISFvblNvcnQgfHxcbiAgICAgIChzb3J0T3JkZXIgIT09IG51bGwgJiYgc29ydE9yZGVyICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAhIW9uRmlsdGVyIHx8XG4gICAgICAhIWZpbHRlcnNcbiAgICBsZXQgbWluV2lkdGggPSAwXG4gICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbWluV2lkdGggPVxuICAgICAgICBNYXRoLmNlaWwodGl0bGUubGVuZ3RoID4gNCA/IHRpdGxlLmxlbmd0aCAvIDIgOiB0aXRsZS5sZW5ndGgpICogMTMgKyAxNlxuICAgICAgaWYgKGNsaWNrYWJsZSkge1xuICAgICAgICBtaW5XaWR0aCArPSAyMFxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZmxleFZhbHVlXG4gICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGh9IDAgYXV0b2BcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHdpZHRoLmxlbmd0aCAtIHdpZHRoLmxhc3RJbmRleE9mKFwicHhcIikgPT09IDIpIHtcbiAgICAgICAgZmxleFZhbHVlID0gYCR7d2lkdGguc2xpY2UoMCwgLTIpfSAwIGF1dG9gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGV4VmFsdWUgPSBgMCAwICR7d2lkdGh9YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmbGV4VmFsdWUgPSBgJHtNYXRoLm1heChURF9NSU5fV0lEVEgsIG1pbldpZHRoKX0gMCBhdXRvYFxuICAgIH1cbiAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgIGNvbnN0IGNlbGxDbGFzc05hbWUgPVxuICAgICAgZ2V0Q2VsbENsYXNzTmFtZSAmJiBnZXRDZWxsQ2xhc3NOYW1lKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleClcbiAgICBjb25zdCBjZWxsUHJvcHMgPVxuICAgICAgKGdldENlbGxQcm9wcyAmJiBnZXRDZWxsUHJvcHMocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KSkgfHwge31cbiAgICBjb25zdCBjZWxsU3R5bGUgPVxuICAgICAgKGdldENlbGxTdHlsZSAmJiBnZXRDZWxsU3R5bGUocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KSkgfHwge31cbiAgICBjb25zdCB7IHJvd1NwYW4sIGNvbFNwYW4sIC4uLm90aGVyQ2VsbFByb3BzIH0gPSBjZWxsUHJvcHNcbiAgICBpZiAocm93U3BhbiB8fCBjb2xTcGFuKSB7XG4gICAgICB0aGlzLmNvbWJpbmVkQ2VsbHNJbmZvLnB1c2goe1xuICAgICAgICBjZWxsLFxuICAgICAgICBjZWxsSW5kZXgsXG4gICAgICAgIGNvbFNwYW4sXG4gICAgICAgIHJvdyxcbiAgICAgICAgcm93SW5kZXgsXG4gICAgICAgIHJvd1NwYW4sXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS10ZGAsIHtcbiAgICAgICAgICBbYCR7cHJlZml4fS10ZF9yZXNpemluZ2BdOlxuICAgICAgICAgICAgZGF0YUluZGV4ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGN1cnJlbnRseVJlc2l6aW5nLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4LFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2xlZnRgXTogaXNGaXhlZExlZnQoY2VsbCksXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfcmlnaHRgXTogaXNGaXhlZFJpZ2h0KGNlbGwpLFxuICAgICAgICAgIFtgJHtwcmVmaXh9LXRkX2xlZnRMYXN0YF06IGZpeGVkQ29sdW1uc0luZm9zLmZpbmQoXG4gICAgICAgICAgICAobykgPT4gby5kYXRhSW5kZXggPT09IGRhdGFJbmRleFxuICAgICAgICAgICk/LmlzTGFzdExlZnQsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfcmlnaHRGaXJzdGBdOiBmaXhlZENvbHVtbnNJbmZvcy5maW5kKFxuICAgICAgICAgICAgKG8pID0+IG8uZGF0YUluZGV4ID09PSBkYXRhSW5kZXhcbiAgICAgICAgICApPy5pc0ZpcnN0UmlnaHQsXG4gICAgICAgICAgW2Ake3ByZWZpeH0tdGRfY29tYmluZWRgXTogcm93U3BhbiB8fCBjb2xTcGFuLFxuICAgICAgICB9KX1cbiAgICAgICAga2V5PXtkYXRhSW5kZXggfHwgY2VsbEluZGV4fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGxlZnQ6IGlzRml4ZWRMZWZ0KGNlbGwpXG4gICAgICAgICAgICA/IChmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KVxuICAgICAgICAgICAgICAgID8ub2Zmc2V0IHx8IDApICtcbiAgICAgICAgICAgICAgKHRoZWFkUGxhY2Vob2xkZXJWaXNpYmxlXG4gICAgICAgICAgICAgICAgPyBzZWxlY3RBbmRFeHBhbmRcbiAgICAgICAgICAgICAgICAgID8gU0VMRUNUX0FORF9FWFBBTkRfVERfV0lEVEhcbiAgICAgICAgICAgICAgICAgIDogU0VMRUNUX1REX1dJRFRIXG4gICAgICAgICAgICAgICAgOiAwKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgcmlnaHQ6IGlzRml4ZWRSaWdodChjZWxsKVxuICAgICAgICAgICAgPyBmaXhlZENvbHVtbnNJbmZvcy5maW5kKChvKSA9PiBvLmRhdGFJbmRleCA9PT0gZGF0YUluZGV4KT8ub2Zmc2V0XG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmbGV4OiByZXNpemVkQ29sID8gYCR7cmVzaXplZENvbC52YWx1ZX0gMCBhdXRvYCA6IGZsZXhWYWx1ZSxcbiAgICAgICAgICB3aWR0aDogcmVzaXplZENvbFxuICAgICAgICAgICAgPyByZXNpemVkQ29sLnZhbHVlXG4gICAgICAgICAgICA6IHdpZHRoIHx8IE1hdGgubWF4KFREX01JTl9XSURUSCwgbWluV2lkdGgpLFxuICAgICAgICAgIG1heFdpZHRoOiByZXNpemVkQ29sID8gcmVzaXplZENvbC52YWx1ZSA6IHdpZHRoIHx8IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIHJvbGU9XCJjZWxsXCJcbiAgICAgICAgZGF0YS1yb3c9e3Jvd0luZGV4fVxuICAgICAgICBkYXRhLWNvbHVtbj17Y2VsbEluZGV4fVxuICAgICAgICB7Li4ub3RoZXJDZWxsUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fS1jZWxsYCwgY2VsbENsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XG4gICAgICAgICAgICAgICh2ZXJ0aWNhbEFsaWduICYmIFZFUlRJQ0FMX0FMSUdOW3ZlcnRpY2FsQWxpZ25dKSB8fFxuICAgICAgICAgICAgICAodmVydGljYWxBbGlnblByb3AgJiYgVkVSVElDQUxfQUxJR05bdmVydGljYWxBbGlnblByb3BdKSB8fFxuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICAgICAgKGFsaWduICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25dKSB8fFxuICAgICAgICAgICAgICAoYWxpZ25Qcm9wICYmIEhPUklaT05UQUxfQUxJR05bYWxpZ25Qcm9wXSkgfHxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgLi4uY2VsbFN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsSW5uZXJgfT5cbiAgICAgICAgICAgIHtyZW5kZXIgPyByZW5kZXIocm93LCBjZWxsLCByb3dJbmRleCwgY2VsbEluZGV4KSA6IHJvd1tkYXRhSW5kZXhdfVxuICAgICAgICAgICAgeyhyb3dTcGFuIHx8IGNvbFNwYW4pICYmIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1jZWxsX2NvbWJpbmVkYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDb21iaW5lZENlbGxTdHlsZShcbiAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgICAgICByb3dJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZGV4LFxuICAgICAgICAgICAgICAgICAgICByb3dTcGFuLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBhbGlnbiB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJcbiAgICAgICAgICAgICAgICAgID8gcmVuZGVyKHJvdywgY2VsbCwgcm93SW5kZXgsIGNlbGxJbmRleClcbiAgICAgICAgICAgICAgICAgIDogcm93W2RhdGFJbmRleF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBwdWJsaWMgZ2V0Q29tYmluZWRDZWxsU3R5bGUgPSAoXG4gICAgXzogSUJhc2VPYmplY3QsXG4gICAgX186IElDb2x1bW5Qcm9wczxUPixcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXIsXG4gICAgcm93U3BhbjogbnVtYmVyLFxuICAgIGNvbFNwYW46IG51bWJlclxuICApID0+IHtcbiAgICBjb25zdCBnZXRUYWJsZUNlbGwgPSAocm93SW5kZXhQYXJhbTogbnVtYmVyLCBjb2xJbmRleFBhcmFtOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLm1haW5UYWJsZSkge1xuICAgICAgICBjb25zdCByb3cgPVxuICAgICAgICAgIHRoaXMubWFpblRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwicm93XCJdJylbcm93SW5kZXhQYXJhbV1cbiAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgIHJldHVybiByb3cuY2hpbGRyZW5bY29sSW5kZXhQYXJhbV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgY29uc3QgY2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCwgY29sSW5kZXgpXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7fVxuICAgIGlmIChyb3dTcGFuIDwgMiB8fCB0eXBlb2Ygcm93U3BhbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMCUgLSAxcHgpXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW5kQ2VsbCA9IGdldFRhYmxlQ2VsbChyb3dJbmRleCArIHJvd1NwYW4gLSAxLCBjb2xJbmRleClcbiAgICAgIGlmIChjZWxsICYmIGVuZENlbGwpIHtcbiAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGNvbnN0IGVuZENlbGxSZWN0ID0gZW5kQ2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAvLyDmnIDlkI4gLSAxIOaYr+S4uuS6huS4jeaMoeS9jyBjZWxsIOeahCBib3gtc2hhZG93XG4gICAgICAgIHN0eWxlLmhlaWdodCA9IGAke1xuICAgICAgICAgIGVuZENlbGxSZWN0LmhlaWdodCArIGVuZENlbGxSZWN0LnRvcCAtIGNlbGxSZWN0LnRvcCAtIDFcbiAgICAgICAgfXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2xTcGFuIDwgMiB8fCB0eXBlb2YgY29sU3BhbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8g5pyA5ZCOIC0gMSDmmK/kuLrkuobkuI3mjKHkvY8gY2VsbCDnmoQgYm94LXNoYWRvd1xuICAgICAgc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSAtIDFweClcIlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbmRDZWxsID0gZ2V0VGFibGVDZWxsKHJvd0luZGV4LCBjb2xJbmRleCArIGNvbFNwYW4gLSAxKVxuICAgICAgaWYgKGNlbGwgJiYgZW5kQ2VsbCkge1xuICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgZW5kQ2VsbFJlY3QgPSBlbmRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIC8vIOacgOWQjiAtIDEg5piv5Li65LqG5LiN5oyh5L2PIGNlbGwg55qEIGJveC1zaGFkb3dcbiAgICAgICAgc3R5bGUud2lkdGggPSBgJHtcbiAgICAgICAgICBlbmRDZWxsUmVjdC53aWR0aCArIGVuZENlbGxSZWN0LmxlZnQgLSBjZWxsUmVjdC5sZWZ0IC0gMVxuICAgICAgICB9cHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlXG4gIH1cblxuICBwdWJsaWMgc2F2ZVJlZiA9XG4gICAgKFxuICAgICAgbmFtZT86XG4gICAgICAgIHwgXCJhZmZpeEhlYWRlclwiXG4gICAgICAgIHwgXCJhZmZpeFNjcm9sbGJhclwiXG4gICAgICAgIHwgXCJtYWluVGFibGVcIlxuICAgICAgICB8IFwibWFpblRhYmxlQm9keVwiXG4gICAgICAgIHwgXCJtYWluVGhlYWRcIlxuICAgICAgICB8IFwid3JhcHBlclwiXG4gICAgKSA9PlxuICAgIChub2RlOiBhbnkpID0+IHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSBub2RlXG4gICAgICB9XG4gICAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGVtcHR5VGV4dCxcbiAgICAgIGhlYWRlckFmZml4ZWQsXG4gICAgICBoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wLFxuICAgICAgaGVhZGVyQWZmaXhHZXRUYXJnZXQsXG4gICAgICBoZWFkZXJFbXBoYXNpemVkLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbG9hZGluZyxcbiAgICAgIHNpemUsXG4gICAgICB2aXJ0dWFsU2Nyb2xsLFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KG90aGVyUHJvcHMsIFtcbiAgICAgIFwiYWxpZ25cIixcbiAgICAgIFwiY2hpbGRyZW5cIixcbiAgICAgIFwiY29sdW1uc1wiLFxuICAgICAgXCJjb2x1bW5zUmVzaXphYmxlXCIsXG4gICAgICBcImRlZmF1bHRFeHBhbmRlZFJvd0tleXNcIixcbiAgICAgIFwiZGVmYXVsdFNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRJY29uVmlzaWJsZVwiLFxuICAgICAgXCJleHBhbmRPblJvd0NsaWNrXCIsXG4gICAgICBcImV4cGFuZGVkUm93S2V5c1wiLFxuICAgICAgXCJleHBhbmRlZFJvd1JlbmRlclwiLFxuICAgICAgXCJnZXRDZWxsQ2xhc3NOYW1lXCIsXG4gICAgICBcImdldENlbGxQcm9wc1wiLFxuICAgICAgXCJnZXRDZWxsU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENsYXNzTmFtZVwiLFxuICAgICAgXCJnZXRIZWFkU3R5bGVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0SGVhZENlbGxTdHlsZVwiLFxuICAgICAgXCJnZXRSb3dDbGFzc05hbWVcIixcbiAgICAgIFwiZ2V0Um93UHJvcHNcIixcbiAgICAgIFwiZ2V0Um93U3R5bGVcIixcbiAgICAgIFwiZ2V0U2VsZWN0UHJvcHNcIixcbiAgICAgIFwib25FeHBhbmRDaGFuZ2VcIixcbiAgICAgIFwib25TZWxlY3RDaGFuZ2VcIixcbiAgICAgIFwib25TY3JvbGxcIixcbiAgICAgIFwib25Sb3dDbGlja1wiLFxuICAgICAgXCJvblJvd01vdXNlRW50ZXJcIixcbiAgICAgIFwib25Sb3dNb3VzZUxlYXZlXCIsXG4gICAgICBcInNlbGVjdE11bHRpcGxlXCIsXG4gICAgICBcInNlbGVjdGVkUm93S2V5c1wiLFxuICAgICAgXCJzZWxlY3RPblJvd0NsaWNrXCIsXG4gICAgICBcInZlcnRpY2FsQWxpZ25cIixcbiAgICAgIFwidmlydHVhbExpc3RQcm9wc1wiLFxuICAgICAgXCJ2aXJ0dWFsTGlzdFN0eWxlXCIsXG4gICAgXSlcblxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzTWFpblRhYmxlT3ZlcmZsb3dYLCBpc01haW5UYWJsZU92ZXJmbG93WSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLmNvbHVtbk1hbmFnZXIucmVzZXQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgY29uc3QgeyBnZXRHcm91cENvbHVtbnNEZXB0aCB9ID0gdGhpcy5jb2x1bW5NYW5hZ2VyXG5cbiAgICBjb25zdCBlbXB0eSA9ICEoZGF0YVNvdXJjZSAmJiBkYXRhU291cmNlLmxlbmd0aClcblxuICAgIGNvbnN0IGNsYXNzU2V0ID0gY2xhc3NOYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGAke3ByZWZpeH0td3JhcHBlcmAsXG4gICAgICBgJHtwcmVmaXh9LSR7c2l6ZX1gLFxuICAgICAge1xuICAgICAgICBbYCR7cHJlZml4fS1oZWFkZXJFbXBoYXNpemVkYF06IGhlYWRlckVtcGhhc2l6ZWQsXG4gICAgICAgIFtgJHtwcmVmaXh9LWVtcHR5YF06IGVtcHR5LFxuICAgICAgICBbYCR7cHJlZml4fS1sb2FkaW5nYF06IGxvYWRpbmcsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXhgXTogaXNNYWluVGFibGVPdmVyZmxvd1gsXG4gICAgICAgIFtgJHtwcmVmaXh9LW92ZXJmbG93LXlgXTogaXNNYWluVGFibGVPdmVyZmxvd1ksXG4gICAgICAgIFtgJHtwcmVmaXh9LXZpcnR1YWxTY3JvbGxgXTogdmlydHVhbFNjcm9sbCxcbiAgICAgIH1cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU2V0fSByZWY9e3RoaXMuc2F2ZVJlZihcIndyYXBwZXJcIil9IHsuLi5yZXN0UHJvcHN9PlxuICAgICAgICA8QW5pbWF0ZVxuICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgdHJhbnNpdGlvbk5hbWU9XCJmYWRlXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIHRvcDogYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXX1weGAsXG4gICAgICAgICAgICB6SW5kZXg6IFwiY2FsYyh2YXIoLS16LWluZGV4LWFmZml4KSArIDIpXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2FkaW5nICYmXG4gICAgICAgICAgICAoaGVhZGVyQWZmaXhlZCA/IChcbiAgICAgICAgICAgICAgPEFmZml4XG4gICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXtcbiAgICAgICAgICAgICAgICAgIChoZWFkZXJBZmZpeGVkT2Zmc2V0VG9wIHx8IDApICsgVERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXRDb250YWluZXI9eygpID0+IHRoaXMud3JhcHBlcn1cbiAgICAgICAgICAgICAgICBnZXRUYXJnZXQ9e2hlYWRlckFmZml4R2V0VGFyZ2V0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSAvPlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgIDwvQWZmaXg+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4fS1wcm9ncmVzc2B9PlxuICAgICAgICAgICAgICAgIDxpIC8+XG4gICAgICAgICAgICAgICAgPGkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9BbmltYXRlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGAke3ByZWZpeH0tdGFibGVzYCwge1xuICAgICAgICAgICAgW2Ake3ByZWZpeH0taW5uZXJTY3JvbGxgXTogISFoZWlnaHQsXG4gICAgICAgICAgICBbYCR7cHJlZml4fS1vdmVyZmxvd2VkYF06IGlzTWFpblRhYmxlT3ZlcmZsb3dZLFxuICAgICAgICAgICAgW2Ake3ByZWZpeH0taGFzRml4ZWRSaWdodENvbHVtbnNgXTpcbiAgICAgICAgICAgICAgdGhpcy5jb2x1bW5NYW5hZ2VyLmlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQoKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiBoZWlnaHQgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogaGVpZ2h0XG4gICAgICAgICAgICAgID8gYCR7VERfSEVJR0hUW3NpemUgfHwgXCJzbWFsbFwiXSAqIGdldEdyb3VwQ29sdW1uc0RlcHRoKCl9cHhgXG4gICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LW1haW5UYWJsZWB9XG4gICAgICAgICAgICByZWY9e3RoaXMuc2F2ZVJlZihcIm1haW5UYWJsZVwiKX1cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJsZVwiXG4gICAgICAgICAgICBvblNjcm9sbD17dGhpcy5oYW5kbGVNYWluVGFibGVTY3JvbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2VuZXJhdGVUYWJsZSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2VtcHR5ICYmIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXh9LXBsYWNlaG9sZGVyYH0+e2VtcHR5VGV4dH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcbiJdfQ==