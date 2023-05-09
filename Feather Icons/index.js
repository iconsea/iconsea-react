function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.Activity = function Activity(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M22 12h-4l-3 9L9 3l-3 9H2"
  }));
};

module.exports.Airplay = function Airplay(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
  }), React.createElement("path", {
    d: "m12 15 5 6H7l5-6z"
  })));
};

module.exports.AlertCircle = function AlertCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M12 8v4"
  }), React.createElement("path", {
    d: "M12 16h.01"
  })));
};

module.exports.AlertOctagon = function AlertOctagon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"
  }), React.createElement("path", {
    d: "M12 8v4"
  }), React.createElement("path", {
    d: "M12 16h.01"
  })));
};

module.exports.AlertTriangle = function AlertTriangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), React.createElement("path", {
    d: "M12 9v4"
  }), React.createElement("path", {
    d: "M12 17h.01"
  })));
};

module.exports.AlignCenter = function AlignCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M18 10H6"
  }), React.createElement("path", {
    d: "M21 6H3"
  }), React.createElement("path", {
    d: "M21 14H3"
  }), React.createElement("path", {
    d: "M18 18H6"
  })));
};

module.exports.AlignJustify = function AlignJustify(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 10H3"
  }), React.createElement("path", {
    d: "M21 6H3"
  }), React.createElement("path", {
    d: "M21 14H3"
  }), React.createElement("path", {
    d: "M21 18H3"
  })));
};

module.exports.AlignLeft = function AlignLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M17 10H3"
  }), React.createElement("path", {
    d: "M21 6H3"
  }), React.createElement("path", {
    d: "M21 14H3"
  }), React.createElement("path", {
    d: "M17 18H3"
  })));
};

module.exports.AlignRight = function AlignRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 10H7"
  }), React.createElement("path", {
    d: "M21 6H3"
  }), React.createElement("path", {
    d: "M21 14H3"
  }), React.createElement("path", {
    d: "M21 18H7"
  })));
};

module.exports.Anchor = function Anchor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "3"
  }), React.createElement("path", {
    d: "M12 22V8"
  }), React.createElement("path", {
    d: "M5 12H2a10 10 0 0 0 20 0h-3"
  })));
};

module.exports.Aperture = function Aperture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m14.31 8 5.74 9.94"
  }), React.createElement("path", {
    d: "M9.69 8h11.48"
  }), React.createElement("path", {
    d: "m7.38 12 5.74-9.94"
  }), React.createElement("path", {
    d: "M9.69 16 3.95 6.06"
  }), React.createElement("path", {
    d: "M14.31 16H2.83"
  }), React.createElement("path", {
    d: "m16.62 12-5.74 9.94"
  })));
};

module.exports.Archive = function Archive(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 8v13H3V8"
  }), React.createElement("path", {
    d: "M1 3h22v5H1z"
  }), React.createElement("path", {
    d: "M10 12h4"
  })));
};

module.exports.ArrowDownCircle = function ArrowDownCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m8 12 4 4 4-4"
  }), React.createElement("path", {
    d: "M12 8v8"
  })));
};

module.exports.ArrowDownLeft = function ArrowDownLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M17 7 7 17"
  }), React.createElement("path", {
    d: "M17 17H7V7"
  })));
};

module.exports.ArrowDownRight = function ArrowDownRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m7 7 10 10"
  }), React.createElement("path", {
    d: "M17 7v10H7"
  })));
};

module.exports.ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 5v14"
  }), React.createElement("path", {
    d: "m19 12-7 7-7-7"
  })));
};

module.exports.ArrowLeftCircle = function ArrowLeftCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m12 8-4 4 4 4"
  }), React.createElement("path", {
    d: "M16 12H8"
  })));
};

module.exports.ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19 12H5"
  }), React.createElement("path", {
    d: "m12 19-7-7 7-7"
  })));
};

module.exports.ArrowRightCircle = function ArrowRightCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m12 16 4-4-4-4"
  }), React.createElement("path", {
    d: "M8 12h8"
  })));
};

module.exports.ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M5 12h14"
  }), React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })));
};

module.exports.ArrowUpCircle = function ArrowUpCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m16 12-4-4-4 4"
  }), React.createElement("path", {
    d: "M12 16V8"
  })));
};

module.exports.ArrowUpLeft = function ArrowUpLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M17 17 7 7"
  }), React.createElement("path", {
    d: "M7 17V7h10"
  })));
};

module.exports.ArrowUpRight = function ArrowUpRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M7 17 17 7"
  }), React.createElement("path", {
    d: "M7 7h10v10"
  })));
};

module.exports.ArrowUp = function ArrowUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 19V5"
  }), React.createElement("path", {
    d: "m5 12 7-7 7 7"
  })));
};

module.exports.AtSign = function AtSign(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), React.createElement("path", {
    d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
  })));
};

module.exports.Award = function Award(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "7"
  }), React.createElement("path", {
    d: "M8.21 13.89 7 23l5-3 5 3-1.21-9.12"
  })));
};

module.exports.BarChart2 = function BarChart2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M18 20V10"
  }), React.createElement("path", {
    d: "M12 20V4"
  }), React.createElement("path", {
    d: "M6 20v-6"
  })));
};

module.exports.BarChart = function BarChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 20V10"
  }), React.createElement("path", {
    d: "M18 20V4"
  }), React.createElement("path", {
    d: "M6 20v-4"
  })));
};

module.exports.BatteryCharging = function BatteryCharging(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
  }), React.createElement("path", {
    d: "M23 13v-2"
  }), React.createElement("path", {
    d: "m11 6-4 6h6l-4 6"
  })));
};

module.exports.Battery = function Battery(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "12",
    x: "1",
    y: "6",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M23 13v-2"
  })));
};

module.exports.BellOff = function BellOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }), React.createElement("path", {
    d: "M18.63 13A17.89 17.89 0 0 1 18 8"
  }), React.createElement("path", {
    d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
  }), React.createElement("path", {
    d: "M18 8a6 6 0 0 0-9.33-5"
  }), React.createElement("path", {
    d: "m1 1 22 22"
  })));
};

module.exports.Bell = function Bell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  })));
};

module.exports.Bluetooth = function Bluetooth(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m6.5 6.5 11 11L12 23V1l5.5 5.5-11 11"
  }));
};

module.exports.Bold = function Bold(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
  }), React.createElement("path", {
    d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
  })));
};

module.exports.BookOpen = function BookOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
  }), React.createElement("path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
  })));
};

module.exports.Book = function Book(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  })));
};

module.exports.Bookmark = function Bookmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  }));
};

module.exports.Box = function Box(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), React.createElement("path", {
    d: "M3.27 6.96 12 12.01l8.73-5.05"
  }), React.createElement("path", {
    d: "M12 22.08V12"
  })));
};

module.exports.Briefcase = function Briefcase(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "7",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M16 2v4"
  }), React.createElement("path", {
    d: "M8 2v4"
  }), React.createElement("path", {
    d: "M3 10h18"
  })));
};

module.exports.CameraOff = function CameraOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 1 22 22"
  }), React.createElement("path", {
    d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
  })));
};

module.exports.Camera = function Camera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "4"
  })));
};

module.exports.Cast = function Cast(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
  }), React.createElement("path", {
    d: "M2 20h.01"
  })));
};

module.exports.CheckCircle = function CheckCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), React.createElement("path", {
    d: "M22 4 12 14.01l-3-3"
  })));
};

module.exports.CheckSquare = function CheckSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m9 11 3 3L22 4"
  }), React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  })));
};

module.exports.Check = function Check(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M20 6 9 17l-5-5"
  }));
};

module.exports.ChevronDown = function ChevronDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m6 9 6 6 6-6"
  }));
};

module.exports.ChevronLeft = function ChevronLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m15 18-6-6 6-6"
  }));
};

module.exports.ChevronRight = function ChevronRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m9 18 6-6-6-6"
  }));
};

module.exports.ChevronUp = function ChevronUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m18 15-6-6-6 6"
  }));
};

module.exports.ChevronsDown = function ChevronsDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m7 13 5 5 5-5"
  }), React.createElement("path", {
    d: "m7 6 5 5 5-5"
  })));
};

module.exports.ChevronsLeft = function ChevronsLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m11 17-5-5 5-5"
  }), React.createElement("path", {
    d: "m18 17-5-5 5-5"
  })));
};

module.exports.ChevronsRight = function ChevronsRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m13 17 5-5-5-5"
  }), React.createElement("path", {
    d: "m6 17 5-5-5-5"
  })));
};

module.exports.ChevronsUp = function ChevronsUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m17 11-5-5-5 5"
  }), React.createElement("path", {
    d: "m17 18-5-5-5 5"
  })));
};

module.exports.Chrome = function Chrome(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), React.createElement("path", {
    d: "M21.17 8H12"
  }), React.createElement("path", {
    d: "M3.95 6.06 8.54 14"
  }), React.createElement("path", {
    d: "M10.88 21.94 15.46 14"
  })));
};

module.exports.Circle = function Circle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }));
};

module.exports.Clipboard = function Clipboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
  }), React.createElement("rect", {
    width: "8",
    height: "4",
    x: "8",
    y: "2",
    rx: "1",
    ry: "1"
  })));
};

module.exports.Clock = function Clock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M12 6v6l4 2"
  })));
};

module.exports.CloudDrizzle = function CloudDrizzle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M8 19v2"
  }), React.createElement("path", {
    d: "M8 13v2"
  }), React.createElement("path", {
    d: "M16 19v2"
  }), React.createElement("path", {
    d: "M16 13v2"
  }), React.createElement("path", {
    d: "M12 21v2"
  }), React.createElement("path", {
    d: "M12 15v2"
  }), React.createElement("path", {
    d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
  })));
};

module.exports.CloudLightning = function CloudLightning(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
  }), React.createElement("path", {
    d: "m13 11-4 6h6l-4 6"
  })));
};

module.exports.CloudOff = function CloudOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
  }), React.createElement("path", {
    d: "m1 1 22 22"
  })));
};

module.exports.CloudRain = function CloudRain(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 13v8"
  }), React.createElement("path", {
    d: "M8 13v8"
  }), React.createElement("path", {
    d: "M12 15v8"
  }), React.createElement("path", {
    d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
  })));
};

module.exports.CloudSnow = function CloudSnow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
  }), React.createElement("path", {
    d: "M8 16h.01"
  }), React.createElement("path", {
    d: "M8 20h.01"
  }), React.createElement("path", {
    d: "M12 18h.01"
  }), React.createElement("path", {
    d: "M12 22h.01"
  }), React.createElement("path", {
    d: "M16 16h.01"
  }), React.createElement("path", {
    d: "M16 20h.01"
  })));
};

module.exports.Cloud = function Cloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
  }));
};

module.exports.Code = function Code(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m16 18 6-6-6-6"
  }), React.createElement("path", {
    d: "m8 6-6 6 6 6"
  })));
};

module.exports.Codepen = function Codepen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m12 2 10 6.5v7L12 22 2 15.5v-7L12 2z"
  }), React.createElement("path", {
    d: "M12 22v-6.5"
  }), React.createElement("path", {
    d: "m22 8.5-10 7-10-7"
  }), React.createElement("path", {
    d: "m2 15.5 10-7 10 7"
  }), React.createElement("path", {
    d: "M12 2v6.5"
  })));
};

module.exports.Codesandbox = function Codesandbox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), React.createElement("path", {
    d: "m7.5 4.21 4.5 2.6 4.5-2.6"
  }), React.createElement("path", {
    d: "M7.5 19.79V14.6L3 12"
  }), React.createElement("path", {
    d: "m21 12-4.5 2.6v5.19"
  }), React.createElement("path", {
    d: "M3.27 6.96 12 12.01l8.73-5.05"
  }), React.createElement("path", {
    d: "M12 22.08V12"
  })));
};

module.exports.Coffee = function Coffee(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M18 8h1a4 4 0 0 1 0 8h-1"
  }), React.createElement("path", {
    d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
  }), React.createElement("path", {
    d: "M6 1v3"
  }), React.createElement("path", {
    d: "M10 1v3"
  }), React.createElement("path", {
    d: "M14 1v3"
  })));
};

module.exports.Columns = function Columns(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
  }));
};

module.exports.Command = function Command(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
  }));
};

module.exports.Compass = function Compass(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
  })));
};

module.exports.Copy = function Copy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "13",
    height: "13",
    x: "9",
    y: "9",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  })));
};

module.exports.CornerDownLeft = function CornerDownLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m9 10-5 5 5 5"
  }), React.createElement("path", {
    d: "M20 4v7a4 4 0 0 1-4 4H4"
  })));
};

module.exports.CornerDownRight = function CornerDownRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m15 10 5 5-5 5"
  }), React.createElement("path", {
    d: "M4 4v7a4 4 0 0 0 4 4h12"
  })));
};

module.exports.CornerLeftDown = function CornerLeftDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m14 15-5 5-5-5"
  }), React.createElement("path", {
    d: "M20 4h-7a4 4 0 0 0-4 4v12"
  })));
};

module.exports.CornerLeftUp = function CornerLeftUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M14 9 9 4 4 9"
  }), React.createElement("path", {
    d: "M20 20h-7a4 4 0 0 1-4-4V4"
  })));
};

module.exports.CornerRightDown = function CornerRightDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m10 15 5 5 5-5"
  }), React.createElement("path", {
    d: "M4 4h7a4 4 0 0 1 4 4v12"
  })));
};

module.exports.CornerRightUp = function CornerRightUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m10 9 5-5 5 5"
  }), React.createElement("path", {
    d: "M4 20h7a4 4 0 0 0 4-4V4"
  })));
};

module.exports.CornerUpLeft = function CornerUpLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M9 14 4 9l5-5"
  }), React.createElement("path", {
    d: "M20 20v-7a4 4 0 0 0-4-4H4"
  })));
};

module.exports.CornerUpRight = function CornerUpRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m15 14 5-5-5-5"
  }), React.createElement("path", {
    d: "M4 20v-7a4 4 0 0 1 4-4h12"
  })));
};

module.exports.Cpu = function Cpu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M9 9h6v6H9z"
  }), React.createElement("path", {
    d: "M9 1v3"
  }), React.createElement("path", {
    d: "M15 1v3"
  }), React.createElement("path", {
    d: "M9 20v3"
  }), React.createElement("path", {
    d: "M15 20v3"
  }), React.createElement("path", {
    d: "M20 9h3"
  }), React.createElement("path", {
    d: "M20 14h3"
  }), React.createElement("path", {
    d: "M1 9h3"
  }), React.createElement("path", {
    d: "M1 14h3"
  })));
};

module.exports.CreditCard = function CreditCard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "22",
    height: "16",
    x: "1",
    y: "4",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M1 10h22"
  })));
};

module.exports.Crop = function Crop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M6.13 1 6 16a2 2 0 0 0 2 2h15"
  }), React.createElement("path", {
    d: "M1 6.13 16 6a2 2 0 0 1 2 2v15"
  })));
};

module.exports.Crosshair = function Crosshair(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M22 12h-4"
  }), React.createElement("path", {
    d: "M6 12H2"
  }), React.createElement("path", {
    d: "M12 6V2"
  }), React.createElement("path", {
    d: "M12 22v-4"
  })));
};

module.exports.Database = function Database(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), React.createElement("path", {
    d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
  }), React.createElement("path", {
    d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
  })));
};

module.exports.Delete = function Delete(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
  }), React.createElement("path", {
    d: "m18 9-6 6"
  }), React.createElement("path", {
    d: "m12 9 6 6"
  })));
};

module.exports.Disc = function Disc(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })));
};

module.exports.DivideCircle = function DivideCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M8 12h8"
  }), React.createElement("path", {
    d: "M12 16h0"
  }), React.createElement("path", {
    d: "M12 8h0"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  })));
};

module.exports.DivideSquare = function DivideSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M8 12h8"
  }), React.createElement("path", {
    d: "M12 16h0"
  }), React.createElement("path", {
    d: "M12 8h0"
  })));
};

module.exports.Divide = function Divide(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "6",
    r: "2"
  }), React.createElement("path", {
    d: "M5 12h14"
  }), React.createElement("circle", {
    cx: "12",
    cy: "18",
    r: "2"
  })));
};

module.exports.DollarSign = function DollarSign(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 1v22"
  }), React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })));
};

module.exports.DownloadCloud = function DownloadCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m8 17 4 4 4-4"
  }), React.createElement("path", {
    d: "M12 12v9"
  }), React.createElement("path", {
    d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
  })));
};

module.exports.Download = function Download(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), React.createElement("path", {
    d: "m7 10 5 5 5-5"
  }), React.createElement("path", {
    d: "M12 15V3"
  })));
};

module.exports.Dribbble = function Dribbble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
  })));
};

module.exports.Droplet = function Droplet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z"
  }));
};

module.exports.Edit2 = function Edit2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  }));
};

module.exports.Edit3 = function Edit3(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 20h9"
  }), React.createElement("path", {
    d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
  })));
};

module.exports.Edit = function Edit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), React.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  })));
};

module.exports.ExternalLink = function ExternalLink(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), React.createElement("path", {
    d: "M15 3h6v6"
  }), React.createElement("path", {
    d: "M10 14 21 3"
  })));
};

module.exports.EyeOff = function EyeOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
  }), React.createElement("path", {
    d: "m1 1 22 22"
  })));
};

module.exports.Eye = function Eye(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })));
};

module.exports.Facebook = function Facebook(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  }));
};

module.exports.FastForward = function FastForward(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m13 19 9-7-9-7v14z"
  }), React.createElement("path", {
    d: "m2 19 9-7-9-7v14z"
  })));
};

module.exports.Feather = function Feather(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
  }), React.createElement("path", {
    d: "M16 8 2 22"
  }), React.createElement("path", {
    d: "M17.5 15H9"
  })));
};

module.exports.Figma = function Figma(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
  }), React.createElement("path", {
    d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
  }), React.createElement("path", {
    d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
  }), React.createElement("path", {
    d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
  }), React.createElement("path", {
    d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
  })));
};

module.exports.FileMinus = function FileMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), React.createElement("path", {
    d: "M14 2v6h6"
  }), React.createElement("path", {
    d: "M9 15h6"
  })));
};

module.exports.FilePlus = function FilePlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), React.createElement("path", {
    d: "M14 2v6h6"
  }), React.createElement("path", {
    d: "M12 18v-6"
  }), React.createElement("path", {
    d: "M9 15h6"
  })));
};

module.exports.FileText = function FileText(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), React.createElement("path", {
    d: "M14 2v6h6"
  }), React.createElement("path", {
    d: "M16 13H8"
  }), React.createElement("path", {
    d: "M16 17H8"
  }), React.createElement("path", {
    d: "M10 9H8"
  })));
};

module.exports.File = function File(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
  }), React.createElement("path", {
    d: "M13 2v7h7"
  })));
};

module.exports.Film = function Film(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "2.18",
    ry: "2.18"
  }), React.createElement("path", {
    d: "M7 2v20"
  }), React.createElement("path", {
    d: "M17 2v20"
  }), React.createElement("path", {
    d: "M2 12h20"
  }), React.createElement("path", {
    d: "M2 7h5"
  }), React.createElement("path", {
    d: "M2 17h5"
  }), React.createElement("path", {
    d: "M17 17h5"
  }), React.createElement("path", {
    d: "M17 7h5"
  })));
};

module.exports.Filter = function Filter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z"
  }));
};

module.exports.Flag = function Flag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
  }), React.createElement("path", {
    d: "M4 22v-7"
  })));
};

module.exports.FolderMinus = function FolderMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), React.createElement("path", {
    d: "M9 14h6"
  })));
};

module.exports.FolderPlus = function FolderPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), React.createElement("path", {
    d: "M12 11v6"
  }), React.createElement("path", {
    d: "M9 14h6"
  })));
};

module.exports.Folder = function Folder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }));
};

module.exports.Framer = function Framer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"
  }));
};

module.exports.Frown = function Frown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M16 16s-1.5-2-4-2-4 2-4 2"
  }), React.createElement("path", {
    d: "M9 9h.01"
  }), React.createElement("path", {
    d: "M15 9h.01"
  })));
};

module.exports.Gift = function Gift(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M20 12v10H4V12"
  }), React.createElement("path", {
    d: "M2 7h20v5H2z"
  }), React.createElement("path", {
    d: "M12 22V7"
  }), React.createElement("path", {
    d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
  }), React.createElement("path", {
    d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
  })));
};

module.exports.GitBranch = function GitBranch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M6 3v12"
  }), React.createElement("circle", {
    cx: "18",
    cy: "6",
    r: "3"
  }), React.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), React.createElement("path", {
    d: "M18 9a9 9 0 0 1-9 9"
  })));
};

module.exports.GitCommit = function GitCommit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), React.createElement("path", {
    d: "M1.05 12H7"
  }), React.createElement("path", {
    d: "M17.01 12h5.95"
  })));
};

module.exports.GitMerge = function GitMerge(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "3"
  }), React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), React.createElement("path", {
    d: "M6 21V9a9 9 0 0 0 9 9"
  })));
};

module.exports.GitPullRequest = function GitPullRequest(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "3"
  }), React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), React.createElement("path", {
    d: "M13 6h3a2 2 0 0 1 2 2v7"
  }), React.createElement("path", {
    d: "M6 9v12"
  })));
};

module.exports.Github = function Github(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));
};

module.exports.Gitlab = function Gitlab(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M22.65 14.39 12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
  }));
};

module.exports.Globe = function Globe(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M2 12h20"
  }), React.createElement("path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  })));
};

module.exports.Grid = function Grid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M3 3h7v7H3z"
  }), React.createElement("path", {
    d: "M14 3h7v7h-7z"
  }), React.createElement("path", {
    d: "M14 14h7v7h-7z"
  }), React.createElement("path", {
    d: "M3 14h7v7H3z"
  })));
};

module.exports.HardDrive = function HardDrive(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 12H2"
  }), React.createElement("path", {
    d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }), React.createElement("path", {
    d: "M6 16h.01"
  }), React.createElement("path", {
    d: "M10 16h.01"
  })));
};

module.exports.Hash = function Hash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 9h16"
  }), React.createElement("path", {
    d: "M4 15h16"
  }), React.createElement("path", {
    d: "M10 3 8 21"
  }), React.createElement("path", {
    d: "m16 3-2 18"
  })));
};

module.exports.Headphones = function Headphones(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M3 18v-6a9 9 0 0 1 18 0v6"
  }), React.createElement("path", {
    d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
  })));
};

module.exports.Heart = function Heart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
};

module.exports.HelpCircle = function HelpCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), React.createElement("path", {
    d: "M12 17h.01"
  })));
};

module.exports.Hexagon = function Hexagon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }));
};

module.exports.Home = function Home(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), React.createElement("path", {
    d: "M9 22V12h6v10"
  })));
};

module.exports.Image = function Image(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), React.createElement("path", {
    d: "m21 15-5-5L5 21"
  })));
};

module.exports.Inbox = function Inbox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 12h-6l-2 3h-4l-2-3H2"
  }), React.createElement("path", {
    d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  })));
};

module.exports.Info = function Info(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M12 16v-4"
  }), React.createElement("path", {
    d: "M12 8h.01"
  })));
};

module.exports.Instagram = function Instagram(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5"
  }), React.createElement("path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }), React.createElement("path", {
    d: "M17.5 6.5h.01"
  })));
};

module.exports.Italic = function Italic(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19 4h-9"
  }), React.createElement("path", {
    d: "M14 20H5"
  }), React.createElement("path", {
    d: "M15 4 9 20"
  })));
};

module.exports.Key = function Key(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"
  }));
};

module.exports.Layers = function Layers(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 2 2 7l10 5 10-5-10-5z"
  }), React.createElement("path", {
    d: "m2 17 10 5 10-5"
  }), React.createElement("path", {
    d: "m2 12 10 5 10-5"
  })));
};

module.exports.Layout = function Layout(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M3 9h18"
  }), React.createElement("path", {
    d: "M9 21V9"
  })));
};

module.exports.LifeBuoy = function LifeBuoy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), React.createElement("path", {
    d: "m4.93 4.93 4.24 4.24"
  }), React.createElement("path", {
    d: "m14.83 14.83 4.24 4.24"
  }), React.createElement("path", {
    d: "m14.83 9.17 4.24-4.24"
  }), React.createElement("path", {
    d: "m14.83 9.17 3.53-3.53"
  }), React.createElement("path", {
    d: "m4.93 19.07 4.24-4.24"
  })));
};

module.exports.Link2 = function Link2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
  }), React.createElement("path", {
    d: "M8 12h8"
  })));
};

module.exports.Link = function Link(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }), React.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  })));
};

module.exports.Linkedin = function Linkedin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), React.createElement("path", {
    d: "M2 9h4v12H2z"
  }), React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  })));
};

module.exports.List = function List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M8 6h13"
  }), React.createElement("path", {
    d: "M8 12h13"
  }), React.createElement("path", {
    d: "M8 18h13"
  }), React.createElement("path", {
    d: "M3 6h.01"
  }), React.createElement("path", {
    d: "M3 12h.01"
  }), React.createElement("path", {
    d: "M3 18h.01"
  })));
};

module.exports.Loader = function Loader(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 2v4"
  }), React.createElement("path", {
    d: "M12 18v4"
  }), React.createElement("path", {
    d: "m4.93 4.93 2.83 2.83"
  }), React.createElement("path", {
    d: "m16.24 16.24 2.83 2.83"
  }), React.createElement("path", {
    d: "M2 12h4"
  }), React.createElement("path", {
    d: "M18 12h4"
  }), React.createElement("path", {
    d: "m4.93 19.07 2.83-2.83"
  }), React.createElement("path", {
    d: "m16.24 7.76 2.83-2.83"
  })));
};

module.exports.Lock = function Lock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })));
};

module.exports.LogIn = function LogIn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
  }), React.createElement("path", {
    d: "m10 17 5-5-5-5"
  }), React.createElement("path", {
    d: "M15 12H3"
  })));
};

module.exports.LogOut = function LogOut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), React.createElement("path", {
    d: "m16 17 5-5-5-5"
  }), React.createElement("path", {
    d: "M21 12H9"
  })));
};

module.exports.Mail = function Mail(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), React.createElement("path", {
    d: "m22 6-10 7L2 6"
  })));
};

module.exports.MapPin = function MapPin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })));
};

module.exports.Map = function Map(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"
  }), React.createElement("path", {
    d: "M8 2v16"
  }), React.createElement("path", {
    d: "M16 6v16"
  })));
};

module.exports.Maximize2 = function Maximize2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M15 3h6v6"
  }), React.createElement("path", {
    d: "M9 21H3v-6"
  }), React.createElement("path", {
    d: "m21 3-7 7"
  }), React.createElement("path", {
    d: "m3 21 7-7"
  })));
};

module.exports.Maximize = function Maximize(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
  }));
};

module.exports.Meh = function Meh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M8 15h8"
  }), React.createElement("path", {
    d: "M9 9h.01"
  }), React.createElement("path", {
    d: "M15 9h.01"
  })));
};

module.exports.Menu = function Menu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M3 12h18"
  }), React.createElement("path", {
    d: "M3 6h18"
  }), React.createElement("path", {
    d: "M3 18h18"
  })));
};

module.exports.MessageCircle = function MessageCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }));
};

module.exports.MessageSquare = function MessageSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
};

module.exports.MicOff = function MicOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 1 22 22"
  }), React.createElement("path", {
    d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
  }), React.createElement("path", {
    d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
  }), React.createElement("path", {
    d: "M12 19v4"
  }), React.createElement("path", {
    d: "M8 23h8"
  })));
};

module.exports.Mic = function Mic(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
  }), React.createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), React.createElement("path", {
    d: "M12 19v4"
  }), React.createElement("path", {
    d: "M8 23h8"
  })));
};

module.exports.Minimize2 = function Minimize2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 14h6v6"
  }), React.createElement("path", {
    d: "M20 10h-6V4"
  }), React.createElement("path", {
    d: "m14 10 7-7"
  }), React.createElement("path", {
    d: "m3 21 7-7"
  })));
};

module.exports.Minimize = function Minimize(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
  }));
};

module.exports.MinusCircle = function MinusCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M8 12h8"
  })));
};

module.exports.MinusSquare = function MinusSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M8 12h8"
  })));
};

module.exports.Minus = function Minus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 12h14"
  }));
};

module.exports.Monitor = function Monitor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M8 21h8"
  }), React.createElement("path", {
    d: "M12 17v4"
  })));
};

module.exports.Moon = function Moon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }));
};

module.exports.MoreHorizontal = function MoreHorizontal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  })));
};

module.exports.MoreVertical = function MoreVertical(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  })));
};

module.exports.MousePointer = function MousePointer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
  }), React.createElement("path", {
    d: "m13 13 6 6"
  })));
};

module.exports.Move = function Move(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m5 9-3 3 3 3"
  }), React.createElement("path", {
    d: "m9 5 3-3 3 3"
  }), React.createElement("path", {
    d: "m15 19-3 3-3-3"
  }), React.createElement("path", {
    d: "m19 9 3 3-3 3"
  }), React.createElement("path", {
    d: "M2 12h20"
  }), React.createElement("path", {
    d: "M12 2v20"
  })));
};

module.exports.Music = function Music(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M9 18V5l12-2v13"
  }), React.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), React.createElement("circle", {
    cx: "18",
    cy: "16",
    r: "3"
  })));
};

module.exports.Navigation2 = function Navigation2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 2 7 19-7-4-7 4 7-19z"
  }));
};

module.exports.Navigation = function Navigation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m3 11 19-9-9 19-2-8-8-2z"
  }));
};

module.exports.Octagon = function Octagon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"
  }));
};

module.exports.Package = function Package(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m16.5 9.4-9-5.19"
  }), React.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), React.createElement("path", {
    d: "M3.27 6.96 12 12.01l8.73-5.05"
  }), React.createElement("path", {
    d: "M12 22.08V12"
  })));
};

module.exports.Paperclip = function Paperclip(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
  }));
};

module.exports.PauseCircle = function PauseCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M10 15V9"
  }), React.createElement("path", {
    d: "M14 15V9"
  })));
};

module.exports.Pause = function Pause(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M6 4h4v16H6z"
  }), React.createElement("path", {
    d: "M14 4h4v16h-4z"
  })));
};

module.exports.PenTool = function PenTool(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m12 19 7-7 3 3-7 7-3-3z"
  }), React.createElement("path", {
    d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
  }), React.createElement("path", {
    d: "m2 2 7.586 7.586"
  }), React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "2"
  })));
};

module.exports.Percent = function Percent(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19 5 5 19"
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "2.5"
  }), React.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "2.5"
  })));
};

module.exports.PhoneCall = function PhoneCall(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
};

module.exports.PhoneForwarded = function PhoneForwarded(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m19 1 4 4-4 4"
  }), React.createElement("path", {
    d: "M15 5h8"
  }), React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })));
};

module.exports.PhoneIncoming = function PhoneIncoming(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 2v6h6"
  }), React.createElement("path", {
    d: "m23 1-7 7"
  }), React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })));
};

module.exports.PhoneMissed = function PhoneMissed(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m23 1-6 6"
  }), React.createElement("path", {
    d: "m17 1 6 6"
  }), React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })));
};

module.exports.PhoneOff = function PhoneOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
  }), React.createElement("path", {
    d: "M23 1 1 23"
  })));
};

module.exports.PhoneOutgoing = function PhoneOutgoing(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 7V1h-6"
  }), React.createElement("path", {
    d: "m16 8 7-7"
  }), React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })));
};

module.exports.Phone = function Phone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
};

module.exports.PieChart = function PieChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21.21 15.89A10 10 0 1 1 8 2.83"
  }), React.createElement("path", {
    d: "M22 12A10 10 0 0 0 12 2v10z"
  })));
};

module.exports.PlayCircle = function PlayCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m10 8 6 4-6 4V8z"
  })));
};

module.exports.Play = function Play(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m5 3 14 9-14 9V3z"
  }));
};

module.exports.PlusCircle = function PlusCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M12 8v8"
  }), React.createElement("path", {
    d: "M8 12h8"
  })));
};

module.exports.PlusSquare = function PlusSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M12 8v8"
  }), React.createElement("path", {
    d: "M8 12h8"
  })));
};

module.exports.Plus = function Plus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12 5v14"
  }), React.createElement("path", {
    d: "M5 12h14"
  })));
};

module.exports.Pocket = function Pocket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
  }), React.createElement("path", {
    d: "m8 10 4 4 4-4"
  })));
};

module.exports.Power = function Power(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M18.36 6.64a9 9 0 1 1-12.73 0"
  }), React.createElement("path", {
    d: "M12 2v10"
  })));
};

module.exports.Printer = function Printer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M6 9V2h12v7"
  }), React.createElement("path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
  }), React.createElement("path", {
    d: "M6 14h12v8H6z"
  })));
};

module.exports.Radio = function Radio(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), React.createElement("path", {
    d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
  })));
};

module.exports.RefreshCcw = function RefreshCcw(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M1 4v6h6"
  }), React.createElement("path", {
    d: "M23 20v-6h-6"
  }), React.createElement("path", {
    d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"
  })));
};

module.exports.RefreshCw = function RefreshCw(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 4v6h-6"
  }), React.createElement("path", {
    d: "M1 20v-6h6"
  }), React.createElement("path", {
    d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
  })));
};

module.exports.Repeat = function Repeat(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m17 1 4 4-4 4"
  }), React.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), React.createElement("path", {
    d: "m7 23-4-4 4-4"
  }), React.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  })));
};

module.exports.Rewind = function Rewind(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m11 19-9-7 9-7v14z"
  }), React.createElement("path", {
    d: "m22 19-9-7 9-7v14z"
  })));
};

module.exports.RotateCcw = function RotateCcw(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M1 4v6h6"
  }), React.createElement("path", {
    d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
  })));
};

module.exports.RotateCw = function RotateCw(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 4v6h-6"
  }), React.createElement("path", {
    d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
  })));
};

module.exports.Rss = function Rss(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 11a9 9 0 0 1 9 9"
  }), React.createElement("path", {
    d: "M4 4a16 16 0 0 1 16 16"
  }), React.createElement("circle", {
    cx: "5",
    cy: "19",
    r: "1"
  })));
};

module.exports.Save = function Save(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    d: "M17 21v-8H7v8"
  }), React.createElement("path", {
    d: "M7 3v5h8"
  })));
};

module.exports.Scissors = function Scissors(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), React.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), React.createElement("path", {
    d: "M20 4 8.12 15.88"
  }), React.createElement("path", {
    d: "M14.47 14.48 20 20"
  }), React.createElement("path", {
    d: "M8.12 8.12 12 12"
  })));
};

module.exports.Search = function Search(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), React.createElement("path", {
    d: "m21 21-4.35-4.35"
  })));
};

module.exports.Send = function Send(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22 2 11 13"
  }), React.createElement("path", {
    d: "m22 2-7 20-4-9-9-4 20-7z"
  })));
};

module.exports.Server = function Server(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2"
  }), React.createElement("rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M6 6h.01"
  }), React.createElement("path", {
    d: "M6 18h.01"
  })));
};

module.exports.Settings = function Settings(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  })));
};

module.exports.Share2 = function Share2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), React.createElement("path", {
    d: "m8.59 13.51 6.83 3.98"
  }), React.createElement("path", {
    d: "m15.41 6.51-6.82 3.98"
  })));
};

module.exports.Share = function Share(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
  }), React.createElement("path", {
    d: "m16 6-4-4-4 4"
  }), React.createElement("path", {
    d: "M12 2v13"
  })));
};

module.exports.ShieldOff = function ShieldOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
  }), React.createElement("path", {
    d: "M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
  }), React.createElement("path", {
    d: "m1 1 22 22"
  })));
};

module.exports.Shield = function Shield(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }));
};

module.exports.ShoppingBag = function ShoppingBag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
  }), React.createElement("path", {
    d: "M3 6h18"
  }), React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  })));
};

module.exports.ShoppingCart = function ShoppingCart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "9",
    cy: "21",
    r: "1"
  }), React.createElement("circle", {
    cx: "20",
    cy: "21",
    r: "1"
  }), React.createElement("path", {
    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
  })));
};

module.exports.Shuffle = function Shuffle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 3h5v5"
  }), React.createElement("path", {
    d: "M4 20 21 3"
  }), React.createElement("path", {
    d: "M21 16v5h-5"
  }), React.createElement("path", {
    d: "m15 15 6 6"
  }), React.createElement("path", {
    d: "m4 4 5 5"
  })));
};

module.exports.Sidebar = function Sidebar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M9 3v18"
  })));
};

module.exports.SkipBack = function SkipBack(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19 20 9 12l10-8v16z"
  }), React.createElement("path", {
    d: "M5 19V5"
  })));
};

module.exports.SkipForward = function SkipForward(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m5 4 10 8-10 8V4z"
  }), React.createElement("path", {
    d: "M19 5v14"
  })));
};

module.exports.Slack = function Slack(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
  }), React.createElement("path", {
    d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
  }), React.createElement("path", {
    d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
  }), React.createElement("path", {
    d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
  }), React.createElement("path", {
    d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
  }), React.createElement("path", {
    d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
  }), React.createElement("path", {
    d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
  }), React.createElement("path", {
    d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
  })));
};

module.exports.Slash = function Slash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m4.93 4.93 14.14 14.14"
  })));
};

module.exports.Sliders = function Sliders(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 21v-7"
  }), React.createElement("path", {
    d: "M4 10V3"
  }), React.createElement("path", {
    d: "M12 21v-9"
  }), React.createElement("path", {
    d: "M12 8V3"
  }), React.createElement("path", {
    d: "M20 21v-5"
  }), React.createElement("path", {
    d: "M20 12V3"
  }), React.createElement("path", {
    d: "M1 14h6"
  }), React.createElement("path", {
    d: "M9 8h6"
  }), React.createElement("path", {
    d: "M17 16h6"
  })));
};

module.exports.Smartphone = function Smartphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M12 18h.01"
  })));
};

module.exports.Smile = function Smile(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2"
  }), React.createElement("path", {
    d: "M9 9h.01"
  }), React.createElement("path", {
    d: "M15 9h.01"
  })));
};

module.exports.Speaker = function Speaker(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2",
    ry: "2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "4"
  }), React.createElement("path", {
    d: "M12 6h.01"
  })));
};

module.exports.Square = function Square(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    rx: "2",
    ry: "2"
  }));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  }));
};

module.exports.StopCircle = function StopCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "M9 9h6v6H9z"
  })));
};

module.exports.Sun = function Sun(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), React.createElement("path", {
    d: "M12 1v2"
  }), React.createElement("path", {
    d: "M12 21v2"
  }), React.createElement("path", {
    d: "m4.22 4.22 1.42 1.42"
  }), React.createElement("path", {
    d: "m18.36 18.36 1.42 1.42"
  }), React.createElement("path", {
    d: "M1 12h2"
  }), React.createElement("path", {
    d: "M21 12h2"
  }), React.createElement("path", {
    d: "m4.22 19.78 1.42-1.42"
  }), React.createElement("path", {
    d: "m18.36 5.64 1.42-1.42"
  })));
};

module.exports.Sunrise = function Sunrise(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0"
  }), React.createElement("path", {
    d: "M12 2v7"
  }), React.createElement("path", {
    d: "m4.22 10.22 1.42 1.42"
  }), React.createElement("path", {
    d: "M1 18h2"
  }), React.createElement("path", {
    d: "M21 18h2"
  }), React.createElement("path", {
    d: "m18.36 11.64 1.42-1.42"
  }), React.createElement("path", {
    d: "M23 22H1"
  }), React.createElement("path", {
    d: "m8 6 4-4 4 4"
  })));
};

module.exports.Sunset = function Sunset(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0"
  }), React.createElement("path", {
    d: "M12 9V2"
  }), React.createElement("path", {
    d: "m4.22 10.22 1.42 1.42"
  }), React.createElement("path", {
    d: "M1 18h2"
  }), React.createElement("path", {
    d: "M21 18h2"
  }), React.createElement("path", {
    d: "m18.36 11.64 1.42-1.42"
  }), React.createElement("path", {
    d: "M23 22H1"
  }), React.createElement("path", {
    d: "m16 5-4 4-4-4"
  })));
};

module.exports.Tablet = function Tablet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "16",
    height: "20",
    x: "4",
    y: "2",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M12 18h.01"
  })));
};

module.exports.Tag = function Tag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
  }), React.createElement("path", {
    d: "M7 7h.01"
  })));
};

module.exports.Target = function Target(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  })));
};

module.exports.Terminal = function Terminal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m4 17 6-6-6-6"
  }), React.createElement("path", {
    d: "M12 19h8"
  })));
};

module.exports.Thermometer = function Thermometer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
  }));
};

module.exports.ThumbsDown = function ThumbsDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
  }));
};

module.exports.ThumbsUp = function ThumbsUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
  }));
};

module.exports.ToggleLeft = function ToggleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "22",
    height: "14",
    x: "1",
    y: "5",
    rx: "7",
    ry: "7"
  }), React.createElement("circle", {
    cx: "8",
    cy: "12",
    r: "3"
  })));
};

module.exports.ToggleRight = function ToggleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "22",
    height: "14",
    x: "1",
    y: "5",
    rx: "7",
    ry: "7"
  }), React.createElement("circle", {
    cx: "16",
    cy: "12",
    r: "3"
  })));
};

module.exports.Tool = function Tool(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
  }));
};

module.exports.Trash2 = function Trash2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M3 6h18"
  }), React.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), React.createElement("path", {
    d: "M10 11v6"
  }), React.createElement("path", {
    d: "M14 11v6"
  })));
};

module.exports.Trash = function Trash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M3 6h18"
  }), React.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  })));
};

module.exports.Trello = function Trello(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M7 7h3v9H7z"
  }), React.createElement("path", {
    d: "M14 7h3v5h-3z"
  })));
};

module.exports.TrendingDown = function TrendingDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m23 18-9.5-9.5-5 5L1 6"
  }), React.createElement("path", {
    d: "M17 18h6v-6"
  })));
};

module.exports.TrendingUp = function TrendingUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m23 6-9.5 9.5-5-5L1 18"
  }), React.createElement("path", {
    d: "M17 6h6v6"
  })));
};

module.exports.Triangle = function Triangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }));
};

module.exports.Truck = function Truck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M1 3h15v13H1z"
  }), React.createElement("path", {
    d: "M16 8h4l3 3v5h-7V8z"
  }), React.createElement("circle", {
    cx: "5.5",
    cy: "18.5",
    r: "2.5"
  }), React.createElement("circle", {
    cx: "18.5",
    cy: "18.5",
    r: "2.5"
  })));
};

module.exports.Tv = function Tv(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "20",
    height: "15",
    x: "2",
    y: "7",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "m17 2-5 5-5-5"
  })));
};

module.exports.Twitch = function Twitch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
  }));
};

module.exports.Twitter = function Twitter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  }));
};

module.exports.Type = function Type(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 7V4h16v3"
  }), React.createElement("path", {
    d: "M9 20h6"
  }), React.createElement("path", {
    d: "M12 4v16"
  })));
};

module.exports.Umbrella = function Umbrella(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
  }));
};

module.exports.Underline = function Underline(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
  }), React.createElement("path", {
    d: "M4 21h16"
  })));
};

module.exports.Unlock = function Unlock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 9.9-1"
  })));
};

module.exports.UploadCloud = function UploadCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m16 16-4-4-4 4"
  }), React.createElement("path", {
    d: "M12 12v9"
  }), React.createElement("path", {
    d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
  }), React.createElement("path", {
    d: "m16 16-4-4-4 4"
  })));
};

module.exports.Upload = function Upload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), React.createElement("path", {
    d: "m17 8-5-5-5 5"
  }), React.createElement("path", {
    d: "M12 3v12"
  })));
};

module.exports.UserCheck = function UserCheck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "m17 11 2 2 4-4"
  })));
};

module.exports.UserMinus = function UserMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "M23 11h-6"
  })));
};

module.exports.UserPlus = function UserPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "M20 8v6"
  }), React.createElement("path", {
    d: "M23 11h-6"
  })));
};

module.exports.UserX = function UserX(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "m18 8 5 5"
  }), React.createElement("path", {
    d: "m23 8-5 5"
  })));
};

module.exports.User = function User(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })));
};

module.exports.Users = function Users(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })));
};

module.exports.VideoOff = function VideoOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
  }), React.createElement("path", {
    d: "m1 1 22 22"
  })));
};

module.exports.Video = function Video(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m23 7-7 5 7 5V7z"
  }), React.createElement("rect", {
    width: "15",
    height: "14",
    x: "1",
    y: "5",
    rx: "2",
    ry: "2"
  })));
};

module.exports.Voicemail = function Voicemail(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "5.5",
    cy: "11.5",
    r: "4.5"
  }), React.createElement("circle", {
    cx: "18.5",
    cy: "11.5",
    r: "4.5"
  }), React.createElement("path", {
    d: "M5.5 16h13"
  })));
};

module.exports.Volume1 = function Volume1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M11 5 6 9H2v6h4l5 4V5z"
  }), React.createElement("path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
  })));
};

module.exports.Volume2 = function Volume2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M11 5 6 9H2v6h4l5 4V5z"
  }), React.createElement("path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
  })));
};

module.exports.VolumeX = function VolumeX(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M11 5 6 9H2v6h4l5 4V5z"
  }), React.createElement("path", {
    d: "m23 9-6 6"
  }), React.createElement("path", {
    d: "m17 9 6 6"
  })));
};

module.exports.Volume = function Volume(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11 5 6 9H2v6h4l5 4V5z"
  }));
};

module.exports.Watch = function Watch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7"
  }), React.createElement("path", {
    d: "M12 9v3l1.5 1.5"
  }), React.createElement("path", {
    d: "m16.51 17.35-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
  })));
};

module.exports.WifiOff = function WifiOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m1 1 22 22"
  }), React.createElement("path", {
    d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
  }), React.createElement("path", {
    d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
  }), React.createElement("path", {
    d: "M10.71 5.05A16 16 0 0 1 22.58 9"
  }), React.createElement("path", {
    d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
  }), React.createElement("path", {
    d: "M8.53 16.11a6 6 0 0 1 6.95 0"
  }), React.createElement("path", {
    d: "M12 20h.01"
  })));
};

module.exports.Wifi = function Wifi(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M5 12.55a11 11 0 0 1 14.08 0"
  }), React.createElement("path", {
    d: "M1.42 9a16 16 0 0 1 21.16 0"
  }), React.createElement("path", {
    d: "M8.53 16.11a6 6 0 0 1 6.95 0"
  }), React.createElement("path", {
    d: "M12 20h.01"
  })));
};

module.exports.Wind = function Wind(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
  }));
};

module.exports.XCircle = function XCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("path", {
    d: "m15 9-6 6"
  }), React.createElement("path", {
    d: "m9 9 6 6"
  })));
};

module.exports.XOctagon = function XOctagon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"
  }), React.createElement("path", {
    d: "m15 9-6 6"
  }), React.createElement("path", {
    d: "m9 9 6 6"
  })));
};

module.exports.XSquare = function XSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }), React.createElement("path", {
    d: "m9 9 6 6"
  }), React.createElement("path", {
    d: "m15 9-6 6"
  })));
};

module.exports.X = function X(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M18 6 6 18"
  }), React.createElement("path", {
    d: "m6 6 12 12"
  })));
};

module.exports.Youtube = function Youtube(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
  }), React.createElement("path", {
    d: "m9.75 15.02 5.75-3.27-5.75-3.27v6.54z"
  })));
};

module.exports.ZapOff = function ZapOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M12.41 6.75 13 2l-2.43 2.92"
  }), React.createElement("path", {
    d: "M18.57 12.91 21 10h-5.34"
  }), React.createElement("path", {
    d: "m8 8-5 6h9l-1 8 5-6"
  }), React.createElement("path", {
    d: "m1 1 22 22"
  })));
};

module.exports.Zap = function Zap(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z"
  }));
};

module.exports.ZoomIn = function ZoomIn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), React.createElement("path", {
    d: "m21 21-4.35-4.35"
  }), React.createElement("path", {
    d: "M11 8v6"
  }), React.createElement("path", {
    d: "M8 11h6"
  })));
};

module.exports.ZoomOut = function ZoomOut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), React.createElement("path", {
    d: "m21 21-4.35-4.35"
  }), React.createElement("path", {
    d: "M8 11h6"
  })));
};