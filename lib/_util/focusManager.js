"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusManager = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TAB_KEY_CODE = 9;

var FocusManager = function () {
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

exports.FocusManager = FocusManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvX3V0aWwvZm9jdXNNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIlRBQl9LRVlfQ09ERSIsIkZvY3VzTWFuYWdlciIsImNvbnRhaW5lciIsImNsYXNzTmFtZSIsImlzUnVubmluZyIsImhhbmRsZUtleURvd24iLCJlIiwid2hpY2giLCJyZXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZURvd24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHLENBQXJCOztJQUVhQyxZO0FBT1gsd0JBQVlDLFNBQVosRUFBZ0NDLFNBQWhDLEVBQW1EO0FBQUE7O0FBQUE7O0FBQUEsU0FONUNELFNBTTRDO0FBQUEsU0FKNUNDLFNBSTRDO0FBQUEsU0FGM0NDLFNBRTJDLEdBRi9CLEtBRStCOztBQUFBLFNBeUIzQ0MsYUF6QjJDLEdBeUIzQixVQUFDQyxDQUFELEVBQXNCO0FBQzVDLFVBQUlBLENBQUMsQ0FBQ0MsS0FBRixLQUFZUCxZQUFoQixFQUE4QjtBQUM1QixRQUFBLEtBQUksQ0FBQ1EsS0FBTDs7QUFDQSxRQUFBLEtBQUksQ0FBQ04sU0FBTCxDQUFlTyxnQkFBZixDQUFnQyxXQUFoQyxFQUE2QyxLQUFJLENBQUNDLGVBQWxEO0FBQ0Q7QUFDRixLQTlCa0Q7O0FBQUEsU0FnQzNDQSxlQWhDMkMsR0FnQ3pCLFlBQU07QUFDOUIsTUFBQSxLQUFJLENBQUNGLEtBQUw7O0FBQ0EsTUFBQSxLQUFJLENBQUNOLFNBQUwsQ0FBZVMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsS0FBSSxDQUFDVCxTQUFsQzs7QUFDQSxNQUFBLEtBQUksQ0FBQ0QsU0FBTCxDQUFlTyxnQkFBZixDQUFnQyxTQUFoQyxFQUEyQyxLQUFJLENBQUNKLGFBQWhEO0FBQ0QsS0FwQ2tEOztBQUNqRCxTQUFLSCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7K0JBRWlCO0FBQ2hCLGFBQU8sS0FBS0MsU0FBWjtBQUNEOzs7NEJBRWM7QUFDYixXQUFLRixTQUFMLENBQWVPLGdCQUFmLENBQWdDLFdBQWhDLEVBQTZDLEtBQUtDLGVBQWxEO0FBQ0EsV0FBS04sU0FBTCxHQUFpQixJQUFqQjtBQUNEOzs7MkJBRWE7QUFDWixXQUFLSSxLQUFMO0FBQ0EsV0FBS0osU0FBTCxHQUFpQixLQUFqQjtBQUNEOzs7NEJBRWU7QUFDZCxXQUFLRixTQUFMLENBQWVTLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLEtBQUtWLFNBQXJDO0FBQ0EsV0FBS0QsU0FBTCxDQUFlWSxtQkFBZixDQUFtQyxTQUFuQyxFQUE4QyxLQUFLVCxhQUFuRDtBQUNBLFdBQUtILFNBQUwsQ0FBZVksbUJBQWYsQ0FBbUMsV0FBbkMsRUFBZ0QsS0FBS0osZUFBckQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRBQl9LRVlfQ09ERSA9IDlcblxuZXhwb3J0IGNsYXNzIEZvY3VzTWFuYWdlciB7XG4gIHB1YmxpYyBjb250YWluZXI6IEVsZW1lbnRcblxuICBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmdcblxuICBwcml2YXRlIGlzUnVubmluZyA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVyOiBFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1J1bm5pbmdcbiAgfVxuXG4gIHB1YmxpYyBzdGFydCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duKVxuICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZVxuICB9XG5cbiAgcHVibGljIHN0b3AoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZVxuICB9XG5cbiAgcHJpdmF0ZSByZXNldCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lKVxuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bilcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS53aGljaCA9PT0gVEFCX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnJlc2V0KClcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVNb3VzZURvd24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZSlcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24pXG4gIH1cbn1cbiJdfQ==