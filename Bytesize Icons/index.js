function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.Activity = function Activity(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 16h7l3 13 4-26 3 13h7"
  }));
};

module.exports.Alert = function Alert(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m16 3 14 26H2zm0 8v8m0 4v2"
  }));
};

module.exports.Archive = function Archive(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 10v18h24V10M2 4v6h28V4zm10 11h8"
  }));
};

module.exports.ArrowBottom = function ArrowBottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m6 22 10 8 10-8m-10 8V2"
  }));
};

module.exports.ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 6 2 16l8 10M2 16h28"
  }));
};

module.exports.ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m22 6 8 10-8 10m8-10H2"
  }));
};

module.exports.ArrowTop = function ArrowTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m6 10 10-8 10 8M16 2v28"
  }));
};

module.exports.Backwards = function Backwards(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16 2 2 16l14 14V16l14 14V2L16 16z"
  }));
};

module.exports.Bag = function Bag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 9v20h22V9zm5 0s0-6 6-6 6 6 6 6"
  }));
};

module.exports.Ban = function Ban(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "14"
  }), React.createElement("path", {
    d: "m6 6 20 20"
  })));
};

module.exports.Bell = function Bell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 17c0-5 1-11 8-11s8 6 8 11 3 8 3 8H5s3-3 3-8zm12 8s0 4-4 4-4-4-4-4m4-22v3"
  }));
};

module.exports.Book = function Book(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1zm0 0v21"
  }));
};

module.exports.Bookmark = function Bookmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 2h20v28L16 20 6 30z"
  }));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 6v24h28V6zm0 9h28M7 3v6m6-6v6m6-6v6m6-6v6"
  }));
};

module.exports.Camera = function Camera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M2 8h7l3-4h8l3 4h7v18H2z"
  }), React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "5"
  })));
};

module.exports.CaretBottom = function CaretBottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M30 10 16 26 2 10z"
  }));
};

module.exports.CaretLeft = function CaretLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M22 30 6 16 22 2z"
  }));
};

module.exports.CaretRight = function CaretRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m10 30 16-14L10 2z"
  }));
};

module.exports.CaretTop = function CaretTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M30 22 16 6 2 22z"
  }));
};

module.exports.Cart = function Cart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M6 6h24l-3 13H9m18 4H10L5 2H2"
  }), React.createElement("circle", {
    cx: "25",
    cy: "27",
    r: "2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "27",
    r: "2"
  })));
};

module.exports.Checkmark = function Checkmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m2 20 10 8L30 4"
  }));
};

module.exports.ChevronBottom = function ChevronBottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M30 12 16 24 2 12"
  }));
};

module.exports.ChevronLeft = function ChevronLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M20 30 8 16 20 2"
  }));
};

module.exports.ChevronRight = function ChevronRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 30 12-14L12 2"
  }));
};

module.exports.ChevronTop = function ChevronTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M30 20 16 8 2 20"
  }));
};

module.exports.Clipboard = function Clipboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 2v4h8V2h-8zm-1 2H6v26h20V4h-5"
  }));
};

module.exports.Clock = function Clock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "14"
  }), React.createElement("path", {
    d: "M16 8v8l4 4"
  })));
};

module.exports.Close = function Close(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 30 30 2m0 28L2 2"
  }));
};

module.exports.Code = function Code(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m10 9-7 8 7 8M22 9l7 8-7 8M18 7l-4 20"
  }));
};

module.exports.Compose = function Compose(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M27 15v15H2V5h15m13 1-4-4L9 19l-2 6 6-2zm-8 0 4 4zM9 19l4 4z"
  }));
};

module.exports.Creditcard = function Creditcard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M2 7v18h28V7zm3 11h4m-4 3h6"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M2 11v2h28v-2z"
  })));
};

module.exports.Desktop = function Desktop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 29s0-5 6-5 6 5 6 5H10zM2 6v17h28V6H2z"
  }));
};

module.exports.Download = function Download(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4 5 4 5-4m-5-10v14"
  }));
};

module.exports.Edit = function Edit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m30 7-5-5L5 22l-2 7 7-2zm-9-1 5 5zM5 22l5 5z"
  }));
};

module.exports.Eject = function Eject(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M30 18 16 5 2 18zM2 25h28"
  }));
};

module.exports.EllipsisHorizontal = function EllipsisHorizontal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "7",
    cy: "16",
    r: "2"
  }), React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "2"
  }), React.createElement("circle", {
    cx: "25",
    cy: "16",
    r: "2"
  })));
};

module.exports.EllipsisVertical = function EllipsisVertical(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "16",
    cy: "7",
    r: "2"
  }), React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "2"
  }), React.createElement("circle", {
    cx: "16",
    cy: "25",
    r: "2"
  })));
};

module.exports.End = function End(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M24 2v14L10 2v28l14-14v14"
  }));
};

module.exports.Export = function Export(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M28 22v8H4v-8M16 4v20M8 12l8-8 8 8"
  }));
};

module.exports.External = function External(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M14 9H3v20h20V18M18 4h10v10m0-10L14 18"
  }));
};

module.exports.Eye = function Eye(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "17",
    cy: "15",
    r: "1"
  }), React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "6"
  }), React.createElement("path", {
    d: "M2 16S7 6 16 6s14 10 14 10-5 10-14 10S2 16 2 16z"
  })));
};

module.exports.Feed = function Feed(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "6",
    cy: "26",
    r: "2",
    fill: "currentColor"
  }), React.createElement("path", {
    d: "M4 15c7 0 13 6 13 13M4 6c13 0 22 9 22 22"
  })));
};

module.exports.File = function File(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 2v28h20V10l-8-8zm12 0v8h8"
  }));
};

module.exports.Filter = function Filter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 5s4-2 14-2 14 2 14 2L19 18v9l-6 3V18L2 5z"
  }));
};

module.exports.Fire = function Fire(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M15 30c-15 0 0-17-3-27 16 10 20 27 3 27zm2 0c-7 0 0-10 0-10s7 10 0 10z"
  }));
};

module.exports.Flag = function Flag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 2v28M6 6h20l-6 6 6 6H6"
  }));
};

module.exports.FolderOpen = function FolderOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 28h24l2-16H14l-4-4H2zm24-16V4H4v4"
  }));
};

module.exports.Folder = function Folder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 26h28V7H14l-4-3H2zm28-14H2"
  }));
};

module.exports.Forwards = function Forwards(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m16 2 14 14-14 14V16L2 30V2l14 14z"
  }));
};

module.exports.FullscreenExit = function FullscreenExit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 12h8V4m8 0v8h8M4 20h8v8m16-8h-8v8"
  }));
};

module.exports.Fullscreen = function Fullscreen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 12V4h8m8 0h8v8M4 20v8h8m16-8v8h-8"
  }));
};

module.exports.Gift = function Gift(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 14v16h24V14M2 9v5h28V9zm14 0s-2-9-8-6 8 6 8 6 2-9 8-6-8 6-8 6m0 0v21"
  }));
};

module.exports.Github = function Github(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M32 0C14 0 0 14 0 32c0 21 19 30 22 30 2 0 2-1 2-2v-5c-7 2-10-2-11-5 0 0 0-1-2-3-1-1-5-3-1-3 3 0 5 4 5 4 3 4 7 3 9 2 0-2 2-4 2-4-8-1-14-4-14-15 0-4 1-7 3-9 0 0-2-4 0-9 0 0 5 0 9 4 3-2 13-2 16 0 4-4 9-4 9-4 2 7 0 9 0 9 2 2 3 5 3 9 0 11-7 14-14 15 1 1 2 3 2 6v8c0 1 0 2 2 2 3 0 22-9 22-30C64 14 50 0 32 0z"
  }));
};

module.exports.Heart = function Heart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12-12 12-12 12-9-8-12-12z"
  }));
};

module.exports.Home = function Home(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 20v10H4V12L16 2l12 10v18h-8V20z"
  }));
};

module.exports.Import = function Import(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M28 22v8H4v-8M16 4v20m-8-8 8 8 8-8"
  }));
};

module.exports.Inbox = function Inbox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 15v10h28V15l-4-8H6zm0 0h8s1 5 6 5 6-5 6-5h8"
  }));
};

module.exports.Info = function Info(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M16 14v9m0-15v2"
  }), React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "14"
  })));
};

module.exports.Lightning = function Lightning(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m18 13 8-11L8 13l6 6-8 11 18-11z"
  }));
};

module.exports.Link = function Link(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M18 8s6-6 9-3 2 7-3 11-8 5-10 1m0 7s-6 6-9 3-2-7 3-11 8-5 10-1"
  }));
};

module.exports.Location = function Location(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "16",
    cy: "11",
    r: "4"
  }), React.createElement("path", {
    d: "M24 15c-3 7-8 15-8 15s-5-8-8-15 2-13 8-13 11 6 8 13z"
  })));
};

module.exports.Lock = function Lock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M5 15v15h22V15zm4 0C9 9 9 5 16 5s7 4 7 10m-7 5v3"
  }), React.createElement("circle", {
    cx: "16",
    cy: "24",
    r: "1"
  })));
};

module.exports.Mail = function Mail(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 26h28V6H2zM2 6l14 10L30 6"
  }));
};

module.exports.Menu = function Menu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 8h24M4 16h24M4 24h24"
  }));
};

module.exports.Message = function Message(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 4h28v18H16l-8 7v-7H2z"
  }));
};

module.exports.Microphone = function Microphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16 2c-4 0-4 4-4 4v10s0 4 4 4 4-4 4-4V6s0-4-4-4zM8 17s0 7 8 7 8-7 8-7M13 29h6m-3-5v5"
  }));
};

module.exports.Minus = function Minus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 16h28"
  }));
};

module.exports.Mobile = function Mobile(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M21 2H11c-1 0-2 1-2 2v24c0 1 1 2 2 2h10c1 0 2-1 2-2V4c0-1-1-2-2-2zM9 5h14M9 27h14"
  }));
};

module.exports.Moon = function Moon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M14 2C9 2 3 7 3 15s6 14 14 14 13-6 13-11C19 25 7 13 14 2z"
  }));
};

module.exports.Move = function Move(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 16h26M16 3v26M12 7l4-4 4 4m-8 18 4 4 4-4m5-13 4 4-4 4M7 12l-4 4 4 4"
  }));
};

module.exports.Music = function Music(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M11 25V6l13-3v20M11 13l13-3"
  }), React.createElement("ellipse", {
    cx: "7",
    cy: "25",
    rx: "4",
    ry: "5"
  }), React.createElement("ellipse", {
    cx: "20",
    cy: "23",
    rx: "4",
    ry: "5"
  })));
};

module.exports.Mute = function Mute(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M20 16c0-8-5-14-5-14l-7 8H2v12h6l7 8s5-6 5-14z"
  }));
};

module.exports.Options = function Options(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M28 6H4m24 10H4m24 10H4M24 3v6M8 13v6m12 4v6"
  }));
};

module.exports.Paperclip = function Paperclip(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 9v15c0 4 3 6 6 6s6-2 6-6V6c0-3-2-4-4-4s-4 1-4 4v17c0 1 1 2 2 2s2-1 2-2V9"
  }));
};

module.exports.Pause = function Pause(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M23 2v28M9 2v28"
  }));
};

module.exports.Photo = function Photo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "m20 24-8-8L2 26V2h28v22m-14-4 6-6 8 8v8H2v-6"
  }), React.createElement("circle", {
    cx: "10",
    cy: "9",
    r: "3"
  })));
};

module.exports.Play = function Play(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M10 2v28l14-14z"
  }));
};

module.exports.Plus = function Plus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M16 2v28M2 16h28"
  }));
};

module.exports.Portfolio = function Portfolio(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M29 17v11H3V17M2 8h28v8s-6 4-14 4-14-4-14-4V8zm14 14v-4m4-10s0-4-4-4-4 4-4 4"
  }));
};

module.exports.Print = function Print(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M7 25H2V9h28v16h-5M7 19v11h18V19zM25 9V2H7v7m15 5h3"
  }));
};

module.exports.Reload = function Reload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M29 16c0 6-5 13-13 13S3 22 3 16 8 3 16 3c5 0 9 3 11 6m-7 1 7-1 1-7"
  }));
};

module.exports.Reply = function Reply(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m10 6-7 8 7 8m-7-8h15c8 0 12 4 12 12"
  }));
};

module.exports.Search = function Search(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "12"
  }), React.createElement("path", {
    d: "m23 23 7 7"
  })));
};

module.exports.Send = function Send(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M2 16 30 2 16 30l-4-10zM30 2 12 20"
  }));
};

module.exports.Settings = function Settings(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M13 2v4l-2 1-3-3-4 4 3 3-1 2H2v6h4l1 2-3 3 4 4 3-3 2 1v4h6v-4l2-1 3 3 4-4-3-3 1-2h4v-6h-4l-1-2 3-3-4-4-3 3-2-1V2z"
  }), React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "4"
  })));
};

module.exports.SignIn = function SignIn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M3 16h20m-8-8 8 8-8 8m6-20h8v24h-8"
  }));
};

module.exports.SignOut = function SignOut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M28 16H8m12-8 8 8-8 8m-9 4H3V4h8"
  }));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m16 2 4 10h10l-8 7 3 11-9-7-9 7 3-11-8-7h10z"
  }));
};

module.exports.Start = function Start(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M8 2v14L22 2v28L8 16v14"
  }));
};

module.exports.Tag = function Tag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "24",
    cy: "8",
    r: "2"
  }), React.createElement("path", {
    d: "M2 18 18 2h12v12L14 30z"
  })));
};

module.exports.Telephone = function Telephone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M3 12c0-7 7-7 13-7s13 0 13 7c0 8-7-1-7-1H10s-7 9-7 1zm8 2s-5 5-5 14h20c0-9-5-14-5-14H11z"
  }), React.createElement("circle", {
    cx: "16",
    cy: "21",
    r: "4"
  })));
};

module.exports.Trash = function Trash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M28 6H6l2 24h16l2-24H4m12 6v12m5-12-1 12m-9-12 1 12m0-18 1-4h6l1 4"
  }));
};

module.exports.Twitter = function Twitter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m60 16-6 1 4-5-7 2c-9-10-23 1-19 10C16 24 8 12 8 12s-6 9 4 16l-6-2c0 6 4 10 11 12h-7c4 8 11 8 11 8s-6 5-17 5c33 16 53-14 50-30z"
  }));
};

module.exports.Unlock = function Unlock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M5 15v15h22V15zm4 0C9 7 9 3 16 3s7 5 7 6m-7 11v3"
  }), React.createElement("circle", {
    cx: "16",
    cy: "24",
    r: "1"
  })));
};

module.exports.Upload = function Upload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12-4 5-4 5 4m-5-4v15"
  }));
};

module.exports.User = function User(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M22 11c0 5-3 9-6 9s-6-4-6-9 2-8 6-8 6 3 6 8zM4 30h24c0-9-6-10-12-10S4 21 4 30z"
  }));
};

module.exports.Video = function Video(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m22 13 8-5v16l-8-5zM2 8v16h20V8z"
  }));
};

module.exports.Volume = function Volume(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M20 16c0-8-5-14-5-14l-7 8H2v12h6l7 8s5-6 5-14zm1-14s4 4 4 14-4 14-4 14m6-26s3 4 3 12-3 12-3 12"
  }));
};

module.exports.Work = function Work(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M30 8H2v18h28zM20 8s0-4-4-4-4 4-4 4M8 26V8m16 18V8"
  }));
};

module.exports.ZoomIn = function ZoomIn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "12"
  }), React.createElement("path", {
    d: "m23 23 7 7"
  }), React.createElement("path", {
    d: "M14 10v8m-4-4h8"
  })));
};

module.exports.ZoomOut = function ZoomOut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "12"
  }), React.createElement("path", {
    d: "m23 23 7 7"
  }), React.createElement("path", {
    d: "M10 14h8"
  })));
};

module.exports.ZoomReset = function ZoomReset(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "12"
  }), React.createElement("path", {
    d: "m23 23 7 7"
  }), React.createElement("path", {
    d: "M9 12V9h3m4 0h3v3M9 16v3h3m7-3v3h-3"
  })));
};