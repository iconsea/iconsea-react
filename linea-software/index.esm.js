function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
export function AddVectorpoint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 53h10v10H1zM53 1h10v10H53z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M44 22v-2h-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M40 20H23"
  }), React.createElement("path", {
    d: "M22 20h-2v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M20 24v17"
  }), React.createElement("path", {
    d: "M20 42v2h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M24 44h17"
  }), React.createElement("path", {
    d: "M42 44h2v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M44 40V23"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m11 53 9-9m24-24 9-9M32 25v14m7-7H25"
  }));
}
;
export function BoxOval(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("ellipse", {
    cx: "32",
    cy: "32",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    rx: "31",
    ry: "20"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 32h62M32 12v40"
  }));
}
;
export function BoxPolygon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M16.676 59 1.351 32 16.676 5h30.648l15.325 27-15.325 27zM17 5l30 54m0-54L17 59"
  }));
}
;
export function BoxRectangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 12h62v40H1zm0 0 62 40m0-40L1 52"
  }));
}
;
export function BoxRoundedrectangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 40c0 6.627-5.373 12-12 12H13C6.373 52 1 46.627 1 40V24c0-6.627 5.373-12 12-12h38c6.627 0 12 5.373 12 12v16zM5 15l54 34m0-34L5 49"
  }));
}
;
export function Character(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M12 52.5 27 10h1l15 42.75M17 38h21"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M52 0v64"
  }));
}
;
export function Crop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M0 11h53v53"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M11 0v53h53m-53 0L63 1"
  }));
}
;
export function Eyedropper(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m47 26 12-12 4-4c0-4.371-4.628-9-9-9 0 0-2.563 2.533-4 4L38 17"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M47 34 30 17l4-4 17 17z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34 22 4 54v2l-3 3 4 4 3-3h2l32-30"
  }));
}
;
export function FontAllcaps(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M31 50.987 18 16h-1L4 51m23-12H8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M60 50.987 47 16h-1L33 51m23-12H37"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v62H1z"
  }));
}
;
export function FontBaselineShift(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M36 43 21 1h-1L5 43m26-14H10"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M59 31 51 8h-1l-8 23m15-7H44"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M38 47H2m60-12H40"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m58 47-7-7-7 7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M51 64V40"
  }));
}
;
export function FontHorizontalScale(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M17 44 32 2h1l15 42M22 30h21"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m55 63 7-7-7-7M9 49l-7 7 7 7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M62 56H2"
  }));
}
;
export function FontKerning(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 35 8-23h1l8 23M7 28h13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m42 35 8-23h1l8 23m-15-7h13"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M32 6v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M32 10v29"
  }), React.createElement("path", {
    d: "M32 40v2"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m55 63 7-7-7-7M9 49l-7 7 7 7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M62 56H2"
  }));
}
;
export function FontLeading(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m36 24 8-23h1l8 23m-15-7h13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M27 28h34"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m36 57 8-23h1l8 23m-15-7h13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M27 61h34"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 55 7 7 7-7m0-21-7-7-7 7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M12 62V27"
  }));
}
;
export function FontSize(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M28 43 43 1h1l15 42M33 29h21"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 43 8-23h1l8 23M7 36h13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m56 63 7-7-7-7M8 49l-7 7 7 7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 56H1"
  }));
}
;
export function FontSmallcapital(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M37 51 22 9h-1L6 51m26-14H11"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m58 51-8-23h-1l-8 23m15-7H43"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v62H1z"
  }));
}
;
export function FontSmallcaps(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M38 51 23 9h-1L7 51m26-14H12"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M44 34s1.5-2 5.5-2 5.5 3 5.5 5v10s0 3 2.5 3"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M55 40h-5s-7 0-7 5 4 5 5 5 7 0 7-7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v62H1z"
  }));
}
;
export function FontStrikethrough(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M38 51 23 9h-1L7 51m25-16H13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M44 34s1.5-2 5.5-2 5.5 3 5.5 5v10s0 3 2.5 3"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M55 40h-5s-7 0-7 5 4 5 5 5 7 0 7-7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v62H1zm5 43h52"
  }));
}
;
export function FontTracking(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m9 35 8-23h1l8 23m-15-7h13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m38 35 8-23h1l8 23m-15-7h13"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M32 6v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M32 10v29"
  }), React.createElement("path", {
    d: "M32 40v2"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 6v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M4 10v29"
  }), React.createElement("path", {
    d: "M4 40v2"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M60 6v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M60 10v29"
  }), React.createElement("path", {
    d: "M60 40v2"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m55 63 7-7-7-7M9 49l-7 7 7 7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M62 56H2"
  }));
}
;
export function FontUnderline(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M38 51 23 9h-1L7 51m25-16H13"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M44 34s1.5-2 5.5-2 5.5 3 5.5 5v10s0 3 2.5 3"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M55 40h-5s-7 0-7 5 4 5 5 5 7 0 7-7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v62H1zm5 54h52"
  }));
}
;
export function FontVerticalScale(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m29 53 15-42h1l15 42M34 39h21"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 55 7 7 7-7m0-46-7-7-7 7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M12 62V2"
  }));
}
;
export function HorizontalAlignCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 51v13m0-64v13m0 16v6M6 35h52v16H6zm6-22h40v16H12z"
  }));
}
;
export function HorizontalAlignLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 0v64m6-29h52v16H7zm0-22h40v16H7z"
  }));
}
;
export function HorizontalAlignRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 0v64M5 35h52v16H5zm12-22h40v16H17z"
  }));
}
;
export function HorizontalDistributeCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M43 0v12m0 40v12M21 0v6m0 52v6m14-52h16v40H35zM13 6h16v52H13z"
  }));
}
;
export function HorizontalDistributeLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M35 0v64M13 0v64m22-52h16v40H35zM13 6h16v52H13z"
  }));
}
;
export function HorizontalDistributeRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M29 64V0m22 64V0M13 6h16v52H13zm22 6h16v40H35z"
  }));
}
;
export function IndentFirstline(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M30 10h34M22 20h31M22 30h42M22 40h34M22 50h42M22 60h36"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m16 17 7-7-7-7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 10H0"
  }));
}
;
export function IndentLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M30 7h34M30 17h22M30 27h34M30 37h25M30 47h34M30 57h27M25 0v64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m12 39 7-7-7-7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M19 32H0"
  }));
}
;
export function IndentRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M34 7H0m34 10H12m22 10H0m34 10H9m25 10H0m34 10H7M39 0v64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m52 25-7 7 7 7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M45 32h19"
  }));
}
;
export function Lasso(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("ellipse", {
    cx: "32",
    cy: "25.5",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    rx: "31",
    ry: "19.5"
  }), React.createElement("ellipse", {
    cx: "21",
    cy: "48",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    rx: "6",
    ry: "4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M25 51s2 1 2 4-2 3-2 3"
  }));
}
;
export function Layers1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M18 32.066 2 39l30 12 30-12-16-6.933"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m32 38 30-12-30-13L2 26z"
  }));
}
;
export function Layers2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M18 26.066 2 33l30 12 30-12-16-6.933"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M18 39.066 2 46l30 12 30-12-16-6.933M32 32l30-12L32 7 2 20z"
  }));
}
;
export function Layout2Columns(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h31v62H1zm31 0h31v62H32z"
  }));
}
;
export function Layout3Columns(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h20v62H1zm42 0h20v62H43zM21 1h22v62H21z"
  }));
}
;
export function Layout4Boxes(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 32h31v31H1zm31 0h31v31H32zM1 1h31v31H1zm31 0h31v31H32z"
  }));
}
;
export function Layout4Columns(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h15v62H1zm15 0h16v62H16zm16 0h15v62H32zm15 0h16v62H47z"
  }));
}
;
export function Layout4Lines(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v15H1zm0 15h62v16H1zm0 16h62v15H1zm0 15h62v16H1z"
  }));
}
;
export function Layout8Boxes(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 48h31v15H1zm31 0h31v15H32zM1 32h31v16H1zm31 0h31v16H32zM1 17h31v15H1zm31 0h31v15H32zM1 1h31v16H1zm31 0h31v16H32z"
  }));
}
;
export function LayoutHeader2Columns(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h31v48H1zm31 0h31v48H32z"
  }));
}
;
export function LayoutHeader3Columns(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h20v48H1zm42 0h20v48H43zm-22 0h22v48H21z"
  }));
}
;
export function LayoutHeader4Boxes(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 38h31v24H1zm31 0h31v24H32zM1 15h31v24H1zm31 0h31v24H32z"
  }));
}
;
export function LayoutHeader4Columns(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h15v48H1zm15 0h16v48H16zm16 0h15v48H32zm15 0h16v48H47z"
  }));
}
;
export function LayoutHeaderComplex(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h62v48H1zm21 0v48m0-25h41"
  }));
}
;
export function LayoutHeaderComplex2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h62v48H1zm41 0v48M1 38h41"
  }));
}
;
export function LayoutHeaderComplex3(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h31v48H1zm31 0h15v48H32zm15 0h16v48H47z"
  }));
}
;
export function LayoutHeaderComplex4(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h31v48H1zm31 0h15v48H32zm15 0h16v48H47z"
  }));
}
;
export function LayoutHeaderSideleft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h62v48H1zm21 0v48"
  }));
}
;
export function LayoutHeaderSideright(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h62v48H1zm41 0v48"
  }));
}
;
export function LayoutHeader(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v14H1zm0 14h62v48H1z"
  }));
}
;
export function LayoutSidebarLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h20v62H1zm20 0h42v62H21z"
  }));
}
;
export function LayoutSidebarRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M43 1h20v62H43zM1 1h42v62H1z"
  }));
}
;
export function Layout(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 1h62v62H1z"
  }));
}
;
export function Magnete(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M24 42a8 8 0 0 0 16 0V1h13v41c0 11.598-9.402 21-21 21s-21-9.402-21-21V1h13v41zM11 10h13m16 0h13"
  }));
}
;
export function Pages(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M11 11h21v42H1V21z"
  }), React.createElement("path", {
    d: "M1 21h10V11"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M53 11H32v42h31V21z"
  }), React.createElement("path", {
    d: "M63 21H53V11"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 6v52"
  }));
}
;
export function Paintbrush(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m30 42-4 4-8-8 4-4L62 1l1 1zm-8-8 8 8"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M26 46S18 63 1 63c0 0 2.752-16.314 9-21 4-3 8-4 8-4"
  }));
}
;
export function Paintbucket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m3 38 25 25 26-26 7-1L33 8z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 27V6c0-2.762-2.238-5-5-5s-5 2.238-5 5v13"
  }));
}
;
export function Paintroller(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M7 1h48v17H7zM2 9h5"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M55 9h6v15H32v17m-4 1h8v21h-8z"
  }));
}
;
export function ParagraphAlignLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M0 7h64M0 17h46M0 27h64M0 37h50M0 47h64M0 57h54"
  }));
}
;
export function ParagraphAlignRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M64 7H0m64 10H18m46 10H0m64 10H14m50 10H0m64 10H10"
  }));
}
;
export function ParagraphCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M0 7h64M9 17h46M0 27h64M7 37h50M0 47h64M5 57h54"
  }));
}
;
export function ParagraphJustifyAll(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M64 7H0m64 10H0m64 10H0m64 10H0m64 10H0m64 10H0"
  }));
}
;
export function ParagraphJustifyCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M64 7H0m64 10H0m64 10H0m64 10H0m64 10H0m54 10H10"
  }));
}
;
export function ParagraphJustifyLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M0 7h64M0 17h64M0 27h64M0 37h64M0 47h64M0 57h44"
  }));
}
;
export function ParagraphJustifyRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M64 7H0m64 10H0m64 10H0m64 10H0m64 10H0m64 10H20"
  }));
}
;
export function ParagraphSpaceAfter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22 6h42M22 16h34M22 26h42M22 36h36"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M59 48v-2h-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M55 46H26"
  }), React.createElement("path", {
    d: "M25 46h-2v2"
  }), React.createElement("path", {
    "stroke-dasharray": "3,2",
    d: "M23 50v3"
  }), React.createElement("path", {
    d: "M23 54v2h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M27 56h29"
  }), React.createElement("path", {
    d: "M57 56h2v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "3,2",
    d: "M59 53v-4"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m10 58 7-7-7-7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M17 51H0"
  }));
}
;
export function ParagraphSpaceBefore(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M22 29h42M22 39h34M22 49h42M22 59h36"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M59 11V9h-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M55 9H26"
  }), React.createElement("path", {
    d: "M25 9h-2v2"
  }), React.createElement("path", {
    "stroke-dasharray": "3,2",
    d: "M23 13v3"
  }), React.createElement("path", {
    d: "M23 17v2h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M27 19h29"
  }), React.createElement("path", {
    d: "M57 19h2v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "3,2",
    d: "M59 16v-4"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m10 21 7-7-7-7"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M17 14H0"
  }));
}
;
export function Paragraph(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M51 64V1H41v63M29 33h12m-12 0s-16 0-16-16S29 1 29 1h12"
  }));
}
;
export function PathfinderExclude(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 23v18H23"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 41H1V1h40v22"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 23h22v40H23V41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 41V23h18"
  }));
}
;
export function PathfinderIntersect(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 23v18H23"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-dasharray": "4,2",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 41H1V1h40v22"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-dasharray": "4,2",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 23h22v40H23V41"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 41V23h18"
  }));
}
;
export function PathfinderSubtract(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 41H1V1h40v22"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M41 23h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M45 23h15"
  }), React.createElement("path", {
    d: "M61 23h2v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M63 27v33"
  }), React.createElement("path", {
    d: "M63 61v2h-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M59 63H26"
  }), React.createElement("path", {
    d: "M25 63h-2v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M23 59V44"
  }), React.createElement("path", {
    d: "M23 43v-2"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 41V23h18"
  }));
}
;
export function PathfinderUnite(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M41 23v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M41 27v11"
  }), React.createElement("path", {
    d: "M41 39v2h-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M37 41H26"
  }), React.createElement("path", {
    d: "M25 41h-2"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 41H1V1h40v22"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 23h22v40H23V41"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M23 41v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M23 37V26"
  }), React.createElement("path", {
    d: "M23 25v-2h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M27 23h11"
  }), React.createElement("path", {
    d: "M39 23h2"
  })));
}
;
export function PenAdd(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 57h18v6H23zm-4-10h26v10H19zm22 0v-4l7-13L32 1 16 30l7 13v4m9-24v14m7-7H25"
  }));
}
;
export function PenRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 57h18v6H23zm-4-10h26v10H19zm22 0v-4l7-13L32 1 16 30l7 13v4m16-17H25"
  }));
}
;
export function Pen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M23 57h18v6H23zm-4-10h26v10H19zm22 0v-4l7-13L32 1 16 30l7 13v4"
  }), React.createElement("circle", {
    cx: "32",
    cy: "28.875",
    r: "4",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M32 1v24"
  }));
}
;
export function Pencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M20 54 10 44m0 0L1 62l1 1 18-9 43-43L53 1zm44-24L44 10m14 6L48 6"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m5 54 4 1 1 4"
  }));
}
;
export function Polygonallasso(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("ellipse", {
    cx: "21",
    cy: "53",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    rx: "6",
    ry: "4"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M25 56s2 1 2 4-2 3-2 3m-3-14L5 12l35 6L59 1v40L26 51"
  }));
}
;
export function ReflectHorizontal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 17v40l20-20z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M61.586 55.586 63 57v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M63 53V20"
  }), React.createElement("path", {
    d: "M63 19v-2l-1.414 1.414"
  }), React.createElement("path", {
    "stroke-dasharray": "3.736,1.868",
    d: "m60.265 19.735-15.19 15.19"
  }), React.createElement("path", {
    d: "M44.414 35.586 43 37l1.414 1.414"
  }), React.createElement("path", {
    "stroke-dasharray": "3.736,1.868",
    d: "m45.735 39.735 15.19 15.19"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M32 61v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M32 57V16"
  }), React.createElement("path", {
    d: "M32 15v-2"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M46 13h11V2"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M57 13C51.378 5.132 42.408 1 32 1 21.591 1 12.622 5.13 7 13"
  }));
}
;
export function ReflectVertical(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M46 1H6l20 20z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M7.414 61.586 6 63h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M10 63h33"
  }), React.createElement("path", {
    d: "M44 63h2l-1.414-1.414"
  }), React.createElement("path", {
    "stroke-dasharray": "3.736,1.868",
    d: "m43.265 60.265-15.19-15.19"
  }), React.createElement("path", {
    d: "M27.414 44.414 26 43l-1.414 1.414"
  }), React.createElement("path", {
    "stroke-dasharray": "3.736,1.868",
    d: "m23.265 45.735-15.19 15.19"
  })), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M2 32h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M6 32h41"
  }), React.createElement("path", {
    d: "M48 32h2"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M51 46v11h11"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M51 57c7.868-5.622 12-14.592 12-25 0-10.409-4.13-19.378-12-25"
  }));
}
;
export function RemoveVectorpoint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 53h10v10H1zM53 1h10v10H53z"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M44 22v-2h-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M40 20H23"
  }), React.createElement("path", {
    d: "M22 20h-2v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M20 24v17"
  }), React.createElement("path", {
    d: "M20 42v2h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M24 44h17"
  }), React.createElement("path", {
    d: "M42 44h2v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M44 40V23"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m11 53 9-9m24-24 9-9M39 32H25"
  }));
}
;
export function ScaleExpand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-dasharray": "4,2",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 28V1h62v62H36"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 33h30v30H1z"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M57 18V7H46"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M57 7 41 23"
  }));
}
;
export function ScaleReduce(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 30V1h62v62H34"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M31 35v-2h-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M27 33H4"
  }), React.createElement("path", {
    d: "M3 33H1v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M1 37v23"
  }), React.createElement("path", {
    d: "M1 61v2h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M5 63h23"
  }), React.createElement("path", {
    d: "M29 63h2v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M31 59V36"
  })), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 12v11h11"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M41 23 57 7"
  }));
}
;
export function SelectionOval(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("ellipse", {
    cx: "32",
    cy: "32",
    fill: "none",
    stroke: "#000",
    "stroke-dasharray": "4.0012,2.0006",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    rx: "31",
    ry: "20"
  }));
}
;
export function SelectionPolygon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M19 59h-2.325l-.824-1.739"
  }), React.createElement("path", {
    "stroke-dasharray": "4.1609,2.0805",
    d: "M14.661 55.451 2.851 34.644"
  }), React.createElement("path", {
    d: "M2.338 33.739 1.351 32l.987-1.739"
  }), React.createElement("path", {
    "stroke-dasharray": "4.1609,2.0805",
    d: "m3.365 28.451 11.81-20.807"
  }), React.createElement("path", {
    d: "M15.851 6.739 16.675 5H19"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M21 5h23"
  }), React.createElement("path", {
    d: "M45 5h2.325l.824 1.739"
  }), React.createElement("path", {
    "stroke-dasharray": "4.1609,2.0805",
    d: "m49.339 8.549 11.81 20.807"
  }), React.createElement("path", {
    d: "M61.662 30.261 62.649 32l-.987 1.739"
  }), React.createElement("path", {
    "stroke-dasharray": "4.1609,2.0805",
    d: "m60.635 35.549-11.81 20.807"
  }), React.createElement("path", {
    d: "M48.149 57.261 47.325 59H45"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M43 59H20"
  })));
}
;
export function SelectionRectangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("g", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M63 50v2h-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M59 52H4"
  }), React.createElement("path", {
    d: "M3 52H1v-2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M1 48V15"
  }), React.createElement("path", {
    d: "M1 14v-2h2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M5 12h55"
  }), React.createElement("path", {
    d: "M61 12h2v2"
  }), React.createElement("path", {
    "stroke-dasharray": "4,2",
    d: "M63 16v33"
  })));
}
;
export function SelectionRoundedrectangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-dasharray": "3.9436,1.9718",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 40c0 6.627-5.373 12-12 12H13C6.373 52 1 46.627 1 40V24c0-6.627 5.373-12 12-12h38c6.627 0 12 5.373 12 12v16z"
  }));
}
;
export function ShapeOval(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("ellipse", {
    cx: "32",
    cy: "32",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    rx: "31",
    ry: "20"
  }));
}
;
export function ShapePolygon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M16.675 59 1.351 32 16.675 5h30.65l15.324 27-15.324 27z"
  }));
}
;
export function ShapeRectangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 12h62v40H1z"
  }));
}
;
export function ShapeRoundedrectangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M63 40c0 6.627-5.373 12-12 12H13C6.373 52 1 46.627 1 40V24c0-6.627 5.373-12 12-12h38c6.627 0 12 5.373 12 12v16z"
  }));
}
;
export function Slice(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "bevel",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "m1 59 36-36 7 7-8 15zm39-39L57 3l6 6-16 18z"
  }));
}
;
export function TransformBezier(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 41h10v10H1zm52 0h10v10H53zM27 13h10v10H27z"
  }), React.createElement("circle", {
    cx: "4",
    cy: "18",
    r: "3",
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2"
  }), React.createElement("circle", {
    cx: "60",
    cy: "18",
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
    d: "M7 18h20C6 18 6 41 6 41m51-23H37c21 0 21 23 21 23"
  }));
}
;
export function VectorBox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 53h10v10H1zm52 0h10v10H53zM1 1h10v10H1zm52 0h10v10H53zM6 11v42m52-42v42M53 6H11m42 52H11"
  }));
}
;
export function VectorComposite(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 53h10v10H1zM53 1h10v10H53zM27 27h10v10H27zM11 53l16-16m10-10 16-16"
  }));
}
;
export function VectorLine(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M1 53h10v10H1zM53 1h10v10H53zM11 53l42-42"
  }));
}
;
export function VerticalAlignBottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M64 63H0M13 5h16v52H13zm22 12h16v40H35z"
  }));
}
;
export function VerticalAlignCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M13 32H0m64 0H51m-16 0h-6M13 6h16v52H13zm22 6h16v40H35z"
  }));
}
;
export function VerticalAlignTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M0 1h64M13 7h16v52H13zm22 0h16v40H35z"
  }));
}
;
export function VerticalDistributeBottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M0 29h64M0 51h64M12 13h40v16H12zM6 35h52v16H6z"
  }));
}
;
export function VerticalDistributeCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M0 21h12m40 0h12M0 43h6m52 0h6M12 13h40v16H12zM6 35h52v16H6z"
  }));
}
;
export function VerticalDistributeTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    version: "1.0",
    viewBox: "0 0 64 64"
  }), React.createElement("path", {
    fill: "none",
    stroke: "#000",
    "stroke-miterlimit": "10",
    strokeWidth: "2",
    d: "M64 35H0m64-22H0m6 22h52v16H6zm6-22h40v16H12z"
  }));
}
;