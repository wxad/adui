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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvQ29sdW1uTWFuYWdlci50cyJdLCJuYW1lcyI6WyJDb2x1bW5NYW5hZ2VyIiwiZWxlbWVudHMiLCJjYWNoZWQiLCJjb2x1bW5zIiwiaXNBbnlDb2x1bW5zRml4ZWQiLCJjYWNoZSIsInNvbWUiLCJjb2x1bW4iLCJmaXhlZCIsImlzQW55Q29sdW1uc0xlZnRGaXhlZCIsImlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQiLCJnZXRMZWZ0Q29sdW1ucyIsImZpbHRlciIsImdldE1haW5Db2x1bW5zIiwiZ2V0UmlnaHRDb2x1bW5zIiwiZ2V0Q29sdW1ucyIsImdldExlZnRDb2x1bW5zV2lkdGgiLCJnZXRDb2x1bW5zV2lkdGhCYXNlIiwiZ2V0UmlnaHRDb2x1bW5zV2lkdGgiLCJnZXRHcm91cENvbHVtbnNEZXB0aCIsImRlcHRoIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2hpbGQiLCJncmFuZHMiLCJncmFuZCIsInN1bSIsIndpZHRoIiwic2xpY2UiLCJub3JtYWxpemUiLCJlbGVtZW50c1BhcmFtIiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZCIsIm8iLCJSZWFjdCIsImlzVmFsaWRFbGVtZW50IiwiQ2hpbGRyZW4iLCJlbGVtZW50IiwicHJvcHMiLCJwdXNoIiwicmVzZXQiLCJuYW1lIiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNcUJBLGEsR0FLbkIsdUJBQVlDLFNBQVosRUFBcUM7QUFBQTs7QUFBQTs7QUFBQSxPQUo5QkMsTUFJOEIsR0FKaEIsRUFJZ0I7QUFBQSxPQUY5QkMsT0FFOEI7O0FBQUEsT0FJOUJDLGlCQUo4QixHQUlWO0FBQUEsV0FDekIsS0FBSSxDQUFDQyxLQUFMLENBQVcsbUJBQVgsRUFBZ0M7QUFBQSxhQUM5QixLQUFJLENBQUNGLE9BQUwsQ0FBYUcsSUFBYixDQUFrQixVQUFDQyxNQUFEO0FBQUEsZUFBeUIsQ0FBQyxDQUFDQSxNQUFNLENB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O0FBQ0QsR0ExSG9DOztBQUFBLE9BNEg5QkcsS0E1SDhCLEdBNEh0QixVQUFDc0MsSUFBRCxFQUFlQyxFQUFmLEVBQWtDO0FBQy9DLFFBQUlELElBQUksSUFBSSxLQUFJLENBQUN6QyxNQUFqQixFQUF5QjtBQUN2QixhQUFPLEtBQUksQ0FBQ0EsTUFBTCxDQUFZeUMsSUFBWixDQUFQO0FBQ0Q7O0FBQ0QsSUFBQSxLQUFJLENBQUN6QyxNQUFMLENBQVl5QyxJQUFaLElBQW9CQyxFQUFFLEVBQXRCO0FBQ0EsV0FBTyxLQUFJLENBQUMxQyxNQUFMLENBQVl5QyxJQUFaLENBQVA7QUFDRCxHQWxJb0M7O0FBQ25DLE9BQUt4QyxPQUFMLEdBQWUsS0FBSzJCLFNBQUwsQ0FBZTdCLFNBQWYsQ0FBZjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW50ZXJmYWNlIElCYXNlT2JqZWN0IHtcbiAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbk1hbmFnZXIge1xuICBwdWJsaWMgY2FjaGVkOiBhbnkgPSB7fVxuXG4gIHB1YmxpYyBjb2x1bW5zOiBJQmFzZU9iamVjdFtdXG5cbiAgY29uc3RydWN0b3IoZWxlbWVudHM6IElCYXNlT2JqZWN0W10pIHtcbiAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLm5vcm1hbGl6ZShlbGVtZW50cylcbiAgfVxuXG4gIHB1YmxpYyBpc0FueUNvbHVtbnNGaXhlZCA9ICgpID0+XG4gICAgdGhpcy5jYWNoZShcImlzQW55Q29sdW1uc0ZpeGVkXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuc29tZSgoY29sdW1uOiBJQmFzZU9iamVjdCkgPT4gISFjb2x1bW4uZml4ZWQpXG4gICAgKVxuXG4gIHB1YmxpYyBpc0FueUNvbHVtbnNMZWZ0Rml4ZWQgPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJpc0FueUNvbHVtbnNMZWZ0Rml4ZWRcIiwgKCkgPT5cbiAgICAgIHRoaXMuY29sdW1ucy5zb21lKFxuICAgICAgICAoY29sdW1uOiBJQmFzZU9iamVjdCkgPT5cbiAgICAgICAgICBjb2x1bW4uZml4ZWQgPT09IFwibGVmdFwiIHx8IGNvbHVtbi5maXhlZCA9PT0gdHJ1ZVxuICAgICAgKVxuICAgIClcblxuICBwdWJsaWMgaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCA9ICgpID0+XG4gICAgdGhpcy5jYWNoZShcImlzQW55Q29sdW1uc1JpZ2h0Rml4ZWRcIiwgKCkgPT5cbiAgICAgIHRoaXMuY29sdW1ucy5zb21lKChjb2x1bW46IElCYXNlT2JqZWN0KSA9PiBjb2x1bW4uZml4ZWQgPT09IFwicmlnaHRcIilcbiAgICApXG5cbiAgcHVibGljIGdldExlZnRDb2x1bW5zID0gKCkgPT5cbiAgICB0aGlzLmNhY2hlKFwiZ2V0TGVmdENvbHVtbnNcIiwgKCkgPT5cbiAgICAgIHRoaXMuY29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChjb2x1bW46IElCYXNlT2JqZWN0KSA9PlxuICAgICAgICAgIGNvbHVtbi5maXhlZCA9PT0gXCJsZWZ0XCIgfHwgY29sdW1uLmZpeGVkID09PSB0cnVlXG4gICAgICApXG4gICAgKVxuXG4gIHB1YmxpYyBnZXRNYWluQ29sdW1ucyA9ICgpID0+XG4gICAgdGhpcy5jYWNoZShcImdldE1haW5Db2x1bW5zXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW46IElCYXNlT2JqZWN0KSA9PiAhY29sdW1uLmZpeGVkKVxuICAgIClcblxuICBwdWJsaWMgZ2V0UmlnaHRDb2x1bW5zID0gKCkgPT5cbiAgICB0aGlzLmNhY2hlKFwiZ2V0UmlnaHRDb2x1bW5zXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW46IElCYXNlT2JqZWN0KSA9PiBjb2x1bW4uZml4ZWQgPT09IFwicmlnaHRcIilcbiAgICApXG5cbiAgcHVibGljIGdldENvbHVtbnMgPSAoKSA9PiBbXG4gICAgLi4udGhpcy5nZXRMZWZ0Q29sdW1ucygpLFxuICAgIC4uLnRoaXMuZ2V0TWFpbkNvbHVtbnMoKSxcbiAgICAuLi50aGlzLmdldFJpZ2h0Q29sdW1ucygpLFxuICBdXG5cbiAgcHVibGljIGdldExlZnRDb2x1bW5zV2lkdGggPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJnZXRMZWZ0Q29sdW1uc1dpZHRoXCIsICgpID0+XG4gICAgICB0aGlzLmdldENvbHVtbnNXaWR0aEJhc2UodGhpcy5nZXRMZWZ0Q29sdW1ucygpKVxuICAgIClcblxuICBwdWJsaWMgZ2V0UmlnaHRDb2x1bW5zV2lkdGggPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJnZXRSaWdodENvbHVtbnNXaWR0aFwiLCAoKSA9PlxuICAgICAgdGhpcy5nZXRDb2x1bW5zV2lkdGhCYXNlKHRoaXMuZ2V0UmlnaHRDb2x1bW5zKCkpXG4gICAgKVxuXG4gIHB1YmxpYyBnZXRHcm91cENvbHVtbnNEZXB0aCA9ICgpID0+XG4gICAgdGhpcy5jYWNoZShcImdldEdyb3VwQ29sdW1uc0RlcHRoXCIsICgpID0+IHtcbiAgICAgIGxldCBkZXB0aCA9IDFcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jb2x1bW5zLmZpbHRlcihcbiAgICAgICAgKGNvbHVtbjogSUJhc2VPYmplY3QpID0+ICEhY29sdW1uLmNoaWxkcmVuXG4gICAgICApXG4gICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGRlcHRoID0gMlxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICBjb25zdCBncmFuZHMgPSBjaGlsZC5jaGlsZHJlbi5zb21lKFxuICAgICAgICAgICAgKGdyYW5kOiBJQmFzZU9iamVjdCkgPT4gISFncmFuZC5jaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoZ3JhbmRzKSB7XG4gICAgICAgICAgICBkZXB0aCA9IDNcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gZGVwdGhcbiAgICB9KVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zV2lkdGhCYXNlID0gKGNvbHVtbnM6IElCYXNlT2JqZWN0W10pID0+IHtcbiAgICBsZXQgc3VtID0gXCJjYWxjKFwiXG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IElCYXNlT2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSBjb2x1bW5cbiAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgc3VtICs9IGAke3dpZHRofXB4ICsgYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VtICs9IGAke3dpZHRofSArIGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBgJHtzdW0uc2xpY2UoMCwgLTIpfSlgXG4gIH1cblxuICBwdWJsaWMgbm9ybWFsaXplID0gKGVsZW1lbnRzUGFyYW06IElCYXNlT2JqZWN0W10pID0+IHtcbiAgICBjb25zdCBjb2x1bW5zOiBJQmFzZU9iamVjdFtdID0gW11cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmlzQXJyYXkoZWxlbWVudHNQYXJhbSlcbiAgICAgID8gZWxlbWVudHNQYXJhbVxuICAgICAgOiBbZWxlbWVudHNQYXJhbV1cbiAgICBpZiAoZWxlbWVudHMuZmluZChvID0+IFJlYWN0LmlzVmFsaWRFbGVtZW50KG8pKSkge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChlbGVtZW50cywgZWxlbWVudCA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb2x1bW4g5ZCN5a2Y5a6e5Lqh77yM5a6e6ZmF5LiK5piv5LuOIGNoaWxkcmVuIOiOt+WPluavj+S4gOWIl+eahCBwcm9wc1xuICAgICAgICAgKiDlm6DmraTpnIDopoHliKTmlq0gY2hpbGRyZW4gaXNWYWxpZEVsZW1lbnTvvIzlho3ku44gY2hpbGRyZW4g6YGN5Y6GIHByb3BcbiAgICAgICAgICovXG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2x1bW46IGFueSA9IHsgLi4uKGVsZW1lbnQucHJvcHMgYXMge30pIH1cbiAgICAgICAgbGV0IHsgY2hpbGRyZW4gfSA9IGNvbHVtblxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICBjaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBbY2hpbGRyZW5dXG4gICAgICAgICAgY29sdW1uLmNoaWxkcmVuID0gdGhpcy5ub3JtYWxpemUoY2hpbGRyZW4pXG4gICAgICAgIH1cbiAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbilcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzLmZvckVhY2gobyA9PiB7XG4gICAgICAgIGNvbHVtbnMucHVzaChvKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnNcbiAgfVxuXG4gIHB1YmxpYyByZXNldCA9IChlbGVtZW50czogSUJhc2VPYmplY3RbXSkgPT4ge1xuICAgIHRoaXMuY29sdW1ucyA9IHRoaXMubm9ybWFsaXplKGVsZW1lbnRzKVxuICAgIHRoaXMuY2FjaGVkID0ge31cbiAgfVxuXG4gIHB1YmxpYyBjYWNoZSA9IChuYW1lOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5jYWNoZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlZFtuYW1lXVxuICAgIH1cbiAgICB0aGlzLmNhY2hlZFtuYW1lXSA9IGZuKClcbiAgICByZXR1cm4gdGhpcy5jYWNoZWRbbmFtZV1cbiAgfVxufVxuIl19