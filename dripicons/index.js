function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.Alarm = function Alarm(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82.4 30.2c1.1-1 5.5-5.1 5.6-11.2.1-4.4-2-8.4-6.2-12l-.1-.1c-5-3.9-9.4-4.1-12.2-3.6-4.9.9-8.2 4.4-9.6 6.3C55.5 7.9 50.8 7 46 7c-4.8 0-9.5.9-13.8 2.4-1.5-1.9-4.7-5.4-9.6-6.3-2.8-.5-7.2-.3-12.2 3.6l-.1.1C6 10.6 3.9 14.6 4 19c.1 6.1 4.4 10.2 5.6 11.2-2.5 5.2-3.8 11-3.8 17.2 0 10.1 3.8 19.4 10 26.5l-.2.2-5.8 8.7c-1.2 1.8-.7 4.3 1.1 5.5.7.5 1.5.7 2.2.7 1.3 0 2.6-.6 3.3-1.8l5.2-7.8c6.8 5.2 15.2 8.3 24.4 8.3s17.7-3.1 24.5-8.4l5.3 7.9c.8 1.2 2 1.8 3.3 1.8.8 0 1.5-.2 2.2-.7 1.8-1.2 2.3-3.7 1.1-5.5l-5.8-8.7-.3-.3c6.1-7.1 9.8-16.3 9.8-26.4.1-6.2-1.2-12-3.7-17.2zM70.9 11.1c1.7-.3 3.6.4 5.7 2 2.3 2 3.4 3.9 3.4 5.8 0 1.7-1 3.3-1.9 4.3-3-4-6.7-7.3-10.9-10 1-1 2.3-1.9 3.7-2.1zM12 18.9c0-1.9 1.1-3.8 3.4-5.8 2.1-1.6 4-2.3 5.7-2 1.4.3 2.7 1.2 3.7 2.1-4.2 2.6-7.9 6-10.9 10-.8-1.1-1.9-2.6-1.9-4.3zm34 60.8c-17.8 0-32.2-14.5-32.2-32.3S28.2 15 46 15s32.2 14.5 32.2 32.3S63.8 79.7 46 79.7zm14.5-23.5c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2L43.2 50.2c-.7-.8-1.2-1.8-1.2-2.8V25.8c0-2.2 1.8-4 4-4s4 1.8 4 4v19.9l10.5 10.5z"
  }));
};

module.exports.AlignCenter = function AlignCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82 18H10c-2.2 0-4-1.8-4-4s1.8-4 4-4h72c2.2 0 4 1.8 4 4s-1.8 4-4 4zM70.7 35.4c0-2.2-1.8-4-4-4H25.3c-2.2 0-4 1.8-4 4s1.8 4 4 4h41.4c2.2 0 4-1.8 4-4zm6.1 21.3c0-2.2-1.8-4-4-4H19.2c-2.2 0-4 1.8-4 4s1.8 4 4 4h53.6c2.2 0 4-1.8 4-4zM84.1 78c0-2.2-1.8-4-4-4H11.9c-2.2 0-4 1.8-4 4s1.8 4 4 4H80c2.3 0 4.1-1.8 4.1-4z"
  }));
};

module.exports.AlignJustify = function AlignJustify(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82 18H10c-2.2 0-4-1.8-4-4s1.8-4 4-4h72c2.2 0 4 1.8 4 4s-1.8 4-4 4zm4 17.4c0-2.2-1.8-4-4-4H10c-2.2 0-4 1.8-4 4s1.8 4 4 4h72c2.2 0 4-1.8 4-4zm0 21.3c0-2.2-1.8-4-4-4H10c-2.2 0-4 1.8-4 4s1.8 4 4 4h72c2.2 0 4-1.8 4-4zM50 78c0-2.2-1.8-4-4-4H10.3c-2.2 0-4 1.8-4 4s1.8 4 4 4H46c2.2 0 4-1.8 4-4z"
  }));
};

module.exports.AlignLeft = function AlignLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82 18H10c-2.2 0-4-1.8-4-4s1.8-4 4-4h72c2.2 0 4 1.8 4 4s-1.8 4-4 4zM55.4 35.4c0-2.2-1.8-4-4-4H10c-2.2 0-4 1.8-4 4s1.8 4 4 4h41.4c2.2 0 4-1.8 4-4zm12.2 21.3c0-2.2-1.8-4-4-4H10c-2.2 0-4 1.8-4 4s1.8 4 4 4h53.6c2.2 0 4-1.8 4-4zM82.4 78c0-2.2-1.8-4-4-4H10.3c-2.2 0-4 1.8-4 4s1.8 4 4 4h68.1c2.2 0 4-1.8 4-4z"
  }));
};

module.exports.AlignRight = function AlignRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82 18H10c-2.2 0-4-1.8-4-4s1.8-4 4-4h72c2.2 0 4 1.8 4 4s-1.8 4-4 4zm4 17.4c0-2.2-1.8-4-4-4H40.6c-2.2 0-4 1.8-4 4s1.8 4 4 4H82c2.2 0 4-1.8 4-4zm0 21.3c0-2.2-1.8-4-4-4H28.4c-2.2 0-4 1.8-4 4s1.8 4 4 4H82c2.2 0 4-1.8 4-4zM85.7 78c0-2.2-1.8-4-4-4H13.6c-2.2 0-4 1.8-4 4s1.8 4 4 4h68.1c2.2 0 4-1.8 4-4z"
  }));
};

module.exports.Anchor = function Anchor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M87.1 53.3c-.8-.9-1.9-1.3-3.1-1.3H71.1c-2.2 0-4 1.8-4 4s1.8 4 4 4h7.8c-4 13-15.3 22.2-28.9 23.8V30.7c6.6-1.8 11.5-7.9 11.5-15.1C61.5 7 54.6 0 46 0S30.5 7 30.5 15.6c0 7.2 4.5 13.3 11.5 15.1v53.1C28 82.2 17.1 73 13.1 60h7.8c2.2 0 4-1.8 4-4s-1.8-4-4-4H8c-1.2 0-2.3.4-3.1 1.3-.8.9-1.1 2-.9 3.2C7.5 77.1 25.2 92 46 92s38.5-14.9 41.9-35.5c.2-1.2-.1-2.3-.8-3.2zM38.5 15.6c0-4.2 3.4-7.6 7.5-7.6 4.2 0 7.5 3.4 7.5 7.6 0 4.2-3.4 7.6-7.5 7.6-4.2 0-7.5-3.4-7.5-7.6z"
  }));
};

module.exports.Archive = function Archive(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M15.7 22c0-2.2 1.8-4 4-4h52.5c2.2 0 4 1.8 4 4s-1.8 4-4 4H19.7c-2.2 0-4-1.8-4-4zm10.6-10h39.4c1.9 0 3.5-1.6 3.5-3.5S67.6 5 65.7 5H26.3c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5zM92 26.6v10.9c0 .4-.1.8-.2 1.1L79 85.1c-.5 1.7-2 2.9-3.8 2.9H16.6c-1.8 0-3.4-1.2-3.9-3L.2 38.6c-.1-.2-.1-.4-.2-.6V26.6c0-2.2 1.8-4 4-4s4 1.8 4 4V34h76v-7.4c0-2.2 1.8-4 4-4s4 1.8 4 4zM82.7 42H9.2l10.4 38h52.5l10.6-38zM34.2 62h23.6c2.2 0 4-1.8 4-4s-1.8-4-4-4H34.2c-2.2 0-4 1.8-4 4s1.8 4 4 4z"
  }));
};

module.exports.ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M79.7 49.6c-.6-1.4-2.1-2.6-3.7-2.6H63V10c0-2.2-2.3-4-4.5-4h-25C31.3 6 29 7.8 29 10v37H16c-1.6 0-3.1 1.2-3.7 2.6-.6 1.5-.3 3.3.8 4.4l30 30.7c.8.8 1.8 1.2 2.9 1.2 1.1 0 2.1-.4 2.9-1.2l30-30.7c1.1-1.1 1.4-2.9.8-4.4zM46 75.9 25.5 55h8c2.2 0 3.5-1.4 3.5-3.6V14h18v37.4c0 2.2 1.3 3.6 3.5 3.6h8L46 75.9z"
  }));
};

module.exports.ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82 29H45V16c0-1.6-1.2-3.1-2.6-3.7-1.5-.6-3.3-.3-4.4.8l-30.7 30C6.5 43.9 6 44.9 6 46s.4 2.1 1.2 2.9l30.6 30c.8.7 1.8 1.1 2.8 1.1.5 0 1.2-.1 1.7-.3 1.5-.6 2.6-2.1 2.6-3.7V63h37c2.2 0 4-2.3 4-4.5v-25C86 31.3 84.2 29 82 29zm-4 26H40.6c-2.2 0-3.6 1.3-3.6 3.5v8L16.1 46 37 25.5v8c0 2.2 1.4 3.5 3.6 3.5H78v18z"
  }));
};

module.exports.ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m84.8 43.1-30.6-30c-1.2-1.1-3.1-1.5-4.5-.8-1.5.6-2.7 2.1-2.7 3.7v13H10c-2.2 0-4 2.3-4 4.5v25c0 2.2 1.8 4.5 4 4.5h37v13c0 1.6 1.2 3.1 2.6 3.7.5.2 1.1.3 1.6.3 1 0 2.1-.4 2.8-1.1l30.6-30c.8-.8 1.2-1.8 1.2-2.9s-.2-2.1-1-2.9zM55 66.5v-8c0-2.2-1.4-3.5-3.6-3.5H14V37h37.4c2.2 0 3.6-1.3 3.6-3.5v-8L75.9 46 55 66.5z"
  }));
};

module.exports.ArrowThinDown = function ArrowThinDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m73.8 57.9-25 24.9C48 83.6 47 84 46 84s-2-.4-2.8-1.2l-25-24.9c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0L42 70.4V12c0-2.2 1.8-4 4-4s4 1.8 4 4v58.4l18.2-18.1c1.6-1.6 4.1-1.6 5.7 0 1.5 1.5 1.5 4-.1 5.6z"
  }));
};

module.exports.ArrowThinLeft = function ArrowThinLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M84 46c0 2.2-1.8 4-4 4H21.6l18.1 18.2c1.6 1.6 1.6 4.1 0 5.7-.7.7-1.7 1.1-2.8 1.1-1 0-2.1-.4-2.8-1.2l-24.9-25c-1.6-1.6-1.6-4.1 0-5.6l24.9-25c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L21.6 42H80c2.2 0 4 1.8 4 4z"
  }));
};

module.exports.ArrowThinRight = function ArrowThinRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m82.8 48.8-24.9 25c-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.1 0-5.7L70.4 50H12c-2.2 0-4-1.8-4-4s1.8-4 4-4h58.4L52.2 23.8c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l24.9 25c1.6 1.6 1.6 4.2 0 5.7z"
  }));
};

module.exports.ArrowThinUp = function ArrowThinUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M73.8 39.8C73 40.6 72 41 71 41c-1 0-2-.4-2.8-1.2L50 21.6V80c0 2.2-1.8 4-4 4s-4-1.8-4-4V21.6L23.8 39.8c-1.6 1.6-4.1 1.6-5.7 0-1.6-1.6-1.6-4.1 0-5.7l25-24.9c1.6-1.6 4.1-1.6 5.6 0l25 24.9c1.7 1.6 1.7 4.1.1 5.7z"
  }));
};

module.exports.ArrowUp = function ArrowUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m78.9 37.8-30-30.6C48.1 6.4 47.1 6 46 6s-2.1.4-2.9 1.2l-30 30.6c-1.1 1.1-1.5 3.1-.8 4.5.6 1.5 2.1 2.6 3.7 2.6h13v37c0 2.2 2.3 4 4.5 4h25c2.2 0 4.5-1.8 4.5-4V45h13c1.6 0 3.1-1.2 3.7-2.6.6-1.5.3-3.4-.8-4.6zM58.5 37c-2.2 0-3.5 1.4-3.5 3.6V78H37V40.6c0-2.2-1.3-3.6-3.5-3.6h-8L46 16.1 66.5 37h-8z"
  }));
};

module.exports.Article = function Article(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M76 2H16c-2.2 0-4 1.8-4 4v80c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-4 80H20V10h52v72zM30 67.5c0-1.9 1.6-3.5 3.5-3.5h23.8c1.9 0 3.5 1.6 3.5 3.5S59.3 71 57.3 71H33.5c-1.9 0-3.5-1.6-3.5-3.5zm0-14c0-1.9 1.6-3.5 3.5-3.5h23.8c1.9 0 3.5 1.6 3.5 3.5S59.3 57 57.3 57H33.5c-1.9 0-3.5-1.6-3.5-3.5zm31-29c0-1.9-1.6-3.5-3.5-3.5h-24c-1.9 0-3.5 1.6-3.5 3.5v14c0 1.9 1.6 3.5 3.5 3.5h24c1.9 0 3.5-1.6 3.5-3.5v-14zM37 28h17v7H37v-7z"
  }));
};

module.exports.Backspace = function Backspace(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 45.6v17.7c0 2.4-1.5 4.4-4 4.4s-4-2-4-4.4V50.1H15.7l10.2 10.1c1.7 1.7 1.6 4.5-.2 6.3-.9.9-2.1 1.3-3.3 1.3-1.1 0-2.3-.4-3.2-1.3l-18-17.7C.5 48 0 46.8 0 45.6c0-1.2.5-2.3 1.3-3.1l17.9-17.7c1.7-1.7 4.6-1.7 6.3 0 1.7 1.7 1.7 4.5-.1 6.3L15.2 41.2h72.2c1.2 0 2.5.5 3.3 1.3.8.8 1.3 2 1.3 3.1z"
  }));
};

module.exports.Basket = function Basket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 29H77s-.1-.3-.1-.4L58 5.5c-1.4-1.7-3.9-2-5.6-.6s-2 4.1-.6 5.8L66.7 29H25.3l14.9-18.3c1.4-1.7 1.2-4.3-.6-5.7-1.7-1.4-4.2-1.2-5.6.5L15.1 28.7c0 .1-.1.3-.1.3H4c-2.2 0-4 1.4-4 3.6v15C0 49.8 1.8 52 4 52h1.3l7.5 30.4c.8 3.5 3.9 5.6 7.5 5.6h51.4c3.6 0 6.6-2.2 7.5-5.6L86.7 52H88c2.2 0 4-2.2 4-4.4v-15c0-2.2-1.8-3.6-4-3.6zM8 37h76v7H8v-7zm63.5 43h-51l-7-28h65l-7 28z"
  }));
};

module.exports.Basketball = function Basketball(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm29 70.5c-2.6-2.4-6.9-7.4-8.5-15.1 7.8-1.1 13.4-2.7 17.1-4-1 7.1-4.1 13.7-8.6 19.1zM8.4 51.3c3.7 1.3 9.3 2.9 17.1 4C24 63 19.6 68.1 17 70.4c-4.5-5.3-7.6-11.9-8.6-19.1zm6.3-26.9c3.2 3.4 10.1 12 11.1 22.9-9.7-1.5-15.4-3.7-17.7-4.7.7-6.7 3-12.9 6.6-18.2zm69.1 18.2c-2.3 1-7.9 3.3-17.7 4.7 1-10.8 8-19.5 11.1-22.9 3.7 5.3 6 11.5 6.6 18.2zm-25.7 5.6c-2.5.2-5.2.3-8.1.4V8.2c8.5.9 16.1 4.6 22 10.1-3.7 3.9-13.3 15.2-13.9 29.9zm-16.1.5c-2.9-.1-5.6-.2-8.1-.4-.7-14.8-10.3-26-14-29.9 5.9-5.5 13.5-9.2 22-10.1v40.4zm-8.6 7.5c2.7.2 5.5.4 8.6.4v27.1c-7.2-.7-13.8-3.5-19.3-7.7 3.6-3.4 9-9.9 10.7-19.8zm16.6.5c3-.1 5.9-.2 8.6-.4 1.8 9.8 7.1 16.4 10.7 19.8-5.4 4.2-12.1 7-19.3 7.8V56.7z"
  }));
};

module.exports.BatteryEmpty = function BatteryEmpty(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 35h-3V24c0-2.2-1.7-4-4-4H4c-2.2 0-4 1.8-4 4v44c0 2.2 1.8 4 4 4h77c2.2 0 4-1.8 4-4V57h3c2.2 0 4-1.4 4-3.6V38.6c0-2.2-1.8-3.6-4-3.6zM77 64H8V28h69v36z"
  }));
};

module.exports.BatteryFull = function BatteryFull(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M35 54V38c0-2.2 1.8-4 4-4h7c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4h-7c-2.2 0-4-1.8-4-4zm25 4h7c2.2 0 4-1.8 4-4V43.8c0-1-.2-1.9-.9-2.6l-5.3-6c-.8-.9-1.8-1.2-3-1.2H60c-2.2 0-4 1.5-4 3.8V54c0 2.2 1.8 4 4 4zm-42 0h7c2.2 0 4-1.8 4-4V38c0-2.2-1.8-4-4-4h-7c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4zm74-19.4v14.8c0 2.2-1.8 3.6-4 3.6h-3v11c0 2.2-1.7 4-4 4H4c-2.2 0-4-1.8-4-4V24c0-2.2 1.8-4 4-4h77c2.2 0 4 1.8 4 4v11h3c2.2 0 4 1.4 4 3.6zM77 28H8v36h69V28z"
  }));
};

module.exports.BatteryLow = function BatteryLow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 35h-3V24c0-2.2-1.7-4-4-4H4c-2.2 0-4 1.8-4 4v44c0 2.2 1.8 4 4 4h77c2.2 0 4-1.8 4-4V57h3c2.2 0 4-1.4 4-3.6V38.6c0-2.2-1.8-3.6-4-3.6zM77 64H8V28h69v36zM29 54c0 2.2-1.8 4-4 4h-7c-2.2 0-4-1.8-4-4V38c0-2.2 1.8-4 4-4h7c2.2 0 4 1.8 4 4v16z"
  }));
};

module.exports.BatteryMedium = function BatteryMedium(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 35h-3V24c0-2.2-1.7-4-4-4H4c-2.2 0-4 1.8-4 4v44c0 2.2 1.8 4 4 4h77c2.2 0 4-1.8 4-4V57h3c2.2 0 4-1.4 4-3.6V38.6c0-2.2-1.8-3.6-4-3.6zM77 64H8V28h69v36zM29 54c0 2.2-1.8 4-4 4h-7c-2.2 0-4-1.8-4-4V38c0-2.2 1.8-4 4-4h7c2.2 0 4 1.8 4 4v16zm21 0c0 2.2-1.8 4-4 4h-7c-2.2 0-4-1.8-4-4V38c0-2.2 1.8-4 4-4h7c2.2 0 4 1.8 4 4v16z"
  }));
};

module.exports.Bell = function Bell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M84 71.5c-6.7 0-9.3-3.9-9.3-28.4 0-19.2-8.7-31.2-23.7-33V3.9c0-2.2-1.8-4-4-4s-4 1.8-4 4v6C27 11.2 17.7 23.4 17.7 43c0 24.5-2.9 28.4-9.7 28.4-2.1.1-4 1.6-4 3.8C4 77.5 5.8 79 8 79h26c.3 3 1.2 6.7 3.6 9.3 2.1 2.3 4.9 3.6 8.2 3.6 3.3 0 6.1-1.4 8.2-3.6 2.5-2.7 3.5-6.3 3.9-9.3H84c2.2 0 4-1.5 4-3.8 0-2.2-1.8-3.7-4-3.7zM48.2 82.9c-.4.4-1 1-2.4 1-1.3 0-1.9-.6-2.3-1-.7-.9-1.2-1.9-1.4-3.9H50c-.4 2-.9 3-1.8 3.9zM46.6 71H21.8c3.7-7 3.7-17.9 3.7-28.1 0-16.3 7.1-24.9 19.9-24.9h1.1c12.8 0 19.9 8.6 19.9 24.9 0 10.2 0 21.1 3.7 28.1H46.6zm14.2-35.5c.1 1.9-1.4 3.6-3.3 3.7h-.2c-1.8 0-3.4-1.4-3.5-3.3-.3-4.5-3.8-6.1-4.2-6.3-1.8-.8-2.6-2.8-1.9-4.6.7-1.8 2.7-2.6 4.5-1.9.4.2 8.1 3.4 8.6 12.4z"
  }));
};

module.exports.Blog = function Blog(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M76 2H16c-2.2 0-4 1.8-4 4v80c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-4 80H20V10h52v72zM28.5 65c0-2.2 1.8-4 4-4h27c2.2 0 4 1.8 4 4s-1.8 4-4 4h-27c-2.2 0-4-1.8-4-4zm.6-19c0-2.2 1.8-4 4-4h26.3c2.2 0 4 1.8 4 4s-1.8 4-4 4H33.1c-2.2 0-4-1.8-4-4zm0-19c0-2.2 1.8-4 4-4h26.3c2.2 0 4 1.8 4 4s-1.8 4-4 4H33.1c-2.2 0-4-1.8-4-4z"
  }));
};

module.exports.Bluetooth = function Bluetooth(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m51.9 46 17.9-17.7c1.6-1.5 1.6-4.1 0-5.6l-21-21.4C47.7 0 46-.3 44.5.3 43 .9 42 2.4 42 4v32.1l-14.2-14c-1.6-1.6-4.1-1.5-5.7 0-1.6 1.6-1.5 4.1 0 5.7L40.6 46 22.2 64.3c-1.6 1.6-1.6 4.1 0 5.7.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2L42 55.9V88a4.025 4.025 0 0 0 4 4c1.1 0 2.1-.4 2.9-1.2l21-21.4c1.5-1.6 1.5-4.1 0-5.6L51.9 46zM50 13.8l11.3 11.6L50 36.6V13.8zm0 64.4V55.4l11.3 11.3L50 78.2z"
  }));
};

module.exports.Bold = function Bold(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M60.1 44.2c3.7-3.6 6-8.7 6-14.2 0-11-9-20-20-20H25c-2.2 0-4 1.8-4 4v64c0 2.2 1.8 4 4 4h26c11 0 20-9 20-20 0-7.7-4.4-14.4-10.9-17.8zM29 18h17.1c6.6 0 12 5.4 12 12s-5.4 12-12 12H29V18zm22 56H29V50h22c6.6 0 12 5.4 12 12s-5.4 12-12 12z"
  }));
};

module.exports.Bookmark = function Bookmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M64 0H28c-2.2 0-4 1.8-4 4v84a4.025 4.025 0 0 0 4 4c1.1 0 2.1-.4 2.9-1.3l14.7-15.6 15.5 15.6c1.1 1.1 2.9 1.5 4.4.9 1.5-.5 2.5-2 2.5-3.6V4c0-2.2-1.8-4-4-4zm-4 78.3L48.4 66.4c-.8-.8-1.8-1.4-2.8-1.4-1.1 0-2.1.7-2.9 1.5L32 77.9V8h28v70.3z"
  }));
};

module.exports.Bookmarks = function Bookmarks(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M53 17H24c-2.2 0-4 1.5-4 3.7V88a4.025 4.025 0 0 0 4 4c1.1 0 2.1-.4 2.9-1.2l11.3-11.9 11.9 12c1.1 1.1 2.9 1.5 4.4.9C56 91.1 57 89.6 57 88V20.7c0-2.2-1.8-3.7-4-3.7zm-4 61.3-8-8.1c-.8-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.5-2.9 1.3L28 78V25h21v53.3zM71 3v67.3c0 1.9-1.6 3.5-3.5 3.5S64 72.2 64 70.3V7H43v1.3c0 1.9-1.6 3.5-3.5 3.5S36 10.2 36 8.3V3c0-1.9 1.1-3 3-3h29c1.9 0 3 1.1 3 3z"
  }));
};

module.exports.Box = function Box(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M74.7 24H17.3c-2.2 0-4 1.8-4 4l-.6 51c0 1.1.4 2.1 1.2 2.9s1.8 1.2 2.8 1.2h58.4c1.1 0 2.1-.4 2.8-1.2.8-.8 1.2-1.8 1.2-2.8l-.4-51c0-2.3-1.8-4.1-4-4.1zM46 75H20.7l.5-43h49.5l.3 43H46zm12.8-32c0 2.2-1.8 4-4 4H37.2c-2.2 0-4-1.8-4-4s1.8-4 4-4h17.5c2.3 0 4.1 1.8 4.1 4zm30-16.1c-.3.1-.6.1-.8.1-1.9 0-3.6-1.3-3.9-3.2L82.8 17H9.2l-1.3 6.8C7.5 26 5.4 27.4 3.2 27 1 26.6-.4 24.5 0 22.3l1.9-10C2.4 10.4 4 9 5.9 9H86c1.9 0 3.6 1.4 3.9 3.2l1.9 10c.5 2.2-.9 4.3-3 4.7z"
  }));
};

module.exports.Briefcase = function Briefcase(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.8 22.9c-.7-.7-1.7-.9-2.8-.9H67V10c0-2.2-2-4-4.2-4H29.2C27 6 25 7.8 25 10v12H4c-2.2 0-4 1.3-4 3.5V82c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4V25.7c0-1.1-.4-2-1.2-2.8zM33 14h26v8H33v-8zm51 16v21H56v-1.5c0-1.7-1.6-2.5-3.3-2.5H39.3c-1.7 0-3.3.9-3.3 2.5V51H8V30h76zM50 53v2h-8v-2h8zM8 78V57h28v1c0 1.7 1.6 3 3.3 3h13.5c1.7 0 3.3-1.4 3.3-3v-1h28v21H8z"
  }));
};

module.exports.BrightnessLow = function BrightnessLow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 28.7c-9.5 0-17.3 7.8-17.3 17.3S36.5 63.3 46 63.3 63.3 55.5 63.3 46 55.5 28.7 46 28.7zm0 26.6c-5.1 0-9.3-4.2-9.3-9.3 0-5.1 4.2-9.3 9.3-9.3s9.3 4.2 9.3 9.3c0 5.1-4.2 9.3-9.3 9.3zm-4-36.7V15c0-2.2 1.8-4 4-4s4 1.8 4 4v3.6c0 2.2-1.8 4-4 4s-4-1.8-4-4zM81 46c0 2.2-1.8 4-4 4h-3.6c-2.2 0-4-1.8-4-4s1.8-4 4-4H77c2.2 0 4 1.8 4 4zM50 73.4V77c0 2.2-1.8 4-4 4s-4-1.8-4-4v-3.6c0-2.2 1.8-4 4-4s4 1.8 4 4zM18.6 50H15c-2.2 0-4-1.8-4-4s1.8-4 4-4h3.6c2.2 0 4 1.8 4 4s-1.8 4-4 4zm43.9-20.5c-1.6-1.6-1.6-4.1 0-5.7l2.5-2.5c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7l-2.5 2.5c-.8.8-1.8 1.2-2.8 1.2-1-.1-2.1-.5-2.9-1.2zm8.2 35.6c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2l-2.5-2.5c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l2.4 2.5zm-41.2-2.6c1.6 1.6 1.6 4.1 0 5.7L27 70.7c-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.1 0-5.7l2.5-2.5c1.5-1.5 4-1.5 5.6 0zm-8.2-35.6c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l2.5 2.5c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2l-2.6-2.5z"
  }));
};

module.exports.BrightnessMax = function BrightnessMax(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 23.7c-12.3 0-22.3 10-22.3 22.3s10 22.3 22.3 22.3 22.3-10 22.3-22.3-10-22.3-22.3-22.3zm0 36.6c-7.9 0-14.3-6.4-14.3-14.3S38.1 31.7 46 31.7 60.3 38.1 60.3 46 53.9 60.3 46 60.3zm-4-48V4c0-2.2 1.8-4 4-4s4 1.8 4 4v8.3c0 2.2-1.8 4-4 4s-4-1.8-4-4zM92 46c0 2.2-1.8 4-4 4h-8.3c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c2.2 0 4 1.8 4 4zM50 79.7V88c0 2.2-1.8 4-4 4s-4-1.8-4-4v-8.3c0-2.2 1.8-4 4-4s4 1.8 4 4zM12.3 50H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h8.3c2.2 0 4 1.8 4 4s-1.8 4-4 4zM67 25c-1.6-1.6-1.6-4.1 0-5.7l5.8-5.8c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L72.7 25c-.8.8-1.8 1.2-2.8 1.2s-2.1-.4-2.9-1.2zm11.5 47.9c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2s-2-.4-2.8-1.2L67 72.7c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l5.8 5.9zM25 67c1.6 1.6 1.6 4.1 0 5.7l-5.8 5.8c-.8.8-1.8 1.2-2.8 1.2s-2-.4-2.8-1.2c-1.6-1.6-1.6-4.1 0-5.7l5.8-5.8c1.5-1.5 4-1.5 5.6 0zM13.5 19.1c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l5.8 5.8c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2l-5.9-5.8z"
  }));
};

module.exports.BrightnessMedium = function BrightnessMedium(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 23.7c-12.3 0-22.3 10-22.3 22.3s10 22.3 22.3 22.3 22.3-10 22.3-22.3-10-22.3-22.3-22.3zM31.7 46c0-7.9 6.4-14.3 14.3-14.3v28.5c-7.9.1-14.3-6.3-14.3-14.2zM42 12.3V4c0-2.2 1.8-4 4-4s4 1.8 4 4v8.3c0 2.2-1.8 4-4 4s-4-1.8-4-4zM92 46c0 2.2-1.8 4-4 4h-8.3c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c2.2 0 4 1.8 4 4zM50 79.7V88c0 2.2-1.8 4-4 4s-4-1.8-4-4v-8.3c0-2.2 1.8-4 4-4s4 1.8 4 4zM12.3 50H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h8.3c2.2 0 4 1.8 4 4s-1.8 4-4 4zM67 25c-1.6-1.6-1.6-4.1 0-5.7l5.8-5.8c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L72.7 25c-.8.8-1.8 1.2-2.8 1.2-1.1-.1-2.1-.4-2.9-1.2zm11.5 47.9c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2L67 72.7c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l5.8 5.9zM25 67c1.6 1.6 1.6 4.1 0 5.7l-5.8 5.8c-.8.8-1.8 1.2-2.8 1.2s-2-.4-2.8-1.2c-1.6-1.6-1.6-4.1 0-5.7l5.8-5.8c1.5-1.5 4-1.5 5.6 0zM13.5 19.1c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l5.8 5.8c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2l-5.9-5.8z"
  }));
};

module.exports.Broadcast = function Broadcast(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M91.5 34.3c-.9-3-2.7-5.4-5.4-6.8-3.4-1.8-7.4-1.6-10.2-1.1L70.1 5.9c-.4-1.4-1.5-2.5-2.9-2.8-1.4-.3-2.9.1-3.9 1.2-14.3 16-20.2 19.9-36 26.8l-12.4 3.6C4 37.8-2.3 49.4.8 60.3c1.5 5.3 5 9.8 9.9 12.5 3.1 1.7 6.5 2.6 9.9 2.6 1.6 0 3.3-.2 4.9-.6l1.3 4.7c.7 2.5 2.1 4.7 3.9 6.5l2.1 2c.8.7 1.8 1.1 2.8 1.1 1.1 0 2.1-.4 2.9-1.2 1.5-1.6 1.5-4.1-.2-5.7l-2.1-2c-.8-.8-1.4-1.8-1.7-2.9l-1.3-4.7 5.8-1.7c16.6-2.5 24.1-2.3 44.4 3.5.4.1.7.2 1.1.2 1 0 2.1-.4 2.8-1.2 1-1 1.4-2.5 1-3.9L82.4 49c2.6-1 6.1-2.8 8.1-6.1 1.5-2.6 1.9-5.5 1-8.6zM14.6 65.8c-3-1.6-5.1-4.4-6.1-7.6-1.9-6.8 2-13.8 8.6-15.8l9-2.6 4.1 14.5 2.8 10-9 2.6c-3.1.9-6.5.5-9.4-1.1zm40.7-4.4c-4.5 0-9 .4-14.3 1.1L35.2 42l-1.4-5c12.6-5.8 19.4-10.3 30.6-22l14.2 49.9c-9.5-2.5-16.3-3.5-23.3-3.5zm28.4-22.7c-.6 1.1-2.1 1.9-3.5 2.5l-2-7c1.5-.2 3.2-.2 4.3.4.5.3 1 .7 1.4 1.8.3 1.2 0 1.8-.2 2.3zm-25.4-6.6c1.1 1.6.8 3.8-.8 4.9-3.7 2.6-7.9 4.9-8.1 5-.5.3-1.1.4-1.6.4-1.3 0-2.5-.7-3.1-1.9-.9-1.7-.2-3.8 1.5-4.7 0 0 4-2.1 7.2-4.4 1.6-1.3 3.8-.9 4.9.7z"
  }));
};

module.exports.BrowserUpload = function BrowserUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m50 47 .1 41c0 2.2-1.8 4-4 4s-4-1.8-4-4L42 46.9 30.4 58.5c-1.6 1.6-4.1 1.5-5.7 0-1.6-1.6-1.5-4.1 0-5.7l18.4-18.3c1.6-1.5 4.1-1.5 5.6 0l18.4 18.3c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2L50 47zM92 4v66.7c0 2.2-1.8 4.3-4 4.3H63.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H84V24H8v43h20.9c2.2 0 4 1.8 4 4s-1.8 4-4 4H4c-2.2 0-4-2.1-4-4.3V4c0-2.2 1.8-4 4-4h84c2.2 0 4 1.8 4 4zM40 17h10V8H40v9zm-6-9H24v9h10V8zM8 17h10V8H8v9zm76 0V8H56v9h28z"
  }));
};

module.exports.Browser = function Browser(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 9H4c-2.2 0-4 1.8-4 4v66c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4V13c0-2.2-1.8-4-4-4zm-4 17H56v-9h28v9zm-60 0v-9h10v9H24zm16-9h10v9H40v-9zm-22 0v9H8v-9h10zM8 75V33h76v42H8z"
  }));
};

module.exports.Brush = function Brush(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 8.7c0-2.3-.9-4.4-2.5-6l-.2-.2C86-.8 80.7-.8 77.4 2.4L28.6 47.7c-6.6-1.4-13.7.4-18.7 5.5C3 60 3.1 67.6 3.2 72.2v1.7c-.1 3.7-2 8.2-2.8 9.7-.5 1-.6 2.2-.2 3.2.4 1.1 1.2 1.9 2.2 2.3 4.7 2 9.4 2.9 13.9 2.9 7.9 0 15.4-3 21.1-8.7 4.7-4.7 7.3-10.4 7.3-16.1 0-1.4-.2-2.7-.4-4l45.2-48.6C91.1 13 92 10.9 92 8.7zM31.8 77.6c-5.9 5.9-14 7.8-22.5 5.4.9-2.5 1.8-5.8 1.9-9v-2c-.1-4.1-.2-8.7 4.3-13.1 4.8-4.8 12.7-4.8 17.6 0 2.4 2.4 3.7 5.3 3.7 8.3 0 3.5-1.8 7.2-5 10.4zM83.9 9l-.1.1-43.1 46.3c-.6-.8-1.2-1.5-1.9-2.2-.7-.7-1.5-1.3-2.2-1.9L82.9 8.2l.1-.1c.2-.2.5-.2.7 0l.2.2c.1.2.1.3.1.4 0 .1 0 .2-.1.3z"
  }));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M22 21.8V9c0-2.8 2.2-5 5-5s5 2.2 5 5v12.8c0 2.8-2.2 5-5 5s-5-2.2-5-5zm43 5c2.8 0 5-2.2 5-5V9c0-2.8-2.2-5-5-5s-5 2.2-5 5v12.8c0 2.8 2.2 5 5 5zm27-11.4V83c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V15.4C0 13.2 1.8 11 4 11h9.3c2.2 0 4 1.8 4 4s-1.8 4-4 4H8v17h76V19h-5.3c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c2.2 0 4 2.2 4 4.4zM84 79V43H8v36h76zM39.7 19h12.6c2.2 0 4-1.8 4-4s-1.8-4-4-4H39.7c-2.2 0-4 1.8-4 4s1.8 4 4 4z"
  }));
};

module.exports.Camcorder = function Camcorder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M89.8 21.4c-1.4-.7-3.2-.5-4.4.4L69 33.9V25c0-2.2-1.4-4-3.6-4H4c-2.2 0-4 1.8-4 4v42c0 2.2 1.8 4 4 4h61.4c2.2 0 3.6-1.8 3.6-4v-8.9l16.4 12.1c.7.5 1.7.8 2.5.8.6 0 1.3-.1 1.8-.4 1.4-.7 2.3-2.1 2.3-3.6V25c0-1.5-.9-2.9-2.2-3.6zM61 63H8V29h53v34zm23-4L70 48.4v-4.8L84 33v26z"
  }));
};

module.exports.Camera = function Camera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 27c-12.6 0-22.9 10.4-22.9 23.2C23.1 63 33.4 73.4 46 73.4S68.9 63 68.9 50.2C68.9 37.4 58.6 27 46 27zm0 38.5c-8.2 0-14.9-6.8-14.9-15.2S37.8 35 46 35s14.9 6.8 14.9 15.2S54.2 65.5 46 65.5zm11.1-14.3c-.2 1.8-1.7 3-3.5 3h-.5c-1.9-.3-3.3-2-3-3.9.4-2.9-3-4.5-3.2-4.6-1.7-.8-2.5-2.9-1.7-4.6.8-1.7 2.8-2.5 4.6-1.8 3.2 1.4 8.2 5.4 7.3 11.9zm-7.7 4.4c.7.7 1.2 1.8 1.2 2.8 0 1-.4 2.1-1.2 2.8-.8.7-1.8 1.2-2.8 1.2s-2.1-.4-2.8-1.2c-.7-.8-1.2-1.8-1.2-2.8 0-1.1.4-2.1 1.2-2.8.8-.8 1.8-1.2 2.8-1.2s2.1.4 2.8 1.2zM88 26H72.6l-4.3-16c-.5-1.7-2.1-3-3.9-3H27.5c-1.8 0-3.4 1.3-3.9 3l-4.3 16H4c-2.2 0-4 1.7-4 3.9V81c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4V29.9c0-2.2-1.8-3.9-4-3.9zm-4 51H8V34h14.4c1.8 0 3.4-1.3 3.9-3l4.3-16h30.8l4.3 16c.5 1.7 2.1 3 3.9 3H84v43z"
  }));
};

module.exports.Card = function Card(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 23.4c0-4.1-3.3-7.4-7.4-7.4H7.4C3.3 16 0 19.3 0 23.4v45.3c0 4 3.3 7.3 7.4 7.3h77.3c4.1 0 7.4-3.3 7.4-7.4V23.4zm-8 .6v7H8v-7h76zM8 68V43h76v25H8zm68.5-13c0 2.2-1.8 4-4 4h-19c-2.2 0-4-1.8-4-4s1.8-4 4-4h19c2.2 0 4 1.8 4 4z"
  }));
};

module.exports.Cart = function Cart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z"
  }));
};

module.exports.Checklist = function Checklist(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M36.2 14c0-2.8 2.2-5 5-5H85c2.8 0 5 2.2 5 5s-2.2 5-5 5H41.2c-2.7 0-5-2.2-5-5zM85 41H41.2c-2.8 0-5 2.2-5 5s2.2 5 5 5H85c2.8 0 5-2.2 5-5s-2.2-5-5-5zm0 32H41.2c-2.8 0-5 2.2-5 5s2.2 5 5 5H85c2.8 0 5-2.2 5-5s-2.2-5-5-5zM25 6.5C25 4.6 23.4 3 21.5 3h-15C4.6 3 3 4.6 3 6.5v15C3 23.4 4.6 25 6.5 25h15c1.9 0 3.5-1.6 3.5-3.5v-15zm0 47c0 1.9-1.6 3.5-3.5 3.5h-15C4.6 57 3 55.4 3 53.5v-15C3 36.6 4.6 35 6.5 35h15c1.9 0 3.5 1.6 3.5 3.5v15zM19 42h-9v8h9v-8zm6 43.5c0 1.9-1.6 3.5-3.5 3.5h-15C4.6 89 3 87.4 3 85.5v-15C3 68.6 4.6 67 6.5 67h15c1.9 0 3.5 1.6 3.5 3.5v15zM19 74h-9v9h9v-9z"
  }));
};

module.exports.Checkmark = function Checkmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M34.4 72c-1.2 0-2.3-.4-3.2-1.3L11.3 50.8c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0l16.8 16.7 39.9-39.8c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4l-43.1 43c-1 .9-2.1 1.3-3.3 1.3z"
  }));
};

module.exports.ChevronDown = function ChevronDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 63c-1.1 0-2.1-.4-2.9-1.2l-25-26c-1.5-1.6-1.5-4.1.1-5.7 1.6-1.5 4.1-1.5 5.7.1l22.1 23 22.1-23c1.5-1.6 4.1-1.6 5.7-.1 1.6 1.5 1.6 4.1.1 5.7l-25 26c-.8.8-1.8 1.2-2.9 1.2z"
  }));
};

module.exports.ChevronLeft = function ChevronLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M61.8 68.1c1.6 1.5 1.6 4.1.1 5.7-.8.8-1.9 1.2-2.9 1.2s-2-.4-2.8-1.1l-26-25c-.8-.8-1.2-1.8-1.2-2.9s.4-2.1 1.2-2.9l26-25c1.6-1.5 4.1-1.5 5.7.1 1.5 1.6 1.5 4.1-.1 5.7L38.8 46l23 22.1z"
  }));
};

module.exports.ChevronRight = function ChevronRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M63 46c0 1.1-.4 2.1-1.2 2.9l-26 25C35 74.6 34 75 33 75c-1.1 0-2.1-.4-2.9-1.2-1.5-1.6-1.5-4.1.1-5.7l23-22.1-23-22.1c-1.6-1.5-1.6-4.1-.1-5.7 1.5-1.6 4.1-1.6 5.7-.1l26 25c.8.8 1.2 1.8 1.2 2.9z"
  }));
};

module.exports.ChevronUp = function ChevronUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M71 63c-1.1 0-2.1-.4-2.9-1.2L46 38.8l-22.1 23c-1.5 1.6-4.1 1.6-5.7.1-1.6-1.5-1.6-4.1-.1-5.7l25-26c.8-.8 1.8-1.2 2.9-1.2s2.1.4 2.9 1.2l25 26c1.5 1.6 1.5 4.1-.1 5.7C73 62.6 72 63 71 63z"
  }));
};

module.exports.Clipboard = function Clipboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M77 9H62.1l-1.6-4.2c-1.1-2.9-3.9-4.8-7-4.8H39.3c-3.1 0-5.9 1.9-7 4.8L30.8 9H15c-2.2 0-4 2-4 4.2V88c0 2.2 1.8 4 4 4h62c2.2 0 4-1.8 4-4V13.2C81 11 79.2 9 77 9zm-43.4 8c1.7 0 3.2-1 3.8-2.5L39.8 8h13.4l2.4 6.5c.6 1.6 2.1 2.5 3.8 2.5h3.2l-2.9 5.7c-.5.8-1.4 1.3-2.4 1.3H35.5c-.9 0-1.8-.4-2.3-1.2L29.9 17h3.7zM73 84H19V17h1.7l5.6 10c0 .1.1 0 .1.1 2 3.1 5.4 4.9 9.1 4.9h21.7c3.8 0 7.4-1.9 9.3-5.3 0-.1.1-.2.1-.2l4.8-9.5H73v67z"
  }));
};

module.exports.Clock = function Clock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm0 84C25 84 8 67 8 46S25 8 46 8s38 17 38 38-17 38-38 38zm15.3-28.4c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2s-2-.4-2.8-1.2L43.2 48.8c-.8-.7-1.2-1.7-1.2-2.8V22.2c0-2.2 1.8-4 4-4s4 1.8 4 4v22.2l11.3 11.2z"
  }));
};

module.exports.Clockwise = function Clockwise(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M86.9 41.8 73 55.8c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2l-13.8-14c-1.5-1.6-1.5-4.1 0-5.7 1.6-1.5 4.1-1.5 5.7 0l7.7 7.8c-1-14.5-12.9-26-27.4-26C24.3 18 12 30.6 12 46s12.3 28 27.5 28c5.6 0 11-1.7 15.5-4.9 1.8-1.3 4.3-.8 5.6 1 1.3 1.8.8 4.3-1 5.6-5.9 4.1-12.9 6.3-20.1 6.3C19.9 82 4 65.9 4 46s15.9-36 35.5-36c18.4 0 33.6 14.3 35.3 32.6l6.3-6.4c1.6-1.6 4.1-1.6 5.7 0 1.6 1.5 1.6 4 .1 5.6z"
  }));
};

module.exports.CloudDownload = function CloudDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M91 44.4c-.6 8.6-7.2 17.8-20.3 17.8h-9.1c-2.2 0-4-1.9-4-4.1 0-2.2 1.8-4.1 4-4.1 0 0 3.1.1 9.1.1 8 0 12-5.1 12.4-10.3.4-5.3-3-11.2-11.3-12.4-1.1-.2-2.1-.8-2.7-1.7-.6-.9-.8-2.1-.6-3.2 1.1-4.5-.1-8.1-3-9.8-2.5-1.4-6.5-1.4-9.9 1.9-.9.9-2.2 1.3-3.4 1.1-1.2-.2-2.3-1-2.9-2.1C43.7 7.1 35 6.5 29.3 9.2c-5.5 2.6-9.9 9.1-6.5 17.3.4 1 .4 2.2-.1 3.2s-1.4 1.8-2.4 2.1C8.5 35.5 8.8 43.3 9.1 45.5c.6 4.3 4 8.6 9.3 8.6h12.2c2.2 0 4 1.8 4 4s-1.8 3.9-4 3.9H18.4C9.8 62 2.5 55.6 1.2 46.7c-1-6.9 1.8-16.1 12.7-21C11.5 15 17.5 6 25.7 2.1c8.4-4 20.2-2.9 28.1 8 4.9-2.7 10.7-2.9 15.5-.2 4.1 2.3 7.8 7.2 7.5 14.5 10.4 3.2 14.7 12.2 14.2 20zM59.7 68.6 50 78.4l-.1-36.3c0-2.2-1.8-4.1-4-4.1s-4 1.9-4 4.1l.1 36.2-9.7-9.7c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7l16.5 16.6c.8.8 1.8 1.2 2.8 1.2s2.1-.4 2.8-1.2l16.5-16.5c1.6-1.6 1.6-4.1 0-5.7-1.4-1.6-3.9-1.6-5.5-.1z"
  }));
};

module.exports.CloudUpload = function CloudUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 51.5c-.6 8.7-7.4 18.2-20.7 18.2H62c-2.2 0-4-1.7-4-3.9s1.8-3.8 4-3.8c0 0 3.2-.2 9.3-.2 8.3 0 12.4-5.6 12.8-10.9.4-5.5-3.1-11.6-11.6-12.8-1.1-.2-2.1-.8-2.7-1.7-.6-.9-.8-2.1-.6-3.2 1.1-4.7-.1-8.4-3.2-10.1-2.6-1.5-6.8-1.4-10.2 1.9-.9.9-2.2 1.3-3.4 1.1-1.2-.2-2.3-1-2.9-2.1-5.8-10.9-14.7-11.4-20.6-8.6-5.7 2.7-10.2 9.4-6.7 17.9.4 1 .4 2.2-.1 3.2s-1.4 1.8-2.4 2.1C7.5 42.3 7.8 50.3 8.1 52.7c.7 4.4 4.2 8.9 9.6 8.9l12.5.1c2.2 0 4 1.9 4 4.1 0 2.2-1.8 4.2-4 4.2l-12.4-.3C9 69.7 1.7 62.9.3 53.8c-1.1-7 1.9-16.4 13.1-21.4-2.6-11 3.6-20.3 12-24.2 8.6-4.1 20.7-2.9 28.7 8.2 5-2.8 10.9-3 15.8-.2 4.2 2.4 8 7.4 7.6 14.9 10.6 3.2 15 12.4 14.5 20.4zm-31.9 3.3c.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2 1.6-1.6 1.6-4.1 0-5.7l-16.9-17c-.7-.7-1.7-1.1-2.8-1.1-1.1 0-2.1.4-2.8 1.2l-16.9 17c-1.6 1.6-1.6 4.1 0 5.7 1.6 1.6 4.1 1.6 5.7 0l10-10.3.1 37.4c0 2.2 1.8 4 4 4s4-1.8 4-4L50 44.7l10.1 10.1z"
  }));
};

module.exports.Cloud = function Cloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M71.2 78c-20 0-52.9-.1-53.5-.1C9 77.9 1.6 71.3.2 62.2c-1.1-7.1 1.9-16.6 13.1-21.6-2.6-11.1 3.7-20.5 12.1-24.4 5.3-2.5 11.1-2.8 16.5-1 4.7 1.6 8.9 4.8 12.1 9.3 5-2.8 10.9-3 15.8-.3 4.2 2.4 8.1 7.4 7.7 15 10.7 3.3 15 12.6 14.5 20.6-.7 8.8-7.4 18.2-20.8 18.2zM34.9 22c-2.2 0-4.4.5-6.2 1.4-5.8 2.7-10.3 9.5-6.8 18.1.4 1 .4 2.2-.1 3.2s-1.4 1.8-2.4 2.1C7.5 50.5 7.8 58.6 8.1 61c.7 4.4 4.2 8.9 9.6 8.9.3 0 33.4.1 53.5.1 8.3 0 12.4-5.4 12.8-10.8.4-5.5-3-11.7-11.6-12.9-1.1-.2-2.1-.8-2.7-1.7-.6-.9-.8-2.1-.6-3.2 1.1-4.8-.1-8.5-3.2-10.3-2.6-1.5-6.7-1.4-10.2 2-.9.9-2.2 1.3-3.4 1.1-1.3-.2-2.3-1-2.9-2.1-4-7.5-9.5-10.1-14.5-10.1z"
  }));
};

module.exports.Code = function Code(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M59 75c-1.1 0-2.1-.4-2.9-1.2-1.5-1.6-1.5-4.1.1-5.7l23-22.1-23-22.1c-1.6-1.5-1.6-4.1-.1-5.7 1.5-1.6 4.1-1.6 5.7-.1l26 25c.8.8 1.2 1.8 1.2 2.9s-.4 2.1-1.2 2.9l-26 25C61 74.6 60 75 59 75zm-23.1-1.2c1.5-1.6 1.5-4.1-.1-5.7L12.8 46l23-22.1c1.6-1.5 1.6-4.1.1-5.7-1.5-1.6-4.1-1.6-5.7-.1l-26 25C3.4 43.9 3 44.9 3 46s.4 2.1 1.2 2.9l26 25C31 74.6 32 75 33 75c1 0 2.1-.4 2.9-1.2z"
  }));
};

module.exports.Contract2 = function Contract2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M40.5 51.3c.7.8 1.2 1.9 1.2 2.9v20.9c0 2.2-1.8 3.8-4 3.8h.1c-2.2 0-3.8-1.5-3.8-3.7V64L9 88.8c-.8.8-2 1.2-3 1.2s-2-.4-2.8-1.2c-1.6-1.6-1.6-4.2 0-5.7L28 58H16.7c-2.2 0-4-1.8-4-4s1.8-4 4-4h21c1.1 0 2.1.5 2.8 1.3zM88.8 3.2c-1.6-1.6-4-1.6-5.6 0L58 28.5V17.1c0-2.2-1.8-4.1-4.1-4.1-2.2 0-4 1.8-4 4v21c0 1.1.4 2 1.2 2.8.8.8 1.8 1.1 2.8 1.1h21c2.2 0 4-1.8 4-4s-1.8-4-4-4H63.5L88.8 8.8c1.6-1.6 1.6-4.1 0-5.6z"
  }));
};

module.exports.Contract = function Contract(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88.4 83.2c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.9-1.2L61 67.2v10.3c0 2.2-1.8 4-4 4s-4-1.8-4-4v-20c0-1.1.5-2.1 1.2-2.8.8-.7 1.8-1.2 2.9-1.2h20c2.2 0 4 1.8 4 4s-1.8 4-4 4H66.8l21.6 21.7zM56.9 39h20c2.2 0 4-1.8 4-4s-1.8-4-4-4H66.6L88.8 8.8c1.6-1.6 1.6-4.1 0-5.6-1.6-1.6-4.1-1.5-5.6 0L61 25.4V15.1c0-2.2-1.8-4.1-4-4.1s-4 1.8-4 4v20c0 1.1.4 2 1.2 2.8.7.8 1.7 1.2 2.7 1.2zm-22-27.7c-2.2 0-3.9 1.8-3.9 4v10.3L8.9 3.5C7.3 2 4.8 2 3.2 3.5c-1.6 1.6-1.6 4 0 5.5l22 21.9H15v.1c-2 0-4.1 1.9-4.1 4.1 0 2.2 1.8 4 4 4h20c1 0 2-.4 2.8-1.2.8-.8 1.1-1.8 1.1-2.8v-20c.1-2-1.7-3.8-3.9-3.8zM34.7 53h-20c-2.2 0-4 1.8-4 4s1.8 4 4 4H25L3.2 83c-1.6 1.6-1.6 4.2 0 5.7.8.8 1.8 1.2 2.9 1.2 1 0 2.2-.4 3-1.2L31 67v10.3c0 2.2 1.6 3.7 3.8 3.7h-.1c2.2 0 4-1.6 4-3.8V57.3c0-1.1-.4-2.2-1.2-3-.7-.8-1.7-1.3-2.8-1.3z"
  }));
};

module.exports.Conversation = function Conversation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 24H49v-9.2c0-1.7-2.2-3.8-3.8-3.8H3c-1.7 0-3 2.1-3 3.8v25.6C0 42 1.4 44 3 44h6.1l8 8.7c.6.7 1.4.9 2.3.9.4 0 .5-.1.9-.3 1.2-.4 1.8-1.6 1.8-2.9V44h6v18.6c0 2.2 2.3 4.4 4.5 4.4H60v12.2c0 1.6.8 3.1 2.4 3.7.5.2.9.3 1.4.3 1.1 0 2.1-.2 2.9-1L81.6 67H88c2.2 0 4-2.2 4-4.4V28.9c0-2.2-1.8-4.9-4-4.9zM19.4 38c-1.7 0-3.4.7-3.4 2.4v2l-3.4-3.7c-.6-.7-1.3-.7-2.1-.7H6V17h36v7h-9.5c-2.2 0-4.5 2.7-4.5 4.9V38h-8.6zM84 59h-4.1c-1.1 0-2 .2-2.8 1L68 69.2v-6.7c0-2.2-2.1-3.6-4.3-3.6H36V32h48v27zM41.8 41c0-1.7 1.4-3 3-3h19.1c1.7 0 3 1.3 3 3s-1.4 3-3 3H44.8c-1.7 0-3-1.3-3-3zm29.1 2.1c-.6-.6-.9-1.3-.9-2.1s.3-1.6.9-2.1c1.1-1.1 3.2-1.1 4.3 0 .6.6.9 1.3.9 2.1s-.3 1.6-.9 2.1c-.6.6-1.3.9-2.1.9-.9-.1-1.7-.4-2.2-.9z"
  }));
};

module.exports.Copy = function Copy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 21.9c-.7-.7-1.6-.9-2.5-.9H13.6c-2 0-4.6 1.2-4.6 3.1v63.3c0 2 2.6 4.5 4.6 4.5H61c2 0 3-2.6 3-4.5V41.8c0-.9-.1-1.7-.8-2.4L46 21.9zM55.9 42H43V29.1L55.9 42zM17 84V28h19v17.2c0 2 1.8 3.8 3.8 3.8H57v35H17zm65.4-66L65 .6c-.6-.5-1.2-.6-2-.6H33.1C31.4 0 30 .9 30 2.5v9.6c0 1.7 1.3 3 3 3s3-1.4 3-3V6h21v16.9c0 1.7 1.4 3.1 3.1 3.1H77v37h-4.1c-1.7 0-3 1.3-3 3s1.4 3 3 3h7.6c1.7 0 2.5-1.5 2.5-3.2V20.2c0-.8-.1-1.6-.6-2.2zM63 7l12.9 13H63V7z"
  }));
};

module.exports.Crop = function Crop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88.8 9.8c1.6-1.5 1.6-4.1 0-5.7-1.5-1.6-4.1-1.5-5.7 0L71.2 16H21V8.7c0-2.2-1.8-4-4-4s-4 1.8-4 4V16H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h7v49.9c0 .1.1.2.1.3 0 .2.1.3.1.5 0 .1.1.2.1.4 0 .1.1.3.1.4.1.1.1.2.2.4.1.1.1.2.2.3.1.1.2.3.3.4l.2.2c.2.2.4.3.6.5.1 0 .1.1.2.1l.6.3c.1 0 .2.1.4.1.1 0 .3.1.4.1.3.1.5.1.8.1H69v7c0 2.2 1.8 4 4 4s4-1.8 4-4v-7h7c2.2 0 4-1.8 4-4s-1.8-4-4-4h-7V21.4L88.8 9.8zM63 24 21 64.5V24h42zm6 46H27l42-40.8V70z"
  }));
};

module.exports.Cross = function Cross(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M70.7 64.3c1.8 1.8 1.8 4.6 0 6.4-.9.9-2 1.3-3.2 1.3-1.2 0-2.3-.4-3.2-1.3L46 52.4 27.7 70.7c-.9.9-2 1.3-3.2 1.3s-2.3-.4-3.2-1.3c-1.8-1.8-1.8-4.6 0-6.4L39.6 46 21.3 27.7c-1.8-1.8-1.8-4.6 0-6.4 1.8-1.8 4.6-1.8 6.4 0L46 39.6l18.3-18.3c1.8-1.8 4.6-1.8 6.4 0 1.8 1.8 1.8 4.6 0 6.4L52.4 46l18.3 18.3z"
  }));
};

module.exports.Crosshair = function Crosshair(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46.1 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0C20.6 0 0 20.6 0 46c0 25.3 20.6 46 45.9 46 25.4 0 46-20.6 46-46C92 20.7 71.4 0 46.1 0zM50 83.8V73.5c0-2.2-1.8-4-4-4s-4 1.8-4 4v10.3C24 81.9 10.1 67.7 8.2 50h10.3c2.2 0 4-1.8 4-4s-1.8-4-4-4H8.2C10.1 24.2 24 10.1 42 8.2v10.3c0 2.2 1.8 4 4 4s4-1.8 4-4V8.2c18 1.9 31.9 16 33.8 33.8H73.5c-2.2 0-4 1.8-4 4s1.8 4 4 4h10.3C81.9 67.8 68 81.9 50 83.8z"
  }));
};

module.exports.Cutlery = function Cutlery(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82.8 81.2c1.6 1.6 1.6 4.1 0 5.7C82 87.6 81 88 80 88c-1 0-2-.4-2.8-1.2L45.4 55 14 86.8c-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.1 0-5.7l31.4-31.8-5.4-5.3-.8.8c-2.5 2.5-5.9 3.9-9.5 3.9s-7-1.4-9.5-3.9L1.2 31.7c-1.6-1.6-1.6-4.1 0-5.7s4.1-1.6 5.7 0l13.3 13.2c1 1 2.4 1.6 3.9 1.6s2.8-.6 3.9-1.6l.9-.9-17.3-17c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l17.1 17.1 1-1c2.1-2.1 2.1-5.6 0-7.8L22.1 10.8c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0L41 18.3c5.3 5.3 5.3 13.8 0 19.1l-1 1 5.3 5.3L80.6 7.9c.7-.8 1.8-1.2 2.8-1.2 1 0 2.1.4 2.8 1.2 8.9 8.9 7.4 21.4-3.8 32.6L68.9 54c-1.6 1.6-4.1 1.6-5.7 0-1.6-1.6-1.6-4.1 0-5.7l13.5-13.5c8.1-8.1 7.9-14.2 6.2-17.9L51 49.3l31.8 31.9z"
  }));
};

module.exports.DeviceDesktop = function DeviceDesktop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M84.4 7H7.6C3.4 7 0 10.4 0 14.6v44.3C0 63.1 3.4 67 7.6 67H33v4.1l-7.6 6.1c-1.4 1.1-2 3.2-1.4 4.8.6 1.6 2.1 3 3.8 3h36c1.7 0 3.3-1.4 3.9-3 .6-1.6.1-3.6-1.2-4.7L59 71.1V67h25.4c4.2 0 7.6-3.9 7.6-8.1V14.6c0-4.2-3.4-7.6-7.6-7.6zM53.2 75.8l2.4 2.2H36l2.6-2.3c.8-.7 1.4-1.9 1.4-3V67h12v5.8c0 1 .4 2.3 1.2 3zM84 59H8V15h76v44z"
  }));
};

module.exports.DeviceMobile = function DeviceMobile(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M52.8 76c0 1.7-1.3 3-3 3h-7.7c-1.7 0-3-1.3-3-3s1.3-3 3-3h7.7c1.7 0 3 1.3 3 3zM72 7.6v76.8c0 4.2-3.4 7.6-7.6 7.6H27.6c-4.2 0-7.6-3.4-7.6-7.6V7.6C20 3.4 23.4 0 27.6 0h36.8C68.6 0 72 3.4 72 7.6zM28 8v53h36V8H28zm36 76V67H28v17h36z"
  }));
};

module.exports.DeviceTablet = function DeviceTablet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M51.6 77c0 1.7-1.3 3-3 3h-5.2c-1.7 0-3-1.3-3-3s1.3-3 3-3h5.2c1.7 0 3 1.3 3 3zM83 7.6v76.8c0 4.2-3.4 7.6-7.6 7.6H16.6C12.4 92 9 88.6 9 84.4V7.6C9 3.4 12.4 0 16.6 0h58.8C79.6 0 83 3.4 83 7.6zM17 8v55h58V8H17zm58 76V69H17v15h58z"
  }));
};

module.exports.Direction = function Direction(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M49.9 88c-.2 0-.4 0-.6-.1-1.8-.3-3.2-1.7-3.3-3.5l-3.5-34.8-34.9-3.5c-1.8-.2-3.3-1.6-3.5-3.3-.3-1.8.7-3.5 2.3-4.3l76-34.1c1.5-.7 3.3-.4 4.5.8 1.2 1.2 1.5 3 .8 4.5l-34.1 76c-.7 1.4-2.2 2.3-3.7 2.3zM23.3 39.7 46.4 42c1.9.2 3.4 1.7 3.6 3.6l2.4 23.1L76 16 23.3 39.7z"
  }));
};

module.exports.Disc = function Disc(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm0 8c21 0 38 17 38 38 0 5.3-1.1 10.4-3.1 15.1L58.4 49.9c1.4-4.5.3-9.6-3.2-13.2-3.6-3.6-8.7-4.6-13.2-3.2l-8.1-16.4c-.7-1.5-2.5-2.1-4-1.4-1.5.7-2.1 2.5-1.4 4l8.3 16.8-.1.1-.1.1-22.7-11.1C20.7 15 32.5 8 46 8zm-4.3 33.7c1.2-1.2 2.7-1.8 4.3-1.8s3.1.6 4.3 1.8c2.4 2.4 2.4 6.2 0 8.6-2.4 2.4-6.2 2.4-8.6 0-2.3-2.4-2.3-6.2 0-8.6zM66.4 78l-5.2-10.6c-.7-1.5-2.5-2.1-4-1.4-1.5.7-2.1 2.5-1.4 4l5.3 10.7c-4.6 2-9.8 3.2-15.1 3.2C25 84 8 67 8 46c0-5.3 1.1-10.4 3.1-15.1L33.6 42c-1.4 4.5-.3 9.6 3.2 13.2 2.5 2.5 5.9 3.8 9.2 3.8s6.7-1.3 9.2-3.8l.1-.1L78 66.4C75.1 71 71.1 75 66.4 78zm-8.9-18.5c.6.6 1 1.5 1 2.5 0 .9-.4 1.8-1 2.5s-1.6 1-2.5 1-1.8-.4-2.5-1-1-1.6-1-2.5.4-1.8 1-2.5c1.3-1.3 3.7-1.3 5 0z"
  }));
};

module.exports.DocumentDelete = function DocumentDelete(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M78.8 25.5 56.7 3.2c-.8-.8-1.8-1.2-2.9-1.2H16c-2.2 0-4 1.8-4 4v80c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V28.3c0-1.1-.4-2.1-1.2-2.8zM72 30H52V10h.2L72 30zM20 82V10h24v23.9c0 2.2 1.7 4.1 3.9 4.1H72v44H20zm37.5-29.9-6.6 6.6 6.6 6.6c1.4 1.4 1.4 3.6 0 4.9-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1L46 63.7l-6.5 6.6c-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1-1.4-1.4-1.4-3.6 0-4.9l6.6-6.6-6.6-6.6c-1.4-1.4-1.4-3.6 0-4.9 1.4-1.4 3.6-1.4 4.9 0l6.5 6.6 6.5-6.6c1.4-1.4 3.6-1.4 4.9 0 1.6 1.2 1.6 3.4.2 4.8z"
  }));
};

module.exports.DocumentEdit = function DocumentEdit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M86.1 9.2 79 1.9c-.6-.6-1.4-.9-2.2-.9-.8 0-1.6.3-2.1.9L32.8 44.4c-.3.3-.5.6-.7 1l-4.7 11.9c-.4 1.1-.2 2.4.7 3.2.6.6 1.3.9 2.1.9.4 0 .7-.1 1.1-.2l11.8-4.7c.4-.2.7-.4 1-.7L86 13.3c1.3-1.1 1.3-3 .1-4.1zm-45.7 42-4.8 1.9 1.9-4.9L76.8 8.3l3 3-39.4 39.9zM71 47.6V88c0 2.2-2 4-4.2 4H10c-2.2 0-4-1.8-4-4V11.8C6 9.6 7.8 8 10 8h41.6c2.2 0 4 1.8 4 4s-1.8 4-4 4H14v68h49V47.6c0-2.2 1.8-4 4-4s4 1.8 4 4z"
  }));
};

module.exports.DocumentNew = function DocumentNew(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M78.8 25.5 56.7 3.2c-.8-.8-1.8-1.2-2.9-1.2H16c-2.2 0-4 1.8-4 4v80c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V28.3c0-1.1-.4-2.1-1.2-2.8zM72 30H52V10h.2L72 30zM20 82V10h24v23.9c0 2.2 1.7 4.1 3.9 4.1H72v44H20z"
  }));
};

module.exports.DocumentRemove = function DocumentRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M78.8 25.5 56.7 3.2c-.8-.8-1.8-1.2-2.9-1.2H16c-2.2 0-4 1.8-4 4v80c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V28.3c0-1.1-.4-2.1-1.2-2.8zM72 30H52V10h.2L72 30zM20 82V10h24v23.9c0 2.2 1.7 4.1 3.9 4.1H72v44H20zm38.5-23.5c0 1.9-1.6 3.5-3.5 3.5H37c-1.9 0-3.5-1.6-3.5-3.5S35 55 37 55h18c2 0 3.5 1.6 3.5 3.5z"
  }));
};

module.exports.Document = function Document(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M76 2H16c-2.2 0-4 1.8-4 4v80c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-4 80H20V10h52v72zM29.5 55.5c0-1.9 1.6-3.5 3.5-3.5h11.8c1.9 0 3.5 1.6 3.5 3.5S46.7 59 44.8 59H33c-2 0-3.5-1.6-3.5-3.5zm.5-16c0-1.9 1.6-3.5 3.5-3.5h23.8c1.9 0 3.5 1.6 3.5 3.5S59.3 43 57.3 43H33.5c-1.9 0-3.5-1.6-3.5-3.5zm0-15c0-1.9 1.6-3.5 3.5-3.5h23.8c1.9 0 3.5 1.6 3.5 3.5S59.3 28 57.3 28H33.5c-1.9 0-3.5-1.6-3.5-3.5zm29.7 28.8c.6.6 1 1.5 1 2.5 0 .9-.4 1.8-1 2.5s-1.6 1-2.5 1-1.8-.4-2.5-1-1-1.5-1-2.5c0-.9.4-1.8 1-2.5 1.3-1.3 3.7-1.3 5 0z"
  }));
};

module.exports.Dot = function Dot(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 53c-1.8 0-3.7-.8-5-2.1-1.3-1.3-2-3.1-2-4.9 0-1.8.8-3.6 2-5 1.3-1.3 3.1-2 5-2 1.8 0 3.6.8 4.9 2 1.3 1.3 2.1 3.1 2.1 5 0 1.8-.8 3.6-2.1 4.9-1.3 1.3-3.1 2.1-4.9 2.1z"
  }));
};

module.exports.Dots2 = function Dots2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M34 53c-1.8 0-3.7-.8-5-2.1-1.3-1.3-2-3.1-2-4.9 0-1.8.8-3.6 2-5 1.3-1.3 3.1-2 5-2 1.8 0 3.6.8 4.9 2 1.3 1.3 2.1 3.1 2.1 5 0 1.8-.8 3.6-2.1 4.9-1.3 1.3-3.1 2.1-4.9 2.1zm28.9-2.1c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1z"
  }));
};

module.exports.Dots3 = function Dots3(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M21 53c-1.8 0-3.7-.8-5-2.1-1.3-1.3-2-3.1-2-4.9 0-1.8.8-3.6 2-5 1.3-1.3 3.1-2 5-2 1.8 0 3.6.8 4.9 2 1.3 1.3 2.1 3.1 2.1 5 0 1.8-.8 3.6-2.1 4.9-1.3 1.3-3.1 2.1-4.9 2.1zm29.9-2.1c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm25 0c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1z"
  }));
};

module.exports.Download = function Download(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M89 58.8V86c0 2.8-2.2 5-5 5H8c-2.8 0-5-2.2-5-5V58.8c0-2.8 2.2-5 5-5s5 2.2 5 5V81h66V58.8c0-2.8 2.2-5 5-5s5 2.2 5 5zM42.4 65c.9 1 2.2 1.5 3.6 1.5s2.6-.5 3.6-1.5l19.9-20.4c1.9-2 1.9-5.1-.1-7.1-2-1.9-5.1-1.9-7.1.1L51 49.3V6c0-2.8-2.2-5-5-5s-5 2.2-5 5v43.3L29.6 37.7c-1.9-2-5.1-2-7.1-.1s-2 5.1-.1 7.1l20 20.3z"
  }));
};

module.exports.Duplicate = function Duplicate(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 68.4H27.6c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4H88c2.2 0 4 1.8 4 4v60.3c0 2.3-1.8 4.1-4 4.1zm-56.4-8.1h52.3V8.1H31.6v52.2zm34.8 26.9V76.6c0-1.7-1.4-3-3-3s-3 1.4-3 3V86H6.1V31.7h9.3c1.7 0 3-1.4 3-3s-1.4-3-3-3H4.8c-2.6 0-4.8 2.1-4.8 4.8v56.9C0 89.9 2.1 92 4.8 92h56.9c2.6 0 4.7-2.1 4.7-4.8z"
  }));
};

module.exports.Enter = function Enter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M89 13v66c0 2.2-1.8 4-4 4H32.9c-2.2 0-3.9-1.8-3.9-4V60.7c0-2.2 1.8-4 4-4s4 1.8 4 4V75h44V17H37v14.3c0 2.2-1.8 4-4 4s-4-1.8-4-4V13c0-2.2 1.7-4 3.9-4H85c2.2 0 4 1.8 4 4zM46.5 58.9c-1.6 1.6-1.5 4.1 0 5.7.8.8 1.8 1.2 2.8 1.2 1 0 2.1-.4 2.8-1.2l15.7-15.8c1.5-1.6 1.5-4.1 0-5.6l-15.6-16c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7l8.9 9L7 42c-2.2 0-4 1.8-4 4s1.8 4 4 4l48.4-.1-8.9 9z"
  }));
};

module.exports.Exit = function Exit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M60 60.7V79c0 2.2-1.6 4-3.8 4H4c-2.2 0-4-1.8-4-4V13c0-2.2 1.8-4 4-4h52.2c2.2 0 3.8 1.8 3.8 4v18.3c0 2.2-1.8 4-4 4s-4-1.8-4-4V17H8v58h44V60.7c0-2.2 1.8-4 4-4s4 1.8 4 4zM90.8 43 75.2 27.2c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7l8.9 9-48.5.1c-2.2 0-4 1.8-4 4s1.8 4 4 4l48.5-.1-8.9 9c-1.6 1.6-1.5 4.1 0 5.7.8.8 1.8 1.2 2.8 1.2 1 0 2.1-.4 2.8-1.2l15.7-15.8c1.6-1.7 1.6-4.2 0-5.8z"
  }));
};

module.exports.Expand2 = function Expand2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90 6v21c0 2.2-1.8 4-4 4s-4-1.8-4-4V15.7L56.7 40.9c-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.1 0-5.7L76.3 10H65c-2.2 0-4-1.8-4-4s1.8-4 4-4h21c1.1 0 2.1.4 2.8 1.2.8.7 1.2 1.7 1.2 2.8zM34.9 51.5 10 76.3V65c0-2.2-1.8-4-4-4s-4 1.8-4 4v21c0 1.1.4 2.1 1.2 2.8.7.8 1.7 1.2 2.8 1.2h21c2.2 0 4-1.8 4-4s-1.8-4-4-4H15.7l24.9-24.9c1.6-1.6 1.6-4.1 0-5.7-1.6-1.5-4.2-1.5-5.7.1z"
  }));
};

module.exports.Expand = function Expand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90 6v20c0 2.2-1.8 4-4 4s-4-1.8-4-4V15.7L58.8 38.9c-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.1 0-5.7L76.3 10H66c-2.2 0-4-1.8-4-4s1.8-4 4-4h20c1.1 0 2.1.4 2.8 1.2.8.7 1.2 1.7 1.2 2.8zm-4 56c-2.2 0-4 1.8-4 4v10.3L59.2 53.7c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.1-.1 5.7L75.9 82H65.6c-2.2 0-4 1.8-4 4s1.8 4 4 4h20c1.1 0 2.3-.4 3-1.2C89.4 88 90 87 90 86V66c0-2.2-1.8-4-4-4zm-53.2-8.5L10 76.3V66c0-2.2-1.8-4-4-4s-4 1.8-4 4v20c0 1.1.4 2.1 1.2 2.8C4 89.6 5 90 6.1 90h20c2.2 0 4-1.8 4-4s-1.8-4-4-4H15.7l22.8-22.8c1.6-1.6 1.5-4.1 0-5.7-1.5-1.6-4.1-1.6-5.7 0zM15.7 10.4H26c2.2 0 4-1.8 4-4s-1.8-4-4-4H6c-1.1 0-2.1.4-2.8 1.2C2.4 4.3 2 5.3 2 6.4v20c0 2.2 1.8 4 4 4s4-1.8 4-4V16l23.1 23.1c.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2 1.6-1.6 1.6-4.1 0-5.7l-23-23z"
  }));
};

module.exports.Experiment = function Experiment(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M89.6 4.1C88.9 2.8 87.5 2 86.1 2H5.9c-1.4 0-2.8.8-3.5 2.1-.7 1.3-.4 2.9.4 4.1L34 54v30.3c0 3.1 2.1 5.7 5.3 5.7h13.4c3.1 0 5.3-2.5 5.3-5.7V54L89.2 8.2c.8-1.2 1.1-2.8.4-4.1zM50.9 50.6c-.5.6-.9 1.4-.9 2.2V82h-8V52.8c0-.8-.4-1.6-.9-2.2l-9.5-13.9c2-.6 4.4-1.2 7-1.1 3.1 0 5.2.6 7.5 1.2 2.4.6 4.8 1.2 8.2 1.3 2 0 3.8-.1 5.4-.3l-8.8 12.8zm14.6-21.4c-.1 0-4.3 1.9-11.2 1.8-2.5 0-4.4-.5-6.5-1.1-2.4-.6-5.2-1.3-9.2-1.4-4.5 0-8.5 1.1-11.2 2.1L13.5 10h65.1L65.5 29.2zm-8.2-6.6c-.7-.7-1.2-1.8-1.2-2.8 0-1.1.4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2.7.8 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.8.7-1.8 1.2-2.8 1.2-1 0-2.1-.5-2.8-1.2z"
  }));
};

module.exports.Export = function Export(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M73 76.5v5c0 2.2-1.9 3.5-4.1 3.5H3.6C1.4 85 0 83.8 0 81.5V32.1c0-2.2 1.4-4.2 3.6-4.2h11.7c2.2 0 4 1.8 4 4s-1.8 4-4 4H8V77h57v-.5c0-2.2 1.8-4 4-4s4 1.8 4 4zm17.8-37.3L66 64.5c-1.2 1.2-2.9 1.5-4.4.9-1.6-.7-2.6-2.1-2.6-3.8V50.7c-8-.2-27.2.6-34.2 12.9-.7 1.3-2.1 2.1-3.5 2.1-.3 0-.7 0-1-.1-1.8-.5-3-2.1-3-3.9 0-.6 0-16.1 11.6-27.6C36.2 26.6 46 22.6 59 21.9V11c0-1.6 1-3.1 2.5-3.7 1.6-.6 3.3-.3 4.5.9l24.9 25.3c1.5 1.6 1.5 4.1-.1 5.7zm-8.6-2.9L67 20.9v4.9c0 2.2-1.7 4-4 4-12.4 0-21.9 3.3-28.4 9.9-3 3-5 6.3-6.3 9.5 9.4-5.6 21.3-6.6 28.6-6.6 3.8 0 6.3.3 6.6.3 2 .2 3.5 2 3.5 4v4.9l15.2-15.5z"
  }));
};

module.exports.Feed = function Feed(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M61.7 82.2c-.1 3-2.6 5.3-5.5 5.3H56c-3-.1-5.4-2.7-5.3-5.7.6-14.2-2.8-24.8-10.1-31.7C29 39.2 10.8 41 10.6 41c-3 .3-5.7-1.9-6.1-4.9-.3-3 1.8-5.7 4.9-6.1.9-.1 23.3-2.4 38.7 11.9 9.8 9.2 14.3 22.8 13.6 40.3zM18.5 60.9c-3.4 0-6.8 1.4-9.2 3.8-2.4 2.4-3.8 5.8-3.8 9.2s1.4 6.8 3.8 9.2c2.4 2.4 5.8 3.8 9.2 3.8 3.4 0 6.8-1.4 9.2-3.8 2.4-2.4 3.8-5.8 3.8-9.2s-1.4-6.8-3.8-9.2c-2.4-2.4-5.8-3.8-9.2-3.8zm48.6-38.7C44.2.9 10.8 4.7 9.3 4.8c-3 .4-5.2 3.1-4.8 6.1.4 3 3.1 5.2 6.1 4.8.3 0 29.8-3.3 49 14.5 12.1 11.2 17.7 28.5 16.7 51.5-.1 3 2.2 5.6 5.3 5.7h.2c2.9 0 5.4-2.3 5.5-5.3 1.2-26.2-5.6-46.4-20.2-59.9z"
  }));
};

module.exports.Flag = function Flag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M86.8.1c-1.9-.4-3.8.6-4.5 2.4C81.2 5 70.6 16 61.5 16.4c-5.2.2-10-3.4-15.1-7.2C39.8 4.4 32.5-1 23.1.8 9.2 3.4 2.7 15.9 2.4 16.5c-.4.8-.5 1.8-.3 2.7l4 17.9L17.8 89c.4 1.9 2.1 3.1 3.9 3.1.3 0 .6 0 .9-.1 2.2-.5 3.5-2.6 3-4.8l-6.8-30.3c1.8-2.8 6.9-9.7 14.9-11.5 4.8-1.1 8.6.2 13 1.6 4.9 1.6 10.5 3.5 17.7 1.9C79.5 45.4 89.7 27.4 90 4 90 2.1 88.7.5 86.8.1zm-24.2 41c-5 1.1-8.9-.2-13.4-1.7-4.9-1.6-10.4-3.5-17.3-1.9C25.1 39 20 43 16.5 46.8l-.4-1.8-5.9-26c1.7-2.6 6.4-8.8 14.3-10.3 6-1.1 11.1 2.6 17 7 5.7 4.2 12.3 9 20.2 8.7 6.7-.3 13.6-4.2 19-8.6-2.3 12-8.2 23-18.1 25.3z"
  }));
};

module.exports.Flashlight = function Flashlight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M42.8 46c0 1.7-1.3 3-3 3h-7.6c-1.7 0-3-1.3-3-3s1.3-3 3-3h7.6c1.7 0 3 1.3 3 3zM92 22.7v46.7c0 3.1-2.5 5.7-5.7 5.7h-9.6C60.3 75 50.4 66 47 62H5.7C2.6 62 0 59.4 0 56.3V35.6C0 32.4 2.6 30 5.7 30h41.2c3.4-4 13.3-13 29.8-13h9.6c3.2 0 5.7 2.5 5.7 5.7zM8 54h7V38H8v16zm63 12.6V25.4c-12 2-19.1 10.8-19.1 10.9-.8 1.1-1.7 1.7-3 1.7H21v16h27.8c1.3 0 2.3.6 3 1.7.3.4 7.2 8.9 19.2 10.9zM84 25h-7v42h7V25z"
  }));
};

module.exports.FolderOpen = function FolderOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M91.1 38.6c-.8-1-1.9-1.6-3.1-1.6h-5V26.1c0-1.9-1.4-3.1-3.3-3.1h-35l-4.5-7.4c-.6-1-1.8-1.6-3-1.6H11.4C9.5 14 8 15.1 8 17v20H4c-1.2 0-2.4.6-3.1 1.5s-1.1 2.2-.8 3.4l7.4 33.9c.4 1.8 2 3.2 3.9 3.2h68.3c1.8 0 3.4-1.3 3.9-3l8.3-34c.3-1.2 0-2.4-.8-3.4zM15 21h20.2l4.5 7.4c.6 1 1.8 1.6 3 1.6H76v7H15V21zm61.5 50H14.6L9 45h73.9l-6.4 26z"
  }));
};

module.exports.Folder = function Folder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M80 23H45.5l-4.4-7.1c-.7-1.2-2-1.9-3.4-1.9H12c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4h68c2.2 0 4-1.8 4-4V27.1c0-2.2-1.8-4.1-4-4.1zm-4 47H16V22h19.4l4.4 7.1c.7 1.2 2 1.9 3.4 1.9H76v39z"
  }));
};

module.exports.Forward = function Forward(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M13 75c-.3 0-.7 0-1-.1-1.8-.5-3-2-3-3.9 0-.6.1-15.9 11.5-27.3 7.3-7.3 17.3-11.3 29.9-12V21c0-1.6 1-3.1 2.5-3.7 1.5-.6 3.2-.3 4.4.9l24.6 25c1.5 1.6 1.5 4.1 0 5.6l-24.6 25c-1.1 1.2-2.9 1.5-4.4.9-1.5-.6-2.5-2.1-2.5-3.7V60.2c-8-.2-27 .6-33.9 12.8-.7 1.2-2.1 2-3.5 2zm35.2-22.9c3.7 0 6.3.3 6.6.3 2 .2 3.6 1.9 3.6 4v4.8l15-15.2-15-15.2v4.8c0 2.2-1.8 4-4 4-12.3 0-21.8 3.3-28.2 9.8-2.9 2.9-4.9 6.2-6.3 9.3 9.3-5.6 21.1-6.6 28.3-6.6z"
  }));
};

module.exports.Gaming = function Gaming(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M60.8 30.9c.8.8 1.3 2 1.3 3.2 0 1.2-.5 2.3-1.3 3.2-.8.8-2 1.3-3.2 1.3-1.2 0-2.4-.5-3.2-1.3-.8-.8-1.3-2-1.3-3.2s.5-2.3 1.3-3.2c.8-.8 2-1.3 3.2-1.3 1.2 0 2.4.5 3.2 1.3zm7 6.3c-1.2 0-2.3.5-3.2 1.3-.8.8-1.3 2-1.3 3.2 0 1.2.5 2.4 1.3 3.2.8.8 2 1.3 3.2 1.3 1.2 0 2.4-.5 3.2-1.3.8-.8 1.3-2 1.3-3.2 0-1.2-.5-2.3-1.3-3.2-.8-.8-2-1.3-3.2-1.3zm-34-2.2H31v-2.6c0-1.4-1.1-2.5-2.5-2.5S26 31 26 32.4V35h-2.6c-1.4 0-2.5 1.1-2.5 2.5S22 40 23.4 40H26v2.6c0 1.4 1.1 2.5 2.5 2.5S31 44 31 42.6V40h2.8c1.4 0 2.5-1.1 2.5-2.5S35.2 35 33.8 35zM92 66.1c0 4.3-2.4 7.8-6.2 9.3-3.8 1.4-9.8.8-15.2-5.3-2.6-3-7-8.4-9.4-11.4-12.8 3-25 1.1-30.3 0-2.4 3-6.8 8.4-9.4 11.4-3.9 4.4-8.1 6-11.6 6-1.4 0-2.6-.2-3.7-.6-3.8-1.4-6.2-5-6.2-9.3 0-11.8 7.6-30.3 10-35.8-.8-2.8-.5-5.7 1-8.3 1.9-3.3 5.3-5.8 8.3-6 2.6-.2 6.1 1.3 8.4 2.4 4.5-.8 18.7-2.9 36.6 0 2.2-1.1 5.8-2.6 8.4-2.4 2.9.2 6.4 2.7 8.3 6 1.5 2.6 1.9 5.5 1 8.3 2.4 5.4 10 23.9 10 35.7zm-8 0c0-11.9-9.9-33.9-10-34.1-.5-1.1-.5-2.4.1-3.5.4-.8.4-1.5.1-2.2-.5-1.2-1.7-2.1-2.2-2.3-.9.1-3.3 1.1-5.2 2.1-.8.4-1.7.6-2.6.4-20.5-3.6-36.2-.1-36.3 0-.9.2-1.9.1-2.8-.4-1.9-1-4.3-2-5.2-2.1-.5.3-1.7 1.1-2.2 2.3-.3.8-.3 1.4.1 2.2.5 1.1.6 2.4.1 3.5 0 .2-9.9 22.2-9.9 34.1 0 .9.4 1.5 1 1.8 1.4.5 3.9-.3 6.4-3.1 3.5-4 10.7-13 10.8-13.1 1-1.3 2.7-1.8 4.2-1.3.2 0 15.8 4.4 31.1 0 .4-.1.7-.2 1.1-.2 1.2 0 2.4.5 3.1 1.5.1.1 7.3 9.1 10.8 13.1 2.5 2.9 5 3.7 6.4 3.1.7-.3 1.1-.9 1.1-1.8z"
  }));
};

module.exports.Gear = function Gear(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 65.3c-10.6 0-19.3-8.6-19.3-19.3 0-10.6 8.6-19.3 19.3-19.3 10.6 0 19.3 8.6 19.3 19.3 0 10.6-8.7 19.3-19.3 19.3zm0-31.5c-6.7 0-12.2 5.5-12.2 12.2 0 6.7 5.5 12.2 12.2 12.2 6.7 0 12.2-5.5 12.2-12.2 0-6.7-5.5-12.2-12.2-12.2zM46 92h-.5c-3.5 0-6.5-.4-6.7-.4-1.6-.2-2.8-1.4-3.1-3l-1-7.2c-2.2-.7-4.3-1.6-6.3-2.7L22.8 83c-1.3 1-3 .9-4.3 0-.1-.1-2.5-2-5-4.4l-.4-.4c-2.5-2.5-4.3-4.9-4.4-5-1-1.3-1-3 0-4.3l4.4-5.8c-1.1-2-1.9-4.2-2.6-6.4l-7-1c-1.6-.2-2.8-1.5-3-3.1-.1-.1-.5-3.1-.5-6.6v-.5c0-3.5.4-6.5.4-6.7.2-1.6 1.4-2.8 3-3.1l7.2-1c.7-2.2 1.6-4.3 2.7-6.3L9 22.8c-1-1.3-.9-3 0-4.3.1-.1 2-2.5 4.4-5l.4-.4c2.5-2.5 4.9-4.3 5-4.4 1.3-1 3-1 4.3 0l5.8 4.4c2-1.1 4.2-1.9 6.4-2.6l1-7c.2-1.6 1.5-2.8 3.1-3C39.5.4 42.5 0 46 0h.5c3.5 0 6.5.4 6.7.4 1.6.2 2.8 1.4 3.1 3l1 7.2c2.2.7 4.3 1.6 6.3 2.7L69.2 9c1.3-1 3-.9 4.3 0 .1.1 2.5 2 5 4.4l.4.4c2.5 2.5 4.3 4.9 4.4 5 1 1.3 1 3 0 4.3L79 28.9c1.1 2 1.9 4.2 2.6 6.4l7 1c1.6.2 2.8 1.5 3 3.1 0 .1.4 3.2.4 6.7v.5c0 3.5-.4 6.5-.4 6.7-.2 1.6-1.4 2.8-3 3.1l-7.2 1c-.7 2.2-1.6 4.3-2.7 6.3l4.3 5.7c1 1.3.9 3 0 4.3-.1.1-2 2.5-4.4 5l-.4.4c-2.5 2.5-4.9 4.3-5 4.4-1.3 1-3 1-4.3 0L63.1 79c-2 1.1-4.2 1.9-6.4 2.6l-1 7c-.2 1.6-1.5 2.8-3.1 3-.1 0-3.1.4-6.6.4zm-3.6-7.2c.9.1 2 .1 3.1.1h.5c1.1 0 2.2 0 3.1-.1l.9-6.6c.2-1.5 1.3-2.6 2.7-3 3.1-.7 6.1-1.9 8.8-3.6.8-.5 1.8-.6 2.7-.4.5.1 1 .4 1.4.7l5.3 4c.7-.6 1.5-1.3 2.3-2.1l.4-.4c.8-.8 1.5-1.6 2.1-2.3l-4-5.3c-.9-1.2-.9-2.8-.2-4 1.7-2.6 2.9-5.5 3.6-8.5.3-1.5 1.5-2.7 3-2.9l6.7-.9c.1-.9.1-2 .1-3.1V46c0-1.1 0-2.2-.1-3.1l-6.6-.9c-1.4-.2-2.6-1.3-3-2.7-.7-3.1-1.9-6-3.5-8.7-.2-.2-.3-.5-.4-.8-.4-1.1-.2-2.4.5-3.3l4.1-5.4c-.6-.7-1.3-1.5-2.1-2.3l-.4-.4c-.8-.8-1.6-1.5-2.3-2.1l-5.3 4c-1.3.9-3 .9-4.2 0-2.6-1.6-5.5-2.8-8.5-3.6-1.4-.3-2.5-1.5-2.7-3L49.5 7c-.9-.1-2-.1-3.1-.1H46c-1.1 0-2.2 0-3.1.1l-.9 6.8c-.2 1.6-1.4 2.8-3 3-3 .7-5.9 1.9-8.5 3.5-.8.5-1.8.6-2.7.4-.5-.1-1-.4-1.4-.7l-5.2-4c-.7.6-1.5 1.3-2.3 2.1l-.4.4c-.8.8-1.5 1.6-2.1 2.3l4 5.3c.9 1.2.9 2.7.2 4-.1.1-.1.2-.2.3-1.6 2.6-2.8 5.5-3.5 8.5-.3 1.4-1.5 2.5-3 2.7l-6.7.9c-.1.9-.1 2-.1 3.1v.4c0 1.1 0 2.2.1 3.1l6.6.9c1.6.2 2.8 1.4 3 3v.1c.7 3 1.9 5.8 3.5 8.4.5.9.7 2 .3 3-.1.4-.4.8-.7 1.2L16 70.9c.6.7 1.3 1.5 2.1 2.3l.4.4c.8.8 1.6 1.5 2.3 2.1l5.3-4c1.3-1 3.2-.9 4.4.1 2.6 1.6 5.4 2.7 8.3 3.5 1.4.3 2.5 1.5 2.7 3l.9 6.5z"
  }));
};

module.exports.Graduation = function Graduation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m89.6 31.5-42-18.9c-1.1-.5-2.3-.5-3.3 0l-42 18.9c-1.3.7-2.3 2-2.3 3.6 0 1.5 1 2.9 2.4 3.6L6 40.4v14c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V43l6 3.2v17c0 .7.2 1.3.6 1.9.4.6 9.5 14.2 27.9 14.2 18.9 0 27.6-13.7 28-14.2.3-.5.6-1.2.6-1.8V46.7L90 38.6c1.4-.7 2.2-2.1 2.2-3.6-.2-1.5-1.2-2.8-2.6-3.5zM67 62.1c-2 2.4-8.8 10.2-21.5 10.2-12.4 0-19.5-7.7-21.5-10.2V49.7L44.2 60c.6.3 1.2.4 1.8.4s1.3-.1 1.9-.4L67 50.3v11.8zM46 52 13.2 35.4 46 20.6l32.8 14.8L46 52zm-35 8.3c.7.7 1.2 1.8 1.2 2.8 0 1-.4 2.1-1.2 2.8-.7.7-1.8 1.2-2.8 1.2s-2.1-.4-2.8-1.2c-.7-.7-1.2-1.8-1.2-2.8 0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2s2 .4 2.8 1.2z"
  }));
};

module.exports.GraphBar = function GraphBar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M73 89c-3.3 0-6-2.7-6-6V9c0-3.3 2.7-6 6-6s6 2.7 6 6v74c0 3.3-2.7 6-6 6zm-21-6V33.4c0-3.3-2.7-6-6-6s-6 2.7-6 6V83c0 3.3 2.7 6 6 6s6-2.7 6-6zm-27 0V57.8c0-3.3-2.7-6-6-6s-6 2.7-6 6V83c0 3.3 2.7 6 6 6s6-2.7 6-6z"
  }));
};

module.exports.GraphLine = function GraphLine(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M6 82c-.9 0-1.8-.2-2.6-.7C1 79.9.3 76.8 1.7 74.4L13.9 54c.9-1.4 2.4-2.4 4.1-2.4 1.7-.1 3.3.7 4.3 2.1l5.2 7.2 11-18.8c.8-1.4 2.4-2.4 4-2.5 1.7-.1 3.3.7 4.3 2l9.6 12.9 25.3-42c1.4-2.4 4.5-3.1 6.9-1.7 2.4 1.4 3.1 4.5 1.7 6.9L61.2 66c-.9 1.4-2.4 2.3-4 2.4-1.7.1-3.3-.7-4.3-2l-9.6-12.8-11.1 18.8c-.9 1.5-2.4 2.4-4.1 2.5-1.7.1-3.3-.7-4.3-2.1l-5.2-7.2-8.3 13.9C9.4 81.1 7.7 82 6 82z"
  }));
};

module.exports.GraphPie = function GraphPie(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M33.6 37.2H3.5c-1.9 0-3.5-1.6-3.5-3.5C0 15.1 15.1 0 33.6 0c1.9 0 3.5 1.6 3.5 3.5v30.1c.1 2-1.5 3.6-3.5 3.6zM7.3 30.1h22.9V7.3C18.3 8.8 8.8 18.3 7.3 30.1zM49.1 92C25.4 92 6.2 73.6 6.2 50.9c0-2.2 1.8-4 4-4h36.7V10.2c0-2.2 1.8-4 4-4C73.2 6.2 92 25.8 92 49.1 92 72.7 72.7 92 49.1 92zM14.5 54.9C16.6 71.3 31.3 84 49.1 84 68.3 84 84 68.3 84 49.1c0-17.5-13-32.5-29.1-34.6v36.4c0 2.2-1.8 4-4 4H14.5z"
  }));
};

module.exports.Headset = function Headset(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m89 42.8-.1 25.3c0 2.2-1.8 3.9-4 3.9s-4-1.7-4-3.9l.1-25.3c0-9.3-3.6-18-10.2-24.6C64.2 11.7 55.5 8 46.1 8H46C26.8 8 11.1 23.5 11 42.6V68c0 2.2-1.8 4-4 4s-4-1.8-4-4l.1-25.4C3.1 19.1 22.4 0 46 0h.1c11.5 0 22.3 4.5 30.3 12.6C84.6 20.7 89 31.4 89 42.8zm-52.4 2.1c.7.7 1 1.4 1 2.3l-.1 40.5c0 1.9-1.6 3.3-3.5 3.3-13.2 0-17.5-7.6-18-11.8V55.8c.5-4.1 4.9-11.8 18-11.8h.1c.9 0 1.8.2 2.5.9zm-6 6.2c-6.3 1-7.4 4.7-7.6 5.4l-.1 22.3c.2.8 1.3 4.4 7.6 5.4l.1-33.1zm45.5 5.1.1 22.7v.3c-.5 4.1-4.8 11.8-18 11.8-1.9 0-3.5-1.3-3.5-3.3l-.1-40.3c0-.9.4-1.8 1-2.4.7-.7 1.5-1 2.5-1h.1c13.1 0 17.5 7.7 18 11.9-.1.1-.1.1-.1.3zm-6.9 22.6-.1-22.3c-.2-.8-1.3-4.4-7.6-5.4l.1 33.1c6.4-1.1 7.4-4.7 7.6-5.4z"
  }));
};

module.exports.Heart = function Heart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M86.7 22C82.7 12.9 74 7 64.8 7c-9.3 0-15.3 4.1-18.8 8.5C42.5 11.1 36.5 7 27.2 7 18 7 9.3 12.9 5.3 22 1 31.5 2.8 42 10.2 50.2c17.5 19.7 33 33.6 33.2 33.7.8.7 1.7 1 2.7 1s1.9-.3 2.7-1c.2-.1 15.6-14.1 33.2-33.7 7.2-8.2 9-18.7 4.7-28.2zM75.9 44.9C62.9 59.4 51.1 70.8 46 75.6c-5.1-4.8-16.9-16.1-29.9-30.7-5.2-5.9-6.5-13-3.6-19.7C15.3 19.1 21.2 15 27.2 15c11.9 0 14.6 8.9 14.9 10 .4 1.8 2 3 3.8 3 1.8 0 3.4-1.3 3.9-3 .3-1 3-10 14.9-10 6 0 11.9 4.1 14.7 10.3 3 6.6 1.7 13.7-3.5 19.6zm-1-11.6c.1 1.9-1.3 3.6-3.3 3.7h-.2c-1.8 0-3.4-1.4-3.5-3.3-.4-5.7-4.1-6.6-4.8-6.7-1.9-.3-3.2-2-3-3.9.3-1.9 2.1-3.2 4-3 3.5.5 10.2 3.9 10.8 13.2zm-4.8 5.8c.7.8 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.7.8-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2-.7-.7-1.2-1.8-1.2-2.8 0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2 1 .1 2 .5 2.8 1.2z"
  }));
};

module.exports.Help = function Help(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M78.5 13.5C69.8 4.8 58.3 0 46 0S22.2 4.8 13.5 13.5 0 33.7 0 46s4.8 23.8 13.5 32.5S33.7 92 46 92s23.8-4.8 32.5-13.5S92 58.3 92 46s-4.8-23.8-13.5-32.5zm-9 26.9 13.7-2.1c.5 2.5.8 5.1.8 7.7 0 2.6-.3 5.2-.8 7.7l-13.7-2.1c.8-3.7.8-7.5 0-11.2zm12-8-14.2 2.2c-1.1-2.1-2.5-4-4.2-5.7-1.7-1.7-3.7-3.2-5.7-4.2l2.2-14.2c4.9 1.9 9.5 4.8 13.3 8.6 3.8 3.9 6.7 8.4 8.6 13.3zM46 62.2c-4.3 0-8.4-1.7-11.4-4.7-3.1-3.1-4.7-7.1-4.7-11.4s1.7-8.4 4.7-11.4C37.8 31.5 41.9 30 46 30s8.3 1.6 11.4 4.7c3.1 3.1 4.7 7.1 4.7 11.4 0 4.3-1.7 8.4-4.7 11.4s-7.1 4.7-11.4 4.7zM46 8c2.6 0 5.2.3 7.7.8l-2.1 13.7c-3.7-.9-7.5-.9-11.2 0L38.3 8.8c2.5-.5 5.1-.8 7.7-.8zM19.1 19.1c3.8-3.8 8.4-6.8 13.3-8.6l2.2 14.2c-2.1 1.1-4 2.5-5.7 4.2-1.7 1.7-3.1 3.7-4.3 5.7l-14.2-2.2c2-4.9 4.9-9.4 8.7-13.3zM8 46c0-2.6.3-5.2.8-7.7l13.7 2.1c-.4 1.8-.7 3.7-.7 5.6 0 1.9.2 3.8.7 5.6L8.8 53.7C8.3 51.2 8 48.6 8 46zm2.5 13.6 14.2-2.2c1.1 2.1 2.5 4 4.3 5.7 1.7 1.7 3.7 3.1 5.7 4.3l-2.2 14.2c-4.9-1.9-9.5-4.8-13.3-8.6-3.9-4-6.8-8.5-8.7-13.4zM46 84c-2.6 0-5.2-.3-7.7-.8l2.1-13.7c1.8.4 3.7.7 5.6.7 1.9 0 3.8-.2 5.6-.7l2.1 13.7c-2.5.5-5.1.8-7.7.8zm26.9-11.1c-3.8 3.8-8.4 6.8-13.3 8.6l-2.2-14.2c2.1-1.1 4-2.5 5.7-4.3 1.7-1.7 3.2-3.7 4.2-5.7l14.2 2.2c-1.9 5-4.8 9.5-8.6 13.4z"
  }));
};

module.exports.Home = function Home(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 49c-1 0-2-.4-2.8-1.1L46 9.6 6.8 47.9c-1.6 1.5-4.1 1.5-5.7-.1-1.5-1.6-1.5-4.1.1-5.7l42-41c1.6-1.5 4-1.5 5.6 0l42 41c1.6 1.5 1.6 4.1.1 5.7-.8.8-1.9 1.2-2.9 1.2zm-8.8 39V48.9c0-2.2-1.8-4-4-4s-4 1.8-4 4V84H58.7V62.6c0-2.9-2.4-5.3-5.3-5.3H38.6c-2.9 0-5.3 2.4-5.3 5.3V84H20.8V48.9c0-2.2-1.8-4-4-4s-4 1.8-4 4V88c0 2.2 1.8 4 4 4h20.5c2.2 0 4-1.8 4-4V65.3h9.5V88c0 2.2 1.8 4 4 4h20.5c2.2 0 3.9-1.8 3.9-4z"
  }));
};

module.exports.Hourglass = function Hourglass(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M78 82h-4V71.5c0-5.8-5.8-10.7-11.4-15.5-1.9-1.6-4.6-4-5.6-5.2v-9.7c1-1.1 3.7-3.6 5.6-5.2C68.2 31.2 74 26.3 74 20.5V10h4c2.2 0 4-1.8 4-4s-1.8-4-4-4H14c-2.2 0-4 1.8-4 4s1.8 4 4 4h4v10.5c0 5.8 5.8 10.7 11.4 15.5 1.9 1.6 4.6 4.1 5.6 5.2v9.7c-1 1.1-3.7 3.6-5.6 5.2C23.8 60.8 18 65.7 18 71.5V82h-4c-2.2 0-4 1.8-4 4s1.8 4 4 4h64c2.2 0 4-1.8 4-4s-1.8-4-4-4zM26 71.5c0-2.1 5.6-6.9 8.6-9.4C39.4 58 43 55 43 51.3V40.7c0-3.8-3.6-6.8-8.4-10.9-3-2.5-8.6-7.2-8.6-9.4V10h40v10.5c0 2.1-5.6 6.9-8.6 9.4C52.6 34 49 37 49 40.7v10.5c0 3.8 3.6 6.8 8.4 10.9 3 2.5 8.6 7.2 8.6 9.4V82H26V71.5zM55 19v-2c0-1.9 1.6-3.5 3.5-3.5S62 15 62 17v2c0 1.9-1.6 3.5-3.5 3.5S55 20.9 55 19z"
  }));
};

module.exports.Inbox = function Inbox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 39.2v-.4c0-.1 0-.2-.1-.4 0-.1-.1-.3-.1-.4 0-.1-.1-.2-.1-.4-.1-.1-.1-.2-.2-.3-.1-.1-.2-.2-.2-.4l-.1-.1-21.6-26.3c-.8-1-1.9-1.5-3.1-1.5h-41c-1.2 0-2.3.5-3.1 1.5L.9 36.8l-.1.1c-.1.1-.2.2-.2.4-.1.1-.1.2-.2.3-.1.1-.1.2-.1.4 0 .1-.1.2-.1.4 0 .1-.1.2-.1.4v36.4C0 79.5 3.6 83 8 83h76c4.4 0 8-3.5 8-7.9V39.2zM27.4 17h37.1l15 18H66.3c-1.1 0-2.2.7-3 1.5L54.2 47H37.8l-9.1-10.5c-.8-.9-1.8-1.5-3-1.5H12.4l15-18zM84 75H8V43h15.9l8.7 10c1 1.2 2.5 2 4.1 2h18.6c1.6 0 3-.9 4.1-2l8.7-10H84v32z"
  }));
};

module.exports.Information = function Information(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M43.3 73.8c-.8 0-1.6-.3-2.2-.8-1-.8-1.5-2.1-1.2-3.4l4.9-25-2.7 1.5c-1.7.9-3.8.4-4.8-1.3-.9-1.7-.4-3.8 1.3-4.8l9.3-5.3c1.2-.7 2.7-.6 3.8.2 1.1.8 1.6 2.2 1.4 3.5l-5.1 26 4.2-1.8c1.8-.8 3.8 0 4.6 1.8.8 1.8 0 3.8-1.8 4.6l-10.3 4.5c-.4.2-.9.3-1.4.3zM53.2 26c.9-.9 1.5-2.2 1.5-3.5 0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-1.3 0-2.6.5-3.5 1.5-.9.9-1.5 2.2-1.5 3.5 0 1.3.5 2.6 1.5 3.5.9.9 2.2 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5zM92 46C92 20.6 71.4 0 46 0S0 20.6 0 46s20.6 46 46 46 46-20.6 46-46zm-8 0c0 21-17 38-38 38S8 67 8 46 25 8 46 8s38 17 38 38z"
  }));
};

module.exports.Italic = function Italic(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M50.7 30.6c.8.9 1.1 2.3.8 3.5L44.2 72c1.8-.6 3.9.1 4.8 1.8 1.1 1.9.4 4.4-1.5 5.4L45 80.6c-1 .5-2 .8-3.1.8-1.3 0-2.6-.4-3.7-1.3-2-1.5-3-4-2.5-6.5L42.8 37h-1.7c-2.2 0-4-1.8-4-4s1.8-4 4-4h6.6c1.1 0 2.2.7 3 1.6zm-1.8-17.2c-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7-2.2-4.7-4.7-4.7z"
  }));
};

module.exports.Jewel = function Jewel(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.9 31.2 74 13.3c-.8-.8-1.8-1.3-2.9-1.3H20.9c-1.1 0-2.2.5-2.9 1.3l-16.9 18c-1.5 1.6-1.4 4 .1 5.6l42 42c.8.8 1.8 1.2 2.8 1.2s2.1-.4 2.8-1.2l42-42c1.6-1.6 1.6-4.1.1-5.7zM27.4 37l7.4 21.6L13.2 37h14.2zm22-17 6.4 10H36.2l6.4-10h6.8zM46 70.3v-.2L34.8 37h22.4L46 70.1v.2zM64.6 37h14.3L57.2 58.6 64.6 37zm14.6-7H64l-6.4-10h11.7l9.9 10zM22.6 20h11.7L28 30H12.8l9.8-10z"
  }));
};

module.exports.Lifting = function Lifting(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M77 22v48c0 2.2-1.8 4-4 4s-4-1.8-4-4V50H23v20c0 2.2-1.8 4-4 4s-4-1.8-4-4V22c0-2.2 1.8-4 4-4s4 1.8 4 4v20h46V22c0-2.2 1.8-4 4-4s4 1.8 4 4zM6 27.9c-2.2 0-4 1.8-4 4v28.3c0 2.2 1.8 4 4 4s4-1.8 4-4V31.9c0-2.2-1.8-4-4-4zm80 0c-2.2 0-4 1.8-4 4v28.3c0 2.2 1.8 4 4 4s4-1.8 4-4V31.9c0-2.2-1.8-4-4-4z"
  }));
};

module.exports.Lightbulb = function Lightbulb(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 0C29.6 0 16 13.6 16 30.3c0 10.2 4 18.4 12 23.9V64c0 1.1.7 2.2 1.5 2.9.7.7 1.8 1.1 2.8 1.1h.4l27.5-2.2c2.1-.2 3.9-1.9 3.9-4v-7.5c7-5.1 12-13.9 12-24C76 13.6 62.4 0 46 0zm12 48.5c-1.3.7-2 2.1-2 3.5v6.1l-20 1.6V52c0-1.4-.6-2.7-1.8-3.5-6.9-4-10.1-10-10.1-18.2C24 18 33.9 8 46 8s22 10 22 22.3c-.1 8-3.7 14.8-10 18.2zm5.6 25.8c.2 2.2-1.5 4.1-3.7 4.3l-27.3 2h-.3c-2.1 0-3.8-1.6-4-3.7-.2-2.2 1.5-4.1 3.7-4.3l27.3-2c2.3-.2 4.2 1.5 4.3 3.7zm-8.7 12.6c.2 2.2-1.5 4.1-3.7 4.3l-9.8.8h-.3c-2.1 0-3.8-1.6-4-3.7-.2-2.2 1.5-4.1 3.7-4.3l9.9-.8c2.2-.1 4.1 1.5 4.2 3.7zm7-56.7c-.2 1.8-1.7 3.2-3.5 3.2h-.3c-1.9-.2-3.3-1.9-3.1-3.8.6-5.7-4.4-7.8-5-8-1.8-.7-2.7-2.7-2.1-4.5.6-1.8 2.6-2.8 4.4-2.1 3.7 1.3 10.5 6.2 9.6 15.2z"
  }));
};

module.exports.LinkBroken = function LinkBroken(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M37.2 48c0 2.2-1.8 4-4 4l-6.2.2c-1 0-1.9-.3-2.6-1L1.2 27.8C.4 27 0 26 0 24.9c0-1.1.4-2.1 1.2-2.8L22.1 1.2c1.6-1.6 4.1-1.6 5.7 0l23.4 23.4c1.6 1.6 1.6 4.1 0 5.6-1.6 1.6-4.1 1.5-5.7 0L24.9 9.6 9.7 24.8 29 44h4.1c2.3 0 4.1 1.8 4.1 4zm53.6 16.2L67.6 40.9c-.8-.8-1.6-1-2.6-1l-6.2.1c-2.2 0-4 1.8-4 4s1.8 4 4 4H63l19.4 19.2-15.3 15.2-20.6-20.6c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.6l23.4 23.4c.8.8 1.8 1.2 2.9 1.2 1 0 2-.4 2.8-1.2l20.9-20.9c.8-.7 1.2-1.8 1.2-2.8 0-1.1-.4-2.1-1.2-2.9zM61 22.7c2.2 0 4-1.8 4-4v-10c0-2.2-1.8-4-4-4s-4 1.8-4 4v10c0 2.2 1.8 4 4 4zM72.7 35h10c2.2 0 4-1.8 4-4s-1.8-4-4-4h-10c-2.2 0-4 1.8-4 4s1.8 4 4 4zM31 68.7c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4s4-1.8 4-4v-10c0-2.2-1.8-4-4-4zM18.7 57h-10c-2.2 0-4 1.8-4 4s1.8 4 4 4h10c2.2 0 4-1.8 4-4s-1.8-4-4-4z"
  }));
};

module.exports.Link = function Link(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.8 63.9 67 40.1c-1.6-1.6-4.1-1.6-5.7 0l-7.8 7.8-9.4-9.4 7.8-7.8c1.6-1.6 1.6-4.1 0-5.7L28.1 1.2c-1.6-1.6-4.1-1.6-5.7 0L1.2 22.5c-.8.7-1.2 1.7-1.2 2.8 0 1.1.4 2.1 1.2 2.8L25 51.9c.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2l7.8-7.8 9.4 9.4-7.8 7.8c-1.6 1.6-1.6 4.1 0 5.7l23.8 23.8c.8.8 1.8 1.2 2.8 1.2 1.1 0 2.1-.4 2.8-1.2l21.3-21.3c1.7-1.5 1.7-4.1.1-5.6zm-63-20.5L9.7 25.3 25.3 9.7l18.1 18.1-5 5-3-3c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7l3 3-4.9 4.9zm38.9 38.9L48.6 64.2l5-5 3 3c.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2 1.6-1.6 1.6-4.1 0-5.7l-3-3 5-5 18.1 18.1-15.6 15.7z"
  }));
};

module.exports.List = function List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M91.2 15c0 3.3-2.7 6-6 6H30.1c-3.3 0-6-2.7-6-6s2.7-6 6-6h55.1c3.3 0 6 2.7 6 6zM30.1 52h31.3c3.3 0 6-2.7 6-6s-2.7-6-6-6H30.1c-3.3 0-6 2.7-6 6s2.7 6 6 6zm44.2 19H30.1c-3.3 0-6 2.7-6 6s2.7 6 6 6h44.2c3.3 0 6-2.7 6-6s-2.6-6-6-6zM6.8 8.5c-1.7 0-3.4.7-4.6 1.9s-2 2.9-2 4.6.7 3.4 1.9 4.6c1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6s-.7-3.4-1.9-4.6c-1.1-1.2-2.8-1.9-4.5-1.9zm0 31c-1.7 0-3.4.7-4.6 1.9s-2 2.9-2 4.6.7 3.4 1.9 4.6c1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6s-.7-3.4-1.9-4.6c-1.1-1.2-2.8-1.9-4.5-1.9zm0 31c-1.7 0-3.4.7-4.6 1.9s-2 2.9-2 4.6.7 3.4 1.9 4.6c1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6s-.7-3.4-1.9-4.6c-1.1-1.2-2.8-1.9-4.5-1.9z"
  }));
};

module.exports.Loading = function Loading(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 25.7c-2.2 0-4-1.8-4-4V4.5c0-2.2 1.8-4 4-4s4 1.8 4 4v17.2c0 2.2-1.8 4-4 4zm-11.9 3.9c1.8-1.3 2.2-3.8.9-5.6L24.8 10.1c-1.3-1.8-3.8-2.2-5.6-.9-1.8 1.3-2.2 3.8-.9 5.6l10.1 13.9c.8 1.1 2 1.6 3.2 1.6.9.1 1.8-.2 2.5-.7zm-7.4 10.1c.7-2.1-.5-4.4-2.6-5L7.7 29.4c-2.1-.7-4.4.5-5 2.6-.7 2 .5 4.3 2.6 5l16.4 5.3c.4.1.8.2 1.2.2 1.7 0 3.2-1.1 3.8-2.8zm-19 22.9 16.4-5.3c2.1-.7 3.3-2.9 2.6-5-.7-2.1-2.9-3.2-5-2.6L5.3 55c-2.1.7-3.3 2.9-2.6 5 .5 1.7 2.1 2.8 3.8 2.8.4 0 .8 0 1.2-.2zm17.1 19.3L35 68c1.3-1.8.9-4.3-.9-5.6s-4.3-.9-5.6.9L18.4 77.2c-1.3 1.8-.9 4.3.9 5.6.7.5 1.5.8 2.3.8 1.2 0 2.4-.6 3.2-1.7zM50 87.5V70.3c0-2.2-1.8-4-4-4s-4 1.8-4 4v17.2c0 2.2 1.8 4 4 4s4-1.8 4-4zm22.8-4.7c1.8-1.3 2.2-3.8.9-5.6L63.5 63.3c-1.3-1.8-3.8-2.2-5.6-.9-1.8 1.3-2.2 3.8-.9 5.6l10.1 13.9c.8 1.1 2 1.6 3.2 1.6.9.1 1.8-.2 2.5-.7zm16.5-22.7c.7-2.1-.5-4.4-2.6-5l-16.4-5.3c-2.1-.7-4.4.5-5 2.6-.7 2.1.5 4.4 2.6 5l16.4 5.3c.4.1.8.2 1.2.2 1.7-.1 3.3-1.2 3.8-2.8zm-19-17.8L86.7 37c2.1-.7 3.3-2.9 2.6-5-.7-2.1-2.9-3.2-5-2.6l-16.4 5.3c-2.1.7-3.3 2.9-2.6 5 .5 1.7 2.1 2.8 3.8 2.8.4 0 .8-.1 1.2-.2zm-6.8-13.6 10.1-13.9c1.3-1.8.9-4.3-.9-5.6-1.8-1.3-4.3-.9-5.6.9L57 24c-1.3 1.8-.9 4.3.9 5.6.7.5 1.5.8 2.3.8 1.3 0 2.5-.6 3.3-1.7z"
  }));
};

module.exports.Location = function Location(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M68.4 7.9C62.7 2.8 54.7 0 46 0S29.3 2.8 23.6 7.9C16.6 14.1 13 23.4 13 35c0 25.1 28.9 54.6 30.2 55.8.8.8 1.8 1.2 2.8 1.2s2.1-.4 2.8-1.2C50.1 89.6 79 60.1 79 35c0-11.6-3.6-20.9-10.6-27.1zM46 82.1c-2.7-3-7-8-11.2-14C25.8 55.3 21 43.9 21 35 21 10 40.1 8 46 8c23.2 0 25 20.7 25 27 0 17.6-17.9 39.3-25 47.1zm0-64.8c-8.8 0-15.9 7.3-15.9 16.2S37.2 49.6 46 49.6s15.9-7.3 15.9-16.2S54.8 17.3 46 17.3zm0 25.3c-4.9 0-8.9-4.1-8.9-9.2s4-9.2 8.9-9.2 8.9 4.1 8.9 9.2-4 9.2-8.9 9.2z"
  }));
};

module.exports.LockOpen = function LockOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M73 33H30v-6.9C30 15.9 36.5 9 45.8 9c6.8 0 12.2 3.5 14.5 9.7.8 2.1 3.1 3.1 5.2 2.3 2.1-.8 3.1-3.1 2.3-5.2C64.4 6.6 56 1 45.8 1 31.9 1 22 11.3 22 26.1V33h-3c-2.2 0-4 1.8-4 4v50c0 2.2 1.8 4 4 4h54c2.2 0 4-1.8 4-4V37c0-2.2-1.8-4-4-4zm-4 50H23V41h46v42z"
  }));
};

module.exports.Lock = function Lock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M73 33h-3v-6.9C70 11.3 60 1 46 1S22 11.3 22 26.1V33h-3c-2.2 0-4 1.8-4 4v50c0 2.2 1.8 4 4 4h54c2.2 0 4-1.8 4-4V37c0-2.2-1.8-4-4-4zm-43-6.9C30 15.9 36.6 9 46 9s16 6.9 16 17.1V33H30v-6.9zM69 83H23V41h46v42z"
  }));
};

module.exports.Mail = function Mail(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 22.9v-.7c0-.1-.1-.2-.1-.4 0-.1-.1-.3-.1-.4 0-.1-.1-.2-.2-.3-.1-.1-.1-.3-.2-.4v-.1l-.2-.2-.3-.3c-.1-.1-.2-.2-.3-.2-.1-.1-.2-.2-.3-.2-.1-.1-.2-.1-.3-.2-.1-.1-.2-.1-.3-.2-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.4-.1H3.3c-.1 0-.2.1-.4.1-.1 0-.3.1-.4.1-.1 0-.2.1-.3.2-.1.1-.2.1-.3.2-.1.1-.2.1-.3.2-.1.1-.2.2-.3.2l-.3.3-.2.2v.1c-.1.1-.2.3-.2.4-.1.1-.1.2-.2.3-.1.1-.1.2-.1.4 0 .1-.1.2-.1.4V69c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4L92 22.9c0 .1 0 0 0 0zM75.9 27 46 49.2 16.1 27h59.8zM8 65V31l35.6 26.4c.7.5 1.5.8 2.4.8s1.7-.3 2.4-.8L84 31v34H8z"
  }));
};

module.exports.Map = function Map(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.2 14.8 69.1 4.9c-.1 0-.1 0-.1-.1-.1-.1-.3-.1-.4-.1-.1 0-.3-.1-.4-.1h-.8c-.1 0-.3 0-.4.1-.1 0-.3.1-.4.1-.1 0-.1 0-.2.1l-19.7 9.2-19.9-9.2c-.1 0-.1 0-.2-.1s-.3-.1-.4-.1c-.1 0-.3-.1-.4-.1H25c-.1 0-.3 0-.4.1-.1 0-.3.1-.4.1-.1 0-.1 0-.2.1L2.3 14.8C1 15.4 0 16.6 0 18v65c0 1.2.9 2.3 1.9 3 .6.4 1.4.6 2 .6.5 0 1.1-.1 1.6-.3L25.2 77 45 86.2c.2.1.4.2.6.2h.2c.2 0 .4.1.7.1.2 0 .5 0 .7-.1h.2c.2-.1.4-.1.6-.2L67.7 77l19.7 9.2c.5.2 1 .3 1.5.3.7 0 1.1-.2 1.6-.6 1-.7 1.4-1.8 1.4-3V18c.1-1.4-.4-2.6-1.7-3.2zM42 77.5l-13-6.6V13.7l13 6.6v57.2zM7 20.3l14-6.6v57.2L7 77.5V20.3zm43 0 14-6.6v57.2l-14 6.6V20.3zm35 57.2-14-6.6V13.7l14 6.6v57.2z"
  }));
};

module.exports.MediaLoop = function MediaLoop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M79 32.3V72c0 2.2-1.8 4-4 4H17c-2.2 0-4-1.8-4-4V32.3c0-2.2 1.8-4.3 4-4.3h22.2l-5.4-5.3c-1.6-1.6-1.5-4 0-5.5 1.6-1.6 4.1-1.5 5.7 0l12.2 12.3c1.5 1.6 1.5 4.1 0 5.6L39.5 47.4c-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.2 0-5.7l5.4-5.6H21v32h50V36h-8.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H75c2.2 0 4 2.1 4 4.3z"
  }));
};

module.exports.MediaNext = function MediaNext(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m59.5 42.9-42-33c-1.2-.9-2.8-1.1-4.2-.5-1.4.7-2.3 2.1-2.3 3.6v66c0 1.5.9 2.9 2.3 3.6.6.3 1.2.4 1.7.4.9 0 1.8-.3 2.5-.9l42-33c1-.8 1.5-1.9 1.5-3.1 0-1.2-.6-2.4-1.5-3.1zM19 70.8V21.2L50.5 46 19 70.8zm62-56.2v63.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5V14.6c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5z"
  }));
};

module.exports.MediaPause = function MediaPause(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M33 13v66c0 2.8-2.2 5-5 5s-5-2.2-5-5V13c0-2.8 2.2-5 5-5s5 2.2 5 5zm31-5c-2.8 0-5 2.2-5 5v66c0 2.8 2.2 5 5 5s5-2.2 5-5V13c0-2.8-2.2-5-5-5z"
  }));
};

module.exports.MediaPlay = function MediaPlay(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m69.5 42.9-42-33c-1.2-.9-2.8-1.1-4.2-.5-1.4.7-2.3 2.1-2.3 3.6v66c0 1.5.9 2.9 2.3 3.6.6.3 1.2.4 1.7.4.9 0 1.8-.3 2.5-.9l42-33c1-.8 1.5-1.9 1.5-3.1s-.6-2.4-1.5-3.1zM29 70.8V21.2L60.5 46 29 70.8z"
  }));
};

module.exports.MediaPrevious = function MediaPrevious(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M78.7 9.4c-1.4-.7-3-.5-4.2.5L33 42.9c-1 .8-1.5 1.9-1.5 3.1s.6 2.4 1.5 3.1l41.5 33c.7.6 1.6.9 2.5.9.6 0 1.2-.1 1.7-.4 1.4-.7 2.3-2.1 2.3-3.6V13c0-1.5-.9-2.9-2.3-3.6zM73 70.7 41.9 46 73 21.3v49.4zM19 14.6v63.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5V14.6c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5z"
  }));
};

module.exports.MediaRecord = function MediaRecord(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 84.5C24.8 84.5 7.5 67.2 7.5 46S24.8 7.5 46 7.5 84.5 24.8 84.5 46 67.2 84.5 46 84.5zm0-68c-16.3 0-29.5 13.2-29.5 29.5S29.7 75.5 46 75.5 75.5 62.3 75.5 46 62.3 16.5 46 16.5z"
  }));
};

module.exports.MediaShuffle = function MediaShuffle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M68.2 30C64 30 53.5 40.4 45.8 47.9 34.2 59.1 23.2 70 14.4 70H9c-2.2 0-4-1.8-4-4s1.8-4 4-4h5.4c5.6 0 16.8-11.2 25.8-19.9 11-10.6 20.5-20.1 28-20.1h5.2l-5.5-5.3c-1.6-1.6-1.6-3.9 0-5.5s4.1-1.6 5.7 0l12.3 12.3c.8.8 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8L73.5 41.4c-.8.8-1.8 1.1-2.8 1.1-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.2 0-5.7l5.5-5.6h-5.2zm5.3 20.6c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.2 0 5.8l5.5 5.6h-5.2c-3.3 0-8.8-4.9-14.2-9.9-1.6-1.5-4.1-1.5-5.7.1-1.5 1.6-1.4 4.3.2 5.8 8.4 7.7 14 12 19.8 12h5.2l-5.5 5.3c-1.6 1.6-1.6 4 0 5.6.8.8 1.8 1.1 2.8 1.1 1 0 2-.4 2.8-1.2l12.3-12.3c.8-.8 1.2-1.8 1.2-2.8 0-1.1-.4-2.1-1.2-2.8L73.5 50.6zM9 30h5.4c4.2 0 10.5 5.4 15.5 9.9.8.7 1.7 1.1 2.7 1.1 1.1 0 2.2-.4 3-1.3 1.5-1.6 1.4-4.3-.3-5.8-7.8-7.1-14.4-12-20.9-12H9c-2.2 0-4 1.8-4 4S6.8 30 9 30z"
  }));
};

module.exports.MediaStop = function MediaStop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M84 12.5C84 10 82 8 79.5 8h-68C9 8 7 10 7 12.5v68C7 83 9 85 11.5 85h68c2.5 0 4.5-2 4.5-4.5v-68zM75 76H16V17h59v59z"
  }));
};

module.exports.Medical = function Medical(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.8 22.9c-.7-.7-1.7-.9-2.8-.9H67V10c0-2.2-2-4-4.2-4H29.2C27 6 25 7.8 25 10v12H4c-2.2 0-4 1.3-4 3.5V82c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4V25.7c0-1.1-.4-2-1.2-2.8zM33 14h26v8H33v-8zm51 64H8V30h76v48zM29.7 53.5c0-1.9 1.6-3.5 3.5-3.5H42v-8.9c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V50h9.8c1.9 0 3.5 1.6 3.5 3.5S60.7 57 58.8 57H49v9.4c0 1.9-1.6 3.5-3.5 3.5S42 68.4 42 66.4V57h-8.8c-1.9 0-3.5-1.6-3.5-3.5z"
  }));
};

module.exports.Menu = function Menu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"
  }));
};

module.exports.Message = function Message(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 6H4c-2.2 0-4 1.8-4 4v51.1C0 63.3 1.8 65 4 65h47v17c0 1.7 1.3 3.2 2.8 3.8.5.2 1 .2 1.5.2 1.2 0 2.3-.5 3.1-1.4L75 65h13c2.2 0 4-1.7 4-3.9V10c0-2.2-1.8-4-4-4zm-4 51H73.2c-1.2 0-2.5.6-3.3 1.4L59 71.1v-10c0-2.2-1.4-4.1-3.6-4.1H8V14h76v43zM18.6 28c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4s-1.8 4-4 4h-29c-2.2 0-4-1.8-4-4zm43.9 3.1c-.7-.7-1.2-1.8-1.2-2.8 0-1.1.4-2.1 1.2-2.8.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2.7.7 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.8.8-1.8 1.2-2.8 1.2-1-.1-2-.5-2.8-1.2z"
  }));
};

module.exports.Meter = function Meter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M72.8 24.9 53.4 66.7c-1.7 4.3-4.7 6.8-8 6.8-2.7 0-5-1.4-6.3-3.6-1.4-2.6-1.3-5.8.4-8.5l25.4-40.7c1.3-2 3.9-2.7 6-1.6s2.9 3.6 1.9 5.8zM79.6 37c-1.5-1.6-4-1.7-5.7-.2-1.6 1.5-1.7 4-.2 5.7C80.3 49.7 84 59.1 84 69c0 2.2 1.8 4 4 4s4-1.8 4-4c0-11.9-4.4-23.3-12.4-32zm-30.4-6.6c2.2.2 4.1-1.4 4.3-3.6.2-2.2-1.4-4.1-3.6-4.3-1.3-.1-2.6-.2-3.9-.2-25.4 0-46 21-46 46.8 0 2.2 1.8 4 4 4s4-1.8 4-4c0-21.4 17-38.8 38-38.8 1.1-.1 2.2 0 3.2.1z"
  }));
};

module.exports.Microphone = function Microphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M68.3 88c0 2.2-1.8 4-4.1 4H27.6c-2.3 0-4.1-1.8-4.1-4s1.8-4 4.1-4h14.8v-6.8c0-1.9 1.6-3.5 3.6-3.5s3.6 1.6 3.6 3.5V84h14.7c2.2 0 4 1.8 4 4zm-.9-59c-2 0-3.6 1.6-3.6 3.5v26c0 1.5-.6 2.9-1.6 3.9S59.9 64 58.5 64h-25c-1.4 0-2.7-.6-3.7-1.6-1-1.1-1.6-2.4-1.6-3.9v-26c0-1.9-1.6-3.5-3.6-3.5S21 30.6 21 32.5v26c0 3.3 1.3 6.5 3.6 8.8 2.4 2.4 5.5 3.7 8.9 3.7h25c3.4 0 6.5-1.3 8.9-3.7 2.3-2.4 3.6-5.5 3.6-8.8v-26c0-1.9-1.6-3.5-3.6-3.5zM35.2 56.3c-1.4-1.7-2.2-3.7-2.2-5.7V8.9c0-2 .8-4.1 2.3-5.8C36.9 1.1 39 0 41.1 0h9.7C55.4 0 59 4.8 59 8.8v41.6c0 4-3.6 8.6-8.1 8.6l-9.7.2c-2.2 0-4.4-1-6-2.9zm5.9-5.7c0 .2.3.6.5.8h8.7c.2-.2.5-.6.5-.9V8.8c0-.2-.3-.6-.5-.8h-8.7c-.2.2-.5.7-.5.9v41.7z"
  }));
};

module.exports.Minus = function Minus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M68 50.5H24c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h44c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5z"
  }));
};

module.exports.Monitor = function Monitor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 13c0-2.2-1.8-4-4-4H4c-2.2 0-4 1.8-4 4v52c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4V13zm-8 48H8V17h76v44zM69.5 79c0 2.2-1.8 4-4 4h-39c-2.2 0-4-1.8-4-4s1.8-4 4-4h38.9c2.3 0 4.1 1.8 4.1 4z"
  }));
};

module.exports.Move = function Move(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 46.3c0 1.1-.4 2.1-1.2 2.8l-14.1 14c-.8.8-1.8 1.1-2.8 1.1-1 0-2.1-.4-2.8-1.2-1.6-1.6-1.5-4.2 0-5.7l7.3-7.4H50v28.4l7.3-7.3c1.6-1.6 4.1-1.5 5.7 0 1.6 1.6 1.5 4.1 0 5.7L48.9 90.8c-.8.8-1.8 1.2-2.9 1.2s-2-.4-2.8-1.2l-14.1-14c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.6 0l7.3 7.3V50H13.7l7.3 7.4c1.6 1.6 1.6 4.2 0 5.8-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2L1.2 49.1C.4 48.4 0 47.4 0 46.3s.4-2.1 1.2-2.8l14.1-14.1c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.5 4 0 5.6l-7.3 7H42V13.6l-7.3 7.3c-1.6 1.6-4.1 1.5-5.6 0-1.6-1.6-1.5-4.1 0-5.7l14.1-14c1.6-1.6 4.1-1.6 5.6 0l14.2 14c1.6 1.6 1.6 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2L50 13.6V42h28.3L71 34.9c-1.6-1.6-1.6-3.9 0-5.5s4.1-1.6 5.7 0l14.1 14.1c.8.7 1.2 1.7 1.2 2.8z"
  }));
};

module.exports.Music = function Music(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88.9 6.3c0-1.2-.5-2.4-1.5-3.1-.9-.8-2.1-1.1-3.3-.8L33.7 12.6c-1.9.4-3.2 2-3.2 3.9v45.9c-2.8-1.6-6.2-2.5-9.8-2.5-4.6 0-8.9 1.4-12.3 4.2C4.9 67.1 3 70.7 3 75c0 8.5 8 15 17.7 15 4.6 0 8.7-1.2 12-3.9 3.5-2.9 5.2-6.7 5.2-10.9v.1l.3-39.2 42.5-8.6v23.8C78 49.7 74.8 49 71.2 49c-4.6 0-8.9 1.3-12.3 4-3.5 2.9-5.5 6.6-5.5 10.9 0 8.5 8 15.1 17.7 15.1 9.3 0 17-6.1 17.7-14.1v-1.6l.1-57zm-61 73.6C26 81.5 23.5 82 20.7 82c-5.3 0-9.7-3-9.7-7 0-1.8.9-3.4 2.6-4.7 1.9-1.6 4.4-2.2 7.2-2.2 5.3 0 9.8 3.2 9.8 7.2-.1 1.7-1 3.2-2.7 4.6zm10.6-51v-9.1l42.4-8.7v9.1l-42.4 8.7zM71.2 71c-5.3 0-9.8-3.2-9.8-7.2 0-1.8.9-3.3 2.6-4.7 1.9-1.6 4.4-2.1 7.2-2.1 5 0 9.8 2.6 9.8 6.4v1.1c-1 3.8-4.8 6.5-9.8 6.5z"
  }));
};

module.exports.Network1 = function Network1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M65.4 69.6c-4.5 0-8.3 3.4-9.9 6.4H33.7c-1.7 0-2.7-.9-2.7-2.6V51h24.5c1.6 4 5.4 6.5 9.9 6.5 5.9 0 10.7-4.8 10.7-10.6s-4.8-10.6-10.7-10.6c-4.5 0-8.3 2.7-9.9 6.7H31V21.5l-.2-.1c3.9-1.6 6.6-5.4 6.6-9.8C37.4 5.7 32.6 1 26.7 1 20.8.9 16 5.7 16 11.5c0 4.4 2.9 8.3 6.8 9.8l.2.1v52C23 79.5 27.6 84 33.7 84h21.8c1.6 4 5.4 6.9 9.9 6.9 5.9 0 10.7-4.8 10.7-10.6s-4.9-10.7-10.7-10.7zm0-27.3c2.6 0 4.7 2.1 4.7 4.6 0 2.5-2.1 4.6-4.7 4.6s-4.7-2.1-4.7-4.6c0-2.6 2.1-4.6 4.7-4.6zM26.6 6.9c2.6 0 4.7 2.1 4.7 4.6s-2.1 4.6-4.7 4.6-4.7-2.1-4.7-4.6 2.2-4.6 4.7-4.6zm38.8 78.2c-2.6 0-4.7-2.1-4.7-4.6s2.1-4.6 4.7-4.6 4.7 2.1 4.7 4.6-2.2 4.6-4.7 4.6z"
  }));
};

module.exports.Network2 = function Network2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M77.1 11.6C77.1 5.8 72.3 1 66.4 1c-5.9 0-10.7 4.8-10.7 10.6 0 4.4 2.7 8.2 6.6 9.8-.1 1.8-1.2 13-16.9 18.7-7.1 2.6-12.4 6.1-15.4 9.7V21.4c4-1.6 6.4-5.4 6.4-9.8C36.4 5.8 31.5 1 25.7 1c-5.9 0-10.5 4.8-10.5 10.6 0 4.4 2.8 8.2 6.8 9.8v49.2c-4 1.6-6.9 5.4-6.9 9.8 0 5.8 4.7 10.6 10.5 10.6 5.9 0 10.8-4.8 10.8-10.6 0-4.4-2.5-8.2-6.5-9.8v-3.2c0-1.1.5-13.3 18.3-19.8 21.2-7.7 22.2-24.2 22.2-26.2 4-1.6 6.7-5.4 6.7-9.8zM25.6 7c2.6 0 4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6c-2.6 0-4.6-2.1-4.6-4.6S23 7 25.6 7zm0 78C23 85 21 82.9 21 80.4s2.1-4.6 4.6-4.6c2.6 0 4.6 2.1 4.6 4.6S28.1 85 25.6 85zm40.8-68.8c-2.6 0-4.6-2.1-4.6-4.6S63.9 7 66.4 7C69 7 71 9.1 71 11.6s-2 4.6-4.6 4.6z"
  }));
};

module.exports.Network3 = function Network3(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M83 70.6V49c0-6.1-4.3-11-10.4-11H50V21.4c3.9-1.6 6.6-5.4 6.6-9.8C56.6 5.8 51.9 1 46 1c-5.9 0-10.6 4.8-10.6 10.6 0 4.4 2.8 8.2 6.6 9.8V38H19.4C13.3 38 9 43 9 49v21.6c-4 1.6-6.9 5.4-6.9 9.8C2.1 86.2 6.7 91 12.5 91s10.8-4.8 10.8-10.6c0-4.4-3.4-8.2-6.4-9.8V49c0-1.7.8-3 2.4-3H42v24.6c-4 1.6-6.6 5.4-6.6 9.8C35.4 86.2 40.1 91 46 91c5.9 0 10.6-4.8 10.6-10.6 0-4.4-2.6-8.2-6.6-9.8V46h22.6c1.7 0 2.4 1.4 2.4 3v21.6c-3 1.6-6.3 5.4-6.3 9.8 0 5.8 4.9 10.6 10.8 10.6s10.4-4.8 10.4-10.6c0-4.4-2.9-8.2-6.9-9.8zM46 7c2.5 0 4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6c-2.5 0-4.6-2.1-4.6-4.6S43.5 7 46 7zM12.4 85c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6c2.5 0 4.6 2.1 4.6 4.6S14.9 85 12.4 85zM46 85c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6c2.5 0 4.6 2.1 4.6 4.6S48.5 85 46 85zm33.6 0c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6c2.5 0 4.6 2.1 4.6 4.6S82.1 85 79.6 85z"
  }));
};

module.exports.Network4 = function Network4(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M38.7 11.2C38.7 5.3 34 .5 28.1.5 22.3.5 17 5.3 17 11.2c0 4.5 3 8.3 6 9.9v49.8c-3 1.6-6 5.4-6 9.9 0 5.9 5.1 10.7 10.9 10.7 5.9 0 10.6-4.8 10.6-10.7 0-4.5-2.6-8.3-6.6-9.9V21.1c4.1-1.6 6.8-5.4 6.8-9.9zM28.3 6.6c2.5 0 4.5 2.1 4.5 4.6s-2 4.6-4.5 4.6-4.5-2.1-4.5-4.6 1.9-4.6 4.5-4.6zm0 78.8c-2.5 0-4.5-2.1-4.5-4.6s2-4.6 4.5-4.6 4.5 2.1 4.5 4.6-2 4.6-4.5 4.6zM69 70.9V21.1c3-1.6 6-5.4 6-9.9C75 5.3 69.9.5 64 .5S53.4 5.3 53.4 11.2c0 4.5 2.6 8.3 6.6 9.9v49.8c-4 1.6-6.7 5.4-6.7 9.9 0 5.9 4.7 10.7 10.6 10.7S75 86.7 75 80.8c0-4.5-3-8.3-6-9.9zM63.7 6.6c2.5 0 4.5 2.1 4.5 4.6s-2 4.6-4.5 4.6-4.5-2.1-4.5-4.6 2-4.6 4.5-4.6zm0 78.8c-2.5 0-4.5-2.1-4.5-4.6s2-4.6 4.5-4.6 4.5 2.1 4.5 4.6-1.9 4.6-4.5 4.6z"
  }));
};

module.exports.Network5 = function Network5(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M50 70.6V21.4c3.8-1.6 6.5-5.4 6.5-9.8C56.5 5.8 51.8 1 46 1S35.5 5.8 35.5 11.6c0 4.4 2.7 8.2 6.5 9.8v49.2c-3.8 1.6-6.5 5.4-6.5 9.8C35.5 86.2 40.2 91 46 91s10.5-4.8 10.5-10.6c0-4.4-2.7-8.2-6.5-9.8zM46 7c2.5 0 4.5 2.1 4.5 4.6s-2 4.6-4.5 4.6-4.5-2.1-4.5-4.6S43.5 7 46 7zm0 78c-2.5 0-4.5-2.1-4.5-4.6s2-4.6 4.5-4.6 4.5 2.1 4.5 4.6-2 4.6-4.5 4.6z"
  }));
};

module.exports.Pamphlet = function Pamphlet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M81.6 3c-1-.6-2.2-.7-3.2-.2l-21.1 9.9-21.2-9.9c-.1 0-.1 0-.2-.1s-.3-.1-.4-.1c-.1 0-.3-.1-.4-.1h-.8c-.1 0-.3 0-.4.1-.1 0-.3.1-.4.1-.1 0-.1 0-.2.1l-23 10.6C9 14 8 15.2 8 16.6V86c0 1.2.9 2.3 1.9 3 .6.4 1.3.5 2 .5.5 0 1.1-.1 1.5-.3l21.2-9.9 21.2 9.9c.2.1.4.2.6.2h.2c.2 0 .4.1.7.1s.4 0 .7-.1h.2c.2-.1.4-.1.6-.2l22.4-10.6c1.2-.6 1.8-1.8 1.8-3.2V6c0-1.2-.4-2.3-1.4-3zM54 80.5l-16-7.3V11.5l16 7.3v61.7zM15 18.8l16-7.3v61.7l-16 7.3V18.8zm61 54.4-15 7.3V18.8l15-7.3v61.7z"
  }));
};

module.exports.Paperclip = function Paperclip(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M85 36.6c1.4 1.4 1.4 3.6 0 5L45.2 81.3C38.6 88 31.1 91.5 23.9 91.5c-1.8 0-3.6-.2-5.4-.7-7-1.9-12.4-7.3-14.3-14.6-2.4-9 .8-18.8 8.9-26.9L57.5 5c7.2-7.2 17.2-4.9 23 .9 7.9 7.9 5.7 17.2.4 22.5L36.2 73c-5.9 5.9-12.6 5.5-16 2-3.4-3.5-3.8-10 2.1-16l30.2-30.2c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 5L27.1 64c-2.6 2.6-3 5.1-2.1 6.1 1 1 3.5.6 6.1-2l44.7-44.7c4.5-4.5 2.6-9.6-.4-12.6-3.4-3.4-8.9-5.1-13.1-.8L18.1 54.3c-6.3 6.3-8.9 13.6-7.1 20.1 1.3 4.8 4.8 8.4 9.4 9.6 6.2 1.7 13.3-1.1 19.9-7.7l39.8-39.8c1.3-1.2 3.5-1.2 4.9.1z"
  }));
};

module.exports.Pencil = function Pencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m89.1 6.1-3.2-3.2C84 1 81.6 0 78.9 0s-5.1 1-7 2.9L8.7 66.2c-.4.4-.7.8-.9 1.4L.3 86.5c-.6 1.5-.3 3.2.9 4.3C1.9 91.6 3 92 4 92c.5 0 1-.1 1.5-.3l19-7.4c.5-.2 1-.5 1.4-.9l63.3-63.3c3.8-3.8 3.8-10.1-.1-14zM14.8 71.7l5.6 5.6-9.3 3.6 3.7-9.2zm68.6-57.2L28.2 69.7l-5.8-5.8L77.5 8.6c.5-.5 1.1-.6 1.4-.6s.9.1 1.4.6l3.2 3.2c.7.7.7 1.9-.1 2.7z"
  }));
};

module.exports.Phone = function Phone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m88.5 12.5-.2-.2-10.8-9.4C76 1.5 74 .8 71.8 1c-1.9.2-3.8 1-5.2 2.4l-.3.3-10.6 13.4c-2.8 3-2.7 7.6.2 10.5.2.2.4.4.6.5l5.4 3.6c-.4 1.9-3.2 7.3-13.1 17.2-9.8 9.8-15.3 12.6-17.1 13l-3.6-5.4c-.1-.2-.3-.4-.5-.6-2.9-2.9-7.6-2.9-10.5-.2L3.8 66.3l-.3.3c-3 3-3.2 8-.5 10.9l9.4 10.7.2.2c1.8 1.8 4.6 2.5 7.7 2.5 5.5 0 11.8-2.2 15.1-3.5 6.4-2.5 18.9-8.6 31.3-21 9.2-9.2 16.6-20.3 21-31.3 1.8-5 6-17.4.8-22.6zM60.9 60.9C42.4 79.4 21.6 84.5 18.1 82.8L9 72.3 22 62l3.5 5.3c.1.1.1.2.2.3 1.2 1.5 2.9 2.3 4.9 2.4 1.9.1 7.8.4 23.7-15.5 3.9-3.9 15.9-15.9 15.5-23.7-.1-2-1-3.7-2.4-4.9-.1-.1-.2-.2-.3-.2L62 22.1 72.3 9l10.4 9.1c1.8 3.5-3.3 24.3-21.8 42.8z"
  }));
};

module.exports.PhotoGroup = function PhotoGroup(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m91.7 25.4-9.5 45.8c-.3 1.4-1.5 2.4-2.9 2.4-.2 0-.4 0-.6-.1-1.6-.3-2.7-1.9-2.3-3.5l8.9-42.8-57.4-11.7-1.4 6.4c-.4 1.6-2 2.6-3.6 2.3-1.6-.4-2.6-2-2.3-3.6l2.1-9.3c.4-1.6 1.9-2.6 3.5-2.3l63.2 12.8c.8.2 1.5.6 1.9 1.3.4.7.5 1.5.4 2.3zM73 80c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V31c0-2.2 1.8-4 4-4h65c2.2 0 4 1.8 4 4v49zM8 35v24.7L24.9 46c1.3-1.1 3.4-1.1 4.7.1l19 16.8 7.9-6.8c1.3-1.1 2.8-1.1 4.1 0l3.3 3.4V35H8zm56 41v-7.3l-5.6-5.3-7.6 6.8a3.48 3.48 0 0 1-4.5 0L27 53.3 8 68.8V76h56zM47.4 51.3c3.4 0 6.1-2.7 6.1-6.1 0-3.4-2.8-6.1-6.1-6.1-3.4 0-6.1 2.7-6.1 6.1-.1 3.3 2.7 6.1 6.1 6.1z"
  }));
};

module.exports.Photo = function Photo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 11H4c-2.2 0-4 1.8-4 4v62c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4V15c0-2.2-1.8-4-4-4zm-4 8v33.5l-6.7-5.6c-1.5-1.2-3.6-1.2-5.1 0l-10.8 9-25.1-21.8c-1.5-1.3-3.6-1.3-5.1-.1L8 52.7V19h76zM8 73V63l25.6-20.7 25.1 21.8c1.5 1.3 3.7 1.3 5.2.1l10.8-9L84 63v10H8zm44.1-40.4c0-4 3.3-7.3 7.4-7.3 4.1 0 7.4 3.3 7.4 7.3s-3.3 7.3-7.4 7.3c-4.1 0-7.4-3.3-7.4-7.3z"
  }));
};

module.exports.Pill = function Pill(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M83.1 8.9C78.7 4.4 72.8 2 66.5 2S54.4 4.4 49.9 8.9l-41 41C4.4 54.4 2 60.3 2 66.5s2.4 12.2 6.9 16.6c4.4 4.4 10.3 6.9 16.6 6.9s12.2-2.4 16.6-6.9L83.2 42c4.4-4.4 6.9-10.3 6.9-16.6s-2.5-12.1-7-16.5zM36.4 77.5c-2.9 2.9-6.8 4.5-10.9 4.5s-8-1.6-10.9-4.5c-2.9-2.9-4.5-6.8-4.5-10.9s1.6-8 4.5-10.9L31.3 39c4.6 3 15.9 11.1 21.9 21.8L36.4 77.5zm41.1-41.1L58.3 55.6c-6.4-10.3-16.6-18.1-22-21.8l19.3-19.3c2.9-2.9 6.8-4.5 10.9-4.5s8 1.6 10.9 4.5c2.9 2.9 4.5 6.8 4.5 10.9s-1.5 8.1-4.4 11zm-20-11.7c1.4 1.4 1.4 3.6 0 5l-4.8 4.8c-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1c-1.4-1.4-1.4-3.6 0-5l4.8-4.8c1.4-1.4 3.6-1.4 5 0zm8-8.1c.7.7 1.2 1.8 1.2 2.8 0 1-.4 2.1-1.2 2.8-.7.7-1.8 1.2-2.8 1.2-1.1 0-2.1-.4-2.8-1.2-.7-.8-1.2-1.8-1.2-2.8 0-1.1.4-2.1 1.2-2.8.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.5 2.8 1.2z"
  }));
};

module.exports.Pin = function Pin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.8 26.4 65.6 1.2c-1.6-1.6-4.1-1.6-5.7 0-.3.3-7.6 7.8-4.8 17.6L43.7 30.2c-6.3-1.9-22.4-5.2-34.3 6.7-1.6 1.6-1.6 4.1 0 5.7l17.2 17.2L1.2 85.2c-1.6 1.6-1.6 4.1 0 5.7C2 91.6 3 92 4 92s2-.4 2.8-1.2l25.4-25.4 17.2 17.2c.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2 11.9-11.9 8.6-28.1 6.7-34.3l11.4-11.4c9.8 2.8 17.2-4.5 17.6-4.8 1.7-1.6 1.7-4.1.1-5.7zm-16.9 2.2c-1.5-.7-3.3-.4-4.5.8l-15 15c-1.1 1.1-1.5 2.9-.9 4.3 0 0 1.8 4.5 2.1 10.3.3 5.8-.9 10.7-3.6 14.8L35 57 18 40c10.7-7.2 24.5-1.8 25.1-1.5 1.5.6 3.2.3 4.4-.9l15-15c1.2-1.2 1.5-3 .8-4.5-1.4-3-.9-5.7 0-7.8l18.4 18.4c-2 .8-4.8 1.3-7.8-.1zM50.2 50.3c.1.3 1.4 3.2 1.3 6.3 0 1.9-1.6 3.4-3.5 3.4h-.1c-1.9-.1-3.5-1.7-3.4-3.6 0-1.3-.5-2.8-.7-3.3-.8-1.8 0-3.8 1.8-4.6 1.8-.7 3.9 0 4.6 1.8z"
  }));
};

module.exports.Plus = function Plus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M72.5 46.5c0 2.5-2 4.5-4.5 4.5H50v17c0 2.5-2 4.5-4.5 4.5S41 70.5 41 68V51H24c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h17V24c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v18h18c2.5 0 4.5 2 4.5 4.5z"
  }));
};

module.exports.Power = function Power(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 47.5c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4s4 1.8 4 4v34.5c0 2.2-1.7 4-4 4zm38 1.3c0-14.6-8.1-27.7-21.1-34.2-2-1-4.4-.2-5.4 1.8s-.2 4.4 1.8 5.4C69.6 26.9 76 37.3 76 48.8 76 65.5 62.5 79 46 79S16 65.5 16 48.8c0-11.6 6.4-21.9 16.7-27.1 2-1 2.8-3.4 1.8-5.4-1-2-3.4-2.8-5.4-1.8C16.1 21.1 8 34.2 8 48.8 8 69.9 25 87 46 87s38-17.1 38-38.2z"
  }));
};

module.exports.Preview = function Preview(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M91.3 43.8C90.6 42.8 74.4 19 46 19S1.4 42.8.7 43.8c-.9 1.3-.9 3.1 0 4.5C1.4 49.2 17.6 73 46 73s44.6-23.8 45.3-24.8c.9-1.3.9-3.1 0-4.4zM46 65C26.7 65 13.5 51.4 9 46c4.5-5.5 17.6-19 37-19 19.3 0 32.5 13.6 37 19-4.6 5.5-17.7 19-37 19zm2.3-35.4c-4.4-.6-8.7.5-12.3 3.2-7.3 5.5-8.8 15.9-3.3 23.2 2.7 3.6 6.5 5.8 10.9 6.5.8.1 1.6.2 2.3.2 3.6 0 7-1.2 9.9-3.3 7.3-5.5 8.8-15.9 3.3-23.2-2.5-3.7-6.4-6-10.8-6.6zm4 24.9c-2.2 1.7-5 2.4-7.8 2-2.8-.4-5.3-1.9-7-4.1-3.4-4.7-2.5-11.4 2.2-14.9 2.2-1.7 5-2.4 7.8-2 2.8.4 5.3 1.9 7 4.1 3.4 4.7 2.5 11.4-2.2 14.9zM51.9 40c.8.7 1.2 1.8 1.2 2.8 0 1-.4 2.1-1.2 2.8-.7.7-1.8 1.2-2.8 1.2-1.1 0-2.1-.4-2.8-1.2-.8-.8-1.2-1.8-1.2-2.8 0-1.1.4-2.1 1.2-2.8.7-.8 1.8-1.2 2.8-1.2 1.1.1 2.1.5 2.8 1.2z"
  }));
};

module.exports.Print = function Print(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 17H68V5c0-1.7-.9-3-2.5-3h-39C24.9 2 24 3.3 24 5v12H4c-2.2 0-4 1.7-4 3.9v45.9C0 69 1.8 71 4 71h14.7l-2.4 15.6c-.2 1 .1 2.2.8 3 .7.8 1.6 1.4 2.7 1.4h52.5c1 0 2-.7 2.7-1.5.7-.8 1-1.8.8-2.8L73.3 71H88c2.2 0 4-2 4-4.2V20.9c0-2.2-1.8-3.9-4-3.9zM30 8h32v9H30V8zm-6.2 76 3.8-25h36.8l3.8 25H23.8zM84 63H72.1l-1.3-8.2c-.3-1.7-1.7-2.8-3.5-2.8H24.6c-1.7 0-3.2 1.1-3.5 2.8L19.9 63H8V25h76v38zM18.3 35c0-1.7 1.3-3 3-3h9.4c1.7 0 3 1.3 3 3s-1.3 3-3 3h-9.4c-1.6 0-3-1.3-3-3z"
  }));
};

module.exports.Pulse = function Pulse(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 57c0 2.2-1.8 4-4 4H69.2c-1.7 0-3.2-.9-3.8-2.6l-3-8.4-9.8 33.1c-.5 1.7-2.1 2.9-3.8 2.9h-.1c-1.8-.1-3.4-1.3-3.8-3.1L32 27l-7.8 31.1c-.4 1.8-2 2.9-3.9 2.9H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h13.2L28.3 8.9c.4-1.8 2.1-2.9 3.9-2.9 1.8 0 3.4 1.3 3.9 3.1l13.2 57.2 9-30.4c.5-1.7 2-2.9 3.7-2.9 1.7-.1 3.3 1 3.9 2.6L72 53h16c2.2 0 4 1.8 4 4z"
  }));
};

module.exports.Question = function Question(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M60.9 25.5c3.2 3.6 4.7 8.5 4 13.7-1.2 9.6-8.2 13-14.4 13H50v2.4c0 2.2-1.8 4-4 4s-4-1.8-4-4v-3.2c0-3.3 1.4-7.2 8.5-7.2 3.9 0 5.9-2 6.4-6 .2-1.3.3-4.8-2.1-7.4-1.9-2.1-5-3.2-9.2-3.2-9 0-9.3 5.9-9.3 6.5 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-4 3.1-14.5 17.3-14.5 8.3 0 12.9 3.2 15.3 5.9zM45.7 62c-1.3 0-2.6.5-3.5 1.5-.9.9-1.5 2.2-1.5 3.5 0 1.3.5 2.6 1.5 3.5.9.9 2.2 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5.9-.9 1.5-2.2 1.5-3.5 0-1.3-.5-2.6-1.5-3.5-.9-.9-2.1-1.5-3.5-1.5zM92 46c0 25.4-20.6 46-46 46S0 71.4 0 46 20.6 0 46 0s46 20.6 46 46zm-8 0C84 25 67 8 46 8S8 25 8 46s17 38 38 38 38-17 38-38z"
  }));
};

module.exports.ReplyAll = function ReplyAll(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M80.7 43.7C73.4 36.4 63 32.4 51 31.7V21c0-1.6-1.2-3.1-2.7-3.7-1.5-.6-3.3-.3-4.5.9l-24.7 25c-1.5 1.6-1.6 4.1 0 5.6l24.6 25c1.1 1.2 3.1 1.5 4.6.9 1.5-.6 2.7-2.1 2.7-3.7V60.2c8-.2 26.8.6 33.6 12.8.7 1.3 2 2 3.4 2 .3 0 .6 0 1-.1 1.8-.5 3.1-2 3.1-3.9-.1-.6 0-15.9-11.4-27.3zm-34.4 8.7c-2 .2-3.3 1.9-3.3 4v4.8L28 46l15-15.2v4.8c0 2.2 1.6 4 3.8 4 21.5 0 30.6 10.3 34.5 19.1-14.1-8.4-33.9-6.4-35-6.3zM31.5 68.2c1.5 1.6 1.5 4.1 0 5.7-.8.8-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2l-24.6-25c-1.5-1.6-1.5-4.1 0-5.6l24.6-25c1.6-1.6 4.1-1.6 5.6 0 1.6 1.6 1.6 4.1 0 5.7L9.6 46l21.9 22.2z"
  }));
};

module.exports.Reply = function Reply(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M71.7 43.7C64.4 36.4 54 32.4 42 31.7V21c0-1.6-1.2-3.1-2.7-3.7-1.5-.6-3.3-.3-4.5.9l-24.6 25c-1.5 1.6-1.6 4.1 0 5.6l24.6 25c1.1 1.2 3 1.5 4.5.9S42 72.6 42 71V60.2c8-.2 26.8.6 33.7 12.8.7 1.3 2 2 3.4 2 .3 0 .6 0 1-.1 1.8-.5 3.1-2 3.1-3.9-.1-.6-.1-15.9-11.5-27.3zm-34.3 8.7c-2 .2-3.4 1.9-3.4 4v4.8L19 46l15-15.2v4.8c0 2.2 1.6 4 3.8 4 21.5 0 30.6 10.3 34.5 19.1-14.1-8.4-33.9-6.4-34.9-6.3z"
  }));
};

module.exports.Return = function Return(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82 32.3V72c0 2.2-1.8 4-4 4H19.1c-2.2 0-4-1.8-4-4s1.8-4 4-4H74V36H23.7l5.5 5.6c1.6 1.6 1.6 4.2 0 5.8-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2L11.2 35.1c-.8-.8-1.2-1.8-1.2-2.8 0-1.1.4-2.1 1.2-2.8l12.4-12.3c1.6-1.6 4.1-1.6 5.7 0s1.5 4 0 5.6L23.7 28H78c2.2 0 4 2.1 4 4.3z"
  }));
};

module.exports.Retweet = function Retweet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.8 59.3 78.3 71.7c-.8.8-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2L60 59.3c-1.6-1.6-1.6-4.1-.1-5.6 1.6-1.6 4-1.6 5.5 0l5.5 5.7V33h-35c-2.2 0-4-1.8-4-4s1.8-4 4-4h39.5c2.2 0 3.6 1.7 3.6 3.9v30.4l6-5.7c1.6-1.6 4.3-1.5 5.9 0 1.5 1.6 1.5 4.1-.1 5.7zM56.1 65H21V38.5l5.5 5.7c.8.8 1.7 1.2 2.7 1.2 1 0 2-.4 2.8-1.2 1.6-1.6 1.5-4.1 0-5.6L19.4 26.1c-1.6-1.5-4.1-1.5-5.7 0L1.2 38.5c-1.6 1.6-1.6 4.1 0 5.6 1.6 1.6 4.3 1.6 5.9 0l6-5.7v30.4c0 2.2 1.3 4.1 3.6 4.1h39.5c2.2 0 4-1.8 4-4S58.3 65 56.1 65z"
  }));
};

module.exports.Rocket = function Rocket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M91.7 3.9C91.5 1.9 90 .4 88 .2c-25.3-2-43.4 10.3-54.7 25.7-6.2-2-12.9-1.3-19 2.1-5.9 3.3-10.8 8.9-14 15.7-.7 1.6-.4 3.4.9 4.6 1.2 1.2 3.1 1.4 4.6.6 6.4-3.4 13.6-2.7 17.9 1.6l17.6 17.6.1.1c4.3 4.3 5 11.5 1.6 17.9-.8 1.5-.5 3.4.6 4.6.8.8 1.8 1.2 2.9 1.2.6 0 1.2-.1 1.7-.4 6.8-3.2 12.4-8.2 15.7-14 3.5-6.1 4.2-12.8 2.1-19.1 4.5-3.3 8.6-6.9 12-10.9C88.6 35.4 93.2 20.7 91.7 3.9zM13.4 38.8c4.3-4.2 9.7-6.8 15.4-5.8-1.6 2.8-2.9 5.6-4.1 8.4-3.4-1.9-7.3-2.8-11.3-2.6zm39.9 39.8c.1-4.1-.8-8-2.6-11.4 2.9-1.2 5.7-2.6 8.4-4.1 1 5.7-1.5 11.2-5.8 15.5zm-8-17.9L31.2 46.6C38.3 27.7 55.9 7.5 84 8c.9 33.5-26.7 48-38.7 52.7zm25.9-39.9c1.2 1.2 1.9 2.9 1.9 4.6s-.7 3.4-1.9 4.6-2.9 1.9-4.6 1.9-3.4-.6-4.6-1.9-1.9-2.9-1.9-4.6.7-3.4 1.9-4.6c1.2-1.2 2.9-1.9 4.6-1.9s3.4.7 4.6 1.9zM14.9 62.4C10.3 67 10.1 76.2 10.1 78c0 2.2 1.8 4 4 4h.1c2.1 0 10.9-.3 15.4-4.8 2.8-2.8 3.4-5.7 3.4-7.6 0-2.7-1.1-5.3-3.2-7.4-5-5.1-11.3-3.5-14.9.2zm9.1 9.1c-1 1-3.2 1.7-5.5 2 .4-2.3 1.1-4.5 2-5.4.7-.7 1.3-1.1 2-1.1.5 0 1.1.3 1.7.9.6.6.9 1.2.9 1.7-.1.6-.6 1.4-1.1 1.9z"
  }));
};

module.exports.Scale = function Scale(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M47.2 63c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h39.2c2.2 0 4 1.8 4 4zM88 59h-3.4c-2.2 0-4 1.8-4 4s1.8 4 4 4H88c2.2 0 4-1.8 4-4s-1.8-4-4-4zM14.3 28.9c0-6.6 5.4-11.9 12-11.9s12 5.4 12 11.9-5.4 11.9-12 11.9-12-5.3-12-11.9zm8 0c0 2.2 1.8 3.9 4 3.9s4-1.8 4-3.9-1.8-3.9-4-3.9-4 1.8-4 3.9zm53.1 34.2c0 6.6-5.4 11.9-12 11.9s-12-5.4-12-11.9 5.4-11.9 12-11.9c6.6-.1 12 5.3 12 11.9zm-8 0c0-2.2-1.8-3.9-4-3.9s-4 1.8-4 3.9 1.8 3.9 4 3.9 4-1.8 4-3.9zM4 33h2.3c2.2 0 4-1.8 4-4s-1.8-4-4-4H4c-2.2 0-4 1.8-4 4s1.8 4 4 4zm88-4c0-2.2-1.8-4-4-4H47.3c-2.2 0-4 1.8-4 4s1.8 4 4 4H88c2.2 0 4-1.8 4-4z"
  }));
};

module.exports.Search = function Search(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M57.8 2.2c-17.1 0-31 14.1-31 31.3 0 7.3 2.5 13.9 6.6 19.3L4 82.6c-1.7 1.8-1.7 4.6 0 6.3.9.9 2 1.3 3.1 1.3 1.2 0 2.3-.4 3.2-1.3l29.4-29.8c5.1 3.7 11.3 5.8 18 5.8 17.1 0 31-14.1 31-31.3S74.9 2.2 57.8 2.2zm0 54.8c-12.7 0-23-10.5-23-23.4 0-12.9 10.3-23.4 23-23.4s23 10.5 23 23.4c0 12.9-10.3 23.4-23 23.4zm15.5-23c-.2 1.7-1.7 3-3.4 3h-.5c-1.9-.3-3.2-2-3-3.9.7-5.2-5.1-7.9-5.4-8-1.7-.8-2.5-2.9-1.7-4.6s2.8-2.5 4.6-1.8c.4.1 10.8 4.9 9.4 15.3zM66 41.6c.7.7 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.7.7-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2-.7-.7-1.2-1.8-1.2-2.8 0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2z"
  }));
};

module.exports.ShoppingBag = function ShoppingBag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M79.8 25.2c-.7-.7-1.7-1.2-2.8-1.2H67v-1.8C67 10.5 57.4 1 46.2 1h-.4C34.6 1 25 10.5 25 22.2V24H15c-2.2 0-4 1.9-4 4.2V87c0 2.2 1.8 4 4 4h62c2.2 0 4-1.8 4-4V28.1c0-1-.4-2.1-1.2-2.9zm-46.8-3C33 14.9 39 9 45.8 9h.4C53 9 59 14.9 59 22.2V24H33v-1.8zM73 83H19V32h6v6.9c0 2.2 1.8 4 4 4s4-1.8 4-4V32h26v6.9c0 2.2 1.8 4 4 4s4-1.8 4-4V32h6v51z"
  }));
};

module.exports.Skip = function Skip(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M82.9 58.1 65.1 75.9c-.9.9-2 1.3-3.2 1.3-1.1 0-2.3-.4-3.2-1.3-1.7-1.7-1.8-4.6 0-6.3l10.2-10.2H12c-1.2 0-2.5-.5-3.3-1.3-.9-.8-1.7-2-1.7-3.1V32.2c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v18.3h52.6l-9.9-10.2c-1.7-1.7-1.7-4.6 0-6.3 1.7-1.7 4.6-1.7 6.3 0l17.8 17.8c1.9 1.8 1.9 4.6.1 6.3zM12.2 24.2c1.3 0 2.6-.5 3.5-1.4.9-.9 1.5-2.2 1.5-3.5 0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.4-3.5-1.4-1.3 0-2.6.5-3.5 1.4-.9.9-1.5 2.2-1.5 3.5 0 1.3.5 2.6 1.5 3.5.9.8 2.2 1.4 3.5 1.4z"
  }));
};

module.exports.Stack = function Stack(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M81 16.1C81 5.5 63.4 0 46 0S11 5.5 11 16.1v60.3C11 86.6 28.6 92 46 92s35-5.4 35-15.7V16.1zm-8 30.3c0 2.2-9.5 7.7-27 7.7s-27-5.4-27-7.7V26.7c6.8 3.6 16.9 5.5 27 5.5s20.2-1.9 27-5.5v19.7zM46 8c17.8 0 27 5.7 27 8.1s-9.2 8.1-27 8.1-27-5.7-27-8.1S28.2 8 46 8zm0 76c-17.5 0-27-5.4-27-7.7V56.7c6.8 3.5 16.9 5.3 27 5.3s20.2-1.8 27-5.3v19.6c0 2.3-9.5 7.7-27 7.7zm17-41.1V38c0-1.9 1.6-3.5 3.5-3.5S70 36.1 70 38v4.9c0 1.9-1.6 3.5-3.5 3.5S63 44.9 63 42.9z"
  }));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M70.7 88c-.8 0-1.5-.2-2.2-.6L46 72.7 23.5 87.4c-1.4.9-3.2.8-4.5-.1-1.3-1-1.9-2.7-1.5-4.3l7.1-25L3.4 40.1c-1.2-1-1.7-2.7-1.2-4.3s1.9-2.6 3.5-2.8L31 31.2 42.4 6.3C43 4.9 44.4 4 46 4s3 .9 3.6 2.3L61 31.2 86.3 33c1.6.1 3 1.2 3.5 2.8.5 1.5 0 3.2-1.2 4.3L67.5 57.9l7.1 25c.5 1.6-.1 3.3-1.5 4.3-.7.5-1.5.8-2.4.8zM46 64c.8 0 1.5.2 2.2.6L64 74.9l-4.9-17.3c-.4-1.5.1-3.1 1.3-4.1l15.5-13.1L58.1 39c-1.5-.1-2.7-1-3.4-2.3L46 17.6l-8.7 19.1c-.6 1.3-1.9 2.2-3.4 2.3l-17.8 1.3 15.5 13.1c1.2 1 1.7 2.6 1.3 4.1L28 74.9l15.8-10.2c.7-.5 1.4-.7 2.2-.7z"
  }));
};

module.exports.Stopwatch = function Stopwatch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M81.3 19.6c.8.7 1.7 1 2.7 1 1.1 0 2.2-.4 3-1.3 1.5-1.6 1.4-4.2-.3-5.7l-5.2-4.7-5.2-4.7c-1.6-1.5-4.2-1.4-5.6.3-1.5 1.6-1.4 4.2.3 5.7l2.2 2-4 4.5c-4.6-3.4-9.9-5.9-15.7-7.2-.1-1.3-.6-2.7-1.6-4-1-1.4-3.1-3-6.9-3.2h-.2c-3.5 0-5.5 1.5-6.6 2.8-1.2 1.4-1.7 3.1-1.9 4.4C17.8 13.4 4 29.8 4 49.4c0 22.5 18.3 40.9 40.8 40.9 22.5 0 40.8-18.3 40.8-40.9 0-10.5-4-20.1-10.5-27.4l4-4.5 2.2 2.1zM44.8 82.2C26.7 82.2 12 67.5 12 49.4s14.7-32.8 32.8-32.8c18.1 0 32.8 14.7 32.8 32.8S62.9 82.2 44.8 82.2zm7-32.8c0 3.8-3.2 6.9-7 6.9S38 53.2 38 49.4c0-2.3 1-4.4 3-5.6V27.6c0-2.2 1.8-4 4-4s4 1.8 4 4v16.2c2 1.2 2.8 3.3 2.8 5.6z"
  }));
};

module.exports.Store = function Store(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M40 55.5c0-1.9-1.6-3.5-3.5-3.5h-13c-1.9 0-3.5 1.6-3.5 3.5v13c0 1.9 1.6 3.5 3.5 3.5h13c1.9 0 3.5-1.6 3.5-3.5v-13zM27 59h6v6h-6v-6zm63.9-33.6-8.9-9V6c0-2.2-1.8-4-4.1-4H14.1C11.8 2 10 3.8 10 6v10.4l-8.9 9c-.7.7-1.1 1.7-1.1 2.8v10.2C0 40.6 1.8 42 4 42h84c2.2 0 4-1.4 4-3.7V28.2c0-1.1-.4-2.1-1.1-2.8zM74 10v5H18v-5h56zm10 24H8v-4.2l8.2-7.8h59.6l8.2 7.8V34zm2 16.1V86c0 2.2-1.8 4-4 4H68.3c-2.2 0-4-1.6-4-3.8V65H55v21c0 2.2-1.9 4-4.1 4H10.1C7.9 90 6 88.2 6 86V50.1c0-2.2 1.8-4 4-4s4 1.8 4 4V82h33V60.6c0-2.2 1.7-3.6 3.9-3.6h17.3c2.2 0 3.7 1.4 3.7 3.6V82h6V50.1c0-2.2 1.8-4 4-4s4.1 1.8 4.1 4z"
  }));
};

module.exports.Suitcase = function Suitcase(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M89.8 23.9c-1.4-1.4-3.3-1.9-5.2-1.9H63V10c0-2.2-2.3-4-4.5-4h-25C31.3 6 29 7.8 29 10v12H7.4C3.3 22 0 24.9 0 28.9v49.6C0 82.7 3.3 86 7.4 86h77.1c4.1 0 7.4-3.3 7.4-7.4V29.1c.1-2-.7-3.8-2.1-5.2zM66 30v48H26V30h40zM37 14h18v8H37v-8zM8 30h12v48H8V30zm76 48H72V30h12v48z"
  }));
};

module.exports.Swap = function Swap(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 55.5c0 1.1-.4 2.1-1.2 2.8L72.2 76.9c-.8.8-1.8 1.1-2.8 1.1-1 0-2.1-.5-2.8-1.2-1.6-1.6-1.6-4.2 0-5.8l11.7-12H39.2c-2.2 0-4-1.8-4-4s1.8-4 4-4h39.1L66.6 39.5c-1.6-1.6-1.6-3.9 0-5.4 1.6-1.6 4.1-1.6 5.7 0l18.6 18.6c.7.7 1.1 1.7 1.1 2.8zM13.7 41h39.1c2.2 0 4-1.8 4-4s-1.8-4-4-4H13.7l11.7-12c1.6-1.6 1.6-4.2 0-5.8s-4.1-1.6-5.7-.1L1.2 33.7c-.8.7-1.2 1.7-1.2 2.8s.4 2.1 1.2 2.8l18.6 18.6c.8.8 1.8 1.2 2.8 1.2 1 0 2.1-.4 2.8-1.2 1.6-1.6 1.6-3.9 0-5.4L13.7 41z"
  }));
};

module.exports.TagDelete = function TagDelete(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 20H29c-1 0-1.9.4-2.6 1l-25 22c-.9.8-1.4 1.9-1.4 3 0 1.2.5 2.2 1.4 3l25 22c.7.6 1.7 1 2.6 1h59c2.2 0 4-1.8 4-4V24c0-2.2-1.8-4-4-4zm-4 44H30.5L10.1 46l20.5-18H84v36zM44.1 51.4l5.4-5.4-5.4-5.4c-1.4-1.4-1.4-3.6 0-4.9 1.4-1.4 3.6-1.4 4.9 0l5.4 5.4 5.4-5.4c1.4-1.4 3.6-1.4 4.9 0 1.4 1.4 1.4 3.6 0 4.9L59.4 46l5.4 5.4c1.4 1.4 1.4 3.6 0 4.9-.7.7-1.6 1-2.5 1s-1.8-.3-2.5-1l-5.4-5.4-5.4 5.4c-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1-1.2-1.3-1.2-3.5.1-4.9z"
  }));
};

module.exports.Tag = function Tag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 20H29c-1 0-1.9.4-2.6 1l-25 22c-.9.8-1.4 1.9-1.4 3 0 1.2.5 2.2 1.4 3l25 22c.7.6 1.7 1 2.6 1h59c2.2 0 4-1.8 4-4V24c0-2.2-1.8-4-4-4zm-4 44H30.5L10.1 46l20.5-18H84v36zM27.2 41.4c1.2-1.2 2.9-1.9 4.6-1.9 1.7 0 3.4.7 4.6 1.9 1.2 1.2 1.9 2.9 1.9 4.6s-.7 3.4-1.9 4.6c-1.2 1.2-2.9 1.9-4.6 1.9-1.7 0-3.4-.7-4.6-1.9-1.2-1.2-1.9-2.9-1.9-4.6s.7-3.4 1.9-4.6z"
  }));
};

module.exports.Tags = function Tags(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M75.2 51.6c0-1.1-.4-2.1-1.2-2.8L36.7 12c-.7-.7-1.6-1.1-2.6-1.1L4.3 9c-1.2-.1-2.3.4-3.1 1.2-.8.8-1.3 1.9-1.2 3.1l1.9 29.3c.1 1 .5 1.9 1.2 2.6l37.4 36.7c.8.8 1.8 1.2 2.8 1.2 1 0 2-.4 2.8-1.2L74 54.4c.8-.7 1.2-1.7 1.2-2.8zM43.3 73.4 9.9 40.5 8.3 17.3l23.8 1.5 33.4 32.8-22.2 21.8zM26 26.2c1.1 1.1 1.8 2.7 1.8 4.2 0 1.6-.6 3.1-1.8 4.2-1.1 1.1-2.7 1.8-4.3 1.8-1.6 0-3.1-.6-4.3-1.8-1.1-1.1-1.8-2.7-1.8-4.2 0-1.6.6-3.1 1.8-4.2 1.1-1.1 2.7-1.8 4.3-1.8 1.6 0 3.2.7 4.3 1.8zm66 25.4c0 .9-.4 1.8-1 2.5L63.1 81.5c-.7.7-1.6 1-2.5 1-.9 0-1.8-.3-2.5-1-1.4-1.4-1.4-3.6 0-4.9l25.4-24.9-34.9-34.3c-1.4-1.4-1.4-3.6 0-4.9 1.4-1.4 3.6-1.4 5 0L91 49.1c.6.7 1 1.6 1 2.5z"
  }));
};

module.exports.ThumbsDown = function ThumbsDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M32.2 0C44.7 0 64.1 4.1 69 7.5c1.1.8 1.7 2 1.7 3.3v39.1c0 1.2-.6 2.4-1.5 3.1-.3.2-7.3 5.7-14.6 9.8-9.1 5-15.4 12-16.9 16.4C35.8 84.6 33.2 92 25 92c-3.9 0-7.1-2.2-8.8-6-3.4-7.8.2-18.6 6.2-27.1-4-.9-9-2.2-12-3.1C5 54.1 1.3 50.1.6 45.2c-.7-5 1.8-10.1 7.1-14C11.6 20.8 18.3 4.1 23.2 1.4c1.8-1 5.1-1.4 9-1.4zm30.4 13.2C55 10 31.6 6.6 27.2 8.4c-2.3 2.1-8.2 15.5-12.3 26.8-.3.8-.8 1.5-1.5 2-3.3 2.2-5 4.8-4.7 7 .3 1.8 1.9 3.3 4.3 4.1 5 1.6 17.4 4.3 17.6 4.3 1.4.3 2.5 1.3 3 2.7s.1 2.9-.9 3.9c-9 9.7-10.6 19.6-8.9 23.6.4 1.2.9 1.2 1.2 1.2 2 0 2.9-1.4 5-7.4 2.4-7 10.7-15.4 20.6-20.8 4.8-2.6 9.6-6.1 12-7.9V13.2zm15.8-2.8v39.9c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5V10.4c0-3.6-2.9-6.5-6.5-6.5s-6.5 3-6.5 6.5z"
  }));
};

module.exports.ThumbsUp = function ThumbsUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M59.8 92c-12.4 0-31.9-4.1-36.7-7.5-1.1-.8-1.7-2-1.7-3.3V42.1c0-1.2.6-2.4 1.5-3.1.3-.2 7.3-5.7 14.6-9.8 9.1-5 15.4-12 16.9-16.4C56.2 7.4 58.8 0 67 0c3.9 0 7.1 2.2 8.8 6 3.4 7.8-.2 18.6-6.2 27.1 4 .9 9 2.2 12 3.1 5.5 1.7 9.1 5.7 9.9 10.6.7 5-1.8 10.1-7.1 14-3.9 10.5-10.6 27.1-15.5 29.8-1.9 1-5.2 1.4-9.1 1.4zM29.4 78.8c7.6 3.2 31 6.5 35.4 4.8 2.3-2.1 8.2-15.5 12.3-26.8.3-.8.8-1.5 1.5-2 3.3-2.2 5-4.8 4.7-7-.3-1.8-1.9-3.3-4.3-4.1-5-1.6-17.4-4.3-17.6-4.3-1.4-.3-2.5-1.3-3-2.7s-.1-2.9.9-3.9c9-9.7 10.6-19.6 8.9-23.6C67.8 8 67.3 8 67 8c-2 0-2.9 1.4-5 7.4-2.4 7-10.7 15.4-20.6 20.8-4.8 2.6-9.6 6.1-12 7.9v34.7zm-15.8 2.8v-40c0-3.6-2.9-6.5-6.5-6.5S.5 38 .5 41.6v39.9C.5 85.1 3.4 88 7 88s6.6-2.9 6.6-6.4z"
  }));
};

module.exports.Ticket = function Ticket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m27.2 42.2 22.6 22.6c.9.9 2.1 1.4 3.3 1.4 1.2 0 2.4-.5 3.3-1.4l8.4-8.4c.9-.9 1.4-2 1.4-3.3 0-1.2-.5-2.4-1.4-3.3L42.2 27.2c-.9-.9-2-1.4-3.3-1.4-1.2 0-2.4.5-3.3 1.4l-8.4 8.4c-1.8 1.8-1.8 4.8 0 6.6zm11.7-9.8 20.7 20.7-6.5 6.5-20.7-20.7 6.5-6.5zm51.9 23.1L36.5 1.2c-1.6-1.6-4.1-1.6-5.7 0l-7.6 7.6c-1.1 1.1-1.5 2.8-.9 4.3 1.1 2.7.4 5.7-1.6 7.7s-5 2.6-7.7 1.6c-1.5-.6-3.2-.2-4.3.9l-7.6 7.6c-.7.7-1.1 1.8-1.1 2.8 0 1.1.4 2.1 1.2 2.8l54.3 54.3c.8.8 1.8 1.2 2.8 1.2 1.1 0 2.1-.4 2.8-1.2l7.6-7.6c1.1-1.1 1.5-2.8.9-4.3-1.1-2.7-.4-5.7 1.6-7.7s5-2.6 7.7-1.6c1.5.6 3.2.2 4.3-.9l7.6-7.6c1.6-1.6 1.6-4.1 0-5.6zm-11.6 5.9c-4.9-1-10.1.5-13.7 4.2-3.6 3.6-5.1 8.8-4.2 13.7l-3.1 3.1L9.7 33.7l3.1-3.1c4.9 1 10.1-.5 13.7-4.2 3.6-3.6 5.1-8.8 4.2-13.7l3.1-3.1 48.6 48.6-3.2 3.2z"
  }));
};

module.exports.TimeReverse = function TimeReverse(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M92 46c0 21.5-17.4 39-38.8 39-7.9 0-15.5-2.4-22-6.8-1.8-1.3-2.3-3.7-1-5.6 1.3-1.8 3.7-2.3 5.6-1C40.9 75.1 47 77 53.2 77 70.2 77 84 63.1 84 46S70.2 15 53.2 15C36.6 15 23 28.3 22.4 44.9l9.3-9.4c1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7L22.1 56.5c-.8.8-1.8 1.2-2.8 1.2-1.1 0-2.1-.4-2.8-1.2L1.2 41.1c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l7.6 7.7C15.9 23 32.7 7 53.2 7 74.6 7 92 24.5 92 46zM53 23.3c-2.2 0-4 1.8-4 4V46c0 1.1.5 2.1 1.3 2.8l8.6 8.6c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.8-1.2 1.6-1.6 1.5-4.1-.1-5.7L57 44.3v-17c0-2.2-1.8-4-4-4z"
  }));
};

module.exports.ToDo = function ToDo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M25 17.8V5c0-2.8 2.2-5 5-5s5 2.2 5 5v12.8c0 2.8-2.2 5-5 5s-5-2.2-5-5zm37 5c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5s-5 2.2-5 5v12.8c0 2.8 2.2 5 5 5zM28.2 40h35.5c2.2 0 4-1.8 4-4s-1.8-4-4-4H28.2c-2.2 0-4 1.8-4 4s1.8 4 4 4zM84 7h-8.3c-2.2 0-4 1.8-4 4s1.8 4 4 4H80v68H12V15h4.3c2.2 0 4-1.8 4-4s-1.8-4-4-4H8c-2.2 0-4 2.2-4 4.4V87c0 2.2 1.8 4 4 4h76c2.2 0 4-1.8 4-4V11.4C88 9.2 86.2 7 84 7zm-41.3 8h6.6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6.6c-2.2 0-4 1.8-4 4s1.8 4 4 4zM28.2 58h35.5c2.2 0 4-1.8 4-4s-1.8-4-4-4H28.2c-2.2 0-4 1.8-4 4s1.8 4 4 4z"
  }));
};

module.exports.Toggles = function Toggles(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M84 48.8V88c0 2.2-1.8 4-4 4s-4-1.8-4-4V48.8c0-2.2 1.8-4 4-4s4 1.8 4 4zm-4-37.4c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4s-4 1.8-4 4v3.4c0 2.2 1.8 4 4 4zM23.9 46c0 6.6-5.4 12-11.9 12S0 52.6 0 46s5.4-12 11.9-12 12 5.4 12 12zm-8 0c0-2.2-1.8-4-3.9-4s-4 1.8-4 4 1.8 4 3.9 4 4-1.8 4-4zm42 19.7c0 6.6-5.4 12-11.9 12s-11.9-5.4-11.9-12 5.4-12 11.9-12 11.9 5.3 11.9 12zm-8 0c0-2.2-1.8-4-3.9-4s-3.9 1.8-3.9 4 1.8 4 3.9 4 3.9-1.8 3.9-4zM92 28.6c0 6.6-5.4 12-11.9 12s-11.9-5.4-11.9-12 5.4-12 11.9-12S92 22 92 28.6zm-8 0c0-2.2-1.8-4-3.9-4s-3.9 1.8-3.9 4 1.8 4 3.9 4 3.9-1.7 3.9-4zM46 81.7c-2.2 0-4 1.8-4 4V88c0 2.2 1.8 4 4 4s4-1.8 4-4v-2.3c0-2.2-1.8-4-4-4zm0-33c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4s-4 1.8-4 4v40.7c0 2.2 1.8 4 4 4zM12 63.3c-2.2 0-4 1.8-4 4V88c0 2.2 1.8 4 4 4s4-1.8 4-4V67.3c0-2.2-1.8-4-4-4zm0-34.4c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4S8 1.8 8 4v20.9c0 2.2 1.8 4 4 4z"
  }));
};

module.exports.Trash = function Trash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "m78.4 30.4-3.1 57.8c-.1 2.1-1.9 3.8-4 3.8H20.7c-2.1 0-3.9-1.7-4-3.8l-3.1-57.8c-.1-2.2 1.6-4.1 3.8-4.2 2.2-.1 4.1 1.6 4.2 3.8l2.9 54h43.1l2.9-54c.1-2.2 2-3.9 4.2-3.8 2.1.1 3.8 2 3.7 4.2zM89 17c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4s1.8-4 4-4h22V4c0-1.9 1.3-3 3.2-3h27.6C61.7 1 63 2.1 63 4v9h22c2.2 0 4 1.8 4 4zm-53-4h20V8H36v5zm1.7 65c2 0 3.5-1.9 3.5-3.8l-1-43.2c0-1.9-1.6-3.5-3.6-3.5-1.9 0-3.5 1.6-3.4 3.6l1 43.3c0 1.9 1.6 3.6 3.5 3.6zm16.5 0c1.9 0 3.5-1.6 3.5-3.5l1-43.2c0-1.9-1.5-3.6-3.4-3.6-2 0-3.5 1.5-3.6 3.4l-1 43.2c-.1 2 1.5 3.7 3.5 3.7-.1 0-.1 0 0 0z"
  }));
};

module.exports.Trophy = function Trophy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M54 28.2v-8.9c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v8.9c0 1.9-1.6 3.5-3.5 3.5S54 30.1 54 28.2zm3.3 13.6c1.1 0 2.1-.4 2.8-1.2.7-.8 1.2-1.8 1.2-2.8 0-1.1-.4-2.1-1.2-2.8-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2-.7.7-1.2 1.8-1.2 2.8 0 1 .4 2.1 1.2 2.8.7.8 1.8 1.2 2.8 1.2zM83.8 38c-3 3.1-6.7 5-11.1 5.7C70.5 57.1 61 63.9 50 65.3V80h8.6c2.2 0 4 1.8 4 4s-1.8 4-4 4H33.5c-2.2 0-4-1.8-4-4s1.8-4 4-4H42V65.3c-11-1.4-20.4-8.2-22.6-21.6C15 43 11.3 41.2 8.2 38 0 29.5.4 15 .5 14.4.6 12.5 2.1 11 4 11h15V8c0-2.2 1.7-4 3.9-4h46.2C71.3 4 73 5.8 73 8v3h15c1.9 0 3.4 1.5 3.5 3.4 0 .6.4 15.2-7.7 23.6zm-70.5-4.8c1.6 1.6 3.7 2.8 5.7 3.3V18H7.6c.4 4 1.6 10.9 5.7 15.2zM65 12H27v25.9c0 14.5 9.8 19.6 19 19.6s19-5.2 19-19.6V12zm13.7 21.2c3.9-4 5.3-10.2 5.7-15.2H73v18.5c2-.6 4.1-1.7 5.7-3.3z"
  }));
};

module.exports.Upload = function Upload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M89 58.8V86c0 2.8-2.2 5-5 5H8c-2.8 0-5-2.2-5-5V58.8c0-2.8 2.2-5 5-5s5 2.2 5 5V81h66V58.8c0-2.8 2.2-5 5-5s5 2.2 5 5zM29.6 29.9 41 18.2v43.3c0 2.8 2.2 5 5 5s5-2.2 5-5V18.3l11.4 11.6c1 1 2.3 1.5 3.6 1.5 1.3 0 2.5-.5 3.5-1.4 2-1.9 2-5.1.1-7.1l-20-20.4c-1-1-2.3-1.5-3.6-1.5-1.3 0-2.6.5-3.6 1.5L22.5 22.9c-1.9 2-1.9 5.1.1 7.1 1.9 1.9 5.1 1.8 7-.1z"
  }));
};

module.exports.UserGroup = function UserGroup(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M35.4 54.3c11.7 0 21.2-9.5 21.2-21.1 0-11.7-9.5-21.1-21.2-21.1s-21.2 9.5-21.2 21.1c.1 11.6 9.6 21.1 21.2 21.1zm0-34.3c7.3 0 13.2 5.9 13.2 13.1 0 7.2-5.9 13.1-13.2 13.1s-13.2-5.9-13.2-13.1c.1-7.2 6-13.1 13.2-13.1zM45 56.2c-1.1-.3-2.3-.2-3.3.4l-6.3 3.8-6.3-3.8c-1-.6-2.2-.7-3.3-.4C19.7 58.2 0 65.3 0 76c0 2.2 1.8 4 4 4h62.8c2.2 0 4-1.8 4-4 0-10.7-19.7-17.8-25.8-19.8zM11.2 72c3.4-2.6 9.1-5.4 15.3-7.6l6.8 4.1c1.3.8 2.9.8 4.1 0l6.8-4.1c6.2 2.1 11.9 5 15.3 7.6H11.2zM91 69c0 1.7-1.3 3-3 3H74.6c-1.7 0-3-1.3-3-3s1.3-3 3-3h8.9c-1.5-2-3.9-3.6-6.9-5.2-1.5-.8-2-2.6-1.2-4 .8-1.5 2.6-2 4.1-1.2C83.8 57.9 91 62.8 91 69zM74.2 42.6c0-4.4-3.6-7.9-7.9-7.9-1.1 0-2.1.2-3.1.6-1.5.6-3.3-.1-3.9-1.6-.6-1.5.1-3.3 1.6-3.9 1.7-.7 3.5-1.1 5.4-1.1 7.7 0 13.9 6.2 13.9 13.9s-6.3 13.9-13.9 13.9c-4 0-7.8-1.7-10.4-4.7-1.1-1.2-1-3.1.3-4.2 1.2-1.1 3.1-1 4.2.3 1.5 1.7 3.7 2.7 6 2.7 4.2-.1 7.8-3.7 7.8-8z"
  }));
};

module.exports.UserId = function UserId(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M62.3 55.5c7.7 0 14-6.3 14-14s-6.3-14-14-14-14 6.3-14 14 6.3 14 14 14zm0-22c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zM15.7 35c0-1.7 1.3-3 3-3h17.4c1.7 0 3 1.3 3 3s-1.3 3-3 3H18.7c-1.7 0-3-1.3-3-3zm20.4 14H18.7c-1.7 0-3-1.3-3-3s1.3-3 3-3h17.4c1.7 0 3 1.3 3 3s-1.3 3-3 3zm-4.4 8c0 1.7-1.3 3-3 3h-10c-1.7 0-3-1.3-3-3s1.3-3 3-3h10.1c1.6 0 2.9 1.3 2.9 3zM92 22.6c0-3.6-3-6.6-6.6-6.6H6.6C3 16 0 19 0 22.6v46.8C0 73 3 76 6.6 76h78.8c3.6 0 6.6-3 6.6-6.6V22.6zM8 24h76v41.7c-4.3-4.2-11.7-7-14.6-8-.6-.2-1.3-.2-2 0l-5.1 1.8-5.1-1.8c-.6-.2-1.3-.1-2 .1C51.9 58.9 42.5 62 38.9 68H8V24zm39.7 44c2.3-2 5.3-3 8.5-4.2l5.1 1.8c.6.2 1.4.2 2 0l5.1-1.7c3.2 1.2 6.2 2.2 8.5 4.2H47.7z"
  }));
};

module.exports.User = function User(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 57.1c14.8 0 26.9-12.1 26.9-27C72.9 15.1 60.8 3 46 3S19.1 15.1 19.1 30c0 15 12.1 27.1 26.9 27.1zM46 11c10.4 0 18.9 8.5 18.9 19S56.4 49 46 49s-18.9-8.5-18.9-19S35.6 11 46 11zm12.5 48.7c-1.3-.4-2.8-.1-3.8.8L46 67.9l-8.7-7.4c-1.1-.9-2.5-1.2-3.8-.8C27.9 61.5 0 71.1 0 85c0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4 0-13.9-27.9-23.5-33.5-25.3zM10.1 81c4.4-4.7 15-9.9 23.8-12.9l9.5 8.1c1.5 1.3 3.7 1.3 5.2 0l9.5-8.1c8.8 3.1 19.4 8.3 23.8 12.9H10.1z"
  }));
};

module.exports.Vibrate = function Vibrate(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M1 25.4c-1.6-1.9-1.3-4.7.5-6.2 16.1-13.5 32.6-8.8 46.6-2.4 14.8 6.8 26.7 6.1 36.5-2 1.9-1.6 4.7-1.3 6.3.6 1.6 1.9 1.3 4.7-.6 6.2-7 5.8-14.9 8.7-23.6 8.7-6.9 0-14.4-1.8-22.3-5.5-13.8-6.3-25.5-8.6-37.1 1.2-1.9 1.5-4.7 1.3-6.3-.6zm83.7 14.5c-9.8 8.1-21.8 8.7-36.5 2-14-6.4-30.5-11.2-46.6 2.4-1.9 1.6-2.1 4.4-.5 6.2 1.6 1.9 4.4 2.1 6.3.5 11.6-9.7 23.2-7.5 37.1-1.1 7.9 3.6 15.4 5.5 22.3 5.5 8.7 0 16.6-2.9 23.6-8.7 1.9-1.6 2.2-4.4.6-6.2-1.6-1.9-4.4-2.2-6.3-.6zm0 25.1c-9.8 8.1-21.8 8.7-36.5 2-14-6.4-30.5-11.2-46.6 2.4-1.9 1.6-2.1 4.4-.5 6.2 1.6 1.9 4.4 2.1 6.3.5C19 66.4 30.6 68.6 44.5 75c7.9 3.6 15.4 5.5 22.3 5.5 8.7 0 16.6-2.9 23.6-8.7 1.9-1.6 2.2-4.4.6-6.2-1.6-1.9-4.4-2.2-6.3-.6z"
  }));
};

module.exports.ViewApps = function ViewApps(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M20 28c-1.8 0-3.7-.8-5-2.1-1.3-1.3-2-3.1-2-4.9 0-1.8.8-3.6 2-5 1.3-1.3 3.1-2 5-2 1.8 0 3.6.8 4.9 2 1.3 1.3 2.1 3.1 2.1 5 0 1.8-.8 3.6-2.1 4.9-1.3 1.3-3.1 2.1-4.9 2.1zm30.9-2.1c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm26 0c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm-52 25c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm26 0c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm26 0c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm-52 25c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm26 0c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm26 0c1.3-1.3 2.1-3.1 2.1-4.9 0-1.8-.8-3.6-2.1-5-1.3-1.3-3.1-2-4.9-2-1.8 0-3.7.8-5 2-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1z"
  }));
};

module.exports.ViewListLarge = function ViewListLarge(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M86.6 41.3H41.8c-3 0-5.4-2.4-5.4-5.4V22.4c0-3 2.4-5.4 5.4-5.4h44.7c3 0 5.4 2.4 5.4 5.4v13.5c.1 3-2.3 5.4-5.3 5.4zm-42.2-8H84V25H44.4v8.3zM86.6 75H41.8c-3 0-5.4-2.4-5.4-5.4V56.1c0-3 2.4-5.4 5.4-5.4h44.7c3 0 5.4 2.4 5.4 5.4v13.5c.1 3-2.3 5.4-5.3 5.4zm-42.2-8H84v-8.3H44.4V67zM23.7 41.3H5.6c-3.1 0-5.6-2.5-5.6-5.6V22.6C0 19.5 2.5 17 5.6 17h18.1c3.1 0 5.6 2.5 5.6 5.6v13.2c0 3-2.5 5.5-5.6 5.5zM8 33.3h13.3V25H8v8.3zM23.7 75H5.6C2.5 75 0 72.5 0 69.4V56.2c0-3.1 2.5-5.6 5.6-5.6h18.1c3.1 0 5.6 2.5 5.6 5.6v13.2c0 3.1-2.5 5.6-5.6 5.6zM8 67h13.3v-8.3H8V67z"
  }));
};

module.exports.ViewList = function ViewList(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M25.6 14c0-2.8 2.2-5 5-5H86c2.8 0 5 2.2 5 5s-2.2 5-5 5H30.6c-2.8 0-5-2.2-5-5zM86 41H30.6c-2.8 0-5 2.2-5 5s2.2 5 5 5H86c2.8 0 5-2.2 5-5s-2.2-5-5-5zm0 32H30.6c-2.8 0-5 2.2-5 5s2.2 5 5 5H86c2.8 0 5-2.2 5-5s-2.2-5-5-5zM9 39.4c-3.9 0-7 3.2-7 7.1s3.1 7.1 7 7.1 7-3.2 7-7.1-3.2-7.1-7-7.1zM9 7c-3.9 0-7 3.2-7 7.1 0 3.9 3.1 7.1 7 7.1s7-3.2 7-7.1C16 10.2 12.8 7 9 7zm0 63.8c-3.9 0-7 3.2-7 7.1C2 81.8 5.1 85 9 85s7-3.2 7-7.1c0-3.9-3.2-7.1-7-7.1z"
  }));
};

module.exports.ViewThumb = function ViewThumb(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M34.9 40.7H7.6c-3.1 0-5.6-2.5-5.6-5.6V13.6C2 10.5 4.5 8 7.6 8h27.3c3.1 0 5.6 2.5 5.6 5.6v21.5c0 3.1-2.5 5.6-5.6 5.6zm-24.9-8h22.5V16H10v16.7zm74.4 8H57.1c-3.1 0-5.6-2.5-5.6-5.6V13.6c0-3.1 2.5-5.6 5.6-5.6h27.3c3.1 0 5.6 2.5 5.6 5.6v21.5c0 3.1-2.5 5.6-5.6 5.6zm-24.9-8H82V16H59.5v16.7zM34.9 84H7.6C4.5 84 2 81.5 2 78.4V56.9c0-3.1 2.5-5.6 5.6-5.6h27.3c3.1 0 5.6 2.5 5.6 5.6v21.5c0 3.1-2.5 5.6-5.6 5.6zM10 76h22.5V59.3H10V76zm74.4 8H57.1c-3.1 0-5.6-2.5-5.6-5.6V56.9c0-3.1 2.5-5.6 5.6-5.6h27.3c3.1 0 5.6 2.5 5.6 5.6v21.5c0 3.1-2.5 5.6-5.6 5.6zm-24.9-8H82V59.3H59.5V76z"
  }));
};

module.exports.VolumeFull = function VolumeFull(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M37.7 4.3c-1.5-.6-3.1-.3-4.3.9L13.7 25H4c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h9.8l19.7 19.8c.8.8 1.8 1.2 2.8 1.2.5 0 .9-.1 1.4-.3 1.5-.6 2.3-2.1 2.3-3.7V8c0-1.6-.8-3.1-2.3-3.7zm-5.7 70L18.1 60.2c-.8-.8-1.6-1.2-2.7-1.2H8V33h7.4c1.1 0 1.9-.4 2.7-1.2L32 17.7v56.6zm21.2-11.4c-.8.9-1.9 1.3-3 1.3-.9 0-1.9-.3-2.7-1-1.6-1.5-1.8-4-.3-5.6 10-11.2 1-22 0-23.2-1.5-1.7-1.3-4.2.3-5.6 1.6-1.5 4.2-1.3 5.6.3 5.3 5.8 12.1 20.4.1 33.8zm12.1 10.7c-.8.9-1.9 1.3-3 1.3-.9 0-1.9-.3-2.7-1-1.6-1.5-1.8-4-.3-5.6 19.7-22.1.8-43.7 0-44.6-1.5-1.7-1.3-4.2.3-5.7s4.2-1.3 5.7.3c.2.3 24.4 28 0 55.3zm12.6 8.1c-.8.9-1.9 1.3-3 1.3-.9 0-1.9-.3-2.7-1-1.6-1.5-1.8-4-.3-5.6 11.2-12.6 14.7-26.6 10.2-41.5-3.4-11.4-10.1-19-10.2-19.1-1.5-1.6-1.3-4.2.3-5.6 1.6-1.5 4.2-1.3 5.7.3.3.2 31.5 35.9 0 71.2z"
  }));
};

module.exports.VolumeLow = function VolumeLow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M53.7 4.3c-1.5-.6-3.1-.3-4.3.9L29.8 25H20c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h9.8l19.8 19.8c.8.8 1.8 1.2 2.8 1.2.5 0 .8-.1 1.3-.3 1.5-.6 2.3-2.1 2.3-3.7V8c0-1.6-.8-3.1-2.3-3.7zm-5.7 70L34.1 60.2c-.8-.8-1.6-1.2-2.6-1.2H24V33h7.4c1.1 0 1.9-.4 2.6-1.2l14-14.1v56.6zm21.3-11.4c-.8.9-1.9 1.3-3 1.3-1 0-1.9-.3-2.7-1-1.6-1.5-1.8-4-.3-5.6 10.3-11.5.4-22.7 0-23.2-1.5-1.6-1.3-4.2.3-5.6 1.6-1.5 4.2-1.3 5.6.3 5.3 5.8 12.1 20.4.1 33.8z"
  }));
};

module.exports.VolumeMedium = function VolumeMedium(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M45.6 4.3c-1.5-.6-3.2-.3-4.3.9L21.7 25H12c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h9.7l19.7 19.8c.8.8 1.8 1.2 2.8 1.2.5 0 .9-.1 1.4-.3 1.5-.6 2.4-2.1 2.4-3.7V8c0-1.6-.9-3.1-2.4-3.7zm-5.6 70L26.1 60.2c-.8-.8-1.7-1.2-2.7-1.2H16V33h7.4c1.1 0 2-.4 2.7-1.2L40 17.7v56.6zm21.1-11.4c-.8.9-1.9 1.3-3 1.3-.9 0-1.9-.3-2.7-1-1.7-1.5-1.8-4-.3-5.6 10-11.2 1-22 0-23.2-1.5-1.7-1.3-4.2.4-5.6 1.7-1.5 4.2-1.3 5.6.3 5.2 5.8 11.9 20.4 0 33.8zm12 10.7c-.8.9-1.9 1.3-3 1.3-.9 0-1.9-.3-2.7-1-1.7-1.5-1.8-4-.3-5.6 19.6-21.9.8-43.7 0-44.6-1.5-1.7-1.3-4.2.3-5.6 1.7-1.5 4.2-1.3 5.6.3.4.2 24.5 27.9.1 55.2z"
  }));
};

module.exports.VolumeOff = function VolumeOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M40.3 4.3c-1.5-.6-3.3-.2-4.5.9L16.5 25H7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h9.5l19.2 19.8c.8.8 1.8 1.2 2.9 1.2.5 0 1.2-.1 1.7-.3 1.5-.6 2.7-2.1 2.7-3.7V8c0-1.6-1.2-3.1-2.7-3.7zM35 74.2l-13.8-14c-.8-.8-2-1.2-3.1-1.2H11V33h7.2c1.1 0 2.3-.5 3.1-1.2l13.7-14v56.4zM87.9 58c1.5 1.6 1.5 4.1-.1 5.7-.8.7-1.8 1.1-2.8 1.1-1 0-2.1-.4-2.9-1.2L70.6 51.7 59.1 63.6c-.8.8-1.8 1.2-2.9 1.2-1 0-2-.4-2.8-1.1-1.6-1.5-1.6-4.1-.1-5.7L65 46 53.4 34c-1.5-1.6-1.5-4.1.1-5.7 1.6-1.5 4.1-1.5 5.7.1l11.5 11.8 11.5-11.8c1.5-1.6 4.1-1.6 5.7-.1 1.6 1.5 1.6 4.1.1 5.7L76.2 46l11.7 12z"
  }));
};

module.exports.Wallet = function Wallet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M72.3 49.3c1.3 1.3 2 3.1 2 5 0 1.8-.7 3.6-2 4.9-1.3 1.3-3.1 2.1-5 2.1-1.8 0-3.6-.8-5-2.1-1.3-1.3-2-3.1-2-4.9 0-1.9.8-3.6 2-5 1.3-1.3 3.1-2 5-2 1.9-.1 3.7.7 5 2zM91 33.7v44.2c0 4.5-3.6 8.1-8.1 8.1H10.5C5.3 86 1 81.7 1 76.5V18C1 11.4 6.4 6 13 6h55.3c5.5 0 9.7 4.5 9.7 10v6h1.8C86 22 91 27.5 91 33.7zM8.4 18c0 2.2 1.8 4 4 4H70v-6.2c0-1-.8-1.8-1.8-1.8H12.4c-2.2 0-4 1.8-4 4zM83 33.7c0-1.7-1.4-3.7-3.2-3.7H10.6C9.7 30 9 31.2 9 32.1v44.4c0 .8.7 1.5 1.5 1.5h72.4c.1 0 .1-.1.1-.1V33.7z"
  }));
};

module.exports.Warning = function Warning(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M88 87H4c-1.4 0-2.7-.8-3.5-2-.7-1.2-.7-2.7 0-4l42-74c.7-1.3 2-2 3.5-2s2.8.8 3.5 2l42 74c.7 1.2.7 2.8 0 4-.8 1.2-2.1 2-3.5 2zm-77.1-8h70.3L46 17.1 10.9 79zM50 55.1V36.5c0-2.2-1.8-4-4-4s-4 1.8-4 4v18.6c0 2.2 1.8 4 4 4s4-1.8 4-4zm-.5 16.6c.9-.9 1.5-2.2 1.5-3.5 0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-1.3 0-2.6.5-3.5 1.5-.9.9-1.5 2.2-1.5 3.5 0 1.3.5 2.6 1.5 3.5.9.9 2.2 1.5 3.5 1.5 1.3 0 2.6-.6 3.5-1.5z"
  }));
};

module.exports.Web = function Web(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M46 0C20.6 0 0 20.6 0 46s20.6 46 46 46 46-20.6 46-46S71.4 0 46 0zm3.7 83.8c-.2 0-.4 0-.7.1V62.2c5.2-.1 9.9-.2 14.2-.5-3.8 11.7-10.9 19.5-13.5 22.1zm-7.4 0c-2.7-2.7-9.7-10.5-13.5-22.1 4.2.3 9 .5 14.2.5v21.7c-.2 0-.4-.1-.7-.1zM8 46c0-2.5.3-5 .7-7.4 2.2-.4 6.4-1 12.3-1.6-.5 2.9-.8 5.9-.8 9.1 0 3.2.3 6.2.7 9-5.8-.6-10.1-1.2-12.3-1.6-.3-2.5-.6-5-.6-7.5zm18.3 0c0-3.4.4-6.6 1-9.6 4.6-.3 9.8-.6 15.7-.6v20.4c-5.8-.1-11.1-.3-15.8-.7-.5-2.9-.9-6.1-.9-9.5zM49.6 8.2c2.7 2.7 9.6 10.7 13.5 22.1-4.2-.3-8.9-.5-14.1-.5V8.1c.2 0 .4.1.6.1zM43 8.1v21.7c-5.2.1-9.9.2-14.1.5 3.8-11.4 10.8-19.4 13.4-22.1.3 0 .5-.1.7-.1zm6 48.1V35.8c5.8.1 11.1.3 15.7.6.6 3 1 6.2 1 9.6 0 3.4-.3 6.6-.9 9.6-4.6.3-9.9.5-15.8.6zM70.9 37c5.9.6 10.1 1.2 12.3 1.6.5 2.4.8 4.9.8 7.4s-.3 5-.7 7.4c-2.2.4-6.4 1-12.3 1.6.5-2.9.7-5.9.7-9.1 0-3-.3-6.1-.8-8.9zm10.5-4.8c-2.8-.4-6.8-.9-11.9-1.4-2.4-8.6-6.6-15.5-10.1-20.4 10.1 3.8 18.1 11.8 22 21.8zM32.6 10.4c-3.6 4.8-7.7 11.7-10.1 20.3-5 .4-9 1-11.9 1.4 3.9-9.9 12-17.9 22-21.7zm-22 49.4c2.8.4 6.8.9 11.8 1.4 2.4 8.6 6.4 15.5 10 20.3-10-3.9-17.9-11.8-21.8-21.7zm49 21.7c3.6-4.8 7.6-11.6 10-20.2 5-.4 9-1 11.8-1.4-3.9 9.8-11.8 17.7-21.8 21.6z"
  }));
};

module.exports.Weight = function Weight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M81.2 31.1c-.4-4-3.8-7.1-7.9-7.1H66v-1.8C66 10.5 57.4 1 46.2 1h-.4C34.6 1 26 10.5 26 22.2V24h-7.3c-4.1 0-7.4 3.1-7.9 7.1L5 86.5c-.1 1.1.2 2.3 1 3.1.8.9 1.9 1.4 3 1.4h74c1.1 0 2.2-.5 3-1.3.8-.8 1.1-2 1-3.1l-5.8-55.5zM34 22.2C34 14.9 39.1 9 45.8 9h.4C52.9 9 58 14.9 58 22.2V24H34v-1.8zM13.4 83l5.3-51h54.4l5.3 51h-65z"
  }));
};

module.exports.Wifi = function Wifi(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M76.1 40.6c2 1.9 2.2 5 .3 7-1 1.1-2.3 1.6-3.7 1.6-1.2 0-2.4-.4-3.4-1.3-22.2-20.3-46.1-1-47.1-.2-2.1 1.8-5.3 1.5-7-.6-1.8-2.1-1.5-5.2.6-7 10.9-9.1 37.3-20.6 60.3.5zM46.3 68.4c-2.5 0-5 1-6.7 2.8-1.8 1.8-2.8 4.2-2.8 6.7s1 4.9 2.8 6.7c1.8 1.8 4.2 2.8 6.7 2.8s5-1 6.7-2.8c1.8-1.8 2.8-4.2 2.8-6.7s-1-4.9-2.8-6.7c-1.8-1.8-4.2-2.8-6.7-2.8zm44-41.4C66.6 6.3 43.7 7.4 28.6 12 12.5 16.9 2 26.5 1.6 27c-2 1.9-2.1 5-.2 7 1.9 2 5.1 2.1 7.1.2.1-.1 9.2-8.5 23.1-12.7 18.4-5.6 35.9-1.2 52.2 13 .9.8 2.1 1.2 3.3 1.2 1.4 0 2.8-.6 3.8-1.7 1.7-2 1.5-5.2-.6-7zM29.5 54.3c-2.2 1.7-2.5 4.8-.8 7s4.9 2.5 7 .8c.4-.3 11-8.5 20-.1 1 .9 2.2 1.3 3.4 1.3 1.3 0 2.7-.5 3.7-1.6 1.9-2 1.8-5.2-.3-7-12.1-11.2-26.9-5.1-33-.4z"
  }));
};

module.exports.Wrong = function Wrong(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M78.5 13.5c-17.9-17.9-47.1-17.9-65.1 0-17.9 17.9-17.9 47.1 0 65.1 9 9 20.8 13.5 32.5 13.5 11.8 0 23.6-4.5 32.5-13.5 18.1-18 18.1-47.2.1-65.1zM19.1 72.9C5.3 59 4.4 37 16.4 22.1l53.5 53.5C55 87.6 33 86.8 19.1 72.9zm56.5-3L22.1 16.4C29 10.8 37.5 8 46 8c9.7 0 19.5 3.7 26.9 11.1C86.7 33 87.6 55 75.6 69.9z"
  }));
};

module.exports.ZoomIn = function ZoomIn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.7 84.3 55.9 50c4.2-5.3 6.6-11.9 6.6-19 0-17.1-14-31-31.3-31S0 13.9 0 31s14 31 31.3 31c6.8 0 13-2.1 18.1-5.8l35 34.5c.9.9 2 1.3 3.1 1.3 1.2 0 2.3-.4 3.2-1.3 1.7-1.8 1.7-4.6 0-6.4zM8 31C8 18.3 18.4 8 31.3 8s23.3 10.3 23.3 23-10.5 23-23.3 23S8 43.6 8 31zm38.9.5c0 1.9-1.6 3.5-3.5 3.5H35v8c0 1.9-1.6 3.5-3.5 3.5S28 44.9 28 43v-8h-8.9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5H28v-9.1c0-1.9 1.6-3.5 3.5-3.5S35 17 35 18.9V28h8.4c2 0 3.5 1.6 3.5 3.5z"
  }));
};

module.exports.ZoomOut = function ZoomOut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 92 92"
  }), React.createElement("path", {
    d: "M90.7 84.3 55.9 50c4.2-5.3 6.6-11.9 6.6-19 0-17.1-14-31-31.3-31S0 13.9 0 31s14 31 31.3 31c6.8 0 13-2.1 18.1-5.8l35 34.5c.9.9 2 1.3 3.1 1.3 1.2 0 2.3-.4 3.2-1.3 1.7-1.8 1.7-4.6 0-6.4zM8 31C8 18.3 18.4 8 31.3 8s23.3 10.3 23.3 23-10.5 23-23.3 23S8 43.6 8 31zm38.9.5c0 1.9-1.6 3.5-3.5 3.5H19.1c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h24.3c2 0 3.5 1.6 3.5 3.5z"
  }));
};