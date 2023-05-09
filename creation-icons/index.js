function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.AddCircleSolid = function AddCircleSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#212224",
    fillRule: "evenodd",
    d: "M8.5 7.5v-2a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 1 0 1 0v-2h2a.5.5 0 1 0 0-1h-2zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
  }));
};

module.exports.AddCircle = function AddCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "M0 8a8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8 8 8 0 0 0-8 8zm1 0a7 7 0 1 1 14 0A7 7 0 0 1 1 8zm6.5-2.5v2h-2a.5.5 0 1 0 0 1h2v2a.5.5 0 1 0 1 0v-2h2a.5.5 0 1 0 0-1h-2v-2a.5.5 0 1 0-1 0z"
  })), React.createElement("use", {
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
};

module.exports.AddSolid = function AddSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 7h4a1 1 0 0 1 0 2H9v4a1 1 0 0 1-2 0V9H3a1 1 0 1 1 0-2h4V3a1 1 0 1 1 2 0v4z"
  }));
};

module.exports.Add = function Add(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "M7.5 2.5v5h-5a.5.5 0 1 0 0 1h5v5a.499.499 0 1 0 1 0v-5h5a.5.5 0 1 0 0-1h-5v-5a.5.5 0 1 0-1 0z"
  })), React.createElement("use", {
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
};

module.exports.Airbnb = function Airbnb(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#343538",
    d: "m14.768 11.248-.064-.205c-.064-.137-.096-.274-.16-.376-.064-.137-.096-.274-.16-.376l-.193-.41-.032-.035a176.358 176.358 0 0 0-3.236-7.077l-.032-.102a5.292 5.292 0 0 1-.352-.752l-.064-.069a3.837 3.837 0 0 0-.513-.82A2.48 2.48 0 0 0 7.976 0C7.207 0 6.502.342 5.99.991c-.225.308-.385.616-.545.89-.128.239-.224.512-.352.751l-.032.103C3.81 5.299 2.722 7.624 1.793 9.812l-.032.034c-.064.137-.128.274-.16.41-.064.137-.096.24-.16.376-.065.171-.16.377-.225.582a4.289 4.289 0 0 0-.192 1.777c.16 1.231.93 2.257 2.018 2.735.385.171.801.274 1.25.274.128 0 .288-.034.416-.034a3.802 3.802 0 0 0 1.538-.547c.577-.342 1.121-.82 1.762-1.539a8.65 8.65 0 0 0 1.762 1.54c.48.307.993.478 1.538.547.096 0 .256.034.416.034a2.94 2.94 0 0 0 1.25-.274c1.057-.444 1.826-1.504 2.018-2.735.032-.512-.032-1.094-.224-1.743zm-8.17-2.974c.032-.206.097-.41.193-.582.256-.41.672-.615 1.153-.615.513 0 .93.24 1.153.615.128.171.193.376.225.582.032.273.032.58-.032.888-.16.753-.61 1.676-1.346 2.701-.705-.991-1.185-1.914-1.346-2.7a4.109 4.109 0 0 1 0-.89zm3.941 1.23c.096-.478.128-.923.064-1.401-.064-.41-.192-.82-.416-1.129a2.57 2.57 0 0 0-2.211-1.196c-.897 0-1.698.444-2.21 1.196a2.804 2.804 0 0 0-.417 1.129 4.17 4.17 0 0 0 .064 1.401c.224 1.026.801 2.188 1.73 3.453-.545.65-1.057 1.094-1.538 1.402-.352.205-.705.342-1.057.376-.352.034-.705 0-1.057-.137a2.19 2.19 0 0 1-1.25-1.71c-.032-.444 0-.785.16-1.196.033-.102.065-.205.129-.307.032-.069.032-.103.064-.171.096-.24.224-.513.32-.787v-.034A235.231 235.231 0 0 1 6.15 3.35l.032-.102c.064-.103.128-.24.192-.376.064-.137.128-.24.192-.376.129-.274.257-.479.385-.65.288-.342.64-.513 1.057-.513.417 0 .769.171 1.057.513.128.171.257.376.385.65.064.102.128.239.16.376.064.137.128.24.16.342l.032.102c1.121 2.325 2.179 4.684 3.204 7.009l.032.068c.064.137.096.24.16.376.064.137.128.274.16.376.032.069.032.103.064.171.064.103.096.205.128.308.129.41.16.786.097 1.128a2.19 2.19 0 0 1-1.25 1.71c-.32.136-.673.205-1.025.136-.352-.034-.705-.17-1.057-.376-.48-.273-.961-.718-1.538-1.401.961-1.129 1.538-2.291 1.762-3.317z"
  }));
};

module.exports.AlarmClockSolid = function AlarmClockSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 1a7 7 0 0 1 7 7 6.98 6.98 0 0 1-2.744 5.549l1.598 1.597a.502.502 0 0 1-.708.708l-1.74-1.741A6.967 6.967 0 0 1 8 15a6.967 6.967 0 0 1-3.406-.887l-1.74 1.74a.502.502 0 0 1-.708-.707l1.598-1.597A6.983 6.983 0 0 1 1 7.999a7 7 0 0 1 7-7zm0 8V4.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H8zM11.627.844A2.499 2.499 0 0 1 16 2.5c0 .728-.313 1.405-.848 1.876l-.661-.75a1.5 1.5 0 1 0-2.115-2.119l-.75-.663zM2.5 1a1.5 1.5 0 0 0-.988 2.628l-.66.752A2.5 2.5 0 0 1 2.5 0c.73 0 1.405.315 1.877.854l-.752.659A1.486 1.486 0 0 0 2.5 1z"
  }));
};

module.exports.AlarmClock = function AlarmClock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m11.627.844.749.663a1.5 1.5 0 1 1 2.115 2.119l.66.75A2.5 2.5 0 1 0 11.627.844zM2.5 1c.437 0 .839.188 1.124.513l.752-.66A2.484 2.484 0 0 0 2.5 0 2.5 2.5 0 0 0 .853 4.38l.659-.752A1.5 1.5 0 0 1 2.5 1zM8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm0-1a7 7 0 0 0-7 7 6.983 6.983 0 0 0 2.744 5.549l-1.598 1.597a.502.502 0 0 0 .708.708l1.74-1.741A6.967 6.967 0 0 0 8 15a6.967 6.967 0 0 0 3.406-.887l1.74 1.74a.502.502 0 0 0 .708-.707l-1.598-1.597A6.98 6.98 0 0 0 15 7.999a7 7 0 0 0-7-7zm0 8V4.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H8z"
  }));
};

module.exports.Amazon = function Amazon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M8.468 8.653a1.712 1.712 0 0 1-1.131.92c-.07 0-.176.035-.282.035-.777 0-1.236-.6-1.236-1.484 0-1.131.671-1.66 1.518-1.908.459-.106.99-.142 1.52-.142V6.5c0 .812.034 1.447-.39 2.154zm.388-4.202c-.459.035-.99.07-1.52.14-.811.106-1.623.248-2.293.566-1.306.53-2.19 1.66-2.19 3.32 0 2.085 1.342 3.144 3.038 3.144.564 0 1.023-.072 1.446-.176.672-.213 1.236-.602 1.907-1.309.388.53.495.779 1.165 1.344.177.07.354.07.494-.035.424-.354 1.167-.99 1.554-1.343.177-.142.142-.354.035-.53-.388-.494-.777-.919-.777-1.872V4.52c0-1.342.107-2.578-.882-3.496C10.022.284 8.75 0 7.761 0h-.424c-1.8.104-3.706.882-4.131 3.108-.07.283.142.388.283.423l1.978.248c.211-.036.318-.213.352-.388.176-.777.812-1.166 1.518-1.238h.142c.424 0 .883.177 1.13.531.282.424.247.99.247 1.484v.283zm7.142 7.531a.76.76 0 0 0-.112-.4l-.007-.01-.009-.01c-.07-.078-.138-.107-.211-.139-.22-.085-.539-.13-.922-.13-.276 0-.58.026-.886.092v-.02l-.308.102-.006.003-.174.057v.007c-.204.085-.39.19-.561.315-.108.08-.196.187-.2.35a.326.326 0 0 0 .116.25.373.373 0 0 0 .287.077h.015l.011-.003c.15-.032.37-.053.627-.09a6.29 6.29 0 0 1 .655-.041c.143-.001.272.009.36.028a.403.403 0 0 1 .11.036c.003.013.01.045.008.089.002.17-.07.484-.168.79-.096.307-.213.615-.29.82a.415.415 0 0 0-.031.155.338.338 0 0 0 .103.247c.07.066.16.092.236.092h.003a.473.473 0 0 0 .292-.11c.78-.703 1.053-1.825 1.064-2.456l-.002-.1zm-2.315.973a.548.548 0 0 0-.238.054c-.086.034-.173.073-.256.108l-.121.051-.158.063v.002c-1.717.696-3.52 1.105-5.19 1.14-.06.003-.123.003-.182.003-2.625.001-4.766-1.216-6.926-2.416a.494.494 0 0 0-.228-.06.399.399 0 0 0-.27.104.37.37 0 0 0-.114.268c0 .13.07.251.168.33 2.028 1.76 4.25 3.396 7.238 3.398l.177-.003c1.901-.042 4.051-.685 5.72-1.733l.01-.007c.219-.13.437-.28.643-.444a.513.513 0 0 0 .216-.398.477.477 0 0 0-.489-.46z"
  }));
};

module.exports.AnalyticGraphSolid = function AnalyticGraphSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.9 6.2a.5.5 0 0 0-.7-.1L9.547 8.84 5.853 5.146a.5.5 0 0 0-.63-.062l-3 2a.5.5 0 0 0 .554.832l2.66-1.773 3.71 3.71A.5.5 0 0 0 9.8 9.9l4-3a.5.5 0 0 0 .1-.7M16 9.5v-8a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v8A3.5 3.5 0 0 0 3.5 13h1.307l-.781 2.342a.5.5 0 1 0 .949.316L5.86 13h4.28l.886 2.658a.5.5 0 1 0 .949-.316L11.194 13H12.5A3.5 3.5 0 0 0 16 9.5"
  }));
};

module.exports.AnalyticGraph = function AnalyticGraph(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.9 6.2a.5.5 0 0 0-.7-.1L9.547 8.84 5.853 5.146a.5.5 0 0 0-.63-.062l-3 2a.5.5 0 0 0 .554.832l2.66-1.773 3.71 3.71A.5.5 0 0 0 9.8 9.9l4-3a.5.5 0 0 0 .1-.7M1 9.5V2h14v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 9.5m15 0v-8a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v8A3.5 3.5 0 0 0 3.5 13h1.307l-.781 2.342a.5.5 0 1 0 .949.316L5.86 13h4.28l.886 2.658a.5.5 0 1 0 .949-.316L11.194 13H12.5A3.5 3.5 0 0 0 16 9.5"
  }));
};

module.exports.Android = function Android(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M9.909 3.2a.471.471 0 0 1-.477-.464.47.47 0 0 1 .477-.464.47.47 0 0 1 .477.464.471.471 0 0 1-.477.464zm-3.818 0a.471.471 0 0 1-.477-.464.47.47 0 0 1 .477-.464.47.47 0 0 1 .477.464.471.471 0 0 1-.477.464zm4.1-1.86.178-.262.178-.258.396-.58A.151.151 0 0 0 10.9.027a.16.16 0 0 0-.22.044l-.605.881-.181.265A5.356 5.356 0 0 0 8 .878a5.36 5.36 0 0 0-1.893.338l-.18-.265-.18-.26L5.324.07A.163.163 0 0 0 5.1.026a.153.153 0 0 0-.044.215l.396.58.178.257.179.262c-1.35.612-2.264 1.772-2.264 3.1h8.908c0-1.328-.913-2.488-2.263-3.1zM3.615 5.058h-.069v6.813c0 .541.451.981 1.008.981h.727a.872.872 0 0 0-.039.258v1.961c0 .513.429.929.955.929a.942.942 0 0 0 .955-.929V13.11a.905.905 0 0 0-.038-.258h1.772a.904.904 0 0 0-.037.258v1.961c0 .513.427.929.954.929.527 0 .956-.416.956-.929V13.11a.873.873 0 0 0-.04-.258h.728a.995.995 0 0 0 1.007-.98V5.057h-8.84zm-1.66 0A.942.942 0 0 0 1 5.987V9.96c0 .513.427.929.955.929a.942.942 0 0 0 .954-.929V5.987a.942.942 0 0 0-.954-.929zm12.091 0a.942.942 0 0 0-.955.929V9.96c0 .513.427.929.955.929A.942.942 0 0 0 15 9.96V5.987a.942.942 0 0 0-.954-.929z"
  }));
};

module.exports.AngleCircleDownSolid = function AngleCircleDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-6.707L4.854 6.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L8 9.293z"
  }));
};

module.exports.AngleCircleDown = function AngleCircleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 9.293 3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L8 9.293zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.AngleCircleLeftSolid = function AngleCircleLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1.854-4.854L6.707 8l3.147-3.146a.5.5 0 0 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708z"
  }));
};

module.exports.AngleCircleLeft = function AngleCircleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.854 11.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 1 1 .708.708L6.707 8l3.147 3.146zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.AngleCircleRightSolid = function AngleCircleRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1.293-8-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L9.293 8z"
  }));
};

module.exports.AngleCircleRight = function AngleCircleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.293 8 6.146 4.854a.5.5 0 1 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L9.293 8zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.AngleCircleUpSolid = function AngleCircleUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM4.854 9.854 8 6.707l3.146 3.147a.5.5 0 0 0 .708-.708l-3.5-3.5a.5.5 0 0 0-.708 0l-3.5 3.5a.5.5 0 1 0 .708.708z"
  }));
};

module.exports.AngleCircleUp = function AngleCircleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.854 9.854a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L8 6.707 4.854 9.854zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.AngleDoubleCircleDownSolid = function AngleDoubleCircleDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.175-7.88L8 10.841l-3.175-2.72a.5.5 0 1 0-.65.759l3.5 3a.5.5 0 0 0 .65 0l3.5-3a.5.5 0 1 0-.65-.76zm0-3L8 7.841l-3.175-2.72a.5.5 0 1 0-.65.759l3.5 3a.5.5 0 0 0 .65 0l3.5-3a.5.5 0 1 0-.65-.76z"
  }));
};

module.exports.AngleDoubleCircleDown = function AngleDoubleCircleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11.175 8.12a.5.5 0 0 1 .65.76l-3.5 3a.5.5 0 0 1-.65 0l-3.5-3a.5.5 0 1 1 .65-.76L8 10.841l3.175-2.72zm0-3a.5.5 0 0 1 .65.76l-3.5 3a.5.5 0 0 1-.65 0l-3.5-3a.5.5 0 1 1 .65-.76L8 7.841l3.175-2.72zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.AngleDoubleCircleLeftSolid = function AngleDoubleCircleLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5.159 8l2.72-3.175a.5.5 0 1 0-.759-.65l-3 3.5a.5.5 0 0 0 0 .65l3 3.5a.5.5 0 1 0 .76-.65L5.159 8zm5.72 3.175L8.16 8l2.72-3.175a.5.5 0 1 0-.759-.65l-3 3.5a.5.5 0 0 0 0 .65l3 3.5a.5.5 0 0 0 .76-.65z"
  }));
};

module.exports.AngleDoubleCircleLeft = function AngleDoubleCircleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m5.159 8 2.72 3.175a.5.5 0 0 1-.759.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 1 1 .76.65L5.159 8zm5.72 3.175a.5.5 0 0 1-.759.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 0 1 .76.65L8.159 8l2.72 3.175zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.AngleDoubleCircleRightSolid = function AngleDoubleCircleRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5.12 4.825 7.841 8l-2.72 3.175a.5.5 0 0 0 .759.65l3-3.5a.5.5 0 0 0 0-.65l-3-3.5a.5.5 0 1 0-.76.65zm3 0L10.841 8l-2.72 3.175a.5.5 0 0 0 .759.65l3-3.5a.5.5 0 0 0 0-.65l-3-3.5a.5.5 0 1 0-.76.65z"
  }));
};

module.exports.AngleDoubleCircleRight = function AngleDoubleCircleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.12 4.825a.5.5 0 1 1 .76-.65l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 1 1-.76-.65L7.841 8l-2.72-3.175zm3 0a.5.5 0 1 1 .76-.65l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 1 1-.76-.65L10.841 8l-2.72-3.175zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.AngleDoubleCircleUpSolid = function AngleDoubleCircleUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-3.175-5.12L8 8.159l3.175 2.72a.5.5 0 0 0 .65-.759l-3.5-3a.5.5 0 0 0-.65 0l-3.5 3a.5.5 0 0 0 .65.76zm0-3L8 5.159l3.175 2.72a.5.5 0 0 0 .65-.759l-3.5-3a.5.5 0 0 0-.65 0l-3.5 3a.5.5 0 1 0 .65.76z"
  }));
};

module.exports.AngleDoubleCircleUp = function AngleDoubleCircleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.825 10.88a.5.5 0 1 1-.65-.76l3.5-3a.5.5 0 0 1 .65 0l3.5 3a.5.5 0 0 1-.65.76L8 8.159l-3.175 2.72zm0-3a.5.5 0 1 1-.65-.76l3.5-3a.5.5 0 0 1 .65 0l3.5 3a.5.5 0 1 1-.65.76L8 5.159l-3.175 2.72zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.AngleDoubleDownMiniSolid = function AngleDoubleDownMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 6.75 3.4-2.55a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-1.2 0l-4-3a1 1 0 1 1 1.2-1.6L8 6.75zm0 4 3.4-2.55a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-1.2 0l-4-3a1 1 0 1 1 1.2-1.6L8 10.75z"
  }));
};

module.exports.AngleDoubleDownMini = function AngleDoubleDownMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11.175 8.12a.5.5 0 0 1 .65.76l-3.5 3a.5.5 0 0 1-.65 0l-3.5-3a.5.5 0 1 1 .65-.76L8 10.841l3.175-2.72zm0-3a.5.5 0 0 1 .65.76l-3.5 3a.5.5 0 0 1-.65 0l-3.5-3a.5.5 0 1 1 .65-.76L8 7.841l3.175-2.72z"
  }));
};

module.exports.AngleDoubleDownSolid = function AngleDoubleDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 12.683 6.35-5.442a1 1 0 1 1 1.3 1.518l-7 6a1 1 0 0 1-1.3 0l-7-6a1 1 0 1 1 1.3-1.518L8 12.683zM1.65 2.24 8 7.683l6.35-5.442a1 1 0 1 1 1.3 1.518l-7 6a1 1 0 0 1-1.3 0l-7-6a1 1 0 1 1 1.3-1.518z"
  }));
};

module.exports.AngleDoubleDown = function AngleDoubleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M15.159 7.134a.5.5 0 1 1 .682.732l-7.5 7a.5.5 0 0 1-.682 0l-7.5-7a.5.5 0 1 1 .682-.732L8 13.816l7.159-6.682zM8 8.816l7.159-6.682a.5.5 0 1 1 .682.732l-7.5 7a.5.5 0 0 1-.682 0l-7.5-7a.5.5 0 1 1 .682-.732L8 8.816z"
  }));
};

module.exports.AngleDoubleLeftMiniSolid = function AngleDoubleLeftMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m9.25 8 2.55 3.4a1 1 0 1 1-1.6 1.2l-3-4a1 1 0 0 1 0-1.2l3-4a1 1 0 0 1 1.6 1.2L9.25 8zm-4 0 2.55 3.4a1 1 0 1 1-1.6 1.2l-3-4a1 1 0 0 1 0-1.2l3-4a1 1 0 1 1 1.6 1.2L5.25 8z"
  }));
};

module.exports.AngleDoubleLeftMini = function AngleDoubleLeftMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10.88 11.175a.5.5 0 0 1-.76.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 0 1 .76.65L8.159 8l2.72 3.175zM5.159 8l2.72 3.175a.5.5 0 0 1-.759.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 1 1 .76.65L5.159 8z"
  }));
};

module.exports.AngleDoubleLeftSolid = function AngleDoubleLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m3.317 8 5.442 6.35a1 1 0 0 1-1.518 1.3l-6-7a1 1 0 0 1 0-1.3l6-7a1 1 0 0 1 1.518 1.3L3.317 8zM13.76 1.65 8.317 8l5.442 6.35a1 1 0 0 1-1.518 1.3l-6-7a1 1 0 0 1 0-1.3l6-7a1 1 0 1 1 1.518 1.3z"
  }));
};

module.exports.AngleDoubleLeft = function AngleDoubleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m2.184 8 6.682 7.159a.5.5 0 1 1-.732.682l-7-7.5a.5.5 0 0 1 0-.682l7-7.5a.5.5 0 1 1 .732.682L2.184 8zm5 0 6.682 7.159a.5.5 0 1 1-.732.682l-7-7.5a.5.5 0 0 1 0-.682l7-7.5a.5.5 0 1 1 .732.682L7.184 8z"
  }));
};

module.exports.AngleDoubleRightMiniSolid = function AngleDoubleRightMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.75 8 4.2 11.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 0-1.2l-3-4a1 1 0 1 0-1.6 1.2L6.75 8zm4 0L8.2 11.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 0-1.2l-3-4a1 1 0 1 0-1.6 1.2L10.75 8z"
  }));
};

module.exports.AngleDoubleRightMini = function AngleDoubleRightMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8.12 4.825a.5.5 0 1 1 .76-.65l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 1 1-.76-.65L10.841 8l-2.72-3.175zm-3 0a.5.5 0 1 1 .76-.65l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 1 1-.76-.65L7.841 8l-2.72-3.175z"
  }));
};

module.exports.AngleDoubleRightSolid = function AngleDoubleRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.683 8 7.24 14.35a1 1 0 1 0 1.518 1.3l6-7a1 1 0 0 0 0-1.3l-6-7a1 1 0 1 0-1.518 1.3L12.683 8zM2.24 1.65 7.683 8 2.24 14.35a1 1 0 1 0 1.518 1.3l6-7a1 1 0 0 0 0-1.3l-6-7a1 1 0 0 0-1.518 1.3z"
  }));
};

module.exports.AngleDoubleRight = function AngleDoubleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.134.841A.5.5 0 1 1 7.866.16l7 7.5a.5.5 0 0 1 0 .682l-7 7.5a.5.5 0 1 1-.732-.682L13.816 8 7.134.841zm-5 0A.5.5 0 1 1 2.866.16l7 7.5a.5.5 0 0 1 0 .682l-7 7.5a.5.5 0 1 1-.732-.682L8.816 8 2.134.841z"
  }));
};

module.exports.AngleDoubleUpMiniSolid = function AngleDoubleUpMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 9.25 4.6 11.8a1 1 0 0 1-1.2-1.6l4-3a1 1 0 0 1 1.2 0l4 3a1 1 0 0 1-1.2 1.6L8 9.25zm0-4L4.6 7.8a1 1 0 1 1-1.2-1.6l4-3a1 1 0 0 1 1.2 0l4 3a1 1 0 0 1-1.2 1.6L8 5.25z"
  }));
};

module.exports.AngleDoubleUpMini = function AngleDoubleUpMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.825 10.88a.5.5 0 1 1-.65-.76l3.5-3a.5.5 0 0 1 .65 0l3.5 3a.5.5 0 0 1-.65.76L8 8.159l-3.175 2.72zm0-3a.5.5 0 1 1-.65-.76l3.5-3a.5.5 0 0 1 .65 0l3.5 3a.5.5 0 1 1-.65.76L8 5.159l-3.175 2.72z"
  }));
};

module.exports.AngleDoubleUpSolid = function AngleDoubleUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 3.317 1.65 8.76a1 1 0 1 1-1.3-1.518l7-6a1 1 0 0 1 1.3 0l7 6a1 1 0 1 1-1.3 1.518L8 3.317zM1.65 13.76a1 1 0 1 1-1.3-1.518l7-6a1 1 0 0 1 1.3 0l7 6a1 1 0 1 1-1.3 1.518L8 8.317 1.65 13.76z"
  }));
};

module.exports.AngleDoubleUp = function AngleDoubleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 2.184.841 8.866a.5.5 0 1 1-.682-.732l7.5-7a.5.5 0 0 1 .682 0l7.5 7a.5.5 0 1 1-.682.732L8 2.184zm0 5L.841 13.866a.5.5 0 1 1-.682-.732l7.5-7a.5.5 0 0 1 .682 0l7.5 7a.5.5 0 1 1-.682.732L8 7.184z"
  }));
};

module.exports.AngleDownMiniSolid = function AngleDownMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 8.75 3.4-2.55a1 1 0 1 1 1.2 1.6l-4 3a1 1 0 0 1-1.2 0l-4-3a1 1 0 1 1 1.2-1.6L8 8.75z"
  }));
};

module.exports.AngleDownMini = function AngleDownMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 8.841 3.175-2.72a.5.5 0 0 1 .65.759l-3.5 3a.5.5 0 0 1-.65 0l-3.5-3a.5.5 0 1 1 .65-.76L8 8.841z"
  }));
};

module.exports.AngleDownSolid = function AngleDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 9.683 6.35-5.442a1 1 0 1 1 1.3 1.518l-7 6a1 1 0 0 1-1.3 0l-7-6a1 1 0 1 1 1.3-1.518L8 9.683z"
  }));
};

module.exports.AngleDown = function AngleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M15.159 4.134a.5.5 0 1 1 .682.732l-7.5 7a.5.5 0 0 1-.682 0l-7.5-7a.5.5 0 1 1 .682-.732L8 10.816l7.159-6.682z"
  }));
};

module.exports.AngleFilletDownSolid = function AngleFilletDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.102 6.874a1.96 1.96 0 0 1 .044-2.728l.059-.055a1.854 1.854 0 0 1 2.62.114L7.63 8.358a.5.5 0 0 0 .738 0l3.807-4.153c.027-.03.027-.03.056-.059a1.854 1.854 0 0 1 2.622 0 1.96 1.96 0 0 1 .044 2.728l-5.804 6.19c-.033.035-.033.035-.068.068a1.5 1.5 0 0 1-2.12-.068l-5.804-6.19z"
  }));
};

module.exports.AngleFilletDown = function AngleFilletDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.102 6.874a1.96 1.96 0 0 1 .044-2.728l.059-.055a1.854 1.854 0 0 1 2.62.114L7.63 8.358a.5.5 0 0 0 .738 0l3.807-4.153c.027-.03.027-.03.056-.059a1.854 1.854 0 0 1 2.622 0 1.96 1.96 0 0 1 .044 2.728l-5.804 6.19c-.033.035-.033.035-.068.068a1.5 1.5 0 0 1-2.12-.068l-5.804-6.19zm.73-.684 5.803 6.19a.5.5 0 0 0 .707.023l.023-.023 5.803-6.19a.96.96 0 0 0-.022-1.336.854.854 0 0 0-1.207 0l-.026.026-3.807 4.154a1.5 1.5 0 0 1-2.212 0L3.087 4.88a.854.854 0 0 0-1.207-.052l-.026.026a.96.96 0 0 0-.022 1.336z"
  }));
};

module.exports.AngleFilletLeftSolid = function AngleFilletLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.126 1.102a1.96 1.96 0 0 1 2.728.044 1.854 1.854 0 0 1 0 2.622l-.059.056-4.153 3.807a.5.5 0 0 0 0 .738l4.153 3.807c.755.692.806 1.865.114 2.62l-.055.058a1.96 1.96 0 0 1-2.728.044l-6.19-5.804a1.5 1.5 0 0 1-.068-2.12c.033-.035.033-.035.068-.068l6.19-5.804z"
  }));
};

module.exports.AngleFilletLeft = function AngleFilletLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.597 7.658a.5.5 0 0 0 .023.707l6.19 5.803a.96.96 0 0 0 1.336-.022l.026-.026a.854.854 0 0 0-.052-1.207L6.966 9.106a1.5 1.5 0 0 1 0-2.212l4.154-3.807.026-.026a.854.854 0 0 0 0-1.207.96.96 0 0 0-1.336-.022L3.62 7.635l-.023.023zm5.53-6.556a1.96 1.96 0 0 1 2.727.044 1.854 1.854 0 0 1 0 2.622l-.059.056-4.153 3.807a.5.5 0 0 0 0 .738l4.153 3.807c.755.692.806 1.865.114 2.62l-.055.058a1.96 1.96 0 0 1-2.728.044l-6.19-5.804a1.5 1.5 0 0 1-.068-2.12c.033-.035.033-.035.068-.068l6.19-5.804z"
  }));
};

module.exports.AngleFilletRightSolid = function AngleFilletRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.205 3.824a1.854 1.854 0 0 1-.114-2.62l.055-.058a1.96 1.96 0 0 1 2.728-.044l6.19 5.804a1.5 1.5 0 0 1 .068 2.12c-.033.035-.033.035-.068.068l-6.19 5.804a1.96 1.96 0 0 1-2.728-.044 1.854 1.854 0 0 1 0-2.622l.059-.056 4.153-3.807a.5.5 0 0 0 0-.738L4.205 3.824z"
  }));
};

module.exports.AngleFilletRight = function AngleFilletRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.126 6.986a1.5 1.5 0 0 1-.092 2.12L4.88 12.913l-.026.026a.854.854 0 0 0 0 1.207.96.96 0 0 0 1.336.022l6.19-5.803.023-.023a.5.5 0 0 0-.023-.707L6.19 1.832a.96.96 0 0 0-1.336.022l-.026.026a.854.854 0 0 0 .052 1.207l4.154 3.807c.032.03.062.06.092.092zM4.205 3.824a1.854 1.854 0 0 1-.114-2.62l.055-.058a1.96 1.96 0 0 1 2.728-.044l6.19 5.804a1.5 1.5 0 0 1 .068 2.12c-.033.035-.033.035-.068.068l-6.19 5.804a1.96 1.96 0 0 1-2.728-.044 1.854 1.854 0 0 1 0-2.622l.059-.056 4.153-3.807a.5.5 0 0 0 0-.738L4.205 3.824z"
  }));
};

module.exports.AngleFilletUpSolid = function AngleFilletUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.906 2.936c.033-.035.033-.035.068-.068a1.5 1.5 0 0 1 2.12.068l5.804 6.19a1.96 1.96 0 0 1-.044 2.728l-.059.055a1.854 1.854 0 0 1-2.62-.114L8.37 7.642a.5.5 0 0 0-.738 0l-3.807 4.153c-.027.03-.027.03-.056.059a1.854 1.854 0 0 1-2.622 0 1.96 1.96 0 0 1-.044-2.728l5.804-6.19z"
  }));
};

module.exports.AngleFilletUp = function AngleFilletUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.906 2.936c.033-.035.033-.035.068-.068a1.5 1.5 0 0 1 2.12.068l5.804 6.19a1.96 1.96 0 0 1-.044 2.728l-.059.055a1.854 1.854 0 0 1-2.62-.114L8.37 7.642a.5.5 0 0 0-.738 0l-3.807 4.153c-.027.03-.027.03-.056.059a1.854 1.854 0 0 1-2.622 0 1.96 1.96 0 0 1-.044-2.728l5.804-6.19zM1.832 9.81a.96.96 0 0 0 .022 1.336.854.854 0 0 0 1.207 0l.026-.026 3.807-4.154a1.5 1.5 0 0 1 2.212 0l3.807 4.154a.854.854 0 0 0 1.207.052l.026-.026a.96.96 0 0 0 .022-1.336L8.365 3.62a.5.5 0 0 0-.707-.023l-.023.023-5.803 6.19z"
  }));
};

module.exports.AngleLeftMiniSolid = function AngleLeftMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m7.25 8 2.55 3.4a1 1 0 0 1-1.6 1.2l-3-4a1 1 0 0 1 0-1.2l3-4a1 1 0 1 1 1.6 1.2L7.25 8z"
  }));
};

module.exports.AngleLeftMini = function AngleLeftMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.88 11.175a.5.5 0 0 1-.76.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 1 1 .76.65L7.159 8l2.72 3.175z"
  }));
};

module.exports.AngleLeftSolid = function AngleLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m6.317 8 5.442 6.35a1 1 0 0 1-1.518 1.3l-6-7a1 1 0 0 1 0-1.3l6-7a1 1 0 1 1 1.518 1.3L6.317 8z"
  }));
};

module.exports.AngleLeft = function AngleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m5.184 8 6.682 7.159a.5.5 0 1 1-.732.682l-7-7.5a.5.5 0 0 1 0-.682l7-7.5a.5.5 0 0 1 .732.682L5.184 8z"
  }));
};

module.exports.AngleRightMiniSolid = function AngleRightMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8.75 8 6.2 4.6a1 1 0 1 1 1.6-1.2l3 4a1 1 0 0 1 0 1.2l-3 4a1 1 0 0 1-1.6-1.2L8.75 8z"
  }));
};

module.exports.AngleRightMini = function AngleRightMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8.841 8-2.72-3.175a.5.5 0 1 1 .759-.65l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 1 1-.76-.65L8.841 8z"
  }));
};

module.exports.AngleRightSolid = function AngleRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.683 8 4.24 14.35a1 1 0 1 0 1.518 1.3l6-7a1 1 0 0 0 0-1.3l-6-7a1 1 0 0 0-1.518 1.3L9.683 8z"
  }));
};

module.exports.AngleRight = function AngleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10.816 8 4.134.841A.5.5 0 0 1 4.866.16l7 7.5a.5.5 0 0 1 0 .682l-7 7.5a.5.5 0 1 1-.732-.682L10.816 8z"
  }));
};

module.exports.AngleUpMiniSolid = function AngleUpMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.6 9.8a1 1 0 0 1-1.2-1.6l4-3a1 1 0 0 1 1.2 0l4 3a1 1 0 0 1-1.2 1.6L8 7.25 4.6 9.8z"
  }));
};

module.exports.AngleUpMini = function AngleUpMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.825 9.88a.5.5 0 1 1-.65-.76l3.5-3a.5.5 0 0 1 .65 0l3.5 3a.5.5 0 1 1-.65.76L8 7.159l-3.175 2.72z"
  }));
};

module.exports.AngleUpSolid = function AngleUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 6.317 1.65 11.76a1 1 0 1 1-1.3-1.518l7-6a1 1 0 0 1 1.3 0l7 6a1 1 0 0 1-1.3 1.518L8 6.317z"
  }));
};

module.exports.AngleUp = function AngleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 5.184.841 11.866a.5.5 0 0 1-.682-.732l7.5-7a.5.5 0 0 1 .682 0l7.5 7a.5.5 0 0 1-.682.732L8 5.184z"
  }));
};

module.exports.Apple = function Apple(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M10.28 2.597c.534-.673.939-1.625.792-2.597-.873.06-1.894.605-2.49 1.316-.543.645-.99 1.603-.816 2.534.956.029 1.941-.53 2.513-1.253zM15 11.74c-.382.832-.566 1.203-1.059 1.94-.686 1.028-1.655 2.309-2.856 2.318-1.066.011-1.341-.682-2.789-.674-1.447.008-1.749.687-2.817.677-1.2-.01-2.118-1.166-2.805-2.194C.752 10.933.55 7.56 1.735 5.766c.843-1.274 2.173-2.019 3.422-2.019 1.271 0 2.071.685 3.124.685 1.021 0 1.643-.687 3.113-.687 1.113 0 2.293.596 3.132 1.623-2.751 1.48-2.306 5.339.474 6.371z"
  }));
};

module.exports.ArrowCircleDownSolid = function ArrowCircleDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM6 8H3.5a.5.5 0 0 0-.354.854l4.5 4.5a.5.5 0 0 0 .708 0l4.5-4.5A.5.5 0 0 0 12.5 8H10V3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8z"
  }));
};

module.exports.ArrowCircleDown = function ArrowCircleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM7 4v4.5a.5.5 0 0 1-.5.5H4.707L8 12.293 11.293 9H9.5a.5.5 0 0 1-.5-.5V4H7zM6 8V3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V8h2.5a.5.5 0 0 1 .354.854l-4.5 4.5a.5.5 0 0 1-.708 0l-4.5-4.5A.5.5 0 0 1 3.5 8H6z"
  }));
};

module.exports.ArrowCircleLeftSolid = function ArrowCircleLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-6h4.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H8V3.5a.5.5 0 0 0-.854-.354l-4.5 4.5a.5.5 0 0 0 0 .708l4.5 4.5A.5.5 0 0 0 8 12.5V10z"
  }));
};

module.exports.ArrowCircleLeft = function ArrowCircleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.707 8 7 11.293V9.5a.5.5 0 0 1 .5-.5H12V7H7.5a.5.5 0 0 1-.5-.5V4.707L3.707 8zM8 10v2.5a.5.5 0 0 1-.854.354l-4.5-4.5a.5.5 0 0 1 0-.708l4.5-4.5A.5.5 0 0 1 8 3.5V6h4.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H8zm0 6A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.ArrowCircleRightSolid = function ArrowCircleRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM8 6H3.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H8v2.5a.5.5 0 0 0 .854.354l4.5-4.5a.5.5 0 0 0 0-.708l-4.5-4.5A.5.5 0 0 0 8 3.5V6z"
  }));
};

module.exports.ArrowCircleRight = function ArrowCircleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0-9V3.5a.5.5 0 0 1 .854-.354l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5A.5.5 0 0 1 8 12.5V10H3.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H8zm1-1.293V6.5a.5.5 0 0 1-.5.5H4v2h4.5a.5.5 0 0 1 .5.5v1.793L12.293 8 9 4.707z"
  }));
};

module.exports.ArrowCircleUpSolid = function ArrowCircleUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm2-8h2.5a.5.5 0 0 0 .354-.854l-4.5-4.5a.5.5 0 0 0-.708 0l-4.5 4.5A.5.5 0 0 0 3.5 8H6v4.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8z"
  }));
};

module.exports.ArrowCircleUp = function ArrowCircleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm2-7v4.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V8H3.5a.5.5 0 0 1-.354-.854l4.5-4.5a.5.5 0 0 1 .708 0l4.5 4.5A.5.5 0 0 1 12.5 8H10zm-1 4V7.5a.5.5 0 0 1 .5-.5h1.793L8 3.707 4.707 7H6.5a.5.5 0 0 1 .5.5V12h2z"
  }));
};

module.exports.ArrowDownSolid = function ArrowDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.001 8V.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V8h3.5a.5.5 0 0 1 .366.84l-6.5 7a.5.5 0 0 1-.732 0l-6.5-7A.5.5 0 0 1 1.5 8H5z"
  }));
};

module.exports.ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.001 1v7.5a.5.5 0 0 1-.5.5H2.648L8 14.765 13.354 9h-2.853a.5.5 0 0 1-.5-.5V1h-4zm-1 7V.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V8h3.5a.5.5 0 0 1 .366.84l-6.5 7a.5.5 0 0 1-.732 0l-6.5-7A.5.5 0 0 1 1.5 8H5z"
  }));
};

module.exports.ArrowFilletDownSolid = function ArrowFilletDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.136 7.132a1.932 1.932 0 0 1 2.718.014l.044.047a1.866 1.866 0 0 1-.09 2.637l-5.786 5.4a1.5 1.5 0 0 1-2.046 0l-5.783-5.4-.047-.044a1.866 1.866 0 0 1 0-2.64 1.924 1.924 0 0 1 2.713-.008A320.56 320.56 0 0 1 6 9.268V2a2 2 0 1 1 4 0v7.255c.542-.552 1.254-1.259 2.136-2.123z"
  }));
};

module.exports.ArrowFilletDown = function ArrowFilletDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.136 7.132a1.932 1.932 0 0 1 2.718.014l.044.047a1.866 1.866 0 0 1-.09 2.637l-5.786 5.4a1.5 1.5 0 0 1-2.046 0l-5.783-5.4-.047-.044a1.866 1.866 0 0 1 0-2.64 1.924 1.924 0 0 1 2.713-.008A320.56 320.56 0 0 1 6 9.268V2a2 2 0 1 1 4 0v7.255c.542-.552 1.254-1.259 2.136-2.123zm-4.477 7.366a.5.5 0 0 0 .682 0l5.784-5.399a.866.866 0 0 0 .042-1.224c-.382-.383-.967-.386-1.332-.028-1.466 1.436-2.457 2.435-2.966 2.99A.5.5 0 0 1 9 10.5V2a1 1 0 1 0-2 0v8.5a.5.5 0 0 1-.869.338c-.32-.35-1.316-1.35-2.974-2.988a.924.924 0 0 0-1.303.004.866.866 0 0 0 0 1.225l5.805 5.419z"
  }));
};

module.exports.ArrowFilletLeftSolid = function ArrowFilletLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m6.707 10 2.147 2.146c.747.748.747 1.96 0 2.708a1.866 1.866 0 0 1-2.64 0l-.044-.047-5.4-5.784a1.5 1.5 0 0 1 0-2.046l5.4-5.784a1.866 1.866 0 0 1 2.637-.091l.047.044c.747.748.747 1.96 0 2.708L6.707 6H14a2 2 0 1 1 0 4H6.707z"
  }));
};

module.exports.ArrowFilletLeft = function ArrowFilletLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.502 7.659a.5.5 0 0 0 0 .682l5.399 5.784c.359.36.907.36 1.245.021a.914.914 0 0 0 0-1.292l-3-3A.5.5 0 0 1 5.5 9H14a1 1 0 0 0 0-2H5.5a.5.5 0 0 1-.354-.854l3-3a.914.914 0 0 0 0-1.292c-.37-.348-.919-.329-1.245.021L1.502 7.659zM6.707 10l2.147 2.146c.747.748.747 1.96 0 2.708a1.866 1.866 0 0 1-2.64 0l-.044-.047-5.4-5.784a1.5 1.5 0 0 1 0-2.046l5.4-5.784a1.866 1.866 0 0 1 2.637-.091l.047.044c.747.748.747 1.96 0 2.708L6.707 6H14a2 2 0 1 1 0 4H6.707z"
  }));
};

module.exports.ArrowFilletRightSolid = function ArrowFilletRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.146 3.854a1.914 1.914 0 0 1 0-2.708l.047-.044a1.866 1.866 0 0 1 2.637.09l5.399 5.785a1.5 1.5 0 0 1 0 2.046L9.83 14.807l-.044.047a1.866 1.866 0 0 1-2.64 0 1.914 1.914 0 0 1 0-2.708L9.293 10H2a2 2 0 1 1 0-4h7.293L7.146 3.854z"
  }));
};

module.exports.ArrowFilletRight = function ArrowFilletRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.146 3.854a1.914 1.914 0 0 1 0-2.708l.047-.044a1.866 1.866 0 0 1 2.637.09l5.399 5.785a1.5 1.5 0 0 1 0 2.046L9.83 14.807l-.044.047a1.866 1.866 0 0 1-2.64 0 1.914 1.914 0 0 1 0-2.708L9.293 10H2a2 2 0 1 1 0-4h7.293L7.146 3.854zm7.352 3.805L9.099 1.875a.866.866 0 0 0-1.224-.042c-.378.378-.378.956-.021 1.313l3 3A.5.5 0 0 1 10.5 7H2a1 1 0 1 0 0 2h8.5a.5.5 0 0 1 .354.854l-3 3a.914.914 0 0 0 0 1.292.866.866 0 0 0 1.225 0l5.419-5.805a.5.5 0 0 0 0-.682z"
  }));
};

module.exports.ArrowFilletUpSolid = function ArrowFilletUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6 6.707 3.854 8.854a1.914 1.914 0 0 1-2.708 0l-.044-.047a1.866 1.866 0 0 1 .09-2.637L6.978.77a1.5 1.5 0 0 1 2.046 0l5.784 5.399.047.044c.728.73.728 1.91 0 2.64a1.914 1.914 0 0 1-2.708 0L10 6.707V14a2 2 0 1 1-4 0V6.707z"
  }));
};

module.exports.ArrowFilletUp = function ArrowFilletUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6 6.707 3.854 8.854a1.914 1.914 0 0 1-2.708 0l-.044-.047a1.866 1.866 0 0 1 .09-2.637L6.978.77a1.5 1.5 0 0 1 2.046 0l5.784 5.399.047.044c.728.73.728 1.91 0 2.64a1.914 1.914 0 0 1-2.708 0L10 6.707V14a2 2 0 1 1-4 0V6.707zm1.659-5.205L1.875 6.901a.866.866 0 0 0-.042 1.224c.378.378.956.378 1.313.021l3-3A.5.5 0 0 1 7 5.5V14a1 1 0 0 0 2 0V5.5a.5.5 0 0 1 .854-.354l3 3a.914.914 0 0 0 1.292 0 .866.866 0 0 0 0-1.225L8.341 1.502a.5.5 0 0 0-.682 0z"
  }));
};

module.exports.ArrowLeftSolid = function ArrowLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 11v3.5a.5.5 0 0 1-.84.366l-7-6.5a.5.5 0 0 1 0-.732l7-6.5A.5.5 0 0 1 8 1.5V5h7.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H8z"
  }));
};

module.exports.ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.235 8 7 13.353V10.5a.5.5 0 0 1 .5-.5H15V6H7.5a.5.5 0 0 1-.5-.5V2.647L1.235 8zM8 11v3.5a.5.5 0 0 1-.84.366l-7-6.5a.5.5 0 0 1 0-.732l7-6.5A.5.5 0 0 1 8 1.5V5h7.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H8z"
  }));
};

module.exports.ArrowLongDownSolid = function ArrowLongDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9 12h1.501a.5.5 0 0 1 .384.82l-2.5 3a.5.5 0 0 1-.768 0l-2.5-3A.5.5 0 0 1 5.5 12H7V1a1 1 0 1 1 2 0v11z"
  }));
};

module.exports.ArrowLongDown = function ArrowLongDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7 13V.464C7 .208 7.224 0 7.5 0s.5.208.5.464V13h1.5a.5.5 0 0 1 .354.854l-2 2a.5.5 0 0 1-.708 0l-2-2A.5.5 0 0 1 5.5 13H7z"
  }));
};

module.exports.ArrowLongLeftSolid = function ArrowLongLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4 7.001h11a1 1 0 1 1 0 2H4v1.498a.5.5 0 0 1-.82.384l-3-2.499a.5.5 0 0 1 0-.768l3-2.5a.5.5 0 0 1 .82.385V7z"
  }));
};

module.exports.ArrowLongLeft = function ArrowLongLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3 7h12.5a.5.5 0 1 1 0 1H3v1.5a.5.5 0 0 1-.854.354l-2-2a.5.5 0 0 1 0-.708l2-2A.5.5 0 0 1 3 5.5V7z"
  }));
};

module.exports.ArrowLongRightSolid = function ArrowLongRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12 7.002V5.5a.5.5 0 0 1 .82-.384l3 2.5a.5.5 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 12 10.5V9H1a1 1 0 1 1 0-2h11z"
  }));
};

module.exports.ArrowLongRight = function ArrowLongRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.5 8H.5a.5.5 0 0 1 0-1h12V5.5a.5.5 0 0 1 .812-.39l2.5 2a.5.5 0 0 1 0 .78l-2.5 2a.5.5 0 0 1-.812-.39V8z"
  }));
};

module.exports.ArrowLongUpSolid = function ArrowLongUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9 4v11a1 1 0 0 1-2 0V4H5.501a.5.5 0 0 1-.384-.82l2.5-3a.5.5 0 0 1 .768 0l2.5 3a.5.5 0 0 1-.384.82H9z"
  }));
};

module.exports.ArrowLongUp = function ArrowLongUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 3v12.536c0 .256-.224.464-.5.464s-.5-.208-.5-.464V3H5.5a.5.5 0 0 1-.354-.854l2-2a.5.5 0 0 1 .708 0l2 2A.5.5 0 0 1 9.5 3H8z"
  }));
};

module.exports.ArrowRightSolid = function ArrowRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 5V1.5a.5.5 0 0 1 .84-.366l7 6.5a.5.5 0 0 1 0 .732l-7 6.5A.5.5 0 0 1 8 14.5V11H.5a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 .5 5H8z"
  }));
};

module.exports.ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 5V1.5a.5.5 0 0 1 .84-.366l7 6.5a.5.5 0 0 1 0 .732l-7 6.5A.5.5 0 0 1 8 14.5V11H.5a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 .5 5H8zm6.765 3L9 2.647V5.5a.5.5 0 0 1-.5.5H1v4h7.5a.5.5 0 0 1 .5.5v2.853L14.765 8z"
  }));
};

module.exports.ArrowSlimDownSolid = function ArrowSlimDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7 12.586V1a1 1 0 1 1 2 0v11.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L7 12.586z"
  }));
};

module.exports.ArrowSlimDown = function ArrowSlimDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 14.293 5.146-5.147a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 1 1 .708-.708L7 14.293V.469C7 .209 7.224 0 7.5 0s.5.21.5.469v13.824z"
  }));
};

module.exports.ArrowSlimLeftSolid = function ArrowSlimLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.414 7H15a1 1 0 0 1 0 2H3.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L3.414 7z"
  }));
};

module.exports.ArrowSlimLeft = function ArrowSlimLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.707 7h13.824c.26 0 .469.224.469.5s-.21.5-.469.5H1.707l5.147 5.146a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 1 1 .708.708L1.707 7z"
  }));
};

module.exports.ArrowSlimRightSolid = function ArrowSlimRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.586 9H1a1 1 0 1 1 0-2h11.586L8.293 2.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414L12.586 9z"
  }));
};

module.exports.ArrowSlimRight = function ArrowSlimRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14.293 8H.5a.5.5 0 0 1 0-1h13.793L9.146 1.854a.5.5 0 1 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L14.293 8z"
  }));
};

module.exports.ArrowSlimUpSolid = function ArrowSlimUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7 3.414 2.707 7.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L9 3.414V15a1 1 0 0 1-2 0V3.414z"
  }));
};

module.exports.ArrowSlimUp = function ArrowSlimUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 1.707v13.824c0 .26-.224.469-.5.469s-.5-.21-.5-.469V1.707L1.854 6.854a.5.5 0 1 1-.708-.708l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 1.707z"
  }));
};

module.exports.ArrowUpSolid = function ArrowUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11 8v7.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V8H1.5a.5.5 0 0 1-.366-.84l6.5-7a.5.5 0 0 1 .732 0l6.5 7A.5.5 0 0 1 14.5 8H11z"
  }));
};

module.exports.ArrowUp = function ArrowUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11 8v7.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V8H1.5a.5.5 0 0 1-.366-.84l6.5-7a.5.5 0 0 1 .732 0l6.5 7A.5.5 0 0 1 14.5 8H11zm-5 7h4V7.5a.5.5 0 0 1 .5-.5h2.853L8 1.235 2.647 7H5.5a.5.5 0 0 1 .5.5V15z"
  }));
};

module.exports.ArrowsHSolid = function ArrowsHSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 7V5.5a.5.5 0 0 1 .82-.384l3 2.5a.5.5 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 12 10.5V9H4v1.5a.5.5 0 0 1-.82.384l-3-2.5a.5.5 0 0 1 0-.768l3-2.5A.5.5 0 0 1 4 5.5V7h8z"
  }));
};

module.exports.ArrowsH = function ArrowsH(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.146 5.853 14.293 8H1.707l2.147-2.147a.5.5 0 1 0-.708-.706L.147 8.146a.5.5 0 0 0 0 .708l2.999 2.999a.5.5 0 1 0 .708-.706L1.707 9h12.586l-2.147 2.147a.5.5 0 1 0 .708.706l3-2.999a.502.502 0 0 0 0-.708l-3-2.999a.5.5 0 1 0-.708.706z"
  }));
};

module.exports.ArrowsVSolid = function ArrowsVSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 12h1.5a.5.5 0 0 1 .384.82l-2.5 3a.5.5 0 0 1-.768 0l-2.5-3A.5.5 0 0 1 5.5 12H7V4H5.5a.5.5 0 0 1-.384-.82l2.5-3a.5.5 0 0 1 .768 0l2.5 3A.5.5 0 0 1 10.5 4H9v8z"
  }));
};

module.exports.ArrowsV = function ArrowsV(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 14.293 2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7 14.293V1.707L4.854 3.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 1.707v12.586z"
  }));
};

module.exports.BehanceSquare = function BehanceSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M13 0a2.89 2.89 0 0 1 2.12.88A2.89 2.89 0 0 1 16 3v10a2.89 2.89 0 0 1-.88 2.12A2.89 2.89 0 0 1 13 16H3a2.89 2.89 0 0 1-2.12-.88A2.89 2.89 0 0 1 0 13V3C0 2.174.293 1.467.88.88A2.89 2.89 0 0 1 3 0h10zM5.198 3.823H1.333v8.198h3.98c.812 0 1.496-.2 2.052-.6.555-.398.833-.99.833-1.775 0-1.097-.497-1.792-1.49-2.084.743-.36 1.115-.93 1.115-1.708 0-.396-.068-.73-.203-1.005a1.437 1.437 0 0 0-.589-.63 2.77 2.77 0 0 0-.823-.308 5.135 5.135 0 0 0-1.01-.088zm-.23 3.312H3.136V5.22h1.698c.827 0 1.24.312 1.24.937 0 .653-.368.98-1.104.98zm.095 3.49H3.135v-2.26h1.97c.86 0 1.29.392 1.29 1.177 0 .722-.444 1.083-1.332 1.083zm6.77.333c-.472 0-.833-.132-1.083-.396-.25-.263-.375-.635-.375-1.114h4.281c.007-.07.01-.174.01-.313 0-.916-.258-1.682-.775-2.296-.518-.615-1.224-.922-2.12-.922-.89 0-1.618.298-2.188.895-.57.598-.854 1.348-.854 2.25 0 .938.274 1.691.823 2.26.549.57 1.288.855 2.219.855 1.423 0 2.35-.663 2.781-1.99h-1.437c-.077.237-.242.424-.495.563a1.616 1.616 0 0 1-.787.208zm-.104-3.812c.785 0 1.215.423 1.292 1.27h-2.646c.028-.388.163-.697.406-.926.243-.23.56-.344.948-.344zm-1.687-1.969h3.323v-.802h-3.323v.802z"
  }));
};

module.exports.Behance = function Behance(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M10.224 4.669h4.237V3.455h-4.237v1.214zm1.004 2.648c-.27.275-.44.647-.51 1.117h3.295c-.035-.501-.206-.88-.509-1.14-.306-.26-.684-.389-1.135-.389-.49 0-.871.138-1.141.412zm2.86-1.63c.51.225.93.582 1.262 1.068.302.429.496.926.584 1.491.052.33.073.81.064 1.432h-5.327c.032.723.284 1.231.766 1.522.291.18.642.271 1.054.271.434 0 .788-.11 1.06-.33.15-.12.282-.285.394-.496h1.953c-.052.426-.29.862-.709 1.303-.655.701-1.572 1.052-2.75 1.052-.974 0-1.833-.295-2.575-.887-.746-.591-1.117-1.555-1.117-2.887 0-1.25.336-2.21 1.007-2.877.672-.665 1.542-1 2.614-1 .637 0 1.21.113 1.72.339zM1.97 8.46v2.601h2.4c.43 0 .764-.057 1.002-.171.434-.214.65-.619.65-1.218 0-.509-.208-.857-.629-1.047-.235-.106-.565-.161-.989-.165H1.971zm0-3.766v2.152h2.404c.428 0 .777-.08 1.046-.242.268-.162.402-.448.402-.856 0-.456-.177-.755-.53-.902-.307-.101-.697-.152-1.17-.152H1.971zm5.37-.655c.302.415.453.91.453 1.49 0 .594-.151 1.074-.457 1.436-.171.202-.423.388-.755.555.505.182.885.468 1.143.861.256.392.385.869.385 1.43 0 .577-.147 1.096-.441 1.555a2.71 2.71 0 0 1-1.817 1.257 6.96 6.96 0 0 1-1.397.131H0V3h4.778c1.206.018 2.06.364 2.563 1.04z"
  }));
};

module.exports.Bilibili = function Bilibili(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "#00A1D6"
  }, React.createElement("path", {
    d: "M19.131 4.942h-2.257l1.922-2.562a.862.862 0 1 0-1.38-1.035l-2.695 3.597H9.15L6.454 1.345a.862.862 0 1 0-1.38 1.035l1.922 2.562H4.764A4.77 4.77 0 0 0 0 9.706v7.962a4.77 4.77 0 0 0 4.764 4.764h14.367a4.77 4.77 0 0 0 4.764-4.764V9.706a4.77 4.77 0 0 0-4.764-4.764zm3.04 12.726a3.04 3.04 0 0 1-3.04 3.04H4.764a3.04 3.04 0 0 1-3.04-3.04V9.706a3.04 3.04 0 0 1 3.04-3.04h14.367a3.04 3.04 0 0 1 3.04 3.04v7.962z"
  }), React.createElement("path", {
    d: "M7.513 10.238a1.237 1.237 0 0 0-1.231 1.232v1.97a1.232 1.232 0 1 0 2.463 0v-1.97a1.237 1.237 0 0 0-1.232-1.232zm8.869 0a1.237 1.237 0 0 0-1.232 1.232v1.97a1.232 1.232 0 0 0 2.464 0v-1.97a1.237 1.237 0 0 0-1.232-1.232z"
  })));
};

module.exports.BinocularsSolid = function BinocularsSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM1 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm5.984.157c.221-.455.559-.687.981-.658.49-.029.83.203 1.051.658A3.49 3.49 0 0 0 12.5 14a3.5 3.5 0 0 0 2.957-5.373l-2.651-5.044a2.092 2.092 0 0 0-3.343-.439 2.079 2.079 0 0 0-.576 1.531l.001.074c-.278-.148-.576-.249-.886-.249-.31 0-.605.1-.88.246l.002-.082a2.083 2.083 0 0 0-3.926-1.052L.449 8.799A3.575 3.575 0 0 0 0 10.5 3.5 3.5 0 0 0 3.5 14c1.879 0 3.4-1.484 3.484-3.343z"
  }));
};

module.exports.Binoculars = function Binoculars(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.082 4.079a1.086 1.086 0 0 1 1.742-.244c.205.214.313.502.3.797l-.073 3.486c-.028-.029-.048-.064-.076-.092A3.503 3.503 0 0 0 3.5 7c-.373 0-.726.075-1.063.183l1.645-3.104zM8.914 6.08l.061 3.148a1.864 1.864 0 0 0-1.01-.226 1.708 1.708 0 0 0-.938.218l.067-3.146c.232-.341.582-.574.908-.574.327 0 .68.235.912.58zm2.054-2.58c.399-.002.765.212.958.558l1.632 3.105a3.491 3.491 0 0 0-3.605.937l-.067-3.456A1.089 1.089 0 0 1 10.968 3.5zM12.5 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM1 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm5.984.157c.221-.455.559-.687.981-.658.49-.029.83.203 1.051.658A3.49 3.49 0 0 0 12.5 14a3.5 3.5 0 0 0 2.957-5.373l-2.651-5.044a2.092 2.092 0 0 0-3.343-.439 2.079 2.079 0 0 0-.576 1.531l.001.074c-.278-.148-.576-.249-.886-.249-.31 0-.605.1-.88.246l.002-.082a2.083 2.083 0 0 0-3.926-1.052L.449 8.799A3.575 3.575 0 0 0 0 10.5 3.5 3.5 0 0 0 3.5 14c1.879 0 3.4-1.484 3.484-3.343z"
  }));
};

module.exports.BookSolid = function BookSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M.777 14.916A.5.5 0 0 1 0 14.5v-13c0-.167.083-.324.223-.416C1.307.361 2.57 0 4 0c1.312 0 2.478.32 3.5.928C8.522.32 9.688 0 11 0c1.43 0 2.693.361 3.777 1.084.14.092.223.25.223.416v13a.5.5 0 0 1-.777.416C13.307 14.306 12.237 14 11 14c-1.237 0-2.307.305-3.223.916-.007.005-.015.003-.022.007-.047.028-.099.037-.152.05-.035.007-.068.024-.103.024-.035 0-.068-.017-.103-.025-.053-.012-.105-.02-.152-.049-.007-.004-.015-.002-.022-.007C6.307 14.306 5.237 14 4 14c-1.237 0-2.307.305-3.223.916zM6 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zM2.5 8h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zm0-3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zm7 3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zm0 3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zm0-6h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1z"
  }));
};

module.exports.Book = function Book(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5M2.5 8h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1M1 1.775C1.865 1.258 2.862 1 4 1s2.135.258 3 .775v11.867C6.103 13.213 5.101 13 4 13s-2.103.213-3 .642V1.775zm13 0v11.867c-.897-.429-1.899-.642-3-.642s-2.103.213-3 .642V1.775C8.865 1.258 9.862 1 11 1s2.135.258 3 .775zM.777 14.916C1.693 14.306 2.763 14 4 14c1.237 0 2.307.305 3.223.916.007.005.015.003.022.007.047.028.099.037.152.05.035.007.068.024.103.024.035 0 .068-.017.103-.025.053-.012.105-.02.152-.049.007-.004.015-.002.022-.007C8.693 14.306 9.763 14 11 14c1.237 0 2.307.305 3.223.916A.5.5 0 0 0 15 14.5v-13a.497.497 0 0 0-.223-.416C13.693.361 12.43 0 11 0 9.688 0 8.522.32 7.5.928 6.478.32 5.312 0 4 0 2.57 0 1.307.361.223 1.084A.497.497 0 0 0 0 1.5v13a.5.5 0 0 0 .777.416zM2.5 5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m7 3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m0 3h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m0-6h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1"
  }));
};

module.exports.BookmarkSolid = function BookmarkSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 0a2 2 0 0 0-2 2v11.5A2.5 2.5 0 0 0 3.5 16h7a2.5 2.5 0 0 0 2.458-2.042A2.5 2.5 0 0 0 15 11.5v-9A2.5 2.5 0 0 0 12.5 0H3zm0 1h9.5A1.5 1.5 0 0 1 14 2.5v9c0 .654-.417 1.208-1 1.414V4.5A2.5 2.5 0 0 0 10.5 2H2a1 1 0 0 1 1-1zm0 7.5V3h5v5.5a.5.5 0 0 1-.8.4L5.5 7.625 3.8 8.9a.5.5 0 0 1-.8-.4z"
  }));
};

module.exports.Bookmark = function Bookmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 13.5V3h1v5.5a.5.5 0 0 0 .8.4l1.7-1.275L7.2 8.9a.5.5 0 0 0 .8-.4V3h2.5A1.5 1.5 0 0 1 12 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 13.5zM4 3h3v4.5l-1.2-.9a.501.501 0 0 0-.6 0L4 7.5V3zM3 1h9.5A1.5 1.5 0 0 1 14 2.5v9a1.5 1.5 0 0 1-1 1.415V4.5A2.5 2.5 0 0 0 10.5 2H2a1 1 0 0 1 1-1zm7.5 15a2.5 2.5 0 0 0 2.458-2.042A2.5 2.5 0 0 0 15 11.5v-9A2.5 2.5 0 0 0 12.5 0H3a2 2 0 0 0-2 2v11.5A2.5 2.5 0 0 0 3.5 16h7z"
  }));
};

module.exports.BriefcaseSolid = function BriefcaseSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 1a.503.503 0 0 0-.448.276L4.191 3H.5a.5.5 0 0 0-.5.5v3.307l.637.212C2.925 7.673 5.379 8 8 8c2.622 0 5.075-.327 7.342-.974l.59-.196A.1.1 0 0 0 16 6.735V3.5a.5.5 0 0 0-.5-.5h-3.691l-.862-1.724A.499.499 0 0 0 10.5 1h-5zm.309 1h4.382l.5 1H5.309l.5-1zM6 6.5c0-.277.223-.5.5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5zm9.637 1.481C13.258 8.661 10.712 9 8 9 5.288 9 2.742 8.661.342 7.974L0 7.861V11.5A3.5 3.5 0 0 0 3.5 15h9a3.5 3.5 0 0 0 3.5-3.5V7.86l-.363.121z"
  }));
};

module.exports.Briefcase = function Briefcase(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 7h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1M1 11.5V8.137C3.197 8.703 5.526 9 8 9s4.803-.297 7-.863V11.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5zM4.5 4H15v3.108C12.815 7.696 10.485 8 8 8c-2.485 0-4.815-.304-7-.892V4h3.5zm1.309-2h4.382l.5 1H5.309l.5-1zM12.5 15a3.5 3.5 0 0 0 3.5-3.5v-8a.5.5 0 0 0-.5-.5h-3.691l-.862-1.724A.5.5 0 0 0 10.5 1h-5a.5.5 0 0 0-.447.276L4.191 3H.5a.5.5 0 0 0-.5.5v8A3.5 3.5 0 0 0 3.5 15h9z"
  }));
};

module.exports.BrowserTabSolid = function BrowserTabSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2.5 4H12v9.5A2.5 2.5 0 0 1 9.5 16H0V6.5A2.5 2.5 0 0 1 2.5 4zM15 1H6.5A1.5 1.5 0 0 0 5 2.5V3H4v-.5A2.5 2.5 0 0 1 6.5 0H16v9.5a2.5 2.5 0 0 1-2.5 2.5H13v-1h.5A1.5 1.5 0 0 0 15 9.5V1z"
  }));
};

module.exports.BrowserTab = function BrowserTab(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11 5H2.5A1.5 1.5 0 0 0 1 6.5V15h8.5a1.5 1.5 0 0 0 1.5-1.5V5zM2.5 4H12v9.5A2.5 2.5 0 0 1 9.5 16H0V6.5A2.5 2.5 0 0 1 2.5 4zM15 1H6.5A1.5 1.5 0 0 0 5 2.5V3H4v-.5A2.5 2.5 0 0 1 6.5 0H16v9.5a2.5 2.5 0 0 1-2.5 2.5H13v-1h.5A1.5 1.5 0 0 0 15 9.5V1z"
  }));
};

module.exports.BrowserWindowsSolid = function BrowserWindowsSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 5h11a1 1 0 0 1 1 1v9H2.5A1.5 1.5 0 0 1 1 13.5V5zm-1 8.5A2.5 2.5 0 0 0 2.5 16h11a.5.5 0 0 0 .5-.5V4a2 2 0 0 0-2-2H.5a.5.5 0 0 0-.5.5v11zM13 0H5.5C4 0 3.5.5 3 1h9.8A2.2 2.2 0 0 1 15 3.2V13c.5-.5 1-1 1-2.5V3a3 3 0 0 0-3-3zM2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0z"
  }));
};

module.exports.BrowserWindows = function BrowserWindows(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 7h12v8H2.5A1.5 1.5 0 0 1 1 13.5V7zm0-4h10.5A1.5 1.5 0 0 1 13 4.5V6H1V3zm-1-.5v11A2.5 2.5 0 0 0 2.5 16h11a.5.5 0 0 0 .5-.5v-11A2.5 2.5 0 0 0 11.5 2H.5a.5.5 0 0 0-.5.5zm16 8v-7A3.5 3.5 0 0 0 12.5 0h-7C4 0 3.5.5 3 1h9.5A2.5 2.5 0 0 1 15 3.5V13c.5-.5 1-1 1-2.5M2.5 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
  }));
};

module.exports.BrushSolid = function BrushSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m15.545 2.664-7.223 7.25a.497.497 0 0 1-.704 0l-1.495-1.5a.501.501 0 0 1 0-.707l7.223-7.25a1.55 1.55 0 0 1 2.199 0c.607.61.607 1.598 0 2.207zM.515 16a.516.516 0 0 1-.428-.802c.628-.945.942-2.05.942-3.327a3.09 3.09 0 0 1 3.085-3.097A3.09 3.09 0 0 1 7.2 11.871C7.199 14.639 4.875 16 .515 16z"
  }));
};

module.exports.Brush = function Brush(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#060101",
    fillRule: "evenodd",
    d: "m9.009 7.805-.814-.814 5.797-5.796a.575.575 0 1 1 .813.814L9.009 7.805zm-1.54-.088.814.814-1.595 1.596a3.108 3.108 0 0 0-.815-.814l1.596-1.596zm-3.265 4.574c-.325-.709-.998-1.115-1.967-1.245a2.064 2.064 0 0 1 3.958.825c0 .418-.076.794-.227 1.13-.998-.007-1.556-.258-1.764-.71zm-2.14-.26c.67.08 1.065.313 1.232.678.318.691.965 1.094 1.895 1.235-.782.584-2.03.92-3.78 1.003.416-.877.633-1.852.653-2.917zM13.264.468l-8.4 8.402a3.07 3.07 0 0 0-.734-.097 3.096 3.096 0 0 0-3.096 3.097c0 1.277-.316 2.382-.946 3.326A.516.516 0 0 0 .517 16c4.376 0 6.709-1.36 6.709-4.129 0-.255-.04-.498-.096-.734l8.4-8.402A1.602 1.602 0 1 0 13.266.47z"
  }));
};

module.exports.BuildingSolid = function BuildingSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1 15V3.5c0-.2.12-.38.303-.459l7-3A.5.5 0 0 1 9 .501v3.64l5.658 1.885a.5.5 0 0 1 .342.475V15h.5a.5.5 0 0 1 0 1H.5a.5.5 0 1 1 0-1H1zm2.5-9h3a.5.5 0 0 0 0-1h-3a.5.5 0 1 0 0 1zm0 3h3a.5.5 0 0 0 0-1h-3a.5.5 0 1 0 0 1zm0 3h3a.5.5 0 1 0 0-1h-3a.5.5 0 0 0 0 1zm6 0h3a.5.5 0 1 0 0-1h-3a.5.5 0 0 0 0 1zm0-3h3a.5.5 0 1 0 0-1h-3a.5.5 0 1 0 0 1z"
  }));
};

module.exports.Building = function Building(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m8.324.032-8 3A.5.5 0 0 0 0 3.5v10a.499.499 0 1 0 1 0V3.847l7-2.625V13.5a.499.499 0 1 0 1 0V5.163l6 1.715V13.5a.499.499 0 1 0 1 0v-7a.502.502 0 0 0-.363-.48L9 4.122V.5a.5.5 0 0 0-.676-.468M6.5 11h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m-6 5h15a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1m6-11h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m7 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m0 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-7-3h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1"
  }));
};

module.exports.CalendarSolid = function CalendarSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11 1H6V.5a.5.5 0 1 0-1 0V1H3.5A2.5 2.5 0 0 0 1 3.5v10A2.5 2.5 0 0 0 3.5 16h10a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 13.5 1H12V.5a.5.5 0 1 0-1 0V1zM2 13.5V5h13v8.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5zM7.5 7a.5.5 0 1 0 0 1H8v3.5a.499.499 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5h-1z"
  }));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#060101",
    fillRule: "evenodd",
    d: "M11 2v.5a.5.5 0 0 0 1 0V2h1.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5v-10A1.5 1.5 0 0 1 3.5 2H5v.5a.5.5 0 0 0 1 0V2h5zM5.5 0a.5.5 0 0 0-.5.5V1H3.5A2.5 2.5 0 0 0 1 3.5v10A2.5 2.5 0 0 0 3.5 16h10a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 13.5 1H12V.5a.5.5 0 0 0-1 0V1H6V.5a.5.5 0 0 0-.5-.5zm2 7H8v3.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1"
  }));
};

module.exports.CameraRetroSolid = function CameraRetroSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8.707 2H14.5A1.5 1.5 0 0 1 16 3.5v8a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 0 11.5v-8A1.5 1.5 0 0 1 1.5 2h.793l.853-.854A.5.5 0 0 1 3.5 1h4a.5.5 0 0 1 .354.146L8.707 2zM12 5.5v6a.5.5 0 1 0 1 0v-6a.5.5 0 1 0-1 0zM5.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
  }));
};

module.exports.CameraRetro = function CameraRetro(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12 5.5a.5.5 0 1 1 1 0v6a.5.5 0 1 1-1 0v-6zM3.707 2l-.853.854A.5.5 0 0 1 2.5 3h-1a.5.5 0 0 0-.5.5v8A2.5 2.5 0 0 0 3.5 14h9a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 1-.354-.146L7.293 2H3.707zm5 0H14.5A1.5 1.5 0 0 1 16 3.5v8a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 0 11.5v-8A1.5 1.5 0 0 1 1.5 2h.793l.853-.854A.5.5 0 0 1 3.5 1h4a.5.5 0 0 1 .354.146L8.707 2zM5.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
  }));
};

module.exports.CameraSolid = function CameraSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.5 15a3.5 3.5 0 0 0 3.5-3.5v-7A1.5 1.5 0 0 0 14.5 3h-2.691l-.862-1.724A.5.5 0 0 0 10.5 1h-5a.5.5 0 0 0-.447.276L4.191 3H1.5A1.5 1.5 0 0 0 0 4.5v7A3.5 3.5 0 0 0 3.5 15h9zM8 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
  }));
};

module.exports.Camera = function Camera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 11.5V8h1.5a.5.5 0 0 0 0-1H1V6h1.5a.5.5 0 0 0 0-1H1v-.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 0 .447-.276L5.809 2h4.382l.862 1.724A.5.5 0 0 0 11.5 4h3a.5.5 0 0 1 .5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5zM12.5 15a3.5 3.5 0 0 0 3.5-3.5v-7A1.5 1.5 0 0 0 14.5 3h-2.691l-.862-1.724A.5.5 0 0 0 10.5 1h-5a.5.5 0 0 0-.447.276L4.191 3H1.5A1.5 1.5 0 0 0 0 4.5v7A3.5 3.5 0 0 0 3.5 15h9zM8 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
  }));
};

module.exports.Car = function Car(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4 14.5a.5.5 0 0 1-1 0V14h1v.5zm-3-3v-2A1.5 1.5 0 0 1 2.5 8h11A1.5 1.5 0 0 1 15 9.5v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5zM2.076 7l.551-3.854A2.5 2.5 0 0 1 5.102 1h5.796a2.5 2.5 0 0 1 2.475 2.146L13.924 7H2.076zM12.5 15a.5.5 0 0 1-.5-.5V14h1v.5a.5.5 0 0 1-.5.5zm0 1a1.5 1.5 0 0 0 1.5-1.5v-.55a2.502 2.502 0 0 0 2-2.45v-2c0-.812-.393-1.526-.992-1.982l-.645-4.513A3.5 3.5 0 0 0 10.898 0H5.102a3.5 3.5 0 0 0-3.465 3.005L.992 7.518A2.486 2.486 0 0 0 0 9.5v2c0 1.209.859 2.218 2 2.45v.55a1.5 1.5 0 1 0 3 0V14h6v.5a1.5 1.5 0 0 0 1.5 1.5zM3 10.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 5 10.5m7.5-.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
  }));
};

module.exports.ChatGroupSolid = function ChatGroupSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 1A2.5 2.5 0 0 0 2 3.501v.5h5.5a3.5 3.5 0 0 1 3.5 3.5v2.063a1 1 0 0 0 .319.733l3.826 3.558a.501.501 0 0 0 .855-.354v-10A2.5 2.5 0 0 0 13.5 1h-9zm-2 4.001a2.5 2.5 0 0 0-2.5 2.5V14.5a.5.5 0 0 0 .777.417l2.749-1.832a.494.494 0 0 1 .277-.084H7.5a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-5z"
  }));
};

module.exports.ChatGroup = function ChatGroup(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 7.5A1.5 1.5 0 0 1 2.5 6h5A1.5 1.5 0 0 1 9 7.5v3A1.5 1.5 0 0 1 7.5 12H3.803c-.296 0-.586.088-.832.252L1 13.566V7.5zm2-4A1.5 1.5 0 0 1 4.5 2h9A1.5 1.5 0 0 1 15 3.5v8.793l-2.854-2.854a1.5 1.5 0 0 0-1.06-.44H10V7.5A2.5 2.5 0 0 0 7.5 5H3V3.5zM.777 14.916l2.748-1.832A.5.5 0 0 1 3.803 13H7.5a2.5 2.5 0 0 0 2.5-2.5V10h1.086c.132 0 .26.053.353.146l3.707 3.708A.5.5 0 0 0 16 13.5v-10A2.5 2.5 0 0 0 13.5 1h-9A2.5 2.5 0 0 0 2 3.5v1.55A2.502 2.502 0 0 0 0 7.5v7a.5.5 0 0 0 .777.416z"
  }));
};

module.exports.CheckCircleSolid = function CheckCircleSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 15.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm-.512-5.693L5.841 8.269A.5.5 0 1 0 5.16 9l1.993 1.861c.357.185.357.185.708-.012l3.994-3.996a.5.5 0 1 0-.708-.706l-3.658 3.66z"
  }));
};

module.exports.CheckCircle = function CheckCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm-.512-5.193 3.658-3.66a.5.5 0 0 1 .708.706L7.86 10.85c-.35.197-.35.197-.708.012L5.159 9a.5.5 0 0 1 .682-.73l1.647 1.537z"
  }));
};

module.exports.CheckSolid = function CheckSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.293 3.293a1 1 0 0 1 1.414 1.414L6.714 12.7c-.714.394-.714.394-1.428 0L1.793 9.207a1 1 0 0 1 1.414-1.414L6 10.586l7.293-7.293z"
  }));
};

module.exports.Check = function Check(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m6.5 11.793 7.646-7.647a.5.5 0 0 1 .708.708L6.86 12.846c-.361.2-.361.2-.722 0L2.146 8.854a.5.5 0 1 1 .708-.708L6.5 11.793z"
  }));
};

module.exports.ChevronCircleDownSolid = function ChevronCircleDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.175-10.879L8 7.842l-3.175-2.72A.5.5 0 0 0 4 5.5v3a.5.5 0 0 0 .175.38l3.5 3a.5.5 0 0 0 .65 0l3.5-3A.5.5 0 0 0 12 8.5v-3a.5.5 0 0 0-.825-.38z"
  }));
};

module.exports.ChevronCircleDown = function ChevronCircleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 7.841 3.175-2.72A.5.5 0 0 1 12 5.5v3a.5.5 0 0 1-.175.38l-3.5 3a.5.5 0 0 1-.65 0l-3.5-3A.5.5 0 0 1 4 8.5v-3a.5.5 0 0 1 .825-.38L8 7.841zm0 3 3-2.571V6.587L8.325 8.88a.5.5 0 0 1-.65 0L5 6.587V8.27l3 2.571zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.ChevronCircleLeftSolid = function ChevronCircleLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm2.88-4.825L8.159 8l2.72-3.175A.5.5 0 0 0 10.5 4h-3a.5.5 0 0 0-.38.175l-3 3.5a.5.5 0 0 0 0 .65l3 3.5A.5.5 0 0 0 7.5 12h3a.5.5 0 0 0 .38-.825z"
  }));
};

module.exports.ChevronCircleLeft = function ChevronCircleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m5.159 8 2.571 3h1.683L7.12 8.325a.5.5 0 0 1 0-.65L9.413 5H7.73L5.159 8zm5.72 3.175A.5.5 0 0 1 10.5 12h-3a.5.5 0 0 1-.38-.175l-3-3.5a.5.5 0 0 1 0-.65l3-3.5A.5.5 0 0 1 7.5 4h3a.5.5 0 0 1 .38.825L8.159 8l2.72 3.175zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.ChevronCircleRightSolid = function ChevronCircleRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-.159-8-2.72 3.175A.5.5 0 0 0 5.5 12h3a.5.5 0 0 0 .38-.175l3-3.5a.5.5 0 0 0 0-.65l-3-3.5A.5.5 0 0 0 8.5 4h-3a.5.5 0 0 0-.38.825L7.841 8z"
  }));
};

module.exports.ChevronCircleRight = function ChevronCircleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm-.159-7-2.72-3.175A.5.5 0 0 1 5.5 4h3a.5.5 0 0 1 .38.175l3 3.5a.5.5 0 0 1 0 .65l-3 3.5A.5.5 0 0 1 8.5 12h-3a.5.5 0 0 1-.38-.825L7.841 8zm.429-3H6.587L8.88 7.675a.5.5 0 0 1 0 .65L6.587 11H8.27l2.571-3L8.27 5z"
  }));
};

module.exports.ChevronCircleUpSolid = function ChevronCircleUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-3.175-5.12L8 8.159l3.175 2.72A.5.5 0 0 0 12 10.5v-3a.5.5 0 0 0-.175-.38l-3.5-3a.5.5 0 0 0-.65 0l-3.5 3A.5.5 0 0 0 4 7.5v3a.5.5 0 0 0 .825.38z"
  }));
};

module.exports.ChevronCircleUp = function ChevronCircleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm-3.175-4.12A.5.5 0 0 1 4 10.5v-3a.5.5 0 0 1 .175-.38l3.5-3a.5.5 0 0 1 .65 0l3.5 3A.5.5 0 0 1 12 7.5v3a.5.5 0 0 1-.825.38L8 8.159l-3.175 2.72zm2.85-3.76a.5.5 0 0 1 .65 0L11 9.413V7.73L8 5.159 5 7.73v1.683L7.675 7.12z"
  }));
};

module.exports.ChevronDownSolid = function ChevronDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 7.86.812 2.11A.5.5 0 0 0 0 2.5v5a.5.5 0 0 0 .188.391l7.5 6a.5.5 0 0 0 .624 0l7.5-6a.5.5 0 0 0 .188-.39v-5a.5.5 0 0 0-.812-.39L8 7.86z"
  }));
};

module.exports.ChevronDown = function ChevronDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 7.86 7.188-5.75A.5.5 0 0 1 16 2.5v5a.5.5 0 0 1-.188.39l-7.5 6a.5.5 0 0 1-.624 0l-7.5-6A.5.5 0 0 1 0 7.5v-5a.5.5 0 0 1 .812-.39L8 7.86zm-7-.6 7 5.6 7-5.6V3.54L8.312 8.89a.5.5 0 0 1-.624 0L1 3.54v3.72z"
  }));
};

module.exports.ChevronLeftSolid = function ChevronLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.89 15.188a.5.5 0 0 1-.39.812h-5a.5.5 0 0 1-.39-.188l-6-7.5a.5.5 0 0 1 0-.624l6-7.5A.5.5 0 0 1 8.5 0h5a.5.5 0 0 1 .39.812L8.14 8l5.75 7.188z"
  }));
};

module.exports.ChevronLeft = function ChevronLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m3.14 8 5.6 7h3.72L7.11 8.312a.5.5 0 0 1 0-.624L12.46 1H8.74l-5.6 7zm10.75 7.188a.5.5 0 0 1-.39.812h-5a.5.5 0 0 1-.39-.188l-6-7.5a.5.5 0 0 1 0-.624l6-7.5A.5.5 0 0 1 8.5 0h5a.5.5 0 0 1 .39.812L8.14 8l5.75 7.188z"
  }));
};

module.exports.ChevronRightSolid = function ChevronRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.86 8 2.11.812A.5.5 0 0 1 2.5 0h5a.5.5 0 0 1 .39.188l6 7.5a.5.5 0 0 1 0 .624l-6 7.5A.5.5 0 0 1 7.5 16h-5a.5.5 0 0 1-.39-.812L7.86 8z"
  }));
};

module.exports.ChevronRight = function ChevronRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.86 8 2.11.812A.5.5 0 0 1 2.5 0h5a.5.5 0 0 1 .39.188l6 7.5a.5.5 0 0 1 0 .624l-6 7.5A.5.5 0 0 1 7.5 16h-5a.5.5 0 0 1-.39-.812L7.86 8zm-.6-7H3.54l5.35 6.688a.5.5 0 0 1 0 .624L3.54 15h3.72l5.6-7-5.6-7z"
  }));
};

module.exports.ChevronUpSolid = function ChevronUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 8.14.812 13.89A.5.5 0 0 1 0 13.5v-5a.5.5 0 0 1 .188-.39l7.5-6a.5.5 0 0 1 .624 0l7.5 6A.5.5 0 0 1 16 8.5v5a.5.5 0 0 1-.812.39L8 8.14z"
  }));
};

module.exports.ChevronUp = function ChevronUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 8.14.812 13.89A.5.5 0 0 1 0 13.5v-5a.5.5 0 0 1 .188-.39l7.5-6a.5.5 0 0 1 .624 0l7.5 6A.5.5 0 0 1 16 8.5v5a.5.5 0 0 1-.812.39L8 8.14zm-7 4.32 6.688-5.35a.5.5 0 0 1 .624 0L15 12.46V8.74l-7-5.6-7 5.6v3.72z"
  }));
};

module.exports.ClockSolid = function ClockSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-7V3.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1H8z"
  }));
};

module.exports.Clock = function Clock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 9h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0V9zm0 7A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.CloseCircleSolid = function CloseCircleSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 7.293 5.854 5.146a.5.5 0 1 0-.708.708L7.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L8 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L8.707 8l2.147-2.146a.5.5 0 0 0-.708-.708L8 7.293zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
  }));
};

module.exports.CloseCircle = function CloseCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0-7.707 2.146-2.147a.5.5 0 0 1 .708.708L8.707 8l2.147 2.146a.5.5 0 0 1-.708.708L8 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L7.293 8 5.146 5.854a.5.5 0 1 1 .708-.708L8 7.293z"
  }));
};

module.exports.CloseSolid = function CloseSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 6.586 3.293-3.293a1 1 0 0 1 1.414 1.414L9.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L6.586 8 3.293 4.707a1 1 0 0 1 1.414-1.414L8 6.586z"
  }));
};

module.exports.Close = function Close(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 7.293 4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293z"
  }));
};

module.exports.CodeSolid = function CodeSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m2.414 8 3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L2.414 8zm7.879-3.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 8l-3.293-3.293z"
  }));
};

module.exports.Code = function Code(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.12 4.825a.5.5 0 1 1 .76-.65l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 0 1-.76-.65L14.841 8l-2.72-3.175zm-8.24 6.35a.5.5 0 0 1-.76.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 1 1 .76.65L1.159 8l2.72 3.175zm6.165-8.882a.5.5 0 1 1 .91.414l-5 11a.5.5 0 1 1-.91-.414l5-11z"
  }));
};

module.exports.CompassSolid = function CompassSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m11.427 4.196-4.925 1.68a1 1 0 0 0-.624.627l-1.65 4.893a.3.3 0 0 0 .377.38l4.918-1.619a1 1 0 0 0 .636-.633l1.65-4.95a.3.3 0 0 0-.382-.378zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

module.exports.Compass = function Compass(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0-1a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.632 11.982a.5.5 0 0 1-.614-.614l1.5-5.5a.5.5 0 0 1 .35-.35l5.5-1.5a.5.5 0 0 1 .614.614l-1.5 5.5a.5.5 0 0 1-.35.35l-5.5 1.5zm.58-1.195 4.38-1.194 1.195-4.38-4.38 1.194-1.194 4.38zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

module.exports.CropSolid = function CropSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5.75V2.5H.75a.75.75 0 0 0 0 1.5H2.5v8.75c0 .414.336.75.75.75H12v1.75a.75.75 0 0 0 1.5 0V13.5h1.75a.75.75 0 0 0 0-1.5H4V.75a.75.75 0 0 0-1.5 0zM5.75 2.5a.75.75 0 1 0 0 1.5h4.5c.966 0 1.75.784 1.75 1.75v4.5a.75.75 0 0 0 1.5 0v-4.5a3.25 3.25 0 0 0-3.25-3.25h-4.5z"
  }));
};

module.exports.Crop = function Crop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12 13H3.5a.5.5 0 0 1-.5-.5V4H.5a.5.5 0 0 1 0-1H3V.5a.5.5 0 0 1 1 0V12h11.5a.5.5 0 1 1 0 1H13v2.5a.5.5 0 1 1-1 0V13zM5.5 4a.5.5 0 0 1 0-1h5A2.5 2.5 0 0 1 13 5.5v5a.5.5 0 1 1-1 0v-5A1.5 1.5 0 0 0 10.5 4h-5z"
  }));
};

module.exports.DiamondSolid = function DiamondSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.814 4.685c.133.242.187.51.177.775.001.014.01.026.004.061-.002.028-.014.053-.017.08-.007.032-.007.066-.02.095a1.47 1.47 0 0 1-.27.627l-7.293 9.482c-.2.26-.59.26-.79 0L.31 6.323a1.48 1.48 0 0 1-.268-.627C.03 5.667.03 5.633.021 5.601c-.003-.027-.014-.052-.016-.08 0-.008-.005-.013.004-.06-.01-.266.044-.534.176-.776l1.598-2.908A1.5 1.5 0 0 1 3.096 1h9.807a1.5 1.5 0 0 1 1.314.777l1.597 2.908zM3.5 6h9a.5.5 0 1 0 0-1h-9a.5.5 0 0 0 0 1z"
  }));
};

module.exports.Diamond = function Diamond(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.66 2.26A.497.497 0 0 1 3.095 2h2.39L4.172 5h-3.02l1.506-2.74zM14.846 5h-3l-1.125-3h2.181c.183 0 .351.1.438.26L14.847 5zm-2.999 1h2.83l-5.429 7.057L11.85 6zM6.75 13.057 1.323 6h2.828l2.6 7.057zM10.783 6 8 13.553 5.217 6h5.566zm-1.13-4 1.125 3H5.264l1.313-3h3.076zm6.161 2.685-1.597-2.908A1.5 1.5 0 0 0 12.903 1H3.096a1.5 1.5 0 0 0-1.313.777L.185 4.685c-.132.242-.186.51-.176.775-.009.048-.005.053-.004.061.002.028.013.053.016.08.008.032.008.066.022.095.044.223.124.44.268.627l7.293 9.482c.201.26.591.26.791 0l7.293-9.482a1.47 1.47 0 0 0 .27-.627c.013-.029.013-.063.02-.095.003-.027.015-.052.017-.08.005-.035-.003-.047-.004-.06a1.484 1.484 0 0 0-.177-.776z"
  }));
};

module.exports.DrawerLineSolid = function DrawerLineSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 4a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h7zM2.9 1h10.2l1.777 8H11.5a.5.5 0 0 0-.5.5V11H5V9.5a.5.5 0 0 0-.5-.5H1.123l1.778-8zm9.905 15a2.498 2.498 0 0 0 2.465-2.089l.719-4.312a.482.482 0 0 0-.002-.207l-2-9A.5.5 0 0 0 13.5 0h-11a.5.5 0 0 0-.488.392l-2 9a.482.482 0 0 0-.002.207l.72 4.312A2.5 2.5 0 0 0 3.193 16h9.612zM12.5 6h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"
  }));
};

module.exports.DrawerLine = function DrawerLine(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 4h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1M4 10v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V10h2.91l-.625 3.747A1.5 1.5 0 0 1 12.806 15H3.194a1.5 1.5 0 0 1-1.479-1.253L1.091 10H4zM2.901 1H13.1l1.777 8H11.5a.5.5 0 0 0-.5.5V11H5V9.5a.5.5 0 0 0-.5-.5H1.123l1.778-8zm.293 15h9.612a2.498 2.498 0 0 0 2.465-2.09l.719-4.31a.482.482 0 0 0-.002-.207l-2-9A.5.5 0 0 0 13.5 0h-11a.5.5 0 0 0-.488.392l-2 9a.482.482 0 0 0-.002.207l.719 4.312A2.5 2.5 0 0 0 3.194 16zM13 6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5"
  }));
};

module.exports.DrawerSolid = function DrawerSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 8h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1M.5 5h15a.5.5 0 0 1 .498.55l-.73 7.299a3.5 3.5 0 0 1-3.482 3.15H4.215a3.5 3.5 0 0 1-3.482-3.15l-.73-7.3A.5.5 0 0 1 .5 5zm1-4h3c.13 0 .26.05.35.15L6.71 3h7.79a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5z"
  }));
};

module.exports.Drawer = function Drawer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 8h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1m2.773 4.749a2.499 2.499 0 0 1-2.487 2.25H4.215a2.5 2.5 0 0 1-2.487-2.25l-.675-6.75h13.895l-.675 6.75zM2 1.999h2.292l1.853 1.854A.5.5 0 0 0 6.5 4H14v1H2V2zm12.5 1H6.708L4.853 1.147A.503.503 0 0 0 4.5 1h-3a.5.5 0 0 0-.5.5V5H.5a.5.5 0 0 0-.497.55l.73 7.299a3.5 3.5 0 0 0 3.482 3.15h7.57a3.5 3.5 0 0 0 3.482-3.15l.73-7.3a.5.5 0 0 0-.496-.55H15V3.5a.5.5 0 0 0-.5-.5z"
  }));
};

module.exports.Dribbble = function Dribbble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M10.667 14.292c-.292-1.674-.778-3.403-1.459-5.188h-.02l-.021.01-.448.172c-.188.073-.538.244-1.052.51-.514.268-.99.553-1.427.855a9.04 9.04 0 0 0-1.365 1.193 5.581 5.581 0 0 0-1.073 1.541l-.156-.114C4.924 14.312 6.375 14.833 8 14.833c.917 0 1.806-.18 2.667-.541zM8.74 7.969c-.146-.34-.33-.726-.553-1.157-2.16.646-4.496.97-7.01.97-.007.048-.01.12-.01.218a6.7 6.7 0 0 0 .458 2.464 6.84 6.84 0 0 0 1.292 2.098 8.733 8.733 0 0 1 1.286-1.734 9.311 9.311 0 0 1 1.484-1.297c.48-.326.933-.607 1.36-.844a8.008 8.008 0 0 1 1.036-.5l.386-.135.135-.036a.822.822 0 0 0 .136-.047zM7.625 5.76a35.843 35.843 0 0 0-2.542-3.937A6.742 6.742 0 0 0 2.646 3.76a6.75 6.75 0 0 0-1.334 2.834c2.098 0 4.202-.278 6.313-.834zm7.125 3.323c-1.458-.416-2.878-.517-4.26-.302a29.345 29.345 0 0 1 1.333 4.886 6.826 6.826 0 0 0 1.927-1.974 6.737 6.737 0 0 0 1-2.61zM6.365 1.365c-.007 0-.014.003-.021.01.007-.007.014-.01.02-.01zm6.145 1.51C11.226 1.736 9.722 1.167 8 1.167a6.89 6.89 0 0 0-1.615.198 29.73 29.73 0 0 1 2.563 3.979c.48-.18.93-.39 1.354-.63.424-.24.759-.454 1.005-.641a6.83 6.83 0 0 0 .683-.594 4.52 4.52 0 0 0 .39-.422l.13-.182zm2.323 5.052c-.02-1.611-.538-3.035-1.552-4.27l-.01.01c-.063.083-.129.168-.198.255-.07.087-.22.241-.453.463-.233.223-.48.433-.74.63a10.6 10.6 0 0 1-1.041.678 10.81 10.81 0 0 1-1.37.672c.173.368.326.697.458.99.014.04.037.102.068.181.031.08.057.138.078.172.25-.034.509-.059.776-.073a14.782 14.782 0 0 1 1.484-.005 17.152 17.152 0 0 1 1.756.167l.38.062c.104.018.19.033.26.047l.104.021zM16 8c0 1.451-.358 2.79-1.073 4.016a7.964 7.964 0 0 1-2.911 2.911A7.826 7.826 0 0 1 8 16a7.826 7.826 0 0 1-4.016-1.073 7.964 7.964 0 0 1-2.911-2.911A7.826 7.826 0 0 1 0 8c0-1.451.358-2.79 1.073-4.016a7.964 7.964 0 0 1 2.911-2.911A7.826 7.826 0 0 1 8 0c1.451 0 2.79.358 4.016 1.073a7.964 7.964 0 0 1 2.911 2.911A7.826 7.826 0 0 1 16 8z"
  }));
};

module.exports.Dropbox = function Dropbox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M3.25 6.715 8 9.674l-3.288 2.765L0 9.344l3.25-2.63zm9.48 5.385v1.047L8.02 15.99V16l-.01-.01L8 16v-.01l-4.702-2.843V12.1l1.414.931L8 10.276v-.02l.01.01.01-.01v.02l3.297 2.755 1.414-.931zM4.713 1 8 3.765l-4.75 2.95L0 4.095 4.712 1zm8.038 5.715L16 9.345l-4.702 3.094L8 9.674l4.75-2.96zM11.298 1 16 4.095l-3.25 2.62L8 3.765 11.298 1z"
  }));
};

module.exports.EmailSolid = function EmailSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7A2.5 2.5 0 0 1 2.5 2zm10.76 3.061L8 7.931 2.74 5.06a.5.5 0 0 0-.48.878l5.5 3a.5.5 0 0 0 .48 0l5.5-3a.5.5 0 0 0-.48-.878z"
  }));
};

module.exports.Email = function Email(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.26 5.061a.5.5 0 0 1 .48.878l-5.5 3a.5.5 0 0 1-.48 0l-5.5-3a.5.5 0 0 1 .48-.878L8 7.931l5.26-2.87zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm0-1h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7A2.5 2.5 0 0 1 2.5 2z"
  }));
};

module.exports.ErrorSolid = function ErrorSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.285 1.975a2 2 0 0 1 3.43 0l6 9.996A2 2 0 0 1 14 15H2a2 2 0 0 1-1.715-3.03l6-9.995zM8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-.5-7.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0z"
  }));
};

module.exports.Error = function Error(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.286 1.975a2 2 0 0 1 3.43 0l6 9.996A2 2 0 0 1 14 15H2a2 2 0 0 1-1.715-3.03l6.001-9.995zm.858.515-6.001 9.995A1 1 0 0 0 2 14h12a1 1 0 0 0 .858-1.515l-6-9.995a1 1 0 0 0-1.714 0zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-.5-7.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4z"
  }));
};

module.exports.Evernote = function Evernote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M10.683 7.568a3.038 3.038 0 0 0-.6.037c.052-.44.23-.981.855-.959.693.025.79.7.793 1.156a2.779 2.779 0 0 0-1.048-.234m2.963-4.784c-.116-.639-.485-.953-.819-1.077-.359-.134-1.088-.272-2.004-.384-.738-.089-1.604-.082-2.127-.065C8.633.815 8.332.41 7.994.27c-.9-.373-2.29-.283-2.646-.18-.284.082-.598.25-.773.507-.117.172-.193.393-.193.7 0 .175.005.586.009.95l.009.697a.584.584 0 0 1-.575.591H2.367c-.311 0-.55.054-.73.139a1.04 1.04 0 0 0-.41.335c-.194.27-.228.602-.227.94 0 0 .003.278.068.814.054.415.49 3.315.906 4.196.16.343.268.486.584.637.705.311 2.314.657 3.069.756.753.099 1.225.307 1.507-.301 0-.001.056-.151.132-.371a6.19 6.19 0 0 0 .279-1.93c0-.05.07-.051.07 0 0 .346-.063 1.57.835 1.899.354.129 1.09.244 1.836.335.675.08 1.166.353 1.166 2.138 0 1.085-.222 1.234-1.38 1.234-.938 0-1.296.025-1.296-.742 0-.621.597-.556 1.038-.556.198 0 .054-.151.054-.534 0-.381.232-.601.013-.606-1.528-.044-2.426-.002-2.426 1.965 0 1.786.663 2.117 2.831 2.117 1.7 0 2.3-.057 3-2.3.14-.442.476-1.793.679-4.061.128-1.434-.121-5.763-.32-6.855m-11.347.315h1.46c.083 0 .15-.07.15-.155 0 0-.017-1.288-.017-1.646v-.004c0-.294.06-.55.164-.765l.05-.096c-.006 0-.01.003-.017.009L1.255 3.335a.034.034 0 0 0-.01.017l.15-.075a2.12 2.12 0 0 1 .903-.178"
  }));
};

module.exports.FacebookSquare = function FacebookSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M13 0a2.89 2.89 0 0 1 2.12.88A2.89 2.89 0 0 1 16 3v10a2.89 2.89 0 0 1-.88 2.12A2.89 2.89 0 0 1 13 16h-1.958V9.802h2.073l.312-2.417h-2.385V5.844c0-.39.081-.68.244-.875.164-.195.481-.292.954-.292l1.27-.01V2.51c-.437-.062-1.055-.093-1.854-.093-.944 0-1.7.277-2.265.833-.566.556-.85 1.34-.85 2.354v1.781H6.459v2.417h2.084V16H3a2.89 2.89 0 0 1-2.12-.88A2.89 2.89 0 0 1 0 13V3C0 2.174.293 1.467.88.88A2.89 2.89 0 0 1 3 0h10z"
  }));
};

module.exports.Facebook = function Facebook(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M12 .115v2.539h-1.454c-.53 0-.889.115-1.074.346-.185.23-.278.577-.278 1.038v1.818h2.713l-.36 2.846H9.193V16H6.361V8.702H4V5.856h2.361V3.76c0-1.193.321-2.117.963-2.774C7.966.329 8.821 0 9.89 0c.906 0 1.61.038 2.11.115z"
  }));
};

module.exports.FeatherPenSolid = function FeatherPenSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.147 6.854a.5.5 0 0 0 .707-.707l-1.83-1.83c.198-.23.406-.454.623-.671C8.079 1.214 11.374 0 15.5 0c.295 0 .5.207.498.5a.503.503 0 0 1-.148.362L.854 15.854a.5.5 0 0 1-.707-.708l1.86-1.861c.023-2.072.354-3.932.996-5.576l1.144 1.145a.5.5 0 0 0 .707-.707l-1.42-1.42c.283-.567.605-1.106.97-1.616l1.743 1.743zm9.638-4.532c-.342 2.333-.893 4.218-1.658 5.657a.501.501 0 0 1-.332.253c-.957.217-1.731.396-2.321.538l.879.875a.501.501 0 0 1 0 .709c-2.09 2.09-4.822 3.276-8.167 3.568l11.599-11.6z"
  }));
};

module.exports.FeatherPen = function FeatherPen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.348 7.308a96.34 96.34 0 0 0-2.977.709.5.5 0 0 0-.236.825c.066.069.44.445 1.15 1.15C9.347 11.76 6.84 12.74 3.76 12.949L14.823 1.884c-.308 2.239-.794 4.065-1.475 5.424M3.787 8.495l.36.359a.5.5 0 0 0 .707-.708s-.616-.585-.667-.643c.273-.601.578-1.14.946-1.67.006.006.007.015.014.02l1 1a.5.5 0 0 0 .707-.707S5.78 5.078 5.734 5.039c.204-.243.394-.46.62-.685 1.984-1.984 4.61-3.077 7.885-3.3L3.054 12.239c.093-1.361.336-2.61.733-3.744M15.5 0c-4.126 0-7.421 1.214-9.853 3.646-2.39 2.39-3.596 5.615-3.638 9.639l-1.862 1.86a.5.5 0 0 0 .707.708l1.862-1.861c4.023-.042 7.249-1.25 9.638-3.638a.501.501 0 0 0-.001-.71c-.355-.351-.648-.644-.88-.874.59-.142 1.365-.321 2.322-.538a.501.501 0 0 0 .332-.253c.95-1.788 1.57-4.264 1.87-7.432A.5.5 0 0 0 15.5 0"
  }));
};

module.exports.FileTextSolid = function FileTextSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.5 0h10a.5.5 0 0 1 .5.5v12a3.5 3.5 0 0 1-3.5 3.5h-10a.5.5 0 0 1-.5-.5v-12A3.5 3.5 0 0 1 4.5 0zm0 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1zm0 3h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zm0 3h7a.5.5 0 1 0 0-1h-7a.5.5 0 0 0 0 1zm0 3h7a.5.5 0 1 0 0-1h-7a.5.5 0 1 0 0 1z"
  }));
};

module.exports.FileText = function FileText(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14 1H4.5A2.5 2.5 0 0 0 2 3.5V15h9.5a2.5 2.5 0 0 0 2.5-2.5V1zM4.5 0h10a.5.5 0 0 1 .5.5v12a3.5 3.5 0 0 1-3.5 3.5h-10a.5.5 0 0 1-.5-.5v-12A3.5 3.5 0 0 1 4.5 0zm0 4a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zm0 3a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1h-7zm0 3a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7z"
  }));
};

module.exports.FlagSolid = function FlagSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 0a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0V9.204c1.248.358 2.496.21 4.847-.342l.267-.063c2.546-.594 3.807-.626 5.138.135A.5.5 0 0 0 14 8.5v-7a.5.5 0 0 0-.21-.407C12.148-.08 10.583-.08 7.87.643L7.4.768c-2.26.615-3.321.754-4.4.382V.5a.5.5 0 0 0-.5-.5"
  }));
};

module.exports.Flag = function Flag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.663 1.734c.227-.062.336-.092.466-.126 2.318-.618 3.61-.65 4.87.157v5.938c-1.356-.537-2.765-.426-5.112.122l-.27.063C5.253 8.444 4.14 8.561 3 8.16V2.206c1.203.331 2.405.143 4.663-.472M2.5 0a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0V9.204c1.248.358 2.496.21 4.847-.342l.267-.063c2.546-.594 3.807-.626 5.138.135A.5.5 0 0 0 14 8.5v-7a.5.5 0 0 0-.21-.407C12.148-.08 10.583-.08 7.87.643L7.4.768c-2.26.615-3.321.754-4.4.382V.5a.5.5 0 0 0-.5-.5"
  }));
};

module.exports.FoodSolid = function FoodSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M.5 15h15a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1M7 4a1 1 0 1 1 2 0v.072A7.679 7.679 0 0 0 8 4c-.34 0-.672.029-1 .072V4zm1-2a2 2 0 0 0-2 2v.273c-3.467.93-6 4.224-6 8.227a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5c0-4.003-2.534-7.296-6-8.227V4a2 2 0 0 0-2-2z"
  }));
};

module.exports.Food = function Food(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M.5 15h15a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1m14.485-3H1.015C1.25 8.04 4.268 5 8 5c3.73 0 6.75 3.04 6.985 7zM7 4a1 1 0 1 1 2 0v.072A7.679 7.679 0 0 0 8 4c-.34 0-.672.029-1 .072V4zm1-2a2 2 0 0 0-2 2v.273c-3.467.93-6 4.224-6 8.227a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5c0-4.003-2.534-7.296-6-8.227V4a2 2 0 0 0-2-2z"
  }));
};

module.exports.ForkKnifeSolid = function ForkKnifeSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.989 15.5c0 .276-.221.5-.495.5A.497.497 0 0 1 9 15.5V1.25C9 .56 9.553 0 10.236 0c.652 0 1.236.409 1.465 1.027l2.205 5.946c.062.169.094.347.094.527 0 .829-.664 1.5-1.483 1.5H9.989v6.5zM2.5 0a.5.5 0 0 1 .5.5V5h1V.5a.5.5 0 0 1 1 0V5h1V.5a.5.5 0 0 1 1 0v5a2.502 2.502 0 0 1-2 2.45v7.55a.5.5 0 0 1-1 0V7.95A2.502 2.502 0 0 1 2 5.5v-5a.5.5 0 0 1 .5-.5z"
  }));
};

module.exports.ForkKnife = function ForkKnife(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.989 15.5c0 .276-.222.5-.495.5A.497.497 0 0 1 9 15.5V1.25C9 .56 9.553 0 10.236 0c.652 0 1.236.41 1.465 1.027l2.205 5.946c.062.169.094.347.094.527 0 .828-.664 1.5-1.483 1.5H9.989v6.5zM12.517 8a.497.497 0 0 0 .463-.676l-2.205-5.946a.576.576 0 0 0-.54-.378.249.249 0 0 0-.246.25V8h2.528zM5 7.95v7.55a.5.5 0 1 1-1 0V7.95A2.5 2.5 0 0 1 2 5.5v-5a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 0 3 0v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2 2.45zM4 .5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5z"
  }));
};

module.exports.FountainPenSolid = function FountainPenSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 14a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2h9zM8 5.997a.133.133 0 0 1-.084.122 1.501 1.501 0 1 0 1.168 0A.133.133 0 0 1 9 5.997V.101c0-.097.125-.139.182-.06l4.683 7.111a.64.64 0 0 1 .087.576l-1.726 5.177a.14.14 0 0 1-.132.095H4.906a.14.14 0 0 1-.132-.095L3.049 7.727a.636.636 0 0 1 .086-.574L7.818.041C7.875-.038 8 .004 8 .101v5.896z"
  }));
};

module.exports.FountainPen = function FountainPen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.055 7.583 8 2.06v4.025a1.5 1.5 0 1 0 1 0V2.06l3.946 5.523L11.14 13H5.86L4.056 7.583zM12.5 15h-8a.5.5 0 0 1 0-1h8a.5.5 0 1 1 0 1zm-8 1h8a1.5 1.5 0 1 0 0-3h-.306l1.78-5.342a.502.502 0 0 0-.067-.449l-5-7a.5.5 0 0 0-.813 0l-5 7a.496.496 0 0 0-.068.45L4.806 13H4.5a1.5 1.5 0 1 0 0 3z"
  }));
};

module.exports.Github = function Github(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M8 0C3.582 0 0 3.672 0 8.203c0 3.624 2.292 6.698 5.471 7.783.4.075.546-.178.546-.395 0-.195-.006-.711-.01-1.395-2.226.495-2.695-1.1-2.695-1.1-.364-.947-.888-1.2-.888-1.2-.727-.509.054-.498.054-.498.803.057 1.225.845 1.225.845.715 1.253 1.873.891 2.329.681.072-.53.28-.891.508-1.096-1.777-.207-3.644-.91-3.644-4.054 0-.896.312-1.628.824-2.201-.083-.208-.358-1.042.077-2.171 0 0 .672-.22 2.2.84a7.502 7.502 0 0 1 2.004-.276 7.51 7.51 0 0 1 2.003.277c1.527-1.061 2.197-.841 2.197-.841.436 1.13.162 1.963.08 2.17.512.574.822 1.306.822 2.202 0 3.15-1.87 3.844-3.652 4.047.287.254.542.754.542 1.52 0 1.096-.01 1.98-.01 2.25 0 .219.144.474.55.394C13.71 14.898 16 11.825 16 8.203 16 3.673 12.418 0 8 0"
  }));
};

module.exports.GooglePlus = function GooglePlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M9.98 8.116c0 .946-.202 1.788-.605 2.527a4.315 4.315 0 0 1-1.722 1.733c-.746.416-1.6.624-2.563.624-.69 0-1.35-.132-1.979-.396a5.105 5.105 0 0 1-1.625-1.064A5.002 5.002 0 0 1 .403 9.944 4.83 4.83 0 0 1 0 8c0-.678.134-1.326.403-1.944.268-.619.63-1.15 1.083-1.596.454-.446.995-.8 1.625-1.064A5.072 5.072 0 0 1 5.091 3c1.323 0 2.46.437 3.409 1.31L7.118 5.613c-.542-.514-1.218-.771-2.028-.771-.57 0-1.096.14-1.58.423a3.138 3.138 0 0 0-1.149 1.15A3.093 3.093 0 0 0 1.938 8a3.155 3.155 0 0 0 3.153 3.158 3.41 3.41 0 0 0 1.058-.157 2.68 2.68 0 0 0 .795-.392 2.87 2.87 0 0 0 .546-.535c.155-.2.268-.39.34-.566.072-.178.121-.346.15-.505H5.09v-1.72h4.806c.055.287.083.565.083.833zM16 7.284v1.432h-1.451v1.426H13.09V8.716h-1.45V7.284h1.451V5.858h1.459v1.426H16z"
  }));
};

module.exports.GoogleSquare = function GoogleSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M9.552 8.094c0-.18-.02-.403-.062-.667H5.719v1.375h2.26a1.52 1.52 0 0 1-.172.52 2.75 2.75 0 0 1-.39.553 1.85 1.85 0 0 1-.693.464 2.62 2.62 0 0 1-1.005.182 2.382 2.382 0 0 1-1.76-.74A2.446 2.446 0 0 1 3.228 8c0-.694.243-1.288.73-1.781a2.382 2.382 0 0 1 1.76-.74c.639 0 1.17.205 1.593.615l1.084-1.052C7.646 4.347 6.753 4 5.719 4c-1.111 0-2.056.39-2.834 1.172C2.108 5.953 1.72 6.896 1.72 8c0 1.104.389 2.047 1.166 2.828C3.663 11.61 4.608 12 5.72 12c1.146 0 2.07-.365 2.776-1.094.705-.729 1.057-1.666 1.057-2.812zm3.594.479h1.135V7.427h-1.135V6.281H12v1.146h-1.146v1.146H12v1.146h1.146V8.573zM16 3v10a2.89 2.89 0 0 1-.88 2.12A2.89 2.89 0 0 1 13 16H3a2.89 2.89 0 0 1-2.12-.88A2.89 2.89 0 0 1 0 13V3C0 2.174.293 1.467.88.88A2.89 2.89 0 0 1 3 0h10a2.89 2.89 0 0 1 2.12.88A2.89 2.89 0 0 1 16 3z"
  }));
};

module.exports.HammerSolid = function HammerSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m.853 15.854 6.74-6.74 2.446 2.446a1.505 1.505 0 0 0 2.127 0l3.393-3.394a1.502 1.502 0 0 0 0-2.126L9.96.44a1.505 1.505 0 0 0-2.126 0L4.44 3.835a1.502 1.502 0 0 0 0 2.125l2.446 2.447-6.74 6.74a.5.5 0 0 0 .707.707z"
  }));
};

module.exports.Hammer = function Hammer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m5.15 4.543 3.393-3.394a.503.503 0 0 1 .71 0l.444.446-4.102 4.103-.446-.446a.5.5 0 0 1 0-.71zm9.7 2.914-3.393 3.394a.5.5 0 0 1-.709 0l-.446-.446 4.102-4.103.446.447a.5.5 0 0 1 0 .708zM6.302 6.405l4.102-4.103 3.293 3.293-4.102 4.103-3.293-3.293zM.146 15.854a.5.5 0 0 0 .707 0l6.74-6.74 2.446 2.446a1.505 1.505 0 0 0 2.127 0l3.393-3.394a1.502 1.502 0 0 0 0-2.126L9.96.44a1.505 1.505 0 0 0-2.126 0L4.44 3.835a1.502 1.502 0 0 0 0 2.125l2.446 2.447-6.74 6.74a.5.5 0 0 0 0 .707z"
  }));
};

module.exports.HangerSolid = function HangerSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.079 8.88a.75.75 0 0 1 .842 1.24l-4.307 2.923a.25.25 0 0 0 .14.457h12.498a.25.25 0 0 0 .136-.46L8.275 9.073A2.25 2.25 0 0 1 7.25 7.185V7c0-.787.347-1.245 1.153-1.923l.115-.096c.57-.477.732-.693.732-.981a1.25 1.25 0 1 0-2.5 0 .75.75 0 0 1-1.5 0 2.75 2.75 0 0 1 5.5 0c0 .884-.375 1.382-1.268 2.13l-.114.096c-.481.404-.618.585-.618.774v.185c0 .254.129.491.342.63l6.113 3.967A1.75 1.75 0 0 1 14.252 15H1.755a1.75 1.75 0 0 1-.983-3.198l4.307-2.923z"
  }));
};

module.exports.Hanger = function Hanger(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.16 7.134a.5.5 0 0 1 .68.732l-5.675 5.268a.5.5 0 0 0 .34.866H14.5a.5.5 0 0 0 .324-.881L8.53 7.767A1.5 1.5 0 0 1 8 6.624v-.128c0-.78.323-1.19 1.178-1.875.644-.517.822-.743.822-1.121a1.5 1.5 0 0 0-3 0 .5.5 0 0 1-1 0 2.5 2.5 0 0 1 5 0c0 .789-.325 1.202-1.187 1.893C9.176 5.904 9 6.128 9 6.496v.128a.5.5 0 0 0 .176.38l6.297 5.353A1.5 1.5 0 0 1 14.5 15H1.505a1.5 1.5 0 0 1-1.02-2.6L6.16 7.135z"
  }));
};

module.exports.HeartBeatSolid = function HeartBeatSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 2.339C6.966 1.477 6.023 1 4.999 1A4.996 4.996 0 0 0 0 6c0 3.25 2.394 5.854 7.722 9.416a.502.502 0 0 0 .556 0c4.188-2.8 6.568-5.017 7.391-7.416H12a.5.5 0 0 1-.354-.146l-1.082-1.083-2.158 3.02A.499.499 0 0 1 7.6 9.8L6.25 8H4.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .4.201l1.091 1.452 2.102-2.944a.5.5 0 0 1 .76-.063L12.207 7h3.713c.053-.328.08-.66.08-1 0-2.759-2.231-5-5-5-1.024 0-1.966.476-3 1.339z"
  }));
};

module.exports.HeartBeat = function HeartBeat(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 6c0-2.207 1.784-4 4-4 .818 0 1.668.479 2.667 1.373.19.17.477.17.666 0C9.333 2.479 10.181 2 11 2c2.215 0 4 1.793 4 4 0 .338-.034.67-.1 1h-2.693l-1.353-1.353a.5.5 0 0 0-.76.063L7.99 8.654 6.9 7.2a.5.5 0 0 0-.4-.2h-2a.5.5 0 0 0 0 1h1.75L7.6 9.8a.5.5 0 0 0 .807-.01l2.157-3.02 1.082 1.084A.504.504 0 0 0 12 8h2.59c-.83 1.979-2.948 3.938-6.59 6.398C3.14 11.115 1 8.736 1 6zm7-3.661C6.966 1.476 6.023.999 5 .999a4.996 4.996 0 0 0-5 5c0 3.25 2.395 5.856 7.722 9.417a.502.502 0 0 0 .556 0C13.598 11.86 16 9.245 16 6c0-2.76-2.232-5-5-5-1.024 0-1.966.476-3 1.339z"
  }));
};

module.exports.HeartSolid = function HeartSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11 1c2.768 0 5 2.241 5 5 0 3.245-2.403 5.86-7.722 9.416a.5.5 0 0 1-.556 0C2.395 11.854 0 9.25 0 6c0-2.76 2.231-5 4.999-5C6.024 1 6.966 1.476 8 2.339 9.034 1.476 9.976 1 11 1z"
  }));
};

module.exports.Heart = function Heart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M15 6c0-2.208-1.785-4-4-4-.82 0-1.668.479-2.667 1.373a.5.5 0 0 1-.666 0C6.668 2.479 5.819 2 4.999 2A3.996 3.996 0 0 0 1 6c0 2.736 2.14 5.115 7 8.398C12.853 11.12 15 8.73 15 6zm-4-5c2.768 0 5 2.241 5 5 0 3.245-2.403 5.86-7.722 9.416a.5.5 0 0 1-.556 0C2.395 11.854 0 9.25 0 6c0-2.76 2.231-5 4.999-5C6.024 1 6.966 1.476 8 2.339 9.034 1.476 9.976 1 11 1z"
  }));
};

module.exports.HomeSolid = function HomeSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "M7.688.109.188 6.11a.5.5 0 1 0 .625.781L1 6.741V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V6.741l.187.15a.5.5 0 0 0 .625-.781L8.312.109a.496.496 0 0 0-.624 0zM7 10.5A1.5 1.5 0 0 1 8.5 9h2a1.5 1.5 0 0 1 1.5 1.5V16H7v-5.5zm-4 1.001v-1A.5.5 0 0 1 3.5 10h1a.5.5 0 0 1 .5.501v1a.5.5 0 0 1-.5.499h-1a.5.5 0 0 1-.5-.499zM8.5 10a.5.5 0 0 0-.5.5V16h3v-5.5a.5.5 0 0 0-.5-.5h-2z"
  })), React.createElement("use", {
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
};

module.exports.Home = function Home(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4 10h1V9H4v1zm0 1h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zm4-9.86L14.074 6H14v7.5a1.5 1.5 0 0 1-1.5 1.5H12V9a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6H3.5A1.5 1.5 0 0 1 2 13.5V6h-.074L8 1.14zM8 15h3V9H8v6zm-4.5 1h9a2.5 2.5 0 0 0 2.5-2.5V6.74l.187.15a.5.5 0 0 0 .625-.781l-7.5-6a.5.5 0 0 0-.624 0l-7.5 6a.5.5 0 1 0 .625.782L1 6.74v6.758A2.5 2.5 0 0 0 3.5 16z"
  }));
};

module.exports.IcCarSolid = function IcCarSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "M5.541 1a3.5 3.5 0 0 0-3.452 2.924l-.544 3.265A2.5 2.5 0 0 0 0 9.5v3A1.5 1.5 0 0 0 1.5 14H2v.5a1.5 1.5 0 1 0 3 0V14h6v.5a1.5 1.5 0 1 0 3 0V14h.5a1.5 1.5 0 0 0 1.5-1.5v-3a2.5 2.5 0 0 0-1.545-2.311l-.544-3.265A3.5 3.5 0 0 0 10.459 1H5.541zM3.075 4.089A2.5 2.5 0 0 1 5.541 2h4.918a2.5 2.5 0 0 1 2.466 2.089L13.41 7H2.59l.485-2.911zM11 10.5a1.5 1.5 0 1 1 2.999-.001A1.5 1.5 0 0 1 11 10.5zm-9 0a1.5 1.5 0 1 1 2.999-.001A1.5 1.5 0 0 1 2 10.5zm10 4V14h1v.5a.5.5 0 1 1-1 0zm-9 0V14h1v.5a.5.5 0 1 1-1 0z"
  })), React.createElement("use", {
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
};

module.exports.ImageSolid = function ImageSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.5 1A1.5 1.5 0 0 1 15 2.5v5.887l-3.668-3.261a.5.5 0 0 0-.686.02l-6.345 6.346a.5.5 0 0 1-.678.026L1 9.27V2.5A1.5 1.5 0 0 1 2.5 1h11zm0 15a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11zM7 5a2 2 0 1 0-4 .001A2 2 0 0 0 7 5z"
  }));
};

module.exports.Image = function Image(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 13.5v-2.913l2.674 2.292a.501.501 0 0 0 .68-.025l6.666-6.667L15 9.725V13.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5zM2.5 1h11A1.5 1.5 0 0 1 15 2.5v5.887l-3.668-3.261a.5.5 0 0 0-.686.02l-6.672 6.673L1 9.27V2.5A1.5 1.5 0 0 1 2.5 1zm11 15a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11zM5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 3a2 2 0 1 0 0-4.001A2 2 0 0 0 5 7"
  }));
};

module.exports.InfoSolid = function InfoSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm1-5h.5a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1H8V8h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5V11zm-.75-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

module.exports.Info = function Info(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 16"
  }), React.createElement("path", {
    d: "M9 16A8 8 0 1 1 9 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 9 1a7 7 0 0 0 0 14zm1-4h.5a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1H9V8h-.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5V11zm-.75-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

module.exports.Instagram = function Instagram(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M8 0C5.827 0 5.555.01 4.702.048 3.85.087 3.269.222 2.76.42a3.921 3.921 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.269.087 3.85.048 4.702.01 5.555 0 5.827 0 8s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.204.526.478.973.923 1.417a3.9 3.9 0 0 0 1.417.923c.509.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.445-.01 3.298-.048c.852-.039 1.433-.174 1.942-.372a3.922 3.922 0 0 0 1.417-.923 3.9 3.9 0 0 0 .923-1.417c.198-.509.333-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.039-.852-.174-1.433-.372-1.942a3.922 3.922 0 0 0-.923-1.417A3.921 3.921 0 0 0 13.24.42c-.509-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 1.441c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.479 2.479 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.844-.038 1.097-.047 3.233-.047zm0 2.45a4.108 4.108 0 1 0 0 8.217 4.108 4.108 0 0 0 0-8.216zm0 6.776a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334zm5.23-6.937a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z"
  }));
};

module.exports.InternetSolid = function InternetSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.716 10H5.285a.2.2 0 0 1-.203-.181A19.908 19.908 0 0 1 5 7.999c0-.633.029-1.241.082-1.818A.2.2 0 0 1 5.285 6h5.43c.105 0 .194.077.204.18.053.578.08 1.186.08 1.82 0 .634-.027 1.242-.08 1.819a.202.202 0 0 1-.203.18zm-.185 1c.125 0 .22.119.2.242C10.219 14.152 9.064 16 8 16c-1.064 0-2.22-1.847-2.73-4.758a.207.207 0 0 1 .2-.242h5.06zm5.055-1h-3.462a.193.193 0 0 1-.196-.21A21.54 21.54 0 0 0 12 8c0-.616-.025-1.214-.073-1.79a.193.193 0 0 1 .196-.21h3.462c.095 0 .179.064.2.156a8.057 8.057 0 0 1 0 3.688.206.206 0 0 1-.2.156zm-.292 1.288a8.027 8.027 0 0 1-4.631 4.249c-.172.06-.332-.136-.24-.291.61-1.014 1.078-2.416 1.34-4.076a.2.2 0 0 1 .195-.17h3.147c.146 0 .25.155.189.288zM3.877 10H.414a.205.205 0 0 1-.2-.156A8.002 8.002 0 0 1 0 8c0-.635.074-1.252.214-1.844A.205.205 0 0 1 .414 6h3.463c.116 0 .206.095.196.21A21.577 21.577 0 0 0 4 8c0 .617.025 1.215.073 1.79.01.115-.08.21-.196.21zm.36 1.17c.263 1.66.729 3.062 1.339 4.076.094.155-.067.352-.238.29a8.032 8.032 0 0 1-4.632-4.248C.646 11.155.75 11 .895 11h3.148c.097 0 .179.073.194.17zM10.53 5H5.47a.207.207 0 0 1-.2-.241C5.78 1.847 6.936-.001 8-.001s2.219 1.848 2.73 4.76a.207.207 0 0 1-.2.24zm4.574 0h-3.147a.199.199 0 0 1-.195-.17c-.262-1.66-.73-3.062-1.34-4.076-.092-.155.068-.351.24-.291a8.027 8.027 0 0 1 4.63 4.249c.062.133-.042.288-.188.288zM.895 5c-.145 0-.25-.155-.19-.288A8.032 8.032 0 0 1 5.339.462c.17-.06.332.137.238.292C4.966 1.768 4.5 3.17 4.238 4.83a.2.2 0 0 1-.195.17H.895z"
  }));
};

module.exports.Internet = function Internet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.36 14.8a6.984 6.984 0 0 1-3.552-2.105c.7-.26 1.577-.44 2.594-.555.231 1.082.556 1.994.958 2.66zM1 8h4c0 1.123.078 2.19.222 3.16-1.2.14-2.233.368-3.054.713A6.963 6.963 0 0 1 1 8zm4.222-3.16A20.58 20.58 0 0 0 5.023 7H1.07a6.98 6.98 0 0 1 1.098-2.873c.821.345 1.854.574 3.054.713zm.18-.98c-1.017-.115-1.894-.296-2.594-.555A6.998 6.998 0 0 1 6.36 1.199c-.402.666-.727 1.578-.958 2.66zM9.64 1.2a7.005 7.005 0 0 1 3.553 2.104c-.7.26-1.578.44-2.595.556-.23-1.083-.555-1.994-.958-2.66zM14.93 7h-3.953a20.58 20.58 0 0 0-.199-2.16c1.2-.14 2.233-.369 3.055-.713A6.979 6.979 0 0 1 14.93 7zm-4.152 4.16C10.922 10.19 11 9.122 11 8h4a6.97 6.97 0 0 1-1.168 3.873c-.822-.345-1.855-.573-3.055-.713zm-.18.98c1.017.114 1.894.294 2.595.555A6.99 6.99 0 0 1 9.64 14.8c.403-.666.727-1.578.958-2.66zm-.826-7.195c.098.637.168 1.327.202 2.054H6.026a19.58 19.58 0 0 1 .202-2.053A27.47 27.47 0 0 0 8 5a28.2 28.2 0 0 0 1.771-.054zm-.182-.99A26.52 26.52 0 0 1 8 3.998c-.56 0-1.09-.014-1.589-.045C6.802 2.168 7.417 1 8.001 1c.582 0 1.196 1.17 1.588 2.955zM10 7.998c0 1.099-.086 2.131-.229 3.056a26.733 26.733 0 0 0-1.77-.056c-.627 0-1.217.018-1.773.056A20.238 20.238 0 0 1 6 8h4zm-2 4c.561 0 1.09.016 1.59.046C9.196 13.832 8.582 15 8 15c-.583 0-1.198-1.168-1.589-2.954.498-.03 1.028-.046 1.59-.046zM8 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8A8 8 0 1 0 8 0z"
  }));
};

module.exports.Invision = function Invision(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M14.55 0c.8 0 1.45.65 1.45 1.45v13.1c0 .8-.65 1.45-1.45 1.45H1.45A1.45 1.45 0 0 1 0 14.55V1.45C0 .65.65 0 1.45 0h13.1zM5.347 5.034a.966.966 0 0 0 .978-.963.966.966 0 0 0-.978-.963.966.966 0 0 0-.977.963c0 .546.445.963.977.963zm-2.026 5.158a3.31 3.31 0 0 0-.087.723c0 .848.46 1.411 1.438 1.411.81 0 1.468-.481 1.94-1.258l-.288 1.16h1.61l.92-3.69c.23-.935.675-1.42 1.35-1.42.532 0 .863.33.863.877 0 .158-.014.33-.072.517l-.474 1.696a2.55 2.55 0 0 0-.1.719c0 .805.473 1.394 1.465 1.394.848 0 1.524-.546 1.898-1.854l-.633-.244c-.316.876-.59 1.035-.805 1.035-.215 0-.33-.144-.33-.431 0-.13.028-.273.071-.446l.46-1.652c.115-.388.159-.732.159-1.049 0-1.236-.748-1.88-1.653-1.88-.848 0-1.71.764-2.142 1.57l.316-1.446H6.77l-.345 1.273h1.15l-.708 2.835c-.556 1.236-1.577 1.256-1.706 1.227-.21-.047-.345-.127-.345-.4 0-.158.03-.385.1-.658l1.08-4.277H3.262l-.345 1.273h1.136l-.733 2.995z"
  }));
};

module.exports.Kuaishou = function Kuaishou(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("g", {
    fill: "#FF5000"
  }, React.createElement("path", {
    d: "M10.621 13.138c.109-.006 7.7-.626 8.206-.545.505.08 2.527.02 2.628.808.099.778 0 1.536 0 1.536s-4.487.788-4.589.89c-.1.1-.464.464-.444 1.01.02.546.02 2.668.04 2.728.02.06.122.465.89.384.604-.063 1.208-.277 1.438-.365a.14.14 0 0 0 .09-.142l-.041-.546a.141.141 0 0 0-.169-.128L17.513 19v-2.183l3.75-.68a.133.133 0 0 1 .156.127l.125 3.696s.214.92-1.363 1.243c-1.576.323-5.356 1.273-5.72 1.293-.364.02-.97.02-1.597-.141-.442-.114-.985-.32-1.266-.43a.157.157 0 0 1-.069-.239l1.379-1.874a.4.4 0 0 0 .078-.236v-2.068a.415.415 0 0 0-.115-.286L9.92 14.12a.372.372 0 0 1-.099-.313c.037-.245.193-.633.8-.669z"
  }), React.createElement("path", {
    d: "M8.623 14.407a.332.332 0 0 0-.19-.098l-5.303-.777a.36.36 0 0 0-.22.026c-.23.107-.737.426-.9 1.213V21s.076 1.243 1.79 1.82c1.713.575 3.804 1.09 3.804 1.09s1.168.228 1.637-.727c.47-.955 2.714-3.684 2.714-3.684v-1.652l-3.332-3.441zM7.24 21.834c-.546-.015-2.77-.32-3.472-.955-.636-.576-.318-5.108-.318-5.108s.011-.525.318-.47l3.532.636s.44.258.44.622v4.896s.045.394-.5.38zM22.33 7.343c0-2.42-1.868-4.381-4.172-4.381-1.315 0-2.486.638-3.251 1.636-.61-2.64-2.8-4.593-5.408-4.593-3.081 0-5.578 2.725-5.578 6.087 0 3.361 2.497 6.086 5.578 6.086.162 0 .322-.01.481-.025l8.335-.434a4.21 4.21 0 0 0 .11-.006l.116-.006-.003-.003c2.126-.202 3.792-2.077 3.792-4.361zM10.565 9.51c-1.56 0-2.823-1.454-2.823-3.249 0-1.794 1.264-3.249 2.823-3.249s2.823 1.455 2.823 3.25c0 1.794-1.264 3.248-2.823 3.248zm8.257-.151c-1.028 0-1.862-.96-1.862-2.143 0-1.183.834-2.142 1.862-2.142s1.861.959 1.861 2.142c0 1.183-.833 2.143-1.861 2.143z"
  })));
};

module.exports.LabSolid = function LabSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 2a1 1 0 1 0-2 0 1 1 0 0 0 2 0M3.047 15.291 6 8.89V5h-.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1H10v3.89l2.954 6.401A.5.5 0 0 1 12.5 16h-9a.5.5 0 0 1-.453-.709zM9 5H7v4l-.046.209L5.666 12h4.668L9.046 9.209 9 9V5zm1-4.5a.5.5 0 1 0-1.002.002A.5.5 0 0 0 10 .5"
  }));
};

module.exports.Lab = function Lab(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.001 2a1 1 0 1 0-2 0 1 1 0 0 0 2 0m1 3v4l.046.209 1.288 2.79H5.667l1.288-2.79.046-.21V5h2zM4.282 15l.923-2h5.591l.923 2H4.282zm-1.235.29a.5.5 0 0 0 .454.71h9a.5.5 0 0 0 .454-.71l-2.954-6.4V5h.5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1h.5v3.89l-2.954 6.4zM10.001.5a.5.5 0 1 0-1.002.002A.5.5 0 0 0 10.001.5"
  }));
};

module.exports.LampSolid = function LampSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.325 1c-1.4 0-2.222.17-3.014.594a4.201 4.201 0 0 0-1.717 1.717C2.17 4.103 2 4.924 2 6.325v1.35c0 1.4.17 2.223.594 3.016a4.216 4.216 0 0 0 1.728 1.722c.79.419 1.608.587 3.003.587h1.35c1.4 0 2.223-.17 3.015-.593a4.201 4.201 0 0 0 1.717-1.717c.423-.792.593-1.615.593-3.015v-1.35c0-1.394-.169-2.214-.587-3.003a4.216 4.216 0 0 0-1.722-1.728C10.898 1.17 10.075 1 8.675 1h-1.35zm0 13c-.884 0-1.585-.065-2.205-.218a.096.096 0 0 0-.12.095v.623A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-.623a.097.097 0 0 0-.12-.095c-.62.153-1.323.218-2.205.218h-1.35z"
  }));
};

module.exports.Lamp = function Lamp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 7.675v-1.35c0-1.247.137-1.91.476-2.543a3.143 3.143 0 0 1 1.307-1.307C5.413 2.137 6.079 2 7.326 2h1.349c1.247 0 1.91.137 2.543.475a3.143 3.143 0 0 1 1.307 1.307c.339.633.475 1.296.475 2.543v1.35c0 1.248-.136 1.91-.475 2.543a3.132 3.132 0 0 1-1.307 1.307c-.632.339-1.296.475-2.543.475h-1.35c-1.246 0-1.911-.136-2.542-.475a3.132 3.132 0 0 1-1.307-1.307C3.136 9.586 3 8.923 3 7.675zM10 13v.5c0 .277-.223.5-.5.5h-3a.5.5 0 0 1-.5-.5V13h4zm-.5 2a1.5 1.5 0 0 0 1.5-1.5v-.8c.24-.08.468-.174.69-.293a4.131 4.131 0 0 0 1.717-1.717c.423-.792.593-1.615.593-3.015v-1.35c0-1.4-.17-2.222-.593-3.014a4.14 4.14 0 0 0-1.717-1.718C10.898 1.17 10.076 1 8.675 1h-1.35c-1.4 0-2.222.17-3.014.593A4.14 4.14 0 0 0 2.594 3.31C2.17 4.103 2 4.925 2 6.325v1.35c0 1.4.17 2.223.594 3.015a4.131 4.131 0 0 0 1.717 1.717A4.4 4.4 0 0 0 5 12.7v.8A1.5 1.5 0 0 0 6.5 15h3z"
  }));
};

module.exports.LinkUrlSolid = function LinkUrlSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.93 9.07a.75.75 0 0 1-1.06 1.06 3.578 3.578 0 0 1 0-5.06l4-4a3.578 3.578 0 0 1 5.06 5.06l-1.796 1.797a.75.75 0 0 1-1.06-1.06L13.87 5.07a2.078 2.078 0 1 0-2.94-2.94l-4 4a2.078 2.078 0 0 0 0 2.94zm2.14-2.14a.75.75 0 1 1 1.06-1.06 3.578 3.578 0 0 1 0 5.06l-4 4a3.578 3.578 0 0 1-5.06-5.06l1.8-1.8a.75.75 0 1 1 1.06 1.06l-1.8 1.8a2.078 2.078 0 1 0 2.94 2.94l4-4a2.078 2.078 0 0 0 0-2.94z"
  }));
};

module.exports.LinkUrl = function LinkUrl(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.022 8.975a.5.5 0 0 1-.707.707 3.328 3.328 0 0 1 0-4.707l4-4a3.328 3.328 0 0 1 4.707 4.707l-2 2a.5.5 0 0 1-.707-.707l2-2a2.328 2.328 0 0 0-3.293-3.293l-4 4c-.91.91-.91 2.384 0 3.293zm1.954-1.951a.5.5 0 0 1 .708-.708 3.33 3.33 0 0 1 0 4.708l-4 4a3.328 3.328 0 0 1-4.708-4.708l2-2a.5.5 0 1 1 .708.708l-2 2a2.328 2.328 0 1 0 3.292 3.292l4-4c.91-.909.91-2.383 0-3.292z"
  }));
};

module.exports.LinkedinSquare = function LinkedinSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M2.469 13.396h2.406v-7.23H2.469v7.23zM5.03 3.937a1.231 1.231 0 0 0-.375-.895c-.243-.236-.566-.355-.969-.355-.402 0-.73.119-.984.355-.253.236-.38.534-.38.895 0 .355.123.652.37.891.246.24.567.36.963.36h.01c.41 0 .74-.12.99-.36s.375-.536.375-.89zm6.094 9.459h2.406V9.25c0-1.07-.253-1.878-.76-2.427C12.264 6.274 11.594 6 10.76 6c-.945 0-1.67.406-2.178 1.219h.021V6.167H6.198c.02.458.02 2.868 0 7.229h2.406V9.354c0-.264.024-.458.073-.583a1.6 1.6 0 0 1 .469-.62c.208-.17.465-.255.77-.255.806 0 1.209.545 1.209 1.635v3.865zM16 3v10a2.89 2.89 0 0 1-.88 2.12A2.89 2.89 0 0 1 13 16H3a2.89 2.89 0 0 1-2.12-.88A2.89 2.89 0 0 1 0 13V3C0 2.174.293 1.467.88.88A2.89 2.89 0 0 1 3 0h10a2.89 2.89 0 0 1 2.12.88A2.89 2.89 0 0 1 16 3z"
  }));
};

module.exports.Linkedin = function Linkedin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M3.635 5.874V16H.198V5.874h3.437zm.22-3.127c.006.498-.17.913-.527 1.247-.358.334-.828.5-1.411.5h-.021c-.57 0-1.028-.166-1.375-.5A1.659 1.659 0 0 1 0 2.747c0-.504.179-.921.536-1.251C.894 1.166 1.361 1 1.937 1c.577 0 1.039.165 1.386.496.347.33.524.747.531 1.251zM16 10.197V16h-3.427v-5.416c0-.715-.14-1.275-.422-1.68-.281-.406-.72-.608-1.318-.608-.437 0-.803.117-1.099.352a2.177 2.177 0 0 0-.661.874c-.076.204-.115.48-.115.827V16H5.531c.014-2.718.021-4.922.021-6.611 0-1.69-.003-2.698-.01-3.025l-.01-.49h3.426v1.471h-.02c.138-.218.28-.408.427-.572a4.41 4.41 0 0 1 .588-.531c.247-.19.549-.34.906-.445a4.204 4.204 0 0 1 1.193-.158c1.188 0 2.142.387 2.865 1.16.722.773 1.083 1.905 1.083 3.397z"
  }));
};

module.exports.ListAlignLeftASolid = function ListAlignLeftASolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2 4a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2H2zm0 5a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2H2zm0 5a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2H2z"
  }));
};

module.exports.ListAlignLeftA = function ListAlignLeftA(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zm0-4a.5.5 0 0 1 0-1h10a.5.5 0 1 1 0 1h-10zm0 8a.5.5 0 1 1 0-1h13a.5.5 0 1 1 0 1h-13z"
  }));
};

module.exports.ListAlignLeftSolid = function ListAlignLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2 4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2H2zm0 5a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2H2zm0 5a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2H2z"
  }));
};

module.exports.ListAlignLeft = function ListAlignLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.5 9a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13zm0-4a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zm0 8a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1h-10z"
  }));
};

module.exports.ListAlignRightASolid = function ListAlignRightASolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 9a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2H8zM5 4a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2H5zM2 14a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2H2z"
  }));
};

module.exports.ListAlignRightA = function ListAlignRightA(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14.5 9h-7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1zm0-4h-10a.5.5 0 0 1 0-1h10a.5.5 0 1 1 0 1zm0 8h-13a.5.5 0 1 1 0-1h13a.5.5 0 1 1 0 1z"
  }));
};

module.exports.ListAlignRightSolid = function ListAlignRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2H8zM2 9a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2H2zm3 5a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2H5z"
  }));
};

module.exports.ListAlignRight = function ListAlignRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14.5 9h-13a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1zm0-4h-7a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1zm0 8h-10a.5.5 0 1 1 0-1h10a.5.5 0 1 1 0 1z"
  }));
};

module.exports.ListSolid = function ListSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2 9a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2H2zm0-5a1 1 0 1 1 0-2h12a1 1 0 0 1 0 2H2zm0 10a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2H2z"
  }));
};

module.exports.ListUlSolid = function ListUlSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.5 9a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1h-9zm0-5a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1h-9zm0 10a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1h-9zm-3-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  }));
};

module.exports.ListUl = function ListUl(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.5 9a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1h-9zm0-4a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1h-9zm0 8a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1h-9zm-3-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
  }));
};

module.exports.List = function List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.5 9a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13zm0-4a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13zm0 8a.5.5 0 1 1 0-1h13a.5.5 0 1 1 0 1h-13z"
  }));
};

module.exports.LocationSolid = function LocationSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8.304 15.897a.5.5 0 0 1-.608 0C4.426 13.389 2 9.326 2 6c0-3.276 2.724-6 6-6s6 2.724 6 6c0 3.33-2.423 7.387-5.696 9.897zM8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }));
};

module.exports.Location = function Location(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm.304 7.897a.5.5 0 0 1-.608 0C4.426 13.389 2 9.326 2 6c0-3.276 2.724-6 6-6s6 2.724 6 6c0 3.33-2.423 7.387-5.696 9.897zM13 6c0-2.724-2.276-5-5-5S3 3.276 3 6c0 2.881 2.112 6.517 5 8.863 2.89-2.348 5-5.978 5-8.863z"
  }));
};

module.exports.LockSolid = function LockSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 4a3 3 0 1 1 6 0v2H5V4zm3-4a4 4 0 0 0-4 4v2H2.5A1.5 1.5 0 0 0 1 7.5v7A1.5 1.5 0 0 0 2.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 6H12V4a4 4 0 0 0-4-4z"
  }));
};

module.exports.Lock = function Lock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 3a2 2 0 1 0-.001-4.002A2 2 0 0 0 8 13m5.5-6a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h11zM5 4a3 3 0 1 1 6 0v2H5V4zm3-4a4 4 0 0 0-4 4v2H2.5A1.5 1.5 0 0 0 1 7.5v7A1.5 1.5 0 0 0 2.5 16h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 6H12V4a4 4 0 0 0-4-4z"
  }));
};

module.exports.MagicWandSolid = function MagicWandSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.28 4.78a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06l-2.5 2.5zm-1.06 4.5a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1-1.06 1.06l-2.5-2.5zM7.782 3.718a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 1.06-1.06l2.5 2.5zM6.72 8.22a.75.75 0 1 1 1.062 1.06l-6.5 6.505a.75.75 0 1 1-1.062-1.06l6.5-6.505zm3.531-4.973a.75.75 0 0 1-1.5 0V.751a.75.75 0 0 1 1.5 0v2.496zm2.5 4.003a.75.75 0 1 1 0-1.5h2.499a.75.75 0 1 1 0 1.5h-2.5zm-4 2.498a.75.75 0 0 1 1.5 0v2.505a.75.75 0 0 1-1.5 0V9.748zM6.248 5.75a.75.75 0 1 1 0 1.5H3.755a.75.75 0 1 1 0-1.5h2.493z"
  }));
};

module.exports.MagicWand = function MagicWand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11.646 9.354a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1-.708.708l-2.5-2.5zm.708-5a.5.5 0 0 1-.708-.708l2.5-2.5a.5.5 0 0 1 .708.708l-2.5 2.5zm-5-.708a.5.5 0 1 1-.708.708l-2.5-2.5a.5.5 0 1 1 .708-.708l2.5 2.5zM10 2.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2zM13.5 7a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2zM9 10.5a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2zM5.5 6a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2zm1.146 2.646a.5.5 0 1 1 .708.708l-6.5 6.5a.5.5 0 0 1-.708-.708l6.5-6.5z"
  }));
};

module.exports.MapSolid = function MapSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.5 13.039.686 14.964A.5.5 0 0 1 0 14.5v-11a.5.5 0 0 1 .314-.464l5-2a.5.5 0 0 1 .372 0l4.862 1.945 4.854-.971A.5.5 0 0 1 16 2.5v11a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.284-.026L5.5 13.04zM10 6.5v5a.5.5 0 1 0 1 0v-5a.5.5 0 1 0-1 0zm-5-2v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0z"
  }));
};

module.exports.Map = function Map(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1 3.839v9.922l4.314-1.725a.5.5 0 0 1 .372 0l4.862 1.945L15 13.09V3.11l-4.402.88a.5.5 0 0 1-.284-.026L5.5 2.04 1 3.839zm4.5 9.2L.686 14.964A.5.5 0 0 1 0 14.5v-11a.5.5 0 0 1 .314-.464l5-2a.5.5 0 0 1 .372 0l4.862 1.945 4.854-.971A.5.5 0 0 1 16 2.5v11a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.284-.026L5.5 13.04zM10 6.5a.5.5 0 1 1 1 0v5a.5.5 0 1 1-1 0v-5zm-5-2a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5z"
  }));
};

module.exports.MaximizeSolid = function MaximizeSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.586 2H11a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L12.586 2zM3.414 14H4.5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 2 0v1.086l3.293-3.293a1 1 0 1 1 1.414 1.414L3.414 14z"
  }));
};

module.exports.Maximize = function Maximize(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.707 15H5.5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 1 1 1 0v3.793l5.146-5.147a.5.5 0 1 1 .708.708L1.707 15zM14.293 1H10.5a.5.5 0 1 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0V1.707L9.854 6.854a.5.5 0 1 1-.708-.708L14.293 1z"
  }));
};

module.exports.Medium = function Medium(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M5.33 3.613v10.833a.674.674 0 0 1-.111.392.371.371 0 0 1-.326.162.634.634 0 0 1-.295-.074L.446 12.774a.77.77 0 0 1-.317-.309.834.834 0 0 1-.129-.43V1.509c0-.123.03-.228.09-.314a.295.295 0 0 1 .258-.13c.084 0 .215.047.393.14l4.563 2.363c.017.019.026.034.026.046zm.572.933 4.768 7.998-4.768-2.457v-5.54zM16 4.712v9.734a.548.548 0 0 1-.125.374.427.427 0 0 1-.34.143.822.822 0 0 1-.419-.12l-3.937-2.032L16 4.712zm-.027-1.108c0 .019-.763 1.31-2.29 3.874A3333.834 3333.834 0 0 1 11 11.98L7.518 6.125 10.41 1.26a.502.502 0 0 1 .465-.26c.083 0 .16.018.232.055l4.83 2.494c.024.012.036.03.036.055z"
  }));
};

module.exports.MegaphoneSolid = function MegaphoneSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.02 2.08 1.761 5.543a2.59 2.59 0 0 0 0 4.908l1.239.42V13.5a1.5 1.5 0 0 0 2.864.623l.905-1.979 5.251 1.774a1.5 1.5 0 0 0 1.98-1.42v-2.5a2 2 0 0 0 0-4V3.5a1.5 1.5 0 0 0-1.98-1.421z"
  }));
};

module.exports.Megaphone = function Megaphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 8.999v-2a1 1 0 0 1 0 2zm-1 3.5a.5.5 0 0 1-.66.473L4 10.154v-4.31l8.34-2.817A.501.501 0 0 1 13 3.5v8.998zm-8.045 1.21A.5.5 0 0 1 4 13.5v-2.292l1.816.614-.861 1.886zM2.081 9.505a1.59 1.59 0 0 1 0-3.012L3 6.182v3.634l-.919-.311zM12.02 2.08 1.761 5.545a2.59 2.59 0 0 0 0 4.908L3 10.872V13.5a1.5 1.5 0 0 0 2.864.623l.905-1.98 5.251 1.775a1.5 1.5 0 0 0 1.98-1.42v-2.5a2 2 0 0 0 0-4V3.5a1.5 1.5 0 0 0-1.98-1.421z"
  }));
};

module.exports.Microsoft = function Microsoft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M6.558 8.442v6.26L0 13.798V8.442h6.558zm0-7.144v6.337H0V2.202l6.558-.904zM16 8.442V16l-8.721-1.202V8.442H16zM16 0v7.635H7.279V1.202L16 0z"
  }));
};

module.exports.MinimizeSolid = function MinimizeSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11 3.586 14.293.293a1 1 0 0 1 1.414 1.414L12.414 5H14a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.586zM3.586 11H2.5a1 1 0 0 1 0-2H6a1 1 0 0 1 1 1v3.5a1 1 0 0 1-2 0v-1.086l-3.293 3.293a1 1 0 1 1-1.414-1.414L3.586 11z"
  }));
};

module.exports.Minimize = function Minimize(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10 5.293 15.146.146a.5.5 0 0 1 .708.708L10.707 6H14.5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v3.793zM5.293 10H1.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0v-3.793L.854 15.854a.5.5 0 0 1-.708-.708L5.293 10z"
  }));
};

module.exports.MoneySolid = function MoneySolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.437 7.285C6.483 6.79 6 6.187 6 5.5c0-.748.775-1.446 1.862-1.501l-.299 3.286zm.874 1.43C9.517 9.21 10 9.813 10 10.5c0 .745-.776 1.441-1.861 1.496l.298-3.281zm.095-1.047.329-3.617c.589.089 1.002.293 1.192.672a.499.499 0 1 0 .894-.447c-.299-.597-.856-.957-1.575-1.138a4.225 4.225 0 0 0-.42-.085l.046-.508a.5.5 0 0 0-.996-.09l-.049.541C6.295 3.017 5 4.145 5 5.5c0 1.211.843 2.171 2.468 2.832l-.329 3.614c-.592-.087-1.002-.29-1.192-.67a.5.5 0 1 0-.894.447c.299.599.856.957 1.575 1.137.144.036.282.064.42.084l-.046.511a.5.5 0 0 0 .996.09L8.047 13C9.703 12.978 11 11.853 11 10.5c0-1.212-.843-2.171-2.468-2.832z"
  }));
};

module.exports.Money = function Money(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0-1a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.437 7.285C6.483 6.79 6 6.187 6 5.5c0-.748.775-1.446 1.862-1.501l-.299 3.286zm.874 1.43C9.517 9.21 10 9.813 10 10.5c0 .745-.776 1.441-1.861 1.496l.298-3.281zm.095-1.047.329-3.617c.589.089 1.002.293 1.192.672a.499.499 0 1 0 .894-.447c-.299-.597-.856-.957-1.575-1.138a4.225 4.225 0 0 0-.42-.085l.046-.508a.5.5 0 0 0-.996-.09l-.049.541C6.295 3.017 5 4.145 5 5.5c0 1.211.843 2.171 2.468 2.832l-.329 3.614c-.592-.087-1.002-.29-1.192-.67a.5.5 0 1 0-.894.447c.299.599.856.957 1.575 1.137.144.036.282.064.42.084l-.046.511a.5.5 0 0 0 .996.09L8.047 13C9.703 12.978 11 11.853 11 10.5c0-1.212-.843-2.171-2.468-2.832z"
  }));
};

module.exports.MusicNoteSolid = function MusicNoteSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m14.206.029-8 1.598A1.5 1.5 0 0 0 5 3.098v7.678a2.982 2.982 0 0 0-2-.778 3 3 0 1 0 3 3v-7.9a.5.5 0 0 1 .402-.491l8-1.597A.5.5 0 0 1 15 3.5v6.276a2.982 2.982 0 0 0-2-.778 3 3 0 1 0 3 3V1.5A1.5 1.5 0 0 0 14.206.029z"
  }));
};

module.exports.MusicNote = function MusicNote(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#060101",
    fillRule: "evenodd",
    d: "M6 4.888v-1.79a.5.5 0 0 1 .402-.49l8-1.598A.5.5 0 0 1 15 1.5v1.588l-9 1.8zm7 9.11a2 2 0 1 1 .001-4.001A2 2 0 0 1 13 13.998zm-10 1a2 2 0 1 1 .001-4.001A2 2 0 0 1 3 14.998zm10-6a3 3 0 1 0 3 3V1.5A1.5 1.5 0 0 0 14.206.03l-8 1.597A1.5 1.5 0 0 0 5 3.098v7.678a2.982 2.982 0 0 0-2-.778 3 3 0 1 0 3 3v-7.09l9-1.8v5.668a2.982 2.982 0 0 0-2-.778z"
  }));
};

module.exports.NewsSolid = function NewsSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.5 1h9A2.5 2.5 0 0 1 15 3.5v10a.5.5 0 0 1-.5.5h-9A2.5 2.5 0 0 1 3 11.5v-10a.5.5 0 0 1 .5-.5zm2 7h7a.5.5 0 1 0 0-1h-7a.5.5 0 0 0 0 1zm0 3h7a.5.5 0 1 0 0-1h-7a.5.5 0 1 0 0 1zm0-6h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1zM1 6.5c0-1.5.5-2 1-2.5v8.5A2.5 2.5 0 0 0 4.5 15H14c-.5.5-1 1-2.5 1h-7A3.5 3.5 0 0 1 1 12.5v-6z"
  }));
};

module.exports.News = function News(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.5 8a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1h-7zm0 3a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7zm0-6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4zM4 2v9.5A1.5 1.5 0 0 0 5.5 13H14V3.5A1.5 1.5 0 0 0 12.5 2H4zm-.5-1h9A2.5 2.5 0 0 1 15 3.5v10a.5.5 0 0 1-.5.5h-9A2.5 2.5 0 0 1 3 11.5v-10a.5.5 0 0 1 .5-.5zM1 6.5c0-1.5.5-2 1-2.5v8.5A2.5 2.5 0 0 0 4.5 15H14c-.5.5-1 1-2.5 1h-7A3.5 3.5 0 0 1 1 12.5v-6z"
  }));
};

module.exports.NewspaperSolid = function NewspaperSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 13h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1M13 6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h7zM1 14V5h2v9a1 1 0 0 1-2 0zm14 2a1 1 0 0 0 1-1V2.5A2.5 2.5 0 0 0 13.5 0H4a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h13zm-9.5-6h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1"
  }));
};

module.exports.Newspaper = function Newspaper(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 13h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1M6 6h7V4H6v2zm0 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm-5 7V5h2v9a1 1 0 0 1-2 0zM4 1h9.5A1.5 1.5 0 0 1 15 2.5V15H3.723c.172-.295.277-.634.277-1V1zm11 15a1 1 0 0 0 1-1V2.5A2.5 2.5 0 0 0 13.5 0H4a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h13zm-9.5-6h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1"
  }));
};

module.exports.PaintRollerSolid = function PaintRollerSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.5 9a.5.5 0 0 0 .5-.5V5h2.5a2.5 2.5 0 1 0 0-5h-11a2.5 2.5 0 1 0 0 5H10v3H7.5a.5.5 0 0 0-.5.5v1.592c-.581.206-1 .756-1 1.408v3a1.5 1.5 0 1 0 3 0v-3c0-.652-.419-1.202-1-1.408V9h2.5z"
  }));
};

module.exports.PaintRoller = function PaintRoller(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 14.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 1 0v3zM2.5 4a1.5 1.5 0 1 1 0-3h11a1.5 1.5 0 0 1 0 3h-11zm8 5a.5.5 0 0 0 .5-.5V5h2.5a2.5 2.5 0 1 0 0-5h-11a2.5 2.5 0 1 0 0 5H10v3H7.5a.5.5 0 0 0-.5.5v1.592c-.581.206-1 .756-1 1.408v3a1.5 1.5 0 1 0 3 0v-3c0-.652-.419-1.202-1-1.408V9h2.5z"
  }));
};

module.exports.PauseCircleSolid = function PauseCircleSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5.5 4.5A.5.5 0 0 0 5 5v6a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 7 11V5a.5.5 0 0 0-.5-.5h-1zm4 0A.5.5 0 0 0 9 5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5h-1z"
  }));
};

module.exports.PauseCircle = function PauseCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM5.5 5.5v5h1v-5h-1zm-.5-1h2a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5zm4.5 1v5h1v-5h-1zm-.5-1h2a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5z"
  }));
};

module.exports.PauseO = function PauseO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3 3v10h3V3H3zm-.5-1h4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5zM10 3v10h3V3h-3zm-.5-1h4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5z"
  }));
};

module.exports.PauseSolid = function PauseSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.5 3h2a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-5 0h2a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5z"
  }));
};

module.exports.Paypal = function Paypal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M12.07 1.206C11.36.362 10.075 0 8.432 0H3.665a.693.693 0 0 0-.675.6L1.005 13.731a.422.422 0 0 0 .405.494h2.943l.74-4.89-.024.153a.69.69 0 0 1 .672-.6H7.14c2.748 0 4.899-1.165 5.527-4.532.02-.1.05-.291.05-.291.178-1.246-.002-2.092-.647-2.859zm1.391 3.497c-.683 3.315-2.863 5.07-6.321 5.07H5.886L4.95 16h2.034a.605.605 0 0 0 .59-.525l.024-.132.468-3.091.03-.17a.605.605 0 0 1 .59-.526h.37c2.404 0 4.286-1.019 4.836-3.964.22-1.182.115-2.173-.43-2.89z"
  }));
};

module.exports.PencilWriteSolid = function PencilWriteSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "m10.307 2.6 2.965 2.965a.5.5 0 0 0 .688.02l.213-.192c.048-.044.048-.044.095-.09a2.47 2.47 0 0 0 0-3.51A2.717 2.717 0 0 0 12.346 1a2.72 2.72 0 0 0-1.818.694l-.2.18a.5.5 0 0 0-.02.726zM2.16 9.186a.488.488 0 0 0-.15.247l-.994 3.952a.496.496 0 0 0 .603.6l3.974-.99a.487.487 0 0 0 .211-.11l6.663-5.965a.5.5 0 0 0 .02-.726L9.522 3.23a.5.5 0 0 0-.688-.02L2.16 9.187zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"
  })), React.createElement("use", {
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
};

module.exports.PencilWrite = function PencilWrite(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m2.936 9.82.06-.055 2.276 2.265-.042.038-3.05.758.756-3.007zm10.63-7.33a1.489 1.489 0 0 1 0 2.114l-.058.054-.697.625-2.277-2.265.659-.59a1.732 1.732 0 0 1 2.373.062zm-7.554 8.878L3.736 9.103 9.793 3.68l2.279 2.265-6.06 5.423zm-.42 1.628a.489.489 0 0 0 .212-.112l8.368-7.49c.05-.045.05-.045.096-.09a2.473 2.473 0 0 0 0-3.512 2.73 2.73 0 0 0-3.74-.098l-8.37 7.491a.491.491 0 0 0-.15.248l-.994 3.952a.496.496 0 0 0 .603.6l3.974-.989zM0 15.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1H.5a.5.5 0 0 0-.5.5"
  }));
};

module.exports.PerformanceSolid = function PerformanceSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M.5 11a.5.5 0 0 0 0 1h1.55A2.505 2.505 0 0 0 4 13.95v1.55a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h2v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0v-1.55A2.505 2.505 0 0 0 13.95 12h1.55a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14V7h1.5a.5.5 0 0 0 0-1H14V5h1.5a.5.5 0 0 0 0-1h-1.55A2.504 2.504 0 0 0 12 2.05V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2H7V.5a.5.5 0 0 0-1 0V2H5V.5a.5.5 0 0 0-1 0v1.55A2.504 2.504 0 0 0 2.05 4H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v2H.5a.5.5 0 0 0 0 1H2v1H.5zM6 6h2.793L10 7.207V10H6V6zm-.5 5h5a.5.5 0 0 0 .5-.5V7a.505.505 0 0 0-.146-.354l-1.5-1.5A.504.504 0 0 0 9 5H5.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5z"
  }));
};

module.exports.Performance = function Performance(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3zm-4 8a.5.5 0 0 0 0 1h1.55A2.505 2.505 0 0 0 4 13.95v1.55a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h2v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0v-1.55A2.505 2.505 0 0 0 13.95 12h1.55a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14V7h1.5a.5.5 0 0 0 0-1H14V5h1.5a.5.5 0 0 0 0-1h-1.55A2.504 2.504 0 0 0 12 2.05V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2H7V.5a.5.5 0 0 0-1 0V2H5V.5a.5.5 0 0 0-1 0v1.55A2.504 2.504 0 0 0 2.05 4H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v2H.5a.5.5 0 0 0 0 1H2v1H.5zM6 6h2.793L10 7.207V10H6V6zm-.5 5h5a.5.5 0 0 0 .5-.5V7a.505.505 0 0 0-.146-.354l-1.5-1.5A.504.504 0 0 0 9 5H5.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5z"
  }));
};

module.exports.PhoneCallSolid = function PhoneCallSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11.184 9.896a1.499 1.499 0 0 1 1.61.097l2.587 1.879a1.5 1.5 0 0 1 .07 2.376l-1.725 1.412a1.499 1.499 0 0 1-1.451.254c-2.37-.841-4.744-2.35-7.126-4.521C2.715 9.174 1.022 6.612.074 3.71a1.502 1.502 0 0 1 .269-1.42L1.78.546a1.5 1.5 0 0 1 2.374.077l1.863 2.584c.342.475.377 1.106.09 1.615l-.833 1.479c.419.612 1.083 1.375 1.99 2.283.923.923 1.73 1.64 2.417 2.149l1.503-.837z"
  }));
};

module.exports.PhoneCall = function PhoneCall(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11.184 9.896a1.499 1.499 0 0 1 1.61.097l2.587 1.879a1.5 1.5 0 0 1 .07 2.376l-1.725 1.412a1.499 1.499 0 0 1-1.451.254c-2.37-.841-4.744-2.35-7.126-4.521C2.715 9.174 1.022 6.612.074 3.71a1.502 1.502 0 0 1 .269-1.42L1.78.546a1.5 1.5 0 0 1 2.374.077l1.863 2.584c.342.475.377 1.106.09 1.615l-.833 1.479c.419.612 1.083 1.375 1.99 2.283.923.923 1.73 1.64 2.417 2.149l1.503-.837zM1.024 3.4c.893 2.733 2.49 5.15 4.798 7.253 2.289 2.087 4.552 3.524 6.787 4.318a.5.5 0 0 0 .484-.085l1.724-1.412a.5.5 0 0 0-.023-.792l-2.587-1.88a.5.5 0 0 0-.537-.032l-1.78.991a.5.5 0 0 1-.528-.026c-.795-.552-1.728-1.366-2.805-2.444C5.475 8.208 4.712 7.31 4.264 6.582a.5.5 0 0 1-.01-.508l.982-1.743a.5.5 0 0 0-.03-.538L3.343 1.208a.5.5 0 0 0-.791-.025L1.114 2.926a.5.5 0 0 0-.09.474z"
  }));
};

module.exports.PinMapSolid = function PinMapSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.23 11.08a.5.5 0 1 1 .542.84C3.274 12.241 3 12.653 3 13c0 .997 2.207 2 5 2s5-1.003 5-2c0-.35-.272-.759-.77-1.08a.5.5 0 1 1 .54-.84c.763.49 1.23 1.192 1.23 1.92 0 1.765-2.718 3-6 3s-6-1.235-6-3c0-.725.469-1.43 1.23-1.92zm5.074 2.68a.5.5 0 0 1-.608 0C4.883 11.603 3 8.684 3 6c0-2.73 2.27-5 5-5s5 2.27 5 5c0 2.688-1.88 5.601-4.696 7.76zM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  }));
};

module.exports.PinMap = function PinMap(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.23 11.08a.5.5 0 1 1 .542.84C3.274 12.241 3 12.653 3 13c0 .997 2.207 2 5 2s5-1.003 5-2c0-.35-.272-.759-.77-1.08a.5.5 0 1 1 .54-.84c.763.49 1.23 1.192 1.23 1.92 0 1.765-2.718 3-6 3s-6-1.235-6-3c0-.725.469-1.43 1.23-1.92zM8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm.304 6.76a.5.5 0 0 1-.608 0C4.883 11.603 3 8.684 3 6c0-2.73 2.27-5 5-5s5 2.27 5 5c0 2.688-1.88 5.601-4.696 7.76zM12 6c0-2.178-1.822-4-4-4S4 3.822 4 6c0 2.23 1.581 4.77 4 6.727 2.421-1.958 4-4.493 4-6.727z"
  }));
};

module.exports.PinterestSquare = function PinterestSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M13 0a2.89 2.89 0 0 1 2.12.88A2.89 2.89 0 0 1 16 3v10a2.89 2.89 0 0 1-.88 2.12A2.89 2.89 0 0 1 13 16H5.448c.59-.847.965-1.576 1.125-2.188.062-.236.246-.961.552-2.177.146.271.401.504.766.698.364.195.755.292 1.171.292 1.257 0 2.283-.512 3.079-1.536.795-1.025 1.192-2.322 1.192-3.891 0-.583-.121-1.148-.364-1.693a4.697 4.697 0 0 0-1.005-1.448 4.762 4.762 0 0 0-1.589-1.01 5.461 5.461 0 0 0-2.052-.38 6.71 6.71 0 0 0-2.026.297c-.629.197-1.16.463-1.594.796a5.616 5.616 0 0 0-1.12 1.141 4.707 4.707 0 0 0-.692 1.333c-.15.462-.224.922-.224 1.38 0 .709.137 1.334.411 1.876.274.541.679.923 1.214 1.145a.3.3 0 0 0 .244 0c.073-.034.124-.1.151-.198.07-.305.122-.517.157-.635a.452.452 0 0 0-.115-.437c-.347-.431-.52-.952-.52-1.563 0-1.042.359-1.932 1.077-2.672.72-.74 1.658-1.11 2.818-1.11 1.035 0 1.842.282 2.422.845.58.562.87 1.291.87 2.187 0 1.167-.235 2.16-.703 2.98-.469.819-1.071 1.228-1.808 1.228-.416 0-.753-.15-1.01-.453-.257-.302-.337-.661-.24-1.078.056-.236.148-.557.276-.963.129-.407.231-.76.308-1.063.076-.302.114-.56.114-.776 0-.34-.092-.623-.276-.849-.184-.226-.446-.338-.786-.338-.424 0-.783.196-1.078.588-.295.392-.443.877-.443 1.453 0 .5.083.92.25 1.26l-1.02 4.313c-.168.695-.192 1.577-.074 2.646H3a2.89 2.89 0 0 1-2.12-.88A2.89 2.89 0 0 1 0 13V3C0 2.174.293 1.467.88.88A2.89 2.89 0 0 1 3 0h10z"
  }));
};

module.exports.Pinterest = function Pinterest(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M2 5.74c0-.692.117-1.344.352-1.956a5.04 5.04 0 0 1 .97-1.601A6.619 6.619 0 0 1 6.482.25 7.25 7.25 0 0 1 8.374 0c.987 0 1.906.213 2.756.64a5.248 5.248 0 0 1 2.072 1.86c.531.814.797 1.734.797 2.76 0 .615-.06 1.218-.178 1.807a7.432 7.432 0 0 1-.563 1.702 5.942 5.942 0 0 1-.937 1.438 4.071 4.071 0 0 1-1.36.99 4.195 4.195 0 0 1-1.771.37c-.425 0-.847-.102-1.266-.307-.419-.206-.719-.488-.9-.847-.062.25-.15.611-.263 1.082-.112.471-.185.776-.22.914-.034.137-.098.365-.192.682a4.606 4.606 0 0 1-.244.683l-.3.601a6.853 6.853 0 0 1-.431.745c-.156.234-.35.511-.581.832L4.662 16l-.084-.096c-.094-1.007-.14-1.61-.14-1.808 0-.59.067-1.251.201-1.985.134-.734.342-1.656.624-2.765.28-1.109.443-1.76.487-1.952-.2-.416-.3-.958-.3-1.625 0-.532.163-1.032.488-1.5.325-.468.737-.702 1.237-.702.381 0 .678.13.89.39.213.26.32.588.32.985 0 .423-.138 1.036-.413 1.837-.275.801-.413 1.4-.413 1.798 0 .404.141.739.422 1.005.282.266.622.399 1.022.399.344 0 .663-.08.956-.24.294-.16.54-.379.736-.654a5.56 5.56 0 0 0 .525-.914 5.39 5.39 0 0 0 .357-1.062c.084-.375.146-.731.187-1.068.04-.336.061-.655.061-.956 0-1.11-.342-1.973-1.027-2.592-.684-.618-1.576-.928-2.676-.928-1.25 0-2.294.415-3.131 1.246-.838.83-1.257 1.883-1.257 3.158 0 .282.04.555.118.817.078.263.162.472.253.625.09.154.175.3.253.438.078.138.117.236.117.293 0 .18-.047.414-.14.702-.094.289-.21.433-.348.433-.012 0-.065-.01-.159-.029a1.91 1.91 0 0 1-.848-.538 2.812 2.812 0 0 1-.572-.91 6.039 6.039 0 0 1-.305-1.038A5.297 5.297 0 0 1 2 5.74z"
  }));
};

module.exports.PlaneSolid = function PlaneSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.81 10H3.75L2.4 11.8a.5.5 0 0 1-.4.2H.5a.5.5 0 0 1-.48-.638L.98 8 .02 4.638A.5.5 0 0 1 .5 4H2a.5.5 0 0 1 .4.2L3.75 6h2.078L4.521 1.644A.5.5 0 0 1 5.001 1h1.381a1.5 1.5 0 0 1 1.343.83L9.81 6h1.69c2.561 0 4.5.852 4.5 2 0 1.153-1.916 2-4.5 2H9.81zm-.573 1.145L7.725 14.17c-.255.509-.774.83-1.343.83H5a.5.5 0 0 1-.479-.644l.986-3.285A.099.099 0 0 1 5.602 11h3.545a.1.1 0 0 1 .09.145z"
  }));
};

module.exports.Plane = function Plane(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.163 5h.587L3.1 6.8a.5.5 0 0 0 .4.2h3a.5.5 0 0 0 .48-.644L5.671 2h.71a.5.5 0 0 1 .447.276l2.224 4.448A.5.5 0 0 0 9.5 7h2c2.07 0 3.5.629 3.5 1 0 .377-1.408 1-3.5 1h-2a.5.5 0 0 0-.447.276L6.83 13.724a.5.5 0 0 1-.447.276h-.71L6.98 9.644A.5.5 0 0 0 6.5 9h-3a.5.5 0 0 0-.4.2L1.75 11h-.587l.818-2.862a.495.495 0 0 0 0-.275L1.163 5zM2 12a.5.5 0 0 0 .4-.2L3.75 10h2.078l-1.307 4.356a.5.5 0 0 0 .48.644h1.381a1.5 1.5 0 0 0 1.342-.83L9.81 10h1.69c2.584 0 4.5-.847 4.5-2 0-1.148-1.939-2-4.5-2H9.81L7.723 1.829a1.5 1.5 0 0 0-1.342-.83H5a.5.5 0 0 0-.479.645L5.828 6H3.75L2.4 4.2A.5.5 0 0 0 2 4H.5a.501.501 0 0 0-.48.638L.98 8l-.96 3.363A.5.5 0 0 0 .5 12H2z"
  }));
};

module.exports.PlayCircleSolid = function PlayCircleSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm2.83-7.624a.5.5 0 0 0 0-.752l-4-3.5A.5.5 0 0 0 6 4.5v7a.5.5 0 0 0 .83.376l4-3.5z"
  }));
};

module.exports.PlayCircle = function PlayCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm1.74-7L7 5.602v4.796L9.74 8zm1.09.376-4 3.5A.5.5 0 0 1 6 11.5v-7a.5.5 0 0 1 .83-.376l4 3.5a.5.5 0 0 1 0 .752z"
  }));
};

module.exports.PlaySolid = function PlaySolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m13.782 8.413-11 7.5A.5.5 0 0 1 2 15.5V.5a.5.5 0 0 1 .782-.413l11 7.5a.5.5 0 0 1 0 .826z"
  }));
};

module.exports.Play = function Play(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.612 8 3 1.446v13.108L12.612 8zm1.17.413-11 7.5A.5.5 0 0 1 2 15.5V.5a.5.5 0 0 1 .782-.413l11 7.5a.5.5 0 0 1 0 .826z"
  }));
};

module.exports.PrinterAltSolid = function PrinterAltSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 1A1.5 1.5 0 0 0 4 2.5v3c0 .277.223.5.5.5h7a.5.5 0 0 0 .5-.5v-3A1.5 1.5 0 0 0 10.5 1h-5zm-3 6A2.5 2.5 0 0 0 0 9.5v2A2.5 2.5 0 0 0 2.5 14H3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h.5a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 13.5 7h-11zM5 13a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5z"
  }));
};

module.exports.PrinterAlt = function PrinterAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.5 8A1.5 1.5 0 0 1 15 9.5v2a1.5 1.5 0 0 1-1.5 1.5h-1.592c-.206-.581-.756-1-1.408-1h-5c-.652 0-1.202.419-1.408 1H2.5A1.5 1.5 0 0 1 1 11.5v-2A1.5 1.5 0 0 1 2.5 8h11zm-8 6a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM5 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V7H5V2.5zM5.5 1A1.5 1.5 0 0 0 4 2.5V7H2.5A2.5 2.5 0 0 0 0 9.5v2A2.5 2.5 0 0 0 2.5 14h1.592c.206.582.756 1 1.408 1h5c.652 0 1.202-.418 1.408-1H13.5a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 13.5 7H12V2.5A1.5 1.5 0 0 0 10.5 1h-5z"
  }));
};

module.exports.PrinterSolid = function PrinterSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11 13.5A1.5 1.5 0 0 1 9.5 15h-3A1.5 1.5 0 0 1 5 13.5V11h6v2.5zM5 3h6V2H5v1zm6.5-2h-7a.5.5 0 0 0-.5.5V3H2.5A2.5 2.5 0 0 0 0 5.5v5A2.5 2.5 0 0 0 2.5 13H4v.5A2.5 2.5 0 0 0 6.5 16h3a2.5 2.5 0 0 0 2.5-2.5V13h1.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 13.5 3H12V1.5a.5.5 0 0 0-.5-.5zM3 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
  }));
};

module.exports.Printer = function Printer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15 5.5v5a1.5 1.5 0 0 1-1.5 1.5H12v-1h.5a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1H4v1H2.5A1.5 1.5 0 0 1 1 10.5v-5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5zm-4 8A1.5 1.5 0 0 1 9.5 15h-3A1.5 1.5 0 0 1 5 13.5V11h6v2.5zM5 3h6V2H5v1zm6.5-2h-7a.5.5 0 0 0-.5.5V3H2.5A2.5 2.5 0 0 0 0 5.5v5A2.5 2.5 0 0 0 2.5 13H4v.5A2.5 2.5 0 0 0 6.5 16h3a2.5 2.5 0 0 0 2.5-2.5V13h1.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 13.5 3H12V1.5a.5.5 0 0 0-.5-.5zM7 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
  }));
};

module.exports.ProjectorSolid = function ProjectorSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.5 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm11 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm-8-6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m2 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m-4 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M11 4a2 2 0 1 1-.001 4A2 2 0 0 1 11 4zm5 5.5v-4A1.5 1.5 0 0 0 14.5 4h-1.278c-.55-.61-1.337-1-2.222-1s-1.672.39-2.222 1H1.5A1.5 1.5 0 0 0 0 5.5v4A1.5 1.5 0 0 0 1.5 11h13A1.5 1.5 0 0 0 16 9.5z"
  }));
};

module.exports.Projector = function Projector(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.5 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm11 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm-8-6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m2 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m-4 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M15 9.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h6.684A2.962 2.962 0 0 0 8 6a3 3 0 1 0 6 0c0-.353-.072-.686-.184-1h.684a.5.5 0 0 1 .5.5v4zM11 4a2 2 0 1 1-.001 4A2 2 0 0 1 11 4zm5 5.5v-4A1.5 1.5 0 0 0 14.5 4h-1.278c-.55-.61-1.337-1-2.222-1s-1.672.39-2.222 1H1.5A1.5 1.5 0 0 0 0 5.5v4A1.5 1.5 0 0 0 1.5 11h13A1.5 1.5 0 0 0 16 9.5z"
  }));
};

module.exports.ProtractorSolid = function ProtractorSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.497 12a6.49 6.49 0 0 1-2.821-.643L7.83 7.91a2.486 2.486 0 0 0 1.334 0l2.154 3.448c-.87.42-1.83.642-2.821.642m6.424 3.235-4.863-7.781A2.502 2.502 0 0 0 8.997 3.05V1.6c0-.331-.224-.6-.5-.6s-.5.269-.5.6v1.45a2.502 2.502 0 0 0-1.061 4.404l-2.125 3.4a6.49 6.49 0 0 1-2.663-3.952.5.5 0 1 0-.976.215 7.487 7.487 0 0 0 3.109 4.586l-2.208 3.532a.5.5 0 0 0 .848.53l2.222-3.556a7.472 7.472 0 0 0 3.354.79 7.462 7.462 0 0 0 3.354-.79l2.222 3.556a.5.5 0 1 0 .848-.53"
  }));
};

module.exports.Protractor = function Protractor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.497 12a6.49 6.49 0 0 1-2.821-.643L7.83 7.91a2.486 2.486 0 0 0 1.334 0l2.154 3.448c-.87.42-1.83.642-2.821.642m0-8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6.424 11.235-4.863-7.781A2.502 2.502 0 0 0 8.997 3.05V1.6c0-.331-.224-.6-.5-.6s-.5.269-.5.6v1.45a2.502 2.502 0 0 0-1.061 4.404l-2.125 3.4a6.49 6.49 0 0 1-2.663-3.952.5.5 0 1 0-.976.215 7.487 7.487 0 0 0 3.109 4.586l-2.208 3.532a.5.5 0 0 0 .848.53l2.222-3.556a7.472 7.472 0 0 0 3.354.79 7.462 7.462 0 0 0 3.354-.79l2.222 3.556a.5.5 0 1 0 .848-.53"
  }));
};

module.exports.PuzzlePieceSolid = function PuzzlePieceSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10.31 1.695a2.995 2.995 0 1 1 4.01 4.023l1.243 1.247a1.497 1.497 0 0 1-.003 2.117l-6.503 6.481a1.498 1.498 0 0 1-2.114 0L.44 9.082a1.497 1.497 0 0 1-.003-2.117l1.77-1.777a.5.5 0 0 1 .842.25 1.998 1.998 0 1 0 2.357-2.365.5.5 0 0 1-.253-.841L6.938.44A1.498 1.498 0 0 1 9.056.437l1.254 1.258z"
  }));
};

module.exports.PuzzlePiece = function PuzzlePiece(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.144 7.67a.5.5 0 0 0 .001.705l6.503 6.481a.5.5 0 0 0 .704 0l6.503-6.48a.5.5 0 0 0 .001-.707l-1.815-1.82a.5.5 0 0 1 .273-.846 1.997 1.997 0 1 0-2.293-2.3.5.5 0 0 1-.846.27L8.352 1.145a.5.5 0 0 0-.707 0L6.41 2.385a2.997 2.997 0 0 1-1.406 5.639c-1.13 0-2.131-.63-2.64-1.579L1.143 7.67zm9.166-5.975a2.995 2.995 0 1 1 4.01 4.023l1.243 1.247a1.497 1.497 0 0 1-.003 2.117l-6.503 6.481a1.498 1.498 0 0 1-2.114 0L.44 9.082a1.497 1.497 0 0 1-.003-2.117l1.77-1.777a.5.5 0 0 1 .842.25 1.998 1.998 0 1 0 2.357-2.365.5.5 0 0 1-.253-.841L6.938.44A1.498 1.498 0 0 1 9.056.437l1.254 1.258z"
  }));
};

module.exports.QuestionSolid = function QuestionSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm.495-3.5v-1c0-.37.177-.595.813-1.106.863-.693 1.187-1.106 1.187-1.894a2.5 2.5 0 1 0-5 0 .5.5 0 1 0 1 0 1.5 1.5 0 1 1 3 0c0 .378-.178.604-.82 1.12-.857.688-1.18 1.098-1.18 1.88v1a.5.5 0 1 0 1 0z"
  }));
};

module.exports.Question = function Question(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm.495-3.5a.5.5 0 0 1-1 0v-1c0-.782.323-1.192 1.18-1.88.642-.516.82-.742.82-1.12a1.5 1.5 0 0 0-3 0 .5.5 0 0 1-1 0 2.5 2.5 0 1 1 5 0c0 .788-.324 1.201-1.187 1.894-.636.511-.813.735-.813 1.106v1z"
  }));
};

module.exports.QuoteLeftSolid = function QuoteLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 9.5V13c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2V6.8C9 3.9 10.9 2 13.8 2h.5c.39 0 .7.31.7.7v.6c0 .39-.31.7-.7.7h-.5C12.25 4 11 5.25 11 6.8V7c0 .55.45 1 1 1h2.5c.83 0 1.5.67 1.5 1.5zm-9 0V13c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6.8C0 3.9 1.9 2 4.8 2h.5c.39 0 .7.31.7.7v.6c0 .39-.31.7-.7.7h-.5C3.25 4 2 5.25 2 6.8V7c0 .55.45 1 1 1h2.5C6.33 8 7 8.67 7 9.5z"
  }));
};

module.exports.QuoteLeft = function QuoteLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14.5 2a.5.5 0 1 1 0 1C11.587 3 10 4.824 10 8h4.5A1.5 1.5 0 0 1 16 9.5V13a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8c0-3.7 2.001-6 5.5-6zm0 7H10v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.5a.5.5 0 0 0-.5-.5zM1 8h4.5A1.5 1.5 0 0 1 7 9.5V13a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-3.7 2.001-6 5.5-6a.5.5 0 0 1 0 1C2.587 3 1 4.824 1 8zm0 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.5a.5.5 0 0 0-.5-.5H1z"
  }));
};

module.exports.QuoteRightSolid = function QuoteRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 6.5V3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v6.2c0 2.9-1.9 4.8-4.8 4.8h-.5c-.39 0-.7-.31-.7-.7v-.6c0-.39.31-.7.7-.7h.5c1.55 0 2.8-1.25 2.8-2.8V9c0-.55-.45-1-1-1h-2.5C9.67 8 9 7.33 9 6.5zm-9 0V3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v6.2C7 12.1 5.1 14 2.2 14h-.5c-.39 0-.7-.31-.7-.7v-.6c0-.39.31-.7.7-.7h.5C3.75 12 5 10.75 5 9.2V9c0-.55-.45-1-1-1H1.5C.67 8 0 7.33 0 6.5z"
  }));
};

module.exports.QuoteRight = function QuoteRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15 9h-4.5A1.5 1.5 0 0 1 9 7.5V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v5c0 3.7-2.001 6-5.5 6a.5.5 0 1 1 0-1c2.913 0 4.5-1.824 4.5-5zm0-1V4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3.5a.5.5 0 0 0 .5.5H15zM6 9H1.5A1.5 1.5 0 0 1 0 7.5V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v5c0 3.7-2.001 6-5.5 6a.5.5 0 1 1 0-1C4.413 14 6 12.176 6 9zm0-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v3.5a.5.5 0 0 0 .5.5H6z"
  }));
};

module.exports.Reddit = function Reddit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 512 512"
  }), React.createElement("path", {
    d: "M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"
  }));
};

module.exports.RemoveCircleSolid = function RemoveCircleSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5.5 8.5h5a.5.5 0 1 0 0-1h-5a.5.5 0 0 0 0 1z"
  }));
};

module.exports.RemoveCircle = function RemoveCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM5.5 8.5a.5.5 0 0 1 0-1h5a.5.5 0 1 1 0 1h-5z"
  }));
};

module.exports.RemoveSolid = function RemoveSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 7h10a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z"
  }));
};

module.exports.Remove = function Remove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 16"
  }), React.createElement("path", {
    d: "M3.5 8.5a.5.5 0 0 1 0-1h11a.5.5 0 1 1 0 1h-11z"
  }));
};

module.exports.SearchSolid = function SearchSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m10.89 9.477 4.817 4.816a1 1 0 0 1-1.414 1.414l-4.816-4.816a6 6 0 1 1 1.414-1.414zM6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10z"
  }));
};

module.exports.Search = function Search(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 6a5 5 0 1 1 10.001 0A5 5 0 0 1 1 6m5-6a6 6 0 0 0 0 12 5.975 5.975 0 0 0 3.872-1.42l5.274 5.274a.502.502 0 0 0 .708-.708l-5.275-5.274A5.97 5.97 0 0 0 12 6a6 6 0 0 0-6-6"
  }));
};

module.exports.SendSolid = function SendSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M.371 6.017a.5.5 0 0 0-.183.873l2.507 2.006a.5.5 0 0 0 .515.066L11 5.5l-6.79 4.851a.5.5 0 0 0-.21.407v3.741a.5.5 0 0 0 .778.416l2.968-1.979 2.442 1.953a.5.5 0 0 0 .774-.197l4.998-12a.5.5 0 0 0-.59-.674l-14.999 4z"
  }));
};

module.exports.Send = function Send(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m1.585 6.728 10.912-2.91-8.103 5.157-2.809-2.247zm8.709 6.966L5.218 9.635l9.207-5.859-4.132 9.918zM5 13.434V10.74l1.764 1.411L5 13.434zm-.223 1.473 2.845-2.069 2.566 2.052a.499.499 0 0 0 .772-.198l5-12a.5.5 0 0 0-.59-.675l-14.998 4a.5.5 0 0 0-.183.874L4 9.941v4.512c0 .436.446.696.777.454z"
  }));
};

module.exports.ShareSolid = function ShareSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 12.5a2.5 2.5 0 1 0 4.996-.146l6.532-2.333A2.49 2.49 0 0 0 13.5 11a2.5 2.5 0 1 0 0-5 2.49 2.49 0 0 0-1.972.979L4.986 4.643C4.988 4.594 5 4.549 5 4.5A2.5 2.5 0 1 0 2.5 7c.979 0 1.817-.568 2.228-1.388l6.358 2.271A2.47 2.47 0 0 0 11 8.5c0 .214.035.418.086.617l-6.348 2.267A2.5 2.5 0 0 0 0 12.5z"
  }));
};

module.exports.Share = function Share(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15 8a2 2 0 1 1-4.001-.002A2 2 0 0 1 15 8zM1 4a2 2 0 1 1 4.001 0A2 2 0 0 1 1 4zm0 8a2 2 0 1 1 4.001 0A2 2 0 0 1 1 12zm-1 0a3 3 0 1 0 6 0c0-.058-.014-.113-.018-.17l4.586-2.084A2.993 2.993 0 0 0 16 8a3 3 0 0 0-3-3 2.99 2.99 0 0 0-2.541 1.42L5.981 4.183C5.985 4.12 6 4.062 6 4a3 3 0 1 0-.246 1.187l4.322 2.16A2.991 2.991 0 0 0 10 8c0 .295.056.575.135.844L5.764 10.83A3.002 3.002 0 0 0 0 12z"
  }));
};

module.exports.ShopCartSolid = function ShopCartSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 16a1.5 1.5 0 1 0 .001-3 1.5 1.5 0 0 0-.001 3zm5.5-1.5a1.5 1.5 0 1 0 2.999.001A1.5 1.5 0 0 0 11 14.5zm4.98-10.808a.5.5 0 0 0-.48-.64H3.198l-.202-1.614A.5.5 0 0 0 2.5 1h-2a.5.5 0 1 0 0 1h1.558l.946 7.562C3.274 11.03 4.502 12 6 12h7.5a.5.5 0 0 0 0-1H6c-.57 0-1.074-.197-1.438-.536l6.971-.465a3.868 3.868 0 0 0 3.45-2.87l.997-3.437z"
  }));
};

module.exports.ShopCart = function ShopCart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.5 15a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 .001-3 1.5 1.5 0 0 0-.001 3zm6.5-1.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0zm-1 0a1.5 1.5 0 1 0 2.999.001A1.5 1.5 0 0 0 11 14.5zM4.01 9.498c-.004-.02-.233-1.834-.687-5.445h11.511L14.02 6.86A2.867 2.867 0 0 1 11.464 9l-7.454.497zm11.97-5.806a.5.5 0 0 0-.48-.64H3.198l-.202-1.614A.5.5 0 0 0 2.5 1h-2a.5.5 0 1 0 0 1h1.558l.946 7.562C3.274 11.03 4.502 12 6 12h7.5a.5.5 0 0 0 0-1H6c-.57 0-1.074-.197-1.438-.536l6.971-.465a3.868 3.868 0 0 0 3.45-2.87l.997-3.437z"
  }));
};

module.exports.ShopSolid = function ShopSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 13.5a1.5 1.5 0 0 1-1.5 1.5H10v-2a2 2 0 0 0-4 0v2H3.5A1.5 1.5 0 0 1 2 13.5V9c.597 0 1.134-.262 1.5-.677.366.415.903.677 1.5.677s1.134-.262 1.5-.677C6.866 8.738 7.403 9 8 9s1.134-.262 1.5-.677c.366.415.903.677 1.5.677s1.134-.262 1.5-.677c.366.415.903.677 1.5.677v4.5zM12.5 16a2.5 2.5 0 0 0 2.5-2.5V8.732c.598-.345 1-.992 1-1.732l-1.618-6H1.618L0 7a2 2 0 0 0 1 1.732V13.5A2.5 2.5 0 0 0 3.5 16h9z"
  }));
};

module.exports.Shop = function Shop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.382 2h11.236l1.38 5.06A1 1 0 0 1 13 7h-1a1 1 0 0 1-2 0H9a1 1 0 0 1-2 0H6a1 1 0 0 1-2 0H3a1 1 0 0 1-1.998.06L2.382 2zM14 13.5a1.5 1.5 0 0 1-1.5 1.5H10v-2a2 2 0 0 0-4 0v2H3.5A1.5 1.5 0 0 1 2 13.5V9c.597 0 1.134-.262 1.5-.677.366.415.903.677 1.5.677s1.134-.262 1.5-.677C6.866 8.738 7.403 9 8 9s1.134-.262 1.5-.677c.366.415.903.677 1.5.677s1.134-.262 1.5-.677c.366.415.903.677 1.5.677v4.5zM7 15v-2a1 1 0 0 1 2 0v2H7zm5.5 1a2.5 2.5 0 0 0 2.5-2.5V8.732c.598-.345 1-.992 1-1.732l-1.618-6H1.618L0 7a2 2 0 0 0 1 1.732V13.5A2.5 2.5 0 0 0 3.5 16h9z"
  }));
};

module.exports.SingleSolid = function SingleSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M15 14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1c0-3.645 2.955-6 7-6s7 2.355 7 6zM8 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
  }));
};

module.exports.Single = function Single(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-4 9.5v.5a.5.5 0 0 0 1 0v-.5C2 11.353 4.604 9 8 9s6 2.353 6 5.5v.5a.5.5 0 0 0 1 0v-.5c0-2.98-1.972-5.35-4.771-6.179a4 4 0 1 0-4.457 0C2.972 9.151 1 11.52 1 14.501"
  }));
};

module.exports.Skype = function Skype(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M15.54 9.698a7.44 7.44 0 0 0 .176-1.615c0-4.155-3.416-7.524-7.631-7.524-.444 0-.88.038-1.305.11A4.447 4.447 0 0 0 4.426 0C1.981 0 0 1.953 0 4.364a4.3 4.3 0 0 0 .608 2.207 7.48 7.48 0 0 0-.155 1.512c0 4.156 3.417 7.525 7.632 7.525a7.85 7.85 0 0 0 1.398-.126c.623.33 1.334.518 2.092.518C14.019 16 16 14.046 16 11.637c0-.697-.166-1.354-.46-1.939zM12 11.68c-.354.494-.875.883-1.552 1.16-.67.274-1.47.414-2.384.414-1.096 0-2.015-.19-2.733-.566a3.542 3.542 0 0 1-1.256-1.1c-.324-.46-.488-.917-.488-1.359a.94.94 0 0 1 .318-.71c.209-.194.477-.292.797-.292.261 0 .488.077.671.23.176.148.327.366.448.645.136.306.282.564.438.765.15.197.366.36.64.49.277.128.65.194 1.109.194.63 0 1.148-.133 1.537-.395.38-.255.565-.563.565-.939a.922.922 0 0 0-.294-.713A2.136 2.136 0 0 0 9 9.06a16.47 16.47 0 0 0-1.4-.343c-.793-.167-1.466-.364-2-.59-.547-.229-.989-.547-1.311-.944-.328-.406-.494-.913-.494-1.51 0-.567.174-1.08.518-1.521.34-.439.84-.782 1.482-1.015.633-.23 1.386-.347 2.239-.347.68 0 1.28.077 1.78.231.504.154.927.362 1.26.619.336.26.586.535.742.823.159.29.24.578.24.857 0 .27-.106.514-.314.726a1.053 1.053 0 0 1-.783.324c-.283 0-.505-.068-.657-.202-.143-.125-.292-.32-.456-.598a2.495 2.495 0 0 0-.685-.836c-.257-.193-.685-.29-1.275-.29-.546 0-.991.108-1.322.323-.318.205-.473.441-.473.721 0 .17.05.315.154.437.107.132.26.245.454.341.2.1.407.18.614.235.212.058.567.145 1.056.256.618.13 1.185.277 1.686.436.51.16.948.356 1.307.587.365.234.654.535.86.895.206.362.31.807.31 1.326 0 .62-.18 1.184-.534 1.678z"
  }));
};

module.exports.SmileSolid = function SmileSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 9.5C4 11.297 5.889 13 8 13c2.111 0 4-1.703 4-3.5a.5.5 0 1 0-1 0c0 1.22-1.42 2.5-3 2.5s-3-1.28-3-2.5a.5.5 0 0 0-1 0z"
  }));
};

module.exports.Smile = function Smile(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4 9.5a.5.5 0 0 1 1 0C5 10.72 6.42 12 8 12s3-1.28 3-2.5a.5.5 0 1 1 1 0c0 1.797-1.889 3.5-4 3.5-2.111 0-4-1.703-4-3.5zM5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.SofaSolid = function SofaSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "M3.5 0A2.5 2.5 0 0 0 1 2.5V4h.5A1.5 1.5 0 0 1 3 5.5v3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-3A1.5 1.5 0 0 1 12.5 4h.5V2.5A2.5 2.5 0 0 0 10.5 0h-7zm9 5a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V11a2 2 0 0 0 2 2v.5a.5.5 0 0 0 1 0V13h8v.5a.5.5 0 0 0 1 0V13a2 2 0 0 0 2-2V5.5a.5.5 0 0 0-.5-.5h-1z"
  })), React.createElement("use", {
    xlinkHref: "#a",
    fillRule: "evenodd",
    transform: "translate(1 1)"
  }));
};

module.exports.Sofa = function Sofa(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V6h1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v5.5zM4 10h8V9H4v1zM3 3.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5V5a1 1 0 0 0-1 1v2H4V6a1 1 0 0 0-1-1V3.5zM4.5 1A2.5 2.5 0 0 0 2 3.5V5a1 1 0 0 0-1 1v5.5c0 1.209.859 2.218 2 2.45v.55a.5.5 0 0 0 1 0V14h8v.5a.5.5 0 0 0 1 0v-.55a2.502 2.502 0 0 0 2-2.45V6a1 1 0 0 0-1-1V3.5A2.5 2.5 0 0 0 11.5 1h-7z"
  }));
};

module.exports.Spotify = function Spotify(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M12.72 7.12C10.16 5.6 5.88 5.44 3.44 6.2a.75.75 0 0 1-.92-.48c-.12-.4.12-.8.48-.92 2.84-.84 7.52-.68 10.48 1.08.36.2.48.68.28 1.04-.2.28-.68.4-1.04.2m-.08 2.24c-.2.28-.56.4-.84.2-2.16-1.32-5.44-1.72-7.96-.92-.32.08-.68-.08-.76-.4-.08-.32.08-.68.4-.76 2.92-.88 6.52-.44 9 1.08.24.12.36.52.16.8m-.96 2.2c-.16.24-.44.32-.68.16-1.88-1.16-4.24-1.4-7.04-.76-.28.08-.52-.12-.6-.36-.08-.28.12-.52.36-.6 3.04-.68 5.68-.4 7.76.88.28.12.32.44.2.68M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.56-8-8-8"
  }));
};

module.exports.StackSolid = function StackSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 10.948 7.289-3.401a.5.5 0 1 1 .422.906l-7.5 3.5a.5.5 0 0 1-.422 0l-7.5-3.5a.5.5 0 0 1 .422-.906L8 10.948zm0 3 7.289-3.401a.5.5 0 1 1 .422.906l-7.5 3.5a.5.5 0 0 1-.422 0l-7.5-3.5a.5.5 0 0 1 .422-.906L8 13.948zM7.789 1.047a.5.5 0 0 1 .422 0l7.5 3.5a.5.5 0 0 1 0 .906l-7.5 3.5a.5.5 0 0 1-.422 0l-7.5-3.5a.5.5 0 0 1 0-.906l7.5-3.5z"
  }));
};

module.exports.Stack = function Stack(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 10.948 7.289-3.401a.5.5 0 1 1 .422.906l-7.5 3.5a.5.5 0 0 1-.422 0l-7.5-3.5a.5.5 0 0 1 .422-.906L8 10.948zm0 3 7.289-3.401a.5.5 0 1 1 .422.906l-7.5 3.5a.5.5 0 0 1-.422 0l-7.5-3.5a.5.5 0 0 1 .422-.906L8 13.948zM7.789 1.047a.5.5 0 0 1 .422 0l7.5 3.5a.5.5 0 0 1 0 .906l-7.5 3.5a.5.5 0 0 1-.422 0l-7.5-3.5a.5.5 0 0 1 0-.906l7.5-3.5zM8 2.052 1.682 5 8 7.948 14.318 5 8 2.052z"
  }));
};

module.exports.StarSolid = function StarSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.164 5.53 7.544.294a.5.5 0 0 1 .911 0l2.38 5.238L15.55 6a.5.5 0 0 1 .28.875l-3.765 3.293 1.418 5.198a.5.5 0 0 1-.74.56L8 13.082l-4.742 2.845a.5.5 0 0 1-.74-.56l1.418-5.198L.17 6.876a.5.5 0 0 1 .28-.874l4.713-.471z"
  }));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.164 5.53 7.544.294a.5.5 0 0 1 .911 0l2.38 5.238L15.55 6a.5.5 0 0 1 .28.875l-3.765 3.293 1.418 5.198a.5.5 0 0 1-.74.56L8 13.082l-4.742 2.845a.5.5 0 0 1-.74-.56l1.418-5.198L.17 6.876a.5.5 0 0 1 .28-.874l4.713-.471zm.791.676a.5.5 0 0 1-.405.29l-3.853.386 3.133 2.74a.5.5 0 0 1 .153.509L3.81 14.43l3.933-2.36a.5.5 0 0 1 .514 0l3.933 2.36-1.173-4.3a.5.5 0 0 1 .153-.507l3.133-2.74-3.853-.386a.5.5 0 0 1-.405-.29L8 1.707 5.955 6.206z"
  }));
};

module.exports.StopSolid = function StopSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 7.293 5.854 5.146a.5.5 0 1 0-.708.708L7.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L8 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L8.707 8l2.147-2.146a.5.5 0 0 0-.708-.708L8 7.293zM4.686 0h6.627L16 4.686v6.628L11.313 16H4.686L0 11.314V4.686L4.686 0z"
  }));
};

module.exports.Stop = function Stop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m8 7.293 2.146-2.147a.5.5 0 0 1 .708.708L8.707 8l2.147 2.146a.5.5 0 0 1-.708.708L8 8.707l-2.146 2.147a.5.5 0 0 1-.708-.708L7.293 8 5.146 5.854a.5.5 0 1 1 .708-.708L8 7.293zM4.686 0h6.627L16 4.686v6.628L11.313 16H4.686L0 11.314V4.686L4.686 0zM1 10.9 5.1 15h5.799L15 10.9V5.1L10.899 1H5.1L1 5.1v5.8z"
  }));
};

module.exports.SuitcaseSolid = function SuitcaseSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10 15H6v.5a.5.5 0 1 1-1 0V15h-.5A2.5 2.5 0 0 1 2 12.5v-8A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v8a2.5 2.5 0 0 1-2.5 2.5H11v.5a.5.5 0 1 1-1 0V15zM5.5 6h5a.5.5 0 1 0 0-1h-5a.5.5 0 0 0 0 1zm0 3h5a.5.5 0 1 0 0-1h-5a.5.5 0 0 0 0 1zm0 3h5a.5.5 0 1 0 0-1h-5a.5.5 0 1 0 0 1zm1-11a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3z"
  }));
};

module.exports.Suitcase = function Suitcase(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.5 3A1.5 1.5 0 0 0 3 4.5v8A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 11.5 3h-7zM10 15H6v.5a.5.5 0 1 1-1 0V15h-.5A2.5 2.5 0 0 1 2 12.5v-8A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v8a2.5 2.5 0 0 1-2.5 2.5H11v.5a.5.5 0 1 1-1 0V15zM6.5 1a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm-1 5a.5.5 0 0 1 0-1h5a.5.5 0 1 1 0 1h-5zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 1 1 0 1h-5zm0 3a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5z"
  }));
};

module.exports.Telegram = function Telegram(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }), React.createElement("path", {
    d: "m446.7 98.6-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
  }));
};

module.exports.TelevisionSolid = function TelevisionSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 12.5A2.5 2.5 0 0 0 2.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13.5 3h-2.066L12.916.777a.5.5 0 1 0-.832-.554L10.232 3H5.768L3.916.223a.5.5 0 1 0-.832.554L4.566 3H2.5A2.5 2.5 0 0 0 0 5.5v7zM13 8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1zm.5 5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zM2 11.5A1.5 1.5 0 0 0 3.5 13h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 8.5 5h-5A1.5 1.5 0 0 0 2 6.5v5zm11.5-.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z"
  }));
};

module.exports.Television = function Television(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-7A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5m-15 0v7A2.5 2.5 0 0 0 2.5 15h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13.5 3h-2.066L12.916.777a.5.5 0 1 0-.832-.554L10.232 3H5.768L3.916.223a.5.5 0 1 0-.832.554L4.566 3H2.5A2.5 2.5 0 0 0 0 5.5M12 8h1V6h-1v2zm0 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zm-.5 4h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5zm-1 0v5A1.5 1.5 0 0 0 3.5 13h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 8.5 5h-5A1.5 1.5 0 0 0 2 6.5zm9.5 4.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1"
  }));
};

module.exports.ThCircleSolid = function ThCircleSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM2 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
  }));
};

module.exports.ThCircle = function ThCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm6 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-1a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
  }));
};

module.exports.ThSolid = function ThSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.5 2h2A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h-2A1.5 1.5 0 0 1 2 5.5v-2A1.5 1.5 0 0 1 3.5 2zm0 7h2A1.5 1.5 0 0 1 7 10.5v2A1.5 1.5 0 0 1 5.5 14h-2A1.5 1.5 0 0 1 2 12.5v-2A1.5 1.5 0 0 1 3.5 9zm7-7h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2A1.5 1.5 0 0 1 10.5 2zm0 7h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9 12.5v-2A1.5 1.5 0 0 1 10.5 9z"
  }));
};

module.exports.Th = function Th(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.5 10a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zm0-1h2A1.5 1.5 0 0 1 7 10.5v2A1.5 1.5 0 0 1 5.5 14h-2A1.5 1.5 0 0 1 2 12.5v-2A1.5 1.5 0 0 1 3.5 9zm0-6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zm0-1h2A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h-2A1.5 1.5 0 0 1 2 5.5v-2A1.5 1.5 0 0 1 3.5 2zm7 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zm0-1h2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-2A1.5 1.5 0 0 1 9 5.5v-2A1.5 1.5 0 0 1 10.5 2zm0 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zm0-1h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9 12.5v-2A1.5 1.5 0 0 1 10.5 9z"
  }));
};

module.exports.Tiktok = function Tiktok(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#161823",
    d: "M21.02 4a4 4 0 0 1-4-4h-4v16a4 4 0 1 1-4-4h1.334V8H9.021a8 8 0 1 0 8 8V6.92a8 8 0 0 0 4 1.08h1.333V4h-1.333z"
  }));
};

module.exports.Toutiao = function Toutiao(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#0A0A0A",
    d: "M23.984 3.607c.016.122.016.244.016.368v14.291L.02 19.607C0 19.485 0 19.363 0 19.24V4.858l23.984-1.25zM9.132 7.387l-1.719.095v4.961l-5.017.288v1.126l3.491-.198-1.545 2.036-1.899.108v1.127l3.185-.184v-.005l2.437-3.21 3.174-.18v-1.125l-2.107.12V7.387zm.984 6.36-1.902.094 1.359 2.668 1.902-.098-1.359-2.664zm5.044.306-1.719.098-1.144 2.218 1.719-.096 1.144-2.22zm2.412-2.165-1.719.098v.566l-3.561.203v1.127l3.561-.2v2.482l1.719-.098v-2.484l3.563-.201v-1.13l-3.563.203v-.566zm2.636 1.876-1.718.097 1.254 2.083 1.717-.097-1.253-2.083zM13.963 6.38l-1.752 2.782 1.453.528.935-1.486 4.686-.266v.273L16.67 9.499l-2.03-.748-.687 1.047 1.207.445-2.057 1.01-.813.046v1.127l1.225-.07v-.002l3.156-1.556 3.227 1.19v.005l1.239-.072v-1.126l-.825.047-2.13-.786 2.823-1.39V6.713l-1.718.098-3.952.225v-.002l-1.372-.654zM5.04 10.138l-1.895.107 1.387 1.748 1.897-.103-1.389-1.752zm0-2.183-1.895.105L4.53 9.812l1.897-.108L5.04 7.955z"
  }));
};

module.exports.TreeSolid = function TreeSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 15a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H9v-2.041c2.876-.209 5-2.162 5-4.959 0-3.391-2.81-8-5.5-8C5.809 0 3 4.606 3 8c0 2.797 2.124 4.75 5 4.959V15H3.5z"
  }));
};

module.exports.Tree = function Tree(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 1C10.507 1 13 5.09 13 8c0 2.215-1.656 3.763-4 3.96V8.707l1.854-1.853a.502.502 0 0 0-.708-.708L9 7.293V3.5a.5.5 0 0 0-1 0v3.793L6.854 6.146a.502.502 0 0 0-.708.708L8 8.707v3.253C5.656 11.763 4 10.215 4 8c0-2.912 2.492-7 4.5-7zm-5 14a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H9v-2.041c2.876-.21 5-2.162 5-4.96 0-3.39-2.81-8-5.5-8C5.809 0 3 4.607 3 8c0 2.798 2.124 4.75 5 4.96V15H3.5z"
  }));
};

module.exports.TriangleCircleDownSolid = function TriangleCircleDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM4.124 6.83l3.5 4a.5.5 0 0 0 .752 0l3.5-4A.5.5 0 0 0 11.5 6h-7a.5.5 0 0 0-.376.83z"
  }));
};

module.exports.TriangleCircleDown = function TriangleCircleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM4.124 6.83A.5.5 0 0 1 4.5 6h7a.5.5 0 0 1 .376.83l-3.5 4a.5.5 0 0 1-.752 0l-3.5-4zM8 9.74 10.398 7H5.602L8 9.74z"
  }));
};

module.exports.TriangleCircleLeftSolid = function TriangleCircleLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5.17 8.376l4 3.5A.5.5 0 0 0 10 11.5v-7a.5.5 0 0 0-.83-.376l-4 3.5a.5.5 0 0 0 0 .752z"
  }));
};

module.exports.TriangleCircleLeft = function TriangleCircleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM5.17 8.376a.5.5 0 0 1 0-.752l4-3.5A.5.5 0 0 1 10 4.5v7a.5.5 0 0 1-.83.376l-4-3.5zM9 10.398V5.602L6.26 8 9 10.398z"
  }));
};

module.exports.TriangleCircleRightSolid = function TriangleCircleRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm2.83-7.624a.5.5 0 0 0 0-.752l-4-3.5A.5.5 0 0 0 6 4.5v7a.5.5 0 0 0 .83.376l4-3.5z"
  }));
};

module.exports.TriangleCircleRight = function TriangleCircleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm1.74-7L7 5.602v4.796L9.74 8zm1.09.376-4 3.5A.5.5 0 0 1 6 11.5v-7a.5.5 0 0 1 .83-.376l4 3.5a.5.5 0 0 1 0 .752z"
  }));
};

module.exports.TriangleCircleUpSolid = function TriangleCircleUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM4.124 9.17A.5.5 0 0 0 4.5 10h7a.5.5 0 0 0 .376-.83l-3.5-4a.5.5 0 0 0-.752 0l-3.5 4z"
  }));
};

module.exports.TriangleCircleUp = function TriangleCircleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.602 9h4.796L8 6.26 5.602 9zm-1.478.17 3.5-4a.5.5 0 0 1 .752 0l3.5 4a.5.5 0 0 1-.376.83h-7a.5.5 0 0 1-.376-.83zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14z"
  }));
};

module.exports.TriangleDownMiniSolid = function TriangleDownMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.124 6.83A.5.5 0 0 1 4.5 6h7a.5.5 0 0 1 .376.83l-3.5 4a.5.5 0 0 1-.752 0l-3.5-4z"
  }));
};

module.exports.TriangleDownMini = function TriangleDownMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.124 6.83A.5.5 0 0 1 4.5 6h7a.5.5 0 0 1 .376.83l-3.5 4a.5.5 0 0 1-.752 0l-3.5-4zM8 9.74 10.398 7H5.602L8 9.74z"
  }));
};

module.exports.TriangleDownSolid = function TriangleDownSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M.088 3.782A.5.5 0 0 1 .5 3h14.998a.5.5 0 0 1 .413.782l-7.499 11a.5.5 0 0 1-.826 0l-7.5-11z"
  }));
};

module.exports.TriangleDown = function TriangleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M.087 3.782A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .413.782l-7.5 11a.5.5 0 0 1-.826 0l-7.5-11zM1.447 4 8 13.612 14.554 4H1.446z"
  }));
};

module.exports.TriangleLeftMiniSolid = function TriangleLeftMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.17 8.376a.5.5 0 0 1 0-.752l4-3.5A.5.5 0 0 1 10 4.5v7a.5.5 0 0 1-.83.376l-4-3.5z"
  }));
};

module.exports.TriangleLeftMini = function TriangleLeftMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.17 8.376a.5.5 0 0 1 0-.752l4-3.5A.5.5 0 0 1 10 4.5v7a.5.5 0 0 1-.83.376l-4-3.5zM6.26 8 9 10.398V5.602L6.26 8z"
  }));
};

module.exports.TriangleLeftSolid = function TriangleLeftSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.218 8.413a.5.5 0 0 1 0-.826l11-7.5A.5.5 0 0 1 13 .502V15.5a.5.5 0 0 1-.782.413l-11-7.499z"
  }));
};

module.exports.TriangleLeft = function TriangleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.218 8.413a.5.5 0 0 1 0-.826l11-7.5A.5.5 0 0 1 13 .5v15a.5.5 0 0 1-.782.413l-11-7.5zM2.388 8 12 14.554V1.446L2.388 8z"
  }));
};

module.exports.TriangleRightMiniSolid = function TriangleRightMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m10.83 8.376-4 3.5A.5.5 0 0 1 6 11.5v-7a.5.5 0 0 1 .83-.376l4 3.5a.5.5 0 0 1 0 .752z"
  }));
};

module.exports.TriangleRightMini = function TriangleRightMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M9.74 8 7 5.602v4.796L9.74 8zm1.09.376-4 3.5A.5.5 0 0 1 6 11.5v-7a.5.5 0 0 1 .83-.376l4 3.5a.5.5 0 0 1 0 .752z"
  }));
};

module.exports.TriangleRightSolid = function TriangleRightSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m14.782 8.413-11 7.5A.5.5 0 0 1 3 15.498V.501a.5.5 0 0 1 .782-.413l11 7.499a.5.5 0 0 1 0 .826z"
  }));
};

module.exports.TriangleRight = function TriangleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4 1.446v13.108L13.612 8 4 1.446zm10.782 6.967-11 7.5A.5.5 0 0 1 3 15.5V.5a.5.5 0 0 1 .782-.413l11 7.5a.5.5 0 0 1 0 .826z"
  }));
};

module.exports.TriangleUpMiniSolid = function TriangleUpMiniSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m4.124 9.17 3.5-4a.5.5 0 0 1 .752 0l3.5 4a.5.5 0 0 1-.376.83h-7a.5.5 0 0 1-.376-.83z"
  }));
};

module.exports.TriangleUpMini = function TriangleUpMini(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M5.602 9h4.796L8 6.26 5.602 9zm-1.478.17 3.5-4a.5.5 0 0 1 .752 0l3.5 4a.5.5 0 0 1-.376.83h-7a.5.5 0 0 1-.376-.83z"
  }));
};

module.exports.TriangleUpSolid = function TriangleUpSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m.088 12.218 7.499-11a.5.5 0 0 1 .826 0l7.5 11a.5.5 0 0 1-.414.782H.501a.5.5 0 0 1-.413-.782z"
  }));
};

module.exports.TriangleUp = function TriangleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.446 12h13.108L8 2.388 1.446 12zm-1.36.218 7.5-11a.5.5 0 0 1 .827 0l7.5 11A.5.5 0 0 1 15.5 13H.5a.5.5 0 0 1-.413-.782z"
  }));
};

module.exports.TrophySolid = function TrophySolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 3.95V6.5c0 2.314-1.753 4.198-4 4.45V15h2.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H8v-4.05c-2.247-.252-4-2.136-4-4.45V3.95A3.49 3.49 0 0 1 1 .5V0h15v.5a3.49 3.49 0 0 1-3 3.45zM4 1H2.05A2.505 2.505 0 0 0 4 2.95V1zm9 0v1.95A2.505 2.505 0 0 0 14.95 1H13z"
  }));
};

module.exports.Trophy = function Trophy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 1h7v5.5a3.5 3.5 0 1 1-7 0V1zM4 1v1.95A2.505 2.505 0 0 1 2.05 1H4zm9 0h1.95A2.505 2.505 0 0 1 13 2.95V1zm0 2.95A3.49 3.49 0 0 0 16 .5V0H1v.5a3.49 3.49 0 0 0 3 3.45V6.5c0 2.314 1.753 4.198 4 4.45V15H5.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H9v-4.05c2.247-.252 4-2.136 4-4.45V3.95z"
  }));
};

module.exports.TumblrSquare = function TumblrSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "m11.833 13.885-.645-1.906a2.37 2.37 0 0 1-1.073.23c-.25.006-.466-.03-.646-.11a.87.87 0 0 1-.401-.328 1.44 1.44 0 0 1-.183-.422 1.907 1.907 0 0 1-.052-.453V6.75h2.677V4.73H8.844V1.332H6.885c-.055 0-.086.035-.093.105a5.443 5.443 0 0 1-.183.906 5.749 5.749 0 0 1-.406.99 3.232 3.232 0 0 1-.802.989c-.35.299-.762.535-1.234.708v1.72H5.52v4.354c0 .396.074.795.224 1.198.15.403.375.788.677 1.156.302.368.722.665 1.26.891.538.226 1.151.332 1.839.318a4.41 4.41 0 0 0 1.422-.26c.468-.167.765-.341.89-.522zM16 3v10a2.89 2.89 0 0 1-.88 2.12A2.89 2.89 0 0 1 13 16H3a2.89 2.89 0 0 1-2.12-.88A2.89 2.89 0 0 1 0 13V3C0 2.174.293 1.467.88.88A2.89 2.89 0 0 1 3 0h10a2.89 2.89 0 0 1 2.12.88A2.89 2.89 0 0 1 16 3z"
  }));
};

module.exports.Tumblr = function Tumblr(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M11.247 12.778 12 15.056c-.144.225-.493.436-1.045.635A5.066 5.066 0 0 1 9.289 16a5.348 5.348 0 0 1-1.794-.25c-.543-.18-.99-.417-1.341-.712a4.423 4.423 0 0 1-.895-1.019 4.176 4.176 0 0 1-.677-2.288V6.5H3V4.431c.452-.166.857-.39 1.214-.668.358-.279.644-.567.857-.865a5.08 5.08 0 0 0 .546-.98c.15-.357.257-.674.32-.953.063-.279.11-.562.141-.85a.157.157 0 0 1 .043-.082A.098.098 0 0 1 6.19 0h2.297v4.077h3.135v2.422H8.48v4.98a1.894 1.894 0 0 0 .273 1.044c.1.17.256.303.466.399.21.096.466.141.767.135.49-.013.91-.106 1.262-.28z"
  }));
};

module.exports.TwitterSquare = function TwitterSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M13.333 5.02a4.634 4.634 0 0 1-1.26.355 2.13 2.13 0 0 0 .969-1.219 4.35 4.35 0 0 1-1.396.531A2.086 2.086 0 0 0 10.052 4c-.604 0-1.12.214-1.547.64a2.11 2.11 0 0 0-.64 1.547c0 .202.017.369.052.5a6.193 6.193 0 0 1-2.521-.677 6.201 6.201 0 0 1-2-1.614A2.167 2.167 0 0 0 3.094 5.5c0 .792.316 1.4.948 1.823-.327-.007-.674-.097-1.042-.27v.02c0 .52.174.984.52 1.39.348.407.775.659 1.282.756a2.032 2.032 0 0 1-.531.083c-.09 0-.226-.014-.406-.042.145.438.404.799.776 1.084.371.284.793.43 1.265.437a4.322 4.322 0 0 1-2.718.938c-.181 0-.355-.01-.521-.032a6.136 6.136 0 0 0 3.354.98 6.38 6.38 0 0 0 2.187-.37 5.635 5.635 0 0 0 1.75-.99 6.57 6.57 0 0 0 2.037-3.114c.17-.587.255-1.172.255-1.756 0-.125-.003-.218-.01-.28a4.252 4.252 0 0 0 1.093-1.136zM16 3v10a2.89 2.89 0 0 1-.88 2.12A2.89 2.89 0 0 1 13 16H3a2.89 2.89 0 0 1-2.12-.88A2.89 2.89 0 0 1 0 13V3C0 2.174.293 1.467.88.88A2.89 2.89 0 0 1 3 0h10a2.89 2.89 0 0 1 2.12.88A2.89 2.89 0 0 1 16 3z"
  }));
};

module.exports.Twitter = function Twitter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M16 3.544a6.873 6.873 0 0 1-1.645 1.696 9.322 9.322 0 0 1-.376 3.062 9.526 9.526 0 0 1-1.172 2.524 9.92 9.92 0 0 1-1.873 2.138c-.724.62-1.597 1.113-2.62 1.482A9.583 9.583 0 0 1 5.037 15 9.104 9.104 0 0 1 0 13.527c.237.027.5.041.792.041 1.523 0 2.88-.467 4.07-1.402a3.196 3.196 0 0 1-1.908-.655 3.209 3.209 0 0 1-1.157-1.62c.223.034.43.051.62.051.29 0 .578-.037.862-.112a3.226 3.226 0 0 1-1.883-1.132A3.17 3.17 0 0 1 .65 6.611v-.04c.46.257.954.395 1.482.416a3.276 3.276 0 0 1-1.066-1.168A3.197 3.197 0 0 1 .67 4.255c0-.596.149-1.148.447-1.656a9.296 9.296 0 0 0 2.99 2.422 9.134 9.134 0 0 0 3.771 1.011 3.645 3.645 0 0 1-.081-.752c0-.907.32-1.68.96-2.32a3.16 3.16 0 0 1 2.32-.96 3.16 3.16 0 0 1 2.395 1.036 6.428 6.428 0 0 0 2.081-.792 3.185 3.185 0 0 1-1.441 1.808A6.532 6.532 0 0 0 16 3.544z"
  }));
};

module.exports.UserGroupSolid = function UserGroupSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "M10 6.488c0 .604-.222 1.47-.666 2.597a.5.5 0 0 0 .223.62l2.157 1.198A2.5 2.5 0 0 1 13 13.089V14h2a1 1 0 0 0 1-1v-.911c0-.545-.296-1.047-.772-1.312l-3.021-1.679a.5.5 0 0 1-.151-.691c.625-.978.944-1.949.944-2.919C13 2.248 12.479 1 10 1c-.73 0-1.357.25-1.811.551C9.495 2.265 10 3.761 10 6.488zM3 6.5c0 .961.319 1.932.959 2.935a.499.499 0 0 1-.194.679L.772 11.777A1.502 1.502 0 0 0 0 13.089V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-.911c0-.545-.295-1.047-.771-1.312a3202.12 3202.12 0 0 1-3.022-1.679.5.5 0 0 1-.152-.69c.627-.98.945-1.95.945-2.92C9 3.248 8.478 2 6 2c-1.357 0-2.224.538-2.649 1.553C3.055 4.261 3 4.92 3 6.5z"
  })), React.createElement("use", {
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
};

module.exports.UserGroup = function UserGroup(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.428 9.418a1.5 1.5 0 0 1-.671 2.013l-2.48 1.24a.5.5 0 0 0-.277.447v.382a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-.382a.5.5 0 0 0-.276-.447l-2.482-1.24-.051-.028a1.5 1.5 0 0 1-.592-2.037c.604-1.1.901-2.056.901-2.866C8.5 4.166 7.82 3 6 3 4.179 3 3.5 4.165 3.5 6.5c0 .812.296 1.769.9 2.866a1.5 1.5 0 0 1 .028.052zM2.5 6.5C2.5 3.685 3.482 2 6 2s3.5 1.687 3.5 4.5c0 .998-.345 2.112-1.025 3.348a.5.5 0 0 0 .197.679l2.499 1.25a1.5 1.5 0 0 1 .829 1.34v.382a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 0 13.5v-.382a1.5 1.5 0 0 1 .83-1.342l2.48-1.24a.5.5 0 0 0 .223-.67C2.845 8.614 2.5 7.5 2.5 6.5zm6.638-4.39a.5.5 0 1 1-.276-.961A4.103 4.103 0 0 1 10 1c2.518 0 3.5 1.687 3.5 4.5 0 .998-.345 2.112-1.025 3.348a.5.5 0 0 0 .197.679l2.499 1.25a1.5 1.5 0 0 1 .829 1.34v.382a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 1 1 0-1h1a.5.5 0 0 0 .5-.5v-.382a.5.5 0 0 0-.276-.447l-2.482-1.24-.051-.028a1.5 1.5 0 0 1-.592-2.037c.604-1.1.901-2.056.901-2.866 0-2.334-.68-3.5-2.5-3.5-.325 0-.611.038-.862.11z"
  }));
};

module.exports.Vk = function Vk(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 576 512"
  }), React.createElement("path", {
    d: "M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"
  }));
};

module.exports.Wechat = function Wechat(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#7BB32E",
    d: "M16.153 7.826c.274 0 .545.02.813.05-.73-3.367-4.368-5.869-8.52-5.869C3.803 2.007 0 5.14 0 9.114c0 2.295 1.266 4.18 3.38 5.641l-.845 2.515 2.952-1.465c1.057.206 1.904.42 2.959.42.265 0 .527-.014.788-.034a6.155 6.155 0 0 1-.261-1.75c0-3.652 3.168-6.615 7.18-6.615zm-4.54-2.266c.636 0 1.057.415 1.057 1.044 0 .626-.421 1.045-1.057 1.045-.634 0-1.268-.42-1.268-1.045 0-.63.634-1.044 1.268-1.044zm-5.91 2.09c-.634 0-1.273-.42-1.273-1.047 0-.628.639-1.043 1.272-1.043s1.055.415 1.055 1.043c0 .627-.422 1.046-1.055 1.046zm18.158 6.69c0-3.342-3.379-6.065-7.173-6.065-4.018 0-7.183 2.723-7.183 6.065 0 3.346 3.165 6.063 7.183 6.063.84 0 1.689-.208 2.533-.418l2.317 1.255-.635-2.088c1.695-1.259 2.958-2.928 2.958-4.812zm-9.502-1.046c-.42 0-.845-.414-.845-.836 0-.417.424-.836.845-.836.638 0 1.057.42 1.057.836 0 .422-.419.836-1.057.836zm4.645 0c-.417 0-.84-.414-.84-.836 0-.417.423-.836.84-.836.633 0 1.057.42 1.057.836 0 .422-.424.836-1.057.836z"
  }));
};

module.exports.Weibo = function Weibo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#E6162D",
    d: "M23.6 10.322a.918.918 0 0 1-1.15.595.883.883 0 0 1-.53-.458.92.92 0 0 1-.056-.7 4.506 4.506 0 0 0-.941-4.414 4.495 4.495 0 0 0-4.278-1.391.912.912 0 0 1-1.085-.708.912.912 0 0 1 .708-1.085 6.306 6.306 0 0 1 6.022 1.954 6.39 6.39 0 0 1 1.31 6.207zm-6.335-3.425a.783.783 0 0 1-.933-.603.796.796 0 0 1 .603-.941 3.078 3.078 0 0 1 2.935.949c.763.852.972 2.01.643 3.023a.781.781 0 0 1-.99.506.787.787 0 0 1-.506-.997 1.523 1.523 0 0 0-.313-1.479 1.535 1.535 0 0 0-1.44-.458zm.7 4.478c-.339-.104-.572-.169-.395-.61.378-.966.418-1.794.008-2.389-.78-1.11-2.902-1.053-5.33-.032 0 0-.764.338-.571-.273.378-1.206.321-2.22-.266-2.798-1.318-1.327-4.832.048-7.839 3.063C1.321 10.596.01 12.99.01 15.066c0 3.963 5.066 6.367 10.026 6.367 6.497 0 10.823-3.787 10.823-6.794 0-1.809-1.528-2.838-2.895-3.264zm-7.912 8.643c-3.956.394-7.373-1.399-7.63-4.004-.258-2.605 2.741-5.033 6.697-5.427 3.956-.394 7.373 1.4 7.63 4.004.25 2.605-2.742 5.033-6.697 5.427zm.393-7.429c-1.88-.49-4.012.45-4.824 2.115-.836 1.696-.024 3.578 1.874 4.197 1.97.635 4.293-.338 5.097-2.171.796-1.793-.2-3.634-2.147-4.14zm-1.439 4.334c-.386.61-1.198.884-1.817.595-.61-.274-.788-.99-.402-1.584.378-.595 1.166-.86 1.785-.603.611.265.812.973.434 1.592z"
  }));
};

module.exports.Whatsapp = function Whatsapp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 448 512"
  }), React.createElement("path", {
    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
  }));
};

module.exports.WifiSolid = function WifiSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10 15a1 1 0 0 1-2 0v-1a6 6 0 0 0-6-6H1a1 1 0 1 1 0-2h1a8 8 0 0 1 8 8v1zm-8 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14-1a1 1 0 0 1-2 0v-1C14 7.373 8.627 2 2 2H1a1 1 0 1 1 0-2h1c7.732 0 14 6.268 14 14v1z"
  }));
};

module.exports.Wifi = function Wifi(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12 15.5a.5.5 0 1 1-1 0V15C11 9.276 6.724 5 1 5H.5a.5.5 0 0 1 0-1H1c6.276 0 11 4.724 11 11v.5zm-4 0a.5.5 0 1 1-1 0V15c0-3.725-2.274-6-6-6H.5a.5.5 0 0 1 0-1H1c4.279 0 7 2.722 7 7v.5zm8 0a.5.5 0 1 1-1 0V15C15 6.276 9.724 1 1 1H.5a.5.5 0 0 1 0-1H1c9.276 0 15 5.724 15 15v.5zM2 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

module.exports.WindowsSolid = function WindowsSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 4h14v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5V4zm11.5 11a3.5 3.5 0 0 0 3.5-3.5v-10a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v10A3.5 3.5 0 0 0 3.5 15h9zM3 2.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0zm2 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0zm2 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
  }));
};

module.exports.Windows = function Windows(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 11.5V6h14v5.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5zM1 5h14V2H1v3zm11.5 10a3.5 3.5 0 0 0 3.5-3.5v-10a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v10A3.5 3.5 0 0 0 3.5 15h9zM2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
  }));
};

module.exports.WindySolid = function WindySolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "M7.647 3.78a.75.75 0 0 0 1.432.447 1.752 1.752 0 0 1 3.421.523 1.75 1.75 0 0 1-1.75 1.75h-8a.75.75 0 0 0 0 1.5h8a3.25 3.25 0 1 0-3.103-4.22zM.75 9a.75.75 0 0 0 0 1.5h12a1.75 1.75 0 1 1-1.67 2.275.75.75 0 0 0-1.431.449A3.25 3.25 0 1 0 12.75 9h-12z"
  })), React.createElement("use", {
    xlinkHref: "#a",
    fillRule: "evenodd"
  }));
};

module.exports.Windy = function Windy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11 7H2.5a.5.5 0 0 0 0 1H11a3 3 0 1 0-3-3 .5.5 0 0 0 1 0 2 2 0 1 1 2 2m-9.5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zM0 9.5a.5.5 0 0 0 .5.5H13a2 2 0 1 1-2 2 .5.5 0 0 0-1 0 3 3 0 1 0 3-3H.5a.5.5 0 0 0-.5.5"
  }));
};

module.exports.Wordpress = function Wordpress(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m1.732 5.206 3.274 8.968A6.856 6.856 0 0 1 1.14 8c0-.997.213-1.939.593-2.794zm10.9 2.449c0-.849-.303-1.436-.564-1.894-.349-.564-.674-1.045-.674-1.61 0-.632.477-1.219 1.151-1.219a.71.71 0 0 1 .09.007A6.84 6.84 0 0 0 8 1.135 6.858 6.858 0 0 0 2.265 4.23c.16.006.312.01.441.01.717 0 1.83-.087 1.83-.087.37-.023.412.522.045.564 0 0-.371.042-.784.065l2.5 7.432L7.8 7.71 6.732 4.78c-.37-.022-.72-.064-.72-.064-.37-.022-.325-.587.043-.564 0 0 1.132.087 1.806.087.716 0 1.83-.087 1.83-.087.37-.023.412.522.044.564 0 0-.37.042-.783.065l2.48 7.377.684-2.287c.29-.948.516-1.63.516-2.216zM8.12 8.6l-2.058 5.984a6.822 6.822 0 0 0 4.216-.11.514.514 0 0 1-.048-.093L8.119 8.6zm5.904-3.894c.029.22.045.452.045.707 0 .697-.13 1.477-.523 2.458l-2.097 6.061A6.857 6.857 0 0 0 14.861 8a6.834 6.834 0 0 0-.838-3.294zM16 8c0 4.413-3.59 8-8 8-4.413 0-8-3.59-8-8 0-4.413 3.587-8 8-8 4.41 0 8 3.587 8 8zm-.368 0C15.632 3.79 12.206.368 8 .368A7.638 7.638 0 0 0 .368 8c0 4.21 3.426 7.632 7.632 7.632A7.638 7.638 0 0 0 15.632 8z"
  }));
};

module.exports.WrenchSolid = function WrenchSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.285 15.437a1.925 1.925 0 0 1-2.721-2.722 2794.01 2794.01 0 0 1 5.767-5.756A5.027 5.027 0 0 1 12.59.266a.5.5 0 0 1 .184.842l-2.053 1.896a.5.5 0 0 0-.15.466l.267 1.339a.5.5 0 0 0 .37.387l.881.22a.5.5 0 0 0 .454-.11l2.383-2.119a.5.5 0 0 1 .805.212A5.027 5.027 0 0 1 9.07 9.681c-1.002.984-2.93 2.903-5.785 5.756z"
  }));
};

module.exports.Wrench = function Wrench(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.274 13.426a.92.92 0 1 0 1.3 1.3 1049.63 1049.63 0 0 1 6.037-6.004.501.501 0 0 1 .574-.092A4.022 4.022 0 0 0 14.96 4.5l-2.147 1.91a.5.5 0 0 1-.454.11l-2.013-.503a.5.5 0 0 1-.369-.386l-.504-2.517a.5.5 0 0 1 .151-.466l1.756-1.622a4.022 4.022 0 0 0-3.999 5.816.5.5 0 0 1-.092.583c-.902.892-2.907 2.893-6.016 6zm2.011 2.01a1.925 1.925 0 0 1-2.721-2.722A2794.01 2794.01 0 0 1 6.331 6.96 5.027 5.027 0 0 1 12.59.266a.5.5 0 0 1 .184.842l-2.053 1.896a.5.5 0 0 0-.15.466l.267 1.339a.5.5 0 0 0 .37.387l.881.22a.5.5 0 0 0 .454-.11l2.383-2.119a.5.5 0 0 1 .805.212A5.027 5.027 0 0 1 9.07 9.681c-1.002.984-2.93 2.903-5.785 5.756z"
  }));
};

module.exports.Xiaohongshu = function Xiaohongshu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#FF2741",
    d: "M.374 9.678c.09.905.09 1.99-.18 3.256 0 .271-.09.452-.181.724 0 0 .271.542.904 1.537 1.176-.995 1.085-5.517 1.085-5.517H.374zm7.235 3.346c-.18-1.175-.27-2.26-.18-3.255H5.8s-.181 4.522 1.085 5.516c.543-1.085.904-1.537.904-1.537-.09-.18-.09-.452-.18-.724zm-4.521 1.719H2.002l.543 1.266h1.447c.543 0 .723-.995.723-.995V7.69H3.088v7.054zm7.325-2.08L11.77 9.95h-1.357l.814-2.261H9.69l-1.176 2.984c-.09.271.09.543.362.543h.814l-.905 2.08c-.09.271.09.542.362.542h1.99l.452-1.175h-1.176zm-1.9 1.899L7.7 16.009h2.532l.633-1.447H8.514zm6.512-4.793h.814V8.14h-3.617v1.537h1.085v4.793H11.86l-.723 1.538h5.245v-1.447h-1.357V9.769zm7.416 1.447h-.362V9.769c.09-.814-.633-1.538-1.447-1.538h-1.085v-.723H18.01v.723h-1.086v1.447h1.086v1.447h-1.538v1.447h1.538v3.437h1.537v-3.346h2.894v2.17h-1.537l.542 1.266h1.266c.634 0 1.176-.542 1.176-1.175v-2.17c.09-.905-.542-1.538-1.447-1.538zm-1.809 0h-1.085V9.678h1.085v1.538zm3.347-2.261c0-.362-.362-.724-.724-.724s-.723.362-.723.724v.723h.723c.362 0 .724-.361.724-.723z"
  }));
};

module.exports.Youtube = function Youtube(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#333",
    d: "M6.348 10.213V5.419l4.323 2.405-4.323 2.389zm9.492-5.624s-.156-1.176-.636-1.694c-.609-.68-1.29-.683-1.603-.722C11.362 2 8.003 2 8.003 2h-.006s-3.359 0-5.598.173c-.313.04-.994.042-1.603.722C.316 3.413.16 4.59.16 4.59S0 5.969 0 7.349v1.295c0 1.381.16 2.762.16 2.762s.156 1.175.635 1.693c.61.68 1.409.658 1.765.73C3.84 13.958 8 14 8 14s3.362-.005 5.601-.178c.313-.04.994-.043 1.603-.723.48-.518.636-1.693.636-1.693s.16-1.38.16-2.762V7.35c0-1.38-.16-2.761-.16-2.761z"
  }));
};

module.exports.Zhihu = function Zhihu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#0084FF",
    d: "M11.75 11.47H7.89V5.566h3.414a1.01 1.01 0 0 0 1.011-1.004c0-.554-.454-1.004-1.011-1.004H4.765c.173-.737.225-1.392.268-1.941l.005-.064c.013-.154.025-.299.04-.432A1.006 1.006 0 0 0 4.18.015a.998.998 0 0 0-1.115.89c-.019.17-.033.348-.048.537l-.002.017C2.9 2.939 2.752 4.78.33 6.983a.993.993 0 0 0-.328.7.993.993 0 0 0 .27.724 1.019 1.019 0 0 0 1.424.057c1.019-.925 1.781-1.877 2.32-2.899l.056.002h1.795v5.902h-4.6a1.01 1.01 0 0 0-1.013 1.004 1.01 1.01 0 0 0 1.012 1.004h4.569C5.65 16.4 4.594 20.07.81 21.96a.999.999 0 0 0-.446 1.352 1.014 1.014 0 0 0 1.356.44c2.733-1.363 4.597-3.608 5.513-6.59a.998.998 0 0 0 .204.391l3.19 3.786a1.014 1.014 0 0 0 1.42.13.995.995 0 0 0 .133-1.418l-3.19-3.786a1.018 1.018 0 0 0-1.502-.056 16.16 16.16 0 0 0 .374-2.732h3.887a1.01 1.01 0 0 0 1.012-1.004 1.01 1.01 0 0 0-1.012-1.004zm11.046-8.105h-7.89a1.01 1.01 0 0 0-1.012 1.004v14.584a1.01 1.01 0 0 0 1.011 1.004h.594l.138 2.458.002.022a1.005 1.005 0 0 0 1.007.902c.229 0 .453-.078.63-.219l.02-.016 3.177-3.149 2.323.002c.265 0 .524-.106.713-.292a.994.994 0 0 0 .299-.712V4.369a1.01 1.01 0 0 0-1.012-1.004zm-6.363 14.584h-.516V5.373h5.867v12.575h-1.695a1.02 1.02 0 0 0-.63.217l-.025.02-1.93 2.007-.062-1.314-.002-.026a1.006 1.006 0 0 0-1.007-.903z"
  }));
};