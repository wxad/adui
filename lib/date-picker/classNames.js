"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var prefix = "adui-date";
var _default = {
  body: "".concat(prefix, "-body"),
  caption: "".concat(prefix, "-caption"),
  day: "".concat(prefix, "-day"),
  disabled: "".concat(prefix, "-disabled"),
  month: "".concat(prefix, "-month"),
  months: "".concat(prefix, "-months"),
  navBar: "".concat(prefix, "-navBar"),
  navButtonNext: "".concat(prefix, "-navButtonNext"),
  navButtonPrev: "".concat(prefix, "-navButtonPrev"),
  outside: "".concat(prefix, "-outside"),
  selected: "".concat(prefix, "-selected"),
  today: "".concat(prefix, "-today"),
  week: "".concat(prefix, "-week"),
  weekday: "".concat(prefix, "-weekday"),
  weekdays: "".concat(prefix, "-weekdays"),
  weekdaysRow: "".concat(prefix, "-weekdaysRow"),
  weekNumber: "".concat(prefix, "-weekNumber"),
  wrapper: "".concat(prefix, "-wrapper")
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvY2xhc3NOYW1lcy50cyJdLCJuYW1lcyI6WyJwcmVmaXgiLCJib2R5IiwiY2FwdGlvbiIsImRheSIsImRpc2FibGVkIiwibW9udGgiLCJtb250aHMiLCJuYXZCYXIiLCJuYXZCdXR0b25OZXh0IiwibmF2QnV0dG9uUHJldiIsIm91dHNpZGUiLCJzZWxlY3RlZCIsInRvZGF5Iiwid2VlayIsIndlZWtkYXkiLCJ3ZWVrZGF5cyIsIndlZWtkYXlzUm93Iiwid2Vla051bWJlciIsIndyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxXQUFmO2VBRWU7QUFDYkMsRUFBQUEsSUFBSSxZQUFLRCxNQUFMLFVBRFM7QUFFYkUsRUFBQUEsT0FBTyxZQUFLRixNQUFMLGFBRk07QUFHYkcsRUFBQUEsR0FBRyxZQUFLSCxNQUFMLFNBSFU7QUFJYkksRUFBQUEsUUFBUSxZQUFLSixNQUFMLGNBSks7QUFLYkssRUFBQUEsS0FBSyxZQUFLTCxNQUFMLFdBTFE7QUFNYk0sRUFBQUEsTUFBTSxZQUFLTixNQUFMLFlBTk87QUFPYk8sRUFBQUEsTUFBTSxZQUFLUCxNQUFMLFlBUE87QUFRYlEsRUFBQUEsYUFBYSxZQUFLUixNQUFMLG1CQVJBO0FBU2JTLEVBQUFBLGFBQWEsWUFBS1QsTUFBTCxtQkFUQTtBQVViVSxFQUFBQSxPQUFPLFlBQUtWLE1BQUwsYUFWTTtBQVdiVyxFQUFBQSxRQUFRLFlBQUtYLE1BQUwsY0FYSztBQVliWSxFQUFBQSxLQUFLLFlBQUtaLE1BQUwsV0FaUTtBQWFiYSxFQUFBQSxJQUFJLFlBQUtiLE1BQUwsVUFiUztBQWNiYyxFQUFBQSxPQUFPLFlBQUtkLE1BQUwsYUFkTTtBQWViZSxFQUFBQSxRQUFRLFlBQUtmLE1BQUwsY0FmSztBQWdCYmdCLEVBQUFBLFdBQVcsWUFBS2hCLE1BQUwsaUJBaEJFO0FBaUJiaUIsRUFBQUEsVUFBVSxZQUFLakIsTUFBTCxnQkFqQkc7QUFrQmJrQixFQUFBQSxPQUFPLFlBQUtsQixNQUFMO0FBbEJNLEMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcmVmaXggPSBcImFkdWktZGF0ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYm9keTogYCR7cHJlZml4fS1ib2R5YCxcbiAgY2FwdGlvbjogYCR7cHJlZml4fS1jYXB0aW9uYCxcbiAgZGF5OiBgJHtwcmVmaXh9LWRheWAsXG4gIGRpc2FibGVkOiBgJHtwcmVmaXh9LWRpc2FibGVkYCxcbiAgbW9udGg6IGAke3ByZWZpeH0tbW9udGhgLFxuICBtb250aHM6IGAke3ByZWZpeH0tbW9udGhzYCxcbiAgbmF2QmFyOiBgJHtwcmVmaXh9LW5hdkJhcmAsXG4gIG5hdkJ1dHRvbk5leHQ6IGAke3ByZWZpeH0tbmF2QnV0dG9uTmV4dGAsXG4gIG5hdkJ1dHRvblByZXY6IGAke3ByZWZpeH0tbmF2QnV0dG9uUHJldmAsXG4gIG91dHNpZGU6IGAke3ByZWZpeH0tb3V0c2lkZWAsXG4gIHNlbGVjdGVkOiBgJHtwcmVmaXh9LXNlbGVjdGVkYCxcbiAgdG9kYXk6IGAke3ByZWZpeH0tdG9kYXlgLFxuICB3ZWVrOiBgJHtwcmVmaXh9LXdlZWtgLFxuICB3ZWVrZGF5OiBgJHtwcmVmaXh9LXdlZWtkYXlgLFxuICB3ZWVrZGF5czogYCR7cHJlZml4fS13ZWVrZGF5c2AsXG4gIHdlZWtkYXlzUm93OiBgJHtwcmVmaXh9LXdlZWtkYXlzUm93YCxcbiAgd2Vla051bWJlcjogYCR7cHJlZml4fS13ZWVrTnVtYmVyYCxcbiAgd3JhcHBlcjogYCR7cHJlZml4fS13cmFwcGVyYCxcbn1cbiJdfQ==