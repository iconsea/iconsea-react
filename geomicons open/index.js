function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.Bookmark = function Bookmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M6 2h20v28l-10-6-10 6Z"
  }));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M2 4h4V2a2 2 0 0 1 4 0v2h12V2a2 2 0 0 1 4 0v2h4v6H2m0 2h28v18H2"
  }));
};

module.exports.Camera = function Camera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 6h8l2-4h12l2 4h8v22H0zm9 11a7 7 0 0 0 14 0 7 7 0 0 0-14 0"
  }));
};

module.exports.Chat = function Chat(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M32 16a16 12 0 0 0-32 0 16 12 0 0 0 16 12h2c2 2 6 4 10 4-1-1-2-4-2-6.625A16 12 0 0 0 32 16"
  }));
};

module.exports.Check = function Check(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m1 14 4-4 8 8L27 4l4 4-18 18z"
  }));
};

module.exports.ChevronDown = function ChevronDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m1 12 15 14 15-14-4-4-11 10L5 8z"
  }));
};

module.exports.ChevronLeft = function ChevronLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m20 1 4 4-10 11 10 11-4 4L6 16z"
  }));
};

module.exports.ChevronRight = function ChevronRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m12 1 14 15-14 15-4-4 10-11L8 5z"
  }));
};

module.exports.ChevronUp = function ChevronUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M1 20 16 6l15 14-4 4-11-10L5 24z"
  }));
};

module.exports.Clock = function Clock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M16 0A16 16 0 0 0 0 16a16 16 0 0 0 16 16 16 16 0 0 0 16-16A16 16 0 0 0 16 0m0 4a12 12 0 0 1 12 12 12 12 0 0 1-12 12A12 12 0 0 1 4 16 12 12 0 0 1 16 4m-2 2v11.25L22 22l2.25-3.5L18 14.75V6z"
  }));
};

module.exports.Close = function Close(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m4 8 4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z"
  }));
};

module.exports.Cloud = function Cloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M7 14a7 7 0 0 0-7 7 7 7 0 0 0 7 7h20a5 5 0 0 0 5-5 5 5 0 0 0-5-5 10 10 0 0 0 1-4A10 10 0 0 0 18 4 10 10 0 0 0 8 14a7 7 0 0 0-1 0"
  }));
};

module.exports.Cog = function Cog(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M14 0h4l1 6 1.707.707L26 3.293 28.707 6l-3.414 5.293L26 13l6 1v4l-6 1-.707 1.707L28.707 26 26 28.707l-5.293-3.414L19 26l-1 6h-4l-1-6-1.707-.707L6 28.707 3.293 26l3.414-5.293L6 19l-6-1v-4l6-1 .707-1.707L3.293 6 6 3.293l5.293 3.414L13 6l1-6zm2 10a6 6 0 0 0 0 12 6 6 0 0 0 0-12"
  }));
};

module.exports.Compose = function Compose(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 4h12v4H8v16h16v-8h4v12H4zm22-2 4 4-14 14h-4v-4z"
  }));
};

module.exports.Dribbble = function Dribbble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M16 0A16 16 0 0 0 0 16a16 16 0 0 0 16 16 16 16 0 0 0 16-16A16 16 0 0 0 16 0M5 11.5A12 12 0 0 1 11 5a46 46 0 0 1 2.5 4.25A46 46 0 0 1 5 11.5M15 4a12 12 0 0 1 6.5 1.25 46 46 0 0 1-4.5 2.5A50 50 0 0 0 15 4M4 16a50 50 0 0 0 11-3 46 46 0 0 1 1 2.5 26 26 0 0 0-10 7A12 12 0 0 1 4 16m14.5-4.5A50 50 0 0 0 25 8a12 12 0 0 1 3 5.75 26 26 0 0 0-8.25.75 50 50 0 0 0-1.25-3m-1.5 8a46 46 0 0 1 1 8.5 12 12 0 0 1-9.25-2.5 22 22 0 0 1 8.25-6m3.75-1.25a22 22 0 0 1 7.25-.5 12 12 0 0 1-6 8.75 50 50 0 0 0-1.25-8.25"
  }));
};

module.exports.Expand = function Expand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M16 4h12v12l-4-4-4 4-4-4 4-4zM4 16l4 4 4-4 4 4-4 4 4 4H4z"
  }));
};

module.exports.External = function External(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 4h8v4H8v16h16v-4h4v8H4zm12 0h12v12l-4-4-8 8-4-4 8-8z"
  }));
};

module.exports.Facebook = function Facebook(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
  }));
};

module.exports.File = function File(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 2v28h24V10l-8-8z"
  }));
};

module.exports.Folder = function Folder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 4v24h32V8H16l-4-4z"
  }));
};

module.exports.Geolocation = function Geolocation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M2 18 30 2 14 30V18z"
  }));
};

module.exports.Github = function Github(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 18c0-6 3-8 3-9-.5-2-.5-5 0-6 3 0 6 2 7 3 2-1 4-1 6-1s4 0 6 1c1-1 4-3 7-3 .5 1 .5 4 0 6 0 1 3 3 3 9 0 7-2 12-16 12S0 25 0 18m3 2c0 4 1 8 13 8s13-4 13-8-1-6-13-6-13 2-13 6m5 1a1.5 2.5 0 0 0 5 0 1.5 2.5 0 0 0-5 0m16 0a1.5 2.5 0 0 0-5 0 1.5 2.5 0 0 0 5 0z"
  }));
};

module.exports.Grid = function Grid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M2 2h8v8H2zm10 0h8v8h-8zm10 0h8v8h-8zM2 12h8v8H2zm10 0h8v8h-8zm10 0h8v8h-8zM2 22h8v8H2zm10 0h8v8h-8zm10 0h8v8h-8z"
  }));
};

module.exports.Heart = function Heart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 10c0-4 3-8 8-8 4 0 7 3 8 4 1-1 4-4 8-4 6 0 8 4 8 8 0 8-14 19-16 20-2-1-16-12-16-20"
  }));
};

module.exports.Home = function Home(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m16 0 16 16h-4v14h-8V20h-8v10H4V16H0Z"
  }));
};

module.exports.Info = function Info(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M16 0a16 16 0 0 1 0 32 16 16 0 0 1 0-32m3 15h-6v11h6zm-3-9a3 3 0 0 0 0 6 3 3 0 0 0 0-6"
  }));
};

module.exports.Link = function Link(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 16a8 8 0 0 1 8-8h6a8 8 0 0 1 8 8h-4a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4 4 4 0 0 0 4 4l2 4H8a8 8 0 0 1-8-8zm22-8h2a8 8 0 0 1 8 8 8 8 0 0 1-8 8h-6a8 8 0 0 1-8-8h4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4 4 4 0 0 0-4-4z"
  }));
};

module.exports.List = function List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M3 8a3 3 0 0 0 6 0 3 3 0 0 0-6 0m9-2h16v4H12zM3 16a3 3 0 0 0 6 0 3 3 0 0 0-6 0m9-2h16v4H12zM3 24a3 3 0 0 0 6 0 3 3 0 0 0-6 0m9-2h16v4H12z"
  }));
};

module.exports.Lock = function Lock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M22 16v-4a6 6 0 0 0-12 0v4zM4 16h2v-4a10 10 0 0 1 20 0v4h2v14H4z"
  }));
};

module.exports.Mail = function Mail(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m0 6 16 10L32 6zm0 3v17h32V9L16 19z"
  }));
};

module.exports.MusicNote = function MusicNote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 24a6 6 0 0 0 12 0V8h14v10a6 6 0 0 0-8 6 6 6 0 0 0 12 0V2H8v16a6 6 0 0 0-8 6"
  }));
};

module.exports.Next = function Next(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m4 4 20 10V4h4v24h-4V18L4 28z"
  }));
};

module.exports.No = function No(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M16 0A16 16 0 0 0 0 16a16 16 0 0 0 16 16 16 16 0 0 0 16-16A16 16 0 0 0 16 0m0 6a10 10 0 0 1 4.675 1L7 20.675A10 10 0 0 1 6 16 10 10 0 0 1 16 6m10 10a10 10 0 0 1-10 10 10 10 0 0 1-4.675-1L25 11.325A10 10 0 0 1 26 16"
  }));
};

module.exports.Pause = function Pause(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 4h8v24H4zm16 0h8v24h-8z"
  }));
};

module.exports.Picture = function Picture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 4v24h32V4zm4 20 6-14 5 8 3-4 6 10zM25 7a4 4 0 0 1 0 8 4 4 0 0 1 0-8"
  }));
};

module.exports.Pin = function Pin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 12a12 12 0 0 1 24 0c0 8-12 20-12 20S4 20 4 12m7 0a5 5 0 0 0 10 0 5 5 0 0 0-10 0Z"
  }));
};

module.exports.Play = function Play(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m4 4 24 12L4 28z"
  }));
};

module.exports.Previous = function Previous(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 4h4v10L28 4v24L8 18v10H4z"
  }));
};

module.exports.Refresh = function Refresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M16 2A14 14 0 0 0 2 16a14 14 0 0 0 14 14 14 14 0 0 0 10-4l-2.75-3A10 10 0 0 1 16 26 10 10 0 0 1 6 16 10 10 0 0 1 16 6a10 10 0 0 1 7.25 3L19 13h11V2l-4 4a14 14 0 0 0-10-4"
  }));
};

module.exports.Repost = function Repost(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m7 7 7 7H9v6h7v4H5V14H0zm9 1h11v10h5l-7 7-7-7h5v-6h-7z"
  }));
};

module.exports.Search = function Search(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 6.5-1.75L28 32l4-4-9.75-9.5A12 12 0 0 0 24 12 12 12 0 0 0 12 0m0 4a8 8 0 0 1 0 16 8 8 0 0 1 0-16"
  }));
};

module.exports.ShoppingCart = function ShoppingCart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 4h5l1 4h24l-2 14H6L3.5 6H0zm10 20a3 3 0 0 0 0 6 3 3 0 0 0 0-6m14 0a3 3 0 0 0 0 6 3 3 0 0 0 0-6"
  }));
};

module.exports.Skull = function Skull(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M16 0C6 0 2 4 2 14v8l4 2v6h20v-6l4-2v-8C30 4 26 0 16 0M9 12a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 1 0-9m14 0a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 1 0-9"
  }));
};

module.exports.Speaker = function Speaker(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M2 12h6l8-6v20l-8-6H2z"
  }));
};

module.exports.SpeakerVolume = function SpeakerVolume(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M2 12h6l8-6v20l-8-6H2zm30 4a16 16 0 0 1-4.75 11.375l-2-2.125A13 13 0 0 0 29 16a13 13 0 0 0-3.75-9.25l2-2.125A16 16 0 0 1 32 16m-7 0a9 9 0 0 1-2.625 6.375L20.25 20.25A6 6 0 0 0 22 16a6 6 0 0 0-1.75-4.25l2.125-2.125A9 9 0 0 1 25 16"
  }));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "m16 0 5 11 11 1-9 7 3 12-10-6-10 6 3-12-9-7 11-1"
  }));
};

module.exports.Tag = function Tag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 18 16 2l13 1 1 13-16 16zm20-9a3 3 0 0 0 6 0 3 3 0 0 0-6 0"
  }));
};

module.exports.Trash = function Trash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 4h6l2-2h8l2 2h6l1 4H3zm1 6h22l-1 20H6z"
  }));
};

module.exports.TriangleDown = function TriangleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 8h24L16 26z"
  }));
};

module.exports.TriangleLeft = function TriangleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M24 4v24L6 16z"
  }));
};

module.exports.TriangleRight = function TriangleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M8 4v24l18-12z"
  }));
};

module.exports.TriangleUp = function TriangleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M4 24h24L16 6z"
  }));
};

module.exports.Twitter = function Twitter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M2 4c4 4 8 8 13 7a6 6 0 0 1 7-7 6 6 0 0 1 4 2 8 8 0 0 0 5-2 8 8 0 0 1-3 4 8 8 0 0 0 4-1 8 8 0 0 1-4 4 18 18 0 0 1-18 19 18 18 0 0 1-10-3 12 12 0 0 0 8-3 8 8 0 0 1-5-4 8 8 0 0 0 3-.5A8 8 0 0 1 0 12a8 8 0 0 0 3 1 8 8 0 0 1-1-9"
  }));
};

module.exports.User = function User(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M10 8a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0zM2 26c1-3 8-6 12-6h4c4 0 11 3 12 6v2H2z"
  }));
};

module.exports.Video = function Video(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M0 6v20h24v-7l8 4V9l-8 4V6z"
  }));
};

module.exports.Warning = function Warning(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 32 32"
  }), React.createElement("path", {
    d: "M15 0h2l15 29-1 1H1l-1-1zm4 8h-6l1 12h4zm-3 14a3 3 0 0 0 0 6 3 3 0 0 0 0-6"
  }));
};