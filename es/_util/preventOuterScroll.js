var preventOuterScroll = function preventOuterScroll(e) {
  var saveThis = e.currentTarget,
      delta = e.deltaY;
  var scrollTop = saveThis.scrollTop,
      scrollHeight = saveThis.scrollHeight;
  var height = saveThis.clientHeight;

  if (delta > 0 && scrollHeight - height - scrollTop <= delta) {
    saveThis.scrollTop = scrollHeight;
    e.preventDefault();
  } else if (delta < 0 && scrollTop <= -1 * delta) {
    saveThis.scrollTop = 0;
    e.preventDefault();
  }
};

export { preventOuterScroll };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvX3V0aWwvcHJldmVudE91dGVyU2Nyb2xsLnRzIl0sIm5hbWVzIjpbInByZXZlbnRPdXRlclNjcm9sbCIsImUiLCJzYXZlVGhpcyIsImN1cnJlbnRUYXJnZXQiLCJkZWx0YSIsImRlbHRhWSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLENBQUQsRUFBWTtBQUFBLE1BQ2RDLFFBRGMsR0FDY0QsQ0FEZCxDQUM3QkUsYUFENkI7QUFBQSxNQUNJQyxLQURKLEdBQ2NILENBRGQsQ0FDSkksTUFESTtBQUFBLE1BRTdCQyxTQUY2QixHQUVESixRQUZDLENBRTdCSSxTQUY2QjtBQUFBLE1BRWxCQyxZQUZrQixHQUVETCxRQUZDLENBRWxCSyxZQUZrQjtBQUdyQyxNQUFNQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sWUFBeEI7O0FBTUEsTUFBSUwsS0FBSyxHQUFHLENBQVIsSUFBYUcsWUFBWSxHQUFHQyxNQUFmLEdBQXdCRixTQUF4QixJQUFxQ0YsS0FBdEQsRUFBNkQ7QUFDM0RGLElBQUFBLFFBQVEsQ0FBQ0ksU0FBVCxHQUFxQkMsWUFBckI7QUFDQU4sSUFBQUEsQ0FBQyxDQUFDUyxjQUFGO0FBQ0QsR0FIRCxNQUdPLElBQUlOLEtBQUssR0FBRyxDQUFSLElBQWFFLFNBQVMsSUFBSSxDQUFDLENBQUQsR0FBS0YsS0FBbkMsRUFBMEM7QUFDL0NGLElBQUFBLFFBQVEsQ0FBQ0ksU0FBVCxHQUFxQixDQUFyQjtBQUNBTCxJQUFBQSxDQUFDLENBQUNTLGNBQUY7QUFDRDtBQUNGLENBaEJEOztBQWtCQSxTQUFTVixrQkFBVCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByZXZlbnRPdXRlclNjcm9sbCA9IChlOiBhbnkpID0+IHtcbiAgY29uc3QgeyBjdXJyZW50VGFyZ2V0OiBzYXZlVGhpcywgZGVsdGFZOiBkZWx0YSB9ID0gZVxuICBjb25zdCB7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0IH0gPSBzYXZlVGhpc1xuICBjb25zdCBoZWlnaHQgPSBzYXZlVGhpcy5jbGllbnRIZWlnaHRcblxuICAvLyBjb25zdCBkZWx0YSA9IChldmVudC53aGVlbERlbHRhKSA/IGV2ZW50LndoZWVsRGVsdGEgOiAtKGV2ZW50LmRldGFpbCB8fCAwKVxuICAvLyDov5nkuIDlj6XmmK/ljp/nlJ/ojrflj5YgZGVsdGEg55qE5YaZ5rOV77yMXG4gIC8vIFJlYWN0IFdoZWVsIEV2ZW50cyDorqnmiJHku6zkuI3nlKjogIPomZHlhbzlrrnmgKfvvIzlj6/ku6XpgJrov4cgZS5kZWx0YVkg55u05o6l5ou/5Yiw77yMXG4gIC8vIOeEtuiAjOi/meS4quWAvCDlkowg5Y6f55Sf55qEIGRlbHRhIOaYr+ebuOWPjeaVsO+8jOWboOatpOS7peS4i+eahCA8ID4g5Y+35Y+KIC0xICog77yM5Z2H5LiO5Y6f55Sf5oOF5Ya155u45Y+N44CCXG4gIGlmIChkZWx0YSA+IDAgJiYgc2Nyb2xsSGVpZ2h0IC0gaGVpZ2h0IC0gc2Nyb2xsVG9wIDw9IGRlbHRhKSB7XG4gICAgc2F2ZVRoaXMuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH0gZWxzZSBpZiAoZGVsdGEgPCAwICYmIHNjcm9sbFRvcCA8PSAtMSAqIGRlbHRhKSB7XG4gICAgc2F2ZVRoaXMuc2Nyb2xsVG9wID0gMFxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbmV4cG9ydCB7IHByZXZlbnRPdXRlclNjcm9sbCB9XG4iXX0=