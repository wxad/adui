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

import React from "react";

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
      return React.isValidElement(o);
    })) {
      React.Children.forEach(elements, function (element) {
        if (!React.isValidElement(element)) {
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

export { ColumnManager as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvQ29sdW1uTWFuYWdlci50cyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbHVtbk1hbmFnZXIiLCJlbGVtZW50cyIsImNhY2hlZCIsImNvbHVtbnMiLCJpc0FueUNvbHVtbnNGaXhlZCIsImNhY2hlIiwic29tZSIsImNvbHVtbiIsImZpeGVkIiwiaXNBbnlDb2x1bW5zTGVmdEZpeGVkIiwiaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCIsImdldExlZnRDb2x1bW5zIiwiZmlsdGVyIiwiZ2V0TWFpbkNvbHVtbnMiLCJnZXRSaWdodENvbHVtbnMiLCJnZXRDb2x1bW5zIiwiZ2V0TGVmdENvbHVtbnNXaWR0aCIsImdldENvbHVtbnNXaWR0aEJhc2UiLCJnZXRSaWdodENvbHVtbnNXaWR0aCIsImdldEdyb3VwQ29sdW1uc0RlcHRoIiwiZGVwdGgiLCJjaGlsZHJlbiIsImxlbmd0aCIsImZvckVhY2giLCJjaGlsZCIsImdyYW5kcyIsImdyYW5kIiwic3VtIiwid2lkdGgiLCJzbGljZSIsIm5vcm1hbGl6ZSIsImVsZW1lbnRzUGFyYW0iLCJBcnJheSIsImlzQXJyYXkiLCJmaW5kIiwibyIsImlzVmFsaWRFbGVtZW50IiwiQ2hpbGRyZW4iLCJlbGVtZW50IiwicHJvcHMiLCJwdXNoIiwicmVzZXQiLCJuYW1lIiwiZm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjs7SUFNcUJDLGEsR0FLbkIsdUJBQVlDLFNBQVosRUFBcUM7QUFBQTs7QUFBQTs7QUFBQSxPQUo5QkMsTUFJOEIsR0FKaEIsRUFJZ0I7QUFBQSxPQUY5QkMsT0FFOEI7O0FBQUEsT0FJOUJDLGlCQUo4QixHQUlWO0FBQUEsV0FDekIsS0FBSSxDQUFDQyxLQUFMLENBQVcsbUJBQVgsRUFBZ0M7QUFBQSxhQUM5QixLQUFJLENBQUNGLE9BQUwsQ0FBYUcsSUFBYixDQUFrQixVQUFDQyxNQUFEO0FBQUEsZUFBeUIs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ZixDQUFmO0FBQ0EsSUFBQSxLQUFJLENBQUNDLE1BQUwsR0FBYyxFQUFkO0FBQ0QsR0ExSG9DOztBQUFBLE9BNEg5QkcsS0E1SDhCLEdBNEh0QixVQUFDcUMsSUFBRCxFQUFlQyxFQUFmLEVBQWtDO0FBQy9DLFFBQUlELElBQUksSUFBSSxLQUFJLENBQUN4QyxNQUFqQixFQUF5QjtBQUN2QixhQUFPLEtBQUksQ0FBQ0EsTUFBTCxDQUFZd0MsSUFBWixDQUFQO0FBQ0Q7O0FBQ0QsSUFBQSxLQUFJLENBQUN4QyxNQUFMLENBQVl3QyxJQUFaLElBQW9CQyxFQUFFLEVBQXRCO0FBQ0EsV0FBTyxLQUFJLENBQUN6QyxNQUFMLENBQVl3QyxJQUFaLENBQVA7QUFDRCxHQWxJb0M7O0FBQ25DLE9BQUt2QyxPQUFMLEdBQWUsS0FBSzJCLFNBQUwsQ0FBZTdCLFNBQWYsQ0FBZjtBQUNELEM7O1NBUGtCRCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmludGVyZmFjZSBJQmFzZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2x1bW5NYW5hZ2VyIHtcbiAgcHVibGljIGNhY2hlZDogYW55ID0ge31cblxuICBwdWJsaWMgY29sdW1uczogSUJhc2VPYmplY3RbXVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzOiBJQmFzZU9iamVjdFtdKSB7XG4gICAgdGhpcy5jb2x1bW5zID0gdGhpcy5ub3JtYWxpemUoZWxlbWVudHMpXG4gIH1cblxuICBwdWJsaWMgaXNBbnlDb2x1bW5zRml4ZWQgPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJpc0FueUNvbHVtbnNGaXhlZFwiLCAoKSA9PlxuICAgICAgdGhpcy5jb2x1bW5zLnNvbWUoKGNvbHVtbjogSUJhc2VPYmplY3QpID0+ICEhY29sdW1uLmZpeGVkKVxuICAgIClcblxuICBwdWJsaWMgaXNBbnlDb2x1bW5zTGVmdEZpeGVkID0gKCkgPT5cbiAgICB0aGlzLmNhY2hlKFwiaXNBbnlDb2x1bW5zTGVmdEZpeGVkXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuc29tZShcbiAgICAgICAgKGNvbHVtbjogSUJhc2VPYmplY3QpID0+XG4gICAgICAgICAgY29sdW1uLmZpeGVkID09PSBcImxlZnRcIiB8fCBjb2x1bW4uZml4ZWQgPT09IHRydWVcbiAgICAgIClcbiAgICApXG5cbiAgcHVibGljIGlzQW55Q29sdW1uc1JpZ2h0Rml4ZWQgPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJpc0FueUNvbHVtbnNSaWdodEZpeGVkXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuc29tZSgoY29sdW1uOiBJQmFzZU9iamVjdCkgPT4gY29sdW1uLmZpeGVkID09PSBcInJpZ2h0XCIpXG4gICAgKVxuXG4gIHB1YmxpYyBnZXRMZWZ0Q29sdW1ucyA9ICgpID0+XG4gICAgdGhpcy5jYWNoZShcImdldExlZnRDb2x1bW5zXCIsICgpID0+XG4gICAgICB0aGlzLmNvbHVtbnMuZmlsdGVyKFxuICAgICAgICAoY29sdW1uOiBJQmFzZU9iamVjdCkgPT5cbiAgICAgICAgICBjb2x1bW4uZml4ZWQgPT09IFwibGVmdFwiIHx8IGNvbHVtbi5maXhlZCA9PT0gdHJ1ZVxuICAgICAgKVxuICAgIClcblxuICBwdWJsaWMgZ2V0TWFpbkNvbHVtbnMgPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJnZXRNYWluQ29sdW1uc1wiLCAoKSA9PlxuICAgICAgdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uOiBJQmFzZU9iamVjdCkgPT4gIWNvbHVtbi5maXhlZClcbiAgICApXG5cbiAgcHVibGljIGdldFJpZ2h0Q29sdW1ucyA9ICgpID0+XG4gICAgdGhpcy5jYWNoZShcImdldFJpZ2h0Q29sdW1uc1wiLCAoKSA9PlxuICAgICAgdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uOiBJQmFzZU9iamVjdCkgPT4gY29sdW1uLmZpeGVkID09PSBcInJpZ2h0XCIpXG4gICAgKVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zID0gKCkgPT4gW1xuICAgIC4uLnRoaXMuZ2V0TGVmdENvbHVtbnMoKSxcbiAgICAuLi50aGlzLmdldE1haW5Db2x1bW5zKCksXG4gICAgLi4udGhpcy5nZXRSaWdodENvbHVtbnMoKSxcbiAgXVxuXG4gIHB1YmxpYyBnZXRMZWZ0Q29sdW1uc1dpZHRoID0gKCkgPT5cbiAgICB0aGlzLmNhY2hlKFwiZ2V0TGVmdENvbHVtbnNXaWR0aFwiLCAoKSA9PlxuICAgICAgdGhpcy5nZXRDb2x1bW5zV2lkdGhCYXNlKHRoaXMuZ2V0TGVmdENvbHVtbnMoKSlcbiAgICApXG5cbiAgcHVibGljIGdldFJpZ2h0Q29sdW1uc1dpZHRoID0gKCkgPT5cbiAgICB0aGlzLmNhY2hlKFwiZ2V0UmlnaHRDb2x1bW5zV2lkdGhcIiwgKCkgPT5cbiAgICAgIHRoaXMuZ2V0Q29sdW1uc1dpZHRoQmFzZSh0aGlzLmdldFJpZ2h0Q29sdW1ucygpKVxuICAgIClcblxuICBwdWJsaWMgZ2V0R3JvdXBDb2x1bW5zRGVwdGggPSAoKSA9PlxuICAgIHRoaXMuY2FjaGUoXCJnZXRHcm91cENvbHVtbnNEZXB0aFwiLCAoKSA9PiB7XG4gICAgICBsZXQgZGVwdGggPSAxXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY29sdW1ucy5maWx0ZXIoXG4gICAgICAgIChjb2x1bW46IElCYXNlT2JqZWN0KSA9PiAhIWNvbHVtbi5jaGlsZHJlblxuICAgICAgKVxuICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBkZXB0aCA9IDJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICBjb25zdCBncmFuZHMgPSBjaGlsZC5jaGlsZHJlbi5zb21lKFxuICAgICAgICAgICAgKGdyYW5kOiBJQmFzZU9iamVjdCkgPT4gISFncmFuZC5jaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoZ3JhbmRzKSB7XG4gICAgICAgICAgICBkZXB0aCA9IDNcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gZGVwdGhcbiAgICB9KVxuXG4gIHB1YmxpYyBnZXRDb2x1bW5zV2lkdGhCYXNlID0gKGNvbHVtbnM6IElCYXNlT2JqZWN0W10pID0+IHtcbiAgICBsZXQgc3VtID0gXCJjYWxjKFwiXG4gICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IElCYXNlT2JqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoIH0gPSBjb2x1bW5cbiAgICAgIGlmICh0eXBlb2Ygd2lkdGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgc3VtICs9IGAke3dpZHRofXB4ICsgYFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VtICs9IGAke3dpZHRofSArIGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBgJHtzdW0uc2xpY2UoMCwgLTIpfSlgXG4gIH1cblxuICBwdWJsaWMgbm9ybWFsaXplID0gKGVsZW1lbnRzUGFyYW06IElCYXNlT2JqZWN0W10pID0+IHtcbiAgICBjb25zdCBjb2x1bW5zOiBJQmFzZU9iamVjdFtdID0gW11cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmlzQXJyYXkoZWxlbWVudHNQYXJhbSlcbiAgICAgID8gZWxlbWVudHNQYXJhbVxuICAgICAgOiBbZWxlbWVudHNQYXJhbV1cbiAgICBpZiAoZWxlbWVudHMuZmluZCgobykgPT4gUmVhY3QuaXNWYWxpZEVsZW1lbnQobykpKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnRzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29sdW1uIOWQjeWtmOWunuS6oe+8jOWunumZheS4iuaYr+S7jiBjaGlsZHJlbiDojrflj5bmr4/kuIDliJfnmoQgcHJvcHNcbiAgICAgICAgICog5Zug5q2k6ZyA6KaB5Yik5patIGNoaWxkcmVuIGlzVmFsaWRFbGVtZW5077yM5YaN5LuOIGNoaWxkcmVuIOmBjeWOhiBwcm9wXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sdW1uOiBhbnkgPSB7IC4uLihlbGVtZW50LnByb3BzIGFzIHt9KSB9XG4gICAgICAgIGxldCB7IGNoaWxkcmVuIH0gPSBjb2x1bW5cbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXVxuICAgICAgICAgIGNvbHVtbi5jaGlsZHJlbiA9IHRoaXMubm9ybWFsaXplKGNoaWxkcmVuKVxuICAgICAgICB9XG4gICAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGNvbHVtbnMucHVzaChvKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnNcbiAgfVxuXG4gIHB1YmxpYyByZXNldCA9IChlbGVtZW50czogSUJhc2VPYmplY3RbXSkgPT4ge1xuICAgIHRoaXMuY29sdW1ucyA9IHRoaXMubm9ybWFsaXplKGVsZW1lbnRzKVxuICAgIHRoaXMuY2FjaGVkID0ge31cbiAgfVxuXG4gIHB1YmxpYyBjYWNoZSA9IChuYW1lOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgaWYgKG5hbWUgaW4gdGhpcy5jYWNoZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlZFtuYW1lXVxuICAgIH1cbiAgICB0aGlzLmNhY2hlZFtuYW1lXSA9IGZuKClcbiAgICByZXR1cm4gdGhpcy5jYWNoZWRbbmFtZV1cbiAgfVxufVxuIl19