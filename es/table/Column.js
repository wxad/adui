import * as React from "react";
import PropTypes from "prop-types";
import omit from "../_util/omit";

function Column(props) {
  var restProps = omit(props, ["align", "children", "dataIndex", "filterMultiple", "filterPopoverProps", "filteredValue", "filters", "fixed", "getCellStyle", "onFilter", "onFilterVisibleChange", "onSort", "popover", "render", "resizable", "sortOrder", "title", "verticalAlign", "width"]);
  return React.createElement("div", restProps);
}

Column.propTypes = {
  align: PropTypes.oneOf([null, "left", "center", "right"]),
  dataIndex: PropTypes.string,
  filterMultiple: PropTypes.bool,
  filterPopoverProps: PropTypes.object,
  filteredValue: PropTypes.array,
  filterVisible: PropTypes.bool,
  filters: PropTypes.array,
  fixed: PropTypes.oneOf([null, false, true, "left", "right"]),
  getCellStyle: PropTypes.func,
  onFilter: function onFilter(props) {
    var onFilter = props.onFilter,
        onSort = props.onSort;

    if (onFilter) {
      if (typeof onFilter !== "function") {
        return new Error("Invalid prop `onFilter` supplied to `Column`, expected `function`");
      }

      if (!!onFilter && !!onSort) {
        return new Error("Column: 筛选和排序功能不能同时使用");
      }
    }

    return null;
  },
  onFilterVisibleChange: PropTypes.func,
  onSort: function onSort(props) {
    var onFilter = props.onFilter,
        onSort = props.onSort;

    if (onSort) {
      if (typeof onSort !== "function") {
        return new Error("Invalid prop `onSort` supplied to `Column`, expected `function`");
      }

      if (!!onFilter && !!onSort) {
        return new Error("Column: 筛选和排序功能不能同时使用");
      }
    }

    return null;
  },
  popover: PropTypes.node,
  render: PropTypes.func,
  resizable: PropTypes.bool,
  sortOrder: PropTypes.oneOf([null, "", "asc", "desc"]),
  title: PropTypes.node.isRequired,
  verticalAlign: PropTypes.oneOf([null, "top", "center", "bottom"]),
  width: function width(props) {
    var fixed = props.fixed,
        width = props.width;

    if (width) {
      if (typeof width !== "string" && typeof width !== "number") {
        return new Error("Invalid `width` supplied to `Column`, expected `string`|`number`.");
      }
    } else if (fixed) {
      return new Error("Column: fixed 列必须传入 width prop.");
    }

    return null;
  }
};
Column.defaultProps = {
  align: null,
  dataIndex: null,
  filterMultiple: false,
  filterPopoverProps: {},
  filteredValue: null,
  filterVisible: null,
  filters: null,
  fixed: null,
  getCellStyle: function getCellStyle() {},
  onFilter: null,
  onFilterVisibleChange: function onFilterVisibleChange() {},
  onSort: null,
  popover: null,
  render: null,
  resizable: null,
  sortOrder: null,
  verticalAlign: null,
  width: null
};
export default Column;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvQ29sdW1uLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIm9taXQiLCJDb2x1bW4iLCJwcm9wcyIsInJlc3RQcm9wcyIsInByb3BUeXBlcyIsImFsaWduIiwib25lT2YiLCJkYXRhSW5kZXgiLCJzdHJpbmciLCJmaWx0ZXJNdWx0aXBsZSIsImJvb2wiLCJmaWx0ZXJQb3BvdmVyUHJvcHMiLCJvYmplY3QiLCJmaWx0ZXJlZFZhbHVlIiwiYXJyYXkiLCJmaWx0ZXJWaXNpYmxlIiwiZmlsdGVycyIsImZpeGVkIiwiZ2V0Q2VsbFN0eWxlIiwiZnVuYyIsIm9uRmlsdGVyIiwib25Tb3J0IiwiRXJyb3IiLCJvbkZpbHRlclZpc2libGVDaGFuZ2UiLCJwb3BvdmVyIiwibm9kZSIsInJlbmRlciIsInJlc2l6YWJsZSIsInNvcnRPcmRlciIsInRpdGxlIiwiaXNSZXF1aXJlZCIsInZlcnRpY2FsQWxpZ24iLCJ3aWR0aCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsZUFBakI7O0FBbUdBLFNBQVNDLE1BQVQsQ0FBcURDLEtBQXJELEVBQTZFO0FBQzNFLE1BQU1DLFNBQVMsR0FBR0gsSUFBSSxDQUFDRSxLQUFELEVBQVEsQ0FDNUIsT0FENEIsRUFFNUIsVUFGNEIsRUFHNUIsV0FINEIsRUFJNUIsZ0JBSjRCLEVBSzVCLG9CQUw0QixFQU01QixlQU40QixFQU81QixTQVA0QixFQVE1QixPQVI0QixFQVM1QixjQVQ0QixFQVU1QixVQVY0QixFQVc1Qix1QkFYNEIsRUFZNUIsUUFaNEIsRUFhNUIsU0FiNEIsRUFjNUIsUUFkNEIsRUFlNUIsV0FmNEIsRUFnQjVCLFdBaEI0QixFQWlCNUIsT0FqQjRCLEVBa0I1QixlQWxCNEIsRUFtQjVCLE9BbkI0QixDQUFSLENB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IG9taXQgZnJvbSBcIi4uL191dGlsL29taXRcIlxuaW1wb3J0IHsgSVBvcG92ZXJQcm9wcyB9IGZyb20gXCIuLi9wb3BvdmVyXCJcblxuaW50ZXJmYWNlIElCYXNlT2JqZWN0IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbHVtblByb3BzPFQgZXh0ZW5kcyBJQmFzZU9iamVjdCA9IElCYXNlT2JqZWN0PiB7XG4gIC8qKlxuICAgKiDmsLTlubPpnaDpvZDmlrnlkJFcbiAgICovXG4gIGFsaWduPzogbnVsbCB8IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIlxuICAvKipcbiAgICog5a2Q6IqC54K5XG4gICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVtdXG4gIC8qKlxuICAgKiDntKLlvJVcbiAgICovXG4gIGRhdGFJbmRleDogc3RyaW5nXG4gIC8qKlxuICAgKiDmmK/lkKblpJrpgIlcbiAgICovXG4gIGZpbHRlck11bHRpcGxlPzogYm9vbGVhblxuICAvKipcbiAgICog562b6YCJIFBvcG92ZXIgcHJvcHPvvIzkvJrlsIbmraTlr7nosaHpgI/kvKDnu5kgPFBvcG92ZXIgLz5cbiAgICovXG4gIGZpbHRlclBvcG92ZXJQcm9wcz86IElQb3BvdmVyUHJvcHNcbiAgLyoqXG4gICAqIOWPr+S7peS7juWklumDqOS8oOWFpeetm+mAieeahOWAvO+8jG51bGwsIFtdLCDpg73kvJror4bliKvkuLrmnKrnrZvpgInnirbmgIFcbiAgICovXG4gIGZpbHRlcmVkVmFsdWU/OiBBcnJheTxSZWFjdC5SZWFjdFRleHQ+IHwgbnVsbFxuICAvKipcbiAgICog5LuO5aSW6YOo5o6n5Yi2IGZpbHRlciBQb3BvdmVyIOeahOaYvuekulxuICAgKi9cbiAgZmlsdGVyVmlzaWJsZT86IGJvb2xlYW4gfCBudWxsXG4gIC8qKlxuICAgKiDnrZvpgInpobnvvIzmoLzlvI/vvJpbeyB0ZXh0OiBcIuaci+WPi+WciOW5v+WRilwiLCB2YWx1ZTogJzInIH1dXG4gICAqL1xuICBmaWx0ZXJzPzogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBSZWFjdC5SZWFjdFRleHQgfT4gfCBudWxsXG4gIC8qKlxuICAgKiDlm7rlrprorr7nva5cbiAgICovXG4gIGZpeGVkPzogdHJ1ZSB8IGZhbHNlIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbiAgLyoqXG4gICAqIOiuvue9ruivpeWIl+avj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsU3R5bGU/OiAocm93OiBULCByb3dJbmRleDogbnVtYmVyKSA9PiBSZWFjdC5DU1NQcm9wZXJ0aWVzIHwgdm9pZFxuICAvKipcbiAgICog562b6YCJ5pe255qEIGhhbmRsZXLvvIznrZvpgInlkozmjpLluo/lip/og73kuI3og73lkIzml7bkvb/nlKhcbiAgICovXG4gIG9uRmlsdGVyPzogKCh2YWx1ZTogQXJyYXk8UmVhY3QuUmVhY3RUZXh0PikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDnrZvpgIkgcG9wdXAgdmlzaWJsZSDlj5jljJbml7bnmoQgaGFuZGxlcu+8jOWPguaVsCAoYm9vbCwgY29sKVxuICAgKi9cbiAgb25GaWx0ZXJWaXNpYmxlQ2hhbmdlPzogKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7fSkgfCBudWxsXG4gIC8qKlxuICAgKiDmjpLluo/ml7bnmoQgaGFuZGxlcu+8jOetm+mAieWSjOaOkuW6j+WKn+iDveS4jeiDveWQjOaXtuS9v+eUqFxuICAgKi9cbiAgb25Tb3J0PzogKChvcmRlcjogXCJhc2NcIiB8IFwiZGVzY1wiIHwgXCJcIikgPT4gdm9pZCkgfCBudWxsXG4gIC8qKlxuICAgKiDlnKjliJflpLTkuIrlop7liqAgcG9wb3ZlcuOAgui/meagt+eahOmcgOaxgui2iuadpei2iuW4uOinhO+8jOagt+W8j+S4iuWGhee9ruWIsCBUYWJsZSDlhoXlgZrop4TojIPvvIzkvZzkuLogcHJvcCDmmK/mnInlv4XopoHnmoTjgIJcbiAgICovXG4gIHBvcG92ZXI/OiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWmguaenOaciSByZW5kZXLvvIzliJkgcmVuZGVyIChyb3csIGNvbCwgcm93SW5kZXgsIGNvbEluZGV4Ke+8jOWQpuWImeWPliBkYXRhSW5kZXjjgIJcbiAgICovXG4gIHJlbmRlcj86IChcbiAgICByb3c6IFQsXG4gICAgY29sOiBJQmFzZU9iamVjdCxcbiAgICByb3dJbmRleDogbnVtYmVyLFxuICAgIGNvbEluZGV4OiBudW1iZXJcbiAgKSA9PiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOaYr+WQpuWFgeiuuOiwg+aVtOWuveW6pu+8jOm7mOiupCB0cnVlXG4gICAqL1xuICByZXNpemFibGU/OiBib29sZWFuXG4gIC8qKlxuICAgKiDlj6/ku6Xku47lpJbpg6jmjqfliLbmjpLluo/mlrnlvI9cbiAgICovXG4gIHNvcnRPcmRlcj86IG51bGwgfCBcIlwiIHwgXCJhc2NcIiB8IFwiZGVzY1wiXG4gIC8qKlxuICAgKiDliJflpLTmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGVcbiAgLyoqXG4gICAqIOWeguebtOmdoOm9kOaWueWQkVxuICAgKi9cbiAgdmVydGljYWxBbGlnbj86IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIlxuICAvKipcbiAgICog5YiX55qE5Zu65a6a5a695bqmXG4gICAqL1xuICB3aWR0aD86IFJlYWN0LlJlYWN0VGV4dFxufVxuXG4vKipcbiAqIENvbHVtbi5qcyDnmoTkvZznlKjku4XmmK/nuqbmnZ8gUHJvcFR5cGVz44CCXG4gKiDmr4/kuIDliJfnmoQgcHJvcHMg5ZyoIENvbHVtbk1hbmFnZXIuanMg5Lit5b6X5Yiw5aSE55CG44CCXG4gKi9cbmZ1bmN0aW9uIENvbHVtbjxUIGV4dGVuZHMgSUJhc2VPYmplY3QgPSBJQmFzZU9iamVjdD4ocHJvcHM6IElDb2x1bW5Qcm9wczxUPikge1xuICBjb25zdCByZXN0UHJvcHMgPSBvbWl0KHByb3BzLCBbXG4gICAgXCJhbGlnblwiLFxuICAgIFwiY2hpbGRyZW5cIixcbiAgICBcImRhdGFJbmRleFwiLFxuICAgIFwiZmlsdGVyTXVsdGlwbGVcIixcbiAgICBcImZpbHRlclBvcG92ZXJQcm9wc1wiLFxuICAgIFwiZmlsdGVyZWRWYWx1ZVwiLFxuICAgIFwiZmlsdGVyc1wiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdldENlbGxTdHlsZVwiLFxuICAgIFwib25GaWx0ZXJcIixcbiAgICBcIm9uRmlsdGVyVmlzaWJsZUNoYW5nZVwiLFxuICAgIFwib25Tb3J0XCIsXG4gICAgXCJwb3BvdmVyXCIsXG4gICAgXCJyZW5kZXJcIixcbiAgICBcInJlc2l6YWJsZVwiLFxuICAgIFwic29ydE9yZGVyXCIsXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwidmVydGljYWxBbGlnblwiLFxuICAgIFwid2lkdGhcIixcbiAgXSlcbiAgcmV0dXJuIDxkaXYgey4uLnJlc3RQcm9wc30gLz5cbn1cblxuQ29sdW1uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIOawtOW5s+mdoOm9kOaWueWQkVxuICAgKi9cbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIl0pLFxuICAvKipcbiAgICog57Si5byVXG4gICAqL1xuICBkYXRhSW5kZXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDmmK/lkKblpJrpgIlcbiAgICovXG4gIGZpbHRlck11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOetm+mAiSBQb3BvdmVyIHByb3Bz77yM5Lya5bCG5q2k5a+56LGh6YCP5Lyg57uZIDxQb3BvdmVyIC8+XG4gICAqL1xuICBmaWx0ZXJQb3BvdmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiDlj6/ku6Xku47lpJbpg6jkvKDlhaXnrZvpgInnmoTlgLzvvIxudWxsLCBbXSwg6YO95Lya6K+G5Yir5Li65pyq562b6YCJ54q25oCBXG4gICAqL1xuICBmaWx0ZXJlZFZhbHVlOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8qKlxuICAgKiDku47lpJbpg6jmjqfliLYgZmlsdGVyIFBvcG92ZXIg55qE5pi+56S6XG4gICAqL1xuICBmaWx0ZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIOetm+mAiemhue+8jOagvOW8j++8mlt7IHRleHQ6IFwi5pyL5Y+L5ZyI5bm/5ZGKXCIsIHZhbHVlOiAnMicgfV1cbiAgICovXG4gIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgLyoqXG4gICAqIOWbuuWumuiuvue9rlxuICAgKi9cbiAgZml4ZWQ6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgZmFsc2UsIHRydWUsIFwibGVmdFwiLCBcInJpZ2h0XCJdKSxcbiAgLyoqXG4gICAqIOiuvue9ruivpeWIl+avj+S4quWNleWFg+agvOS4iueahCBzdHlsZe+8jChyb3csIHJvd0luZGV4KSA9PiAoe30pXG4gICAqL1xuICBnZXRDZWxsU3R5bGU6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog562b6YCJ5pe255qEIGhhbmRsZXLvvIznrZvpgInlkozmjpLluo/lip/og73kuI3og73lkIzml7bkvb/nlKhcbiAgICovXG4gIG9uRmlsdGVyOiAocHJvcHM6IElDb2x1bW5Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgb25GaWx0ZXIsIG9uU29ydCB9ID0gcHJvcHNcbiAgICBpZiAob25GaWx0ZXIpIHtcbiAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgIFwiSW52YWxpZCBwcm9wIGBvbkZpbHRlcmAgc3VwcGxpZWQgdG8gYENvbHVtbmAsIGV4cGVjdGVkIGBmdW5jdGlvbmBcIlxuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAoISFvbkZpbHRlciAmJiAhIW9uU29ydCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiQ29sdW1uOiDnrZvpgInlkozmjpLluo/lip/og73kuI3og73lkIzml7bkvb/nlKhcIilcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSxcbiAgLyoqXG4gICAqIOetm+mAiSBwb3B1cCB2aXNpYmxlIOWPmOWMluaXtueahCBoYW5kbGVy77yM5Y+C5pWwIChib29sLCBjb2wpXG4gICAqL1xuICBvbkZpbHRlclZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog5o6S5bqP5pe255qEIGhhbmRsZXLvvIznrZvpgInlkozmjpLluo/lip/og73kuI3og73lkIzml7bkvb/nlKhcbiAgICovXG4gIG9uU29ydDogKHByb3BzOiBJQ29sdW1uUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG9uRmlsdGVyLCBvblNvcnQgfSA9IHByb3BzXG4gICAgaWYgKG9uU29ydCkge1xuICAgICAgaWYgKHR5cGVvZiBvblNvcnQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAgIFwiSW52YWxpZCBwcm9wIGBvblNvcnRgIHN1cHBsaWVkIHRvIGBDb2x1bW5gLCBleHBlY3RlZCBgZnVuY3Rpb25gXCJcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgaWYgKCEhb25GaWx0ZXIgJiYgISFvblNvcnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkNvbHVtbjog562b6YCJ5ZKM5o6S5bqP5Yqf6IO95LiN6IO95ZCM5pe25L2/55SoXCIpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH0sXG4gIC8qKlxuICAgKiDlnKjliJflpLTkuIrlop7liqAgcG9wb3ZlcuOAgui/meagt+eahOmcgOaxgui2iuadpei2iuW4uOinhO+8jOagt+W8j+S4iuWGhee9ruWIsCBUYWJsZSDlhoXlgZrop4TojIPvvIzkvZzkuLogcHJvcCDmmK/mnInlv4XopoHnmoTjgIJcbiAgICovXG4gIHBvcG92ZXI6IFByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICog5aaC5p6c5pyJIHJlbmRlcu+8jOWImSByZW5kZXIgKHJvdywgY29sLCByb3dJbmRleCwgY29sSW5kZXgp77yM5ZCm5YiZ5Y+WIGRhdGFJbmRleOOAglxuICAgKi9cbiAgcmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOaYr+WQpuWFgeiuuOiwg+aVtOWuveW6pu+8jOm7mOiupCB0cnVlXG4gICAqL1xuICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICAvKipcbiAgICog5Y+v5Lul5LuO5aSW6YOo5o6n5Yi25o6S5bqP5pa55byPXG4gICAqL1xuICBzb3J0T3JkZXI6IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJcIiwgXCJhc2NcIiwgXCJkZXNjXCJdKSxcbiAgLyoqXG4gICAqIOWIl+WktOaYvuekuueahOWGheWuuVxuICAgKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiDlnoLnm7TpnaDpvZDmlrnlkJFcbiAgICovXG4gIHZlcnRpY2FsQWxpZ246IFByb3BUeXBlcy5vbmVPZihbbnVsbCwgXCJ0b3BcIiwgXCJjZW50ZXJcIiwgXCJib3R0b21cIl0pLFxuICAvKipcbiAgICog5YiX55qE5Zu65a6a5a695bqmXG4gICAqL1xuICB3aWR0aDogKHByb3BzOiBJQ29sdW1uUHJvcHMpID0+IHtcbiAgICAvKipcbiAgICAgKiAxLiB3aWR0aCDnm67liY3lj6rmlK/mjIEgezUwfe+8jFwiNTBweFwi77yMXCI1MCVcIiDkuInnp43moLzlvI/vvIzor7fkuI3opoHkvb/nlKjlhbbku5bljZXkvY3vvJtcbiAgICAgKiAyLiDlm7rlrprliJflv4Xpobvorr7nva7lrr3luqbvvIxUYWJsZSDlgZrov5nmoLfnmoTnuqbmnZ/vvIzmmK/kuLrkuobpgb/lhY3lpKrlpJrnmoTorqHnrpfmiJDmnKzjgIJcbiAgICAgKi9cbiAgICBjb25zdCB7IGZpeGVkLCB3aWR0aCB9ID0gcHJvcHNcbiAgICBpZiAod2lkdGgpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2lkdGggIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHdpZHRoICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJJbnZhbGlkIGB3aWR0aGAgc3VwcGxpZWQgdG8gYENvbHVtbmAsIGV4cGVjdGVkIGBzdHJpbmdgfGBudW1iZXJgLlwiXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpeGVkKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiQ29sdW1uOiBmaXhlZCDliJflv4XpobvkvKDlhaUgd2lkdGggcHJvcC5cIilcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSxcbn1cblxuQ29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxpZ246IG51bGwsXG4gIGRhdGFJbmRleDogbnVsbCxcbiAgZmlsdGVyTXVsdGlwbGU6IGZhbHNlLFxuICBmaWx0ZXJQb3BvdmVyUHJvcHM6IHt9LFxuICBmaWx0ZXJlZFZhbHVlOiBudWxsLFxuICBmaWx0ZXJWaXNpYmxlOiBudWxsLFxuICBmaWx0ZXJzOiBudWxsLFxuICBmaXhlZDogbnVsbCxcbiAgZ2V0Q2VsbFN0eWxlOiAoKSA9PiB7fSxcbiAgb25GaWx0ZXI6IG51bGwsXG4gIG9uRmlsdGVyVmlzaWJsZUNoYW5nZTogKCkgPT4ge30sXG4gIG9uU29ydDogbnVsbCxcbiAgcG9wb3ZlcjogbnVsbCxcbiAgcmVuZGVyOiBudWxsLFxuICByZXNpemFibGU6IG51bGwsXG4gIHNvcnRPcmRlcjogbnVsbCxcbiAgdmVydGljYWxBbGlnbjogbnVsbCxcbiAgd2lkdGg6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtblxuIl19