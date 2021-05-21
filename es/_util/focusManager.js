function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TAB_KEY_CODE = 9;
export var FocusManager = function () {
  function FocusManager(container, className) {
    var _this = this;

    _classCallCheck(this, FocusManager);

    this.container = void 0;
    this.className = void 0;
    this.isRunning = false;

    this.handleKeyDown = function (e) {
      if (e.which === TAB_KEY_CODE) {
        _this.reset();

        _this.container.addEventListener("mousedown", _this.handleMouseDown);
      }
    };

    this.handleMouseDown = function () {
      _this.reset();

      _this.container.classList.add(_this.className);

      _this.container.addEventListener("keydown", _this.handleKeyDown);
    };

    this.container = container;
    this.className = className;
  }

  _createClass(FocusManager, [{
    key: "isActive",
    value: function isActive() {
      return this.isRunning;
    }
  }, {
    key: "start",
    value: function start() {
      this.container.addEventListener("mousedown", this.handleMouseDown);
      this.isRunning = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.reset();
      this.isRunning = false;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.container.classList.remove(this.className);
      this.container.removeEventListener("keydown", this.handleKeyDown);
      this.container.removeEventListener("mousedown", this.handleMouseDown);
    }
  }]);

  return FocusManager;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvX3V0aWwvZm9jdXNNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIlRBQl9LRVlfQ09ERSIsIkZvY3VzTWFuYWdlciIsImNvbnRhaW5lciIsImNsYXNzTmFtZSIsImlzUnVubmluZyIsImhhbmRsZUtleURvd24iLCJlIiwid2hpY2giLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZURvd24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUcsQ0FBckI7QUFFQSxXQUFhQyxZQUFiO0FBT0Usd0JBQVlDLFNBQVosRUFBZ0NDLFNBQWhDLEVBQW1EO0FBQUE7O0FBQUE7O0FBQUEsU0FONUNELFNBTTRDO0FBQUEsU0FKNUNDLFNBSTRDO0FBQUEsU0FGM0NDLFNBRTJDLEdBRi9CLEtBRStCOztBQUFBLFNBeUIzQ0MsYUF6QjJDLEdBeUIzQixVQUFDQyxDQUFELEVBQXNCO0FBQzVDLFVBQUlBLENBQUMsQ0FBQ0MsS0FBRixLQUFZUCxZQUFoQixFQUE4QjtBQUM1QixRQUFBLEtBQUksQ0FBQ1EsS0FBTDs7QUFDQSxRQUFBLEtBQUksQ0FBQ04sU0FBTCxDQUFlTyxnQkFBZixDQUFnQyxXQUFoQyxFQUE2QyxLQUFJLENBQUNDLGVBQWxEO0FBQ0Q7QUFDRixLQTlCa0Q7O0FBQUEsU0FnQzNDQSxlQWhDMkMsR0FnQ3pCLFlBQU07QUFDOUIsTUFBQSxLQUFJLENBQUNGLEtBQUw7O0FBQ0EsTUFBQSxLQUFJLENBQUNOLFNBQUwsQ0FBZVMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsS0FBSSxDQUFDVCxTQUFsQzs7QUFDQSxNQUFBLEtBQUksQ0FBQ0QsU0FBTCxDQUFlTyxnQkFBZixDQUFnQyxTQUFoQyxFQUEyQyxLQUFJLENBQUNKLGFBQWhEO0FBQ0QsS0FwQ2tEOztBQUNqRCxTQUFLSCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBVkg7QUFBQTtBQUFBLCtCQVlvQjtBQUNoQixhQUFPLEtBQUtDLFNBQVo7QUFDRDtBQWRIO0FBQUE7QUFBQSw0QkFnQmlCO0FBQ2IsV0FBS0YsU0FBTCxDQUFlTyxnQkFBZixDQUFnQyxXQUFoQyxFQUE2QyxLQUFLQyxlQUFsRDtBQUNBLFdBQUtOLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQW5CSDtBQUFBO0FBQUEsMkJBcUJnQjtBQUNaLFdBQUtJLEtBQUw7QUFDQSxXQUFLSixTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7QUF4Qkg7QUFBQTtBQUFBLDRCQTBCa0I7QUFDZCxXQUFLRixTQUFMLENBQWVTLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLEtBQUtWLFNBQXJDO0FBQ0EsV0FBS0QsU0FBTCxDQUFlWSxtQkFBZixDQUFtQyxTQUFuQyxFQUE4QyxLQUFLVCxhQUFuRDtBQUNBLFdBQUtILFNBQUwsQ0FBZVksbUJBQWYsQ0FBbUMsV0FBbkMsRUFBZ0QsS0FBS0osZUFBckQ7QUFDRDtBQTlCSDs7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVEFCX0tFWV9DT0RFID0gOVxuXG5leHBvcnQgY2xhc3MgRm9jdXNNYW5hZ2VyIHtcbiAgcHVibGljIGNvbnRhaW5lcjogRWxlbWVudFxuXG4gIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZ1xuXG4gIHByaXZhdGUgaXNSdW5uaW5nID0gZmFsc2VcblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVxuICB9XG5cbiAgcHVibGljIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmlzUnVubmluZ1xuICB9XG5cbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVNb3VzZURvd24pXG4gICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlXG4gIH1cblxuICBwdWJsaWMgc3RvcCgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlXG4gIH1cblxuICBwcml2YXRlIHJlc2V0KCkge1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWUpXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKVxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVNb3VzZURvd24pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLndoaWNoID09PSBUQUJfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMucmVzZXQoKVxuICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZU1vdXNlRG93bilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vdXNlRG93biA9ICgpID0+IHtcbiAgICB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lKVxuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bilcbiAgfVxufVxuIl19