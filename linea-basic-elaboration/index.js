function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.BookmarkChecck = function BookmarkChecck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M18 1h28v61L32 48 18 62z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 22 7 7 13-13"
  }));
};

module.exports.BookmarkMinus = function BookmarkMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 22h18M18 1h28v61L32 48 18 62z"
  }));
};

module.exports.BookmarkPlus = function BookmarkPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 22h18m-9-9v18M18 1h28v61L32 48 18 62z"
  }));
};

module.exports.BookmarkRemove = function BookmarkRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M18 1h28v61L32 48 18 62zm21 28L25 15m0 14 14-14"
  }));
};

module.exports.BriefcaseCheck = function BriefcaseCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 22 7 7 13-13"
  }));
};

module.exports.BriefcaseDownload = function BriefcaseDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m40 25-8 8-8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 33V13"
  }));
};

module.exports.BriefcaseFlagged = function BriefcaseFlagged(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16zm6-30v23"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M27 14h15l-2.516 4L42 22H27"
  }));
};

module.exports.BriefcaseMinus = function BriefcaseMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16zm20-17H23"
  }));
};

module.exports.BriefcasePlus = function BriefcasePlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16zm11-26v18m9-9H23"
  }));
};

module.exports.BriefcaseRefresh = function BriefcaseRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 24c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 37 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 24c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 11-3 4 3 4"
  }));
};

module.exports.BriefcaseRemove = function BriefcaseRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16zm18-10L25 17m0 14 14-14"
  }));
};

module.exports.BriefcaseSearch = function BriefcaseSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "21",
    r: "6"
  }), React.createElement("path", {
    d: "m33 25 8 8"
  })));
};

module.exports.BriefcaseStar = function BriefcaseStar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m32 27-6.125 4L28 24l-6-4h7.213L32 12l3 8h7l-6 4 1.938 7z"
  }));
};

module.exports.BriefcaseUpload = function BriefcaseUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 41 6-40h42l6 40m-38 0c0 6.075 4.925 11 11 11s11-4.925 11-11h16v22H5V41h16z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23.998 22 8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31.998 14v20"
  }));
};

module.exports.BrowserCheck = function BrowserCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1zm0 8h62m-53-4H6m12 0h-4m12 0h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 35 7 7 13-13"
  }));
};

module.exports.BrowserDownload = function BrowserDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1zm0 8h62m-53-4H6m12 0h-4m12 0h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m40 38-8 8-8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 46V26"
  }));
};

module.exports.BrowserMinus = function BrowserMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1zm0 8h62m-53-4H6m12 0h-4m12 0h-4m19 26H23"
  }));
};

module.exports.BrowserPlus = function BrowserPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1zm0 8h62m-53-4H6m12 0h-4m12 0h-4m10 17v18m9-9H23"
  }));
};

module.exports.BrowserRefresh = function BrowserRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 37c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 50 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 37c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 24-3 4 3 4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 15h62m-53-4H6m12 0h-4m12 0h-4"
  }));
};

module.exports.BrowserRemove = function BrowserRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1zm0 8h62m-53-4H6m12 0h-4m12 0h-4m17 33L25 30m0 14 14-14"
  }));
};

module.exports.BrowserSearch = function BrowserSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1zm0 8h62m-53-4H6m12 0h-4m12 0h-4"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "33",
    r: "6"
  }), React.createElement("path", {
    d: "m33 37 8 8"
  })));
};

module.exports.BrowserStar = function BrowserStar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m32 41-6.125 4L28 38l-6-4h7.213L32 26l3 8h7l-6 4 1.938 7z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 15h62m-53-4H6m12 0h-4m12 0h-4"
  }));
};

module.exports.BrowserUpload = function BrowserUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 7h62v50H1zm0 8h62m-53-4H6m12 0h-4m12 0h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23.998 35 8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31.998 27v20"
  }));
};

module.exports.CalendarCheck = function CalendarCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 36 7 7 13-13"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }));
};

module.exports.CalendarCloud = function CalendarCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34.887 44H39c1.887 0 3-1 3-3 0-1-1-3-3-3 0-3.604-3.277-6-7-6-3.295 0-6.413 2.978-7 6-2 0-3 2-3 3 0 2 1 3 3 3h10.434M1 18h62"
  }));
};

module.exports.CalendarDownload = function CalendarDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m40 39-8 8-8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 47V27"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }));
};

module.exports.CalendarEmpty = function CalendarEmpty(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }));
};

module.exports.CalendarFlagged = function CalendarFlagged(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62m-36 9v23m0-20h15l-2.516 4L42 38H27"
  }));
};

module.exports.CalendarHeart = function CalendarHeart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62M22 35c0 6.666 10 12 10 12s10-5.334 10-12c0-2.762-2-5-5-5a5 5 0 0 0-5 5 5 5 0 0 0-5-5c-3 0-5 2.238-5 5z"
  }));
};

module.exports.CalendarMinus = function CalendarMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 38H23"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }));
};

module.exports.CalendarNext = function CalendarNext(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m34 30 8 8-8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 38H22M1 18h62"
  }));
};

module.exports.CalendarNoaccess = function CalendarNoaccess(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("circle", {
    cx: "32",
    cy: "38",
    r: "9",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m25.834 31.834 12.332 12.332M1 18h62"
  }));
};

module.exports.CalendarPencil = function CalendarPencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 43-1 5 5-1 15-15-4-4zm16-8-4-4"
  }));
};

module.exports.CalendarPlus = function CalendarPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 29v18m9-9H23M1 18h62"
  }));
};

module.exports.CalendarPrevious = function CalendarPrevious(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m30.001 46-8-8 8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22.001 38h20"
  }));
};

module.exports.CalendarRefresh = function CalendarRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 38c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 51 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 38c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 25-3 4 3 4"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }));
};

module.exports.CalendarRemove = function CalendarRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M39 45 25 31m0 14 14-14"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }));
};

module.exports.CalendarSearch = function CalendarSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "35",
    r: "6"
  }), React.createElement("path", {
    d: "m33 39 8 8"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }));
};

module.exports.CalendarStar = function CalendarStar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m32 43-6.125 4L28 40l-6-4h7.213L32 28l3 8h7l-6 4 1.938 7z"
  }));
};

module.exports.CalendarUpload = function CalendarUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23.998 36 8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31.998 28v20"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M46 10H18m-6 0H1v48h62V10H52"
  }), React.createElement("path", {
    d: "M12 6h6v8h-6zm34 0h6v8h-6z"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 18h62"
  }));
};

module.exports.CloudCheck = function CloudCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 34 7 7 13-13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30"
  }));
};

module.exports.CloudDownload = function CloudDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m40 37-8 8-8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 45V25"
  }));
};

module.exports.CloudMinus = function CloudMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30m0-16H23"
  }));
};

module.exports.CloudNoaccess = function CloudNoaccess(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30"
  }), React.createElement("circle", {
    cx: "32",
    cy: "34",
    r: "9",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m25.834 27.834 12.332 12.332"
  }));
};

module.exports.CloudPlus = function CloudPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30m-9-25v18m9-9H23"
  }));
};

module.exports.CloudRefresh = function CloudRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 32c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 45 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 32c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 19-3 4 3 4"
  }));
};

module.exports.CloudRemove = function CloudRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30m-2-9L25 27m0 14 14-14"
  }));
};

module.exports.CloudSearch = function CloudSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "31",
    r: "6"
  }), React.createElement("path", {
    d: "m33 35 8 8"
  })));
};

module.exports.CloudUpload = function CloudUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 50h14c4.565 0 8-3.582 8-8s-3.435-8-8-8c0-11.046-9.52-20-20.934-20C23.966 14 14.8 20.732 13 30h-1.667C5.626 30 1 34.477 1 40s4.293 10 10 10h30"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23.998 34 8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31.998 26v20"
  }));
};

module.exports.DocumentCheck = function DocumentCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 36 7 7 13-13"
  }));
};

module.exports.DocumentCloud = function DocumentCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34.887 42H39c1.887 0 3-1 3-3 0-1-1-3-3-3 0-3.604-3.277-6-7-6-3.295 0-6.413 2.978-7 6-2 0-3 2-3 3 0 2 1 3 3 3h10.434"
  }));
};

module.exports.DocumentDownload = function DocumentDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m40 37-8 8-8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 45V25"
  }));
};

module.exports.DocumentFlagged = function DocumentFlagged(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M27 21v23m0-20h15l-2.516 4L42 32H27"
  }));
};

module.exports.DocumentGraph = function DocumentGraph(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M27 44v-7h-4v7m11 0V27h-4v17m11 0V34h-4v10m-17 1h24"
  }));
};

module.exports.DocumentHeart = function DocumentHeart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22 33c0 6.666 10 12 10 12s10-5.334 10-12c0-2.762-2-5-5-5a5 5 0 0 0-5 5 5 5 0 0 0-5-5c-3 0-5 2.238-5 5z"
  }));
};

module.exports.DocumentMinus = function DocumentMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 36H23"
  }));
};

module.exports.DocumentNext = function DocumentNext(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m34 28 8 8-8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 36H22"
  }));
};

module.exports.DocumentNoaccess = function DocumentNoaccess(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("circle", {
    cx: "32",
    cy: "36",
    r: "9",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m25.834 29.834 12.332 12.332"
  }));
};

module.exports.DocumentNote = function DocumentNote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "35",
    cy: "41",
    r: "3"
  }), React.createElement("circle", {
    cx: "25",
    cy: "43",
    r: "3"
  }), React.createElement("path", {
    d: "M38 41V26l-10 2v15m0-11 10-2"
  })));
};

module.exports.DocumentPencil = function DocumentPencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 41-1 5 5-1 15-15-4-4zm16-8-4-4"
  }));
};

module.exports.DocumentPicture = function DocumentPicture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 29h20v14H22z"
  }), React.createElement("path", {
    d: "m22 41 7-7 4 5 2-2 6 5"
  })), React.createElement("circle", {
    cx: "39",
    cy: "32",
    r: "3",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.DocumentPlus = function DocumentPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 27v18m9-9H23"
  }));
};

module.exports.DocumentPrevious = function DocumentPrevious(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m30.001 44-8-8 8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22.001 36h20"
  }));
};

module.exports.DocumentRefresh = function DocumentRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 36c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 49 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 36c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 23-3 4 3 4"
  }));
};

module.exports.DocumentRemove = function DocumentRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M39 44 25 30m0 14 14-14"
  }));
};

module.exports.DocumentSearch = function DocumentSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "35",
    r: "6"
  }), React.createElement("path", {
    d: "m33 39 8 8"
  })));
};

module.exports.DocumentStar = function DocumentStar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m32 39-6.125 4L28 36l-6-4h7.213L32 24l3 8h7l-6 4 1.938 7z"
  }));
};

module.exports.DocumentUpload = function DocumentUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 1h32v62H9V15z"
  }), React.createElement("path", {
    d: "M9 15h14V1"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23.998 34 8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31.998 26v20"
  }));
};

module.exports.FolderCheck = function FolderCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 36 7 7 13-13"
  }));
};

module.exports.FolderCloud = function FolderCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34.887 42H39c1.887 0 3-1 3-3 0-1-1-3-3-3 0-3.604-3.277-6-7-6-3.295 0-6.413 2.978-7 6-2 0-3 2-3 3 0 2 1 3 3 3h10.434"
  }));
};

module.exports.FolderDocument = function FolderDocument(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M32 26h7v20H25V33z"
  }), React.createElement("path", {
    d: "M25 33h7v-7"
  })));
};

module.exports.FolderDownload = function FolderDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m40 37-8 8-8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 45V25"
  }));
};

module.exports.FolderFlagged = function FolderFlagged(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8zm-36 5v23"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M27 26h15l-2.516 4L42 34H27"
  }));
};

module.exports.FolderGraph = function FolderGraph(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M27 44v-7h-4v7m11 0V27h-4v17m11 0V34h-4v10m-17 1h24"
  }));
};

module.exports.FolderHeart = function FolderHeart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22 33c0 6.666 10 12 10 12s10-5.334 10-12c0-2.762-2-5-5-5a5 5 0 0 0-5 5 5 5 0 0 0-5-5c-3 0-5 2.238-5 5z"
  }));
};

module.exports.FolderMinus = function FolderMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8zM41 36H23"
  }));
};

module.exports.FolderNext = function FolderNext(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m34 28 8 8-8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 36H22"
  }));
};

module.exports.FolderNoaccess = function FolderNoaccess(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("circle", {
    cx: "32",
    cy: "36",
    r: "9",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m25.834 29.834 12.332 12.332"
  }));
};

module.exports.FolderNote = function FolderNote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "35",
    cy: "41",
    r: "3"
  }), React.createElement("circle", {
    cx: "25",
    cy: "43",
    r: "3"
  }), React.createElement("path", {
    d: "M38 41V26l-10 2v15m0-11 10-2"
  })));
};

module.exports.FolderPencil = function FolderPencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 41-1 5 5-1 15-15-4-4zm16-8-4-4"
  }));
};

module.exports.FolderPicture = function FolderPicture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 29h20v14H22z"
  }), React.createElement("path", {
    d: "m22 41 7-7 4 5 2-2 6 5"
  })), React.createElement("circle", {
    cx: "39",
    cy: "32",
    r: "3",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.FolderPlus = function FolderPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 27v18m9-9H23m40-18v36H1V10h21l8 8z"
  }));
};

module.exports.FolderPrevious = function FolderPrevious(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m30.001 44-8-8 8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22.001 36h20"
  }));
};

module.exports.FolderRefresh = function FolderRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 36c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 49 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 36c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 23-3 4 3 4"
  }));
};

module.exports.FolderRemove = function FolderRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8zM39 44 25 30m0 14 14-14"
  }));
};

module.exports.FolderSearch = function FolderSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "35",
    r: "6"
  }), React.createElement("path", {
    d: "m33 39 8 8"
  })));
};

module.exports.FolderStar = function FolderStar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m32 41-6.125 4L28 38l-6-4h7.213L32 26l3 8h7l-6 4 1.938 7z"
  }));
};

module.exports.FolderUpload = function FolderUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 18v36H1V10h21l8 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23.998 34 8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31.998 26v20"
  }));
};

module.exports.MailCheck = function MailCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 20 7 7 13-13"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.333 21.667 1 26v37h62V26l-10.333-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailCloud = function MailCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34.887 28H39c1.887 0 3-1 3-3 0-1-1-3-3-3 0-3.604-3.277-6-7-6-3.295 0-6.413 2.978-7 6-2 0-3 2-3 3 0 2 1 3 3 3h10.434"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailDocument = function MailDocument(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M32 10h7v20H25V17z"
  }), React.createElement("path", {
    d: "M25 17h7v-7"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailDownload = function MailDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m40 23-8 8-8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 31V11"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailFlagged = function MailFlagged(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M27 9v23m0-20h15l-2.516 4L42 20H27"
  }));
};

module.exports.MailHeart = function MailHeart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22 19c0 6.666 10 12 10 12s10-5.334 10-12c0-2.762-2-5-5-5a5 5 0 0 0-5 5 5 5 0 0 0-5-5c-3 0-5 2.238-5 5z"
  }));
};

module.exports.MailNext = function MailNext(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m34 14 8 8-8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 22H22"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailNoaccess = function MailNoaccess(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("circle", {
    cx: "32",
    cy: "22",
    r: "9",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m25.834 15.834 12.332 12.332"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailNote = function MailNote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "35",
    cy: "27",
    r: "3"
  }), React.createElement("circle", {
    cx: "25",
    cy: "29",
    r: "3"
  }), React.createElement("path", {
    d: "M38 27V12l-10 2v15m0-11 10-2"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailPencil = function MailPencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 27-1 5 5-1 15-15-4-4zm16-8-4-4"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.333 21.667 1 26v37h62V26l-10.333-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailPicture = function MailPicture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 15h20v14H22z"
  }), React.createElement("path", {
    d: "m22 27 7-7 4 5 2-2 6 5"
  })), React.createElement("circle", {
    cx: "39",
    cy: "18",
    r: "3",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailPrevious = function MailPrevious(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m30.001 30-8-8 8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22.001 22h20"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailRefresh = function MailRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 22c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 35 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 22c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 9-3 4 3 4"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailRemove = function MailRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M39 29 25 15m0 14 14-14"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.333 21.667 1 26v37h62V26l-10.333-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailSearch = function MailSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "19",
    r: "6"
  }), React.createElement("path", {
    d: "m33 23 8 8"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MailStar = function MailStar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m32 27-6.125 4L28 24l-6-4h7.213L32 12l3 8h7l-6 4 1.938 7z"
  }));
};

module.exports.MailUpload = function MailUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23.998 20 8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31.998 12v20"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 26 31 19.434L63 26"
  }), React.createElement("path", {
    d: "M11.334 21.667 1 26v37h62V26l-10.334-4.333"
  }), React.createElement("path", {
    d: "M11 32V1h42v31"
  })));
};

module.exports.MessageCheck = function MessageCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 47h31V5H1v42h17v12z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 26 7 7 13-13"
  }));
};

module.exports.MessageDots = function MessageDots(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 47h31V5H1v42h17v12zm-3-21h6m4 0h6m-26 0h6"
  }));
};

module.exports.MessageHappy = function MessageHappy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M24 30a8 8 0 0 0 16 0M18 20h2m26 0h-2"
  }), React.createElement("path", {
    d: "M32 47h31V5H1v42h17v12z"
  })));
};

module.exports.MessageHeart = function MessageHeart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 47h31V5H1v42h17v12z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22 23c0 6.666 10 12 10 12s10-5.334 10-12c0-2.762-2-5-5-5a5 5 0 0 0-5 5 5 5 0 0 0-5-5c-3 0-5 2.238-5 5z"
  }));
};

module.exports.MessageMinus = function MessageMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 26H23m9 21h31V5H1v42h17v12z"
  }));
};

module.exports.MessageNote = function MessageNote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 47h31V5H1v42h17v12z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "35",
    cy: "31",
    r: "3"
  }), React.createElement("circle", {
    cx: "25",
    cy: "33",
    r: "3"
  }), React.createElement("path", {
    d: "M38 31V16l-10 2v15m0-11 10-2"
  })));
};

module.exports.MessagePlus = function MessagePlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 17v18m9-9H23m9 21h31V5H1v42h17v12z"
  }));
};

module.exports.MessageRefresh = function MessageRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 47h31V5H1v42h17v12z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 26c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 39 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 26c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 13-3 4 3 4"
  }));
};

module.exports.MessageRemove = function MessageRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 47h31V5H1v42h17v12zm7-14L25 19m0 14 14-14"
  }));
};

module.exports.MessageSad = function MessageSad(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M18 20h2m26 0h-2M32 47h31V5H1v42h17v12z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M40 38a8 8 0 0 0-16 0"
  }));
};

module.exports.SmartphoneCloud = function SmartphoneCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 1h32v62H16zm12 4h8M16 51h32M16 9h32"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    strokeLinejoin: "bevel"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34.887 36H39c1.887 0 3-1 3-3 0-1-1-3-3-3 0-3.604-3.277-6-7-6-3.295 0-6.413 2.978-7 6-2 0-3 2-3 3 0 2 1 3 3 3h10.434"
  }));
};

module.exports.SmartphoneHeart = function SmartphoneHeart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 1h32v62H16zm12 4h8M16 51h32M16 9h32"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    strokeLinejoin: "bevel"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22 27c0 6.666 10 12 10 12s10-5.334 10-12c0-2.762-2-5-5-5a5 5 0 0 0-5 5 5 5 0 0 0-5-5c-3 0-5 2.238-5 5z"
  }));
};

module.exports.SmartphoneNoaccess = function SmartphoneNoaccess(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 1h32v62H16zm12 4h8M16 51h32M16 9h32"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    strokeLinejoin: "bevel"
  })), React.createElement("circle", {
    cx: "32",
    cy: "30",
    r: "9",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m25.834 23.834 12.332 12.332"
  }));
};

module.exports.SmartphoneNote = function SmartphoneNote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 1h32v62H16zm12 4h8M16 51h32M16 9h32"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    strokeLinejoin: "bevel"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "35",
    cy: "35",
    r: "3"
  }), React.createElement("circle", {
    cx: "25",
    cy: "37",
    r: "3"
  }), React.createElement("path", {
    d: "M38 35V20l-10 2v15m0-11 10-2"
  })));
};

module.exports.SmartphonePencil = function SmartphonePencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 1h32v62H16zm12 4h8M16 51h32M16 9h32"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    strokeLinejoin: "bevel"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 35-1 5 5-1 15-15-4-4zm16-8-4-4"
  }));
};

module.exports.SmartphonePicture = function SmartphonePicture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 1h32v62H16zm12 4h8M16 51h32M16 9h32"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    strokeLinejoin: "bevel"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 23h20v14H22z"
  }), React.createElement("path", {
    d: "m22 35 7-7 4 5 2-2 6 5"
  })), React.createElement("circle", {
    cx: "39",
    cy: "26",
    r: "3",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.SmartphoneRefresh = function SmartphoneRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 1h32v62H16zm12 4h8M16 51h32M16 9h32"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    strokeLinejoin: "bevel"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 30c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 43 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 30c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 17-3 4 3 4"
  }));
};

module.exports.SmartphoneSearch = function SmartphoneSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 1h32v62H16zm12 4h8M16 51h32M16 9h32"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    strokeLinejoin: "bevel"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "27",
    r: "6"
  }), React.createElement("path", {
    d: "m33 31 8 8"
  })));
};

module.exports.TabletCloud = function TabletCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34.887 36H39c1.887 0 3-1 3-3 0-1-1-3-3-3 0-3.604-3.277-6-7-6-3.295 0-6.413 2.978-7 6-2 0-3 2-3 3 0 2 1 3 3 3h10.434"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M11 1h42v62H11zm17 4h8M11 51h42M11 9h42"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.TabletHeart = function TabletHeart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M11 1h42v62H11z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22 27c0 6.666 10 12 10 12s10-5.334 10-12c0-2.762-2-5-5-5a5 5 0 0 0-5 5 5 5 0 0 0-5-5c-3 0-5 2.238-5 5zm6-22h8M11 51h42M11 9h42"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.TabletNoaccess = function TabletNoaccess(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("circle", {
    cx: "32",
    cy: "30",
    r: "9",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m25.834 23.834 12.332 12.332M11 1h42v62H11zm17 4h8M11 51h42M11 9h42"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.TabletNote = function TabletNote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "35",
    cy: "35",
    r: "3"
  }), React.createElement("circle", {
    cx: "25",
    cy: "37",
    r: "3"
  }), React.createElement("path", {
    d: "M38 35V20l-10 2v15m0-11 10-2"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M11 1h42v62H11zm17 4h8M11 51h42M11 9h42"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.TabletPencil = function TabletPencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 35-1 5 5-1 15-15-4-4zm16-8-4-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M11 1h42v62H11zm17 4h8M11 51h42M11 9h42"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.TabletPicture = function TabletPicture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 23h20v14H22z"
  }), React.createElement("path", {
    d: "m22 35 7-7 4 5 2-2 6 5"
  })), React.createElement("circle", {
    cx: "39",
    cy: "26",
    r: "3",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M11 1h42v62H11zm17 4h8M11 51h42M11 9h42"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.TabletRefresh = function TabletRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 30c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 43 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 30c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 17-3 4 3 4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M11 1h42v62H11zm17 4h8M11 51h42M11 9h42"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.TabletSearch = function TabletSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "27",
    r: "6"
  }), React.createElement("path", {
    d: "m33 31 8 8"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M11 1h42v62H11zm17 4h8M11 51h42M11 9h42"
  }), React.createElement("circle", {
    cx: "32",
    cy: "57",
    r: "2",
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }));
};

module.exports.Todolist2 = function Todolist2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8zm-22 8h36v46H14z"
  }));
};

module.exports.TodolistCheck = function TodolistCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 34 7 7 13-13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistCloud = function TodolistCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34.887 42H39c1.887 0 3-1 3-3 0-1-1-3-3-3 0-3.604-3.277-6-7-6-3.295 0-6.413 2.978-7 6-2 0-3 2-3 3 0 2 1 3 3 3h10.434"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistDownload = function TodolistDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m40 37-8 8-8-8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 45V25M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistFlagged = function TodolistFlagged(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8zm-9 18v23m0-20h15l-2.516 4L42 34H27"
  }));
};

module.exports.TodolistMinus = function TodolistMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 36H23m0-28H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistNoaccess = function TodolistNoaccess(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("circle", {
    cx: "32",
    cy: "36",
    r: "9",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m25.834 29.834 12.332 12.332M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistPencil = function TodolistPencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23 41-1 5 5-1 15-15-4-4zm16-8-4-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistPlus = function TodolistPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 27v18m9-9H23m0-28H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistRefresh = function TodolistRefresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 36c0 4.418 3.582 9 8 9h4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 49 3-4-3-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M42 36c0-4.418-3.582-9-8-9h-4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m33 23-3 4 3 4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistRemove = function TodolistRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M39 43 25 29m0 14 14-14M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistSearch = function TodolistSearch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "29",
    cy: "33",
    r: "6"
  }), React.createElement("path", {
    d: "m33 37 8 8"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};

module.exports.TodolistStar = function TodolistStar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m32 41-6.125 4L28 38l-6-4h7.213L32 26l3 8h7l-6 4 1.938 7z"
  }));
};

module.exports.TodolistUpload = function TodolistUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m23.998 34 8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31.998 26v20M23 8H10v55h44V8H41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 5V1h-8v4h-4l-2 8h20l-2-8z"
  }));
};