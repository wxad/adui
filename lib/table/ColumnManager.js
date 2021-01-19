"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var ColumnManager = function ColumnManager(_elements) {
  var _this = this;

  _classCallCheck(this, ColumnManager);

  this.cached = {};
  this.columns = void 0;

  this.isAnyColumnsFixed = function () {
    return _this.cache("isAnyColumnsFixed", function () {
      return _this.columns.some(function (column) {
        return !!column.fixed;
      });
    });
  };

  this.isAnyColumnsLeftFixed = function () {
    return _this.cache("isAnyColumnsLeftFixed", function () {
      return _this.columns.some(function (column) {
        return column.fixed === "left" || column.fixed === true;
      });
    });
  };

  this.isAnyColumnsRightFixed = function () {
    return _this.cache("isAnyColumnsRightFixed", function () {
      return _this.columns.some(function (column) {
        return column.fixed === "right";
      });
    });
  };

  this.getLeftColumns = function () {
    return _this.cache("getLeftColumns", function () {
      return _this.columns.filter(function (column) {
        return column.fixed === "left" || column.fixed === true;
      });
    });
  };

  this.getMainColumns = function () {
    return _this.cache("getMainColumns", function () {
      return _this.columns.filter(function (column) {
        return !column.fixed;
      });
    });
  };

  this.getRightColumns = function () {
    return _this.cache("getRightColumns", function () {
      return _this.columns.filter(function (column) {
        return column.fixed === "right";
      });
    });
  };

  this.getColumns = function () {
    return [].concat(_toConsumableArray(_this.getLeftColumns()), _toConsumableArray(_this.getMainColumns()), _toConsumableArray(_this.getRightColumns()));
  };

  this.getLeftColumnsWidth = function () {
    return _this.cache("getLeftColumnsWidth", function () {
      return _this.getColumnsWidthBase(_this.getLeftColumns());
    });
  };

  this.getRightColumnsWidth = function () {
    return _this.cache("getRightColumnsWidth", function () {
      return _this.getColumnsWidthBase(_this.getRightColumns());
    });
  };

  this.getGroupColumnsDepth = function () {
    return _this.cache("getGroupColumnsDepth", function () {
      var depth = 1;

      var children = _this.columns.filter(function (column) {
        return !!column.children;
      });

      if (children.length) {
        depth = 2;
        children.forEach(function (child) {
          var grands = child.children.some(function (grand) {
            return !!grand.children;
          });

          if (grands) {
            depth = 3;
          }
        });
      }

      return depth;
    });
  };

  this.getColumnsWidthBase = function (columns) {
    var sum = "calc(";
    columns.forEach(function (column) {
      var width = column.width;

      if (typeof width === "number") {
        sum += "".concat(width, "px + ");
      } else {
        sum += "".concat(width, " + ");
      }
    });
    return "".concat(sum.slice(0, -2), ")");
  };

  this.normalize = function (elementsParam) {
    var columns = [];
    var elements = Array.isArray(elementsParam) ? elementsParam : [elementsParam];

    if (elements.find(function (o) {
      return _react["default"].isValidElement(o);
    })) {
      _react["default"].Children.forEach(elements, function (element) {
        if (!_react["default"].isValidElement(element)) {
          return;
        }

        var column = _objectSpread({}, element.props);

        var children = column.children;

        if (children) {
          children = Array.isArray(children) ? children : [children];
          column.children = _this.normalize(children);
        }

        columns.push(column);
      });
    } else {
      elements.forEach(function (o) {
        columns.push(o);
      });
    }

    return columns;
  };

  this.reset = function (elements) {
    _this.columns = _this.normalize(elements);
    _this.cached = {};
  };

  this.cache = function (name, fn) {
    if (name in _this.cached) {
      return _this.cached[name];
    }

    _this.cached[name] = fn();
    return _this.cached[name];
  };

  this.columns = this.normalize(_elements);
};

exports["default"] = ColumnManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvQ29sdW1uTWFuYWdlci50cyJdLCJuYW1lcyI6WyJDb2x1bW5NYW5hZ2VyIiwiZWxlbWVudHMiLCJjYWNoZWQiLCJjb2x1bW5zIiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJjYWNoZSIsInNvbWUiLCJjb2x1bW4iLCJmaXhlZCIsImlzQW55Q29sdW1uc0xlZnRGaXhlZCIsImlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQiLCJnZXRMZWZ0Q29sdW1ucyIsImZpbHRlciIsImdldE1haW5Db2x1bW5zIiwiZ2V0UmlnaHRDb2x1bW5zIiwiZ2V0Q29sdW1ucyIsImdldExlZnRDb2x1bW5zV2lkdGgiLCJnZXRDb2x1bW5zV2lkdGhCYXNlIiwiZ2V0UmlnaHRDb2x1bW5zV2lkdGgiLCJnZXRHcm91cENvbHVtbnNEZXB0aCIsImRlcHRoIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2hpbGQiLCJncmFuZHMiLCJncmFuZCIsInN1bSIsIndpZHRoIiwic2xpY2UiLCJub3JtYWxpemUiLCJlbGVtZW50c1BhcmFtIiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZCIsIm8iLCJSZWFjdCIsImlzVmFsaWRFbGVtZW50IiwiQ2hpbGRyZW4iLCJlbGVtZW50IiwicHJvcHMiLCJwdXNoIiwicmVzZXQiLCJuYW1lIiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXFCQSxhLEdBS25CLHVCQUFZQyxTQUFaLEVBQXFDO0FBQUE7O0FBQUE7O0FBQUEsT0FKOUJDLE1BSThCLEdBSmhCLEVBSWdCO0FBQUEsT0FGOUJDLE9BRThCOztBQUFBLE9BSTlCQyxpQkFKOEIsR0FJVjtBQUFBLFdBQ3pCLEtBQUksQ0FBQ0MsS0FBTCxDQUFXLG1CQUFYLEVBQWdDO0FBQUEsYUFDOUIsS0FBSSxDQUFDRixPQUFMLENBQWFHLElBQWIsQ0FBa0IsVUFBQ0MsTUFBRDtBQUFBLGVBQXlCLENBQUMsQ0FBQ0EsTUFB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RUFBZDtBQUNELEdBMUhvQzs7QUFBQSxPQTRIOUJHLEtBNUg4QixHQTRIdEIsVUFBQ3NDLElBQUQsRUFBZUMsRUFBZixFQUFrQztBQUMvQyxRQUFJRCxJQUFJLElBQUksS0FBSSxDQUFDekMsTUFBakIsRUFBeUI7QUFDdkIsYUFBTyxLQUFJLENBQUNBLE1BQUwsQ0FBWXlDLElBQVosQ0FBUDtBQUNEOztBQUNELElBQUEsS0FBSSxDQUFDekMsTUFBTCxDQUFZeUMsSUFBWixJQUFvQkMsRUFBRSxFQUF0QjtBQUNBLFdBQU8sS0FBSSxDQUFDMUMsTUFBTCxDQUFZeUMsSUFBWixDQUFQO0FBQ0QsR0FsSW9DOztBQUNuQyxPQUFLeEMsT0FBTCxHQUFlLEtBQUsyQixTQUFMLENBQWU3QixTQUFmLENBQWY7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2x1bW5NYW5hZ2VyIHtcbiAgcHVibGljIGNhY2hlZDogYW55ID0ge31cblxuICBwdWJsaWMgY29sdW1uczogSUJhc2VPYmplY3RbXVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzOiBJQmFzZU9iamVjdFtdKSB7XG4gICAgdGhpcy5jb2x1bW5zID0gdGhpcy5ub3JtYWxpemUoZWxlbWVudHMpXG4gIH1cblxuICBwdWJsaWMgaXNBbnlDb2x1bW5zRml4ZWQgPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJpc0FueUNvbHVtbnNGaXhlZFwiLCAoKSA9PlxuICAgICAgdGhpcy5jb2x1bW5zLnNvbWUoKGNvbHVtbjogSUJhc2VPYmplY3QpID0+ICEhY29sdW1uLmZpeGVkKVxuICAgIClcblxuICBwdWJsaWMgaXNBbnlDb2x1bW5zTGVmdEZpeGVkID0gKCkgPT5cbiAgICB0aGlzLmNhY2hlKFwiaXNBbnlDb2x1bW5zTGVmdEZpeGVkXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuc29tZShcbiAgICAgICAgKGNvbHVtbjogSUJhc2VPYmplY3QpID0+XG4gICAgICAgICAgY29sdW1uLmZpeGVkID09PSBcImxlZnRcIiB8fCBjb2x1bW4uZml4ZWQgPT09IHRydWVcbiAgICAgIClcbiAgICApXG5cbiAgcHVibGljIGlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQgPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJpc0FueUNvbHVtbnNSaWdodEZpeGVkXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuc29tZSgoY29sdW1uOiBJQmFzZU9iamVjdCkgPT4gY29sdW1uLmZpeGVkID09PSBcInJpZ2h0XCIpXG4gICAgKVxuXG4gIHB1YmxpYyBnZXRMZWZ0Q29sdW1ucyA9ICgpID0+XG4gICAgdGhpcy5jYWNoZShcImdldExlZnRDb2x1bW5zXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAoY29sdW1uOiBJQmFzZU9iamVjdCkgPT5cbiAgICAgICAgICBjb2x1bW4uZml4ZWQgPT09IFwibGVmdFwiIHx8IGNvbHVtbi5maXhlZCA9PT0gdHJ1ZVxuICAgICAgKVxuICAgIClcblxuICBwdWJsaWMgZ2V0TWFpbkNvbHVtbnMgPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJnZXRNYWluQ29sdW1uc1wiLCAoKSA9PlxuICAgICAgdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uOiBJQmFzZU9iamVjdCkgPT4gIWNvbHVtbi5maXhlZClcbiAgICApXG5cbiAgcHVibGljIGdldFJpZ2h0Q29sdW1ucyA9ICgpID0+XG4gICAgdGhpcy5jYWNoZShcImdldFJpZ2h0Q29sdW1uc1wiLCAoKSA9PlxuICAgICAgdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uOiBJQmFzZU9iamVjdCkgPT4gY29sdW1uLmZpeGVkID09PSBcInJpZ2h0XCIpXG4gICAgKVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zID0gKCkgPT4gW1xuICAgIC4uLnRoaXMuZ2V0TGVmdENvbHVtbnMoKSxcbiAgICAuLi50aGlzLmdldE1haW5Db2x1bW5zKCksXG4gICAgLi4udGhpcy5nZXRSaWdodENvbHVtbnMoKSxcbiAgXVxuXG4gIHB1YmxpYyBnZXRMZWZ0Q29sdW1uc1dpZHRoID0gKCkgPT5cbiAgICB0aGlzLmNhY2hlKFwiZ2V0TGVmdENvbHVtbnNXaWR0aFwiLCAoKSA9PlxuICAgICAgdGhpcy5nZXRDb2x1bW5zV2lkdGhCYXNlKHRoaXMuZ2V0TGVmdENvbHVtbnMoKSlcbiAgICApXG5cbiAgcHVibGljIGdldFJpZ2h0Q29sdW1uc1dpZHRoID0gKCkgPT5cbiAgICB0aGlzLmNhY2hlKFwiZ2V0UmlnaHRDb2x1bW5zV2lkdGhcIiwgKCkgPT5cbiAgICAgIHRoaXMuZ2V0Q29sdW1uc1dpZHRoQmFzZSh0aGlzLmdldFJpZ2h0Q29sdW1ucygpKVxuICAgIClcblxuICBwdWJsaWMgZ2V0R3JvdXBDb2x1bW5zRGVwdGggPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJnZXRHcm91cENvbHVtbnNEZXB0aFwiLCAoKSA9PiB7XG4gICAgICBsZXQgZGVwdGggPSAxXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChjb2x1bW46IElCYXNlT2JqZWN0KSA9PiAhIWNvbHVtbi5jaGlsZHJlblxuICAgICAgKVxuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBkZXB0aCA9IDJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBjb25zdCBncmFuZHMgPSBjaGlsZC5jaGlsZHJlbi5zb21lKFxuICAgICAgICAgICAgKGdyYW5kOiBJQmFzZU9iamVjdCkgPT4gISFncmFuZC5jaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoZ3JhbmRzKSB7XG4gICAgICAgICAgICBkZXB0aCA9IDNcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gZGVwdGhcbiAgICB9KVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zV2lkdGhCYXNlID0gKGNvbHVtbnM6IElCYXNlT2JqZWN0W10pID0+IHtcbiAgICBsZXQgc3VtID0gXCJjYWxjKFwiXG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IElCYXNlT2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSBjb2x1bW5cbiAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgc3VtICs9IGAke3dpZHRofXB4ICsgYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VtICs9IGAke3dpZHRofSArIGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBgJHtzdW0uc2xpY2UoMCwgLTIpfSlgXG4gIH1cblxuICBwdWJsaWMgbm9ybWFsaXplID0gKGVsZW1lbnRzUGFyYW06IElCYXNlT2JqZWN0W10pID0+IHtcbiAgICBjb25zdCBjb2x1bW5zOiBJQmFzZU9iamVjdFtdID0gW11cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmlzQXJyYXkoZWxlbWVudHNQYXJhbSlcbiAgICAgID8gZWxlbWVudHNQYXJhbVxuICAgICAgOiBbZWxlbWVudHNQYXJhbV1cbiAgICBpZiAoZWxlbWVudHMuZmluZCgobykgPT4gUmVhY3QuaXNWYWxpZEVsZW1lbnQobykpKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnRzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29sdW1uIOWQjeWtmOWunuS6oe+8jOWunumZheS4iuaYr+S7jiBjaGlsZHJlbiDojrflj5bmr4/kuIDliJfnmoQgcHJvcHNcbiAgICAgICAgICog5Zug5q2k6ZyA6KaB5Yik5patIGNoaWxkcmVuIGlzVmFsaWRFbGVtZW5077yM5YaN5LuOIGNoaWxkcmVuIOmBjeWOhiBwcm9wXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sdW1uOiBhbnkgPSB7IC4uLihlbGVtZW50LnByb3BzIGFzIHt9KSB9XG4gICAgICAgIGxldCB7IGNoaWxkcmVuIH0gPSBjb2x1bW5cbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXVxuICAgICAgICAgIGNvbHVtbi5jaGlsZHJlbiA9IHRoaXMubm9ybWFsaXplKGNoaWxkcmVuKVxuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGNvbHVtbnMucHVzaChvKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnNcbiAgfVxuXG4gIHB1YmxpYyByZXNldCA9IChlbGVtZW50czogSUJhc2VPYmplY3RbXSkgPT4ge1xuICAgIHRoaXMuY29sdW1ucyA9IHRoaXMubm9ybWFsaXplKGVsZW1lbnRzKVxuICAgIHRoaXMuY2FjaGVkID0ge31cbiAgfVxuXG4gIHB1YmxpYyBjYWNoZSA9IChuYW1lOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5jYWNoZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlZFtuYW1lXVxuICAgIH1cbiAgICB0aGlzLmNhY2hlZFtuYW1lXSA9IGZuKClcbiAgICByZXR1cm4gdGhpcy5jYWNoZWRbbmFtZV1cbiAgfVxufVxuIl19